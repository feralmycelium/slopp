import {test,expect} from 'bun:test';
import {loopMotion} from '../public/loop.js';

test('the artwork closes its path with continuous movement at the join',()=>{
  const start=loopMotion(0),end=loopMotion(8),before=loopMotion(8-.001),after=loopMotion(.001);
  for(const key of ['x','y','z','time']){
    expect(end[key]).toBeCloseTo(start[key],8);
    expect((end[key]-before[key])/.001).toBeCloseTo((after[key]-start[key])/.001,2);
  }
});
