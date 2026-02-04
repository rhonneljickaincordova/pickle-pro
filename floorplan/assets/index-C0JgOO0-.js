(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function Q_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ch={exports:{}},Io={};var Fg;function FS(){if(Fg)return Io;Fg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return Io.Fragment=t,Io.jsx=i,Io.jsxs=i,Io}var Ig;function IS(){return Ig||(Ig=1,ch.exports=FS()),ch.exports}var w=IS(),uh={exports:{}},he={};var Bg;function BS(){if(Bg)return he;Bg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function b(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function v(L,tt,dt){this.props=L,this.context=tt,this.refs=y,this.updater=dt||E}v.prototype.isReactComponent={},v.prototype.setState=function(L,tt){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,tt,"setState")},v.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function F(){}F.prototype=v.prototype;function z(L,tt,dt){this.props=L,this.context=tt,this.refs=y,this.updater=dt||E}var O=z.prototype=new F;O.constructor=z,C(O,v.prototype),O.isPureReactComponent=!0;var B=Array.isArray;function G(){}var P={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function R(L,tt,dt){var vt=dt.ref;return{$$typeof:o,type:L,key:tt,ref:vt!==void 0?vt:null,props:dt}}function D(L,tt){return R(L.type,tt,L.props)}function k(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function Y(L){var tt={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(dt){return tt[dt]})}var j=/\/+/g;function ot(L,tt){return typeof L=="object"&&L!==null&&L.key!=null?Y(""+L.key):tt.toString(36)}function lt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(G,G):(L.status="pending",L.then(function(tt){L.status==="pending"&&(L.status="fulfilled",L.value=tt)},function(tt){L.status==="pending"&&(L.status="rejected",L.reason=tt)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function U(L,tt,dt,vt,Bt){var at=typeof L;(at==="undefined"||at==="boolean")&&(L=null);var ft=!1;if(L===null)ft=!0;else switch(at){case"bigint":case"string":case"number":ft=!0;break;case"object":switch(L.$$typeof){case o:case t:ft=!0;break;case x:return ft=L._init,U(ft(L._payload),tt,dt,vt,Bt)}}if(ft)return Bt=Bt(L),ft=vt===""?"."+ot(L,0):vt,B(Bt)?(dt="",ft!=null&&(dt=ft.replace(j,"$&/")+"/"),U(Bt,tt,dt,"",function(Vt){return Vt})):Bt!=null&&(k(Bt)&&(Bt=D(Bt,dt+(Bt.key==null||L&&L.key===Bt.key?"":(""+Bt.key).replace(j,"$&/")+"/")+ft)),tt.push(Bt)),1;ft=0;var It=vt===""?".":vt+":";if(B(L))for(var zt=0;zt<L.length;zt++)vt=L[zt],at=It+ot(vt,zt),ft+=U(vt,tt,dt,at,Bt);else if(zt=b(L),typeof zt=="function")for(L=zt.call(L),zt=0;!(vt=L.next()).done;)vt=vt.value,at=It+ot(vt,zt++),ft+=U(vt,tt,dt,at,Bt);else if(at==="object"){if(typeof L.then=="function")return U(lt(L),tt,dt,vt,Bt);throw tt=String(L),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return ft}function I(L,tt,dt){if(L==null)return L;var vt=[],Bt=0;return U(L,vt,"","",function(at){return tt.call(dt,at,Bt++)}),vt}function et(L){if(L._status===-1){var tt=L._result;tt=tt(),tt.then(function(dt){(L._status===0||L._status===-1)&&(L._status=1,L._result=dt)},function(dt){(L._status===0||L._status===-1)&&(L._status=2,L._result=dt)}),L._status===-1&&(L._status=0,L._result=tt)}if(L._status===1)return L._result.default;throw L._result}var Et=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},yt={map:I,forEach:function(L,tt,dt){I(L,function(){tt.apply(this,arguments)},dt)},count:function(L){var tt=0;return I(L,function(){tt++}),tt},toArray:function(L){return I(L,function(tt){return tt})||[]},only:function(L){if(!k(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return he.Activity=_,he.Children=yt,he.Component=v,he.Fragment=i,he.Profiler=l,he.PureComponent=z,he.StrictMode=s,he.Suspense=m,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,he.__COMPILER_RUNTIME={__proto__:null,c:function(L){return P.H.useMemoCache(L)}},he.cache=function(L){return function(){return L.apply(null,arguments)}},he.cacheSignal=function(){return null},he.cloneElement=function(L,tt,dt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var vt=C({},L.props),Bt=L.key;if(tt!=null)for(at in tt.key!==void 0&&(Bt=""+tt.key),tt)!K.call(tt,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&tt.ref===void 0||(vt[at]=tt[at]);var at=arguments.length-2;if(at===1)vt.children=dt;else if(1<at){for(var ft=Array(at),It=0;It<at;It++)ft[It]=arguments[It+2];vt.children=ft}return R(L.type,Bt,vt)},he.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},he.createElement=function(L,tt,dt){var vt,Bt={},at=null;if(tt!=null)for(vt in tt.key!==void 0&&(at=""+tt.key),tt)K.call(tt,vt)&&vt!=="key"&&vt!=="__self"&&vt!=="__source"&&(Bt[vt]=tt[vt]);var ft=arguments.length-2;if(ft===1)Bt.children=dt;else if(1<ft){for(var It=Array(ft),zt=0;zt<ft;zt++)It[zt]=arguments[zt+2];Bt.children=It}if(L&&L.defaultProps)for(vt in ft=L.defaultProps,ft)Bt[vt]===void 0&&(Bt[vt]=ft[vt]);return R(L,at,Bt)},he.createRef=function(){return{current:null}},he.forwardRef=function(L){return{$$typeof:d,render:L}},he.isValidElement=k,he.lazy=function(L){return{$$typeof:x,_payload:{_status:-1,_result:L},_init:et}},he.memo=function(L,tt){return{$$typeof:p,type:L,compare:tt===void 0?null:tt}},he.startTransition=function(L){var tt=P.T,dt={};P.T=dt;try{var vt=L(),Bt=P.S;Bt!==null&&Bt(dt,vt),typeof vt=="object"&&vt!==null&&typeof vt.then=="function"&&vt.then(G,Et)}catch(at){Et(at)}finally{tt!==null&&dt.types!==null&&(tt.types=dt.types),P.T=tt}},he.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},he.use=function(L){return P.H.use(L)},he.useActionState=function(L,tt,dt){return P.H.useActionState(L,tt,dt)},he.useCallback=function(L,tt){return P.H.useCallback(L,tt)},he.useContext=function(L){return P.H.useContext(L)},he.useDebugValue=function(){},he.useDeferredValue=function(L,tt){return P.H.useDeferredValue(L,tt)},he.useEffect=function(L,tt){return P.H.useEffect(L,tt)},he.useEffectEvent=function(L){return P.H.useEffectEvent(L)},he.useId=function(){return P.H.useId()},he.useImperativeHandle=function(L,tt,dt){return P.H.useImperativeHandle(L,tt,dt)},he.useInsertionEffect=function(L,tt){return P.H.useInsertionEffect(L,tt)},he.useLayoutEffect=function(L,tt){return P.H.useLayoutEffect(L,tt)},he.useMemo=function(L,tt){return P.H.useMemo(L,tt)},he.useOptimistic=function(L,tt){return P.H.useOptimistic(L,tt)},he.useReducer=function(L,tt,dt){return P.H.useReducer(L,tt,dt)},he.useRef=function(L){return P.H.useRef(L)},he.useState=function(L){return P.H.useState(L)},he.useSyncExternalStore=function(L,tt,dt){return P.H.useSyncExternalStore(L,tt,dt)},he.useTransition=function(){return P.H.useTransition()},he.version="19.2.3",he}var Hg;function Vd(){return Hg||(Hg=1,uh.exports=BS()),uh.exports}var bn=Vd();const HS=Q_(bn);var fh={exports:{}},Bo={},hh={exports:{}},dh={};var Gg;function GS(){return Gg||(Gg=1,(function(o){function t(U,I){var et=U.length;U.push(I);t:for(;0<et;){var Et=et-1>>>1,yt=U[Et];if(0<l(yt,I))U[Et]=I,U[et]=yt,et=Et;else break t}}function i(U){return U.length===0?null:U[0]}function s(U){if(U.length===0)return null;var I=U[0],et=U.pop();if(et!==I){U[0]=et;t:for(var Et=0,yt=U.length,L=yt>>>1;Et<L;){var tt=2*(Et+1)-1,dt=U[tt],vt=tt+1,Bt=U[vt];if(0>l(dt,et))vt<yt&&0>l(Bt,dt)?(U[Et]=Bt,U[vt]=et,Et=vt):(U[Et]=dt,U[tt]=et,Et=tt);else if(vt<yt&&0>l(Bt,et))U[Et]=Bt,U[vt]=et,Et=vt;else break t}}return I}function l(U,I){var et=U.sortIndex-I.sortIndex;return et!==0?et:U.id-I.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],x=1,_=null,S=3,b=!1,E=!1,C=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function O(U){for(var I=i(p);I!==null;){if(I.callback===null)s(p);else if(I.startTime<=U)s(p),I.sortIndex=I.expirationTime,t(m,I);else break;I=i(p)}}function B(U){if(C=!1,O(U),!E)if(i(m)!==null)E=!0,G||(G=!0,Y());else{var I=i(p);I!==null&&lt(B,I.startTime-U)}}var G=!1,P=-1,K=5,R=-1;function D(){return y?!0:!(o.unstable_now()-R<K)}function k(){if(y=!1,G){var U=o.unstable_now();R=U;var I=!0;try{t:{E=!1,C&&(C=!1,F(P),P=-1),b=!0;var et=S;try{e:{for(O(U),_=i(m);_!==null&&!(_.expirationTime>U&&D());){var Et=_.callback;if(typeof Et=="function"){_.callback=null,S=_.priorityLevel;var yt=Et(_.expirationTime<=U);if(U=o.unstable_now(),typeof yt=="function"){_.callback=yt,O(U),I=!0;break e}_===i(m)&&s(m),O(U)}else s(m);_=i(m)}if(_!==null)I=!0;else{var L=i(p);L!==null&&lt(B,L.startTime-U),I=!1}}break t}finally{_=null,S=et,b=!1}I=void 0}}finally{I?Y():G=!1}}}var Y;if(typeof z=="function")Y=function(){z(k)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,ot=j.port2;j.port1.onmessage=k,Y=function(){ot.postMessage(null)}}else Y=function(){v(k,0)};function lt(U,I){P=v(function(){U(o.unstable_now())},I)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(U){U.callback=null},o.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<U?Math.floor(1e3/U):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(U){switch(S){case 1:case 2:case 3:var I=3;break;default:I=S}var et=S;S=I;try{return U()}finally{S=et}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(U,I){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var et=S;S=U;try{return I()}finally{S=et}},o.unstable_scheduleCallback=function(U,I,et){var Et=o.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?Et+et:Et):et=Et,U){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=et+yt,U={id:x++,callback:I,priorityLevel:U,startTime:et,expirationTime:yt,sortIndex:-1},et>Et?(U.sortIndex=et,t(p,U),i(m)===null&&U===i(p)&&(C?(F(P),P=-1):C=!0,lt(B,et-Et))):(U.sortIndex=yt,t(m,U),E||b||(E=!0,G||(G=!0,Y()))),U},o.unstable_shouldYield=D,o.unstable_wrapCallback=function(U){var I=S;return function(){var et=S;S=I;try{return U.apply(this,arguments)}finally{S=et}}}})(dh)),dh}var Vg;function VS(){return Vg||(Vg=1,hh.exports=GS()),hh.exports}var ph={exports:{}},zn={};var kg;function kS(){if(kg)return zn;kg=1;var o=Vd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,x){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:x}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,zn.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,x)},zn.flushSync=function(m){var p=h.T,x=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=x,s.d.f()}},zn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},zn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},zn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,_=d(x,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:b}):x==="script"&&s.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},zn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},zn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,_=d(x,p.crossOrigin);s.d.L(m,x,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},zn.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},zn.requestFormReset=function(m){s.d.r(m)},zn.unstable_batchedUpdates=function(m,p){return m(p)},zn.useFormState=function(m,p,x){return h.H.useFormState(m,p,x)},zn.useFormStatus=function(){return h.H.useHostTransitionStatus()},zn.version="19.2.3",zn}var Xg;function XS(){if(Xg)return ph.exports;Xg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),ph.exports=kS(),ph.exports}var jg;function jS(){if(jg)return Bo;jg=1;var o=VS(),t=Vd(),i=XS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var g=!1,T=c.child;T;){if(T===a){g=!0,a=c,r=f;break}if(T===r){g=!0,r=c,a=f;break}T=T.sibling}if(!g){for(T=f.child;T;){if(T===a){g=!0,a=f,r=c;break}if(T===r){g=!0,r=f,a=c;break}T=T.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),z=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var j=Symbol.for("react.client.reference");function ot(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===j?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case B:return"Suspense";case G:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case z:return e.displayName||"Context";case F:return(e._context.displayName||"Context")+".Consumer";case O:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return n=e.displayName||null,n!==null?n:ot(e.type)||"Memo";case K:n=e._payload,e=e._init;try{return ot(e(n))}catch{}}return null}var lt=Array.isArray,U=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et={pending:!1,data:null,method:null,action:null},Et=[],yt=-1;function L(e){return{current:e}}function tt(e){0>yt||(e.current=Et[yt],Et[yt]=null,yt--)}function dt(e,n){yt++,Et[yt]=e.current,e.current=n}var vt=L(null),Bt=L(null),at=L(null),ft=L(null);function It(e,n){switch(dt(at,n),dt(Bt,e),dt(vt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?rg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=rg(n),e=og(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}tt(vt),dt(vt,e)}function zt(){tt(vt),tt(Bt),tt(at)}function Vt(e){e.memoizedState!==null&&dt(ft,e);var n=vt.current,a=og(n,e.type);n!==a&&(dt(Bt,e),dt(vt,a))}function ce(e){Bt.current===e&&(tt(vt),tt(Bt)),ft.current===e&&(tt(ft),Oo._currentValue=et)}var qe,ge;function pe(e){if(qe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);qe=n&&n[1]||"",ge=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qe+e+ge}var Re=!1;function Ut(e,n){if(!e||Re)return"";Re=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(ut){var rt=ut}Reflect.construct(e,[],St)}else{try{St.call()}catch(ut){rt=ut}e.call(St.prototype)}}else{try{throw Error()}catch(ut){rt=ut}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(ut){if(ut&&rt&&typeof ut.stack=="string")return[ut.stack,rt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),g=f[0],T=f[1];if(g&&T){var V=g.split(`
`),it=T.split(`
`);for(c=r=0;r<V.length&&!V[r].includes("DetermineComponentFrameRoot");)r++;for(;c<it.length&&!it[c].includes("DetermineComponentFrameRoot");)c++;if(r===V.length||c===it.length)for(r=V.length-1,c=it.length-1;1<=r&&0<=c&&V[r]!==it[c];)c--;for(;1<=r&&0<=c;r--,c--)if(V[r]!==it[c]){if(r!==1||c!==1)do if(r--,c--,0>c||V[r]!==it[c]){var gt=`
`+V[r].replace(" at new "," at ");return e.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",e.displayName)),gt}while(1<=r&&0<=c);break}}}finally{Re=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?pe(a):""}function Ft(e,n){switch(e.tag){case 26:case 27:case 5:return pe(e.type);case 16:return pe("Lazy");case 13:return e.child!==n&&n!==null?pe("Suspense Fallback"):pe("Suspense");case 19:return pe("SuspenseList");case 0:case 15:return Ut(e.type,!1);case 11:return Ut(e.type.render,!1);case 1:return Ut(e.type,!0);case 31:return pe("Activity");default:return""}}function H(e){try{var n="",a=null;do n+=Ft(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var ie=Object.prototype.hasOwnProperty,qt=o.unstable_scheduleCallback,te=o.unstable_cancelCallback,jt=o.unstable_shouldYield,N=o.unstable_requestPaint,M=o.unstable_now,q=o.unstable_getCurrentPriorityLevel,mt=o.unstable_ImmediatePriority,bt=o.unstable_UserBlockingPriority,ht=o.unstable_NormalPriority,Kt=o.unstable_LowPriority,Rt=o.unstable_IdlePriority,Dt=o.log,Ht=o.unstable_setDisableYieldValue,Mt=null,Tt=null;function Pt(e){if(typeof Dt=="function"&&Ht(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(Mt,e)}catch{}}var Lt=Math.clz32?Math.clz32:X,Ct=Math.log,ae=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Ct(e)/ae|0)|0}var wt=256,At=262144,Ot=4194304;function _t(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function pt(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,f=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var T=r&134217727;return T!==0?(r=T&~f,r!==0?c=_t(r):(g&=T,g!==0?c=_t(g):a||(a=T&~e,a!==0&&(c=_t(a))))):(T=r&~f,T!==0?c=_t(T):g!==0?c=_t(g):a||(a=r&~e,a!==0&&(c=_t(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Nt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function le(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var e=Ot;return Ot<<=1,(Ot&62914560)===0&&(Ot=4194304),e}function Ce(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Pn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ti(e,n,a,r,c,f){var g=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,V=e.expirationTimes,it=e.hiddenUpdates;for(a=g&~a;0<a;){var gt=31-Lt(a),St=1<<gt;T[gt]=0,V[gt]=-1;var rt=it[gt];if(rt!==null)for(it[gt]=null,gt=0;gt<rt.length;gt++){var ut=rt[gt];ut!==null&&(ut.lane&=-536870913)}a&=~St}r!==0&&il(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(g&~n))}function il(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Lt(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function jr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Lt(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function Is(e,n){var a=n&-n;return a=(a&42)!==0?1:Wr(a),(a&(e.suspendedLanes|n))!==0?0:a}function Wr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Bs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function qr(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:Dg(e.type))}function Pi(e,n){var a=I.p;try{return I.p=e,n()}finally{I.p=a}}var fi=Math.random().toString(36).slice(2),on="__reactFiber$"+fi,En="__reactProps$"+fi,Ai="__reactContainer$"+fi,Hs="__reactEvents$"+fi,Gs="__reactListeners$"+fi,al="__reactHandles$"+fi,Yr="__reactResources$"+fi,os="__reactMarker$"+fi;function Zr(e){delete e[on],delete e[En],delete e[Hs],delete e[Gs],delete e[al]}function Ta(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ai]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=pg(e);e!==null;){if(a=e[on])return a;e=pg(e)}return n}e=a,a=e.parentNode}return null}function Aa(e){if(e=e[on]||e[Ai]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ls(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ra(e){var n=e[Yr];return n||(n=e[Yr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function A(e){e[os]=!0}var Z=new Set,ct={};function st(e,n){J(e,n),J(e+"Capture",n)}function J(e,n){for(ct[e]=n,e=0;e<n.length;e++)Z.add(n[e])}var Gt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wt={},kt={};function Yt(e){return ie.call(kt,e)?!0:ie.call(Wt,e)?!1:Gt.test(e)?kt[e]=!0:(Wt[e]=!0,!1)}function Qt(e,n,a){if(Yt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function se(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Jt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function re(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ze(e){if(!e._valueTracker){var n=Oe(e)?"checked":"value";e._valueTracker=Je(e,n,""+e[n])}}function Fe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Oe(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function ee(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pe=/[\n"\\]/g;function fe(e){return e.replace(Pe,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Tn(e,n,a,r,c,f,g,T){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),n!=null?g==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+re(n)):e.value!==""+re(n)&&(e.value=""+re(n)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),n!=null?An(e,g,re(n)):a!=null?An(e,g,re(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+re(T):e.removeAttribute("name")}function Qi(e,n,a,r,c,f,g,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ze(e);return}a=a!=null?""+re(a):"",n=n!=null?""+re(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=T?e.checked:!!r,e.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),Ze(e)}function An(e,n,a){n==="number"&&ee(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function hi(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+re(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Be(e,n,a){if(n!=null&&(n=""+re(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+re(a):""}function Rn(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(lt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=re(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Ze(e)}function pn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Cn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wn(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||Cn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Vs(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&wn(e,c,r)}else for(var f in n)n.hasOwnProperty(f)&&wn(e,f,n[f])}function Ri(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ox=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sl(e){return Ox.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ji(){}var su=null;function ru(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ks=null,Xs=null;function sp(e){var n=Aa(e);if(n&&(e=n.stateNode)){var a=e[En]||null;t:switch(e=n.stateNode,n.type){case"input":if(Tn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+fe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[En]||null;if(!c)throw Error(s(90));Tn(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Fe(r)}break t;case"textarea":Be(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&hi(e,!!a.multiple,n,!1)}}}var ou=!1;function rp(e,n,a){if(ou)return e(n,a);ou=!0;try{var r=e(n);return r}finally{if(ou=!1,(ks!==null||Xs!==null)&&(Wl(),ks&&(n=ks,e=Xs,Xs=ks=null,sp(n),e)))for(n=0;n<e.length;n++)sp(e[n])}}function Kr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[En]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lu=!1;if($i)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){lu=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{lu=!1}var Ca=null,cu=null,rl=null;function op(){if(rl)return rl;var e,n=cu,a=n.length,r,c="value"in Ca?Ca.value:Ca.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var g=a-e;for(r=1;r<=g&&n[a-r]===c[f-r];r++);return rl=c.slice(e,1<r?1-r:void 0)}function ol(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ll(){return!0}function lp(){return!1}function jn(e){function n(a,r,c,f,g){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ll:lp,this.isPropagationStopped=lp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),n}var cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=jn(cs),Jr=_({},cs,{view:0,detail:0}),Px=jn(Jr),uu,fu,$r,ul=_({},Jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:du,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$r&&($r&&e.type==="mousemove"?(uu=e.screenX-$r.screenX,fu=e.screenY-$r.screenY):fu=uu=0,$r=e),uu)},movementY:function(e){return"movementY"in e?e.movementY:fu}}),cp=jn(ul),zx=_({},ul,{dataTransfer:0}),Fx=jn(zx),Ix=_({},Jr,{relatedTarget:0}),hu=jn(Ix),Bx=_({},cs,{animationName:0,elapsedTime:0,pseudoElement:0}),Hx=jn(Bx),Gx=_({},cs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vx=jn(Gx),kx=_({},cs,{data:0}),up=jn(kx),Xx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Wx[e])?!!n[e]:!1}function du(){return qx}var Yx=_({},Jr,{key:function(e){if(e.key){var n=Xx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ol(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:du,charCode:function(e){return e.type==="keypress"?ol(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ol(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zx=jn(Yx),Kx=_({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fp=jn(Kx),Qx=_({},Jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:du}),Jx=jn(Qx),$x=_({},cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),tv=jn($x),ev=_({},ul,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nv=jn(ev),iv=_({},cs,{newState:0,oldState:0}),av=jn(iv),sv=[9,13,27,32],pu=$i&&"CompositionEvent"in window,to=null;$i&&"documentMode"in document&&(to=document.documentMode);var rv=$i&&"TextEvent"in window&&!to,hp=$i&&(!pu||to&&8<to&&11>=to),dp=" ",pp=!1;function mp(e,n){switch(e){case"keyup":return sv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var js=!1;function ov(e,n){switch(e){case"compositionend":return gp(n);case"keypress":return n.which!==32?null:(pp=!0,dp);case"textInput":return e=n.data,e===dp&&pp?null:e;default:return null}}function lv(e,n){if(js)return e==="compositionend"||!pu&&mp(e,n)?(e=op(),rl=cu=Ca=null,js=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return hp&&n.locale!=="ko"?null:n.data;default:return null}}var cv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _p(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!cv[e.type]:n==="textarea"}function xp(e,n,a,r){ks?Xs?Xs.push(r):Xs=[r]:ks=r,n=$l(n,"onChange"),0<n.length&&(a=new cl("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var eo=null,no=null;function uv(e){tg(e,0)}function fl(e){var n=ls(e);if(Fe(n))return e}function vp(e,n){if(e==="change")return n}var Sp=!1;if($i){var mu;if($i){var gu="oninput"in document;if(!gu){var yp=document.createElement("div");yp.setAttribute("oninput","return;"),gu=typeof yp.oninput=="function"}mu=gu}else mu=!1;Sp=mu&&(!document.documentMode||9<document.documentMode)}function Mp(){eo&&(eo.detachEvent("onpropertychange",bp),no=eo=null)}function bp(e){if(e.propertyName==="value"&&fl(no)){var n=[];xp(n,no,e,ru(e)),rp(uv,n)}}function fv(e,n,a){e==="focusin"?(Mp(),eo=n,no=a,eo.attachEvent("onpropertychange",bp)):e==="focusout"&&Mp()}function hv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fl(no)}function dv(e,n){if(e==="click")return fl(n)}function pv(e,n){if(e==="input"||e==="change")return fl(n)}function mv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ei=typeof Object.is=="function"?Object.is:mv;function io(e,n){if(ei(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!ie.call(n,c)||!ei(e[c],n[c]))return!1}return!0}function Ep(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tp(e,n){var a=Ep(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ep(a)}}function Ap(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ap(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Rp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ee(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=ee(e.document)}return n}function _u(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var gv=$i&&"documentMode"in document&&11>=document.documentMode,Ws=null,xu=null,ao=null,vu=!1;function Cp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;vu||Ws==null||Ws!==ee(r)||(r=Ws,"selectionStart"in r&&_u(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ao&&io(ao,r)||(ao=r,r=$l(xu,"onSelect"),0<r.length&&(n=new cl("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Ws)))}function us(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var qs={animationend:us("Animation","AnimationEnd"),animationiteration:us("Animation","AnimationIteration"),animationstart:us("Animation","AnimationStart"),transitionrun:us("Transition","TransitionRun"),transitionstart:us("Transition","TransitionStart"),transitioncancel:us("Transition","TransitionCancel"),transitionend:us("Transition","TransitionEnd")},Su={},wp={};$i&&(wp=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function fs(e){if(Su[e])return Su[e];if(!qs[e])return e;var n=qs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in wp)return Su[e]=n[a];return e}var Dp=fs("animationend"),Np=fs("animationiteration"),Up=fs("animationstart"),_v=fs("transitionrun"),xv=fs("transitionstart"),vv=fs("transitioncancel"),Lp=fs("transitionend"),Op=new Map,yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yu.push("scrollEnd");function Ci(e,n){Op.set(e,n),st(n,[e])}var hl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},di=[],Ys=0,Mu=0;function dl(){for(var e=Ys,n=Mu=Ys=0;n<e;){var a=di[n];di[n++]=null;var r=di[n];di[n++]=null;var c=di[n];di[n++]=null;var f=di[n];if(di[n++]=null,r!==null&&c!==null){var g=r.pending;g===null?c.next=c:(c.next=g.next,g.next=c),r.pending=c}f!==0&&Pp(a,c,f)}}function pl(e,n,a,r){di[Ys++]=e,di[Ys++]=n,di[Ys++]=a,di[Ys++]=r,Mu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function bu(e,n,a,r){return pl(e,n,a,r),ml(e)}function hs(e,n){return pl(e,null,null,n),ml(e)}function Pp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Lt(a),e=f.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function ml(e){if(50<Ro)throw Ro=0,Lf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Zs={};function Sv(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(e,n,a,r){return new Sv(e,n,a,r)}function Eu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ta(e,n){var a=e.alternate;return a===null?(a=ni(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function zp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function gl(e,n,a,r,c,f){var g=0;if(r=e,typeof e=="function")Eu(e)&&(g=1);else if(typeof e=="string")g=TS(e,a,vt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=ni(31,a,n,c),e.elementType=R,e.lanes=f,e;case C:return ds(a.children,c,f,n);case y:g=8,c|=24;break;case v:return e=ni(12,a,n,c|2),e.elementType=v,e.lanes=f,e;case B:return e=ni(13,a,n,c),e.elementType=B,e.lanes=f,e;case G:return e=ni(19,a,n,c),e.elementType=G,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case z:g=10;break t;case F:g=9;break t;case O:g=11;break t;case P:g=14;break t;case K:g=16,r=null;break t}g=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=ni(g,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function ds(e,n,a,r){return e=ni(7,e,r,n),e.lanes=a,e}function Tu(e,n,a){return e=ni(6,e,null,n),e.lanes=a,e}function Fp(e){var n=ni(18,null,null,0);return n.stateNode=e,n}function Au(e,n,a){return n=ni(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ip=new WeakMap;function pi(e,n){if(typeof e=="object"&&e!==null){var a=Ip.get(e);return a!==void 0?a:(n={value:e,source:n,stack:H(n)},Ip.set(e,n),n)}return{value:e,source:n,stack:H(n)}}var Ks=[],Qs=0,_l=null,so=0,mi=[],gi=0,wa=null,zi=1,Fi="";function ea(e,n){Ks[Qs++]=so,Ks[Qs++]=_l,_l=e,so=n}function Bp(e,n,a){mi[gi++]=zi,mi[gi++]=Fi,mi[gi++]=wa,wa=e;var r=zi;e=Fi;var c=32-Lt(r)-1;r&=~(1<<c),a+=1;var f=32-Lt(n)+c;if(30<f){var g=c-c%5;f=(r&(1<<g)-1).toString(32),r>>=g,c-=g,zi=1<<32-Lt(n)+c|a<<c|r,Fi=f+e}else zi=1<<f|a<<c|r,Fi=e}function Ru(e){e.return!==null&&(ea(e,1),Bp(e,1,0))}function Cu(e){for(;e===_l;)_l=Ks[--Qs],Ks[Qs]=null,so=Ks[--Qs],Ks[Qs]=null;for(;e===wa;)wa=mi[--gi],mi[gi]=null,Fi=mi[--gi],mi[gi]=null,zi=mi[--gi],mi[gi]=null}function Hp(e,n){mi[gi++]=zi,mi[gi++]=Fi,mi[gi++]=wa,zi=n.id,Fi=n.overflow,wa=e}var Dn=null,Ke=null,Ae=!1,Da=null,_i=!1,wu=Error(s(519));function Na(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ro(pi(n,e)),wu}function Gp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[on]=e,n[En]=r,a){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(a=0;a<wo.length;a++)ye(wo[a],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),Qi(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),Rn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||ag(n.textContent,a)?(r.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),r.onScroll!=null&&ye("scroll",n),r.onScrollEnd!=null&&ye("scrollend",n),r.onClick!=null&&(n.onclick=Ji),n=!0):n=!1,n||Na(e,!0)}function Vp(e){for(Dn=e.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:Dn=Dn.return}}function Js(e){if(e!==Dn)return!1;if(!Ae)return Vp(e),Ae=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Yf(e.type,e.memoizedProps)),a=!a),a&&Ke&&Na(e),Vp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ke=dg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ke=dg(e)}else n===27?(n=Ke,ja(e.type)?(e=$f,$f=null,Ke=e):Ke=n):Ke=Dn?vi(e.stateNode.nextSibling):null;return!0}function ps(){Ke=Dn=null,Ae=!1}function Du(){var e=Da;return e!==null&&(Zn===null?Zn=e:Zn.push.apply(Zn,e),Da=null),e}function ro(e){Da===null?Da=[e]:Da.push(e)}var Nu=L(null),ms=null,na=null;function Ua(e,n,a){dt(Nu,n._currentValue),n._currentValue=a}function ia(e){e._currentValue=Nu.current,tt(Nu)}function Uu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Lu(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var V=0;V<n.length;V++)if(T.context===n[V]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Uu(f.return,a,e),r||(g=null);break t}f=T.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(s(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),Uu(g,a,e),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===e){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function $s(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var T=c.type;ei(c.pendingProps.value,g.value)||(e!==null?e.push(T):e=[T])}}else if(c===ft.current){if(g=c.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Oo):e=[Oo])}c=c.return}e!==null&&Lu(n,e,a,r),n.flags|=262144}function xl(e){for(e=e.firstContext;e!==null;){if(!ei(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function gs(e){ms=e,na=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Nn(e){return kp(ms,e)}function vl(e,n){return ms===null&&gs(e),kp(e,n)}function kp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},na===null){if(e===null)throw Error(s(308));na=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else na=na.next=n;return a}var yv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Mv=o.unstable_scheduleCallback,bv=o.unstable_NormalPriority,ln={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ou(){return{controller:new yv,data:new Map,refCount:0}}function oo(e){e.refCount--,e.refCount===0&&Mv(bv,function(){e.controller.abort()})}var lo=null,Pu=0,tr=0,er=null;function Ev(e,n){if(lo===null){var a=lo=[];Pu=0,tr=Bf(),er={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Pu++,n.then(Xp,Xp),n}function Xp(){if(--Pu===0&&lo!==null){er!==null&&(er.status="fulfilled");var e=lo;lo=null,tr=0,er=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Tv(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var jp=U.S;U.S=function(e,n){C0=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ev(e,n),jp!==null&&jp(e,n)};var _s=L(null);function zu(){var e=_s.current;return e!==null?e:Ye.pooledCache}function Sl(e,n){n===null?dt(_s,_s.current):dt(_s,n.pool)}function Wp(){var e=zu();return e===null?null:{parent:ln._currentValue,pool:e}}var nr=Error(s(460)),Fu=Error(s(474)),yl=Error(s(542)),Ml={then:function(){}};function qp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Yp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ji,Ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Kp(e),e;default:if(typeof n.status=="string")n.then(Ji,Ji);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Kp(e),e}throw vs=n,nr}}function xs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(vs=a,nr):a}}var vs=null;function Zp(){if(vs===null)throw Error(s(459));var e=vs;return vs=null,e}function Kp(e){if(e===nr||e===yl)throw Error(s(483))}var ir=null,co=0;function bl(e){var n=co;return co+=1,ir===null&&(ir=[]),Yp(ir,e,n)}function uo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function El(e,n){throw n.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Qp(e){function n(Q,W){if(e){var nt=Q.deletions;nt===null?(Q.deletions=[W],Q.flags|=16):nt.push(W)}}function a(Q,W){if(!e)return null;for(;W!==null;)n(Q,W),W=W.sibling;return null}function r(Q){for(var W=new Map;Q!==null;)Q.key!==null?W.set(Q.key,Q):W.set(Q.index,Q),Q=Q.sibling;return W}function c(Q,W){return Q=ta(Q,W),Q.index=0,Q.sibling=null,Q}function f(Q,W,nt){return Q.index=nt,e?(nt=Q.alternate,nt!==null?(nt=nt.index,nt<W?(Q.flags|=67108866,W):nt):(Q.flags|=67108866,W)):(Q.flags|=1048576,W)}function g(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function T(Q,W,nt,xt){return W===null||W.tag!==6?(W=Tu(nt,Q.mode,xt),W.return=Q,W):(W=c(W,nt),W.return=Q,W)}function V(Q,W,nt,xt){var ne=nt.type;return ne===C?gt(Q,W,nt.props.children,xt,nt.key):W!==null&&(W.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===K&&xs(ne)===W.type)?(W=c(W,nt.props),uo(W,nt),W.return=Q,W):(W=gl(nt.type,nt.key,nt.props,null,Q.mode,xt),uo(W,nt),W.return=Q,W)}function it(Q,W,nt,xt){return W===null||W.tag!==4||W.stateNode.containerInfo!==nt.containerInfo||W.stateNode.implementation!==nt.implementation?(W=Au(nt,Q.mode,xt),W.return=Q,W):(W=c(W,nt.children||[]),W.return=Q,W)}function gt(Q,W,nt,xt,ne){return W===null||W.tag!==7?(W=ds(nt,Q.mode,xt,ne),W.return=Q,W):(W=c(W,nt),W.return=Q,W)}function St(Q,W,nt){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Tu(""+W,Q.mode,nt),W.return=Q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case b:return nt=gl(W.type,W.key,W.props,null,Q.mode,nt),uo(nt,W),nt.return=Q,nt;case E:return W=Au(W,Q.mode,nt),W.return=Q,W;case K:return W=xs(W),St(Q,W,nt)}if(lt(W)||Y(W))return W=ds(W,Q.mode,nt,null),W.return=Q,W;if(typeof W.then=="function")return St(Q,bl(W),nt);if(W.$$typeof===z)return St(Q,vl(Q,W),nt);El(Q,W)}return null}function rt(Q,W,nt,xt){var ne=W!==null?W.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return ne!==null?null:T(Q,W,""+nt,xt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case b:return nt.key===ne?V(Q,W,nt,xt):null;case E:return nt.key===ne?it(Q,W,nt,xt):null;case K:return nt=xs(nt),rt(Q,W,nt,xt)}if(lt(nt)||Y(nt))return ne!==null?null:gt(Q,W,nt,xt,null);if(typeof nt.then=="function")return rt(Q,W,bl(nt),xt);if(nt.$$typeof===z)return rt(Q,W,vl(Q,nt),xt);El(Q,nt)}return null}function ut(Q,W,nt,xt,ne){if(typeof xt=="string"&&xt!==""||typeof xt=="number"||typeof xt=="bigint")return Q=Q.get(nt)||null,T(W,Q,""+xt,ne);if(typeof xt=="object"&&xt!==null){switch(xt.$$typeof){case b:return Q=Q.get(xt.key===null?nt:xt.key)||null,V(W,Q,xt,ne);case E:return Q=Q.get(xt.key===null?nt:xt.key)||null,it(W,Q,xt,ne);case K:return xt=xs(xt),ut(Q,W,nt,xt,ne)}if(lt(xt)||Y(xt))return Q=Q.get(nt)||null,gt(W,Q,xt,ne,null);if(typeof xt.then=="function")return ut(Q,W,nt,bl(xt),ne);if(xt.$$typeof===z)return ut(Q,W,nt,vl(W,xt),ne);El(W,xt)}return null}function Zt(Q,W,nt,xt){for(var ne=null,Ne=null,$t=W,_e=W=0,Ee=null;$t!==null&&_e<nt.length;_e++){$t.index>_e?(Ee=$t,$t=null):Ee=$t.sibling;var Ue=rt(Q,$t,nt[_e],xt);if(Ue===null){$t===null&&($t=Ee);break}e&&$t&&Ue.alternate===null&&n(Q,$t),W=f(Ue,W,_e),Ne===null?ne=Ue:Ne.sibling=Ue,Ne=Ue,$t=Ee}if(_e===nt.length)return a(Q,$t),Ae&&ea(Q,_e),ne;if($t===null){for(;_e<nt.length;_e++)$t=St(Q,nt[_e],xt),$t!==null&&(W=f($t,W,_e),Ne===null?ne=$t:Ne.sibling=$t,Ne=$t);return Ae&&ea(Q,_e),ne}for($t=r($t);_e<nt.length;_e++)Ee=ut($t,Q,_e,nt[_e],xt),Ee!==null&&(e&&Ee.alternate!==null&&$t.delete(Ee.key===null?_e:Ee.key),W=f(Ee,W,_e),Ne===null?ne=Ee:Ne.sibling=Ee,Ne=Ee);return e&&$t.forEach(function(Ka){return n(Q,Ka)}),Ae&&ea(Q,_e),ne}function oe(Q,W,nt,xt){if(nt==null)throw Error(s(151));for(var ne=null,Ne=null,$t=W,_e=W=0,Ee=null,Ue=nt.next();$t!==null&&!Ue.done;_e++,Ue=nt.next()){$t.index>_e?(Ee=$t,$t=null):Ee=$t.sibling;var Ka=rt(Q,$t,Ue.value,xt);if(Ka===null){$t===null&&($t=Ee);break}e&&$t&&Ka.alternate===null&&n(Q,$t),W=f(Ka,W,_e),Ne===null?ne=Ka:Ne.sibling=Ka,Ne=Ka,$t=Ee}if(Ue.done)return a(Q,$t),Ae&&ea(Q,_e),ne;if($t===null){for(;!Ue.done;_e++,Ue=nt.next())Ue=St(Q,Ue.value,xt),Ue!==null&&(W=f(Ue,W,_e),Ne===null?ne=Ue:Ne.sibling=Ue,Ne=Ue);return Ae&&ea(Q,_e),ne}for($t=r($t);!Ue.done;_e++,Ue=nt.next())Ue=ut($t,Q,_e,Ue.value,xt),Ue!==null&&(e&&Ue.alternate!==null&&$t.delete(Ue.key===null?_e:Ue.key),W=f(Ue,W,_e),Ne===null?ne=Ue:Ne.sibling=Ue,Ne=Ue);return e&&$t.forEach(function(zS){return n(Q,zS)}),Ae&&ea(Q,_e),ne}function je(Q,W,nt,xt){if(typeof nt=="object"&&nt!==null&&nt.type===C&&nt.key===null&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case b:t:{for(var ne=nt.key;W!==null;){if(W.key===ne){if(ne=nt.type,ne===C){if(W.tag===7){a(Q,W.sibling),xt=c(W,nt.props.children),xt.return=Q,Q=xt;break t}}else if(W.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===K&&xs(ne)===W.type){a(Q,W.sibling),xt=c(W,nt.props),uo(xt,nt),xt.return=Q,Q=xt;break t}a(Q,W);break}else n(Q,W);W=W.sibling}nt.type===C?(xt=ds(nt.props.children,Q.mode,xt,nt.key),xt.return=Q,Q=xt):(xt=gl(nt.type,nt.key,nt.props,null,Q.mode,xt),uo(xt,nt),xt.return=Q,Q=xt)}return g(Q);case E:t:{for(ne=nt.key;W!==null;){if(W.key===ne)if(W.tag===4&&W.stateNode.containerInfo===nt.containerInfo&&W.stateNode.implementation===nt.implementation){a(Q,W.sibling),xt=c(W,nt.children||[]),xt.return=Q,Q=xt;break t}else{a(Q,W);break}else n(Q,W);W=W.sibling}xt=Au(nt,Q.mode,xt),xt.return=Q,Q=xt}return g(Q);case K:return nt=xs(nt),je(Q,W,nt,xt)}if(lt(nt))return Zt(Q,W,nt,xt);if(Y(nt)){if(ne=Y(nt),typeof ne!="function")throw Error(s(150));return nt=ne.call(nt),oe(Q,W,nt,xt)}if(typeof nt.then=="function")return je(Q,W,bl(nt),xt);if(nt.$$typeof===z)return je(Q,W,vl(Q,nt),xt);El(Q,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,W!==null&&W.tag===6?(a(Q,W.sibling),xt=c(W,nt),xt.return=Q,Q=xt):(a(Q,W),xt=Tu(nt,Q.mode,xt),xt.return=Q,Q=xt),g(Q)):a(Q,W)}return function(Q,W,nt,xt){try{co=0;var ne=je(Q,W,nt,xt);return ir=null,ne}catch($t){if($t===nr||$t===yl)throw $t;var Ne=ni(29,$t,null,Q.mode);return Ne.lanes=xt,Ne.return=Q,Ne}}}var Ss=Qp(!0),Jp=Qp(!1),La=!1;function Iu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Oa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pa(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ze&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=ml(e),Pp(e,null,a),n}return pl(e,r,n,a),ml(e)}function fo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,jr(e,a)}}function Hu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Gu=!1;function ho(){if(Gu){var e=er;if(e!==null)throw e}}function po(e,n,a,r){Gu=!1;var c=e.updateQueue;La=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var V=T,it=V.next;V.next=null,g===null?f=it:g.next=it,g=V;var gt=e.alternate;gt!==null&&(gt=gt.updateQueue,T=gt.lastBaseUpdate,T!==g&&(T===null?gt.firstBaseUpdate=it:T.next=it,gt.lastBaseUpdate=V))}if(f!==null){var St=c.baseState;g=0,gt=it=V=null,T=f;do{var rt=T.lane&-536870913,ut=rt!==T.lane;if(ut?(be&rt)===rt:(r&rt)===rt){rt!==0&&rt===tr&&(Gu=!0),gt!==null&&(gt=gt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Zt=e,oe=T;rt=n;var je=a;switch(oe.tag){case 1:if(Zt=oe.payload,typeof Zt=="function"){St=Zt.call(je,St,rt);break t}St=Zt;break t;case 3:Zt.flags=Zt.flags&-65537|128;case 0:if(Zt=oe.payload,rt=typeof Zt=="function"?Zt.call(je,St,rt):Zt,rt==null)break t;St=_({},St,rt);break t;case 2:La=!0}}rt=T.callback,rt!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=c.callbacks,ut===null?c.callbacks=[rt]:ut.push(rt))}else ut={lane:rt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},gt===null?(it=gt=ut,V=St):gt=gt.next=ut,g|=rt;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;ut=T,T=ut.next,ut.next=null,c.lastBaseUpdate=ut,c.shared.pending=null}}while(!0);gt===null&&(V=St),c.baseState=V,c.firstBaseUpdate=it,c.lastBaseUpdate=gt,f===null&&(c.shared.lanes=0),Ha|=g,e.lanes=g,e.memoizedState=St}}function $p(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function tm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)$p(a[e],n)}var ar=L(null),Tl=L(0);function em(e,n){e=ha,dt(Tl,e),dt(ar,n),ha=e|n.baseLanes}function Vu(){dt(Tl,ha),dt(ar,ar.current)}function ku(){ha=Tl.current,tt(ar),tt(Tl)}var ii=L(null),xi=null;function za(e){var n=e.alternate;dt(sn,sn.current&1),dt(ii,e),xi===null&&(n===null||ar.current!==null||n.memoizedState!==null)&&(xi=e)}function Xu(e){dt(sn,sn.current),dt(ii,e),xi===null&&(xi=e)}function nm(e){e.tag===22?(dt(sn,sn.current),dt(ii,e),xi===null&&(xi=e)):Fa()}function Fa(){dt(sn,sn.current),dt(ii,ii.current)}function ai(e){tt(ii),xi===e&&(xi=null),tt(sn)}var sn=L(0);function Al(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Qf(a)||Jf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var aa=0,me=null,ke=null,cn=null,Rl=!1,sr=!1,ys=!1,Cl=0,mo=0,rr=null,Av=0;function en(){throw Error(s(321))}function ju(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ei(e[a],n[a]))return!1;return!0}function Wu(e,n,a,r,c,f){return aa=f,me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=e===null||e.memoizedState===null?Bm:lf,ys=!1,f=a(r,c),ys=!1,sr&&(f=am(n,a,r,c)),im(e),f}function im(e){U.H=xo;var n=ke!==null&&ke.next!==null;if(aa=0,cn=ke=me=null,Rl=!1,mo=0,rr=null,n)throw Error(s(300));e===null||un||(e=e.dependencies,e!==null&&xl(e)&&(un=!0))}function am(e,n,a,r){me=e;var c=0;do{if(sr&&(rr=null),mo=0,sr=!1,25<=c)throw Error(s(301));if(c+=1,cn=ke=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}U.H=Hm,f=n(a,r)}while(sr);return f}function Rv(){var e=U.H,n=e.useState()[0];return n=typeof n.then=="function"?go(n):n,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(me.flags|=1024),n}function qu(){var e=Cl!==0;return Cl=0,e}function Yu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Zu(e){if(Rl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Rl=!1}aa=0,cn=ke=me=null,sr=!1,mo=Cl=0,rr=null}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?me.memoizedState=cn=e:cn=cn.next=e,cn}function rn(){if(ke===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var n=cn===null?me.memoizedState:cn.next;if(n!==null)cn=n,ke=e;else{if(e===null)throw me.alternate===null?Error(s(467)):Error(s(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},cn===null?me.memoizedState=cn=e:cn=cn.next=e}return cn}function wl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function go(e){var n=mo;return mo+=1,rr===null&&(rr=[]),e=Yp(rr,e,n),n=me,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?Bm:lf),e}function Dl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return go(e);if(e.$$typeof===z)return Nn(e)}throw Error(s(438,String(e)))}function Ku(e){var n=null,a=me.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=me.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=wl(),me.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=D;return n.index++,a}function sa(e,n){return typeof n=="function"?n(e):n}function Nl(e){var n=rn();return Qu(n,ke,e)}function Qu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var T=g=null,V=null,it=n,gt=!1;do{var St=it.lane&-536870913;if(St!==it.lane?(be&St)===St:(aa&St)===St){var rt=it.revertLane;if(rt===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),St===tr&&(gt=!0);else if((aa&rt)===rt){it=it.next,rt===tr&&(gt=!0);continue}else St={lane:0,revertLane:it.revertLane,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},V===null?(T=V=St,g=f):V=V.next=St,me.lanes|=rt,Ha|=rt;St=it.action,ys&&a(f,St),f=it.hasEagerState?it.eagerState:a(f,St)}else rt={lane:St,revertLane:it.revertLane,gesture:it.gesture,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},V===null?(T=V=rt,g=f):V=V.next=rt,me.lanes|=St,Ha|=St;it=it.next}while(it!==null&&it!==n);if(V===null?g=f:V.next=T,!ei(f,e.memoizedState)&&(un=!0,gt&&(a=er,a!==null)))throw a;e.memoizedState=f,e.baseState=g,e.baseQueue=V,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ju(e){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=e(f,g.action),g=g.next;while(g!==c);ei(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function sm(e,n,a){var r=me,c=rn(),f=Ae;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!ei((ke||c).memoizedState,a);if(g&&(c.memoizedState=a,un=!0),c=c.queue,ef(lm.bind(null,r,c,e),[e]),c.getSnapshot!==n||g||cn!==null&&cn.memoizedState.tag&1){if(r.flags|=2048,or(9,{destroy:void 0},om.bind(null,r,c,a,n),null),Ye===null)throw Error(s(349));f||(aa&127)!==0||rm(r,n,a)}return a}function rm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=me.updateQueue,n===null?(n=wl(),me.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function om(e,n,a,r){n.value=a,n.getSnapshot=r,cm(n)&&um(e)}function lm(e,n,a){return a(function(){cm(n)&&um(e)})}function cm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ei(e,a)}catch{return!0}}function um(e){var n=hs(e,2);n!==null&&Kn(n,e,2)}function $u(e){var n=Gn();if(typeof e=="function"){var a=e;if(e=a(),ys){Pt(!0);try{a()}finally{Pt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:e},n}function fm(e,n,a,r){return e.baseState=a,Qu(e,ke,typeof r=="function"?r:sa)}function Cv(e,n,a,r,c){if(Ol(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};U.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,hm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function hm(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=U.T,g={};U.T=g;try{var T=a(c,r),V=U.S;V!==null&&V(g,T),dm(e,n,T)}catch(it){tf(e,n,it)}finally{f!==null&&g.types!==null&&(f.types=g.types),U.T=f}}else try{f=a(c,r),dm(e,n,f)}catch(it){tf(e,n,it)}}function dm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){pm(e,n,r)},function(r){return tf(e,n,r)}):pm(e,n,a)}function pm(e,n,a){n.status="fulfilled",n.value=a,mm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,hm(e,a)))}function tf(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,mm(n),n=n.next;while(n!==r)}e.action=null}function mm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function gm(e,n){return n}function _m(e,n){if(Ae){var a=Ye.formState;if(a!==null){t:{var r=me;if(Ae){if(Ke){e:{for(var c=Ke,f=_i;c.nodeType!==8;){if(!f){c=null;break e}if(c=vi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ke=vi(c.nextSibling),r=c.data==="F!";break t}}Na(r)}r=!1}r&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gm,lastRenderedState:n},a.queue=r,a=zm.bind(null,me,r),r.dispatch=a,r=$u(!1),f=of.bind(null,me,!1,r.queue),r=Gn(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=Cv.bind(null,me,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function xm(e){var n=rn();return vm(n,ke,e)}function vm(e,n,a){if(n=Qu(e,n,gm)[0],e=Nl(sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=go(n)}catch(g){throw g===nr?yl:g}else r=n;n=rn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(me.flags|=2048,or(9,{destroy:void 0},wv.bind(null,c,a),null)),[r,f,e]}function wv(e,n){e.action=n}function Sm(e){var n=rn(),a=ke;if(a!==null)return vm(n,a,e);rn(),n=n.memoizedState,a=rn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function or(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=me.updateQueue,n===null&&(n=wl(),me.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function ym(){return rn().memoizedState}function Ul(e,n,a,r){var c=Gn();me.flags|=e,c.memoizedState=or(1|n,{destroy:void 0},a,r===void 0?null:r)}function Ll(e,n,a,r){var c=rn();r=r===void 0?null:r;var f=c.memoizedState.inst;ke!==null&&r!==null&&ju(r,ke.memoizedState.deps)?c.memoizedState=or(n,f,a,r):(me.flags|=e,c.memoizedState=or(1|n,f,a,r))}function Mm(e,n){Ul(8390656,8,e,n)}function ef(e,n){Ll(2048,8,e,n)}function Dv(e){me.flags|=4;var n=me.updateQueue;if(n===null)n=wl(),me.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function bm(e){var n=rn().memoizedState;return Dv({ref:n,nextImpl:e}),function(){if((ze&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Em(e,n){return Ll(4,2,e,n)}function Tm(e,n){return Ll(4,4,e,n)}function Am(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Rm(e,n,a){a=a!=null?a.concat([e]):null,Ll(4,4,Am.bind(null,n,e),a)}function nf(){}function Cm(e,n){var a=rn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&ju(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function wm(e,n){var a=rn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&ju(n,r[1]))return r[0];if(r=e(),ys){Pt(!0);try{e()}finally{Pt(!1)}}return a.memoizedState=[r,n],r}function af(e,n,a){return a===void 0||(aa&1073741824)!==0&&(be&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=D0(),me.lanes|=e,Ha|=e,a)}function Dm(e,n,a,r){return ei(a,n)?a:ar.current!==null?(e=af(e,a,r),ei(e,n)||(un=!0),e):(aa&42)===0||(aa&1073741824)!==0&&(be&261930)===0?(un=!0,e.memoizedState=a):(e=D0(),me.lanes|=e,Ha|=e,n)}function Nm(e,n,a,r,c){var f=I.p;I.p=f!==0&&8>f?f:8;var g=U.T,T={};U.T=T,of(e,!1,n,a);try{var V=c(),it=U.S;if(it!==null&&it(T,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var gt=Tv(V,r);_o(e,n,gt,oi(e))}else _o(e,n,r,oi(e))}catch(St){_o(e,n,{then:function(){},status:"rejected",reason:St},oi())}finally{I.p=f,g!==null&&T.types!==null&&(g.types=T.types),U.T=g}}function Nv(){}function sf(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=Um(e).queue;Nm(e,c,n,et,a===null?Nv:function(){return Lm(e),a(r)})}function Um(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:et,baseState:et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:et},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Lm(e){var n=Um(e);n.next===null&&(n=e.alternate.memoizedState),_o(e,n.next.queue,{},oi())}function rf(){return Nn(Oo)}function Om(){return rn().memoizedState}function Pm(){return rn().memoizedState}function Uv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=oi();e=Oa(a);var r=Pa(n,e,a);r!==null&&(Kn(r,n,a),fo(r,n,a)),n={cache:Ou()},e.payload=n;return}n=n.return}}function Lv(e,n,a){var r=oi();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ol(e)?Fm(n,a):(a=bu(e,n,a,r),a!==null&&(Kn(a,e,r),Im(a,n,r)))}function zm(e,n,a){var r=oi();_o(e,n,a,r)}function _o(e,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ol(e))Fm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,T=f(g,a);if(c.hasEagerState=!0,c.eagerState=T,ei(T,g))return pl(e,n,c,0),Ye===null&&dl(),!1}catch{}if(a=bu(e,n,c,r),a!==null)return Kn(a,e,r),Im(a,n,r),!0}return!1}function of(e,n,a,r){if(r={lane:2,revertLane:Bf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ol(e)){if(n)throw Error(s(479))}else n=bu(e,a,r,2),n!==null&&Kn(n,e,2)}function Ol(e){var n=e.alternate;return e===me||n!==null&&n===me}function Fm(e,n){sr=Rl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Im(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,jr(e,a)}}var xo={readContext:Nn,use:Dl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};xo.useEffectEvent=en;var Bm={readContext:Nn,use:Dl,useCallback:function(e,n){return Gn().memoizedState=[e,n===void 0?null:n],e},useContext:Nn,useEffect:Mm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ul(4194308,4,Am.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ul(4194308,4,e,n)},useInsertionEffect:function(e,n){Ul(4,2,e,n)},useMemo:function(e,n){var a=Gn();n=n===void 0?null:n;var r=e();if(ys){Pt(!0);try{e()}finally{Pt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Gn();if(a!==void 0){var c=a(n);if(ys){Pt(!0);try{a(n)}finally{Pt(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=Lv.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var n=Gn();return e={current:e},n.memoizedState=e},useState:function(e){e=$u(e);var n=e.queue,a=zm.bind(null,me,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:nf,useDeferredValue:function(e,n){var a=Gn();return af(a,e,n)},useTransition:function(){var e=$u(!1);return e=Nm.bind(null,me,e.queue,!0,!1),Gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=me,c=Gn();if(Ae){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ye===null)throw Error(s(349));(be&127)!==0||rm(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Mm(lm.bind(null,r,f,e),[e]),r.flags|=2048,or(9,{destroy:void 0},om.bind(null,r,f,a,n),null),a},useId:function(){var e=Gn(),n=Ye.identifierPrefix;if(Ae){var a=Fi,r=zi;a=(r&~(1<<32-Lt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Cl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Av++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:rf,useFormState:_m,useActionState:_m,useOptimistic:function(e){var n=Gn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=of.bind(null,me,!0,a),a.dispatch=n,[e,n]},useMemoCache:Ku,useCacheRefresh:function(){return Gn().memoizedState=Uv.bind(null,me)},useEffectEvent:function(e){var n=Gn(),a={impl:e};return n.memoizedState=a,function(){if((ze&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},lf={readContext:Nn,use:Dl,useCallback:Cm,useContext:Nn,useEffect:ef,useImperativeHandle:Rm,useInsertionEffect:Em,useLayoutEffect:Tm,useMemo:wm,useReducer:Nl,useRef:ym,useState:function(){return Nl(sa)},useDebugValue:nf,useDeferredValue:function(e,n){var a=rn();return Dm(a,ke.memoizedState,e,n)},useTransition:function(){var e=Nl(sa)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:go(e),n]},useSyncExternalStore:sm,useId:Om,useHostTransitionStatus:rf,useFormState:xm,useActionState:xm,useOptimistic:function(e,n){var a=rn();return fm(a,ke,e,n)},useMemoCache:Ku,useCacheRefresh:Pm};lf.useEffectEvent=bm;var Hm={readContext:Nn,use:Dl,useCallback:Cm,useContext:Nn,useEffect:ef,useImperativeHandle:Rm,useInsertionEffect:Em,useLayoutEffect:Tm,useMemo:wm,useReducer:Ju,useRef:ym,useState:function(){return Ju(sa)},useDebugValue:nf,useDeferredValue:function(e,n){var a=rn();return ke===null?af(a,e,n):Dm(a,ke.memoizedState,e,n)},useTransition:function(){var e=Ju(sa)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:go(e),n]},useSyncExternalStore:sm,useId:Om,useHostTransitionStatus:rf,useFormState:Sm,useActionState:Sm,useOptimistic:function(e,n){var a=rn();return ke!==null?fm(a,ke,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ku,useCacheRefresh:Pm};Hm.useEffectEvent=bm;function cf(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var uf={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=oi(),c=Oa(r);c.payload=n,a!=null&&(c.callback=a),n=Pa(e,c,r),n!==null&&(Kn(n,e,r),fo(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=oi(),c=Oa(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Pa(e,c,r),n!==null&&(Kn(n,e,r),fo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=oi(),r=Oa(a);r.tag=2,n!=null&&(r.callback=n),n=Pa(e,r,a),n!==null&&(Kn(n,e,a),fo(n,e,a))}};function Gm(e,n,a,r,c,f,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,g):n.prototype&&n.prototype.isPureReactComponent?!io(a,r)||!io(c,f):!0}function Vm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&uf.enqueueReplaceState(n,n.state,null)}function Ms(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function km(e){hl(e)}function Xm(e){console.error(e)}function jm(e){hl(e)}function Pl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Wm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function ff(e,n,a){return a=Oa(a),a.tag=3,a.payload={element:null},a.callback=function(){Pl(e,n)},a}function qm(e){return e=Oa(e),e.tag=3,e}function Ym(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){Wm(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){Wm(n,a,r),typeof c!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})})}function Ov(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&$s(n,a,c,!0),a=ii.current,a!==null){switch(a.tag){case 31:case 13:return xi===null?ql():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===Ml?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),zf(e,r,c)),!1;case 22:return a.flags|=65536,r===Ml?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),zf(e,r,c)),!1}throw Error(s(435,a.tag))}return zf(e,r,c),ql(),!1}if(Ae)return n=ii.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==wu&&(e=Error(s(422),{cause:r}),ro(pi(e,a)))):(r!==wu&&(n=Error(s(423),{cause:r}),ro(pi(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=pi(r,a),c=ff(e.stateNode,r,c),Hu(e,c),nn!==4&&(nn=2)),!1;var f=Error(s(520),{cause:r});if(f=pi(f,a),Ao===null?Ao=[f]:Ao.push(f),nn!==4&&(nn=2),n===null)return!0;r=pi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=ff(a.stateNode,r,e),Hu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ga===null||!Ga.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=qm(c),Ym(c,e,a,r),Hu(a,c),!1}a=a.return}while(a!==null);return!1}var hf=Error(s(461)),un=!1;function Un(e,n,a,r){n.child=e===null?Jp(n,null,a,r):Ss(n,e.child,a,r)}function Zm(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var g={};for(var T in r)T!=="ref"&&(g[T]=r[T])}else g=r;return gs(n),r=Wu(e,n,a,g,f,c),T=qu(),e!==null&&!un?(Yu(e,n,c),ra(e,n,c)):(Ae&&T&&Ru(n),n.flags|=1,Un(e,n,r,c),n.child)}function Km(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!Eu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Qm(e,n,f,r,c)):(e=gl(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Sf(e,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:io,a(g,r)&&e.ref===n.ref)return ra(e,n,c)}return n.flags|=1,e=ta(f,r),e.ref=n.ref,e.return=n,n.child=e}function Qm(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(io(f,r)&&e.ref===n.ref)if(un=!1,n.pendingProps=r=f,Sf(e,c))(e.flags&131072)!==0&&(un=!0);else return n.lanes=e.lanes,ra(e,n,c)}return df(e,n,a,r,c)}function Jm(e,n,a,r){var c=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return $m(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sl(n,f!==null?f.cachePool:null),f!==null?em(n,f):Vu(),nm(n);else return r=n.lanes=536870912,$m(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(Sl(n,f.cachePool),em(n,f),Fa(),n.memoizedState=null):(e!==null&&Sl(n,null),Vu(),Fa());return Un(e,n,c,a),n.child}function vo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function $m(e,n,a,r,c){var f=zu();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Sl(n,null),Vu(),nm(n),e!==null&&$s(e,n,r,!0),n.childLanes=c,null}function zl(e,n){return n=Il({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function t0(e,n,a){return Ss(n,e.child,null,a),e=zl(n,n.pendingProps),e.flags|=2,ai(n),n.memoizedState=null,e}function Pv(e,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ae){if(r.mode==="hidden")return e=zl(n,r),n.lanes=536870912,vo(null,e);if(Xu(n),(e=Ke)?(e=hg(e,_i),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:wa!==null?{id:zi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=Fp(e),a.return=n,n.child=a,Dn=n,Ke=null)):e=null,e===null)throw Na(n);return n.lanes=536870912,null}return zl(n,r)}var f=e.memoizedState;if(f!==null){var g=f.dehydrated;if(Xu(n),c)if(n.flags&256)n.flags&=-257,n=t0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||$s(e,n,a,!1),c=(a&e.childLanes)!==0,un||c){if(r=Ye,r!==null&&(g=Is(r,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,hs(e,g),Kn(r,e,g),hf;ql(),n=t0(e,n,a)}else e=f.treeContext,Ke=vi(g.nextSibling),Dn=n,Ae=!0,Da=null,_i=!1,e!==null&&Hp(n,e),n=zl(n,r),n.flags|=4096;return n}return e=ta(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Fl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function df(e,n,a,r,c){return gs(n),a=Wu(e,n,a,r,void 0,c),r=qu(),e!==null&&!un?(Yu(e,n,c),ra(e,n,c)):(Ae&&r&&Ru(n),n.flags|=1,Un(e,n,a,c),n.child)}function e0(e,n,a,r,c,f){return gs(n),n.updateQueue=null,a=am(n,r,a,c),im(e),r=qu(),e!==null&&!un?(Yu(e,n,f),ra(e,n,f)):(Ae&&r&&Ru(n),n.flags|=1,Un(e,n,a,f),n.child)}function n0(e,n,a,r,c){if(gs(n),n.stateNode===null){var f=Zs,g=a.contextType;typeof g=="object"&&g!==null&&(f=Nn(g)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=uf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Iu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Nn(g):Zs,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(cf(n,a,g,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&uf.enqueueReplaceState(f,f.state,null),po(n,r,f,c),ho(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,V=Ms(a,T);f.props=V;var it=f.context,gt=a.contextType;g=Zs,typeof gt=="object"&&gt!==null&&(g=Nn(gt));var St=a.getDerivedStateFromProps;gt=typeof St=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,gt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||it!==g)&&Vm(n,f,r,g),La=!1;var rt=n.memoizedState;f.state=rt,po(n,r,f,c),ho(),it=n.memoizedState,T||rt!==it||La?(typeof St=="function"&&(cf(n,a,St,r),it=n.memoizedState),(V=La||Gm(n,a,V,r,rt,it,g))?(gt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=it),f.props=r,f.state=it,f.context=g,r=V):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Bu(e,n),g=n.memoizedProps,gt=Ms(a,g),f.props=gt,St=n.pendingProps,rt=f.context,it=a.contextType,V=Zs,typeof it=="object"&&it!==null&&(V=Nn(it)),T=a.getDerivedStateFromProps,(it=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==St||rt!==V)&&Vm(n,f,r,V),La=!1,rt=n.memoizedState,f.state=rt,po(n,r,f,c),ho();var ut=n.memoizedState;g!==St||rt!==ut||La||e!==null&&e.dependencies!==null&&xl(e.dependencies)?(typeof T=="function"&&(cf(n,a,T,r),ut=n.memoizedState),(gt=La||Gm(n,a,gt,r,rt,ut,V)||e!==null&&e.dependencies!==null&&xl(e.dependencies))?(it||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ut,V),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ut,V)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ut),f.props=r,f.state=ut,f.context=V,r=gt):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Fl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=Ss(n,e.child,null,c),n.child=Ss(n,null,a,c)):Un(e,n,a,c),n.memoizedState=f.state,e=n.child):e=ra(e,n,c),e}function i0(e,n,a,r){return ps(),n.flags|=256,Un(e,n,a,r),n.child}var pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mf(e){return{baseLanes:e,cachePool:Wp()}}function gf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ri),e}function a0(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(c?za(n):Fa(),(e=Ke)?(e=hg(e,_i),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:wa!==null?{id:zi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=Fp(e),a.return=n,n.child=a,Dn=n,Ke=null)):e=null,e===null)throw Na(n);return Jf(e)?n.lanes=32:n.lanes=536870912,null}var T=r.children;return r=r.fallback,c?(Fa(),c=n.mode,T=Il({mode:"hidden",children:T},c),r=ds(r,c,a,null),T.return=n,r.return=n,T.sibling=r,n.child=T,r=n.child,r.memoizedState=mf(a),r.childLanes=gf(e,g,a),n.memoizedState=pf,vo(null,r)):(za(n),_f(n,T))}var V=e.memoizedState;if(V!==null&&(T=V.dehydrated,T!==null)){if(f)n.flags&256?(za(n),n.flags&=-257,n=xf(e,n,a)):n.memoizedState!==null?(Fa(),n.child=e.child,n.flags|=128,n=null):(Fa(),T=r.fallback,c=n.mode,r=Il({mode:"visible",children:r.children},c),T=ds(T,c,a,null),T.flags|=2,r.return=n,T.return=n,r.sibling=T,n.child=r,Ss(n,e.child,null,a),r=n.child,r.memoizedState=mf(a),r.childLanes=gf(e,g,a),n.memoizedState=pf,n=vo(null,r));else if(za(n),Jf(T)){if(g=T.nextSibling&&T.nextSibling.dataset,g)var it=g.dgst;g=it,r=Error(s(419)),r.stack="",r.digest=g,ro({value:r,source:null,stack:null}),n=xf(e,n,a)}else if(un||$s(e,n,a,!1),g=(a&e.childLanes)!==0,un||g){if(g=Ye,g!==null&&(r=Is(g,a),r!==0&&r!==V.retryLane))throw V.retryLane=r,hs(e,r),Kn(g,e,r),hf;Qf(T)||ql(),n=xf(e,n,a)}else Qf(T)?(n.flags|=192,n.child=e.child,n=null):(e=V.treeContext,Ke=vi(T.nextSibling),Dn=n,Ae=!0,Da=null,_i=!1,e!==null&&Hp(n,e),n=_f(n,r.children),n.flags|=4096);return n}return c?(Fa(),T=r.fallback,c=n.mode,V=e.child,it=V.sibling,r=ta(V,{mode:"hidden",children:r.children}),r.subtreeFlags=V.subtreeFlags&65011712,it!==null?T=ta(it,T):(T=ds(T,c,a,null),T.flags|=2),T.return=n,r.return=n,r.sibling=T,n.child=r,vo(null,r),r=n.child,T=e.child.memoizedState,T===null?T=mf(a):(c=T.cachePool,c!==null?(V=ln._currentValue,c=c.parent!==V?{parent:V,pool:V}:c):c=Wp(),T={baseLanes:T.baseLanes|a,cachePool:c}),r.memoizedState=T,r.childLanes=gf(e,g,a),n.memoizedState=pf,vo(e.child,r)):(za(n),a=e.child,e=a.sibling,a=ta(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(g=n.deletions,g===null?(n.deletions=[e],n.flags|=16):g.push(e)),n.child=a,n.memoizedState=null,a)}function _f(e,n){return n=Il({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Il(e,n){return e=ni(22,e,null,n),e.lanes=0,e}function xf(e,n,a){return Ss(n,e.child,null,a),e=_f(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function s0(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Uu(e.return,n,a)}function vf(e,n,a,r,c,f){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function r0(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var g=sn.current,T=(g&2)!==0;if(T?(g=g&1|2,n.flags|=128):g&=1,dt(sn,g),Un(e,n,r,a),r=Ae?so:0,!T&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&s0(e,a,n);else if(e.tag===19)s0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Al(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),vf(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Al(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}vf(n,!0,a,null,f,r);break;case"together":vf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ra(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ha|=n.lanes,(a&n.childLanes)===0)if(e!==null){if($s(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ta(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ta(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Sf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&xl(e)))}function zv(e,n,a){switch(n.tag){case 3:It(n,n.stateNode.containerInfo),Ua(n,ln,e.memoizedState.cache),ps();break;case 27:case 5:Vt(n);break;case 4:It(n,n.stateNode.containerInfo);break;case 10:Ua(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Xu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(za(n),n.flags|=128,null):(a&n.child.childLanes)!==0?a0(e,n,a):(za(n),e=ra(e,n,a),e!==null?e.sibling:null);za(n);break;case 19:var c=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||($s(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return r0(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),dt(sn,sn.current),r)break;return null;case 22:return n.lanes=0,Jm(e,n,a,n.pendingProps);case 24:Ua(n,ln,e.memoizedState.cache)}return ra(e,n,a)}function o0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)un=!0;else{if(!Sf(e,a)&&(n.flags&128)===0)return un=!1,zv(e,n,a);un=(e.flags&131072)!==0}else un=!1,Ae&&(n.flags&1048576)!==0&&Bp(n,so,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=xs(n.elementType),n.type=e,typeof e=="function")Eu(e)?(r=Ms(e,r),n.tag=1,n=n0(null,n,e,r,a)):(n.tag=0,n=df(null,n,e,r,a));else{if(e!=null){var c=e.$$typeof;if(c===O){n.tag=11,n=Zm(null,n,e,r,a);break t}else if(c===P){n.tag=14,n=Km(null,n,e,r,a);break t}}throw n=ot(e)||e,Error(s(306,n,""))}}return n;case 0:return df(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=Ms(r,n.pendingProps),n0(e,n,r,c,a);case 3:t:{if(It(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Bu(e,n),po(n,r,null,a);var g=n.memoizedState;if(r=g.cache,Ua(n,ln,r),r!==f.cache&&Lu(n,[ln],a,!0),ho(),r=g.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=i0(e,n,r,a);break t}else if(r!==c){c=pi(Error(s(424)),n),ro(c),n=i0(e,n,r,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ke=vi(e.firstChild),Dn=n,Ae=!0,Da=null,_i=!0,a=Jp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ps(),r===c){n=ra(e,n,a);break t}Un(e,n,r,a)}n=n.child}return n;case 26:return Fl(e,n),e===null?(a=xg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,e=n.pendingProps,r=tc(at.current).createElement(a),r[on]=n,r[En]=e,Ln(r,a,e),A(r),n.stateNode=r):n.memoizedState=xg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Vt(n),e===null&&Ae&&(r=n.stateNode=mg(n.type,n.pendingProps,at.current),Dn=n,_i=!0,c=Ke,ja(n.type)?($f=c,Ke=vi(r.firstChild)):Ke=c),Un(e,n,n.pendingProps.children,a),Fl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ae&&((c=r=Ke)&&(r=hS(r,n.type,n.pendingProps,_i),r!==null?(n.stateNode=r,Dn=n,Ke=vi(r.firstChild),_i=!1,c=!0):c=!1),c||Na(n)),Vt(n),c=n.type,f=n.pendingProps,g=e!==null?e.memoizedProps:null,r=f.children,Yf(c,f)?r=null:g!==null&&Yf(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Wu(e,n,Rv,null,null,a),Oo._currentValue=c),Fl(e,n),Un(e,n,r,a),n.child;case 6:return e===null&&Ae&&((e=a=Ke)&&(a=dS(a,n.pendingProps,_i),a!==null?(n.stateNode=a,Dn=n,Ke=null,e=!0):e=!1),e||Na(n)),null;case 13:return a0(e,n,a);case 4:return It(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ss(n,null,r,a):Un(e,n,r,a),n.child;case 11:return Zm(e,n,n.type,n.pendingProps,a);case 7:return Un(e,n,n.pendingProps,a),n.child;case 8:return Un(e,n,n.pendingProps.children,a),n.child;case 12:return Un(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Ua(n,n.type,r.value),Un(e,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,gs(n),c=Nn(c),r=r(c),n.flags|=1,Un(e,n,r,a),n.child;case 14:return Km(e,n,n.type,n.pendingProps,a);case 15:return Qm(e,n,n.type,n.pendingProps,a);case 19:return r0(e,n,a);case 31:return Pv(e,n,a);case 22:return Jm(e,n,a,n.pendingProps);case 24:return gs(n),r=Nn(ln),e===null?(c=zu(),c===null&&(c=Ye,f=Ou(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Iu(n),Ua(n,ln,c)):((e.lanes&a)!==0&&(Bu(e,n),po(n,null,null,a),ho()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ua(n,ln,r)):(r=f.cache,Ua(n,ln,r),r!==c.cache&&Lu(n,[ln],a,!0))),Un(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function oa(e){e.flags|=4}function yf(e,n,a,r,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(O0())e.flags|=8192;else throw vs=Ml,Fu}else e.flags&=-16777217}function l0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!bg(n))if(O0())e.flags|=8192;else throw vs=Ml,Fu}function Bl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ie():536870912,e.lanes|=n,fr|=n)}function So(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Fv(e,n,a){var r=n.pendingProps;switch(Cu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return Qe(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ia(ln),zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Js(n)?oa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Du())),Qe(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(oa(n),f!==null?(Qe(n),l0(n,f)):(Qe(n),yf(n,c,null,r,a))):f?f!==e.memoizedState?(oa(n),Qe(n),l0(n,f)):(Qe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&oa(n),Qe(n),yf(n,c,e,r,a)),null;case 27:if(ce(n),a=at.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&oa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Qe(n),null}e=vt.current,Js(n)?Gp(n):(e=mg(c,r,a),n.stateNode=e,oa(n))}return Qe(n),null;case 5:if(ce(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&oa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Qe(n),null}if(f=vt.current,Js(n))Gp(n);else{var g=tc(at.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?g.createElement(c,{is:r.is}):g.createElement(c)}}f[on]=n,f[En]=r;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(Ln(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&oa(n)}}return Qe(n),yf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&oa(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=at.current,Js(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=Dn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||ag(e.nodeValue,a)),e||Na(n,!0)}else e=tc(e).createTextNode(r),e[on]=n,n.stateNode=e}return Qe(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Js(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[on]=n}else ps(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),e=!1}else a=Du(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ai(n),n):(ai(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Qe(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Js(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[on]=n}else ps(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),c=!1}else c=Du(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ai(n),n):(ai(n),null)}return ai(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Bl(n,n.updateQueue),Qe(n),null);case 4:return zt(),e===null&&kf(n.stateNode.containerInfo),Qe(n),null;case 10:return ia(n.type),Qe(n),null;case 19:if(tt(sn),r=n.memoizedState,r===null)return Qe(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)So(r,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Al(e),f!==null){for(n.flags|=128,So(r,!1),e=f.updateQueue,n.updateQueue=e,Bl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)zp(a,e),a=a.sibling;return dt(sn,sn.current&1|2),Ae&&ea(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&M()>Xl&&(n.flags|=128,c=!0,So(r,!1),n.lanes=4194304)}else{if(!c)if(e=Al(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Bl(n,e),So(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Ae)return Qe(n),null}else 2*M()-r.renderingStartTime>Xl&&a!==536870912&&(n.flags|=128,c=!0,So(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=M(),e.sibling=null,a=sn.current,dt(sn,c?a&1|2:a&1),Ae&&ea(n,r.treeForkCount),e):(Qe(n),null);case 22:case 23:return ai(n),ku(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),a=n.updateQueue,a!==null&&Bl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&tt(_s),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ia(ln),Qe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Iv(e,n){switch(Cu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ia(ln),zt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ce(n),null;case 31:if(n.memoizedState!==null){if(ai(n),n.alternate===null)throw Error(s(340));ps()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ai(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ps()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return tt(sn),null;case 4:return zt(),null;case 10:return ia(n.type),null;case 22:case 23:return ai(n),ku(),e!==null&&tt(_s),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ia(ln),null;case 25:return null;default:return null}}function c0(e,n){switch(Cu(n),n.tag){case 3:ia(ln),zt();break;case 26:case 27:case 5:ce(n);break;case 4:zt();break;case 31:n.memoizedState!==null&&ai(n);break;case 13:ai(n);break;case 19:tt(sn);break;case 10:ia(n.type);break;case 22:case 23:ai(n),ku(),e!==null&&tt(_s);break;case 24:ia(ln)}}function yo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,g=a.inst;r=f(),g.destroy=r}a=a.next}while(a!==c)}}catch(T){Ge(n,n.return,T)}}function Ia(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var g=r.inst,T=g.destroy;if(T!==void 0){g.destroy=void 0,c=n;var V=a,it=T;try{it()}catch(gt){Ge(c,V,gt)}}}r=r.next}while(r!==f)}}catch(gt){Ge(n,n.return,gt)}}function u0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{tm(n,a)}catch(r){Ge(e,e.return,r)}}}function f0(e,n,a){a.props=Ms(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Ge(e,n,r)}}function Mo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(c){Ge(e,n,c)}}function Ii(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Ge(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ge(e,n,c)}else a.current=null}function h0(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Ge(e,e.return,c)}}function Mf(e,n,a){try{var r=e.stateNode;rS(r,e.type,a,n),r[En]=n}catch(c){Ge(e,e.return,c)}}function d0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ja(e.type)||e.tag===4}function bf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||d0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ja(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ef(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ji));else if(r!==4&&(r===27&&ja(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Ef(e,n,a),e=e.sibling;e!==null;)Ef(e,n,a),e=e.sibling}function Hl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&ja(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Hl(e,n,a),e=e.sibling;e!==null;)Hl(e,n,a),e=e.sibling}function p0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Ln(n,r,a),n[on]=e,n[En]=a}catch(f){Ge(e,e.return,f)}}var la=!1,fn=!1,Tf=!1,m0=typeof WeakSet=="function"?WeakSet:Set,yn=null;function Bv(e,n){if(e=e.containerInfo,Wf=oc,e=Rp(e),_u(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,T=-1,V=-1,it=0,gt=0,St=e,rt=null;e:for(;;){for(var ut;St!==a||c!==0&&St.nodeType!==3||(T=g+c),St!==f||r!==0&&St.nodeType!==3||(V=g+r),St.nodeType===3&&(g+=St.nodeValue.length),(ut=St.firstChild)!==null;)rt=St,St=ut;for(;;){if(St===e)break e;if(rt===a&&++it===c&&(T=g),rt===f&&++gt===r&&(V=g),(ut=St.nextSibling)!==null)break;St=rt,rt=St.parentNode}St=ut}a=T===-1||V===-1?null:{start:T,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(qf={focusedElem:e,selectionRange:a},oc=!1,yn=n;yn!==null;)if(n=yn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,yn=e;else for(;yn!==null;){switch(n=yn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Zt=Ms(a.type,c);e=r.getSnapshotBeforeUpdate(Zt,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(oe){Ge(a,a.return,oe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Kf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Kf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,yn=e;break}yn=n.return}}function g0(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ua(e,a),r&4&&yo(5,a);break;case 1:if(ua(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(g){Ge(a,a.return,g)}else{var c=Ms(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Ge(a,a.return,g)}}r&64&&u0(a),r&512&&Mo(a,a.return);break;case 3:if(ua(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{tm(e,n)}catch(g){Ge(a,a.return,g)}}break;case 27:n===null&&r&4&&p0(a);case 26:case 5:ua(e,a),n===null&&r&4&&h0(a),r&512&&Mo(a,a.return);break;case 12:ua(e,a);break;case 31:ua(e,a),r&4&&v0(e,a);break;case 13:ua(e,a),r&4&&S0(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Yv.bind(null,a),pS(e,a))));break;case 22:if(r=a.memoizedState!==null||la,!r){n=n!==null&&n.memoizedState!==null||fn,c=la;var f=fn;la=r,(fn=n)&&!f?fa(e,a,(a.subtreeFlags&8772)!==0):ua(e,a),la=c,fn=f}break;case 30:break;default:ua(e,a)}}function _0(e){var n=e.alternate;n!==null&&(e.alternate=null,_0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Zr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Wn=!1;function ca(e,n,a){for(a=a.child;a!==null;)x0(e,n,a),a=a.sibling}function x0(e,n,a){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(Mt,a)}catch{}switch(a.tag){case 26:fn||Ii(a,n),ca(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Ii(a,n);var r=$e,c=Wn;ja(a.type)&&($e=a.stateNode,Wn=!1),ca(e,n,a),No(a.stateNode),$e=r,Wn=c;break;case 5:fn||Ii(a,n);case 6:if(r=$e,c=Wn,$e=null,ca(e,n,a),$e=r,Wn=c,$e!==null)if(Wn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(f){Ge(a,n,f)}else try{$e.removeChild(a.stateNode)}catch(f){Ge(a,n,f)}break;case 18:$e!==null&&(Wn?(e=$e,ug(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),vr(e)):ug($e,a.stateNode));break;case 4:r=$e,c=Wn,$e=a.stateNode.containerInfo,Wn=!0,ca(e,n,a),$e=r,Wn=c;break;case 0:case 11:case 14:case 15:Ia(2,a,n),fn||Ia(4,a,n),ca(e,n,a);break;case 1:fn||(Ii(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&f0(a,n,r)),ca(e,n,a);break;case 21:ca(e,n,a);break;case 22:fn=(r=fn)||a.memoizedState!==null,ca(e,n,a),fn=r;break;default:ca(e,n,a)}}function v0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{vr(e)}catch(a){Ge(n,n.return,a)}}}function S0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{vr(e)}catch(a){Ge(n,n.return,a)}}function Hv(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new m0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new m0),n;default:throw Error(s(435,e.tag))}}function Gl(e,n){var a=Hv(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=Zv.bind(null,e,r);r.then(c,c)}})}function qn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=e,g=n,T=g;t:for(;T!==null;){switch(T.tag){case 27:if(ja(T.type)){$e=T.stateNode,Wn=!1;break t}break;case 5:$e=T.stateNode,Wn=!1;break t;case 3:case 4:$e=T.stateNode.containerInfo,Wn=!0;break t}T=T.return}if($e===null)throw Error(s(160));x0(f,g,c),$e=null,Wn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)y0(n,e),n=n.sibling}var wi=null;function y0(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:qn(n,e),Yn(e),r&4&&(Ia(3,e,e.return),yo(3,e),Ia(5,e,e.return));break;case 1:qn(n,e),Yn(e),r&512&&(fn||a===null||Ii(a,a.return)),r&64&&la&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=wi;if(qn(n,e),Yn(e),r&512&&(fn||a===null||Ii(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[os]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),Ln(f,r,a),f[on]=e,A(f),r=f;break t;case"link":var g=yg("link","href",c).get(r+(a.href||""));if(g){for(var T=0;T<g.length;T++)if(f=g[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(T,1);break e}}f=c.createElement(r),Ln(f,r,a),c.head.appendChild(f);break;case"meta":if(g=yg("meta","content",c).get(r+(a.content||""))){for(T=0;T<g.length;T++)if(f=g[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(T,1);break e}}f=c.createElement(r),Ln(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[on]=e,A(f),r=f}e.stateNode=r}else Mg(c,e.type,e.stateNode);else e.stateNode=Sg(c,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?Mg(c,e.type,e.stateNode):Sg(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Mf(e,e.memoizedProps,a.memoizedProps)}break;case 27:qn(n,e),Yn(e),r&512&&(fn||a===null||Ii(a,a.return)),a!==null&&r&4&&Mf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(qn(n,e),Yn(e),r&512&&(fn||a===null||Ii(a,a.return)),e.flags&32){c=e.stateNode;try{pn(c,"")}catch(Zt){Ge(e,e.return,Zt)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,Mf(e,c,a!==null?a.memoizedProps:c)),r&1024&&(Tf=!0);break;case 6:if(qn(n,e),Yn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Zt){Ge(e,e.return,Zt)}}break;case 3:if(ic=null,c=wi,wi=ec(n.containerInfo),qn(n,e),wi=c,Yn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{vr(n.containerInfo)}catch(Zt){Ge(e,e.return,Zt)}Tf&&(Tf=!1,M0(e));break;case 4:r=wi,wi=ec(e.stateNode.containerInfo),qn(n,e),Yn(e),wi=r;break;case 12:qn(n,e),Yn(e);break;case 31:qn(n,e),Yn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Gl(e,r)));break;case 13:qn(n,e),Yn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(kl=M()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Gl(e,r)));break;case 22:c=e.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,it=la,gt=fn;if(la=it||c,fn=gt||V,qn(n,e),fn=gt,la=it,Yn(e),r&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||V||la||fn||bs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(f=V.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=V.stateNode;var St=V.memoizedProps.style,rt=St!=null&&St.hasOwnProperty("display")?St.display:null;T.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(Zt){Ge(V,V.return,Zt)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=c?"":V.memoizedProps}catch(Zt){Ge(V,V.return,Zt)}}}else if(n.tag===18){if(a===null){V=n;try{var ut=V.stateNode;c?fg(ut,!0):fg(V.stateNode,!1)}catch(Zt){Ge(V,V.return,Zt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Gl(e,a))));break;case 19:qn(n,e),Yn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Gl(e,r)));break;case 30:break;case 21:break;default:qn(n,e),Yn(e)}}function Yn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(d0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=bf(e);Hl(e,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(pn(g,""),a.flags&=-33);var T=bf(e);Hl(e,T,g);break;case 3:case 4:var V=a.stateNode.containerInfo,it=bf(e);Ef(e,it,V);break;default:throw Error(s(161))}}catch(gt){Ge(e,e.return,gt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function M0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;M0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ua(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)g0(e,n.alternate,n),n=n.sibling}function bs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ia(4,n,n.return),bs(n);break;case 1:Ii(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&f0(n,n.return,a),bs(n);break;case 27:No(n.stateNode);case 26:case 5:Ii(n,n.return),bs(n);break;case 22:n.memoizedState===null&&bs(n);break;case 30:bs(n);break;default:bs(n)}e=e.sibling}}function fa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:fa(c,f,a),yo(4,f);break;case 1:if(fa(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(it){Ge(r,r.return,it)}if(r=f,c=r.updateQueue,c!==null){var T=r.stateNode;try{var V=c.shared.hiddenCallbacks;if(V!==null)for(c.shared.hiddenCallbacks=null,c=0;c<V.length;c++)$p(V[c],T)}catch(it){Ge(r,r.return,it)}}a&&g&64&&u0(f),Mo(f,f.return);break;case 27:p0(f);case 26:case 5:fa(c,f,a),a&&r===null&&g&4&&h0(f),Mo(f,f.return);break;case 12:fa(c,f,a);break;case 31:fa(c,f,a),a&&g&4&&v0(c,f);break;case 13:fa(c,f,a),a&&g&4&&S0(c,f);break;case 22:f.memoizedState===null&&fa(c,f,a),Mo(f,f.return);break;case 30:break;default:fa(c,f,a)}n=n.sibling}}function Af(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&oo(a))}function Rf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&oo(e))}function Di(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)b0(e,n,a,r),n=n.sibling}function b0(e,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Di(e,n,a,r),c&2048&&yo(9,n);break;case 1:Di(e,n,a,r);break;case 3:Di(e,n,a,r),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&oo(e)));break;case 12:if(c&2048){Di(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,g=f.id,T=f.onPostCommit;typeof T=="function"&&T(g,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){Ge(n,n.return,V)}}else Di(e,n,a,r);break;case 31:Di(e,n,a,r);break;case 13:Di(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?Di(e,n,a,r):bo(e,n):f._visibility&2?Di(e,n,a,r):(f._visibility|=2,lr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&Af(g,n);break;case 24:Di(e,n,a,r),c&2048&&Rf(n.alternate,n);break;default:Di(e,n,a,r)}}function lr(e,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,g=n,T=a,V=r,it=g.flags;switch(g.tag){case 0:case 11:case 15:lr(f,g,T,V,c),yo(8,g);break;case 23:break;case 22:var gt=g.stateNode;g.memoizedState!==null?gt._visibility&2?lr(f,g,T,V,c):bo(f,g):(gt._visibility|=2,lr(f,g,T,V,c)),c&&it&2048&&Af(g.alternate,g);break;case 24:lr(f,g,T,V,c),c&&it&2048&&Rf(g.alternate,g);break;default:lr(f,g,T,V,c)}n=n.sibling}}function bo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:bo(a,r),c&2048&&Af(r.alternate,r);break;case 24:bo(a,r),c&2048&&Rf(r.alternate,r);break;default:bo(a,r)}n=n.sibling}}var Eo=8192;function cr(e,n,a){if(e.subtreeFlags&Eo)for(e=e.child;e!==null;)E0(e,n,a),e=e.sibling}function E0(e,n,a){switch(e.tag){case 26:cr(e,n,a),e.flags&Eo&&e.memoizedState!==null&&AS(a,wi,e.memoizedState,e.memoizedProps);break;case 5:cr(e,n,a);break;case 3:case 4:var r=wi;wi=ec(e.stateNode.containerInfo),cr(e,n,a),wi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Eo,Eo=16777216,cr(e,n,a),Eo=r):cr(e,n,a));break;default:cr(e,n,a)}}function T0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function To(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];yn=r,R0(r,e)}T0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)A0(e),e=e.sibling}function A0(e){switch(e.tag){case 0:case 11:case 15:To(e),e.flags&2048&&Ia(9,e,e.return);break;case 3:To(e);break;case 12:To(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Vl(e)):To(e);break;default:To(e)}}function Vl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];yn=r,R0(r,e)}T0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ia(8,n,n.return),Vl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Vl(n));break;default:Vl(n)}e=e.sibling}}function R0(e,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Ia(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:oo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,yn=r;else t:for(a=e;yn!==null;){r=yn;var c=r.sibling,f=r.return;if(_0(r),r===a){yn=null;break t}if(c!==null){c.return=f,yn=c;break t}yn=f}}}var Gv={getCacheForType:function(e){var n=Nn(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Nn(ln).controller.signal}},Vv=typeof WeakMap=="function"?WeakMap:Map,ze=0,Ye=null,Se=null,be=0,He=0,si=null,Ba=!1,ur=!1,Cf=!1,ha=0,nn=0,Ha=0,Es=0,wf=0,ri=0,fr=0,Ao=null,Zn=null,Df=!1,kl=0,C0=0,Xl=1/0,jl=null,Ga=null,mn=0,Va=null,hr=null,da=0,Nf=0,Uf=null,w0=null,Ro=0,Lf=null;function oi(){return(ze&2)!==0&&be!==0?be&-be:U.T!==null?Bf():qr()}function D0(){if(ri===0)if((be&536870912)===0||Ae){var e=At;At<<=1,(At&3932160)===0&&(At=262144),ri=e}else ri=536870912;return e=ii.current,e!==null&&(e.flags|=32),ri}function Kn(e,n,a){(e===Ye&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(dr(e,0),ka(e,be,ri,!1)),Pn(e,a),((ze&2)===0||e!==Ye)&&(e===Ye&&((ze&2)===0&&(Es|=a),nn===4&&ka(e,be,ri,!1)),Bi(e))}function N0(e,n,a){if((ze&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Nt(e,n),c=r?jv(e,n):Pf(e,n,!0),f=r;do{if(c===0){ur&&!r&&ka(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!kv(a)){c=Pf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var T=e;c=Ao;var V=T.current.memoizedState.isDehydrated;if(V&&(dr(T,g).flags|=256),g=Pf(T,g,!1),g!==2){if(Cf&&!V){T.errorRecoveryDisabledLanes|=f,Es|=f,c=4;break t}f=Zn,Zn=c,f!==null&&(Zn===null?Zn=f:Zn.push.apply(Zn,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){dr(e,0),ka(e,n,0,!0);break}t:{switch(r=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ka(r,n,ri,!Ba);break t;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=kl+300-M(),10<c)){if(ka(r,n,ri,!Ba),pt(r,0,!0)!==0)break t;da=n,r.timeoutHandle=lg(U0.bind(null,r,a,Zn,jl,Df,n,ri,Es,fr,Ba,f,"Throttled",-0,0),c);break t}U0(r,a,Zn,jl,Df,n,ri,Es,fr,Ba,f,null,-0,0)}}break}while(!0);Bi(e)}function U0(e,n,a,r,c,f,g,T,V,it,gt,St,rt,ut){if(e.timeoutHandle=-1,St=n.subtreeFlags,St&8192||(St&16785408)===16785408){St={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ji},E0(n,f,St);var Zt=(f&62914560)===f?kl-M():(f&4194048)===f?C0-M():0;if(Zt=RS(St,Zt),Zt!==null){da=f,e.cancelPendingCommit=Zt(H0.bind(null,e,n,f,a,r,c,g,T,V,gt,St,null,rt,ut)),ka(e,f,g,!it);return}}H0(e,n,f,a,r,c,g,T,V)}function kv(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!ei(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ka(e,n,a,r){n&=~wf,n&=~Es,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-Lt(c),g=1<<f;r[f]=-1,c&=~g}a!==0&&il(e,a,n)}function Wl(){return(ze&6)===0?(Co(0),!1):!0}function Of(){if(Se!==null){if(He===0)var e=Se.return;else e=Se,na=ms=null,Zu(e),ir=null,co=0,e=Se;for(;e!==null;)c0(e.alternate,e),e=e.return;Se=null}}function dr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,cS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),da=0,Of(),Ye=e,Se=a=ta(e.current,null),be=n,He=0,si=null,Ba=!1,ur=Nt(e,n),Cf=!1,fr=ri=wf=Es=Ha=nn=0,Zn=Ao=null,Df=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var c=31-Lt(r),f=1<<c;n|=e[c],r&=~f}return ha=n,dl(),a}function L0(e,n){me=null,U.H=xo,n===nr||n===yl?(n=Zp(),He=3):n===Fu?(n=Zp(),He=4):He=n===hf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,si=n,Se===null&&(nn=1,Pl(e,pi(n,e.current)))}function O0(){var e=ii.current;return e===null?!0:(be&4194048)===be?xi===null:(be&62914560)===be||(be&536870912)!==0?e===xi:!1}function P0(){var e=U.H;return U.H=xo,e===null?xo:e}function z0(){var e=U.A;return U.A=Gv,e}function ql(){nn=4,Ba||(be&4194048)!==be&&ii.current!==null||(ur=!0),(Ha&134217727)===0&&(Es&134217727)===0||Ye===null||ka(Ye,be,ri,!1)}function Pf(e,n,a){var r=ze;ze|=2;var c=P0(),f=z0();(Ye!==e||be!==n)&&(jl=null,dr(e,n)),n=!1;var g=nn;t:do try{if(He!==0&&Se!==null){var T=Se,V=si;switch(He){case 8:Of(),g=6;break t;case 3:case 2:case 9:case 6:ii.current===null&&(n=!0);var it=He;if(He=0,si=null,pr(e,T,V,it),a&&ur){g=0;break t}break;default:it=He,He=0,si=null,pr(e,T,V,it)}}Xv(),g=nn;break}catch(gt){L0(e,gt)}while(!0);return n&&e.shellSuspendCounter++,na=ms=null,ze=r,U.H=c,U.A=f,Se===null&&(Ye=null,be=0,dl()),g}function Xv(){for(;Se!==null;)F0(Se)}function jv(e,n){var a=ze;ze|=2;var r=P0(),c=z0();Ye!==e||be!==n?(jl=null,Xl=M()+500,dr(e,n)):ur=Nt(e,n);t:do try{if(He!==0&&Se!==null){n=Se;var f=si;e:switch(He){case 1:He=0,si=null,pr(e,n,f,1);break;case 2:case 9:if(qp(f)){He=0,si=null,I0(n);break}n=function(){He!==2&&He!==9||Ye!==e||(He=7),Bi(e)},f.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:qp(f)?(He=0,si=null,I0(n)):(He=0,si=null,pr(e,n,f,7));break;case 5:var g=null;switch(Se.tag){case 26:g=Se.memoizedState;case 5:case 27:var T=Se;if(g?bg(g):T.stateNode.complete){He=0,si=null;var V=T.sibling;if(V!==null)Se=V;else{var it=T.return;it!==null?(Se=it,Yl(it)):Se=null}break e}}He=0,si=null,pr(e,n,f,5);break;case 6:He=0,si=null,pr(e,n,f,6);break;case 8:Of(),nn=6;break t;default:throw Error(s(462))}}Wv();break}catch(gt){L0(e,gt)}while(!0);return na=ms=null,U.H=r,U.A=c,ze=a,Se!==null?0:(Ye=null,be=0,dl(),nn)}function Wv(){for(;Se!==null&&!jt();)F0(Se)}function F0(e){var n=o0(e.alternate,e,ha);e.memoizedProps=e.pendingProps,n===null?Yl(e):Se=n}function I0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=e0(a,n,n.pendingProps,n.type,void 0,be);break;case 11:n=e0(a,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:Zu(n);default:c0(a,n),n=Se=zp(n,ha),n=o0(a,n,ha)}e.memoizedProps=e.pendingProps,n===null?Yl(e):Se=n}function pr(e,n,a,r){na=ms=null,Zu(n),ir=null,co=0;var c=n.return;try{if(Ov(e,c,n,a,be)){nn=1,Pl(e,pi(a,e.current)),Se=null;return}}catch(f){if(c!==null)throw Se=c,f;nn=1,Pl(e,pi(a,e.current)),Se=null;return}n.flags&32768?(Ae||r===1?e=!0:ur||(be&536870912)!==0?e=!1:(Ba=e=!0,(r===2||r===9||r===3||r===6)&&(r=ii.current,r!==null&&r.tag===13&&(r.flags|=16384))),B0(n,e)):Yl(n)}function Yl(e){var n=e;do{if((n.flags&32768)!==0){B0(n,Ba);return}e=n.return;var a=Fv(n.alternate,n,ha);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=e}while(n!==null);nn===0&&(nn=5)}function B0(e,n){do{var a=Iv(e.alternate,e);if(a!==null){a.flags&=32767,Se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Se=e;return}Se=e=a}while(e!==null);nn=6,Se=null}function H0(e,n,a,r,c,f,g,T,V){e.cancelPendingCommit=null;do Zl();while(mn!==0);if((ze&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Mu,Ti(e,a,f,g,T,V),e===Ye&&(Se=Ye=null,be=0),hr=n,Va=e,da=a,Nf=f,Uf=c,w0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Kv(ht,function(){return j0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=U.T,U.T=null,c=I.p,I.p=2,g=ze,ze|=4;try{Bv(e,n,a)}finally{ze=g,I.p=c,U.T=r}}mn=1,G0(),V0(),k0()}}function G0(){if(mn===1){mn=0;var e=Va,n=hr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var r=I.p;I.p=2;var c=ze;ze|=4;try{y0(n,e);var f=qf,g=Rp(e.containerInfo),T=f.focusedElem,V=f.selectionRange;if(g!==T&&T&&T.ownerDocument&&Ap(T.ownerDocument.documentElement,T)){if(V!==null&&_u(T)){var it=V.start,gt=V.end;if(gt===void 0&&(gt=it),"selectionStart"in T)T.selectionStart=it,T.selectionEnd=Math.min(gt,T.value.length);else{var St=T.ownerDocument||document,rt=St&&St.defaultView||window;if(rt.getSelection){var ut=rt.getSelection(),Zt=T.textContent.length,oe=Math.min(V.start,Zt),je=V.end===void 0?oe:Math.min(V.end,Zt);!ut.extend&&oe>je&&(g=je,je=oe,oe=g);var Q=Tp(T,oe),W=Tp(T,je);if(Q&&W&&(ut.rangeCount!==1||ut.anchorNode!==Q.node||ut.anchorOffset!==Q.offset||ut.focusNode!==W.node||ut.focusOffset!==W.offset)){var nt=St.createRange();nt.setStart(Q.node,Q.offset),ut.removeAllRanges(),oe>je?(ut.addRange(nt),ut.extend(W.node,W.offset)):(nt.setEnd(W.node,W.offset),ut.addRange(nt))}}}}for(St=[],ut=T;ut=ut.parentNode;)ut.nodeType===1&&St.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<St.length;T++){var xt=St[T];xt.element.scrollLeft=xt.left,xt.element.scrollTop=xt.top}}oc=!!Wf,qf=Wf=null}finally{ze=c,I.p=r,U.T=a}}e.current=n,mn=2}}function V0(){if(mn===2){mn=0;var e=Va,n=hr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var r=I.p;I.p=2;var c=ze;ze|=4;try{g0(e,n.alternate,n)}finally{ze=c,I.p=r,U.T=a}}mn=3}}function k0(){if(mn===4||mn===3){mn=0,N();var e=Va,n=hr,a=da,r=w0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,hr=Va=null,X0(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ga=null),Bs(a),n=n.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(Mt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=U.T,c=I.p,I.p=2,U.T=null;try{for(var f=e.onRecoverableError,g=0;g<r.length;g++){var T=r[g];f(T.value,{componentStack:T.stack})}}finally{U.T=n,I.p=c}}(da&3)!==0&&Zl(),Bi(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===Lf?Ro++:(Ro=0,Lf=e):Ro=0,Co(0)}}function X0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,oo(n)))}function Zl(){return G0(),V0(),k0(),j0()}function j0(){if(mn!==5)return!1;var e=Va,n=Nf;Nf=0;var a=Bs(da),r=U.T,c=I.p;try{I.p=32>a?32:a,U.T=null,a=Uf,Uf=null;var f=Va,g=da;if(mn=0,hr=Va=null,da=0,(ze&6)!==0)throw Error(s(331));var T=ze;if(ze|=4,A0(f.current),b0(f,f.current,g,a),ze=T,Co(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(Mt,f)}catch{}return!0}finally{I.p=c,U.T=r,X0(e,n)}}function W0(e,n,a){n=pi(a,n),n=ff(e.stateNode,n,2),e=Pa(e,n,2),e!==null&&(Pn(e,2),Bi(e))}function Ge(e,n,a){if(e.tag===3)W0(e,e,a);else for(;n!==null;){if(n.tag===3){W0(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ga===null||!Ga.has(r))){e=pi(a,e),a=qm(2),r=Pa(n,a,2),r!==null&&(Ym(a,r,n,e),Pn(r,2),Bi(r));break}}n=n.return}}function zf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Vv;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(Cf=!0,c.add(a),e=qv.bind(null,e,n,a),n.then(e,e))}function qv(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ye===e&&(be&a)===a&&(nn===4||nn===3&&(be&62914560)===be&&300>M()-kl?(ze&2)===0&&dr(e,0):wf|=a,fr===be&&(fr=0)),Bi(e)}function q0(e,n){n===0&&(n=Ie()),e=hs(e,n),e!==null&&(Pn(e,n),Bi(e))}function Yv(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),q0(e,a)}function Zv(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),q0(e,a)}function Kv(e,n){return qt(e,n)}var Kl=null,mr=null,Ff=!1,Ql=!1,If=!1,Xa=0;function Bi(e){e!==mr&&e.next===null&&(mr===null?Kl=mr=e:mr=mr.next=e),Ql=!0,Ff||(Ff=!0,Jv())}function Co(e,n){if(!If&&Ql){If=!0;do for(var a=!1,r=Kl;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var g=r.suspendedLanes,T=r.pingedLanes;f=(1<<31-Lt(42|e)+1)-1,f&=c&~(g&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Q0(r,f))}else f=be,f=pt(r,r===Ye?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Nt(r,f)||(a=!0,Q0(r,f));r=r.next}while(a);If=!1}}function Qv(){Y0()}function Y0(){Ql=Ff=!1;var e=0;Xa!==0&&lS()&&(e=Xa);for(var n=M(),a=null,r=Kl;r!==null;){var c=r.next,f=Z0(r,n);f===0?(r.next=null,a===null?Kl=c:a.next=c,c===null&&(mr=a)):(a=r,(e!==0||(f&3)!==0)&&(Ql=!0)),r=c}mn!==0&&mn!==5||Co(e),Xa!==0&&(Xa=0)}function Z0(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var g=31-Lt(f),T=1<<g,V=c[g];V===-1?((T&a)===0||(T&r)!==0)&&(c[g]=le(T,n)):V<=n&&(e.expiredLanes|=T),f&=~T}if(n=Ye,a=be,a=pt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(He===2||He===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&te(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Nt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&te(r),Bs(a)){case 2:case 8:a=bt;break;case 32:a=ht;break;case 268435456:a=Rt;break;default:a=ht}return r=K0.bind(null,e),a=qt(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&te(r),e.callbackPriority=2,e.callbackNode=null,2}function K0(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Zl()&&e.callbackNode!==a)return null;var r=be;return r=pt(e,e===Ye?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(N0(e,r,n),Z0(e,M()),e.callbackNode!=null&&e.callbackNode===a?K0.bind(null,e):null)}function Q0(e,n){if(Zl())return null;N0(e,n,!0)}function Jv(){uS(function(){(ze&6)!==0?qt(mt,Qv):Y0()})}function Bf(){if(Xa===0){var e=tr;e===0&&(e=wt,wt<<=1,(wt&261888)===0&&(wt=256)),Xa=e}return Xa}function J0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:sl(""+e)}function $0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function $v(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=J0((c[En]||null).action),g=r.submitter;g&&(n=(n=g[En]||null)?J0(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var T=new cl("action","action",null,r,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Xa!==0){var V=g?$0(c,g):new FormData(c);sf(a,{pending:!0,data:V,method:c.method,action:f},null,V)}}else typeof f=="function"&&(T.preventDefault(),V=g?$0(c,g):new FormData(c),sf(a,{pending:!0,data:V,method:c.method,action:f},f,V))},currentTarget:c}]})}}for(var Hf=0;Hf<yu.length;Hf++){var Gf=yu[Hf],tS=Gf.toLowerCase(),eS=Gf[0].toUpperCase()+Gf.slice(1);Ci(tS,"on"+eS)}Ci(Dp,"onAnimationEnd"),Ci(Np,"onAnimationIteration"),Ci(Up,"onAnimationStart"),Ci("dblclick","onDoubleClick"),Ci("focusin","onFocus"),Ci("focusout","onBlur"),Ci(_v,"onTransitionRun"),Ci(xv,"onTransitionStart"),Ci(vv,"onTransitionCancel"),Ci(Lp,"onTransitionEnd"),J("onMouseEnter",["mouseout","mouseover"]),J("onMouseLeave",["mouseout","mouseover"]),J("onPointerEnter",["pointerout","pointerover"]),J("onPointerLeave",["pointerout","pointerover"]),st("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),st("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),st("onBeforeInput",["compositionend","keypress","textInput","paste"]),st("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wo));function tg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var g=r.length-1;0<=g;g--){var T=r[g],V=T.instance,it=T.currentTarget;if(T=T.listener,V!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=it;try{f(c)}catch(gt){hl(gt)}c.currentTarget=null,f=V}else for(g=0;g<r.length;g++){if(T=r[g],V=T.instance,it=T.currentTarget,T=T.listener,V!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=it;try{f(c)}catch(gt){hl(gt)}c.currentTarget=null,f=V}}}}function ye(e,n){var a=n[Hs];a===void 0&&(a=n[Hs]=new Set);var r=e+"__bubble";a.has(r)||(eg(n,e,2,!1),a.add(r))}function Vf(e,n,a){var r=0;n&&(r|=4),eg(a,e,r,n)}var Jl="_reactListening"+Math.random().toString(36).slice(2);function kf(e){if(!e[Jl]){e[Jl]=!0,Z.forEach(function(a){a!=="selectionchange"&&(nS.has(a)||Vf(a,!1,e),Vf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Jl]||(n[Jl]=!0,Vf("selectionchange",!1,n))}}function eg(e,n,a,r){switch(Dg(n)){case 2:var c=DS;break;case 8:c=NS;break;default:c=ah}a=c.bind(null,n,a,e),c=void 0,!lu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Xf(e,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var T=r.stateNode.containerInfo;if(T===c)break;if(g===4)for(g=r.return;g!==null;){var V=g.tag;if((V===3||V===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;T!==null;){if(g=Ta(T),g===null)return;if(V=g.tag,V===5||V===6||V===26||V===27){r=f=g;continue t}T=T.parentNode}}r=r.return}rp(function(){var it=f,gt=ru(a),St=[];t:{var rt=Op.get(e);if(rt!==void 0){var ut=cl,Zt=e;switch(e){case"keypress":if(ol(a)===0)break t;case"keydown":case"keyup":ut=Zx;break;case"focusin":Zt="focus",ut=hu;break;case"focusout":Zt="blur",ut=hu;break;case"beforeblur":case"afterblur":ut=hu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=Fx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=Jx;break;case Dp:case Np:case Up:ut=Hx;break;case Lp:ut=tv;break;case"scroll":case"scrollend":ut=Px;break;case"wheel":ut=nv;break;case"copy":case"cut":case"paste":ut=Vx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=fp;break;case"toggle":case"beforetoggle":ut=av}var oe=(n&4)!==0,je=!oe&&(e==="scroll"||e==="scrollend"),Q=oe?rt!==null?rt+"Capture":null:rt;oe=[];for(var W=it,nt;W!==null;){var xt=W;if(nt=xt.stateNode,xt=xt.tag,xt!==5&&xt!==26&&xt!==27||nt===null||Q===null||(xt=Kr(W,Q),xt!=null&&oe.push(Do(W,xt,nt))),je)break;W=W.return}0<oe.length&&(rt=new ut(rt,Zt,null,a,gt),St.push({event:rt,listeners:oe}))}}if((n&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",rt&&a!==su&&(Zt=a.relatedTarget||a.fromElement)&&(Ta(Zt)||Zt[Ai]))break t;if((ut||rt)&&(rt=gt.window===gt?gt:(rt=gt.ownerDocument)?rt.defaultView||rt.parentWindow:window,ut?(Zt=a.relatedTarget||a.toElement,ut=it,Zt=Zt?Ta(Zt):null,Zt!==null&&(je=u(Zt),oe=Zt.tag,Zt!==je||oe!==5&&oe!==27&&oe!==6)&&(Zt=null)):(ut=null,Zt=it),ut!==Zt)){if(oe=cp,xt="onMouseLeave",Q="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(oe=fp,xt="onPointerLeave",Q="onPointerEnter",W="pointer"),je=ut==null?rt:ls(ut),nt=Zt==null?rt:ls(Zt),rt=new oe(xt,W+"leave",ut,a,gt),rt.target=je,rt.relatedTarget=nt,xt=null,Ta(gt)===it&&(oe=new oe(Q,W+"enter",Zt,a,gt),oe.target=nt,oe.relatedTarget=je,xt=oe),je=xt,ut&&Zt)e:{for(oe=iS,Q=ut,W=Zt,nt=0,xt=Q;xt;xt=oe(xt))nt++;xt=0;for(var ne=W;ne;ne=oe(ne))xt++;for(;0<nt-xt;)Q=oe(Q),nt--;for(;0<xt-nt;)W=oe(W),xt--;for(;nt--;){if(Q===W||W!==null&&Q===W.alternate){oe=Q;break e}Q=oe(Q),W=oe(W)}oe=null}else oe=null;ut!==null&&ng(St,rt,ut,oe,!1),Zt!==null&&je!==null&&ng(St,je,Zt,oe,!0)}}t:{if(rt=it?ls(it):window,ut=rt.nodeName&&rt.nodeName.toLowerCase(),ut==="select"||ut==="input"&&rt.type==="file")var Ne=vp;else if(_p(rt))if(Sp)Ne=pv;else{Ne=hv;var $t=fv}else ut=rt.nodeName,!ut||ut.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?it&&Ri(it.elementType)&&(Ne=vp):Ne=dv;if(Ne&&(Ne=Ne(e,it))){xp(St,Ne,a,gt);break t}$t&&$t(e,rt,it),e==="focusout"&&it&&rt.type==="number"&&it.memoizedProps.value!=null&&An(rt,"number",rt.value)}switch($t=it?ls(it):window,e){case"focusin":(_p($t)||$t.contentEditable==="true")&&(Ws=$t,xu=it,ao=null);break;case"focusout":ao=xu=Ws=null;break;case"mousedown":vu=!0;break;case"contextmenu":case"mouseup":case"dragend":vu=!1,Cp(St,a,gt);break;case"selectionchange":if(gv)break;case"keydown":case"keyup":Cp(St,a,gt)}var _e;if(pu)t:{switch(e){case"compositionstart":var Ee="onCompositionStart";break t;case"compositionend":Ee="onCompositionEnd";break t;case"compositionupdate":Ee="onCompositionUpdate";break t}Ee=void 0}else js?mp(e,a)&&(Ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(hp&&a.locale!=="ko"&&(js||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&js&&(_e=op()):(Ca=gt,cu="value"in Ca?Ca.value:Ca.textContent,js=!0)),$t=$l(it,Ee),0<$t.length&&(Ee=new up(Ee,e,null,a,gt),St.push({event:Ee,listeners:$t}),_e?Ee.data=_e:(_e=gp(a),_e!==null&&(Ee.data=_e)))),(_e=rv?ov(e,a):lv(e,a))&&(Ee=$l(it,"onBeforeInput"),0<Ee.length&&($t=new up("onBeforeInput","beforeinput",null,a,gt),St.push({event:$t,listeners:Ee}),$t.data=_e)),$v(St,e,it,a,gt)}tg(St,n)})}function Do(e,n,a){return{instance:e,listener:n,currentTarget:a}}function $l(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Kr(e,a),c!=null&&r.unshift(Do(e,c,f)),c=Kr(e,n),c!=null&&r.push(Do(e,c,f))),e.tag===3)return r;e=e.return}return[]}function iS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ng(e,n,a,r,c){for(var f=n._reactName,g=[];a!==null&&a!==r;){var T=a,V=T.alternate,it=T.stateNode;if(T=T.tag,V!==null&&V===r)break;T!==5&&T!==26&&T!==27||it===null||(V=it,c?(it=Kr(a,f),it!=null&&g.unshift(Do(a,it,V))):c||(it=Kr(a,f),it!=null&&g.push(Do(a,it,V)))),a=a.return}g.length!==0&&e.push({event:n,listeners:g})}var aS=/\r\n?/g,sS=/\u0000|\uFFFD/g;function ig(e){return(typeof e=="string"?e:""+e).replace(aS,`
`).replace(sS,"")}function ag(e,n){return n=ig(n),ig(e)===n}function Xe(e,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||pn(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&pn(e,""+r);break;case"className":se(e,"class",r);break;case"tabIndex":se(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":se(e,a,r);break;case"style":Vs(e,r,f);break;case"data":if(n!=="object"){se(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=sl(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xe(e,n,"name",c.name,c,null),Xe(e,n,"formEncType",c.formEncType,c,null),Xe(e,n,"formMethod",c.formMethod,c,null),Xe(e,n,"formTarget",c.formTarget,c,null)):(Xe(e,n,"encType",c.encType,c,null),Xe(e,n,"method",c.method,c,null),Xe(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=sl(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Ji);break;case"onScroll":r!=null&&ye("scroll",e);break;case"onScrollEnd":r!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=sl(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":ye("beforetoggle",e),ye("toggle",e),Qt(e,"popover",r);break;case"xlinkActuate":Jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Jt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Jt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Jt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Jt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Qt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Lx.get(a)||a,Qt(e,a,r))}}function jf(e,n,a,r,c,f){switch(a){case"style":Vs(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?pn(e,r):(typeof r=="number"||typeof r=="bigint")&&pn(e,""+r);break;case"onScroll":r!=null&&ye("scroll",e);break;case"onScrollEnd":r!=null&&ye("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ct.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[En]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,c);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):Qt(e,a,r)}}}function Ln(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,f,g,a,null)}}c&&Xe(e,n,"srcSet",a.srcSet,a,null),r&&Xe(e,n,"src",a.src,a,null);return;case"input":ye("invalid",e);var T=f=g=c=null,V=null,it=null;for(r in a)if(a.hasOwnProperty(r)){var gt=a[r];if(gt!=null)switch(r){case"name":c=gt;break;case"type":g=gt;break;case"checked":V=gt;break;case"defaultChecked":it=gt;break;case"value":f=gt;break;case"defaultValue":T=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(s(137,n));break;default:Xe(e,n,r,gt,a,null)}}Qi(e,f,T,V,it,g,c,!1);return;case"select":ye("invalid",e),r=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":g=T;break;case"multiple":r=T;default:Xe(e,n,c,T,a,null)}n=f,a=g,e.multiple=!!r,n!=null?hi(e,!!r,n,!1):a!=null&&hi(e,!!r,a,!0);return;case"textarea":ye("invalid",e),f=c=r=null;for(g in a)if(a.hasOwnProperty(g)&&(T=a[g],T!=null))switch(g){case"value":r=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Xe(e,n,g,T,a,null)}Rn(e,r,c,f);return;case"option":for(V in a)a.hasOwnProperty(V)&&(r=a[V],r!=null)&&(V==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":Xe(e,n,V,r,a,null));return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(r=0;r<wo.length;r++)ye(wo[r],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in a)if(a.hasOwnProperty(it)&&(r=a[it],r!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,it,r,a,null)}return;default:if(Ri(n)){for(gt in a)a.hasOwnProperty(gt)&&(r=a[gt],r!==void 0&&jf(e,n,gt,r,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(r=a[T],r!=null&&Xe(e,n,T,r,a,null))}function rS(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,T=null,V=null,it=null,gt=null;for(ut in a){var St=a[ut];if(a.hasOwnProperty(ut)&&St!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":V=St;default:r.hasOwnProperty(ut)||Xe(e,n,ut,null,r,St)}}for(var rt in r){var ut=r[rt];if(St=a[rt],r.hasOwnProperty(rt)&&(ut!=null||St!=null))switch(rt){case"type":f=ut;break;case"name":c=ut;break;case"checked":it=ut;break;case"defaultChecked":gt=ut;break;case"value":g=ut;break;case"defaultValue":T=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ut!==St&&Xe(e,n,rt,ut,r,St)}}Tn(e,g,T,V,it,gt,f,c);return;case"select":ut=g=T=rt=null;for(f in a)if(V=a[f],a.hasOwnProperty(f)&&V!=null)switch(f){case"value":break;case"multiple":ut=V;default:r.hasOwnProperty(f)||Xe(e,n,f,null,r,V)}for(c in r)if(f=r[c],V=a[c],r.hasOwnProperty(c)&&(f!=null||V!=null))switch(c){case"value":rt=f;break;case"defaultValue":T=f;break;case"multiple":g=f;default:f!==V&&Xe(e,n,c,f,r,V)}n=T,a=g,r=ut,rt!=null?hi(e,!!a,rt,!1):!!r!=!!a&&(n!=null?hi(e,!!a,n,!0):hi(e,!!a,a?[]:"",!1));return;case"textarea":ut=rt=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!r.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Xe(e,n,T,null,r,c)}for(g in r)if(c=r[g],f=a[g],r.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":rt=c;break;case"defaultValue":ut=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Xe(e,n,g,c,r,f)}Be(e,rt,ut);return;case"option":for(var Zt in a)rt=a[Zt],a.hasOwnProperty(Zt)&&rt!=null&&!r.hasOwnProperty(Zt)&&(Zt==="selected"?e.selected=!1:Xe(e,n,Zt,null,r,rt));for(V in r)rt=r[V],ut=a[V],r.hasOwnProperty(V)&&rt!==ut&&(rt!=null||ut!=null)&&(V==="selected"?e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol":Xe(e,n,V,rt,r,ut));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in a)rt=a[oe],a.hasOwnProperty(oe)&&rt!=null&&!r.hasOwnProperty(oe)&&Xe(e,n,oe,null,r,rt);for(it in r)if(rt=r[it],ut=a[it],r.hasOwnProperty(it)&&rt!==ut&&(rt!=null||ut!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:Xe(e,n,it,rt,r,ut)}return;default:if(Ri(n)){for(var je in a)rt=a[je],a.hasOwnProperty(je)&&rt!==void 0&&!r.hasOwnProperty(je)&&jf(e,n,je,void 0,r,rt);for(gt in r)rt=r[gt],ut=a[gt],!r.hasOwnProperty(gt)||rt===ut||rt===void 0&&ut===void 0||jf(e,n,gt,rt,r,ut);return}}for(var Q in a)rt=a[Q],a.hasOwnProperty(Q)&&rt!=null&&!r.hasOwnProperty(Q)&&Xe(e,n,Q,null,r,rt);for(St in r)rt=r[St],ut=a[St],!r.hasOwnProperty(St)||rt===ut||rt==null&&ut==null||Xe(e,n,St,rt,r,ut)}function sg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function oS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,g=c.initiatorType,T=c.duration;if(f&&T&&sg(g)){for(g=0,T=c.responseEnd,r+=1;r<a.length;r++){var V=a[r],it=V.startTime;if(it>T)break;var gt=V.transferSize,St=V.initiatorType;gt&&sg(St)&&(V=V.responseEnd,g+=gt*(V<T?1:(T-it)/(V-it)))}if(--r,n+=8*(f+g)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Wf=null,qf=null;function tc(e){return e.nodeType===9?e:e.ownerDocument}function rg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function og(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Yf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zf=null;function lS(){var e=window.event;return e&&e.type==="popstate"?e===Zf?!1:(Zf=e,!0):(Zf=null,!1)}var lg=typeof setTimeout=="function"?setTimeout:void 0,cS=typeof clearTimeout=="function"?clearTimeout:void 0,cg=typeof Promise=="function"?Promise:void 0,uS=typeof queueMicrotask=="function"?queueMicrotask:typeof cg<"u"?function(e){return cg.resolve(null).then(e).catch(fS)}:lg;function fS(e){setTimeout(function(){throw e})}function ja(e){return e==="head"}function ug(e,n){var a=n,r=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(c),vr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")No(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,No(a);for(var f=a.firstChild;f;){var g=f.nextSibling,T=f.nodeName;f[os]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&No(e.ownerDocument.body);a=c}while(a);vr(n)}function fg(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function Kf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Kf(a),Zr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function hS(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[os])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=vi(e.nextSibling),e===null)break}return null}function dS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=vi(e.nextSibling),e===null))return null;return e}function hg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=vi(e.nextSibling),e===null))return null;return e}function Qf(e){return e.data==="$?"||e.data==="$~"}function Jf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function pS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function vi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var $f=null;function dg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return vi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function pg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function mg(e,n,a){switch(n=tc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function No(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Zr(e)}var Si=new Map,gg=new Set;function ec(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var pa=I.d;I.d={f:mS,r:gS,D:_S,C:xS,L:vS,m:SS,X:MS,S:yS,M:bS};function mS(){var e=pa.f(),n=Wl();return e||n}function gS(e){var n=Aa(e);n!==null&&n.tag===5&&n.type==="form"?Lm(n):pa.r(e)}var gr=typeof document>"u"?null:document;function _g(e,n,a){var r=gr;if(r&&typeof n=="string"&&n){var c=fe(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),gg.has(c)||(gg.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),Ln(n,"link",e),A(n),r.head.appendChild(n)))}}function _S(e){pa.D(e),_g("dns-prefetch",e,null)}function xS(e,n){pa.C(e,n),_g("preconnect",e,n)}function vS(e,n,a){pa.L(e,n,a);var r=gr;if(r&&e&&n){var c='link[rel="preload"][as="'+fe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+fe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+fe(a.imageSizes)+'"]')):c+='[href="'+fe(e)+'"]';var f=c;switch(n){case"style":f=_r(e);break;case"script":f=xr(e)}Si.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Si.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(Uo(f))||n==="script"&&r.querySelector(Lo(f))||(n=r.createElement("link"),Ln(n,"link",e),A(n),r.head.appendChild(n)))}}function SS(e,n){pa.m(e,n);var a=gr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+fe(r)+'"][href="'+fe(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=xr(e)}if(!Si.has(f)&&(e=_({rel:"modulepreload",href:e},n),Si.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Lo(f)))return}r=a.createElement("link"),Ln(r,"link",e),A(r),a.head.appendChild(r)}}}function yS(e,n,a){pa.S(e,n,a);var r=gr;if(r&&e){var c=Ra(r).hoistableStyles,f=_r(e);n=n||"default";var g=c.get(f);if(!g){var T={loading:0,preload:null};if(g=r.querySelector(Uo(f)))T.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Si.get(f))&&th(e,a);var V=g=r.createElement("link");A(V),Ln(V,"link",e),V._p=new Promise(function(it,gt){V.onload=it,V.onerror=gt}),V.addEventListener("load",function(){T.loading|=1}),V.addEventListener("error",function(){T.loading|=2}),T.loading|=4,nc(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:T},c.set(f,g)}}}function MS(e,n){pa.X(e,n);var a=gr;if(a&&e){var r=Ra(a).hoistableScripts,c=xr(e),f=r.get(c);f||(f=a.querySelector(Lo(c)),f||(e=_({src:e,async:!0},n),(n=Si.get(c))&&eh(e,n),f=a.createElement("script"),A(f),Ln(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function bS(e,n){pa.M(e,n);var a=gr;if(a&&e){var r=Ra(a).hoistableScripts,c=xr(e),f=r.get(c);f||(f=a.querySelector(Lo(c)),f||(e=_({src:e,async:!0,type:"module"},n),(n=Si.get(c))&&eh(e,n),f=a.createElement("script"),A(f),Ln(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function xg(e,n,a,r){var c=(c=at.current)?ec(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=_r(a.href),a=Ra(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=_r(a.href);var f=Ra(c).hoistableStyles,g=f.get(e);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,g),(f=c.querySelector(Uo(e)))&&!f._p&&(g.instance=f,g.state.loading=5),Si.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Si.set(e,a),f||ES(c,e,a,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=xr(a),a=Ra(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function _r(e){return'href="'+fe(e)+'"'}function Uo(e){return'link[rel="stylesheet"]['+e+"]"}function vg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function ES(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Ln(n,"link",a),A(n),e.head.appendChild(n))}function xr(e){return'[src="'+fe(e)+'"]'}function Lo(e){return"script[async]"+e}function Sg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+fe(a.href)+'"]');if(r)return n.instance=r,A(r),r;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),A(r),Ln(r,"style",c),nc(r,a.precedence,e),n.instance=r;case"stylesheet":c=_r(a.href);var f=e.querySelector(Uo(c));if(f)return n.state.loading|=4,n.instance=f,A(f),f;r=vg(a),(c=Si.get(c))&&th(r,c),f=(e.ownerDocument||e).createElement("link"),A(f);var g=f;return g._p=new Promise(function(T,V){g.onload=T,g.onerror=V}),Ln(f,"link",r),n.state.loading|=4,nc(f,a.precedence,e),n.instance=f;case"script":return f=xr(a.src),(c=e.querySelector(Lo(f)))?(n.instance=c,A(c),c):(r=a,(c=Si.get(f))&&(r=_({},a),eh(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),A(c),Ln(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,nc(r,a.precedence,e));return n.instance}function nc(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,g=0;g<r.length;g++){var T=r[g];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function th(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function eh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ic=null;function yg(e,n,a){if(ic===null){var r=new Map,c=ic=new Map;c.set(a,r)}else c=ic,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[os]||f[on]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=e+g;var T=r.get(g);T?T.push(f):r.set(g,[f])}}return r}function Mg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function TS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function bg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function AS(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=_r(r.href),f=n.querySelector(Uo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ac.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,A(f);return}f=n.ownerDocument||n,r=vg(r),(c=Si.get(c))&&th(r,c),f=f.createElement("link"),A(f);var g=f;g._p=new Promise(function(T,V){g.onload=T,g.onerror=V}),Ln(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ac.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var nh=0;function RS(e,n){return e.stylesheets&&e.count===0&&rc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&rc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&nh===0&&(nh=62500*oS());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&rc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>nh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function ac(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)rc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var sc=null;function rc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,sc=new Map,n.forEach(CS,e),sc=null,ac.call(e))}function CS(e,n){if(!(n.state.loading&4)){var a=sc.get(e);if(a)var r=a.get(null);else{a=new Map,sc.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||r,f===r&&a.set(null,c),a.set(g,c),this.count++,r=ac.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Oo={$$typeof:z,Provider:null,Consumer:null,_currentValue:et,_currentValue2:et,_threadCount:0};function wS(e,n,a,r,c,f,g,T,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function Eg(e,n,a,r,c,f,g,T,V,it,gt,St){return e=new wS(e,n,a,g,V,it,gt,St,T),n=1,f===!0&&(n|=24),f=ni(3,null,null,n),e.current=f,f.stateNode=e,n=Ou(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Iu(f),e}function Tg(e){return e?(e=Zs,e):Zs}function Ag(e,n,a,r,c,f){c=Tg(c),r.context===null?r.context=c:r.pendingContext=c,r=Oa(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Pa(e,r,n),a!==null&&(Kn(a,e,n),fo(a,e,n))}function Rg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function ih(e,n){Rg(e,n),(e=e.alternate)&&Rg(e,n)}function Cg(e){if(e.tag===13||e.tag===31){var n=hs(e,67108864);n!==null&&Kn(n,e,67108864),ih(e,67108864)}}function wg(e){if(e.tag===13||e.tag===31){var n=oi();n=Wr(n);var a=hs(e,n);a!==null&&Kn(a,e,n),ih(e,n)}}var oc=!0;function DS(e,n,a,r){var c=U.T;U.T=null;var f=I.p;try{I.p=2,ah(e,n,a,r)}finally{I.p=f,U.T=c}}function NS(e,n,a,r){var c=U.T;U.T=null;var f=I.p;try{I.p=8,ah(e,n,a,r)}finally{I.p=f,U.T=c}}function ah(e,n,a,r){if(oc){var c=sh(r);if(c===null)Xf(e,n,r,lc,a),Ng(e,r);else if(LS(c,e,n,a,r))r.stopPropagation();else if(Ng(e,r),n&4&&-1<US.indexOf(e)){for(;c!==null;){var f=Aa(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=_t(f.pendingLanes);if(g!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;g;){var V=1<<31-Lt(g);T.entanglements[1]|=V,g&=~V}Bi(f),(ze&6)===0&&(Xl=M()+500,Co(0))}}break;case 31:case 13:T=hs(f,2),T!==null&&Kn(T,f,2),Wl(),ih(f,2)}if(f=sh(r),f===null&&Xf(e,n,r,lc,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Xf(e,n,r,null,a)}}function sh(e){return e=ru(e),rh(e)}var lc=null;function rh(e){if(lc=null,e=Ta(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return lc=e,null}function Dg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case mt:return 2;case bt:return 8;case ht:case Kt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var oh=!1,Wa=null,qa=null,Ya=null,Po=new Map,zo=new Map,Za=[],US="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ng(e,n){switch(e){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":Po.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(n.pointerId)}}function Fo(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Aa(n),n!==null&&Cg(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function LS(e,n,a,r,c){switch(n){case"focusin":return Wa=Fo(Wa,e,n,a,r,c),!0;case"dragenter":return qa=Fo(qa,e,n,a,r,c),!0;case"mouseover":return Ya=Fo(Ya,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return Po.set(f,Fo(Po.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,zo.set(f,Fo(zo.get(f)||null,e,n,a,r,c)),!0}return!1}function Ug(e){var n=Ta(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Pi(e.priority,function(){wg(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Pi(e.priority,function(){wg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=sh(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);su=r,a.target.dispatchEvent(r),su=null}else return n=Aa(a),n!==null&&Cg(n),e.blockedOn=a,!1;n.shift()}return!0}function Lg(e,n,a){cc(e)&&a.delete(n)}function OS(){oh=!1,Wa!==null&&cc(Wa)&&(Wa=null),qa!==null&&cc(qa)&&(qa=null),Ya!==null&&cc(Ya)&&(Ya=null),Po.forEach(Lg),zo.forEach(Lg)}function uc(e,n){e.blockedOn===n&&(e.blockedOn=null,oh||(oh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,OS)))}var fc=null;function Og(e){fc!==e&&(fc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){fc===e&&(fc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(rh(r||a)===null)continue;break}var f=Aa(a);f!==null&&(e.splice(n,3),n-=3,sf(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function vr(e){function n(V){return uc(V,e)}Wa!==null&&uc(Wa,e),qa!==null&&uc(qa,e),Ya!==null&&uc(Ya,e),Po.forEach(n),zo.forEach(n);for(var a=0;a<Za.length;a++){var r=Za[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)Ug(a),a.blockedOn===null&&Za.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],g=c[En]||null;if(typeof f=="function")g||Og(a);else if(g){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[En]||null)T=g.formAction;else if(rh(c)!==null)continue}else T=g.action;typeof T=="function"?a[r+1]=T:(a.splice(r,3),r-=3),Og(a)}}}function Pg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function lh(e){this._internalRoot=e}hc.prototype.render=lh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=oi();Ag(a,r,e,n,null,null)},hc.prototype.unmount=lh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Ag(e.current,2,null,e,null,null),Wl(),n[Ai]=null}};function hc(e){this._internalRoot=e}hc.prototype.unstable_scheduleHydration=function(e){if(e){var n=qr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Za.length&&n!==0&&n<Za[a].priority;a++);Za.splice(a,0,e),a===0&&Ug(e)}};var zg=t.version;if(zg!=="19.2.3")throw Error(s(527,zg,"19.2.3"));I.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var PS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dc.isDisabled&&dc.supportsFiber)try{Mt=dc.inject(PS),Tt=dc}catch{}}return Bo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=km,f=Xm,g=jm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=Eg(e,1,!1,null,null,a,r,null,c,f,g,Pg),e[Ai]=n.current,kf(e),new lh(n)},Bo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=km,g=Xm,T=jm,V=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=Eg(e,1,!0,n,a??null,r,c,V,f,g,T,Pg),n.context=Tg(null),a=n.current,r=oi(),r=Wr(r),c=Oa(r),c.callback=null,Pa(a,c,r),a=r,n.current.lanes=a,Pn(n,a),Bi(n),e[Ai]=n.current,kf(e),new hc(n)},Bo.version="19.2.3",Bo}var Wg;function WS(){if(Wg)return fh.exports;Wg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),fh.exports=jS(),fh.exports}var qS=WS();const YS=Q_(qS);const kd="182",Pr={ROTATE:0,DOLLY:1,PAN:2},Or={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ZS=0,qg=1,KS=2,Gc=1,QS=2,Yo=3,rs=0,ti=1,Vi=2,ya=0,zr=1,Yg=2,Zg=3,Kg=4,JS=5,Ns=100,$S=101,ty=102,ey=103,ny=104,iy=200,ay=201,sy=202,ry=203,Zh=204,Kh=205,oy=206,ly=207,cy=208,uy=209,fy=210,hy=211,dy=212,py=213,my=214,Qh=0,Jh=1,$h=2,Ir=3,td=4,ed=5,nd=6,id=7,J_=0,gy=1,_y=2,ji=0,$_=1,tx=2,ex=3,nx=4,ix=5,ax=6,sx=7,rx=300,Ps=301,Br=302,ad=303,sd=304,tu=306,rd=1e3,Sa=1001,od=1002,On=1003,xy=1004,pc=1005,Bn=1006,mh=1007,Ls=1008,ui=1009,ox=1010,lx=1011,Qo=1012,Xd=1013,Yi=1014,ki=1015,ba=1016,jd=1017,Wd=1018,Jo=1020,cx=35902,ux=35899,fx=1021,hx=1022,Oi=1023,Ea=1026,Os=1027,dx=1028,qd=1029,Hr=1030,Yd=1031,Zd=1033,Vc=33776,kc=33777,Xc=33778,jc=33779,ld=35840,cd=35841,ud=35842,fd=35843,hd=36196,dd=37492,pd=37496,md=37488,gd=37489,_d=37490,xd=37491,vd=37808,Sd=37809,yd=37810,Md=37811,bd=37812,Ed=37813,Td=37814,Ad=37815,Rd=37816,Cd=37817,wd=37818,Dd=37819,Nd=37820,Ud=37821,Ld=36492,Od=36494,Pd=36495,zd=36283,Fd=36284,Id=36285,Bd=36286,vy=3200,px=0,Sy=1,as="",Mi="srgb",Gr="srgb-linear",qc="linear",Ve="srgb",Sr=7680,Qg=519,yy=512,My=513,by=514,Kd=515,Ey=516,Ty=517,Qd=518,Ay=519,Jg=35044,$g="300 es",Xi=2e3,Yc=2001;function mx(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Zc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Ry(){const o=Zc("canvas");return o.style.display="block",o}const t_={};function e_(...o){const t="THREE."+o.shift();console.log(t,...o)}function ue(...o){const t="THREE."+o.shift();console.warn(t,...o)}function Le(...o){const t="THREE."+o.shift();console.error(t,...o)}function $o(...o){const t=o.join(" ");t in t_||(t_[t]=!0,ue(...o))}function Cy(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}class Fs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ko=Math.PI/180,Kc=180/Math.PI;function el(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Fn[o&255]+Fn[o>>8&255]+Fn[o>>16&255]+Fn[o>>24&255]+"-"+Fn[t&255]+Fn[t>>8&255]+"-"+Fn[t>>16&15|64]+Fn[t>>24&255]+"-"+Fn[i&63|128]+Fn[i>>8&255]+"-"+Fn[i>>16&255]+Fn[i>>24&255]+Fn[s&255]+Fn[s>>8&255]+Fn[s>>16&255]+Fn[s>>24&255]).toLowerCase()}function Me(o,t,i){return Math.max(t,Math.min(i,o))}function wy(o,t){return(o%t+t)%t}function gh(o,t,i){return(1-i)*o+i*t}function Ho(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Qn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Dy={DEG2RAD:Ko};class de{constructor(t=0,i=0){de.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*s-h*l+t.x,this.y=u*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zs{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],x=s[l+2],_=s[l+3],S=u[h+0],b=u[h+1],E=u[h+2],C=u[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=x,t[i+3]=_;return}if(d>=1){t[i+0]=S,t[i+1]=b,t[i+2]=E,t[i+3]=C;return}if(_!==C||m!==S||p!==b||x!==E){let y=m*S+p*b+x*E+_*C;y<0&&(S=-S,b=-b,E=-E,C=-C,y=-y);let v=1-d;if(y<.9995){const F=Math.acos(y),z=Math.sin(F);v=Math.sin(v*F)/z,d=Math.sin(d*F)/z,m=m*v+S*d,p=p*v+b*d,x=x*v+E*d,_=_*v+C*d}else{m=m*v+S*d,p=p*v+b*d,x=x*v+E*d,_=_*v+C*d;const F=1/Math.sqrt(m*m+p*p+x*x+_*_);m*=F,p*=F,x*=F,_*=F}}t[i]=m,t[i+1]=p,t[i+2]=x,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],x=s[l+3],_=u[h],S=u[h+1],b=u[h+2],E=u[h+3];return t[i]=d*E+x*_+m*b-p*S,t[i+1]=m*E+x*S+p*_-d*b,t[i+2]=p*E+x*b+d*S-m*_,t[i+3]=x*E-d*_-m*S-p*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),x=d(l/2),_=d(u/2),S=m(s/2),b=m(l/2),E=m(u/2);switch(h){case"XYZ":this._x=S*x*_+p*b*E,this._y=p*b*_-S*x*E,this._z=p*x*E+S*b*_,this._w=p*x*_-S*b*E;break;case"YXZ":this._x=S*x*_+p*b*E,this._y=p*b*_-S*x*E,this._z=p*x*E-S*b*_,this._w=p*x*_+S*b*E;break;case"ZXY":this._x=S*x*_-p*b*E,this._y=p*b*_+S*x*E,this._z=p*x*E+S*b*_,this._w=p*x*_-S*b*E;break;case"ZYX":this._x=S*x*_-p*b*E,this._y=p*b*_+S*x*E,this._z=p*x*E-S*b*_,this._w=p*x*_+S*b*E;break;case"YZX":this._x=S*x*_+p*b*E,this._y=p*b*_+S*x*E,this._z=p*x*E-S*b*_,this._w=p*x*_-S*b*E;break;case"XZY":this._x=S*x*_-p*b*E,this._y=p*b*_-S*x*E,this._z=p*x*E+S*b*_,this._w=p*x*_+S*b*E;break;default:ue("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],x=i[6],_=i[10],S=s+d+_;if(S>0){const b=.5/Math.sqrt(S+1);this._w=.25/b,this._x=(x-m)*b,this._y=(u-p)*b,this._z=(h-l)*b}else if(s>d&&s>_){const b=2*Math.sqrt(1+s-d-_);this._w=(x-m)/b,this._x=.25*b,this._y=(l+h)/b,this._z=(u+p)/b}else if(d>_){const b=2*Math.sqrt(1+d-s-_);this._w=(u-p)/b,this._x=(l+h)/b,this._y=.25*b,this._z=(m+x)/b}else{const b=2*Math.sqrt(1+_-s-d);this._w=(h-l)/b,this._x=(u+p)/b,this._y=(m+x)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,x=i._w;return this._x=s*x+h*d+l*p-u*m,this._y=l*x+h*m+u*d-s*p,this._z=u*x+h*p+s*m-l*d,this._w=h*x-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,u=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,u=-u,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,i=0,s=0){$.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(n_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(n_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),x=2*(d*i-u*l),_=2*(u*s-h*i);return this.x=i+m*p+h*_-d*x,this.y=s+m*x+d*p-u*_,this.z=l+m*_+u*x-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this.z=Me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this.z=Me(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return _h.copy(this).projectOnVector(t),this.sub(_h)}reflect(t){return this.sub(_h.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _h=new $,n_=new zs;class xe{constructor(t,i,s,l,u,h,d,m,p){xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p)}set(t,i,s,l,u,h,d,m,p){const x=this.elements;return x[0]=t,x[1]=l,x[2]=d,x[3]=i,x[4]=u,x[5]=m,x[6]=s,x[7]=h,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],x=s[4],_=s[7],S=s[2],b=s[5],E=s[8],C=l[0],y=l[3],v=l[6],F=l[1],z=l[4],O=l[7],B=l[2],G=l[5],P=l[8];return u[0]=h*C+d*F+m*B,u[3]=h*y+d*z+m*G,u[6]=h*v+d*O+m*P,u[1]=p*C+x*F+_*B,u[4]=p*y+x*z+_*G,u[7]=p*v+x*O+_*P,u[2]=S*C+b*F+E*B,u[5]=S*y+b*z+E*G,u[8]=S*v+b*O+E*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],x=t[8];return i*h*x-i*d*p-s*u*x+s*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],x=t[8],_=x*h-d*p,S=d*m-x*u,b=p*u-h*m,E=i*_+s*S+l*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=_*C,t[1]=(l*p-x*s)*C,t[2]=(d*s-l*h)*C,t[3]=S*C,t[4]=(x*i-l*m)*C,t[5]=(l*u-d*i)*C,t[6]=b*C,t[7]=(s*m-p*i)*C,t[8]=(h*i-s*u)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(xh.makeScale(t,i)),this}rotate(t){return this.premultiply(xh.makeRotation(-t)),this}translate(t,i){return this.premultiply(xh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xh=new xe,i_=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),a_=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ny(){const o={enabled:!0,workingColorSpace:Gr,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Ve&&(l.r=Ma(l.r),l.g=Ma(l.g),l.b=Ma(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ve&&(l.r=Fr(l.r),l.g=Fr(l.g),l.b=Fr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===as?qc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return $o("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return $o("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Gr]:{primaries:t,whitePoint:s,transfer:qc,toXYZ:i_,fromXYZ:a_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:i_,fromXYZ:a_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),o}const we=Ny();function Ma(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Fr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let yr;class Uy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{yr===void 0&&(yr=Zc("canvas")),yr.width=t.width,yr.height=t.height;const l=yr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=yr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Zc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=Ma(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ma(i[s]/255)*255):i[s]=Ma(i[s]);return{data:i,width:t.width,height:t.height}}else return ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ly=0;class Jd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ly++}),this.uuid=el(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(vh(l[h].image)):u.push(vh(l[h]))}else u=vh(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function vh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Uy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ue("Texture: Unable to serialize Texture."),{})}let Oy=0;const Sh=new $;class Hn extends Fs{constructor(t=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,s=Sa,l=Sa,u=Bn,h=Ls,d=Oi,m=ui,p=Hn.DEFAULT_ANISOTROPY,x=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=el(),this.name="",this.source=new Jd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Sh).x}get height(){return this.source.getSize(Sh).y}get depth(){return this.source.getSize(Sh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ue(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ue(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rd:t.x=t.x-Math.floor(t.x);break;case Sa:t.x=t.x<0?0:1;break;case od:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rd:t.y=t.y-Math.floor(t.y);break;case Sa:t.y=t.y<0?0:1;break;case od:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=rx;Hn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,p=m[0],x=m[4],_=m[8],S=m[1],b=m[5],E=m[9],C=m[2],y=m[6],v=m[10];if(Math.abs(x-S)<.01&&Math.abs(_-C)<.01&&Math.abs(E-y)<.01){if(Math.abs(x+S)<.1&&Math.abs(_+C)<.1&&Math.abs(E+y)<.1&&Math.abs(p+b+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(p+1)/2,O=(b+1)/2,B=(v+1)/2,G=(x+S)/4,P=(_+C)/4,K=(E+y)/4;return z>O&&z>B?z<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(z),l=G/s,u=P/s):O>B?O<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(O),s=G/l,u=K/l):B<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(B),s=P/u,l=K/u),this.set(s,l,u,i),this}let F=Math.sqrt((y-E)*(y-E)+(_-C)*(_-C)+(S-x)*(S-x));return Math.abs(F)<.001&&(F=1),this.x=(y-E)/F,this.y=(_-C)/F,this.z=(S-x)/F,this.w=Math.acos((p+b+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this.z=Me(this.z,t.z,i.z),this.w=Me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this.z=Me(this.z,t,i),this.w=Me(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Py extends Fs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i);const l={width:t,height:i,depth:s.depth},u=new Hn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Jd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends Py{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class gx extends Hn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=On,this.minFilter=On,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class zy extends Hn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=On,this.minFilter=On,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nl{constructor(t=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ni.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ni.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ni.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Ni):Ni.fromBufferAttribute(u,h),Ni.applyMatrix4(t.matrixWorld),this.expandByPoint(Ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),mc.copy(s.boundingBox)),mc.applyMatrix4(t.matrixWorld),this.union(mc)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ni),Ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Go),gc.subVectors(this.max,Go),Mr.subVectors(t.a,Go),br.subVectors(t.b,Go),Er.subVectors(t.c,Go),Qa.subVectors(br,Mr),Ja.subVectors(Er,br),Ts.subVectors(Mr,Er);let i=[0,-Qa.z,Qa.y,0,-Ja.z,Ja.y,0,-Ts.z,Ts.y,Qa.z,0,-Qa.x,Ja.z,0,-Ja.x,Ts.z,0,-Ts.x,-Qa.y,Qa.x,0,-Ja.y,Ja.x,0,-Ts.y,Ts.x,0];return!yh(i,Mr,br,Er,gc)||(i=[1,0,0,0,1,0,0,0,1],!yh(i,Mr,br,Er,gc))?!1:(_c.crossVectors(Qa,Ja),i=[_c.x,_c.y,_c.z],yh(i,Mr,br,Er,gc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ma),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ma=[new $,new $,new $,new $,new $,new $,new $,new $],Ni=new $,mc=new nl,Mr=new $,br=new $,Er=new $,Qa=new $,Ja=new $,Ts=new $,Go=new $,gc=new $,_c=new $,As=new $;function yh(o,t,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){As.fromArray(o,u);const d=l.x*Math.abs(As.x)+l.y*Math.abs(As.y)+l.z*Math.abs(As.z),m=t.dot(As),p=i.dot(As),x=s.dot(As);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>d)return!1}return!0}const Fy=new nl,Vo=new $,Mh=new $;class eu{constructor(t=new $,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):Fy.setFromPoints(t).getCenter(s);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vo.subVectors(t,this.center);const i=Vo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Vo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vo.copy(t.center).add(Mh)),this.expandByPoint(Vo.copy(t.center).sub(Mh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ga=new $,bh=new $,xc=new $,$a=new $,Eh=new $,vc=new $,Th=new $;class $d{constructor(t=new $,i=new $(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ga)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ga.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ga.copy(this.origin).addScaledVector(this.direction,i),ga.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){bh.copy(t).add(i).multiplyScalar(.5),xc.copy(i).sub(t).normalize(),$a.copy(this.origin).sub(bh);const u=t.distanceTo(i)*.5,h=-this.direction.dot(xc),d=$a.dot(this.direction),m=-$a.dot(xc),p=$a.lengthSq(),x=Math.abs(1-h*h);let _,S,b,E;if(x>0)if(_=h*m-d,S=h*d-m,E=u*x,_>=0)if(S>=-E)if(S<=E){const C=1/x;_*=C,S*=C,b=_*(_+h*S+2*d)+S*(h*_+S+2*m)+p}else S=u,_=Math.max(0,-(h*S+d)),b=-_*_+S*(S+2*m)+p;else S=-u,_=Math.max(0,-(h*S+d)),b=-_*_+S*(S+2*m)+p;else S<=-E?(_=Math.max(0,-(-h*u+d)),S=_>0?-u:Math.min(Math.max(-u,-m),u),b=-_*_+S*(S+2*m)+p):S<=E?(_=0,S=Math.min(Math.max(-u,-m),u),b=S*(S+2*m)+p):(_=Math.max(0,-(h*u+d)),S=_>0?u:Math.min(Math.max(-u,-m),u),b=-_*_+S*(S+2*m)+p);else S=h>0?-u:u,_=Math.max(0,-(h*S+d)),b=-_*_+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(bh).addScaledVector(xc,S),b}intersectSphere(t,i){ga.subVectors(t.center,this.origin);const s=ga.dot(this.direction),l=ga.dot(ga)-s*s,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,h,d,m;const p=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(s=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(s=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),x>=0?(u=(t.min.y-S.y)*x,h=(t.max.y-S.y)*x):(u=(t.max.y-S.y)*x,h=(t.min.y-S.y)*x),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-S.z)*_,m=(t.max.z-S.z)*_):(d=(t.max.z-S.z)*_,m=(t.min.z-S.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ga)!==null}intersectTriangle(t,i,s,l,u){Eh.subVectors(i,t),vc.subVectors(s,t),Th.crossVectors(Eh,vc);let h=this.direction.dot(Th),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;$a.subVectors(this.origin,t);const m=d*this.direction.dot(vc.crossVectors($a,vc));if(m<0)return null;const p=d*this.direction.dot(Eh.cross($a));if(p<0||m+p>h)return null;const x=-d*$a.dot(Th);return x<0?null:this.at(x/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(t,i,s,l,u,h,d,m,p,x,_,S,b,E,C,y){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p,x,_,S,b,E,C,y)}set(t,i,s,l,u,h,d,m,p,x,_,S,b,E,C,y){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=u,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=x,v[10]=_,v[14]=S,v[3]=b,v[7]=E,v[11]=C,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Tr.setFromMatrixColumn(t,0).length(),u=1/Tr.setFromMatrixColumn(t,1).length(),h=1/Tr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),x=Math.cos(u),_=Math.sin(u);if(t.order==="XYZ"){const S=h*x,b=h*_,E=d*x,C=d*_;i[0]=m*x,i[4]=-m*_,i[8]=p,i[1]=b+E*p,i[5]=S-C*p,i[9]=-d*m,i[2]=C-S*p,i[6]=E+b*p,i[10]=h*m}else if(t.order==="YXZ"){const S=m*x,b=m*_,E=p*x,C=p*_;i[0]=S+C*d,i[4]=E*d-b,i[8]=h*p,i[1]=h*_,i[5]=h*x,i[9]=-d,i[2]=b*d-E,i[6]=C+S*d,i[10]=h*m}else if(t.order==="ZXY"){const S=m*x,b=m*_,E=p*x,C=p*_;i[0]=S-C*d,i[4]=-h*_,i[8]=E+b*d,i[1]=b+E*d,i[5]=h*x,i[9]=C-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const S=h*x,b=h*_,E=d*x,C=d*_;i[0]=m*x,i[4]=E*p-b,i[8]=S*p+C,i[1]=m*_,i[5]=C*p+S,i[9]=b*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const S=h*m,b=h*p,E=d*m,C=d*p;i[0]=m*x,i[4]=C-S*_,i[8]=E*_+b,i[1]=_,i[5]=h*x,i[9]=-d*x,i[2]=-p*x,i[6]=b*_+E,i[10]=S-C*_}else if(t.order==="XZY"){const S=h*m,b=h*p,E=d*m,C=d*p;i[0]=m*x,i[4]=-_,i[8]=p*x,i[1]=S*_+C,i[5]=h*x,i[9]=b*_-E,i[2]=E*_-b,i[6]=d*x,i[10]=C*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Iy,t,By)}lookAt(t,i,s){const l=this.elements;return li.subVectors(t,i),li.lengthSq()===0&&(li.z=1),li.normalize(),ts.crossVectors(s,li),ts.lengthSq()===0&&(Math.abs(s.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),ts.crossVectors(s,li)),ts.normalize(),Sc.crossVectors(li,ts),l[0]=ts.x,l[4]=Sc.x,l[8]=li.x,l[1]=ts.y,l[5]=Sc.y,l[9]=li.y,l[2]=ts.z,l[6]=Sc.z,l[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],x=s[1],_=s[5],S=s[9],b=s[13],E=s[2],C=s[6],y=s[10],v=s[14],F=s[3],z=s[7],O=s[11],B=s[15],G=l[0],P=l[4],K=l[8],R=l[12],D=l[1],k=l[5],Y=l[9],j=l[13],ot=l[2],lt=l[6],U=l[10],I=l[14],et=l[3],Et=l[7],yt=l[11],L=l[15];return u[0]=h*G+d*D+m*ot+p*et,u[4]=h*P+d*k+m*lt+p*Et,u[8]=h*K+d*Y+m*U+p*yt,u[12]=h*R+d*j+m*I+p*L,u[1]=x*G+_*D+S*ot+b*et,u[5]=x*P+_*k+S*lt+b*Et,u[9]=x*K+_*Y+S*U+b*yt,u[13]=x*R+_*j+S*I+b*L,u[2]=E*G+C*D+y*ot+v*et,u[6]=E*P+C*k+y*lt+v*Et,u[10]=E*K+C*Y+y*U+v*yt,u[14]=E*R+C*j+y*I+v*L,u[3]=F*G+z*D+O*ot+B*et,u[7]=F*P+z*k+O*lt+B*Et,u[11]=F*K+z*Y+O*U+B*yt,u[15]=F*R+z*j+O*I+B*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],x=t[2],_=t[6],S=t[10],b=t[14],E=t[3],C=t[7],y=t[11],v=t[15],F=m*b-p*S,z=d*b-p*_,O=d*S-m*_,B=h*b-p*x,G=h*S-m*x,P=h*_-d*x;return i*(C*F-y*z+v*O)-s*(E*F-y*B+v*G)+l*(E*z-C*B+v*P)-u*(E*O-C*G+y*P)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],x=t[8],_=t[9],S=t[10],b=t[11],E=t[12],C=t[13],y=t[14],v=t[15],F=_*y*p-C*S*p+C*m*b-d*y*b-_*m*v+d*S*v,z=E*S*p-x*y*p-E*m*b+h*y*b+x*m*v-h*S*v,O=x*C*p-E*_*p+E*d*b-h*C*b-x*d*v+h*_*v,B=E*_*m-x*C*m-E*d*S+h*C*S+x*d*y-h*_*y,G=i*F+s*z+l*O+u*B;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/G;return t[0]=F*P,t[1]=(C*S*u-_*y*u-C*l*b+s*y*b+_*l*v-s*S*v)*P,t[2]=(d*y*u-C*m*u+C*l*p-s*y*p-d*l*v+s*m*v)*P,t[3]=(_*m*u-d*S*u-_*l*p+s*S*p+d*l*b-s*m*b)*P,t[4]=z*P,t[5]=(x*y*u-E*S*u+E*l*b-i*y*b-x*l*v+i*S*v)*P,t[6]=(E*m*u-h*y*u-E*l*p+i*y*p+h*l*v-i*m*v)*P,t[7]=(h*S*u-x*m*u+x*l*p-i*S*p-h*l*b+i*m*b)*P,t[8]=O*P,t[9]=(E*_*u-x*C*u-E*s*b+i*C*b+x*s*v-i*_*v)*P,t[10]=(h*C*u-E*d*u+E*s*p-i*C*p-h*s*v+i*d*v)*P,t[11]=(x*d*u-h*_*u-x*s*p+i*_*p+h*s*b-i*d*b)*P,t[12]=B*P,t[13]=(x*C*l-E*_*l+E*s*S-i*C*S-x*s*y+i*_*y)*P,t[14]=(E*d*l-h*C*l-E*s*m+i*C*m+h*s*y-i*d*y)*P,t[15]=(h*_*l-x*d*l+x*s*m-i*_*m-h*s*S+i*d*S)*P,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=t.x,d=t.y,m=t.z,p=u*h,x=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,x*d+s,x*m-l*h,0,p*m-l*d,x*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,h){return this.set(1,s,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,x=h+h,_=d+d,S=u*p,b=u*x,E=u*_,C=h*x,y=h*_,v=d*_,F=m*p,z=m*x,O=m*_,B=s.x,G=s.y,P=s.z;return l[0]=(1-(C+v))*B,l[1]=(b+O)*B,l[2]=(E-z)*B,l[3]=0,l[4]=(b-O)*G,l[5]=(1-(S+v))*G,l[6]=(y+F)*G,l[7]=0,l[8]=(E+z)*P,l[9]=(y-F)*P,l[10]=(1-(S+C))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let u=Tr.set(l[0],l[1],l[2]).length();const h=Tr.set(l[4],l[5],l[6]).length(),d=Tr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),Ui.copy(this);const p=1/u,x=1/h,_=1/d;return Ui.elements[0]*=p,Ui.elements[1]*=p,Ui.elements[2]*=p,Ui.elements[4]*=x,Ui.elements[5]*=x,Ui.elements[6]*=x,Ui.elements[8]*=_,Ui.elements[9]*=_,Ui.elements[10]*=_,i.setFromRotationMatrix(Ui),s.x=u,s.y=h,s.z=d,this}makePerspective(t,i,s,l,u,h,d=Xi,m=!1){const p=this.elements,x=2*u/(i-t),_=2*u/(s-l),S=(i+t)/(i-t),b=(s+l)/(s-l);let E,C;if(m)E=u/(h-u),C=h*u/(h-u);else if(d===Xi)E=-(h+u)/(h-u),C=-2*h*u/(h-u);else if(d===Yc)E=-h/(h-u),C=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=b,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,u,h,d=Xi,m=!1){const p=this.elements,x=2/(i-t),_=2/(s-l),S=-(i+t)/(i-t),b=-(s+l)/(s-l);let E,C;if(m)E=1/(h-u),C=h/(h-u);else if(d===Xi)E=-2/(h-u),C=-(h+u)/(h-u);else if(d===Yc)E=-1/(h-u),C=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=b,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Tr=new $,Ui=new tn,Iy=new $(0,0,0),By=new $(1,1,1),ts=new $,Sc=new $,li=new $,s_=new tn,r_=new zs;class Zi{constructor(t=0,i=0,s=0,l=Zi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],x=l[9],_=l[2],S=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(Me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,b),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,b),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(Me(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,b),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Me(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,b),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(d,b));break;case"XZY":this._z=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-x,b),this._y=0);break;default:ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return s_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(s_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return r_.setFromEuler(this),this.setFromQuaternion(r_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zi.DEFAULT_ORDER="XYZ";class _x{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Hy=0;const o_=new $,Ar=new zs,_a=new tn,yc=new $,ko=new $,Gy=new $,Vy=new zs,l_=new $(1,0,0),c_=new $(0,1,0),u_=new $(0,0,1),f_={type:"added"},ky={type:"removed"},Rr={type:"childadded",child:null},Ah={type:"childremoved",child:null};class xn extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=el(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const t=new $,i=new Zi,s=new zs,l=new $(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new xe}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _x,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ar.setFromAxisAngle(t,i),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(t,i){return Ar.setFromAxisAngle(t,i),this.quaternion.premultiply(Ar),this}rotateX(t){return this.rotateOnAxis(l_,t)}rotateY(t){return this.rotateOnAxis(c_,t)}rotateZ(t){return this.rotateOnAxis(u_,t)}translateOnAxis(t,i){return o_.copy(t).applyQuaternion(this.quaternion),this.position.add(o_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(l_,t)}translateY(t){return this.translateOnAxis(c_,t)}translateZ(t){return this.translateOnAxis(u_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_a.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?yc.copy(t):yc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_a.lookAt(ko,yc,this.up):_a.lookAt(yc,ko,this.up),this.quaternion.setFromRotationMatrix(_a),l&&(_a.extractRotation(l.matrixWorld),Ar.setFromRotationMatrix(_a),this.quaternion.premultiply(Ar.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(f_),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(ky),Ah.child=t,this.dispatchEvent(Ah),Ah.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_a.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_a.multiply(t.parent.matrixWorld)),t.applyMatrix4(_a),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(f_),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,t,Gy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,Vy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const _=m[p];u(t.shapes,_)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),x=h(t.images),_=h(t.shapes),S=h(t.skeletons),b=h(t.animations),E=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),_.length>0&&(s.shapes=_),S.length>0&&(s.skeletons=S),b.length>0&&(s.animations=b),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const m=[];for(const p in d){const x=d[p];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}xn.DEFAULT_UP=new $(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new $,xa=new $,Rh=new $,va=new $,Cr=new $,wr=new $,h_=new $,Ch=new $,wh=new $,Dh=new $,Nh=new an,Uh=new an,Lh=new an;class bi{constructor(t=new $,i=new $,s=new $){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Li.subVectors(t,i),l.cross(Li);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){Li.subVectors(l,i),xa.subVectors(s,i),Rh.subVectors(t,i);const h=Li.dot(Li),d=Li.dot(xa),m=Li.dot(Rh),p=xa.dot(xa),x=xa.dot(Rh),_=h*p-d*d;if(_===0)return u.set(0,0,0),null;const S=1/_,b=(p*m-d*x)*S,E=(h*x-d*m)*S;return u.set(1-b-E,E,b)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,va)===null?!1:va.x>=0&&va.y>=0&&va.x+va.y<=1}static getInterpolation(t,i,s,l,u,h,d,m){return this.getBarycoord(t,i,s,l,va)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,va.x),m.addScaledVector(h,va.y),m.addScaledVector(d,va.z),m)}static getInterpolatedAttribute(t,i,s,l,u,h){return Nh.setScalar(0),Uh.setScalar(0),Lh.setScalar(0),Nh.fromBufferAttribute(t,i),Uh.fromBufferAttribute(t,s),Lh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Nh,u.x),h.addScaledVector(Uh,u.y),h.addScaledVector(Lh,u.z),h}static isFrontFacing(t,i,s,l){return Li.subVectors(s,i),xa.subVectors(t,i),Li.cross(xa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),xa.subVectors(this.a,this.b),Li.cross(xa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return bi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return bi.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return bi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let h,d;Cr.subVectors(l,s),wr.subVectors(u,s),Ch.subVectors(t,s);const m=Cr.dot(Ch),p=wr.dot(Ch);if(m<=0&&p<=0)return i.copy(s);wh.subVectors(t,l);const x=Cr.dot(wh),_=wr.dot(wh);if(x>=0&&_<=x)return i.copy(l);const S=m*_-x*p;if(S<=0&&m>=0&&x<=0)return h=m/(m-x),i.copy(s).addScaledVector(Cr,h);Dh.subVectors(t,u);const b=Cr.dot(Dh),E=wr.dot(Dh);if(E>=0&&b<=E)return i.copy(u);const C=b*p-m*E;if(C<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(wr,d);const y=x*E-b*_;if(y<=0&&_-x>=0&&b-E>=0)return h_.subVectors(u,l),d=(_-x)/(_-x+(b-E)),i.copy(l).addScaledVector(h_,d);const v=1/(y+C+S);return h=C*v,d=S*v,i.copy(s).addScaledVector(Cr,h).addScaledVector(wr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const xx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},Mc={h:0,s:0,l:0};function Oh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class De{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Mi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=we.workingColorSpace){return this.r=t,this.g=i,this.b=s,we.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=we.workingColorSpace){if(t=wy(t,1),i=Me(i,0,1),s=Me(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=Oh(h,u,t+1/3),this.g=Oh(h,u,t),this.b=Oh(h,u,t-1/3)}return we.colorSpaceToWorking(this,l),this}setStyle(t,i=Mi){function s(u){u!==void 0&&parseFloat(u)<1&&ue("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:ue("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);ue("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Mi){const s=xx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ue("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ma(t.r),this.g=Ma(t.g),this.b=Ma(t.b),this}copyLinearToSRGB(t){return this.r=Fr(t.r),this.g=Fr(t.g),this.b=Fr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mi){return we.workingToColorSpace(In.copy(this),t),Math.round(Me(In.r*255,0,255))*65536+Math.round(Me(In.g*255,0,255))*256+Math.round(Me(In.b*255,0,255))}getHexString(t=Mi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=we.workingColorSpace){we.workingToColorSpace(In.copy(this),i);const s=In.r,l=In.g,u=In.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const x=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=x<=.5?_/(h+d):_/(2-h-d),h){case s:m=(l-u)/_+(l<u?6:0);break;case l:m=(u-s)/_+2;break;case u:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=x,t}getRGB(t,i=we.workingColorSpace){return we.workingToColorSpace(In.copy(this),i),t.r=In.r,t.g=In.g,t.b=In.b,t}getStyle(t=Mi){we.workingToColorSpace(In.copy(this),t);const i=In.r,s=In.g,l=In.b;return t!==Mi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(es),this.setHSL(es.h+t,es.s+i,es.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(es),t.getHSL(Mc);const s=gh(es.h,Mc.h,i),l=gh(es.s,Mc.s,i),u=gh(es.l,Mc.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new De;De.NAMES=xx;let Xy=0;class kr extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=el(),this.name="",this.type="Material",this.blending=zr,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zh,this.blendDst=Kh,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ue(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ue(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==zr&&(s.blending=this.blending),this.side!==rs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Zh&&(s.blendSrc=this.blendSrc),this.blendDst!==Kh&&(s.blendDst=this.blendDst),this.blendEquation!==Ns&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ir&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class tp extends kr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=J_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new $,bc=new de;let jy=0;class qi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Jg,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)bc.fromBufferAttribute(this,i),bc.applyMatrix3(t),this.setXY(i,bc.x,bc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ho(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Qn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ho(i,this.array)),i}setX(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ho(i,this.array)),i}setY(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ho(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ho(i,this.array)),i}setW(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array),l=Qn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array),l=Qn(l,this.array),u=Qn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jg&&(t.usage=this.usage),t}}class vx extends qi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Sx extends qi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Xn extends qi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let Wy=0;const yi=new tn,Ph=new xn,Dr=new $,ci=new nl,Xo=new nl,Mn=new $;class Ei extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wy++}),this.uuid=el(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mx(t)?Sx:vx)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new xe().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,i,s){return yi.makeTranslation(t,i,s),this.applyMatrix4(yi),this}scale(t,i,s){return yi.makeScale(t,i,s),this.applyMatrix4(yi),this}lookAt(t){return Ph.lookAt(t),Ph.updateMatrix(),this.applyMatrix4(Ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Xn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ci.setFromBufferAttribute(u),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const s=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Xo.setFromBufferAttribute(d),this.morphTargetsRelative?(Mn.addVectors(ci.min,Xo.min),ci.expandByPoint(Mn),Mn.addVectors(ci.max,Xo.max),ci.expandByPoint(Mn)):(ci.expandByPoint(Xo.min),ci.expandByPoint(Xo.max))}ci.getCenter(s);let l=0;for(let u=0,h=t.count;u<h;u++)Mn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(Mn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,x=d.count;p<x;p++)Mn.fromBufferAttribute(d,p),m&&(Dr.fromBufferAttribute(t,p),Mn.add(Dr)),l=Math.max(l,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let K=0;K<s.count;K++)d[K]=new $,m[K]=new $;const p=new $,x=new $,_=new $,S=new de,b=new de,E=new de,C=new $,y=new $;function v(K,R,D){p.fromBufferAttribute(s,K),x.fromBufferAttribute(s,R),_.fromBufferAttribute(s,D),S.fromBufferAttribute(u,K),b.fromBufferAttribute(u,R),E.fromBufferAttribute(u,D),x.sub(p),_.sub(p),b.sub(S),E.sub(S);const k=1/(b.x*E.y-E.x*b.y);isFinite(k)&&(C.copy(x).multiplyScalar(E.y).addScaledVector(_,-b.y).multiplyScalar(k),y.copy(_).multiplyScalar(b.x).addScaledVector(x,-E.x).multiplyScalar(k),d[K].add(C),d[R].add(C),d[D].add(C),m[K].add(y),m[R].add(y),m[D].add(y))}let F=this.groups;F.length===0&&(F=[{start:0,count:t.count}]);for(let K=0,R=F.length;K<R;++K){const D=F[K],k=D.start,Y=D.count;for(let j=k,ot=k+Y;j<ot;j+=3)v(t.getX(j+0),t.getX(j+1),t.getX(j+2))}const z=new $,O=new $,B=new $,G=new $;function P(K){B.fromBufferAttribute(l,K),G.copy(B);const R=d[K];z.copy(R),z.sub(B.multiplyScalar(B.dot(R))).normalize(),O.crossVectors(G,R);const k=O.dot(m[K])<0?-1:1;h.setXYZW(K,z.x,z.y,z.z,k)}for(let K=0,R=F.length;K<R;++K){const D=F[K],k=D.start,Y=D.count;for(let j=k,ot=k+Y;j<ot;j+=3)P(t.getX(j+0)),P(t.getX(j+1)),P(t.getX(j+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new qi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,b=s.count;S<b;S++)s.setXYZ(S,0,0,0);const l=new $,u=new $,h=new $,d=new $,m=new $,p=new $,x=new $,_=new $;if(t)for(let S=0,b=t.count;S<b;S+=3){const E=t.getX(S+0),C=t.getX(S+1),y=t.getX(S+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,y),x.subVectors(h,u),_.subVectors(l,u),x.cross(_),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,y),d.add(x),m.add(x),p.add(x),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,b=i.count;S<b;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),x.subVectors(h,u),_.subVectors(l,u),x.cross(_),s.setXYZ(S+0,x.x,x.y,x.z),s.setXYZ(S+1,x.x,x.y,x.z),s.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Mn.fromBufferAttribute(t,i),Mn.normalize(),t.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(d,m){const p=d.array,x=d.itemSize,_=d.normalized,S=new p.constructor(m.length*x);let b=0,E=0;for(let C=0,y=m.length;C<y;C++){d.isInterleavedBufferAttribute?b=m[C]*d.data.stride+d.offset:b=m[C]*x;for(let v=0;v<x;v++)S[E++]=p[b++]}return new qi(S,x,_)}if(this.index===null)return ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ei,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let x=0,_=p.length;x<_;x++){const S=p[x],b=t(S,s);m.push(b)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let _=0,S=p.length;_<S;_++){const b=p[_];x.push(b.toJSON(t.data))}x.length>0&&(l[m]=x,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const u=t.morphAttributes;for(const p in u){const x=[],_=u[p];for(let S=0,b=_.length;S<b;S++)x.push(_[S].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,x=h.length;p<x;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const d_=new tn,Rs=new $d,Ec=new eu,p_=new $,Tc=new $,Ac=new $,Rc=new $,zh=new $,Cc=new $,m_=new $,wc=new $;class Te extends xn{constructor(t=new Ei,i=new tp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){Cc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const x=d[m],_=u[m];x!==0&&(zh.fromBufferAttribute(_,t),h?Cc.addScaledVector(zh,x):Cc.addScaledVector(zh.sub(i),x))}i.add(Cc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ec.copy(s.boundingSphere),Ec.applyMatrix4(u),Rs.copy(t.ray).recast(t.near),!(Ec.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Ec,p_)===null||Rs.origin.distanceToSquared(p_)>(t.far-t.near)**2))&&(d_.copy(u).invert(),Rs.copy(t.ray).applyMatrix4(d_),!(s.boundingBox!==null&&Rs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Rs)))}_computeIntersections(t,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,x=u.attributes.uv1,_=u.attributes.normal,S=u.groups,b=u.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,C=S.length;E<C;E++){const y=S[E],v=h[y.materialIndex],F=Math.max(y.start,b.start),z=Math.min(d.count,Math.min(y.start+y.count,b.start+b.count));for(let O=F,B=z;O<B;O+=3){const G=d.getX(O),P=d.getX(O+1),K=d.getX(O+2);l=Dc(this,v,t,s,p,x,_,G,P,K),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,b.start),C=Math.min(d.count,b.start+b.count);for(let y=E,v=C;y<v;y+=3){const F=d.getX(y),z=d.getX(y+1),O=d.getX(y+2);l=Dc(this,h,t,s,p,x,_,F,z,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,C=S.length;E<C;E++){const y=S[E],v=h[y.materialIndex],F=Math.max(y.start,b.start),z=Math.min(m.count,Math.min(y.start+y.count,b.start+b.count));for(let O=F,B=z;O<B;O+=3){const G=O,P=O+1,K=O+2;l=Dc(this,v,t,s,p,x,_,G,P,K),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,b.start),C=Math.min(m.count,b.start+b.count);for(let y=E,v=C;y<v;y+=3){const F=y,z=y+1,O=y+2;l=Dc(this,h,t,s,p,x,_,F,z,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function qy(o,t,i,s,l,u,h,d){let m;if(t.side===ti?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,t.side===rs,d),m===null)return null;wc.copy(d),wc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(wc);return p<i.near||p>i.far?null:{distance:p,point:wc.clone(),object:o}}function Dc(o,t,i,s,l,u,h,d,m,p){o.getVertexPosition(d,Tc),o.getVertexPosition(m,Ac),o.getVertexPosition(p,Rc);const x=qy(o,t,i,s,Tc,Ac,Rc,m_);if(x){const _=new $;bi.getBarycoord(m_,Tc,Ac,Rc,_),l&&(x.uv=bi.getInterpolatedAttribute(l,d,m,p,_,new de)),u&&(x.uv1=bi.getInterpolatedAttribute(u,d,m,p,_,new de)),h&&(x.normal=bi.getInterpolatedAttribute(h,d,m,p,_,new $),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new $,materialIndex:0};bi.getNormal(Tc,Ac,Rc,S.normal),x.face=S,x.barycoord=_}return x}class _n extends Ei{constructor(t=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],x=[],_=[];let S=0,b=0;E("z","y","x",-1,-1,s,i,t,h,u,0),E("z","y","x",1,-1,s,i,-t,h,u,1),E("x","z","y",1,1,t,s,i,l,h,2),E("x","z","y",1,-1,t,s,-i,l,h,3),E("x","y","z",1,-1,t,i,s,l,u,4),E("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new Xn(p,3)),this.setAttribute("normal",new Xn(x,3)),this.setAttribute("uv",new Xn(_,2));function E(C,y,v,F,z,O,B,G,P,K,R){const D=O/P,k=B/K,Y=O/2,j=B/2,ot=G/2,lt=P+1,U=K+1;let I=0,et=0;const Et=new $;for(let yt=0;yt<U;yt++){const L=yt*k-j;for(let tt=0;tt<lt;tt++){const dt=tt*D-Y;Et[C]=dt*F,Et[y]=L*z,Et[v]=ot,p.push(Et.x,Et.y,Et.z),Et[C]=0,Et[y]=0,Et[v]=G>0?1:-1,x.push(Et.x,Et.y,Et.z),_.push(tt/P),_.push(1-yt/K),I+=1}}for(let yt=0;yt<K;yt++)for(let L=0;L<P;L++){const tt=S+L+lt*yt,dt=S+L+lt*(yt+1),vt=S+(L+1)+lt*(yt+1),Bt=S+(L+1)+lt*yt;m.push(tt,dt,Bt),m.push(dt,vt,Bt),et+=6}d.addGroup(b,et,R),b+=et,S+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Vn(o){const t={};for(let i=0;i<o.length;i++){const s=Vr(o[i]);for(const l in s)t[l]=s[l]}return t}function Yy(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function yx(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const Zy={clone:Vr,merge:Vn};var Ky=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends kr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ky,this.fragmentShader=Qy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vr(t.uniforms),this.uniformsGroups=Yy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Mx extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ns=new $,g_=new de,__=new de;class $n extends Mx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Kc*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ko*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Kc*2*Math.atan(Math.tan(Ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-t/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ns.x,ns.y).multiplyScalar(-t/ns.z)}getViewSize(t,i){return this.getViewBounds(t,g_,__),i.subVectors(__,g_)}setViewOffset(t,i,s,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Ko*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Nr=-90,Ur=1;class Jy extends xn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new $n(Nr,Ur,t,i);l.layers=this.layers,this.add(l);const u=new $n(Nr,Ur,t,i);u.layers=this.layers,this.add(u);const h=new $n(Nr,Ur,t,i);h.layers=this.layers,this.add(h);const d=new $n(Nr,Ur,t,i);d.layers=this.layers,this.add(d);const m=new $n(Nr,Ur,t,i);m.layers=this.layers,this.add(m);const p=new $n(Nr,Ur,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===Xi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Yc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,x]=this.children,_=t.getRenderTarget(),S=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),t.render(i,x),t.setRenderTarget(_,S,b),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class bx extends Hn{constructor(t=[],i=Ps,s,l,u,h,d,m,p,x){super(t,i,s,l,u,h,d,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ex extends Wi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new bx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new _n(5,5,5),u=new Ki({name:"CubemapFromEquirect",uniforms:Vr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ti,blending:ya});u.uniforms.tEquirect.value=i;const h=new Te(l,u),d=i.minFilter;return i.minFilter===Ls&&(i.minFilter=Bn),new Jy(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(u)}}class Nc extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $y={type:"move"};class Fh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const C of t.hand.values()){const y=i.getJointPose(C,s),v=this._getHandJoint(p,C);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const x=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=x.position.distanceTo(_.position),b=.02,E=.005;p.inputState.pinching&&S>b+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=b-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent($y)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Nc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class tM extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class eM extends Hn{constructor(t=null,i=1,s=1,l,u,h,d,m,p=On,x=On,_,S){super(null,h,d,m,p,x,l,u,_,S),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ih=new $,nM=new $,iM=new xe;class is{constructor(t=new $(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Ih.subVectors(s,i).cross(nM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Ih),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||iM.getNormalMatrix(t),l=this.coplanarPoint(Ih).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cs=new eu,aM=new de(.5,.5),Uc=new $;class ep{constructor(t=new is,i=new is,s=new is,l=new is,u=new is,h=new is){this.planes=[t,i,s,l,u,h]}set(t,i,s,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Xi,s=!1){const l=this.planes,u=t.elements,h=u[0],d=u[1],m=u[2],p=u[3],x=u[4],_=u[5],S=u[6],b=u[7],E=u[8],C=u[9],y=u[10],v=u[11],F=u[12],z=u[13],O=u[14],B=u[15];if(l[0].setComponents(p-h,b-x,v-E,B-F).normalize(),l[1].setComponents(p+h,b+x,v+E,B+F).normalize(),l[2].setComponents(p+d,b+_,v+C,B+z).normalize(),l[3].setComponents(p-d,b-_,v-C,B-z).normalize(),s)l[4].setComponents(m,S,y,O).normalize(),l[5].setComponents(p-m,b-S,v-y,B-O).normalize();else if(l[4].setComponents(p-m,b-S,v-y,B-O).normalize(),i===Xi)l[5].setComponents(p+m,b+S,v+y,B+O).normalize();else if(i===Yc)l[5].setComponents(m,S,y,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Cs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(t){Cs.center.set(0,0,0);const i=aM.distanceTo(t.center);return Cs.radius=.7071067811865476+i,Cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Uc.x=l.normal.x>0?t.max.x:t.min.x,Uc.y=l.normal.y>0?t.max.y:t.min.y,Uc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Uc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tx extends kr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Qc=new $,Jc=new $,x_=new tn,jo=new $d,Lc=new eu,Bh=new $,v_=new $;class sM extends xn{constructor(t=new Ei,i=new Tx){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)Qc.fromBufferAttribute(i,l-1),Jc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Qc.distanceTo(Jc);t.setAttribute("lineDistance",new Xn(s,1))}else ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Lc.copy(s.boundingSphere),Lc.applyMatrix4(l),Lc.radius+=u,t.ray.intersectsSphere(Lc)===!1)return;x_.copy(l).invert(),jo.copy(t.ray).applyMatrix4(x_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,x=s.index,S=s.attributes.position;if(x!==null){const b=Math.max(0,h.start),E=Math.min(x.count,h.start+h.count);for(let C=b,y=E-1;C<y;C+=p){const v=x.getX(C),F=x.getX(C+1),z=Oc(this,t,jo,m,v,F,C);z&&i.push(z)}if(this.isLineLoop){const C=x.getX(E-1),y=x.getX(b),v=Oc(this,t,jo,m,C,y,E-1);v&&i.push(v)}}else{const b=Math.max(0,h.start),E=Math.min(S.count,h.start+h.count);for(let C=b,y=E-1;C<y;C+=p){const v=Oc(this,t,jo,m,C,C+1,C);v&&i.push(v)}if(this.isLineLoop){const C=Oc(this,t,jo,m,E-1,b,E-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Oc(o,t,i,s,l,u,h){const d=o.geometry.attributes.position;if(Qc.fromBufferAttribute(d,l),Jc.fromBufferAttribute(d,u),i.distanceSqToSegment(Qc,Jc,Bh,v_)>s)return;Bh.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(Bh);if(!(p<t.near||p>t.far))return{distance:p,point:v_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const S_=new $,y_=new $;class rM extends sM{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,u=i.count;l<u;l+=2)S_.fromBufferAttribute(i,l),y_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+S_.distanceTo(y_);t.setAttribute("lineDistance",new Xn(s,1))}else ue("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class oM extends Hn{constructor(t,i,s,l,u,h,d,m,p){super(t,i,s,l,u,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tl extends Hn{constructor(t,i,s=Yi,l,u,h,d=On,m=On,p,x=Ea,_=1){if(x!==Ea&&x!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:_};super(S,l,u,h,d,m,x,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Jd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class lM extends tl{constructor(t,i=Yi,s=Ps,l,u,h=On,d=On,m,p=Ea){const x={width:t,height:t,depth:1},_=[x,x,x,x,x,x];super(t,t,i,s,l,u,h,d,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ax extends Hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class $c extends Ei{constructor(t=1,i=1,s=1,l=32,u=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:u,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),u=Math.floor(u);const x=[],_=[],S=[],b=[];let E=0;const C=[],y=s/2;let v=0;F(),h===!1&&(t>0&&z(!0),i>0&&z(!1)),this.setIndex(x),this.setAttribute("position",new Xn(_,3)),this.setAttribute("normal",new Xn(S,3)),this.setAttribute("uv",new Xn(b,2));function F(){const O=new $,B=new $;let G=0;const P=(i-t)/s;for(let K=0;K<=u;K++){const R=[],D=K/u,k=D*(i-t)+t;for(let Y=0;Y<=l;Y++){const j=Y/l,ot=j*m+d,lt=Math.sin(ot),U=Math.cos(ot);B.x=k*lt,B.y=-D*s+y,B.z=k*U,_.push(B.x,B.y,B.z),O.set(lt,P,U).normalize(),S.push(O.x,O.y,O.z),b.push(j,1-D),R.push(E++)}C.push(R)}for(let K=0;K<l;K++)for(let R=0;R<u;R++){const D=C[R][K],k=C[R+1][K],Y=C[R+1][K+1],j=C[R][K+1];(t>0||R!==0)&&(x.push(D,k,j),G+=3),(i>0||R!==u-1)&&(x.push(k,Y,j),G+=3)}p.addGroup(v,G,0),v+=G}function z(O){const B=E,G=new de,P=new $;let K=0;const R=O===!0?t:i,D=O===!0?1:-1;for(let Y=1;Y<=l;Y++)_.push(0,y*D,0),S.push(0,D,0),b.push(.5,.5),E++;const k=E;for(let Y=0;Y<=l;Y++){const ot=Y/l*m+d,lt=Math.cos(ot),U=Math.sin(ot);P.x=R*U,P.y=y*D,P.z=R*lt,_.push(P.x,P.y,P.z),S.push(0,D,0),G.x=lt*.5+.5,G.y=U*.5*D+.5,b.push(G.x,G.y),E++}for(let Y=0;Y<l;Y++){const j=B+Y,ot=k+Y;O===!0?x.push(ot,ot+1,j):x.push(ot+1,ot,j),K+=3}p.addGroup(v,K,O===!0?1:2),v+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $c(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const Pc=new $,zc=new $,Hh=new $,Fc=new bi;class cM extends Ei{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),u=Math.cos(Ko*i),h=t.getIndex(),d=t.getAttribute("position"),m=h?h.count:d.count,p=[0,0,0],x=["a","b","c"],_=new Array(3),S={},b=[];for(let E=0;E<m;E+=3){h?(p[0]=h.getX(E),p[1]=h.getX(E+1),p[2]=h.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:C,b:y,c:v}=Fc;if(C.fromBufferAttribute(d,p[0]),y.fromBufferAttribute(d,p[1]),v.fromBufferAttribute(d,p[2]),Fc.getNormal(Hh),_[0]=`${Math.round(C.x*l)},${Math.round(C.y*l)},${Math.round(C.z*l)}`,_[1]=`${Math.round(y.x*l)},${Math.round(y.y*l)},${Math.round(y.z*l)}`,_[2]=`${Math.round(v.x*l)},${Math.round(v.y*l)},${Math.round(v.z*l)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let F=0;F<3;F++){const z=(F+1)%3,O=_[F],B=_[z],G=Fc[x[F]],P=Fc[x[z]],K=`${O}_${B}`,R=`${B}_${O}`;R in S&&S[R]?(Hh.dot(S[R].normal)<=u&&(b.push(G.x,G.y,G.z),b.push(P.x,P.y,P.z)),S[R]=null):K in S||(S[K]={index0:p[F],index1:p[z],normal:Hh.clone()})}}for(const E in S)if(S[E]){const{index0:C,index1:y}=S[E];Pc.fromBufferAttribute(d,C),zc.fromBufferAttribute(d,y),b.push(Pc.x,Pc.y,Pc.z),b.push(zc.x,zc.y,zc.z)}this.setAttribute("position",new Xn(b,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class kn extends Ei{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,x=m+1,_=t/d,S=i/m,b=[],E=[],C=[],y=[];for(let v=0;v<x;v++){const F=v*S-h;for(let z=0;z<p;z++){const O=z*_-u;E.push(O,-F,0),C.push(0,0,1),y.push(z/d),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let F=0;F<d;F++){const z=F+p*v,O=F+p*(v+1),B=F+1+p*(v+1),G=F+1+p*v;b.push(z,O,G),b.push(O,B,G)}this.setIndex(b),this.setAttribute("position",new Xn(E,3)),this.setAttribute("normal",new Xn(C,3)),this.setAttribute("uv",new Xn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kn(t.width,t.height,t.widthSegments,t.heightSegments)}}class uM extends Ki{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class dn extends kr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=px,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class fM extends kr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class hM extends kr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class nu extends xn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new De(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Gh=new tn,M_=new $,b_=new $;class np{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ep,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;M_.setFromMatrixPosition(t.matrixWorld),i.position.copy(M_),b_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(b_),i.updateMatrixWorld(),Gh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Gh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class dM extends np{constructor(){super(new $n(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const i=this.camera,s=Kc*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,u=t.distance||i.far;(s!==i.fov||l!==i.aspect||u!==i.far)&&(i.fov=s,i.aspect=l,i.far=u,i.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class pM extends nu{constructor(t,i,s=0,l=Math.PI/3,u=0,h=2){super(t,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.distance=s,this.angle=l,this.penumbra=u,this.decay=h,this.map=null,this.shadow=new dM}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(t).uuid),i.object.shadow=this.shadow.toJSON(),i}}class mM extends np{constructor(){super(new $n(90,1,.5,500)),this.isPointLightShadow=!0}}class gM extends nu{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new mM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class ip extends Mx{constructor(t=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=x*this.view.offsetY,m=d-x*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class _M extends np{constructor(){super(new ip(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xM extends nu{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new _M}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class vM extends nu{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class SM extends $n{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class E_{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(Me(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class yM extends Fs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){ue("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function T_(o,t,i,s){const l=MM(s);switch(i){case fx:return o*t;case dx:return o*t/l.components*l.byteLength;case qd:return o*t/l.components*l.byteLength;case Hr:return o*t*2/l.components*l.byteLength;case Yd:return o*t*2/l.components*l.byteLength;case hx:return o*t*3/l.components*l.byteLength;case Oi:return o*t*4/l.components*l.byteLength;case Zd:return o*t*4/l.components*l.byteLength;case Vc:case kc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Xc:case jc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case cd:case fd:return Math.max(o,16)*Math.max(t,8)/4;case ld:case ud:return Math.max(o,8)*Math.max(t,8)/2;case hd:case dd:case md:case gd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case pd:case _d:case xd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case vd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Sd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case yd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Md:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case bd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Ed:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Td:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Ad:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Rd:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Cd:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case wd:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Dd:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Nd:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Ud:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Ld:case Od:case Pd:return Math.ceil(o/4)*Math.ceil(t/4)*16;case zd:case Fd:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Id:case Bd:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function MM(o){switch(o){case ui:case ox:return{byteLength:1,components:1};case Qo:case lx:case ba:return{byteLength:2,components:1};case jd:case Wd:return{byteLength:2,components:4};case Yi:case Xd:case ki:return{byteLength:4,components:1};case cx:case ux:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kd}}));typeof window<"u"&&(window.__THREE__?ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kd);function Rx(){let o=null,t=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function bM(o){const t=new WeakMap;function i(d,m){const p=d.array,x=d.usage,_=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,x),d.onUploadCallback();let b;if(p instanceof Float32Array)b=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)b=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?b=o.HALF_FLOAT:b=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=o.SHORT;else if(p instanceof Uint32Array)b=o.UNSIGNED_INT;else if(p instanceof Int32Array)b=o.INT;else if(p instanceof Int8Array)b=o.BYTE;else if(p instanceof Uint8Array)b=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const x=m.array,_=m.updateRanges;if(o.bindBuffer(p,d),_.length===0)o.bufferSubData(p,0,x);else{_.sort((b,E)=>b.start-E.start);let S=0;for(let b=1;b<_.length;b++){const E=_[S],C=_[b];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++S,_[S]=C)}_.length=S+1;for(let b=0,E=_.length;b<E;b++){const C=_[b];o.bufferSubData(p,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=t.get(d);(!x||x.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var EM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,TM=`#ifdef USE_ALPHAHASH
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
#endif`,AM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DM=`#ifdef USE_AOMAP
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
#endif`,NM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,UM=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,LM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,OM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,FM=`#ifdef USE_IRIDESCENCE
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
#endif`,IM=`#ifdef USE_BUMPMAP
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
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,XM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,WM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,qM=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,YM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ZM=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,KM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$M=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tb="gl_FragColor = linearToOutputTexel( gl_FragColor );",eb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ib=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ab=`#ifdef USE_ENVMAP
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
#endif`,sb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ob=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ub=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fb=`#ifdef USE_GRADIENTMAP
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
}`,hb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,db=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mb=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,gb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,_b=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yb=`PhysicalMaterial material;
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
#endif`,Mb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		float v = 0.5 / ( gv + gl );
		return v;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
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
}`,bb=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Eb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ab=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Db=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ub=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lb=`#if defined( USE_POINTS_UV )
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
#endif`,Ob=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ib=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bb=`#ifdef USE_MORPHTARGETS
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
#endif`,Hb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wb=`#ifdef USE_NORMALMAP
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
#endif`,qb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$b=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
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
			shadowCoord.z += shadowBias;
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
			shadowCoord.z += shadowBias;
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,rE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,oE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,lE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,cE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uE=`#ifdef USE_SKINNING
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
#endif`,fE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hE=`#ifdef USE_SKINNING
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
#endif`,dE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_E=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xE=`#ifdef USE_TRANSMISSION
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
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ME=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,EE=`uniform sampler2D t2D;
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
}`,TE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wE=`#include <common>
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
}`,DE=`#if DEPTH_PACKING == 3200
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
}`,NE=`#define DISTANCE
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
}`,UE=`#define DISTANCE
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
void main () {
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
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PE=`uniform float scale;
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
}`,zE=`uniform vec3 diffuse;
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
}`,FE=`#include <common>
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
}`,IE=`uniform vec3 diffuse;
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
}`,BE=`#define LAMBERT
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
}`,HE=`#define LAMBERT
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,GE=`#define MATCAP
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
}`,VE=`#define MATCAP
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
}`,kE=`#define NORMAL
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
}`,XE=`#define NORMAL
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
}`,jE=`#define PHONG
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
}`,WE=`#define PHONG
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,qE=`#define STANDARD
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
}`,YE=`#define STANDARD
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
}`,ZE=`#define TOON
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
}`,KE=`#define TOON
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
}`,QE=`uniform float size;
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
}`,JE=`uniform vec3 diffuse;
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
}`,$E=`#include <common>
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
}`,tT=`uniform vec3 color;
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
}`,eT=`uniform float rotation;
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
}`,nT=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:EM,alphahash_pars_fragment:TM,alphamap_fragment:AM,alphamap_pars_fragment:RM,alphatest_fragment:CM,alphatest_pars_fragment:wM,aomap_fragment:DM,aomap_pars_fragment:NM,batching_pars_vertex:UM,batching_vertex:LM,begin_vertex:OM,beginnormal_vertex:PM,bsdfs:zM,iridescence_fragment:FM,bumpmap_pars_fragment:IM,clipping_planes_fragment:BM,clipping_planes_pars_fragment:HM,clipping_planes_pars_vertex:GM,clipping_planes_vertex:VM,color_fragment:kM,color_pars_fragment:XM,color_pars_vertex:jM,color_vertex:WM,common:qM,cube_uv_reflection_fragment:YM,defaultnormal_vertex:ZM,displacementmap_pars_vertex:KM,displacementmap_vertex:QM,emissivemap_fragment:JM,emissivemap_pars_fragment:$M,colorspace_fragment:tb,colorspace_pars_fragment:eb,envmap_fragment:nb,envmap_common_pars_fragment:ib,envmap_pars_fragment:ab,envmap_pars_vertex:sb,envmap_physical_pars_fragment:gb,envmap_vertex:rb,fog_vertex:ob,fog_pars_vertex:lb,fog_fragment:cb,fog_pars_fragment:ub,gradientmap_pars_fragment:fb,lightmap_pars_fragment:hb,lights_lambert_fragment:db,lights_lambert_pars_fragment:pb,lights_pars_begin:mb,lights_toon_fragment:_b,lights_toon_pars_fragment:xb,lights_phong_fragment:vb,lights_phong_pars_fragment:Sb,lights_physical_fragment:yb,lights_physical_pars_fragment:Mb,lights_fragment_begin:bb,lights_fragment_maps:Eb,lights_fragment_end:Tb,logdepthbuf_fragment:Ab,logdepthbuf_pars_fragment:Rb,logdepthbuf_pars_vertex:Cb,logdepthbuf_vertex:wb,map_fragment:Db,map_pars_fragment:Nb,map_particle_fragment:Ub,map_particle_pars_fragment:Lb,metalnessmap_fragment:Ob,metalnessmap_pars_fragment:Pb,morphinstance_vertex:zb,morphcolor_vertex:Fb,morphnormal_vertex:Ib,morphtarget_pars_vertex:Bb,morphtarget_vertex:Hb,normal_fragment_begin:Gb,normal_fragment_maps:Vb,normal_pars_fragment:kb,normal_pars_vertex:Xb,normal_vertex:jb,normalmap_pars_fragment:Wb,clearcoat_normal_fragment_begin:qb,clearcoat_normal_fragment_maps:Yb,clearcoat_pars_fragment:Zb,iridescence_pars_fragment:Kb,opaque_fragment:Qb,packing:Jb,premultiplied_alpha_fragment:$b,project_vertex:tE,dithering_fragment:eE,dithering_pars_fragment:nE,roughnessmap_fragment:iE,roughnessmap_pars_fragment:aE,shadowmap_pars_fragment:sE,shadowmap_pars_vertex:rE,shadowmap_vertex:oE,shadowmask_pars_fragment:lE,skinbase_vertex:cE,skinning_pars_vertex:uE,skinning_vertex:fE,skinnormal_vertex:hE,specularmap_fragment:dE,specularmap_pars_fragment:pE,tonemapping_fragment:mE,tonemapping_pars_fragment:gE,transmission_fragment:_E,transmission_pars_fragment:xE,uv_pars_fragment:vE,uv_pars_vertex:SE,uv_vertex:yE,worldpos_vertex:ME,background_vert:bE,background_frag:EE,backgroundCube_vert:TE,backgroundCube_frag:AE,cube_vert:RE,cube_frag:CE,depth_vert:wE,depth_frag:DE,distance_vert:NE,distance_frag:UE,equirect_vert:LE,equirect_frag:OE,linedashed_vert:PE,linedashed_frag:zE,meshbasic_vert:FE,meshbasic_frag:IE,meshlambert_vert:BE,meshlambert_frag:HE,meshmatcap_vert:GE,meshmatcap_frag:VE,meshnormal_vert:kE,meshnormal_frag:XE,meshphong_vert:jE,meshphong_frag:WE,meshphysical_vert:qE,meshphysical_frag:YE,meshtoon_vert:ZE,meshtoon_frag:KE,points_vert:QE,points_frag:JE,shadow_vert:$E,shadow_frag:tT,sprite_vert:eT,sprite_frag:nT},Xt={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},Gi={basic:{uniforms:Vn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Vn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new De(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Vn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Vn([Xt.common,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.roughnessmap,Xt.metalnessmap,Xt.fog,Xt.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Vn([Xt.common,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.gradientmap,Xt.fog,Xt.lights,{emissive:{value:new De(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Vn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Vn([Xt.points,Xt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Vn([Xt.common,Xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Vn([Xt.common,Xt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Vn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Vn([Xt.sprite,Xt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distance:{uniforms:Vn([Xt.common,Xt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distance_vert,fragmentShader:ve.distance_frag},shadow:{uniforms:Vn([Xt.lights,Xt.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Gi.physical={uniforms:Vn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const Ic={r:0,b:0,g:0},ws=new Zi,iT=new tn;function aT(o,t,i,s,l,u,h){const d=new De(0);let m=u===!0?0:1,p,x,_=null,S=0,b=null;function E(z){let O=z.isScene===!0?z.background:null;return O&&O.isTexture&&(O=(z.backgroundBlurriness>0?i:t).get(O)),O}function C(z){let O=!1;const B=E(z);B===null?v(d,m):B&&B.isColor&&(v(B,1),O=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?s.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||O)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(z,O){const B=E(O);B&&(B.isCubeTexture||B.mapping===tu)?(x===void 0&&(x=new Te(new _n(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:Vr(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(G,P,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),ws.copy(O.backgroundRotation),ws.x*=-1,ws.y*=-1,ws.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),x.material.uniforms.envMap.value=B,x.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(iT.makeRotationFromEuler(ws)),x.material.toneMapped=we.getTransfer(B.colorSpace)!==Ve,(_!==B||S!==B.version||b!==o.toneMapping)&&(x.material.needsUpdate=!0,_=B,S=B.version,b=o.toneMapping),x.layers.enableAll(),z.unshift(x,x.geometry,x.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new Te(new kn(2,2),new Ki({name:"BackgroundMaterial",uniforms:Vr(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=we.getTransfer(B.colorSpace)!==Ve,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(_!==B||S!==B.version||b!==o.toneMapping)&&(p.material.needsUpdate=!0,_=B,S=B.version,b=o.toneMapping),p.layers.enableAll(),z.unshift(p,p.geometry,p.material,0,0,null))}function v(z,O){z.getRGB(Ic,yx(o)),s.buffers.color.setClear(Ic.r,Ic.g,Ic.b,O,h)}function F(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(z,O=1){d.set(z),m=O,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(z){m=z,v(d,m)},render:C,addToRenderList:y,dispose:F}}function sT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let u=l,h=!1;function d(D,k,Y,j,ot){let lt=!1;const U=_(j,Y,k);u!==U&&(u=U,p(u.object)),lt=b(D,j,Y,ot),lt&&E(D,j,Y,ot),ot!==null&&t.update(ot,o.ELEMENT_ARRAY_BUFFER),(lt||h)&&(h=!1,O(D,k,Y,j),ot!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ot).buffer))}function m(){return o.createVertexArray()}function p(D){return o.bindVertexArray(D)}function x(D){return o.deleteVertexArray(D)}function _(D,k,Y){const j=Y.wireframe===!0;let ot=s[D.id];ot===void 0&&(ot={},s[D.id]=ot);let lt=ot[k.id];lt===void 0&&(lt={},ot[k.id]=lt);let U=lt[j];return U===void 0&&(U=S(m()),lt[j]=U),U}function S(D){const k=[],Y=[],j=[];for(let ot=0;ot<i;ot++)k[ot]=0,Y[ot]=0,j[ot]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Y,attributeDivisors:j,object:D,attributes:{},index:null}}function b(D,k,Y,j){const ot=u.attributes,lt=k.attributes;let U=0;const I=Y.getAttributes();for(const et in I)if(I[et].location>=0){const yt=ot[et];let L=lt[et];if(L===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(L=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(L=D.instanceColor)),yt===void 0||yt.attribute!==L||L&&yt.data!==L.data)return!0;U++}return u.attributesNum!==U||u.index!==j}function E(D,k,Y,j){const ot={},lt=k.attributes;let U=0;const I=Y.getAttributes();for(const et in I)if(I[et].location>=0){let yt=lt[et];yt===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(yt=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(yt=D.instanceColor));const L={};L.attribute=yt,yt&&yt.data&&(L.data=yt.data),ot[et]=L,U++}u.attributes=ot,u.attributesNum=U,u.index=j}function C(){const D=u.newAttributes;for(let k=0,Y=D.length;k<Y;k++)D[k]=0}function y(D){v(D,0)}function v(D,k){const Y=u.newAttributes,j=u.enabledAttributes,ot=u.attributeDivisors;Y[D]=1,j[D]===0&&(o.enableVertexAttribArray(D),j[D]=1),ot[D]!==k&&(o.vertexAttribDivisor(D,k),ot[D]=k)}function F(){const D=u.newAttributes,k=u.enabledAttributes;for(let Y=0,j=k.length;Y<j;Y++)k[Y]!==D[Y]&&(o.disableVertexAttribArray(Y),k[Y]=0)}function z(D,k,Y,j,ot,lt,U){U===!0?o.vertexAttribIPointer(D,k,Y,ot,lt):o.vertexAttribPointer(D,k,Y,j,ot,lt)}function O(D,k,Y,j){C();const ot=j.attributes,lt=Y.getAttributes(),U=k.defaultAttributeValues;for(const I in lt){const et=lt[I];if(et.location>=0){let Et=ot[I];if(Et===void 0&&(I==="instanceMatrix"&&D.instanceMatrix&&(Et=D.instanceMatrix),I==="instanceColor"&&D.instanceColor&&(Et=D.instanceColor)),Et!==void 0){const yt=Et.normalized,L=Et.itemSize,tt=t.get(Et);if(tt===void 0)continue;const dt=tt.buffer,vt=tt.type,Bt=tt.bytesPerElement,at=vt===o.INT||vt===o.UNSIGNED_INT||Et.gpuType===Xd;if(Et.isInterleavedBufferAttribute){const ft=Et.data,It=ft.stride,zt=Et.offset;if(ft.isInstancedInterleavedBuffer){for(let Vt=0;Vt<et.locationSize;Vt++)v(et.location+Vt,ft.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Vt=0;Vt<et.locationSize;Vt++)y(et.location+Vt);o.bindBuffer(o.ARRAY_BUFFER,dt);for(let Vt=0;Vt<et.locationSize;Vt++)z(et.location+Vt,L/et.locationSize,vt,yt,It*Bt,(zt+L/et.locationSize*Vt)*Bt,at)}else{if(Et.isInstancedBufferAttribute){for(let ft=0;ft<et.locationSize;ft++)v(et.location+ft,Et.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let ft=0;ft<et.locationSize;ft++)y(et.location+ft);o.bindBuffer(o.ARRAY_BUFFER,dt);for(let ft=0;ft<et.locationSize;ft++)z(et.location+ft,L/et.locationSize,vt,yt,L*Bt,L/et.locationSize*ft*Bt,at)}}else if(U!==void 0){const yt=U[I];if(yt!==void 0)switch(yt.length){case 2:o.vertexAttrib2fv(et.location,yt);break;case 3:o.vertexAttrib3fv(et.location,yt);break;case 4:o.vertexAttrib4fv(et.location,yt);break;default:o.vertexAttrib1fv(et.location,yt)}}}}F()}function B(){K();for(const D in s){const k=s[D];for(const Y in k){const j=k[Y];for(const ot in j)x(j[ot].object),delete j[ot];delete k[Y]}delete s[D]}}function G(D){if(s[D.id]===void 0)return;const k=s[D.id];for(const Y in k){const j=k[Y];for(const ot in j)x(j[ot].object),delete j[ot];delete k[Y]}delete s[D.id]}function P(D){for(const k in s){const Y=s[k];if(Y[D.id]===void 0)continue;const j=Y[D.id];for(const ot in j)x(j[ot].object),delete j[ot];delete Y[D.id]}}function K(){R(),h=!0,u!==l&&(u=l,p(u.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:R,dispose:B,releaseStatesOfGeometry:G,releaseStatesOfProgram:P,initAttributes:C,enableAttribute:y,disableUnusedAttributes:F}}function rT(o,t,i){let s;function l(p){s=p}function u(p,x){o.drawArrays(s,p,x),i.update(x,s,1)}function h(p,x,_){_!==0&&(o.drawArraysInstanced(s,p,x,_),i.update(x,s,_))}function d(p,x,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,x,0,_);let b=0;for(let E=0;E<_;E++)b+=x[E];i.update(b,s,1)}function m(p,x,_,S){if(_===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let E=0;E<p.length;E++)h(p[E],x[E],S[E]);else{b.multiDrawArraysInstancedWEBGL(s,p,0,x,0,S,0,_);let E=0;for(let C=0;C<_;C++)E+=x[C]*S[C];i.update(E,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function oT(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==Oi&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const K=P===ba&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==ui&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ki&&!K)}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(ue("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),b=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),F=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),z=o.getParameter(o.MAX_VARYING_VECTORS),O=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),B=o.getParameter(o.MAX_SAMPLES),G=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:b,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:F,maxVaryings:z,maxFragmentUniforms:O,maxSamples:B,samples:G}}function lT(o){const t=this;let i=null,s=0,l=!1,u=!1;const h=new is,d=new xe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const b=_.length!==0||S||s!==0||l;return l=S,s=_.length,b},this.beginShadows=function(){u=!0,x(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,S){i=x(_,S,0)},this.setState=function(_,S,b){const E=_.clippingPlanes,C=_.clipIntersection,y=_.clipShadows,v=o.get(_);if(!l||E===null||E.length===0||u&&!y)u?x(null):p();else{const F=u?0:s,z=F*4;let O=v.clippingState||null;m.value=O,O=x(E,S,z,b);for(let B=0;B!==z;++B)O[B]=i[B];v.clippingState=O,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function x(_,S,b,E){const C=_!==null?_.length:0;let y=null;if(C!==0){if(y=m.value,E!==!0||y===null){const v=b+C*4,F=S.matrixWorldInverse;d.getNormalMatrix(F),(y===null||y.length<v)&&(y=new Float32Array(v));for(let z=0,O=b;z!==C;++z,O+=4)h.copy(_[z]).applyMatrix4(F,d),h.normal.toArray(y,O),y[O+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,y}}function cT(o){let t=new WeakMap;function i(h,d){return d===ad?h.mapping=Ps:d===sd&&(h.mapping=Br),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===ad||d===sd)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Ex(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const ss=4,A_=[.125,.215,.35,.446,.526,.582],Us=20,uT=256,Wo=new ip,R_=new De;let Vh=null,kh=0,Xh=0,jh=!1;const fT=new $;class C_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=fT}=u;Vh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=N_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=D_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Vh,kh,Xh),this._renderer.xr.enabled=jh,t.scissorTest=!1,Lr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ps||t.mapping===Br?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:ba,format:Oi,colorSpace:Gr,depthBuffer:!1},l=w_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=w_(t,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=hT(u)),this._blurMaterial=pT(u,t,i),this._ggxMaterial=dT(u,t,i)}return l}_compileMaterial(t){const i=new Te(new Ei,t);this._renderer.compile(i,Wo)}_sceneToCubeUV(t,i,s,l,u){const m=new $n(90,1,i,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,b=_.toneMapping;_.getClearColor(R_),_.toneMapping=ji,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Te(new _n,new tp({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let v=!1;const F=t.background;F?F.isColor&&(y.color.copy(F),t.background=null,v=!0):(y.color.copy(R_),v=!0);for(let z=0;z<6;z++){const O=z%3;O===0?(m.up.set(0,p[z],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+x[z],u.y,u.z)):O===1?(m.up.set(0,0,p[z]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+x[z],u.z)):(m.up.set(0,p[z],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+x[z]));const B=this._cubeSize;Lr(l,O*B,z>2?B:0,B,B),_.setRenderTarget(l),v&&_.render(C,m),_.render(t,m)}_.toneMapping=b,_.autoClear=S,t.background=F}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Ps||t.mapping===Br;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=N_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=D_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=u;const d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;Lr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Wo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,u=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-x*x),S=0+p*1.25,b=_*S,{_lodMax:E}=this,C=this._sizeLods[s],y=3*C*(s>E-ss?s-E+ss:0),v=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=b,m.mipInt.value=E-i,Lr(u,y,v,3*C,2*C),l.setRenderTarget(u),l.render(d,Wo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=E-s,Lr(t,y,v,3*C,2*C),l.setRenderTarget(t),l.render(d,Wo)}_blur(t,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",u),this._halfBlur(h,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Le("blur direction must be either latitudinal or longitudinal!");const x=3,_=this._lodMeshes[l];_.material=p;const S=p.uniforms,b=this._sizeLods[s]-1,E=isFinite(u)?Math.PI/(2*b):2*Math.PI/(2*Us-1),C=u/E,y=isFinite(u)?1+Math.floor(x*C):Us;y>Us&&ue(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Us}`);const v=[];let F=0;for(let P=0;P<Us;++P){const K=P/C,R=Math.exp(-K*K/2);v.push(R),P===0?F+=R:P<y&&(F+=2*R)}for(let P=0;P<v.length;P++)v[P]=v[P]/F;S.envMap.value=t.texture,S.samples.value=y,S.weights.value=v,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:z}=this;S.dTheta.value=E,S.mipInt.value=z-s;const O=this._sizeLods[l],B=3*O*(l>z-ss?l-z+ss:0),G=4*(this._cubeSize-O);Lr(i,B,G,3*O,2*O),m.setRenderTarget(i),m.render(_,Wo)}}function hT(o){const t=[],i=[],s=[];let l=o;const u=o-ss+1+A_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>o-ss?m=A_[h-o+ss-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),x=-p,_=1+p,S=[x,x,_,x,_,_,x,x,_,_,x,_],b=6,E=6,C=3,y=2,v=1,F=new Float32Array(C*E*b),z=new Float32Array(y*E*b),O=new Float32Array(v*E*b);for(let G=0;G<b;G++){const P=G%3*2/3-1,K=G>2?0:-1,R=[P,K,0,P+2/3,K,0,P+2/3,K+1,0,P,K,0,P+2/3,K+1,0,P,K+1,0];F.set(R,C*E*G),z.set(S,y*E*G);const D=[G,G,G,G,G,G];O.set(D,v*E*G)}const B=new Ei;B.setAttribute("position",new qi(F,C)),B.setAttribute("uv",new qi(z,y)),B.setAttribute("faceIndex",new qi(O,v)),s.push(new Te(B,null)),l>ss&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function w_(o,t,i){const s=new Wi(o,t,i);return s.texture.mapping=tu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Lr(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function dT(o,t,i){return new Ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:uT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:iu(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function pT(o,t,i){const s=new Float32Array(Us),l=new $(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function D_(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:iu(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function N_(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function iu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mT(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===ad||m===sd,x=m===Ps||m===Br;if(p||x){let _=t.get(d);const S=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new C_(o)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const b=d.image;return p&&b&&b.height>0||x&&b&&l(b)?(i===null&&(i=new C_(o)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let x=0;x<p;x++)d[x]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function gT(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&$o("WebGLRenderer: "+s+" extension not supported."),l}}}function _T(o,t,i,s){const l={},u=new WeakMap;function h(_){const S=_.target;S.index!==null&&t.remove(S.index);for(const E in S.attributes)t.remove(S.attributes[E]);S.removeEventListener("dispose",h),delete l[S.id];const b=u.get(S);b&&(t.remove(b),u.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(_,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const b in S)t.update(S[b],o.ARRAY_BUFFER)}function p(_){const S=[],b=_.index,E=_.attributes.position;let C=0;if(b!==null){const F=b.array;C=b.version;for(let z=0,O=F.length;z<O;z+=3){const B=F[z+0],G=F[z+1],P=F[z+2];S.push(B,G,G,P,P,B)}}else if(E!==void 0){const F=E.array;C=E.version;for(let z=0,O=F.length/3-1;z<O;z+=3){const B=z+0,G=z+1,P=z+2;S.push(B,G,G,P,P,B)}}else return;const y=new(mx(S)?Sx:vx)(S,1);y.version=C;const v=u.get(_);v&&t.remove(v),u.set(_,y)}function x(_){const S=u.get(_);if(S){const b=_.index;b!==null&&S.version<b.version&&p(_)}else p(_);return u.get(_)}return{get:d,update:m,getWireframeAttribute:x}}function xT(o,t,i){let s;function l(S){s=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,b){o.drawElements(s,b,u,S*h),i.update(b,s,1)}function p(S,b,E){E!==0&&(o.drawElementsInstanced(s,b,u,S*h,E),i.update(b,s,E))}function x(S,b,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,b,0,u,S,0,E);let y=0;for(let v=0;v<E;v++)y+=b[v];i.update(y,s,1)}function _(S,b,E,C){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<S.length;v++)p(S[v]/h,b[v],C[v]);else{y.multiDrawElementsInstancedWEBGL(s,b,0,u,S,0,C,0,E);let v=0;for(let F=0;F<E;F++)v+=b[F]*C[F];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=_}function vT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:Le("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function ST(o,t,i){const s=new WeakMap,l=new an;function u(h,d,m){const p=h.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=x!==void 0?x.length:0;let S=s.get(d);if(S===void 0||S.count!==_){let D=function(){K.dispose(),s.delete(d),d.removeEventListener("dispose",D)};var b=D;S!==void 0&&S.texture.dispose();const E=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],F=d.morphAttributes.normal||[],z=d.morphAttributes.color||[];let O=0;E===!0&&(O=1),C===!0&&(O=2),y===!0&&(O=3);let B=d.attributes.position.count*O,G=1;B>t.maxTextureSize&&(G=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const P=new Float32Array(B*G*4*_),K=new gx(P,B,G,_);K.type=ki,K.needsUpdate=!0;const R=O*4;for(let k=0;k<_;k++){const Y=v[k],j=F[k],ot=z[k],lt=B*G*4*k;for(let U=0;U<Y.count;U++){const I=U*R;E===!0&&(l.fromBufferAttribute(Y,U),P[lt+I+0]=l.x,P[lt+I+1]=l.y,P[lt+I+2]=l.z,P[lt+I+3]=0),C===!0&&(l.fromBufferAttribute(j,U),P[lt+I+4]=l.x,P[lt+I+5]=l.y,P[lt+I+6]=l.z,P[lt+I+7]=0),y===!0&&(l.fromBufferAttribute(ot,U),P[lt+I+8]=l.x,P[lt+I+9]=l.y,P[lt+I+10]=l.z,P[lt+I+11]=ot.itemSize===4?l.w:1)}}S={count:_,texture:K,size:new de(B,G)},s.set(d,S),d.addEventListener("dispose",D)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const C=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function yT(o,t,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,x=m.geometry,_=t.get(m,x);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const MT={[$_]:"LINEAR_TONE_MAPPING",[tx]:"REINHARD_TONE_MAPPING",[ex]:"CINEON_TONE_MAPPING",[nx]:"ACES_FILMIC_TONE_MAPPING",[ax]:"AGX_TONE_MAPPING",[sx]:"NEUTRAL_TONE_MAPPING",[ix]:"CUSTOM_TONE_MAPPING"};function bT(o,t,i,s,l){const u=new Wi(t,i,{type:o,depthBuffer:s,stencilBuffer:l}),h=new Wi(t,i,{type:ba,depthBuffer:!1,stencilBuffer:!1}),d=new Ei;d.setAttribute("position",new Xn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Xn([0,2,0,0,2,0],2));const m=new uM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Te(d,m),x=new ip(-1,1,1,-1,0,1);let _=null,S=null,b=!1,E,C=null,y=[],v=!1;this.setSize=function(F,z){u.setSize(F,z),h.setSize(F,z);for(let O=0;O<y.length;O++){const B=y[O];B.setSize&&B.setSize(F,z)}},this.setEffects=function(F){y=F,v=y.length>0&&y[0].isRenderPass===!0;const z=u.width,O=u.height;for(let B=0;B<y.length;B++){const G=y[B];G.setSize&&G.setSize(z,O)}},this.begin=function(F,z){if(b||F.toneMapping===ji&&y.length===0)return!1;if(C=z,z!==null){const O=z.width,B=z.height;(u.width!==O||u.height!==B)&&this.setSize(O,B)}return v===!1&&F.setRenderTarget(u),E=F.toneMapping,F.toneMapping=ji,!0},this.hasRenderPass=function(){return v},this.end=function(F,z){F.toneMapping=E,b=!0;let O=u,B=h;for(let G=0;G<y.length;G++){const P=y[G];if(P.enabled!==!1&&(P.render(F,B,O,z),P.needsSwap!==!1)){const K=O;O=B,B=K}}if(_!==F.outputColorSpace||S!==F.toneMapping){_=F.outputColorSpace,S=F.toneMapping,m.defines={},we.getTransfer(_)===Ve&&(m.defines.SRGB_TRANSFER="");const G=MT[S];G&&(m.defines[G]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=O.texture,F.setRenderTarget(C),F.render(p,x),C=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){u.dispose(),h.dispose(),d.dispose(),m.dispose()}}const Cx=new Hn,Hd=new tl(1,1),wx=new gx,Dx=new zy,Nx=new bx,U_=[],L_=[],O_=new Float32Array(16),P_=new Float32Array(9),z_=new Float32Array(4);function Xr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=U_[l];if(u===void 0&&(u=new Float32Array(l),U_[l]=u),t!==0){s.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function vn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function Sn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function au(o,t){let i=L_[t];i===void 0&&(i=new Int32Array(t),L_[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function ET(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function TT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;o.uniform2fv(this.addr,t),Sn(i,t)}}function AT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(vn(i,t))return;o.uniform3fv(this.addr,t),Sn(i,t)}}function RT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;o.uniform4fv(this.addr,t),Sn(i,t)}}function CT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),Sn(i,t)}else{if(vn(i,s))return;z_.set(s),o.uniformMatrix2fv(this.addr,!1,z_),Sn(i,s)}}function wT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),Sn(i,t)}else{if(vn(i,s))return;P_.set(s),o.uniformMatrix3fv(this.addr,!1,P_),Sn(i,s)}}function DT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),Sn(i,t)}else{if(vn(i,s))return;O_.set(s),o.uniformMatrix4fv(this.addr,!1,O_),Sn(i,s)}}function NT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function UT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;o.uniform2iv(this.addr,t),Sn(i,t)}}function LT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;o.uniform3iv(this.addr,t),Sn(i,t)}}function OT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;o.uniform4iv(this.addr,t),Sn(i,t)}}function PT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function zT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;o.uniform2uiv(this.addr,t),Sn(i,t)}}function FT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;o.uniform3uiv(this.addr,t),Sn(i,t)}}function IT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;o.uniform4uiv(this.addr,t),Sn(i,t)}}function BT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Hd.compareFunction=i.isReversedDepthBuffer()?Qd:Kd,u=Hd):u=Cx,i.setTexture2D(t||u,l)}function HT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Dx,l)}function GT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Nx,l)}function VT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||wx,l)}function kT(o){switch(o){case 5126:return ET;case 35664:return TT;case 35665:return AT;case 35666:return RT;case 35674:return CT;case 35675:return wT;case 35676:return DT;case 5124:case 35670:return NT;case 35667:case 35671:return UT;case 35668:case 35672:return LT;case 35669:case 35673:return OT;case 5125:return PT;case 36294:return zT;case 36295:return FT;case 36296:return IT;case 35678:case 36198:case 36298:case 36306:case 35682:return BT;case 35679:case 36299:case 36307:return HT;case 35680:case 36300:case 36308:case 36293:return GT;case 36289:case 36303:case 36311:case 36292:return VT}}function XT(o,t){o.uniform1fv(this.addr,t)}function jT(o,t){const i=Xr(t,this.size,2);o.uniform2fv(this.addr,i)}function WT(o,t){const i=Xr(t,this.size,3);o.uniform3fv(this.addr,i)}function qT(o,t){const i=Xr(t,this.size,4);o.uniform4fv(this.addr,i)}function YT(o,t){const i=Xr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function ZT(o,t){const i=Xr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function KT(o,t){const i=Xr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function QT(o,t){o.uniform1iv(this.addr,t)}function JT(o,t){o.uniform2iv(this.addr,t)}function $T(o,t){o.uniform3iv(this.addr,t)}function t1(o,t){o.uniform4iv(this.addr,t)}function e1(o,t){o.uniform1uiv(this.addr,t)}function n1(o,t){o.uniform2uiv(this.addr,t)}function i1(o,t){o.uniform3uiv(this.addr,t)}function a1(o,t){o.uniform4uiv(this.addr,t)}function s1(o,t,i){const s=this.cache,l=t.length,u=au(i,l);vn(s,u)||(o.uniform1iv(this.addr,u),Sn(s,u));let h;this.type===o.SAMPLER_2D_SHADOW?h=Hd:h=Cx;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,u[d])}function r1(o,t,i){const s=this.cache,l=t.length,u=au(i,l);vn(s,u)||(o.uniform1iv(this.addr,u),Sn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Dx,u[h])}function o1(o,t,i){const s=this.cache,l=t.length,u=au(i,l);vn(s,u)||(o.uniform1iv(this.addr,u),Sn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Nx,u[h])}function l1(o,t,i){const s=this.cache,l=t.length,u=au(i,l);vn(s,u)||(o.uniform1iv(this.addr,u),Sn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||wx,u[h])}function c1(o){switch(o){case 5126:return XT;case 35664:return jT;case 35665:return WT;case 35666:return qT;case 35674:return YT;case 35675:return ZT;case 35676:return KT;case 5124:case 35670:return QT;case 35667:case 35671:return JT;case 35668:case 35672:return $T;case 35669:case 35673:return t1;case 5125:return e1;case 36294:return n1;case 36295:return i1;case 36296:return a1;case 35678:case 36198:case 36298:case 36306:case 35682:return s1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return o1;case 36289:case 36303:case 36311:case 36292:return l1}}class u1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=kT(i.type)}}class f1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=c1(i.type)}}class h1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const Wh=/(\w+)(\])?(\[|\.)?/g;function F_(o,t){o.seq.push(t),o.map[t.id]=t}function d1(o,t,i){const s=o.name,l=s.length;for(Wh.lastIndex=0;;){const u=Wh.exec(s),h=Wh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){F_(i,p===void 0?new u1(d,o,t):new f1(d,o,t));break}else{let _=i.map[d];_===void 0&&(_=new h1(d),F_(i,_)),i=_}}}class Wc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);d1(d,m,this)}const l=[],u=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):u.push(h);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function I_(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const p1=37297;let m1=0;function g1(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const B_=new xe;function _1(o){we._getMatrix(B_,we.workingColorSpace,o);const t=`mat3( ${B_.elements.map(i=>i.toFixed(4))} )`;switch(we.getTransfer(o)){case qc:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return ue("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function H_(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+g1(o.getShaderSource(t),d)}else return u}function x1(o,t){const i=_1(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const v1={[$_]:"Linear",[tx]:"Reinhard",[ex]:"Cineon",[nx]:"ACESFilmic",[ax]:"AgX",[sx]:"Neutral",[ix]:"Custom"};function S1(o,t){const i=v1[t];return i===void 0?(ue("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Bc=new $;function y1(){we.getLuminanceCoefficients(Bc);const o=Bc.x.toFixed(4),t=Bc.y.toFixed(4),i=Bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zo).join(`
`)}function b1(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function E1(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Zo(o){return o!==""}function G_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function V_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const T1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gd(o){return o.replace(T1,R1)}const A1=new Map;function R1(o,t){let i=ve[t];if(i===void 0){const s=A1.get(t);if(s!==void 0)i=ve[s],ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Gd(i)}const C1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function k_(o){return o.replace(C1,w1)}function w1(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function X_(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const D1={[Gc]:"SHADOWMAP_TYPE_PCF",[Yo]:"SHADOWMAP_TYPE_VSM"};function N1(o){return D1[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const U1={[Ps]:"ENVMAP_TYPE_CUBE",[Br]:"ENVMAP_TYPE_CUBE",[tu]:"ENVMAP_TYPE_CUBE_UV"};function L1(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":U1[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const O1={[Br]:"ENVMAP_MODE_REFRACTION"};function P1(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":O1[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const z1={[J_]:"ENVMAP_BLENDING_MULTIPLY",[gy]:"ENVMAP_BLENDING_MIX",[_y]:"ENVMAP_BLENDING_ADD"};function F1(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":z1[o.combine]||"ENVMAP_BLENDING_NONE"}function I1(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function B1(o,t,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=N1(i),p=L1(i),x=P1(i),_=F1(i),S=I1(i),b=M1(i),E=b1(u),C=l.createProgram();let y,v,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Zo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Zo).join(`
`),v.length>0&&(v+=`
`)):(y=[X_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),v=[X_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ji?"#define TONE_MAPPING":"",i.toneMapping!==ji?ve.tonemapping_pars_fragment:"",i.toneMapping!==ji?S1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,x1("linearToOutputTexel",i.outputColorSpace),y1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Zo).join(`
`)),h=Gd(h),h=G_(h,i),h=V_(h,i),d=Gd(d),d=G_(d,i),d=V_(d,i),h=k_(h),d=k_(d),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,y=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===$g?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===$g?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const z=F+y+h,O=F+v+d,B=I_(l,l.VERTEX_SHADER,z),G=I_(l,l.FRAGMENT_SHADER,O);l.attachShader(C,B),l.attachShader(C,G),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function P(k){if(o.debug.checkShaderErrors){const Y=l.getProgramInfoLog(C)||"",j=l.getShaderInfoLog(B)||"",ot=l.getShaderInfoLog(G)||"",lt=Y.trim(),U=j.trim(),I=ot.trim();let et=!0,Et=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(et=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,B,G);else{const yt=H_(l,B,"vertex"),L=H_(l,G,"fragment");Le("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+lt+`
`+yt+`
`+L)}else lt!==""?ue("WebGLProgram: Program Info Log:",lt):(U===""||I==="")&&(Et=!1);Et&&(k.diagnostics={runnable:et,programLog:lt,vertexShader:{log:U,prefix:y},fragmentShader:{log:I,prefix:v}})}l.deleteShader(B),l.deleteShader(G),K=new Wc(l,C),R=E1(l,C)}let K;this.getUniforms=function(){return K===void 0&&P(this),K};let R;this.getAttributes=function(){return R===void 0&&P(this),R};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(C,p1)),D},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=m1++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=B,this.fragmentShader=G,this}let H1=0;class G1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new V1(t),i.set(t,s)),s}}class V1{constructor(t){this.id=H1++,this.code=t,this.usedTimes=0}}function k1(o,t,i,s,l,u,h){const d=new _x,m=new G1,p=new Set,x=[],_=new Map,S=l.logarithmicDepthBuffer;let b=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(R){return p.add(R),R===0?"uv":`uv${R}`}function y(R,D,k,Y,j){const ot=Y.fog,lt=j.geometry,U=R.isMeshStandardMaterial?Y.environment:null,I=(R.isMeshStandardMaterial?i:t).get(R.envMap||U),et=I&&I.mapping===tu?I.image.height:null,Et=E[R.type];R.precision!==null&&(b=l.getMaxPrecision(R.precision),b!==R.precision&&ue("WebGLProgram.getParameters:",R.precision,"not supported, using",b,"instead."));const yt=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,L=yt!==void 0?yt.length:0;let tt=0;lt.morphAttributes.position!==void 0&&(tt=1),lt.morphAttributes.normal!==void 0&&(tt=2),lt.morphAttributes.color!==void 0&&(tt=3);let dt,vt,Bt,at;if(Et){const Ce=Gi[Et];dt=Ce.vertexShader,vt=Ce.fragmentShader}else dt=R.vertexShader,vt=R.fragmentShader,m.update(R),Bt=m.getVertexShaderID(R),at=m.getFragmentShaderID(R);const ft=o.getRenderTarget(),It=o.state.buffers.depth.getReversed(),zt=j.isInstancedMesh===!0,Vt=j.isBatchedMesh===!0,ce=!!R.map,qe=!!R.matcap,ge=!!I,pe=!!R.aoMap,Re=!!R.lightMap,Ut=!!R.bumpMap,Ft=!!R.normalMap,H=!!R.displacementMap,ie=!!R.emissiveMap,qt=!!R.metalnessMap,te=!!R.roughnessMap,jt=R.anisotropy>0,N=R.clearcoat>0,M=R.dispersion>0,q=R.iridescence>0,mt=R.sheen>0,bt=R.transmission>0,ht=jt&&!!R.anisotropyMap,Kt=N&&!!R.clearcoatMap,Rt=N&&!!R.clearcoatNormalMap,Dt=N&&!!R.clearcoatRoughnessMap,Ht=q&&!!R.iridescenceMap,Mt=q&&!!R.iridescenceThicknessMap,Tt=mt&&!!R.sheenColorMap,Pt=mt&&!!R.sheenRoughnessMap,Lt=!!R.specularMap,Ct=!!R.specularColorMap,ae=!!R.specularIntensityMap,X=bt&&!!R.transmissionMap,wt=bt&&!!R.thicknessMap,At=!!R.gradientMap,Ot=!!R.alphaMap,_t=R.alphaTest>0,pt=!!R.alphaHash,Nt=!!R.extensions;let le=ji;R.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(le=o.toneMapping);const Ie={shaderID:Et,shaderType:R.type,shaderName:R.name,vertexShader:dt,fragmentShader:vt,defines:R.defines,customVertexShaderID:Bt,customFragmentShaderID:at,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:b,batching:Vt,batchingColor:Vt&&j._colorsTexture!==null,instancing:zt,instancingColor:zt&&j.instanceColor!==null,instancingMorph:zt&&j.morphTexture!==null,outputColorSpace:ft===null?o.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Gr,alphaToCoverage:!!R.alphaToCoverage,map:ce,matcap:qe,envMap:ge,envMapMode:ge&&I.mapping,envMapCubeUVHeight:et,aoMap:pe,lightMap:Re,bumpMap:Ut,normalMap:Ft,displacementMap:H,emissiveMap:ie,normalMapObjectSpace:Ft&&R.normalMapType===Sy,normalMapTangentSpace:Ft&&R.normalMapType===px,metalnessMap:qt,roughnessMap:te,anisotropy:jt,anisotropyMap:ht,clearcoat:N,clearcoatMap:Kt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Dt,dispersion:M,iridescence:q,iridescenceMap:Ht,iridescenceThicknessMap:Mt,sheen:mt,sheenColorMap:Tt,sheenRoughnessMap:Pt,specularMap:Lt,specularColorMap:Ct,specularIntensityMap:ae,transmission:bt,transmissionMap:X,thicknessMap:wt,gradientMap:At,opaque:R.transparent===!1&&R.blending===zr&&R.alphaToCoverage===!1,alphaMap:Ot,alphaTest:_t,alphaHash:pt,combine:R.combine,mapUv:ce&&C(R.map.channel),aoMapUv:pe&&C(R.aoMap.channel),lightMapUv:Re&&C(R.lightMap.channel),bumpMapUv:Ut&&C(R.bumpMap.channel),normalMapUv:Ft&&C(R.normalMap.channel),displacementMapUv:H&&C(R.displacementMap.channel),emissiveMapUv:ie&&C(R.emissiveMap.channel),metalnessMapUv:qt&&C(R.metalnessMap.channel),roughnessMapUv:te&&C(R.roughnessMap.channel),anisotropyMapUv:ht&&C(R.anisotropyMap.channel),clearcoatMapUv:Kt&&C(R.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&C(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Dt&&C(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Ht&&C(R.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&C(R.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&C(R.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&C(R.sheenRoughnessMap.channel),specularMapUv:Lt&&C(R.specularMap.channel),specularColorMapUv:Ct&&C(R.specularColorMap.channel),specularIntensityMapUv:ae&&C(R.specularIntensityMap.channel),transmissionMapUv:X&&C(R.transmissionMap.channel),thicknessMapUv:wt&&C(R.thicknessMap.channel),alphaMapUv:Ot&&C(R.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Ft||jt),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!lt.attributes.uv&&(ce||Ot),fog:!!ot,useFog:R.fog===!0,fogExp2:!!ot&&ot.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:It,skinning:j.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:tt,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:le,decodeVideoTexture:ce&&R.map.isVideoTexture===!0&&we.getTransfer(R.map.colorSpace)===Ve,decodeVideoTextureEmissive:ie&&R.emissiveMap.isVideoTexture===!0&&we.getTransfer(R.emissiveMap.colorSpace)===Ve,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Vi,flipSided:R.side===ti,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Nt&&R.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&R.extensions.multiDraw===!0||Vt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Ie.vertexUv1s=p.has(1),Ie.vertexUv2s=p.has(2),Ie.vertexUv3s=p.has(3),p.clear(),Ie}function v(R){const D=[];if(R.shaderID?D.push(R.shaderID):(D.push(R.customVertexShaderID),D.push(R.customFragmentShaderID)),R.defines!==void 0)for(const k in R.defines)D.push(k),D.push(R.defines[k]);return R.isRawShaderMaterial===!1&&(F(D,R),z(D,R),D.push(o.outputColorSpace)),D.push(R.customProgramCacheKey),D.join()}function F(R,D){R.push(D.precision),R.push(D.outputColorSpace),R.push(D.envMapMode),R.push(D.envMapCubeUVHeight),R.push(D.mapUv),R.push(D.alphaMapUv),R.push(D.lightMapUv),R.push(D.aoMapUv),R.push(D.bumpMapUv),R.push(D.normalMapUv),R.push(D.displacementMapUv),R.push(D.emissiveMapUv),R.push(D.metalnessMapUv),R.push(D.roughnessMapUv),R.push(D.anisotropyMapUv),R.push(D.clearcoatMapUv),R.push(D.clearcoatNormalMapUv),R.push(D.clearcoatRoughnessMapUv),R.push(D.iridescenceMapUv),R.push(D.iridescenceThicknessMapUv),R.push(D.sheenColorMapUv),R.push(D.sheenRoughnessMapUv),R.push(D.specularMapUv),R.push(D.specularColorMapUv),R.push(D.specularIntensityMapUv),R.push(D.transmissionMapUv),R.push(D.thicknessMapUv),R.push(D.combine),R.push(D.fogExp2),R.push(D.sizeAttenuation),R.push(D.morphTargetsCount),R.push(D.morphAttributeCount),R.push(D.numDirLights),R.push(D.numPointLights),R.push(D.numSpotLights),R.push(D.numSpotLightMaps),R.push(D.numHemiLights),R.push(D.numRectAreaLights),R.push(D.numDirLightShadows),R.push(D.numPointLightShadows),R.push(D.numSpotLightShadows),R.push(D.numSpotLightShadowsWithMaps),R.push(D.numLightProbes),R.push(D.shadowMapType),R.push(D.toneMapping),R.push(D.numClippingPlanes),R.push(D.numClipIntersection),R.push(D.depthPacking)}function z(R,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),R.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),R.push(d.mask)}function O(R){const D=E[R.type];let k;if(D){const Y=Gi[D];k=Zy.clone(Y.uniforms)}else k=R.uniforms;return k}function B(R,D){let k=_.get(D);return k!==void 0?++k.usedTimes:(k=new B1(o,D,R,u),x.push(k),_.set(D,k)),k}function G(R){if(--R.usedTimes===0){const D=x.indexOf(R);x[D]=x[x.length-1],x.pop(),_.delete(R.cacheKey),R.destroy()}}function P(R){m.remove(R)}function K(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:O,acquireProgram:B,releaseProgram:G,releaseShaderCache:P,programs:x,dispose:K}}function X1(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function j1(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function j_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function W_(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function h(_,S,b,E,C,y){let v=o[t];return v===void 0?(v={id:_.id,object:_,geometry:S,material:b,groupOrder:E,renderOrder:_.renderOrder,z:C,group:y},o[t]=v):(v.id=_.id,v.object=_,v.geometry=S,v.material=b,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=C,v.group=y),t++,v}function d(_,S,b,E,C,y){const v=h(_,S,b,E,C,y);b.transmission>0?s.push(v):b.transparent===!0?l.push(v):i.push(v)}function m(_,S,b,E,C,y){const v=h(_,S,b,E,C,y);b.transmission>0?s.unshift(v):b.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,S){i.length>1&&i.sort(_||j1),s.length>1&&s.sort(S||j_),l.length>1&&l.sort(S||j_)}function x(){for(let _=t,S=o.length;_<S;_++){const b=o[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:x,sort:p}}function W1(){let o=new WeakMap;function t(s,l){const u=o.get(s);let h;return u===void 0?(h=new W_,o.set(s,[h])):l>=u.length?(h=new W_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function q1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new $,color:new De};break;case"SpotLight":i={position:new $,direction:new $,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new De,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new De,groundColor:new De};break;case"RectAreaLight":i={color:new De,position:new $,halfWidth:new $,halfHeight:new $};break}return o[t.id]=i,i}}}function Y1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let Z1=0;function K1(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Q1(o){const t=new q1,i=Y1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new $);const l=new $,u=new tn,h=new tn;function d(p){let x=0,_=0,S=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let b=0,E=0,C=0,y=0,v=0,F=0,z=0,O=0,B=0,G=0,P=0;p.sort(K1);for(let R=0,D=p.length;R<D;R++){const k=p[R],Y=k.color,j=k.intensity,ot=k.distance;let lt=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Hr?lt=k.shadow.map.texture:lt=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)x+=Y.r*j,_+=Y.g*j,S+=Y.b*j;else if(k.isLightProbe){for(let U=0;U<9;U++)s.probe[U].addScaledVector(k.sh.coefficients[U],j);P++}else if(k.isDirectionalLight){const U=t.get(k);if(U.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const I=k.shadow,et=i.get(k);et.shadowIntensity=I.intensity,et.shadowBias=I.bias,et.shadowNormalBias=I.normalBias,et.shadowRadius=I.radius,et.shadowMapSize=I.mapSize,s.directionalShadow[b]=et,s.directionalShadowMap[b]=lt,s.directionalShadowMatrix[b]=k.shadow.matrix,F++}s.directional[b]=U,b++}else if(k.isSpotLight){const U=t.get(k);U.position.setFromMatrixPosition(k.matrixWorld),U.color.copy(Y).multiplyScalar(j),U.distance=ot,U.coneCos=Math.cos(k.angle),U.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),U.decay=k.decay,s.spot[C]=U;const I=k.shadow;if(k.map&&(s.spotLightMap[B]=k.map,B++,I.updateMatrices(k),k.castShadow&&G++),s.spotLightMatrix[C]=I.matrix,k.castShadow){const et=i.get(k);et.shadowIntensity=I.intensity,et.shadowBias=I.bias,et.shadowNormalBias=I.normalBias,et.shadowRadius=I.radius,et.shadowMapSize=I.mapSize,s.spotShadow[C]=et,s.spotShadowMap[C]=lt,O++}C++}else if(k.isRectAreaLight){const U=t.get(k);U.color.copy(Y).multiplyScalar(j),U.halfWidth.set(k.width*.5,0,0),U.halfHeight.set(0,k.height*.5,0),s.rectArea[y]=U,y++}else if(k.isPointLight){const U=t.get(k);if(U.color.copy(k.color).multiplyScalar(k.intensity),U.distance=k.distance,U.decay=k.decay,k.castShadow){const I=k.shadow,et=i.get(k);et.shadowIntensity=I.intensity,et.shadowBias=I.bias,et.shadowNormalBias=I.normalBias,et.shadowRadius=I.radius,et.shadowMapSize=I.mapSize,et.shadowCameraNear=I.camera.near,et.shadowCameraFar=I.camera.far,s.pointShadow[E]=et,s.pointShadowMap[E]=lt,s.pointShadowMatrix[E]=k.shadow.matrix,z++}s.point[E]=U,E++}else if(k.isHemisphereLight){const U=t.get(k);U.skyColor.copy(k.color).multiplyScalar(j),U.groundColor.copy(k.groundColor).multiplyScalar(j),s.hemi[v]=U,v++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Xt.LTC_FLOAT_1,s.rectAreaLTC2=Xt.LTC_FLOAT_2):(s.rectAreaLTC1=Xt.LTC_HALF_1,s.rectAreaLTC2=Xt.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=_,s.ambient[2]=S;const K=s.hash;(K.directionalLength!==b||K.pointLength!==E||K.spotLength!==C||K.rectAreaLength!==y||K.hemiLength!==v||K.numDirectionalShadows!==F||K.numPointShadows!==z||K.numSpotShadows!==O||K.numSpotMaps!==B||K.numLightProbes!==P)&&(s.directional.length=b,s.spot.length=C,s.rectArea.length=y,s.point.length=E,s.hemi.length=v,s.directionalShadow.length=F,s.directionalShadowMap.length=F,s.pointShadow.length=z,s.pointShadowMap.length=z,s.spotShadow.length=O,s.spotShadowMap.length=O,s.directionalShadowMatrix.length=F,s.pointShadowMatrix.length=z,s.spotLightMatrix.length=O+B-G,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=P,K.directionalLength=b,K.pointLength=E,K.spotLength=C,K.rectAreaLength=y,K.hemiLength=v,K.numDirectionalShadows=F,K.numPointShadows=z,K.numSpotShadows=O,K.numSpotMaps=B,K.numLightProbes=P,s.version=Z1++)}function m(p,x){let _=0,S=0,b=0,E=0,C=0;const y=x.matrixWorldInverse;for(let v=0,F=p.length;v<F;v++){const z=p[v];if(z.isDirectionalLight){const O=s.directional[_];O.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(y),_++}else if(z.isSpotLight){const O=s.spot[b];O.position.setFromMatrixPosition(z.matrixWorld),O.position.applyMatrix4(y),O.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(y),b++}else if(z.isRectAreaLight){const O=s.rectArea[E];O.position.setFromMatrixPosition(z.matrixWorld),O.position.applyMatrix4(y),h.identity(),u.copy(z.matrixWorld),u.premultiply(y),h.extractRotation(u),O.halfWidth.set(z.width*.5,0,0),O.halfHeight.set(0,z.height*.5,0),O.halfWidth.applyMatrix4(h),O.halfHeight.applyMatrix4(h),E++}else if(z.isPointLight){const O=s.point[S];O.position.setFromMatrixPosition(z.matrixWorld),O.position.applyMatrix4(y),S++}else if(z.isHemisphereLight){const O=s.hemi[C];O.direction.setFromMatrixPosition(z.matrixWorld),O.direction.transformDirection(y),C++}}}return{setup:d,setupView:m,state:s}}function q_(o){const t=new Q1(o),i=[],s=[];function l(x){p.camera=x,i.length=0,s.length=0}function u(x){i.push(x)}function h(x){s.push(x)}function d(){t.setup(i)}function m(x){t.setupView(i,x)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function J1(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new q_(o),t.set(l,[d])):u>=h.length?(d=new q_(o),h.push(d)):d=h[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const $1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tA=`uniform sampler2D shadow_pass;
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
}`,eA=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],nA=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Y_=new tn,qo=new $,qh=new $;function iA(o,t,i){let s=new ep;const l=new de,u=new de,h=new an,d=new fM,m=new hM,p={},x=i.maxTextureSize,_={[rs]:ti,[ti]:rs,[Vi]:Vi},S=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:$1,fragmentShader:tA}),b=S.clone();b.defines.HORIZONTAL_PASS=1;const E=new Ei;E.setAttribute("position",new qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Te(E,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gc;let v=this.type;this.render=function(G,P,K){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||G.length===0)return;G.type===QS&&(ue("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),G.type=Gc);const R=o.getRenderTarget(),D=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),Y=o.state;Y.setBlending(ya),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const j=v!==this.type;j&&P.traverse(function(ot){ot.material&&(Array.isArray(ot.material)?ot.material.forEach(lt=>lt.needsUpdate=!0):ot.material.needsUpdate=!0)});for(let ot=0,lt=G.length;ot<lt;ot++){const U=G[ot],I=U.shadow;if(I===void 0){ue("WebGLShadowMap:",U,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;l.copy(I.mapSize);const et=I.getFrameExtents();if(l.multiply(et),u.copy(I.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(u.x=Math.floor(x/et.x),l.x=u.x*et.x,I.mapSize.x=u.x),l.y>x&&(u.y=Math.floor(x/et.y),l.y=u.y*et.y,I.mapSize.y=u.y)),I.map===null||j===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===Yo){if(U.isPointLight){ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Wi(l.x,l.y,{format:Hr,type:ba,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),I.map.texture.name=U.name+".shadowMap",I.map.depthTexture=new tl(l.x,l.y,ki),I.map.depthTexture.name=U.name+".shadowMapDepth",I.map.depthTexture.format=Ea,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=On,I.map.depthTexture.magFilter=On}else{U.isPointLight?(I.map=new Ex(l.x),I.map.depthTexture=new lM(l.x,Yi)):(I.map=new Wi(l.x,l.y),I.map.depthTexture=new tl(l.x,l.y,Yi)),I.map.depthTexture.name=U.name+".shadowMap",I.map.depthTexture.format=Ea;const yt=o.state.buffers.depth.getReversed();this.type===Gc?(I.map.depthTexture.compareFunction=yt?Qd:Kd,I.map.depthTexture.minFilter=Bn,I.map.depthTexture.magFilter=Bn):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=On,I.map.depthTexture.magFilter=On)}I.camera.updateProjectionMatrix()}const Et=I.map.isWebGLCubeRenderTarget?6:1;for(let yt=0;yt<Et;yt++){if(I.map.isWebGLCubeRenderTarget)o.setRenderTarget(I.map,yt),o.clear();else{yt===0&&(o.setRenderTarget(I.map),o.clear());const L=I.getViewport(yt);h.set(u.x*L.x,u.y*L.y,u.x*L.z,u.y*L.w),Y.viewport(h)}if(U.isPointLight){const L=I.camera,tt=I.matrix,dt=U.distance||L.far;dt!==L.far&&(L.far=dt,L.updateProjectionMatrix()),qo.setFromMatrixPosition(U.matrixWorld),L.position.copy(qo),qh.copy(L.position),qh.add(eA[yt]),L.up.copy(nA[yt]),L.lookAt(qh),L.updateMatrixWorld(),tt.makeTranslation(-qo.x,-qo.y,-qo.z),Y_.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),I._frustum.setFromProjectionMatrix(Y_,L.coordinateSystem,L.reversedDepth)}else I.updateMatrices(U);s=I.getFrustum(),O(P,K,I.camera,U,this.type)}I.isPointLightShadow!==!0&&this.type===Yo&&F(I,K),I.needsUpdate=!1}v=this.type,y.needsUpdate=!1,o.setRenderTarget(R,D,k)};function F(G,P){const K=t.update(C);S.defines.VSM_SAMPLES!==G.blurSamples&&(S.defines.VSM_SAMPLES=G.blurSamples,b.defines.VSM_SAMPLES=G.blurSamples,S.needsUpdate=!0,b.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Wi(l.x,l.y,{format:Hr,type:ba})),S.uniforms.shadow_pass.value=G.map.depthTexture,S.uniforms.resolution.value=G.mapSize,S.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(P,null,K,S,C,null),b.uniforms.shadow_pass.value=G.mapPass.texture,b.uniforms.resolution.value=G.mapSize,b.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(P,null,K,b,C,null)}function z(G,P,K,R){let D=null;const k=K.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(k!==void 0)D=k;else if(D=K.isPointLight===!0?m:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const Y=D.uuid,j=P.uuid;let ot=p[Y];ot===void 0&&(ot={},p[Y]=ot);let lt=ot[j];lt===void 0&&(lt=D.clone(),ot[j]=lt,P.addEventListener("dispose",B)),D=lt}if(D.visible=P.visible,D.wireframe=P.wireframe,R===Yo?D.side=P.shadowSide!==null?P.shadowSide:P.side:D.side=P.shadowSide!==null?P.shadowSide:_[P.side],D.alphaMap=P.alphaMap,D.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,D.map=P.map,D.clipShadows=P.clipShadows,D.clippingPlanes=P.clippingPlanes,D.clipIntersection=P.clipIntersection,D.displacementMap=P.displacementMap,D.displacementScale=P.displacementScale,D.displacementBias=P.displacementBias,D.wireframeLinewidth=P.wireframeLinewidth,D.linewidth=P.linewidth,K.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const Y=o.properties.get(D);Y.light=K}return D}function O(G,P,K,R,D){if(G.visible===!1)return;if(G.layers.test(P.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&D===Yo)&&(!G.frustumCulled||s.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,G.matrixWorld);const j=t.update(G),ot=G.material;if(Array.isArray(ot)){const lt=j.groups;for(let U=0,I=lt.length;U<I;U++){const et=lt[U],Et=ot[et.materialIndex];if(Et&&Et.visible){const yt=z(G,Et,R,D);G.onBeforeShadow(o,G,P,K,j,yt,et),o.renderBufferDirect(K,null,j,yt,G,et),G.onAfterShadow(o,G,P,K,j,yt,et)}}}else if(ot.visible){const lt=z(G,ot,R,D);G.onBeforeShadow(o,G,P,K,j,lt,null),o.renderBufferDirect(K,null,j,lt,G,null),G.onAfterShadow(o,G,P,K,j,lt,null)}}const Y=G.children;for(let j=0,ot=Y.length;j<ot;j++)O(Y[j],P,K,R,D)}function B(G){G.target.removeEventListener("dispose",B);for(const K in p){const R=p[K],D=G.target.uuid;D in R&&(R[D].dispose(),delete R[D])}}}const aA={[Qh]:Jh,[$h]:nd,[td]:id,[Ir]:ed,[Jh]:Qh,[nd]:$h,[id]:td,[ed]:Ir};function sA(o,t){function i(){let X=!1;const wt=new an;let At=null;const Ot=new an(0,0,0,0);return{setMask:function(_t){At!==_t&&!X&&(o.colorMask(_t,_t,_t,_t),At=_t)},setLocked:function(_t){X=_t},setClear:function(_t,pt,Nt,le,Ie){Ie===!0&&(_t*=le,pt*=le,Nt*=le),wt.set(_t,pt,Nt,le),Ot.equals(wt)===!1&&(o.clearColor(_t,pt,Nt,le),Ot.copy(wt))},reset:function(){X=!1,At=null,Ot.set(-1,0,0,0)}}}function s(){let X=!1,wt=!1,At=null,Ot=null,_t=null;return{setReversed:function(pt){if(wt!==pt){const Nt=t.get("EXT_clip_control");pt?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),wt=pt;const le=_t;_t=null,this.setClear(le)}},getReversed:function(){return wt},setTest:function(pt){pt?ft(o.DEPTH_TEST):It(o.DEPTH_TEST)},setMask:function(pt){At!==pt&&!X&&(o.depthMask(pt),At=pt)},setFunc:function(pt){if(wt&&(pt=aA[pt]),Ot!==pt){switch(pt){case Qh:o.depthFunc(o.NEVER);break;case Jh:o.depthFunc(o.ALWAYS);break;case $h:o.depthFunc(o.LESS);break;case Ir:o.depthFunc(o.LEQUAL);break;case td:o.depthFunc(o.EQUAL);break;case ed:o.depthFunc(o.GEQUAL);break;case nd:o.depthFunc(o.GREATER);break;case id:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ot=pt}},setLocked:function(pt){X=pt},setClear:function(pt){_t!==pt&&(wt&&(pt=1-pt),o.clearDepth(pt),_t=pt)},reset:function(){X=!1,At=null,Ot=null,_t=null,wt=!1}}}function l(){let X=!1,wt=null,At=null,Ot=null,_t=null,pt=null,Nt=null,le=null,Ie=null;return{setTest:function(Ce){X||(Ce?ft(o.STENCIL_TEST):It(o.STENCIL_TEST))},setMask:function(Ce){wt!==Ce&&!X&&(o.stencilMask(Ce),wt=Ce)},setFunc:function(Ce,Pn,Ti){(At!==Ce||Ot!==Pn||_t!==Ti)&&(o.stencilFunc(Ce,Pn,Ti),At=Ce,Ot=Pn,_t=Ti)},setOp:function(Ce,Pn,Ti){(pt!==Ce||Nt!==Pn||le!==Ti)&&(o.stencilOp(Ce,Pn,Ti),pt=Ce,Nt=Pn,le=Ti)},setLocked:function(Ce){X=Ce},setClear:function(Ce){Ie!==Ce&&(o.clearStencil(Ce),Ie=Ce)},reset:function(){X=!1,wt=null,At=null,Ot=null,_t=null,pt=null,Nt=null,le=null,Ie=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let x={},_={},S=new WeakMap,b=[],E=null,C=!1,y=null,v=null,F=null,z=null,O=null,B=null,G=null,P=new De(0,0,0),K=0,R=!1,D=null,k=null,Y=null,j=null,ot=null;const lt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,I=0;const et=o.getParameter(o.VERSION);et.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(et)[1]),U=I>=1):et.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),U=I>=2);let Et=null,yt={};const L=o.getParameter(o.SCISSOR_BOX),tt=o.getParameter(o.VIEWPORT),dt=new an().fromArray(L),vt=new an().fromArray(tt);function Bt(X,wt,At,Ot){const _t=new Uint8Array(4),pt=o.createTexture();o.bindTexture(X,pt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Nt=0;Nt<At;Nt++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(wt,0,o.RGBA,1,1,Ot,0,o.RGBA,o.UNSIGNED_BYTE,_t):o.texImage2D(wt+Nt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,_t);return pt}const at={};at[o.TEXTURE_2D]=Bt(o.TEXTURE_2D,o.TEXTURE_2D,1),at[o.TEXTURE_CUBE_MAP]=Bt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[o.TEXTURE_2D_ARRAY]=Bt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),at[o.TEXTURE_3D]=Bt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ft(o.DEPTH_TEST),h.setFunc(Ir),Ut(!1),Ft(qg),ft(o.CULL_FACE),pe(ya);function ft(X){x[X]!==!0&&(o.enable(X),x[X]=!0)}function It(X){x[X]!==!1&&(o.disable(X),x[X]=!1)}function zt(X,wt){return _[X]!==wt?(o.bindFramebuffer(X,wt),_[X]=wt,X===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=wt),X===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=wt),!0):!1}function Vt(X,wt){let At=b,Ot=!1;if(X){At=S.get(wt),At===void 0&&(At=[],S.set(wt,At));const _t=X.textures;if(At.length!==_t.length||At[0]!==o.COLOR_ATTACHMENT0){for(let pt=0,Nt=_t.length;pt<Nt;pt++)At[pt]=o.COLOR_ATTACHMENT0+pt;At.length=_t.length,Ot=!0}}else At[0]!==o.BACK&&(At[0]=o.BACK,Ot=!0);Ot&&o.drawBuffers(At)}function ce(X){return E!==X?(o.useProgram(X),E=X,!0):!1}const qe={[Ns]:o.FUNC_ADD,[$S]:o.FUNC_SUBTRACT,[ty]:o.FUNC_REVERSE_SUBTRACT};qe[ey]=o.MIN,qe[ny]=o.MAX;const ge={[iy]:o.ZERO,[ay]:o.ONE,[sy]:o.SRC_COLOR,[Zh]:o.SRC_ALPHA,[fy]:o.SRC_ALPHA_SATURATE,[cy]:o.DST_COLOR,[oy]:o.DST_ALPHA,[ry]:o.ONE_MINUS_SRC_COLOR,[Kh]:o.ONE_MINUS_SRC_ALPHA,[uy]:o.ONE_MINUS_DST_COLOR,[ly]:o.ONE_MINUS_DST_ALPHA,[hy]:o.CONSTANT_COLOR,[dy]:o.ONE_MINUS_CONSTANT_COLOR,[py]:o.CONSTANT_ALPHA,[my]:o.ONE_MINUS_CONSTANT_ALPHA};function pe(X,wt,At,Ot,_t,pt,Nt,le,Ie,Ce){if(X===ya){C===!0&&(It(o.BLEND),C=!1);return}if(C===!1&&(ft(o.BLEND),C=!0),X!==JS){if(X!==y||Ce!==R){if((v!==Ns||O!==Ns)&&(o.blendEquation(o.FUNC_ADD),v=Ns,O=Ns),Ce)switch(X){case zr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Yg:o.blendFunc(o.ONE,o.ONE);break;case Zg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Kg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Le("WebGLState: Invalid blending: ",X);break}else switch(X){case zr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Yg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Zg:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kg:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",X);break}F=null,z=null,B=null,G=null,P.set(0,0,0),K=0,y=X,R=Ce}return}_t=_t||wt,pt=pt||At,Nt=Nt||Ot,(wt!==v||_t!==O)&&(o.blendEquationSeparate(qe[wt],qe[_t]),v=wt,O=_t),(At!==F||Ot!==z||pt!==B||Nt!==G)&&(o.blendFuncSeparate(ge[At],ge[Ot],ge[pt],ge[Nt]),F=At,z=Ot,B=pt,G=Nt),(le.equals(P)===!1||Ie!==K)&&(o.blendColor(le.r,le.g,le.b,Ie),P.copy(le),K=Ie),y=X,R=!1}function Re(X,wt){X.side===Vi?It(o.CULL_FACE):ft(o.CULL_FACE);let At=X.side===ti;wt&&(At=!At),Ut(At),X.blending===zr&&X.transparent===!1?pe(ya):pe(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),u.setMask(X.colorWrite);const Ot=X.stencilWrite;d.setTest(Ot),Ot&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),ie(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ft(o.SAMPLE_ALPHA_TO_COVERAGE):It(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(X){D!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),D=X)}function Ft(X){X!==ZS?(ft(o.CULL_FACE),X!==k&&(X===qg?o.cullFace(o.BACK):X===KS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):It(o.CULL_FACE),k=X}function H(X){X!==Y&&(U&&o.lineWidth(X),Y=X)}function ie(X,wt,At){X?(ft(o.POLYGON_OFFSET_FILL),(j!==wt||ot!==At)&&(o.polygonOffset(wt,At),j=wt,ot=At)):It(o.POLYGON_OFFSET_FILL)}function qt(X){X?ft(o.SCISSOR_TEST):It(o.SCISSOR_TEST)}function te(X){X===void 0&&(X=o.TEXTURE0+lt-1),Et!==X&&(o.activeTexture(X),Et=X)}function jt(X,wt,At){At===void 0&&(Et===null?At=o.TEXTURE0+lt-1:At=Et);let Ot=yt[At];Ot===void 0&&(Ot={type:void 0,texture:void 0},yt[At]=Ot),(Ot.type!==X||Ot.texture!==wt)&&(Et!==At&&(o.activeTexture(At),Et=At),o.bindTexture(X,wt||at[X]),Ot.type=X,Ot.texture=wt)}function N(){const X=yt[Et];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function M(){try{o.compressedTexImage2D(...arguments)}catch(X){Le("WebGLState:",X)}}function q(){try{o.compressedTexImage3D(...arguments)}catch(X){Le("WebGLState:",X)}}function mt(){try{o.texSubImage2D(...arguments)}catch(X){Le("WebGLState:",X)}}function bt(){try{o.texSubImage3D(...arguments)}catch(X){Le("WebGLState:",X)}}function ht(){try{o.compressedTexSubImage2D(...arguments)}catch(X){Le("WebGLState:",X)}}function Kt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){Le("WebGLState:",X)}}function Rt(){try{o.texStorage2D(...arguments)}catch(X){Le("WebGLState:",X)}}function Dt(){try{o.texStorage3D(...arguments)}catch(X){Le("WebGLState:",X)}}function Ht(){try{o.texImage2D(...arguments)}catch(X){Le("WebGLState:",X)}}function Mt(){try{o.texImage3D(...arguments)}catch(X){Le("WebGLState:",X)}}function Tt(X){dt.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),dt.copy(X))}function Pt(X){vt.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),vt.copy(X))}function Lt(X,wt){let At=p.get(wt);At===void 0&&(At=new WeakMap,p.set(wt,At));let Ot=At.get(X);Ot===void 0&&(Ot=o.getUniformBlockIndex(wt,X.name),At.set(X,Ot))}function Ct(X,wt){const Ot=p.get(wt).get(X);m.get(wt)!==Ot&&(o.uniformBlockBinding(wt,Ot,X.__bindingPointIndex),m.set(wt,Ot))}function ae(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},Et=null,yt={},_={},S=new WeakMap,b=[],E=null,C=!1,y=null,v=null,F=null,z=null,O=null,B=null,G=null,P=new De(0,0,0),K=0,R=!1,D=null,k=null,Y=null,j=null,ot=null,dt.set(0,0,o.canvas.width,o.canvas.height),vt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:ft,disable:It,bindFramebuffer:zt,drawBuffers:Vt,useProgram:ce,setBlending:pe,setMaterial:Re,setFlipSided:Ut,setCullFace:Ft,setLineWidth:H,setPolygonOffset:ie,setScissorTest:qt,activeTexture:te,bindTexture:jt,unbindTexture:N,compressedTexImage2D:M,compressedTexImage3D:q,texImage2D:Ht,texImage3D:Mt,updateUBOMapping:Lt,uniformBlockBinding:Ct,texStorage2D:Rt,texStorage3D:Dt,texSubImage2D:mt,texSubImage3D:bt,compressedTexSubImage2D:ht,compressedTexSubImage3D:Kt,scissor:Tt,viewport:Pt,reset:ae}}function rA(o,t,i,s,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new de,x=new WeakMap;let _;const S=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,M){return b?new OffscreenCanvas(N,M):Zc("canvas")}function C(N,M,q){let mt=1;const bt=jt(N);if((bt.width>q||bt.height>q)&&(mt=q/Math.max(bt.width,bt.height)),mt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ht=Math.floor(mt*bt.width),Kt=Math.floor(mt*bt.height);_===void 0&&(_=E(ht,Kt));const Rt=M?E(ht,Kt):_;return Rt.width=ht,Rt.height=Kt,Rt.getContext("2d").drawImage(N,0,0,ht,Kt),ue("WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+ht+"x"+Kt+")."),Rt}else return"data"in N&&ue("WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),N;return N}function y(N){return N.generateMipmaps}function v(N){o.generateMipmap(N)}function F(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function z(N,M,q,mt,bt=!1){if(N!==null){if(o[N]!==void 0)return o[N];ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ht=M;if(M===o.RED&&(q===o.FLOAT&&(ht=o.R32F),q===o.HALF_FLOAT&&(ht=o.R16F),q===o.UNSIGNED_BYTE&&(ht=o.R8)),M===o.RED_INTEGER&&(q===o.UNSIGNED_BYTE&&(ht=o.R8UI),q===o.UNSIGNED_SHORT&&(ht=o.R16UI),q===o.UNSIGNED_INT&&(ht=o.R32UI),q===o.BYTE&&(ht=o.R8I),q===o.SHORT&&(ht=o.R16I),q===o.INT&&(ht=o.R32I)),M===o.RG&&(q===o.FLOAT&&(ht=o.RG32F),q===o.HALF_FLOAT&&(ht=o.RG16F),q===o.UNSIGNED_BYTE&&(ht=o.RG8)),M===o.RG_INTEGER&&(q===o.UNSIGNED_BYTE&&(ht=o.RG8UI),q===o.UNSIGNED_SHORT&&(ht=o.RG16UI),q===o.UNSIGNED_INT&&(ht=o.RG32UI),q===o.BYTE&&(ht=o.RG8I),q===o.SHORT&&(ht=o.RG16I),q===o.INT&&(ht=o.RG32I)),M===o.RGB_INTEGER&&(q===o.UNSIGNED_BYTE&&(ht=o.RGB8UI),q===o.UNSIGNED_SHORT&&(ht=o.RGB16UI),q===o.UNSIGNED_INT&&(ht=o.RGB32UI),q===o.BYTE&&(ht=o.RGB8I),q===o.SHORT&&(ht=o.RGB16I),q===o.INT&&(ht=o.RGB32I)),M===o.RGBA_INTEGER&&(q===o.UNSIGNED_BYTE&&(ht=o.RGBA8UI),q===o.UNSIGNED_SHORT&&(ht=o.RGBA16UI),q===o.UNSIGNED_INT&&(ht=o.RGBA32UI),q===o.BYTE&&(ht=o.RGBA8I),q===o.SHORT&&(ht=o.RGBA16I),q===o.INT&&(ht=o.RGBA32I)),M===o.RGB&&(q===o.UNSIGNED_INT_5_9_9_9_REV&&(ht=o.RGB9_E5),q===o.UNSIGNED_INT_10F_11F_11F_REV&&(ht=o.R11F_G11F_B10F)),M===o.RGBA){const Kt=bt?qc:we.getTransfer(mt);q===o.FLOAT&&(ht=o.RGBA32F),q===o.HALF_FLOAT&&(ht=o.RGBA16F),q===o.UNSIGNED_BYTE&&(ht=Kt===Ve?o.SRGB8_ALPHA8:o.RGBA8),q===o.UNSIGNED_SHORT_4_4_4_4&&(ht=o.RGBA4),q===o.UNSIGNED_SHORT_5_5_5_1&&(ht=o.RGB5_A1)}return(ht===o.R16F||ht===o.R32F||ht===o.RG16F||ht===o.RG32F||ht===o.RGBA16F||ht===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function O(N,M){let q;return N?M===null||M===Yi||M===Jo?q=o.DEPTH24_STENCIL8:M===ki?q=o.DEPTH32F_STENCIL8:M===Qo&&(q=o.DEPTH24_STENCIL8,ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Yi||M===Jo?q=o.DEPTH_COMPONENT24:M===ki?q=o.DEPTH_COMPONENT32F:M===Qo&&(q=o.DEPTH_COMPONENT16),q}function B(N,M){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==On&&N.minFilter!==Bn?Math.log2(Math.max(M.width,M.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?M.mipmaps.length:1}function G(N){const M=N.target;M.removeEventListener("dispose",G),K(M),M.isVideoTexture&&x.delete(M)}function P(N){const M=N.target;M.removeEventListener("dispose",P),D(M)}function K(N){const M=s.get(N);if(M.__webglInit===void 0)return;const q=N.source,mt=S.get(q);if(mt){const bt=mt[M.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&R(N),Object.keys(mt).length===0&&S.delete(q)}s.remove(N)}function R(N){const M=s.get(N);o.deleteTexture(M.__webglTexture);const q=N.source,mt=S.get(q);delete mt[M.__cacheKey],h.memory.textures--}function D(N){const M=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(M.__webglFramebuffer[mt]))for(let bt=0;bt<M.__webglFramebuffer[mt].length;bt++)o.deleteFramebuffer(M.__webglFramebuffer[mt][bt]);else o.deleteFramebuffer(M.__webglFramebuffer[mt]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[mt])}else{if(Array.isArray(M.__webglFramebuffer))for(let mt=0;mt<M.__webglFramebuffer.length;mt++)o.deleteFramebuffer(M.__webglFramebuffer[mt]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let mt=0;mt<M.__webglColorRenderbuffer.length;mt++)M.__webglColorRenderbuffer[mt]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[mt]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const q=N.textures;for(let mt=0,bt=q.length;mt<bt;mt++){const ht=s.get(q[mt]);ht.__webglTexture&&(o.deleteTexture(ht.__webglTexture),h.memory.textures--),s.remove(q[mt])}s.remove(N)}let k=0;function Y(){k=0}function j(){const N=k;return N>=l.maxTextures&&ue("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),k+=1,N}function ot(N){const M=[];return M.push(N.wrapS),M.push(N.wrapT),M.push(N.wrapR||0),M.push(N.magFilter),M.push(N.minFilter),M.push(N.anisotropy),M.push(N.internalFormat),M.push(N.format),M.push(N.type),M.push(N.generateMipmaps),M.push(N.premultiplyAlpha),M.push(N.flipY),M.push(N.unpackAlignment),M.push(N.colorSpace),M.join()}function lt(N,M){const q=s.get(N);if(N.isVideoTexture&&qt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&q.__version!==N.version){const mt=N.image;if(mt===null)ue("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)ue("WebGLRenderer: Texture marked for update but image is incomplete");else{at(q,N,M);return}}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,q.__webglTexture,o.TEXTURE0+M)}function U(N,M){const q=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){at(q,N,M);return}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,q.__webglTexture,o.TEXTURE0+M)}function I(N,M){const q=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){at(q,N,M);return}i.bindTexture(o.TEXTURE_3D,q.__webglTexture,o.TEXTURE0+M)}function et(N,M){const q=s.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&q.__version!==N.version){ft(q,N,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,q.__webglTexture,o.TEXTURE0+M)}const Et={[rd]:o.REPEAT,[Sa]:o.CLAMP_TO_EDGE,[od]:o.MIRRORED_REPEAT},yt={[On]:o.NEAREST,[xy]:o.NEAREST_MIPMAP_NEAREST,[pc]:o.NEAREST_MIPMAP_LINEAR,[Bn]:o.LINEAR,[mh]:o.LINEAR_MIPMAP_NEAREST,[Ls]:o.LINEAR_MIPMAP_LINEAR},L={[yy]:o.NEVER,[Ay]:o.ALWAYS,[My]:o.LESS,[Kd]:o.LEQUAL,[by]:o.EQUAL,[Qd]:o.GEQUAL,[Ey]:o.GREATER,[Ty]:o.NOTEQUAL};function tt(N,M){if(M.type===ki&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Bn||M.magFilter===mh||M.magFilter===pc||M.magFilter===Ls||M.minFilter===Bn||M.minFilter===mh||M.minFilter===pc||M.minFilter===Ls)&&ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,Et[M.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,Et[M.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,Et[M.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,yt[M.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,yt[M.minFilter]),M.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,L[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===On||M.minFilter!==pc&&M.minFilter!==Ls||M.type===ki&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");o.texParameterf(N,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function dt(N,M){let q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,M.addEventListener("dispose",G));const mt=M.source;let bt=S.get(mt);bt===void 0&&(bt={},S.set(mt,bt));const ht=ot(M);if(ht!==N.__cacheKey){bt[ht]===void 0&&(bt[ht]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,q=!0),bt[ht].usedTimes++;const Kt=bt[N.__cacheKey];Kt!==void 0&&(bt[N.__cacheKey].usedTimes--,Kt.usedTimes===0&&R(M)),N.__cacheKey=ht,N.__webglTexture=bt[ht].texture}return q}function vt(N,M,q){return Math.floor(Math.floor(N/q)/M)}function Bt(N,M,q,mt){const ht=N.updateRanges;if(ht.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,q,mt,M.data);else{ht.sort((Mt,Tt)=>Mt.start-Tt.start);let Kt=0;for(let Mt=1;Mt<ht.length;Mt++){const Tt=ht[Kt],Pt=ht[Mt],Lt=Tt.start+Tt.count,Ct=vt(Pt.start,M.width,4),ae=vt(Tt.start,M.width,4);Pt.start<=Lt+1&&Ct===ae&&vt(Pt.start+Pt.count-1,M.width,4)===Ct?Tt.count=Math.max(Tt.count,Pt.start+Pt.count-Tt.start):(++Kt,ht[Kt]=Pt)}ht.length=Kt+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),Dt=o.getParameter(o.UNPACK_SKIP_PIXELS),Ht=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let Mt=0,Tt=ht.length;Mt<Tt;Mt++){const Pt=ht[Mt],Lt=Math.floor(Pt.start/4),Ct=Math.ceil(Pt.count/4),ae=Lt%M.width,X=Math.floor(Lt/M.width),wt=Ct,At=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ae),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,ae,X,wt,At,q,mt,M.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Dt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Ht)}}function at(N,M,q){let mt=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(mt=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(mt=o.TEXTURE_3D);const bt=dt(N,M),ht=M.source;i.bindTexture(mt,N.__webglTexture,o.TEXTURE0+q);const Kt=s.get(ht);if(ht.version!==Kt.__version||bt===!0){i.activeTexture(o.TEXTURE0+q);const Rt=we.getPrimaries(we.workingColorSpace),Dt=M.colorSpace===as?null:we.getPrimaries(M.colorSpace),Ht=M.colorSpace===as||Rt===Dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let Mt=C(M.image,!1,l.maxTextureSize);Mt=te(M,Mt);const Tt=u.convert(M.format,M.colorSpace),Pt=u.convert(M.type);let Lt=z(M.internalFormat,Tt,Pt,M.colorSpace,M.isVideoTexture);tt(mt,M);let Ct;const ae=M.mipmaps,X=M.isVideoTexture!==!0,wt=Kt.__version===void 0||bt===!0,At=ht.dataReady,Ot=B(M,Mt);if(M.isDepthTexture)Lt=O(M.format===Os,M.type),wt&&(X?i.texStorage2D(o.TEXTURE_2D,1,Lt,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,Lt,Mt.width,Mt.height,0,Tt,Pt,null));else if(M.isDataTexture)if(ae.length>0){X&&wt&&i.texStorage2D(o.TEXTURE_2D,Ot,Lt,ae[0].width,ae[0].height);for(let _t=0,pt=ae.length;_t<pt;_t++)Ct=ae[_t],X?At&&i.texSubImage2D(o.TEXTURE_2D,_t,0,0,Ct.width,Ct.height,Tt,Pt,Ct.data):i.texImage2D(o.TEXTURE_2D,_t,Lt,Ct.width,Ct.height,0,Tt,Pt,Ct.data);M.generateMipmaps=!1}else X?(wt&&i.texStorage2D(o.TEXTURE_2D,Ot,Lt,Mt.width,Mt.height),At&&Bt(M,Mt,Tt,Pt)):i.texImage2D(o.TEXTURE_2D,0,Lt,Mt.width,Mt.height,0,Tt,Pt,Mt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){X&&wt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ot,Lt,ae[0].width,ae[0].height,Mt.depth);for(let _t=0,pt=ae.length;_t<pt;_t++)if(Ct=ae[_t],M.format!==Oi)if(Tt!==null)if(X){if(At)if(M.layerUpdates.size>0){const Nt=T_(Ct.width,Ct.height,M.format,M.type);for(const le of M.layerUpdates){const Ie=Ct.data.subarray(le*Nt/Ct.data.BYTES_PER_ELEMENT,(le+1)*Nt/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,_t,0,0,le,Ct.width,Ct.height,1,Tt,Ie)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,_t,0,0,0,Ct.width,Ct.height,Mt.depth,Tt,Ct.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,_t,Lt,Ct.width,Ct.height,Mt.depth,0,Ct.data,0,0);else ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?At&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,_t,0,0,0,Ct.width,Ct.height,Mt.depth,Tt,Pt,Ct.data):i.texImage3D(o.TEXTURE_2D_ARRAY,_t,Lt,Ct.width,Ct.height,Mt.depth,0,Tt,Pt,Ct.data)}else{X&&wt&&i.texStorage2D(o.TEXTURE_2D,Ot,Lt,ae[0].width,ae[0].height);for(let _t=0,pt=ae.length;_t<pt;_t++)Ct=ae[_t],M.format!==Oi?Tt!==null?X?At&&i.compressedTexSubImage2D(o.TEXTURE_2D,_t,0,0,Ct.width,Ct.height,Tt,Ct.data):i.compressedTexImage2D(o.TEXTURE_2D,_t,Lt,Ct.width,Ct.height,0,Ct.data):ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?At&&i.texSubImage2D(o.TEXTURE_2D,_t,0,0,Ct.width,Ct.height,Tt,Pt,Ct.data):i.texImage2D(o.TEXTURE_2D,_t,Lt,Ct.width,Ct.height,0,Tt,Pt,Ct.data)}else if(M.isDataArrayTexture)if(X){if(wt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ot,Lt,Mt.width,Mt.height,Mt.depth),At)if(M.layerUpdates.size>0){const _t=T_(Mt.width,Mt.height,M.format,M.type);for(const pt of M.layerUpdates){const Nt=Mt.data.subarray(pt*_t/Mt.data.BYTES_PER_ELEMENT,(pt+1)*_t/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,pt,Mt.width,Mt.height,1,Tt,Pt,Nt)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Tt,Pt,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Lt,Mt.width,Mt.height,Mt.depth,0,Tt,Pt,Mt.data);else if(M.isData3DTexture)X?(wt&&i.texStorage3D(o.TEXTURE_3D,Ot,Lt,Mt.width,Mt.height,Mt.depth),At&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Tt,Pt,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,Lt,Mt.width,Mt.height,Mt.depth,0,Tt,Pt,Mt.data);else if(M.isFramebufferTexture){if(wt)if(X)i.texStorage2D(o.TEXTURE_2D,Ot,Lt,Mt.width,Mt.height);else{let _t=Mt.width,pt=Mt.height;for(let Nt=0;Nt<Ot;Nt++)i.texImage2D(o.TEXTURE_2D,Nt,Lt,_t,pt,0,Tt,Pt,null),_t>>=1,pt>>=1}}else if(ae.length>0){if(X&&wt){const _t=jt(ae[0]);i.texStorage2D(o.TEXTURE_2D,Ot,Lt,_t.width,_t.height)}for(let _t=0,pt=ae.length;_t<pt;_t++)Ct=ae[_t],X?At&&i.texSubImage2D(o.TEXTURE_2D,_t,0,0,Tt,Pt,Ct):i.texImage2D(o.TEXTURE_2D,_t,Lt,Tt,Pt,Ct);M.generateMipmaps=!1}else if(X){if(wt){const _t=jt(Mt);i.texStorage2D(o.TEXTURE_2D,Ot,Lt,_t.width,_t.height)}At&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Tt,Pt,Mt)}else i.texImage2D(o.TEXTURE_2D,0,Lt,Tt,Pt,Mt);y(M)&&v(mt),Kt.__version=ht.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function ft(N,M,q){if(M.image.length!==6)return;const mt=dt(N,M),bt=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+q);const ht=s.get(bt);if(bt.version!==ht.__version||mt===!0){i.activeTexture(o.TEXTURE0+q);const Kt=we.getPrimaries(we.workingColorSpace),Rt=M.colorSpace===as?null:we.getPrimaries(M.colorSpace),Dt=M.colorSpace===as||Kt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);const Ht=M.isCompressedTexture||M.image[0].isCompressedTexture,Mt=M.image[0]&&M.image[0].isDataTexture,Tt=[];for(let pt=0;pt<6;pt++)!Ht&&!Mt?Tt[pt]=C(M.image[pt],!0,l.maxCubemapSize):Tt[pt]=Mt?M.image[pt].image:M.image[pt],Tt[pt]=te(M,Tt[pt]);const Pt=Tt[0],Lt=u.convert(M.format,M.colorSpace),Ct=u.convert(M.type),ae=z(M.internalFormat,Lt,Ct,M.colorSpace),X=M.isVideoTexture!==!0,wt=ht.__version===void 0||mt===!0,At=bt.dataReady;let Ot=B(M,Pt);tt(o.TEXTURE_CUBE_MAP,M);let _t;if(Ht){X&&wt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ot,ae,Pt.width,Pt.height);for(let pt=0;pt<6;pt++){_t=Tt[pt].mipmaps;for(let Nt=0;Nt<_t.length;Nt++){const le=_t[Nt];M.format!==Oi?Lt!==null?X?At&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Nt,0,0,le.width,le.height,Lt,le.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Nt,ae,le.width,le.height,0,le.data):ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Nt,0,0,le.width,le.height,Lt,Ct,le.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Nt,ae,le.width,le.height,0,Lt,Ct,le.data)}}}else{if(_t=M.mipmaps,X&&wt){_t.length>0&&Ot++;const pt=jt(Tt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ot,ae,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(Mt){X?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Tt[pt].width,Tt[pt].height,Lt,Ct,Tt[pt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ae,Tt[pt].width,Tt[pt].height,0,Lt,Ct,Tt[pt].data);for(let Nt=0;Nt<_t.length;Nt++){const Ie=_t[Nt].image[pt].image;X?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Nt+1,0,0,Ie.width,Ie.height,Lt,Ct,Ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Nt+1,ae,Ie.width,Ie.height,0,Lt,Ct,Ie.data)}}else{X?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Lt,Ct,Tt[pt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ae,Lt,Ct,Tt[pt]);for(let Nt=0;Nt<_t.length;Nt++){const le=_t[Nt];X?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Nt+1,0,0,Lt,Ct,le.image[pt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Nt+1,ae,Lt,Ct,le.image[pt])}}}y(M)&&v(o.TEXTURE_CUBE_MAP),ht.__version=bt.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function It(N,M,q,mt,bt,ht){const Kt=u.convert(q.format,q.colorSpace),Rt=u.convert(q.type),Dt=z(q.internalFormat,Kt,Rt,q.colorSpace),Ht=s.get(M),Mt=s.get(q);if(Mt.__renderTarget=M,!Ht.__hasExternalTextures){const Tt=Math.max(1,M.width>>ht),Pt=Math.max(1,M.height>>ht);bt===o.TEXTURE_3D||bt===o.TEXTURE_2D_ARRAY?i.texImage3D(bt,ht,Dt,Tt,Pt,M.depth,0,Kt,Rt,null):i.texImage2D(bt,ht,Dt,Tt,Pt,0,Kt,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),ie(M)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,mt,bt,Mt.__webglTexture,0,H(M)):(bt===o.TEXTURE_2D||bt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,mt,bt,Mt.__webglTexture,ht),i.bindFramebuffer(o.FRAMEBUFFER,null)}function zt(N,M,q){if(o.bindRenderbuffer(o.RENDERBUFFER,N),M.depthBuffer){const mt=M.depthTexture,bt=mt&&mt.isDepthTexture?mt.type:null,ht=O(M.stencilBuffer,bt),Kt=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;ie(M)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,H(M),ht,M.width,M.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,H(M),ht,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,ht,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Kt,o.RENDERBUFFER,N)}else{const mt=M.textures;for(let bt=0;bt<mt.length;bt++){const ht=mt[bt],Kt=u.convert(ht.format,ht.colorSpace),Rt=u.convert(ht.type),Dt=z(ht.internalFormat,Kt,Rt,ht.colorSpace);ie(M)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,H(M),Dt,M.width,M.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,H(M),Dt,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Dt,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Vt(N,M,q){const mt=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const bt=s.get(M.depthTexture);if(bt.__renderTarget=M,(!bt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),mt){if(bt.__webglInit===void 0&&(bt.__webglInit=!0,M.depthTexture.addEventListener("dispose",G)),bt.__webglTexture===void 0){bt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,bt.__webglTexture),tt(o.TEXTURE_CUBE_MAP,M.depthTexture);const Ht=u.convert(M.depthTexture.format),Mt=u.convert(M.depthTexture.type);let Tt;M.depthTexture.format===Ea?Tt=o.DEPTH_COMPONENT24:M.depthTexture.format===Os&&(Tt=o.DEPTH24_STENCIL8);for(let Pt=0;Pt<6;Pt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,Tt,M.width,M.height,0,Ht,Mt,null)}}else lt(M.depthTexture,0);const ht=bt.__webglTexture,Kt=H(M),Rt=mt?o.TEXTURE_CUBE_MAP_POSITIVE_X+q:o.TEXTURE_2D,Dt=M.depthTexture.format===Os?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ea)ie(M)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Dt,Rt,ht,0,Kt):o.framebufferTexture2D(o.FRAMEBUFFER,Dt,Rt,ht,0);else if(M.depthTexture.format===Os)ie(M)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Dt,Rt,ht,0,Kt):o.framebufferTexture2D(o.FRAMEBUFFER,Dt,Rt,ht,0);else throw new Error("Unknown depthTexture format")}function ce(N){const M=s.get(N),q=N.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==N.depthTexture){const mt=N.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),mt){const bt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,mt.removeEventListener("dispose",bt)};mt.addEventListener("dispose",bt),M.__depthDisposeCallback=bt}M.__boundDepthTexture=mt}if(N.depthTexture&&!M.__autoAllocateDepthBuffer)if(q)for(let mt=0;mt<6;mt++)Vt(M.__webglFramebuffer[mt],N,mt);else{const mt=N.texture.mipmaps;mt&&mt.length>0?Vt(M.__webglFramebuffer[0],N,0):Vt(M.__webglFramebuffer,N,0)}else if(q){M.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[mt]),M.__webglDepthbuffer[mt]===void 0)M.__webglDepthbuffer[mt]=o.createRenderbuffer(),zt(M.__webglDepthbuffer[mt],N,!1);else{const bt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=M.__webglDepthbuffer[mt];o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,bt,o.RENDERBUFFER,ht)}}else{const mt=N.texture.mipmaps;if(mt&&mt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),zt(M.__webglDepthbuffer,N,!1);else{const bt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,bt,o.RENDERBUFFER,ht)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function qe(N,M,q){const mt=s.get(N);M!==void 0&&It(mt.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),q!==void 0&&ce(N)}function ge(N){const M=N.texture,q=s.get(N),mt=s.get(M);N.addEventListener("dispose",P);const bt=N.textures,ht=N.isWebGLCubeRenderTarget===!0,Kt=bt.length>1;if(Kt||(mt.__webglTexture===void 0&&(mt.__webglTexture=o.createTexture()),mt.__version=M.version,h.memory.textures++),ht){q.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer[Rt]=[];for(let Dt=0;Dt<M.mipmaps.length;Dt++)q.__webglFramebuffer[Rt][Dt]=o.createFramebuffer()}else q.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer=[];for(let Rt=0;Rt<M.mipmaps.length;Rt++)q.__webglFramebuffer[Rt]=o.createFramebuffer()}else q.__webglFramebuffer=o.createFramebuffer();if(Kt)for(let Rt=0,Dt=bt.length;Rt<Dt;Rt++){const Ht=s.get(bt[Rt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=o.createTexture(),h.memory.textures++)}if(N.samples>0&&ie(N)===!1){q.__webglMultisampledFramebuffer=o.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Rt=0;Rt<bt.length;Rt++){const Dt=bt[Rt];q.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,q.__webglColorRenderbuffer[Rt]);const Ht=u.convert(Dt.format,Dt.colorSpace),Mt=u.convert(Dt.type),Tt=z(Dt.internalFormat,Ht,Mt,Dt.colorSpace,N.isXRRenderTarget===!0),Pt=H(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,Pt,Tt,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,q.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(q.__webglDepthRenderbuffer=o.createRenderbuffer(),zt(q.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ht){i.bindTexture(o.TEXTURE_CUBE_MAP,mt.__webglTexture),tt(o.TEXTURE_CUBE_MAP,M);for(let Rt=0;Rt<6;Rt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Dt=0;Dt<M.mipmaps.length;Dt++)It(q.__webglFramebuffer[Rt][Dt],N,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Dt);else It(q.__webglFramebuffer[Rt],N,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);y(M)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Kt){for(let Rt=0,Dt=bt.length;Rt<Dt;Rt++){const Ht=bt[Rt],Mt=s.get(Ht);let Tt=o.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Tt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Tt,Mt.__webglTexture),tt(Tt,Ht),It(q.__webglFramebuffer,N,Ht,o.COLOR_ATTACHMENT0+Rt,Tt,0),y(Ht)&&v(Tt)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Rt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,mt.__webglTexture),tt(Rt,M),M.mipmaps&&M.mipmaps.length>0)for(let Dt=0;Dt<M.mipmaps.length;Dt++)It(q.__webglFramebuffer[Dt],N,M,o.COLOR_ATTACHMENT0,Rt,Dt);else It(q.__webglFramebuffer,N,M,o.COLOR_ATTACHMENT0,Rt,0);y(M)&&v(Rt),i.unbindTexture()}N.depthBuffer&&ce(N)}function pe(N){const M=N.textures;for(let q=0,mt=M.length;q<mt;q++){const bt=M[q];if(y(bt)){const ht=F(N),Kt=s.get(bt).__webglTexture;i.bindTexture(ht,Kt),v(ht),i.unbindTexture()}}}const Re=[],Ut=[];function Ft(N){if(N.samples>0){if(ie(N)===!1){const M=N.textures,q=N.width,mt=N.height;let bt=o.COLOR_BUFFER_BIT;const ht=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Kt=s.get(N),Rt=M.length>1;if(Rt)for(let Ht=0;Ht<M.length;Ht++)i.bindFramebuffer(o.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ht,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ht,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer);const Dt=N.texture.mipmaps;Dt&&Dt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let Ht=0;Ht<M.length;Ht++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(bt|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(bt|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Kt.__webglColorRenderbuffer[Ht]);const Mt=s.get(M[Ht]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Mt,0)}o.blitFramebuffer(0,0,q,mt,0,0,q,mt,bt,o.NEAREST),m===!0&&(Re.length=0,Ut.length=0,Re.push(o.COLOR_ATTACHMENT0+Ht),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Re.push(ht),Ut.push(ht),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Ut)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Re))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let Ht=0;Ht<M.length;Ht++){i.bindFramebuffer(o.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ht,o.RENDERBUFFER,Kt.__webglColorRenderbuffer[Ht]);const Mt=s.get(M[Ht]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ht,o.TEXTURE_2D,Mt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const M=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function H(N){return Math.min(l.maxSamples,N.samples)}function ie(N){const M=s.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function qt(N){const M=h.render.frame;x.get(N)!==M&&(x.set(N,M),N.update())}function te(N,M){const q=N.colorSpace,mt=N.format,bt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||q!==Gr&&q!==as&&(we.getTransfer(q)===Ve?(mt!==Oi||bt!==ui)&&ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",q)),M}function jt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=j,this.resetTextureUnits=Y,this.setTexture2D=lt,this.setTexture2DArray=U,this.setTexture3D=I,this.setTextureCube=et,this.rebindTextures=qe,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=It,this.useMultisampledRTT=ie,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function oA(o,t){function i(s,l=as){let u;const h=we.getTransfer(l);if(s===ui)return o.UNSIGNED_BYTE;if(s===jd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Wd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===cx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===ux)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===ox)return o.BYTE;if(s===lx)return o.SHORT;if(s===Qo)return o.UNSIGNED_SHORT;if(s===Xd)return o.INT;if(s===Yi)return o.UNSIGNED_INT;if(s===ki)return o.FLOAT;if(s===ba)return o.HALF_FLOAT;if(s===fx)return o.ALPHA;if(s===hx)return o.RGB;if(s===Oi)return o.RGBA;if(s===Ea)return o.DEPTH_COMPONENT;if(s===Os)return o.DEPTH_STENCIL;if(s===dx)return o.RED;if(s===qd)return o.RED_INTEGER;if(s===Hr)return o.RG;if(s===Yd)return o.RG_INTEGER;if(s===Zd)return o.RGBA_INTEGER;if(s===Vc||s===kc||s===Xc||s===jc)if(h===Ve)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Vc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===kc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===jc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Vc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===kc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===jc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ld||s===cd||s===ud||s===fd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===ld)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===cd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ud)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hd||s===dd||s===pd||s===md||s===gd||s===_d||s===xd)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===hd||s===dd)return h===Ve?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===pd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===md)return u.COMPRESSED_R11_EAC;if(s===gd)return u.COMPRESSED_SIGNED_R11_EAC;if(s===_d)return u.COMPRESSED_RG11_EAC;if(s===xd)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===vd||s===Sd||s===yd||s===Md||s===bd||s===Ed||s===Td||s===Ad||s===Rd||s===Cd||s===wd||s===Dd||s===Nd||s===Ud)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===vd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Sd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===yd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Md)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===bd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ed)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Td)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ad)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Rd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Cd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===wd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Dd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Nd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ud)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ld||s===Od||s===Pd)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===Ld)return h===Ve?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Od)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Pd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===zd||s===Fd||s===Id||s===Bd)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===zd)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Fd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Id)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Bd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Jo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const lA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cA=`
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

}`;class uA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Ax(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ki({vertexShader:lA,fragmentShader:cA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Te(new kn(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fA extends Fs{constructor(t,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,x=null,_=null,S=null,b=null,E=null;const C=typeof XRWebGLBinding<"u",y=new uA,v={},F=i.getContextAttributes();let z=null,O=null;const B=[],G=[],P=new de;let K=null;const R=new $n;R.viewport=new an;const D=new $n;D.viewport=new an;const k=[R,D],Y=new SM;let j=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let ft=B[at];return ft===void 0&&(ft=new Fh,B[at]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(at){let ft=B[at];return ft===void 0&&(ft=new Fh,B[at]=ft),ft.getGripSpace()},this.getHand=function(at){let ft=B[at];return ft===void 0&&(ft=new Fh,B[at]=ft),ft.getHandSpace()};function lt(at){const ft=G.indexOf(at.inputSource);if(ft===-1)return;const It=B[ft];It!==void 0&&(It.update(at.inputSource,at.frame,p||h),It.dispatchEvent({type:at.type,data:at.inputSource}))}function U(){l.removeEventListener("select",lt),l.removeEventListener("selectstart",lt),l.removeEventListener("selectend",lt),l.removeEventListener("squeeze",lt),l.removeEventListener("squeezestart",lt),l.removeEventListener("squeezeend",lt),l.removeEventListener("end",U),l.removeEventListener("inputsourceschange",I);for(let at=0;at<B.length;at++){const ft=G[at];ft!==null&&(G[at]=null,B[at].disconnect(ft))}j=null,ot=null,y.reset();for(const at in v)delete v[at];t.setRenderTarget(z),b=null,S=null,_=null,l=null,O=null,Bt.stop(),s.isPresenting=!1,t.setPixelRatio(K),t.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){u=at,s.isPresenting===!0&&ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){d=at,s.isPresenting===!0&&ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(at){p=at},this.getBaseLayer=function(){return S!==null?S:b},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(at){if(l=at,l!==null){if(z=t.getRenderTarget(),l.addEventListener("select",lt),l.addEventListener("selectstart",lt),l.addEventListener("selectend",lt),l.addEventListener("squeeze",lt),l.addEventListener("squeezestart",lt),l.addEventListener("squeezeend",lt),l.addEventListener("end",U),l.addEventListener("inputsourceschange",I),F.xrCompatible!==!0&&await i.makeXRCompatible(),K=t.getPixelRatio(),t.getSize(P),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let It=null,zt=null,Vt=null;F.depth&&(Vt=F.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,It=F.stencil?Os:Ea,zt=F.stencil?Jo:Yi);const ce={colorFormat:i.RGBA8,depthFormat:Vt,scaleFactor:u};_=this.getBinding(),S=_.createProjectionLayer(ce),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),O=new Wi(S.textureWidth,S.textureHeight,{format:Oi,type:ui,depthTexture:new tl(S.textureWidth,S.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,It),stencilBuffer:F.stencil,colorSpace:t.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const It={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:u};b=new XRWebGLLayer(l,i,It),l.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),O=new Wi(b.framebufferWidth,b.framebufferHeight,{format:Oi,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Bt.setContext(l),Bt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function I(at){for(let ft=0;ft<at.removed.length;ft++){const It=at.removed[ft],zt=G.indexOf(It);zt>=0&&(G[zt]=null,B[zt].disconnect(It))}for(let ft=0;ft<at.added.length;ft++){const It=at.added[ft];let zt=G.indexOf(It);if(zt===-1){for(let ce=0;ce<B.length;ce++)if(ce>=G.length){G.push(It),zt=ce;break}else if(G[ce]===null){G[ce]=It,zt=ce;break}if(zt===-1)break}const Vt=B[zt];Vt&&Vt.connect(It)}}const et=new $,Et=new $;function yt(at,ft,It){et.setFromMatrixPosition(ft.matrixWorld),Et.setFromMatrixPosition(It.matrixWorld);const zt=et.distanceTo(Et),Vt=ft.projectionMatrix.elements,ce=It.projectionMatrix.elements,qe=Vt[14]/(Vt[10]-1),ge=Vt[14]/(Vt[10]+1),pe=(Vt[9]+1)/Vt[5],Re=(Vt[9]-1)/Vt[5],Ut=(Vt[8]-1)/Vt[0],Ft=(ce[8]+1)/ce[0],H=qe*Ut,ie=qe*Ft,qt=zt/(-Ut+Ft),te=qt*-Ut;if(ft.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(te),at.translateZ(qt),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Vt[10]===-1)at.projectionMatrix.copy(ft.projectionMatrix),at.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const jt=qe+qt,N=ge+qt,M=H-te,q=ie+(zt-te),mt=pe*ge/N*jt,bt=Re*ge/N*jt;at.projectionMatrix.makePerspective(M,q,mt,bt,jt,N),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function L(at,ft){ft===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(ft.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(l===null)return;let ft=at.near,It=at.far;y.texture!==null&&(y.depthNear>0&&(ft=y.depthNear),y.depthFar>0&&(It=y.depthFar)),Y.near=D.near=R.near=ft,Y.far=D.far=R.far=It,(j!==Y.near||ot!==Y.far)&&(l.updateRenderState({depthNear:Y.near,depthFar:Y.far}),j=Y.near,ot=Y.far),Y.layers.mask=at.layers.mask|6,R.layers.mask=Y.layers.mask&3,D.layers.mask=Y.layers.mask&5;const zt=at.parent,Vt=Y.cameras;L(Y,zt);for(let ce=0;ce<Vt.length;ce++)L(Vt[ce],zt);Vt.length===2?yt(Y,R,D):Y.projectionMatrix.copy(R.projectionMatrix),tt(at,Y,zt)};function tt(at,ft,It){It===null?at.matrix.copy(ft.matrixWorld):(at.matrix.copy(It.matrixWorld),at.matrix.invert(),at.matrix.multiply(ft.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(ft.projectionMatrix),at.projectionMatrixInverse.copy(ft.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=Kc*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(S===null&&b===null))return m},this.setFoveation=function(at){m=at,S!==null&&(S.fixedFoveation=at),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=at)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Y)},this.getCameraTexture=function(at){return v[at]};let dt=null;function vt(at,ft){if(x=ft.getViewerPose(p||h),E=ft,x!==null){const It=x.views;b!==null&&(t.setRenderTargetFramebuffer(O,b.framebuffer),t.setRenderTarget(O));let zt=!1;It.length!==Y.cameras.length&&(Y.cameras.length=0,zt=!0);for(let ge=0;ge<It.length;ge++){const pe=It[ge];let Re=null;if(b!==null)Re=b.getViewport(pe);else{const Ft=_.getViewSubImage(S,pe);Re=Ft.viewport,ge===0&&(t.setRenderTargetTextures(O,Ft.colorTexture,Ft.depthStencilTexture),t.setRenderTarget(O))}let Ut=k[ge];Ut===void 0&&(Ut=new $n,Ut.layers.enable(ge),Ut.viewport=new an,k[ge]=Ut),Ut.matrix.fromArray(pe.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(pe.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(Re.x,Re.y,Re.width,Re.height),ge===0&&(Y.matrix.copy(Ut.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),zt===!0&&Y.cameras.push(Ut)}const Vt=l.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){_=s.getBinding();const ge=_.getDepthInformation(It[0]);ge&&ge.isValid&&ge.texture&&y.init(ge,l.renderState)}if(Vt&&Vt.includes("camera-access")&&C){t.state.unbindTexture(),_=s.getBinding();for(let ge=0;ge<It.length;ge++){const pe=It[ge].camera;if(pe){let Re=v[pe];Re||(Re=new Ax,v[pe]=Re);const Ut=_.getCameraImage(pe);Re.sourceTexture=Ut}}}}for(let It=0;It<B.length;It++){const zt=G[It],Vt=B[It];zt!==null&&Vt!==void 0&&Vt.update(zt,ft,p||h)}dt&&dt(at,ft),ft.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ft}),E=null}const Bt=new Rx;Bt.setAnimationLoop(vt),this.setAnimationLoop=function(at){dt=at},this.dispose=function(){}}}const Ds=new Zi,hA=new tn;function dA(o,t){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,yx(o)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,F,z,O){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(y,v):v.isMeshToonMaterial?(u(y,v),_(y,v)):v.isMeshPhongMaterial?(u(y,v),x(y,v)):v.isMeshStandardMaterial?(u(y,v),S(y,v),v.isMeshPhysicalMaterial&&b(y,v,O)):v.isMeshMatcapMaterial?(u(y,v),E(y,v)):v.isMeshDepthMaterial?u(y,v):v.isMeshDistanceMaterial?(u(y,v),C(y,v)):v.isMeshNormalMaterial?u(y,v):v.isLineBasicMaterial?(h(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?m(y,v,F,z):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===ti&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===ti&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const F=t.get(v),z=F.envMap,O=F.envMapRotation;z&&(y.envMap.value=z,Ds.copy(O),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),y.envMapRotation.value.setFromMatrix4(hA.makeRotationFromEuler(Ds)),y.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function h(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,F,z){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*F,y.scale.value=z*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function x(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function S(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function b(y,v,F){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===ti&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=F.texture,y.transmissionSamplerSize.value.set(F.width,F.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,v){v.matcap&&(y.matcap.value=v.matcap)}function C(y,v){const F=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(F.matrixWorld),y.nearDistance.value=F.shadow.camera.near,y.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function pA(o,t,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(F,z){const O=z.program;s.uniformBlockBinding(F,O)}function p(F,z){let O=l[F.id];O===void 0&&(E(F),O=x(F),l[F.id]=O,F.addEventListener("dispose",y));const B=z.program;s.updateUBOMapping(F,B);const G=t.render.frame;u[F.id]!==G&&(S(F),u[F.id]=G)}function x(F){const z=_();F.__bindingPointIndex=z;const O=o.createBuffer(),B=F.__size,G=F.usage;return o.bindBuffer(o.UNIFORM_BUFFER,O),o.bufferData(o.UNIFORM_BUFFER,B,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,z,O),O}function _(){for(let F=0;F<d;F++)if(h.indexOf(F)===-1)return h.push(F),F;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(F){const z=l[F.id],O=F.uniforms,B=F.__cache;o.bindBuffer(o.UNIFORM_BUFFER,z);for(let G=0,P=O.length;G<P;G++){const K=Array.isArray(O[G])?O[G]:[O[G]];for(let R=0,D=K.length;R<D;R++){const k=K[R];if(b(k,G,R,B)===!0){const Y=k.__offset,j=Array.isArray(k.value)?k.value:[k.value];let ot=0;for(let lt=0;lt<j.length;lt++){const U=j[lt],I=C(U);typeof U=="number"||typeof U=="boolean"?(k.__data[0]=U,o.bufferSubData(o.UNIFORM_BUFFER,Y+ot,k.__data)):U.isMatrix3?(k.__data[0]=U.elements[0],k.__data[1]=U.elements[1],k.__data[2]=U.elements[2],k.__data[3]=0,k.__data[4]=U.elements[3],k.__data[5]=U.elements[4],k.__data[6]=U.elements[5],k.__data[7]=0,k.__data[8]=U.elements[6],k.__data[9]=U.elements[7],k.__data[10]=U.elements[8],k.__data[11]=0):(U.toArray(k.__data,ot),ot+=I.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Y,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function b(F,z,O,B){const G=F.value,P=z+"_"+O;if(B[P]===void 0)return typeof G=="number"||typeof G=="boolean"?B[P]=G:B[P]=G.clone(),!0;{const K=B[P];if(typeof G=="number"||typeof G=="boolean"){if(K!==G)return B[P]=G,!0}else if(K.equals(G)===!1)return K.copy(G),!0}return!1}function E(F){const z=F.uniforms;let O=0;const B=16;for(let P=0,K=z.length;P<K;P++){const R=Array.isArray(z[P])?z[P]:[z[P]];for(let D=0,k=R.length;D<k;D++){const Y=R[D],j=Array.isArray(Y.value)?Y.value:[Y.value];for(let ot=0,lt=j.length;ot<lt;ot++){const U=j[ot],I=C(U),et=O%B,Et=et%I.boundary,yt=et+Et;O+=Et,yt!==0&&B-yt<I.storage&&(O+=B-yt),Y.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=O,O+=I.storage}}}const G=O%B;return G>0&&(O+=B-G),F.__size=O,F.__cache={},this}function C(F){const z={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(z.boundary=4,z.storage=4):F.isVector2?(z.boundary=8,z.storage=8):F.isVector3||F.isColor?(z.boundary=16,z.storage=12):F.isVector4?(z.boundary=16,z.storage=16):F.isMatrix3?(z.boundary=48,z.storage=48):F.isMatrix4?(z.boundary=64,z.storage=64):F.isTexture?ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ue("WebGLRenderer: Unsupported uniform value type.",F),z}function y(F){const z=F.target;z.removeEventListener("dispose",y);const O=h.indexOf(z.__bindingPointIndex);h.splice(O,1),o.deleteBuffer(l[z.id]),delete l[z.id],delete u[z.id]}function v(){for(const F in l)o.deleteBuffer(l[F]);h=[],l={},u={}}return{bind:m,update:p,dispose:v}}const mA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function gA(){return Hi===null&&(Hi=new eM(mA,16,16,Hr,ba),Hi.name="DFG_LUT",Hi.minFilter=Bn,Hi.magFilter=Bn,Hi.wrapS=Sa,Hi.wrapT=Sa,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class _A{constructor(t={}){const{canvas:i=Ry(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1,outputBufferType:b=ui}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=h;const C=b,y=new Set([Zd,Yd,qd]),v=new Set([ui,Yi,Qo,Jo,jd,Wd]),F=new Uint32Array(4),z=new Int32Array(4);let O=null,B=null;const G=[],P=[];let K=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1;this._outputColorSpace=Mi;let k=0,Y=0,j=null,ot=-1,lt=null;const U=new an,I=new an;let et=null;const Et=new De(0);let yt=0,L=i.width,tt=i.height,dt=1,vt=null,Bt=null;const at=new an(0,0,L,tt),ft=new an(0,0,L,tt);let It=!1;const zt=new ep;let Vt=!1,ce=!1;const qe=new tn,ge=new $,pe=new an,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function Ft(){return j===null?dt:1}let H=s;function ie(A,Z){return i.getContext(A,Z)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${kd}`),i.addEventListener("webglcontextlost",le,!1),i.addEventListener("webglcontextrestored",Ie,!1),i.addEventListener("webglcontextcreationerror",Ce,!1),H===null){const Z="webgl2";if(H=ie(Z,A),H===null)throw ie(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Le("WebGLRenderer: "+A.message),A}let qt,te,jt,N,M,q,mt,bt,ht,Kt,Rt,Dt,Ht,Mt,Tt,Pt,Lt,Ct,ae,X,wt,At,Ot,_t;function pt(){qt=new gT(H),qt.init(),At=new oA(H,qt),te=new oT(H,qt,t,At),jt=new sA(H,qt),te.reversedDepthBuffer&&S&&jt.buffers.depth.setReversed(!0),N=new vT(H),M=new X1,q=new rA(H,qt,jt,M,te,At,N),mt=new cT(R),bt=new mT(R),ht=new bM(H),Ot=new sT(H,ht),Kt=new _T(H,ht,N,Ot),Rt=new yT(H,Kt,ht,N),ae=new ST(H,te,q),Pt=new lT(M),Dt=new k1(R,mt,bt,qt,te,Ot,Pt),Ht=new dA(R,M),Mt=new W1,Tt=new J1(qt),Ct=new aT(R,mt,bt,jt,Rt,E,m),Lt=new iA(R,Rt,te),_t=new pA(H,N,te,jt),X=new rT(H,qt,N),wt=new xT(H,qt,N),N.programs=Dt.programs,R.capabilities=te,R.extensions=qt,R.properties=M,R.renderLists=Mt,R.shadowMap=Lt,R.state=jt,R.info=N}pt(),C!==ui&&(K=new bT(C,i.width,i.height,l,u));const Nt=new fA(R,H);this.xr=Nt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=qt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=qt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return dt},this.setPixelRatio=function(A){A!==void 0&&(dt=A,this.setSize(L,tt,!1))},this.getSize=function(A){return A.set(L,tt)},this.setSize=function(A,Z,ct=!0){if(Nt.isPresenting){ue("WebGLRenderer: Can't change size while VR device is presenting.");return}L=A,tt=Z,i.width=Math.floor(A*dt),i.height=Math.floor(Z*dt),ct===!0&&(i.style.width=A+"px",i.style.height=Z+"px"),K!==null&&K.setSize(i.width,i.height),this.setViewport(0,0,A,Z)},this.getDrawingBufferSize=function(A){return A.set(L*dt,tt*dt).floor()},this.setDrawingBufferSize=function(A,Z,ct){L=A,tt=Z,dt=ct,i.width=Math.floor(A*ct),i.height=Math.floor(Z*ct),this.setViewport(0,0,A,Z)},this.setEffects=function(A){if(C===ui){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Z=0;Z<A.length;Z++)if(A[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}K.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy(at)},this.setViewport=function(A,Z,ct,st){A.isVector4?at.set(A.x,A.y,A.z,A.w):at.set(A,Z,ct,st),jt.viewport(U.copy(at).multiplyScalar(dt).round())},this.getScissor=function(A){return A.copy(ft)},this.setScissor=function(A,Z,ct,st){A.isVector4?ft.set(A.x,A.y,A.z,A.w):ft.set(A,Z,ct,st),jt.scissor(I.copy(ft).multiplyScalar(dt).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(A){jt.setScissorTest(It=A)},this.setOpaqueSort=function(A){vt=A},this.setTransparentSort=function(A){Bt=A},this.getClearColor=function(A){return A.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(A=!0,Z=!0,ct=!0){let st=0;if(A){let J=!1;if(j!==null){const Gt=j.texture.format;J=y.has(Gt)}if(J){const Gt=j.texture.type,Wt=v.has(Gt),kt=Ct.getClearColor(),Yt=Ct.getClearAlpha(),Qt=kt.r,se=kt.g,Jt=kt.b;Wt?(F[0]=Qt,F[1]=se,F[2]=Jt,F[3]=Yt,H.clearBufferuiv(H.COLOR,0,F)):(z[0]=Qt,z[1]=se,z[2]=Jt,z[3]=Yt,H.clearBufferiv(H.COLOR,0,z))}else st|=H.COLOR_BUFFER_BIT}Z&&(st|=H.DEPTH_BUFFER_BIT),ct&&(st|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",le,!1),i.removeEventListener("webglcontextrestored",Ie,!1),i.removeEventListener("webglcontextcreationerror",Ce,!1),Ct.dispose(),Mt.dispose(),Tt.dispose(),M.dispose(),mt.dispose(),bt.dispose(),Rt.dispose(),Ot.dispose(),_t.dispose(),Dt.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",Bs),Nt.removeEventListener("sessionend",qr),Pi.stop()};function le(A){A.preventDefault(),e_("WebGLRenderer: Context Lost."),D=!0}function Ie(){e_("WebGLRenderer: Context Restored."),D=!1;const A=N.autoReset,Z=Lt.enabled,ct=Lt.autoUpdate,st=Lt.needsUpdate,J=Lt.type;pt(),N.autoReset=A,Lt.enabled=Z,Lt.autoUpdate=ct,Lt.needsUpdate=st,Lt.type=J}function Ce(A){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Pn(A){const Z=A.target;Z.removeEventListener("dispose",Pn),Ti(Z)}function Ti(A){il(A),M.remove(A)}function il(A){const Z=M.get(A).programs;Z!==void 0&&(Z.forEach(function(ct){Dt.releaseProgram(ct)}),A.isShaderMaterial&&Dt.releaseShaderCache(A))}this.renderBufferDirect=function(A,Z,ct,st,J,Gt){Z===null&&(Z=Re);const Wt=J.isMesh&&J.matrixWorld.determinant()<0,kt=os(A,Z,ct,st,J);jt.setMaterial(st,Wt);let Yt=ct.index,Qt=1;if(st.wireframe===!0){if(Yt=Kt.getWireframeAttribute(ct),Yt===void 0)return;Qt=2}const se=ct.drawRange,Jt=ct.attributes.position;let re=se.start*Qt,Oe=(se.start+se.count)*Qt;Gt!==null&&(re=Math.max(re,Gt.start*Qt),Oe=Math.min(Oe,(Gt.start+Gt.count)*Qt)),Yt!==null?(re=Math.max(re,0),Oe=Math.min(Oe,Yt.count)):Jt!=null&&(re=Math.max(re,0),Oe=Math.min(Oe,Jt.count));const Je=Oe-re;if(Je<0||Je===1/0)return;Ot.setup(J,st,kt,ct,Yt);let Ze,Fe=X;if(Yt!==null&&(Ze=ht.get(Yt),Fe=wt,Fe.setIndex(Ze)),J.isMesh)st.wireframe===!0?(jt.setLineWidth(st.wireframeLinewidth*Ft()),Fe.setMode(H.LINES)):Fe.setMode(H.TRIANGLES);else if(J.isLine){let ee=st.linewidth;ee===void 0&&(ee=1),jt.setLineWidth(ee*Ft()),J.isLineSegments?Fe.setMode(H.LINES):J.isLineLoop?Fe.setMode(H.LINE_LOOP):Fe.setMode(H.LINE_STRIP)}else J.isPoints?Fe.setMode(H.POINTS):J.isSprite&&Fe.setMode(H.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)$o("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Fe.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(qt.get("WEBGL_multi_draw"))Fe.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const ee=J._multiDrawStarts,Pe=J._multiDrawCounts,fe=J._multiDrawCount,Tn=Yt?ht.get(Yt).bytesPerElement:1,Qi=M.get(st).currentProgram.getUniforms();for(let An=0;An<fe;An++)Qi.setValue(H,"_gl_DrawID",An),Fe.render(ee[An]/Tn,Pe[An])}else if(J.isInstancedMesh)Fe.renderInstances(re,Je,J.count);else if(ct.isInstancedBufferGeometry){const ee=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Pe=Math.min(ct.instanceCount,ee);Fe.renderInstances(re,Je,Pe)}else Fe.render(re,Je)};function jr(A,Z,ct){A.transparent===!0&&A.side===Vi&&A.forceSinglePass===!1?(A.side=ti,A.needsUpdate=!0,Gs(A,Z,ct),A.side=rs,A.needsUpdate=!0,Gs(A,Z,ct),A.side=Vi):Gs(A,Z,ct)}this.compile=function(A,Z,ct=null){ct===null&&(ct=A),B=Tt.get(ct),B.init(Z),P.push(B),ct.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(B.pushLight(J),J.castShadow&&B.pushShadow(J))}),A!==ct&&A.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(B.pushLight(J),J.castShadow&&B.pushShadow(J))}),B.setupLights();const st=new Set;return A.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Gt=J.material;if(Gt)if(Array.isArray(Gt))for(let Wt=0;Wt<Gt.length;Wt++){const kt=Gt[Wt];jr(kt,ct,J),st.add(kt)}else jr(Gt,ct,J),st.add(Gt)}),B=P.pop(),st},this.compileAsync=function(A,Z,ct=null){const st=this.compile(A,Z,ct);return new Promise(J=>{function Gt(){if(st.forEach(function(Wt){M.get(Wt).currentProgram.isReady()&&st.delete(Wt)}),st.size===0){J(A);return}setTimeout(Gt,10)}qt.get("KHR_parallel_shader_compile")!==null?Gt():setTimeout(Gt,10)})};let Is=null;function Wr(A){Is&&Is(A)}function Bs(){Pi.stop()}function qr(){Pi.start()}const Pi=new Rx;Pi.setAnimationLoop(Wr),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(A){Is=A,Nt.setAnimationLoop(A),A===null?Pi.stop():Pi.start()},Nt.addEventListener("sessionstart",Bs),Nt.addEventListener("sessionend",qr),this.render=function(A,Z){if(Z!==void 0&&Z.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const ct=Nt.enabled===!0&&Nt.isPresenting===!0,st=K!==null&&(j===null||ct)&&K.begin(R,j);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(K===null||K.isCompositing()===!1)&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(Z),Z=Nt.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,Z,j),B=Tt.get(A,P.length),B.init(Z),P.push(B),qe.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),zt.setFromProjectionMatrix(qe,Xi,Z.reversedDepth),ce=this.localClippingEnabled,Vt=Pt.init(this.clippingPlanes,ce),O=Mt.get(A,G.length),O.init(),G.push(O),Nt.enabled===!0&&Nt.isPresenting===!0){const Wt=R.xr.getDepthSensingMesh();Wt!==null&&fi(Wt,Z,-1/0,R.sortObjects)}fi(A,Z,0,R.sortObjects),O.finish(),R.sortObjects===!0&&O.sort(vt,Bt),Ut=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,Ut&&Ct.addToRenderList(O,A),this.info.render.frame++,Vt===!0&&Pt.beginShadows();const J=B.state.shadowsArray;if(Lt.render(J,A,Z),Vt===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(st&&K.hasRenderPass())===!1){const Wt=O.opaque,kt=O.transmissive;if(B.setupLights(),Z.isArrayCamera){const Yt=Z.cameras;if(kt.length>0)for(let Qt=0,se=Yt.length;Qt<se;Qt++){const Jt=Yt[Qt];En(Wt,kt,A,Jt)}Ut&&Ct.render(A);for(let Qt=0,se=Yt.length;Qt<se;Qt++){const Jt=Yt[Qt];on(O,A,Jt,Jt.viewport)}}else kt.length>0&&En(Wt,kt,A,Z),Ut&&Ct.render(A),on(O,A,Z)}j!==null&&Y===0&&(q.updateMultisampleRenderTarget(j),q.updateRenderTargetMipmap(j)),st&&K.end(R),A.isScene===!0&&A.onAfterRender(R,A,Z),Ot.resetDefaultState(),ot=-1,lt=null,P.pop(),P.length>0?(B=P[P.length-1],Vt===!0&&Pt.setGlobalState(R.clippingPlanes,B.state.camera)):B=null,G.pop(),G.length>0?O=G[G.length-1]:O=null};function fi(A,Z,ct,st){if(A.visible===!1)return;if(A.layers.test(Z.layers)){if(A.isGroup)ct=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Z);else if(A.isLight)B.pushLight(A),A.castShadow&&B.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||zt.intersectsSprite(A)){st&&pe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(qe);const Wt=Rt.update(A),kt=A.material;kt.visible&&O.push(A,Wt,kt,ct,pe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||zt.intersectsObject(A))){const Wt=Rt.update(A),kt=A.material;if(st&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),pe.copy(A.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),pe.copy(Wt.boundingSphere.center)),pe.applyMatrix4(A.matrixWorld).applyMatrix4(qe)),Array.isArray(kt)){const Yt=Wt.groups;for(let Qt=0,se=Yt.length;Qt<se;Qt++){const Jt=Yt[Qt],re=kt[Jt.materialIndex];re&&re.visible&&O.push(A,Wt,re,ct,pe.z,Jt)}}else kt.visible&&O.push(A,Wt,kt,ct,pe.z,null)}}const Gt=A.children;for(let Wt=0,kt=Gt.length;Wt<kt;Wt++)fi(Gt[Wt],Z,ct,st)}function on(A,Z,ct,st){const{opaque:J,transmissive:Gt,transparent:Wt}=A;B.setupLightsView(ct),Vt===!0&&Pt.setGlobalState(R.clippingPlanes,ct),st&&jt.viewport(U.copy(st)),J.length>0&&Ai(J,Z,ct),Gt.length>0&&Ai(Gt,Z,ct),Wt.length>0&&Ai(Wt,Z,ct),jt.buffers.depth.setTest(!0),jt.buffers.depth.setMask(!0),jt.buffers.color.setMask(!0),jt.setPolygonOffset(!1)}function En(A,Z,ct,st){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[st.id]===void 0){const re=qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[st.id]=new Wi(1,1,{generateMipmaps:!0,type:re?ba:ui,minFilter:Ls,samples:te.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace})}const Gt=B.state.transmissionRenderTarget[st.id],Wt=st.viewport||U;Gt.setSize(Wt.z*R.transmissionResolutionScale,Wt.w*R.transmissionResolutionScale);const kt=R.getRenderTarget(),Yt=R.getActiveCubeFace(),Qt=R.getActiveMipmapLevel();R.setRenderTarget(Gt),R.getClearColor(Et),yt=R.getClearAlpha(),yt<1&&R.setClearColor(16777215,.5),R.clear(),Ut&&Ct.render(ct);const se=R.toneMapping;R.toneMapping=ji;const Jt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),B.setupLightsView(st),Vt===!0&&Pt.setGlobalState(R.clippingPlanes,st),Ai(A,ct,st),q.updateMultisampleRenderTarget(Gt),q.updateRenderTargetMipmap(Gt),qt.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let Oe=0,Je=Z.length;Oe<Je;Oe++){const Ze=Z[Oe],{object:Fe,geometry:ee,material:Pe,group:fe}=Ze;if(Pe.side===Vi&&Fe.layers.test(st.layers)){const Tn=Pe.side;Pe.side=ti,Pe.needsUpdate=!0,Hs(Fe,ct,st,ee,Pe,fe),Pe.side=Tn,Pe.needsUpdate=!0,re=!0}}re===!0&&(q.updateMultisampleRenderTarget(Gt),q.updateRenderTargetMipmap(Gt))}R.setRenderTarget(kt,Yt,Qt),R.setClearColor(Et,yt),Jt!==void 0&&(st.viewport=Jt),R.toneMapping=se}function Ai(A,Z,ct){const st=Z.isScene===!0?Z.overrideMaterial:null;for(let J=0,Gt=A.length;J<Gt;J++){const Wt=A[J],{object:kt,geometry:Yt,group:Qt}=Wt;let se=Wt.material;se.allowOverride===!0&&st!==null&&(se=st),kt.layers.test(ct.layers)&&Hs(kt,Z,ct,Yt,se,Qt)}}function Hs(A,Z,ct,st,J,Gt){A.onBeforeRender(R,Z,ct,st,J,Gt),A.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(R,Z,ct,st,A,Gt),J.transparent===!0&&J.side===Vi&&J.forceSinglePass===!1?(J.side=ti,J.needsUpdate=!0,R.renderBufferDirect(ct,Z,st,J,A,Gt),J.side=rs,J.needsUpdate=!0,R.renderBufferDirect(ct,Z,st,J,A,Gt),J.side=Vi):R.renderBufferDirect(ct,Z,st,J,A,Gt),A.onAfterRender(R,Z,ct,st,J,Gt)}function Gs(A,Z,ct){Z.isScene!==!0&&(Z=Re);const st=M.get(A),J=B.state.lights,Gt=B.state.shadowsArray,Wt=J.state.version,kt=Dt.getParameters(A,J.state,Gt,Z,ct),Yt=Dt.getProgramCacheKey(kt);let Qt=st.programs;st.environment=A.isMeshStandardMaterial?Z.environment:null,st.fog=Z.fog,st.envMap=(A.isMeshStandardMaterial?bt:mt).get(A.envMap||st.environment),st.envMapRotation=st.environment!==null&&A.envMap===null?Z.environmentRotation:A.envMapRotation,Qt===void 0&&(A.addEventListener("dispose",Pn),Qt=new Map,st.programs=Qt);let se=Qt.get(Yt);if(se!==void 0){if(st.currentProgram===se&&st.lightsStateVersion===Wt)return Yr(A,kt),se}else kt.uniforms=Dt.getUniforms(A),A.onBeforeCompile(kt,R),se=Dt.acquireProgram(kt,Yt),Qt.set(Yt,se),st.uniforms=kt.uniforms;const Jt=st.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Jt.clippingPlanes=Pt.uniform),Yr(A,kt),st.needsLights=Ta(A),st.lightsStateVersion=Wt,st.needsLights&&(Jt.ambientLightColor.value=J.state.ambient,Jt.lightProbe.value=J.state.probe,Jt.directionalLights.value=J.state.directional,Jt.directionalLightShadows.value=J.state.directionalShadow,Jt.spotLights.value=J.state.spot,Jt.spotLightShadows.value=J.state.spotShadow,Jt.rectAreaLights.value=J.state.rectArea,Jt.ltc_1.value=J.state.rectAreaLTC1,Jt.ltc_2.value=J.state.rectAreaLTC2,Jt.pointLights.value=J.state.point,Jt.pointLightShadows.value=J.state.pointShadow,Jt.hemisphereLights.value=J.state.hemi,Jt.directionalShadowMap.value=J.state.directionalShadowMap,Jt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Jt.spotShadowMap.value=J.state.spotShadowMap,Jt.spotLightMatrix.value=J.state.spotLightMatrix,Jt.spotLightMap.value=J.state.spotLightMap,Jt.pointShadowMap.value=J.state.pointShadowMap,Jt.pointShadowMatrix.value=J.state.pointShadowMatrix),st.currentProgram=se,st.uniformsList=null,se}function al(A){if(A.uniformsList===null){const Z=A.currentProgram.getUniforms();A.uniformsList=Wc.seqWithValue(Z.seq,A.uniforms)}return A.uniformsList}function Yr(A,Z){const ct=M.get(A);ct.outputColorSpace=Z.outputColorSpace,ct.batching=Z.batching,ct.batchingColor=Z.batchingColor,ct.instancing=Z.instancing,ct.instancingColor=Z.instancingColor,ct.instancingMorph=Z.instancingMorph,ct.skinning=Z.skinning,ct.morphTargets=Z.morphTargets,ct.morphNormals=Z.morphNormals,ct.morphColors=Z.morphColors,ct.morphTargetsCount=Z.morphTargetsCount,ct.numClippingPlanes=Z.numClippingPlanes,ct.numIntersection=Z.numClipIntersection,ct.vertexAlphas=Z.vertexAlphas,ct.vertexTangents=Z.vertexTangents,ct.toneMapping=Z.toneMapping}function os(A,Z,ct,st,J){Z.isScene!==!0&&(Z=Re),q.resetTextureUnits();const Gt=Z.fog,Wt=st.isMeshStandardMaterial?Z.environment:null,kt=j===null?R.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Gr,Yt=(st.isMeshStandardMaterial?bt:mt).get(st.envMap||Wt),Qt=st.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,se=!!ct.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Jt=!!ct.morphAttributes.position,re=!!ct.morphAttributes.normal,Oe=!!ct.morphAttributes.color;let Je=ji;st.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Je=R.toneMapping);const Ze=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Fe=Ze!==void 0?Ze.length:0,ee=M.get(st),Pe=B.state.lights;if(Vt===!0&&(ce===!0||A!==lt)){const Cn=A===lt&&st.id===ot;Pt.setState(st,A,Cn)}let fe=!1;st.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==Pe.state.version||ee.outputColorSpace!==kt||J.isBatchedMesh&&ee.batching===!1||!J.isBatchedMesh&&ee.batching===!0||J.isBatchedMesh&&ee.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&ee.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&ee.instancing===!1||!J.isInstancedMesh&&ee.instancing===!0||J.isSkinnedMesh&&ee.skinning===!1||!J.isSkinnedMesh&&ee.skinning===!0||J.isInstancedMesh&&ee.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&ee.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&ee.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&ee.instancingMorph===!1&&J.morphTexture!==null||ee.envMap!==Yt||st.fog===!0&&ee.fog!==Gt||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==Pt.numPlanes||ee.numIntersection!==Pt.numIntersection)||ee.vertexAlphas!==Qt||ee.vertexTangents!==se||ee.morphTargets!==Jt||ee.morphNormals!==re||ee.morphColors!==Oe||ee.toneMapping!==Je||ee.morphTargetsCount!==Fe)&&(fe=!0):(fe=!0,ee.__version=st.version);let Tn=ee.currentProgram;fe===!0&&(Tn=Gs(st,Z,J));let Qi=!1,An=!1,hi=!1;const Be=Tn.getUniforms(),Rn=ee.uniforms;if(jt.useProgram(Tn.program)&&(Qi=!0,An=!0,hi=!0),st.id!==ot&&(ot=st.id,An=!0),Qi||lt!==A){jt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Be.setValue(H,"projectionMatrix",A.projectionMatrix),Be.setValue(H,"viewMatrix",A.matrixWorldInverse);const wn=Be.map.cameraPosition;wn!==void 0&&wn.setValue(H,ge.setFromMatrixPosition(A.matrixWorld)),te.logarithmicDepthBuffer&&Be.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Be.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),lt!==A&&(lt=A,An=!0,hi=!0)}if(ee.needsLights&&(Pe.state.directionalShadowMap.length>0&&Be.setValue(H,"directionalShadowMap",Pe.state.directionalShadowMap,q),Pe.state.spotShadowMap.length>0&&Be.setValue(H,"spotShadowMap",Pe.state.spotShadowMap,q),Pe.state.pointShadowMap.length>0&&Be.setValue(H,"pointShadowMap",Pe.state.pointShadowMap,q)),J.isSkinnedMesh){Be.setOptional(H,J,"bindMatrix"),Be.setOptional(H,J,"bindMatrixInverse");const Cn=J.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Be.setValue(H,"boneTexture",Cn.boneTexture,q))}J.isBatchedMesh&&(Be.setOptional(H,J,"batchingTexture"),Be.setValue(H,"batchingTexture",J._matricesTexture,q),Be.setOptional(H,J,"batchingIdTexture"),Be.setValue(H,"batchingIdTexture",J._indirectTexture,q),Be.setOptional(H,J,"batchingColorTexture"),J._colorsTexture!==null&&Be.setValue(H,"batchingColorTexture",J._colorsTexture,q));const pn=ct.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&ae.update(J,ct,Tn),(An||ee.receiveShadow!==J.receiveShadow)&&(ee.receiveShadow=J.receiveShadow,Be.setValue(H,"receiveShadow",J.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Rn.envMap.value=Yt,Rn.flipEnvMap.value=Yt.isCubeTexture&&Yt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&Z.environment!==null&&(Rn.envMapIntensity.value=Z.environmentIntensity),Rn.dfgLUT!==void 0&&(Rn.dfgLUT.value=gA()),An&&(Be.setValue(H,"toneMappingExposure",R.toneMappingExposure),ee.needsLights&&Zr(Rn,hi),Gt&&st.fog===!0&&Ht.refreshFogUniforms(Rn,Gt),Ht.refreshMaterialUniforms(Rn,st,dt,tt,B.state.transmissionRenderTarget[A.id]),Wc.upload(H,al(ee),Rn,q)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Wc.upload(H,al(ee),Rn,q),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Be.setValue(H,"center",J.center),Be.setValue(H,"modelViewMatrix",J.modelViewMatrix),Be.setValue(H,"normalMatrix",J.normalMatrix),Be.setValue(H,"modelMatrix",J.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Cn=st.uniformsGroups;for(let wn=0,Vs=Cn.length;wn<Vs;wn++){const Ri=Cn[wn];_t.update(Ri,Tn),_t.bind(Ri,Tn)}}return Tn}function Zr(A,Z){A.ambientLightColor.needsUpdate=Z,A.lightProbe.needsUpdate=Z,A.directionalLights.needsUpdate=Z,A.directionalLightShadows.needsUpdate=Z,A.pointLights.needsUpdate=Z,A.pointLightShadows.needsUpdate=Z,A.spotLights.needsUpdate=Z,A.spotLightShadows.needsUpdate=Z,A.rectAreaLights.needsUpdate=Z,A.hemisphereLights.needsUpdate=Z}function Ta(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,Z,ct){const st=M.get(A);st.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),M.get(A.texture).__webglTexture=Z,M.get(A.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:ct,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Z){const ct=M.get(A);ct.__webglFramebuffer=Z,ct.__useDefaultFramebuffer=Z===void 0};const Aa=H.createFramebuffer();this.setRenderTarget=function(A,Z=0,ct=0){j=A,k=Z,Y=ct;let st=null,J=!1,Gt=!1;if(A){const kt=M.get(A);if(kt.__useDefaultFramebuffer!==void 0){jt.bindFramebuffer(H.FRAMEBUFFER,kt.__webglFramebuffer),U.copy(A.viewport),I.copy(A.scissor),et=A.scissorTest,jt.viewport(U),jt.scissor(I),jt.setScissorTest(et),ot=-1;return}else if(kt.__webglFramebuffer===void 0)q.setupRenderTarget(A);else if(kt.__hasExternalTextures)q.rebindTextures(A,M.get(A.texture).__webglTexture,M.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const se=A.depthTexture;if(kt.__boundDepthTexture!==se){if(se!==null&&M.has(se)&&(A.width!==se.image.width||A.height!==se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(A)}}const Yt=A.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Gt=!0);const Qt=M.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qt[Z])?st=Qt[Z][ct]:st=Qt[Z],J=!0):A.samples>0&&q.useMultisampledRTT(A)===!1?st=M.get(A).__webglMultisampledFramebuffer:Array.isArray(Qt)?st=Qt[ct]:st=Qt,U.copy(A.viewport),I.copy(A.scissor),et=A.scissorTest}else U.copy(at).multiplyScalar(dt).floor(),I.copy(ft).multiplyScalar(dt).floor(),et=It;if(ct!==0&&(st=Aa),jt.bindFramebuffer(H.FRAMEBUFFER,st)&&jt.drawBuffers(A,st),jt.viewport(U),jt.scissor(I),jt.setScissorTest(et),J){const kt=M.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Z,kt.__webglTexture,ct)}else if(Gt){const kt=Z;for(let Yt=0;Yt<A.textures.length;Yt++){const Qt=M.get(A.textures[Yt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Yt,Qt.__webglTexture,ct,kt)}}else if(A!==null&&ct!==0){const kt=M.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,kt.__webglTexture,ct)}ot=-1},this.readRenderTargetPixels=function(A,Z,ct,st,J,Gt,Wt,kt=0){if(!(A&&A.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Wt!==void 0&&(Yt=Yt[Wt]),Yt){jt.bindFramebuffer(H.FRAMEBUFFER,Yt);try{const Qt=A.textures[kt],se=Qt.format,Jt=Qt.type;if(!te.textureFormatReadable(se)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Jt)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=A.width-st&&ct>=0&&ct<=A.height-J&&(A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+kt),H.readPixels(Z,ct,st,J,At.convert(se),At.convert(Jt),Gt))}finally{const Qt=j!==null?M.get(j).__webglFramebuffer:null;jt.bindFramebuffer(H.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(A,Z,ct,st,J,Gt,Wt,kt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Wt!==void 0&&(Yt=Yt[Wt]),Yt)if(Z>=0&&Z<=A.width-st&&ct>=0&&ct<=A.height-J){jt.bindFramebuffer(H.FRAMEBUFFER,Yt);const Qt=A.textures[kt],se=Qt.format,Jt=Qt.type;if(!te.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const re=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,re),H.bufferData(H.PIXEL_PACK_BUFFER,Gt.byteLength,H.STREAM_READ),A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+kt),H.readPixels(Z,ct,st,J,At.convert(se),At.convert(Jt),0);const Oe=j!==null?M.get(j).__webglFramebuffer:null;jt.bindFramebuffer(H.FRAMEBUFFER,Oe);const Je=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Cy(H,Je,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,re),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Gt),H.deleteBuffer(re),H.deleteSync(Je),Gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Z=null,ct=0){const st=Math.pow(2,-ct),J=Math.floor(A.image.width*st),Gt=Math.floor(A.image.height*st),Wt=Z!==null?Z.x:0,kt=Z!==null?Z.y:0;q.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,ct,0,0,Wt,kt,J,Gt),jt.unbindTexture()};const ls=H.createFramebuffer(),Ra=H.createFramebuffer();this.copyTextureToTexture=function(A,Z,ct=null,st=null,J=0,Gt=null){Gt===null&&(J!==0?($o("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Gt=J,J=0):Gt=0);let Wt,kt,Yt,Qt,se,Jt,re,Oe,Je;const Ze=A.isCompressedTexture?A.mipmaps[Gt]:A.image;if(ct!==null)Wt=ct.max.x-ct.min.x,kt=ct.max.y-ct.min.y,Yt=ct.isBox3?ct.max.z-ct.min.z:1,Qt=ct.min.x,se=ct.min.y,Jt=ct.isBox3?ct.min.z:0;else{const pn=Math.pow(2,-J);Wt=Math.floor(Ze.width*pn),kt=Math.floor(Ze.height*pn),A.isDataArrayTexture?Yt=Ze.depth:A.isData3DTexture?Yt=Math.floor(Ze.depth*pn):Yt=1,Qt=0,se=0,Jt=0}st!==null?(re=st.x,Oe=st.y,Je=st.z):(re=0,Oe=0,Je=0);const Fe=At.convert(Z.format),ee=At.convert(Z.type);let Pe;Z.isData3DTexture?(q.setTexture3D(Z,0),Pe=H.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(q.setTexture2DArray(Z,0),Pe=H.TEXTURE_2D_ARRAY):(q.setTexture2D(Z,0),Pe=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Z.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Z.unpackAlignment);const fe=H.getParameter(H.UNPACK_ROW_LENGTH),Tn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Qi=H.getParameter(H.UNPACK_SKIP_PIXELS),An=H.getParameter(H.UNPACK_SKIP_ROWS),hi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ze.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ze.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Qt),H.pixelStorei(H.UNPACK_SKIP_ROWS,se),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Jt);const Be=A.isDataArrayTexture||A.isData3DTexture,Rn=Z.isDataArrayTexture||Z.isData3DTexture;if(A.isDepthTexture){const pn=M.get(A),Cn=M.get(Z),wn=M.get(pn.__renderTarget),Vs=M.get(Cn.__renderTarget);jt.bindFramebuffer(H.READ_FRAMEBUFFER,wn.__webglFramebuffer),jt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Vs.__webglFramebuffer);for(let Ri=0;Ri<Yt;Ri++)Be&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,M.get(A).__webglTexture,J,Jt+Ri),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,M.get(Z).__webglTexture,Gt,Je+Ri)),H.blitFramebuffer(Qt,se,Wt,kt,re,Oe,Wt,kt,H.DEPTH_BUFFER_BIT,H.NEAREST);jt.bindFramebuffer(H.READ_FRAMEBUFFER,null),jt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(J!==0||A.isRenderTargetTexture||M.has(A)){const pn=M.get(A),Cn=M.get(Z);jt.bindFramebuffer(H.READ_FRAMEBUFFER,ls),jt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ra);for(let wn=0;wn<Yt;wn++)Be?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,pn.__webglTexture,J,Jt+wn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,pn.__webglTexture,J),Rn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Cn.__webglTexture,Gt,Je+wn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Cn.__webglTexture,Gt),J!==0?H.blitFramebuffer(Qt,se,Wt,kt,re,Oe,Wt,kt,H.COLOR_BUFFER_BIT,H.NEAREST):Rn?H.copyTexSubImage3D(Pe,Gt,re,Oe,Je+wn,Qt,se,Wt,kt):H.copyTexSubImage2D(Pe,Gt,re,Oe,Qt,se,Wt,kt);jt.bindFramebuffer(H.READ_FRAMEBUFFER,null),jt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Rn?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Pe,Gt,re,Oe,Je,Wt,kt,Yt,Fe,ee,Ze.data):Z.isCompressedArrayTexture?H.compressedTexSubImage3D(Pe,Gt,re,Oe,Je,Wt,kt,Yt,Fe,Ze.data):H.texSubImage3D(Pe,Gt,re,Oe,Je,Wt,kt,Yt,Fe,ee,Ze):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Gt,re,Oe,Wt,kt,Fe,ee,Ze.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Gt,re,Oe,Ze.width,Ze.height,Fe,Ze.data):H.texSubImage2D(H.TEXTURE_2D,Gt,re,Oe,Wt,kt,Fe,ee,Ze);H.pixelStorei(H.UNPACK_ROW_LENGTH,fe),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Tn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Qi),H.pixelStorei(H.UNPACK_SKIP_ROWS,An),H.pixelStorei(H.UNPACK_SKIP_IMAGES,hi),Gt===0&&Z.generateMipmaps&&H.generateMipmap(Pe),jt.unbindTexture()},this.initRenderTarget=function(A){M.get(A).__webglFramebuffer===void 0&&q.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?q.setTextureCube(A,0):A.isData3DTexture?q.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?q.setTexture2DArray(A,0):q.setTexture2D(A,0),jt.unbindTexture()},this.resetState=function(){k=0,Y=0,j=null,jt.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),i.unpackColorSpace=we._getUnpackColorSpace()}}const Z_={type:"change"},ap={type:"start"},Ux={type:"end"},Hc=new $d,K_=new is,xA=Math.cos(70*Dy.DEG2RAD),gn=new $,Jn=2*Math.PI,We={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Yh=1e-6;class vA extends yM{constructor(t,i=null){super(t,i),this.state=We.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pr.ROTATE,MIDDLE:Pr.DOLLY,RIGHT:Pr.PAN},this.touches={ONE:Or.ROTATE,TWO:Or.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new zs,this._lastTargetPosition=new $,this._quat=new zs().setFromUnitVectors(t.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new E_,this._sphericalDelta=new E_,this._scale=1,this._panOffset=new $,this._rotateStart=new de,this._rotateEnd=new de,this._rotateDelta=new de,this._panStart=new de,this._panEnd=new de,this._panDelta=new de,this._dollyStart=new de,this._dollyEnd=new de,this._dollyDelta=new de,this._dollyDirection=new $,this._mouse=new de,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=yA.bind(this),this._onPointerDown=SA.bind(this),this._onPointerUp=MA.bind(this),this._onContextMenu=wA.bind(this),this._onMouseWheel=TA.bind(this),this._onKeyDown=AA.bind(this),this._onTouchStart=RA.bind(this),this._onTouchMove=CA.bind(this),this._onMouseDown=bA.bind(this),this._onMouseMove=EA.bind(this),this._interceptControlDown=DA.bind(this),this._interceptControlUp=NA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Z_),this.update(),this.state=We.NONE}update(t=null){const i=this.object.position;gn.copy(i).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===We.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Jn:s>Math.PI&&(s-=Jn),l<-Math.PI?l+=Jn:l>Math.PI&&(l-=Jn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),i.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=gn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const d=new $(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const p=new $(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Hc.origin.copy(this.object.position),Hc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Hc.direction))<xA?this.object.lookAt(this.target):(K_.setFromNormalAndCoplanarPoint(this.object.up,this.target),Hc.intersectPlane(K_,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>Yh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Yh||this._lastTargetPosition.distanceToSquared(this.target)>Yh?(this.dispatchEvent(Z_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Jn/60*this.autoRotateSpeed*t:Jn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){gn.setFromMatrixColumn(i,0),gn.multiplyScalar(-t),this._panOffset.add(gn)}_panUp(t,i){this.screenSpacePanning===!0?gn.setFromMatrixColumn(i,1):(gn.setFromMatrixColumn(i,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(t),this._panOffset.add(gn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;gn.copy(l).sub(this.target);let u=gn.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Jn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Jn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),u=.5*(t.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Jn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Jn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new de,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function SA(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function yA(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function MA(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ux),this.state=We.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function bA(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Pr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=We.DOLLY;break;case Pr.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=We.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=We.ROTATE}break;case Pr.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=We.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=We.PAN}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(ap)}function EA(o){switch(this.state){case We.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case We.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case We.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function TA(o){this.enabled===!1||this.enableZoom===!1||this.state!==We.NONE||(o.preventDefault(),this.dispatchEvent(ap),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(Ux))}function AA(o){this.enabled!==!1&&this._handleKeyDown(o)}function RA(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case Or.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=We.TOUCH_ROTATE;break;case Or.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=We.TOUCH_PAN;break;default:this.state=We.NONE}break;case 2:switch(this.touches.TWO){case Or.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=We.TOUCH_DOLLY_PAN;break;case Or.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=We.TOUCH_DOLLY_ROTATE;break;default:this.state=We.NONE}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(ap)}function CA(o){switch(this._trackPointer(o),this.state){case We.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case We.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case We.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case We.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=We.NONE}}function wA(o){this.enabled!==!1&&o.preventDefault()}function DA(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function NA(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function UA(){const[o,t]=bn.useState(!0),[i,s]=bn.useState(!0),[l,u]=bn.useState(!0),[h,d]=bn.useState("meters"),[m,p]=bn.useState(null),[x,_]=bn.useState("2d"),[S,b]=bn.useState(!0),[E,C]=bn.useState(!0),[y,v]=bn.useState(!0),[F,z]=bn.useState(!0),[O,B]=bn.useState("perspective"),G=bn.useRef(null),P=bn.useRef(null),K=bn.useRef(null),R=bn.useRef(null),D=bn.useRef(null),k=Ut=>(Ut*3.28084).toFixed(1),Y=Ut=>h==="meters"?`${Ut}m`:`${k(Ut)}'`,j=10,ot=40*j,lt=50*j,U=13.41,I=6.1,et=2.13,Et=4.89,yt=3,tt=(40-(U*2+Et+2.445*2))/2+2.445,dt=I*5+yt*4+1.5*2,vt=(50-dt)/2+1.5,Bt=[{id:1,x:tt,y:vt,label:"1"},{id:2,x:tt+U+Et,y:vt,label:"2"},{id:3,x:tt,y:vt+(I+yt)*1,label:"3"},{id:4,x:tt+U+Et,y:vt+(I+yt)*1,label:"4"},{id:5,x:tt,y:vt+(I+yt)*2,label:"5"},{id:6,x:tt+U+Et,y:vt+(I+yt)*2,label:"6"},{id:7,x:tt,y:vt+(I+yt)*3,label:"7"},{id:8,x:tt+U+Et,y:vt+(I+yt)*3,label:"8"},{id:9,x:tt,y:vt+(I+yt)*4,label:"9"},{id:10,x:tt+U+Et,y:vt+(I+yt)*4,label:"10"}],at=null,ft=vt-1.5,It=vt+dt-1.5,zt=dt,Vt=.4,ce=8,qe=zt/(ce-1),ge=[];for(let Ut=0;Ut<ce;Ut++)ge.push({id:`L${Ut+1}`,x:0,y:ft+Ut*qe,side:"left"});for(let Ut=0;Ut<ce;Ut++)ge.push({id:`R${Ut+1}`,x:40,y:ft+Ut*qe,side:"right"});bn.useEffect(()=>{if(x!=="3d"||!G.current)return;const Ut=G.current,Ft=new tM;Ft.background=new De(1976635);const H=new $n(50,Ut.clientWidth/Ut.clientHeight,.1,500);H.position.set(50,35,50),H.lookAt(20,0,25),P.current=H;const ie=new _A({antialias:!0});ie.setSize(Ut.clientWidth,Ut.clientHeight),ie.shadowMap.enabled=!0,Ut.appendChild(ie.domElement),R.current=ie;const qt=new vA(H,ie.domElement);qt.enableDamping=!0,qt.dampingFactor=.05,qt.minDistance=15,qt.maxDistance=100,qt.maxPolarAngle=Math.PI/2.1,qt.target.set(20,0,25),K.current=qt,Ft.add(new vM(16777215,.6));const te=new xM(16777215,.8);te.position.set(30,40,20),te.castShadow=!0,Ft.add(te);const jt=new Te(new kn(40,50),new dn({color:3621201}));jt.rotation.x=-Math.PI/2,jt.position.set(20,-.1,25),jt.receiveShadow=!0,Ft.add(jt);const N=new Te(new kn(40,dt),new dn({color:8138002}));N.rotation.x=-Math.PI/2,N.position.set(20,0,vt+dt/2),Ft.add(N),Bt.forEach(Rt=>{const Dt=Rt.x+U/2,Ht=Rt.y+I/2,Mt=new Te(new kn(U/2-et,I),new dn({color:3900150}));Mt.rotation.x=-Math.PI/2,Mt.position.set(Dt-U/4-et/2,.02,Ht),Ft.add(Mt);const Tt=new Te(new kn(U/2-et,I),new dn({color:3900150}));Tt.rotation.x=-Math.PI/2,Tt.position.set(Dt+U/4+et/2,.02,Ht),Ft.add(Tt);const Pt=new dn({color:6005680}),Lt=new Te(new kn(et,I),Pt);Lt.rotation.x=-Math.PI/2,Lt.position.set(Dt-et/2,.03,Ht),Ft.add(Lt);const Ct=new Te(new kn(et,I),Pt);Ct.rotation.x=-Math.PI/2,Ct.position.set(Dt+et/2,.03,Ht),Ft.add(Ct);const ae=new Tx({color:16777215}),X=new cM(new kn(U,I)),wt=new rM(X,ae);wt.rotation.x=-Math.PI/2,wt.position.set(Dt,.04,Ht),Ft.add(wt);const At=new Te(new _n(.05,.9,I),new dn({color:1976635,transparent:!0,opacity:.8}));At.position.set(Dt,.45,Ht),Ft.add(At),[-I/2,I/2].forEach(Nt=>{const le=new Te(new $c(.03,.03,1),new dn({color:6583435}));le.position.set(Dt,.5,Ht+Nt),Ft.add(le)});const Ot=document.createElement("canvas");Ot.width=Ot.height=64;const _t=Ot.getContext("2d");_t.fillStyle="#0f172a",_t.beginPath(),_t.arc(32,32,28,0,Math.PI*2),_t.fill(),_t.fillStyle="#fff",_t.font="bold 36px Arial",_t.textAlign="center",_t.textBaseline="middle",_t.fillText(Rt.label,32,32);const pt=new Te(new kn(1.5,1.5),new tp({map:new oM(Ot),transparent:!0}));pt.rotation.x=-Math.PI/2,pt.position.set(Dt,.05,Ht),Ft.add(pt)});const M=new Te(new kn(40,50-vt-dt),new dn({color:2696484}));M.rotation.x=-Math.PI/2,M.position.set(20,.01,vt+dt+(50-vt-dt)/2),Ft.add(M);for(let Rt=0;Rt<8;Rt++){const Dt=new Te(new kn(2.4,4.8),new dn({color:1841431}));Dt.rotation.x=-Math.PI/2,Dt.position.set(Rt*2.5+1.25,.02,vt+dt+2.7),Ft.add(Dt)}const q=8,mt=12,bt=40;if(E){const Rt=new dn({color:14427686});ge.forEach(Dt=>{const Ht=Dt.side==="left"?0:40,Mt=Dt.y,Tt=new Te(new _n(Vt,q,Vt),Rt);Tt.position.set(Ht,q/2,Mt),Tt.castShadow=!0,Ft.add(Tt);const Pt=new dn({color:10033947}),Lt=new Te(new _n(Vt+.2,.3,Vt+.2),Pt);Lt.position.set(Ht,.15,Mt),Ft.add(Lt)})}if(y){const Rt=new dn({color:16096779}),Dt=20,Ht=mt-q,Mt=Math.sqrt(Dt*Dt+Ht*Ht),Tt=Math.atan2(Ht,Dt);for(let wt=0;wt<ce;wt++){const At=ft+wt*qe,Ot=new Te(new _n(bt,.25,.25),Rt);Ot.position.set(20,q,At),Ft.add(Ot);const _t=new Te(new _n(Mt,.2,.2),Rt);_t.position.set(Dt/2,q+Ht/2,At),_t.rotation.z=Tt,Ft.add(_t);const pt=new Te(new _n(Mt,.2,.2),Rt);if(pt.position.set(20+Dt/2,q+Ht/2,At),pt.rotation.z=-Tt,Ft.add(pt),wt===0||wt===ce-1||wt===Math.floor(ce/2)){const Nt=new Te(new _n(.2,Ht,.2),new dn({color:14251782}));Nt.position.set(20,q+Ht/2,At),Ft.add(Nt)}}const Pt=new Te(new _n(.3,.3,zt),new dn({color:16498468}));Pt.position.set(20,mt,vt+dt/2),Ft.add(Pt);const Lt=new dn({color:16498468}),Ct=new Te(new _n(.25,.25,zt),Lt);Ct.position.set(0,q,vt+dt/2),Ft.add(Ct);const ae=new Te(new _n(.25,.25,zt),Lt);ae.position.set(40,q,vt+dt/2),Ft.add(ae);const X=new dn({color:14251782});[.33,.66].forEach(wt=>{const At=q+Ht*wt,Ot=Dt*(1-wt),_t=20+Dt*wt,pt=new Te(new _n(.12,.12,zt),X);pt.position.set(Ot,At,vt+dt/2),Ft.add(pt);const Nt=new Te(new _n(.12,.12,zt),X);Nt.position.set(_t,At,vt+dt/2),Ft.add(Nt)})}if(S){const Rt=new dn({color:6583435,side:Vi,transparent:!0,opacity:.7}),Dt=20,Ht=mt-q,Mt=Math.sqrt(Dt*Dt+Ht*Ht)+.5,Tt=Math.atan2(Ht,Dt),Pt=new kn(Mt,zt+1),Lt=new Te(Pt,Rt);Lt.rotation.order="ZXY",Lt.rotation.x=-Math.PI/2,Lt.rotation.z=Tt,Lt.position.set(Dt/2,q+Ht/2,vt+dt/2),Ft.add(Lt);const Ct=new Te(Pt.clone(),Rt);Ct.rotation.order="ZXY",Ct.rotation.x=-Math.PI/2,Ct.rotation.z=-Tt,Ct.position.set(20+Dt/2,q+Ht/2,vt+dt/2),Ft.add(Ct)}if(F){const Rt=q-1,Dt=new dn({color:16708551,emissive:16708551,emissiveIntensity:.8}),Ht=new dn({color:3621201}),Mt=new dn({color:2042167}),Tt=[8,16,20,24,32],Pt=6,Lt=zt/(Pt+1);Tt.forEach(Ct=>{for(let ae=1;ae<=Pt;ae++){const X=ft+ae*Lt,wt=Ct===20?1:.5,At=new Te(new $c(.02,.02,wt),Mt);At.position.set(Ct,Rt+wt/2,X),Ft.add(At);const Ot=new Te(new _n(2.5,.15,.8),Ht);Ot.position.set(Ct,Rt,X),Ft.add(Ot);const _t=new Te(new _n(2.3,.08,.6),Dt);_t.position.set(Ct,Rt-.1,X),Ft.add(_t);const pt=new gM(16774630,.3,15);pt.position.set(Ct,Rt-.2,X),Ft.add(pt)}}),Bt.forEach(Ct=>{const ae=Ct.x+U/2,X=Ct.y+I/2,wt=new pM(16777215,.4,20,Math.PI/4,.5);wt.position.set(ae,Rt,X),wt.target.position.set(ae,0,X),Ft.add(wt),Ft.add(wt.target)})}const ht=()=>{D.current=requestAnimationFrame(ht),qt.update(),ie.render(Ft,H)};ht();const Kt=()=>{Ut&&(H.aspect=Ut.clientWidth/Ut.clientHeight,H.updateProjectionMatrix(),ie.setSize(Ut.clientWidth,Ut.clientHeight))};return window.addEventListener("resize",Kt),()=>{window.removeEventListener("resize",Kt),cancelAnimationFrame(D.current),qt.dispose(),Ut&&ie.domElement&&Ut.removeChild(ie.domElement),ie.dispose()}},[x,S,E,y,F]);const pe=Ut=>{if(B(Ut),!P.current||!K.current)return;const Ft=P.current,H=K.current,ie={top:[10,60,25],front:[10,15,55],side:[50,15,25],perspective:[30,25,40]};Ft.position.set(...ie[Ut]),H.target.set(10,0,22),Ft.lookAt(10,0,22)},Re=Ut=>{const Ft=U*j,H=I*j,ie=et*j,qt=Ut.x*j,te=Ut.y*j,jt=m===Ut.id;return w.jsxs("g",{onClick:()=>p(jt?null:Ut.id),style:{cursor:"pointer"},children:[w.jsx("rect",{x:qt,y:te,width:Ft/2-ie,height:H,fill:jt?"#0d9488":"#3b82f6",stroke:"#1e40af",strokeWidth:"1"}),w.jsx("rect",{x:qt+Ft/2-ie,y:te,width:ie,height:H,fill:jt?"#065f46":"#5ba3b0",stroke:"#166534",strokeWidth:"1"}),w.jsx("rect",{x:qt+Ft/2,y:te,width:ie,height:H,fill:jt?"#065f46":"#5ba3b0",stroke:"#166534",strokeWidth:"1"}),w.jsx("rect",{x:qt+Ft/2+ie,y:te,width:Ft/2-ie,height:H,fill:jt?"#0d9488":"#3b82f6",stroke:"#1e40af",strokeWidth:"1"}),w.jsx("line",{x1:qt+Ft/2,y1:te,x2:qt+Ft/2,y2:te+H,stroke:"#1e293b",strokeWidth:"3"}),w.jsx("line",{x1:qt,y1:te+H/2,x2:qt+Ft/2-ie,y2:te+H/2,stroke:"white",strokeWidth:"1"}),w.jsx("line",{x1:qt+Ft/2+ie,y1:te+H/2,x2:qt+Ft,y2:te+H/2,stroke:"white",strokeWidth:"1"}),w.jsx("rect",{x:qt,y:te,width:Ft,height:H,fill:"none",stroke:"white",strokeWidth:"2"}),w.jsx("line",{x1:qt+Ft/2-ie,y1:te,x2:qt+Ft/2-ie,y2:te+H,stroke:"white",strokeWidth:"1.5"}),w.jsx("line",{x1:qt+Ft/2+ie,y1:te,x2:qt+Ft/2+ie,y2:te+H,stroke:"white",strokeWidth:"1.5"}),w.jsx("text",{x:qt+Ft/2,y:te+H/2,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"12",fontWeight:"bold",style:{textShadow:"1px 1px 2px rgba(0,0,0,0.8)"},children:Ut.label}),i&&w.jsxs(w.Fragment,{children:[w.jsx("text",{x:qt+Ft/2-ie/2,y:te+H/2,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"4",opacity:"0.9",children:"NVZ"}),w.jsx("text",{x:qt+Ft/2+ie/2,y:te+H/2,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"4",opacity:"0.9",children:"NVZ"})]})]},Ut.id)};return w.jsx("div",{className:"min-h-screen bg-slate-900 text-white p-4",children:w.jsxs("div",{className:"max-w-4xl mx-auto",children:[w.jsxs("div",{className:"flex items-center justify-between mb-6",children:[w.jsxs("div",{children:[w.jsx("h1",{className:"text-2xl font-bold text-orange-400",children:"10-Court Standard Layout"}),w.jsx("p",{className:"text-slate-400 text-sm",children:"40m x 50m (2,000 sqm) - 60'×30' Out-of-Bounds per Court"})]}),w.jsx("a",{href:"https://rhonneljickaincordova.github.io/pickle-pro/",className:"text-teal-400 hover:text-teal-300 text-sm",children:"← Back to Calculator"})]}),w.jsx("div",{className:"flex justify-center mb-4",children:w.jsxs("div",{className:"bg-slate-700 p-1 rounded-lg flex",children:[w.jsx("button",{onClick:()=>_("2d"),className:`px-5 py-1.5 rounded-md text-sm font-medium transition-all ${x==="2d"?"bg-orange-600 text-white":"text-slate-400 hover:text-white"}`,children:"2D View"}),w.jsx("button",{onClick:()=>_("3d"),className:`px-5 py-1.5 rounded-md text-sm font-medium transition-all ${x==="3d"?"bg-orange-600 text-white":"text-slate-400 hover:text-white"}`,children:"3D View"})]})}),w.jsx("div",{className:"bg-red-900/40 border border-red-600 rounded-lg p-3 mb-6",children:w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("span",{className:"text-red-400 text-lg",children:"⚠️"}),w.jsxs("div",{children:[w.jsx("p",{className:"text-red-400 font-semibold text-sm",children:"Safety Warning: No Run-off Area"}),w.jsx("p",{className:"text-red-300/80 text-xs",children:"This layout has only 0.5m gaps between courts. Not recommended for competitive play. Players may collide with adjacent courts."})]})]})}),w.jsxs("div",{className:"flex flex-wrap gap-3 mb-6 justify-center",children:[x==="2d"&&w.jsxs(w.Fragment,{children:[w.jsxs("div",{className:"flex items-center gap-2 bg-slate-800 px-3 py-2 rounded-lg",children:[w.jsx("span",{className:"text-xs text-slate-400",children:"Unit:"}),w.jsx("button",{onClick:()=>d("meters"),className:`px-2 py-1 rounded text-xs ${h==="meters"?"bg-orange-500 text-white":"text-slate-400"}`,children:"Meters"}),w.jsx("button",{onClick:()=>d("feet"),className:`px-2 py-1 rounded text-xs ${h==="feet"?"bg-orange-500 text-white":"text-slate-400"}`,children:"Feet"})]}),w.jsxs("label",{className:"flex items-center gap-2 text-xs cursor-pointer bg-slate-800 px-3 py-2 rounded-lg",children:[w.jsx("input",{type:"checkbox",checked:o,onChange:()=>t(!o),className:"rounded w-3 h-3"}),"Show Dimensions"]}),w.jsxs("label",{className:"flex items-center gap-2 text-xs cursor-pointer bg-slate-800 px-3 py-2 rounded-lg",children:[w.jsx("input",{type:"checkbox",checked:i,onChange:()=>s(!i),className:"rounded w-3 h-3"}),"Show Court Details"]}),w.jsxs("label",{className:"flex items-center gap-2 text-xs cursor-pointer bg-amber-800 px-3 py-2 rounded-lg",children:[w.jsx("input",{type:"checkbox",checked:l,onChange:()=>u(!l),className:"rounded w-3 h-3"}),"Show Roof Posts"]})]}),x==="3d"&&w.jsxs(w.Fragment,{children:[w.jsxs("div",{className:"flex items-center gap-1 bg-slate-800 px-3 py-2 rounded-lg",children:[w.jsx("span",{className:"text-xs text-slate-400 mr-1",children:"View:"}),w.jsx("button",{onClick:()=>pe("perspective"),className:`px-2 py-1 rounded text-xs ${O==="perspective"?"bg-teal-500 text-white":"text-slate-400"}`,children:"3D"}),w.jsx("button",{onClick:()=>pe("top"),className:`px-2 py-1 rounded text-xs ${O==="top"?"bg-teal-500 text-white":"text-slate-400"}`,children:"Top"}),w.jsx("button",{onClick:()=>pe("front"),className:`px-2 py-1 rounded text-xs ${O==="front"?"bg-teal-500 text-white":"text-slate-400"}`,children:"Front"}),w.jsx("button",{onClick:()=>pe("side"),className:`px-2 py-1 rounded text-xs ${O==="side"?"bg-teal-500 text-white":"text-slate-400"}`,children:"Side"})]}),w.jsxs("label",{className:"flex items-center gap-2 text-xs cursor-pointer bg-slate-800 px-3 py-2 rounded-lg",children:[w.jsx("input",{type:"checkbox",checked:S,onChange:()=>b(!S),className:"rounded w-3 h-3"}),w.jsx("span",{className:"w-3 h-3 rounded bg-slate-500"}),"Roof Panels"]}),w.jsxs("label",{className:"flex items-center gap-2 text-xs cursor-pointer bg-slate-800 px-3 py-2 rounded-lg",children:[w.jsx("input",{type:"checkbox",checked:E,onChange:()=>C(!E),className:"rounded w-3 h-3"}),w.jsx("span",{className:"w-3 h-3 rounded bg-red-500"}),"Posts (14)"]}),w.jsxs("label",{className:"flex items-center gap-2 text-xs cursor-pointer bg-slate-800 px-3 py-2 rounded-lg",children:[w.jsx("input",{type:"checkbox",checked:y,onChange:()=>v(!y),className:"rounded w-3 h-3"}),w.jsx("span",{className:"w-3 h-3 rounded bg-amber-500"}),"Trusses & Beams"]}),w.jsxs("label",{className:"flex items-center gap-2 text-xs cursor-pointer bg-slate-800 px-3 py-2 rounded-lg",children:[w.jsx("input",{type:"checkbox",checked:F,onChange:()=>z(!F),className:"rounded w-3 h-3"}),w.jsx("span",{className:"w-3 h-3 rounded bg-yellow-200"}),"LED Lights (18)"]})]})]}),x==="3d"&&w.jsxs("div",{className:"relative mb-6",children:[w.jsx("div",{ref:G,className:"w-full h-96 bg-slate-900 rounded-xl border border-orange-700 overflow-hidden"}),w.jsx("div",{className:"absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-4 py-2 rounded-lg",children:w.jsxs("div",{className:"flex items-center gap-4",children:[w.jsx("span",{className:"font-semibold text-teal-400",children:"Orbit Mode"}),w.jsx("span",{children:"Drag to rotate"}),w.jsx("span",{children:"Scroll to zoom"}),w.jsx("span",{children:"Right-click to pan"})]})})]}),x==="2d"&&w.jsx("div",{className:"bg-slate-800 rounded-xl p-4 border border-orange-700",children:w.jsxs("svg",{viewBox:`0 0 ${ot+80} ${lt+60}`,className:"w-full max-w-sm mx-auto",style:{maxHeight:"75vh"},children:[w.jsx("rect",{x:"40",y:"30",width:ot,height:lt,fill:"#374151",stroke:"#f97316",strokeWidth:"3",rx:"4"}),w.jsx("defs",{children:w.jsx("pattern",{id:"grid9",width:"20",height:"20",patternUnits:"userSpaceOnUse",children:w.jsx("path",{d:"M 20 0 L 0 0 0 20",fill:"none",stroke:"#4b5563",strokeWidth:"0.5"})})}),w.jsx("rect",{x:"40",y:"30",width:ot,height:lt,fill:"url(#grid9)"}),o&&w.jsxs(w.Fragment,{children:[w.jsxs("g",{children:[w.jsx("line",{x1:"40",y1:"15",x2:40+ot,y2:"15",stroke:"#f97316",strokeWidth:"1"}),w.jsx("line",{x1:"40",y1:"10",x2:"40",y2:"20",stroke:"#f97316",strokeWidth:"1"}),w.jsx("line",{x1:40+ot,y1:"10",x2:40+ot,y2:"20",stroke:"#f97316",strokeWidth:"1"}),w.jsx("text",{x:40+ot/2,y:"10",textAnchor:"middle",fill:"#f97316",fontSize:"11",fontWeight:"bold",children:Y(40)})]}),w.jsxs("g",{children:[w.jsx("line",{x1:ot+55,y1:"30",x2:ot+55,y2:30+lt,stroke:"#f97316",strokeWidth:"1"}),w.jsx("line",{x1:ot+50,y1:"30",x2:ot+60,y2:"30",stroke:"#f97316",strokeWidth:"1"}),w.jsx("line",{x1:ot+50,y1:30+lt,x2:ot+60,y2:30+lt,stroke:"#f97316",strokeWidth:"1"}),w.jsx("text",{x:ot+70,y:30+lt/2,textAnchor:"middle",fill:"#f97316",fontSize:"11",fontWeight:"bold",transform:`rotate(90, ${ot+70}, ${30+lt/2})`,children:Y(50)})]}),w.jsxs("text",{x:40+ot/2,y:lt+50,textAnchor:"middle",fill:"#64748b",fontSize:"10",children:["Total Area: ",h==="meters"?"2,000 sqm":"21,528 sqft"]})]}),w.jsxs("g",{transform:"translate(40, 30)",children:[Bt.map(Re),at]}),o&&w.jsxs("g",{transform:"translate(40, 30)",children:[w.jsx("text",{x:Bt[0].x*j+U*j/2,y:Bt[0].y*j-6,textAnchor:"middle",fill:"#fbbf24",fontSize:"7",children:Y(U)}),w.jsx("text",{x:Bt[0].x*j-6,y:Bt[0].y*j+I*j/2,textAnchor:"middle",fill:"#fbbf24",fontSize:"7",transform:`rotate(-90, ${Bt[0].x*j-6}, ${Bt[0].y*j+I*j/2})`,children:Y(I)}),w.jsx("text",{x:(Bt[0].x+U+Et/2)*j,y:Bt[0].y*j-6,textAnchor:"middle",fill:"#ef4444",fontSize:"6",children:Y(Et)})]}),w.jsxs("g",{transform:"translate(40, 30)",children:[w.jsx("rect",{x:0,y:(vt+dt)*j,width:20*j,height:(50-vt-dt)*j,fill:"#1f2937",stroke:"#4b5563",strokeWidth:"1"}),w.jsx("text",{x:10*j,y:(vt+dt+.8)*j,textAnchor:"middle",fill:"#9ca3af",fontSize:"7",fontWeight:"bold",children:"PARKING (8 spaces)"}),[0,1,2,3,4,5,6,7].map(Ut=>{const qt=(0+Ut*2.5)*j,te=(vt+dt+.27)*j;return w.jsxs("g",{children:[w.jsx("rect",{x:qt,y:te,width:2.5*j,height:5*j,fill:"#374151",stroke:"#6b7280",strokeWidth:"1"}),w.jsx("rect",{x:qt+3,y:te+5,width:2.5*j-6,height:5*j-10,fill:"#60a5fa",rx:"3"}),w.jsx("rect",{x:qt+5,y:te+8,width:2.5*j-10,height:8,fill:"#1e3a5f",rx:"2"}),w.jsxs("text",{x:qt+2.5*j/2,y:te+5*j-3,textAnchor:"middle",fill:"#9ca3af",fontSize:"6",children:["P",Ut+1]})]},`parking-${Ut}`)})]}),l&&w.jsxs("g",{transform:"translate(40, 30)",children:[w.jsx("rect",{x:0,y:ft*j,width:20*j,height:zt*j,fill:"none",stroke:"#fbbf24",strokeWidth:"2",strokeDasharray:"8,4",opacity:"0.6"}),w.jsx("line",{x1:10*j,y1:ft*j,x2:10*j,y2:It*j,stroke:"#fbbf24",strokeWidth:"1.5",strokeDasharray:"4,2",opacity:"0.5"}),ge.map(Ut=>{const Ft=Ut.side==="left"?-Vt/2:20-Vt/2;return w.jsxs("g",{children:[w.jsx("rect",{x:Ft*j,y:(Ut.y-Vt/2)*j,width:Vt*j,height:Vt*j,fill:"#78350f",stroke:"#fbbf24",strokeWidth:"1.5"}),w.jsx("text",{x:(Ft+Vt/2)*j,y:Ut.y*j,textAnchor:"middle",dominantBaseline:"middle",fill:"#fef3c7",fontSize:"5",fontWeight:"bold",children:Ut.id})]},Ut.id)}),w.jsxs("text",{x:10*j,y:(ft-.8)*j,textAnchor:"middle",fill:"#fbbf24",fontSize:"7",fontWeight:"bold",children:["OPEN GABLE ROOF (",ce*2," POSTS)"]})]}),w.jsxs("g",{transform:"translate(25, 55)",children:[w.jsx("circle",{cx:"0",cy:"0",r:"12",fill:"#334155",stroke:"#64748b",strokeWidth:"1"}),w.jsx("text",{x:"0",y:"-3",textAnchor:"middle",fill:"#f8fafc",fontSize:"8",fontWeight:"bold",children:"N"}),w.jsx("polygon",{points:"0,-8 -3,-2 3,-2",fill:"#ef4444"}),w.jsx("polygon",{points:"0,8 -3,2 3,2",fill:"#94a3b8"})]})]})}),w.jsxs("div",{className:"mt-6 bg-slate-800 rounded-xl p-4 border border-slate-700",children:[w.jsx("h3",{className:"text-sm font-bold text-white mb-3",children:"Legend"}),w.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("div",{className:"w-4 h-4 bg-blue-500 rounded"}),w.jsx("span",{className:"text-xs text-slate-300",children:"Playing Surface"})]}),w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("div",{className:"w-4 h-4 bg-green-500 rounded"}),w.jsx("span",{className:"text-xs text-slate-300",children:"Kitchen (NVZ)"})]}),w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("div",{className:"w-4 h-4 bg-red-500/50 border border-red-500 rounded"}),w.jsx("span",{className:"text-xs text-slate-300",children:"Minimal Gap (0.5m)"})]}),w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("div",{className:"w-4 h-2 bg-white rounded"}),w.jsx("span",{className:"text-xs text-slate-300",children:"Court Lines"})]}),w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("div",{className:"w-4 h-4 bg-blue-400 rounded"}),w.jsx("span",{className:"text-xs text-slate-300",children:"Parking (8 spaces)"})]}),w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("div",{className:"w-4 h-4 bg-gray-600 border border-gray-500 border-dashed rounded"}),w.jsx("span",{className:"text-xs text-slate-300",children:"Vacant Space"})]}),w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("div",{className:"w-4 h-4 bg-amber-900 border-2 border-amber-400 rounded"}),w.jsx("span",{className:"text-xs text-slate-300",children:"Roof Post (400mm)"})]}),w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("div",{className:"w-4 h-0.5 bg-amber-400 border border-dashed"}),w.jsx("span",{className:"text-xs text-slate-300",children:"Roof Coverage"})]}),w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("div",{className:"w-4 h-2 bg-yellow-200 rounded"}),w.jsx("span",{className:"text-xs text-slate-300",children:"LED Light Fixtures"})]})]})]}),w.jsxs("div",{className:"mt-6 bg-slate-800 rounded-xl p-4 border border-slate-700",children:[w.jsxs("h3",{className:"text-sm font-bold text-amber-400 mb-4 flex items-center gap-2",children:[w.jsx("span",{children:"🏗️"})," Covered Structure Specifications"]}),w.jsxs("div",{className:"mb-4",children:[w.jsx("h4",{className:"text-xs font-semibold text-slate-300 mb-2",children:"Building Dimensions"}),w.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2",children:[w.jsxs("div",{className:"bg-slate-700/50 p-2 rounded border-l-2 border-slate-500",children:[w.jsx("p",{className:"text-slate-400 text-xs",children:"Length"}),w.jsx("p",{className:"text-white font-bold",children:Y(Number(zt.toFixed(1)))}),w.jsxs("p",{className:"text-slate-500 text-xs",children:["(",k(zt)," ft)"]})]}),w.jsxs("div",{className:"bg-slate-700/50 p-2 rounded border-l-2 border-slate-500",children:[w.jsx("p",{className:"text-slate-400 text-xs",children:"Width"}),w.jsx("p",{className:"text-white font-bold",children:Y(40)}),w.jsxs("p",{className:"text-slate-500 text-xs",children:["(",k(20)," ft)"]})]}),w.jsxs("div",{className:"bg-slate-700/50 p-2 rounded border-l-2 border-cyan-500",children:[w.jsx("p",{className:"text-slate-400 text-xs",children:"Covered Area"}),w.jsxs("p",{className:"text-cyan-400 font-bold",children:[(20*zt).toFixed(0)," sqm"]}),w.jsxs("p",{className:"text-slate-500 text-xs",children:["(",(20*zt*10.764).toFixed(0)," sqft)"]})]}),w.jsxs("div",{className:"bg-slate-700/50 p-2 rounded border-l-2 border-slate-500",children:[w.jsx("p",{className:"text-slate-400 text-xs",children:"Perimeter"}),w.jsx("p",{className:"text-white font-bold",children:Y(Number((40+2*zt).toFixed(1)))}),w.jsxs("p",{className:"text-slate-500 text-xs",children:["(",k(40+2*zt)," ft)"]})]})]})]}),w.jsxs("div",{className:"mb-4",children:[w.jsx("h4",{className:"text-xs font-semibold text-slate-300 mb-2",children:"Roof Structure (Open Gable)"}),w.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2",children:[w.jsxs("div",{className:"bg-slate-700/50 p-2 rounded border-l-2 border-slate-500",children:[w.jsx("p",{className:"text-slate-400 text-xs",children:"Eave Height"}),w.jsx("p",{className:"text-white font-bold",children:"8m"}),w.jsx("p",{className:"text-slate-500 text-xs",children:"(26.2 ft)"})]}),w.jsxs("div",{className:"bg-slate-700/50 p-2 rounded border-l-2 border-yellow-500",children:[w.jsx("p",{className:"text-slate-400 text-xs",children:"Ridge Height"}),w.jsx("p",{className:"text-yellow-400 font-bold",children:"10m"}),w.jsx("p",{className:"text-slate-500 text-xs",children:"(32.8 ft)"})]}),w.jsxs("div",{className:"bg-slate-700/50 p-2 rounded border-l-2 border-orange-500",children:[w.jsx("p",{className:"text-slate-400 text-xs",children:"Roof Pitch"}),w.jsx("p",{className:"text-orange-400 font-bold",children:"11.3°"}),w.jsx("p",{className:"text-slate-500 text-xs",children:"(2:10 slope)"})]}),w.jsxs("div",{className:"bg-slate-700/50 p-2 rounded border-l-2 border-green-500",children:[w.jsx("p",{className:"text-slate-400 text-xs",children:"Clearance"}),w.jsx("p",{className:"text-green-400 font-bold",children:"8m min"}),w.jsx("p",{className:"text-slate-500 text-xs",children:"(competitive std)"})]})]})]}),w.jsxs("div",{className:"mb-4",children:[w.jsx("h4",{className:"text-xs font-semibold text-slate-300 mb-2",children:"Structural Components"}),w.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-2",children:[w.jsxs("div",{className:"bg-slate-700/50 p-2 rounded border-l-2 border-red-500",children:[w.jsx("p",{className:"text-slate-400 text-xs",children:"Steel Posts"}),w.jsxs("p",{className:"text-red-400 font-bold",children:[ce*2," columns"]}),w.jsx("p",{className:"text-slate-500 text-xs",children:"400mm × 400mm × 8m H"})]}),w.jsxs("div",{className:"bg-slate-700/50 p-2 rounded border-l-2 border-amber-500",children:[w.jsx("p",{className:"text-slate-400 text-xs",children:"Ridge Beam"}),w.jsxs("p",{className:"text-amber-400 font-bold",children:["1 × ",zt.toFixed(0),"m"]}),w.jsx("p",{className:"text-slate-500 text-xs",children:"W300 × 300mm"})]}),w.jsxs("div",{className:"bg-slate-700/50 p-2 rounded border-l-2 border-amber-500",children:[w.jsx("p",{className:"text-slate-400 text-xs",children:"Eave Beams"}),w.jsxs("p",{className:"text-amber-400 font-bold",children:["2 × ",zt.toFixed(0),"m"]}),w.jsx("p",{className:"text-slate-500 text-xs",children:"W250 × 250mm"})]}),w.jsxs("div",{className:"bg-slate-700/50 p-2 rounded border-l-2 border-orange-500",children:[w.jsx("p",{className:"text-slate-400 text-xs",children:"A-Frame Trusses"}),w.jsxs("p",{className:"text-orange-400 font-bold",children:[ce," trusses"]}),w.jsxs("p",{className:"text-slate-500 text-xs",children:["@ ",qe.toFixed(1),"m spacing"]})]}),w.jsxs("div",{className:"bg-slate-700/50 p-2 rounded border-l-2 border-amber-500",children:[w.jsx("p",{className:"text-slate-400 text-xs",children:"Purlins"}),w.jsxs("p",{className:"text-amber-400 font-bold",children:["4 × ",zt.toFixed(0),"m"]}),w.jsx("p",{className:"text-slate-500 text-xs",children:"C150 × 150mm"})]}),w.jsxs("div",{className:"bg-slate-700/50 p-2 rounded border-l-2 border-amber-500",children:[w.jsx("p",{className:"text-slate-400 text-xs",children:"King Posts"}),w.jsx("p",{className:"text-amber-400 font-bold",children:"3 × 2m"}),w.jsx("p",{className:"text-slate-500 text-xs",children:"200 × 200mm"})]})]})]}),w.jsxs("div",{className:"mb-4",children:[w.jsx("h4",{className:"text-xs font-semibold text-slate-300 mb-2",children:"Roofing Material"}),w.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2",children:[w.jsxs("div",{className:"bg-slate-700/50 p-2 rounded border-l-2 border-slate-500",children:[w.jsx("p",{className:"text-slate-400 text-xs",children:"Type"}),w.jsx("p",{className:"text-white font-bold",children:"Metal Deck"}),w.jsx("p",{className:"text-slate-500 text-xs",children:"Pre-painted"})]}),w.jsxs("div",{className:"bg-slate-700/50 p-2 rounded border-l-2 border-slate-500",children:[w.jsx("p",{className:"text-slate-400 text-xs",children:"Thickness"}),w.jsx("p",{className:"text-white font-bold",children:"0.5mm"}),w.jsx("p",{className:"text-slate-500 text-xs",children:"(GA 26)"})]}),w.jsxs("div",{className:"bg-slate-700/50 p-2 rounded border-l-2 border-slate-500",children:[w.jsx("p",{className:"text-slate-400 text-xs",children:"Color"}),w.jsx("p",{className:"text-white font-bold",children:"Silver Gray"}),w.jsx("p",{className:"text-slate-500 text-xs",children:"Heat reflective"})]}),w.jsxs("div",{className:"bg-slate-700/50 p-2 rounded border-l-2 border-cyan-500",children:[w.jsx("p",{className:"text-slate-400 text-xs",children:"Coverage"}),w.jsxs("p",{className:"text-cyan-400 font-bold",children:["~",(Math.sqrt(104)*zt*2).toFixed(0)," sqm"]}),w.jsx("p",{className:"text-slate-500 text-xs",children:"(incl. overlap)"})]})]})]}),w.jsxs("div",{className:"mb-4",children:[w.jsx("h4",{className:"text-xs font-semibold text-slate-300 mb-2",children:"Ventilation & Lighting"}),w.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2",children:[w.jsxs("div",{className:"bg-slate-700/50 p-2 rounded border-l-2 border-green-500",children:[w.jsx("p",{className:"text-slate-400 text-xs",children:"Wall Type"}),w.jsx("p",{className:"text-green-400 font-bold",children:"Open Air"}),w.jsx("p",{className:"text-slate-500 text-xs",children:"No walls/natural"})]}),w.jsxs("div",{className:"bg-slate-700/50 p-2 rounded border-l-2 border-teal-500",children:[w.jsx("p",{className:"text-slate-400 text-xs",children:"Gable Ends"}),w.jsx("p",{className:"text-teal-400 font-bold",children:"Open"}),w.jsx("p",{className:"text-slate-500 text-xs",children:"Cross ventilation"})]}),w.jsxs("div",{className:"bg-slate-700/50 p-2 rounded border-l-2 border-yellow-500",children:[w.jsx("p",{className:"text-slate-400 text-xs",children:"LED Lights"}),w.jsx("p",{className:"text-yellow-400 font-bold",children:"18 units"}),w.jsx("p",{className:"text-slate-500 text-xs",children:"500 lux @ court"})]}),w.jsxs("div",{className:"bg-slate-700/50 p-2 rounded border-l-2 border-slate-500",children:[w.jsx("p",{className:"text-slate-400 text-xs",children:"Power Load"}),w.jsx("p",{className:"text-white font-bold",children:"~12 kW"}),w.jsx("p",{className:"text-slate-500 text-xs",children:"Lighting system"})]})]})]})]}),w.jsxs("div",{className:"mt-6 bg-orange-900/20 rounded-xl p-4 border border-orange-700",children:[w.jsxs("h3",{className:"text-sm font-bold text-orange-400 mb-4 flex items-center gap-2",children:[w.jsx("span",{children:"📦"})," Estimated Primary Materials"]}),w.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-5 gap-2",children:[w.jsxs("div",{className:"bg-slate-800/80 p-3 rounded text-center",children:[w.jsx("p",{className:"text-red-400 font-bold text-lg",children:"~8 tons"}),w.jsx("p",{className:"text-slate-400 text-xs",children:"Steel Posts"})]}),w.jsxs("div",{className:"bg-slate-800/80 p-3 rounded text-center",children:[w.jsx("p",{className:"text-amber-400 font-bold text-lg",children:"~6 tons"}),w.jsx("p",{className:"text-slate-400 text-xs",children:"Trusses/Beams"})]}),w.jsxs("div",{className:"bg-slate-800/80 p-3 rounded text-center",children:[w.jsxs("p",{className:"text-cyan-400 font-bold text-lg",children:["~",(Math.sqrt(104)*zt*2).toFixed(0)," sqm"]}),w.jsx("p",{className:"text-slate-400 text-xs",children:"Roofing Sheets"})]}),w.jsxs("div",{className:"bg-slate-800/80 p-3 rounded text-center",children:[w.jsx("p",{className:"text-orange-400 font-bold text-lg",children:"~2 tons"}),w.jsx("p",{className:"text-slate-400 text-xs",children:"Purlins"})]}),w.jsxs("div",{className:"bg-slate-800/80 p-3 rounded text-center",children:[w.jsx("p",{className:"text-slate-300 font-bold text-lg",children:"~35 cum"}),w.jsx("p",{className:"text-slate-400 text-xs",children:"Concrete Footings"})]})]})]}),w.jsxs("div",{className:"mt-6 bg-slate-800 rounded-xl p-4 border border-slate-700",children:[w.jsx("h3",{className:"text-sm font-bold text-white mb-3",children:"Layout Specifications"}),w.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 text-xs",children:[w.jsxs("div",{children:[w.jsx("p",{className:"text-slate-400",children:"Land Size"}),w.jsxs("p",{className:"text-white font-semibold",children:[Y(40)," x ",Y(50)]})]}),w.jsxs("div",{children:[w.jsx("p",{className:"text-slate-400",children:"Total Area"}),w.jsx("p",{className:"text-white font-semibold",children:h==="meters"?"2,000 sqm":"21,528 sqft"})]}),w.jsxs("div",{children:[w.jsx("p",{className:"text-slate-400",children:"Number of Courts"}),w.jsx("p",{className:"text-orange-400 font-semibold",children:"10 Courts"})]}),w.jsxs("div",{children:[w.jsx("p",{className:"text-slate-400",children:"Court Size"}),w.jsxs("p",{className:"text-white font-semibold",children:[Y(U)," x ",Y(I)]})]}),w.jsxs("div",{children:[w.jsx("p",{className:"text-slate-400",children:"Kitchen Depth"}),w.jsxs("p",{className:"text-white font-semibold",children:[Y(et)," (7')"]})]}),w.jsxs("div",{children:[w.jsx("p",{className:"text-slate-400",children:"Court Gap"}),w.jsxs("p",{className:"text-red-400 font-semibold",children:[Y(Et)," (minimal!)"]})]}),w.jsxs("div",{children:[w.jsx("p",{className:"text-slate-400",children:"Side Margins"}),w.jsxs("p",{className:"text-white font-semibold",children:["~",Y(Number(tt.toFixed(2)))]})]}),w.jsxs("div",{children:[w.jsx("p",{className:"text-slate-400",children:"Parking Spaces"}),w.jsx("p",{className:"text-blue-400 font-semibold",children:"8 spaces (2.5m x 5m)"})]})]})]}),m&&w.jsxs("div",{className:"mt-6 bg-orange-900/30 rounded-xl p-4 border border-orange-700",children:[w.jsxs("h3",{className:"text-sm font-bold text-orange-400 mb-2",children:["Court ",m," Selected"]}),w.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-3 text-xs",children:[w.jsxs("div",{children:[w.jsx("p",{className:"text-slate-400",children:"Dimensions"}),w.jsxs("p",{className:"text-white",children:[Y(U)," x ",Y(I)]})]}),w.jsxs("div",{children:[w.jsx("p",{className:"text-slate-400",children:"Playing Area"}),w.jsx("p",{className:"text-white",children:h==="meters"?"81.8 sqm":"880 sqft"})]}),w.jsxs("div",{children:[w.jsx("p",{className:"text-slate-400",children:"Net Height"}),w.jsx("p",{className:"text-white",children:'0.91m (36") ends, 0.86m (34") center'})]})]})]})]})})}YS.createRoot(document.getElementById("root")).render(w.jsx(HS.StrictMode,{children:w.jsx(UA,{})}));
