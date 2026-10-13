import {chromium} from 'playwright';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {mkdtemp,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {resolve} from 'node:path';

const root=resolve(import.meta.dirname,'..'),tmp=await mkdtemp(tmpdir()+'/slop-browser-');
const server=spawn('bun',['tests/serve.js'],{cwd:root,env:{...process.env,TEST_DATABASE:tmp+'/test.sqlite'},stdio:'inherit'});
let browser;
const errors=[],base='http://127.0.0.1:8771';
async function visit(context){const p=await context.newPage();p.on('pageerror',e=>errors.push(e.message));await p.goto(base);await p.waitForFunction(()=>window.manuscript?.ready);return p;}
async function draw(p,x=500,y=390){await p.mouse.move(x,y);await p.mouse.down();await p.mouse.move(x+180,y+60,{steps:20});await p.mouse.move(x+240,y-30,{steps:12});await p.mouse.up();}
try{
  let ready=false;
  for(let i=0;i<50;i++){try{if((await fetch(base+'/api/world')).ok){ready=true;break;}}catch{}await new Promise(r=>setTimeout(r,100));}
  assert(ready,'The isolated test server must start.');
  browser=await chromium.launch({headless:true});
  const a=await browser.newContext({viewport:{width:1280,height:900},reducedMotion:'reduce'});
  const p=await visit(a);
  assert.equal(await p.locator('#pause').getAttribute('aria-pressed'),'true');
  const still=await p.evaluate(()=>({position:manuscript.world.camera.position.toArray(),time:manuscript.world.state.time}));
  await p.waitForTimeout(250);
  assert.deepEqual(await p.evaluate(()=>({position:manuscript.world.camera.position.toArray(),time:manuscript.world.state.time})),still);
  await p.locator('#world').focus();await p.keyboard.down('ArrowRight');await p.waitForTimeout(150);await p.keyboard.up('ArrowRight');
  assert((await p.evaluate(()=>manuscript.world.state.yaw))<0,'Keyboard turning must work while paused.');
  await p.click('#elsewhere');await p.waitForFunction(()=>document.querySelector('#environment-name').textContent==='Soft geometry');
  await p.click('#make');assert.equal(await p.locator('[data-ink]').count(),4);
  await p.click('[data-ink="pink"]');await draw(p);await draw(p,560,460);await p.click('#undo');
  assert.equal(await p.evaluate(()=>manuscript.state.draft.strokes.length),1);
  const draft=await p.evaluate(()=>JSON.parse(JSON.stringify(manuscript.state.draft)));
  await p.route('**/api/marks',r=>r.fulfill({status:503,contentType:'application/json',body:JSON.stringify({error:'storage_unavailable',recoverable:true})}));
  await p.click('#leave');await p.waitForFunction(()=>!manuscript.state.saving);
  assert.match(await p.locator('#status').innerText(),/try.*again/i);
  await p.unroute('**/api/marks');await p.reload();await p.waitForFunction(()=>manuscript.ready);
  await p.click('#make');assert.deepEqual(await p.evaluate(()=>manuscript.state.draft),draft,'A failed release must survive reload.');
  await p.click('#leave');await p.waitForFunction(()=>!manuscript.world.state.making);
  const b=await browser.newContext({viewport:{width:1280,height:900},reducedMotion:'reduce'}),other=await visit(b);
  const saved=await other.evaluate(()=>manuscript.state.items[0]);
  assert.deepEqual(saved.space,draft.space);assert.deepEqual(saved.strokes,draft.strokes);
  await other.click('#latest');assert.deepEqual(await other.evaluate(()=>manuscript.world.camera.position.toArray()),await p.evaluate(()=>manuscript.world.camera.position.toArray()));
  await other.click('#surprise');await other.waitForFunction(()=>manuscript.state.items.length===2&&!manuscript.state.saving);
  await p.bringToFront();await p.waitForFunction(()=>manuscript.state.items.length===2,null,{timeout:10000});
  await p.reload();await p.waitForFunction(()=>manuscript.ready);assert.equal(await p.evaluate(()=>manuscript.state.items.length),2);
  await p.click('#about-toggle');assert.equal(await p.locator('#about').evaluate(e=>e.open),true);await p.keyboard.press('Escape');
  assert.equal(await p.locator('#about').evaluate(e=>e.open),false);assert.equal(await p.evaluate(()=>document.activeElement.id),'about-toggle');
  const phone=await visit(await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,reducedMotion:'reduce'}));
  await phone.click('#make');await draw(phone,70,340);
  assert(await phone.locator('#leave').isEnabled(),'A small-screen drawing can be released.');
  const box=await phone.locator('.drawing-tools').boundingBox(),foot=await phone.locator('.drawing-footnote').boundingBox();
  assert(box.x>=0&&box.x+box.width<=390&&foot.y>=box.y+box.height&&foot.y+foot.height<=844,'The drawing controls and reuse note must fit on a phone.');
  await phone.click('#cancel');
  assert.deepEqual(errors,[]);
  console.log('PASS: explore, local palette, draw/undo, failed-save recovery, shared sync, persistence, reduced motion, phone and dialog focus.');
}finally{
  await browser?.close();server.kill('SIGTERM');
  if(server.exitCode===null)await new Promise(r=>server.once('close',r));
  await rm(tmp,{recursive:true,force:true});
}
