import {readFile,writeFile} from 'node:fs/promises';
import {resolve} from 'node:path';

const dir=resolve(process.argv[2]??resolve(import.meta.dirname,'../.sound-assets/review'));
const summary=JSON.parse(await readFile(dir+'/summary.json','utf8'));
const NAMES={flow:'Loose ends',fold:'Soft geometry',soft:'Almost touching',print:'Overprint',echo:'Inside out',hush:'The hush',crossing:'Crossing: Loose ends to Soft geometry'};
const TOOLS={flow:['Thread','Ribbon','Colour'],fold:['Line','Fold','Cut-out'],soft:['Wander','Ribbon','Shape'],print:['Scratch','Brush','Patch'],echo:['Contour','Band','Shape'],hush:['Whisper','Smudge','Patch']};
const ROLE={
  flow:['wandering plucks: one note per distance, walking with direction, brighter when fast','warm held ribbon: brightness and level follow speed, bends with up/down, flutters on curves','chord bloom over a dark held ribbon'],
  fold:['muffled dyads (a fourth apart) at corners','pleated chord: dips per distance travelled, cutoff follows speed','cut-out stabs: one short gated chord per distance travelled'],
  soft:['one note with a long tail, then a long gap','breath: air through a band filter that follows height and speed','air swell with one soft lead note'],
  print:['grainy pitched scratches: grain rate and brightness follow speed','brushed texture with sparse grains','stacked fifth over a dark texture'],
  echo:['contour: notes at turns, then the drawn contour echoes back twice','band: held wash with echoed onsets','bloom with echoes'],
  hush:['whisper: near-silent breath plus one distant bell','smudge: sub voice under a slow low-pass that opens with movement','low patch: dark held texture and a slow low bloom'],
};
const esc=s=>String(s).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
const plan=summary.find(s=>s.id==='flow')?.plan??[];
const srcs=(id,mode)=>summary.find(s=>s.id===id&&s.mode===mode)?.sources??[];
const rows=['flow','fold','soft','print','echo','hush'].map(id=>`<section><h2>${NAMES[id]}</h2>
<figure><audio controls preload="none" src="${id}-b.mp3"></audio></figure>
<table><tr><th>Tool</th><th>What it does</th></tr>${TOOLS[id].map((t,i)=>`<tr><td>${t}</td><td>${ROLE[id][i]}</td></tr>`).join('')}</table>
<p class="src"><b>Stems used in this clip:</b> ${esc(srcs(id,'b').join(' · '))}</p></section>`).join('');
const html=`<!doctype html><meta charset="utf-8"><title>slopp sound: six palettes</title>
<style>body{font:15px/1.5 Georgia,serif;max-width:860px;margin:40px auto;padding:0 20px;color:#282429;background:#f3ece0}h1{font-weight:400}h2{font-weight:400;margin:36px 0 8px}.pair{display:flex;gap:16px;flex-wrap:wrap}figure{margin:0}figcaption{font:12px system-ui;color:#6b6460}audio{width:380px;max-width:100%}table{border-collapse:collapse;margin:10px 0;font-size:14px}td,th{border-bottom:1px solid #d9cfbf;padding:5px 10px 5px 0;text-align:left;vertical-align:top}.src{font:12px/1.5 system-ui;color:#6b6460;margin:4px 0}ol{font:13px/1.6 system-ui}</style>
<h1>Six palettes, same gestures</h1>
<p>Six palettes made from your stems, with softer attacks and a little more reverb. Every clip plays the same hand gestures in the same order, rendered from the current live code.</p>
<ol>${plan.map(g=>`<li>${g.at.toFixed(1)} s: ${esc(g.label)}</li>`).join('')}<li>then silence for tails (the answer note may appear after a long first stroke)</li></ol>
${rows}
<section><h2>${NAMES.crossing}</h2><p>A ribbon every 2.6 s while travelling across the boundary. New gestures switch palette at once; tails crossfade.</p>
<figure><audio controls preload="none" src="crossing-b.mp3"></audio></figure></section>`;
await writeFile(dir+'/index.html',html);
console.log('wrote',dir+'/index.html');

