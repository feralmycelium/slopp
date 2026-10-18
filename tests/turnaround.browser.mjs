import {chromium} from 'playwright';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {mkdtemp,mkdir,rm,writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {resolve} from 'node:path';

const root=resolve(import.meta.dirname,'..'),tmp=await mkdtemp(tmpdir()+'/slopp-turnaround-'),shots=root+'/.evidence/turnaround';
const server=spawn('bun',['-e',`import {createDatabase,createApp} from './server/local.js';
  const {db}=createDatabase(process.env.TEST_DATABASE);
  const server=Bun.serve({hostname:'127.0.0.1',port:0,fetch:createApp({db}).fetch});
  console.log(server.url.origin);`],{cwd:root,env:{...process.env,TEST_DATABASE:tmp+'/world.sqlite'},stdio:['ignore','pipe','inherit']});
let browser;
try{
  const base=await new Promise((resolve,reject)=>{
    const timer=setTimeout(()=>reject(new Error('Temporary preview did not start')),10000);let output='';
    server.stdout.on('data',chunk=>{output+=chunk;const url=output.match(/http:\/\/127\.0\.0\.1:\d+/)?.[0];if(url){clearTimeout(timer);resolve(url);}});
    server.once('error',reject);server.once('exit',code=>{clearTimeout(timer);reject(new Error('Temporary preview exited: '+code));});
  });
  await mkdir(shots,{recursive:true});browser=await chromium.launch({headless:true,args:['--mute-audio']});const results=[];
  for(const [name,width,height]of [['desktop',1200,800],['phone',390,844]]){
    const page=await browser.newPage({viewport:{width,height},reducedMotion:'reduce'}),errors=[];
    page.on('pageerror',e=>errors.push(e.message));await page.clock.install();await page.clock.pauseAt(new Date());
    await page.goto(base);await page.waitForFunction(()=>window.manuscript?.ready,null,{polling:100});
    await page.locator('#guide-close').click();
    for(const pitch of [0,.6,-.6,1.4]){
      const before=await page.evaluate(pitch=>{const w=manuscript.world;w.goHome();w.state.paused=true;w.look(-.4/.004,-pitch/.004);return {position:w.camera.position.toArray(),direction:w.camera.getWorldDirection(w.camera.position.clone()).toArray()};},pitch);
      await page.locator('#turn').click();
      const after=await page.evaluate(()=>{const w=manuscript.world;return {position:w.camera.position.toArray(),direction:w.camera.getWorldDirection(w.camera.position.clone()).toArray()};});
      const dot=before.direction.reduce((sum,v,i)=>sum+v*after.direction[i],0);
      assert(dot<-.999999,name+' Turn around must reverse the full gaze, pitch '+pitch+'; direction dot '+dot);
      assert.deepEqual(after.position,before.position,'turning does not teleport the visitor');
      await page.locator('#turn').click();
      const restored=await page.evaluate(()=>{const w=manuscript.world;return w.camera.getWorldDirection(w.camera.position.clone()).toArray();});
      assert(restored.every((v,i)=>Math.abs(v-before.direction[i])<1e-6),'two turns restore the original view');
    }
    await page.evaluate(()=>{const w=manuscript.world;w.goHome();w.look(-.4/.004,-.6/.004);});
    const ids=await page.evaluate(()=>manuscript.state.items.map(i=>i.id));
    await page.locator('#surprise').click();await page.waitForFunction(()=>!manuscript.state.saving,null,{polling:100});
    const original=await page.evaluate(ids=>{const w=manuscript.world;window.turnItem=manuscript.state.items.find(i=>!ids.includes(i.id));const anchor=w.placement(turnItem);w.camera.position.addScaledVector(w.camera.getWorldDirection(w.camera.position.clone()),60);return anchor;},ids);
    await page.clock.fastForward(700);await page.locator('#turn').click();await page.clock.fastForward(300);
    const returned=await page.evaluate(()=>{const w=manuscript.world;w.captureCanvas();return {anchor:w.placement(turnItem),screen:w.centerOf(turnItem).project(w.camera).toArray()};});
    assert.deepEqual(returned.anchor,original,'the artwork just passed keeps its original anchor');
    assert(Math.abs(returned.screen[0])<1&&Math.abs(returned.screen[1])<1&&Math.abs(returned.screen[2])<1,'the drawing just passed is back in view');
    await page.screenshot({path:shots+'/'+name+'-returned.png'});assert.deepEqual(errors,[]);results.push({name,returned,errors});await page.close();console.log(name+': exact reversal, double turn and passed artwork visible');
  }
  await writeFile(shots+'/results.json',JSON.stringify(results,null,2));
}finally{await browser?.close();server.kill('SIGTERM');if(server.exitCode===null)await new Promise(r=>server.once('close',r));await rm(tmp,{recursive:true,force:true});}
