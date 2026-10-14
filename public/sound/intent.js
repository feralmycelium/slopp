export const LIMITS={pitchCents:40,autonomy:{detail:.3,wash:.22,scratch:.08}};

const ACK=.15;
const LAYERS={
  speed:{ack:.12,bloom:1.2,release:3},
  wash:{ack:.08,bloom:3.5,release:5,hold:3,curve:.3,ref:1.5},
  scratch:{ack:.04,bloom:2,release:3,hold:2,curve:.44,ref:.8},
};
const RATE_SMOOTH=.1,SPACE_HOLD=1.5,SPACE_GAIN=.5,PINCH_REF=20,GLIDE_UP=.3,GLIDE_BACK=1.2,LOOK_REF=1.5,LOOK_SHARE=.6;
const ease=(dt,tau)=>1-Math.exp(-dt/tau);
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));

function envelope(spec){
  let ack=0,bloom=0;
  return (dt,drive,level)=>{
    const ackTarget=ACK*Math.min(1,drive*4);
    ack+=(ackTarget-ack)*ease(dt,ackTarget>ack?spec.ack:spec.release);
    bloom+=(level-bloom)*ease(dt,level>bloom?spec.bloom:spec.release);
    return Math.min(1,ack+(1-ACK)*bloom);
  };
}

function strokeChannel(spec){
  let rate=0,energy=0,lastEvent=-Infinity;
  const shape=envelope(spec);
  return {
    add(d,dt,t){rate+=(d/dt-rate)*ease(dt,RATE_SMOOTH);lastEvent=t;},
    step(dt,t){
      if(t-lastEvent>RATE_SMOOTH)rate*=Math.exp(-dt/RATE_SMOOTH);
      const drive=Math.min(4,rate/spec.ref);
      energy+=(drive-energy/spec.hold)*dt;
      return shape(dt,drive,Math.tanh(spec.curve*energy));
    },
  };
}

export function createIntent(){
  const speedShape=envelope(LAYERS.speed),wash=strokeChannel(LAYERS.wash),scratch=strokeChannel(LAYERS.scratch);
  let last=null,lastStep=null,speedTarget=0,pinchSum=0,space=0,cents=0,pressure=.5,flutter=0,heading=null,lookRate=0,lastLook=null,lookPending=0,lookSeen=-Infinity;
  const queue=[];
  let held=null,heldPath=0,orphan=null;
  const span=(a,b,view)=>Math.hypot(b.x-a.x,b.y-a.y)/Math.min(view.w,view.h);
  const when=t=>lastStep===null?t:Math.max(t,lastStep);
  function advance(dt,t,pinchRate){
    while(queue.length&&queue[0].t<=t)queue.shift().apply();
    space+=(-pinchRate*SPACE_GAIN-space/SPACE_HOLD)*dt;
    const centsTarget=LIMITS.pitchCents*Math.tanh(pinchRate/2);
    cents+=(centsTarget-cents)*ease(dt,Math.abs(centsTarget)>Math.abs(cents)?GLIDE_UP:GLIDE_BACK);
    flutter*=Math.exp(-dt/1.5);
    if(t-lookSeen>RATE_SMOOTH)lookRate*=Math.exp(-dt/RATE_SMOOTH);
    const stir=Math.max(speedTarget,LOOK_SHARE*Math.min(1,lookRate/LOOK_REF));
    return {
      speed:speedShape(dt,stir,stir),
      wash:wash.step(dt,t),
      scratch:scratch.step(dt,t),
      space:Math.tanh(space),
      pitchCents:clamp(cents,-LIMITS.pitchCents,LIMITS.pitchCents),
      pressure,flutter,
    };
  }
  function move({t,x,y,kind,view,pressure:p=pressure},path=0,anchor=last){
    const dx=x-anchor.x,dy=y-anchor.y,d=path+span(anchor,{x,y},view),gap=t-last.t,at=when(t);
    const channel=kind==='broad'?wash:scratch,weight=d*(.6+.8*clamp(p,0,1));
    queue.push({t:at,apply:()=>channel.add(weight,gap,at)});
    if(dx||dy){
      const angle=Math.atan2(dy,dx);
      if(heading!==null&&kind!=='broad'){let turn=Math.abs(angle-heading);if(turn>Math.PI)turn=2*Math.PI-turn;flutter+=(Math.min(1,turn/.6)-flutter)*.2;}
      heading=angle;
    }
    last={x,y,t};
  }
  return {
    stroke(sample){
      pressure=clamp(sample.pressure??.5,0,1);
      if(!last){last={x:sample.x,y:sample.y,t:sample.t};held=null;return;}
      const anchor=held??last;
      if(sample.t>last.t){move(sample,heldPath,anchor);held=null;heldPath=0;}
      else{heldPath+=span(anchor,sample,sample.view);held={...sample};}
    },
    strokeEnd(){if(held&&last)orphan={from:last,to:held,path:heldPath};last=null;heading=null;held=null;heldPath=0;},
    motion({speed}){speedTarget=clamp(speed,0,1);},
    look({t,dx,dy,view}){
      lookPending+=Math.hypot(dx,dy)/Math.min(view.w,view.h);
      if(lastLook===null){lastLook=t;lookPending=0;return;}
      if(t<=lastLook)return;
      const rate=lookPending/(t-lastLook),gap=t-lastLook,at=when(t);
      queue.push({t:at,apply:()=>{lookRate+=(rate-lookRate)*ease(gap,RATE_SMOOTH);lookSeen=at;}});
      lastLook=t;lookPending=0;
    },
    pinch({delta}){pinchSum+=delta;},
    step(t){
      if(lastStep===null)lastStep=t-1/60;
      if(held&&last&&t>last.t){move({...held,t},heldPath,held);held=null;heldPath=0;}
      if(orphan&&t>orphan.from.t){const keep=last;last=orphan.from;move({...orphan.to,t},orphan.path,orphan.to);last=keep;orphan=null;}
      const total=Math.max(1e-3,t-lastStep),n=Math.min(60,Math.max(1,Math.ceil(total*60-1e-6))),dt=total/n;
      const pinchRate=pinchSum/total/PINCH_REF;pinchSum=0;
      queue.sort((a,b)=>a.t-b.t);
      let out;
      for(let i=1;i<=n;i++)out=advance(dt,i===n?t:lastStep+dt*i,pinchRate);
      lastStep=t;
      return out;
    },
  };
}

export function seededRandom(seed){
  let a=seed>>>0;
  return ()=>{a=a+0x6d2b79f5>>>0;let t=a;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296;};
}

export function createAutonomy(seed){
  const random=seededRandom(seed),waves={};
  for(const key of Object.keys(LIMITS.autonomy)){
    const weights=[random()+.3,random()+.3,random()+.3],sum=weights.reduce((a,b)=>a+b);
    waves[key]=weights.map(w=>({weight:w/sum,period:30+random()*90,phase:random()*Math.PI*2}));
  }
  return t=>Object.fromEntries(Object.entries(waves).map(([key,parts])=>{
    const wave=parts.reduce((n,p)=>n+p.weight*Math.sin(2*Math.PI*t/p.period+p.phase),0);
    return [key,LIMITS.autonomy[key]*(.5+.5*wave)];
  }));
}

