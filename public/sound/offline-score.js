import {createMusician} from './musician.js';
import {loadKit,createInstrument} from './instrument.js';
import {makeSurprise} from '../environments.js';
import {KITS} from './score.js';

const env=(primary='flow',neighbour='fold',blend=0)=>({primary,neighbour,blend});
function stroke(m,t,kind,x0=.4,y0=.5,len=.25){const out=[...m.strokeStart({t,x:x0,y:y0,kind,environment:env()})];for(let k=1;k<=12;k++)out.push(...m.strokeMove({t:t+k*.03,x:x0+len*k/12,y:y0-.1*Math.sin(k/3),pressure:.6}));m.strokeEnd({t:t+.4});return out;}
export const CLIPS={
  rest:{seconds:40,run:(m,t,ev)=>{}},
  strokes:{seconds:18,run:(m,t,ev)=>{for(const s of [2,4,6,8,10,12])if(Math.abs(t-s)<1e-6)ev.push(...stroke(m,t,'fine'));}},
  broad:{seconds:16,run:(m,t,ev)=>{if(Math.abs(t-2)<1e-6)ev.push(...stroke(m,t,'broad',.3,.6,.4));}},
  surprise:{seconds:16,run:(m,t,ev)=>{if(Math.abs(t-2)<1e-6){const d=makeSurprise(42,'flow',null);ev.push(...m.surprise({t,family:d.family,seed:42,strokes:d.strokes,environment:env()}));}}},
  approach:{seconds:22,run:(m,t,ev)=>{const p=t<4?0:t<10?(t-4)*.02:t<15?.12:Math.max(0,.12-(t-15)*.04);m.salience({t,prominence:p,id:'demo'});}},
  crossing:{seconds:20,env:t=>env('flow','fold',Math.min(1,Math.max(0,(t-3)/12))),run:(m,t,ev)=>{for(const s of [3,6,9,12,15])if(Math.abs(t-s)<1e-6)ev.push(...stroke(m,t,'fine'));}},
  frantic:{seconds:30,run:(m,t,ev)=>{const k=Math.round(t*4);if(Math.abs(t-k/4)<1e-6&&t>=1&&t<27)ev.push(...stroke(m,t,k%3?'fine':'broad',Math.random(),Math.random(),.3));}},
  pinch:{seconds:14,run:(m,t,ev)=>{if(t>=3&&t<4)ev.push(...m.pinch({t,delta:2}));if(t>=9&&t<10)ev.push(...m.pinch({t,delta:-2}));}},
  look:{seconds:20,run:(m,t,ev)=>{ev.push(...m.look({t,dx:t>=3&&t<13?14:0,dy:0}));}},
};
export async function renderClip(name,{mode,seed=1,volume=.7,rate=48000,palette='flow'}={}){
  const clip=CLIPS[name],ctx=new OfflineAudioContext(2,Math.round(clip.seconds*rate),rate);
  const kit=await loadKit(ctx,KITS[mode]);await kit.ensure(palette);await kit.ensure('fold');
  const now={t:0},inst=createInstrument(ctx,{clock:()=>now.t});inst.setKit(kit);inst.setVolume(volume,0,.001);
  const m=createMusician({seed}),log=[];
  for(let step=0;step<=clip.seconds*30;step++){
    const t=step/30,ev=[];now.t=t;clip.run(m,t,ev);ev.push(...m.tick({t,environment:clip.env?clip.env(t):env(palette,'fold',0)}));for(const [e,r] of inst.mix(m.mix(t)))log.push({t:e.t,at:r.at,role:e.role,unit:e.unit,note:e.note,gain:e.gain,file:r.unit.file,rate:r.rate,hold:!!e.hold});
    for(const e of ev){const r=inst.play(e);if(r?.unit)log.push({t:e.t,at:r.at,role:e.role,unit:e.unit,note:e.note,gain:e.gain,file:r.unit.file,rate:r.rate,hold:!!e.hold});else if(r&&e.type)log.push({t:e.t,type:e.type,id:e.id});}
  }
  return {buffer:await ctx.startRendering(),log};
}

const LINE=p=>[.25+.5*p,.5-.18*Math.sin(p*Math.PI*2)];
const RISE=p=>[.3+.4*p,.75-.5*p];
export const AUDITION=[
  {at:.5,kind:'line',seconds:3,path:LINE,label:'line, slow'},
  {at:4.6,kind:'line',seconds:.5,path:LINE,label:'same line, fast'},
  {at:6.6,kind:'ribbon',seconds:3,path:RISE,label:'ribbon, slow and rising'},
  {at:10.6,kind:'ribbon',seconds:.6,path:RISE,label:'same ribbon, fast'},
  {at:12.8,kind:'form',seconds:2,path:LINE,label:'shape'},
  {at:16.2,kind:'line',seconds:.2,path:LINE,label:'short tap'},
];
const CROSS=t=>t<10?{primary:'flow',neighbour:'fold',blend:Math.max(0,Math.min(.5,(t-6)/8))}:{primary:'fold',neighbour:'flow',blend:Math.max(0,.5-(t-10)/8)};
export async function renderAudition(id,{mode,seed=1,volume=.7,rate=48000,crossing=false}={}){
  const seconds=crossing?26:22,ctx=new OfflineAudioContext(2,Math.round(seconds*rate),rate);
  const envAt=t=>crossing?CROSS(t):{primary:id,neighbour:id==='flow'?'fold':'flow',blend:.25};
  const kit=await loadKit(ctx,KITS[mode]);for(const p of crossing?['flow','fold']:[id])await kit.ensure(p);
  const now={t:0},inst=createInstrument(ctx,{clock:()=>now.t});inst.setKit(kit);inst.setVolume(volume,0,.001);
  const m=createMusician({seed}),log=[];
  const entry=(e,r)=>r?.unit?{t:+e.t.toFixed(3),role:e.role,unit:e.unit,palette:e.palette,note:e.note,hold:!!e.hold,file:r.unit.file,source:r.unit.source??r.unit.preset,rate:+r.rate.toFixed(4),sounding:r.unit.note!=null?+(r.unit.note+12*Math.log2(r.rate)).toFixed(2):null,pcs:r.unit.note!=null?undefined:r.unit.pcs}:null;
  const plan=crossing?[0,1,2,3,4,5,6,7,8].map(k=>({at:1+k*2.6,kind:'ribbon',seconds:1.2,path:RISE,label:'ribbon '+k})):AUDITION;
  for(let step=0;step<=seconds*60;step++){
    const t=step/60,ev=[],env=envAt(t);now.t=t;
    for(const g of plan){
      const p=(t-g.at)/g.seconds;
      if(Math.abs(t-g.at)<1e-6){const [x,y]=g.path(0);ev.push(...m.strokeStart({t,x,y,kind:g.kind,pressure:.5,environment:env}));}
      else if(p>0&&p<=1+1e-9){const [x,y]=g.path(Math.min(1,p));ev.push(...m.strokeMove({t,x,y,pressure:.5}));if(p>=1-1e-9)ev.push(...m.strokeEnd({t}));}
    }
    if(step%2===0){ev.push(...m.tick({t,environment:env}));for(const [e,r] of inst.mix(m.mix(t)))log.push(entry(e,r));}
    for(const e of ev){const r=inst.play(e);if(r?.unit)log.push(entry(e,r));else if(r&&e.type)log.push({t:+e.t.toFixed(3),type:e.type});}
  }
  return {buffer:await ctx.startRendering(),log,plan:plan.map(({at,kind,seconds,label})=>({at,kind,seconds,label}))};
}
