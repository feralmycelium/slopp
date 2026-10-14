import {test,expect} from 'bun:test';
import {createMusician} from '../public/sound/musician.js';
import {PALETTES,scale,paletteNotes} from '../public/sound/palettes.js';

const IDS=Object.keys(PALETTES);
const env=id=>({primary:id,neighbour:id,blend:0});
function gesture(id,kind,{seconds=2,path=p=>[.3+.4*p,.5-.15*Math.sin(p*Math.PI*2)],rate=120,pressure=.5,seed=1}={}){
  const m=createMusician({seed});m.tick({t:0,environment:env(id)});
  const t0=5,ev=[...m.strokeStart({t:t0,x:path(0)[0],y:path(0)[1],kind,pressure,environment:env(id)})];
  const n=Math.max(2,Math.round(seconds*rate));
  for(let i=1;i<=n;i++){const [x,y]=path(i/n);ev.push(...m.strokeMove({t:t0+seconds*i/n,x,y,pressure}));}
  const end=m.strokeEnd({t:t0+seconds+.01})||[];
  return {ev:[...ev,...end],end,t0,seconds};
}
const sounds=ev=>ev.filter(e=>!e.type);
const controls=ev=>ev.filter(e=>e.type==='control');
const signature=ev=>{const s=sounds(ev);return [s.some(e=>e.hold)?'hold':'', [...new Set(s.map(e=>e.unit))].sort().join('+'), s.find(e=>e.hold)?.filter?.type??'', s.filter(e=>!e.hold&&e.role!=='answer').length>3?'many':'few', controls(ev).some(c=>c.dip)?'dip':'', [...new Set(s.filter(e=>e.role!=='answer').map(e=>e.role))].sort().join('+')].join('|');};

test('the same gesture with the same tool sounds different in each of the six palettes',()=>{
  for(const kind of ['line','ribbon','form']){
    const sigs=IDS.map(id=>signature(gesture(id,kind).ev));
    expect(new Set(sigs).size,kind+': '+sigs.join(' / ')).toBe(6);
  }
  const perPalette=IDS.map(id=>['line','ribbon','form'].map(k=>signature(gesture(id,k).ev)).join(' // '));
  expect(new Set(perPalette).size).toBe(6);
});

test('every palette answers at once and stays inside its own scale',()=>{
  for(const id of IDS)for(const kind of ['line','ribbon','form']){
    const {ev,t0}=gesture(id,kind);
    expect(sounds(ev).some(e=>e.t-t0<=.015),id+' '+kind).toBe(true);
    for(const e of sounds(ev))if(e.note!=null)expect(scale(id).includes(e.note%12),id+' '+kind+' '+e.note).toBe(true);
  }
});

test('a held voice changes while the hand moves, and a fast pass sounds brighter than a slow one',()=>{
  for(const id of IDS){
    const slow=gesture(id,'ribbon',{seconds:4}),fast=gesture(id,'ribbon',{seconds:.4});
    const hold=sounds(slow.ev).find(e=>e.hold);
    expect(hold,id).toBeDefined();
    const c=controls(slow.ev).filter(x=>x.id===hold.id);
    expect(c.length,id).toBeGreaterThan(10);
    expect(new Set(c.map(x=>Math.round(x.gain))).size,id).toBeGreaterThan(1);
    const top=ev=>Math.max(...controls(ev).map(x=>x.filter?.freq??0));
    expect(top(fast.ev),id).toBeGreaterThan(top(slow.ev)*1.3);
  }
});

test('lifting the hand releases the held voice; a long first stroke is answered by the motif a fourth or fifth above',()=>{
  for(const id of IDS){
    const {ev,end}=gesture(id,'ribbon');
    const hold=sounds(ev).find(e=>e.hold);
    expect(end.some(e=>e.type==='release'&&e.id===hold.id),id).toBe(true);
    const answer=end.find(e=>e.role==='answer');
    expect(answer,id).toBeDefined();
    expect(hold.note).toBeNull();
    expect([5,7]).toContain(((answer.note-paletteNotes(id).held[0])%12+12)%12);
  }
});

test('the answer is sparse: short strokes and quick repeats keep their silence',()=>{
  for(const id of IDS){
    expect(gesture(id,'line',{seconds:.3}).end.some(e=>e.role==='answer'),id+' short').toBe(false);
    const m=createMusician({seed:4});m.tick({t:0,environment:env(id)});
    let answers=0;
    for(let k=0;k<5;k++){const t=5+k*1.5;m.strokeStart({t,x:.3,y:.5,kind:'ribbon',environment:env(id)});
      for(let i=1;i<=30;i++)m.strokeMove({t:t+i*.03,x:.3+i*.01,y:.5});
      answers+=m.strokeEnd({t:t+1}).filter(e=>e.role==='answer').length;}
    expect(answers,id).toBeLessThanOrEqual(1);
  }
});

