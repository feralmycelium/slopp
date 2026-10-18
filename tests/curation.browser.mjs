import {chromium} from 'playwright';
import assert from 'node:assert/strict';
import {mkdtemp,rm,readFile,mkdir} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {resolve} from 'node:path';
import {createCurationHandler} from '../scripts/curation-server.mjs';
import {artFixture} from './art-fixture.js';

const root=resolve(import.meta.dirname,'..'),temp=await mkdtemp(tmpdir()+'/slopp-curation-browser-'),file=temp+'/curation.json';
const items=await artFixture();
const server=Bun.serve({hostname:'127.0.0.1',port:0,fetch:createCurationHandler({file,items:async()=>items})});
let browser;
try{
  await mkdir(root+'/.evidence/visibility',{recursive:true});browser=await chromium.launch({headless:true,args:['--mute-audio']});
  for(const failure of ['module','timeout']){
    const page=await browser.newPage();
    if(failure==='module')await page.route('**/quality.js*',route=>route.abort());
    else{
      await page.clock.install();await page.clock.pauseAt(new Date());
      await page.route('**/api/curation',()=>{});
    }
    await page.goto(String(server.url));
    if(failure==='timeout')await page.clock.fastForward(11000);
    await page.getByRole('button',{name:'Retry loading'}).waitFor({timeout:5000});
    assert(!((await page.locator('#status').textContent()).includes('Loading drawings')),'failed startup must give a recovery action');
    await page.unrouteAll({behavior:'ignoreErrors'});
    await page.getByRole('button',{name:'Retry loading'}).evaluate(button=>button.click());
    await page.locator('article').first().waitFor();
    const painted=await page.locator('canvas').first().evaluate(canvas=>canvas.getContext('2d').getImageData(0,0,canvas.width,canvas.height).data.some((value,i)=>i%4===3&&value>0));
    assert(painted,'retry must render actual drawing pixels');
    await page.close();console.log('curation: recovers from '+failure+' startup failure');
  }
  for(const [name,width,height]of [['desktop',1440,900],['phone',390,844]]){
    const page=await browser.newPage({viewport:{width,height}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
    await page.goto(String(server.url));await page.locator('article').first().waitFor();
    const id=await page.locator('article').first().getAttribute('data-id'),card=page.locator('article[data-id="'+id+'"]');
    await card.getByRole('button',{name:'Feature',exact:true}).click();await page.getByText('Saved.',{exact:false}).waitFor();
    assert.equal(JSON.parse(await readFile(file,'utf8'))[id],'feature');
    await page.reload();await card.getByRole('button',{name:'Feature',exact:true}).waitFor();
    assert.equal(await card.getByRole('button',{name:'Feature',exact:true}).getAttribute('aria-pressed'),'true');
    await card.getByRole('button',{name:'Less often',exact:true}).click();await page.getByText('Saved.',{exact:false}).waitFor();
    assert.equal(JSON.parse(await readFile(file,'utf8'))[id],'less');
    await page.getByRole('button',{name:'Undo last choice'}).click();await page.getByText('Last choice undone.',{exact:true}).waitFor();
    assert.equal(JSON.parse(await readFile(file,'utf8'))[id],'feature');
    await card.getByRole('button',{name:'Automatic',exact:true}).click();await page.getByText('Saved.',{exact:false}).waitFor();
    assert.equal(JSON.parse(await readFile(file,'utf8'))[id],undefined);
    assert.equal(await card.getByRole('button',{name:'Automatic',exact:true}).evaluate(e=>document.activeElement===e),true);
    await page.locator('#environment').selectOption('flow');
    assert.equal(await page.locator('article h2').evaluateAll(nodes=>nodes.every(n=>n.textContent==='Loose ends')),true);
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
    await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:root+'/.evidence/visibility/'+name+'-curation.png'});
    assert.deepEqual(errors,[]);await page.close();
  }
  console.log('PASS: curation choices save, survive reload, undo, restore automatic, retain focus and fit desktop/phone.');
}finally{await browser?.close();server.stop(true);await rm(temp,{recursive:true,force:true});}
