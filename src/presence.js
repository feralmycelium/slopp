import * as THREE from 'three';

export function createPresenceProbe(){
  const frustum=new THREE.Frustum(),matrix=new THREE.Matrix4(),sphere=new THREE.Sphere(),point=new THREE.Vector3();
  const samples=new WeakMap();
  const rays=[0,-.55,.55].flatMap(x=>[0,-.55,.55].map(y=>({point:new THREE.Vector2(x,y),ray:new THREE.Raycaster()})));
  return (groups,camera,fog)=>{
    camera.updateMatrixWorld();frustum.setFromProjectionMatrix(matrix.multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse));
    for(const {point,ray}of rays){ray.setFromCamera(point,camera);ray.near=camera.near;ray.far=Math.min(camera.far,fog.far);}
    let occupied=false,presence=0;const visibleGroups=new Set();
    for(const group of groups){
      if(!group.visible)continue;group.updateWorldMatrix(true,true);
      group.traverse(child=>{
        const geometry=child.geometry,opacity=child.material?.opacity??0;
        if(!child.visible||!geometry||opacity<.08)return;
        if(!geometry.boundingSphere)geometry.computeBoundingSphere();sphere.copy(geometry.boundingSphere).applyMatrix4(child.matrixWorld);
        const distance=sphere.center.distanceTo(camera.position),fogWeight=1-THREE.MathUtils.smoothstep(distance,fog.near,fog.far);
        if(opacity*fogWeight<.08||!frustum.intersectsSphere(sphere)||sphere.radius/Math.max(1,distance)<.003)return;
        if(!samples.has(geometry)){
          const positions=geometry.attributes.position,points=[];
          for(let i=0,step=Math.max(1,Math.floor(positions.count/48));i<positions.count;i+=step)points.push(new THREE.Vector3().fromBufferAttribute(positions,i));
          samples.set(geometry,points);
        }
        let seen=false,central=false;
        for(const sample of samples.get(geometry)){
          point.copy(sample).applyMatrix4(child.matrixWorld).project(camera);
          if(point.z< -1||point.z>1||Math.abs(point.x)>.95||Math.abs(point.y)>.95)continue;
          seen=true;if(Math.abs(point.x)<.65&&Math.abs(point.y)<.65)central=true;
        }
        // Filled polygons can surround the view with every boundary vertex offscreen.
        if(!central&&geometry.type==='ShapeGeometry')for(const {ray}of rays){
          const hit=ray.intersectObject(child,false)[0];
          if(hit&&opacity*(1-THREE.MathUtils.smoothstep(hit.distance,fog.near,fog.far))>=.08){seen=true;central=true;break;}
        }
        occupied||=central;
        if(seen){visibleGroups.add(group);presence+=Math.min(.3,(sphere.radius/Math.max(1,distance))**2*6)*opacity*fogWeight;}
      });
    }
    return {occupied,presence:Math.min(1,presence),visibleGroups};
  };
}
