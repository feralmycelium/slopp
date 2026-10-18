import {readFile,writeFile,mkdir,rename} from 'node:fs/promises';
import {dirname,resolve} from 'node:path';

const root=resolve(import.meta.dirname,'..');
export function createCurationHandler({file=root+'/public/curation.json',worldUrl='http://127.0.0.1:9742',items}={}){
  let writing=Promise.resolve();
  const read=async()=>{try{return JSON.parse(await readFile(file,'utf8'));}catch(error){if(error.code==='ENOENT')return {};throw error;}};
  const drawings=items||(async()=>{
    const result=[];let cursor=0,more=true;
    while(more){const response=await fetch(worldUrl+'/api/world?cursor='+cursor);if(!response.ok)throw new Error('Preview unavailable');const data=await response.json();result.push(...data.items);cursor=data.cursor;more=data.hasMore;}
    return result;
  });
  return async request=>{
    const url=new URL(request.url);
    if(!['127.0.0.1','localhost'].includes(url.hostname))return new Response('Local access only',{status:403});
    try{
      if(url.pathname==='/api/curation'&&request.method==='GET')return Response.json({items:await drawings(),overrides:await read()},{headers:{'cache-control':'no-store'}});
      if(url.pathname==='/api/curation'&&request.method==='POST'){
        if(request.headers.get('origin')!==url.origin)return new Response('Local page required',{status:403});
        const body=await request.json();
        if(!['feature','automatic','less'].includes(body.choice)||(typeof body.id!=='string')||!(await drawings()).some(item=>item.id===body.id))return new Response('Unknown drawing or choice',{status:400});
        const update=writing.then(async()=>{
          const overrides=await read();if(body.choice==='automatic')delete overrides[body.id];else overrides[body.id]=body.choice;
          await mkdir(dirname(file),{recursive:true});await writeFile(file+'.tmp',JSON.stringify(overrides,null,2)+'\n');await rename(file+'.tmp',file);
          return overrides;
        });
        writing=update.catch(()=>{});return Response.json({overrides:await update});
      }
      const assets={'/':'scripts/curation.html','/quality.js':'public/quality.js','/environments.js':'public/environments.js'};
      if(request.method==='GET'&&Object.hasOwn(assets,url.pathname))return new Response(Bun.file(root+'/'+assets[url.pathname]));
      return new Response('Not found',{status:404});
    }catch{return new Response('Could not load or save. Check that the local preview is running and try again.',{status:503});}
  };
}

if(import.meta.main){
  const server=Bun.serve({hostname:'127.0.0.1',port:Number(process.env.CURATION_PORT||9743),fetch:createCurationHandler({file:process.env.CURATION_FILE||root+'/public/curation.json',worldUrl:process.env.CURATION_WORLD||'http://127.0.0.1:9742'})});
  console.log('Slopp curation: '+server.url);
}
