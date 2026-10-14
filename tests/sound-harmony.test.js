import {test,expect} from 'bun:test';
import {existsSync,readFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {loadKit,clashes} from '../public/sound/instrument.js';
import {createMusician,RULES} from '../public/sound/musician.js';
import {CORE,PALETTES,paletteNotes,scale} from '../public/sound/palettes.js';

const root=resolve(import.meta.dirname,'../.sound-assets');
const DIRS={a:'kit-a',b:'kit-b3'};
const kitsPresent=Object.values(DIRS).every(d=>existsSync(root+'/'+d+'/manifest.json'));
const ctx={decodeAudioData:async()=>({duration:20})};
const fakeFetch=manifest=>async url=>url.endsWith('manifest.json')?{ok:true,json:async()=>manifest}:{ok:true,arrayBuffer:async()=>new ArrayBuffer(0)};
async function kitFrom(manifest){const kit=await loadKit(ctx,'/',fakeFetch(manifest));for(const id of Object.keys(PALETTES))await kit.ensure(id);return kit;}
const realKit=k=>kitFrom(JSON.parse(readFileSync(root+'/'+DIRS[k]+'/manifest.json','utf8')));
const rng=seed=>()=>(seed=(seed*16807)%2147483647)/2147483647;
const notesFor=(id,unit)=>paletteNotes(id)[unit];

test.skipIf(!kitsPresent)('every unit either kit can choose sounds only notes the palette allows, and core notes are never left silent',async()=>{
  for(const k of ['a','b']){
    const kit=await realKit(k),random=rng(7);
    for(const id of Object.keys(PALETTES))for(const unit of ['fine','broad','held','rest'])for(const note of notesFor(id,unit))for(const colourOk of [false,true]){
      const allowedPcs=colourOk?scale(id):CORE;
      for(let i=0;i<6;i++){
        const c=kit.pick(id,unit,note,random,colourOk);
        if(!colourOk&&CORE.includes(note%12))expect(c,k+' '+id+' '+unit+' '+note).not.toBeNull();
        if(!c)continue;
        expect(c.pcs.every(p=>allowedPcs.includes(p)),k+' '+id+' '+unit+' '+note+' '+c.unit.file).toBe(true);
        if(c.retuned)expect(Math.abs(c.retuned)).toBeLessThanOrEqual(2);
      }
    }
  }
});

test('a chord with an out-of-scale note is never played as is, only moved whole into the scale, and never swapped for a wrong note',async()=>{
  const chord=(file,pcs)=>({file,palette:'flow',unit:'held',note:null,pc:null,pcs,isolated:false});
  const clashing=await kitFrom({units:[chord('cea-b.wav',[0,4,9,11]),chord('cluster.wav',[0,1,7])]});
  for(const note of paletteNotes('flow').held)expect(clashing.pick('flow','held',note,Math.random,false)).toBeNull();
  for(const note of paletteNotes('flow').held){
    const c=clashing.pick('flow','held',note,Math.random,true);
    if(c){expect(c.unit.file).toBe('cea-b.wav');expect(c.retuned).toBe(-2);expect(c.pcs.every(p=>scale('flow').includes(p))).toBe(true);}
  }
  const movable=await kitFrom({units:[chord('cdgf.wav',[0,2,5,7])]});
  const moved=movable.pick('flow','held',62,Math.random,false);
  expect(moved.retuned).toBe(2);expect(moved.pcs).toEqual([2,4,7,9]);
  const coloured=await kitFrom({units:[chord('ceg-bb.wav',[0,4,7,10])]});
  expect(coloured.pick('flow','held',62,Math.random,false)).toBeNull();
  expect(coloured.pick('flow','held',64,Math.random,false)).toBeNull();expect(coloured.pick('flow','held',64,Math.random,true)?.rate).toBe(1);
  const triad=await kitFrom({units:[chord('deg.wav',[2,4,7])]});
  expect(triad.pick('flow','held',69,Math.random,false)).toBeNull();
  expect(triad.pick('flow','held',64,Math.random,false).pcs).toContain(4);
  const single=await kitFrom({units:[{file:'g.wav',palette:'flow',unit:'fine',note:67,pc:7,pcs:[7],isolated:true}]});
  expect(single.pick('flow','fine',69,Math.random,false).retuned).toBe(2);
  expect(single.pick('flow','fine',70,Math.random,false)).toBeNull();
  expect(single.pick('flow','fine',74,Math.random,false)).toBeNull();
});

test.skipIf(!kitsPresent)('while crossing between palettes no sounding layer carries a colour note, and two palettes never colour at once',async()=>{
  const env=t=>({primary:'flow',neighbour:'fold',blend:Math.min(1,Math.max(0,(t-10)/12))});
  for(const k of ['a','b']){let coloured=0,faded=0;for(const seed of [1,2,3,4,5]){
    const kit=await realKit(k),random=rng(seed),m=createMusician({seed}),sounding=[];let zoneSince=null,checked=0;
    for(let step=0;step<=32*30;step++){
      const t=step/30,ev=[];
      if(step%15===0&&t>=1&&t<28){const kind=step%45===0?'broad':'fine';ev.push(...m.strokeStart({t,x:random(),y:random(),kind,environment:env(t)}));m.strokeEnd({t:t+.2});}
      ev.push(...m.tick({t,environment:env(t)}));
      for(const e of ev){const c=kit.pick(e.palette,e.unit,e.note,random,e.colourOk);if(c){sounding.push({palette:e.palette,pcs:c.pcs,start:e.t,end:e.t+(e.dur??3)+(e.release??1)*.7});if(c.pcs.includes(PALETTES[e.palette].colour))coloured++;}}
      const mix=m.mix(t);
      for(const v of sounding)if(v.start<=t&&v.end>t+.8&&clashes(v,mix.colourOk)){v.end=t+.8;faded++;}
      const now=new Set(sounding.filter(v=>v.start<=t&&v.end>t).flatMap(v=>v.pcs));
      expect(now.has(PALETTES.flow.colour)&&now.has(PALETTES.fold.colour)).toBe(false);
      const inZone=env(t).blend>0&&env(t).blend<1&&!mix.colourOk.flow&&!mix.colourOk.fold;
      zoneSince=inZone?(zoneSince??t):null;
      if(zoneSince!==null&&t-zoneSince>=1){checked++;expect([...now].every(p=>CORE.includes(p)),k+' seed '+seed+' t '+t.toFixed(2)+' '+[...now]).toBe(true);}
    }
    expect(checked).toBeGreaterThan(30);
  }
  expect(coloured,k).toBeGreaterThan(0);expect(faded,k).toBeGreaterThan(0);}
});

test.skipIf(!kitsPresent)('every pitched unit chosen contains the note that was asked for',async()=>{
  for(const k of ['a','b']){
    const kit=await realKit(k),random=rng(3);
    for(const id of Object.keys(PALETTES))for(const unit of ['fine','broad','held','rest'])for(const note of notesFor(id,unit))for(const colourOk of [false,true]){
      const c=kit.pick(id,unit,note,random,colourOk);
      if(c&&c.pcs.length)expect(c.pcs,k+' '+id+' '+unit+' '+note+' '+c.unit.file).toContain(note%12);
    }
  }
});

test('a sample that fails to load once can load on the next attempt',async()=>{
  let calls=0;
  const manifest={units:[{file:'x.wav',palette:'flow',unit:'fine',note:62,pc:2,pcs:[2],isolated:true}]};
  const flaky=async url=>{if(url.endsWith('manifest.json'))return {ok:true,json:async()=>manifest};calls++;return calls===1?{ok:false}:{ok:true,arrayBuffer:async()=>new ArrayBuffer(0)};};
  const kit=await loadKit(ctx,'/',flaky);
  await expect(kit.ensure('flow')).rejects.toThrow();
  await kit.ensure('flow');
  expect(kit.pick('flow','fine',62,Math.random,false)?.unit.file).toBe('x.wav');
});
test.skipIf(!kitsPresent)('every role the six palette idioms use has a playable unit in both kits',async()=>{
  const ROLES={voice:null,breath:null,sub:null,stab:'broad',grain:'fine'};
  for(const k of ['a','b']){
    const kit=await realKit(k);
    for(const id of Object.keys(PALETTES))for(const [unit,notes] of Object.entries(ROLES)){
      const asks=notes?notesFor(id,notes).filter(n=>CORE.includes(n%12)):[null];
      for(const note of asks)expect(kit.pick(id,unit,note,Math.random,false),k+' '+id+' '+unit+' '+note).not.toBeNull();
    }
  }
});
test('a palette keeps its preferred source whenever it fits, and falls back only when colour must pause',async()=>{
  const v=(file,pcs,rank)=>({file,palette:'echo',unit:'voice',note:null,pc:null,pcs,isolated:false,rank});
  const kit=await kitFrom({units:[v('sawpad.wav',[0,4,7,9,11],0),v('pad.wav',[0,2,4,9],1)]});
  for(let i=0;i<20;i++)expect(kit.pick('echo','voice',null,Math.random,true).unit.file).toBe('sawpad.wav');
  for(let i=0;i<20;i++)expect(kit.pick('echo','voice',null,Math.random,false).unit.file).toBe('pad.wav');
});
test('a near-note colour retune also lands in the requested octave',async()=>{
  const kit=await kitFrom({units:[{file:'a81.wav',palette:'flow',unit:'fine',note:81,pc:9,pcs:[9],isolated:true}]});
  const c=kit.pick('flow','fine',70,Math.random,true);
  expect(c.unit.file).toBe('a81.wav');
  expect(81+12*Math.log2(c.rate)).toBeCloseTo(70,6);
  expect(c.pcs).toEqual([10]);
});
