import {createWorld,PALETTE,wheelTravel} from './world.js';
import {SEEDS} from './rules.js';
import {downloadStill} from './still.js';
import {downloadAnimation} from './animation.js';
import {ENVIRONMENTS,environmentById,makeSurprise,environmentAt} from './environments.js';
import {createIdleControls} from './idle.js';
import {createSoundController,soundAvailable} from './sound/score.js';

const $=id=>document.getElementById(id);
const SOUND_FAILED='Sound could not load. Tap the speaker to try again.',SOUND_PAUSED='Sound paused. Tap the speaker to bring it back.';
const canvas=$('world'),draftKey='untranslatable-spatial-draft-v1';
const state={items:[],cursor:0,draft:null,ink:'ink',kind:'line',saving:false,ready:false};
let toastTimer,pointer=null,stroke=null,draftFrame=0,archiveIndex=0,archiveWork=null,archiveCanvas=null,archiveFrame=0,dialogPause=false,lastSurprise=null,paletteId=null;
const sound=createSoundController({onChange:renderSound,seed:Number(new URLSearchParams(location.search).get('seed'))||1});
let lastTravel=null;
const touches=new Map();let pinchGap=0;
const touchGap=()=>{const [a,b]=[...touches.values()];return Math.hypot(a.x-b.x,a.y-b.y);};
const soundSample=event=>({x:event.clientX/innerWidth,y:event.clientY/innerHeight,pressure:event.pressure||.5,kind:state.kind});
const radii=new WeakMap();
function drawingRadius(item){
  if(!radii.has(item)){let r=0;for(const s of item.strokes||[])for(const p of s.points||[])r=Math.max(r,Math.hypot(p[0],p[1]));radii.set(item,Math.max(1,r*.03));}
  return radii.get(item);
}
function soundSurroundings(position){
  const e=environmentAt(position.toArray());sound.environment({primary:e.primary.id,neighbour:e.neighbour.id,blend:e.blend});
  if(!sound.state.wanted)return;
  const cam=world.camera,v=cam.position.clone(),tanHalf=Math.tan(cam.fov*Math.PI/360);let best=0,id=null;
  for(const item of state.items){
    const p=item.space?.position;if(!p)continue;
    v.set(p[0],p[1],p[2]).applyMatrix4(cam.matrixWorldInverse);const depth=-v.z;if(depth<.5)continue;
    v.set(p[0],p[1],p[2]).project(cam);if(Math.abs(v.x)>1.05||Math.abs(v.y)>1.05)continue;
    const frac=drawingRadius(item)/(depth*tanHalf),area=Math.min(1,frac*frac/cam.aspect);
    if(area>best){best=area;id=item.id;}
  }
  sound.salience(best,id);
}
function soundMotion(travel){
  const t=performance.now()/1000;
  if(lastTravel)sound.motion(Math.min(1,Math.sqrt(Math.max(0,travel-lastTravel.travel)/Math.max(.016,t-lastTravel.t)/40)));
  lastTravel={travel,t};
}
const world=createWorld(canvas,{
  onMove:()=>updateControls(),
  onFrame:({yaw,position,travel,environment})=>{
    soundMotion(travel);
    soundSurroundings(position);
    document.querySelector('.needle').style.transform='rotate('+(-yaw*180/Math.PI)+'deg)';
    const distance=Math.hypot(position.x,position.y,position.z-22);
    $('place').textContent=distance<12?'the beginning':Math.round(distance)+' from the beginning';
    $('environment-name').textContent=environment.name;
    if(!world.state.making)usePalette(environment);
    if(travel>8)wandered();
  }
});
window.manuscript={state,world,get ready(){return state.ready;}};
window.manuscript.sound=sound;
const wakeControls=createIdleControls({
  blocked:()=>world.state.making||state.saving||pointer!==null||!!document.querySelector('dialog[open]')||document.activeElement?.matches(':focus-visible:not(#world)'),
  change:hidden=>document.body.classList.toggle('is-idle',hidden)
});
for(const type of ['pointermove','pointerdown','pointerup','pointercancel','keydown','keyup','wheel','focusin'])
  document.addEventListener(type,wakeControls,{capture:true,passive:true});
