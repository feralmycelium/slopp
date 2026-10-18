import {chromium} from 'playwright';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {mkdtemp,mkdir,rm,writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {resolve} from 'node:path';
import {artFixture} from './art-fixture.js';

const root=resolve(import.meta.dirname,'..'),tmp=await mkdtemp(tmpdir()+'/slopp-passive-');
const shots=root+'/.evidence/passive',port=String(9800+Math.floor(Math.random()*80)),base='http://127.0.0.1:'+port;
const server=spawn('bun',['tests/serve.js'],{cwd:root,env:{...process.env,TEST_DATABASE:tmp+'/world.sqlite',TEST_PORT:port},stdio:'inherit'});
let browser;
try{
  for(let i=0;i<80;i++){try{if((await fetch(base+'/api/world')).ok)break;}catch{}await new Promise(r=>setTimeout(r,100));}
  const items=await artFixture();for(const item of items.slice(0,12))assert((await fetch(base+'/api/marks',{method:'POST',body:JSON.stringify(item)})).ok);
  await mkdir(shots,{recursive:true});browser=await chromium.launch({headless:true,args:['--mute-audio']});
  const results=[];
  for(const [name,width,height,reducedMotion] of [['desktop',1440,900,'no-preference'],['phone',390,844,'reduce']]){
    const context=await browser.newContext({viewport:{width,height},reducedMotion}),page=await context.newPage(),errors=[];
    page.on('pageerror',e=>errors.push(e.message));
    await page.clock.install({time:new Date('2026-10-16T00:00:00Z')});await page.clock.pauseAt(new Date('2026-10-16T00:00:01Z'));
    await page.goto(base);await page.waitForFunction(()=>window.manuscript?.ready,null,{polling:100});
    await page.evaluate(()=>{
      const w=manuscript.world;w.state.paused=true;document.getElementById('guide-close').click();
      const render=w.renderer.render.bind(w.renderer);w.renderer.render=(s,c)=>{window.scene=s;render(s,c);};
      window.ink=()=>{w.captureCanvas();const gl=w.renderer.getContext(),cw=gl.drawingBufferWidth,ch=gl.drawingBufferHeight;
        const x=Math.floor(cw*.175),y=Math.floor(ch*.175),width=Math.floor(cw*.65),height=Math.floor(ch*.65),pixels=new Uint8Array(width*height*4);
        gl.readPixels(x,y,width,height,gl.RGBA,gl.UNSIGNED_BYTE,pixels);let ink=0;
        for(let i=0;i<pixels.length;i+=4)if(Math.abs(pixels[i]-240)+Math.abs(pixels[i+1]-232)+Math.abs(pixels[i+2]-217)>35)ink++;
        return ink/(width*height);};
      window.emptyView=()=>{w.camera.position.set(0,0,10);w.state.pitch=.6;w.state.yaw=-1.6;w.look(0,0);};emptyView();
    });
    await page.clock.runFor(300);
    const before=await page.evaluate(()=>ink());await page.screenshot({path:shots+'/'+name+'-before.png'});
    assert(before<.001,'the test begins in an actually empty central view: '+before);
    await page.clock.fastForward(4500);
    assert.equal(await page.evaluate(()=>manuscript.world.stats.encounters??0),0,'quiet space lasts five seconds before an arrival');
    await page.clock.fastForward(750);
    assert.equal(await page.evaluate(()=>manuscript.world.stats.encounters),1,'empty space receives one distant artwork after five seconds');
    assert(await page.evaluate(()=>scene.children.filter(g=>g.userData.encounter).every(g=>g.userData.encounter.sourceId===null)),'the opening only introduces core artwork');
    const anchor=await page.evaluate(()=>scene.children.find(g=>g.userData.encounter).position.toArray());
    await page.clock.fastForward(2200);
    const appeared=await page.evaluate(()=>ink());assert(appeared>.001,'the arrival contains visible ink, not just a scene group');
    await page.screenshot({path:shots+'/'+name+'-arrival.png'});
    await page.clock.fastForward(12000);
    assert.equal(await page.evaluate(()=>manuscript.world.stats.encounters),1,'a populated view does not keep filling');
    assert.deepEqual(await page.evaluate(()=>scene.children.find(g=>g.userData.encounter).position.toArray()),anchor,'the arriving artwork stays anchored');
    await page.evaluate(()=>{manuscript.world.look(Math.PI/.004,0);});await page.clock.fastForward(500);
    await page.evaluate(()=>{manuscript.world.look(-Math.PI/.004,0);});await page.clock.fastForward(500);
    assert.deepEqual(await page.evaluate(()=>scene.children.find(g=>g.userData.encounter).position.toArray()),anchor,'turning away and back keeps the artwork in place');
    await page.evaluate(()=>{emptyView();manuscript.world.camera.position.x+=1000;manuscript.world.beginDrawing();});
    await page.clock.fastForward(6000);assert.equal(await page.evaluate(()=>manuscript.world.stats.encountersCreated),1,'drawing does not trigger arrivals');
    await page.evaluate(()=>{manuscript.world.finishDrawing();Object.defineProperty(document,'hidden',{configurable:true,value:true});document.dispatchEvent(new Event('visibilitychange'));});
    await page.clock.fastForward(60000);
    await page.evaluate(()=>{delete document.hidden;document.dispatchEvent(new Event('visibilitychange'));});await page.clock.fastForward(300);
    assert.equal(await page.evaluate(()=>manuscript.world.stats.encountersCreated),1,'hidden time cannot create an arrival burst');
    await page.clock.fastForward(5200);await page.clock.fastForward(4200);
    const community=await page.evaluate(()=>scene.children.some(g=>g.userData.encounter?.sourceId));
    assert(community,'after the opening, an empty view can introduce a saved community drawing');
    assert.equal((await (await fetch(base+'/api/world')).json()).total,Math.min(12,items.length),'automatic arrivals never publish drawings');
    const counts=[];
    for(let i=0;i<20;i++){
      await page.evaluate(()=>{manuscript.world.camera.position.x+=300;manuscript.world.look(0,0);});
      await page.clock.fastForward(300);await page.clock.fastForward(5300);await page.clock.fastForward(4300);
      counts.push(await page.evaluate(()=>manuscript.world.stats.encounters));
    }
    assert(Math.max(...counts)<=12,'long journeys bound the number of local appearances');
    assert(counts.at(-1)>0,'arrivals continue after repeated journeys without pointer interaction');
    await page.evaluate(()=>{const w=manuscript.world;emptyView();w.camera.position.x+=6000;w.state.speed=100;w.state.paused=false;});
    const departure=await page.evaluate(()=>({position:manuscript.world.camera.position.toArray(),created:manuscript.world.stats.encountersCreated}));
    let visibleFrames=0,maxEmpty=0,emptySeconds=0;
    for(let second=0;second<60;second++){
      await page.clock.runFor(1000);
      if(await page.evaluate(()=>ink())>.001){visibleFrames++;emptySeconds=0;}else{emptySeconds++;maxEmpty=Math.max(maxEmpty,emptySeconds);}
    }
    const arrival=await page.evaluate(()=>({position:manuscript.world.camera.position.toArray(),created:manuscript.world.stats.encountersCreated}));
    assert(Math.hypot(...arrival.position.map((v,i)=>v-departure.position[i]))>500,'the unattended check actually travels through the world');
    assert(arrival.created>departure.created,'new appearances continue during uninterrupted drift');
    assert(visibleFrames>30&&maxEmpty<=10,'the drifting view keeps finding visible art, allowing the five-second wait and fade');
    await page.screenshot({path:shots+'/'+name+'-later.png'});
    assert.deepEqual(errors,[]);results.push({name,before,appeared,community,counts,drift:{visibleFrames,maxEmpty,departure,arrival},errors});
    await context.close();console.log(name+': PASS empty-view arrival, anchored ink, quiet gaps, hidden/drawing guards and bounded long journey');
  }
  await writeFile(shots+'/results.json',JSON.stringify(results,null,2));
}finally{await browser?.close();server.kill('SIGTERM');if(server.exitCode===null)await new Promise(r=>server.once('close',r));await rm(tmp,{recursive:true,force:true});}
