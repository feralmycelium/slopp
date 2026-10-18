import * as THREE from 'three';
import {loopMotion} from '../public/loop.js';
import {createPresenceProbe} from './presence.js';

import {INKS,ENVIRONMENTS,environmentAt,environmentById,seeded,hash,traceDepth} from '../public/environments.js';
import {landscape} from './art.js';
import {layoutTraces,sourceSpace,traceFrame,fitDistance,chooseTrace} from '../public/space.js';
export const PALETTE=INKS;
const PAPER = '#f0e8d9';
const TAU = Math.PI * 2;
const V = (x=0,y=0,z=0) => new THREE.Vector3(x,y,z);
const random=seeded;
const clamp = (n,a,b)=>Math.max(a,Math.min(b,n));

function renderWorld(renderer,scene,preview,camera) {
  renderer.render(scene,camera);
  if(!preview.children.length)return;
  const autoClear=renderer.autoClear;renderer.autoClear=false;
  try{renderer.clearDepth();renderer.render(preview,camera);}
  finally{renderer.autoClear=autoClear;}
}

export function wheelTravel(event,world) {
  event.preventDefault();
  if(world.state.making)return false;
  if(event.ctrlKey)world.dolly(-event.deltaY*.14);
  else{world.state.speed=clamp(world.state.speed-event.deltaY*.035,0,100);world.state.paused=false;}
  return true;
}

function tube(points, radius=.035) {
  const positions=[], indices=[], sides=5, tangent=V(), normal=V(), binormal=V();
  for(let i=0;i<points.length;i++) {
    tangent.subVectors(points[Math.min(points.length-1,i+1)],points[Math.max(0,i-1)]).normalize();
    normal.crossVectors(tangent,Math.abs(tangent.y)>.94?V(1,0,0):V(0,1,0)).normalize();
    binormal.crossVectors(tangent,normal);
    const taper=.3+.7*Math.max(0,Math.sin(Math.PI*i/(points.length-1)))**.3;
    for(let j=0;j<sides;j++) {
      const angle=j/sides*TAU;
      const p=points[i].clone().addScaledVector(normal,Math.cos(angle)*radius*taper).addScaledVector(binormal,Math.sin(angle)*radius*taper);
      positions.push(p.x,p.y,p.z);
      if(i<points.length-1) {
        const a=i*sides+j,b=i*sides+(j+1)%sides,c=a+sides,d=b+sides;
        indices.push(a,b,c,b,d,c);
      }
    }
  }
  const geometry=new THREE.BufferGeometry();
  geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));
  geometry.setIndex(indices);geometry.computeBoundingSphere();return geometry;
}

