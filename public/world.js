var Xl="186";var ql=0,pa=1,Yl=2;var _s=1,Zl=2,ki=3,Gi=0,Ve=1,tn=2,_n=0,xs=1,ma=2,ga=3,_a=4,Jl=5;var Hi=100,$l=101,Kl=102,Ql=103,jl=104,tc=200,ec=201,nc=202,ic=203,sc=204,rc=205,ac=206,oc=207,lc=208,cc=209,hc=210,uc=211,dc=212,fc=213,pc=214,mc=0,gc=1,_c=2,xa=3,xc=4,vc=5,yc=6,Sc=7,Mc=0,bc=1,Ec=2,un=0,va=1,ya=2,Sa=3,Ma=4,ba=5,Ea=6,Ta=7;var Vi=301,$n=302,lr=303,cr=304,vs=306,Tc=1000,hr=1001,wc=1002,kn=1003,Ac=1004;var ys=1005;var We=1006,ur=1007;var Kn=1008;var dn=1009,Rc=1010,Cc=1011,Ss=1012,wa=1013,Gn=1014,Cn=1015,xn=1016,Aa=1017,Ra=1018,Wi=1020,Ic=35902,Pc=35899,Lc=1021,Dc=1022,vn=1023,Qn=1026,jn=1027,Nc=1028,Ca=1029,ti=1030,Ia=1031;var Pa=1033,dr=33776,fr=33777,pr=33778,mr=33779,La=35840,Da=35841,Na=35842,Ua=35843,Fa=36196,Oa=37492,Ba=37496,za=37488,ka=37489,gr=37490,Ga=37491,Ha=37808,Va=37809,Wa=37810,Xa=37811,qa=37812,Ya=37813,Za=37814,Ja=37815,$a=37816,Ka=37817,Qa=37818,ja=37819,to=37820,eo=37821,no=36492,io=36494,so=36495,ro=36283,ao=36284,_r=36285,oo=36286;var lo=0,Uc=1,ei="",Fc="srgb",co="srgb-linear",ho="linear",fe="srgb";var Oc=512,Bc=513,zc=514,xr=515,kc=516,Gc=517,vr=518,Hc=519;var uo="300 es",fo=2000;function $h(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Kh(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function fs(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Vc(){let t=fs("canvas");return t.style.display="block",t}var pl={},Oi=null;function po(...t){let e="THREE."+t.shift();if(Oi)Oi("log",e,...t);else console.log(e,...t)}function Wc(t){let e=t[0];if(typeof e==="string"&&e.startsWith("TSL:")){let n=t[1];if(n&&n.isStackTrace)t[0]+=" "+n.getLocation();else t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Nt(...t){t=Wc(t);let e="THREE."+t.shift();if(Oi)Oi("warn",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.warn(n.getError(e));else console.warn(e,...t)}}function Ut(...t){t=Wc(t);let e="THREE."+t.shift();if(Oi)Oi("error",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.error(n.getError(e));else console.error(e,...t)}}function Zn(...t){let e=t.join(" ");if(e in pl)return;pl[e]=!0,Nt(...t)}function Xc(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var qc={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class In{addEventListener(t,e){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[t]===void 0)n[t]=[];if(n[t].indexOf(e)===-1)n[t].push(e)}hasEventListener(t,e){let n=this._listeners;if(n===void 0)return!1;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);if(s!==-1)i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}var Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ml=1234567,cs=Math.PI/180,Bi=180/Math.PI;function ni(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ne[t&255]+Ne[t>>8&255]+Ne[t>>16&255]+Ne[t>>24&255]+"-"+Ne[e&255]+Ne[e>>8&255]+"-"+Ne[e>>16&15|64]+Ne[e>>24&255]+"-"+Ne[n&63|128]+Ne[n>>8&255]+"-"+Ne[n>>16&255]+Ne[n>>24&255]+Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]).toLowerCase()}function Vt(t,e,n){return Math.max(e,Math.min(n,t))}function mo(t,e){return(t%e+e)%e}function Qh(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function jh(t,e,n){if(t!==e)return(n-t)/(e-t);else return 0}function hs(t,e,n){return(1-n)*t+n*e}function tu(t,e,n,i){return hs(t,e,1-Math.exp(-n*i))}function eu(t,e=1){return e-Math.abs(mo(t,e*2)-e)}function nu(t,e,n){if(t<=e)return 0;if(t>=n)return 1;return t=(t-e)/(n-e),t*t*(3-2*t)}function iu(t,e,n){if(t<=e)return 0;if(t>=n)return 1;return t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10)}function su(t,e){return t+Math.floor(Math.random()*(e-t+1))}function ru(t,e){return t+Math.random()*(e-t)}function au(t){return t*(0.5-Math.random())}function ou(t){if(t!==void 0)ml=t;let e=ml+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lu(t){return t*cs}function cu(t){return t*Bi}function hu(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function uu(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function du(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function fu(t,e,n,i,s){let{cos:r,sin:a}=Math,o=r(n/2),l=a(n/2),c=r((e+i)/2),d=a((e+i)/2),p=r((e-i)/2),h=a((e-i)/2),u=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":t.set(o*d,l*p,l*h,o*c);break;case"YZY":t.set(l*h,o*d,l*p,o*c);break;case"ZXZ":t.set(l*p,l*h,o*d,o*c);break;case"XZX":t.set(o*d,l*g,l*u,o*c);break;case"YXY":t.set(l*u,o*d,l*g,o*c);break;case"ZYZ":t.set(l*g,l*u,o*d,o*c);break;default:Nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ni(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function ze(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var Xi={DEG2RAD:cs,RAD2DEG:Bi,generateUUID:ni,clamp:Vt,euclideanModulo:mo,mapLinear:Qh,inverseLerp:jh,lerp:hs,damp:tu,pingpong:eu,smoothstep:nu,smootherstep:iu,randInt:su,randFloat:ru,randFloatSpread:au,seededRandom:ou,degToRad:lu,radToDeg:cu,isPowerOfTwo:hu,ceilPowerOfTwo:uu,floorPowerOfTwo:du,setQuaternionFromProperEuler:fu,normalize:ze,denormalize:Ni};class Mt{static{Mt.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let o=n[i+0],l=n[i+1],c=n[i+2],d=n[i+3],p=s[r+0],h=s[r+1],u=s[r+2],g=s[r+3];if(d!==g||o!==p||l!==h||c!==u){let x=o*p+l*h+c*u+d*g;if(x<0)p=-p,h=-h,u=-u,g=-g,x=-x;let m=1-a;if(x<0.9995){let f=Math.acos(x),R=Math.sin(f);m=Math.sin(m*f)/R,a=Math.sin(a*f)/R,o=o*m+p*a,l=l*m+h*a,c=c*m+u*a,d=d*m+g*a}else{o=o*m+p*a,l=l*m+h*a,c=c*m+u*a,d=d*m+g*a;let f=1/Math.sqrt(o*o+l*l+c*c+d*d);o*=f,l*=f,c*=f,d*=f}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,r){let a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],d=s[r],p=s[r+1],h=s[r+2],u=s[r+3];return t[e]=a*u+c*d+o*h-l*p,t[e+1]=o*u+c*p+l*d-a*h,t[e+2]=l*u+c*h+a*p-o*d,t[e+3]=c*u-a*d-o*p-l*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let{_x:n,_y:i,_z:s,_order:r}=t,{cos:a,sin:o}=Math,l=a(n/2),c=a(i/2),d=a(s/2),p=o(n/2),h=o(i/2),u=o(s/2);switch(r){case"XYZ":this._x=p*c*d+l*h*u,this._y=l*h*d-p*c*u,this._z=l*c*u+p*h*d,this._w=l*c*d-p*h*u;break;case"YXZ":this._x=p*c*d+l*h*u,this._y=l*h*d-p*c*u,this._z=l*c*u-p*h*d,this._w=l*c*d+p*h*u;break;case"ZXY":this._x=p*c*d-l*h*u,this._y=l*h*d+p*c*u,this._z=l*c*u+p*h*d,this._w=l*c*d-p*h*u;break;case"ZYX":this._x=p*c*d-l*h*u,this._y=l*h*d+p*c*u,this._z=l*c*u-p*h*d,this._w=l*c*d+p*h*u;break;case"YZX":this._x=p*c*d+l*h*u,this._y=l*h*d+p*c*u,this._z=l*c*u-p*h*d,this._w=l*c*d-p*h*u;break;case"XZY":this._x=p*c*d-l*h*u,this._y=l*h*d-p*c*u,this._z=l*c*u+p*h*d,this._w=l*c*d+p*h*u;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(e===!0)this._onChangeCallback();return this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10],p=n+a+d;if(p>0){let h=0.5/Math.sqrt(p+1);this._w=0.25/h,this._x=(c-o)*h,this._y=(s-l)*h,this._z=(r-i)*h}else if(n>a&&n>d){let h=2*Math.sqrt(1+n-a-d);this._w=(c-o)/h,this._x=0.25*h,this._y=(i+r)/h,this._z=(s+l)/h}else if(a>d){let h=2*Math.sqrt(1+a-n-d);this._w=(s-l)/h,this._x=(i+r)/h,this._y=0.25*h,this._z=(o+c)/h}else{let h=2*Math.sqrt(1+d-n-a);this._w=(r-i)/h,this._x=(s+l)/h,this._y=(o+c)/h,this._z=0.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;if(n<0.00000001)if(n=0,Math.abs(t.x)>Math.abs(t.z))this._x=-t.y,this._y=t.x,this._z=0,this._w=n;else this._x=0,this._y=-t.z,this._z=t.y,this._w=n;else this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n;return this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();if(t===0)this._x=0,this._y=0,this._z=0,this._w=1;else t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t;return this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,{_x:a,_y:o,_z:l,_w:c}=e;return this._x=n*c+r*a+i*l-s*o,this._y=i*c+r*o+s*a-n*l,this._z=s*c+r*l+n*o-i*a,this._w=r*c-n*a-i*o-s*l,this._onChangeCallback(),this}slerp(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,a=this.dot(t);if(a<0)n=-n,i=-i,s=-s,r=-r,a=-a;let o=1-e;if(a<0.9995){let l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,e=Math.sin(e*l)/c,this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{static{F.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){if(n===void 0)n=this.z;return this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,{x:s,y:r,z:a,w:o}=t,l=2*(r*i-a*n),c=2*(a*e-s*i),d=2*(s*n-r*e);return this.x=e+o*l+r*d-a*c,this.y=n+o*c+a*l-s*d,this.z=i+o*d+s*c-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let{x:n,y:i,z:s}=t,{x:r,y:a,z:o}=e;return this.x=i*o-s*a,this.y=s*r-n*o,this.z=n*a-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gr.copy(this).projectOnVector(t),this.sub(Gr)}reflect(t){return this.sub(Gr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Gr=new F,gl=new Ye;class Ft{static{Ft.prototype.isMatrix3=!0}constructor(t,e,n,i,s,r,a,o,l){if(this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l)}set(t,e,n,i,s,r,a,o,l){let c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=s,c[5]=o,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],o=n[6],l=n[1],c=n[4],d=n[7],p=n[2],h=n[5],u=n[8],g=i[0],x=i[3],m=i[6],f=i[1],R=i[4],A=i[7],v=i[2],T=i[5],w=i[8];return s[0]=r*g+a*f+o*v,s[3]=r*x+a*R+o*T,s[6]=r*m+a*A+o*w,s[1]=l*g+c*f+d*v,s[4]=l*x+c*R+d*T,s[7]=l*m+c*A+d*w,s[2]=p*g+h*f+u*v,s[5]=p*x+h*R+u*T,s[8]=p*m+h*A+u*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8];return e*r*c-e*a*l-n*s*c+n*a*o+i*s*l-i*r*o}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],d=c*r-a*l,p=a*o-c*s,h=l*s-r*o,u=e*d+n*p+i*h;if(u===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/u;return t[0]=d*g,t[1]=(i*l-c*n)*g,t[2]=(a*n-i*r)*g,t[3]=p*g,t[4]=(c*e-i*o)*g,t[5]=(i*s-a*e)*g,t[6]=h*g,t[7]=(n*o-l*e)*g,t[8]=(r*e-n*s)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){let o=Math.cos(s),l=Math.sin(s);return this.set(n*o,n*l,-n*(o*r+l*a)+r+t,-i*l,i*o,-i*(-l*r+o*a)+a+e,0,0,1),this}scale(t,e){return Zn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hr.makeScale(t,e)),this}rotate(t){return Zn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hr.makeRotation(-t)),this}translate(t,e){return Zn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hr.makeTranslation(t,e)),this}makeTranslation(t,e){if(t.isVector2)this.set(1,0,t.x,0,1,t.y,0,0,1);else this.set(1,0,t,0,1,e,0,0,1);return this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}var Hr=new Ft,_l=new Ft().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),xl=new Ft().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function pu(){let t={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(s,r,a){if(this.enabled===!1||r===a||!r||!a)return s;if(this.spaces[r].transfer==="srgb")s.r=Rn(s.r),s.g=Rn(s.g),s.b=Rn(s.b);if(this.spaces[r].primaries!==this.spaces[a].primaries)s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ);if(this.spaces[a].transfer==="srgb")s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b);return s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){if(s==="")return"linear";return this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Zn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Zn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],i=[0.3127,0.329];return t.define({["srgb-linear"]:{primaries:e,whitePoint:i,transfer:"linear",toXYZ:_l,fromXYZ:xl,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:e,whitePoint:i,transfer:"srgb",toXYZ:_l,fromXYZ:xl,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),t}var Zt=pu();function Rn(t){return t<0.04045?t*0.0773993808:Math.pow(t*0.9478672986+0.0521327014,2.4)}function Ui(t){return t<0.0031308?t*12.92:1.055*Math.pow(t,0.41666)-0.055}var Si;class go{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src))return t.src;if(typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{if(Si===void 0)Si=fs("canvas");Si.width=t.width,Si.height=t.height;let i=Si.getContext("2d");if(t instanceof ImageData)i.putImageData(t,0,0);else i.drawImage(t,0,0,t.width,t.height);n=Si}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=fs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Rn(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)e[n]=Math.floor(Rn(e[n]/255)*255);else e[n]=Rn(e[n]);return{data:e,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}var mu=0;class Ms{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=ni(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)t.set(e.videoWidth,e.videoHeight,0);else if(typeof VideoFrame<"u"&&e instanceof VideoFrame)t.set(e.displayWidth,e.displayHeight,0);else if(e!==null)t.set(e.width,e.height,e.depth||0);else t.set(0,0,0);return t}set needsUpdate(t){if(t===!0)this.version++}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)if(i[r].isDataTexture)s.push(Vr(i[r].image));else s.push(Vr(i[r]))}else s=Vr(i);n.url=s}if(!e)t.images[this.uuid]=n;return n}}function Vr(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap)return go.getDataURL(t);else if(t.data)return{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name};else return Nt("Texture: Unable to serialize Texture."),{}}var gu=0,Wr=new F;class Fe extends In{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,a=1023,o=1009,l=Fe.DEFAULT_ANISOTROPY,c=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=ni(),this.name="",this.source=new Ms(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=t&&t.depth&&t.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wr).x}get height(){return this.source.getSize(Wr).y}get depth(){return this.source.getSize(Wr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Nt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Nt(`Texture.setValues(): property '${e}' does not exist.`);continue}if(i&&n&&(i.isVector2&&n.isVector2))i.copy(n);else if(i&&n&&(i.isVector3&&n.isVector3))i.copy(n);else if(i&&n&&(i.isMatrix3&&n.isMatrix3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!e)t.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1000:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.x)%2)===1)t.x=Math.ceil(t.x)-t.x;else t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1000:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.y)%2)===1)t.y=Math.ceil(t.y)-t.y;else t.y=t.y-Math.floor(t.y);break}if(this.flipY)t.y=1-t.y;return t}set needsUpdate(t){if(t===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(t){if(t===!0)this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=300;Fe.DEFAULT_ANISOTROPY=1;class xe{static{xe.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);if(e<0.0001)this.x=1,this.y=0,this.z=0;else this.x=t.x/e,this.y=t.y/e,this.z=t.z/e;return this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,r=0.01,a=0.1,o=t.elements,l=o[0],c=o[4],d=o[8],p=o[1],h=o[5],u=o[9],g=o[2],x=o[6],m=o[10];if(Math.abs(c-p)<0.01&&Math.abs(d-g)<0.01&&Math.abs(u-x)<0.01){if(Math.abs(c+p)<0.1&&Math.abs(d+g)<0.1&&Math.abs(u+x)<0.1&&Math.abs(l+h+m-3)<0.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(l+1)/2,A=(h+1)/2,v=(m+1)/2,T=(c+p)/4,w=(d+g)/4,C=(u+x)/4;if(R>A&&R>v)if(R<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(R),i=T/n,s=w/n;else if(A>v)if(A<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(A),n=T/i,s=C/i;else if(v<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(v),n=w/s,i=C/s;return this.set(n,i,s,e),this}let f=Math.sqrt((x-u)*(x-u)+(d-g)*(d-g)+(p-c)*(p-c));if(Math.abs(f)<0.001)f=1;return this.x=(x-u)/f,this.y=(d-g)/f,this.z=(p-c)/f,this.w=Math.acos((l+h+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _o extends In{constructor(t=1,e=1,n={}){super();n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new Fe(i),r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(t.mapping!==void 0)e.mapping=t.mapping;if(t.wrapS!==void 0)e.wrapS=t.wrapS;if(t.wrapT!==void 0)e.wrapT=t.wrapT;if(t.wrapR!==void 0)e.wrapR=t.wrapR;if(t.magFilter!==void 0)e.magFilter=t.magFilter;if(t.minFilter!==void 0)e.minFilter=t.minFilter;if(t.format!==void 0)e.format=t.format;if(t.type!==void 0)e.type=t.type;if(t.anisotropy!==void 0)e.anisotropy=t.anisotropy;if(t.colorSpace!==void 0)e.colorSpace=t.colorSpace;if(t.flipY!==void 0)e.flipY=t.flipY;if(t.generateMipmaps!==void 0)e.generateMipmaps=t.generateMipmaps;if(t.internalFormat!==void 0)e.internalFormat=t.internalFormat;for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(t!==null&&t.renderTarget===null)t.renderTarget=this;this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)if(this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0)this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ms(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ze extends _o{constructor(t=1,e=1,n={}){super(t,e,n);this.isWebGLRenderTarget=!0}}class yr extends Fe{constructor(t=null,e=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xo extends Fe{constructor(t=null,e=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class de{static{de.prototype.isMatrix4=!0}constructor(t,e,n,i,s,r,a,o,l,c,d,p,h,u,g,x){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l,c,d,p,h,u,g,x)}set(t,e,n,i,s,r,a,o,l,c,d,p,h,u,g,x){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=r,m[9]=a,m[13]=o,m[2]=l,m[6]=c,m[10]=d,m[14]=p,m[3]=h,m[7]=u,m[11]=g,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){if(this.determinantAffine()===0)return t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this;return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Mi.setFromMatrixColumn(t,0).length(),s=1/Mi.setFromMatrixColumn(t,1).length(),r=1/Mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,{x:n,y:i,z:s}=t,r=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let p=r*c,h=r*d,u=a*c,g=a*d;e[0]=o*c,e[4]=-o*d,e[8]=l,e[1]=h+u*l,e[5]=p-g*l,e[9]=-a*o,e[2]=g-p*l,e[6]=u+h*l,e[10]=r*o}else if(t.order==="YXZ"){let p=o*c,h=o*d,u=l*c,g=l*d;e[0]=p+g*a,e[4]=u*a-h,e[8]=r*l,e[1]=r*d,e[5]=r*c,e[9]=-a,e[2]=h*a-u,e[6]=g+p*a,e[10]=r*o}else if(t.order==="ZXY"){let p=o*c,h=o*d,u=l*c,g=l*d;e[0]=p-g*a,e[4]=-r*d,e[8]=u+h*a,e[1]=h+u*a,e[5]=r*c,e[9]=g-p*a,e[2]=-r*l,e[6]=a,e[10]=r*o}else if(t.order==="ZYX"){let p=r*c,h=r*d,u=a*c,g=a*d;e[0]=o*c,e[4]=u*l-h,e[8]=p*l+g,e[1]=o*d,e[5]=g*l+p,e[9]=h*l-u,e[2]=-l,e[6]=a*o,e[10]=r*o}else if(t.order==="YZX"){let p=r*o,h=r*l,u=a*o,g=a*l;e[0]=o*c,e[4]=g-p*d,e[8]=u*d+h,e[1]=d,e[5]=r*c,e[9]=-a*c,e[2]=-l*c,e[6]=h*d+u,e[10]=p-g*d}else if(t.order==="XZY"){let p=r*o,h=r*l,u=a*o,g=a*l;e[0]=o*c,e[4]=-d,e[8]=l*c,e[1]=p*d+g,e[5]=r*c,e[9]=h*d-u,e[2]=u*d-h,e[6]=a*c,e[10]=g*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_u,t,xu)}lookAt(t,e,n){let i=this.elements;if(Xe.subVectors(t,e),Xe.lengthSq()===0)Xe.z=1;if(Xe.normalize(),Un.crossVectors(n,Xe),Un.lengthSq()===0){if(Math.abs(n.z)===1)Xe.x+=0.0001;else Xe.z+=0.0001;Xe.normalize(),Un.crossVectors(n,Xe)}return Un.normalize(),Fs.crossVectors(Xe,Un),i[0]=Un.x,i[4]=Fs.x,i[8]=Xe.x,i[1]=Un.y,i[5]=Fs.y,i[9]=Xe.y,i[2]=Un.z,i[6]=Fs.z,i[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],o=n[8],l=n[12],c=n[1],d=n[5],p=n[9],h=n[13],u=n[2],g=n[6],x=n[10],m=n[14],f=n[3],R=n[7],A=n[11],v=n[15],T=i[0],w=i[4],C=i[8],S=i[12],E=i[1],Z=i[5],O=i[9],B=i[13],et=i[2],D=i[6],W=i[10],nt=i[14],H=i[3],lt=i[7],Q=i[11],it=i[15];return s[0]=r*T+a*E+o*et+l*H,s[4]=r*w+a*Z+o*D+l*lt,s[8]=r*C+a*O+o*W+l*Q,s[12]=r*S+a*B+o*nt+l*it,s[1]=c*T+d*E+p*et+h*H,s[5]=c*w+d*Z+p*D+h*lt,s[9]=c*C+d*O+p*W+h*Q,s[13]=c*S+d*B+p*nt+h*it,s[2]=u*T+g*E+x*et+m*H,s[6]=u*w+g*Z+x*D+m*lt,s[10]=u*C+g*O+x*W+m*Q,s[14]=u*S+g*B+x*nt+m*it,s[3]=f*T+R*E+A*et+v*H,s[7]=f*w+R*Z+A*D+v*lt,s[11]=f*C+R*O+A*W+v*Q,s[15]=f*S+R*B+A*nt+v*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],o=t[9],l=t[13],c=t[2],d=t[6],p=t[10],h=t[14],u=t[3],g=t[7],x=t[11],m=t[15],f=o*h-l*p,R=a*h-l*d,A=a*p-o*d,v=r*h-l*c,T=r*p-o*c,w=r*d-a*c;return e*(g*f-x*R+m*A)-n*(u*f-x*v+m*T)+i*(u*R-g*v+m*w)-s*(u*A-g*T+x*w)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],r=t[5],a=t[9],o=t[2],l=t[6],c=t[10];return e*(r*c-a*l)-n*(s*c-a*o)+i*(s*l-r*o)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;if(t.isVector3)i[12]=t.x,i[13]=t.y,i[14]=t.z;else i[12]=t,i[13]=e,i[14]=n;return this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],d=t[9],p=t[10],h=t[11],u=t[12],g=t[13],x=t[14],m=t[15],f=e*a-n*r,R=e*o-i*r,A=e*l-s*r,v=n*o-i*a,T=n*l-s*a,w=i*l-s*o,C=c*g-d*u,S=c*x-p*u,E=c*m-h*u,Z=d*x-p*g,O=d*m-h*g,B=p*m-h*x,et=f*B-R*O+A*Z+v*E-T*S+w*C;if(et===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/et;return t[0]=(a*B-o*O+l*Z)*D,t[1]=(i*O-n*B-s*Z)*D,t[2]=(g*w-x*T+m*v)*D,t[3]=(p*T-d*w-h*v)*D,t[4]=(o*E-r*B-l*S)*D,t[5]=(e*B-i*E+s*S)*D,t[6]=(x*A-u*w-m*R)*D,t[7]=(c*w-p*A+h*R)*D,t[8]=(r*O-a*E+l*C)*D,t[9]=(n*E-e*O-s*C)*D,t[10]=(u*T-g*A+m*f)*D,t[11]=(d*A-c*T-h*f)*D,t[12]=(a*S-r*Z-o*C)*D,t[13]=(e*Z-n*S+i*C)*D,t[14]=(g*R-u*v-x*f)*D,t[15]=(c*v-d*R+p*f)*D,this}scale(t){let e=this.elements,{x:n,y:i,z:s}=t;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){if(t.isVector3)this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1);else this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1);return this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,{x:r,y:a,z:o}=t,l=s*r,c=s*a;return this.set(l*r+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*r,0,l*o-i*a,c*o+i*r,s*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,{_x:s,_y:r,_z:a,_w:o}=e,l=s+s,c=r+r,d=a+a,p=s*l,h=s*c,u=s*d,g=r*c,x=r*d,m=a*d,f=o*l,R=o*c,A=o*d,{x:v,y:T,z:w}=n;return i[0]=(1-(g+m))*v,i[1]=(h+A)*v,i[2]=(u-R)*v,i[3]=0,i[4]=(h-A)*T,i[5]=(1-(p+m))*T,i[6]=(x+f)*T,i[7]=0,i[8]=(u+R)*w,i[9]=(x-f)*w,i[10]=(1-(p+g))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let r=Mi.set(i[0],i[1],i[2]).length(),a=Mi.set(i[4],i[5],i[6]).length(),o=Mi.set(i[8],i[9],i[10]).length();if(s<0)r=-r;on.copy(this);let l=1/r,c=1/a,d=1/o;return on.elements[0]*=l,on.elements[1]*=l,on.elements[2]*=l,on.elements[4]*=c,on.elements[5]*=c,on.elements[6]*=c,on.elements[8]*=d,on.elements[9]*=d,on.elements[10]*=d,e.setFromRotationMatrix(on),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2*s/(e-t),d=2*s/(n-i),p=(e+t)/(e-t),h=(n+i)/(n-i),u,g;if(o)u=s/(r-s),g=r*s/(r-s);else if(a===2000)u=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(a===2001)u=-r/(r-s),g=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2/(e-t),d=2/(n-i),p=-(e+t)/(e-t),h=-(n+i)/(n-i),u,g;if(o)u=1/(r-s),g=r/(r-s);else if(a===2000)u=-2/(r-s),g=-(r+s)/(r-s);else if(a===2001)u=-1/(r-s),g=-s/(r-s);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=d,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=u,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}var Mi=new F,on=new de,_u=new F(0,0,0),xu=new F(1,1,1),Un=new F,Fs=new F,Xe=new F,vl=new de,yl=new Ye;class gn{constructor(t=0,e=0,n=0,i=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],r=i[4],a=i[8],o=i[1],l=i[5],c=i[9],d=i[2],p=i[6],h=i[10];switch(e){case"XYZ":if(this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,h),this._z=Math.atan2(-r,s);else this._x=Math.atan2(p,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-Vt(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(a,h),this._z=Math.atan2(o,l);else this._y=Math.atan2(-d,s),this._z=0;break;case"ZXY":if(this._x=Math.asin(Vt(p,-1,1)),Math.abs(p)<0.9999999)this._y=Math.atan2(-d,h),this._z=Math.atan2(-r,l);else this._y=0,this._z=Math.atan2(o,s);break;case"ZYX":if(this._y=Math.asin(-Vt(d,-1,1)),Math.abs(d)<0.9999999)this._x=Math.atan2(p,h),this._z=Math.atan2(o,s);else this._x=0,this._z=Math.atan2(-r,l);break;case"YZX":if(this._z=Math.asin(Vt(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-d,s);else this._x=0,this._y=Math.atan2(a,h);break;case"XZY":if(this._z=Math.asin(-Vt(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(p,l),this._y=Math.atan2(a,s);else this._x=Math.atan2(-c,h),this._y=0;break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}if(this._order=e,n===!0)this._onChangeCallback();return this}setFromQuaternion(t,e,n){return vl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yl.setFromEuler(this),this.setFromQuaternion(yl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){if(this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0)this._order=t[3];return this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class bs{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}var vu=0,Sl=new F,bi=new Ye,bn=new de,Os=new F,is=new F,yu=new F,Su=new Ye,Ml=new F(1,0,0),bl=new F(0,1,0),El=new F(0,0,1),Tl={type:"added"},Mu={type:"removed"},Ei={type:"childadded",child:null},Xr={type:"childremoved",child:null};class Ge extends In{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ge.DEFAULT_UP.clone();let t=new F,e=new gn,n=new Ye,i=new F(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new de},normalMatrix:{value:new Ft}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.multiply(bi),this}rotateOnWorldAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.premultiply(bi),this}rotateX(t){return this.rotateOnAxis(Ml,t)}rotateY(t){return this.rotateOnAxis(bl,t)}rotateZ(t){return this.rotateOnAxis(El,t)}translateOnAxis(t,e){return Sl.copy(t).applyQuaternion(this.quaternion),this.position.add(Sl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ml,t)}translateY(t){return this.translateOnAxis(bl,t)}translateZ(t){return this.translateOnAxis(El,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){if(t.isVector3)Os.copy(t);else Os.set(t,e,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)bn.lookAt(is,Os,this.up);else bn.lookAt(Os,is,this.up);if(this.quaternion.setFromRotationMatrix(bn),i)bn.extractRotation(i.matrixWorld),bi.setFromRotationMatrix(bn),this.quaternion.premultiply(bi.invert())}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}if(t===this)return Ut("Object3D.add: object can't be added as a child of itself.",t),this;if(t&&t.isObject3D)t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tl),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null;else Ut("Object3D.add: object not an instance of THREE.Object3D.",t);return this}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);if(e!==-1)t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mu),Xr.child=t,this.dispatchEvent(Xr),Xr.child=null;return this}removeFromParent(){let t=this.parent;if(t!==null)t.remove(this);return this}clear(){return this.remove(...this.children)}attach(t){if(this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null)t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld);return t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tl),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}return}getObjectsByProperty(t,e,n=[]){if(this[t]===e)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,t,yu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,Su,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;if(e!==null)t(e),e.traverseAncestors(t)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let{x:e,y:n,z:i}=t,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||t){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,t=!0}let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null)i.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||n){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,n=!0}if(e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t==="string",n={};if(e)t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null)i.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)i.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map((a)=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map((a)=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null)i.colorsTexture=this._colorsTexture.toJSON(t);if(this.boundingSphere!==null)i.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)i.boundingBox=this.boundingBox.toJSON()}function s(a,o){if(a[o.uuid]===void 0)a[o.uuid]=o.toJSON(t);return o.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(t).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(t).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){let d=o[l];s(t.shapes,d)}else s(t.shapes,o)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(s(t.materials,this.material[o]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(s(t.animations,o))}}if(e){let a=r(t.geometries),o=r(t.materials),l=r(t.textures),c=r(t.images),d=r(t.shapes),p=r(t.skeletons),h=r(t.animations),u=r(t.nodes);if(a.length>0)n.geometries=a;if(o.length>0)n.materials=o;if(l.length>0)n.textures=l;if(c.length>0)n.images=c;if(d.length>0)n.shapes=d;if(p.length>0)n.skeletons=p;if(h.length>0)n.animations=h;if(u.length>0)n.nodes=u}return n.object=i,n;function r(a){let o=[];for(let l in a){let c=a[l];delete c.metadata,o.push(c)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ge.DEFAULT_UP=new F(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class je extends Ge{constructor(){super();this.isGroup=!0,this.type="Group"}}var bu={type:"move"};class Es{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(t){if(this._targetRay!==null)this._targetRay.dispatchEvent(t);if(this._grip!==null)this._grip.dispatchEvent(t);if(this._hand!==null)this._hand.dispatchEvent(t);return this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){if(this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(t,e,n){let i=null,s=null,r=null,a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let g of t.hand.values()){let x=e.getJointPose(g,n),m=this._getHandJoint(l,g);if(x!==null)m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius;m.visible=x!==null}let c=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=c.position.distanceTo(d.position),h=0.02,u=0.005;if(l.inputState.pinching&&p>h+u)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this});else if(!l.inputState.pinching&&p<=h-u)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this})}else if(o!==null&&t.gripSpace){if(s=e.getPose(t.gripSpace,n),s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=!1;if(s.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=!1;if(o.eventsEnabled)o.dispatchEvent({type:"gripUpdated",data:t,target:this})}}if(a!==null){if(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity);else a.hasLinearVelocity=!1;if(i.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity);else a.hasAngularVelocity=!1;this.dispatchEvent(bu)}}}if(a!==null)a.visible=i!==null;if(o!==null)o.visible=s!==null;if(l!==null)l.visible=r!==null;return this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new je;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}var Yc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Bs={h:0,s:0,l:0};function qr(t,e,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return t+(e-t)*6*n;if(n<0.5)return e;if(n<0.6666666666666666)return t+(e-t)*6*(0.6666666666666666-n);return t}class Qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e="srgb"){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=mo(t,1),e=Vt(e,0,1),n=Vt(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=qr(r,s,t+0.3333333333333333),this.g=qr(r,s,t),this.b=qr(r,s,t-0.3333333333333333)}return Zt.colorSpaceToWorking(this,i),this}setStyle(t,e="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)Nt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Nt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);else if(r===6)return this.setHex(parseInt(s,16),e);else Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e="srgb"){let n=Yc[t.toLowerCase()];if(n!==void 0)this.setHex(n,e);else Nt("Color: Unknown color "+t);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rn(t.r),this.g=Rn(t.g),this.b=Rn(t.b),this}copyLinearToSRGB(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t="srgb"){return Zt.workingToColorSpace(Ue.copy(this),t),Math.round(Vt(Ue.r*255,0,255))*65536+Math.round(Vt(Ue.g*255,0,255))*256+Math.round(Vt(Ue.b*255,0,255))}getHexString(t="srgb"){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.workingToColorSpace(Ue.copy(this),e);let{r:n,g:i,b:s}=Ue,r=Math.max(n,i,s),a=Math.min(n,i,s),o,l,c=(a+r)/2;if(a===r)o=0,l=0;else{let d=r-a;switch(l=c<=0.5?d/(r+a):d/(2-r-a),r){case n:o=(i-s)/d+(i<s?6:0);break;case i:o=(s-n)/d+2;break;case s:o=(n-i)/d+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=Zt.workingColorSpace){return Zt.workingToColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t="srgb"){Zt.workingToColorSpace(Ue.copy(this),t);let{r:e,g:n,b:i}=Ue;if(t!=="srgb")return`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Fn),this.setHSL(Fn.h+t,Fn.s+e,Fn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fn),t.getHSL(Bs);let n=hs(Fn.h,Bs.h,e),i=hs(Fn.s,Bs.s,e),s=hs(Fn.l,Bs.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Ue=new Qt;Qt.NAMES=Yc;class Ts{constructor(t,e=1,n=1000){this.isFog=!0,this.name="",this.color=new Qt(t),this.near=e,this.far=n}clone(){return new Ts(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ws extends Ge{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){if(super.copy(t,e),t.background!==null)this.background=t.background.clone();if(t.environment!==null)this.environment=t.environment.clone();if(t.fog!==null)this.fog=t.fog.clone();if(this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null)this.overrideMaterial=t.overrideMaterial.clone();return this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);if(this.fog!==null)e.object.fog=this.fog.toJSON();return e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}var ln=new F,En=new F,Yr=new F,Tn=new F,Ti=new F,wi=new F,wl=new F,Zr=new F,Jr=new F,$r=new F,Kr=new xe,Qr=new xe,jr=new xe;class Qe{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ln.subVectors(t,e),i.cross(ln);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(t,e,n,i,s){ln.subVectors(i,e),En.subVectors(n,e),Yr.subVectors(t,e);let r=ln.dot(ln),a=ln.dot(En),o=ln.dot(Yr),l=En.dot(En),c=En.dot(Yr),d=r*l-a*a;if(d===0)return s.set(0,0,0),null;let p=1/d,h=(l*o-a*c)*p,u=(r*c-a*o)*p;return s.set(1-h-u,u,h)}static containsPoint(t,e,n,i){if(this.getBarycoord(t,e,n,i,Tn)===null)return!1;return Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(t,e,n,i,s,r,a,o){if(this.getBarycoord(t,e,n,i,Tn)===null){if(o.x=0,o.y=0,"z"in o)o.z=0;if("w"in o)o.w=0;return null}return o.setScalar(0),o.addScaledVector(s,Tn.x),o.addScaledVector(r,Tn.y),o.addScaledVector(a,Tn.z),o}static getInterpolatedAttribute(t,e,n,i,s,r){return Kr.setScalar(0),Qr.setScalar(0),jr.setScalar(0),Kr.fromBufferAttribute(t,e),Qr.fromBufferAttribute(t,n),jr.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Kr,s.x),r.addScaledVector(Qr,s.y),r.addScaledVector(jr,s.z),r}static isFrontFacing(t,e,n,i){return ln.subVectors(n,e),En.subVectors(t,e),ln.cross(En).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),En.subVectors(this.a,this.b),ln.cross(En).length()*0.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(t){return Qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return Qe.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,r,a;Ti.subVectors(i,n),wi.subVectors(s,n),Zr.subVectors(t,n);let o=Ti.dot(Zr),l=wi.dot(Zr);if(o<=0&&l<=0)return e.copy(n);Jr.subVectors(t,i);let c=Ti.dot(Jr),d=wi.dot(Jr);if(c>=0&&d<=c)return e.copy(i);let p=o*d-c*l;if(p<=0&&o>=0&&c<=0)return r=o/(o-c),e.copy(n).addScaledVector(Ti,r);$r.subVectors(t,s);let h=Ti.dot($r),u=wi.dot($r);if(u>=0&&h<=u)return e.copy(s);let g=h*l-o*u;if(g<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(wi,a);let x=c*u-h*d;if(x<=0&&d-c>=0&&h-u>=0)return wl.subVectors(s,i),a=(d-c)/(d-c+(h-u)),e.copy(i).addScaledVector(wl,a);let m=1/(x+g+p);return r=g*m,a=p*m,e.copy(n).addScaledVector(Ti,r).addScaledVector(wi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ii{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=cn.copy(e).multiplyScalar(0.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++){if(t.isMesh===!0)t.getVertexPosition(r,cn);else cn.fromBufferAttribute(s,r);cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn)}else{if(t.boundingBox!==void 0){if(t.boundingBox===null)t.computeBoundingBox();zs.copy(t.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();zs.copy(n.boundingBox)}zs.applyMatrix4(t.matrixWorld),this.union(zs)}}let i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;if(t.normal.x>0)e=t.normal.x*this.min.x,n=t.normal.x*this.max.x;else e=t.normal.x*this.max.x,n=t.normal.x*this.min.x;if(t.normal.y>0)e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y;else e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y;if(t.normal.z>0)e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z;else e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z;return e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ss),ks.subVectors(this.max,ss),Ai.subVectors(t.a,ss),Ri.subVectors(t.b,ss),Ci.subVectors(t.c,ss),On.subVectors(Ri,Ai),Bn.subVectors(Ci,Ri),Wn.subVectors(Ai,Ci);let e=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-Wn.z,Wn.y,On.z,0,-On.x,Bn.z,0,-Bn.x,Wn.z,0,-Wn.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-Wn.y,Wn.x,0];if(!ta(e,Ai,Ri,Ci,ks))return!1;if(e=[1,0,0,0,1,0,0,0,1],!ta(e,Ai,Ri,Ci,ks))return!1;return Gs.crossVectors(On,Bn),e=[Gs.x,Gs.y,Gs.z],ta(e,Ai,Ri,Ci,ks)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){if(this.isEmpty())t.makeEmpty();else this.getCenter(t.center),t.radius=this.getSize(cn).length()*0.5;return t}intersect(t){if(this.min.max(t.min),this.max.min(t.max),this.isEmpty())this.makeEmpty();return this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){if(this.isEmpty())return this;return wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wn),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}var wn=[new F,new F,new F,new F,new F,new F,new F,new F],cn=new F,zs=new ii,Ai=new F,Ri=new F,Ci=new F,On=new F,Bn=new F,Wn=new F,ss=new F,ks=new F,Gs=new F,Xn=new F;function ta(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){Xn.fromArray(t,r);let o=s.x*Math.abs(Xn.x)+s.y*Math.abs(Xn.y)+s.z*Math.abs(Xn.z),l=e.dot(Xn),c=n.dot(Xn),d=i.dot(Xn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var be=new F,Hs=new Mt,Eu=0;class hn extends In{constructor(t,e,n=!1){super();if(Array.isArray(t))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Eu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hs.fromBufferAttribute(this,e),Hs.applyMatrix3(t),this.setXY(e,Hs.x,Hs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];if(this.normalized)n=Ni(n,this.array);return n}setComponent(t,e,n){if(this.normalized)n=ze(n,this.array);return this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];if(this.normalized)e=Ni(e,this.array);return e}setX(t,e){if(this.normalized)e=ze(e,this.array);return this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];if(this.normalized)e=Ni(e,this.array);return e}setY(t,e){if(this.normalized)e=ze(e,this.array);return this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];if(this.normalized)e=Ni(e,this.array);return e}setZ(t,e){if(this.normalized)e=ze(e,this.array);return this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];if(this.normalized)e=Ni(e,this.array);return e}setW(t,e){if(this.normalized)e=ze(e,this.array);return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){if(t*=this.itemSize,this.normalized)e=ze(e,this.array),n=ze(n,this.array);return this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){if(t*=this.itemSize,this.normalized)e=ze(e,this.array),n=ze(n,this.array),i=ze(i,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t*=this.itemSize,this.normalized)e=ze(e,this.array),n=ze(n,this.array),i=ze(i,this.array),s=ze(s,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Mr extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ee extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}}var Tu=new ii,rs=new F,ea=new F;class Hn{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;if(e!==void 0)n.copy(e);else Tu.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);if(e.copy(t),n>this.radius*this.radius)e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center);return e}getBoundingBox(t){if(this.isEmpty())return t.makeEmpty(),t;return t.set(this.center,this.center),t.expandByScalar(this.radius),t}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rs.subVectors(t,this.center);let e=rs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*0.5;this.center.addScaledVector(rs,i/n),this.radius+=i}return this}union(t){if(t.isEmpty())return this;if(this.isEmpty())return this.copy(t),this;if(this.center.equals(t.center)===!0)this.radius=Math.max(this.radius,t.radius);else ea.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rs.copy(t.center).add(ea)),this.expandByPoint(rs.copy(t.center).sub(ea));return this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}var wu=0,$e=new de,na=new Ge,Ii=new F,qe=new ii,as=new ii,Ae=new F;class Ce extends In{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){if(Array.isArray(t))this.index=new(($h(t))?Mr:Sr)(t,1);else this.index=t;return this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;if(e!==void 0)e.applyMatrix4(t),e.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new Ft().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(t),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,n){return $e.makeTranslation(t,e,n),this.applyMatrix4($e),this}scale(t,e,n){return $e.makeScale(t,e,n),this.applyMatrix4($e),this}lookAt(t){return na.lookAt(t),na.updateMatrix(),this.applyMatrix4(na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ee(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}if(t.length>e.count)Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");e.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new ii;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];if(qe.setFromBufferAttribute(s),this.morphTargetsRelative)Ae.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Ae);else this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new Hn;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let a=e[s];if(as.setFromBufferAttribute(a),this.morphTargetsRelative)Ae.addVectors(qe.min,as.min),qe.expandByPoint(Ae),Ae.addVectors(qe.max,as.max),qe.expandByPoint(Ae);else qe.expandByPoint(as.min),qe.expandByPoint(as.max)}qe.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)Ae.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ae));if(e)for(let s=0,r=e.length;s<r;s++){let a=e[s],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++){if(Ae.fromBufferAttribute(a,l),o)Ii.fromBufferAttribute(t,l),Ae.add(Ii);i=Math.max(i,n.distanceToSquared(Ae))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:n,normal:i,uv:s}=e,r=this.getAttribute("tangent");if(r===void 0||r.count!==n.count)r=new hn(new Float32Array(4*n.count),4),this.setAttribute("tangent",r);let a=[],o=[];for(let C=0;C<n.count;C++)a[C]=new F,o[C]=new F;let l=new F,c=new F,d=new F,p=new Mt,h=new Mt,u=new Mt,g=new F,x=new F;function m(C,S,E){l.fromBufferAttribute(n,C),c.fromBufferAttribute(n,S),d.fromBufferAttribute(n,E),p.fromBufferAttribute(s,C),h.fromBufferAttribute(s,S),u.fromBufferAttribute(s,E),c.sub(l),d.sub(l),h.sub(p),u.sub(p);let Z=1/(h.x*u.y-u.x*h.y);if(!isFinite(Z))return;g.copy(c).multiplyScalar(u.y).addScaledVector(d,-h.y).multiplyScalar(Z),x.copy(d).multiplyScalar(h.x).addScaledVector(c,-u.x).multiplyScalar(Z),a[C].add(g),a[S].add(g),a[E].add(g),o[C].add(x),o[S].add(x),o[E].add(x)}let f=this.groups;if(f.length===0)f=[{start:0,count:t.count}];for(let C=0,S=f.length;C<S;++C){let E=f[C],{start:Z,count:O}=E;for(let B=Z,et=Z+O;B<et;B+=3)m(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let R=new F,A=new F,v=new F,T=new F;function w(C){v.fromBufferAttribute(i,C),T.copy(v);let S=a[C];R.copy(S),R.sub(v.multiplyScalar(v.dot(S))).normalize(),A.crossVectors(T,S);let Z=A.dot(o[C])<0?-1:1;r.setXYZW(C,R.x,R.y,R.z,Z)}for(let C=0,S=f.length;C<S;++C){let E=f[C],{start:Z,count:O}=E;for(let B=Z,et=Z+O;B<et;B+=3)w(t.getX(B+0)),w(t.getX(B+1)),w(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,h=n.count;p<h;p++)n.setXYZ(p,0,0,0);let i=new F,s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,d=new F;if(t)for(let p=0,h=t.count;p<h;p+=3){let u=t.getX(p+0),g=t.getX(p+1),x=t.getX(p+2);i.fromBufferAttribute(e,u),s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),c.subVectors(r,s),d.subVectors(i,s),c.cross(d),a.fromBufferAttribute(n,u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),a.add(c),o.add(c),l.add(c),n.setXYZ(u,a.x,a.y,a.z),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let p=0,h=e.count;p<h;p+=3)i.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),r.fromBufferAttribute(e,p+2),c.subVectors(r,s),d.subVectors(i,s),c.cross(d),n.setXYZ(p+0,c.x,c.y,c.z),n.setXYZ(p+1,c.x,c.y,c.z),n.setXYZ(p+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(a,o){let{array:l,itemSize:c,normalized:d}=a,p=new l.constructor(o.length*c),h=0,u=0;for(let g=0,x=o.length;g<x;g++){if(a.isInterleavedBufferAttribute)h=o[g]*a.data.stride+a.offset;else h=o[g]*c;for(let m=0;m<c;m++)p[u++]=l[h++]}return new hn(p,c,d)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new Ce,n=this.index.array,i=this.attributes;for(let a in i){let o=i[a],l=t(o,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let o=[],l=s[a];for(let c=0,d=l.length;c<d;c++){let p=l[c],h=t(p,n);o.push(h)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,o=r.length;a<o;a++){let l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0)t.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let l in o)if(o[l]!==void 0)t[l]=o[l];return t}t.data={attributes:{}};let e=this.index;if(e!==null)t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)};let n=this.attributes;for(let o in n){let l=n[o];t.data.attributes[o]=l.toJSON(t.data)}let i={},s=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],c=[];for(let d=0,p=l.length;d<p;d++){let h=l[d];c.push(h.toJSON(t.data))}if(c.length>0)i[o]=c,s=!0}if(s)t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)t.data.groups=JSON.parse(JSON.stringify(r));let a=this.boundingSphere;if(a!==null)t.data.boundingSphere=a.toJSON();return t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;if(n!==null)this.setIndex(n.clone());let i=t.attributes;for(let l in i){let c=i[l];this.setAttribute(l,c.clone(e))}let s=t.morphAttributes;for(let l in s){let c=[],d=s[l];for(let p=0,h=d.length;p<h;p++)c.push(d[p].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,c=r.length;l<c;l++){let d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;if(a!==null)this.boundingBox=a.clone();let o=t.boundingSphere;if(o!==null)this.boundingSphere=o.clone();return this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var ia=new F,Au=new F,Ru=new Ft;class Ke{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=ia.subVectors(n,e).cross(Au.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(ia),s=this.normal.dot(i);if(s===0){if(this.distanceToPoint(t.start)===0)return e.copy(t.start);return null}let r=-(t.start.dot(this.normal)+this.constant)/s;if(n===!0&&(r<0||r>1))return null;return e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ru.getNormalMatrix(t),i=this.coplanarPoint(ia).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}var Cu=0;class si extends In{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){if(this._alphaTest>0!==t>0)this.version++;this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t===void 0)return;for(let e in t){let n=t[e];if(n===void 0){Nt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Nt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector2&&(n&&n.isVector2)||i&&i.isEuler&&(n&&n.isEuler)||i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(e)t={textures:{},images:{}};let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid;if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)n.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)n.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(t).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(t).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(t).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(t).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(t).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(t).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(t).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(t).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(t).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(t).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(t).uuid;if(this.attenuationDistance!==void 0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)n.clippingPlanes=this.clippingPlanes.map((s)=>s.toJSON());if(this.rotation!==void 0)n.rotation=this.rotation;if(this.depthPacking!==void 0)n.depthPacking=this.depthPacking;if(this.linewidth!==void 0)n.linewidth=this.linewidth;if(this.linecap!==void 0)n.linecap=this.linecap;if(this.linejoin!==void 0)n.linejoin=this.linejoin;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.wireframe!==void 0)n.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)n.flatShading=this.flatShading;if(this.fog!==void 0)n.fog=this.fog;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let a in s){let o=s[a];delete o.metadata,r.push(o)}return r}if(e){let s=i(t.textures),r=i(t.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}fromJSON(t,e){if(t.uuid!==void 0)this.uuid=t.uuid;if(t.name!==void 0)this.name=t.name;if(t.color!==void 0&&this.color!==void 0)this.color.setHex(t.color);if(t.roughness!==void 0)this.roughness=t.roughness;if(t.metalness!==void 0)this.metalness=t.metalness;if(t.sheen!==void 0)this.sheen=t.sheen;if(t.sheenColor!==void 0)this.sheenColor=new Qt().setHex(t.sheenColor);if(t.sheenRoughness!==void 0)this.sheenRoughness=t.sheenRoughness;if(t.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(t.emissive);if(t.specular!==void 0&&this.specular!==void 0)this.specular.setHex(t.specular);if(t.specularIntensity!==void 0)this.specularIntensity=t.specularIntensity;if(t.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(t.specularColor);if(t.shininess!==void 0)this.shininess=t.shininess;if(t.clearcoat!==void 0)this.clearcoat=t.clearcoat;if(t.clearcoatRoughness!==void 0)this.clearcoatRoughness=t.clearcoatRoughness;if(t.dispersion!==void 0)this.dispersion=t.dispersion;if(t.retroreflectivity!==void 0)this.retroreflectivity=t.retroreflectivity;if(t.iridescence!==void 0)this.iridescence=t.iridescence;if(t.iridescenceIOR!==void 0)this.iridescenceIOR=t.iridescenceIOR;if(t.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=t.iridescenceThicknessRange;if(t.transmission!==void 0)this.transmission=t.transmission;if(t.thickness!==void 0)this.thickness=t.thickness;if(t.attenuationDistance!==void 0)this.attenuationDistance=t.attenuationDistance;if(t.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(t.attenuationColor);if(t.anisotropy!==void 0)this.anisotropy=t.anisotropy;if(t.anisotropyRotation!==void 0)this.anisotropyRotation=t.anisotropyRotation;if(t.fog!==void 0)this.fog=t.fog;if(t.flatShading!==void 0)this.flatShading=t.flatShading;if(t.blending!==void 0)this.blending=t.blending;if(t.combine!==void 0)this.combine=t.combine;if(t.side!==void 0)this.side=t.side;if(t.shadowSide!==void 0)this.shadowSide=t.shadowSide;if(t.opacity!==void 0)this.opacity=t.opacity;if(t.transparent!==void 0)this.transparent=t.transparent;if(t.alphaTest!==void 0)this.alphaTest=t.alphaTest;if(t.alphaHash!==void 0)this.alphaHash=t.alphaHash;if(t.depthFunc!==void 0)this.depthFunc=t.depthFunc;if(t.depthTest!==void 0)this.depthTest=t.depthTest;if(t.depthWrite!==void 0)this.depthWrite=t.depthWrite;if(t.colorWrite!==void 0)this.colorWrite=t.colorWrite;if(t.clippingPlanes!==void 0)this.clippingPlanes=t.clippingPlanes.map((n)=>new Ke().fromJSON(n));if(t.clipIntersection!==void 0)this.clipIntersection=t.clipIntersection;if(t.clipShadows!==void 0)this.clipShadows=t.clipShadows;if(t.depthPacking!==void 0)this.depthPacking=t.depthPacking;if(t.blendSrc!==void 0)this.blendSrc=t.blendSrc;if(t.blendDst!==void 0)this.blendDst=t.blendDst;if(t.blendEquation!==void 0)this.blendEquation=t.blendEquation;if(t.blendSrcAlpha!==void 0)this.blendSrcAlpha=t.blendSrcAlpha;if(t.blendDstAlpha!==void 0)this.blendDstAlpha=t.blendDstAlpha;if(t.blendEquationAlpha!==void 0)this.blendEquationAlpha=t.blendEquationAlpha;if(t.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(t.blendColor);if(t.blendAlpha!==void 0)this.blendAlpha=t.blendAlpha;if(t.stencilWriteMask!==void 0)this.stencilWriteMask=t.stencilWriteMask;if(t.stencilFunc!==void 0)this.stencilFunc=t.stencilFunc;if(t.stencilRef!==void 0)this.stencilRef=t.stencilRef;if(t.stencilFuncMask!==void 0)this.stencilFuncMask=t.stencilFuncMask;if(t.stencilFail!==void 0)this.stencilFail=t.stencilFail;if(t.stencilZFail!==void 0)this.stencilZFail=t.stencilZFail;if(t.stencilZPass!==void 0)this.stencilZPass=t.stencilZPass;if(t.stencilWrite!==void 0)this.stencilWrite=t.stencilWrite;if(t.wireframe!==void 0)this.wireframe=t.wireframe;if(t.wireframeLinewidth!==void 0)this.wireframeLinewidth=t.wireframeLinewidth;if(t.wireframeLinecap!==void 0)this.wireframeLinecap=t.wireframeLinecap;if(t.wireframeLinejoin!==void 0)this.wireframeLinejoin=t.wireframeLinejoin;if(t.rotation!==void 0)this.rotation=t.rotation;if(t.linewidth!==void 0)this.linewidth=t.linewidth;if(t.linecap!==void 0)this.linecap=t.linecap;if(t.linejoin!==void 0)this.linejoin=t.linejoin;if(t.dashSize!==void 0)this.dashSize=t.dashSize;if(t.gapSize!==void 0)this.gapSize=t.gapSize;if(t.scale!==void 0)this.scale=t.scale;if(t.polygonOffset!==void 0)this.polygonOffset=t.polygonOffset;if(t.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=t.polygonOffsetFactor;if(t.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=t.polygonOffsetUnits;if(t.dithering!==void 0)this.dithering=t.dithering;if(t.alphaToCoverage!==void 0)this.alphaToCoverage=t.alphaToCoverage;if(t.premultipliedAlpha!==void 0)this.premultipliedAlpha=t.premultipliedAlpha;if(t.forceSinglePass!==void 0)this.forceSinglePass=t.forceSinglePass;if(t.allowOverride!==void 0)this.allowOverride=t.allowOverride;if(t.visible!==void 0)this.visible=t.visible;if(t.toneMapped!==void 0)this.toneMapped=t.toneMapped;if(t.userData!==void 0)this.userData=t.userData;if(t.vertexColors!==void 0)if(typeof t.vertexColors==="number")this.vertexColors=t.vertexColors>0;else this.vertexColors=t.vertexColors;if(t.size!==void 0)this.size=t.size;if(t.sizeAttenuation!==void 0)this.sizeAttenuation=t.sizeAttenuation;if(t.map!==void 0)this.map=e[t.map]||null;if(t.matcap!==void 0)this.matcap=e[t.matcap]||null;if(t.alphaMap!==void 0)this.alphaMap=e[t.alphaMap]||null;if(t.bumpMap!==void 0)this.bumpMap=e[t.bumpMap]||null;if(t.bumpScale!==void 0)this.bumpScale=t.bumpScale;if(t.normalMap!==void 0)this.normalMap=e[t.normalMap]||null;if(t.normalMapType!==void 0)this.normalMapType=t.normalMapType;if(t.normalScale!==void 0){let n=t.normalScale;if(Array.isArray(n)===!1)n=[n,n];this.normalScale=new Mt().fromArray(n)}if(t.displacementMap!==void 0)this.displacementMap=e[t.displacementMap]||null;if(t.displacementScale!==void 0)this.displacementScale=t.displacementScale;if(t.displacementBias!==void 0)this.displacementBias=t.displacementBias;if(t.roughnessMap!==void 0)this.roughnessMap=e[t.roughnessMap]||null;if(t.metalnessMap!==void 0)this.metalnessMap=e[t.metalnessMap]||null;if(t.emissiveMap!==void 0)this.emissiveMap=e[t.emissiveMap]||null;if(t.emissiveIntensity!==void 0)this.emissiveIntensity=t.emissiveIntensity;if(t.specularMap!==void 0)this.specularMap=e[t.specularMap]||null;if(t.specularIntensityMap!==void 0)this.specularIntensityMap=e[t.specularIntensityMap]||null;if(t.specularColorMap!==void 0)this.specularColorMap=e[t.specularColorMap]||null;if(t.envMap!==void 0)this.envMap=e[t.envMap]||null;if(t.envMapRotation!==void 0)this.envMapRotation.fromArray(t.envMapRotation);if(t.envMapIntensity!==void 0)this.envMapIntensity=t.envMapIntensity;if(t.reflectivity!==void 0)this.reflectivity=t.reflectivity;if(t.refractionRatio!==void 0)this.refractionRatio=t.refractionRatio;if(t.lightMap!==void 0)this.lightMap=e[t.lightMap]||null;if(t.lightMapIntensity!==void 0)this.lightMapIntensity=t.lightMapIntensity;if(t.aoMap!==void 0)this.aoMap=e[t.aoMap]||null;if(t.aoMapIntensity!==void 0)this.aoMapIntensity=t.aoMapIntensity;if(t.gradientMap!==void 0)this.gradientMap=e[t.gradientMap]||null;if(t.clearcoatMap!==void 0)this.clearcoatMap=e[t.clearcoatMap]||null;if(t.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null;if(t.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null;if(t.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new Mt().fromArray(t.clearcoatNormalScale);if(t.iridescenceMap!==void 0)this.iridescenceMap=e[t.iridescenceMap]||null;if(t.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null;if(t.transmissionMap!==void 0)this.transmissionMap=e[t.transmissionMap]||null;if(t.thicknessMap!==void 0)this.thicknessMap=e[t.thicknessMap]||null;if(t.anisotropyMap!==void 0)this.anisotropyMap=e[t.anisotropyMap]||null;if(t.sheenColorMap!==void 0)this.sheenColorMap=e[t.sheenColorMap]||null;if(t.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){if(t===!0)this.version++}}var An=new F,sa=new F,Vs=new F,Ws=new F;class As{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);if(n<0)return e.copy(this.origin);return e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=An.subVectors(t,this.origin).dot(this.direction);if(e<0)return this.origin.distanceToSquared(t);return An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t)}distanceSqToSegment(t,e,n,i){sa.copy(t).add(e).multiplyScalar(0.5),Vs.copy(e).sub(t).normalize(),Ws.copy(this.origin).sub(sa);let s=t.distanceTo(e)*0.5,r=-this.direction.dot(Vs),a=Ws.dot(this.direction),o=-Ws.dot(Vs),l=Ws.lengthSq(),c=Math.abs(1-r*r),d,p,h,u;if(c>0)if(d=r*o-a,p=r*a-o,u=s*c,d>=0)if(p>=-u)if(p<=u){let g=1/c;d*=g,p*=g,h=d*(d+r*p+2*a)+p*(r*d+p+2*o)+l}else p=s,d=Math.max(0,-(r*p+a)),h=-d*d+p*(p+2*o)+l;else p=-s,d=Math.max(0,-(r*p+a)),h=-d*d+p*(p+2*o)+l;else if(p<=-u)d=Math.max(0,-(-r*s+a)),p=d>0?-s:Math.min(Math.max(-s,-o),s),h=-d*d+p*(p+2*o)+l;else if(p<=u)d=0,p=Math.min(Math.max(-s,-o),s),h=p*(p+2*o)+l;else d=Math.max(0,-(r*s+a)),p=d>0?s:Math.min(Math.max(-s,-o),s),h=-d*d+p*(p+2*o)+l;else p=r>0?-s:s,d=Math.max(0,-(r*p+a)),h=-d*d+p*(p+2*o)+l;if(n)n.copy(this.origin).addScaledVector(this.direction,d);if(i)i.copy(sa).addScaledVector(Vs,p);return h}intersectSphere(t,e){if(t.radius<0)return null;An.subVectors(t.center,this.origin);let n=An.dot(this.direction),i=An.dot(An)-n*n,s=t.radius*t.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,o=n+r;if(o<0)return null;if(a<0)return this.at(o,e);return this.at(a,e)}intersectsSphere(t){if(t.radius<0)return!1;return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0){if(t.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);if(n===null)return null;return this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);if(e===0)return!0;if(t.normal.dot(this.direction)*e<0)return!0;return!1}intersectBox(t,e){let n,i,s,r,a,o,l=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,p=this.origin;if(l>=0)n=(t.min.x-p.x)*l,i=(t.max.x-p.x)*l;else n=(t.max.x-p.x)*l,i=(t.min.x-p.x)*l;if(c>=0)s=(t.min.y-p.y)*c,r=(t.max.y-p.y)*c;else s=(t.max.y-p.y)*c,r=(t.min.y-p.y)*c;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(d>=0)a=(t.min.z-p.z)*d,o=(t.max.z-p.z)*d;else a=(t.max.z-p.z)*d,o=(t.min.z-p.z)*d;if(n>o||a>i)return null;if(a>n||n!==n)n=a;if(o<i||i!==i)i=o;if(i<0)return null;return this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,n,i,s){let r=this.origin,a=this.direction,{x:o,y:l,z:c}=a,d=t.x-r.x,p=t.y-r.y,h=t.z-r.z,u=e.x-r.x,g=e.y-r.y,x=e.z-r.z,m=n.x-r.x,f=n.y-r.y,R=n.z-r.z,A=Math.abs(o),v=Math.abs(l),T=Math.abs(c),w,C,S,E,Z,O,B,et,D,W,nt,H;if(A>=v&&A>=T)if(S=o,O=d,D=u,H=m,o>=0)w=l,C=c,E=p,Z=h,B=g,et=x,W=f,nt=R;else w=c,C=l,E=h,Z=p,B=x,et=g,W=R,nt=f;else if(v>=T)if(S=l,O=p,D=g,H=f,l>=0)w=c,C=o,E=h,Z=d,B=x,et=u,W=R,nt=m;else w=o,C=c,E=d,Z=h,B=u,et=x,W=m,nt=R;else if(S=c,O=h,D=x,H=R,c>=0)w=o,C=l,E=d,Z=p,B=u,et=g,W=m,nt=f;else w=l,C=o,E=p,Z=d,B=g,et=u,W=f,nt=m;if(S===0)return null;let lt=w/S,Q=C/S,it=1/S,at=E-lt*O,It=Z-Q*O,Pt=B-lt*D,Kt=et-Q*D,Ot=W-lt*H,J=nt-Q*H,ot=Ot*Kt-J*Pt,ct=at*J-It*Ot,Tt=Pt*It-Kt*at;if(i){if(ot<0||ct<0||Tt<0)return null}else if((ot<0||ct<0||Tt<0)&&(ot>0||ct>0||Tt>0))return null;let Lt=ot+ct+Tt;if(Lt===0)return null;let wt=it*(ot*O+ct*D+Tt*H);if(Lt>0?wt<0:wt>0)return null;return this.at(wt/Lt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qi extends si{constructor(t){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}var Al=new de,qn=new As,Xs=new Hn,Rl=new F,qs=new F,Ys=new F,Zs=new F,ra=new F,Js=new F,Cl=new F,$s=new F;class Ie extends Ge{constructor(t=new Ce,e=new qi){super();this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){if(super.copy(t,e),t.morphTargetInfluences!==void 0)this.morphTargetInfluences=t.morphTargetInfluences.slice();if(t.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary);return this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Js.set(0,0,0);for(let o=0,l=s.length;o<l;o++){let c=a[o],d=s[o];if(c===0)continue;if(ra.fromBufferAttribute(d,t),r)Js.addScaledVector(ra,c);else Js.addScaledVector(ra.sub(e),c)}e.add(Js)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(Xs.copy(n.boundingSphere),Xs.applyMatrix4(s),qn.copy(t.ray).recast(t.near),Xs.containsPoint(qn.origin)===!1){if(qn.intersectSphere(Xs,Rl)===null)return;if(qn.origin.distanceToSquared(Rl)>(t.far-t.near)**2)return}if(Al.copy(s).invert(),qn.copy(t.ray).applyMatrix4(Al),n.boundingBox!==null){if(qn.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(t,e,qn)}_computeIntersections(t,e,n){let i,s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,{groups:p,drawRange:h}=s;if(a!==null)if(Array.isArray(r))for(let u=0,g=p.length;u<g;u++){let x=p[u],m=r[x.materialIndex],f=Math.max(x.start,h.start),R=Math.min(a.count,Math.min(x.start+x.count,h.start+h.count));for(let A=f,v=R;A<v;A+=3){let T=a.getX(A),w=a.getX(A+1),C=a.getX(A+2);if(i=Ks(this,m,t,n,l,c,d,T,w,C),i)i.faceIndex=Math.floor(A/3),i.face.materialIndex=x.materialIndex,e.push(i)}}else{let u=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let x=u,m=g;x<m;x+=3){let f=a.getX(x),R=a.getX(x+1),A=a.getX(x+2);if(i=Ks(this,r,t,n,l,c,d,f,R,A),i)i.faceIndex=Math.floor(x/3),e.push(i)}}else if(o!==void 0)if(Array.isArray(r))for(let u=0,g=p.length;u<g;u++){let x=p[u],m=r[x.materialIndex],f=Math.max(x.start,h.start),R=Math.min(o.count,Math.min(x.start+x.count,h.start+h.count));for(let A=f,v=R;A<v;A+=3){let T=A,w=A+1,C=A+2;if(i=Ks(this,m,t,n,l,c,d,T,w,C),i)i.faceIndex=Math.floor(A/3),i.face.materialIndex=x.materialIndex,e.push(i)}}else{let u=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let x=u,m=g;x<m;x+=3){let f=x,R=x+1,A=x+2;if(i=Ks(this,r,t,n,l,c,d,f,R,A),i)i.faceIndex=Math.floor(x/3),e.push(i)}}}}function Iu(t,e,n,i,s,r,a,o){let l;if(e.side===1)l=i.intersectTriangle(a,r,s,!0,o);else l=i.intersectTriangle(s,r,a,e.side===0,o);if(l===null)return null;$s.copy(o),$s.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo($s);if(c<n.near||c>n.far)return null;return{distance:c,point:$s.clone(),object:t}}function Ks(t,e,n,i,s,r,a,o,l,c){t.getVertexPosition(o,qs),t.getVertexPosition(l,Ys),t.getVertexPosition(c,Zs);let d=Iu(t,e,n,i,qs,Ys,Zs,Cl);if(d){let p=new F;if(Qe.getBarycoord(Cl,qs,Ys,Zs,p),s)d.uv=Qe.getInterpolatedAttribute(s,o,l,c,p,new Mt);if(r)d.uv1=Qe.getInterpolatedAttribute(r,o,l,c,p,new Mt);if(a){if(d.normal=Qe.getInterpolatedAttribute(a,o,l,c,p,new F),d.normal.dot(i.direction)>0)d.normal.multiplyScalar(-1)}let h={a:o,b:l,c,normal:new F,materialIndex:0};Qe.getNormal(qs,Ys,Zs,h.normal),d.face=h,d.barycoord=p}return d}class vo extends Fe{constructor(t=null,e=1,n=1,i,s,r,a,o,l=1003,c=1003,d,p){super(null,r,a,o,l,c,i,s,d,p);this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var Yn=new Hn,Pu=new Mt(0.5,0.5),Qs=new F;class Yi{constructor(t=new Ke,e=new Ke,n=new Ke,i=new Ke,s=new Ke,r=new Ke){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2000,n=!1){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],d=s[5],p=s[6],h=s[7],u=s[8],g=s[9],x=s[10],m=s[11],f=s[12],R=s[13],A=s[14],v=s[15];if(i[0].setComponents(l-r,h-c,m-u,v-f).normalize(),i[1].setComponents(l+r,h+c,m+u,v+f).normalize(),i[2].setComponents(l+a,h+d,m+g,v+R).normalize(),i[3].setComponents(l-a,h-d,m-g,v-R).normalize(),n)i[4].setComponents(o,p,x,A).normalize(),i[5].setComponents(l-o,h-p,m-x,v-A).normalize();else if(i[4].setComponents(l-o,h-p,m-x,v-A).normalize(),e===2000)i[5].setComponents(l+o,h+p,m+x,v+A).normalize();else if(e===2001)i[5].setComponents(o,p,x,A).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0){if(t.boundingSphere===null)t.computeBoundingSphere();Yn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld)}else{let e=t.geometry;if(e.boundingSphere===null)e.computeBoundingSphere();Yn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(t){Yn.center.set(0,0,0);let e=Pu.distanceTo(t.center);return Yn.radius=0.7071067811865476+e,Yn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Qs.x=i.normal.x>0?t.max.x:t.min.x,Qs.y=i.normal.y>0?t.max.y:t.min.y,Qs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rs extends si{constructor(t){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}var rr=new F,ar=new F,Il=new de,os=new As,js=new Hn,aa=new F,Pl=new F;class br extends Ge{constructor(t=new Ce,e=new Rs){super();this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)rr.fromBufferAttribute(e,i-1),ar.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=rr.distanceTo(ar);t.setAttribute("lineDistance",new Ee(n,1))}else Nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(js.copy(n.boundingSphere),js.applyMatrix4(i),js.radius+=s,t.ray.intersectsSphere(js)===!1)return;Il.copy(i).invert(),os.copy(t.ray).applyMatrix4(Il);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=this.isLineSegments?2:1,c=n.index,p=n.attributes.position;if(c!==null){let h=Math.max(0,r.start),u=Math.min(c.count,r.start+r.count);for(let g=h,x=u-1;g<x;g+=l){let m=c.getX(g),f=c.getX(g+1),R=tr(this,t,os,o,m,f,g);if(R)e.push(R)}if(this.isLineLoop){let g=c.getX(u-1),x=c.getX(h),m=tr(this,t,os,o,g,x,u-1);if(m)e.push(m)}}else{let h=Math.max(0,r.start),u=Math.min(p.count,r.start+r.count);for(let g=h,x=u-1;g<x;g+=l){let m=tr(this,t,os,o,g,g+1,g);if(m)e.push(m)}if(this.isLineLoop){let g=tr(this,t,os,o,u-1,h,u-1);if(g)e.push(g)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function tr(t,e,n,i,s,r,a){let o=t.geometry.attributes.position;if(rr.fromBufferAttribute(o,s),ar.fromBufferAttribute(o,r),n.distanceSqToSegment(rr,ar,aa,Pl)>i)return;aa.applyMatrix4(t.matrixWorld);let c=e.ray.origin.distanceTo(aa);if(c<e.near||c>e.far)return;return{distance:c,point:Pl.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}class Er extends Fe{constructor(t=[],e=301,n,i,s,r,a,o,l,c){super(t,e,n,i,s,r,a,o,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ri extends Fe{constructor(t,e,n=1014,i,s,r,a=1003,o=1003,l,c=1026,d=1){if(c!==1026&&c!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:t,height:e,depth:d};super(p,i,s,r,a,o,c,n,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ms(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class yo extends ri{constructor(t,e=1014,n=301,i,s,r=1003,a=1003,o,l=1026){let c={width:t,height:t,depth:1},d=[c,c,c,c,c,c];super(t,t,e,n,i,s,r,a,o,l);this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Tr extends Fe{constructor(t=null){super();this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Zi extends Ce{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let o=[],l=[],c=[],d=[],p=0,h=0;u("z","y","x",-1,-1,n,e,t,r,s,0),u("z","y","x",1,-1,n,e,-t,r,s,1),u("x","z","y",1,1,t,n,e,i,r,2),u("x","z","y",1,-1,t,n,-e,i,r,3),u("x","y","z",1,-1,t,e,n,i,s,4),u("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(o),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(c,3)),this.setAttribute("uv",new Ee(d,2));function u(g,x,m,f,R,A,v,T,w,C,S){let E=A/w,Z=v/C,O=A/2,B=v/2,et=T/2,D=w+1,W=C+1,nt=0,H=0,lt=new F;for(let Q=0;Q<W;Q++){let it=Q*Z-B;for(let at=0;at<D;at++){let It=at*E-O;lt[g]=It*f,lt[x]=it*R,lt[m]=et,l.push(lt.x,lt.y,lt.z),lt[g]=0,lt[x]=0,lt[m]=T>0?1:-1,c.push(lt.x,lt.y,lt.z),d.push(at/w),d.push(1-Q/C),nt+=1}}for(let Q=0;Q<C;Q++)for(let it=0;it<w;it++){let at=p+it+D*Q,It=p+it+D*(Q+1),Pt=p+(it+1)+D*(Q+1),Kt=p+(it+1)+D*Q;o.push(at,It,Kt),o.push(It,Pt,Kt),H+=6}a.addGroup(h,H,S),h+=H,p+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class en{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Nt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,s=n.length,r;if(e)r=e;else r=t*n[s-1];let a=0,o=s-1,l;while(a<=o)if(i=Math.floor(a+(o-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)o=i-1;else{o=i;break}if(i=o,n[i]===r)return i/(s-1);let c=n[i],p=n[i+1]-c,h=(r-c)/p;return(i+h)/(s-1)}getTangent(t,e){let i=t-0.0001,s=t+0.0001;if(i<0)i=0;if(s>1)s=1;let r=this.getPoint(i),a=this.getPoint(s),o=e||(r.isVector2?new Mt:new F);return o.copy(a).sub(r).normalize(),o}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new F,i=[],s=[],r=[],a=new F,o=new de;for(let h=0;h<=t;h++){let u=h/t;i[h]=this.getTangentAt(u,new F)}s[0]=new F,r[0]=new F;let l=Number.MAX_VALUE,c=Math.abs(i[0].x),d=Math.abs(i[0].y),p=Math.abs(i[0].z);if(c<=l)l=c,n.set(1,0,0);if(d<=l)l=d,n.set(0,1,0);if(p<=l)n.set(0,0,1);a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let h=1;h<=t;h++){if(s[h]=s[h-1].clone(),r[h]=r[h-1].clone(),a.crossVectors(i[h-1],i[h]),a.length()>Number.EPSILON){a.normalize();let u=Math.acos(Vt(i[h-1].dot(i[h]),-1,1));s[h].applyMatrix4(o.makeRotationAxis(a,u))}r[h].crossVectors(i[h],s[h])}if(e===!0){let h=Math.acos(Vt(s[0].dot(s[t]),-1,1));if(h/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0)h=-h;for(let u=1;u<=t;u++)s[u].applyMatrix4(o.makeRotationAxis(i[u],h*u)),r[u].crossVectors(i[u],s[u])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Cs extends en{constructor(t=0,e=0,n=1,i=1,s=0,r=Math.PI*2,a=!1,o=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=o}getPoint(t,e=new Mt){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;while(s<0)s+=i;while(s>i)s-=i;if(s<Number.EPSILON)if(r)s=0;else s=i;if(this.aClockwise===!0&&!r)if(s===i)s=-i;else s=s-i;let a=this.aStartAngle+t*s,o=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=o-this.aX,h=l-this.aY;o=p*c-h*d+this.aX,l=p*d+h*c+this.aY}return n.set(o,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class So extends Cs{constructor(t,e,n,i,s,r){super(t,e,n,n,i,s,r);this.isArcCurve=!0,this.type="ArcCurve"}}function Mo(){let t=0,e=0,n=0,i=0;function s(r,a,o,l){t=r,e=o,n=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,d,p){let h=(a-r)/c-(o-r)/(c+d)+(o-a)/d,u=(o-a)/d-(l-a)/(d+p)+(l-o)/p;h*=d,u*=d,s(a,o,h,u)},calc:function(r){let a=r*r,o=a*r;return t+e*r+n*a+i*o}}}var Ll=new F,Dl=new F,oa=new Mo,la=new Mo,ca=new Mo;class ai extends en{constructor(t=[],e=!1,n="centripetal",i=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new F){let n=e,i=this.points,s=i.length,r=(s-(this.closed?0:1))*t,a=Math.floor(r),o=r-a;if(this.closed)a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s;else if(o===0&&a===s-1)a=s-2,o=1;let l,c;if(this.closed||a>0)l=i[(a-1)%s];else Dl.subVectors(i[0],i[1]).add(i[0]),l=Dl;let d=i[a%s],p=i[(a+1)%s];if(this.closed||a+2<s)c=i[(a+2)%s];else Ll.subVectors(i[s-1],i[s-2]).add(i[s-1]),c=Ll;if(this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?0.5:0.25,u=Math.pow(l.distanceToSquared(d),h),g=Math.pow(d.distanceToSquared(p),h),x=Math.pow(p.distanceToSquared(c),h);if(g<0.0001)g=1;if(u<0.0001)u=g;if(x<0.0001)x=g;oa.initNonuniformCatmullRom(l.x,d.x,p.x,c.x,u,g,x),la.initNonuniformCatmullRom(l.y,d.y,p.y,c.y,u,g,x),ca.initNonuniformCatmullRom(l.z,d.z,p.z,c.z,u,g,x)}else if(this.curveType==="catmullrom")oa.initCatmullRom(l.x,d.x,p.x,c.x,this.tension),la.initCatmullRom(l.y,d.y,p.y,c.y,this.tension),ca.initCatmullRom(l.z,d.z,p.z,c.z,this.tension);return n.set(oa.calc(o),la.calc(o),ca.calc(o)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new F().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Nl(t,e,n,i,s){let r=(i-e)*0.5,a=(s-n)*0.5,o=t*t,l=t*o;return(2*n-2*i+r+a)*l+(-3*n+3*i-2*r-a)*o+r*t+n}function Lu(t,e){let n=1-t;return n*n*e}function Du(t,e){return 2*(1-t)*t*e}function Nu(t,e){return t*t*e}function us(t,e,n,i){return Lu(t,e)+Du(t,n)+Nu(t,i)}function Uu(t,e){let n=1-t;return n*n*n*e}function Fu(t,e){let n=1-t;return 3*n*n*t*e}function Ou(t,e){return 3*(1-t)*t*t*e}function Bu(t,e){return t*t*t*e}function ds(t,e,n,i,s){return Uu(t,e)+Fu(t,n)+Ou(t,i)+Bu(t,s)}class wr extends en{constructor(t=new Mt,e=new Mt,n=new Mt,i=new Mt){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Mt){let n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(ds(t,i.x,s.x,r.x,a.x),ds(t,i.y,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bo extends en{constructor(t=new F,e=new F,n=new F,i=new F){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new F){let n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(ds(t,i.x,s.x,r.x,a.x),ds(t,i.y,s.y,r.y,a.y),ds(t,i.z,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ar extends en{constructor(t=new Mt,e=new Mt){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){let n=e;if(t===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1);return n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Eo extends en{constructor(t=new F,e=new F){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){let n=e;if(t===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1);return n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rr extends en{constructor(t=new Mt,e=new Mt,n=new Mt){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Mt){let n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(us(t,i.x,s.x,r.x),us(t,i.y,s.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class To extends en{constructor(t=new F,e=new F,n=new F){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){let n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(us(t,i.x,s.x,r.x),us(t,i.y,s.y,r.y),us(t,i.z,s.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cr extends en{constructor(t=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){let n=e,i=this.points,s=(i.length-1)*t,r=Math.floor(s),a=s-r,o=i[r===0?r:r-1],l=i[r],c=i[r>i.length-2?i.length-1:r+1],d=i[r>i.length-3?i.length-1:r+2];return n.set(Nl(a,o.x,l.x,c.x,d.x),Nl(a,o.y,l.y,c.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Mt().fromArray(i))}return this}}var Ul=Object.freeze({__proto__:null,ArcCurve:So,CatmullRomCurve3:ai,CubicBezierCurve:wr,CubicBezierCurve3:bo,EllipseCurve:Cs,LineCurve:Ar,LineCurve3:Eo,QuadraticBezierCurve:Rr,QuadraticBezierCurve3:To,SplineCurve:Cr});class wo extends en{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ul[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;while(s<i.length){if(i[s]>=n){let r=i[s]-n,a=this.curves[s],o=a.getLength(),l=o===0?0:1-r/o;return a.getPointAt(l,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));if(this.autoClose)e.push(e[0]);return e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let r=s[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,o=r.getPoints(a);for(let l=0;l<o.length;l++){let c=o[l];if(n&&n.equals(c))continue;e.push(c),n=c}}if(this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0]))e.push(e[0]);return e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Ul[i.type]().fromJSON(i))}return this}}class or extends wo{constructor(t){super();if(this.type="Path",this.currentPoint=new Mt,t)this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ar(this.currentPoint.clone(),new Mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new Rr(this.currentPoint.clone(),new Mt(t,e),new Mt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,r){let a=new wr(this.currentPoint.clone(),new Mt(t,e),new Mt(n,i),new Mt(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Cr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,r){let a=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(t+a,e+o,n,i,s,r),this}absarc(t,e,n,i,s,r){return this.absellipse(t,e,n,n,i,s,r),this}ellipse(t,e,n,i,s,r,a,o){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+l,e+c,n,i,s,r,a,o),this}absellipse(t,e,n,i,s,r,a,o){let l=new Cs(t,e,n,i,s,r,a,o);if(this.curves.length>0){let d=l.getPoint(0);if(!d.equals(this.currentPoint))this.lineTo(d.x,d.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class oi extends or{constructor(t){super(t);this.uuid=ni(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new or().fromJSON(i))}return this}}function zu(t,e,n=2){let i=e&&e.length,s=i?e[0]*n:t.length,r=Zc(t,0,s,n,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i)r=Wu(t,e,r,n);if(t.length>80*n){o=t[0],l=t[1];let d=o,p=l;for(let h=n;h<s;h+=n){let u=t[h],g=t[h+1];if(u<o)o=u;if(g<l)l=g;if(u>d)d=u;if(g>p)p=g}c=Math.max(d-o,p-l),c=c!==0?32767/c:0}return ps(r,a,n,o,l,c,0),a}function Zc(t,e,n,i,s){let r;if(s===ed(t,e,n,i)>0)for(let a=e;a<n;a+=i)r=Fl(a/i|0,t[a],t[a+1],r);else for(let a=n-i;a>=e;a-=i)r=Fl(a/i|0,t[a],t[a+1],r);if(r&&zi(r,r.next))gs(r),r=r.next;return r}function Jn(t,e){if(!t)return t;if(!e)e=t;let n=t,i;do if(i=!1,!n.steiner&&(zi(n,n.next)||_e(n.prev,n,n.next)===0)){if(gs(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function ps(t,e,n,i,s,r,a){if(!t)return;if(!a&&r)Ju(t,i,s,r);let o=t;while(t.prev!==t.next){let l=t.prev,c=t.next;if(r?Gu(t,i,s,r):ku(t)){e.push(l.i,t.i,c.i),gs(t),t=c.next,o=c.next;continue}if(t=c,t===o){if(!a)ps(Jn(t),e,n,i,s,r,1);else if(a===1)t=Hu(Jn(t),e),ps(t,e,n,i,s,r,2);else if(a===2)Vu(t,e,n,i,s,r);break}}}function ku(t){let e=t.prev,n=t,i=t.next;if(_e(e,n,i)>=0)return!1;let s=e.x,r=n.x,a=i.x,o=e.y,l=n.y,c=i.y,d=Math.min(s,r,a),p=Math.min(o,l,c),h=Math.max(s,r,a),u=Math.max(o,l,c),g=i.next;while(g!==e){if(g.x>=d&&g.x<=h&&g.y>=p&&g.y<=u&&ls(s,o,r,l,a,c,g.x,g.y)&&_e(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Gu(t,e,n,i){let s=t.prev,r=t,a=t.next;if(_e(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,d=s.y,p=r.y,h=a.y,u=Math.min(o,l,c),g=Math.min(d,p,h),x=Math.max(o,l,c),m=Math.max(d,p,h),f=ua(u,g,e,n,i),R=ua(x,m,e,n,i),{prevZ:A,nextZ:v}=t;while(A&&A.z>=f&&v&&v.z<=R){if(A.x>=u&&A.x<=x&&A.y>=g&&A.y<=m&&A!==s&&A!==a&&ls(o,d,l,p,c,h,A.x,A.y)&&_e(A.prev,A,A.next)>=0)return!1;if(A=A.prevZ,v.x>=u&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&ls(o,d,l,p,c,h,v.x,v.y)&&_e(v.prev,v,v.next)>=0)return!1;v=v.nextZ}while(A&&A.z>=f){if(A.x>=u&&A.x<=x&&A.y>=g&&A.y<=m&&A!==s&&A!==a&&ls(o,d,l,p,c,h,A.x,A.y)&&_e(A.prev,A,A.next)>=0)return!1;A=A.prevZ}while(v&&v.z<=R){if(v.x>=u&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&ls(o,d,l,p,c,h,v.x,v.y)&&_e(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Hu(t,e){let n=t;do{let i=n.prev,s=n.next.next;if(!zi(i,s)&&$c(i,n,n.next,s)&&ms(i,s)&&ms(s,i))e.push(i.i,n.i,s.i),gs(n),gs(n.next),n=t=s;n=n.next}while(n!==t);return Jn(n)}function Vu(t,e,n,i,s,r){let a=t;do{let o=a.next.next;while(o!==a.prev){if(a.i!==o.i&&Qu(a,o)){let l=Kc(a,o);a=Jn(a,a.next),l=Jn(l,l.next),ps(a,e,n,i,s,r,0),ps(l,e,n,i,s,r,0);return}o=o.next}a=a.next}while(a!==t)}function Wu(t,e,n,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:t.length,c=Zc(t,o,l,i,!1);if(c===c.next)c.steiner=!0;s.push(Ku(c))}s.sort(Xu);for(let r=0;r<s.length;r++)n=qu(s[r],n);return n}function Xu(t,e){let n=t.x-e.x;if(n===0){if(n=t.y-e.y,n===0){let i=(t.next.y-t.y)/(t.next.x-t.x),s=(e.next.y-e.y)/(e.next.x-e.x);n=i-s}}return n}function qu(t,e){let n=Yu(t,e);if(!n)return e;let i=Kc(n,t);return Jn(i,i.next),Jn(n,n.next)}function Yu(t,e){let n=e,{x:i,y:s}=t,r=-1/0,a;if(zi(t,n))return n;do{if(zi(t,n.next))return n.next;else if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){let p=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(p<=i&&p>r){if(r=p,a=n.x<n.next.x?n:n.next,p===i)return a}}n=n.next}while(n!==e);if(!a)return null;let o=a,l=a.x,c=a.y,d=1/0;n=a;do{if(i>=n.x&&n.x>=l&&i!==n.x&&Jc(s<c?i:r,s,l,c,s<c?r:i,s,n.x,n.y)){let p=Math.abs(s-n.y)/(i-n.x);if(ms(n,t)&&(p<d||p===d&&(n.x>a.x||n.x===a.x&&Zu(a,n))))a=n,d=p}n=n.next}while(n!==o);return a}function Zu(t,e){return _e(t.prev,t,e.prev)<0&&_e(e.next,t,t.next)<0}function Ju(t,e,n,i){let s=t;do{if(s.z===0)s.z=ua(s.x,s.y,e,n,i);s.prevZ=s.prev,s.nextZ=s.next,s=s.next}while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,$u(s)}function $u(t){let e,n=1;do{let i=t,s;t=null;let r=null;e=0;while(i){e++;let a=i,o=0;for(let c=0;c<n;c++)if(o++,a=a.nextZ,!a)break;let l=n;while(o>0||l>0&&a){if(o!==0&&(l===0||!a||i.z<=a.z))s=i,i=i.nextZ,o--;else s=a,a=a.nextZ,l--;if(r)r.nextZ=s;else t=s;s.prevZ=r,r=s}i=a}r.nextZ=null,n*=2}while(e>1);return t}function ua(t,e,n,i,s){return t=(t-n)*s|0,e=(e-i)*s|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Ku(t){let e=t,n=t;do{if(e.x<n.x||e.x===n.x&&e.y<n.y)n=e;e=e.next}while(e!==t);return n}function Jc(t,e,n,i,s,r,a,o){return(s-a)*(e-o)>=(t-a)*(r-o)&&(t-a)*(i-o)>=(n-a)*(e-o)&&(n-a)*(r-o)>=(s-a)*(i-o)}function ls(t,e,n,i,s,r,a,o){return!(t===a&&e===o)&&Jc(t,e,n,i,s,r,a,o)}function Qu(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!ju(t,e)&&(ms(t,e)&&ms(e,t)&&td(t,e)&&(_e(t.prev,t,e.prev)||_e(t,e.prev,e))||zi(t,e)&&_e(t.prev,t,t.next)>0&&_e(e.prev,e,e.next)>0)}function _e(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function zi(t,e){return t.x===e.x&&t.y===e.y}function $c(t,e,n,i){let s=nr(_e(t,e,n)),r=nr(_e(t,e,i)),a=nr(_e(n,i,t)),o=nr(_e(n,i,e));if(s!==r&&a!==o)return!0;if(s===0&&er(t,n,e))return!0;if(r===0&&er(t,i,e))return!0;if(a===0&&er(n,t,i))return!0;if(o===0&&er(n,e,i))return!0;return!1}function er(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function nr(t){return t>0?1:t<0?-1:0}function ju(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&$c(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function ms(t,e){return _e(t.prev,t,t.next)<0?_e(t,e,t.next)>=0&&_e(t,t.prev,e)>=0:_e(t,e,t.prev)<0||_e(t,t.next,e)<0}function td(t,e){let n=t,i=!1,s=(t.x+e.x)/2,r=(t.y+e.y)/2;do{if(n.y>r!==n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x)i=!i;n=n.next}while(n!==t);return i}function Kc(t,e){let n=da(t.i,t.x,t.y),i=da(e.i,e.x,e.y),s=t.next,r=e.prev;return t.next=e,e.prev=t,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i}function Fl(t,e,n,i){let s=da(t,e,n);if(!i)s.prev=s,s.next=s;else s.next=i.next,s.prev=i,i.next.prev=s,i.next=s;return s}function gs(t){if(t.next.prev=t.prev,t.prev.next=t.next,t.prevZ)t.prevZ.nextZ=t.nextZ;if(t.nextZ)t.nextZ.prevZ=t.prevZ}function da(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ed(t,e,n,i){let s=0;for(let r=e,a=n-i;r<n;r+=i)s+=(t[a]-t[r])*(t[r+1]+t[a+1]),a=r;return s}class Qc{static triangulate(t,e,n=2){return zu(t,e,n)}}class Fi{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*0.5}static isClockWise(t){return Fi.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];Ol(t),Bl(n,t);let r=t.length;e.forEach(Ol);for(let o=0;o<e.length;o++)i.push(r),r+=e[o].length,Bl(n,e[o]);let a=Qc.triangulate(n,i);for(let o=0;o<a.length;o+=3)s.push(a.slice(o,o+3));return s}}function Ol(t){let e=t.length;if(e>2&&t[e-1].equals(t[0]))t.pop()}function Bl(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Is extends Ce{constructor(t=1,e=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,r=e/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,d=t/a,p=e/o,h=[],u=[],g=[],x=[];for(let m=0;m<c;m++){let f=m*p-r;for(let R=0;R<l;R++){let A=R*d-s;u.push(A,-f,0),g.push(0,0,1),x.push(R/a),x.push(1-m/o)}}for(let m=0;m<o;m++)for(let f=0;f<a;f++){let R=f+l*m,A=f+l*(m+1),v=f+1+l*(m+1),T=f+1+l*m;h.push(R,A,T),h.push(A,v,T)}this.setIndex(h),this.setAttribute("position",new Ee(u,3)),this.setAttribute("normal",new Ee(g,3)),this.setAttribute("uv",new Ee(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Is(t.width,t.height,t.widthSegments,t.heightSegments)}}class li extends Ce{constructor(t=new oi([new Mt(0,0.5),new Mt(-0.5,-0.5),new Mt(0.5,-0.5)]),e=12){super();this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],s=[],r=[],a=0,o=0;if(Array.isArray(t)===!1)l(t);else for(let c=0;c<t.length;c++)l(t[c]),this.addGroup(a,o,c),a+=o,o=0;this.setIndex(n),this.setAttribute("position",new Ee(i,3)),this.setAttribute("normal",new Ee(s,3)),this.setAttribute("uv",new Ee(r,2));function l(c){let d=i.length/3,p=c.extractPoints(e),{shape:h,holes:u}=p;if(Fi.isClockWise(h)===!1)h=h.reverse();for(let x=0,m=u.length;x<m;x++){let f=u[x];if(Fi.isClockWise(f)===!0)u[x]=f.reverse()}let g=Fi.triangulateShape(h,u);for(let x=0,m=u.length;x<m;x++){let f=u[x];h=h.concat(f)}for(let x=0,m=h.length;x<m;x++){let f=h[x];i.push(f.x,f.y,0),s.push(0,0,1),r.push(f.x,f.y)}for(let x=0,m=g.length;x<m;x++){let f=g[x],R=f[0]+d,A=f[1]+d,v=f[2]+d;n.push(R,A,v),o+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return nd(e,t)}static fromJSON(t,e){let n=[];for(let i=0,s=t.shapes.length;i<s;i++){let r=e[t.shapes[i]];n.push(r)}return new li(n,t.curveSegments)}}function nd(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){let s=t[n];e.shapes.push(s.uuid)}else e.shapes.push(t.uuid);return e}function ci(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(zl(s))if(s.isRenderTargetTexture)Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null;else e[n][i]=s.clone();else if(Array.isArray(s))if(zl(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function Oe(t){let e={};for(let n=0;n<t.length;n++){let i=ci(t[n]);for(let s in i)e[s]=i[s]}return e}function zl(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function id(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ao(t){let e=t.getRenderTarget();if(e===null)return t.outputColorSpace;if(e.isXRRenderTarget===!0)return e.texture.colorSpace;return Zt.workingColorSpace}var jc={clone:ci,merge:Oe},sd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nn extends si{constructor(t){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sd,this.fragmentShader=rd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0)this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ci(t.uniforms),this.uniformsGroups=id(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)e.uniforms[i]={type:"t",value:r.toJSON(t).uuid};else if(r&&r.isColor)e.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)e.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)e.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)e.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)e.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)e.uniforms[i]={type:"m4",value:r.toArray()};else e.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)e.defines=this.defines;e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)e.extensions=n;return e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Qt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Mt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new F().fromArray(i.value);break;case"v4":this.uniforms[n].value=new xe().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ft().fromArray(i.value);break;case"m4":this.uniforms[n].value=new de().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0)this.defines=t.defines;if(t.vertexShader!==void 0)this.vertexShader=t.vertexShader;if(t.fragmentShader!==void 0)this.fragmentShader=t.fragmentShader;if(t.glslVersion!==void 0)this.glslVersion=t.glslVersion;if(t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];if(t.lights!==void 0)this.lights=t.lights;if(t.clipping!==void 0)this.clipping=t.clipping;return this}}class Ro extends nn{constructor(t){super(t);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Co extends si{constructor(t){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Io extends si{constructor(t){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Pi(t,e){if(!t||t.constructor===e)return t;if(typeof e.BYTES_PER_ELEMENT==="number")return new e(t);return Array.prototype.slice.call(t)}function ha(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}class hi{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){let a=e[1];if(t<a)n=2,s=a;for(let o=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}while(n<r){let a=n+r>>>1;if(t<e[a])r=a;else n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Po extends hi{constructor(t,e,n,i){super(t,e,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,r=t+1,a=i[s],o=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:s=t,a=2*e-n;break;case 2402:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:r=t,o=2*n-e;break;case 2402:r=1,o=n+i[1]-i[0];break;default:r=t-1,o=e}let l=(n-e)*0.5,c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,h=this._weightNext,u=(n-e)/(i-e),g=u*u,x=g*u,m=-p*x+2*p*g-p*u,f=(1+p)*x+(-1.5-2*p)*g+(-0.5+p)*u+1,R=(-1-h)*x+(1.5+h)*g+0.5*u,A=h*x-h*g;for(let v=0;v!==a;++v)s[v]=m*r[c+v]+f*r[l+v]+R*r[o+v]+A*r[d+v];return s}}class Lo extends hi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=(n-e)/(i-e),d=1-c;for(let p=0;p!==a;++p)s[p]=r[l+p]*d+r[o+p]*c;return s}}class Do extends hi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class No extends hi{interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this.inTangents,d=this.outTangents;if(!c||!d){let u=(n-e)/(i-e),g=1-u;for(let x=0;x!==a;++x)s[x]=r[l+x]*g+r[o+x]*u;return s}let p=a*2,h=t-1;for(let u=0;u!==a;++u){let g=r[l+u],x=r[o+u],m=h*p+u*2,f=d[m],R=d[m+1],A=t*p+u*2,v=c[A],T=c[A+1],w=od(n,e,f,v,i);s[u]=th(w,g,R,T,x)}return s}}function th(t,e,n,i,s){let r=1-t;return r*r*r*e+3*r*r*t*n+3*r*t*t*i+t*t*t*s}function ad(t,e,n,i,s){let r=1-t;return 3*r*r*(n-e)+6*r*t*(i-n)+3*t*t*(s-i)}function od(t,e,n,i,s){let r=(t-e)/(s-e);for(let a=0;a<8;a++){let o=th(r,e,n,i,s)-t;if(Math.abs(o)<0.0000000001)break;let l=ad(r,e,n,i,s);if(Math.abs(l)<0.0000000001)break;r=Math.max(0,Math.min(1,r-o/l))}return r}class sn{constructor(t,e,n,i){if(t===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Pi(e,this.TimeBufferType),this.values=Pi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Pi(t.times,Array),values:Pi(t.values,Array)};let i=t.getInterpolation();if(i!==t.DefaultInterpolation)n.interpolation=i;if(ha(t.settings))n.settings={inTangents:Pi(t.settings.inTangents,Array),outTangents:Pi(t.settings.outTangents,Array)}}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Do(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Lo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Po(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new No(this.times,this.values,this.getValueSize(),t);if(this.settings)e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents;return e}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break;case 2303:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return Nt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;if(ha(this.settings))kl(this.settings.inTangents,t),kl(this.settings.outTangents,t)}return this}trim(t,e){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<t)++s;while(r!==-1&&n[r]>e)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();if(e-Math.floor(e)!==0)Ut("KeyframeTrack: Invalid value size in track.",this),t=!1;let n=this.times,i=this.values,s=n.length;if(s===0)Ut("KeyframeTrack: Track is empty.",this),t=!1;let r=null;for(let a=0;a!==s;a++){let o=n[a];if(typeof o==="number"&&isNaN(o)){Ut("KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(r!==null&&r>o){Ut("KeyframeTrack: Out of order keys.",this,a,o,r),t=!1;break}r=o}if(i!==void 0){if(Kh(i))for(let a=0,o=i.length;a!==o;++a){let l=i[a];if(isNaN(l)){Ut("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=t.length-1,r=1;for(let a=1;a<s;++a){let o=!1,l=t[a],c=t[a+1];if(l!==c&&(a!==1||l!==t[0]))if(!i){let d=a*n,p=d-n,h=d+n;for(let u=0;u!==n;++u){let g=e[d+u];if(g!==e[p+u]||g!==e[h+u]){o=!0;break}}}else o=!0;if(o){if(a!==r){t[r]=t[a];let d=a*n,p=r*n;for(let h=0;h!==n;++h)e[p+h]=e[d+h]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,o=r*n,l=0;l!==n;++l)e[o+l]=e[a+l];++r}if(r!==t.length)this.times=t.slice(0,r),this.values=e.slice(0,r*n);else this.times=t,this.values=e;return this}clone(){let t=this.times.slice(),e=this.values.slice(),i=new this.constructor(this.name,t,e);if(i.createInterpolant=this.createInterpolant,ha(this.settings))i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return i}}function kl(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]*=e}sn.prototype.ValueTypeName="";sn.prototype.TimeBufferType=Float32Array;sn.prototype.ValueBufferType=Float32Array;sn.prototype.DefaultInterpolation=2301;class ui extends sn{constructor(t,e,n){super(t,e,n)}}ui.prototype.ValueTypeName="bool";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=2300;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;class Uo extends sn{constructor(t,e,n,i){super(t,e,n,i)}}Uo.prototype.ValueTypeName="color";class Fo extends sn{constructor(t,e,n,i){super(t,e,n,i)}}Fo.prototype.ValueTypeName="number";class Oo extends hi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e),l=t*a;for(let c=l+a;l!==c;l+=4)Ye.slerpFlat(s,0,r,l-a,r,l,o);return s}}class Ir extends sn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Oo(this.times,this.values,this.getValueSize(),t)}}Ir.prototype.ValueTypeName="quaternion";Ir.prototype.InterpolantFactoryMethodSmooth=void 0;class di extends sn{constructor(t,e,n){super(t,e,n)}}di.prototype.ValueTypeName="string";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=2300;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;class Bo extends sn{constructor(t,e,n,i){super(t,e,n,i)}}Bo.prototype.ValueTypeName="vector";class zo{constructor(t,e,n){let i=this,s=!1,r=0,a=0,o=void 0,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(c){if(a++,s===!1){if(i.onStart!==void 0)i.onStart(c,r,a)}s=!0},this.itemEnd=function(c){if(r++,i.onProgress!==void 0)i.onProgress(c,r,a);if(r===a){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(c){if(i.onError!==void 0)i.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),o)return o(c);return c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,d){return l.push(c,d),this},this.removeHandler=function(c){let d=l.indexOf(c);if(d!==-1)l.splice(d,2);return this},this.getHandler=function(c){for(let d=0,p=l.length;d<p;d+=2){let h=l[d],u=l[d+1];if(h.global)h.lastIndex=0;if(h.test(c))return u}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var eh=new zo;class ko{constructor(t){if(this.manager=t!==void 0?t:eh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}ko.DEFAULT_MATERIAL_NAME="__DEFAULT";var ir=new F,sr=new Ye,mn=new F;class Pr extends Ge{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.matrixWorld.decompose(ir,sr,mn),mn.x===1&&mn.y===1&&mn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(ir,sr,mn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){if(super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ir,sr,mn),mn.x===1&&mn.y===1&&mn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(ir,sr,mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var zn=new F,Gl=new Mt,Hl=new Mt;class ke extends Pr{constructor(t=50,e=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=0.5*this.getFilmHeight()/t;this.fov=Bi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(cs*0.5*this.fov);return 0.5*this.getFilmHeight()/t}getEffectiveFOV(){return Bi*2*Math.atan(Math.tan(cs*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zn.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),e.set(zn.x,zn.y).multiplyScalar(-t/zn.z),zn.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-t/zn.z)}getViewSize(t,e){return this.getViewBounds(t,Gl,Hl),e.subVectors(Hl,Gl)}setViewOffset(t,e,n,i,s,r){if(this.aspect=t/e,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(cs*0.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:l}=r;s+=r.offsetX*i/o,e-=r.offsetY*n/l,i*=r.width/o,n*=r.height/l}let a=this.filmOffset;if(a!==0)s+=t*a/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null)e.object.view=Object.assign({},this.view);return e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Lr extends Pr{constructor(t=-1,e=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,r=n+t,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null)e.object.view=Object.assign({},this.view);return e}}var Li=-90,Di=1;class Go extends Ge{constructor(t,e,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new ke(Li,Di,t,e);i.layers=this.layers,this.add(i);let s=new ke(Li,Di,t,e);s.layers=this.layers,this.add(s);let r=new ke(Li,Di,t,e);r.layers=this.layers,this.add(r);let a=new ke(Li,Di,t,e);a.layers=this.layers,this.add(a);let o=new ke(Li,Di,t,e);o.layers=this.layers,this.add(o);let l=new ke(Li,Di,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,a,o]=e;for(let l of e)this.remove(l);if(t===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==t.coordinateSystem)this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem();let[s,r,a,o,l,c]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),u=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;if(t.isWebGLRenderer===!0)x=t.state.buffers.depth.getReversed();else x=t.reversedDepthBuffer;if(t.setRenderTarget(n,0,i),x&&t.autoClear===!1)t.clearDepth();if(t.render(e,s),t.setRenderTarget(n,1,i),x&&t.autoClear===!1)t.clearDepth();if(t.render(e,r),t.setRenderTarget(n,2,i),x&&t.autoClear===!1)t.clearDepth();if(t.render(e,a),t.setRenderTarget(n,3,i),x&&t.autoClear===!1)t.clearDepth();if(t.render(e,o),t.setRenderTarget(n,4,i),x&&t.autoClear===!1)t.clearDepth();if(t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),x&&t.autoClear===!1)t.clearDepth();t.render(e,c),t.setRenderTarget(d,p,h),t.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class Ho extends ke{constructor(t=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}var Vo="\\[\\]\\.:\\/",ld=new RegExp("["+Vo+"]","g"),Wo="[^"+Vo+"]",cd="[^"+Vo.replace("\\.","")+"]",hd=/((?:WC+[\/:])*)/.source.replace("WC",Wo),ud=/(WCOD+)?/.source.replace("WCOD",cd),dd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wo),fd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wo),pd=new RegExp("^"+hd+ud+dd+fd+"$"),md=["material","materials","bones","map"];class nh{constructor(t,e,n){let i=n||re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class re{constructor(t,e,n){this.path=e,this.parsedPath=n||re.parseTrackName(e),this.node=re.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){if(!(t&&t.isAnimationObjectGroup))return new re(t,e,n);else return new re.Composite(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ld,"")}static parseTrackName(t){let e=pd.exec(t);if(e===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if(md.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===e||a.uuid===e)return a;let o=n(a.children);if(o)return o}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,{objectName:n,propertyName:i,propertyIndex:s}=e;if(!t)t=re.findNode(this.rootNode,e.nodeName),this.node=t;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ut("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ut("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===l){l=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ut("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ut("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Ut("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[i];if(r===void 0){let l=e.nodeName;Ut("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;if(this.targetObject=t,t.isMaterial===!0)a=this.Versioning.NeedsUpdate;else if(t.isObject3D===!0)a=this.Versioning.MatrixWorldNeedsUpdate;let o=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(t.morphTargetDictionary[s]!==void 0)s=t.morphTargetDictionary[s]}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)o=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))o=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}re.Composite=nh;re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};re.prototype.GetterByBindingType=[re.prototype._getValue_direct,re.prototype._getValue_array,re.prototype._getValue_arrayElement,re.prototype._getValue_toArray];re.prototype.SetterByBindingTypeAndVersioning=[[re.prototype._setValue_direct,re.prototype._setValue_direct_setNeedsUpdate,re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[re.prototype._setValue_array,re.prototype._setValue_array_setNeedsUpdate,re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[re.prototype._setValue_arrayElement,re.prototype._setValue_arrayElement_setNeedsUpdate,re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[re.prototype._setValue_fromArray,re.prototype._setValue_fromArray_setNeedsUpdate,re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var u0=new Float32Array(1);var Vl=new de;class Ji{constructor(t,e,n=0,i=1/0){this.ray=new As(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new bs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){if(e.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,0.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e;else if(e.isOrthographicCamera)this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e;else Ut("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Vl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vl),this}intersectObject(t,e=!0,n=[]){return fa(t,this,n,e),n.sort(Wl),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)fa(t[i],this,n,e);return n.sort(Wl),n}}function Wl(t,e){return t.distance-e.distance}function fa(t,e,n,i){let s=!0;if(t.layers.test(e.layers)){if(t.raycast(e,n)===!1)s=!1}if(s===!0&&i===!0){let r=t.children;for(let a=0,o=r.length;a<o;a++)fa(r[a],e,n,!0)}}class Xo{static{Xo.prototype.isMatrix2=!0}constructor(t,e,n,i){if(this.elements=[1,0,0,1],t!==void 0)this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}}function qo(t,e,n,i){let s=gd(i);switch(n){case 1021:return t*e;case 1028:return t*e/s.components*s.byteLength;case 1029:return t*e/s.components*s.byteLength;case 1030:return t*e*2/s.components*s.byteLength;case 1031:return t*e*2/s.components*s.byteLength;case 1022:return t*e*3/s.components*s.byteLength;case 1023:return t*e*4/s.components*s.byteLength;case 1033:return t*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(t,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(t,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(t/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(t/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function gd(t){switch(t){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)Nt("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function Eh(){let t=null,e=!1,n=null,i=null;function s(r,a){i=t.requestAnimationFrame(s),n(r,a)}return{start:function(){if(e===!0)return;if(n===null)return;if(t===null)return;i=t.requestAnimationFrame(s),e=!0},stop:function(){if(t!==null)t.cancelAnimationFrame(i);e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function _d(t){let e=new WeakMap;function n(o,l){let{array:c,usage:d}=o,p=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,d),o.onUploadCallback();let u;if(c instanceof Float32Array)u=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=t.HALF_FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute)u=t.HALF_FLOAT;else u=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=t.SHORT;else if(c instanceof Uint32Array)u=t.UNSIGNED_INT;else if(c instanceof Int32Array)u=t.INT;else if(c instanceof Int8Array)u=t.BYTE;else if(c instanceof Uint8Array)u=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=t.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let{array:d,updateRanges:p}=l;if(t.bindBuffer(c,o),p.length===0)t.bufferSubData(c,0,d);else{p.sort((u,g)=>u.start-g.start);let h=0;for(let u=1;u<p.length;u++){let g=p[h],x=p[u];if(x.start<=g.start+g.count+1)g.count=Math.max(g.count,x.start+x.count-g.start);else++h,p[h]=x}p.length=h+1;for(let u=0,g=p.length;u<g;u++){let x=p[u];t.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){if(o.isInterleavedBufferAttribute)o=o.data;return e.get(o)}function r(o){if(o.isInterleavedBufferAttribute)o=o.data;let l=e.get(o);if(l)t.deleteBuffer(l.buffer),e.delete(o)}function a(o,l){if(o.isInterleavedBufferAttribute)o=o.data;if(o.isGLBufferAttribute){let d=e.get(o);if(!d||d.version<o.version)e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var xd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Md=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ed=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Td=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ad=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Id=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Pd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ld=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Od=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,kd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Gd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Wd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$d=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Kd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ef=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,af=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,of=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,uf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,df=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ff=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_f=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Mf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ef=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Af=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,If=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Df=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ff=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Of=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Jf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$f=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ep=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,np=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ap=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,up=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`;var xp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ep=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ap=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ip=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Np=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Up=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Op=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$p=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kt={alphahash_fragment:xd,alphahash_pars_fragment:vd,alphamap_fragment:yd,alphamap_pars_fragment:Sd,alphatest_fragment:Md,alphatest_pars_fragment:bd,aomap_fragment:Ed,aomap_pars_fragment:Td,batching_pars_vertex:wd,batching_vertex:Ad,begin_vertex:Rd,beginnormal_vertex:Cd,bsdfs:Id,iridescence_fragment:Pd,bumpmap_pars_fragment:Ld,clipping_planes_fragment:Dd,clipping_planes_pars_fragment:Nd,clipping_planes_pars_vertex:Ud,clipping_planes_vertex:Fd,color_fragment:Od,color_pars_fragment:Bd,color_pars_vertex:zd,color_vertex:kd,common:Gd,cube_uv_reflection_fragment:Hd,defaultnormal_vertex:Vd,displacementmap_pars_vertex:Wd,displacementmap_vertex:Xd,emissivemap_fragment:qd,emissivemap_pars_fragment:Yd,colorspace_fragment:Zd,colorspace_pars_fragment:Jd,envmap_fragment:$d,envmap_common_pars_fragment:Kd,envmap_pars_fragment:Qd,envmap_pars_vertex:jd,envmap_physical_pars_fragment:uf,envmap_vertex:tf,fog_vertex:ef,fog_pars_vertex:nf,fog_fragment:sf,fog_pars_fragment:rf,gradientmap_pars_fragment:af,lightmap_pars_fragment:of,lights_lambert_fragment:lf,lights_lambert_pars_fragment:cf,lights_pars_begin:hf,lights_toon_fragment:df,lights_toon_pars_fragment:ff,lights_phong_fragment:pf,lights_phong_pars_fragment:mf,lights_physical_fragment:gf,lights_physical_pars_fragment:_f,lights_fragment_begin:xf,lights_fragment_maps:vf,lights_fragment_end:yf,lightprobes_pars_fragment:Sf,logdepthbuf_fragment:Mf,logdepthbuf_pars_fragment:bf,logdepthbuf_pars_vertex:Ef,logdepthbuf_vertex:Tf,map_fragment:wf,map_pars_fragment:Af,map_particle_fragment:Rf,map_particle_pars_fragment:Cf,metalnessmap_fragment:If,metalnessmap_pars_fragment:Pf,morphinstance_vertex:Lf,morphcolor_vertex:Df,morphnormal_vertex:Nf,morphtarget_pars_vertex:Uf,morphtarget_vertex:Ff,normal_fragment_begin:Of,normal_fragment_maps:Bf,normal_pars_fragment:zf,normal_pars_vertex:kf,normal_vertex:Gf,normalmap_pars_fragment:Hf,clearcoat_normal_fragment_begin:Vf,clearcoat_normal_fragment_maps:Wf,clearcoat_pars_fragment:Xf,iridescence_pars_fragment:qf,opaque_fragment:Yf,packing:Zf,premultiplied_alpha_fragment:Jf,project_vertex:$f,dithering_fragment:Kf,dithering_pars_fragment:Qf,roughnessmap_fragment:jf,roughnessmap_pars_fragment:tp,shadowmap_pars_fragment:ep,shadowmap_pars_vertex:np,shadowmap_vertex:ip,shadowmask_pars_fragment:sp,skinbase_vertex:rp,skinning_pars_vertex:ap,skinning_vertex:op,skinnormal_vertex:lp,specularmap_fragment:cp,specularmap_pars_fragment:hp,tonemapping_fragment:up,tonemapping_pars_fragment:dp,transmission_fragment:fp,transmission_pars_fragment:pp,uv_pars_fragment:mp,uv_pars_vertex:gp,uv_vertex:_p,worldpos_vertex:xp,background_vert:vp,background_frag:yp,backgroundCube_vert:Sp,backgroundCube_frag:Mp,cube_vert:bp,cube_frag:Ep,depth_vert:Tp,depth_frag:wp,distance_vert:Ap,distance_frag:Rp,equirect_vert:Cp,equirect_frag:Ip,linedashed_vert:Pp,linedashed_frag:Lp,meshbasic_vert:Dp,meshbasic_frag:Np,meshlambert_vert:Up,meshlambert_frag:Fp,meshmatcap_vert:Op,meshmatcap_frag:Bp,meshnormal_vert:zp,meshnormal_frag:kp,meshphong_vert:Gp,meshphong_frag:Hp,meshphysical_vert:Vp,meshphysical_frag:Wp,meshtoon_vert:Xp,meshtoon_frag:qp,points_vert:Yp,points_frag:Zp,shadow_vert:Jp,shadow_frag:$p,sprite_vert:Kp,sprite_frag:Qp},mt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new Mt(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Sn={basic:{uniforms:Oe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Oe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Qt(0)},envMapIntensity:{value:1}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Oe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Oe([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Oe([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Oe([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Oe([mt.points,mt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Oe([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Oe([mt.common,mt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Oe([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Oe([mt.sprite,mt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:Oe([mt.common,mt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:Oe([mt.lights,mt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Sn.physical={uniforms:Oe([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var Dr={r:0,b:0,g:0},jp=new de,Th=new Ft;Th.set(-1,0,0,0,1,0,0,0,1);function tm(t,e,n,i,s,r){let a=new Qt(0),o=s===!0?0:1,l,c,d=null,p=0,h=null;function u(R){let A=R.isScene===!0?R.background:null;if(A&&A.isTexture){let v=R.backgroundBlurriness>0;A=e.get(A,v)}return A}function g(R){let A=!1,v=u(R);if(v===null)m(a,o);else if(v&&v.isColor)m(v,1),A=!0;let T=t.xr.getEnvironmentBlendMode();if(T==="additive")n.buffers.color.setClear(0,0,0,1,r);else if(T==="alpha-blend")n.buffers.color.setClear(0,0,0,0,r);if(t.autoClear||A)n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function x(R,A){let v=u(A);if(v&&(v.isCubeTexture||v.mapping===vs)){if(c===void 0)c=new Ie(new Zi(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:ci(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c);if(c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(jp.makeRotationFromEuler(A.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(Th);if(c.material.toneMapped=Zt.getTransfer(v.colorSpace)!==fe,d!==v||p!==v.version||h!==t.toneMapping)c.material.needsUpdate=!0,d=v,p=v.version,h=t.toneMapping;c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null)}else if(v&&v.isTexture){if(l===void 0)l=new Ie(new Is(2,2),new nn({name:"BackgroundMaterial",uniforms:ci(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l);if(l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(v.colorSpace)!==fe,v.matrixAutoUpdate===!0)v.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(v.matrix),d!==v||p!==v.version||h!==t.toneMapping)l.material.needsUpdate=!0,d=v,p=v.version,h=t.toneMapping;l.layers.enableAll(),R.unshift(l,l.geometry,l.material,0,0,null)}}function m(R,A){R.getRGB(Dr,Ao(t)),n.buffers.color.setClear(Dr.r,Dr.g,Dr.b,A,r)}function f(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return a},setClearColor:function(R,A=1){a.set(R),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(R){o=R,m(a,o)},render:g,addToRenderList:x,dispose:f}}function em(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(O,B,et,D,W){let nt=!1,H=p(O,D,et,B);if(r!==H)r=H,c(r.object);if(nt=u(O,D,et,W),nt)g(O,D,et,W);if(W!==null)e.update(W,t.ELEMENT_ARRAY_BUFFER);if(nt||a){if(a=!1,v(O,B,et,D),W!==null)t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer)}}function l(){return t.createVertexArray()}function c(O){return t.bindVertexArray(O)}function d(O){return t.deleteVertexArray(O)}function p(O,B,et,D){let W=D.wireframe===!0,nt=i[B.id];if(nt===void 0)nt={},i[B.id]=nt;let H=O.isInstancedMesh===!0?O.id:0,lt=nt[H];if(lt===void 0)lt={},nt[H]=lt;let Q=lt[et.id];if(Q===void 0)Q={},lt[et.id]=Q;let it=Q[W];if(it===void 0)it=h(l()),Q[W]=it;return it}function h(O){let B=[],et=[],D=[];for(let W=0;W<n;W++)B[W]=0,et[W]=0,D[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:et,attributeDivisors:D,object:O,attributes:{},index:null}}function u(O,B,et,D){let W=r.attributes,nt=B.attributes,H=0,lt=et.getAttributes();for(let Q in lt)if(lt[Q].location>=0){let at=W[Q],It=nt[Q];if(It===void 0){if(Q==="instanceMatrix"&&O.instanceMatrix)It=O.instanceMatrix;if(Q==="instanceColor"&&O.instanceColor)It=O.instanceColor}if(at===void 0)return!0;if(at.attribute!==It)return!0;if(It&&at.data!==It.data)return!0;H++}if(r.attributesNum!==H)return!0;if(r.index!==D)return!0;return!1}function g(O,B,et,D){let W={},nt=B.attributes,H=0,lt=et.getAttributes();for(let Q in lt)if(lt[Q].location>=0){let at=nt[Q];if(at===void 0){if(Q==="instanceMatrix"&&O.instanceMatrix)at=O.instanceMatrix;if(Q==="instanceColor"&&O.instanceColor)at=O.instanceColor}let It={};if(It.attribute=at,at&&at.data)It.data=at.data;W[Q]=It,H++}r.attributes=W,r.attributesNum=H,r.index=D}function x(){let O=r.newAttributes;for(let B=0,et=O.length;B<et;B++)O[B]=0}function m(O){f(O,0)}function f(O,B){let et=r.newAttributes,D=r.enabledAttributes,W=r.attributeDivisors;if(et[O]=1,D[O]===0)t.enableVertexAttribArray(O),D[O]=1;if(W[O]!==B)t.vertexAttribDivisor(O,B),W[O]=B}function R(){let O=r.newAttributes,B=r.enabledAttributes;for(let et=0,D=B.length;et<D;et++)if(B[et]!==O[et])t.disableVertexAttribArray(et),B[et]=0}function A(O,B,et,D,W,nt,H){if(H===!0)t.vertexAttribIPointer(O,B,et,W,nt);else t.vertexAttribPointer(O,B,et,D,W,nt)}function v(O,B,et,D){x();let W=D.attributes,nt=et.getAttributes(),H=B.defaultAttributeValues;for(let lt in nt){let Q=nt[lt];if(Q.location>=0){let it=W[lt];if(it===void 0){if(lt==="instanceMatrix"&&O.instanceMatrix)it=O.instanceMatrix;if(lt==="instanceColor"&&O.instanceColor)it=O.instanceColor}if(it!==void 0){let at=it.normalized,It=it.itemSize,Pt=e.get(it);if(Pt===void 0)continue;let{buffer:Kt,type:Ot,bytesPerElement:J}=Pt,ot=Ot===t.INT||Ot===t.UNSIGNED_INT||it.gpuType===wa;if(it.isInterleavedBufferAttribute){let ct=it.data,Tt=ct.stride,Lt=it.offset;if(ct.isInstancedInterleavedBuffer){for(let wt=0;wt<Q.locationSize;wt++)f(Q.location+wt,ct.meshPerAttribute);if(O.isInstancedMesh!==!0&&D._maxInstanceCount===void 0)D._maxInstanceCount=ct.meshPerAttribute*ct.count}else for(let wt=0;wt<Q.locationSize;wt++)m(Q.location+wt);t.bindBuffer(t.ARRAY_BUFFER,Kt);for(let wt=0;wt<Q.locationSize;wt++)A(Q.location+wt,It/Q.locationSize,Ot,at,Tt*J,(Lt+It/Q.locationSize*wt)*J,ot)}else{if(it.isInstancedBufferAttribute){for(let ct=0;ct<Q.locationSize;ct++)f(Q.location+ct,it.meshPerAttribute);if(O.isInstancedMesh!==!0&&D._maxInstanceCount===void 0)D._maxInstanceCount=it.meshPerAttribute*it.count}else for(let ct=0;ct<Q.locationSize;ct++)m(Q.location+ct);t.bindBuffer(t.ARRAY_BUFFER,Kt);for(let ct=0;ct<Q.locationSize;ct++)A(Q.location+ct,It/Q.locationSize,Ot,at,It*J,It/Q.locationSize*ct*J,ot)}}else if(H!==void 0){let at=H[lt];if(at!==void 0)switch(at.length){case 2:t.vertexAttrib2fv(Q.location,at);break;case 3:t.vertexAttrib3fv(Q.location,at);break;case 4:t.vertexAttrib4fv(Q.location,at);break;default:t.vertexAttrib1fv(Q.location,at)}}}}R()}function T(){E();for(let O in i){let B=i[O];for(let et in B){let D=B[et];for(let W in D){let nt=D[W];for(let H in nt)d(nt[H].object),delete nt[H];delete D[W]}}delete i[O]}}function w(O){if(i[O.id]===void 0)return;let B=i[O.id];for(let et in B){let D=B[et];for(let W in D){let nt=D[W];for(let H in nt)d(nt[H].object),delete nt[H];delete D[W]}}delete i[O.id]}function C(O){for(let B in i){let et=i[B];for(let D in et){let W=et[D];if(W[O.id]===void 0)continue;let nt=W[O.id];for(let H in nt)d(nt[H].object),delete nt[H];delete W[O.id]}}}function S(O){for(let B in i){let et=i[B],D=O.isInstancedMesh===!0?O.id:0,W=et[D];if(W===void 0)continue;for(let nt in W){let H=W[nt];for(let lt in H)d(H[lt].object),delete H[lt];delete W[nt]}if(delete et[D],Object.keys(et).length===0)delete i[B]}}function E(){if(Z(),a=!0,r===s)return;r=s,c(r.object)}function Z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:Z,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:R}}function nm(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,d){if(d===0)return;t.drawArraysInstanced(i,l,c,d),n.update(c,i,d)}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let h=0;for(let u=0;u<d;u++)h+=c[u];n.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function im(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){if(C!==vn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function o(C){let S=C===xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));if(C!==dn&&C!==Cn&&!S&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}if(C==="mediump"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=n.precision!==void 0?n.precision:"highp",d=l(c);if(d!==c)Nt("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d;let p=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");if(n.reversedDepthBuffer===!0&&h===!1)Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),R=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),A=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:u,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:R,maxVaryings:A,maxFragmentUniforms:v,maxSamples:T,samples:w}}function sm(t){let e=this,n=null,i=0,s=!1,r=!1,a=new Ke,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){let u=p.length!==0||h||i!==0||s;return s=h,i=p.length,u},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,h){n=d(p,h,0)},this.setState=function(p,h,u){let{clippingPlanes:g,clipIntersection:x,clipShadows:m}=p,f=t.get(p);if(!s||g===null||g.length===0||r&&!m)if(r)d(null);else c();else{let R=r?0:i,A=R*4,v=f.clippingState||null;l.value=v,v=d(g,h,A,u);for(let T=0;T!==A;++T)v[T]=n[T];f.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=R}};function c(){if(l.value!==n)l.value=n,l.needsUpdate=i>0;e.numPlanes=i,e.numIntersection=0}function d(p,h,u,g){let x=p!==null?p.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let f=u+x*4,R=h.matrixWorldInverse;if(o.getNormalMatrix(R),m===null||m.length<f)m=new Float32Array(f);for(let A=0,v=u;A!==x;++A,v+=4)a.copy(p[A]).applyMatrix4(R,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Ki=4,rm=6,am=20,om=256,Ps=new Lr,ih=new Qt,Yo=null,Zo=0,Jo=0,$o=!1,lm=new F,fi=new F;class jo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=0.1,i=100,s={}){let{size:r=256,position:a=lm}=s;Yo=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let o=this._allocateTargets();if(o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o,a),e>0)this._blur(o,0,0,e);return this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=ah(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=rh(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Yo,Zo,Jo),this._renderer.xr.enabled=$o,t.scissorTest=!1,$i(t,0,0,t.width,t.height)}_fromTexture(t,e){if(t.mapping===Vi||t.mapping===$n)this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width);else this._setSize(t.image.width/4);Yo=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:xn,format:vn,colorSpace:co,depthBuffer:!1},i=sh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=sh(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=cm(s)),this._blurMaterial=um(s,t,e),this._ggxMaterial=hm(s,t,e)}return i}_compileMaterial(t){let e=new Ie(new Ce,t);this._renderer.compile(e,Ps)}_sceneToCubeUV(t,e,n,i,s){let o=new ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,{autoClear:p,toneMapping:h}=d;if(d.getClearColor(ih),d.toneMapping=un,d.autoClear=!1,d.state.buffers.depth.getReversed())d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new Ie(new Zi,new qi({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}));let g=this._backgroundBox,x=g.material,m=!1,f=t.background;if(f){if(f.isColor)x.color.copy(f),t.background=null,m=!0}else x.color.copy(ih),m=!0;for(let R=0;R<6;R++){let A=R%3;if(A===0)o.up.set(0,l[R],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x+c[R],s.y,s.z);else if(A===1)o.up.set(0,0,l[R]),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y+c[R],s.z);else o.up.set(0,l[R],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y,s.z+c[R]);let v=this._cubeSize;if($i(i,A*v,R>2?v:0,v,v),d.setRenderTarget(i),m)d.render(g,o);d.render(t,o)}d.toneMapping=h,d.autoClear=p,t.background=f}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Vi||t.mapping===$n;if(i){if(this._cubemapMaterial===null)this._cubemapMaterial=ah();this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=rh();let s=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;let a=s.uniforms;a.envMap.value=t;let o=this._cubeSize;$i(e,0,0,3*o,2*o),n.setRenderTarget(e),n.render(r,Ps)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;let o=r.uniforms,l=n/(this._lodMeshes.length-1),c=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-c*c),p=l*1.25,h=d*p,{_lodMax:u}=this,g=this._sizeLods[n],x=3*g*(n>u-Ki?n-u+Ki:0),m=4*(this._cubeSize-g);o.envMap.value=t.texture,o.roughness.value=h,o.mipInt.value=u-e,$i(s,x,m,3*g,2*g),i.setRenderTarget(s),i.render(a,Ps),o.envMap.value=s.texture,o.roughness.value=0,o.mipInt.value=u-n,$i(t,x,m,3*g,2*g),i.setRenderTarget(t),i.render(a,Ps)}_blur(t,e,n,i){let s=this._pingPongRenderTarget,r=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,r),this._blurPass(s,t,n,n,r)}_blurPass(t,e,n,i,s){let r=this._renderer,a=this._blurMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let c=this._sizeLods[i],d=3*c*(i>this._lodMax-Ki?i-this._lodMax+Ki:0),p=4*(this._cubeSize-c);$i(e,d,p,3*c,2*c),r.setRenderTarget(e),r.render(o,Ps)}}function cm(t){let e=[],n=[],i=t,s=t-Ki+1+rm;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,h=6,u=3,g=new Float32Array(u*h*p),x=new Float32Array(u*h*p);for(let f=0;f<p;f++){let R=f%3*2/3-1,A=f>2?0:-1,v=[R,A,0,R+0.6666666666666666,A,0,R+0.6666666666666666,A+1,0,R,A,0,R+0.6666666666666666,A+1,0,R,A+1,0];g.set(v,u*h*f);for(let T=0;T<h;T++){let w=d[T*2]*2-1,C=d[T*2+1]*2-1;if(f===0)fi.set(1,C,w);else if(f===1)fi.set(-w,1,-C);else if(f===2)fi.set(-w,C,1);else if(f===3)fi.set(-1,C,-w);else if(f===4)fi.set(-w,-1,C);else fi.set(w,C,-1);fi.toArray(x,(f*h+T)*u)}}let m=new Ce;if(m.setAttribute("position",new hn(g,u)),m.setAttribute("outputDirection",new hn(x,u)),n.push(new Ie(m,null)),i>Ki)i--}return{lodMeshes:n,sizeLods:e}}function sh(t,e,n){let i=new Ze(t,e,n);return i.texture.mapping=vs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $i(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function hm(t,e,n){return new nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:om,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ur(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function um(t,e,n){return new nn({name:"SphericalGaussianBlur",defines:{SAMPLES:am,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ur(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function rh(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ur(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function ah(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ur(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Ur(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class nl extends Ze{constructor(t=1,e={}){super(t,t,e);this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Er(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Zi(5,5,5),s=new nn({name:"CubemapFromEquirect",uniforms:ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:_n});s.uniforms.tEquirect.value=e;let r=new Ie(i,s),a=e.minFilter;if(e.minFilter===Kn)e.minFilter=We;return new Go(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}function dm(t){let e=new WeakMap,n=new WeakMap,i=null;function s(h,u=!1){if(h===null||h===void 0)return null;if(u)return a(h);return r(h)}function r(h){if(h&&h.isTexture){let u=h.mapping;if(u===lr||u===cr)if(e.has(h)){let g=e.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let x=new nl(g.height);return x.fromEquirectangularTexture(t,h),e.set(h,x),h.addEventListener("dispose",c),o(x.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let u=h.mapping,g=u===lr||u===cr,x=u===Vi||u===$n;if(g||x){let m=n.get(h),f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f){if(i===null)i=new jo(t);return m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),m.texture}else if(m!==void 0)return m.texture;else{let R=h.image;if(g&&R&&R.height>0||x&&R&&l(R)){if(i===null)i=new jo(t);return m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),h.addEventListener("dispose",d),m.texture}else return null}}}return h}function o(h,u){if(u===lr)h.mapping=Vi;else if(u===cr)h.mapping=$n;return h}function l(h){let u=0,g=6;for(let x=0;x<g;x++)if(h[x]!==void 0)u++;return u===g}function c(h){let u=h.target;u.removeEventListener("dispose",c);let g=e.get(u);if(g!==void 0)e.delete(u),g.dispose()}function d(h){let u=h.target;u.removeEventListener("dispose",d);let g=n.get(u);if(g!==void 0)n.delete(u),g.dispose()}function p(){if(e=new WeakMap,n=new WeakMap,i!==null)i.dispose(),i=null}return{get:s,dispose:p}}function fm(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);if(s===null)Zn("WebGLRenderer: "+i+" extension not supported.");return s}}}function pm(t,e,n,i){let s={},r=new WeakMap;function a(p){let h=p.target;if(h.index!==null)e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let u=r.get(h);if(u)e.remove(u),r.delete(h);if(i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0)delete h._maxInstanceCount;n.memory.geometries--}function o(p,h){if(s[h.id]===!0)return h;return h.addEventListener("dispose",a),s[h.id]=!0,n.memory.geometries++,h}function l(p){let h=p.attributes;for(let u in h)e.update(h[u],t.ARRAY_BUFFER)}function c(p){let h=[],u=p.index,g=p.attributes.position,x=0;if(g===void 0)return;if(u!==null){let R=u.array;x=u.version;for(let A=0,v=R.length;A<v;A+=3){let T=R[A+0],w=R[A+1],C=R[A+2];h.push(T,w,w,C,C,T)}}else{let R=g.array;x=g.version;for(let A=0,v=R.length/3-1;A<v;A+=3){let T=A+0,w=A+1,C=A+2;h.push(T,w,w,C,C,T)}}let m=new(g.count>=65535?Mr:Sr)(h,1);m.version=x;let f=r.get(p);if(f)e.remove(f);r.set(p,m)}function d(p){let h=r.get(p);if(h){let u=p.index;if(u!==null){if(h.version<u.version)c(p)}}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function mm(t,e,n){let i;function s(p){i=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,h){t.drawElements(i,h,r,p*a),n.update(h,i,1)}function c(p,h,u){if(u===0)return;t.drawElementsInstanced(i,h,r,p*a,u),n.update(h,i,u)}function d(p,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,p,0,u);let x=0;for(let m=0;m<u;m++)x+=h[m];n.update(x,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function gm(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:Ut("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function _m(t,e,n){let i=new WeakMap,s=new xe;function r(a,o,l){let c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0,h=i.get(o);if(h===void 0||h.count!==p){let E=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",E)};if(h!==void 0)h.texture.dispose();let u=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],R=o.morphAttributes.color||[],A=0;if(u===!0)A=1;if(g===!0)A=2;if(x===!0)A=3;let v=o.attributes.position.count*A,T=1;if(v>e.maxTextureSize)T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize;let w=new Float32Array(v*T*4*p),C=new yr(w,v,T,p);C.type=Cn,C.needsUpdate=!0;let S=A*4;for(let Z=0;Z<p;Z++){let O=m[Z],B=f[Z],et=R[Z],D=v*T*4*Z;for(let W=0;W<O.count;W++){let nt=W*S;if(u===!0)s.fromBufferAttribute(O,W),w[D+nt+0]=s.x,w[D+nt+1]=s.y,w[D+nt+2]=s.z,w[D+nt+3]=0;if(g===!0)s.fromBufferAttribute(B,W),w[D+nt+4]=s.x,w[D+nt+5]=s.y,w[D+nt+6]=s.z,w[D+nt+7]=0;if(x===!0)s.fromBufferAttribute(et,W),w[D+nt+8]=s.x,w[D+nt+9]=s.y,w[D+nt+10]=s.z,w[D+nt+11]=et.itemSize===4?s.w:1}}h={count:p,texture:C,size:new Mt(v,T)},i.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let u=0;for(let x=0;x<c.length;x++)u+=c[x];let g=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:r}}function xm(t,e,n,i,s){let r=new WeakMap;function a(c){let d=s.render.frame,p=c.geometry,h=e.get(c,p);if(r.get(h)!==d)e.update(h),r.set(h,d);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(r.get(c)!==d){if(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null)n.update(c.instanceColor,t.ARRAY_BUFFER);r.set(c,d)}}if(c.isSkinnedMesh){let u=c.skeleton;if(r.get(u)!==d)u.update(),r.set(u,d)}return h}function o(){r=new WeakMap}function l(c){let d=c.target;if(d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null)n.remove(d.instanceColor)}return{update:a,dispose:o}}var vm={[va]:"LINEAR_TONE_MAPPING",[ya]:"REINHARD_TONE_MAPPING",[Sa]:"CINEON_TONE_MAPPING",[Ma]:"ACES_FILMIC_TONE_MAPPING",[Ea]:"AGX_TONE_MAPPING",[Ta]:"NEUTRAL_TONE_MAPPING",[ba]:"CUSTOM_TONE_MAPPING"};function ym(t,e,n,i,s,r){let a=new Ze(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ce;c.setAttribute("position",new Ee([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ee([0,2,0,0,2,0],2));let d=new Ro({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Ie(c,d),h=new Lr(-1,1,1,-1,0,1),u=null,g=null,x=!1,m,f=null,R=[],A=!1;this.setSize=function(v,T){if(a.setSize(v,T),o!==null)o.setSize(v,T);if(l!==null)l.setSize(v,T);for(let w=0;w<R.length;w++){let C=R[w];if(C.setSize)C.setSize(v,T)}},this.setEffects=function(v){R=v,A=R.length>0&&R[0].isRenderPass===!0;let{width:T,height:w}=a;if(R.length>0&&o===null)o=new Ze(T,w,{type:xn,depthBuffer:!1,stencilBuffer:!1}),l=new Ze(T,w,{type:xn,depthBuffer:!1,stencilBuffer:!1});for(let C=0;C<R.length;C++){let S=R[C];if(S.setSize)S.setSize(T,w)}},this.begin=function(v,T){if(x)return!1;if(v.toneMapping===un&&R.length===0)return!1;if(f=T,T!==null){let{width:w,height:C}=T;if(a.width!==w||a.height!==C)this.setSize(w,C)}if(A===!1)v.setRenderTarget(a);return m=v.toneMapping,v.toneMapping=un,!0},this.hasRenderPass=function(){return A},this.end=function(v,T){v.toneMapping=m,x=!0;let w=a,C=o;for(let S=0;S<R.length;S++){let E=R[S];if(E.enabled===!1)continue;if(E.render(v,C,w,T),E.needsSwap!==!1)w=C,C=C===o?l:o}if(u!==v.outputColorSpace||g!==v.toneMapping){if(u=v.outputColorSpace,g=v.toneMapping,d.defines={},Zt.getTransfer(u)===fe)d.defines.SRGB_TRANSFER="";let S=vm[g];if(S)d.defines[S]="";d.needsUpdate=!0}d.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(f),v.render(p,h),f=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){if(a.dispose(),o!==null)o.dispose();if(l!==null)l.dispose();c.dispose(),d.dispose()}}var wh=new Fe,tl=new ri(1,1),Ah=new yr,Rh=new xo,Ch=new Er,oh=[],lh=[],ch=new Float32Array(16),hh=new Float32Array(9),uh=new Float32Array(4);function Qi(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=oh[s];if(r===void 0)r=new Float32Array(s),oh[s]=r;if(e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function Te(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function we(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Fr(t,e){let n=lh[e];if(n===void 0)n=new Int32Array(e),lh[e]=n;for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Sm(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1f(this.addr,e),n[0]=e}function Mm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Te(n,e))return;t.uniform2fv(this.addr,e),we(n,e)}}function bm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else if(e.r!==void 0){if(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b}else{if(Te(n,e))return;t.uniform3fv(this.addr,e),we(n,e)}}function Em(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Te(n,e))return;t.uniform4fv(this.addr,e),we(n,e)}}function Tm(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Te(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),we(n,e)}else{if(Te(n,i))return;uh.set(i),t.uniformMatrix2fv(this.addr,!1,uh),we(n,i)}}function wm(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Te(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),we(n,e)}else{if(Te(n,i))return;hh.set(i),t.uniformMatrix3fv(this.addr,!1,hh),we(n,i)}}function Am(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Te(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),we(n,e)}else{if(Te(n,i))return;ch.set(i),t.uniformMatrix4fv(this.addr,!1,ch),we(n,i)}}function Rm(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1i(this.addr,e),n[0]=e}function Cm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Te(n,e))return;t.uniform2iv(this.addr,e),we(n,e)}}function Im(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Te(n,e))return;t.uniform3iv(this.addr,e),we(n,e)}}function Pm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Te(n,e))return;t.uniform4iv(this.addr,e),we(n,e)}}function Lm(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1ui(this.addr,e),n[0]=e}function Dm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Te(n,e))return;t.uniform2uiv(this.addr,e),we(n,e)}}function Nm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Te(n,e))return;t.uniform3uiv(this.addr,e),we(n,e)}}function Um(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Te(n,e))return;t.uniform4uiv(this.addr,e),we(n,e)}}function Fm(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===t.SAMPLER_2D_SHADOW)tl.compareFunction=n.isReversedDepthBuffer()?vr:xr,r=tl;else r=wh;n.setTexture2D(e||r,s)}function Om(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(e||Rh,s)}function Bm(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTextureCube(e||Ch,s)}function zm(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(e||Ah,s)}function km(t){switch(t){case 5126:return Sm;case 35664:return Mm;case 35665:return bm;case 35666:return Em;case 35674:return Tm;case 35675:return wm;case 35676:return Am;case 5124:case 35670:return Rm;case 35667:case 35671:return Cm;case 35668:case 35672:return Im;case 35669:case 35673:return Pm;case 5125:return Lm;case 36294:return Dm;case 36295:return Nm;case 36296:return Um;case 35678:case 36198:case 36298:case 36306:case 35682:return Fm;case 35679:case 36299:case 36307:return Om;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return zm}}function Gm(t,e){t.uniform1fv(this.addr,e)}function Hm(t,e){let n=Qi(e,this.size,2);t.uniform2fv(this.addr,n)}function Vm(t,e){let n=Qi(e,this.size,3);t.uniform3fv(this.addr,n)}function Wm(t,e){let n=Qi(e,this.size,4);t.uniform4fv(this.addr,n)}function Xm(t,e){let n=Qi(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function qm(t,e){let n=Qi(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Ym(t,e){let n=Qi(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Zm(t,e){t.uniform1iv(this.addr,e)}function Jm(t,e){t.uniform2iv(this.addr,e)}function $m(t,e){t.uniform3iv(this.addr,e)}function Km(t,e){t.uniform4iv(this.addr,e)}function Qm(t,e){t.uniform1uiv(this.addr,e)}function jm(t,e){t.uniform2uiv(this.addr,e)}function tg(t,e){t.uniform3uiv(this.addr,e)}function eg(t,e){t.uniform4uiv(this.addr,e)}function ng(t,e,n){let i=this.cache,s=e.length,r=Fr(n,s);if(!Te(i,r))t.uniform1iv(this.addr,r),we(i,r);let a;if(this.type===t.SAMPLER_2D_SHADOW)a=tl;else a=wh;for(let o=0;o!==s;++o)n.setTexture2D(e[o]||a,r[o])}function ig(t,e,n){let i=this.cache,s=e.length,r=Fr(n,s);if(!Te(i,r))t.uniform1iv(this.addr,r),we(i,r);for(let a=0;a!==s;++a)n.setTexture3D(e[a]||Rh,r[a])}function sg(t,e,n){let i=this.cache,s=e.length,r=Fr(n,s);if(!Te(i,r))t.uniform1iv(this.addr,r),we(i,r);for(let a=0;a!==s;++a)n.setTextureCube(e[a]||Ch,r[a])}function rg(t,e,n){let i=this.cache,s=e.length,r=Fr(n,s);if(!Te(i,r))t.uniform1iv(this.addr,r),we(i,r);for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||Ah,r[a])}function ag(t){switch(t){case 5126:return Gm;case 35664:return Hm;case 35665:return Vm;case 35666:return Wm;case 35674:return Xm;case 35675:return qm;case 35676:return Ym;case 5124:case 35670:return Zm;case 35667:case 35671:return Jm;case 35668:case 35672:return $m;case 35669:case 35673:return Km;case 5125:return Qm;case 36294:return jm;case 36295:return tg;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return ng;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return rg}}class Ih{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=km(e.type)}}class Ph{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ag(e.type)}}class Lh{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(t,e[a.id],n)}}}var Ko=/(\w+)(\])?(\[|\.)?/g;function dh(t,e){t.seq.push(e),t.map[e.id]=e}function og(t,e,n){let i=t.name,s=i.length;Ko.lastIndex=0;while(!0){let r=Ko.exec(i),a=Ko.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l)o=o|0;if(c===void 0||c==="["&&a+2===s){dh(n,c===void 0?new Ih(o,t,e):new Ph(o,t,e));break}else{let p=n.map[o];if(p===void 0)p=new Lh(o),dh(n,p);n=p}}}class Ns{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=t.getActiveUniform(e,r),o=t.getUniformLocation(e,a.name);og(a,o,this)}let i=[],s=[];for(let r of this.seq)if(r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW)i.push(r);else s.push(r);if(i.length>0)this.seq=i.concat(s)}setValue(t,e,n,i){let s=this.map[e];if(s!==void 0)s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];if(i!==void 0)this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){let a=e[s],o=n[a.id];if(o.needsUpdate!==!1)a.setValue(t,o.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let r=t[i];if(r.id in e)n.push(r)}return n}}function fh(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var lg=37297,cg=0;function hg(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var ph=new Ft;function ug(t){Zt._getMatrix(ph,Zt.workingColorSpace,t);let e=`mat3( ${ph.elements.map((n)=>n.toFixed(4))} )`;switch(Zt.getTransfer(t)){case ho:return[e,"LinearTransferOETF"];case fe:return[e,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function mh(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+hg(t.getShaderSource(e),o)}else return r}function dg(t,e){let n=ug(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var fg={[va]:"Linear",[ya]:"Reinhard",[Sa]:"Cineon",[Ma]:"ACESFilmic",[Ea]:"AgX",[Ta]:"Neutral",[ba]:"Custom"};function pg(t,e){let n=fg[e];if(n===void 0)return Nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Nr=new F;function mg(){Zt.getLuminanceCoefficients(Nr);let t=Nr.x.toFixed(4),e=Nr.y.toFixed(4),n=Nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function gg(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ds).join(`
`)}function _g(t){let e=[];for(let n in t){let i=t[n];if(i===!1)continue;e.push("#define "+n+" "+i)}return e.join(`
`)}function xg(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),a=r.name,o=1;if(r.type===t.FLOAT_MAT2)o=2;if(r.type===t.FLOAT_MAT3)o=3;if(r.type===t.FLOAT_MAT4)o=4;n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Ds(t){return t!==""}function gh(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _h(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(t){return t.replace(vg,Sg)}var yg=new Map;function Sg(t,e){let n=kt[e];if(n===void 0){let i=yg.get(e);if(i!==void 0)n=kt[i],Nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return el(n)}var Mg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xh(t){return t.replace(Mg,bg)}function bg(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vh(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;if(t.precision==="highp")e+=`
#define HIGH_PRECISION`;else if(t.precision==="mediump")e+=`
#define MEDIUM_PRECISION`;else if(t.precision==="lowp")e+=`
#define LOW_PRECISION`;return e}var Eg={[_s]:"SHADOWMAP_TYPE_PCF",[ki]:"SHADOWMAP_TYPE_VSM"};function Tg(t){return Eg[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var wg={[Vi]:"ENVMAP_TYPE_CUBE",[$n]:"ENVMAP_TYPE_CUBE",[vs]:"ENVMAP_TYPE_CUBE_UV"};function Ag(t){if(t.envMap===!1)return"ENVMAP_TYPE_CUBE";return wg[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var Rg={[$n]:"ENVMAP_MODE_REFRACTION"};function Cg(t){if(t.envMap===!1)return"ENVMAP_MODE_REFLECTION";return Rg[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ig={[Mc]:"ENVMAP_BLENDING_MULTIPLY",[bc]:"ENVMAP_BLENDING_MIX",[Ec]:"ENVMAP_BLENDING_ADD"};function Pg(t){if(t.envMap===!1)return"ENVMAP_BLENDING_NONE";return Ig[t.combine]||"ENVMAP_BLENDING_NONE"}function Lg(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function Dg(t,e,n,i){let s=t.getContext(),{defines:r,vertexShader:a,fragmentShader:o}=n,l=Tg(n),c=Ag(n),d=Cg(n),p=Pg(n),h=Lg(n),u=gg(n),g=_g(r),x=s.createProgram(),m,f,R=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ds).join(`
`),m.length>0)m+=`
`;if(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ds).join(`
`),f.length>0)f+=`
`}else m=[vh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),f=[vh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==un?"#define TONE_MAPPING":"",n.toneMapping!==un?kt.tonemapping_pars_fragment:"",n.toneMapping!==un?pg("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,dg("linearToOutputTexel",n.outputColorSpace),mg(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ds).join(`
`);if(a=el(a),a=gh(a,n),a=_h(a,n),o=el(o),o=gh(o,n),o=_h(o,n),a=xh(a),o=xh(o),n.isRawShaderMaterial!==!0)R=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===uo?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===uo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f;let A=R+m+a,v=R+f+o,T=fh(s,s.VERTEX_SHADER,A),w=fh(s,s.FRAGMENT_SHADER,v);if(s.attachShader(x,T),s.attachShader(x,w),n.index0AttributeName!==void 0)s.bindAttribLocation(x,0,n.index0AttributeName);else if(n.hasPositionAttribute===!0)s.bindAttribLocation(x,0,"position");s.linkProgram(x);function C(O){if(t.debug.checkShaderErrors){let B=s.getProgramInfoLog(x)||"",et=s.getShaderInfoLog(T)||"",D=s.getShaderInfoLog(w)||"",W=B.trim(),nt=et.trim(),H=D.trim(),lt=!0,Q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(lt=!1,typeof t.debug.onShaderError==="function")t.debug.onShaderError(s,x,T,w);else{let it=mh(s,T,"vertex"),at=mh(s,w,"fragment");Ut("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+W+`
`+it+`
`+at)}else if(W!=="")Nt("WebGLProgram: Program Info Log:",W);else if(nt===""||H==="")Q=!1;if(Q)O.diagnostics={runnable:lt,programLog:W,vertexShader:{log:nt,prefix:m},fragmentShader:{log:H,prefix:f}}}s.deleteShader(T),s.deleteShader(w),S=new Ns(s,x),E=xg(s,x)}let S;this.getUniforms=function(){if(S===void 0)C(this);return S};let E;this.getAttributes=function(){if(E===void 0)C(this);return E};let Z=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(Z===!1)Z=s.getProgramParameter(x,lg);return Z},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=cg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=w,this}var Ng=0;class Dh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);if(i.has(e)===!1)i.add(e),e.usedTimes++;if(i.has(n)===!1)i.add(n),n.usedTimes++;return this}remove(t){let e=this.materialCache.get(t);for(let n of e)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);if(n===void 0)n=new Set,e.set(t,n);return n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);if(n===void 0)n=new Nh(t),e.set(t,n);return n}}class Nh{constructor(t){this.id=Ng++,this.code=t,this.usedTimes=0}}function Ug(t){return t===ti||t===gr||t===_r}function Fg(t,e,n,i,s,r){let a=new bs,o=new Dh,l=new Set,c=[],d=new Map,{logarithmicDepthBuffer:p,precision:h}=i,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){if(l.add(S),S===0)return"uv";return`uv${S}`}function x(S,E,Z,O,B,et){let D=O.fog,W=B.geometry,nt=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?O.environment:null,H=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,lt=e.get(S.envMap||nt,H),Q=!!lt&&lt.mapping===vs?lt.image.height:null,it=u[S.type];if(S.precision!==null){if(h=i.getMaxPrecision(S.precision),h!==S.precision)Nt("WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead.")}let at=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,It=at!==void 0?at.length:0,Pt=0;if(W.morphAttributes.position!==void 0)Pt=1;if(W.morphAttributes.normal!==void 0)Pt=2;if(W.morphAttributes.color!==void 0)Pt=3;let Kt,Ot,J,ot;if(it){let ut=Sn[it];Kt=ut.vertexShader,Ot=ut.fragmentShader}else{Kt=S.vertexShader,Ot=S.fragmentShader;let ut=o.getVertexShaderStage(S),vt=o.getFragmentShaderStage(S);o.update(S,ut,vt),J=ut.id,ot=vt.id}let ct=t.getRenderTarget(),Tt=t.state.buffers.depth.getReversed(),Lt=B.isInstancedMesh===!0,wt=B.isBatchedMesh===!0,ge=!!S.map,Gt=!!S.matcap,Xt=!!lt,ie=!!S.aoMap,Yt=!!S.lightMap,ye=!!S.bumpMap&&S.wireframe===!1,he=!!S.normalMap,Pe=!!S.displacementMap,ve=!!S.emissiveMap,oe=!!S.metalnessMap,L=!!S.roughnessMap,Le=S.anisotropy>0,jt=S.clearcoat>0,ee=S.dispersion>0,M=S.retroreflectivity>0,_=S.iridescence>0,P=S.sheen>0,V=S.transmission>0,rt=Le&&!!S.anisotropyMap,dt=jt&&!!S.clearcoatMap,ft=jt&&!!S.clearcoatNormalMap,K=jt&&!!S.clearcoatRoughnessMap,tt=_&&!!S.iridescenceMap,_t=_&&!!S.iridescenceThicknessMap,At=P&&!!S.sheenColorMap,pt=P&&!!S.sheenRoughnessMap,ht=!!S.specularMap,Ct=!!S.specularColorMap,Dt=!!S.specularIntensityMap,Jt=V&&!!S.transmissionMap,b=V&&!!S.thicknessMap,U=!!S.gradientMap,I=!!S.alphaMap,q=S.alphaTest>0,Y=!!S.alphaHash,z=!!S.extensions,j=un;if(S.toneMapped){if(ct===null||ct.isXRRenderTarget===!0)j=t.toneMapping}let st={shaderID:it,shaderType:S.type,shaderName:S.name,vertexShader:Kt,fragmentShader:Ot,defines:S.defines,customVertexShaderID:J,customFragmentShaderID:ot,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:wt,batchingColor:wt&&B._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&B.instanceColor!==null,instancingMorph:Lt&&B.morphTexture!==null,outputColorSpace:ct===null?t.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Zt.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:ge,matcap:Gt,envMap:Xt,envMapMode:Xt&&lt.mapping,envMapCubeUVHeight:Q,aoMap:ie,lightMap:Yt,bumpMap:ye,normalMap:he,displacementMap:Pe,emissiveMap:ve,normalMapObjectSpace:he&&S.normalMapType===Uc,normalMapTangentSpace:he&&S.normalMapType===lo,packedNormalMap:he&&S.normalMapType===lo&&Ug(S.normalMap.format),metalnessMap:oe,roughnessMap:L,anisotropy:Le,anisotropyMap:rt,clearcoat:jt,clearcoatMap:dt,clearcoatNormalMap:ft,clearcoatRoughnessMap:K,dispersion:ee,retroreflection:M,iridescence:_,iridescenceMap:tt,iridescenceThicknessMap:_t,sheen:P,sheenColorMap:At,sheenRoughnessMap:pt,specularMap:ht,specularColorMap:Ct,specularIntensityMap:Dt,transmission:V,transmissionMap:Jt,thicknessMap:b,gradientMap:U,opaque:S.transparent===!1&&S.blending===xs&&S.alphaToCoverage===!1,alphaMap:I,alphaTest:q,alphaHash:Y,combine:S.combine,mapUv:ge&&g(S.map.channel),aoMapUv:ie&&g(S.aoMap.channel),lightMapUv:Yt&&g(S.lightMap.channel),bumpMapUv:ye&&g(S.bumpMap.channel),normalMapUv:he&&g(S.normalMap.channel),displacementMapUv:Pe&&g(S.displacementMap.channel),emissiveMapUv:ve&&g(S.emissiveMap.channel),metalnessMapUv:oe&&g(S.metalnessMap.channel),roughnessMapUv:L&&g(S.roughnessMap.channel),anisotropyMapUv:rt&&g(S.anisotropyMap.channel),clearcoatMapUv:dt&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ft&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:At&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:pt&&g(S.sheenRoughnessMap.channel),specularMapUv:ht&&g(S.specularMap.channel),specularColorMapUv:Ct&&g(S.specularColorMap.channel),specularIntensityMapUv:Dt&&g(S.specularIntensityMap.channel),transmissionMapUv:Jt&&g(S.transmissionMap.channel),thicknessMapUv:b&&g(S.thicknessMap.channel),alphaMapUv:I&&g(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(he||Le),vertexNormals:!!W.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!W.attributes.uv&&(ge||I),fog:!!D,useFog:S.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||W.attributes.normal===void 0&&he===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Tt,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:Pt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:et.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&Z.length>0,shadowMapType:t.shadowMap.type,toneMapping:j,decodeVideoTexture:ge&&S.map.isVideoTexture===!0&&Zt.getTransfer(S.map.colorSpace)===fe,decodeVideoTextureEmissive:ve&&S.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(S.emissiveMap.colorSpace)===fe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===tn,flipSided:S.side===Ve,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:z&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(z&&S.extensions.multiDraw===!0||wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return st.vertexUv1s=l.has(1),st.vertexUv2s=l.has(2),st.vertexUv3s=l.has(3),l.clear(),st}function m(S){let E=[];if(S.shaderID)E.push(S.shaderID);else E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID);if(S.defines!==void 0)for(let Z in S.defines)E.push(Z),E.push(S.defines[Z]);if(S.isRawShaderMaterial===!1)f(E,S),R(E,S),E.push(t.outputColorSpace);return E.push(S.customProgramCacheKey),E.join()}function f(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numSunLights),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numSunLightShadows),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function R(S,E){if(a.disableAll(),E.instancing)a.enable(0);if(E.instancingColor)a.enable(1);if(E.instancingMorph)a.enable(2);if(E.matcap)a.enable(3);if(E.envMap)a.enable(4);if(E.normalMapObjectSpace)a.enable(5);if(E.normalMapTangentSpace)a.enable(6);if(E.clearcoat)a.enable(7);if(E.iridescence)a.enable(8);if(E.alphaTest)a.enable(9);if(E.vertexColors)a.enable(10);if(E.vertexAlphas)a.enable(11);if(E.vertexUv1s)a.enable(12);if(E.vertexUv2s)a.enable(13);if(E.vertexUv3s)a.enable(14);if(E.vertexTangents)a.enable(15);if(E.anisotropy)a.enable(16);if(E.alphaHash)a.enable(17);if(E.batching)a.enable(18);if(E.dispersion)a.enable(19);if(E.retroreflection)a.enable(24);if(E.batchingColor)a.enable(20);if(E.gradientMap)a.enable(21);if(E.packedNormalMap)a.enable(22);if(E.vertexNormals)a.enable(23);if(S.push(a.mask),a.disableAll(),E.fog)a.enable(0);if(E.useFog)a.enable(1);if(E.flatShading)a.enable(2);if(E.logarithmicDepthBuffer)a.enable(3);if(E.reversedDepthBuffer)a.enable(4);if(E.skinning)a.enable(5);if(E.morphTargets)a.enable(6);if(E.morphNormals)a.enable(7);if(E.morphColors)a.enable(8);if(E.premultipliedAlpha)a.enable(9);if(E.shadowMapEnabled)a.enable(10);if(E.doubleSided)a.enable(11);if(E.flipSided)a.enable(12);if(E.useDepthPacking)a.enable(13);if(E.dithering)a.enable(14);if(E.transmission)a.enable(15);if(E.sheen)a.enable(16);if(E.opaque)a.enable(17);if(E.pointsUvs)a.enable(18);if(E.decodeVideoTexture)a.enable(19);if(E.decodeVideoTextureEmissive)a.enable(20);if(E.alphaToCoverage)a.enable(21);if(E.numLightProbeGrids>0)a.enable(22);if(E.hasPositionAttribute)a.enable(23);S.push(a.mask)}function A(S){let E=u[S.type],Z;if(E){let O=Sn[E];Z=jc.clone(O.uniforms)}else Z=S.uniforms;return Z}function v(S,E){let Z=d.get(E);if(Z!==void 0)++Z.usedTimes;else Z=new Dg(t,E,S,s),c.push(Z),d.set(E,Z);return Z}function T(S){if(--S.usedTimes===0){let E=c.indexOf(S);c[E]=c[c.length-1],c.pop(),d.delete(S.cacheKey),S.destroy()}}function w(S){o.remove(S)}function C(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:A,acquireProgram:v,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:C}}function Og(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);if(o===void 0)o={},t.set(a,o);return o}function i(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function Bg(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.material.id!==e.material.id)return t.material.id-e.material.id;else if(t.materialVariant!==e.materialVariant)return t.materialVariant-e.materialVariant;else if(t.z!==e.z)return t.z-e.z;else return t.id-e.id}function yh(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.z!==e.z)return e.z-t.z;else return t.id-e.id}function Sh(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(h){let u=0;if(h.isInstancedMesh)u+=2;if(h.isSkinnedMesh)u+=1;return u}function o(h,u,g,x,m,f){let R=t[e];if(R===void 0)R={id:h.id,object:h,geometry:u,material:g,materialVariant:a(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:f},t[e]=R;else R.id=h.id,R.object=h,R.geometry=u,R.material=g,R.materialVariant=a(h),R.groupOrder=x,R.renderOrder=h.renderOrder,R.z=m,R.group=f;return e++,R}function l(h,u,g,x,m,f,R){if(R.reversedDepth===!0)m=-m;let A=o(h,u,g,x,m,f);if(g.transmission>0)i.push(A);else if(g.transparent===!0)s.push(A);else n.push(A)}function c(h,u,g,x,m,f){let R=o(h,u,g,x,m,f);if(g.transmission>0)i.unshift(R);else if(g.transparent===!0)s.unshift(R);else n.unshift(R)}function d(h,u){if(n.length>1)n.sort(h||Bg);if(i.length>1)i.sort(u||yh);if(s.length>1)s.sort(u||yh)}function p(){for(let h=e,u=t.length;h<u;h++){let g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:p,sort:d}}function zg(){let t=new WeakMap;function e(i,s){let r=t.get(i),a;if(r===void 0)a=new Sh,t.set(i,[a]);else if(s>=r.length)a=new Sh,r.push(a);else a=r[s];return a}function n(){t=new WeakMap}return{get:e,dispose:n}}function kg(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new F,color:new Qt};break;case"SpotLight":n={position:new F,direction:new F,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":n={color:new Qt,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function Gg(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1000};break}return t[e.id]=n,n}}}var Hg=0;function Vg(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Wg(t){let e=new kg,n=Gg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);let s=new F,r=new de,a=new de;function o(c){let d=0,p=0,h=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let u=0,g=0,x=0,m=0,f=0,R=0,A=0,v=0,T=0,w=0,C=0,S=0,E=0,Z=0;c.sort(Vg);for(let B=0,et=c.length;B<et;B++){let D=c[B],{color:W,intensity:nt,distance:H}=D,lt=null;if(D.shadow&&D.shadow.map)if(D.shadow.map.texture.format===ti)lt=D.shadow.map.texture;else lt=D.shadow.map.depthTexture||D.shadow.map.texture;if(D.isAmbientLight)d+=W.r*nt,p+=W.g*nt,h+=W.b*nt;else if(D.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(D.sh.coefficients[Q],nt);Z++}else if(D.isSunLight){let Q=e.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let it=D.shadow,at=n.get(D);at.shadowIntensity=it.intensity,at.shadowBias=it.bias,at.shadowNormalBias=it.normalBias,at.shadowRadius=it.radius,at.shadowMapSize.copy(it.mapSize).multiply(it.getFrameExtents()),i.sunShadow[g]=at,i.sunShadowMap[g]=lt;let It=it.getViewportCount();for(let Pt=0;Pt<It;Pt++)i.sunShadowMatrix[x+Pt]=it.getMatrix(Pt),i.sunShadowCascade[x+Pt]=it._cascadeData[Pt];x+=It,g++}i.sun[u]=Q,u++}else if(D.isDirectionalLight){let Q=e.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let it=D.shadow,at=n.get(D);at.shadowIntensity=it.intensity,at.shadowBias=it.bias,at.shadowNormalBias=it.normalBias,at.shadowRadius=it.radius,at.shadowMapSize=it.mapSize,i.directionalShadow[m]=at,i.directionalShadowMap[m]=lt,i.directionalShadowMatrix[m]=D.shadow.matrix,T++}i.directional[m]=Q,m++}else if(D.isSpotLight){let Q=e.get(D);Q.position.setFromMatrixPosition(D.matrixWorld),Q.color.copy(W).multiplyScalar(nt),Q.distance=H,Q.coneCos=Math.cos(D.angle),Q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Q.decay=D.decay,i.spot[R]=Q;let it=D.shadow;if(D.map){if(i.spotLightMap[S]=D.map,S++,it.updateMatrices(D),D.castShadow)E++}if(i.spotLightMatrix[R]=it.matrix,D.castShadow){let at=n.get(D);at.shadowIntensity=it.intensity,at.shadowBias=it.bias,at.shadowNormalBias=it.normalBias,at.shadowRadius=it.radius,at.shadowMapSize=it.mapSize,i.spotShadow[R]=at,i.spotShadowMap[R]=lt,C++}R++}else if(D.isRectAreaLight){let Q=e.get(D);Q.color.copy(W).multiplyScalar(nt),Q.halfWidth.set(D.width*0.5,0,0),Q.halfHeight.set(0,D.height*0.5,0),i.rectArea[A]=Q,A++}else if(D.isPointLight){let Q=e.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),Q.distance=D.distance,Q.decay=D.decay,D.castShadow){let it=D.shadow,at=n.get(D);at.shadowIntensity=it.intensity,at.shadowBias=it.bias,at.shadowNormalBias=it.normalBias,at.shadowRadius=it.radius,at.shadowMapSize=it.mapSize,at.shadowCameraNear=it.camera.near,at.shadowCameraFar=it.camera.far,i.pointShadow[f]=at,i.pointShadowMap[f]=lt,i.pointShadowMatrix[f]=D.shadow.matrix,w++}i.point[f]=Q,f++}else if(D.isHemisphereLight){let Q=e.get(D);Q.skyColor.copy(D.color).multiplyScalar(nt),Q.groundColor.copy(D.groundColor).multiplyScalar(nt),i.hemi[v]=Q,v++}}if(A>0)if(t.has("OES_texture_float_linear")===!0)i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2;else i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2;i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=h;let O=i.hash;if(O.sunLength!==u||O.directionalLength!==m||O.pointLength!==f||O.spotLength!==R||O.rectAreaLength!==A||O.hemiLength!==v||O.numSunShadows!==g||O.numDirectionalShadows!==T||O.numPointShadows!==w||O.numSpotShadows!==C||O.numSpotMaps!==S||O.numLightProbes!==Z)i.sun.length=u,i.directional.length=m,i.spot.length=R,i.rectArea.length=A,i.point.length=f,i.hemi.length=v,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+S-E,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=Z,O.sunLength=u,O.directionalLength=m,O.pointLength=f,O.spotLength=R,O.rectAreaLength=A,O.hemiLength=v,O.numSunShadows=g,O.numDirectionalShadows=T,O.numPointShadows=w,O.numSpotShadows=C,O.numSpotMaps=S,O.numLightProbes=Z,i.version=Hg++}function l(c,d){let p=0,h=0,u=0,g=0,x=0,m=0,f=d.matrixWorldInverse;for(let R=0,A=c.length;R<A;R++){let v=c[R];if(v.isSunLight){let T=i.sun[p];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(f),p++}else if(v.isDirectionalLight){let T=i.directional[h];T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),h++}else if(v.isSpotLight){let T=i.spot[g];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),g++}else if(v.isRectAreaLight){let T=i.rectArea[x];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),a.identity(),r.copy(v.matrixWorld),r.premultiply(f),a.extractRotation(r),T.halfWidth.set(v.width*0.5,0,0),T.halfHeight.set(0,v.height*0.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let T=i.point[u];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),u++}else if(v.isHemisphereLight){let T=i.hemi[m];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:i}}function Mh(t){let e=new Wg(t),n=[],i=[],s=[];function r(h){p.camera=h,n.length=0,i.length=0,s.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(n)}function d(h){e.setupView(n,h)}let p={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Xg(t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),o;if(a===void 0)o=new Mh(t),e.set(s,[o]);else if(r>=a.length)o=new Mh(t),a.push(o);else o=a[r];return o}function i(){e=new WeakMap}return{get:n,dispose:i}}var qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Zg=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Jg=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],bh=new de,Ls=new F,Qo=new F;function $g(t,e,n){let i=new Yi,s=new Mt,r=new Mt,a=new xe,o=new Co,l=new Io,c={},d=n.maxTextureSize,p={[Gi]:Ve,[Ve]:Gi,[tn]:tn},h=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:qg,fragmentShader:Yg}),u=h.clone();u.defines.HORIZONTAL_PASS=1;let g=new Ce;g.setAttribute("position",new hn(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let x=new Ie(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_s;let f=this.type;this.render=function(w,C,S){if(m.enabled===!1)return;if(m.autoUpdate===!1&&m.needsUpdate===!1)return;if(w.length===0)return;if(this.type===Zl)Nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_s;let E=t.getRenderTarget(),Z=t.getActiveCubeFace(),O=t.getActiveMipmapLevel(),B=t.state;if(B.setBlending(_n),B.buffers.depth.getReversed()===!0)B.buffers.color.setClear(0,0,0,0);else B.buffers.color.setClear(1,1,1,1);B.buffers.depth.setTest(!0),B.setScissorTest(!1);let et=f!==this.type;if(et)C.traverse(function(D){if(D.material)if(Array.isArray(D.material))D.material.forEach((W)=>W.needsUpdate=!0);else D.material.needsUpdate=!0});for(let D=0,W=w.length;D<W;D++){let nt=w[D],H=nt.shadow;if(H===void 0){Nt("WebGLShadowMap:",nt,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let lt=H.getFrameExtents();if(s.multiply(lt),r.copy(H.mapSize),s.x>d||s.y>d){if(s.x>d)r.x=Math.floor(d/lt.x),s.x=r.x*lt.x,H.mapSize.x=r.x;if(s.y>d)r.y=Math.floor(d/lt.y),s.y=r.y*lt.y,H.mapSize.y=r.y}let Q=t.state.buffers.depth.getReversed();if(H.camera._reversedDepth=Q,H.map===null||et===!0){if(H.map!==null){if(H.map.depthTexture!==null)H.map.depthTexture.dispose(),H.map.depthTexture=null;H.map.dispose()}if(this.type===ki){if(nt.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Ze(s.x,s.y,{format:ti,type:xn,minFilter:We,magFilter:We,generateMipmaps:!1}),H.map.texture.name=nt.name+".shadowMap",H.map.depthTexture=new ri(s.x,s.y,Cn),H.map.depthTexture.name=nt.name+".shadowMapDepth",H.map.depthTexture.format=Qn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=kn,H.map.depthTexture.magFilter=kn}else{if(nt.isPointLight)H.map=new nl(s.x),H.map.depthTexture=new yo(s.x,Gn);else H.map=new Ze(s.x,s.y),H.map.depthTexture=new ri(s.x,s.y,Gn);if(H.map.depthTexture.name=nt.name+".shadowMap",H.map.depthTexture.format=Qn,this.type===_s)H.map.depthTexture.compareFunction=Q?vr:xr,H.map.depthTexture.minFilter=We,H.map.depthTexture.magFilter=We;else H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=kn,H.map.depthTexture.magFilter=kn}H.camera.updateProjectionMatrix()}if(H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y))H.map.setSize(s.x,s.y);let it=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();if(nt.isPointLight!==!0)H.updateMatrices(nt,S);for(let at=0;at<it;at++){let It=H.getCamera(at);if(nt.isPointLight){let{camera:Pt,matrix:Kt}=H,Ot=nt.distance||Pt.far;if(Ot!==Pt.far)Pt.far=Ot,Pt.updateProjectionMatrix();Ls.setFromMatrixPosition(nt.matrixWorld),Pt.position.copy(Ls),Qo.copy(Pt.position),Qo.add(Zg[at]),Pt.up.copy(Jg[at]),Pt.lookAt(Qo),Pt.updateMatrixWorld(),Kt.makeTranslation(-Ls.x,-Ls.y,-Ls.z),bh.multiplyMatrices(Pt.projectionMatrix,Pt.matrixWorldInverse),H._frustum.setFromProjectionMatrix(bh,Pt.coordinateSystem,Pt.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)t.setRenderTarget(H.map,at),t.clear();else{if(at===0)t.setRenderTarget(H.map),t.clear();let Pt=H.getViewport(at);a.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),B.viewport(a)}i=H.getFrustum(at),v(C,S,It,nt,this.type)}if(H.isPointLightShadow!==!0&&this.type===ki)R(H,S);H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(E,Z,O)};function R(w,C){let S=e.update(x);if(h.defines.VSM_SAMPLES!==w.blurSamples)h.defines.VSM_SAMPLES=w.blurSamples,u.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,u.needsUpdate=!0;if(w.mapPass===null)w.mapPass=new Ze(s.x,s.y,{format:ti,type:xn});else if(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)w.mapPass.setSize(w.map.width,w.map.height);h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(C,null,S,h,x,null),u.uniforms.shadow_pass.value=w.mapPass.texture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(C,null,S,u,x,null)}function A(w,C,S,E){let Z=null,O=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(O!==void 0)Z=O;else if(Z=S.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let B=Z.uuid,et=C.uuid,D=c[B];if(D===void 0)D={},c[B]=D;let W=D[et];if(W===void 0)W=Z.clone(),D[et]=W,C.addEventListener("dispose",T);Z=W}if(Z.visible=C.visible,Z.wireframe=C.wireframe,E===ki)Z.side=C.shadowSide!==null?C.shadowSide:C.side;else Z.side=C.shadowSide!==null?C.shadowSide:p[C.side];if(Z.alphaMap=C.alphaMap,Z.alphaTest=C.alphaToCoverage===!0?0.5:C.alphaTest,Z.map=C.map,Z.clipShadows=C.clipShadows,Z.clippingPlanes=C.clippingPlanes,Z.clipIntersection=C.clipIntersection,Z.displacementMap=C.displacementMap,Z.displacementScale=C.displacementScale,Z.displacementBias=C.displacementBias,Z.wireframeLinewidth=C.wireframeLinewidth,Z.linewidth=C.linewidth,S.isPointLight===!0&&Z.isMeshDistanceMaterial===!0){let B=t.properties.get(Z);B.light=S}return Z}function v(w,C,S,E,Z){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)){if((w.castShadow||w.receiveShadow&&Z===ki)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let et=e.update(w),D=w.material;if(Array.isArray(D)){let W=et.groups;for(let nt=0,H=W.length;nt<H;nt++){let lt=W[nt],Q=D[lt.materialIndex];if(Q&&Q.visible){let it=A(w,Q,E,Z);w.onBeforeShadow(t,w,C,S,et,it,lt),t.renderBufferDirect(S,null,et,it,w,lt),w.onAfterShadow(t,w,C,S,et,it,lt)}}}else if(D.visible){let W=A(w,D,E,Z);w.onBeforeShadow(t,w,C,S,et,W,null),t.renderBufferDirect(S,null,et,W,w,null),w.onAfterShadow(t,w,C,S,et,W,null)}}}let B=w.children;for(let et=0,D=B.length;et<D;et++)v(B[et],C,S,E,Z)}function T(w){w.target.removeEventListener("dispose",T);for(let S in c){let E=c[S],Z=w.target.uuid;if(Z in E)E[Z].dispose(),delete E[Z]}}}function Kg(t,e){function n(){let b=!1,U=new xe,I=null,q=new xe(0,0,0,0);return{setMask:function(Y){if(I!==Y&&!b)t.colorMask(Y,Y,Y,Y),I=Y},setLocked:function(Y){b=Y},setClear:function(Y,z,j,st,ut){if(ut===!0)Y*=st,z*=st,j*=st;if(U.set(Y,z,j,st),q.equals(U)===!1)t.clearColor(Y,z,j,st),q.copy(U)},reset:function(){b=!1,I=null,q.set(-1,0,0,0)}}}function i(){let b=!1,U=!1,I=null,q=null,Y=null;return{setReversed:function(z){if(U!==z){let j=e.get("EXT_clip_control");if(z)j.clipControlEXT(j.LOWER_LEFT_EXT,j.ZERO_TO_ONE_EXT);else j.clipControlEXT(j.LOWER_LEFT_EXT,j.NEGATIVE_ONE_TO_ONE_EXT);U=z;let st=Y;Y=null,this.setClear(st)}},getReversed:function(){return U},setTest:function(z){if(z)ct(t.DEPTH_TEST);else Tt(t.DEPTH_TEST)},setMask:function(z){if(I!==z&&!b)t.depthMask(z),I=z},setFunc:function(z){if(U)z=qc[z];if(q!==z){switch(z){case mc:t.depthFunc(t.NEVER);break;case gc:t.depthFunc(t.ALWAYS);break;case _c:t.depthFunc(t.LESS);break;case xa:t.depthFunc(t.LEQUAL);break;case xc:t.depthFunc(t.EQUAL);break;case vc:t.depthFunc(t.GEQUAL);break;case yc:t.depthFunc(t.GREATER);break;case Sc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}q=z}},setLocked:function(z){b=z},setClear:function(z){if(Y!==z){if(Y=z,U)z=1-z;t.clearDepth(z)}},reset:function(){b=!1,I=null,q=null,Y=null,U=!1}}}function s(){let b=!1,U=null,I=null,q=null,Y=null,z=null,j=null,st=null,ut=null;return{setTest:function(vt){if(!b)if(vt)ct(t.STENCIL_TEST);else Tt(t.STENCIL_TEST)},setMask:function(vt){if(U!==vt&&!b)t.stencilMask(vt),U=vt},setFunc:function(vt,le,$t){if(I!==vt||q!==le||Y!==$t)t.stencilFunc(vt,le,$t),I=vt,q=le,Y=$t},setOp:function(vt,le,$t){if(z!==vt||j!==le||st!==$t)t.stencilOp(vt,le,$t),z=vt,j=le,st=$t},setLocked:function(vt){b=vt},setClear:function(vt){if(ut!==vt)t.clearStencil(vt),ut=vt},reset:function(){b=!1,U=null,I=null,q=null,Y=null,z=null,j=null,st=null,ut=null}}}let r=new n,a=new i,o=new s,l=new WeakMap,c=new WeakMap,d={},p={},h={},u=new WeakMap,g=[],x=null,m=!1,f=null,R=null,A=null,v=null,T=null,w=null,C=null,S=new Qt(0,0,0),E=0,Z=!1,O=null,B=null,et=null,D=null,W=null,nt=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,lt=0,Q=t.getParameter(t.VERSION);if(Q.indexOf("WebGL")!==-1)lt=parseFloat(/^WebGL (\d)/.exec(Q)[1]),H=lt>=1;else if(Q.indexOf("OpenGL ES")!==-1)lt=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),H=lt>=2;let it=null,at={},It=t.getParameter(t.SCISSOR_BOX),Pt=t.getParameter(t.VIEWPORT),Kt=new xe().fromArray(It),Ot=new xe().fromArray(Pt);function J(b,U,I,q){let Y=new Uint8Array(4),z=t.createTexture();t.bindTexture(b,z),t.texParameteri(b,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(b,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let j=0;j<I;j++)if(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)t.texImage3D(U,0,t.RGBA,1,1,q,0,t.RGBA,t.UNSIGNED_BYTE,Y);else t.texImage2D(U+j,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Y);return z}let ot={};ot[t.TEXTURE_2D]=J(t.TEXTURE_2D,t.TEXTURE_2D,1),ot[t.TEXTURE_CUBE_MAP]=J(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[t.TEXTURE_2D_ARRAY]=J(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ot[t.TEXTURE_3D]=J(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ct(t.DEPTH_TEST),a.setFunc(xa),ye(!1),he(pa),ct(t.CULL_FACE),ie(_n);function ct(b){if(d[b]!==!0)t.enable(b),d[b]=!0}function Tt(b){if(d[b]!==!1)t.disable(b),d[b]=!1}function Lt(b,U){if(h[b]!==U){if(t.bindFramebuffer(b,U),h[b]=U,b===t.DRAW_FRAMEBUFFER)h[t.FRAMEBUFFER]=U;if(b===t.FRAMEBUFFER)h[t.DRAW_FRAMEBUFFER]=U;return!0}return!1}function wt(b,U){let I=g,q=!1;if(b){if(I=u.get(U),I===void 0)I=[],u.set(U,I);let Y=b.textures;if(I.length!==Y.length||I[0]!==t.COLOR_ATTACHMENT0){for(let z=0,j=Y.length;z<j;z++)I[z]=t.COLOR_ATTACHMENT0+z;I.length=Y.length,q=!0}}else if(I[0]!==t.BACK)I[0]=t.BACK,q=!0;if(q)t.drawBuffers(I)}function ge(b){if(x!==b)return t.useProgram(b),x=b,!0;return!1}let Gt={[Hi]:t.FUNC_ADD,[$l]:t.FUNC_SUBTRACT,[Kl]:t.FUNC_REVERSE_SUBTRACT};Gt[Ql]=t.MIN,Gt[jl]=t.MAX;let Xt={[tc]:t.ZERO,[ec]:t.ONE,[nc]:t.SRC_COLOR,[sc]:t.SRC_ALPHA,[hc]:t.SRC_ALPHA_SATURATE,[lc]:t.DST_COLOR,[ac]:t.DST_ALPHA,[ic]:t.ONE_MINUS_SRC_COLOR,[rc]:t.ONE_MINUS_SRC_ALPHA,[cc]:t.ONE_MINUS_DST_COLOR,[oc]:t.ONE_MINUS_DST_ALPHA,[uc]:t.CONSTANT_COLOR,[dc]:t.ONE_MINUS_CONSTANT_COLOR,[fc]:t.CONSTANT_ALPHA,[pc]:t.ONE_MINUS_CONSTANT_ALPHA};function ie(b,U,I,q,Y,z,j,st,ut,vt){if(b===_n){if(m===!0)Tt(t.BLEND),m=!1;return}if(m===!1)ct(t.BLEND),m=!0;if(b!==Jl){if(b!==f||vt!==Z){if(R!==Hi||T!==Hi)t.blendEquation(t.FUNC_ADD),R=Hi,T=Hi;if(vt)switch(b){case xs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ma:t.blendFunc(t.ONE,t.ONE);break;case ga:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case _a:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ut("WebGLState: Invalid blending: ",b);break}else switch(b){case xs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ma:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case ga:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _a:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",b);break}A=null,v=null,w=null,C=null,S.set(0,0,0),E=0,f=b,Z=vt}return}if(Y=Y||U,z=z||I,j=j||q,U!==R||Y!==T)t.blendEquationSeparate(Gt[U],Gt[Y]),R=U,T=Y;if(I!==A||q!==v||z!==w||j!==C)t.blendFuncSeparate(Xt[I],Xt[q],Xt[z],Xt[j]),A=I,v=q,w=z,C=j;if(st.equals(S)===!1||ut!==E)t.blendColor(st.r,st.g,st.b,ut),S.copy(st),E=ut;f=b,Z=!1}function Yt(b,U){b.side===tn?Tt(t.CULL_FACE):ct(t.CULL_FACE);let I=b.side===Ve;if(U)I=!I;ye(I),b.blending===xs&&b.transparent===!1?ie(_n):ie(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),a.setFunc(b.depthFunc),a.setTest(b.depthTest),a.setMask(b.depthWrite),r.setMask(b.colorWrite);let q=b.stencilWrite;if(o.setTest(q),q)o.setMask(b.stencilWriteMask),o.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),o.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass);ve(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?ct(t.SAMPLE_ALPHA_TO_COVERAGE):Tt(t.SAMPLE_ALPHA_TO_COVERAGE)}function ye(b){if(O!==b){if(b)t.frontFace(t.CW);else t.frontFace(t.CCW);O=b}}function he(b){if(b!==ql){if(ct(t.CULL_FACE),b!==B)if(b===pa)t.cullFace(t.BACK);else if(b===Yl)t.cullFace(t.FRONT);else t.cullFace(t.FRONT_AND_BACK)}else Tt(t.CULL_FACE);B=b}function Pe(b){if(b!==et){if(H)t.lineWidth(b);et=b}}function ve(b,U,I){if(b){if(ct(t.POLYGON_OFFSET_FILL),D!==U||W!==I){if(D=U,W=I,a.getReversed())U=-U;t.polygonOffset(U,I)}}else Tt(t.POLYGON_OFFSET_FILL)}function oe(b){if(b)ct(t.SCISSOR_TEST);else Tt(t.SCISSOR_TEST)}function L(b){if(b===void 0)b=t.TEXTURE0+nt-1;if(it!==b)t.activeTexture(b),it=b}function Le(b,U,I){if(I===void 0)if(it===null)I=t.TEXTURE0+nt-1;else I=it;let q=at[I];if(q===void 0)q={type:void 0,texture:void 0},at[I]=q;if(q.type!==b||q.texture!==U){if(it!==I)t.activeTexture(I),it=I;t.bindTexture(b,U||ot[b]),q.type=b,q.texture=U}}function jt(){let b=at[it];if(b!==void 0&&b.type!==void 0)t.bindTexture(b.type,null),b.type=void 0,b.texture=void 0}function ee(){try{t.compressedTexImage2D(...arguments)}catch(b){Ut("WebGLState:",b)}}function M(){try{t.compressedTexImage3D(...arguments)}catch(b){Ut("WebGLState:",b)}}function _(){try{t.texSubImage2D(...arguments)}catch(b){Ut("WebGLState:",b)}}function P(){try{t.texSubImage3D(...arguments)}catch(b){Ut("WebGLState:",b)}}function V(){try{t.compressedTexSubImage2D(...arguments)}catch(b){Ut("WebGLState:",b)}}function rt(){try{t.compressedTexSubImage3D(...arguments)}catch(b){Ut("WebGLState:",b)}}function dt(){try{t.texStorage2D(...arguments)}catch(b){Ut("WebGLState:",b)}}function ft(){try{t.texStorage3D(...arguments)}catch(b){Ut("WebGLState:",b)}}function K(){try{t.texImage2D(...arguments)}catch(b){Ut("WebGLState:",b)}}function tt(){try{t.texImage3D(...arguments)}catch(b){Ut("WebGLState:",b)}}function _t(b){if(p[b]!==void 0)return p[b];else return t.getParameter(b)}function At(b,U){if(p[b]!==U)t.pixelStorei(b,U),p[b]=U}function pt(b){if(Kt.equals(b)===!1)t.scissor(b.x,b.y,b.z,b.w),Kt.copy(b)}function ht(b){if(Ot.equals(b)===!1)t.viewport(b.x,b.y,b.z,b.w),Ot.copy(b)}function Ct(b,U){let I=c.get(U);if(I===void 0)I=new WeakMap,c.set(U,I);let q=I.get(b);if(q===void 0)q=t.getUniformBlockIndex(U,b.name),I.set(b,q)}function Dt(b,U){let q=c.get(U).get(b);if(l.get(U)!==q)t.uniformBlockBinding(U,q,b.__bindingPointIndex),l.set(U,q)}function Jt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},p={},it=null,at={},h={},u=new WeakMap,g=[],x=null,m=!1,f=null,R=null,A=null,v=null,T=null,w=null,C=null,S=new Qt(0,0,0),E=0,Z=!1,O=null,B=null,et=null,D=null,W=null,Kt.set(0,0,t.canvas.width,t.canvas.height),Ot.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ct,disable:Tt,bindFramebuffer:Lt,drawBuffers:wt,useProgram:ge,setBlending:ie,setMaterial:Yt,setFlipSided:ye,setCullFace:he,setLineWidth:Pe,setPolygonOffset:ve,setScissorTest:oe,activeTexture:L,bindTexture:Le,unbindTexture:jt,compressedTexImage2D:ee,compressedTexImage3D:M,texImage2D:K,texImage3D:tt,pixelStorei:At,getParameter:_t,updateUBOMapping:Ct,uniformBlockBinding:Dt,texStorage2D:dt,texStorage3D:ft,texSubImage2D:_,texSubImage3D:P,compressedTexSubImage2D:V,compressedTexSubImage3D:rt,scissor:pt,viewport:ht,reset:Jt}}function Qg(t,e,n,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,d=new WeakMap,p=new Set,h,u=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(M){}function x(M,_){return g?new OffscreenCanvas(M,_):fs("canvas")}function m(M,_,P){let V=1,rt=ee(M);if(rt.width>P||rt.height>P)V=P/Math.max(rt.width,rt.height);if(V<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let dt=Math.floor(V*rt.width),ft=Math.floor(V*rt.height);if(h===void 0)h=x(dt,ft);let K=_?x(dt,ft):h;return K.width=dt,K.height=ft,K.getContext("2d").drawImage(M,0,0,dt,ft),Nt("WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+dt+"x"+ft+")."),K}else{if("data"in M)Nt("WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+").");return M}return M}function f(M){return M.generateMipmaps}function R(M){t.generateMipmap(M)}function A(M){if(M.isWebGLCubeRenderTarget)return t.TEXTURE_CUBE_MAP;if(M.isWebGL3DRenderTarget)return t.TEXTURE_3D;if(M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture)return t.TEXTURE_2D_ARRAY;return t.TEXTURE_2D}function v(M,_,P,V,rt,dt=!1){if(M!==null){if(t[M]!==void 0)return t[M];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ft;if(V){if(ft=e.get("EXT_texture_norm16"),!ft)Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let K=_;if(_===t.RED){if(P===t.FLOAT)K=t.R32F;if(P===t.HALF_FLOAT)K=t.R16F;if(P===t.UNSIGNED_BYTE)K=t.R8;if(P===t.UNSIGNED_SHORT&&ft)K=ft.R16_EXT;if(P===t.SHORT&&ft)K=ft.R16_SNORM_EXT}if(_===t.RED_INTEGER){if(P===t.UNSIGNED_BYTE)K=t.R8UI;if(P===t.UNSIGNED_SHORT)K=t.R16UI;if(P===t.UNSIGNED_INT)K=t.R32UI;if(P===t.BYTE)K=t.R8I;if(P===t.SHORT)K=t.R16I;if(P===t.INT)K=t.R32I}if(_===t.RG){if(P===t.FLOAT)K=t.RG32F;if(P===t.HALF_FLOAT)K=t.RG16F;if(P===t.UNSIGNED_BYTE)K=t.RG8;if(P===t.UNSIGNED_SHORT&&ft)K=ft.RG16_EXT;if(P===t.SHORT&&ft)K=ft.RG16_SNORM_EXT}if(_===t.RG_INTEGER){if(P===t.UNSIGNED_BYTE)K=t.RG8UI;if(P===t.UNSIGNED_SHORT)K=t.RG16UI;if(P===t.UNSIGNED_INT)K=t.RG32UI;if(P===t.BYTE)K=t.RG8I;if(P===t.SHORT)K=t.RG16I;if(P===t.INT)K=t.RG32I}if(_===t.RGB_INTEGER){if(P===t.UNSIGNED_BYTE)K=t.RGB8UI;if(P===t.UNSIGNED_SHORT)K=t.RGB16UI;if(P===t.UNSIGNED_INT)K=t.RGB32UI;if(P===t.BYTE)K=t.RGB8I;if(P===t.SHORT)K=t.RGB16I;if(P===t.INT)K=t.RGB32I}if(_===t.RGBA_INTEGER){if(P===t.UNSIGNED_BYTE)K=t.RGBA8UI;if(P===t.UNSIGNED_SHORT)K=t.RGBA16UI;if(P===t.UNSIGNED_INT)K=t.RGBA32UI;if(P===t.BYTE)K=t.RGBA8I;if(P===t.SHORT)K=t.RGBA16I;if(P===t.INT)K=t.RGBA32I}if(_===t.RGB){if(P===t.UNSIGNED_SHORT&&ft)K=ft.RGB16_EXT;if(P===t.SHORT&&ft)K=ft.RGB16_SNORM_EXT;if(P===t.UNSIGNED_INT_5_9_9_9_REV)K=t.RGB9_E5;if(P===t.UNSIGNED_INT_10F_11F_11F_REV)K=t.R11F_G11F_B10F}if(_===t.RGBA){let tt=dt?ho:Zt.getTransfer(rt);if(P===t.FLOAT)K=t.RGBA32F;if(P===t.HALF_FLOAT)K=t.RGBA16F;if(P===t.UNSIGNED_BYTE)K=tt===fe?t.SRGB8_ALPHA8:t.RGBA8;if(P===t.UNSIGNED_SHORT&&ft)K=ft.RGBA16_EXT;if(P===t.SHORT&&ft)K=ft.RGBA16_SNORM_EXT;if(P===t.UNSIGNED_SHORT_4_4_4_4)K=t.RGBA4;if(P===t.UNSIGNED_SHORT_5_5_5_1)K=t.RGB5_A1}if(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)e.get("EXT_color_buffer_float");return K}function T(M,_){let P;if(M){if(_===null||_===Gn||_===Wi)P=t.DEPTH24_STENCIL8;else if(_===Cn)P=t.DEPTH32F_STENCIL8;else if(_===Ss)P=t.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(_===null||_===Gn||_===Wi)P=t.DEPTH_COMPONENT24;else if(_===Cn)P=t.DEPTH_COMPONENT32F;else if(_===Ss)P=t.DEPTH_COMPONENT16;return P}function w(M,_){if(f(M)===!0||M.isFramebufferTexture&&M.minFilter!==kn&&M.minFilter!==We)return Math.log2(Math.max(_.width,_.height))+1;else if(M.mipmaps!==void 0&&M.mipmaps.length>0)return M.mipmaps.length;else if(M.isCompressedTexture&&Array.isArray(M.image))return _.mipmaps.length;else return 1}function C(M){let _=M.target;if(_.removeEventListener("dispose",C),E(_),_.isVideoTexture)d.delete(_);if(_.isHTMLTexture)p.delete(_)}function S(M){let _=M.target;_.removeEventListener("dispose",S),O(_)}function E(M){let _=i.get(M);if(_.__webglInit===void 0)return;let P=M.source,V=u.get(P);if(V){let rt=V[_.__cacheKey];if(rt.usedTimes--,rt.usedTimes===0)Z(M);if(Object.keys(V).length===0)u.delete(P)}i.remove(M)}function Z(M){let _=i.get(M);t.deleteTexture(_.__webglTexture);let P=M.source,V=u.get(P);delete V[_.__cacheKey],a.memory.textures--}function O(M){let _=i.get(M);if(M.depthTexture)M.depthTexture.dispose(),i.remove(M.depthTexture);if(M.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(_.__webglFramebuffer[V]))for(let rt=0;rt<_.__webglFramebuffer[V].length;rt++)t.deleteFramebuffer(_.__webglFramebuffer[V][rt]);else t.deleteFramebuffer(_.__webglFramebuffer[V]);if(_.__webglDepthbuffer)t.deleteRenderbuffer(_.__webglDepthbuffer[V])}else{if(Array.isArray(_.__webglFramebuffer))for(let V=0;V<_.__webglFramebuffer.length;V++)t.deleteFramebuffer(_.__webglFramebuffer[V]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer)t.deleteRenderbuffer(_.__webglDepthbuffer);if(_.__webglMultisampledFramebuffer)t.deleteFramebuffer(_.__webglMultisampledFramebuffer);if(_.__webglColorRenderbuffer){for(let V=0;V<_.__webglColorRenderbuffer.length;V++)if(_.__webglColorRenderbuffer[V])t.deleteRenderbuffer(_.__webglColorRenderbuffer[V])}if(_.__webglDepthRenderbuffer)t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let P=M.textures;for(let V=0,rt=P.length;V<rt;V++){let dt=i.get(P[V]);if(dt.__webglTexture)t.deleteTexture(dt.__webglTexture),a.memory.textures--;i.remove(P[V])}i.remove(M)}let B=0;function et(){B=0}function D(){return B}function W(M){B=M}function nt(){let M=B;if(M>=s.maxTextures)Nt("WebGLTextures: Trying to use "+(M+1)+" texture units while this GPU supports only "+s.maxTextures);return B+=1,M}function H(M){let _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function lt(M,_){let P=i.get(M);if(M.isVideoTexture)Le(M);if(M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&P.__version!==M.version){let V=M.image;if(V===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(P,M,_);return}}else if(M.isExternalTexture)P.__webglTexture=M.sourceTexture?M.sourceTexture:null;n.bindTexture(t.TEXTURE_2D,P.__webglTexture,t.TEXTURE0+_)}function Q(M,_){let P=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&P.__version!==M.version){Tt(P,M,_);return}else if(M.isExternalTexture)P.__webglTexture=M.sourceTexture?M.sourceTexture:null;n.bindTexture(t.TEXTURE_2D_ARRAY,P.__webglTexture,t.TEXTURE0+_)}function it(M,_){let P=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&P.__version!==M.version){Tt(P,M,_);return}n.bindTexture(t.TEXTURE_3D,P.__webglTexture,t.TEXTURE0+_)}function at(M,_){let P=i.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&P.__version!==M.version){Lt(P,M,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+_)}let It={[Tc]:t.REPEAT,[hr]:t.CLAMP_TO_EDGE,[wc]:t.MIRRORED_REPEAT},Pt={[kn]:t.NEAREST,[Ac]:t.NEAREST_MIPMAP_NEAREST,[ys]:t.NEAREST_MIPMAP_LINEAR,[We]:t.LINEAR,[ur]:t.LINEAR_MIPMAP_NEAREST,[Kn]:t.LINEAR_MIPMAP_LINEAR},Kt={[Oc]:t.NEVER,[Hc]:t.ALWAYS,[Bc]:t.LESS,[xr]:t.LEQUAL,[zc]:t.EQUAL,[vr]:t.GEQUAL,[kc]:t.GREATER,[Gc]:t.NOTEQUAL};function Ot(M,_){if(_.type===Cn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===We||_.magFilter===ur||_.magFilter===ys||_.magFilter===Kn||_.minFilter===We||_.minFilter===ur||_.minFilter===ys||_.minFilter===Kn))Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(t.texParameteri(M,t.TEXTURE_WRAP_S,It[_.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,It[_.wrapT]),M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)t.texParameteri(M,t.TEXTURE_WRAP_R,It[_.wrapR]);if(t.texParameteri(M,t.TEXTURE_MAG_FILTER,Pt[_.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,Pt[_.minFilter]),_.compareFunction)t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,Kt[_.compareFunction]);if(e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===kn)return;if(_.minFilter!==ys&&_.minFilter!==Kn)return;if(_.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let P=e.get("EXT_texture_filter_anisotropic");t.texParameterf(M,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function J(M,_){let P=!1;if(M.__webglInit===void 0)M.__webglInit=!0,_.addEventListener("dispose",C);let V=_.source,rt=u.get(V);if(rt===void 0)rt={},u.set(V,rt);let dt=H(_);if(dt!==M.__cacheKey){if(rt[dt]===void 0)rt[dt]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,P=!0;rt[dt].usedTimes++;let ft=rt[M.__cacheKey];if(ft!==void 0){if(rt[M.__cacheKey].usedTimes--,ft.usedTimes===0)Z(_)}M.__cacheKey=dt,M.__webglTexture=rt[dt].texture}return P}function ot(M,_,P){return Math.floor(Math.floor(M/P)/_)}function ct(M,_,P,V){let dt=M.updateRanges;if(dt.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,P,V,_.data);else{dt.sort((At,pt)=>At.start-pt.start);let ft=0;for(let At=1;At<dt.length;At++){let pt=dt[ft],ht=dt[At],Ct=pt.start+pt.count,Dt=ot(ht.start,_.width,4),Jt=ot(pt.start,_.width,4);if(ht.start<=Ct+1&&Dt===Jt&&ot(ht.start+ht.count-1,_.width,4)===Dt)pt.count=Math.max(pt.count,ht.start+ht.count-pt.start);else++ft,dt[ft]=ht}dt.length=ft+1;let K=n.getParameter(t.UNPACK_ROW_LENGTH),tt=n.getParameter(t.UNPACK_SKIP_PIXELS),_t=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let At=0,pt=dt.length;At<pt;At++){let ht=dt[At],Ct=Math.floor(ht.start/4),Dt=Math.ceil(ht.count/4),Jt=Ct%_.width,b=Math.floor(Ct/_.width),U=Dt,I=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Jt),n.pixelStorei(t.UNPACK_SKIP_ROWS,b),n.texSubImage2D(t.TEXTURE_2D,0,Jt,b,U,1,P,V,_.data)}M.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,K),n.pixelStorei(t.UNPACK_SKIP_PIXELS,tt),n.pixelStorei(t.UNPACK_SKIP_ROWS,_t)}}function Tt(M,_,P){let V=t.TEXTURE_2D;if(_.isDataArrayTexture||_.isCompressedArrayTexture)V=t.TEXTURE_2D_ARRAY;if(_.isData3DTexture)V=t.TEXTURE_3D;let rt=J(M,_),dt=_.source;n.bindTexture(V,M.__webglTexture,t.TEXTURE0+P);let ft=i.get(dt);if(dt.version!==ft.__version||rt===!0){if(n.activeTexture(t.TEXTURE0+P),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let I=Zt.getPrimaries(Zt.workingColorSpace),q=_.colorSpace===ei?null:Zt.getPrimaries(_.colorSpace),Y=_.colorSpace===ei||I===q?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let tt=m(_.image,!1,s.maxTextureSize);tt=jt(_,tt);let _t=r.convert(_.format,_.colorSpace),At=r.convert(_.type),pt=v(_.internalFormat,_t,At,_.normalized,_.colorSpace,_.isVideoTexture);Ot(V,_);let ht,Ct=_.mipmaps,Dt=_.isVideoTexture!==!0,Jt=ft.__version===void 0||rt===!0,b=dt.dataReady,U=w(_,tt);if(_.isDepthTexture){if(pt=T(_.format===jn,_.type),Jt)if(Dt)n.texStorage2D(t.TEXTURE_2D,1,pt,tt.width,tt.height);else n.texImage2D(t.TEXTURE_2D,0,pt,tt.width,tt.height,0,_t,At,null)}else if(_.isDataTexture)if(Ct.length>0){if(Dt&&Jt)n.texStorage2D(t.TEXTURE_2D,U,pt,Ct[0].width,Ct[0].height);for(let I=0,q=Ct.length;I<q;I++)if(ht=Ct[I],Dt){if(b)n.texSubImage2D(t.TEXTURE_2D,I,0,0,ht.width,ht.height,_t,At,ht.data)}else n.texImage2D(t.TEXTURE_2D,I,pt,ht.width,ht.height,0,_t,At,ht.data);_.generateMipmaps=!1}else if(Dt){if(Jt)n.texStorage2D(t.TEXTURE_2D,U,pt,tt.width,tt.height);if(b)ct(_,tt,_t,At)}else n.texImage2D(t.TEXTURE_2D,0,pt,tt.width,tt.height,0,_t,At,tt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){if(Dt&&Jt)n.texStorage3D(t.TEXTURE_2D_ARRAY,U,pt,Ct[0].width,Ct[0].height,tt.depth);for(let I=0,q=Ct.length;I<q;I++)if(ht=Ct[I],_.format!==vn)if(_t!==null)if(Dt){if(b)if(_.layerUpdates.size>0){let Y=qo(ht.width,ht.height,_.format,_.type);for(let z of _.layerUpdates){let j=ht.data.subarray(z*Y/ht.data.BYTES_PER_ELEMENT,(z+1)*Y/ht.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,I,0,0,z,ht.width,ht.height,1,_t,j)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,I,0,0,0,ht.width,ht.height,tt.depth,_t,ht.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,I,pt,ht.width,ht.height,tt.depth,0,ht.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Dt){if(b)n.texSubImage3D(t.TEXTURE_2D_ARRAY,I,0,0,0,ht.width,ht.height,tt.depth,_t,At,ht.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,I,pt,ht.width,ht.height,tt.depth,0,_t,At,ht.data);if(_.layerUpdates.size>0)_.clearLayerUpdates()}else{if(Dt&&Jt)n.texStorage2D(t.TEXTURE_2D,U,pt,Ct[0].width,Ct[0].height);for(let I=0,q=Ct.length;I<q;I++)if(ht=Ct[I],_.format!==vn)if(_t!==null)if(Dt){if(b)n.compressedTexSubImage2D(t.TEXTURE_2D,I,0,0,ht.width,ht.height,_t,ht.data)}else n.compressedTexImage2D(t.TEXTURE_2D,I,pt,ht.width,ht.height,0,ht.data);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Dt){if(b)n.texSubImage2D(t.TEXTURE_2D,I,0,0,ht.width,ht.height,_t,At,ht.data)}else n.texImage2D(t.TEXTURE_2D,I,pt,ht.width,ht.height,0,_t,At,ht.data)}else if(_.isDataArrayTexture)if(Dt){if(Jt)n.texStorage3D(t.TEXTURE_2D_ARRAY,U,pt,tt.width,tt.height,tt.depth);if(b)if(_.layerUpdates.size>0){let I=qo(tt.width,tt.height,_.format,_.type);for(let q of _.layerUpdates){let Y=tt.data.subarray(q*I/tt.data.BYTES_PER_ELEMENT,(q+1)*I/tt.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,q,tt.width,tt.height,1,_t,At,Y)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,_t,At,tt.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,pt,tt.width,tt.height,tt.depth,0,_t,At,tt.data);else if(_.isData3DTexture)if(Dt){if(Jt)n.texStorage3D(t.TEXTURE_3D,U,pt,tt.width,tt.height,tt.depth);if(b)n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,_t,At,tt.data)}else n.texImage3D(t.TEXTURE_3D,0,pt,tt.width,tt.height,tt.depth,0,_t,At,tt.data);else if(_.isFramebufferTexture){if(Jt)if(Dt)n.texStorage2D(t.TEXTURE_2D,U,pt,tt.width,tt.height);else{let I=tt.width,q=tt.height;for(let Y=0;Y<U;Y++)n.texImage2D(t.TEXTURE_2D,Y,pt,I,q,0,_t,At,null),I>>=1,q>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){let I=t.canvas;if(!I.hasAttribute("layoutsubtree"))I.setAttribute("layoutsubtree","true");if(tt.parentNode!==I){I.appendChild(tt),p.add(_),I.onpaint=(q)=>{let Y=q.changedElements;for(let z of p)if(Y.includes(z.image))z.needsUpdate=!0},I.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,tt);else{let{RGBA:Y,RGBA:z,UNSIGNED_BYTE:j}=t;t.texElementImage2D(t.TEXTURE_2D,0,Y,z,j,tt)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ct.length>0){if(Dt&&Jt){let I=ee(Ct[0]);n.texStorage2D(t.TEXTURE_2D,U,pt,I.width,I.height)}for(let I=0,q=Ct.length;I<q;I++)if(ht=Ct[I],Dt){if(b)n.texSubImage2D(t.TEXTURE_2D,I,0,0,_t,At,ht)}else n.texImage2D(t.TEXTURE_2D,I,pt,_t,At,ht);_.generateMipmaps=!1}else if(Dt){if(Jt){let I=ee(tt);n.texStorage2D(t.TEXTURE_2D,U,pt,I.width,I.height)}if(b)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_t,At,tt)}else n.texImage2D(t.TEXTURE_2D,0,pt,_t,At,tt);if(f(_))R(V);if(ft.__version=dt.version,_.onUpdate)_.onUpdate(_)}M.__version=_.version}function Lt(M,_,P){if(_.image.length!==6)return;let V=J(M,_),rt=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+P);let dt=i.get(rt);if(rt.version!==dt.__version||V===!0){n.activeTexture(t.TEXTURE0+P);let ft=Zt.getPrimaries(Zt.workingColorSpace),K=_.colorSpace===ei?null:Zt.getPrimaries(_.colorSpace),tt=_.colorSpace===ei||ft===K?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let _t=_.isCompressedTexture||_.image[0].isCompressedTexture,At=_.image[0]&&_.image[0].isDataTexture,pt=[];for(let z=0;z<6;z++){if(!_t&&!At)pt[z]=m(_.image[z],!0,s.maxCubemapSize);else pt[z]=At?_.image[z].image:_.image[z];pt[z]=jt(_,pt[z])}let ht=pt[0],Ct=r.convert(_.format,_.colorSpace),Dt=r.convert(_.type),Jt=v(_.internalFormat,Ct,Dt,_.normalized,_.colorSpace),b=_.isVideoTexture!==!0,U=dt.__version===void 0||V===!0,I=rt.dataReady,q=w(_,ht);Ot(t.TEXTURE_CUBE_MAP,_);let Y;if(_t){if(b&&U)n.texStorage2D(t.TEXTURE_CUBE_MAP,q,Jt,ht.width,ht.height);for(let z=0;z<6;z++){Y=pt[z].mipmaps;for(let j=0;j<Y.length;j++){let st=Y[j];if(_.format!==vn)if(Ct!==null)if(b){if(I)n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,j,0,0,st.width,st.height,Ct,st.data)}else n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,j,Jt,st.width,st.height,0,st.data);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(b){if(I)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,j,0,0,st.width,st.height,Ct,Dt,st.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,j,Jt,st.width,st.height,0,Ct,Dt,st.data)}}}else{if(Y=_.mipmaps,b&&U){if(Y.length>0)q++;let z=ee(pt[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,q,Jt,z.width,z.height)}for(let z=0;z<6;z++)if(At){if(b){if(I)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,pt[z].width,pt[z].height,Ct,Dt,pt[z].data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,Jt,pt[z].width,pt[z].height,0,Ct,Dt,pt[z].data);for(let j=0;j<Y.length;j++){let ut=Y[j].image[z].image;if(b){if(I)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,j+1,0,0,ut.width,ut.height,Ct,Dt,ut.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,j+1,Jt,ut.width,ut.height,0,Ct,Dt,ut.data)}}else{if(b){if(I)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,Ct,Dt,pt[z])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,Jt,Ct,Dt,pt[z]);for(let j=0;j<Y.length;j++){let st=Y[j];if(b){if(I)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,j+1,0,0,Ct,Dt,st.image[z])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,j+1,Jt,Ct,Dt,st.image[z])}}}if(f(_))R(t.TEXTURE_CUBE_MAP);if(dt.__version=rt.version,_.onUpdate)_.onUpdate(_)}M.__version=_.version}function wt(M,_,P,V,rt,dt){let ft=r.convert(P.format,P.colorSpace),K=r.convert(P.type),tt=v(P.internalFormat,ft,K,P.normalized,P.colorSpace),_t=i.get(_),At=i.get(P);if(At.__renderTarget=_,!_t.__hasExternalTextures){let pt=Math.max(1,_.width>>dt),ht=Math.max(1,_.height>>dt);if(rt===t.TEXTURE_3D||rt===t.TEXTURE_2D_ARRAY)n.texImage3D(rt,dt,tt,pt,ht,_.depth,0,ft,K,null);else n.texImage2D(rt,dt,tt,pt,ht,0,ft,K,null)}if(n.bindFramebuffer(t.FRAMEBUFFER,M),L(_))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,V,rt,At.__webglTexture,0,oe(_));else if(rt===t.TEXTURE_2D||rt>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)t.framebufferTexture2D(t.FRAMEBUFFER,V,rt,At.__webglTexture,dt);n.bindFramebuffer(t.FRAMEBUFFER,null)}function ge(M,_,P){if(t.bindRenderbuffer(t.RENDERBUFFER,M),_.depthBuffer){let V=_.depthTexture,rt=V&&V.isDepthTexture?V.type:null,dt=T(_.stencilBuffer,rt),ft=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(L(_))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe(_),dt,_.width,_.height);else if(P)t.renderbufferStorageMultisample(t.RENDERBUFFER,oe(_),dt,_.width,_.height);else t.renderbufferStorage(t.RENDERBUFFER,dt,_.width,_.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,ft,t.RENDERBUFFER,M)}else{let V=_.textures;for(let rt=0;rt<V.length;rt++){let dt=V[rt],ft=r.convert(dt.format,dt.colorSpace),K=r.convert(dt.type),tt=v(dt.internalFormat,ft,K,dt.normalized,dt.colorSpace);if(L(_))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe(_),tt,_.width,_.height);else if(P)t.renderbufferStorageMultisample(t.RENDERBUFFER,oe(_),tt,_.width,_.height);else t.renderbufferStorage(t.RENDERBUFFER,tt,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Gt(M,_,P){let V=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let rt=i.get(_.depthTexture);if(rt.__renderTarget=_,!rt.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0;if(V){if(rt.__webglInit===void 0)rt.__webglInit=!0,_.depthTexture.addEventListener("dispose",C);if(rt.__webglTexture===void 0){rt.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,rt.__webglTexture),Ot(t.TEXTURE_CUBE_MAP,_.depthTexture);let _t=r.convert(_.depthTexture.format),At=r.convert(_.depthTexture.type),pt;if(_.depthTexture.format===Qn)pt=t.DEPTH_COMPONENT24;else if(_.depthTexture.format===jn)pt=t.DEPTH24_STENCIL8;for(let ht=0;ht<6;ht++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,pt,_.width,_.height,0,_t,At,null)}}else lt(_.depthTexture,0);let dt=rt.__webglTexture,ft=oe(_),K=V?t.TEXTURE_CUBE_MAP_POSITIVE_X+P:t.TEXTURE_2D,tt=_.depthTexture.format===jn?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===Qn)if(L(_))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,tt,K,dt,0,ft);else t.framebufferTexture2D(t.FRAMEBUFFER,tt,K,dt,0);else if(_.depthTexture.format===jn)if(L(_))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,tt,K,dt,0,ft);else t.framebufferTexture2D(t.FRAMEBUFFER,tt,K,dt,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xt(M){let _=i.get(M),P=M.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==M.depthTexture){let V=M.depthTexture;if(_.__depthDisposeCallback)_.__depthDisposeCallback();if(V){let rt=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,V.removeEventListener("dispose",rt)};V.addEventListener("dispose",rt),_.__depthDisposeCallback=rt}_.__boundDepthTexture=V}if(M.depthTexture&&!_.__autoAllocateDepthBuffer)if(P)for(let V=0;V<6;V++)Gt(_.__webglFramebuffer[V],M,V);else{let V=M.texture.mipmaps;if(V&&V.length>0)Gt(_.__webglFramebuffer[0],M,0);else Gt(_.__webglFramebuffer,M,0)}else if(P){_.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[V]),_.__webglDepthbuffer[V]===void 0)_.__webglDepthbuffer[V]=t.createRenderbuffer(),ge(_.__webglDepthbuffer[V],M,!1);else{let rt=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,dt=_.__webglDepthbuffer[V];t.bindRenderbuffer(t.RENDERBUFFER,dt),t.framebufferRenderbuffer(t.FRAMEBUFFER,rt,t.RENDERBUFFER,dt)}}else{let V=M.texture.mipmaps;if(V&&V.length>0)n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]);else n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer);if(_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),ge(_.__webglDepthbuffer,M,!1);else{let rt=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,dt=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,dt),t.framebufferRenderbuffer(t.FRAMEBUFFER,rt,t.RENDERBUFFER,dt)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ie(M,_,P){let V=i.get(M);if(_!==void 0)wt(V.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0);if(P!==void 0)Xt(M)}function Yt(M){let _=M.texture,P=i.get(M),V=i.get(_);M.addEventListener("dispose",S);let rt=M.textures,dt=M.isWebGLCubeRenderTarget===!0,ft=rt.length>1;if(!ft){if(V.__webglTexture===void 0)V.__webglTexture=t.createTexture();V.__version=_.version,a.memory.textures++}if(dt){P.__webglFramebuffer=[];for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer[K]=[];for(let tt=0;tt<_.mipmaps.length;tt++)P.__webglFramebuffer[K][tt]=t.createFramebuffer()}else P.__webglFramebuffer[K]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer=[];for(let K=0;K<_.mipmaps.length;K++)P.__webglFramebuffer[K]=t.createFramebuffer()}else P.__webglFramebuffer=t.createFramebuffer();if(ft)for(let K=0,tt=rt.length;K<tt;K++){let _t=i.get(rt[K]);if(_t.__webglTexture===void 0)_t.__webglTexture=t.createTexture(),a.memory.textures++}if(M.samples>0&&L(M)===!1){P.__webglMultisampledFramebuffer=t.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let K=0;K<rt.length;K++){let tt=rt[K];P.__webglColorRenderbuffer[K]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,P.__webglColorRenderbuffer[K]);let _t=r.convert(tt.format,tt.colorSpace),At=r.convert(tt.type),pt=v(tt.internalFormat,_t,At,tt.normalized,tt.colorSpace,M.isXRRenderTarget===!0),ht=oe(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,ht,pt,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+K,t.RENDERBUFFER,P.__webglColorRenderbuffer[K])}if(t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer)P.__webglDepthRenderbuffer=t.createRenderbuffer(),ge(P.__webglDepthRenderbuffer,M,!0);n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(dt){n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture),Ot(t.TEXTURE_CUBE_MAP,_);for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0)for(let tt=0;tt<_.mipmaps.length;tt++)wt(P.__webglFramebuffer[K][tt],M,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,tt);else wt(P.__webglFramebuffer[K],M,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);if(f(_))R(t.TEXTURE_CUBE_MAP);n.unbindTexture()}else if(ft){for(let K=0,tt=rt.length;K<tt;K++){let _t=rt[K],At=i.get(_t),pt=t.TEXTURE_2D;if(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)pt=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(pt,At.__webglTexture),Ot(pt,_t),wt(P.__webglFramebuffer,M,_t,t.COLOR_ATTACHMENT0+K,pt,0),f(_t))R(pt)}n.unbindTexture()}else{let K=t.TEXTURE_2D;if(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)K=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(K,V.__webglTexture),Ot(K,_),_.mipmaps&&_.mipmaps.length>0)for(let tt=0;tt<_.mipmaps.length;tt++)wt(P.__webglFramebuffer[tt],M,_,t.COLOR_ATTACHMENT0,K,tt);else wt(P.__webglFramebuffer,M,_,t.COLOR_ATTACHMENT0,K,0);if(f(_))R(K);n.unbindTexture()}if(M.depthBuffer)Xt(M)}function ye(M){let _=M.textures;for(let P=0,V=_.length;P<V;P++){let rt=_[P];if(f(rt)){let dt=A(M),ft=i.get(rt).__webglTexture;n.bindTexture(dt,ft),R(dt),n.unbindTexture()}}}let he=[],Pe=[];function ve(M){if(M.samples>0){if(L(M)===!1){let{textures:_,width:P,height:V}=M,rt=t.COLOR_BUFFER_BIT,dt=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ft=i.get(M),K=_.length>1;if(K)for(let _t=0;_t<_.length;_t++)n.bindFramebuffer(t.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_t,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ft.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_t,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);let tt=M.texture.mipmaps;if(tt&&tt.length>0)n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]);else n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let _t=0;_t<_.length;_t++){if(M.resolveDepthBuffer){if(M.depthBuffer)rt|=t.DEPTH_BUFFER_BIT;if(M.stencilBuffer&&M.resolveStencilBuffer)rt|=t.STENCIL_BUFFER_BIT}if(K){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ft.__webglColorRenderbuffer[_t]);let At=i.get(_[_t]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,At,0)}if(t.blitFramebuffer(0,0,P,V,0,0,P,V,rt,t.NEAREST),l===!0){if(he.length=0,Pe.length=0,he.push(t.COLOR_ATTACHMENT0+_t),M.depthBuffer&&M.storeMultisampledDepthBuffer===!1)he.push(dt),Pe.push(dt),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Pe);t.invalidateFramebuffer(t.READ_FRAMEBUFFER,he)}}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),K)for(let _t=0;_t<_.length;_t++){n.bindFramebuffer(t.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_t,t.RENDERBUFFER,ft.__webglColorRenderbuffer[_t]);let At=i.get(_[_t]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ft.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_t,t.TEXTURE_2D,At,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&l){let _=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function oe(M){return Math.min(s.maxSamples,M.samples)}function L(M){let _=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Le(M){let _=a.render.frame;if(d.get(M)!==_)d.set(M,_),M.update()}function jt(M,_){let{colorSpace:P,format:V,type:rt}=M;if(M.isCompressedTexture===!0||M.isVideoTexture===!0)return _;if(P!==co&&P!==ei)if(Zt.getTransfer(P)===fe){if(V!==vn||rt!==dn)Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Ut("WebGLTextures: Unsupported texture color space:",P);return _}function ee(M){if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement)c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height;else if(typeof VideoFrame<"u"&&M instanceof VideoFrame)c.width=M.displayWidth,c.height=M.displayHeight;else c.width=M.width,c.height=M.height;return c}this.allocateTextureUnit=nt,this.resetTextureUnits=et,this.getTextureUnits=D,this.setTextureUnits=W,this.setTexture2D=lt,this.setTexture2DArray=Q,this.setTexture3D=it,this.setTextureCube=at,this.rebindTextures=ie,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=L,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function jg(t,e){function n(i,s=ei){let r,a=Zt.getTransfer(s);if(i===dn)return t.UNSIGNED_BYTE;if(i===Aa)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Ra)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Ic)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Pc)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Rc)return t.BYTE;if(i===Cc)return t.SHORT;if(i===Ss)return t.UNSIGNED_SHORT;if(i===wa)return t.INT;if(i===Gn)return t.UNSIGNED_INT;if(i===Cn)return t.FLOAT;if(i===xn)return t.HALF_FLOAT;if(i===Lc)return t.ALPHA;if(i===Dc)return t.RGB;if(i===vn)return t.RGBA;if(i===Qn)return t.DEPTH_COMPONENT;if(i===jn)return t.DEPTH_STENCIL;if(i===Nc)return t.RED;if(i===Ca)return t.RED_INTEGER;if(i===ti)return t.RG;if(i===Ia)return t.RG_INTEGER;if(i===Pa)return t.RGBA_INTEGER;if(i===dr||i===fr||i===pr||i===mr)if(a===fe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===La||i===Da||i===Na||i===Ua)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===La)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Na)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ua)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fa||i===Oa||i===Ba||i===za||i===ka||i===gr||i===Ga)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Fa||i===Oa)return a===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ba)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===za)return r.COMPRESSED_R11_EAC;if(i===ka)return r.COMPRESSED_SIGNED_R11_EAC;if(i===gr)return r.COMPRESSED_RG11_EAC;if(i===Ga)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ha||i===Va||i===Wa||i===Xa||i===qa||i===Ya||i===Za||i===Ja||i===$a||i===Ka||i===Qa||i===ja||i===to||i===eo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ha)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Va)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wa)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xa)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qa)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ya)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Za)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ja)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$a)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ka)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qa)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ja)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===to)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===eo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===no||i===io||i===so)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===no)return a===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===io)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===so)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ro||i===ao||i===_r||i===oo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ro)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ao)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_r)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===oo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(i===Wi)return t.UNSIGNED_INT_24_8;return t[i]!==void 0?t[i]:null}return{convert:n}}var t0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Uh{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Tr(t.texture);if(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)this.depthNear=t.depthNear,this.depthFar=t.depthFar;this.texture=n}}getMesh(t){if(this.texture!==null){if(this.mesh===null){let e=t.cameras[0].viewport,n=new nn({vertexShader:t0,fragmentShader:e0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ie(new Is(20,20),n)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fh extends In{constructor(t,e){super();let n=this,i=null,s=1,r=null,a="local-floor",o=1,l=null,c=null,d=null,p=null,h=null,u=null,g=typeof XRWebGLBinding<"u",x=new Uh,m={},f=e.getContextAttributes(),R=null,A=null,v=[],T=[],w=new Mt,C=null,S=null,E=new ke;E.viewport=new xe;let Z=new ke;Z.viewport=new xe;let O=[E,Z],B=new Ho,et=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ot=v[J];if(ot===void 0)ot=new Es,v[J]=ot;return ot.getTargetRaySpace()},this.getControllerGrip=function(J){let ot=v[J];if(ot===void 0)ot=new Es,v[J]=ot;return ot.getGripSpace()},this.getHand=function(J){let ot=v[J];if(ot===void 0)ot=new Es,v[J]=ot;return ot.getHandSpace()};function W(J){let ot=T.indexOf(J.inputSource);if(ot===-1)return;let ct=v[ot];if(ct!==void 0)ct.update(J.inputSource,J.frame,l||r),ct.dispatchEvent({type:J.type,data:J.inputSource})}function nt(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",nt),i.removeEventListener("inputsourceschange",H);for(let J=0;J<v.length;J++){let ot=T[J];if(ot===null)continue;T[J]=null,v[J].disconnect(ot)}et=null,D=null,x.reset();for(let J in m)delete m[J];if(t.setRenderTarget(R),h=null,p=null,d=null,i=null,A=null,Ot.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(w.width,w.height,!1),S!==null){let J=S.camera;J.fov=S.fov,J.zoom=S.zoom,J.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){if(s=J,n.isPresenting===!0)Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){if(a=J,n.isPresenting===!0)Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return p!==null?p:h},this.getBinding=function(){if(d===null&&g)d=new XRWebGLBinding(i,e);return d},this.getFrame=function(){return u},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(R=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",nt),i.addEventListener("inputsourceschange",H),f.xrCompatible!==!0)await e.makeXRCompatible();if(C=t.getPixelRatio(),t.getSize(w),!(g&&("createProjectionLayer"in XRWebGLBinding.prototype))){let ct={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,e,ct),i.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),A=new Ze(h.framebufferWidth,h.framebufferHeight,{format:vn,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ct=null,Tt=null,Lt=null;if(f.depth)Lt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=f.stencil?jn:Qn,Tt=f.stencil?Wi:Gn;let wt={colorFormat:e.RGBA8,depthFormat:Lt,scaleFactor:s};d=this.getBinding(),p=d.createProjectionLayer(wt),i.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),A=new Ze(p.textureWidth,p.textureHeight,{format:vn,type:dn,depthTexture:new ri(p.textureWidth,p.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(o),l=null,r=await i.requestReferenceSpace(a),Ot.setContext(i),Ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(J){for(let ot=0;ot<J.removed.length;ot++){let ct=J.removed[ot],Tt=T.indexOf(ct);if(Tt>=0)T[Tt]=null,v[Tt].disconnect(ct)}for(let ot=0;ot<J.added.length;ot++){let ct=J.added[ot],Tt=T.indexOf(ct);if(Tt===-1){for(let wt=0;wt<v.length;wt++)if(wt>=T.length){T.push(ct),Tt=wt;break}else if(T[wt]===null){T[wt]=ct,Tt=wt;break}if(Tt===-1)break}let Lt=v[Tt];if(Lt)Lt.connect(ct)}}let lt=new F,Q=new F;function it(J,ot,ct){lt.setFromMatrixPosition(ot.matrixWorld),Q.setFromMatrixPosition(ct.matrixWorld);let Tt=lt.distanceTo(Q),Lt=ot.projectionMatrix.elements,wt=ct.projectionMatrix.elements,ge=Lt[14]/(Lt[10]-1),Gt=Lt[14]/(Lt[10]+1),Xt=(Lt[9]+1)/Lt[5],ie=(Lt[9]-1)/Lt[5],Yt=(Lt[8]-1)/Lt[0],ye=(wt[8]+1)/wt[0],he=ge*Yt,Pe=ge*ye,ve=Tt/(-Yt+ye),oe=ve*-Yt;if(ot.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(oe),J.translateZ(ve),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Lt[10]===-1)J.projectionMatrix.copy(ot.projectionMatrix),J.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{let L=ge+ve,Le=Gt+ve,jt=he-oe,ee=Pe+(Tt-oe),M=Xt*Gt/Le*L,_=ie*Gt/Le*L;J.projectionMatrix.makePerspective(jt,ee,M,_,L,Le),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function at(J,ot){if(ot===null)J.matrixWorld.copy(J.matrix);else J.matrixWorld.multiplyMatrices(ot.matrixWorld,J.matrix);J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let{near:ot,far:ct}=J;if(x.texture!==null){if(x.depthNear>0)ot=x.depthNear;if(x.depthFar>0)ct=x.depthFar}if(B.near=Z.near=E.near=ot,B.far=Z.far=E.far=ct,et!==B.near||D!==B.far)i.updateRenderState({depthNear:B.near,depthFar:B.far}),et=B.near,D=B.far;B.layers.mask=J.layers.mask|6,E.layers.mask=B.layers.mask&-5,Z.layers.mask=B.layers.mask&-3;let Tt=J.parent,Lt=B.cameras;at(B,Tt);for(let wt=0;wt<Lt.length;wt++)at(Lt[wt],Tt);if(Lt.length===2)it(B,E,Z);else B.projectionMatrix.copy(E.projectionMatrix);if(S===null&&J.isPerspectiveCamera)S={camera:J,fov:J.fov,zoom:J.zoom};It(J,B,Tt)};function It(J,ot,ct){if(ct===null)J.matrix.copy(ot.matrixWorld);else J.matrix.copy(ct.matrixWorld),J.matrix.invert(),J.matrix.multiply(ot.matrixWorld);if(J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ot.projectionMatrix),J.projectionMatrixInverse.copy(ot.projectionMatrixInverse),J.isPerspectiveCamera)J.fov=Bi*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1}this.getCamera=function(){return B},this.getFoveation=function(){if(p===null&&h===null)return;return o},this.setFoveation=function(J){if(o=J,p!==null)p.fixedFoveation=J;if(h!==null&&h.fixedFoveation!==void 0)h.fixedFoveation=J},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(B)},this.getCameraTexture=function(J){return m[J]};let Pt=null;function Kt(J,ot){if(c=ot.getViewerPose(l||r),u=ot,c!==null){let ct=c.views;if(h!==null)t.setRenderTargetFramebuffer(A,h.framebuffer),t.setRenderTarget(A);let Tt=!1;if(ct.length!==B.cameras.length)B.cameras.length=0,Tt=!0;for(let Gt=0;Gt<ct.length;Gt++){let Xt=ct[Gt],ie=null;if(h!==null)ie=h.getViewport(Xt);else{let ye=d.getViewSubImage(p,Xt);if(ie=ye.viewport,Gt===0)t.setRenderTargetTextures(A,ye.colorTexture,ye.depthStencilTexture),t.setRenderTarget(A)}let Yt=O[Gt];if(Yt===void 0)Yt=new ke,Yt.layers.enable(Gt),Yt.viewport=new xe,O[Gt]=Yt;if(Yt.matrix.fromArray(Xt.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(Xt.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(ie.x,ie.y,ie.width,ie.height),Gt===0)B.matrix.copy(Yt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);if(Tt===!0)B.cameras.push(Yt)}let Lt=i.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){d=n.getBinding();let Gt=d.getDepthInformation(ct[0]);if(Gt&&Gt.isValid&&Gt.texture)x.init(Gt,i.renderState)}if(Lt&&Lt.includes("camera-access")&&g){t.state.unbindTexture(),d=n.getBinding();for(let Gt=0;Gt<ct.length;Gt++){let Xt=ct[Gt].camera;if(Xt){let ie=m[Xt];if(!ie)ie=new Tr,m[Xt]=ie;let Yt=d.getCameraImage(Xt);ie.sourceTexture=Yt}}}}for(let ct=0;ct<v.length;ct++){let Tt=T[ct],Lt=v[ct];if(Tt!==null&&Lt!==void 0)Lt.update(Tt,ot,l||r)}if(Pt)Pt(J,ot);if(ot.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:ot});u=null}let Ot=new Eh;Ot.setAnimationLoop(Kt),this.setAnimationLoop=function(J){Pt=J},this.dispose=function(){}}}var n0=new de,Oh=new Ft;Oh.set(-1,0,0,0,1,0,0,0,1);function i0(t,e){function n(m,f){if(m.matrixAutoUpdate===!0)m.updateMatrix();f.value.copy(m.matrix)}function i(m,f){if(f.color.getRGB(m.fogColor.value,Ao(t)),f.isFog)m.fogNear.value=f.near,m.fogFar.value=f.far;else if(f.isFogExp2)m.fogDensity.value=f.density}function s(m,f,R,A,v){if(f.isNodeMaterial)f.uniformsNeedUpdate=!1;else if(f.isMeshBasicMaterial)r(m,f);else if(f.isMeshLambertMaterial){if(r(m,f),f.envMap)m.envMapIntensity.value=f.envMapIntensity}else if(f.isMeshToonMaterial)r(m,f),p(m,f);else if(f.isMeshPhongMaterial){if(r(m,f),d(m,f),f.envMap)m.envMapIntensity.value=f.envMapIntensity}else if(f.isMeshStandardMaterial){if(r(m,f),h(m,f),f.isMeshPhysicalMaterial)u(m,f,v)}else if(f.isMeshMatcapMaterial)r(m,f),g(m,f);else if(f.isMeshDepthMaterial)r(m,f);else if(f.isMeshDistanceMaterial)r(m,f),x(m,f);else if(f.isMeshNormalMaterial)r(m,f);else if(f.isLineBasicMaterial){if(a(m,f),f.isLineDashedMaterial)o(m,f)}else if(f.isPointsMaterial)l(m,f,R,A);else if(f.isSpriteMaterial)c(m,f);else if(f.isShadowMaterial)m.color.value.copy(f.color),m.opacity.value=f.opacity;else if(f.isShaderMaterial)f.uniformsNeedUpdate=!1}function r(m,f){if(m.opacity.value=f.opacity,f.color)m.diffuse.value.copy(f.color);if(f.emissive)m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity);if(f.map)m.map.value=f.map,n(f.map,m.mapTransform);if(f.alphaMap)m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform);if(f.bumpMap){if(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ve)m.bumpScale.value*=-1}if(f.normalMap){if(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ve)m.normalScale.value.negate()}if(f.displacementMap)m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias;if(f.emissiveMap)m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform);if(f.specularMap)m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform);if(f.alphaTest>0)m.alphaTest.value=f.alphaTest;let R=e.get(f),{envMap:A,envMapRotation:v}=R;if(A){if(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(n0.makeRotationFromEuler(v)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1)m.envMapRotation.value.premultiply(Oh);m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio}if(f.lightMap)m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform);if(f.aoMap)m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform)}function a(m,f){if(m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map)m.map.value=f.map,n(f.map,m.mapTransform)}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,R,A){if(m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*R,m.scale.value=A*0.5,f.map)m.map.value=f.map,n(f.map,m.uvTransform);if(f.alphaMap)m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform);if(f.alphaTest>0)m.alphaTest.value=f.alphaTest}function c(m,f){if(m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map)m.map.value=f.map,n(f.map,m.mapTransform);if(f.alphaMap)m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform);if(f.alphaTest>0)m.alphaTest.value=f.alphaTest}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,0.0001)}function p(m,f){if(f.gradientMap)m.gradientMap.value=f.gradientMap}function h(m,f){if(m.metalness.value=f.metalness,f.metalnessMap)m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform);if(m.roughness.value=f.roughness,f.roughnessMap)m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform);if(f.envMap)m.envMapIntensity.value=f.envMapIntensity}function u(m,f,R){if(m.ior.value=f.ior,f.sheen>0){if(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap)m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform);if(f.sheenRoughnessMap)m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform)}if(f.clearcoat>0){if(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap)m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform);if(f.clearcoatRoughnessMap)m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform);if(f.clearcoatNormalMap){if(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ve)m.clearcoatNormalScale.value.negate()}}if(f.dispersion>0)m.dispersion.value=f.dispersion;if(f.retroreflectivity>0)m.retroreflectivity.value=f.retroreflectivity;if(f.iridescence>0){if(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap)m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform);if(f.iridescenceThicknessMap)m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform)}if(f.transmission>0){if(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),f.transmissionMap)m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform);if(m.thickness.value=f.thickness,f.thicknessMap)m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform);m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)}if(f.anisotropy>0){if(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap)m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform)}if(m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap)m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform);if(f.specularIntensityMap)m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform)}function g(m,f){if(f.matcap)m.matcap.value=f.matcap}function x(m,f){let R=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function s0(t,e,n,i){let s={},r={},a=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,T){let w=T.program;i.uniformBlockBinding(v,w)}function c(v,T){let w=s[v.id];if(w===void 0)m(v),w=d(v),s[v.id]=w,v.addEventListener("dispose",R);let C=T.program;i.updateUBOMapping(v,C);let S=e.render.frame;if(r[v.id]!==S)h(v),r[v.id]=S}function d(v){let T=p();v.__bindingPointIndex=T;let w=t.createBuffer(),{__size:C,usage:S}=v;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,C,S),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,w),w}function p(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let T=s[v.id],{uniforms:w,__cache:C}=v;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let S=0,E=w.length;S<E;S++){let Z=w[S];if(Array.isArray(Z))for(let O=0,B=Z.length;O<B;O++)u(Z[O],S,O,C);else u(Z,S,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function u(v,T,w,C){if(x(v,T,w,C)===!0){let{__offset:S,value:E}=v;if(Array.isArray(E)){let Z=0;for(let O=0;O<E.length;O++){let B=E[O],et=f(B);if(g(B,v.__data,Z),typeof B!=="number"&&typeof B!=="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B))Z+=et.storage/Float32Array.BYTES_PER_ELEMENT}}else g(E,v.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,S,v.__data)}}function g(v,T,w){if(typeof v==="number"||typeof v==="boolean")T[0]=v;else if(v.isMatrix3)T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0;else if(ArrayBuffer.isView(v))T.set(new v.constructor(v.buffer,v.byteOffset,T.length));else v.toArray(T,w)}function x(v,T,w,C){let S=v.value,E=T+"_"+w;if(C[E]===void 0){if(typeof S==="number"||typeof S==="boolean")C[E]=S;else if(ArrayBuffer.isView(S))C[E]=S.slice();else C[E]=S.clone();return!0}else{let Z=C[E];if(typeof S==="number"||typeof S==="boolean"){if(Z!==S)return C[E]=S,!0}else if(ArrayBuffer.isView(S))return!0;else if(Z.equals(S)===!1)return Z.copy(S),!0}return!1}function m(v){let T=v.uniforms,w=0,C=16;for(let E=0,Z=T.length;E<Z;E++){let O=Array.isArray(T[E])?T[E]:[T[E]];for(let B=0,et=O.length;B<et;B++){let D=O[B],W=Array.isArray(D.value)?D.value:[D.value];for(let nt=0,H=W.length;nt<H;nt++){let lt=W[nt],Q=f(lt),it=w%C,at=it%Q.boundary,It=it+at;if(w+=at,It!==0&&C-It<Q.storage)w+=C-It;D.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=w,w+=Q.storage}}}let S=w%C;if(S>0)w+=C-S;return v.__size=w,v.__cache={},this}function f(v){let T={boundary:0,storage:0};if(typeof v==="number"||typeof v==="boolean")T.boundary=4,T.storage=4;else if(v.isVector2)T.boundary=8,T.storage=8;else if(v.isVector3||v.isColor)T.boundary=16,T.storage=12;else if(v.isVector4)T.boundary=16,T.storage=16;else if(v.isMatrix3)T.boundary=48,T.storage=48;else if(v.isMatrix4)T.boundary=64,T.storage=64;else if(v.isTexture)Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(v))T.boundary=16,T.storage=v.byteLength;else Nt("WebGLRenderer: Unsupported uniform value type.",v);return T}function R(v){let T=v.target;T.removeEventListener("dispose",R);let w=a.indexOf(T.__bindingPointIndex);a.splice(w,1),t.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function A(){for(let v in s)t.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}var r0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),yn=null;function a0(){if(yn===null)yn=new vo(r0,16,16,ti,xn),yn.name="DFG_LUT",yn.minFilter=We,yn.magFilter=We,yn.wrapS=hr,yn.wrapT=hr,yn.generateMipmaps=!1,yn.needsUpdate=!0;return yn}class Or{constructor(t={}){let{canvas:e=Vc(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1,outputBufferType:h=dn}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=r;let g=h,x=new Set([Pa,Ia,Ca]),m=new Set([dn,Gn,Ss,Wi,Aa,Ra]),f=new Uint32Array(4),R=new Int32Array(4),A=new F,v=null,T=null,w=[],C=[],S=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,Z=!1,O=null,B=null,et=null,D=null;this._outputColorSpace=Fc;let W=0,nt=0,H=null,lt=-1,Q=null,it=new xe,at=new xe,It=null,Pt=new Qt(0),Kt=0,{width:Ot,height:J}=e,ot=1,ct=null,Tt=null,Lt=new xe(0,0,Ot,J),wt=new xe(0,0,Ot,J),ge=!1,Gt=new Yi,Xt=!1,ie=!1,Yt=new de,ye=new F,he=new xe,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ve=!1;function oe(){return H===null?ot:1}let L=n;function Le(y,N){return e.getContext(y,N)}let jt,ee,M,_,P,V,rt,dt,ft,K,tt,_t,At,pt,ht,Ct,Dt,Jt,b,U,I,q,Y;try{let y={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in e)e.setAttribute("data-engine",`three.js r${Xl}`);if(e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",vt,!1),L===null){if(L=Le("webgl2",y),L===null)if(Le("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}z()}catch(y){throw e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),Ut("WebGLRenderer: "+y.message),y}function z(){if(jt=new fm(L),jt.init(),I=new jg(L,jt),ee=new im(L,jt,t,I),M=new Kg(L,jt),ee.reversedDepthBuffer&&p)M.buffers.depth.setReversed(!0);B=L.createFramebuffer(),et=L.createFramebuffer(),D=L.createFramebuffer(),_=new gm(L),P=new Og,V=new Qg(L,jt,M,P,ee,I,_),rt=new dm(E),dt=new _d(L),q=new em(L,dt),ft=new pm(L,dt,_,q),K=new xm(L,ft,dt,q,_),Jt=new _m(L,ee,V),ht=new sm(P),tt=new Fg(E,rt,jt,ee,q,ht),_t=new i0(E,P),At=new zg,pt=new Xg(jt),Dt=new tm(E,rt,M,K,u,o),Ct=new $g(E,K,ee),Y=new s0(L,_,ee,M),b=new nm(L,jt,_),U=new mm(L,jt,_),_.programs=tt.programs,E.capabilities=ee,E.extensions=jt,E.properties=P,E.renderLists=At,E.shadowMap=Ct,E.state=M,E.info=_}if(g!==dn)S=new ym(g,e.width,e.height,a,i,s);let j=new Fh(E,L);this.xr=j,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let y=jt.get("WEBGL_lose_context");if(y)y.loseContext()},this.forceContextRestore=function(){let y=jt.get("WEBGL_lose_context");if(y)y.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(y){if(y===void 0)return;ot=y,this.setSize(Ot,J,!1)},this.getSize=function(y){return y.set(Ot,J)},this.setSize=function(y,N,X=!0){if(j.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}if(Ot=y,J=N,e.width=Math.floor(y*ot),e.height=Math.floor(N*ot),X===!0)e.style.width=y+"px",e.style.height=N+"px";if(S!==null)S.setSize(e.width,e.height);this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(Ot*ot,J*ot).floor()},this.setDrawingBufferSize=function(y,N,X){Ot=y,J=N,ot=X,e.width=Math.floor(y*X),e.height=Math.floor(N*X),this.setViewport(0,0,y,N)},this.setEffects=function(y){if(g===dn){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let N=0;N<y.length;N++)if(y[N].isOutputPass===!0){Nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(it)},this.getViewport=function(y){return y.copy(Lt)},this.setViewport=function(y,N,X,k){if(y.isVector4)Lt.set(y.x,y.y,y.z,y.w);else Lt.set(y,N,X,k);M.viewport(it.copy(Lt).multiplyScalar(ot).round())},this.getScissor=function(y){return y.copy(wt)},this.setScissor=function(y,N,X,k){if(y.isVector4)wt.set(y.x,y.y,y.z,y.w);else wt.set(y,N,X,k);M.scissor(at.copy(wt).multiplyScalar(ot).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(y){M.setScissorTest(ge=y)},this.setOpaqueSort=function(y){ct=y},this.setTransparentSort=function(y){Tt=y},this.getClearColor=function(y){return y.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,X=!0){let k=0;if(y){let G=!1;if(H!==null){let xt=H.texture.format;G=x.has(xt)}if(G){let xt=H.texture.type,St=m.has(xt),gt=Dt.getClearColor(),bt=Dt.getClearAlpha(),{r:Rt,g:zt,b:qt}=gt;if(St)f[0]=Rt,f[1]=zt,f[2]=qt,f[3]=bt,L.clearBufferuiv(L.COLOR,0,f);else R[0]=Rt,R[1]=zt,R[2]=qt,R[3]=bt,L.clearBufferiv(L.COLOR,0,R)}else k|=L.COLOR_BUFFER_BIT}if(N)k|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(X)k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(k!==0)L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),O=y},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),Dt.dispose(),At.dispose(),pt.dispose(),P.dispose(),rt.dispose(),K.dispose(),q.dispose(),Y.dispose(),tt.dispose(),j.dispose(),j.removeEventListener("sessionstart",rn),j.removeEventListener("sessionend",an),fn.stop()};function st(y){y.preventDefault(),po("WebGLRenderer: Context Lost."),Z=!0}function ut(){po("WebGLRenderer: Context Restored."),Z=!1;let y=_.autoReset,N=Ct.enabled,X=Ct.autoUpdate,k=Ct.needsUpdate,G=Ct.type;z(),_.autoReset=y,Ct.enabled=N,Ct.autoUpdate=X,Ct.needsUpdate=k,Ct.type=G}function vt(y){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function le(y){let N=y.target;N.removeEventListener("dispose",le),$t(N)}function $t(y){ne(y),P.remove(y)}function ne(y){let N=P.get(y).programs;if(N!==void 0){if(N.forEach(function(X){tt.releaseProgram(X)}),y.isShaderMaterial)tt.releaseShaderCache(y)}}this.renderBufferDirect=function(y,N,X,k,G,xt){if(N===null)N=Pe;let St=G.isMesh&&G.matrixWorld.determinantAffine()<0,gt=Yh(y,N,X,k,G);M.setMaterial(k,St);let bt=X.index,Rt=1;if(k.wireframe===!0){if(bt=ft.getWireframeAttribute(X),bt===void 0)return;Rt=2}let zt=X.drawRange,qt=X.attributes.position,Et=zt.start*Rt,se=(zt.start+zt.count)*Rt;if(xt!==null)Et=Math.max(Et,xt.start*Rt),se=Math.min(se,(xt.start+xt.count)*Rt);if(bt!==null)Et=Math.max(Et,0),se=Math.min(se,bt.count);else if(qt!==void 0&&qt!==null)Et=Math.max(Et,0),se=Math.min(se,qt.count);let Me=se-Et;if(Me<0||Me===1/0)return;q.setup(G,k,gt,X,bt);let me,ue=b;if(bt!==null)me=dt.get(bt),ue=U,ue.setIndex(me);if(G.isMesh)if(k.wireframe===!0)M.setLineWidth(k.wireframeLinewidth*oe()),ue.setMode(L.LINES);else ue.setMode(L.TRIANGLES);else if(G.isLine){let De=k.linewidth;if(De===void 0)De=1;if(M.setLineWidth(De*oe()),G.isLineSegments)ue.setMode(L.LINES);else if(G.isLineLoop)ue.setMode(L.LINE_LOOP);else ue.setMode(L.LINE_STRIP)}else if(G.isPoints)ue.setMode(L.POINTS);else if(G.isSprite)ue.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(!jt.get("WEBGL_multi_draw")){let{_multiDrawStarts:De,_multiDrawCounts:yt,_multiDrawCount:Be}=G,te=bt?dt.get(bt).bytesPerElement:1,Je=P.get(k).currentProgram.getUniforms();for(let pn=0;pn<Be;pn++)Je.setValue(L,"_gl_DrawID",pn),ue.render(De[pn]/te,yt[pn])}else ue.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)ue.renderInstances(Et,Me,G.count);else if(X.isInstancedBufferGeometry){let De=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,yt=Math.min(X.instanceCount,De);ue.renderInstances(Et,Me,yt)}else ue.render(Et,Me)};function Bt(y,N,X,k){if(O!==null&&y.isNodeMaterial)O.setObject(k,y);if(Xt===!0)ht.setState(y,X,!1);if(y.transparent===!0&&y.side===tn&&y.forceSinglePass===!1)y.side=Ve,y.needsUpdate=!0,Pn(y,N,k),y.side=Gi,y.needsUpdate=!0,Pn(y,N,k),y.side=tn;else Pn(y,N,k)}this.compile=function(y,N,X=null){if(X===null)X=y;if(O!==null)O.renderStart(y,N,X);if(T=pt.get(X),T.init(N),C.push(T),X.traverseVisible(function(G){if(G.isLight&&G.layers.test(N.layers)){if(T.pushLight(G),G.castShadow)T.pushShadow(G)}}),y!==X)y.traverseVisible(function(G){if(G.isLight&&G.layers.test(N.layers)){if(T.pushLight(G),G.castShadow)T.pushShadow(G)}});if(T.setupLights(),O!==null)O.updateLights(T.state.lightsArray);if(ie=this.localClippingEnabled,Xt=ht.init(this.clippingPlanes,ie),Xt===!0)ht.setGlobalState(this.clippingPlanes,N);if(O!==null)Ct.render(T.state.shadowsArray,X,N);let k=new Set;if(y.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let xt=G.material;if(xt)if(Array.isArray(xt))for(let St=0;St<xt.length;St++){let gt=xt[St];Bt(gt,X,N,G),k.add(gt)}else Bt(xt,X,N,G),k.add(xt)}),T=C.pop(),O!==null)O.renderEnd();return k},this.compileAsync=function(y,N,X=null){let k=this.compile(y,N,X);return new Promise((G)=>{function xt(){if(k.forEach(function(St){let bt=P.get(St).currentProgram;if(bt===void 0||bt.isReady())k.delete(St)}),k.size===0){G(y);return}setTimeout(xt,10)}if(jt.get("KHR_parallel_shader_compile")!==null)xt();else setTimeout(xt,10)})};let Ht=null;function He(y){if(Ht)Ht(y)}function rn(){fn.stop()}function an(){fn.start()}let fn=new Eh;if(fn.setAnimationLoop(He),typeof self<"u")fn.setContext(self);this.setAnimationLoop=function(y){Ht=y,j.setAnimationLoop(y),y===null?fn.stop():fn.start()},j.addEventListener("sessionstart",rn),j.addEventListener("sessionend",an),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Z===!0)return;if(O!==null)O.renderStart(y,N);let X=j.enabled===!0&&j.isPresenting===!0,k=S!==null&&(H===null||X)&&S.begin(E,H);if(y.matrixWorldAutoUpdate===!0)y.updateMatrixWorld();if(N.parent===null&&N.matrixWorldAutoUpdate===!0)N.updateMatrixWorld();if(j.enabled===!0&&j.isPresenting===!0&&(S===null||S.isCompositing()===!1)){if(j.cameraAutoUpdate===!0)j.updateCamera(N);N=j.getCamera()}if(y.isScene===!0)y.onBeforeRender(E,y,N,H);if(T=pt.get(y,C.length),T.init(N),T.state.textureUnits=V.getTextureUnits(),C.push(T),Yt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Gt.setFromProjectionMatrix(Yt,fo,N.reversedDepth),ie=this.localClippingEnabled,Xt=ht.init(this.clippingPlanes,ie),v=At.get(y,w.length),v.init(),w.push(v),j.enabled===!0&&j.isPresenting===!0){let St=E.xr.getDepthSensingMesh();if(St!==null)Re(St,N,-1/0,E.sortObjects)}if(Re(y,N,0,E.sortObjects),v.finish(),O!==null)O.updateLights(T.state.lightsArray);if(E.sortObjects===!0)v.sort(ct,Tt);if(ve=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,ve)Dt.addToRenderList(v,y);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(Xt===!0)ht.beginShadows();let G=T.state.shadowsArray;if(Ct.render(G,y,N),Xt===!0)ht.endShadows();if((k&&S.hasRenderPass())===!1){let St=v.opaque,gt=v.transmissive;if(T.setupLights(),N.isArrayCamera){let bt=N.cameras;if(gt.length>0)for(let Rt=0,zt=bt.length;Rt<zt;Rt++){let qt=bt[Rt];ns(St,gt,y,qt)}if(ve)Dt.render(y);for(let Rt=0,zt=bt.length;Rt<zt;Rt++){let qt=bt[Rt];es(v,y,qt,qt.viewport)}}else{if(gt.length>0)ns(St,gt,y,N);if(ve)Dt.render(y);es(v,y,N)}}if(H!==null&&nt===0)V.updateMultisampleRenderTarget(H),V.updateRenderTargetMipmap(H);if(k)S.end(E);if(y.isScene===!0)y.onAfterRender(E,y,N);if(q.resetDefaultState(),lt=-1,Q=null,C.pop(),C.length>0){if(T=C[C.length-1],V.setTextureUnits(T.state.textureUnits),Xt===!0)ht.setGlobalState(E.clippingPlanes,T.state.camera)}else T=null;if(w.pop(),w.length>0)v=w[w.length-1];else v=null;if(O!==null)O.renderEnd()};function Re(y,N,X,k){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD){if(y.autoUpdate===!0)y.update(N)}else if(y.isLightProbeGrid)T.pushLightProbeGrid(y);else if(y.isLight){if(T.pushLight(y),y.castShadow)T.pushShadow(y)}else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(Gt)){if(k)he.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Yt);let St=K.update(y),gt=y.material;if(gt.visible)v.push(y,St,gt,X,he.z,null,N)}}else if(y.isMesh||y.isLine||y.isPoints){if(!y.frustumCulled||y.intersectsFrustum(Gt)){let St=K.update(y),gt=y.material;if(k){if(y.boundingSphere!==void 0){if(y.boundingSphere===null)y.computeBoundingSphere();he.copy(y.boundingSphere.center)}else{if(St.boundingSphere===null)St.computeBoundingSphere();he.copy(St.boundingSphere.center)}he.applyMatrix4(y.matrixWorld).applyMatrix4(Yt)}if(Array.isArray(gt)){let bt=St.groups;for(let Rt=0,zt=bt.length;Rt<zt;Rt++){let qt=bt[Rt],Et=gt[qt.materialIndex];if(Et&&Et.visible)v.push(y,St,Et,X,he.z,qt,N)}}else if(gt.visible)v.push(y,St,gt,X,he.z,null,N)}}}let xt=y.children;for(let St=0,gt=xt.length;St<gt;St++)Re(xt[St],N,X,k)}function es(y,N,X,k){let{opaque:G,transmissive:xt,transparent:St}=y;if(T.setupLightsView(X),Xt===!0)ht.setGlobalState(E.clippingPlanes,X);if(k)M.viewport(it.copy(k));if(G.length>0)_i(G,N,X);if(xt.length>0)_i(xt,N,X);if(St.length>0)_i(St,N,X);M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function ns(y,N,X,k){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){let Et=jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new Ze(1,1,{generateMipmaps:!0,type:Et?xn:dn,minFilter:Kn,samples:Math.max(4,ee.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}let xt=T.state.transmissionRenderTarget[k.id],St=k.viewport||it;xt.setSize(St.z*E.transmissionResolutionScale,St.w*E.transmissionResolutionScale);let gt=E.getRenderTarget(),bt=E.getActiveCubeFace(),Rt=E.getActiveMipmapLevel();if(E.setRenderTarget(xt),E.getClearColor(Pt),Kt=E.getClearAlpha(),Kt<1)E.setClearColor(16777215,0.5);if(E.clear(),ve)Dt.render(X);let zt=E.toneMapping;E.toneMapping=un;let qt=k.viewport;if(k.viewport!==void 0)k.viewport=void 0;if(T.setupLightsView(k),Xt===!0)ht.setGlobalState(E.clippingPlanes,k);if(_i(y,X,k),V.updateMultisampleRenderTarget(xt),V.updateRenderTargetMipmap(xt),jt.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let se=0,Me=N.length;se<Me;se++){let me=N[se],{object:ue,geometry:De,material:yt,group:Be}=me;if(yt.side===tn&&ue.layers.test(k.layers)){let te=yt.side;yt.side=Ve,yt.needsUpdate=!0,xi(ue,X,k,De,yt,Be),yt.side=te,yt.needsUpdate=!0,Et=!0}}if(Et===!0)V.updateMultisampleRenderTarget(xt),V.updateRenderTargetMipmap(xt)}if(E.setRenderTarget(gt,bt,Rt),E.setClearColor(Pt,Kt),qt!==void 0)k.viewport=qt;E.toneMapping=zt}function _i(y,N,X){let k=N.isScene===!0?N.overrideMaterial:null;for(let G=0,xt=y.length;G<xt;G++){let St=y[G],{object:gt,geometry:bt,group:Rt}=St,zt=St.material;if(zt.allowOverride===!0&&k!==null)zt=k;if(gt.layers.test(X.layers))xi(gt,N,X,bt,zt,Rt)}}function xi(y,N,X,k,G,xt){if(O!==null&&G.isNodeMaterial)O.setObject(y,G);if(y.onBeforeRender(E,N,X,k,G,xt),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),G.onBeforeRender(E,N,X,k,y,xt),G.transparent===!0&&G.side===tn&&G.forceSinglePass===!1)G.side=Ve,G.needsUpdate=!0,E.renderBufferDirect(X,N,k,G,y,xt),G.side=Gi,G.needsUpdate=!0,E.renderBufferDirect(X,N,k,G,y,xt),G.side=tn;else E.renderBufferDirect(X,N,k,G,y,xt);y.onAfterRender(E,N,X,k,G,xt)}function Pn(y,N,X){if(N.isScene!==!0)N=Pe;let k=P.get(y),G=T.state.lights,xt=T.state.shadowsArray,St=G.state.version,gt=tt.getParameters(y,G.state,xt,N,X,T.state.lightProbeGridArray),bt=tt.getProgramCacheKey(gt),Rt=k.programs;k.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,k.fog=N.fog;let zt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;if(k.envMap=rt.get(y.envMap||k.environment,zt),k.envMapRotation=k.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Rt===void 0)y.addEventListener("dispose",le),Rt=new Map,k.programs=Rt;let qt=Rt.get(bt);if(qt!==void 0){if(k.currentProgram===qt&&k.lightsStateVersion===St)return ul(y,gt),qt}else{if(gt.uniforms=tt.getUniforms(y),O!==null&&y.isNodeMaterial)O.build(y,X,gt);y.onBeforeCompile(gt,E),qt=tt.acquireProgram(gt,bt),Rt.set(bt,qt),k.uniforms=gt.uniforms}let Et=k.uniforms;if(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)Et.clippingPlanes=ht.uniform;if(ul(y,gt),k.needsLights=Jh(y),k.lightsStateVersion=St,k.needsLights)Et.ambientLightColor.value=G.state.ambient,Et.lightProbe.value=G.state.probe,Et.sunLights.value=G.state.sun,Et.sunLightShadows.value=G.state.sunShadow,Et.directionalLights.value=G.state.directional,Et.directionalLightShadows.value=G.state.directionalShadow,Et.spotLights.value=G.state.spot,Et.spotLightShadows.value=G.state.spotShadow,Et.rectAreaLights.value=G.state.rectArea,Et.ltc_1.value=G.state.rectAreaLTC1,Et.ltc_2.value=G.state.rectAreaLTC2,Et.pointLights.value=G.state.point,Et.pointLightShadows.value=G.state.pointShadow,Et.hemisphereLights.value=G.state.hemi,Et.sunShadowMatrix.value=G.state.sunShadowMatrix,Et.sunShadowCascade.value=G.state.sunShadowCascade,Et.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Et.spotLightMatrix.value=G.state.spotLightMatrix,Et.spotLightMap.value=G.state.spotLightMap,Et.pointShadowMatrix.value=G.state.pointShadowMatrix;return k.lightProbeGrid=T.state.lightProbeGridArray.length>0,k.currentProgram=qt,k.uniformsList=null,qt}function hl(y){if(y.uniformsList===null){let N=y.currentProgram.getUniforms();y.uniformsList=Ns.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function ul(y,N){let X=P.get(y);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function qh(y,N){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;A.setFromMatrixPosition(N.matrixWorld);for(let X=0,k=y.length;X<k;X++){let G=y[X];if(G.texture!==null&&G.boundingBox.containsPoint(A))return G}return null}function Yh(y,N,X,k,G){if(N.isScene!==!0)N=Pe;V.resetTextureUnits();let xt=N.fog,St=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?N.environment:null,gt=H===null?E.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Zt.workingColorSpace,bt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Rt=rt.get(k.envMap||St,bt),zt=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,qt=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Et=!!X.morphAttributes.position,se=!!X.morphAttributes.normal,Me=!!X.morphAttributes.color,me=un;if(k.toneMapped){if(H===null||H.isXRRenderTarget===!0)me=E.toneMapping}let ue=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,De=ue!==void 0?ue.length:0,yt=P.get(k),Be=T.state.lights;if(Xt===!0){if(ie===!0||y!==Q){let pe=y===Q&&k.id===lt;ht.setState(k,y,pe)}}let te=!1;if(k.version===yt.__version){if(yt.needsLights&&yt.lightsStateVersion!==Be.state.version)te=!0;else if(yt.outputColorSpace!==gt)te=!0;else if(G.isBatchedMesh&&yt.batching===!1)te=!0;else if(!G.isBatchedMesh&&yt.batching===!0)te=!0;else if(G.isBatchedMesh&&yt.batchingColor===!0&&G._colorsTexture===null)te=!0;else if(G.isBatchedMesh&&yt.batchingColor===!1&&G._colorsTexture!==null)te=!0;else if(G.isInstancedMesh&&yt.instancing===!1)te=!0;else if(!G.isInstancedMesh&&yt.instancing===!0)te=!0;else if(G.isSkinnedMesh&&yt.skinning===!1)te=!0;else if(!G.isSkinnedMesh&&yt.skinning===!0)te=!0;else if(G.isInstancedMesh&&yt.instancingColor===!0&&G.instanceColor===null)te=!0;else if(G.isInstancedMesh&&yt.instancingColor===!1&&G.instanceColor!==null)te=!0;else if(G.isInstancedMesh&&yt.instancingMorph===!0&&G.morphTexture===null)te=!0;else if(G.isInstancedMesh&&yt.instancingMorph===!1&&G.morphTexture!==null)te=!0;else if(yt.envMap!==Rt)te=!0;else if(k.fog===!0&&yt.fog!==xt)te=!0;else if(yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==ht.numPlanes||yt.numIntersection!==ht.numIntersection))te=!0;else if(yt.vertexAlphas!==zt)te=!0;else if(yt.vertexTangents!==qt)te=!0;else if(yt.morphTargets!==Et)te=!0;else if(yt.morphNormals!==se)te=!0;else if(yt.morphColors!==Me)te=!0;else if(yt.toneMapping!==me)te=!0;else if(yt.morphTargetsCount!==De)te=!0;else if(!!yt.lightProbeGrid!==T.state.lightProbeGridArray.length>0)te=!0}else te=!0,yt.__version=k.version;let Je=yt.currentProgram;if(te===!0){if(Je=Pn(k,N,G),O&&k.isNodeMaterial)O.onUpdateProgram(k,Je,yt)}let pn=!1,Ln=!1,vi=!1,ce=Je.getUniforms(),Se=yt.uniforms;if(M.useProgram(Je.program))pn=!0,Ln=!0,vi=!0;if(k.id!==lt)lt=k.id,Ln=!0;if(yt.needsLights){let pe=qh(T.state.lightProbeGridArray,G);if(yt.lightProbeGrid!==pe)yt.lightProbeGrid=pe,Ln=!0}if(pn||Q!==y){if(M.buffers.depth.getReversed()&&y.reversedDepth!==!0)y._reversedDepth=!0,y.updateProjectionMatrix();ce.setValue(L,"projectionMatrix",y.projectionMatrix),ce.setValue(L,"viewMatrix",y.matrixWorldInverse);let Nn=ce.map.cameraPosition;if(Nn!==void 0)Nn.setValue(L,ye.setFromMatrixPosition(y.matrixWorld));if(ee.logarithmicDepthBuffer)ce.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2));if(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)ce.setValue(L,"isOrthographic",y.isOrthographicCamera===!0);if(Q!==y)Q=y,Ln=!0,vi=!0}if(yt.needsLights){if(Be.state.sunShadowMap.length>0)ce.setValue(L,"sunShadowMap",Be.state.sunShadowMap,V);if(Be.state.directionalShadowMap.length>0)ce.setValue(L,"directionalShadowMap",Be.state.directionalShadowMap,V);if(Be.state.spotShadowMap.length>0)ce.setValue(L,"spotShadowMap",Be.state.spotShadowMap,V);if(Be.state.pointShadowMap.length>0)ce.setValue(L,"pointShadowMap",Be.state.pointShadowMap,V)}if(G.isSkinnedMesh){ce.setOptional(L,G,"bindMatrix"),ce.setOptional(L,G,"bindMatrixInverse");let pe=G.skeleton;if(pe){if(pe.boneTexture===null)pe.computeBoneTexture();ce.setValue(L,"boneTexture",pe.boneTexture,V)}}if(G.isBatchedMesh){if(ce.setOptional(L,G,"batchingTexture"),ce.setValue(L,"batchingTexture",G._matricesTexture,V),ce.setOptional(L,G,"batchingIdTexture"),ce.setValue(L,"batchingIdTexture",G._indirectTexture,V),ce.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null)ce.setValue(L,"batchingColorTexture",G._colorsTexture,V)}let Dn=X.morphAttributes;if(Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)Jt.update(G,X,Je);if(Ln||yt.receiveShadow!==G.receiveShadow)yt.receiveShadow=G.receiveShadow,ce.setValue(L,"receiveShadow",G.receiveShadow);if((k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&N.environment!==null)Se.envMapIntensity.value=N.environmentIntensity;if(Se.dfgLUT!==void 0)Se.dfgLUT.value=a0();if(Ln){if(ce.setValue(L,"toneMappingExposure",E.toneMappingExposure),yt.needsLights)Zh(Se,vi);if(xt&&k.fog===!0)_t.refreshFogUniforms(Se,xt);if(_t.refreshMaterialUniforms(Se,k,ot,J,T.state.transmissionRenderTarget[y.id]),yt.needsLights&&yt.lightProbeGrid){let pe=yt.lightProbeGrid;Se.probesSH.value=pe.texture,Se.probesMin.value.copy(pe.boundingBox.min),Se.probesMax.value.copy(pe.boundingBox.max),Se.probesResolution.value.copy(pe.resolution)}Ns.upload(L,hl(yt),Se,V)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0)Ns.upload(L,hl(yt),Se,V),k.uniformsNeedUpdate=!1;if(k.isSpriteMaterial)ce.setValue(L,"center",G.center);if(ce.setValue(L,"modelViewMatrix",G.modelViewMatrix),ce.setValue(L,"normalMatrix",G.normalMatrix),ce.setValue(L,"modelMatrix",G.matrixWorld),k.uniformsGroups!==void 0){let pe=k.uniformsGroups;for(let Nn=0,yi=pe.length;Nn<yi;Nn++){let fl=pe[Nn];Y.update(fl,Je),Y.bind(fl,Je)}}return Je}function Zh(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.sunLights.needsUpdate=N,y.sunLightShadows.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function Jh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return nt},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(y,N,X){let k=P.get(y);if(k.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1)k.__useRenderToTexture=!1;P.get(y.texture).__webglTexture=N,P.get(y.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:X,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){let X=P.get(y);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(y,N=0,X=0){H=y,W=N,nt=X;let k=null,G=!1,xt=!1;if(y){let gt=P.get(y);if(gt.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(L.FRAMEBUFFER,gt.__webglFramebuffer),it.copy(y.viewport),at.copy(y.scissor),It=y.scissorTest,M.viewport(it),M.scissor(at),M.setScissorTest(It),lt=-1;return}else if(gt.__webglFramebuffer===void 0)V.setupRenderTarget(y);else if(gt.__hasExternalTextures)V.rebindTextures(y,P.get(y.texture).__webglTexture,P.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let zt=y.depthTexture;if(gt.__boundDepthTexture!==zt){if(zt!==null&&P.has(zt)&&(y.width!==zt.image.width||y.height!==zt.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(y)}}let bt=y.texture;if(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)xt=!0;let Rt=P.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget){if(Array.isArray(Rt[N]))k=Rt[N][X];else k=Rt[N];G=!0}else if(y.samples>0&&V.useMultisampledRTT(y)===!1)k=P.get(y).__webglMultisampledFramebuffer;else if(Array.isArray(Rt))k=Rt[X];else k=Rt;it.copy(y.viewport),at.copy(y.scissor),It=y.scissorTest}else it.copy(Lt).multiplyScalar(ot).floor(),at.copy(wt).multiplyScalar(ot).floor(),It=ge;if(X!==0)k=B;if(M.bindFramebuffer(L.FRAMEBUFFER,k))M.drawBuffers(y,k);if(M.viewport(it),M.scissor(at),M.setScissorTest(It),G){let gt=P.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,gt.__webglTexture,X)}else if(xt){let gt=N;for(let bt=0;bt<y.textures.length;bt++){let Rt=P.get(y.textures[bt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+bt,Rt.__webglTexture,X,gt)}}else if(y!==null&&X!==0){let gt=P.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,gt.__webglTexture,X)}lt=-1};function dl(y){let N=P.get(y);if(N.__readFormat!==y.format||N.__readType!==y.type)N.__readFormat=y.format,N.__readType=y.type,N.__formatReadable=ee.textureFormatReadable(y.format),N.__typeReadable=ee.textureTypeReadable(y.type);return N}if(this.readRenderTargetPixels=function(y,N,X,k,G,xt,St,gt=0){if(!(y&&y.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=P.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&St!==void 0)bt=bt[St];if(bt){M.bindFramebuffer(L.FRAMEBUFFER,bt);try{let Rt=y.textures[gt],{format:zt,type:qt}=Rt;if(y.textures.length>1)L.readBuffer(L.COLOR_ATTACHMENT0+gt);let Et=dl(Rt);if(Et.__formatReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Et.__typeReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(N>=0&&N<=y.width-k&&(X>=0&&X<=y.height-G))L.readPixels(N,X,k,G,I.convert(zt),I.convert(qt),xt)}finally{let Rt=H!==null?P.get(H).__webglFramebuffer:null;M.bindFramebuffer(L.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(y,N,X,k,G,xt,St,gt=0){if(!(y&&y.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=P.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&St!==void 0)bt=bt[St];if(bt)if(N>=0&&N<=y.width-k&&(X>=0&&X<=y.height-G)){M.bindFramebuffer(L.FRAMEBUFFER,bt);let Rt=y.textures[gt],{format:zt,type:qt}=Rt;if(y.textures.length>1)L.readBuffer(L.COLOR_ATTACHMENT0+gt);let Et=dl(Rt);if(Et.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Et.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let se=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,se),L.bufferData(L.PIXEL_PACK_BUFFER,xt.byteLength,L.STREAM_READ),L.readPixels(N,X,k,G,I.convert(zt),I.convert(qt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let Me=H!==null?P.get(H).__webglFramebuffer:null;M.bindFramebuffer(L.FRAMEBUFFER,Me);let me=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Xc(L,me,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,se),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,xt),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(se),L.deleteSync(me),xt}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,X=0){let k=Math.pow(2,-X),G=Math.floor(y.image.width*k),xt=Math.floor(y.image.height*k),St=N!==null?N.x:0,gt=N!==null?N.y:0;V.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,St,gt,G,xt),M.unbindTexture()},this.copyTextureToTexture=function(y,N,X=null,k=null,G=0,xt=0){let St,gt,bt,Rt,zt,qt,Et,se,Me,me=y.isCompressedTexture?y.mipmaps[xt]:y.image;if(X!==null)St=X.max.x-X.min.x,gt=X.max.y-X.min.y,bt=X.isBox3?X.max.z-X.min.z:1,Rt=X.min.x,zt=X.min.y,qt=X.isBox3?X.min.z:0;else{let Se=Math.pow(2,-G);if(St=Math.floor(me.width*Se),gt=Math.floor(me.height*Se),y.isDataArrayTexture)bt=me.depth;else if(y.isData3DTexture)bt=Math.floor(me.depth*Se);else bt=1;Rt=0,zt=0,qt=0}if(k!==null)Et=k.x,se=k.y,Me=k.z;else Et=0,se=0,Me=0;let ue=I.convert(N.format),De=I.convert(N.type),yt;if(N.isData3DTexture)V.setTexture3D(N,0),yt=L.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)V.setTexture2DArray(N,0),yt=L.TEXTURE_2D_ARRAY;else V.setTexture2D(N,0),yt=L.TEXTURE_2D;M.activeTexture(L.TEXTURE0),M.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),M.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),M.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);let Be=M.getParameter(L.UNPACK_ROW_LENGTH),te=M.getParameter(L.UNPACK_IMAGE_HEIGHT),Je=M.getParameter(L.UNPACK_SKIP_PIXELS),pn=M.getParameter(L.UNPACK_SKIP_ROWS),Ln=M.getParameter(L.UNPACK_SKIP_IMAGES);M.pixelStorei(L.UNPACK_ROW_LENGTH,me.width),M.pixelStorei(L.UNPACK_IMAGE_HEIGHT,me.height),M.pixelStorei(L.UNPACK_SKIP_PIXELS,Rt),M.pixelStorei(L.UNPACK_SKIP_ROWS,zt),M.pixelStorei(L.UNPACK_SKIP_IMAGES,qt);let vi=y.isDataArrayTexture||y.isData3DTexture,ce=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){let Se=P.get(y),Dn=P.get(N),pe=P.get(Se.__renderTarget),Nn=P.get(Dn.__renderTarget);M.bindFramebuffer(L.READ_FRAMEBUFFER,pe.__webglFramebuffer),M.bindFramebuffer(L.DRAW_FRAMEBUFFER,Nn.__webglFramebuffer);for(let yi=0;yi<bt;yi++){if(vi)L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,P.get(y).__webglTexture,G,qt+yi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,P.get(N).__webglTexture,xt,Me+yi);L.blitFramebuffer(Rt,zt,St,gt,Et,se,St,gt,L.DEPTH_BUFFER_BIT,L.NEAREST)}M.bindFramebuffer(L.READ_FRAMEBUFFER,null),M.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(G!==0||y.isRenderTargetTexture||P.has(y)){let Se=P.get(y),Dn=P.get(N);M.bindFramebuffer(L.READ_FRAMEBUFFER,et),M.bindFramebuffer(L.DRAW_FRAMEBUFFER,D);for(let pe=0;pe<bt;pe++){if(vi)L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.__webglTexture,G,qt+pe);else L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Se.__webglTexture,G);if(ce)L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Dn.__webglTexture,xt,Me+pe);else L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Dn.__webglTexture,xt);if(G!==0)L.blitFramebuffer(Rt,zt,St,gt,Et,se,St,gt,L.COLOR_BUFFER_BIT,L.NEAREST);else if(ce)L.copyTexSubImage3D(yt,xt,Et,se,Me+pe,Rt,zt,St,gt);else L.copyTexSubImage2D(yt,xt,Et,se,Rt,zt,St,gt)}M.bindFramebuffer(L.READ_FRAMEBUFFER,null),M.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(ce)if(y.isDataTexture||y.isData3DTexture)L.texSubImage3D(yt,xt,Et,se,Me,St,gt,bt,ue,De,me.data);else if(N.isCompressedArrayTexture)L.compressedTexSubImage3D(yt,xt,Et,se,Me,St,gt,bt,ue,me.data);else L.texSubImage3D(yt,xt,Et,se,Me,St,gt,bt,ue,De,me);else if(y.isDataTexture)L.texSubImage2D(L.TEXTURE_2D,xt,Et,se,St,gt,ue,De,me.data);else if(y.isCompressedTexture)L.compressedTexSubImage2D(L.TEXTURE_2D,xt,Et,se,me.width,me.height,ue,me.data);else L.texSubImage2D(L.TEXTURE_2D,xt,Et,se,St,gt,ue,De,me);if(M.pixelStorei(L.UNPACK_ROW_LENGTH,Be),M.pixelStorei(L.UNPACK_IMAGE_HEIGHT,te),M.pixelStorei(L.UNPACK_SKIP_PIXELS,Je),M.pixelStorei(L.UNPACK_SKIP_ROWS,pn),M.pixelStorei(L.UNPACK_SKIP_IMAGES,Ln),xt===0&&N.generateMipmaps)L.generateMipmap(yt);M.unbindTexture()},this.initRenderTarget=function(y){if(P.get(y).__webglFramebuffer===void 0)V.setupRenderTarget(y)},this.initTexture=function(y){if(y.isCubeTexture)V.setTextureCube(y,0);else if(y.isData3DTexture)V.setTexture3D(y,0);else if(y.isDataArrayTexture||y.isCompressedArrayTexture)V.setTexture2DArray(y,0);else V.setTexture2D(y,0);M.unbindTexture()},this.resetState=function(){W=0,nt=0,H=null,M.reset(),q.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fo}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}var Zv=8,Jv=30;function Bh(t){let e=t/8*Math.PI*2;return{x:Math.sin(e),y:(1-Math.cos(e*2))*0.18,z:(1-Math.cos(e))*0.3,time:(1-Math.cos(e))*2}}function zh(){let t=new Yi,e=new de,n=new Hn,i=new F,s=new WeakMap,r=[0,-0.55,0.55].flatMap((a)=>[0,-0.55,0.55].map((o)=>({point:new Mt(a,o),ray:new Ji})));return(a,o,l)=>{o.updateMatrixWorld(),t.setFromProjectionMatrix(e.multiplyMatrices(o.projectionMatrix,o.matrixWorldInverse));for(let{point:h,ray:u}of r)u.setFromCamera(h,o),u.near=o.near,u.far=Math.min(o.far,l.far);let c=!1,d=0,p=new Set;for(let h of a){if(!h.visible)continue;h.updateWorldMatrix(!0,!0),h.traverse((u)=>{let g=u.geometry,x=u.material?.opacity??0;if(!u.visible||!g||x<0.08)return;if(!g.boundingSphere)g.computeBoundingSphere();n.copy(g.boundingSphere).applyMatrix4(u.matrixWorld);let m=n.center.distanceTo(o.position),f=1-Xi.smoothstep(m,l.near,l.far);if(x*f<0.08||!t.intersectsSphere(n)||n.radius/Math.max(1,m)<0.003)return;if(!s.has(g)){let v=g.attributes.position,T=[];for(let w=0,C=Math.max(1,Math.floor(v.count/48));w<v.count;w+=C)T.push(new F().fromBufferAttribute(v,w));s.set(g,T)}let R=!1,A=!1;for(let v of s.get(g)){if(i.copy(v).applyMatrix4(u.matrixWorld).project(o),i.z<-1||i.z>1||Math.abs(i.x)>0.95||Math.abs(i.y)>0.95)continue;if(R=!0,Math.abs(i.x)<0.65&&Math.abs(i.y)<0.65)A=!0}if(!A&&g.type==="ShapeGeometry")for(let{ray:v}of r){let T=v.intersectObject(u,!1)[0];if(T&&x*(1-Xi.smoothstep(T.distance,l.near,l.far))>=0.08){R=!0,A=!0;break}}if(c||=A,R)p.add(h),d+=Math.min(0.3,(n.radius/Math.max(1,m))**2*6)*x*f})}return{occupied:c,presence:Math.min(1,d),visibleGroups:p}}}var Br={ink:"#282429",blue:"#2b4587",red:"#a74343",orange:"#fd6e22",pink:"#ef88b9",mint:"#1dd0ae",yellow:"#ffb003",cyan:"#08beed",lilac:"#b6a5d2",coral:"#e96050",butter:"#dfd354",petrol:"#236466",rose:"#c58e95"},ji=[{id:"flow",name:"Loose ends",center:[0,0,-12],inks:["ink","mint","orange","blue"],tools:["Thread","Ribbon","Colour"],note:"A thread can wander. Let it."},{id:"fold",name:"Soft geometry",center:[52,12,-50],inks:["blue","pink","yellow","ink"],tools:["Line","Fold","Cut-out"],note:"Colour opens up when you move around it."},{id:"soft",name:"Almost touching",center:[-48,-12,-64],inks:["coral","lilac","blue","butter"],tools:["Wander","Ribbon","Shape"],note:"Leave a little air between things."},{id:"print",name:"Overprint",center:[14,-24,-108],inks:["ink","coral","petrol","pink"],tools:["Scratch","Brush","Patch"],note:"Rough edges. Happy accidents."},{id:"echo",name:"Inside out",center:[57,-22,30],inks:["blue","orange","lilac","mint"],tools:["Contour","Band","Shape"],note:"One gesture. A few echoes."},{id:"hush",name:"The hush",center:[-52,24,18],inks:["ink","rose","lilac","orange"],tools:["Whisper","Smudge","Patch"],note:"Something small. Or something enormous."}],sl=(t)=>ji.find((e)=>e.id===t)||ji[0],pi=(t)=>()=>(t=Math.imul(t,1664525)+1013904223>>>0)/4294967296,mi=(t)=>[...t].reduce((e,n)=>Math.imul(e^n.charCodeAt(0),16777619)>>>0,2166136261);function gi(t){let e=ji.map((n)=>{let i=n.center.map((s,r)=>s+Math.round((t[r]-s)/240)*240);return{env:n,center:i,distance:Math.hypot(...t.map((s,r)=>s-i[r]))}}).sort((n,i)=>n.distance-i.distance);return{primary:e[0].env,neighbour:e[1].env,center:e[0].center,blend:e[0].distance/(e[0].distance+e[1].distance)}}function rl(t,e,n){let i=e%997/997*Math.PI*2,s=Math.sin(t*Math.PI);switch(n){case"fold":return Math.sin(t*Math.PI*4+i)*1.65*s;case"soft":return Math.sin(t*Math.PI+i)*2.8*s;case"print":return(t-0.5)*2.4+Math.sin(t*9+i)*0.35;case"echo":return Math.sin(t*Math.PI*2+i)*1.9;case"hush":return Math.sin(t*Math.PI*0.8+i)*1.1;default:return Math.sin(t*Math.PI*2+i)*2.1*s}}var Wt=(t=0,e=0,n=0)=>new F(t,e,n),kh=Math.PI*2,Vn=(t,e=100,n=!1)=>new ai(t,n).getPoints(e);function zr(t,e,{line:n,material:i},s=null){let r=new je,a=pi(e),o=t.inks.map((u)=>Br[u]),l=t.id,c=(u,g,x,m=0.035,f=!1,R=0.65)=>n(u,g,x,m,f,R,l),d=(u,g=100)=>Array.from({length:g+1},(x,m)=>u(m/g));function p(u,g,x,m){let f=[],R=[];g.forEach((T,w)=>{if(f.push(T.x-x,T.y,T.z-0.35,T.x+x,T.y,T.z+0.35),w<g.length-1){let C=w*2;R.push(C,C+1,C+2,C+1,C+3,C+2)}});let A=new Ce;A.setAttribute("position",new Ee(f,3)),A.setIndex(R),A.computeBoundingSphere();let v=new Ie(A,i(m,!1,1,!0,l));return u.add(v),v}function h(u,g,x,m=0,f=1){let R=new oi(g.map((w)=>new Mt(w[0],w[1]))),A=new li(R),v=A.getAttribute("position");for(let w=0;w<v.count;w++)v.setZ(w,m+Math.sin(v.getX(w)*0.17)*f+Math.cos(v.getY(w)*0.21)*f*0.45);A.computeBoundingSphere();let T=new Ie(A,i(x,!1,1,!0,l));return u.add(T),T}if(t.id==="flow"){let u=a()*kh,g=30+a()*14;for(let x=0;x<18;x++){let m=d((f)=>{let R=f*kh,A=Math.sin(f*Math.PI);return Wt((f-0.5)*g+Math.sin(R*2.5+u+x*0.06)*5*A,Math.sin(R*0.9+u)*5+Math.cos(R*3+x*0.09)*3*A+(x-9)*0.14,Math.sin(R*0.75+u)*7+Math.cos(R*2)*x*0.12)},140);c(r,m,o[x%9===0?2:x%7===0?0:1],x===0?0.1:0.025,x>2,x%3===0?0.28:0.62)}c(r,Vn([Wt(-18,-9,2),Wt(-5,6,-7),Wt(12,11,1),Wt(20,5,3)]),o[3],0.065),h(r,[[-5,-7],[-2,-5],[4,-6],[2,-8]],o[2],6,0.6)}if(t.id==="fold"){let u=9+Math.floor(a()*4);for(let x=0;x<u;x++){let m=d((f)=>Wt((x-u/2)*1.6+Math.sin(f*4+x*0.12)*3,(f-0.5)*21+Math.sin(x*0.6)*3,Math.sin(x*0.8)*5+Math.cos(f*4+x*0.3)*3),36);if(p(r,m,0.4+a()*0.28,o[x%5===0?2:x%3===0?1:0]),x%3===0)c(r,m.map((f)=>f.clone().add(Wt(-0.8,0,0.2))),o[3],0.025,!0,0.5)}let g=h(r,[[-13,-8],[-9,-10],[13,-3],[10,-1]],o[1],7,2);g.rotation.z=-0.25,c(r,Vn([Wt(-18,4,-3),Wt(-5,11,7),Wt(15,7,-1)]),o[2],0.045)}if(t.id==="soft"){for(let u=0;u<3;u++){let g=[[-8,-2],[-5,4],[-3,9],[1,6],[7,7],[9,0],[3,-5],[-4,-6]].map(([A,v])=>Wt(A*(0.7+a()*0.4),v*(0.6+a()*0.5),0)),x=Vn(g,72,!0),m=x.map((A)=>[A.x,A.y]),f=new je;f.position.set((u-1)*13,(u===1?1:-1)*5,(u-1)*5),f.rotation.set(0,u*0.4-0.4,(u-1)*0.45),r.add(f),h(f,m,o[u],0,1.5);let R=x.map((A)=>A.clone().add(Wt(0.25,-0.2,-1.4)));if(c(f,R,o[(u+1)%4],0.11),u===1)for(let A=0;A<11;A++)c(f,d((v)=>Wt(-4+v*9,-3+A*0.6+Math.sin(v*3)*0.8,2),22),o[2],0.027,!0,0.45)}c(r,Vn([Wt(-24,3,2),Wt(-12,15,-5),Wt(3,9,9),Wt(23,14,0)]),o[3],0.065)}if(t.id==="print"){for(let u=0;u<3;u++){let g=new je;if(g.position.set((u-1)*11,(u-1)*-3,u*3),g.rotation.z=(a()-0.5)*1.1,r.add(g),u!==1)h(g,[[-6,-5],[-3,7],[4,5],[6,-6]],o[u===0?2:3],-0.6,0.4);for(let x=0;x<26;x++){let m=(x/26-0.5)*13,f=(a()-0.5)*3,R=7+a()*8,A=d((v)=>Wt(m+Math.sin(v*18+x)*0.12+Math.sin(v*5)*1.1,f+(v-0.5)*R,Math.sin(v*3)*0.7+1),20);c(g,A,o[u===1?0:1],x%4===0?0.11:0.025,x%4!==0,0.65)}}for(let u=0;u<13;u++){let g=(a()-0.5)*36,x=(a()-0.5)*23;c(r,[Wt(g,x,4),Wt(g+0.6+a()*1.5,x+0.3,4)],o[0],0.04)}}if(t.id==="echo"){let u=[[-9,-4],[-11,2],[-3,9],[6,7],[10,1],[5,-8],[-3,-5]].map(([x,m])=>Wt(x+(a()-0.5)*3,m+(a()-0.5)*3,0));for(let x=0;x<13;x++){let m=0.35+x*0.09,f=x*0.055,R=Vn(u.map((A)=>Wt((A.x*Math.cos(f)-A.y*Math.sin(f))*m+x*0.2,(A.x*Math.sin(f)+A.y*Math.cos(f))*m,Math.sin(x*0.4)*4+x*0.32)),100,!0);c(r,R,o[x%5===0?1:x%3===0?2:0],x%5===0?0.16:0.037,x%3===1,0.7)}let g=Vn([Wt(-25,-9,3),Wt(-12,7,-4),Wt(0,0,5),Wt(14,-12,2),Wt(23,5,-8)],140);c(r,g,o[3],0.2),c(r,g.map((x)=>x.clone().add(Wt(0,0.45,0.8))),o[1],0.04)}if(t.id==="hush"){let u=Vn([Wt(-28,-8,-7),Wt(-16,-3,-4),Wt(-4,11,4),Wt(4,6,8),Wt(0,-2,2),Wt(22,7,-5)],130);c(r,u,o[0],0.12);for(let g=0;g<5;g++)c(r,u.map((x,m)=>x.clone().add(Wt(Math.sin(m*0.4+g)*0.16,(g-2)*0.13,Math.sin(m*0.07+g)*0.9))),o[g%2===0?1:0],0.02,!0,0.3);h(r,[[9,-8],[10,-4],[11,-7],[15,-8],[11,-9]],o[3],4,0.7);for(let g=0;g<4;g++)c(r,Vn([Wt(-14+g*0.3,9,2),Wt(-12+g*0.3,11,-1),Wt(-10+g*0.2,10,3)],25),o[2],0.03)}if(s){let u=zr(s,e^91823,{line:n,material:i});u.scale.setScalar(0.25),u.position.set(14,8,-6),u.rotation.z=0.65,r.add(u)}return r}var kr=(t)=>Math.max(0,Math.min(1,t)),al=new WeakMap;function o0(t){if(al.has(t))return al.get(t);let e=1/0,n=-1/0,i=1/0,s=-1/0,r=0,a=0,o=0,l=new Set;for(let R of t.strokes||[]){let A=0;for(let v=0;v<R.points.length;v++){let[T,w]=R.points[v];if(e=Math.min(e,T),n=Math.max(n,T),i=Math.min(i,w),s=Math.max(s,w),!v)continue;let[C,S]=R.points[v-1],E=Math.hypot(T-C,w-S);A+=E,a+=(T+C)*0.5*E,o+=(w+S)*0.5*E}if(A)l.add(R.ink),r+=A}let c=Number.isFinite(e)?Math.hypot(n-e,s-i):0,d=kr(c/40)*kr(r/60),p=r/Math.max(1,c),h=1/(1+Math.max(0,p-12)/12),u=r?1-kr(Math.hypot(a/r-(e+n)/2,o/r-(i+s)/2)/Math.max(1,c*0.5)):0,g=1/(1+Math.max(0,l.size-4)*0.15),x=kr(d*(0.5*h+0.25*u+0.25*g)),m=[];if(d<0.4)m.push("Very small mark");if(h<0.65)m.push("Dense overlapping paths");if(u>0.7&&d>0.4)m.push("Balanced composition");if(h>0.8&&d>0.4)m.push("Clear gesture");if(l.size>4)m.push("Many competing inks");let f={score:x,reasons:m.length?m:["Open composition"]};return al.set(t,f),f}function Gh(t,e={}){let n=t.map((s)=>({item:s,score:o0(s).score})).sort((s,r)=>s.score-r.score),i=new Map;for(let s=0;s<n.length;){let r=s+1;while(r<n.length&&Math.abs(n[r].score-n[s].score)<0.000001)r++;let a=n.length>1?(s+r-1)/2/(n.length-1):0.5;for(let o=s;o<r;o++){let l=n[o].item;i.set(l.id,e[l.id]==="feature"?12:e[l.id]==="less"?0.35:1+a*5)}s=r}return i}function l0(t){let e=1;for(let n of t.strokes||[])for(let i of n.points)e=Math.max(e,Math.hypot(i[0],i[1],i[3]??0)*0.03);return e+5}function ts(t){let e=1/0,n=-1/0,i=1/0,s=-1/0,r=1/0,a=-1/0;for(let o of t.strokes||[])for(let[l,c,,d=0]of o.points)e=Math.min(e,l),n=Math.max(n,l),i=Math.min(i,c),s=Math.max(s,c),r=Math.min(r,d),a=Math.max(a,d);if(!Number.isFinite(e))return{center:[0,0,0],radius:5};return{center:[(e+n)*0.015,-(i+s)*0.015||0,(r+a)*0.015],radius:Math.hypot((n-e)*0.015,(s-i)*0.015,(a-r)*0.015)+5}}function Us(t){if(t.space)return t.space;let e=pi(mi(t.id));return{position:[t.x*0.035,(e()-0.5)*24,t.y*0.035-28],rotation:[0,0,0,1]}}function Hh(t){let e=new Map,n=[],i=[...t].sort((s,r)=>(s.seq??1/0)-(r.seq??1/0)||s.id.localeCompare(r.id));for(let s of i){let r=Us(s),a=l0(s),o=pi(mi(s.id)),l=r.position.map((h)=>Math.max(-47000,Math.min(47000,h))),c=l,d=0,p=()=>Math.hypot(c[0],c[1],c[2]-22)>=60+a&&Math.hypot(...c.map((h,u)=>h-gi(c).center[u]))>=45+Math.min(25,a)&&c.every((h)=>Math.abs(h)+a<48500)&&n.every((h)=>Math.hypot(...c.map((u,g)=>u-h.position[g]))>=a+h.radius+30);while(!p()){let h=(1+Math.floor(d++/32))*(a*2+30),u=o()*2-1,g=o()*Math.PI*2,x=Math.sqrt(1-u*u);c=[l[0]+h*x*Math.cos(g),l[1]+h*u,l[2]+h*x*Math.sin(g)]}e.set(s.id,{...r,position:c}),n.push({position:c,radius:a})}return e}function ol(t,e,n=Math.random,i={}){let s=t.length>1?t.filter((l)=>l.id!==e):t;if(!s.length)return null;let r=Gh(s,i),a=s.map((l)=>r.get(l.id)),o=n()*a.reduce((l,c)=>l+c,0);for(let l=0;l<s.length;l++)if(o-=a[l],o<0)return s[l];return s.at(-1)}function Vh(t,e,n=57){return Math.max(23,t+t/(Math.tan(n*Math.PI/360)*Math.min(1,e)*0.68))}var Wh=Br,ll="#f0e8d9",c0=Math.PI*2,ae=(t=0,e=0,n=0)=>new F(t,e,n),Xh=pi,Mn=(t,e,n)=>Math.max(e,Math.min(n,t));function cl(t,e,n,i){if(t.render(e,i),!n.children.length)return;let s=t.autoClear;t.autoClear=!1;try{t.clearDepth(),t.render(n,i)}finally{t.autoClear=s}}function hy(t,e){if(t.preventDefault(),e.state.making)return!1;if(t.ctrlKey)e.dolly(-t.deltaY*0.14);else e.state.speed=Mn(e.state.speed-t.deltaY*0.035,0,100),e.state.paused=!1;return!0}function h0(t,e=0.035){let n=[],i=[],r=ae(),a=ae(),o=ae();for(let c=0;c<t.length;c++){r.subVectors(t[Math.min(t.length-1,c+1)],t[Math.max(0,c-1)]).normalize(),a.crossVectors(r,Math.abs(r.y)>0.94?ae(1,0,0):ae(0,1,0)).normalize(),o.crossVectors(r,a);let d=0.3+0.7*Math.max(0,Math.sin(Math.PI*c/(t.length-1)))**0.3;for(let p=0;p<5;p++){let h=p/5*c0,u=t[c].clone().addScaledVector(a,Math.cos(h)*e*d).addScaledVector(o,Math.sin(h)*e*d);if(n.push(u.x,u.y,u.z),c<t.length-1){let g=c*5+p,x=c*5+(p+1)%5,m=g+5,f=x+5;i.push(g,x,m,x,f,m)}}}let l=new Ce;return l.setAttribute("position",new Ee(n,3)),l.setIndex(i),l.computeBoundingSphere(),l}function uy(t,{onMove:e=()=>{},onFrame:n=()=>{}}={}){let i=new Or({canvas:t,antialias:!0,alpha:!1,powerPreference:"high-performance"});i.setPixelRatio(Math.min(window.devicePixelRatio,1.8)),i.setClearColor(ll);let s=new ws;s.fog=new Ts(ll,58,160);let r=new ke(57,1,0.08,185);r.position.set(0,0,22),r.rotation.order="YXZ";let a=matchMedia("(prefers-reduced-motion: reduce)"),o={speed:a.matches?0:24,paused:a.matches,making:!1,yaw:0,pitch:0,time:0,items:[],travel:0,environment:ji[0]},l={uTime:{value:0},uRipple:{value:ae(9999,9999,9999)},uRippleStart:{value:-100}},c=new Map,d=new Map,p=new Map,h=new Set,u=new Map,g=new Map,x=new ws;x.fog=s.fog;let m=null,f=performance.now(),R="",A=0,v=0,T=0,w=null,C=null,S=0,E=new Map,Z={},O=30,B=new Map,et=new Map,D=new Map,W=new Map,nt=zh(),H=null,lt=-1/0,Q=0,it=0,at=[],It=ae(),Pt=ae(),Kt=ae(),Ot=new gn(0,0,0,"YXZ");function J(b,U=!1,I=1,q=!0,Y="flow"){let z=[b,U,I,q,Y].join("/");if(c.has(z))return c.get(z);let j=U?new Rs({color:b,transparent:I<1,opacity:I}):new qi({color:b,side:tn}),st={flow:1,fold:0.24,soft:0.48,print:0.18,echo:0.75,hush:0.4}[Y]??1,ut={fold:"transformed.z += sin(position.y*.12 + uTime*.12)*.35;",soft:"transformed.xy += position.xy * sin(uTime*.17 + worldPoint.z*.02)*.012;",echo:"transformed.xy += position.xy * sin(uTime*.34 + worldPoint.z*.04)*.018;",hush:"transformed.y += sin(worldPoint.x*.07 + uTime*.08)*.25;"}[Y]||"";if(j.customProgramCacheKey=()=>z,q)j.onBeforeCompile=(vt)=>{Object.assign(vt.uniforms,l),vt.vertexShader=`uniform float uTime; uniform vec3 uRipple; uniform float uRippleStart;
`+vt.vertexShader,vt.vertexShader=vt.vertexShader.replace("#include <fog_vertex>",`#ifdef USE_FOG
vFogDepth = length(mvPosition.xyz);
#endif`),vt.vertexShader=vt.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        vec3 worldPoint = (modelMatrix * vec4(position, 1.0)).xyz;
        float age = uTime - uRippleStart;
        float distanceToRipple = distance(worldPoint, uRipple);
        float wave = sin(distanceToRipple * .6 - age * 2.0) * exp(-abs(distanceToRipple - age * 6.0) * .2) * max(0.0, 1.0-age/12.0);
        transformed.x += sin(worldPoint.y*.11 + worldPoint.z*.04 + uTime*.24) * ${(st*0.42).toFixed(3)} + wave*.65;
        transformed.y += sin(worldPoint.x*.08 + uTime*.19) * ${(st*0.55).toFixed(3)} + wave*.45;
        transformed.z += cos(worldPoint.y*.09 + worldPoint.x*.06 + uTime*.16) * ${(st*0.35).toFixed(3)};
        ${ut}
      `)};return c.set(z,j),j}function ot(b,U,I,q=0.035,Y=!1,z=0.6,j="flow"){if(U.length<2)return;let st=Y?new Ce().setFromPoints(U):h0(U,q),ut=Y?new br(st,J(I,!0,z,!0,j)):new Ie(st,J(I,!1,1,!0,j));return b.add(ut),ut}function ct(b){b.traverse((U)=>{if(U.geometry?.dispose(),U.userData.traceMaterial)U.material.dispose()}),b.removeFromParent()}function Tt(){let b=r.position.clone().divideScalar(48).round(),U=b.toArray().join(",")+"/"+s.fog.far;if(U===R)return;R=U;let I=new Set,q=ji.map((st)=>({env:st,center:ae(...st.center.map((ut,vt)=>ut+Math.round((r.position.getComponent(vt)-ut)/240)*240))}));function Y(st,ut,vt,le,$t,ne=1){if(ut.distanceTo(r.position)>s.fog.far+80)return;if(I.add(st),d.has(st))return;let Bt=zr(le,vt,{line:ot,material:J},$t);if(Bt.position.copy(ut),Bt.scale.setScalar(ne),Bt.userData.environment=le.id,!st.startsWith("landmark/")){let Ht=Xh(vt);Bt.rotation.set((Ht()-0.5)*0.8,(Ht()-0.5)*1.4,(Ht()-0.5)*1.5),Bt.scale.y*=0.7+Ht()*0.6}s.add(Bt),d.set(st,Bt)}let z=Math.ceil((s.fog.far+80)/240);for(let{env:st,center:ut}of q)for(let vt=-z;vt<=z;vt++)for(let le=-z;le<=z;le++)for(let $t=-z;$t<=z;$t++){let ne=ut.clone().add(ae(vt*240,le*240,$t*240));Y("landmark/"+st.id+"/"+ne.toArray().join(","),ne,mi(st.id),st,null)}let j=Math.ceil((s.fog.far+80)/48);for(let st=-j;st<=j;st++)for(let ut=-j;ut<=j;ut++)for(let vt=-j;vt<=j;vt++){let le=b.x+st,$t=b.y+ut,ne=b.z+vt,Bt=[le,$t,ne].join(","),Ht=mi(Bt),He=Xh(Ht);if(He()<0.925)continue;let rn=ae(le*48+(He()-0.5)*15,$t*48+(He()-0.5)*15,ne*48+(He()-0.5)*15),an=gi(rn.toArray());if(rn.distanceTo(ae(0,0,22))<100||rn.distanceTo(ae(...an.center))<45)continue;Y(Bt,rn,Ht,an.primary,an.blend>0.35?an.neighbour:null,0.35+He()*0.15)}for(let[st,ut]of d)if(!I.has(st))ct(ut),d.delete(st)}function Lt(b){return D.get(b.id)||E.get(b.id)||Us(b)}function wt(b){let U=Lt(b),I=B.get(b.id)||ts(b);return ae(...I.center).applyQuaternion(new Ye().fromArray(U.rotation)).add(ae(...U.position))}function ge(b,U=!1,I=null){let q=new je,Y=Lt(b),z=sl(Y.environment);return q.position.fromArray(Y.position),q.quaternion.fromArray(Y.rotation),b.strokes.forEach((j,st)=>{if(j.points.length<2)return;let ut=Wh[j.ink]||Wh.ink,vt=q.children.length,le=j.points.some((ne)=>Math.abs(ne[3]??0)>0.001);if(le)q.userData.spatial=!0;let $t=j.points.map((ne,Bt)=>ae(ne[0]*0.03,-ne[1]*0.03,le?(ne[3]??0)*0.03:U?0:rl(Bt/(j.points.length-1),j.seed,z.id)));if($t.length>2)$t=new ai($t).getPoints(Math.min(350,Math.max(24,$t.length*2)));if(j.kind==="form"){let ne=new oi($t.map((Re)=>new Mt(Re.x,Re.y))),Bt=new li(ne),Ht=Bt.getAttribute("position");Bt.computeBoundingBox();let{min:He,max:rn}=Bt.boundingBox,an=Math.max(0.001,rn.x-He.x);if(le)for(let Re=0;Re<Ht.count;Re++){let es=Ht.getX(Re),ns=Ht.getY(Re),_i=$t.reduce((xi,Pn)=>(Pn.x-es)**2+(Pn.y-ns)**2<(xi.x-es)**2+(xi.y-ns)**2?Pn:xi);Ht.setZ(Re,_i.z)}else if(!U)for(let Re=0;Re<Ht.count;Re++)Ht.setZ(Re,rl((Ht.getX(Re)-He.x)/an,j.seed,z.id));Bt.computeBoundingSphere();let fn=new Ie(Bt,J(ut,!1,1,!U,z.id));fn.userData.fill=!0,q.add(fn)}else{let ne=j.kind==="ribbon"?0.19:j.kind==="thread"?0.018:z.id==="hush"?0.032:0.05;if(ot(q,$t,ut,I??ne,!1,1,z.id),!U&&z.id==="echo")for(let Bt=1;Bt<=2;Bt++)ot(q,$t.map((Ht)=>Ht.clone().multiplyScalar(1+Bt*0.035).add(ae(Bt*0.14,0,Bt*0.65))),ut,0.023,!0,0.55,z.id);if(!U&&z.id==="print"&&j.kind==="ribbon")for(let Bt=0;Bt<7;Bt++)ot(q,$t.map((Ht,He)=>Ht.clone().add(ae((Bt-3)*0.095+Math.sin(He+Bt)*0.03,0,Bt*0.08))),ut,0.018,!0,0.7,z.id);if(j.kind==="script")ot(q,$t.map((Bt,Ht)=>Bt.clone().add(ae(Math.sin(Ht*1.5)*0.12,Math.cos(Ht*1.5)*0.25,0))),ut,0.022)}for(let ne of q.children.slice(vt))if(ne.userData.order=st/b.strokes.length,ne.userData.total=ne.geometry.index?.count||ne.geometry.attributes.position.count,ne.userData.unit=ne.isLine?1:30,U)ne.material=J(ut,!1,1,!1)}),q}function Gt(b,U=!1){Xt(b.id,p.get(b.id),U)}function Xt(b,U,I){if(!U)return;if(a.matches||o.paused)return;u.set(b,{group:U,age:0,draw:I}),U.scale.z=U.userData.spatial?1:0.015;for(let q of U.children)q.scale.y=I&&q.userData.fill?0.001:1,q.geometry.setDrawRange(0,I&&!q.userData.fill?0:1/0)}function ie(b){for(let[U,I]of u){I.age+=b;let q=Mn((I.age-0.25)/2.5,0,1);I.group.scale.z=I.group.userData.spatial?1:0.015+0.985*(1-(1-q)**3);for(let Y of I.group.children){if(!I.draw)continue;let z=Mn((I.age-Y.userData.order*0.9)/1.6,0,1);if(Y.userData.fill)Y.scale.y=Math.max(0.001,1-(1-z)**3);else Y.geometry.setDrawRange(0,Math.floor(Y.userData.total*z/Y.userData.unit)*Y.userData.unit)}if(I.age>=3){I.group.scale.z=1;for(let Y of I.group.children)Y.scale.set(1,1,1),Y.geometry.setDrawRange(0,1/0);u.delete(U)}}}function Yt(b,{draw:U=!1}={}){ye(b.id);let I=ge(b,!1,0.018),q=a.matches,Y=I.position.clone().applyQuaternion(r.quaternion);if(I.quaternion.premultiply(r.quaternion),I.traverse((z)=>{if(!z.material)return;let j=z.material,st=j.clone();if(st.transparent=!0,st.userData.opacity=st.opacity,!q)st.onBeforeCompile=j.onBeforeCompile,st.customProgramCacheKey=j.customProgramCacheKey;z.material=st}),I.position.copy(r.position).add(Y),s.add(I),g.set(b.id,{group:I,offset:Y,fade:null}),U&&!q)Xt(b.id,I,!0)}function ye(b){let U=g.get(b);if(!U)return;U.group.traverse((I)=>I.material?.dispose()),ct(U.group),g.delete(b),u.delete(b)}function he(b,{fadeMs:U=2000}={}){let I=g.get(b);if(!I)return;if(a.matches||U<=0)ye(b);else I.fade??={from:performance.now(),ms:U}}function Pe(b){for(let[U,I]of g){if(I.group.position.copy(r.position).add(I.offset),!I.fade)continue;let q=1-Mn((b-I.fade.from)/I.fade.ms,0,1);if(!q){ye(U);continue}I.group.traverse((Y)=>{if(Y.material)Y.material.opacity=Y.material.userData.opacity*q})}}function ve(b){for(let{group:U}of g.values())U.visible=!1;try{return b()}finally{for(let{group:U}of g.values())U.visible=!0}}function oe(){if(S>=O){let U=o.items.filter((q)=>!et.has(q.id)&&r.position.distanceTo(wt(q))<s.fog.far),I=ol(U,null,Math.random,Z);if(I)et.set(I.id,S);O=S+8}let b=new Set;for(let U of o.items){if(!et.has(U.id))continue;let I=(B.get(U.id)||ts(U)).radius;if(U.id!==C&&r.position.distanceTo(wt(U))>s.fog.far+I+(p.has(U.id)?60:30))continue;if(b.add(U.id),p.has(U.id))continue;let q=ge(U);if(q.traverse((Y)=>{if(!Y.material)return;let z=Y.material;Y.material=z.clone(),Y.material.onBeforeCompile=z.onBeforeCompile,Y.material.customProgramCacheKey=z.customProgramCacheKey,Y.userData.traceMaterial={opacity:z.opacity,transparent:z.transparent}}),s.add(q),p.set(U.id,q),Date.now()-Date.parse(U.createdAt)<3500)Gt(U,!0)}for(let[U,I]of p)if(!b.has(U))ct(I),p.delete(U),u.delete(U);L()}function L(){for(let[b,U]of p){let I=Mn((S-et.get(b))/8,0,1),q=a.matches?1:I*I*(3-2*I);U.traverse((Y)=>{let z=Y.userData.traceMaterial;if(!z)return;let j=b===C?1:q,st=z.transparent||j<1;if(Y.material.transparent!==st)Y.material.transparent=st,Y.material.needsUpdate=!0;Y.material.opacity=z.opacity*j})}}function Le(){for(let[ut,vt]of W){if(vt.center.distanceTo(r.position)>s.fog.far+80){ct(vt.group),W.delete(ut);continue}let le=a.matches?1:Xi.smoothstep(S-vt.born,0,4);vt.group.traverse(($t)=>{let ne=$t.userData.traceMaterial;if(ne)$t.material.opacity=ne.opacity*le})}if(S-lt<0.25)return;lt=S;let b=nt([...d.values(),...p.values(),...[...W.values()].map((ut)=>ut.group)],r,s.fog);it=b.presence,at=[];for(let ut of o.items)if(b.visibleGroups.has(p.get(ut.id)))at.push({item:ut,center:wt(ut),scale:1});for(let ut of W.values())if(ut.item&&b.visibleGroups.has(ut.group))at.push({item:ut.item,center:ut.center,scale:ut.group.scale.x});if(b.occupied||o.making||h.size||w||Math.abs(T)>0.01){H=null;return}if(H??=S,S-H<5)return;if(W.size>=12){let ut=[...W].find(([,vt])=>!b.visibleGroups.has(vt.group));if(!ut)return;ct(ut[1].group),W.delete(ut[0])}let U=Q++,I=gi(r.position.toArray()).primary,q=new Set([...W.values()].map((ut)=>ut.sourceId)),Y=S>=30&&U%2?ol(o.items.filter((ut)=>!q.has(ut.id)),null,Math.random,Z):null,z=ae(0.9*Math.sin(U*2.4),0.6*Math.cos(U*1.7),-90).applyQuaternion(r.quaternion).add(r.position),j="encounter/"+U,st=Y?ge({...Y,id:j,space:{...Us(Y),position:z.toArray(),rotation:r.quaternion.toArray()}}):zr(I,mi(j+"/"+z.toArray().join(",")),{line:ot,material:J});if(st.quaternion.copy(r.quaternion),st.position.copy(z),Y){let ut=B.get(Y.id)||ts(Y),vt=Math.min(1,14/ut.radius);st.scale.setScalar(vt),st.position.sub(ae(...ut.center).multiplyScalar(vt).applyQuaternion(st.quaternion))}else st.scale.setScalar(0.65),st.userData.environment=I.id;st.userData.encounter={sourceId:Y?.id??null},st.traverse((ut)=>{if(!ut.material)return;let vt=ut.material;ut.material=vt.clone(),ut.material.onBeforeCompile=vt.onBeforeCompile,ut.material.customProgramCacheKey=vt.customProgramCacheKey,ut.userData.traceMaterial={opacity:vt.opacity,transparent:vt.transparent},ut.material.transparent=!0,ut.material.opacity=a.matches?vt.opacity:0}),s.add(st),W.set(j,{group:st,center:z,born:S,sourceId:Y?.id,item:Y}),H=null}function jt(){i.setSize(innerWidth,innerHeight,!1),r.aspect=innerWidth/innerHeight,r.updateProjectionMatrix();let b=o.items.find((U)=>U.id===C);if(b&&!o.making)V(b);else oe()}function ee(){r.rotation.set(o.pitch,o.yaw,0,"YXZ"),r.updateMatrixWorld()}function M(b,U){H=null,w=null,o.yaw-=b*0.004,o.pitch=Mn(o.pitch-U*0.004,-1.48,1.48),ee()}function _(b){if(!o.making)H=null,w=null,T=Mn(T+b,-28,28)}function P(){H=null,w=null,C=null,s.fog.near=58,s.fog.far=160,r.far=185,r.updateProjectionMatrix(),T=0,r.position.set(0,0,22),o.yaw=0,o.pitch=0,ee(),R="",Tt(),oe(),e()}function V(b){H=null,w=null,T=0,et.set(b.id,S-8);let U=Lt(b),I=new Ye().fromArray(U.rotation),q=Vh((B.get(b.id)||ts(b)).radius,r.aspect,r.fov);C=b.id,r.far=Math.max(185,q*2),r.updateProjectionMatrix(),s.fog.near=Math.max(58,q*1.25),s.fog.far=Math.max(160,q*2),r.position.copy(wt(b)).add(ae(0,0,q).applyQuaternion(I)),Ot.setFromQuaternion(I,"YXZ"),o.yaw=Ot.y,o.pitch=Ot.x,ee(),Tt(),oe()}function rt(b){H=null,C=null,s.fog.near=58,s.fog.far=160;let U=sl(b),I=ae(...U.center.map((q,Y)=>q+Math.round((r.position.getComponent(Y)-q)/240)*240)).add(ae(0,1,32));if(a.matches){r.position.copy(I),o.yaw=0,o.pitch=0,ee(),Tt(),oe();return}w={start:r.position.clone(),target:I,yaw:Math.atan2(Math.sin(o.yaw),Math.cos(o.yaw)),pitch:o.pitch,age:0},T=0}function dt(b=null){if(o.making=!0,T=0,w=null,b)m=b,V(m);else{r.getWorldDirection(It);let U=r.position.clone().addScaledVector(It,23);m={id:crypto.randomUUID(),x:U.x,y:U.z,space:{position:U.toArray(),rotation:r.quaternion.toArray(),environment:gi(r.position.toArray()).primary.id},strokes:[]}}return ft(m),m}function ft(b){m=b;for(let U of[...x.children])ct(U);if(b){let U=ge(b,!0);x.add(U)}}function K(b,U){r.updateMatrixWorld();let I=new Ji;I.setFromCamera(new Mt(b/innerWidth*2-1,-U/innerHeight*2+1),r);let q=r.getWorldDirection(ae()),Y=r.position.clone().addScaledVector(q,23);if(!m.strokes.length)m.space.position=Y.toArray(),m.space.rotation=r.quaternion.toArray(),m.x=Y.x,m.y=Y.z;let z=new Ye().fromArray(m.space.rotation),j=new Ke().setFromNormalAndCoplanarPoint(q,Y),st=I.ray.intersectPlane(j,ae());if(!st)return null;if(st.sub(ae(...m.space.position)).applyQuaternion(z.invert()),Math.max(Math.abs(st.x),Math.abs(st.y),Math.abs(st.z))>87)return null;return[st.x/0.03,-st.y/0.03,0.5,st.z/0.03]}function tt(){o.making=!1,ft(null)}function _t(b){let U=Us(b);D.set(b.id,U),et.set(b.id,S-8),C=null;let I=p.get(b.id);if(I)I.position.fromArray(U.position),I.quaternion.fromArray(U.rotation);oe()}function At(b){l.uRipple.value.fromArray(Lt(b).position),l.uRippleStart.value=o.time}function pt(b,U=Z){if(Z=U,E.size!==b.length||b.some((I)=>!E.has(I.id))){E=Hh(b),B.clear();for(let I of b)B.set(I.id,ts(I))}o.items=b,Tt(),oe()}function ht(b,U){if(U)w=null,h.add(b.toLowerCase());else h.delete(b.toLowerCase())}function Ct(){h.clear(),T=0,w=null}function Dt(b,U){let I=ve(()=>s.clone()),q=x.clone(),Y=r.clone(),z=r.position.clone(),j=new Map;for(let Bt of[I,q])Bt.traverse((Ht)=>{if(!Ht.geometry)return;if(!j.has(Ht.geometry))j.set(Ht.geometry,Ht.geometry.clone());Ht.geometry=j.get(Ht.geometry)});let st=new Or({antialias:!0,alpha:!1,powerPreference:"high-performance"});st.setSize(b,U,!1),st.setClearColor(ll),Y.aspect=b/U,Y.updateProjectionMatrix();let ut=o.time,vt=l.uRipple.value.clone(),le=l.uRippleStart.value,$t=!o.paused&&!a.matches,ne=0.65+o.speed*0.025;return{moving:$t,render(Bt){let Ht=Bh($t?Bt:0);Y.position.copy(z).add(ae(Ht.x,Ht.y,Ht.z).multiplyScalar(ne).applyQuaternion(Y.quaternion)),Y.updateMatrixWorld();let He=l.uTime.value,rn=l.uRipple.value.clone(),an=l.uRippleStart.value;l.uTime.value=ut+Ht.time,l.uRipple.value.copy(vt),l.uRippleStart.value=le;try{cl(st,I,q,Y)}finally{l.uTime.value=He,l.uRipple.value.copy(rn),l.uRippleStart.value=an}return st.domElement},dispose(){j.forEach((Bt)=>Bt.dispose()),st.dispose(),st.forceContextLoss()}}}function Jt(b){let U=(b-f)/1000,I=Math.min(U,0.04);if(f=b,!document.hidden){if(S+=U,L(),!o.paused)o.time+=I;if(l.uTime.value=o.time,!o.paused)ie(I);if(!o.making&&w){w.age+=I;let q=Mn(w.age/4,0,1),Y=q*q*(3-2*q),z=r.position.clone();if(r.position.lerpVectors(w.start,w.target,Y),o.yaw=w.yaw*(1-Y),o.pitch=w.pitch*(1-Y),o.travel+=z.distanceTo(r.position),ee(),Tt(),oe(),q===1)w=null}else{let q=I*0.9;if(h.has("arrowleft"))o.yaw+=q;if(h.has("arrowright"))o.yaw-=q;if(h.has("arrowup"))o.pitch=Mn(o.pitch+q,-1.48,1.48);if(h.has("arrowdown"))o.pitch=Mn(o.pitch-q,-1.48,1.48);ee(),r.getWorldDirection(It),Pt.set(1,0,0).applyQuaternion(r.quaternion),Kt.set(0,0,0);let Y=o.paused?0:o.speed**1.6*0.008,z=4+o.speed*0.07;Kt.addScaledVector(It,Y+(h.has("w")?z:0)-(h.has("s")?z+Y:0)),Kt.addScaledVector(Pt,(Number(h.has("d"))-Number(h.has("a")))*z),Kt.y+=(Number(h.has("e"))-Number(h.has("q")))*z;let j=T*(a.matches?1:1-Math.exp(-I*18));if(T-=j,Math.abs(T)<0.0001)T=0;if(Kt.multiplyScalar(I).addScaledVector(It,j),r.position.add(Kt),o.travel+=Kt.length(),r.position.clampScalar(-49000,49000),Tt(),b-A>600)oe(),A=b}if(Le(),Pe(b),cl(i,s,x,r),++v%8===0)o.environment=gi(r.position.toArray()).primary,n({yaw:o.yaw,position:r.position,travel:o.travel,environment:o.environment})}requestAnimationFrame(Jt)}return addEventListener("resize",jt),addEventListener("blur",Ct),document.addEventListener("visibilitychange",()=>{Ct(),f=performance.now()}),a.addEventListener("change",(b)=>{if(b.matches)o.paused=!0,o.speed=0;e()}),jt(),ee(),Tt(),requestAnimationFrame(Jt),{state:o,camera:r,renderer:i,placement:Lt,centerOf:wt,look:M,dolly:_,goHome:P,goTo:V,visitEnvironment:rt,beginDrawing:dt,showDraft:ft,drawingPoint:K,finishDrawing:tt,releaseHere:_t,ripple:At,setItems:pt,setKey:ht,stopKeys:Ct,unfold:Gt,ghost:Yt,dismissGhost:he,captureCanvas(){return ve(()=>cl(i,s,x,r)),t},createLoopCapture:Dt,get presence(){return it},get audibleTraces(){return at},turnAround(){H=null,w=null,o.yaw+=Math.PI,o.pitch=-o.pitch,ee()},get stats(){return{regions:d.size,traces:p.size,encounters:W.size,encountersCreated:Q,geometries:i.info.memory.geometries}}}}export{Wh as PALETTE,uy as createWorld,hy as wheelTravel};
