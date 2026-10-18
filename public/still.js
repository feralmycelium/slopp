export function drawSignature(ctx,width,height){
  const size=Math.max(12,Math.round(Math.min(width,height)/45));
  const margin=Math.max(12,Math.round(Math.min(width,height)/35));
  ctx.save();
  ctx.font=`${size}px Arial, sans-serif`;
  ctx.fillStyle='#000000';ctx.globalAlpha=1;
  ctx.textAlign='right';ctx.textBaseline='bottom';
  ctx.fillText('sloppworld.com',width-margin,height-margin);
  ctx.restore();
}
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
