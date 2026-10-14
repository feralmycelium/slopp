export const CORE=[0,2,4,7,9];
export const PALETTES={
  flow:{name:'Loose ends',home:2,colour:10,fineGain:-10,broadGain:-14,echo:0,restMix:{hum:.35,held:.4,none:.25}},
  fold:{name:'Soft geometry',home:9,colour:5,fineGain:-11,broadGain:-13,echo:0,restMix:{hum:.3,held:.45,none:.25}},
  soft:{name:'Almost touching',home:4,colour:6,fineGain:-12,broadGain:-15,echo:0,restMix:{hum:.25,held:.3,none:.45}},
  print:{name:'Overprint',home:7,colour:5,fineGain:-10,broadGain:-13,echo:0,restMix:{hum:.45,held:.3,none:.25}},
  echo:{name:'Inside out',home:2,colour:11,fineGain:-11,broadGain:-14,echo:2,restMix:{hum:.3,held:.4,none:.3}},
  hush:{name:'The hush',home:9,colour:6,fineGain:-14,broadGain:-17,echo:0,restMix:{hum:.4,held:.2,none:.4}},
};
export const REGISTER={flow:4,fold:3,soft:5,print:4,echo:5,hush:5};
export const scale=id=>[...new Set([...CORE,PALETTES[id].colour])].sort((a,b)=>a-b);
function ascending(id,octave,count){
  const pcs=scale(id),out=[];let midi=12*(octave+1)+PALETTES[id].home;
  while(out.length<count){if(pcs.includes(midi%12))out.push(midi);midi++;}
  return out;
}
export function paletteNotes(id){
  const pcs=scale(id),home=12*4+PALETTES[id].home,up=[7,5,3].map(i=>home+i).find(n=>pcs.includes(n%12));
  const low=12*3+PALETTES[id].home;
  return {fine:ascending(id,REGISTER[id],8),broad:ascending(id,3,6),held:[home,up,home+12],rest:[low,pcs.includes((low+7)%12)?low+7:low+12]};
}
export const isColour=(id,note)=>note%12===PALETTES[id].colour;

