import {test,expect} from 'bun:test';
import {createMusician} from '../public/sound/musician.js';
import {PALETTES,paletteNotes} from '../public/sound/palettes.js';

const env=(primary='flow',neighbour='fold',blend=0)=>({primary,neighbour,blend});
const pcs=id=>new Set([0,2,4,7,9,PALETTES[id].colour]);
function run(m,from,to,step=1/30,each=()=>{}){const out=[];for(let t=from;t<=to+1e-9;t+=step){each(t);out.push(...m.tick({t,environment:env()}));}return out;}
const touches=events=>events.filter(e=>e.role==='touch');

test('six palettes, each built from the shared core plus one colour note',()=>{
  expect(Object.keys(PALETTES).sort()).toEqual(['echo','flow','fold','hush','print','soft']);
  for(const id of Object.keys(PALETTES)){
    const n=paletteNotes(id);
    for(const unit of ['fine','broad','held','rest'])for(const note of n[unit])expect(pcs(id).has(note%12)).toBe(true);
    expect(n.fine.length).toBeGreaterThanOrEqual(6);
  }
});

test('a stroke answers with one onset at the moment it starts, whatever the pointer rate',()=>{
  for(const rate of [20,120]){
    const m=createMusician({seed:3});run(m,0,2);
    const first=m.strokeStart({t:2,x:.5,y:.5,kind:'fine',environment:env()});
    expect(first).toHaveLength(1);
    expect(first[0].t-2).toBeLessThanOrEqual(.01);
    expect(first[0].attack).toBeLessThanOrEqual(.02);
    let extra=[];
    for(let i=1;i<rate*.5;i++)extra.push(...m.strokeMove({t:2+i/rate,x:.5+i*.002,y:.5,pressure:.5}));
    expect(extra.length).toBeLessThanOrEqual(2);
  }
});

test('repeating the same stroke gives the same voice on different notes inside the palette',()=>{
  const m=createMusician({seed:5});run(m,0,1);
  const notes=[];
  for(let i=0;i<8;i++){
    const [e]=m.strokeStart({t:1+i*1.5,x:.5,y:.5,kind:'fine',environment:env()});
    m.strokeEnd({t:1.3+i*1.5});notes.push(e.note);
    expect(e.unit).toBe('fine');expect(pcs('flow').has(e.note%12)).toBe(true);
  }
  for(let i=1;i<notes.length;i++)expect(notes[i]).not.toBe(notes[i-1]);
  expect(new Set(notes).size).toBeGreaterThanOrEqual(4);
});

test('broad strokes start softly at once and bloom into a chord',()=>{
  const m=createMusician({seed:2});run(m,0,1);
  const ev=m.strokeStart({t:1,x:.5,y:.5,kind:'broad',environment:env()});
  expect(ev[0].t-1).toBeLessThanOrEqual(.01);
  expect(ev[0].attack).toBeGreaterThanOrEqual(.04);expect(ev[0].attack).toBeLessThanOrEqual(.08);
  const bloom=ev.filter(e=>e.role==='bloom');
  expect(bloom.length).toBeGreaterThanOrEqual(1);
  expect(bloom.every(e=>e.t>ev[0].t)).toBe(true);
  for(const e of bloom)expect(pcs('flow').has(e.note%12)).toBe(true);
});

test('unattended listening stays quiet and varied without long silent gaps',()=>{
  const m=createMusician({seed:9});
  const ev=run(m,0,600,.25);
  const rest=ev.filter(e=>e.role==='rest');
  expect(rest.length).toBeGreaterThan(3);
  expect(rest.every(e=>e.gain<=-24)).toBe(true);
  expect(new Set(rest.map(e=>e.unit)).size).toBeGreaterThanOrEqual(2);
  expect(touches(ev)).toHaveLength(0);
  const busy=[];for(let t=0;t<600;t+=1)busy.push(rest.some(e=>e.t<=t&&e.t+e.dur>t));
  expect(busy.slice(5).every(Boolean)).toBe(true);
});

test('an empty view lowers the continuing bed without muting it',()=>{
  const m=createMusician();m.presence(1);const full=m.mix(10).restDuck;
  m.presence(0);const empty=m.mix(10).restDuck;
  expect(empty).toBeLessThan(full);expect(empty).toBeGreaterThanOrEqual(-12);
  expect(run(m,0,60).some(e=>e.role==='rest')).toBe(true);
});

