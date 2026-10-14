import {chromium} from 'playwright';
import {spawn} from 'node:child_process';
import {mkdtemp,mkdir,rm,writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {resolve} from 'node:path';

const root=resolve(import.meta.dirname,'..'),out=resolve(process.argv[2]),only=process.argv.slice(3),tmp=await mkdtemp(tmpdir()+'/slopp-clips-');
const port=String(8800+Math.floor(Math.random()*150)),base='http://127.0.0.1:'+port;
const server=spawn('bun',['tests/serve.js'],{cwd:root,env:{...process.env,TEST_DATABASE:tmp+'/t.sqlite',TEST_PORT:port},stdio:'inherit'});
let browser;
try{
  for(let i=0;i<80;i++){try{if((await fetch(base+'/sound-assets/kit-b3/manifest.json')).ok)break;}catch{}await new Promise(r=>setTimeout(r,100));}
  await mkdir(out,{recursive:true});
  browser=await chromium.launch({headless:true,args:['--mute-audio']});
  const {CLIPS}=await import(root+'/public/sound/offline-score.js').catch(()=>({CLIPS:null}));
  const names=only.length?only:['rest','strokes','broad','surprise','approach','crossing','frantic','pinch','look'];
  for(const name of names)for(const mode of ['b']){
    const page=await browser.newPage();const errs=[];page.on('pageerror',e=>errs.push(e.message));
    await page.goto(base+'/favicon.svg');
    const res=await page.evaluate(async({name,mode})=>{
      const m=await import('/sound/offline-score.js'),w=await import('/sound/offline.js');
      const {buffer,log}=await m.renderClip(name,{mode});const bytes=w.wav16(buffer);
      let s='';for(let i=0;i<bytes.length;i+=32768)s+=String.fromCharCode(...bytes.subarray(i,i+32768));return {b64:btoa(s),log};
    },{name,mode});
    await writeFile(out+'/'+name+'-'+mode+'.wav',Buffer.from(res.b64,'base64'));
    await writeFile(out+'/'+name+'-'+mode+'.events.json',JSON.stringify(res.log,null,1));
    await page.close();if(errs.length)throw new Error(errs.join('; '));
    console.log(name,mode,res.log.length,'events');
  }
}finally{await browser?.close();server.kill('SIGTERM');await Promise.race([new Promise(r=>server.once('close',r)),new Promise(r=>setTimeout(r,3000))]);await rm(tmp,{recursive:true,force:true});}

