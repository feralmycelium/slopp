import {RULES} from './rules.js';
import {drawTrace} from './ink.js';

const TAU=Math.PI*2,CYCLE=384,FAR=112;
const bright=['#015fff','#fd6e22','#fc1e2b','#1dd0ae','#6e53b2','#ef88b9'];
const soft=['#D8A0A6','#D9AD55','#A0B694','#A9BDD6','#E2A378','#B4A7CE'];
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
const wrap=(n,m)=>((n%m)+m)%m;
function random(seed){return()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};}

export function createJourney(){return {depth:0,x:0,y:0,time:0};}
export function advanceJourney(journey,dt,{paused=false,making=false,hidden=false}={}){
  if(paused||making||hidden)return;
  const step=clamp(dt,0,.06);
  journey.depth=wrap(journey.depth+step*1.5,CYCLE);journey.time+=step;
}
export function projectPoint(point,camera,width,height){
  const depth=point.z-camera.depth;
  if(depth<1.2||depth>FAR)return null;
  const scale=Math.min(width,height)*.94/depth;
  return {x:width/2+(point.x-camera.x)*scale,y:height/2+(point.y-camera.y)*scale,scale,depth};
}
export function tracePosition(trace){
  let seed=2166136261;
  for(const c of trace.id)seed=Math.imul(seed^c.charCodeAt(0),16777619)>>>0;
  return {x:Math.sin(trace.x*.0013)*8,y:Math.sin(trace.y*.0011)*5,z:24+(seed%336)};
}
function fade(z){return clamp((z-2)/7,0,1)*clamp((FAR-z)/65,0,1);}
function handwriting(rand){
  const path=new Path2D(),count=2+Math.floor(rand()*4);
  let x=-1,y=0;path.moveTo(x,y);
  for(let i=0;i<count;i++){
    const next=x+2/count,ny=(rand()-.5)*.6;
    path.bezierCurveTo(x+.15,y-.5-rand()*1.4,next+.25,ny+(rand()-.4),next,ny);x=next;y=ny;
  }
  return path;
}

function shapeOutline(kind){
  const p=[];
  if(kind==='arch'){
    p.push([-1,1.3]);
    for(let i=0;i<=32;i++){const a=Math.PI+i/32*Math.PI;p.push([Math.cos(a),Math.sin(a)-.25]);}
    p.push([1,1.3]);
  }else if(kind==='crescent'){
    for(let i=0;i<=40;i++){const a=-Math.PI/2+i/40*Math.PI;p.push([Math.cos(a),Math.sin(a)]);}
    for(let i=40;i>=0;i--){const a=-Math.PI/2+i/40*Math.PI;p.push([Math.cos(a)*.57,Math.sin(a)]);}
  }else{
    for(let i=0;i<=48;i++){const a=i/48*TAU;p.push([Math.cos(a),Math.sin(a)]);}
  }
  return p;
}

function compositions(){
  const result=[];
  for(let n=0;n<12;n++){
    const rand=random(4200+n*137),phase=rand()*TAU,z=18+n*32;
    const lines=[];
    for(let j=0;j<4;j++){
      const points=[],thin=j>0;
      for(let i=0;i<=128;i++){
        const u=i/128,a=u*TAU*(j===2?1.8:.72)+phase;
        const x=j===2?Math.cos(a)*6:Math.sin(a)*(thin?10:8)+(j-1)*3;
        const y=j===2?Math.sin(a)*4:(u-.5)*23+Math.cos(a*1.3)*2;
        points.push({x,y,z:Math.sin(a*.8)*5+u*9,wiggle:rand()});
      }
      lines.push({points,glyphs:Array.from({length:8},()=>handwriting(rand)),color:j===0?bright[n%bright.length]:j===2?bright[(n+3)%bright.length]:'#282429',width:j===0?.075:j===2?.022:.013,phase:phase+j});
    }
    const shapes=[
      {x:Math.sin(phase)*6-4,y:Math.cos(phase)*4,z:2,size:2.2,kind:n%3===0?'arch':'disc',color:soft[n%soft.length],angle:phase*.2},
      {x:Math.cos(phase)*7+4,y:Math.sin(phase)*5,z:11,size:1.4,kind:n%2===0?'crescent':'disc',color:soft[(n+2)%soft.length],angle:-phase*.2},
    ];
    result.push({z,phase,lines,shapes});
  }
  return result;
}

