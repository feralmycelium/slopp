import {expect,test} from 'bun:test';
import {mkdtemp,rm,readFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {createCurationHandler} from '../scripts/curation-server.mjs';

test('owner corrections persist, reset to automatic and reject unrelated writes',async()=>{
  const dir=await mkdtemp(tmpdir()+'/slopp-curation-'),file=dir+'/curation.json';
  const handle=createCurationHandler({file,worldUrl:'http://127.0.0.1:9742',items:async()=>[{id:'known',strokes:[]}]});
  const write=(body,origin='http://127.0.0.1:9743')=>handle(new Request('http://127.0.0.1:9743/api/curation',{method:'POST',headers:{origin,'content-type':'application/json'},body:JSON.stringify(body)}));
  try{
    expect((await write({id:'known',choice:'feature'})).status).toBe(200);
    expect(JSON.parse(await readFile(file,'utf8'))).toEqual({known:'feature'});
    expect((await write({id:'unknown',choice:'feature'})).status).toBe(400);
    expect((await write({id:'known',choice:'less'},'https://example.com')).status).toBe(403);
    expect((await write({id:'known',choice:'automatic'})).status).toBe(200);
    expect(JSON.parse(await readFile(file,'utf8'))).toEqual({});
    expect((await handle(new Request('http://127.0.0.1:9743/api/curation'))).status).toBe(200);
  }finally{await rm(dir,{recursive:true,force:true});}
});
