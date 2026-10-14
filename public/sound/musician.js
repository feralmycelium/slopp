import {PALETTES,paletteNotes,isColour} from './palettes.js';
import {createStroke} from './strokes.js';

const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
function rng(seed){let a=seed>>>0;return()=>{a=a+0x6d2b79f5>>>0;let t=a;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296;};}
const hash=s=>[...String(s)].reduce((h,c)=>Math.imul(h^c.charCodeAt(0),16777619)>>>0,2166136261);

export const RULES={restAfter:4,restLevel:-27,spanMin:20,spanMax:60,onsetWindow:10,onsetSoftLimit:6,fatigueAfter:20,maxAttenuation:9,
  articulationGap:1/3,blendTauSlow:10,blendTauFast:2.5,pivotLow:.42,salienceEnter:.04,salienceExit:.025,detailGap:6,breathGap:4,travelGap:25,hearGap:6,hearAfterStroke:1.5};

export function createMusician({seed=1}={}){
  const random=rng(seed),walk={},onsets=[];
  let lastInput=-Infinity,activeSince=null,lastStep=null,speed=0,weight=0,primary='flow',neighbour='fold',rawBlend=0;
  let stroke=null,restNext=2,lastTravel=-Infinity;
  let sal=0,salOn=false,salId=null,salT=null,lastDetail=-Infinity,space=0,glide=0,pinchRate=0,lastPinch=null,lastBreath=-Infinity;
  let lookRate=0,lookT=null,lastTurn=-Infinity,stir=0;
  let lastAnswer=-Infinity,lastStrokeEnd=-Infinity,lastHeard=-Infinity;
  const heard=new Set();

  const palette=()=>weight>.5?neighbour:primary;
  const allowColour=id=>id===primary&&rawBlend<RULES.pivotLow&&weight<.5;
  function attenuation(t){
    while(onsets.length&&onsets[0]<t-RULES.onsetWindow)onsets.shift();
    return -Math.min(RULES.maxAttenuation,Math.max(0,onsets.length-RULES.onsetSoftLimit));
  }
  const tired=t=>activeSince!==null&&t-activeSince>RULES.fatigueAfter;
  function touch(t){if(t-lastInput>RULES.restAfter)activeSince=t;lastInput=t;}
  function step(id,unit,dir=0){
    const notes=paletteNotes(id)[unit],key=id+unit;let i=walk[key]??Math.floor(notes.length/2);
    for(let tries=0;tries<12;tries++){
      let move=(random()<.6?1:2)*(dir?Math.sign(dir+(random()-.5)*.6)||1:(random()<.5?-1:1));
      let next=i+move;if(next<0||next>=notes.length)next=i-move;
      next=clamp(next,0,notes.length-1);
      if(next!==i&&(allowColour(id)||!isColour(id,notes[next]))){walk[key]=next;return notes[next];}
    }
    const safe=notes.findIndex((n,k)=>k!==i&&!isColour(id,n));walk[key]=safe;return notes[safe];
  }
  const voice=(o)=>({pan:0,send:.35,detune:0,colourOk:allowColour(o.palette),...o});
  function glint(id,near,t,gain,pan=0){
    const fine=paletteNotes(id).fine.filter(n=>allowColour(id)||!isColour(id,n));
    const note=fine.find(n=>n%12===near%12)??fine.reduce((a,b)=>Math.abs(b%12-near%12)<Math.abs(a%12-near%12)?b:a);
    return voice({t,palette:id,unit:'fine',note,gain,attack:.006,release:2,dur:.8,role:'ack',send:.5,pan});
  }
  function answerTurn(t,pan){
    lastTurn=t;const id=primary,note=paletteNotes(id).held[Math.floor(random()*2)];
    return [glint(id,note,t+.003,PALETTES[id].fineGain-13,pan),voice({t:t+.01,palette:id,unit:'held',note,gain:-20,attack:.25,release:3,dur:2,role:'turn',send:.6,pan})];
  }
  const span=st=>{const xs=st.points.map(p=>p[0]),ys=st.points.map(p=>p[1]);return Math.hypot(Math.max(...xs)-Math.min(...xs),Math.max(...ys)-Math.min(...ys));};
  const picker=(id,r)=>list=>{const safe=list.filter(n=>allowColour(id)||!isColour(id,n));return safe[Math.floor(r()*safe.length)];};
  // One voice per stroke, at most ten, over about 2.8 s; a fixed pan replaces the random pan of fine notes.
  function figure({t,id,r,pick,strokes,role,quieter=0,pan}){
    const {fine,broad}=paletteNotes(id),fixed=pan===undefined?{}:{pan};
    const keep=strokes.length>10?strokes.filter((_,i)=>i%Math.ceil(strokes.length/10)===0):strokes;
    return keep.map((st,i)=>{
      const at=t+.1+2.8*i/Math.max(1,keep.length),size=span(st);
      if(st.kind==='form')return voice({t:at,palette:id,unit:'broad',note:pick(broad),gain:PALETTES[id].broadGain-2-quieter,attack:.3,release:4,dur:2.5,role,...fixed});
      if(size>250)return voice({t:at,palette:id,unit:'broad',note:pick(broad),gain:PALETTES[id].broadGain-quieter,attack:.9,release:4,dur:3,role,...fixed});
      return voice({t:at,palette:id,unit:'fine',note:pick(fine),gain:PALETTES[id].fineGain-3-quieter,attack:.008,release:2,dur:1,role,pan:pan??r()-.5});
    });
  }
  // A drawing coming into view is heard once, 6 dB under a surprise, panned to where it sits on screen.
  // It plays in the current primary palette (the loaded kit), not the drawing's own environment, and is not visitor input, so it never calls touch().
  function hear({t,id,item,x=0}){
    if(!item?.strokes?.length||heard.has(id)||t-lastHeard<RULES.hearGap||stroke!==null||t-lastStrokeEnd<RULES.hearAfterStroke)return [];
    heard.add(id);lastHeard=t;const r=rng(hash(id));
    return figure({t,id:primary,r,pick:picker(primary,r),strokes:item.strokes,role:'hear',quieter:6,pan:clamp(x,-.6,.6)});
  }
  const strokeContext={voice,step,att:t=>attenuation(t),tired,random,colourOk:id=>allowColour(id),
    canAnswer(t,id){if(t-lastAnswer<(id==='hush'?12:6))return false;lastAnswer=t;return true;}};

  return {
    strokeStart({t,x,y,kind,pressure=.5,environment}){
      if(environment)this.environment(environment);
      touch(t);onsets.push(t);
      stroke=createStroke(strokeContext,{id:primary,kind,t,x,y,pressure,fresh:t-lastStrokeEnd>=2.5});
      return stroke.start();
    },
    strokeMove({t,x,y,pressure=.5}){
      if(!stroke)return[];touch(t);
      return stroke.move({t,x,y,pressure});
    },
    strokeEnd({t}){if(!stroke)return[];touch(t);const ev=stroke.end({t});stroke=null;lastStrokeEnd=t;return ev;},
    motion({t,speed:s}){speed=clamp(s,0,1);},
    look({t,dx,dy}){
      const d=Math.hypot(dx,dy)/600;
      if(lookT!==null&&t>lookT)lookRate+=(d/(t-lookT)-lookRate)*.3;lookT=t;
      if(lookRate<.25||t-lastTurn<8||t-lastInput<3)return [];
      return answerTurn(t,Math.sign(dx)*.5);
    },
    turn({t}){return t-lastTurn<8?[]:answerTurn(t,0);},
    environment(e){if(e.primary!==primary){if(e.primary===neighbour)weight=1-weight;else weight=e.blend;primary=e.primary;}neighbour=e.neighbour;rawBlend=e.blend;},
    pinch({t,delta}){
      if(lastPinch!==null&&t>lastPinch)pinchRate+=(delta/(t-lastPinch)/20-pinchRate)*.3;lastPinch=t;
      if(!delta||t-lastBreath<RULES.breathGap||t-lastInput<3)return [];
      lastBreath=t;const id=primary,note=paletteNotes(id).held[delta>0?1:0];
      return [glint(id,note,t+.003,PALETTES[id].fineGain-13),voice({t:t+.01,palette:id,unit:'held',note,gain:-22,attack:.4,release:2.5,dur:2.5,role:'breath',send:.6})];
    },
    salience({t,prominence,id,x,item}){
      const tau=prominence>sal?1:3,dt=salT===null?1/30:clamp(t-salT,0,1);salT=t;sal+=(prominence-sal)*(1-Math.exp(-dt/tau));
      if(!salOn&&sal>RULES.salienceEnter){salOn=true;salId=id;}
      else if(salOn&&sal<RULES.salienceExit)salOn=false;
      if(salOn)salId=id;
      return salOn?hear({t,id,item,x}):[];
    },
    surprise({t,seed:s,strokes,environment}){
      if(environment)this.environment(environment);
      touch(t);const id=primary,r=rng(s),fine=paletteNotes(id).fine,pick=picker(id,r);
      const events=figure({t,id,r,pick,strokes,role:'surprise'}),voiced=events.length;
      for(let k=0;events.length<3||(voiced===1&&k<3);k++){
        if(k>6)break;
        events.push(voice({t:t+.5+k*.8,palette:id,unit:'fine',note:pick(fine),gain:PALETTES[id].fineGain-4-k,attack:.008,release:2,dur:1,role:'surprise',pan:(k-1)*.4}));
      }
      const first=events.reduce((a,b)=>b.t<a.t?b:a);
      if(first.unit!=='fine'||first.t-t>.015)events.unshift(glint(id,first.note,t+.003,PALETTES[id].fineGain-8));
      return events;
    },
    reset(){heard.clear();},
    mix(t){
      const restingFor=t-lastInput;
      return {space:Math.tanh(space),glideCents:clamp(glide,-40,40),weight,primary,neighbour,stir,blendTau:RULES.blendTauSlow+(RULES.blendTauFast-RULES.blendTauSlow)*speed,
        colourOk:primary===neighbour?{[primary]:true}:{[primary]:allowColour(primary),[neighbour]:allowColour(neighbour)},
        restDuck:restingFor<RULES.restAfter?-6:0,salience:salOn?Math.min(1,sal/.1):0,attenuation:attenuation(t)};
    },
    tick({t,environment}){
      const dt=lastStep===null?1/30:clamp(t-lastStep,1e-3,1);lastStep=t;
      if(environment){this.environment(environment);const tau=RULES.blendTauSlow+(RULES.blendTauFast-RULES.blendTauSlow)*speed;weight+=(rawBlend-weight)*(1-Math.exp(-dt/tau));}
      if(lastPinch!==null&&t-lastPinch>.15)pinchRate*=Math.exp(-dt/.15);
      if(lookT!==null&&t-lookT>.15)lookRate*=Math.exp(-dt/.3);
      const stirTarget=Math.max(speed,clamp(lookRate/2,0,1));stir+=(stirTarget-stir)*(1-Math.exp(-dt/(stirTarget>stir?1:3)));
      space+=(-pinchRate*.8-space/1.5)*dt;glide+=(40*Math.tanh(pinchRate/2)-glide)*(1-Math.exp(-dt/(Math.abs(pinchRate)>.05?.3:1.2)));
      if(activeSince!==null&&t-lastInput>RULES.restAfter)activeSince=null;
      const out=[];
      if(t>=restNext){
        const id=palette(),mix=PALETTES[id].restMix,roll=random(),n=paletteNotes(id),len=RULES.spanMin+random()*(RULES.spanMax-RULES.spanMin);
        const kind=roll<mix.hum?'hum':roll<mix.hum+mix.held?'held':'none';
        if(kind==='hum')out.push(voice({t,palette:id,unit:'rest',note:n.rest[0],gain:RULES.restLevel-random()*4,attack:6,release:8,dur:len*.7,role:'rest',send:.5,filterCycle:30}));
        if(kind==='held')out.push(voice({t,palette:id,unit:'held',note:n.held[Math.floor(random()*2)],gain:RULES.restLevel+2-random()*4,attack:5,release:8,dur:len*.6,role:'rest',send:.7,filterCycle:20+random()*20}));
        restNext=t+len;
      }
      if(salOn&&t-lastDetail>RULES.detailGap&&t-lastInput>1.5){
        lastDetail=t;const id=palette(),r=rng(hash(salId)),fine=paletteNotes(id).fine,boost=Math.min(3,3*sal/.1);
        for(let k=0;k<3;k++){const note=fine[Math.floor(r()*fine.length)];if(!allowColour(id)&&isColour(id,note))continue;
          out.push(voice({t:t+k*.45,palette:id,unit:'fine',note,gain:-13+boost-k*2,attack:.01,release:2.5,dur:1.2,role:'detail',pan:(k-1)*.4}));}
      }
      if(stir>.4&&t-lastTravel>RULES.travelGap&&t-lastInput>RULES.restAfter){
        lastTravel=t;const id=palette();out.push(voice({t,palette:id,unit:'fine',note:paletteNotes(id).fine[Math.floor(random()*8)],gain:-24,attack:.02,release:4,dur:2,role:'travel',send:.7}));
      }
      return out;
    },
  };
}
