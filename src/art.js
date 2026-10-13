import * as THREE from 'three';
import {INKS,seeded} from '../public/environments.js';

const V=(x=0,y=0,z=0)=>new THREE.Vector3(x,y,z),TAU=Math.PI*2;
const curve=(points,count=100,closed=false)=>new THREE.CatmullRomCurve3(points,closed).getPoints(count);

export function landscape(env,seed,{line,material},borrowed=null){
  const group=new THREE.Group(),rand=seeded(seed),colors=env.inks.map(k=>INKS[k]),motion=env.id;
  const stroke=(parent,points,color,width=.035,thin=false,opacity=.65)=>line(parent,points,color,width,thin,opacity,motion);
  const path=(fn,n=100)=>Array.from({length:n+1},(_,i)=>fn(i/n));
  function sheet(parent,points,width,color){
    const vertices=[],indices=[];
    points.forEach((p,i)=>{
      vertices.push(p.x-width,p.y,p.z-.35,p.x+width,p.y,p.z+.35);
      if(i<points.length-1){const a=i*2;indices.push(a,a+1,a+2,a+1,a+3,a+2);}
    });
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));g.setIndex(indices);g.computeBoundingSphere();
    const mesh=new THREE.Mesh(g,material(color,false,1,true,motion));parent.add(mesh);return mesh;
  }
  function patch(parent,coords,color,z=0,depth=1){
    const shape=new THREE.Shape(coords.map(p=>new THREE.Vector2(p[0],p[1])));
    const g=new THREE.ShapeGeometry(shape),pos=g.getAttribute('position');
    for(let i=0;i<pos.count;i++)pos.setZ(i,z+Math.sin(pos.getX(i)*.17)*depth+Math.cos(pos.getY(i)*.21)*depth*.45);
    g.computeBoundingSphere();const mesh=new THREE.Mesh(g,material(color,false,1,true,motion));parent.add(mesh);return mesh;
  }
  if(env.id==='flow'){
    const phase=rand()*TAU,span=30+rand()*14;
    for(let j=0;j<18;j++){
      const points=path(t=>{
        const a=t*TAU,envelope=Math.sin(t*Math.PI);
        return V((t-.5)*span+Math.sin(a*2.5+phase+j*.06)*5*envelope,
          Math.sin(a*.9+phase)*5+Math.cos(a*3+j*.09)*3*envelope+(j-9)*.14,
          Math.sin(a*.75+phase)*7+Math.cos(a*2)*j*.12);
      },140);
      stroke(group,points,colors[j%9===0?2:j%7===0?0:1],j===0?.1:.025,j>2,j%3===0?.28:.62);
    }
    stroke(group,curve([V(-18,-9,2),V(-5,6,-7),V(12,11,1),V(20,5,3)]),colors[3],.065);
    patch(group,[[-5,-7],[-2,-5],[4,-6],[2,-8]],colors[2],6,.6);
  }
  if(env.id==='fold'){
    const count=9+Math.floor(rand()*4);
    for(let j=0;j<count;j++){
      const points=path(t=>V((j-count/2)*1.6+Math.sin(t*4+j*.12)*3,(t-.5)*21+Math.sin(j*.6)*3,
        Math.sin(j*.8)*5+Math.cos(t*4+j*.3)*3),36);
      sheet(group,points,.4+rand()*.28,colors[j%5===0?2:j%3===0?1:0]);
      if(j%3===0)stroke(group,points.map(p=>p.clone().add(V(-.8,0,.2))),colors[3],.025,true,.5);
    }
    const accent=patch(group,[[-13,-8],[-9,-10],[13,-3],[10,-1]],colors[1],7,2);accent.rotation.z=-.25;
    stroke(group,curve([V(-18,4,-3),V(-5,11,7),V(15,7,-1)]),colors[2],.045);
  }
  if(env.id==='soft'){
    for(let j=0;j<3;j++){
      const base=[[-8,-2],[-5,4],[-3,9],[1,6],[7,7],[9,0],[3,-5],[-4,-6]].map(([x,y])=>V(x*(.7+rand()*.4),y*(.6+rand()*.5),0));
      const contour=curve(base,72,true),coords=contour.map(p=>[p.x,p.y]);
      const part=new THREE.Group();part.position.set((j-1)*13,(j===1?1:-1)*5,(j-1)*5);part.rotation.set(0,j*.4-.4,(j-1)*.45);group.add(part);
      patch(part,coords,colors[j],0,1.5);
      const back=contour.map(p=>p.clone().add(V(.25,-.2,-1.4)));
      stroke(part,back,colors[(j+1)%4],.11);
      if(j===1)for(let k=0;k<11;k++)stroke(part,path(t=>V(-4+t*9,(-3+k*.6)+Math.sin(t*3)*.8,2),22),colors[2],.027,true,.45);
    }
    stroke(group,curve([V(-24,3,2),V(-12,15,-5),V(3,9,9),V(23,14,0)]),colors[3],.065);
  }
  if(env.id==='print'){
    for(let j=0;j<3;j++){
      const part=new THREE.Group();part.position.set((j-1)*11,(j-1)*-3,j*3);part.rotation.z=(rand()-.5)*1.1;group.add(part);
      if(j!==1)patch(part,[[-6,-5],[-3,7],[4,5],[6,-6]],colors[j===0?2:3],-.6,.4);
      for(let k=0;k<26;k++){
        const x=(k/26-.5)*13,y=(rand()-.5)*3,height=7+rand()*8;
        const points=path(t=>V(x+Math.sin(t*18+k)*.12+Math.sin(t*5)*1.1,y+(t-.5)*height,Math.sin(t*3)*.7+1),20);
        stroke(part,points,colors[j===1?0:1],k%4===0?.11:.025,k%4!==0,.65);
      }
    }
    for(let j=0;j<13;j++){const x=(rand()-.5)*36,y=(rand()-.5)*23;stroke(group,[V(x,y,4),V(x+.6+rand()*1.5,y+.3,4)],colors[0],.04);}
  }
  if(env.id==='echo'){
    const base=[[-9,-4],[-11,2],[-3,9],[6,7],[10,1],[5,-8],[-3,-5]].map(([x,y])=>V(x+(rand()-.5)*3,y+(rand()-.5)*3,0));
    for(let j=0;j<13;j++){
      const scale=.35+j*.09,angle=j*.055;
      const points=curve(base.map(p=>V((p.x*Math.cos(angle)-p.y*Math.sin(angle))*scale+j*.2,(p.x*Math.sin(angle)+p.y*Math.cos(angle))*scale,Math.sin(j*.4)*4+j*.32)),100,true);
      stroke(group,points,colors[j%5===0?1:j%3===0?2:0],j%5===0?.16:.037,j%3===1,.7);
    }
    const band=curve([V(-25,-9,3),V(-12,7,-4),V(0,0,5),V(14,-12,2),V(23,5,-8)],140);
    stroke(group,band,colors[3],.2);stroke(group,band.map(p=>p.clone().add(V(0,.45,.8))),colors[1],.04);
  }
  if(env.id==='hush'){
    const pathPoints=curve([V(-28,-8,-7),V(-16,-3,-4),V(-4,11,4),V(4,6,8),V(0,-2,2),V(22,7,-5)],130);
    stroke(group,pathPoints,colors[0],.12);
    for(let j=0;j<5;j++)stroke(group,pathPoints.map((p,i)=>p.clone().add(V(Math.sin(i*.4+j)*.16,(j-2)*.13,Math.sin(i*.07+j)*.9))),colors[j%2===0?1:0],.02,true,.3);
    patch(group,[[9,-8],[10,-4],[11,-7],[15,-8],[11,-9]],colors[3],4,.7);
    for(let j=0;j<4;j++)stroke(group,curve([V(-14+j*.3,9,2),V(-12+j*.3,11,-1),V(-10+j*.2,10,3)],25),colors[2],.03);
  }
  if(borrowed){
    const neighbour=landscape(borrowed,seed^91823,{line,material});
    neighbour.scale.setScalar(.25);neighbour.position.set(14,8,-6);neighbour.rotation.z=.65;group.add(neighbour);
  }
  return group;
}