document.addEventListener('visibilitychange',wakeControls);
document.querySelectorAll('dialog').forEach(dialog=>dialog.addEventListener('close',wakeControls));
function wandered(){document.body.classList.add('has-wandered');}
$('download-still').onclick=async()=>{try{await downloadStill(world);}catch{toast('Could not save this view. Please try again.');}};
let animationCapture=null;
$('download-animation').onclick=async()=>{
  if(animationCapture){animationCapture.abort();return;}
  animationCapture=new AbortController();
  const button=$('download-animation');
  button.setAttribute('aria-label','Cancel animation');
  button.textContent='Preparing loop · cancel';
  try{
    await downloadAnimation(world,{signal:animationCapture.signal,onProgress:percent=>{button.textContent='Saving '+percent+'% · cancel';}});
    toast('Your little moving world is saved.');
  }catch(error){if(error.name!=='AbortError')toast(error.message);}
  finally{animationCapture=null;button.textContent='Download animation';button.removeAttribute('aria-label');wakeControls();}
};
function toast(message){$('status').textContent=message;$('status').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('status').classList.remove('visible'),4200);}
function updateControls(){
  $('speed').value=world.state.speed;
  $('speed-label').textContent=world.state.speed===0?'still':world.state.speed<16?'barely':world.state.speed<40?'slowly':world.state.speed<75?'flowing':'flying';
  $('pause').setAttribute('aria-pressed',String(world.state.paused));
  $('pause').setAttribute('aria-label',world.state.paused?'Resume motion':'Pause motion');
  $('pause').innerHTML=world.state.paused?'<svg viewBox="0 0 24 24"><path d="m9 5 10 7-10 7z"/></svg>':'<svg viewBox="0 0 24 24"><path d="M8 6v12M16 6v12"/></svg>';
}
function usePalette(env){
  if(paletteId===env.id)return;paletteId=env.id;
  if(!env.inks.includes(state.ink))state.ink=env.inks[0];
  const colors=document.querySelector('.inks');colors.replaceChildren();
  for(const ink of env.inks){
    const button=document.createElement('button');button.dataset.ink=ink;
    button.style.setProperty('--swatch',PALETTE[ink]);button.setAttribute('aria-label',ink[0].toUpperCase()+ink.slice(1));
    button.setAttribute('aria-pressed',String(state.ink===ink));
    button.onclick=()=>{state.ink=ink;colors.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));};colors.append(button);
  }
  document.querySelectorAll('[data-kind]').forEach((b,i)=>{b.textContent=env.tools[i];});
  $('drawing-note').querySelector('p').textContent=env.note;
  $('drawing-note').querySelector('.eyebrow').textContent=env.name.toUpperCase();
}
function saveDraft(){try{if(state.draft?.strokes.length)localStorage.setItem(draftKey,JSON.stringify(state.draft));else localStorage.removeItem(draftKey);}catch{}}
function updateDraft(){
  $('undo').disabled=!state.draft?.strokes.length||state.saving;
  $('leave').disabled=!state.draft?.strokes.some(s=>s.points.length>=2)||state.saving;
  if(!draftFrame)draftFrame=requestAnimationFrame(()=>{draftFrame=0;world.showDraft(state.draft);});
}
function make(){
  if(state.saving)return;
  state.draft=world.beginDrawing(state.draft);
  usePalette(environmentById(state.draft.space.environment));
  document.body.classList.add('is-making');$('making').hidden=false;$('drawing-note').hidden=false;
  updateDraft();canvas.focus();wandered();
}
function closeDrawing(){
  if(state.saving)return;
  if(!state.draft?.strokes.length)state.draft=null;
  saveDraft();world.finishDrawing();document.body.classList.remove('is-making');
  $('making').hidden=true;$('drawing-note').hidden=true;canvas.focus();
}
async function sync(){
  try{
    let more=true;
    while(more){
      const response=await fetch('/api/world?cursor='+state.cursor);
      if(!response.ok)throw new Error('connection');
      const data=await response.json(),ids=new Set(state.items.map(x=>x.id));
      for(const item of data.items)if(!ids.has(item.id))state.items.push(item);
      state.cursor=data.cursor;more=data.hasMore;
      $('trace-count').textContent=data.total||'';
    }
    world.setItems(state.items);state.ready=true;
  }catch{state.ready=true;}
}
async function storeMark(mark){
  const response=await fetch('/api/marks',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(mark)});
  const data=await response.json();
  if(!response.ok)throw new Error(data.message||'Your drawing is kept here. Try releasing it again.');
  if(!state.items.some(x=>x.id===data.item.id))state.items.push(data.item);
  world.setItems(state.items);world.ripple(data.item);
  $('trace-count').textContent=state.items.length;sync();
  return data.item;
}
async function publish(){
  if(state.saving||!state.draft?.strokes.length)return;
  state.draft.strokes=state.draft.strokes.filter(s=>s.points.length>=2);
  if(!state.draft.strokes.length)return;
  state.saving=true;updateDraft();$('leave').textContent='Releasing…';
  const mark=structuredClone(state.draft);
  try{
    const item=await storeMark(mark);world.unfold(item);

    state.draft=null;state.saving=false;saveDraft();closeDrawing();
    $('trace-count').textContent=state.items.length;
    toast('Yours, now part of everything.');sync();
  }catch(error){state.saving=false;saveDraft();toast(error.message);updateDraft();}
  $('leave').innerHTML='Let it go <span>↗</span>';
}
async function surprise(){
  if(state.saving||world.state.making)return;
  const mark=world.beginDrawing(),env=environmentById(mark.space.environment);
  const seed=crypto.getRandomValues(new Uint32Array(1))[0],drawing=makeSurprise(seed,env,lastSurprise);
  lastSurprise=drawing.family;mark.strokes=drawing.strokes;state.saving=true;
  sound.surprise({family:drawing.family,seed,strokes:drawing.strokes});
  $('surprise').disabled=true;$('surprise').classList.add('is-releasing');
  try{
    const item=await storeMark(mark);world.unfold(item,true);
  }catch{
    if(!state.draft){state.draft=mark;saveDraft();toast('The connection slipped. Your surprise is kept in Draw something.');}
    else toast('The connection slipped. Your earlier drawing is safe. Try another surprise.');
  }finally{
    state.saving=false;world.finishDrawing();$('surprise').disabled=false;
    setTimeout(()=>$('surprise').classList.remove('is-releasing'),2200);
  }
  wandered();
}
function totalPoints(){return state.draft.strokes.reduce((n,s)=>n+s.points.length,0);}
canvas.addEventListener('pointerdown',event=>{
  if(touches.size>1)return;
  if(event.button!==0||state.saving)return;
  canvas.focus();canvas.setPointerCapture(event.pointerId);pointer={id:event.pointerId,x:event.clientX,y:event.clientY};
  wandered();
  if(world.state.making){
    if(state.draft.strokes.length>=128||totalPoints()>=4096){toast('Let this drawing go, then start another.');return;}
    const p=world.drawingPoint(event.clientX,event.clientY);
    if(!p)return;
    stroke={kind:state.kind,ink:state.ink,seed:crypto.getRandomValues(new Uint32Array(1))[0],points:[p]};
    state.draft.strokes.push(stroke);
    sound.strokeStart(soundSample(event));
  }
});
canvas.addEventListener('pointermove',event=>{
  if(!pointer||pointer.id!==event.pointerId)return;
  if(world.state.making&&stroke){
    sound.strokeMove(soundSample(event));
    const p=world.drawingPoint(event.clientX,event.clientY),last=stroke.points.at(-1);
    if(p&&Math.hypot(p[0]-last[0],p[1]-last[1])>1.8&&stroke.points.length<512&&totalPoints()<4096){
      p[2]=event.pressure||.5;stroke.points.push(p);updateDraft();
    }
  }else if(!world.state.making&&touches.size<2){const dx=event.clientX-pointer.x,dy=event.clientY-pointer.y;world.look(dx,dy);sound.look(dx,dy);}
  pointer.x=event.clientX;pointer.y=event.clientY;
});
function pointerEnd(){
  if(stroke){
    sound.strokeEnd();
    if(stroke.points.length<2)state.draft.strokes=state.draft.strokes.filter(s=>s!==stroke);
    stroke=null;updateDraft();saveDraft();
  }
  pointer=null;
}
canvas.addEventListener('pointerup',pointerEnd);canvas.addEventListener('pointercancel',pointerEnd);canvas.addEventListener('lostpointercapture',pointerEnd);
canvas.addEventListener('wheel',event=>{
  if(event.ctrlKey&&!world.state.making)sound.pinch(-event.deltaY*.14);
  if(wheelTravel(event,world)){updateControls();wandered();}
},{passive:false});
canvas.addEventListener('pointerdown',event=>{
  if(event.pointerType!=='touch')return;
  touches.set(event.pointerId,{x:event.clientX,y:event.clientY});
  if(touches.size===2){pinchGap=touchGap();pointer=null;}
},{capture:true});
canvas.addEventListener('pointermove',event=>{
  if(!touches.has(event.pointerId))return;
  touches.set(event.pointerId,{x:event.clientX,y:event.clientY});
  if(touches.size!==2||world.state.making)return;
  const gap=touchGap(),distance=(gap-pinchGap)*.06;pinchGap=gap;
  world.dolly(distance);sound.pinch(distance);wandered();
},{capture:true});
for(const type of ['pointerup','pointercancel'])canvas.addEventListener(type,event=>touches.delete(event.pointerId),{capture:true});
$('make').onclick=make;$('cancel').onclick=closeDrawing;$('leave').onclick=publish;$('surprise').onclick=surprise;
$('undo').onclick=()=>{if(state.saving)return;state.draft.strokes.pop();updateDraft();saveDraft();};

