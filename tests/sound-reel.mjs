import {chromium} from 'playwright';
import {spawn,execFileSync} from 'node:child_process';
import {mkdtemp,mkdir,rm,writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {resolve} from 'node:path';

const root=resolve(import.meta.dirname,'..'),out=resolve(process.argv[2]??root+'/.sound-assets/review'),tmp=await mkdtemp(tmpdir()+'/slopp-reel-');
const port=String(8800+Math.floor(Math.random()*150)),base='http://127.0.0.1:'+port;
const server=spawn('bun',['tests/serve.js'],{cwd:root,env:{...process.env,TEST_DATABASE:tmp+'/t.sqlite',TEST_PORT:port},stdio:'inherit'});
const IDS=['flow','fold','soft','print','echo','hush'],jobs=[...IDS.map(id=>({id,mode:'b'})),{id:'crossing',mode:'b'}];
let browser;
try{
  for(let i=0;i<80;i++){try{if((await fetch(base+'/sound-assets/kit-b3/manifest.json')).ok)break;}catch{}await new Promise(r=>setTimeout(r,100));}
  await mkdir(out,{recursive:true});
  browser=await chromium.launch({headless:true,args:['--mute-audio']});
  const summary=[];
  for(const {id,mode} of jobs){
    const page=await browser.newPage();const errs=[];page.on('pageerror',e=>errs.push(e.message));
    await page.goto(base+'/favicon.svg');
    const res=await page.evaluate(async({id,mode})=>{
      const m=await import('/sound/offline-score.js'),w=await import('/sound/offline.js');
      const {buffer,log,plan}=await m.renderAudition(id==='crossing'?'flow':id,{mode,crossing:id==='crossing'});const bytes=w.wav16(buffer);
      let s='';for(let i=0;i<bytes.length;i+=32768)s+=String.fromCharCode(...bytes.subarray(i,i+32768));return {b64:btoa(s),log,plan};
    },{id,mode});
    await page.close();if(errs.length)throw new Error(errs.join('; '));
    const name=id+'-'+mode;
    await writeFile(out+'/'+name+'.wav',Buffer.from(res.b64,'base64'));
    execFileSync('ffmpeg',['-v','error','-y','-i',out+'/'+name+'.wav','-c:a','libmp3lame','-b:a','320k',out+'/'+name+'.mp3']);
    await writeFile(out+'/'+name+'.events.json',JSON.stringify(res,(k,v)=>k==='b64'?undefined:v,1));
    const sources=[...new Set(res.log.filter(e=>e.source).map(e=>e.unit+': '+e.source))].sort();
    summary.push({id,mode,events:res.log.length,sources,plan:res.plan});
    console.log(name,res.log.length,'events',sources.join(' | '));
  }
  await writeFile(out+'/summary.json',JSON.stringify(summary,null,1));
}finally{await browser?.close();server.kill('SIGTERM');await Promise.race([new Promise(r=>server.once('close',r)),new Promise(r=>setTimeout(r,3000))]);await rm(tmp,{recursive:true,force:true});}

