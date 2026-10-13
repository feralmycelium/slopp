import {test,expect} from 'bun:test';
import {createJourney,advanceJourney,projectPoint,tracePosition} from '../public/current.js';

test('pause, drawing and hidden tabs preserve the exact journey position',()=>{
  for(const state of [{paused:true},{making:true},{hidden:true}]){
    const journey=createJourney(),before={...journey};
    advanceJourney(journey,.05,state);
    expect(journey).toEqual(before);
  }
  const moving=createJourney();advanceJourney(moving,.05,{});
  expect(moving.depth).toBeGreaterThan(0);
});

test('resuming after a long frame cannot jump through the world',()=>{
  const journey=createJourney();advanceJourney(journey,60,{});
  expect(journey.depth).toBeLessThan(.2);
});

test('perspective has near/far parallax and clips behind the viewer',()=>{
  const camera={x:0,y:0,depth:0};
  expect(projectPoint({x:1,y:0,z:-1},camera,1000,800)).toBeNull();
  const near=projectPoint({x:1,y:0,z:10},camera,1000,800);
  const far=projectPoint({x:1,y:0,z:40},camera,1000,800);
  expect(near.x-500).toBeCloseTo((far.x-500)*4);
  expect(near.scale).toBeGreaterThan(far.scale);
});

test('a shared trace occupies the same space for independent visitors',()=>{
  const item={id:'6f8fad5b-d9cb-469f-a165-70867728950e',x:4200,y:4200};
  expect(tracePosition({...item})).toEqual(tracePosition({...item}));
  expect(tracePosition({...item,x:5000})).not.toEqual(tracePosition(item));
});
