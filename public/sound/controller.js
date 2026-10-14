import {createIntent,createAutonomy} from './intent.js';
import {createSoundEngine} from './engine.js';

export const ASSETS='/sound-assets/haze-loose-ends/';
const BUFFERS=['master','pad','melody','lead','texture','air','reverb','delay'];

export async function soundAvailable(){
  try{return(await fetch(ASSETS+'manifest.json',{method:'HEAD'})).ok;}catch{return false;}
}

export async function loadAssets(ctx){
  const manifest=await(await fetch(ASSETS+'manifest.json')).json();
  const buffers={};
  for(const name of BUFFERS){
    const response=await fetch(ASSETS+manifest.files[name]);
    if(!response.ok)throw new Error('Sound file unavailable: '+name);
    buffers[name]=await ctx.decodeAudioData(await response.arrayBuffer());
  }
  return {manifest,buffers};
}

export function createSoundController({onChange=()=>{},seed=1}={}){
  let ctx=null,assets=null,engine=null,intent=createIntent(),autonomy=createAutonomy(seed),timer=0,loading=null,levels=null,epoch=0,builtAt=-Infinity;
  const state={wanted:false,muted:false,volume:.7,mode:'a',seed,loading:false,needsTap:false,error:null};
  const now=()=>ctx?ctx.currentTime:0;
  const live=()=>engine&&ctx.state==='running';
  const eventTime=at=>at===undefined?ctx.currentTime:ctx.currentTime-Math.min(.25,Math.max(0,(performance.now()-at)/1000));
  const report=()=>onChange({...state,context:ctx?.state??'none'});
  const level=()=>state.muted?0:state.volume;

  function build(){
    engine?.dispose(now());
    intent=createIntent();autonomy=createAutonomy(state.seed);
    engine=createSoundEngine({ctx,...assets,seed:state.seed,mode:state.mode});
    epoch=now()+.05;builtAt=performance.now();levels=null;
    engine.setVolume(0,now(),.001);engine.start(epoch);engine.setVolume(level(),epoch,.6);
  }
  function tick(){
    if(!live())return;
    const t=ctx.currentTime;
    levels={...intent.step(t),auto:autonomy(Math.max(0,t-epoch))};
    engine.tick(levels,t);
  }
  function watch(){
    state.needsTap=state.wanted&&!document.hidden&&ctx.state!=='running'&&ctx.state!=='closed';
    report();
  }
  async function resume(){
    if(!ctx)return;
    try{await ctx.resume();}catch{}
    watch();
  }

  document.addEventListener('visibilitychange',()=>{
    if(!ctx||!state.wanted)return;
    if(document.hidden){engine?.setVolume(0,now(),.06);setTimeout(()=>{if(document.hidden)ctx.suspend();},300);}
    else resume().then(()=>{if(live())engine.setVolume(level(),now(),.5);});
  });

  return {
    state,
    async start(){
      if(state.loading)return;
      state.wanted=true;state.error=null;
      if(!ctx){
        if(navigator.audioSession)navigator.audioSession.type='playback';
        ctx=new AudioContext({latencyHint:'playback'});
        ctx.onstatechange=watch;
      }
      const resumed=ctx.resume();
      if(!assets){
        state.loading=true;report();
        loading??=loadAssets(ctx);
        try{assets=await loading;}
        catch(error){loading=null;state.loading=false;state.wanted=false;state.error=String(error?.message??error);report();throw error;}
        state.loading=false;
      }
      await resumed.catch(()=>{});
      if(!engine)build();
      if(!timer)timer=setInterval(tick,25);
      watch();
    },
    resume,
    toggleMute(){state.muted=!state.muted;engine?.setVolume(level(),now(),.05);report();},
    setVolume(value){state.volume=Math.max(0,Math.min(1,value));if(!state.muted)engine?.setVolume(level(),now(),.05);report();},
    setMode(mode){state.mode=mode;engine?.setMode(mode,now());report();},
    reset(){if(engine&&performance.now()-builtAt>400)build();report();},
    stroke(sample){if(live())intent.stroke({...sample,t:eventTime(sample.at),view:{w:innerWidth,h:innerHeight}});},
    strokeEnd(){if(live())intent.strokeEnd(ctx.currentTime);},
    motion(speed){if(live())intent.motion({t:ctx.currentTime,speed});},
    look(dx,dy,at){if(live())intent.look({t:eventTime(at),dx,dy,view:{w:innerWidth,h:innerHeight}});},
    pinch(delta){if(live())intent.pinch({t:ctx.currentTime,delta});},
    get context(){return ctx;},
    get levels(){return levels;},
    get sceneTime(){return ctx&&engine?ctx.currentTime-epoch:0;},
  };
}

