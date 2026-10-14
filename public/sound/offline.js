import {createIntent,createAutonomy} from './intent.js';
import {createSoundEngine} from './engine.js';
import {loadAssets} from './controller.js';
import {SCENARIOS} from './scenarios.js';

export async function renderScenario(name,{mode,seed=1,volume=.7,rate=48000}={}){
  const scenario=SCENARIOS[name],ctx=new OfflineAudioContext(2,Math.round(scenario.seconds*rate),rate);
  const engine=createSoundEngine({ctx,...await loadAssets(ctx),seed,mode});
  const intent=createIntent(),autonomy=createAutonomy(seed),script=scenario.make();
  engine.setVolume(volume,0,.001);engine.start(0);
  for(let step=0,t=0;t<scenario.seconds;step++,t=step/60){script(intent,t);const s=intent.step(t);if(step%2===0)engine.tick({...s,auto:autonomy(t)},t);}
  return ctx.startRendering();
}

export function wav16(buffer){
  const n=buffer.length,channels=buffer.numberOfChannels,data=new DataView(new ArrayBuffer(44+n*channels*2));
  const text=(o,s)=>[...s].forEach((c,i)=>data.setUint8(o+i,c.charCodeAt(0)));
  text(0,'RIFF');data.setUint32(4,36+n*channels*2,true);text(8,'WAVEfmt ');data.setUint32(16,16,true);data.setUint16(20,1,true);
  data.setUint16(22,channels,true);data.setUint32(24,buffer.sampleRate,true);data.setUint32(28,buffer.sampleRate*channels*2,true);
  data.setUint16(32,channels*2,true);data.setUint16(34,16,true);text(36,'data');data.setUint32(40,n*channels*2,true);
  const lanes=[...Array(channels)].map((_,c)=>buffer.getChannelData(c));
  for(let i=0,o=44;i<n;i++)for(const lane of lanes){data.setInt16(o,Math.max(-1,Math.min(1,lane[i]))*32767,true);o+=2;}
  return new Uint8Array(data.buffer);
}

