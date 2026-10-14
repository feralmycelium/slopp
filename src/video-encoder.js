import {Output,BufferTarget,Mp4OutputFormat,WebMOutputFormat,CanvasSource,Quality,canEncodeVideo} from 'mediabunny';
import {LOOP_SECONDS,LOOP_FPS} from '../public/loop.js';

export async function encodeLoop(canvas,draw,{signal,onProgress}){
  const quality=new Quality({bitrate:6000000});
  const options={width:canvas.width,height:canvas.height,frameRate:LOOP_FPS,quality};
  let codec;
  for(const candidate of ['avc','vp9'])if(await canEncodeVideo(candidate,options)){codec=candidate;break;}
  if(!codec)return recordLoop(canvas,draw,{signal,onProgress});
  const output=new Output({format:codec==='avc'?new Mp4OutputFormat():new WebMOutputFormat(),target:new BufferTarget()});
  const video=new CanvasSource(canvas,{codec,quality});
  output.addVideoTrack(video,{frameRate:LOOP_FPS});
  let complete=false;
  try{
    await output.start();
    const frames=LOOP_SECONDS*LOOP_FPS;
    for(let i=0;i<frames;i++){
      signal?.throwIfAborted();
      draw(i/LOOP_FPS);
      await video.add(i/LOOP_FPS,1/LOOP_FPS);
      onProgress(Math.round((i+1)/frames*100));
      if(i%8===0)await new Promise(resolve=>setTimeout(resolve,0));
    }
    signal?.throwIfAborted();video.close();await output.finalize();complete=true;signal?.throwIfAborted();
    return new Blob([output.target.buffer],{type:codec==='avc'?'video/mp4':'video/webm'});
  }finally{if(!complete)await output.cancel();}
}

async function recordLoop(canvas,draw,{signal,onProgress}){
  const mimeType=globalThis.MediaRecorder&&['video/mp4;codecs=avc1.42001f','video/mp4','video/webm;codecs=vp9','video/webm'].find(type=>MediaRecorder.isTypeSupported(type));
  if(!mimeType||!canvas.captureStream)throw new Error('This browser cannot save animations. Download a still instead.');
  const stream=canvas.captureStream(LOOP_FPS);
  let recorder,frame,timer,settled=false;
  return new Promise((resolve,reject)=>{
    const chunks=[];
    function finish(error){
      if(settled)return;settled=true;cancelAnimationFrame(frame);clearTimeout(timer);
      signal?.removeEventListener('abort',abort);
      if(recorder&&recorder.state!=='inactive')recorder.stop();
      stream.getTracks().forEach(track=>track.stop());
      if(error)return reject(error);
      const blob=new Blob(chunks,{type:recorder.mimeType});
      if(!blob.size)return reject(new Error('Could not save this animation. Please try again.'));
      resolve(blob);
    }
    function abort(){finish(signal.reason);}
    signal?.addEventListener('abort',abort,{once:true});
    if(signal?.aborted){abort();return;}
    try{
      recorder=new MediaRecorder(stream,{mimeType,videoBitsPerSecond:6000000});
      recorder.ondataavailable=event=>{if(event.data.size)chunks.push(event.data);};
      recorder.onerror=()=>finish(new Error('Could not save this animation. Please try again.'));
      recorder.onstop=()=>finish();
      recorder.onstart=()=>{
        if(settled)return;
        const start=performance.now();
        function tick(now){
          if(settled)return;
          try{
            const seconds=Math.max(0,Math.min(LOOP_SECONDS-1/LOOP_FPS,(now-start)/1000));
            draw(seconds);onProgress(Math.round(seconds/LOOP_SECONDS*100));frame=requestAnimationFrame(tick);
          }catch(error){finish(error);}
        }
        frame=requestAnimationFrame(tick);
        timer=setTimeout(()=>{if(recorder.state==='recording')recorder.stop();},LOOP_SECONDS*1000);
      };
      recorder.start();
    }catch(error){finish(error);}
  });
}
