var Dl="186";var Ul=0,ea=1,Fl=2;var Ji=1,Ol=2,bi=3,Ei=0,Fe=1,qe=2,ln=0,$i=1,na=2,ia=3,sa=4,Bl=5;var Ti=100,zl=101,kl=102,Gl=103,Hl=104,Vl=200,Wl=201,Xl=202,ql=203,Yl=204,Zl=205,Jl=206,$l=207,Kl=208,Ql=209,jl=210,tc=211,ec=212,nc=213,ic=214,sc=0,rc=1,ac=2,ra=3,oc=4,lc=5,cc=6,hc=7,uc=0,dc=1,fc=2,en=0,aa=1,oa=2,la=3,ca=4,ha=5,ua=6,da=7;var wi=301,Gn=302,Gs=303,Hs=304,Ki=306,pc=1000,Vs=1001,mc=1002,Pn=1003,gc=1004;var Qi=1005;var Oe=1006,Ws=1007;var Hn=1008;var nn=1009,_c=1010,xc=1011,ji=1012,fa=1013,Ln=1014,Sn=1015,cn=1016,pa=1017,ma=1018,Ai=1020,vc=35902,yc=35899,Sc=1021,Mc=1022,hn=1023,Vn=1026,Wn=1027,bc=1028,ga=1029,Xn=1030,_a=1031;var xa=1033,Xs=33776,qs=33777,Ys=33778,Zs=33779,va=35840,ya=35841,Sa=35842,Ma=35843,ba=36196,Ea=37492,Ta=37496,wa=37488,Aa=37489,Js=37490,Ra=37491,Ca=37808,Ia=37809,Pa=37810,La=37811,Na=37812,Da=37813,Ua=37814,Fa=37815,Oa=37816,Ba=37817,za=37818,ka=37819,Ga=37820,Ha=37821,Va=36492,Wa=36494,Xa=36495,qa=36283,Ya=36284,$s=36285,Za=36286;var Ja=0,Ec=1,qn="",Tc="srgb",$a="srgb-linear",Ka="linear",ce="srgb";var wc=512,Ac=513,Rc=514,Ks=515,Cc=516,Ic=517,Qs=518,Pc=519;var Qa="300 es",ja=2000;function Oh(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Bh(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Xi(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Lc(){let t=Xi("canvas");return t.style.display="block",t}var sl={},Si=null;function to(...t){let e="THREE."+t.shift();if(Si)Si("log",e,...t);else console.log(e,...t)}function Nc(t){let e=t[0];if(typeof e==="string"&&e.startsWith("TSL:")){let n=t[1];if(n&&n.isStackTrace)t[0]+=" "+n.getLocation();else t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ot(...t){t=Nc(t);let e="THREE."+t.shift();if(Si)Si("warn",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.warn(n.getError(e));else console.warn(e,...t)}}function Bt(...t){t=Nc(t);let e="THREE."+t.shift();if(Si)Si("error",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.error(n.getError(e));else console.error(e,...t)}}function zn(...t){let e=t.join(" ");if(e in sl)return;sl[e]=!0,Ot(...t)}function Dc(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var Uc={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class Mn{addEventListener(t,e){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[t]===void 0)n[t]=[];if(n[t].indexOf(e)===-1)n[t].push(e)}hasEventListener(t,e){let n=this._listeners;if(n===void 0)return!1;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);if(s!==-1)i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}var Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var wr=Math.PI/180,Os=180/Math.PI;function Ri(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Re[t&255]+Re[t>>8&255]+Re[t>>16&255]+Re[t>>24&255]+"-"+Re[e&255]+Re[e>>8&255]+"-"+Re[e>>16&15|64]+Re[e>>24&255]+"-"+Re[n&63|128]+Re[n>>8&255]+"-"+Re[n>>16&255]+Re[n>>24&255]+Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]).toLowerCase()}function $t(t,e,n){return Math.max(e,Math.min(n,t))}function zh(t,e){return(t%e+e)%e}function Ar(t,e,n){return(1-n)*t+n*e}function Fi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function Ue(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}class bt{static{bt.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let o=n[i+0],l=n[i+1],c=n[i+2],u=n[i+3],p=s[r+0],h=s[r+1],d=s[r+2],_=s[r+3];if(u!==_||o!==p||l!==h||c!==d){let y=o*p+l*h+c*d+u*_;if(y<0)p=-p,h=-h,d=-d,_=-_,y=-y;let m=1-a;if(y<0.9995){let f=Math.acos(y),w=Math.sin(f);m=Math.sin(m*f)/w,a=Math.sin(a*f)/w,o=o*m+p*a,l=l*m+h*a,c=c*m+d*a,u=u*m+_*a}else{o=o*m+p*a,l=l*m+h*a,c=c*m+d*a,u=u*m+_*a;let f=1/Math.sqrt(o*o+l*l+c*c+u*u);o*=f,l*=f,c*=f,u*=f}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,r){let a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],u=s[r],p=s[r+1],h=s[r+2],d=s[r+3];return t[e]=a*d+c*u+o*h-l*p,t[e+1]=o*d+c*p+l*u-a*h,t[e+2]=l*d+c*h+a*p-o*u,t[e+3]=c*d-a*u-o*p-l*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let{_x:n,_y:i,_z:s,_order:r}=t,{cos:a,sin:o}=Math,l=a(n/2),c=a(i/2),u=a(s/2),p=o(n/2),h=o(i/2),d=o(s/2);switch(r){case"XYZ":this._x=p*c*u+l*h*d,this._y=l*h*u-p*c*d,this._z=l*c*d+p*h*u,this._w=l*c*u-p*h*d;break;case"YXZ":this._x=p*c*u+l*h*d,this._y=l*h*u-p*c*d,this._z=l*c*d-p*h*u,this._w=l*c*u+p*h*d;break;case"ZXY":this._x=p*c*u-l*h*d,this._y=l*h*u+p*c*d,this._z=l*c*d+p*h*u,this._w=l*c*u-p*h*d;break;case"ZYX":this._x=p*c*u-l*h*d,this._y=l*h*u+p*c*d,this._z=l*c*d-p*h*u,this._w=l*c*u+p*h*d;break;case"YZX":this._x=p*c*u+l*h*d,this._y=l*h*u+p*c*d,this._z=l*c*d-p*h*u,this._w=l*c*u-p*h*d;break;case"XZY":this._x=p*c*u-l*h*d,this._y=l*h*u-p*c*d,this._z=l*c*d+p*h*u,this._w=l*c*u+p*h*d;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(e===!0)this._onChangeCallback();return this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10],p=n+a+u;if(p>0){let h=0.5/Math.sqrt(p+1);this._w=0.25/h,this._x=(c-o)*h,this._y=(s-l)*h,this._z=(r-i)*h}else if(n>a&&n>u){let h=2*Math.sqrt(1+n-a-u);this._w=(c-o)/h,this._x=0.25*h,this._y=(i+r)/h,this._z=(s+l)/h}else if(a>u){let h=2*Math.sqrt(1+a-n-u);this._w=(s-l)/h,this._x=(i+r)/h,this._y=0.25*h,this._z=(o+c)/h}else{let h=2*Math.sqrt(1+u-n-a);this._w=(r-i)/h,this._x=(s+l)/h,this._y=(o+c)/h,this._z=0.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;if(n<0.00000001)if(n=0,Math.abs(t.x)>Math.abs(t.z))this._x=-t.y,this._y=t.x,this._z=0,this._w=n;else this._x=0,this._y=-t.z,this._z=t.y,this._w=n;else this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n;return this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();if(t===0)this._x=0,this._y=0,this._z=0,this._w=1;else t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t;return this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,{_x:a,_y:o,_z:l,_w:c}=e;return this._x=n*c+r*a+i*l-s*o,this._y=i*c+r*o+s*a-n*l,this._z=s*c+r*l+n*o-i*a,this._w=r*c-n*a-i*o-s*l,this._onChangeCallback(),this}slerp(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,a=this.dot(t);if(a<0)n=-n,i=-i,s=-s,r=-r,a=-a;let o=1-e;if(a<0.9995){let l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,e=Math.sin(e*l)/c,this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{static{U.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){if(n===void 0)n=this.z;return this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,{x:s,y:r,z:a,w:o}=t,l=2*(r*i-a*n),c=2*(a*e-s*i),u=2*(s*n-r*e);return this.x=e+o*l+r*u-a*c,this.y=n+o*c+a*l-s*u,this.z=i+o*u+s*c-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let{x:n,y:i,z:s}=t,{x:r,y:a,z:o}=e;return this.x=i*o-s*a,this.y=s*r-n*o,this.z=n*a-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Rr.copy(this).projectOnVector(t),this.sub(Rr)}reflect(t){return this.sub(Rr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Rr=new U,rl=new Ye;class Gt{static{Gt.prototype.isMatrix3=!0}constructor(t,e,n,i,s,r,a,o,l){if(this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l)}set(t,e,n,i,s,r,a,o,l){let c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=s,c[5]=o,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],o=n[6],l=n[1],c=n[4],u=n[7],p=n[2],h=n[5],d=n[8],_=i[0],y=i[3],m=i[6],f=i[1],w=i[4],T=i[7],v=i[2],E=i[5],A=i[8];return s[0]=r*_+a*f+o*v,s[3]=r*y+a*w+o*E,s[6]=r*m+a*T+o*A,s[1]=l*_+c*f+u*v,s[4]=l*y+c*w+u*E,s[7]=l*m+c*T+u*A,s[2]=p*_+h*f+d*v,s[5]=p*y+h*w+d*E,s[8]=p*m+h*T+d*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8];return e*r*c-e*a*l-n*s*c+n*a*o+i*s*l-i*r*o}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],u=c*r-a*l,p=a*o-c*s,h=l*s-r*o,d=e*u+n*p+i*h;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/d;return t[0]=u*_,t[1]=(i*l-c*n)*_,t[2]=(a*n-i*r)*_,t[3]=p*_,t[4]=(c*e-i*o)*_,t[5]=(i*s-a*e)*_,t[6]=h*_,t[7]=(n*o-l*e)*_,t[8]=(r*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){let o=Math.cos(s),l=Math.sin(s);return this.set(n*o,n*l,-n*(o*r+l*a)+r+t,-i*l,i*o,-i*(-l*r+o*a)+a+e,0,0,1),this}scale(t,e){return zn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Cr.makeScale(t,e)),this}rotate(t){return zn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Cr.makeRotation(-t)),this}translate(t,e){return zn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Cr.makeTranslation(t,e)),this}makeTranslation(t,e){if(t.isVector2)this.set(1,0,t.x,0,1,t.y,0,0,1);else this.set(1,0,t,0,1,e,0,0,1);return this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}var Cr=new Gt,al=new Gt().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),ol=new Gt().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function kh(){let t={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(s,r,a){if(this.enabled===!1||r===a||!r||!a)return s;if(this.spaces[r].transfer==="srgb")s.r=yn(s.r),s.g=yn(s.g),s.b=yn(s.b);if(this.spaces[r].primaries!==this.spaces[a].primaries)s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ);if(this.spaces[a].transfer==="srgb")s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b);return s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){if(s==="")return"linear";return this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return zn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return zn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],i=[0.3127,0.329];return t.define({["srgb-linear"]:{primaries:e,whitePoint:i,transfer:"linear",toXYZ:al,fromXYZ:ol,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:e,whitePoint:i,transfer:"srgb",toXYZ:al,fromXYZ:ol,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),t}var Qt=kh();function yn(t){return t<0.04045?t*0.0773993808:Math.pow(t*0.9478672986+0.0521327014,2.4)}function vi(t){return t<0.0031308?t*12.92:1.055*Math.pow(t,0.41666)-0.055}var ai;class eo{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src))return t.src;if(typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{if(ai===void 0)ai=Xi("canvas");ai.width=t.width,ai.height=t.height;let i=ai.getContext("2d");if(t instanceof ImageData)i.putImageData(t,0,0);else i.drawImage(t,0,0,t.width,t.height);n=ai}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Xi("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=yn(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)e[n]=Math.floor(yn(e[n]/255)*255);else e[n]=yn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}var Gh=0;class ts{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=Ri(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)t.set(e.videoWidth,e.videoHeight,0);else if(typeof VideoFrame<"u"&&e instanceof VideoFrame)t.set(e.displayWidth,e.displayHeight,0);else if(e!==null)t.set(e.width,e.height,e.depth||0);else t.set(0,0,0);return t}set needsUpdate(t){if(t===!0)this.version++}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)if(i[r].isDataTexture)s.push(Ir(i[r].image));else s.push(Ir(i[r]))}else s=Ir(i);n.url=s}if(!e)t.images[this.uuid]=n;return n}}function Ir(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap)return eo.getDataURL(t);else if(t.data)return{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name};else return Ot("Texture: Unable to serialize Texture."),{}}var Hh=0,Pr=new U;class Ie extends Mn{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,a=1023,o=1009,l=Ie.DEFAULT_ANISOTROPY,c=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=Ri(),this.name="",this.source=new ts(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=t&&t.depth&&t.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Pr).x}get height(){return this.source.getSize(Pr).y}get depth(){return this.source.getSize(Pr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ot(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Ot(`Texture.setValues(): property '${e}' does not exist.`);continue}if(i&&n&&(i.isVector2&&n.isVector2))i.copy(n);else if(i&&n&&(i.isVector3&&n.isVector3))i.copy(n);else if(i&&n&&(i.isMatrix3&&n.isMatrix3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!e)t.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1000:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.x)%2)===1)t.x=Math.ceil(t.x)-t.x;else t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1000:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.y)%2)===1)t.y=Math.ceil(t.y)-t.y;else t.y=t.y-Math.floor(t.y);break}if(this.flipY)t.y=1-t.y;return t}set needsUpdate(t){if(t===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(t){if(t===!0)this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=300;Ie.DEFAULT_ANISOTROPY=1;class ge{static{ge.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);if(e<0.0001)this.x=1,this.y=0,this.z=0;else this.x=t.x/e,this.y=t.y/e,this.z=t.z/e;return this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,r=0.01,a=0.1,o=t.elements,l=o[0],c=o[4],u=o[8],p=o[1],h=o[5],d=o[9],_=o[2],y=o[6],m=o[10];if(Math.abs(c-p)<0.01&&Math.abs(u-_)<0.01&&Math.abs(d-y)<0.01){if(Math.abs(c+p)<0.1&&Math.abs(u+_)<0.1&&Math.abs(d+y)<0.1&&Math.abs(l+h+m-3)<0.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(l+1)/2,T=(h+1)/2,v=(m+1)/2,E=(c+p)/4,A=(u+_)/4,I=(d+y)/4;if(w>T&&w>v)if(w<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(w),i=E/n,s=A/n;else if(T>v)if(T<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(T),n=E/i,s=I/i;else if(v<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(v),n=A/s,i=I/s;return this.set(n,i,s,e),this}let f=Math.sqrt((y-d)*(y-d)+(u-_)*(u-_)+(p-c)*(p-c));if(Math.abs(f)<0.001)f=1;return this.x=(y-d)/f,this.y=(u-_)/f,this.z=(p-c)/f,this.w=Math.acos((l+h+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class no extends Mn{constructor(t=1,e=1,n={}){super();n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new Ie(i),r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(t.mapping!==void 0)e.mapping=t.mapping;if(t.wrapS!==void 0)e.wrapS=t.wrapS;if(t.wrapT!==void 0)e.wrapT=t.wrapT;if(t.wrapR!==void 0)e.wrapR=t.wrapR;if(t.magFilter!==void 0)e.magFilter=t.magFilter;if(t.minFilter!==void 0)e.minFilter=t.minFilter;if(t.format!==void 0)e.format=t.format;if(t.type!==void 0)e.type=t.type;if(t.anisotropy!==void 0)e.anisotropy=t.anisotropy;if(t.colorSpace!==void 0)e.colorSpace=t.colorSpace;if(t.flipY!==void 0)e.flipY=t.flipY;if(t.generateMipmaps!==void 0)e.generateMipmaps=t.generateMipmaps;if(t.internalFormat!==void 0)e.internalFormat=t.internalFormat;for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(t!==null&&t.renderTarget===null)t.renderTarget=this;this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)if(this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0)this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new ts(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ge extends no{constructor(t=1,e=1,n={}){super(t,e,n);this.isWebGLRenderTarget=!0}}class js extends Ie{constructor(t=null,e=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class io extends Ie{constructor(t=null,e=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class fe{static{fe.prototype.isMatrix4=!0}constructor(t,e,n,i,s,r,a,o,l,c,u,p,h,d,_,y){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l,c,u,p,h,d,_,y)}set(t,e,n,i,s,r,a,o,l,c,u,p,h,d,_,y){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=r,m[9]=a,m[13]=o,m[2]=l,m[6]=c,m[10]=u,m[14]=p,m[3]=h,m[7]=d,m[11]=_,m[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){if(this.determinantAffine()===0)return t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this;return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/oi.setFromMatrixColumn(t,0).length(),s=1/oi.setFromMatrixColumn(t,1).length(),r=1/oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,{x:n,y:i,z:s}=t,r=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let p=r*c,h=r*u,d=a*c,_=a*u;e[0]=o*c,e[4]=-o*u,e[8]=l,e[1]=h+d*l,e[5]=p-_*l,e[9]=-a*o,e[2]=_-p*l,e[6]=d+h*l,e[10]=r*o}else if(t.order==="YXZ"){let p=o*c,h=o*u,d=l*c,_=l*u;e[0]=p+_*a,e[4]=d*a-h,e[8]=r*l,e[1]=r*u,e[5]=r*c,e[9]=-a,e[2]=h*a-d,e[6]=_+p*a,e[10]=r*o}else if(t.order==="ZXY"){let p=o*c,h=o*u,d=l*c,_=l*u;e[0]=p-_*a,e[4]=-r*u,e[8]=d+h*a,e[1]=h+d*a,e[5]=r*c,e[9]=_-p*a,e[2]=-r*l,e[6]=a,e[10]=r*o}else if(t.order==="ZYX"){let p=r*c,h=r*u,d=a*c,_=a*u;e[0]=o*c,e[4]=d*l-h,e[8]=p*l+_,e[1]=o*u,e[5]=_*l+p,e[9]=h*l-d,e[2]=-l,e[6]=a*o,e[10]=r*o}else if(t.order==="YZX"){let p=r*o,h=r*l,d=a*o,_=a*l;e[0]=o*c,e[4]=_-p*u,e[8]=d*u+h,e[1]=u,e[5]=r*c,e[9]=-a*c,e[2]=-l*c,e[6]=h*u+d,e[10]=p-_*u}else if(t.order==="XZY"){let p=r*o,h=r*l,d=a*o,_=a*l;e[0]=o*c,e[4]=-u,e[8]=l*c,e[1]=p*u+_,e[5]=r*c,e[9]=h*u-d,e[2]=d*u-h,e[6]=a*c,e[10]=_*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vh,t,Wh)}lookAt(t,e,n){let i=this.elements;if(Be.subVectors(t,e),Be.lengthSq()===0)Be.z=1;if(Be.normalize(),wn.crossVectors(n,Be),wn.lengthSq()===0){if(Math.abs(n.z)===1)Be.x+=0.0001;else Be.z+=0.0001;Be.normalize(),wn.crossVectors(n,Be)}return wn.normalize(),ps.crossVectors(Be,wn),i[0]=wn.x,i[4]=ps.x,i[8]=Be.x,i[1]=wn.y,i[5]=ps.y,i[9]=Be.y,i[2]=wn.z,i[6]=ps.z,i[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],o=n[8],l=n[12],c=n[1],u=n[5],p=n[9],h=n[13],d=n[2],_=n[6],y=n[10],m=n[14],f=n[3],w=n[7],T=n[11],v=n[15],E=i[0],A=i[4],I=i[8],S=i[12],b=i[1],H=i[5],D=i[9],F=i[13],Q=i[2],P=i[6],V=i[10],K=i[14],k=i[3],st=i[7],X=i[11],J=i[15];return s[0]=r*E+a*b+o*Q+l*k,s[4]=r*A+a*H+o*P+l*st,s[8]=r*I+a*D+o*V+l*X,s[12]=r*S+a*F+o*K+l*J,s[1]=c*E+u*b+p*Q+h*k,s[5]=c*A+u*H+p*P+h*st,s[9]=c*I+u*D+p*V+h*X,s[13]=c*S+u*F+p*K+h*J,s[2]=d*E+_*b+y*Q+m*k,s[6]=d*A+_*H+y*P+m*st,s[10]=d*I+_*D+y*V+m*X,s[14]=d*S+_*F+y*K+m*J,s[3]=f*E+w*b+T*Q+v*k,s[7]=f*A+w*H+T*P+v*st,s[11]=f*I+w*D+T*V+v*X,s[15]=f*S+w*F+T*K+v*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],o=t[9],l=t[13],c=t[2],u=t[6],p=t[10],h=t[14],d=t[3],_=t[7],y=t[11],m=t[15],f=o*h-l*p,w=a*h-l*u,T=a*p-o*u,v=r*h-l*c,E=r*p-o*c,A=r*u-a*c;return e*(_*f-y*w+m*T)-n*(d*f-y*v+m*E)+i*(d*w-_*v+m*A)-s*(d*T-_*E+y*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],r=t[5],a=t[9],o=t[2],l=t[6],c=t[10];return e*(r*c-a*l)-n*(s*c-a*o)+i*(s*l-r*o)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;if(t.isVector3)i[12]=t.x,i[13]=t.y,i[14]=t.z;else i[12]=t,i[13]=e,i[14]=n;return this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],u=t[9],p=t[10],h=t[11],d=t[12],_=t[13],y=t[14],m=t[15],f=e*a-n*r,w=e*o-i*r,T=e*l-s*r,v=n*o-i*a,E=n*l-s*a,A=i*l-s*o,I=c*_-u*d,S=c*y-p*d,b=c*m-h*d,H=u*y-p*_,D=u*m-h*_,F=p*m-h*y,Q=f*F-w*D+T*H+v*b-E*S+A*I;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/Q;return t[0]=(a*F-o*D+l*H)*P,t[1]=(i*D-n*F-s*H)*P,t[2]=(_*A-y*E+m*v)*P,t[3]=(p*E-u*A-h*v)*P,t[4]=(o*b-r*F-l*S)*P,t[5]=(e*F-i*b+s*S)*P,t[6]=(y*T-d*A-m*w)*P,t[7]=(c*A-p*T+h*w)*P,t[8]=(r*D-a*b+l*I)*P,t[9]=(n*b-e*D-s*I)*P,t[10]=(d*E-_*T+m*f)*P,t[11]=(u*T-c*E-h*f)*P,t[12]=(a*S-r*H-o*I)*P,t[13]=(e*H-n*S+i*I)*P,t[14]=(_*w-d*v-y*f)*P,t[15]=(c*v-u*w+p*f)*P,this}scale(t){let e=this.elements,{x:n,y:i,z:s}=t;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){if(t.isVector3)this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1);else this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1);return this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,{x:r,y:a,z:o}=t,l=s*r,c=s*a;return this.set(l*r+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*r,0,l*o-i*a,c*o+i*r,s*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,{_x:s,_y:r,_z:a,_w:o}=e,l=s+s,c=r+r,u=a+a,p=s*l,h=s*c,d=s*u,_=r*c,y=r*u,m=a*u,f=o*l,w=o*c,T=o*u,{x:v,y:E,z:A}=n;return i[0]=(1-(_+m))*v,i[1]=(h+T)*v,i[2]=(d-w)*v,i[3]=0,i[4]=(h-T)*E,i[5]=(1-(p+m))*E,i[6]=(y+f)*E,i[7]=0,i[8]=(d+w)*A,i[9]=(y-f)*A,i[10]=(1-(p+_))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let r=oi.set(i[0],i[1],i[2]).length(),a=oi.set(i[4],i[5],i[6]).length(),o=oi.set(i[8],i[9],i[10]).length();if(s<0)r=-r;Ke.copy(this);let l=1/r,c=1/a,u=1/o;return Ke.elements[0]*=l,Ke.elements[1]*=l,Ke.elements[2]*=l,Ke.elements[4]*=c,Ke.elements[5]*=c,Ke.elements[6]*=c,Ke.elements[8]*=u,Ke.elements[9]*=u,Ke.elements[10]*=u,e.setFromRotationMatrix(Ke),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2*s/(e-t),u=2*s/(n-i),p=(e+t)/(e-t),h=(n+i)/(n-i),d,_;if(o)d=s/(r-s),_=r*s/(r-s);else if(a===2000)d=-(r+s)/(r-s),_=-2*r*s/(r-s);else if(a===2001)d=-r/(r-s),_=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2/(e-t),u=2/(n-i),p=-(e+t)/(e-t),h=-(n+i)/(n-i),d,_;if(o)d=1/(r-s),_=r/(r-s);else if(a===2000)d=-2/(r-s),_=-(r+s)/(r-s);else if(a===2001)d=-1/(r-s),_=-s/(r-s);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=u,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}var oi=new U,Ke=new fe,Vh=new U(0,0,0),Wh=new U(1,1,1),wn=new U,ps=new U,Be=new U,ll=new fe,cl=new Ye;class on{constructor(t=0,e=0,n=0,i=on.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],r=i[4],a=i[8],o=i[1],l=i[5],c=i[9],u=i[2],p=i[6],h=i[10];switch(e){case"XYZ":if(this._y=Math.asin($t(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,h),this._z=Math.atan2(-r,s);else this._x=Math.atan2(p,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-$t(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(a,h),this._z=Math.atan2(o,l);else this._y=Math.atan2(-u,s),this._z=0;break;case"ZXY":if(this._x=Math.asin($t(p,-1,1)),Math.abs(p)<0.9999999)this._y=Math.atan2(-u,h),this._z=Math.atan2(-r,l);else this._y=0,this._z=Math.atan2(o,s);break;case"ZYX":if(this._y=Math.asin(-$t(u,-1,1)),Math.abs(u)<0.9999999)this._x=Math.atan2(p,h),this._z=Math.atan2(o,s);else this._x=0,this._z=Math.atan2(-r,l);break;case"YZX":if(this._z=Math.asin($t(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,s);else this._x=0,this._y=Math.atan2(a,h);break;case"XZY":if(this._z=Math.asin(-$t(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(p,l),this._y=Math.atan2(a,s);else this._x=Math.atan2(-c,h),this._y=0;break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}if(this._order=e,n===!0)this._onChangeCallback();return this}setFromQuaternion(t,e,n){return ll.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ll,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cl.setFromEuler(this),this.setFromQuaternion(cl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){if(this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0)this._order=t[3];return this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class es{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}var Xh=0,hl=new U,li=new Ye,mn=new fe,ms=new U,Oi=new U,qh=new U,Yh=new Ye,ul=new U(1,0,0),dl=new U(0,1,0),fl=new U(0,0,1),pl={type:"added"},Zh={type:"removed"},ci={type:"childadded",child:null},Lr={type:"childremoved",child:null};class De extends Mn{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();let t=new U,e=new on,n=new Ye,i=new U(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new fe},normalMatrix:{value:new Gt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return li.setFromAxisAngle(t,e),this.quaternion.multiply(li),this}rotateOnWorldAxis(t,e){return li.setFromAxisAngle(t,e),this.quaternion.premultiply(li),this}rotateX(t){return this.rotateOnAxis(ul,t)}rotateY(t){return this.rotateOnAxis(dl,t)}rotateZ(t){return this.rotateOnAxis(fl,t)}translateOnAxis(t,e){return hl.copy(t).applyQuaternion(this.quaternion),this.position.add(hl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ul,t)}translateY(t){return this.translateOnAxis(dl,t)}translateZ(t){return this.translateOnAxis(fl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){if(t.isVector3)ms.copy(t);else ms.set(t,e,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),Oi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)mn.lookAt(Oi,ms,this.up);else mn.lookAt(ms,Oi,this.up);if(this.quaternion.setFromRotationMatrix(mn),i)mn.extractRotation(i.matrixWorld),li.setFromRotationMatrix(mn),this.quaternion.premultiply(li.invert())}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}if(t===this)return Bt("Object3D.add: object can't be added as a child of itself.",t),this;if(t&&t.isObject3D)t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pl),ci.child=t,this.dispatchEvent(ci),ci.child=null;else Bt("Object3D.add: object not an instance of THREE.Object3D.",t);return this}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);if(e!==-1)t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zh),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null;return this}removeFromParent(){let t=this.parent;if(t!==null)t.remove(this);return this}clear(){return this.remove(...this.children)}attach(t){if(this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null)t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld);return t.applyMatrix4(mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pl),ci.child=t,this.dispatchEvent(ci),ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}return}getObjectsByProperty(t,e,n=[]){if(this[t]===e)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,t,qh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,Yh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;if(e!==null)t(e),e.traverseAncestors(t)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let{x:e,y:n,z:i}=t,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||t){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,t=!0}let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null)i.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||n){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,n=!0}if(e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t==="string",n={};if(e)t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null)i.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)i.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map((a)=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map((a)=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null)i.colorsTexture=this._colorsTexture.toJSON(t);if(this.boundingSphere!==null)i.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)i.boundingBox=this.boundingBox.toJSON()}function s(a,o){if(a[o.uuid]===void 0)a[o.uuid]=o.toJSON(t);return o.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(t).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(t).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){let u=o[l];s(t.shapes,u)}else s(t.shapes,o)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(s(t.materials,this.material[o]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(s(t.animations,o))}}if(e){let a=r(t.geometries),o=r(t.materials),l=r(t.textures),c=r(t.images),u=r(t.shapes),p=r(t.skeletons),h=r(t.animations),d=r(t.nodes);if(a.length>0)n.geometries=a;if(o.length>0)n.materials=o;if(l.length>0)n.textures=l;if(c.length>0)n.images=c;if(u.length>0)n.shapes=u;if(p.length>0)n.skeletons=p;if(h.length>0)n.animations=h;if(d.length>0)n.nodes=d}return n.object=i,n;function r(a){let o=[];for(let l in a){let c=a[l];delete c.metadata,o.push(c)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}De.DEFAULT_UP=new U(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ke extends De{constructor(){super();this.isGroup=!0,this.type="Group"}}var Jh={type:"move"};class ns{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(t){if(this._targetRay!==null)this._targetRay.dispatchEvent(t);if(this._grip!==null)this._grip.dispatchEvent(t);if(this._hand!==null)this._hand.dispatchEvent(t);return this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){if(this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(t,e,n){let i=null,s=null,r=null,a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let _ of t.hand.values()){let y=e.getJointPose(_,n),m=this._getHandJoint(l,_);if(y!==null)m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=y.radius;m.visible=y!==null}let c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=c.position.distanceTo(u.position),h=0.02,d=0.005;if(l.inputState.pinching&&p>h+d)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this});else if(!l.inputState.pinching&&p<=h-d)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this})}else if(o!==null&&t.gripSpace){if(s=e.getPose(t.gripSpace,n),s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=!1;if(s.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=!1;if(o.eventsEnabled)o.dispatchEvent({type:"gripUpdated",data:t,target:this})}}if(a!==null){if(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity);else a.hasLinearVelocity=!1;if(i.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity);else a.hasAngularVelocity=!1;this.dispatchEvent(Jh)}}}if(a!==null)a.visible=i!==null;if(o!==null)o.visible=s!==null;if(l!==null)l.visible=r!==null;return this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ke;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}var Fc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},gs={h:0,s:0,l:0};function Nr(t,e,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return t+(e-t)*6*n;if(n<0.5)return e;if(n<0.6666666666666666)return t+(e-t)*6*(0.6666666666666666-n);return t}class jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e="srgb"){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Qt.workingColorSpace){if(t=zh(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=Nr(r,s,t+0.3333333333333333),this.g=Nr(r,s,t),this.b=Nr(r,s,t-0.3333333333333333)}return Qt.colorSpaceToWorking(this,i),this}setStyle(t,e="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)Ot("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Ot("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);else if(r===6)return this.setHex(parseInt(s,16),e);else Ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e="srgb"){let n=Fc[t.toLowerCase()];if(n!==void 0)this.setHex(n,e);else Ot("Color: Unknown color "+t);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yn(t.r),this.g=yn(t.g),this.b=yn(t.b),this}copyLinearToSRGB(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t="srgb"){return Qt.workingToColorSpace(Ce.copy(this),t),Math.round($t(Ce.r*255,0,255))*65536+Math.round($t(Ce.g*255,0,255))*256+Math.round($t(Ce.b*255,0,255))}getHexString(t="srgb"){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(Ce.copy(this),e);let{r:n,g:i,b:s}=Ce,r=Math.max(n,i,s),a=Math.min(n,i,s),o,l,c=(a+r)/2;if(a===r)o=0,l=0;else{let u=r-a;switch(l=c<=0.5?u/(r+a):u/(2-r-a),r){case n:o=(i-s)/u+(i<s?6:0);break;case i:o=(s-n)/u+2;break;case s:o=(n-i)/u+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t="srgb"){Qt.workingToColorSpace(Ce.copy(this),t);let{r:e,g:n,b:i}=Ce;if(t!=="srgb")return`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(An),this.setHSL(An.h+t,An.s+e,An.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(An),t.getHSL(gs);let n=Ar(An.h,gs.h,e),i=Ar(An.s,gs.s,e),s=Ar(An.l,gs.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Ce=new jt;jt.NAMES=Fc;class is{constructor(t,e=1,n=1000){this.isFog=!0,this.name="",this.color=new jt(t),this.near=e,this.far=n}clone(){return new is(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class tr extends De{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){if(super.copy(t,e),t.background!==null)this.background=t.background.clone();if(t.environment!==null)this.environment=t.environment.clone();if(t.fog!==null)this.fog=t.fog.clone();if(this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null)this.overrideMaterial=t.overrideMaterial.clone();return this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);if(this.fog!==null)e.object.fog=this.fog.toJSON();return e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}var Qe=new U,gn=new U,Dr=new U,_n=new U,hi=new U,ui=new U,ml=new U,Ur=new U,Fr=new U,Or=new U,Br=new ge,zr=new ge,kr=new ge;class Xe{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Qe.subVectors(t,e),i.cross(Qe);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Qe.subVectors(i,e),gn.subVectors(n,e),Dr.subVectors(t,e);let r=Qe.dot(Qe),a=Qe.dot(gn),o=Qe.dot(Dr),l=gn.dot(gn),c=gn.dot(Dr),u=r*l-a*a;if(u===0)return s.set(0,0,0),null;let p=1/u,h=(l*o-a*c)*p,d=(r*c-a*o)*p;return s.set(1-h-d,d,h)}static containsPoint(t,e,n,i){if(this.getBarycoord(t,e,n,i,_n)===null)return!1;return _n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(t,e,n,i,s,r,a,o){if(this.getBarycoord(t,e,n,i,_n)===null){if(o.x=0,o.y=0,"z"in o)o.z=0;if("w"in o)o.w=0;return null}return o.setScalar(0),o.addScaledVector(s,_n.x),o.addScaledVector(r,_n.y),o.addScaledVector(a,_n.z),o}static getInterpolatedAttribute(t,e,n,i,s,r){return Br.setScalar(0),zr.setScalar(0),kr.setScalar(0),Br.fromBufferAttribute(t,e),zr.fromBufferAttribute(t,n),kr.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Br,s.x),r.addScaledVector(zr,s.y),r.addScaledVector(kr,s.z),r}static isFrontFacing(t,e,n,i){return Qe.subVectors(n,e),gn.subVectors(t,e),Qe.cross(gn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Qe.cross(gn).length()*0.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(t){return Xe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return Xe.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Xe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,r,a;hi.subVectors(i,n),ui.subVectors(s,n),Ur.subVectors(t,n);let o=hi.dot(Ur),l=ui.dot(Ur);if(o<=0&&l<=0)return e.copy(n);Fr.subVectors(t,i);let c=hi.dot(Fr),u=ui.dot(Fr);if(c>=0&&u<=c)return e.copy(i);let p=o*u-c*l;if(p<=0&&o>=0&&c<=0)return r=o/(o-c),e.copy(n).addScaledVector(hi,r);Or.subVectors(t,s);let h=hi.dot(Or),d=ui.dot(Or);if(d>=0&&h<=d)return e.copy(s);let _=h*l-o*d;if(_<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(n).addScaledVector(ui,a);let y=c*d-h*u;if(y<=0&&u-c>=0&&h-d>=0)return ml.subVectors(s,i),a=(u-c)/(u-c+(h-d)),e.copy(i).addScaledVector(ml,a);let m=1/(y+_+p);return r=_*m,a=p*m,e.copy(n).addScaledVector(hi,r).addScaledVector(ui,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Yn{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=je.copy(e).multiplyScalar(0.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++){if(t.isMesh===!0)t.getVertexPosition(r,je);else je.fromBufferAttribute(s,r);je.applyMatrix4(t.matrixWorld),this.expandByPoint(je)}else{if(t.boundingBox!==void 0){if(t.boundingBox===null)t.computeBoundingBox();_s.copy(t.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();_s.copy(n.boundingBox)}_s.applyMatrix4(t.matrixWorld),this.union(_s)}}let i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;if(t.normal.x>0)e=t.normal.x*this.min.x,n=t.normal.x*this.max.x;else e=t.normal.x*this.max.x,n=t.normal.x*this.min.x;if(t.normal.y>0)e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y;else e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y;if(t.normal.z>0)e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z;else e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z;return e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bi),xs.subVectors(this.max,Bi),di.subVectors(t.a,Bi),fi.subVectors(t.b,Bi),pi.subVectors(t.c,Bi),Rn.subVectors(fi,di),Cn.subVectors(pi,fi),Un.subVectors(di,pi);let e=[0,-Rn.z,Rn.y,0,-Cn.z,Cn.y,0,-Un.z,Un.y,Rn.z,0,-Rn.x,Cn.z,0,-Cn.x,Un.z,0,-Un.x,-Rn.y,Rn.x,0,-Cn.y,Cn.x,0,-Un.y,Un.x,0];if(!Gr(e,di,fi,pi,xs))return!1;if(e=[1,0,0,0,1,0,0,0,1],!Gr(e,di,fi,pi,xs))return!1;return vs.crossVectors(Rn,Cn),e=[vs.x,vs.y,vs.z],Gr(e,di,fi,pi,xs)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){if(this.isEmpty())t.makeEmpty();else this.getCenter(t.center),t.radius=this.getSize(je).length()*0.5;return t}intersect(t){if(this.min.max(t.min),this.max.min(t.max),this.isEmpty())this.makeEmpty();return this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){if(this.isEmpty())return this;return xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}var xn=[new U,new U,new U,new U,new U,new U,new U,new U],je=new U,_s=new Yn,di=new U,fi=new U,pi=new U,Rn=new U,Cn=new U,Un=new U,Bi=new U,xs=new U,vs=new U,Fn=new U;function Gr(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){Fn.fromArray(t,r);let o=s.x*Math.abs(Fn.x)+s.y*Math.abs(Fn.y)+s.z*Math.abs(Fn.z),l=e.dot(Fn),c=n.dot(Fn),u=i.dot(Fn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var ye=new U,ys=new bt,$h=0;class tn extends Mn{constructor(t,e,n=!1){super();if(Array.isArray(t))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$h++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ys.fromBufferAttribute(this,e),ys.applyMatrix3(t),this.setXY(e,ys.x,ys.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];if(this.normalized)n=Fi(n,this.array);return n}setComponent(t,e,n){if(this.normalized)n=Ue(n,this.array);return this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];if(this.normalized)e=Fi(e,this.array);return e}setX(t,e){if(this.normalized)e=Ue(e,this.array);return this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];if(this.normalized)e=Fi(e,this.array);return e}setY(t,e){if(this.normalized)e=Ue(e,this.array);return this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];if(this.normalized)e=Fi(e,this.array);return e}setZ(t,e){if(this.normalized)e=Ue(e,this.array);return this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];if(this.normalized)e=Fi(e,this.array);return e}setW(t,e){if(this.normalized)e=Ue(e,this.array);return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){if(t*=this.itemSize,this.normalized)e=Ue(e,this.array),n=Ue(n,this.array);return this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){if(t*=this.itemSize,this.normalized)e=Ue(e,this.array),n=Ue(n,this.array),i=Ue(i,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t*=this.itemSize,this.normalized)e=Ue(e,this.array),n=Ue(n,this.array),i=Ue(i,this.array),s=Ue(s,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class er extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class nr extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Se extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}}var Kh=new Yn,zi=new U,Hr=new U;class Ci{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;if(e!==void 0)n.copy(e);else Kh.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);if(e.copy(t),n>this.radius*this.radius)e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center);return e}getBoundingBox(t){if(this.isEmpty())return t.makeEmpty(),t;return t.set(this.center,this.center),t.expandByScalar(this.radius),t}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zi.subVectors(t,this.center);let e=zi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*0.5;this.center.addScaledVector(zi,i/n),this.radius+=i}return this}union(t){if(t.isEmpty())return this;if(this.isEmpty())return this.copy(t),this;if(this.center.equals(t.center)===!0)this.radius=Math.max(this.radius,t.radius);else Hr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zi.copy(t.center).add(Hr)),this.expandByPoint(zi.copy(t.center).sub(Hr));return this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}var Qh=0,Ve=new fe,Vr=new De,mi=new U,ze=new Yn,ki=new Yn,Ee=new U;class Te extends Mn{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){if(Array.isArray(t))this.index=new((Oh(t))?nr:er)(t,1);else this.index=t;return this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;if(e!==void 0)e.applyMatrix4(t),e.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new Gt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(t),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(t){return Ve.makeRotationFromQuaternion(t),this.applyMatrix4(Ve),this}rotateX(t){return Ve.makeRotationX(t),this.applyMatrix4(Ve),this}rotateY(t){return Ve.makeRotationY(t),this.applyMatrix4(Ve),this}rotateZ(t){return Ve.makeRotationZ(t),this.applyMatrix4(Ve),this}translate(t,e,n){return Ve.makeTranslation(t,e,n),this.applyMatrix4(Ve),this}scale(t,e,n){return Ve.makeScale(t,e,n),this.applyMatrix4(Ve),this}lookAt(t){return Vr.lookAt(t),Vr.updateMatrix(),this.applyMatrix4(Vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Se(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}if(t.length>e.count)Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");e.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new Yn;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];if(ze.setFromBufferAttribute(s),this.morphTargetsRelative)Ee.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(Ee);else this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new Ci;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let a=e[s];if(ki.setFromBufferAttribute(a),this.morphTargetsRelative)Ee.addVectors(ze.min,ki.min),ze.expandByPoint(Ee),Ee.addVectors(ze.max,ki.max),ze.expandByPoint(Ee);else ze.expandByPoint(ki.min),ze.expandByPoint(ki.max)}ze.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)Ee.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ee));if(e)for(let s=0,r=e.length;s<r;s++){let a=e[s],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++){if(Ee.fromBufferAttribute(a,l),o)mi.fromBufferAttribute(t,l),Ee.add(mi);i=Math.max(i,n.distanceToSquared(Ee))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:n,normal:i,uv:s}=e,r=this.getAttribute("tangent");if(r===void 0||r.count!==n.count)r=new tn(new Float32Array(4*n.count),4),this.setAttribute("tangent",r);let a=[],o=[];for(let I=0;I<n.count;I++)a[I]=new U,o[I]=new U;let l=new U,c=new U,u=new U,p=new bt,h=new bt,d=new bt,_=new U,y=new U;function m(I,S,b){l.fromBufferAttribute(n,I),c.fromBufferAttribute(n,S),u.fromBufferAttribute(n,b),p.fromBufferAttribute(s,I),h.fromBufferAttribute(s,S),d.fromBufferAttribute(s,b),c.sub(l),u.sub(l),h.sub(p),d.sub(p);let H=1/(h.x*d.y-d.x*h.y);if(!isFinite(H))return;_.copy(c).multiplyScalar(d.y).addScaledVector(u,-h.y).multiplyScalar(H),y.copy(u).multiplyScalar(h.x).addScaledVector(c,-d.x).multiplyScalar(H),a[I].add(_),a[S].add(_),a[b].add(_),o[I].add(y),o[S].add(y),o[b].add(y)}let f=this.groups;if(f.length===0)f=[{start:0,count:t.count}];for(let I=0,S=f.length;I<S;++I){let b=f[I],{start:H,count:D}=b;for(let F=H,Q=H+D;F<Q;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let w=new U,T=new U,v=new U,E=new U;function A(I){v.fromBufferAttribute(i,I),E.copy(v);let S=a[I];w.copy(S),w.sub(v.multiplyScalar(v.dot(S))).normalize(),T.crossVectors(E,S);let H=T.dot(o[I])<0?-1:1;r.setXYZW(I,w.x,w.y,w.z,H)}for(let I=0,S=f.length;I<S;++I){let b=f[I],{start:H,count:D}=b;for(let F=H,Q=H+D;F<Q;F+=3)A(t.getX(F+0)),A(t.getX(F+1)),A(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,h=n.count;p<h;p++)n.setXYZ(p,0,0,0);let i=new U,s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,u=new U;if(t)for(let p=0,h=t.count;p<h;p+=3){let d=t.getX(p+0),_=t.getX(p+1),y=t.getX(p+2);i.fromBufferAttribute(e,d),s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,y),c.subVectors(r,s),u.subVectors(i,s),c.cross(u),a.fromBufferAttribute(n,d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,y),a.add(c),o.add(c),l.add(c),n.setXYZ(d,a.x,a.y,a.z),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z)}else for(let p=0,h=e.count;p<h;p+=3)i.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),r.fromBufferAttribute(e,p+2),c.subVectors(r,s),u.subVectors(i,s),c.cross(u),n.setXYZ(p+0,c.x,c.y,c.z),n.setXYZ(p+1,c.x,c.y,c.z),n.setXYZ(p+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,o){let{array:l,itemSize:c,normalized:u}=a,p=new l.constructor(o.length*c),h=0,d=0;for(let _=0,y=o.length;_<y;_++){if(a.isInterleavedBufferAttribute)h=o[_]*a.data.stride+a.offset;else h=o[_]*c;for(let m=0;m<c;m++)p[d++]=l[h++]}return new tn(p,c,u)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new Te,n=this.index.array,i=this.attributes;for(let a in i){let o=i[a],l=t(o,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let o=[],l=s[a];for(let c=0,u=l.length;c<u;c++){let p=l[c],h=t(p,n);o.push(h)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,o=r.length;a<o;a++){let l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0)t.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let l in o)if(o[l]!==void 0)t[l]=o[l];return t}t.data={attributes:{}};let e=this.index;if(e!==null)t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)};let n=this.attributes;for(let o in n){let l=n[o];t.data.attributes[o]=l.toJSON(t.data)}let i={},s=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],c=[];for(let u=0,p=l.length;u<p;u++){let h=l[u];c.push(h.toJSON(t.data))}if(c.length>0)i[o]=c,s=!0}if(s)t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)t.data.groups=JSON.parse(JSON.stringify(r));let a=this.boundingSphere;if(a!==null)t.data.boundingSphere=a.toJSON();return t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;if(n!==null)this.setIndex(n.clone());let i=t.attributes;for(let l in i){let c=i[l];this.setAttribute(l,c.clone(e))}let s=t.morphAttributes;for(let l in s){let c=[],u=s[l];for(let p=0,h=u.length;p<h;p++)c.push(u[p].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,c=r.length;l<c;l++){let u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;if(a!==null)this.boundingBox=a.clone();let o=t.boundingSphere;if(o!==null)this.boundingSphere=o.clone();return this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var Wr=new U,jh=new U,tu=new Gt;class We{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Wr.subVectors(n,e).cross(jh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Wr),s=this.normal.dot(i);if(s===0){if(this.distanceToPoint(t.start)===0)return e.copy(t.start);return null}let r=-(t.start.dot(this.normal)+this.constant)/s;if(n===!0&&(r<0||r>1))return null;return e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||tu.getNormalMatrix(t),i=this.coplanarPoint(Wr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}var eu=0;class Zn extends Mn{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){if(this._alphaTest>0!==t>0)this.version++;this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t===void 0)return;for(let e in t){let n=t[e];if(n===void 0){Ot(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Ot(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector2&&(n&&n.isVector2)||i&&i.isEuler&&(n&&n.isEuler)||i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(e)t={textures:{},images:{}};let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid;if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)n.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)n.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(t).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(t).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(t).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(t).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(t).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(t).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(t).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(t).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(t).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(t).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(t).uuid;if(this.attenuationDistance!==void 0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)n.clippingPlanes=this.clippingPlanes.map((s)=>s.toJSON());if(this.rotation!==void 0)n.rotation=this.rotation;if(this.depthPacking!==void 0)n.depthPacking=this.depthPacking;if(this.linewidth!==void 0)n.linewidth=this.linewidth;if(this.linecap!==void 0)n.linecap=this.linecap;if(this.linejoin!==void 0)n.linejoin=this.linejoin;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.wireframe!==void 0)n.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)n.flatShading=this.flatShading;if(this.fog!==void 0)n.fog=this.fog;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let a in s){let o=s[a];delete o.metadata,r.push(o)}return r}if(e){let s=i(t.textures),r=i(t.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}fromJSON(t,e){if(t.uuid!==void 0)this.uuid=t.uuid;if(t.name!==void 0)this.name=t.name;if(t.color!==void 0&&this.color!==void 0)this.color.setHex(t.color);if(t.roughness!==void 0)this.roughness=t.roughness;if(t.metalness!==void 0)this.metalness=t.metalness;if(t.sheen!==void 0)this.sheen=t.sheen;if(t.sheenColor!==void 0)this.sheenColor=new jt().setHex(t.sheenColor);if(t.sheenRoughness!==void 0)this.sheenRoughness=t.sheenRoughness;if(t.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(t.emissive);if(t.specular!==void 0&&this.specular!==void 0)this.specular.setHex(t.specular);if(t.specularIntensity!==void 0)this.specularIntensity=t.specularIntensity;if(t.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(t.specularColor);if(t.shininess!==void 0)this.shininess=t.shininess;if(t.clearcoat!==void 0)this.clearcoat=t.clearcoat;if(t.clearcoatRoughness!==void 0)this.clearcoatRoughness=t.clearcoatRoughness;if(t.dispersion!==void 0)this.dispersion=t.dispersion;if(t.retroreflectivity!==void 0)this.retroreflectivity=t.retroreflectivity;if(t.iridescence!==void 0)this.iridescence=t.iridescence;if(t.iridescenceIOR!==void 0)this.iridescenceIOR=t.iridescenceIOR;if(t.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=t.iridescenceThicknessRange;if(t.transmission!==void 0)this.transmission=t.transmission;if(t.thickness!==void 0)this.thickness=t.thickness;if(t.attenuationDistance!==void 0)this.attenuationDistance=t.attenuationDistance;if(t.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(t.attenuationColor);if(t.anisotropy!==void 0)this.anisotropy=t.anisotropy;if(t.anisotropyRotation!==void 0)this.anisotropyRotation=t.anisotropyRotation;if(t.fog!==void 0)this.fog=t.fog;if(t.flatShading!==void 0)this.flatShading=t.flatShading;if(t.blending!==void 0)this.blending=t.blending;if(t.combine!==void 0)this.combine=t.combine;if(t.side!==void 0)this.side=t.side;if(t.shadowSide!==void 0)this.shadowSide=t.shadowSide;if(t.opacity!==void 0)this.opacity=t.opacity;if(t.transparent!==void 0)this.transparent=t.transparent;if(t.alphaTest!==void 0)this.alphaTest=t.alphaTest;if(t.alphaHash!==void 0)this.alphaHash=t.alphaHash;if(t.depthFunc!==void 0)this.depthFunc=t.depthFunc;if(t.depthTest!==void 0)this.depthTest=t.depthTest;if(t.depthWrite!==void 0)this.depthWrite=t.depthWrite;if(t.colorWrite!==void 0)this.colorWrite=t.colorWrite;if(t.clippingPlanes!==void 0)this.clippingPlanes=t.clippingPlanes.map((n)=>new We().fromJSON(n));if(t.clipIntersection!==void 0)this.clipIntersection=t.clipIntersection;if(t.clipShadows!==void 0)this.clipShadows=t.clipShadows;if(t.depthPacking!==void 0)this.depthPacking=t.depthPacking;if(t.blendSrc!==void 0)this.blendSrc=t.blendSrc;if(t.blendDst!==void 0)this.blendDst=t.blendDst;if(t.blendEquation!==void 0)this.blendEquation=t.blendEquation;if(t.blendSrcAlpha!==void 0)this.blendSrcAlpha=t.blendSrcAlpha;if(t.blendDstAlpha!==void 0)this.blendDstAlpha=t.blendDstAlpha;if(t.blendEquationAlpha!==void 0)this.blendEquationAlpha=t.blendEquationAlpha;if(t.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(t.blendColor);if(t.blendAlpha!==void 0)this.blendAlpha=t.blendAlpha;if(t.stencilWriteMask!==void 0)this.stencilWriteMask=t.stencilWriteMask;if(t.stencilFunc!==void 0)this.stencilFunc=t.stencilFunc;if(t.stencilRef!==void 0)this.stencilRef=t.stencilRef;if(t.stencilFuncMask!==void 0)this.stencilFuncMask=t.stencilFuncMask;if(t.stencilFail!==void 0)this.stencilFail=t.stencilFail;if(t.stencilZFail!==void 0)this.stencilZFail=t.stencilZFail;if(t.stencilZPass!==void 0)this.stencilZPass=t.stencilZPass;if(t.stencilWrite!==void 0)this.stencilWrite=t.stencilWrite;if(t.wireframe!==void 0)this.wireframe=t.wireframe;if(t.wireframeLinewidth!==void 0)this.wireframeLinewidth=t.wireframeLinewidth;if(t.wireframeLinecap!==void 0)this.wireframeLinecap=t.wireframeLinecap;if(t.wireframeLinejoin!==void 0)this.wireframeLinejoin=t.wireframeLinejoin;if(t.rotation!==void 0)this.rotation=t.rotation;if(t.linewidth!==void 0)this.linewidth=t.linewidth;if(t.linecap!==void 0)this.linecap=t.linecap;if(t.linejoin!==void 0)this.linejoin=t.linejoin;if(t.dashSize!==void 0)this.dashSize=t.dashSize;if(t.gapSize!==void 0)this.gapSize=t.gapSize;if(t.scale!==void 0)this.scale=t.scale;if(t.polygonOffset!==void 0)this.polygonOffset=t.polygonOffset;if(t.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=t.polygonOffsetFactor;if(t.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=t.polygonOffsetUnits;if(t.dithering!==void 0)this.dithering=t.dithering;if(t.alphaToCoverage!==void 0)this.alphaToCoverage=t.alphaToCoverage;if(t.premultipliedAlpha!==void 0)this.premultipliedAlpha=t.premultipliedAlpha;if(t.forceSinglePass!==void 0)this.forceSinglePass=t.forceSinglePass;if(t.allowOverride!==void 0)this.allowOverride=t.allowOverride;if(t.visible!==void 0)this.visible=t.visible;if(t.toneMapped!==void 0)this.toneMapped=t.toneMapped;if(t.userData!==void 0)this.userData=t.userData;if(t.vertexColors!==void 0)if(typeof t.vertexColors==="number")this.vertexColors=t.vertexColors>0;else this.vertexColors=t.vertexColors;if(t.size!==void 0)this.size=t.size;if(t.sizeAttenuation!==void 0)this.sizeAttenuation=t.sizeAttenuation;if(t.map!==void 0)this.map=e[t.map]||null;if(t.matcap!==void 0)this.matcap=e[t.matcap]||null;if(t.alphaMap!==void 0)this.alphaMap=e[t.alphaMap]||null;if(t.bumpMap!==void 0)this.bumpMap=e[t.bumpMap]||null;if(t.bumpScale!==void 0)this.bumpScale=t.bumpScale;if(t.normalMap!==void 0)this.normalMap=e[t.normalMap]||null;if(t.normalMapType!==void 0)this.normalMapType=t.normalMapType;if(t.normalScale!==void 0){let n=t.normalScale;if(Array.isArray(n)===!1)n=[n,n];this.normalScale=new bt().fromArray(n)}if(t.displacementMap!==void 0)this.displacementMap=e[t.displacementMap]||null;if(t.displacementScale!==void 0)this.displacementScale=t.displacementScale;if(t.displacementBias!==void 0)this.displacementBias=t.displacementBias;if(t.roughnessMap!==void 0)this.roughnessMap=e[t.roughnessMap]||null;if(t.metalnessMap!==void 0)this.metalnessMap=e[t.metalnessMap]||null;if(t.emissiveMap!==void 0)this.emissiveMap=e[t.emissiveMap]||null;if(t.emissiveIntensity!==void 0)this.emissiveIntensity=t.emissiveIntensity;if(t.specularMap!==void 0)this.specularMap=e[t.specularMap]||null;if(t.specularIntensityMap!==void 0)this.specularIntensityMap=e[t.specularIntensityMap]||null;if(t.specularColorMap!==void 0)this.specularColorMap=e[t.specularColorMap]||null;if(t.envMap!==void 0)this.envMap=e[t.envMap]||null;if(t.envMapRotation!==void 0)this.envMapRotation.fromArray(t.envMapRotation);if(t.envMapIntensity!==void 0)this.envMapIntensity=t.envMapIntensity;if(t.reflectivity!==void 0)this.reflectivity=t.reflectivity;if(t.refractionRatio!==void 0)this.refractionRatio=t.refractionRatio;if(t.lightMap!==void 0)this.lightMap=e[t.lightMap]||null;if(t.lightMapIntensity!==void 0)this.lightMapIntensity=t.lightMapIntensity;if(t.aoMap!==void 0)this.aoMap=e[t.aoMap]||null;if(t.aoMapIntensity!==void 0)this.aoMapIntensity=t.aoMapIntensity;if(t.gradientMap!==void 0)this.gradientMap=e[t.gradientMap]||null;if(t.clearcoatMap!==void 0)this.clearcoatMap=e[t.clearcoatMap]||null;if(t.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null;if(t.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null;if(t.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new bt().fromArray(t.clearcoatNormalScale);if(t.iridescenceMap!==void 0)this.iridescenceMap=e[t.iridescenceMap]||null;if(t.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null;if(t.transmissionMap!==void 0)this.transmissionMap=e[t.transmissionMap]||null;if(t.thicknessMap!==void 0)this.thicknessMap=e[t.thicknessMap]||null;if(t.anisotropyMap!==void 0)this.anisotropyMap=e[t.anisotropyMap]||null;if(t.sheenColorMap!==void 0)this.sheenColorMap=e[t.sheenColorMap]||null;if(t.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){if(t===!0)this.version++}}var vn=new U,Xr=new U,Ss=new U,Ms=new U;class ss{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);if(n<0)return e.copy(this.origin);return e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vn.subVectors(t,this.origin).dot(this.direction);if(e<0)return this.origin.distanceToSquared(t);return vn.copy(this.origin).addScaledVector(this.direction,e),vn.distanceToSquared(t)}distanceSqToSegment(t,e,n,i){Xr.copy(t).add(e).multiplyScalar(0.5),Ss.copy(e).sub(t).normalize(),Ms.copy(this.origin).sub(Xr);let s=t.distanceTo(e)*0.5,r=-this.direction.dot(Ss),a=Ms.dot(this.direction),o=-Ms.dot(Ss),l=Ms.lengthSq(),c=Math.abs(1-r*r),u,p,h,d;if(c>0)if(u=r*o-a,p=r*a-o,d=s*c,u>=0)if(p>=-d)if(p<=d){let _=1/c;u*=_,p*=_,h=u*(u+r*p+2*a)+p*(r*u+p+2*o)+l}else p=s,u=Math.max(0,-(r*p+a)),h=-u*u+p*(p+2*o)+l;else p=-s,u=Math.max(0,-(r*p+a)),h=-u*u+p*(p+2*o)+l;else if(p<=-d)u=Math.max(0,-(-r*s+a)),p=u>0?-s:Math.min(Math.max(-s,-o),s),h=-u*u+p*(p+2*o)+l;else if(p<=d)u=0,p=Math.min(Math.max(-s,-o),s),h=p*(p+2*o)+l;else u=Math.max(0,-(r*s+a)),p=u>0?s:Math.min(Math.max(-s,-o),s),h=-u*u+p*(p+2*o)+l;else p=r>0?-s:s,u=Math.max(0,-(r*p+a)),h=-u*u+p*(p+2*o)+l;if(n)n.copy(this.origin).addScaledVector(this.direction,u);if(i)i.copy(Xr).addScaledVector(Ss,p);return h}intersectSphere(t,e){if(t.radius<0)return null;vn.subVectors(t.center,this.origin);let n=vn.dot(this.direction),i=vn.dot(vn)-n*n,s=t.radius*t.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,o=n+r;if(o<0)return null;if(a<0)return this.at(o,e);return this.at(a,e)}intersectsSphere(t){if(t.radius<0)return!1;return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0){if(t.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);if(n===null)return null;return this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);if(e===0)return!0;if(t.normal.dot(this.direction)*e<0)return!0;return!1}intersectBox(t,e){let n,i,s,r,a,o,l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,p=this.origin;if(l>=0)n=(t.min.x-p.x)*l,i=(t.max.x-p.x)*l;else n=(t.max.x-p.x)*l,i=(t.min.x-p.x)*l;if(c>=0)s=(t.min.y-p.y)*c,r=(t.max.y-p.y)*c;else s=(t.max.y-p.y)*c,r=(t.min.y-p.y)*c;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(u>=0)a=(t.min.z-p.z)*u,o=(t.max.z-p.z)*u;else a=(t.max.z-p.z)*u,o=(t.min.z-p.z)*u;if(n>o||a>i)return null;if(a>n||n!==n)n=a;if(o<i||i!==i)i=o;if(i<0)return null;return this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,vn)!==null}intersectTriangle(t,e,n,i,s){let r=this.origin,a=this.direction,{x:o,y:l,z:c}=a,u=t.x-r.x,p=t.y-r.y,h=t.z-r.z,d=e.x-r.x,_=e.y-r.y,y=e.z-r.z,m=n.x-r.x,f=n.y-r.y,w=n.z-r.z,T=Math.abs(o),v=Math.abs(l),E=Math.abs(c),A,I,S,b,H,D,F,Q,P,V,K,k;if(T>=v&&T>=E)if(S=o,D=u,P=d,k=m,o>=0)A=l,I=c,b=p,H=h,F=_,Q=y,V=f,K=w;else A=c,I=l,b=h,H=p,F=y,Q=_,V=w,K=f;else if(v>=E)if(S=l,D=p,P=_,k=f,l>=0)A=c,I=o,b=h,H=u,F=y,Q=d,V=w,K=m;else A=o,I=c,b=u,H=h,F=d,Q=y,V=m,K=w;else if(S=c,D=h,P=y,k=w,c>=0)A=o,I=l,b=u,H=p,F=d,Q=_,V=m,K=f;else A=l,I=o,b=p,H=u,F=_,Q=d,V=f,K=m;if(S===0)return null;let st=A/S,X=I/S,J=1/S,it=b-st*D,Dt=H-X*D,Pt=F-st*P,re=Q-X*P,Wt=V-st*k,q=K-X*k,rt=Wt*re-q*Pt,lt=it*q-Dt*Wt,Lt=Pt*Dt-re*it;if(i){if(rt<0||lt<0||Lt<0)return null}else if((rt<0||lt<0||Lt<0)&&(rt>0||lt>0||Lt>0))return null;let Ut=rt+lt+Lt;if(Ut===0)return null;let It=J*(rt*D+lt*P+Lt*k);if(Ut>0?It<0:It>0)return null;return this.at(It/Ut,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ii extends Zn{constructor(t){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}var gl=new fe,On=new ss,bs=new Ci,_l=new U,Es=new U,Ts=new U,ws=new U,qr=new U,As=new U,xl=new U,Rs=new U;class we extends De{constructor(t=new Te,e=new Ii){super();this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){if(super.copy(t,e),t.morphTargetInfluences!==void 0)this.morphTargetInfluences=t.morphTargetInfluences.slice();if(t.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary);return this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){As.set(0,0,0);for(let o=0,l=s.length;o<l;o++){let c=a[o],u=s[o];if(c===0)continue;if(qr.fromBufferAttribute(u,t),r)As.addScaledVector(qr,c);else As.addScaledVector(qr.sub(e),c)}e.add(As)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(bs.copy(n.boundingSphere),bs.applyMatrix4(s),On.copy(t.ray).recast(t.near),bs.containsPoint(On.origin)===!1){if(On.intersectSphere(bs,_l)===null)return;if(On.origin.distanceToSquared(_l)>(t.far-t.near)**2)return}if(gl.copy(s).invert(),On.copy(t.ray).applyMatrix4(gl),n.boundingBox!==null){if(On.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(t,e,On)}_computeIntersections(t,e,n){let i,s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,u=s.attributes.normal,{groups:p,drawRange:h}=s;if(a!==null)if(Array.isArray(r))for(let d=0,_=p.length;d<_;d++){let y=p[d],m=r[y.materialIndex],f=Math.max(y.start,h.start),w=Math.min(a.count,Math.min(y.start+y.count,h.start+h.count));for(let T=f,v=w;T<v;T+=3){let E=a.getX(T),A=a.getX(T+1),I=a.getX(T+2);if(i=Cs(this,m,t,n,l,c,u,E,A,I),i)i.faceIndex=Math.floor(T/3),i.face.materialIndex=y.materialIndex,e.push(i)}}else{let d=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let y=d,m=_;y<m;y+=3){let f=a.getX(y),w=a.getX(y+1),T=a.getX(y+2);if(i=Cs(this,r,t,n,l,c,u,f,w,T),i)i.faceIndex=Math.floor(y/3),e.push(i)}}else if(o!==void 0)if(Array.isArray(r))for(let d=0,_=p.length;d<_;d++){let y=p[d],m=r[y.materialIndex],f=Math.max(y.start,h.start),w=Math.min(o.count,Math.min(y.start+y.count,h.start+h.count));for(let T=f,v=w;T<v;T+=3){let E=T,A=T+1,I=T+2;if(i=Cs(this,m,t,n,l,c,u,E,A,I),i)i.faceIndex=Math.floor(T/3),i.face.materialIndex=y.materialIndex,e.push(i)}}else{let d=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let y=d,m=_;y<m;y+=3){let f=y,w=y+1,T=y+2;if(i=Cs(this,r,t,n,l,c,u,f,w,T),i)i.faceIndex=Math.floor(y/3),e.push(i)}}}}function nu(t,e,n,i,s,r,a,o){let l;if(e.side===1)l=i.intersectTriangle(a,r,s,!0,o);else l=i.intersectTriangle(s,r,a,e.side===0,o);if(l===null)return null;Rs.copy(o),Rs.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(Rs);if(c<n.near||c>n.far)return null;return{distance:c,point:Rs.clone(),object:t}}function Cs(t,e,n,i,s,r,a,o,l,c){t.getVertexPosition(o,Es),t.getVertexPosition(l,Ts),t.getVertexPosition(c,ws);let u=nu(t,e,n,i,Es,Ts,ws,xl);if(u){let p=new U;if(Xe.getBarycoord(xl,Es,Ts,ws,p),s)u.uv=Xe.getInterpolatedAttribute(s,o,l,c,p,new bt);if(r)u.uv1=Xe.getInterpolatedAttribute(r,o,l,c,p,new bt);if(a){if(u.normal=Xe.getInterpolatedAttribute(a,o,l,c,p,new U),u.normal.dot(i.direction)>0)u.normal.multiplyScalar(-1)}let h={a:o,b:l,c,normal:new U,materialIndex:0};Xe.getNormal(Es,Ts,ws,h.normal),u.face=h,u.barycoord=p}return u}class so extends Ie{constructor(t=null,e=1,n=1,i,s,r,a,o,l=1003,c=1003,u,p){super(null,r,a,o,l,c,i,s,u,p);this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var Bn=new Ci,iu=new bt(0.5,0.5),Is=new U;class ir{constructor(t=new We,e=new We,n=new We,i=new We,s=new We,r=new We){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2000,n=!1){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],p=s[6],h=s[7],d=s[8],_=s[9],y=s[10],m=s[11],f=s[12],w=s[13],T=s[14],v=s[15];if(i[0].setComponents(l-r,h-c,m-d,v-f).normalize(),i[1].setComponents(l+r,h+c,m+d,v+f).normalize(),i[2].setComponents(l+a,h+u,m+_,v+w).normalize(),i[3].setComponents(l-a,h-u,m-_,v-w).normalize(),n)i[4].setComponents(o,p,y,T).normalize(),i[5].setComponents(l-o,h-p,m-y,v-T).normalize();else if(i[4].setComponents(l-o,h-p,m-y,v-T).normalize(),e===2000)i[5].setComponents(l+o,h+p,m+y,v+T).normalize();else if(e===2001)i[5].setComponents(o,p,y,T).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0){if(t.boundingSphere===null)t.computeBoundingSphere();Bn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld)}else{let e=t.geometry;if(e.boundingSphere===null)e.computeBoundingSphere();Bn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bn)}intersectsSprite(t){Bn.center.set(0,0,0);let e=iu.distanceTo(t.center);return Bn.radius=0.7071067811865476+e,Bn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bn)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Is.x=i.normal.x>0?t.max.x:t.min.x,Is.y=i.normal.y>0?t.max.y:t.min.y,Is.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Is)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rs extends Zn{constructor(t){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}var Bs=new U,zs=new U,vl=new fe,Gi=new ss,Ps=new Ci,Yr=new U,yl=new U;class sr extends De{constructor(t=new Te,e=new rs){super();this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Bs.fromBufferAttribute(e,i-1),zs.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Bs.distanceTo(zs);t.setAttribute("lineDistance",new Se(n,1))}else Ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(Ps.copy(n.boundingSphere),Ps.applyMatrix4(i),Ps.radius+=s,t.ray.intersectsSphere(Ps)===!1)return;vl.copy(i).invert(),Gi.copy(t.ray).applyMatrix4(vl);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=this.isLineSegments?2:1,c=n.index,p=n.attributes.position;if(c!==null){let h=Math.max(0,r.start),d=Math.min(c.count,r.start+r.count);for(let _=h,y=d-1;_<y;_+=l){let m=c.getX(_),f=c.getX(_+1),w=Ls(this,t,Gi,o,m,f,_);if(w)e.push(w)}if(this.isLineLoop){let _=c.getX(d-1),y=c.getX(h),m=Ls(this,t,Gi,o,_,y,d-1);if(m)e.push(m)}}else{let h=Math.max(0,r.start),d=Math.min(p.count,r.start+r.count);for(let _=h,y=d-1;_<y;_+=l){let m=Ls(this,t,Gi,o,_,_+1,_);if(m)e.push(m)}if(this.isLineLoop){let _=Ls(this,t,Gi,o,d-1,h,d-1);if(_)e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ls(t,e,n,i,s,r,a){let o=t.geometry.attributes.position;if(Bs.fromBufferAttribute(o,s),zs.fromBufferAttribute(o,r),n.distanceSqToSegment(Bs,zs,Yr,yl)>i)return;Yr.applyMatrix4(t.matrixWorld);let c=e.ray.origin.distanceTo(Yr);if(c<e.near||c>e.far)return;return{distance:c,point:yl.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}class rr extends Ie{constructor(t=[],e=301,n,i,s,r,a,o,l,c){super(t,e,n,i,s,r,a,o,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jn extends Ie{constructor(t,e,n=1014,i,s,r,a=1003,o=1003,l,c=1026,u=1){if(c!==1026&&c!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:t,height:e,depth:u};super(p,i,s,r,a,o,c,n,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ts(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class ro extends Jn{constructor(t,e=1014,n=301,i,s,r=1003,a=1003,o,l=1026){let c={width:t,height:t,depth:1},u=[c,c,c,c,c,c];super(t,t,e,n,i,s,r,a,o,l);this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ar extends Ie{constructor(t=null){super();this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Pi extends Te{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let o=[],l=[],c=[],u=[],p=0,h=0;d("z","y","x",-1,-1,n,e,t,r,s,0),d("z","y","x",1,-1,n,e,-t,r,s,1),d("x","z","y",1,1,t,n,e,i,r,2),d("x","z","y",1,-1,t,n,-e,i,r,3),d("x","y","z",1,-1,t,e,n,i,s,4),d("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(o),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(u,2));function d(_,y,m,f,w,T,v,E,A,I,S){let b=T/A,H=v/I,D=T/2,F=v/2,Q=E/2,P=A+1,V=I+1,K=0,k=0,st=new U;for(let X=0;X<V;X++){let J=X*H-F;for(let it=0;it<P;it++){let Dt=it*b-D;st[_]=Dt*f,st[y]=J*w,st[m]=Q,l.push(st.x,st.y,st.z),st[_]=0,st[y]=0,st[m]=E>0?1:-1,c.push(st.x,st.y,st.z),u.push(it/A),u.push(1-X/I),K+=1}}for(let X=0;X<I;X++)for(let J=0;J<A;J++){let it=p+J+P*X,Dt=p+J+P*(X+1),Pt=p+(J+1)+P*(X+1),re=p+(J+1)+P*X;o.push(it,Dt,re),o.push(Dt,Pt,re),k+=6}a.addGroup(h,k,S),h+=k,p+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ze{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ot("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,s=n.length,r;if(e)r=e;else r=t*n[s-1];let a=0,o=s-1,l;while(a<=o)if(i=Math.floor(a+(o-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)o=i-1;else{o=i;break}if(i=o,n[i]===r)return i/(s-1);let c=n[i],p=n[i+1]-c,h=(r-c)/p;return(i+h)/(s-1)}getTangent(t,e){let i=t-0.0001,s=t+0.0001;if(i<0)i=0;if(s>1)s=1;let r=this.getPoint(i),a=this.getPoint(s),o=e||(r.isVector2?new bt:new U);return o.copy(a).sub(r).normalize(),o}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new U,i=[],s=[],r=[],a=new U,o=new fe;for(let h=0;h<=t;h++){let d=h/t;i[h]=this.getTangentAt(d,new U)}s[0]=new U,r[0]=new U;let l=Number.MAX_VALUE,c=Math.abs(i[0].x),u=Math.abs(i[0].y),p=Math.abs(i[0].z);if(c<=l)l=c,n.set(1,0,0);if(u<=l)l=u,n.set(0,1,0);if(p<=l)n.set(0,0,1);a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let h=1;h<=t;h++){if(s[h]=s[h-1].clone(),r[h]=r[h-1].clone(),a.crossVectors(i[h-1],i[h]),a.length()>Number.EPSILON){a.normalize();let d=Math.acos($t(i[h-1].dot(i[h]),-1,1));s[h].applyMatrix4(o.makeRotationAxis(a,d))}r[h].crossVectors(i[h],s[h])}if(e===!0){let h=Math.acos($t(s[0].dot(s[t]),-1,1));if(h/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0)h=-h;for(let d=1;d<=t;d++)s[d].applyMatrix4(o.makeRotationAxis(i[d],h*d)),r[d].crossVectors(i[d],s[d])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class as extends Ze{constructor(t=0,e=0,n=1,i=1,s=0,r=Math.PI*2,a=!1,o=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=o}getPoint(t,e=new bt){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;while(s<0)s+=i;while(s>i)s-=i;if(s<Number.EPSILON)if(r)s=0;else s=i;if(this.aClockwise===!0&&!r)if(s===i)s=-i;else s=s-i;let a=this.aStartAngle+t*s,o=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=o-this.aX,h=l-this.aY;o=p*c-h*u+this.aX,l=p*u+h*c+this.aY}return n.set(o,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ao extends as{constructor(t,e,n,i,s,r){super(t,e,n,n,i,s,r);this.isArcCurve=!0,this.type="ArcCurve"}}function oo(){let t=0,e=0,n=0,i=0;function s(r,a,o,l){t=r,e=o,n=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,p){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+p)+(l-o)/p;h*=u,d*=u,s(a,o,h,d)},calc:function(r){let a=r*r,o=a*r;return t+e*r+n*a+i*o}}}var Sl=new U,Ml=new U,Zr=new oo,Jr=new oo,$r=new oo;class $n extends Ze{constructor(t=[],e=!1,n="centripetal",i=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new U){let n=e,i=this.points,s=i.length,r=(s-(this.closed?0:1))*t,a=Math.floor(r),o=r-a;if(this.closed)a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s;else if(o===0&&a===s-1)a=s-2,o=1;let l,c;if(this.closed||a>0)l=i[(a-1)%s];else Ml.subVectors(i[0],i[1]).add(i[0]),l=Ml;let u=i[a%s],p=i[(a+1)%s];if(this.closed||a+2<s)c=i[(a+2)%s];else Sl.subVectors(i[s-1],i[s-2]).add(i[s-1]),c=Sl;if(this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?0.5:0.25,d=Math.pow(l.distanceToSquared(u),h),_=Math.pow(u.distanceToSquared(p),h),y=Math.pow(p.distanceToSquared(c),h);if(_<0.0001)_=1;if(d<0.0001)d=_;if(y<0.0001)y=_;Zr.initNonuniformCatmullRom(l.x,u.x,p.x,c.x,d,_,y),Jr.initNonuniformCatmullRom(l.y,u.y,p.y,c.y,d,_,y),$r.initNonuniformCatmullRom(l.z,u.z,p.z,c.z,d,_,y)}else if(this.curveType==="catmullrom")Zr.initCatmullRom(l.x,u.x,p.x,c.x,this.tension),Jr.initCatmullRom(l.y,u.y,p.y,c.y,this.tension),$r.initCatmullRom(l.z,u.z,p.z,c.z,this.tension);return n.set(Zr.calc(o),Jr.calc(o),$r.calc(o)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new U().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function bl(t,e,n,i,s){let r=(i-e)*0.5,a=(s-n)*0.5,o=t*t,l=t*o;return(2*n-2*i+r+a)*l+(-3*n+3*i-2*r-a)*o+r*t+n}function su(t,e){let n=1-t;return n*n*e}function ru(t,e){return 2*(1-t)*t*e}function au(t,e){return t*t*e}function Vi(t,e,n,i){return su(t,e)+ru(t,n)+au(t,i)}function ou(t,e){let n=1-t;return n*n*n*e}function lu(t,e){let n=1-t;return 3*n*n*t*e}function cu(t,e){return 3*(1-t)*t*t*e}function hu(t,e){return t*t*t*e}function Wi(t,e,n,i,s){return ou(t,e)+lu(t,n)+cu(t,i)+hu(t,s)}class or extends Ze{constructor(t=new bt,e=new bt,n=new bt,i=new bt){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new bt){let n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(Wi(t,i.x,s.x,r.x,a.x),Wi(t,i.y,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class lo extends Ze{constructor(t=new U,e=new U,n=new U,i=new U){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new U){let n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(Wi(t,i.x,s.x,r.x,a.x),Wi(t,i.y,s.y,r.y,a.y),Wi(t,i.z,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class lr extends Ze{constructor(t=new bt,e=new bt){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new bt){let n=e;if(t===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1);return n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class co extends Ze{constructor(t=new U,e=new U){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;if(t===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1);return n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cr extends Ze{constructor(t=new bt,e=new bt,n=new bt){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new bt){let n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(Vi(t,i.x,s.x,r.x),Vi(t,i.y,s.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ho extends Ze{constructor(t=new U,e=new U,n=new U){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(Vi(t,i.x,s.x,r.x),Vi(t,i.y,s.y,r.y),Vi(t,i.z,s.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hr extends Ze{constructor(t=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new bt){let n=e,i=this.points,s=(i.length-1)*t,r=Math.floor(s),a=s-r,o=i[r===0?r:r-1],l=i[r],c=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(bl(a,o.x,l.x,c.x,u.x),bl(a,o.y,l.y,c.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new bt().fromArray(i))}return this}}var El=Object.freeze({__proto__:null,ArcCurve:ao,CatmullRomCurve3:$n,CubicBezierCurve:or,CubicBezierCurve3:lo,EllipseCurve:as,LineCurve:lr,LineCurve3:co,QuadraticBezierCurve:cr,QuadraticBezierCurve3:ho,SplineCurve:hr});class uo extends Ze{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new El[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;while(s<i.length){if(i[s]>=n){let r=i[s]-n,a=this.curves[s],o=a.getLength(),l=o===0?0:1-r/o;return a.getPointAt(l,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));if(this.autoClose)e.push(e[0]);return e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let r=s[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,o=r.getPoints(a);for(let l=0;l<o.length;l++){let c=o[l];if(n&&n.equals(c))continue;e.push(c),n=c}}if(this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0]))e.push(e[0]);return e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new El[i.type]().fromJSON(i))}return this}}class ks extends uo{constructor(t){super();if(this.type="Path",this.currentPoint=new bt,t)this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new lr(this.currentPoint.clone(),new bt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new cr(this.currentPoint.clone(),new bt(t,e),new bt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,r){let a=new or(this.currentPoint.clone(),new bt(t,e),new bt(n,i),new bt(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new hr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,r){let a=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(t+a,e+o,n,i,s,r),this}absarc(t,e,n,i,s,r){return this.absellipse(t,e,n,n,i,s,r),this}ellipse(t,e,n,i,s,r,a,o){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+l,e+c,n,i,s,r,a,o),this}absellipse(t,e,n,i,s,r,a,o){let l=new as(t,e,n,i,s,r,a,o);if(this.curves.length>0){let u=l.getPoint(0);if(!u.equals(this.currentPoint))this.lineTo(u.x,u.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Kn extends ks{constructor(t){super(t);this.uuid=Ri(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new ks().fromJSON(i))}return this}}function uu(t,e,n=2){let i=e&&e.length,s=i?e[0]*n:t.length,r=Oc(t,0,s,n,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i)r=gu(t,e,r,n);if(t.length>80*n){o=t[0],l=t[1];let u=o,p=l;for(let h=n;h<s;h+=n){let d=t[h],_=t[h+1];if(d<o)o=d;if(_<l)l=_;if(d>u)u=d;if(_>p)p=_}c=Math.max(u-o,p-l),c=c!==0?32767/c:0}return qi(r,a,n,o,l,c,0),a}function Oc(t,e,n,i,s){let r;if(s===Au(t,e,n,i)>0)for(let a=e;a<n;a+=i)r=Tl(a/i|0,t[a],t[a+1],r);else for(let a=n-i;a>=e;a-=i)r=Tl(a/i|0,t[a],t[a+1],r);if(r&&Mi(r,r.next))Zi(r),r=r.next;return r}function kn(t,e){if(!t)return t;if(!e)e=t;let n=t,i;do if(i=!1,!n.steiner&&(Mi(n,n.next)||me(n.prev,n,n.next)===0)){if(Zi(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function qi(t,e,n,i,s,r,a){if(!t)return;if(!a&&r)Su(t,i,s,r);let o=t;while(t.prev!==t.next){let l=t.prev,c=t.next;if(r?fu(t,i,s,r):du(t)){e.push(l.i,t.i,c.i),Zi(t),t=c.next,o=c.next;continue}if(t=c,t===o){if(!a)qi(kn(t),e,n,i,s,r,1);else if(a===1)t=pu(kn(t),e),qi(t,e,n,i,s,r,2);else if(a===2)mu(t,e,n,i,s,r);break}}}function du(t){let e=t.prev,n=t,i=t.next;if(me(e,n,i)>=0)return!1;let s=e.x,r=n.x,a=i.x,o=e.y,l=n.y,c=i.y,u=Math.min(s,r,a),p=Math.min(o,l,c),h=Math.max(s,r,a),d=Math.max(o,l,c),_=i.next;while(_!==e){if(_.x>=u&&_.x<=h&&_.y>=p&&_.y<=d&&Hi(s,o,r,l,a,c,_.x,_.y)&&me(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function fu(t,e,n,i){let s=t.prev,r=t,a=t.next;if(me(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,p=r.y,h=a.y,d=Math.min(o,l,c),_=Math.min(u,p,h),y=Math.max(o,l,c),m=Math.max(u,p,h),f=Qr(d,_,e,n,i),w=Qr(y,m,e,n,i),{prevZ:T,nextZ:v}=t;while(T&&T.z>=f&&v&&v.z<=w){if(T.x>=d&&T.x<=y&&T.y>=_&&T.y<=m&&T!==s&&T!==a&&Hi(o,u,l,p,c,h,T.x,T.y)&&me(T.prev,T,T.next)>=0)return!1;if(T=T.prevZ,v.x>=d&&v.x<=y&&v.y>=_&&v.y<=m&&v!==s&&v!==a&&Hi(o,u,l,p,c,h,v.x,v.y)&&me(v.prev,v,v.next)>=0)return!1;v=v.nextZ}while(T&&T.z>=f){if(T.x>=d&&T.x<=y&&T.y>=_&&T.y<=m&&T!==s&&T!==a&&Hi(o,u,l,p,c,h,T.x,T.y)&&me(T.prev,T,T.next)>=0)return!1;T=T.prevZ}while(v&&v.z<=w){if(v.x>=d&&v.x<=y&&v.y>=_&&v.y<=m&&v!==s&&v!==a&&Hi(o,u,l,p,c,h,v.x,v.y)&&me(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function pu(t,e){let n=t;do{let i=n.prev,s=n.next.next;if(!Mi(i,s)&&zc(i,n,n.next,s)&&Yi(i,s)&&Yi(s,i))e.push(i.i,n.i,s.i),Zi(n),Zi(n.next),n=t=s;n=n.next}while(n!==t);return kn(n)}function mu(t,e,n,i,s,r){let a=t;do{let o=a.next.next;while(o!==a.prev){if(a.i!==o.i&&Eu(a,o)){let l=kc(a,o);a=kn(a,a.next),l=kn(l,l.next),qi(a,e,n,i,s,r,0),qi(l,e,n,i,s,r,0);return}o=o.next}a=a.next}while(a!==t)}function gu(t,e,n,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:t.length,c=Oc(t,o,l,i,!1);if(c===c.next)c.steiner=!0;s.push(bu(c))}s.sort(_u);for(let r=0;r<s.length;r++)n=xu(s[r],n);return n}function _u(t,e){let n=t.x-e.x;if(n===0){if(n=t.y-e.y,n===0){let i=(t.next.y-t.y)/(t.next.x-t.x),s=(e.next.y-e.y)/(e.next.x-e.x);n=i-s}}return n}function xu(t,e){let n=vu(t,e);if(!n)return e;let i=kc(n,t);return kn(i,i.next),kn(n,n.next)}function vu(t,e){let n=e,{x:i,y:s}=t,r=-1/0,a;if(Mi(t,n))return n;do{if(Mi(t,n.next))return n.next;else if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){let p=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(p<=i&&p>r){if(r=p,a=n.x<n.next.x?n:n.next,p===i)return a}}n=n.next}while(n!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;n=a;do{if(i>=n.x&&n.x>=l&&i!==n.x&&Bc(s<c?i:r,s,l,c,s<c?r:i,s,n.x,n.y)){let p=Math.abs(s-n.y)/(i-n.x);if(Yi(n,t)&&(p<u||p===u&&(n.x>a.x||n.x===a.x&&yu(a,n))))a=n,u=p}n=n.next}while(n!==o);return a}function yu(t,e){return me(t.prev,t,e.prev)<0&&me(e.next,t,t.next)<0}function Su(t,e,n,i){let s=t;do{if(s.z===0)s.z=Qr(s.x,s.y,e,n,i);s.prevZ=s.prev,s.nextZ=s.next,s=s.next}while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,Mu(s)}function Mu(t){let e,n=1;do{let i=t,s;t=null;let r=null;e=0;while(i){e++;let a=i,o=0;for(let c=0;c<n;c++)if(o++,a=a.nextZ,!a)break;let l=n;while(o>0||l>0&&a){if(o!==0&&(l===0||!a||i.z<=a.z))s=i,i=i.nextZ,o--;else s=a,a=a.nextZ,l--;if(r)r.nextZ=s;else t=s;s.prevZ=r,r=s}i=a}r.nextZ=null,n*=2}while(e>1);return t}function Qr(t,e,n,i,s){return t=(t-n)*s|0,e=(e-i)*s|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function bu(t){let e=t,n=t;do{if(e.x<n.x||e.x===n.x&&e.y<n.y)n=e;e=e.next}while(e!==t);return n}function Bc(t,e,n,i,s,r,a,o){return(s-a)*(e-o)>=(t-a)*(r-o)&&(t-a)*(i-o)>=(n-a)*(e-o)&&(n-a)*(r-o)>=(s-a)*(i-o)}function Hi(t,e,n,i,s,r,a,o){return!(t===a&&e===o)&&Bc(t,e,n,i,s,r,a,o)}function Eu(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Tu(t,e)&&(Yi(t,e)&&Yi(e,t)&&wu(t,e)&&(me(t.prev,t,e.prev)||me(t,e.prev,e))||Mi(t,e)&&me(t.prev,t,t.next)>0&&me(e.prev,e,e.next)>0)}function me(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Mi(t,e){return t.x===e.x&&t.y===e.y}function zc(t,e,n,i){let s=Ds(me(t,e,n)),r=Ds(me(t,e,i)),a=Ds(me(n,i,t)),o=Ds(me(n,i,e));if(s!==r&&a!==o)return!0;if(s===0&&Ns(t,n,e))return!0;if(r===0&&Ns(t,i,e))return!0;if(a===0&&Ns(n,t,i))return!0;if(o===0&&Ns(n,e,i))return!0;return!1}function Ns(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Ds(t){return t>0?1:t<0?-1:0}function Tu(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&zc(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Yi(t,e){return me(t.prev,t,t.next)<0?me(t,e,t.next)>=0&&me(t,t.prev,e)>=0:me(t,e,t.prev)<0||me(t,t.next,e)<0}function wu(t,e){let n=t,i=!1,s=(t.x+e.x)/2,r=(t.y+e.y)/2;do{if(n.y>r!==n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x)i=!i;n=n.next}while(n!==t);return i}function kc(t,e){let n=jr(t.i,t.x,t.y),i=jr(e.i,e.x,e.y),s=t.next,r=e.prev;return t.next=e,e.prev=t,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i}function Tl(t,e,n,i){let s=jr(t,e,n);if(!i)s.prev=s,s.next=s;else s.next=i.next,s.prev=i,i.next.prev=s,i.next=s;return s}function Zi(t){if(t.next.prev=t.prev,t.prev.next=t.next,t.prevZ)t.prevZ.nextZ=t.nextZ;if(t.nextZ)t.nextZ.prevZ=t.prevZ}function jr(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Au(t,e,n,i){let s=0;for(let r=e,a=n-i;r<n;r+=i)s+=(t[a]-t[r])*(t[r+1]+t[a+1]),a=r;return s}class Gc{static triangulate(t,e,n=2){return uu(t,e,n)}}class yi{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*0.5}static isClockWise(t){return yi.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];wl(t),Al(n,t);let r=t.length;e.forEach(wl);for(let o=0;o<e.length;o++)i.push(r),r+=e[o].length,Al(n,e[o]);let a=Gc.triangulate(n,i);for(let o=0;o<a.length;o+=3)s.push(a.slice(o,o+3));return s}}function wl(t){let e=t.length;if(e>2&&t[e-1].equals(t[0]))t.pop()}function Al(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class os extends Te{constructor(t=1,e=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,r=e/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,u=t/a,p=e/o,h=[],d=[],_=[],y=[];for(let m=0;m<c;m++){let f=m*p-r;for(let w=0;w<l;w++){let T=w*u-s;d.push(T,-f,0),_.push(0,0,1),y.push(w/a),y.push(1-m/o)}}for(let m=0;m<o;m++)for(let f=0;f<a;f++){let w=f+l*m,T=f+l*(m+1),v=f+1+l*(m+1),E=f+1+l*m;h.push(w,T,E),h.push(T,v,E)}this.setIndex(h),this.setAttribute("position",new Se(d,3)),this.setAttribute("normal",new Se(_,3)),this.setAttribute("uv",new Se(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new os(t.width,t.height,t.widthSegments,t.heightSegments)}}class Qn extends Te{constructor(t=new Kn([new bt(0,0.5),new bt(-0.5,-0.5),new bt(0.5,-0.5)]),e=12){super();this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],s=[],r=[],a=0,o=0;if(Array.isArray(t)===!1)l(t);else for(let c=0;c<t.length;c++)l(t[c]),this.addGroup(a,o,c),a+=o,o=0;this.setIndex(n),this.setAttribute("position",new Se(i,3)),this.setAttribute("normal",new Se(s,3)),this.setAttribute("uv",new Se(r,2));function l(c){let u=i.length/3,p=c.extractPoints(e),{shape:h,holes:d}=p;if(yi.isClockWise(h)===!1)h=h.reverse();for(let y=0,m=d.length;y<m;y++){let f=d[y];if(yi.isClockWise(f)===!0)d[y]=f.reverse()}let _=yi.triangulateShape(h,d);for(let y=0,m=d.length;y<m;y++){let f=d[y];h=h.concat(f)}for(let y=0,m=h.length;y<m;y++){let f=h[y];i.push(f.x,f.y,0),s.push(0,0,1),r.push(f.x,f.y)}for(let y=0,m=_.length;y<m;y++){let f=_[y],w=f[0]+u,T=f[1]+u,v=f[2]+u;n.push(w,T,v),o+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Ru(e,t)}static fromJSON(t,e){let n=[];for(let i=0,s=t.shapes.length;i<s;i++){let r=e[t.shapes[i]];n.push(r)}return new Qn(n,t.curveSegments)}}function Ru(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){let s=t[n];e.shapes.push(s.uuid)}else e.shapes.push(t.uuid);return e}function jn(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(Rl(s))if(s.isRenderTargetTexture)Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null;else e[n][i]=s.clone();else if(Array.isArray(s))if(Rl(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function Pe(t){let e={};for(let n=0;n<t.length;n++){let i=jn(t[n]);for(let s in i)e[s]=i[s]}return e}function Rl(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Cu(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function fo(t){let e=t.getRenderTarget();if(e===null)return t.outputColorSpace;if(e.isXRRenderTarget===!0)return e.texture.colorSpace;return Qt.workingColorSpace}var Hc={clone:jn,merge:Pe},Iu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Je extends Zn{constructor(t){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Iu,this.fragmentShader=Pu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0)this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=jn(t.uniforms),this.uniformsGroups=Cu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)e.uniforms[i]={type:"t",value:r.toJSON(t).uuid};else if(r&&r.isColor)e.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)e.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)e.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)e.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)e.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)e.uniforms[i]={type:"m4",value:r.toArray()};else e.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)e.defines=this.defines;e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)e.extensions=n;return e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new jt().setHex(i.value);break;case"v2":this.uniforms[n].value=new bt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new U().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ge().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Gt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new fe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0)this.defines=t.defines;if(t.vertexShader!==void 0)this.vertexShader=t.vertexShader;if(t.fragmentShader!==void 0)this.fragmentShader=t.fragmentShader;if(t.glslVersion!==void 0)this.glslVersion=t.glslVersion;if(t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];if(t.lights!==void 0)this.lights=t.lights;if(t.clipping!==void 0)this.clipping=t.clipping;return this}}class po extends Je{constructor(t){super(t);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mo extends Zn{constructor(t){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class go extends Zn{constructor(t){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function gi(t,e){if(!t||t.constructor===e)return t;if(typeof e.BYTES_PER_ELEMENT==="number")return new e(t);return Array.prototype.slice.call(t)}function Kr(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}class ti{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){let a=e[1];if(t<a)n=2,s=a;for(let o=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}while(n<r){let a=n+r>>>1;if(t<e[a])r=a;else n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class _o extends ti{constructor(t,e,n,i){super(t,e,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,r=t+1,a=i[s],o=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:s=t,a=2*e-n;break;case 2402:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:r=t,o=2*n-e;break;case 2402:r=1,o=n+i[1]-i[0];break;default:r=t-1,o=e}let l=(n-e)*0.5,c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,h=this._weightNext,d=(n-e)/(i-e),_=d*d,y=_*d,m=-p*y+2*p*_-p*d,f=(1+p)*y+(-1.5-2*p)*_+(-0.5+p)*d+1,w=(-1-h)*y+(1.5+h)*_+0.5*d,T=h*y-h*_;for(let v=0;v!==a;++v)s[v]=m*r[c+v]+f*r[l+v]+w*r[o+v]+T*r[u+v];return s}}class xo extends ti{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=(n-e)/(i-e),u=1-c;for(let p=0;p!==a;++p)s[p]=r[l+p]*u+r[o+p]*c;return s}}class vo extends ti{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class yo extends ti{interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this.inTangents,u=this.outTangents;if(!c||!u){let d=(n-e)/(i-e),_=1-d;for(let y=0;y!==a;++y)s[y]=r[l+y]*_+r[o+y]*d;return s}let p=a*2,h=t-1;for(let d=0;d!==a;++d){let _=r[l+d],y=r[o+d],m=h*p+d*2,f=u[m],w=u[m+1],T=t*p+d*2,v=c[T],E=c[T+1],A=Nu(n,e,f,v,i);s[d]=Vc(A,_,w,E,y)}return s}}function Vc(t,e,n,i,s){let r=1-t;return r*r*r*e+3*r*r*t*n+3*r*t*t*i+t*t*t*s}function Lu(t,e,n,i,s){let r=1-t;return 3*r*r*(n-e)+6*r*t*(i-n)+3*t*t*(s-i)}function Nu(t,e,n,i,s){let r=(t-e)/(s-e);for(let a=0;a<8;a++){let o=Vc(r,e,n,i,s)-t;if(Math.abs(o)<0.0000000001)break;let l=Lu(r,e,n,i,s);if(Math.abs(l)<0.0000000001)break;r=Math.max(0,Math.min(1,r-o/l))}return r}class $e{constructor(t,e,n,i){if(t===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=gi(e,this.TimeBufferType),this.values=gi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:gi(t.times,Array),values:gi(t.values,Array)};let i=t.getInterpolation();if(i!==t.DefaultInterpolation)n.interpolation=i;if(Kr(t.settings))n.settings={inTangents:gi(t.settings.inTangents,Array),outTangents:gi(t.settings.outTangents,Array)}}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new vo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new xo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new _o(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new yo(this.times,this.values,this.getValueSize(),t);if(this.settings)e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents;return e}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break;case 2303:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return Ot("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;if(Kr(this.settings))Cl(this.settings.inTangents,t),Cl(this.settings.outTangents,t)}return this}trim(t,e){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<t)++s;while(r!==-1&&n[r]>e)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();if(e-Math.floor(e)!==0)Bt("KeyframeTrack: Invalid value size in track.",this),t=!1;let n=this.times,i=this.values,s=n.length;if(s===0)Bt("KeyframeTrack: Track is empty.",this),t=!1;let r=null;for(let a=0;a!==s;a++){let o=n[a];if(typeof o==="number"&&isNaN(o)){Bt("KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(r!==null&&r>o){Bt("KeyframeTrack: Out of order keys.",this,a,o,r),t=!1;break}r=o}if(i!==void 0){if(Bh(i))for(let a=0,o=i.length;a!==o;++a){let l=i[a];if(isNaN(l)){Bt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=t.length-1,r=1;for(let a=1;a<s;++a){let o=!1,l=t[a],c=t[a+1];if(l!==c&&(a!==1||l!==t[0]))if(!i){let u=a*n,p=u-n,h=u+n;for(let d=0;d!==n;++d){let _=e[u+d];if(_!==e[p+d]||_!==e[h+d]){o=!0;break}}}else o=!0;if(o){if(a!==r){t[r]=t[a];let u=a*n,p=r*n;for(let h=0;h!==n;++h)e[p+h]=e[u+h]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,o=r*n,l=0;l!==n;++l)e[o+l]=e[a+l];++r}if(r!==t.length)this.times=t.slice(0,r),this.values=e.slice(0,r*n);else this.times=t,this.values=e;return this}clone(){let t=this.times.slice(),e=this.values.slice(),i=new this.constructor(this.name,t,e);if(i.createInterpolant=this.createInterpolant,Kr(this.settings))i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return i}}function Cl(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]*=e}$e.prototype.ValueTypeName="";$e.prototype.TimeBufferType=Float32Array;$e.prototype.ValueBufferType=Float32Array;$e.prototype.DefaultInterpolation=2301;class ei extends $e{constructor(t,e,n){super(t,e,n)}}ei.prototype.ValueTypeName="bool";ei.prototype.ValueBufferType=Array;ei.prototype.DefaultInterpolation=2300;ei.prototype.InterpolantFactoryMethodLinear=void 0;ei.prototype.InterpolantFactoryMethodSmooth=void 0;class So extends $e{constructor(t,e,n,i){super(t,e,n,i)}}So.prototype.ValueTypeName="color";class Mo extends $e{constructor(t,e,n,i){super(t,e,n,i)}}Mo.prototype.ValueTypeName="number";class bo extends ti{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e),l=t*a;for(let c=l+a;l!==c;l+=4)Ye.slerpFlat(s,0,r,l-a,r,l,o);return s}}class ur extends $e{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new bo(this.times,this.values,this.getValueSize(),t)}}ur.prototype.ValueTypeName="quaternion";ur.prototype.InterpolantFactoryMethodSmooth=void 0;class ni extends $e{constructor(t,e,n){super(t,e,n)}}ni.prototype.ValueTypeName="string";ni.prototype.ValueBufferType=Array;ni.prototype.DefaultInterpolation=2300;ni.prototype.InterpolantFactoryMethodLinear=void 0;ni.prototype.InterpolantFactoryMethodSmooth=void 0;class Eo extends $e{constructor(t,e,n,i){super(t,e,n,i)}}Eo.prototype.ValueTypeName="vector";class To{constructor(t,e,n){let i=this,s=!1,r=0,a=0,o=void 0,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(c){if(a++,s===!1){if(i.onStart!==void 0)i.onStart(c,r,a)}s=!0},this.itemEnd=function(c){if(r++,i.onProgress!==void 0)i.onProgress(c,r,a);if(r===a){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(c){if(i.onError!==void 0)i.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),o)return o(c);return c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){let u=l.indexOf(c);if(u!==-1)l.splice(u,2);return this},this.getHandler=function(c){for(let u=0,p=l.length;u<p;u+=2){let h=l[u],d=l[u+1];if(h.global)h.lastIndex=0;if(h.test(c))return d}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var Wc=new To;class wo{constructor(t){if(this.manager=t!==void 0?t:Wc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}wo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Us=new U,Fs=new Ye,an=new U;class dr extends De{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.matrixWorld.decompose(Us,Fs,an),an.x===1&&an.y===1&&an.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Us,Fs,an.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){if(super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Us,Fs,an),an.x===1&&an.y===1&&an.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Us,Fs,an.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var In=new U,Il=new bt,Pl=new bt;class Ne extends dr{constructor(t=50,e=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=0.5*this.getFilmHeight()/t;this.fov=Os*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(wr*0.5*this.fov);return 0.5*this.getFilmHeight()/t}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(wr*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){In.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),e.set(In.x,In.y).multiplyScalar(-t/In.z),In.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(In.x,In.y).multiplyScalar(-t/In.z)}getViewSize(t,e){return this.getViewBounds(t,Il,Pl),e.subVectors(Pl,Il)}setViewOffset(t,e,n,i,s,r){if(this.aspect=t/e,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(wr*0.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:l}=r;s+=r.offsetX*i/o,e-=r.offsetY*n/l,i*=r.width/o,n*=r.height/l}let a=this.filmOffset;if(a!==0)s+=t*a/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null)e.object.view=Object.assign({},this.view);return e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class fr extends dr{constructor(t=-1,e=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,r=n+t,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null)e.object.view=Object.assign({},this.view);return e}}var _i=-90,xi=1;class Ao extends De{constructor(t,e,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ne(_i,xi,t,e);i.layers=this.layers,this.add(i);let s=new Ne(_i,xi,t,e);s.layers=this.layers,this.add(s);let r=new Ne(_i,xi,t,e);r.layers=this.layers,this.add(r);let a=new Ne(_i,xi,t,e);a.layers=this.layers,this.add(a);let o=new Ne(_i,xi,t,e);o.layers=this.layers,this.add(o);let l=new Ne(_i,xi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,a,o]=e;for(let l of e)this.remove(l);if(t===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==t.coordinateSystem)this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem();let[s,r,a,o,l,c]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),d=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let y=!1;if(t.isWebGLRenderer===!0)y=t.state.buffers.depth.getReversed();else y=t.reversedDepthBuffer;if(t.setRenderTarget(n,0,i),y&&t.autoClear===!1)t.clearDepth();if(t.render(e,s),t.setRenderTarget(n,1,i),y&&t.autoClear===!1)t.clearDepth();if(t.render(e,r),t.setRenderTarget(n,2,i),y&&t.autoClear===!1)t.clearDepth();if(t.render(e,a),t.setRenderTarget(n,3,i),y&&t.autoClear===!1)t.clearDepth();if(t.render(e,o),t.setRenderTarget(n,4,i),y&&t.autoClear===!1)t.clearDepth();if(t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),y&&t.autoClear===!1)t.clearDepth();t.render(e,c),t.setRenderTarget(u,p,h),t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Ro extends Ne{constructor(t=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}var Co="\\[\\]\\.:\\/",Du=new RegExp("["+Co+"]","g"),Io="[^"+Co+"]",Uu="[^"+Co.replace("\\.","")+"]",Fu=/((?:WC+[\/:])*)/.source.replace("WC",Io),Ou=/(WCOD+)?/.source.replace("WCOD",Uu),Bu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Io),zu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Io),ku=new RegExp("^"+Fu+Ou+Bu+zu+"$"),Gu=["material","materials","bones","map"];class Xc{constructor(t,e,n){let i=n||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ae{constructor(t,e,n){this.path=e,this.parsedPath=n||ae.parseTrackName(e),this.node=ae.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){if(!(t&&t.isAnimationObjectGroup))return new ae(t,e,n);else return new ae.Composite(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Du,"")}static parseTrackName(t){let e=ku.exec(t);if(e===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if(Gu.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===e||a.uuid===e)return a;let o=n(a.children);if(o)return o}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,{objectName:n,propertyName:i,propertyIndex:s}=e;if(!t)t=ae.findNode(this.rootNode,e.nodeName),this.node=t;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===l){l=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[i];if(r===void 0){let l=e.nodeName;Bt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;if(this.targetObject=t,t.isMaterial===!0)a=this.Versioning.NeedsUpdate;else if(t.isObject3D===!0)a=this.Versioning.MatrixWorldNeedsUpdate;let o=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(t.morphTargetDictionary[s]!==void 0)s=t.morphTargetDictionary[s]}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)o=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))o=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ae.Composite=Xc;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ug=new Float32Array(1);var Ll=new fe;class pr{constructor(t,e,n=0,i=1/0){this.ray=new ss(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new es,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){if(e.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,0.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e;else if(e.isOrthographicCamera)this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e;else Bt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ll.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ll),this}intersectObject(t,e=!0,n=[]){return ta(t,this,n,e),n.sort(Nl),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)ta(t[i],this,n,e);return n.sort(Nl),n}}function Nl(t,e){return t.distance-e.distance}function ta(t,e,n,i){let s=!0;if(t.layers.test(e.layers)){if(t.raycast(e,n)===!1)s=!1}if(s===!0&&i===!0){let r=t.children;for(let a=0,o=r.length;a<o;a++)ta(r[a],e,n,!0)}}class Po{static{Po.prototype.isMatrix2=!0}constructor(t,e,n,i){if(this.elements=[1,0,0,1],t!==void 0)this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}}function Lo(t,e,n,i){let s=Hu(i);switch(n){case 1021:return t*e;case 1028:return t*e/s.components*s.byteLength;case 1029:return t*e/s.components*s.byteLength;case 1030:return t*e*2/s.components*s.byteLength;case 1031:return t*e*2/s.components*s.byteLength;case 1022:return t*e*3/s.components*s.byteLength;case 1023:return t*e*4/s.components*s.byteLength;case 1033:return t*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(t,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(t,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(t/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(t/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Hu(t){switch(t){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)Ot("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function fh(){let t=null,e=!1,n=null,i=null;function s(r,a){i=t.requestAnimationFrame(s),n(r,a)}return{start:function(){if(e===!0)return;if(n===null)return;if(t===null)return;i=t.requestAnimationFrame(s),e=!0},stop:function(){if(t!==null)t.cancelAnimationFrame(i);e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function Vu(t){let e=new WeakMap;function n(o,l){let{array:c,usage:u}=o,p=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=t.HALF_FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute)d=t.HALF_FLOAT;else d=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=t.SHORT;else if(c instanceof Uint32Array)d=t.UNSIGNED_INT;else if(c instanceof Int32Array)d=t.INT;else if(c instanceof Int8Array)d=t.BYTE;else if(c instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let{array:u,updateRanges:p}=l;if(t.bindBuffer(c,o),p.length===0)t.bufferSubData(c,0,u);else{p.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<p.length;d++){let _=p[h],y=p[d];if(y.start<=_.start+_.count+1)_.count=Math.max(_.count,y.start+y.count-_.start);else++h,p[h]=y}p.length=h+1;for(let d=0,_=p.length;d<_;d++){let y=p[d];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){if(o.isInterleavedBufferAttribute)o=o.data;return e.get(o)}function r(o){if(o.isInterleavedBufferAttribute)o=o.data;let l=e.get(o);if(l)t.deleteBuffer(l.buffer),e.delete(o)}function a(o,l){if(o.isInterleavedBufferAttribute)o=o.data;if(o.isGLBufferAttribute){let u=e.get(o);if(!u||u.version<o.version)e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Wu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xu=`#ifdef USE_ALPHAHASH
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
#endif`,qu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ju=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$u=`#ifdef USE_AOMAP
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
#endif`,Ku=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qu=`#ifdef USE_BATCHING
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
#endif`,ju=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,td=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ed=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,id=`#ifdef USE_IRIDESCENCE
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
#endif`,sd=`#ifdef USE_BUMPMAP
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
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ud=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,fd=`#define PI 3.141592653589793
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
} // validated`,pd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,md=`vec3 transformedNormal = objectNormal;
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
#endif`,gd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_d=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Md=`#ifdef USE_ENVMAP
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
#endif`,bd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ed=`#ifdef USE_ENVMAP
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
#endif`,Td=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wd=`#ifdef USE_ENVMAP
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
#endif`,Ad=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Id=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pd=`#ifdef USE_GRADIENTMAP
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
}`,Ld=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ud=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Fd=`#ifdef USE_ENVMAP
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
#endif`,Od=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gd=`PhysicalMaterial material;
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
#endif`,Hd=`uniform sampler2D dfgLUT;
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
}`,Vd=`
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
#endif`,Wd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qd=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Yd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$d=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tf=`#if defined( USE_POINTS_UV )
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
#endif`,ef=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,af=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,of=`#ifdef USE_MORPHTARGETS
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
#endif`,lf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,df=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ff=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pf=`#ifdef USE_NORMALMAP
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
#endif`,mf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_f=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ef=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Af=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,If=`float getShadowMask() {
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
}`,Pf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lf=`#ifdef USE_SKINNING
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
#endif`,Nf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Df=`#ifdef USE_SKINNING
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
#endif`,Uf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ff=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Of=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zf=`#ifdef USE_TRANSMISSION
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
#endif`,kf=`#ifdef USE_TRANSMISSION
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
#endif`,Gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`;var Wf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qf=`uniform sampler2D t2D;
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
}`,Yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kf=`#include <common>
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
}`,Qf=`#if DEPTH_PACKING == 3200
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
}`,jf=`#define DISTANCE
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
}`,tp=`#define DISTANCE
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
}`,ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,np=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ip=`uniform float scale;
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
}`,sp=`uniform vec3 diffuse;
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
}`,rp=`#include <common>
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
}`,ap=`uniform vec3 diffuse;
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
}`,op=`#define LAMBERT
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
}`,lp=`#define LAMBERT
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
}`,cp=`#define MATCAP
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
}`,hp=`#define MATCAP
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
}`,up=`#define NORMAL
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
}`,dp=`#define NORMAL
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
}`,fp=`#define PHONG
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
}`,pp=`#define PHONG
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
}`,mp=`#define STANDARD
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
}`,gp=`#define STANDARD
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
}`,_p=`#define TOON
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
}`,xp=`#define TOON
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
}`,vp=`uniform float size;
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
}`,yp=`uniform vec3 diffuse;
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
}`,Sp=`#include <common>
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
}`,Mp=`uniform vec3 color;
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
}`,bp=`uniform float rotation;
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
}`,Ep=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:Wu,alphahash_pars_fragment:Xu,alphamap_fragment:qu,alphamap_pars_fragment:Yu,alphatest_fragment:Zu,alphatest_pars_fragment:Ju,aomap_fragment:$u,aomap_pars_fragment:Ku,batching_pars_vertex:Qu,batching_vertex:ju,begin_vertex:td,beginnormal_vertex:ed,bsdfs:nd,iridescence_fragment:id,bumpmap_pars_fragment:sd,clipping_planes_fragment:rd,clipping_planes_pars_fragment:ad,clipping_planes_pars_vertex:od,clipping_planes_vertex:ld,color_fragment:cd,color_pars_fragment:hd,color_pars_vertex:ud,color_vertex:dd,common:fd,cube_uv_reflection_fragment:pd,defaultnormal_vertex:md,displacementmap_pars_vertex:gd,displacementmap_vertex:_d,emissivemap_fragment:xd,emissivemap_pars_fragment:vd,colorspace_fragment:yd,colorspace_pars_fragment:Sd,envmap_fragment:Md,envmap_common_pars_fragment:bd,envmap_pars_fragment:Ed,envmap_pars_vertex:Td,envmap_physical_pars_fragment:Fd,envmap_vertex:wd,fog_vertex:Ad,fog_pars_vertex:Rd,fog_fragment:Cd,fog_pars_fragment:Id,gradientmap_pars_fragment:Pd,lightmap_pars_fragment:Ld,lights_lambert_fragment:Nd,lights_lambert_pars_fragment:Dd,lights_pars_begin:Ud,lights_toon_fragment:Od,lights_toon_pars_fragment:Bd,lights_phong_fragment:zd,lights_phong_pars_fragment:kd,lights_physical_fragment:Gd,lights_physical_pars_fragment:Hd,lights_fragment_begin:Vd,lights_fragment_maps:Wd,lights_fragment_end:Xd,lightprobes_pars_fragment:qd,logdepthbuf_fragment:Yd,logdepthbuf_pars_fragment:Zd,logdepthbuf_pars_vertex:Jd,logdepthbuf_vertex:$d,map_fragment:Kd,map_pars_fragment:Qd,map_particle_fragment:jd,map_particle_pars_fragment:tf,metalnessmap_fragment:ef,metalnessmap_pars_fragment:nf,morphinstance_vertex:sf,morphcolor_vertex:rf,morphnormal_vertex:af,morphtarget_pars_vertex:of,morphtarget_vertex:lf,normal_fragment_begin:cf,normal_fragment_maps:hf,normal_pars_fragment:uf,normal_pars_vertex:df,normal_vertex:ff,normalmap_pars_fragment:pf,clearcoat_normal_fragment_begin:mf,clearcoat_normal_fragment_maps:gf,clearcoat_pars_fragment:_f,iridescence_pars_fragment:xf,opaque_fragment:vf,packing:yf,premultiplied_alpha_fragment:Sf,project_vertex:Mf,dithering_fragment:bf,dithering_pars_fragment:Ef,roughnessmap_fragment:Tf,roughnessmap_pars_fragment:wf,shadowmap_pars_fragment:Af,shadowmap_pars_vertex:Rf,shadowmap_vertex:Cf,shadowmask_pars_fragment:If,skinbase_vertex:Pf,skinning_pars_vertex:Lf,skinning_vertex:Nf,skinnormal_vertex:Df,specularmap_fragment:Uf,specularmap_pars_fragment:Ff,tonemapping_fragment:Of,tonemapping_pars_fragment:Bf,transmission_fragment:zf,transmission_pars_fragment:kf,uv_pars_fragment:Gf,uv_pars_vertex:Hf,uv_vertex:Vf,worldpos_vertex:Wf,background_vert:Xf,background_frag:qf,backgroundCube_vert:Yf,backgroundCube_frag:Zf,cube_vert:Jf,cube_frag:$f,depth_vert:Kf,depth_frag:Qf,distance_vert:jf,distance_frag:tp,equirect_vert:ep,equirect_frag:np,linedashed_vert:ip,linedashed_frag:sp,meshbasic_vert:rp,meshbasic_frag:ap,meshlambert_vert:op,meshlambert_frag:lp,meshmatcap_vert:cp,meshmatcap_frag:hp,meshnormal_vert:up,meshnormal_frag:dp,meshphong_vert:fp,meshphong_frag:pp,meshphysical_vert:mp,meshphysical_frag:gp,meshtoon_vert:_p,meshtoon_frag:xp,points_vert:vp,points_frag:yp,shadow_vert:Sp,shadow_frag:Mp,sprite_vert:bp,sprite_frag:Ep},mt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new bt(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},dn={basic:{uniforms:Pe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Pe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new jt(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Pe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Pe([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Pe([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Pe([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Pe([mt.points,mt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Pe([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Pe([mt.common,mt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Pe([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Pe([mt.sprite,mt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:Pe([mt.common,mt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:Pe([mt.lights,mt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};dn.physical={uniforms:Pe([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var mr={r:0,b:0,g:0},Tp=new fe,ph=new Gt;ph.set(-1,0,0,0,1,0,0,0,1);function wp(t,e,n,i,s,r){let a=new jt(0),o=s===!0?0:1,l,c,u=null,p=0,h=null;function d(w){let T=w.isScene===!0?w.background:null;if(T&&T.isTexture){let v=w.backgroundBlurriness>0;T=e.get(T,v)}return T}function _(w){let T=!1,v=d(w);if(v===null)m(a,o);else if(v&&v.isColor)m(v,1),T=!0;let E=t.xr.getEnvironmentBlendMode();if(E==="additive")n.buffers.color.setClear(0,0,0,1,r);else if(E==="alpha-blend")n.buffers.color.setClear(0,0,0,0,r);if(t.autoClear||T)n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function y(w,T){let v=d(T);if(v&&(v.isCubeTexture||v.mapping===Ki)){if(c===void 0)c=new we(new Pi(1,1,1),new Je({name:"BackgroundCubeMaterial",uniforms:jn(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c);if(c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Tp.makeRotationFromEuler(T.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(ph);if(c.material.toneMapped=Qt.getTransfer(v.colorSpace)!==ce,u!==v||p!==v.version||h!==t.toneMapping)c.material.needsUpdate=!0,u=v,p=v.version,h=t.toneMapping;c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)}else if(v&&v.isTexture){if(l===void 0)l=new we(new os(2,2),new Je({name:"BackgroundMaterial",uniforms:jn(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l);if(l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(v.colorSpace)!==ce,v.matrixAutoUpdate===!0)v.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(v.matrix),u!==v||p!==v.version||h!==t.toneMapping)l.material.needsUpdate=!0,u=v,p=v.version,h=t.toneMapping;l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)}}function m(w,T){w.getRGB(mr,fo(t)),n.buffers.color.setClear(mr.r,mr.g,mr.b,T,r)}function f(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return a},setClearColor:function(w,T=1){a.set(w),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,m(a,o)},render:_,addToRenderList:y,dispose:f}}function Ap(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(D,F,Q,P,V){let K=!1,k=p(D,P,Q,F);if(r!==k)r=k,c(r.object);if(K=d(D,P,Q,V),K)_(D,P,Q,V);if(V!==null)e.update(V,t.ELEMENT_ARRAY_BUFFER);if(K||a){if(a=!1,v(D,F,Q,P),V!==null)t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer)}}function l(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function u(D){return t.deleteVertexArray(D)}function p(D,F,Q,P){let V=P.wireframe===!0,K=i[F.id];if(K===void 0)K={},i[F.id]=K;let k=D.isInstancedMesh===!0?D.id:0,st=K[k];if(st===void 0)st={},K[k]=st;let X=st[Q.id];if(X===void 0)X={},st[Q.id]=X;let J=X[V];if(J===void 0)J=h(l()),X[V]=J;return J}function h(D){let F=[],Q=[],P=[];for(let V=0;V<n;V++)F[V]=0,Q[V]=0,P[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Q,attributeDivisors:P,object:D,attributes:{},index:null}}function d(D,F,Q,P){let V=r.attributes,K=F.attributes,k=0,st=Q.getAttributes();for(let X in st)if(st[X].location>=0){let it=V[X],Dt=K[X];if(Dt===void 0){if(X==="instanceMatrix"&&D.instanceMatrix)Dt=D.instanceMatrix;if(X==="instanceColor"&&D.instanceColor)Dt=D.instanceColor}if(it===void 0)return!0;if(it.attribute!==Dt)return!0;if(Dt&&it.data!==Dt.data)return!0;k++}if(r.attributesNum!==k)return!0;if(r.index!==P)return!0;return!1}function _(D,F,Q,P){let V={},K=F.attributes,k=0,st=Q.getAttributes();for(let X in st)if(st[X].location>=0){let it=K[X];if(it===void 0){if(X==="instanceMatrix"&&D.instanceMatrix)it=D.instanceMatrix;if(X==="instanceColor"&&D.instanceColor)it=D.instanceColor}let Dt={};if(Dt.attribute=it,it&&it.data)Dt.data=it.data;V[X]=Dt,k++}r.attributes=V,r.attributesNum=k,r.index=P}function y(){let D=r.newAttributes;for(let F=0,Q=D.length;F<Q;F++)D[F]=0}function m(D){f(D,0)}function f(D,F){let Q=r.newAttributes,P=r.enabledAttributes,V=r.attributeDivisors;if(Q[D]=1,P[D]===0)t.enableVertexAttribArray(D),P[D]=1;if(V[D]!==F)t.vertexAttribDivisor(D,F),V[D]=F}function w(){let D=r.newAttributes,F=r.enabledAttributes;for(let Q=0,P=F.length;Q<P;Q++)if(F[Q]!==D[Q])t.disableVertexAttribArray(Q),F[Q]=0}function T(D,F,Q,P,V,K,k){if(k===!0)t.vertexAttribIPointer(D,F,Q,V,K);else t.vertexAttribPointer(D,F,Q,P,V,K)}function v(D,F,Q,P){y();let V=P.attributes,K=Q.getAttributes(),k=F.defaultAttributeValues;for(let st in K){let X=K[st];if(X.location>=0){let J=V[st];if(J===void 0){if(st==="instanceMatrix"&&D.instanceMatrix)J=D.instanceMatrix;if(st==="instanceColor"&&D.instanceColor)J=D.instanceColor}if(J!==void 0){let it=J.normalized,Dt=J.itemSize,Pt=e.get(J);if(Pt===void 0)continue;let{buffer:re,type:Wt,bytesPerElement:q}=Pt,rt=Wt===t.INT||Wt===t.UNSIGNED_INT||J.gpuType===fa;if(J.isInterleavedBufferAttribute){let lt=J.data,Lt=lt.stride,Ut=J.offset;if(lt.isInstancedInterleavedBuffer){for(let It=0;It<X.locationSize;It++)f(X.location+It,lt.meshPerAttribute);if(D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0)P._maxInstanceCount=lt.meshPerAttribute*lt.count}else for(let It=0;It<X.locationSize;It++)m(X.location+It);t.bindBuffer(t.ARRAY_BUFFER,re);for(let It=0;It<X.locationSize;It++)T(X.location+It,Dt/X.locationSize,Wt,it,Lt*q,(Ut+Dt/X.locationSize*It)*q,rt)}else{if(J.isInstancedBufferAttribute){for(let lt=0;lt<X.locationSize;lt++)f(X.location+lt,J.meshPerAttribute);if(D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0)P._maxInstanceCount=J.meshPerAttribute*J.count}else for(let lt=0;lt<X.locationSize;lt++)m(X.location+lt);t.bindBuffer(t.ARRAY_BUFFER,re);for(let lt=0;lt<X.locationSize;lt++)T(X.location+lt,Dt/X.locationSize,Wt,it,Dt*q,Dt/X.locationSize*lt*q,rt)}}else if(k!==void 0){let it=k[st];if(it!==void 0)switch(it.length){case 2:t.vertexAttrib2fv(X.location,it);break;case 3:t.vertexAttrib3fv(X.location,it);break;case 4:t.vertexAttrib4fv(X.location,it);break;default:t.vertexAttrib1fv(X.location,it)}}}}w()}function E(){b();for(let D in i){let F=i[D];for(let Q in F){let P=F[Q];for(let V in P){let K=P[V];for(let k in K)u(K[k].object),delete K[k];delete P[V]}}delete i[D]}}function A(D){if(i[D.id]===void 0)return;let F=i[D.id];for(let Q in F){let P=F[Q];for(let V in P){let K=P[V];for(let k in K)u(K[k].object),delete K[k];delete P[V]}}delete i[D.id]}function I(D){for(let F in i){let Q=i[F];for(let P in Q){let V=Q[P];if(V[D.id]===void 0)continue;let K=V[D.id];for(let k in K)u(K[k].object),delete K[k];delete V[D.id]}}}function S(D){for(let F in i){let Q=i[F],P=D.isInstancedMesh===!0?D.id:0,V=Q[P];if(V===void 0)continue;for(let K in V){let k=V[K];for(let st in k)u(k[st].object),delete k[st];delete V[K]}if(delete Q[P],Object.keys(Q).length===0)delete i[F]}}function b(){if(H(),a=!0,r===s)return;r=s,c(r.object)}function H(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:H,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:S,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:m,disableUnusedAttributes:w}}function Rp(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,u){if(u===0)return;t.drawArraysInstanced(i,l,c,u),n.update(c,i,u)}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];n.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Cp(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){if(I!==hn&&i.convert(I)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function o(I){let S=I===cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));if(I!==nn&&I!==Sn&&!S&&i.convert(I)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(I){if(I==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";I="mediump"}if(I==="mediump"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);if(u!==c)Ot("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u;let p=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");if(n.reversedDepthBuffer===!0&&h===!1)Ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),w=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),T=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:T,maxFragmentUniforms:v,maxSamples:E,samples:A}}function Ip(t){let e=this,n=null,i=0,s=!1,r=!1,a=new We,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){let d=p.length!==0||h||i!==0||s;return s=h,i=p.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,h){n=u(p,h,0)},this.setState=function(p,h,d){let{clippingPlanes:_,clipIntersection:y,clipShadows:m}=p,f=t.get(p);if(!s||_===null||_.length===0||r&&!m)if(r)u(null);else c();else{let w=r?0:i,T=w*4,v=f.clippingState||null;l.value=v,v=u(_,h,T,d);for(let E=0;E!==T;++E)v[E]=n[E];f.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function c(){if(l.value!==n)l.value=n,l.needsUpdate=i>0;e.numPlanes=i,e.numIntersection=0}function u(p,h,d,_){let y=p!==null?p.length:0,m=null;if(y!==0){if(m=l.value,_!==!0||m===null){let f=d+y*4,w=h.matrixWorldInverse;if(o.getNormalMatrix(w),m===null||m.length<f)m=new Float32Array(f);for(let T=0,v=d;T!==y;++T,v+=4)a.copy(p[T]).applyMatrix4(w,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var Ni=4,Pp=6,Lp=20,Np=256,ls=new fr,qc=new jt,No=null,Do=0,Uo=0,Fo=!1,Dp=new U,ii=new U;class zo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=0.1,i=100,s={}){let{size:r=256,position:a=Dp}=s;No=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel(),Fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let o=this._allocateTargets();if(o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o,a),e>0)this._blur(o,0,0,e);return this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=Jc(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=Zc(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(No,Do,Uo),this._renderer.xr.enabled=Fo,t.scissorTest=!1,Li(t,0,0,t.width,t.height)}_fromTexture(t,e){if(t.mapping===wi||t.mapping===Gn)this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width);else this._setSize(t.image.width/4);No=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel(),Fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Oe,minFilter:Oe,generateMipmaps:!1,type:cn,format:hn,colorSpace:$a,depthBuffer:!1},i=Yc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=Yc(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Up(s)),this._blurMaterial=Op(s,t,e),this._ggxMaterial=Fp(s,t,e)}return i}_compileMaterial(t){let e=new we(new Te,t);this._renderer.compile(e,ls)}_sceneToCubeUV(t,e,n,i,s){let o=new Ne(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,{autoClear:p,toneMapping:h}=u;if(u.getClearColor(qc),u.toneMapping=en,u.autoClear=!1,u.state.buffers.depth.getReversed())u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new we(new Pi,new Ii({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}));let _=this._backgroundBox,y=_.material,m=!1,f=t.background;if(f){if(f.isColor)y.color.copy(f),t.background=null,m=!0}else y.color.copy(qc),m=!0;for(let w=0;w<6;w++){let T=w%3;if(T===0)o.up.set(0,l[w],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x+c[w],s.y,s.z);else if(T===1)o.up.set(0,0,l[w]),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y+c[w],s.z);else o.up.set(0,l[w],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y,s.z+c[w]);let v=this._cubeSize;if(Li(i,T*v,w>2?v:0,v,v),u.setRenderTarget(i),m)u.render(_,o);u.render(t,o)}u.toneMapping=h,u.autoClear=p,t.background=f}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===wi||t.mapping===Gn;if(i){if(this._cubemapMaterial===null)this._cubemapMaterial=Jc();this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=Zc();let s=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;let a=s.uniforms;a.envMap.value=t;let o=this._cubeSize;Li(e,0,0,3*o,2*o),n.setRenderTarget(e),n.render(r,ls)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;let o=r.uniforms,l=n/(this._lodMeshes.length-1),c=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-c*c),p=l*1.25,h=u*p,{_lodMax:d}=this,_=this._sizeLods[n],y=3*_*(n>d-Ni?n-d+Ni:0),m=4*(this._cubeSize-_);o.envMap.value=t.texture,o.roughness.value=h,o.mipInt.value=d-e,Li(s,y,m,3*_,2*_),i.setRenderTarget(s),i.render(a,ls),o.envMap.value=s.texture,o.roughness.value=0,o.mipInt.value=d-n,Li(t,y,m,3*_,2*_),i.setRenderTarget(t),i.render(a,ls)}_blur(t,e,n,i){let s=this._pingPongRenderTarget,r=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,r),this._blurPass(s,t,n,n,r)}_blurPass(t,e,n,i,s){let r=this._renderer,a=this._blurMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let c=this._sizeLods[i],u=3*c*(i>this._lodMax-Ni?i-this._lodMax+Ni:0),p=4*(this._cubeSize-c);Li(e,u,p,3*c,2*c),r.setRenderTarget(e),r.render(o,ls)}}function Up(t){let e=[],n=[],i=t,s=t-Ni+1+Pp;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,h=6,d=3,_=new Float32Array(d*h*p),y=new Float32Array(d*h*p);for(let f=0;f<p;f++){let w=f%3*2/3-1,T=f>2?0:-1,v=[w,T,0,w+0.6666666666666666,T,0,w+0.6666666666666666,T+1,0,w,T,0,w+0.6666666666666666,T+1,0,w,T+1,0];_.set(v,d*h*f);for(let E=0;E<h;E++){let A=u[E*2]*2-1,I=u[E*2+1]*2-1;if(f===0)ii.set(1,I,A);else if(f===1)ii.set(-A,1,-I);else if(f===2)ii.set(-A,I,1);else if(f===3)ii.set(-1,I,-A);else if(f===4)ii.set(-A,-1,I);else ii.set(A,I,-1);ii.toArray(y,(f*h+E)*d)}}let m=new Te;if(m.setAttribute("position",new tn(_,d)),m.setAttribute("outputDirection",new tn(y,d)),n.push(new we(m,null)),i>Ni)i--}return{lodMeshes:n,sizeLods:e}}function Yc(t,e,n){let i=new Ge(t,e,n);return i.texture.mapping=Ki,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Li(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function Fp(t,e,n){return new Je({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Np,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_r(),fragmentShader:`

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
		`,blending:ln,depthTest:!1,depthWrite:!1})}function Op(t,e,n){return new Je({name:"SphericalGaussianBlur",defines:{SAMPLES:Lp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:_r(),fragmentShader:`

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
		`,blending:ln,depthTest:!1,depthWrite:!1})}function Zc(){return new Je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_r(),fragmentShader:`

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
		`,blending:ln,depthTest:!1,depthWrite:!1})}function Jc(){return new Je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_r(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function _r(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ho extends Ge{constructor(t=1,e={}){super(t,t,e);this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new rr(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Pi(5,5,5),s=new Je({name:"CubemapFromEquirect",uniforms:jn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:ln});s.uniforms.tEquirect.value=e;let r=new we(i,s),a=e.minFilter;if(e.minFilter===Hn)e.minFilter=Oe;return new Ao(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}function Bp(t){let e=new WeakMap,n=new WeakMap,i=null;function s(h,d=!1){if(h===null||h===void 0)return null;if(d)return a(h);return r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===Gs||d===Hs)if(e.has(h)){let _=e.get(h).texture;return o(_,h.mapping)}else{let _=h.image;if(_&&_.height>0){let y=new Ho(_.height);return y.fromEquirectangularTexture(t,h),e.set(h,y),h.addEventListener("dispose",c),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let d=h.mapping,_=d===Gs||d===Hs,y=d===wi||d===Gn;if(_||y){let m=n.get(h),f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f){if(i===null)i=new zo(t);return m=_?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),m.texture}else if(m!==void 0)return m.texture;else{let w=h.image;if(_&&w&&w.height>0||y&&w&&l(w)){if(i===null)i=new zo(t);return m=_?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),h.addEventListener("dispose",u),m.texture}else return null}}}return h}function o(h,d){if(d===Gs)h.mapping=wi;else if(d===Hs)h.mapping=Gn;return h}function l(h){let d=0,_=6;for(let y=0;y<_;y++)if(h[y]!==void 0)d++;return d===_}function c(h){let d=h.target;d.removeEventListener("dispose",c);let _=e.get(d);if(_!==void 0)e.delete(d),_.dispose()}function u(h){let d=h.target;d.removeEventListener("dispose",u);let _=n.get(d);if(_!==void 0)n.delete(d),_.dispose()}function p(){if(e=new WeakMap,n=new WeakMap,i!==null)i.dispose(),i=null}return{get:s,dispose:p}}function zp(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);if(s===null)zn("WebGLRenderer: "+i+" extension not supported.");return s}}}function kp(t,e,n,i){let s={},r=new WeakMap;function a(p){let h=p.target;if(h.index!==null)e.remove(h.index);for(let _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete s[h.id];let d=r.get(h);if(d)e.remove(d),r.delete(h);if(i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0)delete h._maxInstanceCount;n.memory.geometries--}function o(p,h){if(s[h.id]===!0)return h;return h.addEventListener("dispose",a),s[h.id]=!0,n.memory.geometries++,h}function l(p){let h=p.attributes;for(let d in h)e.update(h[d],t.ARRAY_BUFFER)}function c(p){let h=[],d=p.index,_=p.attributes.position,y=0;if(_===void 0)return;if(d!==null){let w=d.array;y=d.version;for(let T=0,v=w.length;T<v;T+=3){let E=w[T+0],A=w[T+1],I=w[T+2];h.push(E,A,A,I,I,E)}}else{let w=_.array;y=_.version;for(let T=0,v=w.length/3-1;T<v;T+=3){let E=T+0,A=T+1,I=T+2;h.push(E,A,A,I,I,E)}}let m=new(_.count>=65535?nr:er)(h,1);m.version=y;let f=r.get(p);if(f)e.remove(f);r.set(p,m)}function u(p){let h=r.get(p);if(h){let d=p.index;if(d!==null){if(h.version<d.version)c(p)}}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:u}}function Gp(t,e,n){let i;function s(p){i=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,h){t.drawElements(i,h,r,p*a),n.update(h,i,1)}function c(p,h,d){if(d===0)return;t.drawElementsInstanced(i,h,r,p*a,d),n.update(h,i,d)}function u(p,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,p,0,d);let y=0;for(let m=0;m<d;m++)y+=h[m];n.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Hp(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:Bt("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function Vp(t,e,n){let i=new WeakMap,s=new ge;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==p){let b=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",b)};if(h!==void 0)h.texture.dispose();let d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],T=0;if(d===!0)T=1;if(_===!0)T=2;if(y===!0)T=3;let v=o.attributes.position.count*T,E=1;if(v>e.maxTextureSize)E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize;let A=new Float32Array(v*E*4*p),I=new js(A,v,E,p);I.type=Sn,I.needsUpdate=!0;let S=T*4;for(let H=0;H<p;H++){let D=m[H],F=f[H],Q=w[H],P=v*E*4*H;for(let V=0;V<D.count;V++){let K=V*S;if(d===!0)s.fromBufferAttribute(D,V),A[P+K+0]=s.x,A[P+K+1]=s.y,A[P+K+2]=s.z,A[P+K+3]=0;if(_===!0)s.fromBufferAttribute(F,V),A[P+K+4]=s.x,A[P+K+5]=s.y,A[P+K+6]=s.z,A[P+K+7]=0;if(y===!0)s.fromBufferAttribute(Q,V),A[P+K+8]=s.x,A[P+K+9]=s.y,A[P+K+10]=s.z,A[P+K+11]=Q.itemSize===4?s.w:1}}h={count:p,texture:I,size:new bt(v,E)},i.set(o,h),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let _=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:r}}function Wp(t,e,n,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,p=c.geometry,h=e.get(c,p);if(r.get(h)!==u)e.update(h),r.set(h,u);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(r.get(c)!==u){if(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null)n.update(c.instanceColor,t.ARRAY_BUFFER);r.set(c,u)}}if(c.isSkinnedMesh){let d=c.skeleton;if(r.get(d)!==u)d.update(),r.set(d,u)}return h}function o(){r=new WeakMap}function l(c){let u=c.target;if(u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null)n.remove(u.instanceColor)}return{update:a,dispose:o}}var Xp={[aa]:"LINEAR_TONE_MAPPING",[oa]:"REINHARD_TONE_MAPPING",[la]:"CINEON_TONE_MAPPING",[ca]:"ACES_FILMIC_TONE_MAPPING",[ua]:"AGX_TONE_MAPPING",[da]:"NEUTRAL_TONE_MAPPING",[ha]:"CUSTOM_TONE_MAPPING"};function qp(t,e,n,i,s,r){let a=new Ge(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Te;c.setAttribute("position",new Se([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Se([0,2,0,0,2,0],2));let u=new po({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new we(c,u),h=new fr(-1,1,1,-1,0,1),d=null,_=null,y=!1,m,f=null,w=[],T=!1;this.setSize=function(v,E){if(a.setSize(v,E),o!==null)o.setSize(v,E);if(l!==null)l.setSize(v,E);for(let A=0;A<w.length;A++){let I=w[A];if(I.setSize)I.setSize(v,E)}},this.setEffects=function(v){w=v,T=w.length>0&&w[0].isRenderPass===!0;let{width:E,height:A}=a;if(w.length>0&&o===null)o=new Ge(E,A,{type:cn,depthBuffer:!1,stencilBuffer:!1}),l=new Ge(E,A,{type:cn,depthBuffer:!1,stencilBuffer:!1});for(let I=0;I<w.length;I++){let S=w[I];if(S.setSize)S.setSize(E,A)}},this.begin=function(v,E){if(y)return!1;if(v.toneMapping===en&&w.length===0)return!1;if(f=E,E!==null){let{width:A,height:I}=E;if(a.width!==A||a.height!==I)this.setSize(A,I)}if(T===!1)v.setRenderTarget(a);return m=v.toneMapping,v.toneMapping=en,!0},this.hasRenderPass=function(){return T},this.end=function(v,E){v.toneMapping=m,y=!0;let A=a,I=o;for(let S=0;S<w.length;S++){let b=w[S];if(b.enabled===!1)continue;if(b.render(v,I,A,E),b.needsSwap!==!1)A=I,I=I===o?l:o}if(d!==v.outputColorSpace||_!==v.toneMapping){if(d=v.outputColorSpace,_=v.toneMapping,u.defines={},Qt.getTransfer(d)===ce)u.defines.SRGB_TRANSFER="";let S=Xp[_];if(S)u.defines[S]="";u.needsUpdate=!0}u.uniforms.tDiffuse.value=A.texture,v.setRenderTarget(f),v.render(p,h),f=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){if(a.dispose(),o!==null)o.dispose();if(l!==null)l.dispose();c.dispose(),u.dispose()}}var mh=new Ie,ko=new Jn(1,1),gh=new js,_h=new io,xh=new rr,$c=[],Kc=[],Qc=new Float32Array(16),jc=new Float32Array(9),th=new Float32Array(4);function Di(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=$c[s];if(r===void 0)r=new Float32Array(s),$c[s]=r;if(e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function Me(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function be(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function xr(t,e){let n=Kc[e];if(n===void 0)n=new Int32Array(e),Kc[e]=n;for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Yp(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1f(this.addr,e),n[0]=e}function Zp(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Me(n,e))return;t.uniform2fv(this.addr,e),be(n,e)}}function Jp(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else if(e.r!==void 0){if(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b}else{if(Me(n,e))return;t.uniform3fv(this.addr,e),be(n,e)}}function $p(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Me(n,e))return;t.uniform4fv(this.addr,e),be(n,e)}}function Kp(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Me(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),be(n,e)}else{if(Me(n,i))return;th.set(i),t.uniformMatrix2fv(this.addr,!1,th),be(n,i)}}function Qp(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Me(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),be(n,e)}else{if(Me(n,i))return;jc.set(i),t.uniformMatrix3fv(this.addr,!1,jc),be(n,i)}}function jp(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Me(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),be(n,e)}else{if(Me(n,i))return;Qc.set(i),t.uniformMatrix4fv(this.addr,!1,Qc),be(n,i)}}function tm(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1i(this.addr,e),n[0]=e}function em(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Me(n,e))return;t.uniform2iv(this.addr,e),be(n,e)}}function nm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Me(n,e))return;t.uniform3iv(this.addr,e),be(n,e)}}function im(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Me(n,e))return;t.uniform4iv(this.addr,e),be(n,e)}}function sm(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1ui(this.addr,e),n[0]=e}function rm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Me(n,e))return;t.uniform2uiv(this.addr,e),be(n,e)}}function am(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Me(n,e))return;t.uniform3uiv(this.addr,e),be(n,e)}}function om(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Me(n,e))return;t.uniform4uiv(this.addr,e),be(n,e)}}function lm(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===t.SAMPLER_2D_SHADOW)ko.compareFunction=n.isReversedDepthBuffer()?Qs:Ks,r=ko;else r=mh;n.setTexture2D(e||r,s)}function cm(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(e||_h,s)}function hm(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTextureCube(e||xh,s)}function um(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(e||gh,s)}function dm(t){switch(t){case 5126:return Yp;case 35664:return Zp;case 35665:return Jp;case 35666:return $p;case 35674:return Kp;case 35675:return Qp;case 35676:return jp;case 5124:case 35670:return tm;case 35667:case 35671:return em;case 35668:case 35672:return nm;case 35669:case 35673:return im;case 5125:return sm;case 36294:return rm;case 36295:return am;case 36296:return om;case 35678:case 36198:case 36298:case 36306:case 35682:return lm;case 35679:case 36299:case 36307:return cm;case 35680:case 36300:case 36308:case 36293:return hm;case 36289:case 36303:case 36311:case 36292:return um}}function fm(t,e){t.uniform1fv(this.addr,e)}function pm(t,e){let n=Di(e,this.size,2);t.uniform2fv(this.addr,n)}function mm(t,e){let n=Di(e,this.size,3);t.uniform3fv(this.addr,n)}function gm(t,e){let n=Di(e,this.size,4);t.uniform4fv(this.addr,n)}function _m(t,e){let n=Di(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function xm(t,e){let n=Di(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function vm(t,e){let n=Di(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ym(t,e){t.uniform1iv(this.addr,e)}function Sm(t,e){t.uniform2iv(this.addr,e)}function Mm(t,e){t.uniform3iv(this.addr,e)}function bm(t,e){t.uniform4iv(this.addr,e)}function Em(t,e){t.uniform1uiv(this.addr,e)}function Tm(t,e){t.uniform2uiv(this.addr,e)}function wm(t,e){t.uniform3uiv(this.addr,e)}function Am(t,e){t.uniform4uiv(this.addr,e)}function Rm(t,e,n){let i=this.cache,s=e.length,r=xr(n,s);if(!Me(i,r))t.uniform1iv(this.addr,r),be(i,r);let a;if(this.type===t.SAMPLER_2D_SHADOW)a=ko;else a=mh;for(let o=0;o!==s;++o)n.setTexture2D(e[o]||a,r[o])}function Cm(t,e,n){let i=this.cache,s=e.length,r=xr(n,s);if(!Me(i,r))t.uniform1iv(this.addr,r),be(i,r);for(let a=0;a!==s;++a)n.setTexture3D(e[a]||_h,r[a])}function Im(t,e,n){let i=this.cache,s=e.length,r=xr(n,s);if(!Me(i,r))t.uniform1iv(this.addr,r),be(i,r);for(let a=0;a!==s;++a)n.setTextureCube(e[a]||xh,r[a])}function Pm(t,e,n){let i=this.cache,s=e.length,r=xr(n,s);if(!Me(i,r))t.uniform1iv(this.addr,r),be(i,r);for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||gh,r[a])}function Lm(t){switch(t){case 5126:return fm;case 35664:return pm;case 35665:return mm;case 35666:return gm;case 35674:return _m;case 35675:return xm;case 35676:return vm;case 5124:case 35670:return ym;case 35667:case 35671:return Sm;case 35668:case 35672:return Mm;case 35669:case 35673:return bm;case 5125:return Em;case 36294:return Tm;case 36295:return wm;case 36296:return Am;case 35678:case 36198:case 36298:case 36306:case 35682:return Rm;case 35679:case 36299:case 36307:return Cm;case 35680:case 36300:case 36308:case 36293:return Im;case 36289:case 36303:case 36311:case 36292:return Pm}}class vh{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=dm(e.type)}}class yh{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Lm(e.type)}}class Sh{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(t,e[a.id],n)}}}var Oo=/(\w+)(\])?(\[|\.)?/g;function eh(t,e){t.seq.push(e),t.map[e.id]=e}function Nm(t,e,n){let i=t.name,s=i.length;Oo.lastIndex=0;while(!0){let r=Oo.exec(i),a=Oo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l)o=o|0;if(c===void 0||c==="["&&a+2===s){eh(n,c===void 0?new vh(o,t,e):new yh(o,t,e));break}else{let p=n.map[o];if(p===void 0)p=new Sh(o),eh(n,p);n=p}}}class us{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=t.getActiveUniform(e,r),o=t.getUniformLocation(e,a.name);Nm(a,o,this)}let i=[],s=[];for(let r of this.seq)if(r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW)i.push(r);else s.push(r);if(i.length>0)this.seq=i.concat(s)}setValue(t,e,n,i){let s=this.map[e];if(s!==void 0)s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];if(i!==void 0)this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){let a=e[s],o=n[a.id];if(o.needsUpdate!==!1)a.setValue(t,o.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let r=t[i];if(r.id in e)n.push(r)}return n}}function nh(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var Dm=37297,Um=0;function Fm(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var ih=new Gt;function Om(t){Qt._getMatrix(ih,Qt.workingColorSpace,t);let e=`mat3( ${ih.elements.map((n)=>n.toFixed(4))} )`;switch(Qt.getTransfer(t)){case Ka:return[e,"LinearTransferOETF"];case ce:return[e,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function sh(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+Fm(t.getShaderSource(e),o)}else return r}function Bm(t,e){let n=Om(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var zm={[aa]:"Linear",[oa]:"Reinhard",[la]:"Cineon",[ca]:"ACESFilmic",[ua]:"AgX",[da]:"Neutral",[ha]:"Custom"};function km(t,e){let n=zm[e];if(n===void 0)return Ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var gr=new U;function Gm(){Qt.getLuminanceCoefficients(gr);let t=gr.x.toFixed(4),e=gr.y.toFixed(4),n=gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Hm(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function Vm(t){let e=[];for(let n in t){let i=t[n];if(i===!1)continue;e.push("#define "+n+" "+i)}return e.join(`
