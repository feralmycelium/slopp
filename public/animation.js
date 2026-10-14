import {signatureForCanvas,paintSignature,downloadBlob} from './still.js';

export async function downloadAnimation(world,{signal,onProgress=()=>{}}={}){
  if(!globalThis.MediaRecorder||!HTMLCanvasElement.prototype.captureStream)
    throw new Error('This browser cannot save animations. Download a still instead.');
  const canvas=document.createElement('canvas'),source=world.captureCanvas();
  const scale=Math.min(1,1280/Math.max(source.width,source.height));
  canvas.width=Math.max(2,Math.round(source.width*scale/2)*2);
  canvas.height=Math.max(2,Math.round(source.height*scale/2)*2);
  const ctx=canvas.getContext('2d');
  ctx.drawImage(source,0,0,canvas.width,canvas.height);
  const signature=signatureForCanvas(ctx,canvas.width,canvas.height);
  const reduced=matchMedia('(prefers-reduced-motion:reduce)').matches;
  const mimeType=['video/mp4;codecs=avc1.42001f','video/mp4','video/webm;codecs=vp9','video/webm']
    .find(type=>MediaRecorder.isTypeSupported(type));
  if(!mimeType)throw new Error('This browser cannot save animations. Download a still instead.');
  const stream=canvas.captureStream(30);
  let recorder,unsubscribe,timer,settled=false;
  const blob=await new Promise((resolve,reject)=>{
    const chunks=[];
    function cleanup(){
      unsubscribe?.();clearTimeout(timer);
      signal?.removeEventListener('abort',abort);
      document.removeEventListener('visibilitychange',visibility);
      if(recorder&&recorder.state!=='inactive')recorder.stop();
      stream.getTracks().forEach(track=>track.stop());
    }
    function finish(error){
      if(settled)return;settled=true;cleanup();
      if(error)return reject(error);
      const result=new Blob(chunks,{type:recorder.mimeType});
      if(!result.size)return reject(new Error('Could not save this animation. Please try again.'));
      resolve(result);
    }
    function abort(){finish(new DOMException('Animation cancelled.','AbortError'));}
    function visibility(){if(document.hidden)finish(new Error('Keep this tab open while saving an animation. Try again.'));}
    signal?.addEventListener('abort',abort,{once:true});
    document.addEventListener('visibilitychange',visibility);
    if(signal?.aborted){abort();return;}
    try{
      recorder=new MediaRecorder(stream,{mimeType,videoBitsPerSecond:6000000});
      recorder.ondataavailable=event=>{if(event.data.size)chunks.push(event.data);};
      recorder.onerror=()=>finish(new Error('Could not save this animation. Please try again.'));
      recorder.onstop=()=>finish();
      let start=null,previous=-Infinity,remaining;
      recorder.onstart=()=>{
        if(settled)return;
        start=performance.now();
        timer=setTimeout(()=>{if(recorder.state==='recording')recorder.stop();},8000);
      };
      unsubscribe=world.captureFrames((source,now)=>{
        if(settled)return;
        try{
          const elapsed=start===null?0:Math.max(0,(now-start)/1000);
          if(now-previous>=1000/30){
            ctx.drawImage(source,0,0,canvas.width,canvas.height);
            paintSignature(ctx,signature,reduced||world.state.paused?null:elapsed);
            previous=now;
          }
          const seconds=Math.max(0,Math.ceil(8-elapsed));
          if(seconds!==remaining){remaining=seconds;onProgress(seconds);}
        }catch(error){finish(error);}
      });
      onProgress(8);recorder.start();
    }catch(error){finish(error);}
  });
  downloadBlob(blob,blob.type.startsWith('video/mp4')?'mp4':'webm');
}
