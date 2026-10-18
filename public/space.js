import {hash,seeded,environmentAt} from './environments.js';
import {drawingWeights} from './quality.js';

export function traceRadius(item){
  let radius=1;
  for(const stroke of item.strokes||[])for(const p of stroke.points)radius=Math.max(radius,Math.hypot(p[0],p[1],p[3]??0)*.03);
  return radius+5;
}

export function traceFrame(item){
  let left=Infinity,right=-Infinity,top=Infinity,bottom=-Infinity,back=Infinity,front=-Infinity;
  for(const stroke of item.strokes||[])for(const [x,y,,z=0] of stroke.points){left=Math.min(left,x);right=Math.max(right,x);top=Math.min(top,y);bottom=Math.max(bottom,y);back=Math.min(back,z);front=Math.max(front,z);}
  if(!Number.isFinite(left))return {center:[0,0,0],radius:5};
  return {center:[(left+right)*.015,-(top+bottom)*.015||0,(back+front)*.015],radius:Math.hypot((right-left)*.015,(bottom-top)*.015,(front-back)*.015)+5};
}

export function sourceSpace(item){
  if(item.space)return item.space;
  const rand=seeded(hash(item.id));
  return {position:[item.x*.035,(rand()-.5)*24,item.y*.035-28],rotation:[0,0,0,1]};
}

export function layoutTraces(items){
  const layout=new Map(),placed=[];
  const ordered=[...items].sort((a,b)=>(a.seq??Infinity)-(b.seq??Infinity)||a.id.localeCompare(b.id));
  for(const item of ordered){
    const space=sourceSpace(item),radius=traceRadius(item),rand=seeded(hash(item.id));
    const origin=space.position.map(n=>Math.max(-47000,Math.min(47000,n)));
    let position=origin,attempt=0;
    const clear=()=>Math.hypot(position[0],position[1],position[2]-22)>=60+radius&&
      Math.hypot(...position.map((n,i)=>n-environmentAt(position).center[i]))>=45+Math.min(25,radius)&&
      position.every(n=>Math.abs(n)+radius<48500)&&
      placed.every(other=>Math.hypot(...position.map((n,i)=>n-other.position[i]))>=radius+other.radius+30);
    while(!clear()){
      const shell=(1+Math.floor(attempt++/32))*(radius*2+30),y=rand()*2-1,angle=rand()*Math.PI*2,h=Math.sqrt(1-y*y);
      position=[origin[0]+shell*h*Math.cos(angle),origin[1]+shell*y,origin[2]+shell*h*Math.sin(angle)];
    }
    layout.set(item.id,{...space,position});placed.push({position,radius});
  }
  return layout;
}

export function chooseTrace(items,previousId,random=Math.random,overrides={}){
  const candidates=items.length>1?items.filter(item=>item.id!==previousId):items;
  if(!candidates.length)return null;
  const preferences=drawingWeights(candidates,overrides),weights=candidates.map(item=>preferences.get(item.id));
  let ticket=random()*weights.reduce((sum,weight)=>sum+weight,0);
  for(let i=0;i<candidates.length;i++){ticket-=weights[i];if(ticket<0)return candidates[i];}
  return candidates.at(-1);
}

export function fitDistance(radius,aspect,fov=57){
  return Math.max(23,radius+radius/(Math.tan(fov*Math.PI/360)*Math.min(1,aspect)*.68));
}