export function createWorld(canvas,{onMove=()=>{},onFrame=()=>{}}={}) {
  const renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false,powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.8));renderer.setClearColor(PAPER);
  const scene=new THREE.Scene();scene.fog=new THREE.Fog(PAPER,58,160);
  const camera=new THREE.PerspectiveCamera(57,1,.08,185);
  camera.position.set(0,0,22);camera.rotation.order='YXZ';
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const state={speed:reduced.matches?0:24,paused:reduced.matches,making:false,yaw:0,pitch:0,time:0,items:[],travel:0,environment:ENVIRONMENTS[0]};
  const uniforms={uTime:{value:0},uRipple:{value:V(9999,9999,9999)},uRippleStart:{value:-100}};
  const materials=new Map(),regions=new Map(),traces=new Map(),keys=new Set(),unfoldings=new Map(),ghosts=new Map();
  const preview=new THREE.Scene();preview.fog=scene.fog;
  let draft=null,last=performance.now(),lastRegion='',lastSync=0,displayCounter=0,pinchRemaining=0,flight=null,focusId=null,activeSeconds=0;
  let layout=new Map(),curation={},nextIntroduction=30;
  const frames=new Map(),introduced=new Map(),localPlacements=new Map(),encounters=new Map();
  const probePresence=createPresenceProbe();
  let emptySince=null,lastPresence=-Infinity,encounterSequence=0,presence=0,audibleTraces=[];
  const direction=V(),right=V(),movement=V(),euler=new THREE.Euler(0,0,0,'YXZ');

  function material(color,thin=false,opacity=1,animated=true,motion='flow') {
    const key=[color,thin,opacity,animated,motion].join('/');
    if(materials.has(key))return materials.get(key);
    const mat=thin?new THREE.LineBasicMaterial({color,transparent:opacity<1,opacity}):new THREE.MeshBasicMaterial({color,side:THREE.DoubleSide});
    const strength={flow:1,fold:.24,soft:.48,print:.18,echo:.75,hush:.4}[motion]??1;
    const gesture={fold:'transformed.z += sin(position.y*.12 + uTime*.12)*.35;',soft:'transformed.xy += position.xy * sin(uTime*.17 + worldPoint.z*.02)*.012;',echo:'transformed.xy += position.xy * sin(uTime*.34 + worldPoint.z*.04)*.018;',hush:'transformed.y += sin(worldPoint.x*.07 + uTime*.08)*.25;'}[motion]||'';
    mat.customProgramCacheKey=()=>key;
    if(animated)mat.onBeforeCompile=shader=>{
      Object.assign(shader.uniforms,uniforms);
      shader.vertexShader='uniform float uTime; uniform vec3 uRipple; uniform float uRippleStart;\n'+shader.vertexShader;
      shader.vertexShader=shader.vertexShader.replace('#include <fog_vertex>','#ifdef USE_FOG\nvFogDepth = length(mvPosition.xyz);\n#endif');
      shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
        vec3 worldPoint = (modelMatrix * vec4(position, 1.0)).xyz;
        float age = uTime - uRippleStart;
        float distanceToRipple = distance(worldPoint, uRipple);
        float wave = sin(distanceToRipple * .6 - age * 2.0) * exp(-abs(distanceToRipple - age * 6.0) * .2) * max(0.0, 1.0-age/12.0);
        transformed.x += sin(worldPoint.y*.11 + worldPoint.z*.04 + uTime*.24) * ${(strength*.42).toFixed(3)} + wave*.65;
        transformed.y += sin(worldPoint.x*.08 + uTime*.19) * ${(strength*.55).toFixed(3)} + wave*.45;
        transformed.z += cos(worldPoint.y*.09 + worldPoint.x*.06 + uTime*.16) * ${(strength*.35).toFixed(3)};
        ${gesture}
      `);
    };
    materials.set(key,mat);return mat;
  }

  function line(group,points,color,width=.035,thin=false,opacity=.6,motion='flow') {
    if(points.length<2)return;
    const geometry=thin?new THREE.BufferGeometry().setFromPoints(points):tube(points,width);
    const obj=thin?new THREE.Line(geometry,material(color,true,opacity,true,motion)):new THREE.Mesh(geometry,material(color,false,1,true,motion));
    group.add(obj);return obj;
  }
  function dispose(group) {group.traverse(obj=>{obj.geometry?.dispose();if(obj.userData.traceMaterial)obj.material.dispose();});group.removeFromParent();}

  function regionsAround() {
    const cell=camera.position.clone().divideScalar(48).round(),key=cell.toArray().join(',')+'/'+scene.fog.far;
    if(key===lastRegion)return;lastRegion=key;
    const wanted=new Set(),landmarks=ENVIRONMENTS.map(env=>({
      env,center:V(...env.center.map((n,i)=>n+Math.round((camera.position.getComponent(i)-n)/240)*240))
    }));
    function add(k,center,seed,env,borrowed,scale=1){
      if(center.distanceTo(camera.position)>scene.fog.far+80)return;
      wanted.add(k);if(regions.has(k))return;
      const group=landscape(env,seed,{line,material},borrowed);
      group.position.copy(center);group.scale.setScalar(scale);group.userData.environment=env.id;
      if(!k.startsWith('landmark/')){const rand=random(seed);group.rotation.set((rand()-.5)*.8,(rand()-.5)*1.4,(rand()-.5)*1.5);group.scale.y*=.7+rand()*.6;}
      scene.add(group);regions.set(k,group);
    }
    const repeats=Math.ceil((scene.fog.far+80)/240);
    for(const {env,center}of landmarks)for(let x=-repeats;x<=repeats;x++)for(let y=-repeats;y<=repeats;y++)for(let z=-repeats;z<=repeats;z++){
      const position=center.clone().add(V(x*240,y*240,z*240));
      add('landmark/'+env.id+'/'+position.toArray().join(','),position,hash(env.id),env,null);
    }
    const reach=Math.ceil((scene.fog.far+80)/48);
    for(let x=-reach;x<=reach;x++)for(let y=-reach;y<=reach;y++)for(let z=-reach;z<=reach;z++) {
      const cx=cell.x+x,cy=cell.y+y,cz=cell.z+z,k=[cx,cy,cz].join(','),seed=hash(k),rand=random(seed);
      if(rand()<.925)continue;
      const center=V(cx*48+(rand()-.5)*15,cy*48+(rand()-.5)*15,cz*48+(rand()-.5)*15);
      const env=environmentAt(center.toArray());
      if(center.distanceTo(V(0,0,22))<100||center.distanceTo(V(...env.center))<45)continue;
      add(k,center,seed,env.primary,env.blend>.35?env.neighbour:null,.35+rand()*.15);
    }
    for(const [key,group]of regions)if(!wanted.has(key)){dispose(group);regions.delete(key);}
  }

  function placement(item) {
    return localPlacements.get(item.id)||layout.get(item.id)||sourceSpace(item);
  }
  function centerOf(item){
    const space=placement(item),frame=frames.get(item.id)||traceFrame(item);
    return V(...frame.center).applyQuaternion(new THREE.Quaternion().fromArray(space.rotation)).add(V(...space.position));
  }
  function paintTrace(item,flat=false,lineWidth=null) {
    const group=new THREE.Group(),space=placement(item),env=environmentById(space.environment);
    group.position.fromArray(space.position);group.quaternion.fromArray(space.rotation);
    item.strokes.forEach((stroke,strokeIndex)=>{
      if(stroke.points.length<2)return;
      const color=PALETTE[stroke.ink]||PALETTE.ink,first=group.children.length;
      const spatial=stroke.points.some(p=>Math.abs(p[3]??0)>.001);
      if(spatial)group.userData.spatial=true;
      let points=stroke.points.map((p,i)=>V(p[0]*.03,-p[1]*.03,spatial?(p[3]??0)*.03:flat?0:traceDepth(i/(stroke.points.length-1),stroke.seed,env.id)));
      if(points.length>2)points=new THREE.CatmullRomCurve3(points).getPoints(Math.min(350,Math.max(24,points.length*2)));
      if(stroke.kind==='form') {
        const shape=new THREE.Shape(points.map(p=>new THREE.Vector2(p.x,p.y))),geometry=new THREE.ShapeGeometry(shape);
        const positions=geometry.getAttribute('position');geometry.computeBoundingBox();
        const {min,max}=geometry.boundingBox,span=Math.max(.001,max.x-min.x);
        if(spatial)for(let i=0;i<positions.count;i++){
          const x=positions.getX(i),y=positions.getY(i);
          const nearest=points.reduce((best,p)=>(p.x-x)**2+(p.y-y)**2<(best.x-x)**2+(best.y-y)**2?p:best);
          positions.setZ(i,nearest.z);
        }
        else if(!flat)for(let i=0;i<positions.count;i++)positions.setZ(i,traceDepth((positions.getX(i)-min.x)/span,stroke.seed,env.id));
        geometry.computeBoundingSphere();
        const mesh=new THREE.Mesh(geometry,material(color,false,1,!flat,env.id));mesh.userData.fill=true;group.add(mesh);
      }else{
        const width=stroke.kind==='ribbon'?.19:stroke.kind==='thread'?.018:env.id==='hush'?.032:.05;
        line(group,points,color,lineWidth??width,false,1,env.id);
        if(!flat&&env.id==='echo')for(let j=1;j<=2;j++)line(group,points.map(p=>p.clone().multiplyScalar(1+j*.035).add(V(j*.14,0,j*.65))),color,.023,true,.55,env.id);
        if(!flat&&env.id==='print'&&stroke.kind==='ribbon')for(let j=0;j<7;j++)line(group,points.map((p,i)=>p.clone().add(V((j-3)*.095+Math.sin(i+j)*.03,0,j*.08))),color,.018,true,.7,env.id);
        if(stroke.kind==='script')line(group,points.map((p,i)=>p.clone().add(V(Math.sin(i*1.5)*.12,Math.cos(i*1.5)*.25,0))),color,.022);
      }
      for(const child of group.children.slice(first)){
        child.userData.order=strokeIndex/item.strokes.length;
        child.userData.total=child.geometry.index?.count||child.geometry.attributes.position.count;
        child.userData.unit=child.isLine?1:30;
        if(flat)child.material=material(color,false,1,false);
      }
    });
    return group;
  }
  function unfold(item,draw=false) {unfoldGroup(item.id,traces.get(item.id),draw);}
  function unfoldGroup(id,group,draw) {
    if(!group)return;
    if(reduced.matches||state.paused)return;
    unfoldings.set(id,{group,age:0,draw});
    group.scale.z=group.userData.spatial?1:.015;
    for(const child of group.children){
      child.scale.y=(draw&&child.userData.fill) ? .001 : 1;
      child.geometry.setDrawRange(0,draw&&!child.userData.fill?0:Infinity);
    }
  }
  function animateReleases(dt){
    for(const [id,entry]of unfoldings){
      entry.age+=dt;const depth=clamp((entry.age-.25)/2.5,0,1);
      entry.group.scale.z=entry.group.userData.spatial?1:.015+.985*(1-(1-depth)**3);
      for(const child of entry.group.children){
        if(!entry.draw)continue;
        const progress=clamp((entry.age-child.userData.order*.9)/1.6,0,1);
        if(child.userData.fill)child.scale.y=Math.max(.001,1-(1-progress)**3);
        else child.geometry.setDrawRange(0,Math.floor(child.userData.total*progress/child.userData.unit)*child.userData.unit);
      }
      if(entry.age>=3){
        entry.group.scale.z=1;
        for(const child of entry.group.children){child.scale.set(1,1,1);child.geometry.setDrawRange(0,Infinity);}
        unfoldings.delete(id);
      }
    }
  }
  // Ghosts (the drawn invitation) live outside state.items and traces, so syncing never counts or disposes them.
  // space.position is an offset from the camera, held every frame so drift never carries the camera into the ghost.
  // Materials are cloned so a fade never touches real traces; reduced motion paints the finished stroke still.
  function ghost(item,{draw=false}={}) {
    dropGhost(item.id);
    const group=paintTrace(item,false,.018),still=reduced.matches,offset=group.position.clone().applyQuaternion(camera.quaternion);
    group.quaternion.premultiply(camera.quaternion);
    group.traverse(child=>{
      if(!child.material)return;
      const source=child.material,mat=source.clone();mat.transparent=true;mat.userData.opacity=mat.opacity;
      if(!still){mat.onBeforeCompile=source.onBeforeCompile;mat.customProgramCacheKey=source.customProgramCacheKey;}
      child.material=mat;
    });
    group.position.copy(camera.position).add(offset);scene.add(group);ghosts.set(item.id,{group,offset,fade:null});
    if(draw&&!still)unfoldGroup(item.id,group,true);
  }
  function dropGhost(id) {
    const entry=ghosts.get(id);if(!entry)return;
    entry.group.traverse(child=>child.material?.dispose());dispose(entry.group);ghosts.delete(id);unfoldings.delete(id);
  }
  function dismissGhost(id,{fadeMs=2000}={}) {
    const entry=ghosts.get(id);if(!entry)return;
    if(reduced.matches||fadeMs<=0)dropGhost(id);else entry.fade??={from:performance.now(),ms:fadeMs};
  }
  function animateGhosts(now) {
    for(const [id,entry]of ghosts){
      entry.group.position.copy(camera.position).add(entry.offset);
      if(!entry.fade)continue;
      const left=1-clamp((now-entry.fade.from)/entry.fade.ms,0,1);
      if(!left){dropGhost(id);continue;}
      entry.group.traverse(child=>{if(child.material)child.material.opacity=child.material.userData.opacity*left;});
    }
  }
  function withoutGhosts(fn) {
    for(const {group}of ghosts.values())group.visible=false;
    try{return fn();}finally{for(const {group}of ghosts.values())group.visible=true;}
  }
  function syncTraces() {
    if(activeSeconds>=nextIntroduction){
      const candidates=state.items.filter(item=>!introduced.has(item.id)&&camera.position.distanceTo(centerOf(item))<scene.fog.far);
      const item=chooseTrace(candidates,null,Math.random,curation);
      if(item)introduced.set(item.id,activeSeconds);
      nextIntroduction=activeSeconds+8;
    }
    const wanted=new Set();
    for(const item of state.items){
      if(!introduced.has(item.id))continue;
      const radius=(frames.get(item.id)||traceFrame(item)).radius;
      if(item.id!==focusId&&camera.position.distanceTo(centerOf(item))>scene.fog.far+radius+(traces.has(item.id)?60:30))continue;
      wanted.add(item.id);
      if(traces.has(item.id))continue;
      const group=paintTrace(item);
      group.traverse(child=>{
        if(!child.material)return;
        const source=child.material;child.material=source.clone();child.material.onBeforeCompile=source.onBeforeCompile;child.material.customProgramCacheKey=source.customProgramCacheKey;
        child.userData.traceMaterial={opacity:source.opacity,transparent:source.transparent};
      });
      scene.add(group);traces.set(item.id,group);if(Date.now()-Date.parse(item.createdAt)<3500)unfold(item,true);
    }
    for(const [id,group]of traces)if(!wanted.has(id)){dispose(group);traces.delete(id);unfoldings.delete(id);}
    revealTraces();
  }
  function revealTraces(){
    for(const [id,group]of traces){
      const progress=clamp((activeSeconds-introduced.get(id))/8,0,1),fade=reduced.matches?1:progress*progress*(3-2*progress);
      group.traverse(child=>{
      const source=child.userData.traceMaterial;if(!source)return;
      const opacity=id===focusId?1:fade,transparent=source.transparent||opacity<1;
      if(child.material.transparent!==transparent){child.material.transparent=transparent;child.material.needsUpdate=true;}
      child.material.opacity=source.opacity*opacity;
      });
    }
  }
  function updateEncounters(){
    for(const [id,entry]of encounters){
      if(entry.center.distanceTo(camera.position)>scene.fog.far+80){dispose(entry.group);encounters.delete(id);continue;}
      const fade=reduced.matches?1:THREE.MathUtils.smoothstep(activeSeconds-entry.born,0,4);
      entry.group.traverse(child=>{const source=child.userData.traceMaterial;if(source)child.material.opacity=source.opacity*fade;});
    }
    if(activeSeconds-lastPresence<.25)return;lastPresence=activeSeconds;
    const view=probePresence([...regions.values(),...traces.values(),...[...encounters.values()].map(e=>e.group)],camera,scene.fog);
    presence=view.presence;
    audibleTraces=[];
    for(const item of state.items)if(view.visibleGroups.has(traces.get(item.id)))audibleTraces.push({item,center:centerOf(item),scale:1});
    for(const entry of encounters.values())if(entry.item&&view.visibleGroups.has(entry.group))audibleTraces.push({item:entry.item,center:entry.center,scale:entry.group.scale.x});
    if(view.occupied||state.making||keys.size||flight||Math.abs(pinchRemaining)>.01){emptySince=null;return;}
    emptySince??=activeSeconds;
    if(activeSeconds-emptySince<5)return;
    if(encounters.size>=12){
      const oldest=[...encounters].find(([,entry])=>!view.visibleGroups.has(entry.group));
      if(!oldest)return;
      dispose(oldest[1].group);encounters.delete(oldest[0]);
    }
    const number=encounterSequence++,env=environmentAt(camera.position.toArray()).primary;
    const recent=new Set([...encounters.values()].map(e=>e.sourceId));
    const item=activeSeconds>=30&&number%2?chooseTrace(state.items.filter(i=>!recent.has(i.id)),null,Math.random,curation):null;
    const center=V(.9*Math.sin(number*2.4),.6*Math.cos(number*1.7),-90).applyQuaternion(camera.quaternion).add(camera.position);
    const id='encounter/'+number;
    const group=item?paintTrace({...item,id,space:{...sourceSpace(item),position:center.toArray(),rotation:camera.quaternion.toArray()}}):landscape(env,hash(id+'/'+center.toArray().join(',')),{line,material});
    group.quaternion.copy(camera.quaternion);group.position.copy(center);
    if(item){
      const frame=frames.get(item.id)||traceFrame(item),scale=Math.min(1,14/frame.radius);group.scale.setScalar(scale);
      group.position.sub(V(...frame.center).multiplyScalar(scale).applyQuaternion(group.quaternion));
    }else{group.scale.setScalar(.65);group.userData.environment=env.id;}
    group.userData.encounter={sourceId:item?.id??null};
    group.traverse(child=>{
      if(!child.material)return;const source=child.material;
      child.material=source.clone();child.material.onBeforeCompile=source.onBeforeCompile;child.material.customProgramCacheKey=source.customProgramCacheKey;
      child.userData.traceMaterial={opacity:source.opacity,transparent:source.transparent};child.material.transparent=true;child.material.opacity=reduced.matches?source.opacity:0;
    });
    scene.add(group);encounters.set(id,{group,center,born:activeSeconds,sourceId:item?.id,item});emptySince=null;
  }
  function resize() {renderer.setSize(innerWidth,innerHeight,false);camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();const focused=state.items.find(item=>item.id===focusId);if(focused&&!state.making)goTo(focused);else syncTraces();}
  function updateCamera() {camera.rotation.set(state.pitch,state.yaw,0,'YXZ');camera.updateMatrixWorld();}
  function look(dx,dy) {emptySince=null;flight=null;state.yaw-=dx*.004;state.pitch=clamp(state.pitch-dy*.004,-1.48,1.48);updateCamera();}
  function dolly(distance) {if(!state.making){emptySince=null;flight=null;pinchRemaining=clamp(pinchRemaining+distance,-28,28);}}
  function goHome() {emptySince=null;flight=null;focusId=null;scene.fog.near=58;scene.fog.far=160;camera.far=185;camera.updateProjectionMatrix();pinchRemaining=0;camera.position.set(0,0,22);state.yaw=0;state.pitch=0;updateCamera();lastRegion='';regionsAround();syncTraces();onMove();}
  function goTo(item) {
    emptySince=null;flight=null;pinchRemaining=0;
    introduced.set(item.id,activeSeconds-8);
    const space=placement(item),q=new THREE.Quaternion().fromArray(space.rotation);
    const distance=fitDistance((frames.get(item.id)||traceFrame(item)).radius,camera.aspect,camera.fov);
    focusId=item.id;camera.far=Math.max(185,distance*2);camera.updateProjectionMatrix();
    scene.fog.near=Math.max(58,distance*1.25);scene.fog.far=Math.max(160,distance*2);
    camera.position.copy(centerOf(item)).add(V(0,0,distance).applyQuaternion(q));
    euler.setFromQuaternion(q,'YXZ');state.yaw=euler.y;state.pitch=euler.x;updateCamera();regionsAround();syncTraces();
  }
  function visitEnvironment(id){
    emptySince=null;focusId=null;scene.fog.near=58;scene.fog.far=160;
    const env=environmentById(id),target=V(...env.center.map((n,i)=>n+Math.round((camera.position.getComponent(i)-n)/240)*240)).add(V(0,1,32));
    if(reduced.matches){camera.position.copy(target);state.yaw=0;state.pitch=0;updateCamera();regionsAround();syncTraces();return;}
    flight={start:camera.position.clone(),target,yaw:Math.atan2(Math.sin(state.yaw),Math.cos(state.yaw)),pitch:state.pitch,age:0};pinchRemaining=0;
  }
  function beginDrawing(existing=null) {
    state.making=true;pinchRemaining=0;flight=null;
    if(existing){draft=existing;goTo(draft);}
    else{
      camera.getWorldDirection(direction);const position=camera.position.clone().addScaledVector(direction,23);
      draft={id:crypto.randomUUID(),x:position.x,y:position.z,space:{position:position.toArray(),rotation:camera.quaternion.toArray(),environment:environmentAt(camera.position.toArray()).primary.id},strokes:[]};
    }
    showDraft(draft);return draft;
  }
  function showDraft(value) {
    draft=value;for(const child of [...preview.children])dispose(child);
    if(value){const group=paintTrace(value,true);preview.add(group);}
  }
  function drawingPoint(x,y) {
    camera.updateMatrixWorld();
    const ray=new THREE.Raycaster();ray.setFromCamera(new THREE.Vector2(x/innerWidth*2-1,-y/innerHeight*2+1),camera);
    const normal=camera.getWorldDirection(V()),center=camera.position.clone().addScaledVector(normal,23);
    if(!draft.strokes.length){
      draft.space.position=center.toArray();draft.space.rotation=camera.quaternion.toArray();draft.x=center.x;draft.y=center.z;
    }
    const q=new THREE.Quaternion().fromArray(draft.space.rotation);
    const plane=new THREE.Plane().setFromNormalAndCoplanarPoint(normal,center);
    const hit=ray.ray.intersectPlane(plane,V());if(!hit)return null;
    hit.sub(V(...draft.space.position)).applyQuaternion(q.invert());
    if(Math.max(Math.abs(hit.x),Math.abs(hit.y),Math.abs(hit.z))>87)return null;
    return [hit.x/.03,-hit.y/.03,.5,hit.z/.03];
  }
  function finishDrawing() {state.making=false;showDraft(null);}
  function releaseHere(item) {
    const space=sourceSpace(item);localPlacements.set(item.id,space);
    introduced.set(item.id,activeSeconds-8);focusId=null;
    const group=traces.get(item.id);
    if(group){group.position.fromArray(space.position);group.quaternion.fromArray(space.rotation);}
    syncTraces();
  }
  function ripple(item) {uniforms.uRipple.value.fromArray(placement(item).position);uniforms.uRippleStart.value=state.time;}
  function setItems(items,preferences=curation) {
    curation=preferences;
    if(layout.size!==items.length||items.some(item=>!layout.has(item.id))){
      layout=layoutTraces(items);frames.clear();for(const item of items)frames.set(item.id,traceFrame(item));
    }
    state.items=items;regionsAround();syncTraces();
  }
  function setKey(key,down){if(down){flight=null;keys.add(key.toLowerCase());}else keys.delete(key.toLowerCase());}
  function stopKeys(){keys.clear();pinchRemaining=0;flight=null;}
  function createLoopCapture(width,height){
    const snapshot=withoutGhosts(()=>scene.clone()),foreground=preview.clone(),view=camera.clone(),origin=camera.position.clone(),geometries=new Map();
    for(const layer of [snapshot,foreground])layer.traverse(object=>{
      if(!object.geometry)return;
      if(!geometries.has(object.geometry))geometries.set(object.geometry,object.geometry.clone());
      object.geometry=geometries.get(object.geometry);
    });
    const output=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance'});
    output.setSize(width,height,false);output.setClearColor(PAPER);
    view.aspect=width/height;view.updateProjectionMatrix();
    const time=state.time,ripple=uniforms.uRipple.value.clone(),rippleStart=uniforms.uRippleStart.value;
    const moving=!state.paused&&!reduced.matches,amount=.65+state.speed*.025;
    return {
      moving,
      render(seconds){
        const motion=loopMotion(moving?seconds:0);
        view.position.copy(origin).add(V(motion.x,motion.y,motion.z).multiplyScalar(amount).applyQuaternion(view.quaternion));
        view.updateMatrixWorld();
        const liveTime=uniforms.uTime.value,liveRipple=uniforms.uRipple.value.clone(),liveStart=uniforms.uRippleStart.value;
        uniforms.uTime.value=time+motion.time;uniforms.uRipple.value.copy(ripple);uniforms.uRippleStart.value=rippleStart;
        try{renderWorld(output,snapshot,foreground,view);}
        finally{uniforms.uTime.value=liveTime;uniforms.uRipple.value.copy(liveRipple);uniforms.uRippleStart.value=liveStart;}
        return output.domElement;
      },
      dispose(){geometries.forEach(geometry=>geometry.dispose());output.dispose();output.forceContextLoss();}
    };
  }
  function frame(now) {
    const elapsed=(now-last)/1000,dt=Math.min(elapsed,.04);last=now;
    if(!document.hidden) {
      activeSeconds+=elapsed;revealTraces();
      if(!state.paused)state.time+=dt;uniforms.uTime.value=state.time;
      if(!state.paused)animateReleases(dt);
      if(!state.making&&flight){
        flight.age+=dt;const t=clamp(flight.age/4,0,1),ease=t*t*(3-2*t),before=camera.position.clone();
        camera.position.lerpVectors(flight.start,flight.target,ease);state.yaw=flight.yaw*(1-ease);state.pitch=flight.pitch*(1-ease);
        state.travel+=before.distanceTo(camera.position);updateCamera();regionsAround();syncTraces();
        if(t===1)flight=null;
      }else {
        const turn=dt*.9;
        if(keys.has('arrowleft'))state.yaw+=turn;if(keys.has('arrowright'))state.yaw-=turn;
        if(keys.has('arrowup'))state.pitch=clamp(state.pitch+turn,-1.48,1.48);if(keys.has('arrowdown'))state.pitch=clamp(state.pitch-turn,-1.48,1.48);
        updateCamera();camera.getWorldDirection(direction);right.set(1,0,0).applyQuaternion(camera.quaternion);movement.set(0,0,0);
        const drift=state.paused?0:state.speed**1.6*.008,manual=4+state.speed*.07;
        movement.addScaledVector(direction,drift+(keys.has('w')?manual:0)-(keys.has('s')?manual+drift:0));
        movement.addScaledVector(right,(Number(keys.has('d'))-Number(keys.has('a')))*manual);
        movement.y+=(Number(keys.has('e'))-Number(keys.has('q')))*manual;
        const pinchStep=pinchRemaining*(reduced.matches?1:1-Math.exp(-dt*18));pinchRemaining-=pinchStep;
        if(Math.abs(pinchRemaining)<.0001)pinchRemaining=0;
        movement.multiplyScalar(dt).addScaledVector(direction,pinchStep);camera.position.add(movement);state.travel+=movement.length();camera.position.clampScalar(-49000,49000);
        regionsAround();if(now-lastSync>600){syncTraces();lastSync=now;}
      }
      updateEncounters();animateGhosts(now);
      renderWorld(renderer,scene,preview,camera);
      if(++displayCounter%8===0){state.environment=environmentAt(camera.position.toArray()).primary;onFrame({yaw:state.yaw,position:camera.position,travel:state.travel,environment:state.environment});}
    }
    requestAnimationFrame(frame);
  }
  addEventListener('resize',resize);addEventListener('blur',stopKeys);document.addEventListener('visibilitychange',()=>{stopKeys();last=performance.now();});
  reduced.addEventListener('change',e=>{if(e.matches){state.paused=true;state.speed=0;}onMove();});
  resize();updateCamera();regionsAround();requestAnimationFrame(frame);
  return {state,camera,renderer,placement,centerOf,look,dolly,goHome,goTo,visitEnvironment,beginDrawing,showDraft,drawingPoint,finishDrawing,releaseHere,ripple,setItems,setKey,stopKeys,unfold,ghost,dismissGhost,
    captureCanvas(){withoutGhosts(()=>renderWorld(renderer,scene,preview,camera));return canvas;},
    createLoopCapture,
    get presence(){return presence;},
    get audibleTraces(){return audibleTraces;},
    turnAround(){emptySince=null;flight=null;state.yaw+=Math.PI;state.pitch=-state.pitch;updateCamera();},get stats(){return {regions:regions.size,traces:traces.size,encounters:encounters.size,encountersCreated:encounterSequence,geometries:renderer.info.memory.geometries};}};
}
