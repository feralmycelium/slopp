import {expect,test} from 'bun:test';
import {assessDrawing,drawingWeights} from '../public/quality.js';
import {chooseTrace} from '../public/space.js';

const line={id:'line',strokes:[{kind:'line',ink:'ink',points:[[-100,0],[0,10],[100,0]]}]};
const dot={id:'dot',strokes:[{kind:'line',ink:'ink',points:[[0,0],[.1,.1]]}]};

test('automatic preference recognises a clear sparse gesture without rewarding point count',()=>{
  expect(assessDrawing(line).score).toBeGreaterThan(assessDrawing(dot).score);
  const repeated={...line,strokes:[{...line.strokes[0],points:[[-100,0],[-100,0],[-100,0],[0,10],[100,0],[100,0]]}]};
  expect(assessDrawing(repeated).score).toBeCloseTo(assessDrawing(line).score,6);
  const moved={...line,strokes:[{...line.strokes[0],points:line.strokes[0].points.map(([x,y])=>[x+700,y-900])}]};
  expect(assessDrawing(moved).score).toBeCloseTo(assessDrawing(line).score,6);
});

test('weighted discovery gives preferred drawings more chances while retaining every drawing',()=>{
  const items=[dot,line],counts={dot:0,line:0};
  for(let i=0;i<1000;i++)counts[chooseTrace(items,null,()=>(i+.5)/1000).id]++;
  expect(counts.line).toBeGreaterThan(counts.dot*2);
  expect(counts.dot).toBeGreaterThan(0);
  expect(chooseTrace(items,'line',()=>.99)).toBe(dot);
});

test('owner corrections change chances, and automatic restores the computed preference',()=>{
  const overrides={dot:'feature',line:'less'};
  expect(drawingWeights([dot,line],overrides).get('dot')).toBeGreaterThan(drawingWeights([dot,line],overrides).get('line'));
  const counts={dot:0,line:0};
  for(let i=0;i<1000;i++)counts[chooseTrace([dot,line],null,()=>(i+.5)/1000,overrides).id]++;
  expect(counts.dot).toBeGreaterThan(counts.line*5);
  expect(counts.line).toBeGreaterThan(0);
  expect(drawingWeights([dot,line]).get('line')).toBeGreaterThan(drawingWeights([dot,line]).get('dot'));
  expect(drawingWeights([dot,line],{line:'automatic'})).toEqual(drawingWeights([dot,line]));
});
