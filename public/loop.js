export const LOOP_SECONDS=8,LOOP_FPS=30;
export function loopMotion(seconds){
  const phase=seconds/LOOP_SECONDS*Math.PI*2;
  return {x:Math.sin(phase),y:(1-Math.cos(phase*2))*.18,z:(1-Math.cos(phase))*.3,time:(1-Math.cos(phase))*2};
}
export function handwriting(seconds){
  const fade=Math.min(1,Math.max(0,(seconds-6)/2));
  return {progress:Math.min(1,Math.max(0,seconds/4)),opacity:1-fade*fade*(3-2*fade)};
}
