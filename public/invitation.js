import {seeded} from './environments.js';

const DISTANCE=6,UNIT=.03,HALF_FOV=57/360*Math.PI,clamp=(n,a,b)=>Math.max(a,Math.min(b,n));

// One seeded thread that wanders across about 60% of the view, loops once near its right end and runs on a little.
// Points use the saved-stroke space (world units / .03). space.position is an offset from the camera, not a world
// position: world.ghost keeps the thread there, 6 units ahead, slightly left and below eye level, facing the camera.
export function invitationGesture({environment,seed,width,height}){
  const rand=seeded(seed),tall=2*DISTANCE*Math.tan(HALF_FOV),wide=tall*width/height,w=wide/UNIT;
  const n=96+Math.floor(rand()*25),phase=rand()*Math.PI*2,lift=(.025+rand()*.015)*w,loopAt=.6+rand()*.06,radius=.09*w;
  const points=Array.from({length:n},(_,i)=>{
    const s=i/(n-1),loop=clamp((s-loopAt)/.24,0,1)*Math.PI*2;
    return [(s*.6-.32)*w+Math.sin(loop)*radius,Math.sin(s*Math.PI*2.4+phase)*lift+Math.sin(s*Math.PI*7+phase*2)*lift*.25-(1-Math.cos(loop))*radius,.5];
  });
  return {id:'invitation',strokes:[{kind:'line',ink:environment.inks[0],seed:Math.floor(rand()*0xffffffff),points}],
    space:{position:[-.04*wide,-.08*tall,-DISTANCE],rotation:[0,0,0,1],environment:environment.id}};
}

// Shows the invitation once the tab is visible, then ends it on the first activity or after 25 quiet seconds.
export function createInvitationClock({change,visible=()=>true,schedule=setTimeout,cancel=clearTimeout}){
  let wanted=false,shown=false,ended=false,timer;
  function end(){if(ended)return;ended=true;cancel(timer);change('end');}
  function begin(){if(!wanted||shown||ended||!visible())return;shown=true;change('show');timer=schedule(end,25000);}
  return {start(){wanted=true;begin();},visibilityChanged:begin,activity:end};
}
