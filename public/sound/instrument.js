import {CORE,PALETTES,scale} from './palettes.js';

const dB=x=>10**(x/20);
const mod12=n=>((n%12)+12)%12;
const FALLBACK={voice:'held',stab:'broad',breath:'rest',sub:'held',grain:'fine'};
export const clashes=(voice,colourOk={})=>voice.pcs.includes(PALETTES[voice.palette].colour)&&!colourOk[voice.palette];

export async function loadKit(ctx,base,fetchImpl=fetch){
  const manifest=await(await fetchImpl(base+'manifest.json')).json(),buffers=new Map(),pending=new Map();
  const units=manifest.units;
  async function ensure(palette){
    await Promise.all(units.filter(u=>u.palette===palette&&!buffers.has(u.file)).map(u=>{
      if(!pending.has(u.file))pending.set(u.file,fetchImpl(base+u.file).then(r=>{if(!r.ok)throw new Error('Sound file unavailable: '+u.file);return r.arrayBuffer();}).then(b=>ctx.decodeAudioData(b)).then(buf=>{buffers.set(u.file,buf);},error=>{pending.delete(u.file);throw error;}));
      return pending.get(u.file);
    }));
  }
  function pick(palette,unit,note,random=Math.random,colourOk=false){
    if(FALLBACK[unit]&&!units.some(u=>u.palette===palette&&u.unit===unit))unit=FALLBACK[unit];
    const ok=new Set(colourOk?scale(palette):CORE),pool=units.filter(u=>u.palette===palette&&u.unit===unit&&buffers.has(u.file)&&Array.isArray(u.pcs));
    const fits=(pcs,s)=>pcs.every(p=>ok.has(mod12(p+s)));
    const result=({u,s})=>({unit:u,rate:2**(s/12),pcs:u.pcs.map(p=>mod12(p+s)),...(s?{retuned:s}:{})});
    const choose=list=>{if(!list.length)return null;const top=Math.min(...list.map(x=>x.u.rank??0)),best=list.filter(x=>(x.u.rank??0)===top);return result(best[Math.floor(random()*best.length)]);};
    const isolated=pool.filter(u=>u.isolated&&u.note!=null),sets=pool.filter(u=>!u.isolated);
    if(note==null)return choose(pool.filter(u=>fits(u.pcs,0)).map(u=>({u,s:0})));
    const pc=mod12(note);
    const exact=isolated.filter(u=>u.pcs[0]===pc&&fits(u.pcs,0));
    if(exact.length){const u=exact.reduce((a,b)=>Math.abs(b.note-note)<Math.abs(a.note-note)?b:a),k=Math.max(-1,Math.min(1,Math.round((note-u.note)/12)));return {...result({u,s:0}),rate:2**k,...(k?{octave:k}:{})};}
    let near=null;
    for(const u of isolated)for(const o of [-12,0,12]){const s=note-(u.note+o);if(Math.abs(s)<=2&&fits(u.pcs,s)&&(!near||Math.abs(s)+Math.abs(o)/100<Math.abs(near.s)+Math.abs(near.o)/100))near={u,s,o};}
    if(near)return {...result(near),rate:2**((near.s+near.o)/12),...(near.o?{octave:near.o/12}:{})};
    const holding=sets.filter(u=>fits(u.pcs,0)&&(!u.pcs.length||u.pcs.includes(pc))).map(u=>({u,s:0}));
    if(holding.length)return choose(holding);
    const moved=[];for(const u of sets)for(const s of [-1,1,-2,2])if(u.pcs.length&&fits(u.pcs,s)&&u.pcs.some(p=>mod12(p+s)===pc))moved.push({u,s});
    return moved.length?choose(moved.filter(m=>Math.abs(m.s)===Math.min(...moved.map(x=>Math.abs(x.s))))):null;
  }
  return {manifest,ensure,pick,buffers,get title(){return manifest.title;}};
}

function impulse(ctx,seconds){
  const len=Math.round(ctx.sampleRate*seconds),b=ctx.createBuffer(2,len,ctx.sampleRate);let s=12345;
  const rnd=()=>{s=Math.imul(s,1664525)+1013904223>>>0;return s/4294967296*2-1;};
  for(let c=0;c<2;c++){const d=b.getChannelData(c);for(let i=0;i<len;i++)d[i]=rnd()*Math.exp(-3.2*i/len);}
  return b;
}

