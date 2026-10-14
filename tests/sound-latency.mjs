import {chromium} from 'playwright';
import {spawn} from 'node:child_process';
import {mkdtemp,rm,writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {resolve} from 'node:path';

const root=resolve(import.meta.dirname,'..'),out=resolve(process.argv[2]),tmp=await mkdtemp(tmpdir()+'/slopp-latency-');
const port=String(8800+Math.floor(Math.random()*150)),base='http://127.0.0.1:'+port;
const server=spawn('bun',['tests/serve.js'],{cwd:root,env:{...process.env,TEST_DATABASE:tmp+'/t.sqlite',TEST_PORT:port},stdio:'inherit'});
let browser;
try{
  for(let i=0;i<80;i++){try{if((await fetch(base+'/sound-assets/kit-b3/manifest.json')).ok)break;}catch{}await new Promise(r=>setTimeout(r,100));}
  browser=await chromium.launch({headless:true,args:['--mute-audio']});
  const page=await browser.newPage();await page.goto(base+'/favicon.svg');
  const result=await page.evaluate(async()=>{
    const {createMusician}=await import('/sound/musician.js'),{loadKit,createInstrument}=await import('/sound/instrument.js'),{KITS}=await import('/sound/score.js');
    const {makeSurprise}=await import('/environments.js');
    const seeded=s=>()=>(s=(s*16807)%2147483647)/2147483647;
    const RATE=48000,LEAD=.1,env=id=>({primary:id,neighbour:id,blend:0});
    function envelope(buf){const L=buf.getChannelData(0),R=buf.getChannelData(1),n=Math.round(RATE*.005),out=[];for(let i=0;i+n<=L.length;i+=n){let s=0;for(let k=i;k<i+n;k++)s+=L[k]*L[k]+R[k]*R[k];out.push(10*Math.log10(s/(2*n)+1e-20));}return out;}
    async function render(kit,events,seconds=3){
      const ctx=new OfflineAudioContext(2,Math.round(seconds*RATE),RATE);
      const view={...kit,pick:(...a)=>kit.pick(...a)};
      const inst=createInstrument(ctx,{lookahead:Infinity});inst.setKit(view);inst.setVolume(.7,0,.001);
      for(const e of events)inst.play(e);
      return envelope(await ctx.startRendering());
    }
    const firstAbove=(e,th,from)=>{for(let i=from;i<e.length;i++)if(e[i]>=th)return (i-from)*5;return null;};
    function gestures(id){
      const out={},m=()=>createMusician({seed:3});
      let a=m();a.tick({t:0,environment:env(id)});out.fine={t0:5,ev:a.strokeStart({t:5,x:.5,y:.5,kind:'fine',environment:env(id)})};
      a=m();a.tick({t:0,environment:env(id)});out.broad={t0:5,ev:a.strokeStart({t:5,x:.5,y:.5,kind:'broad',environment:env(id)})};
      a=m();a.tick({t:0,environment:env(id)});for(let t=5;t<7&&!out.turn;t+=1/30){const ev=a.look({t,dx:24,dy:0});if(ev.length)out.turn={t0:t,ev};}
      a=m();a.tick({t:0,environment:env(id)});out.breath={t0:5,ev:a.pinch({t:5,delta:2})};
      a=m();a.tick({t:0,environment:env(id)});const d=makeSurprise(42,id,null);out.surprise={t0:5,ev:a.surprise({t:5,family:d.family,seed:42,strokes:d.strokes,environment:env(id)})};
      return out;
    }
    const rows=[];
    for(const mode of ['b']){
      for(const id of ['flow','fold','soft','print','echo','hush']){
        const ctxKit=await loadKit(new OfflineAudioContext(2,RATE,RATE),KITS[mode]);await ctxKit.ensure(id);
        Math.random=seeded(11);
        const g=gestures(id),refEnv=await render(ctxKit,[{...g.fine.ev[0],t:LEAD}]),from=Math.round(LEAD/.005),refPeak=Math.max(...refEnv);
        for(const [kind,gesture] of Object.entries(g)){
          if(!gesture?.ev.length){rows.push({mode,palette:id,kind,missing:true});continue;}
          const shifted=gesture.ev.map(e=>({...e,t:LEAD+(e.t-gesture.t0)}));
          Math.random=seeded(11);
          const env1=await render(ctxKit,shifted.filter(e=>e.t<LEAD+2)),peak=Math.max(...env1);
          rows.push({mode,palette:id,kind,voices:gesture.ev.map(e=>e.role+':'+e.unit).join(','),ack_ms:firstAbove(env1,refPeak-24,from),half_ms:firstAbove(env1,peak-6,from),peak_vs_fine_db:+(peak-refPeak).toFixed(1)});
        }
      }
    }
    const masking=[];
    for(const mode of ['b']){
      const kit=await loadKit(new OfflineAudioContext(2,RATE,RATE),KITS[mode]);await kit.ensure('flow');
      const m=createMusician({seed:1}),evs=[],rnd=seeded(5);
      for(let step=0;step<=12*30;step++){const t=step/30,k=Math.round(t*4);
        if(Math.abs(t-k/4)<1e-6&&t>=1&&t<11){const kind=k%3?'fine':'broad',x=rnd(),y=rnd();const ev=m.strokeStart({t,x,y,kind,environment:env('flow')});for(let j=1;j<=12;j++)ev.push(...m.strokeMove({t:t+j*.03,x:x+.3*j/12,y:y-.1*Math.sin(j/3),pressure:.6}));m.strokeEnd({t:t+.4});evs.push(...ev.map(e=>({...e,stroke:k,kind})));}
        evs.push(...m.tick({t,environment:env('flow')}));}
      const broads=evs.filter(e=>e.role==='touch'&&e.kind==='broad'&&e.t>4).slice(0,4);
      for(const b of broads){
        Math.random=seeded(9);const all=await render(kit,evs,12);
        Math.random=seeded(9);const without=await render(kit,evs.filter(e=>e!==b),12);
        Math.random=seeded(9);const alone=await render(kit,[b],12);
        const i0=Math.round(b.t/.005),win=[i0,i0+12];
        const avg=(e,[a,z])=>10*Math.log10(e.slice(a,z).reduce((s,v)=>s+10**(v/10),0)/(z-a));
        masking.push({mode,t:+b.t.toFixed(2),file:kit.pick(b.palette,b.unit,b.note,seeded(9),b.colourOk)?.unit.file,first60ms_alone_db:+avg(alone,win).toFixed(1),first60ms_rest_of_mix_db:+avg(without,win).toFixed(1),first60ms_with_db:+avg(all,win).toFixed(1),ack_ms_alone:firstAbove(alone,Math.max(...alone)-24,i0)});
      }
    }
    const reverb=[];
    for(const mode of ['b']){
      const kit=await loadKit(new OfflineAudioContext(2,RATE,RATE),KITS[mode]);await kit.ensure('flow');
      const e=createMusician({seed:3}).strokeStart({t:5,x:.5,y:.5,kind:'fine',environment:env('flow')})[0];
      const tail={};
      for(const [label,attenuation,voiceGain] of [['calm',0,0],['dense',-9,-9],['dense_voice_only',-9,-9]]){
        const ctx=new OfflineAudioContext(2,6*RATE,RATE),inst=createInstrument(ctx,{lookahead:Infinity});inst.setKit(kit);inst.setVolume(.7,0,.001);
        if(label!=='dense_voice_only')inst.mix({attenuation});
        Math.random=seeded(4);inst.play({...e,t:1,gain:e.gain+voiceGain});
        const env1=envelope(await ctx.startRendering()),a=Math.round(3.5/.005),z=Math.round(5.5/.005);
        tail[label]=10*Math.log10(env1.slice(a,z).reduce((s,v)=>s+10**(v/10),0)/(z-a));
      }
      reverb.push({mode,tail_calm_db:+tail.calm.toFixed(1),tail_dense_db:+tail.dense.toFixed(1),extra_wet_duck_db:+(tail.dense_voice_only-tail.dense).toFixed(1)});
    }
    const {paletteNotes,scale,CORE,isColour}=await import('/sound/palettes.js'),moves=[];
    for(const mode of ['b']){
      const kit=await loadKit(new OfflineAudioContext(2,RATE,RATE),KITS[mode]);
      for(const id of ['flow','fold','soft','print','echo','hush']){
        await kit.ensure(id);
        const ref=Math.max(...await render(kit,[{palette:id,unit:'fine',note:paletteNotes(id).fine[0],gain:-10,attack:.008,release:2,dur:1,t:LEAD,colourOk:false}]));
        for(const unit of ['fine','broad','held','rest'])for(const note of paletteNotes(id)[unit])for(const colourOk of [false,true]){
          if(!colourOk&&isColour(id,note))continue;
          const c=kit.pick(id,unit,note,seeded(2),colourOk);
          if(!c?.retuned)continue;
          const e={palette:id,unit,note,gain:-14,attack:.06,release:2,dur:2,t:LEAD,colourOk};
          const pick=kit.pick;const fixed={...kit,pick:(...a)=>pick(...a.slice(0,3),seeded(2),a[4])};
          const env1=await render(fixed,[e]);
          moves.push({mode,palette:id,unit,note,colourOk,file:c.unit.file,source:c.unit.source??c.unit.preset,retuned:c.retuned,pcs:c.pcs,in_scale:c.pcs.every(p=>(colourOk?scale(id):CORE).includes(p)),holds_note:c.pcs.includes(note%12),peak_vs_fine_db:+(Math.max(...env1)-ref).toFixed(1)});
        }
      }
    }
    return {rows,masking,reverb,moves};
  });
  await writeFile(out,JSON.stringify(result,null,1));
  for(const r of result.rows)console.log([r.mode,r.palette,r.kind,r.voices,'ack',r.ack_ms,'half',r.half_ms,'peak',r.peak_vs_fine_db].join(' '));
  for(const m of result.masking)console.log('mask',JSON.stringify(m));
  for(const r of result.reverb)console.log('reverb',JSON.stringify(r));
  for(const m of result.moves)console.log('move',JSON.stringify(m));
  const bad=result.rows.filter(r=>r.missing||r.ack_ms===null||r.ack_ms>(r.kind==='broad'?70:60));
  if(result.reverb.some(r=>r.extra_wet_duck_db<4||r.tail_calm_db-r.tail_dense_db<12))bad.push({reverb:result.reverb});
  if(result.moves.some(m=>!m.in_scale||!m.holds_note||m.peak_vs_fine_db<-30))bad.push({moves:result.moves.filter(m=>!m.in_scale||!m.holds_note||m.peak_vs_fine_db<-30)});
  console.log('rows',result.rows.length,'slow or silent',bad.length);
  if(bad.length){console.log('FAIL',JSON.stringify(bad));process.exitCode=1;}
}finally{await browser?.close();server.kill('SIGTERM');await Promise.race([new Promise(r=>server.once('close',r)),new Promise(r=>setTimeout(r,3000))]);await rm(tmp,{recursive:true,force:true});}

