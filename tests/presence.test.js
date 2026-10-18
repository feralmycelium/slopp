import {expect,test} from 'bun:test';
import * as THREE from 'three';
import {createPresenceProbe} from '../src/presence.js';

test('visible ink counts, but behind-camera, offscreen, invisible and fogged art does not',()=>{
  const camera=new THREE.PerspectiveCamera(57,1,.08,185);camera.updateMatrixWorld();
  const mesh=new THREE.Mesh(new THREE.PlaneGeometry(12,12,4,4),new THREE.MeshBasicMaterial());
  const probe=createPresenceProbe(),fog={near:58,far:160};
  mesh.position.z=-80;
  expect(probe([mesh],camera,fog).occupied).toBe(true);
  for(const [x,z,opacity] of [[0,80,1],[200,-80,1],[0,-170,1],[0,-80,0]]){
    mesh.position.set(x,0,z);mesh.material.opacity=opacity;
    expect(probe([mesh],camera,fog).occupied).toBe(false);
  }
});

test('large nearby art contributes more presence than a small distant shape',()=>{
  const camera=new THREE.PerspectiveCamera(57,1,.08,185);camera.updateMatrixWorld();
  const mesh=new THREE.Mesh(new THREE.PlaneGeometry(12,12,4,4),new THREE.MeshBasicMaterial());
  const probe=createPresenceProbe(),fog={near:58,far:160};
  mesh.position.z=-40;const near=probe([mesh],camera,fog).presence;
  mesh.position.z=-110;const far=probe([mesh],camera,fog).presence;
  expect(near).toBeGreaterThan(far);expect(far).toBeGreaterThan(0);
  mesh.material.opacity=0;expect(probe([mesh],camera,fog).presence).toBe(0);
});

test('a filled form covering the viewport counts even when every vertex is offscreen',()=>{
  const camera=new THREE.PerspectiveCamera(57,1,.08,185);
  const shape=new THREE.Shape();shape.moveTo(-50,-50);shape.lineTo(50,-50);shape.lineTo(50,50);shape.lineTo(-50,50);shape.closePath();
  const mesh=new THREE.Mesh(new THREE.ShapeGeometry(shape),new THREE.MeshBasicMaterial({side:THREE.DoubleSide}));mesh.position.z=-20;
  const result=createPresenceProbe()([mesh],camera,{near:58,far:160});
  expect(result.occupied).toBe(true);expect(result.presence).toBeGreaterThan(0);expect(result.visibleGroups.has(mesh)).toBe(true);
});