test('travelling alone does not wake the music up',()=>{
  const m=createMusician({seed:4});
  const ev=run(m,0,120,1/30,t=>m.motion({t,speed:1}));
  expect(ev.filter(e=>e.role!=='rest'&&e.role!=='travel').length).toBe(0);
  expect(ev.filter(e=>e.role==='travel').length).toBeLessThanOrEqual(6);
});

test('frantic drawing thins itself out: quieter, fewer extras, voices capped',()=>{
  const m=createMusician({seed:1});const ev=[];
  for(let t=0;t<40;t+=.25){
    ev.push(...m.strokeStart({t,x:Math.random(),y:Math.random(),kind:t%1<.5?'fine':'broad',environment:env()}));
    for(let k=1;k<6;k++)ev.push(...m.strokeMove({t:t+k*.03,x:Math.random(),y:Math.random(),pressure:1}));
    m.strokeEnd({t:t+.2});ev.push(...m.tick({t:t+.2,environment:env()}));
  }
  const early=touches(ev).filter(e=>e.t<3),late=touches(ev).filter(e=>e.t>30);
  expect(Math.max(...late.map(e=>e.gain))).toBeLessThan(Math.max(...early.map(e=>e.gain))-5);
  expect(ev.filter(e=>e.t>25&&(e.role==='bloom'||e.role==='articulation'))).toHaveLength(0);
  expect(late.length).toBeGreaterThan(0);
});

test('colour notes stop only at the actual crossing, and stay part of each palette across its area',()=>{
  const notes=blend=>{const m=createMusician({seed:7}),out=[],e=env('flow','fold',blend);
    for(let t=0;t<40;t+=1/30)m.tick({t,environment:e});
    for(let i=0;i<60;i++){const t=40+i*.7;out.push(...m.strokeStart({t,x:.5,y:.5,kind:'line',environment:e}).map(v=>v.note%12));m.strokeEnd({t:t+.1});}
    return out;};
  for(const blend of [.25,.36])expect(notes(blend)).toContain(PALETTES.flow.colour);
  for(const blend of [.44,.48])expect(notes(blend)).not.toContain(PALETTES.flow.colour);
  const m=createMusician({seed:3});for(let t=0;t<4;t+=1/30)m.tick({t,environment:{primary:'flow',neighbour:'fold',blend:Math.min(.5,t/6)}});
  const after={primary:'fold',neighbour:'flow',blend:.45},seen=[];
  for(let i=0;i<20;i++){const t=4+i*.3;m.tick({t,environment:after});seen.push(...m.strokeStart({t,x:.5,y:.5,kind:'line',environment:after}).map(v=>v.note%12));m.strokeEnd({t:t+.1});}
  expect(seen).not.toContain(PALETTES.fold.colour);expect(seen).not.toContain(PALETTES.flow.colour);
});

test('the surprise figure follows the drawing and the same drawing gives the same figure',()=>{
  const strokes=[{kind:'line',points:Array.from({length:90},(_,i)=>[i*6,0])},...Array.from({length:6},(_,i)=>({kind:'line',points:[[i*20,0],[i*20+8,4]]})),{kind:'form',points:[[0,0],[80,0],[80,80],[0,80]]}];
  const a=createMusician({seed:1}).surprise({t:10,family:'gesture',seed:42,strokes,environment:env()});
  const b=createMusician({seed:99}).surprise({t:10,family:'gesture',seed:42,strokes,environment:env()});
  expect(a.map(e=>[e.t,e.note,e.unit])).toEqual(b.map(e=>[e.t,e.note,e.unit]));
  expect(a.length).toBeGreaterThanOrEqual(3);expect(a.length).toBeLessThanOrEqual(10);
  expect(Math.max(...a.map(e=>e.t))-10).toBeLessThanOrEqual(3.2);
  expect(new Set(a.map(e=>e.unit)).size).toBeGreaterThanOrEqual(2);
});

