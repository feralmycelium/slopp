const clamp=value=>Math.max(0,Math.min(1,value));
const assessments=new WeakMap();

export function assessDrawing(item){
  if(assessments.has(item))return assessments.get(item);
  let left=Infinity,right=-Infinity,top=Infinity,bottom=-Infinity,length=0,massX=0,massY=0;
  const inks=new Set();
  for(const stroke of item.strokes||[]){
    let strokeLength=0;
    for(let i=0;i<stroke.points.length;i++){
      const [x,y]=stroke.points[i];left=Math.min(left,x);right=Math.max(right,x);top=Math.min(top,y);bottom=Math.max(bottom,y);
      if(!i)continue;
      const [px,py]=stroke.points[i-1],segment=Math.hypot(x-px,y-py);
      strokeLength+=segment;massX+=(x+px)*.5*segment;massY+=(y+py)*.5*segment;
    }
    if(strokeLength){inks.add(stroke.ink);length+=strokeLength;}
  }
  const span=Number.isFinite(left)?Math.hypot(right-left,bottom-top):0;
  const presence=clamp(span/40)*clamp(length/60);
  const density=length/Math.max(1,span),clarity=1/(1+Math.max(0,density-12)/12);
  const balance=length?1-clamp(Math.hypot(massX/length-(left+right)/2,massY/length-(top+bottom)/2)/Math.max(1,span*.5)):0;
  const palette=1/(1+Math.max(0,inks.size-4)*.15);
  const score=clamp(presence*(.5*clarity+.25*balance+.25*palette));
  const reasons=[];
  if(presence<.4)reasons.push('Very small mark');
  if(clarity<.65)reasons.push('Dense overlapping paths');
  if(balance>.7&&presence>.4)reasons.push('Balanced composition');
  if(clarity>.8&&presence>.4)reasons.push('Clear gesture');
  if(inks.size>4)reasons.push('Many competing inks');
  const result={score,reasons:reasons.length?reasons:['Open composition']};assessments.set(item,result);return result;
}

export function drawingWeights(items,overrides={}){
  const sorted=items.map(item=>({item,score:assessDrawing(item).score})).sort((a,b)=>a.score-b.score),weights=new Map();
  for(let i=0;i<sorted.length;){
    let end=i+1;while(end<sorted.length&&Math.abs(sorted[end].score-sorted[i].score)<1e-6)end++;
    const rank=sorted.length>1?(i+end-1)/2/(sorted.length-1):.5;
    for(let j=i;j<end;j++){const item=sorted[j].item;weights.set(item.id,overrides[item.id]==='feature'?12:overrides[item.id]==='less'?.35:1+rank*5);}
    i=end;
  }
  return weights;
}
