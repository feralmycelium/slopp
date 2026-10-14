import {createMusician} from './musician.js';
import {loadKit,createInstrument} from './instrument.js';

export const KITS={b:'/sound-assets/kit-b3/'};
const NEIGHBOURS={flow:['fold','hush','soft'],fold:['flow','echo','print'],soft:['flow','hush','print'],print:['fold','soft','echo'],echo:['fold','print','hush'],hush:['flow','soft','echo']};

export async function soundAvailable(){
  try{return(await Promise.all(Object.values(KITS).map(k=>fetch(k+'manifest.json',{method:'HEAD'})))).every(r=>r.ok);}catch{return false;}
}

export function createSoundController({onChange=()=>{},seed=1}={}){
  let ctx=null,instrument=null,musician=createMusician({seed}),kits={},timer=0,environment={primary:'flow',neighbour:'fold',blend:0},epoch=0,builtAt=-Infinity,last=[],controls={};
  const state={wanted:false,muted:false,volume:.7,mode:'b',seed,loading:false,needsTap:false,error:null};
  const live=()=>instrument&&ctx.state==='running';
  const now=()=>ctx?ctx.currentTime:0;
  const report=()=>onChange({...state,context:ctx?.state??'none'});
  const level=()=>state.muted?0:state.volume;
  function record(e,r){if(r?.unit)last.push({role:e.role,unit:e.unit,palette:e.palette,note:e.note,at:r.at,file:r.unit.file,hold:!!e.hold});else if(r&&e.type)controls[e.type]=(controls[e.type]||0)+1;if(last.length>60)last=last.slice(-60);}
  function play(events){for(const e of events)record(e,instrument.play(e));}
  async function warm(mode=state.mode){const k=kits[mode];if(!k)return;await k.ensure(environment.primary);for(const n of NEIGHBOURS[environment.primary]||[])k.ensure(n).catch(()=>{});}
  const fail=error=>{state.error=String(error?.message??error);report();};
  const rewarm=()=>warm().then(()=>{
    state.error=null;report();
  },fail);
  function tick(){if(!live())return;const t=ctx.currentTime;play(musician.tick({t,environment}));for(const [e,r] of instrument.mix(musician.mix(t)))record(e,r);}
  function watch(){state.needsTap=state.wanted&&!document.hidden&&ctx.state!=='running'&&ctx.state!=='closed';report();}
  async function resume(){if(!ctx)return;try{await ctx.resume();}catch{}watch();}
  document.addEventListener('visibilitychange',()=>{
    if(!ctx||!state.wanted)return;
    if(document.hidden){instrument?.setVolume(0,now(),.06);setTimeout(()=>{if(document.hidden)ctx.suspend();},300);}
    else resume().then(()=>{if(live())instrument.setVolume(level(),now(),.5);});
  });
  return {
    state,
    async start(){
      if(state.loading)return;state.wanted=true;state.error=null;
      if(!ctx){if(navigator.audioSession)navigator.audioSession.type='playback';ctx=new AudioContext({latencyHint:'interactive'});ctx.onstatechange=watch;}
      const resumed=ctx.resume();
      try{
        state.loading=true;report();
        kits.b??=await loadKit(ctx,KITS.b);
        await warm();
      }catch(error){state.loading=false;state.wanted=false;state.error=String(error?.message??error);kits={};report();throw error;}
      state.loading=false;await resumed.catch(()=>{});
      if(!instrument){instrument=createInstrument(ctx);instrument.setKit(kits[state.mode]);instrument.setVolume(0,now(),.001);instrument.setVolume(level(),now()+.05,.8);epoch=now();builtAt=performance.now();}
      if(!timer)timer=setInterval(tick,25);
      watch();
    },
    resume,
    toggleMute(){state.muted=!state.muted;instrument?.setVolume(level(),now(),.05);report();},
    setVolume(v){state.volume=Math.max(0,Math.min(1,v));if(!state.muted)instrument?.setVolume(level(),now(),.05);report();},
    retry(){return rewarm();},
    reset(){if(!instrument||performance.now()-builtAt<400)return;instrument.releaseAll(.1);musician=createMusician({seed:state.seed});epoch=now();builtAt=performance.now();report();},
    strokeStart(s){if(!live())return;play(musician.strokeStart({...s,t:ctx.currentTime,environment}));},
    strokeMove(s){if(live())play(musician.strokeMove({...s,t:ctx.currentTime}));},
    strokeEnd(){if(live())play(musician.strokeEnd({t:ctx.currentTime}));},
    motion(speed){if(live())musician.motion({t:ctx.currentTime,speed});},
    pinch(delta){if(live())play(musician.pinch({t:ctx.currentTime,delta}));},
    look(dx,dy){if(live())play(musician.look({t:ctx.currentTime,dx,dy}));},
    turn(){if(live())play(musician.turn({t:ctx.currentTime}));},
    surprise(d){if(live())play(musician.surprise({...d,t:ctx.currentTime,environment}));},
    salience(prominence,id){if(live())musician.salience({t:ctx.currentTime,prominence,id});},
    environment(e){if(e.primary!==environment.primary){environment={...e};if(instrument)rewarm();}else environment={...e};},
    get context(){return ctx;},
    get recent(){return last;},
    get controls(){return controls;},
    get voices(){return instrument?.activeVoices??0;},
    get playing(){return instrument?.kit?.title??null;},
    get sceneTime(){return ctx?ctx.currentTime-epoch:0;},
    get mix(){return ctx?musician.mix(ctx.currentTime):null;},
  };
}

