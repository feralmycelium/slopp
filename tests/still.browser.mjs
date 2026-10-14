import {chromium} from 'playwright';
import assert from 'node:assert/strict';
const browser=await chromium.launch({headless:true});
try{
  const page=await browser.newPage({viewport:{width:1280,height:800},acceptDownloads:true});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(process.env.PREVIEW_URL||'http://127.0.0.1:8784');
  await page.waitForFunction(()=>window.manuscript?.ready);
  assert.equal(await page.getByRole('button',{name:'Download still',exact:true}).count(),1);
  assert.equal(await page.getByRole('link',{name:'Contact me',exact:true}).getAttribute('href'),'mailto:alex@sloppworld.com');
  const [download]=await Promise.all([page.waitForEvent('download'),page.getByRole('button',{name:'Download still',exact:true}).click()]);
  assert.match(download.suggestedFilename(),/^slopp-.*\.png$/);
  await download.saveAs('/tmp/slopp-still.png');
  await page.screenshot({path:'/tmp/slopp-controls.png'});
  await page.setViewportSize({width:390,height:844});
  await page.mouse.move(200,300);
  await page.screenshot({path:'/tmp/slopp-mobile.png'});
  assert.deepEqual(errors,[]);
  console.log('Contact destination, PNG download, desktop/mobile render and page errors checked.');
}finally{await browser.close();}
