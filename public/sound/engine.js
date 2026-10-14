import {seededRandom} from './intent.js';

const dB=x=>10**(x/20);
const RESONANCE_HZ=[1318.51,1567.98,1760,2349.32];
const LOOKAHEAD=.25,SWITCH=.4;
const GRAIN={detail:1,wash:1.6,scratch:1.5},BUS_DB={detail:-8,wash:-6,scratch:-4},RING=3.2,HEADROOM_DB=-2;

function impulse(ctx,seconds,random){
  const length=Math.round(ctx.sampleRate*seconds),buffer=ctx.createBuffer(2,length,ctx.sampleRate);
  for(let c=0;c<2;c++){const data=buffer.getChannelData(c);for(let i=0;i<length;i++)data[i]=(random()*2-1)*Math.exp(-4.5*i/length);}
  return buffer;
}

function hann(n=64){return Float32Array.from({length:n},(_,i)=>Math.sin(Math.PI*i/(n-1))**2);}

export function createSoundEngine({ctx,buffers,manifest,destination=ctx.destination,seed=1,mode='a'}){
  const curve=hann(),length=buffers.master.duration;
  const settled=new WeakMap();
  function setParam(param,value,t,tau){
    const prev=settled.get(param);
    if(prev!==undefined&&Math.abs(prev-value)<=1e-3*Math.max(.01,Math.abs(value)))return;
    settled.set(param,value);param.setTargetAtTime(value,t,tau);
  }
  let random=seededRandom(seed),active=mode,startAt=0,started=false;
  const volume=ctx.createGain(),limiter=ctx.createDynamicsCompressor(),space=ctx.createConvolver(),spaceReturn=ctx.createGain();
  limiter.threshold.value=-3;limiter.knee.value=0;limiter.ratio.value=20;limiter.attack.value=.002;limiter.release.value=.15;
  space.buffer=impulse(ctx,3.4,seededRandom(seed^0x5eed));spaceReturn.gain.value=.5;
  const headroom=ctx.createGain();headroom.gain.value=dB(HEADROOM_DB);
  volume.connect(limiter).connect(headroom).connect(destination);space.connect(spaceReturn).connect(volume);

  function filter(type,frequency,q=.7){const f=ctx.createBiquadFilter();f.type=type;f.frequency.value=frequency;f.Q.value=q;return f;}
  function resonators(input,output){
    for(const hz of RESONANCE_HZ){const ring=filter('bandpass',hz,28),level=ctx.createGain();level.gain.value=RING;input.connect(ring).connect(level).connect(output);}
  }
  function version(key){
    const fade=ctx.createGain(),wetFade=ctx.createGain(),dry=ctx.createGain(),wet=ctx.createGain();
    const trim=dB(manifest.trimDb?.[key]??0);
    fade.gain.value=wetFade.gain.value=key===active?1:0;dry.gain.value=wet.gain.value=trim;
    dry.connect(fade).connect(volume);wet.connect(wetFade).connect(space);
    const layer=(chain,send)=>{
      const bus=ctx.createGain(),mix=ctx.createGain(),sendGain=ctx.createGain();bus.gain.value=0;sendGain.gain.value=send;
      let node=bus;for(const f of chain){node.connect(f);node=f;}
      node.connect(mix);mix.connect(dry);mix.connect(sendGain).connect(wet);
      return {bus,send:sendGain,baseSend:send,next:0,mix};
    };
    const detailTone=filter('bandpass',2500,.6),detail=layer([detailTone],.35);
    const flutter=ctx.createOscillator(),flutterDepth=ctx.createGain();flutterDepth.gain.value=0;flutter.frequency.value=.2;
    flutter.connect(flutterDepth).connect(detail.bus.gain);flutter.start();
    const wash=layer([filter('lowpass',1200)],.4);
    const scratchTone=filter('highpass',2500),scratch=layer([scratchTone],.3);resonators(scratch.bus,scratch.mix);
    return {key,fade,wetFade,dry,wet,detail,detailTone,flutter,flutterDepth,wash,scratch,beds:{}};
  }
  const A=version('a'),B=version('b');

  function bed(v,name,gain,send){
    const source=ctx.createBufferSource(),g=ctx.createGain(),s=ctx.createGain();
    source.buffer=buffers[name];source.loop=true;g.gain.value=gain;s.gain.value=send;
    source.connect(g);g.connect(v.dry);g.connect(s).connect(v.wet);
    v.beds[name]={source,gain:g,send:s,baseSend:send};return g;
  }
  const tiltA=filter('highshelf',3000);tiltA.gain.value=0;
  bed(A,'master',1,.12).disconnect();A.beds.master.gain.connect(tiltA);tiltA.connect(A.dry);tiltA.connect(A.beds.master.send).connect(A.wet);
  const padTone=filter('lowpass',2000),leadTone=filter('highshelf',3000);leadTone.gain.value=0;
  bed(B,'pad',dB(-3),0).disconnect();B.beds.pad.gain.connect(padTone).connect(B.dry);
  bed(B,'lead',dB(-2),0).disconnect();B.beds.lead.gain.connect(leadTone).connect(B.dry);
  bed(B,'melody',1,0);bed(B,'texture',dB(-6),0);bed(B,'air',1,0);bed(B,'reverb',1,0);bed(B,'delay',1,0);
  for(const v of [A,B])for(const b of Object.values(v.beds))if(b.baseSend===0)b.send.disconnect();

  const sources={a:{detail:['master'],wash:['master'],scratch:['master']},b:{detail:['lead','melody'],wash:['pad'],scratch:['texture','lead']}};

  function playhead(t){return(((t-startAt)%length)+length)%length;}
  function grain(name,when,back,dur,{gain,rate,detune,to}){
    const buffer=buffers[name],span=dur*rate+.02;
    let offset=playhead(when)-back;if(offset<0)offset+=length;if(offset+span>length)offset=Math.max(0,length-span);
    const src=ctx.createBufferSource(),g=ctx.createGain(),pan=ctx.createStereoPanner();
    src.buffer=buffer;src.playbackRate.value=rate;src.detune.value=detune;pan.pan.value=random()*1.2-.6;
    g.gain.value=0;g.gain.setValueCurveAtTime(curve.map(x=>x*gain),when,dur);
    src.connect(g).connect(pan).connect(to);src.start(when,offset,span);src.stop(when+dur+.02);
    src.onended=()=>pan.disconnect();
  }
  function scatter(layer,t0,t1,density,make){
    if(density<.05){layer.next=Math.max(layer.next,t1);return;}
    if(layer.next<t0)layer.next=t0+(-Math.log(1-random()))/density;
    while(layer.next<t1){make(layer.next);layer.next+=(-Math.log(1-random()))/density;}
  }
  const pick=list=>list[Math.floor(random()*list.length)];

  function apply(v,s,t){
    const set=(param,value,tau=.08)=>setParam(param,value,t,tau);
    const detail=Math.max(s.speed,s.auto.detail),wash=Math.max(s.wash,s.auto.wash),scratch=Math.max(s.scratch,s.auto.scratch);
    const wetScale=Math.max(0,1+s.space*.8);
    set(v.detail.bus.gain,detail*dB(BUS_DB.detail));set(v.flutterDepth.gain,s.speed*dB(BUS_DB.detail)*.35);set(v.flutter.frequency,.2+2.8*s.speed,.3);
    set(v.detailTone.frequency,2500+2000*s.speed,.3);
    set(v.wash.bus.gain,wash*dB(BUS_DB.wash));set(v.scratch.bus.gain,scratch*dB(BUS_DB.scratch)*(.7+.6*s.pressure));
    for(const l of [v.detail,v.wash,v.scratch])set(l.send.gain,l.baseSend*wetScale,.3);
    for(const b of Object.values(v.beds))set(b.send.gain,b.baseSend*wetScale,.3);
    return {detail,wash,scratch};
  }
  function applyA(s,t){
    const set=(p,x,tau=.3)=>setParam(p,x,t,tau);
    set(tiltA.gain,1.5*s.speed);set(A.beds.master.gain.gain,1-.15*Math.max(0,s.space));
    return apply(A,s,t);
  }
  function applyB(s,t){
    const set=(p,x,tau=.3)=>setParam(p,x,t,tau),lv=apply(B,s,t);
    set(B.beds.pad.gain.gain,dB(-3+4*lv.wash));set(padTone.frequency,2000+10000*lv.wash);
    set(B.beds.lead.gain.gain,dB(-2+4*lv.detail));set(leadTone.gain,4*s.speed);set(B.beds.melody.gain.gain,dB(8*lv.detail));
    set(B.beds.texture.gain.gain,dB(-6+6*lv.scratch));
    const space=s.space>0?4*s.space:6*s.space;
    set(B.beds.reverb.gain.gain,dB(space));set(B.beds.delay.gain.gain,dB(space));
    return lv;
  }
  function schedule(v,lv,s,t0,t1){
    const src=sources[v.key];
    scatter(v.detail,t0,t1,.4+6*s.speed+lv.detail*2,when=>{
      const dur=.25-.19*s.speed;
      grain(pick(src.detail),when,.1+random()*1.4,dur,{gain:GRAIN.detail,rate:random()<.3+.4*s.speed?2:1,detune:s.pitchCents+(random()-.5)*20*s.speed,to:v.detail.bus});
    });
    scatter(v.wash,t0,t1,lv.wash>.02?8:0,when=>{
      grain(pick(src.wash),when,.2+random()*1.3,.3+random()*.5,{gain:GRAIN.wash,rate:1,detune:s.pitchCents,to:v.wash.bus});
    });
    scatter(v.scratch,t0,t1,lv.scratch>.02?20+60*lv.scratch:0,when=>{
      const dur=.03-.022*s.flutter*random();
      grain(pick(src.scratch),when,.05+random()*.45,dur,{gain:GRAIN.scratch,rate:2,detune:s.pitchCents+(random()-.5)*2*(15+15*s.flutter),to:v.scratch.bus});
    });
  }

  return {
    get mode(){return active;},
    start(t){
      if(started)return;started=true;startAt=t;
      for(const v of [A,B])for(const b of Object.values(v.beds))b.source.start(t);
    },
    tick(s,t){
      const v=active==='a'?A:B,lv=active==='a'?applyA(s,t):applyB(s,t);
      schedule(v,lv,s,Math.max(t,ctx.currentTime),t+LOOKAHEAD);
    },
    setMode(next,t){
      if(next===active)return;active=next;
      for(const v of [A,B]){const on=v.key===active?1:0;for(const g of [v.fade.gain,v.wetFade.gain])g.setTargetAtTime(on,t,SWITCH/4);}
      for(const l of ['detail','wash','scratch'])(active==='a'?A:B)[l].next=t;
    },
    reseed(nextSeed){random=seededRandom(nextSeed);},
    setVolume(value,t,ramp=.05){const g=volume.gain;g.cancelScheduledValues(t);g.setValueAtTime(g.value,t);g.linearRampToValueAtTime(value,t+Math.max(.005,ramp));},
    dispose(t){
      volume.gain.cancelScheduledValues(t);volume.gain.setTargetAtTime(0,t,.015);
      for(const v of [A,B]){v.flutter.stop(t+.08);for(const b of Object.values(v.beds))if(started)b.source.stop(t+.08);}
      setTimeout(()=>limiter.disconnect(),400);
    },
    playhead,
    loopSeconds:length,
  };
}