document.querySelectorAll('[data-kind]').forEach(button=>button.onclick=()=>{state.kind=button.dataset.kind;document.querySelectorAll('[data-kind]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));});
$('speed').oninput=event=>{world.state.speed=Number(event.target.value);world.state.paused=false;updateControls();wandered();};
$('pause').onclick=()=>{world.stopKeys();world.state.paused=!world.state.paused;updateControls();};
$('elsewhere').onclick=()=>{const i=ENVIRONMENTS.findIndex(e=>e.id===world.state.environment.id);world.visitEnvironment(ENVIRONMENTS[(i+1)%ENVIRONMENTS.length].id);wandered();};
$('turn').onclick=()=>{world.turnAround();sound.turn();wandered();};
function renderSound(s){
  const button=$('sound'),started=s.wanted&&!s.loading;
  if(started&&!s.needsTap&&!s.error&&[SOUND_FAILED,SOUND_PAUSED].includes($('status').textContent))$('status').classList.remove('visible');
  button.dataset.state=s.loading?'loading':!s.wanted?'off':s.needsTap?'restore':s.muted?'muted':'on';
  button.setAttribute('aria-pressed',String(s.wanted&&!s.muted&&!s.needsTap));
  button.setAttribute('aria-label',{loading:'Loading sound',off:'Start sound',restore:'Tap to restore sound',muted:'Unmute sound',on:'Mute sound'}[button.dataset.state]);
  button.toggleAttribute('aria-busy',s.loading);
  $('volume').hidden=$('sound-reset').hidden=!started;
  document.body.classList.toggle('sound-on',started);
  if(s.needsTap)toast(SOUND_PAUSED);
  else if(s.error)toast(SOUND_FAILED);
}
$('sound').onclick=()=>{
  const s=sound.state;
  if(!s.wanted)sound.start().catch(()=>toast(SOUND_FAILED));
  else if(s.error)sound.retry();
  else if(s.needsTap)sound.resume();
  else sound.toggleMute();
};
$('volume').oninput=event=>sound.setVolume(Number(event.target.value));
$('sound-reset').onclick=()=>sound.reset();
document.addEventListener('pointerdown',()=>{if(sound.state.needsTap)sound.resume();},{capture:true});
soundAvailable().then(ok=>{$('sound').hidden=!ok;});
$('home').onclick=()=>{world.goHome();toast('Back at the beginning.');};
$('latest').onclick=()=>{if(state.items.length){world.goTo(state.items.at(-1));wandered();}else toast('The next trace could be yours.');};
$('fullscreen').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{toast('Full screen is not available in this window.');}};
document.querySelectorAll('[data-move]').forEach(button=>{
  button.onpointerdown=event=>{button.setPointerCapture(event.pointerId);world.setKey(button.dataset.move,true);wandered();};
  button.onpointerup=button.onpointercancel=button.onlostpointercapture=()=>world.setKey(button.dataset.move,false);
});
addEventListener('keydown',event=>{
  if(document.querySelector('dialog[open]')||event.target.matches('input'))return;
  if(event.key==='Escape'&&world.state.making){closeDrawing();return;}
  if(event.key.toLowerCase()==='m'&&!event.repeat&&!world.state.making){make();return;}
  if(event.code==='Space'&&!event.repeat&&event.target.tagName!=='BUTTON'){event.preventDefault();$('pause').click();return;}
  if(world.state.making)return;
  if(['w','a','s','d','q','e','arrowleft','arrowright','arrowup','arrowdown'].includes(event.key.toLowerCase())){
    event.preventDefault();world.setKey(event.key,true);wandered();
  }
});
addEventListener('keyup',event=>world.setKey(event.key,false));
$('about-toggle').onclick=()=>{world.stopKeys();dialogPause=world.state.paused;world.state.paused=true;$('about').showModal();};
$('about-close').onclick=()=>$('about').close();
$('about').addEventListener('close',()=>{if(!$('archive').open){world.state.paused=dialogPause;updateControls();}});
$('archive-toggle').onclick=async()=>{
  if(!window.Asemic)await new Promise((resolve,reject)=>{const script=document.createElement('script');script.src='/asemic.js';script.onload=resolve;script.onerror=reject;document.head.append(script);});
  $('archive').showModal();$('about').close();showArchive();
};
function showArchive(){
  cancelAnimationFrame(archiveFrame);const item=SEEDS[archiveIndex];$('archive-name').textContent=item.title;
  $('archive-art').replaceChildren();
  if(item.id==='original'){const img=new Image();img.src='/art/original.svg';img.alt='Untranslatable, the original manuscript';$('archive-art').append(img);return;}
  archiveWork=window.Asemic.build(item.id);archiveCanvas=document.createElement('canvas');archiveCanvas.width=item.w;archiveCanvas.height=item.h;$('archive-art').append(archiveCanvas);
  const render=()=>{window.Asemic.draw(archiveCanvas,archiveWork,matchMedia('(prefers-reduced-motion: reduce)').matches?0:performance.now()/1000);archiveFrame=requestAnimationFrame(render);};render();
}
$('archive-prev').onclick=()=>{archiveIndex=(archiveIndex+SEEDS.length-1)%SEEDS.length;showArchive();};
$('archive-next').onclick=()=>{archiveIndex=(archiveIndex+1)%SEEDS.length;showArchive();};
$('archive-close').onclick=()=>$('archive').close();
$('archive').addEventListener('close',()=>{cancelAnimationFrame(archiveFrame);world.state.paused=dialogPause;updateControls();$('about-toggle').focus();});
try{const stored=JSON.parse(localStorage.getItem(draftKey));if(stored?.space&&stored.strokes?.length)state.draft=stored;}catch{}
usePalette(ENVIRONMENTS[0]);updateControls();sync();setInterval(()=>{if(!document.hidden)sync();},5000);
setTimeout(wandered,9000);
