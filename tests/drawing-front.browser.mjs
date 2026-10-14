import {chromium} from 'playwright';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {mkdtemp,mkdir,rm,writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {resolve} from 'node:path';

const root=resolve(import.meta.dirname,'..'),tmp=await mkdtemp(tmpdir()+'/slopp-drawing-front-');
const shots=resolve(process.argv[2]??root+'/.evidence/drawing-front'),port=String(9100+Math.floor(Math.random()*200)),base='http://127.0.0.1:'+port;
const server=spawn('bun',['tests/serve.js'],{cwd:root,env:{...process.env,TEST_DATABASE:tmp+'/test.sqlite',TEST_PORT:port},stdio:'inherit'});
let browser;
try{
  for(let i=0;i<60;i++){try{if((await fetch(base+'/api/world')).ok)break;}catch{}await new Promise(r=>setTimeout(r,100));}
  await mkdir(shots,{recursive:true});
  browser=await chromium.launch({headless:true,args:['--mute-audio']});
  const results=[];
  for(const [name,width,height] of [['desktop',960,700],['phone',390,844]]){
    const context=await browser.newContext({viewport:{width,height},reducedMotion:'reduce'}),p=await context.newPage(),errors=[];
    p.on('pageerror',e=>errors.push(e.message));
    await p.goto(base);await p.waitForFunction(()=>window.manuscript?.ready);
    await p.evaluate(()=>{
      const {world,state}=manuscript;world.goHome();world.state.paused=true;
      state.items=[{id:'nearby-artwork',createdAt:'2000-01-01T00:00:00Z',x:0,y:19,space:{position:[0,0,19],rotation:[0,0,0,1],environment:'flow'},strokes:[{kind:'form',ink:'blue',seed:0,points:[[-500,-500,.5],[500,-500,.5],[500,500,.5],[-500,500,.5],[-500,-500,.5]]}]}];
      world.setItems(state.items);
    });
    const pixels=()=>p.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>{
      const source=manuscript.world.renderer.domElement,c=document.createElement('canvas');c.width=innerWidth;c.height=innerHeight;
      const ctx=c.getContext('2d');ctx.drawImage(source,0,0,c.width,c.height);
      const data=ctx.getImageData(c.width*.2,c.height*.3,c.width*.6,c.height*.4).data;
      let orange=0,blue=0;for(let i=0;i<data.length;i+=4){if(data[i]>220&&data[i+1]>65&&data[i+1]<150&&data[i+2]<80)orange++;if(data[i]<80&&data[i+1]<110&&data[i+2]>105)blue++;}
      resolve({orange,blue});
    })));
    const covered=await pixels();assert(covered.blue>width*height*.18,'nearby artwork must cover the drawing area');assert(covered.orange<10);
    await p.click('#make');await p.click('[data-ink="orange"]');
    for(const kind of ['line','ribbon','form']){
      await p.click('[data-kind="'+kind+'"]');
      await p.mouse.move(width*.3,height*.45);await p.mouse.down();
      await p.mouse.move(width*.7,height*.45,{steps:16});
      if(kind==='form'){await p.mouse.move(width*.5,height*.6,{steps:12});await p.mouse.move(width*.3,height*.45,{steps:12});}
      await p.mouse.up();
      await p.waitForFunction(()=>manuscript.state.draft?.strokes.length===1);
      await p.screenshot({path:shots+'/'+name+'-'+kind+'.png'});
      const visible=await pixels();results.push({name,kind,...visible});
      assert(visible.orange>80,kind+' must be drawn in front of the close artwork: '+JSON.stringify(visible));
      if(kind!=='form')await p.click('#undo');
    }
    const draft=await p.evaluate(()=>structuredClone(manuscript.state.draft));
    await p.click('#cancel');assert((await pixels()).orange<10,'closing drawing must remove its foreground preview');
    await p.click('#make');assert.deepEqual(await p.evaluate(()=>manuscript.state.draft),draft,'resuming must preserve the draft and its saved location');
    assert((await pixels()).orange>80,'resuming must restore the foreground preview');
    const captures=await p.evaluate(()=>{
      const count=source=>{const c=document.createElement('canvas');c.width=innerWidth;c.height=innerHeight;const ctx=c.getContext('2d');ctx.drawImage(source,0,0,c.width,c.height);const d=ctx.getImageData(c.width*.2,c.height*.3,c.width*.6,c.height*.4).data;let n=0;for(let i=0;i<d.length;i+=4)if(d[i]>220&&d[i+1]>65&&d[i+1]<150&&d[i+2]<80)n++;return n;};
      const still=count(manuscript.world.captureCanvas()),loop=manuscript.world.createLoopCapture(innerWidth,innerHeight);
      try{return {still,loop:count(loop.render(0))};}finally{loop.dispose();}
    });
    assert(captures.still>80&&captures.loop>80,'captures must preserve the same foreground drawing');
    await p.click('#leave');await p.waitForFunction(()=>!manuscript.world.state.making);
    const saved=await p.evaluate(id=>manuscript.state.items.find(item=>item.id===id),draft.id);
    const persistedDraft=JSON.parse(JSON.stringify(draft));
    assert.deepEqual(saved.space,persistedDraft.space);assert.deepEqual(saved.strokes,persistedDraft.strokes);
    assert((await pixels()).orange<10,'released artwork must return to normal spatial depth');
    assert.deepEqual(errors,[]);await context.close();
  }
  await writeFile(shots+'/results.json',JSON.stringify(results,null,2));
  console.log('PASS: line, ribbon and fill stay in front on desktop and phone; close/resume, capture and release preserve their intended depth.');
}finally{
  await browser?.close();server.kill('SIGTERM');if(server.exitCode===null)await new Promise(r=>server.once('close',r));await rm(tmp,{recursive:true,force:true});
}
