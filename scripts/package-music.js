import {mkdir,readFile,writeFile} from 'node:fs/promises';
import {resolve,join} from 'node:path';
import {execFileSync} from 'node:child_process';

if(!process.argv[2])throw new Error('Provide the approved WAV kit directory.');
const source=resolve(process.argv[2]),target=resolve(import.meta.dirname,'../music/kit-b3');
const manifest=JSON.parse(await readFile(join(source,'manifest.json'),'utf8'));
await mkdir(target,{recursive:true});
const units=[];
const pcmHash=file=>execFileSync('ffmpeg',['-v','error','-i',file,'-map','0:a:0','-c:a','pcm_s16le','-f','hash','-hash','sha256','-'],{encoding:'utf8'}).trim();
for(const unit of manifest.units){
  const file=unit.file.replace(/\.wav$/i,'.flac'),input=join(source,unit.file),output=join(target,file);
  execFileSync('ffmpeg',['-v','error','-y','-i',input,'-map_metadata','-1','-c:a','flac','-compression_level','8',output]);
  if(pcmHash(input)!==pcmHash(output))throw new Error('Audio samples changed: '+unit.file);
  const published={file};
  for(const key of ['seconds','norm_db','palette','unit','note','pc','pcs','isolated','rank'])if(unit[key]!==undefined)published[key]=unit[key];
  units.push(published);
}
await writeFile(join(target,'manifest.json'),JSON.stringify({version:manifest.version,title:'slopp · stem soundtrack',license:'All rights reserved. See /MUSIC-LICENSE.md.',units},null,2)+'\n');
console.log('Packaged '+units.length+' samples; decoded PCM matches every approved WAV.');
