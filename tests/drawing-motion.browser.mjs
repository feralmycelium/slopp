import {chromium} from 'playwright';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {mkdtemp,mkdir,rm,writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {resolve} from 'node:path';

const root=resolve(import.meta.dirname,'..'),tmp=await mkdtemp(tmpdir()+'/slopp-drawing-motion-');
const shots=root+'/.evidence/drawing-motion',port=String(9700+Math.floor(Math.random()*30)),base='http://127.0.0.1:'+port;
const server=spawn('bun',['tests/serve.js'],{cwd:root,env:{...process.env,TEST_DATABASE:tmp+'/world.sqlite',TEST_PORT:port},stdio:'inherit'});
let browser;
try{
  for(let i=0;i<80;i++){try{if((await fetch(base+'/api/world')).ok)break;}catch{}await new Promise(r=>setTimeout(r,100));}
  await mkdir(shots,{recursive:true});browser=await chromium.launch({headless:true,args:['--mute-audio']});
  const results=[];
  for(const [name,width,height,reducedMotion] of [['desktop',1440,900,'no-preference'],['phone',390,844,'reduce']]){
    const context=await browser.newContext({viewport:{width,height},reducedMotion}),page=await context.newPage(),errors=[];
    page.on('pageerror',e=>errors.push(e.message));
    await page.clock.install({time:new Date('2026-10-16T00:00:00Z')});await page.clock.pauseAt(new Date('2026-10-16T00:00:01Z'));
    await page.goto(base);await page.waitForFunction(()=>window.manuscript?.ready,null,{polling:100});
    if(name==='desktop'){
      await page.click('#guide-close');await page.locator('#speed').focus();await page.keyboard.press('End');
      assert.equal(await page.evaluate(()=>manuscript.world.state.speed),100);
    }
    await page.click('#make');
    assert.equal(await page.evaluate(()=>manuscript.world.state.speed),name==='phone'?0:10,'drawing slows a fast journey without starting a stationary one');
    const ahead=await page.evaluate(()=>{
      const w=manuscript.world,position=w.camera.position.clone(),draft=manuscript.state.draft;
      w.camera.position.z-=100;const first=w.drawingPoint(innerWidth/2,innerHeight/2),anchor=[...draft.space.position];
      draft.strokes.push({kind:'line',ink:'ink',seed:1,points:[first]});
      w.camera.position.z-=30;const point=w.drawingPoint(innerWidth/2,innerHeight/2),after=[...draft.space.position];
      draft.strokes=[];w.camera.position.copy(position);w.drawingPoint(innerWidth/2,innerHeight/2);w.camera.updateMatrixWorld();return {first,point,anchor,after};
    });
    assert(ahead.first&&Math.abs(ahead.first[3])<.001,'an empty draft starts where the first mark is made, even after a long drift');
    assert(ahead.point&&Math.abs(ahead.point[3]+1000)<.001,'the pen still works after travelling through the original drawing plane');
    assert.deepEqual(ahead.after,ahead.anchor,'travel must not move the original drawing anchor');
    if(name==='phone'){
      const before=await page.evaluate(()=>manuscript.world.camera.position.toArray());
      await page.clock.runFor(300);
      assert.deepEqual(await page.evaluate(()=>manuscript.world.camera.position.toArray()),before,'reduced motion starts still while drawing');
      await page.click('#drawing-drift');
      assert.equal(await page.evaluate(()=>manuscript.world.state.speed),10,'starting drift while drawing uses the gentle pace');
    }
    await page.locator('#drawing-speed').focus();await page.keyboard.press('End');
    assert.equal(await page.evaluate(()=>manuscript.world.state.speed),100,'the visible drawing slider can speed travel back up');
    assert.equal(await page.locator('#speed').inputValue(),'100','both speed controls stay in sync');
    const before=await page.evaluate(()=>manuscript.world.camera.position.toArray());
    await page.mouse.move(width*.5,height*.46);await page.mouse.down();
    await page.clock.runFor(500);
    const after=await page.evaluate(()=>manuscript.world.camera.position.toArray());
    assert(Math.hypot(...after.map((v,i)=>v-before[i]))>.1,'drawing must not hold the camera still');
    await page.mouse.move(width*.65,height*.5,{steps:12});await page.clock.runFor(300);await page.mouse.up();
    let draft=await page.evaluate(()=>structuredClone(manuscript.state.draft));
    assert(draft.strokes[0].points.length>3,'holding the pen while travelling leaves a trail');
    assert(Math.abs(draft.strokes[0].points.at(-1)[3]-draft.strokes[0].points[0][3])>5,'movement is stored as depth');
    await page.click('#drawing-drift');
    await page.click('#cancel');
    assert(!(await (await fetch(base+'/api/world')).json()).items.some(x=>x.id===draft.id),'closing an unfinished drawing never publishes it');
    await page.reload();await page.waitForFunction(()=>window.manuscript?.ready,null,{polling:100});
    if(name==='desktop'){
      await page.locator('#speed').focus();await page.keyboard.press('End');await page.keyboard.press('ArrowLeft');
    }
    const previousPace=await page.evaluate(()=>({speed:manuscript.world.state.speed,paused:manuscript.world.state.paused}));
    await page.click('#make');
    assert.deepEqual(await page.evaluate(()=>manuscript.state.draft.strokes),JSON.parse(JSON.stringify(draft.strokes)),'a private draft survives Close and reload');
    if(await page.evaluate(()=>!manuscript.world.state.paused&&manuscript.world.state.speed>0))await page.click('#drawing-drift');
    const stopped=await page.evaluate(()=>manuscript.world.camera.position.toArray());await page.clock.runFor(300);
    assert.deepEqual(await page.evaluate(()=>manuscript.world.camera.position.toArray()),stopped,'Pause drift holds the view still');
    await page.locator('#world').focus();await page.keyboard.down('d');await page.clock.runFor(300);await page.keyboard.up('d');
    assert((await page.evaluate(()=>manuscript.world.camera.position.x))>stopped[0],'movement keys work while drawing');
    await page.click('[data-kind="form"]');await page.locator('#drawing-speed').focus();await page.keyboard.press('End');
    await page.mouse.move(width*.35,height*.5);await page.mouse.down();
    await page.mouse.move(width*.45,height*.6,{steps:6});await page.clock.runFor(100);
    await page.mouse.move(width*.55,height*.5,{steps:6});await page.clock.runFor(100);
    await page.mouse.move(width*.35,height*.5,{steps:6});await page.mouse.up();await page.click('#drawing-drift');
    await page.screenshot({path:shots+'/'+name+'-drawing.png'});
    assert(await page.locator('#drawing-drift').isVisible());
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
    draft=await page.evaluate(()=>structuredClone(manuscript.state.draft));
    await page.route('**/api/marks',route=>route.fulfill({status:503,contentType:'application/json',body:JSON.stringify({message:'Release unavailable. Try again.'})}));
    await page.click('#leave');await page.waitForFunction(()=>!manuscript.state.saving&&document.getElementById('status').textContent==='Release unavailable. Try again.',null,{polling:100});
    assert.equal(await page.evaluate(()=>manuscript.world.state.making),true,'a failed release keeps the private drawing open');
    assert.deepEqual(await page.evaluate(()=>({speed:manuscript.world.state.speed,paused:manuscript.world.state.paused})),{speed:100,paused:true},'a failed release keeps the drawing pace');
    await page.unroute('**/api/marks');
    await page.click('#leave');await page.waitForFunction(()=>!manuscript.world.state.making,null,{polling:100});
    assert.deepEqual(await page.evaluate(()=>({speed:manuscript.world.state.speed,paused:manuscript.world.state.paused})),previousPace,'Let it go restores the pace and pause setting from before drawing');
    assert.equal(await page.locator('#speed').inputValue(),String(previousPace.speed),'the exploration slider shows the restored pace');
    const saved=(await (await fetch(base+'/api/world')).json()).items.find(x=>x.id===draft.id);
    assert.deepEqual(saved.strokes,JSON.parse(JSON.stringify(draft.strokes)),'published depth must survive server storage');
    await page.reload();await page.waitForFunction(()=>window.manuscript?.ready,null,{polling:100});
    await page.evaluate(id=>{const w=manuscript.world,item=manuscript.state.items.find(i=>i.id===id);w.state.paused=true;w.goTo(item);const render=w.renderer.render.bind(w.renderer);w.renderer.render=(s,c)=>{window.scene=s;render(s,c);};w.captureCanvas();const anchor=w.placement(item).position;window.savedGroup=scene.children.find(g=>!g.userData.environment&&g.position.toArray().every((v,i)=>Math.abs(v-anchor[i])<.001));},draft.id);
    const depths=await page.evaluate(()=>savedGroup.children.filter(c=>c.geometry).map(c=>{c.geometry.computeBoundingBox();return c.geometry.boundingBox.max.z-c.geometry.boundingBox.min.z;}));
    const fillDepth=await page.evaluate(()=>savedGroup.children.filter(c=>c.userData.fill).map(c=>{c.geometry.computeBoundingBox();return c.geometry.boundingBox.max.z-c.geometry.boundingBox.min.z;}));
    assert(fillDepth.some(span=>span>.1),'filled shapes also retain their recorded depth');
    assert(depths.some(span=>span>.2),'reloaded geometry retains the travelling stroke depth');
    await page.screenshot({path:shots+'/'+name+'-reloaded.png'});
    const stillDepth=await page.evaluate(()=>{
      const w=manuscript.world,item={id:'still-drawing',seq:999,x:0,y:0,createdAt:'2000-01-01T00:00:00Z',space:{position:[0,0,0],rotation:[0,0,0,1],environment:'flow'},strokes:[{kind:'line',ink:'ink',seed:42,points:[[-100,0,.5,0],[0,100,.5,0],[100,0,.5,0]]}]};
      w.setItems([item]);w.goTo(item);w.captureCanvas();
      const anchor=w.placement(item).position,group=scene.children.find(g=>!g.userData.environment&&g.position.toArray().every((v,i)=>Math.abs(v-anchor[i])<.001));
      return Math.max(...group.children.filter(c=>c.geometry).map(c=>{c.geometry.computeBoundingBox();return c.geometry.boundingBox.max.z-c.geometry.boundingBox.min.z;}));
    });
    assert(stillDepth>.5,'drawing while stationary must retain the original sculptural depth');
    assert.deepEqual(errors,[]);results.push({name,points:draft.strokes[0].points.length,depthSpan:Math.max(...depths),errors});
    await context.close();console.log(name+': PASS drawing during drift, pen held still, pause, keyboard, persistence and rendered depth');
  }
  await writeFile(shots+'/results.json',JSON.stringify(results,null,2));
}finally{await browser?.close();server.kill('SIGTERM');if(server.exitCode===null)await new Promise(r=>server.once('close',r));await rm(tmp,{recursive:true,force:true});}
