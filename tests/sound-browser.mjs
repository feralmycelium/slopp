import {chromium} from 'playwright';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {mkdtemp,rm,mkdir,writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {resolve} from 'node:path';

const root=resolve(import.meta.dirname,'..'),shots=resolve(process.argv[2]??root+'/.evidence/sound-qa'),tmp=await mkdtemp(tmpdir()+'/slopp-sound-qa-');
const port=String(8800+Math.floor(Math.random()*150)),base='http://127.0.0.1:'+port;
const server=spawn('bun',['tests/serve.js'],{cwd:root,env:{...process.env,TEST_DATABASE:tmp+'/test.sqlite',TEST_PORT:port},stdio:'inherit'});
let browser;const errors=[],passed=[],measured={};
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const instrumentAudio=()=>{
  window.__contexts=0;const Native=window.AudioContext;window.AudioContext=class extends Native{constructor(...a){super(...a);window.__contexts++;}};
  const connect=AudioNode.prototype.connect;
  AudioNode.prototype.connect=function(dest,...rest){
    const out=connect.call(this,dest,...rest);
    if(dest instanceof AudioDestinationNode){const c=this.context;if(!c.__tap){c.__tap=c.createAnalyser();c.__tap.fftSize=256;}connect.call(this,c.__tap);window.__tapCtx=c;}
    return out;
  };
  window.__rms=()=>{const a=window.__tapCtx?.__tap;if(!a)return 0;const b=new Float32Array(a.fftSize);a.getFloatTimeDomainData(b);let s=0;for(const v of b)s+=v*v;return Math.sqrt(s/b.length);};
  window.__armOnset=()=>{
    window.__onset=new Promise(res=>{
      document.querySelector('#world').addEventListener('pointerdown',e=>{
        const ctx=manuscript.sound.context,t0=e.timeStamp,handlerAt=performance.now(),ctxAt=ctx.currentTime,baseline=window.__rms();
        const id=setInterval(()=>{const r=window.__rms(),now=performance.now();
          if(r>Math.max(baseline*3,2e-4)){clearInterval(id);res({t0,handlerDelay:handlerAt-t0,ctxAt,baseline,detectedLag:now-t0,latency:(ctx.baseLatency+(ctx.outputLatency||0))*1000});}
          else if(now-t0>1500){clearInterval(id);res({t0,handlerDelay:handlerAt-t0,ctxAt,baseline,detectedLag:null,latency:(ctx.baseLatency+(ctx.outputLatency||0))*1000});}},1);
      },{once:true,capture:true});
    });
  };
};
async function press(page,selector,tap=false){
  if(tap)await page.locator(selector).tap();else{await page.mouse.move(8,8);await page.mouse.move(14,12);await sleep(40);await page.click(selector);}
}
async function startSound(page,tap=false){
  await press(page,'#sound',tap);
  await page.waitForFunction(()=>{const s=manuscript.sound;return s.state.wanted&&!s.state.loading&&s.context?.state==='running'&&s.mix&&s.context.currentTime>.3;},null,{timeout:120000});
}
const now=page=>page.evaluate(()=>manuscript.sound.context.currentTime);
const heard=(page,role,since,count=1,timeout=8000)=>page.waitForFunction(([role,since,count])=>manuscript.sound.recent.filter(e=>e.role===role&&e.at>=since).length>=count,[role,since,count],{timeout});
const events=(page,since)=>page.evaluate(since=>manuscript.sound.recent.filter(e=>e.at>=since),since);
async function stroke(page,kind,from,radius,steps=60){
  await press(page,'[data-kind="'+kind+'"]');
  const cdp=await page.context().newCDPSession(page),mouse=(type,x,y,extra={})=>cdp.send('Input.dispatchMouseEvent',{type,x,y,button:'left',buttons:type==='mouseReleased'?0:1,clickCount:1,...extra});
  await mouse('mouseMoved',from[0],from[1],{buttons:0});await mouse('mousePressed',from[0],from[1]);
  for(let i=1;i<=steps;i++){await mouse('mouseMoved',from[0]+radius*Math.cos(i/6)-radius,from[1]+radius*.6*Math.sin(i/5));if(i%6===0)await sleep(16);}
  await mouse('mouseReleased',from[0]+radius*Math.cos(steps/6)-radius,from[1]+radius*.6*Math.sin(steps/5));await cdp.detach();
}
try{
  for(let i=0;i<80;i++){try{if((await fetch(base+'/api/world')).ok)break;}catch{}await sleep(100);}
  await mkdir(shots,{recursive:true});
  browser=await chromium.launch({headless:true,args:['--mute-audio','--autoplay-policy=no-user-gesture-required']});
  const context=await browser.newContext({viewport:{width:1280,height:860}});
  await context.addInitScript(instrumentAudio);
  const p=await context.newPage(),requests=[];p.on('pageerror',e=>errors.push(e.message));p.on('request',r=>requests.push(r.url()));
  await p.goto(base);await p.waitForFunction(()=>window.manuscript?.ready);
  await p.locator('#sound').waitFor({state:'visible'});
  assert(!requests.some(url=>url.includes('/kit-a/')),'Sound must be available without fetching the retired original kit');
  await p.mouse.move(600,400);await p.mouse.down();await p.mouse.move(700,450,{steps:10});await p.mouse.up();await sleep(400);
  assert.equal(await p.evaluate(()=>window.__contexts),0,'No audio context may exist before the visitor starts sound.');
  assert.equal(await p.locator('#sound').getAttribute('aria-label'),'Start sound');
  passed.push('no audio context before the tap');

  await p.route('**/sound-assets/kit-b3/manifest.json',r=>r.fulfill({status:503,body:'down'}),{times:1});
  await press(p,'#sound');
  await p.waitForFunction(()=>!manuscript.sound.state.loading&&manuscript.sound.state.error,null,{timeout:60000});
  assert.equal(await p.locator('#sound').getAttribute('aria-label'),'Start sound','A failed load must return to a retryable state.');
  await startSound(p);
  assert.equal(await p.evaluate(()=>window.__contexts),1);
  assert.equal(await p.locator('#sound').getAttribute('aria-label'),'Mute sound');
  const stale=await p.evaluate(()=>{const s=document.getElementById('status');return s.classList.contains('visible')?s.textContent:null;});
  assert(!/could not/i.test(stale??''),'Once sound works, the earlier failure message must be gone: '+stale);
  assert(await p.locator('#volume').isVisible()&&await p.locator('#sound-reset').isVisible());
  assert.equal(await p.locator('[data-version]').count(),0);
  assert.equal(await p.evaluate(()=>manuscript.sound.state.mode),'b');
  assert(!requests.some(url=>url.includes('/kit-a/')),'Starting sound must fetch only the chosen stems');
  passed.push('failed load is retryable; stems are the only version, with volume and restart controls');
  await p.screenshot({path:shots+'/desktop-sound-on.png'});

  await press(p,'#make');
  await p.evaluate(()=>window.__armOnset());await sleep(300);
  let since=await now(p);
  await stroke(p,'line',[640,420],120);
  const onset=await p.evaluate(()=>window.__onset);
  await heard(p,'touch',since);
  const first=(await events(p,since)).find(e=>e.role==='touch');
  const scheduledLag=(first.at-onset.ctxAt)*1000,endToEnd=onset.handlerDelay+scheduledLag+onset.latency;
  measured.onset={...onset,scheduledLag,endToEnd,touch:first};
  assert(scheduledLag<=30,'Pointer handler to scheduled sound must be within 30 ms: '+JSON.stringify(measured.onset));
  assert(onset.detectedLag!==null&&onset.detectedLag<=30+onset.latency+60,'Real output must rise soon after the pointer: '+JSON.stringify(measured.onset));
  passed.push('drawing sounds as the hand moves: handler to note '+scheduledLag.toFixed(1)+' ms; browser input delivery '+onset.handlerDelay.toFixed(1)+' ms; reported output latency '+onset.latency.toFixed(1)+' ms; analyser saw output rise '+onset.detectedLag.toFixed(1)+' ms after the pointer');

  const notes=[first.note];
  for(const y of [360,480]){await sleep(500);since=await now(p);await stroke(p,'line',[640,y],100);await heard(p,'touch',since);notes.push((await events(p,since)).find(e=>e.role==='touch').note);}
  assert(new Set(notes).size>=2,'Repeated strokes must move to different notes: '+notes);
  passed.push('three fine strokes answered on notes '+notes.join(', '));

  await sleep(500);since=await now(p);
  const c0=await p.evaluate(()=>({...manuscript.sound.controls}));
  await stroke(p,'ribbon',[620,430],220);
  await heard(p,'stroke',since,1);
  const c1=await p.evaluate(()=>({...manuscript.sound.controls}));
  const held=(await events(p,since)).find(e=>e.role==='stroke');
  assert(held.hold&&held.unit==='voice','A ribbon starts a held voice: '+JSON.stringify(held));
  assert((c1.control||0)-(c0.control||0)>=10,'The held voice is shaped while the hand moves: '+JSON.stringify({c0,c1}));
  assert((c1.release||0)-(c0.release||0)>=1,'Lifting releases the held voice: '+JSON.stringify({c0,c1}));
  passed.push('ribbon: held voice shaped by '+((c1.control||0)-(c0.control||0))+' control messages while moving, released on lift');
  await sleep(500);since=await now(p);
  await stroke(p,'form',[620,430],200);
  await heard(p,'bloom',since,1);
  const shape=(await events(p,since)).filter(e=>e.role==='touch'||e.role==='bloom');
  assert(shape[0].role==='touch'&&shape[0].unit==='broad','A shape starts with a quiet broad onset then blooms: '+JSON.stringify(shape));
  passed.push('shape: immediate broad onset then '+shape.filter(e=>e.role==='bloom').length+' bloom voices');
  await p.screenshot({path:shots+'/desktop-drawing.png'});

  await press(p,'#cancel');
  since=await now(p);
  await press(p,'#surprise');
  await heard(p,'surprise',since,3,10000);
  passed.push('surprise drawing answered with a figure of '+(await events(p,since)).filter(e=>e.role==='surprise').length+' notes');
  await p.waitForFunction(()=>!manuscript.state.saving,null,{timeout:15000});

  await sleep(3300);since=await now(p);
  await p.mouse.move(640,380);await p.keyboard.down('Control');
  for(let i=0;i<12;i++){await p.mouse.wheel(0,-8);await sleep(16);}
  await p.keyboard.up('Control');
  await heard(p,'breath',since);
  const pinch=await p.evaluate(()=>manuscript.sound.mix);
  assert(pinch.space<-.01&&pinch.glideCents>.3,'Pinch-in must dry the space and glide up: '+JSON.stringify(pinch));
  passed.push('pinch alone is heard: breath voice, space '+pinch.space.toFixed(2)+', glide '+pinch.glideCents.toFixed(1)+' cents');

  await sleep(3300);since=await now(p);
  await p.evaluate(()=>{const s=manuscript.sound,orig=s.look;window.__looks=[];s.look=(dx,dy)=>{window.__looks.push([dx,dy,s.context.currentTime]);return orig(dx,dy);};});
  await p.mouse.move(300,420);await p.mouse.down();
  for(let i=0;i<40;i++){await p.mouse.move(300+i*24,420);await sleep(16);}
  await p.mouse.up();
  measured.look=await p.evaluate(()=>({calls:window.__looks.length,span:window.__looks.length?window.__looks.at(-1)[2]-window.__looks[0][2]:0,first:window.__looks.slice(0,3),stir:manuscript.sound.mix.stir}));
  await heard(p,'turn',since).catch(e=>{throw new Error('No turn voice: '+JSON.stringify(measured.look));});
  const turn=(await events(p,since)).filter(e=>e.role==='turn');
  passed.push('looking around answered by '+turn.length+' restrained turn voice');

  const target=await p.evaluate(()=>{const item=manuscript.state.items.find(i=>i.space?.position||i.x!=null);if(!item)return null;manuscript.world.goTo(item);return item.id;});
  if(target){
    since=await now(p);
    await p.waitForFunction(()=>manuscript.sound.mix.salience>0,null,{timeout:10000});
    await heard(p,'detail',since,1,12000);
    passed.push('approaching an artwork raises salience and adds detail ('+target+')');
  }else measured.approach='no artwork in the test world';

  const sounding=()=>{const m=manuscript.sound.mix;return m.weight>.5?m.neighbour:m.primary;};
  const before=await p.evaluate(sounding);
  const crossStart=Date.now();
  await press(p,'#elsewhere');
  await sleep(5000);
  const arrived=await p.evaluate(()=>manuscript.world.state.environment.id);
  assert.notEqual(arrived,before,'Elsewhere must take us to another palette');
  await p.waitForFunction(`(${sounding})()===${JSON.stringify(arrived)}`,null,{timeout:60000});
  const crossSeconds=(Date.now()-crossStart)/1000;
  since=await now(p);
  await p.mouse.move(640,380);await p.keyboard.down('Control');
  for(let i=0;i<6;i++){await p.mouse.wheel(0,8);await sleep(16);}
  await p.keyboard.up('Control');
  await heard(p,'breath',since);
  const crossed=(await events(p,since)).find(e=>e.role==='breath');
  measured.crossing={before,arrived,crossed,mix:await p.evaluate(()=>manuscript.sound.mix),env:await p.evaluate(()=>manuscript.world.state.environment?.id)};assert.equal(crossed.palette,arrived,'After crossing, strokes play the new palette: '+JSON.stringify(measured.crossing));
  passed.push('palette crossing: '+before+' to '+arrived+', sounding palette settled after '+crossSeconds.toFixed(1)+' s; the next gesture plays '+crossed.palette);

  since=await now(p);
  await press(p,'#turn');
  await heard(p,'turn',since);
  const turned=(await events(p,since)).map(e=>e.role);
  assert(turned.includes('ack'),'The turn button is acknowledged at once: '+turned);
  passed.push('turn-around button answered: '+turned.join(', '));

  await sleep(900);
  await press(p,'#sound-reset');
  const reset=await p.evaluate(()=>({scene:manuscript.sound.sceneTime,mode:manuscript.sound.state.mode}));
  assert(reset.scene<1.5&&reset.mode==='b','Reset restarts from the origin and keeps the version: '+JSON.stringify(reset));
  await press(p,'#make');await sleep(300);since=await now(p);
  await stroke(p,'line',[640,420],120);await heard(p,'touch',since);
  await press(p,'#cancel');
  passed.push('reset restarts the soundscape and the stems answer a new stroke');

  await press(p,'#sound');
  await sleep(250);
  const mutedRms=await p.evaluate(()=>{let m=0;for(let i=0;i<20;i++)m=Math.max(m,window.__rms());return m;});
  assert.equal(await p.locator('#sound').getAttribute('aria-label'),'Unmute sound');
  assert(mutedRms<1e-4,'Muted output must be silent: '+mutedRms);
  await press(p,'#sound');
  assert.equal(await p.evaluate(()=>manuscript.sound.state.muted),false);
  passed.push('mute silences the real output (peak RMS '+mutedRms.toExponential(1)+') and unmutes');

  await p.evaluate(()=>{Object.defineProperty(document,'hidden',{configurable:true,get:()=>true});document.dispatchEvent(new Event('visibilitychange'));});
  await p.waitForFunction(()=>manuscript.sound.context.state==='suspended',null,{timeout:10000});
  await p.evaluate(()=>{Object.defineProperty(document,'hidden',{configurable:true,get:()=>false});document.dispatchEvent(new Event('visibilitychange'));});
  await p.waitForFunction(()=>manuscript.sound.context.state==='running',null,{timeout:10000});
  passed.push('simulated hidden tab suspends and resumes');

  const phone=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
  const retryContext=await browser.newContext({viewport:{width:1280,height:860}});
  await retryContext.addInitScript(instrumentAudio);
  const rp=await retryContext.newPage();rp.on('pageerror',e=>errors.push(e.message));
  await rp.goto(base);await rp.waitForFunction(()=>window.manuscript?.ready);await rp.locator('#sound').waitFor({state:'visible'});
  await rp.route('**/sound-assets/kit-b3/*.wav',r=>r.fulfill({status:503,body:'down'}));
  await press(rp,'#sound');
  await rp.waitForFunction(()=>manuscript.sound.state.error&&!manuscript.sound.state.loading,null,{timeout:20000});
  const failed=await rp.evaluate(()=>({mode:manuscript.sound.state.mode,playing:manuscript.sound.playing,label:document.querySelector('#sound').getAttribute('aria-label')}));
  assert.equal(failed.playing,null,'A missing stem kit must not fall back to the retired sounds');
  assert.equal(failed.label,'Start sound');
  await rp.unroute('**/sound-assets/kit-b3/*.wav');
  await rp.route('**/sound-assets/kit-b3/*.wav',async r=>{await sleep(800);await r.continue().catch(()=>{});});
  await press(rp,'#sound');
  assert.equal(await rp.evaluate(()=>manuscript.sound.state.loading),true);
  assert.equal(await rp.evaluate(()=>manuscript.sound.playing),null);
  await rp.waitForFunction(()=>manuscript.sound.playing==='B · your stems'&&!manuscript.sound.state.error,null,{timeout:30000});
  assert.equal(await rp.evaluate(()=>manuscript.sound.state.muted),false,'Retry must not toggle mute');
  await press(rp,'#make');await sleep(300);since=await now(rp);
  await stroke(rp,'line',[640,420],120);await heard(rp,'touch',since);
  await retryContext.close();
  passed.push('failed or delayed stem loads stay silent; tapping the speaker retries and starts the stems, unmuted');
  await phone.addInitScript(instrumentAudio);
  const q=await phone.newPage();q.on('pageerror',e=>errors.push(e.message));
  await q.goto(base);await q.waitForFunction(()=>window.manuscript?.ready);await q.locator('#sound').waitFor({state:'visible'});
  await startSound(q,true);
  const boxes={};
  for(const id of ['#sound','#volume','#sound-reset','#turn','#fullscreen']){
    if(id==='#fullscreen'&&!await q.locator(id).isVisible())continue;
    const b=await q.locator(id).boundingBox();boxes[id]=b;assert(b&&b.x>=0&&b.x+b.width<=390&&b.y>=0&&b.y+b.height<=844,id+' must fit on a phone: '+JSON.stringify(b));
  }
  const ids=Object.keys(boxes);
  for(let i=0;i<ids.length;i++)for(let j=i+1;j<ids.length;j++){const a=boxes[ids[i]],b=boxes[ids[j]];
    assert(a.x+a.width<=b.x+.5||b.x+b.width<=a.x+.5||a.y+a.height<=b.y+.5||b.y+b.height<=a.y+.5,ids[i]+' overlaps '+ids[j]);}
  assert.equal(await q.locator('[data-version]').count(),0);
  await q.screenshot({path:shots+'/phone-sound-on.png'});
  const cdp=await phone.newCDPSession(q);since=await now(q);await sleep(3200);since=await now(q);
  const touch=(type,gap)=>cdp.send('Input.dispatchTouchEvent',{type,touchPoints:type==='touchEnd'?[]:[{x:195-gap,y:420,id:1},{x:195+gap,y:420,id:2}]});
  await touch('touchStart',40);for(let g=45;g<=160;g+=5){await touch('touchMove',g);await sleep(16);}await touch('touchEnd',0);
  await heard(q,'breath',since);
  passed.push('phone: controls fit at 390 px without overlap; two-finger spread is heard');
  await press(q,'#make',true);
  assert(await q.locator('#sound').isVisible());
  await q.screenshot({path:shots+'/phone-drawing.png'});
  assert.deepEqual(errors,[]);
  await writeFile(shots+'/measured.json',JSON.stringify({passed,measured},null,1));
  console.log('PASS:\n- '+passed.join('\n- '));
}finally{
  await browser?.close();server.kill('SIGTERM');
  await Promise.race([new Promise(r=>server.once('close',r)),sleep(3000)]);
  await rm(tmp,{recursive:true,force:true});
}