`)}function Wm(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),a=r.name,o=1;if(r.type===t.FLOAT_MAT2)o=2;if(r.type===t.FLOAT_MAT3)o=3;if(r.type===t.FLOAT_MAT4)o=4;n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function hs(t){return t!==""}function rh(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ah(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Xm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Go(t){return t.replace(Xm,Ym)}var qm=new Map;function Ym(t,e){let n=Yt[e];if(n===void 0){let i=qm.get(e);if(i!==void 0)n=Yt[i],Ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Go(n)}var Zm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oh(t){return t.replace(Zm,Jm)}function Jm(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lh(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`;return e}var $m={[Ji]:"SHADOWMAP_TYPE_PCF",[bi]:"SHADOWMAP_TYPE_VSM"};function Km(t){return $m[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Qm={[wi]:"ENVMAP_TYPE_CUBE",[Gn]:"ENVMAP_TYPE_CUBE",[Ki]:"ENVMAP_TYPE_CUBE_UV"};function jm(t){if(t.envMap===!1)return"ENVMAP_TYPE_CUBE";return Qm[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var tg={[Gn]:"ENVMAP_MODE_REFRACTION"};function eg(t){if(t.envMap===!1)return"ENVMAP_MODE_REFLECTION";return tg[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ng={[uc]:"ENVMAP_BLENDING_MULTIPLY",[dc]:"ENVMAP_BLENDING_MIX",[fc]:"ENVMAP_BLENDING_ADD"};function ig(t){if(t.envMap===!1)return"ENVMAP_BLENDING_NONE";return ng[t.combine]||"ENVMAP_BLENDING_NONE"}function sg(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function rg(t,e,n,i){let s=t.getContext(),{defines:r,vertexShader:a,fragmentShader:o}=n,l=Km(n),c=jm(n),u=eg(n),p=ig(n),h=sg(n),d=Hm(n),_=Vm(r),y=s.createProgram(),m,f,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(hs).join(`
`),m.length>0)m+=`
`;if(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(hs).join(`
`),f.length>0)f+=`
`}else m=[lh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),f=[lh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==en?"#define TONE_MAPPING":"",n.toneMapping!==en?Yt.tonemapping_pars_fragment:"",n.toneMapping!==en?km("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Bm("linearToOutputTexel",n.outputColorSpace),Gm(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(hs).join(`
`);if(a=Go(a),a=rh(a,n),a=ah(a,n),o=Go(o),o=rh(o,n),o=ah(o,n),a=oh(a),o=oh(o),n.isRawShaderMaterial!==!0)w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===Qa?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f;let T=w+m+a,v=w+f+o,E=nh(s,s.VERTEX_SHADER,T),A=nh(s,s.FRAGMENT_SHADER,v);if(s.attachShader(y,E),s.attachShader(y,A),n.index0AttributeName!==void 0)s.bindAttribLocation(y,0,n.index0AttributeName);else if(n.hasPositionAttribute===!0)s.bindAttribLocation(y,0,"position");s.linkProgram(y);function I(D){if(t.debug.checkShaderErrors){let F=s.getProgramInfoLog(y)||"",Q=s.getShaderInfoLog(E)||"",P=s.getShaderInfoLog(A)||"",V=F.trim(),K=Q.trim(),k=P.trim(),st=!0,X=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(st=!1,typeof t.debug.onShaderError==="function")t.debug.onShaderError(s,y,E,A);else{let J=sh(s,E,"vertex"),it=sh(s,A,"fragment");Bt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+J+`
`+it)}else if(V!=="")Ot("WebGLProgram: Program Info Log:",V);else if(K===""||k==="")X=!1;if(X)D.diagnostics={runnable:st,programLog:V,vertexShader:{log:K,prefix:m},fragmentShader:{log:k,prefix:f}}}s.deleteShader(E),s.deleteShader(A),S=new us(s,y),b=Wm(s,y)}let S;this.getUniforms=function(){if(S===void 0)I(this);return S};let b;this.getAttributes=function(){if(b===void 0)I(this);return b};let H=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(H===!1)H=s.getProgramParameter(y,Dm);return H},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Um++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=A,this}var ag=0;class Mh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);if(i.has(e)===!1)i.add(e),e.usedTimes++;if(i.has(n)===!1)i.add(n),n.usedTimes++;return this}remove(t){let e=this.materialCache.get(t);for(let n of e)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);if(n===void 0)n=new Set,e.set(t,n);return n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);if(n===void 0)n=new bh(t),e.set(t,n);return n}}class bh{constructor(t){this.id=ag++,this.code=t,this.usedTimes=0}}function og(t){return t===Xn||t===Js||t===$s}function lg(t,e,n,i,s,r){let a=new es,o=new Mh,l=new Set,c=[],u=new Map,{logarithmicDepthBuffer:p,precision:h}=i,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){if(l.add(S),S===0)return"uv";return`uv${S}`}function y(S,b,H,D,F,Q){let P=D.fog,V=F.geometry,K=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,k=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,st=e.get(S.envMap||K,k),X=!!st&&st.mapping===Ki?st.image.height:null,J=d[S.type];if(S.precision!==null){if(h=i.getMaxPrecision(S.precision),h!==S.precision)Ot("WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead.")}let it=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Dt=it!==void 0?it.length:0,Pt=0;if(V.morphAttributes.position!==void 0)Pt=1;if(V.morphAttributes.normal!==void 0)Pt=2;if(V.morphAttributes.color!==void 0)Pt=3;let re,Wt,q,rt;if(J){let he=dn[J];re=he.vertexShader,Wt=he.fragmentShader}else{re=S.vertexShader,Wt=S.fragmentShader;let he=o.getVertexShaderStage(S),ie=o.getFragmentShaderStage(S);o.update(S,he,ie),q=he.id,rt=ie.id}let lt=t.getRenderTarget(),Lt=t.state.buffers.depth.getReversed(),Ut=F.isInstancedMesh===!0,It=F.isBatchedMesh===!0,_e=!!S.map,Xt=!!S.matcap,Kt=!!st,ee=!!S.aoMap,nt=!!S.lightMap,dt=!!S.bumpMap&&S.wireframe===!1,tt=!!S.normalMap,At=!!S.displacementMap,Et=!!S.emissiveMap,ft=!!S.metalnessMap,R=!!S.roughnessMap,Vt=S.anisotropy>0,kt=S.clearcoat>0,zt=S.dispersion>0,M=S.retroreflectivity>0,g=S.iridescence>0,C=S.sheen>0,O=S.transmission>0,j=Vt&&!!S.anisotropyMap,at=kt&&!!S.clearcoatMap,ct=kt&&!!S.clearcoatNormalMap,W=kt&&!!S.clearcoatRoughnessMap,Z=g&&!!S.iridescenceMap,vt=g&&!!S.iridescenceThicknessMap,Ct=C&&!!S.sheenColorMap,pt=C&&!!S.sheenRoughnessMap,ot=!!S.specularMap,Nt=!!S.specularColorMap,Ft=!!S.specularIntensityMap,ne=O&&!!S.transmissionMap,N=O&&!!S.thicknessMap,ht=!!S.gradientMap,Y=!!S.alphaMap,ut=S.alphaTest>0,yt=!!S.alphaHash,et=!!S.extensions,gt=en;if(S.toneMapped){if(lt===null||lt.isXRRenderTarget===!0)gt=t.toneMapping}let Ht={shaderID:J,shaderType:S.type,shaderName:S.name,vertexShader:re,fragmentShader:Wt,defines:S.defines,customVertexShaderID:q,customFragmentShaderID:rt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:It,batchingColor:It&&F._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&F.instanceColor!==null,instancingMorph:Ut&&F.morphTexture!==null,outputColorSpace:lt===null?t.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Qt.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:_e,matcap:Xt,envMap:Kt,envMapMode:Kt&&st.mapping,envMapCubeUVHeight:X,aoMap:ee,lightMap:nt,bumpMap:dt,normalMap:tt,displacementMap:At,emissiveMap:Et,normalMapObjectSpace:tt&&S.normalMapType===Ec,normalMapTangentSpace:tt&&S.normalMapType===Ja,packedNormalMap:tt&&S.normalMapType===Ja&&og(S.normalMap.format),metalnessMap:ft,roughnessMap:R,anisotropy:Vt,anisotropyMap:j,clearcoat:kt,clearcoatMap:at,clearcoatNormalMap:ct,clearcoatRoughnessMap:W,dispersion:zt,retroreflection:M,iridescence:g,iridescenceMap:Z,iridescenceThicknessMap:vt,sheen:C,sheenColorMap:Ct,sheenRoughnessMap:pt,specularMap:ot,specularColorMap:Nt,specularIntensityMap:Ft,transmission:O,transmissionMap:ne,thicknessMap:N,gradientMap:ht,opaque:S.transparent===!1&&S.blending===$i&&S.alphaToCoverage===!1,alphaMap:Y,alphaTest:ut,alphaHash:yt,combine:S.combine,mapUv:_e&&_(S.map.channel),aoMapUv:ee&&_(S.aoMap.channel),lightMapUv:nt&&_(S.lightMap.channel),bumpMapUv:dt&&_(S.bumpMap.channel),normalMapUv:tt&&_(S.normalMap.channel),displacementMapUv:At&&_(S.displacementMap.channel),emissiveMapUv:Et&&_(S.emissiveMap.channel),metalnessMapUv:ft&&_(S.metalnessMap.channel),roughnessMapUv:R&&_(S.roughnessMap.channel),anisotropyMapUv:j&&_(S.anisotropyMap.channel),clearcoatMapUv:at&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ct&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:pt&&_(S.sheenRoughnessMap.channel),specularMapUv:ot&&_(S.specularMap.channel),specularColorMapUv:Nt&&_(S.specularColorMap.channel),specularIntensityMapUv:Ft&&_(S.specularIntensityMap.channel),transmissionMapUv:ne&&_(S.transmissionMap.channel),thicknessMapUv:N&&_(S.thicknessMap.channel),alphaMapUv:Y&&_(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(tt||Vt),vertexNormals:!!V.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(_e||Y),fog:!!P,useFog:S.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||V.attributes.normal===void 0&&tt===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Lt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Dt,morphTextureStride:Pt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:Q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&H.length>0,shadowMapType:t.shadowMap.type,toneMapping:gt,decodeVideoTexture:_e&&S.map.isVideoTexture===!0&&Qt.getTransfer(S.map.colorSpace)===ce,decodeVideoTextureEmissive:Et&&S.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(S.emissiveMap.colorSpace)===ce,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===qe,flipSided:S.side===Fe,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:et&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&S.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function m(S){let b=[];if(S.shaderID)b.push(S.shaderID);else b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID);if(S.defines!==void 0)for(let H in S.defines)b.push(H),b.push(S.defines[H]);if(S.isRawShaderMaterial===!1)f(b,S),w(b,S),b.push(t.outputColorSpace);return b.push(S.customProgramCacheKey),b.join()}function f(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numSunLights),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numSunLightShadows),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function w(S,b){if(a.disableAll(),b.instancing)a.enable(0);if(b.instancingColor)a.enable(1);if(b.instancingMorph)a.enable(2);if(b.matcap)a.enable(3);if(b.envMap)a.enable(4);if(b.normalMapObjectSpace)a.enable(5);if(b.normalMapTangentSpace)a.enable(6);if(b.clearcoat)a.enable(7);if(b.iridescence)a.enable(8);if(b.alphaTest)a.enable(9);if(b.vertexColors)a.enable(10);if(b.vertexAlphas)a.enable(11);if(b.vertexUv1s)a.enable(12);if(b.vertexUv2s)a.enable(13);if(b.vertexUv3s)a.enable(14);if(b.vertexTangents)a.enable(15);if(b.anisotropy)a.enable(16);if(b.alphaHash)a.enable(17);if(b.batching)a.enable(18);if(b.dispersion)a.enable(19);if(b.retroreflection)a.enable(24);if(b.batchingColor)a.enable(20);if(b.gradientMap)a.enable(21);if(b.packedNormalMap)a.enable(22);if(b.vertexNormals)a.enable(23);if(S.push(a.mask),a.disableAll(),b.fog)a.enable(0);if(b.useFog)a.enable(1);if(b.flatShading)a.enable(2);if(b.logarithmicDepthBuffer)a.enable(3);if(b.reversedDepthBuffer)a.enable(4);if(b.skinning)a.enable(5);if(b.morphTargets)a.enable(6);if(b.morphNormals)a.enable(7);if(b.morphColors)a.enable(8);if(b.premultipliedAlpha)a.enable(9);if(b.shadowMapEnabled)a.enable(10);if(b.doubleSided)a.enable(11);if(b.flipSided)a.enable(12);if(b.useDepthPacking)a.enable(13);if(b.dithering)a.enable(14);if(b.transmission)a.enable(15);if(b.sheen)a.enable(16);if(b.opaque)a.enable(17);if(b.pointsUvs)a.enable(18);if(b.decodeVideoTexture)a.enable(19);if(b.decodeVideoTextureEmissive)a.enable(20);if(b.alphaToCoverage)a.enable(21);if(b.numLightProbeGrids>0)a.enable(22);if(b.hasPositionAttribute)a.enable(23);S.push(a.mask)}function T(S){let b=d[S.type],H;if(b){let D=dn[b];H=Hc.clone(D.uniforms)}else H=S.uniforms;return H}function v(S,b){let H=u.get(b);if(H!==void 0)++H.usedTimes;else H=new rg(t,b,S,s),c.push(H),u.set(b,H);return H}function E(S){if(--S.usedTimes===0){let b=c.indexOf(S);c[b]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function A(S){o.remove(S)}function I(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:T,acquireProgram:v,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:I}}function cg(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);if(o===void 0)o={},t.set(a,o);return o}function i(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function hg(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.material.id!==e.material.id)return t.material.id-e.material.id;else if(t.materialVariant!==e.materialVariant)return t.materialVariant-e.materialVariant;else if(t.z!==e.z)return t.z-e.z;else return t.id-e.id}function ch(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.z!==e.z)return e.z-t.z;else return t.id-e.id}function hh(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(h){let d=0;if(h.isInstancedMesh)d+=2;if(h.isSkinnedMesh)d+=1;return d}function o(h,d,_,y,m,f){let w=t[e];if(w===void 0)w={id:h.id,object:h,geometry:d,material:_,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:f},t[e]=w;else w.id=h.id,w.object=h,w.geometry=d,w.material=_,w.materialVariant=a(h),w.groupOrder=y,w.renderOrder=h.renderOrder,w.z=m,w.group=f;return e++,w}function l(h,d,_,y,m,f,w){if(w.reversedDepth===!0)m=-m;let T=o(h,d,_,y,m,f);if(_.transmission>0)i.push(T);else if(_.transparent===!0)s.push(T);else n.push(T)}function c(h,d,_,y,m,f){let w=o(h,d,_,y,m,f);if(_.transmission>0)i.unshift(w);else if(_.transparent===!0)s.unshift(w);else n.unshift(w)}function u(h,d){if(n.length>1)n.sort(h||hg);if(i.length>1)i.sort(d||ch);if(s.length>1)s.sort(d||ch)}function p(){for(let h=e,d=t.length;h<d;h++){let _=t[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:p,sort:u}}function ug(){let t=new WeakMap;function e(i,s){let r=t.get(i),a;if(r===void 0)a=new hh,t.set(i,[a]);else if(s>=r.length)a=new hh,r.push(a);else a=r[s];return a}function n(){t=new WeakMap}return{get:e,dispose:n}}function dg(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new U,color:new jt};break;case"SpotLight":n={position:new U,direction:new U,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new jt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":n={color:new jt,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function fg(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1000};break}return t[e.id]=n,n}}}var pg=0;function mg(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function gg(t){let e=new dg,n=fg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);let s=new U,r=new fe,a=new fe;function o(c){let u=0,p=0,h=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let d=0,_=0,y=0,m=0,f=0,w=0,T=0,v=0,E=0,A=0,I=0,S=0,b=0,H=0;c.sort(mg);for(let F=0,Q=c.length;F<Q;F++){let P=c[F],{color:V,intensity:K,distance:k}=P,st=null;if(P.shadow&&P.shadow.map)if(P.shadow.map.texture.format===Xn)st=P.shadow.map.texture;else st=P.shadow.map.depthTexture||P.shadow.map.texture;if(P.isAmbientLight)u+=V.r*K,p+=V.g*K,h+=V.b*K;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],K);H++}else if(P.isSunLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let J=P.shadow,it=n.get(P);it.shadowIntensity=J.intensity,it.shadowBias=J.bias,it.shadowNormalBias=J.normalBias,it.shadowRadius=J.radius,it.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),i.sunShadow[_]=it,i.sunShadowMap[_]=st;let Dt=J.getViewportCount();for(let Pt=0;Pt<Dt;Pt++)i.sunShadowMatrix[y+Pt]=J.getMatrix(Pt),i.sunShadowCascade[y+Pt]=J._cascadeData[Pt];y+=Dt,_++}i.sun[d]=X,d++}else if(P.isDirectionalLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let J=P.shadow,it=n.get(P);it.shadowIntensity=J.intensity,it.shadowBias=J.bias,it.shadowNormalBias=J.normalBias,it.shadowRadius=J.radius,it.shadowMapSize=J.mapSize,i.directionalShadow[m]=it,i.directionalShadowMap[m]=st,i.directionalShadowMatrix[m]=P.shadow.matrix,E++}i.directional[m]=X,m++}else if(P.isSpotLight){let X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(V).multiplyScalar(K),X.distance=k,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[w]=X;let J=P.shadow;if(P.map){if(i.spotLightMap[S]=P.map,S++,J.updateMatrices(P),P.castShadow)b++}if(i.spotLightMatrix[w]=J.matrix,P.castShadow){let it=n.get(P);it.shadowIntensity=J.intensity,it.shadowBias=J.bias,it.shadowNormalBias=J.normalBias,it.shadowRadius=J.radius,it.shadowMapSize=J.mapSize,i.spotShadow[w]=it,i.spotShadowMap[w]=st,I++}w++}else if(P.isRectAreaLight){let X=e.get(P);X.color.copy(V).multiplyScalar(K),X.halfWidth.set(P.width*0.5,0,0),X.halfHeight.set(0,P.height*0.5,0),i.rectArea[T]=X,T++}else if(P.isPointLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){let J=P.shadow,it=n.get(P);it.shadowIntensity=J.intensity,it.shadowBias=J.bias,it.shadowNormalBias=J.normalBias,it.shadowRadius=J.radius,it.shadowMapSize=J.mapSize,it.shadowCameraNear=J.camera.near,it.shadowCameraFar=J.camera.far,i.pointShadow[f]=it,i.pointShadowMap[f]=st,i.pointShadowMatrix[f]=P.shadow.matrix,A++}i.point[f]=X,f++}else if(P.isHemisphereLight){let X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(K),X.groundColor.copy(P.groundColor).multiplyScalar(K),i.hemi[v]=X,v++}}if(T>0)if(t.has("OES_texture_float_linear")===!0)i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2;else i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2;i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=h;let D=i.hash;if(D.sunLength!==d||D.directionalLength!==m||D.pointLength!==f||D.spotLength!==w||D.rectAreaLength!==T||D.hemiLength!==v||D.numSunShadows!==_||D.numDirectionalShadows!==E||D.numPointShadows!==A||D.numSpotShadows!==I||D.numSpotMaps!==S||D.numLightProbes!==H)i.sun.length=d,i.directional.length=m,i.spot.length=w,i.rectArea.length=T,i.point.length=f,i.hemi.length=v,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=I,i.spotShadowMap.length=I,i.spotLightMatrix.length=I+S-b,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=H,D.sunLength=d,D.directionalLength=m,D.pointLength=f,D.spotLength=w,D.rectAreaLength=T,D.hemiLength=v,D.numSunShadows=_,D.numDirectionalShadows=E,D.numPointShadows=A,D.numSpotShadows=I,D.numSpotMaps=S,D.numLightProbes=H,i.version=pg++}function l(c,u){let p=0,h=0,d=0,_=0,y=0,m=0,f=u.matrixWorldInverse;for(let w=0,T=c.length;w<T;w++){let v=c[w];if(v.isSunLight){let E=i.sun[p];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(f),p++}else if(v.isDirectionalLight){let E=i.directional[h];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),h++}else if(v.isSpotLight){let E=i.spot[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),_++}else if(v.isRectAreaLight){let E=i.rectArea[y];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(f),a.identity(),r.copy(v.matrixWorld),r.premultiply(f),a.extractRotation(r),E.halfWidth.set(v.width*0.5,0,0),E.halfHeight.set(0,v.height*0.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let E=i.point[d];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(f),d++}else if(v.isHemisphereLight){let E=i.hemi[m];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:i}}function uh(t){let e=new gg(t),n=[],i=[],s=[];function r(h){p.camera=h,n.length=0,i.length=0,s.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(n)}function u(h){e.setupView(n,h)}let p={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function _g(t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),o;if(a===void 0)o=new uh(t),e.set(s,[o]);else if(r>=a.length)o=new uh(t),a.push(o);else o=a[r];return o}function i(){e=new WeakMap}return{get:n,dispose:i}}var xg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vg=`uniform sampler2D shadow_pass;
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
}`,yg=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Sg=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],dh=new fe,cs=new U,Bo=new U;function Mg(t,e,n){let i=new ir,s=new bt,r=new bt,a=new ge,o=new mo,l=new go,c={},u=n.maxTextureSize,p={[Ei]:Fe,[Fe]:Ei,[qe]:qe},h=new Je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:xg,fragmentShader:vg}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let _=new Te;_.setAttribute("position",new tn(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let y=new we(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ji;let f=this.type;this.render=function(A,I,S){if(m.enabled===!1)return;if(m.autoUpdate===!1&&m.needsUpdate===!1)return;if(A.length===0)return;if(this.type===Ol)Ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ji;let b=t.getRenderTarget(),H=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),F=t.state;if(F.setBlending(ln),F.buffers.depth.getReversed()===!0)F.buffers.color.setClear(0,0,0,0);else F.buffers.color.setClear(1,1,1,1);F.buffers.depth.setTest(!0),F.setScissorTest(!1);let Q=f!==this.type;if(Q)I.traverse(function(P){if(P.material)if(Array.isArray(P.material))P.material.forEach((V)=>V.needsUpdate=!0);else P.material.needsUpdate=!0});for(let P=0,V=A.length;P<V;P++){let K=A[P],k=K.shadow;if(k===void 0){Ot("WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let st=k.getFrameExtents();if(s.multiply(st),r.copy(k.mapSize),s.x>u||s.y>u){if(s.x>u)r.x=Math.floor(u/st.x),s.x=r.x*st.x,k.mapSize.x=r.x;if(s.y>u)r.y=Math.floor(u/st.y),s.y=r.y*st.y,k.mapSize.y=r.y}let X=t.state.buffers.depth.getReversed();if(k.camera._reversedDepth=X,k.map===null||Q===!0){if(k.map!==null){if(k.map.depthTexture!==null)k.map.depthTexture.dispose(),k.map.depthTexture=null;k.map.dispose()}if(this.type===bi){if(K.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Ge(s.x,s.y,{format:Xn,type:cn,minFilter:Oe,magFilter:Oe,generateMipmaps:!1}),k.map.texture.name=K.name+".shadowMap",k.map.depthTexture=new Jn(s.x,s.y,Sn),k.map.depthTexture.name=K.name+".shadowMapDepth",k.map.depthTexture.format=Vn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Pn,k.map.depthTexture.magFilter=Pn}else{if(K.isPointLight)k.map=new Ho(s.x),k.map.depthTexture=new ro(s.x,Ln);else k.map=new Ge(s.x,s.y),k.map.depthTexture=new Jn(s.x,s.y,Ln);if(k.map.depthTexture.name=K.name+".shadowMap",k.map.depthTexture.format=Vn,this.type===Ji)k.map.depthTexture.compareFunction=X?Qs:Ks,k.map.depthTexture.minFilter=Oe,k.map.depthTexture.magFilter=Oe;else k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Pn,k.map.depthTexture.magFilter=Pn}k.camera.updateProjectionMatrix()}if(k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y))k.map.setSize(s.x,s.y);let J=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();if(K.isPointLight!==!0)k.updateMatrices(K,S);for(let it=0;it<J;it++){let Dt=k.getCamera(it);if(K.isPointLight){let{camera:Pt,matrix:re}=k,Wt=K.distance||Pt.far;if(Wt!==Pt.far)Pt.far=Wt,Pt.updateProjectionMatrix();cs.setFromMatrixPosition(K.matrixWorld),Pt.position.copy(cs),Bo.copy(Pt.position),Bo.add(yg[it]),Pt.up.copy(Sg[it]),Pt.lookAt(Bo),Pt.updateMatrixWorld(),re.makeTranslation(-cs.x,-cs.y,-cs.z),dh.multiplyMatrices(Pt.projectionMatrix,Pt.matrixWorldInverse),k._frustum.setFromProjectionMatrix(dh,Pt.coordinateSystem,Pt.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)t.setRenderTarget(k.map,it),t.clear();else{if(it===0)t.setRenderTarget(k.map),t.clear();let Pt=k.getViewport(it);a.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),F.viewport(a)}i=k.getFrustum(it),v(I,S,Dt,K,this.type)}if(k.isPointLightShadow!==!0&&this.type===bi)w(k,S);k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(b,H,D)};function w(A,I){let S=e.update(y);if(h.defines.VSM_SAMPLES!==A.blurSamples)h.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0;if(A.mapPass===null)A.mapPass=new Ge(s.x,s.y,{format:Xn,type:cn});else if(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)A.mapPass.setSize(A.map.width,A.map.height);h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(I,null,S,h,y,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(I,null,S,d,y,null)}function T(A,I,S,b){let H=null,D=S.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)H=D;else if(H=S.isPointLight===!0?l:o,t.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let F=H.uuid,Q=I.uuid,P=c[F];if(P===void 0)P={},c[F]=P;let V=P[Q];if(V===void 0)V=H.clone(),P[Q]=V,I.addEventListener("dispose",E);H=V}if(H.visible=I.visible,H.wireframe=I.wireframe,b===bi)H.side=I.shadowSide!==null?I.shadowSide:I.side;else H.side=I.shadowSide!==null?I.shadowSide:p[I.side];if(H.alphaMap=I.alphaMap,H.alphaTest=I.alphaToCoverage===!0?0.5:I.alphaTest,H.map=I.map,H.clipShadows=I.clipShadows,H.clippingPlanes=I.clippingPlanes,H.clipIntersection=I.clipIntersection,H.displacementMap=I.displacementMap,H.displacementScale=I.displacementScale,H.displacementBias=I.displacementBias,H.wireframeLinewidth=I.wireframeLinewidth,H.linewidth=I.linewidth,S.isPointLight===!0&&H.isMeshDistanceMaterial===!0){let F=t.properties.get(H);F.light=S}return H}function v(A,I,S,b,H){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)){if((A.castShadow||A.receiveShadow&&H===bi)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,A.matrixWorld);let Q=e.update(A),P=A.material;if(Array.isArray(P)){let V=Q.groups;for(let K=0,k=V.length;K<k;K++){let st=V[K],X=P[st.materialIndex];if(X&&X.visible){let J=T(A,X,b,H);A.onBeforeShadow(t,A,I,S,Q,J,st),t.renderBufferDirect(S,null,Q,J,A,st),A.onAfterShadow(t,A,I,S,Q,J,st)}}}else if(P.visible){let V=T(A,P,b,H);A.onBeforeShadow(t,A,I,S,Q,V,null),t.renderBufferDirect(S,null,Q,V,A,null),A.onAfterShadow(t,A,I,S,Q,V,null)}}}let F=A.children;for(let Q=0,P=F.length;Q<P;Q++)v(F[Q],I,S,b,H)}function E(A){A.target.removeEventListener("dispose",E);for(let S in c){let b=c[S],H=A.target.uuid;if(H in b)b[H].dispose(),delete b[H]}}}function bg(t,e){function n(){let N=!1,ht=new ge,Y=null,ut=new ge(0,0,0,0);return{setMask:function(yt){if(Y!==yt&&!N)t.colorMask(yt,yt,yt,yt),Y=yt},setLocked:function(yt){N=yt},setClear:function(yt,et,gt,Ht,he){if(he===!0)yt*=Ht,et*=Ht,gt*=Ht;if(ht.set(yt,et,gt,Ht),ut.equals(ht)===!1)t.clearColor(yt,et,gt,Ht),ut.copy(ht)},reset:function(){N=!1,Y=null,ut.set(-1,0,0,0)}}}function i(){let N=!1,ht=!1,Y=null,ut=null,yt=null;return{setReversed:function(et){if(ht!==et){let gt=e.get("EXT_clip_control");if(et)gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT);else gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT);ht=et;let Ht=yt;yt=null,this.setClear(Ht)}},getReversed:function(){return ht},setTest:function(et){if(et)lt(t.DEPTH_TEST);else Lt(t.DEPTH_TEST)},setMask:function(et){if(Y!==et&&!N)t.depthMask(et),Y=et},setFunc:function(et){if(ht)et=Uc[et];if(ut!==et){switch(et){case sc:t.depthFunc(t.NEVER);break;case rc:t.depthFunc(t.ALWAYS);break;case ac:t.depthFunc(t.LESS);break;case ra:t.depthFunc(t.LEQUAL);break;case oc:t.depthFunc(t.EQUAL);break;case lc:t.depthFunc(t.GEQUAL);break;case cc:t.depthFunc(t.GREATER);break;case hc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ut=et}},setLocked:function(et){N=et},setClear:function(et){if(yt!==et){if(yt=et,ht)et=1-et;t.clearDepth(et)}},reset:function(){N=!1,Y=null,ut=null,yt=null,ht=!1}}}function s(){let N=!1,ht=null,Y=null,ut=null,yt=null,et=null,gt=null,Ht=null,he=null;return{setTest:function(ie){if(!N)if(ie)lt(t.STENCIL_TEST);else Lt(t.STENCIL_TEST)},setMask:function(ie){if(ht!==ie&&!N)t.stencilMask(ie),ht=ie},setFunc:function(ie,sn,pn){if(Y!==ie||ut!==sn||yt!==pn)t.stencilFunc(ie,sn,pn),Y=ie,ut=sn,yt=pn},setOp:function(ie,sn,pn){if(et!==ie||gt!==sn||Ht!==pn)t.stencilOp(ie,sn,pn),et=ie,gt=sn,Ht=pn},setLocked:function(ie){N=ie},setClear:function(ie){if(he!==ie)t.clearStencil(ie),he=ie},reset:function(){N=!1,ht=null,Y=null,ut=null,yt=null,et=null,gt=null,Ht=null,he=null}}}let r=new n,a=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},p={},h={},d=new WeakMap,_=[],y=null,m=!1,f=null,w=null,T=null,v=null,E=null,A=null,I=null,S=new jt(0,0,0),b=0,H=!1,D=null,F=null,Q=null,P=null,V=null,K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,st=0,X=t.getParameter(t.VERSION);if(X.indexOf("WebGL")!==-1)st=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=st>=1;else if(X.indexOf("OpenGL ES")!==-1)st=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=st>=2;let J=null,it={},Dt=t.getParameter(t.SCISSOR_BOX),Pt=t.getParameter(t.VIEWPORT),re=new ge().fromArray(Dt),Wt=new ge().fromArray(Pt);function q(N,ht,Y,ut){let yt=new Uint8Array(4),et=t.createTexture();t.bindTexture(N,et),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let gt=0;gt<Y;gt++)if(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)t.texImage3D(ht,0,t.RGBA,1,1,ut,0,t.RGBA,t.UNSIGNED_BYTE,yt);else t.texImage2D(ht+gt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,yt);return et}let rt={};rt[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),rt[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),rt[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(t.DEPTH_TEST),a.setFunc(ra),dt(!1),tt(ea),lt(t.CULL_FACE),ee(ln);function lt(N){if(u[N]!==!0)t.enable(N),u[N]=!0}function Lt(N){if(u[N]!==!1)t.disable(N),u[N]=!1}function Ut(N,ht){if(h[N]!==ht){if(t.bindFramebuffer(N,ht),h[N]=ht,N===t.DRAW_FRAMEBUFFER)h[t.FRAMEBUFFER]=ht;if(N===t.FRAMEBUFFER)h[t.DRAW_FRAMEBUFFER]=ht;return!0}return!1}function It(N,ht){let Y=_,ut=!1;if(N){if(Y=d.get(ht),Y===void 0)Y=[],d.set(ht,Y);let yt=N.textures;if(Y.length!==yt.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let et=0,gt=yt.length;et<gt;et++)Y[et]=t.COLOR_ATTACHMENT0+et;Y.length=yt.length,ut=!0}}else if(Y[0]!==t.BACK)Y[0]=t.BACK,ut=!0;if(ut)t.drawBuffers(Y)}function _e(N){if(y!==N)return t.useProgram(N),y=N,!0;return!1}let Xt={[Ti]:t.FUNC_ADD,[zl]:t.FUNC_SUBTRACT,[kl]:t.FUNC_REVERSE_SUBTRACT};Xt[Gl]=t.MIN,Xt[Hl]=t.MAX;let Kt={[Vl]:t.ZERO,[Wl]:t.ONE,[Xl]:t.SRC_COLOR,[Yl]:t.SRC_ALPHA,[jl]:t.SRC_ALPHA_SATURATE,[Kl]:t.DST_COLOR,[Jl]:t.DST_ALPHA,[ql]:t.ONE_MINUS_SRC_COLOR,[Zl]:t.ONE_MINUS_SRC_ALPHA,[Ql]:t.ONE_MINUS_DST_COLOR,[$l]:t.ONE_MINUS_DST_ALPHA,[tc]:t.CONSTANT_COLOR,[ec]:t.ONE_MINUS_CONSTANT_COLOR,[nc]:t.CONSTANT_ALPHA,[ic]:t.ONE_MINUS_CONSTANT_ALPHA};function ee(N,ht,Y,ut,yt,et,gt,Ht,he,ie){if(N===ln){if(m===!0)Lt(t.BLEND),m=!1;return}if(m===!1)lt(t.BLEND),m=!0;if(N!==Bl){if(N!==f||ie!==H){if(w!==Ti||E!==Ti)t.blendEquation(t.FUNC_ADD),w=Ti,E=Ti;if(ie)switch(N){case $i:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case na:t.blendFunc(t.ONE,t.ONE);break;case ia:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case sa:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Bt("WebGLState: Invalid blending: ",N);break}else switch(N){case $i:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case na:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case ia:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sa:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",N);break}T=null,v=null,A=null,I=null,S.set(0,0,0),b=0,f=N,H=ie}return}if(yt=yt||ht,et=et||Y,gt=gt||ut,ht!==w||yt!==E)t.blendEquationSeparate(Xt[ht],Xt[yt]),w=ht,E=yt;if(Y!==T||ut!==v||et!==A||gt!==I)t.blendFuncSeparate(Kt[Y],Kt[ut],Kt[et],Kt[gt]),T=Y,v=ut,A=et,I=gt;if(Ht.equals(S)===!1||he!==b)t.blendColor(Ht.r,Ht.g,Ht.b,he),S.copy(Ht),b=he;f=N,H=!1}function nt(N,ht){N.side===qe?Lt(t.CULL_FACE):lt(t.CULL_FACE);let Y=N.side===Fe;if(ht)Y=!Y;dt(Y),N.blending===$i&&N.transparent===!1?ee(ln):ee(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let ut=N.stencilWrite;if(o.setTest(ut),ut)o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass);Et(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?lt(t.SAMPLE_ALPHA_TO_COVERAGE):Lt(t.SAMPLE_ALPHA_TO_COVERAGE)}function dt(N){if(D!==N){if(N)t.frontFace(t.CW);else t.frontFace(t.CCW);D=N}}function tt(N){if(N!==Ul){if(lt(t.CULL_FACE),N!==F)if(N===ea)t.cullFace(t.BACK);else if(N===Fl)t.cullFace(t.FRONT);else t.cullFace(t.FRONT_AND_BACK)}else Lt(t.CULL_FACE);F=N}function At(N){if(N!==Q){if(k)t.lineWidth(N);Q=N}}function Et(N,ht,Y){if(N){if(lt(t.POLYGON_OFFSET_FILL),P!==ht||V!==Y){if(P=ht,V=Y,a.getReversed())ht=-ht;t.polygonOffset(ht,Y)}}else Lt(t.POLYGON_OFFSET_FILL)}function ft(N){if(N)lt(t.SCISSOR_TEST);else Lt(t.SCISSOR_TEST)}function R(N){if(N===void 0)N=t.TEXTURE0+K-1;if(J!==N)t.activeTexture(N),J=N}function Vt(N,ht,Y){if(Y===void 0)if(J===null)Y=t.TEXTURE0+K-1;else Y=J;let ut=it[Y];if(ut===void 0)ut={type:void 0,texture:void 0},it[Y]=ut;if(ut.type!==N||ut.texture!==ht){if(J!==Y)t.activeTexture(Y),J=Y;t.bindTexture(N,ht||rt[N]),ut.type=N,ut.texture=ht}}function kt(){let N=it[J];if(N!==void 0&&N.type!==void 0)t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0}function zt(){try{t.compressedTexImage2D(...arguments)}catch(N){Bt("WebGLState:",N)}}function M(){try{t.compressedTexImage3D(...arguments)}catch(N){Bt("WebGLState:",N)}}function g(){try{t.texSubImage2D(...arguments)}catch(N){Bt("WebGLState:",N)}}function C(){try{t.texSubImage3D(...arguments)}catch(N){Bt("WebGLState:",N)}}function O(){try{t.compressedTexSubImage2D(...arguments)}catch(N){Bt("WebGLState:",N)}}function j(){try{t.compressedTexSubImage3D(...arguments)}catch(N){Bt("WebGLState:",N)}}function at(){try{t.texStorage2D(...arguments)}catch(N){Bt("WebGLState:",N)}}function ct(){try{t.texStorage3D(...arguments)}catch(N){Bt("WebGLState:",N)}}function W(){try{t.texImage2D(...arguments)}catch(N){Bt("WebGLState:",N)}}function Z(){try{t.texImage3D(...arguments)}catch(N){Bt("WebGLState:",N)}}function vt(N){if(p[N]!==void 0)return p[N];else return t.getParameter(N)}function Ct(N,ht){if(p[N]!==ht)t.pixelStorei(N,ht),p[N]=ht}function pt(N){if(re.equals(N)===!1)t.scissor(N.x,N.y,N.z,N.w),re.copy(N)}function ot(N){if(Wt.equals(N)===!1)t.viewport(N.x,N.y,N.z,N.w),Wt.copy(N)}function Nt(N,ht){let Y=c.get(ht);if(Y===void 0)Y=new WeakMap,c.set(ht,Y);let ut=Y.get(N);if(ut===void 0)ut=t.getUniformBlockIndex(ht,N.name),Y.set(N,ut)}function Ft(N,ht){let ut=c.get(ht).get(N);if(l.get(ht)!==ut)t.uniformBlockBinding(ht,ut,N.__bindingPointIndex),l.set(ht,ut)}function ne(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},p={},J=null,it={},h={},d=new WeakMap,_=[],y=null,m=!1,f=null,w=null,T=null,v=null,E=null,A=null,I=null,S=new jt(0,0,0),b=0,H=!1,D=null,F=null,Q=null,P=null,V=null,re.set(0,0,t.canvas.width,t.canvas.height),Wt.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:lt,disable:Lt,bindFramebuffer:Ut,drawBuffers:It,useProgram:_e,setBlending:ee,setMaterial:nt,setFlipSided:dt,setCullFace:tt,setLineWidth:At,setPolygonOffset:Et,setScissorTest:ft,activeTexture:R,bindTexture:Vt,unbindTexture:kt,compressedTexImage2D:zt,compressedTexImage3D:M,texImage2D:W,texImage3D:Z,pixelStorei:Ct,getParameter:vt,updateUBOMapping:Nt,uniformBlockBinding:Ft,texStorage2D:at,texStorage3D:ct,texSubImage2D:g,texSubImage3D:C,compressedTexSubImage2D:O,compressedTexSubImage3D:j,scissor:pt,viewport:ot,reset:ne}}function Eg(t,e,n,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new bt,u=new WeakMap,p=new Set,h,d=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(M){}function y(M,g){return _?new OffscreenCanvas(M,g):Xi("canvas")}function m(M,g,C){let O=1,j=zt(M);if(j.width>C||j.height>C)O=C/Math.max(j.width,j.height);if(O<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let at=Math.floor(O*j.width),ct=Math.floor(O*j.height);if(h===void 0)h=y(at,ct);let W=g?y(at,ct):h;return W.width=at,W.height=ct,W.getContext("2d").drawImage(M,0,0,at,ct),Ot("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+at+"x"+ct+")."),W}else{if("data"in M)Ot("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+").");return M}return M}function f(M){return M.generateMipmaps}function w(M){t.generateMipmap(M)}function T(M){if(M.isWebGLCubeRenderTarget)return t.TEXTURE_CUBE_MAP;if(M.isWebGL3DRenderTarget)return t.TEXTURE_3D;if(M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture)return t.TEXTURE_2D_ARRAY;return t.TEXTURE_2D}function v(M,g,C,O,j,at=!1){if(M!==null){if(t[M]!==void 0)return t[M];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ct;if(O){if(ct=e.get("EXT_texture_norm16"),!ct)Ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let W=g;if(g===t.RED){if(C===t.FLOAT)W=t.R32F;if(C===t.HALF_FLOAT)W=t.R16F;if(C===t.UNSIGNED_BYTE)W=t.R8;if(C===t.UNSIGNED_SHORT&&ct)W=ct.R16_EXT;if(C===t.SHORT&&ct)W=ct.R16_SNORM_EXT}if(g===t.RED_INTEGER){if(C===t.UNSIGNED_BYTE)W=t.R8UI;if(C===t.UNSIGNED_SHORT)W=t.R16UI;if(C===t.UNSIGNED_INT)W=t.R32UI;if(C===t.BYTE)W=t.R8I;if(C===t.SHORT)W=t.R16I;if(C===t.INT)W=t.R32I}if(g===t.RG){if(C===t.FLOAT)W=t.RG32F;if(C===t.HALF_FLOAT)W=t.RG16F;if(C===t.UNSIGNED_BYTE)W=t.RG8;if(C===t.UNSIGNED_SHORT&&ct)W=ct.RG16_EXT;if(C===t.SHORT&&ct)W=ct.RG16_SNORM_EXT}if(g===t.RG_INTEGER){if(C===t.UNSIGNED_BYTE)W=t.RG8UI;if(C===t.UNSIGNED_SHORT)W=t.RG16UI;if(C===t.UNSIGNED_INT)W=t.RG32UI;if(C===t.BYTE)W=t.RG8I;if(C===t.SHORT)W=t.RG16I;if(C===t.INT)W=t.RG32I}if(g===t.RGB_INTEGER){if(C===t.UNSIGNED_BYTE)W=t.RGB8UI;if(C===t.UNSIGNED_SHORT)W=t.RGB16UI;if(C===t.UNSIGNED_INT)W=t.RGB32UI;if(C===t.BYTE)W=t.RGB8I;if(C===t.SHORT)W=t.RGB16I;if(C===t.INT)W=t.RGB32I}if(g===t.RGBA_INTEGER){if(C===t.UNSIGNED_BYTE)W=t.RGBA8UI;if(C===t.UNSIGNED_SHORT)W=t.RGBA16UI;if(C===t.UNSIGNED_INT)W=t.RGBA32UI;if(C===t.BYTE)W=t.RGBA8I;if(C===t.SHORT)W=t.RGBA16I;if(C===t.INT)W=t.RGBA32I}if(g===t.RGB){if(C===t.UNSIGNED_SHORT&&ct)W=ct.RGB16_EXT;if(C===t.SHORT&&ct)W=ct.RGB16_SNORM_EXT;if(C===t.UNSIGNED_INT_5_9_9_9_REV)W=t.RGB9_E5;if(C===t.UNSIGNED_INT_10F_11F_11F_REV)W=t.R11F_G11F_B10F}if(g===t.RGBA){let Z=at?Ka:Qt.getTransfer(j);if(C===t.FLOAT)W=t.RGBA32F;if(C===t.HALF_FLOAT)W=t.RGBA16F;if(C===t.UNSIGNED_BYTE)W=Z===ce?t.SRGB8_ALPHA8:t.RGBA8;if(C===t.UNSIGNED_SHORT&&ct)W=ct.RGBA16_EXT;if(C===t.SHORT&&ct)W=ct.RGBA16_SNORM_EXT;if(C===t.UNSIGNED_SHORT_4_4_4_4)W=t.RGBA4;if(C===t.UNSIGNED_SHORT_5_5_5_1)W=t.RGB5_A1}if(W===t.R16F||W===t.R32F||W===t.RG16F||W===t.RG32F||W===t.RGBA16F||W===t.RGBA32F)e.get("EXT_color_buffer_float");return W}function E(M,g){let C;if(M){if(g===null||g===Ln||g===Ai)C=t.DEPTH24_STENCIL8;else if(g===Sn)C=t.DEPTH32F_STENCIL8;else if(g===ji)C=t.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(g===null||g===Ln||g===Ai)C=t.DEPTH_COMPONENT24;else if(g===Sn)C=t.DEPTH_COMPONENT32F;else if(g===ji)C=t.DEPTH_COMPONENT16;return C}function A(M,g){if(f(M)===!0||M.isFramebufferTexture&&M.minFilter!==Pn&&M.minFilter!==Oe)return Math.log2(Math.max(g.width,g.height))+1;else if(M.mipmaps!==void 0&&M.mipmaps.length>0)return M.mipmaps.length;else if(M.isCompressedTexture&&Array.isArray(M.image))return g.mipmaps.length;else return 1}function I(M){let g=M.target;if(g.removeEventListener("dispose",I),b(g),g.isVideoTexture)u.delete(g);if(g.isHTMLTexture)p.delete(g)}function S(M){let g=M.target;g.removeEventListener("dispose",S),D(g)}function b(M){let g=i.get(M);if(g.__webglInit===void 0)return;let C=M.source,O=d.get(C);if(O){let j=O[g.__cacheKey];if(j.usedTimes--,j.usedTimes===0)H(M);if(Object.keys(O).length===0)d.delete(C)}i.remove(M)}function H(M){let g=i.get(M);t.deleteTexture(g.__webglTexture);let C=M.source,O=d.get(C);delete O[g.__cacheKey],a.memory.textures--}function D(M){let g=i.get(M);if(M.depthTexture)M.depthTexture.dispose(),i.remove(M.depthTexture);if(M.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(g.__webglFramebuffer[O]))for(let j=0;j<g.__webglFramebuffer[O].length;j++)t.deleteFramebuffer(g.__webglFramebuffer[O][j]);else t.deleteFramebuffer(g.__webglFramebuffer[O]);if(g.__webglDepthbuffer)t.deleteRenderbuffer(g.__webglDepthbuffer[O])}else{if(Array.isArray(g.__webglFramebuffer))for(let O=0;O<g.__webglFramebuffer.length;O++)t.deleteFramebuffer(g.__webglFramebuffer[O]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer)t.deleteRenderbuffer(g.__webglDepthbuffer);if(g.__webglMultisampledFramebuffer)t.deleteFramebuffer(g.__webglMultisampledFramebuffer);if(g.__webglColorRenderbuffer){for(let O=0;O<g.__webglColorRenderbuffer.length;O++)if(g.__webglColorRenderbuffer[O])t.deleteRenderbuffer(g.__webglColorRenderbuffer[O])}if(g.__webglDepthRenderbuffer)t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let C=M.textures;for(let O=0,j=C.length;O<j;O++){let at=i.get(C[O]);if(at.__webglTexture)t.deleteTexture(at.__webglTexture),a.memory.textures--;i.remove(C[O])}i.remove(M)}let F=0;function Q(){F=0}function P(){return F}function V(M){F=M}function K(){let M=F;if(M>=s.maxTextures)Ot("WebGLTextures: Trying to use "+(M+1)+" texture units while this GPU supports only "+s.maxTextures);return F+=1,M}function k(M){let g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function st(M,g){let C=i.get(M);if(M.isVideoTexture)Vt(M);if(M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&C.__version!==M.version){let O=M.image;if(O===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{Lt(C,M,g);return}}else if(M.isExternalTexture)C.__webglTexture=M.sourceTexture?M.sourceTexture:null;n.bindTexture(t.TEXTURE_2D,C.__webglTexture,t.TEXTURE0+g)}function X(M,g){let C=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&C.__version!==M.version){Lt(C,M,g);return}else if(M.isExternalTexture)C.__webglTexture=M.sourceTexture?M.sourceTexture:null;n.bindTexture(t.TEXTURE_2D_ARRAY,C.__webglTexture,t.TEXTURE0+g)}function J(M,g){let C=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&C.__version!==M.version){Lt(C,M,g);return}n.bindTexture(t.TEXTURE_3D,C.__webglTexture,t.TEXTURE0+g)}function it(M,g){let C=i.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&C.__version!==M.version){Ut(C,M,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+g)}let Dt={[pc]:t.REPEAT,[Vs]:t.CLAMP_TO_EDGE,[mc]:t.MIRRORED_REPEAT},Pt={[Pn]:t.NEAREST,[gc]:t.NEAREST_MIPMAP_NEAREST,[Qi]:t.NEAREST_MIPMAP_LINEAR,[Oe]:t.LINEAR,[Ws]:t.LINEAR_MIPMAP_NEAREST,[Hn]:t.LINEAR_MIPMAP_LINEAR},re={[wc]:t.NEVER,[Pc]:t.ALWAYS,[Ac]:t.LESS,[Ks]:t.LEQUAL,[Rc]:t.EQUAL,[Qs]:t.GEQUAL,[Cc]:t.GREATER,[Ic]:t.NOTEQUAL};function Wt(M,g){if(g.type===Sn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Oe||g.magFilter===Ws||g.magFilter===Qi||g.magFilter===Hn||g.minFilter===Oe||g.minFilter===Ws||g.minFilter===Qi||g.minFilter===Hn))Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(t.texParameteri(M,t.TEXTURE_WRAP_S,Dt[g.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,Dt[g.wrapT]),M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)t.texParameteri(M,t.TEXTURE_WRAP_R,Dt[g.wrapR]);if(t.texParameteri(M,t.TEXTURE_MAG_FILTER,Pt[g.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,Pt[g.minFilter]),g.compareFunction)t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,re[g.compareFunction]);if(e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Pn)return;if(g.minFilter!==Qi&&g.minFilter!==Hn)return;if(g.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){let C=e.get("EXT_texture_filter_anisotropic");t.texParameterf(M,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function q(M,g){let C=!1;if(M.__webglInit===void 0)M.__webglInit=!0,g.addEventListener("dispose",I);let O=g.source,j=d.get(O);if(j===void 0)j={},d.set(O,j);let at=k(g);if(at!==M.__cacheKey){if(j[at]===void 0)j[at]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,C=!0;j[at].usedTimes++;let ct=j[M.__cacheKey];if(ct!==void 0){if(j[M.__cacheKey].usedTimes--,ct.usedTimes===0)H(g)}M.__cacheKey=at,M.__webglTexture=j[at].texture}return C}function rt(M,g,C){return Math.floor(Math.floor(M/C)/g)}function lt(M,g,C,O){let at=M.updateRanges;if(at.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,C,O,g.data);else{at.sort((Ct,pt)=>Ct.start-pt.start);let ct=0;for(let Ct=1;Ct<at.length;Ct++){let pt=at[ct],ot=at[Ct],Nt=pt.start+pt.count,Ft=rt(ot.start,g.width,4),ne=rt(pt.start,g.width,4);if(ot.start<=Nt+1&&Ft===ne&&rt(ot.start+ot.count-1,g.width,4)===Ft)pt.count=Math.max(pt.count,ot.start+ot.count-pt.start);else++ct,at[ct]=ot}at.length=ct+1;let W=n.getParameter(t.UNPACK_ROW_LENGTH),Z=n.getParameter(t.UNPACK_SKIP_PIXELS),vt=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let Ct=0,pt=at.length;Ct<pt;Ct++){let ot=at[Ct],Nt=Math.floor(ot.start/4),Ft=Math.ceil(ot.count/4),ne=Nt%g.width,N=Math.floor(Nt/g.width),ht=Ft,Y=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ne),n.pixelStorei(t.UNPACK_SKIP_ROWS,N),n.texSubImage2D(t.TEXTURE_2D,0,ne,N,ht,1,C,O,g.data)}M.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,W),n.pixelStorei(t.UNPACK_SKIP_PIXELS,Z),n.pixelStorei(t.UNPACK_SKIP_ROWS,vt)}}function Lt(M,g,C){let O=t.TEXTURE_2D;if(g.isDataArrayTexture||g.isCompressedArrayTexture)O=t.TEXTURE_2D_ARRAY;if(g.isData3DTexture)O=t.TEXTURE_3D;let j=q(M,g),at=g.source;n.bindTexture(O,M.__webglTexture,t.TEXTURE0+C);let ct=i.get(at);if(at.version!==ct.__version||j===!0){if(n.activeTexture(t.TEXTURE0+C),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let Y=Qt.getPrimaries(Qt.workingColorSpace),ut=g.colorSpace===qn?null:Qt.getPrimaries(g.colorSpace),yt=g.colorSpace===qn||Y===ut?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt)}n.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment);let Z=m(g.image,!1,s.maxTextureSize);Z=kt(g,Z);let vt=r.convert(g.format,g.colorSpace),Ct=r.convert(g.type),pt=v(g.internalFormat,vt,Ct,g.normalized,g.colorSpace,g.isVideoTexture);Wt(O,g);let ot,Nt=g.mipmaps,Ft=g.isVideoTexture!==!0,ne=ct.__version===void 0||j===!0,N=at.dataReady,ht=A(g,Z);if(g.isDepthTexture){if(pt=E(g.format===Wn,g.type),ne)if(Ft)n.texStorage2D(t.TEXTURE_2D,1,pt,Z.width,Z.height);else n.texImage2D(t.TEXTURE_2D,0,pt,Z.width,Z.height,0,vt,Ct,null)}else if(g.isDataTexture)if(Nt.length>0){if(Ft&&ne)n.texStorage2D(t.TEXTURE_2D,ht,pt,Nt[0].width,Nt[0].height);for(let Y=0,ut=Nt.length;Y<ut;Y++)if(ot=Nt[Y],Ft){if(N)n.texSubImage2D(t.TEXTURE_2D,Y,0,0,ot.width,ot.height,vt,Ct,ot.data)}else n.texImage2D(t.TEXTURE_2D,Y,pt,ot.width,ot.height,0,vt,Ct,ot.data);g.generateMipmaps=!1}else if(Ft){if(ne)n.texStorage2D(t.TEXTURE_2D,ht,pt,Z.width,Z.height);if(N)lt(g,Z,vt,Ct)}else n.texImage2D(t.TEXTURE_2D,0,pt,Z.width,Z.height,0,vt,Ct,Z.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){if(Ft&&ne)n.texStorage3D(t.TEXTURE_2D_ARRAY,ht,pt,Nt[0].width,Nt[0].height,Z.depth);for(let Y=0,ut=Nt.length;Y<ut;Y++)if(ot=Nt[Y],g.format!==hn)if(vt!==null)if(Ft){if(N)if(g.layerUpdates.size>0){let yt=Lo(ot.width,ot.height,g.format,g.type);for(let et of g.layerUpdates){let gt=ot.data.subarray(et*yt/ot.data.BYTES_PER_ELEMENT,(et+1)*yt/ot.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,et,ot.width,ot.height,1,vt,gt)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,ot.width,ot.height,Z.depth,vt,ot.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,pt,ot.width,ot.height,Z.depth,0,ot.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Ft){if(N)n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,ot.width,ot.height,Z.depth,vt,Ct,ot.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,Y,pt,ot.width,ot.height,Z.depth,0,vt,Ct,ot.data);if(g.layerUpdates.size>0)g.clearLayerUpdates()}else{if(Ft&&ne)n.texStorage2D(t.TEXTURE_2D,ht,pt,Nt[0].width,Nt[0].height);for(let Y=0,ut=Nt.length;Y<ut;Y++)if(ot=Nt[Y],g.format!==hn)if(vt!==null)if(Ft){if(N)n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,ot.width,ot.height,vt,ot.data)}else n.compressedTexImage2D(t.TEXTURE_2D,Y,pt,ot.width,ot.height,0,ot.data);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Ft){if(N)n.texSubImage2D(t.TEXTURE_2D,Y,0,0,ot.width,ot.height,vt,Ct,ot.data)}else n.texImage2D(t.TEXTURE_2D,Y,pt,ot.width,ot.height,0,vt,Ct,ot.data)}else if(g.isDataArrayTexture)if(Ft){if(ne)n.texStorage3D(t.TEXTURE_2D_ARRAY,ht,pt,Z.width,Z.height,Z.depth);if(N)if(g.layerUpdates.size>0){let Y=Lo(Z.width,Z.height,g.format,g.type);for(let ut of g.layerUpdates){let yt=Z.data.subarray(ut*Y/Z.data.BYTES_PER_ELEMENT,(ut+1)*Y/Z.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ut,Z.width,Z.height,1,vt,Ct,yt)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,vt,Ct,Z.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,pt,Z.width,Z.height,Z.depth,0,vt,Ct,Z.data);else if(g.isData3DTexture)if(Ft){if(ne)n.texStorage3D(t.TEXTURE_3D,ht,pt,Z.width,Z.height,Z.depth);if(N)n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,vt,Ct,Z.data)}else n.texImage3D(t.TEXTURE_3D,0,pt,Z.width,Z.height,Z.depth,0,vt,Ct,Z.data);else if(g.isFramebufferTexture){if(ne)if(Ft)n.texStorage2D(t.TEXTURE_2D,ht,pt,Z.width,Z.height);else{let Y=Z.width,ut=Z.height;for(let yt=0;yt<ht;yt++)n.texImage2D(t.TEXTURE_2D,yt,pt,Y,ut,0,vt,Ct,null),Y>>=1,ut>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in t){let Y=t.canvas;if(!Y.hasAttribute("layoutsubtree"))Y.setAttribute("layoutsubtree","true");if(Z.parentNode!==Y){Y.appendChild(Z),p.add(g),Y.onpaint=(ut)=>{let yt=ut.changedElements;for(let et of p)if(yt.includes(et.image))et.needsUpdate=!0},Y.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,Z);else{let{RGBA:yt,RGBA:et,UNSIGNED_BYTE:gt}=t;t.texElementImage2D(t.TEXTURE_2D,0,yt,et,gt,Z)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Nt.length>0){if(Ft&&ne){let Y=zt(Nt[0]);n.texStorage2D(t.TEXTURE_2D,ht,pt,Y.width,Y.height)}for(let Y=0,ut=Nt.length;Y<ut;Y++)if(ot=Nt[Y],Ft){if(N)n.texSubImage2D(t.TEXTURE_2D,Y,0,0,vt,Ct,ot)}else n.texImage2D(t.TEXTURE_2D,Y,pt,vt,Ct,ot);g.generateMipmaps=!1}else if(Ft){if(ne){let Y=zt(Z);n.texStorage2D(t.TEXTURE_2D,ht,pt,Y.width,Y.height)}if(N)n.texSubImage2D(t.TEXTURE_2D,0,0,0,vt,Ct,Z)}else n.texImage2D(t.TEXTURE_2D,0,pt,vt,Ct,Z);if(f(g))w(O);if(ct.__version=at.version,g.onUpdate)g.onUpdate(g)}M.__version=g.version}function Ut(M,g,C){if(g.image.length!==6)return;let O=q(M,g),j=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+C);let at=i.get(j);if(j.version!==at.__version||O===!0){n.activeTexture(t.TEXTURE0+C);let ct=Qt.getPrimaries(Qt.workingColorSpace),W=g.colorSpace===qn?null:Qt.getPrimaries(g.colorSpace),Z=g.colorSpace===qn||ct===W?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let vt=g.isCompressedTexture||g.image[0].isCompressedTexture,Ct=g.image[0]&&g.image[0].isDataTexture,pt=[];for(let et=0;et<6;et++){if(!vt&&!Ct)pt[et]=m(g.image[et],!0,s.maxCubemapSize);else pt[et]=Ct?g.image[et].image:g.image[et];pt[et]=kt(g,pt[et])}let ot=pt[0],Nt=r.convert(g.format,g.colorSpace),Ft=r.convert(g.type),ne=v(g.internalFormat,Nt,Ft,g.normalized,g.colorSpace),N=g.isVideoTexture!==!0,ht=at.__version===void 0||O===!0,Y=j.dataReady,ut=A(g,ot);Wt(t.TEXTURE_CUBE_MAP,g);let yt;if(vt){if(N&&ht)n.texStorage2D(t.TEXTURE_CUBE_MAP,ut,ne,ot.width,ot.height);for(let et=0;et<6;et++){yt=pt[et].mipmaps;for(let gt=0;gt<yt.length;gt++){let Ht=yt[gt];if(g.format!==hn)if(Nt!==null)if(N){if(Y)n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt,0,0,Ht.width,Ht.height,Nt,Ht.data)}else n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt,ne,Ht.width,Ht.height,0,Ht.data);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(N){if(Y)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt,0,0,Ht.width,Ht.height,Nt,Ft,Ht.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt,ne,Ht.width,Ht.height,0,Nt,Ft,Ht.data)}}}else{if(yt=g.mipmaps,N&&ht){if(yt.length>0)ut++;let et=zt(pt[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ut,ne,et.width,et.height)}for(let et=0;et<6;et++)if(Ct){if(N){if(Y)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,pt[et].width,pt[et].height,Nt,Ft,pt[et].data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ne,pt[et].width,pt[et].height,0,Nt,Ft,pt[et].data);for(let gt=0;gt<yt.length;gt++){let he=yt[gt].image[et].image;if(N){if(Y)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt+1,0,0,he.width,he.height,Nt,Ft,he.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt+1,ne,he.width,he.height,0,Nt,Ft,he.data)}}else{if(N){if(Y)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Nt,Ft,pt[et])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ne,Nt,Ft,pt[et]);for(let gt=0;gt<yt.length;gt++){let Ht=yt[gt];if(N){if(Y)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt+1,0,0,Nt,Ft,Ht.image[et])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt+1,ne,Nt,Ft,Ht.image[et])}}}if(f(g))w(t.TEXTURE_CUBE_MAP);if(at.__version=j.version,g.onUpdate)g.onUpdate(g)}M.__version=g.version}function It(M,g,C,O,j,at){let ct=r.convert(C.format,C.colorSpace),W=r.convert(C.type),Z=v(C.internalFormat,ct,W,C.normalized,C.colorSpace),vt=i.get(g),Ct=i.get(C);if(Ct.__renderTarget=g,!vt.__hasExternalTextures){let pt=Math.max(1,g.width>>at),ot=Math.max(1,g.height>>at);if(j===t.TEXTURE_3D||j===t.TEXTURE_2D_ARRAY)n.texImage3D(j,at,Z,pt,ot,g.depth,0,ct,W,null);else n.texImage2D(j,at,Z,pt,ot,0,ct,W,null)}if(n.bindFramebuffer(t.FRAMEBUFFER,M),R(g))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,O,j,Ct.__webglTexture,0,ft(g));else if(j===t.TEXTURE_2D||j>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)t.framebufferTexture2D(t.FRAMEBUFFER,O,j,Ct.__webglTexture,at);n.bindFramebuffer(t.FRAMEBUFFER,null)}function _e(M,g,C){if(t.bindRenderbuffer(t.RENDERBUFFER,M),g.depthBuffer){let O=g.depthTexture,j=O&&O.isDepthTexture?O.type:null,at=E(g.stencilBuffer,j),ct=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(R(g))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ft(g),at,g.width,g.height);else if(C)t.renderbufferStorageMultisample(t.RENDERBUFFER,ft(g),at,g.width,g.height);else t.renderbufferStorage(t.RENDERBUFFER,at,g.width,g.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,ct,t.RENDERBUFFER,M)}else{let O=g.textures;for(let j=0;j<O.length;j++){let at=O[j],ct=r.convert(at.format,at.colorSpace),W=r.convert(at.type),Z=v(at.internalFormat,ct,W,at.normalized,at.colorSpace);if(R(g))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ft(g),Z,g.width,g.height);else if(C)t.renderbufferStorageMultisample(t.RENDERBUFFER,ft(g),Z,g.width,g.height);else t.renderbufferStorage(t.RENDERBUFFER,Z,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Xt(M,g,C){let O=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=i.get(g.depthTexture);if(j.__renderTarget=g,!j.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0;if(O){if(j.__webglInit===void 0)j.__webglInit=!0,g.depthTexture.addEventListener("dispose",I);if(j.__webglTexture===void 0){j.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),Wt(t.TEXTURE_CUBE_MAP,g.depthTexture);let vt=r.convert(g.depthTexture.format),Ct=r.convert(g.depthTexture.type),pt;if(g.depthTexture.format===Vn)pt=t.DEPTH_COMPONENT24;else if(g.depthTexture.format===Wn)pt=t.DEPTH24_STENCIL8;for(let ot=0;ot<6;ot++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,pt,g.width,g.height,0,vt,Ct,null)}}else st(g.depthTexture,0);let at=j.__webglTexture,ct=ft(g),W=O?t.TEXTURE_CUBE_MAP_POSITIVE_X+C:t.TEXTURE_2D,Z=g.depthTexture.format===Wn?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(g.depthTexture.format===Vn)if(R(g))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,W,at,0,ct);else t.framebufferTexture2D(t.FRAMEBUFFER,Z,W,at,0);else if(g.depthTexture.format===Wn)if(R(g))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,W,at,0,ct);else t.framebufferTexture2D(t.FRAMEBUFFER,Z,W,at,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Kt(M){let g=i.get(M),C=M.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==M.depthTexture){let O=M.depthTexture;if(g.__depthDisposeCallback)g.__depthDisposeCallback();if(O){let j=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,O.removeEventListener("dispose",j)};O.addEventListener("dispose",j),g.__depthDisposeCallback=j}g.__boundDepthTexture=O}if(M.depthTexture&&!g.__autoAllocateDepthBuffer)if(C)for(let O=0;O<6;O++)Xt(g.__webglFramebuffer[O],M,O);else{let O=M.texture.mipmaps;if(O&&O.length>0)Xt(g.__webglFramebuffer[0],M,0);else Xt(g.__webglFramebuffer,M,0)}else if(C){g.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[O]),g.__webglDepthbuffer[O]===void 0)g.__webglDepthbuffer[O]=t.createRenderbuffer(),_e(g.__webglDepthbuffer[O],M,!1);else{let j=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,at=g.__webglDepthbuffer[O];t.bindRenderbuffer(t.RENDERBUFFER,at),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,at)}}else{let O=M.texture.mipmaps;if(O&&O.length>0)n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]);else n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer);if(g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),_e(g.__webglDepthbuffer,M,!1);else{let j=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,at=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,at),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,at)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ee(M,g,C){let O=i.get(M);if(g!==void 0)It(O.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0);if(C!==void 0)Kt(M)}function nt(M){let g=M.texture,C=i.get(M),O=i.get(g);M.addEventListener("dispose",S);let j=M.textures,at=M.isWebGLCubeRenderTarget===!0,ct=j.length>1;if(!ct){if(O.__webglTexture===void 0)O.__webglTexture=t.createTexture();O.__version=g.version,a.memory.textures++}if(at){C.__webglFramebuffer=[];for(let W=0;W<6;W++)if(g.mipmaps&&g.mipmaps.length>0){C.__webglFramebuffer[W]=[];for(let Z=0;Z<g.mipmaps.length;Z++)C.__webglFramebuffer[W][Z]=t.createFramebuffer()}else C.__webglFramebuffer[W]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){C.__webglFramebuffer=[];for(let W=0;W<g.mipmaps.length;W++)C.__webglFramebuffer[W]=t.createFramebuffer()}else C.__webglFramebuffer=t.createFramebuffer();if(ct)for(let W=0,Z=j.length;W<Z;W++){let vt=i.get(j[W]);if(vt.__webglTexture===void 0)vt.__webglTexture=t.createTexture(),a.memory.textures++}if(M.samples>0&&R(M)===!1){C.__webglMultisampledFramebuffer=t.createFramebuffer(),C.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let W=0;W<j.length;W++){let Z=j[W];C.__webglColorRenderbuffer[W]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,C.__webglColorRenderbuffer[W]);let vt=r.convert(Z.format,Z.colorSpace),Ct=r.convert(Z.type),pt=v(Z.internalFormat,vt,Ct,Z.normalized,Z.colorSpace,M.isXRRenderTarget===!0),ot=ft(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,ot,pt,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+W,t.RENDERBUFFER,C.__webglColorRenderbuffer[W])}if(t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer)C.__webglDepthRenderbuffer=t.createRenderbuffer(),_e(C.__webglDepthRenderbuffer,M,!0);n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(at){n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture),Wt(t.TEXTURE_CUBE_MAP,g);for(let W=0;W<6;W++)if(g.mipmaps&&g.mipmaps.length>0)for(let Z=0;Z<g.mipmaps.length;Z++)It(C.__webglFramebuffer[W][Z],M,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+W,Z);else It(C.__webglFramebuffer[W],M,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);if(f(g))w(t.TEXTURE_CUBE_MAP);n.unbindTexture()}else if(ct){for(let W=0,Z=j.length;W<Z;W++){let vt=j[W],Ct=i.get(vt),pt=t.TEXTURE_2D;if(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)pt=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(pt,Ct.__webglTexture),Wt(pt,vt),It(C.__webglFramebuffer,M,vt,t.COLOR_ATTACHMENT0+W,pt,0),f(vt))w(pt)}n.unbindTexture()}else{let W=t.TEXTURE_2D;if(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)W=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(W,O.__webglTexture),Wt(W,g),g.mipmaps&&g.mipmaps.length>0)for(let Z=0;Z<g.mipmaps.length;Z++)It(C.__webglFramebuffer[Z],M,g,t.COLOR_ATTACHMENT0,W,Z);else It(C.__webglFramebuffer,M,g,t.COLOR_ATTACHMENT0,W,0);if(f(g))w(W);n.unbindTexture()}if(M.depthBuffer)Kt(M)}function dt(M){let g=M.textures;for(let C=0,O=g.length;C<O;C++){let j=g[C];if(f(j)){let at=T(M),ct=i.get(j).__webglTexture;n.bindTexture(at,ct),w(at),n.unbindTexture()}}}let tt=[],At=[];function Et(M){if(M.samples>0){if(R(M)===!1){let{textures:g,width:C,height:O}=M,j=t.COLOR_BUFFER_BIT,at=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ct=i.get(M),W=g.length>1;if(W)for(let vt=0;vt<g.length;vt++)n.bindFramebuffer(t.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+vt,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ct.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+vt,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);let Z=M.texture.mipmaps;if(Z&&Z.length>0)n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]);else n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let vt=0;vt<g.length;vt++){if(M.resolveDepthBuffer){if(M.depthBuffer)j|=t.DEPTH_BUFFER_BIT;if(M.stencilBuffer&&M.resolveStencilBuffer)j|=t.STENCIL_BUFFER_BIT}if(W){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ct.__webglColorRenderbuffer[vt]);let Ct=i.get(g[vt]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ct,0)}if(t.blitFramebuffer(0,0,C,O,0,0,C,O,j,t.NEAREST),l===!0){if(tt.length=0,At.length=0,tt.push(t.COLOR_ATTACHMENT0+vt),M.depthBuffer&&M.storeMultisampledDepthBuffer===!1)tt.push(at),At.push(at),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,At);t.invalidateFramebuffer(t.READ_FRAMEBUFFER,tt)}}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),W)for(let vt=0;vt<g.length;vt++){n.bindFramebuffer(t.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+vt,t.RENDERBUFFER,ct.__webglColorRenderbuffer[vt]);let Ct=i.get(g[vt]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ct.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+vt,t.TEXTURE_2D,Ct,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&l){let g=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function ft(M){return Math.min(s.maxSamples,M.samples)}function R(M){let g=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Vt(M){let g=a.render.frame;if(u.get(M)!==g)u.set(M,g),M.update()}function kt(M,g){let{colorSpace:C,format:O,type:j}=M;if(M.isCompressedTexture===!0||M.isVideoTexture===!0)return g;if(C!==$a&&C!==qn)if(Qt.getTransfer(C)===ce){if(O!==hn||j!==nn)Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Bt("WebGLTextures: Unsupported texture color space:",C);return g}function zt(M){if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement)c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height;else if(typeof VideoFrame<"u"&&M instanceof VideoFrame)c.width=M.displayWidth,c.height=M.displayHeight;else c.width=M.width,c.height=M.height;return c}this.allocateTextureUnit=K,this.resetTextureUnits=Q,this.getTextureUnits=P,this.setTextureUnits=V,this.setTexture2D=st,this.setTexture2DArray=X,this.setTexture3D=J,this.setTextureCube=it,this.rebindTextures=ee,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=It,this.useMultisampledRTT=R,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Tg(t,e){function n(i,s=qn){let r,a=Qt.getTransfer(s);if(i===nn)return t.UNSIGNED_BYTE;if(i===pa)return t.UNSIGNED_SHORT_4_4_4_4;if(i===ma)return t.UNSIGNED_SHORT_5_5_5_1;if(i===vc)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===yc)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===_c)return t.BYTE;if(i===xc)return t.SHORT;if(i===ji)return t.UNSIGNED_SHORT;if(i===fa)return t.INT;if(i===Ln)return t.UNSIGNED_INT;if(i===Sn)return t.FLOAT;if(i===cn)return t.HALF_FLOAT;if(i===Sc)return t.ALPHA;if(i===Mc)return t.RGB;if(i===hn)return t.RGBA;if(i===Vn)return t.DEPTH_COMPONENT;if(i===Wn)return t.DEPTH_STENCIL;if(i===bc)return t.RED;if(i===ga)return t.RED_INTEGER;if(i===Xn)return t.RG;if(i===_a)return t.RG_INTEGER;if(i===xa)return t.RGBA_INTEGER;if(i===Xs||i===qs||i===Ys||i===Zs)if(a===ce)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Xs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Xs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ys)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===va||i===ya||i===Sa||i===Ma)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ya)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ma)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ba||i===Ea||i===Ta||i===wa||i===Aa||i===Js||i===Ra)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ba||i===Ea)return a===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ta)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===wa)return r.COMPRESSED_R11_EAC;if(i===Aa)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Js)return r.COMPRESSED_RG11_EAC;if(i===Ra)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ca||i===Ia||i===Pa||i===La||i===Na||i===Da||i===Ua||i===Fa||i===Oa||i===Ba||i===za||i===ka||i===Ga||i===Ha)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ca)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ia)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pa)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===La)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Na)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Da)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ua)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fa)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Oa)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ba)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===za)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ka)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ga)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ha)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Va||i===Wa||i===Xa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Va)return a===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qa||i===Ya||i===$s||i===Za)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===qa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ya)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$s)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(i===Ai)return t.UNSIGNED_INT_24_8;return t[i]!==void 0?t[i]:null}return{convert:n}}var wg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ag=`
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

}`;class Eh{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ar(t.texture);if(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)this.depthNear=t.depthNear,this.depthFar=t.depthFar;this.texture=n}}getMesh(t){if(this.texture!==null){if(this.mesh===null){let e=t.cameras[0].viewport,n=new Je({vertexShader:wg,fragmentShader:Ag,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new we(new os(20,20),n)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Th extends Mn{constructor(t,e){super();let n=this,i=null,s=1,r=null,a="local-floor",o=1,l=null,c=null,u=null,p=null,h=null,d=null,_=typeof XRWebGLBinding<"u",y=new Eh,m={},f=e.getContextAttributes(),w=null,T=null,v=[],E=[],A=new bt,I=null,S=null,b=new Ne;b.viewport=new ge;let H=new Ne;H.viewport=new ge;let D=[b,H],F=new Ro,Q=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let rt=v[q];if(rt===void 0)rt=new ns,v[q]=rt;return rt.getTargetRaySpace()},this.getControllerGrip=function(q){let rt=v[q];if(rt===void 0)rt=new ns,v[q]=rt;return rt.getGripSpace()},this.getHand=function(q){let rt=v[q];if(rt===void 0)rt=new ns,v[q]=rt;return rt.getHandSpace()};function V(q){let rt=E.indexOf(q.inputSource);if(rt===-1)return;let lt=v[rt];if(lt!==void 0)lt.update(q.inputSource,q.frame,l||r),lt.dispatchEvent({type:q.type,data:q.inputSource})}function K(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",k);for(let q=0;q<v.length;q++){let rt=E[q];if(rt===null)continue;E[q]=null,v[q].disconnect(rt)}Q=null,P=null,y.reset();for(let q in m)delete m[q];if(t.setRenderTarget(w),h=null,p=null,u=null,i=null,T=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(A.width,A.height,!1),S!==null){let q=S.camera;q.fov=S.fov,q.zoom=S.zoom,q.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){if(s=q,n.isPresenting===!0)Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){if(a=q,n.isPresenting===!0)Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return p!==null?p:h},this.getBinding=function(){if(u===null&&_)u=new XRWebGLBinding(i,e);return u},this.getFrame=function(){return d},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",K),i.addEventListener("inputsourceschange",k),f.xrCompatible!==!0)await e.makeXRCompatible();if(I=t.getPixelRatio(),t.getSize(A),!(_&&("createProjectionLayer"in XRWebGLBinding.prototype))){let lt={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,e,lt),i.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),T=new Ge(h.framebufferWidth,h.framebufferHeight,{format:hn,type:nn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let lt=null,Lt=null,Ut=null;if(f.depth)Ut=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=f.stencil?Wn:Vn,Lt=f.stencil?Ai:Ln;let It={colorFormat:e.RGBA8,depthFormat:Ut,scaleFactor:s};u=this.getBinding(),p=u.createProjectionLayer(It),i.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),T=new Ge(p.textureWidth,p.textureHeight,{format:hn,type:nn,depthTexture:new Jn(p.textureWidth,p.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(o),l=null,r=await i.requestReferenceSpace(a),Wt.setContext(i),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function k(q){for(let rt=0;rt<q.removed.length;rt++){let lt=q.removed[rt],Lt=E.indexOf(lt);if(Lt>=0)E[Lt]=null,v[Lt].disconnect(lt)}for(let rt=0;rt<q.added.length;rt++){let lt=q.added[rt],Lt=E.indexOf(lt);if(Lt===-1){for(let It=0;It<v.length;It++)if(It>=E.length){E.push(lt),Lt=It;break}else if(E[It]===null){E[It]=lt,Lt=It;break}if(Lt===-1)break}let Ut=v[Lt];if(Ut)Ut.connect(lt)}}let st=new U,X=new U;function J(q,rt,lt){st.setFromMatrixPosition(rt.matrixWorld),X.setFromMatrixPosition(lt.matrixWorld);let Lt=st.distanceTo(X),Ut=rt.projectionMatrix.elements,It=lt.projectionMatrix.elements,_e=Ut[14]/(Ut[10]-1),Xt=Ut[14]/(Ut[10]+1),Kt=(Ut[9]+1)/Ut[5],ee=(Ut[9]-1)/Ut[5],nt=(Ut[8]-1)/Ut[0],dt=(It[8]+1)/It[0],tt=_e*nt,At=_e*dt,Et=Lt/(-nt+dt),ft=Et*-nt;if(rt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ft),q.translateZ(Et),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ut[10]===-1)q.projectionMatrix.copy(rt.projectionMatrix),q.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let R=_e+Et,Vt=Xt+Et,kt=tt-ft,zt=At+(Lt-ft),M=Kt*Xt/Vt*R,g=ee*Xt/Vt*R;q.projectionMatrix.makePerspective(kt,zt,M,g,R,Vt),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function it(q,rt){if(rt===null)q.matrixWorld.copy(q.matrix);else q.matrixWorld.multiplyMatrices(rt.matrixWorld,q.matrix);q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let{near:rt,far:lt}=q;if(y.texture!==null){if(y.depthNear>0)rt=y.depthNear;if(y.depthFar>0)lt=y.depthFar}if(F.near=H.near=b.near=rt,F.far=H.far=b.far=lt,Q!==F.near||P!==F.far)i.updateRenderState({depthNear:F.near,depthFar:F.far}),Q=F.near,P=F.far;F.layers.mask=q.layers.mask|6,b.layers.mask=F.layers.mask&-5,H.layers.mask=F.layers.mask&-3;let Lt=q.parent,Ut=F.cameras;it(F,Lt);for(let It=0;It<Ut.length;It++)it(Ut[It],Lt);if(Ut.length===2)J(F,b,H);else F.projectionMatrix.copy(b.projectionMatrix);if(S===null&&q.isPerspectiveCamera)S={camera:q,fov:q.fov,zoom:q.zoom};Dt(q,F,Lt)};function Dt(q,rt,lt){if(lt===null)q.matrix.copy(rt.matrixWorld);else q.matrix.copy(lt.matrixWorld),q.matrix.invert(),q.matrix.multiply(rt.matrixWorld);if(q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(rt.projectionMatrix),q.projectionMatrixInverse.copy(rt.projectionMatrixInverse),q.isPerspectiveCamera)q.fov=Os*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1}this.getCamera=function(){return F},this.getFoveation=function(){if(p===null&&h===null)return;return o},this.setFoveation=function(q){if(o=q,p!==null)p.fixedFoveation=q;if(h!==null&&h.fixedFoveation!==void 0)h.fixedFoveation=q},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(F)},this.getCameraTexture=function(q){return m[q]};let Pt=null;function re(q,rt){if(c=rt.getViewerPose(l||r),d=rt,c!==null){let lt=c.views;if(h!==null)t.setRenderTargetFramebuffer(T,h.framebuffer),t.setRenderTarget(T);let Lt=!1;if(lt.length!==F.cameras.length)F.cameras.length=0,Lt=!0;for(let Xt=0;Xt<lt.length;Xt++){let Kt=lt[Xt],ee=null;if(h!==null)ee=h.getViewport(Kt);else{let dt=u.getViewSubImage(p,Kt);if(ee=dt.viewport,Xt===0)t.setRenderTargetTextures(T,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(T)}let nt=D[Xt];if(nt===void 0)nt=new Ne,nt.layers.enable(Xt),nt.viewport=new ge,D[Xt]=nt;if(nt.matrix.fromArray(Kt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Kt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(ee.x,ee.y,ee.width,ee.height),Xt===0)F.matrix.copy(nt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);if(Lt===!0)F.cameras.push(nt)}let Ut=i.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let Xt=u.getDepthInformation(lt[0]);if(Xt&&Xt.isValid&&Xt.texture)y.init(Xt,i.renderState)}if(Ut&&Ut.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let Xt=0;Xt<lt.length;Xt++){let Kt=lt[Xt].camera;if(Kt){let ee=m[Kt];if(!ee)ee=new ar,m[Kt]=ee;let nt=u.getCameraImage(Kt);ee.sourceTexture=nt}}}}for(let lt=0;lt<v.length;lt++){let Lt=E[lt],Ut=v[lt];if(Lt!==null&&Ut!==void 0)Ut.update(Lt,rt,l||r)}if(Pt)Pt(q,rt);if(rt.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:rt});d=null}let Wt=new fh;Wt.setAnimationLoop(re),this.setAnimationLoop=function(q){Pt=q},this.dispose=function(){}}}var Rg=new fe,wh=new Gt;wh.set(-1,0,0,0,1,0,0,0,1);function Cg(t,e){function n(m,f){if(m.matrixAutoUpdate===!0)m.updateMatrix();f.value.copy(m.matrix)}function i(m,f){if(f.color.getRGB(m.fogColor.value,fo(t)),f.isFog)m.fogNear.value=f.near,m.fogFar.value=f.far;else if(f.isFogExp2)m.fogDensity.value=f.density}function s(m,f,w,T,v){if(f.isNodeMaterial)f.uniformsNeedUpdate=!1;else if(f.isMeshBasicMaterial)r(m,f);else if(f.isMeshLambertMaterial){if(r(m,f),f.envMap)m.envMapIntensity.value=f.envMapIntensity}else if(f.isMeshToonMaterial)r(m,f),p(m,f);else if(f.isMeshPhongMaterial){if(r(m,f),u(m,f),f.envMap)m.envMapIntensity.value=f.envMapIntensity}else if(f.isMeshStandardMaterial){if(r(m,f),h(m,f),f.isMeshPhysicalMaterial)d(m,f,v)}else if(f.isMeshMatcapMaterial)r(m,f),_(m,f);else if(f.isMeshDepthMaterial)r(m,f);else if(f.isMeshDistanceMaterial)r(m,f),y(m,f);else if(f.isMeshNormalMaterial)r(m,f);else if(f.isLineBasicMaterial){if(a(m,f),f.isLineDashedMaterial)o(m,f)}else if(f.isPointsMaterial)l(m,f,w,T);else if(f.isSpriteMaterial)c(m,f);else if(f.isShadowMaterial)m.color.value.copy(f.color),m.opacity.value=f.opacity;else if(f.isShaderMaterial)f.uniformsNeedUpdate=!1}function r(m,f){if(m.opacity.value=f.opacity,f.color)m.diffuse.value.copy(f.color);if(f.emissive)m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity);if(f.map)m.map.value=f.map,n(f.map,m.mapTransform);if(f.alphaMap)m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform);if(f.bumpMap){if(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Fe)m.bumpScale.value*=-1}if(f.normalMap){if(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Fe)m.normalScale.value.negate()}if(f.displacementMap)m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias;if(f.emissiveMap)m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform);if(f.specularMap)m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform);if(f.alphaTest>0)m.alphaTest.value=f.alphaTest;let w=e.get(f),{envMap:T,envMapRotation:v}=w;if(T){if(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(Rg.makeRotationFromEuler(v)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1)m.envMapRotation.value.premultiply(wh);m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio}if(f.lightMap)m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform);if(f.aoMap)m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform)}function a(m,f){if(m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map)m.map.value=f.map,n(f.map,m.mapTransform)}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,w,T){if(m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=T*0.5,f.map)m.map.value=f.map,n(f.map,m.uvTransform);if(f.alphaMap)m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform);if(f.alphaTest>0)m.alphaTest.value=f.alphaTest}function c(m,f){if(m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map)m.map.value=f.map,n(f.map,m.mapTransform);if(f.alphaMap)m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform);if(f.alphaTest>0)m.alphaTest.value=f.alphaTest}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,0.0001)}function p(m,f){if(f.gradientMap)m.gradientMap.value=f.gradientMap}function h(m,f){if(m.metalness.value=f.metalness,f.metalnessMap)m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform);if(m.roughness.value=f.roughness,f.roughnessMap)m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform);if(f.envMap)m.envMapIntensity.value=f.envMapIntensity}function d(m,f,w){if(m.ior.value=f.ior,f.sheen>0){if(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap)m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform);if(f.sheenRoughnessMap)m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform)}if(f.clearcoat>0){if(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap)m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform);if(f.clearcoatRoughnessMap)m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform);if(f.clearcoatNormalMap){if(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Fe)m.clearcoatNormalScale.value.negate()}}if(f.dispersion>0)m.dispersion.value=f.dispersion;if(f.retroreflectivity>0)m.retroreflectivity.value=f.retroreflectivity;if(f.iridescence>0){if(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap)m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform);if(f.iridescenceThicknessMap)m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform)}if(f.transmission>0){if(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap)m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform);if(m.thickness.value=f.thickness,f.thicknessMap)m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform);m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)}if(f.anisotropy>0){if(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap)m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform)}if(m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap)m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform);if(f.specularIntensityMap)m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform)}function _(m,f){if(f.matcap)m.matcap.value=f.matcap}function y(m,f){let w=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ig(t,e,n,i){let s={},r={},a=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){let A=E.program;i.uniformBlockBinding(v,A)}function c(v,E){let A=s[v.id];if(A===void 0)m(v),A=u(v),s[v.id]=A,v.addEventListener("dispose",w);let I=E.program;i.updateUBOMapping(v,I);let S=e.render.frame;if(r[v.id]!==S)h(v),r[v.id]=S}function u(v){let E=p();v.__bindingPointIndex=E;let A=t.createBuffer(),{__size:I,usage:S}=v;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,I,S),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,A),A}function p(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let E=s[v.id],{uniforms:A,__cache:I}=v;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let S=0,b=A.length;S<b;S++){let H=A[S];if(Array.isArray(H))for(let D=0,F=H.length;D<F;D++)d(H[D],S,D,I);else d(H,S,0,I)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(v,E,A,I){if(y(v,E,A,I)===!0){let{__offset:S,value:b}=v;if(Array.isArray(b)){let H=0;for(let D=0;D<b.length;D++){let F=b[D],Q=f(F);if(_(F,v.__data,H),typeof F!=="number"&&typeof F!=="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F))H+=Q.storage/Float32Array.BYTES_PER_ELEMENT}}else _(b,v.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,S,v.__data)}}function _(v,E,A){if(typeof v==="number"||typeof v==="boolean")E[0]=v;else if(v.isMatrix3)E[0]=v.elements[0],E[1]=v.elements[1],E[2]=v.elements[2],E[3]=0,E[4]=v.elements[3],E[5]=v.elements[4],E[6]=v.elements[5],E[7]=0,E[8]=v.elements[6],E[9]=v.elements[7],E[10]=v.elements[8],E[11]=0;else if(ArrayBuffer.isView(v))E.set(new v.constructor(v.buffer,v.byteOffset,E.length));else v.toArray(E,A)}function y(v,E,A,I){let S=v.value,b=E+"_"+A;if(I[b]===void 0){if(typeof S==="number"||typeof S==="boolean")I[b]=S;else if(ArrayBuffer.isView(S))I[b]=S.slice();else I[b]=S.clone();return!0}else{let H=I[b];if(typeof S==="number"||typeof S==="boolean"){if(H!==S)return I[b]=S,!0}else if(ArrayBuffer.isView(S))return!0;else if(H.equals(S)===!1)return H.copy(S),!0}return!1}function m(v){let E=v.uniforms,A=0,I=16;for(let b=0,H=E.length;b<H;b++){let D=Array.isArray(E[b])?E[b]:[E[b]];for(let F=0,Q=D.length;F<Q;F++){let P=D[F],V=Array.isArray(P.value)?P.value:[P.value];for(let K=0,k=V.length;K<k;K++){let st=V[K],X=f(st),J=A%I,it=J%X.boundary,Dt=J+it;if(A+=it,Dt!==0&&I-Dt<X.storage)A+=I-Dt;P.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=A,A+=X.storage}}}let S=A%I;if(S>0)A+=I-S;return v.__size=A,v.__cache={},this}function f(v){let E={boundary:0,storage:0};if(typeof v==="number"||typeof v==="boolean")E.boundary=4,E.storage=4;else if(v.isVector2)E.boundary=8,E.storage=8;else if(v.isVector3||v.isColor)E.boundary=16,E.storage=12;else if(v.isVector4)E.boundary=16,E.storage=16;else if(v.isMatrix3)E.boundary=48,E.storage=48;else if(v.isMatrix4)E.boundary=64,E.storage=64;else if(v.isTexture)Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(v))E.boundary=16,E.storage=v.byteLength;else Ot("WebGLRenderer: Unsupported uniform value type.",v);return E}function w(v){let E=v.target;E.removeEventListener("dispose",w);let A=a.indexOf(E.__bindingPointIndex);a.splice(A,1),t.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function T(){for(let v in s)t.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:T}}var Pg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),un=null;function Lg(){if(un===null)un=new so(Pg,16,16,Xn,cn),un.name="DFG_LUT",un.minFilter=Oe,un.magFilter=Oe,un.wrapS=Vs,un.wrapT=Vs,un.generateMipmaps=!1,un.needsUpdate=!0;return un}class vr{constructor(t={}){let{canvas:e=Lc(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1,outputBufferType:h=nn}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;let _=h,y=new Set([xa,_a,ga]),m=new Set([nn,Ln,ji,Ai,pa,ma]),f=new Uint32Array(4),w=new Int32Array(4),T=new U,v=null,E=null,A=[],I=[],S=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=en,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,H=!1,D=null,F=null,Q=null,P=null;this._outputColorSpace=Tc;let V=0,K=0,k=null,st=-1,X=null,J=new ge,it=new ge,Dt=null,Pt=new jt(0),re=0,{width:Wt,height:q}=e,rt=1,lt=null,Lt=null,Ut=new ge(0,0,Wt,q),It=new ge(0,0,Wt,q),_e=!1,Xt=new ir,Kt=!1,ee=!1,nt=new fe,dt=new U,tt=new ge,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Et=!1;function ft(){return k===null?rt:1}let R=n;function Vt(x,L){return e.getContext(x,L)}let kt,zt,M,g,C,O,j,at,ct,W,Z,vt,Ct,pt,ot,Nt,Ft,ne,N,ht,Y,ut,yt;try{let x={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e)e.setAttribute("data-engine",`three.js r${Dl}`);if(e.addEventListener("webglcontextlost",Ht,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",ie,!1),R===null){if(R=Vt("webgl2",x),R===null)if(Vt("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}et()}catch(x){throw e.removeEventListener("webglcontextlost",Ht,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",ie,!1),Bt("WebGLRenderer: "+x.message),x}function et(){if(kt=new zp(R),kt.init(),Y=new Tg(R,kt),zt=new Cp(R,kt,t,Y),M=new bg(R,kt),zt.reversedDepthBuffer&&p)M.buffers.depth.setReversed(!0);F=R.createFramebuffer(),Q=R.createFramebuffer(),P=R.createFramebuffer(),g=new Hp(R),C=new cg,O=new Eg(R,kt,M,C,zt,Y,g),j=new Bp(b),at=new Vu(R),ut=new Ap(R,at),ct=new kp(R,at,g,ut),W=new Wp(R,ct,at,ut,g),ne=new Vp(R,zt,O),ot=new Ip(C),Z=new lg(b,j,kt,zt,ut,ot),vt=new Cg(b,C),Ct=new ug,pt=new _g(kt),Ft=new wp(b,j,M,W,d,o),Nt=new Mg(b,W,zt),yt=new Ig(R,g,zt,M),N=new Rp(R,kt,g),ht=new Gp(R,kt,g),g.programs=Z.programs,b.capabilities=zt,b.extensions=kt,b.properties=C,b.renderLists=Ct,b.shadowMap=Nt,b.state=M,b.info=g}if(_!==nn)S=new qp(_,e.width,e.height,a,i,s);let gt=new Th(b,R);this.xr=gt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let x=kt.get("WEBGL_lose_context");if(x)x.loseContext()},this.forceContextRestore=function(){let x=kt.get("WEBGL_lose_context");if(x)x.restoreContext()},this.getPixelRatio=function(){return rt},this.setPixelRatio=function(x){if(x===void 0)return;rt=x,this.setSize(Wt,q,!1)},this.getSize=function(x){return x.set(Wt,q)},this.setSize=function(x,L,G=!0){if(gt.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}if(Wt=x,q=L,e.width=Math.floor(x*rt),e.height=Math.floor(L*rt),G===!0)e.style.width=x+"px",e.style.height=L+"px";if(S!==null)S.setSize(e.width,e.height);this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(Wt*rt,q*rt).floor()},this.setDrawingBufferSize=function(x,L,G){Wt=x,q=L,rt=G,e.width=Math.floor(x*G),e.height=Math.floor(L*G),this.setViewport(0,0,x,L)},this.setEffects=function(x){if(_===nn){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let L=0;L<x.length;L++)if(x[L].isOutputPass===!0){Ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(J)},this.getViewport=function(x){return x.copy(Ut)},this.setViewport=function(x,L,G,B){if(x.isVector4)Ut.set(x.x,x.y,x.z,x.w);else Ut.set(x,L,G,B);M.viewport(J.copy(Ut).multiplyScalar(rt).round())},this.getScissor=function(x){return x.copy(It)},this.setScissor=function(x,L,G,B){if(x.isVector4)It.set(x.x,x.y,x.z,x.w);else It.set(x,L,G,B);M.scissor(it.copy(It).multiplyScalar(rt).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(x){M.setScissorTest(_e=x)},this.setOpaqueSort=function(x){lt=x},this.setTransparentSort=function(x){Lt=x},this.getClearColor=function(x){return x.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor(...arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha(...arguments)},this.clear=function(x=!0,L=!0,G=!0){let B=0;if(x){let z=!1;if(k!==null){let xt=k.texture.format;z=y.has(xt)}if(z){let xt=k.texture.type,Mt=m.has(xt),_t=Ft.getClearColor(),Tt=Ft.getClearAlpha(),{r:Rt,g:qt,b:Jt}=_t;if(Mt)f[0]=Rt,f[1]=qt,f[2]=Jt,f[3]=Tt,R.clearBufferuiv(R.COLOR,0,f);else w[0]=Rt,w[1]=qt,w[2]=Jt,w[3]=Tt,R.clearBufferiv(R.COLOR,0,w)}else B|=R.COLOR_BUFFER_BIT}if(L)B|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(G)B|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(B!==0)R.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),D=x},this.dispose=function(){e.removeEventListener("webglcontextlost",Ht,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",ie,!1),Ft.dispose(),Ct.dispose(),pt.dispose(),C.dispose(),j.dispose(),W.dispose(),ut.dispose(),yt.dispose(),Z.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",Jo),gt.removeEventListener("sessionend",$o),Dn.stop()};function Ht(x){x.preventDefault(),to("WebGLRenderer: Context Lost."),H=!0}function he(){to("WebGLRenderer: Context Restored."),H=!1;let x=g.autoReset,L=Nt.enabled,G=Nt.autoUpdate,B=Nt.needsUpdate,z=Nt.type;et(),g.autoReset=x,Nt.enabled=L,Nt.autoUpdate=G,Nt.needsUpdate=B,Nt.type=z}function ie(x){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function sn(x){let L=x.target;L.removeEventListener("dispose",sn),pn(L)}function pn(x){Ph(x),C.remove(x)}function Ph(x){let L=C.get(x).programs;if(L!==void 0){if(L.forEach(function(G){Z.releaseProgram(G)}),x.isShaderMaterial)Z.releaseShaderCache(x)}}this.renderBufferDirect=function(x,L,G,B,z,xt){if(L===null)L=At;let Mt=z.isMesh&&z.matrixWorld.determinantAffine()<0,_t=Dh(x,L,G,B,z);M.setMaterial(B,Mt);let Tt=G.index,Rt=1;if(B.wireframe===!0){if(Tt=ct.getWireframeAttribute(G),Tt===void 0)return;Rt=2}let qt=G.drawRange,Jt=G.attributes.position,wt=qt.start*Rt,se=(qt.start+qt.count)*Rt;if(xt!==null)wt=Math.max(wt,xt.start*Rt),se=Math.min(se,(xt.start+xt.count)*Rt);if(Tt!==null)wt=Math.max(wt,0),se=Math.min(se,Tt.count);else if(Jt!==void 0&&Jt!==null)wt=Math.max(wt,0),se=Math.min(se,Jt.count);let ve=se-wt;if(ve<0||ve===1/0)return;ut.setup(z,B,_t,G,Tt);let de,le=N;if(Tt!==null)de=at.get(Tt),le=ht,le.setIndex(de);if(z.isMesh)if(B.wireframe===!0)M.setLineWidth(B.wireframeLinewidth*ft()),le.setMode(R.LINES);else le.setMode(R.TRIANGLES);else if(z.isLine){let Ae=B.linewidth;if(Ae===void 0)Ae=1;if(M.setLineWidth(Ae*ft()),z.isLineSegments)le.setMode(R.LINES);else if(z.isLineLoop)le.setMode(R.LINE_LOOP);else le.setMode(R.LINE_STRIP)}else if(z.isPoints)le.setMode(R.POINTS);else if(z.isSprite)le.setMode(R.TRIANGLES);if(z.isBatchedMesh)if(!kt.get("WEBGL_multi_draw")){let{_multiDrawStarts:Ae,_multiDrawCounts:St,_multiDrawCount:Le}=z,te=Tt?at.get(Tt).bytesPerElement:1,He=C.get(B).currentProgram.getUniforms();for(let rn=0;rn<Le;rn++)He.setValue(R,"_gl_DrawID",rn),le.render(Ae[rn]/te,St[rn])}else le.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)le.renderInstances(wt,ve,z.count);else if(G.isInstancedBufferGeometry){let Ae=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,St=Math.min(G.instanceCount,Ae);le.renderInstances(wt,ve,St)}else le.render(wt,ve)};function Zo(x,L,G,B){if(D!==null&&x.isNodeMaterial)D.setObject(B,x);if(Kt===!0)ot.setState(x,G,!1);if(x.transparent===!0&&x.side===qe&&x.forceSinglePass===!1)x.side=Fe,x.needsUpdate=!0,fs(x,L,B),x.side=Ei,x.needsUpdate=!0,fs(x,L,B),x.side=qe;else fs(x,L,B)}this.compile=function(x,L,G=null){if(G===null)G=x;if(D!==null)D.renderStart(x,L,G);if(E=pt.get(G),E.init(L),I.push(E),G.traverseVisible(function(z){if(z.isLight&&z.layers.test(L.layers)){if(E.pushLight(z),z.castShadow)E.pushShadow(z)}}),x!==G)x.traverseVisible(function(z){if(z.isLight&&z.layers.test(L.layers)){if(E.pushLight(z),z.castShadow)E.pushShadow(z)}});if(E.setupLights(),D!==null)D.updateLights(E.state.lightsArray);if(ee=this.localClippingEnabled,Kt=ot.init(this.clippingPlanes,ee),Kt===!0)ot.setGlobalState(this.clippingPlanes,L);if(D!==null)Nt.render(E.state.shadowsArray,G,L);let B=new Set;if(x.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let xt=z.material;if(xt)if(Array.isArray(xt))for(let Mt=0;Mt<xt.length;Mt++){let _t=xt[Mt];Zo(_t,G,L,z),B.add(_t)}else Zo(xt,G,L,z),B.add(xt)}),E=I.pop(),D!==null)D.renderEnd();return B},this.compileAsync=function(x,L,G=null){let B=this.compile(x,L,G);return new Promise((z)=>{function xt(){if(B.forEach(function(Mt){let Tt=C.get(Mt).currentProgram;if(Tt===void 0||Tt.isReady())B.delete(Mt)}),B.size===0){z(x);return}setTimeout(xt,10)}if(kt.get("KHR_parallel_shader_compile")!==null)xt();else setTimeout(xt,10)})};let Er=null;function Lh(x){if(Er)Er(x)}function Jo(){Dn.stop()}function $o(){Dn.start()}let Dn=new fh;if(Dn.setAnimationLoop(Lh),typeof self<"u")Dn.setContext(self);this.setAnimationLoop=function(x){Er=x,gt.setAnimationLoop(x),x===null?Dn.stop():Dn.start()},gt.addEventListener("sessionstart",Jo),gt.addEventListener("sessionend",$o),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(D!==null)D.renderStart(x,L);let G=gt.enabled===!0&&gt.isPresenting===!0,B=S!==null&&(k===null||G)&&S.begin(b,k);if(x.matrixWorldAutoUpdate===!0)x.updateMatrixWorld();if(L.parent===null&&L.matrixWorldAutoUpdate===!0)L.updateMatrixWorld();if(gt.enabled===!0&&gt.isPresenting===!0&&(S===null||S.isCompositing()===!1)){if(gt.cameraAutoUpdate===!0)gt.updateCamera(L);L=gt.getCamera()}if(x.isScene===!0)x.onBeforeRender(b,x,L,k);if(E=pt.get(x,I.length),E.init(L),E.state.textureUnits=O.getTextureUnits(),I.push(E),nt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Xt.setFromProjectionMatrix(nt,ja,L.reversedDepth),ee=this.localClippingEnabled,Kt=ot.init(this.clippingPlanes,ee),v=Ct.get(x,A.length),v.init(),A.push(v),gt.enabled===!0&&gt.isPresenting===!0){let Mt=b.xr.getDepthSensingMesh();if(Mt!==null)Tr(Mt,L,-1/0,b.sortObjects)}if(Tr(x,L,0,b.sortObjects),v.finish(),D!==null)D.updateLights(E.state.lightsArray);if(b.sortObjects===!0)v.sort(lt,Lt);if(Et=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,Et)Ft.addToRenderList(v,x);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(Kt===!0)ot.beginShadows();let z=E.state.shadowsArray;if(Nt.render(z,x,L),Kt===!0)ot.endShadows();if((B&&S.hasRenderPass())===!1){let Mt=v.opaque,_t=v.transmissive;if(E.setupLights(),L.isArrayCamera){let Tt=L.cameras;if(_t.length>0)for(let Rt=0,qt=Tt.length;Rt<qt;Rt++){let Jt=Tt[Rt];Qo(Mt,_t,x,Jt)}if(Et)Ft.render(x);for(let Rt=0,qt=Tt.length;Rt<qt;Rt++){let Jt=Tt[Rt];Ko(v,x,Jt,Jt.viewport)}}else{if(_t.length>0)Qo(Mt,_t,x,L);if(Et)Ft.render(x);Ko(v,x,L)}}if(k!==null&&K===0)O.updateMultisampleRenderTarget(k),O.updateRenderTargetMipmap(k);if(B)S.end(b);if(x.isScene===!0)x.onAfterRender(b,x,L);if(ut.resetDefaultState(),st=-1,X=null,I.pop(),I.length>0){if(E=I[I.length-1],O.setTextureUnits(E.state.textureUnits),Kt===!0)ot.setGlobalState(b.clippingPlanes,E.state.camera)}else E=null;if(A.pop(),A.length>0)v=A[A.length-1];else v=null;if(D!==null)D.renderEnd()};function Tr(x,L,G,B){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)G=x.renderOrder;else if(x.isLOD){if(x.autoUpdate===!0)x.update(L)}else if(x.isLightProbeGrid)E.pushLightProbeGrid(x);else if(x.isLight){if(E.pushLight(x),x.castShadow)E.pushShadow(x)}else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(Xt)){if(B)tt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(nt);let Mt=W.update(x),_t=x.material;if(_t.visible)v.push(x,Mt,_t,G,tt.z,null,L)}}else if(x.isMesh||x.isLine||x.isPoints){if(!x.frustumCulled||x.intersectsFrustum(Xt)){let Mt=W.update(x),_t=x.material;if(B){if(x.boundingSphere!==void 0){if(x.boundingSphere===null)x.computeBoundingSphere();tt.copy(x.boundingSphere.center)}else{if(Mt.boundingSphere===null)Mt.computeBoundingSphere();tt.copy(Mt.boundingSphere.center)}tt.applyMatrix4(x.matrixWorld).applyMatrix4(nt)}if(Array.isArray(_t)){let Tt=Mt.groups;for(let Rt=0,qt=Tt.length;Rt<qt;Rt++){let Jt=Tt[Rt],wt=_t[Jt.materialIndex];if(wt&&wt.visible)v.push(x,Mt,wt,G,tt.z,Jt,L)}}else if(_t.visible)v.push(x,Mt,_t,G,tt.z,null,L)}}}let xt=x.children;for(let Mt=0,_t=xt.length;Mt<_t;Mt++)Tr(xt[Mt],L,G,B)}function Ko(x,L,G,B){let{opaque:z,transmissive:xt,transparent:Mt}=x;if(E.setupLightsView(G),Kt===!0)ot.setGlobalState(b.clippingPlanes,G);if(B)M.viewport(J.copy(B));if(z.length>0)ds(z,L,G);if(xt.length>0)ds(xt,L,G);if(Mt.length>0)ds(Mt,L,G);M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Qo(x,L,G,B){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[B.id]===void 0){let wt=kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[B.id]=new Ge(1,1,{generateMipmaps:!0,type:wt?cn:nn,minFilter:Hn,samples:Math.max(4,zt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}let xt=E.state.transmissionRenderTarget[B.id],Mt=B.viewport||J;xt.setSize(Mt.z*b.transmissionResolutionScale,Mt.w*b.transmissionResolutionScale);let _t=b.getRenderTarget(),Tt=b.getActiveCubeFace(),Rt=b.getActiveMipmapLevel();if(b.setRenderTarget(xt),b.getClearColor(Pt),re=b.getClearAlpha(),re<1)b.setClearColor(16777215,0.5);if(b.clear(),Et)Ft.render(G);let qt=b.toneMapping;b.toneMapping=en;let Jt=B.viewport;if(B.viewport!==void 0)B.viewport=void 0;if(E.setupLightsView(B),Kt===!0)ot.setGlobalState(b.clippingPlanes,B);if(ds(x,G,B),O.updateMultisampleRenderTarget(xt),O.updateRenderTargetMipmap(xt),kt.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let se=0,ve=L.length;se<ve;se++){let de=L[se],{object:le,geometry:Ae,material:St,group:Le}=de;if(St.side===qe&&le.layers.test(B.layers)){let te=St.side;St.side=Fe,St.needsUpdate=!0,jo(le,G,B,Ae,St,Le),St.side=te,St.needsUpdate=!0,wt=!0}}if(wt===!0)O.updateMultisampleRenderTarget(xt),O.updateRenderTargetMipmap(xt)}if(b.setRenderTarget(_t,Tt,Rt),b.setClearColor(Pt,re),Jt!==void 0)B.viewport=Jt;b.toneMapping=qt}function ds(x,L,G){let B=L.isScene===!0?L.overrideMaterial:null;for(let z=0,xt=x.length;z<xt;z++){let Mt=x[z],{object:_t,geometry:Tt,group:Rt}=Mt,qt=Mt.material;if(qt.allowOverride===!0&&B!==null)qt=B;if(_t.layers.test(G.layers))jo(_t,L,G,Tt,qt,Rt)}}function jo(x,L,G,B,z,xt){if(D!==null&&z.isNodeMaterial)D.setObject(x,z);if(x.onBeforeRender(b,L,G,B,z,xt),x.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),z.onBeforeRender(b,L,G,B,x,xt),z.transparent===!0&&z.side===qe&&z.forceSinglePass===!1)z.side=Fe,z.needsUpdate=!0,b.renderBufferDirect(G,L,B,z,x,xt),z.side=Ei,z.needsUpdate=!0,b.renderBufferDirect(G,L,B,z,x,xt),z.side=qe;else b.renderBufferDirect(G,L,B,z,x,xt);x.onAfterRender(b,L,G,B,z,xt)}function fs(x,L,G){if(L.isScene!==!0)L=At;let B=C.get(x),z=E.state.lights,xt=E.state.shadowsArray,Mt=z.state.version,_t=Z.getParameters(x,z.state,xt,L,G,E.state.lightProbeGridArray),Tt=Z.getProgramCacheKey(_t),Rt=B.programs;B.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,B.fog=L.fog;let qt=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;if(B.envMap=j.get(x.envMap||B.environment,qt),B.envMapRotation=B.environment!==null&&x.envMap===null?L.environmentRotation:x.envMapRotation,Rt===void 0)x.addEventListener("dispose",sn),Rt=new Map,B.programs=Rt;let Jt=Rt.get(Tt);if(Jt!==void 0){if(B.currentProgram===Jt&&B.lightsStateVersion===Mt)return el(x,_t),Jt}else{if(_t.uniforms=Z.getUniforms(x),D!==null&&x.isNodeMaterial)D.build(x,G,_t);x.onBeforeCompile(_t,b),Jt=Z.acquireProgram(_t,Tt),Rt.set(Tt,Jt),B.uniforms=_t.uniforms}let wt=B.uniforms;if(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)wt.clippingPlanes=ot.uniform;if(el(x,_t),B.needsLights=Fh(x),B.lightsStateVersion=Mt,B.needsLights)wt.ambientLightColor.value=z.state.ambient,wt.lightProbe.value=z.state.probe,wt.sunLights.value=z.state.sun,wt.sunLightShadows.value=z.state.sunShadow,wt.directionalLights.value=z.state.directional,wt.directionalLightShadows.value=z.state.directionalShadow,wt.spotLights.value=z.state.spot,wt.spotLightShadows.value=z.state.spotShadow,wt.rectAreaLights.value=z.state.rectArea,wt.ltc_1.value=z.state.rectAreaLTC1,wt.ltc_2.value=z.state.rectAreaLTC2,wt.pointLights.value=z.state.point,wt.pointLightShadows.value=z.state.pointShadow,wt.hemisphereLights.value=z.state.hemi,wt.sunShadowMatrix.value=z.state.sunShadowMatrix,wt.sunShadowCascade.value=z.state.sunShadowCascade,wt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,wt.spotLightMatrix.value=z.state.spotLightMatrix,wt.spotLightMap.value=z.state.spotLightMap,wt.pointShadowMatrix.value=z.state.pointShadowMatrix;return B.lightProbeGrid=E.state.lightProbeGridArray.length>0,B.currentProgram=Jt,B.uniformsList=null,Jt}function tl(x){if(x.uniformsList===null){let L=x.currentProgram.getUniforms();x.uniformsList=us.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function el(x,L){let G=C.get(x);G.outputColorSpace=L.outputColorSpace,G.batching=L.batching,G.batchingColor=L.batchingColor,G.instancing=L.instancing,G.instancingColor=L.instancingColor,G.instancingMorph=L.instancingMorph,G.skinning=L.skinning,G.morphTargets=L.morphTargets,G.morphNormals=L.morphNormals,G.morphColors=L.morphColors,G.morphTargetsCount=L.morphTargetsCount,G.numClippingPlanes=L.numClippingPlanes,G.numIntersection=L.numClipIntersection,G.vertexAlphas=L.vertexAlphas,G.vertexTangents=L.vertexTangents,G.toneMapping=L.toneMapping}function Nh(x,L){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;T.setFromMatrixPosition(L.matrixWorld);for(let G=0,B=x.length;G<B;G++){let z=x[G];if(z.texture!==null&&z.boundingBox.containsPoint(T))return z}return null}function Dh(x,L,G,B,z){if(L.isScene!==!0)L=At;O.resetTextureUnits();let xt=L.fog,Mt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?L.environment:null,_t=k===null?b.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Qt.workingColorSpace,Tt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Rt=j.get(B.envMap||Mt,Tt),qt=B.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Jt=!!G.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),wt=!!G.morphAttributes.position,se=!!G.morphAttributes.normal,ve=!!G.morphAttributes.color,de=en;if(B.toneMapped){if(k===null||k.isXRRenderTarget===!0)de=b.toneMapping}let le=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ae=le!==void 0?le.length:0,St=C.get(B),Le=E.state.lights;if(Kt===!0){if(ee===!0||x!==X){let ue=x===X&&B.id===st;ot.setState(B,x,ue)}}let te=!1;if(B.version===St.__version){if(St.needsLights&&St.lightsStateVersion!==Le.state.version)te=!0;else if(St.outputColorSpace!==_t)te=!0;else if(z.isBatchedMesh&&St.batching===!1)te=!0;else if(!z.isBatchedMesh&&St.batching===!0)te=!0;else if(z.isBatchedMesh&&St.batchingColor===!0&&z._colorsTexture===null)te=!0;else if(z.isBatchedMesh&&St.batchingColor===!1&&z._colorsTexture!==null)te=!0;else if(z.isInstancedMesh&&St.instancing===!1)te=!0;else if(!z.isInstancedMesh&&St.instancing===!0)te=!0;else if(z.isSkinnedMesh&&St.skinning===!1)te=!0;else if(!z.isSkinnedMesh&&St.skinning===!0)te=!0;else if(z.isInstancedMesh&&St.instancingColor===!0&&z.instanceColor===null)te=!0;else if(z.isInstancedMesh&&St.instancingColor===!1&&z.instanceColor!==null)te=!0;else if(z.isInstancedMesh&&St.instancingMorph===!0&&z.morphTexture===null)te=!0;else if(z.isInstancedMesh&&St.instancingMorph===!1&&z.morphTexture!==null)te=!0;else if(St.envMap!==Rt)te=!0;else if(B.fog===!0&&St.fog!==xt)te=!0;else if(St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==ot.numPlanes||St.numIntersection!==ot.numIntersection))te=!0;else if(St.vertexAlphas!==qt)te=!0;else if(St.vertexTangents!==Jt)te=!0;else if(St.morphTargets!==wt)te=!0;else if(St.morphNormals!==se)te=!0;else if(St.morphColors!==ve)te=!0;else if(St.toneMapping!==de)te=!0;else if(St.morphTargetsCount!==Ae)te=!0;else if(!!St.lightProbeGrid!==E.state.lightProbeGridArray.length>0)te=!0}else te=!0,St.__version=B.version;let He=St.currentProgram;if(te===!0){if(He=fs(B,L,z),D&&B.isNodeMaterial)D.onUpdateProgram(B,He,St)}let rn=!1,bn=!1,si=!1,oe=He.getUniforms(),xe=St.uniforms;if(M.useProgram(He.program))rn=!0,bn=!0,si=!0;if(B.id!==st)st=B.id,bn=!0;if(St.needsLights){let ue=Nh(E.state.lightProbeGridArray,z);if(St.lightProbeGrid!==ue)St.lightProbeGrid=ue,bn=!0}if(rn||X!==x){if(M.buffers.depth.getReversed()&&x.reversedDepth!==!0)x._reversedDepth=!0,x.updateProjectionMatrix();oe.setValue(R,"projectionMatrix",x.projectionMatrix),oe.setValue(R,"viewMatrix",x.matrixWorldInverse);let Tn=oe.map.cameraPosition;if(Tn!==void 0)Tn.setValue(R,dt.setFromMatrixPosition(x.matrixWorld));if(zt.logarithmicDepthBuffer)oe.setValue(R,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2));if(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)oe.setValue(R,"isOrthographic",x.isOrthographicCamera===!0);if(X!==x)X=x,bn=!0,si=!0}if(St.needsLights){if(Le.state.sunShadowMap.length>0)oe.setValue(R,"sunShadowMap",Le.state.sunShadowMap,O);if(Le.state.directionalShadowMap.length>0)oe.setValue(R,"directionalShadowMap",Le.state.directionalShadowMap,O);if(Le.state.spotShadowMap.length>0)oe.setValue(R,"spotShadowMap",Le.state.spotShadowMap,O);if(Le.state.pointShadowMap.length>0)oe.setValue(R,"pointShadowMap",Le.state.pointShadowMap,O)}if(z.isSkinnedMesh){oe.setOptional(R,z,"bindMatrix"),oe.setOptional(R,z,"bindMatrixInverse");let ue=z.skeleton;if(ue){if(ue.boneTexture===null)ue.computeBoneTexture();oe.setValue(R,"boneTexture",ue.boneTexture,O)}}if(z.isBatchedMesh){if(oe.setOptional(R,z,"batchingTexture"),oe.setValue(R,"batchingTexture",z._matricesTexture,O),oe.setOptional(R,z,"batchingIdTexture"),oe.setValue(R,"batchingIdTexture",z._indirectTexture,O),oe.setOptional(R,z,"batchingColorTexture"),z._colorsTexture!==null)oe.setValue(R,"batchingColorTexture",z._colorsTexture,O)}let En=G.morphAttributes;if(En.position!==void 0||En.normal!==void 0||En.color!==void 0)ne.update(z,G,He);if(bn||St.receiveShadow!==z.receiveShadow)St.receiveShadow=z.receiveShadow,oe.setValue(R,"receiveShadow",z.receiveShadow);if((B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&L.environment!==null)xe.envMapIntensity.value=L.environmentIntensity;if(xe.dfgLUT!==void 0)xe.dfgLUT.value=Lg();if(bn){if(oe.setValue(R,"toneMappingExposure",b.toneMappingExposure),St.needsLights)Uh(xe,si);if(xt&&B.fog===!0)vt.refreshFogUniforms(xe,xt);if(vt.refreshMaterialUniforms(xe,B,rt,q,E.state.transmissionRenderTarget[x.id]),St.needsLights&&St.lightProbeGrid){let ue=St.lightProbeGrid;xe.probesSH.value=ue.texture,xe.probesMin.value.copy(ue.boundingBox.min),xe.probesMax.value.copy(ue.boundingBox.max),xe.probesResolution.value.copy(ue.resolution)}us.upload(R,tl(St),xe,O)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0)us.upload(R,tl(St),xe,O),B.uniformsNeedUpdate=!1;if(B.isSpriteMaterial)oe.setValue(R,"center",z.center);if(oe.setValue(R,"modelViewMatrix",z.modelViewMatrix),oe.setValue(R,"normalMatrix",z.normalMatrix),oe.setValue(R,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){let ue=B.uniformsGroups;for(let Tn=0,ri=ue.length;Tn<ri;Tn++){let il=ue[Tn];yt.update(il,He),yt.bind(il,He)}}return He}function Uh(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.sunLights.needsUpdate=L,x.sunLightShadows.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function Fh(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(x,L,G){let B=C.get(x);if(B.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1)B.__useRenderToTexture=!1;C.get(x.texture).__webglTexture=L,C.get(x.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:G,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,L){let G=C.get(x);G.__webglFramebuffer=L,G.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(x,L=0,G=0){k=x,V=L,K=G;let B=null,z=!1,xt=!1;if(x){let _t=C.get(x);if(_t.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(R.FRAMEBUFFER,_t.__webglFramebuffer),J.copy(x.viewport),it.copy(x.scissor),Dt=x.scissorTest,M.viewport(J),M.scissor(it),M.setScissorTest(Dt),st=-1;return}else if(_t.__webglFramebuffer===void 0)O.setupRenderTarget(x);else if(_t.__hasExternalTextures)O.rebindTextures(x,C.get(x.texture).__webglTexture,C.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let qt=x.depthTexture;if(_t.__boundDepthTexture!==qt){if(qt!==null&&C.has(qt)&&(x.width!==qt.image.width||x.height!==qt.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(x)}}let Tt=x.texture;if(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)xt=!0;let Rt=C.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget){if(Array.isArray(Rt[L]))B=Rt[L][G];else B=Rt[L];z=!0}else if(x.samples>0&&O.useMultisampledRTT(x)===!1)B=C.get(x).__webglMultisampledFramebuffer;else if(Array.isArray(Rt))B=Rt[G];else B=Rt;J.copy(x.viewport),it.copy(x.scissor),Dt=x.scissorTest}else J.copy(Ut).multiplyScalar(rt).floor(),it.copy(It).multiplyScalar(rt).floor(),Dt=_e;if(G!==0)B=F;if(M.bindFramebuffer(R.FRAMEBUFFER,B))M.drawBuffers(x,B);if(M.viewport(J),M.scissor(it),M.setScissorTest(Dt),z){let _t=C.get(x.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+L,_t.__webglTexture,G)}else if(xt){let _t=L;for(let Tt=0;Tt<x.textures.length;Tt++){let Rt=C.get(x.textures[Tt]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Tt,Rt.__webglTexture,G,_t)}}else if(x!==null&&G!==0){let _t=C.get(x.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,_t.__webglTexture,G)}st=-1};function nl(x){let L=C.get(x);if(L.__readFormat!==x.format||L.__readType!==x.type)L.__readFormat=x.format,L.__readType=x.type,L.__formatReadable=zt.textureFormatReadable(x.format),L.__typeReadable=zt.textureTypeReadable(x.type);return L}if(this.readRenderTargetPixels=function(x,L,G,B,z,xt,Mt,_t=0){if(!(x&&x.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=C.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Mt!==void 0)Tt=Tt[Mt];if(Tt){M.bindFramebuffer(R.FRAMEBUFFER,Tt);try{let Rt=x.textures[_t],{format:qt,type:Jt}=Rt;if(x.textures.length>1)R.readBuffer(R.COLOR_ATTACHMENT0+_t);let wt=nl(Rt);if(wt.__formatReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(wt.__typeReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(L>=0&&L<=x.width-B&&(G>=0&&G<=x.height-z))R.readPixels(L,G,B,z,Y.convert(qt),Y.convert(Jt),xt)}finally{let Rt=k!==null?C.get(k).__webglFramebuffer:null;M.bindFramebuffer(R.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(x,L,G,B,z,xt,Mt,_t=0){if(!(x&&x.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=C.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Mt!==void 0)Tt=Tt[Mt];if(Tt)if(L>=0&&L<=x.width-B&&(G>=0&&G<=x.height-z)){M.bindFramebuffer(R.FRAMEBUFFER,Tt);let Rt=x.textures[_t],{format:qt,type:Jt}=Rt;if(x.textures.length>1)R.readBuffer(R.COLOR_ATTACHMENT0+_t);let wt=nl(Rt);if(wt.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(wt.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let se=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,se),R.bufferData(R.PIXEL_PACK_BUFFER,xt.byteLength,R.STREAM_READ),R.readPixels(L,G,B,z,Y.convert(qt),Y.convert(Jt),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);let ve=k!==null?C.get(k).__webglFramebuffer:null;M.bindFramebuffer(R.FRAMEBUFFER,ve);let de=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Dc(R,de,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,se),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,xt),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(se),R.deleteSync(de),xt}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,L=null,G=0){let B=Math.pow(2,-G),z=Math.floor(x.image.width*B),xt=Math.floor(x.image.height*B),Mt=L!==null?L.x:0,_t=L!==null?L.y:0;O.setTexture2D(x,0),R.copyTexSubImage2D(R.TEXTURE_2D,G,0,0,Mt,_t,z,xt),M.unbindTexture()},this.copyTextureToTexture=function(x,L,G=null,B=null,z=0,xt=0){let Mt,_t,Tt,Rt,qt,Jt,wt,se,ve,de=x.isCompressedTexture?x.mipmaps[xt]:x.image;if(G!==null)Mt=G.max.x-G.min.x,_t=G.max.y-G.min.y,Tt=G.isBox3?G.max.z-G.min.z:1,Rt=G.min.x,qt=G.min.y,Jt=G.isBox3?G.min.z:0;else{let xe=Math.pow(2,-z);if(Mt=Math.floor(de.width*xe),_t=Math.floor(de.height*xe),x.isDataArrayTexture)Tt=de.depth;else if(x.isData3DTexture)Tt=Math.floor(de.depth*xe);else Tt=1;Rt=0,qt=0,Jt=0}if(B!==null)wt=B.x,se=B.y,ve=B.z;else wt=0,se=0,ve=0;let le=Y.convert(L.format),Ae=Y.convert(L.type),St;if(L.isData3DTexture)O.setTexture3D(L,0),St=R.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)O.setTexture2DArray(L,0),St=R.TEXTURE_2D_ARRAY;else O.setTexture2D(L,0),St=R.TEXTURE_2D;M.activeTexture(R.TEXTURE0),M.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,L.flipY),M.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),M.pixelStorei(R.UNPACK_ALIGNMENT,L.unpackAlignment);let Le=M.getParameter(R.UNPACK_ROW_LENGTH),te=M.getParameter(R.UNPACK_IMAGE_HEIGHT),He=M.getParameter(R.UNPACK_SKIP_PIXELS),rn=M.getParameter(R.UNPACK_SKIP_ROWS),bn=M.getParameter(R.UNPACK_SKIP_IMAGES);M.pixelStorei(R.UNPACK_ROW_LENGTH,de.width),M.pixelStorei(R.UNPACK_IMAGE_HEIGHT,de.height),M.pixelStorei(R.UNPACK_SKIP_PIXELS,Rt),M.pixelStorei(R.UNPACK_SKIP_ROWS,qt),M.pixelStorei(R.UNPACK_SKIP_IMAGES,Jt);let si=x.isDataArrayTexture||x.isData3DTexture,oe=L.isDataArrayTexture||L.isData3DTexture;if(x.isDepthTexture){let xe=C.get(x),En=C.get(L),ue=C.get(xe.__renderTarget),Tn=C.get(En.__renderTarget);M.bindFramebuffer(R.READ_FRAMEBUFFER,ue.__webglFramebuffer),M.bindFramebuffer(R.DRAW_FRAMEBUFFER,Tn.__webglFramebuffer);for(let ri=0;ri<Tt;ri++){if(si)R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,C.get(x).__webglTexture,z,Jt+ri),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,C.get(L).__webglTexture,xt,ve+ri);R.blitFramebuffer(Rt,qt,Mt,_t,wt,se,Mt,_t,R.DEPTH_BUFFER_BIT,R.NEAREST)}M.bindFramebuffer(R.READ_FRAMEBUFFER,null),M.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(z!==0||x.isRenderTargetTexture||C.has(x)){let xe=C.get(x),En=C.get(L);M.bindFramebuffer(R.READ_FRAMEBUFFER,Q),M.bindFramebuffer(R.DRAW_FRAMEBUFFER,P);for(let ue=0;ue<Tt;ue++){if(si)R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,xe.__webglTexture,z,Jt+ue);else R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,xe.__webglTexture,z);if(oe)R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,En.__webglTexture,xt,ve+ue);else R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,En.__webglTexture,xt);if(z!==0)R.blitFramebuffer(Rt,qt,Mt,_t,wt,se,Mt,_t,R.COLOR_BUFFER_BIT,R.NEAREST);else if(oe)R.copyTexSubImage3D(St,xt,wt,se,ve+ue,Rt,qt,Mt,_t);else R.copyTexSubImage2D(St,xt,wt,se,Rt,qt,Mt,_t)}M.bindFramebuffer(R.READ_FRAMEBUFFER,null),M.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(oe)if(x.isDataTexture||x.isData3DTexture)R.texSubImage3D(St,xt,wt,se,ve,Mt,_t,Tt,le,Ae,de.data);else if(L.isCompressedArrayTexture)R.compressedTexSubImage3D(St,xt,wt,se,ve,Mt,_t,Tt,le,de.data);else R.texSubImage3D(St,xt,wt,se,ve,Mt,_t,Tt,le,Ae,de);else if(x.isDataTexture)R.texSubImage2D(R.TEXTURE_2D,xt,wt,se,Mt,_t,le,Ae,de.data);else if(x.isCompressedTexture)R.compressedTexSubImage2D(R.TEXTURE_2D,xt,wt,se,de.width,de.height,le,de.data);else R.texSubImage2D(R.TEXTURE_2D,xt,wt,se,Mt,_t,le,Ae,de);if(M.pixelStorei(R.UNPACK_ROW_LENGTH,Le),M.pixelStorei(R.UNPACK_IMAGE_HEIGHT,te),M.pixelStorei(R.UNPACK_SKIP_PIXELS,He),M.pixelStorei(R.UNPACK_SKIP_ROWS,rn),M.pixelStorei(R.UNPACK_SKIP_IMAGES,bn),xt===0&&L.generateMipmaps)R.generateMipmap(St);M.unbindTexture()},this.initRenderTarget=function(x){if(C.get(x).__webglFramebuffer===void 0)O.setupRenderTarget(x)},this.initTexture=function(x){if(x.isCubeTexture)O.setTextureCube(x,0);else if(x.isData3DTexture)O.setTexture3D(x,0);else if(x.isDataArrayTexture||x.isCompressedArrayTexture)O.setTexture2DArray(x,0);else O.setTexture2D(x,0);M.unbindTexture()},this.resetState=function(){V=0,K=0,k=null,M.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ja}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}var vv=8,yv=30;function Rh(t){let e=t/8*Math.PI*2;return{x:Math.sin(e),y:(1-Math.cos(e*2))*0.18,z:(1-Math.cos(e))*0.3,time:(1-Math.cos(e))*2}}var yr={ink:"#282429",blue:"#2b4587",red:"#a74343",orange:"#fd6e22",pink:"#ef88b9",mint:"#1dd0ae",yellow:"#ffb003",cyan:"#08beed",lilac:"#b6a5d2",coral:"#e96050",butter:"#dfd354",petrol:"#236466",rose:"#c58e95"},Ui=[{id:"flow",name:"Loose ends",center:[0,0,-12],inks:["ink","mint","orange","blue"],tools:["Thread","Ribbon","Colour"],note:"A thread can wander. Let it."},{id:"fold",name:"Soft geometry",center:[52,12,-50],inks:["blue","pink","yellow","ink"],tools:["Line","Fold","Cut-out"],note:"Colour opens up when you move around it."},{id:"soft",name:"Almost touching",center:[-48,-12,-64],inks:["coral","lilac","blue","butter"],tools:["Wander","Ribbon","Shape"],note:"Leave a little air between things."},{id:"print",name:"Overprint",center:[14,-24,-108],inks:["ink","coral","petrol","pink"],tools:["Scratch","Brush","Patch"],note:"Rough edges. Happy accidents."},{id:"echo",name:"Inside out",center:[57,-22,30],inks:["blue","orange","lilac","mint"],tools:["Contour","Band","Shape"],note:"One gesture. A few echoes."},{id:"hush",name:"The hush",center:[-52,24,18],inks:["ink","rose","lilac","orange"],tools:["Whisper","Smudge","Patch"],note:"Something small. Or something enormous."}],Vo=(t)=>Ui.find((e)=>e.id===t)||Ui[0],Sr=(t)=>()=>(t=Math.imul(t,1664525)+1013904223>>>0)/4294967296,Mr=(t)=>[...t].reduce((e,n)=>Math.imul(e^n.charCodeAt(0),16777619)>>>0,2166136261);function br(t){let e=Ui.map((n)=>{let i=n.center.map((s,r)=>s+Math.round((t[r]-s)/240)*240);return{env:n,center:i,distance:Math.hypot(...t.map((s,r)=>s-i[r]))}}).sort((n,i)=>n.distance-i.distance);return{primary:e[0].env,neighbour:e[1].env,center:e[0].center,blend:e[0].distance/(e[0].distance+e[1].distance)}}function Wo(t,e,n){let i=e%997/997*Math.PI*2,s=Math.sin(t*Math.PI);switch(n){case"fold":return Math.sin(t*Math.PI*4+i)*1.65*s;case"soft":return Math.sin(t*Math.PI+i)*2.8*s;case"print":return(t-0.5)*2.4+Math.sin(t*9+i)*0.35;case"echo":return Math.sin(t*Math.PI*2+i)*1.9;case"hush":return Math.sin(t*Math.PI*0.8+i)*1.1;default:return Math.sin(t*Math.PI*2+i)*2.1*s}}var Zt=(t=0,e=0,n=0)=>new U(t,e,n),Ch=Math.PI*2,Nn=(t,e=100,n=!1)=>new $n(t,n).getPoints(e);function Xo(t,e,{line:n,material:i},s=null){let r=new ke,a=Sr(e),o=t.inks.map((d)=>yr[d]),l=t.id,c=(d,_,y,m=0.035,f=!1,w=0.65)=>n(d,_,y,m,f,w,l),u=(d,_=100)=>Array.from({length:_+1},(y,m)=>d(m/_));function p(d,_,y,m){let f=[],w=[];_.forEach((E,A)=>{if(f.push(E.x-y,E.y,E.z-0.35,E.x+y,E.y,E.z+0.35),A<_.length-1){let I=A*2;w.push(I,I+1,I+2,I+1,I+3,I+2)}});let T=new Te;T.setAttribute("position",new Se(f,3)),T.setIndex(w),T.computeBoundingSphere();let v=new we(T,i(m,!1,1,!0,l));return d.add(v),v}function h(d,_,y,m=0,f=1){let w=new Kn(_.map((A)=>new bt(A[0],A[1]))),T=new Qn(w),v=T.getAttribute("position");for(let A=0;A<v.count;A++)v.setZ(A,m+Math.sin(v.getX(A)*0.17)*f+Math.cos(v.getY(A)*0.21)*f*0.45);T.computeBoundingSphere();let E=new we(T,i(y,!1,1,!0,l));return d.add(E),E}if(t.id==="flow"){let d=a()*Ch,_=30+a()*14;for(let y=0;y<18;y++){let m=u((f)=>{let w=f*Ch,T=Math.sin(f*Math.PI);return Zt((f-0.5)*_+Math.sin(w*2.5+d+y*0.06)*5*T,Math.sin(w*0.9+d)*5+Math.cos(w*3+y*0.09)*3*T+(y-9)*0.14,Math.sin(w*0.75+d)*7+Math.cos(w*2)*y*0.12)},140);c(r,m,o[y%9===0?2:y%7===0?0:1],y===0?0.1:0.025,y>2,y%3===0?0.28:0.62)}c(r,Nn([Zt(-18,-9,2),Zt(-5,6,-7),Zt(12,11,1),Zt(20,5,3)]),o[3],0.065),h(r,[[-5,-7],[-2,-5],[4,-6],[2,-8]],o[2],6,0.6)}if(t.id==="fold"){let d=9+Math.floor(a()*4);for(let y=0;y<d;y++){let m=u((f)=>Zt((y-d/2)*1.6+Math.sin(f*4+y*0.12)*3,(f-0.5)*21+Math.sin(y*0.6)*3,Math.sin(y*0.8)*5+Math.cos(f*4+y*0.3)*3),36);if(p(r,m,0.4+a()*0.28,o[y%5===0?2:y%3===0?1:0]),y%3===0)c(r,m.map((f)=>f.clone().add(Zt(-0.8,0,0.2))),o[3],0.025,!0,0.5)}let _=h(r,[[-13,-8],[-9,-10],[13,-3],[10,-1]],o[1],7,2);_.rotation.z=-0.25,c(r,Nn([Zt(-18,4,-3),Zt(-5,11,7),Zt(15,7,-1)]),o[2],0.045)}if(t.id==="soft"){for(let d=0;d<3;d++){let _=[[-8,-2],[-5,4],[-3,9],[1,6],[7,7],[9,0],[3,-5],[-4,-6]].map(([T,v])=>Zt(T*(0.7+a()*0.4),v*(0.6+a()*0.5),0)),y=Nn(_,72,!0),m=y.map((T)=>[T.x,T.y]),f=new ke;f.position.set((d-1)*13,(d===1?1:-1)*5,(d-1)*5),f.rotation.set(0,d*0.4-0.4,(d-1)*0.45),r.add(f),h(f,m,o[d],0,1.5);let w=y.map((T)=>T.clone().add(Zt(0.25,-0.2,-1.4)));if(c(f,w,o[(d+1)%4],0.11),d===1)for(let T=0;T<11;T++)c(f,u((v)=>Zt(-4+v*9,-3+T*0.6+Math.sin(v*3)*0.8,2),22),o[2],0.027,!0,0.45)}c(r,Nn([Zt(-24,3,2),Zt(-12,15,-5),Zt(3,9,9),Zt(23,14,0)]),o[3],0.065)}if(t.id==="print"){for(let d=0;d<3;d++){let _=new ke;if(_.position.set((d-1)*11,(d-1)*-3,d*3),_.rotation.z=(a()-0.5)*1.1,r.add(_),d!==1)h(_,[[-6,-5],[-3,7],[4,5],[6,-6]],o[d===0?2:3],-0.6,0.4);for(let y=0;y<26;y++){let m=(y/26-0.5)*13,f=(a()-0.5)*3,w=7+a()*8,T=u((v)=>Zt(m+Math.sin(v*18+y)*0.12+Math.sin(v*5)*1.1,f+(v-0.5)*w,Math.sin(v*3)*0.7+1),20);c(_,T,o[d===1?0:1],y%4===0?0.11:0.025,y%4!==0,0.65)}}for(let d=0;d<13;d++){let _=(a()-0.5)*36,y=(a()-0.5)*23;c(r,[Zt(_,y,4),Zt(_+0.6+a()*1.5,y+0.3,4)],o[0],0.04)}}if(t.id==="echo"){let d=[[-9,-4],[-11,2],[-3,9],[6,7],[10,1],[5,-8],[-3,-5]].map(([y,m])=>Zt(y+(a()-0.5)*3,m+(a()-0.5)*3,0));for(let y=0;y<13;y++){let m=0.35+y*0.09,f=y*0.055,w=Nn(d.map((T)=>Zt((T.x*Math.cos(f)-T.y*Math.sin(f))*m+y*0.2,(T.x*Math.sin(f)+T.y*Math.cos(f))*m,Math.sin(y*0.4)*4+y*0.32)),100,!0);c(r,w,o[y%5===0?1:y%3===0?2:0],y%5===0?0.16:0.037,y%3===1,0.7)}let _=Nn([Zt(-25,-9,3),Zt(-12,7,-4),Zt(0,0,5),Zt(14,-12,2),Zt(23,5,-8)],140);c(r,_,o[3],0.2),c(r,_.map((y)=>y.clone().add(Zt(0,0.45,0.8))),o[1],0.04)}if(t.id==="hush"){let d=Nn([Zt(-28,-8,-7),Zt(-16,-3,-4),Zt(-4,11,4),Zt(4,6,8),Zt(0,-2,2),Zt(22,7,-5)],130);c(r,d,o[0],0.12);for(let _=0;_<5;_++)c(r,d.map((y,m)=>y.clone().add(Zt(Math.sin(m*0.4+_)*0.16,(_-2)*0.13,Math.sin(m*0.07+_)*0.9))),o[_%2===0?1:0],0.02,!0,0.3);h(r,[[9,-8],[10,-4],[11,-7],[15,-8],[11,-9]],o[3],4,0.7);for(let _=0;_<4;_++)c(r,Nn([Zt(-14+_*0.3,9,2),Zt(-12+_*0.3,11,-1),Zt(-10+_*0.2,10,3)],25),o[2],0.03)}if(s){let d=Xo(s,e^91823,{line:n,material:i});d.scale.setScalar(0.25),d.position.set(14,8,-6),d.rotation.z=0.65,r.add(d)}return r}var Ih=yr,qo="#f0e8d9",Ng=Math.PI*2,pe=(t=0,e=0,n=0)=>new U(t,e,n),Yo=Sr,fn=(t,e,n)=>Math.max(e,Math.min(n,t));function Rv(t,e){if(t.preventDefault(),e.state.making)return!1;if(t.ctrlKey)e.dolly(-t.deltaY*0.14);else e.state.speed=fn(e.state.speed-t.deltaY*0.035,0,100),e.state.paused=!1;return!0}function Dg(t,e=0.035){let n=[],i=[],r=pe(),a=pe(),o=pe();for(let c=0;c<t.length;c++){r.subVectors(t[Math.min(t.length-1,c+1)],t[Math.max(0,c-1)]).normalize(),a.crossVectors(r,Math.abs(r.y)>0.94?pe(1,0,0):pe(0,1,0)).normalize(),o.crossVectors(r,a);let u=0.3+0.7*Math.max(0,Math.sin(Math.PI*c/(t.length-1)))**0.3;for(let p=0;p<5;p++){let h=p/5*Ng,d=t[c].clone().addScaledVector(a,Math.cos(h)*e*u).addScaledVector(o,Math.sin(h)*e*u);if(n.push(d.x,d.y,d.z),c<t.length-1){let _=c*5+p,y=c*5+(p+1)%5,m=_+5,f=y+5;i.push(_,y,m,y,f,m)}}}let l=new Te;return l.setAttribute("position",new Se(n,3)),l.setIndex(i),l.computeBoundingSphere(),l}function Cv(t,{onMove:e=()=>{},onFrame:n=()=>{}}={}){let i=new vr({canvas:t,antialias:!0,alpha:!1,powerPreference:"high-performance"});i.setPixelRatio(Math.min(window.devicePixelRatio,1.8)),i.setClearColor(qo);let s=new tr;s.fog=new is(qo,58,160);let r=new Ne(57,1,0.08,185);r.position.set(0,0,22),r.rotation.order="YXZ";let a=matchMedia("(prefers-reduced-motion: reduce)"),o={speed:a.matches?0:24,paused:a.matches,making:!1,yaw:0,pitch:0,time:0,items:[],travel:0,environment:Ui[0]},l={uTime:{value:0},uRipple:{value:pe(9999,9999,9999)},uRippleStart:{value:-100}},c=new Map,u=new Map,p=new Map,h=new Set,d=new Map,_=new ke;s.add(_);let y=null,m=performance.now(),f="",w=0,T=0,v=0,E=null,A=pe(),I=pe(),S=pe(),b=new on(0,0,0,"YXZ");function H(nt,dt=!1,tt=1,At=!0,Et="flow"){let ft=[nt,dt,tt,At,Et].join("/");if(c.has(ft))return c.get(ft);let R=dt?new rs({color:nt,transparent:tt<1,opacity:tt}):new Ii({color:nt,side:qe}),Vt={flow:1,fold:0.24,soft:0.48,print:0.18,echo:0.75,hush:0.4}[Et]??1,kt={fold:"transformed.z += sin(position.y*.12 + uTime*.12)*.35;",soft:"transformed.xy += position.xy * sin(uTime*.17 + worldPoint.z*.02)*.012;",echo:"transformed.xy += position.xy * sin(uTime*.34 + worldPoint.z*.04)*.018;",hush:"transformed.y += sin(worldPoint.x*.07 + uTime*.08)*.25;"}[Et]||"";if(R.customProgramCacheKey=()=>ft,At)R.onBeforeCompile=(zt)=>{Object.assign(zt.uniforms,l),zt.vertexShader=`uniform float uTime; uniform vec3 uRipple; uniform float uRippleStart;
`+zt.vertexShader,zt.vertexShader=zt.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        vec3 worldPoint = (modelMatrix * vec4(position, 1.0)).xyz;
        float age = uTime - uRippleStart;
        float distanceToRipple = distance(worldPoint, uRipple);
        float wave = sin(distanceToRipple * .6 - age * 2.0) * exp(-abs(distanceToRipple - age * 6.0) * .2) * max(0.0, 1.0-age/12.0);
        transformed.x += sin(worldPoint.y*.11 + worldPoint.z*.04 + uTime*.24) * ${(Vt*0.42).toFixed(3)} + wave*.65;
        transformed.y += sin(worldPoint.x*.08 + uTime*.19) * ${(Vt*0.55).toFixed(3)} + wave*.45;
        transformed.z += cos(worldPoint.y*.09 + worldPoint.x*.06 + uTime*.16) * ${(Vt*0.35).toFixed(3)};
        ${kt}
      `)};return c.set(ft,R),R}function D(nt,dt,tt,At=0.035,Et=!1,ft=0.6,R="flow"){if(dt.length<2)return;let Vt=Et?new Te().setFromPoints(dt):Dg(dt,At),kt=Et?new sr(Vt,H(tt,!0,ft,!0,R)):new we(Vt,H(tt,!1,1,!0,R));return nt.add(kt),kt}function F(nt){nt.traverse((dt)=>dt.geometry?.dispose()),nt.removeFromParent()}function Q(){let nt=r.position.clone().divideScalar(48).round(),dt=nt.toArray().join(",");if(dt===f)return;f=dt;let tt=new Set,At=Ui.map((ft)=>({env:ft,center:pe(...ft.center.map((R,Vt)=>R+Math.round((r.position.getComponent(Vt)-R)/240)*240))}));function Et(ft,R,Vt,kt,zt,M=1){if(tt.add(ft),u.has(ft))return;let g=Xo(kt,Vt,{line:D,material:H},zt);if(g.position.copy(R),g.scale.setScalar(M),g.userData.environment=kt.id,!ft.startsWith("landmark/")){let C=Yo(Vt);g.rotation.set((C()-0.5)*0.8,(C()-0.5)*1.4,(C()-0.5)*1.5),g.scale.y*=0.7+C()*0.6}s.add(g),u.set(ft,g)}for(let{env:ft,center:R}of At)if(r.position.distanceTo(R)<157)Et("landmark/"+ft.id+"/"+R.toArray().join(","),R,Mr(ft.id),ft,null);for(let ft=-2;ft<=2;ft++)for(let R=-2;R<=2;R++)for(let Vt=-2;Vt<=2;Vt++){if(ft*ft+R*R+Vt*Vt>5)continue;let kt=nt.x+ft,zt=nt.y+R,M=nt.z+Vt,g=[kt,zt,M].join(","),C=Mr(g),O=Yo(C);if(O()<0.48)continue;let j=pe(kt*48+(O()-0.5)*15,zt*48+(O()-0.5)*15,M*48+(O()-0.5)*15);if(At.some((ct)=>ct.center.distanceTo(j)<33))continue;let at=br(j.toArray());Et(g,j,C,at.primary,at.blend>0.35?at.neighbour:null,0.65+O()*0.24)}for(let[ft,R]of u)if(!tt.has(ft))F(R),u.delete(ft)}function P(nt){if(nt.space)return nt.space;let dt=Mr(nt.id),tt=Yo(dt);return{position:[nt.x*0.035,(tt()-0.5)*24,nt.y*0.035-28],rotation:[0,0,0,1]}}function V(nt,dt=!1){let tt=new ke,At=P(nt),Et=Vo(At.environment);return tt.position.fromArray(At.position),tt.quaternion.fromArray(At.rotation),nt.strokes.forEach((ft,R)=>{if(ft.points.length<2)return;let Vt=Ih[ft.ink]||Ih.ink,kt=tt.children.length,zt=ft.points.map((M,g)=>pe(M[0]*0.03,-M[1]*0.03,dt?0:Wo(g/(ft.points.length-1),ft.seed,Et.id)));if(zt.length>2)zt=new $n(zt).getPoints(Math.min(350,Math.max(24,zt.length*2)));if(ft.kind==="form"){let M=new Kn(zt.map((W)=>new bt(W.x,W.y))),g=new Qn(M),C=g.getAttribute("position");g.computeBoundingBox();let{min:O,max:j}=g.boundingBox,at=Math.max(0.001,j.x-O.x);if(!dt)for(let W=0;W<C.count;W++)C.setZ(W,Wo((C.getX(W)-O.x)/at,ft.seed,Et.id));g.computeBoundingSphere();let ct=new we(g,H(Vt,!1,1,!dt,Et.id));ct.userData.fill=!0,tt.add(ct)}else{let M=ft.kind==="ribbon"?0.19:ft.kind==="thread"?0.018:Et.id==="hush"?0.032:0.05;if(D(tt,zt,Vt,M,!1,1,Et.id),!dt&&Et.id==="echo")for(let g=1;g<=2;g++)D(tt,zt.map((C)=>C.clone().multiplyScalar(1+g*0.035).add(pe(g*0.14,0,g*0.65))),Vt,0.023,!0,0.55,Et.id);if(!dt&&Et.id==="print"&&ft.kind==="ribbon")for(let g=0;g<7;g++)D(tt,zt.map((C,O)=>C.clone().add(pe((g-3)*0.095+Math.sin(O+g)*0.03,0,g*0.08))),Vt,0.018,!0,0.7,Et.id);if(ft.kind==="script")D(tt,zt.map((g,C)=>g.clone().add(pe(Math.sin(C*1.5)*0.12,Math.cos(C*1.5)*0.25,0))),Vt,0.022)}for(let M of tt.children.slice(kt))if(M.userData.order=R/nt.strokes.length,M.userData.total=M.geometry.index?.count||M.geometry.attributes.position.count,M.userData.unit=M.isLine?1:30,dt)M.material=H(Vt,!1,1,!1)}),tt}function K(nt,dt=!1){let tt=p.get(nt.id);if(!tt)return;if(a.matches||o.paused)return;d.set(nt.id,{group:tt,age:0,draw:dt}),tt.scale.z=0.015;for(let At of tt.children)At.scale.y=dt&&At.userData.fill?0.001:1,At.geometry.setDrawRange(0,dt&&!At.userData.fill?0:1/0)}function k(nt){for(let[dt,tt]of d){tt.age+=nt;let At=fn((tt.age-0.25)/2.5,0,1);tt.group.scale.z=0.015+0.985*(1-(1-At)**3);for(let Et of tt.group.children){if(!tt.draw)continue;let ft=fn((tt.age-Et.userData.order*0.9)/1.6,0,1);if(Et.userData.fill)Et.scale.y=Math.max(0.001,1-(1-ft)**3);else Et.geometry.setDrawRange(0,Math.floor(Et.userData.total*ft/Et.userData.unit)*Et.userData.unit)}if(tt.age>=3){tt.group.scale.z=1;for(let Et of tt.group.children)Et.scale.set(1,1,1),Et.geometry.setDrawRange(0,1/0);d.delete(dt)}}}function st(){let nt=o.items.map((tt)=>({item:tt,d:r.position.distanceToSquared(pe(...P(tt).position))})).filter((tt)=>tt.d<21025).sort((tt,At)=>tt.d-At.d).slice(0,220),dt=new Set(nt.map((tt)=>tt.item.id));for(let{item:tt}of nt)if(!p.has(tt.id)){let At=V(tt);if(s.add(At),p.set(tt.id,At),Date.now()-Date.parse(tt.createdAt)<3500)K(tt,!0)}for(let[tt,At]of p)if(!dt.has(tt))F(At),p.delete(tt),d.delete(tt)}function X(){i.setSize(innerWidth,innerHeight,!1),r.aspect=innerWidth/innerHeight,r.updateProjectionMatrix()}function J(){r.rotation.set(o.pitch,o.yaw,0,"YXZ"),r.updateMatrixWorld()}function it(nt,dt){E=null,o.yaw-=nt*0.004,o.pitch=fn(o.pitch-dt*0.004,-1.48,1.48),J()}function Dt(nt){if(!o.making)E=null,v=fn(v+nt,-28,28)}function Pt(){E=null,v=0,r.position.set(0,0,22),o.yaw=0,o.pitch=0,J(),f="",Q(),st(),e()}function re(nt){E=null,v=0;let dt=P(nt),tt=new Ye().fromArray(dt.rotation);r.position.copy(pe(...dt.position)).add(pe(0,0,23).applyQuaternion(tt)),b.setFromQuaternion(tt,"YXZ"),o.yaw=b.y,o.pitch=b.x,J(),Q(),st()}function Wt(nt){let dt=Vo(nt),tt=pe(...dt.center.map((At,Et)=>At+Math.round((r.position.getComponent(Et)-At)/240)*240)).add(pe(0,1,32));if(a.matches){r.position.copy(tt),o.yaw=0,o.pitch=0,J(),Q(),st();return}E={start:r.position.clone(),target:tt,yaw:Math.atan2(Math.sin(o.yaw),Math.cos(o.yaw)),pitch:o.pitch,age:0},v=0}function q(nt=null){if(o.making=!0,v=0,E=null,nt)y=nt,re(y);else{r.getWorldDirection(A);let dt=r.position.clone().addScaledVector(A,23);y={id:crypto.randomUUID(),x:dt.x,y:dt.z,space:{position:dt.toArray(),rotation:r.quaternion.toArray(),environment:br(r.position.toArray()).primary.id},strokes:[]}}return rt(y),y}function rt(nt){y=nt;for(let dt of[..._.children])F(dt);if(nt){let dt=V(nt,!0);_.add(dt)}}function lt(nt,dt){let tt=new pr;tt.setFromCamera(new bt(nt/innerWidth*2-1,-dt/innerHeight*2+1),r);let At=new Ye().fromArray(y.space.rotation),Et=new We().setFromNormalAndCoplanarPoint(pe(0,0,1).applyQuaternion(At),pe(...y.space.position)),ft=tt.ray.intersectPlane(Et,pe());if(!ft)return null;return ft.sub(pe(...y.space.position)).applyQuaternion(At.invert()),[fn(ft.x/0.03,-2900,2900),fn(-ft.y/0.03,-2900,2900),0.5]}function Lt(){o.making=!1,rt(null)}function Ut(nt){l.uRipple.value.fromArray(P(nt).position),l.uRippleStart.value=o.time}function It(nt){o.items=nt,st()}function _e(nt,dt){if(dt)E=null,h.add(nt.toLowerCase());else h.delete(nt.toLowerCase())}function Xt(){h.clear(),v=0,E=null}function Kt(nt,dt){let tt=s.clone(),At=r.clone(),Et=r.position.clone(),ft=new Map;tt.traverse((C)=>{if(!C.geometry)return;if(!ft.has(C.geometry))ft.set(C.geometry,C.geometry.clone());C.geometry=ft.get(C.geometry)});let R=new vr({antialias:!0,alpha:!1,powerPreference:"high-performance"});R.setSize(nt,dt,!1),R.setClearColor(qo),At.aspect=nt/dt,At.updateProjectionMatrix();let Vt=o.time,kt=l.uRipple.value.clone(),zt=l.uRippleStart.value,M=!o.paused&&!a.matches,g=0.65+o.speed*0.025;return{moving:M,render(C){let O=Rh(M?C:0);At.position.copy(Et).add(pe(O.x,O.y,O.z).multiplyScalar(g).applyQuaternion(At.quaternion)),At.updateMatrixWorld();let j=l.uTime.value,at=l.uRipple.value.clone(),ct=l.uRippleStart.value;l.uTime.value=Vt+O.time,l.uRipple.value.copy(kt),l.uRippleStart.value=zt;try{R.render(tt,At)}finally{l.uTime.value=j,l.uRipple.value.copy(at),l.uRippleStart.value=ct}return R.domElement},dispose(){ft.forEach((C)=>C.dispose()),R.dispose(),R.forceContextLoss()}}}function ee(nt){let dt=Math.min((nt-m)/1000,0.04);if(m=nt,!document.hidden){if(!o.paused)o.time+=dt;if(l.uTime.value=o.time,!o.paused)k(dt);if(!o.making&&E){E.age+=dt;let tt=fn(E.age/4,0,1),At=tt*tt*(3-2*tt),Et=r.position.clone();if(r.position.lerpVectors(E.start,E.target,At),o.yaw=E.yaw*(1-At),o.pitch=E.pitch*(1-At),o.travel+=Et.distanceTo(r.position),J(),Q(),st(),tt===1)E=null}else if(!o.making){let tt=dt*0.9;if(h.has("arrowleft"))o.yaw+=tt;if(h.has("arrowright"))o.yaw-=tt;if(h.has("arrowup"))o.pitch=fn(o.pitch+tt,-1.48,1.48);if(h.has("arrowdown"))o.pitch=fn(o.pitch-tt,-1.48,1.48);J(),r.getWorldDirection(A),I.set(1,0,0).applyQuaternion(r.quaternion),S.set(0,0,0);let At=o.paused?0:o.speed**1.6*0.008,Et=4+o.speed*0.07;S.addScaledVector(A,At+(h.has("w")?Et:0)-(h.has("s")?Et+At:0)),S.addScaledVector(I,(Number(h.has("d"))-Number(h.has("a")))*Et),S.y+=(Number(h.has("e"))-Number(h.has("q")))*Et;let ft=v*(a.matches?1:1-Math.exp(-dt*18));if(v-=ft,Math.abs(v)<0.0001)v=0;if(S.multiplyScalar(dt).addScaledVector(A,ft),r.position.add(S),o.travel+=S.length(),r.position.clampScalar(-49000,49000),Q(),nt-w>600)st(),w=nt}if(i.render(s,r),++T%8===0)o.environment=br(r.position.toArray()).primary,n({yaw:o.yaw,position:r.position,travel:o.travel,environment:o.environment})}requestAnimationFrame(ee)}return addEventListener("resize",X),addEventListener("blur",Xt),document.addEventListener("visibilitychange",Xt),a.addEventListener("change",(nt)=>{if(nt.matches)o.paused=!0,o.speed=0;e()}),X(),J(),Q(),requestAnimationFrame(ee),{state:o,camera:r,renderer:i,look:it,dolly:Dt,goHome:Pt,goTo:re,visitEnvironment:Wt,beginDrawing:q,showDraft:rt,drawingPoint:lt,finishDrawing:Lt,ripple:Ut,setItems:It,setKey:_e,stopKeys:Xt,unfold:K,captureCanvas(){return i.render(s,r),t},createLoopCapture:Kt,turnAround(){E=null,o.yaw+=Math.PI,J()},get stats(){return{regions:u.size,traces:p.size,geometries:i.info.memory.geometries}}}}export{Ih as PALETTE,Cv as createWorld,Rv as wheelTravel};