test('fold pleats and overprint grains follow the hand, with no steady pulse',()=>{
  const pleats=ev=>controls(ev).filter(c=>c.dip).map(c=>c.t);
  const straight=p=>[.2+.6*p,.5];
  const slow=pleats(gesture('fold','ribbon',{seconds:4,path:straight}).ev),fast=pleats(gesture('fold','ribbon',{seconds:1,path:straight}).ev);
  expect(slow.length).toBeGreaterThan(3);
  expect(fast.length).toBeGreaterThanOrEqual(4);expect(fast.length).toBeLessThanOrEqual(8);
  expect(slow.slice(1).every((t,i)=>t-slow[i]>=.139)).toBe(true);
  const still=createMusician({seed:1});still.tick({t:0,environment:env('fold')});
  const ev=[...still.strokeStart({t:5,x:.5,y:.5,kind:'ribbon',environment:env('fold')})];
  for(let i=1;i<=60;i++)ev.push(...still.strokeMove({t:5+i/30,x:.5,y:.5}));
  expect(pleats(ev).length).toBe(0);
  const grains=sounds(gesture('print','line',{seconds:3,path:straight}).ev).filter(e=>e.unit==='grain').map(e=>e.t);
  const gaps=grains.slice(1).map((t,i)=>t-grains[i]),mean=gaps.reduce((a,b)=>a+b,0)/gaps.length;
  const spread=Math.sqrt(gaps.reduce((a,b)=>a+(b-mean)**2,0)/gaps.length)/mean;
  expect(grains.length).toBeGreaterThan(8);
  expect(spread).toBeGreaterThan(.15);
});

test('slow and fast passes of the same line differ in what is played, not only in level',()=>{
  for(const id of ['flow','print','echo','fold']){
    const slow=sounds(gesture(id,'line',{seconds:4}).ev).filter(e=>e.role!=='answer'&&e.role!=='echo');
    const fast=sounds(gesture(id,'line',{seconds:.4}).ev).filter(e=>e.role!=='answer'&&e.role!=='echo');
    const bright=list=>Math.max(...list.map(e=>e.filter?.freq??0));
    expect(slow.length!==fast.length||bright(fast)>bright(slow)*1.3,id).toBe(true);
  }
});

test('moving up bends a held voice up and moving down bends it down, within 25 cents',()=>{
  const up=gesture('flow','ribbon',{path:p=>[.5,.8-.5*p]}),down=gesture('flow','ribbon',{path:p=>[.5,.2+.5*p]});
  const last=ev=>controls(ev).at(-1).bend;
  expect(last(up.ev)).toBeGreaterThan(5);expect(last(down.ev)).toBeLessThan(-5);
  for(const c of [...controls(up.ev),...controls(down.ev)])expect(Math.abs(c.bend)).toBeLessThanOrEqual(25);
});

test('a flood of pointer events stays bounded: notes by time and distance, controls throttled',()=>{
  for(const id of IDS){
    const {ev}=gesture(id,'line',{seconds:1,rate:1000});
    expect(sounds(ev).filter(e=>e.role!=='answer'&&e.role!=='echo').length,id).toBeLessThanOrEqual(16);
    const r=gesture(id,'ribbon',{seconds:1,rate:1000});
    expect(controls(r.ev).length,id).toBeLessThanOrEqual(30);
  }
});

test('a new gesture plays the palette on screen at once, while the ambience blend still lags',()=>{
  const m=createMusician({seed:2});
  for(let t=0;t<2;t+=1/30)m.tick({t,environment:{primary:'flow',neighbour:'fold',blend:t/4}});
  const crossed={primary:'fold',neighbour:'flow',blend:.49};
  m.tick({t:2,environment:crossed});
  const ev=m.strokeStart({t:2.05,x:.5,y:.5,kind:'line',environment:crossed});
  expect(sounds(ev).every(e=>e.palette==='fold')).toBe(true);
  expect(m.mix(2.05).weight).toBeGreaterThan(.5);
});

test('inside out echoes the contour that was drawn: the same notes come back twice after the lift',()=>{
  const {ev,t0,seconds}=gesture('echo','line',{seconds:2,path:p=>[.2+.6*p,.5-.3*Math.sin(p*Math.PI*3)]});
  const drawn=sounds(ev).filter(e=>e.role==='touch'||e.role==='articulation').map(e=>e.note);
  const echoes=sounds(ev).filter(e=>e.role==='echo');
  expect(drawn.length).toBeGreaterThanOrEqual(3);
  expect(echoes.length).toBeGreaterThanOrEqual(drawn.length*2-2);
  expect(echoes.every(e=>e.t>t0+seconds)).toBe(true);
  expect(echoes.slice(0,drawn.length).map(e=>e.note)).toEqual(drawn);
});

