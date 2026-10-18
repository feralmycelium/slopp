import {chromium} from 'playwright';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {mkdtemp,mkdir,rm,writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {resolve} from 'node:path';

const root=resolve(import.meta.dirname,'..'),tmp=await mkdtemp(tmpdir()+'/slopp-passive-sound-');
const out=root+'/.evidence/passive',port=String(9900+Math.floor(Math.random()*80)),base='http://127.0.0.1:'+port;
const server=spawn('bun',['tests/serve.js'],{cwd:root,env:{...process.env,TEST_DATABASE:tmp+'/sound.sqlite',TEST_PORT:port},stdio:'inherit'});
let browser;
try{
  for(let i=0;i<80;i++){try{if((await fetch(base+'/sound-assets/kit-b3/manifest.json')).ok)break;}catch{}await new Promise(r=>setTimeout(r,100));}
  await mkdir(out,{recursive:true});browser=await chromium.launch({headless:true,args:['--mute-audio']});
  const page=await browser.newPage();await page.goto(base+'/favicon.svg');
  const results=[];
  for(const [palette,presence] of [['flow',1],...['flow','fold','soft','print','echo','hush'].map(p=>[p,0])]){
    const result=await page.evaluate(async({palette,presence})=>{
      const {createMusician}=await import('/sound/musician.js'),{loadKit,createInstrument}=await import('/sound/instrument.js');
      const rate=24000,seconds=90,ctx=new OfflineAudioContext(2,rate*seconds,rate),kit=await loadKit(ctx,'/sound-assets/kit-b3/');
      await kit.ensure(palette);
      const now={t:0},inst=createInstrument(ctx,{clock:()=>now.t}),m=createMusician({seed:9});
      inst.setKit(kit);inst.setVolume(.7,0,.001);m.presence(presence);
      const originalRandom=Math.random;let seed=9;Math.random=()=>((seed=Math.imul(seed,1664525)+1013904223>>>0)/4294967296);
      let played=0;
      try{for(let step=0;step<seconds*30;step++){
        const t=step/30;now.t=t;
        const events=m.tick({t,environment:{primary:palette,neighbour:palette,blend:0}});inst.mix(m.mix(t));
        for(const event of events)if(inst.play(event)?.unit)played++;
      }}finally{Math.random=originalRandom;}
      const buffer=await ctx.startRendering(),a=buffer.getChannelData(0),b=buffer.getChannelData(1);
      let energy=0,peak=0,jump=0,quietRun=0,longestQuiet=0,minBin=Infinity;
      for(let start=rate*5;start<a.length;start+=rate/10){
        let bin=0;
        for(let i=start;i<Math.min(start+rate/10,a.length);i++){
          const square=(a[i]**2+b[i]**2)/2;energy+=square;bin+=square;
          peak=Math.max(peak,Math.abs(a[i]),Math.abs(b[i]));jump=Math.max(jump,Math.abs(a[i]-a[i-1]),Math.abs(b[i]-b[i-1]));
        }
        const rms=Math.sqrt(bin/(rate/10));minBin=Math.min(minBin,rms);
        quietRun=rms<1e-5?quietRun+.1:0;longestQuiet=Math.max(longestQuiet,quietRun);
      }
      let wav;
      if(palette==='flow'&&presence===0){
        const {wav16}=await import('/sound/offline.js'),bytes=wav16(buffer);let s='';
        for(let i=0;i<bytes.length;i+=32768)s+=String.fromCharCode(...bytes.subarray(i,i+32768));wav=btoa(s);
      }
      return {palette,presence,played,rms:Math.sqrt(energy/(a.length-rate*5)),peak,jump,minBin,longestQuiet,wav};
    },{palette,presence});
    if(result.wav){await writeFile(out+'/quiet-continuity.wav',Buffer.from(result.wav,'base64'));delete result.wav;}
    results.push(result);console.log(JSON.stringify(result));
    assert(result.played>=8,'the quiet layer keeps scheduling throughout 90 seconds');
    assert(result.peak<.99,'rendered music does not clip');
    assert(result.longestQuiet<.5,'rendered music has no silent gaps after its initial fade-in');
  }
  assert(results[1].rms<results[0].rms*.85,'an empty view is audibly quieter with the same notes and recordings');
  await writeFile(out+'/sound-results.json',JSON.stringify(results,null,2));
}finally{await browser?.close();server.kill('SIGTERM');if(server.exitCode===null)await new Promise(r=>server.once('close',r));await rm(tmp,{recursive:true,force:true});}
