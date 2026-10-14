import {chromium} from 'playwright';
import assert from 'node:assert/strict';
import {mkdir,writeFile} from 'node:fs/promises';
import {resolve} from 'node:path';

const base=process.argv[2],shots=resolve(process.argv[3]??'.evidence/sound-deployment');
if(!base)throw new Error('Provide the site URL to verify. This check never publishes drawings.');
await mkdir(shots,{recursive:true});
const browser=await chromium.launch({headless:true,args:['--mute-audio']});
try{
  const context=await browser.newContext({viewport:{width:960,height:740},reducedMotion:'reduce'});
  await context.addInitScript(()=>{
    const connect=AudioNode.prototype.connect;
    AudioNode.prototype.connect=function(destination,...args){
      const result=connect.call(this,destination,...args);
      if(destination instanceof AudioDestinationNode){window.audioTap=this.context.createAnalyser();connect.call(this,window.audioTap);}
      return result;
    };
    window.audioRms=()=>{if(!window.audioTap)return 0;const data=new Float32Array(audioTap.fftSize);audioTap.getFloatTimeDomainData(data);return Math.sqrt(data.reduce((sum,v)=>sum+v*v,0)/data.length);};
  });
  const page=await context.newPage(),errors=[],failed=[];
  page.on('pageerror',e=>errors.push(e.message));
  page.on('response',r=>{if(r.url().includes('/sound-assets/')&&!r.ok())failed.push(r.status()+' '+r.url());});
  await page.route('**/api/marks',route=>{throw new Error('This release check must never publish a drawing.');});
  await page.goto(base);await page.waitForFunction(()=>window.manuscript?.ready);
  await page.locator('#sound').waitFor({state:'visible'});
  assert.equal(await page.evaluate(()=>manuscript.sound.context),null,'sound starts only after a tap');
  await page.click('#sound');
  await page.waitForFunction(()=>manuscript.sound.context?.state==='running'&&!manuscript.sound.state.loading&&!manuscript.sound.state.error,null,{timeout:120000});
  const decoded=await page.evaluate(async()=>{
    const {loadKit}=await import('/sound/instrument.js');
    const kit=await loadKit(manuscript.sound.context,'/sound-assets/kit-b3/');
    for(const palette of ['flow','fold','soft','print','echo','hush'])await kit.ensure(palette);
    return {count:kit.buffers.size,units:kit.manifest.units.length,formats:[...new Set([...kit.buffers.keys()].map(f=>f.split('.').at(-1)))]};
  });
  assert.equal(decoded.count,decoded.units);assert.deepEqual(decoded.formats,['flac']);
  await page.click('#make');await page.mouse.move(350,350);await page.mouse.down();await page.mouse.move(650,380,{steps:12});
  await page.waitForFunction(()=>audioRms()>1e-5,null,{timeout:5000});
  await page.mouse.up();
  assert((await page.evaluate(()=>manuscript.sound.recent)).some(e=>e.role==='touch'&&e.file.endsWith('.flac')));
  await page.screenshot({path:shots+'/desktop.png'});
  await page.click('#sound');await page.waitForFunction(()=>audioRms()<1e-6);
  assert.equal(await page.locator('#sound').getAttribute('aria-label'),'Unmute sound');
  await page.setViewportSize({width:390,height:844});
  await page.screenshot({path:shots+'/phone.png'});
  assert(await page.locator('#sound').isVisible());assert.deepEqual(failed,[]);assert.deepEqual(errors,[]);
  await writeFile(shots+'/results.json',JSON.stringify({base,decoded,checks:['opt-in playback','all six FLAC palettes decode','drawing produces audio','mute','desktop and phone controls'],failed,errors},null,2));
  console.log('PASS: '+base+' loads all '+decoded.count+' lossless samples; drawing produces audio; mute works; no browser or asset errors.');
}finally{await browser.close();}
