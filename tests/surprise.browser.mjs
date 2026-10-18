import {chromium} from 'playwright';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {mkdtemp,mkdir,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {resolve} from 'node:path';

const root=resolve(import.meta.dirname,'..'),tmp=await mkdtemp(tmpdir()+'/slopp-surprise-');
const shots=root+'/.evidence/surprise',port=String(9600+Math.floor(Math.random()*100)),base='http://127.0.0.1:'+port;
const server=spawn('bun',['tests/serve.js'],{cwd:root,env:{...process.env,TEST_DATABASE:tmp+'/world.sqlite',TEST_PORT:port},stdio:'inherit'});
let browser;
try{
  for(let i=0;i<80;i++){try{if((await fetch(base+'/api/world')).ok)break;}catch{}await new Promise(r=>setTimeout(r,100));}
  await mkdir(shots,{recursive:true});browser=await chromium.launch({headless:true,args:['--mute-audio']});
  for(const [name,width,height,reducedMotion] of [['desktop',1440,900,'no-preference'],['phone',390,844,'reduce']]){
    const context=await browser.newContext({viewport:{width,height},reducedMotion}),page=await context.newPage(),errors=[];
    page.on('pageerror',error=>errors.push(error.message));
    await page.clock.install();await page.clock.pauseAt(new Date());
    await page.goto(base);await page.waitForFunction(()=>window.manuscript?.ready,null,{polling:100});
    const before=await page.evaluate(()=>{
      const w=manuscript.world;document.getElementById('guide-close').click();w.state.speed=0;w.state.paused=false;w.look(45,-20);
      const render=w.renderer.render.bind(w.renderer);w.renderer.render=(scene,camera)=>{window.artScene=scene;return render(scene,camera);};
      return {position:w.camera.position.toArray(),rotation:w.camera.quaternion.toArray(),ids:manuscript.state.items.map(item=>item.id)};
    });
    await page.evaluate(()=>document.getElementById('surprise').click());
    await page.waitForFunction(()=>!manuscript.state.saving,null,{polling:100});
    const released=await page.evaluate(ids=>{
      const w=manuscript.world,item=manuscript.state.items.find(item=>!ids.includes(item.id));w.captureCanvas();
      window.releasedItem=item;window.releasedGroup=artScene.children.find(group=>!group.userData.environment&&group.position.toArray().every((value,i)=>value===item.space.position[i]));
      const g=releasedGroup;
      return {position:w.camera.position.toArray(),rotation:w.camera.quaternion.toArray(),space:item.space,placement:w.placement(item),visible:!!g,depth:g?.scale.z,partial:g?.children.some(c=>c.geometry.drawRange.count<c.userData.total||c.scale.y<1),opacity:g?.children.map(c=>c.material.opacity)};
    },before.ids);
    assert.deepEqual(released.position,before.position,'Surprise must not move the camera');
    assert.deepEqual(released.rotation,before.rotation,'Surprise must not turn the camera');
    assert.deepEqual(released.placement,released.space,'new artwork must appear at its original drawing anchor');
    assert(released.visible,'the surprise is immediately present in front of the viewer');
    assert(released.opacity.every(value=>value===1),'own drawing does not wait for the community introduction fade');
    assert.equal(released.partial,reducedMotion!=='reduce','motion preference determines whether strokes draw progressively');
    await page.clock.runFor(900);await page.screenshot({path:shots+'/'+name+'-drawing.png'});
    for(let layer=0;layer<2;layer++){
      await page.locator('#surprise').evaluate(button=>button.click());
      await page.waitForFunction(()=>!manuscript.state.saving,null,{polling:100});
    }
    const layers=await page.evaluate(ids=>{
      const w=manuscript.world;w.captureCanvas();
      return manuscript.state.items.filter(item=>!ids.includes(item.id)).map(item=>({space:w.placement(item),visible:artScene.children.some(group=>!group.userData.environment&&group.position.toArray().every((v,i)=>v===w.placement(item).position[i]))}));
    },before.ids);
    assert.equal(layers.length,3,'each press adds a new layer before the first animation has finished');
    assert.equal(await page.evaluate(()=>manuscript.world.stats.traces),3,'three independent drawings must be rendered together');
    assert(layers.every(layer=>layer.visible),'all layers must remain present');
    for(const layer of layers)assert.deepEqual(layer.space,released.space,'repeated presses layer at the same drawing anchor');
    await page.clock.runFor(2400);
    const after=await page.evaluate(()=>{
      const w=manuscript.world;w.setItems(manuscript.state.items);dispatchEvent(new Event('resize'));w.captureCanvas();
      return {position:w.camera.position.toArray(),placement:w.placement(releasedItem),attached:releasedGroup.parent===artScene,depth:releasedGroup.scale.z,complete:releasedGroup.children.every(c=>c.geometry.drawRange.count===Infinity&&c.scale.y===1)};
    });
    assert.deepEqual(after.position,before.position,'sync and resize must not move the camera after a surprise');
    assert.deepEqual(after.placement,released.space,'sync must retain the released drawing in place');
    await page.screenshot({path:shots+'/'+name+'-complete.png'});
    assert(after.attached&&after.complete&&after.depth===1,'the same drawing finishes and remains visible: '+JSON.stringify(after));
    assert(await page.evaluate(()=>releasedGroup.parent===artScene),'later surprises must not remove the previous drawing');
    assert.deepEqual(errors,[]);await context.close();console.log(name+': Surprise stays in front, completes and survives sync.');
  }
}finally{await browser?.close();server.kill('SIGTERM');if(server.exitCode===null)await new Promise(r=>server.once('close',r));await rm(tmp,{recursive:true,force:true});}
