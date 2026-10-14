import {chromium} from 'playwright';
import {spawn} from 'node:child_process';
import {mkdtemp,mkdir,rm,writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {resolve} from 'node:path';

const root=resolve(import.meta.dirname,'..'),out=resolve(process.argv[2]??root+'/.evidence/sound-captures');
const only=process.argv.slice(3),tmp=await mkdtemp(tmpdir()+'/slopp-sound-');
const port=String(8800+Math.floor(Math.random()*150));
const server=spawn('bun',['tests/serve.js'],{cwd:root,env:{...process.env,TEST_DATABASE:tmp+'/test.sqlite',TEST_PORT:port},stdio:'inherit'});
const base='http://127.0.0.1:'+port;
let browser;
try{
  for(let i=0;i<50;i++){try{if((await fetch(base+'/sound-assets/haze-loose-ends/manifest.json')).ok)break;}catch{}await new Promise(r=>setTimeout(r,100));}
  await mkdir(out,{recursive:true});
  browser=await chromium.launch({headless:true,args:['--mute-audio']});
  const errors=[];
  const {SCENARIOS}=await import(root+'/public/sound/scenarios.js');
  for(const name of only.length?only:Object.keys(SCENARIOS))for(const mode of ['a','b']){
    const started=Date.now();
    const page=await browser.newPage();page.on('pageerror',e=>errors.push(e.message));
    await page.goto(base+'/favicon.svg');
    const b64=await page.evaluate(async ({name,mode})=>{
      const m=await import('/sound/offline.js');const bytes=m.wav16(await m.renderScenario(name,{mode}));
      let s='';for(let i=0;i<bytes.length;i+=32768)s+=String.fromCharCode(...bytes.subarray(i,i+32768));return btoa(s);
    },{name,mode});
    await writeFile(out+'/'+name+'-'+mode+'.wav',Buffer.from(b64,'base64'));
    await page.close();
    console.log(name,mode,((Date.now()-started)/1000).toFixed(1)+'s');
  }
  if(errors.length)throw new Error(errors.join('\n'));
}finally{
  await browser?.close();server.kill('SIGTERM');
  await Promise.race([new Promise(r=>server.once('close',r)),new Promise(r=>setTimeout(r,3000))]);
  await rm(tmp,{recursive:true,force:true});
}

