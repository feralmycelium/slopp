import {readFile} from 'node:fs/promises';
import {ENVIRONMENTS,makeSurprise} from '../public/environments.js';

export async function artFixture(){
  try{return JSON.parse(await readFile(process.env.WORLD_FIXTURE||new URL('../.evidence/ux/live-world.json',import.meta.url),'utf8')).items;}
  catch(error){if(error.code!=='ENOENT'||process.env.WORLD_FIXTURE)throw error;}
  return Array.from({length:36},(_,i)=>{
    const env=ENVIRONMENTS[i%ENVIRONMENTS.length];
    return {id:'00000000-0000-4000-8000-'+String(i+1).padStart(12,'0'),x:0,y:0,space:{position:[0,0,0],rotation:[0,0,0,1],environment:env.id},strokes:makeSurprise(i*301+1,env).strokes};
  });
}
