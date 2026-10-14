import {chromium} from 'playwright';
import assert from 'node:assert/strict';

const browser=await chromium.launch({headless:true,args:['--mute-audio']});
try{
  const page=await browser.newPage();
  await page.goto('http://127.0.0.1:8784/favicon.svg');
  const result=await page.evaluate(async()=>{
    const {createInstrument}=await import('/sound/instrument.js');
    const rate=48000;
    async function render(version){
      const ctx=new OfflineAudioContext(2,rate*4,rate),buffer=ctx.createBuffer(1,rate*.2,rate);
      const data=buffer.getChannelData(0);
      for(let i=0;i<data.length;i++)data[i]=.2*(Math.sin(2*Math.PI*500*i/rate)+Math.sin(2*Math.PI*8000*i/rate));
      const kit={manifest:{version},buffers:new Map([['test',buffer]]),pick:()=>({unit:{file:'test',norm_db:0},rate:1,pcs:[]})};
      const inst=createInstrument(ctx);inst.setKit(kit);inst.setVolume(.7,0,.001);
      inst.play({t:.02,palette:'flow',unit:'fine',gain:-12,attack:.01,release:.1,dur:.2,send:.6,role:'touch'});
      inst.mix({});
      return (await ctx.startRendering()).getChannelData(0);
    }
    const a=await render('A'),b=await render('B3');
    const energy=(data,start,end)=>{let sum=0;for(let i=Math.round(start*rate);i<end*rate;i++)sum+=data[i]**2;return Math.sqrt(sum/((end-start)*rate));};
    const amplitude=(data,hz)=>{let re=0,im=0;for(let i=rate*.06;i<rate*.14;i++){re+=data[i]*Math.cos(2*Math.PI*hz*i/rate);im+=data[i]*Math.sin(2*Math.PI*hz*i/rate);}return Math.hypot(re,im);};
    const db=x=>20*Math.log10(x);
    const onset=data=>data.findIndex(x=>Math.abs(x)>1e-6)/rate*1000;
    return {attackDb:db(energy(b,.02,.03)/energy(a,.02,.03)),brightnessDb:db((amplitude(b,8000)/amplitude(b,500))/(amplitude(a,8000)/amplitude(a,500))),tailDb:db(energy(b,.5,2.5)/energy(a,.5,2.5)),onsetShiftMs:onset(b)-onset(a),peak:b.reduce((peak,x)=>Math.max(peak,Math.abs(x)),0)};
  });
  console.log(JSON.stringify(result,null,2));
  assert.ok(result.attackDb< -2,'stems should have a gentler initial attack');
  assert.ok(result.brightnessDb< -1.5,'stems should have less high-frequency edge');
  assert.ok(result.tailDb>1,'stems should have a more audible reverb tail');
  assert.ok(Math.abs(result.onsetShiftMs)<2,'softening must preserve immediate onset');
  assert.ok(result.peak<.8,'mix must retain headroom');
}finally{await browser.close();}
