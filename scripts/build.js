import {mkdir,cp,copyFile,writeFile,readFile,rm,readdir} from 'node:fs/promises';
import {resolve} from 'node:path';
const root=resolve(import.meta.dir,'..');
const audio=(await readdir(root+'/public',{recursive:true})).filter(name=>/\.(wav|mp3|flac|ogg|oga|opus|m4a|aac|aif|aiff|caf|webm)$/i.test(name));
if(audio.length)throw new Error('Music is all rights reserved and must not ship in public/: '+audio.join(', '));
const client=await Bun.build({entrypoints:[root+'/src/world.js',root+'/src/video-encoder.js'],outdir:root+'/public',target:'browser',format:'esm',minify:true});
if(!client.success)throw new Error(client.logs.join('\n'));
for(const name of ['DESIGN-CONTRACT.md','LICENSE','ART-LICENSE.md','MUSIC-LICENSE.md'])await copyFile(root+'/'+name,root+'/public/'+name);
await rm(root+'/public/source.zip',{force:true});
const source=['src','public','server','db','drizzle','scripts','tests','.github','package.json','package-lock.json','drizzle.config.ts','README.md','ENVIRONMENTS-PLAN.md','PRODUCT.md','DESIGN-CONTRACT.md','CONTRIBUTING.md','AGENTS.md','LICENSE','ART-LICENSE.md','MUSIC-LICENSE.md','.gitignore'];
const zip=Bun.spawnSync(['zip','-q','-r',root+'/public/source.zip',...source,'-x','public/source.zip','*/__pycache__/*','scripts/build-kit-a.py','scripts/slice-kit-a.py'],{cwd:root});
if(zip.exitCode!==0)throw new Error('Could not package the open source download.');
await rm(root+'/dist',{recursive:true,force:true});
await mkdir(root+'/dist/server',{recursive:true});
await mkdir(root+'/dist/.openai',{recursive:true});
const result=await Bun.build({entrypoints:[root+'/server/worker.js'],outdir:root+'/dist/server',naming:'index.js',target:'browser',format:'esm',minify:true});
if(!result.success)throw new Error(result.logs.join('\n'));
await cp(root+'/public',root+'/dist/client',{recursive:true});
const gaId=process.env.GA_MEASUREMENT_ID?.trim();
if(gaId){
  if(!/^G-[A-Z0-9]{4,20}$/.test(gaId))throw new Error('GA_MEASUREMENT_ID must look like G-XXXXXXXXXX.');
  const page=root+'/dist/client/index.html',html=await readFile(page,'utf8');
  if(!html.includes('<meta name="ga-measurement-id" content="">'))throw new Error('index.html has no empty ga-measurement-id meta to fill.');
  await writeFile(page,html.replace('<meta name="ga-measurement-id" content="">','<meta name="ga-measurement-id" content="'+gaId+'">'));
}
try{await cp(root+'/music',root+'/dist/client/sound-assets',{recursive:true});}catch(error){if(error.code!=='ENOENT')throw error;}
await cp(root+'/drizzle',root+'/dist/.openai/drizzle',{recursive:true});
let hosting={d1:'DB',r2:null};
try{hosting=JSON.parse(await readFile(root+'/.openai/hosting.json','utf8'));}catch(error){if(error.code!=='ENOENT')throw error;}
await writeFile(root+'/dist/.openai/hosting.json',JSON.stringify(hosting));
for(const name of ['DESIGN-CONTRACT.md','LICENSE','ART-LICENSE.md'])await copyFile(root+'/'+name,root+'/dist/client/'+name);
console.log('Built Worker, client assets and schema migrations.');
