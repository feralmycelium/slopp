import {signatureForCanvas,paintSignature,downloadBlob} from './still.js';

export async function downloadAnimation(world,{signal,onProgress=()=>{}}={}){
  const {encodeLoop}=await import('./video-encoder.js');
  signal?.throwIfAborted();
  const source=world.renderer.domElement,canvas=document.createElement('canvas');
  const scale=Math.min(1,1280/Math.max(source.width,source.height));
  canvas.width=Math.max(2,Math.round(source.width*scale/2)*2);
  canvas.height=Math.max(2,Math.round(source.height*scale/2)*2);
  const loop=world.createLoopCapture(canvas.width,canvas.height),ctx=canvas.getContext('2d');
  const controller=new AbortController();
  const abort=()=>controller.abort(signal.reason);
  const hidden=()=>{if(document.hidden)controller.abort(new Error('Keep this tab open while saving an animation. Try again.'));};
  signal?.addEventListener('abort',abort,{once:true});document.addEventListener('visibilitychange',hidden);
  try{
    ctx.drawImage(loop.render(0),0,0);
    const signature=signatureForCanvas(ctx,canvas.width,canvas.height);
    const draw=seconds=>{
      ctx.drawImage(loop.render(seconds),0,0);
      paintSignature(ctx,signature,loop.moving?seconds:null);
    };
    draw(0);onProgress(0);
    const blob=await encodeLoop(canvas,draw,{signal:controller.signal,onProgress});
    downloadBlob(blob,blob.type.startsWith('video/mp4')?'mp4':'webm');
  }finally{
    loop.dispose();signal?.removeEventListener('abort',abort);document.removeEventListener('visibilitychange',hidden);
  }
}
