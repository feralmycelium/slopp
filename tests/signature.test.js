import {test,expect} from 'bun:test';
import {planSignature} from '../public/still.js';

function picture(side){
  const width=160,height=100,data=new Uint8ClampedArray(width*height*4);
  for(let y=0;y<height;y++)for(let x=0;x<width;x++){
    const i=(y*width+x)*4,paint=Math.hypot(x-side,y-50)<22;
    data.set(paint?[43,69,135,255]:[240,232,217,255],i);
  }
  return {width,height,data};
}
const rng=()=>{let n=13;return ()=>((n=Math.imul(n,1664525)+1013904223>>>0)/4294967296);};
test('lettering finds different places around different artwork and follows a curve',()=>{
  const left=planSignature(picture(40),1280,800,rng());
  const right=planSignature(picture(120),1280,800,rng());
  expect(left.glyphs.reduce((n,g)=>n+g.x,0)).toBeLessThan(right.glyphs.reduce((n,g)=>n+g.x,0));
  expect(new Set(left.glyphs.map(g=>g.angle.toFixed(2))).size).toBeGreaterThan(6);
  expect(left.ink).toBe('#2b4587');
});
test('portrait and landscape signatures stay inside the image, including blank scenes',()=>{
  for(const [width,height] of [[1280,800],[390,844],[300,180]]){
    for(const side of [40,120,1000]){
      const plan=planSignature(picture(side),width,height,rng());
      expect(plan.glyphs).toHaveLength(14);
      for(const g of plan.glyphs){
        const padding=30*plan.scale;
        expect(g.x).toBeGreaterThan(padding);
        expect(g.x).toBeLessThan(width-padding);
        expect(g.y).toBeGreaterThan(padding);
        expect(g.y).toBeLessThan(height-padding);
      }
    }
  }
});
