import {test,expect} from 'bun:test';
import {createIdleControls} from '../public/idle.js';

test('controls stay visible for thirty seconds, then hide after three idle seconds and wake immediately',()=>{
  let callback,delay,time=0,blocked=false,hidden=false;
  const idle=createIdleControls({blocked:()=>blocked,change:value=>hidden=value,
    now:()=>time,
    schedule:(fn,ms)=>{callback=fn;delay=ms;return 1;},cancel:()=>{}});
  expect(delay).toBe(30000);
  time=20000;idle();expect(delay).toBe(10000);
  time=29000;idle();expect(delay).toBe(3000);
  time=32000;
  callback();expect(hidden).toBe(true);
  idle();expect(hidden).toBe(false);
  expect(delay).toBe(3000);
  blocked=true;callback();expect(hidden).toBe(false);
  blocked=false;callback();expect(hidden).toBe(true);
});
