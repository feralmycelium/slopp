import {test,expect} from 'bun:test';
import {invitationGesture,createInvitationClock} from '../public/invitation.js';
import {ENVIRONMENTS} from '../public/environments.js';

const viewWidth=(width,height)=>2*6*Math.tan(57/360*Math.PI)/.03*width/height;
function crossings(points){
  let n=0;
  const cross=(a,b,c)=>(b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]);
  for(let i=0;i<points.length-1;i++)for(let j=i+2;j<points.length-1;j++){
    const [a,b,c,d]=[points[i],points[i+1],points[j],points[j+1]];
    if(cross(a,b,c)*cross(a,b,d)<0&&cross(c,d,a)*cross(c,d,b)<0)n++;
  }
  return n;
}

test('the invitation is one seeded thread that crosses the view, loops once and faces the camera',()=>{
  for(const [width,height] of [[1440,900],[390,844],[2560,1080]])for(const environment of ENVIRONMENTS){
    const item=invitationGesture({environment,seed:12345,width,height});
    expect(item.id).toBe('invitation');
    expect(item.strokes).toHaveLength(1);
    const [stroke]=item.strokes,xs=stroke.points.map(p=>p[0]);
    expect(stroke.kind).toBe('line');expect(stroke.ink).toBe(environment.inks[0]);
    expect(stroke.points.length).toBeGreaterThanOrEqual(80);expect(stroke.points.length).toBeLessThanOrEqual(140);
    expect(stroke.points.every(p=>p.length===3&&p.every(Number.isFinite)&&Math.abs(p[0])<2900&&Math.abs(p[1])<2900)).toBe(true);
    const span=(Math.max(...xs)-Math.min(...xs))/viewWidth(width,height);
    expect(span).toBeGreaterThan(.52);expect(span).toBeLessThan(.7);
    expect(xs[0]).toBeLessThan(0);expect(xs.at(-1)).toBeGreaterThan(xs[0]);
    expect(crossings(stroke.points)).toBeGreaterThanOrEqual(1);
    expect(item.space.environment).toBe(environment.id);
    expect(item.space.rotation).toEqual([0,0,0,1]);
    const [x,y,z]=item.space.position;
    expect(z).toBe(-6);expect(x).toBeLessThan(0);expect(y).toBeLessThan(0);expect(Math.hypot(x,y)).toBeLessThan(1.5);
  }
});

test('the same seed draws the same invitation and another seed draws a different one',()=>{
  const args={environment:ENVIRONMENTS[0],seed:77,width:1280,height:800};
  expect(invitationGesture(args)).toEqual(invitationGesture(args));
  expect(invitationGesture({...args,seed:78}).strokes[0].points).not.toEqual(invitationGesture(args).strokes[0].points);
});

function fakeClock(visible=true){
  const calls=[],timers=new Map();let id=0,shown=visible;
  const clock=createInvitationClock({visible:()=>shown,change:phase=>calls.push(phase),
    schedule:(fn,ms)=>{timers.set(++id,{fn,ms});return id;},cancel:handle=>timers.delete(handle)});
  return {clock,calls,timers,show:value=>{shown=value;clock.visibilityChanged();},fire:()=>{for(const [k,{fn}] of [...timers]){timers.delete(k);fn();}}};
}

test('the invitation waits for a visible tab, shows once and ends after twenty-five quiet seconds',()=>{
  const f=fakeClock(false);
  f.clock.start();expect(f.calls).toEqual([]);
  f.show(false);expect(f.calls).toEqual([]);
  f.show(true);expect(f.calls).toEqual(['show']);
  expect([...f.timers.values()].map(t=>t.ms)).toEqual([25000]);
  f.clock.start();f.show(true);expect(f.calls).toEqual(['show']);
  f.fire();expect(f.calls).toEqual(['show','end']);
  f.clock.activity();f.fire();expect(f.calls).toEqual(['show','end']);
});

test('the first drag, tap, key or button press ends the invitation at once and only once',()=>{
  const f=fakeClock();
  f.clock.start();expect(f.calls).toEqual(['show']);
  f.clock.activity();expect(f.calls).toEqual(['show','end']);expect(f.timers.size).toBe(0);
  f.clock.activity();f.fire();expect(f.calls).toEqual(['show','end']);
});

test('a visitor who acts before the world has loaded never sees the invitation',()=>{
  const f=fakeClock();
  f.clock.activity();expect(f.calls).toEqual(['end']);
  f.clock.start();f.show(true);expect(f.calls).toEqual(['end']);expect(f.timers.size).toBe(0);
});
