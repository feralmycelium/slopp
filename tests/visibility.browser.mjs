import {chromium} from 'playwright';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {mkdtemp,mkdir,rm,writeFile} from 'node:fs/promises';
import {artFixture} from './art-fixture.js';
import {tmpdir} from 'node:os';
import {resolve} from 'node:path';

const root=resolve(import.meta.dirname,'..'),tmp=await mkdtemp(tmpdir()+'/slopp-visibility-');
const shots=root+'/.evidence/visibility',port=String(9400+Math.floor(Math.random()*200)),base='http://127.0.0.1:'+port;
const server=spawn('bun',['tests/serve.js'],{cwd:root,env:{...process.env,TEST_DATABASE:tmp+'/world.sqlite',TEST_PORT:port},stdio:'inherit'});
let browser;
try{
  for(let i=0;i<80;i++){try{if((await fetch(base+'/api/world')).ok)break;}catch{}await new Promise(r=>setTimeout(r,100));}
  for(const item of await artFixture()){const response=await fetch(base+'/api/marks',{method:'POST',body:JSON.stringify(item)});assert(response.ok);}
  await mkdir(shots,{recursive:true});browser=await chromium.launch({headless:true,args:['--mute-audio']});
  const results=[];
  for(const [name,width,height] of [['desktop',1440,900],['phone',390,844]]){
    const context=await browser.newContext({viewport:{width,height},reducedMotion:'reduce'}),page=await context.newPage(),errors=[];
    page.on('pageerror',error=>{errors.push(error.message);console.error(name,error.message);});
    console.log(name+': opening');
    await page.clock.install({time:new Date('2026-10-16T00:00:00Z')});await page.clock.pauseAt(new Date('2026-10-16T00:00:01Z'));
    await page.goto(base);await page.waitForFunction(()=>window.manuscript?.ready,null,{polling:100,timeout:30000}).catch(async error=>{console.error(await page.evaluate(()=>({ready:window.manuscript?.ready,stats:window.manuscript?.world.stats,text:document.body.innerText.slice(0,400)})));throw error;});
    await page.evaluate(()=>{
      const w=manuscript.world;w.goHome();w.state.paused=true;
      const render=w.renderer.render.bind(w.renderer);
      w.renderer.render=(scene,camera)=>{window.artScene=scene;return render(scene,camera);};
      w.captureCanvas();document.getElementById('guide-close').click();
    });
    const opening=await page.evaluate(()=>({traces:manuscript.world.stats.traces,core:artScene.children.filter(g=>g.userData.environment==='flow'&&g.position.x===0&&g.position.y===0&&g.position.z===-12).map(g=>({visible:g.visible,scale:g.scale.x}))}));
    assert.deepEqual(opening.core,[{visible:true,scale:1}],'the original opening artwork must remain visible at full scale');
    assert.equal(opening.traces,0,'community drawings must not appear on arrival');
    console.log(name+': core opening passed');
    await page.screenshot({path:shots+'/'+name+'-opening.png'});
    await page.clock.fastForward(20000);
    assert.equal(await page.evaluate(()=>manuscript.world.stats.traces),0,'opening remains our art for the first thirty seconds');
    await page.evaluate(()=>{Object.defineProperty(document,'hidden',{configurable:true,value:true});document.dispatchEvent(new Event('visibilitychange'));});
    await page.clock.fastForward(300000);
    await page.evaluate(()=>{delete document.hidden;document.dispatchEvent(new Event('visibilitychange'));});
    await page.clock.fastForward(1000);
    assert.equal(await page.evaluate(()=>manuscript.world.stats.traces),0,'time in a hidden tab does not end the opening');
    await page.clock.fastForward(10000);
    assert((await page.evaluate(()=>manuscript.world.stats.traces))>0,'community drawings arrive automatically after thirty seconds without pressing Find');
    await page.screenshot({path:shots+'/'+name+'-thirty-seconds.png'});
    for(let i=0;i<3;i++)await page.clock.fastForward(8500);
    assert((await page.evaluate(()=>manuscript.world.stats.traces))>=4,'community drawings keep arriving one at a time about every eight seconds');
    await page.screenshot({path:shots+'/'+name+'-one-minute.png'});
    console.log(name+': timed introduction passed');
    const discontinuities=await page.evaluate(async()=>{
      const w=manuscript.world;w.captureCanvas();const originals=artScene.children.filter(g=>!g.userData.environment);
      const missing=[];window.continuityOriginals=originals;
      return {ids:originals.map(g=>g.uuid),missing};
    });
    for(let i=0;i<24;i++){
      await page.evaluate(()=>{manuscript.world.look(15,0);manuscript.world.camera.position.z-=.5;});await page.clock.fastForward(650);
      const missing=await page.evaluate(()=>continuityOriginals.filter(g=>!g.parent||!g.visible).map(g=>g.uuid));
      assert.deepEqual(missing,[],'turning and moving must not remove or hide a nearby drawing');
    }
    await page.screenshot({path:shots+'/'+name+'-community-turn.png'});
    const journey=[];
    for(const z of [-160,-280,-400]){
      await page.evaluate(z=>{const w=manuscript.world;w.camera.position.set(0,0,z);w.state.yaw=0;w.state.pitch=0;},z);
      await page.clock.fastForward(650);
      const nearby=await page.evaluate(()=>artScene.children.filter(g=>g.userData.environment&&g.position.distanceTo(manuscript.world.camera.position)<130).length);
      journey.push({z,nearby});await page.screenshot({path:shots+'/'+name+'-journey-'+Math.abs(z)+'.png'});
    }
    results.push({name,opening,retainedThroughTurning:discontinuities.ids.length,journey,errors});
    assert.deepEqual(errors,[]);await context.close();
  }
  await writeFile(shots+'/results.json',JSON.stringify(results,null,2));
  console.log('PASS: full-size core opening, thirty-second automatic introduction, eight-second arrivals, hidden time excluded, stable drawings through turning and movement, desktop and phone.');
}finally{
  await browser?.close();server.kill('SIGTERM');if(server.exitCode===null)await new Promise(r=>server.once('close',r));await rm(tmp,{recursive:true,force:true});
}
