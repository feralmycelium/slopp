import assert from 'node:assert/strict';
import {readFile,stat} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

const root=new URL('../',import.meta.url);
const manifest=JSON.parse(await readFile(new URL('dist/client/sound-assets/kit-b3/manifest.json',root),'utf8'));
assert.deepEqual([...new Set(manifest.units.map(u=>u.palette))].sort(),['echo','flow','fold','hush','print','soft']);
for(const unit of manifest.units){
  const file=await readFile(new URL('dist/client/sound-assets/kit-b3/'+unit.file,root));
  assert.equal(file.subarray(0,4).toString(),'fLaC',unit.file+' must be a lossless audio asset');
  assert(file.length<25*1024*1024,'audio must fit the hosting asset limit');
}
assert((await stat(new URL('dist/client/MUSIC-LICENSE.md',root))).size>0);
const archive=execFileSync('unzip',['-Z1',fileURLToPath(new URL('public/source.zip',root))],{encoding:'utf8'}).split('\n');
assert(archive.includes('MUSIC-LICENSE.md'));
assert(!archive.some(p=>/\.(wav|flac|mp3|aiff?)$/i.test(p)),'the open-source download must not include reserved music');
assert(!archive.some(p=>/kit-a|__pycache__|\.sound-assets/.test(p)),'private source assets must stay outside the source download');
console.log('PASS: all six palettes packaged; '+manifest.units.length+' lossless samples; music excluded from open-source download.');