export function createCurrent(){
  const journey=createJourney(),scenes=compositions(),traceCache=new Map();
  const project=(p,w,h)=>projectPoint(p,{x:journey.x,y:journey.y,depth:0},w,h);
  function steer(dx,dy){journey.x=clamp(journey.x+dx,-10,10);journey.y=clamp(journey.y+dy,-7,7);}
  function travel(amount){journey.depth=wrap(journey.depth+clamp(amount,-8,8),CYCLE);}
  function focusTrace(trace){const p=tracePosition(trace);journey.depth=wrap(p.z-15,CYCLE);journey.x=p.x;journey.y=p.y;}
  function home(){Object.assign(journey,createJourney());}
  function traceCanvas(trace){
    if(traceCache.has(trace.id))return traceCache.get(trace.id);
    const points=trace.strokes.flatMap(s=>s.points),xs=points.map(p=>p[0]),ys=points.map(p=>p[1]);
    const left=Math.min(...xs)-30,top=Math.min(...ys)-40,w=Math.max(...xs)-left+40,h=Math.max(...ys)-top+40;
    const canvas=document.createElement('canvas'),scale=Math.min(1.5,1400/Math.max(w,h));
    canvas.width=Math.ceil(w*scale);canvas.height=Math.ceil(h*scale);
    const c=canvas.getContext('2d');c.scale(scale,scale);c.translate(-left,-top);drawTrace(c,{...trace,x:0,y:0});
    const cached={canvas,w:w*.012,h:h*.012};traceCache.set(trace.id,cached);
    if(traceCache.size>100)traceCache.delete(traceCache.keys().next().value);
    return cached;
  }
  function render(ctx,width,height,items){
    ctx.fillStyle=RULES.paper;ctx.fillRect(0,0,width,height);
    const commands=[],time=journey.time;
    for(const scene of scenes){
      const depth=wrap(scene.z-journey.depth+16,CYCLE)-16;
      if(depth>FAR+15||depth<-15)continue;
      for(const line of scene.lines){
        let previous=null;
        for(let i=0;i<line.points.length;i++){
          const p=line.points[i];
          const sway=Math.sin(time*.16+p.y*.18+line.phase)*.45;
          const point=project({x:p.x+sway,y:p.y+Math.sin(time*.13+p.x*.22)*.35,z:depth+p.z},width,height);
          if(point&&previous){
            const z=(point.depth+previous.depth)/2;
            if(fade(z)>.005)commands.push({kind:'line',a:previous,b:point,z,color:line.color,width:clamp(line.width*point.scale*(.84+p.wiggle*.32),.35,8),alpha:fade(z)});
          }
          if(point&&i%16===7){
            const size=point.scale*.22;
            if(size>.8)commands.push({kind:'glyph',p:point,z:point.depth,size,path:line.glyphs[Math.floor(i/16)],color:i%3?line.color:bright[(i+2)%bright.length],alpha:fade(point.depth),phase:i+scene.phase});
          }
          previous=point;
        }
      }
      for(const shape of scene.shapes){
        const z=depth+shape.z,angle=shape.angle+Math.sin(time*.10+scene.phase)*.18;
        const vertices=shapeOutline(shape.kind).map(([x,y])=>project({x:shape.x+x*shape.size*Math.cos(angle),y:shape.y+y*shape.size,z:z+x*shape.size*Math.sin(angle)},width,height));
        if(vertices.every(Boolean)&&fade(z)>.005)commands.push({kind:'shape',vertices,z,color:shape.color,alpha:fade(z)});
      }
      for(let i=0;i<7;i++){
        const a=i*2.4+scene.phase,z=depth+4+i*1.4;
        const p=project({x:Math.sin(a)*10,y:Math.cos(a*1.2)*7,z},width,height);
        if(p)commands.push({kind:'bead',p,z,size:clamp(p.scale*.095,1,6),color:bright[(i+Math.floor(scene.z/32))%bright.length],alpha:fade(z)});
      }
    }
    for(const item of items){
      const origin=tracePosition(item),depth=wrap(origin.z-journey.depth+4,CYCLE)-4;
      const p=project({...origin,z:depth},width,height);
      if(!p||fade(depth)<.04)continue;
      const art=traceCanvas(item);
      commands.push({kind:'trace',p,z:depth,art,alpha:fade(depth)});
    }
    commands.sort((a,b)=>b.z-a.z);ctx.lineCap='round';ctx.lineJoin='round';
    for(const c of commands){
      ctx.globalAlpha=c.alpha;ctx.strokeStyle=c.color;ctx.fillStyle=c.color;
      if(c.kind==='line'){
        ctx.lineWidth=c.width;ctx.beginPath();ctx.moveTo(c.a.x,c.a.y);ctx.lineTo(c.b.x,c.b.y);ctx.stroke();
      }else if(c.kind==='shape'){
        ctx.beginPath();c.vertices.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));ctx.closePath();ctx.fill();
      }else if(c.kind==='bead'){
        ctx.beginPath();ctx.arc(c.p.x,c.p.y,c.size,0,TAU);ctx.fill();
      }else if(c.kind==='glyph'){
        ctx.save();ctx.translate(c.p.x,c.p.y);ctx.rotate(c.phase*.17);ctx.scale(c.size,c.size);ctx.lineWidth=Math.max(.45/c.size,.09);ctx.stroke(c.path);ctx.restore();
      }else{
        const w=c.art.w*c.p.scale,h=c.art.h*c.p.scale;ctx.drawImage(c.art.canvas,c.p.x-w/2,c.p.y-h/2,w,h);
      }
    }
    ctx.globalAlpha=1;
  }
  return {journey,render,steer,travel,focusTrace,home};
}