export function createInstrument(ctx,{destination=ctx.destination,maxVoices=8,clock=()=>ctx.currentTime,lookahead=.12}={}){
  const out=ctx.createGain(),volume=ctx.createGain(),limiter=ctx.createDynamicsCompressor(),headroom=ctx.createGain();
  const warmth=ctx.createBiquadFilter();warmth.type='highshelf';warmth.frequency.value=2800;warmth.gain.value=0;
  const verbIn=ctx.createGain(),verb=ctx.createConvolver(),verbDuck=ctx.createDynamicsCompressor(),verbOut=ctx.createGain();
  limiter.threshold.value=-6;limiter.knee.value=0;limiter.ratio.value=20;limiter.attack.value=.002;limiter.release.value=.2;headroom.gain.value=dB(-3);
  verb.buffer=impulse(ctx,4.5);verbDuck.threshold.value=-30;verbDuck.ratio.value=4;verbDuck.attack.value=.05;verbDuck.release.value=1.5;verbOut.gain.value=.55;
  out.connect(warmth).connect(volume).connect(limiter).connect(headroom).connect(destination);
  verbIn.connect(verb).connect(verbDuck).connect(verbOut).connect(out);
  const restBus=ctx.createGain();restBus.connect(out);
  const voices=[],held=new Map();let kit=null,spaceScale=1,glide=0,pending=[],stemMix=false,verbLevel=.55;
  const now=()=>clock();
  const ramp=(param,value,at,tau)=>{param.cancelScheduledValues(at);param.setTargetAtTime(value,at,Math.max(.005,tau));};
  function forget(v){const i=voices.indexOf(v);if(i>=0)voices.splice(i,1);if(v.id&&held.get(v.id)===v)held.delete(v.id);}
  function stopVoice(v,at,tau=.25){
    try{v.gain.gain.cancelScheduledValues(at);v.gain.gain.setValueAtTime(v.gain.gain.value,at);v.gain.gain.setTargetAtTime(0,at,tau);v.src.stop(at+tau*6);v.lfo?.stop(at+tau*6);}catch{}
    v.end=Math.min(v.end,at+tau*6);if(v.id&&held.get(v.id)===v)held.delete(v.id);
  }
  function steal(at){const i=voices.findIndex(v=>!v.hold&&v.role!=='rest');const old=voices.splice(i>=0?i:0,1)[0];stopVoice(old,at,.2);}
  function start(e,choice,at,carry=null){
    const buffer=kit.buffers.get(choice.unit.file),span=buffer.duration;
    const src=ctx.createBufferSource(),g=ctx.createGain(),ctl=ctx.createGain(),pan=ctx.createStereoPanner(),send=ctx.createGain();
    src.buffer=buffer;src.playbackRate.value=choice.rate;src.detune.value=(carry?.bend??0)+glide;pan.pan.value=Math.max(-1,Math.min(1,carry?.pan??e.pan??0));
    const offset=e.offset==='random'?Math.random()*Math.max(0,span-(e.dur??.1)-.05):Math.min(e.offset??0,span*.3);
    const level=dB(e.gain+(choice.unit.norm_db??0)),dur=e.hold?(span-offset)/choice.rate:Math.min(e.dur??span,(span-offset)/choice.rate);
    const attack=carry?.8:Math.max(stemMix?.014:.002,e.attack||.005);
    g.gain.setValueAtTime(0,at);g.gain.linearRampToValueAtTime(level,at+attack);
    const releaseAt=e.hold?at+dur:at+Math.max(e.attack||0,dur-(e.release||1)*.3);
    if(!e.hold)g.gain.setTargetAtTime(0,releaseAt,(e.release||1)/3);
    if(carry)ctl.gain.value=carry.ctl;
    let node=src,filter=null,lfo=null,flutter=null;
    if(e.filter){filter=ctx.createBiquadFilter();filter.type=e.filter.type||'lowpass';filter.frequency.value=carry?.freq??e.filter.freq??1000;filter.Q.value=carry?.q??e.filter.q??.7;node.connect(filter);node=filter;}
    if(e.filterCycle){const f=ctx.createBiquadFilter(),cycle=ctx.createOscillator(),depth=ctx.createGain();f.type='lowpass';f.frequency.value=900;cycle.frequency.value=1/e.filterCycle;depth.gain.value=700;cycle.connect(depth).connect(f.frequency);cycle.start(at);cycle.stop(releaseAt+(e.release||1)*2);node.connect(f);node=f;}
    if(e.hold){lfo=ctx.createOscillator();flutter=ctx.createGain();lfo.frequency.value=5.3;flutter.gain.value=carry?.flutter??e.flutter??0;lfo.connect(flutter).connect(src.detune);lfo.start(at);}
    node.connect(g).connect(ctl).connect(pan);pan.connect(e.role==='rest'?restBus:out);pan.connect(send).connect(verbIn);send.gain.value=(e.send??.35)*spaceScale;
    src.start(at,offset);if(!e.hold)src.stop(releaseAt+(e.release||1)*2+.1);
    const v={e,choice,src,gain:g,ctl,pan,filter,lfo,flutter,hold:!!e.hold,id:e.id,baseGain:e.gain,bend:carry?.bend??0,role:e.role,palette:e.palette,pcs:choice.pcs,end:e.hold?releaseAt:releaseAt+(e.release||1)*2};
    voices.push(v);if(e.hold)held.set(e.id,v);
    src.onended=()=>{forget(v);try{lfo?.stop();}catch{}pan.disconnect();};
    return v;
  }
  function renew(v,at){
    const carry={ctl:v.ctl.gain.value,freq:v.filter?.frequency.value,q:v.filter?.Q.value,pan:v.pan.pan.value,bend:v.bend,flutter:v.flutter?.gain.value};
    stopVoice(v,at,.8/3);forget(v);start(v.e,v.choice,at,carry);
  }
  function sound(e,at){
    const choice=kit.pick(e.palette,e.unit,e.note,Math.random,!!e.colourOk);if(!choice)return null;
    for(let i=voices.length-1;i>=0;i--)if(voices[i].end<=now())voices.splice(i,1);
    if(e.hold&&held.has(e.id))stopVoice(held.get(e.id),at,.1);
    while(voices.length>=maxVoices)steal(at);
    const v=start(e,choice,at);
    return {voice:v,unit:choice.unit,rate:choice.rate,at};
  }
  return {
    setKit(k){
      kit=k;stemMix=k.manifest?.version?.startsWith('B')===true;verbLevel=stemMix?.77:.55;
      warmth.gain.setTargetAtTime(stemMix?-3:0,now(),.08);
      headroom.gain.setTargetAtTime(dB(stemMix?-3.8:-3),now(),.08);
      verbOut.gain.setTargetAtTime(verbLevel,now(),.08);
    },
    get kit(){return kit;},
    play(e){
      if(e.type==='control')return this.control(e);
      if(e.type==='release')return this.release(e);
      if(!kit)return null;
      if(e.t>now()+lookahead){pending.push(e);pending.sort((a,b)=>a.t-b.t);return {queued:true,at:e.t};}
      return sound(e,Math.max(e.t,now()));
    },
    control(c){
      const v=held.get(c.id);if(!v)return null;
      const at=Math.max(c.t,now()),tau=c.tau??.06;
      if(c.filter&&v.filter){if(c.filter.freq)ramp(v.filter.frequency,Math.min(16000,c.filter.freq),at,tau);if(c.filter.q!=null)ramp(v.filter.Q,c.filter.q,at,tau);}
      if(c.gain!=null){const target=dB(c.gain-v.baseGain);
        if(c.dip){ramp(v.ctl.gain,target*dB(-c.dip.depth),at,c.dip.tau);v.ctl.gain.setTargetAtTime(target,at+c.dip.tau*3,c.dip.recover);}
        else ramp(v.ctl.gain,target,at,tau);}
      if(c.pan!=null)ramp(v.pan.pan,Math.max(-1,Math.min(1,c.pan)),at,tau);
      if(c.flutter!=null&&v.flutter)ramp(v.flutter.gain,c.flutter,at,tau);
      if(c.bend!=null){v.bend=c.bend;ramp(v.src.detune,v.bend+glide,at,tau);}
      return {voice:v,at};
    },
    release(r){const v=held.get(r.id);if(!v)return null;const at=Math.max(r.t,now());stopVoice(v,at,(r.tau??1)/3);return {voice:v,at};},
    mix({space=0,glideCents=0,colourOk,attenuation=0,restDuck=0}){
      const t=now(),due=[];
      while(pending.length&&pending[0].t<=t+.12){const e=pending.shift();const r=sound(e,Math.max(e.t,t));if(r)due.push([e,r]);}
      for(const v of [...held.values()])if(v.end-t<2.5&&v.end>t)renew(v,t);
      spaceScale=Math.max(.15,1+space*.9);verbOut.gain.setTargetAtTime(verbLevel*Math.max(.3,1+space*.6)*dB(attenuation*.7),t,.3);
      restBus.gain.setTargetAtTime(dB(restDuck),t,1);
      if(Math.abs(glideCents-glide)>.5){glide=glideCents;for(const v of voices)v.src.detune.setTargetAtTime(v.bend+glide,t,.1);}
      if(colourOk)for(const v of voices)if(!v.faded&&clashes(v,colourOk)){v.faded=true;stopVoice(v,t,.4);}
      return due;
    },
    releaseAll(tau=.4){const t=now();pending=[];for(const v of voices.splice(0))stopVoice(v,t,tau);held.clear();},
    setVolume(value,t,ramp=.05){const g=volume.gain;g.cancelScheduledValues(t);g.setValueAtTime(g.value,t);g.linearRampToValueAtTime(value,t+Math.max(.005,ramp));},
    get activeVoices(){return voices.length;},
    dispose(){try{headroom.disconnect();}catch{}},
  };
}