test('approaching a drawing adds a little detail, with hysteresis, and nothing when it is out of view',()=>{
  const m=createMusician({seed:3});run(m,0,1);
  const seen=[];let p=0;
  for(let t=1;t<20;t+=1/30){p=t<8?Math.min(.08,(t-1)*.02):t<14?.03:0;m.salience({t,prominence:p,id:'abc'});seen.push(...m.tick({t,environment:env()}));}
  const detail=seen.filter(e=>e.role==='detail');
  expect(detail.length).toBeGreaterThan(0);
  expect(detail.every(e=>e.gain<=-7)).toBe(true);
  expect(detail.some(e=>e.t>9&&e.t<14)).toBe(true);
  expect(detail.some(e=>e.t>17)).toBe(false);
  const off=createMusician({seed:3});const none=[];
  for(let t=0;t<10;t+=1/30){off.salience({t,prominence:0,id:'abc'});none.push(...off.tick({t,environment:env()}));}
  expect(none.filter(e=>e.role==='detail')).toHaveLength(0);
});

test('turning to look around is answered gently, rate-limited, and never wakes the music for good',()=>{
  const m=createMusician({seed:4});run(m,0,2);
  const ev=[],stir={};
  for(let t=2;t<62;t+=1/30){ev.push(...m.look({t,dx:t<32?14:0,dy:0}));ev.push(...m.tick({t,environment:env()}));if(Math.abs(t-20)<1/60)stir.during=m.mix(t).stir;if(Math.abs(t-61)<1/60)stir.after=m.mix(t).stir;}
  const answers=ev.filter(e=>e.role==='turn');
  expect(answers.length).toBeGreaterThanOrEqual(1);
  expect(answers.length).toBeLessThanOrEqual(4);
  expect(answers.every(e=>e.gain<=-18)).toBe(true);
  expect(ev.filter(e=>e.role==='touch'||e.role==='bloom')).toHaveLength(0);
  expect(stir.during).toBeGreaterThan(.2);
  expect(stir.after).toBeLessThan(.05);
});

test('every surprise gives a figure of at least three notes, even a single line',()=>{
  const line=[{kind:'line',points:Array.from({length:91},(_,i)=>[(i/90-.5)*620,Math.sin(i/10)*20])}];
  const ev=createMusician({seed:1}).surprise({t:5,family:'breath',seed:7,strokes:line,environment:env()});
  expect(ev.length).toBeGreaterThanOrEqual(3);
  expect(new Set(ev.map(e=>e.note)).size).toBeGreaterThanOrEqual(2);
});

test('pinch on its own is heard: space changes and a soft breath answers, rate-limited',()=>{
  const m=createMusician({seed:3});run(m,0,1);
  const ev=[];for(let t=1;t<9;t+=1/30){ev.push(...m.pinch({t,delta:t<5?2:-2}));ev.push(...m.tick({t,environment:env()}));}
  expect(ev.filter(e=>e.role==='breath').length).toBeGreaterThanOrEqual(1);
  expect(ev.filter(e=>e.role==='breath').length).toBeLessThanOrEqual(3);
  const space=m.mix(5).space;expect(Math.abs(space)).toBeGreaterThan(.2);
  expect(Math.abs(m.mix(5).glideCents)).toBeLessThanOrEqual(40);
});

test('slow answers to looking, pinching and surprise are acknowledged at once by a quiet glint, then bloom',()=>{
  const line=[{kind:'ribbon',points:Array.from({length:91},(_,i)=>[(i/90-.5)*620,Math.sin(i/10)*120])}];
  for(const id of Object.keys(PALETTES)){
    const answers=[];
    let m=createMusician({seed:2});m.tick({t:0,environment:env(id,id)});
    for(let t=5;t<7;t+=1/30){const ev=m.look({t,dx:24,dy:0});if(ev.length){answers.push({t,ev,slow:'turn'});break;}}
    m=createMusician({seed:2});m.tick({t:0,environment:env(id,id)});answers.push({t:5,ev:m.pinch({t:5,delta:2}),slow:'breath'});
    m=createMusician({seed:2});m.tick({t:0,environment:env(id,id)});answers.push({t:5,ev:m.surprise({t:5,seed:9,strokes:line,environment:env(id,id)}),slow:'surprise'});
    for(const {t,ev,slow} of answers){
      const glint=ev.find(e=>e.unit==='fine'&&e.t-t<=.015&&e.attack<=.01);
      expect(glint,id+' '+slow).toBeDefined();
      expect(glint.gain).toBeLessThanOrEqual(PALETTES[id].fineGain-8);
      expect(pcs(id).has(glint.note%12)).toBe(true);
      expect(ev.some(e=>e.role===slow&&e.attack>=.25)).toBe(true);
    }
  }
});
test('the turn-around button gets the same restrained answer as looking: a glint, then a held tone, rate-limited',()=>{
  const m=createMusician({seed:5});m.tick({t:0,environment:env()});
  const first=m.turn({t:5});
  expect(first.some(e=>e.role==='ack'&&e.unit==='fine'&&e.t-5<=.015)).toBe(true);
  expect(first.some(e=>e.role==='turn'&&e.gain<=-18)).toBe(true);
  expect(m.turn({t:7})).toHaveLength(0);
  expect(m.turn({t:14}).length).toBeGreaterThan(0);
});

