import * as THREE from 'three';
import {loopMotion} from '../public/loop.js';

import {INKS,ENVIRONMENTS,environmentAt,environmentById,seeded,hash,traceDepth} from '../public/environments.js';
import {landscape} from './art.js';
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
  let draft=null,last=performance.now(),lastRegion='',lastSync=0,displayCounter=0,pinchRemaining=0,flight=null;
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
  function dispose(group) {group.traverse(obj=>obj.geometry?.dispose());group.removeFromParent();}

  function regionsAround() {
    const cell=camera.position.clone().divideScalar(48).round(),key=cell.toArray().join(',');
    if(key===lastRegion)return;lastRegion=key;
    const wanted=new Set(),landmarks=ENVIRONMENTS.map(env=>({
      env,center:V(...env.center.map((n,i)=>n+Math.round((camera.position.getComponent(i)-n)/240)*240))
    }));
    function add(k,center,seed,env,borrowed,scale=1){
      wanted.add(k);if(regions.has(k))return;
      const group=landscape(env,seed,{line,material},borrowed);
      group.position.copy(center);group.scale.setScalar(scale);group.userData.environment=env.id;
      if(!k.startsWith('landmark/')){const rand=random(seed);group.rotation.set((rand()-.5)*.8,(rand()-.5)*1.4,(rand()-.5)*1.5);group.scale.y*=.7+rand()*.6;}
      scene.add(group);regions.set(k,group);
    }
    for(const {env,center}of landmarks)if(camera.position.distanceTo(center)<157)
      add('landmark/'+env.id+'/'+center.toArray().join(','),center,hash(env.id),env,null);
    for(let x=-2;x<=2;x++)for(let y=-2;y<=2;y++)for(let z=-2;z<=2;z++) {
      if(x*x+y*y+z*z>5)continue;
      const cx=cell.x+x,cy=cell.y+y,cz=cell.z+z,k=[cx,cy,cz].join(','),seed=hash(k),rand=random(seed);
      if(rand()<.48)continue;
      const center=V(cx*48+(rand()-.5)*15,cy*48+(rand()-.5)*15,cz*48+(rand()-.5)*15);
      if(landmarks.some(l=>l.center.distanceTo(center)<33))continue;
      const env=environmentAt(center.toArray());
      add(k,center,seed,env.primary,env.blend>.35?env.neighbour:null,.65+rand()*.24);
    }
    for(const [key,group]of regions)if(!wanted.has(key)){dispose(group);regions.delete(key);}
  }

  function placement(item) {
    if(item.space)return item.space;
    const seed=hash(item.id),rand=random(seed);
    return {position:[item.x*.035,(rand()-.5)*24,item.y*.035-28],rotation:[0,0,0,1]};
  }
  function paintTrace(item,flat=false) {
    const group=new THREE.Group(),space=placement(item),env=environmentById(space.environment);
    group.position.fromArray(space.position);group.quaternion.fromArray(space.rotation);
    item.strokes.forEach((stroke,strokeIndex)=>{
      if(stroke.points.length<2)return;
      const color=PALETTE[stroke.ink]||PALETTE.ink,first=group.children.length;
      let points=stroke.points.map((p,i)=>V(p[0]*.03,-p[1]*.03,flat?0:traceDepth(i/(stroke.points.length-1),stroke.seed,env.id)));
      if(points.length>2)points=new THREE.CatmullRomCurve3(points).getPoints(Math.min(350,Math.max(24,points.length*2)));
      if(stroke.kind==='form') {
        const shape=new THREE.Shape(points.map(p=>new THREE.Vector2(p.x,p.y))),geometry=new THREE.ShapeGeometry(shape);
        const positions=geometry.getAttribute('position');geometry.computeBoundingBox();
        const {min,max}=geometry.boundingBox,span=Math.max(.001,max.x-min.x);
        if(!flat)for(let i=0;i<positions.count;i++)positions.setZ(i,traceDepth((positions.getX(i)-min.x)/span,stroke.seed,env.id));
        geometry.computeBoundingSphere();
        const mesh=new THREE.Mesh(geometry,material(color,false,1,!flat,env.id));mesh.userData.fill=true;group.add(mesh);
      }else{
        const width=stroke.kind==='ribbon'?.19:stroke.kind==='thread'?.018:env.id==='hush'?.032:.05;
        line(group,points,color,width,false,1,env.id);
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
    group.scale.z=.015;
    for(const child of group.children){
      child.scale.y=(draw&&child.userData.fill) ? .001 : 1;
      child.geometry.setDrawRange(0,draw&&!child.userData.fill?0:Infinity);
    }
  }
  function animateReleases(dt){
    for(const [id,entry]of unfoldings){
      entry.age+=dt;const depth=clamp((entry.age-.25)/2.5,0,1);
      entry.group.scale.z=.015+.985*(1-(1-depth)**3);
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
    const group=paintTrace(item),still=reduced.matches,offset=group.position.clone().applyQuaternion(camera.quaternion);
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
    const nearby=state.items.map(item=>({item,d:camera.position.distanceToSquared(V(...placement(item).position))})).filter(v=>v.d<145**2).sort((a,b)=>a.d-b.d).slice(0,220);
    const wanted=new Set(nearby.map(v=>v.item.id));
    for(const {item}of nearby)if(!traces.has(item.id)){const group=paintTrace(item);scene.add(group);traces.set(item.id,group);if(Date.now()-Date.parse(item.createdAt)<3500)unfold(item,true);}
    for(const [id,group]of traces)if(!wanted.has(id)){dispose(group);traces.delete(id);unfoldings.delete(id);}
  }
  function resize() {renderer.setSize(innerWidth,innerHeight,false);camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();}
  function updateCamera() {camera.rotation.set(state.pitch,state.yaw,0,'YXZ');camera.updateMatrixWorld();}
  function look(dx,dy) {flight=null;state.yaw-=dx*.004;state.pitch=clamp(state.pitch-dy*.004,-1.48,1.48);updateCamera();}
  function dolly(distance) {if(!state.making){flight=null;pinchRemaining=clamp(pinchRemaining+distance,-28,28);}}
  function goHome() {flight=null;pinchRemaining=0;camera.position.set(0,0,22);state.yaw=0;state.pitch=0;updateCamera();lastRegion='';regionsAround();syncTraces();onMove();}
  function goTo(item) {
    flight=null;pinchRemaining=0;
    const space=placement(item),q=new THREE.Quaternion().fromArray(space.rotation);
    camera.position.copy(V(...space.position)).add(V(0,0,23).applyQuaternion(q));
    euler.setFromQuaternion(q,'YXZ');state.yaw=euler.y;state.pitch=euler.x;updateCamera();regionsAround();syncTraces();
  }
  function visitEnvironment(id){
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
    const ray=new THREE.Raycaster();ray.setFromCamera(new THREE.Vector2(x/innerWidth*2-1,-y/innerHeight*2+1),camera);
    const q=new THREE.Quaternion().fromArray(draft.space.rotation);
    const plane=new THREE.Plane().setFromNormalAndCoplanarPoint(V(0,0,1).applyQuaternion(q),V(...draft.space.position));
    const hit=ray.ray.intersectPlane(plane,V());if(!hit)return null;
    hit.sub(V(...draft.space.position)).applyQuaternion(q.invert());
    return [clamp(hit.x/.03,-2900,2900),clamp(-hit.y/.03,-2900,2900),.5];
  }
  function finishDrawing() {state.making=false;showDraft(null);}
  function ripple(item) {uniforms.uRipple.value.fromArray(placement(item).position);uniforms.uRippleStart.value=state.time;}
  function setItems(items) {state.items=items;syncTraces();}
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
    const dt=Math.min((now-last)/1000,.04);last=now;
    if(!document.hidden) {
      if(!state.paused)state.time+=dt;uniforms.uTime.value=state.time;
      if(!state.paused)animateReleases(dt);
      if(!state.making&&flight){
        flight.age+=dt;const t=clamp(flight.age/4,0,1),ease=t*t*(3-2*t),before=camera.position.clone();
        camera.position.lerpVectors(flight.start,flight.target,ease);state.yaw=flight.yaw*(1-ease);state.pitch=flight.pitch*(1-ease);
        state.travel+=before.distanceTo(camera.position);updateCamera();regionsAround();syncTraces();
        if(t===1)flight=null;
      }else if(!state.making) {
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
      animateGhosts(now);
      renderWorld(renderer,scene,preview,camera);
      if(++displayCounter%8===0){state.environment=environmentAt(camera.position.toArray()).primary;onFrame({yaw:state.yaw,position:camera.position,travel:state.travel,environment:state.environment});}
    }
    requestAnimationFrame(frame);
  }
  addEventListener('resize',resize);addEventListener('blur',stopKeys);document.addEventListener('visibilitychange',stopKeys);
  reduced.addEventListener('change',e=>{if(e.matches){state.paused=true;state.speed=0;}onMove();});
  resize();updateCamera();regionsAround();requestAnimationFrame(frame);
  return {state,camera,renderer,look,dolly,goHome,goTo,visitEnvironment,beginDrawing,showDraft,drawingPoint,finishDrawing,ripple,setItems,setKey,stopKeys,unfold,ghost,dismissGhost,
    captureCanvas(){withoutGhosts(()=>renderWorld(renderer,scene,preview,camera));return canvas;},
    createLoopCapture,
    turnAround(){flight=null;state.yaw+=Math.PI;updateCamera();},get stats(){return {regions:regions.size,traces:traces.size,geometries:renderer.info.memory.geometries};}};
}
