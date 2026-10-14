export function createIdleControls({blocked,change,schedule=setTimeout,cancel=clearTimeout,now=()=>performance.now()}){
  const welcomeEnds=now()+30000;
  let timer;
  function activity(){
    cancel(timer);change(false);
    timer=schedule(()=>{if(blocked())activity();else change(true);},Math.max(3000,welcomeEnds-now()));
  }
  activity();return activity;
}
