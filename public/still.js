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
export function drawSignature(ctx,width,height){
  const scale=Math.max(.65,Math.min(width/620,height/360,2.4));
  const text='sloppworld.com',advance=17;
  ctx.save();ctx.translate(width-(text.length*advance+24)*scale,height-36*scale);
  ctx.scale(scale,scale);ctx.lineCap='round';ctx.lineJoin='round';
  for(let i=0;i<text.length;i++){
    ctx.save();ctx.translate(i*advance,Math.sin(i*2.4)*1.7);ctx.rotate(Math.sin(i*1.7)*.075);
    const path=new Path2D(letters[text[i]]);
    ctx.strokeStyle='#f0e8d9';ctx.lineWidth=4.7;ctx.stroke(path);
    ctx.strokeStyle='#2b4587';ctx.lineWidth=1.65;ctx.stroke(path);ctx.restore();
  }
  ctx.strokeStyle='#fd6e22';ctx.lineWidth=1.2;ctx.beginPath();
  ctx.moveTo(5,24);ctx.bezierCurveTo(58,29,142,21,221,25);ctx.stroke();ctx.restore();
}
export async function downloadStill(world){
  const source=world.captureCanvas(),image=document.createElement('canvas');
  image.width=source.width;image.height=source.height;
  const ctx=image.getContext('2d');ctx.drawImage(source,0,0);
  drawSignature(ctx,image.width,image.height);
  const blob=await new Promise(resolve=>image.toBlob(resolve,'image/png'));
  if(!blob)throw new Error('Could not capture this view.');
  const url=URL.createObjectURL(blob),link=document.createElement('a');
  link.href=url;link.download='slopp-'+new Date().toISOString().replace(/[:.]/g,'-')+'.png';
  link.click();setTimeout(()=>URL.revokeObjectURL(url),60000);
}
