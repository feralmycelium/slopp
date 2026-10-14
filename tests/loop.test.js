import {test,expect} from 'bun:test';
import {loopMotion,handwriting} from '../public/loop.js';

test('the artwork closes its path with continuous movement at the join',()=>{
  const start=loopMotion(0),end=loopMotion(8),before=loopMotion(8-.001),after=loopMotion(.001);
  for(const key of ['x','y','z','time']){
    expect(end[key]).toBeCloseTo(start[key],8);
    expect((end[key]-before[key])/.001).toBeCloseTo((after[key]-start[key])/.001,2);
  }
});
test('the pen takes four seconds, holds, and fades to the blank start of the loop',()=>{
  expect(handwriting(0).progress).toBe(0);
  expect(handwriting(2).progress).toBe(.5);
  expect(handwriting(3.99).progress).toBeLessThan(1);
  expect(handwriting(4).progress).toBe(1);
  expect(handwriting(6).opacity).toBe(1);
  expect(handwriting(7).opacity).toBeLessThan(1);
  expect(handwriting(8).opacity).toBe(0);
});
