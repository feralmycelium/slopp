import {PALETTES,paletteNotes,isColour} from './palettes.js';

const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
export const IDIOMS={flow:['walk','ribbon','bloom'],fold:['dyad','pleat','cutout'],soft:['sparse','breath','swell'],print:['scratch','brush','patch'],echo:['contour','band','echoes'],hush:['whisper','smudge','low']};
const TOOL={line:0,fine:0,ribbon:1,form:2,broad:2};
export const toolIndex=kind=>TOOL[kind]??0;
let serial=0;

export function createStroke(ctx,{id,kind,t,x,y,pressure=.5,fresh=true}){
  const idiom=IDIOMS[id][toolIndex(kind)],P=PALETTES[id],n=paletteNotes(id),key='stroke-'+(++serial);
  const {voice,step,att,tired,random,colourOk}=ctx;
  const s={t0:t,y0:y,last:{x,y,t},v:0,c:0,heading:null,since:0,lastNote:t,lastCtl:-Infinity,lastDip:-Infinity,next:t,notes:[],hold:null,first:null,pressure,dip:false};
  const pan=px=>(px-.5)*.8;
  const allowed=m=>colourOk(id)||!isColour(id,m);
  const withPc=(pc,list=n.fine)=>list.filter(allowed).find(m=>m%12===pc)??null;
  const out=[];
  function note(o){
    const e=voice({palette:id,attack:.008,release:2,dur:1.2,send:.4,pan:pan(s.last.x),...o});
    if((o.role==='touch'||o.role==='articulation')&&s.notes.length<12)s.notes.push({t:e.t,note:e.note});
    if(s.first==null&&e.note!=null)s.first=e.note;
    out.push(e);return e;
  }
  function hold(o){
    s.hold=voice({palette:id,hold:true,id:key,attack:.04,offset:.8,send:.35,pan:pan(s.last.x),role:'stroke',...o,note:null});
    if(s.first==null)s.first=n.held[0];
    out.push(s.hold);return s.hold;
  }
  function control(f,params,tau=.06){
    if(!s.hold||(f.t-s.lastCtl<.04))return;
    s.lastCtl=f.t;
    const c={type:'control',id:key,t:f.t,tau,bend:f.bend,pan:pan(f.x),...params};
    if(s.dip&&f.t-s.lastDip>=.14){c.dip={depth:7,tau:.03,recover:.1+.12*(1-f.v)};s.dip=false;s.lastDip=f.t;}
    out.push(c);
  }
  const level=(base,f,span)=>base+span*f.v**.8+3*(f.pressure-.5)+att(f.t);
  const held=()=>n.held[Math.floor(random()*2)];
  function dyad(at,f,role){
    const a=note({t:at,unit:'fine',note:step(id,'fine',f.dir),gain:P.fineGain-2+att(at),attack:.006,release:.5,dur:.45,role,filter:{type:'lowpass',freq:800*2**(f.v*2),q:.7}});
    const b=withPc((a.note+5)%12)??withPc((a.note+7)%12);
    if(b!=null)note({t:at+.004,unit:'fine',note:b,gain:P.fineGain-5+att(at),attack:.006,release:.5,dur:.45,role:'dyad',filter:{type:'lowpass',freq:800*2**(f.v*2),q:.7}});
  }
  const grain=(at,f,role,gain)=>note({t:at,unit:'grain',note:step(id,'fine',f.dir),offset:'random',dur:.05+.05*(1-f.v),attack:.004,release:.05,gain,role,pan:clamp(pan(f.x)+(random()-.5)*.3,-1,1),filter:{type:'bandpass',freq:500*2**(f.v*2),q:.8}});
  const nextGrain=(f,base)=>f.t+(1/base)*(.75+.6*random());
  const f0={t,x,y,v:0,c:0,dir:0,bend:0,pressure};

  const IDIOM={
    walk:{
      start(){note({t:t+.003,unit:'fine',note:step(id,'fine',0),gain:P.fineGain+att(t),role:'touch',release:2.4,dur:1.4,filter:{type:'lowpass',freq:3000,q:.7}});},
      move(f){if(s.since>=.06&&f.t-s.lastNote>=.2&&!tired(f.t)){s.since=0;s.lastNote=f.t;note({t:f.t+.003,unit:'fine',note:step(id,'fine',f.dir),gain:level(P.fineGain-4,f,5),role:'articulation',release:2.2,dur:1.2,filter:{type:'lowpass',freq:1200*2**(f.v*2.4),q:.7}});}},
    },
    ribbon:{
      start(){hold({t:t+.003,unit:'voice',note:held(),gain:P.broadGain-6+att(t),filter:{type:'lowpass',freq:500,q:.8},flutter:0});},
      move(f){control(f,{filter:{freq:400*2**(f.v*3.5)},gain:level(P.broadGain-12,f,13),flutter:14*f.c});},
      release:.9,
    },
    bloom:{
      start(){
        const touch=note({t:t+.003,unit:'broad',note:step(id,'broad',0),gain:P.broadGain+att(t),attack:.06,release:4,dur:3,role:'touch',send:.3});
        if(!tired(t)){const b=n.broad,i=b.indexOf(touch.note);for(const k of [2,4]){const m=b[(i+k)%b.length];if(allowed(m))note({t:t+.15*k/2,unit:'broad',note:m,gain:P.broadGain-3+att(t),attack:1,release:4,dur:3,role:'bloom',pan:pan(x)*.75});}}
        hold({t:t+.01,unit:'voice',note:held(),gain:P.broadGain-10+att(t),filter:{type:'lowpass',freq:350,q:.7}});
      },
      move(f){control(f,{filter:{freq:350*2**(f.v*2.8)},gain:level(P.broadGain-14,f,10)});},
      release:1.5,
    },
    dyad:{
      start(){dyad(t+.003,f0,'touch');},
      move(f){if(f.t-s.lastNote>=.25&&(f.c>.4||s.since>=.22)&&!tired(f.t)){s.since=0;s.lastNote=f.t;dyad(f.t+.003,f,'articulation');}},
    },
    pleat:{
      start(){hold({t:t+.003,unit:'voice',note:held(),gain:P.broadGain-5+att(t),filter:{type:'lowpass',freq:600,q:.7}});},
      move(f){if(s.since>=.05){s.since=0;s.dip=true;}control(f,{filter:{freq:450*2**(f.v*3)},gain:level(P.broadGain-11,f,11)});},
      release:.5,
    },
    cutout:{
      start(){note({t:t+.003,unit:'stab',note:step(id,'broad',0),gain:P.broadGain+2+att(t),attack:.004,release:.12,dur:.16,role:'touch',filter:{type:'lowpass',freq:900,q:.8}});},
      move(f){if(s.since>=.08&&f.t-s.lastNote>=.12&&!tired(f.t)){s.since=0;s.lastNote=f.t;note({t:f.t+.003,unit:'stab',note:step(id,'broad',f.dir),gain:level(P.broadGain,f,4),attack:.004,release:.12,dur:.16,role:'articulation',filter:{type:'lowpass',freq:900*2**(f.v*1.8),q:.8}});}},
    },
    sparse:{
      start(){note({t:t+.003,unit:'fine',note:step(id,'fine',0),gain:P.fineGain-1+att(t),attack:.03,release:5,dur:2.5,send:.7,role:'touch'});},
      move(f){if(s.since>=.3&&f.t-s.lastNote>=2.5){s.since=0;s.lastNote=f.t;note({t:f.t+.003,unit:'fine',note:step(id,'fine',f.dir),gain:level(P.fineGain-3,f,3),attack:.04,release:5,dur:2.5,send:.7,role:'articulation'});}},
    },
    breath:{
      start(){hold({t:t+.003,unit:'breath',note:n.rest[0],gain:P.broadGain-10+att(t),send:.5,filter:{type:'bandpass',freq:400*2**((1-y)*2.5),q:2.5}});},
      move(f){control(f,{filter:{freq:400*2**((1-f.y)*2.5)*2**(f.v*1.6),q:2.5},gain:level(P.broadGain-16,f,15)},.12);},
      release:1.8,
    },
    swell:{
      start(){hold({t:t+.003,unit:'breath',note:n.rest[0],gain:P.broadGain-9+att(t),send:.55,filter:{type:'bandpass',freq:500*2**((1-y)*2.2),q:1.8}});note({t:t+.01,unit:'fine',note:step(id,'fine',0),gain:P.fineGain-4+att(t),attack:.06,release:5,dur:2.5,send:.7,role:'touch'});},
      move(f){control(f,{filter:{freq:500*2**((1-f.y)*2.2)*2**(f.v*1.4),q:1.8},gain:level(P.broadGain-14,f,12)},.3);},
      release:2.2,
    },
    scratch:{
      start(){grain(t+.003,f0,'touch',P.fineGain-3+att(t));s.next=t+.2;},
      move(f){if(f.v>.03&&f.t>=s.next&&!tired(f.t)){s.next=nextGrain(f,2.5+7.5*f.v);grain(f.t+.003,f,'grain',level(P.fineGain-7,f,9));}},
    },
    brush:{
      start(){hold({t:t+.003,unit:'voice',note:held(),gain:P.broadGain-8+att(t),filter:{type:'lowpass',freq:600,q:.7}});s.next=t+.3;},
      move(f){control(f,{filter:{freq:600*2**(f.v*3),q:.7},gain:level(P.broadGain-11,f,12)});if(f.v>.05&&f.t>=s.next&&!tired(f.t)){s.next=nextGrain(f,1+9*f.v);grain(f.t+.003,f,'grain',level(P.fineGain-12,f,10));}},
      release:.8,
    },
    patch:{
      start(){const a=note({t:t+.003,unit:'fine',note:step(id,'fine',0),gain:P.fineGain-3+att(t),attack:.01,release:3,dur:2,role:'touch'});const b=withPc((a.note+7)%12);if(b!=null)note({t:t+.008,unit:'fine',note:b,gain:P.fineGain-6+att(t),attack:.01,release:3,dur:2,role:'dyad'});
        hold({t:t+.01,unit:'voice',note:held(),gain:P.broadGain-10+att(t),filter:{type:'bandpass',freq:450,q:.8}});},
      move(f){control(f,{filter:{freq:450*2**(f.v*2.4),q:.8},gain:level(P.broadGain-14,f,9)});},
      release:1.2,
    },
    contour:{
      start(){note({t:t+.003,unit:'fine',note:step(id,'fine',0),gain:P.fineGain+att(t),role:'touch',release:2,dur:1});},
      move(f){if(f.t-s.lastNote>=.2&&(f.c>.35||s.since>=.12)&&!tired(f.t)){s.since=0;s.lastNote=f.t;note({t:f.t+.003,unit:'fine',note:step(id,'fine',f.dir),gain:level(P.fineGain-3,f,4),role:'articulation',release:2,dur:1,filter:{type:'lowpass',freq:1500*2**(f.v*2),q:.7}});}},
      end(at){
        const seq=s.notes,span=seq.length?Math.min(2,seq.at(-1).t-seq[0].t):0;
        for(let k=1;k<=(P.echo||2);k++){const base=at+.35+(k-1)*(span*.8+.45);
          for(const e of seq)note({t:base+(e.t-seq[0].t)*.8,unit:'fine',note:e.note,gain:P.fineGain-5*k+att(at),send:.5+.15*k,release:2.5,dur:1,role:'echo',filter:{type:'lowpass',freq:3000/(k+1),q:.7}});}
      },
    },
    band:{
      start(){hold({t:t+.003,unit:'voice',note:held(),gain:P.broadGain-6+att(t),filter:{type:'lowpass',freq:700,q:.7}});
        const a=note({t:t+.005,unit:'fine',note:step(id,'fine',0),gain:P.fineGain-2+att(t),role:'touch',release:2,dur:1});
        for(const k of [1,2])note({t:t+.005+.45*k,unit:'fine',note:a.note,gain:P.fineGain-2-6*k+att(t),send:.5+.15*k,release:2.5,dur:1,role:'echo'});},
      move(f){control(f,{filter:{freq:600*2**(f.v*3)},gain:level(P.broadGain-12,f,12)});},
      release:1.2,
    },
    echoes:{
      start(){const a=note({t:t+.003,unit:'broad',note:step(id,'broad',0),gain:P.broadGain+att(t),attack:.06,release:4,dur:3,role:'touch',send:.4});
        for(const k of [1,2])note({t:t+.5*k,unit:'broad',note:a.note,gain:P.broadGain-5*k+att(t),attack:.06,release:4,dur:2.5,send:.5+.15*k,role:'echo'});
        hold({t:t+.01,unit:'voice',note:held(),gain:P.broadGain-11+att(t),filter:{type:'lowpass',freq:500,q:.7}});},
      move(f){control(f,{filter:{freq:450*2**(f.v*2.8)},gain:level(P.broadGain-15,f,10)});},
      release:1.5,
    },
    whisper:{
      start(){hold({t:t+.003,unit:'breath',note:n.rest[0],gain:P.broadGain-15+att(t),send:.6,filter:{type:'bandpass',freq:1800,q:3}});
        const top=n.fine.filter(allowed).at(-1);note({t:t+.02,unit:'fine',note:top,gain:P.fineGain-8+att(t),send:.85,attack:.01,release:4,dur:1.5,role:'touch'});},
      move(f){control(f,{filter:{freq:1500*2**(f.v*1.5),q:3},gain:level(P.broadGain-19,f,11)},.2);},
      release:2,
    },
    smudge:{
      start(){hold({t:t+.003,unit:'sub',note:n.rest[0],gain:P.broadGain-4+att(t),filter:{type:'lowpass',freq:140,q:.7}});},
      move(f){control(f,{filter:{freq:140*2**(f.v*2.7)},gain:level(P.broadGain-9,f,11)},.6);},
      release:3,
    },
    low:{
      start(){hold({t:t+.003,unit:'voice',note:n.held[0],gain:P.broadGain-5+att(t),filter:{type:'lowpass',freq:200,q:.7}});
        note({t:t+.02,unit:'broad',note:n.broad[0],gain:P.broadGain-4+att(t),attack:1,release:5,dur:3,role:'bloom',send:.5});},
      move(f){control(f,{filter:{freq:200*2**(f.v*2.8)},gain:level(P.broadGain-10,f,10)},.9);},
      release:3,
    },
  };
  const spec=IDIOM[idiom];

  return {
    id:key,idiom,palette:id,
    start(){spec.start();return out.splice(0);},
    move({t:now,x:px,y:py,pressure:pr=s.pressure}){
      const dt=clamp(now-s.last.t,1e-3,.25),dx=px-s.last.x,dy=py-s.last.y,dd=Math.hypot(dx,dy);
      s.v+=(clamp(dd/dt/1.2,0,1)-s.v)*(1-Math.exp(-dt/.05));
      if(dd>1e-5){const heading=Math.atan2(dy,dx);if(s.heading!==null){let turn=Math.abs(heading-s.heading);if(turn>Math.PI)turn=2*Math.PI-turn;s.c+=(clamp(turn/dt/14,0,1)-s.c)*(1-Math.exp(-dt/.12));}s.heading=heading;}
      else s.c*=Math.exp(-dt/.2);
      s.since+=dd;s.last={x:px,y:py,t:now};s.pressure=pr;
      spec.move({t:now,x:px,y:py,v:s.v,c:s.c,dir:-dy*100,bend:clamp((s.y0-py)*60,-25,25),pressure:pr});
      return out.splice(0);
    },
    end({t:at}){
      spec.end?.(at);
      if(s.hold)out.push({type:'release',id:key,t:at,tau:spec.release??1});
      if(fresh&&at-s.t0>=.6&&s.first!=null&&ctx.canAnswer(at,id)){
        const a=withPc((s.first+5)%12)??withPc((s.first+7)%12);
        if(a!=null)note({t:at+.12,unit:'fine',note:a,gain:P.fineGain-7+att(at),attack:id==='soft'||id==='hush'?.05:.01,release:2.5,dur:1.2,send:.5,role:'answer'});
      }
      return out.splice(0);
    },
  };
}

