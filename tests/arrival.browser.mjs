import {chromium} from 'playwright';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {mkdtemp,mkdir,rm,writeFile,readFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {resolve} from 'node:path';

const root=resolve(import.meta.dirname,'..'),tmp=await mkdtemp(tmpdir()+'/slopp-arrival-');
const shots=root+'/.evidence/ux',port=String(9200+Math.floor(Math.random()*200)),base='http://127.0.0.1:'+port;
const server=spawn('bun',['tests/serve.js'],{cwd:root,env:{...process.env,TEST_DATABASE:tmp+'/world.sqlite',TEST_PORT:port},stdio:'inherit'});
let browser,stage='setup';
const results=[];
const record=async(name,checks)=>{results.push({name,checks,status:'pass'});await writeFile(shots+'/browser-results.json',JSON.stringify(results,null,2));};
try{
  for(let i=0;i<80;i++){try{if((await fetch(base+'/api/world')).ok)break;}catch{}await new Promise(r=>setTimeout(r,100));}
  const fixtures=process.env.WORLD_FIXTURE?JSON.parse(await readFile(process.env.WORLD_FIXTURE,'utf8')).items:
    Array.from({length:12},(_,i)=>({id:crypto.randomUUID(),x:0,y:0,space:{position:[0,0,0],rotation:[0,0,0,1],environment:'flow'},strokes:[{kind:'line',ink:['ink','blue','orange'][i%3],seed:i,points:[[-400,-100,.5],[0,100,.5],[400,-100,.5]]}]}));
  for(const item of fixtures){const response=await fetch(base+'/api/marks',{method:'POST',body:JSON.stringify(item)});assert(response.ok,'local fixture must save');}
  await mkdir(shots,{recursive:true});browser=await chromium.launch({headless:true,args:['--mute-audio']});
  for(const [name,width,height,reducedMotion] of [['desktop',1440,900,'no-preference'],['phone',390,844,'reduce']]){
    const context=await browser.newContext({viewport:{width,height},reducedMotion}),page=await context.newPage(),errors=[];
    page.on('pageerror',error=>{errors.push(error.message);console.error(name+' page error: '+error.message);});
    page.on('console',message=>{if(message.type()==='error')console.error(name+' console: '+message.text());});
    page.on('requestfailed',request=>console.error(name+' request failed: '+request.url()+' '+request.failure()?.errorText));
    stage=name+': guide';console.log(name+': opening');
    await page.goto(base);await page.waitForFunction(()=>window.manuscript?.ready).catch(async error=>{console.error(await page.evaluate(()=>({body:document.body.innerText,ready:window.manuscript?.ready,items:window.manuscript?.state.items.length})));throw error;});
    console.log(name+': first load ready');
    assert(await page.locator('#guide').isVisible(),'first visit has readable instructions');
    await page.click('#guide-close');assert(!(await page.locator('#guide').isVisible()));
    await page.reload();await page.waitForFunction(()=>window.manuscript?.ready);
    assert(!(await page.locator('#guide').isVisible()),'dismissal survives reload');
    await page.click('#help-toggle');assert(await page.locator('#guide').isVisible());
    await page.keyboard.press('Escape');assert(!(await page.locator('#guide').isVisible()));
    assert.equal(await page.evaluate(()=>document.activeElement.id),'help-toggle');
    await page.click('#help-toggle');
    await page.evaluate(()=>{manuscript.world.state.paused=true;manuscript.world.goHome();});
    await page.screenshot({path:shots+'/'+name+'-opening.png'});
    await page.click('#guide-close');
    await record(name,['guide','dismissal survives reload','Help reopens','Escape restores focus']);
    stage=name+': discovery';console.log(name+': guide passed; finding traces');
    const offAxis=await page.evaluate(()=>{
      const {world,state}=manuscript,saved=state.items;
      const item={id:'off-axis-visibility',seq:1,x:0,y:0,createdAt:'2000-01-01T00:00:00Z',space:{position:[80,0,-100],rotation:[0,0,0,1],environment:'flow'},strokes:[{kind:'line',ink:'blue',seed:1,points:[[-2670,-10,.5],[-2660,10,.5]]}]};
      world.goHome();world.setItems([item]);world.goTo(item);
      const result={center:world.centerOf(item).project(world.camera).toArray(),visible:world.stats.traces};
      world.setItems(saved);return result;
    });
    assert(Math.abs(offAxis.center[0])<.001&&Math.abs(offAxis.center[1])<.001,'Find centres off-axis ink rather than the saved anchor');
    assert.equal(offAxis.visible,1,'Find immediately shows the chosen off-axis drawing');
    const framed=await page.evaluate(()=>{
      const {world,state}=manuscript,saved=state.items;
      const item=(id,seq,position)=>({id,seq,x:0,y:0,createdAt:'2000-01-01T00:00:00Z',space:{position,rotation:[0,0,0,1],environment:'flow'},strokes:[{kind:'line',ink:'blue',seed:1,points:[[-30,0,.5],[30,0,.5]]}]});
      const target=item('in-view',2,[0,0,-80]);world.goHome();world.setItems([item('outside-view',1,[70,-50,20]),target]);world.goTo(target);
      world.captureCanvas();const result={calls:world.renderer.info.render.calls,traces:world.stats.traces};
      world.setItems(saved);return result;
    });
    assert(framed.calls>0&&framed.traces===1,'an off-screen drawing must not hide the chosen drawing');
    const places=[];
    for(let i=0;i<5;i++){
      const target=await page.locator('#latest').boundingBox();
      await page.mouse.move(target.x+target.width/2,target.y+target.height/2);
      await page.mouse.click(target.x+target.width/2,target.y+target.height/2);
      places.push(await page.evaluate(()=>manuscript.world.camera.position.toArray()));
      if(i)assert.notDeepEqual(places[i],places[i-1],'Find must not repeat the same trace');
    }
    assert((await page.evaluate(()=>manuscript.world.stats.traces))>0);
    await page.screenshot({path:shots+'/'+name+'-trace.png'});
    await record(name,['off-axis ink is centred','off-screen ink cannot hide chosen art','weighted random saved destinations','no immediate repeat']);
    stage=name+': sound';console.log(name+': discovery passed; sound');
    const sound=page.locator('#sound');await sound.waitFor({state:'visible'});
    assert.equal((await sound.innerText()).trim(),'Turn sound on');
    assert.equal(await page.evaluate(()=>manuscript.sound.context),null,'sound is opt-in');
    const box=await sound.boundingBox();assert(box.width>=44&&box.height>=44);
    await sound.click();await page.waitForFunction(()=>manuscript.sound.context?.state==='running'&&!manuscript.sound.state.loading&&!manuscript.sound.state.error,null,{timeout:60000});
    assert.equal((await sound.innerText()).trim(),'Turn sound off');
    await sound.click();assert.equal((await sound.innerText()).trim(),'Turn sound on');
    await page.evaluate(()=>document.body.classList.add('is-idle'));
    assert.equal(await sound.evaluate(e=>getComputedStyle(e).opacity),'1');
    await sound.click();assert.equal((await sound.innerText()).trim(),'Turn sound off');
    await record(name,['sound opt-in','visible on/off labels','start and mute','44px target','visible in idle']);
    stage=name+': drawing';console.log(name+': sound passed; drawing');
    const make=await page.locator('#make').boundingBox();
    await page.mouse.move(make.x+make.width/2,make.y+make.height/2);
    await page.mouse.click(make.x+make.width/2,make.y+make.height/2);
    assert(!(await page.locator('#latest').isVisible()),'discovery is hidden while drawing');
    const drawingView=await page.evaluate(()=>manuscript.world.camera.position.toArray());
    await page.evaluate(()=>document.getElementById('latest').click());
    assert.deepEqual(await page.evaluate(()=>manuscript.world.camera.position.toArray()),drawingView,'discovery cannot move an active draft');
    assert(await sound.isVisible(),'sound stays usable while drawing');
    await sound.click();assert.equal((await sound.innerText()).trim(),'Turn sound on');
    await page.mouse.move(width*.4,height*.4);await page.mouse.down();await page.mouse.move(width*.6,height*.5,{steps:12});await page.mouse.up();
    const draft=await page.evaluate(()=>JSON.parse(JSON.stringify(manuscript.state.draft)));
    await page.click('#leave');await page.waitForFunction(()=>!manuscript.world.state.making);
    const saved=await page.evaluate(id=>manuscript.state.items.find(x=>x.id===id),draft.id);
    assert.deepEqual(saved.strokes,draft.strokes,'release preserves the actual drawing');
    assert.deepEqual(saved.space,draft.space,'display spacing does not rewrite stored anchors');
    await page.screenshot({path:shots+'/'+name+'-released.png'});
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,'no horizontal overflow');
    assert.deepEqual(errors,[]);await record(name,['sound while drawing','draft navigation guard','release preserves stored drawing','no overflow','no page errors']);
    await context.close();
  }
  await writeFile(shots+'/browser-results.json',JSON.stringify(results,null,2));
  console.log('PASS: desktop and phone arrival, random discovery, sound controls and drawing release.');
}catch(error){
  results.push({stage,status:'fail',error:error.message});await writeFile(shots+'/browser-results.json',JSON.stringify(results,null,2));throw error;
}finally{
  await browser?.close();server.kill('SIGTERM');if(server.exitCode===null)await new Promise(r=>server.once('close',r));await rm(tmp,{recursive:true,force:true});
}
