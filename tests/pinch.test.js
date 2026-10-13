import {test,expect} from 'bun:test';
import {wheelTravel} from '../src/world.js';

test('pinching moves in and out without changing the chosen drift or pause',()=>{
  const steps=[];
  const world={state:{speed:24,paused:true,making:false},dolly:distance=>steps.push(distance)};
  wheelTravel({ctrlKey:true,deltaY:-20,preventDefault(){}},world);
  wheelTravel({ctrlKey:true,deltaY:20,preventDefault(){}},world);
  expect(steps[0]).toBeGreaterThan(0);
  expect(steps[1]).toBeLessThan(0);
  expect(world.state).toEqual({speed:24,paused:true,making:false});
  world.state.making=true;
  wheelTravel({ctrlKey:true,deltaY:-20,preventDefault(){}},world);
  expect(steps).toHaveLength(2);
});
