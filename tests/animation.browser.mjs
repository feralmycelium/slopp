import {chromium} from 'playwright';
import assert from 'node:assert/strict';
import {stat} from 'node:fs/promises';

const browser=await chromium.launch({headless:true});
try{
  const page=await browser.newPage({viewport:{width:1280,height:800},acceptDownloads:true});
  const errors=[];page.on('pageerror',error=>errors.push(error.message));
  await page.goto(process.env.PREVIEW_URL||'http://127.0.0.1:8784');
  await page.waitForFunction(()=>window.manuscript?.ready);
  assert.equal(await page.getByRole('button',{name:'Download animation',exact:true}).count(),1);
  const started=Date.now();
  const [download]=await Promise.all([
    page.waitForEvent('download',{timeout:60000}),
    page.getByRole('button',{name:'Download animation',exact:true}).click()
  ]);
  assert.ok(Date.now()-started>=7800,'Capture lasts eight seconds');
  assert.match(download.suggestedFilename(),/^slopp-.*\.(mp4|webm)$/);
  const path='/tmp/slopp-animation.'+download.suggestedFilename().split('.').at(-1);
  await download.saveAs(path);
  assert.ok((await stat(path)).size>10000,'A real video was saved');
  await page.mouse.move(400,300);
  await page.getByRole('button',{name:'Download animation',exact:true}).waitFor();
  let extraDownloads=0;page.on('download',()=>extraDownloads++);
  await page.getByRole('button',{name:'Download animation',exact:true}).click();
  await page.getByRole('button',{name:'Cancel animation'}).click();
  await page.getByRole('button',{name:'Download animation',exact:true}).waitFor();
  assert.equal(extraDownloads,0,'Cancelling does not save a partial clip');
  await page.setViewportSize({width:390,height:844});
  await page.mouse.move(200,300);
  await page.screenshot({path:'/tmp/slopp-animation-mobile.png'});
  assert.equal(await page.getByRole('button',{name:'Download still',exact:true}).count(),1);
  assert.deepEqual(errors,[]);
  console.log(JSON.stringify({path,cancelled:true,mobileControls:true,pageErrors:errors}));
}finally{await browser.close();}
