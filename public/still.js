const letters={
  s:'M11 5 Q3 0 2 6 Q1 9 8 10 Q15 12 10 16 Q5 20 1 15',
  l:'M4 17 Q2 9 5 0 Q9 -5 8 4 Q7 10 3 12 Q1 17 8 17',
  o:'M7 4 Q0 3 1 11 Q2 20 10 16 Q15 12 11 6 Q9 3 7 4',
  p:'M2 5 Q3 13 2 25 M3 8 Q11 0 13 9 Q15 17 4 16',
  w:'M0 5 Q0 22 6 15 L9 7 Q10 22 15 15 L18 4',
  r:'M2 17 L2 5 M2 10 Q7 1 12 6',
  d:'M12 6 Q3 1 1 10 Q0 20 9 17 Q14 14 12 -2 L13 18',
  '.':'M3 16 L4 17',
  c:'M12 6 Q4 0 1 9 Q-1 19 12 16',
  m:'M1 17 L1 5 L2 10 Q6 0 9 8 L10 17 L10 9 Q16 0 18 9 L19 18'
};
const text='sloppworld.com';
export function planSignature(pixels,width,height,random=Math.random){
  const w=pixels.width,h=pixels.height,nearest=new Int32Array(w*h).fill(-1);
  const distance=new Float32Array(w*h).fill(Infinity);
  for(let i=0;i<nearest.length;i++){
    const p=i*4;
    if(Math.max(Math.abs(pixels.data[p]-240),Math.abs(pixels.data[p+1]-232),Math.abs(pixels.data[p+2]-217))>38){nearest[i]=i;distance[i]=0;}
  }
  function borrow(i,j){
    if(j<0||j>=nearest.length||nearest[j]<0)return;
    const source=nearest[j],d=Math.hypot((i%w-source%w)*width/w,(Math.floor(i/w)-Math.floor(source/w))*height/h);
    if(d<distance[i]){distance[i]=d;nearest[i]=source;}
  }
  for(let y=0;y<h;y++)for(let x=0;x<w;x++){
    const i=y*w+x;if(x)borrow(i,i-1);if(y)borrow(i,i-w);
  }
  for(let y=h-1;y>=0;y--)for(let x=w-1;x>=0;x--){
    const i=y*w+x;if(x<w-1)borrow(i,i+1);if(y<h-1)borrow(i,i+w);
  }
  const scale=Math.min(width,height)/520;
  function curve(cx,cy,rotation,bend){
    const span=204*scale,cos=Math.cos(rotation),sin=Math.sin(rotation);
    return Array.from(text,(letter,i)=>{
      const t=i/(text.length-1),x=(t-.5)*span,y=4*bend*t*(1-t);
      return {letter,x:cx+x*cos-y*sin,y:cy+x*sin+y*cos,angle:rotation+Math.atan2(4*bend*(1-2*t),span)};
    });
  }
  let best={glyphs:curve(width*.5,height*.5,0,28*scale),scale,ink:'#2b4587'},score=Infinity;
  for(let n=0;n<650;n++){
    const glyphs=curve(width*(.13+random()*.74),height*(.13+random()*.74),(random()-.5)*1.1,(random()<.5?-1:1)*(25+random()*35)*scale);
    if(glyphs.some(g=>g.x<=30*scale||g.x>=width-30*scale||g.y<=30*scale||g.y>=height-30*scale))continue;
    let cost=0,ink=best.ink,closest=Infinity;
    for(const g of glyphs){
      const x=Math.min(w-1,Math.max(0,Math.round((g.x+6*scale)*w/width)));
      const y=Math.min(h-1,Math.max(0,Math.round((g.y+9*scale)*h/height))),i=y*w+x;
      const d=distance[i];
      cost+=Number.isFinite(d)?Math.abs(d-24*scale)/scale+Math.max(0,17*scale-d)*5/scale:20;
      if(d<closest){
        closest=d;const p=nearest[i]*4;
        ink='#'+Array.from(pixels.data.slice(p,p+3),v=>v.toString(16).padStart(2,'0')).join('');
      }
    }
    cost/=glyphs.length;
    if(cost<score){score=cost;best={glyphs,scale,ink};}
  }
  return best;
}
export function signatureForCanvas(ctx,width,height){
  const sample=document.createElement('canvas');sample.width=160;sample.height=Math.max(1,Math.round(160*height/width));
  const sampleCtx=sample.getContext('2d',{willReadFrequently:true});sampleCtx.drawImage(ctx.canvas,0,0,sample.width,sample.height);
  return planSignature(sampleCtx.getImageData(0,0,sample.width,sample.height),width,height);
}
export function paintSignature(ctx,plan,seconds=null){
  ctx.save();ctx.lineCap='round';ctx.lineJoin='round';
  for(const [i,g] of plan.glyphs.entries()){
    const reveal=seconds===null?1:Math.min(1,Math.max(0,(seconds-i*.075)/.45));
    if(!reveal)continue;
    const sway=seconds===null?0:Math.sin(seconds*1.3+i*.35)*2;
    ctx.save();ctx.translate(g.x,g.y+sway*plan.scale);ctx.rotate(g.angle+sway*.008);ctx.scale(plan.scale,plan.scale);
    const path=new Path2D(letters[g.letter]);
    if(reveal<1){ctx.setLineDash([100,100]);ctx.lineDashOffset=100*(1-reveal);}
    ctx.strokeStyle='#f0e8d9';ctx.lineWidth=4;ctx.stroke(path);
    ctx.strokeStyle=plan.ink;ctx.lineWidth=1.65;ctx.stroke(path);ctx.restore();
  }
  ctx.restore();
}
export function drawSignature(ctx,width,height){paintSignature(ctx,signatureForCanvas(ctx,width,height));}
export function downloadBlob(blob,extension){
  const url=URL.createObjectURL(blob),link=document.createElement('a');
  link.href=url;link.download='slopp-'+new Date().toISOString().replace(/[:.]/g,'-')+'.'+extension;
  link.click();setTimeout(()=>URL.revokeObjectURL(url),60000);
}
export async function downloadStill(world){
  const source=world.captureCanvas(),image=document.createElement('canvas');
  image.width=source.width;image.height=source.height;
  const ctx=image.getContext('2d');ctx.drawImage(source,0,0);
  drawSignature(ctx,image.width,image.height);
  const blob=await new Promise(resolve=>image.toBlob(resolve,'image/png'));
  if(!blob)throw new Error('Could not capture this view.');
  downloadBlob(blob,'png');
}
