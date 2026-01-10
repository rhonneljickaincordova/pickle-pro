(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function K_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var oh={exports:{}},Ho={};var zg;function IS(){if(zg)return Ho;zg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return Ho.Fragment=t,Ho.jsx=i,Ho.jsxs=i,Ho}var Ig;function FS(){return Ig||(Ig=1,oh.exports=IS()),oh.exports}var w=FS(),lh={exports:{}},ue={};var Fg;function BS(){if(Fg)return ue;Fg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function b(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function x(L,it,St){this.props=L,this.context=it,this.refs=y,this.updater=St||E}x.prototype.isReactComponent={},x.prototype.setState=function(L,it){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,it,"setState")},x.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function P(){}P.prototype=x.prototype;function O(L,it,St){this.props=L,this.context=it,this.refs=y,this.updater=St||E}var U=O.prototype=new P;U.constructor=O,C(U,x.prototype),U.isPureReactComponent=!0;var F=Array.isArray;function B(){}var I={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function T(L,it,St){var Lt=St.ref;return{$$typeof:o,type:L,key:it,ref:Lt!==void 0?Lt:null,props:St}}function D(L,it){return T(L.type,it,L.props)}function k(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function Q(L){var it={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(St){return it[St]})}var tt=/\/+/g;function ft(L,it){return typeof L=="object"&&L!==null&&L.key!=null?Q(""+L.key):it.toString(36)}function ct(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(B,B):(L.status="pending",L.then(function(it){L.status==="pending"&&(L.status="fulfilled",L.value=it)},function(it){L.status==="pending"&&(L.status="rejected",L.reason=it)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function z(L,it,St,Lt,Gt){var $=typeof L;($==="undefined"||$==="boolean")&&(L=null);var ht=!1;if(L===null)ht=!0;else switch($){case"bigint":case"string":case"number":ht=!0;break;case"object":switch(L.$$typeof){case o:case t:ht=!0;break;case v:return ht=L._init,z(ht(L._payload),it,St,Lt,Gt)}}if(ht)return Gt=Gt(L),ht=Lt===""?"."+ft(L,0):Lt,F(Gt)?(St="",ht!=null&&(St=ht.replace(tt,"$&/")+"/"),z(Gt,it,St,"",function(It){return It})):Gt!=null&&(k(Gt)&&(Gt=D(Gt,St+(Gt.key==null||L&&L.key===Gt.key?"":(""+Gt.key).replace(tt,"$&/")+"/")+ht)),it.push(Gt)),1;ht=0;var zt=Lt===""?".":Lt+":";if(F(L))for(var Ct=0;Ct<L.length;Ct++)Lt=L[Ct],$=zt+ft(Lt,Ct),ht+=z(Lt,it,St,$,Gt);else if(Ct=b(L),typeof Ct=="function")for(L=Ct.call(L),Ct=0;!(Lt=L.next()).done;)Lt=Lt.value,$=zt+ft(Lt,Ct++),ht+=z(Lt,it,St,$,Gt);else if($==="object"){if(typeof L.then=="function")return z(ct(L),it,St,Lt,Gt);throw it=String(L),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return ht}function V(L,it,St){if(L==null)return L;var Lt=[],Gt=0;return z(L,Lt,"","",function($){return it.call(St,$,Gt++)}),Lt}function at(L){if(L._status===-1){var it=L._result;it=it(),it.then(function(St){(L._status===0||L._status===-1)&&(L._status=1,L._result=St)},function(St){(L._status===0||L._status===-1)&&(L._status=2,L._result=St)}),L._status===-1&&(L._status=0,L._result=it)}if(L._status===1)return L._result.default;throw L._result}var At=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},Tt={map:V,forEach:function(L,it,St){V(L,function(){it.apply(this,arguments)},St)},count:function(L){var it=0;return V(L,function(){it++}),it},toArray:function(L){return V(L,function(it){return it})||[]},only:function(L){if(!k(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return ue.Activity=g,ue.Children=Tt,ue.Component=x,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=O,ue.StrictMode=s,ue.Suspense=m,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ue.__COMPILER_RUNTIME={__proto__:null,c:function(L){return I.H.useMemoCache(L)}},ue.cache=function(L){return function(){return L.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(L,it,St){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Lt=C({},L.props),Gt=L.key;if(it!=null)for($ in it.key!==void 0&&(Gt=""+it.key),it)!q.call(it,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&it.ref===void 0||(Lt[$]=it[$]);var $=arguments.length-2;if($===1)Lt.children=St;else if(1<$){for(var ht=Array($),zt=0;zt<$;zt++)ht[zt]=arguments[zt+2];Lt.children=ht}return T(L.type,Gt,Lt)},ue.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},ue.createElement=function(L,it,St){var Lt,Gt={},$=null;if(it!=null)for(Lt in it.key!==void 0&&($=""+it.key),it)q.call(it,Lt)&&Lt!=="key"&&Lt!=="__self"&&Lt!=="__source"&&(Gt[Lt]=it[Lt]);var ht=arguments.length-2;if(ht===1)Gt.children=St;else if(1<ht){for(var zt=Array(ht),Ct=0;Ct<ht;Ct++)zt[Ct]=arguments[Ct+2];Gt.children=zt}if(L&&L.defaultProps)for(Lt in ht=L.defaultProps,ht)Gt[Lt]===void 0&&(Gt[Lt]=ht[Lt]);return T(L,$,Gt)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(L){return{$$typeof:d,render:L}},ue.isValidElement=k,ue.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:at}},ue.memo=function(L,it){return{$$typeof:p,type:L,compare:it===void 0?null:it}},ue.startTransition=function(L){var it=I.T,St={};I.T=St;try{var Lt=L(),Gt=I.S;Gt!==null&&Gt(St,Lt),typeof Lt=="object"&&Lt!==null&&typeof Lt.then=="function"&&Lt.then(B,At)}catch($){At($)}finally{it!==null&&St.types!==null&&(it.types=St.types),I.T=it}},ue.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ue.use=function(L){return I.H.use(L)},ue.useActionState=function(L,it,St){return I.H.useActionState(L,it,St)},ue.useCallback=function(L,it){return I.H.useCallback(L,it)},ue.useContext=function(L){return I.H.useContext(L)},ue.useDebugValue=function(){},ue.useDeferredValue=function(L,it){return I.H.useDeferredValue(L,it)},ue.useEffect=function(L,it){return I.H.useEffect(L,it)},ue.useEffectEvent=function(L){return I.H.useEffectEvent(L)},ue.useId=function(){return I.H.useId()},ue.useImperativeHandle=function(L,it,St){return I.H.useImperativeHandle(L,it,St)},ue.useInsertionEffect=function(L,it){return I.H.useInsertionEffect(L,it)},ue.useLayoutEffect=function(L,it){return I.H.useLayoutEffect(L,it)},ue.useMemo=function(L,it){return I.H.useMemo(L,it)},ue.useOptimistic=function(L,it){return I.H.useOptimistic(L,it)},ue.useReducer=function(L,it,St){return I.H.useReducer(L,it,St)},ue.useRef=function(L){return I.H.useRef(L)},ue.useState=function(L){return I.H.useState(L)},ue.useSyncExternalStore=function(L,it,St){return I.H.useSyncExternalStore(L,it,St)},ue.useTransition=function(){return I.H.useTransition()},ue.version="19.2.3",ue}var Bg;function Gd(){return Bg||(Bg=1,lh.exports=BS()),lh.exports}var We=Gd();const HS=K_(We);var ch={exports:{}},Go={},uh={exports:{}},fh={};var Hg;function GS(){return Hg||(Hg=1,(function(o){function t(z,V){var at=z.length;z.push(V);t:for(;0<at;){var At=at-1>>>1,Tt=z[At];if(0<l(Tt,V))z[At]=V,z[at]=Tt,at=At;else break t}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var V=z[0],at=z.pop();if(at!==V){z[0]=at;t:for(var At=0,Tt=z.length,L=Tt>>>1;At<L;){var it=2*(At+1)-1,St=z[it],Lt=it+1,Gt=z[Lt];if(0>l(St,at))Lt<Tt&&0>l(Gt,St)?(z[At]=Gt,z[Lt]=at,At=Lt):(z[At]=St,z[it]=at,At=it);else if(Lt<Tt&&0>l(Gt,at))z[At]=Gt,z[Lt]=at,At=Lt;else break t}}return V}function l(z,V){var at=z.sortIndex-V.sortIndex;return at!==0?at:z.id-V.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,g=null,S=3,b=!1,E=!1,C=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function U(z){for(var V=i(p);V!==null;){if(V.callback===null)s(p);else if(V.startTime<=z)s(p),V.sortIndex=V.expirationTime,t(m,V);else break;V=i(p)}}function F(z){if(C=!1,U(z),!E)if(i(m)!==null)E=!0,B||(B=!0,Q());else{var V=i(p);V!==null&&ct(F,V.startTime-z)}}var B=!1,I=-1,q=5,T=-1;function D(){return y?!0:!(o.unstable_now()-T<q)}function k(){if(y=!1,B){var z=o.unstable_now();T=z;var V=!0;try{t:{E=!1,C&&(C=!1,P(I),I=-1),b=!0;var at=S;try{e:{for(U(z),g=i(m);g!==null&&!(g.expirationTime>z&&D());){var At=g.callback;if(typeof At=="function"){g.callback=null,S=g.priorityLevel;var Tt=At(g.expirationTime<=z);if(z=o.unstable_now(),typeof Tt=="function"){g.callback=Tt,U(z),V=!0;break e}g===i(m)&&s(m),U(z)}else s(m);g=i(m)}if(g!==null)V=!0;else{var L=i(p);L!==null&&ct(F,L.startTime-z),V=!1}}break t}finally{g=null,S=at,b=!1}V=void 0}}finally{V?Q():B=!1}}}var Q;if(typeof O=="function")Q=function(){O(k)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,ft=tt.port2;tt.port1.onmessage=k,Q=function(){ft.postMessage(null)}}else Q=function(){x(k,0)};function ct(z,V){I=x(function(){z(o.unstable_now())},V)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(z){switch(S){case 1:case 2:case 3:var V=3;break;default:V=S}var at=S;S=V;try{return z()}finally{S=at}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(z,V){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var at=S;S=z;try{return V()}finally{S=at}},o.unstable_scheduleCallback=function(z,V,at){var At=o.unstable_now();switch(typeof at=="object"&&at!==null?(at=at.delay,at=typeof at=="number"&&0<at?At+at:At):at=At,z){case 1:var Tt=-1;break;case 2:Tt=250;break;case 5:Tt=1073741823;break;case 4:Tt=1e4;break;default:Tt=5e3}return Tt=at+Tt,z={id:v++,callback:V,priorityLevel:z,startTime:at,expirationTime:Tt,sortIndex:-1},at>At?(z.sortIndex=at,t(p,z),i(m)===null&&z===i(p)&&(C?(P(I),I=-1):C=!0,ct(F,at-At))):(z.sortIndex=Tt,t(m,z),E||b||(E=!0,B||(B=!0,Q()))),z},o.unstable_shouldYield=D,o.unstable_wrapCallback=function(z){var V=S;return function(){var at=S;S=V;try{return z.apply(this,arguments)}finally{S=at}}}})(fh)),fh}var Gg;function VS(){return Gg||(Gg=1,uh.exports=GS()),uh.exports}var hh={exports:{}},Fn={};var Vg;function kS(){if(Vg)return Fn;Vg=1;var o=Gd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Fn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,v)},Fn.flushSync=function(m){var p=h.T,v=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=v,s.d.f()}},Fn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Fn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Fn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:b}):v==="script"&&s.d.X(m,{crossOrigin:g,integrity:S,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Fn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Fn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Fn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Fn.requestFormReset=function(m){s.d.r(m)},Fn.unstable_batchedUpdates=function(m,p){return m(p)},Fn.useFormState=function(m,p,v){return h.H.useFormState(m,p,v)},Fn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Fn.version="19.2.3",Fn}var kg;function XS(){if(kg)return hh.exports;kg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),hh.exports=kS(),hh.exports}var Xg;function jS(){if(Xg)return Go;Xg=1;var o=VS(),t=Gd(),i=XS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var _=!1,A=c.child;A;){if(A===a){_=!0,a=c,r=f;break}if(A===r){_=!0,r=c,a=f;break}A=A.sibling}if(!_){for(A=f.child;A;){if(A===a){_=!0,a=f,r=c;break}if(A===r){_=!0,r=f,a=c;break}A=A.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),O=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var tt=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===tt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case F:return"Suspense";case B:return"SuspenseList";case T:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case O:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:ft(e.type)||"Memo";case q:n=e._payload,e=e._init;try{return ft(e(n))}catch{}}return null}var ct=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,at={pending:!1,data:null,method:null,action:null},At=[],Tt=-1;function L(e){return{current:e}}function it(e){0>Tt||(e.current=At[Tt],At[Tt]=null,Tt--)}function St(e,n){Tt++,At[Tt]=e.current,e.current=n}var Lt=L(null),Gt=L(null),$=L(null),ht=L(null);function zt(e,n){switch(St($,n),St(Gt,e),St(Lt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?sg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=sg(n),e=rg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}it(Lt),St(Lt,e)}function Ct(){it(Lt),it(Gt),it($)}function It(e){e.memoizedState!==null&&St(ht,e);var n=Lt.current,a=rg(n,e.type);n!==a&&(St(Gt,e),St(Lt,a))}function fe(e){Gt.current===e&&(it(Lt),it(Gt)),ht.current===e&&(it(ht),zo._currentValue=at)}var Ye,Se;function ve(e){if(Ye===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ye=n&&n[1]||"",Se=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ye+e+Se}var kt=!1;function Nt(e,n){if(!e||kt)return"";kt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(lt){var rt=lt}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(lt){rt=lt}e.call(yt.prototype)}}else{try{throw Error()}catch(lt){rt=lt}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(lt){if(lt&&rt&&typeof lt.stack=="string")return[lt.stack,rt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],A=f[1];if(_&&A){var G=_.split(`
`),nt=A.split(`
`);for(c=r=0;r<G.length&&!G[r].includes("DetermineComponentFrameRoot");)r++;for(;c<nt.length&&!nt[c].includes("DetermineComponentFrameRoot");)c++;if(r===G.length||c===nt.length)for(r=G.length-1,c=nt.length-1;1<=r&&0<=c&&G[r]!==nt[c];)c--;for(;1<=r&&0<=c;r--,c--)if(G[r]!==nt[c]){if(r!==1||c!==1)do if(r--,c--,0>c||G[r]!==nt[c]){var mt=`
`+G[r].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=r&&0<=c);break}}}finally{kt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ve(a):""}function re(e,n){switch(e.tag){case 26:case 27:case 5:return ve(e.type);case 16:return ve("Lazy");case 13:return e.child!==n&&n!==null?ve("Suspense Fallback"):ve("Suspense");case 19:return ve("SuspenseList");case 0:case 15:return Nt(e.type,!1);case 11:return Nt(e.type.render,!1);case 1:return Nt(e.type,!0);case 31:return ve("Activity");default:return""}}function H(e){try{var n="",a=null;do n+=re(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var _e=Object.prototype.hasOwnProperty,ye=o.unstable_scheduleCallback,Ce=o.unstable_cancelCallback,jt=o.unstable_shouldYield,N=o.unstable_requestPaint,M=o.unstable_now,W=o.unstable_getCurrentPriorityLevel,_t=o.unstable_ImmediatePriority,Mt=o.unstable_UserBlockingPriority,ut=o.unstable_NormalPriority,Zt=o.unstable_LowPriority,Pt=o.unstable_IdlePriority,Wt=o.log,ie=o.unstable_setDisableYieldValue,wt=null,Ut=null;function gt(e){if(typeof Wt=="function"&&ie(e),Ut&&typeof Ut.setStrictMode=="function")try{Ut.setStrictMode(wt,e)}catch{}}var bt=Math.clz32?Math.clz32:X,Et=Math.log,Xt=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Et(e)/Xt|0)|0}var Ot=256,vt=262144,Rt=4194304;function dt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function pt(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var A=r&134217727;return A!==0?(r=A&~f,r!==0?c=dt(r):(_&=A,_!==0?c=dt(_):a||(a=A&~e,a!==0&&(c=dt(a))))):(A=r&~f,A!==0?c=dt(A):_!==0?c=dt(_):a||(a=r&~e,a!==0&&(c=dt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Dt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function $t(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Me(){var e=Rt;return Rt<<=1,(Rt&62914560)===0&&(Rt=4194304),e}function le(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function tn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function kn(e,n,a,r,c,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,G=e.expirationTimes,nt=e.hiddenUpdates;for(a=_&~a;0<a;){var mt=31-bt(a),yt=1<<mt;A[mt]=0,G[mt]=-1;var rt=nt[mt];if(rt!==null)for(nt[mt]=null,mt=0;mt<rt.length;mt++){var lt=rt[mt];lt!==null&&(lt.lane&=-536870913)}a&=~yt}r!==0&&Da(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function Da(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-bt(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function ei(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-bt(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function Bi(e,n){var a=n&-n;return a=(a&42)!==0?1:ea(a),(a&(e.suspendedLanes|n))!==0?0:a}function ea(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function wi(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:wg(e.type))}function ni(e,n){var a=V.p;try{return V.p=e,n()}finally{V.p=a}}var In=Math.random().toString(36).slice(2),en="__reactFiber$"+In,Tn="__reactProps$"+In,Di="__reactContainer$"+In,Xs="__reactEvents$"+In,js="__reactListeners$"+In,sl="__reactHandles$"+In,Kr="__reactResources$"+In,ds="__reactMarker$"+In;function Qr(e){delete e[en],delete e[Tn],delete e[Xs],delete e[js],delete e[sl]}function Na(e){var n=e[en];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Di]||a[en]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=dg(e);e!==null;){if(a=e[en])return a;e=dg(e)}return n}e=a,a=e.parentNode}return null}function Ua(e){if(e=e[en]||e[Di]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ps(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function La(e){var n=e[Kr];return n||(n=e[Kr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function R(e){e[ds]=!0}var Y=new Set,ot={};function st(e,n){J(e,n),J(e+"Capture",n)}function J(e,n){for(ot[e]=n,e=0;e<n.length;e++)Y.add(n[e])}var Ft=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vt={},Bt={};function qt(e){return _e.call(Bt,e)?!0:_e.call(Vt,e)?!1:Ft.test(e)?Bt[e]=!0:(Vt[e]=!0,!1)}function Kt(e,n,a){if(qt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ne(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Qt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function ae(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function nn(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ke(e){if(!e._valueTracker){var n=Pe(e)?"checked":"value";e._valueTracker=nn(e,n,""+e[n])}}function Fe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Pe(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function te(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ze=/[\n"\\]/g;function ce(e){return e.replace(ze,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function An(e,n,a,r,c,f,_,A){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ae(n)):e.value!==""+ae(n)&&(e.value=""+ae(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?Rn(e,_,ae(n)):a!=null?Rn(e,_,ae(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ae(A):e.removeAttribute("name")}function na(e,n,a,r,c,f,_,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ke(e);return}a=a!=null?""+ae(a):"",n=n!=null?""+ae(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=A?e.checked:!!r,e.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),Ke(e)}function Rn(e,n,a){n==="number"&&te(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function mi(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+ae(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Be(e,n,a){if(n!=null&&(n=""+ae(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ae(a):""}function Cn(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(ct(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ae(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Ke(e)}function _n(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var wn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Dn(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||wn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ws(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&Dn(e,c,r)}else for(var f in n)n.hasOwnProperty(f)&&Dn(e,f,n[f])}function Ni(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ox=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rl(e){return Ox.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ia(){}var iu=null;function au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qs=null,Ys=null;function ap(e){var n=Ua(e);if(n&&(e=n.stateNode)){var a=e[Tn]||null;t:switch(e=n.stateNode,n.type){case"input":if(An(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ce(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[Tn]||null;if(!c)throw Error(s(90));An(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Fe(r)}break t;case"textarea":Be(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&mi(e,!!a.multiple,n,!1)}}}var su=!1;function sp(e,n,a){if(su)return e(n,a);su=!0;try{var r=e(n);return r}finally{if(su=!1,(qs!==null||Ys!==null)&&(ql(),qs&&(n=qs,e=Ys,Ys=qs=null,ap(n),e)))for(n=0;n<e.length;n++)ap(e[n])}}function Jr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[Tn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=!1;if(aa)try{var $r={};Object.defineProperty($r,"passive",{get:function(){ru=!0}}),window.addEventListener("test",$r,$r),window.removeEventListener("test",$r,$r)}catch{ru=!1}var Oa=null,ou=null,ol=null;function rp(){if(ol)return ol;var e,n=ou,a=n.length,r,c="value"in Oa?Oa.value:Oa.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var _=a-e;for(r=1;r<=_&&n[a-r]===c[f-r];r++);return ol=c.slice(e,1<r?1-r:void 0)}function ll(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function cl(){return!0}function op(){return!1}function Wn(e){function n(a,r,c,f,_){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?cl:op,this.isPropagationStopped=op,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),n}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ul=Wn(ms),to=g({},ms,{view:0,detail:0}),Px=Wn(to),lu,cu,eo,fl=g({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==eo&&(eo&&e.type==="mousemove"?(lu=e.screenX-eo.screenX,cu=e.screenY-eo.screenY):cu=lu=0,eo=e),lu)},movementY:function(e){return"movementY"in e?e.movementY:cu}}),lp=Wn(fl),zx=g({},fl,{dataTransfer:0}),Ix=Wn(zx),Fx=g({},to,{relatedTarget:0}),uu=Wn(Fx),Bx=g({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),Hx=Wn(Bx),Gx=g({},ms,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vx=Wn(Gx),kx=g({},ms,{data:0}),cp=Wn(kx),Xx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Wx[e])?!!n[e]:!1}function fu(){return qx}var Yx=g({},to,{key:function(e){if(e.key){var n=Xx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ll(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(e){return e.type==="keypress"?ll(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ll(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zx=Wn(Yx),Kx=g({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),up=Wn(Kx),Qx=g({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),Jx=Wn(Qx),$x=g({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),tv=Wn($x),ev=g({},fl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nv=Wn(ev),iv=g({},ms,{newState:0,oldState:0}),av=Wn(iv),sv=[9,13,27,32],hu=aa&&"CompositionEvent"in window,no=null;aa&&"documentMode"in document&&(no=document.documentMode);var rv=aa&&"TextEvent"in window&&!no,fp=aa&&(!hu||no&&8<no&&11>=no),hp=" ",dp=!1;function pp(e,n){switch(e){case"keyup":return sv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zs=!1;function ov(e,n){switch(e){case"compositionend":return mp(n);case"keypress":return n.which!==32?null:(dp=!0,hp);case"textInput":return e=n.data,e===hp&&dp?null:e;default:return null}}function lv(e,n){if(Zs)return e==="compositionend"||!hu&&pp(e,n)?(e=rp(),ol=ou=Oa=null,Zs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return fp&&n.locale!=="ko"?null:n.data;default:return null}}var cv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!cv[e.type]:n==="textarea"}function _p(e,n,a,r){qs?Ys?Ys.push(r):Ys=[r]:qs=r,n=tc(n,"onChange"),0<n.length&&(a=new ul("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var io=null,ao=null;function uv(e){$0(e,0)}function hl(e){var n=ps(e);if(Fe(n))return e}function xp(e,n){if(e==="change")return n}var vp=!1;if(aa){var du;if(aa){var pu="oninput"in document;if(!pu){var Sp=document.createElement("div");Sp.setAttribute("oninput","return;"),pu=typeof Sp.oninput=="function"}du=pu}else du=!1;vp=du&&(!document.documentMode||9<document.documentMode)}function yp(){io&&(io.detachEvent("onpropertychange",Mp),ao=io=null)}function Mp(e){if(e.propertyName==="value"&&hl(ao)){var n=[];_p(n,ao,e,au(e)),sp(uv,n)}}function fv(e,n,a){e==="focusin"?(yp(),io=n,ao=a,io.attachEvent("onpropertychange",Mp)):e==="focusout"&&yp()}function hv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hl(ao)}function dv(e,n){if(e==="click")return hl(n)}function pv(e,n){if(e==="input"||e==="change")return hl(n)}function mv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ii=typeof Object.is=="function"?Object.is:mv;function so(e,n){if(ii(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!_e.call(n,c)||!ii(e[c],n[c]))return!1}return!0}function bp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ep(e,n){var a=bp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=bp(a)}}function Tp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Tp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ap(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=te(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=te(e.document)}return n}function mu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var gv=aa&&"documentMode"in document&&11>=document.documentMode,Ks=null,gu=null,ro=null,_u=!1;function Rp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_u||Ks==null||Ks!==te(r)||(r=Ks,"selectionStart"in r&&mu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ro&&so(ro,r)||(ro=r,r=tc(gu,"onSelect"),0<r.length&&(n=new ul("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Ks)))}function gs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Qs={animationend:gs("Animation","AnimationEnd"),animationiteration:gs("Animation","AnimationIteration"),animationstart:gs("Animation","AnimationStart"),transitionrun:gs("Transition","TransitionRun"),transitionstart:gs("Transition","TransitionStart"),transitioncancel:gs("Transition","TransitionCancel"),transitionend:gs("Transition","TransitionEnd")},xu={},Cp={};aa&&(Cp=document.createElement("div").style,"AnimationEvent"in window||(delete Qs.animationend.animation,delete Qs.animationiteration.animation,delete Qs.animationstart.animation),"TransitionEvent"in window||delete Qs.transitionend.transition);function _s(e){if(xu[e])return xu[e];if(!Qs[e])return e;var n=Qs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Cp)return xu[e]=n[a];return e}var wp=_s("animationend"),Dp=_s("animationiteration"),Np=_s("animationstart"),_v=_s("transitionrun"),xv=_s("transitionstart"),vv=_s("transitioncancel"),Up=_s("transitionend"),Lp=new Map,vu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vu.push("scrollEnd");function Ui(e,n){Lp.set(e,n),st(n,[e])}var dl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},gi=[],Js=0,Su=0;function pl(){for(var e=Js,n=Su=Js=0;n<e;){var a=gi[n];gi[n++]=null;var r=gi[n];gi[n++]=null;var c=gi[n];gi[n++]=null;var f=gi[n];if(gi[n++]=null,r!==null&&c!==null){var _=r.pending;_===null?c.next=c:(c.next=_.next,_.next=c),r.pending=c}f!==0&&Op(a,c,f)}}function ml(e,n,a,r){gi[Js++]=e,gi[Js++]=n,gi[Js++]=a,gi[Js++]=r,Su|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function yu(e,n,a,r){return ml(e,n,a,r),gl(e)}function xs(e,n){return ml(e,null,null,n),gl(e)}function Op(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-bt(a),e=f.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function gl(e){if(50<wo)throw wo=0,Nf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var $s={};function Sv(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(e,n,a,r){return new Sv(e,n,a,r)}function Mu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sa(e,n){var a=e.alternate;return a===null?(a=ai(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Pp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function _l(e,n,a,r,c,f){var _=0;if(r=e,typeof e=="function")Mu(e)&&(_=1);else if(typeof e=="string")_=TS(e,a,Lt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case T:return e=ai(31,a,n,c),e.elementType=T,e.lanes=f,e;case C:return vs(a.children,c,f,n);case y:_=8,c|=24;break;case x:return e=ai(12,a,n,c|2),e.elementType=x,e.lanes=f,e;case F:return e=ai(13,a,n,c),e.elementType=F,e.lanes=f,e;case B:return e=ai(19,a,n,c),e.elementType=B,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:_=10;break t;case P:_=9;break t;case U:_=11;break t;case I:_=14;break t;case q:_=16,r=null;break t}_=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=ai(_,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function vs(e,n,a,r){return e=ai(7,e,r,n),e.lanes=a,e}function bu(e,n,a){return e=ai(6,e,null,n),e.lanes=a,e}function zp(e){var n=ai(18,null,null,0);return n.stateNode=e,n}function Eu(e,n,a){return n=ai(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ip=new WeakMap;function _i(e,n){if(typeof e=="object"&&e!==null){var a=Ip.get(e);return a!==void 0?a:(n={value:e,source:n,stack:H(n)},Ip.set(e,n),n)}return{value:e,source:n,stack:H(n)}}var tr=[],er=0,xl=null,oo=0,xi=[],vi=0,Pa=null,Hi=1,Gi="";function ra(e,n){tr[er++]=oo,tr[er++]=xl,xl=e,oo=n}function Fp(e,n,a){xi[vi++]=Hi,xi[vi++]=Gi,xi[vi++]=Pa,Pa=e;var r=Hi;e=Gi;var c=32-bt(r)-1;r&=~(1<<c),a+=1;var f=32-bt(n)+c;if(30<f){var _=c-c%5;f=(r&(1<<_)-1).toString(32),r>>=_,c-=_,Hi=1<<32-bt(n)+c|a<<c|r,Gi=f+e}else Hi=1<<f|a<<c|r,Gi=e}function Tu(e){e.return!==null&&(ra(e,1),Fp(e,1,0))}function Au(e){for(;e===xl;)xl=tr[--er],tr[er]=null,oo=tr[--er],tr[er]=null;for(;e===Pa;)Pa=xi[--vi],xi[vi]=null,Gi=xi[--vi],xi[vi]=null,Hi=xi[--vi],xi[vi]=null}function Bp(e,n){xi[vi++]=Hi,xi[vi++]=Gi,xi[vi++]=Pa,Hi=n.id,Gi=n.overflow,Pa=e}var Nn=null,Je=null,we=!1,za=null,Si=!1,Ru=Error(s(519));function Ia(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw lo(_i(n,e)),Ru}function Hp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[en]=e,n[Tn]=r,a){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<No.length;a++)Ee(No[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),na(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),Cn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||ig(n.textContent,a)?(r.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),r.onScroll!=null&&Ee("scroll",n),r.onScrollEnd!=null&&Ee("scrollend",n),r.onClick!=null&&(n.onclick=ia),n=!0):n=!1,n||Ia(e,!0)}function Gp(e){for(Nn=e.return;Nn;)switch(Nn.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:Nn=Nn.return}}function nr(e){if(e!==Nn)return!1;if(!we)return Gp(e),we=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Wf(e.type,e.memoizedProps)),a=!a),a&&Je&&Ia(e),Gp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Je=hg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Je=hg(e)}else n===27?(n=Je,Qa(e.type)?(e=Qf,Qf=null,Je=e):Je=n):Je=Nn?Mi(e.stateNode.nextSibling):null;return!0}function Ss(){Je=Nn=null,we=!1}function Cu(){var e=za;return e!==null&&(Kn===null?Kn=e:Kn.push.apply(Kn,e),za=null),e}function lo(e){za===null?za=[e]:za.push(e)}var wu=L(null),ys=null,oa=null;function Fa(e,n,a){St(wu,n._currentValue),n._currentValue=a}function la(e){e._currentValue=wu.current,it(wu)}function Du(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Nu(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=c;for(var G=0;G<n.length;G++)if(A.context===n[G]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Du(f.return,a,e),r||(_=null);break t}f=A.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Du(_,a,e),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===e){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function ir(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var A=c.type;ii(c.pendingProps.value,_.value)||(e!==null?e.push(A):e=[A])}}else if(c===ht.current){if(_=c.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(zo):e=[zo])}c=c.return}e!==null&&Nu(n,e,a,r),n.flags|=262144}function vl(e){for(e=e.firstContext;e!==null;){if(!ii(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ms(e){ys=e,oa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Un(e){return Vp(ys,e)}function Sl(e,n){return ys===null&&Ms(e),Vp(e,n)}function Vp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},oa===null){if(e===null)throw Error(s(308));oa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else oa=oa.next=n;return a}var yv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Mv=o.unstable_scheduleCallback,bv=o.unstable_NormalPriority,hn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uu(){return{controller:new yv,data:new Map,refCount:0}}function co(e){e.refCount--,e.refCount===0&&Mv(bv,function(){e.controller.abort()})}var uo=null,Lu=0,ar=0,sr=null;function Ev(e,n){if(uo===null){var a=uo=[];Lu=0,ar=If(),sr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Lu++,n.then(kp,kp),n}function kp(){if(--Lu===0&&uo!==null){sr!==null&&(sr.status="fulfilled");var e=uo;uo=null,ar=0,sr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Tv(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var Xp=z.S;z.S=function(e,n){R0=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ev(e,n),Xp!==null&&Xp(e,n)};var bs=L(null);function Ou(){var e=bs.current;return e!==null?e:Ze.pooledCache}function yl(e,n){n===null?St(bs,bs.current):St(bs,n.pool)}function jp(){var e=Ou();return e===null?null:{parent:hn._currentValue,pool:e}}var rr=Error(s(460)),Pu=Error(s(474)),Ml=Error(s(542)),bl={then:function(){}};function Wp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function qp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ia,ia),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Zp(e),e;default:if(typeof n.status=="string")n.then(ia,ia);else{if(e=Ze,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Zp(e),e}throw Ts=n,rr}}function Es(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ts=a,rr):a}}var Ts=null;function Yp(){if(Ts===null)throw Error(s(459));var e=Ts;return Ts=null,e}function Zp(e){if(e===rr||e===Ml)throw Error(s(483))}var or=null,fo=0;function El(e){var n=fo;return fo+=1,or===null&&(or=[]),qp(or,e,n)}function ho(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Tl(e,n){throw n.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Kp(e){function n(Z,j){if(e){var et=Z.deletions;et===null?(Z.deletions=[j],Z.flags|=16):et.push(j)}}function a(Z,j){if(!e)return null;for(;j!==null;)n(Z,j),j=j.sibling;return null}function r(Z){for(var j=new Map;Z!==null;)Z.key!==null?j.set(Z.key,Z):j.set(Z.index,Z),Z=Z.sibling;return j}function c(Z,j){return Z=sa(Z,j),Z.index=0,Z.sibling=null,Z}function f(Z,j,et){return Z.index=et,e?(et=Z.alternate,et!==null?(et=et.index,et<j?(Z.flags|=67108866,j):et):(Z.flags|=67108866,j)):(Z.flags|=1048576,j)}function _(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function A(Z,j,et,xt){return j===null||j.tag!==6?(j=bu(et,Z.mode,xt),j.return=Z,j):(j=c(j,et),j.return=Z,j)}function G(Z,j,et,xt){var ee=et.type;return ee===C?mt(Z,j,et.props.children,xt,et.key):j!==null&&(j.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===q&&Es(ee)===j.type)?(j=c(j,et.props),ho(j,et),j.return=Z,j):(j=_l(et.type,et.key,et.props,null,Z.mode,xt),ho(j,et),j.return=Z,j)}function nt(Z,j,et,xt){return j===null||j.tag!==4||j.stateNode.containerInfo!==et.containerInfo||j.stateNode.implementation!==et.implementation?(j=Eu(et,Z.mode,xt),j.return=Z,j):(j=c(j,et.children||[]),j.return=Z,j)}function mt(Z,j,et,xt,ee){return j===null||j.tag!==7?(j=vs(et,Z.mode,xt,ee),j.return=Z,j):(j=c(j,et),j.return=Z,j)}function yt(Z,j,et){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=bu(""+j,Z.mode,et),j.return=Z,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case b:return et=_l(j.type,j.key,j.props,null,Z.mode,et),ho(et,j),et.return=Z,et;case E:return j=Eu(j,Z.mode,et),j.return=Z,j;case q:return j=Es(j),yt(Z,j,et)}if(ct(j)||Q(j))return j=vs(j,Z.mode,et,null),j.return=Z,j;if(typeof j.then=="function")return yt(Z,El(j),et);if(j.$$typeof===O)return yt(Z,Sl(Z,j),et);Tl(Z,j)}return null}function rt(Z,j,et,xt){var ee=j!==null?j.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return ee!==null?null:A(Z,j,""+et,xt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case b:return et.key===ee?G(Z,j,et,xt):null;case E:return et.key===ee?nt(Z,j,et,xt):null;case q:return et=Es(et),rt(Z,j,et,xt)}if(ct(et)||Q(et))return ee!==null?null:mt(Z,j,et,xt,null);if(typeof et.then=="function")return rt(Z,j,El(et),xt);if(et.$$typeof===O)return rt(Z,j,Sl(Z,et),xt);Tl(Z,et)}return null}function lt(Z,j,et,xt,ee){if(typeof xt=="string"&&xt!==""||typeof xt=="number"||typeof xt=="bigint")return Z=Z.get(et)||null,A(j,Z,""+xt,ee);if(typeof xt=="object"&&xt!==null){switch(xt.$$typeof){case b:return Z=Z.get(xt.key===null?et:xt.key)||null,G(j,Z,xt,ee);case E:return Z=Z.get(xt.key===null?et:xt.key)||null,nt(j,Z,xt,ee);case q:return xt=Es(xt),lt(Z,j,et,xt,ee)}if(ct(xt)||Q(xt))return Z=Z.get(et)||null,mt(j,Z,xt,ee,null);if(typeof xt.then=="function")return lt(Z,j,et,El(xt),ee);if(xt.$$typeof===O)return lt(Z,j,et,Sl(j,xt),ee);Tl(j,xt)}return null}function Yt(Z,j,et,xt){for(var ee=null,Ue=null,Jt=j,me=j=0,Re=null;Jt!==null&&me<et.length;me++){Jt.index>me?(Re=Jt,Jt=null):Re=Jt.sibling;var Le=rt(Z,Jt,et[me],xt);if(Le===null){Jt===null&&(Jt=Re);break}e&&Jt&&Le.alternate===null&&n(Z,Jt),j=f(Le,j,me),Ue===null?ee=Le:Ue.sibling=Le,Ue=Le,Jt=Re}if(me===et.length)return a(Z,Jt),we&&ra(Z,me),ee;if(Jt===null){for(;me<et.length;me++)Jt=yt(Z,et[me],xt),Jt!==null&&(j=f(Jt,j,me),Ue===null?ee=Jt:Ue.sibling=Jt,Ue=Jt);return we&&ra(Z,me),ee}for(Jt=r(Jt);me<et.length;me++)Re=lt(Jt,Z,me,et[me],xt),Re!==null&&(e&&Re.alternate!==null&&Jt.delete(Re.key===null?me:Re.key),j=f(Re,j,me),Ue===null?ee=Re:Ue.sibling=Re,Ue=Re);return e&&Jt.forEach(function(ns){return n(Z,ns)}),we&&ra(Z,me),ee}function se(Z,j,et,xt){if(et==null)throw Error(s(151));for(var ee=null,Ue=null,Jt=j,me=j=0,Re=null,Le=et.next();Jt!==null&&!Le.done;me++,Le=et.next()){Jt.index>me?(Re=Jt,Jt=null):Re=Jt.sibling;var ns=rt(Z,Jt,Le.value,xt);if(ns===null){Jt===null&&(Jt=Re);break}e&&Jt&&ns.alternate===null&&n(Z,Jt),j=f(ns,j,me),Ue===null?ee=ns:Ue.sibling=ns,Ue=ns,Jt=Re}if(Le.done)return a(Z,Jt),we&&ra(Z,me),ee;if(Jt===null){for(;!Le.done;me++,Le=et.next())Le=yt(Z,Le.value,xt),Le!==null&&(j=f(Le,j,me),Ue===null?ee=Le:Ue.sibling=Le,Ue=Le);return we&&ra(Z,me),ee}for(Jt=r(Jt);!Le.done;me++,Le=et.next())Le=lt(Jt,Z,me,Le.value,xt),Le!==null&&(e&&Le.alternate!==null&&Jt.delete(Le.key===null?me:Le.key),j=f(Le,j,me),Ue===null?ee=Le:Ue.sibling=Le,Ue=Le);return e&&Jt.forEach(function(zS){return n(Z,zS)}),we&&ra(Z,me),ee}function je(Z,j,et,xt){if(typeof et=="object"&&et!==null&&et.type===C&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case b:t:{for(var ee=et.key;j!==null;){if(j.key===ee){if(ee=et.type,ee===C){if(j.tag===7){a(Z,j.sibling),xt=c(j,et.props.children),xt.return=Z,Z=xt;break t}}else if(j.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===q&&Es(ee)===j.type){a(Z,j.sibling),xt=c(j,et.props),ho(xt,et),xt.return=Z,Z=xt;break t}a(Z,j);break}else n(Z,j);j=j.sibling}et.type===C?(xt=vs(et.props.children,Z.mode,xt,et.key),xt.return=Z,Z=xt):(xt=_l(et.type,et.key,et.props,null,Z.mode,xt),ho(xt,et),xt.return=Z,Z=xt)}return _(Z);case E:t:{for(ee=et.key;j!==null;){if(j.key===ee)if(j.tag===4&&j.stateNode.containerInfo===et.containerInfo&&j.stateNode.implementation===et.implementation){a(Z,j.sibling),xt=c(j,et.children||[]),xt.return=Z,Z=xt;break t}else{a(Z,j);break}else n(Z,j);j=j.sibling}xt=Eu(et,Z.mode,xt),xt.return=Z,Z=xt}return _(Z);case q:return et=Es(et),je(Z,j,et,xt)}if(ct(et))return Yt(Z,j,et,xt);if(Q(et)){if(ee=Q(et),typeof ee!="function")throw Error(s(150));return et=ee.call(et),se(Z,j,et,xt)}if(typeof et.then=="function")return je(Z,j,El(et),xt);if(et.$$typeof===O)return je(Z,j,Sl(Z,et),xt);Tl(Z,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,j!==null&&j.tag===6?(a(Z,j.sibling),xt=c(j,et),xt.return=Z,Z=xt):(a(Z,j),xt=bu(et,Z.mode,xt),xt.return=Z,Z=xt),_(Z)):a(Z,j)}return function(Z,j,et,xt){try{fo=0;var ee=je(Z,j,et,xt);return or=null,ee}catch(Jt){if(Jt===rr||Jt===Ml)throw Jt;var Ue=ai(29,Jt,null,Z.mode);return Ue.lanes=xt,Ue.return=Z,Ue}}}var As=Kp(!0),Qp=Kp(!1),Ba=!1;function zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Iu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ga(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ie&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=gl(e),Op(e,null,a),n}return ml(e,r,n,a),gl(e)}function po(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,ei(e,a)}}function Fu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Bu=!1;function mo(){if(Bu){var e=sr;if(e!==null)throw e}}function go(e,n,a,r){Bu=!1;var c=e.updateQueue;Ba=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var G=A,nt=G.next;G.next=null,_===null?f=nt:_.next=nt,_=G;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,A=mt.lastBaseUpdate,A!==_&&(A===null?mt.firstBaseUpdate=nt:A.next=nt,mt.lastBaseUpdate=G))}if(f!==null){var yt=c.baseState;_=0,mt=nt=G=null,A=f;do{var rt=A.lane&-536870913,lt=rt!==A.lane;if(lt?(Ae&rt)===rt:(r&rt)===rt){rt!==0&&rt===ar&&(Bu=!0),mt!==null&&(mt=mt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Yt=e,se=A;rt=n;var je=a;switch(se.tag){case 1:if(Yt=se.payload,typeof Yt=="function"){yt=Yt.call(je,yt,rt);break t}yt=Yt;break t;case 3:Yt.flags=Yt.flags&-65537|128;case 0:if(Yt=se.payload,rt=typeof Yt=="function"?Yt.call(je,yt,rt):Yt,rt==null)break t;yt=g({},yt,rt);break t;case 2:Ba=!0}}rt=A.callback,rt!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=c.callbacks,lt===null?c.callbacks=[rt]:lt.push(rt))}else lt={lane:rt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},mt===null?(nt=mt=lt,G=yt):mt=mt.next=lt,_|=rt;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;lt=A,A=lt.next,lt.next=null,c.lastBaseUpdate=lt,c.shared.pending=null}}while(!0);mt===null&&(G=yt),c.baseState=G,c.firstBaseUpdate=nt,c.lastBaseUpdate=mt,f===null&&(c.shared.lanes=0),Wa|=_,e.lanes=_,e.memoizedState=yt}}function Jp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function $p(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Jp(a[e],n)}var lr=L(null),Al=L(0);function tm(e,n){e=_a,St(Al,e),St(lr,n),_a=e|n.baseLanes}function Hu(){St(Al,_a),St(lr,lr.current)}function Gu(){_a=Al.current,it(lr),it(Al)}var si=L(null),yi=null;function Va(e){var n=e.alternate;St(un,un.current&1),St(si,e),yi===null&&(n===null||lr.current!==null||n.memoizedState!==null)&&(yi=e)}function Vu(e){St(un,un.current),St(si,e),yi===null&&(yi=e)}function em(e){e.tag===22?(St(un,un.current),St(si,e),yi===null&&(yi=e)):ka()}function ka(){St(un,un.current),St(si,si.current)}function ri(e){it(si),yi===e&&(yi=null),it(un)}var un=L(0);function Rl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Zf(a)||Kf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ca=0,pe=null,ke=null,dn=null,Cl=!1,cr=!1,Rs=!1,wl=0,_o=0,ur=null,Av=0;function on(){throw Error(s(321))}function ku(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ii(e[a],n[a]))return!1;return!0}function Xu(e,n,a,r,c,f){return ca=f,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?Fm:rf,Rs=!1,f=a(r,c),Rs=!1,cr&&(f=im(n,a,r,c)),nm(e),f}function nm(e){z.H=So;var n=ke!==null&&ke.next!==null;if(ca=0,dn=ke=pe=null,Cl=!1,_o=0,ur=null,n)throw Error(s(300));e===null||pn||(e=e.dependencies,e!==null&&vl(e)&&(pn=!0))}function im(e,n,a,r){pe=e;var c=0;do{if(cr&&(ur=null),_o=0,cr=!1,25<=c)throw Error(s(301));if(c+=1,dn=ke=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=Bm,f=n(a,r)}while(cr);return f}function Rv(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?xo(n):n,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(pe.flags|=1024),n}function ju(){var e=wl!==0;return wl=0,e}function Wu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function qu(e){if(Cl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Cl=!1}ca=0,dn=ke=pe=null,cr=!1,_o=wl=0,ur=null}function Xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?pe.memoizedState=dn=e:dn=dn.next=e,dn}function fn(){if(ke===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var n=dn===null?pe.memoizedState:dn.next;if(n!==null)dn=n,ke=e;else{if(e===null)throw pe.alternate===null?Error(s(467)):Error(s(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},dn===null?pe.memoizedState=dn=e:dn=dn.next=e}return dn}function Dl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xo(e){var n=_o;return _o+=1,ur===null&&(ur=[]),e=qp(ur,e,n),n=pe,(dn===null?n.memoizedState:dn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Fm:rf),e}function Nl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return xo(e);if(e.$$typeof===O)return Un(e)}throw Error(s(438,String(e)))}function Yu(e){var n=null,a=pe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=pe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Dl(),pe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=D;return n.index++,a}function ua(e,n){return typeof n=="function"?n(e):n}function Ul(e){var n=fn();return Zu(n,ke,e)}function Zu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var A=_=null,G=null,nt=n,mt=!1;do{var yt=nt.lane&-536870913;if(yt!==nt.lane?(Ae&yt)===yt:(ca&yt)===yt){var rt=nt.revertLane;if(rt===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),yt===ar&&(mt=!0);else if((ca&rt)===rt){nt=nt.next,rt===ar&&(mt=!0);continue}else yt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},G===null?(A=G=yt,_=f):G=G.next=yt,pe.lanes|=rt,Wa|=rt;yt=nt.action,Rs&&a(f,yt),f=nt.hasEagerState?nt.eagerState:a(f,yt)}else rt={lane:yt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},G===null?(A=G=rt,_=f):G=G.next=rt,pe.lanes|=yt,Wa|=yt;nt=nt.next}while(nt!==null&&nt!==n);if(G===null?_=f:G.next=A,!ii(f,e.memoizedState)&&(pn=!0,mt&&(a=sr,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=G,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ku(e){var n=fn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=e(f,_.action),_=_.next;while(_!==c);ii(f,n.memoizedState)||(pn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function am(e,n,a){var r=pe,c=fn(),f=we;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!ii((ke||c).memoizedState,a);if(_&&(c.memoizedState=a,pn=!0),c=c.queue,$u(om.bind(null,r,c,e),[e]),c.getSnapshot!==n||_||dn!==null&&dn.memoizedState.tag&1){if(r.flags|=2048,fr(9,{destroy:void 0},rm.bind(null,r,c,a,n),null),Ze===null)throw Error(s(349));f||(ca&127)!==0||sm(r,n,a)}return a}function sm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=pe.updateQueue,n===null?(n=Dl(),pe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function rm(e,n,a,r){n.value=a,n.getSnapshot=r,lm(n)&&cm(e)}function om(e,n,a){return a(function(){lm(n)&&cm(e)})}function lm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ii(e,a)}catch{return!0}}function cm(e){var n=xs(e,2);n!==null&&Qn(n,e,2)}function Qu(e){var n=Xn();if(typeof e=="function"){var a=e;if(e=a(),Rs){gt(!0);try{a()}finally{gt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:e},n}function um(e,n,a,r){return e.baseState=a,Zu(e,ke,typeof r=="function"?r:ua)}function Cv(e,n,a,r,c){if(Pl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};z.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,fm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function fm(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=z.T,_={};z.T=_;try{var A=a(c,r),G=z.S;G!==null&&G(_,A),hm(e,n,A)}catch(nt){Ju(e,n,nt)}finally{f!==null&&_.types!==null&&(f.types=_.types),z.T=f}}else try{f=a(c,r),hm(e,n,f)}catch(nt){Ju(e,n,nt)}}function hm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){dm(e,n,r)},function(r){return Ju(e,n,r)}):dm(e,n,a)}function dm(e,n,a){n.status="fulfilled",n.value=a,pm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,fm(e,a)))}function Ju(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,pm(n),n=n.next;while(n!==r)}e.action=null}function pm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function mm(e,n){return n}function gm(e,n){if(we){var a=Ze.formState;if(a!==null){t:{var r=pe;if(we){if(Je){e:{for(var c=Je,f=Si;c.nodeType!==8;){if(!f){c=null;break e}if(c=Mi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Je=Mi(c.nextSibling),r=c.data==="F!";break t}}Ia(r)}r=!1}r&&(n=a[0])}}return a=Xn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mm,lastRenderedState:n},a.queue=r,a=Pm.bind(null,pe,r),r.dispatch=a,r=Qu(!1),f=sf.bind(null,pe,!1,r.queue),r=Xn(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=Cv.bind(null,pe,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function _m(e){var n=fn();return xm(n,ke,e)}function xm(e,n,a){if(n=Zu(e,n,mm)[0],e=Ul(ua)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=xo(n)}catch(_){throw _===rr?Ml:_}else r=n;n=fn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(pe.flags|=2048,fr(9,{destroy:void 0},wv.bind(null,c,a),null)),[r,f,e]}function wv(e,n){e.action=n}function vm(e){var n=fn(),a=ke;if(a!==null)return xm(n,a,e);fn(),n=n.memoizedState,a=fn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function fr(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=pe.updateQueue,n===null&&(n=Dl(),pe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function Sm(){return fn().memoizedState}function Ll(e,n,a,r){var c=Xn();pe.flags|=e,c.memoizedState=fr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Ol(e,n,a,r){var c=fn();r=r===void 0?null:r;var f=c.memoizedState.inst;ke!==null&&r!==null&&ku(r,ke.memoizedState.deps)?c.memoizedState=fr(n,f,a,r):(pe.flags|=e,c.memoizedState=fr(1|n,f,a,r))}function ym(e,n){Ll(8390656,8,e,n)}function $u(e,n){Ol(2048,8,e,n)}function Dv(e){pe.flags|=4;var n=pe.updateQueue;if(n===null)n=Dl(),pe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Mm(e){var n=fn().memoizedState;return Dv({ref:n,nextImpl:e}),function(){if((Ie&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function bm(e,n){return Ol(4,2,e,n)}function Em(e,n){return Ol(4,4,e,n)}function Tm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Am(e,n,a){a=a!=null?a.concat([e]):null,Ol(4,4,Tm.bind(null,n,e),a)}function tf(){}function Rm(e,n){var a=fn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&ku(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Cm(e,n){var a=fn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&ku(n,r[1]))return r[0];if(r=e(),Rs){gt(!0);try{e()}finally{gt(!1)}}return a.memoizedState=[r,n],r}function ef(e,n,a){return a===void 0||(ca&1073741824)!==0&&(Ae&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=w0(),pe.lanes|=e,Wa|=e,a)}function wm(e,n,a,r){return ii(a,n)?a:lr.current!==null?(e=ef(e,a,r),ii(e,n)||(pn=!0),e):(ca&42)===0||(ca&1073741824)!==0&&(Ae&261930)===0?(pn=!0,e.memoizedState=a):(e=w0(),pe.lanes|=e,Wa|=e,n)}function Dm(e,n,a,r,c){var f=V.p;V.p=f!==0&&8>f?f:8;var _=z.T,A={};z.T=A,sf(e,!1,n,a);try{var G=c(),nt=z.S;if(nt!==null&&nt(A,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var mt=Tv(G,r);vo(e,n,mt,ci(e))}else vo(e,n,r,ci(e))}catch(yt){vo(e,n,{then:function(){},status:"rejected",reason:yt},ci())}finally{V.p=f,_!==null&&A.types!==null&&(_.types=A.types),z.T=_}}function Nv(){}function nf(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=Nm(e).queue;Dm(e,c,n,at,a===null?Nv:function(){return Um(e),a(r)})}function Nm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:at,baseState:at,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:at},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Um(e){var n=Nm(e);n.next===null&&(n=e.alternate.memoizedState),vo(e,n.next.queue,{},ci())}function af(){return Un(zo)}function Lm(){return fn().memoizedState}function Om(){return fn().memoizedState}function Uv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ci();e=Ha(a);var r=Ga(n,e,a);r!==null&&(Qn(r,n,a),po(r,n,a)),n={cache:Uu()},e.payload=n;return}n=n.return}}function Lv(e,n,a){var r=ci();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Pl(e)?zm(n,a):(a=yu(e,n,a,r),a!==null&&(Qn(a,e,r),Im(a,n,r)))}function Pm(e,n,a){var r=ci();vo(e,n,a,r)}function vo(e,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pl(e))zm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,A=f(_,a);if(c.hasEagerState=!0,c.eagerState=A,ii(A,_))return ml(e,n,c,0),Ze===null&&pl(),!1}catch{}if(a=yu(e,n,c,r),a!==null)return Qn(a,e,r),Im(a,n,r),!0}return!1}function sf(e,n,a,r){if(r={lane:2,revertLane:If(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Pl(e)){if(n)throw Error(s(479))}else n=yu(e,a,r,2),n!==null&&Qn(n,e,2)}function Pl(e){var n=e.alternate;return e===pe||n!==null&&n===pe}function zm(e,n){cr=Cl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Im(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,ei(e,a)}}var So={readContext:Un,use:Nl,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on};So.useEffectEvent=on;var Fm={readContext:Un,use:Nl,useCallback:function(e,n){return Xn().memoizedState=[e,n===void 0?null:n],e},useContext:Un,useEffect:ym,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ll(4194308,4,Tm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ll(4194308,4,e,n)},useInsertionEffect:function(e,n){Ll(4,2,e,n)},useMemo:function(e,n){var a=Xn();n=n===void 0?null:n;var r=e();if(Rs){gt(!0);try{e()}finally{gt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Xn();if(a!==void 0){var c=a(n);if(Rs){gt(!0);try{a(n)}finally{gt(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=Lv.bind(null,pe,e),[r.memoizedState,e]},useRef:function(e){var n=Xn();return e={current:e},n.memoizedState=e},useState:function(e){e=Qu(e);var n=e.queue,a=Pm.bind(null,pe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:tf,useDeferredValue:function(e,n){var a=Xn();return ef(a,e,n)},useTransition:function(){var e=Qu(!1);return e=Dm.bind(null,pe,e.queue,!0,!1),Xn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=pe,c=Xn();if(we){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ze===null)throw Error(s(349));(Ae&127)!==0||sm(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,ym(om.bind(null,r,f,e),[e]),r.flags|=2048,fr(9,{destroy:void 0},rm.bind(null,r,f,a,n),null),a},useId:function(){var e=Xn(),n=Ze.identifierPrefix;if(we){var a=Gi,r=Hi;a=(r&~(1<<32-bt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=wl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Av++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:af,useFormState:gm,useActionState:gm,useOptimistic:function(e){var n=Xn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=sf.bind(null,pe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Yu,useCacheRefresh:function(){return Xn().memoizedState=Uv.bind(null,pe)},useEffectEvent:function(e){var n=Xn(),a={impl:e};return n.memoizedState=a,function(){if((Ie&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},rf={readContext:Un,use:Nl,useCallback:Rm,useContext:Un,useEffect:$u,useImperativeHandle:Am,useInsertionEffect:bm,useLayoutEffect:Em,useMemo:Cm,useReducer:Ul,useRef:Sm,useState:function(){return Ul(ua)},useDebugValue:tf,useDeferredValue:function(e,n){var a=fn();return wm(a,ke.memoizedState,e,n)},useTransition:function(){var e=Ul(ua)[0],n=fn().memoizedState;return[typeof e=="boolean"?e:xo(e),n]},useSyncExternalStore:am,useId:Lm,useHostTransitionStatus:af,useFormState:_m,useActionState:_m,useOptimistic:function(e,n){var a=fn();return um(a,ke,e,n)},useMemoCache:Yu,useCacheRefresh:Om};rf.useEffectEvent=Mm;var Bm={readContext:Un,use:Nl,useCallback:Rm,useContext:Un,useEffect:$u,useImperativeHandle:Am,useInsertionEffect:bm,useLayoutEffect:Em,useMemo:Cm,useReducer:Ku,useRef:Sm,useState:function(){return Ku(ua)},useDebugValue:tf,useDeferredValue:function(e,n){var a=fn();return ke===null?ef(a,e,n):wm(a,ke.memoizedState,e,n)},useTransition:function(){var e=Ku(ua)[0],n=fn().memoizedState;return[typeof e=="boolean"?e:xo(e),n]},useSyncExternalStore:am,useId:Lm,useHostTransitionStatus:af,useFormState:vm,useActionState:vm,useOptimistic:function(e,n){var a=fn();return ke!==null?um(a,ke,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Yu,useCacheRefresh:Om};Bm.useEffectEvent=Mm;function of(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var lf={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=ci(),c=Ha(r);c.payload=n,a!=null&&(c.callback=a),n=Ga(e,c,r),n!==null&&(Qn(n,e,r),po(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=ci(),c=Ha(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ga(e,c,r),n!==null&&(Qn(n,e,r),po(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ci(),r=Ha(a);r.tag=2,n!=null&&(r.callback=n),n=Ga(e,r,a),n!==null&&(Qn(n,e,a),po(n,e,a))}};function Hm(e,n,a,r,c,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!so(a,r)||!so(c,f):!0}function Gm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&lf.enqueueReplaceState(n,n.state,null)}function Cs(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Vm(e){dl(e)}function km(e){console.error(e)}function Xm(e){dl(e)}function zl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function jm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function cf(e,n,a){return a=Ha(a),a.tag=3,a.payload={element:null},a.callback=function(){zl(e,n)},a}function Wm(e){return e=Ha(e),e.tag=3,e}function qm(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){jm(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){jm(n,a,r),typeof c!="function"&&(qa===null?qa=new Set([this]):qa.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function Ov(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&ir(n,a,c,!0),a=si.current,a!==null){switch(a.tag){case 31:case 13:return yi===null?Yl():a.alternate===null&&ln===0&&(ln=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===bl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Of(e,r,c)),!1;case 22:return a.flags|=65536,r===bl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Of(e,r,c)),!1}throw Error(s(435,a.tag))}return Of(e,r,c),Yl(),!1}if(we)return n=si.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==Ru&&(e=Error(s(422),{cause:r}),lo(_i(e,a)))):(r!==Ru&&(n=Error(s(423),{cause:r}),lo(_i(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=_i(r,a),c=cf(e.stateNode,r,c),Fu(e,c),ln!==4&&(ln=2)),!1;var f=Error(s(520),{cause:r});if(f=_i(f,a),Co===null?Co=[f]:Co.push(f),ln!==4&&(ln=2),n===null)return!0;r=_i(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=cf(a.stateNode,r,e),Fu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(qa===null||!qa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Wm(c),qm(c,e,a,r),Fu(a,c),!1}a=a.return}while(a!==null);return!1}var uf=Error(s(461)),pn=!1;function Ln(e,n,a,r){n.child=e===null?Qp(n,null,a,r):As(n,e.child,a,r)}function Ym(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var A in r)A!=="ref"&&(_[A]=r[A])}else _=r;return Ms(n),r=Xu(e,n,a,_,f,c),A=ju(),e!==null&&!pn?(Wu(e,n,c),fa(e,n,c)):(we&&A&&Tu(n),n.flags|=1,Ln(e,n,r,c),n.child)}function Zm(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!Mu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Km(e,n,f,r,c)):(e=_l(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!xf(e,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:so,a(_,r)&&e.ref===n.ref)return fa(e,n,c)}return n.flags|=1,e=sa(f,r),e.ref=n.ref,e.return=n,n.child=e}function Km(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(so(f,r)&&e.ref===n.ref)if(pn=!1,n.pendingProps=r=f,xf(e,c))(e.flags&131072)!==0&&(pn=!0);else return n.lanes=e.lanes,fa(e,n,c)}return ff(e,n,a,r,c)}function Qm(e,n,a,r){var c=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Jm(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&yl(n,f!==null?f.cachePool:null),f!==null?tm(n,f):Hu(),em(n);else return r=n.lanes=536870912,Jm(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(yl(n,f.cachePool),tm(n,f),ka(),n.memoizedState=null):(e!==null&&yl(n,null),Hu(),ka());return Ln(e,n,c,a),n.child}function yo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Jm(e,n,a,r,c){var f=Ou();return f=f===null?null:{parent:hn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&yl(n,null),Hu(),em(n),e!==null&&ir(e,n,r,!0),n.childLanes=c,null}function Il(e,n){return n=Bl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function $m(e,n,a){return As(n,e.child,null,a),e=Il(n,n.pendingProps),e.flags|=2,ri(n),n.memoizedState=null,e}function Pv(e,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(we){if(r.mode==="hidden")return e=Il(n,r),n.lanes=536870912,yo(null,e);if(Vu(n),(e=Je)?(e=fg(e,Si),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Pa!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=zp(e),a.return=n,n.child=a,Nn=n,Je=null)):e=null,e===null)throw Ia(n);return n.lanes=536870912,null}return Il(n,r)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(Vu(n),c)if(n.flags&256)n.flags&=-257,n=$m(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(pn||ir(e,n,a,!1),c=(a&e.childLanes)!==0,pn||c){if(r=Ze,r!==null&&(_=Bi(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,xs(e,_),Qn(r,e,_),uf;Yl(),n=$m(e,n,a)}else e=f.treeContext,Je=Mi(_.nextSibling),Nn=n,we=!0,za=null,Si=!1,e!==null&&Bp(n,e),n=Il(n,r),n.flags|=4096;return n}return e=sa(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Fl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ff(e,n,a,r,c){return Ms(n),a=Xu(e,n,a,r,void 0,c),r=ju(),e!==null&&!pn?(Wu(e,n,c),fa(e,n,c)):(we&&r&&Tu(n),n.flags|=1,Ln(e,n,a,c),n.child)}function t0(e,n,a,r,c,f){return Ms(n),n.updateQueue=null,a=im(n,r,a,c),nm(e),r=ju(),e!==null&&!pn?(Wu(e,n,f),fa(e,n,f)):(we&&r&&Tu(n),n.flags|=1,Ln(e,n,a,f),n.child)}function e0(e,n,a,r,c){if(Ms(n),n.stateNode===null){var f=$s,_=a.contextType;typeof _=="object"&&_!==null&&(f=Un(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=lf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},zu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Un(_):$s,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(of(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&lf.enqueueReplaceState(f,f.state,null),go(n,r,f,c),mo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,G=Cs(a,A);f.props=G;var nt=f.context,mt=a.contextType;_=$s,typeof mt=="object"&&mt!==null&&(_=Un(mt));var yt=a.getDerivedStateFromProps;mt=typeof yt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,mt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||nt!==_)&&Gm(n,f,r,_),Ba=!1;var rt=n.memoizedState;f.state=rt,go(n,r,f,c),mo(),nt=n.memoizedState,A||rt!==nt||Ba?(typeof yt=="function"&&(of(n,a,yt,r),nt=n.memoizedState),(G=Ba||Hm(n,a,G,r,rt,nt,_))?(mt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=nt),f.props=r,f.state=nt,f.context=_,r=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Iu(e,n),_=n.memoizedProps,mt=Cs(a,_),f.props=mt,yt=n.pendingProps,rt=f.context,nt=a.contextType,G=$s,typeof nt=="object"&&nt!==null&&(G=Un(nt)),A=a.getDerivedStateFromProps,(nt=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==yt||rt!==G)&&Gm(n,f,r,G),Ba=!1,rt=n.memoizedState,f.state=rt,go(n,r,f,c),mo();var lt=n.memoizedState;_!==yt||rt!==lt||Ba||e!==null&&e.dependencies!==null&&vl(e.dependencies)?(typeof A=="function"&&(of(n,a,A,r),lt=n.memoizedState),(mt=Ba||Hm(n,a,mt,r,rt,lt,G)||e!==null&&e.dependencies!==null&&vl(e.dependencies))?(nt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,lt,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,lt,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=lt),f.props=r,f.state=lt,f.context=G,r=mt):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Fl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=As(n,e.child,null,c),n.child=As(n,null,a,c)):Ln(e,n,a,c),n.memoizedState=f.state,e=n.child):e=fa(e,n,c),e}function n0(e,n,a,r){return Ss(),n.flags|=256,Ln(e,n,a,r),n.child}var hf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function df(e){return{baseLanes:e,cachePool:jp()}}function pf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=li),e}function i0(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(we){if(c?Va(n):ka(),(e=Je)?(e=fg(e,Si),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Pa!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=zp(e),a.return=n,n.child=a,Nn=n,Je=null)):e=null,e===null)throw Ia(n);return Kf(e)?n.lanes=32:n.lanes=536870912,null}var A=r.children;return r=r.fallback,c?(ka(),c=n.mode,A=Bl({mode:"hidden",children:A},c),r=vs(r,c,a,null),A.return=n,r.return=n,A.sibling=r,n.child=A,r=n.child,r.memoizedState=df(a),r.childLanes=pf(e,_,a),n.memoizedState=hf,yo(null,r)):(Va(n),mf(n,A))}var G=e.memoizedState;if(G!==null&&(A=G.dehydrated,A!==null)){if(f)n.flags&256?(Va(n),n.flags&=-257,n=gf(e,n,a)):n.memoizedState!==null?(ka(),n.child=e.child,n.flags|=128,n=null):(ka(),A=r.fallback,c=n.mode,r=Bl({mode:"visible",children:r.children},c),A=vs(A,c,a,null),A.flags|=2,r.return=n,A.return=n,r.sibling=A,n.child=r,As(n,e.child,null,a),r=n.child,r.memoizedState=df(a),r.childLanes=pf(e,_,a),n.memoizedState=hf,n=yo(null,r));else if(Va(n),Kf(A)){if(_=A.nextSibling&&A.nextSibling.dataset,_)var nt=_.dgst;_=nt,r=Error(s(419)),r.stack="",r.digest=_,lo({value:r,source:null,stack:null}),n=gf(e,n,a)}else if(pn||ir(e,n,a,!1),_=(a&e.childLanes)!==0,pn||_){if(_=Ze,_!==null&&(r=Bi(_,a),r!==0&&r!==G.retryLane))throw G.retryLane=r,xs(e,r),Qn(_,e,r),uf;Zf(A)||Yl(),n=gf(e,n,a)}else Zf(A)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,Je=Mi(A.nextSibling),Nn=n,we=!0,za=null,Si=!1,e!==null&&Bp(n,e),n=mf(n,r.children),n.flags|=4096);return n}return c?(ka(),A=r.fallback,c=n.mode,G=e.child,nt=G.sibling,r=sa(G,{mode:"hidden",children:r.children}),r.subtreeFlags=G.subtreeFlags&65011712,nt!==null?A=sa(nt,A):(A=vs(A,c,a,null),A.flags|=2),A.return=n,r.return=n,r.sibling=A,n.child=r,yo(null,r),r=n.child,A=e.child.memoizedState,A===null?A=df(a):(c=A.cachePool,c!==null?(G=hn._currentValue,c=c.parent!==G?{parent:G,pool:G}:c):c=jp(),A={baseLanes:A.baseLanes|a,cachePool:c}),r.memoizedState=A,r.childLanes=pf(e,_,a),n.memoizedState=hf,yo(e.child,r)):(Va(n),a=e.child,e=a.sibling,a=sa(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function mf(e,n){return n=Bl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Bl(e,n){return e=ai(22,e,null,n),e.lanes=0,e}function gf(e,n,a){return As(n,e.child,null,a),e=mf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function a0(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Du(e.return,n,a)}function _f(e,n,a,r,c,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function s0(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var _=un.current,A=(_&2)!==0;if(A?(_=_&1|2,n.flags|=128):_&=1,St(un,_),Ln(e,n,r,a),r=we?oo:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&a0(e,a,n);else if(e.tag===19)a0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Rl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),_f(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Rl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}_f(n,!0,a,null,f,r);break;case"together":_f(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function fa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Wa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ir(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=sa(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=sa(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function xf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&vl(e)))}function zv(e,n,a){switch(n.tag){case 3:zt(n,n.stateNode.containerInfo),Fa(n,hn,e.memoizedState.cache),Ss();break;case 27:case 5:It(n);break;case 4:zt(n,n.stateNode.containerInfo);break;case 10:Fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Vu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Va(n),n.flags|=128,null):(a&n.child.childLanes)!==0?i0(e,n,a):(Va(n),e=fa(e,n,a),e!==null?e.sibling:null);Va(n);break;case 19:var c=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(ir(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return s0(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),St(un,un.current),r)break;return null;case 22:return n.lanes=0,Qm(e,n,a,n.pendingProps);case 24:Fa(n,hn,e.memoizedState.cache)}return fa(e,n,a)}function r0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)pn=!0;else{if(!xf(e,a)&&(n.flags&128)===0)return pn=!1,zv(e,n,a);pn=(e.flags&131072)!==0}else pn=!1,we&&(n.flags&1048576)!==0&&Fp(n,oo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=Es(n.elementType),n.type=e,typeof e=="function")Mu(e)?(r=Cs(e,r),n.tag=1,n=e0(null,n,e,r,a)):(n.tag=0,n=ff(null,n,e,r,a));else{if(e!=null){var c=e.$$typeof;if(c===U){n.tag=11,n=Ym(null,n,e,r,a);break t}else if(c===I){n.tag=14,n=Zm(null,n,e,r,a);break t}}throw n=ft(e)||e,Error(s(306,n,""))}}return n;case 0:return ff(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=Cs(r,n.pendingProps),e0(e,n,r,c,a);case 3:t:{if(zt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Iu(e,n),go(n,r,null,a);var _=n.memoizedState;if(r=_.cache,Fa(n,hn,r),r!==f.cache&&Nu(n,[hn],a,!0),mo(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=n0(e,n,r,a);break t}else if(r!==c){c=_i(Error(s(424)),n),lo(c),n=n0(e,n,r,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Je=Mi(e.firstChild),Nn=n,we=!0,za=null,Si=!0,a=Qp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ss(),r===c){n=fa(e,n,a);break t}Ln(e,n,r,a)}n=n.child}return n;case 26:return Fl(e,n),e===null?(a=_g(n.type,null,n.pendingProps,null))?n.memoizedState=a:we||(a=n.type,e=n.pendingProps,r=ec($.current).createElement(a),r[en]=n,r[Tn]=e,On(r,a,e),R(r),n.stateNode=r):n.memoizedState=_g(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return It(n),e===null&&we&&(r=n.stateNode=pg(n.type,n.pendingProps,$.current),Nn=n,Si=!0,c=Je,Qa(n.type)?(Qf=c,Je=Mi(r.firstChild)):Je=c),Ln(e,n,n.pendingProps.children,a),Fl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&we&&((c=r=Je)&&(r=hS(r,n.type,n.pendingProps,Si),r!==null?(n.stateNode=r,Nn=n,Je=Mi(r.firstChild),Si=!1,c=!0):c=!1),c||Ia(n)),It(n),c=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,r=f.children,Wf(c,f)?r=null:_!==null&&Wf(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=Xu(e,n,Rv,null,null,a),zo._currentValue=c),Fl(e,n),Ln(e,n,r,a),n.child;case 6:return e===null&&we&&((e=a=Je)&&(a=dS(a,n.pendingProps,Si),a!==null?(n.stateNode=a,Nn=n,Je=null,e=!0):e=!1),e||Ia(n)),null;case 13:return i0(e,n,a);case 4:return zt(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=As(n,null,r,a):Ln(e,n,r,a),n.child;case 11:return Ym(e,n,n.type,n.pendingProps,a);case 7:return Ln(e,n,n.pendingProps,a),n.child;case 8:return Ln(e,n,n.pendingProps.children,a),n.child;case 12:return Ln(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Fa(n,n.type,r.value),Ln(e,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,Ms(n),c=Un(c),r=r(c),n.flags|=1,Ln(e,n,r,a),n.child;case 14:return Zm(e,n,n.type,n.pendingProps,a);case 15:return Km(e,n,n.type,n.pendingProps,a);case 19:return s0(e,n,a);case 31:return Pv(e,n,a);case 22:return Qm(e,n,a,n.pendingProps);case 24:return Ms(n),r=Un(hn),e===null?(c=Ou(),c===null&&(c=Ze,f=Uu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},zu(n),Fa(n,hn,c)):((e.lanes&a)!==0&&(Iu(e,n),go(n,null,null,a),mo()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Fa(n,hn,r)):(r=f.cache,Fa(n,hn,r),r!==c.cache&&Nu(n,[hn],a,!0))),Ln(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ha(e){e.flags|=4}function vf(e,n,a,r,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(L0())e.flags|=8192;else throw Ts=bl,Pu}else e.flags&=-16777217}function o0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Mg(n))if(L0())e.flags|=8192;else throw Ts=bl,Pu}function Hl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Me():536870912,e.lanes|=n,mr|=n)}function Mo(e,n){if(!we)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function $e(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Iv(e,n,a){var r=n.pendingProps;switch(Au(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(n),null;case 1:return $e(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),la(hn),Ct(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(nr(n)?ha(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Cu())),$e(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(ha(n),f!==null?($e(n),o0(n,f)):($e(n),vf(n,c,null,r,a))):f?f!==e.memoizedState?(ha(n),$e(n),o0(n,f)):($e(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&ha(n),$e(n),vf(n,c,e,r,a)),null;case 27:if(fe(n),a=$.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ha(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return $e(n),null}e=Lt.current,nr(n)?Hp(n):(e=pg(c,r,a),n.stateNode=e,ha(n))}return $e(n),null;case 5:if(fe(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ha(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return $e(n),null}if(f=Lt.current,nr(n))Hp(n);else{var _=ec($.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(c,{is:r.is}):_.createElement(c)}}f[en]=n,f[Tn]=r;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(On(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ha(n)}}return $e(n),vf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&ha(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=$.current,nr(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=Nn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[en]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||ig(e.nodeValue,a)),e||Ia(n,!0)}else e=ec(e).createTextNode(r),e[en]=n,n.stateNode=e}return $e(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=nr(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[en]=n}else Ss(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),e=!1}else a=Cu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ri(n),n):(ri(n),null);if((n.flags&128)!==0)throw Error(s(558))}return $e(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=nr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[en]=n}else Ss(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),c=!1}else c=Cu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ri(n),n):(ri(n),null)}return ri(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Hl(n,n.updateQueue),$e(n),null);case 4:return Ct(),e===null&&Gf(n.stateNode.containerInfo),$e(n),null;case 10:return la(n.type),$e(n),null;case 19:if(it(un),r=n.memoizedState,r===null)return $e(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)Mo(r,!1);else{if(ln!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Rl(e),f!==null){for(n.flags|=128,Mo(r,!1),e=f.updateQueue,n.updateQueue=e,Hl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Pp(a,e),a=a.sibling;return St(un,un.current&1|2),we&&ra(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&M()>jl&&(n.flags|=128,c=!0,Mo(r,!1),n.lanes=4194304)}else{if(!c)if(e=Rl(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Hl(n,e),Mo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!we)return $e(n),null}else 2*M()-r.renderingStartTime>jl&&a!==536870912&&(n.flags|=128,c=!0,Mo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=M(),e.sibling=null,a=un.current,St(un,c?a&1|2:a&1),we&&ra(n,r.treeForkCount),e):($e(n),null);case 22:case 23:return ri(n),Gu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&($e(n),n.subtreeFlags&6&&(n.flags|=8192)):$e(n),a=n.updateQueue,a!==null&&Hl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&it(bs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),la(hn),$e(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Fv(e,n){switch(Au(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return la(hn),Ct(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return fe(n),null;case 31:if(n.memoizedState!==null){if(ri(n),n.alternate===null)throw Error(s(340));Ss()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ri(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ss()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return it(un),null;case 4:return Ct(),null;case 10:return la(n.type),null;case 22:case 23:return ri(n),Gu(),e!==null&&it(bs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return la(hn),null;case 25:return null;default:return null}}function l0(e,n){switch(Au(n),n.tag){case 3:la(hn),Ct();break;case 26:case 27:case 5:fe(n);break;case 4:Ct();break;case 31:n.memoizedState!==null&&ri(n);break;case 13:ri(n);break;case 19:it(un);break;case 10:la(n.type);break;case 22:case 23:ri(n),Gu(),e!==null&&it(bs);break;case 24:la(hn)}}function bo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==c)}}catch(A){Ge(n,n.return,A)}}function Xa(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var _=r.inst,A=_.destroy;if(A!==void 0){_.destroy=void 0,c=n;var G=a,nt=A;try{nt()}catch(mt){Ge(c,G,mt)}}}r=r.next}while(r!==f)}}catch(mt){Ge(n,n.return,mt)}}function c0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{$p(n,a)}catch(r){Ge(e,e.return,r)}}}function u0(e,n,a){a.props=Cs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Ge(e,n,r)}}function Eo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(c){Ge(e,n,c)}}function Vi(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Ge(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ge(e,n,c)}else a.current=null}function f0(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Ge(e,e.return,c)}}function Sf(e,n,a){try{var r=e.stateNode;rS(r,e.type,a,n),r[Tn]=n}catch(c){Ge(e,e.return,c)}}function h0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qa(e.type)||e.tag===4}function yf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||h0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ia));else if(r!==4&&(r===27&&Qa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Mf(e,n,a),e=e.sibling;e!==null;)Mf(e,n,a),e=e.sibling}function Gl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Qa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Gl(e,n,a),e=e.sibling;e!==null;)Gl(e,n,a),e=e.sibling}function d0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);On(n,r,a),n[en]=e,n[Tn]=a}catch(f){Ge(e,e.return,f)}}var da=!1,mn=!1,bf=!1,p0=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function Bv(e,n){if(e=e.containerInfo,Xf=lc,e=Ap(e),mu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,A=-1,G=-1,nt=0,mt=0,yt=e,rt=null;e:for(;;){for(var lt;yt!==a||c!==0&&yt.nodeType!==3||(A=_+c),yt!==f||r!==0&&yt.nodeType!==3||(G=_+r),yt.nodeType===3&&(_+=yt.nodeValue.length),(lt=yt.firstChild)!==null;)rt=yt,yt=lt;for(;;){if(yt===e)break e;if(rt===a&&++nt===c&&(A=_),rt===f&&++mt===r&&(G=_),(lt=yt.nextSibling)!==null)break;yt=rt,rt=yt.parentNode}yt=lt}a=A===-1||G===-1?null:{start:A,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(jf={focusedElem:e,selectionRange:a},lc=!1,Mn=n;Mn!==null;)if(n=Mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Mn=e;else for(;Mn!==null;){switch(n=Mn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Yt=Cs(a.type,c);e=r.getSnapshotBeforeUpdate(Yt,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(se){Ge(a,a.return,se)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Yf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Yf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Mn=e;break}Mn=n.return}}function m0(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ma(e,a),r&4&&bo(5,a);break;case 1:if(ma(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){Ge(a,a.return,_)}else{var c=Cs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){Ge(a,a.return,_)}}r&64&&c0(a),r&512&&Eo(a,a.return);break;case 3:if(ma(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{$p(e,n)}catch(_){Ge(a,a.return,_)}}break;case 27:n===null&&r&4&&d0(a);case 26:case 5:ma(e,a),n===null&&r&4&&f0(a),r&512&&Eo(a,a.return);break;case 12:ma(e,a);break;case 31:ma(e,a),r&4&&x0(e,a);break;case 13:ma(e,a),r&4&&v0(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Yv.bind(null,a),pS(e,a))));break;case 22:if(r=a.memoizedState!==null||da,!r){n=n!==null&&n.memoizedState!==null||mn,c=da;var f=mn;da=r,(mn=n)&&!f?ga(e,a,(a.subtreeFlags&8772)!==0):ma(e,a),da=c,mn=f}break;case 30:break;default:ma(e,a)}}function g0(e){var n=e.alternate;n!==null&&(e.alternate=null,g0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Qr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var an=null,qn=!1;function pa(e,n,a){for(a=a.child;a!==null;)_0(e,n,a),a=a.sibling}function _0(e,n,a){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(wt,a)}catch{}switch(a.tag){case 26:mn||Vi(a,n),pa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:mn||Vi(a,n);var r=an,c=qn;Qa(a.type)&&(an=a.stateNode,qn=!1),pa(e,n,a),Lo(a.stateNode),an=r,qn=c;break;case 5:mn||Vi(a,n);case 6:if(r=an,c=qn,an=null,pa(e,n,a),an=r,qn=c,an!==null)if(qn)try{(an.nodeType===9?an.body:an.nodeName==="HTML"?an.ownerDocument.body:an).removeChild(a.stateNode)}catch(f){Ge(a,n,f)}else try{an.removeChild(a.stateNode)}catch(f){Ge(a,n,f)}break;case 18:an!==null&&(qn?(e=an,cg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),br(e)):cg(an,a.stateNode));break;case 4:r=an,c=qn,an=a.stateNode.containerInfo,qn=!0,pa(e,n,a),an=r,qn=c;break;case 0:case 11:case 14:case 15:Xa(2,a,n),mn||Xa(4,a,n),pa(e,n,a);break;case 1:mn||(Vi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&u0(a,n,r)),pa(e,n,a);break;case 21:pa(e,n,a);break;case 22:mn=(r=mn)||a.memoizedState!==null,pa(e,n,a),mn=r;break;default:pa(e,n,a)}}function x0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{br(e)}catch(a){Ge(n,n.return,a)}}}function v0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{br(e)}catch(a){Ge(n,n.return,a)}}function Hv(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new p0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new p0),n;default:throw Error(s(435,e.tag))}}function Vl(e,n){var a=Hv(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=Zv.bind(null,e,r);r.then(c,c)}})}function Yn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=e,_=n,A=_;t:for(;A!==null;){switch(A.tag){case 27:if(Qa(A.type)){an=A.stateNode,qn=!1;break t}break;case 5:an=A.stateNode,qn=!1;break t;case 3:case 4:an=A.stateNode.containerInfo,qn=!0;break t}A=A.return}if(an===null)throw Error(s(160));_0(f,_,c),an=null,qn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)S0(n,e),n=n.sibling}var Li=null;function S0(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Yn(n,e),Zn(e),r&4&&(Xa(3,e,e.return),bo(3,e),Xa(5,e,e.return));break;case 1:Yn(n,e),Zn(e),r&512&&(mn||a===null||Vi(a,a.return)),r&64&&da&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=Li;if(Yn(n,e),Zn(e),r&512&&(mn||a===null||Vi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ds]||f[en]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),On(f,r,a),f[en]=e,R(f),r=f;break t;case"link":var _=Sg("link","href",c).get(r+(a.href||""));if(_){for(var A=0;A<_.length;A++)if(f=_[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(A,1);break e}}f=c.createElement(r),On(f,r,a),c.head.appendChild(f);break;case"meta":if(_=Sg("meta","content",c).get(r+(a.content||""))){for(A=0;A<_.length;A++)if(f=_[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(A,1);break e}}f=c.createElement(r),On(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[en]=e,R(f),r=f}e.stateNode=r}else yg(c,e.type,e.stateNode);else e.stateNode=vg(c,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?yg(c,e.type,e.stateNode):vg(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Sf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Yn(n,e),Zn(e),r&512&&(mn||a===null||Vi(a,a.return)),a!==null&&r&4&&Sf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Yn(n,e),Zn(e),r&512&&(mn||a===null||Vi(a,a.return)),e.flags&32){c=e.stateNode;try{_n(c,"")}catch(Yt){Ge(e,e.return,Yt)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,Sf(e,c,a!==null?a.memoizedProps:c)),r&1024&&(bf=!0);break;case 6:if(Yn(n,e),Zn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Yt){Ge(e,e.return,Yt)}}break;case 3:if(ac=null,c=Li,Li=nc(n.containerInfo),Yn(n,e),Li=c,Zn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{br(n.containerInfo)}catch(Yt){Ge(e,e.return,Yt)}bf&&(bf=!1,y0(e));break;case 4:r=Li,Li=nc(e.stateNode.containerInfo),Yn(n,e),Zn(e),Li=r;break;case 12:Yn(n,e),Zn(e);break;case 31:Yn(n,e),Zn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Vl(e,r)));break;case 13:Yn(n,e),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Xl=M()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Vl(e,r)));break;case 22:c=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,nt=da,mt=mn;if(da=nt||c,mn=mt||G,Yn(n,e),mn=mt,da=nt,Zn(e),r&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||G||da||mn||ws(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,c)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{A=G.stateNode;var yt=G.memoizedProps.style,rt=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;A.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(Yt){Ge(G,G.return,Yt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=c?"":G.memoizedProps}catch(Yt){Ge(G,G.return,Yt)}}}else if(n.tag===18){if(a===null){G=n;try{var lt=G.stateNode;c?ug(lt,!0):ug(G.stateNode,!1)}catch(Yt){Ge(G,G.return,Yt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Vl(e,a))));break;case 19:Yn(n,e),Zn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Vl(e,r)));break;case 30:break;case 21:break;default:Yn(n,e),Zn(e)}}function Zn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(h0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=yf(e);Gl(e,f,c);break;case 5:var _=a.stateNode;a.flags&32&&(_n(_,""),a.flags&=-33);var A=yf(e);Gl(e,A,_);break;case 3:case 4:var G=a.stateNode.containerInfo,nt=yf(e);Mf(e,nt,G);break;default:throw Error(s(161))}}catch(mt){Ge(e,e.return,mt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function y0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;y0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ma(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)m0(e,n.alternate,n),n=n.sibling}function ws(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Xa(4,n,n.return),ws(n);break;case 1:Vi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&u0(n,n.return,a),ws(n);break;case 27:Lo(n.stateNode);case 26:case 5:Vi(n,n.return),ws(n);break;case 22:n.memoizedState===null&&ws(n);break;case 30:ws(n);break;default:ws(n)}e=e.sibling}}function ga(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:ga(c,f,a),bo(4,f);break;case 1:if(ga(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(nt){Ge(r,r.return,nt)}if(r=f,c=r.updateQueue,c!==null){var A=r.stateNode;try{var G=c.shared.hiddenCallbacks;if(G!==null)for(c.shared.hiddenCallbacks=null,c=0;c<G.length;c++)Jp(G[c],A)}catch(nt){Ge(r,r.return,nt)}}a&&_&64&&c0(f),Eo(f,f.return);break;case 27:d0(f);case 26:case 5:ga(c,f,a),a&&r===null&&_&4&&f0(f),Eo(f,f.return);break;case 12:ga(c,f,a);break;case 31:ga(c,f,a),a&&_&4&&x0(c,f);break;case 13:ga(c,f,a),a&&_&4&&v0(c,f);break;case 22:f.memoizedState===null&&ga(c,f,a),Eo(f,f.return);break;case 30:break;default:ga(c,f,a)}n=n.sibling}}function Ef(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&co(a))}function Tf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&co(e))}function Oi(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)M0(e,n,a,r),n=n.sibling}function M0(e,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Oi(e,n,a,r),c&2048&&bo(9,n);break;case 1:Oi(e,n,a,r);break;case 3:Oi(e,n,a,r),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&co(e)));break;case 12:if(c&2048){Oi(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,_=f.id,A=f.onPostCommit;typeof A=="function"&&A(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Ge(n,n.return,G)}}else Oi(e,n,a,r);break;case 31:Oi(e,n,a,r);break;case 13:Oi(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Oi(e,n,a,r):To(e,n):f._visibility&2?Oi(e,n,a,r):(f._visibility|=2,hr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&Ef(_,n);break;case 24:Oi(e,n,a,r),c&2048&&Tf(n.alternate,n);break;default:Oi(e,n,a,r)}}function hr(e,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,A=a,G=r,nt=_.flags;switch(_.tag){case 0:case 11:case 15:hr(f,_,A,G,c),bo(8,_);break;case 23:break;case 22:var mt=_.stateNode;_.memoizedState!==null?mt._visibility&2?hr(f,_,A,G,c):To(f,_):(mt._visibility|=2,hr(f,_,A,G,c)),c&&nt&2048&&Ef(_.alternate,_);break;case 24:hr(f,_,A,G,c),c&&nt&2048&&Tf(_.alternate,_);break;default:hr(f,_,A,G,c)}n=n.sibling}}function To(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:To(a,r),c&2048&&Ef(r.alternate,r);break;case 24:To(a,r),c&2048&&Tf(r.alternate,r);break;default:To(a,r)}n=n.sibling}}var Ao=8192;function dr(e,n,a){if(e.subtreeFlags&Ao)for(e=e.child;e!==null;)b0(e,n,a),e=e.sibling}function b0(e,n,a){switch(e.tag){case 26:dr(e,n,a),e.flags&Ao&&e.memoizedState!==null&&AS(a,Li,e.memoizedState,e.memoizedProps);break;case 5:dr(e,n,a);break;case 3:case 4:var r=Li;Li=nc(e.stateNode.containerInfo),dr(e,n,a),Li=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ao,Ao=16777216,dr(e,n,a),Ao=r):dr(e,n,a));break;default:dr(e,n,a)}}function E0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ro(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Mn=r,A0(r,e)}E0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)T0(e),e=e.sibling}function T0(e){switch(e.tag){case 0:case 11:case 15:Ro(e),e.flags&2048&&Xa(9,e,e.return);break;case 3:Ro(e);break;case 12:Ro(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,kl(e)):Ro(e);break;default:Ro(e)}}function kl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Mn=r,A0(r,e)}E0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Xa(8,n,n.return),kl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,kl(n));break;default:kl(n)}e=e.sibling}}function A0(e,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Xa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:co(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Mn=r;else t:for(a=e;Mn!==null;){r=Mn;var c=r.sibling,f=r.return;if(g0(r),r===a){Mn=null;break t}if(c!==null){c.return=f,Mn=c;break t}Mn=f}}}var Gv={getCacheForType:function(e){var n=Un(hn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Un(hn).controller.signal}},Vv=typeof WeakMap=="function"?WeakMap:Map,Ie=0,Ze=null,be=null,Ae=0,He=0,oi=null,ja=!1,pr=!1,Af=!1,_a=0,ln=0,Wa=0,Ds=0,Rf=0,li=0,mr=0,Co=null,Kn=null,Cf=!1,Xl=0,R0=0,jl=1/0,Wl=null,qa=null,xn=0,Ya=null,gr=null,xa=0,wf=0,Df=null,C0=null,wo=0,Nf=null;function ci(){return(Ie&2)!==0&&Ae!==0?Ae&-Ae:z.T!==null?If():wi()}function w0(){if(li===0)if((Ae&536870912)===0||we){var e=vt;vt<<=1,(vt&3932160)===0&&(vt=262144),li=e}else li=536870912;return e=si.current,e!==null&&(e.flags|=32),li}function Qn(e,n,a){(e===Ze&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(_r(e,0),Za(e,Ae,li,!1)),tn(e,a),((Ie&2)===0||e!==Ze)&&(e===Ze&&((Ie&2)===0&&(Ds|=a),ln===4&&Za(e,Ae,li,!1)),ki(e))}function D0(e,n,a){if((Ie&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Dt(e,n),c=r?jv(e,n):Lf(e,n,!0),f=r;do{if(c===0){pr&&!r&&Za(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!kv(a)){c=Lf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var A=e;c=Co;var G=A.current.memoizedState.isDehydrated;if(G&&(_r(A,_).flags|=256),_=Lf(A,_,!1),_!==2){if(Af&&!G){A.errorRecoveryDisabledLanes|=f,Ds|=f,c=4;break t}f=Kn,Kn=c,f!==null&&(Kn===null?Kn=f:Kn.push.apply(Kn,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){_r(e,0),Za(e,n,0,!0);break}t:{switch(r=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Za(r,n,li,!ja);break t;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Xl+300-M(),10<c)){if(Za(r,n,li,!ja),pt(r,0,!0)!==0)break t;xa=n,r.timeoutHandle=og(N0.bind(null,r,a,Kn,Wl,Cf,n,li,Ds,mr,ja,f,"Throttled",-0,0),c);break t}N0(r,a,Kn,Wl,Cf,n,li,Ds,mr,ja,f,null,-0,0)}}break}while(!0);ki(e)}function N0(e,n,a,r,c,f,_,A,G,nt,mt,yt,rt,lt){if(e.timeoutHandle=-1,yt=n.subtreeFlags,yt&8192||(yt&16785408)===16785408){yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ia},b0(n,f,yt);var Yt=(f&62914560)===f?Xl-M():(f&4194048)===f?R0-M():0;if(Yt=RS(yt,Yt),Yt!==null){xa=f,e.cancelPendingCommit=Yt(B0.bind(null,e,n,f,a,r,c,_,A,G,mt,yt,null,rt,lt)),Za(e,f,_,!nt);return}}B0(e,n,f,a,r,c,_,A,G)}function kv(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!ii(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Za(e,n,a,r){n&=~Rf,n&=~Ds,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-bt(c),_=1<<f;r[f]=-1,c&=~_}a!==0&&Da(e,a,n)}function ql(){return(Ie&6)===0?(Do(0),!1):!0}function Uf(){if(be!==null){if(He===0)var e=be.return;else e=be,oa=ys=null,qu(e),or=null,fo=0,e=be;for(;e!==null;)l0(e.alternate,e),e=e.return;be=null}}function _r(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,cS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),xa=0,Uf(),Ze=e,be=a=sa(e.current,null),Ae=n,He=0,oi=null,ja=!1,pr=Dt(e,n),Af=!1,mr=li=Rf=Ds=Wa=ln=0,Kn=Co=null,Cf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var c=31-bt(r),f=1<<c;n|=e[c],r&=~f}return _a=n,pl(),a}function U0(e,n){pe=null,z.H=So,n===rr||n===Ml?(n=Yp(),He=3):n===Pu?(n=Yp(),He=4):He=n===uf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,oi=n,be===null&&(ln=1,zl(e,_i(n,e.current)))}function L0(){var e=si.current;return e===null?!0:(Ae&4194048)===Ae?yi===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?e===yi:!1}function O0(){var e=z.H;return z.H=So,e===null?So:e}function P0(){var e=z.A;return z.A=Gv,e}function Yl(){ln=4,ja||(Ae&4194048)!==Ae&&si.current!==null||(pr=!0),(Wa&134217727)===0&&(Ds&134217727)===0||Ze===null||Za(Ze,Ae,li,!1)}function Lf(e,n,a){var r=Ie;Ie|=2;var c=O0(),f=P0();(Ze!==e||Ae!==n)&&(Wl=null,_r(e,n)),n=!1;var _=ln;t:do try{if(He!==0&&be!==null){var A=be,G=oi;switch(He){case 8:Uf(),_=6;break t;case 3:case 2:case 9:case 6:si.current===null&&(n=!0);var nt=He;if(He=0,oi=null,xr(e,A,G,nt),a&&pr){_=0;break t}break;default:nt=He,He=0,oi=null,xr(e,A,G,nt)}}Xv(),_=ln;break}catch(mt){U0(e,mt)}while(!0);return n&&e.shellSuspendCounter++,oa=ys=null,Ie=r,z.H=c,z.A=f,be===null&&(Ze=null,Ae=0,pl()),_}function Xv(){for(;be!==null;)z0(be)}function jv(e,n){var a=Ie;Ie|=2;var r=O0(),c=P0();Ze!==e||Ae!==n?(Wl=null,jl=M()+500,_r(e,n)):pr=Dt(e,n);t:do try{if(He!==0&&be!==null){n=be;var f=oi;e:switch(He){case 1:He=0,oi=null,xr(e,n,f,1);break;case 2:case 9:if(Wp(f)){He=0,oi=null,I0(n);break}n=function(){He!==2&&He!==9||Ze!==e||(He=7),ki(e)},f.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:Wp(f)?(He=0,oi=null,I0(n)):(He=0,oi=null,xr(e,n,f,7));break;case 5:var _=null;switch(be.tag){case 26:_=be.memoizedState;case 5:case 27:var A=be;if(_?Mg(_):A.stateNode.complete){He=0,oi=null;var G=A.sibling;if(G!==null)be=G;else{var nt=A.return;nt!==null?(be=nt,Zl(nt)):be=null}break e}}He=0,oi=null,xr(e,n,f,5);break;case 6:He=0,oi=null,xr(e,n,f,6);break;case 8:Uf(),ln=6;break t;default:throw Error(s(462))}}Wv();break}catch(mt){U0(e,mt)}while(!0);return oa=ys=null,z.H=r,z.A=c,Ie=a,be!==null?0:(Ze=null,Ae=0,pl(),ln)}function Wv(){for(;be!==null&&!jt();)z0(be)}function z0(e){var n=r0(e.alternate,e,_a);e.memoizedProps=e.pendingProps,n===null?Zl(e):be=n}function I0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=t0(a,n,n.pendingProps,n.type,void 0,Ae);break;case 11:n=t0(a,n,n.pendingProps,n.type.render,n.ref,Ae);break;case 5:qu(n);default:l0(a,n),n=be=Pp(n,_a),n=r0(a,n,_a)}e.memoizedProps=e.pendingProps,n===null?Zl(e):be=n}function xr(e,n,a,r){oa=ys=null,qu(n),or=null,fo=0;var c=n.return;try{if(Ov(e,c,n,a,Ae)){ln=1,zl(e,_i(a,e.current)),be=null;return}}catch(f){if(c!==null)throw be=c,f;ln=1,zl(e,_i(a,e.current)),be=null;return}n.flags&32768?(we||r===1?e=!0:pr||(Ae&536870912)!==0?e=!1:(ja=e=!0,(r===2||r===9||r===3||r===6)&&(r=si.current,r!==null&&r.tag===13&&(r.flags|=16384))),F0(n,e)):Zl(n)}function Zl(e){var n=e;do{if((n.flags&32768)!==0){F0(n,ja);return}e=n.return;var a=Iv(n.alternate,n,_a);if(a!==null){be=a;return}if(n=n.sibling,n!==null){be=n;return}be=n=e}while(n!==null);ln===0&&(ln=5)}function F0(e,n){do{var a=Fv(e.alternate,e);if(a!==null){a.flags&=32767,be=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){be=e;return}be=e=a}while(e!==null);ln=6,be=null}function B0(e,n,a,r,c,f,_,A,G){e.cancelPendingCommit=null;do Kl();while(xn!==0);if((Ie&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Su,kn(e,a,f,_,A,G),e===Ze&&(be=Ze=null,Ae=0),gr=n,Ya=e,xa=a,wf=f,Df=c,C0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Kv(ut,function(){return X0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=z.T,z.T=null,c=V.p,V.p=2,_=Ie,Ie|=4;try{Bv(e,n,a)}finally{Ie=_,V.p=c,z.T=r}}xn=1,H0(),G0(),V0()}}function H0(){if(xn===1){xn=0;var e=Ya,n=gr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var r=V.p;V.p=2;var c=Ie;Ie|=4;try{S0(n,e);var f=jf,_=Ap(e.containerInfo),A=f.focusedElem,G=f.selectionRange;if(_!==A&&A&&A.ownerDocument&&Tp(A.ownerDocument.documentElement,A)){if(G!==null&&mu(A)){var nt=G.start,mt=G.end;if(mt===void 0&&(mt=nt),"selectionStart"in A)A.selectionStart=nt,A.selectionEnd=Math.min(mt,A.value.length);else{var yt=A.ownerDocument||document,rt=yt&&yt.defaultView||window;if(rt.getSelection){var lt=rt.getSelection(),Yt=A.textContent.length,se=Math.min(G.start,Yt),je=G.end===void 0?se:Math.min(G.end,Yt);!lt.extend&&se>je&&(_=je,je=se,se=_);var Z=Ep(A,se),j=Ep(A,je);if(Z&&j&&(lt.rangeCount!==1||lt.anchorNode!==Z.node||lt.anchorOffset!==Z.offset||lt.focusNode!==j.node||lt.focusOffset!==j.offset)){var et=yt.createRange();et.setStart(Z.node,Z.offset),lt.removeAllRanges(),se>je?(lt.addRange(et),lt.extend(j.node,j.offset)):(et.setEnd(j.node,j.offset),lt.addRange(et))}}}}for(yt=[],lt=A;lt=lt.parentNode;)lt.nodeType===1&&yt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<yt.length;A++){var xt=yt[A];xt.element.scrollLeft=xt.left,xt.element.scrollTop=xt.top}}lc=!!Xf,jf=Xf=null}finally{Ie=c,V.p=r,z.T=a}}e.current=n,xn=2}}function G0(){if(xn===2){xn=0;var e=Ya,n=gr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var r=V.p;V.p=2;var c=Ie;Ie|=4;try{m0(e,n.alternate,n)}finally{Ie=c,V.p=r,z.T=a}}xn=3}}function V0(){if(xn===4||xn===3){xn=0,N();var e=Ya,n=gr,a=xa,r=C0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,gr=Ya=null,k0(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(qa=null),pi(a),n=n.stateNode,Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(wt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=z.T,c=V.p,V.p=2,z.T=null;try{for(var f=e.onRecoverableError,_=0;_<r.length;_++){var A=r[_];f(A.value,{componentStack:A.stack})}}finally{z.T=n,V.p=c}}(xa&3)!==0&&Kl(),ki(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===Nf?wo++:(wo=0,Nf=e):wo=0,Do(0)}}function k0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,co(n)))}function Kl(){return H0(),G0(),V0(),X0()}function X0(){if(xn!==5)return!1;var e=Ya,n=wf;wf=0;var a=pi(xa),r=z.T,c=V.p;try{V.p=32>a?32:a,z.T=null,a=Df,Df=null;var f=Ya,_=xa;if(xn=0,gr=Ya=null,xa=0,(Ie&6)!==0)throw Error(s(331));var A=Ie;if(Ie|=4,T0(f.current),M0(f,f.current,_,a),Ie=A,Do(0,!1),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(wt,f)}catch{}return!0}finally{V.p=c,z.T=r,k0(e,n)}}function j0(e,n,a){n=_i(a,n),n=cf(e.stateNode,n,2),e=Ga(e,n,2),e!==null&&(tn(e,2),ki(e))}function Ge(e,n,a){if(e.tag===3)j0(e,e,a);else for(;n!==null;){if(n.tag===3){j0(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qa===null||!qa.has(r))){e=_i(a,e),a=Wm(2),r=Ga(n,a,2),r!==null&&(qm(a,r,n,e),tn(r,2),ki(r));break}}n=n.return}}function Of(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Vv;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(Af=!0,c.add(a),e=qv.bind(null,e,n,a),n.then(e,e))}function qv(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ze===e&&(Ae&a)===a&&(ln===4||ln===3&&(Ae&62914560)===Ae&&300>M()-Xl?(Ie&2)===0&&_r(e,0):Rf|=a,mr===Ae&&(mr=0)),ki(e)}function W0(e,n){n===0&&(n=Me()),e=xs(e,n),e!==null&&(tn(e,n),ki(e))}function Yv(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),W0(e,a)}function Zv(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),W0(e,a)}function Kv(e,n){return ye(e,n)}var Ql=null,vr=null,Pf=!1,Jl=!1,zf=!1,Ka=0;function ki(e){e!==vr&&e.next===null&&(vr===null?Ql=vr=e:vr=vr.next=e),Jl=!0,Pf||(Pf=!0,Jv())}function Do(e,n){if(!zf&&Jl){zf=!0;do for(var a=!1,r=Ql;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var _=r.suspendedLanes,A=r.pingedLanes;f=(1<<31-bt(42|e)+1)-1,f&=c&~(_&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,K0(r,f))}else f=Ae,f=pt(r,r===Ze?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Dt(r,f)||(a=!0,K0(r,f));r=r.next}while(a);zf=!1}}function Qv(){q0()}function q0(){Jl=Pf=!1;var e=0;Ka!==0&&lS()&&(e=Ka);for(var n=M(),a=null,r=Ql;r!==null;){var c=r.next,f=Y0(r,n);f===0?(r.next=null,a===null?Ql=c:a.next=c,c===null&&(vr=a)):(a=r,(e!==0||(f&3)!==0)&&(Jl=!0)),r=c}xn!==0&&xn!==5||Do(e),Ka!==0&&(Ka=0)}function Y0(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-bt(f),A=1<<_,G=c[_];G===-1?((A&a)===0||(A&r)!==0)&&(c[_]=$t(A,n)):G<=n&&(e.expiredLanes|=A),f&=~A}if(n=Ze,a=Ae,a=pt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(He===2||He===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ce(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Dt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Ce(r),pi(a)){case 2:case 8:a=Mt;break;case 32:a=ut;break;case 268435456:a=Pt;break;default:a=ut}return r=Z0.bind(null,e),a=ye(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Ce(r),e.callbackPriority=2,e.callbackNode=null,2}function Z0(e,n){if(xn!==0&&xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Kl()&&e.callbackNode!==a)return null;var r=Ae;return r=pt(e,e===Ze?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(D0(e,r,n),Y0(e,M()),e.callbackNode!=null&&e.callbackNode===a?Z0.bind(null,e):null)}function K0(e,n){if(Kl())return null;D0(e,n,!0)}function Jv(){uS(function(){(Ie&6)!==0?ye(_t,Qv):q0()})}function If(){if(Ka===0){var e=ar;e===0&&(e=Ot,Ot<<=1,(Ot&261888)===0&&(Ot=256)),Ka=e}return Ka}function Q0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:rl(""+e)}function J0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function $v(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=Q0((c[Tn]||null).action),_=r.submitter;_&&(n=(n=_[Tn]||null)?Q0(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var A=new ul("action","action",null,r,c);e.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ka!==0){var G=_?J0(c,_):new FormData(c);nf(a,{pending:!0,data:G,method:c.method,action:f},null,G)}}else typeof f=="function"&&(A.preventDefault(),G=_?J0(c,_):new FormData(c),nf(a,{pending:!0,data:G,method:c.method,action:f},f,G))},currentTarget:c}]})}}for(var Ff=0;Ff<vu.length;Ff++){var Bf=vu[Ff],tS=Bf.toLowerCase(),eS=Bf[0].toUpperCase()+Bf.slice(1);Ui(tS,"on"+eS)}Ui(wp,"onAnimationEnd"),Ui(Dp,"onAnimationIteration"),Ui(Np,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(_v,"onTransitionRun"),Ui(xv,"onTransitionStart"),Ui(vv,"onTransitionCancel"),Ui(Up,"onTransitionEnd"),J("onMouseEnter",["mouseout","mouseover"]),J("onMouseLeave",["mouseout","mouseover"]),J("onPointerEnter",["pointerout","pointerover"]),J("onPointerLeave",["pointerout","pointerover"]),st("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),st("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),st("onBeforeInput",["compositionend","keypress","textInput","paste"]),st("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(No));function $0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var A=r[_],G=A.instance,nt=A.currentTarget;if(A=A.listener,G!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=nt;try{f(c)}catch(mt){dl(mt)}c.currentTarget=null,f=G}else for(_=0;_<r.length;_++){if(A=r[_],G=A.instance,nt=A.currentTarget,A=A.listener,G!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=nt;try{f(c)}catch(mt){dl(mt)}c.currentTarget=null,f=G}}}}function Ee(e,n){var a=n[Xs];a===void 0&&(a=n[Xs]=new Set);var r=e+"__bubble";a.has(r)||(tg(n,e,2,!1),a.add(r))}function Hf(e,n,a){var r=0;n&&(r|=4),tg(a,e,r,n)}var $l="_reactListening"+Math.random().toString(36).slice(2);function Gf(e){if(!e[$l]){e[$l]=!0,Y.forEach(function(a){a!=="selectionchange"&&(nS.has(a)||Hf(a,!1,e),Hf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[$l]||(n[$l]=!0,Hf("selectionchange",!1,n))}}function tg(e,n,a,r){switch(wg(n)){case 2:var c=DS;break;case 8:c=NS;break;default:c=nh}a=c.bind(null,n,a,e),c=void 0,!ru||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Vf(e,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var A=r.stateNode.containerInfo;if(A===c)break;if(_===4)for(_=r.return;_!==null;){var G=_.tag;if((G===3||G===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;A!==null;){if(_=Na(A),_===null)return;if(G=_.tag,G===5||G===6||G===26||G===27){r=f=_;continue t}A=A.parentNode}}r=r.return}sp(function(){var nt=f,mt=au(a),yt=[];t:{var rt=Lp.get(e);if(rt!==void 0){var lt=ul,Yt=e;switch(e){case"keypress":if(ll(a)===0)break t;case"keydown":case"keyup":lt=Zx;break;case"focusin":Yt="focus",lt=uu;break;case"focusout":Yt="blur",lt=uu;break;case"beforeblur":case"afterblur":lt=uu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=Ix;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=Jx;break;case wp:case Dp:case Np:lt=Hx;break;case Up:lt=tv;break;case"scroll":case"scrollend":lt=Px;break;case"wheel":lt=nv;break;case"copy":case"cut":case"paste":lt=Vx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=up;break;case"toggle":case"beforetoggle":lt=av}var se=(n&4)!==0,je=!se&&(e==="scroll"||e==="scrollend"),Z=se?rt!==null?rt+"Capture":null:rt;se=[];for(var j=nt,et;j!==null;){var xt=j;if(et=xt.stateNode,xt=xt.tag,xt!==5&&xt!==26&&xt!==27||et===null||Z===null||(xt=Jr(j,Z),xt!=null&&se.push(Uo(j,xt,et))),je)break;j=j.return}0<se.length&&(rt=new lt(rt,Yt,null,a,mt),yt.push({event:rt,listeners:se}))}}if((n&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",rt&&a!==iu&&(Yt=a.relatedTarget||a.fromElement)&&(Na(Yt)||Yt[Di]))break t;if((lt||rt)&&(rt=mt.window===mt?mt:(rt=mt.ownerDocument)?rt.defaultView||rt.parentWindow:window,lt?(Yt=a.relatedTarget||a.toElement,lt=nt,Yt=Yt?Na(Yt):null,Yt!==null&&(je=u(Yt),se=Yt.tag,Yt!==je||se!==5&&se!==27&&se!==6)&&(Yt=null)):(lt=null,Yt=nt),lt!==Yt)){if(se=lp,xt="onMouseLeave",Z="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(se=up,xt="onPointerLeave",Z="onPointerEnter",j="pointer"),je=lt==null?rt:ps(lt),et=Yt==null?rt:ps(Yt),rt=new se(xt,j+"leave",lt,a,mt),rt.target=je,rt.relatedTarget=et,xt=null,Na(mt)===nt&&(se=new se(Z,j+"enter",Yt,a,mt),se.target=et,se.relatedTarget=je,xt=se),je=xt,lt&&Yt)e:{for(se=iS,Z=lt,j=Yt,et=0,xt=Z;xt;xt=se(xt))et++;xt=0;for(var ee=j;ee;ee=se(ee))xt++;for(;0<et-xt;)Z=se(Z),et--;for(;0<xt-et;)j=se(j),xt--;for(;et--;){if(Z===j||j!==null&&Z===j.alternate){se=Z;break e}Z=se(Z),j=se(j)}se=null}else se=null;lt!==null&&eg(yt,rt,lt,se,!1),Yt!==null&&je!==null&&eg(yt,je,Yt,se,!0)}}t:{if(rt=nt?ps(nt):window,lt=rt.nodeName&&rt.nodeName.toLowerCase(),lt==="select"||lt==="input"&&rt.type==="file")var Ue=xp;else if(gp(rt))if(vp)Ue=pv;else{Ue=hv;var Jt=fv}else lt=rt.nodeName,!lt||lt.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?nt&&Ni(nt.elementType)&&(Ue=xp):Ue=dv;if(Ue&&(Ue=Ue(e,nt))){_p(yt,Ue,a,mt);break t}Jt&&Jt(e,rt,nt),e==="focusout"&&nt&&rt.type==="number"&&nt.memoizedProps.value!=null&&Rn(rt,"number",rt.value)}switch(Jt=nt?ps(nt):window,e){case"focusin":(gp(Jt)||Jt.contentEditable==="true")&&(Ks=Jt,gu=nt,ro=null);break;case"focusout":ro=gu=Ks=null;break;case"mousedown":_u=!0;break;case"contextmenu":case"mouseup":case"dragend":_u=!1,Rp(yt,a,mt);break;case"selectionchange":if(gv)break;case"keydown":case"keyup":Rp(yt,a,mt)}var me;if(hu)t:{switch(e){case"compositionstart":var Re="onCompositionStart";break t;case"compositionend":Re="onCompositionEnd";break t;case"compositionupdate":Re="onCompositionUpdate";break t}Re=void 0}else Zs?pp(e,a)&&(Re="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Re="onCompositionStart");Re&&(fp&&a.locale!=="ko"&&(Zs||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&Zs&&(me=rp()):(Oa=mt,ou="value"in Oa?Oa.value:Oa.textContent,Zs=!0)),Jt=tc(nt,Re),0<Jt.length&&(Re=new cp(Re,e,null,a,mt),yt.push({event:Re,listeners:Jt}),me?Re.data=me:(me=mp(a),me!==null&&(Re.data=me)))),(me=rv?ov(e,a):lv(e,a))&&(Re=tc(nt,"onBeforeInput"),0<Re.length&&(Jt=new cp("onBeforeInput","beforeinput",null,a,mt),yt.push({event:Jt,listeners:Re}),Jt.data=me)),$v(yt,e,nt,a,mt)}$0(yt,n)})}function Uo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function tc(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Jr(e,a),c!=null&&r.unshift(Uo(e,c,f)),c=Jr(e,n),c!=null&&r.push(Uo(e,c,f))),e.tag===3)return r;e=e.return}return[]}function iS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function eg(e,n,a,r,c){for(var f=n._reactName,_=[];a!==null&&a!==r;){var A=a,G=A.alternate,nt=A.stateNode;if(A=A.tag,G!==null&&G===r)break;A!==5&&A!==26&&A!==27||nt===null||(G=nt,c?(nt=Jr(a,f),nt!=null&&_.unshift(Uo(a,nt,G))):c||(nt=Jr(a,f),nt!=null&&_.push(Uo(a,nt,G)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var aS=/\r\n?/g,sS=/\u0000|\uFFFD/g;function ng(e){return(typeof e=="string"?e:""+e).replace(aS,`
`).replace(sS,"")}function ig(e,n){return n=ng(n),ng(e)===n}function Xe(e,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||_n(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&_n(e,""+r);break;case"className":ne(e,"class",r);break;case"tabIndex":ne(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ne(e,a,r);break;case"style":Ws(e,r,f);break;case"data":if(n!=="object"){ne(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=rl(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xe(e,n,"name",c.name,c,null),Xe(e,n,"formEncType",c.formEncType,c,null),Xe(e,n,"formMethod",c.formMethod,c,null),Xe(e,n,"formTarget",c.formTarget,c,null)):(Xe(e,n,"encType",c.encType,c,null),Xe(e,n,"method",c.method,c,null),Xe(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=rl(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=ia);break;case"onScroll":r!=null&&Ee("scroll",e);break;case"onScrollEnd":r!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=rl(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),Kt(e,"popover",r);break;case"xlinkActuate":Qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Qt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Qt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Qt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Qt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Kt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Lx.get(a)||a,Kt(e,a,r))}}function kf(e,n,a,r,c,f){switch(a){case"style":Ws(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?_n(e,r):(typeof r=="number"||typeof r=="bigint")&&_n(e,""+r);break;case"onScroll":r!=null&&Ee("scroll",e);break;case"onScrollEnd":r!=null&&Ee("scrollend",e);break;case"onClick":r!=null&&(e.onclick=ia);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ot.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[Tn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,c);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):Kt(e,a,r)}}}function On(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,f,_,a,null)}}c&&Xe(e,n,"srcSet",a.srcSet,a,null),r&&Xe(e,n,"src",a.src,a,null);return;case"input":Ee("invalid",e);var A=f=_=c=null,G=null,nt=null;for(r in a)if(a.hasOwnProperty(r)){var mt=a[r];if(mt!=null)switch(r){case"name":c=mt;break;case"type":_=mt;break;case"checked":G=mt;break;case"defaultChecked":nt=mt;break;case"value":f=mt;break;case"defaultValue":A=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(s(137,n));break;default:Xe(e,n,r,mt,a,null)}}na(e,f,A,G,nt,_,c,!1);return;case"select":Ee("invalid",e),r=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":f=A;break;case"defaultValue":_=A;break;case"multiple":r=A;default:Xe(e,n,c,A,a,null)}n=f,a=_,e.multiple=!!r,n!=null?mi(e,!!r,n,!1):a!=null&&mi(e,!!r,a,!0);return;case"textarea":Ee("invalid",e),f=c=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(A=a[_],A!=null))switch(_){case"value":r=A;break;case"defaultValue":c=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Xe(e,n,_,A,a,null)}Cn(e,r,c,f);return;case"option":for(G in a)a.hasOwnProperty(G)&&(r=a[G],r!=null)&&(G==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":Xe(e,n,G,r,a,null));return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(r=0;r<No.length;r++)Ee(No[r],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(r=a[nt],r!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,nt,r,a,null)}return;default:if(Ni(n)){for(mt in a)a.hasOwnProperty(mt)&&(r=a[mt],r!==void 0&&kf(e,n,mt,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&Xe(e,n,A,r,a,null))}function rS(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,A=null,G=null,nt=null,mt=null;for(lt in a){var yt=a[lt];if(a.hasOwnProperty(lt)&&yt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":G=yt;default:r.hasOwnProperty(lt)||Xe(e,n,lt,null,r,yt)}}for(var rt in r){var lt=r[rt];if(yt=a[rt],r.hasOwnProperty(rt)&&(lt!=null||yt!=null))switch(rt){case"type":f=lt;break;case"name":c=lt;break;case"checked":nt=lt;break;case"defaultChecked":mt=lt;break;case"value":_=lt;break;case"defaultValue":A=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==yt&&Xe(e,n,rt,lt,r,yt)}}An(e,_,A,G,nt,mt,f,c);return;case"select":lt=_=A=rt=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":lt=G;default:r.hasOwnProperty(f)||Xe(e,n,f,null,r,G)}for(c in r)if(f=r[c],G=a[c],r.hasOwnProperty(c)&&(f!=null||G!=null))switch(c){case"value":rt=f;break;case"defaultValue":A=f;break;case"multiple":_=f;default:f!==G&&Xe(e,n,c,f,r,G)}n=A,a=_,r=lt,rt!=null?mi(e,!!a,rt,!1):!!r!=!!a&&(n!=null?mi(e,!!a,n,!0):mi(e,!!a,a?[]:"",!1));return;case"textarea":lt=rt=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Xe(e,n,A,null,r,c)}for(_ in r)if(c=r[_],f=a[_],r.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":rt=c;break;case"defaultValue":lt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Xe(e,n,_,c,r,f)}Be(e,rt,lt);return;case"option":for(var Yt in a)rt=a[Yt],a.hasOwnProperty(Yt)&&rt!=null&&!r.hasOwnProperty(Yt)&&(Yt==="selected"?e.selected=!1:Xe(e,n,Yt,null,r,rt));for(G in r)rt=r[G],lt=a[G],r.hasOwnProperty(G)&&rt!==lt&&(rt!=null||lt!=null)&&(G==="selected"?e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol":Xe(e,n,G,rt,r,lt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in a)rt=a[se],a.hasOwnProperty(se)&&rt!=null&&!r.hasOwnProperty(se)&&Xe(e,n,se,null,r,rt);for(nt in r)if(rt=r[nt],lt=a[nt],r.hasOwnProperty(nt)&&rt!==lt&&(rt!=null||lt!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:Xe(e,n,nt,rt,r,lt)}return;default:if(Ni(n)){for(var je in a)rt=a[je],a.hasOwnProperty(je)&&rt!==void 0&&!r.hasOwnProperty(je)&&kf(e,n,je,void 0,r,rt);for(mt in r)rt=r[mt],lt=a[mt],!r.hasOwnProperty(mt)||rt===lt||rt===void 0&&lt===void 0||kf(e,n,mt,rt,r,lt);return}}for(var Z in a)rt=a[Z],a.hasOwnProperty(Z)&&rt!=null&&!r.hasOwnProperty(Z)&&Xe(e,n,Z,null,r,rt);for(yt in r)rt=r[yt],lt=a[yt],!r.hasOwnProperty(yt)||rt===lt||rt==null&&lt==null||Xe(e,n,yt,rt,r,lt)}function ag(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function oS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,_=c.initiatorType,A=c.duration;if(f&&A&&ag(_)){for(_=0,A=c.responseEnd,r+=1;r<a.length;r++){var G=a[r],nt=G.startTime;if(nt>A)break;var mt=G.transferSize,yt=G.initiatorType;mt&&ag(yt)&&(G=G.responseEnd,_+=mt*(G<A?1:(A-nt)/(G-nt)))}if(--r,n+=8*(f+_)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Xf=null,jf=null;function ec(e){return e.nodeType===9?e:e.ownerDocument}function sg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function rg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Wf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var qf=null;function lS(){var e=window.event;return e&&e.type==="popstate"?e===qf?!1:(qf=e,!0):(qf=null,!1)}var og=typeof setTimeout=="function"?setTimeout:void 0,cS=typeof clearTimeout=="function"?clearTimeout:void 0,lg=typeof Promise=="function"?Promise:void 0,uS=typeof queueMicrotask=="function"?queueMicrotask:typeof lg<"u"?function(e){return lg.resolve(null).then(e).catch(fS)}:og;function fS(e){setTimeout(function(){throw e})}function Qa(e){return e==="head"}function cg(e,n){var a=n,r=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(c),br(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Lo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Lo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,A=f.nodeName;f[ds]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Lo(e.ownerDocument.body);a=c}while(a);br(n)}function ug(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function Yf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Yf(a),Qr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function hS(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[ds])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Mi(e.nextSibling),e===null)break}return null}function dS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Mi(e.nextSibling),e===null))return null;return e}function fg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Mi(e.nextSibling),e===null))return null;return e}function Zf(e){return e.data==="$?"||e.data==="$~"}function Kf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function pS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Mi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Qf=null;function hg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Mi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function dg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function pg(e,n,a){switch(n=ec(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Lo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Qr(e)}var bi=new Map,mg=new Set;function nc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var va=V.d;V.d={f:mS,r:gS,D:_S,C:xS,L:vS,m:SS,X:MS,S:yS,M:bS};function mS(){var e=va.f(),n=ql();return e||n}function gS(e){var n=Ua(e);n!==null&&n.tag===5&&n.type==="form"?Um(n):va.r(e)}var Sr=typeof document>"u"?null:document;function gg(e,n,a){var r=Sr;if(r&&typeof n=="string"&&n){var c=ce(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),mg.has(c)||(mg.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),On(n,"link",e),R(n),r.head.appendChild(n)))}}function _S(e){va.D(e),gg("dns-prefetch",e,null)}function xS(e,n){va.C(e,n),gg("preconnect",e,n)}function vS(e,n,a){va.L(e,n,a);var r=Sr;if(r&&e&&n){var c='link[rel="preload"][as="'+ce(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+ce(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+ce(a.imageSizes)+'"]')):c+='[href="'+ce(e)+'"]';var f=c;switch(n){case"style":f=yr(e);break;case"script":f=Mr(e)}bi.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),bi.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(Oo(f))||n==="script"&&r.querySelector(Po(f))||(n=r.createElement("link"),On(n,"link",e),R(n),r.head.appendChild(n)))}}function SS(e,n){va.m(e,n);var a=Sr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+ce(r)+'"][href="'+ce(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Mr(e)}if(!bi.has(f)&&(e=g({rel:"modulepreload",href:e},n),bi.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Po(f)))return}r=a.createElement("link"),On(r,"link",e),R(r),a.head.appendChild(r)}}}function yS(e,n,a){va.S(e,n,a);var r=Sr;if(r&&e){var c=La(r).hoistableStyles,f=yr(e);n=n||"default";var _=c.get(f);if(!_){var A={loading:0,preload:null};if(_=r.querySelector(Oo(f)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=bi.get(f))&&Jf(e,a);var G=_=r.createElement("link");R(G),On(G,"link",e),G._p=new Promise(function(nt,mt){G.onload=nt,G.onerror=mt}),G.addEventListener("load",function(){A.loading|=1}),G.addEventListener("error",function(){A.loading|=2}),A.loading|=4,ic(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:A},c.set(f,_)}}}function MS(e,n){va.X(e,n);var a=Sr;if(a&&e){var r=La(a).hoistableScripts,c=Mr(e),f=r.get(c);f||(f=a.querySelector(Po(c)),f||(e=g({src:e,async:!0},n),(n=bi.get(c))&&$f(e,n),f=a.createElement("script"),R(f),On(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function bS(e,n){va.M(e,n);var a=Sr;if(a&&e){var r=La(a).hoistableScripts,c=Mr(e),f=r.get(c);f||(f=a.querySelector(Po(c)),f||(e=g({src:e,async:!0,type:"module"},n),(n=bi.get(c))&&$f(e,n),f=a.createElement("script"),R(f),On(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function _g(e,n,a,r){var c=(c=$.current)?nc(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=yr(a.href),a=La(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=yr(a.href);var f=La(c).hoistableStyles,_=f.get(e);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=c.querySelector(Oo(e)))&&!f._p&&(_.instance=f,_.state.loading=5),bi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},bi.set(e,a),f||ES(c,e,a,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Mr(a),a=La(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function yr(e){return'href="'+ce(e)+'"'}function Oo(e){return'link[rel="stylesheet"]['+e+"]"}function xg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function ES(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),On(n,"link",a),R(n),e.head.appendChild(n))}function Mr(e){return'[src="'+ce(e)+'"]'}function Po(e){return"script[async]"+e}function vg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+ce(a.href)+'"]');if(r)return n.instance=r,R(r),r;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),R(r),On(r,"style",c),ic(r,a.precedence,e),n.instance=r;case"stylesheet":c=yr(a.href);var f=e.querySelector(Oo(c));if(f)return n.state.loading|=4,n.instance=f,R(f),f;r=xg(a),(c=bi.get(c))&&Jf(r,c),f=(e.ownerDocument||e).createElement("link"),R(f);var _=f;return _._p=new Promise(function(A,G){_.onload=A,_.onerror=G}),On(f,"link",r),n.state.loading|=4,ic(f,a.precedence,e),n.instance=f;case"script":return f=Mr(a.src),(c=e.querySelector(Po(f)))?(n.instance=c,R(c),c):(r=a,(c=bi.get(f))&&(r=g({},a),$f(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),R(c),On(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,ic(r,a.precedence,e));return n.instance}function ic(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,_=0;_<r.length;_++){var A=r[_];if(A.dataset.precedence===n)f=A;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Jf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function $f(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ac=null;function Sg(e,n,a){if(ac===null){var r=new Map,c=ac=new Map;c.set(a,r)}else c=ac,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[ds]||f[en]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var A=r.get(_);A?A.push(f):r.set(_,[f])}}return r}function yg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function TS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Mg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function AS(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=yr(r.href),f=n.querySelector(Oo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=sc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,R(f);return}f=n.ownerDocument||n,r=xg(r),(c=bi.get(c))&&Jf(r,c),f=f.createElement("link"),R(f);var _=f;_._p=new Promise(function(A,G){_.onload=A,_.onerror=G}),On(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=sc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var th=0;function RS(e,n){return e.stylesheets&&e.count===0&&oc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&oc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&th===0&&(th=62500*oS());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&oc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>th?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function sc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)oc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var rc=null;function oc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,rc=new Map,n.forEach(CS,e),rc=null,sc.call(e))}function CS(e,n){if(!(n.state.loading&4)){var a=rc.get(e);if(a)var r=a.get(null);else{a=new Map,rc.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,c),a.set(_,c),this.count++,r=sc.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var zo={$$typeof:O,Provider:null,Consumer:null,_currentValue:at,_currentValue2:at,_threadCount:0};function wS(e,n,a,r,c,f,_,A,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=le(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=le(0),this.hiddenUpdates=le(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function bg(e,n,a,r,c,f,_,A,G,nt,mt,yt){return e=new wS(e,n,a,_,G,nt,mt,yt,A),n=1,f===!0&&(n|=24),f=ai(3,null,null,n),e.current=f,f.stateNode=e,n=Uu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},zu(f),e}function Eg(e){return e?(e=$s,e):$s}function Tg(e,n,a,r,c,f){c=Eg(c),r.context===null?r.context=c:r.pendingContext=c,r=Ha(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Ga(e,r,n),a!==null&&(Qn(a,e,n),po(a,e,n))}function Ag(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function eh(e,n){Ag(e,n),(e=e.alternate)&&Ag(e,n)}function Rg(e){if(e.tag===13||e.tag===31){var n=xs(e,67108864);n!==null&&Qn(n,e,67108864),eh(e,67108864)}}function Cg(e){if(e.tag===13||e.tag===31){var n=ci();n=ea(n);var a=xs(e,n);a!==null&&Qn(a,e,n),eh(e,n)}}var lc=!0;function DS(e,n,a,r){var c=z.T;z.T=null;var f=V.p;try{V.p=2,nh(e,n,a,r)}finally{V.p=f,z.T=c}}function NS(e,n,a,r){var c=z.T;z.T=null;var f=V.p;try{V.p=8,nh(e,n,a,r)}finally{V.p=f,z.T=c}}function nh(e,n,a,r){if(lc){var c=ih(r);if(c===null)Vf(e,n,r,cc,a),Dg(e,r);else if(LS(c,e,n,a,r))r.stopPropagation();else if(Dg(e,r),n&4&&-1<US.indexOf(e)){for(;c!==null;){var f=Ua(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=dt(f.pendingLanes);if(_!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;_;){var G=1<<31-bt(_);A.entanglements[1]|=G,_&=~G}ki(f),(Ie&6)===0&&(jl=M()+500,Do(0))}}break;case 31:case 13:A=xs(f,2),A!==null&&Qn(A,f,2),ql(),eh(f,2)}if(f=ih(r),f===null&&Vf(e,n,r,cc,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Vf(e,n,r,null,a)}}function ih(e){return e=au(e),ah(e)}var cc=null;function ah(e){if(cc=null,e=Na(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return cc=e,null}function wg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case _t:return 2;case Mt:return 8;case ut:case Zt:return 32;case Pt:return 268435456;default:return 32}default:return 32}}var sh=!1,Ja=null,$a=null,ts=null,Io=new Map,Fo=new Map,es=[],US="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dg(e,n){switch(e){case"focusin":case"focusout":Ja=null;break;case"dragenter":case"dragleave":$a=null;break;case"mouseover":case"mouseout":ts=null;break;case"pointerover":case"pointerout":Io.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(n.pointerId)}}function Bo(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Ua(n),n!==null&&Rg(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function LS(e,n,a,r,c){switch(n){case"focusin":return Ja=Bo(Ja,e,n,a,r,c),!0;case"dragenter":return $a=Bo($a,e,n,a,r,c),!0;case"mouseover":return ts=Bo(ts,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return Io.set(f,Bo(Io.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Fo.set(f,Bo(Fo.get(f)||null,e,n,a,r,c)),!0}return!1}function Ng(e){var n=Na(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,ni(e.priority,function(){Cg(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,ni(e.priority,function(){Cg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=ih(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);iu=r,a.target.dispatchEvent(r),iu=null}else return n=Ua(a),n!==null&&Rg(n),e.blockedOn=a,!1;n.shift()}return!0}function Ug(e,n,a){uc(e)&&a.delete(n)}function OS(){sh=!1,Ja!==null&&uc(Ja)&&(Ja=null),$a!==null&&uc($a)&&($a=null),ts!==null&&uc(ts)&&(ts=null),Io.forEach(Ug),Fo.forEach(Ug)}function fc(e,n){e.blockedOn===n&&(e.blockedOn=null,sh||(sh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,OS)))}var hc=null;function Lg(e){hc!==e&&(hc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){hc===e&&(hc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(ah(r||a)===null)continue;break}var f=Ua(a);f!==null&&(e.splice(n,3),n-=3,nf(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function br(e){function n(G){return fc(G,e)}Ja!==null&&fc(Ja,e),$a!==null&&fc($a,e),ts!==null&&fc(ts,e),Io.forEach(n),Fo.forEach(n);for(var a=0;a<es.length;a++){var r=es[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<es.length&&(a=es[0],a.blockedOn===null);)Ng(a),a.blockedOn===null&&es.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],_=c[Tn]||null;if(typeof f=="function")_||Lg(a);else if(_){var A=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[Tn]||null)A=_.formAction;else if(ah(c)!==null)continue}else A=_.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),Lg(a)}}}function Og(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function rh(e){this._internalRoot=e}dc.prototype.render=rh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ci();Tg(a,r,e,n,null,null)},dc.prototype.unmount=rh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Tg(e.current,2,null,e,null,null),ql(),n[Di]=null}};function dc(e){this._internalRoot=e}dc.prototype.unstable_scheduleHydration=function(e){if(e){var n=wi();e={blockedOn:null,target:e,priority:n};for(var a=0;a<es.length&&n!==0&&n<es[a].priority;a++);es.splice(a,0,e),a===0&&Ng(e)}};var Pg=t.version;if(Pg!=="19.2.3")throw Error(s(527,Pg,"19.2.3"));V.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var PS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{wt=pc.inject(PS),Ut=pc}catch{}}return Go.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=Vm,f=km,_=Xm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=bg(e,1,!1,null,null,a,r,null,c,f,_,Og),e[Di]=n.current,Gf(e),new rh(n)},Go.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=Vm,_=km,A=Xm,G=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=bg(e,1,!0,n,a??null,r,c,G,f,_,A,Og),n.context=Eg(null),a=n.current,r=ci(),r=ea(r),c=Ha(r),c.callback=null,Ga(a,c,r),a=r,n.current.lanes=a,tn(n,a),ki(n),e[Di]=n.current,Gf(e),new dc(n)},Go.version="19.2.3",Go}var jg;function WS(){if(jg)return ch.exports;jg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),ch.exports=jS(),ch.exports}var qS=WS();const YS=K_(qS);const Vd="182",Hr={ROTATE:0,DOLLY:1,PAN:2},Fr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ZS=0,Wg=1,KS=2,Vc=1,QS=2,Ko=3,hs=0,ti=1,Wi=2,Aa=0,Gr=1,qg=2,Yg=3,Zg=4,JS=5,Is=100,$S=101,ty=102,ey=103,ny=104,iy=200,ay=201,sy=202,ry=203,qh=204,Yh=205,oy=206,ly=207,cy=208,uy=209,fy=210,hy=211,dy=212,py=213,my=214,Zh=0,Kh=1,Qh=2,kr=3,Jh=4,$h=5,td=6,ed=7,Q_=0,gy=1,_y=2,Zi=0,J_=1,$_=2,tx=3,ex=4,nx=5,ix=6,ax=7,sx=300,Gs=301,Xr=302,nd=303,id=304,$c=306,ad=1e3,Ta=1001,sd=1002,Pn=1003,xy=1004,mc=1005,Gn=1006,dh=1007,Bs=1008,hi=1009,rx=1010,ox=1011,$o=1012,kd=1013,Ji=1014,qi=1015,Ca=1016,Xd=1017,jd=1018,tl=1020,lx=35902,cx=35899,ux=1021,fx=1022,Fi=1023,wa=1026,Hs=1027,hx=1028,Wd=1029,jr=1030,qd=1031,Yd=1033,kc=33776,Xc=33777,jc=33778,Wc=33779,rd=35840,od=35841,ld=35842,cd=35843,ud=36196,fd=37492,hd=37496,dd=37488,pd=37489,md=37490,gd=37491,_d=37808,xd=37809,vd=37810,Sd=37811,yd=37812,Md=37813,bd=37814,Ed=37815,Td=37816,Ad=37817,Rd=37818,Cd=37819,wd=37820,Dd=37821,Nd=36492,Ud=36494,Ld=36495,Od=36283,Pd=36284,zd=36285,Id=36286,vy=3200,dx=0,Sy=1,us="",Ai="srgb",Wr="srgb-linear",Yc="linear",Ve="srgb",Er=7680,Kg=519,yy=512,My=513,by=514,Zd=515,Ey=516,Ty=517,Kd=518,Ay=519,Qg=35044,Jg="300 es",Yi=2e3,Zc=2001;function px(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Kc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Ry(){const o=Kc("canvas");return o.style.display="block",o}const $g={};function t_(...o){const t="THREE."+o.shift();console.log(t,...o)}function oe(...o){const t="THREE."+o.shift();console.warn(t,...o)}function Oe(...o){const t="THREE."+o.shift();console.error(t,...o)}function el(...o){const t=o.join(" ");t in $g||($g[t]=!0,oe(...o))}function Cy(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}class ks{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jo=Math.PI/180,Fd=180/Math.PI;function il(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Bn[o&255]+Bn[o>>8&255]+Bn[o>>16&255]+Bn[o>>24&255]+"-"+Bn[t&255]+Bn[t>>8&255]+"-"+Bn[t>>16&15|64]+Bn[t>>24&255]+"-"+Bn[i&63|128]+Bn[i>>8&255]+"-"+Bn[i>>16&255]+Bn[i>>24&255]+Bn[s&255]+Bn[s>>8&255]+Bn[s>>16&255]+Bn[s>>24&255]).toLowerCase()}function Te(o,t,i){return Math.max(t,Math.min(i,o))}function wy(o,t){return(o%t+t)%t}function ph(o,t,i){return(1-i)*o+i*t}function Vo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Jn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Dy={DEG2RAD:Jo};class de{constructor(t=0,i=0){de.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Te(this.x,t.x,i.x),this.y=Te(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Te(this.x,t,i),this.y=Te(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Te(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Te(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*s-h*l+t.x,this.y=u*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vs{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],v=s[l+2],g=s[l+3],S=u[h+0],b=u[h+1],E=u[h+2],C=u[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g;return}if(d>=1){t[i+0]=S,t[i+1]=b,t[i+2]=E,t[i+3]=C;return}if(g!==C||m!==S||p!==b||v!==E){let y=m*S+p*b+v*E+g*C;y<0&&(S=-S,b=-b,E=-E,C=-C,y=-y);let x=1-d;if(y<.9995){const P=Math.acos(y),O=Math.sin(P);x=Math.sin(x*P)/O,d=Math.sin(d*P)/O,m=m*x+S*d,p=p*x+b*d,v=v*x+E*d,g=g*x+C*d}else{m=m*x+S*d,p=p*x+b*d,v=v*x+E*d,g=g*x+C*d;const P=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=P,p*=P,v*=P,g*=P}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],v=s[l+3],g=u[h],S=u[h+1],b=u[h+2],E=u[h+3];return t[i]=d*E+v*g+m*b-p*S,t[i+1]=m*E+v*S+p*g-d*b,t[i+2]=p*E+v*b+d*S-m*g,t[i+3]=v*E-d*g-m*S-p*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),v=d(l/2),g=d(u/2),S=m(s/2),b=m(l/2),E=m(u/2);switch(h){case"XYZ":this._x=S*v*g+p*b*E,this._y=p*b*g-S*v*E,this._z=p*v*E+S*b*g,this._w=p*v*g-S*b*E;break;case"YXZ":this._x=S*v*g+p*b*E,this._y=p*b*g-S*v*E,this._z=p*v*E-S*b*g,this._w=p*v*g+S*b*E;break;case"ZXY":this._x=S*v*g-p*b*E,this._y=p*b*g+S*v*E,this._z=p*v*E+S*b*g,this._w=p*v*g-S*b*E;break;case"ZYX":this._x=S*v*g-p*b*E,this._y=p*b*g+S*v*E,this._z=p*v*E-S*b*g,this._w=p*v*g+S*b*E;break;case"YZX":this._x=S*v*g+p*b*E,this._y=p*b*g+S*v*E,this._z=p*v*E-S*b*g,this._w=p*v*g-S*b*E;break;case"XZY":this._x=S*v*g-p*b*E,this._y=p*b*g-S*v*E,this._z=p*v*E+S*b*g,this._w=p*v*g+S*b*E;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],g=i[10],S=s+d+g;if(S>0){const b=.5/Math.sqrt(S+1);this._w=.25/b,this._x=(v-m)*b,this._y=(u-p)*b,this._z=(h-l)*b}else if(s>d&&s>g){const b=2*Math.sqrt(1+s-d-g);this._w=(v-m)/b,this._x=.25*b,this._y=(l+h)/b,this._z=(u+p)/b}else if(d>g){const b=2*Math.sqrt(1+d-s-g);this._w=(u-p)/b,this._x=(l+h)/b,this._y=.25*b,this._z=(m+v)/b}else{const b=2*Math.sqrt(1+g-s-d);this._w=(h-l)/b,this._x=(u+p)/b,this._y=(m+v)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+h*d+l*p-u*m,this._y=l*v+h*m+u*d-s*p,this._z=u*v+h*p+s*m-l*d,this._w=h*v-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,u=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,u=-u,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,i=0,s=0){K.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(e_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(e_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),v=2*(d*i-u*l),g=2*(u*s-h*i);return this.x=i+m*p+h*g-d*v,this.y=s+m*v+d*p-u*g,this.z=l+m*g+u*v-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Te(this.x,t.x,i.x),this.y=Te(this.y,t.y,i.y),this.z=Te(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Te(this.x,t,i),this.y=Te(this.y,t,i),this.z=Te(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Te(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return mh.copy(this).projectOnVector(t),this.sub(mh)}reflect(t){return this.sub(mh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Te(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mh=new K,e_=new Vs;class ge{constructor(t,i,s,l,u,h,d,m,p){ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p)}set(t,i,s,l,u,h,d,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=u,v[5]=m,v[6]=s,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],v=s[4],g=s[7],S=s[2],b=s[5],E=s[8],C=l[0],y=l[3],x=l[6],P=l[1],O=l[4],U=l[7],F=l[2],B=l[5],I=l[8];return u[0]=h*C+d*P+m*F,u[3]=h*y+d*O+m*B,u[6]=h*x+d*U+m*I,u[1]=p*C+v*P+g*F,u[4]=p*y+v*O+g*B,u[7]=p*x+v*U+g*I,u[2]=S*C+b*P+E*F,u[5]=S*y+b*O+E*B,u[8]=S*x+b*U+E*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8];return i*h*v-i*d*p-s*u*v+s*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],g=v*h-d*p,S=d*m-v*u,b=p*u-h*m,E=i*g+s*S+l*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=g*C,t[1]=(l*p-v*s)*C,t[2]=(d*s-l*h)*C,t[3]=S*C,t[4]=(v*i-l*m)*C,t[5]=(l*u-d*i)*C,t[6]=b*C,t[7]=(s*m-p*i)*C,t[8]=(h*i-s*u)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(gh.makeScale(t,i)),this}rotate(t){return this.premultiply(gh.makeRotation(-t)),this}translate(t,i){return this.premultiply(gh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const gh=new ge,n_=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),i_=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ny(){const o={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Ve&&(l.r=Ra(l.r),l.g=Ra(l.g),l.b=Ra(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ve&&(l.r=Vr(l.r),l.g=Vr(l.g),l.b=Vr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===us?Yc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return el("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return el("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Wr]:{primaries:t,whitePoint:s,transfer:Yc,toXYZ:n_,fromXYZ:i_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ai},outputColorSpaceConfig:{drawingBufferColorSpace:Ai}},[Ai]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:n_,fromXYZ:i_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ai}}}),o}const De=Ny();function Ra(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Vr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Tr;class Uy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Tr===void 0&&(Tr=Kc("canvas")),Tr.width=t.width,Tr.height=t.height;const l=Tr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Tr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Kc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=Ra(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ra(i[s]/255)*255):i[s]=Ra(i[s]);return{data:i,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ly=0;class Qd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ly++}),this.uuid=il(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(_h(l[h].image)):u.push(_h(l[h]))}else u=_h(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function _h(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Uy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}let Oy=0;const xh=new K;class Vn extends ks{constructor(t=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,s=Ta,l=Ta,u=Gn,h=Bs,d=Fi,m=hi,p=Vn.DEFAULT_ANISOTROPY,v=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=il(),this.name="",this.source=new Qd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xh).x}get height(){return this.source.getSize(xh).y}get depth(){return this.source.getSize(xh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){oe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){oe(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ad:t.x=t.x-Math.floor(t.x);break;case Ta:t.x=t.x<0?0:1;break;case sd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ad:t.y=t.y-Math.floor(t.y);break;case Ta:t.y=t.y<0?0:1;break;case sd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=sx;Vn.DEFAULT_ANISOTROPY=1;class cn{constructor(t=0,i=0,s=0,l=1){cn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,p=m[0],v=m[4],g=m[8],S=m[1],b=m[5],E=m[9],C=m[2],y=m[6],x=m[10];if(Math.abs(v-S)<.01&&Math.abs(g-C)<.01&&Math.abs(E-y)<.01){if(Math.abs(v+S)<.1&&Math.abs(g+C)<.1&&Math.abs(E+y)<.1&&Math.abs(p+b+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,U=(b+1)/2,F=(x+1)/2,B=(v+S)/4,I=(g+C)/4,q=(E+y)/4;return O>U&&O>F?O<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(O),l=B/s,u=I/s):U>F?U<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),s=B/l,u=q/l):F<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(F),s=I/u,l=q/u),this.set(s,l,u,i),this}let P=Math.sqrt((y-E)*(y-E)+(g-C)*(g-C)+(S-v)*(S-v));return Math.abs(P)<.001&&(P=1),this.x=(y-E)/P,this.y=(g-C)/P,this.z=(S-v)/P,this.w=Math.acos((p+b+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Te(this.x,t.x,i.x),this.y=Te(this.y,t.y,i.y),this.z=Te(this.z,t.z,i.z),this.w=Te(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Te(this.x,t,i),this.y=Te(this.y,t,i),this.z=Te(this.z,t,i),this.w=Te(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Te(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Py extends ks{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new cn(0,0,t,i),this.scissorTest=!1,this.viewport=new cn(0,0,t,i);const l={width:t,height:i,depth:s.depth},u=new Vn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Qd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends Py{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class mx extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class zy extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class al{constructor(t=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Pi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Pi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Pi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Pi):Pi.fromBufferAttribute(u,h),Pi.applyMatrix4(t.matrixWorld),this.expandByPoint(Pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),gc.copy(s.boundingBox)),gc.applyMatrix4(t.matrixWorld),this.union(gc)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pi),Pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ko),_c.subVectors(this.max,ko),Ar.subVectors(t.a,ko),Rr.subVectors(t.b,ko),Cr.subVectors(t.c,ko),is.subVectors(Rr,Ar),as.subVectors(Cr,Rr),Ns.subVectors(Ar,Cr);let i=[0,-is.z,is.y,0,-as.z,as.y,0,-Ns.z,Ns.y,is.z,0,-is.x,as.z,0,-as.x,Ns.z,0,-Ns.x,-is.y,is.x,0,-as.y,as.x,0,-Ns.y,Ns.x,0];return!vh(i,Ar,Rr,Cr,_c)||(i=[1,0,0,0,1,0,0,0,1],!vh(i,Ar,Rr,Cr,_c))?!1:(xc.crossVectors(is,as),i=[xc.x,xc.y,xc.z],vh(i,Ar,Rr,Cr,_c))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Sa=[new K,new K,new K,new K,new K,new K,new K,new K],Pi=new K,gc=new al,Ar=new K,Rr=new K,Cr=new K,is=new K,as=new K,Ns=new K,ko=new K,_c=new K,xc=new K,Us=new K;function vh(o,t,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){Us.fromArray(o,u);const d=l.x*Math.abs(Us.x)+l.y*Math.abs(Us.y)+l.z*Math.abs(Us.z),m=t.dot(Us),p=i.dot(Us),v=s.dot(Us);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const Iy=new al,Xo=new K,Sh=new K;class tu{constructor(t=new K,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):Iy.setFromPoints(t).getCenter(s);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xo.subVectors(t,this.center);const i=Xo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Xo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xo.copy(t.center).add(Sh)),this.expandByPoint(Xo.copy(t.center).sub(Sh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ya=new K,yh=new K,vc=new K,ss=new K,Mh=new K,Sc=new K,bh=new K;class Jd{constructor(t=new K,i=new K(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ya)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ya.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ya.copy(this.origin).addScaledVector(this.direction,i),ya.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){yh.copy(t).add(i).multiplyScalar(.5),vc.copy(i).sub(t).normalize(),ss.copy(this.origin).sub(yh);const u=t.distanceTo(i)*.5,h=-this.direction.dot(vc),d=ss.dot(this.direction),m=-ss.dot(vc),p=ss.lengthSq(),v=Math.abs(1-h*h);let g,S,b,E;if(v>0)if(g=h*m-d,S=h*d-m,E=u*v,g>=0)if(S>=-E)if(S<=E){const C=1/v;g*=C,S*=C,b=g*(g+h*S+2*d)+S*(h*g+S+2*m)+p}else S=u,g=Math.max(0,-(h*S+d)),b=-g*g+S*(S+2*m)+p;else S=-u,g=Math.max(0,-(h*S+d)),b=-g*g+S*(S+2*m)+p;else S<=-E?(g=Math.max(0,-(-h*u+d)),S=g>0?-u:Math.min(Math.max(-u,-m),u),b=-g*g+S*(S+2*m)+p):S<=E?(g=0,S=Math.min(Math.max(-u,-m),u),b=S*(S+2*m)+p):(g=Math.max(0,-(h*u+d)),S=g>0?u:Math.min(Math.max(-u,-m),u),b=-g*g+S*(S+2*m)+p);else S=h>0?-u:u,g=Math.max(0,-(h*S+d)),b=-g*g+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(yh).addScaledVector(vc,S),b}intersectSphere(t,i){ya.subVectors(t.center,this.origin);const s=ya.dot(this.direction),l=ya.dot(ya)-s*s,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(s=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(s=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),v>=0?(u=(t.min.y-S.y)*v,h=(t.max.y-S.y)*v):(u=(t.max.y-S.y)*v,h=(t.min.y-S.y)*v),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),g>=0?(d=(t.min.z-S.z)*g,m=(t.max.z-S.z)*g):(d=(t.max.z-S.z)*g,m=(t.min.z-S.z)*g),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ya)!==null}intersectTriangle(t,i,s,l,u){Mh.subVectors(i,t),Sc.subVectors(s,t),bh.crossVectors(Mh,Sc);let h=this.direction.dot(bh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ss.subVectors(this.origin,t);const m=d*this.direction.dot(Sc.crossVectors(ss,Sc));if(m<0)return null;const p=d*this.direction.dot(Mh.cross(ss));if(p<0||m+p>h)return null;const v=-d*ss.dot(bh);return v<0?null:this.at(v/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(t,i,s,l,u,h,d,m,p,v,g,S,b,E,C,y){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p,v,g,S,b,E,C,y)}set(t,i,s,l,u,h,d,m,p,v,g,S,b,E,C,y){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=u,x[5]=h,x[9]=d,x[13]=m,x[2]=p,x[6]=v,x[10]=g,x[14]=S,x[3]=b,x[7]=E,x[11]=C,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/wr.setFromMatrixColumn(t,0).length(),u=1/wr.setFromMatrixColumn(t,1).length(),h=1/wr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const S=h*v,b=h*g,E=d*v,C=d*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=b+E*p,i[5]=S-C*p,i[9]=-d*m,i[2]=C-S*p,i[6]=E+b*p,i[10]=h*m}else if(t.order==="YXZ"){const S=m*v,b=m*g,E=p*v,C=p*g;i[0]=S+C*d,i[4]=E*d-b,i[8]=h*p,i[1]=h*g,i[5]=h*v,i[9]=-d,i[2]=b*d-E,i[6]=C+S*d,i[10]=h*m}else if(t.order==="ZXY"){const S=m*v,b=m*g,E=p*v,C=p*g;i[0]=S-C*d,i[4]=-h*g,i[8]=E+b*d,i[1]=b+E*d,i[5]=h*v,i[9]=C-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const S=h*v,b=h*g,E=d*v,C=d*g;i[0]=m*v,i[4]=E*p-b,i[8]=S*p+C,i[1]=m*g,i[5]=C*p+S,i[9]=b*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const S=h*m,b=h*p,E=d*m,C=d*p;i[0]=m*v,i[4]=C-S*g,i[8]=E*g+b,i[1]=g,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=b*g+E,i[10]=S-C*g}else if(t.order==="XZY"){const S=h*m,b=h*p,E=d*m,C=d*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=S*g+C,i[5]=h*v,i[9]=b*g-E,i[2]=E*g-b,i[6]=d*v,i[10]=C*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fy,t,By)}lookAt(t,i,s){const l=this.elements;return ui.subVectors(t,i),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),rs.crossVectors(s,ui),rs.lengthSq()===0&&(Math.abs(s.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),rs.crossVectors(s,ui)),rs.normalize(),yc.crossVectors(ui,rs),l[0]=rs.x,l[4]=yc.x,l[8]=ui.x,l[1]=rs.y,l[5]=yc.y,l[9]=ui.y,l[2]=rs.z,l[6]=yc.z,l[10]=ui.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],v=s[1],g=s[5],S=s[9],b=s[13],E=s[2],C=s[6],y=s[10],x=s[14],P=s[3],O=s[7],U=s[11],F=s[15],B=l[0],I=l[4],q=l[8],T=l[12],D=l[1],k=l[5],Q=l[9],tt=l[13],ft=l[2],ct=l[6],z=l[10],V=l[14],at=l[3],At=l[7],Tt=l[11],L=l[15];return u[0]=h*B+d*D+m*ft+p*at,u[4]=h*I+d*k+m*ct+p*At,u[8]=h*q+d*Q+m*z+p*Tt,u[12]=h*T+d*tt+m*V+p*L,u[1]=v*B+g*D+S*ft+b*at,u[5]=v*I+g*k+S*ct+b*At,u[9]=v*q+g*Q+S*z+b*Tt,u[13]=v*T+g*tt+S*V+b*L,u[2]=E*B+C*D+y*ft+x*at,u[6]=E*I+C*k+y*ct+x*At,u[10]=E*q+C*Q+y*z+x*Tt,u[14]=E*T+C*tt+y*V+x*L,u[3]=P*B+O*D+U*ft+F*at,u[7]=P*I+O*k+U*ct+F*At,u[11]=P*q+O*Q+U*z+F*Tt,u[15]=P*T+O*tt+U*V+F*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],v=t[2],g=t[6],S=t[10],b=t[14],E=t[3],C=t[7],y=t[11],x=t[15],P=m*b-p*S,O=d*b-p*g,U=d*S-m*g,F=h*b-p*v,B=h*S-m*v,I=h*g-d*v;return i*(C*P-y*O+x*U)-s*(E*P-y*F+x*B)+l*(E*O-C*F+x*I)-u*(E*U-C*B+y*I)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],g=t[9],S=t[10],b=t[11],E=t[12],C=t[13],y=t[14],x=t[15],P=g*y*p-C*S*p+C*m*b-d*y*b-g*m*x+d*S*x,O=E*S*p-v*y*p-E*m*b+h*y*b+v*m*x-h*S*x,U=v*C*p-E*g*p+E*d*b-h*C*b-v*d*x+h*g*x,F=E*g*m-v*C*m-E*d*S+h*C*S+v*d*y-h*g*y,B=i*P+s*O+l*U+u*F;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/B;return t[0]=P*I,t[1]=(C*S*u-g*y*u-C*l*b+s*y*b+g*l*x-s*S*x)*I,t[2]=(d*y*u-C*m*u+C*l*p-s*y*p-d*l*x+s*m*x)*I,t[3]=(g*m*u-d*S*u-g*l*p+s*S*p+d*l*b-s*m*b)*I,t[4]=O*I,t[5]=(v*y*u-E*S*u+E*l*b-i*y*b-v*l*x+i*S*x)*I,t[6]=(E*m*u-h*y*u-E*l*p+i*y*p+h*l*x-i*m*x)*I,t[7]=(h*S*u-v*m*u+v*l*p-i*S*p-h*l*b+i*m*b)*I,t[8]=U*I,t[9]=(E*g*u-v*C*u-E*s*b+i*C*b+v*s*x-i*g*x)*I,t[10]=(h*C*u-E*d*u+E*s*p-i*C*p-h*s*x+i*d*x)*I,t[11]=(v*d*u-h*g*u-v*s*p+i*g*p+h*s*b-i*d*b)*I,t[12]=F*I,t[13]=(v*C*l-E*g*l+E*s*S-i*C*S-v*s*y+i*g*y)*I,t[14]=(E*d*l-h*C*l-E*s*m+i*C*m+h*s*y-i*d*y)*I,t[15]=(h*g*l-v*d*l+v*s*m-i*g*m-h*s*S+i*d*S)*I,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=t.x,d=t.y,m=t.z,p=u*h,v=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+s,v*m-l*h,0,p*m-l*d,v*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,h){return this.set(1,s,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,v=h+h,g=d+d,S=u*p,b=u*v,E=u*g,C=h*v,y=h*g,x=d*g,P=m*p,O=m*v,U=m*g,F=s.x,B=s.y,I=s.z;return l[0]=(1-(C+x))*F,l[1]=(b+U)*F,l[2]=(E-O)*F,l[3]=0,l[4]=(b-U)*B,l[5]=(1-(S+x))*B,l[6]=(y+P)*B,l[7]=0,l[8]=(E+O)*I,l[9]=(y-P)*I,l[10]=(1-(S+C))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let u=wr.set(l[0],l[1],l[2]).length();const h=wr.set(l[4],l[5],l[6]).length(),d=wr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),zi.copy(this);const p=1/u,v=1/h,g=1/d;return zi.elements[0]*=p,zi.elements[1]*=p,zi.elements[2]*=p,zi.elements[4]*=v,zi.elements[5]*=v,zi.elements[6]*=v,zi.elements[8]*=g,zi.elements[9]*=g,zi.elements[10]*=g,i.setFromRotationMatrix(zi),s.x=u,s.y=h,s.z=d,this}makePerspective(t,i,s,l,u,h,d=Yi,m=!1){const p=this.elements,v=2*u/(i-t),g=2*u/(s-l),S=(i+t)/(i-t),b=(s+l)/(s-l);let E,C;if(m)E=u/(h-u),C=h*u/(h-u);else if(d===Yi)E=-(h+u)/(h-u),C=-2*h*u/(h-u);else if(d===Zc)E=-h/(h-u),C=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=b,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,u,h,d=Yi,m=!1){const p=this.elements,v=2/(i-t),g=2/(s-l),S=-(i+t)/(i-t),b=-(s+l)/(s-l);let E,C;if(m)E=1/(h-u),C=h/(h-u);else if(d===Yi)E=-2/(h-u),C=-(h+u)/(h-u);else if(d===Zc)E=-1/(h-u),C=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=b,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const wr=new K,zi=new rn,Fy=new K(0,0,0),By=new K(1,1,1),rs=new K,yc=new K,ui=new K,a_=new rn,s_=new Vs;class $i{constructor(t=0,i=0,s=0,l=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],g=l[2],S=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,b),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,b),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Te(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,b),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Te(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,b),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Te(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(d,b));break;case"XZY":this._z=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,b),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return a_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(a_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return s_.setFromEuler(this),this.setFromQuaternion(s_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";class gx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Hy=0;const r_=new K,Dr=new Vs,Ma=new rn,Mc=new K,jo=new K,Gy=new K,Vy=new Vs,o_=new K(1,0,0),l_=new K(0,1,0),c_=new K(0,0,1),u_={type:"added"},ky={type:"removed"},Nr={type:"childadded",child:null},Eh={type:"childremoved",child:null};class zn extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=il(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const t=new K,i=new $i,s=new Vs,l=new K(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new rn},normalMatrix:{value:new ge}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Dr.setFromAxisAngle(t,i),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(t,i){return Dr.setFromAxisAngle(t,i),this.quaternion.premultiply(Dr),this}rotateX(t){return this.rotateOnAxis(o_,t)}rotateY(t){return this.rotateOnAxis(l_,t)}rotateZ(t){return this.rotateOnAxis(c_,t)}translateOnAxis(t,i){return r_.copy(t).applyQuaternion(this.quaternion),this.position.add(r_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(o_,t)}translateY(t){return this.translateOnAxis(l_,t)}translateZ(t){return this.translateOnAxis(c_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ma.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Mc.copy(t):Mc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ma.lookAt(jo,Mc,this.up):Ma.lookAt(Mc,jo,this.up),this.quaternion.setFromRotationMatrix(Ma),l&&(Ma.extractRotation(l.matrixWorld),Dr.setFromRotationMatrix(Ma),this.quaternion.premultiply(Dr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Oe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(u_),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null):Oe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(ky),Eh.child=t,this.dispatchEvent(Eh),Eh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ma.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ma.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ma),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(u_),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,t,Gy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,Vy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];u(t.shapes,g)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),v=h(t.images),g=h(t.shapes),S=h(t.skeletons),b=h(t.animations),E=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),S.length>0&&(s.skeletons=S),b.length>0&&(s.animations=b),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}zn.DEFAULT_UP=new K(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ii=new K,ba=new K,Th=new K,Ea=new K,Ur=new K,Lr=new K,f_=new K,Ah=new K,Rh=new K,Ch=new K,wh=new cn,Dh=new cn,Nh=new cn;class Ci{constructor(t=new K,i=new K,s=new K){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ii.subVectors(t,i),l.cross(Ii);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){Ii.subVectors(l,i),ba.subVectors(s,i),Th.subVectors(t,i);const h=Ii.dot(Ii),d=Ii.dot(ba),m=Ii.dot(Th),p=ba.dot(ba),v=ba.dot(Th),g=h*p-d*d;if(g===0)return u.set(0,0,0),null;const S=1/g,b=(p*m-d*v)*S,E=(h*v-d*m)*S;return u.set(1-b-E,E,b)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ea)===null?!1:Ea.x>=0&&Ea.y>=0&&Ea.x+Ea.y<=1}static getInterpolation(t,i,s,l,u,h,d,m){return this.getBarycoord(t,i,s,l,Ea)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Ea.x),m.addScaledVector(h,Ea.y),m.addScaledVector(d,Ea.z),m)}static getInterpolatedAttribute(t,i,s,l,u,h){return wh.setScalar(0),Dh.setScalar(0),Nh.setScalar(0),wh.fromBufferAttribute(t,i),Dh.fromBufferAttribute(t,s),Nh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(wh,u.x),h.addScaledVector(Dh,u.y),h.addScaledVector(Nh,u.z),h}static isFrontFacing(t,i,s,l){return Ii.subVectors(s,i),ba.subVectors(t,i),Ii.cross(ba).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ii.subVectors(this.c,this.b),ba.subVectors(this.a,this.b),Ii.cross(ba).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ci.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return Ci.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return Ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let h,d;Ur.subVectors(l,s),Lr.subVectors(u,s),Ah.subVectors(t,s);const m=Ur.dot(Ah),p=Lr.dot(Ah);if(m<=0&&p<=0)return i.copy(s);Rh.subVectors(t,l);const v=Ur.dot(Rh),g=Lr.dot(Rh);if(v>=0&&g<=v)return i.copy(l);const S=m*g-v*p;if(S<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(s).addScaledVector(Ur,h);Ch.subVectors(t,u);const b=Ur.dot(Ch),E=Lr.dot(Ch);if(E>=0&&b<=E)return i.copy(u);const C=b*p-m*E;if(C<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(Lr,d);const y=v*E-b*g;if(y<=0&&g-v>=0&&b-E>=0)return f_.subVectors(u,l),d=(g-v)/(g-v+(b-E)),i.copy(l).addScaledVector(f_,d);const x=1/(y+C+S);return h=C*x,d=S*x,i.copy(s).addScaledVector(Ur,h).addScaledVector(Lr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const _x={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},bc={h:0,s:0,l:0};function Uh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Ne{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ai){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=De.workingColorSpace){return this.r=t,this.g=i,this.b=s,De.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=De.workingColorSpace){if(t=wy(t,1),i=Te(i,0,1),s=Te(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=Uh(h,u,t+1/3),this.g=Uh(h,u,t),this.b=Uh(h,u,t-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(t,i=Ai){function s(u){u!==void 0&&parseFloat(u)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:oe("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ai){const s=_x[t.toLowerCase()];return s!==void 0?this.setHex(s,i):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ra(t.r),this.g=Ra(t.g),this.b=Ra(t.b),this}copyLinearToSRGB(t){return this.r=Vr(t.r),this.g=Vr(t.g),this.b=Vr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ai){return De.workingToColorSpace(Hn.copy(this),t),Math.round(Te(Hn.r*255,0,255))*65536+Math.round(Te(Hn.g*255,0,255))*256+Math.round(Te(Hn.b*255,0,255))}getHexString(t=Ai){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=De.workingColorSpace){De.workingToColorSpace(Hn.copy(this),i);const s=Hn.r,l=Hn.g,u=Hn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=v<=.5?g/(h+d):g/(2-h-d),h){case s:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-s)/g+2;break;case u:m=(s-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=De.workingColorSpace){return De.workingToColorSpace(Hn.copy(this),i),t.r=Hn.r,t.g=Hn.g,t.b=Hn.b,t}getStyle(t=Ai){De.workingToColorSpace(Hn.copy(this),t);const i=Hn.r,s=Hn.g,l=Hn.b;return t!==Ai?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(os),this.setHSL(os.h+t,os.s+i,os.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(os),t.getHSL(bc);const s=ph(os.h,bc.h,i),l=ph(os.s,bc.s,i),u=ph(os.l,bc.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new Ne;Ne.NAMES=_x;let Xy=0;class Yr extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=il(),this.name="",this.type="Material",this.blending=Gr,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qh,this.blendDst=Yh,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){oe(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){oe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(s.blending=this.blending),this.side!==hs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==qh&&(s.blendSrc=this.blendSrc),this.blendDst!==Yh&&(s.blendDst=this.blendDst),this.blendEquation!==Is&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==kr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class $d extends Yr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=Q_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const gn=new K,Ec=new de;let jy=0;class Qi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Qg,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Ec.fromBufferAttribute(this,i),Ec.applyMatrix3(t),this.setXY(i,Ec.x,Ec.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix3(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix4(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyNormalMatrix(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.transformDirection(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Vo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Jn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Vo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Jn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Vo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Jn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Vo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Jn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Vo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Jn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array),l=Jn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array),l=Jn(l,this.array),u=Jn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qg&&(t.usage=this.usage),t}}class xx extends Qi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class vx extends Qi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class En extends Qi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let Wy=0;const Ei=new rn,Lh=new zn,Or=new K,fi=new al,Wo=new al,bn=new K;class di extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wy++}),this.uuid=il(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(px(t)?vx:xx)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new ge().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ei.makeRotationFromQuaternion(t),this.applyMatrix4(Ei),this}rotateX(t){return Ei.makeRotationX(t),this.applyMatrix4(Ei),this}rotateY(t){return Ei.makeRotationY(t),this.applyMatrix4(Ei),this}rotateZ(t){return Ei.makeRotationZ(t),this.applyMatrix4(Ei),this}translate(t,i,s){return Ei.makeTranslation(t,i,s),this.applyMatrix4(Ei),this}scale(t,i,s){return Ei.makeScale(t,i,s),this.applyMatrix4(Ei),this}lookAt(t){return Lh.lookAt(t),Lh.updateMatrix(),this.applyMatrix4(Lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new En(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new al);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];fi.setFromBufferAttribute(u),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const s=this.boundingSphere.center;if(fi.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Wo.setFromBufferAttribute(d),this.morphTargetsRelative?(bn.addVectors(fi.min,Wo.min),fi.expandByPoint(bn),bn.addVectors(fi.max,Wo.max),fi.expandByPoint(bn)):(fi.expandByPoint(Wo.min),fi.expandByPoint(Wo.max))}fi.getCenter(s);let l=0;for(let u=0,h=t.count;u<h;u++)bn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(bn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)bn.fromBufferAttribute(d,p),m&&(Or.fromBufferAttribute(t,p),bn.add(Or)),l=Math.max(l,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let q=0;q<s.count;q++)d[q]=new K,m[q]=new K;const p=new K,v=new K,g=new K,S=new de,b=new de,E=new de,C=new K,y=new K;function x(q,T,D){p.fromBufferAttribute(s,q),v.fromBufferAttribute(s,T),g.fromBufferAttribute(s,D),S.fromBufferAttribute(u,q),b.fromBufferAttribute(u,T),E.fromBufferAttribute(u,D),v.sub(p),g.sub(p),b.sub(S),E.sub(S);const k=1/(b.x*E.y-E.x*b.y);isFinite(k)&&(C.copy(v).multiplyScalar(E.y).addScaledVector(g,-b.y).multiplyScalar(k),y.copy(g).multiplyScalar(b.x).addScaledVector(v,-E.x).multiplyScalar(k),d[q].add(C),d[T].add(C),d[D].add(C),m[q].add(y),m[T].add(y),m[D].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let q=0,T=P.length;q<T;++q){const D=P[q],k=D.start,Q=D.count;for(let tt=k,ft=k+Q;tt<ft;tt+=3)x(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}const O=new K,U=new K,F=new K,B=new K;function I(q){F.fromBufferAttribute(l,q),B.copy(F);const T=d[q];O.copy(T),O.sub(F.multiplyScalar(F.dot(T))).normalize(),U.crossVectors(B,T);const k=U.dot(m[q])<0?-1:1;h.setXYZW(q,O.x,O.y,O.z,k)}for(let q=0,T=P.length;q<T;++q){const D=P[q],k=D.start,Q=D.count;for(let tt=k,ft=k+Q;tt<ft;tt+=3)I(t.getX(tt+0)),I(t.getX(tt+1)),I(t.getX(tt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Qi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,b=s.count;S<b;S++)s.setXYZ(S,0,0,0);const l=new K,u=new K,h=new K,d=new K,m=new K,p=new K,v=new K,g=new K;if(t)for(let S=0,b=t.count;S<b;S+=3){const E=t.getX(S+0),C=t.getX(S+1),y=t.getX(S+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,y),v.subVectors(h,u),g.subVectors(l,u),v.cross(g),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,y),d.add(v),m.add(v),p.add(v),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,b=i.count;S<b;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),v.subVectors(h,u),g.subVectors(l,u),v.cross(g),s.setXYZ(S+0,v.x,v.y,v.z),s.setXYZ(S+1,v.x,v.y,v.z),s.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)bn.fromBufferAttribute(t,i),bn.normalize(),t.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function t(d,m){const p=d.array,v=d.itemSize,g=d.normalized,S=new p.constructor(m.length*v);let b=0,E=0;for(let C=0,y=m.length;C<y;C++){d.isInterleavedBufferAttribute?b=m[C]*d.data.stride+d.offset:b=m[C]*v;for(let x=0;x<v;x++)S[E++]=p[b++]}return new Qi(S,v,g)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new di,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let v=0,g=p.length;v<g;v++){const S=p[v],b=t(S,s);m.push(b)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,S=p.length;g<S;g++){const b=p[g];v.push(b.toJSON(t.data))}v.length>0&&(l[m]=v,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=t.morphAttributes;for(const p in u){const v=[],g=u[p];for(let S=0,b=g.length;S<b;S++)v.push(g[S].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,v=h.length;p<v;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const h_=new rn,Ls=new Jd,Tc=new tu,d_=new K,Ac=new K,Rc=new K,Cc=new K,Oh=new K,wc=new K,p_=new K,Dc=new K;class he extends zn{constructor(t=new di,i=new $d){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){wc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=d[m],g=u[m];v!==0&&(Oh.fromBufferAttribute(g,t),h?wc.addScaledVector(Oh,v):wc.addScaledVector(Oh.sub(i),v))}i.add(wc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Tc.copy(s.boundingSphere),Tc.applyMatrix4(u),Ls.copy(t.ray).recast(t.near),!(Tc.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Tc,d_)===null||Ls.origin.distanceToSquared(d_)>(t.far-t.near)**2))&&(h_.copy(u).invert(),Ls.copy(t.ray).applyMatrix4(h_),!(s.boundingBox!==null&&Ls.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ls)))}_computeIntersections(t,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,g=u.attributes.normal,S=u.groups,b=u.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,C=S.length;E<C;E++){const y=S[E],x=h[y.materialIndex],P=Math.max(y.start,b.start),O=Math.min(d.count,Math.min(y.start+y.count,b.start+b.count));for(let U=P,F=O;U<F;U+=3){const B=d.getX(U),I=d.getX(U+1),q=d.getX(U+2);l=Nc(this,x,t,s,p,v,g,B,I,q),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,b.start),C=Math.min(d.count,b.start+b.count);for(let y=E,x=C;y<x;y+=3){const P=d.getX(y),O=d.getX(y+1),U=d.getX(y+2);l=Nc(this,h,t,s,p,v,g,P,O,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,C=S.length;E<C;E++){const y=S[E],x=h[y.materialIndex],P=Math.max(y.start,b.start),O=Math.min(m.count,Math.min(y.start+y.count,b.start+b.count));for(let U=P,F=O;U<F;U+=3){const B=U,I=U+1,q=U+2;l=Nc(this,x,t,s,p,v,g,B,I,q),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,b.start),C=Math.min(m.count,b.start+b.count);for(let y=E,x=C;y<x;y+=3){const P=y,O=y+1,U=y+2;l=Nc(this,h,t,s,p,v,g,P,O,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function qy(o,t,i,s,l,u,h,d){let m;if(t.side===ti?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,t.side===hs,d),m===null)return null;Dc.copy(d),Dc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Dc);return p<i.near||p>i.far?null:{distance:p,point:Dc.clone(),object:o}}function Nc(o,t,i,s,l,u,h,d,m,p){o.getVertexPosition(d,Ac),o.getVertexPosition(m,Rc),o.getVertexPosition(p,Cc);const v=qy(o,t,i,s,Ac,Rc,Cc,p_);if(v){const g=new K;Ci.getBarycoord(p_,Ac,Rc,Cc,g),l&&(v.uv=Ci.getInterpolatedAttribute(l,d,m,p,g,new de)),u&&(v.uv1=Ci.getInterpolatedAttribute(u,d,m,p,g,new de)),h&&(v.normal=Ci.getInterpolatedAttribute(h,d,m,p,g,new K),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new K,materialIndex:0};Ci.getNormal(Ac,Rc,Cc,S.normal),v.face=S,v.barycoord=g}return v}class Qe extends di{constructor(t=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],v=[],g=[];let S=0,b=0;E("z","y","x",-1,-1,s,i,t,h,u,0),E("z","y","x",1,-1,s,i,-t,h,u,1),E("x","z","y",1,1,t,s,i,l,h,2),E("x","z","y",1,-1,t,s,-i,l,h,3),E("x","y","z",1,-1,t,i,s,l,u,4),E("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new En(p,3)),this.setAttribute("normal",new En(v,3)),this.setAttribute("uv",new En(g,2));function E(C,y,x,P,O,U,F,B,I,q,T){const D=U/I,k=F/q,Q=U/2,tt=F/2,ft=B/2,ct=I+1,z=q+1;let V=0,at=0;const At=new K;for(let Tt=0;Tt<z;Tt++){const L=Tt*k-tt;for(let it=0;it<ct;it++){const St=it*D-Q;At[C]=St*P,At[y]=L*O,At[x]=ft,p.push(At.x,At.y,At.z),At[C]=0,At[y]=0,At[x]=B>0?1:-1,v.push(At.x,At.y,At.z),g.push(it/I),g.push(1-Tt/q),V+=1}}for(let Tt=0;Tt<q;Tt++)for(let L=0;L<I;L++){const it=S+L+ct*Tt,St=S+L+ct*(Tt+1),Lt=S+(L+1)+ct*(Tt+1),Gt=S+(L+1)+ct*Tt;m.push(it,St,Gt),m.push(St,Lt,Gt),at+=6}d.addGroup(b,at,T),b+=at,S+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function qr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function jn(o){const t={};for(let i=0;i<o.length;i++){const s=qr(o[i]);for(const l in s)t[l]=s[l]}return t}function Yy(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Sx(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const Zy={clone:qr,merge:jn};var Ky=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ta extends Yr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ky,this.fragmentShader=Qy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qr(t.uniforms),this.uniformsGroups=Yy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class yx extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ls=new K,m_=new de,g_=new de;class Ri extends yx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Fd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Jo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fd*2*Math.atan(Math.tan(Jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ls.x,ls.y).multiplyScalar(-t/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ls.x,ls.y).multiplyScalar(-t/ls.z)}getViewSize(t,i){return this.getViewBounds(t,m_,g_),i.subVectors(g_,m_)}setViewOffset(t,i,s,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Jo*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Pr=-90,zr=1;class Jy extends zn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ri(Pr,zr,t,i);l.layers=this.layers,this.add(l);const u=new Ri(Pr,zr,t,i);u.layers=this.layers,this.add(u);const h=new Ri(Pr,zr,t,i);h.layers=this.layers,this.add(h);const d=new Ri(Pr,zr,t,i);d.layers=this.layers,this.add(d);const m=new Ri(Pr,zr,t,i);m.layers=this.layers,this.add(m);const p=new Ri(Pr,zr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===Yi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Zc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,v]=this.children,g=t.getRenderTarget(),S=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),t.render(i,v),t.setRenderTarget(g,S,b),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Mx extends Vn{constructor(t=[],i=Gs,s,l,u,h,d,m,p,v){super(t,i,s,l,u,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bx extends Ki{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Mx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Qe(5,5,5),u=new ta({name:"CubemapFromEquirect",uniforms:qr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ti,blending:Aa});u.uniforms.tEquirect.value=i;const h=new he(l,u),d=i.minFilter;return i.minFilter===Bs&&(i.minFilter=Gn),new Jy(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(u)}}class Uc extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $y={type:"move"};class Ph{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const C of t.hand.values()){const y=i.getJointPose(C,s),x=this._getHandJoint(p,C);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=v.position.distanceTo(g.position),b=.02,E=.005;p.inputState.pinching&&S>b+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=b-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent($y)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Uc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class tM extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class eM extends Vn{constructor(t=null,i=1,s=1,l,u,h,d,m,p=Pn,v=Pn,g,S){super(null,h,d,m,p,v,l,u,g,S),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zh=new K,nM=new K,iM=new ge;class cs{constructor(t=new K(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=zh.subVectors(s,i).cross(nM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(zh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||iM.getNormalMatrix(t),l=this.coplanarPoint(zh).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Os=new tu,aM=new de(.5,.5),Lc=new K;class tp{constructor(t=new cs,i=new cs,s=new cs,l=new cs,u=new cs,h=new cs){this.planes=[t,i,s,l,u,h]}set(t,i,s,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Yi,s=!1){const l=this.planes,u=t.elements,h=u[0],d=u[1],m=u[2],p=u[3],v=u[4],g=u[5],S=u[6],b=u[7],E=u[8],C=u[9],y=u[10],x=u[11],P=u[12],O=u[13],U=u[14],F=u[15];if(l[0].setComponents(p-h,b-v,x-E,F-P).normalize(),l[1].setComponents(p+h,b+v,x+E,F+P).normalize(),l[2].setComponents(p+d,b+g,x+C,F+O).normalize(),l[3].setComponents(p-d,b-g,x-C,F-O).normalize(),s)l[4].setComponents(m,S,y,U).normalize(),l[5].setComponents(p-m,b-S,x-y,F-U).normalize();else if(l[4].setComponents(p-m,b-S,x-y,F-U).normalize(),i===Yi)l[5].setComponents(p+m,b+S,x+y,F+U).normalize();else if(i===Zc)l[5].setComponents(m,S,y,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Os.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(t){Os.center.set(0,0,0);const i=aM.distanceTo(t.center);return Os.radius=.7071067811865476+i,Os.applyMatrix4(t.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Lc.x=l.normal.x>0?t.max.x:t.min.x,Lc.y=l.normal.y>0?t.max.y:t.min.y,Lc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Lc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ex extends Yr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Qc=new K,Jc=new K,__=new rn,qo=new Jd,Oc=new tu,Ih=new K,x_=new K;class sM extends zn{constructor(t=new di,i=new Ex){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)Qc.fromBufferAttribute(i,l-1),Jc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Qc.distanceTo(Jc);t.setAttribute("lineDistance",new En(s,1))}else oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Oc.copy(s.boundingSphere),Oc.applyMatrix4(l),Oc.radius+=u,t.ray.intersectsSphere(Oc)===!1)return;__.copy(l).invert(),qo.copy(t.ray).applyMatrix4(__);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,v=s.index,S=s.attributes.position;if(v!==null){const b=Math.max(0,h.start),E=Math.min(v.count,h.start+h.count);for(let C=b,y=E-1;C<y;C+=p){const x=v.getX(C),P=v.getX(C+1),O=Pc(this,t,qo,m,x,P,C);O&&i.push(O)}if(this.isLineLoop){const C=v.getX(E-1),y=v.getX(b),x=Pc(this,t,qo,m,C,y,E-1);x&&i.push(x)}}else{const b=Math.max(0,h.start),E=Math.min(S.count,h.start+h.count);for(let C=b,y=E-1;C<y;C+=p){const x=Pc(this,t,qo,m,C,C+1,C);x&&i.push(x)}if(this.isLineLoop){const C=Pc(this,t,qo,m,E-1,b,E-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Pc(o,t,i,s,l,u,h){const d=o.geometry.attributes.position;if(Qc.fromBufferAttribute(d,l),Jc.fromBufferAttribute(d,u),i.distanceSqToSegment(Qc,Jc,Ih,x_)>s)return;Ih.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(Ih);if(!(p<t.near||p>t.far))return{distance:p,point:x_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const v_=new K,S_=new K;class rM extends sM{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,u=i.count;l<u;l+=2)v_.fromBufferAttribute(i,l),S_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+v_.distanceTo(S_);t.setAttribute("lineDistance",new En(s,1))}else oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class oM extends Vn{constructor(t,i,s,l,u,h,d,m,p){super(t,i,s,l,u,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nl extends Vn{constructor(t,i,s=Ji,l,u,h,d=Pn,m=Pn,p,v=wa,g=1){if(v!==wa&&v!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:g};super(S,l,u,h,d,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class lM extends nl{constructor(t,i=Ji,s=Gs,l,u,h=Pn,d=Pn,m,p=wa){const v={width:t,height:t,depth:1},g=[v,v,v,v,v,v];super(t,t,i,s,l,u,h,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Tx extends Vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Br extends di{constructor(t=1,i=1,s=1,l=32,u=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:u,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),u=Math.floor(u);const v=[],g=[],S=[],b=[];let E=0;const C=[],y=s/2;let x=0;P(),h===!1&&(t>0&&O(!0),i>0&&O(!1)),this.setIndex(v),this.setAttribute("position",new En(g,3)),this.setAttribute("normal",new En(S,3)),this.setAttribute("uv",new En(b,2));function P(){const U=new K,F=new K;let B=0;const I=(i-t)/s;for(let q=0;q<=u;q++){const T=[],D=q/u,k=D*(i-t)+t;for(let Q=0;Q<=l;Q++){const tt=Q/l,ft=tt*m+d,ct=Math.sin(ft),z=Math.cos(ft);F.x=k*ct,F.y=-D*s+y,F.z=k*z,g.push(F.x,F.y,F.z),U.set(ct,I,z).normalize(),S.push(U.x,U.y,U.z),b.push(tt,1-D),T.push(E++)}C.push(T)}for(let q=0;q<l;q++)for(let T=0;T<u;T++){const D=C[T][q],k=C[T+1][q],Q=C[T+1][q+1],tt=C[T][q+1];(t>0||T!==0)&&(v.push(D,k,tt),B+=3),(i>0||T!==u-1)&&(v.push(k,Q,tt),B+=3)}p.addGroup(x,B,0),x+=B}function O(U){const F=E,B=new de,I=new K;let q=0;const T=U===!0?t:i,D=U===!0?1:-1;for(let Q=1;Q<=l;Q++)g.push(0,y*D,0),S.push(0,D,0),b.push(.5,.5),E++;const k=E;for(let Q=0;Q<=l;Q++){const ft=Q/l*m+d,ct=Math.cos(ft),z=Math.sin(ft);I.x=T*z,I.y=y*D,I.z=T*ct,g.push(I.x,I.y,I.z),S.push(0,D,0),B.x=ct*.5+.5,B.y=z*.5*D+.5,b.push(B.x,B.y),E++}for(let Q=0;Q<l;Q++){const tt=F+Q,ft=k+Q;U===!0?v.push(ft,ft+1,tt):v.push(ft+1,ft,tt),q+=3}p.addGroup(x,q,U===!0?1:2),x+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Br(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const zc=new K,Ic=new K,Fh=new K,Fc=new Ci;class cM extends di{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),u=Math.cos(Jo*i),h=t.getIndex(),d=t.getAttribute("position"),m=h?h.count:d.count,p=[0,0,0],v=["a","b","c"],g=new Array(3),S={},b=[];for(let E=0;E<m;E+=3){h?(p[0]=h.getX(E),p[1]=h.getX(E+1),p[2]=h.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:C,b:y,c:x}=Fc;if(C.fromBufferAttribute(d,p[0]),y.fromBufferAttribute(d,p[1]),x.fromBufferAttribute(d,p[2]),Fc.getNormal(Fh),g[0]=`${Math.round(C.x*l)},${Math.round(C.y*l)},${Math.round(C.z*l)}`,g[1]=`${Math.round(y.x*l)},${Math.round(y.y*l)},${Math.round(y.z*l)}`,g[2]=`${Math.round(x.x*l)},${Math.round(x.y*l)},${Math.round(x.z*l)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let P=0;P<3;P++){const O=(P+1)%3,U=g[P],F=g[O],B=Fc[v[P]],I=Fc[v[O]],q=`${U}_${F}`,T=`${F}_${U}`;T in S&&S[T]?(Fh.dot(S[T].normal)<=u&&(b.push(B.x,B.y,B.z),b.push(I.x,I.y,I.z)),S[T]=null):q in S||(S[q]={index0:p[P],index1:p[O],normal:Fh.clone()})}}for(const E in S)if(S[E]){const{index0:C,index1:y}=S[E];zc.fromBufferAttribute(d,C),Ic.fromBufferAttribute(d,y),b.push(zc.x,zc.y,zc.z),b.push(Ic.x,Ic.y,Ic.z)}this.setAttribute("position",new En(b,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Ti extends di{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,v=m+1,g=t/d,S=i/m,b=[],E=[],C=[],y=[];for(let x=0;x<v;x++){const P=x*S-h;for(let O=0;O<p;O++){const U=O*g-u;E.push(U,-P,0),C.push(0,0,1),y.push(O/d),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let P=0;P<d;P++){const O=P+p*x,U=P+p*(x+1),F=P+1+p*(x+1),B=P+1+p*x;b.push(O,U,B),b.push(U,F,B)}this.setIndex(b),this.setAttribute("position",new En(E,3)),this.setAttribute("normal",new En(C,3)),this.setAttribute("uv",new En(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ti(t.width,t.height,t.widthSegments,t.heightSegments)}}class ep extends di{constructor(t=1,i=32,s=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const v=[],g=new K,S=new K,b=[],E=[],C=[],y=[];for(let x=0;x<=s;x++){const P=[],O=x/s;let U=0;x===0&&h===0?U=.5/i:x===s&&m===Math.PI&&(U=-.5/i);for(let F=0;F<=i;F++){const B=F/i;g.x=-t*Math.cos(l+B*u)*Math.sin(h+O*d),g.y=t*Math.cos(h+O*d),g.z=t*Math.sin(l+B*u)*Math.sin(h+O*d),E.push(g.x,g.y,g.z),S.copy(g).normalize(),C.push(S.x,S.y,S.z),y.push(B+U,1-O),P.push(p++)}v.push(P)}for(let x=0;x<s;x++)for(let P=0;P<i;P++){const O=v[x][P+1],U=v[x][P],F=v[x+1][P],B=v[x+1][P+1];(x!==0||h>0)&&b.push(O,U,B),(x!==s-1||m<Math.PI)&&b.push(U,F,B)}this.setIndex(b),this.setAttribute("position",new En(E,3)),this.setAttribute("normal",new En(C,3)),this.setAttribute("uv",new En(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ep(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class uM extends ta{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sn extends Yr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dx,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class fM extends Yr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class hM extends Yr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ax extends zn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Bh=new rn,y_=new K,M_=new K;class dM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tp,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;y_.setFromMatrixPosition(t.matrixWorld),i.position.copy(y_),M_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(M_),i.updateMatrixWorld(),Bh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Bh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class np extends yx{constructor(t=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class pM extends dM{constructor(){super(new np(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mM extends Ax{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zn.DEFAULT_UP),this.updateMatrix(),this.target=new zn,this.shadow=new pM}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class gM extends Ax{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class _M extends Ri{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class b_{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Te(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(Te(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class xM extends ks{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){oe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function E_(o,t,i,s){const l=vM(s);switch(i){case ux:return o*t;case hx:return o*t/l.components*l.byteLength;case Wd:return o*t/l.components*l.byteLength;case jr:return o*t*2/l.components*l.byteLength;case qd:return o*t*2/l.components*l.byteLength;case fx:return o*t*3/l.components*l.byteLength;case Fi:return o*t*4/l.components*l.byteLength;case Yd:return o*t*4/l.components*l.byteLength;case kc:case Xc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case jc:case Wc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case od:case cd:return Math.max(o,16)*Math.max(t,8)/4;case rd:case ld:return Math.max(o,8)*Math.max(t,8)/2;case ud:case fd:case dd:case pd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case hd:case md:case gd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case _d:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case xd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case vd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Sd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case yd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Md:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case bd:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Ed:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Td:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Ad:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Rd:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Cd:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case wd:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Dd:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Nd:case Ud:case Ld:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Od:case Pd:return Math.ceil(o/4)*Math.ceil(t/4)*8;case zd:case Id:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function vM(o){switch(o){case hi:case rx:return{byteLength:1,components:1};case $o:case ox:case Ca:return{byteLength:2,components:1};case Xd:case jd:return{byteLength:2,components:4};case Ji:case kd:case qi:return{byteLength:4,components:1};case lx:case cx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vd}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vd);function Rx(){let o=null,t=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function SM(o){const t=new WeakMap;function i(d,m){const p=d.array,v=d.usage,g=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,v),d.onUploadCallback();let b;if(p instanceof Float32Array)b=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)b=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?b=o.HALF_FLOAT:b=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=o.SHORT;else if(p instanceof Uint32Array)b=o.UNSIGNED_INT;else if(p instanceof Int32Array)b=o.INT;else if(p instanceof Int8Array)b=o.BYTE;else if(p instanceof Uint8Array)b=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,p){const v=m.array,g=m.updateRanges;if(o.bindBuffer(p,d),g.length===0)o.bufferSubData(p,0,v);else{g.sort((b,E)=>b.start-E.start);let S=0;for(let b=1;b<g.length;b++){const E=g[S],C=g[b];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++S,g[S]=C)}g.length=S+1;for(let b=0,E=g.length;b<E;b++){const C=g[b];o.bufferSubData(p,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var yM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,MM=`#ifdef USE_ALPHAHASH
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
#endif`,bM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,EM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RM=`#ifdef USE_AOMAP
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
#endif`,CM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wM=`#ifdef USE_BATCHING
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
#endif`,DM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,NM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,UM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,OM=`#ifdef USE_IRIDESCENCE
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
#endif`,PM=`#ifdef USE_BUMPMAP
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
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,GM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,VM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,XM=`#define PI 3.141592653589793
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
} // validated`,jM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,WM=`vec3 transformedNormal = objectNormal;
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
#endif`,qM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QM="gl_FragColor = linearToOutputTexel( gl_FragColor );",JM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$M=`#ifdef USE_ENVMAP
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
#endif`,tb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,eb=`#ifdef USE_ENVMAP
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
#endif`,nb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ib=`#ifdef USE_ENVMAP
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
#endif`,ab=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ob=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lb=`#ifdef USE_GRADIENTMAP
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
}`,cb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ub=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hb=`uniform bool receiveShadow;
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
#endif`,db=`#ifdef USE_ENVMAP
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
#endif`,pb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_b=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xb=`PhysicalMaterial material;
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
#endif`,vb=`uniform sampler2D dfgLUT;
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
}`,Sb=`
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
#endif`,yb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Eb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ab=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Db=`#if defined( USE_POINTS_UV )
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
#endif`,Nb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ub=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ob=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zb=`#ifdef USE_MORPHTARGETS
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
#endif`,Ib=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kb=`#ifdef USE_NORMALMAP
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
#endif`,Xb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$b=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sE=`float getShadowMask() {
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
}`,rE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oE=`#ifdef USE_SKINNING
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
#endif`,lE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cE=`#ifdef USE_SKINNING
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
#endif`,uE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pE=`#ifdef USE_TRANSMISSION
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
#endif`,mE=`#ifdef USE_TRANSMISSION
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
#endif`,gE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yE=`uniform sampler2D t2D;
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
}`,ME=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AE=`#include <common>
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
}`,RE=`#if DEPTH_PACKING == 3200
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
}`,CE=`#define DISTANCE
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
}`,wE=`#define DISTANCE
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
}`,DE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UE=`uniform float scale;
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
}`,LE=`uniform vec3 diffuse;
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
}`,OE=`#include <common>
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
}`,PE=`uniform vec3 diffuse;
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
}`,zE=`#define LAMBERT
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
}`,IE=`#define LAMBERT
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
}`,FE=`#define MATCAP
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
}`,BE=`#define MATCAP
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
}`,HE=`#define NORMAL
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
}`,GE=`#define NORMAL
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
}`,VE=`#define PHONG
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
}`,kE=`#define PHONG
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
}`,XE=`#define STANDARD
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
}`,jE=`#define STANDARD
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
}`,WE=`#define TOON
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
}`,qE=`#define TOON
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
}`,YE=`uniform float size;
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
}`,ZE=`uniform vec3 diffuse;
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
}`,KE=`#include <common>
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
}`,QE=`uniform vec3 color;
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
}`,JE=`uniform float rotation;
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
}`,$E=`uniform vec3 diffuse;
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
}`,xe={alphahash_fragment:yM,alphahash_pars_fragment:MM,alphamap_fragment:bM,alphamap_pars_fragment:EM,alphatest_fragment:TM,alphatest_pars_fragment:AM,aomap_fragment:RM,aomap_pars_fragment:CM,batching_pars_vertex:wM,batching_vertex:DM,begin_vertex:NM,beginnormal_vertex:UM,bsdfs:LM,iridescence_fragment:OM,bumpmap_pars_fragment:PM,clipping_planes_fragment:zM,clipping_planes_pars_fragment:IM,clipping_planes_pars_vertex:FM,clipping_planes_vertex:BM,color_fragment:HM,color_pars_fragment:GM,color_pars_vertex:VM,color_vertex:kM,common:XM,cube_uv_reflection_fragment:jM,defaultnormal_vertex:WM,displacementmap_pars_vertex:qM,displacementmap_vertex:YM,emissivemap_fragment:ZM,emissivemap_pars_fragment:KM,colorspace_fragment:QM,colorspace_pars_fragment:JM,envmap_fragment:$M,envmap_common_pars_fragment:tb,envmap_pars_fragment:eb,envmap_pars_vertex:nb,envmap_physical_pars_fragment:db,envmap_vertex:ib,fog_vertex:ab,fog_pars_vertex:sb,fog_fragment:rb,fog_pars_fragment:ob,gradientmap_pars_fragment:lb,lightmap_pars_fragment:cb,lights_lambert_fragment:ub,lights_lambert_pars_fragment:fb,lights_pars_begin:hb,lights_toon_fragment:pb,lights_toon_pars_fragment:mb,lights_phong_fragment:gb,lights_phong_pars_fragment:_b,lights_physical_fragment:xb,lights_physical_pars_fragment:vb,lights_fragment_begin:Sb,lights_fragment_maps:yb,lights_fragment_end:Mb,logdepthbuf_fragment:bb,logdepthbuf_pars_fragment:Eb,logdepthbuf_pars_vertex:Tb,logdepthbuf_vertex:Ab,map_fragment:Rb,map_pars_fragment:Cb,map_particle_fragment:wb,map_particle_pars_fragment:Db,metalnessmap_fragment:Nb,metalnessmap_pars_fragment:Ub,morphinstance_vertex:Lb,morphcolor_vertex:Ob,morphnormal_vertex:Pb,morphtarget_pars_vertex:zb,morphtarget_vertex:Ib,normal_fragment_begin:Fb,normal_fragment_maps:Bb,normal_pars_fragment:Hb,normal_pars_vertex:Gb,normal_vertex:Vb,normalmap_pars_fragment:kb,clearcoat_normal_fragment_begin:Xb,clearcoat_normal_fragment_maps:jb,clearcoat_pars_fragment:Wb,iridescence_pars_fragment:qb,opaque_fragment:Yb,packing:Zb,premultiplied_alpha_fragment:Kb,project_vertex:Qb,dithering_fragment:Jb,dithering_pars_fragment:$b,roughnessmap_fragment:tE,roughnessmap_pars_fragment:eE,shadowmap_pars_fragment:nE,shadowmap_pars_vertex:iE,shadowmap_vertex:aE,shadowmask_pars_fragment:sE,skinbase_vertex:rE,skinning_pars_vertex:oE,skinning_vertex:lE,skinnormal_vertex:cE,specularmap_fragment:uE,specularmap_pars_fragment:fE,tonemapping_fragment:hE,tonemapping_pars_fragment:dE,transmission_fragment:pE,transmission_pars_fragment:mE,uv_pars_fragment:gE,uv_pars_vertex:_E,uv_vertex:xE,worldpos_vertex:vE,background_vert:SE,background_frag:yE,backgroundCube_vert:ME,backgroundCube_frag:bE,cube_vert:EE,cube_frag:TE,depth_vert:AE,depth_frag:RE,distance_vert:CE,distance_frag:wE,equirect_vert:DE,equirect_frag:NE,linedashed_vert:UE,linedashed_frag:LE,meshbasic_vert:OE,meshbasic_frag:PE,meshlambert_vert:zE,meshlambert_frag:IE,meshmatcap_vert:FE,meshmatcap_frag:BE,meshnormal_vert:HE,meshnormal_frag:GE,meshphong_vert:VE,meshphong_frag:kE,meshphysical_vert:XE,meshphysical_frag:jE,meshtoon_vert:WE,meshtoon_frag:qE,points_vert:YE,points_frag:ZE,shadow_vert:KE,shadow_frag:QE,sprite_vert:JE,sprite_frag:$E},Ht={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},ji={basic:{uniforms:jn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:jn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Ne(0)}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:jn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:jn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:jn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new Ne(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:jn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:jn([Ht.points,Ht.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:jn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:jn([Ht.common,Ht.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:jn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:jn([Ht.sprite,Ht.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distance:{uniforms:jn([Ht.common,Ht.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distance_vert,fragmentShader:xe.distance_frag},shadow:{uniforms:jn([Ht.lights,Ht.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};ji.physical={uniforms:jn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};const Bc={r:0,b:0,g:0},Ps=new $i,t1=new rn;function e1(o,t,i,s,l,u,h){const d=new Ne(0);let m=u===!0?0:1,p,v,g=null,S=0,b=null;function E(O){let U=O.isScene===!0?O.background:null;return U&&U.isTexture&&(U=(O.backgroundBlurriness>0?i:t).get(U)),U}function C(O){let U=!1;const F=E(O);F===null?x(d,m):F&&F.isColor&&(x(F,1),U=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(O,U){const F=E(U);F&&(F.isCubeTexture||F.mapping===$c)?(v===void 0&&(v=new he(new Qe(1,1,1),new ta({name:"BackgroundCubeMaterial",uniforms:qr(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(B,I,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Ps.copy(U.backgroundRotation),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),v.material.uniforms.envMap.value=F,v.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(t1.makeRotationFromEuler(Ps)),v.material.toneMapped=De.getTransfer(F.colorSpace)!==Ve,(g!==F||S!==F.version||b!==o.toneMapping)&&(v.material.needsUpdate=!0,g=F,S=F.version,b=o.toneMapping),v.layers.enableAll(),O.unshift(v,v.geometry,v.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new he(new Ti(2,2),new ta({name:"BackgroundMaterial",uniforms:qr(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=De.getTransfer(F.colorSpace)!==Ve,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(g!==F||S!==F.version||b!==o.toneMapping)&&(p.material.needsUpdate=!0,g=F,S=F.version,b=o.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function x(O,U){O.getRGB(Bc,Sx(o)),s.buffers.color.setClear(Bc.r,Bc.g,Bc.b,U,h)}function P(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,U=1){d.set(O),m=U,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,x(d,m)},render:C,addToRenderList:y,dispose:P}}function n1(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let u=l,h=!1;function d(D,k,Q,tt,ft){let ct=!1;const z=g(tt,Q,k);u!==z&&(u=z,p(u.object)),ct=b(D,tt,Q,ft),ct&&E(D,tt,Q,ft),ft!==null&&t.update(ft,o.ELEMENT_ARRAY_BUFFER),(ct||h)&&(h=!1,U(D,k,Q,tt),ft!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function m(){return o.createVertexArray()}function p(D){return o.bindVertexArray(D)}function v(D){return o.deleteVertexArray(D)}function g(D,k,Q){const tt=Q.wireframe===!0;let ft=s[D.id];ft===void 0&&(ft={},s[D.id]=ft);let ct=ft[k.id];ct===void 0&&(ct={},ft[k.id]=ct);let z=ct[tt];return z===void 0&&(z=S(m()),ct[tt]=z),z}function S(D){const k=[],Q=[],tt=[];for(let ft=0;ft<i;ft++)k[ft]=0,Q[ft]=0,tt[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Q,attributeDivisors:tt,object:D,attributes:{},index:null}}function b(D,k,Q,tt){const ft=u.attributes,ct=k.attributes;let z=0;const V=Q.getAttributes();for(const at in V)if(V[at].location>=0){const Tt=ft[at];let L=ct[at];if(L===void 0&&(at==="instanceMatrix"&&D.instanceMatrix&&(L=D.instanceMatrix),at==="instanceColor"&&D.instanceColor&&(L=D.instanceColor)),Tt===void 0||Tt.attribute!==L||L&&Tt.data!==L.data)return!0;z++}return u.attributesNum!==z||u.index!==tt}function E(D,k,Q,tt){const ft={},ct=k.attributes;let z=0;const V=Q.getAttributes();for(const at in V)if(V[at].location>=0){let Tt=ct[at];Tt===void 0&&(at==="instanceMatrix"&&D.instanceMatrix&&(Tt=D.instanceMatrix),at==="instanceColor"&&D.instanceColor&&(Tt=D.instanceColor));const L={};L.attribute=Tt,Tt&&Tt.data&&(L.data=Tt.data),ft[at]=L,z++}u.attributes=ft,u.attributesNum=z,u.index=tt}function C(){const D=u.newAttributes;for(let k=0,Q=D.length;k<Q;k++)D[k]=0}function y(D){x(D,0)}function x(D,k){const Q=u.newAttributes,tt=u.enabledAttributes,ft=u.attributeDivisors;Q[D]=1,tt[D]===0&&(o.enableVertexAttribArray(D),tt[D]=1),ft[D]!==k&&(o.vertexAttribDivisor(D,k),ft[D]=k)}function P(){const D=u.newAttributes,k=u.enabledAttributes;for(let Q=0,tt=k.length;Q<tt;Q++)k[Q]!==D[Q]&&(o.disableVertexAttribArray(Q),k[Q]=0)}function O(D,k,Q,tt,ft,ct,z){z===!0?o.vertexAttribIPointer(D,k,Q,ft,ct):o.vertexAttribPointer(D,k,Q,tt,ft,ct)}function U(D,k,Q,tt){C();const ft=tt.attributes,ct=Q.getAttributes(),z=k.defaultAttributeValues;for(const V in ct){const at=ct[V];if(at.location>=0){let At=ft[V];if(At===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(At=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(At=D.instanceColor)),At!==void 0){const Tt=At.normalized,L=At.itemSize,it=t.get(At);if(it===void 0)continue;const St=it.buffer,Lt=it.type,Gt=it.bytesPerElement,$=Lt===o.INT||Lt===o.UNSIGNED_INT||At.gpuType===kd;if(At.isInterleavedBufferAttribute){const ht=At.data,zt=ht.stride,Ct=At.offset;if(ht.isInstancedInterleavedBuffer){for(let It=0;It<at.locationSize;It++)x(at.location+It,ht.meshPerAttribute);D.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let It=0;It<at.locationSize;It++)y(at.location+It);o.bindBuffer(o.ARRAY_BUFFER,St);for(let It=0;It<at.locationSize;It++)O(at.location+It,L/at.locationSize,Lt,Tt,zt*Gt,(Ct+L/at.locationSize*It)*Gt,$)}else{if(At.isInstancedBufferAttribute){for(let ht=0;ht<at.locationSize;ht++)x(at.location+ht,At.meshPerAttribute);D.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let ht=0;ht<at.locationSize;ht++)y(at.location+ht);o.bindBuffer(o.ARRAY_BUFFER,St);for(let ht=0;ht<at.locationSize;ht++)O(at.location+ht,L/at.locationSize,Lt,Tt,L*Gt,L/at.locationSize*ht*Gt,$)}}else if(z!==void 0){const Tt=z[V];if(Tt!==void 0)switch(Tt.length){case 2:o.vertexAttrib2fv(at.location,Tt);break;case 3:o.vertexAttrib3fv(at.location,Tt);break;case 4:o.vertexAttrib4fv(at.location,Tt);break;default:o.vertexAttrib1fv(at.location,Tt)}}}}P()}function F(){q();for(const D in s){const k=s[D];for(const Q in k){const tt=k[Q];for(const ft in tt)v(tt[ft].object),delete tt[ft];delete k[Q]}delete s[D]}}function B(D){if(s[D.id]===void 0)return;const k=s[D.id];for(const Q in k){const tt=k[Q];for(const ft in tt)v(tt[ft].object),delete tt[ft];delete k[Q]}delete s[D.id]}function I(D){for(const k in s){const Q=s[k];if(Q[D.id]===void 0)continue;const tt=Q[D.id];for(const ft in tt)v(tt[ft].object),delete tt[ft];delete Q[D.id]}}function q(){T(),h=!0,u!==l&&(u=l,p(u.object))}function T(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:T,dispose:F,releaseStatesOfGeometry:B,releaseStatesOfProgram:I,initAttributes:C,enableAttribute:y,disableUnusedAttributes:P}}function i1(o,t,i){let s;function l(p){s=p}function u(p,v){o.drawArrays(s,p,v),i.update(v,s,1)}function h(p,v,g){g!==0&&(o.drawArraysInstanced(s,p,v,g),i.update(v,s,g))}function d(p,v,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,g);let b=0;for(let E=0;E<g;E++)b+=v[E];i.update(b,s,1)}function m(p,v,g,S){if(g===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let E=0;E<p.length;E++)h(p[E],v[E],S[E]);else{b.multiDrawArraysInstancedWEBGL(s,p,0,v,0,S,0,g);let E=0;for(let C=0;C<g;C++)E+=v[C]*S[C];i.update(E,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function a1(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==Fi&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const q=I===Ca&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==hi&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==qi&&!q)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(oe("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),b=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=o.getParameter(o.MAX_SAMPLES),B=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:b,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:P,maxVaryings:O,maxFragmentUniforms:U,maxSamples:F,samples:B}}function s1(o){const t=this;let i=null,s=0,l=!1,u=!1;const h=new cs,d=new ge,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const b=g.length!==0||S||s!==0||l;return l=S,s=g.length,b},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,S){i=v(g,S,0)},this.setState=function(g,S,b){const E=g.clippingPlanes,C=g.clipIntersection,y=g.clipShadows,x=o.get(g);if(!l||E===null||E.length===0||u&&!y)u?v(null):p();else{const P=u?0:s,O=P*4;let U=x.clippingState||null;m.value=U,U=v(E,S,O,b);for(let F=0;F!==O;++F)U[F]=i[F];x.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(g,S,b,E){const C=g!==null?g.length:0;let y=null;if(C!==0){if(y=m.value,E!==!0||y===null){const x=b+C*4,P=S.matrixWorldInverse;d.getNormalMatrix(P),(y===null||y.length<x)&&(y=new Float32Array(x));for(let O=0,U=b;O!==C;++O,U+=4)h.copy(g[O]).applyMatrix4(P,d),h.normal.toArray(y,U),y[U+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,y}}function r1(o){let t=new WeakMap;function i(h,d){return d===nd?h.mapping=Gs:d===id&&(h.mapping=Xr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===nd||d===id)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new bx(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const fs=4,T_=[.125,.215,.35,.446,.526,.582],Fs=20,o1=256,Yo=new np,A_=new Ne;let Hh=null,Gh=0,Vh=0,kh=!1;const l1=new K;class R_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=l1}=u;Hh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=D_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=w_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Hh,Gh,Vh),this._renderer.xr.enabled=kh,t.scissorTest=!1,Ir(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Gs||t.mapping===Xr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Hh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Ca,format:Fi,colorSpace:Wr,depthBuffer:!1},l=C_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=C_(t,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=c1(u)),this._blurMaterial=f1(u,t,i),this._ggxMaterial=u1(u,t,i)}return l}_compileMaterial(t){const i=new he(new di,t);this._renderer.compile(i,Yo)}_sceneToCubeUV(t,i,s,l,u){const m=new Ri(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,b=g.toneMapping;g.getClearColor(A_),g.toneMapping=Zi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new he(new Qe,new $d({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let x=!1;const P=t.background;P?P.isColor&&(y.color.copy(P),t.background=null,x=!0):(y.color.copy(A_),x=!0);for(let O=0;O<6;O++){const U=O%3;U===0?(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+v[O],u.y,u.z)):U===1?(m.up.set(0,0,p[O]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+v[O],u.z)):(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+v[O]));const F=this._cubeSize;Ir(l,U*F,O>2?F:0,F,F),g.setRenderTarget(l),x&&g.render(C,m),g.render(t,m)}g.toneMapping=b,g.autoClear=S,t.background=P}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Gs||t.mapping===Xr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=D_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=w_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=u;const d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;Ir(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Yo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,u=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-v*v),S=0+p*1.25,b=g*S,{_lodMax:E}=this,C=this._sizeLods[s],y=3*C*(s>E-fs?s-E+fs:0),x=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=b,m.mipInt.value=E-i,Ir(u,y,x,3*C,2*C),l.setRenderTarget(u),l.render(d,Yo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=E-s,Ir(t,y,x,3*C,2*C),l.setRenderTarget(t),l.render(d,Yo)}_blur(t,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",u),this._halfBlur(h,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Oe("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[l];g.material=p;const S=p.uniforms,b=this._sizeLods[s]-1,E=isFinite(u)?Math.PI/(2*b):2*Math.PI/(2*Fs-1),C=u/E,y=isFinite(u)?1+Math.floor(v*C):Fs;y>Fs&&oe(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Fs}`);const x=[];let P=0;for(let I=0;I<Fs;++I){const q=I/C,T=Math.exp(-q*q/2);x.push(T),I===0?P+=T:I<y&&(P+=2*T)}for(let I=0;I<x.length;I++)x[I]=x[I]/P;S.envMap.value=t.texture,S.samples.value=y,S.weights.value=x,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:O}=this;S.dTheta.value=E,S.mipInt.value=O-s;const U=this._sizeLods[l],F=3*U*(l>O-fs?l-O+fs:0),B=4*(this._cubeSize-U);Ir(i,F,B,3*U,2*U),m.setRenderTarget(i),m.render(g,Yo)}}function c1(o){const t=[],i=[],s=[];let l=o;const u=o-fs+1+T_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>o-fs?m=T_[h-o+fs-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),v=-p,g=1+p,S=[v,v,g,v,g,g,v,v,g,g,v,g],b=6,E=6,C=3,y=2,x=1,P=new Float32Array(C*E*b),O=new Float32Array(y*E*b),U=new Float32Array(x*E*b);for(let B=0;B<b;B++){const I=B%3*2/3-1,q=B>2?0:-1,T=[I,q,0,I+2/3,q,0,I+2/3,q+1,0,I,q,0,I+2/3,q+1,0,I,q+1,0];P.set(T,C*E*B),O.set(S,y*E*B);const D=[B,B,B,B,B,B];U.set(D,x*E*B)}const F=new di;F.setAttribute("position",new Qi(P,C)),F.setAttribute("uv",new Qi(O,y)),F.setAttribute("faceIndex",new Qi(U,x)),s.push(new he(F,null)),l>fs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function C_(o,t,i){const s=new Ki(o,t,i);return s.texture.mapping=$c,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ir(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function u1(o,t,i){return new ta({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:o1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:eu(),fragmentShader:`

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
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function f1(o,t,i){const s=new Float32Array(Fs),l=new K(0,1,0);return new ta({name:"SphericalGaussianBlur",defines:{n:Fs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:eu(),fragmentShader:`

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
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function w_(){return new ta({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eu(),fragmentShader:`

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
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function D_(){return new ta({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function eu(){return`

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
	`}function h1(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===nd||m===id,v=m===Gs||m===Xr;if(p||v){let g=t.get(d);const S=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new R_(o)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const b=d.image;return p&&b&&b.height>0||v&&b&&l(b)?(i===null&&(i=new R_(o)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function d1(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&el("WebGLRenderer: "+s+" extension not supported."),l}}}function p1(o,t,i,s){const l={},u=new WeakMap;function h(g){const S=g.target;S.index!==null&&t.remove(S.index);for(const E in S.attributes)t.remove(S.attributes[E]);S.removeEventListener("dispose",h),delete l[S.id];const b=u.get(S);b&&(t.remove(b),u.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(g,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const b in S)t.update(S[b],o.ARRAY_BUFFER)}function p(g){const S=[],b=g.index,E=g.attributes.position;let C=0;if(b!==null){const P=b.array;C=b.version;for(let O=0,U=P.length;O<U;O+=3){const F=P[O+0],B=P[O+1],I=P[O+2];S.push(F,B,B,I,I,F)}}else if(E!==void 0){const P=E.array;C=E.version;for(let O=0,U=P.length/3-1;O<U;O+=3){const F=O+0,B=O+1,I=O+2;S.push(F,B,B,I,I,F)}}else return;const y=new(px(S)?vx:xx)(S,1);y.version=C;const x=u.get(g);x&&t.remove(x),u.set(g,y)}function v(g){const S=u.get(g);if(S){const b=g.index;b!==null&&S.version<b.version&&p(g)}else p(g);return u.get(g)}return{get:d,update:m,getWireframeAttribute:v}}function m1(o,t,i){let s;function l(S){s=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,b){o.drawElements(s,b,u,S*h),i.update(b,s,1)}function p(S,b,E){E!==0&&(o.drawElementsInstanced(s,b,u,S*h,E),i.update(b,s,E))}function v(S,b,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,b,0,u,S,0,E);let y=0;for(let x=0;x<E;x++)y+=b[x];i.update(y,s,1)}function g(S,b,E,C){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<S.length;x++)p(S[x]/h,b[x],C[x]);else{y.multiDrawElementsInstancedWEBGL(s,b,0,u,S,0,C,0,E);let x=0;for(let P=0;P<E;P++)x+=b[P]*C[P];i.update(x,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function g1(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:Oe("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function _1(o,t,i){const s=new WeakMap,l=new cn;function u(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let S=s.get(d);if(S===void 0||S.count!==g){let D=function(){q.dispose(),s.delete(d),d.removeEventListener("dispose",D)};var b=D;S!==void 0&&S.texture.dispose();const E=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let U=0;E===!0&&(U=1),C===!0&&(U=2),y===!0&&(U=3);let F=d.attributes.position.count*U,B=1;F>t.maxTextureSize&&(B=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const I=new Float32Array(F*B*4*g),q=new mx(I,F,B,g);q.type=qi,q.needsUpdate=!0;const T=U*4;for(let k=0;k<g;k++){const Q=x[k],tt=P[k],ft=O[k],ct=F*B*4*k;for(let z=0;z<Q.count;z++){const V=z*T;E===!0&&(l.fromBufferAttribute(Q,z),I[ct+V+0]=l.x,I[ct+V+1]=l.y,I[ct+V+2]=l.z,I[ct+V+3]=0),C===!0&&(l.fromBufferAttribute(tt,z),I[ct+V+4]=l.x,I[ct+V+5]=l.y,I[ct+V+6]=l.z,I[ct+V+7]=0),y===!0&&(l.fromBufferAttribute(ft,z),I[ct+V+8]=l.x,I[ct+V+9]=l.y,I[ct+V+10]=l.z,I[ct+V+11]=ft.itemSize===4?l.w:1)}}S={count:g,texture:q,size:new de(F,B)},s.set(d,S),d.addEventListener("dispose",D)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const C=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function x1(o,t,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,v=m.geometry,g=t.get(m,v);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const v1={[J_]:"LINEAR_TONE_MAPPING",[$_]:"REINHARD_TONE_MAPPING",[tx]:"CINEON_TONE_MAPPING",[ex]:"ACES_FILMIC_TONE_MAPPING",[ix]:"AGX_TONE_MAPPING",[ax]:"NEUTRAL_TONE_MAPPING",[nx]:"CUSTOM_TONE_MAPPING"};function S1(o,t,i,s,l){const u=new Ki(t,i,{type:o,depthBuffer:s,stencilBuffer:l}),h=new Ki(t,i,{type:Ca,depthBuffer:!1,stencilBuffer:!1}),d=new di;d.setAttribute("position",new En([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new En([0,2,0,0,2,0],2));const m=new uM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new he(d,m),v=new np(-1,1,1,-1,0,1);let g=null,S=null,b=!1,E,C=null,y=[],x=!1;this.setSize=function(P,O){u.setSize(P,O),h.setSize(P,O);for(let U=0;U<y.length;U++){const F=y[U];F.setSize&&F.setSize(P,O)}},this.setEffects=function(P){y=P,x=y.length>0&&y[0].isRenderPass===!0;const O=u.width,U=u.height;for(let F=0;F<y.length;F++){const B=y[F];B.setSize&&B.setSize(O,U)}},this.begin=function(P,O){if(b||P.toneMapping===Zi&&y.length===0)return!1;if(C=O,O!==null){const U=O.width,F=O.height;(u.width!==U||u.height!==F)&&this.setSize(U,F)}return x===!1&&P.setRenderTarget(u),E=P.toneMapping,P.toneMapping=Zi,!0},this.hasRenderPass=function(){return x},this.end=function(P,O){P.toneMapping=E,b=!0;let U=u,F=h;for(let B=0;B<y.length;B++){const I=y[B];if(I.enabled!==!1&&(I.render(P,F,U,O),I.needsSwap!==!1)){const q=U;U=F,F=q}}if(g!==P.outputColorSpace||S!==P.toneMapping){g=P.outputColorSpace,S=P.toneMapping,m.defines={},De.getTransfer(g)===Ve&&(m.defines.SRGB_TRANSFER="");const B=v1[S];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,P.setRenderTarget(C),P.render(p,v),C=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){u.dispose(),h.dispose(),d.dispose(),m.dispose()}}const Cx=new Vn,Bd=new nl(1,1),wx=new mx,Dx=new zy,Nx=new Mx,N_=[],U_=[],L_=new Float32Array(16),O_=new Float32Array(9),P_=new Float32Array(4);function Zr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=N_[l];if(u===void 0&&(u=new Float32Array(l),N_[l]=u),t!==0){s.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function Sn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function yn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function nu(o,t){let i=U_[t];i===void 0&&(i=new Int32Array(t),U_[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function y1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function M1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;o.uniform2fv(this.addr,t),yn(i,t)}}function b1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Sn(i,t))return;o.uniform3fv(this.addr,t),yn(i,t)}}function E1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;o.uniform4fv(this.addr,t),yn(i,t)}}function T1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;P_.set(s),o.uniformMatrix2fv(this.addr,!1,P_),yn(i,s)}}function A1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;O_.set(s),o.uniformMatrix3fv(this.addr,!1,O_),yn(i,s)}}function R1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;L_.set(s),o.uniformMatrix4fv(this.addr,!1,L_),yn(i,s)}}function C1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function w1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;o.uniform2iv(this.addr,t),yn(i,t)}}function D1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Sn(i,t))return;o.uniform3iv(this.addr,t),yn(i,t)}}function N1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;o.uniform4iv(this.addr,t),yn(i,t)}}function U1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function L1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;o.uniform2uiv(this.addr,t),yn(i,t)}}function O1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Sn(i,t))return;o.uniform3uiv(this.addr,t),yn(i,t)}}function P1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;o.uniform4uiv(this.addr,t),yn(i,t)}}function z1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Bd.compareFunction=i.isReversedDepthBuffer()?Kd:Zd,u=Bd):u=Cx,i.setTexture2D(t||u,l)}function I1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Dx,l)}function F1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Nx,l)}function B1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||wx,l)}function H1(o){switch(o){case 5126:return y1;case 35664:return M1;case 35665:return b1;case 35666:return E1;case 35674:return T1;case 35675:return A1;case 35676:return R1;case 5124:case 35670:return C1;case 35667:case 35671:return w1;case 35668:case 35672:return D1;case 35669:case 35673:return N1;case 5125:return U1;case 36294:return L1;case 36295:return O1;case 36296:return P1;case 35678:case 36198:case 36298:case 36306:case 35682:return z1;case 35679:case 36299:case 36307:return I1;case 35680:case 36300:case 36308:case 36293:return F1;case 36289:case 36303:case 36311:case 36292:return B1}}function G1(o,t){o.uniform1fv(this.addr,t)}function V1(o,t){const i=Zr(t,this.size,2);o.uniform2fv(this.addr,i)}function k1(o,t){const i=Zr(t,this.size,3);o.uniform3fv(this.addr,i)}function X1(o,t){const i=Zr(t,this.size,4);o.uniform4fv(this.addr,i)}function j1(o,t){const i=Zr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function W1(o,t){const i=Zr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function q1(o,t){const i=Zr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Y1(o,t){o.uniform1iv(this.addr,t)}function Z1(o,t){o.uniform2iv(this.addr,t)}function K1(o,t){o.uniform3iv(this.addr,t)}function Q1(o,t){o.uniform4iv(this.addr,t)}function J1(o,t){o.uniform1uiv(this.addr,t)}function $1(o,t){o.uniform2uiv(this.addr,t)}function tT(o,t){o.uniform3uiv(this.addr,t)}function eT(o,t){o.uniform4uiv(this.addr,t)}function nT(o,t,i){const s=this.cache,l=t.length,u=nu(i,l);Sn(s,u)||(o.uniform1iv(this.addr,u),yn(s,u));let h;this.type===o.SAMPLER_2D_SHADOW?h=Bd:h=Cx;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,u[d])}function iT(o,t,i){const s=this.cache,l=t.length,u=nu(i,l);Sn(s,u)||(o.uniform1iv(this.addr,u),yn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Dx,u[h])}function aT(o,t,i){const s=this.cache,l=t.length,u=nu(i,l);Sn(s,u)||(o.uniform1iv(this.addr,u),yn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Nx,u[h])}function sT(o,t,i){const s=this.cache,l=t.length,u=nu(i,l);Sn(s,u)||(o.uniform1iv(this.addr,u),yn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||wx,u[h])}function rT(o){switch(o){case 5126:return G1;case 35664:return V1;case 35665:return k1;case 35666:return X1;case 35674:return j1;case 35675:return W1;case 35676:return q1;case 5124:case 35670:return Y1;case 35667:case 35671:return Z1;case 35668:case 35672:return K1;case 35669:case 35673:return Q1;case 5125:return J1;case 36294:return $1;case 36295:return tT;case 36296:return eT;case 35678:case 36198:case 36298:case 36306:case 35682:return nT;case 35679:case 36299:case 36307:return iT;case 35680:case 36300:case 36308:case 36293:return aT;case 36289:case 36303:case 36311:case 36292:return sT}}class oT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=H1(i.type)}}class lT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=rT(i.type)}}class cT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const Xh=/(\w+)(\])?(\[|\.)?/g;function z_(o,t){o.seq.push(t),o.map[t.id]=t}function uT(o,t,i){const s=o.name,l=s.length;for(Xh.lastIndex=0;;){const u=Xh.exec(s),h=Xh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){z_(i,p===void 0?new oT(d,o,t):new lT(d,o,t));break}else{let g=i.map[d];g===void 0&&(g=new cT(d),z_(i,g)),i=g}}}class qc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);uT(d,m,this)}const l=[],u=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):u.push(h);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function I_(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const fT=37297;let hT=0;function dT(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const F_=new ge;function pT(o){De._getMatrix(F_,De.workingColorSpace,o);const t=`mat3( ${F_.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(o)){case Yc:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function B_(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+dT(o.getShaderSource(t),d)}else return u}function mT(o,t){const i=pT(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const gT={[J_]:"Linear",[$_]:"Reinhard",[tx]:"Cineon",[ex]:"ACESFilmic",[ix]:"AgX",[ax]:"Neutral",[nx]:"Custom"};function _T(o,t){const i=gT[t];return i===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Hc=new K;function xT(){De.getLuminanceCoefficients(Hc);const o=Hc.x.toFixed(4),t=Hc.y.toFixed(4),i=Hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function ST(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function yT(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Qo(o){return o!==""}function H_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function G_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const MT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hd(o){return o.replace(MT,ET)}const bT=new Map;function ET(o,t){let i=xe[t];if(i===void 0){const s=bT.get(t);if(s!==void 0)i=xe[s],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Hd(i)}const TT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function V_(o){return o.replace(TT,AT)}function AT(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function k_(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}const RT={[Vc]:"SHADOWMAP_TYPE_PCF",[Ko]:"SHADOWMAP_TYPE_VSM"};function CT(o){return RT[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const wT={[Gs]:"ENVMAP_TYPE_CUBE",[Xr]:"ENVMAP_TYPE_CUBE",[$c]:"ENVMAP_TYPE_CUBE_UV"};function DT(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":wT[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const NT={[Xr]:"ENVMAP_MODE_REFRACTION"};function UT(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":NT[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const LT={[Q_]:"ENVMAP_BLENDING_MULTIPLY",[gy]:"ENVMAP_BLENDING_MIX",[_y]:"ENVMAP_BLENDING_ADD"};function OT(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":LT[o.combine]||"ENVMAP_BLENDING_NONE"}function PT(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function zT(o,t,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=CT(i),p=DT(i),v=UT(i),g=OT(i),S=PT(i),b=vT(i),E=ST(u),C=l.createProgram();let y,x,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Qo).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Qo).join(`
`),x.length>0&&(x+=`
`)):(y=[k_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),x=[k_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Zi?"#define TONE_MAPPING":"",i.toneMapping!==Zi?xe.tonemapping_pars_fragment:"",i.toneMapping!==Zi?_T("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,mT("linearToOutputTexel",i.outputColorSpace),xT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Qo).join(`
`)),h=Hd(h),h=H_(h,i),h=G_(h,i),d=Hd(d),d=H_(d,i),d=G_(d,i),h=V_(h),d=V_(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===Jg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Jg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const O=P+y+h,U=P+x+d,F=I_(l,l.VERTEX_SHADER,O),B=I_(l,l.FRAGMENT_SHADER,U);l.attachShader(C,F),l.attachShader(C,B),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function I(k){if(o.debug.checkShaderErrors){const Q=l.getProgramInfoLog(C)||"",tt=l.getShaderInfoLog(F)||"",ft=l.getShaderInfoLog(B)||"",ct=Q.trim(),z=tt.trim(),V=ft.trim();let at=!0,At=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(at=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,F,B);else{const Tt=B_(l,F,"vertex"),L=B_(l,B,"fragment");Oe("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ct+`
`+Tt+`
`+L)}else ct!==""?oe("WebGLProgram: Program Info Log:",ct):(z===""||V==="")&&(At=!1);At&&(k.diagnostics={runnable:at,programLog:ct,vertexShader:{log:z,prefix:y},fragmentShader:{log:V,prefix:x}})}l.deleteShader(F),l.deleteShader(B),q=new qc(l,C),T=yT(l,C)}let q;this.getUniforms=function(){return q===void 0&&I(this),q};let T;this.getAttributes=function(){return T===void 0&&I(this),T};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(C,fT)),D},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=hT++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=F,this.fragmentShader=B,this}let IT=0;class FT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new BT(t),i.set(t,s)),s}}class BT{constructor(t){this.id=IT++,this.code=t,this.usedTimes=0}}function HT(o,t,i,s,l,u,h){const d=new gx,m=new FT,p=new Set,v=[],g=new Map,S=l.logarithmicDepthBuffer;let b=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(T){return p.add(T),T===0?"uv":`uv${T}`}function y(T,D,k,Q,tt){const ft=Q.fog,ct=tt.geometry,z=T.isMeshStandardMaterial?Q.environment:null,V=(T.isMeshStandardMaterial?i:t).get(T.envMap||z),at=V&&V.mapping===$c?V.image.height:null,At=E[T.type];T.precision!==null&&(b=l.getMaxPrecision(T.precision),b!==T.precision&&oe("WebGLProgram.getParameters:",T.precision,"not supported, using",b,"instead."));const Tt=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,L=Tt!==void 0?Tt.length:0;let it=0;ct.morphAttributes.position!==void 0&&(it=1),ct.morphAttributes.normal!==void 0&&(it=2),ct.morphAttributes.color!==void 0&&(it=3);let St,Lt,Gt,$;if(At){const le=ji[At];St=le.vertexShader,Lt=le.fragmentShader}else St=T.vertexShader,Lt=T.fragmentShader,m.update(T),Gt=m.getVertexShaderID(T),$=m.getFragmentShaderID(T);const ht=o.getRenderTarget(),zt=o.state.buffers.depth.getReversed(),Ct=tt.isInstancedMesh===!0,It=tt.isBatchedMesh===!0,fe=!!T.map,Ye=!!T.matcap,Se=!!V,ve=!!T.aoMap,kt=!!T.lightMap,Nt=!!T.bumpMap,re=!!T.normalMap,H=!!T.displacementMap,_e=!!T.emissiveMap,ye=!!T.metalnessMap,Ce=!!T.roughnessMap,jt=T.anisotropy>0,N=T.clearcoat>0,M=T.dispersion>0,W=T.iridescence>0,_t=T.sheen>0,Mt=T.transmission>0,ut=jt&&!!T.anisotropyMap,Zt=N&&!!T.clearcoatMap,Pt=N&&!!T.clearcoatNormalMap,Wt=N&&!!T.clearcoatRoughnessMap,ie=W&&!!T.iridescenceMap,wt=W&&!!T.iridescenceThicknessMap,Ut=_t&&!!T.sheenColorMap,gt=_t&&!!T.sheenRoughnessMap,bt=!!T.specularMap,Et=!!T.specularColorMap,Xt=!!T.specularIntensityMap,X=Mt&&!!T.transmissionMap,Ot=Mt&&!!T.thicknessMap,vt=!!T.gradientMap,Rt=!!T.alphaMap,dt=T.alphaTest>0,pt=!!T.alphaHash,Dt=!!T.extensions;let $t=Zi;T.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&($t=o.toneMapping);const Me={shaderID:At,shaderType:T.type,shaderName:T.name,vertexShader:St,fragmentShader:Lt,defines:T.defines,customVertexShaderID:Gt,customFragmentShaderID:$,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:b,batching:It,batchingColor:It&&tt._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&tt.instanceColor!==null,instancingMorph:Ct&&tt.morphTexture!==null,outputColorSpace:ht===null?o.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Wr,alphaToCoverage:!!T.alphaToCoverage,map:fe,matcap:Ye,envMap:Se,envMapMode:Se&&V.mapping,envMapCubeUVHeight:at,aoMap:ve,lightMap:kt,bumpMap:Nt,normalMap:re,displacementMap:H,emissiveMap:_e,normalMapObjectSpace:re&&T.normalMapType===Sy,normalMapTangentSpace:re&&T.normalMapType===dx,metalnessMap:ye,roughnessMap:Ce,anisotropy:jt,anisotropyMap:ut,clearcoat:N,clearcoatMap:Zt,clearcoatNormalMap:Pt,clearcoatRoughnessMap:Wt,dispersion:M,iridescence:W,iridescenceMap:ie,iridescenceThicknessMap:wt,sheen:_t,sheenColorMap:Ut,sheenRoughnessMap:gt,specularMap:bt,specularColorMap:Et,specularIntensityMap:Xt,transmission:Mt,transmissionMap:X,thicknessMap:Ot,gradientMap:vt,opaque:T.transparent===!1&&T.blending===Gr&&T.alphaToCoverage===!1,alphaMap:Rt,alphaTest:dt,alphaHash:pt,combine:T.combine,mapUv:fe&&C(T.map.channel),aoMapUv:ve&&C(T.aoMap.channel),lightMapUv:kt&&C(T.lightMap.channel),bumpMapUv:Nt&&C(T.bumpMap.channel),normalMapUv:re&&C(T.normalMap.channel),displacementMapUv:H&&C(T.displacementMap.channel),emissiveMapUv:_e&&C(T.emissiveMap.channel),metalnessMapUv:ye&&C(T.metalnessMap.channel),roughnessMapUv:Ce&&C(T.roughnessMap.channel),anisotropyMapUv:ut&&C(T.anisotropyMap.channel),clearcoatMapUv:Zt&&C(T.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&C(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&C(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&C(T.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&C(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&C(T.sheenColorMap.channel),sheenRoughnessMapUv:gt&&C(T.sheenRoughnessMap.channel),specularMapUv:bt&&C(T.specularMap.channel),specularColorMapUv:Et&&C(T.specularColorMap.channel),specularIntensityMapUv:Xt&&C(T.specularIntensityMap.channel),transmissionMapUv:X&&C(T.transmissionMap.channel),thicknessMapUv:Ot&&C(T.thicknessMap.channel),alphaMapUv:Rt&&C(T.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(re||jt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!ct.attributes.uv&&(fe||Rt),fog:!!ft,useFog:T.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:zt,skinning:tt.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:it,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:$t,decodeVideoTexture:fe&&T.map.isVideoTexture===!0&&De.getTransfer(T.map.colorSpace)===Ve,decodeVideoTextureEmissive:_e&&T.emissiveMap.isVideoTexture===!0&&De.getTransfer(T.emissiveMap.colorSpace)===Ve,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Wi,flipSided:T.side===ti,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Dt&&T.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&T.extensions.multiDraw===!0||It)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Me.vertexUv1s=p.has(1),Me.vertexUv2s=p.has(2),Me.vertexUv3s=p.has(3),p.clear(),Me}function x(T){const D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(const k in T.defines)D.push(k),D.push(T.defines[k]);return T.isRawShaderMaterial===!1&&(P(D,T),O(D,T),D.push(o.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function P(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function O(T,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),T.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),T.push(d.mask)}function U(T){const D=E[T.type];let k;if(D){const Q=ji[D];k=Zy.clone(Q.uniforms)}else k=T.uniforms;return k}function F(T,D){let k=g.get(D);return k!==void 0?++k.usedTimes:(k=new zT(o,D,T,u),v.push(k),g.set(D,k)),k}function B(T){if(--T.usedTimes===0){const D=v.indexOf(T);v[D]=v[v.length-1],v.pop(),g.delete(T.cacheKey),T.destroy()}}function I(T){m.remove(T)}function q(){m.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:U,acquireProgram:F,releaseProgram:B,releaseShaderCache:I,programs:v,dispose:q}}function GT(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function VT(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function X_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function j_(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function h(g,S,b,E,C,y){let x=o[t];return x===void 0?(x={id:g.id,object:g,geometry:S,material:b,groupOrder:E,renderOrder:g.renderOrder,z:C,group:y},o[t]=x):(x.id=g.id,x.object=g,x.geometry=S,x.material=b,x.groupOrder=E,x.renderOrder=g.renderOrder,x.z=C,x.group=y),t++,x}function d(g,S,b,E,C,y){const x=h(g,S,b,E,C,y);b.transmission>0?s.push(x):b.transparent===!0?l.push(x):i.push(x)}function m(g,S,b,E,C,y){const x=h(g,S,b,E,C,y);b.transmission>0?s.unshift(x):b.transparent===!0?l.unshift(x):i.unshift(x)}function p(g,S){i.length>1&&i.sort(g||VT),s.length>1&&s.sort(S||X_),l.length>1&&l.sort(S||X_)}function v(){for(let g=t,S=o.length;g<S;g++){const b=o[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:v,sort:p}}function kT(){let o=new WeakMap;function t(s,l){const u=o.get(s);let h;return u===void 0?(h=new j_,o.set(s,[h])):l>=u.length?(h=new j_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function XT(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new K,color:new Ne};break;case"SpotLight":i={position:new K,direction:new K,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":i={color:new Ne,position:new K,halfWidth:new K,halfHeight:new K};break}return o[t.id]=i,i}}}function jT(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let WT=0;function qT(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function YT(o){const t=new XT,i=jT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new K);const l=new K,u=new rn,h=new rn;function d(p){let v=0,g=0,S=0;for(let T=0;T<9;T++)s.probe[T].set(0,0,0);let b=0,E=0,C=0,y=0,x=0,P=0,O=0,U=0,F=0,B=0,I=0;p.sort(qT);for(let T=0,D=p.length;T<D;T++){const k=p[T],Q=k.color,tt=k.intensity,ft=k.distance;let ct=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===jr?ct=k.shadow.map.texture:ct=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)v+=Q.r*tt,g+=Q.g*tt,S+=Q.b*tt;else if(k.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(k.sh.coefficients[z],tt);I++}else if(k.isDirectionalLight){const z=t.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const V=k.shadow,at=i.get(k);at.shadowIntensity=V.intensity,at.shadowBias=V.bias,at.shadowNormalBias=V.normalBias,at.shadowRadius=V.radius,at.shadowMapSize=V.mapSize,s.directionalShadow[b]=at,s.directionalShadowMap[b]=ct,s.directionalShadowMatrix[b]=k.shadow.matrix,P++}s.directional[b]=z,b++}else if(k.isSpotLight){const z=t.get(k);z.position.setFromMatrixPosition(k.matrixWorld),z.color.copy(Q).multiplyScalar(tt),z.distance=ft,z.coneCos=Math.cos(k.angle),z.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),z.decay=k.decay,s.spot[C]=z;const V=k.shadow;if(k.map&&(s.spotLightMap[F]=k.map,F++,V.updateMatrices(k),k.castShadow&&B++),s.spotLightMatrix[C]=V.matrix,k.castShadow){const at=i.get(k);at.shadowIntensity=V.intensity,at.shadowBias=V.bias,at.shadowNormalBias=V.normalBias,at.shadowRadius=V.radius,at.shadowMapSize=V.mapSize,s.spotShadow[C]=at,s.spotShadowMap[C]=ct,U++}C++}else if(k.isRectAreaLight){const z=t.get(k);z.color.copy(Q).multiplyScalar(tt),z.halfWidth.set(k.width*.5,0,0),z.halfHeight.set(0,k.height*.5,0),s.rectArea[y]=z,y++}else if(k.isPointLight){const z=t.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity),z.distance=k.distance,z.decay=k.decay,k.castShadow){const V=k.shadow,at=i.get(k);at.shadowIntensity=V.intensity,at.shadowBias=V.bias,at.shadowNormalBias=V.normalBias,at.shadowRadius=V.radius,at.shadowMapSize=V.mapSize,at.shadowCameraNear=V.camera.near,at.shadowCameraFar=V.camera.far,s.pointShadow[E]=at,s.pointShadowMap[E]=ct,s.pointShadowMatrix[E]=k.shadow.matrix,O++}s.point[E]=z,E++}else if(k.isHemisphereLight){const z=t.get(k);z.skyColor.copy(k.color).multiplyScalar(tt),z.groundColor.copy(k.groundColor).multiplyScalar(tt),s.hemi[x]=z,x++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ht.LTC_FLOAT_1,s.rectAreaLTC2=Ht.LTC_FLOAT_2):(s.rectAreaLTC1=Ht.LTC_HALF_1,s.rectAreaLTC2=Ht.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=S;const q=s.hash;(q.directionalLength!==b||q.pointLength!==E||q.spotLength!==C||q.rectAreaLength!==y||q.hemiLength!==x||q.numDirectionalShadows!==P||q.numPointShadows!==O||q.numSpotShadows!==U||q.numSpotMaps!==F||q.numLightProbes!==I)&&(s.directional.length=b,s.spot.length=C,s.rectArea.length=y,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=U+F-B,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=I,q.directionalLength=b,q.pointLength=E,q.spotLength=C,q.rectAreaLength=y,q.hemiLength=x,q.numDirectionalShadows=P,q.numPointShadows=O,q.numSpotShadows=U,q.numSpotMaps=F,q.numLightProbes=I,s.version=WT++)}function m(p,v){let g=0,S=0,b=0,E=0,C=0;const y=v.matrixWorldInverse;for(let x=0,P=p.length;x<P;x++){const O=p[x];if(O.isDirectionalLight){const U=s.directional[g];U.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),g++}else if(O.isSpotLight){const U=s.spot[b];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),b++}else if(O.isRectAreaLight){const U=s.rectArea[E];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(y),h.identity(),u.copy(O.matrixWorld),u.premultiply(y),h.extractRotation(u),U.halfWidth.set(O.width*.5,0,0),U.halfHeight.set(0,O.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),E++}else if(O.isPointLight){const U=s.point[S];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(y),S++}else if(O.isHemisphereLight){const U=s.hemi[C];U.direction.setFromMatrixPosition(O.matrixWorld),U.direction.transformDirection(y),C++}}}return{setup:d,setupView:m,state:s}}function W_(o){const t=new YT(o),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function u(v){i.push(v)}function h(v){s.push(v)}function d(){t.setup(i)}function m(v){t.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function ZT(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new W_(o),t.set(l,[d])):u>=h.length?(d=new W_(o),h.push(d)):d=h[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const KT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QT=`uniform sampler2D shadow_pass;
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
}`,JT=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],$T=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],q_=new rn,Zo=new K,jh=new K;function tA(o,t,i){let s=new tp;const l=new de,u=new de,h=new cn,d=new fM,m=new hM,p={},v=i.maxTextureSize,g={[hs]:ti,[ti]:hs,[Wi]:Wi},S=new ta({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:KT,fragmentShader:QT}),b=S.clone();b.defines.HORIZONTAL_PASS=1;const E=new di;E.setAttribute("position",new Qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new he(E,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vc;let x=this.type;this.render=function(B,I,q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;B.type===QS&&(oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=Vc);const T=o.getRenderTarget(),D=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),Q=o.state;Q.setBlending(Aa),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const tt=x!==this.type;tt&&I.traverse(function(ft){ft.material&&(Array.isArray(ft.material)?ft.material.forEach(ct=>ct.needsUpdate=!0):ft.material.needsUpdate=!0)});for(let ft=0,ct=B.length;ft<ct;ft++){const z=B[ft],V=z.shadow;if(V===void 0){oe("WebGLShadowMap:",z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;l.copy(V.mapSize);const at=V.getFrameExtents();if(l.multiply(at),u.copy(V.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/at.x),l.x=u.x*at.x,V.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/at.y),l.y=u.y*at.y,V.mapSize.y=u.y)),V.map===null||tt===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Ko){if(z.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Ki(l.x,l.y,{format:jr,type:Ca,minFilter:Gn,magFilter:Gn,generateMipmaps:!1}),V.map.texture.name=z.name+".shadowMap",V.map.depthTexture=new nl(l.x,l.y,qi),V.map.depthTexture.name=z.name+".shadowMapDepth",V.map.depthTexture.format=wa,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Pn,V.map.depthTexture.magFilter=Pn}else{z.isPointLight?(V.map=new bx(l.x),V.map.depthTexture=new lM(l.x,Ji)):(V.map=new Ki(l.x,l.y),V.map.depthTexture=new nl(l.x,l.y,Ji)),V.map.depthTexture.name=z.name+".shadowMap",V.map.depthTexture.format=wa;const Tt=o.state.buffers.depth.getReversed();this.type===Vc?(V.map.depthTexture.compareFunction=Tt?Kd:Zd,V.map.depthTexture.minFilter=Gn,V.map.depthTexture.magFilter=Gn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Pn,V.map.depthTexture.magFilter=Pn)}V.camera.updateProjectionMatrix()}const At=V.map.isWebGLCubeRenderTarget?6:1;for(let Tt=0;Tt<At;Tt++){if(V.map.isWebGLCubeRenderTarget)o.setRenderTarget(V.map,Tt),o.clear();else{Tt===0&&(o.setRenderTarget(V.map),o.clear());const L=V.getViewport(Tt);h.set(u.x*L.x,u.y*L.y,u.x*L.z,u.y*L.w),Q.viewport(h)}if(z.isPointLight){const L=V.camera,it=V.matrix,St=z.distance||L.far;St!==L.far&&(L.far=St,L.updateProjectionMatrix()),Zo.setFromMatrixPosition(z.matrixWorld),L.position.copy(Zo),jh.copy(L.position),jh.add(JT[Tt]),L.up.copy($T[Tt]),L.lookAt(jh),L.updateMatrixWorld(),it.makeTranslation(-Zo.x,-Zo.y,-Zo.z),q_.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),V._frustum.setFromProjectionMatrix(q_,L.coordinateSystem,L.reversedDepth)}else V.updateMatrices(z);s=V.getFrustum(),U(I,q,V.camera,z,this.type)}V.isPointLightShadow!==!0&&this.type===Ko&&P(V,q),V.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(T,D,k)};function P(B,I){const q=t.update(C);S.defines.VSM_SAMPLES!==B.blurSamples&&(S.defines.VSM_SAMPLES=B.blurSamples,b.defines.VSM_SAMPLES=B.blurSamples,S.needsUpdate=!0,b.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Ki(l.x,l.y,{format:jr,type:Ca})),S.uniforms.shadow_pass.value=B.map.depthTexture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(I,null,q,S,C,null),b.uniforms.shadow_pass.value=B.mapPass.texture,b.uniforms.resolution.value=B.mapSize,b.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(I,null,q,b,C,null)}function O(B,I,q,T){let D=null;const k=q.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(k!==void 0)D=k;else if(D=q.isPointLight===!0?m:d,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const Q=D.uuid,tt=I.uuid;let ft=p[Q];ft===void 0&&(ft={},p[Q]=ft);let ct=ft[tt];ct===void 0&&(ct=D.clone(),ft[tt]=ct,I.addEventListener("dispose",F)),D=ct}if(D.visible=I.visible,D.wireframe=I.wireframe,T===Ko?D.side=I.shadowSide!==null?I.shadowSide:I.side:D.side=I.shadowSide!==null?I.shadowSide:g[I.side],D.alphaMap=I.alphaMap,D.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,D.map=I.map,D.clipShadows=I.clipShadows,D.clippingPlanes=I.clippingPlanes,D.clipIntersection=I.clipIntersection,D.displacementMap=I.displacementMap,D.displacementScale=I.displacementScale,D.displacementBias=I.displacementBias,D.wireframeLinewidth=I.wireframeLinewidth,D.linewidth=I.linewidth,q.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const Q=o.properties.get(D);Q.light=q}return D}function U(B,I,q,T,D){if(B.visible===!1)return;if(B.layers.test(I.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&D===Ko)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,B.matrixWorld);const tt=t.update(B),ft=B.material;if(Array.isArray(ft)){const ct=tt.groups;for(let z=0,V=ct.length;z<V;z++){const at=ct[z],At=ft[at.materialIndex];if(At&&At.visible){const Tt=O(B,At,T,D);B.onBeforeShadow(o,B,I,q,tt,Tt,at),o.renderBufferDirect(q,null,tt,Tt,B,at),B.onAfterShadow(o,B,I,q,tt,Tt,at)}}}else if(ft.visible){const ct=O(B,ft,T,D);B.onBeforeShadow(o,B,I,q,tt,ct,null),o.renderBufferDirect(q,null,tt,ct,B,null),B.onAfterShadow(o,B,I,q,tt,ct,null)}}const Q=B.children;for(let tt=0,ft=Q.length;tt<ft;tt++)U(Q[tt],I,q,T,D)}function F(B){B.target.removeEventListener("dispose",F);for(const q in p){const T=p[q],D=B.target.uuid;D in T&&(T[D].dispose(),delete T[D])}}}const eA={[Zh]:Kh,[Qh]:td,[Jh]:ed,[kr]:$h,[Kh]:Zh,[td]:Qh,[ed]:Jh,[$h]:kr};function nA(o,t){function i(){let X=!1;const Ot=new cn;let vt=null;const Rt=new cn(0,0,0,0);return{setMask:function(dt){vt!==dt&&!X&&(o.colorMask(dt,dt,dt,dt),vt=dt)},setLocked:function(dt){X=dt},setClear:function(dt,pt,Dt,$t,Me){Me===!0&&(dt*=$t,pt*=$t,Dt*=$t),Ot.set(dt,pt,Dt,$t),Rt.equals(Ot)===!1&&(o.clearColor(dt,pt,Dt,$t),Rt.copy(Ot))},reset:function(){X=!1,vt=null,Rt.set(-1,0,0,0)}}}function s(){let X=!1,Ot=!1,vt=null,Rt=null,dt=null;return{setReversed:function(pt){if(Ot!==pt){const Dt=t.get("EXT_clip_control");pt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),Ot=pt;const $t=dt;dt=null,this.setClear($t)}},getReversed:function(){return Ot},setTest:function(pt){pt?ht(o.DEPTH_TEST):zt(o.DEPTH_TEST)},setMask:function(pt){vt!==pt&&!X&&(o.depthMask(pt),vt=pt)},setFunc:function(pt){if(Ot&&(pt=eA[pt]),Rt!==pt){switch(pt){case Zh:o.depthFunc(o.NEVER);break;case Kh:o.depthFunc(o.ALWAYS);break;case Qh:o.depthFunc(o.LESS);break;case kr:o.depthFunc(o.LEQUAL);break;case Jh:o.depthFunc(o.EQUAL);break;case $h:o.depthFunc(o.GEQUAL);break;case td:o.depthFunc(o.GREATER);break;case ed:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Rt=pt}},setLocked:function(pt){X=pt},setClear:function(pt){dt!==pt&&(Ot&&(pt=1-pt),o.clearDepth(pt),dt=pt)},reset:function(){X=!1,vt=null,Rt=null,dt=null,Ot=!1}}}function l(){let X=!1,Ot=null,vt=null,Rt=null,dt=null,pt=null,Dt=null,$t=null,Me=null;return{setTest:function(le){X||(le?ht(o.STENCIL_TEST):zt(o.STENCIL_TEST))},setMask:function(le){Ot!==le&&!X&&(o.stencilMask(le),Ot=le)},setFunc:function(le,tn,kn){(vt!==le||Rt!==tn||dt!==kn)&&(o.stencilFunc(le,tn,kn),vt=le,Rt=tn,dt=kn)},setOp:function(le,tn,kn){(pt!==le||Dt!==tn||$t!==kn)&&(o.stencilOp(le,tn,kn),pt=le,Dt=tn,$t=kn)},setLocked:function(le){X=le},setClear:function(le){Me!==le&&(o.clearStencil(le),Me=le)},reset:function(){X=!1,Ot=null,vt=null,Rt=null,dt=null,pt=null,Dt=null,$t=null,Me=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let v={},g={},S=new WeakMap,b=[],E=null,C=!1,y=null,x=null,P=null,O=null,U=null,F=null,B=null,I=new Ne(0,0,0),q=0,T=!1,D=null,k=null,Q=null,tt=null,ft=null;const ct=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,V=0;const at=o.getParameter(o.VERSION);at.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(at)[1]),z=V>=1):at.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),z=V>=2);let At=null,Tt={};const L=o.getParameter(o.SCISSOR_BOX),it=o.getParameter(o.VIEWPORT),St=new cn().fromArray(L),Lt=new cn().fromArray(it);function Gt(X,Ot,vt,Rt){const dt=new Uint8Array(4),pt=o.createTexture();o.bindTexture(X,pt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Dt=0;Dt<vt;Dt++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Ot,0,o.RGBA,1,1,Rt,0,o.RGBA,o.UNSIGNED_BYTE,dt):o.texImage2D(Ot+Dt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,dt);return pt}const $={};$[o.TEXTURE_2D]=Gt(o.TEXTURE_2D,o.TEXTURE_2D,1),$[o.TEXTURE_CUBE_MAP]=Gt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[o.TEXTURE_2D_ARRAY]=Gt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),$[o.TEXTURE_3D]=Gt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ht(o.DEPTH_TEST),h.setFunc(kr),Nt(!1),re(Wg),ht(o.CULL_FACE),ve(Aa);function ht(X){v[X]!==!0&&(o.enable(X),v[X]=!0)}function zt(X){v[X]!==!1&&(o.disable(X),v[X]=!1)}function Ct(X,Ot){return g[X]!==Ot?(o.bindFramebuffer(X,Ot),g[X]=Ot,X===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ot),X===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ot),!0):!1}function It(X,Ot){let vt=b,Rt=!1;if(X){vt=S.get(Ot),vt===void 0&&(vt=[],S.set(Ot,vt));const dt=X.textures;if(vt.length!==dt.length||vt[0]!==o.COLOR_ATTACHMENT0){for(let pt=0,Dt=dt.length;pt<Dt;pt++)vt[pt]=o.COLOR_ATTACHMENT0+pt;vt.length=dt.length,Rt=!0}}else vt[0]!==o.BACK&&(vt[0]=o.BACK,Rt=!0);Rt&&o.drawBuffers(vt)}function fe(X){return E!==X?(o.useProgram(X),E=X,!0):!1}const Ye={[Is]:o.FUNC_ADD,[$S]:o.FUNC_SUBTRACT,[ty]:o.FUNC_REVERSE_SUBTRACT};Ye[ey]=o.MIN,Ye[ny]=o.MAX;const Se={[iy]:o.ZERO,[ay]:o.ONE,[sy]:o.SRC_COLOR,[qh]:o.SRC_ALPHA,[fy]:o.SRC_ALPHA_SATURATE,[cy]:o.DST_COLOR,[oy]:o.DST_ALPHA,[ry]:o.ONE_MINUS_SRC_COLOR,[Yh]:o.ONE_MINUS_SRC_ALPHA,[uy]:o.ONE_MINUS_DST_COLOR,[ly]:o.ONE_MINUS_DST_ALPHA,[hy]:o.CONSTANT_COLOR,[dy]:o.ONE_MINUS_CONSTANT_COLOR,[py]:o.CONSTANT_ALPHA,[my]:o.ONE_MINUS_CONSTANT_ALPHA};function ve(X,Ot,vt,Rt,dt,pt,Dt,$t,Me,le){if(X===Aa){C===!0&&(zt(o.BLEND),C=!1);return}if(C===!1&&(ht(o.BLEND),C=!0),X!==JS){if(X!==y||le!==T){if((x!==Is||U!==Is)&&(o.blendEquation(o.FUNC_ADD),x=Is,U=Is),le)switch(X){case Gr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case qg:o.blendFunc(o.ONE,o.ONE);break;case Yg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Zg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Oe("WebGLState: Invalid blending: ",X);break}else switch(X){case Gr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case qg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Yg:Oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zg:Oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Oe("WebGLState: Invalid blending: ",X);break}P=null,O=null,F=null,B=null,I.set(0,0,0),q=0,y=X,T=le}return}dt=dt||Ot,pt=pt||vt,Dt=Dt||Rt,(Ot!==x||dt!==U)&&(o.blendEquationSeparate(Ye[Ot],Ye[dt]),x=Ot,U=dt),(vt!==P||Rt!==O||pt!==F||Dt!==B)&&(o.blendFuncSeparate(Se[vt],Se[Rt],Se[pt],Se[Dt]),P=vt,O=Rt,F=pt,B=Dt),($t.equals(I)===!1||Me!==q)&&(o.blendColor($t.r,$t.g,$t.b,Me),I.copy($t),q=Me),y=X,T=!1}function kt(X,Ot){X.side===Wi?zt(o.CULL_FACE):ht(o.CULL_FACE);let vt=X.side===ti;Ot&&(vt=!vt),Nt(vt),X.blending===Gr&&X.transparent===!1?ve(Aa):ve(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),u.setMask(X.colorWrite);const Rt=X.stencilWrite;d.setTest(Rt),Rt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),_e(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ht(o.SAMPLE_ALPHA_TO_COVERAGE):zt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(X){D!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),D=X)}function re(X){X!==ZS?(ht(o.CULL_FACE),X!==k&&(X===Wg?o.cullFace(o.BACK):X===KS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):zt(o.CULL_FACE),k=X}function H(X){X!==Q&&(z&&o.lineWidth(X),Q=X)}function _e(X,Ot,vt){X?(ht(o.POLYGON_OFFSET_FILL),(tt!==Ot||ft!==vt)&&(o.polygonOffset(Ot,vt),tt=Ot,ft=vt)):zt(o.POLYGON_OFFSET_FILL)}function ye(X){X?ht(o.SCISSOR_TEST):zt(o.SCISSOR_TEST)}function Ce(X){X===void 0&&(X=o.TEXTURE0+ct-1),At!==X&&(o.activeTexture(X),At=X)}function jt(X,Ot,vt){vt===void 0&&(At===null?vt=o.TEXTURE0+ct-1:vt=At);let Rt=Tt[vt];Rt===void 0&&(Rt={type:void 0,texture:void 0},Tt[vt]=Rt),(Rt.type!==X||Rt.texture!==Ot)&&(At!==vt&&(o.activeTexture(vt),At=vt),o.bindTexture(X,Ot||$[X]),Rt.type=X,Rt.texture=Ot)}function N(){const X=Tt[At];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function M(){try{o.compressedTexImage2D(...arguments)}catch(X){Oe("WebGLState:",X)}}function W(){try{o.compressedTexImage3D(...arguments)}catch(X){Oe("WebGLState:",X)}}function _t(){try{o.texSubImage2D(...arguments)}catch(X){Oe("WebGLState:",X)}}function Mt(){try{o.texSubImage3D(...arguments)}catch(X){Oe("WebGLState:",X)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(X){Oe("WebGLState:",X)}}function Zt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){Oe("WebGLState:",X)}}function Pt(){try{o.texStorage2D(...arguments)}catch(X){Oe("WebGLState:",X)}}function Wt(){try{o.texStorage3D(...arguments)}catch(X){Oe("WebGLState:",X)}}function ie(){try{o.texImage2D(...arguments)}catch(X){Oe("WebGLState:",X)}}function wt(){try{o.texImage3D(...arguments)}catch(X){Oe("WebGLState:",X)}}function Ut(X){St.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),St.copy(X))}function gt(X){Lt.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),Lt.copy(X))}function bt(X,Ot){let vt=p.get(Ot);vt===void 0&&(vt=new WeakMap,p.set(Ot,vt));let Rt=vt.get(X);Rt===void 0&&(Rt=o.getUniformBlockIndex(Ot,X.name),vt.set(X,Rt))}function Et(X,Ot){const Rt=p.get(Ot).get(X);m.get(Ot)!==Rt&&(o.uniformBlockBinding(Ot,Rt,X.__bindingPointIndex),m.set(Ot,Rt))}function Xt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},At=null,Tt={},g={},S=new WeakMap,b=[],E=null,C=!1,y=null,x=null,P=null,O=null,U=null,F=null,B=null,I=new Ne(0,0,0),q=0,T=!1,D=null,k=null,Q=null,tt=null,ft=null,St.set(0,0,o.canvas.width,o.canvas.height),Lt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:ht,disable:zt,bindFramebuffer:Ct,drawBuffers:It,useProgram:fe,setBlending:ve,setMaterial:kt,setFlipSided:Nt,setCullFace:re,setLineWidth:H,setPolygonOffset:_e,setScissorTest:ye,activeTexture:Ce,bindTexture:jt,unbindTexture:N,compressedTexImage2D:M,compressedTexImage3D:W,texImage2D:ie,texImage3D:wt,updateUBOMapping:bt,uniformBlockBinding:Et,texStorage2D:Pt,texStorage3D:Wt,texSubImage2D:_t,texSubImage3D:Mt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Zt,scissor:Ut,viewport:gt,reset:Xt}}function iA(o,t,i,s,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new de,v=new WeakMap;let g;const S=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,M){return b?new OffscreenCanvas(N,M):Kc("canvas")}function C(N,M,W){let _t=1;const Mt=jt(N);if((Mt.width>W||Mt.height>W)&&(_t=W/Math.max(Mt.width,Mt.height)),_t<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ut=Math.floor(_t*Mt.width),Zt=Math.floor(_t*Mt.height);g===void 0&&(g=E(ut,Zt));const Pt=M?E(ut,Zt):g;return Pt.width=ut,Pt.height=Zt,Pt.getContext("2d").drawImage(N,0,0,ut,Zt),oe("WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+ut+"x"+Zt+")."),Pt}else return"data"in N&&oe("WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),N;return N}function y(N){return N.generateMipmaps}function x(N){o.generateMipmap(N)}function P(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(N,M,W,_t,Mt=!1){if(N!==null){if(o[N]!==void 0)return o[N];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ut=M;if(M===o.RED&&(W===o.FLOAT&&(ut=o.R32F),W===o.HALF_FLOAT&&(ut=o.R16F),W===o.UNSIGNED_BYTE&&(ut=o.R8)),M===o.RED_INTEGER&&(W===o.UNSIGNED_BYTE&&(ut=o.R8UI),W===o.UNSIGNED_SHORT&&(ut=o.R16UI),W===o.UNSIGNED_INT&&(ut=o.R32UI),W===o.BYTE&&(ut=o.R8I),W===o.SHORT&&(ut=o.R16I),W===o.INT&&(ut=o.R32I)),M===o.RG&&(W===o.FLOAT&&(ut=o.RG32F),W===o.HALF_FLOAT&&(ut=o.RG16F),W===o.UNSIGNED_BYTE&&(ut=o.RG8)),M===o.RG_INTEGER&&(W===o.UNSIGNED_BYTE&&(ut=o.RG8UI),W===o.UNSIGNED_SHORT&&(ut=o.RG16UI),W===o.UNSIGNED_INT&&(ut=o.RG32UI),W===o.BYTE&&(ut=o.RG8I),W===o.SHORT&&(ut=o.RG16I),W===o.INT&&(ut=o.RG32I)),M===o.RGB_INTEGER&&(W===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),W===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),W===o.UNSIGNED_INT&&(ut=o.RGB32UI),W===o.BYTE&&(ut=o.RGB8I),W===o.SHORT&&(ut=o.RGB16I),W===o.INT&&(ut=o.RGB32I)),M===o.RGBA_INTEGER&&(W===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),W===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),W===o.UNSIGNED_INT&&(ut=o.RGBA32UI),W===o.BYTE&&(ut=o.RGBA8I),W===o.SHORT&&(ut=o.RGBA16I),W===o.INT&&(ut=o.RGBA32I)),M===o.RGB&&(W===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),W===o.UNSIGNED_INT_10F_11F_11F_REV&&(ut=o.R11F_G11F_B10F)),M===o.RGBA){const Zt=Mt?Yc:De.getTransfer(_t);W===o.FLOAT&&(ut=o.RGBA32F),W===o.HALF_FLOAT&&(ut=o.RGBA16F),W===o.UNSIGNED_BYTE&&(ut=Zt===Ve?o.SRGB8_ALPHA8:o.RGBA8),W===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),W===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function U(N,M){let W;return N?M===null||M===Ji||M===tl?W=o.DEPTH24_STENCIL8:M===qi?W=o.DEPTH32F_STENCIL8:M===$o&&(W=o.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ji||M===tl?W=o.DEPTH_COMPONENT24:M===qi?W=o.DEPTH_COMPONENT32F:M===$o&&(W=o.DEPTH_COMPONENT16),W}function F(N,M){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==Pn&&N.minFilter!==Gn?Math.log2(Math.max(M.width,M.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?M.mipmaps.length:1}function B(N){const M=N.target;M.removeEventListener("dispose",B),q(M),M.isVideoTexture&&v.delete(M)}function I(N){const M=N.target;M.removeEventListener("dispose",I),D(M)}function q(N){const M=s.get(N);if(M.__webglInit===void 0)return;const W=N.source,_t=S.get(W);if(_t){const Mt=_t[M.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&T(N),Object.keys(_t).length===0&&S.delete(W)}s.remove(N)}function T(N){const M=s.get(N);o.deleteTexture(M.__webglTexture);const W=N.source,_t=S.get(W);delete _t[M.__cacheKey],h.memory.textures--}function D(N){const M=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(M.__webglFramebuffer[_t]))for(let Mt=0;Mt<M.__webglFramebuffer[_t].length;Mt++)o.deleteFramebuffer(M.__webglFramebuffer[_t][Mt]);else o.deleteFramebuffer(M.__webglFramebuffer[_t]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[_t])}else{if(Array.isArray(M.__webglFramebuffer))for(let _t=0;_t<M.__webglFramebuffer.length;_t++)o.deleteFramebuffer(M.__webglFramebuffer[_t]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let _t=0;_t<M.__webglColorRenderbuffer.length;_t++)M.__webglColorRenderbuffer[_t]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[_t]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=N.textures;for(let _t=0,Mt=W.length;_t<Mt;_t++){const ut=s.get(W[_t]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),h.memory.textures--),s.remove(W[_t])}s.remove(N)}let k=0;function Q(){k=0}function tt(){const N=k;return N>=l.maxTextures&&oe("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),k+=1,N}function ft(N){const M=[];return M.push(N.wrapS),M.push(N.wrapT),M.push(N.wrapR||0),M.push(N.magFilter),M.push(N.minFilter),M.push(N.anisotropy),M.push(N.internalFormat),M.push(N.format),M.push(N.type),M.push(N.generateMipmaps),M.push(N.premultiplyAlpha),M.push(N.flipY),M.push(N.unpackAlignment),M.push(N.colorSpace),M.join()}function ct(N,M){const W=s.get(N);if(N.isVideoTexture&&ye(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&W.__version!==N.version){const _t=N.image;if(_t===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{$(W,N,M);return}}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,W.__webglTexture,o.TEXTURE0+M)}function z(N,M){const W=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){$(W,N,M);return}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,W.__webglTexture,o.TEXTURE0+M)}function V(N,M){const W=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){$(W,N,M);return}i.bindTexture(o.TEXTURE_3D,W.__webglTexture,o.TEXTURE0+M)}function at(N,M){const W=s.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&W.__version!==N.version){ht(W,N,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture,o.TEXTURE0+M)}const At={[ad]:o.REPEAT,[Ta]:o.CLAMP_TO_EDGE,[sd]:o.MIRRORED_REPEAT},Tt={[Pn]:o.NEAREST,[xy]:o.NEAREST_MIPMAP_NEAREST,[mc]:o.NEAREST_MIPMAP_LINEAR,[Gn]:o.LINEAR,[dh]:o.LINEAR_MIPMAP_NEAREST,[Bs]:o.LINEAR_MIPMAP_LINEAR},L={[yy]:o.NEVER,[Ay]:o.ALWAYS,[My]:o.LESS,[Zd]:o.LEQUAL,[by]:o.EQUAL,[Kd]:o.GEQUAL,[Ey]:o.GREATER,[Ty]:o.NOTEQUAL};function it(N,M){if(M.type===qi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Gn||M.magFilter===dh||M.magFilter===mc||M.magFilter===Bs||M.minFilter===Gn||M.minFilter===dh||M.minFilter===mc||M.minFilter===Bs)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,At[M.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,At[M.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,At[M.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,Tt[M.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,Tt[M.minFilter]),M.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,L[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Pn||M.minFilter!==mc&&M.minFilter!==Bs||M.type===qi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");o.texParameterf(N,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function St(N,M){let W=!1;N.__webglInit===void 0&&(N.__webglInit=!0,M.addEventListener("dispose",B));const _t=M.source;let Mt=S.get(_t);Mt===void 0&&(Mt={},S.set(_t,Mt));const ut=ft(M);if(ut!==N.__cacheKey){Mt[ut]===void 0&&(Mt[ut]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,W=!0),Mt[ut].usedTimes++;const Zt=Mt[N.__cacheKey];Zt!==void 0&&(Mt[N.__cacheKey].usedTimes--,Zt.usedTimes===0&&T(M)),N.__cacheKey=ut,N.__webglTexture=Mt[ut].texture}return W}function Lt(N,M,W){return Math.floor(Math.floor(N/W)/M)}function Gt(N,M,W,_t){const ut=N.updateRanges;if(ut.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,W,_t,M.data);else{ut.sort((wt,Ut)=>wt.start-Ut.start);let Zt=0;for(let wt=1;wt<ut.length;wt++){const Ut=ut[Zt],gt=ut[wt],bt=Ut.start+Ut.count,Et=Lt(gt.start,M.width,4),Xt=Lt(Ut.start,M.width,4);gt.start<=bt+1&&Et===Xt&&Lt(gt.start+gt.count-1,M.width,4)===Et?Ut.count=Math.max(Ut.count,gt.start+gt.count-Ut.start):(++Zt,ut[Zt]=gt)}ut.length=Zt+1;const Pt=o.getParameter(o.UNPACK_ROW_LENGTH),Wt=o.getParameter(o.UNPACK_SKIP_PIXELS),ie=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let wt=0,Ut=ut.length;wt<Ut;wt++){const gt=ut[wt],bt=Math.floor(gt.start/4),Et=Math.ceil(gt.count/4),Xt=bt%M.width,X=Math.floor(bt/M.width),Ot=Et,vt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xt),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,Xt,X,Ot,vt,W,_t,M.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Pt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Wt),o.pixelStorei(o.UNPACK_SKIP_ROWS,ie)}}function $(N,M,W){let _t=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(_t=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(_t=o.TEXTURE_3D);const Mt=St(N,M),ut=M.source;i.bindTexture(_t,N.__webglTexture,o.TEXTURE0+W);const Zt=s.get(ut);if(ut.version!==Zt.__version||Mt===!0){i.activeTexture(o.TEXTURE0+W);const Pt=De.getPrimaries(De.workingColorSpace),Wt=M.colorSpace===us?null:De.getPrimaries(M.colorSpace),ie=M.colorSpace===us||Pt===Wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let wt=C(M.image,!1,l.maxTextureSize);wt=Ce(M,wt);const Ut=u.convert(M.format,M.colorSpace),gt=u.convert(M.type);let bt=O(M.internalFormat,Ut,gt,M.colorSpace,M.isVideoTexture);it(_t,M);let Et;const Xt=M.mipmaps,X=M.isVideoTexture!==!0,Ot=Zt.__version===void 0||Mt===!0,vt=ut.dataReady,Rt=F(M,wt);if(M.isDepthTexture)bt=U(M.format===Hs,M.type),Ot&&(X?i.texStorage2D(o.TEXTURE_2D,1,bt,wt.width,wt.height):i.texImage2D(o.TEXTURE_2D,0,bt,wt.width,wt.height,0,Ut,gt,null));else if(M.isDataTexture)if(Xt.length>0){X&&Ot&&i.texStorage2D(o.TEXTURE_2D,Rt,bt,Xt[0].width,Xt[0].height);for(let dt=0,pt=Xt.length;dt<pt;dt++)Et=Xt[dt],X?vt&&i.texSubImage2D(o.TEXTURE_2D,dt,0,0,Et.width,Et.height,Ut,gt,Et.data):i.texImage2D(o.TEXTURE_2D,dt,bt,Et.width,Et.height,0,Ut,gt,Et.data);M.generateMipmaps=!1}else X?(Ot&&i.texStorage2D(o.TEXTURE_2D,Rt,bt,wt.width,wt.height),vt&&Gt(M,wt,Ut,gt)):i.texImage2D(o.TEXTURE_2D,0,bt,wt.width,wt.height,0,Ut,gt,wt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){X&&Ot&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,bt,Xt[0].width,Xt[0].height,wt.depth);for(let dt=0,pt=Xt.length;dt<pt;dt++)if(Et=Xt[dt],M.format!==Fi)if(Ut!==null)if(X){if(vt)if(M.layerUpdates.size>0){const Dt=E_(Et.width,Et.height,M.format,M.type);for(const $t of M.layerUpdates){const Me=Et.data.subarray($t*Dt/Et.data.BYTES_PER_ELEMENT,($t+1)*Dt/Et.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,dt,0,0,$t,Et.width,Et.height,1,Ut,Me)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,dt,0,0,0,Et.width,Et.height,wt.depth,Ut,Et.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,dt,bt,Et.width,Et.height,wt.depth,0,Et.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?vt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,dt,0,0,0,Et.width,Et.height,wt.depth,Ut,gt,Et.data):i.texImage3D(o.TEXTURE_2D_ARRAY,dt,bt,Et.width,Et.height,wt.depth,0,Ut,gt,Et.data)}else{X&&Ot&&i.texStorage2D(o.TEXTURE_2D,Rt,bt,Xt[0].width,Xt[0].height);for(let dt=0,pt=Xt.length;dt<pt;dt++)Et=Xt[dt],M.format!==Fi?Ut!==null?X?vt&&i.compressedTexSubImage2D(o.TEXTURE_2D,dt,0,0,Et.width,Et.height,Ut,Et.data):i.compressedTexImage2D(o.TEXTURE_2D,dt,bt,Et.width,Et.height,0,Et.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?vt&&i.texSubImage2D(o.TEXTURE_2D,dt,0,0,Et.width,Et.height,Ut,gt,Et.data):i.texImage2D(o.TEXTURE_2D,dt,bt,Et.width,Et.height,0,Ut,gt,Et.data)}else if(M.isDataArrayTexture)if(X){if(Ot&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,bt,wt.width,wt.height,wt.depth),vt)if(M.layerUpdates.size>0){const dt=E_(wt.width,wt.height,M.format,M.type);for(const pt of M.layerUpdates){const Dt=wt.data.subarray(pt*dt/wt.data.BYTES_PER_ELEMENT,(pt+1)*dt/wt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,pt,wt.width,wt.height,1,Ut,gt,Dt)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,Ut,gt,wt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,bt,wt.width,wt.height,wt.depth,0,Ut,gt,wt.data);else if(M.isData3DTexture)X?(Ot&&i.texStorage3D(o.TEXTURE_3D,Rt,bt,wt.width,wt.height,wt.depth),vt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,Ut,gt,wt.data)):i.texImage3D(o.TEXTURE_3D,0,bt,wt.width,wt.height,wt.depth,0,Ut,gt,wt.data);else if(M.isFramebufferTexture){if(Ot)if(X)i.texStorage2D(o.TEXTURE_2D,Rt,bt,wt.width,wt.height);else{let dt=wt.width,pt=wt.height;for(let Dt=0;Dt<Rt;Dt++)i.texImage2D(o.TEXTURE_2D,Dt,bt,dt,pt,0,Ut,gt,null),dt>>=1,pt>>=1}}else if(Xt.length>0){if(X&&Ot){const dt=jt(Xt[0]);i.texStorage2D(o.TEXTURE_2D,Rt,bt,dt.width,dt.height)}for(let dt=0,pt=Xt.length;dt<pt;dt++)Et=Xt[dt],X?vt&&i.texSubImage2D(o.TEXTURE_2D,dt,0,0,Ut,gt,Et):i.texImage2D(o.TEXTURE_2D,dt,bt,Ut,gt,Et);M.generateMipmaps=!1}else if(X){if(Ot){const dt=jt(wt);i.texStorage2D(o.TEXTURE_2D,Rt,bt,dt.width,dt.height)}vt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ut,gt,wt)}else i.texImage2D(o.TEXTURE_2D,0,bt,Ut,gt,wt);y(M)&&x(_t),Zt.__version=ut.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function ht(N,M,W){if(M.image.length!==6)return;const _t=St(N,M),Mt=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+W);const ut=s.get(Mt);if(Mt.version!==ut.__version||_t===!0){i.activeTexture(o.TEXTURE0+W);const Zt=De.getPrimaries(De.workingColorSpace),Pt=M.colorSpace===us?null:De.getPrimaries(M.colorSpace),Wt=M.colorSpace===us||Zt===Pt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const ie=M.isCompressedTexture||M.image[0].isCompressedTexture,wt=M.image[0]&&M.image[0].isDataTexture,Ut=[];for(let pt=0;pt<6;pt++)!ie&&!wt?Ut[pt]=C(M.image[pt],!0,l.maxCubemapSize):Ut[pt]=wt?M.image[pt].image:M.image[pt],Ut[pt]=Ce(M,Ut[pt]);const gt=Ut[0],bt=u.convert(M.format,M.colorSpace),Et=u.convert(M.type),Xt=O(M.internalFormat,bt,Et,M.colorSpace),X=M.isVideoTexture!==!0,Ot=ut.__version===void 0||_t===!0,vt=Mt.dataReady;let Rt=F(M,gt);it(o.TEXTURE_CUBE_MAP,M);let dt;if(ie){X&&Ot&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,Xt,gt.width,gt.height);for(let pt=0;pt<6;pt++){dt=Ut[pt].mipmaps;for(let Dt=0;Dt<dt.length;Dt++){const $t=dt[Dt];M.format!==Fi?bt!==null?X?vt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Dt,0,0,$t.width,$t.height,bt,$t.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Dt,Xt,$t.width,$t.height,0,$t.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?vt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Dt,0,0,$t.width,$t.height,bt,Et,$t.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Dt,Xt,$t.width,$t.height,0,bt,Et,$t.data)}}}else{if(dt=M.mipmaps,X&&Ot){dt.length>0&&Rt++;const pt=jt(Ut[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,Xt,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(wt){X?vt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Ut[pt].width,Ut[pt].height,bt,Et,Ut[pt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,Xt,Ut[pt].width,Ut[pt].height,0,bt,Et,Ut[pt].data);for(let Dt=0;Dt<dt.length;Dt++){const Me=dt[Dt].image[pt].image;X?vt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Dt+1,0,0,Me.width,Me.height,bt,Et,Me.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Dt+1,Xt,Me.width,Me.height,0,bt,Et,Me.data)}}else{X?vt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,bt,Et,Ut[pt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,Xt,bt,Et,Ut[pt]);for(let Dt=0;Dt<dt.length;Dt++){const $t=dt[Dt];X?vt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Dt+1,0,0,bt,Et,$t.image[pt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Dt+1,Xt,bt,Et,$t.image[pt])}}}y(M)&&x(o.TEXTURE_CUBE_MAP),ut.__version=Mt.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function zt(N,M,W,_t,Mt,ut){const Zt=u.convert(W.format,W.colorSpace),Pt=u.convert(W.type),Wt=O(W.internalFormat,Zt,Pt,W.colorSpace),ie=s.get(M),wt=s.get(W);if(wt.__renderTarget=M,!ie.__hasExternalTextures){const Ut=Math.max(1,M.width>>ut),gt=Math.max(1,M.height>>ut);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?i.texImage3D(Mt,ut,Wt,Ut,gt,M.depth,0,Zt,Pt,null):i.texImage2D(Mt,ut,Wt,Ut,gt,0,Zt,Pt,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),_e(M)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_t,Mt,wt.__webglTexture,0,H(M)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_t,Mt,wt.__webglTexture,ut),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ct(N,M,W){if(o.bindRenderbuffer(o.RENDERBUFFER,N),M.depthBuffer){const _t=M.depthTexture,Mt=_t&&_t.isDepthTexture?_t.type:null,ut=U(M.stencilBuffer,Mt),Zt=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;_e(M)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,H(M),ut,M.width,M.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,H(M),ut,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,ut,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Zt,o.RENDERBUFFER,N)}else{const _t=M.textures;for(let Mt=0;Mt<_t.length;Mt++){const ut=_t[Mt],Zt=u.convert(ut.format,ut.colorSpace),Pt=u.convert(ut.type),Wt=O(ut.internalFormat,Zt,Pt,ut.colorSpace);_e(M)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,H(M),Wt,M.width,M.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,H(M),Wt,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Wt,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function It(N,M,W){const _t=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Mt=s.get(M.depthTexture);if(Mt.__renderTarget=M,(!Mt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),_t){if(Mt.__webglInit===void 0&&(Mt.__webglInit=!0,M.depthTexture.addEventListener("dispose",B)),Mt.__webglTexture===void 0){Mt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,Mt.__webglTexture),it(o.TEXTURE_CUBE_MAP,M.depthTexture);const ie=u.convert(M.depthTexture.format),wt=u.convert(M.depthTexture.type);let Ut;M.depthTexture.format===wa?Ut=o.DEPTH_COMPONENT24:M.depthTexture.format===Hs&&(Ut=o.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Ut,M.width,M.height,0,ie,wt,null)}}else ct(M.depthTexture,0);const ut=Mt.__webglTexture,Zt=H(M),Pt=_t?o.TEXTURE_CUBE_MAP_POSITIVE_X+W:o.TEXTURE_2D,Wt=M.depthTexture.format===Hs?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(M.depthTexture.format===wa)_e(M)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Wt,Pt,ut,0,Zt):o.framebufferTexture2D(o.FRAMEBUFFER,Wt,Pt,ut,0);else if(M.depthTexture.format===Hs)_e(M)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Wt,Pt,ut,0,Zt):o.framebufferTexture2D(o.FRAMEBUFFER,Wt,Pt,ut,0);else throw new Error("Unknown depthTexture format")}function fe(N){const M=s.get(N),W=N.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==N.depthTexture){const _t=N.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),_t){const Mt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,_t.removeEventListener("dispose",Mt)};_t.addEventListener("dispose",Mt),M.__depthDisposeCallback=Mt}M.__boundDepthTexture=_t}if(N.depthTexture&&!M.__autoAllocateDepthBuffer)if(W)for(let _t=0;_t<6;_t++)It(M.__webglFramebuffer[_t],N,_t);else{const _t=N.texture.mipmaps;_t&&_t.length>0?It(M.__webglFramebuffer[0],N,0):It(M.__webglFramebuffer,N,0)}else if(W){M.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[_t]),M.__webglDepthbuffer[_t]===void 0)M.__webglDepthbuffer[_t]=o.createRenderbuffer(),Ct(M.__webglDepthbuffer[_t],N,!1);else{const Mt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=M.__webglDepthbuffer[_t];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,ut)}}else{const _t=N.texture.mipmaps;if(_t&&_t.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),Ct(M.__webglDepthbuffer,N,!1);else{const Mt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,ut)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ye(N,M,W){const _t=s.get(N);M!==void 0&&zt(_t.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),W!==void 0&&fe(N)}function Se(N){const M=N.texture,W=s.get(N),_t=s.get(M);N.addEventListener("dispose",I);const Mt=N.textures,ut=N.isWebGLCubeRenderTarget===!0,Zt=Mt.length>1;if(Zt||(_t.__webglTexture===void 0&&(_t.__webglTexture=o.createTexture()),_t.__version=M.version,h.memory.textures++),ut){W.__webglFramebuffer=[];for(let Pt=0;Pt<6;Pt++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[Pt]=[];for(let Wt=0;Wt<M.mipmaps.length;Wt++)W.__webglFramebuffer[Pt][Wt]=o.createFramebuffer()}else W.__webglFramebuffer[Pt]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let Pt=0;Pt<M.mipmaps.length;Pt++)W.__webglFramebuffer[Pt]=o.createFramebuffer()}else W.__webglFramebuffer=o.createFramebuffer();if(Zt)for(let Pt=0,Wt=Mt.length;Pt<Wt;Pt++){const ie=s.get(Mt[Pt]);ie.__webglTexture===void 0&&(ie.__webglTexture=o.createTexture(),h.memory.textures++)}if(N.samples>0&&_e(N)===!1){W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Pt=0;Pt<Mt.length;Pt++){const Wt=Mt[Pt];W.__webglColorRenderbuffer[Pt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,W.__webglColorRenderbuffer[Pt]);const ie=u.convert(Wt.format,Wt.colorSpace),wt=u.convert(Wt.type),Ut=O(Wt.internalFormat,ie,wt,Wt.colorSpace,N.isXRRenderTarget===!0),gt=H(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,gt,Ut,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,W.__webglColorRenderbuffer[Pt])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),Ct(W.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){i.bindTexture(o.TEXTURE_CUBE_MAP,_t.__webglTexture),it(o.TEXTURE_CUBE_MAP,M);for(let Pt=0;Pt<6;Pt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Wt=0;Wt<M.mipmaps.length;Wt++)zt(W.__webglFramebuffer[Pt][Wt],N,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Wt);else zt(W.__webglFramebuffer[Pt],N,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0);y(M)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let Pt=0,Wt=Mt.length;Pt<Wt;Pt++){const ie=Mt[Pt],wt=s.get(ie);let Ut=o.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ut=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,wt.__webglTexture),it(Ut,ie),zt(W.__webglFramebuffer,N,ie,o.COLOR_ATTACHMENT0+Pt,Ut,0),y(ie)&&x(Ut)}i.unbindTexture()}else{let Pt=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Pt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Pt,_t.__webglTexture),it(Pt,M),M.mipmaps&&M.mipmaps.length>0)for(let Wt=0;Wt<M.mipmaps.length;Wt++)zt(W.__webglFramebuffer[Wt],N,M,o.COLOR_ATTACHMENT0,Pt,Wt);else zt(W.__webglFramebuffer,N,M,o.COLOR_ATTACHMENT0,Pt,0);y(M)&&x(Pt),i.unbindTexture()}N.depthBuffer&&fe(N)}function ve(N){const M=N.textures;for(let W=0,_t=M.length;W<_t;W++){const Mt=M[W];if(y(Mt)){const ut=P(N),Zt=s.get(Mt).__webglTexture;i.bindTexture(ut,Zt),x(ut),i.unbindTexture()}}}const kt=[],Nt=[];function re(N){if(N.samples>0){if(_e(N)===!1){const M=N.textures,W=N.width,_t=N.height;let Mt=o.COLOR_BUFFER_BIT;const ut=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Zt=s.get(N),Pt=M.length>1;if(Pt)for(let ie=0;ie<M.length;ie++)i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ie,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ie,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const Wt=N.texture.mipmaps;Wt&&Wt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let ie=0;ie<M.length;ie++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),Pt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[ie]);const wt=s.get(M[ie]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,wt,0)}o.blitFramebuffer(0,0,W,_t,0,0,W,_t,Mt,o.NEAREST),m===!0&&(kt.length=0,Nt.length=0,kt.push(o.COLOR_ATTACHMENT0+ie),N.depthBuffer&&N.resolveDepthBuffer===!1&&(kt.push(ut),Nt.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Nt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,kt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Pt)for(let ie=0;ie<M.length;ie++){i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ie,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[ie]);const wt=s.get(M[ie]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ie,o.TEXTURE_2D,wt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const M=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function H(N){return Math.min(l.maxSamples,N.samples)}function _e(N){const M=s.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ye(N){const M=h.render.frame;v.get(N)!==M&&(v.set(N,M),N.update())}function Ce(N,M){const W=N.colorSpace,_t=N.format,Mt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||W!==Wr&&W!==us&&(De.getTransfer(W)===Ve?(_t!==Fi||Mt!==hi)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Oe("WebGLTextures: Unsupported texture color space:",W)),M}function jt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=tt,this.resetTextureUnits=Q,this.setTexture2D=ct,this.setTexture2DArray=z,this.setTexture3D=V,this.setTextureCube=at,this.rebindTextures=Ye,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=zt,this.useMultisampledRTT=_e,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function aA(o,t){function i(s,l=us){let u;const h=De.getTransfer(l);if(s===hi)return o.UNSIGNED_BYTE;if(s===Xd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===jd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===lx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===cx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===rx)return o.BYTE;if(s===ox)return o.SHORT;if(s===$o)return o.UNSIGNED_SHORT;if(s===kd)return o.INT;if(s===Ji)return o.UNSIGNED_INT;if(s===qi)return o.FLOAT;if(s===Ca)return o.HALF_FLOAT;if(s===ux)return o.ALPHA;if(s===fx)return o.RGB;if(s===Fi)return o.RGBA;if(s===wa)return o.DEPTH_COMPONENT;if(s===Hs)return o.DEPTH_STENCIL;if(s===hx)return o.RED;if(s===Wd)return o.RED_INTEGER;if(s===jr)return o.RG;if(s===qd)return o.RG_INTEGER;if(s===Yd)return o.RGBA_INTEGER;if(s===kc||s===Xc||s===jc||s===Wc)if(h===Ve)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===kc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Xc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===jc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Wc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===kc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Xc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===jc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Wc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===rd||s===od||s===ld||s===cd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===rd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===od)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ld)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===cd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ud||s===fd||s===hd||s===dd||s===pd||s===md||s===gd)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===ud||s===fd)return h===Ve?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===hd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===dd)return u.COMPRESSED_R11_EAC;if(s===pd)return u.COMPRESSED_SIGNED_R11_EAC;if(s===md)return u.COMPRESSED_RG11_EAC;if(s===gd)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===_d||s===xd||s===vd||s===Sd||s===yd||s===Md||s===bd||s===Ed||s===Td||s===Ad||s===Rd||s===Cd||s===wd||s===Dd)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===_d)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===xd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===vd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Sd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===yd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Md)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===bd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ed)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Td)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ad)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Rd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Cd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===wd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Dd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Nd||s===Ud||s===Ld)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===Nd)return h===Ve?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ud)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ld)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Od||s===Pd||s===zd||s===Id)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===Od)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Pd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===zd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Id)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===tl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const sA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rA=`
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

}`;class oA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Tx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ta({vertexShader:sA,fragmentShader:rA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new he(new Ti(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lA extends ks{constructor(t,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,v=null,g=null,S=null,b=null,E=null;const C=typeof XRWebGLBinding<"u",y=new oA,x={},P=i.getContextAttributes();let O=null,U=null;const F=[],B=[],I=new de;let q=null;const T=new Ri;T.viewport=new cn;const D=new Ri;D.viewport=new cn;const k=[T,D],Q=new _M;let tt=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ht=F[$];return ht===void 0&&(ht=new Ph,F[$]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function($){let ht=F[$];return ht===void 0&&(ht=new Ph,F[$]=ht),ht.getGripSpace()},this.getHand=function($){let ht=F[$];return ht===void 0&&(ht=new Ph,F[$]=ht),ht.getHandSpace()};function ct($){const ht=B.indexOf($.inputSource);if(ht===-1)return;const zt=F[ht];zt!==void 0&&(zt.update($.inputSource,$.frame,p||h),zt.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){l.removeEventListener("select",ct),l.removeEventListener("selectstart",ct),l.removeEventListener("selectend",ct),l.removeEventListener("squeeze",ct),l.removeEventListener("squeezestart",ct),l.removeEventListener("squeezeend",ct),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",V);for(let $=0;$<F.length;$++){const ht=B[$];ht!==null&&(B[$]=null,F[$].disconnect(ht))}tt=null,ft=null,y.reset();for(const $ in x)delete x[$];t.setRenderTarget(O),b=null,S=null,g=null,l=null,U=null,Gt.stop(),s.isPresenting=!1,t.setPixelRatio(q),t.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){u=$,s.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){d=$,s.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function($){p=$},this.getBaseLayer=function(){return S!==null?S:b},this.getBinding=function(){return g===null&&C&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(O=t.getRenderTarget(),l.addEventListener("select",ct),l.addEventListener("selectstart",ct),l.addEventListener("selectend",ct),l.addEventListener("squeeze",ct),l.addEventListener("squeezestart",ct),l.addEventListener("squeezeend",ct),l.addEventListener("end",z),l.addEventListener("inputsourceschange",V),P.xrCompatible!==!0&&await i.makeXRCompatible(),q=t.getPixelRatio(),t.getSize(I),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let zt=null,Ct=null,It=null;P.depth&&(It=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,zt=P.stencil?Hs:wa,Ct=P.stencil?tl:Ji);const fe={colorFormat:i.RGBA8,depthFormat:It,scaleFactor:u};g=this.getBinding(),S=g.createProjectionLayer(fe),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),U=new Ki(S.textureWidth,S.textureHeight,{format:Fi,type:hi,depthTexture:new nl(S.textureWidth,S.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,zt),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const zt={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:u};b=new XRWebGLLayer(l,i,zt),l.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),U=new Ki(b.framebufferWidth,b.framebufferHeight,{format:Fi,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Gt.setContext(l),Gt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function V($){for(let ht=0;ht<$.removed.length;ht++){const zt=$.removed[ht],Ct=B.indexOf(zt);Ct>=0&&(B[Ct]=null,F[Ct].disconnect(zt))}for(let ht=0;ht<$.added.length;ht++){const zt=$.added[ht];let Ct=B.indexOf(zt);if(Ct===-1){for(let fe=0;fe<F.length;fe++)if(fe>=B.length){B.push(zt),Ct=fe;break}else if(B[fe]===null){B[fe]=zt,Ct=fe;break}if(Ct===-1)break}const It=F[Ct];It&&It.connect(zt)}}const at=new K,At=new K;function Tt($,ht,zt){at.setFromMatrixPosition(ht.matrixWorld),At.setFromMatrixPosition(zt.matrixWorld);const Ct=at.distanceTo(At),It=ht.projectionMatrix.elements,fe=zt.projectionMatrix.elements,Ye=It[14]/(It[10]-1),Se=It[14]/(It[10]+1),ve=(It[9]+1)/It[5],kt=(It[9]-1)/It[5],Nt=(It[8]-1)/It[0],re=(fe[8]+1)/fe[0],H=Ye*Nt,_e=Ye*re,ye=Ct/(-Nt+re),Ce=ye*-Nt;if(ht.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ce),$.translateZ(ye),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),It[10]===-1)$.projectionMatrix.copy(ht.projectionMatrix),$.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const jt=Ye+ye,N=Se+ye,M=H-Ce,W=_e+(Ct-Ce),_t=ve*Se/N*jt,Mt=kt*Se/N*jt;$.projectionMatrix.makePerspective(M,W,_t,Mt,jt,N),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function L($,ht){ht===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ht.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let ht=$.near,zt=$.far;y.texture!==null&&(y.depthNear>0&&(ht=y.depthNear),y.depthFar>0&&(zt=y.depthFar)),Q.near=D.near=T.near=ht,Q.far=D.far=T.far=zt,(tt!==Q.near||ft!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),tt=Q.near,ft=Q.far),Q.layers.mask=$.layers.mask|6,T.layers.mask=Q.layers.mask&3,D.layers.mask=Q.layers.mask&5;const Ct=$.parent,It=Q.cameras;L(Q,Ct);for(let fe=0;fe<It.length;fe++)L(It[fe],Ct);It.length===2?Tt(Q,T,D):Q.projectionMatrix.copy(T.projectionMatrix),it($,Q,Ct)};function it($,ht,zt){zt===null?$.matrix.copy(ht.matrixWorld):($.matrix.copy(zt.matrixWorld),$.matrix.invert(),$.matrix.multiply(ht.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ht.projectionMatrix),$.projectionMatrixInverse.copy(ht.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Fd*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(S===null&&b===null))return m},this.setFoveation=function($){m=$,S!==null&&(S.fixedFoveation=$),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Q)},this.getCameraTexture=function($){return x[$]};let St=null;function Lt($,ht){if(v=ht.getViewerPose(p||h),E=ht,v!==null){const zt=v.views;b!==null&&(t.setRenderTargetFramebuffer(U,b.framebuffer),t.setRenderTarget(U));let Ct=!1;zt.length!==Q.cameras.length&&(Q.cameras.length=0,Ct=!0);for(let Se=0;Se<zt.length;Se++){const ve=zt[Se];let kt=null;if(b!==null)kt=b.getViewport(ve);else{const re=g.getViewSubImage(S,ve);kt=re.viewport,Se===0&&(t.setRenderTargetTextures(U,re.colorTexture,re.depthStencilTexture),t.setRenderTarget(U))}let Nt=k[Se];Nt===void 0&&(Nt=new Ri,Nt.layers.enable(Se),Nt.viewport=new cn,k[Se]=Nt),Nt.matrix.fromArray(ve.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(ve.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(kt.x,kt.y,kt.width,kt.height),Se===0&&(Q.matrix.copy(Nt.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Ct===!0&&Q.cameras.push(Nt)}const It=l.enabledFeatures;if(It&&It.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){g=s.getBinding();const Se=g.getDepthInformation(zt[0]);Se&&Se.isValid&&Se.texture&&y.init(Se,l.renderState)}if(It&&It.includes("camera-access")&&C){t.state.unbindTexture(),g=s.getBinding();for(let Se=0;Se<zt.length;Se++){const ve=zt[Se].camera;if(ve){let kt=x[ve];kt||(kt=new Tx,x[ve]=kt);const Nt=g.getCameraImage(ve);kt.sourceTexture=Nt}}}}for(let zt=0;zt<F.length;zt++){const Ct=B[zt],It=F[zt];Ct!==null&&It!==void 0&&It.update(Ct,ht,p||h)}St&&St($,ht),ht.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ht}),E=null}const Gt=new Rx;Gt.setAnimationLoop(Lt),this.setAnimationLoop=function($){St=$},this.dispose=function(){}}}const zs=new $i,cA=new rn;function uA(o,t){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,Sx(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,P,O,U){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(y,x):x.isMeshToonMaterial?(u(y,x),g(y,x)):x.isMeshPhongMaterial?(u(y,x),v(y,x)):x.isMeshStandardMaterial?(u(y,x),S(y,x),x.isMeshPhysicalMaterial&&b(y,x,U)):x.isMeshMatcapMaterial?(u(y,x),E(y,x)):x.isMeshDepthMaterial?u(y,x):x.isMeshDistanceMaterial?(u(y,x),C(y,x)):x.isMeshNormalMaterial?u(y,x):x.isLineBasicMaterial?(h(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?m(y,x,P,O):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===ti&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===ti&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const P=t.get(x),O=P.envMap,U=P.envMapRotation;O&&(y.envMap.value=O,zs.copy(U),zs.x*=-1,zs.y*=-1,zs.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),y.envMapRotation.value.setFromMatrix4(cA.makeRotationFromEuler(zs)),y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,P,O){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*P,y.scale.value=O*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function g(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function S(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function b(y,x,P){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ti&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function C(y,x){const P=t.get(x).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function fA(o,t,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,O){const U=O.program;s.uniformBlockBinding(P,U)}function p(P,O){let U=l[P.id];U===void 0&&(E(P),U=v(P),l[P.id]=U,P.addEventListener("dispose",y));const F=O.program;s.updateUBOMapping(P,F);const B=t.render.frame;u[P.id]!==B&&(S(P),u[P.id]=B)}function v(P){const O=g();P.__bindingPointIndex=O;const U=o.createBuffer(),F=P.__size,B=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,F,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,U),U}function g(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return Oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(P){const O=l[P.id],U=P.uniforms,F=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let B=0,I=U.length;B<I;B++){const q=Array.isArray(U[B])?U[B]:[U[B]];for(let T=0,D=q.length;T<D;T++){const k=q[T];if(b(k,B,T,F)===!0){const Q=k.__offset,tt=Array.isArray(k.value)?k.value:[k.value];let ft=0;for(let ct=0;ct<tt.length;ct++){const z=tt[ct],V=C(z);typeof z=="number"||typeof z=="boolean"?(k.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,Q+ft,k.__data)):z.isMatrix3?(k.__data[0]=z.elements[0],k.__data[1]=z.elements[1],k.__data[2]=z.elements[2],k.__data[3]=0,k.__data[4]=z.elements[3],k.__data[5]=z.elements[4],k.__data[6]=z.elements[5],k.__data[7]=0,k.__data[8]=z.elements[6],k.__data[9]=z.elements[7],k.__data[10]=z.elements[8],k.__data[11]=0):(z.toArray(k.__data,ft),ft+=V.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Q,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function b(P,O,U,F){const B=P.value,I=O+"_"+U;if(F[I]===void 0)return typeof B=="number"||typeof B=="boolean"?F[I]=B:F[I]=B.clone(),!0;{const q=F[I];if(typeof B=="number"||typeof B=="boolean"){if(q!==B)return F[I]=B,!0}else if(q.equals(B)===!1)return q.copy(B),!0}return!1}function E(P){const O=P.uniforms;let U=0;const F=16;for(let I=0,q=O.length;I<q;I++){const T=Array.isArray(O[I])?O[I]:[O[I]];for(let D=0,k=T.length;D<k;D++){const Q=T[D],tt=Array.isArray(Q.value)?Q.value:[Q.value];for(let ft=0,ct=tt.length;ft<ct;ft++){const z=tt[ft],V=C(z),at=U%F,At=at%V.boundary,Tt=at+At;U+=At,Tt!==0&&F-Tt<V.storage&&(U+=F-Tt),Q.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=U,U+=V.storage}}}const B=U%F;return B>0&&(U+=F-B),P.__size=U,P.__cache={},this}function C(P){const O={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(O.boundary=4,O.storage=4):P.isVector2?(O.boundary=8,O.storage=8):P.isVector3||P.isColor?(O.boundary=16,O.storage=12):P.isVector4?(O.boundary=16,O.storage=16):P.isMatrix3?(O.boundary=48,O.storage=48):P.isMatrix4?(O.boundary=64,O.storage=64):P.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):oe("WebGLRenderer: Unsupported uniform value type.",P),O}function y(P){const O=P.target;O.removeEventListener("dispose",y);const U=h.indexOf(O.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function x(){for(const P in l)o.deleteBuffer(l[P]);h=[],l={},u={}}return{bind:m,update:p,dispose:x}}const hA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xi=null;function dA(){return Xi===null&&(Xi=new eM(hA,16,16,jr,Ca),Xi.name="DFG_LUT",Xi.minFilter=Gn,Xi.magFilter=Gn,Xi.wrapS=Ta,Xi.wrapT=Ta,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}class pA{constructor(t={}){const{canvas:i=Ry(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1,outputBufferType:b=hi}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=h;const C=b,y=new Set([Yd,qd,Wd]),x=new Set([hi,Ji,$o,tl,Xd,jd]),P=new Uint32Array(4),O=new Int32Array(4);let U=null,F=null;const B=[],I=[];let q=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let D=!1;this._outputColorSpace=Ai;let k=0,Q=0,tt=null,ft=-1,ct=null;const z=new cn,V=new cn;let at=null;const At=new Ne(0);let Tt=0,L=i.width,it=i.height,St=1,Lt=null,Gt=null;const $=new cn(0,0,L,it),ht=new cn(0,0,L,it);let zt=!1;const Ct=new tp;let It=!1,fe=!1;const Ye=new rn,Se=new K,ve=new cn,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function re(){return tt===null?St:1}let H=s;function _e(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Vd}`),i.addEventListener("webglcontextlost",$t,!1),i.addEventListener("webglcontextrestored",Me,!1),i.addEventListener("webglcontextcreationerror",le,!1),H===null){const Y="webgl2";if(H=_e(Y,R),H===null)throw _e(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Oe("WebGLRenderer: "+R.message),R}let ye,Ce,jt,N,M,W,_t,Mt,ut,Zt,Pt,Wt,ie,wt,Ut,gt,bt,Et,Xt,X,Ot,vt,Rt,dt;function pt(){ye=new d1(H),ye.init(),vt=new aA(H,ye),Ce=new a1(H,ye,t,vt),jt=new nA(H,ye),Ce.reversedDepthBuffer&&S&&jt.buffers.depth.setReversed(!0),N=new g1(H),M=new GT,W=new iA(H,ye,jt,M,Ce,vt,N),_t=new r1(T),Mt=new h1(T),ut=new SM(H),Rt=new n1(H,ut),Zt=new p1(H,ut,N,Rt),Pt=new x1(H,Zt,ut,N),Xt=new _1(H,Ce,W),gt=new s1(M),Wt=new HT(T,_t,Mt,ye,Ce,Rt,gt),ie=new uA(T,M),wt=new kT,Ut=new ZT(ye),Et=new e1(T,_t,Mt,jt,Pt,E,m),bt=new tA(T,Pt,Ce),dt=new fA(H,N,Ce,jt),X=new i1(H,ye,N),Ot=new m1(H,ye,N),N.programs=Wt.programs,T.capabilities=Ce,T.extensions=ye,T.properties=M,T.renderLists=wt,T.shadowMap=bt,T.state=jt,T.info=N}pt(),C!==hi&&(q=new S1(C,i.width,i.height,l,u));const Dt=new lA(T,H);this.xr=Dt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=ye.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ye.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return St},this.setPixelRatio=function(R){R!==void 0&&(St=R,this.setSize(L,it,!1))},this.getSize=function(R){return R.set(L,it)},this.setSize=function(R,Y,ot=!0){if(Dt.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}L=R,it=Y,i.width=Math.floor(R*St),i.height=Math.floor(Y*St),ot===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),q!==null&&q.setSize(i.width,i.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(L*St,it*St).floor()},this.setDrawingBufferSize=function(R,Y,ot){L=R,it=Y,St=ot,i.width=Math.floor(R*ot),i.height=Math.floor(Y*ot),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(C===hi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}q.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(z)},this.getViewport=function(R){return R.copy($)},this.setViewport=function(R,Y,ot,st){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,Y,ot,st),jt.viewport(z.copy($).multiplyScalar(St).round())},this.getScissor=function(R){return R.copy(ht)},this.setScissor=function(R,Y,ot,st){R.isVector4?ht.set(R.x,R.y,R.z,R.w):ht.set(R,Y,ot,st),jt.scissor(V.copy(ht).multiplyScalar(St).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(R){jt.setScissorTest(zt=R)},this.setOpaqueSort=function(R){Lt=R},this.setTransparentSort=function(R){Gt=R},this.getClearColor=function(R){return R.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor(...arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,ot=!0){let st=0;if(R){let J=!1;if(tt!==null){const Ft=tt.texture.format;J=y.has(Ft)}if(J){const Ft=tt.texture.type,Vt=x.has(Ft),Bt=Et.getClearColor(),qt=Et.getClearAlpha(),Kt=Bt.r,ne=Bt.g,Qt=Bt.b;Vt?(P[0]=Kt,P[1]=ne,P[2]=Qt,P[3]=qt,H.clearBufferuiv(H.COLOR,0,P)):(O[0]=Kt,O[1]=ne,O[2]=Qt,O[3]=qt,H.clearBufferiv(H.COLOR,0,O))}else st|=H.COLOR_BUFFER_BIT}Y&&(st|=H.DEPTH_BUFFER_BIT),ot&&(st|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",$t,!1),i.removeEventListener("webglcontextrestored",Me,!1),i.removeEventListener("webglcontextcreationerror",le,!1),Et.dispose(),wt.dispose(),Ut.dispose(),M.dispose(),_t.dispose(),Mt.dispose(),Pt.dispose(),Rt.dispose(),dt.dispose(),Wt.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",pi),Dt.removeEventListener("sessionend",wi),ni.stop()};function $t(R){R.preventDefault(),t_("WebGLRenderer: Context Lost."),D=!0}function Me(){t_("WebGLRenderer: Context Restored."),D=!1;const R=N.autoReset,Y=bt.enabled,ot=bt.autoUpdate,st=bt.needsUpdate,J=bt.type;pt(),N.autoReset=R,bt.enabled=Y,bt.autoUpdate=ot,bt.needsUpdate=st,bt.type=J}function le(R){Oe("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function tn(R){const Y=R.target;Y.removeEventListener("dispose",tn),kn(Y)}function kn(R){Da(R),M.remove(R)}function Da(R){const Y=M.get(R).programs;Y!==void 0&&(Y.forEach(function(ot){Wt.releaseProgram(ot)}),R.isShaderMaterial&&Wt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,ot,st,J,Ft){Y===null&&(Y=kt);const Vt=J.isMesh&&J.matrixWorld.determinant()<0,Bt=ds(R,Y,ot,st,J);jt.setMaterial(st,Vt);let qt=ot.index,Kt=1;if(st.wireframe===!0){if(qt=Zt.getWireframeAttribute(ot),qt===void 0)return;Kt=2}const ne=ot.drawRange,Qt=ot.attributes.position;let ae=ne.start*Kt,Pe=(ne.start+ne.count)*Kt;Ft!==null&&(ae=Math.max(ae,Ft.start*Kt),Pe=Math.min(Pe,(Ft.start+Ft.count)*Kt)),qt!==null?(ae=Math.max(ae,0),Pe=Math.min(Pe,qt.count)):Qt!=null&&(ae=Math.max(ae,0),Pe=Math.min(Pe,Qt.count));const nn=Pe-ae;if(nn<0||nn===1/0)return;Rt.setup(J,st,Bt,ot,qt);let Ke,Fe=X;if(qt!==null&&(Ke=ut.get(qt),Fe=Ot,Fe.setIndex(Ke)),J.isMesh)st.wireframe===!0?(jt.setLineWidth(st.wireframeLinewidth*re()),Fe.setMode(H.LINES)):Fe.setMode(H.TRIANGLES);else if(J.isLine){let te=st.linewidth;te===void 0&&(te=1),jt.setLineWidth(te*re()),J.isLineSegments?Fe.setMode(H.LINES):J.isLineLoop?Fe.setMode(H.LINE_LOOP):Fe.setMode(H.LINE_STRIP)}else J.isPoints?Fe.setMode(H.POINTS):J.isSprite&&Fe.setMode(H.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)el("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Fe.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))Fe.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const te=J._multiDrawStarts,ze=J._multiDrawCounts,ce=J._multiDrawCount,An=qt?ut.get(qt).bytesPerElement:1,na=M.get(st).currentProgram.getUniforms();for(let Rn=0;Rn<ce;Rn++)na.setValue(H,"_gl_DrawID",Rn),Fe.render(te[Rn]/An,ze[Rn])}else if(J.isInstancedMesh)Fe.renderInstances(ae,nn,J.count);else if(ot.isInstancedBufferGeometry){const te=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,ze=Math.min(ot.instanceCount,te);Fe.renderInstances(ae,nn,ze)}else Fe.render(ae,nn)};function ei(R,Y,ot){R.transparent===!0&&R.side===Wi&&R.forceSinglePass===!1?(R.side=ti,R.needsUpdate=!0,js(R,Y,ot),R.side=hs,R.needsUpdate=!0,js(R,Y,ot),R.side=Wi):js(R,Y,ot)}this.compile=function(R,Y,ot=null){ot===null&&(ot=R),F=Ut.get(ot),F.init(Y),I.push(F),ot.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(F.pushLight(J),J.castShadow&&F.pushShadow(J))}),R!==ot&&R.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(F.pushLight(J),J.castShadow&&F.pushShadow(J))}),F.setupLights();const st=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ft=J.material;if(Ft)if(Array.isArray(Ft))for(let Vt=0;Vt<Ft.length;Vt++){const Bt=Ft[Vt];ei(Bt,ot,J),st.add(Bt)}else ei(Ft,ot,J),st.add(Ft)}),F=I.pop(),st},this.compileAsync=function(R,Y,ot=null){const st=this.compile(R,Y,ot);return new Promise(J=>{function Ft(){if(st.forEach(function(Vt){M.get(Vt).currentProgram.isReady()&&st.delete(Vt)}),st.size===0){J(R);return}setTimeout(Ft,10)}ye.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let Bi=null;function ea(R){Bi&&Bi(R)}function pi(){ni.stop()}function wi(){ni.start()}const ni=new Rx;ni.setAnimationLoop(ea),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(R){Bi=R,Dt.setAnimationLoop(R),R===null?ni.stop():ni.start()},Dt.addEventListener("sessionstart",pi),Dt.addEventListener("sessionend",wi),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){Oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const ot=Dt.enabled===!0&&Dt.isPresenting===!0,st=q!==null&&(tt===null||ot)&&q.begin(T,tt);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(q===null||q.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(Y),Y=Dt.getCamera()),R.isScene===!0&&R.onBeforeRender(T,R,Y,tt),F=Ut.get(R,I.length),F.init(Y),I.push(F),Ye.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ct.setFromProjectionMatrix(Ye,Yi,Y.reversedDepth),fe=this.localClippingEnabled,It=gt.init(this.clippingPlanes,fe),U=wt.get(R,B.length),U.init(),B.push(U),Dt.enabled===!0&&Dt.isPresenting===!0){const Vt=T.xr.getDepthSensingMesh();Vt!==null&&In(Vt,Y,-1/0,T.sortObjects)}In(R,Y,0,T.sortObjects),U.finish(),T.sortObjects===!0&&U.sort(Lt,Gt),Nt=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,Nt&&Et.addToRenderList(U,R),this.info.render.frame++,It===!0&&gt.beginShadows();const J=F.state.shadowsArray;if(bt.render(J,R,Y),It===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(st&&q.hasRenderPass())===!1){const Vt=U.opaque,Bt=U.transmissive;if(F.setupLights(),Y.isArrayCamera){const qt=Y.cameras;if(Bt.length>0)for(let Kt=0,ne=qt.length;Kt<ne;Kt++){const Qt=qt[Kt];Tn(Vt,Bt,R,Qt)}Nt&&Et.render(R);for(let Kt=0,ne=qt.length;Kt<ne;Kt++){const Qt=qt[Kt];en(U,R,Qt,Qt.viewport)}}else Bt.length>0&&Tn(Vt,Bt,R,Y),Nt&&Et.render(R),en(U,R,Y)}tt!==null&&Q===0&&(W.updateMultisampleRenderTarget(tt),W.updateRenderTargetMipmap(tt)),st&&q.end(T),R.isScene===!0&&R.onAfterRender(T,R,Y),Rt.resetDefaultState(),ft=-1,ct=null,I.pop(),I.length>0?(F=I[I.length-1],It===!0&&gt.setGlobalState(T.clippingPlanes,F.state.camera)):F=null,B.pop(),B.length>0?U=B[B.length-1]:U=null};function In(R,Y,ot,st){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)ot=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)F.pushLight(R),R.castShadow&&F.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ct.intersectsSprite(R)){st&&ve.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ye);const Vt=Pt.update(R),Bt=R.material;Bt.visible&&U.push(R,Vt,Bt,ot,ve.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ct.intersectsObject(R))){const Vt=Pt.update(R),Bt=R.material;if(st&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ve.copy(R.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),ve.copy(Vt.boundingSphere.center)),ve.applyMatrix4(R.matrixWorld).applyMatrix4(Ye)),Array.isArray(Bt)){const qt=Vt.groups;for(let Kt=0,ne=qt.length;Kt<ne;Kt++){const Qt=qt[Kt],ae=Bt[Qt.materialIndex];ae&&ae.visible&&U.push(R,Vt,ae,ot,ve.z,Qt)}}else Bt.visible&&U.push(R,Vt,Bt,ot,ve.z,null)}}const Ft=R.children;for(let Vt=0,Bt=Ft.length;Vt<Bt;Vt++)In(Ft[Vt],Y,ot,st)}function en(R,Y,ot,st){const{opaque:J,transmissive:Ft,transparent:Vt}=R;F.setupLightsView(ot),It===!0&&gt.setGlobalState(T.clippingPlanes,ot),st&&jt.viewport(z.copy(st)),J.length>0&&Di(J,Y,ot),Ft.length>0&&Di(Ft,Y,ot),Vt.length>0&&Di(Vt,Y,ot),jt.buffers.depth.setTest(!0),jt.buffers.depth.setMask(!0),jt.buffers.color.setMask(!0),jt.setPolygonOffset(!1)}function Tn(R,Y,ot,st){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[st.id]===void 0){const ae=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[st.id]=new Ki(1,1,{generateMipmaps:!0,type:ae?Ca:hi,minFilter:Bs,samples:Ce.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace})}const Ft=F.state.transmissionRenderTarget[st.id],Vt=st.viewport||z;Ft.setSize(Vt.z*T.transmissionResolutionScale,Vt.w*T.transmissionResolutionScale);const Bt=T.getRenderTarget(),qt=T.getActiveCubeFace(),Kt=T.getActiveMipmapLevel();T.setRenderTarget(Ft),T.getClearColor(At),Tt=T.getClearAlpha(),Tt<1&&T.setClearColor(16777215,.5),T.clear(),Nt&&Et.render(ot);const ne=T.toneMapping;T.toneMapping=Zi;const Qt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),F.setupLightsView(st),It===!0&&gt.setGlobalState(T.clippingPlanes,st),Di(R,ot,st),W.updateMultisampleRenderTarget(Ft),W.updateRenderTargetMipmap(Ft),ye.has("WEBGL_multisampled_render_to_texture")===!1){let ae=!1;for(let Pe=0,nn=Y.length;Pe<nn;Pe++){const Ke=Y[Pe],{object:Fe,geometry:te,material:ze,group:ce}=Ke;if(ze.side===Wi&&Fe.layers.test(st.layers)){const An=ze.side;ze.side=ti,ze.needsUpdate=!0,Xs(Fe,ot,st,te,ze,ce),ze.side=An,ze.needsUpdate=!0,ae=!0}}ae===!0&&(W.updateMultisampleRenderTarget(Ft),W.updateRenderTargetMipmap(Ft))}T.setRenderTarget(Bt,qt,Kt),T.setClearColor(At,Tt),Qt!==void 0&&(st.viewport=Qt),T.toneMapping=ne}function Di(R,Y,ot){const st=Y.isScene===!0?Y.overrideMaterial:null;for(let J=0,Ft=R.length;J<Ft;J++){const Vt=R[J],{object:Bt,geometry:qt,group:Kt}=Vt;let ne=Vt.material;ne.allowOverride===!0&&st!==null&&(ne=st),Bt.layers.test(ot.layers)&&Xs(Bt,Y,ot,qt,ne,Kt)}}function Xs(R,Y,ot,st,J,Ft){R.onBeforeRender(T,Y,ot,st,J,Ft),R.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(T,Y,ot,st,R,Ft),J.transparent===!0&&J.side===Wi&&J.forceSinglePass===!1?(J.side=ti,J.needsUpdate=!0,T.renderBufferDirect(ot,Y,st,J,R,Ft),J.side=hs,J.needsUpdate=!0,T.renderBufferDirect(ot,Y,st,J,R,Ft),J.side=Wi):T.renderBufferDirect(ot,Y,st,J,R,Ft),R.onAfterRender(T,Y,ot,st,J,Ft)}function js(R,Y,ot){Y.isScene!==!0&&(Y=kt);const st=M.get(R),J=F.state.lights,Ft=F.state.shadowsArray,Vt=J.state.version,Bt=Wt.getParameters(R,J.state,Ft,Y,ot),qt=Wt.getProgramCacheKey(Bt);let Kt=st.programs;st.environment=R.isMeshStandardMaterial?Y.environment:null,st.fog=Y.fog,st.envMap=(R.isMeshStandardMaterial?Mt:_t).get(R.envMap||st.environment),st.envMapRotation=st.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,Kt===void 0&&(R.addEventListener("dispose",tn),Kt=new Map,st.programs=Kt);let ne=Kt.get(qt);if(ne!==void 0){if(st.currentProgram===ne&&st.lightsStateVersion===Vt)return Kr(R,Bt),ne}else Bt.uniforms=Wt.getUniforms(R),R.onBeforeCompile(Bt,T),ne=Wt.acquireProgram(Bt,qt),Kt.set(qt,ne),st.uniforms=Bt.uniforms;const Qt=st.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qt.clippingPlanes=gt.uniform),Kr(R,Bt),st.needsLights=Na(R),st.lightsStateVersion=Vt,st.needsLights&&(Qt.ambientLightColor.value=J.state.ambient,Qt.lightProbe.value=J.state.probe,Qt.directionalLights.value=J.state.directional,Qt.directionalLightShadows.value=J.state.directionalShadow,Qt.spotLights.value=J.state.spot,Qt.spotLightShadows.value=J.state.spotShadow,Qt.rectAreaLights.value=J.state.rectArea,Qt.ltc_1.value=J.state.rectAreaLTC1,Qt.ltc_2.value=J.state.rectAreaLTC2,Qt.pointLights.value=J.state.point,Qt.pointLightShadows.value=J.state.pointShadow,Qt.hemisphereLights.value=J.state.hemi,Qt.directionalShadowMap.value=J.state.directionalShadowMap,Qt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Qt.spotShadowMap.value=J.state.spotShadowMap,Qt.spotLightMatrix.value=J.state.spotLightMatrix,Qt.spotLightMap.value=J.state.spotLightMap,Qt.pointShadowMap.value=J.state.pointShadowMap,Qt.pointShadowMatrix.value=J.state.pointShadowMatrix),st.currentProgram=ne,st.uniformsList=null,ne}function sl(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=qc.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Kr(R,Y){const ot=M.get(R);ot.outputColorSpace=Y.outputColorSpace,ot.batching=Y.batching,ot.batchingColor=Y.batchingColor,ot.instancing=Y.instancing,ot.instancingColor=Y.instancingColor,ot.instancingMorph=Y.instancingMorph,ot.skinning=Y.skinning,ot.morphTargets=Y.morphTargets,ot.morphNormals=Y.morphNormals,ot.morphColors=Y.morphColors,ot.morphTargetsCount=Y.morphTargetsCount,ot.numClippingPlanes=Y.numClippingPlanes,ot.numIntersection=Y.numClipIntersection,ot.vertexAlphas=Y.vertexAlphas,ot.vertexTangents=Y.vertexTangents,ot.toneMapping=Y.toneMapping}function ds(R,Y,ot,st,J){Y.isScene!==!0&&(Y=kt),W.resetTextureUnits();const Ft=Y.fog,Vt=st.isMeshStandardMaterial?Y.environment:null,Bt=tt===null?T.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Wr,qt=(st.isMeshStandardMaterial?Mt:_t).get(st.envMap||Vt),Kt=st.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,ne=!!ot.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Qt=!!ot.morphAttributes.position,ae=!!ot.morphAttributes.normal,Pe=!!ot.morphAttributes.color;let nn=Zi;st.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(nn=T.toneMapping);const Ke=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Fe=Ke!==void 0?Ke.length:0,te=M.get(st),ze=F.state.lights;if(It===!0&&(fe===!0||R!==ct)){const wn=R===ct&&st.id===ft;gt.setState(st,R,wn)}let ce=!1;st.version===te.__version?(te.needsLights&&te.lightsStateVersion!==ze.state.version||te.outputColorSpace!==Bt||J.isBatchedMesh&&te.batching===!1||!J.isBatchedMesh&&te.batching===!0||J.isBatchedMesh&&te.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&te.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&te.instancing===!1||!J.isInstancedMesh&&te.instancing===!0||J.isSkinnedMesh&&te.skinning===!1||!J.isSkinnedMesh&&te.skinning===!0||J.isInstancedMesh&&te.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&te.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&te.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&te.instancingMorph===!1&&J.morphTexture!==null||te.envMap!==qt||st.fog===!0&&te.fog!==Ft||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==gt.numPlanes||te.numIntersection!==gt.numIntersection)||te.vertexAlphas!==Kt||te.vertexTangents!==ne||te.morphTargets!==Qt||te.morphNormals!==ae||te.morphColors!==Pe||te.toneMapping!==nn||te.morphTargetsCount!==Fe)&&(ce=!0):(ce=!0,te.__version=st.version);let An=te.currentProgram;ce===!0&&(An=js(st,Y,J));let na=!1,Rn=!1,mi=!1;const Be=An.getUniforms(),Cn=te.uniforms;if(jt.useProgram(An.program)&&(na=!0,Rn=!0,mi=!0),st.id!==ft&&(ft=st.id,Rn=!0),na||ct!==R){jt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Be.setValue(H,"projectionMatrix",R.projectionMatrix),Be.setValue(H,"viewMatrix",R.matrixWorldInverse);const Dn=Be.map.cameraPosition;Dn!==void 0&&Dn.setValue(H,Se.setFromMatrixPosition(R.matrixWorld)),Ce.logarithmicDepthBuffer&&Be.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Be.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),ct!==R&&(ct=R,Rn=!0,mi=!0)}if(te.needsLights&&(ze.state.directionalShadowMap.length>0&&Be.setValue(H,"directionalShadowMap",ze.state.directionalShadowMap,W),ze.state.spotShadowMap.length>0&&Be.setValue(H,"spotShadowMap",ze.state.spotShadowMap,W),ze.state.pointShadowMap.length>0&&Be.setValue(H,"pointShadowMap",ze.state.pointShadowMap,W)),J.isSkinnedMesh){Be.setOptional(H,J,"bindMatrix"),Be.setOptional(H,J,"bindMatrixInverse");const wn=J.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),Be.setValue(H,"boneTexture",wn.boneTexture,W))}J.isBatchedMesh&&(Be.setOptional(H,J,"batchingTexture"),Be.setValue(H,"batchingTexture",J._matricesTexture,W),Be.setOptional(H,J,"batchingIdTexture"),Be.setValue(H,"batchingIdTexture",J._indirectTexture,W),Be.setOptional(H,J,"batchingColorTexture"),J._colorsTexture!==null&&Be.setValue(H,"batchingColorTexture",J._colorsTexture,W));const _n=ot.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&Xt.update(J,ot,An),(Rn||te.receiveShadow!==J.receiveShadow)&&(te.receiveShadow=J.receiveShadow,Be.setValue(H,"receiveShadow",J.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Cn.envMap.value=qt,Cn.flipEnvMap.value=qt.isCubeTexture&&qt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&Y.environment!==null&&(Cn.envMapIntensity.value=Y.environmentIntensity),Cn.dfgLUT!==void 0&&(Cn.dfgLUT.value=dA()),Rn&&(Be.setValue(H,"toneMappingExposure",T.toneMappingExposure),te.needsLights&&Qr(Cn,mi),Ft&&st.fog===!0&&ie.refreshFogUniforms(Cn,Ft),ie.refreshMaterialUniforms(Cn,st,St,it,F.state.transmissionRenderTarget[R.id]),qc.upload(H,sl(te),Cn,W)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(qc.upload(H,sl(te),Cn,W),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Be.setValue(H,"center",J.center),Be.setValue(H,"modelViewMatrix",J.modelViewMatrix),Be.setValue(H,"normalMatrix",J.normalMatrix),Be.setValue(H,"modelMatrix",J.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const wn=st.uniformsGroups;for(let Dn=0,Ws=wn.length;Dn<Ws;Dn++){const Ni=wn[Dn];dt.update(Ni,An),dt.bind(Ni,An)}}return An}function Qr(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Na(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(R,Y,ot){const st=M.get(R);st.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),M.get(R.texture).__webglTexture=Y,M.get(R.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:ot,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const ot=M.get(R);ot.__webglFramebuffer=Y,ot.__useDefaultFramebuffer=Y===void 0};const Ua=H.createFramebuffer();this.setRenderTarget=function(R,Y=0,ot=0){tt=R,k=Y,Q=ot;let st=null,J=!1,Ft=!1;if(R){const Bt=M.get(R);if(Bt.__useDefaultFramebuffer!==void 0){jt.bindFramebuffer(H.FRAMEBUFFER,Bt.__webglFramebuffer),z.copy(R.viewport),V.copy(R.scissor),at=R.scissorTest,jt.viewport(z),jt.scissor(V),jt.setScissorTest(at),ft=-1;return}else if(Bt.__webglFramebuffer===void 0)W.setupRenderTarget(R);else if(Bt.__hasExternalTextures)W.rebindTextures(R,M.get(R.texture).__webglTexture,M.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ne=R.depthTexture;if(Bt.__boundDepthTexture!==ne){if(ne!==null&&M.has(ne)&&(R.width!==ne.image.width||R.height!==ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(R)}}const qt=R.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Ft=!0);const Kt=M.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Kt[Y])?st=Kt[Y][ot]:st=Kt[Y],J=!0):R.samples>0&&W.useMultisampledRTT(R)===!1?st=M.get(R).__webglMultisampledFramebuffer:Array.isArray(Kt)?st=Kt[ot]:st=Kt,z.copy(R.viewport),V.copy(R.scissor),at=R.scissorTest}else z.copy($).multiplyScalar(St).floor(),V.copy(ht).multiplyScalar(St).floor(),at=zt;if(ot!==0&&(st=Ua),jt.bindFramebuffer(H.FRAMEBUFFER,st)&&jt.drawBuffers(R,st),jt.viewport(z),jt.scissor(V),jt.setScissorTest(at),J){const Bt=M.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Bt.__webglTexture,ot)}else if(Ft){const Bt=Y;for(let qt=0;qt<R.textures.length;qt++){const Kt=M.get(R.textures[qt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+qt,Kt.__webglTexture,ot,Bt)}}else if(R!==null&&ot!==0){const Bt=M.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Bt.__webglTexture,ot)}ft=-1},this.readRenderTargetPixels=function(R,Y,ot,st,J,Ft,Vt,Bt=0){if(!(R&&R.isWebGLRenderTarget)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=M.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Vt!==void 0&&(qt=qt[Vt]),qt){jt.bindFramebuffer(H.FRAMEBUFFER,qt);try{const Kt=R.textures[Bt],ne=Kt.format,Qt=Kt.type;if(!Ce.textureFormatReadable(ne)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(Qt)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-st&&ot>=0&&ot<=R.height-J&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Bt),H.readPixels(Y,ot,st,J,vt.convert(ne),vt.convert(Qt),Ft))}finally{const Kt=tt!==null?M.get(tt).__webglFramebuffer:null;jt.bindFramebuffer(H.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(R,Y,ot,st,J,Ft,Vt,Bt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=M.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Vt!==void 0&&(qt=qt[Vt]),qt)if(Y>=0&&Y<=R.width-st&&ot>=0&&ot<=R.height-J){jt.bindFramebuffer(H.FRAMEBUFFER,qt);const Kt=R.textures[Bt],ne=Kt.format,Qt=Kt.type;if(!Ce.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ae=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ae),H.bufferData(H.PIXEL_PACK_BUFFER,Ft.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Bt),H.readPixels(Y,ot,st,J,vt.convert(ne),vt.convert(Qt),0);const Pe=tt!==null?M.get(tt).__webglFramebuffer:null;jt.bindFramebuffer(H.FRAMEBUFFER,Pe);const nn=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Cy(H,nn,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ae),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ft),H.deleteBuffer(ae),H.deleteSync(nn),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,ot=0){const st=Math.pow(2,-ot),J=Math.floor(R.image.width*st),Ft=Math.floor(R.image.height*st),Vt=Y!==null?Y.x:0,Bt=Y!==null?Y.y:0;W.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,ot,0,0,Vt,Bt,J,Ft),jt.unbindTexture()};const ps=H.createFramebuffer(),La=H.createFramebuffer();this.copyTextureToTexture=function(R,Y,ot=null,st=null,J=0,Ft=null){Ft===null&&(J!==0?(el("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ft=J,J=0):Ft=0);let Vt,Bt,qt,Kt,ne,Qt,ae,Pe,nn;const Ke=R.isCompressedTexture?R.mipmaps[Ft]:R.image;if(ot!==null)Vt=ot.max.x-ot.min.x,Bt=ot.max.y-ot.min.y,qt=ot.isBox3?ot.max.z-ot.min.z:1,Kt=ot.min.x,ne=ot.min.y,Qt=ot.isBox3?ot.min.z:0;else{const _n=Math.pow(2,-J);Vt=Math.floor(Ke.width*_n),Bt=Math.floor(Ke.height*_n),R.isDataArrayTexture?qt=Ke.depth:R.isData3DTexture?qt=Math.floor(Ke.depth*_n):qt=1,Kt=0,ne=0,Qt=0}st!==null?(ae=st.x,Pe=st.y,nn=st.z):(ae=0,Pe=0,nn=0);const Fe=vt.convert(Y.format),te=vt.convert(Y.type);let ze;Y.isData3DTexture?(W.setTexture3D(Y,0),ze=H.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(W.setTexture2DArray(Y,0),ze=H.TEXTURE_2D_ARRAY):(W.setTexture2D(Y,0),ze=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);const ce=H.getParameter(H.UNPACK_ROW_LENGTH),An=H.getParameter(H.UNPACK_IMAGE_HEIGHT),na=H.getParameter(H.UNPACK_SKIP_PIXELS),Rn=H.getParameter(H.UNPACK_SKIP_ROWS),mi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ke.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ke.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Kt),H.pixelStorei(H.UNPACK_SKIP_ROWS,ne),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Qt);const Be=R.isDataArrayTexture||R.isData3DTexture,Cn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const _n=M.get(R),wn=M.get(Y),Dn=M.get(_n.__renderTarget),Ws=M.get(wn.__renderTarget);jt.bindFramebuffer(H.READ_FRAMEBUFFER,Dn.__webglFramebuffer),jt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ws.__webglFramebuffer);for(let Ni=0;Ni<qt;Ni++)Be&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,M.get(R).__webglTexture,J,Qt+Ni),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,M.get(Y).__webglTexture,Ft,nn+Ni)),H.blitFramebuffer(Kt,ne,Vt,Bt,ae,Pe,Vt,Bt,H.DEPTH_BUFFER_BIT,H.NEAREST);jt.bindFramebuffer(H.READ_FRAMEBUFFER,null),jt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(J!==0||R.isRenderTargetTexture||M.has(R)){const _n=M.get(R),wn=M.get(Y);jt.bindFramebuffer(H.READ_FRAMEBUFFER,ps),jt.bindFramebuffer(H.DRAW_FRAMEBUFFER,La);for(let Dn=0;Dn<qt;Dn++)Be?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,_n.__webglTexture,J,Qt+Dn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,_n.__webglTexture,J),Cn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,wn.__webglTexture,Ft,nn+Dn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,wn.__webglTexture,Ft),J!==0?H.blitFramebuffer(Kt,ne,Vt,Bt,ae,Pe,Vt,Bt,H.COLOR_BUFFER_BIT,H.NEAREST):Cn?H.copyTexSubImage3D(ze,Ft,ae,Pe,nn+Dn,Kt,ne,Vt,Bt):H.copyTexSubImage2D(ze,Ft,ae,Pe,Kt,ne,Vt,Bt);jt.bindFramebuffer(H.READ_FRAMEBUFFER,null),jt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Cn?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(ze,Ft,ae,Pe,nn,Vt,Bt,qt,Fe,te,Ke.data):Y.isCompressedArrayTexture?H.compressedTexSubImage3D(ze,Ft,ae,Pe,nn,Vt,Bt,qt,Fe,Ke.data):H.texSubImage3D(ze,Ft,ae,Pe,nn,Vt,Bt,qt,Fe,te,Ke):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ft,ae,Pe,Vt,Bt,Fe,te,Ke.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ft,ae,Pe,Ke.width,Ke.height,Fe,Ke.data):H.texSubImage2D(H.TEXTURE_2D,Ft,ae,Pe,Vt,Bt,Fe,te,Ke);H.pixelStorei(H.UNPACK_ROW_LENGTH,ce),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,An),H.pixelStorei(H.UNPACK_SKIP_PIXELS,na),H.pixelStorei(H.UNPACK_SKIP_ROWS,Rn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,mi),Ft===0&&Y.generateMipmaps&&H.generateMipmap(ze),jt.unbindTexture()},this.initRenderTarget=function(R){M.get(R).__webglFramebuffer===void 0&&W.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?W.setTextureCube(R,0):R.isData3DTexture?W.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?W.setTexture2DArray(R,0):W.setTexture2D(R,0),jt.unbindTexture()},this.resetState=function(){k=0,Q=0,tt=null,jt.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),i.unpackColorSpace=De._getUnpackColorSpace()}}const Y_={type:"change"},ip={type:"start"},Ux={type:"end"},Gc=new Jd,Z_=new cs,mA=Math.cos(70*Dy.DEG2RAD),vn=new K,$n=2*Math.PI,qe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Wh=1e-6;class gA extends xM{constructor(t,i=null){super(t,i),this.state=qe.NONE,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hr.ROTATE,MIDDLE:Hr.DOLLY,RIGHT:Hr.PAN},this.touches={ONE:Fr.ROTATE,TWO:Fr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new Vs,this._lastTargetPosition=new K,this._quat=new Vs().setFromUnitVectors(t.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new b_,this._sphericalDelta=new b_,this._scale=1,this._panOffset=new K,this._rotateStart=new de,this._rotateEnd=new de,this._rotateDelta=new de,this._panStart=new de,this._panEnd=new de,this._panDelta=new de,this._dollyStart=new de,this._dollyEnd=new de,this._dollyDelta=new de,this._dollyDirection=new K,this._mouse=new de,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=xA.bind(this),this._onPointerDown=_A.bind(this),this._onPointerUp=vA.bind(this),this._onContextMenu=AA.bind(this),this._onMouseWheel=MA.bind(this),this._onKeyDown=bA.bind(this),this._onTouchStart=EA.bind(this),this._onTouchMove=TA.bind(this),this._onMouseDown=SA.bind(this),this._onMouseMove=yA.bind(this),this._interceptControlDown=RA.bind(this),this._interceptControlUp=CA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Y_),this.update(),this.state=qe.NONE}update(t=null){const i=this.object.position;vn.copy(i).sub(this.target),vn.applyQuaternion(this._quat),this._spherical.setFromVector3(vn),this.autoRotate&&this.state===qe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=$n:s>Math.PI&&(s-=$n),l<-Math.PI?l+=$n:l>Math.PI&&(l-=$n),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(vn.setFromSpherical(this._spherical),vn.applyQuaternion(this._quatInverse),i.copy(this.target).add(vn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=vn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const d=new K(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const p=new K(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=vn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Gc.origin.copy(this.object.position),Gc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Gc.direction))<mA?this.object.lookAt(this.target):(Z_.setFromNormalAndCoplanarPoint(this.object.up,this.target),Gc.intersectPlane(Z_,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>Wh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Wh||this._lastTargetPosition.distanceToSquared(this.target)>Wh?(this.dispatchEvent(Y_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?$n/60*this.autoRotateSpeed*t:$n/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){vn.setFromMatrixColumn(i,0),vn.multiplyScalar(-t),this._panOffset.add(vn)}_panUp(t,i){this.screenSpacePanning===!0?vn.setFromMatrixColumn(i,1):(vn.setFromMatrixColumn(i,0),vn.crossVectors(this.object.up,vn)),vn.multiplyScalar(t),this._panOffset.add(vn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;vn.copy(l).sub(this.target);let u=vn.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft($n*this._rotateDelta.x/i.clientHeight),this._rotateUp($n*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp($n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-$n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft($n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-$n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),u=.5*(t.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft($n*this._rotateDelta.x/i.clientHeight),this._rotateUp($n*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new de,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function _A(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function xA(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function vA(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ux),this.state=qe.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function SA(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Hr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=qe.DOLLY;break;case Hr.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=qe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=qe.ROTATE}break;case Hr.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=qe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=qe.PAN}break;default:this.state=qe.NONE}this.state!==qe.NONE&&this.dispatchEvent(ip)}function yA(o){switch(this.state){case qe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case qe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case qe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function MA(o){this.enabled===!1||this.enableZoom===!1||this.state!==qe.NONE||(o.preventDefault(),this.dispatchEvent(ip),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(Ux))}function bA(o){this.enabled!==!1&&this._handleKeyDown(o)}function EA(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case Fr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=qe.TOUCH_ROTATE;break;case Fr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=qe.TOUCH_PAN;break;default:this.state=qe.NONE}break;case 2:switch(this.touches.TWO){case Fr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=qe.TOUCH_DOLLY_PAN;break;case Fr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=qe.TOUCH_DOLLY_ROTATE;break;default:this.state=qe.NONE}break;default:this.state=qe.NONE}this.state!==qe.NONE&&this.dispatchEvent(ip)}function TA(o){switch(this._trackPointer(o),this.state){case qe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case qe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case qe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case qe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=qe.NONE}}function AA(o){this.enabled!==!1&&o.preventDefault()}function RA(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function CA(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wA(){const[o,t]=We.useState("outdoor"),[i,s]=We.useState("2d"),[l,u]=We.useState(!0),[h,d]=We.useState(!0),[m,p]=We.useState(!1),[v,g]=We.useState(null),[S,b]=We.useState("meters"),[E,C]=We.useState(!0),[y,x]=We.useState("perspective"),[P,O]=We.useState(!0),[U,F]=We.useState(!0),[B,I]=We.useState(!0),[q,T]=We.useState(!0),[D,k]=We.useState(!0),[Q,tt]=We.useState(!0),[ft,ct]=We.useState(!0),[z,V]=We.useState("orbit"),at=We.useRef(null),At=We.useRef({x:0,z:25}),Tt=We.useRef(0),L=We.useRef(null),it=We.useRef(null),St=We.useRef(null),Lt=We.useRef(null),Gt=We.useRef(0),$=We.useRef({}),ht=kt=>(kt*3.28084).toFixed(1),zt=kt=>S==="meters"?`${kt}m`:`${ht(kt)}'`,Ct=o==="indoor",It={ceilingHeight:9,postHeight:9,postDiameter:.4,roofPitch:15,ridgeHeight:12,posts:[{x:-24,z:-17,label:"P1"},{x:-12,z:-17,label:"P2"},{x:0,z:-17,label:"P3"},{x:12,z:-17,label:"P4"},{x:24,z:-17,label:"P5"},{x:-24,z:11,label:"P6"},{x:-12,z:11,label:"P7"},{x:0,z:11,label:"P8"},{x:12,z:11,label:"P9"},{x:24,z:11,label:"P10"},{x:-24,z:-3,label:"P11"},{x:24,z:-3,label:"P12"},{x:-12,z:-3,label:"P13"},{x:0,z:-3,label:"P14"},{x:12,z:-3,label:"P15"}]},fe={court:{name:`${Ct?"Covered":"Outdoor"} Pickleball Court`,size:"100 sqm each",dims:"9.1m × 11m (buffer)",playing:"6.1m × 13.4m",features:Ct?"Roof covered, open sides, natural ventilation":"Open-air, LED poles, acrylic surface"},coffee:{name:"Coffee Shop",size:"30 sqm",dims:"5m × 6m",features:"Counter, tables, covered roof"},maleRR:{name:"Male Restroom",size:"4 sqm",dims:"2m × 2m",features:"Toilet, sink, urinal"},maleShower:{name:"Male Shower",size:"4 sqm",dims:"2m × 2m",features:"Shower stall, bench"},femaleRR:{name:"Female Restroom",size:"4 sqm",dims:"2m × 2m",features:"Toilet, sink"},femaleShower:{name:"Female Shower",size:"4 sqm",dims:"2m × 2m",features:"Shower stall, bench"},parking:{name:"Parking Area",size:"119 sqm",dims:"2.7m × 5.5m per slot",features:"8 slots"},building:{name:"Covered Court Structure",size:"800 sqm",dims:"48m × 28m",features:`Open gable roof, NO WALLS, ${It.ridgeHeight}m ridge, ${It.roofPitch}° pitch`},post:{name:"Structural Post/Column",size:"0.13 sqm",dims:"400mm diameter",features:`Steel column, ${It.postHeight}m height, supports roof load`}};We.useEffect(()=>{if(i!=="3d"||!at.current)return;const kt=at.current,Nt=new tM;Nt.background=new Ne(Ct?1976635:1710638);const re=new Ri(50,kt.clientWidth/kt.clientHeight,.1,1e3);re.position.set(60,50,60),re.lookAt(0,0,0),it.current=re;const H=new pA({antialias:!0});H.setSize(kt.clientWidth,kt.clientHeight),H.shadowMap.enabled=!0,kt.appendChild(H.domElement),L.current=H;const _e=new gA(re,H.domElement);_e.enableDamping=!0,_e.dampingFactor=.05,_e.minDistance=10,_e.maxDistance=150,_e.maxPolarAngle=Math.PI/2.1,_e.target.set(0,0,0),St.current=_e,Nt.add(new gM(16777215,Ct?.6:.4));const ye=new mM(16777215,.8);ye.position.set(30,50,30),ye.castShadow=!0,Nt.add(ye);const Ce=new he(new Ti(55,40),new sn({color:3621201}));Ce.rotation.x=-Math.PI/2,Ce.position.y=-.1,Ce.receiveShadow=!0,Nt.add(Ce);const jt=new he(new Ti(48,28),new sn({color:Ct?8138002:1980975}));jt.rotation.x=-Math.PI/2,jt.position.set(0,0,-3),Nt.add(jt);const N=9.1,M=11,W=.8;for(let gt=0;gt<2;gt++)for(let bt=0;bt<4;bt++){const Et=(bt-1.5)*(N+W),Xt=(gt-.5)*(M+W)-3,X=new he(new Ti(N,M),new sn({color:Ct?15357964:1467700}));X.rotation.x=-Math.PI/2,X.position.set(Et,.05,Xt),Nt.add(X);const Ot=new rM(new cM(new Ti(6.1,13.4)),new Ex({color:16777215}));Ot.rotation.x=-Math.PI/2,Ot.position.set(Et,.06,Xt),Nt.add(Ot);const vt=new he(new Qe(6.1,.9,.05),new sn({color:1976635,transparent:!0,opacity:.7}));vt.position.set(Et,.45,Xt),Nt.add(vt),[Et-3.1,Et+3.1].forEach(Dt=>{const $t=new he(new Br(.05,.05,1),new sn({color:6583435}));$t.position.set(Dt,.5,Xt),Nt.add($t)});const Rt=document.createElement("canvas");Rt.width=Rt.height=64;const dt=Rt.getContext("2d");dt.fillStyle="#0f172a",dt.beginPath(),dt.arc(32,32,28,0,Math.PI*2),dt.fill(),dt.fillStyle="#fff",dt.font="bold 36px Arial",dt.textAlign="center",dt.textBaseline="middle",dt.fillText((gt*4+bt+1).toString(),32,32);const pt=new he(new Ti(1.5,1.5),new $d({map:new oM(Rt),transparent:!0}));pt.rotation.x=-Math.PI/2,pt.position.set(Et,.07,Xt),Nt.add(pt)}if(Ct){const gt=It.ceilingHeight,bt=It.ridgeHeight,Et=48.6,Xt=14.3,X=Math.sqrt(Math.pow(Xt,2)+Math.pow(bt-gt,2)),Ot=Math.atan2(bt-gt,Xt);if(P){const vt=new Ti(Et,X+1),Rt=new sn({color:6583435,side:Wi}),dt=new he(vt,Rt);dt.position.set(0,(gt+bt)/2,-3-Xt/2),dt.rotation.x=Math.PI/2-Ot,Nt.add(dt);const pt=new he(vt,Rt);pt.position.set(0,(gt+bt)/2,-3+Xt/2),pt.rotation.x=-(Math.PI/2-Ot),Nt.add(pt)}if(B){const vt=new sn({color:16498468}),Rt=new he(new Qe(Et,.4,.4),vt);Rt.position.set(0,bt,-3),Nt.add(Rt)}if(q){const vt=new sn({color:16096779}),Rt=new sn({color:14251782}),dt=-17,pt=11,Dt=14,$t=Math.sqrt(Dt*Dt+(bt-gt)*(bt-gt)),Me=Math.atan2(bt-gt,Dt);[-24,24].forEach(le=>{const tn=new he(new Qe(.3,.3,$t),vt),kn=gt+(bt-gt)/2,Da=dt+Dt/2;tn.position.set(le,kn,Da),tn.rotation.x=-Me,Nt.add(tn);const ei=new he(new Qe(.3,.3,$t),vt),Bi=gt+(bt-gt)/2,ea=pt-Dt/2;ei.position.set(le,Bi,ea),ei.rotation.x=Me,Nt.add(ei);const pi=new he(new Qe(.3,.3,28),vt);pi.position.set(le,gt,-3),Nt.add(pi);const wi=new he(new Qe(.3,bt-gt,.3),Rt);wi.position.set(le,gt+(bt-gt)/2,-3),Nt.add(wi)}),[-12,0,12].forEach(le=>{const tn=new he(new Qe(.25,.25,$t),vt),kn=gt+(bt-gt)/2,Da=dt+Dt/2;tn.position.set(le,kn,Da),tn.rotation.x=-Me,Nt.add(tn);const ei=new he(new Qe(.25,.25,$t),vt),Bi=gt+(bt-gt)/2,ea=pt-Dt/2;ei.position.set(le,Bi,ea),ei.rotation.x=Me,Nt.add(ei);const pi=new he(new Qe(.25,.25,28),vt);pi.position.set(le,gt,-3),Nt.add(pi);const wi=new he(new Qe(.25,bt-gt,.25),Rt);wi.position.set(le,gt+(bt-gt)/2,-3),Nt.add(wi);const ni=new sn({color:11817737}),In=new he(new Qe(.15,.15,8),ni);In.position.set(le,gt+1.5,-7),In.rotation.x=-Math.PI/6,Nt.add(In);const en=new he(new Qe(.15,.15,8),ni);en.position.set(le,gt+1.5,1),en.rotation.x=Math.PI/6,Nt.add(en)})}if(D){const vt=new sn({color:14251782});[.3,.6,.9].forEach(Rt=>{const dt=gt+(bt-gt)*Rt,pt=-3-Xt*(1-Rt),Dt=-3+Xt*(1-Rt),$t=new he(new Qe(Et,.15,.15),vt);$t.position.set(0,dt,pt),Nt.add($t);const Me=new he(new Qe(Et,.15,.15),vt);Me.position.set(0,dt,Dt),Nt.add(Me)})}if(Q){const vt=new sn({color:16498468});[-17,11].forEach(Rt=>{const dt=new he(new Qe(Et,.3,.3),vt);dt.position.set(0,gt,Rt),Nt.add(dt)})}if(U){const vt=new sn({color:14427686});It.posts.forEach(Rt=>{const dt=new he(new Br(It.postDiameter/2,It.postDiameter/2,It.postHeight),vt);dt.position.set(Rt.x,It.postHeight/2,Rt.z),dt.castShadow=!0,Nt.add(dt);const pt=new sn({color:10033947}),Dt=new he(new Br(.4,.5,.3),pt);Dt.position.set(Rt.x,.15,Rt.z),Nt.add(Dt)})}[[-15,-10],[0,-10],[15,-10],[-15,4],[0,4],[15,4]].forEach(([vt,Rt])=>{const dt=new he(new Qe(3,.2,1),new sn({color:16708551,emissive:16708551,emissiveIntensity:.5}));dt.position.set(vt,gt-.5,Rt),Nt.add(dt)})}else{const gt=new sn({color:2278750,transparent:!0,opacity:.3});[[0,1.5,-17,48,3,.1],[0,1.5,11,48,3,.1],[-24,1.5,-3,.1,3,28],[24,1.5,-3,.1,3,28]].forEach(([bt,Et,Xt,X,Ot,vt])=>{const Rt=new he(new Qe(X,Ot,vt),gt);Rt.position.set(bt,Et,Xt),Nt.add(Rt)}),[[-20,-10],[-8,-10],[8,-10],[20,-10],[-20,4],[-8,4],[8,4],[20,4]].forEach(([bt,Et])=>{const Xt=new he(new Br(.15,.2,8),new sn({color:6583435}));Xt.position.set(bt,4,Et),Nt.add(Xt);const X=new he(new ep(.5,16,16),new sn({color:16498468,emissive:16498468,emissiveIntensity:.5}));X.position.set(bt,8.2,Et),Nt.add(X)})}[{pos:[-20,1.5,16],size:[2.5,3,2.5],color:1981066},{pos:[-17,1.5,16],size:[2.5,3,2.5],color:1982639},{pos:[-14,1.5,16],size:[2.5,3,2.5],color:8591427},{pos:[-11,1.5,16],size:[2.5,3,2.5],color:10295117}].forEach(gt=>{const bt=new he(new Qe(...gt.size),new sn({color:gt.color}));bt.position.set(...gt.pos),bt.castShadow=!0,Nt.add(bt)});const Mt=new he(new Qe(6,3.5,5),new sn({color:7877903}));Mt.position.set(-5,1.75,16),Mt.castShadow=!0,Nt.add(Mt);const ut=new he(new Qe(7,.3,6),new sn({color:11817737}));ut.position.set(-5,3.65,16),Nt.add(ut);const Zt=new he(new Ti(22,5.5),new sn({color:2696484}));Zt.rotation.x=-Math.PI/2,Zt.position.set(12,.02,16),Nt.add(Zt);for(let gt=0;gt<8;gt++){const bt=new he(new Ti(2.5,5),new sn({color:1841431}));bt.rotation.x=-Math.PI/2,bt.position.set(2+gt*2.7,.03,16),Nt.add(bt)}const Pt=new he(new Qe(.3,2.5,3),new sn({color:959977,emissive:959977,emissiveIntensity:.3}));Pt.position.set(-1,1.25,12),Nt.add(Pt);const Wt=gt=>{$.current[gt.key.toLowerCase()]=!0},ie=gt=>{$.current[gt.key.toLowerCase()]=!1};window.addEventListener("keydown",Wt),window.addEventListener("keyup",ie);const wt=()=>{if(Lt.current=requestAnimationFrame(wt),z==="orbit")_e.enabled=!0,E&&y==="perspective"&&!_e.enabled&&(Gt.current+=.003,re.position.x=Math.sin(Gt.current)*70,re.position.z=Math.cos(Gt.current)*70,re.lookAt(0,0,0)),_e.update();else if(z==="walkthrough"){_e.enabled=!1;const gt=.5,bt=.03,Et=At.current;let Xt=Tt.current;($.current.w||$.current.arrowup)&&(Et.x-=Math.sin(Xt)*gt,Et.z-=Math.cos(Xt)*gt),($.current.s||$.current.arrowdown)&&(Et.x+=Math.sin(Xt)*gt,Et.z+=Math.cos(Xt)*gt),($.current.a||$.current.arrowleft)&&(Xt+=bt),($.current.d||$.current.arrowright)&&(Xt-=bt),Et.x=Math.max(-30,Math.min(30,Et.x)),Et.z=Math.max(-20,Math.min(25,Et.z)),At.current=Et,Tt.current=Xt,re.position.set(Et.x,1.7,Et.z),re.rotation.set(0,Xt,0)}H.render(Nt,re)};wt();const Ut=()=>{kt&&(re.aspect=kt.clientWidth/kt.clientHeight,re.updateProjectionMatrix(),H.setSize(kt.clientWidth,kt.clientHeight))};return window.addEventListener("resize",Ut),()=>{window.removeEventListener("resize",Ut),window.removeEventListener("keydown",Wt),window.removeEventListener("keyup",ie),cancelAnimationFrame(Lt.current),_e.dispose(),kt&&H.domElement&&kt.removeChild(H.domElement),H.dispose()}},[i,E,y,o,P,U,B,q,D,Q,z]);const Ye=kt=>{if(x(kt),!it.current)return;const Nt=it.current,re={top:[0,80,.1],front:[0,20,60],side:[70,20,0],perspective:[60,50,60]};Nt.position.set(...re[kt]),Nt.lookAt(0,0,0)},Se=[[25,25],[140,25],[260,25],[375,25],[495,25],[25,295],[140,295],[260,295],[375,295],[495,295],[25,160],[495,160],[140,160],[260,160],[375,160]],ve=[[30,60],[140,60],[260,60],[370,60],[30,175],[140,175],[260,175],[370,175],[30,285],[370,285]];return w.jsx("div",{className:"min-h-screen bg-slate-950 text-white p-4",children:w.jsxs("div",{className:"max-w-5xl mx-auto",children:[w.jsxs("div",{className:"text-center mb-4",children:[w.jsx("h1",{className:"text-2xl font-bold",children:"8-Court Pickleball Facility"}),w.jsx("p",{className:"text-slate-400 text-sm",children:"1,000 sqm | Switch between Indoor & Outdoor setups"})]}),w.jsx("div",{className:"flex justify-center mb-3",children:w.jsxs("div",{className:"bg-slate-800 p-1 rounded-lg flex",children:[w.jsx("button",{onClick:()=>t("outdoor"),className:`px-5 py-2 rounded-md text-sm font-medium transition-all ${o==="outdoor"?"bg-green-500 text-white":"text-slate-400 hover:text-white"}`,children:"Outdoor"}),w.jsx("button",{onClick:()=>t("indoor"),className:`px-5 py-2 rounded-md text-sm font-medium transition-all ${o==="indoor"?"bg-orange-500 text-white":"text-slate-400 hover:text-white"}`,children:"Covered"})]})}),w.jsx("div",{className:"flex justify-center mb-3",children:w.jsxs("div",{className:"bg-slate-700 p-1 rounded-lg flex",children:[w.jsx("button",{onClick:()=>s("2d"),className:`px-5 py-1.5 rounded-md text-sm font-medium transition-all ${i==="2d"?(Ct?"bg-orange-600":"bg-green-600")+" text-white":"text-slate-400 hover:text-white"}`,children:"2D"}),w.jsx("button",{onClick:()=>s("3d"),className:`px-5 py-1.5 rounded-md text-sm font-medium transition-all ${i==="3d"?(Ct?"bg-orange-600":"bg-green-600")+" text-white":"text-slate-400 hover:text-white"}`,children:"3D"})]})}),w.jsx("div",{className:"flex justify-center mb-3",children:w.jsx("div",{className:`inline-block px-4 py-1 rounded-full text-sm ${Ct?"bg-orange-500/20 text-orange-400":"bg-green-500/20 text-green-400"}`,children:Ct?`COVERED: Open Gable Roof, ${It.ridgeHeight}m ridge, ${It.posts.length} posts, NO WALLS`:"OUTDOOR: Open-air courts with perimeter fence"})}),w.jsxs("div",{className:"flex flex-wrap justify-center gap-2 mb-4",children:[i==="2d"&&w.jsxs(w.Fragment,{children:[w.jsxs("label",{className:"flex items-center gap-2 text-xs cursor-pointer bg-slate-800 px-2 py-1 rounded-lg",children:[w.jsx("input",{type:"checkbox",checked:l,onChange:()=>u(!l),className:"rounded w-3 h-3"}),"Dimensions"]}),w.jsxs("label",{className:"flex items-center gap-2 text-xs cursor-pointer bg-slate-800 px-2 py-1 rounded-lg",children:[w.jsx("input",{type:"checkbox",checked:h,onChange:()=>d(!h),className:"rounded w-3 h-3"}),"Court Details"]}),w.jsxs("label",{className:"flex items-center gap-2 text-xs cursor-pointer bg-slate-800 px-2 py-1 rounded-lg",children:[w.jsx("input",{type:"checkbox",checked:m,onChange:()=>p(!m),className:"rounded w-3 h-3"}),"Legend"]}),w.jsxs("div",{className:"flex items-center gap-1 bg-slate-800 px-2 py-1 rounded-lg",children:[w.jsx("button",{onClick:()=>b("meters"),className:`px-2 py-0.5 rounded text-xs ${S==="meters"?"bg-teal-500 text-white":"text-slate-400"}`,children:"m"}),w.jsx("button",{onClick:()=>b("feet"),className:`px-2 py-0.5 rounded text-xs ${S==="feet"?"bg-teal-500 text-white":"text-slate-400"}`,children:"ft"})]})]}),i==="3d"&&w.jsxs(w.Fragment,{children:[w.jsxs("label",{className:"flex items-center gap-2 text-xs cursor-pointer bg-slate-800 px-2 py-1 rounded-lg",children:[w.jsx("input",{type:"checkbox",checked:E,onChange:()=>C(!E),className:"rounded w-3 h-3"}),"Auto Rotate"]}),Ct&&w.jsxs("label",{className:"flex items-center gap-2 text-xs cursor-pointer bg-slate-800 px-2 py-1 rounded-lg",children:[w.jsx("input",{type:"checkbox",checked:ft,onChange:()=>ct(!ft),className:"rounded w-3 h-3"}),"Structure Controls"]}),w.jsxs("div",{className:"flex items-center gap-1 bg-slate-800 px-2 py-1 rounded-lg",children:[w.jsx("button",{onClick:()=>Ye("perspective"),className:`px-2 py-0.5 rounded text-xs ${y==="perspective"?"bg-teal-500 text-white":"text-slate-400"}`,children:"3D"}),w.jsx("button",{onClick:()=>Ye("top"),className:`px-2 py-0.5 rounded text-xs ${y==="top"?"bg-teal-500 text-white":"text-slate-400"}`,children:"Top"}),w.jsx("button",{onClick:()=>Ye("front"),className:`px-2 py-0.5 rounded text-xs ${y==="front"?"bg-teal-500 text-white":"text-slate-400"}`,children:"Front"}),w.jsx("button",{onClick:()=>Ye("side"),className:`px-2 py-0.5 rounded text-xs ${y==="side"?"bg-teal-500 text-white":"text-slate-400"}`,children:"Side"})]}),w.jsxs("div",{className:"flex items-center gap-1 bg-slate-800 px-2 py-1 rounded-lg",children:[w.jsx("span",{className:"text-slate-400 text-xs mr-1",children:"Mode:"}),w.jsx("button",{onClick:()=>{V("orbit"),At.current={x:0,z:25},Tt.current=0},className:`px-2 py-0.5 rounded text-xs ${z==="orbit"?"bg-purple-500 text-white":"text-slate-400"}`,children:"Orbit"}),w.jsx("button",{onClick:()=>{V("walkthrough"),C(!1)},className:`px-2 py-0.5 rounded text-xs ${z==="walkthrough"?"bg-purple-500 text-white":"text-slate-400"}`,children:"Walk"})]})]})]}),i==="3d"&&Ct&&ft&&w.jsxs("div",{className:"bg-slate-800 rounded-lg p-3 mb-4 border border-slate-700",children:[w.jsx("h4",{className:"text-white font-bold text-sm mb-2",children:"Structure Components (Toggle Visibility)"}),w.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-2",children:[w.jsxs("label",{className:"flex items-center gap-2 text-xs cursor-pointer bg-slate-900 px-2 py-1.5 rounded border border-slate-600",children:[w.jsx("input",{type:"checkbox",checked:P,onChange:()=>O(!P),className:"rounded w-3 h-3"}),w.jsx("span",{className:"w-3 h-3 rounded",style:{backgroundColor:"#64748b"}}),w.jsx("span",{className:"text-slate-300",children:"Roof Panels"})]}),w.jsxs("label",{className:"flex items-center gap-2 text-xs cursor-pointer bg-slate-900 px-2 py-1.5 rounded border border-slate-600",children:[w.jsx("input",{type:"checkbox",checked:U,onChange:()=>F(!U),className:"rounded w-3 h-3"}),w.jsx("span",{className:"w-3 h-3 rounded-full",style:{backgroundColor:"#dc2626"}}),w.jsx("span",{className:"text-slate-300",children:"Posts (15)"})]}),w.jsxs("label",{className:"flex items-center gap-2 text-xs cursor-pointer bg-slate-900 px-2 py-1.5 rounded border border-slate-600",children:[w.jsx("input",{type:"checkbox",checked:B,onChange:()=>I(!B),className:"rounded w-3 h-3"}),w.jsx("span",{className:"w-3 h-1.5 rounded",style:{backgroundColor:"#fbbf24"}}),w.jsx("span",{className:"text-slate-300",children:"Ridge Beam"})]}),w.jsxs("label",{className:"flex items-center gap-2 text-xs cursor-pointer bg-slate-900 px-2 py-1.5 rounded border border-slate-600",children:[w.jsx("input",{type:"checkbox",checked:q,onChange:()=>T(!q),className:"rounded w-3 h-3"}),w.jsx("span",{className:"w-3 h-1.5 rounded",style:{backgroundColor:"#f59e0b"}}),w.jsx("span",{className:"text-slate-300",children:"A-Frame Trusses"})]}),w.jsxs("label",{className:"flex items-center gap-2 text-xs cursor-pointer bg-slate-900 px-2 py-1.5 rounded border border-slate-600",children:[w.jsx("input",{type:"checkbox",checked:D,onChange:()=>k(!D),className:"rounded w-3 h-3"}),w.jsx("span",{className:"w-3 h-1",style:{backgroundColor:"#d97706"}}),w.jsx("span",{className:"text-slate-300",children:"Purlins (6)"})]}),w.jsxs("label",{className:"flex items-center gap-2 text-xs cursor-pointer bg-slate-900 px-2 py-1.5 rounded border border-slate-600",children:[w.jsx("input",{type:"checkbox",checked:Q,onChange:()=>tt(!Q),className:"rounded w-3 h-3"}),w.jsx("span",{className:"w-3 h-1.5 rounded",style:{backgroundColor:"#fbbf24"}}),w.jsx("span",{className:"text-slate-300",children:"Eave Beams (2)"})]})]}),w.jsxs("div",{className:"mt-2 flex gap-2",children:[w.jsx("button",{onClick:()=>{O(!0),F(!0),I(!0),T(!0),k(!0),tt(!0)},className:"text-xs bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded",children:"Show All"}),w.jsx("button",{onClick:()=>{O(!1),F(!1),I(!1),T(!1),k(!1),tt(!1)},className:"text-xs bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded",children:"Hide All"}),w.jsx("button",{onClick:()=>{O(!1),F(!0),I(!0),T(!0),k(!0),tt(!0)},className:"text-xs bg-orange-600 hover:bg-orange-700 text-white px-3 py-1 rounded",children:"Frame Only"})]})]}),i==="2d"&&w.jsx("div",{className:"bg-slate-900 rounded-xl border border-slate-700 p-3 mb-4",children:w.jsxs("svg",{viewBox:"0 0 520 420",className:"w-full h-auto",children:[w.jsx("defs",{children:w.jsx("pattern",{id:"grid",width:"25",height:"25",patternUnits:"userSpaceOnUse",children:w.jsx("path",{d:"M 25 0 L 0 0 0 25",fill:"none",stroke:"#334155",strokeWidth:"0.5"})})}),w.jsx("rect",{width:"520",height:"420",fill:"#0f172a"}),w.jsx("rect",{x:"20",y:"20",width:"480",height:"380",fill:"url(#grid)"}),w.jsx("rect",{x:"20",y:"20",width:"480",height:"280",fill:Ct?"#7c2d12":"#1e3a2f",stroke:Ct?"#f97316":"#22c55e",strokeWidth:"3",strokeDasharray:Ct?"0":"10,5"}),Ct&&w.jsxs("g",{children:[w.jsx("rect",{x:"20",y:"20",width:"480",height:"280",fill:"none",stroke:"#f59e0b",strokeWidth:"3",strokeDasharray:"10,5"}),w.jsx("line",{x1:"20",y1:"160",x2:"500",y2:"160",stroke:"#f59e0b",strokeWidth:"2",strokeDasharray:"8,4"}),w.jsx("text",{x:"510",y:"163",fill:"#f59e0b",fontSize:"6",fontWeight:"bold",children:"RIDGE"}),w.jsx("polygon",{points:"20,20 260,5 500,20",fill:"none",stroke:"#f59e0b",strokeWidth:"1.5",strokeDasharray:"4,2"}),w.jsxs("text",{x:"260",y:"14",textAnchor:"middle",fill:"#f59e0b",fontSize:"6",children:["OPEN GABLE ROOF (",It.ridgeHeight,"m ridge)"]})]}),w.jsx("text",{x:"30",y:"35",fill:Ct?"#f59e0b":"#22c55e",fontSize:"8",fontWeight:"bold",children:Ct?"COVERED COURT AREA (OPEN SIDES)":"OUTDOOR COURT AREA (OPEN AIR)"}),[0,1,2,3].map(kt=>[0,1].map(Nt=>{const re=30+kt*117,H=45+Nt*120,_e=Nt*4+kt+1;return w.jsxs("g",{onMouseEnter:()=>g("court"),onMouseLeave:()=>g(null),className:"cursor-pointer",children:[w.jsx("rect",{x:re,y:H,width:"110",height:"115",fill:Ct?"#c2410c":"#115e3a",stroke:Ct?"#f97316":"#22c55e",strokeWidth:"2"}),h&&w.jsxs("g",{children:[w.jsx("rect",{x:re+12,y:H+8,width:"86",height:"99",fill:Ct?"#ea580c":"#166534",stroke:"white",strokeWidth:"1.5"}),w.jsx("line",{x1:re+12,y1:H+57,x2:re+98,y2:H+57,stroke:"#1e293b",strokeWidth:"3"}),w.jsx("rect",{x:re+12,y:H+8,width:"86",height:"18",fill:Ct?"#dc2626":"#15803d",stroke:"white",strokeWidth:"0.5"}),w.jsx("rect",{x:re+12,y:H+89,width:"86",height:"18",fill:Ct?"#dc2626":"#15803d",stroke:"white",strokeWidth:"0.5"}),w.jsx("line",{x1:re+55,y1:H+8,x2:re+55,y2:H+107,stroke:"white",strokeWidth:"0.5"})]}),w.jsx("circle",{cx:re+55,cy:H+57,r:"12",fill:"#0f172a",fillOpacity:"0.8"}),w.jsx("text",{x:re+55,y:H+61,textAnchor:"middle",fill:"white",fontSize:"11",fontWeight:"bold",children:_e})]},`court-${_e}`)})),Ct&&Se.map((kt,Nt)=>w.jsxs("g",{onMouseEnter:()=>g("post"),onMouseLeave:()=>g(null),className:"cursor-pointer",children:[w.jsx("circle",{cx:kt[0],cy:kt[1],r:"6",fill:"#dc2626",stroke:"#991b1b",strokeWidth:"2"}),w.jsx("text",{x:kt[0],y:kt[1]+3,textAnchor:"middle",fill:"white",fontSize:"5",fontWeight:"bold",children:Nt+1})]},`post-${Nt}`)),!Ct&&ve.map((kt,Nt)=>w.jsx("circle",{cx:kt[0],cy:kt[1],r:"4",fill:"#fbbf24",stroke:"#f59e0b",strokeWidth:"1"},`pole-${Nt}`)),!Ct&&w.jsx("text",{x:"260",y:"15",textAnchor:"middle",fill:"#22c55e",fontSize:"7",children:"PERIMETER FENCE"}),w.jsx("text",{x:"30",y:"320",fill:"#94a3b8",fontSize:"8",fontWeight:"bold",children:"OUTSIDE AMENITIES AREA"}),w.jsxs("g",{onMouseEnter:()=>g("maleRR"),onMouseLeave:()=>g(null),className:"cursor-pointer",children:[w.jsx("rect",{x:"20",y:"330",width:"25",height:"25",fill:"#1e3a8a",stroke:"#3b82f6",strokeWidth:"2"}),w.jsx("text",{x:"32",y:"370",textAnchor:"middle",fill:"white",fontSize:"6",fontWeight:"bold",children:"M-RR"})]}),w.jsxs("g",{onMouseEnter:()=>g("maleShower"),onMouseLeave:()=>g(null),className:"cursor-pointer",children:[w.jsx("rect",{x:"50",y:"330",width:"25",height:"25",fill:"#1e40af",stroke:"#60a5fa",strokeWidth:"2"}),w.jsx("text",{x:"62",y:"370",textAnchor:"middle",fill:"white",fontSize:"6",fontWeight:"bold",children:"M-SH"})]}),w.jsxs("g",{onMouseEnter:()=>g("femaleRR"),onMouseLeave:()=>g(null),className:"cursor-pointer",children:[w.jsx("rect",{x:"80",y:"330",width:"25",height:"25",fill:"#831843",stroke:"#ec4899",strokeWidth:"2"}),w.jsx("text",{x:"92",y:"370",textAnchor:"middle",fill:"white",fontSize:"6",fontWeight:"bold",children:"F-RR"})]}),w.jsxs("g",{onMouseEnter:()=>g("femaleShower"),onMouseLeave:()=>g(null),className:"cursor-pointer",children:[w.jsx("rect",{x:"110",y:"330",width:"25",height:"25",fill:"#9d174d",stroke:"#f472b6",strokeWidth:"2"}),w.jsx("text",{x:"122",y:"370",textAnchor:"middle",fill:"white",fontSize:"6",fontWeight:"bold",children:"F-SH"})]}),w.jsxs("g",{onMouseEnter:()=>g("coffee"),onMouseLeave:()=>g(null),className:"cursor-pointer",children:[w.jsx("rect",{x:"145",y:"330",width:"60",height:"45",fill:"#78350f",stroke:"#b45309",strokeWidth:"2"}),w.jsx("text",{x:"175",y:"355",textAnchor:"middle",fill:"white",fontSize:"7",fontWeight:"bold",children:"COFFEE"}),w.jsx("text",{x:"175",y:"365",textAnchor:"middle",fill:"white",fontSize:"7",fontWeight:"bold",children:"SHOP"})]}),w.jsx("rect",{x:"210",y:"330",width:"25",height:"45",fill:"#1e293b",stroke:"#475569",strokeWidth:"2",strokeDasharray:"4"}),w.jsx("text",{x:"222",y:"355",textAnchor:"middle",fill:"#64748b",fontSize:"5",fontWeight:"bold",children:"GAP"}),w.jsxs("g",{onMouseEnter:()=>g("parking"),onMouseLeave:()=>g(null),className:"cursor-pointer",children:[w.jsx("rect",{x:"240",y:"330",width:"260",height:"45",fill:"#292524",stroke:"#57534e",strokeWidth:"2"}),[0,1,2,3,4,5,6,7].map(kt=>w.jsxs("g",{children:[w.jsx("rect",{x:245+kt*31,y:332,width:"28",height:"40",fill:"#1c1917",stroke:"#44403c",strokeWidth:"1"}),w.jsxs("text",{x:259+kt*31,y:355,textAnchor:"middle",fill:"#57534e",fontSize:"8",fontWeight:"bold",children:["P",kt+1]})]},`p-${kt}`))]}),w.jsx("text",{x:"370",y:"390",textAnchor:"middle",fill:"#a8a29e",fontSize:"6",fontWeight:"bold",children:"PARKING (8 slots)"}),!Ct&&w.jsxs("g",{children:[w.jsx("rect",{x:"230",y:"295",width:"5",height:"35",fill:"#0ea5e9",fillOpacity:"0.3",stroke:"#38bdf8",strokeWidth:"2"}),w.jsx("text",{x:"232",y:"290",textAnchor:"middle",fill:"#38bdf8",fontSize:"6",fontWeight:"bold",children:"ENTRY"})]}),l&&w.jsxs("g",{children:[w.jsx("line",{x1:"20",y1:"12",x2:"500",y2:"12",stroke:"#f59e0b",strokeWidth:"1"}),w.jsxs("text",{x:"260",y:"9",textAnchor:"middle",fill:"#f59e0b",fontSize:"8",fontWeight:"bold",children:[zt(40)," (WIDTH)"]}),w.jsx("line",{x1:"508",y1:"20",x2:"508",y2:"300",stroke:"#f59e0b",strokeWidth:"1"}),w.jsx("text",{x:"515",y:"160",fill:"#f59e0b",fontSize:"8",fontWeight:"bold",transform:"rotate(90, 515, 160)",children:zt(23)})]}),m&&w.jsxs("g",{transform:"translate(385, 40)",children:[w.jsx("rect",{width:"110",height:Ct?145:120,fill:"#0f172a",fillOpacity:"0.95",stroke:"#475569",strokeWidth:"1",rx:"4"}),w.jsx("text",{x:"55",y:"14",textAnchor:"middle",fill:"white",fontSize:"8",fontWeight:"bold",children:"LEGEND"}),w.jsx("rect",{x:"6",y:"22",width:"12",height:"9",fill:Ct?"#c2410c":"#115e3a",stroke:Ct?"#f97316":"#22c55e",strokeWidth:"1"}),w.jsx("text",{x:"24",y:"29",fill:"#94a3b8",fontSize:"6",children:"Courts"}),w.jsx("rect",{x:"6",y:"36",width:"12",height:"9",fill:"#78350f",stroke:"#b45309",strokeWidth:"1"}),w.jsx("text",{x:"24",y:"43",fill:"#94a3b8",fontSize:"6",children:"Coffee Shop"}),w.jsx("rect",{x:"6",y:"50",width:"12",height:"9",fill:"#1e3a8a",stroke:"#3b82f6",strokeWidth:"1"}),w.jsx("text",{x:"24",y:"57",fill:"#94a3b8",fontSize:"6",children:"Male RR"}),w.jsx("rect",{x:"6",y:"64",width:"12",height:"9",fill:"#831843",stroke:"#ec4899",strokeWidth:"1"}),w.jsx("text",{x:"24",y:"71",fill:"#94a3b8",fontSize:"6",children:"Female RR"}),w.jsx("rect",{x:"6",y:"78",width:"12",height:"9",fill:"#292524",stroke:"#57534e",strokeWidth:"1"}),w.jsx("text",{x:"24",y:"85",fill:"#94a3b8",fontSize:"6",children:"Parking"}),Ct&&w.jsxs("g",{children:[w.jsx("circle",{cx:"12",cy:"100",r:"5",fill:"#dc2626",stroke:"#991b1b",strokeWidth:"1"}),w.jsx("text",{x:"24",y:"102",fill:"#94a3b8",fontSize:"6",children:"Posts (15)"})]})]}),w.jsxs("text",{x:"20",y:"410",fill:"#64748b",fontSize:"6",children:["Scale 1:100 | ",S]}),w.jsxs("text",{x:"500",y:"410",textAnchor:"end",fill:"#64748b",fontSize:"6",children:["PB-",Ct?"IN":"OUT","-001"]})]})}),i==="3d"&&w.jsxs("div",{className:"relative",children:[w.jsx("div",{ref:at,className:"w-full h-96 bg-slate-900 rounded-xl border border-slate-700 overflow-hidden mb-4"}),z==="walkthrough"&&w.jsx("div",{className:"absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-4 py-2 rounded-lg",children:w.jsxs("div",{className:"flex items-center gap-4",children:[w.jsx("span",{className:"font-semibold text-purple-400",children:"Walk Mode"}),w.jsxs("span",{children:[w.jsx("kbd",{className:"bg-slate-700 px-1.5 py-0.5 rounded",children:"W"}),"/",w.jsx("kbd",{className:"bg-slate-700 px-1.5 py-0.5 rounded",children:"↑"})," Forward"]}),w.jsxs("span",{children:[w.jsx("kbd",{className:"bg-slate-700 px-1.5 py-0.5 rounded",children:"S"}),"/",w.jsx("kbd",{className:"bg-slate-700 px-1.5 py-0.5 rounded",children:"↓"})," Back"]}),w.jsxs("span",{children:[w.jsx("kbd",{className:"bg-slate-700 px-1.5 py-0.5 rounded",children:"A"}),"/",w.jsx("kbd",{className:"bg-slate-700 px-1.5 py-0.5 rounded",children:"←"})," Turn Left"]}),w.jsxs("span",{children:[w.jsx("kbd",{className:"bg-slate-700 px-1.5 py-0.5 rounded",children:"D"}),"/",w.jsx("kbd",{className:"bg-slate-700 px-1.5 py-0.5 rounded",children:"→"})," Turn Right"]})]})}),z==="orbit"&&w.jsx("div",{className:"absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-4 py-2 rounded-lg",children:w.jsxs("div",{className:"flex items-center gap-4",children:[w.jsx("span",{className:"font-semibold text-teal-400",children:"Orbit Mode"}),w.jsx("span",{children:"🖱️ Drag to rotate"}),w.jsx("span",{children:"Scroll to zoom"}),w.jsx("span",{children:"Right-click drag to pan"})]})})]}),v&&i==="2d"&&fe[v]&&w.jsxs("div",{className:`rounded-lg p-3 border mb-4 ${Ct?"bg-orange-900/20 border-orange-700":"bg-green-900/20 border-green-700"}`,children:[w.jsx("h3",{className:"text-white font-bold",children:fe[v].name}),w.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-1 text-sm",children:[w.jsxs("div",{children:[w.jsx("span",{className:"text-slate-400",children:"Size:"})," ",w.jsx("span",{className:"text-white",children:fe[v].size})]}),w.jsxs("div",{children:[w.jsx("span",{className:"text-slate-400",children:"Dims:"})," ",w.jsx("span",{className:"text-white",children:fe[v].dims})]}),w.jsxs("div",{className:"col-span-2",children:[w.jsx("span",{className:"text-slate-400",children:"Features:"})," ",w.jsx("span",{className:"text-white",children:fe[v].features})]})]})]}),w.jsxs("div",{className:"grid grid-cols-4 gap-2",children:[w.jsxs("div",{className:`rounded-lg p-2 border ${Ct?"bg-orange-900/30 border-orange-700":"bg-green-900/30 border-green-700"}`,children:[w.jsx("div",{className:`font-bold text-lg ${Ct?"text-orange-400":"text-green-400"}`,children:"8"}),w.jsxs("div",{className:"text-slate-400 text-xs",children:[Ct?"Covered":"Outdoor"," Courts"]})]}),w.jsxs("div",{className:"bg-amber-900/30 rounded-lg p-2 border border-amber-700",children:[w.jsx("div",{className:"text-amber-400 font-bold text-lg",children:"1"}),w.jsx("div",{className:"text-slate-400 text-xs",children:"Coffee Shop"})]}),w.jsxs("div",{className:"bg-purple-900/30 rounded-lg p-2 border border-purple-700",children:[w.jsx("div",{className:"text-purple-400 font-bold text-lg",children:"4"}),w.jsx("div",{className:"text-slate-400 text-xs",children:"RR/Showers"})]}),w.jsxs("div",{className:"bg-stone-800/50 rounded-lg p-2 border border-stone-600",children:[w.jsx("div",{className:"text-stone-400 font-bold text-lg",children:"8"}),w.jsx("div",{className:"text-slate-400 text-xs",children:"Parking"})]})]}),Ct&&w.jsxs("div",{className:"mt-3 space-y-3",children:[w.jsxs("div",{className:"bg-slate-800 rounded-lg p-4 border border-slate-700",children:[w.jsxs("h3",{className:"text-white font-bold mb-3 flex items-center gap-2",children:[w.jsx("span",{className:"text-orange-400",children:"🏗️"})," Covered Structure Specifications"]}),w.jsxs("div",{className:"mb-4",children:[w.jsx("h4",{className:"text-slate-300 text-sm font-semibold mb-2 border-b border-slate-600 pb-1",children:"Building Dimensions"}),w.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2 text-sm",children:[w.jsxs("div",{className:"bg-slate-900 rounded p-2",children:[w.jsx("div",{className:"text-slate-400 text-xs",children:"Length"}),w.jsx("div",{className:"text-white font-bold",children:"48m"}),w.jsx("div",{className:"text-slate-500 text-xs",children:"(157.5 ft)"})]}),w.jsxs("div",{className:"bg-slate-900 rounded p-2",children:[w.jsx("div",{className:"text-slate-400 text-xs",children:"Width"}),w.jsx("div",{className:"text-white font-bold",children:"28m"}),w.jsx("div",{className:"text-slate-500 text-xs",children:"(91.9 ft)"})]}),w.jsxs("div",{className:"bg-slate-900 rounded p-2",children:[w.jsx("div",{className:"text-slate-400 text-xs",children:"Covered Area"}),w.jsx("div",{className:"text-teal-400 font-bold",children:"1,344 sqm"}),w.jsx("div",{className:"text-slate-500 text-xs",children:"(14,467 sqft)"})]}),w.jsxs("div",{className:"bg-slate-900 rounded p-2",children:[w.jsx("div",{className:"text-slate-400 text-xs",children:"Perimeter"}),w.jsx("div",{className:"text-white font-bold",children:"152m"}),w.jsx("div",{className:"text-slate-500 text-xs",children:"(498.7 ft)"})]})]})]}),w.jsxs("div",{className:"mb-4",children:[w.jsx("h4",{className:"text-slate-300 text-sm font-semibold mb-2 border-b border-slate-600 pb-1",children:"Roof Structure (Open Gable)"}),w.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2 text-sm",children:[w.jsxs("div",{className:"bg-slate-900 rounded p-2",children:[w.jsx("div",{className:"text-slate-400 text-xs",children:"Eave Height"}),w.jsx("div",{className:"text-white font-bold",children:"9m"}),w.jsx("div",{className:"text-slate-500 text-xs",children:"(29.5 ft)"})]}),w.jsxs("div",{className:"bg-slate-900 rounded p-2",children:[w.jsx("div",{className:"text-slate-400 text-xs",children:"Ridge Height"}),w.jsx("div",{className:"text-yellow-400 font-bold",children:"12m"}),w.jsx("div",{className:"text-slate-500 text-xs",children:"(39.4 ft)"})]}),w.jsxs("div",{className:"bg-slate-900 rounded p-2",children:[w.jsx("div",{className:"text-slate-400 text-xs",children:"Roof Pitch"}),w.jsx("div",{className:"text-orange-400 font-bold",children:"12°"}),w.jsx("div",{className:"text-slate-500 text-xs",children:"(2.5:12 slope)"})]}),w.jsxs("div",{className:"bg-slate-900 rounded p-2",children:[w.jsx("div",{className:"text-slate-400 text-xs",children:"Clearance"}),w.jsx("div",{className:"text-green-400 font-bold",children:"9m min"}),w.jsx("div",{className:"text-slate-500 text-xs",children:"(competitive std)"})]})]})]}),w.jsxs("div",{className:"mb-4",children:[w.jsx("h4",{className:"text-slate-300 text-sm font-semibold mb-2 border-b border-slate-600 pb-1",children:"Structural Components"}),w.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-2 text-sm",children:[w.jsxs("div",{className:"bg-slate-900 rounded p-2 border-l-4 border-red-500",children:[w.jsx("div",{className:"text-slate-400 text-xs",children:"Steel Posts"}),w.jsx("div",{className:"text-red-400 font-bold",children:"15 columns"}),w.jsx("div",{className:"text-slate-500 text-xs",children:"400mm Ø × 9m H"})]}),w.jsxs("div",{className:"bg-slate-900 rounded p-2 border-l-4 border-yellow-500",children:[w.jsx("div",{className:"text-slate-400 text-xs",children:"Ridge Beam"}),w.jsx("div",{className:"text-yellow-400 font-bold",children:"1 × 48m"}),w.jsx("div",{className:"text-slate-500 text-xs",children:"W400 × 400mm"})]}),w.jsxs("div",{className:"bg-slate-900 rounded p-2 border-l-4 border-yellow-500",children:[w.jsx("div",{className:"text-slate-400 text-xs",children:"Eave Beams"}),w.jsx("div",{className:"text-yellow-400 font-bold",children:"2 × 48m"}),w.jsx("div",{className:"text-slate-500 text-xs",children:"W300 × 300mm"})]}),w.jsxs("div",{className:"bg-slate-900 rounded p-2 border-l-4 border-orange-500",children:[w.jsx("div",{className:"text-slate-400 text-xs",children:"A-Frame Trusses"}),w.jsx("div",{className:"text-orange-400 font-bold",children:"5 trusses"}),w.jsx("div",{className:"text-slate-500 text-xs",children:"@ 12m spacing"})]}),w.jsxs("div",{className:"bg-slate-900 rounded p-2 border-l-4 border-amber-600",children:[w.jsx("div",{className:"text-slate-400 text-xs",children:"Purlins"}),w.jsx("div",{className:"text-amber-500 font-bold",children:"6 × 48m"}),w.jsx("div",{className:"text-slate-500 text-xs",children:"C150 × 150mm"})]}),w.jsxs("div",{className:"bg-slate-900 rounded p-2 border-l-4 border-amber-700",children:[w.jsx("div",{className:"text-slate-400 text-xs",children:"King Posts"}),w.jsx("div",{className:"text-amber-600 font-bold",children:"5 × 3m"}),w.jsx("div",{className:"text-slate-500 text-xs",children:"300 × 300mm"})]})]})]}),w.jsxs("div",{className:"mb-4",children:[w.jsx("h4",{className:"text-slate-300 text-sm font-semibold mb-2 border-b border-slate-600 pb-1",children:"Roofing Material"}),w.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2 text-sm",children:[w.jsxs("div",{className:"bg-slate-900 rounded p-2",children:[w.jsx("div",{className:"text-slate-400 text-xs",children:"Type"}),w.jsx("div",{className:"text-white font-bold",children:"Metal Deck"}),w.jsx("div",{className:"text-slate-500 text-xs",children:"Pre-painted"})]}),w.jsxs("div",{className:"bg-slate-900 rounded p-2",children:[w.jsx("div",{className:"text-slate-400 text-xs",children:"Thickness"}),w.jsx("div",{className:"text-white font-bold",children:"0.5mm"}),w.jsx("div",{className:"text-slate-500 text-xs",children:"(GA 26)"})]}),w.jsxs("div",{className:"bg-slate-900 rounded p-2",children:[w.jsx("div",{className:"text-slate-400 text-xs",children:"Color"}),w.jsx("div",{className:"text-slate-300 font-bold",children:"Silver Gray"}),w.jsx("div",{className:"text-slate-500 text-xs",children:"Heat reflective"})]}),w.jsxs("div",{className:"bg-slate-900 rounded p-2",children:[w.jsx("div",{className:"text-slate-400 text-xs",children:"Coverage"}),w.jsx("div",{className:"text-teal-400 font-bold",children:"~1,400 sqm"}),w.jsx("div",{className:"text-slate-500 text-xs",children:"(incl. overlap)"})]})]})]}),w.jsxs("div",{children:[w.jsx("h4",{className:"text-slate-300 text-sm font-semibold mb-2 border-b border-slate-600 pb-1",children:"Ventilation & Lighting"}),w.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2 text-sm",children:[w.jsxs("div",{className:"bg-slate-900 rounded p-2",children:[w.jsx("div",{className:"text-slate-400 text-xs",children:"Wall Type"}),w.jsx("div",{className:"text-green-400 font-bold",children:"Open Air"}),w.jsx("div",{className:"text-slate-500 text-xs",children:"No walls/natural"})]}),w.jsxs("div",{className:"bg-slate-900 rounded p-2",children:[w.jsx("div",{className:"text-slate-400 text-xs",children:"Gable Ends"}),w.jsx("div",{className:"text-cyan-400 font-bold",children:"Open Mesh"}),w.jsx("div",{className:"text-slate-500 text-xs",children:"Cross ventilation"})]}),w.jsxs("div",{className:"bg-slate-900 rounded p-2",children:[w.jsx("div",{className:"text-slate-400 text-xs",children:"LED Lights"}),w.jsx("div",{className:"text-yellow-300 font-bold",children:"6 units"}),w.jsx("div",{className:"text-slate-500 text-xs",children:"500 lux @ court"})]}),w.jsxs("div",{className:"bg-slate-900 rounded p-2",children:[w.jsx("div",{className:"text-slate-400 text-xs",children:"Power Load"}),w.jsx("div",{className:"text-white font-bold",children:"~15 kW"}),w.jsx("div",{className:"text-slate-500 text-xs",children:"Lighting system"})]})]})]})]}),w.jsxs("div",{className:"bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg p-4 border border-slate-600",children:[w.jsxs("h4",{className:"text-white font-bold mb-2 flex items-center gap-2",children:[w.jsx("span",{children:"📦"})," Estimated Primary Materials"]}),w.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-5 gap-2 text-xs",children:[w.jsxs("div",{className:"bg-slate-900/50 rounded p-2 text-center",children:[w.jsx("div",{className:"text-red-400 font-bold text-lg",children:"~12 tons"}),w.jsx("div",{className:"text-slate-400",children:"Steel Posts"})]}),w.jsxs("div",{className:"bg-slate-900/50 rounded p-2 text-center",children:[w.jsx("div",{className:"text-orange-400 font-bold text-lg",children:"~8 tons"}),w.jsx("div",{className:"text-slate-400",children:"Trusses/Beams"})]}),w.jsxs("div",{className:"bg-slate-900/50 rounded p-2 text-center",children:[w.jsx("div",{className:"text-slate-300 font-bold text-lg",children:"~1,400 sqm"}),w.jsx("div",{className:"text-slate-400",children:"Roofing Sheets"})]}),w.jsxs("div",{className:"bg-slate-900/50 rounded p-2 text-center",children:[w.jsx("div",{className:"text-amber-500 font-bold text-lg",children:"~3 tons"}),w.jsx("div",{className:"text-slate-400",children:"Purlins"})]}),w.jsxs("div",{className:"bg-slate-900/50 rounded p-2 text-center",children:[w.jsx("div",{className:"text-gray-400 font-bold text-lg",children:"~45 cum"}),w.jsx("div",{className:"text-slate-400",children:"Concrete Footings"})]})]})]})]}),w.jsx("p",{className:"text-center text-slate-500 text-xs mt-3",children:"Toggle Indoor/Outdoor - Switch 2D/3D views - Hover for details"})]})})}YS.createRoot(document.getElementById("root")).render(w.jsx(HS.StrictMode,{children:w.jsx(wA,{})}));
