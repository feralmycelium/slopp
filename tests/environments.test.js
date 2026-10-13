import {expect,test} from 'bun:test';
import {ENVIRONMENTS,environmentAt,makeSurprise,traceDepth} from '../public/environments.js';

test('places have their own palette, revisiting preserves the same environment',()=>{
  for(const env of ENVIRONMENTS){
    expect(environmentAt(env.center).primary.id).toBe(env.id);
    expect(env.inks.length).toBeGreaterThanOrEqual(4);
    expect(env.inks.length).toBeLessThanOrEqual(5);
  }
  expect(new Set(ENVIRONMENTS.map(e=>e.inks.join(','))).size).toBe(ENVIRONMENTS.length);
});

test('surprise deck makes colour blocks, gentle lines and many other gestures in local inks',()=>{
  const env=ENVIRONMENTS[1],families=new Set(),kinds=new Set();let previous;
  for(let i=0;i<80;i++){
    const seed=(i*2654435761)>>>0,result=makeSurprise(seed,env,previous);
    expect(result.family).not.toBe(previous);previous=result.family;families.add(result.family);
    expect(makeSurprise(seed,env)).toEqual(makeSurprise(seed,env));
    for(const stroke of result.strokes){
      kinds.add(stroke.kind);expect(env.inks).toContain(stroke.ink);
      expect(stroke.points.length).toBeGreaterThanOrEqual(2);
      expect(stroke.points.every(p=>p.length===3&&p.every(Number.isFinite))).toBe(true);
    }
  }
  expect(families.size).toBeGreaterThanOrEqual(8);
  expect(kinds).toContain('form');expect(kinds).toContain('line');expect(kinds).toContain('ribbon');
});

test('depth interpretation is reproducible, bounded and varies with the place',()=>{
  const depths=ENVIRONMENTS.map(env=>Array.from({length:20},(_,i)=>traceDepth(i/19,34,env.id)));
  expect(depths.every(d=>d.every(Number.isFinite)&&Math.max(...d)-Math.min(...d)>.5)).toBe(true);
  expect(Math.max(...depths.flat().map(Math.abs))).toBeLessThan(5);
  expect(new Set(depths.map(d=>JSON.stringify(d))).size).toBe(ENVIRONMENTS.length);
});
