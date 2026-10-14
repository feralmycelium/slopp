const VIEW={w:1000,h:800};
function circle(rate,speed,kind,pressure=.6,wobble=0){
  let next=0;
  return (intent,t)=>{
    while(next<=t){
      const a=next*speed*6.67,r=150+wobble*40*Math.sin(next*23);
      intent.stroke({t:next,x:500+r*Math.cos(a),y:400+r*Math.sin(a),pressure,kind,view:VIEW});next+=1/rate;
    }
  };
}
function during(from,to,draw,intent,t,state){
  if(t>=from&&t<to){draw(intent,t);state.drawing=true;}
  else if(state.drawing){intent.strokeEnd(t);state.drawing=false;}
}

export const SCENARIOS={
  still:{seconds:45,make:()=>()=>{}},
  speed:{seconds:45,make:()=>(i,t)=>i.motion({t,speed:t<8?0:t<25?Math.min(1,(t-8)/6):0})},
  pinch:{seconds:40,make:()=>(i,t)=>{if(t>=6&&t<8)i.pinch({t,delta:1.6});if(t>=18&&t<20)i.pinch({t,delta:-1.6});}},
  wash:{seconds:45,make:()=>{const s={},d=circle(60,1,'broad',.8);return (i,t)=>during(6,18,d,i,t,s);}},
  scratch:{seconds:40,make:()=>{const s={},d=circle(60,.8,'fine',.7,1);return (i,t)=>during(6,16,d,i,t,s);}},
  frantic:{seconds:45,make:()=>{const s={},u={},f=circle(240,12,'fine',1,1),b=circle(240,12,'broad',1);
    return (i,t)=>{during(5,35,f,i,t,s);during(5,35,b,i,t,u);i.motion({t,speed:t>=5&&t<35?1:0});if(t>=5&&t<35)i.pinch({t,delta:Math.floor(t)%2?2:-2});};}},
  rate20:{seconds:20,make:()=>{const s={},d=circle(20,.8,'fine',.7,1);return (i,t)=>during(4,12,d,i,t,s);}},
  rate120:{seconds:20,make:()=>{const s={},d=circle(120,.8,'fine',.7,1);return (i,t)=>during(4,12,d,i,t,s);}},
};

