import {test,expect} from 'bun:test';
import {createInstrument} from '../public/sound/instrument.js';

function param(v=0){return {value:v,setValueAtTime(x){this.value=x;},linearRampToValueAtTime(x){this.value=x;},setTargetAtTime(x){this.value=x;},cancelScheduledValues(){}};}
const node=(extra={})=>({connect(n){return n;},disconnect(){},...extra});
function rig(){
  const made={sources:[],oscs:[]},clock={now:0};
  const ctx={sampleRate:48000,get currentTime(){return clock.now;},destination:node(),
    createGain:()=>node({gain:param(1)}),createStereoPanner:()=>node({pan:param(0)}),
    createBiquadFilter:()=>node({type:'lowpass',frequency:param(1000),Q:param(1),gain:param(0)}),
    createDynamicsCompressor:()=>node({threshold:param(),knee:param(),ratio:param(),attack:param(),release:param()}),
    createConvolver:()=>node({buffer:null}),createBuffer:(c,len)=>({getChannelData:()=>new Float32Array(len)}),
    createOscillator:()=>{const o=node({frequency:param(1),stopAt:null,start(){},stop(t){this.stopAt=t;}});made.oscs.push(o);return o;},
    createBufferSource:()=>{const s=node({buffer:null,playbackRate:param(1),detune:param(0),startAt:null,stopAt:null,start(t,offset){this.startAt=t;this.offset=offset;},stop(t){this.stopAt=t;},onended:null});made.sources.push(s);return s;}};
  const PCS={flowColour:[2,10],foldColour:[0,5],core:[2,7]};
  const kit={pick:(p,unit)=>({unit:{file:unit+'.wav',norm_db:0},rate:1,pcs:PCS[unit]??[]}),buffers:new Map([['voice.wav',{duration:14}],['fine.wav',{duration:2}],['flowColour.wav',{duration:6}],['foldColour.wav',{duration:6}],['core.wav',{duration:6}]])};
  const inst=createInstrument(ctx,{clock:()=>clock.now});inst.setKit(kit);
  return {inst,made,clock};
}
const hold=(t=0,id='h1')=>({t,palette:'flow',unit:'voice',note:null,gain:-12,attack:.04,offset:.8,hold:true,id,role:'stroke',filter:{type:'lowpass',freq:500}});
const pluck=(t,k)=>({t,palette:'flow',unit:'fine',note:62+k,gain:-14,attack:.01,release:1,dur:1,role:'echo'});

test('a held voice that runs to its natural end is forgotten and its flutter stops',()=>{
  const {inst,made}=rig();inst.play(hold());
  made.sources[0].onended();
  expect(inst.control({type:'control',id:'h1',t:1,gain:-10})).toBeNull();
  expect(made.oscs.at(-1).stopAt).not.toBeNull();
  expect(inst.activeVoices).toBe(0);
});

test('a long stroke renews its held voice before the sample runs out, and controls follow it',()=>{
  const {inst,made,clock}=rig();inst.play(hold());
  inst.control({type:'control',id:'h1',t:.5,filter:{freq:2000},gain:-9,bend:10});
  clock.now=11.5;inst.mix({});
  expect(made.sources.length).toBe(2);
  expect(made.sources[0].stopAt).not.toBeNull();
  expect(made.sources[1].offset).toBeCloseTo(.8);
  const r=inst.control({type:'control',id:'h1',t:11.6,gain:-8});
  expect(r.voice.src).toBe(made.sources[1]);
  expect(r.voice.filter.frequency.value).toBe(2000);
});

test('echoes scheduled ahead wait in a queue and never steal a live held voice early',()=>{
  const {inst,made,clock}=rig();inst.play(hold());
  for(let k=0;k<12;k++)inst.play(pluck(2+k*.1,k));
  expect(made.sources.length).toBe(1);
  expect(inst.control({type:'control',id:'h1',t:.1,gain:-10})).not.toBeNull();
  clock.now=2.45;const due=inst.mix({});
  expect(due.length).toBe(6);
  expect(made.sources.length).toBe(7);
  clock.now=3.2;inst.mix({});
  expect(inst.control({type:'control',id:'h1',t:3.2,gain:-10})).not.toBeNull();
});

test('lifting early and releasing everything leave nothing registered or queued',()=>{
  const {inst,made,clock}=rig();inst.play(hold());
  inst.release({type:'release',id:'h1',t:.5,tau:.9});
  expect(inst.control({type:'control',id:'h1',t:.6,gain:-10})).toBeNull();
  expect(made.oscs.at(-1).stopAt).not.toBeNull();
  inst.play(hold(1,'h2'));inst.play(pluck(5,0));
  inst.releaseAll(.2);
  clock.now=6;expect(inst.mix({}).length).toBe(0);
  expect(inst.control({type:'control',id:'h2',t:6,gain:-10})).toBeNull();
});

test('when a crossing starts, the outgoing colour voice fades in the real mix while core and incoming voices ring on',()=>{
  const {inst}=rig();
  const play=(palette,unit)=>inst.play({t:0,palette,unit,note:null,gain:-12,attack:.01,release:2,dur:4,role:'rest'}).voice;
  const outgoing=play('flow','flowColour'),core=play('flow','core'),incoming=play('fold','foldColour');
  inst.mix({colourOk:{flow:false,fold:true}});
  expect(outgoing.src.stopAt).toBeLessThan(3);
  expect(core.src.stopAt).toBeGreaterThan(4);
  expect(incoming.src.stopAt).toBeGreaterThan(4);
  expect(core.faded).toBeUndefined();expect(incoming.faded).toBeUndefined();
  inst.mix({colourOk:{flow:true,fold:true}});
  expect(outgoing.faded).toBe(true);
});