const trace=id=>({id,space:{environment:'fold'},strokes:[{kind:'line',points:[[0,0],[20,10],[40,0]]},{kind:'line',points:[[0,0],[200,40],[400,0]]},{kind:'form',points:[[0,0],[80,0],[80,80],[0,80]]}]});
const see=(m,t,id,x=.3)=>m.salience({t,prominence:.2,id,x,item:trace(id)});
test('a prominent drawing waits for the hearing gap and stroke guard without needing to leave the view',()=>{
  const m=createMusician({seed:3});m.salience({t:1,prominence:0,id:null});
  expect(see(m,2,'a').length).toBeGreaterThan(0);
  expect(see(m,3,'b')).toEqual([]);
  expect(see(m,7.9,'b')).toEqual([]);
  expect(see(m,8,'b').length).toBeGreaterThan(0);
  expect(see(m,15,'b')).toEqual([]);
  m.strokeStart({t:15.2,x:.5,y:.5,kind:'line',environment:env()});
  expect(see(m,15.5,'c')).toEqual([]);
  m.strokeEnd({t:16});
  expect(see(m,17.4,'c')).toEqual([]);
  expect(see(m,17.5,'c').length).toBeGreaterThan(0);
  expect(m.mix(17.5).restDuck).toBe(-6);
  expect(m.mix(20.1).restDuck).toBe(0);
});
test('a drawing that comes into view is heard once, softly, from its side of the screen, in the palette playing now',()=>{
  const m=createMusician({seed:3});run(m,0,1);m.salience({t:1,prominence:0,id:null,x:0,item:null});
  const first=see(m,2,'a',.8);
  expect(first.length).toBeGreaterThanOrEqual(3);expect(first.length).toBeLessThanOrEqual(10);
  expect(first.every(e=>e.role==='hear'&&e.palette==='flow')).toBe(true);
  expect(first.every(e=>e.pan>0&&e.pan<=.6)).toBe(true);
  expect(first.map(e=>e.gain)).toEqual([PALETTES.flow.fineGain-9,PALETTES.flow.broadGain-6,PALETTES.flow.broadGain-8]);
  expect(Math.max(...first.map(e=>e.t))-2).toBeLessThanOrEqual(3);
  expect(m.mix(2.5).restDuck).toBe(0);
  expect(see(m,2.5,'a')).toEqual([]);
  const left=createMusician({seed:3});left.salience({t:1,prominence:0,id:null});
  expect(see(left,2,'z',-.25).every(e=>e.pan===-.25)).toBe(true);
  const far=createMusician({seed:3});far.salience({t:1,prominence:0,id:null});
  expect(see(far,2,'z',-1).every(e=>e.pan===-.6)).toBe(true);
});
test('hearing waits six seconds between drawings, never repeats one, and keeps out of the way of drawing',()=>{
  const m=createMusician({seed:3});run(m,0,1);m.salience({t:1,prominence:0,id:null});
  expect(see(m,2,'a').length).toBeGreaterThan(0);
  expect(see(m,3,'b')).toEqual([]);
  expect(see(m,4,'a')).toEqual([]);
  expect(see(m,8.5,'b').length).toBeGreaterThan(0);
  expect(see(m,15,'a')).toEqual([]);
  m.strokeStart({t:15.2,x:.5,y:.5,kind:'line',environment:env()});
  expect(see(m,15.5,'c')).toEqual([]);
  m.strokeEnd({t:16});
  expect(see(m,16.5,'d')).toEqual([]);
  expect(see(m,18,'c').length).toBeGreaterThan(0);
  expect(m.salience({t:25,prominence:.2,id:'e',x:0,item:null})).toEqual([]);
  expect(m.salience({t:26,prominence:.2,id:'f',x:0,item:{id:'f',strokes:[]}})).toEqual([]);
  m.reset();
  expect(see(m,27,'a').length).toBeGreaterThan(0);
});
