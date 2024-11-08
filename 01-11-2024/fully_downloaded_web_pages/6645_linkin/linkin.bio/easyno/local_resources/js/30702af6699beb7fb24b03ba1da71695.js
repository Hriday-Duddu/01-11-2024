/*! For license information please see chunk.813.060da1ced98bc5575a9d.js.LICENSE.txt */
(self.webpackChunk_ember_auto_import_=self.webpackChunk_ember_auto_import_||[]).push([[813],{6285:(t,e,r)=>{"use strict"
r.d(e,{r:()=>a,y:()=>s})
var n=r(9835),i=r(8095),o=r(8398)
function a(t){var e=(0,o.f0)({version:"4.42.2",onReady:function(t){t()}},t)
return Object.defineProperty(e,"_setDebug",{get:function(){return i.yD},enumerable:!1}),e}function s(t,e,r){var i=t[e]
t[e]=r,i&&i.q&&i.q.forEach((function(t){return(0,n.Z)(t,"onReady callback threw an error:")()}))}},1985:(t,e,r)=>{"use strict"
r.d(e,{O:()=>o,y:()=>a})
var n=r(8095),i=r(1398)
function o(t,e,r,n){return a(t,[e],r,n)}function a(t,e,r,o){var a=void 0===o?{}:o,s=a.once,u=a.capture,c=a.passive,f=(0,n.zk)(s?function(t){d(),r(t)}:r),h=c?{capture:u,passive:c}:u,l=(0,i.I)(t,"addEventListener")
function d(){var r=(0,i.I)(t,"removeEventListener")
e.forEach((function(e){return r.call(t,e,f,h)}))}return e.forEach((function(e){return l.call(t,e,f,h)})),{stop:d}}},2336:(t,e,r)=>{"use strict"
r.d(e,{MI:()=>s,WQ:()=>l,d8:()=>u,ej:()=>c,kT:()=>f,oX:()=>h})
var n,i=r(8505),o=r(732),a=r(5868),s=o.WT
function u(t,e,r,n){var i=new Date
i.setTime(i.getTime()+r)
var o="expires=".concat(i.toUTCString()),a=n&&n.crossSite?"none":"strict",s=n&&n.domain?";domain=".concat(n.domain):"",u=n&&n.secure?";secure":""
document.cookie="".concat(t,"=").concat(e,";").concat(o,";path=/;samesite=").concat(a).concat(s).concat(u)}function c(t){return(0,a.MY)(document.cookie,t)}function f(t,e){u(t,"",0,e)}function h(t){if(void 0===document.cookie||null===document.cookie)return!1
try{var e="dd_cookie_test_".concat((0,a.DO)()),r="test"
u(e,r,o.yR,t)
var n=c(e)===r
return f(e,t),n}catch(t){return i.jf.error(t),!1}}function l(){if(void 0===n){for(var t="dd_site_test_".concat((0,a.DO)()),e=window.location.hostname.split("."),r=e.pop();e.length&&!c(t);)r="".concat(e.pop(),".").concat(r),u(t,"test",o.WT,{domain:r})
f(t,{domain:r}),n=r}return n}},5316:(t,e,r)=>{"use strict"
r.d(e,{y:()=>c})
var n,i=r(9286),o=r(8095),a=r(45),s=r(732),u=r(3416)
function c(){var t
return n||(t=new a.y((function(){if(window.fetch)return(0,i.Su)(window,"fetch",(function(e){return function(r,n){var i,a=(0,o.L6)(f,null,[t,r,n])
return a?(i=e.call(this,a.input,a.init),(0,o.L6)(h,null,[t,i,a])):i=e.call(this,r,n),i}})).stop})),n=t),n}function f(t,e,r){var n=r&&r.method||e instanceof Request&&e.method||"GET",i=e instanceof Request?e.url:(0,u.D5)(String(e)),o={state:"start",init:r,input:e,method:n,startClocks:(0,s.$I)(),url:i}
return t.notify(o),o}function h(t,e,r){var n=function(e){var n=r
n.state="resolve","stack"in e||e instanceof Error?(n.status=0,n.isAborted=e instanceof DOMException&&e.code===DOMException.ABORT_ERR,n.error=e):"status"in e&&(n.response=e,n.responseType=e.type,n.status=e.status,n.isAborted=!1),t.notify(n)}
e.then((0,o.zk)(n),(0,o.zk)(n))}},5528:(t,e,r)=>{"use strict"
r.d(e,{PT:()=>f,Pd:()=>c,k$:()=>u})
var n=r(2089),i=r(45),o=r(8398),a=r(2807),s=r(1985),u={HIDDEN:"visibility_hidden",UNLOADING:"before_unload",PAGEHIDE:"page_hide",FROZEN:"page_frozen"}
function c(){var t=new i.y((function(){var e=(0,n.W_)(n.uh.PAGEHIDE),r=(0,s.y)(window,["visibilitychange","freeze","pagehide"],(function(r){"pagehide"===r.type&&e?t.notify({reason:u.PAGEHIDE}):"visibilitychange"===r.type&&"hidden"===document.visibilityState?t.notify({reason:u.HIDDEN}):"freeze"===r.type&&t.notify({reason:u.FROZEN})}),{capture:!0}).stop,i=a.Z
return e||(i=(0,s.O)(window,"beforeunload",(function(){t.notify({reason:u.UNLOADING})})).stop),function(){r(),i()}}))
return t}function f(t){return(0,o.q9)((0,o.TT)(u),t)}},9617:(t,e,r)=>{"use strict"
r.d(e,{S:()=>h})
var n,i=r(9286),o=r(45),a=r(732),s=r(3416),u=r(4953),c=r(1985),f=new WeakMap
function h(){var t
return n||(t=new o.y((function(){var e=(0,i.Lm)(XMLHttpRequest.prototype,"open",{before:l}).stop,r=(0,i.Lm)(XMLHttpRequest.prototype,"send",{before:function(){d.call(this,t)}}).stop,n=(0,i.Lm)(XMLHttpRequest.prototype,"abort",{before:p}).stop
return function(){e(),r(),n()}})),n=t),n}function l(t,e){f.set(this,{state:"open",method:t,url:(0,s.D5)(String(e))})}function d(t){var e=this,r=f.get(this)
if(r){var n=r
n.state="start",n.startTime=(0,a._q)(),n.startClocks=(0,a.$I)(),n.isAborted=!1,n.xhr=this
var o=!1,s=(0,i.Lm)(this,"onreadystatechange",{before:function(){this.readyState===XMLHttpRequest.DONE&&h()}}).stop,h=function(){if(l(),s(),!o){o=!0
var i=r
i.state="complete",i.duration=(0,a._J)(n.startClocks.timeStamp,(0,a.n$)()),i.status=e.status,t.notify((0,u.mv)(i))}},l=(0,c.O)(this,"loadend",h).stop
t.notify(n)}}function p(){var t=f.get(this)
t&&(t.isAborted=!0)}},9083:(t,e,r)=>{"use strict"
r.d(e,{Jj:()=>_,HZ:()=>S,JZ:()=>E,fP:()=>M})
var n=r(2336),i=r(9835),o=r(8505),a=r(2089),s=r(732),u=r(8483),c=r(6775),f=r(4953),h=r(8398),l=r(3416),d=r(5868),p=r(6935),b={logs:"logs",rum:"rum",sessionReplay:"session-replay"},m={logs:"logs",rum:"rum",sessionReplay:"replay"}
function v(t,e,r){var n=function(t,e){var r="/api/v2/".concat(m[e]),n=t.proxy,i=t.proxyUrl
if(n){var o=(0,l.D5)(n)
return function(t){return"".concat(o,"?ddforward=").concat(encodeURIComponent("".concat(r,"?").concat(t)))}}var a=function(t,e){var r=t.site,n=void 0===r?p.D_:r,i=t.internalAnalyticsSubdomain
if(i&&n===p.D_)return"".concat(i,".").concat(p.D_)
var o=n.split("."),a=o.pop(),s=n!==p.G8?"".concat(b[e],"."):""
return"".concat(s,"browser-intake-").concat(o.join("-"),".").concat(a)}(t,e)
if(void 0===n&&i){var s=(0,l.D5)(i)
return function(t){return"".concat(s,"?ddforward=").concat(encodeURIComponent("https://".concat(a).concat(r,"?").concat(t)))}}return function(t){return"https://".concat(a).concat(r,"?").concat(t)}}(t,e)
return{build:function(i,o,u){var c=function(t,e,r,n,i,o){var u=t.clientToken,c=t.internalAnalyticsSubdomain,f=["sdk_version:".concat("4.42.2"),"api:".concat(n)].concat(r)
i&&(0,a.W_)(a.uh.COLLECT_FLUSH_REASON)&&f.push("flush_reason:".concat(i)),o&&f.push("retry_count:".concat(o.count),"retry_after:".concat(o.lastFailureStatus))
var h=["ddsource=browser","ddtags=".concat(encodeURIComponent(f.join(","))),"dd-api-key=".concat(u),"dd-evp-origin-version=".concat(encodeURIComponent("4.42.2")),"dd-evp-origin=browser","dd-request-id=".concat((0,d.DO)())]
return"rum"===e&&h.push("batch_time=".concat((0,s.n$)())),c&&h.reverse(),h.join("&")}(t,e,r,i,o,u)
return n(c)},urlPrefix:n(""),endpointType:e}}var g=200,y=/[^a-z0-9_:./-]/
function w(t,e){var r=g-t.length-1;(e.length>r||y.test(e))&&o.jf.warn("".concat(t," value doesn't meet tag requirements and will be sanitized"))
var n=e.replace(/,/g,"_")
return"".concat(t,":").concat(n)}var _={ALLOW:"allow",MASK:"mask",MASK_USER_INPUT:"mask-user-input"}
function M(t){var e,r,n
if(t&&t.clientToken){var l=null!==(e=t.sessionSampleRate)&&void 0!==e?e:t.sampleRate
if(void 0===l||(0,u.zz)(l))if(void 0===t.telemetrySampleRate||(0,u.zz)(t.telemetrySampleRate)){if(void 0===t.telemetryConfigurationSampleRate||(0,u.zz)(t.telemetryConfigurationSampleRate))return Array.isArray(t.enableExperimentalFeatures)&&(0,a.vn)(t.enableExperimentalFeatures.filter((function(t){return(0,f.E5)(a.uh,t)}))),(0,h.f0)({beforeSend:t.beforeSend&&(0,i.Z)(t.beforeSend,"beforeSend threw an error:"),cookieOptions:S(t),sessionSampleRate:null!=l?l:100,telemetrySampleRate:null!==(r=t.telemetrySampleRate)&&void 0!==r?r:20,telemetryConfigurationSampleRate:null!==(n=t.telemetryConfigurationSampleRate)&&void 0!==n?n:5,service:t.service,silentMultipleInit:!!t.silentMultipleInit,batchBytesLimit:16*c.Hi,eventRateLimiterThreshold:3e3,maxTelemetryEventsPerPage:15,flushTimeout:30*s.WT,batchMessagesLimit:50,messageBytesLimit:256*c.Hi},function(t){var e=function(t){var e=t.env,r=t.service,n=t.version,i=t.datacenter,o=[]
return e&&o.push(w("env",e)),r&&o.push(w("service",r)),n&&o.push(w("version",n)),i&&o.push(w("datacenter",i)),o}(t),r=function(t,e){return{logsEndpointBuilder:v(t,"logs",e),rumEndpointBuilder:v(t,"rum",e),sessionReplayEndpointBuilder:v(t,"sessionReplay",e)}}(t,e),n=(0,h.TT)(r).map((function(t){return t.urlPrefix})),i=function(t,e,r){if(t.replica){var n=(0,h.f0)({},t,{site:p.D_,clientToken:t.replica.clientToken}),i={logsEndpointBuilder:v(n,"logs",r),rumEndpointBuilder:v(n,"rum",r)}
return e.push.apply(e,(0,h.TT)(i).map((function(t){return t.urlPrefix}))),(0,h.f0)({applicationId:t.replica.applicationId},i)}}(t,n,e)
return(0,h.f0)({isIntakeUrl:function(t){return n.some((function(e){return 0===t.indexOf(e)}))},replica:i,site:t.site||p.D_},r)}(t))
o.jf.error("Telemetry Configuration Sample Rate should be a number between 0 and 100")}else o.jf.error("Telemetry Sample Rate should be a number between 0 and 100")
else o.jf.error("Session Sample Rate should be a number between 0 and 100")}else o.jf.error("Client Token is not configured, we will not send any data.")}function S(t){var e={}
return e.secure=function(t){return!!t.useSecureSessionCookie||!!t.useCrossSiteSessionCookie}(t),e.crossSite=!!t.useCrossSiteSessionCookie,t.trackSessionAcrossSubdomains&&(e.domain=(0,n.WQ)()),e}function E(t){var e,r,n=null!==(e=t.proxy)&&void 0!==e?e:t.proxyUrl
return{session_sample_rate:null!==(r=t.sessionSampleRate)&&void 0!==r?r:t.sampleRate,telemetry_sample_rate:t.telemetrySampleRate,telemetry_configuration_sample_rate:t.telemetryConfigurationSampleRate,use_before_send:!!t.beforeSend,use_cross_site_session_cookie:t.useCrossSiteSessionCookie,use_secure_session_cookie:t.useSecureSessionCookie,use_proxy:void 0!==n?!!n:void 0,silent_multiple_init:t.silentMultipleInit,track_session_across_subdomains:t.trackSessionAcrossSubdomains,track_resources:t.trackResources,track_long_task:t.trackLongTasks}}},6935:(t,e,r)=>{"use strict"
r.d(e,{DZ:()=>n,D_:()=>i,Ds:()=>o,G8:()=>a,y7:()=>s})
var n="datad0g.com",i="datadoghq.com",o="datadoghq.eu",a="ap1.datadoghq.com",s="ddog-gov.com"},9e3:(t,e,r)=>{"use strict"
r.d(e,{a:()=>l})
var n=r(2543),i=r(8935),o=r(45),a=r(8505),s=r(8095),u=r(7393),c=r(8398),f=r(3374),h={}
function l(t){var e=t.map((function(t){return h[t]||(h[t]=function(t){var e=new o.y((function(){var r=a.jG[t]
return a.jG[t]=function(){for(var o=[],h=0;h<arguments.length;h++)o[h]=arguments[h]
r.apply(console,o)
var l=(0,i.Xp)();(0,s.L6)((function(){e.notify(function(t,e,r){var o,s,h=t.map((function(t){return function(t){return"string"==typeof t?(0,u.N)(t):t instanceof Error?(0,i.jN)((0,n._)(t)):(0,f.l)((0,u.N)(t),void 0,2)}(t)})).join(" ")
if(e===a.vA.error){var l=(0,c.sE)(t,(function(t){return t instanceof Error}))
o=l?(0,i.P3)((0,n._)(l)):void 0,s=(0,i.un)(l),h="console error: ".concat(h)}return{api:e,message:h,stack:o,handlingStack:r,fingerprint:s}}(o,t,l))}))},function(){a.jG[t]=r}}))
return e}(t)),h[t]}))
return o.$.apply(void 0,e)}},8935:(t,e,r)=>{"use strict"
r.d(e,{AP:()=>c,K$:()=>u,P3:()=>h,Xp:()=>p,jN:()=>d,u5:()=>l,un:()=>f})
var n=r(2543),i=r(8095),o=r(7393),a=r(2807),s=r(3374),u="No stack, consider using an instance of Error"
function c(t){var e=t.stackTrace,r=t.originalError,i=t.handlingStack,a=t.startClocks,c=t.nonErrorPrefix,l=t.source,d=t.handling,p=r instanceof Error,b=function(t,e,r,n){return(null==t?void 0:t.message)&&(null==t?void 0:t.name)?t.message:e?"Empty message":"".concat(r," ").concat((0,s.l)((0,o.N)(n)))}(e,p,c,r),m=function(t,e){return void 0!==e&&(!!t||e.stack.length>0&&(e.stack.length>1||void 0!==e.stack[0].url))}(p,e)?h(e):u,v=p?function(t,e){for(var r=t,i=[];(null==r?void 0:r.cause)instanceof Error&&i.length<10;){var o=(0,n._)(r.cause)
i.push({message:r.cause.message,source:e,type:null==o?void 0:o.name,stack:o&&h(o)}),r=r.cause}return i.length?i:void 0}(r,l):void 0
return{startClocks:a,source:l,handling:d,handlingStack:i,originalError:r,type:null==e?void 0:e.name,message:b,stack:m,causes:v,fingerprint:f(r)}}function f(t){return t instanceof Error&&"dd_fingerprint"in t?String(t.dd_fingerprint):void 0}function h(t){var e=d(t)
return t.stack.forEach((function(t){var r="?"===t.func?"<anonymous>":t.func,n=t.args&&t.args.length>0?"(".concat(t.args.join(", "),")"):"",i=t.line?":".concat(t.line):"",o=t.line&&t.column?":".concat(t.column):""
e+="\n  at ".concat(r).concat(n," @ ").concat(t.url).concat(i).concat(o)})),e}function l(t){var e
return null===(e=/@ (.+)/.exec(t))||void 0===e?void 0:e[1]}function d(t){return"".concat(t.name||"Error",": ").concat(t.message)}function p(){var t,e=new Error
if(!e.stack)try{throw e}catch(t){(0,a.Z)()}return(0,i.L6)((function(){var r=(0,n._)(e)
r.stack=r.stack.slice(2),t=h(r)})),t}},6358:(t,e,r)=>{"use strict"
r.d(e,{z:()=>n})
var n={AGENT:"agent",CONSOLE:"console",CUSTOM:"custom",LOGGER:"logger",NETWORK:"network",SOURCE:"source",REPORT:"report"}},6620:(t,e,r)=>{"use strict"
r.d(e,{L:()=>c})
var n=r(732),i=r(9286),o=r(2543),a=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/,s=r(8935),u=r(6358)
function c(t){return r=function(t){return(0,i.Lm)(window,"onerror",{before:function(e,r,n,i,s){var u
if(s instanceof Error)u=(0,o._)(s)
else{var c=[{url:r,column:i,line:n}],f=function(t){var e,r,n
return"[object String]"==={}.toString.call(t)&&(r=(e=a.exec(t))[1],n=e[2]),{name:r,message:n}}(e)
u={name:f.name,message:f.message,stack:c}}t(u,null!=s?s:e)}})}(e=function(e,r){t.notify((0,s.AP)({stackTrace:e,originalError:r,startClocks:(0,n.$I)(),nonErrorPrefix:"Uncaught",source:u.z.SOURCE,handling:"unhandled"}))}).stop,c=function(t){return(0,i.Lm)(window,"onunhandledrejection",{before:function(e){var r=e.reason||"Empty reason",n=(0,o._)(r)
t(n,r)}})}(e).stop,{stop:function(){r(),c()}}
var e,r,c}},3640:(t,e,r)=>{"use strict"
r.d(e,{K:()=>a})
var n=r(7588),i=r(732),o=r(6358)
function a(t,e,r){var a=0,s=!1
return{isLimitReached:function(){if(0===a&&(0,n.iK)((function(){a=0}),i.yR),(a+=1)<=e||s)return s=!1,!1
if(a===e+1){s=!0
try{r({message:"Reached max number of ".concat(t,"s by minute: ").concat(e),source:o.z.AGENT,startClocks:(0,i.$I)()})}finally{s=!1}}return!0}}}},8587:(t,e,r)=>{"use strict"
r.d(e,{_:()=>c,v:()=>f})
var n=r(8935),i=r(8095),o=r(45),a=r(1985),s=r(8398),u=r(5868),c={intervention:"intervention",deprecation:"deprecation",cspViolation:"csp_violation"}
function f(t){var e,r=[];(0,s.q9)(t,c.cspViolation)&&r.push(e=new o.y((function(){return(0,a.O)(document,"securitypolicyviolation",(function(t){e.notify(function(t){var e=c.cspViolation,r="'".concat(t.blockedURI,"' blocked by '").concat(t.effectiveDirective,"' directive")
return{type:c.cspViolation,subtype:t.effectiveDirective,message:"".concat(e,": ").concat(r),stack:h(t.effectiveDirective,t.originalPolicy?"".concat(r,' of the policy "').concat((0,u._z)(t.originalPolicy,100,"..."),'"'):"no policy",t.sourceFile,t.lineNumber,t.columnNumber)}}(t))})).stop})))
var n=t.filter((function(t){return t!==c.cspViolation}))
return n.length&&r.push(function(t){var e=new o.y((function(){if(window.ReportingObserver){var r=(0,i.zk)((function(t){return t.forEach((function(t){var r,n,i
e.notify({type:n=(r=t).type,subtype:(i=r.body).id,message:"".concat(n,": ").concat(i.message),stack:h(i.id,i.message,i.sourceFile,i.lineNumber,i.columnNumber)})}))})),n=new window.ReportingObserver(r,{types:t,buffered:!0})
return n.observe(),function(){n.disconnect()}}}))
return e}(n)),o.$.apply(void 0,r)}function h(t,e,r,i,o){return r&&(0,n.P3)({name:t,message:e,stack:[{func:"?",url:r,line:i,column:o}]})}},363:(t,e,r)=>{"use strict"
r.d(e,{T:()=>i,s:()=>o})
var n=r(732),i=4*n.dV,o=15*n.yR},6917:(t,e,r)=>{"use strict"
r.d(e,{HX:()=>U})
var n,i=r(1079),o=r(732),a=r(1985),s=r(7588),u=r(2336),c=r(1668),f=r(8398),h=r(4953),l=r(5868),d=r(363),p=/^([a-z]+)=([a-z0-9-]+)$/,b="&",m="_dd_s",v=10,g=100,y=[]
function w(t,e){var r
if(void 0===e&&(e=0),n||(n=t),t===n)if(e>=g)S()
else{var i,o=A()
if(_()){if(o.lock)return void M(t,e)
if(i=(0,l.DO)(),o.lock=i,k(o,t.options),(o=A()).lock!==i)return void M(t,e)}var a=t.process(o)
if(_()&&(o=A()).lock!==i)M(t,e)
else{if(a&&E(a,t.options),_()&&(!a||!R(a))){if((o=A()).lock!==i)return void M(t,e)
delete o.lock,k(o,t.options),a=o}null===(r=t.after)||void 0===r||r.call(t,a||o),S()}}else y.push(t)}function _(){return(0,c.m)()}function M(t,e){(0,s.iK)((function(){w(t,e+1)}),v)}function S(){n=void 0
var t=y.shift()
t&&w(t)}function E(t,e){R(t)?T(e):(t.expire=String((0,o.m6)()+d.s),k(t,e))}function k(t,e){(0,u.d8)(m,function(t){return(0,f.qP)(t).map((function(t){var e=t[0],r=t[1]
return"".concat(e,"=").concat(r)})).join(b)}(t),d.s,e)}function A(){var t=(0,u.ej)(m),e={}
return function(t){return void 0!==t&&(-1!==t.indexOf(b)||p.test(t))}(t)&&t.split(b).forEach((function(t){var r=p.exec(t)
if(null!==r){var n=r[1],i=r[2]
e[n]=i}})),e}function T(t){(0,u.kT)(m,t)}function R(t){return(0,h.Qr)(t)}var x="_dd",C="_dd_r",I="_dd_l",B="rum",O="logs",P=r(45),L=r(2807),N=o.yR,D=d.T,j=[]
function U(t,e,r){!function(t){var e=(0,u.ej)(m),r=(0,u.ej)(x),n=(0,u.ej)(C),i=(0,u.ej)(I)
if(!e){var o={}
r&&(o.id=r),i&&/^[01]$/.test(i)&&(o[O]=i),n&&/^[012]$/.test(n)&&(o[B]=n),E(o,t)}}(t)
var n=function(t,e,r){var n,i=new P.y,a=new P.y,c=(0,s.Zi)((function(){w({options:t,process:function(t){return b(t)?void 0:{}},after:h})}),u.MI),f=b(n=A())?n:{}
function h(t){return b(t)||(t={}),p()&&(function(t){return f.id!==t.id||f[e]!==t[e]}(t)?(f={},a.notify()):f=t),t}function p(){return void 0!==f[e]}function b(t){return(void 0===t.created||(0,o.m6)()-Number(t.created)<d.T)&&(void 0===t.expire||(0,o.m6)()<Number(t.expire))}return{expandOrRenewSession:(0,L.P)((function(){var n
w({options:t,process:function(t){var i=h(t)
return n=function(t){var n=r(t[e]),i=n.trackingType,a=n.isTracked
return t[e]=i,a&&!t.id&&(t.id=(0,l.DO)(),t.created=String((0,o.m6)())),a}(i),i},after:function(t){n&&!p()&&function(t){f=t,i.notify()}(t),f=t}})}),u.MI).throttled,expandSession:function(){w({options:t,process:function(t){return p()?h(t):void 0}})},getSession:function(){return f},renewObservable:i,expireObservable:a,expire:function(){T(t),h({})},stop:function(){(0,s.cv)(c)}}}(t,e,r)
j.push((function(){return n.stop()}))
var c,f,h=new i.P(D)
function p(){return{id:n.getSession().id,trackingType:n.getSession()[e]}}return j.push((function(){return h.stop()})),n.renewObservable.subscribe((function(){h.add(p(),(0,o._q)())})),n.expireObservable.subscribe((function(){h.closeActive((0,o._q)())})),n.expandOrRenewSession(),h.add(p(),(0,o.cQ)().relative),c=function(){return n.expandOrRenewSession()},f=(0,a.y)(window,["click","touchstart","keydown","scroll"],c,{capture:!0,passive:!0}).stop,j.push(f),function(t){var e=function(){"visible"===document.visibilityState&&n.expandSession()},r=(0,a.O)(document,"visibilitychange",e).stop
j.push(r)
var i=(0,s.Zi)(e,N)
j.push((function(){(0,s.cv)(i)}))}(),{findActiveSession:function(t){return h.find(t)},renewObservable:n.renewObservable,expireObservable:n.expireObservable,expire:n.expire}}},4358:(t,e,r)=>{"use strict"
r.d(e,{L7:()=>u,QB:()=>c,Y9:()=>s})
var n=r(2336),i="datadog-synthetics-public-id",o="datadog-synthetics-result-id",a="datadog-synthetics-injects-rum"
function s(){return Boolean(window._DATADOG_SYNTHETICS_INJECTS_RUM||(0,n.ej)(a))}function u(){var t=window._DATADOG_SYNTHETICS_PUBLIC_ID||(0,n.ej)(i)
return"string"==typeof t?t:void 0}function c(){var t=window._DATADOG_SYNTHETICS_RESULT_ID||(0,n.ej)(o)
return"string"==typeof t?t:void 0}},3430:(t,e,r)=>{"use strict"
r.d(e,{Uo:()=>k,eJ:()=>S,Sz:()=>E,VG:()=>M,VL:()=>_})
var n,i=r(8505),o=r(8935),a=r(2089),s=r(6935),u=r(2543),c=r(45),f=r(732),h=r(8095),l=r(4314),d=r(8398),p=r(8483),b=r(3374),m=r(5740),v={log:"log",configuration:"configuration"},g=["https://www.datadoghq-browser-agent.com","https://www.datad0g-browser-agent.com","http://localhost","<anonymous>"],y=[s.y7],w={maxEventsPerPage:0,sentEventCount:0,telemetryEnabled:!1,telemetryConfigurationEnabled:!1}
function _(t,e){var r,i=new c.y
return w.telemetryEnabled=!(0,d.q9)(y,e.site)&&(0,p.y7)(e.telemetrySampleRate),w.telemetryConfigurationEnabled=w.telemetryEnabled&&(0,p.y7)(e.telemetryConfigurationSampleRate),n=function(e){if(w.telemetryEnabled){var n=function(t,e){return(0,m.$e)({type:"telemetry",date:(0,f.n$)(),service:t,version:"4.42.2",source:"browser",_dd:{format_version:2},telemetry:e,experimental_features:(0,d.Oc)((0,a.u0)())},void 0!==r?r():{})}(t,e)
i.notify(n),(0,l.j)("telemetry",n)}},(0,h.P_)(E),(0,d.f0)(w,{maxEventsPerPage:e.maxTelemetryEventsPerPage,sentEventCount:0}),{setContextProvider:function(t){r=t},observable:i,enabled:w.telemetryEnabled}}function M(t){return t.site===s.DZ}function S(t,e){(0,h.DV)(i.vA.debug,t,e),A((0,d.f0)({type:v.log,message:t,status:"debug"},e))}function E(t){A((0,d.f0)({type:v.log,status:"error"},function(t){if(t instanceof Error){var e=(0,u._)(t)
return{error:{kind:e.name,stack:(0,o.P3)(T(e))},message:e.message}}return{error:{stack:o.K$},message:"".concat("Uncaught"," ").concat((0,b.l)(t))}}(t)))}function k(t){w.telemetryConfigurationEnabled&&A({type:v.configuration,configuration:t})}function A(t){n&&w.sentEventCount<w.maxEventsPerPage&&(w.sentEventCount+=1,n(t))}function T(t){return t.stack=t.stack.filter((function(t){return!t.url||g.some((function(e){return(0,d.Ny)(t.url,e)}))})),t}},2543:(t,e,r)=>{"use strict"
r.d(e,{_:()=>o})
var n=r(8398),i="?"
function o(t){var e=[],r=p(t,"stack"),o=String(t)
return r&&(0,n.Ny)(r,o)&&(r=r.slice(o.length)),r&&r.split("\n").forEach((function(t){var r=function(t){var e=u.exec(t)
if(e){var r=e[2]&&0===e[2].indexOf("native"),n=e[2]&&0===e[2].indexOf("eval"),o=c.exec(e[2])
return n&&o&&(e[2]=o[1],e[3]=o[2],e[4]=o[3]),{args:r?[e[2]]:[],column:e[4]?+e[4]:void 0,func:e[1]||i,line:e[3]?+e[3]:void 0,url:r?void 0:e[2]}}}(t)||function(t){var e=f.exec(t)
if(e)return{args:[],column:e[3]?+e[3]:void 0,func:i,line:e[2]?+e[2]:void 0,url:e[1]}}(t)||function(t){var e=h.exec(t)
if(e)return{args:[],column:e[4]?+e[4]:void 0,func:e[1]||i,line:+e[3],url:e[2]}}(t)||function(t){var e=l.exec(t)
if(e){var r=e[3]&&e[3].indexOf(" > eval")>-1,n=d.exec(e[3])
return r&&n&&(e[3]=n[1],e[4]=n[2],e[5]=void 0),{args:e[2]?e[2].split(","):[],column:e[5]?+e[5]:void 0,func:e[1]||i,line:e[4]?+e[4]:void 0,url:e[3]}}}(t)
r&&(!r.func&&r.line&&(r.func=i),e.push(r))})),{message:p(t,"message"),name:p(t,"name"),stack:e}}var a="((?:file|https?|blob|chrome-extension|native|eval|webpack|snippet|<anonymous>|\\w+\\.|\\/).*?)",s="(?::(\\d+))",u=new RegExp("^\\s*at (.*?) ?\\(".concat(a).concat(s,"?").concat(s,"?\\)?\\s*$"),"i"),c=new RegExp("\\((\\S*)".concat(s).concat(s,"\\)")),f=new RegExp("^\\s*at ?".concat(a).concat(s,"?").concat(s,"??\\s*$"),"i"),h=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,l=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|capacitor|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,d=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i
function p(t,e){if("object"==typeof t&&t&&e in t){var r=t[e]
return"string"==typeof r?r:void 0}}},9361:(t,e,r)=>{"use strict"
r.d(e,{I:()=>a,z:()=>s})
var n=r(8505),i=r(1509),o=r(8398)
function a(t){var e=(0,o.f0)({},t)
return["id","name","email"].forEach((function(t){t in e&&(e[t]=String(e[t]))})),e}function s(t){var e="object"===(0,i.o)(t)
return e||n.jf.error("Unsupported user:",t),e}},2968:(t,e,r)=>{"use strict"
r.d(e,{l:()=>n})
var n=function(){function t(){this.callbacks={}}return t.prototype.notify=function(t,e){var r=this.callbacks[t]
r&&r.forEach((function(t){return t(e)}))},t.prototype.subscribe=function(t,e){var r=this
return this.callbacks[t]||(this.callbacks[t]=[]),this.callbacks[t].push(e),{unsubscribe:function(){r.callbacks[t]=r.callbacks[t].filter((function(t){return e!==t}))}}},t}()},6135:(t,e,r)=>{"use strict"
r.d(e,{S:()=>n})
var n=function(){function t(){this.buffer=[]}return t.prototype.add=function(t){this.buffer.push(t)>500&&this.buffer.splice(0,1)},t.prototype.drain=function(){this.buffer.forEach((function(t){return t()})),this.buffer.length=0},t}()},9835:(t,e,r)=>{"use strict"
r.d(e,{Z:()=>i})
var n=r(8505)
function i(t,e){return function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i]
try{return t.apply(void 0,r)}catch(t){n.jf.error(e,t)}}}},8505:(t,e,r)=>{"use strict"
r.d(e,{jG:()=>o,jf:()=>i,vA:()=>n})
var n={log:"log",debug:"debug",info:"info",warn:"warn",error:"error"},i=function t(e){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i]
Object.prototype.hasOwnProperty.call(n,e)||(e=n.log),t[e].apply(t,r)},o=console
i.debug=o.debug.bind(o),i.log=o.log.bind(o),i.info=o.info.bind(o),i.warn=o.warn.bind(o),i.error=o.error.bind(o)},2089:(t,e,r)=>{"use strict"
var n
r.d(e,{W_:()=>a,u0:()=>s,uh:()=>n,vn:()=>o}),function(t){t.PAGEHIDE="pagehide",t.FEATURE_FLAGS="feature_flags",t.RESOURCE_PAGE_STATES="resource_page_states",t.COLLECT_FLUSH_REASON="collect_flush_reason"}(n||(n={}))
var i=new Set
function o(t){t.forEach((function(t){i.add(t)}))}function a(t){return i.has(t)}function s(){return i}},6461:(t,e,r)=>{"use strict"
function n(){if("object"==typeof globalThis)return globalThis
Object.defineProperty(Object.prototype,"_dd_temp_",{get:function(){return this},configurable:!0})
var t=_dd_temp_
return delete Object.prototype._dd_temp_,"object"!=typeof t&&(t="object"==typeof self?self:"object"==typeof window?window:{}),t}r.d(e,{R:()=>n})},1398:(t,e,r)=>{"use strict"
r.d(e,{I:()=>i})
var n=r(6461)
function i(t,e){var r,i=(0,n.R)()
return i.Zone&&"function"==typeof i.Zone.__symbol__&&(r=t[i.Zone.__symbol__(e)]),r||(r=t[e]),r}},9286:(t,e,r)=>{"use strict"
r.d(e,{Lm:()=>o,Su:()=>i})
var n=r(8095)
function i(t,e,r){var n=t[e],i=r(n),o=function(){if("function"==typeof i)return i.apply(this,arguments)}
return t[e]=o,{stop:function(){t[e]===o?t[e]=n:i=n}}}function o(t,e,r){var o=r.before,a=r.after
return i(t,e,(function(t){return function(){var e,r=arguments
return o&&(0,n.L6)(o,this,r),"function"==typeof t&&(e=t.apply(this,r)),a&&(0,n.L6)(a,this,r),e}}))}},5740:(t,e,r)=>{"use strict"
r.d(e,{$e:()=>a,I8:()=>o})
var n=r(1509)
function i(t,e,r){if(void 0===r&&(r=function(){if("undefined"!=typeof WeakSet){var t=new WeakSet
return{hasAlreadyBeenSeen:function(e){var r=t.has(e)
return r||t.add(e),r}}}var e=[]
return{hasAlreadyBeenSeen:function(t){var r=e.indexOf(t)>=0
return r||e.push(t),r}}}()),void 0===e)return t
if("object"!=typeof e||null===e)return e
if(e instanceof Date)return new Date(e.getTime())
if(e instanceof RegExp){var o=e.flags||[e.global?"g":"",e.ignoreCase?"i":"",e.multiline?"m":"",e.sticky?"y":"",e.unicode?"u":""].join("")
return new RegExp(e.source,o)}if(!r.hasAlreadyBeenSeen(e)){if(Array.isArray(e)){for(var a=Array.isArray(t)?t:[],s=0;s<e.length;++s)a[s]=i(a[s],e[s],r)
return a}var u="object"===(0,n.o)(t)?t:{}
for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&(u[c]=i(u[c],e[c],r))
return u}}function o(t){return i(void 0,t)}function a(){for(var t,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r]
for(var n=0,o=e;n<o.length;n++){var a=o[n]
null!=a&&(t=i(t,a))}return t}},8095:(t,e,r)=>{"use strict"
r.d(e,{DV:()=>l,L6:()=>h,P_:()=>s,Th:()=>c,yD:()=>u,zk:()=>f})
var n,i=r(8505),o=function(t,e,r){if(r||2===arguments.length)for(var n,i=0,o=e.length;i<o;i++)!n&&i in e||(n||(n=Array.prototype.slice.call(e,0,i)),n[i]=e[i])
return t.concat(n||Array.prototype.slice.call(e))},a=!1
function s(t){n=t}function u(t){a=t}function c(t,e,r){var i=r.value
r.value=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
return(n?f(i):i).apply(this,t)}}function f(t){return function(){return h(t,this,arguments)}}function h(t,e,r){try{return t.apply(e,r)}catch(t){if(l(i.vA.error,t),n)try{n(t)}catch(t){l(i.vA.error,t)}}}function l(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r]
a&&i.jf.apply(void 0,o([t,"[MONITOR]"],e,!1))}},45:(t,e,r)=>{"use strict"
r.d(e,{$:()=>i,y:()=>n})
var n=function(){function t(t){this.onFirstSubscribe=t,this.observers=[]}return t.prototype.subscribe=function(t){var e=this
return!this.observers.length&&this.onFirstSubscribe&&(this.onLastUnsubscribe=this.onFirstSubscribe()||void 0),this.observers.push(t),{unsubscribe:function(){e.observers=e.observers.filter((function(e){return t!==e})),!e.observers.length&&e.onLastUnsubscribe&&e.onLastUnsubscribe()}}},t.prototype.notify=function(t){this.observers.forEach((function(e){return e(t)}))},t}()
function i(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
var r=new n((function(){var e=t.map((function(t){return t.subscribe((function(t){return r.notify(t)}))}))
return function(){return e.forEach((function(t){return t.unsubscribe()}))}}))
return r}},3101:(t,e,r)=>{"use strict"
r.d(e,{n:()=>o})
var n=r(8095),i=r(2807)
function o(t,e,r){var o=t.getReader(),a=[],s=0
function u(){var t,n
if(o.cancel().catch(i.Z),r.collectStreamBody){var u
if(1===a.length)u=a[0]
else{u=new Uint8Array(s)
var c=0
a.forEach((function(t){u.set(t,c),c+=t.length}))}t=u.slice(0,r.bytesLimit),n=u.length>r.bytesLimit}e(void 0,t,n)}!function t(){o.read().then((0,n.zk)((function(e){e.done?u():(r.collectStreamBody&&a.push(e.value),(s+=e.value.length)>r.bytesLimit?u():t())})),(0,n.zk)((function(t){return e(t)})))}()}},4314:(t,e,r)=>{"use strict"
function n(t,e){var r=window.__ddBrowserSdkExtensionCallback
r&&r({type:t,payload:e})}r.d(e,{j:()=>n})},1005:(t,e,r)=>{"use strict"
r.d(e,{W:()=>f})
var n=r(6775),i=r(2807),o=r(5740),a=r(3374),s=r(7393),u=r(1468),c=200
function f(t,e){void 0===e&&(e=n.qt)
var r,f={},h=!1,l=(0,i.P)((function(n){r=e((0,a.l)(n)),h||(h=(0,u.H)(r,t))}),c).throttled
return{getBytesCount:function(){return r},get:function(){return f},add:function(t,e){f[t]=e,l(f)},remove:function(t){delete f[t],l(f)},set:function(t){l(f=t)},getContext:function(){return(0,o.I8)(f)},setContext:function(t){f=(0,s.N)(t),l(f)},setContextProperty:function(t,e){f[t]=(0,s.N)(e),l(f)},removeContextProperty:function(t){delete f[t],l(f)},clearContext:function(){f={},r=0}}}},1468:(t,e,r)=>{"use strict"
r.d(e,{H:()=>a})
var n=r(6775),i=r(8505),o=3*n.Hi
function a(t,e){return t>o&&(i.jf.warn("The ".concat(e," data is over ").concat(o/n.Hi,"KiB. On low connectivity, the SDK has the potential to exhaust the user's upload bandwidth.")),!0)}},3374:(t,e,r)=>{"use strict"
r.d(e,{l:()=>i,y:()=>o})
var n=r(2807)
function i(t,e,r){if("object"!=typeof t||null===t)return JSON.stringify(t)
var n=o(Object.prototype),i=o(Array.prototype),a=o(Object.getPrototypeOf(t)),s=o(t)
try{return JSON.stringify(t,e,r)}catch(t){return"<error: unable to serialize object>"}finally{n(),i(),a(),s()}}function o(t){var e=t,r=e.toJSON
return r?(delete e.toJSON,function(){e.toJSON=r}):n.Z}},7393:(t,e,r)=>{"use strict"
r.d(e,{N:()=>c})
var n=r(8505),i=r(6775),o=r(3374),a=220*i.Hi,s="$",u=3
function c(t,e){var r
void 0===e&&(e=a)
var n=(0,o.y)(Object.prototype),i=(0,o.y)(Array.prototype),c=[],l=new WeakMap,d=f(t,s,void 0,c,l),p=(null===(r=JSON.stringify(d))||void 0===r?void 0:r.length)||0
if(!(p>e)){for(;c.length>0&&p<e;){var b=c.shift(),m=0
if(Array.isArray(b.source))for(var v=0;v<b.source.length;v++){if(p+=void 0!==(g=f(b.source[v],b.path,v,c,l))?JSON.stringify(g).length:4,p+=m,m=1,p>e){h(e,"truncated",t)
break}b.target[v]=g}else for(var v in b.source)if(Object.prototype.hasOwnProperty.call(b.source,v)){var g
if(void 0!==(g=f(b.source[v],b.path,v,c,l))&&(p+=JSON.stringify(g).length+m+v.length+u,m=1),p>e){h(e,"truncated",t)
break}b.target[v]=g}}return n(),i(),d}h(e,"discarded",t)}function f(t,e,r,n,i){var o,a=function(t){var e=t
if(e&&"function"==typeof e.toJSON)try{return e.toJSON()}catch(t){}return t}(t)
if(!a||"object"!=typeof a)return"bigint"==typeof(o=a)?"[BigInt] ".concat(o.toString()):"function"==typeof o?"[Function] ".concat(o.name||"unknown"):"symbol"==typeof o?"[Symbol] ".concat(o.description||o.toString()):o
var s=function(t){try{if(t instanceof Event)return{isTrusted:t.isTrusted}
var e=Object.prototype.toString.call(t).match(/\[object (.*)\]/)
if(e&&e[1])return"[".concat(e[1],"]")}catch(t){}return"[Unserializable]"}(a)
if("[Object]"!==s&&"[Array]"!==s&&"[Error]"!==s)return s
var u=t
if(i.has(u))return"[Reference seen at ".concat(i.get(u),"]")
var c=void 0!==r?"".concat(e,".").concat(r):e,f=Array.isArray(a)?[]:{}
return i.set(u,c),n.push({source:a,target:f,path:c}),f}function h(t,e,r){n.jf.warn("The data provided has been ".concat(e," as it is over the limit of ").concat(t," characters:"),r)}},7588:(t,e,r)=>{"use strict"
r.d(e,{Zi:()=>u,cv:()=>c,gr:()=>s,iK:()=>a})
var n=r(1398),i=r(8095),o=r(6461)
function a(t,e){return(0,n.I)((0,o.R)(),"setTimeout")((0,i.zk)(t),e)}function s(t){(0,n.I)((0,o.R)(),"clearTimeout")(t)}function u(t,e){return(0,n.I)(window,"setInterval")((0,i.zk)(t),e)}function c(t){(0,n.I)(window,"clearInterval")(t)}},1668:(t,e,r)=>{"use strict"
function n(){return Boolean(document.documentMode)}function i(){return!!window.chrome||/HeadlessChrome/.test(window.navigator.userAgent)}r.d(e,{m:()=>i,w:()=>n})},6775:(t,e,r)=>{"use strict"
r.d(e,{Hi:()=>n,X9:()=>i,qt:()=>a})
var n=1024,i=1024*n,o=/[^\u0000-\u007F]/
function a(t){return o.test(t)?void 0!==window.TextEncoder?(new TextEncoder).encode(t).length:new Blob([t]).size:t.length}},2807:(t,e,r)=>{"use strict"
r.d(e,{P:()=>i,Z:()=>o})
var n=r(7588)
function i(t,e,r){var i,o,a=!r||void 0===r.leading||r.leading,s=!r||void 0===r.trailing||r.trailing,u=!1
return{throttled:function(){for(var r=[],c=0;c<arguments.length;c++)r[c]=arguments[c]
u?i=r:(a?t.apply(void 0,r):i=r,u=!0,o=(0,n.iK)((function(){s&&i&&t.apply(void 0,i),u=!1,i=void 0}),e))},cancel:function(){(0,n.gr)(o),u=!1,i=void 0}}}function o(){}},8483:(t,e,r)=>{"use strict"
function n(t){return 0!==t&&100*Math.random()<=t}function i(t,e){return+t.toFixed(e)}function o(t){return a(t)&&t>=0&&t<=100}function a(t){return"number"==typeof t}r.d(e,{NM:()=>i,hj:()=>a,y7:()=>n,zz:()=>o})},4953:(t,e,r)=>{"use strict"
r.d(e,{E5:()=>o,Q8:()=>s,Qr:()=>a,mv:()=>i})
var n=r(8398)
function i(t){return(0,n.f0)({},t)}function o(t,e){return Object.keys(t).some((function(r){return t[r]===e}))}function a(t){return 0===Object.keys(t).length}function s(t,e){for(var r={},n=0,i=Object.keys(t);n<i.length;n++){var o=i[n]
r[o]=e(t[o])}return r}},8398:(t,e,r)=>{"use strict"
function n(t,e){return-1!==t.indexOf(e)}function i(t){if(Array.from)return Array.from(t)
var e=[]
if(t instanceof Set)t.forEach((function(t){return e.push(t)}))
else for(var r=0;r<t.length;r++)e.push(t[r])
return e}function o(t,e){for(var r=0;r<t.length;r+=1){var n=t[r]
if(e(n,r))return n}}function a(t,e){for(var r=t.length-1;r>=0;r-=1){var n=t[r]
if(e(n,r,t))return n}}function s(t){return Object.keys(t).map((function(e){return t[e]}))}function u(t){return Object.keys(t).map((function(e){return[e,t[e]]}))}function c(t,e){return t.slice(0,e.length)===e}function f(t,e){return t.slice(-e.length)===e}function h(t,e){return t.matches?t.matches(e):!!t.msMatchesSelector&&t.msMatchesSelector(e)}function l(t){return window.CSS&&window.CSS.escape?window.CSS.escape(t):t.replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,(function(t,e){return e?"\0"===t?"�":"".concat(t.slice(0,-1),"\\").concat(t.charCodeAt(t.length-1).toString(16)," "):"\\".concat(t)}))}function d(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r]
return e.forEach((function(e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})),t}r.d(e,{Ap:()=>h,Ny:()=>c,Oc:()=>i,QA:()=>l,TT:()=>s,dF:()=>a,f0:()=>d,pn:()=>f,q9:()=>n,qP:()=>u,sE:()=>o})},8266:(t,e,r)=>{"use strict"
function n(t){return t>=500}function i(t){try{return t.clone()}catch(t){return}}r.d(e,{o:()=>n,u:()=>i})},5868:(t,e,r)=>{"use strict"
function n(t){return t?(parseInt(t,10)^16*Math.random()>>parseInt(t,10)/4).toString(16):"".concat(1e7,"-").concat(1e3,"-").concat(4e3,"-").concat(8e3,"-").concat(1e11).replace(/[018]/g,n)}function i(t,e){var r=new RegExp("(?:^|;)\\s*".concat(e,"\\s*=\\s*([^;]+)")).exec(t)
return r?r[1]:void 0}function o(t,e,r){void 0===r&&(r="")
var n=t.charCodeAt(e-1),i=n>=55296&&n<=56319?e+1:e
return t.length<=i?t:"".concat(t.slice(0,i)).concat(r)}r.d(e,{DO:()=>n,MY:()=>i,_z:()=>o})},732:(t,e,r)=>{"use strict"
r.d(e,{$I:()=>b,Cn:()=>w,DY:()=>c,QA:()=>f,WK:()=>g,WT:()=>o,_J:()=>v,_q:()=>p,c0:()=>h,cQ:()=>m,dV:()=>s,m6:()=>l,n$:()=>d,ni:()=>y,yR:()=>a})
var n,i=r(8483),o=1e3,a=60*o,s=60*a,u=24*s*365
function c(t){return{relative:t,timeStamp:(e=t,r=l()-performance.now(),r>_()?Math.round(g(r,e)):function(t){return Math.round(g(_(),t))}(e))}
var e,r}function f(){return Math.round(l()-g(_(),performance.now()))}function h(t){return(0,i.hj)(t)?(0,i.NM)(1e6*t,0):t}function l(){return(new Date).getTime()}function d(){return l()}function p(){return performance.now()}function b(){return{relative:p(),timeStamp:d()}}function m(){return{relative:0,timeStamp:_()}}function v(t,e){return e-t}function g(t,e){return t+e}function y(t){return t-_()}function w(t){return t<u}function _(){return void 0===n&&(n=performance.timing.navigationStart),n}},1509:(t,e,r)=>{"use strict"
function n(t){return null===t?"null":Array.isArray(t)?"array":typeof t}r.d(e,{o:()=>n})},3416:(t,e,r)=>{"use strict"
r.d(e,{D5:()=>i,P$:()=>a,jv:()=>o,ye:()=>s})
var n=r(3374)
function i(t){return u(t,h(window.location)).href}function o(t){try{return!!u(t)}catch(t){return!1}}function a(t){return h(u(t))}function s(t){var e=u(t).pathname
return"/"===e[0]?e:"/".concat(e)}function u(t,e){var r=function(){if(void 0===c)try{var t=new f("http://test/path")
c="http://test/path"===t.href}catch(t){c=!1}return c?f:void 0}()
if(r)try{return void 0!==e?new r(t,e):new r(t)}catch(r){throw new Error("Failed to construct URL: ".concat(String(r)," ").concat((0,n.l)({url:t,base:e})))}if(void 0===e&&!/:/.test(t))throw new Error("Invalid URL: '".concat(t,"'"))
var i=document,o=i.createElement("a")
if(void 0!==e){var a=(i=document.implementation.createHTMLDocument("")).createElement("base")
a.href=e,i.head.appendChild(a),i.body.appendChild(o)}return o.href=t,o}var c,f=URL
function h(t){if(t.origin)return t.origin
var e=t.host.replace(/(:80|:443)$/,"")
return"".concat(t.protocol,"//").concat(e)}},1079:(t,e,r)=>{"use strict"
r.d(e,{P:()=>s})
var n=r(7588),i=r(732),o=1/0,a=i.yR,s=function(){function t(t){var e=this
this.expireDelay=t,this.entries=[],this.clearOldValuesInterval=(0,n.Zi)((function(){return e.clearOldValues()}),a)}return t.prototype.add=function(t,e){var r=this,n={value:t,startTime:e,endTime:o,remove:function(){var t=r.entries.indexOf(n)
t>=0&&r.entries.splice(t,1)},close:function(t){n.endTime=t}}
return this.entries.unshift(n),n},t.prototype.find=function(t){void 0===t&&(t=o)
for(var e=0,r=this.entries;e<r.length;e++){var n=r[e]
if(n.startTime<=t){if(t<=n.endTime)return n.value
break}}},t.prototype.closeActive=function(t){var e=this.entries[0]
e&&e.endTime===o&&e.close(t)},t.prototype.findAll=function(t){return void 0===t&&(t=o),this.entries.filter((function(e){return e.startTime<=t&&t<=e.endTime})).map((function(t){return t.value}))},t.prototype.reset=function(){this.entries=[]},t.prototype.stop=function(){(0,n.cv)(this.clearOldValuesInterval)},t.prototype.clearOldValues=function(){for(var t=(0,i._q)()-this.expireDelay;this.entries.length>0&&this.entries[this.entries.length-1].endTime<t;)this.entries.pop()},t}()},2928:(t,e,r)=>{"use strict"
r.d(e,{E:()=>u})
var n=r(8505),i=r(8398),o=r(5528),a=r(6775),s=r(3374),u=function(){function t(t,e,r){var n=this
this.request=t,this.flushController=e,this.messageBytesLimit=r,this.pushOnlyBuffer=[],this.upsertBuffer={},this.flushController.flushObservable.subscribe((function(t){return n.flush(t)}))}return t.prototype.add=function(t){this.addOrUpdate(t)},t.prototype.upsert=function(t,e){this.addOrUpdate(t,e)},t.prototype.flush=function(t){var e=this.pushOnlyBuffer.concat((0,i.TT)(this.upsertBuffer))
this.pushOnlyBuffer=[],this.upsertBuffer={}
var r={data:e.join("\n"),bytesCount:t.bytesCount,flushReason:t.reason};(0,o.PT)(t.reason)?this.request.sendOnExit(r):this.request.send(r)},t.prototype.addOrUpdate=function(t,e){var r=this.process(t),i=r.processedMessage,o=r.messageBytesCount
o>=this.messageBytesLimit?n.jf.warn("Discarded a message whose size was bigger than the maximum allowed size ".concat(this.messageBytesLimit,"KB.")):(this.hasMessageFor(e)&&this.remove(e),this.push(i,o,e))},t.prototype.process=function(t){var e=(0,s.l)(t)
return{processedMessage:e,messageBytesCount:(0,a.qt)(e)}},t.prototype.push=function(t,e,r){var n=this.flushController.messagesCount>0?1:0
this.flushController.notifyBeforeAddMessage(e+n),void 0!==r?this.upsertBuffer[r]=t:this.pushOnlyBuffer.push(t),this.flushController.notifyAfterAddMessage()},t.prototype.remove=function(t){var e=this.upsertBuffer[t]
delete this.upsertBuffer[t]
var r=(0,a.qt)(e),n=this.flushController.messagesCount>1?1:0
this.flushController.notifyAfterRemoveMessage(r+n)},t.prototype.hasMessageFor=function(t){return void 0!==t&&void 0!==this.upsertBuffer[t]},t}()},16:(t,e,r)=>{"use strict"
r.d(e,{A:()=>o,x:()=>a})
var n=r(8398),i=r(6461)
function o(){var t=(0,i.R)().DatadogEventBridge
if(t)return{getAllowedWebViewHosts:function(){return JSON.parse(t.getAllowedWebViewHosts())},send:function(e,r){t.send(JSON.stringify({eventType:e,event:r}))}}}function a(t){var e
void 0===t&&(t=null===(e=(0,i.R)().location)||void 0===e?void 0:e.hostname)
var r=o()
return!!r&&r.getAllowedWebViewHosts().some((function(e){return t===e||(0,n.pn)(t,".".concat(e))}))}},976:(t,e,r)=>{"use strict"
r.d(e,{r:()=>o})
var n=r(45),i=r(7588)
function o(t){var e=t.messagesLimit,r=t.bytesLimit,o=t.durationLimit,a=t.pageExitObservable,s=t.sessionExpireObservable,u=new n.y
a.subscribe((function(t){return l(t.reason)})),s.subscribe((function(){return l("session_expire")}))
var c,f=0,h=0
function l(t){if(0!==h){var e=h,r=f
h=0,f=0,d(),u.notify({reason:t,messagesCount:e,bytesCount:r})}}function d(){(0,i.gr)(c),c=void 0}return{flushObservable:u,get messagesCount(){return h},notifyBeforeAddMessage:function(t){f+t>=r&&l("bytes_limit"),h+=1,f+=t,void 0===c&&(c=(0,i.iK)((function(){l("duration_limit")}),o))},notifyAfterAddMessage:function(){h>=e?l("messages_limit"):f>=r&&l("bytes_limit")},notifyAfterRemoveMessage:function(t){f-=t,0==(h-=1)&&d()}}}},3197:(t,e,r)=>{"use strict"
r.d(e,{UF:()=>_})
var n=r(3430),i=r(8095),o=r(1985),a=r(7588),s=r(732),u=r(6775),c=r(8266),f=r(6358),h=80*u.Hi,l=32,d=3*u.X9,p=s.yR,b=s.WT
function m(t,e,r,n,i){0===e.transportStatus&&0===e.queuedPayloads.size()&&e.bandwidthMonitor.canHandle(t)?g(t,e,r,{onSuccess:function(){return y(0,e,r,n,i)},onFailure:function(){e.queuedPayloads.enqueue(t),v(e,r,n,i)}}):e.queuedPayloads.enqueue(t)}function v(t,e,r,n){2===t.transportStatus&&(0,a.iK)((function(){g(t.queuedPayloads.first(),t,e,{onSuccess:function(){t.queuedPayloads.dequeue(),t.currentBackoffTime=b,y(1,t,e,r,n)},onFailure:function(){t.currentBackoffTime=Math.min(p,2*t.currentBackoffTime),v(t,e,r,n)}})}),t.currentBackoffTime)}function g(t,e,r,n){var i=n.onSuccess,o=n.onFailure
e.bandwidthMonitor.add(t),r(t,(function(r){e.bandwidthMonitor.remove(t),function(t){return"opaque"!==t.type&&(0===t.status&&!navigator.onLine||408===t.status||429===t.status||(0,c.o)(t.status))}(r)?(e.transportStatus=e.bandwidthMonitor.ongoingRequestCount>0?1:2,t.retry={count:t.retry?t.retry.count+1:1,lastFailureStatus:r.status},o()):(e.transportStatus=0,i())}))}function y(t,e,r,n,i){0===t&&e.queuedPayloads.isFull()&&!e.queueFullReported&&(i({message:"Reached max ".concat(n," events size queued for upload: ").concat(d/u.X9,"MiB"),source:f.z.AGENT,startClocks:(0,s.$I)()}),e.queueFullReported=!0)
var o=e.queuedPayloads
for(e.queuedPayloads=w();o.size()>0;)m(o.dequeue(),e,r,n,i)}function w(){var t=[]
return{bytesCount:0,enqueue:function(e){this.isFull()||(t.push(e),this.bytesCount+=e.bytesCount)},first:function(){return t[0]},dequeue:function(){var e=t.shift()
return e&&(this.bytesCount-=e.bytesCount),e},size:function(){return t.length},isFull:function(){return this.bytesCount>=d}}}function _(t,e,r){var o={transportStatus:0,currentBackoffTime:b,bandwidthMonitor:{ongoingRequestCount:0,ongoingByteCount:0,canHandle:function(t){return 0===this.ongoingRequestCount||this.ongoingByteCount+t.bytesCount<=h&&this.ongoingRequestCount<l},add:function(t){this.ongoingRequestCount+=1,this.ongoingByteCount+=t.bytesCount},remove:function(t){this.ongoingRequestCount-=1,this.ongoingByteCount-=t.bytesCount}},queuedPayloads:w(),queueFullReported:!1},a=function(r,n){return function(t,e,r,n){var o=r.data,a=r.bytesCount,s=r.flushReason,u=r.retry
if(function(){try{return window.Request&&"keepalive"in new Request("http://a")}catch(t){return!1}}()&&a<e){var c=t.build("fetch",s,u)
fetch(c,{method:"POST",body:o,keepalive:!0,mode:"cors"}).then((0,i.zk)((function(t){return null==n?void 0:n({status:t.status,type:t.type})})),(0,i.zk)((function(){S(t.build("xhr",s,u),o,n)})))}else S(t.build("xhr",s,u),o,n)}(t,e,r,n)}
return{send:function(e){m(e,o,a,t.endpointType,r)},sendOnExit:function(r){!function(t,e,r){var i=r.data,o=r.bytesCount,a=r.flushReason
if(navigator.sendBeacon&&o<e)try{var s=t.build("beacon",a)
if(navigator.sendBeacon(s,i))return}catch(t){!function(t){M||(M=!0,(0,n.Sz)(t))}(t)}S(t.build("xhr",a),i)}(t,e,r)}}}var M=!1
function S(t,e,r){var n=new XMLHttpRequest
n.open("POST",t,!0),(0,o.O)(n,"loadend",(function(){null==r||r({status:n.status})}),{once:!0}),n.send(e)}},4866:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{HandlerType:()=>E,Logger:()=>A,StatusType:()=>S,datadogLogs:()=>st})
var n=r(6285),i=r(6461),o=r(1005),a=r(6135),s=r(5740),u=r(732),c=r(8095),f=r(16),h=r(7393),l=r(9361),d=r(8398),p=r(8505),b=r(6775),m=r(9083),v=r(8587),g=32*b.Hi
function y(t,e,r){return void 0===t?[]:"all"===t||Array.isArray(t)&&t.every((function(t){return(0,d.q9)(e,t)}))?"all"===t?e:(n=t,i=new Set,n.forEach((function(t){return i.add(t)})),(0,d.Oc)(i)):void p.jf.error("".concat(r,' should be "all" or an array with allowed values "').concat(e.join('", "'),'"'))
var n,i}var w=r(6358),_=r(2543),M=r(8935),S={debug:"debug",error:"error",info:"info",warn:"warn"},E={console:"console",http:"http",silent:"silent"},k=Object.keys(S),A=function(){function t(t,e,r,n,i){void 0===r&&(r=E.http),void 0===n&&(n=S.debug),void 0===i&&(i={}),this.handleLogStrategy=t,this.handlerType=r,this.level=n,this.contextManager=(0,o.W)("logger context"),this.contextManager.set((0,d.f0)({},i,e?{logger:{name:e}}:void 0))}return t.prototype.log=function(t,e,r,n){var i
if(void 0===r&&(r=S.info),r===S.error&&(i={origin:w.z.LOGGER}),null!=n){var o=n instanceof Error?(0,_._)(n):void 0,a=(0,M.AP)({stackTrace:o,originalError:n,nonErrorPrefix:"Provided",source:w.z.LOGGER,handling:"handled",startClocks:(0,u.$I)()})
i={origin:w.z.LOGGER,stack:a.stack,kind:a.type,message:a.message}}var c=(0,h.N)(e),f=i?(0,s.$e)({error:i},c):c
this.handleLogStrategy({message:(0,h.N)(t),context:f,status:r},this)},t.prototype.debug=function(t,e,r){this.log(t,e,S.debug,r)},t.prototype.info=function(t,e,r){this.log(t,e,S.info,r)},t.prototype.warn=function(t,e,r){this.log(t,e,S.warn,r)},t.prototype.error=function(t,e,r){this.log(t,e,S.error,r)},t.prototype.setContext=function(t){this.contextManager.set(t)},t.prototype.getContext=function(){return this.contextManager.get()},t.prototype.addContext=function(t,e){this.contextManager.add(t,e)},t.prototype.removeContext=function(t){this.contextManager.remove(t)},t.prototype.setHandler=function(t){this.handlerType=t},t.prototype.getHandler=function(){return this.handlerType},t.prototype.setLevel=function(t){this.level=t},t.prototype.getLevel=function(){return this.level},function(t,e,r,n){var i,o=arguments.length,a=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n
if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n)
else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,r,a):i(e,r))||a)
o>3&&a&&Object.defineProperty(e,r,a)}([c.Th],t.prototype,"log",null),t}(),T=r(4314),R=r(5528),x=r(2336),C=r(4358),I=r(3430),B=r(2928),O=r(3197),P=r(976)
function L(t,e,r,n,i,o){var a,s=u(e)
function u(e){return new B.E((0,O.UF)(e,t.batchBytesLimit,r),(0,P.r)({messagesLimit:t.batchMessagesLimit,bytesLimit:t.batchBytesLimit,durationLimit:t.flushTimeout,pageExitObservable:n,sessionExpireObservable:i}),t.messageBytesLimit)}return o&&(a=u(o)),{add:function(t,e){void 0===e&&(e=!0),s.add(t),a&&e&&a.add(t)}}}var N=r(6917),D=r(45),j=r(8483)
function U(t){return(0,j.y7)(t.sessionSampleRate)?"1":"0"}var H,q=r(3640),F=r(4953),z=((H={})[S.debug]=0,H[S.info]=1,H[S.warn]=2,H[S.error]=3,H)
function W(t,e,r){var n=r.getHandler(),i=Array.isArray(n)?n:[n]
return z[t]>=z[r.getLevel()]&&(0,d.q9)(i,e)}var K=!1
function G(t){var e=window
if((0,C.Y9)()){var r=n(e.DD_RUM_SYNTHETICS)
return r||K||(K=!0,(0,I.eJ)("Logs sent before RUM is injected by the synthetics worker",{testId:(0,C.L7)(),resultId:(0,C.QB)()})),r}return n(e.DD_RUM)
function n(e){if(e&&e.getInternalContext)return e.getInternalContext(t)}}var Y,V,X=r(9e3),Z=((Y={})[p.vA.log]=S.info,Y[p.vA.debug]=S.debug,Y[p.vA.info]=S.info,Y[p.vA.warn]=S.warn,Y[p.vA.error]=S.error,Y),J=((V={})[v._.cspViolation]=S.error,V[v._.intervention]=S.error,V[v._.deprecation]=S.warn,V),$=r(2807),Q=r(9617),tt=r(5316),et=r(8266),rt=r(3101)
function nt(t,e){return t.length>e.requestErrorResponseLengthLimit?"".concat(t.substring(0,e.requestErrorResponseLengthLimit),"..."):t}function it(t){return"xhr"===t?"XHR":"Fetch"}var ot=r(6620),at=r(2968).l,st=function(t){var e=!1,r=(0,o.W)("global context"),i=(0,o.W)("user"),b={},B=function(){},O=new a.S,P=function(t,e,r,n){void 0===r&&(r=(0,s.I8)(z())),void 0===n&&(n=(0,u.n$)()),O.add((function(){return P(t,e,r,n)}))},j=function(){},H=new A((function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
return P.apply(void 0,t)}))
function z(){return{view:{referrer:document.referrer,url:window.location.href},context:r.getContext(),user:i.getContext()}}return(0,n.r)({logger:H,init:(0,c.zk)((function(t){var r
if(j=function(){return(0,s.I8)(t)},(0,f.x)()&&(t=function(t){return(0,d.f0)({},t,{clientToken:"empty"})}(t)),function(t){return!e||(t.silentMultipleInit||p.jf.error("DD_LOGS is already initialized."),!1)}(t)){var n=function(t){var e=(0,m.fP)(t),r=y(t.forwardConsoleLogs,(0,d.TT)(p.vA),"Forward Console Logs"),n=y(t.forwardReports,(0,d.TT)(v._),"Forward Reports")
if(e&&r&&n)return t.forwardErrorsToLogs&&!(0,d.q9)(r,p.vA.error)&&r.push(p.vA.error),(0,d.f0)({forwardErrorsToLogs:!1!==t.forwardErrorsToLogs,forwardConsoleLogs:r,forwardReports:n,requestErrorResponseLengthLimit:g},e)}(t)
n&&(r=function(t,e,r,n){var i=new at
i.subscribe(1,(function(t){return(0,T.j)("logs",t)}))
var o=function(t){return i.notify(0,{rawLogsEvent:{message:t.message,date:t.startClocks.timeStamp,error:{origin:w.z.AGENT},origin:w.z.AGENT,status:S.error}})},a=(0,R.Pd)(),h=!(0,x.oX)(e.cookieOptions)||(0,f.x)()||(0,C.Y9)()?function(t){var e="1"===U(t)?{}:void 0
return{findTrackedSession:function(){return e},expireObservable:new D.y}}(e):function(t){var e=(0,N.HX)(t.cookieOptions,"logs",(function(e){return function(t,e){var r=function(t){return"0"===t||"1"===t}(e)?e:U(t)
return{trackingType:r,isTracked:"1"===r}}(t,e)}))
return{findTrackedSession:function(t){var r=e.findActiveSession(t)
return r&&"1"===r.trackingType?{id:r.id}:void 0},expireObservable:e.expireObservable}}(e),l=function(t,e,r,n){var i,o=(0,I.VL)("browser-logs-sdk",t)
if((0,f.x)()){var a=(0,f.A)()
o.observable.subscribe((function(t){return a.send("internal_telemetry",t)}))}else{var s=L(t,t.rumEndpointBuilder,e,r,n,null===(i=t.replica)||void 0===i?void 0:i.rumEndpointBuilder)
o.observable.subscribe((function(e){return s.add(e,(0,I.VG)(t))}))}return o}(e,o,a,h.expireObservable)
l.setContextProvider((function(){var t,e,r,n,i,o
return{application:{id:null===(t=G())||void 0===t?void 0:t.application_id},session:{id:null===(e=h.findTrackedSession())||void 0===e?void 0:e.id},view:{id:null===(n=null===(r=G())||void 0===r?void 0:r.view)||void 0===n?void 0:n.id},action:{id:null===(o=null===(i=G())||void 0===i?void 0:i.user_action)||void 0===o?void 0:o.id}}})),function(t,e){if(!t.forwardErrorsToLogs)return{stop:$.Z};(0,Q.S)().subscribe((function(t){"complete"===t.state&&r("xhr",t)})),(0,tt.y)().subscribe((function(t){"resolve"===t.state&&r("fetch",t)}))
function r(r,n){function i(t){e.notify(0,{rawLogsEvent:{message:"".concat(it(r)," error ").concat(n.method," ").concat(n.url),date:n.startClocks.timeStamp,error:{origin:w.z.NETWORK,stack:t||"Failed to load"},http:{method:n.method,status_code:n.status,url:n.url},status:S.error,origin:w.z.NETWORK}})}t.isIntakeUrl(n.url)||!function(t){return 0===t.status&&"opaque"!==t.responseType}(n)&&!(0,et.o)(n.status)||("xhr"in n?function(t,e,r){"string"==typeof t.response?r(nt(t.response,e)):r(t.response)}(n.xhr,t,i):n.response?function(t,e,r){var n=(0,et.u)(t)
n&&n.body?window.TextDecoder?function(t,e,r){(0,rt.n)(t,(function(t,e,n){if(t)r(t)
else{var i=(new TextDecoder).decode(e)
n&&(i+="..."),r(void 0,i)}}),{bytesLimit:e,collectStreamBody:!0})}(n.body,e.requestErrorResponseLengthLimit,(function(t,e){r(t?"Unable to retrieve response: ".concat(t):e)})):n.text().then((0,c.zk)((function(t){return r(nt(t,e))})),(0,c.zk)((function(t){return r("Unable to retrieve response: ".concat(t))}))):r()}(n.response,t,i):n.error&&function(t,e,r){r(nt((0,M.P3)((0,_._)(t)),e))}(n.error,t,i))}}(e,i),function(t,e){if(!t.forwardErrorsToLogs)return{stop:$.Z}
var r=new D.y;(0,ot.L)(r).stop,r.subscribe((function(t){e.notify(0,{rawLogsEvent:{message:t.message,date:t.startClocks.timeStamp,error:{kind:t.type,origin:w.z.SOURCE,stack:t.stack},origin:w.z.SOURCE,status:S.error}})}))}(e,i),function(t,e){(0,X.a)(t.forwardConsoleLogs).subscribe((function(t){e.notify(0,{rawLogsEvent:{date:(0,u.n$)(),message:t.message,origin:w.z.CONSOLE,error:t.api===p.vA.error?{origin:w.z.CONSOLE,stack:t.stack,fingerprint:t.fingerprint}:void 0,status:Z[t.api]}})}))}(e,i),function(t,e){(0,v.v)(t.forwardReports).subscribe((function(t){var r,n=t.message,i=J[t.type]
i===S.error?r={kind:t.subtype,origin:w.z.REPORT,stack:t.stack}:t.stack&&(n+=" Found in ".concat((0,M.u5)(t.stack))),e.notify(0,{rawLogsEvent:{date:(0,u.n$)(),message:n,origin:w.z.REPORT,error:r,status:i}})}))}(e,i)
var b,g=function(t){return{handleLog:function(e,r,n,i){var o=e.context
W(e.status,E.console,r)&&(0,p.jf)(e.status,e.message,(0,s.$e)(r.getContext(),o)),t.notify(0,{rawLogsEvent:{date:i||(0,u.n$)(),message:e.message,status:e.status,origin:w.z.LOGGER},messageContext:o,savedCommonContext:n,logger:r})}}}(i).handleLog
return function(t,e,r,n,i,o){var a=k.concat(["custom"]),c={}
a.forEach((function(t){c[t]=(0,q.K)(t,e.eventRateLimiterThreshold,o)})),r.subscribe(0,(function(o){var a,f,h,l=o.rawLogsEvent,d=o.messageContext,p=void 0===d?void 0:d,b=o.savedCommonContext,m=void 0===b?void 0:b,v=o.logger,g=void 0===v?i:v,y=(0,u.ni)(l.date),_=t.findTrackedSession(y)
if(_){var M=m||n(),S=(0,s.$e)({service:e.service,session_id:_.id,usr:(0,F.Qr)(M.user)?void 0:M.user,view:M.view},M.context,G(y),l,g.getContext(),p)
!W(l.status,E.http,g)||!1===(null===(a=e.beforeSend)||void 0===a?void 0:a.call(e,S))||(null===(f=S.error)||void 0===f?void 0:f.origin)!==w.z.AGENT&&(null!==(h=c[S.status])&&void 0!==h?h:c.custom).isLimitReached()||r.notify(1,S)}}))}(h,e,i,r,n,o),(0,f.x)()?function(t){var e=(0,f.A)()
t.subscribe(1,(function(t){e.send("log",t)}))}(i):function(t,e,r,n,i){var o,a=L(t,t.logsEndpointBuilder,r,n,i,null===(o=t.replica)||void 0===o?void 0:o.logsEndpointBuilder)
e.subscribe(1,(function(t){a.add(t)}))}(e,i,o,a,h.expireObservable),(0,I.Uo)(function(t){var e=(0,m.JZ)(t)
return(0,d.f0)({forward_errors_to_logs:t.forwardErrorsToLogs,forward_console_logs:t.forwardConsoleLogs,forward_reports:t.forwardReports},e)}(t)),{handleLog:g,getInternalContext:(b=h,{get:function(t){var e=b.findTrackedSession(t)
if(e)return{session_id:e.id}}}).get}}(t,n,z,H),P=r.handleLog,B=r.getInternalContext,O.drain(),e=!0)}})),getLoggerGlobalContext:(0,c.zk)(r.get),getGlobalContext:(0,c.zk)(r.getContext),setLoggerGlobalContext:(0,c.zk)(r.set),setGlobalContext:(0,c.zk)(r.setContext),addLoggerGlobalContext:(0,c.zk)(r.add),setGlobalContextProperty:(0,c.zk)(r.setContextProperty),removeLoggerGlobalContext:(0,c.zk)(r.remove),removeGlobalContextProperty:(0,c.zk)(r.removeContextProperty),clearGlobalContext:(0,c.zk)(r.clearContext),createLogger:(0,c.zk)((function(t,e){return void 0===e&&(e={}),b[t]=new A((function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
return P.apply(void 0,t)}),(0,h.N)(t),e.handler,e.level,(0,h.N)(e.context)),b[t]})),getLogger:(0,c.zk)((function(t){return b[t]})),getInitConfiguration:(0,c.zk)((function(){return j()})),getInternalContext:(0,c.zk)((function(t){return B(t)})),setUser:(0,c.zk)((function(t){(0,l.z)(t)&&i.setContext((0,l.I)(t))})),getUser:(0,c.zk)(i.getContext),setUserProperty:(0,c.zk)((function(t,e){var r,n=(0,l.I)((r={},r[t]=e,r))[t]
i.setContextProperty(t,n)})),removeUserProperty:(0,c.zk)(i.removeContextProperty),clearUser:(0,c.zk)(i.clearContext)})}();(0,n.y)((0,i.R)(),"DD_LOGS",st)},3207:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{DefaultPrivacyLevel:()=>v.Jj,datadogRum:()=>hr})
var n=r(2807),i=r(6285),o=r(6461),a=r(1005),s=r(6135),u=r(732),c=r(5740),f=r(4358),h=r(16),l=r(8095),d=r(7393),p=r(8935),b=r(9361),m=r(2336),v=r(9083),g=r(8505),y=r(8398),w=r(8483),_=r(4953),M=r(1509)
function S(t){var e=(0,M.o)(t)
return"string"===e||"function"===e||t instanceof RegExp}function E(t,e,r){return void 0===r&&(r=!1),t.some((function(t){try{if("function"==typeof t)return t(e)
if(t instanceof RegExp)return t.test(e)
if("string"==typeof t)return r?(0,y.Ny)(e,t):t===e}catch(t){g.jf.error(t)}return!1}))}var k=r(3416)
function A(t){0!==t.status||t.isAborted||(t.traceId=void 0,t.spanId=void 0,t.traceSampled=void 0)}function T(t,e,r,n){if(void 0!==R()&&r.findTrackedSession()){var i,o,a,s,u,c=(0,y.sE)(t.allowedTracingUrls,(function(t){return E([t.match],e.url,!0)}))
c&&(e.traceId=new x,e.spanId=new x,e.traceSampled=!(0,w.hj)(t.traceSampleRate)||(0,w.y7)(t.traceSampleRate),n((i=e.traceId,o=e.spanId,a=e.traceSampled,s=c.propagatorTypes,u={},s.forEach((function(t){switch(t){case"datadog":(0,y.f0)(u,{"x-datadog-origin":"rum","x-datadog-parent-id":o.toDecimalString(),"x-datadog-sampling-priority":a?"1":"0","x-datadog-trace-id":i.toDecimalString()})
break
case"tracecontext":(0,y.f0)(u,{traceparent:"00-0000000000000000".concat(i.toPaddedHexadecimalString(),"-").concat(o.toPaddedHexadecimalString(),"-0").concat(a?"1":"0")})
break
case"b3":(0,y.f0)(u,{b3:"".concat(i.toPaddedHexadecimalString(),"-").concat(o.toPaddedHexadecimalString(),"-").concat(a?"1":"0")})
break
case"b3multi":(0,y.f0)(u,{"X-B3-TraceId":i.toPaddedHexadecimalString(),"X-B3-SpanId":o.toPaddedHexadecimalString(),"X-B3-Sampled":a?"1":"0"})}})),u)))}}function R(){return window.crypto||window.msCrypto}var x=function(){function t(){this.buffer=new Uint8Array(8),R().getRandomValues(this.buffer),this.buffer[0]=127&this.buffer[0]}return t.prototype.toString=function(t){var e=this.readInt32(0),r=this.readInt32(4),n=""
do{var i=e%t*4294967296+r
e=Math.floor(e/t),r=Math.floor(i/t),n=(i%t).toString(t)+n}while(e||r)
return n},t.prototype.toDecimalString=function(){return this.toString(10)},t.prototype.toPaddedHexadecimalString=function(){var t=this.toString(16)
return Array(17-t.length).join("0")+t},t.prototype.readInt32=function(t){return 16777216*this.buffer[t]+(this.buffer[t+1]<<16)+(this.buffer[t+2]<<8)+this.buffer[t+3]},t}()
function C(t){var e=new Set
return Array.isArray(t.allowedTracingUrls)&&t.allowedTracingUrls.length>0&&t.allowedTracingUrls.forEach((function(t){S(t)?e.add("datadog"):"object"===(0,M.o)(t)&&Array.isArray(t.propagatorTypes)&&t.propagatorTypes.forEach((function(t){return e.add(t)}))})),Array.isArray(t.allowedTracingOrigins)&&t.allowedTracingOrigins.length>0&&e.add("datadog"),(0,y.Oc)(e)}function I(t,e,r){return{context:t.getContext(),user:e.getContext(),hasReplay:!!r.isRecording()||void 0}}var B=r(4314),O=r(5528),P=r(3430),L=r(45),N=r(1398),D=r(7588),j=r(1985)
function U(t,e){if(document.readyState===t||"complete"===document.readyState)e()
else{var r="complete"===t?"load":"DOMContentLoaded";(0,j.O)(window,r,e,{once:!0})}}var H="initial_document",q=[["document",function(t){return H===t}],["xhr",function(t){return"xmlhttprequest"===t}],["fetch",function(t){return"fetch"===t}],["beacon",function(t){return"beacon"===t}],["css",function(t,e){return/\.css$/i.test(e)}],["js",function(t,e){return/\.js$/i.test(e)}],["image",function(t,e){return(0,y.q9)(["image","img","icon"],t)||null!==/\.(gif|jpg|jpeg|tiff|png|svg|ico)$/i.exec(e)}],["font",function(t,e){return null!==/\.(woff|eot|woff2|ttf)$/i.exec(e)}],["media",function(t,e){return(0,y.q9)(["audio","video"],t)||null!==/\.(mp3|mp4)$/i.exec(e)}]]
function F(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
for(var r=1;r<t.length;r+=1)if(t[r-1]>t[r])return!1
return!0}function z(t){var e=W(t)
if(e){var r=e.startTime,n=e.fetchStart,i=e.redirectStart,o=e.redirectEnd,a=e.domainLookupStart,s=e.domainLookupEnd,u=e.connectStart,c=e.secureConnectionStart,f=e.connectEnd,h=e.requestStart,l=e.responseStart,d={download:G(r,l,e.responseEnd),first_byte:G(r,h,l)}
return f!==n&&(d.connect=G(r,u,f),F(u,c,f)&&(d.ssl=G(r,c,f))),s!==n&&(d.dns=G(r,a,s)),K(t)&&(d.redirect=G(r,i,o)),d}}function W(t){if(F(t.startTime,t.fetchStart,t.domainLookupStart,t.domainLookupEnd,t.connectStart,t.connectEnd,t.requestStart,t.responseStart,t.responseEnd)){if(!K(t))return t
var e=t.redirectStart,r=t.redirectEnd
if(e<t.startTime&&(e=t.startTime),r<t.startTime&&(r=t.fetchStart),F(t.startTime,e,r,t.fetchStart))return(0,y.f0)({},t,{redirectEnd:r,redirectStart:e})}}function K(t){return t.fetchStart!==t.startTime}function G(t,e,r){return{duration:(0,u.c0)((0,u._J)(e,r)),start:(0,u.c0)((0,u._J)(t,e))}}function Y(t){if(t.startTime<t.responseStart)return t.decodedBodySize}function V(t,e){return e&&!t.isIntakeUrl(e)}var X=r(5868)
function Z(t){return t.nodeType===Node.TEXT_NODE}var J=2*u.yR
function $(t){var e=function(t){var e=t.querySelector("meta[name=dd-trace-id]"),r=t.querySelector("meta[name=dd-trace-time]")
return Q(e&&e.content,r&&r.content)}(t)||function(t){var e=function(t){for(var e=0;e<t.childNodes.length;e+=1)if(r=tt(t.childNodes[e]))return r
if(t.body)for(e=t.body.childNodes.length-1;e>=0;e-=1){var r,n=t.body.childNodes[e]
if(r=tt(n))return r
if(!Z(n))break}}(t)
if(e)return Q((0,X.MY)(e,"trace-id"),(0,X.MY)(e,"trace-time"))}(t)
if(e&&!(e.traceTime<=(0,u.m6)()-J))return e.traceId}function Q(t,e){var r=e&&Number(e)
if(t&&r)return{traceId:t,traceTime:r}}function tt(t){if(t&&function(t){return t.nodeType===Node.COMMENT_NODE}(t)){var e=/^\s*DATADOG;(.*?)\s*$/.exec(t.data)
if(e)return e[1]}}function et(){return void 0!==window.performance&&"getEntries"in performance}function rt(t){return window.PerformanceObserver&&void 0!==PerformanceObserver.supportedEntryTypes&&PerformanceObserver.supportedEntryTypes.includes(t)}function nt(t,e){var r
if(r=function(r){ot(t,e,[r])},U("interactive",(function(){var t,e={entryType:"resource",initiatorType:H,traceId:$(document)}
if(rt("navigation")&&performance.getEntriesByType("navigation").length>0){var n=performance.getEntriesByType("navigation")[0]
t=(0,y.f0)(n.toJSON(),e)}else{var i=it()
t=(0,y.f0)(i,{decodedBodySize:0,duration:i.responseEnd,name:window.location.href,startTime:0},e)}r(t)})),et()){var n=performance.getEntries();(0,D.iK)((function(){return ot(t,e,n)}))}if(window.PerformanceObserver){var i=(0,l.zk)((function(r){return ot(t,e,r.getEntries())})),o=["resource","navigation","longtask","paint"],a=["largest-contentful-paint","first-input","layout-shift"]
try{a.forEach((function(t){new PerformanceObserver(i).observe({type:t,buffered:!0})}))}catch(t){o.push.apply(o,a)}new PerformanceObserver(i).observe({entryTypes:o}),et()&&"addEventListener"in performance&&(0,j.O)(performance,"resourcetimingbufferfull",(function(){performance.clearResourceTimings()}))}rt("navigation")||function(r){function n(){var r
r=(0,y.f0)(it(),{entryType:"navigation"}),ot(t,e,[r])}U("complete",(function(){(0,D.iK)(n)}))}(),rt("first-input")||function(t){var e=(0,u.m6)(),r=!1,n=(0,j.y)(window,["click","mousedown","keydown","touchstart","pointerdown"],(function(t){if(t.cancelable){var e={entryType:"first-input",processingStart:(0,u._q)(),startTime:t.timeStamp}
"pointerdown"===t.type?function(t){(0,j.y)(window,["pointerup","pointercancel"],(function(e){"pointerup"===e.type&&i(t)}),{once:!0})}(e):i(e)}}),{passive:!0,capture:!0}).stop
function i(i){if(!r){r=!0,n()
var o=i.processingStart-i.startTime
o>=0&&o<(0,u.m6)()-e&&t(i)}}}((function(r){ot(t,e,[r])}))}function it(){var t={},e=performance.timing
for(var r in e)if((0,w.hj)(e[r])){var n=r,i=e[n]
t[n]=0===i?0:(0,u.ni)(i)}return t}function ot(t,e,r){var n=r.filter((function(t){return"resource"===t.entryType||"navigation"===t.entryType||"paint"===t.entryType||"longtask"===t.entryType||"largest-contentful-paint"===t.entryType||"first-input"===t.entryType||"layout-shift"===t.entryType})).filter((function(t){return!function(t){return"navigation"===t.entryType&&t.loadEventEnd<=0}(t)&&!function(t,e){return"resource"===e.entryType&&!V(t,e.name)}(e,t)}))
n.length&&t.notify(0,n)}var at,st,ut=r(3640)
function ct(){var t=window.visualViewport
return t?{width:Number(t.width*t.scale),height:Number(t.height*t.scale)}:{width:Number(window.innerWidth||0),height:Number(window.innerHeight||0)}}function ft(t,e,r){for(var n=t,i=e.split("."),o=0;o<i.length;o+=1){var a=i[o]
if(!ht(n))return
o!==i.length-1?n=n[a]:n[a]=r}}function ht(t){return"object"===(0,M.o)(t)}function lt(t,e){return ht(t)&&Object.prototype.hasOwnProperty.call(t,e)}var dt,pt={"view.url":"string","view.referrer":"string"},bt={context:"object"}
function mt(t,e,r,i,o,a,s,l){var p,b;(p={}).view=pt,p.error=(0,y.f0)({"error.message":"string","error.stack":"string","error.resource.url":"string","error.fingerprint":"string"},bt,pt),p.resource=(0,y.f0)({"resource.url":"string"},bt,pt),p.action=(0,y.f0)({"action.target.name":"string"},bt,pt),p.long_task=(0,y.f0)({},bt,pt),dt=p
var m=((b={}).error=(0,ut.K)("error",t.eventRateLimiterThreshold,l),b.action=(0,ut.K)("action",t.eventRateLimiterThreshold,l),b),v=function(){var t=(0,f.L7)(),e=(0,f.QB)()
if(t&&e)return{test_id:t,result_id:e,injected:(0,f.Y9)()}}(),w=function(){var t,e=null===(t=window.Cypress)||void 0===t?void 0:t.env("traceId")
if("string"==typeof e)return{test_execution_id:e}}()
e.subscribe(10,(function(f){var l,p,b=f.startTime,S=f.rawRumEvent,E=f.domainContext,k=f.savedCommonContext,A=f.customerContext,T=i.findView(b),R=o.findUrl(b),x=r.findTrackedSession(b)
if(x&&T&&R){var C=k||s(),I=a.findActionId(b),B={_dd:{format_version:2,drift:(0,u.QA)(),session:{plan:x.plan},browser_sdk_version:(0,h.x)()?"4.42.2":void 0},application:{id:t.applicationId},date:(0,u.n$)(),service:T.service||t.service,version:T.version||t.version,source:"browser",session:{id:x.id,type:v?"synthetics":w?"ci_test":"user"},view:{id:T.id,name:T.name,url:R.url,referrer:R.referrer},action:(l=S,-1!==["error","resource","long_task"].indexOf(l.type)&&I?{id:I}:void 0),synthetics:v,ci_test:w,display:(st||(st=ct(),(at||(p=new L.y((function(){var t=(0,n.P)((function(){p.notify(ct())}),200).throttled
return(0,j.O)(window,"resize",t,{capture:!0,passive:!0}).stop})),at=p),at).subscribe((function(t){st=t})).unsubscribe),{viewport:st})},O=(0,c.$e)(B,S)
O.context=(0,c.$e)(C.context,A),"has_replay"in O.session||(O.session.has_replay=C.hasReplay),(0,_.Qr)(C.user)||(O.usr=C.user),function(t,e,r,n){var i
if(e){var o=function(t,e,r){var n=(0,c.I8)(t),i=r(n)
return(0,y.qP)(e).forEach((function(e){var r=e[0],i=e[1],o=function(t,e){for(var r=t,n=0,i=e.split(".");n<i.length;n++){var o=i[n]
if(!lt(r,o))return
r=r[o]}return r}(n,r),a=(0,M.o)(o)
a===i?ft(t,r,(0,d.N)(o)):"object"!==i||"undefined"!==a&&"null"!==a||ft(t,r,{})})),i}(t,dt[t.type],(function(t){return e(t,r)}))
if(!1===o&&"view"!==t.type)return!1
!1===o&&g.jf.warn("Can't dismiss view events using beforeSend!")}return!(null===(i=n[t.type])||void 0===i?void 0:i.isLimitReached())}(O,t.beforeSend,E,m)&&((0,_.Qr)(O.context)&&delete O.context,e.notify(11,O))}}))}var vt=[]
function gt(){if(!(vt.length>2500)){var t=vt[vt.length-1],e=(0,u._q)()
void 0!==t&&void 0===t.end||vt.push({start:e})}}function yt(){if(0!==vt.length){var t=vt[vt.length-1],e=(0,u._q)()
void 0===t.end&&(t.end=e)}}function wt(t){for(var e=vt.length-1;e>=0;e--){var r=vt[e]
if(void 0!==r.end&&t>r.end)break
if(t>r.start&&(void 0===r.end||t<r.end))return!0}return!1}function _t(t,e){for(var r=(0,u.WK)(t,e),n=[],i=Math.max(0,vt.length-500),o=vt.length-1;o>=i;o--){var a=vt[o]
if(void 0!==a.end&&t>a.end)break
if(!(r<a.start)){var s=t>a.start?t:a.start,c=(0,u._J)(t,s),f=void 0===a.end||r<a.end?r:a.end,h=(0,u._J)(s,f)
n.unshift({start:(0,u.c0)(c),duration:(0,u.c0)(h)})}}return n}var Mt=r(2968).l,St=r(363),Et=r(1079),kt=St.T,At=r(9617),Tt=r(5316),Rt=r(8266),xt=r(3101),Ct=1
function It(){var t=Ct
return Ct+=1,t}function Bt(t){var e=t.lifeCycle,r=t.isChildEvent,i=t.onChange,o=void 0===i?n.Z:i,a={errorCount:0,longTaskCount:0,resourceCount:0,actionCount:0,frustrationCount:0},s=e.subscribe(11,(function(t){if("view"!==t.type&&r(t))switch(t.type){case"error":a.errorCount+=1,o()
break
case"action":a.actionCount+=1,t.action.frustration&&(a.frustrationCount+=t.action.frustration.type.length),o()
break
case"long_task":a.longTaskCount+=1,o()
break
case"resource":a.resourceCount+=1,o()}}))
return{stop:function(){s.unsubscribe()},eventCounts:a}}var Ot=r(9286),Pt=100,Lt=100
function Nt(t,e,r,n,i){var o=function(t,e,r){var n=new L.y((function(){var i,o=[],a=0
o.push(e.subscribe(c),t.subscribe(0,(function(t){t.some((function(t){return"resource"===t.entryType&&!Dt(r,t.name)}))&&c()})),t.subscribe(5,(function(t){Dt(r,t.url)||(void 0===i&&(i=t.requestIndex),a+=1,c())})),t.subscribe(6,(function(t){Dt(r,t.url)||void 0===i||t.requestIndex<i||(a-=1,c())})))
var s,u=(s=c,(0,Ot.Lm)(window,"open",{before:s})).stop
return function(){u(),o.forEach((function(t){return t.unsubscribe()}))}
function c(){n.notify({isBusy:a>0})}}))
return n}(t,e,r)
return function(t,e,r){var n,i=!1,o=(0,D.iK)((0,l.zk)((function(){return f({hadActivity:!1})})),Pt),a=void 0!==r?(0,D.iK)((0,l.zk)((function(){return f({hadActivity:!0,end:(0,u.n$)()})})),r):void 0,s=t.subscribe((function(t){var e=t.isBusy;(0,D.gr)(o),(0,D.gr)(n)
var r=(0,u.n$)()
e||(n=(0,D.iK)((0,l.zk)((function(){return f({hadActivity:!0,end:r})})),Lt))})),c=function(){i=!0,(0,D.gr)(o),(0,D.gr)(n),(0,D.gr)(a),s.unsubscribe()}
function f(t){i||(c(),e(t))}return{stop:c}}(o,n,i)}function Dt(t,e){return E(t.excludedActivityUrls,e)}var jt=u.WT,Ut=r(1668),Ht="data-dd-action-name"
function qt(t,e){var r
if(void 0===zt&&(zt="closest"in HTMLElement.prototype),zt)r=t.closest("[".concat(e,"]"))
else for(var n=t;n;){if(n.hasAttribute(e)){r=n
break}n=n.parentElement}if(r)return Xt(Vt(r.getAttribute(e).trim()))}var Ft,zt,Wt=[function(t,e){if(void 0===Ft&&(Ft="labels"in HTMLInputElement.prototype),Ft){if("labels"in t&&t.labels&&t.labels.length>0)return Zt(t.labels[0],e)}else if(t.id){var r=t.ownerDocument&&(0,y.sE)(t.ownerDocument.querySelectorAll("label"),(function(e){return e.htmlFor===t.id}))
return r&&Zt(r,e)}},function(t){if("INPUT"===t.nodeName){var e=t,r=e.getAttribute("type")
if("button"===r||"submit"===r||"reset"===r)return e.value}},function(t,e){if("BUTTON"===t.nodeName||"LABEL"===t.nodeName||"button"===t.getAttribute("role"))return Zt(t,e)},function(t){return t.getAttribute("aria-label")},function(t,e){var r=t.getAttribute("aria-labelledby")
if(r)return r.split(/\s+/).map((function(e){return function(t,e){return t.ownerDocument?t.ownerDocument.getElementById(e):null}(t,e)})).filter((function(t){return Boolean(t)})).map((function(t){return Zt(t,e)})).join(" ")},function(t){return t.getAttribute("alt")},function(t){return t.getAttribute("name")},function(t){return t.getAttribute("title")},function(t){return t.getAttribute("placeholder")},function(t,e){if("options"in t&&t.options.length>0)return Zt(t.options[0],e)}],Kt=[function(t,e){return Zt(t,e)}],Gt=10
function Yt(t,e,r){for(var n=t,i=0;i<=Gt&&n&&"BODY"!==n.nodeName&&"HTML"!==n.nodeName&&"HEAD"!==n.nodeName;){for(var o=0,a=r;o<a.length;o++){var s=(0,a[o])(n,e)
if("string"==typeof s){var u=s.trim()
if(u)return Xt(Vt(u))}}if("FORM"===n.nodeName)break
n=n.parentElement,i+=1}}function Vt(t){return t.replace(/\s+/g," ")}function Xt(t){return t.length>100?"".concat((0,X._z)(t,100)," [...]"):t}function Zt(t,e){if(!t.isContentEditable){if("innerText"in t){var r=t.innerText,n=function(e){for(var n=t.querySelectorAll(e),i=0;i<n.length;i+=1){var o=n[i]
if("innerText"in o){var a=o.innerText
a&&a.trim().length>0&&(r=r.replace(a,""))}}}
return(0,Ut.w)()&&n("script, style"),n("[".concat(Ht,"]")),e&&n("[".concat(e,"]")),r}return t.textContent}}var Jt,$t=[Ht,"data-testid","data-test","data-qa","data-cy","data-test-id","data-qa-id","data-testing","data-component","data-element","data-source-file"],Qt=[ne,function(t){if(t.id&&!re(t.id))return"#".concat((0,y.QA)(t.id))}],te=[ne,function(t){if("BODY"!==t.tagName&&t.classList.length>0)for(var e=0;e<t.classList.length;e+=1){var r=t.classList[e]
if(!re(r))return"".concat(t.tagName,".").concat((0,y.QA)(r))}},function(t){return t.tagName}]
function ee(t,e){for(var r="",n=t;n&&"HTML"!==n.nodeName;){var i=oe(n,Qt,ae,e,r)
if(i)return i
r=oe(n,te,se,e,r)||ue(ie(n),r),n=n.parentElement}return r}function re(t){return/[0-9]/.test(t)}function ne(t,e){if(e&&(i=o(e)))return i
for(var r=0,n=$t;r<n.length;r++){var i
if(i=o(n[r]))return i}function o(e){if(t.hasAttribute(e))return"".concat(t.tagName,"[").concat(e,'="').concat((0,y.QA)(t.getAttribute(e)),'"]')}}function ie(t){for(var e=t.parentElement.firstElementChild,r=1;e&&e!==t;)e.tagName===t.tagName&&(r+=1),e=e.nextElementSibling
return"".concat(t.tagName,":nth-of-type(").concat(r,")")}function oe(t,e,r,n,i){for(var o=0,a=e;o<a.length;o++){var s=(0,a[o])(t,n)
if(s){var u=ue(s,i)
if(r(t,u))return u}}}function ae(t,e){return 1===t.ownerDocument.querySelectorAll(e).length}function se(t,e){return 1===t.parentElement.querySelectorAll(function(){if(void 0===Jt)try{document.querySelector(":scope"),Jt=!0}catch(t){Jt=!1}return Jt}()?ue(":scope",e):e).length}function ue(t,e){return e?"".concat(t,">").concat(e):t}function ce(){var t=window.getSelection()
return!t||t.isCollapsed}function fe(t){return t.target instanceof Element&&!1!==t.isPrimary}var he='input:not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="submit"]):not([type="reset"]):not([type="range"]),textarea,select,[contenteditable],[contenteditable] *,canvas,a[href],a[href] *'
function le(t){return!t.hasPageActivity&&!t.getUserActivity().input&&!(0,y.Ap)(t.event.target,he)}var de=10*u.WT,pe=5*u.yR
function be(t,e,r,n,i){var o,a=(0,X.DO)(),s=(0,u.$I)(),c=e.add(a,s.relative),f=Bt({lifeCycle:t,isChildEvent:function(t){return void 0!==t.action&&(Array.isArray(t.action.id)?(0,y.q9)(t.action.id,a):t.action.id===a)}}),h=0,l=[],d=new L.y
function p(t){0===h&&(h=1,(o=t)?c.close((0,u.ni)(o)):c.remove(),f.stop(),d.notify())}return{event:i,stop:p,stopObservable:d,get hasError(){return f.eventCounts.errorCount>0},get hasPageActivity(){return void 0!==o},getUserActivity:r,addFrustration:function(t){l.push(t)},startClocks:s,isStopped:function(){return 1===h||2===h},clone:function(){return be(t,e,r,n,i)},validate:function(e){if(p(),1===h){var r=f.eventCounts,c=r.resourceCount,d=r.errorCount,b=r.longTaskCount,m=(0,y.f0)({type:"click",duration:o&&(0,u._J)(s.timeStamp,o),startClocks:s,id:a,frustrationTypes:l,counts:{resourceCount:c,errorCount:d,longTaskCount:b},events:null!=e?e:[i],event:i},n)
t.notify(1,m),h=2}},discard:function(){p(),h=2}}}function me(t,e){var r=ve(t)?{action:{id:t.id,loading_time:(0,u.c0)(t.duration),frustration:{type:t.frustrationTypes},error:{count:t.counts.errorCount},long_task:{count:t.counts.longTaskCount},resource:{count:t.counts.resourceCount}},_dd:{action:{target:t.target,position:t.position}}}:void 0,n=ve(t)?void 0:t.context,i=(0,c.$e)({action:{id:(0,X.DO)(),target:{name:t.name},type:t.type},date:t.startClocks.timeStamp,type:"action"},r),o=e.isInForegroundAt(t.startClocks.relative)
return void 0!==o&&(i.view={in_foreground:o}),{customerContext:n,rawRumEvent:i,startTime:t.startClocks.relative,domainContext:ve(t)?{event:t.event,events:t.events}:{}}}function ve(t){return"custom"!==t.type}var ge,ye,we=r(6620),_e=r(2543),Me=r(6358),Se=r(9e3),Ee=r(8587),ke=r(2089)
function Ae(t){return(0,u.WK)(t.startTime,t.duration)}function Te(t,e,r,n){t.subscribe(6,(function(i){t.notify(10,function(t,e,r,n){var i,o="xhr"===t.type?"xhr":"fetch",a=function(t){if(performance&&"getEntriesByName"in performance){var e=performance.getEntriesByName(t.url,"resource")
if(e.length&&"toJSON"in e[0]){var r=e.map((function(t){return t.toJSON()})).filter(W).filter((function(e){return r=e,n=t.startClocks.relative,i=Ae({startTime:t.startClocks.relative,duration:t.duration}),r.startTime>=n-1&&Ae(r)<=(0,u.WK)(i,1)
var r,n,i}))
return 1===r.length?r[0]:void 0}}}(t),s=a?(0,u.DY)(a.startTime):t.startClocks,f=a?xe(a):void 0,h=function(t,e){if(t.traceSampled&&t.traceId&&t.spanId)return{_dd:{span_id:t.spanId.toDecimalString(),trace_id:t.traceId.toDecimalString(),rule_psr:Ce(e)}}}(t,e),l=Ie(r,s),d=(0,u.c0)(t.duration),p=Be(n,s,null!==(i=null==a?void 0:a.duration)&&void 0!==i?i:t.duration),b=(0,c.$e)({date:s.timeStamp,resource:{id:(0,X.DO)(),type:o,duration:d,method:t.method,status_code:t.status,url:t.url},type:"resource"},h,f,l,p)
return{startTime:s.relative,rawRumEvent:b,domainContext:{performanceEntry:a&&a,xhr:t.xhr,response:t.response,requestInput:t.input,requestInit:t.init,error:t.error}}}(i,e,r,n))})),t.subscribe(0,(function(i){for(var o=0,a=i;o<a.length;o++){var s=a[o]
"resource"===s.entryType&&"xmlhttprequest"!==(u=s).initiatorType&&"fetch"!==u.initiatorType&&t.notify(10,Re(s,e,r,n))}var u}))}function Re(t,e,r,n){var i=function(t){var e=t.name
if(!(0,k.jv)(e))return(0,P.eJ)('Failed to construct URL for "'.concat(t.name,'"')),"other"
for(var r=(0,k.ye)(e),n=0,i=q;n<i.length;n++){var o=i[n],a=o[0]
if((0,o[1])(t.initiatorType,r))return a}return"other"}(t),o=xe(t),a=(0,u.DY)(t.startTime),s=function(t,e){if(t.traceId)return{_dd:{trace_id:t.traceId,rule_psr:Ce(e)}}}(t,e),f=Ie(r,a),h=Be(n,a,t.duration),l=(0,c.$e)({date:a.timeStamp,resource:{id:(0,X.DO)(),type:i,url:t.name},type:"resource"},s,o,f,h)
return{startTime:a.relative,rawRumEvent:l,domainContext:{performanceEntry:t}}}function xe(t){return{resource:(0,y.f0)({duration:(e=t,r=e.duration,n=e.startTime,i=e.responseEnd,0===r&&n<i?(0,u.c0)((0,u._J)(n,i)):(0,u.c0)(r)),size:Y(t)},z(t))}
var e,r,n,i}function Ce(t){return(0,w.hj)(t.traceSampleRate)?t.traceSampleRate/100:void 0}function Ie(t,e){var r=t.findTrackedSession(e.relative)
return{_dd:{discarded:!r||!r.resourceAllowed}}}function Be(t,e,r){if((0,ke.W_)(ke.uh.RESOURCE_PAGE_STATES))return{_dd:{page_states:t.findAll(e.relative,r),page_was_discarded:String(document.wasDiscarded)}}}function Oe(t){return void 0===t&&(t=window),ge||("hidden"===document.visibilityState?ge={timeStamp:0}:(ge={timeStamp:1/0},ye=(0,j.y)(t,["pagehide","visibilitychange"],(function(t){"pagehide"!==t.type&&"hidden"!==document.visibilityState||(ge.timeStamp=t.timeStamp,ye())}),{capture:!0}).stop)),ge}var Pe=10*u.yR,Le=5*u.yR
function Ne(t,e,r,i,o,a){var s,c={},f=function(t,e,r,n,o,a){var s="initial_load"===n,f=!0,h=[]
function l(){var t
!f&&!s&&h.length>0&&(t=Math.max.apply(Math,h),c.loadingTime=t,i())}return{stop:Nt(t,e,r,(function(t){f&&(f=!1,t.hadActivity&&h.push((0,u._J)(o.timeStamp,t.end)),l())})).stop,setLoadEvent:function(t){s&&(s=!1,h.push(t),l())}}}(t,e,r,o,a),h=f.stop,l=f.setLoadEvent
return rt("layout-shift")?(c.cumulativeLayoutShift=0,s=function(t,e){var r=0,n=function(){var t,e,r=0
return{update:function(n){void 0===t||n.startTime-e>=u.WT||n.startTime-t>=5*u.WT?(t=e=n.startTime,r=n.value):(r+=n.value,e=n.startTime)},value:function(){return r}}}()
return{stop:t.subscribe(0,(function(t){for(var e=0,o=t;e<o.length;e++){var a=o[e]
"layout-shift"!==a.entryType||a.hadRecentInput||(n.update(a),n.value()>r&&(r=n.value(),s=(0,w.NM)(r,4),c.cumulativeLayoutShift=s,i()))}var s})).unsubscribe}}(t).stop):s=n.Z,{stop:function(){h(),s()},setLoadEvent:l,viewMetrics:c}}var De=5*u.yR,je=5*u.yR
function Ue(t){var e=t.indexOf("?")
return e<0?t:t.slice(0,e)}function He(t,e,r,i,o,a,s,c,f){return t.subscribe(3,(function(e){return t.notify(10,function(t,e,r,n){var i,o=n.getReplayStats(t.id),a=r.findFeatureFlagEvaluations(t.startClocks.relative),s={_dd:{document_version:t.documentVersion,replay_stats:o},date:t.startClocks.timeStamp,type:"view",view:{action:{count:t.eventCounts.actionCount},frustration:{count:t.eventCounts.frustrationCount},cumulative_layout_shift:t.cumulativeLayoutShift,first_byte:(0,u.c0)(t.timings.firstByte),dom_complete:(0,u.c0)(t.timings.domComplete),dom_content_loaded:(0,u.c0)(t.timings.domContentLoaded),dom_interactive:(0,u.c0)(t.timings.domInteractive),error:{count:t.eventCounts.errorCount},first_contentful_paint:(0,u.c0)(t.timings.firstContentfulPaint),first_input_delay:(0,u.c0)(t.timings.firstInputDelay),first_input_time:(0,u.c0)(t.timings.firstInputTime),is_active:t.isActive,name:t.name,largest_contentful_paint:(0,u.c0)(t.timings.largestContentfulPaint),load_event:(0,u.c0)(t.timings.loadEvent),loading_time:(i=(0,u.c0)(t.loadingTime),(0,w.hj)(i)&&i<0?void 0:i),loading_type:t.loadingType,long_task:{count:t.eventCounts.longTaskCount},resource:{count:t.eventCounts.resourceCount},time_spent:(0,u.c0)(t.duration),in_foreground_periods:e.selectInForegroundPeriodsFor(t.startClocks.relative,t.duration)},feature_flags:a&&!(0,_.Qr)(a)?a:void 0,session:{has_replay:!!o||void 0,is_active:!!t.sessionIsActive&&void 0}}
return(0,_.Qr)(t.customTimings)||(s.view.custom_timings=(0,_.Q8)(t.customTimings,u.c0)),{rawRumEvent:s,startTime:t.startClocks.relative,domainContext:{location:t.location}}}(e,a,s,c))})),function(t,e,r,i,o,a,s){var c,f=h("initial_load",(0,u.cQ)(),s)
function h(o,a,s){return function(t,e,r,i,o,a,s){void 0===a&&(a=(0,u.$I)())
var c,f,h,l,d=(0,X.DO)(),p={},b=0,m=(0,_.mv)(i),v=!0
s&&(f=s.name,h=s.service,l=s.version),t.notify(2,{id:d,name:f,startClocks:a,service:h,version:l})
var w=(0,n.P)(L,3e3,{leading:!1}),M=w.throttled,S=w.cancel,E=Ne(t,e,r,M,o,a),k=E.setLoadEvent,A=E.stop,T=E.viewMetrics,R="initial_load"===o?function(t,e,r){var n={}
function i(t){(0,y.f0)(n,t),r()}var o=function(t,r){return{stop:t.subscribe(0,(function(t){for(var r=0,n=t;r<n.length;r++){var o=n[r]
"navigation"===o.entryType&&(a={domComplete:o.domComplete,domContentLoaded:o.domContentLoadedEventEnd,domInteractive:o.domInteractive,loadEvent:o.loadEventEnd,firstByte:o.responseStart>=0&&o.responseStart<=(0,u._q)()?o.responseStart:void 0},e(a.loadEvent),i(a))}var a})).unsubscribe}}(t).stop,a=function(t,e){var r=Oe()
return{stop:t.subscribe(0,(function(t){var e=(0,y.sE)(t,(function(t){return"paint"===t.entryType&&"first-contentful-paint"===t.name&&t.startTime<r.timeStamp&&t.startTime<Pe}))
e&&i({firstContentfulPaint:e.startTime})})).unsubscribe}}(t).stop,s=function(t,e,r){var n=Oe(),o=1/0,a=(0,j.y)(e,["pointerdown","keydown"],(function(t){o=t.timeStamp}),{capture:!0,once:!0}).stop,s=t.subscribe(0,(function(t){var e=(0,y.dF)(t,(function(t){return"largest-contentful-paint"===t.entryType&&t.startTime<o&&t.startTime<n.timeStamp&&t.startTime<Pe}))
e&&i({largestContentfulPaint:e.startTime})})).unsubscribe
return{stop:function(){a(),s()}}}(t,window).stop,c=function(t,e){var r=Oe()
return{stop:t.subscribe(0,(function(t){var e,n=(0,y.sE)(t,(function(t){return"first-input"===t.entryType&&t.startTime<r.timeStamp}))
if(n){var o=(0,u._J)(n.startTime,n.processingStart)
i({firstInputDelay:(e={firstInputDelay:o>=0?o:0,firstInputTime:n.startTime}).firstInputDelay,firstInputTime:e.firstInputTime})}})).unsubscribe}}(t).stop
function f(){o(),a(),s(),c()}return{stop:f,timings:n,scheduleStop:function(){(0,D.iK)(f,Le)}}}(t,k,M):{scheduleStop:n.Z,timings:{}},x=R.scheduleStop,C=R.timings,I=function(t,e,r){var n=Bt({lifeCycle:t,isChildEvent:function(t){return t.view.id===e},onChange:r}),i=n.stop
return{scheduleStop:function(){(0,D.iK)(i,De)},eventCounts:n.eventCounts}}(t,d,M),B=I.scheduleStop,O=I.eventCounts,P=(0,D.Zi)(L,je)
function L(){S(),b+=1
var e=void 0===c?(0,u.n$)():c.timeStamp
t.notify(3,(0,y.f0)({customTimings:p,documentVersion:b,id:d,name:f,service:h,version:l,loadingType:o,location:m,startClocks:a,timings:C,duration:(0,u._J)(a.timeStamp,e),isActive:void 0===c,sessionIsActive:v,eventCounts:O},T))}return L(),{name:f,service:h,version:l,end:function(e){var r,n
void 0===e&&(e={}),c||(c=null!==(r=e.endClocks)&&void 0!==r?r:(0,u.$I)(),v=null===(n=e.sessionIsActive)||void 0===n||n,t.notify(4,{endClocks:c}),(0,D.cv)(P),A(),x(),B(),L())},addTiming:function(t,e){if(!c){var r=(0,u.Cn)(e)?e:(0,u._J)(a.timeStamp,e)
p[function(t){var e=t.replace(/[^a-zA-Z0-9-_.@$]/g,"_")
return e!==t&&g.jf.warn("Invalid timing name: ".concat(t,", sanitized to: ").concat(e)),e}(t)]=r,M()}}}}(e,r,i,t,o,a,s)}return e.subscribe(8,(function(){f=h("route_change",void 0,{name:f.name,service:f.service,version:f.version})})),e.subscribe(7,(function(){f.end({sessionIsActive:!1})})),e.subscribe(9,(function(t){t.reason!==O.k$.UNLOADING&&t.reason!==O.k$.PAGEHIDE||f.end()})),a&&(c=function(t){return t.subscribe((function(t){var e,r,n,i=t.oldLocation
r=t.newLocation,(e=i).pathname===r.pathname&&(n=r.hash.substr(1),document.getElementById(n)||Ue(r.hash)===Ue(e.hash))||(f.end(),f=h("route_change"))}))}(o)),{addTiming:function(t,e){void 0===e&&(e=(0,u.n$)()),f.addTiming(t,e)},startView:function(t,e){f.end({endClocks:e}),f=h("route_change",e,t)},stop:function(){null==c||c.unsubscribe(),f.end()}}}(r,t,i,e,o,!e.trackViewsManually,f)}var qe=r(6917)
function Fe(t){return"2"===t||"1"===t}var ze,We,Ke,Ge=r(976),Ye=r(2928),Ve=r(3197),Xe=St.T,Ze=r(6775),Je=r(3374),$e=r(1468),Qe=St.T,tr=10*u.WT
function er(){0!==ze.batchCount&&((0,P.eJ)("Customer data measures",ze),ir())}function rr(t,e){t.sum+=e,t.min=Math.min(t.min,e),t.max=Math.max(t.max,e)}function nr(t,e){t.sum+=e.sum,t.min=Math.min(t.min,e.min),t.max=Math.max(t.max,e.max)}function ir(){ze={batchCount:0,batchBytesCount:{min:1/0,max:0,sum:0},batchMessagesCount:{min:1/0,max:0,sum:0},globalContextBytes:{min:1/0,max:0,sum:0},userContextBytes:{min:1/0,max:0,sum:0},featureFlagBytes:{min:1/0,max:0,sum:0}}}function or(){Ke=!1,We={globalContextBytes:{min:1/0,max:0,sum:0},userContextBytes:{min:1/0,max:0,sum:0},featureFlagBytes:{min:1/0,max:0,sum:0}}}var ar,sr=[]
function ur(){return"hidden"===document.visibilityState?"hidden":document.hasFocus()?"active":"passive"}function cr(t,e){void 0===e&&(e=500),t!==ar&&(ar=t,sr.length===e&&sr.shift(),sr.push({state:ar,startTime:(0,u._q)()}))}var fr=r(6935),hr=function(t,e,r){var o={}.ignoreInitIfSyntheticsWillInjectRum,E=void 0===o||o,R=!1,x=(0,a.W)("global context"),U=(0,a.W)("user"),H=function(){},q=function(){},F=n.Z,z=function(){},W=new s.S,K=function(t,e){void 0===e&&(e=(0,u.n$)()),W.add((function(){return K(t,e)}))},G=function(t,e){void 0===e&&(e=(0,u.$I)()),W.add((function(){return G(t,e)}))},Y=function(t,r){void 0===r&&(r=I(x,U,e)),W.add((function(){return Y(t,r)}))},Z=function(t,r){void 0===r&&(r=I(x,U,e)),W.add((function(){return Z(t,r)}))},J=function(t,e){W.add((function(){return J(t,e)}))}
function $(t,r,i){var o=function(t,e,r,i,o,a){var s=new Mt
s.subscribe(11,(function(t){return(0,B.j)("rum",t)}))
var f=function(t){var e=(0,P.VL)("browser-rum-sdk",t)
if((0,h.x)()){var r=(0,h.A)()
e.observable.subscribe((function(t){return r.send("internal_telemetry",t)}))}return e}(e)
f.setContextProvider((function(){var t,r
return{application:{id:e.applicationId},session:{id:null===(t=M.findTrackedSession())||void 0===t?void 0:t.id},view:{id:null===(r=H.findView())||void 0===r?void 0:r.id},action:{id:z.findActionId()}}}))
var d=function(t){s.notify(12,{error:t})},b=function(t,e){if(void 0===e&&(e=Ze.qt),!(0,ke.W_)(ke.uh.FEATURE_FLAGS))return{findFeatureFlagEvaluations:function(){},getFeatureFlagBytesCount:function(){return 0},addFeatureFlagEvaluation:n.Z,stop:n.Z}
var r=new Et.P(Qe),i=0,o=!1
t.subscribe(4,(function(t){var e=t.endClocks
r.closeActive(e.relative)})),t.subscribe(2,(function(t){var e=t.startClocks
r.add({},e.relative),i=0}))
var a=(0,n.P)((function(t){i=e((0,Je.l)(t)),o||(o=(0,$e.H)(i,"feature flag evaluation"))}),200),s=a.throttled
return{findFeatureFlagEvaluations:function(t){return r.find(t)},getFeatureFlagBytesCount:function(){return r.find()?i:0},addFeatureFlagEvaluation:function(t,e){var n=r.find()
n&&(n[t]=e,s(n))},stop:a.cancel}}(s),m=(0,O.Pd)()
m.subscribe((function(t){s.notify(9,t)}))
var M=(0,h.x)()?function(){var t={id:"00000000-aaaa-0000-aaaa-000000000000",plan:1,sessionReplayAllowed:!1,longTaskAllowed:!0,resourceAllowed:!0}
return{findTrackedSession:function(){return t},expire:n.Z,expireObservable:new L.y}}():function(t,e){var r=(0,qe.HX)(t.cookieOptions,"rum",(function(e){return function(t,e){var r
return{trackingType:r=function(t){return"0"===t||"1"===t||"2"===t}(e)?e:(0,w.y7)(t.sessionSampleRate)?(0,w.y7)(t.sessionReplaySampleRate)?"1":"2":"0",isTracked:Fe(r)}}(t,e)}))
return r.expireObservable.subscribe((function(){e.notify(7)})),r.renewObservable.subscribe((function(){e.notify(8)})),{findTrackedSession:function(e){var n=r.findActiveSession(e)
if(n&&Fe(n.trackingType)){var i="1"===n.trackingType?2:1
return{id:n.id,plan:i,sessionReplayAllowed:2===i,longTaskAllowed:void 0!==t.trackLongTasks?t.trackLongTasks:t.oldPlansBehavior&&2===i,resourceAllowed:void 0!==t.trackResources?t.trackResources:t.oldPlansBehavior&&2===i}}},expire:r.expire,expireObservable:r.expireObservable}}(e,s)
if((0,h.x)())!function(t){var e=(0,h.A)()
t.subscribe(11,(function(t){e.send("rum",t)}))}(s)
else{var S=function(t,e,r,n,i,o){var a=function(t,e,r,n){var i,o=f(t.rumEndpointBuilder),a=o.batch,s=o.flushController,u=t.replica
function f(i){var o=(0,Ge.r)({messagesLimit:t.batchMessagesLimit,bytesLimit:t.batchBytesLimit,durationLimit:t.flushTimeout,pageExitObservable:r,sessionExpireObservable:n})
return{batch:new Ye.E((0,Ve.UF)(i,t.batchBytesLimit,e),o,t.messageBytesLimit),flushController:o}}function h(t){return(0,c.$e)(t,{application:{id:u.applicationId}})}return void 0!==u&&(i=f(u.rumEndpointBuilder).batch),{flushObservable:s.flushObservable,add:function(t,e){void 0===e&&(e=!0),a.add(t),i&&e&&i.add(h(t))},upsert:function(t,e){a.upsert(t,e),i&&i.upsert(h(t),e)}}}(t,n,i,o)
return e.subscribe(11,(function(t){"view"===t.type?a.upsert(t,t.view.id):a.add(t)})),r.subscribe((function(e){return a.add(e,(0,P.VG)(t))})),a}(e,s,f.observable,d,m,M.expireObservable)
!function(t,e,r,n,i,o,a){e.enabled&&(0,w.y7)(t.customerDataTelemetrySampleRate)&&(ir(),or(),r.subscribe(11,(function(t){Ke=!0,rr(We.globalContextBytes,(0,_.Qr)(n.get())?0:n.getBytesCount()),rr(We.userContextBytes,(0,_.Qr)(i.get())?0:i.getBytesCount())
var e=o.findFeatureFlagEvaluations(),r=(0,y.q9)(["view","error"],t.type)&&e&&!(0,_.Qr)(e)
rr(We.featureFlagBytes,r?o.getFeatureFlagBytesCount():0)})),a.subscribe((function(t){var e=t.bytesCount,r=t.messagesCount
Ke&&(ze.batchCount+=1,rr(ze.batchBytesCount,e),rr(ze.batchMessagesCount,r),nr(ze.globalContextBytes,We.globalContextBytes),nr(ze.userContextBytes,We.userContextBytes),nr(ze.featureFlagBytes,We.featureFlagBytes),or())})),(0,D.Zi)(er,tr))}(e,f,s,i,o,b,S.flushObservable)}var E,k,R=(E=function(){var t,e=window
if(e.Zone&&(t=(0,N.I)(e,"MutationObserver"),e.MutationObserver&&t===e.MutationObserver)){var r=new e.MutationObserver(n.Z),i=(0,N.I)(r,"originalInstance")
t=i&&i.constructor}return t||(t=e.MutationObserver),t}(),k=new L.y((function(){if(E){var t=new E((0,l.zk)((function(){return k.notify()})))
return t.observe(document,{attributes:!0,characterData:!0,childList:!0,subtree:!0}),function(){return t.disconnect()}}})),k),x=function(t){var e=(0,_.mv)(t),r=new L.y((function(){var t,e,r,i,o,a=(t=n,e=(0,Ot.Lm)(history,"pushState",{after:t}).stop,r=(0,Ot.Lm)(history,"replaceState",{after:t}).stop,i=(0,j.O)(window,"popstate",t).stop,{stop:function(){e(),r(),i()}}).stop,s=(o=n,(0,j.O)(window,"hashchange",o)).stop
return function(){a(),s()}}))
function n(){if(e.href!==t.href){var n=(0,_.mv)(t)
r.notify({newLocation:n,oldLocation:e}),e=n}}return r}(location),U=function(t,e,r,i,o,a,s,c){var f=function(t){var e=new Et.P(kt)
return t.subscribe(2,(function(t){e.add(function(t){return{service:t.service,version:t.version,id:t.id,name:t.name,startClocks:t.startClocks}}(t),t.startClocks.relative)})),t.subscribe(4,(function(t){var r=t.endClocks
e.closeActive(r.relative)})),t.subscribe(8,(function(){e.reset()})),{findView:function(t){return e.find(t)},stop:function(){e.stop()}}}(t),h=function(t,e,r){var n,i=new Et.P(Xe)
t.subscribe(4,(function(t){var e=t.endClocks
i.closeActive(e.relative)})),t.subscribe(2,(function(t){var e=t.startClocks,o=r.href
i.add(a({url:o,referrer:n||document.referrer}),e.relative),n=o}))
var o=e.subscribe((function(t){var e=t.newLocation,r=i.find()
if(r){var n=(0,u._q)()
i.closeActive(n),i.add(a({url:e.href,referrer:r.referrer}),n)}}))
function a(t){return{url:t.url,referrer:t.referrer}}return{findUrl:function(t){return i.find(t)},stop:function(){o.unsubscribe(),i.stop()}}}(t,o,r),l=function(){document.hasFocus()&&gt()
var t,e,r=(t=gt,(0,j.O)(window,"focus",(function(e){e.isTrusted&&t()}))).stop,n=(e=yt,(0,j.O)(window,"blur",(function(t){t.isTrusted&&e()}))).stop
return{isInForegroundAt:wt,selectInForegroundPeriodsFor:_t,stop:function(){vt=[],r(),n()}}}(),d=function(t,e,r,i){t.subscribe(1,(function(e){return t.notify(10,me(e,i))}))
var o={findActionId:n.Z}
return r.trackUserInteractions&&(o=function(t,e,r){var n,i=new Et.P(pe),o=new L.y
t.subscribe(8,(function(){i.reset()})),t.subscribe(4,m)
var a,s,c,f,h,l,d,p=(a={onPointerDown:function(n){return function(t,e,r,n,i){if(t.trackFrustrations||!n.find()){var o,a,s,u=(o=i,a=t.actionNameAttribute,s=o.target.getBoundingClientRect(),{type:"click",target:{width:Math.round(s.width),height:Math.round(s.height),selector:ee(o.target,a)},position:{x:Math.round(o.clientX-s.left),y:Math.round(o.clientY-s.top)},name:(f=o.target,h=a,qt(f,Ht)||h&&qt(f,h)||Yt(f,h,Wt)||Yt(f,h,Kt)||"")})
if(t.trackFrustrations||u.name){var c=!1
return Nt(e,r,t,(function(t){c=t.hadActivity}),Pt),{clickActionBase:u,hadActivityOnPointerDown:function(){return c}}}}var f,h}(r,t,e,i,n)},onPointerUp:function(n,a,s){var u=n.clickActionBase,c=n.hadActivityOnPointerDown
return function(t,e,r,n,i,o,a,s,u,c){var f=be(e,n,u,a,s)
t.trackFrustrations&&o(f)
var h=Nt(e,r,t,(function(e){e.hadActivity&&e.end<f.startClocks.timeStamp?f.discard():(e.hadActivity?f.stop(e.end):c()?f.stop(f.startClocks.timeStamp):f.stop(),t.trackFrustrations||(e.hadActivity?f.validate():f.discard()))}),de).stop,l=e.subscribe(4,(function(t){var e=t.endClocks
f.stop(e.timeStamp)})),d=i.subscribe((function(){f.stop()}))
f.stopObservable.subscribe((function(){l.unsubscribe(),h(),d.unsubscribe()}))}(r,t,e,i,o,b,u,a,s,c)}},f=a.onPointerDown,h=a.onPointerUp,l={selection:!1,input:!1},d=[(0,j.O)(window,"pointerdown",(function(t){fe(t)&&(s=ce(),l={selection:!1,input:!1},c=f(t))}),{capture:!0}),(0,j.O)(window,"selectionchange",(function(){s&&ce()||(l.selection=!0)}),{capture:!0}),(0,j.O)(window,"pointerup",(function(t){if(fe(t)&&c){var e=l
h(c,t,(function(){return e})),c=void 0}}),{capture:!0}),(0,j.O)(window,"input",(function(){l.input=!0}),{capture:!0})],{stop:function(){d.forEach((function(t){return t.stop()}))}}).stop
return{stop:function(){m(),o.notify(),p()},actionContexts:{findActionId:function(t){return r.trackFrustrations?i.findAll(t):i.find(t)}}}
function b(t){if(!n||!n.tryAppend(t)){var e=t.clone()
n=function(t,e){var r,n=[],i=0
function o(t){t.stopObservable.subscribe(a),n.push(t),(0,D.gr)(r),r=(0,D.iK)(s,jt)}function a(){1===i&&n.every((function(t){return t.isStopped()}))&&(i=2,e(n))}function s(){(0,D.gr)(r),0===i&&(i=1,a())}return o(t),{tryAppend:function(t){return 0===i&&(n.length>0&&(e=n[n.length-1].event,r=t.event,!(e.target===r.target&&(a=e,u=r,Math.sqrt(Math.pow(a.clientX-u.clientX,2)+Math.pow(a.clientY-u.clientY,2))<=100)&&e.timeStamp-r.timeStamp<=jt))?(s(),!1):(o(t),!0))
var e,r,a,u},stop:function(){s()}}}(t,(function(t){!function(t,e){var r=function(t,e){if(function(t){if(t.some((function(t){return t.getUserActivity().selection})))return!1
for(var e=0;e<t.length-2;e+=1)if(t[e+3-1].event.timeStamp-t[e].event.timeStamp<=u.WT)return!0
return!1}(t))return e.addFrustration("rage_click"),t.some(le)&&e.addFrustration("dead_click"),e.hasError&&e.addFrustration("error_click"),{isRage:!0}
var r=t.some((function(t){return t.getUserActivity().selection}))
return t.forEach((function(t){t.hasError&&t.addFrustration("error_click"),le(t)&&!r&&t.addFrustration("dead_click")})),{isRage:!1}}(t,e).isRage
r?(t.forEach((function(t){return t.discard()})),e.stop((0,u.n$)()),e.validate(t.map((function(t){return t.event})))):(e.discard(),t.forEach((function(t){return t.validate()})))}(t,e)}))}}function m(){n&&n.stop()}}(t,e,r).actionContexts),{addAction:function(e,r){t.notify(10,(0,y.f0)({savedCommonContext:r},me(e,i)))},actionContexts:o}}(t,a,e,l),p=d.addAction,b=d.actionContexts
return mt(e,t,i,f,h,b,s,c),{viewContexts:f,foregroundContexts:l,urlContexts:h,addAction:p,actionContexts:b,stop:function(){f.stop(),l.stop()}}}(s,e,location,M,x,R,(function(){return I(i,o,r)}),d),H=U.viewContexts,q=U.foregroundContexts,F=U.urlContexts,z=U.actionContexts,W=U.addAction;(0,P.Uo)(function(t){var e,r,n=(0,v.JZ)(t)
return(0,y.f0)({premium_sample_rate:t.premiumSampleRate,replay_sample_rate:t.replaySampleRate,session_replay_sample_rate:t.sessionReplaySampleRate,trace_sample_rate:null!==(e=t.traceSampleRate)&&void 0!==e?e:t.tracingSampleRate,action_name_attribute:t.actionNameAttribute,use_allowed_tracing_origins:Array.isArray(t.allowedTracingOrigins)&&t.allowedTracingOrigins.length>0,use_allowed_tracing_urls:Array.isArray(t.allowedTracingUrls)&&t.allowedTracingUrls.length>0,selected_tracing_propagators:C(t),default_privacy_level:t.defaultPrivacyLevel,use_excluded_activity_urls:Array.isArray(t.excludedActivityUrls)&&t.excludedActivityUrls.length>0,track_frustrations:t.trackFrustrations,track_views_manually:t.trackViewsManually,track_user_interactions:null!==(r=t.trackUserInteractions)&&void 0!==r?r:t.trackInteractions},n)}(t)),function(t,e){t.subscribe(0,(function(r){for(var n=0,i=r;n<i.length;n++){var o=i[n]
if("longtask"!==o.entryType)break
var a=e.findTrackedSession(o.startTime)
if(!a||!a.longTaskAllowed)break
var s=(0,u.DY)(o.startTime),c={date:s.timeStamp,long_task:{id:(0,X.DO)(),duration:(0,u.c0)(o.duration)},type:"long_task",_dd:{discarded:!1}}
t.notify(10,{rawRumEvent:c,startTime:s.relative,domainContext:{performanceEntry:o.toJSON()}})}}))}(s,M)
var K=(cr(ur()),{findAll:function(t,e){for(var r=[],n=(0,u.WK)(t,e),i=sr.length-1;i>=0;i--){var o=sr[i].startTime
if(!(o>=n)&&(r.unshift(sr[i]),o<t))break}return r.length?r:void 0},stop:(0,j.y)(window,["pageshow","focus","blur","visibilitychange","resume","freeze","pagehide"],(function(t){t.isTrusted&&("freeze"===t.type?cr("frozen"):"pagehide"===t.type?cr(t.persisted?"frozen":"terminated"):cr(ur()))}),{capture:!0}).stop})
Te(s,e,M,K)
var G=He(s,e,location,R,x,q,b,r,a),Y=G.addTiming,Z=G.startView,J=function(t,e,r){var n=new L.y
return function(t){(0,Se.a)([g.vA.error]).subscribe((function(e){return t.notify({startClocks:(0,u.$I)(),message:e.message,stack:e.stack,fingerprint:e.fingerprint,source:Me.z.CONSOLE,handling:"handled",handlingStack:e.handlingStack})}))}(n),(0,we.L)(n),function(t){(0,Ee.v)([Ee._.cspViolation,Ee._.intervention]).subscribe((function(e){return t.notify({startClocks:(0,u.$I)(),message:e.message,stack:e.stack,type:e.subtype,source:Me.z.REPORT,handling:"unhandled"})}))}(n),n.subscribe((function(e){return t.notify(12,{error:e})})),function(t,e,r){return t.subscribe(12,(function(n){var i=n.error,o=n.customerContext,a=n.savedCommonContext
t.notify(10,(0,y.f0)({customerContext:o,savedCommonContext:a},function(t,e,r){var n={date:t.startClocks.timeStamp,error:{id:(0,X.DO)(),message:t.message,source:t.source,stack:t.stack,handling_stack:t.handlingStack,type:t.type,handling:t.handling,causes:t.causes,source_type:"browser",fingerprint:t.fingerprint},type:"error"},i=e.isInForegroundAt(t.startClocks.relative)
i&&(n.view={in_foreground:i})
var o=r.findFeatureFlagEvaluations(t.startClocks.relative)
return o&&!(0,_.Qr)(o)&&(n.feature_flags=o),{rawRumEvent:n,startTime:t.startClocks.relative,domainContext:{error:t.originalError}}}(i,e,r)))})),{addError:function(e,r){var n=e.error,i=e.handlingStack,o=e.startClocks,a=e.context,s=n instanceof Error?(0,_e._)(n):void 0,u=(0,p.AP)({stackTrace:s,originalError:n,handlingStack:i,startClocks:o,nonErrorPrefix:"Provided",source:Me.z.CUSTOM,handling:"handled"})
t.notify(12,{customerContext:a,savedCommonContext:r,error:u})}}}(t,e,r)}(s,q,b).addError;(function(t,e,r){var n=function(t,e){return{clearTracingIfNeeded:A,traceFetch:function(r){return T(t,r,e,(function(t){var e
if(r.input instanceof Request&&!(null===(e=r.init)||void 0===e?void 0:e.headers))r.input=new Request(r.input),Object.keys(t).forEach((function(e){r.input.headers.append(e,t[e])}))
else{r.init=(0,_.mv)(r.init)
var n=[]
r.init.headers instanceof Headers?r.init.headers.forEach((function(t,e){n.push([e,t])})):Array.isArray(r.init.headers)?r.init.headers.forEach((function(t){n.push(t)})):r.init.headers&&Object.keys(r.init.headers).forEach((function(t){n.push([t,r.init.headers[t]])})),r.init.headers=n.concat((0,y.qP)(t))}}))},traceXhr:function(r,n){return T(t,r,e,(function(t){Object.keys(t).forEach((function(e){n.setRequestHeader(e,t[e])}))}))}}}(e,r)
!function(t,e,r){(0,At.S)().subscribe((function(n){var i=n
if(V(e,i.url))switch(i.state){case"start":r.traceXhr(i,i.xhr),i.requestIndex=It(),t.notify(5,{requestIndex:i.requestIndex,url:i.url})
break
case"complete":r.clearTracingIfNeeded(i),t.notify(6,{duration:i.duration,method:i.method,requestIndex:i.requestIndex,spanId:i.spanId,startClocks:i.startClocks,status:i.status,traceId:i.traceId,traceSampled:i.traceSampled,type:"xhr",url:i.url,xhr:i.xhr})}}))}(t,e,n),function(t,e,r){(0,Tt.y)().subscribe((function(n){var i=n
if(V(e,i.url))switch(i.state){case"start":r.traceFetch(i),i.requestIndex=It(),t.notify(5,{requestIndex:i.requestIndex,url:i.url})
break
case"resolve":!function(t,e){var r=t.response&&(0,Rt.u)(t.response)
r&&r.body?(0,xt.n)(r.body,(function(){e((0,u._J)(t.startClocks.timeStamp,(0,u.n$)()))}),{bytesLimit:Number.POSITIVE_INFINITY,collectStreamBody:!1}):e((0,u._J)(t.startClocks.timeStamp,(0,u.n$)()))}(i,(function(e){r.clearTracingIfNeeded(i),t.notify(6,{duration:e,method:i.method,requestIndex:i.requestIndex,responseType:i.responseType,spanId:i.spanId,startClocks:i.startClocks,status:i.status,traceId:i.traceId,traceSampled:i.traceSampled,type:"fetch",url:i.url,response:i.response,init:i.init,input:i.input})}))}}))}(t,e,n)})(s,e,M),nt(s,e)
var $=function(t,e,r,n,i){return{get:function(o){var a=r.findView(o),s=i.findUrl(o),u=e.findTrackedSession(o)
if(u&&a&&s){var c=n.findActionId(o)
return{application_id:t,session_id:u.id,user_action:c?{id:c}:void 0,view:{id:a.id,name:a.name,referrer:s.referrer,url:s.url}}}}}}(e.applicationId,M,H,z,F)
return{addAction:W,addError:J,addTiming:Y,addFeatureFlagEvaluation:b.addFeatureFlagEvaluation,startView:Z,lifeCycle:s,viewContexts:H,session:M,stopSession:function(){return M.expire()},getInternalContext:$.get}}(t,r,e,x,U,i)
z=function(){return e.getSessionReplayLink(r,o.session,o.viewContexts)},G=o.startView,Y=o.addAction,Z=o.addError,K=o.addTiming,J=o.addFeatureFlagEvaluation,H=o.getInternalContext,F=o.stopSession,W.drain(),e.onRumStart(o.lifeCycle,r,o.session,o.viewContexts)}var Q=(0,l.zk)((function(t){G("object"==typeof t?t:{name:t})}))
return(0,i.r)({init:(0,l.zk)((function(t){if(q=function(){return(0,c.I8)(t)},!E||!(0,f.Y9)()){if((0,h.x)())t=function(t){return(0,y.f0)({},t,{applicationId:"00000000-aaaa-0000-aaaa-000000000000",clientToken:"empty",sessionSampleRate:100})}(t)
else if(!function(t){return(0,m.oX)((0,v.HZ)(t))?"file:"!==window.location.protocol||(g.jf.error("Execution is not allowed in the current context."),!1):(g.jf.warn("Cookies are not authorized, we will not send any data."),!1)}(t))return
if(function(t){return!R||(t.silentMultipleInit||g.jf.error("DD_RUM is already initialized."),!1)}(t)){var e=function(t){var e,r,n,i,o,a
if(t.applicationId)if(void 0===t.sessionReplaySampleRate||(0,w.zz)(t.sessionReplaySampleRate)){var s=null!==(e=t.premiumSampleRate)&&void 0!==e?e:t.replaySampleRate
if(void 0!==s&&void 0!==t.sessionReplaySampleRate&&(g.jf.warn("Ignoring Premium Sample Rate because Session Replay Sample Rate is set"),s=void 0),void 0===s||(0,w.zz)(s)){var u=null!==(r=t.traceSampleRate)&&void 0!==r?r:t.tracingSampleRate
if(void 0===u||(0,w.zz)(u))if(void 0===t.excludedActivityUrls||Array.isArray(t.excludedActivityUrls)){var c=function(t){if(void 0!==t.allowedTracingUrls&&void 0!==t.allowedTracingOrigins&&g.jf.warn("Both allowedTracingUrls and allowedTracingOrigins (deprecated) have been defined. The parameter allowedTracingUrls will override allowedTracingOrigins."),void 0!==t.allowedTracingUrls){if(!Array.isArray(t.allowedTracingUrls))return void g.jf.error("Allowed Tracing URLs should be an array")
if(0!==t.allowedTracingUrls.length&&void 0===t.service)return void g.jf.error("Service needs to be configured when tracing is enabled")
var e=[]
return t.allowedTracingUrls.forEach((function(t){var r
S(t)?e.push({match:t,propagatorTypes:["datadog"]}):(r=t,"object"===(0,M.o)(r)&&S(r.match)&&Array.isArray(r.propagatorTypes)?e.push(t):g.jf.warn("Allowed Tracing Urls parameters should be a string, RegExp, function, or an object. Ignoring parameter",t))})),e}if(void 0!==t.allowedTracingOrigins){if(!Array.isArray(t.allowedTracingOrigins))return void g.jf.error("Allowed Tracing Origins should be an array")
if(0!==t.allowedTracingOrigins.length&&void 0===t.service)return void g.jf.error("Service needs to be configured when tracing is enabled")
var r=[]
return t.allowedTracingOrigins.forEach((function(t){var e=function(t){var e
if("string"==typeof t?e=t:t instanceof RegExp?e=function(e){return t.test((0,k.P$)(e))}:"function"==typeof t&&(e=function(e){return t((0,k.P$)(e))}),void 0!==e)return{match:e,propagatorTypes:["datadog"]}
g.jf.warn("Allowed Tracing Origins parameters should be a string, RegExp or function. Ignoring parameter",t)}(t)
e&&r.push(e)})),r}return[]}(t)
if(c){var f=(0,v.fP)(t)
if(f){var h=!!(null!==(n=t.trackUserInteractions)&&void 0!==n?n:t.trackInteractions),l=!!t.trackFrustrations
return(0,y.f0)({applicationId:t.applicationId,version:t.version,actionNameAttribute:t.actionNameAttribute,sessionReplaySampleRate:null!==(o=null!==(i=t.sessionReplaySampleRate)&&void 0!==i?i:s)&&void 0!==o?o:100,oldPlansBehavior:void 0===t.sessionReplaySampleRate,traceSampleRate:u,allowedTracingUrls:c,excludedActivityUrls:null!==(a=t.excludedActivityUrls)&&void 0!==a?a:[],trackUserInteractions:h||l,trackFrustrations:l,trackViewsManually:!!t.trackViewsManually,trackResources:t.trackResources,trackLongTasks:t.trackLongTasks,subdomain:t.subdomain,defaultPrivacyLevel:(0,_.E5)(v.Jj,t.defaultPrivacyLevel)?t.defaultPrivacyLevel:v.Jj.MASK_USER_INPUT,customerDataTelemetrySampleRate:1},f)}}}else g.jf.error("Excluded Activity Urls should be an array")
else g.jf.error("Trace Sample Rate should be a number between 0 and 100")}else g.jf.error("Premium Sample Rate should be a number between 0 and 100")}else g.jf.error("Session Replay Sample Rate should be a number between 0 and 100")
else g.jf.error("Application ID is not configured, no RUM data will be collected.")}(t)
if(e){if(e.trackViewsManually){var r=W
W=new s.S,G=function(r){$(t,e,r)},r.drain()}else $(t,e)
R=!0}}}})),addRumGlobalContext:(0,l.zk)(x.add),setGlobalContextProperty:(0,l.zk)(x.setContextProperty),removeRumGlobalContext:(0,l.zk)(x.remove),removeGlobalContextProperty:(0,l.zk)(x.removeContextProperty),getRumGlobalContext:(0,l.zk)(x.get),getGlobalContext:(0,l.zk)(x.getContext),setRumGlobalContext:(0,l.zk)(x.set),setGlobalContext:(0,l.zk)(x.setContext),clearGlobalContext:(0,l.zk)(x.clearContext),getInternalContext:(0,l.zk)((function(t){return H(t)})),getInitConfiguration:(0,l.zk)((function(){return q()})),addAction:(0,l.zk)((function(t,e){Y({name:(0,d.N)(t),context:(0,d.N)(e),startClocks:(0,u.$I)(),type:"custom"})})),addError:function(t,e){var r=(0,p.Xp)();(0,l.L6)((function(){Z({error:t,handlingStack:r,context:(0,d.N)(e),startClocks:(0,u.$I)()})}))},addTiming:(0,l.zk)((function(t,e){K((0,d.N)(t),e)})),setUser:(0,l.zk)((function(t){(0,b.z)(t)&&U.setContext((0,b.I)(t))})),getUser:(0,l.zk)(U.getContext),setUserProperty:(0,l.zk)((function(t,e){var r,n=(0,b.I)((r={},r[t]=e,r))[t]
U.setContextProperty(t,n)})),removeUserProperty:(0,l.zk)(U.removeContextProperty),removeUser:(0,l.zk)(U.clearContext),clearUser:(0,l.zk)(U.clearContext),startView:Q,stopSession:(0,l.zk)((function(){F()})),startSessionReplayRecording:(0,l.zk)(e.start),stopSessionReplayRecording:(0,l.zk)(e.stop),addFeatureFlagEvaluation:(0,l.zk)((function(t,e){J((0,d.N)(t),(0,d.N)(e))})),getSessionReplayLink:(0,l.zk)((function(){return z()}))})}(0,{start:n.Z,stop:n.Z,onRumStart:n.Z,isRecording:function(){return!1},getReplayStats:function(){},getSessionReplayLink:function(t){return function(t,e){var r=e.session,n=e.viewContext,i=e.errorType,o=r?r.id:"no-session-id",a=[]
void 0!==i&&a.push("error-type=".concat(i)),n&&(a.push("seed=".concat(n.id)),a.push("from=".concat(n.startClocks.timeStamp)))
var s,u,c,f=(u=(s=t).site,c=s.subdomain||function(t){switch(t.site){case fr.D_:case fr.Ds:return"app"
case fr.DZ:return"dd"
default:return}}(s),"https://".concat(c?"".concat(c,"."):"").concat(u)),h="/rum/replay/sessions/".concat(o)
return"".concat(f).concat(h,"?").concat(a.join("&"))}(t,{errorType:"slim-package"})}});(0,i.y)((0,o.R)(),"DD_RUM",hr)},8357:(t,e,r)=>{"use strict"
const n=e
n.bignum=r(1734),n.define=r(1568).define,n.base=r(2412),n.constants=r(9387),n.decoders=r(1500),n.encoders=r(7506)},1568:(t,e,r)=>{"use strict"
const n=r(7506),i=r(1500),o=r(1736)
function a(t,e){this.name=t,this.body=e,this.decoders={},this.encoders={}}e.define=function(t,e){return new a(t,e)},a.prototype._createNamed=function(t){const e=this.name
function r(t){this._initNamed(t,e)}return o(r,t),r.prototype._initNamed=function(e,r){t.call(this,e,r)},new r(this)},a.prototype._getDecoder=function(t){return t=t||"der",this.decoders.hasOwnProperty(t)||(this.decoders[t]=this._createNamed(i[t])),this.decoders[t]},a.prototype.decode=function(t,e,r){return this._getDecoder(e).decode(t,r)},a.prototype._getEncoder=function(t){return t=t||"der",this.encoders.hasOwnProperty(t)||(this.encoders[t]=this._createNamed(n[t])),this.encoders[t]},a.prototype.encode=function(t,e,r){return this._getEncoder(e).encode(t,r)}},585:(t,e,r)=>{"use strict"
const n=r(1736),i=r(2719).b,o=r(1755).Buffer
function a(t,e){i.call(this,e),o.isBuffer(t)?(this.base=t,this.offset=0,this.length=t.length):this.error("Input not Buffer")}function s(t,e){if(Array.isArray(t))this.length=0,this.value=t.map((function(t){return s.isEncoderBuffer(t)||(t=new s(t,e)),this.length+=t.length,t}),this)
else if("number"==typeof t){if(!(0<=t&&t<=255))return e.error("non-byte EncoderBuffer value")
this.value=t,this.length=1}else if("string"==typeof t)this.value=t,this.length=o.byteLength(t)
else{if(!o.isBuffer(t))return e.error("Unsupported type: "+typeof t)
this.value=t,this.length=t.length}}n(a,i),e.C=a,a.isDecoderBuffer=function(t){return t instanceof a||"object"==typeof t&&o.isBuffer(t.base)&&"DecoderBuffer"===t.constructor.name&&"number"==typeof t.offset&&"number"==typeof t.length&&"function"==typeof t.save&&"function"==typeof t.restore&&"function"==typeof t.isEmpty&&"function"==typeof t.readUInt8&&"function"==typeof t.skip&&"function"==typeof t.raw},a.prototype.save=function(){return{offset:this.offset,reporter:i.prototype.save.call(this)}},a.prototype.restore=function(t){const e=new a(this.base)
return e.offset=t.offset,e.length=this.offset,this.offset=t.offset,i.prototype.restore.call(this,t.reporter),e},a.prototype.isEmpty=function(){return this.offset===this.length},a.prototype.readUInt8=function(t){return this.offset+1<=this.length?this.base.readUInt8(this.offset++,!0):this.error(t||"DecoderBuffer overrun")},a.prototype.skip=function(t,e){if(!(this.offset+t<=this.length))return this.error(e||"DecoderBuffer overrun")
const r=new a(this.base)
return r._reporterState=this._reporterState,r.offset=this.offset,r.length=this.offset+t,this.offset+=t,r},a.prototype.raw=function(t){return this.base.slice(t?t.offset:this.offset,this.length)},e.R=s,s.isEncoderBuffer=function(t){return t instanceof s||"object"==typeof t&&"EncoderBuffer"===t.constructor.name&&"number"==typeof t.length&&"function"==typeof t.join},s.prototype.join=function(t,e){return t||(t=o.alloc(this.length)),e||(e=0),0===this.length||(Array.isArray(this.value)?this.value.forEach((function(r){r.join(t,e),e+=r.length})):("number"==typeof this.value?t[e]=this.value:"string"==typeof this.value?t.write(this.value,e):o.isBuffer(this.value)&&this.value.copy(t,e),e+=this.length)),t}},2412:(t,e,r)=>{"use strict"
const n=e
n.Reporter=r(2719).b,n.DecoderBuffer=r(585).C,n.EncoderBuffer=r(585).R,n.Node=r(1371)},1371:(t,e,r)=>{"use strict"
const n=r(2719).b,i=r(585).R,o=r(585).C,a=r(4504),s=["seq","seqof","set","setof","objid","bool","gentime","utctime","null_","enum","int","objDesc","bitstr","bmpstr","charstr","genstr","graphstr","ia5str","iso646str","numstr","octstr","printstr","t61str","unistr","utf8str","videostr"],u=["key","obj","use","optional","explicit","implicit","def","choice","any","contains"].concat(s)
function c(t,e,r){const n={}
this._baseState=n,n.name=r,n.enc=t,n.parent=e||null,n.children=null,n.tag=null,n.args=null,n.reverseArgs=null,n.choice=null,n.optional=!1,n.any=!1,n.obj=!1,n.use=null,n.useDecoder=null,n.key=null,n.default=null,n.explicit=null,n.implicit=null,n.contains=null,n.parent||(n.children=[],this._wrap())}t.exports=c
const f=["enc","parent","children","tag","args","reverseArgs","choice","optional","any","obj","use","alteredUse","key","default","explicit","implicit","contains"]
c.prototype.clone=function(){const t=this._baseState,e={}
f.forEach((function(r){e[r]=t[r]}))
const r=new this.constructor(e.parent)
return r._baseState=e,r},c.prototype._wrap=function(){const t=this._baseState
u.forEach((function(e){this[e]=function(){const r=new this.constructor(this)
return t.children.push(r),r[e].apply(r,arguments)}}),this)},c.prototype._init=function(t){const e=this._baseState
a(null===e.parent),t.call(this),e.children=e.children.filter((function(t){return t._baseState.parent===this}),this),a.equal(e.children.length,1,"Root node can have only one child")},c.prototype._useArgs=function(t){const e=this._baseState,r=t.filter((function(t){return t instanceof this.constructor}),this)
t=t.filter((function(t){return!(t instanceof this.constructor)}),this),0!==r.length&&(a(null===e.children),e.children=r,r.forEach((function(t){t._baseState.parent=this}),this)),0!==t.length&&(a(null===e.args),e.args=t,e.reverseArgs=t.map((function(t){if("object"!=typeof t||t.constructor!==Object)return t
const e={}
return Object.keys(t).forEach((function(r){r==(0|r)&&(r|=0)
const n=t[r]
e[n]=r})),e})))},["_peekTag","_decodeTag","_use","_decodeStr","_decodeObjid","_decodeTime","_decodeNull","_decodeInt","_decodeBool","_decodeList","_encodeComposite","_encodeStr","_encodeObjid","_encodeTime","_encodeNull","_encodeInt","_encodeBool"].forEach((function(t){c.prototype[t]=function(){const e=this._baseState
throw new Error(t+" not implemented for encoding: "+e.enc)}})),s.forEach((function(t){c.prototype[t]=function(){const e=this._baseState,r=Array.prototype.slice.call(arguments)
return a(null===e.tag),e.tag=t,this._useArgs(r),this}})),c.prototype.use=function(t){a(t)
const e=this._baseState
return a(null===e.use),e.use=t,this},c.prototype.optional=function(){return this._baseState.optional=!0,this},c.prototype.def=function(t){const e=this._baseState
return a(null===e.default),e.default=t,e.optional=!0,this},c.prototype.explicit=function(t){const e=this._baseState
return a(null===e.explicit&&null===e.implicit),e.explicit=t,this},c.prototype.implicit=function(t){const e=this._baseState
return a(null===e.explicit&&null===e.implicit),e.implicit=t,this},c.prototype.obj=function(){const t=this._baseState,e=Array.prototype.slice.call(arguments)
return t.obj=!0,0!==e.length&&this._useArgs(e),this},c.prototype.key=function(t){const e=this._baseState
return a(null===e.key),e.key=t,this},c.prototype.any=function(){return this._baseState.any=!0,this},c.prototype.choice=function(t){const e=this._baseState
return a(null===e.choice),e.choice=t,this._useArgs(Object.keys(t).map((function(e){return t[e]}))),this},c.prototype.contains=function(t){const e=this._baseState
return a(null===e.use),e.contains=t,this},c.prototype._decode=function(t,e){const r=this._baseState
if(null===r.parent)return t.wrapResult(r.children[0]._decode(t,e))
let n,i=r.default,a=!0,s=null
if(null!==r.key&&(s=t.enterKey(r.key)),r.optional){let n=null
if(null!==r.explicit?n=r.explicit:null!==r.implicit?n=r.implicit:null!==r.tag&&(n=r.tag),null!==n||r.any){if(a=this._peekTag(t,n,r.any),t.isError(a))return a}else{const n=t.save()
try{null===r.choice?this._decodeGeneric(r.tag,t,e):this._decodeChoice(t,e),a=!0}catch(t){a=!1}t.restore(n)}}if(r.obj&&a&&(n=t.enterObject()),a){if(null!==r.explicit){const e=this._decodeTag(t,r.explicit)
if(t.isError(e))return e
t=e}const n=t.offset
if(null===r.use&&null===r.choice){let e
r.any&&(e=t.save())
const n=this._decodeTag(t,null!==r.implicit?r.implicit:r.tag,r.any)
if(t.isError(n))return n
r.any?i=t.raw(e):t=n}if(e&&e.track&&null!==r.tag&&e.track(t.path(),n,t.length,"tagged"),e&&e.track&&null!==r.tag&&e.track(t.path(),t.offset,t.length,"content"),r.any||(i=null===r.choice?this._decodeGeneric(r.tag,t,e):this._decodeChoice(t,e)),t.isError(i))return i
if(r.any||null!==r.choice||null===r.children||r.children.forEach((function(r){r._decode(t,e)})),r.contains&&("octstr"===r.tag||"bitstr"===r.tag)){const n=new o(i)
i=this._getUse(r.contains,t._reporterState.obj)._decode(n,e)}}return r.obj&&a&&(i=t.leaveObject(n)),null===r.key||null===i&&!0!==a?null!==s&&t.exitKey(s):t.leaveKey(s,r.key,i),i},c.prototype._decodeGeneric=function(t,e,r){const n=this._baseState
return"seq"===t||"set"===t?null:"seqof"===t||"setof"===t?this._decodeList(e,t,n.args[0],r):/str$/.test(t)?this._decodeStr(e,t,r):"objid"===t&&n.args?this._decodeObjid(e,n.args[0],n.args[1],r):"objid"===t?this._decodeObjid(e,null,null,r):"gentime"===t||"utctime"===t?this._decodeTime(e,t,r):"null_"===t?this._decodeNull(e,r):"bool"===t?this._decodeBool(e,r):"objDesc"===t?this._decodeStr(e,t,r):"int"===t||"enum"===t?this._decodeInt(e,n.args&&n.args[0],r):null!==n.use?this._getUse(n.use,e._reporterState.obj)._decode(e,r):e.error("unknown tag: "+t)},c.prototype._getUse=function(t,e){const r=this._baseState
return r.useDecoder=this._use(t,e),a(null===r.useDecoder._baseState.parent),r.useDecoder=r.useDecoder._baseState.children[0],r.implicit!==r.useDecoder._baseState.implicit&&(r.useDecoder=r.useDecoder.clone(),r.useDecoder._baseState.implicit=r.implicit),r.useDecoder},c.prototype._decodeChoice=function(t,e){const r=this._baseState
let n=null,i=!1
return Object.keys(r.choice).some((function(o){const a=t.save(),s=r.choice[o]
try{const r=s._decode(t,e)
if(t.isError(r))return!1
n={type:o,value:r},i=!0}catch(e){return t.restore(a),!1}return!0}),this),i?n:t.error("Choice not matched")},c.prototype._createEncoderBuffer=function(t){return new i(t,this.reporter)},c.prototype._encode=function(t,e,r){const n=this._baseState
if(null!==n.default&&n.default===t)return
const i=this._encodeValue(t,e,r)
return void 0===i||this._skipDefault(i,e,r)?void 0:i},c.prototype._encodeValue=function(t,e,r){const i=this._baseState
if(null===i.parent)return i.children[0]._encode(t,e||new n)
let o=null
if(this.reporter=e,i.optional&&void 0===t){if(null===i.default)return
t=i.default}let a=null,s=!1
if(i.any)o=this._createEncoderBuffer(t)
else if(i.choice)o=this._encodeChoice(t,e)
else if(i.contains)a=this._getUse(i.contains,r)._encode(t,e),s=!0
else if(i.children)a=i.children.map((function(r){if("null_"===r._baseState.tag)return r._encode(null,e,t)
if(null===r._baseState.key)return e.error("Child should have a key")
const n=e.enterKey(r._baseState.key)
if("object"!=typeof t)return e.error("Child expected, but input is not object")
const i=r._encode(t[r._baseState.key],e,t)
return e.leaveKey(n),i}),this).filter((function(t){return t})),a=this._createEncoderBuffer(a)
else if("seqof"===i.tag||"setof"===i.tag){if(!i.args||1!==i.args.length)return e.error("Too many args for : "+i.tag)
if(!Array.isArray(t))return e.error("seqof/setof, but data is not Array")
const r=this.clone()
r._baseState.implicit=null,a=this._createEncoderBuffer(t.map((function(r){const n=this._baseState
return this._getUse(n.args[0],t)._encode(r,e)}),r))}else null!==i.use?o=this._getUse(i.use,r)._encode(t,e):(a=this._encodePrimitive(i.tag,t),s=!0)
if(!i.any&&null===i.choice){const t=null!==i.implicit?i.implicit:i.tag,r=null===i.implicit?"universal":"context"
null===t?null===i.use&&e.error("Tag could be omitted only for .use()"):null===i.use&&(o=this._encodeComposite(t,s,r,a))}return null!==i.explicit&&(o=this._encodeComposite(i.explicit,!1,"context",o)),o},c.prototype._encodeChoice=function(t,e){const r=this._baseState,n=r.choice[t.type]
return n||a(!1,t.type+" not found in "+JSON.stringify(Object.keys(r.choice))),n._encode(t.value,e)},c.prototype._encodePrimitive=function(t,e){const r=this._baseState
if(/str$/.test(t))return this._encodeStr(e,t)
if("objid"===t&&r.args)return this._encodeObjid(e,r.reverseArgs[0],r.args[1])
if("objid"===t)return this._encodeObjid(e,null,null)
if("gentime"===t||"utctime"===t)return this._encodeTime(e,t)
if("null_"===t)return this._encodeNull()
if("int"===t||"enum"===t)return this._encodeInt(e,r.args&&r.reverseArgs[0])
if("bool"===t)return this._encodeBool(e)
if("objDesc"===t)return this._encodeStr(e,t)
throw new Error("Unsupported tag: "+t)},c.prototype._isNumstr=function(t){return/^[0-9 ]*$/.test(t)},c.prototype._isPrintstr=function(t){return/^[A-Za-z0-9 '()+,-./:=?]*$/.test(t)}},2719:(t,e,r)=>{"use strict"
const n=r(1736)
function i(t){this._reporterState={obj:null,path:[],options:t||{},errors:[]}}function o(t,e){this.path=t,this.rethrow(e)}e.b=i,i.prototype.isError=function(t){return t instanceof o},i.prototype.save=function(){const t=this._reporterState
return{obj:t.obj,pathLen:t.path.length}},i.prototype.restore=function(t){const e=this._reporterState
e.obj=t.obj,e.path=e.path.slice(0,t.pathLen)},i.prototype.enterKey=function(t){return this._reporterState.path.push(t)},i.prototype.exitKey=function(t){const e=this._reporterState
e.path=e.path.slice(0,t-1)},i.prototype.leaveKey=function(t,e,r){const n=this._reporterState
this.exitKey(t),null!==n.obj&&(n.obj[e]=r)},i.prototype.path=function(){return this._reporterState.path.join("/")},i.prototype.enterObject=function(){const t=this._reporterState,e=t.obj
return t.obj={},e},i.prototype.leaveObject=function(t){const e=this._reporterState,r=e.obj
return e.obj=t,r},i.prototype.error=function(t){let e
const r=this._reporterState,n=t instanceof o
if(e=n?t:new o(r.path.map((function(t){return"["+JSON.stringify(t)+"]"})).join(""),t.message||t,t.stack),!r.options.partial)throw e
return n||r.errors.push(e),e},i.prototype.wrapResult=function(t){const e=this._reporterState
return e.options.partial?{result:this.isError(t)?null:t,errors:e.errors}:t},n(o,Error),o.prototype.rethrow=function(t){if(this.message=t+" at: "+(this.path||"(shallow)"),Error.captureStackTrace&&Error.captureStackTrace(this,o),!this.stack)try{throw new Error(this.message)}catch(t){this.stack=t.stack}return this}},6520:(t,e)=>{"use strict"
function r(t){const e={}
return Object.keys(t).forEach((function(r){(0|r)==r&&(r|=0)
const n=t[r]
e[n]=r})),e}e.tagClass={0:"universal",1:"application",2:"context",3:"private"},e.tagClassByName=r(e.tagClass),e.tag={0:"end",1:"bool",2:"int",3:"bitstr",4:"octstr",5:"null_",6:"objid",7:"objDesc",8:"external",9:"real",10:"enum",11:"embed",12:"utf8str",13:"relativeOid",16:"seq",17:"set",18:"numstr",19:"printstr",20:"t61str",21:"videostr",22:"ia5str",23:"utctime",24:"gentime",25:"graphstr",26:"iso646str",27:"genstr",28:"unistr",29:"charstr",30:"bmpstr"},e.tagByName=r(e.tag)},9387:(t,e,r)=>{"use strict"
const n=e
n._reverse=function(t){const e={}
return Object.keys(t).forEach((function(r){(0|r)==r&&(r|=0)
const n=t[r]
e[n]=r})),e},n.der=r(6520)},2387:(t,e,r)=>{"use strict"
const n=r(1736),i=r(1734),o=r(585).C,a=r(1371),s=r(6520)
function u(t){this.enc="der",this.name=t.name,this.entity=t,this.tree=new c,this.tree._init(t.body)}function c(t){a.call(this,"der",t)}function f(t,e){let r=t.readUInt8(e)
if(t.isError(r))return r
const n=s.tagClass[r>>6],i=0==(32&r)
if(31==(31&r)){let n=r
for(r=0;128==(128&n);){if(n=t.readUInt8(e),t.isError(n))return n
r<<=7,r|=127&n}}else r&=31
return{cls:n,primitive:i,tag:r,tagStr:s.tag[r]}}function h(t,e,r){let n=t.readUInt8(r)
if(t.isError(n))return n
if(!e&&128===n)return null
if(0==(128&n))return n
const i=127&n
if(i>4)return t.error("length octect is too long")
n=0
for(let o=0;o<i;o++){n<<=8
const e=t.readUInt8(r)
if(t.isError(e))return e
n|=e}return n}t.exports=u,u.prototype.decode=function(t,e){return o.isDecoderBuffer(t)||(t=new o(t,e)),this.tree._decode(t,e)},n(c,a),c.prototype._peekTag=function(t,e,r){if(t.isEmpty())return!1
const n=t.save(),i=f(t,'Failed to peek tag: "'+e+'"')
return t.isError(i)?i:(t.restore(n),i.tag===e||i.tagStr===e||i.tagStr+"of"===e||r)},c.prototype._decodeTag=function(t,e,r){const n=f(t,'Failed to decode tag of "'+e+'"')
if(t.isError(n))return n
let i=h(t,n.primitive,'Failed to get length of "'+e+'"')
if(t.isError(i))return i
if(!r&&n.tag!==e&&n.tagStr!==e&&n.tagStr+"of"!==e)return t.error('Failed to match tag: "'+e+'"')
if(n.primitive||null!==i)return t.skip(i,'Failed to match body of: "'+e+'"')
const o=t.save(),a=this._skipUntilEnd(t,'Failed to skip indefinite length body: "'+this.tag+'"')
return t.isError(a)?a:(i=t.offset-o.offset,t.restore(o),t.skip(i,'Failed to match body of: "'+e+'"'))},c.prototype._skipUntilEnd=function(t,e){for(;;){const r=f(t,e)
if(t.isError(r))return r
const n=h(t,r.primitive,e)
if(t.isError(n))return n
let i
if(i=r.primitive||null!==n?t.skip(n):this._skipUntilEnd(t,e),t.isError(i))return i
if("end"===r.tagStr)break}},c.prototype._decodeList=function(t,e,r,n){const i=[]
for(;!t.isEmpty();){const e=this._peekTag(t,"end")
if(t.isError(e))return e
const o=r.decode(t,"der",n)
if(t.isError(o)&&e)break
i.push(o)}return i},c.prototype._decodeStr=function(t,e){if("bitstr"===e){const e=t.readUInt8()
return t.isError(e)?e:{unused:e,data:t.raw()}}if("bmpstr"===e){const e=t.raw()
if(e.length%2==1)return t.error("Decoding of string type: bmpstr length mismatch")
let r=""
for(let t=0;t<e.length/2;t++)r+=String.fromCharCode(e.readUInt16BE(2*t))
return r}if("numstr"===e){const e=t.raw().toString("ascii")
return this._isNumstr(e)?e:t.error("Decoding of string type: numstr unsupported characters")}if("octstr"===e)return t.raw()
if("objDesc"===e)return t.raw()
if("printstr"===e){const e=t.raw().toString("ascii")
return this._isPrintstr(e)?e:t.error("Decoding of string type: printstr unsupported characters")}return/str$/.test(e)?t.raw().toString():t.error("Decoding of string type: "+e+" unsupported")},c.prototype._decodeObjid=function(t,e,r){let n
const i=[]
let o=0,a=0
for(;!t.isEmpty();)a=t.readUInt8(),o<<=7,o|=127&a,0==(128&a)&&(i.push(o),o=0)
128&a&&i.push(o)
const s=i[0]/40|0,u=i[0]%40
if(n=r?i:[s,u].concat(i.slice(1)),e){let t=e[n.join(" ")]
void 0===t&&(t=e[n.join(".")]),void 0!==t&&(n=t)}return n},c.prototype._decodeTime=function(t,e){const r=t.raw().toString()
let n,i,o,a,s,u
if("gentime"===e)n=0|r.slice(0,4),i=0|r.slice(4,6),o=0|r.slice(6,8),a=0|r.slice(8,10),s=0|r.slice(10,12),u=0|r.slice(12,14)
else{if("utctime"!==e)return t.error("Decoding "+e+" time is not supported yet")
n=0|r.slice(0,2),i=0|r.slice(2,4),o=0|r.slice(4,6),a=0|r.slice(6,8),s=0|r.slice(8,10),u=0|r.slice(10,12),n=n<70?2e3+n:1900+n}return Date.UTC(n,i-1,o,a,s,u,0)},c.prototype._decodeNull=function(){return null},c.prototype._decodeBool=function(t){const e=t.readUInt8()
return t.isError(e)?e:0!==e},c.prototype._decodeInt=function(t,e){const r=t.raw()
let n=new i(r)
return e&&(n=e[n.toString(10)]||n),n},c.prototype._use=function(t,e){return"function"==typeof t&&(t=t(e)),t._getDecoder("der").tree}},1500:(t,e,r)=>{"use strict"
const n=e
n.der=r(2387),n.pem=r(529)},529:(t,e,r)=>{"use strict"
const n=r(1736),i=r(1755).Buffer,o=r(2387)
function a(t){o.call(this,t),this.enc="pem"}n(a,o),t.exports=a,a.prototype.decode=function(t,e){const r=t.toString().split(/[\r\n]+/g),n=e.label.toUpperCase(),a=/^-----(BEGIN|END) ([^-]+)-----$/
let s=-1,u=-1
for(let i=0;i<r.length;i++){const t=r[i].match(a)
if(null!==t&&t[2]===n){if(-1!==s){if("END"!==t[1])break
u=i
break}if("BEGIN"!==t[1])break
s=i}}if(-1===s||-1===u)throw new Error("PEM section not found for: "+n)
const c=r.slice(s+1,u).join("")
c.replace(/[^a-z0-9+/=]+/gi,"")
const f=i.from(c,"base64")
return o.prototype.decode.call(this,f,e)}},1068:(t,e,r)=>{"use strict"
const n=r(1736),i=r(1755).Buffer,o=r(1371),a=r(6520)
function s(t){this.enc="der",this.name=t.name,this.entity=t,this.tree=new u,this.tree._init(t.body)}function u(t){o.call(this,"der",t)}function c(t){return t<10?"0"+t:t}t.exports=s,s.prototype.encode=function(t,e){return this.tree._encode(t,e).join()},n(u,o),u.prototype._encodeComposite=function(t,e,r,n){const o=function(t,e,r,n){let i
if("seqof"===t?t="seq":"setof"===t&&(t="set"),a.tagByName.hasOwnProperty(t))i=a.tagByName[t]
else{if("number"!=typeof t||(0|t)!==t)return n.error("Unknown tag: "+t)
i=t}return i>=31?n.error("Multi-octet tag encoding unsupported"):(e||(i|=32),i|=a.tagClassByName[r||"universal"]<<6,i)}(t,e,r,this.reporter)
if(n.length<128){const t=i.alloc(2)
return t[0]=o,t[1]=n.length,this._createEncoderBuffer([t,n])}let s=1
for(let i=n.length;i>=256;i>>=8)s++
const u=i.alloc(2+s)
u[0]=o,u[1]=128|s
for(let i=1+s,a=n.length;a>0;i--,a>>=8)u[i]=255&a
return this._createEncoderBuffer([u,n])},u.prototype._encodeStr=function(t,e){if("bitstr"===e)return this._createEncoderBuffer([0|t.unused,t.data])
if("bmpstr"===e){const e=i.alloc(2*t.length)
for(let r=0;r<t.length;r++)e.writeUInt16BE(t.charCodeAt(r),2*r)
return this._createEncoderBuffer(e)}return"numstr"===e?this._isNumstr(t)?this._createEncoderBuffer(t):this.reporter.error("Encoding of string type: numstr supports only digits and space"):"printstr"===e?this._isPrintstr(t)?this._createEncoderBuffer(t):this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark"):/str$/.test(e)||"objDesc"===e?this._createEncoderBuffer(t):this.reporter.error("Encoding of string type: "+e+" unsupported")},u.prototype._encodeObjid=function(t,e,r){if("string"==typeof t){if(!e)return this.reporter.error("string objid given, but no values map found")
if(!e.hasOwnProperty(t))return this.reporter.error("objid not found in values map")
t=e[t].split(/[\s.]+/g)
for(let e=0;e<t.length;e++)t[e]|=0}else if(Array.isArray(t)){t=t.slice()
for(let e=0;e<t.length;e++)t[e]|=0}if(!Array.isArray(t))return this.reporter.error("objid() should be either array or string, got: "+JSON.stringify(t))
if(!r){if(t[1]>=40)return this.reporter.error("Second objid identifier OOB")
t.splice(0,2,40*t[0]+t[1])}let n=0
for(let i=0;i<t.length;i++){let e=t[i]
for(n++;e>=128;e>>=7)n++}const o=i.alloc(n)
let a=o.length-1
for(let i=t.length-1;i>=0;i--){let e=t[i]
for(o[a--]=127&e;(e>>=7)>0;)o[a--]=128|127&e}return this._createEncoderBuffer(o)},u.prototype._encodeTime=function(t,e){let r
const n=new Date(t)
return"gentime"===e?r=[c(n.getUTCFullYear()),c(n.getUTCMonth()+1),c(n.getUTCDate()),c(n.getUTCHours()),c(n.getUTCMinutes()),c(n.getUTCSeconds()),"Z"].join(""):"utctime"===e?r=[c(n.getUTCFullYear()%100),c(n.getUTCMonth()+1),c(n.getUTCDate()),c(n.getUTCHours()),c(n.getUTCMinutes()),c(n.getUTCSeconds()),"Z"].join(""):this.reporter.error("Encoding "+e+" time is not supported yet"),this._encodeStr(r,"octstr")},u.prototype._encodeNull=function(){return this._createEncoderBuffer("")},u.prototype._encodeInt=function(t,e){if("string"==typeof t){if(!e)return this.reporter.error("String int or enum given, but no values map")
if(!e.hasOwnProperty(t))return this.reporter.error("Values map doesn't contain: "+JSON.stringify(t))
t=e[t]}if("number"!=typeof t&&!i.isBuffer(t)){const e=t.toArray()
!t.sign&&128&e[0]&&e.unshift(0),t=i.from(e)}if(i.isBuffer(t)){let e=t.length
0===t.length&&e++
const r=i.alloc(e)
return t.copy(r),0===t.length&&(r[0]=0),this._createEncoderBuffer(r)}if(t<128)return this._createEncoderBuffer(t)
if(t<256)return this._createEncoderBuffer([0,t])
let r=1
for(let i=t;i>=256;i>>=8)r++
const n=new Array(r)
for(let i=n.length-1;i>=0;i--)n[i]=255&t,t>>=8
return 128&n[0]&&n.unshift(0),this._createEncoderBuffer(i.from(n))},u.prototype._encodeBool=function(t){return this._createEncoderBuffer(t?255:0)},u.prototype._use=function(t,e){return"function"==typeof t&&(t=t(e)),t._getEncoder("der").tree},u.prototype._skipDefault=function(t,e,r){const n=this._baseState
let i
if(null===n.default)return!1
const o=t.join()
if(void 0===n.defaultBuffer&&(n.defaultBuffer=this._encodeValue(n.default,e,r).join()),o.length!==n.defaultBuffer.length)return!1
for(i=0;i<o.length;i++)if(o[i]!==n.defaultBuffer[i])return!1
return!0}},7506:(t,e,r)=>{"use strict"
const n=e
n.der=r(1068),n.pem=r(8520)},8520:(t,e,r)=>{"use strict"
const n=r(1736),i=r(1068)
function o(t){i.call(this,t),this.enc="pem"}n(o,i),t.exports=o,o.prototype.encode=function(t,e){const r=i.prototype.encode.call(this,t).toString("base64"),n=["-----BEGIN "+e.label+"-----"]
for(let i=0;i<r.length;i+=64)n.push(r.slice(i,i+64))
return n.push("-----END "+e.label+"-----"),n.join("\n")}},4919:(t,e)=>{"use strict"
e.byteLength=function(t){var e=s(t),r=e[0],n=e[1]
return 3*(r+n)/4-n},e.toByteArray=function(t){var e,r,o=s(t),a=o[0],u=o[1],c=new i(function(t,e,r){return 3*(e+r)/4-r}(0,a,u)),f=0,h=u>0?a-4:a
for(r=0;r<h;r+=4)e=n[t.charCodeAt(r)]<<18|n[t.charCodeAt(r+1)]<<12|n[t.charCodeAt(r+2)]<<6|n[t.charCodeAt(r+3)],c[f++]=e>>16&255,c[f++]=e>>8&255,c[f++]=255&e
return 2===u&&(e=n[t.charCodeAt(r)]<<2|n[t.charCodeAt(r+1)]>>4,c[f++]=255&e),1===u&&(e=n[t.charCodeAt(r)]<<10|n[t.charCodeAt(r+1)]<<4|n[t.charCodeAt(r+2)]>>2,c[f++]=e>>8&255,c[f++]=255&e),c},e.fromByteArray=function(t){for(var e,n=t.length,i=n%3,o=[],a=16383,s=0,c=n-i;s<c;s+=a)o.push(u(t,s,s+a>c?c:s+a))
return 1===i?(e=t[n-1],o.push(r[e>>2]+r[e<<4&63]+"==")):2===i&&(e=(t[n-2]<<8)+t[n-1],o.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"=")),o.join("")}
for(var r=[],n=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0;a<64;++a)r[a]=o[a],n[o.charCodeAt(a)]=a
function s(t){var e=t.length
if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4")
var r=t.indexOf("=")
return-1===r&&(r=e),[r,r===e?0:4-r%4]}function u(t,e,n){for(var i,o,a=[],s=e;s<n;s+=3)i=(t[s]<<16&16711680)+(t[s+1]<<8&65280)+(255&t[s+2]),a.push(r[(o=i)>>18&63]+r[o>>12&63]+r[o>>6&63]+r[63&o])
return a.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},1734:function(t,e,r){!function(t,e){"use strict"
function n(t,e){if(!t)throw new Error(e||"Assertion failed")}function i(t,e){t.super_=e
var r=function(){}
r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}function o(t,e,r){if(o.isBN(t))return t
this.negative=0,this.words=null,this.length=0,this.red=null,null!==t&&("le"!==e&&"be"!==e||(r=e,e=10),this._init(t||0,e||10,r||"be"))}var a
"object"==typeof t?t.exports=o:e.BN=o,o.BN=o,o.wordSize=26
try{a="undefined"!=typeof window&&void 0!==window.Buffer?window.Buffer:r(6601).Buffer}catch(t){}function s(t,e){var r=t.charCodeAt(e)
return r>=65&&r<=70?r-55:r>=97&&r<=102?r-87:r-48&15}function u(t,e,r){var n=s(t,r)
return r-1>=e&&(n|=s(t,r-1)<<4),n}function c(t,e,r,n){for(var i=0,o=Math.min(t.length,r),a=e;a<o;a++){var s=t.charCodeAt(a)-48
i*=n,i+=s>=49?s-49+10:s>=17?s-17+10:s}return i}o.isBN=function(t){return t instanceof o||null!==t&&"object"==typeof t&&t.constructor.wordSize===o.wordSize&&Array.isArray(t.words)},o.max=function(t,e){return t.cmp(e)>0?t:e},o.min=function(t,e){return t.cmp(e)<0?t:e},o.prototype._init=function(t,e,r){if("number"==typeof t)return this._initNumber(t,e,r)
if("object"==typeof t)return this._initArray(t,e,r)
"hex"===e&&(e=16),n(e===(0|e)&&e>=2&&e<=36)
var i=0
"-"===(t=t.toString().replace(/\s+/g,""))[0]&&(i++,this.negative=1),i<t.length&&(16===e?this._parseHex(t,i,r):(this._parseBase(t,e,i),"le"===r&&this._initArray(this.toArray(),e,r)))},o.prototype._initNumber=function(t,e,r){t<0&&(this.negative=1,t=-t),t<67108864?(this.words=[67108863&t],this.length=1):t<4503599627370496?(this.words=[67108863&t,t/67108864&67108863],this.length=2):(n(t<9007199254740992),this.words=[67108863&t,t/67108864&67108863,1],this.length=3),"le"===r&&this._initArray(this.toArray(),e,r)},o.prototype._initArray=function(t,e,r){if(n("number"==typeof t.length),t.length<=0)return this.words=[0],this.length=1,this
this.length=Math.ceil(t.length/3),this.words=new Array(this.length)
for(var i=0;i<this.length;i++)this.words[i]=0
var o,a,s=0
if("be"===r)for(i=t.length-1,o=0;i>=0;i-=3)a=t[i]|t[i-1]<<8|t[i-2]<<16,this.words[o]|=a<<s&67108863,this.words[o+1]=a>>>26-s&67108863,(s+=24)>=26&&(s-=26,o++)
else if("le"===r)for(i=0,o=0;i<t.length;i+=3)a=t[i]|t[i+1]<<8|t[i+2]<<16,this.words[o]|=a<<s&67108863,this.words[o+1]=a>>>26-s&67108863,(s+=24)>=26&&(s-=26,o++)
return this.strip()},o.prototype._parseHex=function(t,e,r){this.length=Math.ceil((t.length-e)/6),this.words=new Array(this.length)
for(var n=0;n<this.length;n++)this.words[n]=0
var i,o=0,a=0
if("be"===r)for(n=t.length-1;n>=e;n-=2)i=u(t,e,n)<<o,this.words[a]|=67108863&i,o>=18?(o-=18,a+=1,this.words[a]|=i>>>26):o+=8
else for(n=(t.length-e)%2==0?e+1:e;n<t.length;n+=2)i=u(t,e,n)<<o,this.words[a]|=67108863&i,o>=18?(o-=18,a+=1,this.words[a]|=i>>>26):o+=8
this.strip()},o.prototype._parseBase=function(t,e,r){this.words=[0],this.length=1
for(var n=0,i=1;i<=67108863;i*=e)n++
n--,i=i/e|0
for(var o=t.length-r,a=o%n,s=Math.min(o,o-a)+r,u=0,f=r;f<s;f+=n)u=c(t,f,f+n,e),this.imuln(i),this.words[0]+u<67108864?this.words[0]+=u:this._iaddn(u)
if(0!==a){var h=1
for(u=c(t,f,t.length,e),f=0;f<a;f++)h*=e
this.imuln(h),this.words[0]+u<67108864?this.words[0]+=u:this._iaddn(u)}this.strip()},o.prototype.copy=function(t){t.words=new Array(this.length)
for(var e=0;e<this.length;e++)t.words[e]=this.words[e]
t.length=this.length,t.negative=this.negative,t.red=this.red},o.prototype.clone=function(){var t=new o(null)
return this.copy(t),t},o.prototype._expand=function(t){for(;this.length<t;)this.words[this.length++]=0
return this},o.prototype.strip=function(){for(;this.length>1&&0===this.words[this.length-1];)this.length--
return this._normSign()},o.prototype._normSign=function(){return 1===this.length&&0===this.words[0]&&(this.negative=0),this},o.prototype.inspect=function(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"}
var f=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],h=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],l=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176]
function d(t,e,r){r.negative=e.negative^t.negative
var n=t.length+e.length|0
r.length=n,n=n-1|0
var i=0|t.words[0],o=0|e.words[0],a=i*o,s=67108863&a,u=a/67108864|0
r.words[0]=s
for(var c=1;c<n;c++){for(var f=u>>>26,h=67108863&u,l=Math.min(c,e.length-1),d=Math.max(0,c-t.length+1);d<=l;d++){var p=c-d|0
f+=(a=(i=0|t.words[p])*(o=0|e.words[d])+h)/67108864|0,h=67108863&a}r.words[c]=0|h,u=0|f}return 0!==u?r.words[c]=0|u:r.length--,r.strip()}o.prototype.toString=function(t,e){var r
if(e=0|e||1,16===(t=t||10)||"hex"===t){r=""
for(var i=0,o=0,a=0;a<this.length;a++){var s=this.words[a],u=(16777215&(s<<i|o)).toString(16)
r=0!=(o=s>>>24-i&16777215)||a!==this.length-1?f[6-u.length]+u+r:u+r,(i+=2)>=26&&(i-=26,a--)}for(0!==o&&(r=o.toString(16)+r);r.length%e!=0;)r="0"+r
return 0!==this.negative&&(r="-"+r),r}if(t===(0|t)&&t>=2&&t<=36){var c=h[t],d=l[t]
r=""
var p=this.clone()
for(p.negative=0;!p.isZero();){var b=p.modn(d).toString(t)
r=(p=p.idivn(d)).isZero()?b+r:f[c-b.length]+b+r}for(this.isZero()&&(r="0"+r);r.length%e!=0;)r="0"+r
return 0!==this.negative&&(r="-"+r),r}n(!1,"Base should be between 2 and 36")},o.prototype.toNumber=function(){var t=this.words[0]
return 2===this.length?t+=67108864*this.words[1]:3===this.length&&1===this.words[2]?t+=4503599627370496+67108864*this.words[1]:this.length>2&&n(!1,"Number can only safely store up to 53 bits"),0!==this.negative?-t:t},o.prototype.toJSON=function(){return this.toString(16)},o.prototype.toBuffer=function(t,e){return n(void 0!==a),this.toArrayLike(a,t,e)},o.prototype.toArray=function(t,e){return this.toArrayLike(Array,t,e)},o.prototype.toArrayLike=function(t,e,r){var i=this.byteLength(),o=r||Math.max(1,i)
n(i<=o,"byte array longer than desired length"),n(o>0,"Requested array length <= 0"),this.strip()
var a,s,u="le"===e,c=new t(o),f=this.clone()
if(u){for(s=0;!f.isZero();s++)a=f.andln(255),f.iushrn(8),c[s]=a
for(;s<o;s++)c[s]=0}else{for(s=0;s<o-i;s++)c[s]=0
for(s=0;!f.isZero();s++)a=f.andln(255),f.iushrn(8),c[o-s-1]=a}return c},Math.clz32?o.prototype._countBits=function(t){return 32-Math.clz32(t)}:o.prototype._countBits=function(t){var e=t,r=0
return e>=4096&&(r+=13,e>>>=13),e>=64&&(r+=7,e>>>=7),e>=8&&(r+=4,e>>>=4),e>=2&&(r+=2,e>>>=2),r+e},o.prototype._zeroBits=function(t){if(0===t)return 26
var e=t,r=0
return 0==(8191&e)&&(r+=13,e>>>=13),0==(127&e)&&(r+=7,e>>>=7),0==(15&e)&&(r+=4,e>>>=4),0==(3&e)&&(r+=2,e>>>=2),0==(1&e)&&r++,r},o.prototype.bitLength=function(){var t=this.words[this.length-1],e=this._countBits(t)
return 26*(this.length-1)+e},o.prototype.zeroBits=function(){if(this.isZero())return 0
for(var t=0,e=0;e<this.length;e++){var r=this._zeroBits(this.words[e])
if(t+=r,26!==r)break}return t},o.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},o.prototype.toTwos=function(t){return 0!==this.negative?this.abs().inotn(t).iaddn(1):this.clone()},o.prototype.fromTwos=function(t){return this.testn(t-1)?this.notn(t).iaddn(1).ineg():this.clone()},o.prototype.isNeg=function(){return 0!==this.negative},o.prototype.neg=function(){return this.clone().ineg()},o.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},o.prototype.iuor=function(t){for(;this.length<t.length;)this.words[this.length++]=0
for(var e=0;e<t.length;e++)this.words[e]=this.words[e]|t.words[e]
return this.strip()},o.prototype.ior=function(t){return n(0==(this.negative|t.negative)),this.iuor(t)},o.prototype.or=function(t){return this.length>t.length?this.clone().ior(t):t.clone().ior(this)},o.prototype.uor=function(t){return this.length>t.length?this.clone().iuor(t):t.clone().iuor(this)},o.prototype.iuand=function(t){var e
e=this.length>t.length?t:this
for(var r=0;r<e.length;r++)this.words[r]=this.words[r]&t.words[r]
return this.length=e.length,this.strip()},o.prototype.iand=function(t){return n(0==(this.negative|t.negative)),this.iuand(t)},o.prototype.and=function(t){return this.length>t.length?this.clone().iand(t):t.clone().iand(this)},o.prototype.uand=function(t){return this.length>t.length?this.clone().iuand(t):t.clone().iuand(this)},o.prototype.iuxor=function(t){var e,r
this.length>t.length?(e=this,r=t):(e=t,r=this)
for(var n=0;n<r.length;n++)this.words[n]=e.words[n]^r.words[n]
if(this!==e)for(;n<e.length;n++)this.words[n]=e.words[n]
return this.length=e.length,this.strip()},o.prototype.ixor=function(t){return n(0==(this.negative|t.negative)),this.iuxor(t)},o.prototype.xor=function(t){return this.length>t.length?this.clone().ixor(t):t.clone().ixor(this)},o.prototype.uxor=function(t){return this.length>t.length?this.clone().iuxor(t):t.clone().iuxor(this)},o.prototype.inotn=function(t){n("number"==typeof t&&t>=0)
var e=0|Math.ceil(t/26),r=t%26
this._expand(e),r>0&&e--
for(var i=0;i<e;i++)this.words[i]=67108863&~this.words[i]
return r>0&&(this.words[i]=~this.words[i]&67108863>>26-r),this.strip()},o.prototype.notn=function(t){return this.clone().inotn(t)},o.prototype.setn=function(t,e){n("number"==typeof t&&t>=0)
var r=t/26|0,i=t%26
return this._expand(r+1),this.words[r]=e?this.words[r]|1<<i:this.words[r]&~(1<<i),this.strip()},o.prototype.iadd=function(t){var e,r,n
if(0!==this.negative&&0===t.negative)return this.negative=0,e=this.isub(t),this.negative^=1,this._normSign()
if(0===this.negative&&0!==t.negative)return t.negative=0,e=this.isub(t),t.negative=1,e._normSign()
this.length>t.length?(r=this,n=t):(r=t,n=this)
for(var i=0,o=0;o<n.length;o++)e=(0|r.words[o])+(0|n.words[o])+i,this.words[o]=67108863&e,i=e>>>26
for(;0!==i&&o<r.length;o++)e=(0|r.words[o])+i,this.words[o]=67108863&e,i=e>>>26
if(this.length=r.length,0!==i)this.words[this.length]=i,this.length++
else if(r!==this)for(;o<r.length;o++)this.words[o]=r.words[o]
return this},o.prototype.add=function(t){var e
return 0!==t.negative&&0===this.negative?(t.negative=0,e=this.sub(t),t.negative^=1,e):0===t.negative&&0!==this.negative?(this.negative=0,e=t.sub(this),this.negative=1,e):this.length>t.length?this.clone().iadd(t):t.clone().iadd(this)},o.prototype.isub=function(t){if(0!==t.negative){t.negative=0
var e=this.iadd(t)
return t.negative=1,e._normSign()}if(0!==this.negative)return this.negative=0,this.iadd(t),this.negative=1,this._normSign()
var r,n,i=this.cmp(t)
if(0===i)return this.negative=0,this.length=1,this.words[0]=0,this
i>0?(r=this,n=t):(r=t,n=this)
for(var o=0,a=0;a<n.length;a++)o=(e=(0|r.words[a])-(0|n.words[a])+o)>>26,this.words[a]=67108863&e
for(;0!==o&&a<r.length;a++)o=(e=(0|r.words[a])+o)>>26,this.words[a]=67108863&e
if(0===o&&a<r.length&&r!==this)for(;a<r.length;a++)this.words[a]=r.words[a]
return this.length=Math.max(this.length,a),r!==this&&(this.negative=1),this.strip()},o.prototype.sub=function(t){return this.clone().isub(t)}
var p=function(t,e,r){var n,i,o,a=t.words,s=e.words,u=r.words,c=0,f=0|a[0],h=8191&f,l=f>>>13,d=0|a[1],p=8191&d,b=d>>>13,m=0|a[2],v=8191&m,g=m>>>13,y=0|a[3],w=8191&y,_=y>>>13,M=0|a[4],S=8191&M,E=M>>>13,k=0|a[5],A=8191&k,T=k>>>13,R=0|a[6],x=8191&R,C=R>>>13,I=0|a[7],B=8191&I,O=I>>>13,P=0|a[8],L=8191&P,N=P>>>13,D=0|a[9],j=8191&D,U=D>>>13,H=0|s[0],q=8191&H,F=H>>>13,z=0|s[1],W=8191&z,K=z>>>13,G=0|s[2],Y=8191&G,V=G>>>13,X=0|s[3],Z=8191&X,J=X>>>13,$=0|s[4],Q=8191&$,tt=$>>>13,et=0|s[5],rt=8191&et,nt=et>>>13,it=0|s[6],ot=8191&it,at=it>>>13,st=0|s[7],ut=8191&st,ct=st>>>13,ft=0|s[8],ht=8191&ft,lt=ft>>>13,dt=0|s[9],pt=8191&dt,bt=dt>>>13
r.negative=t.negative^e.negative,r.length=19
var mt=(c+(n=Math.imul(h,q))|0)+((8191&(i=(i=Math.imul(h,F))+Math.imul(l,q)|0))<<13)|0
c=((o=Math.imul(l,F))+(i>>>13)|0)+(mt>>>26)|0,mt&=67108863,n=Math.imul(p,q),i=(i=Math.imul(p,F))+Math.imul(b,q)|0,o=Math.imul(b,F)
var vt=(c+(n=n+Math.imul(h,W)|0)|0)+((8191&(i=(i=i+Math.imul(h,K)|0)+Math.imul(l,W)|0))<<13)|0
c=((o=o+Math.imul(l,K)|0)+(i>>>13)|0)+(vt>>>26)|0,vt&=67108863,n=Math.imul(v,q),i=(i=Math.imul(v,F))+Math.imul(g,q)|0,o=Math.imul(g,F),n=n+Math.imul(p,W)|0,i=(i=i+Math.imul(p,K)|0)+Math.imul(b,W)|0,o=o+Math.imul(b,K)|0
var gt=(c+(n=n+Math.imul(h,Y)|0)|0)+((8191&(i=(i=i+Math.imul(h,V)|0)+Math.imul(l,Y)|0))<<13)|0
c=((o=o+Math.imul(l,V)|0)+(i>>>13)|0)+(gt>>>26)|0,gt&=67108863,n=Math.imul(w,q),i=(i=Math.imul(w,F))+Math.imul(_,q)|0,o=Math.imul(_,F),n=n+Math.imul(v,W)|0,i=(i=i+Math.imul(v,K)|0)+Math.imul(g,W)|0,o=o+Math.imul(g,K)|0,n=n+Math.imul(p,Y)|0,i=(i=i+Math.imul(p,V)|0)+Math.imul(b,Y)|0,o=o+Math.imul(b,V)|0
var yt=(c+(n=n+Math.imul(h,Z)|0)|0)+((8191&(i=(i=i+Math.imul(h,J)|0)+Math.imul(l,Z)|0))<<13)|0
c=((o=o+Math.imul(l,J)|0)+(i>>>13)|0)+(yt>>>26)|0,yt&=67108863,n=Math.imul(S,q),i=(i=Math.imul(S,F))+Math.imul(E,q)|0,o=Math.imul(E,F),n=n+Math.imul(w,W)|0,i=(i=i+Math.imul(w,K)|0)+Math.imul(_,W)|0,o=o+Math.imul(_,K)|0,n=n+Math.imul(v,Y)|0,i=(i=i+Math.imul(v,V)|0)+Math.imul(g,Y)|0,o=o+Math.imul(g,V)|0,n=n+Math.imul(p,Z)|0,i=(i=i+Math.imul(p,J)|0)+Math.imul(b,Z)|0,o=o+Math.imul(b,J)|0
var wt=(c+(n=n+Math.imul(h,Q)|0)|0)+((8191&(i=(i=i+Math.imul(h,tt)|0)+Math.imul(l,Q)|0))<<13)|0
c=((o=o+Math.imul(l,tt)|0)+(i>>>13)|0)+(wt>>>26)|0,wt&=67108863,n=Math.imul(A,q),i=(i=Math.imul(A,F))+Math.imul(T,q)|0,o=Math.imul(T,F),n=n+Math.imul(S,W)|0,i=(i=i+Math.imul(S,K)|0)+Math.imul(E,W)|0,o=o+Math.imul(E,K)|0,n=n+Math.imul(w,Y)|0,i=(i=i+Math.imul(w,V)|0)+Math.imul(_,Y)|0,o=o+Math.imul(_,V)|0,n=n+Math.imul(v,Z)|0,i=(i=i+Math.imul(v,J)|0)+Math.imul(g,Z)|0,o=o+Math.imul(g,J)|0,n=n+Math.imul(p,Q)|0,i=(i=i+Math.imul(p,tt)|0)+Math.imul(b,Q)|0,o=o+Math.imul(b,tt)|0
var _t=(c+(n=n+Math.imul(h,rt)|0)|0)+((8191&(i=(i=i+Math.imul(h,nt)|0)+Math.imul(l,rt)|0))<<13)|0
c=((o=o+Math.imul(l,nt)|0)+(i>>>13)|0)+(_t>>>26)|0,_t&=67108863,n=Math.imul(x,q),i=(i=Math.imul(x,F))+Math.imul(C,q)|0,o=Math.imul(C,F),n=n+Math.imul(A,W)|0,i=(i=i+Math.imul(A,K)|0)+Math.imul(T,W)|0,o=o+Math.imul(T,K)|0,n=n+Math.imul(S,Y)|0,i=(i=i+Math.imul(S,V)|0)+Math.imul(E,Y)|0,o=o+Math.imul(E,V)|0,n=n+Math.imul(w,Z)|0,i=(i=i+Math.imul(w,J)|0)+Math.imul(_,Z)|0,o=o+Math.imul(_,J)|0,n=n+Math.imul(v,Q)|0,i=(i=i+Math.imul(v,tt)|0)+Math.imul(g,Q)|0,o=o+Math.imul(g,tt)|0,n=n+Math.imul(p,rt)|0,i=(i=i+Math.imul(p,nt)|0)+Math.imul(b,rt)|0,o=o+Math.imul(b,nt)|0
var Mt=(c+(n=n+Math.imul(h,ot)|0)|0)+((8191&(i=(i=i+Math.imul(h,at)|0)+Math.imul(l,ot)|0))<<13)|0
c=((o=o+Math.imul(l,at)|0)+(i>>>13)|0)+(Mt>>>26)|0,Mt&=67108863,n=Math.imul(B,q),i=(i=Math.imul(B,F))+Math.imul(O,q)|0,o=Math.imul(O,F),n=n+Math.imul(x,W)|0,i=(i=i+Math.imul(x,K)|0)+Math.imul(C,W)|0,o=o+Math.imul(C,K)|0,n=n+Math.imul(A,Y)|0,i=(i=i+Math.imul(A,V)|0)+Math.imul(T,Y)|0,o=o+Math.imul(T,V)|0,n=n+Math.imul(S,Z)|0,i=(i=i+Math.imul(S,J)|0)+Math.imul(E,Z)|0,o=o+Math.imul(E,J)|0,n=n+Math.imul(w,Q)|0,i=(i=i+Math.imul(w,tt)|0)+Math.imul(_,Q)|0,o=o+Math.imul(_,tt)|0,n=n+Math.imul(v,rt)|0,i=(i=i+Math.imul(v,nt)|0)+Math.imul(g,rt)|0,o=o+Math.imul(g,nt)|0,n=n+Math.imul(p,ot)|0,i=(i=i+Math.imul(p,at)|0)+Math.imul(b,ot)|0,o=o+Math.imul(b,at)|0
var St=(c+(n=n+Math.imul(h,ut)|0)|0)+((8191&(i=(i=i+Math.imul(h,ct)|0)+Math.imul(l,ut)|0))<<13)|0
c=((o=o+Math.imul(l,ct)|0)+(i>>>13)|0)+(St>>>26)|0,St&=67108863,n=Math.imul(L,q),i=(i=Math.imul(L,F))+Math.imul(N,q)|0,o=Math.imul(N,F),n=n+Math.imul(B,W)|0,i=(i=i+Math.imul(B,K)|0)+Math.imul(O,W)|0,o=o+Math.imul(O,K)|0,n=n+Math.imul(x,Y)|0,i=(i=i+Math.imul(x,V)|0)+Math.imul(C,Y)|0,o=o+Math.imul(C,V)|0,n=n+Math.imul(A,Z)|0,i=(i=i+Math.imul(A,J)|0)+Math.imul(T,Z)|0,o=o+Math.imul(T,J)|0,n=n+Math.imul(S,Q)|0,i=(i=i+Math.imul(S,tt)|0)+Math.imul(E,Q)|0,o=o+Math.imul(E,tt)|0,n=n+Math.imul(w,rt)|0,i=(i=i+Math.imul(w,nt)|0)+Math.imul(_,rt)|0,o=o+Math.imul(_,nt)|0,n=n+Math.imul(v,ot)|0,i=(i=i+Math.imul(v,at)|0)+Math.imul(g,ot)|0,o=o+Math.imul(g,at)|0,n=n+Math.imul(p,ut)|0,i=(i=i+Math.imul(p,ct)|0)+Math.imul(b,ut)|0,o=o+Math.imul(b,ct)|0
var Et=(c+(n=n+Math.imul(h,ht)|0)|0)+((8191&(i=(i=i+Math.imul(h,lt)|0)+Math.imul(l,ht)|0))<<13)|0
c=((o=o+Math.imul(l,lt)|0)+(i>>>13)|0)+(Et>>>26)|0,Et&=67108863,n=Math.imul(j,q),i=(i=Math.imul(j,F))+Math.imul(U,q)|0,o=Math.imul(U,F),n=n+Math.imul(L,W)|0,i=(i=i+Math.imul(L,K)|0)+Math.imul(N,W)|0,o=o+Math.imul(N,K)|0,n=n+Math.imul(B,Y)|0,i=(i=i+Math.imul(B,V)|0)+Math.imul(O,Y)|0,o=o+Math.imul(O,V)|0,n=n+Math.imul(x,Z)|0,i=(i=i+Math.imul(x,J)|0)+Math.imul(C,Z)|0,o=o+Math.imul(C,J)|0,n=n+Math.imul(A,Q)|0,i=(i=i+Math.imul(A,tt)|0)+Math.imul(T,Q)|0,o=o+Math.imul(T,tt)|0,n=n+Math.imul(S,rt)|0,i=(i=i+Math.imul(S,nt)|0)+Math.imul(E,rt)|0,o=o+Math.imul(E,nt)|0,n=n+Math.imul(w,ot)|0,i=(i=i+Math.imul(w,at)|0)+Math.imul(_,ot)|0,o=o+Math.imul(_,at)|0,n=n+Math.imul(v,ut)|0,i=(i=i+Math.imul(v,ct)|0)+Math.imul(g,ut)|0,o=o+Math.imul(g,ct)|0,n=n+Math.imul(p,ht)|0,i=(i=i+Math.imul(p,lt)|0)+Math.imul(b,ht)|0,o=o+Math.imul(b,lt)|0
var kt=(c+(n=n+Math.imul(h,pt)|0)|0)+((8191&(i=(i=i+Math.imul(h,bt)|0)+Math.imul(l,pt)|0))<<13)|0
c=((o=o+Math.imul(l,bt)|0)+(i>>>13)|0)+(kt>>>26)|0,kt&=67108863,n=Math.imul(j,W),i=(i=Math.imul(j,K))+Math.imul(U,W)|0,o=Math.imul(U,K),n=n+Math.imul(L,Y)|0,i=(i=i+Math.imul(L,V)|0)+Math.imul(N,Y)|0,o=o+Math.imul(N,V)|0,n=n+Math.imul(B,Z)|0,i=(i=i+Math.imul(B,J)|0)+Math.imul(O,Z)|0,o=o+Math.imul(O,J)|0,n=n+Math.imul(x,Q)|0,i=(i=i+Math.imul(x,tt)|0)+Math.imul(C,Q)|0,o=o+Math.imul(C,tt)|0,n=n+Math.imul(A,rt)|0,i=(i=i+Math.imul(A,nt)|0)+Math.imul(T,rt)|0,o=o+Math.imul(T,nt)|0,n=n+Math.imul(S,ot)|0,i=(i=i+Math.imul(S,at)|0)+Math.imul(E,ot)|0,o=o+Math.imul(E,at)|0,n=n+Math.imul(w,ut)|0,i=(i=i+Math.imul(w,ct)|0)+Math.imul(_,ut)|0,o=o+Math.imul(_,ct)|0,n=n+Math.imul(v,ht)|0,i=(i=i+Math.imul(v,lt)|0)+Math.imul(g,ht)|0,o=o+Math.imul(g,lt)|0
var At=(c+(n=n+Math.imul(p,pt)|0)|0)+((8191&(i=(i=i+Math.imul(p,bt)|0)+Math.imul(b,pt)|0))<<13)|0
c=((o=o+Math.imul(b,bt)|0)+(i>>>13)|0)+(At>>>26)|0,At&=67108863,n=Math.imul(j,Y),i=(i=Math.imul(j,V))+Math.imul(U,Y)|0,o=Math.imul(U,V),n=n+Math.imul(L,Z)|0,i=(i=i+Math.imul(L,J)|0)+Math.imul(N,Z)|0,o=o+Math.imul(N,J)|0,n=n+Math.imul(B,Q)|0,i=(i=i+Math.imul(B,tt)|0)+Math.imul(O,Q)|0,o=o+Math.imul(O,tt)|0,n=n+Math.imul(x,rt)|0,i=(i=i+Math.imul(x,nt)|0)+Math.imul(C,rt)|0,o=o+Math.imul(C,nt)|0,n=n+Math.imul(A,ot)|0,i=(i=i+Math.imul(A,at)|0)+Math.imul(T,ot)|0,o=o+Math.imul(T,at)|0,n=n+Math.imul(S,ut)|0,i=(i=i+Math.imul(S,ct)|0)+Math.imul(E,ut)|0,o=o+Math.imul(E,ct)|0,n=n+Math.imul(w,ht)|0,i=(i=i+Math.imul(w,lt)|0)+Math.imul(_,ht)|0,o=o+Math.imul(_,lt)|0
var Tt=(c+(n=n+Math.imul(v,pt)|0)|0)+((8191&(i=(i=i+Math.imul(v,bt)|0)+Math.imul(g,pt)|0))<<13)|0
c=((o=o+Math.imul(g,bt)|0)+(i>>>13)|0)+(Tt>>>26)|0,Tt&=67108863,n=Math.imul(j,Z),i=(i=Math.imul(j,J))+Math.imul(U,Z)|0,o=Math.imul(U,J),n=n+Math.imul(L,Q)|0,i=(i=i+Math.imul(L,tt)|0)+Math.imul(N,Q)|0,o=o+Math.imul(N,tt)|0,n=n+Math.imul(B,rt)|0,i=(i=i+Math.imul(B,nt)|0)+Math.imul(O,rt)|0,o=o+Math.imul(O,nt)|0,n=n+Math.imul(x,ot)|0,i=(i=i+Math.imul(x,at)|0)+Math.imul(C,ot)|0,o=o+Math.imul(C,at)|0,n=n+Math.imul(A,ut)|0,i=(i=i+Math.imul(A,ct)|0)+Math.imul(T,ut)|0,o=o+Math.imul(T,ct)|0,n=n+Math.imul(S,ht)|0,i=(i=i+Math.imul(S,lt)|0)+Math.imul(E,ht)|0,o=o+Math.imul(E,lt)|0
var Rt=(c+(n=n+Math.imul(w,pt)|0)|0)+((8191&(i=(i=i+Math.imul(w,bt)|0)+Math.imul(_,pt)|0))<<13)|0
c=((o=o+Math.imul(_,bt)|0)+(i>>>13)|0)+(Rt>>>26)|0,Rt&=67108863,n=Math.imul(j,Q),i=(i=Math.imul(j,tt))+Math.imul(U,Q)|0,o=Math.imul(U,tt),n=n+Math.imul(L,rt)|0,i=(i=i+Math.imul(L,nt)|0)+Math.imul(N,rt)|0,o=o+Math.imul(N,nt)|0,n=n+Math.imul(B,ot)|0,i=(i=i+Math.imul(B,at)|0)+Math.imul(O,ot)|0,o=o+Math.imul(O,at)|0,n=n+Math.imul(x,ut)|0,i=(i=i+Math.imul(x,ct)|0)+Math.imul(C,ut)|0,o=o+Math.imul(C,ct)|0,n=n+Math.imul(A,ht)|0,i=(i=i+Math.imul(A,lt)|0)+Math.imul(T,ht)|0,o=o+Math.imul(T,lt)|0
var xt=(c+(n=n+Math.imul(S,pt)|0)|0)+((8191&(i=(i=i+Math.imul(S,bt)|0)+Math.imul(E,pt)|0))<<13)|0
c=((o=o+Math.imul(E,bt)|0)+(i>>>13)|0)+(xt>>>26)|0,xt&=67108863,n=Math.imul(j,rt),i=(i=Math.imul(j,nt))+Math.imul(U,rt)|0,o=Math.imul(U,nt),n=n+Math.imul(L,ot)|0,i=(i=i+Math.imul(L,at)|0)+Math.imul(N,ot)|0,o=o+Math.imul(N,at)|0,n=n+Math.imul(B,ut)|0,i=(i=i+Math.imul(B,ct)|0)+Math.imul(O,ut)|0,o=o+Math.imul(O,ct)|0,n=n+Math.imul(x,ht)|0,i=(i=i+Math.imul(x,lt)|0)+Math.imul(C,ht)|0,o=o+Math.imul(C,lt)|0
var Ct=(c+(n=n+Math.imul(A,pt)|0)|0)+((8191&(i=(i=i+Math.imul(A,bt)|0)+Math.imul(T,pt)|0))<<13)|0
c=((o=o+Math.imul(T,bt)|0)+(i>>>13)|0)+(Ct>>>26)|0,Ct&=67108863,n=Math.imul(j,ot),i=(i=Math.imul(j,at))+Math.imul(U,ot)|0,o=Math.imul(U,at),n=n+Math.imul(L,ut)|0,i=(i=i+Math.imul(L,ct)|0)+Math.imul(N,ut)|0,o=o+Math.imul(N,ct)|0,n=n+Math.imul(B,ht)|0,i=(i=i+Math.imul(B,lt)|0)+Math.imul(O,ht)|0,o=o+Math.imul(O,lt)|0
var It=(c+(n=n+Math.imul(x,pt)|0)|0)+((8191&(i=(i=i+Math.imul(x,bt)|0)+Math.imul(C,pt)|0))<<13)|0
c=((o=o+Math.imul(C,bt)|0)+(i>>>13)|0)+(It>>>26)|0,It&=67108863,n=Math.imul(j,ut),i=(i=Math.imul(j,ct))+Math.imul(U,ut)|0,o=Math.imul(U,ct),n=n+Math.imul(L,ht)|0,i=(i=i+Math.imul(L,lt)|0)+Math.imul(N,ht)|0,o=o+Math.imul(N,lt)|0
var Bt=(c+(n=n+Math.imul(B,pt)|0)|0)+((8191&(i=(i=i+Math.imul(B,bt)|0)+Math.imul(O,pt)|0))<<13)|0
c=((o=o+Math.imul(O,bt)|0)+(i>>>13)|0)+(Bt>>>26)|0,Bt&=67108863,n=Math.imul(j,ht),i=(i=Math.imul(j,lt))+Math.imul(U,ht)|0,o=Math.imul(U,lt)
var Ot=(c+(n=n+Math.imul(L,pt)|0)|0)+((8191&(i=(i=i+Math.imul(L,bt)|0)+Math.imul(N,pt)|0))<<13)|0
c=((o=o+Math.imul(N,bt)|0)+(i>>>13)|0)+(Ot>>>26)|0,Ot&=67108863
var Pt=(c+(n=Math.imul(j,pt))|0)+((8191&(i=(i=Math.imul(j,bt))+Math.imul(U,pt)|0))<<13)|0
return c=((o=Math.imul(U,bt))+(i>>>13)|0)+(Pt>>>26)|0,Pt&=67108863,u[0]=mt,u[1]=vt,u[2]=gt,u[3]=yt,u[4]=wt,u[5]=_t,u[6]=Mt,u[7]=St,u[8]=Et,u[9]=kt,u[10]=At,u[11]=Tt,u[12]=Rt,u[13]=xt,u[14]=Ct,u[15]=It,u[16]=Bt,u[17]=Ot,u[18]=Pt,0!==c&&(u[19]=c,r.length++),r}
function b(t,e,r){return(new m).mulp(t,e,r)}function m(t,e){this.x=t,this.y=e}Math.imul||(p=d),o.prototype.mulTo=function(t,e){var r,n=this.length+t.length
return r=10===this.length&&10===t.length?p(this,t,e):n<63?d(this,t,e):n<1024?function(t,e,r){r.negative=e.negative^t.negative,r.length=t.length+e.length
for(var n=0,i=0,o=0;o<r.length-1;o++){var a=i
i=0
for(var s=67108863&n,u=Math.min(o,e.length-1),c=Math.max(0,o-t.length+1);c<=u;c++){var f=o-c,h=(0|t.words[f])*(0|e.words[c]),l=67108863&h
s=67108863&(l=l+s|0),i+=(a=(a=a+(h/67108864|0)|0)+(l>>>26)|0)>>>26,a&=67108863}r.words[o]=s,n=a,a=i}return 0!==n?r.words[o]=n:r.length--,r.strip()}(this,t,e):b(this,t,e),r},m.prototype.makeRBT=function(t){for(var e=new Array(t),r=o.prototype._countBits(t)-1,n=0;n<t;n++)e[n]=this.revBin(n,r,t)
return e},m.prototype.revBin=function(t,e,r){if(0===t||t===r-1)return t
for(var n=0,i=0;i<e;i++)n|=(1&t)<<e-i-1,t>>=1
return n},m.prototype.permute=function(t,e,r,n,i,o){for(var a=0;a<o;a++)n[a]=e[t[a]],i[a]=r[t[a]]},m.prototype.transform=function(t,e,r,n,i,o){this.permute(o,t,e,r,n,i)
for(var a=1;a<i;a<<=1)for(var s=a<<1,u=Math.cos(2*Math.PI/s),c=Math.sin(2*Math.PI/s),f=0;f<i;f+=s)for(var h=u,l=c,d=0;d<a;d++){var p=r[f+d],b=n[f+d],m=r[f+d+a],v=n[f+d+a],g=h*m-l*v
v=h*v+l*m,m=g,r[f+d]=p+m,n[f+d]=b+v,r[f+d+a]=p-m,n[f+d+a]=b-v,d!==s&&(g=u*h-c*l,l=u*l+c*h,h=g)}},m.prototype.guessLen13b=function(t,e){var r=1|Math.max(e,t),n=1&r,i=0
for(r=r/2|0;r;r>>>=1)i++
return 1<<i+1+n},m.prototype.conjugate=function(t,e,r){if(!(r<=1))for(var n=0;n<r/2;n++){var i=t[n]
t[n]=t[r-n-1],t[r-n-1]=i,i=e[n],e[n]=-e[r-n-1],e[r-n-1]=-i}},m.prototype.normalize13b=function(t,e){for(var r=0,n=0;n<e/2;n++){var i=8192*Math.round(t[2*n+1]/e)+Math.round(t[2*n]/e)+r
t[n]=67108863&i,r=i<67108864?0:i/67108864|0}return t},m.prototype.convert13b=function(t,e,r,i){for(var o=0,a=0;a<e;a++)o+=0|t[a],r[2*a]=8191&o,o>>>=13,r[2*a+1]=8191&o,o>>>=13
for(a=2*e;a<i;++a)r[a]=0
n(0===o),n(0==(-8192&o))},m.prototype.stub=function(t){for(var e=new Array(t),r=0;r<t;r++)e[r]=0
return e},m.prototype.mulp=function(t,e,r){var n=2*this.guessLen13b(t.length,e.length),i=this.makeRBT(n),o=this.stub(n),a=new Array(n),s=new Array(n),u=new Array(n),c=new Array(n),f=new Array(n),h=new Array(n),l=r.words
l.length=n,this.convert13b(t.words,t.length,a,n),this.convert13b(e.words,e.length,c,n),this.transform(a,o,s,u,n,i),this.transform(c,o,f,h,n,i)
for(var d=0;d<n;d++){var p=s[d]*f[d]-u[d]*h[d]
u[d]=s[d]*h[d]+u[d]*f[d],s[d]=p}return this.conjugate(s,u,n),this.transform(s,u,l,o,n,i),this.conjugate(l,o,n),this.normalize13b(l,n),r.negative=t.negative^e.negative,r.length=t.length+e.length,r.strip()},o.prototype.mul=function(t){var e=new o(null)
return e.words=new Array(this.length+t.length),this.mulTo(t,e)},o.prototype.mulf=function(t){var e=new o(null)
return e.words=new Array(this.length+t.length),b(this,t,e)},o.prototype.imul=function(t){return this.clone().mulTo(t,this)},o.prototype.imuln=function(t){n("number"==typeof t),n(t<67108864)
for(var e=0,r=0;r<this.length;r++){var i=(0|this.words[r])*t,o=(67108863&i)+(67108863&e)
e>>=26,e+=i/67108864|0,e+=o>>>26,this.words[r]=67108863&o}return 0!==e&&(this.words[r]=e,this.length++),this},o.prototype.muln=function(t){return this.clone().imuln(t)},o.prototype.sqr=function(){return this.mul(this)},o.prototype.isqr=function(){return this.imul(this.clone())},o.prototype.pow=function(t){var e=function(t){for(var e=new Array(t.bitLength()),r=0;r<e.length;r++){var n=r/26|0,i=r%26
e[r]=(t.words[n]&1<<i)>>>i}return e}(t)
if(0===e.length)return new o(1)
for(var r=this,n=0;n<e.length&&0===e[n];n++,r=r.sqr());if(++n<e.length)for(var i=r.sqr();n<e.length;n++,i=i.sqr())0!==e[n]&&(r=r.mul(i))
return r},o.prototype.iushln=function(t){n("number"==typeof t&&t>=0)
var e,r=t%26,i=(t-r)/26,o=67108863>>>26-r<<26-r
if(0!==r){var a=0
for(e=0;e<this.length;e++){var s=this.words[e]&o,u=(0|this.words[e])-s<<r
this.words[e]=u|a,a=s>>>26-r}a&&(this.words[e]=a,this.length++)}if(0!==i){for(e=this.length-1;e>=0;e--)this.words[e+i]=this.words[e]
for(e=0;e<i;e++)this.words[e]=0
this.length+=i}return this.strip()},o.prototype.ishln=function(t){return n(0===this.negative),this.iushln(t)},o.prototype.iushrn=function(t,e,r){var i
n("number"==typeof t&&t>=0),i=e?(e-e%26)/26:0
var o=t%26,a=Math.min((t-o)/26,this.length),s=67108863^67108863>>>o<<o,u=r
if(i-=a,i=Math.max(0,i),u){for(var c=0;c<a;c++)u.words[c]=this.words[c]
u.length=a}if(0===a);else if(this.length>a)for(this.length-=a,c=0;c<this.length;c++)this.words[c]=this.words[c+a]
else this.words[0]=0,this.length=1
var f=0
for(c=this.length-1;c>=0&&(0!==f||c>=i);c--){var h=0|this.words[c]
this.words[c]=f<<26-o|h>>>o,f=h&s}return u&&0!==f&&(u.words[u.length++]=f),0===this.length&&(this.words[0]=0,this.length=1),this.strip()},o.prototype.ishrn=function(t,e,r){return n(0===this.negative),this.iushrn(t,e,r)},o.prototype.shln=function(t){return this.clone().ishln(t)},o.prototype.ushln=function(t){return this.clone().iushln(t)},o.prototype.shrn=function(t){return this.clone().ishrn(t)},o.prototype.ushrn=function(t){return this.clone().iushrn(t)},o.prototype.testn=function(t){n("number"==typeof t&&t>=0)
var e=t%26,r=(t-e)/26,i=1<<e
return!(this.length<=r||!(this.words[r]&i))},o.prototype.imaskn=function(t){n("number"==typeof t&&t>=0)
var e=t%26,r=(t-e)/26
if(n(0===this.negative,"imaskn works only with positive numbers"),this.length<=r)return this
if(0!==e&&r++,this.length=Math.min(r,this.length),0!==e){var i=67108863^67108863>>>e<<e
this.words[this.length-1]&=i}return this.strip()},o.prototype.maskn=function(t){return this.clone().imaskn(t)},o.prototype.iaddn=function(t){return n("number"==typeof t),n(t<67108864),t<0?this.isubn(-t):0!==this.negative?1===this.length&&(0|this.words[0])<t?(this.words[0]=t-(0|this.words[0]),this.negative=0,this):(this.negative=0,this.isubn(t),this.negative=1,this):this._iaddn(t)},o.prototype._iaddn=function(t){this.words[0]+=t
for(var e=0;e<this.length&&this.words[e]>=67108864;e++)this.words[e]-=67108864,e===this.length-1?this.words[e+1]=1:this.words[e+1]++
return this.length=Math.max(this.length,e+1),this},o.prototype.isubn=function(t){if(n("number"==typeof t),n(t<67108864),t<0)return this.iaddn(-t)
if(0!==this.negative)return this.negative=0,this.iaddn(t),this.negative=1,this
if(this.words[0]-=t,1===this.length&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1
else for(var e=0;e<this.length&&this.words[e]<0;e++)this.words[e]+=67108864,this.words[e+1]-=1
return this.strip()},o.prototype.addn=function(t){return this.clone().iaddn(t)},o.prototype.subn=function(t){return this.clone().isubn(t)},o.prototype.iabs=function(){return this.negative=0,this},o.prototype.abs=function(){return this.clone().iabs()},o.prototype._ishlnsubmul=function(t,e,r){var i,o,a=t.length+r
this._expand(a)
var s=0
for(i=0;i<t.length;i++){o=(0|this.words[i+r])+s
var u=(0|t.words[i])*e
s=((o-=67108863&u)>>26)-(u/67108864|0),this.words[i+r]=67108863&o}for(;i<this.length-r;i++)s=(o=(0|this.words[i+r])+s)>>26,this.words[i+r]=67108863&o
if(0===s)return this.strip()
for(n(-1===s),s=0,i=0;i<this.length;i++)s=(o=-(0|this.words[i])+s)>>26,this.words[i]=67108863&o
return this.negative=1,this.strip()},o.prototype._wordDiv=function(t,e){var r=(this.length,t.length),n=this.clone(),i=t,a=0|i.words[i.length-1]
0!=(r=26-this._countBits(a))&&(i=i.ushln(r),n.iushln(r),a=0|i.words[i.length-1])
var s,u=n.length-i.length
if("mod"!==e){(s=new o(null)).length=u+1,s.words=new Array(s.length)
for(var c=0;c<s.length;c++)s.words[c]=0}var f=n.clone()._ishlnsubmul(i,1,u)
0===f.negative&&(n=f,s&&(s.words[u]=1))
for(var h=u-1;h>=0;h--){var l=67108864*(0|n.words[i.length+h])+(0|n.words[i.length+h-1])
for(l=Math.min(l/a|0,67108863),n._ishlnsubmul(i,l,h);0!==n.negative;)l--,n.negative=0,n._ishlnsubmul(i,1,h),n.isZero()||(n.negative^=1)
s&&(s.words[h]=l)}return s&&s.strip(),n.strip(),"div"!==e&&0!==r&&n.iushrn(r),{div:s||null,mod:n}},o.prototype.divmod=function(t,e,r){return n(!t.isZero()),this.isZero()?{div:new o(0),mod:new o(0)}:0!==this.negative&&0===t.negative?(s=this.neg().divmod(t,e),"mod"!==e&&(i=s.div.neg()),"div"!==e&&(a=s.mod.neg(),r&&0!==a.negative&&a.iadd(t)),{div:i,mod:a}):0===this.negative&&0!==t.negative?(s=this.divmod(t.neg(),e),"mod"!==e&&(i=s.div.neg()),{div:i,mod:s.mod}):0!=(this.negative&t.negative)?(s=this.neg().divmod(t.neg(),e),"div"!==e&&(a=s.mod.neg(),r&&0!==a.negative&&a.isub(t)),{div:s.div,mod:a}):t.length>this.length||this.cmp(t)<0?{div:new o(0),mod:this}:1===t.length?"div"===e?{div:this.divn(t.words[0]),mod:null}:"mod"===e?{div:null,mod:new o(this.modn(t.words[0]))}:{div:this.divn(t.words[0]),mod:new o(this.modn(t.words[0]))}:this._wordDiv(t,e)
var i,a,s},o.prototype.div=function(t){return this.divmod(t,"div",!1).div},o.prototype.mod=function(t){return this.divmod(t,"mod",!1).mod},o.prototype.umod=function(t){return this.divmod(t,"mod",!0).mod},o.prototype.divRound=function(t){var e=this.divmod(t)
if(e.mod.isZero())return e.div
var r=0!==e.div.negative?e.mod.isub(t):e.mod,n=t.ushrn(1),i=t.andln(1),o=r.cmp(n)
return o<0||1===i&&0===o?e.div:0!==e.div.negative?e.div.isubn(1):e.div.iaddn(1)},o.prototype.modn=function(t){n(t<=67108863)
for(var e=(1<<26)%t,r=0,i=this.length-1;i>=0;i--)r=(e*r+(0|this.words[i]))%t
return r},o.prototype.idivn=function(t){n(t<=67108863)
for(var e=0,r=this.length-1;r>=0;r--){var i=(0|this.words[r])+67108864*e
this.words[r]=i/t|0,e=i%t}return this.strip()},o.prototype.divn=function(t){return this.clone().idivn(t)},o.prototype.egcd=function(t){n(0===t.negative),n(!t.isZero())
var e=this,r=t.clone()
e=0!==e.negative?e.umod(t):e.clone()
for(var i=new o(1),a=new o(0),s=new o(0),u=new o(1),c=0;e.isEven()&&r.isEven();)e.iushrn(1),r.iushrn(1),++c
for(var f=r.clone(),h=e.clone();!e.isZero();){for(var l=0,d=1;0==(e.words[0]&d)&&l<26;++l,d<<=1);if(l>0)for(e.iushrn(l);l-- >0;)(i.isOdd()||a.isOdd())&&(i.iadd(f),a.isub(h)),i.iushrn(1),a.iushrn(1)
for(var p=0,b=1;0==(r.words[0]&b)&&p<26;++p,b<<=1);if(p>0)for(r.iushrn(p);p-- >0;)(s.isOdd()||u.isOdd())&&(s.iadd(f),u.isub(h)),s.iushrn(1),u.iushrn(1)
e.cmp(r)>=0?(e.isub(r),i.isub(s),a.isub(u)):(r.isub(e),s.isub(i),u.isub(a))}return{a:s,b:u,gcd:r.iushln(c)}},o.prototype._invmp=function(t){n(0===t.negative),n(!t.isZero())
var e=this,r=t.clone()
e=0!==e.negative?e.umod(t):e.clone()
for(var i,a=new o(1),s=new o(0),u=r.clone();e.cmpn(1)>0&&r.cmpn(1)>0;){for(var c=0,f=1;0==(e.words[0]&f)&&c<26;++c,f<<=1);if(c>0)for(e.iushrn(c);c-- >0;)a.isOdd()&&a.iadd(u),a.iushrn(1)
for(var h=0,l=1;0==(r.words[0]&l)&&h<26;++h,l<<=1);if(h>0)for(r.iushrn(h);h-- >0;)s.isOdd()&&s.iadd(u),s.iushrn(1)
e.cmp(r)>=0?(e.isub(r),a.isub(s)):(r.isub(e),s.isub(a))}return(i=0===e.cmpn(1)?a:s).cmpn(0)<0&&i.iadd(t),i},o.prototype.gcd=function(t){if(this.isZero())return t.abs()
if(t.isZero())return this.abs()
var e=this.clone(),r=t.clone()
e.negative=0,r.negative=0
for(var n=0;e.isEven()&&r.isEven();n++)e.iushrn(1),r.iushrn(1)
for(;;){for(;e.isEven();)e.iushrn(1)
for(;r.isEven();)r.iushrn(1)
var i=e.cmp(r)
if(i<0){var o=e
e=r,r=o}else if(0===i||0===r.cmpn(1))break
e.isub(r)}return r.iushln(n)},o.prototype.invm=function(t){return this.egcd(t).a.umod(t)},o.prototype.isEven=function(){return 0==(1&this.words[0])},o.prototype.isOdd=function(){return 1==(1&this.words[0])},o.prototype.andln=function(t){return this.words[0]&t},o.prototype.bincn=function(t){n("number"==typeof t)
var e=t%26,r=(t-e)/26,i=1<<e
if(this.length<=r)return this._expand(r+1),this.words[r]|=i,this
for(var o=i,a=r;0!==o&&a<this.length;a++){var s=0|this.words[a]
o=(s+=o)>>>26,s&=67108863,this.words[a]=s}return 0!==o&&(this.words[a]=o,this.length++),this},o.prototype.isZero=function(){return 1===this.length&&0===this.words[0]},o.prototype.cmpn=function(t){var e,r=t<0
if(0!==this.negative&&!r)return-1
if(0===this.negative&&r)return 1
if(this.strip(),this.length>1)e=1
else{r&&(t=-t),n(t<=67108863,"Number is too big")
var i=0|this.words[0]
e=i===t?0:i<t?-1:1}return 0!==this.negative?0|-e:e},o.prototype.cmp=function(t){if(0!==this.negative&&0===t.negative)return-1
if(0===this.negative&&0!==t.negative)return 1
var e=this.ucmp(t)
return 0!==this.negative?0|-e:e},o.prototype.ucmp=function(t){if(this.length>t.length)return 1
if(this.length<t.length)return-1
for(var e=0,r=this.length-1;r>=0;r--){var n=0|this.words[r],i=0|t.words[r]
if(n!==i){n<i?e=-1:n>i&&(e=1)
break}}return e},o.prototype.gtn=function(t){return 1===this.cmpn(t)},o.prototype.gt=function(t){return 1===this.cmp(t)},o.prototype.gten=function(t){return this.cmpn(t)>=0},o.prototype.gte=function(t){return this.cmp(t)>=0},o.prototype.ltn=function(t){return-1===this.cmpn(t)},o.prototype.lt=function(t){return-1===this.cmp(t)},o.prototype.lten=function(t){return this.cmpn(t)<=0},o.prototype.lte=function(t){return this.cmp(t)<=0},o.prototype.eqn=function(t){return 0===this.cmpn(t)},o.prototype.eq=function(t){return 0===this.cmp(t)},o.red=function(t){return new S(t)},o.prototype.toRed=function(t){return n(!this.red,"Already a number in reduction context"),n(0===this.negative,"red works only with positives"),t.convertTo(this)._forceRed(t)},o.prototype.fromRed=function(){return n(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},o.prototype._forceRed=function(t){return this.red=t,this},o.prototype.forceRed=function(t){return n(!this.red,"Already a number in reduction context"),this._forceRed(t)},o.prototype.redAdd=function(t){return n(this.red,"redAdd works only with red numbers"),this.red.add(this,t)},o.prototype.redIAdd=function(t){return n(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,t)},o.prototype.redSub=function(t){return n(this.red,"redSub works only with red numbers"),this.red.sub(this,t)},o.prototype.redISub=function(t){return n(this.red,"redISub works only with red numbers"),this.red.isub(this,t)},o.prototype.redShl=function(t){return n(this.red,"redShl works only with red numbers"),this.red.shl(this,t)},o.prototype.redMul=function(t){return n(this.red,"redMul works only with red numbers"),this.red._verify2(this,t),this.red.mul(this,t)},o.prototype.redIMul=function(t){return n(this.red,"redMul works only with red numbers"),this.red._verify2(this,t),this.red.imul(this,t)},o.prototype.redSqr=function(){return n(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},o.prototype.redISqr=function(){return n(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},o.prototype.redSqrt=function(){return n(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},o.prototype.redInvm=function(){return n(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},o.prototype.redNeg=function(){return n(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},o.prototype.redPow=function(t){return n(this.red&&!t.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,t)}
var v={k256:null,p224:null,p192:null,p25519:null}
function g(t,e){this.name=t,this.p=new o(e,16),this.n=this.p.bitLength(),this.k=new o(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}function y(){g.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}function w(){g.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}function _(){g.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}function M(){g.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}function S(t){if("string"==typeof t){var e=o._prime(t)
this.m=e.p,this.prime=e}else n(t.gtn(1),"modulus must be greater than 1"),this.m=t,this.prime=null}function E(t){S.call(this,t),this.shift=this.m.bitLength(),this.shift%26!=0&&(this.shift+=26-this.shift%26),this.r=new o(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}g.prototype._tmp=function(){var t=new o(null)
return t.words=new Array(Math.ceil(this.n/13)),t},g.prototype.ireduce=function(t){var e,r=t
do{this.split(r,this.tmp),e=(r=(r=this.imulK(r)).iadd(this.tmp)).bitLength()}while(e>this.n)
var n=e<this.n?-1:r.ucmp(this.p)
return 0===n?(r.words[0]=0,r.length=1):n>0?r.isub(this.p):void 0!==r.strip?r.strip():r._strip(),r},g.prototype.split=function(t,e){t.iushrn(this.n,0,e)},g.prototype.imulK=function(t){return t.imul(this.k)},i(y,g),y.prototype.split=function(t,e){for(var r=4194303,n=Math.min(t.length,9),i=0;i<n;i++)e.words[i]=t.words[i]
if(e.length=n,t.length<=9)return t.words[0]=0,void(t.length=1)
var o=t.words[9]
for(e.words[e.length++]=o&r,i=10;i<t.length;i++){var a=0|t.words[i]
t.words[i-10]=(a&r)<<4|o>>>22,o=a}o>>>=22,t.words[i-10]=o,0===o&&t.length>10?t.length-=10:t.length-=9},y.prototype.imulK=function(t){t.words[t.length]=0,t.words[t.length+1]=0,t.length+=2
for(var e=0,r=0;r<t.length;r++){var n=0|t.words[r]
e+=977*n,t.words[r]=67108863&e,e=64*n+(e/67108864|0)}return 0===t.words[t.length-1]&&(t.length--,0===t.words[t.length-1]&&t.length--),t},i(w,g),i(_,g),i(M,g),M.prototype.imulK=function(t){for(var e=0,r=0;r<t.length;r++){var n=19*(0|t.words[r])+e,i=67108863&n
n>>>=26,t.words[r]=i,e=n}return 0!==e&&(t.words[t.length++]=e),t},o._prime=function(t){if(v[t])return v[t]
var e
if("k256"===t)e=new y
else if("p224"===t)e=new w
else if("p192"===t)e=new _
else{if("p25519"!==t)throw new Error("Unknown prime "+t)
e=new M}return v[t]=e,e},S.prototype._verify1=function(t){n(0===t.negative,"red works only with positives"),n(t.red,"red works only with red numbers")},S.prototype._verify2=function(t,e){n(0==(t.negative|e.negative),"red works only with positives"),n(t.red&&t.red===e.red,"red works only with red numbers")},S.prototype.imod=function(t){return this.prime?this.prime.ireduce(t)._forceRed(this):t.umod(this.m)._forceRed(this)},S.prototype.neg=function(t){return t.isZero()?t.clone():this.m.sub(t)._forceRed(this)},S.prototype.add=function(t,e){this._verify2(t,e)
var r=t.add(e)
return r.cmp(this.m)>=0&&r.isub(this.m),r._forceRed(this)},S.prototype.iadd=function(t,e){this._verify2(t,e)
var r=t.iadd(e)
return r.cmp(this.m)>=0&&r.isub(this.m),r},S.prototype.sub=function(t,e){this._verify2(t,e)
var r=t.sub(e)
return r.cmpn(0)<0&&r.iadd(this.m),r._forceRed(this)},S.prototype.isub=function(t,e){this._verify2(t,e)
var r=t.isub(e)
return r.cmpn(0)<0&&r.iadd(this.m),r},S.prototype.shl=function(t,e){return this._verify1(t),this.imod(t.ushln(e))},S.prototype.imul=function(t,e){return this._verify2(t,e),this.imod(t.imul(e))},S.prototype.mul=function(t,e){return this._verify2(t,e),this.imod(t.mul(e))},S.prototype.isqr=function(t){return this.imul(t,t.clone())},S.prototype.sqr=function(t){return this.mul(t,t)},S.prototype.sqrt=function(t){if(t.isZero())return t.clone()
var e=this.m.andln(3)
if(n(e%2==1),3===e){var r=this.m.add(new o(1)).iushrn(2)
return this.pow(t,r)}for(var i=this.m.subn(1),a=0;!i.isZero()&&0===i.andln(1);)a++,i.iushrn(1)
n(!i.isZero())
var s=new o(1).toRed(this),u=s.redNeg(),c=this.m.subn(1).iushrn(1),f=this.m.bitLength()
for(f=new o(2*f*f).toRed(this);0!==this.pow(f,c).cmp(u);)f.redIAdd(u)
for(var h=this.pow(f,i),l=this.pow(t,i.addn(1).iushrn(1)),d=this.pow(t,i),p=a;0!==d.cmp(s);){for(var b=d,m=0;0!==b.cmp(s);m++)b=b.redSqr()
n(m<p)
var v=this.pow(h,new o(1).iushln(p-m-1))
l=l.redMul(v),h=v.redSqr(),d=d.redMul(h),p=m}return l},S.prototype.invm=function(t){var e=t._invmp(this.m)
return 0!==e.negative?(e.negative=0,this.imod(e).redNeg()):this.imod(e)},S.prototype.pow=function(t,e){if(e.isZero())return new o(1).toRed(this)
if(0===e.cmpn(1))return t.clone()
var r=new Array(16)
r[0]=new o(1).toRed(this),r[1]=t
for(var n=2;n<r.length;n++)r[n]=this.mul(r[n-1],t)
var i=r[0],a=0,s=0,u=e.bitLength()%26
for(0===u&&(u=26),n=e.length-1;n>=0;n--){for(var c=e.words[n],f=u-1;f>=0;f--){var h=c>>f&1
i!==r[0]&&(i=this.sqr(i)),0!==h||0!==a?(a<<=1,a|=h,(4==++s||0===n&&0===f)&&(i=this.mul(i,r[a]),s=0,a=0)):s=0}u=26}return i},S.prototype.convertTo=function(t){var e=t.umod(this.m)
return e===t?e.clone():e},S.prototype.convertFrom=function(t){var e=t.clone()
return e.red=null,e},o.mont=function(t){return new E(t)},i(E,S),E.prototype.convertTo=function(t){return this.imod(t.ushln(this.shift))},E.prototype.convertFrom=function(t){var e=this.imod(t.mul(this.rinv))
return e.red=null,e},E.prototype.imul=function(t,e){if(t.isZero()||e.isZero())return t.words[0]=0,t.length=1,t
var r=t.imul(e),n=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=r.isub(n).iushrn(this.shift),o=i
return i.cmp(this.m)>=0?o=i.isub(this.m):i.cmpn(0)<0&&(o=i.iadd(this.m)),o._forceRed(this)},E.prototype.mul=function(t,e){if(t.isZero()||e.isZero())return new o(0)._forceRed(this)
var r=t.mul(e),n=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=r.isub(n).iushrn(this.shift),a=i
return i.cmp(this.m)>=0?a=i.isub(this.m):i.cmpn(0)<0&&(a=i.iadd(this.m)),a._forceRed(this)},E.prototype.invm=function(t){return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)}}(t=r.nmd(t),this)},2202:(t,e,r)=>{var n
function i(t){this.rand=t}if(t.exports=function(t){return n||(n=new i(null)),n.generate(t)},t.exports.Rand=i,i.prototype.generate=function(t){return this._rand(t)},i.prototype._rand=function(t){if(this.rand.getBytes)return this.rand.getBytes(t)
for(var e=new Uint8Array(t),r=0;r<e.length;r++)e[r]=this.rand.getByte()
return e},"object"==typeof self)self.crypto&&self.crypto.getRandomValues?i.prototype._rand=function(t){var e=new Uint8Array(t)
return self.crypto.getRandomValues(e),e}:self.msCrypto&&self.msCrypto.getRandomValues?i.prototype._rand=function(t){var e=new Uint8Array(t)
return self.msCrypto.getRandomValues(e),e}:"object"==typeof window&&(i.prototype._rand=function(){throw new Error("Not implemented yet")})
else try{var o=r(9214)
if("function"!=typeof o.randomBytes)throw new Error("Not supported")
i.prototype._rand=function(t){return o.randomBytes(t)}}catch(t){}},7494:(t,e,r)=>{var n=r(8850).Buffer
function i(t){n.isBuffer(t)||(t=n.from(t))
for(var e=t.length/4|0,r=new Array(e),i=0;i<e;i++)r[i]=t.readUInt32BE(4*i)
return r}function o(t){for(;0<t.length;t++)t[0]=0}function a(t,e,r,n,i){for(var o,a,s,u,c=r[0],f=r[1],h=r[2],l=r[3],d=t[0]^e[0],p=t[1]^e[1],b=t[2]^e[2],m=t[3]^e[3],v=4,g=1;g<i;g++)o=c[d>>>24]^f[p>>>16&255]^h[b>>>8&255]^l[255&m]^e[v++],a=c[p>>>24]^f[b>>>16&255]^h[m>>>8&255]^l[255&d]^e[v++],s=c[b>>>24]^f[m>>>16&255]^h[d>>>8&255]^l[255&p]^e[v++],u=c[m>>>24]^f[d>>>16&255]^h[p>>>8&255]^l[255&b]^e[v++],d=o,p=a,b=s,m=u
return o=(n[d>>>24]<<24|n[p>>>16&255]<<16|n[b>>>8&255]<<8|n[255&m])^e[v++],a=(n[p>>>24]<<24|n[b>>>16&255]<<16|n[m>>>8&255]<<8|n[255&d])^e[v++],s=(n[b>>>24]<<24|n[m>>>16&255]<<16|n[d>>>8&255]<<8|n[255&p])^e[v++],u=(n[m>>>24]<<24|n[d>>>16&255]<<16|n[p>>>8&255]<<8|n[255&b])^e[v++],[o>>>=0,a>>>=0,s>>>=0,u>>>=0]}var s=[0,1,2,4,8,16,32,64,128,27,54],u=function(){for(var t=new Array(256),e=0;e<256;e++)t[e]=e<128?e<<1:e<<1^283
for(var r=[],n=[],i=[[],[],[],[]],o=[[],[],[],[]],a=0,s=0,u=0;u<256;++u){var c=s^s<<1^s<<2^s<<3^s<<4
c=c>>>8^255&c^99,r[a]=c,n[c]=a
var f=t[a],h=t[f],l=t[h],d=257*t[c]^16843008*c
i[0][a]=d<<24|d>>>8,i[1][a]=d<<16|d>>>16,i[2][a]=d<<8|d>>>24,i[3][a]=d,d=16843009*l^65537*h^257*f^16843008*a,o[0][c]=d<<24|d>>>8,o[1][c]=d<<16|d>>>16,o[2][c]=d<<8|d>>>24,o[3][c]=d,0===a?a=s=1:(a=f^t[t[t[l^f]]],s^=t[t[s]])}return{SBOX:r,INV_SBOX:n,SUB_MIX:i,INV_SUB_MIX:o}}()
function c(t){this._key=i(t),this._reset()}c.blockSize=16,c.keySize=32,c.prototype.blockSize=c.blockSize,c.prototype.keySize=c.keySize,c.prototype._reset=function(){for(var t=this._key,e=t.length,r=e+6,n=4*(r+1),i=[],o=0;o<e;o++)i[o]=t[o]
for(o=e;o<n;o++){var a=i[o-1]
o%e==0?(a=a<<8|a>>>24,a=u.SBOX[a>>>24]<<24|u.SBOX[a>>>16&255]<<16|u.SBOX[a>>>8&255]<<8|u.SBOX[255&a],a^=s[o/e|0]<<24):e>6&&o%e==4&&(a=u.SBOX[a>>>24]<<24|u.SBOX[a>>>16&255]<<16|u.SBOX[a>>>8&255]<<8|u.SBOX[255&a]),i[o]=i[o-e]^a}for(var c=[],f=0;f<n;f++){var h=n-f,l=i[h-(f%4?0:4)]
c[f]=f<4||h<=4?l:u.INV_SUB_MIX[0][u.SBOX[l>>>24]]^u.INV_SUB_MIX[1][u.SBOX[l>>>16&255]]^u.INV_SUB_MIX[2][u.SBOX[l>>>8&255]]^u.INV_SUB_MIX[3][u.SBOX[255&l]]}this._nRounds=r,this._keySchedule=i,this._invKeySchedule=c},c.prototype.encryptBlockRaw=function(t){return a(t=i(t),this._keySchedule,u.SUB_MIX,u.SBOX,this._nRounds)},c.prototype.encryptBlock=function(t){var e=this.encryptBlockRaw(t),r=n.allocUnsafe(16)
return r.writeUInt32BE(e[0],0),r.writeUInt32BE(e[1],4),r.writeUInt32BE(e[2],8),r.writeUInt32BE(e[3],12),r},c.prototype.decryptBlock=function(t){var e=(t=i(t))[1]
t[1]=t[3],t[3]=e
var r=a(t,this._invKeySchedule,u.INV_SUB_MIX,u.INV_SBOX,this._nRounds),o=n.allocUnsafe(16)
return o.writeUInt32BE(r[0],0),o.writeUInt32BE(r[3],4),o.writeUInt32BE(r[2],8),o.writeUInt32BE(r[1],12),o},c.prototype.scrub=function(){o(this._keySchedule),o(this._invKeySchedule),o(this._key)},t.exports.AES=c},426:(t,e,r)=>{var n=r(7494),i=r(8850).Buffer,o=r(3013),a=r(1736),s=r(6626),u=r(6316),c=r(7557)
function f(t,e,r,a){o.call(this)
var u=i.alloc(4,0)
this._cipher=new n.AES(e)
var f=this._cipher.encryptBlock(u)
this._ghash=new s(f),r=function(t,e,r){if(12===e.length)return t._finID=i.concat([e,i.from([0,0,0,1])]),i.concat([e,i.from([0,0,0,2])])
var n=new s(r),o=e.length,a=o%16
n.update(e),a&&(a=16-a,n.update(i.alloc(a,0))),n.update(i.alloc(8,0))
var u=8*o,f=i.alloc(8)
f.writeUIntBE(u,0,8),n.update(f),t._finID=n.state
var h=i.from(t._finID)
return c(h),h}(this,r,f),this._prev=i.from(r),this._cache=i.allocUnsafe(0),this._secCache=i.allocUnsafe(0),this._decrypt=a,this._alen=0,this._len=0,this._mode=t,this._authTag=null,this._called=!1}a(f,o),f.prototype._update=function(t){if(!this._called&&this._alen){var e=16-this._alen%16
e<16&&(e=i.alloc(e,0),this._ghash.update(e))}this._called=!0
var r=this._mode.encrypt(this,t)
return this._decrypt?this._ghash.update(t):this._ghash.update(r),this._len+=t.length,r},f.prototype._final=function(){if(this._decrypt&&!this._authTag)throw new Error("Unsupported state or unable to authenticate data")
var t=u(this._ghash.final(8*this._alen,8*this._len),this._cipher.encryptBlock(this._finID))
if(this._decrypt&&function(t,e){var r=0
t.length!==e.length&&r++
for(var n=Math.min(t.length,e.length),i=0;i<n;++i)r+=t[i]^e[i]
return r}(t,this._authTag))throw new Error("Unsupported state or unable to authenticate data")
this._authTag=t,this._cipher.scrub()},f.prototype.getAuthTag=function(){if(this._decrypt||!i.isBuffer(this._authTag))throw new Error("Attempting to get auth tag in unsupported state")
return this._authTag},f.prototype.setAuthTag=function(t){if(!this._decrypt)throw new Error("Attempting to set auth tag in unsupported state")
this._authTag=t},f.prototype.setAAD=function(t){if(this._called)throw new Error("Attempting to set AAD in unsupported state")
this._ghash.update(t),this._alen+=t.length},t.exports=f},8073:(t,e,r)=>{var n=r(5478),i=r(2184),o=r(4946)
e.createCipher=e.Cipher=n.createCipher,e.createCipheriv=e.Cipheriv=n.createCipheriv,e.createDecipher=e.Decipher=i.createDecipher,e.createDecipheriv=e.Decipheriv=i.createDecipheriv,e.listCiphers=e.getCiphers=function(){return Object.keys(o)}},2184:(t,e,r)=>{var n=r(426),i=r(8850).Buffer,o=r(8408),a=r(1408),s=r(3013),u=r(7494),c=r(7085)
function f(t,e,r){s.call(this),this._cache=new h,this._last=void 0,this._cipher=new u.AES(e),this._prev=i.from(r),this._mode=t,this._autopadding=!0}function h(){this.cache=i.allocUnsafe(0)}function l(t,e,r){var s=o[t.toLowerCase()]
if(!s)throw new TypeError("invalid suite type")
if("string"==typeof r&&(r=i.from(r)),"GCM"!==s.mode&&r.length!==s.iv)throw new TypeError("invalid iv length "+r.length)
if("string"==typeof e&&(e=i.from(e)),e.length!==s.key/8)throw new TypeError("invalid key length "+e.length)
return"stream"===s.type?new a(s.module,e,r,!0):"auth"===s.type?new n(s.module,e,r,!0):new f(s.module,e,r)}r(1736)(f,s),f.prototype._update=function(t){var e,r
this._cache.add(t)
for(var n=[];e=this._cache.get(this._autopadding);)r=this._mode.decrypt(this,e),n.push(r)
return i.concat(n)},f.prototype._final=function(){var t=this._cache.flush()
if(this._autopadding)return function(t){var e=t[15]
if(e<1||e>16)throw new Error("unable to decrypt data")
for(var r=-1;++r<e;)if(t[r+(16-e)]!==e)throw new Error("unable to decrypt data")
if(16!==e)return t.slice(0,16-e)}(this._mode.decrypt(this,t))
if(t)throw new Error("data not multiple of block length")},f.prototype.setAutoPadding=function(t){return this._autopadding=!!t,this},h.prototype.add=function(t){this.cache=i.concat([this.cache,t])},h.prototype.get=function(t){var e
if(t){if(this.cache.length>16)return e=this.cache.slice(0,16),this.cache=this.cache.slice(16),e}else if(this.cache.length>=16)return e=this.cache.slice(0,16),this.cache=this.cache.slice(16),e
return null},h.prototype.flush=function(){if(this.cache.length)return this.cache},e.createDecipher=function(t,e){var r=o[t.toLowerCase()]
if(!r)throw new TypeError("invalid suite type")
var n=c(e,!1,r.key,r.iv)
return l(t,n.key,n.iv)},e.createDecipheriv=l},5478:(t,e,r)=>{var n=r(8408),i=r(426),o=r(8850).Buffer,a=r(1408),s=r(3013),u=r(7494),c=r(7085)
function f(t,e,r){s.call(this),this._cache=new l,this._cipher=new u.AES(e),this._prev=o.from(r),this._mode=t,this._autopadding=!0}r(1736)(f,s),f.prototype._update=function(t){var e,r
this._cache.add(t)
for(var n=[];e=this._cache.get();)r=this._mode.encrypt(this,e),n.push(r)
return o.concat(n)}
var h=o.alloc(16,16)
function l(){this.cache=o.allocUnsafe(0)}function d(t,e,r){var s=n[t.toLowerCase()]
if(!s)throw new TypeError("invalid suite type")
if("string"==typeof e&&(e=o.from(e)),e.length!==s.key/8)throw new TypeError("invalid key length "+e.length)
if("string"==typeof r&&(r=o.from(r)),"GCM"!==s.mode&&r.length!==s.iv)throw new TypeError("invalid iv length "+r.length)
return"stream"===s.type?new a(s.module,e,r):"auth"===s.type?new i(s.module,e,r):new f(s.module,e,r)}f.prototype._final=function(){var t=this._cache.flush()
if(this._autopadding)return t=this._mode.encrypt(this,t),this._cipher.scrub(),t
if(!t.equals(h))throw this._cipher.scrub(),new Error("data not multiple of block length")},f.prototype.setAutoPadding=function(t){return this._autopadding=!!t,this},l.prototype.add=function(t){this.cache=o.concat([this.cache,t])},l.prototype.get=function(){if(this.cache.length>15){var t=this.cache.slice(0,16)
return this.cache=this.cache.slice(16),t}return null},l.prototype.flush=function(){for(var t=16-this.cache.length,e=o.allocUnsafe(t),r=-1;++r<t;)e.writeUInt8(t,r)
return o.concat([this.cache,e])},e.createCipheriv=d,e.createCipher=function(t,e){var r=n[t.toLowerCase()]
if(!r)throw new TypeError("invalid suite type")
var i=c(e,!1,r.key,r.iv)
return d(t,i.key,i.iv)}},6626:(t,e,r)=>{var n=r(8850).Buffer,i=n.alloc(16,0)
function o(t){var e=n.allocUnsafe(16)
return e.writeUInt32BE(t[0]>>>0,0),e.writeUInt32BE(t[1]>>>0,4),e.writeUInt32BE(t[2]>>>0,8),e.writeUInt32BE(t[3]>>>0,12),e}function a(t){this.h=t,this.state=n.alloc(16,0),this.cache=n.allocUnsafe(0)}a.prototype.ghash=function(t){for(var e=-1;++e<t.length;)this.state[e]^=t[e]
this._multiply()},a.prototype._multiply=function(){for(var t,e,r,n=[(t=this.h).readUInt32BE(0),t.readUInt32BE(4),t.readUInt32BE(8),t.readUInt32BE(12)],i=[0,0,0,0],a=-1;++a<128;){for(0!=(this.state[~~(a/8)]&1<<7-a%8)&&(i[0]^=n[0],i[1]^=n[1],i[2]^=n[2],i[3]^=n[3]),r=0!=(1&n[3]),e=3;e>0;e--)n[e]=n[e]>>>1|(1&n[e-1])<<31
n[0]=n[0]>>>1,r&&(n[0]=n[0]^225<<24)}this.state=o(i)},a.prototype.update=function(t){var e
for(this.cache=n.concat([this.cache,t]);this.cache.length>=16;)e=this.cache.slice(0,16),this.cache=this.cache.slice(16),this.ghash(e)},a.prototype.final=function(t,e){return this.cache.length&&this.ghash(n.concat([this.cache,i],16)),this.ghash(o([0,t,0,e])),this.state},t.exports=a},7557:t=>{t.exports=function(t){for(var e,r=t.length;r--;){if(255!==(e=t.readUInt8(r))){e++,t.writeUInt8(e,r)
break}t.writeUInt8(0,r)}}},7427:(t,e,r)=>{var n=r(6316)
e.encrypt=function(t,e){var r=n(e,t._prev)
return t._prev=t._cipher.encryptBlock(r),t._prev},e.decrypt=function(t,e){var r=t._prev
t._prev=e
var i=t._cipher.decryptBlock(e)
return n(i,r)}},4030:(t,e,r)=>{var n=r(8850).Buffer,i=r(6316)
function o(t,e,r){var o=e.length,a=i(e,t._cache)
return t._cache=t._cache.slice(o),t._prev=n.concat([t._prev,r?e:a]),a}e.encrypt=function(t,e,r){for(var i,a=n.allocUnsafe(0);e.length;){if(0===t._cache.length&&(t._cache=t._cipher.encryptBlock(t._prev),t._prev=n.allocUnsafe(0)),!(t._cache.length<=e.length)){a=n.concat([a,o(t,e,r)])
break}i=t._cache.length,a=n.concat([a,o(t,e.slice(0,i),r)]),e=e.slice(i)}return a}},3206:(t,e,r)=>{var n=r(8850).Buffer
function i(t,e,r){for(var n,i,a=-1,s=0;++a<8;)n=e&1<<7-a?128:0,s+=(128&(i=t._cipher.encryptBlock(t._prev)[0]^n))>>a%8,t._prev=o(t._prev,r?n:i)
return s}function o(t,e){var r=t.length,i=-1,o=n.allocUnsafe(t.length)
for(t=n.concat([t,n.from([e])]);++i<r;)o[i]=t[i]<<1|t[i+1]>>7
return o}e.encrypt=function(t,e,r){for(var o=e.length,a=n.allocUnsafe(o),s=-1;++s<o;)a[s]=i(t,e[s],r)
return a}},4726:(t,e,r)=>{var n=r(8850).Buffer
function i(t,e,r){var i=t._cipher.encryptBlock(t._prev)[0]^e
return t._prev=n.concat([t._prev.slice(1),n.from([r?e:i])]),i}e.encrypt=function(t,e,r){for(var o=e.length,a=n.allocUnsafe(o),s=-1;++s<o;)a[s]=i(t,e[s],r)
return a}},2802:(t,e,r)=>{var n=r(6316),i=r(8850).Buffer,o=r(7557)
function a(t){var e=t._cipher.encryptBlockRaw(t._prev)
return o(t._prev),e}e.encrypt=function(t,e){var r=Math.ceil(e.length/16),o=t._cache.length
t._cache=i.concat([t._cache,i.allocUnsafe(16*r)])
for(var s=0;s<r;s++){var u=a(t),c=o+16*s
t._cache.writeUInt32BE(u[0],c+0),t._cache.writeUInt32BE(u[1],c+4),t._cache.writeUInt32BE(u[2],c+8),t._cache.writeUInt32BE(u[3],c+12)}var f=t._cache.slice(0,e.length)
return t._cache=t._cache.slice(e.length),n(e,f)}},9297:(t,e)=>{e.encrypt=function(t,e){return t._cipher.encryptBlock(e)},e.decrypt=function(t,e){return t._cipher.decryptBlock(e)}},8408:(t,e,r)=>{var n={ECB:r(9297),CBC:r(7427),CFB:r(4030),CFB8:r(4726),CFB1:r(3206),OFB:r(1962),CTR:r(2802),GCM:r(2802)},i=r(4946)
for(var o in i)i[o].module=n[i[o].mode]
t.exports=i},1962:(t,e,r)=>{var n=r(6316)
function i(t){return t._prev=t._cipher.encryptBlock(t._prev),t._prev}e.encrypt=function(t,e){for(;t._cache.length<e.length;)t._cache=Buffer.concat([t._cache,i(t)])
var r=t._cache.slice(0,e.length)
return t._cache=t._cache.slice(e.length),n(e,r)}},1408:(t,e,r)=>{var n=r(7494),i=r(8850).Buffer,o=r(3013)
function a(t,e,r,a){o.call(this),this._cipher=new n.AES(e),this._prev=i.from(r),this._cache=i.allocUnsafe(0),this._secCache=i.allocUnsafe(0),this._decrypt=a,this._mode=t}r(1736)(a,o),a.prototype._update=function(t){return this._mode.encrypt(this,t,this._decrypt)},a.prototype._final=function(){this._cipher.scrub()},t.exports=a},6805:(t,e,r)=>{var n=r(9120),i=r(8073),o=r(8408),a=r(867),s=r(7085)
function u(t,e,r){if(t=t.toLowerCase(),o[t])return i.createCipheriv(t,e,r)
if(a[t])return new n({key:e,iv:r,mode:t})
throw new TypeError("invalid suite type")}function c(t,e,r){if(t=t.toLowerCase(),o[t])return i.createDecipheriv(t,e,r)
if(a[t])return new n({key:e,iv:r,mode:t,decrypt:!0})
throw new TypeError("invalid suite type")}e.createCipher=e.Cipher=function(t,e){var r,n
if(t=t.toLowerCase(),o[t])r=o[t].key,n=o[t].iv
else{if(!a[t])throw new TypeError("invalid suite type")
r=8*a[t].key,n=a[t].iv}var i=s(e,!1,r,n)
return u(t,i.key,i.iv)},e.createCipheriv=e.Cipheriv=u,e.createDecipher=e.Decipher=function(t,e){var r,n
if(t=t.toLowerCase(),o[t])r=o[t].key,n=o[t].iv
else{if(!a[t])throw new TypeError("invalid suite type")
r=8*a[t].key,n=a[t].iv}var i=s(e,!1,r,n)
return c(t,i.key,i.iv)},e.createDecipheriv=e.Decipheriv=c,e.listCiphers=e.getCiphers=function(){return Object.keys(a).concat(i.getCiphers())}},9120:(t,e,r)=>{var n=r(3013),i=r(5626),o=r(1736),a=r(8850).Buffer,s={"des-ede3-cbc":i.CBC.instantiate(i.EDE),"des-ede3":i.EDE,"des-ede-cbc":i.CBC.instantiate(i.EDE),"des-ede":i.EDE,"des-cbc":i.CBC.instantiate(i.DES),"des-ecb":i.DES}
function u(t){n.call(this)
var e,r=t.mode.toLowerCase(),i=s[r]
e=t.decrypt?"decrypt":"encrypt"
var o=t.key
a.isBuffer(o)||(o=a.from(o)),"des-ede"!==r&&"des-ede-cbc"!==r||(o=a.concat([o,o.slice(0,8)]))
var u=t.iv
a.isBuffer(u)||(u=a.from(u)),this._des=i.create({key:o,iv:u,type:e})}s.des=s["des-cbc"],s.des3=s["des-ede3-cbc"],t.exports=u,o(u,n),u.prototype._update=function(t){return a.from(this._des.update(t))},u.prototype._final=function(){return a.from(this._des.final())}},867:(t,e)=>{e["des-ecb"]={key:8,iv:0},e["des-cbc"]=e.des={key:8,iv:8},e["des-ede3-cbc"]=e.des3={key:24,iv:8},e["des-ede3"]={key:24,iv:0},e["des-ede-cbc"]={key:16,iv:8},e["des-ede"]={key:16,iv:0}},9782:(t,e,r)=>{var n=r(7664),i=r(5010)
function o(t){var e,r=t.modulus.byteLength()
do{e=new n(i(r))}while(e.cmp(t.modulus)>=0||!e.umod(t.prime1)||!e.umod(t.prime2))
return e}function a(t,e){var r=function(t){var e=o(t)
return{blinder:e.toRed(n.mont(t.modulus)).redPow(new n(t.publicExponent)).fromRed(),unblinder:e.invm(t.modulus)}}(e),i=e.modulus.byteLength(),a=new n(t).mul(r.blinder).umod(e.modulus),s=a.toRed(n.mont(e.prime1)),u=a.toRed(n.mont(e.prime2)),c=e.coefficient,f=e.prime1,h=e.prime2,l=s.redPow(e.exponent1).fromRed(),d=u.redPow(e.exponent2).fromRed(),p=l.isub(d).imul(c).umod(f).imul(h)
return d.iadd(p).imul(r.unblinder).umod(e.modulus).toArrayLike(Buffer,"be",i)}a.getr=o,t.exports=a},7664:function(t,e,r){!function(t,e){"use strict"
function n(t,e){if(!t)throw new Error(e||"Assertion failed")}function i(t,e){t.super_=e
var r=function(){}
r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}function o(t,e,r){if(o.isBN(t))return t
this.negative=0,this.words=null,this.length=0,this.red=null,null!==t&&("le"!==e&&"be"!==e||(r=e,e=10),this._init(t||0,e||10,r||"be"))}var a
"object"==typeof t?t.exports=o:e.BN=o,o.BN=o,o.wordSize=26
try{a="undefined"!=typeof window&&void 0!==window.Buffer?window.Buffer:r(1922).Buffer}catch(t){}function s(t,e){var r=t.charCodeAt(e)
return r>=48&&r<=57?r-48:r>=65&&r<=70?r-55:r>=97&&r<=102?r-87:void n(!1,"Invalid character in "+t)}function u(t,e,r){var n=s(t,r)
return r-1>=e&&(n|=s(t,r-1)<<4),n}function c(t,e,r,i){for(var o=0,a=0,s=Math.min(t.length,r),u=e;u<s;u++){var c=t.charCodeAt(u)-48
o*=i,a=c>=49?c-49+10:c>=17?c-17+10:c,n(c>=0&&a<i,"Invalid character"),o+=a}return o}function f(t,e){t.words=e.words,t.length=e.length,t.negative=e.negative,t.red=e.red}if(o.isBN=function(t){return t instanceof o||null!==t&&"object"==typeof t&&t.constructor.wordSize===o.wordSize&&Array.isArray(t.words)},o.max=function(t,e){return t.cmp(e)>0?t:e},o.min=function(t,e){return t.cmp(e)<0?t:e},o.prototype._init=function(t,e,r){if("number"==typeof t)return this._initNumber(t,e,r)
if("object"==typeof t)return this._initArray(t,e,r)
"hex"===e&&(e=16),n(e===(0|e)&&e>=2&&e<=36)
var i=0
"-"===(t=t.toString().replace(/\s+/g,""))[0]&&(i++,this.negative=1),i<t.length&&(16===e?this._parseHex(t,i,r):(this._parseBase(t,e,i),"le"===r&&this._initArray(this.toArray(),e,r)))},o.prototype._initNumber=function(t,e,r){t<0&&(this.negative=1,t=-t),t<67108864?(this.words=[67108863&t],this.length=1):t<4503599627370496?(this.words=[67108863&t,t/67108864&67108863],this.length=2):(n(t<9007199254740992),this.words=[67108863&t,t/67108864&67108863,1],this.length=3),"le"===r&&this._initArray(this.toArray(),e,r)},o.prototype._initArray=function(t,e,r){if(n("number"==typeof t.length),t.length<=0)return this.words=[0],this.length=1,this
this.length=Math.ceil(t.length/3),this.words=new Array(this.length)
for(var i=0;i<this.length;i++)this.words[i]=0
var o,a,s=0
if("be"===r)for(i=t.length-1,o=0;i>=0;i-=3)a=t[i]|t[i-1]<<8|t[i-2]<<16,this.words[o]|=a<<s&67108863,this.words[o+1]=a>>>26-s&67108863,(s+=24)>=26&&(s-=26,o++)
else if("le"===r)for(i=0,o=0;i<t.length;i+=3)a=t[i]|t[i+1]<<8|t[i+2]<<16,this.words[o]|=a<<s&67108863,this.words[o+1]=a>>>26-s&67108863,(s+=24)>=26&&(s-=26,o++)
return this._strip()},o.prototype._parseHex=function(t,e,r){this.length=Math.ceil((t.length-e)/6),this.words=new Array(this.length)
for(var n=0;n<this.length;n++)this.words[n]=0
var i,o=0,a=0
if("be"===r)for(n=t.length-1;n>=e;n-=2)i=u(t,e,n)<<o,this.words[a]|=67108863&i,o>=18?(o-=18,a+=1,this.words[a]|=i>>>26):o+=8
else for(n=(t.length-e)%2==0?e+1:e;n<t.length;n+=2)i=u(t,e,n)<<o,this.words[a]|=67108863&i,o>=18?(o-=18,a+=1,this.words[a]|=i>>>26):o+=8
this._strip()},o.prototype._parseBase=function(t,e,r){this.words=[0],this.length=1
for(var n=0,i=1;i<=67108863;i*=e)n++
n--,i=i/e|0
for(var o=t.length-r,a=o%n,s=Math.min(o,o-a)+r,u=0,f=r;f<s;f+=n)u=c(t,f,f+n,e),this.imuln(i),this.words[0]+u<67108864?this.words[0]+=u:this._iaddn(u)
if(0!==a){var h=1
for(u=c(t,f,t.length,e),f=0;f<a;f++)h*=e
this.imuln(h),this.words[0]+u<67108864?this.words[0]+=u:this._iaddn(u)}this._strip()},o.prototype.copy=function(t){t.words=new Array(this.length)
for(var e=0;e<this.length;e++)t.words[e]=this.words[e]
t.length=this.length,t.negative=this.negative,t.red=this.red},o.prototype._move=function(t){f(t,this)},o.prototype.clone=function(){var t=new o(null)
return this.copy(t),t},o.prototype._expand=function(t){for(;this.length<t;)this.words[this.length++]=0
return this},o.prototype._strip=function(){for(;this.length>1&&0===this.words[this.length-1];)this.length--
return this._normSign()},o.prototype._normSign=function(){return 1===this.length&&0===this.words[0]&&(this.negative=0),this},"undefined"!=typeof Symbol&&"function"==typeof Symbol.for)try{o.prototype[Symbol.for("nodejs.util.inspect.custom")]=h}catch(t){o.prototype.inspect=h}else o.prototype.inspect=h
function h(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"}var l=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],d=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],p=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176]
function b(t,e,r){r.negative=e.negative^t.negative
var n=t.length+e.length|0
r.length=n,n=n-1|0
var i=0|t.words[0],o=0|e.words[0],a=i*o,s=67108863&a,u=a/67108864|0
r.words[0]=s
for(var c=1;c<n;c++){for(var f=u>>>26,h=67108863&u,l=Math.min(c,e.length-1),d=Math.max(0,c-t.length+1);d<=l;d++){var p=c-d|0
f+=(a=(i=0|t.words[p])*(o=0|e.words[d])+h)/67108864|0,h=67108863&a}r.words[c]=0|h,u=0|f}return 0!==u?r.words[c]=0|u:r.length--,r._strip()}o.prototype.toString=function(t,e){var r
if(e=0|e||1,16===(t=t||10)||"hex"===t){r=""
for(var i=0,o=0,a=0;a<this.length;a++){var s=this.words[a],u=(16777215&(s<<i|o)).toString(16)
o=s>>>24-i&16777215,(i+=2)>=26&&(i-=26,a--),r=0!==o||a!==this.length-1?l[6-u.length]+u+r:u+r}for(0!==o&&(r=o.toString(16)+r);r.length%e!=0;)r="0"+r
return 0!==this.negative&&(r="-"+r),r}if(t===(0|t)&&t>=2&&t<=36){var c=d[t],f=p[t]
r=""
var h=this.clone()
for(h.negative=0;!h.isZero();){var b=h.modrn(f).toString(t)
r=(h=h.idivn(f)).isZero()?b+r:l[c-b.length]+b+r}for(this.isZero()&&(r="0"+r);r.length%e!=0;)r="0"+r
return 0!==this.negative&&(r="-"+r),r}n(!1,"Base should be between 2 and 36")},o.prototype.toNumber=function(){var t=this.words[0]
return 2===this.length?t+=67108864*this.words[1]:3===this.length&&1===this.words[2]?t+=4503599627370496+67108864*this.words[1]:this.length>2&&n(!1,"Number can only safely store up to 53 bits"),0!==this.negative?-t:t},o.prototype.toJSON=function(){return this.toString(16,2)},a&&(o.prototype.toBuffer=function(t,e){return this.toArrayLike(a,t,e)}),o.prototype.toArray=function(t,e){return this.toArrayLike(Array,t,e)},o.prototype.toArrayLike=function(t,e,r){this._strip()
var i=this.byteLength(),o=r||Math.max(1,i)
n(i<=o,"byte array longer than desired length"),n(o>0,"Requested array length <= 0")
var a=function(t,e){return t.allocUnsafe?t.allocUnsafe(e):new t(e)}(t,o)
return this["_toArrayLike"+("le"===e?"LE":"BE")](a,i),a},o.prototype._toArrayLikeLE=function(t,e){for(var r=0,n=0,i=0,o=0;i<this.length;i++){var a=this.words[i]<<o|n
t[r++]=255&a,r<t.length&&(t[r++]=a>>8&255),r<t.length&&(t[r++]=a>>16&255),6===o?(r<t.length&&(t[r++]=a>>24&255),n=0,o=0):(n=a>>>24,o+=2)}if(r<t.length)for(t[r++]=n;r<t.length;)t[r++]=0},o.prototype._toArrayLikeBE=function(t,e){for(var r=t.length-1,n=0,i=0,o=0;i<this.length;i++){var a=this.words[i]<<o|n
t[r--]=255&a,r>=0&&(t[r--]=a>>8&255),r>=0&&(t[r--]=a>>16&255),6===o?(r>=0&&(t[r--]=a>>24&255),n=0,o=0):(n=a>>>24,o+=2)}if(r>=0)for(t[r--]=n;r>=0;)t[r--]=0},Math.clz32?o.prototype._countBits=function(t){return 32-Math.clz32(t)}:o.prototype._countBits=function(t){var e=t,r=0
return e>=4096&&(r+=13,e>>>=13),e>=64&&(r+=7,e>>>=7),e>=8&&(r+=4,e>>>=4),e>=2&&(r+=2,e>>>=2),r+e},o.prototype._zeroBits=function(t){if(0===t)return 26
var e=t,r=0
return 0==(8191&e)&&(r+=13,e>>>=13),0==(127&e)&&(r+=7,e>>>=7),0==(15&e)&&(r+=4,e>>>=4),0==(3&e)&&(r+=2,e>>>=2),0==(1&e)&&r++,r},o.prototype.bitLength=function(){var t=this.words[this.length-1],e=this._countBits(t)
return 26*(this.length-1)+e},o.prototype.zeroBits=function(){if(this.isZero())return 0
for(var t=0,e=0;e<this.length;e++){var r=this._zeroBits(this.words[e])
if(t+=r,26!==r)break}return t},o.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},o.prototype.toTwos=function(t){return 0!==this.negative?this.abs().inotn(t).iaddn(1):this.clone()},o.prototype.fromTwos=function(t){return this.testn(t-1)?this.notn(t).iaddn(1).ineg():this.clone()},o.prototype.isNeg=function(){return 0!==this.negative},o.prototype.neg=function(){return this.clone().ineg()},o.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},o.prototype.iuor=function(t){for(;this.length<t.length;)this.words[this.length++]=0
for(var e=0;e<t.length;e++)this.words[e]=this.words[e]|t.words[e]
return this._strip()},o.prototype.ior=function(t){return n(0==(this.negative|t.negative)),this.iuor(t)},o.prototype.or=function(t){return this.length>t.length?this.clone().ior(t):t.clone().ior(this)},o.prototype.uor=function(t){return this.length>t.length?this.clone().iuor(t):t.clone().iuor(this)},o.prototype.iuand=function(t){var e
e=this.length>t.length?t:this
for(var r=0;r<e.length;r++)this.words[r]=this.words[r]&t.words[r]
return this.length=e.length,this._strip()},o.prototype.iand=function(t){return n(0==(this.negative|t.negative)),this.iuand(t)},o.prototype.and=function(t){return this.length>t.length?this.clone().iand(t):t.clone().iand(this)},o.prototype.uand=function(t){return this.length>t.length?this.clone().iuand(t):t.clone().iuand(this)},o.prototype.iuxor=function(t){var e,r
this.length>t.length?(e=this,r=t):(e=t,r=this)
for(var n=0;n<r.length;n++)this.words[n]=e.words[n]^r.words[n]
if(this!==e)for(;n<e.length;n++)this.words[n]=e.words[n]
return this.length=e.length,this._strip()},o.prototype.ixor=function(t){return n(0==(this.negative|t.negative)),this.iuxor(t)},o.prototype.xor=function(t){return this.length>t.length?this.clone().ixor(t):t.clone().ixor(this)},o.prototype.uxor=function(t){return this.length>t.length?this.clone().iuxor(t):t.clone().iuxor(this)},o.prototype.inotn=function(t){n("number"==typeof t&&t>=0)
var e=0|Math.ceil(t/26),r=t%26
this._expand(e),r>0&&e--
for(var i=0;i<e;i++)this.words[i]=67108863&~this.words[i]
return r>0&&(this.words[i]=~this.words[i]&67108863>>26-r),this._strip()},o.prototype.notn=function(t){return this.clone().inotn(t)},o.prototype.setn=function(t,e){n("number"==typeof t&&t>=0)
var r=t/26|0,i=t%26
return this._expand(r+1),this.words[r]=e?this.words[r]|1<<i:this.words[r]&~(1<<i),this._strip()},o.prototype.iadd=function(t){var e,r,n
if(0!==this.negative&&0===t.negative)return this.negative=0,e=this.isub(t),this.negative^=1,this._normSign()
if(0===this.negative&&0!==t.negative)return t.negative=0,e=this.isub(t),t.negative=1,e._normSign()
this.length>t.length?(r=this,n=t):(r=t,n=this)
for(var i=0,o=0;o<n.length;o++)e=(0|r.words[o])+(0|n.words[o])+i,this.words[o]=67108863&e,i=e>>>26
for(;0!==i&&o<r.length;o++)e=(0|r.words[o])+i,this.words[o]=67108863&e,i=e>>>26
if(this.length=r.length,0!==i)this.words[this.length]=i,this.length++
else if(r!==this)for(;o<r.length;o++)this.words[o]=r.words[o]
return this},o.prototype.add=function(t){var e
return 0!==t.negative&&0===this.negative?(t.negative=0,e=this.sub(t),t.negative^=1,e):0===t.negative&&0!==this.negative?(this.negative=0,e=t.sub(this),this.negative=1,e):this.length>t.length?this.clone().iadd(t):t.clone().iadd(this)},o.prototype.isub=function(t){if(0!==t.negative){t.negative=0
var e=this.iadd(t)
return t.negative=1,e._normSign()}if(0!==this.negative)return this.negative=0,this.iadd(t),this.negative=1,this._normSign()
var r,n,i=this.cmp(t)
if(0===i)return this.negative=0,this.length=1,this.words[0]=0,this
i>0?(r=this,n=t):(r=t,n=this)
for(var o=0,a=0;a<n.length;a++)o=(e=(0|r.words[a])-(0|n.words[a])+o)>>26,this.words[a]=67108863&e
for(;0!==o&&a<r.length;a++)o=(e=(0|r.words[a])+o)>>26,this.words[a]=67108863&e
if(0===o&&a<r.length&&r!==this)for(;a<r.length;a++)this.words[a]=r.words[a]
return this.length=Math.max(this.length,a),r!==this&&(this.negative=1),this._strip()},o.prototype.sub=function(t){return this.clone().isub(t)}
var m=function(t,e,r){var n,i,o,a=t.words,s=e.words,u=r.words,c=0,f=0|a[0],h=8191&f,l=f>>>13,d=0|a[1],p=8191&d,b=d>>>13,m=0|a[2],v=8191&m,g=m>>>13,y=0|a[3],w=8191&y,_=y>>>13,M=0|a[4],S=8191&M,E=M>>>13,k=0|a[5],A=8191&k,T=k>>>13,R=0|a[6],x=8191&R,C=R>>>13,I=0|a[7],B=8191&I,O=I>>>13,P=0|a[8],L=8191&P,N=P>>>13,D=0|a[9],j=8191&D,U=D>>>13,H=0|s[0],q=8191&H,F=H>>>13,z=0|s[1],W=8191&z,K=z>>>13,G=0|s[2],Y=8191&G,V=G>>>13,X=0|s[3],Z=8191&X,J=X>>>13,$=0|s[4],Q=8191&$,tt=$>>>13,et=0|s[5],rt=8191&et,nt=et>>>13,it=0|s[6],ot=8191&it,at=it>>>13,st=0|s[7],ut=8191&st,ct=st>>>13,ft=0|s[8],ht=8191&ft,lt=ft>>>13,dt=0|s[9],pt=8191&dt,bt=dt>>>13
r.negative=t.negative^e.negative,r.length=19
var mt=(c+(n=Math.imul(h,q))|0)+((8191&(i=(i=Math.imul(h,F))+Math.imul(l,q)|0))<<13)|0
c=((o=Math.imul(l,F))+(i>>>13)|0)+(mt>>>26)|0,mt&=67108863,n=Math.imul(p,q),i=(i=Math.imul(p,F))+Math.imul(b,q)|0,o=Math.imul(b,F)
var vt=(c+(n=n+Math.imul(h,W)|0)|0)+((8191&(i=(i=i+Math.imul(h,K)|0)+Math.imul(l,W)|0))<<13)|0
c=((o=o+Math.imul(l,K)|0)+(i>>>13)|0)+(vt>>>26)|0,vt&=67108863,n=Math.imul(v,q),i=(i=Math.imul(v,F))+Math.imul(g,q)|0,o=Math.imul(g,F),n=n+Math.imul(p,W)|0,i=(i=i+Math.imul(p,K)|0)+Math.imul(b,W)|0,o=o+Math.imul(b,K)|0
var gt=(c+(n=n+Math.imul(h,Y)|0)|0)+((8191&(i=(i=i+Math.imul(h,V)|0)+Math.imul(l,Y)|0))<<13)|0
c=((o=o+Math.imul(l,V)|0)+(i>>>13)|0)+(gt>>>26)|0,gt&=67108863,n=Math.imul(w,q),i=(i=Math.imul(w,F))+Math.imul(_,q)|0,o=Math.imul(_,F),n=n+Math.imul(v,W)|0,i=(i=i+Math.imul(v,K)|0)+Math.imul(g,W)|0,o=o+Math.imul(g,K)|0,n=n+Math.imul(p,Y)|0,i=(i=i+Math.imul(p,V)|0)+Math.imul(b,Y)|0,o=o+Math.imul(b,V)|0
var yt=(c+(n=n+Math.imul(h,Z)|0)|0)+((8191&(i=(i=i+Math.imul(h,J)|0)+Math.imul(l,Z)|0))<<13)|0
c=((o=o+Math.imul(l,J)|0)+(i>>>13)|0)+(yt>>>26)|0,yt&=67108863,n=Math.imul(S,q),i=(i=Math.imul(S,F))+Math.imul(E,q)|0,o=Math.imul(E,F),n=n+Math.imul(w,W)|0,i=(i=i+Math.imul(w,K)|0)+Math.imul(_,W)|0,o=o+Math.imul(_,K)|0,n=n+Math.imul(v,Y)|0,i=(i=i+Math.imul(v,V)|0)+Math.imul(g,Y)|0,o=o+Math.imul(g,V)|0,n=n+Math.imul(p,Z)|0,i=(i=i+Math.imul(p,J)|0)+Math.imul(b,Z)|0,o=o+Math.imul(b,J)|0
var wt=(c+(n=n+Math.imul(h,Q)|0)|0)+((8191&(i=(i=i+Math.imul(h,tt)|0)+Math.imul(l,Q)|0))<<13)|0
c=((o=o+Math.imul(l,tt)|0)+(i>>>13)|0)+(wt>>>26)|0,wt&=67108863,n=Math.imul(A,q),i=(i=Math.imul(A,F))+Math.imul(T,q)|0,o=Math.imul(T,F),n=n+Math.imul(S,W)|0,i=(i=i+Math.imul(S,K)|0)+Math.imul(E,W)|0,o=o+Math.imul(E,K)|0,n=n+Math.imul(w,Y)|0,i=(i=i+Math.imul(w,V)|0)+Math.imul(_,Y)|0,o=o+Math.imul(_,V)|0,n=n+Math.imul(v,Z)|0,i=(i=i+Math.imul(v,J)|0)+Math.imul(g,Z)|0,o=o+Math.imul(g,J)|0,n=n+Math.imul(p,Q)|0,i=(i=i+Math.imul(p,tt)|0)+Math.imul(b,Q)|0,o=o+Math.imul(b,tt)|0
var _t=(c+(n=n+Math.imul(h,rt)|0)|0)+((8191&(i=(i=i+Math.imul(h,nt)|0)+Math.imul(l,rt)|0))<<13)|0
c=((o=o+Math.imul(l,nt)|0)+(i>>>13)|0)+(_t>>>26)|0,_t&=67108863,n=Math.imul(x,q),i=(i=Math.imul(x,F))+Math.imul(C,q)|0,o=Math.imul(C,F),n=n+Math.imul(A,W)|0,i=(i=i+Math.imul(A,K)|0)+Math.imul(T,W)|0,o=o+Math.imul(T,K)|0,n=n+Math.imul(S,Y)|0,i=(i=i+Math.imul(S,V)|0)+Math.imul(E,Y)|0,o=o+Math.imul(E,V)|0,n=n+Math.imul(w,Z)|0,i=(i=i+Math.imul(w,J)|0)+Math.imul(_,Z)|0,o=o+Math.imul(_,J)|0,n=n+Math.imul(v,Q)|0,i=(i=i+Math.imul(v,tt)|0)+Math.imul(g,Q)|0,o=o+Math.imul(g,tt)|0,n=n+Math.imul(p,rt)|0,i=(i=i+Math.imul(p,nt)|0)+Math.imul(b,rt)|0,o=o+Math.imul(b,nt)|0
var Mt=(c+(n=n+Math.imul(h,ot)|0)|0)+((8191&(i=(i=i+Math.imul(h,at)|0)+Math.imul(l,ot)|0))<<13)|0
c=((o=o+Math.imul(l,at)|0)+(i>>>13)|0)+(Mt>>>26)|0,Mt&=67108863,n=Math.imul(B,q),i=(i=Math.imul(B,F))+Math.imul(O,q)|0,o=Math.imul(O,F),n=n+Math.imul(x,W)|0,i=(i=i+Math.imul(x,K)|0)+Math.imul(C,W)|0,o=o+Math.imul(C,K)|0,n=n+Math.imul(A,Y)|0,i=(i=i+Math.imul(A,V)|0)+Math.imul(T,Y)|0,o=o+Math.imul(T,V)|0,n=n+Math.imul(S,Z)|0,i=(i=i+Math.imul(S,J)|0)+Math.imul(E,Z)|0,o=o+Math.imul(E,J)|0,n=n+Math.imul(w,Q)|0,i=(i=i+Math.imul(w,tt)|0)+Math.imul(_,Q)|0,o=o+Math.imul(_,tt)|0,n=n+Math.imul(v,rt)|0,i=(i=i+Math.imul(v,nt)|0)+Math.imul(g,rt)|0,o=o+Math.imul(g,nt)|0,n=n+Math.imul(p,ot)|0,i=(i=i+Math.imul(p,at)|0)+Math.imul(b,ot)|0,o=o+Math.imul(b,at)|0
var St=(c+(n=n+Math.imul(h,ut)|0)|0)+((8191&(i=(i=i+Math.imul(h,ct)|0)+Math.imul(l,ut)|0))<<13)|0
c=((o=o+Math.imul(l,ct)|0)+(i>>>13)|0)+(St>>>26)|0,St&=67108863,n=Math.imul(L,q),i=(i=Math.imul(L,F))+Math.imul(N,q)|0,o=Math.imul(N,F),n=n+Math.imul(B,W)|0,i=(i=i+Math.imul(B,K)|0)+Math.imul(O,W)|0,o=o+Math.imul(O,K)|0,n=n+Math.imul(x,Y)|0,i=(i=i+Math.imul(x,V)|0)+Math.imul(C,Y)|0,o=o+Math.imul(C,V)|0,n=n+Math.imul(A,Z)|0,i=(i=i+Math.imul(A,J)|0)+Math.imul(T,Z)|0,o=o+Math.imul(T,J)|0,n=n+Math.imul(S,Q)|0,i=(i=i+Math.imul(S,tt)|0)+Math.imul(E,Q)|0,o=o+Math.imul(E,tt)|0,n=n+Math.imul(w,rt)|0,i=(i=i+Math.imul(w,nt)|0)+Math.imul(_,rt)|0,o=o+Math.imul(_,nt)|0,n=n+Math.imul(v,ot)|0,i=(i=i+Math.imul(v,at)|0)+Math.imul(g,ot)|0,o=o+Math.imul(g,at)|0,n=n+Math.imul(p,ut)|0,i=(i=i+Math.imul(p,ct)|0)+Math.imul(b,ut)|0,o=o+Math.imul(b,ct)|0
var Et=(c+(n=n+Math.imul(h,ht)|0)|0)+((8191&(i=(i=i+Math.imul(h,lt)|0)+Math.imul(l,ht)|0))<<13)|0
c=((o=o+Math.imul(l,lt)|0)+(i>>>13)|0)+(Et>>>26)|0,Et&=67108863,n=Math.imul(j,q),i=(i=Math.imul(j,F))+Math.imul(U,q)|0,o=Math.imul(U,F),n=n+Math.imul(L,W)|0,i=(i=i+Math.imul(L,K)|0)+Math.imul(N,W)|0,o=o+Math.imul(N,K)|0,n=n+Math.imul(B,Y)|0,i=(i=i+Math.imul(B,V)|0)+Math.imul(O,Y)|0,o=o+Math.imul(O,V)|0,n=n+Math.imul(x,Z)|0,i=(i=i+Math.imul(x,J)|0)+Math.imul(C,Z)|0,o=o+Math.imul(C,J)|0,n=n+Math.imul(A,Q)|0,i=(i=i+Math.imul(A,tt)|0)+Math.imul(T,Q)|0,o=o+Math.imul(T,tt)|0,n=n+Math.imul(S,rt)|0,i=(i=i+Math.imul(S,nt)|0)+Math.imul(E,rt)|0,o=o+Math.imul(E,nt)|0,n=n+Math.imul(w,ot)|0,i=(i=i+Math.imul(w,at)|0)+Math.imul(_,ot)|0,o=o+Math.imul(_,at)|0,n=n+Math.imul(v,ut)|0,i=(i=i+Math.imul(v,ct)|0)+Math.imul(g,ut)|0,o=o+Math.imul(g,ct)|0,n=n+Math.imul(p,ht)|0,i=(i=i+Math.imul(p,lt)|0)+Math.imul(b,ht)|0,o=o+Math.imul(b,lt)|0
var kt=(c+(n=n+Math.imul(h,pt)|0)|0)+((8191&(i=(i=i+Math.imul(h,bt)|0)+Math.imul(l,pt)|0))<<13)|0
c=((o=o+Math.imul(l,bt)|0)+(i>>>13)|0)+(kt>>>26)|0,kt&=67108863,n=Math.imul(j,W),i=(i=Math.imul(j,K))+Math.imul(U,W)|0,o=Math.imul(U,K),n=n+Math.imul(L,Y)|0,i=(i=i+Math.imul(L,V)|0)+Math.imul(N,Y)|0,o=o+Math.imul(N,V)|0,n=n+Math.imul(B,Z)|0,i=(i=i+Math.imul(B,J)|0)+Math.imul(O,Z)|0,o=o+Math.imul(O,J)|0,n=n+Math.imul(x,Q)|0,i=(i=i+Math.imul(x,tt)|0)+Math.imul(C,Q)|0,o=o+Math.imul(C,tt)|0,n=n+Math.imul(A,rt)|0,i=(i=i+Math.imul(A,nt)|0)+Math.imul(T,rt)|0,o=o+Math.imul(T,nt)|0,n=n+Math.imul(S,ot)|0,i=(i=i+Math.imul(S,at)|0)+Math.imul(E,ot)|0,o=o+Math.imul(E,at)|0,n=n+Math.imul(w,ut)|0,i=(i=i+Math.imul(w,ct)|0)+Math.imul(_,ut)|0,o=o+Math.imul(_,ct)|0,n=n+Math.imul(v,ht)|0,i=(i=i+Math.imul(v,lt)|0)+Math.imul(g,ht)|0,o=o+Math.imul(g,lt)|0
var At=(c+(n=n+Math.imul(p,pt)|0)|0)+((8191&(i=(i=i+Math.imul(p,bt)|0)+Math.imul(b,pt)|0))<<13)|0
c=((o=o+Math.imul(b,bt)|0)+(i>>>13)|0)+(At>>>26)|0,At&=67108863,n=Math.imul(j,Y),i=(i=Math.imul(j,V))+Math.imul(U,Y)|0,o=Math.imul(U,V),n=n+Math.imul(L,Z)|0,i=(i=i+Math.imul(L,J)|0)+Math.imul(N,Z)|0,o=o+Math.imul(N,J)|0,n=n+Math.imul(B,Q)|0,i=(i=i+Math.imul(B,tt)|0)+Math.imul(O,Q)|0,o=o+Math.imul(O,tt)|0,n=n+Math.imul(x,rt)|0,i=(i=i+Math.imul(x,nt)|0)+Math.imul(C,rt)|0,o=o+Math.imul(C,nt)|0,n=n+Math.imul(A,ot)|0,i=(i=i+Math.imul(A,at)|0)+Math.imul(T,ot)|0,o=o+Math.imul(T,at)|0,n=n+Math.imul(S,ut)|0,i=(i=i+Math.imul(S,ct)|0)+Math.imul(E,ut)|0,o=o+Math.imul(E,ct)|0,n=n+Math.imul(w,ht)|0,i=(i=i+Math.imul(w,lt)|0)+Math.imul(_,ht)|0,o=o+Math.imul(_,lt)|0
var Tt=(c+(n=n+Math.imul(v,pt)|0)|0)+((8191&(i=(i=i+Math.imul(v,bt)|0)+Math.imul(g,pt)|0))<<13)|0
c=((o=o+Math.imul(g,bt)|0)+(i>>>13)|0)+(Tt>>>26)|0,Tt&=67108863,n=Math.imul(j,Z),i=(i=Math.imul(j,J))+Math.imul(U,Z)|0,o=Math.imul(U,J),n=n+Math.imul(L,Q)|0,i=(i=i+Math.imul(L,tt)|0)+Math.imul(N,Q)|0,o=o+Math.imul(N,tt)|0,n=n+Math.imul(B,rt)|0,i=(i=i+Math.imul(B,nt)|0)+Math.imul(O,rt)|0,o=o+Math.imul(O,nt)|0,n=n+Math.imul(x,ot)|0,i=(i=i+Math.imul(x,at)|0)+Math.imul(C,ot)|0,o=o+Math.imul(C,at)|0,n=n+Math.imul(A,ut)|0,i=(i=i+Math.imul(A,ct)|0)+Math.imul(T,ut)|0,o=o+Math.imul(T,ct)|0,n=n+Math.imul(S,ht)|0,i=(i=i+Math.imul(S,lt)|0)+Math.imul(E,ht)|0,o=o+Math.imul(E,lt)|0
var Rt=(c+(n=n+Math.imul(w,pt)|0)|0)+((8191&(i=(i=i+Math.imul(w,bt)|0)+Math.imul(_,pt)|0))<<13)|0
c=((o=o+Math.imul(_,bt)|0)+(i>>>13)|0)+(Rt>>>26)|0,Rt&=67108863,n=Math.imul(j,Q),i=(i=Math.imul(j,tt))+Math.imul(U,Q)|0,o=Math.imul(U,tt),n=n+Math.imul(L,rt)|0,i=(i=i+Math.imul(L,nt)|0)+Math.imul(N,rt)|0,o=o+Math.imul(N,nt)|0,n=n+Math.imul(B,ot)|0,i=(i=i+Math.imul(B,at)|0)+Math.imul(O,ot)|0,o=o+Math.imul(O,at)|0,n=n+Math.imul(x,ut)|0,i=(i=i+Math.imul(x,ct)|0)+Math.imul(C,ut)|0,o=o+Math.imul(C,ct)|0,n=n+Math.imul(A,ht)|0,i=(i=i+Math.imul(A,lt)|0)+Math.imul(T,ht)|0,o=o+Math.imul(T,lt)|0
var xt=(c+(n=n+Math.imul(S,pt)|0)|0)+((8191&(i=(i=i+Math.imul(S,bt)|0)+Math.imul(E,pt)|0))<<13)|0
c=((o=o+Math.imul(E,bt)|0)+(i>>>13)|0)+(xt>>>26)|0,xt&=67108863,n=Math.imul(j,rt),i=(i=Math.imul(j,nt))+Math.imul(U,rt)|0,o=Math.imul(U,nt),n=n+Math.imul(L,ot)|0,i=(i=i+Math.imul(L,at)|0)+Math.imul(N,ot)|0,o=o+Math.imul(N,at)|0,n=n+Math.imul(B,ut)|0,i=(i=i+Math.imul(B,ct)|0)+Math.imul(O,ut)|0,o=o+Math.imul(O,ct)|0,n=n+Math.imul(x,ht)|0,i=(i=i+Math.imul(x,lt)|0)+Math.imul(C,ht)|0,o=o+Math.imul(C,lt)|0
var Ct=(c+(n=n+Math.imul(A,pt)|0)|0)+((8191&(i=(i=i+Math.imul(A,bt)|0)+Math.imul(T,pt)|0))<<13)|0
c=((o=o+Math.imul(T,bt)|0)+(i>>>13)|0)+(Ct>>>26)|0,Ct&=67108863,n=Math.imul(j,ot),i=(i=Math.imul(j,at))+Math.imul(U,ot)|0,o=Math.imul(U,at),n=n+Math.imul(L,ut)|0,i=(i=i+Math.imul(L,ct)|0)+Math.imul(N,ut)|0,o=o+Math.imul(N,ct)|0,n=n+Math.imul(B,ht)|0,i=(i=i+Math.imul(B,lt)|0)+Math.imul(O,ht)|0,o=o+Math.imul(O,lt)|0
var It=(c+(n=n+Math.imul(x,pt)|0)|0)+((8191&(i=(i=i+Math.imul(x,bt)|0)+Math.imul(C,pt)|0))<<13)|0
c=((o=o+Math.imul(C,bt)|0)+(i>>>13)|0)+(It>>>26)|0,It&=67108863,n=Math.imul(j,ut),i=(i=Math.imul(j,ct))+Math.imul(U,ut)|0,o=Math.imul(U,ct),n=n+Math.imul(L,ht)|0,i=(i=i+Math.imul(L,lt)|0)+Math.imul(N,ht)|0,o=o+Math.imul(N,lt)|0
var Bt=(c+(n=n+Math.imul(B,pt)|0)|0)+((8191&(i=(i=i+Math.imul(B,bt)|0)+Math.imul(O,pt)|0))<<13)|0
c=((o=o+Math.imul(O,bt)|0)+(i>>>13)|0)+(Bt>>>26)|0,Bt&=67108863,n=Math.imul(j,ht),i=(i=Math.imul(j,lt))+Math.imul(U,ht)|0,o=Math.imul(U,lt)
var Ot=(c+(n=n+Math.imul(L,pt)|0)|0)+((8191&(i=(i=i+Math.imul(L,bt)|0)+Math.imul(N,pt)|0))<<13)|0
c=((o=o+Math.imul(N,bt)|0)+(i>>>13)|0)+(Ot>>>26)|0,Ot&=67108863
var Pt=(c+(n=Math.imul(j,pt))|0)+((8191&(i=(i=Math.imul(j,bt))+Math.imul(U,pt)|0))<<13)|0
return c=((o=Math.imul(U,bt))+(i>>>13)|0)+(Pt>>>26)|0,Pt&=67108863,u[0]=mt,u[1]=vt,u[2]=gt,u[3]=yt,u[4]=wt,u[5]=_t,u[6]=Mt,u[7]=St,u[8]=Et,u[9]=kt,u[10]=At,u[11]=Tt,u[12]=Rt,u[13]=xt,u[14]=Ct,u[15]=It,u[16]=Bt,u[17]=Ot,u[18]=Pt,0!==c&&(u[19]=c,r.length++),r}
function v(t,e,r){r.negative=e.negative^t.negative,r.length=t.length+e.length
for(var n=0,i=0,o=0;o<r.length-1;o++){var a=i
i=0
for(var s=67108863&n,u=Math.min(o,e.length-1),c=Math.max(0,o-t.length+1);c<=u;c++){var f=o-c,h=(0|t.words[f])*(0|e.words[c]),l=67108863&h
s=67108863&(l=l+s|0),i+=(a=(a=a+(h/67108864|0)|0)+(l>>>26)|0)>>>26,a&=67108863}r.words[o]=s,n=a,a=i}return 0!==n?r.words[o]=n:r.length--,r._strip()}function g(t,e,r){return v(t,e,r)}function y(t,e){this.x=t,this.y=e}Math.imul||(m=b),o.prototype.mulTo=function(t,e){var r=this.length+t.length
return 10===this.length&&10===t.length?m(this,t,e):r<63?b(this,t,e):r<1024?v(this,t,e):g(this,t,e)},y.prototype.makeRBT=function(t){for(var e=new Array(t),r=o.prototype._countBits(t)-1,n=0;n<t;n++)e[n]=this.revBin(n,r,t)
return e},y.prototype.revBin=function(t,e,r){if(0===t||t===r-1)return t
for(var n=0,i=0;i<e;i++)n|=(1&t)<<e-i-1,t>>=1
return n},y.prototype.permute=function(t,e,r,n,i,o){for(var a=0;a<o;a++)n[a]=e[t[a]],i[a]=r[t[a]]},y.prototype.transform=function(t,e,r,n,i,o){this.permute(o,t,e,r,n,i)
for(var a=1;a<i;a<<=1)for(var s=a<<1,u=Math.cos(2*Math.PI/s),c=Math.sin(2*Math.PI/s),f=0;f<i;f+=s)for(var h=u,l=c,d=0;d<a;d++){var p=r[f+d],b=n[f+d],m=r[f+d+a],v=n[f+d+a],g=h*m-l*v
v=h*v+l*m,m=g,r[f+d]=p+m,n[f+d]=b+v,r[f+d+a]=p-m,n[f+d+a]=b-v,d!==s&&(g=u*h-c*l,l=u*l+c*h,h=g)}},y.prototype.guessLen13b=function(t,e){var r=1|Math.max(e,t),n=1&r,i=0
for(r=r/2|0;r;r>>>=1)i++
return 1<<i+1+n},y.prototype.conjugate=function(t,e,r){if(!(r<=1))for(var n=0;n<r/2;n++){var i=t[n]
t[n]=t[r-n-1],t[r-n-1]=i,i=e[n],e[n]=-e[r-n-1],e[r-n-1]=-i}},y.prototype.normalize13b=function(t,e){for(var r=0,n=0;n<e/2;n++){var i=8192*Math.round(t[2*n+1]/e)+Math.round(t[2*n]/e)+r
t[n]=67108863&i,r=i<67108864?0:i/67108864|0}return t},y.prototype.convert13b=function(t,e,r,i){for(var o=0,a=0;a<e;a++)o+=0|t[a],r[2*a]=8191&o,o>>>=13,r[2*a+1]=8191&o,o>>>=13
for(a=2*e;a<i;++a)r[a]=0
n(0===o),n(0==(-8192&o))},y.prototype.stub=function(t){for(var e=new Array(t),r=0;r<t;r++)e[r]=0
return e},y.prototype.mulp=function(t,e,r){var n=2*this.guessLen13b(t.length,e.length),i=this.makeRBT(n),o=this.stub(n),a=new Array(n),s=new Array(n),u=new Array(n),c=new Array(n),f=new Array(n),h=new Array(n),l=r.words
l.length=n,this.convert13b(t.words,t.length,a,n),this.convert13b(e.words,e.length,c,n),this.transform(a,o,s,u,n,i),this.transform(c,o,f,h,n,i)
for(var d=0;d<n;d++){var p=s[d]*f[d]-u[d]*h[d]
u[d]=s[d]*h[d]+u[d]*f[d],s[d]=p}return this.conjugate(s,u,n),this.transform(s,u,l,o,n,i),this.conjugate(l,o,n),this.normalize13b(l,n),r.negative=t.negative^e.negative,r.length=t.length+e.length,r._strip()},o.prototype.mul=function(t){var e=new o(null)
return e.words=new Array(this.length+t.length),this.mulTo(t,e)},o.prototype.mulf=function(t){var e=new o(null)
return e.words=new Array(this.length+t.length),g(this,t,e)},o.prototype.imul=function(t){return this.clone().mulTo(t,this)},o.prototype.imuln=function(t){var e=t<0
e&&(t=-t),n("number"==typeof t),n(t<67108864)
for(var r=0,i=0;i<this.length;i++){var o=(0|this.words[i])*t,a=(67108863&o)+(67108863&r)
r>>=26,r+=o/67108864|0,r+=a>>>26,this.words[i]=67108863&a}return 0!==r&&(this.words[i]=r,this.length++),e?this.ineg():this},o.prototype.muln=function(t){return this.clone().imuln(t)},o.prototype.sqr=function(){return this.mul(this)},o.prototype.isqr=function(){return this.imul(this.clone())},o.prototype.pow=function(t){var e=function(t){for(var e=new Array(t.bitLength()),r=0;r<e.length;r++){var n=r/26|0,i=r%26
e[r]=t.words[n]>>>i&1}return e}(t)
if(0===e.length)return new o(1)
for(var r=this,n=0;n<e.length&&0===e[n];n++,r=r.sqr());if(++n<e.length)for(var i=r.sqr();n<e.length;n++,i=i.sqr())0!==e[n]&&(r=r.mul(i))
return r},o.prototype.iushln=function(t){n("number"==typeof t&&t>=0)
var e,r=t%26,i=(t-r)/26,o=67108863>>>26-r<<26-r
if(0!==r){var a=0
for(e=0;e<this.length;e++){var s=this.words[e]&o,u=(0|this.words[e])-s<<r
this.words[e]=u|a,a=s>>>26-r}a&&(this.words[e]=a,this.length++)}if(0!==i){for(e=this.length-1;e>=0;e--)this.words[e+i]=this.words[e]
for(e=0;e<i;e++)this.words[e]=0
this.length+=i}return this._strip()},o.prototype.ishln=function(t){return n(0===this.negative),this.iushln(t)},o.prototype.iushrn=function(t,e,r){var i
n("number"==typeof t&&t>=0),i=e?(e-e%26)/26:0
var o=t%26,a=Math.min((t-o)/26,this.length),s=67108863^67108863>>>o<<o,u=r
if(i-=a,i=Math.max(0,i),u){for(var c=0;c<a;c++)u.words[c]=this.words[c]
u.length=a}if(0===a);else if(this.length>a)for(this.length-=a,c=0;c<this.length;c++)this.words[c]=this.words[c+a]
else this.words[0]=0,this.length=1
var f=0
for(c=this.length-1;c>=0&&(0!==f||c>=i);c--){var h=0|this.words[c]
this.words[c]=f<<26-o|h>>>o,f=h&s}return u&&0!==f&&(u.words[u.length++]=f),0===this.length&&(this.words[0]=0,this.length=1),this._strip()},o.prototype.ishrn=function(t,e,r){return n(0===this.negative),this.iushrn(t,e,r)},o.prototype.shln=function(t){return this.clone().ishln(t)},o.prototype.ushln=function(t){return this.clone().iushln(t)},o.prototype.shrn=function(t){return this.clone().ishrn(t)},o.prototype.ushrn=function(t){return this.clone().iushrn(t)},o.prototype.testn=function(t){n("number"==typeof t&&t>=0)
var e=t%26,r=(t-e)/26,i=1<<e
return!(this.length<=r||!(this.words[r]&i))},o.prototype.imaskn=function(t){n("number"==typeof t&&t>=0)
var e=t%26,r=(t-e)/26
if(n(0===this.negative,"imaskn works only with positive numbers"),this.length<=r)return this
if(0!==e&&r++,this.length=Math.min(r,this.length),0!==e){var i=67108863^67108863>>>e<<e
this.words[this.length-1]&=i}return this._strip()},o.prototype.maskn=function(t){return this.clone().imaskn(t)},o.prototype.iaddn=function(t){return n("number"==typeof t),n(t<67108864),t<0?this.isubn(-t):0!==this.negative?1===this.length&&(0|this.words[0])<=t?(this.words[0]=t-(0|this.words[0]),this.negative=0,this):(this.negative=0,this.isubn(t),this.negative=1,this):this._iaddn(t)},o.prototype._iaddn=function(t){this.words[0]+=t
for(var e=0;e<this.length&&this.words[e]>=67108864;e++)this.words[e]-=67108864,e===this.length-1?this.words[e+1]=1:this.words[e+1]++
return this.length=Math.max(this.length,e+1),this},o.prototype.isubn=function(t){if(n("number"==typeof t),n(t<67108864),t<0)return this.iaddn(-t)
if(0!==this.negative)return this.negative=0,this.iaddn(t),this.negative=1,this
if(this.words[0]-=t,1===this.length&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1
else for(var e=0;e<this.length&&this.words[e]<0;e++)this.words[e]+=67108864,this.words[e+1]-=1
return this._strip()},o.prototype.addn=function(t){return this.clone().iaddn(t)},o.prototype.subn=function(t){return this.clone().isubn(t)},o.prototype.iabs=function(){return this.negative=0,this},o.prototype.abs=function(){return this.clone().iabs()},o.prototype._ishlnsubmul=function(t,e,r){var i,o,a=t.length+r
this._expand(a)
var s=0
for(i=0;i<t.length;i++){o=(0|this.words[i+r])+s
var u=(0|t.words[i])*e
s=((o-=67108863&u)>>26)-(u/67108864|0),this.words[i+r]=67108863&o}for(;i<this.length-r;i++)s=(o=(0|this.words[i+r])+s)>>26,this.words[i+r]=67108863&o
if(0===s)return this._strip()
for(n(-1===s),s=0,i=0;i<this.length;i++)s=(o=-(0|this.words[i])+s)>>26,this.words[i]=67108863&o
return this.negative=1,this._strip()},o.prototype._wordDiv=function(t,e){var r=(this.length,t.length),n=this.clone(),i=t,a=0|i.words[i.length-1]
0!=(r=26-this._countBits(a))&&(i=i.ushln(r),n.iushln(r),a=0|i.words[i.length-1])
var s,u=n.length-i.length
if("mod"!==e){(s=new o(null)).length=u+1,s.words=new Array(s.length)
for(var c=0;c<s.length;c++)s.words[c]=0}var f=n.clone()._ishlnsubmul(i,1,u)
0===f.negative&&(n=f,s&&(s.words[u]=1))
for(var h=u-1;h>=0;h--){var l=67108864*(0|n.words[i.length+h])+(0|n.words[i.length+h-1])
for(l=Math.min(l/a|0,67108863),n._ishlnsubmul(i,l,h);0!==n.negative;)l--,n.negative=0,n._ishlnsubmul(i,1,h),n.isZero()||(n.negative^=1)
s&&(s.words[h]=l)}return s&&s._strip(),n._strip(),"div"!==e&&0!==r&&n.iushrn(r),{div:s||null,mod:n}},o.prototype.divmod=function(t,e,r){return n(!t.isZero()),this.isZero()?{div:new o(0),mod:new o(0)}:0!==this.negative&&0===t.negative?(s=this.neg().divmod(t,e),"mod"!==e&&(i=s.div.neg()),"div"!==e&&(a=s.mod.neg(),r&&0!==a.negative&&a.iadd(t)),{div:i,mod:a}):0===this.negative&&0!==t.negative?(s=this.divmod(t.neg(),e),"mod"!==e&&(i=s.div.neg()),{div:i,mod:s.mod}):0!=(this.negative&t.negative)?(s=this.neg().divmod(t.neg(),e),"div"!==e&&(a=s.mod.neg(),r&&0!==a.negative&&a.isub(t)),{div:s.div,mod:a}):t.length>this.length||this.cmp(t)<0?{div:new o(0),mod:this}:1===t.length?"div"===e?{div:this.divn(t.words[0]),mod:null}:"mod"===e?{div:null,mod:new o(this.modrn(t.words[0]))}:{div:this.divn(t.words[0]),mod:new o(this.modrn(t.words[0]))}:this._wordDiv(t,e)
var i,a,s},o.prototype.div=function(t){return this.divmod(t,"div",!1).div},o.prototype.mod=function(t){return this.divmod(t,"mod",!1).mod},o.prototype.umod=function(t){return this.divmod(t,"mod",!0).mod},o.prototype.divRound=function(t){var e=this.divmod(t)
if(e.mod.isZero())return e.div
var r=0!==e.div.negative?e.mod.isub(t):e.mod,n=t.ushrn(1),i=t.andln(1),o=r.cmp(n)
return o<0||1===i&&0===o?e.div:0!==e.div.negative?e.div.isubn(1):e.div.iaddn(1)},o.prototype.modrn=function(t){var e=t<0
e&&(t=-t),n(t<=67108863)
for(var r=(1<<26)%t,i=0,o=this.length-1;o>=0;o--)i=(r*i+(0|this.words[o]))%t
return e?-i:i},o.prototype.modn=function(t){return this.modrn(t)},o.prototype.idivn=function(t){var e=t<0
e&&(t=-t),n(t<=67108863)
for(var r=0,i=this.length-1;i>=0;i--){var o=(0|this.words[i])+67108864*r
this.words[i]=o/t|0,r=o%t}return this._strip(),e?this.ineg():this},o.prototype.divn=function(t){return this.clone().idivn(t)},o.prototype.egcd=function(t){n(0===t.negative),n(!t.isZero())
var e=this,r=t.clone()
e=0!==e.negative?e.umod(t):e.clone()
for(var i=new o(1),a=new o(0),s=new o(0),u=new o(1),c=0;e.isEven()&&r.isEven();)e.iushrn(1),r.iushrn(1),++c
for(var f=r.clone(),h=e.clone();!e.isZero();){for(var l=0,d=1;0==(e.words[0]&d)&&l<26;++l,d<<=1);if(l>0)for(e.iushrn(l);l-- >0;)(i.isOdd()||a.isOdd())&&(i.iadd(f),a.isub(h)),i.iushrn(1),a.iushrn(1)
for(var p=0,b=1;0==(r.words[0]&b)&&p<26;++p,b<<=1);if(p>0)for(r.iushrn(p);p-- >0;)(s.isOdd()||u.isOdd())&&(s.iadd(f),u.isub(h)),s.iushrn(1),u.iushrn(1)
e.cmp(r)>=0?(e.isub(r),i.isub(s),a.isub(u)):(r.isub(e),s.isub(i),u.isub(a))}return{a:s,b:u,gcd:r.iushln(c)}},o.prototype._invmp=function(t){n(0===t.negative),n(!t.isZero())
var e=this,r=t.clone()
e=0!==e.negative?e.umod(t):e.clone()
for(var i,a=new o(1),s=new o(0),u=r.clone();e.cmpn(1)>0&&r.cmpn(1)>0;){for(var c=0,f=1;0==(e.words[0]&f)&&c<26;++c,f<<=1);if(c>0)for(e.iushrn(c);c-- >0;)a.isOdd()&&a.iadd(u),a.iushrn(1)
for(var h=0,l=1;0==(r.words[0]&l)&&h<26;++h,l<<=1);if(h>0)for(r.iushrn(h);h-- >0;)s.isOdd()&&s.iadd(u),s.iushrn(1)
e.cmp(r)>=0?(e.isub(r),a.isub(s)):(r.isub(e),s.isub(a))}return(i=0===e.cmpn(1)?a:s).cmpn(0)<0&&i.iadd(t),i},o.prototype.gcd=function(t){if(this.isZero())return t.abs()
if(t.isZero())return this.abs()
var e=this.clone(),r=t.clone()
e.negative=0,r.negative=0
for(var n=0;e.isEven()&&r.isEven();n++)e.iushrn(1),r.iushrn(1)
for(;;){for(;e.isEven();)e.iushrn(1)
for(;r.isEven();)r.iushrn(1)
var i=e.cmp(r)
if(i<0){var o=e
e=r,r=o}else if(0===i||0===r.cmpn(1))break
e.isub(r)}return r.iushln(n)},o.prototype.invm=function(t){return this.egcd(t).a.umod(t)},o.prototype.isEven=function(){return 0==(1&this.words[0])},o.prototype.isOdd=function(){return 1==(1&this.words[0])},o.prototype.andln=function(t){return this.words[0]&t},o.prototype.bincn=function(t){n("number"==typeof t)
var e=t%26,r=(t-e)/26,i=1<<e
if(this.length<=r)return this._expand(r+1),this.words[r]|=i,this
for(var o=i,a=r;0!==o&&a<this.length;a++){var s=0|this.words[a]
o=(s+=o)>>>26,s&=67108863,this.words[a]=s}return 0!==o&&(this.words[a]=o,this.length++),this},o.prototype.isZero=function(){return 1===this.length&&0===this.words[0]},o.prototype.cmpn=function(t){var e,r=t<0
if(0!==this.negative&&!r)return-1
if(0===this.negative&&r)return 1
if(this._strip(),this.length>1)e=1
else{r&&(t=-t),n(t<=67108863,"Number is too big")
var i=0|this.words[0]
e=i===t?0:i<t?-1:1}return 0!==this.negative?0|-e:e},o.prototype.cmp=function(t){if(0!==this.negative&&0===t.negative)return-1
if(0===this.negative&&0!==t.negative)return 1
var e=this.ucmp(t)
return 0!==this.negative?0|-e:e},o.prototype.ucmp=function(t){if(this.length>t.length)return 1
if(this.length<t.length)return-1
for(var e=0,r=this.length-1;r>=0;r--){var n=0|this.words[r],i=0|t.words[r]
if(n!==i){n<i?e=-1:n>i&&(e=1)
break}}return e},o.prototype.gtn=function(t){return 1===this.cmpn(t)},o.prototype.gt=function(t){return 1===this.cmp(t)},o.prototype.gten=function(t){return this.cmpn(t)>=0},o.prototype.gte=function(t){return this.cmp(t)>=0},o.prototype.ltn=function(t){return-1===this.cmpn(t)},o.prototype.lt=function(t){return-1===this.cmp(t)},o.prototype.lten=function(t){return this.cmpn(t)<=0},o.prototype.lte=function(t){return this.cmp(t)<=0},o.prototype.eqn=function(t){return 0===this.cmpn(t)},o.prototype.eq=function(t){return 0===this.cmp(t)},o.red=function(t){return new A(t)},o.prototype.toRed=function(t){return n(!this.red,"Already a number in reduction context"),n(0===this.negative,"red works only with positives"),t.convertTo(this)._forceRed(t)},o.prototype.fromRed=function(){return n(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},o.prototype._forceRed=function(t){return this.red=t,this},o.prototype.forceRed=function(t){return n(!this.red,"Already a number in reduction context"),this._forceRed(t)},o.prototype.redAdd=function(t){return n(this.red,"redAdd works only with red numbers"),this.red.add(this,t)},o.prototype.redIAdd=function(t){return n(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,t)},o.prototype.redSub=function(t){return n(this.red,"redSub works only with red numbers"),this.red.sub(this,t)},o.prototype.redISub=function(t){return n(this.red,"redISub works only with red numbers"),this.red.isub(this,t)},o.prototype.redShl=function(t){return n(this.red,"redShl works only with red numbers"),this.red.shl(this,t)},o.prototype.redMul=function(t){return n(this.red,"redMul works only with red numbers"),this.red._verify2(this,t),this.red.mul(this,t)},o.prototype.redIMul=function(t){return n(this.red,"redMul works only with red numbers"),this.red._verify2(this,t),this.red.imul(this,t)},o.prototype.redSqr=function(){return n(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},o.prototype.redISqr=function(){return n(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},o.prototype.redSqrt=function(){return n(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},o.prototype.redInvm=function(){return n(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},o.prototype.redNeg=function(){return n(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},o.prototype.redPow=function(t){return n(this.red&&!t.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,t)}
var w={k256:null,p224:null,p192:null,p25519:null}
function _(t,e){this.name=t,this.p=new o(e,16),this.n=this.p.bitLength(),this.k=new o(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}function M(){_.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}function S(){_.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}function E(){_.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}function k(){_.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}function A(t){if("string"==typeof t){var e=o._prime(t)
this.m=e.p,this.prime=e}else n(t.gtn(1),"modulus must be greater than 1"),this.m=t,this.prime=null}function T(t){A.call(this,t),this.shift=this.m.bitLength(),this.shift%26!=0&&(this.shift+=26-this.shift%26),this.r=new o(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}_.prototype._tmp=function(){var t=new o(null)
return t.words=new Array(Math.ceil(this.n/13)),t},_.prototype.ireduce=function(t){var e,r=t
do{this.split(r,this.tmp),e=(r=(r=this.imulK(r)).iadd(this.tmp)).bitLength()}while(e>this.n)
var n=e<this.n?-1:r.ucmp(this.p)
return 0===n?(r.words[0]=0,r.length=1):n>0?r.isub(this.p):void 0!==r.strip?r.strip():r._strip(),r},_.prototype.split=function(t,e){t.iushrn(this.n,0,e)},_.prototype.imulK=function(t){return t.imul(this.k)},i(M,_),M.prototype.split=function(t,e){for(var r=4194303,n=Math.min(t.length,9),i=0;i<n;i++)e.words[i]=t.words[i]
if(e.length=n,t.length<=9)return t.words[0]=0,void(t.length=1)
var o=t.words[9]
for(e.words[e.length++]=o&r,i=10;i<t.length;i++){var a=0|t.words[i]
t.words[i-10]=(a&r)<<4|o>>>22,o=a}o>>>=22,t.words[i-10]=o,0===o&&t.length>10?t.length-=10:t.length-=9},M.prototype.imulK=function(t){t.words[t.length]=0,t.words[t.length+1]=0,t.length+=2
for(var e=0,r=0;r<t.length;r++){var n=0|t.words[r]
e+=977*n,t.words[r]=67108863&e,e=64*n+(e/67108864|0)}return 0===t.words[t.length-1]&&(t.length--,0===t.words[t.length-1]&&t.length--),t},i(S,_),i(E,_),i(k,_),k.prototype.imulK=function(t){for(var e=0,r=0;r<t.length;r++){var n=19*(0|t.words[r])+e,i=67108863&n
n>>>=26,t.words[r]=i,e=n}return 0!==e&&(t.words[t.length++]=e),t},o._prime=function(t){if(w[t])return w[t]
var e
if("k256"===t)e=new M
else if("p224"===t)e=new S
else if("p192"===t)e=new E
else{if("p25519"!==t)throw new Error("Unknown prime "+t)
e=new k}return w[t]=e,e},A.prototype._verify1=function(t){n(0===t.negative,"red works only with positives"),n(t.red,"red works only with red numbers")},A.prototype._verify2=function(t,e){n(0==(t.negative|e.negative),"red works only with positives"),n(t.red&&t.red===e.red,"red works only with red numbers")},A.prototype.imod=function(t){return this.prime?this.prime.ireduce(t)._forceRed(this):(f(t,t.umod(this.m)._forceRed(this)),t)},A.prototype.neg=function(t){return t.isZero()?t.clone():this.m.sub(t)._forceRed(this)},A.prototype.add=function(t,e){this._verify2(t,e)
var r=t.add(e)
return r.cmp(this.m)>=0&&r.isub(this.m),r._forceRed(this)},A.prototype.iadd=function(t,e){this._verify2(t,e)
var r=t.iadd(e)
return r.cmp(this.m)>=0&&r.isub(this.m),r},A.prototype.sub=function(t,e){this._verify2(t,e)
var r=t.sub(e)
return r.cmpn(0)<0&&r.iadd(this.m),r._forceRed(this)},A.prototype.isub=function(t,e){this._verify2(t,e)
var r=t.isub(e)
return r.cmpn(0)<0&&r.iadd(this.m),r},A.prototype.shl=function(t,e){return this._verify1(t),this.imod(t.ushln(e))},A.prototype.imul=function(t,e){return this._verify2(t,e),this.imod(t.imul(e))},A.prototype.mul=function(t,e){return this._verify2(t,e),this.imod(t.mul(e))},A.prototype.isqr=function(t){return this.imul(t,t.clone())},A.prototype.sqr=function(t){return this.mul(t,t)},A.prototype.sqrt=function(t){if(t.isZero())return t.clone()
var e=this.m.andln(3)
if(n(e%2==1),3===e){var r=this.m.add(new o(1)).iushrn(2)
return this.pow(t,r)}for(var i=this.m.subn(1),a=0;!i.isZero()&&0===i.andln(1);)a++,i.iushrn(1)
n(!i.isZero())
var s=new o(1).toRed(this),u=s.redNeg(),c=this.m.subn(1).iushrn(1),f=this.m.bitLength()
for(f=new o(2*f*f).toRed(this);0!==this.pow(f,c).cmp(u);)f.redIAdd(u)
for(var h=this.pow(f,i),l=this.pow(t,i.addn(1).iushrn(1)),d=this.pow(t,i),p=a;0!==d.cmp(s);){for(var b=d,m=0;0!==b.cmp(s);m++)b=b.redSqr()
n(m<p)
var v=this.pow(h,new o(1).iushln(p-m-1))
l=l.redMul(v),h=v.redSqr(),d=d.redMul(h),p=m}return l},A.prototype.invm=function(t){var e=t._invmp(this.m)
return 0!==e.negative?(e.negative=0,this.imod(e).redNeg()):this.imod(e)},A.prototype.pow=function(t,e){if(e.isZero())return new o(1).toRed(this)
if(0===e.cmpn(1))return t.clone()
var r=new Array(16)
r[0]=new o(1).toRed(this),r[1]=t
for(var n=2;n<r.length;n++)r[n]=this.mul(r[n-1],t)
var i=r[0],a=0,s=0,u=e.bitLength()%26
for(0===u&&(u=26),n=e.length-1;n>=0;n--){for(var c=e.words[n],f=u-1;f>=0;f--){var h=c>>f&1
i!==r[0]&&(i=this.sqr(i)),0!==h||0!==a?(a<<=1,a|=h,(4==++s||0===n&&0===f)&&(i=this.mul(i,r[a]),s=0,a=0)):s=0}u=26}return i},A.prototype.convertTo=function(t){var e=t.umod(this.m)
return e===t?e.clone():e},A.prototype.convertFrom=function(t){var e=t.clone()
return e.red=null,e},o.mont=function(t){return new T(t)},i(T,A),T.prototype.convertTo=function(t){return this.imod(t.ushln(this.shift))},T.prototype.convertFrom=function(t){var e=this.imod(t.mul(this.rinv))
return e.red=null,e},T.prototype.imul=function(t,e){if(t.isZero()||e.isZero())return t.words[0]=0,t.length=1,t
var r=t.imul(e),n=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=r.isub(n).iushrn(this.shift),o=i
return i.cmp(this.m)>=0?o=i.isub(this.m):i.cmpn(0)<0&&(o=i.iadd(this.m)),o._forceRed(this)},T.prototype.mul=function(t,e){if(t.isZero()||e.isZero())return new o(0)._forceRed(this)
var r=t.mul(e),n=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=r.isub(n).iushrn(this.shift),a=i
return i.cmp(this.m)>=0?a=i.isub(this.m):i.cmpn(0)<0&&(a=i.iadd(this.m)),a._forceRed(this)},T.prototype.invm=function(t){return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)}}(t=r.nmd(t),this)},6561:(t,e,r)=>{t.exports=r(5207)},9527:(t,e,r)=>{var n=r(8850).Buffer,i=r(5866),o=r(5759),a=r(1736),s=r(1628),u=r(5410),c=r(5207)
function f(t){o.Writable.call(this)
var e=c[t]
if(!e)throw new Error("Unknown message digest")
this._hashType=e.hash,this._hash=i(e.hash),this._tag=e.id,this._signType=e.sign}function h(t){o.Writable.call(this)
var e=c[t]
if(!e)throw new Error("Unknown message digest")
this._hash=i(e.hash),this._tag=e.id,this._signType=e.sign}function l(t){return new f(t)}function d(t){return new h(t)}Object.keys(c).forEach((function(t){c[t].id=n.from(c[t].id,"hex"),c[t.toLowerCase()]=c[t]})),a(f,o.Writable),f.prototype._write=function(t,e,r){this._hash.update(t),r()},f.prototype.update=function(t,e){return"string"==typeof t&&(t=n.from(t,e)),this._hash.update(t),this},f.prototype.sign=function(t,e){this.end()
var r=this._hash.digest(),n=s(r,t,this._hashType,this._signType,this._tag)
return e?n.toString(e):n},a(h,o.Writable),h.prototype._write=function(t,e,r){this._hash.update(t),r()},h.prototype.update=function(t,e){return"string"==typeof t&&(t=n.from(t,e)),this._hash.update(t),this},h.prototype.verify=function(t,e,r){"string"==typeof e&&(e=n.from(e,r)),this.end()
var i=this._hash.digest()
return u(e,i,t,this._signType,this._tag)},t.exports={Sign:l,Verify:d,createSign:l,createVerify:d}},1628:(t,e,r)=>{var n=r(8850).Buffer,i=r(4424),o=r(9782),a=r(6597).ec,s=r(6471),u=r(7552),c=r(1308)
function f(t,e,r,o){if((t=n.from(t.toArray())).length<e.byteLength()){var a=n.alloc(e.byteLength()-t.length)
t=n.concat([a,t])}var s=r.length,u=function(t,e){t=(t=h(t,e)).mod(e)
var r=n.from(t.toArray())
if(r.length<e.byteLength()){var i=n.alloc(e.byteLength()-r.length)
r=n.concat([i,r])}return r}(r,e),c=n.alloc(s)
c.fill(1)
var f=n.alloc(s)
return f=i(o,f).update(c).update(n.from([0])).update(t).update(u).digest(),c=i(o,f).update(c).digest(),{k:f=i(o,f).update(c).update(n.from([1])).update(t).update(u).digest(),v:c=i(o,f).update(c).digest()}}function h(t,e){var r=new s(t),n=(t.length<<3)-e.bitLength()
return n>0&&r.ishrn(n),r}function l(t,e,r){var o,a
do{for(o=n.alloc(0);8*o.length<t.bitLength();)e.v=i(r,e.k).update(e.v).digest(),o=n.concat([o,e.v])
a=h(o,t),e.k=i(r,e.k).update(e.v).update(n.from([0])).digest(),e.v=i(r,e.k).update(e.v).digest()}while(-1!==a.cmp(t))
return a}function d(t,e,r,n){return t.toRed(s.mont(r)).redPow(e).fromRed().mod(n)}t.exports=function(t,e,r,i,p){var b=u(e)
if(b.curve){if("ecdsa"!==i&&"ecdsa/rsa"!==i)throw new Error("wrong private key type")
return function(t,e){var r=c[e.curve.join(".")]
if(!r)throw new Error("unknown curve "+e.curve.join("."))
var i=new a(r).keyFromPrivate(e.privateKey).sign(t)
return n.from(i.toDER())}(t,b)}if("dsa"===b.type){if("dsa"!==i)throw new Error("wrong private key type")
return function(t,e,r){for(var i,o=e.params.priv_key,a=e.params.p,u=e.params.q,c=e.params.g,p=new s(0),b=h(t,u).mod(u),m=!1,v=f(o,u,t,r);!1===m;)p=d(c,i=l(u,v,r),a,u),0===(m=i.invm(u).imul(b.add(o.mul(p))).mod(u)).cmpn(0)&&(m=!1,p=new s(0))
return function(t,e){t=t.toArray(),e=e.toArray(),128&t[0]&&(t=[0].concat(t)),128&e[0]&&(e=[0].concat(e))
var r=[48,t.length+e.length+4,2,t.length]
return r=r.concat(t,[2,e.length],e),n.from(r)}(p,m)}(t,b,r)}if("rsa"!==i&&"ecdsa/rsa"!==i)throw new Error("wrong private key type")
t=n.concat([p,t])
for(var m=b.modulus.byteLength(),v=[0,1];t.length+v.length+1<m;)v.push(255)
v.push(0)
for(var g=-1;++g<t.length;)v.push(t[g])
return o(v,b)},t.exports.getKey=f,t.exports.makeKey=l},5410:(t,e,r)=>{var n=r(8850).Buffer,i=r(6471),o=r(6597).ec,a=r(7552),s=r(1308)
function u(t,e){if(t.cmpn(0)<=0)throw new Error("invalid sig")
if(t.cmp(e)>=e)throw new Error("invalid sig")}t.exports=function(t,e,r,c,f){var h=a(r)
if("ec"===h.type){if("ecdsa"!==c&&"ecdsa/rsa"!==c)throw new Error("wrong public key type")
return function(t,e,r){var n=s[r.data.algorithm.curve.join(".")]
if(!n)throw new Error("unknown curve "+r.data.algorithm.curve.join("."))
var i=new o(n),a=r.data.subjectPrivateKey.data
return i.verify(e,t,a)}(t,e,h)}if("dsa"===h.type){if("dsa"!==c)throw new Error("wrong public key type")
return function(t,e,r){var n=r.data.p,o=r.data.q,s=r.data.g,c=r.data.pub_key,f=a.signature.decode(t,"der"),h=f.s,l=f.r
u(h,o),u(l,o)
var d=i.mont(n),p=h.invm(o)
return 0===s.toRed(d).redPow(new i(e).mul(p).mod(o)).fromRed().mul(c.toRed(d).redPow(l.mul(p).mod(o)).fromRed()).mod(n).mod(o).cmp(l)}(t,e,h)}if("rsa"!==c&&"ecdsa/rsa"!==c)throw new Error("wrong public key type")
e=n.concat([f,e])
for(var l=h.modulus.byteLength(),d=[1],p=0;e.length+d.length+2<l;)d.push(255),p++
d.push(0)
for(var b=-1;++b<e.length;)d.push(e[b])
d=n.from(d)
var m=i.mont(h.modulus)
t=(t=new i(t).toRed(m)).redPow(new i(h.publicExponent)),t=n.from(t.fromRed().toArray())
var v=p<8?1:0
for(l=Math.min(t.length,d.length),t.length!==d.length&&(v=1),b=-1;++b<l;)v|=t[b]^d[b]
return 0===v}},6471:function(t,e,r){!function(t,e){"use strict"
function n(t,e){if(!t)throw new Error(e||"Assertion failed")}function i(t,e){t.super_=e
var r=function(){}
r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}function o(t,e,r){if(o.isBN(t))return t
this.negative=0,this.words=null,this.length=0,this.red=null,null!==t&&("le"!==e&&"be"!==e||(r=e,e=10),this._init(t||0,e||10,r||"be"))}var a
"object"==typeof t?t.exports=o:e.BN=o,o.BN=o,o.wordSize=26
try{a="undefined"!=typeof window&&void 0!==window.Buffer?window.Buffer:r(2363).Buffer}catch(t){}function s(t,e){var r=t.charCodeAt(e)
return r>=48&&r<=57?r-48:r>=65&&r<=70?r-55:r>=97&&r<=102?r-87:void n(!1,"Invalid character in "+t)}function u(t,e,r){var n=s(t,r)
return r-1>=e&&(n|=s(t,r-1)<<4),n}function c(t,e,r,i){for(var o=0,a=0,s=Math.min(t.length,r),u=e;u<s;u++){var c=t.charCodeAt(u)-48
o*=i,a=c>=49?c-49+10:c>=17?c-17+10:c,n(c>=0&&a<i,"Invalid character"),o+=a}return o}function f(t,e){t.words=e.words,t.length=e.length,t.negative=e.negative,t.red=e.red}if(o.isBN=function(t){return t instanceof o||null!==t&&"object"==typeof t&&t.constructor.wordSize===o.wordSize&&Array.isArray(t.words)},o.max=function(t,e){return t.cmp(e)>0?t:e},o.min=function(t,e){return t.cmp(e)<0?t:e},o.prototype._init=function(t,e,r){if("number"==typeof t)return this._initNumber(t,e,r)
if("object"==typeof t)return this._initArray(t,e,r)
"hex"===e&&(e=16),n(e===(0|e)&&e>=2&&e<=36)
var i=0
"-"===(t=t.toString().replace(/\s+/g,""))[0]&&(i++,this.negative=1),i<t.length&&(16===e?this._parseHex(t,i,r):(this._parseBase(t,e,i),"le"===r&&this._initArray(this.toArray(),e,r)))},o.prototype._initNumber=function(t,e,r){t<0&&(this.negative=1,t=-t),t<67108864?(this.words=[67108863&t],this.length=1):t<4503599627370496?(this.words=[67108863&t,t/67108864&67108863],this.length=2):(n(t<9007199254740992),this.words=[67108863&t,t/67108864&67108863,1],this.length=3),"le"===r&&this._initArray(this.toArray(),e,r)},o.prototype._initArray=function(t,e,r){if(n("number"==typeof t.length),t.length<=0)return this.words=[0],this.length=1,this
this.length=Math.ceil(t.length/3),this.words=new Array(this.length)
for(var i=0;i<this.length;i++)this.words[i]=0
var o,a,s=0
if("be"===r)for(i=t.length-1,o=0;i>=0;i-=3)a=t[i]|t[i-1]<<8|t[i-2]<<16,this.words[o]|=a<<s&67108863,this.words[o+1]=a>>>26-s&67108863,(s+=24)>=26&&(s-=26,o++)
else if("le"===r)for(i=0,o=0;i<t.length;i+=3)a=t[i]|t[i+1]<<8|t[i+2]<<16,this.words[o]|=a<<s&67108863,this.words[o+1]=a>>>26-s&67108863,(s+=24)>=26&&(s-=26,o++)
return this._strip()},o.prototype._parseHex=function(t,e,r){this.length=Math.ceil((t.length-e)/6),this.words=new Array(this.length)
for(var n=0;n<this.length;n++)this.words[n]=0
var i,o=0,a=0
if("be"===r)for(n=t.length-1;n>=e;n-=2)i=u(t,e,n)<<o,this.words[a]|=67108863&i,o>=18?(o-=18,a+=1,this.words[a]|=i>>>26):o+=8
else for(n=(t.length-e)%2==0?e+1:e;n<t.length;n+=2)i=u(t,e,n)<<o,this.words[a]|=67108863&i,o>=18?(o-=18,a+=1,this.words[a]|=i>>>26):o+=8
this._strip()},o.prototype._parseBase=function(t,e,r){this.words=[0],this.length=1
for(var n=0,i=1;i<=67108863;i*=e)n++
n--,i=i/e|0
for(var o=t.length-r,a=o%n,s=Math.min(o,o-a)+r,u=0,f=r;f<s;f+=n)u=c(t,f,f+n,e),this.imuln(i),this.words[0]+u<67108864?this.words[0]+=u:this._iaddn(u)
if(0!==a){var h=1
for(u=c(t,f,t.length,e),f=0;f<a;f++)h*=e
this.imuln(h),this.words[0]+u<67108864?this.words[0]+=u:this._iaddn(u)}this._strip()},o.prototype.copy=function(t){t.words=new Array(this.length)
for(var e=0;e<this.length;e++)t.words[e]=this.words[e]
t.length=this.length,t.negative=this.negative,t.red=this.red},o.prototype._move=function(t){f(t,this)},o.prototype.clone=function(){var t=new o(null)
return this.copy(t),t},o.prototype._expand=function(t){for(;this.length<t;)this.words[this.length++]=0
return this},o.prototype._strip=function(){for(;this.length>1&&0===this.words[this.length-1];)this.length--
return this._normSign()},o.prototype._normSign=function(){return 1===this.length&&0===this.words[0]&&(this.negative=0),this},"undefined"!=typeof Symbol&&"function"==typeof Symbol.for)try{o.prototype[Symbol.for("nodejs.util.inspect.custom")]=h}catch(t){o.prototype.inspect=h}else o.prototype.inspect=h
function h(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"}var l=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],d=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],p=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176]
function b(t,e,r){r.negative=e.negative^t.negative
var n=t.length+e.length|0
r.length=n,n=n-1|0
var i=0|t.words[0],o=0|e.words[0],a=i*o,s=67108863&a,u=a/67108864|0
r.words[0]=s
for(var c=1;c<n;c++){for(var f=u>>>26,h=67108863&u,l=Math.min(c,e.length-1),d=Math.max(0,c-t.length+1);d<=l;d++){var p=c-d|0
f+=(a=(i=0|t.words[p])*(o=0|e.words[d])+h)/67108864|0,h=67108863&a}r.words[c]=0|h,u=0|f}return 0!==u?r.words[c]=0|u:r.length--,r._strip()}o.prototype.toString=function(t,e){var r
if(e=0|e||1,16===(t=t||10)||"hex"===t){r=""
for(var i=0,o=0,a=0;a<this.length;a++){var s=this.words[a],u=(16777215&(s<<i|o)).toString(16)
o=s>>>24-i&16777215,(i+=2)>=26&&(i-=26,a--),r=0!==o||a!==this.length-1?l[6-u.length]+u+r:u+r}for(0!==o&&(r=o.toString(16)+r);r.length%e!=0;)r="0"+r
return 0!==this.negative&&(r="-"+r),r}if(t===(0|t)&&t>=2&&t<=36){var c=d[t],f=p[t]
r=""
var h=this.clone()
for(h.negative=0;!h.isZero();){var b=h.modrn(f).toString(t)
r=(h=h.idivn(f)).isZero()?b+r:l[c-b.length]+b+r}for(this.isZero()&&(r="0"+r);r.length%e!=0;)r="0"+r
return 0!==this.negative&&(r="-"+r),r}n(!1,"Base should be between 2 and 36")},o.prototype.toNumber=function(){var t=this.words[0]
return 2===this.length?t+=67108864*this.words[1]:3===this.length&&1===this.words[2]?t+=4503599627370496+67108864*this.words[1]:this.length>2&&n(!1,"Number can only safely store up to 53 bits"),0!==this.negative?-t:t},o.prototype.toJSON=function(){return this.toString(16,2)},a&&(o.prototype.toBuffer=function(t,e){return this.toArrayLike(a,t,e)}),o.prototype.toArray=function(t,e){return this.toArrayLike(Array,t,e)},o.prototype.toArrayLike=function(t,e,r){this._strip()
var i=this.byteLength(),o=r||Math.max(1,i)
n(i<=o,"byte array longer than desired length"),n(o>0,"Requested array length <= 0")
var a=function(t,e){return t.allocUnsafe?t.allocUnsafe(e):new t(e)}(t,o)
return this["_toArrayLike"+("le"===e?"LE":"BE")](a,i),a},o.prototype._toArrayLikeLE=function(t,e){for(var r=0,n=0,i=0,o=0;i<this.length;i++){var a=this.words[i]<<o|n
t[r++]=255&a,r<t.length&&(t[r++]=a>>8&255),r<t.length&&(t[r++]=a>>16&255),6===o?(r<t.length&&(t[r++]=a>>24&255),n=0,o=0):(n=a>>>24,o+=2)}if(r<t.length)for(t[r++]=n;r<t.length;)t[r++]=0},o.prototype._toArrayLikeBE=function(t,e){for(var r=t.length-1,n=0,i=0,o=0;i<this.length;i++){var a=this.words[i]<<o|n
t[r--]=255&a,r>=0&&(t[r--]=a>>8&255),r>=0&&(t[r--]=a>>16&255),6===o?(r>=0&&(t[r--]=a>>24&255),n=0,o=0):(n=a>>>24,o+=2)}if(r>=0)for(t[r--]=n;r>=0;)t[r--]=0},Math.clz32?o.prototype._countBits=function(t){return 32-Math.clz32(t)}:o.prototype._countBits=function(t){var e=t,r=0
return e>=4096&&(r+=13,e>>>=13),e>=64&&(r+=7,e>>>=7),e>=8&&(r+=4,e>>>=4),e>=2&&(r+=2,e>>>=2),r+e},o.prototype._zeroBits=function(t){if(0===t)return 26
var e=t,r=0
return 0==(8191&e)&&(r+=13,e>>>=13),0==(127&e)&&(r+=7,e>>>=7),0==(15&e)&&(r+=4,e>>>=4),0==(3&e)&&(r+=2,e>>>=2),0==(1&e)&&r++,r},o.prototype.bitLength=function(){var t=this.words[this.length-1],e=this._countBits(t)
return 26*(this.length-1)+e},o.prototype.zeroBits=function(){if(this.isZero())return 0
for(var t=0,e=0;e<this.length;e++){var r=this._zeroBits(this.words[e])
if(t+=r,26!==r)break}return t},o.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},o.prototype.toTwos=function(t){return 0!==this.negative?this.abs().inotn(t).iaddn(1):this.clone()},o.prototype.fromTwos=function(t){return this.testn(t-1)?this.notn(t).iaddn(1).ineg():this.clone()},o.prototype.isNeg=function(){return 0!==this.negative},o.prototype.neg=function(){return this.clone().ineg()},o.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},o.prototype.iuor=function(t){for(;this.length<t.length;)this.words[this.length++]=0
for(var e=0;e<t.length;e++)this.words[e]=this.words[e]|t.words[e]
return this._strip()},o.prototype.ior=function(t){return n(0==(this.negative|t.negative)),this.iuor(t)},o.prototype.or=function(t){return this.length>t.length?this.clone().ior(t):t.clone().ior(this)},o.prototype.uor=function(t){return this.length>t.length?this.clone().iuor(t):t.clone().iuor(this)},o.prototype.iuand=function(t){var e
e=this.length>t.length?t:this
for(var r=0;r<e.length;r++)this.words[r]=this.words[r]&t.words[r]
return this.length=e.length,this._strip()},o.prototype.iand=function(t){return n(0==(this.negative|t.negative)),this.iuand(t)},o.prototype.and=function(t){return this.length>t.length?this.clone().iand(t):t.clone().iand(this)},o.prototype.uand=function(t){return this.length>t.length?this.clone().iuand(t):t.clone().iuand(this)},o.prototype.iuxor=function(t){var e,r
this.length>t.length?(e=this,r=t):(e=t,r=this)
for(var n=0;n<r.length;n++)this.words[n]=e.words[n]^r.words[n]
if(this!==e)for(;n<e.length;n++)this.words[n]=e.words[n]
return this.length=e.length,this._strip()},o.prototype.ixor=function(t){return n(0==(this.negative|t.negative)),this.iuxor(t)},o.prototype.xor=function(t){return this.length>t.length?this.clone().ixor(t):t.clone().ixor(this)},o.prototype.uxor=function(t){return this.length>t.length?this.clone().iuxor(t):t.clone().iuxor(this)},o.prototype.inotn=function(t){n("number"==typeof t&&t>=0)
var e=0|Math.ceil(t/26),r=t%26
this._expand(e),r>0&&e--
for(var i=0;i<e;i++)this.words[i]=67108863&~this.words[i]
return r>0&&(this.words[i]=~this.words[i]&67108863>>26-r),this._strip()},o.prototype.notn=function(t){return this.clone().inotn(t)},o.prototype.setn=function(t,e){n("number"==typeof t&&t>=0)
var r=t/26|0,i=t%26
return this._expand(r+1),this.words[r]=e?this.words[r]|1<<i:this.words[r]&~(1<<i),this._strip()},o.prototype.iadd=function(t){var e,r,n
if(0!==this.negative&&0===t.negative)return this.negative=0,e=this.isub(t),this.negative^=1,this._normSign()
if(0===this.negative&&0!==t.negative)return t.negative=0,e=this.isub(t),t.negative=1,e._normSign()
this.length>t.length?(r=this,n=t):(r=t,n=this)
for(var i=0,o=0;o<n.length;o++)e=(0|r.words[o])+(0|n.words[o])+i,this.words[o]=67108863&e,i=e>>>26
for(;0!==i&&o<r.length;o++)e=(0|r.words[o])+i,this.words[o]=67108863&e,i=e>>>26
if(this.length=r.length,0!==i)this.words[this.length]=i,this.length++
else if(r!==this)for(;o<r.length;o++)this.words[o]=r.words[o]
return this},o.prototype.add=function(t){var e
return 0!==t.negative&&0===this.negative?(t.negative=0,e=this.sub(t),t.negative^=1,e):0===t.negative&&0!==this.negative?(this.negative=0,e=t.sub(this),this.negative=1,e):this.length>t.length?this.clone().iadd(t):t.clone().iadd(this)},o.prototype.isub=function(t){if(0!==t.negative){t.negative=0
var e=this.iadd(t)
return t.negative=1,e._normSign()}if(0!==this.negative)return this.negative=0,this.iadd(t),this.negative=1,this._normSign()
var r,n,i=this.cmp(t)
if(0===i)return this.negative=0,this.length=1,this.words[0]=0,this
i>0?(r=this,n=t):(r=t,n=this)
for(var o=0,a=0;a<n.length;a++)o=(e=(0|r.words[a])-(0|n.words[a])+o)>>26,this.words[a]=67108863&e
for(;0!==o&&a<r.length;a++)o=(e=(0|r.words[a])+o)>>26,this.words[a]=67108863&e
if(0===o&&a<r.length&&r!==this)for(;a<r.length;a++)this.words[a]=r.words[a]
return this.length=Math.max(this.length,a),r!==this&&(this.negative=1),this._strip()},o.prototype.sub=function(t){return this.clone().isub(t)}
var m=function(t,e,r){var n,i,o,a=t.words,s=e.words,u=r.words,c=0,f=0|a[0],h=8191&f,l=f>>>13,d=0|a[1],p=8191&d,b=d>>>13,m=0|a[2],v=8191&m,g=m>>>13,y=0|a[3],w=8191&y,_=y>>>13,M=0|a[4],S=8191&M,E=M>>>13,k=0|a[5],A=8191&k,T=k>>>13,R=0|a[6],x=8191&R,C=R>>>13,I=0|a[7],B=8191&I,O=I>>>13,P=0|a[8],L=8191&P,N=P>>>13,D=0|a[9],j=8191&D,U=D>>>13,H=0|s[0],q=8191&H,F=H>>>13,z=0|s[1],W=8191&z,K=z>>>13,G=0|s[2],Y=8191&G,V=G>>>13,X=0|s[3],Z=8191&X,J=X>>>13,$=0|s[4],Q=8191&$,tt=$>>>13,et=0|s[5],rt=8191&et,nt=et>>>13,it=0|s[6],ot=8191&it,at=it>>>13,st=0|s[7],ut=8191&st,ct=st>>>13,ft=0|s[8],ht=8191&ft,lt=ft>>>13,dt=0|s[9],pt=8191&dt,bt=dt>>>13
r.negative=t.negative^e.negative,r.length=19
var mt=(c+(n=Math.imul(h,q))|0)+((8191&(i=(i=Math.imul(h,F))+Math.imul(l,q)|0))<<13)|0
c=((o=Math.imul(l,F))+(i>>>13)|0)+(mt>>>26)|0,mt&=67108863,n=Math.imul(p,q),i=(i=Math.imul(p,F))+Math.imul(b,q)|0,o=Math.imul(b,F)
var vt=(c+(n=n+Math.imul(h,W)|0)|0)+((8191&(i=(i=i+Math.imul(h,K)|0)+Math.imul(l,W)|0))<<13)|0
c=((o=o+Math.imul(l,K)|0)+(i>>>13)|0)+(vt>>>26)|0,vt&=67108863,n=Math.imul(v,q),i=(i=Math.imul(v,F))+Math.imul(g,q)|0,o=Math.imul(g,F),n=n+Math.imul(p,W)|0,i=(i=i+Math.imul(p,K)|0)+Math.imul(b,W)|0,o=o+Math.imul(b,K)|0
var gt=(c+(n=n+Math.imul(h,Y)|0)|0)+((8191&(i=(i=i+Math.imul(h,V)|0)+Math.imul(l,Y)|0))<<13)|0
c=((o=o+Math.imul(l,V)|0)+(i>>>13)|0)+(gt>>>26)|0,gt&=67108863,n=Math.imul(w,q),i=(i=Math.imul(w,F))+Math.imul(_,q)|0,o=Math.imul(_,F),n=n+Math.imul(v,W)|0,i=(i=i+Math.imul(v,K)|0)+Math.imul(g,W)|0,o=o+Math.imul(g,K)|0,n=n+Math.imul(p,Y)|0,i=(i=i+Math.imul(p,V)|0)+Math.imul(b,Y)|0,o=o+Math.imul(b,V)|0
var yt=(c+(n=n+Math.imul(h,Z)|0)|0)+((8191&(i=(i=i+Math.imul(h,J)|0)+Math.imul(l,Z)|0))<<13)|0
c=((o=o+Math.imul(l,J)|0)+(i>>>13)|0)+(yt>>>26)|0,yt&=67108863,n=Math.imul(S,q),i=(i=Math.imul(S,F))+Math.imul(E,q)|0,o=Math.imul(E,F),n=n+Math.imul(w,W)|0,i=(i=i+Math.imul(w,K)|0)+Math.imul(_,W)|0,o=o+Math.imul(_,K)|0,n=n+Math.imul(v,Y)|0,i=(i=i+Math.imul(v,V)|0)+Math.imul(g,Y)|0,o=o+Math.imul(g,V)|0,n=n+Math.imul(p,Z)|0,i=(i=i+Math.imul(p,J)|0)+Math.imul(b,Z)|0,o=o+Math.imul(b,J)|0
var wt=(c+(n=n+Math.imul(h,Q)|0)|0)+((8191&(i=(i=i+Math.imul(h,tt)|0)+Math.imul(l,Q)|0))<<13)|0
c=((o=o+Math.imul(l,tt)|0)+(i>>>13)|0)+(wt>>>26)|0,wt&=67108863,n=Math.imul(A,q),i=(i=Math.imul(A,F))+Math.imul(T,q)|0,o=Math.imul(T,F),n=n+Math.imul(S,W)|0,i=(i=i+Math.imul(S,K)|0)+Math.imul(E,W)|0,o=o+Math.imul(E,K)|0,n=n+Math.imul(w,Y)|0,i=(i=i+Math.imul(w,V)|0)+Math.imul(_,Y)|0,o=o+Math.imul(_,V)|0,n=n+Math.imul(v,Z)|0,i=(i=i+Math.imul(v,J)|0)+Math.imul(g,Z)|0,o=o+Math.imul(g,J)|0,n=n+Math.imul(p,Q)|0,i=(i=i+Math.imul(p,tt)|0)+Math.imul(b,Q)|0,o=o+Math.imul(b,tt)|0
var _t=(c+(n=n+Math.imul(h,rt)|0)|0)+((8191&(i=(i=i+Math.imul(h,nt)|0)+Math.imul(l,rt)|0))<<13)|0
c=((o=o+Math.imul(l,nt)|0)+(i>>>13)|0)+(_t>>>26)|0,_t&=67108863,n=Math.imul(x,q),i=(i=Math.imul(x,F))+Math.imul(C,q)|0,o=Math.imul(C,F),n=n+Math.imul(A,W)|0,i=(i=i+Math.imul(A,K)|0)+Math.imul(T,W)|0,o=o+Math.imul(T,K)|0,n=n+Math.imul(S,Y)|0,i=(i=i+Math.imul(S,V)|0)+Math.imul(E,Y)|0,o=o+Math.imul(E,V)|0,n=n+Math.imul(w,Z)|0,i=(i=i+Math.imul(w,J)|0)+Math.imul(_,Z)|0,o=o+Math.imul(_,J)|0,n=n+Math.imul(v,Q)|0,i=(i=i+Math.imul(v,tt)|0)+Math.imul(g,Q)|0,o=o+Math.imul(g,tt)|0,n=n+Math.imul(p,rt)|0,i=(i=i+Math.imul(p,nt)|0)+Math.imul(b,rt)|0,o=o+Math.imul(b,nt)|0
var Mt=(c+(n=n+Math.imul(h,ot)|0)|0)+((8191&(i=(i=i+Math.imul(h,at)|0)+Math.imul(l,ot)|0))<<13)|0
c=((o=o+Math.imul(l,at)|0)+(i>>>13)|0)+(Mt>>>26)|0,Mt&=67108863,n=Math.imul(B,q),i=(i=Math.imul(B,F))+Math.imul(O,q)|0,o=Math.imul(O,F),n=n+Math.imul(x,W)|0,i=(i=i+Math.imul(x,K)|0)+Math.imul(C,W)|0,o=o+Math.imul(C,K)|0,n=n+Math.imul(A,Y)|0,i=(i=i+Math.imul(A,V)|0)+Math.imul(T,Y)|0,o=o+Math.imul(T,V)|0,n=n+Math.imul(S,Z)|0,i=(i=i+Math.imul(S,J)|0)+Math.imul(E,Z)|0,o=o+Math.imul(E,J)|0,n=n+Math.imul(w,Q)|0,i=(i=i+Math.imul(w,tt)|0)+Math.imul(_,Q)|0,o=o+Math.imul(_,tt)|0,n=n+Math.imul(v,rt)|0,i=(i=i+Math.imul(v,nt)|0)+Math.imul(g,rt)|0,o=o+Math.imul(g,nt)|0,n=n+Math.imul(p,ot)|0,i=(i=i+Math.imul(p,at)|0)+Math.imul(b,ot)|0,o=o+Math.imul(b,at)|0
var St=(c+(n=n+Math.imul(h,ut)|0)|0)+((8191&(i=(i=i+Math.imul(h,ct)|0)+Math.imul(l,ut)|0))<<13)|0
c=((o=o+Math.imul(l,ct)|0)+(i>>>13)|0)+(St>>>26)|0,St&=67108863,n=Math.imul(L,q),i=(i=Math.imul(L,F))+Math.imul(N,q)|0,o=Math.imul(N,F),n=n+Math.imul(B,W)|0,i=(i=i+Math.imul(B,K)|0)+Math.imul(O,W)|0,o=o+Math.imul(O,K)|0,n=n+Math.imul(x,Y)|0,i=(i=i+Math.imul(x,V)|0)+Math.imul(C,Y)|0,o=o+Math.imul(C,V)|0,n=n+Math.imul(A,Z)|0,i=(i=i+Math.imul(A,J)|0)+Math.imul(T,Z)|0,o=o+Math.imul(T,J)|0,n=n+Math.imul(S,Q)|0,i=(i=i+Math.imul(S,tt)|0)+Math.imul(E,Q)|0,o=o+Math.imul(E,tt)|0,n=n+Math.imul(w,rt)|0,i=(i=i+Math.imul(w,nt)|0)+Math.imul(_,rt)|0,o=o+Math.imul(_,nt)|0,n=n+Math.imul(v,ot)|0,i=(i=i+Math.imul(v,at)|0)+Math.imul(g,ot)|0,o=o+Math.imul(g,at)|0,n=n+Math.imul(p,ut)|0,i=(i=i+Math.imul(p,ct)|0)+Math.imul(b,ut)|0,o=o+Math.imul(b,ct)|0
var Et=(c+(n=n+Math.imul(h,ht)|0)|0)+((8191&(i=(i=i+Math.imul(h,lt)|0)+Math.imul(l,ht)|0))<<13)|0
c=((o=o+Math.imul(l,lt)|0)+(i>>>13)|0)+(Et>>>26)|0,Et&=67108863,n=Math.imul(j,q),i=(i=Math.imul(j,F))+Math.imul(U,q)|0,o=Math.imul(U,F),n=n+Math.imul(L,W)|0,i=(i=i+Math.imul(L,K)|0)+Math.imul(N,W)|0,o=o+Math.imul(N,K)|0,n=n+Math.imul(B,Y)|0,i=(i=i+Math.imul(B,V)|0)+Math.imul(O,Y)|0,o=o+Math.imul(O,V)|0,n=n+Math.imul(x,Z)|0,i=(i=i+Math.imul(x,J)|0)+Math.imul(C,Z)|0,o=o+Math.imul(C,J)|0,n=n+Math.imul(A,Q)|0,i=(i=i+Math.imul(A,tt)|0)+Math.imul(T,Q)|0,o=o+Math.imul(T,tt)|0,n=n+Math.imul(S,rt)|0,i=(i=i+Math.imul(S,nt)|0)+Math.imul(E,rt)|0,o=o+Math.imul(E,nt)|0,n=n+Math.imul(w,ot)|0,i=(i=i+Math.imul(w,at)|0)+Math.imul(_,ot)|0,o=o+Math.imul(_,at)|0,n=n+Math.imul(v,ut)|0,i=(i=i+Math.imul(v,ct)|0)+Math.imul(g,ut)|0,o=o+Math.imul(g,ct)|0,n=n+Math.imul(p,ht)|0,i=(i=i+Math.imul(p,lt)|0)+Math.imul(b,ht)|0,o=o+Math.imul(b,lt)|0
var kt=(c+(n=n+Math.imul(h,pt)|0)|0)+((8191&(i=(i=i+Math.imul(h,bt)|0)+Math.imul(l,pt)|0))<<13)|0
c=((o=o+Math.imul(l,bt)|0)+(i>>>13)|0)+(kt>>>26)|0,kt&=67108863,n=Math.imul(j,W),i=(i=Math.imul(j,K))+Math.imul(U,W)|0,o=Math.imul(U,K),n=n+Math.imul(L,Y)|0,i=(i=i+Math.imul(L,V)|0)+Math.imul(N,Y)|0,o=o+Math.imul(N,V)|0,n=n+Math.imul(B,Z)|0,i=(i=i+Math.imul(B,J)|0)+Math.imul(O,Z)|0,o=o+Math.imul(O,J)|0,n=n+Math.imul(x,Q)|0,i=(i=i+Math.imul(x,tt)|0)+Math.imul(C,Q)|0,o=o+Math.imul(C,tt)|0,n=n+Math.imul(A,rt)|0,i=(i=i+Math.imul(A,nt)|0)+Math.imul(T,rt)|0,o=o+Math.imul(T,nt)|0,n=n+Math.imul(S,ot)|0,i=(i=i+Math.imul(S,at)|0)+Math.imul(E,ot)|0,o=o+Math.imul(E,at)|0,n=n+Math.imul(w,ut)|0,i=(i=i+Math.imul(w,ct)|0)+Math.imul(_,ut)|0,o=o+Math.imul(_,ct)|0,n=n+Math.imul(v,ht)|0,i=(i=i+Math.imul(v,lt)|0)+Math.imul(g,ht)|0,o=o+Math.imul(g,lt)|0
var At=(c+(n=n+Math.imul(p,pt)|0)|0)+((8191&(i=(i=i+Math.imul(p,bt)|0)+Math.imul(b,pt)|0))<<13)|0
c=((o=o+Math.imul(b,bt)|0)+(i>>>13)|0)+(At>>>26)|0,At&=67108863,n=Math.imul(j,Y),i=(i=Math.imul(j,V))+Math.imul(U,Y)|0,o=Math.imul(U,V),n=n+Math.imul(L,Z)|0,i=(i=i+Math.imul(L,J)|0)+Math.imul(N,Z)|0,o=o+Math.imul(N,J)|0,n=n+Math.imul(B,Q)|0,i=(i=i+Math.imul(B,tt)|0)+Math.imul(O,Q)|0,o=o+Math.imul(O,tt)|0,n=n+Math.imul(x,rt)|0,i=(i=i+Math.imul(x,nt)|0)+Math.imul(C,rt)|0,o=o+Math.imul(C,nt)|0,n=n+Math.imul(A,ot)|0,i=(i=i+Math.imul(A,at)|0)+Math.imul(T,ot)|0,o=o+Math.imul(T,at)|0,n=n+Math.imul(S,ut)|0,i=(i=i+Math.imul(S,ct)|0)+Math.imul(E,ut)|0,o=o+Math.imul(E,ct)|0,n=n+Math.imul(w,ht)|0,i=(i=i+Math.imul(w,lt)|0)+Math.imul(_,ht)|0,o=o+Math.imul(_,lt)|0
var Tt=(c+(n=n+Math.imul(v,pt)|0)|0)+((8191&(i=(i=i+Math.imul(v,bt)|0)+Math.imul(g,pt)|0))<<13)|0
c=((o=o+Math.imul(g,bt)|0)+(i>>>13)|0)+(Tt>>>26)|0,Tt&=67108863,n=Math.imul(j,Z),i=(i=Math.imul(j,J))+Math.imul(U,Z)|0,o=Math.imul(U,J),n=n+Math.imul(L,Q)|0,i=(i=i+Math.imul(L,tt)|0)+Math.imul(N,Q)|0,o=o+Math.imul(N,tt)|0,n=n+Math.imul(B,rt)|0,i=(i=i+Math.imul(B,nt)|0)+Math.imul(O,rt)|0,o=o+Math.imul(O,nt)|0,n=n+Math.imul(x,ot)|0,i=(i=i+Math.imul(x,at)|0)+Math.imul(C,ot)|0,o=o+Math.imul(C,at)|0,n=n+Math.imul(A,ut)|0,i=(i=i+Math.imul(A,ct)|0)+Math.imul(T,ut)|0,o=o+Math.imul(T,ct)|0,n=n+Math.imul(S,ht)|0,i=(i=i+Math.imul(S,lt)|0)+Math.imul(E,ht)|0,o=o+Math.imul(E,lt)|0
var Rt=(c+(n=n+Math.imul(w,pt)|0)|0)+((8191&(i=(i=i+Math.imul(w,bt)|0)+Math.imul(_,pt)|0))<<13)|0
c=((o=o+Math.imul(_,bt)|0)+(i>>>13)|0)+(Rt>>>26)|0,Rt&=67108863,n=Math.imul(j,Q),i=(i=Math.imul(j,tt))+Math.imul(U,Q)|0,o=Math.imul(U,tt),n=n+Math.imul(L,rt)|0,i=(i=i+Math.imul(L,nt)|0)+Math.imul(N,rt)|0,o=o+Math.imul(N,nt)|0,n=n+Math.imul(B,ot)|0,i=(i=i+Math.imul(B,at)|0)+Math.imul(O,ot)|0,o=o+Math.imul(O,at)|0,n=n+Math.imul(x,ut)|0,i=(i=i+Math.imul(x,ct)|0)+Math.imul(C,ut)|0,o=o+Math.imul(C,ct)|0,n=n+Math.imul(A,ht)|0,i=(i=i+Math.imul(A,lt)|0)+Math.imul(T,ht)|0,o=o+Math.imul(T,lt)|0
var xt=(c+(n=n+Math.imul(S,pt)|0)|0)+((8191&(i=(i=i+Math.imul(S,bt)|0)+Math.imul(E,pt)|0))<<13)|0
c=((o=o+Math.imul(E,bt)|0)+(i>>>13)|0)+(xt>>>26)|0,xt&=67108863,n=Math.imul(j,rt),i=(i=Math.imul(j,nt))+Math.imul(U,rt)|0,o=Math.imul(U,nt),n=n+Math.imul(L,ot)|0,i=(i=i+Math.imul(L,at)|0)+Math.imul(N,ot)|0,o=o+Math.imul(N,at)|0,n=n+Math.imul(B,ut)|0,i=(i=i+Math.imul(B,ct)|0)+Math.imul(O,ut)|0,o=o+Math.imul(O,ct)|0,n=n+Math.imul(x,ht)|0,i=(i=i+Math.imul(x,lt)|0)+Math.imul(C,ht)|0,o=o+Math.imul(C,lt)|0
var Ct=(c+(n=n+Math.imul(A,pt)|0)|0)+((8191&(i=(i=i+Math.imul(A,bt)|0)+Math.imul(T,pt)|0))<<13)|0
c=((o=o+Math.imul(T,bt)|0)+(i>>>13)|0)+(Ct>>>26)|0,Ct&=67108863,n=Math.imul(j,ot),i=(i=Math.imul(j,at))+Math.imul(U,ot)|0,o=Math.imul(U,at),n=n+Math.imul(L,ut)|0,i=(i=i+Math.imul(L,ct)|0)+Math.imul(N,ut)|0,o=o+Math.imul(N,ct)|0,n=n+Math.imul(B,ht)|0,i=(i=i+Math.imul(B,lt)|0)+Math.imul(O,ht)|0,o=o+Math.imul(O,lt)|0
var It=(c+(n=n+Math.imul(x,pt)|0)|0)+((8191&(i=(i=i+Math.imul(x,bt)|0)+Math.imul(C,pt)|0))<<13)|0
c=((o=o+Math.imul(C,bt)|0)+(i>>>13)|0)+(It>>>26)|0,It&=67108863,n=Math.imul(j,ut),i=(i=Math.imul(j,ct))+Math.imul(U,ut)|0,o=Math.imul(U,ct),n=n+Math.imul(L,ht)|0,i=(i=i+Math.imul(L,lt)|0)+Math.imul(N,ht)|0,o=o+Math.imul(N,lt)|0
var Bt=(c+(n=n+Math.imul(B,pt)|0)|0)+((8191&(i=(i=i+Math.imul(B,bt)|0)+Math.imul(O,pt)|0))<<13)|0
c=((o=o+Math.imul(O,bt)|0)+(i>>>13)|0)+(Bt>>>26)|0,Bt&=67108863,n=Math.imul(j,ht),i=(i=Math.imul(j,lt))+Math.imul(U,ht)|0,o=Math.imul(U,lt)
var Ot=(c+(n=n+Math.imul(L,pt)|0)|0)+((8191&(i=(i=i+Math.imul(L,bt)|0)+Math.imul(N,pt)|0))<<13)|0
c=((o=o+Math.imul(N,bt)|0)+(i>>>13)|0)+(Ot>>>26)|0,Ot&=67108863
var Pt=(c+(n=Math.imul(j,pt))|0)+((8191&(i=(i=Math.imul(j,bt))+Math.imul(U,pt)|0))<<13)|0
return c=((o=Math.imul(U,bt))+(i>>>13)|0)+(Pt>>>26)|0,Pt&=67108863,u[0]=mt,u[1]=vt,u[2]=gt,u[3]=yt,u[4]=wt,u[5]=_t,u[6]=Mt,u[7]=St,u[8]=Et,u[9]=kt,u[10]=At,u[11]=Tt,u[12]=Rt,u[13]=xt,u[14]=Ct,u[15]=It,u[16]=Bt,u[17]=Ot,u[18]=Pt,0!==c&&(u[19]=c,r.length++),r}
function v(t,e,r){r.negative=e.negative^t.negative,r.length=t.length+e.length
for(var n=0,i=0,o=0;o<r.length-1;o++){var a=i
i=0
for(var s=67108863&n,u=Math.min(o,e.length-1),c=Math.max(0,o-t.length+1);c<=u;c++){var f=o-c,h=(0|t.words[f])*(0|e.words[c]),l=67108863&h
s=67108863&(l=l+s|0),i+=(a=(a=a+(h/67108864|0)|0)+(l>>>26)|0)>>>26,a&=67108863}r.words[o]=s,n=a,a=i}return 0!==n?r.words[o]=n:r.length--,r._strip()}function g(t,e,r){return v(t,e,r)}function y(t,e){this.x=t,this.y=e}Math.imul||(m=b),o.prototype.mulTo=function(t,e){var r=this.length+t.length
return 10===this.length&&10===t.length?m(this,t,e):r<63?b(this,t,e):r<1024?v(this,t,e):g(this,t,e)},y.prototype.makeRBT=function(t){for(var e=new Array(t),r=o.prototype._countBits(t)-1,n=0;n<t;n++)e[n]=this.revBin(n,r,t)
return e},y.prototype.revBin=function(t,e,r){if(0===t||t===r-1)return t
for(var n=0,i=0;i<e;i++)n|=(1&t)<<e-i-1,t>>=1
return n},y.prototype.permute=function(t,e,r,n,i,o){for(var a=0;a<o;a++)n[a]=e[t[a]],i[a]=r[t[a]]},y.prototype.transform=function(t,e,r,n,i,o){this.permute(o,t,e,r,n,i)
for(var a=1;a<i;a<<=1)for(var s=a<<1,u=Math.cos(2*Math.PI/s),c=Math.sin(2*Math.PI/s),f=0;f<i;f+=s)for(var h=u,l=c,d=0;d<a;d++){var p=r[f+d],b=n[f+d],m=r[f+d+a],v=n[f+d+a],g=h*m-l*v
v=h*v+l*m,m=g,r[f+d]=p+m,n[f+d]=b+v,r[f+d+a]=p-m,n[f+d+a]=b-v,d!==s&&(g=u*h-c*l,l=u*l+c*h,h=g)}},y.prototype.guessLen13b=function(t,e){var r=1|Math.max(e,t),n=1&r,i=0
for(r=r/2|0;r;r>>>=1)i++
return 1<<i+1+n},y.prototype.conjugate=function(t,e,r){if(!(r<=1))for(var n=0;n<r/2;n++){var i=t[n]
t[n]=t[r-n-1],t[r-n-1]=i,i=e[n],e[n]=-e[r-n-1],e[r-n-1]=-i}},y.prototype.normalize13b=function(t,e){for(var r=0,n=0;n<e/2;n++){var i=8192*Math.round(t[2*n+1]/e)+Math.round(t[2*n]/e)+r
t[n]=67108863&i,r=i<67108864?0:i/67108864|0}return t},y.prototype.convert13b=function(t,e,r,i){for(var o=0,a=0;a<e;a++)o+=0|t[a],r[2*a]=8191&o,o>>>=13,r[2*a+1]=8191&o,o>>>=13
for(a=2*e;a<i;++a)r[a]=0
n(0===o),n(0==(-8192&o))},y.prototype.stub=function(t){for(var e=new Array(t),r=0;r<t;r++)e[r]=0
return e},y.prototype.mulp=function(t,e,r){var n=2*this.guessLen13b(t.length,e.length),i=this.makeRBT(n),o=this.stub(n),a=new Array(n),s=new Array(n),u=new Array(n),c=new Array(n),f=new Array(n),h=new Array(n),l=r.words
l.length=n,this.convert13b(t.words,t.length,a,n),this.convert13b(e.words,e.length,c,n),this.transform(a,o,s,u,n,i),this.transform(c,o,f,h,n,i)
for(var d=0;d<n;d++){var p=s[d]*f[d]-u[d]*h[d]
u[d]=s[d]*h[d]+u[d]*f[d],s[d]=p}return this.conjugate(s,u,n),this.transform(s,u,l,o,n,i),this.conjugate(l,o,n),this.normalize13b(l,n),r.negative=t.negative^e.negative,r.length=t.length+e.length,r._strip()},o.prototype.mul=function(t){var e=new o(null)
return e.words=new Array(this.length+t.length),this.mulTo(t,e)},o.prototype.mulf=function(t){var e=new o(null)
return e.words=new Array(this.length+t.length),g(this,t,e)},o.prototype.imul=function(t){return this.clone().mulTo(t,this)},o.prototype.imuln=function(t){var e=t<0
e&&(t=-t),n("number"==typeof t),n(t<67108864)
for(var r=0,i=0;i<this.length;i++){var o=(0|this.words[i])*t,a=(67108863&o)+(67108863&r)
r>>=26,r+=o/67108864|0,r+=a>>>26,this.words[i]=67108863&a}return 0!==r&&(this.words[i]=r,this.length++),e?this.ineg():this},o.prototype.muln=function(t){return this.clone().imuln(t)},o.prototype.sqr=function(){return this.mul(this)},o.prototype.isqr=function(){return this.imul(this.clone())},o.prototype.pow=function(t){var e=function(t){for(var e=new Array(t.bitLength()),r=0;r<e.length;r++){var n=r/26|0,i=r%26
e[r]=t.words[n]>>>i&1}return e}(t)
if(0===e.length)return new o(1)
for(var r=this,n=0;n<e.length&&0===e[n];n++,r=r.sqr());if(++n<e.length)for(var i=r.sqr();n<e.length;n++,i=i.sqr())0!==e[n]&&(r=r.mul(i))
return r},o.prototype.iushln=function(t){n("number"==typeof t&&t>=0)
var e,r=t%26,i=(t-r)/26,o=67108863>>>26-r<<26-r
if(0!==r){var a=0
for(e=0;e<this.length;e++){var s=this.words[e]&o,u=(0|this.words[e])-s<<r
this.words[e]=u|a,a=s>>>26-r}a&&(this.words[e]=a,this.length++)}if(0!==i){for(e=this.length-1;e>=0;e--)this.words[e+i]=this.words[e]
for(e=0;e<i;e++)this.words[e]=0
this.length+=i}return this._strip()},o.prototype.ishln=function(t){return n(0===this.negative),this.iushln(t)},o.prototype.iushrn=function(t,e,r){var i
n("number"==typeof t&&t>=0),i=e?(e-e%26)/26:0
var o=t%26,a=Math.min((t-o)/26,this.length),s=67108863^67108863>>>o<<o,u=r
if(i-=a,i=Math.max(0,i),u){for(var c=0;c<a;c++)u.words[c]=this.words[c]
u.length=a}if(0===a);else if(this.length>a)for(this.length-=a,c=0;c<this.length;c++)this.words[c]=this.words[c+a]
else this.words[0]=0,this.length=1
var f=0
for(c=this.length-1;c>=0&&(0!==f||c>=i);c--){var h=0|this.words[c]
this.words[c]=f<<26-o|h>>>o,f=h&s}return u&&0!==f&&(u.words[u.length++]=f),0===this.length&&(this.words[0]=0,this.length=1),this._strip()},o.prototype.ishrn=function(t,e,r){return n(0===this.negative),this.iushrn(t,e,r)},o.prototype.shln=function(t){return this.clone().ishln(t)},o.prototype.ushln=function(t){return this.clone().iushln(t)},o.prototype.shrn=function(t){return this.clone().ishrn(t)},o.prototype.ushrn=function(t){return this.clone().iushrn(t)},o.prototype.testn=function(t){n("number"==typeof t&&t>=0)
var e=t%26,r=(t-e)/26,i=1<<e
return!(this.length<=r||!(this.words[r]&i))},o.prototype.imaskn=function(t){n("number"==typeof t&&t>=0)
var e=t%26,r=(t-e)/26
if(n(0===this.negative,"imaskn works only with positive numbers"),this.length<=r)return this
if(0!==e&&r++,this.length=Math.min(r,this.length),0!==e){var i=67108863^67108863>>>e<<e
this.words[this.length-1]&=i}return this._strip()},o.prototype.maskn=function(t){return this.clone().imaskn(t)},o.prototype.iaddn=function(t){return n("number"==typeof t),n(t<67108864),t<0?this.isubn(-t):0!==this.negative?1===this.length&&(0|this.words[0])<=t?(this.words[0]=t-(0|this.words[0]),this.negative=0,this):(this.negative=0,this.isubn(t),this.negative=1,this):this._iaddn(t)},o.prototype._iaddn=function(t){this.words[0]+=t
for(var e=0;e<this.length&&this.words[e]>=67108864;e++)this.words[e]-=67108864,e===this.length-1?this.words[e+1]=1:this.words[e+1]++
return this.length=Math.max(this.length,e+1),this},o.prototype.isubn=function(t){if(n("number"==typeof t),n(t<67108864),t<0)return this.iaddn(-t)
if(0!==this.negative)return this.negative=0,this.iaddn(t),this.negative=1,this
if(this.words[0]-=t,1===this.length&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1
else for(var e=0;e<this.length&&this.words[e]<0;e++)this.words[e]+=67108864,this.words[e+1]-=1
return this._strip()},o.prototype.addn=function(t){return this.clone().iaddn(t)},o.prototype.subn=function(t){return this.clone().isubn(t)},o.prototype.iabs=function(){return this.negative=0,this},o.prototype.abs=function(){return this.clone().iabs()},o.prototype._ishlnsubmul=function(t,e,r){var i,o,a=t.length+r
this._expand(a)
var s=0
for(i=0;i<t.length;i++){o=(0|this.words[i+r])+s
var u=(0|t.words[i])*e
s=((o-=67108863&u)>>26)-(u/67108864|0),this.words[i+r]=67108863&o}for(;i<this.length-r;i++)s=(o=(0|this.words[i+r])+s)>>26,this.words[i+r]=67108863&o
if(0===s)return this._strip()
for(n(-1===s),s=0,i=0;i<this.length;i++)s=(o=-(0|this.words[i])+s)>>26,this.words[i]=67108863&o
return this.negative=1,this._strip()},o.prototype._wordDiv=function(t,e){var r=(this.length,t.length),n=this.clone(),i=t,a=0|i.words[i.length-1]
0!=(r=26-this._countBits(a))&&(i=i.ushln(r),n.iushln(r),a=0|i.words[i.length-1])
var s,u=n.length-i.length
if("mod"!==e){(s=new o(null)).length=u+1,s.words=new Array(s.length)
for(var c=0;c<s.length;c++)s.words[c]=0}var f=n.clone()._ishlnsubmul(i,1,u)
0===f.negative&&(n=f,s&&(s.words[u]=1))
for(var h=u-1;h>=0;h--){var l=67108864*(0|n.words[i.length+h])+(0|n.words[i.length+h-1])
for(l=Math.min(l/a|0,67108863),n._ishlnsubmul(i,l,h);0!==n.negative;)l--,n.negative=0,n._ishlnsubmul(i,1,h),n.isZero()||(n.negative^=1)
s&&(s.words[h]=l)}return s&&s._strip(),n._strip(),"div"!==e&&0!==r&&n.iushrn(r),{div:s||null,mod:n}},o.prototype.divmod=function(t,e,r){return n(!t.isZero()),this.isZero()?{div:new o(0),mod:new o(0)}:0!==this.negative&&0===t.negative?(s=this.neg().divmod(t,e),"mod"!==e&&(i=s.div.neg()),"div"!==e&&(a=s.mod.neg(),r&&0!==a.negative&&a.iadd(t)),{div:i,mod:a}):0===this.negative&&0!==t.negative?(s=this.divmod(t.neg(),e),"mod"!==e&&(i=s.div.neg()),{div:i,mod:s.mod}):0!=(this.negative&t.negative)?(s=this.neg().divmod(t.neg(),e),"div"!==e&&(a=s.mod.neg(),r&&0!==a.negative&&a.isub(t)),{div:s.div,mod:a}):t.length>this.length||this.cmp(t)<0?{div:new o(0),mod:this}:1===t.length?"div"===e?{div:this.divn(t.words[0]),mod:null}:"mod"===e?{div:null,mod:new o(this.modrn(t.words[0]))}:{div:this.divn(t.words[0]),mod:new o(this.modrn(t.words[0]))}:this._wordDiv(t,e)
var i,a,s},o.prototype.div=function(t){return this.divmod(t,"div",!1).div},o.prototype.mod=function(t){return this.divmod(t,"mod",!1).mod},o.prototype.umod=function(t){return this.divmod(t,"mod",!0).mod},o.prototype.divRound=function(t){var e=this.divmod(t)
if(e.mod.isZero())return e.div
var r=0!==e.div.negative?e.mod.isub(t):e.mod,n=t.ushrn(1),i=t.andln(1),o=r.cmp(n)
return o<0||1===i&&0===o?e.div:0!==e.div.negative?e.div.isubn(1):e.div.iaddn(1)},o.prototype.modrn=function(t){var e=t<0
e&&(t=-t),n(t<=67108863)
for(var r=(1<<26)%t,i=0,o=this.length-1;o>=0;o--)i=(r*i+(0|this.words[o]))%t
return e?-i:i},o.prototype.modn=function(t){return this.modrn(t)},o.prototype.idivn=function(t){var e=t<0
e&&(t=-t),n(t<=67108863)
for(var r=0,i=this.length-1;i>=0;i--){var o=(0|this.words[i])+67108864*r
this.words[i]=o/t|0,r=o%t}return this._strip(),e?this.ineg():this},o.prototype.divn=function(t){return this.clone().idivn(t)},o.prototype.egcd=function(t){n(0===t.negative),n(!t.isZero())
var e=this,r=t.clone()
e=0!==e.negative?e.umod(t):e.clone()
for(var i=new o(1),a=new o(0),s=new o(0),u=new o(1),c=0;e.isEven()&&r.isEven();)e.iushrn(1),r.iushrn(1),++c
for(var f=r.clone(),h=e.clone();!e.isZero();){for(var l=0,d=1;0==(e.words[0]&d)&&l<26;++l,d<<=1);if(l>0)for(e.iushrn(l);l-- >0;)(i.isOdd()||a.isOdd())&&(i.iadd(f),a.isub(h)),i.iushrn(1),a.iushrn(1)
for(var p=0,b=1;0==(r.words[0]&b)&&p<26;++p,b<<=1);if(p>0)for(r.iushrn(p);p-- >0;)(s.isOdd()||u.isOdd())&&(s.iadd(f),u.isub(h)),s.iushrn(1),u.iushrn(1)
e.cmp(r)>=0?(e.isub(r),i.isub(s),a.isub(u)):(r.isub(e),s.isub(i),u.isub(a))}return{a:s,b:u,gcd:r.iushln(c)}},o.prototype._invmp=function(t){n(0===t.negative),n(!t.isZero())
var e=this,r=t.clone()
e=0!==e.negative?e.umod(t):e.clone()
for(var i,a=new o(1),s=new o(0),u=r.clone();e.cmpn(1)>0&&r.cmpn(1)>0;){for(var c=0,f=1;0==(e.words[0]&f)&&c<26;++c,f<<=1);if(c>0)for(e.iushrn(c);c-- >0;)a.isOdd()&&a.iadd(u),a.iushrn(1)
for(var h=0,l=1;0==(r.words[0]&l)&&h<26;++h,l<<=1);if(h>0)for(r.iushrn(h);h-- >0;)s.isOdd()&&s.iadd(u),s.iushrn(1)
e.cmp(r)>=0?(e.isub(r),a.isub(s)):(r.isub(e),s.isub(a))}return(i=0===e.cmpn(1)?a:s).cmpn(0)<0&&i.iadd(t),i},o.prototype.gcd=function(t){if(this.isZero())return t.abs()
if(t.isZero())return this.abs()
var e=this.clone(),r=t.clone()
e.negative=0,r.negative=0
for(var n=0;e.isEven()&&r.isEven();n++)e.iushrn(1),r.iushrn(1)
for(;;){for(;e.isEven();)e.iushrn(1)
for(;r.isEven();)r.iushrn(1)
var i=e.cmp(r)
if(i<0){var o=e
e=r,r=o}else if(0===i||0===r.cmpn(1))break
e.isub(r)}return r.iushln(n)},o.prototype.invm=function(t){return this.egcd(t).a.umod(t)},o.prototype.isEven=function(){return 0==(1&this.words[0])},o.prototype.isOdd=function(){return 1==(1&this.words[0])},o.prototype.andln=function(t){return this.words[0]&t},o.prototype.bincn=function(t){n("number"==typeof t)
var e=t%26,r=(t-e)/26,i=1<<e
if(this.length<=r)return this._expand(r+1),this.words[r]|=i,this
for(var o=i,a=r;0!==o&&a<this.length;a++){var s=0|this.words[a]
o=(s+=o)>>>26,s&=67108863,this.words[a]=s}return 0!==o&&(this.words[a]=o,this.length++),this},o.prototype.isZero=function(){return 1===this.length&&0===this.words[0]},o.prototype.cmpn=function(t){var e,r=t<0
if(0!==this.negative&&!r)return-1
if(0===this.negative&&r)return 1
if(this._strip(),this.length>1)e=1
else{r&&(t=-t),n(t<=67108863,"Number is too big")
var i=0|this.words[0]
e=i===t?0:i<t?-1:1}return 0!==this.negative?0|-e:e},o.prototype.cmp=function(t){if(0!==this.negative&&0===t.negative)return-1
if(0===this.negative&&0!==t.negative)return 1
var e=this.ucmp(t)
return 0!==this.negative?0|-e:e},o.prototype.ucmp=function(t){if(this.length>t.length)return 1
if(this.length<t.length)return-1
for(var e=0,r=this.length-1;r>=0;r--){var n=0|this.words[r],i=0|t.words[r]
if(n!==i){n<i?e=-1:n>i&&(e=1)
break}}return e},o.prototype.gtn=function(t){return 1===this.cmpn(t)},o.prototype.gt=function(t){return 1===this.cmp(t)},o.prototype.gten=function(t){return this.cmpn(t)>=0},o.prototype.gte=function(t){return this.cmp(t)>=0},o.prototype.ltn=function(t){return-1===this.cmpn(t)},o.prototype.lt=function(t){return-1===this.cmp(t)},o.prototype.lten=function(t){return this.cmpn(t)<=0},o.prototype.lte=function(t){return this.cmp(t)<=0},o.prototype.eqn=function(t){return 0===this.cmpn(t)},o.prototype.eq=function(t){return 0===this.cmp(t)},o.red=function(t){return new A(t)},o.prototype.toRed=function(t){return n(!this.red,"Already a number in reduction context"),n(0===this.negative,"red works only with positives"),t.convertTo(this)._forceRed(t)},o.prototype.fromRed=function(){return n(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},o.prototype._forceRed=function(t){return this.red=t,this},o.prototype.forceRed=function(t){return n(!this.red,"Already a number in reduction context"),this._forceRed(t)},o.prototype.redAdd=function(t){return n(this.red,"redAdd works only with red numbers"),this.red.add(this,t)},o.prototype.redIAdd=function(t){return n(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,t)},o.prototype.redSub=function(t){return n(this.red,"redSub works only with red numbers"),this.red.sub(this,t)},o.prototype.redISub=function(t){return n(this.red,"redISub works only with red numbers"),this.red.isub(this,t)},o.prototype.redShl=function(t){return n(this.red,"redShl works only with red numbers"),this.red.shl(this,t)},o.prototype.redMul=function(t){return n(this.red,"redMul works only with red numbers"),this.red._verify2(this,t),this.red.mul(this,t)},o.prototype.redIMul=function(t){return n(this.red,"redMul works only with red numbers"),this.red._verify2(this,t),this.red.imul(this,t)},o.prototype.redSqr=function(){return n(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},o.prototype.redISqr=function(){return n(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},o.prototype.redSqrt=function(){return n(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},o.prototype.redInvm=function(){return n(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},o.prototype.redNeg=function(){return n(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},o.prototype.redPow=function(t){return n(this.red&&!t.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,t)}
var w={k256:null,p224:null,p192:null,p25519:null}
function _(t,e){this.name=t,this.p=new o(e,16),this.n=this.p.bitLength(),this.k=new o(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}function M(){_.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}function S(){_.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}function E(){_.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}function k(){_.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}function A(t){if("string"==typeof t){var e=o._prime(t)
this.m=e.p,this.prime=e}else n(t.gtn(1),"modulus must be greater than 1"),this.m=t,this.prime=null}function T(t){A.call(this,t),this.shift=this.m.bitLength(),this.shift%26!=0&&(this.shift+=26-this.shift%26),this.r=new o(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}_.prototype._tmp=function(){var t=new o(null)
return t.words=new Array(Math.ceil(this.n/13)),t},_.prototype.ireduce=function(t){var e,r=t
do{this.split(r,this.tmp),e=(r=(r=this.imulK(r)).iadd(this.tmp)).bitLength()}while(e>this.n)
var n=e<this.n?-1:r.ucmp(this.p)
return 0===n?(r.words[0]=0,r.length=1):n>0?r.isub(this.p):void 0!==r.strip?r.strip():r._strip(),r},_.prototype.split=function(t,e){t.iushrn(this.n,0,e)},_.prototype.imulK=function(t){return t.imul(this.k)},i(M,_),M.prototype.split=function(t,e){for(var r=4194303,n=Math.min(t.length,9),i=0;i<n;i++)e.words[i]=t.words[i]
if(e.length=n,t.length<=9)return t.words[0]=0,void(t.length=1)
var o=t.words[9]
for(e.words[e.length++]=o&r,i=10;i<t.length;i++){var a=0|t.words[i]
t.words[i-10]=(a&r)<<4|o>>>22,o=a}o>>>=22,t.words[i-10]=o,0===o&&t.length>10?t.length-=10:t.length-=9},M.prototype.imulK=function(t){t.words[t.length]=0,t.words[t.length+1]=0,t.length+=2
for(var e=0,r=0;r<t.length;r++){var n=0|t.words[r]
e+=977*n,t.words[r]=67108863&e,e=64*n+(e/67108864|0)}return 0===t.words[t.length-1]&&(t.length--,0===t.words[t.length-1]&&t.length--),t},i(S,_),i(E,_),i(k,_),k.prototype.imulK=function(t){for(var e=0,r=0;r<t.length;r++){var n=19*(0|t.words[r])+e,i=67108863&n
n>>>=26,t.words[r]=i,e=n}return 0!==e&&(t.words[t.length++]=e),t},o._prime=function(t){if(w[t])return w[t]
var e
if("k256"===t)e=new M
else if("p224"===t)e=new S
else if("p192"===t)e=new E
else{if("p25519"!==t)throw new Error("Unknown prime "+t)
e=new k}return w[t]=e,e},A.prototype._verify1=function(t){n(0===t.negative,"red works only with positives"),n(t.red,"red works only with red numbers")},A.prototype._verify2=function(t,e){n(0==(t.negative|e.negative),"red works only with positives"),n(t.red&&t.red===e.red,"red works only with red numbers")},A.prototype.imod=function(t){return this.prime?this.prime.ireduce(t)._forceRed(this):(f(t,t.umod(this.m)._forceRed(this)),t)},A.prototype.neg=function(t){return t.isZero()?t.clone():this.m.sub(t)._forceRed(this)},A.prototype.add=function(t,e){this._verify2(t,e)
var r=t.add(e)
return r.cmp(this.m)>=0&&r.isub(this.m),r._forceRed(this)},A.prototype.iadd=function(t,e){this._verify2(t,e)
var r=t.iadd(e)
return r.cmp(this.m)>=0&&r.isub(this.m),r},A.prototype.sub=function(t,e){this._verify2(t,e)
var r=t.sub(e)
return r.cmpn(0)<0&&r.iadd(this.m),r._forceRed(this)},A.prototype.isub=function(t,e){this._verify2(t,e)
var r=t.isub(e)
return r.cmpn(0)<0&&r.iadd(this.m),r},A.prototype.shl=function(t,e){return this._verify1(t),this.imod(t.ushln(e))},A.prototype.imul=function(t,e){return this._verify2(t,e),this.imod(t.imul(e))},A.prototype.mul=function(t,e){return this._verify2(t,e),this.imod(t.mul(e))},A.prototype.isqr=function(t){return this.imul(t,t.clone())},A.prototype.sqr=function(t){return this.mul(t,t)},A.prototype.sqrt=function(t){if(t.isZero())return t.clone()
var e=this.m.andln(3)
if(n(e%2==1),3===e){var r=this.m.add(new o(1)).iushrn(2)
return this.pow(t,r)}for(var i=this.m.subn(1),a=0;!i.isZero()&&0===i.andln(1);)a++,i.iushrn(1)
n(!i.isZero())
var s=new o(1).toRed(this),u=s.redNeg(),c=this.m.subn(1).iushrn(1),f=this.m.bitLength()
for(f=new o(2*f*f).toRed(this);0!==this.pow(f,c).cmp(u);)f.redIAdd(u)
for(var h=this.pow(f,i),l=this.pow(t,i.addn(1).iushrn(1)),d=this.pow(t,i),p=a;0!==d.cmp(s);){for(var b=d,m=0;0!==b.cmp(s);m++)b=b.redSqr()
n(m<p)
var v=this.pow(h,new o(1).iushln(p-m-1))
l=l.redMul(v),h=v.redSqr(),d=d.redMul(h),p=m}return l},A.prototype.invm=function(t){var e=t._invmp(this.m)
return 0!==e.negative?(e.negative=0,this.imod(e).redNeg()):this.imod(e)},A.prototype.pow=function(t,e){if(e.isZero())return new o(1).toRed(this)
if(0===e.cmpn(1))return t.clone()
var r=new Array(16)
r[0]=new o(1).toRed(this),r[1]=t
for(var n=2;n<r.length;n++)r[n]=this.mul(r[n-1],t)
var i=r[0],a=0,s=0,u=e.bitLength()%26
for(0===u&&(u=26),n=e.length-1;n>=0;n--){for(var c=e.words[n],f=u-1;f>=0;f--){var h=c>>f&1
i!==r[0]&&(i=this.sqr(i)),0!==h||0!==a?(a<<=1,a|=h,(4==++s||0===n&&0===f)&&(i=this.mul(i,r[a]),s=0,a=0)):s=0}u=26}return i},A.prototype.convertTo=function(t){var e=t.umod(this.m)
return e===t?e.clone():e},A.prototype.convertFrom=function(t){var e=t.clone()
return e.red=null,e},o.mont=function(t){return new T(t)},i(T,A),T.prototype.convertTo=function(t){return this.imod(t.ushln(this.shift))},T.prototype.convertFrom=function(t){var e=this.imod(t.mul(this.rinv))
return e.red=null,e},T.prototype.imul=function(t,e){if(t.isZero()||e.isZero())return t.words[0]=0,t.length=1,t
var r=t.imul(e),n=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=r.isub(n).iushrn(this.shift),o=i
return i.cmp(this.m)>=0?o=i.isub(this.m):i.cmpn(0)<0&&(o=i.iadd(this.m)),o._forceRed(this)},T.prototype.mul=function(t,e){if(t.isZero()||e.isZero())return new o(0)._forceRed(this)
var r=t.mul(e),n=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=r.isub(n).iushrn(this.shift),a=i
return i.cmp(this.m)>=0?a=i.isub(this.m):i.cmpn(0)<0&&(a=i.iadd(this.m)),a._forceRed(this)},T.prototype.invm=function(t){return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)}}(t=r.nmd(t),this)},7416:t=>{"use strict"
var e={}
function r(t,r,n){n||(n=Error)
var i=function(t){var e,n
function i(e,n,i){return t.call(this,function(t,e,n){return"string"==typeof r?r:r(t,e,n)}(e,n,i))||this}return n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,i}(n)
i.prototype.name=n.name,i.prototype.code=t,e[t]=i}function n(t,e){if(Array.isArray(t)){var r=t.length
return t=t.map((function(t){return String(t)})),r>2?"one of ".concat(e," ").concat(t.slice(0,r-1).join(", "),", or ")+t[r-1]:2===r?"one of ".concat(e," ").concat(t[0]," or ").concat(t[1]):"of ".concat(e," ").concat(t[0])}return"of ".concat(e," ").concat(String(t))}r("ERR_INVALID_OPT_VALUE",(function(t,e){return'The value "'+e+'" is invalid for option "'+t+'"'}),TypeError),r("ERR_INVALID_ARG_TYPE",(function(t,e,r){var i,o,a,s
if("string"==typeof e&&("not ","not "===e.substr(0,4))?(i="must not be",e=e.replace(/^not /,"")):i="must be",function(t,e,r){return(void 0===r||r>t.length)&&(r=t.length)," argument"===t.substring(r-9,r)}(t))o="The ".concat(t," ").concat(i," ").concat(n(e,"type"))
else{var u=("number"!=typeof s&&(s=0),s+1>(a=t).length||-1===a.indexOf(".",s)?"argument":"property")
o='The "'.concat(t,'" ').concat(u," ").concat(i," ").concat(n(e,"type"))}return o+". Received type ".concat(typeof r)}),TypeError),r("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF"),r("ERR_METHOD_NOT_IMPLEMENTED",(function(t){return"The "+t+" method is not implemented"})),r("ERR_STREAM_PREMATURE_CLOSE","Premature close"),r("ERR_STREAM_DESTROYED",(function(t){return"Cannot call "+t+" after a stream was destroyed"})),r("ERR_MULTIPLE_CALLBACK","Callback called multiple times"),r("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable"),r("ERR_STREAM_WRITE_AFTER_END","write after end"),r("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError),r("ERR_UNKNOWN_ENCODING",(function(t){return"Unknown encoding: "+t}),TypeError),r("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event"),t.exports.q=e},5800:(t,e,r)=>{"use strict"
var n=Object.keys||function(t){var e=[]
for(var r in t)e.push(r)
return e}
t.exports=c
var i=r(9411),o=r(7266)
r(1736)(c,i)
for(var a=n(o.prototype),s=0;s<a.length;s++){var u=a[s]
c.prototype[u]||(c.prototype[u]=o.prototype[u])}function c(t){if(!(this instanceof c))return new c(t)
i.call(this,t),o.call(this,t),this.allowHalfOpen=!0,t&&(!1===t.readable&&(this.readable=!1),!1===t.writable&&(this.writable=!1),!1===t.allowHalfOpen&&(this.allowHalfOpen=!1,this.once("end",f)))}function f(){this._writableState.ended||process.nextTick(h,this)}function h(t){t.end()}Object.defineProperty(c.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(c.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(c.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(c.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&this._readableState.destroyed&&this._writableState.destroyed},set:function(t){void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed=t,this._writableState.destroyed=t)}})},3146:(t,e,r)=>{"use strict"
t.exports=i
var n=r(497)
function i(t){if(!(this instanceof i))return new i(t)
n.call(this,t)}r(1736)(i,n),i.prototype._transform=function(t,e,r){r(null,t)}},9411:(t,e,r)=>{"use strict"
var n
t.exports=E,E.ReadableState=S,r(8291).EventEmitter
var i,o=function(t,e){return t.listeners(e).length},a=r(1789),s=r(9033).Buffer,u=(void 0!==r.g?r.g:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{}).Uint8Array||function(){},c=r(6353)
i=c&&c.debuglog?c.debuglog("stream"):function(){}
var f,h,l,d=r(3194),p=r(7870),b=r(5611).getHighWaterMark,m=r(7416).q,v=m.ERR_INVALID_ARG_TYPE,g=m.ERR_STREAM_PUSH_AFTER_EOF,y=m.ERR_METHOD_NOT_IMPLEMENTED,w=m.ERR_STREAM_UNSHIFT_AFTER_END_EVENT
r(1736)(E,a)
var _=p.errorOrDestroy,M=["error","close","destroy","pause","resume"]
function S(t,e,i){n=n||r(5800),t=t||{},"boolean"!=typeof i&&(i=e instanceof n),this.objectMode=!!t.objectMode,i&&(this.objectMode=this.objectMode||!!t.readableObjectMode),this.highWaterMark=b(this,t,"readableHighWaterMark",i),this.buffer=new d,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.paused=!0,this.emitClose=!1!==t.emitClose,this.autoDestroy=!!t.autoDestroy,this.destroyed=!1,this.defaultEncoding=t.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,t.encoding&&(f||(f=r(5482).s),this.decoder=new f(t.encoding),this.encoding=t.encoding)}function E(t){if(n=n||r(5800),!(this instanceof E))return new E(t)
var e=this instanceof n
this._readableState=new S(t,this,e),this.readable=!0,t&&("function"==typeof t.read&&(this._read=t.read),"function"==typeof t.destroy&&(this._destroy=t.destroy)),a.call(this)}function k(t,e,r,n,o){i("readableAddChunk",e)
var a,c=t._readableState
if(null===e)c.reading=!1,function(t,e){if(i("onEofChunk"),!e.ended){if(e.decoder){var r=e.decoder.end()
r&&r.length&&(e.buffer.push(r),e.length+=e.objectMode?1:r.length)}e.ended=!0,e.sync?x(t):(e.needReadable=!1,e.emittedReadable||(e.emittedReadable=!0,C(t)))}}(t,c)
else if(o||(a=function(t,e){var r,n
return n=e,s.isBuffer(n)||n instanceof u||"string"==typeof e||void 0===e||t.objectMode||(r=new v("chunk",["string","Buffer","Uint8Array"],e)),r}(c,e)),a)_(t,a)
else if(c.objectMode||e&&e.length>0)if("string"==typeof e||c.objectMode||Object.getPrototypeOf(e)===s.prototype||(e=function(t){return s.from(t)}(e)),n)c.endEmitted?_(t,new w):A(t,c,e,!0)
else if(c.ended)_(t,new g)
else{if(c.destroyed)return!1
c.reading=!1,c.decoder&&!r?(e=c.decoder.write(e),c.objectMode||0!==e.length?A(t,c,e,!1):I(t,c)):A(t,c,e,!1)}else n||(c.reading=!1,I(t,c))
return!c.ended&&(c.length<c.highWaterMark||0===c.length)}function A(t,e,r,n){e.flowing&&0===e.length&&!e.sync?(e.awaitDrain=0,t.emit("data",r)):(e.length+=e.objectMode?1:r.length,n?e.buffer.unshift(r):e.buffer.push(r),e.needReadable&&x(t)),I(t,e)}Object.defineProperty(E.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(t){this._readableState&&(this._readableState.destroyed=t)}}),E.prototype.destroy=p.destroy,E.prototype._undestroy=p.undestroy,E.prototype._destroy=function(t,e){e(t)},E.prototype.push=function(t,e){var r,n=this._readableState
return n.objectMode?r=!0:"string"==typeof t&&((e=e||n.defaultEncoding)!==n.encoding&&(t=s.from(t,e),e=""),r=!0),k(this,t,e,!1,r)},E.prototype.unshift=function(t){return k(this,t,null,!0,!1)},E.prototype.isPaused=function(){return!1===this._readableState.flowing},E.prototype.setEncoding=function(t){f||(f=r(5482).s)
var e=new f(t)
this._readableState.decoder=e,this._readableState.encoding=this._readableState.decoder.encoding
for(var n=this._readableState.buffer.head,i="";null!==n;)i+=e.write(n.data),n=n.next
return this._readableState.buffer.clear(),""!==i&&this._readableState.buffer.push(i),this._readableState.length=i.length,this}
var T=1073741824
function R(t,e){return t<=0||0===e.length&&e.ended?0:e.objectMode?1:t!=t?e.flowing&&e.length?e.buffer.head.data.length:e.length:(t>e.highWaterMark&&(e.highWaterMark=function(t){return t>=T?t=T:(t--,t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,t|=t>>>16,t++),t}(t)),t<=e.length?t:e.ended?e.length:(e.needReadable=!0,0))}function x(t){var e=t._readableState
i("emitReadable",e.needReadable,e.emittedReadable),e.needReadable=!1,e.emittedReadable||(i("emitReadable",e.flowing),e.emittedReadable=!0,process.nextTick(C,t))}function C(t){var e=t._readableState
i("emitReadable_",e.destroyed,e.length,e.ended),e.destroyed||!e.length&&!e.ended||(t.emit("readable"),e.emittedReadable=!1),e.needReadable=!e.flowing&&!e.ended&&e.length<=e.highWaterMark,N(t)}function I(t,e){e.readingMore||(e.readingMore=!0,process.nextTick(B,t,e))}function B(t,e){for(;!e.reading&&!e.ended&&(e.length<e.highWaterMark||e.flowing&&0===e.length);){var r=e.length
if(i("maybeReadMore read 0"),t.read(0),r===e.length)break}e.readingMore=!1}function O(t){var e=t._readableState
e.readableListening=t.listenerCount("readable")>0,e.resumeScheduled&&!e.paused?e.flowing=!0:t.listenerCount("data")>0&&t.resume()}function P(t){i("readable nexttick read 0"),t.read(0)}function L(t,e){i("resume",e.reading),e.reading||t.read(0),e.resumeScheduled=!1,t.emit("resume"),N(t),e.flowing&&!e.reading&&t.read(0)}function N(t){var e=t._readableState
for(i("flow",e.flowing);e.flowing&&null!==t.read(););}function D(t,e){return 0===e.length?null:(e.objectMode?r=e.buffer.shift():!t||t>=e.length?(r=e.decoder?e.buffer.join(""):1===e.buffer.length?e.buffer.first():e.buffer.concat(e.length),e.buffer.clear()):r=e.buffer.consume(t,e.decoder),r)
var r}function j(t){var e=t._readableState
i("endReadable",e.endEmitted),e.endEmitted||(e.ended=!0,process.nextTick(U,e,t))}function U(t,e){if(i("endReadableNT",t.endEmitted,t.length),!t.endEmitted&&0===t.length&&(t.endEmitted=!0,e.readable=!1,e.emit("end"),t.autoDestroy)){var r=e._writableState;(!r||r.autoDestroy&&r.finished)&&e.destroy()}}function H(t,e){for(var r=0,n=t.length;r<n;r++)if(t[r]===e)return r
return-1}E.prototype.read=function(t){i("read",t),t=parseInt(t,10)
var e=this._readableState,r=t
if(0!==t&&(e.emittedReadable=!1),0===t&&e.needReadable&&((0!==e.highWaterMark?e.length>=e.highWaterMark:e.length>0)||e.ended))return i("read: emitReadable",e.length,e.ended),0===e.length&&e.ended?j(this):x(this),null
if(0===(t=R(t,e))&&e.ended)return 0===e.length&&j(this),null
var n,o=e.needReadable
return i("need readable",o),(0===e.length||e.length-t<e.highWaterMark)&&i("length less than watermark",o=!0),e.ended||e.reading?i("reading or ended",o=!1):o&&(i("do read"),e.reading=!0,e.sync=!0,0===e.length&&(e.needReadable=!0),this._read(e.highWaterMark),e.sync=!1,e.reading||(t=R(r,e))),null===(n=t>0?D(t,e):null)?(e.needReadable=e.length<=e.highWaterMark,t=0):(e.length-=t,e.awaitDrain=0),0===e.length&&(e.ended||(e.needReadable=!0),r!==t&&e.ended&&j(this)),null!==n&&this.emit("data",n),n},E.prototype._read=function(t){_(this,new y("_read()"))},E.prototype.pipe=function(t,e){var r=this,n=this._readableState
switch(n.pipesCount){case 0:n.pipes=t
break
case 1:n.pipes=[n.pipes,t]
break
default:n.pipes.push(t)}n.pipesCount+=1,i("pipe count=%d opts=%j",n.pipesCount,e)
var a=e&&!1===e.end||t===process.stdout||t===process.stderr?p:s
function s(){i("onend"),t.end()}n.endEmitted?process.nextTick(a):r.once("end",a),t.on("unpipe",(function e(o,a){i("onunpipe"),o===r&&a&&!1===a.hasUnpiped&&(a.hasUnpiped=!0,i("cleanup"),t.removeListener("close",l),t.removeListener("finish",d),t.removeListener("drain",u),t.removeListener("error",h),t.removeListener("unpipe",e),r.removeListener("end",s),r.removeListener("end",p),r.removeListener("data",f),c=!0,!n.awaitDrain||t._writableState&&!t._writableState.needDrain||u())}))
var u=function(t){return function(){var e=t._readableState
i("pipeOnDrain",e.awaitDrain),e.awaitDrain&&e.awaitDrain--,0===e.awaitDrain&&o(t,"data")&&(e.flowing=!0,N(t))}}(r)
t.on("drain",u)
var c=!1
function f(e){i("ondata")
var o=t.write(e)
i("dest.write",o),!1===o&&((1===n.pipesCount&&n.pipes===t||n.pipesCount>1&&-1!==H(n.pipes,t))&&!c&&(i("false write response, pause",n.awaitDrain),n.awaitDrain++),r.pause())}function h(e){i("onerror",e),p(),t.removeListener("error",h),0===o(t,"error")&&_(t,e)}function l(){t.removeListener("finish",d),p()}function d(){i("onfinish"),t.removeListener("close",l),p()}function p(){i("unpipe"),r.unpipe(t)}return r.on("data",f),function(t,e,r){if("function"==typeof t.prependListener)return t.prependListener(e,r)
t._events&&t._events[e]?Array.isArray(t._events[e])?t._events[e].unshift(r):t._events[e]=[r,t._events[e]]:t.on(e,r)}(t,"error",h),t.once("close",l),t.once("finish",d),t.emit("pipe",r),n.flowing||(i("pipe resume"),r.resume()),t},E.prototype.unpipe=function(t){var e=this._readableState,r={hasUnpiped:!1}
if(0===e.pipesCount)return this
if(1===e.pipesCount)return t&&t!==e.pipes||(t||(t=e.pipes),e.pipes=null,e.pipesCount=0,e.flowing=!1,t&&t.emit("unpipe",this,r)),this
if(!t){var n=e.pipes,i=e.pipesCount
e.pipes=null,e.pipesCount=0,e.flowing=!1
for(var o=0;o<i;o++)n[o].emit("unpipe",this,{hasUnpiped:!1})
return this}var a=H(e.pipes,t)
return-1===a||(e.pipes.splice(a,1),e.pipesCount-=1,1===e.pipesCount&&(e.pipes=e.pipes[0]),t.emit("unpipe",this,r)),this},E.prototype.on=function(t,e){var r=a.prototype.on.call(this,t,e),n=this._readableState
return"data"===t?(n.readableListening=this.listenerCount("readable")>0,!1!==n.flowing&&this.resume()):"readable"===t&&(n.endEmitted||n.readableListening||(n.readableListening=n.needReadable=!0,n.flowing=!1,n.emittedReadable=!1,i("on readable",n.length,n.reading),n.length?x(this):n.reading||process.nextTick(P,this))),r},E.prototype.addListener=E.prototype.on,E.prototype.removeListener=function(t,e){var r=a.prototype.removeListener.call(this,t,e)
return"readable"===t&&process.nextTick(O,this),r},E.prototype.removeAllListeners=function(t){var e=a.prototype.removeAllListeners.apply(this,arguments)
return"readable"!==t&&void 0!==t||process.nextTick(O,this),e},E.prototype.resume=function(){var t=this._readableState
return t.flowing||(i("resume"),t.flowing=!t.readableListening,function(t,e){e.resumeScheduled||(e.resumeScheduled=!0,process.nextTick(L,t,e))}(this,t)),t.paused=!1,this},E.prototype.pause=function(){return i("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(i("pause"),this._readableState.flowing=!1,this.emit("pause")),this._readableState.paused=!0,this},E.prototype.wrap=function(t){var e=this,r=this._readableState,n=!1
for(var o in t.on("end",(function(){if(i("wrapped end"),r.decoder&&!r.ended){var t=r.decoder.end()
t&&t.length&&e.push(t)}e.push(null)})),t.on("data",(function(o){i("wrapped data"),r.decoder&&(o=r.decoder.write(o)),r.objectMode&&null==o||(r.objectMode||o&&o.length)&&(e.push(o)||(n=!0,t.pause()))})),t)void 0===this[o]&&"function"==typeof t[o]&&(this[o]=function(e){return function(){return t[e].apply(t,arguments)}}(o))
for(var a=0;a<M.length;a++)t.on(M[a],this.emit.bind(this,M[a]))
return this._read=function(e){i("wrapped _read",e),n&&(n=!1,t.resume())},this},"function"==typeof Symbol&&(E.prototype[Symbol.asyncIterator]=function(){return void 0===h&&(h=r(6978)),h(this)}),Object.defineProperty(E.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}}),Object.defineProperty(E.prototype,"readableBuffer",{enumerable:!1,get:function(){return this._readableState&&this._readableState.buffer}}),Object.defineProperty(E.prototype,"readableFlowing",{enumerable:!1,get:function(){return this._readableState.flowing},set:function(t){this._readableState&&(this._readableState.flowing=t)}}),E._fromList=D,Object.defineProperty(E.prototype,"readableLength",{enumerable:!1,get:function(){return this._readableState.length}}),"function"==typeof Symbol&&(E.from=function(t,e){return void 0===l&&(l=r(8002)),l(E,t,e)})},497:(t,e,r)=>{"use strict"
t.exports=f
var n=r(7416).q,i=n.ERR_METHOD_NOT_IMPLEMENTED,o=n.ERR_MULTIPLE_CALLBACK,a=n.ERR_TRANSFORM_ALREADY_TRANSFORMING,s=n.ERR_TRANSFORM_WITH_LENGTH_0,u=r(5800)
function c(t,e){var r=this._transformState
r.transforming=!1
var n=r.writecb
if(null===n)return this.emit("error",new o)
r.writechunk=null,r.writecb=null,null!=e&&this.push(e),n(t)
var i=this._readableState
i.reading=!1,(i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}function f(t){if(!(this instanceof f))return new f(t)
u.call(this,t),this._transformState={afterTransform:c.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,t&&("function"==typeof t.transform&&(this._transform=t.transform),"function"==typeof t.flush&&(this._flush=t.flush)),this.on("prefinish",h)}function h(){var t=this
"function"!=typeof this._flush||this._readableState.destroyed?l(this,null,null):this._flush((function(e,r){l(t,e,r)}))}function l(t,e,r){if(e)return t.emit("error",e)
if(null!=r&&t.push(r),t._writableState.length)throw new s
if(t._transformState.transforming)throw new a
return t.push(null)}r(1736)(f,u),f.prototype.push=function(t,e){return this._transformState.needTransform=!1,u.prototype.push.call(this,t,e)},f.prototype._transform=function(t,e,r){r(new i("_transform()"))},f.prototype._write=function(t,e,r){var n=this._transformState
if(n.writecb=r,n.writechunk=t,n.writeencoding=e,!n.transforming){var i=this._readableState;(n.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},f.prototype._read=function(t){var e=this._transformState
null===e.writechunk||e.transforming?e.needTransform=!0:(e.transforming=!0,this._transform(e.writechunk,e.writeencoding,e.afterTransform))},f.prototype._destroy=function(t,e){u.prototype._destroy.call(this,t,(function(t){e(t)}))}},7266:(t,e,r)=>{"use strict"
function n(t){var e=this
this.next=null,this.entry=null,this.finish=function(){!function(t,e,r){var n=t.entry
for(t.entry=null;n;){var i=n.callback
e.pendingcb--,i(void 0),n=n.next}e.corkedRequestsFree.next=t}(e,t)}}var i
t.exports=E,E.WritableState=S
var o,a={deprecate:r(6219)},s=r(1789),u=r(9033).Buffer,c=(void 0!==r.g?r.g:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{}).Uint8Array||function(){},f=r(7870),h=r(5611).getHighWaterMark,l=r(7416).q,d=l.ERR_INVALID_ARG_TYPE,p=l.ERR_METHOD_NOT_IMPLEMENTED,b=l.ERR_MULTIPLE_CALLBACK,m=l.ERR_STREAM_CANNOT_PIPE,v=l.ERR_STREAM_DESTROYED,g=l.ERR_STREAM_NULL_VALUES,y=l.ERR_STREAM_WRITE_AFTER_END,w=l.ERR_UNKNOWN_ENCODING,_=f.errorOrDestroy
function M(){}function S(t,e,o){i=i||r(5800),t=t||{},"boolean"!=typeof o&&(o=e instanceof i),this.objectMode=!!t.objectMode,o&&(this.objectMode=this.objectMode||!!t.writableObjectMode),this.highWaterMark=h(this,t,"writableHighWaterMark",o),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1
var a=!1===t.decodeStrings
this.decodeStrings=!a,this.defaultEncoding=t.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(t){!function(t,e){var r=t._writableState,n=r.sync,i=r.writecb
if("function"!=typeof i)throw new b
if(function(t){t.writing=!1,t.writecb=null,t.length-=t.writelen,t.writelen=0}(r),e)!function(t,e,r,n,i){--e.pendingcb,r?(process.nextTick(i,n),process.nextTick(C,t,e),t._writableState.errorEmitted=!0,_(t,n)):(i(n),t._writableState.errorEmitted=!0,_(t,n),C(t,e))}(t,r,n,e,i)
else{var o=R(r)||t.destroyed
o||r.corked||r.bufferProcessing||!r.bufferedRequest||T(t,r),n?process.nextTick(A,t,r,o,i):A(t,r,o,i)}}(e,t)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.emitClose=!1!==t.emitClose,this.autoDestroy=!!t.autoDestroy,this.bufferedRequestCount=0,this.corkedRequestsFree=new n(this)}function E(t){var e=this instanceof(i=i||r(5800))
if(!e&&!o.call(E,this))return new E(t)
this._writableState=new S(t,this,e),this.writable=!0,t&&("function"==typeof t.write&&(this._write=t.write),"function"==typeof t.writev&&(this._writev=t.writev),"function"==typeof t.destroy&&(this._destroy=t.destroy),"function"==typeof t.final&&(this._final=t.final)),s.call(this)}function k(t,e,r,n,i,o,a){e.writelen=n,e.writecb=a,e.writing=!0,e.sync=!0,e.destroyed?e.onwrite(new v("write")):r?t._writev(i,e.onwrite):t._write(i,o,e.onwrite),e.sync=!1}function A(t,e,r,n){r||function(t,e){0===e.length&&e.needDrain&&(e.needDrain=!1,t.emit("drain"))}(t,e),e.pendingcb--,n(),C(t,e)}function T(t,e){e.bufferProcessing=!0
var r=e.bufferedRequest
if(t._writev&&r&&r.next){var i=e.bufferedRequestCount,o=new Array(i),a=e.corkedRequestsFree
a.entry=r
for(var s=0,u=!0;r;)o[s]=r,r.isBuf||(u=!1),r=r.next,s+=1
o.allBuffers=u,k(t,e,!0,e.length,o,"",a.finish),e.pendingcb++,e.lastBufferedRequest=null,a.next?(e.corkedRequestsFree=a.next,a.next=null):e.corkedRequestsFree=new n(e),e.bufferedRequestCount=0}else{for(;r;){var c=r.chunk,f=r.encoding,h=r.callback
if(k(t,e,!1,e.objectMode?1:c.length,c,f,h),r=r.next,e.bufferedRequestCount--,e.writing)break}null===r&&(e.lastBufferedRequest=null)}e.bufferedRequest=r,e.bufferProcessing=!1}function R(t){return t.ending&&0===t.length&&null===t.bufferedRequest&&!t.finished&&!t.writing}function x(t,e){t._final((function(r){e.pendingcb--,r&&_(t,r),e.prefinished=!0,t.emit("prefinish"),C(t,e)}))}function C(t,e){var r=R(e)
if(r&&(function(t,e){e.prefinished||e.finalCalled||("function"!=typeof t._final||e.destroyed?(e.prefinished=!0,t.emit("prefinish")):(e.pendingcb++,e.finalCalled=!0,process.nextTick(x,t,e)))}(t,e),0===e.pendingcb&&(e.finished=!0,t.emit("finish"),e.autoDestroy))){var n=t._readableState;(!n||n.autoDestroy&&n.endEmitted)&&t.destroy()}return r}r(1736)(E,s),S.prototype.getBuffer=function(){for(var t=this.bufferedRequest,e=[];t;)e.push(t),t=t.next
return e},function(){try{Object.defineProperty(S.prototype,"buffer",{get:a.deprecate((function(){return this.getBuffer()}),"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(t){}}(),"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(o=Function.prototype[Symbol.hasInstance],Object.defineProperty(E,Symbol.hasInstance,{value:function(t){return!!o.call(this,t)||this===E&&t&&t._writableState instanceof S}})):o=function(t){return t instanceof this},E.prototype.pipe=function(){_(this,new m)},E.prototype.write=function(t,e,r){var n,i=this._writableState,o=!1,a=!i.objectMode&&(n=t,u.isBuffer(n)||n instanceof c)
return a&&!u.isBuffer(t)&&(t=function(t){return u.from(t)}(t)),"function"==typeof e&&(r=e,e=null),a?e="buffer":e||(e=i.defaultEncoding),"function"!=typeof r&&(r=M),i.ending?function(t,e){var r=new y
_(t,r),process.nextTick(e,r)}(this,r):(a||function(t,e,r,n){var i
return null===r?i=new g:"string"==typeof r||e.objectMode||(i=new d("chunk",["string","Buffer"],r)),!i||(_(t,i),process.nextTick(n,i),!1)}(this,i,t,r))&&(i.pendingcb++,o=function(t,e,r,n,i,o){if(!r){var a=function(t,e,r){return t.objectMode||!1===t.decodeStrings||"string"!=typeof e||(e=u.from(e,r)),e}(e,n,i)
n!==a&&(r=!0,i="buffer",n=a)}var s=e.objectMode?1:n.length
e.length+=s
var c=e.length<e.highWaterMark
if(c||(e.needDrain=!0),e.writing||e.corked){var f=e.lastBufferedRequest
e.lastBufferedRequest={chunk:n,encoding:i,isBuf:r,callback:o,next:null},f?f.next=e.lastBufferedRequest:e.bufferedRequest=e.lastBufferedRequest,e.bufferedRequestCount+=1}else k(t,e,!1,s,n,i,o)
return c}(this,i,a,t,e,r)),o},E.prototype.cork=function(){this._writableState.corked++},E.prototype.uncork=function(){var t=this._writableState
t.corked&&(t.corked--,t.writing||t.corked||t.bufferProcessing||!t.bufferedRequest||T(this,t))},E.prototype.setDefaultEncoding=function(t){if("string"==typeof t&&(t=t.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((t+"").toLowerCase())>-1))throw new w(t)
return this._writableState.defaultEncoding=t,this},Object.defineProperty(E.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(E.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),E.prototype._write=function(t,e,r){r(new p("_write()"))},E.prototype._writev=null,E.prototype.end=function(t,e,r){var n=this._writableState
return"function"==typeof t?(r=t,t=null,e=null):"function"==typeof e&&(r=e,e=null),null!=t&&this.write(t,e),n.corked&&(n.corked=1,this.uncork()),n.ending||function(t,e,r){e.ending=!0,C(t,e),r&&(e.finished?process.nextTick(r):t.once("finish",r)),e.ended=!0,t.writable=!1}(this,n,r),this},Object.defineProperty(E.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(E.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(t){this._writableState&&(this._writableState.destroyed=t)}}),E.prototype.destroy=f.destroy,E.prototype._undestroy=f.undestroy,E.prototype._destroy=function(t,e){e(t)}},6978:(t,e,r)=>{"use strict"
var n
function i(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t
var r=t[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(t,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t)
return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var o=r(3516),a=Symbol("lastResolve"),s=Symbol("lastReject"),u=Symbol("error"),c=Symbol("ended"),f=Symbol("lastPromise"),h=Symbol("handlePromise"),l=Symbol("stream")
function d(t,e){return{value:t,done:e}}function p(t){var e=t[a]
if(null!==e){var r=t[l].read()
null!==r&&(t[f]=null,t[a]=null,t[s]=null,e(d(r,!1)))}}function b(t){process.nextTick(p,t)}var m=Object.getPrototypeOf((function(){})),v=Object.setPrototypeOf((i(n={get stream(){return this[l]},next:function(){var t=this,e=this[u]
if(null!==e)return Promise.reject(e)
if(this[c])return Promise.resolve(d(void 0,!0))
if(this[l].destroyed)return new Promise((function(e,r){process.nextTick((function(){t[u]?r(t[u]):e(d(void 0,!0))}))}))
var r,n=this[f]
if(n)r=new Promise(function(t,e){return function(r,n){t.then((function(){e[c]?r(d(void 0,!0)):e[h](r,n)}),n)}}(n,this))
else{var i=this[l].read()
if(null!==i)return Promise.resolve(d(i,!1))
r=new Promise(this[h])}return this[f]=r,r}},Symbol.asyncIterator,(function(){return this})),i(n,"return",(function(){var t=this
return new Promise((function(e,r){t[l].destroy(null,(function(t){t?r(t):e(d(void 0,!0))}))}))})),n),m)
t.exports=function(t){var e,r=Object.create(v,(i(e={},l,{value:t,writable:!0}),i(e,a,{value:null,writable:!0}),i(e,s,{value:null,writable:!0}),i(e,u,{value:null,writable:!0}),i(e,c,{value:t._readableState.endEmitted,writable:!0}),i(e,h,{value:function(t,e){var n=r[l].read()
n?(r[f]=null,r[a]=null,r[s]=null,t(d(n,!1))):(r[a]=t,r[s]=e)},writable:!0}),e))
return r[f]=null,o(t,(function(t){if(t&&"ERR_STREAM_PREMATURE_CLOSE"!==t.code){var e=r[s]
return null!==e&&(r[f]=null,r[a]=null,r[s]=null,e(t)),void(r[u]=t)}var n=r[a]
null!==n&&(r[f]=null,r[a]=null,r[s]=null,n(d(void 0,!0))),r[c]=!0})),t.on("readable",b.bind(null,r)),r}},3194:(t,e,r)=>{"use strict"
function n(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e,r){return(e=a(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t){var e=function(t,e){if("object"!=typeof t||null===t)return t
var r=t[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(t,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t)
return"symbol"==typeof e?e:String(e)}var s=r(9033).Buffer,u=r(6419).inspect,c=u&&u.custom||"inspect"
t.exports=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.head=null,this.tail=null,this.length=0}var e,r
return e=t,(r=[{key:"push",value:function(t){var e={data:t,next:null}
this.length>0?this.tail.next=e:this.head=e,this.tail=e,++this.length}},{key:"unshift",value:function(t){var e={data:t,next:this.head}
0===this.length&&(this.tail=e),this.head=e,++this.length}},{key:"shift",value:function(){if(0!==this.length){var t=this.head.data
return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,t}}},{key:"clear",value:function(){this.head=this.tail=null,this.length=0}},{key:"join",value:function(t){if(0===this.length)return""
for(var e=this.head,r=""+e.data;e=e.next;)r+=t+e.data
return r}},{key:"concat",value:function(t){if(0===this.length)return s.alloc(0)
for(var e,r,n,i=s.allocUnsafe(t>>>0),o=this.head,a=0;o;)e=o.data,r=i,n=a,s.prototype.copy.call(e,r,n),a+=o.data.length,o=o.next
return i}},{key:"consume",value:function(t,e){var r
return t<this.head.data.length?(r=this.head.data.slice(0,t),this.head.data=this.head.data.slice(t)):r=t===this.head.data.length?this.shift():e?this._getString(t):this._getBuffer(t),r}},{key:"first",value:function(){return this.head.data}},{key:"_getString",value:function(t){var e=this.head,r=1,n=e.data
for(t-=n.length;e=e.next;){var i=e.data,o=t>i.length?i.length:t
if(o===i.length?n+=i:n+=i.slice(0,t),0==(t-=o)){o===i.length?(++r,e.next?this.head=e.next:this.head=this.tail=null):(this.head=e,e.data=i.slice(o))
break}++r}return this.length-=r,n}},{key:"_getBuffer",value:function(t){var e=s.allocUnsafe(t),r=this.head,n=1
for(r.data.copy(e),t-=r.data.length;r=r.next;){var i=r.data,o=t>i.length?i.length:t
if(i.copy(e,e.length-t,0,o),0==(t-=o)){o===i.length?(++n,r.next?this.head=r.next:this.head=this.tail=null):(this.head=r,r.data=i.slice(o))
break}++n}return this.length-=n,e}},{key:c,value:function(t,e){return u(this,i(i({},e),{},{depth:0,customInspect:!1}))}}])&&function(t,e){for(var r=0;r<e.length;r++){var n=e[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,a(n.key),n)}}(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}()},7870:t=>{"use strict"
function e(t,e){n(t,e),r(t)}function r(t){t._writableState&&!t._writableState.emitClose||t._readableState&&!t._readableState.emitClose||t.emit("close")}function n(t,e){t.emit("error",e)}t.exports={destroy:function(t,i){var o=this,a=this._readableState&&this._readableState.destroyed,s=this._writableState&&this._writableState.destroyed
return a||s?(i?i(t):t&&(this._writableState?this._writableState.errorEmitted||(this._writableState.errorEmitted=!0,process.nextTick(n,this,t)):process.nextTick(n,this,t)),this):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(t||null,(function(t){!i&&t?o._writableState?o._writableState.errorEmitted?process.nextTick(r,o):(o._writableState.errorEmitted=!0,process.nextTick(e,o,t)):process.nextTick(e,o,t):i?(process.nextTick(r,o),i(t)):process.nextTick(r,o)})),this)},undestroy:function(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finalCalled=!1,this._writableState.prefinished=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)},errorOrDestroy:function(t,e){var r=t._readableState,n=t._writableState
r&&r.autoDestroy||n&&n.autoDestroy?t.destroy(e):t.emit("error",e)}}},3516:(t,e,r)=>{"use strict"
var n=r(7416).q.ERR_STREAM_PREMATURE_CLOSE
function i(){}t.exports=function t(e,r,o){if("function"==typeof r)return t(e,null,r)
r||(r={}),o=function(t){var e=!1
return function(){if(!e){e=!0
for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i]
t.apply(this,n)}}}(o||i)
var a=r.readable||!1!==r.readable&&e.readable,s=r.writable||!1!==r.writable&&e.writable,u=function(){e.writable||f()},c=e._writableState&&e._writableState.finished,f=function(){s=!1,c=!0,a||o.call(e)},h=e._readableState&&e._readableState.endEmitted,l=function(){a=!1,h=!0,s||o.call(e)},d=function(t){o.call(e,t)},p=function(){var t
return a&&!h?(e._readableState&&e._readableState.ended||(t=new n),o.call(e,t)):s&&!c?(e._writableState&&e._writableState.ended||(t=new n),o.call(e,t)):void 0},b=function(){e.req.on("finish",f)}
return function(t){return t.setHeader&&"function"==typeof t.abort}(e)?(e.on("complete",f),e.on("abort",p),e.req?b():e.on("request",b)):s&&!e._writableState&&(e.on("end",u),e.on("close",u)),e.on("end",l),e.on("finish",f),!1!==r.error&&e.on("error",d),e.on("close",p),function(){e.removeListener("complete",f),e.removeListener("abort",p),e.removeListener("request",b),e.req&&e.req.removeListener("finish",f),e.removeListener("end",u),e.removeListener("close",u),e.removeListener("finish",f),e.removeListener("end",l),e.removeListener("error",d),e.removeListener("close",p)}}},8002:t=>{t.exports=function(){throw new Error("Readable.from is not available in the browser")}},5271:(t,e,r)=>{"use strict"
var n,i=r(7416).q,o=i.ERR_MISSING_ARGS,a=i.ERR_STREAM_DESTROYED
function s(t){if(t)throw t}function u(t){t()}function c(t,e){return t.pipe(e)}t.exports=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
var f,h=function(t){return t.length?"function"!=typeof t[t.length-1]?s:t.pop():s}(e)
if(Array.isArray(e[0])&&(e=e[0]),e.length<2)throw new o("streams")
var l=e.map((function(t,i){var o=i<e.length-1
return function(t,e,i,o){o=function(t){var e=!1
return function(){e||(e=!0,t.apply(void 0,arguments))}}(o)
var s=!1
t.on("close",(function(){s=!0})),void 0===n&&(n=r(3516)),n(t,{readable:e,writable:i},(function(t){if(t)return o(t)
s=!0,o()}))
var u=!1
return function(e){if(!s&&!u)return u=!0,function(t){return t.setHeader&&"function"==typeof t.abort}(t)?t.abort():"function"==typeof t.destroy?t.destroy():void o(e||new a("pipe"))}}(t,o,i>0,(function(t){f||(f=t),t&&l.forEach(u),o||(l.forEach(u),h(f))}))}))
return e.reduce(c)}},5611:(t,e,r)=>{"use strict"
var n=r(7416).q.ERR_INVALID_OPT_VALUE
t.exports={getHighWaterMark:function(t,e,r,i){var o=function(t,e,r){return null!=t.highWaterMark?t.highWaterMark:e?t[r]:null}(e,i,r)
if(null!=o){if(!isFinite(o)||Math.floor(o)!==o||o<0)throw new n(i?r:"highWaterMark",o)
return Math.floor(o)}return t.objectMode?16:16384}}},1789:(t,e,r)=>{t.exports=r(8291).EventEmitter},5759:(t,e,r)=>{(e=t.exports=r(9411)).Stream=e,e.Readable=e,e.Writable=r(7266),e.Duplex=r(5800),e.Transform=r(497),e.PassThrough=r(3146),e.finished=r(3516),e.pipeline=r(5271)},5482:(t,e,r)=>{"use strict"
var n=r(8850).Buffer,i=n.isEncoding||function(t){switch((t=""+t)&&t.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0
default:return!1}}
function o(t){var e
switch(this.encoding=function(t){var e=function(t){if(!t)return"utf8"
for(var e;;)switch(t){case"utf8":case"utf-8":return"utf8"
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le"
case"latin1":case"binary":return"latin1"
case"base64":case"ascii":case"hex":return t
default:if(e)return
t=(""+t).toLowerCase(),e=!0}}(t)
if("string"!=typeof e&&(n.isEncoding===i||!i(t)))throw new Error("Unknown encoding: "+t)
return e||t}(t),this.encoding){case"utf16le":this.text=u,this.end=c,e=4
break
case"utf8":this.fillLast=s,e=4
break
case"base64":this.text=f,this.end=h,e=3
break
default:return this.write=l,void(this.end=d)}this.lastNeed=0,this.lastTotal=0,this.lastChar=n.allocUnsafe(e)}function a(t){return t<=127?0:t>>5==6?2:t>>4==14?3:t>>3==30?4:t>>6==2?-1:-2}function s(t){var e=this.lastTotal-this.lastNeed,r=function(t,e,r){if(128!=(192&e[0]))return t.lastNeed=0,"�"
if(t.lastNeed>1&&e.length>1){if(128!=(192&e[1]))return t.lastNeed=1,"�"
if(t.lastNeed>2&&e.length>2&&128!=(192&e[2]))return t.lastNeed=2,"�"}}(this,t)
return void 0!==r?r:this.lastNeed<=t.length?(t.copy(this.lastChar,e,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(t.copy(this.lastChar,e,0,t.length),void(this.lastNeed-=t.length))}function u(t,e){if((t.length-e)%2==0){var r=t.toString("utf16le",e)
if(r){var n=r.charCodeAt(r.length-1)
if(n>=55296&&n<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1],r.slice(0,-1)}return r}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=t[t.length-1],t.toString("utf16le",e,t.length-1)}function c(t){var e=t&&t.length?this.write(t):""
if(this.lastNeed){var r=this.lastTotal-this.lastNeed
return e+this.lastChar.toString("utf16le",0,r)}return e}function f(t,e){var r=(t.length-e)%3
return 0===r?t.toString("base64",e):(this.lastNeed=3-r,this.lastTotal=3,1===r?this.lastChar[0]=t[t.length-1]:(this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1]),t.toString("base64",e,t.length-r))}function h(t){var e=t&&t.length?this.write(t):""
return this.lastNeed?e+this.lastChar.toString("base64",0,3-this.lastNeed):e}function l(t){return t.toString(this.encoding)}function d(t){return t&&t.length?this.write(t):""}e.s=o,o.prototype.write=function(t){if(0===t.length)return""
var e,r
if(this.lastNeed){if(void 0===(e=this.fillLast(t)))return""
r=this.lastNeed,this.lastNeed=0}else r=0
return r<t.length?e?e+this.text(t,r):this.text(t,r):e||""},o.prototype.end=function(t){var e=t&&t.length?this.write(t):""
return this.lastNeed?e+"�":e},o.prototype.text=function(t,e){var r=function(t,e,r){var n=e.length-1
if(n<r)return 0
var i=a(e[n])
return i>=0?(i>0&&(t.lastNeed=i-1),i):--n<r||-2===i?0:(i=a(e[n]))>=0?(i>0&&(t.lastNeed=i-2),i):--n<r||-2===i?0:(i=a(e[n]))>=0?(i>0&&(2===i?i=0:t.lastNeed=i-3),i):0}(this,t,e)
if(!this.lastNeed)return t.toString("utf8",e)
this.lastTotal=r
var n=t.length-(r-this.lastNeed)
return t.copy(this.lastChar,0,n),t.toString("utf8",e,n)},o.prototype.fillLast=function(t){if(this.lastNeed<=t.length)return t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)
t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,t.length),this.lastNeed-=t.length}},6316:t=>{t.exports=function(t,e){for(var r=Math.min(t.length,e.length),n=new Buffer(r),i=0;i<r;++i)n[i]=t[i]^e[i]
return n}},9033:(t,e,r)=>{"use strict"
var n=r(4919),i=r(3226),o=r(9484)
function a(){return u.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function s(t,e){if(a()<e)throw new RangeError("Invalid typed array length")
return u.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=u.prototype:(null===t&&(t=new u(e)),t.length=e),t}function u(t,e,r){if(!(u.TYPED_ARRAY_SUPPORT||this instanceof u))return new u(t,e,r)
if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string")
return h(this,t)}return c(this,t,e,r)}function c(t,e,r,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number')
return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,r,n){if(e.byteLength,r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds")
if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds")
return e=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n),u.TYPED_ARRAY_SUPPORT?(t=e).__proto__=u.prototype:t=l(t,e),t}(t,e,r,n):"string"==typeof e?function(t,e,r){if("string"==typeof r&&""!==r||(r="utf8"),!u.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding')
var n=0|p(e,r),i=(t=s(t,n)).write(e,r)
return i!==n&&(t=t.slice(0,i)),t}(t,e,r):function(t,e){if(u.isBuffer(e)){var r=0|d(e.length)
return 0===(t=s(t,r)).length||e.copy(t,0,0,r),t}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||(n=e.length)!=n?s(t,0):l(t,e)
if("Buffer"===e.type&&o(e.data))return l(t,e.data)}var n
throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function f(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number')
if(t<0)throw new RangeError('"size" argument must not be negative')}function h(t,e){if(f(e),t=s(t,e<0?0:0|d(e)),!u.TYPED_ARRAY_SUPPORT)for(var r=0;r<e;++r)t[r]=0
return t}function l(t,e){var r=e.length<0?0:0|d(e.length)
t=s(t,r)
for(var n=0;n<r;n+=1)t[n]=255&e[n]
return t}function d(t){if(t>=a())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a().toString(16)+" bytes")
return 0|t}function p(t,e){if(u.isBuffer(t))return t.length
if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength
"string"!=typeof t&&(t=""+t)
var r=t.length
if(0===r)return 0
for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r
case"utf8":case"utf-8":case void 0:return H(t).length
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r
case"hex":return r>>>1
case"base64":return q(t).length
default:if(n)return H(t).length
e=(""+e).toLowerCase(),n=!0}}function b(t,e,r){var n=!1
if((void 0===e||e<0)&&(e=0),e>this.length)return""
if((void 0===r||r>this.length)&&(r=this.length),r<=0)return""
if((r>>>=0)<=(e>>>=0))return""
for(t||(t="utf8");;)switch(t){case"hex":return C(this,e,r)
case"utf8":case"utf-8":return A(this,e,r)
case"ascii":return R(this,e,r)
case"latin1":case"binary":return x(this,e,r)
case"base64":return k(this,e,r)
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return I(this,e,r)
default:if(n)throw new TypeError("Unknown encoding: "+t)
t=(t+"").toLowerCase(),n=!0}}function m(t,e,r){var n=t[e]
t[e]=t[r],t[r]=n}function v(t,e,r,n,i){if(0===t.length)return-1
if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1
r=t.length-1}else if(r<0){if(!i)return-1
r=0}if("string"==typeof e&&(e=u.from(e,n)),u.isBuffer(e))return 0===e.length?-1:g(t,e,r,n,i)
if("number"==typeof e)return e&=255,u.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):g(t,[e],r,n,i)
throw new TypeError("val must be string, number or Buffer")}function g(t,e,r,n,i){var o,a=1,s=t.length,u=e.length
if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1
a=2,s/=2,u/=2,r/=2}function c(t,e){return 1===a?t[e]:t.readUInt16BE(e*a)}if(i){var f=-1
for(o=r;o<s;o++)if(c(t,o)===c(e,-1===f?0:o-f)){if(-1===f&&(f=o),o-f+1===u)return f*a}else-1!==f&&(o-=o-f),f=-1}else for(r+u>s&&(r=s-u),o=r;o>=0;o--){for(var h=!0,l=0;l<u;l++)if(c(t,o+l)!==c(e,l)){h=!1
break}if(h)return o}return-1}function y(t,e,r,n){r=Number(r)||0
var i=t.length-r
n?(n=Number(n))>i&&(n=i):n=i
var o=e.length
if(o%2!=0)throw new TypeError("Invalid hex string")
n>o/2&&(n=o/2)
for(var a=0;a<n;++a){var s=parseInt(e.substr(2*a,2),16)
if(isNaN(s))return a
t[r+a]=s}return a}function w(t,e,r,n){return F(H(e,t.length-r),t,r,n)}function _(t,e,r,n){return F(function(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r))
return e}(e),t,r,n)}function M(t,e,r,n){return _(t,e,r,n)}function S(t,e,r,n){return F(q(e),t,r,n)}function E(t,e,r,n){return F(function(t,e){for(var r,n,i,o=[],a=0;a<t.length&&!((e-=2)<0);++a)n=(r=t.charCodeAt(a))>>8,i=r%256,o.push(i),o.push(n)
return o}(e,t.length-r),t,r,n)}function k(t,e,r){return 0===e&&r===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(e,r))}function A(t,e,r){r=Math.min(t.length,r)
for(var n=[],i=e;i<r;){var o,a,s,u,c=t[i],f=null,h=c>239?4:c>223?3:c>191?2:1
if(i+h<=r)switch(h){case 1:c<128&&(f=c)
break
case 2:128==(192&(o=t[i+1]))&&(u=(31&c)<<6|63&o)>127&&(f=u)
break
case 3:o=t[i+1],a=t[i+2],128==(192&o)&&128==(192&a)&&(u=(15&c)<<12|(63&o)<<6|63&a)>2047&&(u<55296||u>57343)&&(f=u)
break
case 4:o=t[i+1],a=t[i+2],s=t[i+3],128==(192&o)&&128==(192&a)&&128==(192&s)&&(u=(15&c)<<18|(63&o)<<12|(63&a)<<6|63&s)>65535&&u<1114112&&(f=u)}null===f?(f=65533,h=1):f>65535&&(f-=65536,n.push(f>>>10&1023|55296),f=56320|1023&f),n.push(f),i+=h}return function(t){var e=t.length
if(e<=T)return String.fromCharCode.apply(String,t)
for(var r="",n=0;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=T))
return r}(n)}e.Buffer=u,e.SlowBuffer=function(t){return+t!=t&&(t=0),u.alloc(+t)},e.INSPECT_MAX_BYTES=50,u.TYPED_ARRAY_SUPPORT=void 0!==r.g.TYPED_ARRAY_SUPPORT?r.g.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1)
return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=a(),u.poolSize=8192,u._augment=function(t){return t.__proto__=u.prototype,t},u.from=function(t,e,r){return c(null,t,e,r)},u.TYPED_ARRAY_SUPPORT&&(u.prototype.__proto__=Uint8Array.prototype,u.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&u[Symbol.species]===u&&Object.defineProperty(u,Symbol.species,{value:null,configurable:!0})),u.alloc=function(t,e,r){return function(t,e,r,n){return f(e),e<=0?s(t,e):void 0!==r?"string"==typeof n?s(t,e).fill(r,n):s(t,e).fill(r):s(t,e)}(null,t,e,r)},u.allocUnsafe=function(t){return h(null,t)},u.allocUnsafeSlow=function(t){return h(null,t)},u.isBuffer=function(t){return!(null==t||!t._isBuffer)},u.compare=function(t,e){if(!u.isBuffer(t)||!u.isBuffer(e))throw new TypeError("Arguments must be Buffers")
if(t===e)return 0
for(var r=t.length,n=e.length,i=0,o=Math.min(r,n);i<o;++i)if(t[i]!==e[i]){r=t[i],n=e[i]
break}return r<n?-1:n<r?1:0},u.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0
default:return!1}},u.concat=function(t,e){if(!o(t))throw new TypeError('"list" argument must be an Array of Buffers')
if(0===t.length)return u.alloc(0)
var r
if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length
var n=u.allocUnsafe(e),i=0
for(r=0;r<t.length;++r){var a=t[r]
if(!u.isBuffer(a))throw new TypeError('"list" argument must be an Array of Buffers')
a.copy(n,i),i+=a.length}return n},u.byteLength=p,u.prototype._isBuffer=!0,u.prototype.swap16=function(){var t=this.length
if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits")
for(var e=0;e<t;e+=2)m(this,e,e+1)
return this},u.prototype.swap32=function(){var t=this.length
if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits")
for(var e=0;e<t;e+=4)m(this,e,e+3),m(this,e+1,e+2)
return this},u.prototype.swap64=function(){var t=this.length
if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits")
for(var e=0;e<t;e+=8)m(this,e,e+7),m(this,e+1,e+6),m(this,e+2,e+5),m(this,e+3,e+4)
return this},u.prototype.toString=function(){var t=0|this.length
return 0===t?"":0===arguments.length?A(this,0,t):b.apply(this,arguments)},u.prototype.equals=function(t){if(!u.isBuffer(t))throw new TypeError("Argument must be a Buffer")
return this===t||0===u.compare(this,t)},u.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES
return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},u.prototype.compare=function(t,e,r,n,i){if(!u.isBuffer(t))throw new TypeError("Argument must be a Buffer")
if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),e<0||r>t.length||n<0||i>this.length)throw new RangeError("out of range index")
if(n>=i&&e>=r)return 0
if(n>=i)return-1
if(e>=r)return 1
if(this===t)return 0
for(var o=(i>>>=0)-(n>>>=0),a=(r>>>=0)-(e>>>=0),s=Math.min(o,a),c=this.slice(n,i),f=t.slice(e,r),h=0;h<s;++h)if(c[h]!==f[h]){o=c[h],a=f[h]
break}return o<a?-1:a<o?1:0},u.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},u.prototype.indexOf=function(t,e,r){return v(this,t,e,r,!0)},u.prototype.lastIndexOf=function(t,e,r){return v(this,t,e,r,!1)},u.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0
else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0
else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported")
e|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-e
if((void 0===r||r>i)&&(r=i),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds")
n||(n="utf8")
for(var o=!1;;)switch(n){case"hex":return y(this,t,e,r)
case"utf8":case"utf-8":return w(this,t,e,r)
case"ascii":return _(this,t,e,r)
case"latin1":case"binary":return M(this,t,e,r)
case"base64":return S(this,t,e,r)
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return E(this,t,e,r)
default:if(o)throw new TypeError("Unknown encoding: "+n)
n=(""+n).toLowerCase(),o=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}}
var T=4096
function R(t,e,r){var n=""
r=Math.min(t.length,r)
for(var i=e;i<r;++i)n+=String.fromCharCode(127&t[i])
return n}function x(t,e,r){var n=""
r=Math.min(t.length,r)
for(var i=e;i<r;++i)n+=String.fromCharCode(t[i])
return n}function C(t,e,r){var n,i=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>i)&&(r=i)
for(var o="",a=e;a<r;++a)o+=(n=t[a])<16?"0"+n.toString(16):n.toString(16)
return o}function I(t,e,r){for(var n=t.slice(e,r),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1])
return i}function B(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint")
if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function O(t,e,r,n,i,o){if(!u.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance')
if(e>i||e<o)throw new RangeError('"value" argument is out of bounds')
if(r+n>t.length)throw new RangeError("Index out of range")}function P(t,e,r,n){e<0&&(e=65535+e+1)
for(var i=0,o=Math.min(t.length-r,2);i<o;++i)t[r+i]=(e&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function L(t,e,r,n){e<0&&(e=4294967295+e+1)
for(var i=0,o=Math.min(t.length-r,4);i<o;++i)t[r+i]=e>>>8*(n?i:3-i)&255}function N(t,e,r,n,i,o){if(r+n>t.length)throw new RangeError("Index out of range")
if(r<0)throw new RangeError("Index out of range")}function D(t,e,r,n,o){return o||N(t,0,r,4),i.write(t,e,r,n,23,4),r+4}function j(t,e,r,n,o){return o||N(t,0,r,8),i.write(t,e,r,n,52,8),r+8}u.prototype.slice=function(t,e){var r,n=this.length
if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t),u.TYPED_ARRAY_SUPPORT)(r=this.subarray(t,e)).__proto__=u.prototype
else{var i=e-t
r=new u(i,void 0)
for(var o=0;o<i;++o)r[o]=this[o+t]}return r},u.prototype.readUIntLE=function(t,e,r){t|=0,e|=0,r||B(t,e,this.length)
for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i
return n},u.prototype.readUIntBE=function(t,e,r){t|=0,e|=0,r||B(t,e,this.length)
for(var n=this[t+--e],i=1;e>0&&(i*=256);)n+=this[t+--e]*i
return n},u.prototype.readUInt8=function(t,e){return e||B(t,1,this.length),this[t]},u.prototype.readUInt16LE=function(t,e){return e||B(t,2,this.length),this[t]|this[t+1]<<8},u.prototype.readUInt16BE=function(t,e){return e||B(t,2,this.length),this[t]<<8|this[t+1]},u.prototype.readUInt32LE=function(t,e){return e||B(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},u.prototype.readUInt32BE=function(t,e){return e||B(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},u.prototype.readIntLE=function(t,e,r){t|=0,e|=0,r||B(t,e,this.length)
for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i
return n>=(i*=128)&&(n-=Math.pow(2,8*e)),n},u.prototype.readIntBE=function(t,e,r){t|=0,e|=0,r||B(t,e,this.length)
for(var n=e,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i
return o>=(i*=128)&&(o-=Math.pow(2,8*e)),o},u.prototype.readInt8=function(t,e){return e||B(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},u.prototype.readInt16LE=function(t,e){e||B(t,2,this.length)
var r=this[t]|this[t+1]<<8
return 32768&r?4294901760|r:r},u.prototype.readInt16BE=function(t,e){e||B(t,2,this.length)
var r=this[t+1]|this[t]<<8
return 32768&r?4294901760|r:r},u.prototype.readInt32LE=function(t,e){return e||B(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},u.prototype.readInt32BE=function(t,e){return e||B(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},u.prototype.readFloatLE=function(t,e){return e||B(t,4,this.length),i.read(this,t,!0,23,4)},u.prototype.readFloatBE=function(t,e){return e||B(t,4,this.length),i.read(this,t,!1,23,4)},u.prototype.readDoubleLE=function(t,e){return e||B(t,8,this.length),i.read(this,t,!0,52,8)},u.prototype.readDoubleBE=function(t,e){return e||B(t,8,this.length),i.read(this,t,!1,52,8)},u.prototype.writeUIntLE=function(t,e,r,n){t=+t,e|=0,r|=0,n||O(this,t,e,r,Math.pow(2,8*r)-1,0)
var i=1,o=0
for(this[e]=255&t;++o<r&&(i*=256);)this[e+o]=t/i&255
return e+r},u.prototype.writeUIntBE=function(t,e,r,n){t=+t,e|=0,r|=0,n||O(this,t,e,r,Math.pow(2,8*r)-1,0)
var i=r-1,o=1
for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255
return e+r},u.prototype.writeUInt8=function(t,e,r){return t=+t,e|=0,r||O(this,t,e,1,255,0),u.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},u.prototype.writeUInt16LE=function(t,e,r){return t=+t,e|=0,r||O(this,t,e,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):P(this,t,e,!0),e+2},u.prototype.writeUInt16BE=function(t,e,r){return t=+t,e|=0,r||O(this,t,e,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):P(this,t,e,!1),e+2},u.prototype.writeUInt32LE=function(t,e,r){return t=+t,e|=0,r||O(this,t,e,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):L(this,t,e,!0),e+4},u.prototype.writeUInt32BE=function(t,e,r){return t=+t,e|=0,r||O(this,t,e,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):L(this,t,e,!1),e+4},u.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1)
O(this,t,e,r,i-1,-i)}var o=0,a=1,s=0
for(this[e]=255&t;++o<r&&(a*=256);)t<0&&0===s&&0!==this[e+o-1]&&(s=1),this[e+o]=(t/a>>0)-s&255
return e+r},u.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1)
O(this,t,e,r,i-1,-i)}var o=r-1,a=1,s=0
for(this[e+o]=255&t;--o>=0&&(a*=256);)t<0&&0===s&&0!==this[e+o+1]&&(s=1),this[e+o]=(t/a>>0)-s&255
return e+r},u.prototype.writeInt8=function(t,e,r){return t=+t,e|=0,r||O(this,t,e,1,127,-128),u.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},u.prototype.writeInt16LE=function(t,e,r){return t=+t,e|=0,r||O(this,t,e,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):P(this,t,e,!0),e+2},u.prototype.writeInt16BE=function(t,e,r){return t=+t,e|=0,r||O(this,t,e,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):P(this,t,e,!1),e+2},u.prototype.writeInt32LE=function(t,e,r){return t=+t,e|=0,r||O(this,t,e,4,2147483647,-2147483648),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):L(this,t,e,!0),e+4},u.prototype.writeInt32BE=function(t,e,r){return t=+t,e|=0,r||O(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):L(this,t,e,!1),e+4},u.prototype.writeFloatLE=function(t,e,r){return D(this,t,e,!0,r)},u.prototype.writeFloatBE=function(t,e,r){return D(this,t,e,!1,r)},u.prototype.writeDoubleLE=function(t,e,r){return j(this,t,e,!0,r)},u.prototype.writeDoubleBE=function(t,e,r){return j(this,t,e,!1,r)},u.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0
if(0===t.length||0===this.length)return 0
if(e<0)throw new RangeError("targetStart out of bounds")
if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds")
if(n<0)throw new RangeError("sourceEnd out of bounds")
n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r)
var i,o=n-r
if(this===t&&r<e&&e<n)for(i=o-1;i>=0;--i)t[i+e]=this[i+r]
else if(o<1e3||!u.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+e]=this[i+r]
else Uint8Array.prototype.set.call(t,this.subarray(r,r+o),e)
return o},u.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===t.length){var i=t.charCodeAt(0)
i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string")
if("string"==typeof n&&!u.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255)
if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index")
if(r<=e)return this
var o
if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(o=e;o<r;++o)this[o]=t
else{var a=u.isBuffer(t)?t:H(new u(t,n).toString()),s=a.length
for(o=0;o<r-e;++o)this[o+e]=a[o%s]}return this}
var U=/[^+\/0-9A-Za-z-_]/g
function H(t,e){var r
e=e||1/0
for(var n=t.length,i=null,o=[],a=0;a<n;++a){if((r=t.charCodeAt(a))>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&o.push(239,191,189)
continue}if(a+1===n){(e-=3)>-1&&o.push(239,191,189)
continue}i=r
continue}if(r<56320){(e-=3)>-1&&o.push(239,191,189),i=r
continue}r=65536+(i-55296<<10|r-56320)}else i&&(e-=3)>-1&&o.push(239,191,189)
if(i=null,r<128){if((e-=1)<0)break
o.push(r)}else if(r<2048){if((e-=2)<0)break
o.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break
o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point")
if((e-=4)<0)break
o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function q(t){return n.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(U,"")).length<2)return""
for(;t.length%4!=0;)t+="="
return t}(t))}function F(t,e,r,n){for(var i=0;i<n&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i]
return i}},3013:(t,e,r)=>{var n=r(8850).Buffer,i=r(7245).Transform,o=r(9602).s
function a(t){i.call(this),this.hashMode="string"==typeof t,this.hashMode?this[t]=this._finalOrDigest:this.final=this._finalOrDigest,this._final&&(this.__final=this._final,this._final=null),this._decoder=null,this._encoding=null}r(1736)(a,i),a.prototype.update=function(t,e,r){"string"==typeof t&&(t=n.from(t,e))
var i=this._update(t)
return this.hashMode?this:(r&&(i=this._toString(i,r)),i)},a.prototype.setAutoPadding=function(){},a.prototype.getAuthTag=function(){throw new Error("trying to get auth tag in unsupported state")},a.prototype.setAuthTag=function(){throw new Error("trying to set auth tag in unsupported state")},a.prototype.setAAD=function(){throw new Error("trying to set aad in unsupported state")},a.prototype._transform=function(t,e,r){var n
try{this.hashMode?this._update(t):this.push(this._update(t))}catch(t){n=t}finally{r(n)}},a.prototype._flush=function(t){var e
try{this.push(this.__final())}catch(t){e=t}t(e)},a.prototype._finalOrDigest=function(t){var e=this.__final()||n.alloc(0)
return t&&(e=this._toString(e,t,!0)),e},a.prototype._toString=function(t,e,r){if(this._decoder||(this._decoder=new o(e),this._encoding=e),this._encoding!==e)throw new Error("can't switch encodings")
var n=this._decoder.write(t)
return r&&(n+=this._decoder.end()),n},t.exports=a},5102:(t,e,r)=>{var n=r(6597),i=r(1734)
t.exports=function(t){return new a(t)}
var o={secp256k1:{name:"secp256k1",byteLength:32},secp224r1:{name:"p224",byteLength:28},prime256v1:{name:"p256",byteLength:32},prime192v1:{name:"p192",byteLength:24},ed25519:{name:"ed25519",byteLength:32},secp384r1:{name:"p384",byteLength:48},secp521r1:{name:"p521",byteLength:66}}
function a(t){this.curveType=o[t],this.curveType||(this.curveType={name:t}),this.curve=new n.ec(this.curveType.name),this.keys=void 0}function s(t,e,r){Array.isArray(t)||(t=t.toArray())
var n=new Buffer(t)
if(r&&n.length<r){var i=new Buffer(r-n.length)
i.fill(0),n=Buffer.concat([i,n])}return e?n.toString(e):n}o.p224=o.secp224r1,o.p256=o.secp256r1=o.prime256v1,o.p192=o.secp192r1=o.prime192v1,o.p384=o.secp384r1,o.p521=o.secp521r1,a.prototype.generateKeys=function(t,e){return this.keys=this.curve.genKeyPair(),this.getPublicKey(t,e)},a.prototype.computeSecret=function(t,e,r){return e=e||"utf8",Buffer.isBuffer(t)||(t=new Buffer(t,e)),s(this.curve.keyFromPublic(t).getPublic().mul(this.keys.getPrivate()).getX(),r,this.curveType.byteLength)},a.prototype.getPublicKey=function(t,e){var r=this.keys.getPublic("compressed"===e,!0)
return"hybrid"===e&&(r[r.length-1]%2?r[0]=7:r[0]=6),s(r,t)},a.prototype.getPrivateKey=function(t){return s(this.keys.getPrivate(),t)},a.prototype.setPublicKey=function(t,e){return e=e||"utf8",Buffer.isBuffer(t)||(t=new Buffer(t,e)),this.keys._importPublic(t),this},a.prototype.setPrivateKey=function(t,e){e=e||"utf8",Buffer.isBuffer(t)||(t=new Buffer(t,e))
var r=new i(t)
return r=r.toString(16),this.keys=this.curve.genKeyPair(),this.keys._importPrivate(r),this}},5866:(t,e,r)=>{"use strict"
var n=r(1736),i=r(807),o=r(6707),a=r(1708),s=r(3013)
function u(t){s.call(this,"digest"),this._hash=t}n(u,s),u.prototype._update=function(t){this._hash.update(t)},u.prototype._final=function(){return this._hash.digest()},t.exports=function(t){return"md5"===(t=t.toLowerCase())?new i:"rmd160"===t||"ripemd160"===t?new o:new u(a(t))}},5349:(t,e,r)=>{var n=r(807)
t.exports=function(t){return(new n).update(t).digest()}},4424:(t,e,r)=>{"use strict"
var n=r(1736),i=r(9956),o=r(3013),a=r(8850).Buffer,s=r(5349),u=r(6707),c=r(1708),f=a.alloc(128)
function h(t,e){o.call(this,"digest"),"string"==typeof e&&(e=a.from(e))
var r="sha512"===t||"sha384"===t?128:64
this._alg=t,this._key=e,e.length>r?e=("rmd160"===t?new u:c(t)).update(e).digest():e.length<r&&(e=a.concat([e,f],r))
for(var n=this._ipad=a.allocUnsafe(r),i=this._opad=a.allocUnsafe(r),s=0;s<r;s++)n[s]=54^e[s],i[s]=92^e[s]
this._hash="rmd160"===t?new u:c(t),this._hash.update(n)}n(h,o),h.prototype._update=function(t){this._hash.update(t)},h.prototype._final=function(){var t=this._hash.digest()
return("rmd160"===this._alg?new u:c(this._alg)).update(this._opad).update(t).digest()},t.exports=function(t,e){return"rmd160"===(t=t.toLowerCase())||"ripemd160"===t?new h("rmd160",e):"md5"===t?new i(s,e):new h(t,e)}},9956:(t,e,r)=>{"use strict"
var n=r(1736),i=r(8850).Buffer,o=r(3013),a=i.alloc(128),s=64
function u(t,e){o.call(this,"digest"),"string"==typeof e&&(e=i.from(e)),this._alg=t,this._key=e,e.length>s?e=t(e):e.length<s&&(e=i.concat([e,a],s))
for(var r=this._ipad=i.allocUnsafe(s),n=this._opad=i.allocUnsafe(s),u=0;u<s;u++)r[u]=54^e[u],n[u]=92^e[u]
this._hash=[r]}n(u,o),u.prototype._update=function(t){this._hash.push(t)},u.prototype._final=function(){var t=this._alg(i.concat(this._hash))
return this._alg(i.concat([this._opad,t]))},t.exports=u},4293:(t,e,r)=>{"use strict"
e.randomBytes=e.rng=e.pseudoRandomBytes=e.prng=r(5010),e.createHash=e.Hash=r(5866),e.createHmac=e.Hmac=r(4424)
var n=r(6561),i=Object.keys(n),o=["sha1","sha224","sha256","sha384","sha512","md5","rmd160"].concat(i)
e.getHashes=function(){return o}
var a=r(4192)
e.pbkdf2=a.pbkdf2,e.pbkdf2Sync=a.pbkdf2Sync
var s=r(6805)
e.Cipher=s.Cipher,e.createCipher=s.createCipher,e.Cipheriv=s.Cipheriv,e.createCipheriv=s.createCipheriv,e.Decipher=s.Decipher,e.createDecipher=s.createDecipher,e.Decipheriv=s.Decipheriv,e.createDecipheriv=s.createDecipheriv,e.getCiphers=s.getCiphers,e.listCiphers=s.listCiphers
var u=r(8333)
e.DiffieHellmanGroup=u.DiffieHellmanGroup,e.createDiffieHellmanGroup=u.createDiffieHellmanGroup,e.getDiffieHellman=u.getDiffieHellman,e.createDiffieHellman=u.createDiffieHellman,e.DiffieHellman=u.DiffieHellman
var c=r(9527)
e.createSign=c.createSign,e.Sign=c.Sign,e.createVerify=c.createVerify,e.Verify=c.Verify,e.createECDH=r(5102)
var f=r(6991)
e.publicEncrypt=f.publicEncrypt,e.privateEncrypt=f.privateEncrypt,e.publicDecrypt=f.publicDecrypt,e.privateDecrypt=f.privateDecrypt
var h=r(6509)
e.randomFill=h.randomFill,e.randomFillSync=h.randomFillSync,e.createCredentials=function(){throw new Error(["sorry, createCredentials is not implemented yet","we accept pull requests","https://github.com/crypto-browserify/crypto-browserify"].join("\n"))},e.constants={DH_CHECK_P_NOT_SAFE_PRIME:2,DH_CHECK_P_NOT_PRIME:1,DH_UNABLE_TO_CHECK_GENERATOR:4,DH_NOT_SUITABLE_GENERATOR:8,NPN_ENABLED:1,ALPN_ENABLED:1,RSA_PKCS1_PADDING:1,RSA_SSLV23_PADDING:2,RSA_NO_PADDING:3,RSA_PKCS1_OAEP_PADDING:4,RSA_X931_PADDING:5,RSA_PKCS1_PSS_PADDING:6,POINT_CONVERSION_COMPRESSED:2,POINT_CONVERSION_UNCOMPRESSED:4,POINT_CONVERSION_HYBRID:6}},5626:(t,e,r)=>{"use strict"
e.utils=r(3349),e.Cipher=r(9591),e.DES=r(3049),e.CBC=r(4375),e.EDE=r(9413)},4375:(t,e,r)=>{"use strict"
var n=r(4504),i=r(1736),o={}
function a(t){n.equal(t.length,8,"Invalid IV length"),this.iv=new Array(8)
for(var e=0;e<this.iv.length;e++)this.iv[e]=t[e]}e.instantiate=function(t){function e(e){t.call(this,e),this._cbcInit()}i(e,t)
for(var r=Object.keys(o),n=0;n<r.length;n++){var a=r[n]
e.prototype[a]=o[a]}return e.create=function(t){return new e(t)},e},o._cbcInit=function(){var t=new a(this.options.iv)
this._cbcState=t},o._update=function(t,e,r,n){var i=this._cbcState,o=this.constructor.super_.prototype,a=i.iv
if("encrypt"===this.type){for(var s=0;s<this.blockSize;s++)a[s]^=t[e+s]
for(o._update.call(this,a,0,r,n),s=0;s<this.blockSize;s++)a[s]=r[n+s]}else{for(o._update.call(this,t,e,r,n),s=0;s<this.blockSize;s++)r[n+s]^=a[s]
for(s=0;s<this.blockSize;s++)a[s]=t[e+s]}}},9591:(t,e,r)=>{"use strict"
var n=r(4504)
function i(t){this.options=t,this.type=this.options.type,this.blockSize=8,this._init(),this.buffer=new Array(this.blockSize),this.bufferOff=0}t.exports=i,i.prototype._init=function(){},i.prototype.update=function(t){return 0===t.length?[]:"decrypt"===this.type?this._updateDecrypt(t):this._updateEncrypt(t)},i.prototype._buffer=function(t,e){for(var r=Math.min(this.buffer.length-this.bufferOff,t.length-e),n=0;n<r;n++)this.buffer[this.bufferOff+n]=t[e+n]
return this.bufferOff+=r,r},i.prototype._flushBuffer=function(t,e){return this._update(this.buffer,0,t,e),this.bufferOff=0,this.blockSize},i.prototype._updateEncrypt=function(t){var e=0,r=0,n=(this.bufferOff+t.length)/this.blockSize|0,i=new Array(n*this.blockSize)
0!==this.bufferOff&&(e+=this._buffer(t,e),this.bufferOff===this.buffer.length&&(r+=this._flushBuffer(i,r)))
for(var o=t.length-(t.length-e)%this.blockSize;e<o;e+=this.blockSize)this._update(t,e,i,r),r+=this.blockSize
for(;e<t.length;e++,this.bufferOff++)this.buffer[this.bufferOff]=t[e]
return i},i.prototype._updateDecrypt=function(t){for(var e=0,r=0,n=Math.ceil((this.bufferOff+t.length)/this.blockSize)-1,i=new Array(n*this.blockSize);n>0;n--)e+=this._buffer(t,e),r+=this._flushBuffer(i,r)
return e+=this._buffer(t,e),i},i.prototype.final=function(t){var e,r
return t&&(e=this.update(t)),r="encrypt"===this.type?this._finalEncrypt():this._finalDecrypt(),e?e.concat(r):r},i.prototype._pad=function(t,e){if(0===e)return!1
for(;e<t.length;)t[e++]=0
return!0},i.prototype._finalEncrypt=function(){if(!this._pad(this.buffer,this.bufferOff))return[]
var t=new Array(this.blockSize)
return this._update(this.buffer,0,t,0),t},i.prototype._unpad=function(t){return t},i.prototype._finalDecrypt=function(){n.equal(this.bufferOff,this.blockSize,"Not enough data to decrypt")
var t=new Array(this.blockSize)
return this._flushBuffer(t,0),this._unpad(t)}},3049:(t,e,r)=>{"use strict"
var n=r(4504),i=r(1736),o=r(3349),a=r(9591)
function s(){this.tmp=new Array(2),this.keys=null}function u(t){a.call(this,t)
var e=new s
this._desState=e,this.deriveKeys(e,t.key)}i(u,a),t.exports=u,u.create=function(t){return new u(t)}
var c=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1]
u.prototype.deriveKeys=function(t,e){t.keys=new Array(32),n.equal(e.length,this.blockSize,"Invalid key length")
var r=o.readUInt32BE(e,0),i=o.readUInt32BE(e,4)
o.pc1(r,i,t.tmp,0),r=t.tmp[0],i=t.tmp[1]
for(var a=0;a<t.keys.length;a+=2){var s=c[a>>>1]
r=o.r28shl(r,s),i=o.r28shl(i,s),o.pc2(r,i,t.keys,a)}},u.prototype._update=function(t,e,r,n){var i=this._desState,a=o.readUInt32BE(t,e),s=o.readUInt32BE(t,e+4)
o.ip(a,s,i.tmp,0),a=i.tmp[0],s=i.tmp[1],"encrypt"===this.type?this._encrypt(i,a,s,i.tmp,0):this._decrypt(i,a,s,i.tmp,0),a=i.tmp[0],s=i.tmp[1],o.writeUInt32BE(r,a,n),o.writeUInt32BE(r,s,n+4)},u.prototype._pad=function(t,e){for(var r=t.length-e,n=e;n<t.length;n++)t[n]=r
return!0},u.prototype._unpad=function(t){for(var e=t[t.length-1],r=t.length-e;r<t.length;r++)n.equal(t[r],e)
return t.slice(0,t.length-e)},u.prototype._encrypt=function(t,e,r,n,i){for(var a=e,s=r,u=0;u<t.keys.length;u+=2){var c=t.keys[u],f=t.keys[u+1]
o.expand(s,t.tmp,0),c^=t.tmp[0],f^=t.tmp[1]
var h=o.substitute(c,f),l=s
s=(a^o.permute(h))>>>0,a=l}o.rip(s,a,n,i)},u.prototype._decrypt=function(t,e,r,n,i){for(var a=r,s=e,u=t.keys.length-2;u>=0;u-=2){var c=t.keys[u],f=t.keys[u+1]
o.expand(a,t.tmp,0),c^=t.tmp[0],f^=t.tmp[1]
var h=o.substitute(c,f),l=a
a=(s^o.permute(h))>>>0,s=l}o.rip(a,s,n,i)}},9413:(t,e,r)=>{"use strict"
var n=r(4504),i=r(1736),o=r(9591),a=r(3049)
function s(t,e){n.equal(e.length,24,"Invalid key length")
var r=e.slice(0,8),i=e.slice(8,16),o=e.slice(16,24)
this.ciphers="encrypt"===t?[a.create({type:"encrypt",key:r}),a.create({type:"decrypt",key:i}),a.create({type:"encrypt",key:o})]:[a.create({type:"decrypt",key:o}),a.create({type:"encrypt",key:i}),a.create({type:"decrypt",key:r})]}function u(t){o.call(this,t)
var e=new s(this.type,this.options.key)
this._edeState=e}i(u,o),t.exports=u,u.create=function(t){return new u(t)},u.prototype._update=function(t,e,r,n){var i=this._edeState
i.ciphers[0]._update(t,e,r,n),i.ciphers[1]._update(r,n,r,n),i.ciphers[2]._update(r,n,r,n)},u.prototype._pad=a.prototype._pad,u.prototype._unpad=a.prototype._unpad},3349:(t,e)=>{"use strict"
e.readUInt32BE=function(t,e){return(t[0+e]<<24|t[1+e]<<16|t[2+e]<<8|t[3+e])>>>0},e.writeUInt32BE=function(t,e,r){t[0+r]=e>>>24,t[1+r]=e>>>16&255,t[2+r]=e>>>8&255,t[3+r]=255&e},e.ip=function(t,e,r,n){for(var i=0,o=0,a=6;a>=0;a-=2){for(var s=0;s<=24;s+=8)i<<=1,i|=e>>>s+a&1
for(s=0;s<=24;s+=8)i<<=1,i|=t>>>s+a&1}for(a=6;a>=0;a-=2){for(s=1;s<=25;s+=8)o<<=1,o|=e>>>s+a&1
for(s=1;s<=25;s+=8)o<<=1,o|=t>>>s+a&1}r[n+0]=i>>>0,r[n+1]=o>>>0},e.rip=function(t,e,r,n){for(var i=0,o=0,a=0;a<4;a++)for(var s=24;s>=0;s-=8)i<<=1,i|=e>>>s+a&1,i<<=1,i|=t>>>s+a&1
for(a=4;a<8;a++)for(s=24;s>=0;s-=8)o<<=1,o|=e>>>s+a&1,o<<=1,o|=t>>>s+a&1
r[n+0]=i>>>0,r[n+1]=o>>>0},e.pc1=function(t,e,r,n){for(var i=0,o=0,a=7;a>=5;a--){for(var s=0;s<=24;s+=8)i<<=1,i|=e>>s+a&1
for(s=0;s<=24;s+=8)i<<=1,i|=t>>s+a&1}for(s=0;s<=24;s+=8)i<<=1,i|=e>>s+a&1
for(a=1;a<=3;a++){for(s=0;s<=24;s+=8)o<<=1,o|=e>>s+a&1
for(s=0;s<=24;s+=8)o<<=1,o|=t>>s+a&1}for(s=0;s<=24;s+=8)o<<=1,o|=t>>s+a&1
r[n+0]=i>>>0,r[n+1]=o>>>0},e.r28shl=function(t,e){return t<<e&268435455|t>>>28-e}
var r=[14,11,17,4,27,23,25,0,13,22,7,18,5,9,16,24,2,20,12,21,1,8,15,26,15,4,25,19,9,1,26,16,5,11,23,8,12,7,17,0,22,3,10,14,6,20,27,24]
e.pc2=function(t,e,n,i){for(var o=0,a=0,s=r.length>>>1,u=0;u<s;u++)o<<=1,o|=t>>>r[u]&1
for(u=s;u<r.length;u++)a<<=1,a|=e>>>r[u]&1
n[i+0]=o>>>0,n[i+1]=a>>>0},e.expand=function(t,e,r){var n=0,i=0
n=(1&t)<<5|t>>>27
for(var o=23;o>=15;o-=4)n<<=6,n|=t>>>o&63
for(o=11;o>=3;o-=4)i|=t>>>o&63,i<<=6
i|=(31&t)<<1|t>>>31,e[r+0]=n>>>0,e[r+1]=i>>>0}
var n=[14,0,4,15,13,7,1,4,2,14,15,2,11,13,8,1,3,10,10,6,6,12,12,11,5,9,9,5,0,3,7,8,4,15,1,12,14,8,8,2,13,4,6,9,2,1,11,7,15,5,12,11,9,3,7,14,3,10,10,0,5,6,0,13,15,3,1,13,8,4,14,7,6,15,11,2,3,8,4,14,9,12,7,0,2,1,13,10,12,6,0,9,5,11,10,5,0,13,14,8,7,10,11,1,10,3,4,15,13,4,1,2,5,11,8,6,12,7,6,12,9,0,3,5,2,14,15,9,10,13,0,7,9,0,14,9,6,3,3,4,15,6,5,10,1,2,13,8,12,5,7,14,11,12,4,11,2,15,8,1,13,1,6,10,4,13,9,0,8,6,15,9,3,8,0,7,11,4,1,15,2,14,12,3,5,11,10,5,14,2,7,12,7,13,13,8,14,11,3,5,0,6,6,15,9,0,10,3,1,4,2,7,8,2,5,12,11,1,12,10,4,14,15,9,10,3,6,15,9,0,0,6,12,10,11,1,7,13,13,8,15,9,1,4,3,5,14,11,5,12,2,7,8,2,4,14,2,14,12,11,4,2,1,12,7,4,10,7,11,13,6,1,8,5,5,0,3,15,15,10,13,3,0,9,14,8,9,6,4,11,2,8,1,12,11,7,10,1,13,14,7,2,8,13,15,6,9,15,12,0,5,9,6,10,3,4,0,5,14,3,12,10,1,15,10,4,15,2,9,7,2,12,6,9,8,5,0,6,13,1,3,13,4,14,14,0,7,11,5,3,11,8,9,4,14,3,15,2,5,12,2,9,8,5,12,15,3,10,7,11,0,14,4,1,10,7,1,6,13,0,11,8,6,13,4,13,11,0,2,11,14,7,15,4,0,9,8,1,13,10,3,14,12,3,9,5,7,12,5,2,10,15,6,8,1,6,1,6,4,11,11,13,13,8,12,1,3,4,7,10,14,7,10,9,15,5,6,0,8,15,0,14,5,2,9,3,2,12,13,1,2,15,8,13,4,8,6,10,15,3,11,7,1,4,10,12,9,5,3,6,14,11,5,0,0,14,12,9,7,2,7,2,11,1,4,14,1,7,9,4,12,10,14,8,2,13,0,15,6,12,10,9,13,0,15,3,3,5,5,6,8,11]
e.substitute=function(t,e){for(var r=0,i=0;i<4;i++)r<<=4,r|=n[64*i+(t>>>18-6*i&63)]
for(i=0;i<4;i++)r<<=4,r|=n[256+64*i+(e>>>18-6*i&63)]
return r>>>0}
var i=[16,25,12,11,3,20,4,15,31,17,9,6,27,14,1,22,30,24,8,18,0,5,29,23,13,19,2,26,10,21,28,7]
e.permute=function(t){for(var e=0,r=0;r<i.length;r++)e<<=1,e|=t>>>i[r]&1
return e>>>0},e.padSplit=function(t,e,r){for(var n=t.toString(2);n.length<e;)n="0"+n
for(var i=[],o=0;o<e;o+=r)i.push(n.slice(o,o+r))
return i.join(" ")}},8333:(t,e,r)=>{var n=r(8557),i=r(9799),o=r(1592),a={binary:!0,hex:!0,base64:!0}
e.DiffieHellmanGroup=e.createDiffieHellmanGroup=e.getDiffieHellman=function(t){var e=new Buffer(i[t].prime,"hex"),r=new Buffer(i[t].gen,"hex")
return new o(e,r)},e.createDiffieHellman=e.DiffieHellman=function t(e,r,i,s){return Buffer.isBuffer(r)||void 0===a[r]?t(e,"binary",r,i):(r=r||"binary",s=s||"binary",i=i||new Buffer([2]),Buffer.isBuffer(i)||(i=new Buffer(i,s)),"number"==typeof e?new o(n(e,i),i,!0):(Buffer.isBuffer(e)||(e=new Buffer(e,r)),new o(e,i,!0)))}},1592:(t,e,r)=>{var n=r(1734),i=new(r(137)),o=new n(24),a=new n(11),s=new n(10),u=new n(3),c=new n(7),f=r(8557),h=r(5010)
function l(t,e){return e=e||"utf8",Buffer.isBuffer(t)||(t=new Buffer(t,e)),this._pub=new n(t),this}function d(t,e){return e=e||"utf8",Buffer.isBuffer(t)||(t=new Buffer(t,e)),this._priv=new n(t),this}t.exports=b
var p={}
function b(t,e,r){this.setGenerator(e),this.__prime=new n(t),this._prime=n.mont(this.__prime),this._primeLen=t.length,this._pub=void 0,this._priv=void 0,this._primeCode=void 0,r?(this.setPublicKey=l,this.setPrivateKey=d):this._primeCode=8}function m(t,e){var r=new Buffer(t.toArray())
return e?r.toString(e):r}Object.defineProperty(b.prototype,"verifyError",{enumerable:!0,get:function(){return"number"!=typeof this._primeCode&&(this._primeCode=function(t,e){var r=e.toString("hex"),n=[r,t.toString(16)].join("_")
if(n in p)return p[n]
var h,l=0
if(t.isEven()||!f.simpleSieve||!f.fermatTest(t)||!i.test(t))return l+=1,l+="02"===r||"05"===r?8:4,p[n]=l,l
switch(i.test(t.shrn(1))||(l+=2),r){case"02":t.mod(o).cmp(a)&&(l+=8)
break
case"05":(h=t.mod(s)).cmp(u)&&h.cmp(c)&&(l+=8)
break
default:l+=4}return p[n]=l,l}(this.__prime,this.__gen)),this._primeCode}}),b.prototype.generateKeys=function(){return this._priv||(this._priv=new n(h(this._primeLen))),this._pub=this._gen.toRed(this._prime).redPow(this._priv).fromRed(),this.getPublicKey()},b.prototype.computeSecret=function(t){var e=(t=(t=new n(t)).toRed(this._prime)).redPow(this._priv).fromRed(),r=new Buffer(e.toArray()),i=this.getPrime()
if(r.length<i.length){var o=new Buffer(i.length-r.length)
o.fill(0),r=Buffer.concat([o,r])}return r},b.prototype.getPublicKey=function(t){return m(this._pub,t)},b.prototype.getPrivateKey=function(t){return m(this._priv,t)},b.prototype.getPrime=function(t){return m(this.__prime,t)},b.prototype.getGenerator=function(t){return m(this._gen,t)},b.prototype.setGenerator=function(t,e){return e=e||"utf8",Buffer.isBuffer(t)||(t=new Buffer(t,e)),this.__gen=t,this._gen=new n(t),this}},8557:(t,e,r)=>{var n=r(5010)
t.exports=v,v.simpleSieve=b,v.fermatTest=m
var i=r(1734),o=new i(24),a=new(r(137)),s=new i(1),u=new i(2),c=new i(5),f=(new i(16),new i(8),new i(10)),h=new i(3),l=(new i(7),new i(11)),d=new i(4),p=(new i(12),null)
function b(t){for(var e=function(){if(null!==p)return p
var t=[]
t[0]=2
for(var e=1,r=3;r<1048576;r+=2){for(var n=Math.ceil(Math.sqrt(r)),i=0;i<e&&t[i]<=n&&r%t[i]!=0;i++);e!==i&&t[i]<=n||(t[e++]=r)}return p=t,t}(),r=0;r<e.length;r++)if(0===t.modn(e[r]))return 0===t.cmpn(e[r])
return!0}function m(t){var e=i.mont(t)
return 0===u.toRed(e).redPow(t.subn(1)).fromRed().cmpn(1)}function v(t,e){if(t<16)return new i(2===e||5===e?[140,123]:[140,39])
var r,p
for(e=new i(e);;){for(r=new i(n(Math.ceil(t/8)));r.bitLength()>t;)r.ishrn(1)
if(r.isEven()&&r.iadd(s),r.testn(1)||r.iadd(u),e.cmp(u)){if(!e.cmp(c))for(;r.mod(f).cmp(h);)r.iadd(d)}else for(;r.mod(o).cmp(l);)r.iadd(d)
if(b(p=r.shrn(1))&&b(r)&&m(p)&&m(r)&&a.test(p)&&a.test(r))return r}}},6597:(t,e,r)=>{"use strict"
var n=e
n.version=r(8597).i8,n.utils=r(7528),n.rand=r(2202),n.curve=r(6063),n.curves=r(506),n.ec=r(8320),n.eddsa=r(8027)},1249:(t,e,r)=>{"use strict"
var n=r(1734),i=r(7528),o=i.getNAF,a=i.getJSF,s=i.assert
function u(t,e){this.type=t,this.p=new n(e.p,16),this.red=e.prime?n.red(e.prime):n.mont(this.p),this.zero=new n(0).toRed(this.red),this.one=new n(1).toRed(this.red),this.two=new n(2).toRed(this.red),this.n=e.n&&new n(e.n,16),this.g=e.g&&this.pointFromJSON(e.g,e.gRed),this._wnafT1=new Array(4),this._wnafT2=new Array(4),this._wnafT3=new Array(4),this._wnafT4=new Array(4),this._bitLength=this.n?this.n.bitLength():0
var r=this.n&&this.p.div(this.n)
!r||r.cmpn(100)>0?this.redN=null:(this._maxwellTrick=!0,this.redN=this.n.toRed(this.red))}function c(t,e){this.curve=t,this.type=e,this.precomputed=null}t.exports=u,u.prototype.point=function(){throw new Error("Not implemented")},u.prototype.validate=function(){throw new Error("Not implemented")},u.prototype._fixedNafMul=function(t,e){s(t.precomputed)
var r=t._getDoubles(),n=o(e,1,this._bitLength),i=(1<<r.step+1)-(r.step%2==0?2:1)
i/=3
var a,u,c=[]
for(a=0;a<n.length;a+=r.step){u=0
for(var f=a+r.step-1;f>=a;f--)u=(u<<1)+n[f]
c.push(u)}for(var h=this.jpoint(null,null,null),l=this.jpoint(null,null,null),d=i;d>0;d--){for(a=0;a<c.length;a++)(u=c[a])===d?l=l.mixedAdd(r.points[a]):u===-d&&(l=l.mixedAdd(r.points[a].neg()))
h=h.add(l)}return h.toP()},u.prototype._wnafMul=function(t,e){var r=4,n=t._getNAFPoints(r)
r=n.wnd
for(var i=n.points,a=o(e,r,this._bitLength),u=this.jpoint(null,null,null),c=a.length-1;c>=0;c--){for(var f=0;c>=0&&0===a[c];c--)f++
if(c>=0&&f++,u=u.dblp(f),c<0)break
var h=a[c]
s(0!==h),u="affine"===t.type?h>0?u.mixedAdd(i[h-1>>1]):u.mixedAdd(i[-h-1>>1].neg()):h>0?u.add(i[h-1>>1]):u.add(i[-h-1>>1].neg())}return"affine"===t.type?u.toP():u},u.prototype._wnafMulAdd=function(t,e,r,n,i){var s,u,c,f=this._wnafT1,h=this._wnafT2,l=this._wnafT3,d=0
for(s=0;s<n;s++){var p=(c=e[s])._getNAFPoints(t)
f[s]=p.wnd,h[s]=p.points}for(s=n-1;s>=1;s-=2){var b=s-1,m=s
if(1===f[b]&&1===f[m]){var v=[e[b],null,null,e[m]]
0===e[b].y.cmp(e[m].y)?(v[1]=e[b].add(e[m]),v[2]=e[b].toJ().mixedAdd(e[m].neg())):0===e[b].y.cmp(e[m].y.redNeg())?(v[1]=e[b].toJ().mixedAdd(e[m]),v[2]=e[b].add(e[m].neg())):(v[1]=e[b].toJ().mixedAdd(e[m]),v[2]=e[b].toJ().mixedAdd(e[m].neg()))
var g=[-3,-1,-5,-7,0,7,5,1,3],y=a(r[b],r[m])
for(d=Math.max(y[0].length,d),l[b]=new Array(d),l[m]=new Array(d),u=0;u<d;u++){var w=0|y[0][u],_=0|y[1][u]
l[b][u]=g[3*(w+1)+(_+1)],l[m][u]=0,h[b]=v}}else l[b]=o(r[b],f[b],this._bitLength),l[m]=o(r[m],f[m],this._bitLength),d=Math.max(l[b].length,d),d=Math.max(l[m].length,d)}var M=this.jpoint(null,null,null),S=this._wnafT4
for(s=d;s>=0;s--){for(var E=0;s>=0;){var k=!0
for(u=0;u<n;u++)S[u]=0|l[u][s],0!==S[u]&&(k=!1)
if(!k)break
E++,s--}if(s>=0&&E++,M=M.dblp(E),s<0)break
for(u=0;u<n;u++){var A=S[u]
0!==A&&(A>0?c=h[u][A-1>>1]:A<0&&(c=h[u][-A-1>>1].neg()),M="affine"===c.type?M.mixedAdd(c):M.add(c))}}for(s=0;s<n;s++)h[s]=null
return i?M:M.toP()},u.BasePoint=c,c.prototype.eq=function(){throw new Error("Not implemented")},c.prototype.validate=function(){return this.curve.validate(this)},u.prototype.decodePoint=function(t,e){t=i.toArray(t,e)
var r=this.p.byteLength()
if((4===t[0]||6===t[0]||7===t[0])&&t.length-1==2*r)return 6===t[0]?s(t[t.length-1]%2==0):7===t[0]&&s(t[t.length-1]%2==1),this.point(t.slice(1,1+r),t.slice(1+r,1+2*r))
if((2===t[0]||3===t[0])&&t.length-1===r)return this.pointFromX(t.slice(1,1+r),3===t[0])
throw new Error("Unknown point format")},c.prototype.encodeCompressed=function(t){return this.encode(t,!0)},c.prototype._encode=function(t){var e=this.curve.p.byteLength(),r=this.getX().toArray("be",e)
return t?[this.getY().isEven()?2:3].concat(r):[4].concat(r,this.getY().toArray("be",e))},c.prototype.encode=function(t,e){return i.encode(this._encode(e),t)},c.prototype.precompute=function(t){if(this.precomputed)return this
var e={doubles:null,naf:null,beta:null}
return e.naf=this._getNAFPoints(8),e.doubles=this._getDoubles(4,t),e.beta=this._getBeta(),this.precomputed=e,this},c.prototype._hasDoubles=function(t){if(!this.precomputed)return!1
var e=this.precomputed.doubles
return!!e&&e.points.length>=Math.ceil((t.bitLength()+1)/e.step)},c.prototype._getDoubles=function(t,e){if(this.precomputed&&this.precomputed.doubles)return this.precomputed.doubles
for(var r=[this],n=this,i=0;i<e;i+=t){for(var o=0;o<t;o++)n=n.dbl()
r.push(n)}return{step:t,points:r}},c.prototype._getNAFPoints=function(t){if(this.precomputed&&this.precomputed.naf)return this.precomputed.naf
for(var e=[this],r=(1<<t)-1,n=1===r?null:this.dbl(),i=1;i<r;i++)e[i]=e[i-1].add(n)
return{wnd:t,points:e}},c.prototype._getBeta=function(){return null},c.prototype.dblp=function(t){for(var e=this,r=0;r<t;r++)e=e.dbl()
return e}},1123:(t,e,r)=>{"use strict"
var n=r(7528),i=r(1734),o=r(1736),a=r(1249),s=n.assert
function u(t){this.twisted=1!=(0|t.a),this.mOneA=this.twisted&&-1==(0|t.a),this.extended=this.mOneA,a.call(this,"edwards",t),this.a=new i(t.a,16).umod(this.red.m),this.a=this.a.toRed(this.red),this.c=new i(t.c,16).toRed(this.red),this.c2=this.c.redSqr(),this.d=new i(t.d,16).toRed(this.red),this.dd=this.d.redAdd(this.d),s(!this.twisted||0===this.c.fromRed().cmpn(1)),this.oneC=1==(0|t.c)}function c(t,e,r,n,o){a.BasePoint.call(this,t,"projective"),null===e&&null===r&&null===n?(this.x=this.curve.zero,this.y=this.curve.one,this.z=this.curve.one,this.t=this.curve.zero,this.zOne=!0):(this.x=new i(e,16),this.y=new i(r,16),this.z=n?new i(n,16):this.curve.one,this.t=o&&new i(o,16),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.t&&!this.t.red&&(this.t=this.t.toRed(this.curve.red)),this.zOne=this.z===this.curve.one,this.curve.extended&&!this.t&&(this.t=this.x.redMul(this.y),this.zOne||(this.t=this.t.redMul(this.z.redInvm()))))}o(u,a),t.exports=u,u.prototype._mulA=function(t){return this.mOneA?t.redNeg():this.a.redMul(t)},u.prototype._mulC=function(t){return this.oneC?t:this.c.redMul(t)},u.prototype.jpoint=function(t,e,r,n){return this.point(t,e,r,n)},u.prototype.pointFromX=function(t,e){(t=new i(t,16)).red||(t=t.toRed(this.red))
var r=t.redSqr(),n=this.c2.redSub(this.a.redMul(r)),o=this.one.redSub(this.c2.redMul(this.d).redMul(r)),a=n.redMul(o.redInvm()),s=a.redSqrt()
if(0!==s.redSqr().redSub(a).cmp(this.zero))throw new Error("invalid point")
var u=s.fromRed().isOdd()
return(e&&!u||!e&&u)&&(s=s.redNeg()),this.point(t,s)},u.prototype.pointFromY=function(t,e){(t=new i(t,16)).red||(t=t.toRed(this.red))
var r=t.redSqr(),n=r.redSub(this.c2),o=r.redMul(this.d).redMul(this.c2).redSub(this.a),a=n.redMul(o.redInvm())
if(0===a.cmp(this.zero)){if(e)throw new Error("invalid point")
return this.point(this.zero,t)}var s=a.redSqrt()
if(0!==s.redSqr().redSub(a).cmp(this.zero))throw new Error("invalid point")
return s.fromRed().isOdd()!==e&&(s=s.redNeg()),this.point(s,t)},u.prototype.validate=function(t){if(t.isInfinity())return!0
t.normalize()
var e=t.x.redSqr(),r=t.y.redSqr(),n=e.redMul(this.a).redAdd(r),i=this.c2.redMul(this.one.redAdd(this.d.redMul(e).redMul(r)))
return 0===n.cmp(i)},o(c,a.BasePoint),u.prototype.pointFromJSON=function(t){return c.fromJSON(this,t)},u.prototype.point=function(t,e,r,n){return new c(this,t,e,r,n)},c.fromJSON=function(t,e){return new c(t,e[0],e[1],e[2])},c.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+" z: "+this.z.fromRed().toString(16,2)+">"},c.prototype.isInfinity=function(){return 0===this.x.cmpn(0)&&(0===this.y.cmp(this.z)||this.zOne&&0===this.y.cmp(this.curve.c))},c.prototype._extDbl=function(){var t=this.x.redSqr(),e=this.y.redSqr(),r=this.z.redSqr()
r=r.redIAdd(r)
var n=this.curve._mulA(t),i=this.x.redAdd(this.y).redSqr().redISub(t).redISub(e),o=n.redAdd(e),a=o.redSub(r),s=n.redSub(e),u=i.redMul(a),c=o.redMul(s),f=i.redMul(s),h=a.redMul(o)
return this.curve.point(u,c,h,f)},c.prototype._projDbl=function(){var t,e,r,n,i,o,a=this.x.redAdd(this.y).redSqr(),s=this.x.redSqr(),u=this.y.redSqr()
if(this.curve.twisted){var c=(n=this.curve._mulA(s)).redAdd(u)
this.zOne?(t=a.redSub(s).redSub(u).redMul(c.redSub(this.curve.two)),e=c.redMul(n.redSub(u)),r=c.redSqr().redSub(c).redSub(c)):(i=this.z.redSqr(),o=c.redSub(i).redISub(i),t=a.redSub(s).redISub(u).redMul(o),e=c.redMul(n.redSub(u)),r=c.redMul(o))}else n=s.redAdd(u),i=this.curve._mulC(this.z).redSqr(),o=n.redSub(i).redSub(i),t=this.curve._mulC(a.redISub(n)).redMul(o),e=this.curve._mulC(n).redMul(s.redISub(u)),r=n.redMul(o)
return this.curve.point(t,e,r)},c.prototype.dbl=function(){return this.isInfinity()?this:this.curve.extended?this._extDbl():this._projDbl()},c.prototype._extAdd=function(t){var e=this.y.redSub(this.x).redMul(t.y.redSub(t.x)),r=this.y.redAdd(this.x).redMul(t.y.redAdd(t.x)),n=this.t.redMul(this.curve.dd).redMul(t.t),i=this.z.redMul(t.z.redAdd(t.z)),o=r.redSub(e),a=i.redSub(n),s=i.redAdd(n),u=r.redAdd(e),c=o.redMul(a),f=s.redMul(u),h=o.redMul(u),l=a.redMul(s)
return this.curve.point(c,f,l,h)},c.prototype._projAdd=function(t){var e,r,n=this.z.redMul(t.z),i=n.redSqr(),o=this.x.redMul(t.x),a=this.y.redMul(t.y),s=this.curve.d.redMul(o).redMul(a),u=i.redSub(s),c=i.redAdd(s),f=this.x.redAdd(this.y).redMul(t.x.redAdd(t.y)).redISub(o).redISub(a),h=n.redMul(u).redMul(f)
return this.curve.twisted?(e=n.redMul(c).redMul(a.redSub(this.curve._mulA(o))),r=u.redMul(c)):(e=n.redMul(c).redMul(a.redSub(o)),r=this.curve._mulC(u).redMul(c)),this.curve.point(h,e,r)},c.prototype.add=function(t){return this.isInfinity()?t:t.isInfinity()?this:this.curve.extended?this._extAdd(t):this._projAdd(t)},c.prototype.mul=function(t){return this._hasDoubles(t)?this.curve._fixedNafMul(this,t):this.curve._wnafMul(this,t)},c.prototype.mulAdd=function(t,e,r){return this.curve._wnafMulAdd(1,[this,e],[t,r],2,!1)},c.prototype.jmulAdd=function(t,e,r){return this.curve._wnafMulAdd(1,[this,e],[t,r],2,!0)},c.prototype.normalize=function(){if(this.zOne)return this
var t=this.z.redInvm()
return this.x=this.x.redMul(t),this.y=this.y.redMul(t),this.t&&(this.t=this.t.redMul(t)),this.z=this.curve.one,this.zOne=!0,this},c.prototype.neg=function(){return this.curve.point(this.x.redNeg(),this.y,this.z,this.t&&this.t.redNeg())},c.prototype.getX=function(){return this.normalize(),this.x.fromRed()},c.prototype.getY=function(){return this.normalize(),this.y.fromRed()},c.prototype.eq=function(t){return this===t||0===this.getX().cmp(t.getX())&&0===this.getY().cmp(t.getY())},c.prototype.eqXToP=function(t){var e=t.toRed(this.curve.red).redMul(this.z)
if(0===this.x.cmp(e))return!0
for(var r=t.clone(),n=this.curve.redN.redMul(this.z);;){if(r.iadd(this.curve.n),r.cmp(this.curve.p)>=0)return!1
if(e.redIAdd(n),0===this.x.cmp(e))return!0}},c.prototype.toP=c.prototype.normalize,c.prototype.mixedAdd=c.prototype.add},6063:(t,e,r)=>{"use strict"
var n=e
n.base=r(1249),n.short=r(3148),n.mont=r(1105),n.edwards=r(1123)},1105:(t,e,r)=>{"use strict"
var n=r(1734),i=r(1736),o=r(1249),a=r(7528)
function s(t){o.call(this,"mont",t),this.a=new n(t.a,16).toRed(this.red),this.b=new n(t.b,16).toRed(this.red),this.i4=new n(4).toRed(this.red).redInvm(),this.two=new n(2).toRed(this.red),this.a24=this.i4.redMul(this.a.redAdd(this.two))}function u(t,e,r){o.BasePoint.call(this,t,"projective"),null===e&&null===r?(this.x=this.curve.one,this.z=this.curve.zero):(this.x=new n(e,16),this.z=new n(r,16),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)))}i(s,o),t.exports=s,s.prototype.validate=function(t){var e=t.normalize().x,r=e.redSqr(),n=r.redMul(e).redAdd(r.redMul(this.a)).redAdd(e)
return 0===n.redSqrt().redSqr().cmp(n)},i(u,o.BasePoint),s.prototype.decodePoint=function(t,e){return this.point(a.toArray(t,e),1)},s.prototype.point=function(t,e){return new u(this,t,e)},s.prototype.pointFromJSON=function(t){return u.fromJSON(this,t)},u.prototype.precompute=function(){},u.prototype._encode=function(){return this.getX().toArray("be",this.curve.p.byteLength())},u.fromJSON=function(t,e){return new u(t,e[0],e[1]||t.one)},u.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" z: "+this.z.fromRed().toString(16,2)+">"},u.prototype.isInfinity=function(){return 0===this.z.cmpn(0)},u.prototype.dbl=function(){var t=this.x.redAdd(this.z).redSqr(),e=this.x.redSub(this.z).redSqr(),r=t.redSub(e),n=t.redMul(e),i=r.redMul(e.redAdd(this.curve.a24.redMul(r)))
return this.curve.point(n,i)},u.prototype.add=function(){throw new Error("Not supported on Montgomery curve")},u.prototype.diffAdd=function(t,e){var r=this.x.redAdd(this.z),n=this.x.redSub(this.z),i=t.x.redAdd(t.z),o=t.x.redSub(t.z).redMul(r),a=i.redMul(n),s=e.z.redMul(o.redAdd(a).redSqr()),u=e.x.redMul(o.redISub(a).redSqr())
return this.curve.point(s,u)},u.prototype.mul=function(t){for(var e=t.clone(),r=this,n=this.curve.point(null,null),i=[];0!==e.cmpn(0);e.iushrn(1))i.push(e.andln(1))
for(var o=i.length-1;o>=0;o--)0===i[o]?(r=r.diffAdd(n,this),n=n.dbl()):(n=r.diffAdd(n,this),r=r.dbl())
return n},u.prototype.mulAdd=function(){throw new Error("Not supported on Montgomery curve")},u.prototype.jumlAdd=function(){throw new Error("Not supported on Montgomery curve")},u.prototype.eq=function(t){return 0===this.getX().cmp(t.getX())},u.prototype.normalize=function(){return this.x=this.x.redMul(this.z.redInvm()),this.z=this.curve.one,this},u.prototype.getX=function(){return this.normalize(),this.x.fromRed()}},3148:(t,e,r)=>{"use strict"
var n=r(7528),i=r(1734),o=r(1736),a=r(1249),s=n.assert
function u(t){a.call(this,"short",t),this.a=new i(t.a,16).toRed(this.red),this.b=new i(t.b,16).toRed(this.red),this.tinv=this.two.redInvm(),this.zeroA=0===this.a.fromRed().cmpn(0),this.threeA=0===this.a.fromRed().sub(this.p).cmpn(-3),this.endo=this._getEndomorphism(t),this._endoWnafT1=new Array(4),this._endoWnafT2=new Array(4)}function c(t,e,r,n){a.BasePoint.call(this,t,"affine"),null===e&&null===r?(this.x=null,this.y=null,this.inf=!0):(this.x=new i(e,16),this.y=new i(r,16),n&&(this.x.forceRed(this.curve.red),this.y.forceRed(this.curve.red)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.inf=!1)}function f(t,e,r,n){a.BasePoint.call(this,t,"jacobian"),null===e&&null===r&&null===n?(this.x=this.curve.one,this.y=this.curve.one,this.z=new i(0)):(this.x=new i(e,16),this.y=new i(r,16),this.z=new i(n,16)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.zOne=this.z===this.curve.one}o(u,a),t.exports=u,u.prototype._getEndomorphism=function(t){if(this.zeroA&&this.g&&this.n&&1===this.p.modn(3)){var e,r
if(t.beta)e=new i(t.beta,16).toRed(this.red)
else{var n=this._getEndoRoots(this.p)
e=(e=n[0].cmp(n[1])<0?n[0]:n[1]).toRed(this.red)}if(t.lambda)r=new i(t.lambda,16)
else{var o=this._getEndoRoots(this.n)
0===this.g.mul(o[0]).x.cmp(this.g.x.redMul(e))?r=o[0]:(r=o[1],s(0===this.g.mul(r).x.cmp(this.g.x.redMul(e))))}return{beta:e,lambda:r,basis:t.basis?t.basis.map((function(t){return{a:new i(t.a,16),b:new i(t.b,16)}})):this._getEndoBasis(r)}}},u.prototype._getEndoRoots=function(t){var e=t===this.p?this.red:i.mont(t),r=new i(2).toRed(e).redInvm(),n=r.redNeg(),o=new i(3).toRed(e).redNeg().redSqrt().redMul(r)
return[n.redAdd(o).fromRed(),n.redSub(o).fromRed()]},u.prototype._getEndoBasis=function(t){for(var e,r,n,o,a,s,u,c,f,h=this.n.ushrn(Math.floor(this.n.bitLength()/2)),l=t,d=this.n.clone(),p=new i(1),b=new i(0),m=new i(0),v=new i(1),g=0;0!==l.cmpn(0);){var y=d.div(l)
c=d.sub(y.mul(l)),f=m.sub(y.mul(p))
var w=v.sub(y.mul(b))
if(!n&&c.cmp(h)<0)e=u.neg(),r=p,n=c.neg(),o=f
else if(n&&2==++g)break
u=c,d=l,l=c,m=p,p=f,v=b,b=w}a=c.neg(),s=f
var _=n.sqr().add(o.sqr())
return a.sqr().add(s.sqr()).cmp(_)>=0&&(a=e,s=r),n.negative&&(n=n.neg(),o=o.neg()),a.negative&&(a=a.neg(),s=s.neg()),[{a:n,b:o},{a:a,b:s}]},u.prototype._endoSplit=function(t){var e=this.endo.basis,r=e[0],n=e[1],i=n.b.mul(t).divRound(this.n),o=r.b.neg().mul(t).divRound(this.n),a=i.mul(r.a),s=o.mul(n.a),u=i.mul(r.b),c=o.mul(n.b)
return{k1:t.sub(a).sub(s),k2:u.add(c).neg()}},u.prototype.pointFromX=function(t,e){(t=new i(t,16)).red||(t=t.toRed(this.red))
var r=t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),n=r.redSqrt()
if(0!==n.redSqr().redSub(r).cmp(this.zero))throw new Error("invalid point")
var o=n.fromRed().isOdd()
return(e&&!o||!e&&o)&&(n=n.redNeg()),this.point(t,n)},u.prototype.validate=function(t){if(t.inf)return!0
var e=t.x,r=t.y,n=this.a.redMul(e),i=e.redSqr().redMul(e).redIAdd(n).redIAdd(this.b)
return 0===r.redSqr().redISub(i).cmpn(0)},u.prototype._endoWnafMulAdd=function(t,e,r){for(var n=this._endoWnafT1,i=this._endoWnafT2,o=0;o<t.length;o++){var a=this._endoSplit(e[o]),s=t[o],u=s._getBeta()
a.k1.negative&&(a.k1.ineg(),s=s.neg(!0)),a.k2.negative&&(a.k2.ineg(),u=u.neg(!0)),n[2*o]=s,n[2*o+1]=u,i[2*o]=a.k1,i[2*o+1]=a.k2}for(var c=this._wnafMulAdd(1,n,i,2*o,r),f=0;f<2*o;f++)n[f]=null,i[f]=null
return c},o(c,a.BasePoint),u.prototype.point=function(t,e,r){return new c(this,t,e,r)},u.prototype.pointFromJSON=function(t,e){return c.fromJSON(this,t,e)},c.prototype._getBeta=function(){if(this.curve.endo){var t=this.precomputed
if(t&&t.beta)return t.beta
var e=this.curve.point(this.x.redMul(this.curve.endo.beta),this.y)
if(t){var r=this.curve,n=function(t){return r.point(t.x.redMul(r.endo.beta),t.y)}
t.beta=e,e.precomputed={beta:null,naf:t.naf&&{wnd:t.naf.wnd,points:t.naf.points.map(n)},doubles:t.doubles&&{step:t.doubles.step,points:t.doubles.points.map(n)}}}return e}},c.prototype.toJSON=function(){return this.precomputed?[this.x,this.y,this.precomputed&&{doubles:this.precomputed.doubles&&{step:this.precomputed.doubles.step,points:this.precomputed.doubles.points.slice(1)},naf:this.precomputed.naf&&{wnd:this.precomputed.naf.wnd,points:this.precomputed.naf.points.slice(1)}}]:[this.x,this.y]},c.fromJSON=function(t,e,r){"string"==typeof e&&(e=JSON.parse(e))
var n=t.point(e[0],e[1],r)
if(!e[2])return n
function i(e){return t.point(e[0],e[1],r)}var o=e[2]
return n.precomputed={beta:null,doubles:o.doubles&&{step:o.doubles.step,points:[n].concat(o.doubles.points.map(i))},naf:o.naf&&{wnd:o.naf.wnd,points:[n].concat(o.naf.points.map(i))}},n},c.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+">"},c.prototype.isInfinity=function(){return this.inf},c.prototype.add=function(t){if(this.inf)return t
if(t.inf)return this
if(this.eq(t))return this.dbl()
if(this.neg().eq(t))return this.curve.point(null,null)
if(0===this.x.cmp(t.x))return this.curve.point(null,null)
var e=this.y.redSub(t.y)
0!==e.cmpn(0)&&(e=e.redMul(this.x.redSub(t.x).redInvm()))
var r=e.redSqr().redISub(this.x).redISub(t.x),n=e.redMul(this.x.redSub(r)).redISub(this.y)
return this.curve.point(r,n)},c.prototype.dbl=function(){if(this.inf)return this
var t=this.y.redAdd(this.y)
if(0===t.cmpn(0))return this.curve.point(null,null)
var e=this.curve.a,r=this.x.redSqr(),n=t.redInvm(),i=r.redAdd(r).redIAdd(r).redIAdd(e).redMul(n),o=i.redSqr().redISub(this.x.redAdd(this.x)),a=i.redMul(this.x.redSub(o)).redISub(this.y)
return this.curve.point(o,a)},c.prototype.getX=function(){return this.x.fromRed()},c.prototype.getY=function(){return this.y.fromRed()},c.prototype.mul=function(t){return t=new i(t,16),this.isInfinity()?this:this._hasDoubles(t)?this.curve._fixedNafMul(this,t):this.curve.endo?this.curve._endoWnafMulAdd([this],[t]):this.curve._wnafMul(this,t)},c.prototype.mulAdd=function(t,e,r){var n=[this,e],i=[t,r]
return this.curve.endo?this.curve._endoWnafMulAdd(n,i):this.curve._wnafMulAdd(1,n,i,2)},c.prototype.jmulAdd=function(t,e,r){var n=[this,e],i=[t,r]
return this.curve.endo?this.curve._endoWnafMulAdd(n,i,!0):this.curve._wnafMulAdd(1,n,i,2,!0)},c.prototype.eq=function(t){return this===t||this.inf===t.inf&&(this.inf||0===this.x.cmp(t.x)&&0===this.y.cmp(t.y))},c.prototype.neg=function(t){if(this.inf)return this
var e=this.curve.point(this.x,this.y.redNeg())
if(t&&this.precomputed){var r=this.precomputed,n=function(t){return t.neg()}
e.precomputed={naf:r.naf&&{wnd:r.naf.wnd,points:r.naf.points.map(n)},doubles:r.doubles&&{step:r.doubles.step,points:r.doubles.points.map(n)}}}return e},c.prototype.toJ=function(){return this.inf?this.curve.jpoint(null,null,null):this.curve.jpoint(this.x,this.y,this.curve.one)},o(f,a.BasePoint),u.prototype.jpoint=function(t,e,r){return new f(this,t,e,r)},f.prototype.toP=function(){if(this.isInfinity())return this.curve.point(null,null)
var t=this.z.redInvm(),e=t.redSqr(),r=this.x.redMul(e),n=this.y.redMul(e).redMul(t)
return this.curve.point(r,n)},f.prototype.neg=function(){return this.curve.jpoint(this.x,this.y.redNeg(),this.z)},f.prototype.add=function(t){if(this.isInfinity())return t
if(t.isInfinity())return this
var e=t.z.redSqr(),r=this.z.redSqr(),n=this.x.redMul(e),i=t.x.redMul(r),o=this.y.redMul(e.redMul(t.z)),a=t.y.redMul(r.redMul(this.z)),s=n.redSub(i),u=o.redSub(a)
if(0===s.cmpn(0))return 0!==u.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl()
var c=s.redSqr(),f=c.redMul(s),h=n.redMul(c),l=u.redSqr().redIAdd(f).redISub(h).redISub(h),d=u.redMul(h.redISub(l)).redISub(o.redMul(f)),p=this.z.redMul(t.z).redMul(s)
return this.curve.jpoint(l,d,p)},f.prototype.mixedAdd=function(t){if(this.isInfinity())return t.toJ()
if(t.isInfinity())return this
var e=this.z.redSqr(),r=this.x,n=t.x.redMul(e),i=this.y,o=t.y.redMul(e).redMul(this.z),a=r.redSub(n),s=i.redSub(o)
if(0===a.cmpn(0))return 0!==s.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl()
var u=a.redSqr(),c=u.redMul(a),f=r.redMul(u),h=s.redSqr().redIAdd(c).redISub(f).redISub(f),l=s.redMul(f.redISub(h)).redISub(i.redMul(c)),d=this.z.redMul(a)
return this.curve.jpoint(h,l,d)},f.prototype.dblp=function(t){if(0===t)return this
if(this.isInfinity())return this
if(!t)return this.dbl()
var e
if(this.curve.zeroA||this.curve.threeA){var r=this
for(e=0;e<t;e++)r=r.dbl()
return r}var n=this.curve.a,i=this.curve.tinv,o=this.x,a=this.y,s=this.z,u=s.redSqr().redSqr(),c=a.redAdd(a)
for(e=0;e<t;e++){var f=o.redSqr(),h=c.redSqr(),l=h.redSqr(),d=f.redAdd(f).redIAdd(f).redIAdd(n.redMul(u)),p=o.redMul(h),b=d.redSqr().redISub(p.redAdd(p)),m=p.redISub(b),v=d.redMul(m)
v=v.redIAdd(v).redISub(l)
var g=c.redMul(s)
e+1<t&&(u=u.redMul(l)),o=b,s=g,c=v}return this.curve.jpoint(o,c.redMul(i),s)},f.prototype.dbl=function(){return this.isInfinity()?this:this.curve.zeroA?this._zeroDbl():this.curve.threeA?this._threeDbl():this._dbl()},f.prototype._zeroDbl=function(){var t,e,r
if(this.zOne){var n=this.x.redSqr(),i=this.y.redSqr(),o=i.redSqr(),a=this.x.redAdd(i).redSqr().redISub(n).redISub(o)
a=a.redIAdd(a)
var s=n.redAdd(n).redIAdd(n),u=s.redSqr().redISub(a).redISub(a),c=o.redIAdd(o)
c=(c=c.redIAdd(c)).redIAdd(c),t=u,e=s.redMul(a.redISub(u)).redISub(c),r=this.y.redAdd(this.y)}else{var f=this.x.redSqr(),h=this.y.redSqr(),l=h.redSqr(),d=this.x.redAdd(h).redSqr().redISub(f).redISub(l)
d=d.redIAdd(d)
var p=f.redAdd(f).redIAdd(f),b=p.redSqr(),m=l.redIAdd(l)
m=(m=m.redIAdd(m)).redIAdd(m),t=b.redISub(d).redISub(d),e=p.redMul(d.redISub(t)).redISub(m),r=(r=this.y.redMul(this.z)).redIAdd(r)}return this.curve.jpoint(t,e,r)},f.prototype._threeDbl=function(){var t,e,r
if(this.zOne){var n=this.x.redSqr(),i=this.y.redSqr(),o=i.redSqr(),a=this.x.redAdd(i).redSqr().redISub(n).redISub(o)
a=a.redIAdd(a)
var s=n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),u=s.redSqr().redISub(a).redISub(a)
t=u
var c=o.redIAdd(o)
c=(c=c.redIAdd(c)).redIAdd(c),e=s.redMul(a.redISub(u)).redISub(c),r=this.y.redAdd(this.y)}else{var f=this.z.redSqr(),h=this.y.redSqr(),l=this.x.redMul(h),d=this.x.redSub(f).redMul(this.x.redAdd(f))
d=d.redAdd(d).redIAdd(d)
var p=l.redIAdd(l),b=(p=p.redIAdd(p)).redAdd(p)
t=d.redSqr().redISub(b),r=this.y.redAdd(this.z).redSqr().redISub(h).redISub(f)
var m=h.redSqr()
m=(m=(m=m.redIAdd(m)).redIAdd(m)).redIAdd(m),e=d.redMul(p.redISub(t)).redISub(m)}return this.curve.jpoint(t,e,r)},f.prototype._dbl=function(){var t=this.curve.a,e=this.x,r=this.y,n=this.z,i=n.redSqr().redSqr(),o=e.redSqr(),a=r.redSqr(),s=o.redAdd(o).redIAdd(o).redIAdd(t.redMul(i)),u=e.redAdd(e),c=(u=u.redIAdd(u)).redMul(a),f=s.redSqr().redISub(c.redAdd(c)),h=c.redISub(f),l=a.redSqr()
l=(l=(l=l.redIAdd(l)).redIAdd(l)).redIAdd(l)
var d=s.redMul(h).redISub(l),p=r.redAdd(r).redMul(n)
return this.curve.jpoint(f,d,p)},f.prototype.trpl=function(){if(!this.curve.zeroA)return this.dbl().add(this)
var t=this.x.redSqr(),e=this.y.redSqr(),r=this.z.redSqr(),n=e.redSqr(),i=t.redAdd(t).redIAdd(t),o=i.redSqr(),a=this.x.redAdd(e).redSqr().redISub(t).redISub(n),s=(a=(a=(a=a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(o)).redSqr(),u=n.redIAdd(n)
u=(u=(u=u.redIAdd(u)).redIAdd(u)).redIAdd(u)
var c=i.redIAdd(a).redSqr().redISub(o).redISub(s).redISub(u),f=e.redMul(c)
f=(f=f.redIAdd(f)).redIAdd(f)
var h=this.x.redMul(s).redISub(f)
h=(h=h.redIAdd(h)).redIAdd(h)
var l=this.y.redMul(c.redMul(u.redISub(c)).redISub(a.redMul(s)))
l=(l=(l=l.redIAdd(l)).redIAdd(l)).redIAdd(l)
var d=this.z.redAdd(a).redSqr().redISub(r).redISub(s)
return this.curve.jpoint(h,l,d)},f.prototype.mul=function(t,e){return t=new i(t,e),this.curve._wnafMul(this,t)},f.prototype.eq=function(t){if("affine"===t.type)return this.eq(t.toJ())
if(this===t)return!0
var e=this.z.redSqr(),r=t.z.redSqr()
if(0!==this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0))return!1
var n=e.redMul(this.z),i=r.redMul(t.z)
return 0===this.y.redMul(i).redISub(t.y.redMul(n)).cmpn(0)},f.prototype.eqXToP=function(t){var e=this.z.redSqr(),r=t.toRed(this.curve.red).redMul(e)
if(0===this.x.cmp(r))return!0
for(var n=t.clone(),i=this.curve.redN.redMul(e);;){if(n.iadd(this.curve.n),n.cmp(this.curve.p)>=0)return!1
if(r.redIAdd(i),0===this.x.cmp(r))return!0}},f.prototype.inspect=function(){return this.isInfinity()?"<EC JPoint Infinity>":"<EC JPoint x: "+this.x.toString(16,2)+" y: "+this.y.toString(16,2)+" z: "+this.z.toString(16,2)+">"},f.prototype.isInfinity=function(){return 0===this.z.cmpn(0)}},506:(t,e,r)=>{"use strict"
var n,i=e,o=r(7198),a=r(6063),s=r(7528).assert
function u(t){"short"===t.type?this.curve=new a.short(t):"edwards"===t.type?this.curve=new a.edwards(t):this.curve=new a.mont(t),this.g=this.curve.g,this.n=this.curve.n,this.hash=t.hash,s(this.g.validate(),"Invalid curve"),s(this.g.mul(this.n).isInfinity(),"Invalid curve, G*N != O")}function c(t,e){Object.defineProperty(i,t,{configurable:!0,enumerable:!0,get:function(){var r=new u(e)
return Object.defineProperty(i,t,{configurable:!0,enumerable:!0,value:r}),r}})}i.PresetCurve=u,c("p192",{type:"short",prime:"p192",p:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",a:"ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",b:"64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",n:"ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",hash:o.sha256,gRed:!1,g:["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012","07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]}),c("p224",{type:"short",prime:"p224",p:"ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",a:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",b:"b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",n:"ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",hash:o.sha256,gRed:!1,g:["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21","bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]}),c("p256",{type:"short",prime:null,p:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",a:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",b:"5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",n:"ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",hash:o.sha256,gRed:!1,g:["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296","4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]}),c("p384",{type:"short",prime:null,p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",a:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",b:"b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",n:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",hash:o.sha384,gRed:!1,g:["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7","3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]}),c("p521",{type:"short",prime:null,p:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",a:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",b:"00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",n:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",hash:o.sha512,gRed:!1,g:["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66","00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]}),c("curve25519",{type:"mont",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"76d06",b:"1",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:o.sha256,gRed:!1,g:["9"]}),c("ed25519",{type:"edwards",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"-1",c:"1",d:"52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:o.sha256,gRed:!1,g:["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a","6666666666666666666666666666666666666666666666666666666666666658"]})
try{n=r(6401)}catch(t){n=void 0}c("secp256k1",{type:"short",prime:"k256",p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",a:"0",b:"7",n:"ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",h:"1",hash:o.sha256,beta:"7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",lambda:"5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",basis:[{a:"3086d221a7d46bcde86c90e49284eb15",b:"-e4437ed6010e88286f547fa90abfe4c3"},{a:"114ca50f7a8e2f3f657c1108d9d44cfd8",b:"3086d221a7d46bcde86c90e49284eb15"}],gRed:!1,g:["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",n]})},8320:(t,e,r)=>{"use strict"
var n=r(1734),i=r(9410),o=r(7528),a=r(506),s=r(2202),u=o.assert,c=r(7791),f=r(488)
function h(t){if(!(this instanceof h))return new h(t)
"string"==typeof t&&(u(Object.prototype.hasOwnProperty.call(a,t),"Unknown curve "+t),t=a[t]),t instanceof a.PresetCurve&&(t={curve:t}),this.curve=t.curve.curve,this.n=this.curve.n,this.nh=this.n.ushrn(1),this.g=this.curve.g,this.g=t.curve.g,this.g.precompute(t.curve.n.bitLength()+1),this.hash=t.hash||t.curve.hash}t.exports=h,h.prototype.keyPair=function(t){return new c(this,t)},h.prototype.keyFromPrivate=function(t,e){return c.fromPrivate(this,t,e)},h.prototype.keyFromPublic=function(t,e){return c.fromPublic(this,t,e)},h.prototype.genKeyPair=function(t){t||(t={})
for(var e=new i({hash:this.hash,pers:t.pers,persEnc:t.persEnc||"utf8",entropy:t.entropy||s(this.hash.hmacStrength),entropyEnc:t.entropy&&t.entropyEnc||"utf8",nonce:this.n.toArray()}),r=this.n.byteLength(),o=this.n.sub(new n(2));;){var a=new n(e.generate(r))
if(!(a.cmp(o)>0))return a.iaddn(1),this.keyFromPrivate(a)}},h.prototype._truncateToN=function(t,e){var r=8*t.byteLength()-this.n.bitLength()
return r>0&&(t=t.ushrn(r)),!e&&t.cmp(this.n)>=0?t.sub(this.n):t},h.prototype.sign=function(t,e,r,o){"object"==typeof r&&(o=r,r=null),o||(o={}),e=this.keyFromPrivate(e,r),t=this._truncateToN(new n(t,16))
for(var a=this.n.byteLength(),s=e.getPrivate().toArray("be",a),u=t.toArray("be",a),c=new i({hash:this.hash,entropy:s,nonce:u,pers:o.pers,persEnc:o.persEnc||"utf8"}),h=this.n.sub(new n(1)),l=0;;l++){var d=o.k?o.k(l):new n(c.generate(this.n.byteLength()))
if(!((d=this._truncateToN(d,!0)).cmpn(1)<=0||d.cmp(h)>=0)){var p=this.g.mul(d)
if(!p.isInfinity()){var b=p.getX(),m=b.umod(this.n)
if(0!==m.cmpn(0)){var v=d.invm(this.n).mul(m.mul(e.getPrivate()).iadd(t))
if(0!==(v=v.umod(this.n)).cmpn(0)){var g=(p.getY().isOdd()?1:0)|(0!==b.cmp(m)?2:0)
return o.canonical&&v.cmp(this.nh)>0&&(v=this.n.sub(v),g^=1),new f({r:m,s:v,recoveryParam:g})}}}}}},h.prototype.verify=function(t,e,r,i){t=this._truncateToN(new n(t,16)),r=this.keyFromPublic(r,i)
var o=(e=new f(e,"hex")).r,a=e.s
if(o.cmpn(1)<0||o.cmp(this.n)>=0)return!1
if(a.cmpn(1)<0||a.cmp(this.n)>=0)return!1
var s,u=a.invm(this.n),c=u.mul(t).umod(this.n),h=u.mul(o).umod(this.n)
return this.curve._maxwellTrick?!(s=this.g.jmulAdd(c,r.getPublic(),h)).isInfinity()&&s.eqXToP(o):!(s=this.g.mulAdd(c,r.getPublic(),h)).isInfinity()&&0===s.getX().umod(this.n).cmp(o)},h.prototype.recoverPubKey=function(t,e,r,i){u((3&r)===r,"The recovery param is more than two bits"),e=new f(e,i)
var o=this.n,a=new n(t),s=e.r,c=e.s,h=1&r,l=r>>1
if(s.cmp(this.curve.p.umod(this.curve.n))>=0&&l)throw new Error("Unable to find sencond key candinate")
s=l?this.curve.pointFromX(s.add(this.curve.n),h):this.curve.pointFromX(s,h)
var d=e.r.invm(o),p=o.sub(a).mul(d).umod(o),b=c.mul(d).umod(o)
return this.g.mulAdd(p,s,b)},h.prototype.getKeyRecoveryParam=function(t,e,r,n){if(null!==(e=new f(e,n)).recoveryParam)return e.recoveryParam
for(var i=0;i<4;i++){var o
try{o=this.recoverPubKey(t,e,i)}catch(t){continue}if(o.eq(r))return i}throw new Error("Unable to find valid recovery factor")}},7791:(t,e,r)=>{"use strict"
var n=r(1734),i=r(7528).assert
function o(t,e){this.ec=t,this.priv=null,this.pub=null,e.priv&&this._importPrivate(e.priv,e.privEnc),e.pub&&this._importPublic(e.pub,e.pubEnc)}t.exports=o,o.fromPublic=function(t,e,r){return e instanceof o?e:new o(t,{pub:e,pubEnc:r})},o.fromPrivate=function(t,e,r){return e instanceof o?e:new o(t,{priv:e,privEnc:r})},o.prototype.validate=function(){var t=this.getPublic()
return t.isInfinity()?{result:!1,reason:"Invalid public key"}:t.validate()?t.mul(this.ec.curve.n).isInfinity()?{result:!0,reason:null}:{result:!1,reason:"Public key * N != O"}:{result:!1,reason:"Public key is not a point"}},o.prototype.getPublic=function(t,e){return"string"==typeof t&&(e=t,t=null),this.pub||(this.pub=this.ec.g.mul(this.priv)),e?this.pub.encode(e,t):this.pub},o.prototype.getPrivate=function(t){return"hex"===t?this.priv.toString(16,2):this.priv},o.prototype._importPrivate=function(t,e){this.priv=new n(t,e||16),this.priv=this.priv.umod(this.ec.curve.n)},o.prototype._importPublic=function(t,e){if(t.x||t.y)return"mont"===this.ec.curve.type?i(t.x,"Need x coordinate"):"short"!==this.ec.curve.type&&"edwards"!==this.ec.curve.type||i(t.x&&t.y,"Need both x and y coordinate"),void(this.pub=this.ec.curve.point(t.x,t.y))
this.pub=this.ec.curve.decodePoint(t,e)},o.prototype.derive=function(t){return t.validate()||i(t.validate(),"public point not validated"),t.mul(this.priv).getX()},o.prototype.sign=function(t,e,r){return this.ec.sign(t,this,e,r)},o.prototype.verify=function(t,e){return this.ec.verify(t,e,this)},o.prototype.inspect=function(){return"<Key priv: "+(this.priv&&this.priv.toString(16,2))+" pub: "+(this.pub&&this.pub.inspect())+" >"}},488:(t,e,r)=>{"use strict"
var n=r(1734),i=r(7528),o=i.assert
function a(t,e){if(t instanceof a)return t
this._importDER(t,e)||(o(t.r&&t.s,"Signature without r or s"),this.r=new n(t.r,16),this.s=new n(t.s,16),void 0===t.recoveryParam?this.recoveryParam=null:this.recoveryParam=t.recoveryParam)}function s(){this.place=0}function u(t,e){var r=t[e.place++]
if(!(128&r))return r
var n=15&r
if(0===n||n>4)return!1
for(var i=0,o=0,a=e.place;o<n;o++,a++)i<<=8,i|=t[a],i>>>=0
return!(i<=127)&&(e.place=a,i)}function c(t){for(var e=0,r=t.length-1;!t[e]&&!(128&t[e+1])&&e<r;)e++
return 0===e?t:t.slice(e)}function f(t,e){if(e<128)t.push(e)
else{var r=1+(Math.log(e)/Math.LN2>>>3)
for(t.push(128|r);--r;)t.push(e>>>(r<<3)&255)
t.push(e)}}t.exports=a,a.prototype._importDER=function(t,e){t=i.toArray(t,e)
var r=new s
if(48!==t[r.place++])return!1
var o=u(t,r)
if(!1===o)return!1
if(o+r.place!==t.length)return!1
if(2!==t[r.place++])return!1
var a=u(t,r)
if(!1===a)return!1
var c=t.slice(r.place,a+r.place)
if(r.place+=a,2!==t[r.place++])return!1
var f=u(t,r)
if(!1===f)return!1
if(t.length!==f+r.place)return!1
var h=t.slice(r.place,f+r.place)
if(0===c[0]){if(!(128&c[1]))return!1
c=c.slice(1)}if(0===h[0]){if(!(128&h[1]))return!1
h=h.slice(1)}return this.r=new n(c),this.s=new n(h),this.recoveryParam=null,!0},a.prototype.toDER=function(t){var e=this.r.toArray(),r=this.s.toArray()
for(128&e[0]&&(e=[0].concat(e)),128&r[0]&&(r=[0].concat(r)),e=c(e),r=c(r);!(r[0]||128&r[1]);)r=r.slice(1)
var n=[2]
f(n,e.length),(n=n.concat(e)).push(2),f(n,r.length)
var o=n.concat(r),a=[48]
return f(a,o.length),a=a.concat(o),i.encode(a,t)}},8027:(t,e,r)=>{"use strict"
var n=r(7198),i=r(506),o=r(7528),a=o.assert,s=o.parseBytes,u=r(7303),c=r(6646)
function f(t){if(a("ed25519"===t,"only tested with ed25519 so far"),!(this instanceof f))return new f(t)
t=i[t].curve,this.curve=t,this.g=t.g,this.g.precompute(t.n.bitLength()+1),this.pointClass=t.point().constructor,this.encodingLength=Math.ceil(t.n.bitLength()/8),this.hash=n.sha512}t.exports=f,f.prototype.sign=function(t,e){t=s(t)
var r=this.keyFromSecret(e),n=this.hashInt(r.messagePrefix(),t),i=this.g.mul(n),o=this.encodePoint(i),a=this.hashInt(o,r.pubBytes(),t).mul(r.priv()),u=n.add(a).umod(this.curve.n)
return this.makeSignature({R:i,S:u,Rencoded:o})},f.prototype.verify=function(t,e,r){t=s(t),e=this.makeSignature(e)
var n=this.keyFromPublic(r),i=this.hashInt(e.Rencoded(),n.pubBytes(),t),o=this.g.mul(e.S())
return e.R().add(n.pub().mul(i)).eq(o)},f.prototype.hashInt=function(){for(var t=this.hash(),e=0;e<arguments.length;e++)t.update(arguments[e])
return o.intFromLE(t.digest()).umod(this.curve.n)},f.prototype.keyFromPublic=function(t){return u.fromPublic(this,t)},f.prototype.keyFromSecret=function(t){return u.fromSecret(this,t)},f.prototype.makeSignature=function(t){return t instanceof c?t:new c(this,t)},f.prototype.encodePoint=function(t){var e=t.getY().toArray("le",this.encodingLength)
return e[this.encodingLength-1]|=t.getX().isOdd()?128:0,e},f.prototype.decodePoint=function(t){var e=(t=o.parseBytes(t)).length-1,r=t.slice(0,e).concat(-129&t[e]),n=0!=(128&t[e]),i=o.intFromLE(r)
return this.curve.pointFromY(i,n)},f.prototype.encodeInt=function(t){return t.toArray("le",this.encodingLength)},f.prototype.decodeInt=function(t){return o.intFromLE(t)},f.prototype.isPoint=function(t){return t instanceof this.pointClass}},7303:(t,e,r)=>{"use strict"
var n=r(7528),i=n.assert,o=n.parseBytes,a=n.cachedProperty
function s(t,e){this.eddsa=t,this._secret=o(e.secret),t.isPoint(e.pub)?this._pub=e.pub:this._pubBytes=o(e.pub)}s.fromPublic=function(t,e){return e instanceof s?e:new s(t,{pub:e})},s.fromSecret=function(t,e){return e instanceof s?e:new s(t,{secret:e})},s.prototype.secret=function(){return this._secret},a(s,"pubBytes",(function(){return this.eddsa.encodePoint(this.pub())})),a(s,"pub",(function(){return this._pubBytes?this.eddsa.decodePoint(this._pubBytes):this.eddsa.g.mul(this.priv())})),a(s,"privBytes",(function(){var t=this.eddsa,e=this.hash(),r=t.encodingLength-1,n=e.slice(0,t.encodingLength)
return n[0]&=248,n[r]&=127,n[r]|=64,n})),a(s,"priv",(function(){return this.eddsa.decodeInt(this.privBytes())})),a(s,"hash",(function(){return this.eddsa.hash().update(this.secret()).digest()})),a(s,"messagePrefix",(function(){return this.hash().slice(this.eddsa.encodingLength)})),s.prototype.sign=function(t){return i(this._secret,"KeyPair can only verify"),this.eddsa.sign(t,this)},s.prototype.verify=function(t,e){return this.eddsa.verify(t,e,this)},s.prototype.getSecret=function(t){return i(this._secret,"KeyPair is public only"),n.encode(this.secret(),t)},s.prototype.getPublic=function(t){return n.encode(this.pubBytes(),t)},t.exports=s},6646:(t,e,r)=>{"use strict"
var n=r(1734),i=r(7528),o=i.assert,a=i.cachedProperty,s=i.parseBytes
function u(t,e){this.eddsa=t,"object"!=typeof e&&(e=s(e)),Array.isArray(e)&&(e={R:e.slice(0,t.encodingLength),S:e.slice(t.encodingLength)}),o(e.R&&e.S,"Signature without R or S"),t.isPoint(e.R)&&(this._R=e.R),e.S instanceof n&&(this._S=e.S),this._Rencoded=Array.isArray(e.R)?e.R:e.Rencoded,this._Sencoded=Array.isArray(e.S)?e.S:e.Sencoded}a(u,"S",(function(){return this.eddsa.decodeInt(this.Sencoded())})),a(u,"R",(function(){return this.eddsa.decodePoint(this.Rencoded())})),a(u,"Rencoded",(function(){return this.eddsa.encodePoint(this.R())})),a(u,"Sencoded",(function(){return this.eddsa.encodeInt(this.S())})),u.prototype.toBytes=function(){return this.Rencoded().concat(this.Sencoded())},u.prototype.toHex=function(){return i.encode(this.toBytes(),"hex").toUpperCase()},t.exports=u},6401:t=>{t.exports={doubles:{step:4,points:[["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a","f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"],["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508","11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"],["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739","d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"],["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640","4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"],["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c","4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"],["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda","96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"],["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa","5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"],["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0","cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"],["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d","9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"],["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d","e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"],["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1","9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"],["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0","5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"],["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047","10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"],["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862","283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"],["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7","7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"],["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd","56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"],["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83","7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"],["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a","53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"],["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8","bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"],["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d","4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"],["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725","7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"],["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754","4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"],["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c","17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"],["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6","6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"],["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39","c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"],["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891","893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"],["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b","febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"],["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03","2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"],["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d","eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"],["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070","7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"],["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4","e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"],["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da","662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"],["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11","1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"],["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e","efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"],["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41","2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"],["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef","67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"],["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8","db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"],["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d","648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"],["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96","35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"],["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd","ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"],["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5","9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"],["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266","40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"],["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71","34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"],["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac","c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"],["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751","1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"],["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e","493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"],["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241","c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"],["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3","be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"],["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f","4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"],["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19","aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"],["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be","b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"],["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9","6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"],["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2","8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"],["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13","7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"],["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c","ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"],["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba","2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"],["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151","e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"],["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073","d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"],["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458","38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"],["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b","69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"],["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366","d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"],["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa","40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"],["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0","620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"],["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787","7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"],["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e","ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]]},naf:{wnd:7,points:[["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9","388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"],["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4","d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"],["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc","6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"],["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe","cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"],["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb","d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"],["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8","ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"],["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e","581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"],["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34","4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"],["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c","85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"],["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5","321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"],["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f","2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"],["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714","73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"],["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729","a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"],["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db","2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"],["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4","e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"],["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5","b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"],["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479","2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"],["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d","80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"],["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f","1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"],["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb","d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"],["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9","eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"],["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963","758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"],["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74","958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"],["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530","e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"],["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b","5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"],["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247","cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"],["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1","cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"],["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120","4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"],["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435","91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"],["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18","673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"],["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8","59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"],["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb","3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"],["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f","55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"],["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143","efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"],["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba","e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"],["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45","f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"],["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a","744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"],["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e","c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"],["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8","e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"],["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c","30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"],["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519","e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"],["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab","100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"],["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca","ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"],["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf","8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"],["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610","68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"],["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4","f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"],["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c","d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"],["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940","edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"],["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980","a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"],["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3","66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"],["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf","9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"],["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63","4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"],["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448","fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"],["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf","5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"],["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5","8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"],["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6","8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"],["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5","5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"],["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99","f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"],["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51","f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"],["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5","42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"],["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5","204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"],["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997","4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"],["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881","73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"],["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5","39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"],["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66","d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"],["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726","ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"],["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede","6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"],["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94","60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"],["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31","3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"],["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51","b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"],["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252","ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"],["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5","cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"],["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b","6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"],["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4","322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"],["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f","6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"],["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889","2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"],["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246","b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"],["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984","998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"],["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a","b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"],["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030","bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"],["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197","6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"],["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593","c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"],["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef","21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"],["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38","60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"],["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a","49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"],["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111","5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"],["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502","7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"],["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea","be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"],["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26","8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"],["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986","39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"],["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e","62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"],["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4","25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"],["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda","ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"],["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859","cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"],["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f","f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"],["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c","6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"],["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942","fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"],["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a","1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"],["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80","5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"],["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d","438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"],["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1","cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"],["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63","c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"],["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352","6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"],["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193","ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"],["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00","9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"],["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58","ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"],["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7","d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"],["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8","c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"],["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e","67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"],["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d","cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"],["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b","299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"],["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f","f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"],["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6","462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"],["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297","62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"],["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a","7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"],["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c","ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"],["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52","4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"],["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb","bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"],["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065","bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"],["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917","603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"],["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9","cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"],["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3","553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"],["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57","712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"],["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66","ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"],["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8","9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"],["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721","9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"],["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180","4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]]}}},7528:(t,e,r)=>{"use strict"
var n=e,i=r(1734),o=r(4504),a=r(6580)
n.assert=o,n.toArray=a.toArray,n.zero2=a.zero2,n.toHex=a.toHex,n.encode=a.encode,n.getNAF=function(t,e,r){var n=new Array(Math.max(t.bitLength(),r)+1)
n.fill(0)
for(var i=1<<e+1,o=t.clone(),a=0;a<n.length;a++){var s,u=o.andln(i-1)
o.isOdd()?(s=u>(i>>1)-1?(i>>1)-u:u,o.isubn(s)):s=0,n[a]=s,o.iushrn(1)}return n},n.getJSF=function(t,e){var r=[[],[]]
t=t.clone(),e=e.clone()
for(var n,i=0,o=0;t.cmpn(-i)>0||e.cmpn(-o)>0;){var a,s,u=t.andln(3)+i&3,c=e.andln(3)+o&3
3===u&&(u=-1),3===c&&(c=-1),a=0==(1&u)?0:3!=(n=t.andln(7)+i&7)&&5!==n||2!==c?u:-u,r[0].push(a),s=0==(1&c)?0:3!=(n=e.andln(7)+o&7)&&5!==n||2!==u?c:-c,r[1].push(s),2*i===a+1&&(i=1-i),2*o===s+1&&(o=1-o),t.iushrn(1),e.iushrn(1)}return r},n.cachedProperty=function(t,e,r){var n="_"+e
t.prototype[e]=function(){return void 0!==this[n]?this[n]:this[n]=r.call(this)}},n.parseBytes=function(t){return"string"==typeof t?n.toArray(t,"hex"):t},n.intFromLE=function(t){return new i(t,"hex","le")}},1986:t=>{"use strict"
var e=Array.isArray,r=Object.keys,n=Object.prototype.hasOwnProperty
t.exports=function t(i,o){if(i===o)return!0
if(i&&o&&"object"==typeof i&&"object"==typeof o){var a,s,u,c=e(i),f=e(o)
if(c&&f){if((s=i.length)!=o.length)return!1
for(a=s;0!=a--;)if(!t(i[a],o[a]))return!1
return!0}if(c!=f)return!1
var h=i instanceof Date,l=o instanceof Date
if(h!=l)return!1
if(h&&l)return i.getTime()==o.getTime()
var d=i instanceof RegExp,p=o instanceof RegExp
if(d!=p)return!1
if(d&&p)return i.toString()==o.toString()
var b=r(i)
if((s=b.length)!==r(o).length)return!1
for(a=s;0!=a--;)if(!n.call(o,b[a]))return!1
for(a=s;0!=a--;)if(!t(i[u=b[a]],o[u]))return!1
return!0}return i!=i&&o!=o}},8291:t=>{"use strict"
var e,r="object"==typeof Reflect?Reflect:null,n=r&&"function"==typeof r.apply?r.apply:function(t,e,r){return Function.prototype.apply.call(t,e,r)}
e=r&&"function"==typeof r.ownKeys?r.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)}
var i=Number.isNaN||function(t){return t!=t}
function o(){o.init.call(this)}t.exports=o,t.exports.once=function(t,e){return new Promise((function(r,n){function i(r){t.removeListener(e,o),n(r)}function o(){"function"==typeof t.removeListener&&t.removeListener("error",i),r([].slice.call(arguments))}b(t,e,o,{once:!0}),"error"!==e&&function(t,e,r){"function"==typeof t.on&&b(t,"error",e,{once:!0})}(t,i)}))},o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0
var a=10
function s(t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}function u(t){return void 0===t._maxListeners?o.defaultMaxListeners:t._maxListeners}function c(t,e,r,n){var i,o,a,c
if(s(r),void 0===(o=t._events)?(o=t._events=Object.create(null),t._eventsCount=0):(void 0!==o.newListener&&(t.emit("newListener",e,r.listener?r.listener:r),o=t._events),a=o[e]),void 0===a)a=o[e]=r,++t._eventsCount
else if("function"==typeof a?a=o[e]=n?[r,a]:[a,r]:n?a.unshift(r):a.push(r),(i=u(t))>0&&a.length>i&&!a.warned){a.warned=!0
var f=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit")
f.name="MaxListenersExceededWarning",f.emitter=t,f.type=e,f.count=a.length,c=f,console&&console.warn&&console.warn(c)}return t}function f(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function h(t,e,r){var n={fired:!1,wrapFn:void 0,target:t,type:e,listener:r},i=f.bind(n)
return i.listener=r,n.wrapFn=i,i}function l(t,e,r){var n=t._events
if(void 0===n)return[]
var i=n[e]
return void 0===i?[]:"function"==typeof i?r?[i.listener||i]:[i]:r?function(t){for(var e=new Array(t.length),r=0;r<e.length;++r)e[r]=t[r].listener||t[r]
return e}(i):p(i,i.length)}function d(t){var e=this._events
if(void 0!==e){var r=e[t]
if("function"==typeof r)return 1
if(void 0!==r)return r.length}return 0}function p(t,e){for(var r=new Array(e),n=0;n<e;++n)r[n]=t[n]
return r}function b(t,e,r,n){if("function"==typeof t.on)n.once?t.once(e,r):t.on(e,r)
else{if("function"!=typeof t.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)
t.addEventListener(e,(function i(o){n.once&&t.removeEventListener(e,i),r(o)}))}}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(t){if("number"!=typeof t||t<0||i(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".")
a=t}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||i(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".")
return this._maxListeners=t,this},o.prototype.getMaxListeners=function(){return u(this)},o.prototype.emit=function(t){for(var e=[],r=1;r<arguments.length;r++)e.push(arguments[r])
var i="error"===t,o=this._events
if(void 0!==o)i=i&&void 0===o.error
else if(!i)return!1
if(i){var a
if(e.length>0&&(a=e[0]),a instanceof Error)throw a
var s=new Error("Unhandled error."+(a?" ("+a.message+")":""))
throw s.context=a,s}var u=o[t]
if(void 0===u)return!1
if("function"==typeof u)n(u,this,e)
else{var c=u.length,f=p(u,c)
for(r=0;r<c;++r)n(f[r],this,e)}return!0},o.prototype.addListener=function(t,e){return c(this,t,e,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(t,e){return c(this,t,e,!0)},o.prototype.once=function(t,e){return s(e),this.on(t,h(this,t,e)),this},o.prototype.prependOnceListener=function(t,e){return s(e),this.prependListener(t,h(this,t,e)),this},o.prototype.removeListener=function(t,e){var r,n,i,o,a
if(s(e),void 0===(n=this._events))return this
if(void 0===(r=n[t]))return this
if(r===e||r.listener===e)0==--this._eventsCount?this._events=Object.create(null):(delete n[t],n.removeListener&&this.emit("removeListener",t,r.listener||e))
else if("function"!=typeof r){for(i=-1,o=r.length-1;o>=0;o--)if(r[o]===e||r[o].listener===e){a=r[o].listener,i=o
break}if(i<0)return this
0===i?r.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1]
t.pop()}(r,i),1===r.length&&(n[t]=r[0]),void 0!==n.removeListener&&this.emit("removeListener",t,a||e)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(t){var e,r,n
if(void 0===(r=this._events))return this
if(void 0===r.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[t]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[t]),this
if(0===arguments.length){var i,o=Object.keys(r)
for(n=0;n<o.length;++n)"removeListener"!==(i=o[n])&&this.removeAllListeners(i)
return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(e=r[t]))this.removeListener(t,e)
else if(void 0!==e)for(n=e.length-1;n>=0;n--)this.removeListener(t,e[n])
return this},o.prototype.listeners=function(t){return l(this,t,!0)},o.prototype.rawListeners=function(t){return l(this,t,!1)},o.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):d.call(t,e)},o.prototype.listenerCount=d,o.prototype.eventNames=function(){return this._eventsCount>0?e(this._events):[]}},7085:(t,e,r)=>{var n=r(8850).Buffer,i=r(807)
t.exports=function(t,e,r,o){if(n.isBuffer(t)||(t=n.from(t,"binary")),e&&(n.isBuffer(e)||(e=n.from(e,"binary")),8!==e.length))throw new RangeError("salt should be Buffer with 8 byte length")
for(var a=r/8,s=n.alloc(a),u=n.alloc(o||0),c=n.alloc(0);a>0||o>0;){var f=new i
f.update(c),f.update(t),e&&f.update(e),c=f.digest()
var h=0
if(a>0){var l=s.length-a
h=Math.min(a,c.length),c.copy(s,l,0,h),a-=h}if(h<c.length&&o>0){var d=u.length-o,p=Math.min(o,c.length-h)
c.copy(u,d,h,h+p),o-=p}}return c.fill(0),{key:s,iv:u}}},5721:t=>{function e(t,e,r,n){var i,o=null==(i=n)||"number"==typeof i||"boolean"==typeof i?n:r(n),a=e.get(o)
return void 0===a&&(a=t.call(this,n),e.set(o,a)),a}function r(t,e,r){var n=Array.prototype.slice.call(arguments,3),i=r(n),o=e.get(i)
return void 0===o&&(o=t.apply(this,n),e.set(i,o)),o}function n(t,e,r,n,i){return r.bind(e,t,n,i)}function i(t,i){return n(t,this,1===t.length?e:r,i.cache.create(),i.serializer)}function o(){return JSON.stringify(arguments)}function a(){this.cache=Object.create(null)}a.prototype.has=function(t){return t in this.cache},a.prototype.get=function(t){return this.cache[t]},a.prototype.set=function(t,e){this.cache[t]=e}
var s={create:function(){return new a}}
t.exports=function(t,e){var r=e&&e.cache?e.cache:s,n=e&&e.serializer?e.serializer:o
return(e&&e.strategy?e.strategy:i)(t,{cache:r,serializer:n})},t.exports.strategies={variadic:function(t,e){return n(t,this,r,e.cache.create(),e.serializer)},monadic:function(t,r){return n(t,this,e,r.cache.create(),r.serializer)}}},2353:(t,e,r)=>{"use strict"
var n=r(8850).Buffer,i=r(7027).Transform
function o(t){i.call(this),this._block=n.allocUnsafe(t),this._blockSize=t,this._blockOffset=0,this._length=[0,0,0,0],this._finalized=!1}r(1736)(o,i),o.prototype._transform=function(t,e,r){var n=null
try{this.update(t,e)}catch(t){n=t}r(n)},o.prototype._flush=function(t){var e=null
try{this.push(this.digest())}catch(t){e=t}t(e)},o.prototype.update=function(t,e){if(function(t,e){if(!n.isBuffer(t)&&"string"!=typeof t)throw new TypeError("Data must be a string or a buffer")}(t),this._finalized)throw new Error("Digest already called")
n.isBuffer(t)||(t=n.from(t,e))
for(var r=this._block,i=0;this._blockOffset+t.length-i>=this._blockSize;){for(var o=this._blockOffset;o<this._blockSize;)r[o++]=t[i++]
this._update(),this._blockOffset=0}for(;i<t.length;)r[this._blockOffset++]=t[i++]
for(var a=0,s=8*t.length;s>0;++a)this._length[a]+=s,(s=this._length[a]/4294967296|0)>0&&(this._length[a]-=4294967296*s)
return this},o.prototype._update=function(){throw new Error("_update is not implemented")},o.prototype.digest=function(t){if(this._finalized)throw new Error("Digest already called")
this._finalized=!0
var e=this._digest()
void 0!==t&&(e=e.toString(t)),this._block.fill(0),this._blockOffset=0
for(var r=0;r<4;++r)this._length[r]=0
return e},o.prototype._digest=function(){throw new Error("_digest is not implemented")},t.exports=o},1894:t=>{"use strict"
var e={}
function r(t,r,n){n||(n=Error)
var i=function(t){var e,n
function i(e,n,i){return t.call(this,function(t,e,n){return"string"==typeof r?r:r(t,e,n)}(e,n,i))||this}return n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,i}(n)
i.prototype.name=n.name,i.prototype.code=t,e[t]=i}function n(t,e){if(Array.isArray(t)){var r=t.length
return t=t.map((function(t){return String(t)})),r>2?"one of ".concat(e," ").concat(t.slice(0,r-1).join(", "),", or ")+t[r-1]:2===r?"one of ".concat(e," ").concat(t[0]," or ").concat(t[1]):"of ".concat(e," ").concat(t[0])}return"of ".concat(e," ").concat(String(t))}r("ERR_INVALID_OPT_VALUE",(function(t,e){return'The value "'+e+'" is invalid for option "'+t+'"'}),TypeError),r("ERR_INVALID_ARG_TYPE",(function(t,e,r){var i,o,a,s
if("string"==typeof e&&("not ","not "===e.substr(0,4))?(i="must not be",e=e.replace(/^not /,"")):i="must be",function(t,e,r){return(void 0===r||r>t.length)&&(r=t.length)," argument"===t.substring(r-9,r)}(t))o="The ".concat(t," ").concat(i," ").concat(n(e,"type"))
else{var u=("number"!=typeof s&&(s=0),s+1>(a=t).length||-1===a.indexOf(".",s)?"argument":"property")
o='The "'.concat(t,'" ').concat(u," ").concat(i," ").concat(n(e,"type"))}return o+". Received type ".concat(typeof r)}),TypeError),r("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF"),r("ERR_METHOD_NOT_IMPLEMENTED",(function(t){return"The "+t+" method is not implemented"})),r("ERR_STREAM_PREMATURE_CLOSE","Premature close"),r("ERR_STREAM_DESTROYED",(function(t){return"Cannot call "+t+" after a stream was destroyed"})),r("ERR_MULTIPLE_CALLBACK","Callback called multiple times"),r("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable"),r("ERR_STREAM_WRITE_AFTER_END","write after end"),r("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError),r("ERR_UNKNOWN_ENCODING",(function(t){return"Unknown encoding: "+t}),TypeError),r("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event"),t.exports.q=e},5612:(t,e,r)=>{"use strict"
var n=Object.keys||function(t){var e=[]
for(var r in t)e.push(r)
return e}
t.exports=c
var i=r(6066),o=r(260)
r(1736)(c,i)
for(var a=n(o.prototype),s=0;s<a.length;s++){var u=a[s]
c.prototype[u]||(c.prototype[u]=o.prototype[u])}function c(t){if(!(this instanceof c))return new c(t)
i.call(this,t),o.call(this,t),this.allowHalfOpen=!0,t&&(!1===t.readable&&(this.readable=!1),!1===t.writable&&(this.writable=!1),!1===t.allowHalfOpen&&(this.allowHalfOpen=!1,this.once("end",f)))}function f(){this._writableState.ended||process.nextTick(h,this)}function h(t){t.end()}Object.defineProperty(c.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(c.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(c.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(c.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&this._readableState.destroyed&&this._writableState.destroyed},set:function(t){void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed=t,this._writableState.destroyed=t)}})},8804:(t,e,r)=>{"use strict"
t.exports=i
var n=r(5063)
function i(t){if(!(this instanceof i))return new i(t)
n.call(this,t)}r(1736)(i,n),i.prototype._transform=function(t,e,r){r(null,t)}},6066:(t,e,r)=>{"use strict"
var n
t.exports=E,E.ReadableState=S,r(8291).EventEmitter
var i,o=function(t,e){return t.listeners(e).length},a=r(6467),s=r(9033).Buffer,u=(void 0!==r.g?r.g:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{}).Uint8Array||function(){},c=r(1616)
i=c&&c.debuglog?c.debuglog("stream"):function(){}
var f,h,l,d=r(9771),p=r(1571),b=r(9289).getHighWaterMark,m=r(1894).q,v=m.ERR_INVALID_ARG_TYPE,g=m.ERR_STREAM_PUSH_AFTER_EOF,y=m.ERR_METHOD_NOT_IMPLEMENTED,w=m.ERR_STREAM_UNSHIFT_AFTER_END_EVENT
r(1736)(E,a)
var _=p.errorOrDestroy,M=["error","close","destroy","pause","resume"]
function S(t,e,i){n=n||r(5612),t=t||{},"boolean"!=typeof i&&(i=e instanceof n),this.objectMode=!!t.objectMode,i&&(this.objectMode=this.objectMode||!!t.readableObjectMode),this.highWaterMark=b(this,t,"readableHighWaterMark",i),this.buffer=new d,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.paused=!0,this.emitClose=!1!==t.emitClose,this.autoDestroy=!!t.autoDestroy,this.destroyed=!1,this.defaultEncoding=t.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,t.encoding&&(f||(f=r(3443).s),this.decoder=new f(t.encoding),this.encoding=t.encoding)}function E(t){if(n=n||r(5612),!(this instanceof E))return new E(t)
var e=this instanceof n
this._readableState=new S(t,this,e),this.readable=!0,t&&("function"==typeof t.read&&(this._read=t.read),"function"==typeof t.destroy&&(this._destroy=t.destroy)),a.call(this)}function k(t,e,r,n,o){i("readableAddChunk",e)
var a,c=t._readableState
if(null===e)c.reading=!1,function(t,e){if(i("onEofChunk"),!e.ended){if(e.decoder){var r=e.decoder.end()
r&&r.length&&(e.buffer.push(r),e.length+=e.objectMode?1:r.length)}e.ended=!0,e.sync?x(t):(e.needReadable=!1,e.emittedReadable||(e.emittedReadable=!0,C(t)))}}(t,c)
else if(o||(a=function(t,e){var r,n
return n=e,s.isBuffer(n)||n instanceof u||"string"==typeof e||void 0===e||t.objectMode||(r=new v("chunk",["string","Buffer","Uint8Array"],e)),r}(c,e)),a)_(t,a)
else if(c.objectMode||e&&e.length>0)if("string"==typeof e||c.objectMode||Object.getPrototypeOf(e)===s.prototype||(e=function(t){return s.from(t)}(e)),n)c.endEmitted?_(t,new w):A(t,c,e,!0)
else if(c.ended)_(t,new g)
else{if(c.destroyed)return!1
c.reading=!1,c.decoder&&!r?(e=c.decoder.write(e),c.objectMode||0!==e.length?A(t,c,e,!1):I(t,c)):A(t,c,e,!1)}else n||(c.reading=!1,I(t,c))
return!c.ended&&(c.length<c.highWaterMark||0===c.length)}function A(t,e,r,n){e.flowing&&0===e.length&&!e.sync?(e.awaitDrain=0,t.emit("data",r)):(e.length+=e.objectMode?1:r.length,n?e.buffer.unshift(r):e.buffer.push(r),e.needReadable&&x(t)),I(t,e)}Object.defineProperty(E.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(t){this._readableState&&(this._readableState.destroyed=t)}}),E.prototype.destroy=p.destroy,E.prototype._undestroy=p.undestroy,E.prototype._destroy=function(t,e){e(t)},E.prototype.push=function(t,e){var r,n=this._readableState
return n.objectMode?r=!0:"string"==typeof t&&((e=e||n.defaultEncoding)!==n.encoding&&(t=s.from(t,e),e=""),r=!0),k(this,t,e,!1,r)},E.prototype.unshift=function(t){return k(this,t,null,!0,!1)},E.prototype.isPaused=function(){return!1===this._readableState.flowing},E.prototype.setEncoding=function(t){f||(f=r(3443).s)
var e=new f(t)
this._readableState.decoder=e,this._readableState.encoding=this._readableState.decoder.encoding
for(var n=this._readableState.buffer.head,i="";null!==n;)i+=e.write(n.data),n=n.next
return this._readableState.buffer.clear(),""!==i&&this._readableState.buffer.push(i),this._readableState.length=i.length,this}
var T=1073741824
function R(t,e){return t<=0||0===e.length&&e.ended?0:e.objectMode?1:t!=t?e.flowing&&e.length?e.buffer.head.data.length:e.length:(t>e.highWaterMark&&(e.highWaterMark=function(t){return t>=T?t=T:(t--,t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,t|=t>>>16,t++),t}(t)),t<=e.length?t:e.ended?e.length:(e.needReadable=!0,0))}function x(t){var e=t._readableState
i("emitReadable",e.needReadable,e.emittedReadable),e.needReadable=!1,e.emittedReadable||(i("emitReadable",e.flowing),e.emittedReadable=!0,process.nextTick(C,t))}function C(t){var e=t._readableState
i("emitReadable_",e.destroyed,e.length,e.ended),e.destroyed||!e.length&&!e.ended||(t.emit("readable"),e.emittedReadable=!1),e.needReadable=!e.flowing&&!e.ended&&e.length<=e.highWaterMark,N(t)}function I(t,e){e.readingMore||(e.readingMore=!0,process.nextTick(B,t,e))}function B(t,e){for(;!e.reading&&!e.ended&&(e.length<e.highWaterMark||e.flowing&&0===e.length);){var r=e.length
if(i("maybeReadMore read 0"),t.read(0),r===e.length)break}e.readingMore=!1}function O(t){var e=t._readableState
e.readableListening=t.listenerCount("readable")>0,e.resumeScheduled&&!e.paused?e.flowing=!0:t.listenerCount("data")>0&&t.resume()}function P(t){i("readable nexttick read 0"),t.read(0)}function L(t,e){i("resume",e.reading),e.reading||t.read(0),e.resumeScheduled=!1,t.emit("resume"),N(t),e.flowing&&!e.reading&&t.read(0)}function N(t){var e=t._readableState
for(i("flow",e.flowing);e.flowing&&null!==t.read(););}function D(t,e){return 0===e.length?null:(e.objectMode?r=e.buffer.shift():!t||t>=e.length?(r=e.decoder?e.buffer.join(""):1===e.buffer.length?e.buffer.first():e.buffer.concat(e.length),e.buffer.clear()):r=e.buffer.consume(t,e.decoder),r)
var r}function j(t){var e=t._readableState
i("endReadable",e.endEmitted),e.endEmitted||(e.ended=!0,process.nextTick(U,e,t))}function U(t,e){if(i("endReadableNT",t.endEmitted,t.length),!t.endEmitted&&0===t.length&&(t.endEmitted=!0,e.readable=!1,e.emit("end"),t.autoDestroy)){var r=e._writableState;(!r||r.autoDestroy&&r.finished)&&e.destroy()}}function H(t,e){for(var r=0,n=t.length;r<n;r++)if(t[r]===e)return r
return-1}E.prototype.read=function(t){i("read",t),t=parseInt(t,10)
var e=this._readableState,r=t
if(0!==t&&(e.emittedReadable=!1),0===t&&e.needReadable&&((0!==e.highWaterMark?e.length>=e.highWaterMark:e.length>0)||e.ended))return i("read: emitReadable",e.length,e.ended),0===e.length&&e.ended?j(this):x(this),null
if(0===(t=R(t,e))&&e.ended)return 0===e.length&&j(this),null
var n,o=e.needReadable
return i("need readable",o),(0===e.length||e.length-t<e.highWaterMark)&&i("length less than watermark",o=!0),e.ended||e.reading?i("reading or ended",o=!1):o&&(i("do read"),e.reading=!0,e.sync=!0,0===e.length&&(e.needReadable=!0),this._read(e.highWaterMark),e.sync=!1,e.reading||(t=R(r,e))),null===(n=t>0?D(t,e):null)?(e.needReadable=e.length<=e.highWaterMark,t=0):(e.length-=t,e.awaitDrain=0),0===e.length&&(e.ended||(e.needReadable=!0),r!==t&&e.ended&&j(this)),null!==n&&this.emit("data",n),n},E.prototype._read=function(t){_(this,new y("_read()"))},E.prototype.pipe=function(t,e){var r=this,n=this._readableState
switch(n.pipesCount){case 0:n.pipes=t
break
case 1:n.pipes=[n.pipes,t]
break
default:n.pipes.push(t)}n.pipesCount+=1,i("pipe count=%d opts=%j",n.pipesCount,e)
var a=e&&!1===e.end||t===process.stdout||t===process.stderr?p:s
function s(){i("onend"),t.end()}n.endEmitted?process.nextTick(a):r.once("end",a),t.on("unpipe",(function e(o,a){i("onunpipe"),o===r&&a&&!1===a.hasUnpiped&&(a.hasUnpiped=!0,i("cleanup"),t.removeListener("close",l),t.removeListener("finish",d),t.removeListener("drain",u),t.removeListener("error",h),t.removeListener("unpipe",e),r.removeListener("end",s),r.removeListener("end",p),r.removeListener("data",f),c=!0,!n.awaitDrain||t._writableState&&!t._writableState.needDrain||u())}))
var u=function(t){return function(){var e=t._readableState
i("pipeOnDrain",e.awaitDrain),e.awaitDrain&&e.awaitDrain--,0===e.awaitDrain&&o(t,"data")&&(e.flowing=!0,N(t))}}(r)
t.on("drain",u)
var c=!1
function f(e){i("ondata")
var o=t.write(e)
i("dest.write",o),!1===o&&((1===n.pipesCount&&n.pipes===t||n.pipesCount>1&&-1!==H(n.pipes,t))&&!c&&(i("false write response, pause",n.awaitDrain),n.awaitDrain++),r.pause())}function h(e){i("onerror",e),p(),t.removeListener("error",h),0===o(t,"error")&&_(t,e)}function l(){t.removeListener("finish",d),p()}function d(){i("onfinish"),t.removeListener("close",l),p()}function p(){i("unpipe"),r.unpipe(t)}return r.on("data",f),function(t,e,r){if("function"==typeof t.prependListener)return t.prependListener(e,r)
t._events&&t._events[e]?Array.isArray(t._events[e])?t._events[e].unshift(r):t._events[e]=[r,t._events[e]]:t.on(e,r)}(t,"error",h),t.once("close",l),t.once("finish",d),t.emit("pipe",r),n.flowing||(i("pipe resume"),r.resume()),t},E.prototype.unpipe=function(t){var e=this._readableState,r={hasUnpiped:!1}
if(0===e.pipesCount)return this
if(1===e.pipesCount)return t&&t!==e.pipes||(t||(t=e.pipes),e.pipes=null,e.pipesCount=0,e.flowing=!1,t&&t.emit("unpipe",this,r)),this
if(!t){var n=e.pipes,i=e.pipesCount
e.pipes=null,e.pipesCount=0,e.flowing=!1
for(var o=0;o<i;o++)n[o].emit("unpipe",this,{hasUnpiped:!1})
return this}var a=H(e.pipes,t)
return-1===a||(e.pipes.splice(a,1),e.pipesCount-=1,1===e.pipesCount&&(e.pipes=e.pipes[0]),t.emit("unpipe",this,r)),this},E.prototype.on=function(t,e){var r=a.prototype.on.call(this,t,e),n=this._readableState
return"data"===t?(n.readableListening=this.listenerCount("readable")>0,!1!==n.flowing&&this.resume()):"readable"===t&&(n.endEmitted||n.readableListening||(n.readableListening=n.needReadable=!0,n.flowing=!1,n.emittedReadable=!1,i("on readable",n.length,n.reading),n.length?x(this):n.reading||process.nextTick(P,this))),r},E.prototype.addListener=E.prototype.on,E.prototype.removeListener=function(t,e){var r=a.prototype.removeListener.call(this,t,e)
return"readable"===t&&process.nextTick(O,this),r},E.prototype.removeAllListeners=function(t){var e=a.prototype.removeAllListeners.apply(this,arguments)
return"readable"!==t&&void 0!==t||process.nextTick(O,this),e},E.prototype.resume=function(){var t=this._readableState
return t.flowing||(i("resume"),t.flowing=!t.readableListening,function(t,e){e.resumeScheduled||(e.resumeScheduled=!0,process.nextTick(L,t,e))}(this,t)),t.paused=!1,this},E.prototype.pause=function(){return i("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(i("pause"),this._readableState.flowing=!1,this.emit("pause")),this._readableState.paused=!0,this},E.prototype.wrap=function(t){var e=this,r=this._readableState,n=!1
for(var o in t.on("end",(function(){if(i("wrapped end"),r.decoder&&!r.ended){var t=r.decoder.end()
t&&t.length&&e.push(t)}e.push(null)})),t.on("data",(function(o){i("wrapped data"),r.decoder&&(o=r.decoder.write(o)),r.objectMode&&null==o||(r.objectMode||o&&o.length)&&(e.push(o)||(n=!0,t.pause()))})),t)void 0===this[o]&&"function"==typeof t[o]&&(this[o]=function(e){return function(){return t[e].apply(t,arguments)}}(o))
for(var a=0;a<M.length;a++)t.on(M[a],this.emit.bind(this,M[a]))
return this._read=function(e){i("wrapped _read",e),n&&(n=!1,t.resume())},this},"function"==typeof Symbol&&(E.prototype[Symbol.asyncIterator]=function(){return void 0===h&&(h=r(2904)),h(this)}),Object.defineProperty(E.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}}),Object.defineProperty(E.prototype,"readableBuffer",{enumerable:!1,get:function(){return this._readableState&&this._readableState.buffer}}),Object.defineProperty(E.prototype,"readableFlowing",{enumerable:!1,get:function(){return this._readableState.flowing},set:function(t){this._readableState&&(this._readableState.flowing=t)}}),E._fromList=D,Object.defineProperty(E.prototype,"readableLength",{enumerable:!1,get:function(){return this._readableState.length}}),"function"==typeof Symbol&&(E.from=function(t,e){return void 0===l&&(l=r(4683)),l(E,t,e)})},5063:(t,e,r)=>{"use strict"
t.exports=f
var n=r(1894).q,i=n.ERR_METHOD_NOT_IMPLEMENTED,o=n.ERR_MULTIPLE_CALLBACK,a=n.ERR_TRANSFORM_ALREADY_TRANSFORMING,s=n.ERR_TRANSFORM_WITH_LENGTH_0,u=r(5612)
function c(t,e){var r=this._transformState
r.transforming=!1
var n=r.writecb
if(null===n)return this.emit("error",new o)
r.writechunk=null,r.writecb=null,null!=e&&this.push(e),n(t)
var i=this._readableState
i.reading=!1,(i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}function f(t){if(!(this instanceof f))return new f(t)
u.call(this,t),this._transformState={afterTransform:c.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,t&&("function"==typeof t.transform&&(this._transform=t.transform),"function"==typeof t.flush&&(this._flush=t.flush)),this.on("prefinish",h)}function h(){var t=this
"function"!=typeof this._flush||this._readableState.destroyed?l(this,null,null):this._flush((function(e,r){l(t,e,r)}))}function l(t,e,r){if(e)return t.emit("error",e)
if(null!=r&&t.push(r),t._writableState.length)throw new s
if(t._transformState.transforming)throw new a
return t.push(null)}r(1736)(f,u),f.prototype.push=function(t,e){return this._transformState.needTransform=!1,u.prototype.push.call(this,t,e)},f.prototype._transform=function(t,e,r){r(new i("_transform()"))},f.prototype._write=function(t,e,r){var n=this._transformState
if(n.writecb=r,n.writechunk=t,n.writeencoding=e,!n.transforming){var i=this._readableState;(n.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},f.prototype._read=function(t){var e=this._transformState
null===e.writechunk||e.transforming?e.needTransform=!0:(e.transforming=!0,this._transform(e.writechunk,e.writeencoding,e.afterTransform))},f.prototype._destroy=function(t,e){u.prototype._destroy.call(this,t,(function(t){e(t)}))}},260:(t,e,r)=>{"use strict"
function n(t){var e=this
this.next=null,this.entry=null,this.finish=function(){!function(t,e,r){var n=t.entry
for(t.entry=null;n;){var i=n.callback
e.pendingcb--,i(void 0),n=n.next}e.corkedRequestsFree.next=t}(e,t)}}var i
t.exports=E,E.WritableState=S
var o,a={deprecate:r(6219)},s=r(6467),u=r(9033).Buffer,c=(void 0!==r.g?r.g:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{}).Uint8Array||function(){},f=r(1571),h=r(9289).getHighWaterMark,l=r(1894).q,d=l.ERR_INVALID_ARG_TYPE,p=l.ERR_METHOD_NOT_IMPLEMENTED,b=l.ERR_MULTIPLE_CALLBACK,m=l.ERR_STREAM_CANNOT_PIPE,v=l.ERR_STREAM_DESTROYED,g=l.ERR_STREAM_NULL_VALUES,y=l.ERR_STREAM_WRITE_AFTER_END,w=l.ERR_UNKNOWN_ENCODING,_=f.errorOrDestroy
function M(){}function S(t,e,o){i=i||r(5612),t=t||{},"boolean"!=typeof o&&(o=e instanceof i),this.objectMode=!!t.objectMode,o&&(this.objectMode=this.objectMode||!!t.writableObjectMode),this.highWaterMark=h(this,t,"writableHighWaterMark",o),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1
var a=!1===t.decodeStrings
this.decodeStrings=!a,this.defaultEncoding=t.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(t){!function(t,e){var r=t._writableState,n=r.sync,i=r.writecb
if("function"!=typeof i)throw new b
if(function(t){t.writing=!1,t.writecb=null,t.length-=t.writelen,t.writelen=0}(r),e)!function(t,e,r,n,i){--e.pendingcb,r?(process.nextTick(i,n),process.nextTick(C,t,e),t._writableState.errorEmitted=!0,_(t,n)):(i(n),t._writableState.errorEmitted=!0,_(t,n),C(t,e))}(t,r,n,e,i)
else{var o=R(r)||t.destroyed
o||r.corked||r.bufferProcessing||!r.bufferedRequest||T(t,r),n?process.nextTick(A,t,r,o,i):A(t,r,o,i)}}(e,t)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.emitClose=!1!==t.emitClose,this.autoDestroy=!!t.autoDestroy,this.bufferedRequestCount=0,this.corkedRequestsFree=new n(this)}function E(t){var e=this instanceof(i=i||r(5612))
if(!e&&!o.call(E,this))return new E(t)
this._writableState=new S(t,this,e),this.writable=!0,t&&("function"==typeof t.write&&(this._write=t.write),"function"==typeof t.writev&&(this._writev=t.writev),"function"==typeof t.destroy&&(this._destroy=t.destroy),"function"==typeof t.final&&(this._final=t.final)),s.call(this)}function k(t,e,r,n,i,o,a){e.writelen=n,e.writecb=a,e.writing=!0,e.sync=!0,e.destroyed?e.onwrite(new v("write")):r?t._writev(i,e.onwrite):t._write(i,o,e.onwrite),e.sync=!1}function A(t,e,r,n){r||function(t,e){0===e.length&&e.needDrain&&(e.needDrain=!1,t.emit("drain"))}(t,e),e.pendingcb--,n(),C(t,e)}function T(t,e){e.bufferProcessing=!0
var r=e.bufferedRequest
if(t._writev&&r&&r.next){var i=e.bufferedRequestCount,o=new Array(i),a=e.corkedRequestsFree
a.entry=r
for(var s=0,u=!0;r;)o[s]=r,r.isBuf||(u=!1),r=r.next,s+=1
o.allBuffers=u,k(t,e,!0,e.length,o,"",a.finish),e.pendingcb++,e.lastBufferedRequest=null,a.next?(e.corkedRequestsFree=a.next,a.next=null):e.corkedRequestsFree=new n(e),e.bufferedRequestCount=0}else{for(;r;){var c=r.chunk,f=r.encoding,h=r.callback
if(k(t,e,!1,e.objectMode?1:c.length,c,f,h),r=r.next,e.bufferedRequestCount--,e.writing)break}null===r&&(e.lastBufferedRequest=null)}e.bufferedRequest=r,e.bufferProcessing=!1}function R(t){return t.ending&&0===t.length&&null===t.bufferedRequest&&!t.finished&&!t.writing}function x(t,e){t._final((function(r){e.pendingcb--,r&&_(t,r),e.prefinished=!0,t.emit("prefinish"),C(t,e)}))}function C(t,e){var r=R(e)
if(r&&(function(t,e){e.prefinished||e.finalCalled||("function"!=typeof t._final||e.destroyed?(e.prefinished=!0,t.emit("prefinish")):(e.pendingcb++,e.finalCalled=!0,process.nextTick(x,t,e)))}(t,e),0===e.pendingcb&&(e.finished=!0,t.emit("finish"),e.autoDestroy))){var n=t._readableState;(!n||n.autoDestroy&&n.endEmitted)&&t.destroy()}return r}r(1736)(E,s),S.prototype.getBuffer=function(){for(var t=this.bufferedRequest,e=[];t;)e.push(t),t=t.next
return e},function(){try{Object.defineProperty(S.prototype,"buffer",{get:a.deprecate((function(){return this.getBuffer()}),"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(t){}}(),"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(o=Function.prototype[Symbol.hasInstance],Object.defineProperty(E,Symbol.hasInstance,{value:function(t){return!!o.call(this,t)||this===E&&t&&t._writableState instanceof S}})):o=function(t){return t instanceof this},E.prototype.pipe=function(){_(this,new m)},E.prototype.write=function(t,e,r){var n,i=this._writableState,o=!1,a=!i.objectMode&&(n=t,u.isBuffer(n)||n instanceof c)
return a&&!u.isBuffer(t)&&(t=function(t){return u.from(t)}(t)),"function"==typeof e&&(r=e,e=null),a?e="buffer":e||(e=i.defaultEncoding),"function"!=typeof r&&(r=M),i.ending?function(t,e){var r=new y
_(t,r),process.nextTick(e,r)}(this,r):(a||function(t,e,r,n){var i
return null===r?i=new g:"string"==typeof r||e.objectMode||(i=new d("chunk",["string","Buffer"],r)),!i||(_(t,i),process.nextTick(n,i),!1)}(this,i,t,r))&&(i.pendingcb++,o=function(t,e,r,n,i,o){if(!r){var a=function(t,e,r){return t.objectMode||!1===t.decodeStrings||"string"!=typeof e||(e=u.from(e,r)),e}(e,n,i)
n!==a&&(r=!0,i="buffer",n=a)}var s=e.objectMode?1:n.length
e.length+=s
var c=e.length<e.highWaterMark
if(c||(e.needDrain=!0),e.writing||e.corked){var f=e.lastBufferedRequest
e.lastBufferedRequest={chunk:n,encoding:i,isBuf:r,callback:o,next:null},f?f.next=e.lastBufferedRequest:e.bufferedRequest=e.lastBufferedRequest,e.bufferedRequestCount+=1}else k(t,e,!1,s,n,i,o)
return c}(this,i,a,t,e,r)),o},E.prototype.cork=function(){this._writableState.corked++},E.prototype.uncork=function(){var t=this._writableState
t.corked&&(t.corked--,t.writing||t.corked||t.bufferProcessing||!t.bufferedRequest||T(this,t))},E.prototype.setDefaultEncoding=function(t){if("string"==typeof t&&(t=t.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((t+"").toLowerCase())>-1))throw new w(t)
return this._writableState.defaultEncoding=t,this},Object.defineProperty(E.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(E.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),E.prototype._write=function(t,e,r){r(new p("_write()"))},E.prototype._writev=null,E.prototype.end=function(t,e,r){var n=this._writableState
return"function"==typeof t?(r=t,t=null,e=null):"function"==typeof e&&(r=e,e=null),null!=t&&this.write(t,e),n.corked&&(n.corked=1,this.uncork()),n.ending||function(t,e,r){e.ending=!0,C(t,e),r&&(e.finished?process.nextTick(r):t.once("finish",r)),e.ended=!0,t.writable=!1}(this,n,r),this},Object.defineProperty(E.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(E.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(t){this._writableState&&(this._writableState.destroyed=t)}}),E.prototype.destroy=f.destroy,E.prototype._undestroy=f.undestroy,E.prototype._destroy=function(t,e){e(t)}},2904:(t,e,r)=>{"use strict"
var n
function i(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t
var r=t[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(t,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t)
return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var o=r(1674),a=Symbol("lastResolve"),s=Symbol("lastReject"),u=Symbol("error"),c=Symbol("ended"),f=Symbol("lastPromise"),h=Symbol("handlePromise"),l=Symbol("stream")
function d(t,e){return{value:t,done:e}}function p(t){var e=t[a]
if(null!==e){var r=t[l].read()
null!==r&&(t[f]=null,t[a]=null,t[s]=null,e(d(r,!1)))}}function b(t){process.nextTick(p,t)}var m=Object.getPrototypeOf((function(){})),v=Object.setPrototypeOf((i(n={get stream(){return this[l]},next:function(){var t=this,e=this[u]
if(null!==e)return Promise.reject(e)
if(this[c])return Promise.resolve(d(void 0,!0))
if(this[l].destroyed)return new Promise((function(e,r){process.nextTick((function(){t[u]?r(t[u]):e(d(void 0,!0))}))}))
var r,n=this[f]
if(n)r=new Promise(function(t,e){return function(r,n){t.then((function(){e[c]?r(d(void 0,!0)):e[h](r,n)}),n)}}(n,this))
else{var i=this[l].read()
if(null!==i)return Promise.resolve(d(i,!1))
r=new Promise(this[h])}return this[f]=r,r}},Symbol.asyncIterator,(function(){return this})),i(n,"return",(function(){var t=this
return new Promise((function(e,r){t[l].destroy(null,(function(t){t?r(t):e(d(void 0,!0))}))}))})),n),m)
t.exports=function(t){var e,r=Object.create(v,(i(e={},l,{value:t,writable:!0}),i(e,a,{value:null,writable:!0}),i(e,s,{value:null,writable:!0}),i(e,u,{value:null,writable:!0}),i(e,c,{value:t._readableState.endEmitted,writable:!0}),i(e,h,{value:function(t,e){var n=r[l].read()
n?(r[f]=null,r[a]=null,r[s]=null,t(d(n,!1))):(r[a]=t,r[s]=e)},writable:!0}),e))
return r[f]=null,o(t,(function(t){if(t&&"ERR_STREAM_PREMATURE_CLOSE"!==t.code){var e=r[s]
return null!==e&&(r[f]=null,r[a]=null,r[s]=null,e(t)),void(r[u]=t)}var n=r[a]
null!==n&&(r[f]=null,r[a]=null,r[s]=null,n(d(void 0,!0))),r[c]=!0})),t.on("readable",b.bind(null,r)),r}},9771:(t,e,r)=>{"use strict"
function n(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e,r){return(e=a(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t){var e=function(t,e){if("object"!=typeof t||null===t)return t
var r=t[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(t,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t)
return"symbol"==typeof e?e:String(e)}var s=r(9033).Buffer,u=r(9386).inspect,c=u&&u.custom||"inspect"
t.exports=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.head=null,this.tail=null,this.length=0}var e,r
return e=t,(r=[{key:"push",value:function(t){var e={data:t,next:null}
this.length>0?this.tail.next=e:this.head=e,this.tail=e,++this.length}},{key:"unshift",value:function(t){var e={data:t,next:this.head}
0===this.length&&(this.tail=e),this.head=e,++this.length}},{key:"shift",value:function(){if(0!==this.length){var t=this.head.data
return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,t}}},{key:"clear",value:function(){this.head=this.tail=null,this.length=0}},{key:"join",value:function(t){if(0===this.length)return""
for(var e=this.head,r=""+e.data;e=e.next;)r+=t+e.data
return r}},{key:"concat",value:function(t){if(0===this.length)return s.alloc(0)
for(var e,r,n,i=s.allocUnsafe(t>>>0),o=this.head,a=0;o;)e=o.data,r=i,n=a,s.prototype.copy.call(e,r,n),a+=o.data.length,o=o.next
return i}},{key:"consume",value:function(t,e){var r
return t<this.head.data.length?(r=this.head.data.slice(0,t),this.head.data=this.head.data.slice(t)):r=t===this.head.data.length?this.shift():e?this._getString(t):this._getBuffer(t),r}},{key:"first",value:function(){return this.head.data}},{key:"_getString",value:function(t){var e=this.head,r=1,n=e.data
for(t-=n.length;e=e.next;){var i=e.data,o=t>i.length?i.length:t
if(o===i.length?n+=i:n+=i.slice(0,t),0==(t-=o)){o===i.length?(++r,e.next?this.head=e.next:this.head=this.tail=null):(this.head=e,e.data=i.slice(o))
break}++r}return this.length-=r,n}},{key:"_getBuffer",value:function(t){var e=s.allocUnsafe(t),r=this.head,n=1
for(r.data.copy(e),t-=r.data.length;r=r.next;){var i=r.data,o=t>i.length?i.length:t
if(i.copy(e,e.length-t,0,o),0==(t-=o)){o===i.length?(++n,r.next?this.head=r.next:this.head=this.tail=null):(this.head=r,r.data=i.slice(o))
break}++n}return this.length-=n,e}},{key:c,value:function(t,e){return u(this,i(i({},e),{},{depth:0,customInspect:!1}))}}])&&function(t,e){for(var r=0;r<e.length;r++){var n=e[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,a(n.key),n)}}(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}()},1571:t=>{"use strict"
function e(t,e){n(t,e),r(t)}function r(t){t._writableState&&!t._writableState.emitClose||t._readableState&&!t._readableState.emitClose||t.emit("close")}function n(t,e){t.emit("error",e)}t.exports={destroy:function(t,i){var o=this,a=this._readableState&&this._readableState.destroyed,s=this._writableState&&this._writableState.destroyed
return a||s?(i?i(t):t&&(this._writableState?this._writableState.errorEmitted||(this._writableState.errorEmitted=!0,process.nextTick(n,this,t)):process.nextTick(n,this,t)),this):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(t||null,(function(t){!i&&t?o._writableState?o._writableState.errorEmitted?process.nextTick(r,o):(o._writableState.errorEmitted=!0,process.nextTick(e,o,t)):process.nextTick(e,o,t):i?(process.nextTick(r,o),i(t)):process.nextTick(r,o)})),this)},undestroy:function(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finalCalled=!1,this._writableState.prefinished=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)},errorOrDestroy:function(t,e){var r=t._readableState,n=t._writableState
r&&r.autoDestroy||n&&n.autoDestroy?t.destroy(e):t.emit("error",e)}}},1674:(t,e,r)=>{"use strict"
var n=r(1894).q.ERR_STREAM_PREMATURE_CLOSE
function i(){}t.exports=function t(e,r,o){if("function"==typeof r)return t(e,null,r)
r||(r={}),o=function(t){var e=!1
return function(){if(!e){e=!0
for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i]
t.apply(this,n)}}}(o||i)
var a=r.readable||!1!==r.readable&&e.readable,s=r.writable||!1!==r.writable&&e.writable,u=function(){e.writable||f()},c=e._writableState&&e._writableState.finished,f=function(){s=!1,c=!0,a||o.call(e)},h=e._readableState&&e._readableState.endEmitted,l=function(){a=!1,h=!0,s||o.call(e)},d=function(t){o.call(e,t)},p=function(){var t
return a&&!h?(e._readableState&&e._readableState.ended||(t=new n),o.call(e,t)):s&&!c?(e._writableState&&e._writableState.ended||(t=new n),o.call(e,t)):void 0},b=function(){e.req.on("finish",f)}
return function(t){return t.setHeader&&"function"==typeof t.abort}(e)?(e.on("complete",f),e.on("abort",p),e.req?b():e.on("request",b)):s&&!e._writableState&&(e.on("end",u),e.on("close",u)),e.on("end",l),e.on("finish",f),!1!==r.error&&e.on("error",d),e.on("close",p),function(){e.removeListener("complete",f),e.removeListener("abort",p),e.removeListener("request",b),e.req&&e.req.removeListener("finish",f),e.removeListener("end",u),e.removeListener("close",u),e.removeListener("finish",f),e.removeListener("end",l),e.removeListener("error",d),e.removeListener("close",p)}}},4683:t=>{t.exports=function(){throw new Error("Readable.from is not available in the browser")}},1945:(t,e,r)=>{"use strict"
var n,i=r(1894).q,o=i.ERR_MISSING_ARGS,a=i.ERR_STREAM_DESTROYED
function s(t){if(t)throw t}function u(t){t()}function c(t,e){return t.pipe(e)}t.exports=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
var f,h=function(t){return t.length?"function"!=typeof t[t.length-1]?s:t.pop():s}(e)
if(Array.isArray(e[0])&&(e=e[0]),e.length<2)throw new o("streams")
var l=e.map((function(t,i){var o=i<e.length-1
return function(t,e,i,o){o=function(t){var e=!1
return function(){e||(e=!0,t.apply(void 0,arguments))}}(o)
var s=!1
t.on("close",(function(){s=!0})),void 0===n&&(n=r(1674)),n(t,{readable:e,writable:i},(function(t){if(t)return o(t)
s=!0,o()}))
var u=!1
return function(e){if(!s&&!u)return u=!0,function(t){return t.setHeader&&"function"==typeof t.abort}(t)?t.abort():"function"==typeof t.destroy?t.destroy():void o(e||new a("pipe"))}}(t,o,i>0,(function(t){f||(f=t),t&&l.forEach(u),o||(l.forEach(u),h(f))}))}))
return e.reduce(c)}},9289:(t,e,r)=>{"use strict"
var n=r(1894).q.ERR_INVALID_OPT_VALUE
t.exports={getHighWaterMark:function(t,e,r,i){var o=function(t,e,r){return null!=t.highWaterMark?t.highWaterMark:e?t[r]:null}(e,i,r)
if(null!=o){if(!isFinite(o)||Math.floor(o)!==o||o<0)throw new n(i?r:"highWaterMark",o)
return Math.floor(o)}return t.objectMode?16:16384}}},6467:(t,e,r)=>{t.exports=r(8291).EventEmitter},7027:(t,e,r)=>{(e=t.exports=r(6066)).Stream=e,e.Readable=e,e.Writable=r(260),e.Duplex=r(5612),e.Transform=r(5063),e.PassThrough=r(8804),e.finished=r(1674),e.pipeline=r(1945)},3443:(t,e,r)=>{"use strict"
var n=r(8850).Buffer,i=n.isEncoding||function(t){switch((t=""+t)&&t.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0
default:return!1}}
function o(t){var e
switch(this.encoding=function(t){var e=function(t){if(!t)return"utf8"
for(var e;;)switch(t){case"utf8":case"utf-8":return"utf8"
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le"
case"latin1":case"binary":return"latin1"
case"base64":case"ascii":case"hex":return t
default:if(e)return
t=(""+t).toLowerCase(),e=!0}}(t)
if("string"!=typeof e&&(n.isEncoding===i||!i(t)))throw new Error("Unknown encoding: "+t)
return e||t}(t),this.encoding){case"utf16le":this.text=u,this.end=c,e=4
break
case"utf8":this.fillLast=s,e=4
break
case"base64":this.text=f,this.end=h,e=3
break
default:return this.write=l,void(this.end=d)}this.lastNeed=0,this.lastTotal=0,this.lastChar=n.allocUnsafe(e)}function a(t){return t<=127?0:t>>5==6?2:t>>4==14?3:t>>3==30?4:t>>6==2?-1:-2}function s(t){var e=this.lastTotal-this.lastNeed,r=function(t,e,r){if(128!=(192&e[0]))return t.lastNeed=0,"�"
if(t.lastNeed>1&&e.length>1){if(128!=(192&e[1]))return t.lastNeed=1,"�"
if(t.lastNeed>2&&e.length>2&&128!=(192&e[2]))return t.lastNeed=2,"�"}}(this,t)
return void 0!==r?r:this.lastNeed<=t.length?(t.copy(this.lastChar,e,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(t.copy(this.lastChar,e,0,t.length),void(this.lastNeed-=t.length))}function u(t,e){if((t.length-e)%2==0){var r=t.toString("utf16le",e)
if(r){var n=r.charCodeAt(r.length-1)
if(n>=55296&&n<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1],r.slice(0,-1)}return r}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=t[t.length-1],t.toString("utf16le",e,t.length-1)}function c(t){var e=t&&t.length?this.write(t):""
if(this.lastNeed){var r=this.lastTotal-this.lastNeed
return e+this.lastChar.toString("utf16le",0,r)}return e}function f(t,e){var r=(t.length-e)%3
return 0===r?t.toString("base64",e):(this.lastNeed=3-r,this.lastTotal=3,1===r?this.lastChar[0]=t[t.length-1]:(this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1]),t.toString("base64",e,t.length-r))}function h(t){var e=t&&t.length?this.write(t):""
return this.lastNeed?e+this.lastChar.toString("base64",0,3-this.lastNeed):e}function l(t){return t.toString(this.encoding)}function d(t){return t&&t.length?this.write(t):""}e.s=o,o.prototype.write=function(t){if(0===t.length)return""
var e,r
if(this.lastNeed){if(void 0===(e=this.fillLast(t)))return""
r=this.lastNeed,this.lastNeed=0}else r=0
return r<t.length?e?e+this.text(t,r):this.text(t,r):e||""},o.prototype.end=function(t){var e=t&&t.length?this.write(t):""
return this.lastNeed?e+"�":e},o.prototype.text=function(t,e){var r=function(t,e,r){var n=e.length-1
if(n<r)return 0
var i=a(e[n])
return i>=0?(i>0&&(t.lastNeed=i-1),i):--n<r||-2===i?0:(i=a(e[n]))>=0?(i>0&&(t.lastNeed=i-2),i):--n<r||-2===i?0:(i=a(e[n]))>=0?(i>0&&(2===i?i=0:t.lastNeed=i-3),i):0}(this,t,e)
if(!this.lastNeed)return t.toString("utf8",e)
this.lastTotal=r
var n=t.length-(r-this.lastNeed)
return t.copy(this.lastChar,0,n),t.toString("utf8",e,n)},o.prototype.fillLast=function(t){if(this.lastNeed<=t.length)return t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)
t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,t.length),this.lastNeed-=t.length}},7198:(t,e,r)=>{var n=e
n.utils=r(4268),n.common=r(4696),n.sha=r(9310),n.ripemd=r(9294),n.hmac=r(3201),n.sha1=n.sha.sha1,n.sha256=n.sha.sha256,n.sha224=n.sha.sha224,n.sha384=n.sha.sha384,n.sha512=n.sha.sha512,n.ripemd160=n.ripemd.ripemd160},4696:(t,e,r)=>{"use strict"
var n=r(4268),i=r(4504)
function o(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian="big",this._delta8=this.blockSize/8,this._delta32=this.blockSize/32}e.BlockHash=o,o.prototype.update=function(t,e){if(t=n.toArray(t,e),this.pending?this.pending=this.pending.concat(t):this.pending=t,this.pendingTotal+=t.length,this.pending.length>=this._delta8){var r=(t=this.pending).length%this._delta8
this.pending=t.slice(t.length-r,t.length),0===this.pending.length&&(this.pending=null),t=n.join32(t,0,t.length-r,this.endian)
for(var i=0;i<t.length;i+=this._delta32)this._update(t,i,i+this._delta32)}return this},o.prototype.digest=function(t){return this.update(this._pad()),i(null===this.pending),this._digest(t)},o.prototype._pad=function(){var t=this.pendingTotal,e=this._delta8,r=e-(t+this.padLength)%e,n=new Array(r+this.padLength)
n[0]=128
for(var i=1;i<r;i++)n[i]=0
if(t<<=3,"big"===this.endian){for(var o=8;o<this.padLength;o++)n[i++]=0
n[i++]=0,n[i++]=0,n[i++]=0,n[i++]=0,n[i++]=t>>>24&255,n[i++]=t>>>16&255,n[i++]=t>>>8&255,n[i++]=255&t}else for(n[i++]=255&t,n[i++]=t>>>8&255,n[i++]=t>>>16&255,n[i++]=t>>>24&255,n[i++]=0,n[i++]=0,n[i++]=0,n[i++]=0,o=8;o<this.padLength;o++)n[i++]=0
return n}},3201:(t,e,r)=>{"use strict"
var n=r(4268),i=r(4504)
function o(t,e,r){if(!(this instanceof o))return new o(t,e,r)
this.Hash=t,this.blockSize=t.blockSize/8,this.outSize=t.outSize/8,this.inner=null,this.outer=null,this._init(n.toArray(e,r))}t.exports=o,o.prototype._init=function(t){t.length>this.blockSize&&(t=(new this.Hash).update(t).digest()),i(t.length<=this.blockSize)
for(var e=t.length;e<this.blockSize;e++)t.push(0)
for(e=0;e<t.length;e++)t[e]^=54
for(this.inner=(new this.Hash).update(t),e=0;e<t.length;e++)t[e]^=106
this.outer=(new this.Hash).update(t)},o.prototype.update=function(t,e){return this.inner.update(t,e),this},o.prototype.digest=function(t){return this.outer.update(this.inner.digest()),this.outer.digest(t)}},9294:(t,e,r)=>{"use strict"
var n=r(4268),i=r(4696),o=n.rotl32,a=n.sum32,s=n.sum32_3,u=n.sum32_4,c=i.BlockHash
function f(){if(!(this instanceof f))return new f
c.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.endian="little"}function h(t,e,r,n){return t<=15?e^r^n:t<=31?e&r|~e&n:t<=47?(e|~r)^n:t<=63?e&n|r&~n:e^(r|~n)}function l(t){return t<=15?0:t<=31?1518500249:t<=47?1859775393:t<=63?2400959708:2840853838}function d(t){return t<=15?1352829926:t<=31?1548603684:t<=47?1836072691:t<=63?2053994217:0}n.inherits(f,c),e.ripemd160=f,f.blockSize=512,f.outSize=160,f.hmacStrength=192,f.padLength=64,f.prototype._update=function(t,e){for(var r=this.h[0],n=this.h[1],i=this.h[2],c=this.h[3],f=this.h[4],g=r,y=n,w=i,_=c,M=f,S=0;S<80;S++){var E=a(o(u(r,h(S,n,i,c),t[p[S]+e],l(S)),m[S]),f)
r=f,f=c,c=o(i,10),i=n,n=E,E=a(o(u(g,h(79-S,y,w,_),t[b[S]+e],d(S)),v[S]),M),g=M,M=_,_=o(w,10),w=y,y=E}E=s(this.h[1],i,_),this.h[1]=s(this.h[2],c,M),this.h[2]=s(this.h[3],f,g),this.h[3]=s(this.h[4],r,y),this.h[4]=s(this.h[0],n,w),this.h[0]=E},f.prototype._digest=function(t){return"hex"===t?n.toHex32(this.h,"little"):n.split32(this.h,"little")}
var p=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],b=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],m=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],v=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]},9310:(t,e,r)=>{"use strict"
e.sha1=r(8142),e.sha224=r(4909),e.sha256=r(7682),e.sha384=r(4532),e.sha512=r(6515)},8142:(t,e,r)=>{"use strict"
var n=r(4268),i=r(4696),o=r(70),a=n.rotl32,s=n.sum32,u=n.sum32_5,c=o.ft_1,f=i.BlockHash,h=[1518500249,1859775393,2400959708,3395469782]
function l(){if(!(this instanceof l))return new l
f.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.W=new Array(80)}n.inherits(l,f),t.exports=l,l.blockSize=512,l.outSize=160,l.hmacStrength=80,l.padLength=64,l.prototype._update=function(t,e){for(var r=this.W,n=0;n<16;n++)r[n]=t[e+n]
for(;n<r.length;n++)r[n]=a(r[n-3]^r[n-8]^r[n-14]^r[n-16],1)
var i=this.h[0],o=this.h[1],f=this.h[2],l=this.h[3],d=this.h[4]
for(n=0;n<r.length;n++){var p=~~(n/20),b=u(a(i,5),c(p,o,f,l),d,r[n],h[p])
d=l,l=f,f=a(o,30),o=i,i=b}this.h[0]=s(this.h[0],i),this.h[1]=s(this.h[1],o),this.h[2]=s(this.h[2],f),this.h[3]=s(this.h[3],l),this.h[4]=s(this.h[4],d)},l.prototype._digest=function(t){return"hex"===t?n.toHex32(this.h,"big"):n.split32(this.h,"big")}},4909:(t,e,r)=>{"use strict"
var n=r(4268),i=r(7682)
function o(){if(!(this instanceof o))return new o
i.call(this),this.h=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428]}n.inherits(o,i),t.exports=o,o.blockSize=512,o.outSize=224,o.hmacStrength=192,o.padLength=64,o.prototype._digest=function(t){return"hex"===t?n.toHex32(this.h.slice(0,7),"big"):n.split32(this.h.slice(0,7),"big")}},7682:(t,e,r)=>{"use strict"
var n=r(4268),i=r(4696),o=r(70),a=r(4504),s=n.sum32,u=n.sum32_4,c=n.sum32_5,f=o.ch32,h=o.maj32,l=o.s0_256,d=o.s1_256,p=o.g0_256,b=o.g1_256,m=i.BlockHash,v=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]
function g(){if(!(this instanceof g))return new g
m.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=v,this.W=new Array(64)}n.inherits(g,m),t.exports=g,g.blockSize=512,g.outSize=256,g.hmacStrength=192,g.padLength=64,g.prototype._update=function(t,e){for(var r=this.W,n=0;n<16;n++)r[n]=t[e+n]
for(;n<r.length;n++)r[n]=u(b(r[n-2]),r[n-7],p(r[n-15]),r[n-16])
var i=this.h[0],o=this.h[1],m=this.h[2],v=this.h[3],g=this.h[4],y=this.h[5],w=this.h[6],_=this.h[7]
for(a(this.k.length===r.length),n=0;n<r.length;n++){var M=c(_,d(g),f(g,y,w),this.k[n],r[n]),S=s(l(i),h(i,o,m))
_=w,w=y,y=g,g=s(v,M),v=m,m=o,o=i,i=s(M,S)}this.h[0]=s(this.h[0],i),this.h[1]=s(this.h[1],o),this.h[2]=s(this.h[2],m),this.h[3]=s(this.h[3],v),this.h[4]=s(this.h[4],g),this.h[5]=s(this.h[5],y),this.h[6]=s(this.h[6],w),this.h[7]=s(this.h[7],_)},g.prototype._digest=function(t){return"hex"===t?n.toHex32(this.h,"big"):n.split32(this.h,"big")}},4532:(t,e,r)=>{"use strict"
var n=r(4268),i=r(6515)
function o(){if(!(this instanceof o))return new o
i.call(this),this.h=[3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428]}n.inherits(o,i),t.exports=o,o.blockSize=1024,o.outSize=384,o.hmacStrength=192,o.padLength=128,o.prototype._digest=function(t){return"hex"===t?n.toHex32(this.h.slice(0,12),"big"):n.split32(this.h.slice(0,12),"big")}},6515:(t,e,r)=>{"use strict"
var n=r(4268),i=r(4696),o=r(4504),a=n.rotr64_hi,s=n.rotr64_lo,u=n.shr64_hi,c=n.shr64_lo,f=n.sum64,h=n.sum64_hi,l=n.sum64_lo,d=n.sum64_4_hi,p=n.sum64_4_lo,b=n.sum64_5_hi,m=n.sum64_5_lo,v=i.BlockHash,g=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591]
function y(){if(!(this instanceof y))return new y
v.call(this),this.h=[1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],this.k=g,this.W=new Array(160)}function w(t,e,r,n,i){var o=t&r^~t&i
return o<0&&(o+=4294967296),o}function _(t,e,r,n,i,o){var a=e&n^~e&o
return a<0&&(a+=4294967296),a}function M(t,e,r,n,i){var o=t&r^t&i^r&i
return o<0&&(o+=4294967296),o}function S(t,e,r,n,i,o){var a=e&n^e&o^n&o
return a<0&&(a+=4294967296),a}function E(t,e){var r=a(t,e,28)^a(e,t,2)^a(e,t,7)
return r<0&&(r+=4294967296),r}function k(t,e){var r=s(t,e,28)^s(e,t,2)^s(e,t,7)
return r<0&&(r+=4294967296),r}function A(t,e){var r=s(t,e,14)^s(t,e,18)^s(e,t,9)
return r<0&&(r+=4294967296),r}function T(t,e){var r=a(t,e,1)^a(t,e,8)^u(t,e,7)
return r<0&&(r+=4294967296),r}function R(t,e){var r=s(t,e,1)^s(t,e,8)^c(t,e,7)
return r<0&&(r+=4294967296),r}function x(t,e){var r=s(t,e,19)^s(e,t,29)^c(t,e,6)
return r<0&&(r+=4294967296),r}n.inherits(y,v),t.exports=y,y.blockSize=1024,y.outSize=512,y.hmacStrength=192,y.padLength=128,y.prototype._prepareBlock=function(t,e){for(var r=this.W,n=0;n<32;n++)r[n]=t[e+n]
for(;n<r.length;n+=2){var i=(m=r[n-4],v=r[n-3],g=void 0,(g=a(m,v,19)^a(v,m,29)^u(m,v,6))<0&&(g+=4294967296),g),o=x(r[n-4],r[n-3]),s=r[n-14],c=r[n-13],f=T(r[n-30],r[n-29]),h=R(r[n-30],r[n-29]),l=r[n-32],b=r[n-31]
r[n]=d(i,o,s,c,f,h,l,b),r[n+1]=p(i,o,s,c,f,h,l,b)}var m,v,g},y.prototype._update=function(t,e){this._prepareBlock(t,e)
var r,n,i,s=this.W,u=this.h[0],c=this.h[1],d=this.h[2],p=this.h[3],v=this.h[4],g=this.h[5],y=this.h[6],T=this.h[7],R=this.h[8],x=this.h[9],C=this.h[10],I=this.h[11],B=this.h[12],O=this.h[13],P=this.h[14],L=this.h[15]
o(this.k.length===s.length)
for(var N=0;N<s.length;N+=2){var D=P,j=L,U=(i=void 0,(i=a(r=R,n=x,14)^a(r,n,18)^a(n,r,9))<0&&(i+=4294967296),i),H=A(R,x),q=w(R,0,C,0,B),F=_(0,x,0,I,0,O),z=this.k[N],W=this.k[N+1],K=s[N],G=s[N+1],Y=b(D,j,U,H,q,F,z,W,K,G),V=m(D,j,U,H,q,F,z,W,K,G)
D=E(u,c),j=k(u,c),U=M(u,0,d,0,v),H=S(0,c,0,p,0,g)
var X=h(D,j,U,H),Z=l(D,j,U,H)
P=B,L=O,B=C,O=I,C=R,I=x,R=h(y,T,Y,V),x=l(T,T,Y,V),y=v,T=g,v=d,g=p,d=u,p=c,u=h(Y,V,X,Z),c=l(Y,V,X,Z)}f(this.h,0,u,c),f(this.h,2,d,p),f(this.h,4,v,g),f(this.h,6,y,T),f(this.h,8,R,x),f(this.h,10,C,I),f(this.h,12,B,O),f(this.h,14,P,L)},y.prototype._digest=function(t){return"hex"===t?n.toHex32(this.h,"big"):n.split32(this.h,"big")}},70:(t,e,r)=>{"use strict"
var n=r(4268).rotr32
function i(t,e,r){return t&e^~t&r}function o(t,e,r){return t&e^t&r^e&r}function a(t,e,r){return t^e^r}e.ft_1=function(t,e,r,n){return 0===t?i(e,r,n):1===t||3===t?a(e,r,n):2===t?o(e,r,n):void 0},e.ch32=i,e.maj32=o,e.p32=a,e.s0_256=function(t){return n(t,2)^n(t,13)^n(t,22)},e.s1_256=function(t){return n(t,6)^n(t,11)^n(t,25)},e.g0_256=function(t){return n(t,7)^n(t,18)^t>>>3},e.g1_256=function(t){return n(t,17)^n(t,19)^t>>>10}},4268:(t,e,r)=>{"use strict"
var n=r(4504),i=r(1736)
function o(t,e){return 55296==(64512&t.charCodeAt(e))&&!(e<0||e+1>=t.length)&&56320==(64512&t.charCodeAt(e+1))}function a(t){return(t>>>24|t>>>8&65280|t<<8&16711680|(255&t)<<24)>>>0}function s(t){return 1===t.length?"0"+t:t}function u(t){return 7===t.length?"0"+t:6===t.length?"00"+t:5===t.length?"000"+t:4===t.length?"0000"+t:3===t.length?"00000"+t:2===t.length?"000000"+t:1===t.length?"0000000"+t:t}e.inherits=i,e.toArray=function(t,e){if(Array.isArray(t))return t.slice()
if(!t)return[]
var r=[]
if("string"==typeof t)if(e){if("hex"===e)for((t=t.replace(/[^a-z0-9]+/gi,"")).length%2!=0&&(t="0"+t),i=0;i<t.length;i+=2)r.push(parseInt(t[i]+t[i+1],16))}else for(var n=0,i=0;i<t.length;i++){var a=t.charCodeAt(i)
a<128?r[n++]=a:a<2048?(r[n++]=a>>6|192,r[n++]=63&a|128):o(t,i)?(a=65536+((1023&a)<<10)+(1023&t.charCodeAt(++i)),r[n++]=a>>18|240,r[n++]=a>>12&63|128,r[n++]=a>>6&63|128,r[n++]=63&a|128):(r[n++]=a>>12|224,r[n++]=a>>6&63|128,r[n++]=63&a|128)}else for(i=0;i<t.length;i++)r[i]=0|t[i]
return r},e.toHex=function(t){for(var e="",r=0;r<t.length;r++)e+=s(t[r].toString(16))
return e},e.htonl=a,e.toHex32=function(t,e){for(var r="",n=0;n<t.length;n++){var i=t[n]
"little"===e&&(i=a(i)),r+=u(i.toString(16))}return r},e.zero2=s,e.zero8=u,e.join32=function(t,e,r,i){var o=r-e
n(o%4==0)
for(var a=new Array(o/4),s=0,u=e;s<a.length;s++,u+=4){var c
c="big"===i?t[u]<<24|t[u+1]<<16|t[u+2]<<8|t[u+3]:t[u+3]<<24|t[u+2]<<16|t[u+1]<<8|t[u],a[s]=c>>>0}return a},e.split32=function(t,e){for(var r=new Array(4*t.length),n=0,i=0;n<t.length;n++,i+=4){var o=t[n]
"big"===e?(r[i]=o>>>24,r[i+1]=o>>>16&255,r[i+2]=o>>>8&255,r[i+3]=255&o):(r[i+3]=o>>>24,r[i+2]=o>>>16&255,r[i+1]=o>>>8&255,r[i]=255&o)}return r},e.rotr32=function(t,e){return t>>>e|t<<32-e},e.rotl32=function(t,e){return t<<e|t>>>32-e},e.sum32=function(t,e){return t+e>>>0},e.sum32_3=function(t,e,r){return t+e+r>>>0},e.sum32_4=function(t,e,r,n){return t+e+r+n>>>0},e.sum32_5=function(t,e,r,n,i){return t+e+r+n+i>>>0},e.sum64=function(t,e,r,n){var i=t[e],o=n+t[e+1]>>>0,a=(o<n?1:0)+r+i
t[e]=a>>>0,t[e+1]=o},e.sum64_hi=function(t,e,r,n){return(e+n>>>0<e?1:0)+t+r>>>0},e.sum64_lo=function(t,e,r,n){return e+n>>>0},e.sum64_4_hi=function(t,e,r,n,i,o,a,s){var u=0,c=e
return u+=(c=c+n>>>0)<e?1:0,u+=(c=c+o>>>0)<o?1:0,t+r+i+a+(u+=(c=c+s>>>0)<s?1:0)>>>0},e.sum64_4_lo=function(t,e,r,n,i,o,a,s){return e+n+o+s>>>0},e.sum64_5_hi=function(t,e,r,n,i,o,a,s,u,c){var f=0,h=e
return f+=(h=h+n>>>0)<e?1:0,f+=(h=h+o>>>0)<o?1:0,f+=(h=h+s>>>0)<s?1:0,t+r+i+a+u+(f+=(h=h+c>>>0)<c?1:0)>>>0},e.sum64_5_lo=function(t,e,r,n,i,o,a,s,u,c){return e+n+o+s+c>>>0},e.rotr64_hi=function(t,e,r){return(e<<32-r|t>>>r)>>>0},e.rotr64_lo=function(t,e,r){return(t<<32-r|e>>>r)>>>0},e.shr64_hi=function(t,e,r){return t>>>r},e.shr64_lo=function(t,e,r){return(t<<32-r|e>>>r)>>>0}},9410:(t,e,r)=>{"use strict"
var n=r(7198),i=r(6580),o=r(4504)
function a(t){if(!(this instanceof a))return new a(t)
this.hash=t.hash,this.predResist=!!t.predResist,this.outLen=this.hash.outSize,this.minEntropy=t.minEntropy||this.hash.hmacStrength,this._reseed=null,this.reseedInterval=null,this.K=null,this.V=null
var e=i.toArray(t.entropy,t.entropyEnc||"hex"),r=i.toArray(t.nonce,t.nonceEnc||"hex"),n=i.toArray(t.pers,t.persEnc||"hex")
o(e.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._init(e,r,n)}t.exports=a,a.prototype._init=function(t,e,r){var n=t.concat(e).concat(r)
this.K=new Array(this.outLen/8),this.V=new Array(this.outLen/8)
for(var i=0;i<this.V.length;i++)this.K[i]=0,this.V[i]=1
this._update(n),this._reseed=1,this.reseedInterval=281474976710656},a.prototype._hmac=function(){return new n.hmac(this.hash,this.K)},a.prototype._update=function(t){var e=this._hmac().update(this.V).update([0])
t&&(e=e.update(t)),this.K=e.digest(),this.V=this._hmac().update(this.V).digest(),t&&(this.K=this._hmac().update(this.V).update([1]).update(t).digest(),this.V=this._hmac().update(this.V).digest())},a.prototype.reseed=function(t,e,r,n){"string"!=typeof e&&(n=r,r=e,e=null),t=i.toArray(t,e),r=i.toArray(r,n),o(t.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._update(t.concat(r||[])),this._reseed=1},a.prototype.generate=function(t,e,r,n){if(this._reseed>this.reseedInterval)throw new Error("Reseed is required")
"string"!=typeof e&&(n=r,r=e,e=null),r&&(r=i.toArray(r,n||"hex"),this._update(r))
for(var o=[];o.length<t;)this.V=this._hmac().update(this.V).digest(),o=o.concat(this.V)
var a=o.slice(0,t)
return this._update(r),this._reseed++,i.encode(a,e)}},3226:(t,e)=>{e.read=function(t,e,r,n,i){var o,a,s=8*i-n-1,u=(1<<s)-1,c=u>>1,f=-7,h=r?i-1:0,l=r?-1:1,d=t[e+h]
for(h+=l,o=d&(1<<-f)-1,d>>=-f,f+=s;f>0;o=256*o+t[e+h],h+=l,f-=8);for(a=o&(1<<-f)-1,o>>=-f,f+=n;f>0;a=256*a+t[e+h],h+=l,f-=8);if(0===o)o=1-c
else{if(o===u)return a?NaN:1/0*(d?-1:1)
a+=Math.pow(2,n),o-=c}return(d?-1:1)*a*Math.pow(2,o-n)},e.write=function(t,e,r,n,i,o){var a,s,u,c=8*o-i-1,f=(1<<c)-1,h=f>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=n?0:o-1,p=n?1:-1,b=e<0||0===e&&1/e<0?1:0
for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,a=f):(a=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-a))<1&&(a--,u*=2),(e+=a+h>=1?l/u:l*Math.pow(2,1-h))*u>=2&&(a++,u/=2),a+h>=f?(s=0,a=f):a+h>=1?(s=(e*u-1)*Math.pow(2,i),a+=h):(s=e*Math.pow(2,h-1)*Math.pow(2,i),a=0));i>=8;t[r+d]=255&s,d+=p,s/=256,i-=8);for(a=a<<i|s,c+=i;c>0;t[r+d]=255&a,d+=p,a/=256,c-=8);t[r+d-p]|=128*b}},1736:t=>{"function"==typeof Object.create?t.exports=function(t,e){e&&(t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:t.exports=function(t,e){if(e){t.super_=e
var r=function(){}
r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}}},6990:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{default:()=>f})
var n,i=function(){function t(){this.registry=new WeakMap}return t.prototype.elementExists=function(t){return this.registry.has(t)},t.prototype.getElement=function(t){return this.registry.get(t)},t.prototype.addElement=function(t,e){t&&this.registry.set(t,e||{})},t.prototype.removeElement=function(t){this.registry.delete(t)},t.prototype.destroyRegistry=function(){this.registry=new WeakMap},t}(),o=function(){}
!function(t){t.enter="enter",t.exit="exit"}(n||(n={}))
var a,s=function(){function t(){this.registry=new i}return t.prototype.addCallback=function(t,e,r){var i,o,a
t===n.enter?((i={})[n.enter]=r,a=i):((o={})[n.exit]=r,a=o),this.registry.addElement(e,Object.assign({},this.registry.getElement(e),a))},t.prototype.dispatchCallback=function(t,e,r){if(t===n.enter){var i=this.registry.getElement(e).enter;(void 0===i?o:i)(r)}else{var a=this.registry.getElement(e)
a&&a.exit&&a.exit(r)}},t}(),u=(a=function(t,e){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},a(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null")
function r(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),c=function(){return c=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])
return t},c.apply(this,arguments)}
const f=function(t){function e(){var e=t.call(this)||this
return e.elementRegistry=new i,e}return u(e,t),e.prototype.observe=function(t,e){void 0===e&&(e={}),t&&(this.elementRegistry.addElement(t,c({},e)),this.setupObserver(t,c({},e)))},e.prototype.unobserve=function(t,e){var r=this.findMatchingRootEntry(e)
r&&r.intersectionObserver.unobserve(t)},e.prototype.addEnterCallback=function(t,e){this.addCallback(n.enter,t,e)},e.prototype.addExitCallback=function(t,e){this.addCallback(n.exit,t,e)},e.prototype.dispatchEnterCallback=function(t,e){this.dispatchCallback(n.enter,t,e)},e.prototype.dispatchExitCallback=function(t,e){this.dispatchCallback(n.exit,t,e)},e.prototype.destroy=function(){this.elementRegistry.destroyRegistry()},e.prototype.setupOnIntersection=function(t){var e=this
return function(r){return e.onIntersection(t,r)}},e.prototype.setupObserver=function(t,e){var r,n,i=e.root,o=void 0===i?window:i,a=this.findRootFromRegistry(o)
if(a&&(n=this.determineMatchingElements(e,a)),n){var s=n.elements,u=n.intersectionObserver
s.push(t),u&&u.observe(t)}else{var c={elements:[t],intersectionObserver:u=this.newObserver(t,e),options:e},f=this.stringifyOptions(e)
a?a[f]=c:this.elementRegistry.addElement(o,((r={})[f]=c,r))}},e.prototype.newObserver=function(t,e){var r=e.root,n=e.rootMargin,i=e.threshold,o=new IntersectionObserver(this.setupOnIntersection(e).bind(this),{root:r,rootMargin:n,threshold:i})
return o.observe(t),o},e.prototype.onIntersection=function(t,e){var r=this
e.forEach((function(e){var n=e.isIntersecting,i=e.intersectionRatio,o=t.threshold||0
Array.isArray(o)&&(o=o[o.length-1])
var a=r.findMatchingRootEntry(t)
n||i>o?a&&a.elements.some((function(t){return!(!t||t!==e.target||(r.dispatchEnterCallback(t,e),0))})):a&&a.elements.some((function(t){return!(!t||t!==e.target||(r.dispatchExitCallback(t,e),0))}))}))},e.prototype.findRootFromRegistry=function(t){if(this.elementRegistry)return this.elementRegistry.getElement(t)},e.prototype.findMatchingRootEntry=function(t){var e=t.root,r=void 0===e?window:e,n=this.findRootFromRegistry(r)
if(n)return n[this.stringifyOptions(t)]},e.prototype.determineMatchingElements=function(t,e){var r=this,n=Object.keys(e).filter((function(n){var i=e[n].options
return r.areOptionsSame(t,i)}))[0]
return e[n]},e.prototype.areOptionsSame=function(t,e){if(t===e)return!0
var r=Object.prototype.toString.call(t),n=Object.prototype.toString.call(e)
if(r!==n)return!1
if("[object Object]"!==r&&"[object Object]"!==n)return t===e
if(t&&e&&"object"==typeof t&&"object"==typeof e)for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&!1===this.areOptionsSame(t[i],e[i]))return!1
return!0},e.prototype.stringifyOptions=function(t){var e=t.root
return JSON.stringify(t,(function(t,r){if("root"===t&&e){var n=Array.prototype.slice.call(e.classList).reduce((function(t,e){return t+e}),""),i=e.id
return"".concat(i,"-").concat(n)}return r}))},e}(s)},173:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{SKELETON_TYPE:()=>i,SyntaxError:()=>x,TYPE:()=>n,createLiteralElement:()=>v,createNumberElement:()=>g,isArgumentElement:()=>s,isDateElement:()=>c,isDateTimeSkeleton:()=>m,isLiteralElement:()=>a,isNumberElement:()=>u,isNumberSkeleton:()=>b,isPluralElement:()=>l,isPoundElement:()=>d,isSelectElement:()=>h,isTagElement:()=>p,isTimeElement:()=>f,parse:()=>O,pegParse:()=>C})
var n,i,o=r(7480)
function a(t){return t.type===n.literal}function s(t){return t.type===n.argument}function u(t){return t.type===n.number}function c(t){return t.type===n.date}function f(t){return t.type===n.time}function h(t){return t.type===n.select}function l(t){return t.type===n.plural}function d(t){return t.type===n.pound}function p(t){return t.type===n.tag}function b(t){return!(!t||"object"!=typeof t||t.type!==i.number)}function m(t){return!(!t||"object"!=typeof t||t.type!==i.dateTime)}function v(t){return{type:n.literal,value:t}}function g(t,e){return{type:n.number,value:t,style:e}}!function(t){t[t.literal=0]="literal",t[t.argument=1]="argument",t[t.number=2]="number",t[t.date=3]="date",t[t.time=4]="time",t[t.select=5]="select",t[t.plural=6]="plural",t[t.pound=7]="pound",t[t.tag=8]="tag"}(n||(n={})),function(t){t[t.number=0]="number",t[t.dateTime=1]="dateTime"}(i||(i={}))
var y=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g,w=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,_=/^(@+)?(\+|#+)?$/g,M=/(\*)(0+)|(#+)(0+)|(0+)/g,S=/^(0+)$/
function E(t){var e={}
return t.replace(_,(function(t,r,n){return"string"!=typeof n?(e.minimumSignificantDigits=r.length,e.maximumSignificantDigits=r.length):"+"===n?e.minimumSignificantDigits=r.length:"#"===r[0]?e.maximumSignificantDigits=r.length:(e.minimumSignificantDigits=r.length,e.maximumSignificantDigits=r.length+("string"==typeof n?n.length:0)),""})),e}function k(t){switch(t){case"sign-auto":return{signDisplay:"auto"}
case"sign-accounting":case"()":return{currencySign:"accounting"}
case"sign-always":case"+!":return{signDisplay:"always"}
case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"}
case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"}
case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"}
case"sign-never":case"+_":return{signDisplay:"never"}}}function A(t){var e
if("E"===t[0]&&"E"===t[1]?(e={notation:"engineering"},t=t.slice(2)):"E"===t[0]&&(e={notation:"scientific"},t=t.slice(1)),e){var r=t.slice(0,2)
if("+!"===r?(e.signDisplay="always",t=t.slice(2)):"+?"===r&&(e.signDisplay="exceptZero",t=t.slice(2)),!S.test(t))throw new Error("Malformed concise eng/scientific notation")
e.minimumIntegerDigits=t.length}return e}function T(t){return k(t)||{}}function R(t){for(var e={},r=0,n=t;r<n.length;r++){var i=n[r]
switch(i.stem){case"percent":case"%":e.style="percent"
continue
case"%x100":e.style="percent",e.scale=100
continue
case"currency":e.style="currency",e.currency=i.options[0]
continue
case"group-off":case",_":e.useGrouping=!1
continue
case"precision-integer":case".":e.maximumFractionDigits=0
continue
case"measure-unit":case"unit":e.style="unit",e.unit=i.options[0].replace(/^(.*?)-/,"")
continue
case"compact-short":case"K":e.notation="compact",e.compactDisplay="short"
continue
case"compact-long":case"KK":e.notation="compact",e.compactDisplay="long"
continue
case"scientific":e=(0,o.pi)((0,o.pi)((0,o.pi)({},e),{notation:"scientific"}),i.options.reduce((function(t,e){return(0,o.pi)((0,o.pi)({},t),T(e))}),{}))
continue
case"engineering":e=(0,o.pi)((0,o.pi)((0,o.pi)({},e),{notation:"engineering"}),i.options.reduce((function(t,e){return(0,o.pi)((0,o.pi)({},t),T(e))}),{}))
continue
case"notation-simple":e.notation="standard"
continue
case"unit-width-narrow":e.currencyDisplay="narrowSymbol",e.unitDisplay="narrow"
continue
case"unit-width-short":e.currencyDisplay="code",e.unitDisplay="short"
continue
case"unit-width-full-name":e.currencyDisplay="name",e.unitDisplay="long"
continue
case"unit-width-iso-code":e.currencyDisplay="symbol"
continue
case"scale":e.scale=parseFloat(i.options[0])
continue
case"integer-width":if(i.options.length>1)throw new RangeError("integer-width stems only accept a single optional option")
i.options[0].replace(M,(function(t,r,n,i,o,a){if(r)e.minimumIntegerDigits=n.length
else{if(i&&o)throw new Error("We currently do not support maximum integer digits")
if(a)throw new Error("We currently do not support exact integer digits")}return""}))
continue}if(S.test(i.stem))e.minimumIntegerDigits=i.stem.length
else if(w.test(i.stem)){if(i.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option")
i.stem.replace(w,(function(t,r,n,i,o,a){return"*"===n?e.minimumFractionDigits=r.length:i&&"#"===i[0]?e.maximumFractionDigits=i.length:o&&a?(e.minimumFractionDigits=o.length,e.maximumFractionDigits=o.length+a.length):(e.minimumFractionDigits=r.length,e.maximumFractionDigits=r.length),""})),i.options.length&&(e=(0,o.pi)((0,o.pi)({},e),E(i.options[0])))}else if(_.test(i.stem))e=(0,o.pi)((0,o.pi)({},e),E(i.stem))
else{var a=k(i.stem)
a&&(e=(0,o.pi)((0,o.pi)({},e),a))
var s=A(i.stem)
s&&(e=(0,o.pi)((0,o.pi)({},e),s))}}return e}var x=function(t){function e(r,n,i,o){var a=t.call(this)||this
return a.message=r,a.expected=n,a.found=i,a.location=o,a.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(a,e),a}return(0,o.ZT)(e,t),e.buildMessage=function(t,e){function r(t){return t.charCodeAt(0).toString(16).toUpperCase()}function n(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+r(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+r(t)}))}function i(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+r(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+r(t)}))}function o(t){switch(t.type){case"literal":return'"'+n(t.text)+'"'
case"class":var e=t.parts.map((function(t){return Array.isArray(t)?i(t[0])+"-"+i(t[1]):i(t)}))
return"["+(t.inverted?"^":"")+e+"]"
case"any":return"any character"
case"end":return"end of input"
case"other":return t.description}}return"Expected "+function(t){var e,r,n=t.map(o)
if(n.sort(),n.length>0){for(e=1,r=1;e<n.length;e++)n[e-1]!==n[e]&&(n[r]=n[e],r++)
n.length=r}switch(n.length){case 1:return n[0]
case 2:return n[0]+" or "+n[1]
default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}(t)+" but "+((a=e)?'"'+n(a)+'"':"end of input")+" found."
var a},e}(Error),C=function(t,e){e=void 0!==e?e:{}
var r,a={},s={start:Ce},u=Ce,c=function(){return!ur},f=function(t){return t},h=function(){return ur},l="<",d=Ee("<",!1),p=function(t){return t.join("")},b=function(){return"<"},m=function(t){return(0,o.pi)({type:n.literal,value:t},ir())},v="#",g=Ee("#",!1),w=function(){return(0,o.pi)({type:n.pound},ir())},_=Ae("tagElement"),M=function(t,e,r){return t!==r&&Se('Mismatch tag "'+t+'" !== "'+r+'"',Me()),(0,o.pi)({type:n.tag,value:t,children:e},ir())},S="/>",E=Ee("/>",!1),k=function(t){return(0,o.pi)({type:n.literal,value:t.join("")},ir())},A=">",T=Ee(">",!1),C=function(t){return t},I="</",B=Ee("</",!1),O=Ae("argumentElement"),P="{",L=Ee("{",!1),N="}",D=Ee("}",!1),j=function(t){return(0,o.pi)({type:n.argument,value:t},ir())},U=Ae("numberSkeletonId"),H=/^['\/{}]/,q=ke(["'","/","{","}"],!1,!1),F={type:"any"},z=Ae("numberSkeletonTokenOption"),W="/",K=Ee("/",!1),G=function(t){return t},Y=Ae("numberSkeletonToken"),V=function(t,e){return{stem:t,options:e}},X=function(t){return(0,o.pi)({type:i.number,tokens:t,parsedOptions:cr?R(t):{}},ir())},Z="::",J=Ee("::",!1),$=function(t){return t},Q=function(){return rr.push("numberArgStyle"),!0},tt=function(t){return rr.pop(),t.replace(/\s*$/,"")},et=",",rt=Ee(",",!1),nt="number",it=Ee("number",!1),ot=function(t,e,r){return(0,o.pi)({type:"number"===e?n.number:"date"===e?n.date:n.time,style:r&&r[2],value:t},ir())},at="'",st=Ee("'",!1),ut=/^[^']/,ct=ke(["'"],!0,!1),ft=/^[^a-zA-Z'{}]/,ht=ke([["a","z"],["A","Z"],"'","{","}"],!0,!1),lt=/^[a-zA-Z]/,dt=ke([["a","z"],["A","Z"]],!1,!1),pt=function(t){return(0,o.pi)({type:i.dateTime,pattern:t,parsedOptions:cr?(e=t,r={},e.replace(y,(function(t){var e=t.length
switch(t[0]){case"G":r.era=4===e?"long":5===e?"narrow":"short"
break
case"y":r.year=2===e?"2-digit":"numeric"
break
case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead")
case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported")
case"M":case"L":r.month=["numeric","2-digit","short","long","narrow"][e-1]
break
case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported")
case"d":r.day=["numeric","2-digit"][e-1]
break
case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead")
case"E":r.weekday=4===e?"short":5===e?"narrow":"short"
break
case"e":if(e<4)throw new RangeError("`e..eee` (weekday) patterns are not supported")
r.weekday=["short","long","narrow","short"][e-4]
break
case"c":if(e<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported")
r.weekday=["short","long","narrow","short"][e-4]
break
case"a":r.hour12=!0
break
case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead")
case"h":r.hourCycle="h12",r.hour=["numeric","2-digit"][e-1]
break
case"H":r.hourCycle="h23",r.hour=["numeric","2-digit"][e-1]
break
case"K":r.hourCycle="h11",r.hour=["numeric","2-digit"][e-1]
break
case"k":r.hourCycle="h24",r.hour=["numeric","2-digit"][e-1]
break
case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead")
case"m":r.minute=["numeric","2-digit"][e-1]
break
case"s":r.second=["numeric","2-digit"][e-1]
break
case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead")
case"z":r.timeZoneName=e<4?"short":"long"
break
case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""})),r):{}},ir())
var e,r},bt=function(){return rr.push("dateOrTimeArgStyle"),!0},mt="date",vt=Ee("date",!1),gt="time",yt=Ee("time",!1),wt="plural",_t=Ee("plural",!1),Mt="selectordinal",St=Ee("selectordinal",!1),Et="offset:",kt=Ee("offset:",!1),At=function(t,e,r,i){return(0,o.pi)({type:n.plural,pluralType:"plural"===e?"cardinal":"ordinal",value:t,offset:r?r[2]:0,options:i.reduce((function(t,e){var r=e.id,n=e.value,i=e.location
return r in t&&Se('Duplicate option "'+r+'" in plural element: "'+_e()+'"',Me()),t[r]={value:n,location:i},t}),{})},ir())},Tt="select",Rt=Ee("select",!1),xt=function(t,e){return(0,o.pi)({type:n.select,value:t,options:e.reduce((function(t,e){var r=e.id,n=e.value,i=e.location
return r in t&&Se('Duplicate option "'+r+'" in select element: "'+_e()+'"',Me()),t[r]={value:n,location:i},t}),{})},ir())},Ct="=",It=Ee("=",!1),Bt=function(t){return rr.push("select"),!0},Ot=function(t,e){return rr.pop(),(0,o.pi)({id:t,value:e},ir())},Pt=function(t){return rr.push("plural"),!0},Lt=function(t,e){return rr.pop(),(0,o.pi)({id:t,value:e},ir())},Nt=Ae("whitespace"),Dt=/^[\t-\r \x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,jt=ke([["\t","\r"]," ",""," "," ",[" "," "],"\u2028","\u2029"," "," ","　"],!1,!1),Ut=Ae("syntax pattern"),Ht=/^[!-\/:-@[-\^`{-~\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u2010-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46]/,qt=ke([["!","/"],[":","@"],["[","^"],"`",["{","~"],["¡","§"],"©","«","¬","®","°","±","¶","»","¿","×","÷",["‐","‧"],["‰","‾"],["⁁","⁓"],["⁕","⁞"],["←","⑟"],["─","❵"],["➔","⯿"],["⸀","⹿"],["、","〃"],["〈","〠"],"〰","﴾","﴿","﹅","﹆"],!1,!1),Ft=Ae("optional whitespace"),zt=Ae("number"),Wt="-",Kt=Ee("-",!1),Gt=function(t,e){return e?t?-e:e:0},Yt=(Ae("apostrophe"),Ae("double apostrophes")),Vt="''",Xt=Ee("''",!1),Zt=function(){return"'"},Jt=function(t,e){return t+e.replace("''","'")},$t=function(t){return!("<"===t||"{"===t||nr()&&"#"===t||rr.length>1&&"}"===t)},Qt="\n",te=Ee("\n",!1),ee=function(t){return"<"===t||">"===t||"{"===t||"}"===t||nr()&&"#"===t},re=Ae("argNameOrNumber"),ne=Ae("validTag"),ie=Ae("argNumber"),oe="0",ae=Ee("0",!1),se=function(){return 0},ue=/^[1-9]/,ce=ke([["1","9"]],!1,!1),fe=/^[0-9]/,he=ke([["0","9"]],!1,!1),le=function(t){return parseInt(t.join(""),10)},de=Ae("argName"),pe=Ae("tagName"),be=0,me=0,ve=[{line:1,column:1}],ge=0,ye=[],we=0
if(void 0!==e.startRule){if(!(e.startRule in s))throw new Error("Can't start parsing from rule \""+e.startRule+'".')
u=s[e.startRule]}function _e(){return t.substring(me,be)}function Me(){return Re(me,be)}function Se(t,e){throw function(t,e){return new x(t,[],"",e)}(t,e=void 0!==e?e:Re(me,be))}function Ee(t,e){return{type:"literal",text:t,ignoreCase:e}}function ke(t,e,r){return{type:"class",parts:t,inverted:e,ignoreCase:r}}function Ae(t){return{type:"other",description:t}}function Te(e){var r,n=ve[e]
if(n)return n
for(r=e-1;!ve[r];)r--
for(n={line:(n=ve[r]).line,column:n.column};r<e;)10===t.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++
return ve[e]=n,n}function Re(t,e){var r=Te(t),n=Te(e)
return{start:{offset:t,line:r.line,column:r.column},end:{offset:e,line:n.line,column:n.column}}}function xe(t){be<ge||(be>ge&&(ge=be,ye=[]),ye.push(t))}function Ce(){return Ie()}function Ie(){var t,e
for(t=[],e=Be();e!==a;)t.push(e),e=Be()
return t}function Be(){var e,r
return e=be,me=be,(c()?void 0:a)!==a?(r=function(){var t,e,r,n
return we++,(t=Le())===a&&(t=be,(e=Ne())!==a&&(r=Ie())!==a&&(n=De())!==a?(me=t,t=e=M(e,r,n)):(be=t,t=a)),we--,t===a&&(e=a,0===we&&xe(_)),t}(),r!==a?(me=e,e=f(r)):(be=e,e=a)):(be=e,e=a),e===a&&(e=function(){var t,e
return t=be,(e=Oe())!==a&&(me=t,e=m(e)),e}())===a&&(e=function(){var e,r,n,i
return we++,e=be,123===t.charCodeAt(be)?(r=P,be++):(r=a,0===we&&xe(L)),r!==a&&Ye()!==a&&(n=$e())!==a&&Ye()!==a?(125===t.charCodeAt(be)?(i=N,be++):(i=a,0===we&&xe(D)),i!==a?(me=e,e=r=j(n)):(be=e,e=a)):(be=e,e=a),we--,e===a&&(r=a,0===we&&xe(O)),e}())===a&&(e=function(){var e
return e=function(){var e,r,n,i,o,s,u,c,f
return e=be,123===t.charCodeAt(be)?(r=P,be++):(r=a,0===we&&xe(L)),r!==a&&Ye()!==a&&(n=$e())!==a&&Ye()!==a?(44===t.charCodeAt(be)?(i=et,be++):(i=a,0===we&&xe(rt)),i!==a&&Ye()!==a?(t.substr(be,6)===nt?(o=nt,be+=6):(o=a,0===we&&xe(it)),o!==a&&Ye()!==a?(s=be,44===t.charCodeAt(be)?(u=et,be++):(u=a,0===we&&xe(rt)),u!==a&&(c=Ye())!==a?(f=function(){var e,r,n
return e=be,t.substr(be,2)===Z?(r=Z,be+=2):(r=a,0===we&&xe(J)),r!==a?(n=function(){var t,e,r
if(t=be,e=[],(r=He())!==a)for(;r!==a;)e.push(r),r=He()
else e=a
return e!==a&&(me=t,e=X(e)),e}(),n!==a?(me=e,e=r=$(n)):(be=e,e=a)):(be=e,e=a),e===a&&(e=be,me=be,(r=(r=Q())?void 0:a)!==a&&(n=Oe())!==a?(me=e,e=r=tt(n)):(be=e,e=a)),e}(),f!==a?s=u=[u,c,f]:(be=s,s=a)):(be=s,s=a),s===a&&(s=null),s!==a&&(u=Ye())!==a?(125===t.charCodeAt(be)?(c=N,be++):(c=a,0===we&&xe(D)),c!==a?(me=e,e=r=ot(n,o,s)):(be=e,e=a)):(be=e,e=a)):(be=e,e=a)):(be=e,e=a)):(be=e,e=a),e}(),e===a&&(e=function(){var e,r,n,i,o,s,u,c,f
return e=be,123===t.charCodeAt(be)?(r=P,be++):(r=a,0===we&&xe(L)),r!==a&&Ye()!==a&&(n=$e())!==a&&Ye()!==a?(44===t.charCodeAt(be)?(i=et,be++):(i=a,0===we&&xe(rt)),i!==a&&Ye()!==a?(t.substr(be,4)===mt?(o=mt,be+=4):(o=a,0===we&&xe(vt)),o===a&&(t.substr(be,4)===gt?(o=gt,be+=4):(o=a,0===we&&xe(yt))),o!==a&&Ye()!==a?(s=be,44===t.charCodeAt(be)?(u=et,be++):(u=a,0===we&&xe(rt)),u!==a&&(c=Ye())!==a?(f=function(){var e,r,n
return e=be,t.substr(be,2)===Z?(r=Z,be+=2):(r=a,0===we&&xe(J)),r!==a?(n=function(){var e,r,n,i
if(e=be,r=be,n=[],(i=qe())===a&&(i=Fe()),i!==a)for(;i!==a;)n.push(i),(i=qe())===a&&(i=Fe())
else n=a
return(r=n!==a?t.substring(r,be):n)!==a&&(me=e,r=pt(r)),r}(),n!==a?(me=e,e=r=$(n)):(be=e,e=a)):(be=e,e=a),e===a&&(e=be,me=be,(r=(r=bt())?void 0:a)!==a&&(n=Oe())!==a?(me=e,e=r=tt(n)):(be=e,e=a)),e}(),f!==a?s=u=[u,c,f]:(be=s,s=a)):(be=s,s=a),s===a&&(s=null),s!==a&&(u=Ye())!==a?(125===t.charCodeAt(be)?(c=N,be++):(c=a,0===we&&xe(D)),c!==a?(me=e,e=r=ot(n,o,s)):(be=e,e=a)):(be=e,e=a)):(be=e,e=a)):(be=e,e=a)):(be=e,e=a),e}()),e}(),e===a&&(e=function(){var e,r,n,i,o,s,u,c,f,h,l
if(e=be,123===t.charCodeAt(be)?(r=P,be++):(r=a,0===we&&xe(L)),r!==a)if(Ye()!==a)if((n=$e())!==a)if(Ye()!==a)if(44===t.charCodeAt(be)?(i=et,be++):(i=a,0===we&&xe(rt)),i!==a)if(Ye()!==a)if(t.substr(be,6)===wt?(o=wt,be+=6):(o=a,0===we&&xe(_t)),o===a&&(t.substr(be,13)===Mt?(o=Mt,be+=13):(o=a,0===we&&xe(St))),o!==a)if(Ye()!==a)if(44===t.charCodeAt(be)?(s=et,be++):(s=a,0===we&&xe(rt)),s!==a)if(Ye()!==a)if(u=be,t.substr(be,7)===Et?(c=Et,be+=7):(c=a,0===we&&xe(kt)),c!==a&&(f=Ye())!==a&&(h=Ve())!==a?u=c=[c,f,h]:(be=u,u=a),u===a&&(u=null),u!==a)if((c=Ye())!==a){if(f=[],(h=We())!==a)for(;h!==a;)f.push(h),h=We()
else f=a
f!==a&&(h=Ye())!==a?(125===t.charCodeAt(be)?(l=N,be++):(l=a,0===we&&xe(D)),l!==a?(me=e,e=r=At(n,o,u,f)):(be=e,e=a)):(be=e,e=a)}else be=e,e=a
else be=e,e=a
else be=e,e=a
else be=e,e=a
else be=e,e=a
else be=e,e=a
else be=e,e=a
else be=e,e=a
else be=e,e=a
else be=e,e=a
else be=e,e=a
else be=e,e=a
return e}())===a&&(e=function(){var e,r,n,i,o,s,u,c,f
if(e=be,123===t.charCodeAt(be)?(r=P,be++):(r=a,0===we&&xe(L)),r!==a)if(Ye()!==a)if((n=$e())!==a)if(Ye()!==a)if(44===t.charCodeAt(be)?(i=et,be++):(i=a,0===we&&xe(rt)),i!==a)if(Ye()!==a)if(t.substr(be,6)===Tt?(o=Tt,be+=6):(o=a,0===we&&xe(Rt)),o!==a)if(Ye()!==a)if(44===t.charCodeAt(be)?(s=et,be++):(s=a,0===we&&xe(rt)),s!==a)if(Ye()!==a){if(u=[],(c=ze())!==a)for(;c!==a;)u.push(c),c=ze()
else u=a
u!==a&&(c=Ye())!==a?(125===t.charCodeAt(be)?(f=N,be++):(f=a,0===we&&xe(D)),f!==a?(me=e,e=r=xt(n,u)):(be=e,e=a)):(be=e,e=a)}else be=e,e=a
else be=e,e=a
else be=e,e=a
else be=e,e=a
else be=e,e=a
else be=e,e=a
else be=e,e=a
else be=e,e=a
else be=e,e=a
else be=e,e=a
return e}())===a&&(e=function(){var e,r
return e=be,35===t.charCodeAt(be)?(r=v,be++):(r=a,0===we&&xe(g)),r!==a&&(me=e,r=w()),r}())),e}function Oe(){var e,r,n,i
if(e=be,me=be,(r=(r=h())?void 0:a)!==a){if(n=[],(i=Xe())===a&&(i=Ze())===a&&(i=Je())===a&&(60===t.charCodeAt(be)?(i=l,be++):(i=a,0===we&&xe(d))),i!==a)for(;i!==a;)n.push(i),(i=Xe())===a&&(i=Ze())===a&&(i=Je())===a&&(60===t.charCodeAt(be)?(i=l,be++):(i=a,0===we&&xe(d)))
else n=a
n!==a?(me=e,e=r=p(n)):(be=e,e=a)}else be=e,e=a
if(e===a){if(e=be,r=[],(n=Xe())===a&&(n=Ze())===a&&(n=Je())===a&&(n=Pe()),n!==a)for(;n!==a;)r.push(n),(n=Xe())===a&&(n=Ze())===a&&(n=Je())===a&&(n=Pe())
else r=a
r!==a&&(me=e,r=p(r)),e=r}return e}function Pe(){var e,r,n
return e=be,r=be,we++,(n=Ne())===a&&(n=De())===a&&(n=Le()),we--,n===a?r=void 0:(be=r,r=a),r!==a?(60===t.charCodeAt(be)?(n=l,be++):(n=a,0===we&&xe(d)),n!==a?(me=e,e=r=b()):(be=e,e=a)):(be=e,e=a),e}function Le(){var e,r,n,i,o,s
return e=be,r=be,60===t.charCodeAt(be)?(n=l,be++):(n=a,0===we&&xe(d)),n!==a&&(i=Qe())!==a&&(o=Ye())!==a?(t.substr(be,2)===S?(s=S,be+=2):(s=a,0===we&&xe(E)),s!==a?r=n=[n,i,o,s]:(be=r,r=a)):(be=r,r=a),r!==a&&(me=e,r=k(r)),r}function Ne(){var e,r,n,i
return e=be,60===t.charCodeAt(be)?(r=l,be++):(r=a,0===we&&xe(d)),r!==a&&(n=Qe())!==a?(62===t.charCodeAt(be)?(i=A,be++):(i=a,0===we&&xe(T)),i!==a?(me=e,e=r=C(n)):(be=e,e=a)):(be=e,e=a),e}function De(){var e,r,n,i
return e=be,t.substr(be,2)===I?(r=I,be+=2):(r=a,0===we&&xe(B)),r!==a&&(n=Qe())!==a?(62===t.charCodeAt(be)?(i=A,be++):(i=a,0===we&&xe(T)),i!==a?(me=e,e=r=C(n)):(be=e,e=a)):(be=e,e=a),e}function je(){var e,r,n,i,o
if(we++,e=be,r=[],n=be,i=be,we++,(o=Ke())===a&&(H.test(t.charAt(be))?(o=t.charAt(be),be++):(o=a,0===we&&xe(q))),we--,o===a?i=void 0:(be=i,i=a),i!==a?(t.length>be?(o=t.charAt(be),be++):(o=a,0===we&&xe(F)),o!==a?n=i=[i,o]:(be=n,n=a)):(be=n,n=a),n!==a)for(;n!==a;)r.push(n),n=be,i=be,we++,(o=Ke())===a&&(H.test(t.charAt(be))?(o=t.charAt(be),be++):(o=a,0===we&&xe(q))),we--,o===a?i=void 0:(be=i,i=a),i!==a?(t.length>be?(o=t.charAt(be),be++):(o=a,0===we&&xe(F)),o!==a?n=i=[i,o]:(be=n,n=a)):(be=n,n=a)
else r=a
return e=r!==a?t.substring(e,be):r,we--,e===a&&(r=a,0===we&&xe(U)),e}function Ue(){var e,r,n
return we++,e=be,47===t.charCodeAt(be)?(r=W,be++):(r=a,0===we&&xe(K)),r!==a&&(n=je())!==a?(me=e,e=r=G(n)):(be=e,e=a),we--,e===a&&(r=a,0===we&&xe(z)),e}function He(){var t,e,r,n
if(we++,t=be,Ye()!==a)if((e=je())!==a){for(r=[],n=Ue();n!==a;)r.push(n),n=Ue()
r!==a?(me=t,t=V(e,r)):(be=t,t=a)}else be=t,t=a
else be=t,t=a
return we--,t===a&&0===we&&xe(Y),t}function qe(){var e,r,n,i
if(e=be,39===t.charCodeAt(be)?(r=at,be++):(r=a,0===we&&xe(st)),r!==a){if(n=[],(i=Xe())===a&&(ut.test(t.charAt(be))?(i=t.charAt(be),be++):(i=a,0===we&&xe(ct))),i!==a)for(;i!==a;)n.push(i),(i=Xe())===a&&(ut.test(t.charAt(be))?(i=t.charAt(be),be++):(i=a,0===we&&xe(ct)))
else n=a
n!==a?(39===t.charCodeAt(be)?(i=at,be++):(i=a,0===we&&xe(st)),i!==a?e=r=[r,n,i]:(be=e,e=a)):(be=e,e=a)}else be=e,e=a
if(e===a)if(e=[],(r=Xe())===a&&(ft.test(t.charAt(be))?(r=t.charAt(be),be++):(r=a,0===we&&xe(ht))),r!==a)for(;r!==a;)e.push(r),(r=Xe())===a&&(ft.test(t.charAt(be))?(r=t.charAt(be),be++):(r=a,0===we&&xe(ht)))
else e=a
return e}function Fe(){var e,r
if(e=[],lt.test(t.charAt(be))?(r=t.charAt(be),be++):(r=a,0===we&&xe(dt)),r!==a)for(;r!==a;)e.push(r),lt.test(t.charAt(be))?(r=t.charAt(be),be++):(r=a,0===we&&xe(dt))
else e=a
return e}function ze(){var e,r,n,i,o
return e=be,Ye()!==a&&(r=er())!==a&&Ye()!==a?(123===t.charCodeAt(be)?(n=P,be++):(n=a,0===we&&xe(L)),n!==a?(me=be,(Bt(r)?void 0:a)!==a&&(i=Ie())!==a?(125===t.charCodeAt(be)?(o=N,be++):(o=a,0===we&&xe(D)),o!==a?(me=e,e=Ot(r,i)):(be=e,e=a)):(be=e,e=a)):(be=e,e=a)):(be=e,e=a),e}function We(){var e,r,n,i,o
return e=be,Ye()!==a?(r=function(){var e,r,n,i
return e=be,r=be,61===t.charCodeAt(be)?(n=Ct,be++):(n=a,0===we&&xe(It)),n!==a&&(i=Ve())!==a?r=n=[n,i]:(be=r,r=a),(e=r!==a?t.substring(e,be):r)===a&&(e=er()),e}(),r!==a&&Ye()!==a?(123===t.charCodeAt(be)?(n=P,be++):(n=a,0===we&&xe(L)),n!==a?(me=be,(Pt(r)?void 0:a)!==a&&(i=Ie())!==a?(125===t.charCodeAt(be)?(o=N,be++):(o=a,0===we&&xe(D)),o!==a?(me=e,e=Lt(r,i)):(be=e,e=a)):(be=e,e=a)):(be=e,e=a)):(be=e,e=a)):(be=e,e=a),e}function Ke(){var e
return we++,Dt.test(t.charAt(be))?(e=t.charAt(be),be++):(e=a,0===we&&xe(jt)),we--,e===a&&0===we&&xe(Nt),e}function Ge(){var e
return we++,Ht.test(t.charAt(be))?(e=t.charAt(be),be++):(e=a,0===we&&xe(qt)),we--,e===a&&0===we&&xe(Ut),e}function Ye(){var e,r,n
for(we++,e=be,r=[],n=Ke();n!==a;)r.push(n),n=Ke()
return e=r!==a?t.substring(e,be):r,we--,e===a&&(r=a,0===we&&xe(Ft)),e}function Ve(){var e,r,n
return we++,e=be,45===t.charCodeAt(be)?(r=Wt,be++):(r=a,0===we&&xe(Kt)),r===a&&(r=null),r!==a&&(n=tr())!==a?(me=e,e=r=Gt(r,n)):(be=e,e=a),we--,e===a&&(r=a,0===we&&xe(zt)),e}function Xe(){var e,r
return we++,e=be,t.substr(be,2)===Vt?(r=Vt,be+=2):(r=a,0===we&&xe(Xt)),r!==a&&(me=e,r=Zt()),we--,(e=r)===a&&(r=a,0===we&&xe(Yt)),e}function Ze(){var e,r,n,i,o,s
if(e=be,39===t.charCodeAt(be)?(r=at,be++):(r=a,0===we&&xe(st)),r!==a)if(n=function(){var e,r,n,i
return e=be,r=be,t.length>be?(n=t.charAt(be),be++):(n=a,0===we&&xe(F)),n!==a?(me=be,(i=(i=ee(n))?void 0:a)!==a?r=n=[n,i]:(be=r,r=a)):(be=r,r=a),r!==a?t.substring(e,be):r}(),n!==a){for(i=be,o=[],t.substr(be,2)===Vt?(s=Vt,be+=2):(s=a,0===we&&xe(Xt)),s===a&&(ut.test(t.charAt(be))?(s=t.charAt(be),be++):(s=a,0===we&&xe(ct)));s!==a;)o.push(s),t.substr(be,2)===Vt?(s=Vt,be+=2):(s=a,0===we&&xe(Xt)),s===a&&(ut.test(t.charAt(be))?(s=t.charAt(be),be++):(s=a,0===we&&xe(ct)));(i=o!==a?t.substring(i,be):o)!==a?(39===t.charCodeAt(be)?(o=at,be++):(o=a,0===we&&xe(st)),o===a&&(o=null),o!==a?(me=e,e=r=Jt(n,i)):(be=e,e=a)):(be=e,e=a)}else be=e,e=a
else be=e,e=a
return e}function Je(){var e,r,n,i
return e=be,r=be,t.length>be?(n=t.charAt(be),be++):(n=a,0===we&&xe(F)),n!==a?(me=be,(i=(i=$t(n))?void 0:a)!==a?r=n=[n,i]:(be=r,r=a)):(be=r,r=a),r===a&&(10===t.charCodeAt(be)?(r=Qt,be++):(r=a,0===we&&xe(te))),r!==a?t.substring(e,be):r}function $e(){var e,r
return we++,e=be,(r=tr())===a&&(r=er()),e=r!==a?t.substring(e,be):r,we--,e===a&&(r=a,0===we&&xe(re)),e}function Qe(){var e,r
return we++,e=be,(r=tr())===a&&(r=function(){var e,r,n,i,o
if(we++,e=be,r=[],45===t.charCodeAt(be)?(n=Wt,be++):(n=a,0===we&&xe(Kt)),n===a&&(n=be,i=be,we++,(o=Ke())===a&&(o=Ge()),we--,o===a?i=void 0:(be=i,i=a),i!==a?(t.length>be?(o=t.charAt(be),be++):(o=a,0===we&&xe(F)),o!==a?n=i=[i,o]:(be=n,n=a)):(be=n,n=a)),n!==a)for(;n!==a;)r.push(n),45===t.charCodeAt(be)?(n=Wt,be++):(n=a,0===we&&xe(Kt)),n===a&&(n=be,i=be,we++,(o=Ke())===a&&(o=Ge()),we--,o===a?i=void 0:(be=i,i=a),i!==a?(t.length>be?(o=t.charAt(be),be++):(o=a,0===we&&xe(F)),o!==a?n=i=[i,o]:(be=n,n=a)):(be=n,n=a))
else r=a
return e=r!==a?t.substring(e,be):r,we--,e===a&&(r=a,0===we&&xe(pe)),e}()),e=r!==a?t.substring(e,be):r,we--,e===a&&(r=a,0===we&&xe(ne)),e}function tr(){var e,r,n,i,o
if(we++,e=be,48===t.charCodeAt(be)?(r=oe,be++):(r=a,0===we&&xe(ae)),r!==a&&(me=e,r=se()),(e=r)===a){if(e=be,r=be,ue.test(t.charAt(be))?(n=t.charAt(be),be++):(n=a,0===we&&xe(ce)),n!==a){for(i=[],fe.test(t.charAt(be))?(o=t.charAt(be),be++):(o=a,0===we&&xe(he));o!==a;)i.push(o),fe.test(t.charAt(be))?(o=t.charAt(be),be++):(o=a,0===we&&xe(he))
i!==a?r=n=[n,i]:(be=r,r=a)}else be=r,r=a
r!==a&&(me=e,r=le(r)),e=r}return we--,e===a&&(r=a,0===we&&xe(ie)),e}function er(){var e,r,n,i,o
if(we++,e=be,r=[],n=be,i=be,we++,(o=Ke())===a&&(o=Ge()),we--,o===a?i=void 0:(be=i,i=a),i!==a?(t.length>be?(o=t.charAt(be),be++):(o=a,0===we&&xe(F)),o!==a?n=i=[i,o]:(be=n,n=a)):(be=n,n=a),n!==a)for(;n!==a;)r.push(n),n=be,i=be,we++,(o=Ke())===a&&(o=Ge()),we--,o===a?i=void 0:(be=i,i=a),i!==a?(t.length>be?(o=t.charAt(be),be++):(o=a,0===we&&xe(F)),o!==a?n=i=[i,o]:(be=n,n=a)):(be=n,n=a)
else r=a
return e=r!==a?t.substring(e,be):r,we--,e===a&&(r=a,0===we&&xe(de)),e}var rr=["root"]
function nr(){return"plural"===rr[rr.length-1]}function ir(){return e&&e.captureLocation?{location:Me()}:{}}var or,ar,sr,ur=e&&e.ignoreTag,cr=e&&e.shouldParseSkeleton
if((r=u())!==a&&be===t.length)return r
throw r!==a&&be<t.length&&xe({type:"end"}),or=ye,ar=ge<t.length?t.charAt(ge):null,sr=ge<t.length?Re(ge,ge+1):Re(ge,ge),new x(x.buildMessage(or,ar),or,ar,sr)},I=/(^|[^\\])#/g
function B(t){t.forEach((function(t){(l(t)||h(t))&&Object.keys(t.options).forEach((function(e){for(var r,n=t.options[e],i=-1,s=void 0,u=0;u<n.value.length;u++){var c=n.value[u]
if(a(c)&&I.test(c.value)){i=u,s=c
break}}if(s){var f=s.value.replace(I,"$1{"+t.value+", number}"),h=C(f);(r=n.value).splice.apply(r,(0,o.ev)([i,1],h))}B(n.value)}))}))}function O(t,e){e=(0,o.pi)({normalizeHashtagInPlural:!0,shouldParseSkeleton:!0},e||{})
var r=C(t,e)
return e.normalizeHashtagInPlural&&B(r),r}},5543:(t,e,r)=>{"use strict"
r.r(e),r.d(e,{ErrorCode:()=>dt,FormatError:()=>vt,IntlMessageFormat:()=>Et,InvalidValueError:()=>gt,InvalidValueTypeError:()=>yt,MissingValueError:()=>wt,PART_TYPE:()=>mt,default:()=>kt,formatToParts:()=>Mt,isFormatXMLElementFn:()=>_t})
var n,i,o,a=r(7480)
function s(t){return t.type===i.literal}function u(t){return t.type===i.argument}function c(t){return t.type===i.number}function f(t){return t.type===i.date}function h(t){return t.type===i.time}function l(t){return t.type===i.select}function d(t){return t.type===i.plural}function p(t){return t.type===i.pound}function b(t){return t.type===i.tag}function m(t){return!(!t||"object"!=typeof t||t.type!==o.number)}function v(t){return!(!t||"object"!=typeof t||t.type!==o.dateTime)}!function(t){t[t.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",t[t.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",t[t.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",t[t.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",t[t.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",t[t.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",t[t.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",t[t.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",t[t.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",t[t.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",t[t.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",t[t.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",t[t.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",t[t.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",t[t.INVALID_TAG=23]="INVALID_TAG",t[t.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",t[t.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",t[t.UNCLOSED_TAG=27]="UNCLOSED_TAG"}(n||(n={})),function(t){t[t.literal=0]="literal",t[t.argument=1]="argument",t[t.number=2]="number",t[t.date=3]="date",t[t.time=4]="time",t[t.select=5]="select",t[t.plural=6]="plural",t[t.pound=7]="pound",t[t.tag=8]="tag"}(i||(i={})),function(t){t[t.number=0]="number",t[t.dateTime=1]="dateTime"}(o||(o={}))
var g=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,y=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g
function w(t){var e={}
return t.replace(y,(function(t){var r=t.length
switch(t[0]){case"G":e.era=4===r?"long":5===r?"narrow":"short"
break
case"y":e.year=2===r?"2-digit":"numeric"
break
case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead")
case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported")
case"M":case"L":e.month=["numeric","2-digit","short","long","narrow"][r-1]
break
case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported")
case"d":e.day=["numeric","2-digit"][r-1]
break
case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead")
case"E":e.weekday=4===r?"short":5===r?"narrow":"short"
break
case"e":if(r<4)throw new RangeError("`e..eee` (weekday) patterns are not supported")
e.weekday=["short","long","narrow","short"][r-4]
break
case"c":if(r<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported")
e.weekday=["short","long","narrow","short"][r-4]
break
case"a":e.hour12=!0
break
case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead")
case"h":e.hourCycle="h12",e.hour=["numeric","2-digit"][r-1]
break
case"H":e.hourCycle="h23",e.hour=["numeric","2-digit"][r-1]
break
case"K":e.hourCycle="h11",e.hour=["numeric","2-digit"][r-1]
break
case"k":e.hourCycle="h24",e.hour=["numeric","2-digit"][r-1]
break
case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead")
case"m":e.minute=["numeric","2-digit"][r-1]
break
case"s":e.second=["numeric","2-digit"][r-1]
break
case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead")
case"z":e.timeZoneName=r<4?"short":"long"
break
case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""})),e}var _=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i,M=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,S=/^(@+)?(\+|#+)?[rs]?$/g,E=/(\*)(0+)|(#+)(0+)|(0+)/g,k=/^(0+)$/
function A(t){var e={}
return"r"===t[t.length-1]?e.roundingPriority="morePrecision":"s"===t[t.length-1]&&(e.roundingPriority="lessPrecision"),t.replace(S,(function(t,r,n){return"string"!=typeof n?(e.minimumSignificantDigits=r.length,e.maximumSignificantDigits=r.length):"+"===n?e.minimumSignificantDigits=r.length:"#"===r[0]?e.maximumSignificantDigits=r.length:(e.minimumSignificantDigits=r.length,e.maximumSignificantDigits=r.length+("string"==typeof n?n.length:0)),""})),e}function T(t){switch(t){case"sign-auto":return{signDisplay:"auto"}
case"sign-accounting":case"()":return{currencySign:"accounting"}
case"sign-always":case"+!":return{signDisplay:"always"}
case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"}
case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"}
case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"}
case"sign-never":case"+_":return{signDisplay:"never"}}}function R(t){var e
if("E"===t[0]&&"E"===t[1]?(e={notation:"engineering"},t=t.slice(2)):"E"===t[0]&&(e={notation:"scientific"},t=t.slice(1)),e){var r=t.slice(0,2)
if("+!"===r?(e.signDisplay="always",t=t.slice(2)):"+?"===r&&(e.signDisplay="exceptZero",t=t.slice(2)),!k.test(t))throw new Error("Malformed concise eng/scientific notation")
e.minimumIntegerDigits=t.length}return e}function x(t){return T(t)||{}}function C(t){for(var e={},r=0,n=t;r<n.length;r++){var i=n[r]
switch(i.stem){case"percent":case"%":e.style="percent"
continue
case"%x100":e.style="percent",e.scale=100
continue
case"currency":e.style="currency",e.currency=i.options[0]
continue
case"group-off":case",_":e.useGrouping=!1
continue
case"precision-integer":case".":e.maximumFractionDigits=0
continue
case"measure-unit":case"unit":e.style="unit",e.unit=i.options[0].replace(/^(.*?)-/,"")
continue
case"compact-short":case"K":e.notation="compact",e.compactDisplay="short"
continue
case"compact-long":case"KK":e.notation="compact",e.compactDisplay="long"
continue
case"scientific":e=(0,a.pi)((0,a.pi)((0,a.pi)({},e),{notation:"scientific"}),i.options.reduce((function(t,e){return(0,a.pi)((0,a.pi)({},t),x(e))}),{}))
continue
case"engineering":e=(0,a.pi)((0,a.pi)((0,a.pi)({},e),{notation:"engineering"}),i.options.reduce((function(t,e){return(0,a.pi)((0,a.pi)({},t),x(e))}),{}))
continue
case"notation-simple":e.notation="standard"
continue
case"unit-width-narrow":e.currencyDisplay="narrowSymbol",e.unitDisplay="narrow"
continue
case"unit-width-short":e.currencyDisplay="code",e.unitDisplay="short"
continue
case"unit-width-full-name":e.currencyDisplay="name",e.unitDisplay="long"
continue
case"unit-width-iso-code":e.currencyDisplay="symbol"
continue
case"scale":e.scale=parseFloat(i.options[0])
continue
case"integer-width":if(i.options.length>1)throw new RangeError("integer-width stems only accept a single optional option")
i.options[0].replace(E,(function(t,r,n,i,o,a){if(r)e.minimumIntegerDigits=n.length
else{if(i&&o)throw new Error("We currently do not support maximum integer digits")
if(a)throw new Error("We currently do not support exact integer digits")}return""}))
continue}if(k.test(i.stem))e.minimumIntegerDigits=i.stem.length
else if(M.test(i.stem)){if(i.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option")
i.stem.replace(M,(function(t,r,n,i,o,a){return"*"===n?e.minimumFractionDigits=r.length:i&&"#"===i[0]?e.maximumFractionDigits=i.length:o&&a?(e.minimumFractionDigits=o.length,e.maximumFractionDigits=o.length+a.length):(e.minimumFractionDigits=r.length,e.maximumFractionDigits=r.length),""}))
var o=i.options[0]
"w"===o?e=(0,a.pi)((0,a.pi)({},e),{trailingZeroDisplay:"stripIfInteger"}):o&&(e=(0,a.pi)((0,a.pi)({},e),A(o)))}else if(S.test(i.stem))e=(0,a.pi)((0,a.pi)({},e),A(i.stem))
else{var s=T(i.stem)
s&&(e=(0,a.pi)((0,a.pi)({},e),s))
var u=R(i.stem)
u&&(e=(0,a.pi)((0,a.pi)({},e),u))}}return e}var I,B={AX:["H"],BQ:["H"],CP:["H"],CZ:["H"],DK:["H"],FI:["H"],ID:["H"],IS:["H"],ML:["H"],NE:["H"],RU:["H"],SE:["H"],SJ:["H"],SK:["H"],AS:["h","H"],BT:["h","H"],DJ:["h","H"],ER:["h","H"],GH:["h","H"],IN:["h","H"],LS:["h","H"],PG:["h","H"],PW:["h","H"],SO:["h","H"],TO:["h","H"],VU:["h","H"],WS:["h","H"],"001":["H","h"],AL:["h","H","hB"],TD:["h","H","hB"],"ca-ES":["H","h","hB"],CF:["H","h","hB"],CM:["H","h","hB"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],LU:["H","h","hB"],NP:["H","h","hB"],PF:["H","h","hB"],SC:["H","h","hB"],SM:["H","h","hB"],SN:["H","h","hB"],TF:["H","h","hB"],VA:["H","h","hB"],CY:["h","H","hb","hB"],GR:["h","H","hb","hB"],CO:["h","H","hB","hb"],DO:["h","H","hB","hb"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],NA:["h","H","hB","hb"],PA:["h","H","hB","hb"],PR:["h","H","hB","hb"],VE:["h","H","hB","hb"],AC:["H","h","hb","hB"],AI:["H","h","hb","hB"],BW:["H","h","hb","hB"],BZ:["H","h","hb","hB"],CC:["H","h","hb","hB"],CK:["H","h","hb","hB"],CX:["H","h","hb","hB"],DG:["H","h","hb","hB"],FK:["H","h","hb","hB"],GB:["H","h","hb","hB"],GG:["H","h","hb","hB"],GI:["H","h","hb","hB"],IE:["H","h","hb","hB"],IM:["H","h","hb","hB"],IO:["H","h","hb","hB"],JE:["H","h","hb","hB"],LT:["H","h","hb","hB"],MK:["H","h","hb","hB"],MN:["H","h","hb","hB"],MS:["H","h","hb","hB"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],PN:["H","h","hb","hB"],SH:["H","h","hb","hB"],SX:["H","h","hb","hB"],TA:["H","h","hb","hB"],ZA:["H","h","hb","hB"],"af-ZA":["H","h","hB","hb"],AR:["H","h","hB","hb"],CL:["H","h","hB","hb"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],EA:["H","h","hB","hb"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],GT:["H","h","hB","hb"],HN:["H","h","hB","hb"],IC:["H","h","hB","hb"],KG:["H","h","hB","hb"],KM:["H","h","hB","hb"],LK:["H","h","hB","hb"],MA:["H","h","hB","hb"],MX:["H","h","hB","hb"],NI:["H","h","hB","hb"],PY:["H","h","hB","hb"],SV:["H","h","hB","hb"],UY:["H","h","hB","hb"],JP:["H","h","K"],AD:["H","hB"],AM:["H","hB"],AO:["H","hB"],AT:["H","hB"],AW:["H","hB"],BE:["H","hB"],BF:["H","hB"],BJ:["H","hB"],BL:["H","hB"],BR:["H","hB"],CG:["H","hB"],CI:["H","hB"],CV:["H","hB"],DE:["H","hB"],EE:["H","hB"],FR:["H","hB"],GA:["H","hB"],GF:["H","hB"],GN:["H","hB"],GP:["H","hB"],GW:["H","hB"],HR:["H","hB"],IL:["H","hB"],IT:["H","hB"],KZ:["H","hB"],MC:["H","hB"],MD:["H","hB"],MF:["H","hB"],MQ:["H","hB"],MZ:["H","hB"],NC:["H","hB"],NL:["H","hB"],PM:["H","hB"],PT:["H","hB"],RE:["H","hB"],RO:["H","hB"],SI:["H","hB"],SR:["H","hB"],ST:["H","hB"],TG:["H","hB"],TR:["H","hB"],WF:["H","hB"],YT:["H","hB"],BD:["h","hB","H"],PK:["h","hB","H"],AZ:["H","hB","h"],BA:["H","hB","h"],BG:["H","hB","h"],CH:["H","hB","h"],GE:["H","hB","h"],LI:["H","hB","h"],ME:["H","hB","h"],RS:["H","hB","h"],UA:["H","hB","h"],UZ:["H","hB","h"],XK:["H","hB","h"],AG:["h","hb","H","hB"],AU:["h","hb","H","hB"],BB:["h","hb","H","hB"],BM:["h","hb","H","hB"],BS:["h","hb","H","hB"],CA:["h","hb","H","hB"],DM:["h","hb","H","hB"],"en-001":["h","hb","H","hB"],FJ:["h","hb","H","hB"],FM:["h","hb","H","hB"],GD:["h","hb","H","hB"],GM:["h","hb","H","hB"],GU:["h","hb","H","hB"],GY:["h","hb","H","hB"],JM:["h","hb","H","hB"],KI:["h","hb","H","hB"],KN:["h","hb","H","hB"],KY:["h","hb","H","hB"],LC:["h","hb","H","hB"],LR:["h","hb","H","hB"],MH:["h","hb","H","hB"],MP:["h","hb","H","hB"],MW:["h","hb","H","hB"],NZ:["h","hb","H","hB"],SB:["h","hb","H","hB"],SG:["h","hb","H","hB"],SL:["h","hb","H","hB"],SS:["h","hb","H","hB"],SZ:["h","hb","H","hB"],TC:["h","hb","H","hB"],TT:["h","hb","H","hB"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],VC:["h","hb","H","hB"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],ZM:["h","hb","H","hB"],BO:["H","hB","h","hb"],EC:["H","hB","h","hb"],ES:["H","hB","h","hb"],GQ:["H","hB","h","hb"],PE:["H","hB","h","hb"],AE:["h","hB","hb","H"],"ar-001":["h","hB","hb","H"],BH:["h","hB","hb","H"],DZ:["h","hB","hb","H"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],HK:["h","hB","hb","H"],IQ:["h","hB","hb","H"],JO:["h","hB","hb","H"],KW:["h","hB","hb","H"],LB:["h","hB","hb","H"],LY:["h","hB","hb","H"],MO:["h","hB","hb","H"],MR:["h","hB","hb","H"],OM:["h","hB","hb","H"],PH:["h","hB","hb","H"],PS:["h","hB","hb","H"],QA:["h","hB","hb","H"],SA:["h","hB","hb","H"],SD:["h","hB","hb","H"],SY:["h","hB","hb","H"],TN:["h","hB","hb","H"],YE:["h","hB","hb","H"],AF:["H","hb","hB","h"],LA:["H","hb","hB","h"],CN:["H","hB","hb","h"],LV:["H","hB","hb","h"],TL:["H","hB","hb","h"],"zu-ZA":["H","hB","hb","h"],CD:["hB","H"],IR:["hB","H"],"hi-IN":["hB","h","H"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"te-IN":["hB","h","H"],KH:["hB","h","H","hb"],"ta-IN":["hB","h","hb","H"],BN:["hb","hB","h","H"],MY:["hb","hB","h","H"],ET:["hB","hb","h","H"],"gu-IN":["hB","hb","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],TW:["hB","hb","h","H"],KE:["hB","hb","H","h"],MM:["hB","hb","H","h"],TZ:["hB","hb","H","h"],UG:["hB","hb","H","h"]}
function O(t){var e=t.hourCycle
if(void 0===e&&t.hourCycles&&t.hourCycles.length&&(e=t.hourCycles[0]),e)switch(e){case"h24":return"k"
case"h23":return"H"
case"h12":return"h"
case"h11":return"K"
default:throw new Error("Invalid hourCycle")}var r,n=t.language
return"root"!==n&&(r=t.maximize().region),(B[r||""]||B[n||""]||B["".concat(n,"-001")]||B["001"])[0]}var P=new RegExp("^".concat(g.source,"*")),L=new RegExp("".concat(g.source,"*$"))
function N(t,e){return{start:t,end:e}}var D=!!String.prototype.startsWith,j=!!String.fromCodePoint,U=!!Object.fromEntries,H=!!String.prototype.codePointAt,q=!!String.prototype.trimStart,F=!!String.prototype.trimEnd,z=Number.isSafeInteger?Number.isSafeInteger:function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t&&Math.abs(t)<=9007199254740991},W=!0
try{W="a"===(null===(I=$("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu").exec("a"))||void 0===I?void 0:I[0])}catch(t){W=!1}var K,G=D?function(t,e,r){return t.startsWith(e,r)}:function(t,e,r){return t.slice(r,r+e.length)===e},Y=j?String.fromCodePoint:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
for(var r,n="",i=t.length,o=0;i>o;){if((r=t[o++])>1114111)throw RangeError(r+" is not a valid code point")
n+=r<65536?String.fromCharCode(r):String.fromCharCode(55296+((r-=65536)>>10),r%1024+56320)}return n},V=U?Object.fromEntries:function(t){for(var e={},r=0,n=t;r<n.length;r++){var i=n[r],o=i[0],a=i[1]
e[o]=a}return e},X=H?function(t,e){return t.codePointAt(e)}:function(t,e){var r=t.length
if(!(e<0||e>=r)){var n,i=t.charCodeAt(e)
return i<55296||i>56319||e+1===r||(n=t.charCodeAt(e+1))<56320||n>57343?i:n-56320+(i-55296<<10)+65536}},Z=q?function(t){return t.trimStart()}:function(t){return t.replace(P,"")},J=F?function(t){return t.trimEnd()}:function(t){return t.replace(L,"")}
function $(t,e){return new RegExp(t,e)}if(W){var Q=$("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu")
K=function(t,e){var r
return Q.lastIndex=e,null!==(r=Q.exec(t)[1])&&void 0!==r?r:""}}else K=function(t,e){for(var r=[];;){var n=X(t,e)
if(void 0===n||rt(n)||nt(n))break
r.push(n),e+=n>=65536?2:1}return Y.apply(void 0,r)}
var tt=function(){function t(t,e){void 0===e&&(e={}),this.message=t,this.position={offset:0,line:1,column:1},this.ignoreTag=!!e.ignoreTag,this.locale=e.locale,this.requiresOtherClause=!!e.requiresOtherClause,this.shouldParseSkeletons=!!e.shouldParseSkeletons}return t.prototype.parse=function(){if(0!==this.offset())throw Error("parser can only be used once")
return this.parseMessage(0,"",!1)},t.prototype.parseMessage=function(t,e,r){for(var o=[];!this.isEOF();){var a=this.char()
if(123===a){if((s=this.parseArgument(t,r)).err)return s
o.push(s.val)}else{if(125===a&&t>0)break
if(35!==a||"plural"!==e&&"selectordinal"!==e){if(60===a&&!this.ignoreTag&&47===this.peek()){if(r)break
return this.error(n.UNMATCHED_CLOSING_TAG,N(this.clonePosition(),this.clonePosition()))}if(60===a&&!this.ignoreTag&&et(this.peek()||0)){if((s=this.parseTag(t,e)).err)return s
o.push(s.val)}else{var s
if((s=this.parseLiteral(t,e)).err)return s
o.push(s.val)}}else{var u=this.clonePosition()
this.bump(),o.push({type:i.pound,location:N(u,this.clonePosition())})}}}return{val:o,err:null}},t.prototype.parseTag=function(t,e){var r=this.clonePosition()
this.bump()
var o=this.parseTagName()
if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:i.literal,value:"<".concat(o,"/>"),location:N(r,this.clonePosition())},err:null}
if(this.bumpIf(">")){var a=this.parseMessage(t+1,e,!0)
if(a.err)return a
var s=a.val,u=this.clonePosition()
if(this.bumpIf("</")){if(this.isEOF()||!et(this.char()))return this.error(n.INVALID_TAG,N(u,this.clonePosition()))
var c=this.clonePosition()
return o!==this.parseTagName()?this.error(n.UNMATCHED_CLOSING_TAG,N(c,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:i.tag,value:o,children:s,location:N(r,this.clonePosition())},err:null}:this.error(n.INVALID_TAG,N(u,this.clonePosition())))}return this.error(n.UNCLOSED_TAG,N(r,this.clonePosition()))}return this.error(n.INVALID_TAG,N(r,this.clonePosition()))},t.prototype.parseTagName=function(){var t,e=this.offset()
for(this.bump();!this.isEOF()&&(45===(t=this.char())||46===t||t>=48&&t<=57||95===t||t>=97&&t<=122||t>=65&&t<=90||183==t||t>=192&&t<=214||t>=216&&t<=246||t>=248&&t<=893||t>=895&&t<=8191||t>=8204&&t<=8205||t>=8255&&t<=8256||t>=8304&&t<=8591||t>=11264&&t<=12271||t>=12289&&t<=55295||t>=63744&&t<=64975||t>=65008&&t<=65533||t>=65536&&t<=983039);)this.bump()
return this.message.slice(e,this.offset())},t.prototype.parseLiteral=function(t,e){for(var r=this.clonePosition(),n="";;){var o=this.tryParseQuote(e)
if(o)n+=o
else{var a=this.tryParseUnquoted(t,e)
if(a)n+=a
else{var s=this.tryParseLeftAngleBracket()
if(!s)break
n+=s}}}var u=N(r,this.clonePosition())
return{val:{type:i.literal,value:n,location:u},err:null}},t.prototype.tryParseLeftAngleBracket=function(){return this.isEOF()||60!==this.char()||!this.ignoreTag&&(et(t=this.peek()||0)||47===t)?null:(this.bump(),"<")
var t},t.prototype.tryParseQuote=function(t){if(this.isEOF()||39!==this.char())return null
switch(this.peek()){case 39:return this.bump(),this.bump(),"'"
case 123:case 60:case 62:case 125:break
case 35:if("plural"===t||"selectordinal"===t)break
return null
default:return null}this.bump()
var e=[this.char()]
for(this.bump();!this.isEOF();){var r=this.char()
if(39===r){if(39!==this.peek()){this.bump()
break}e.push(39),this.bump()}else e.push(r)
this.bump()}return Y.apply(void 0,e)},t.prototype.tryParseUnquoted=function(t,e){if(this.isEOF())return null
var r=this.char()
return 60===r||123===r||35===r&&("plural"===e||"selectordinal"===e)||125===r&&t>0?null:(this.bump(),Y(r))},t.prototype.parseArgument=function(t,e){var r=this.clonePosition()
if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE,N(r,this.clonePosition()))
if(125===this.char())return this.bump(),this.error(n.EMPTY_ARGUMENT,N(r,this.clonePosition()))
var o=this.parseIdentifierIfPossible().value
if(!o)return this.error(n.MALFORMED_ARGUMENT,N(r,this.clonePosition()))
if(this.bumpSpace(),this.isEOF())return this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE,N(r,this.clonePosition()))
switch(this.char()){case 125:return this.bump(),{val:{type:i.argument,value:o,location:N(r,this.clonePosition())},err:null}
case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE,N(r,this.clonePosition())):this.parseArgumentOptions(t,e,o,r)
default:return this.error(n.MALFORMED_ARGUMENT,N(r,this.clonePosition()))}},t.prototype.parseIdentifierIfPossible=function(){var t=this.clonePosition(),e=this.offset(),r=K(this.message,e),n=e+r.length
return this.bumpTo(n),{value:r,location:N(t,this.clonePosition())}},t.prototype.parseArgumentOptions=function(t,e,r,s){var u,c=this.clonePosition(),f=this.parseIdentifierIfPossible().value,h=this.clonePosition()
switch(f){case"":return this.error(n.EXPECT_ARGUMENT_TYPE,N(c,h))
case"number":case"date":case"time":this.bumpSpace()
var l=null
if(this.bumpIf(",")){this.bumpSpace()
var d=this.clonePosition()
if((M=this.parseSimpleArgStyleIfPossible()).err)return M
if(0===(v=J(M.val)).length)return this.error(n.EXPECT_ARGUMENT_STYLE,N(this.clonePosition(),this.clonePosition()))
l={style:v,styleLocation:N(d,this.clonePosition())}}if((S=this.tryParseArgumentClose(s)).err)return S
var p=N(s,this.clonePosition())
if(l&&G(null==l?void 0:l.style,"::",0)){var b=Z(l.style.slice(2))
if("number"===f)return(M=this.parseNumberSkeletonFromString(b,l.styleLocation)).err?M:{val:{type:i.number,value:r,location:p,style:M.val},err:null}
if(0===b.length)return this.error(n.EXPECT_DATE_TIME_SKELETON,p)
var m=b
this.locale&&(m=function(t,e){for(var r="",n=0;n<t.length;n++){var i=t.charAt(n)
if("j"===i){for(var o=0;n+1<t.length&&t.charAt(n+1)===i;)o++,n++
var a=1+(1&o),s=o<2?1:3+(o>>1),u=O(e)
for("H"!=u&&"k"!=u||(s=0);s-- >0;)r+="a"
for(;a-- >0;)r=u+r}else r+="J"===i?"H":i}return r}(b,this.locale))
var v={type:o.dateTime,pattern:m,location:l.styleLocation,parsedOptions:this.shouldParseSkeletons?w(m):{}}
return{val:{type:"date"===f?i.date:i.time,value:r,location:p,style:v},err:null}}return{val:{type:"number"===f?i.number:"date"===f?i.date:i.time,value:r,location:p,style:null!==(u=null==l?void 0:l.style)&&void 0!==u?u:null},err:null}
case"plural":case"selectordinal":case"select":var g=this.clonePosition()
if(this.bumpSpace(),!this.bumpIf(","))return this.error(n.EXPECT_SELECT_ARGUMENT_OPTIONS,N(g,(0,a.pi)({},g)))
this.bumpSpace()
var y=this.parseIdentifierIfPossible(),_=0
if("select"!==f&&"offset"===y.value){if(!this.bumpIf(":"))return this.error(n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,N(this.clonePosition(),this.clonePosition()))
var M
if(this.bumpSpace(),(M=this.tryParseDecimalInteger(n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,n.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err)return M
this.bumpSpace(),y=this.parseIdentifierIfPossible(),_=M.val}var S,E=this.tryParsePluralOrSelectOptions(t,f,e,y)
if(E.err)return E
if((S=this.tryParseArgumentClose(s)).err)return S
var k=N(s,this.clonePosition())
return"select"===f?{val:{type:i.select,value:r,options:V(E.val),location:k},err:null}:{val:{type:i.plural,value:r,options:V(E.val),offset:_,pluralType:"plural"===f?"cardinal":"ordinal",location:k},err:null}
default:return this.error(n.INVALID_ARGUMENT_TYPE,N(c,h))}},t.prototype.tryParseArgumentClose=function(t){return this.isEOF()||125!==this.char()?this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE,N(t,this.clonePosition())):(this.bump(),{val:!0,err:null})},t.prototype.parseSimpleArgStyleIfPossible=function(){for(var t=0,e=this.clonePosition();!this.isEOF();)switch(this.char()){case 39:this.bump()
var r=this.clonePosition()
if(!this.bumpUntil("'"))return this.error(n.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,N(r,this.clonePosition()))
this.bump()
break
case 123:t+=1,this.bump()
break
case 125:if(!(t>0))return{val:this.message.slice(e.offset,this.offset()),err:null}
t-=1
break
default:this.bump()}return{val:this.message.slice(e.offset,this.offset()),err:null}},t.prototype.parseNumberSkeletonFromString=function(t,e){var r=[]
try{r=function(t){if(0===t.length)throw new Error("Number skeleton cannot be empty")
for(var e=[],r=0,n=t.split(_).filter((function(t){return t.length>0}));r<n.length;r++){var i=n[r].split("/")
if(0===i.length)throw new Error("Invalid number skeleton")
for(var o=i[0],a=i.slice(1),s=0,u=a;s<u.length;s++)if(0===u[s].length)throw new Error("Invalid number skeleton")
e.push({stem:o,options:a})}return e}(t)}catch(t){return this.error(n.INVALID_NUMBER_SKELETON,e)}return{val:{type:o.number,tokens:r,location:e,parsedOptions:this.shouldParseSkeletons?C(r):{}},err:null}},t.prototype.tryParsePluralOrSelectOptions=function(t,e,r,i){for(var o,a=!1,s=[],u=new Set,c=i.value,f=i.location;;){if(0===c.length){var h=this.clonePosition()
if("select"===e||!this.bumpIf("="))break
var l=this.tryParseDecimalInteger(n.EXPECT_PLURAL_ARGUMENT_SELECTOR,n.INVALID_PLURAL_ARGUMENT_SELECTOR)
if(l.err)return l
f=N(h,this.clonePosition()),c=this.message.slice(h.offset,this.offset())}if(u.has(c))return this.error("select"===e?n.DUPLICATE_SELECT_ARGUMENT_SELECTOR:n.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,f)
"other"===c&&(a=!0),this.bumpSpace()
var d=this.clonePosition()
if(!this.bumpIf("{"))return this.error("select"===e?n.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:n.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,N(this.clonePosition(),this.clonePosition()))
var p=this.parseMessage(t+1,e,r)
if(p.err)return p
var b=this.tryParseArgumentClose(d)
if(b.err)return b
s.push([c,{value:p.val,location:N(d,this.clonePosition())}]),u.add(c),this.bumpSpace(),c=(o=this.parseIdentifierIfPossible()).value,f=o.location}return 0===s.length?this.error("select"===e?n.EXPECT_SELECT_ARGUMENT_SELECTOR:n.EXPECT_PLURAL_ARGUMENT_SELECTOR,N(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!a?this.error(n.MISSING_OTHER_CLAUSE,N(this.clonePosition(),this.clonePosition())):{val:s,err:null}},t.prototype.tryParseDecimalInteger=function(t,e){var r=1,n=this.clonePosition()
this.bumpIf("+")||this.bumpIf("-")&&(r=-1)
for(var i=!1,o=0;!this.isEOF();){var a=this.char()
if(!(a>=48&&a<=57))break
i=!0,o=10*o+(a-48),this.bump()}var s=N(n,this.clonePosition())
return i?z(o*=r)?{val:o,err:null}:this.error(e,s):this.error(t,s)},t.prototype.offset=function(){return this.position.offset},t.prototype.isEOF=function(){return this.offset()===this.message.length},t.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},t.prototype.char=function(){var t=this.position.offset
if(t>=this.message.length)throw Error("out of bound")
var e=X(this.message,t)
if(void 0===e)throw Error("Offset ".concat(t," is at invalid UTF-16 code unit boundary"))
return e},t.prototype.error=function(t,e){return{val:null,err:{kind:t,message:this.message,location:e}}},t.prototype.bump=function(){if(!this.isEOF()){var t=this.char()
10===t?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=t<65536?1:2)}},t.prototype.bumpIf=function(t){if(G(this.message,t,this.offset())){for(var e=0;e<t.length;e++)this.bump()
return!0}return!1},t.prototype.bumpUntil=function(t){var e=this.offset(),r=this.message.indexOf(t,e)
return r>=0?(this.bumpTo(r),!0):(this.bumpTo(this.message.length),!1)},t.prototype.bumpTo=function(t){if(this.offset()>t)throw Error("targetOffset ".concat(t," must be greater than or equal to the current offset ").concat(this.offset()))
for(t=Math.min(t,this.message.length);;){var e=this.offset()
if(e===t)break
if(e>t)throw Error("targetOffset ".concat(t," is at invalid UTF-16 code unit boundary"))
if(this.bump(),this.isEOF())break}},t.prototype.bumpSpace=function(){for(;!this.isEOF()&&rt(this.char());)this.bump()},t.prototype.peek=function(){if(this.isEOF())return null
var t=this.char(),e=this.offset(),r=this.message.charCodeAt(e+(t>=65536?2:1))
return null!=r?r:null},t}()
function et(t){return t>=97&&t<=122||t>=65&&t<=90}function rt(t){return t>=9&&t<=13||32===t||133===t||t>=8206&&t<=8207||8232===t||8233===t}function nt(t){return t>=33&&t<=35||36===t||t>=37&&t<=39||40===t||41===t||42===t||43===t||44===t||45===t||t>=46&&t<=47||t>=58&&t<=59||t>=60&&t<=62||t>=63&&t<=64||91===t||92===t||93===t||94===t||96===t||123===t||124===t||125===t||126===t||161===t||t>=162&&t<=165||166===t||167===t||169===t||171===t||172===t||174===t||176===t||177===t||182===t||187===t||191===t||215===t||247===t||t>=8208&&t<=8213||t>=8214&&t<=8215||8216===t||8217===t||8218===t||t>=8219&&t<=8220||8221===t||8222===t||8223===t||t>=8224&&t<=8231||t>=8240&&t<=8248||8249===t||8250===t||t>=8251&&t<=8254||t>=8257&&t<=8259||8260===t||8261===t||8262===t||t>=8263&&t<=8273||8274===t||8275===t||t>=8277&&t<=8286||t>=8592&&t<=8596||t>=8597&&t<=8601||t>=8602&&t<=8603||t>=8604&&t<=8607||8608===t||t>=8609&&t<=8610||8611===t||t>=8612&&t<=8613||8614===t||t>=8615&&t<=8621||8622===t||t>=8623&&t<=8653||t>=8654&&t<=8655||t>=8656&&t<=8657||8658===t||8659===t||8660===t||t>=8661&&t<=8691||t>=8692&&t<=8959||t>=8960&&t<=8967||8968===t||8969===t||8970===t||8971===t||t>=8972&&t<=8991||t>=8992&&t<=8993||t>=8994&&t<=9e3||9001===t||9002===t||t>=9003&&t<=9083||9084===t||t>=9085&&t<=9114||t>=9115&&t<=9139||t>=9140&&t<=9179||t>=9180&&t<=9185||t>=9186&&t<=9254||t>=9255&&t<=9279||t>=9280&&t<=9290||t>=9291&&t<=9311||t>=9472&&t<=9654||9655===t||t>=9656&&t<=9664||9665===t||t>=9666&&t<=9719||t>=9720&&t<=9727||t>=9728&&t<=9838||9839===t||t>=9840&&t<=10087||10088===t||10089===t||10090===t||10091===t||10092===t||10093===t||10094===t||10095===t||10096===t||10097===t||10098===t||10099===t||10100===t||10101===t||t>=10132&&t<=10175||t>=10176&&t<=10180||10181===t||10182===t||t>=10183&&t<=10213||10214===t||10215===t||10216===t||10217===t||10218===t||10219===t||10220===t||10221===t||10222===t||10223===t||t>=10224&&t<=10239||t>=10240&&t<=10495||t>=10496&&t<=10626||10627===t||10628===t||10629===t||10630===t||10631===t||10632===t||10633===t||10634===t||10635===t||10636===t||10637===t||10638===t||10639===t||10640===t||10641===t||10642===t||10643===t||10644===t||10645===t||10646===t||10647===t||10648===t||t>=10649&&t<=10711||10712===t||10713===t||10714===t||10715===t||t>=10716&&t<=10747||10748===t||10749===t||t>=10750&&t<=11007||t>=11008&&t<=11055||t>=11056&&t<=11076||t>=11077&&t<=11078||t>=11079&&t<=11084||t>=11085&&t<=11123||t>=11124&&t<=11125||t>=11126&&t<=11157||11158===t||t>=11159&&t<=11263||t>=11776&&t<=11777||11778===t||11779===t||11780===t||11781===t||t>=11782&&t<=11784||11785===t||11786===t||11787===t||11788===t||11789===t||t>=11790&&t<=11798||11799===t||t>=11800&&t<=11801||11802===t||11803===t||11804===t||11805===t||t>=11806&&t<=11807||11808===t||11809===t||11810===t||11811===t||11812===t||11813===t||11814===t||11815===t||11816===t||11817===t||t>=11818&&t<=11822||11823===t||t>=11824&&t<=11833||t>=11834&&t<=11835||t>=11836&&t<=11839||11840===t||11841===t||11842===t||t>=11843&&t<=11855||t>=11856&&t<=11857||11858===t||t>=11859&&t<=11903||t>=12289&&t<=12291||12296===t||12297===t||12298===t||12299===t||12300===t||12301===t||12302===t||12303===t||12304===t||12305===t||t>=12306&&t<=12307||12308===t||12309===t||12310===t||12311===t||12312===t||12313===t||12314===t||12315===t||12316===t||12317===t||t>=12318&&t<=12319||12320===t||12336===t||64830===t||64831===t||t>=65093&&t<=65094}function it(t){t.forEach((function(t){if(delete t.location,l(t)||d(t))for(var e in t.options)delete t.options[e].location,it(t.options[e].value)
else c(t)&&m(t.style)||(f(t)||h(t))&&v(t.style)?delete t.style.location:b(t)&&it(t.children)}))}function ot(t,e){void 0===e&&(e={}),e=(0,a.pi)({shouldParseSkeletons:!0,requiresOtherClause:!0},e)
var r=new tt(t,e).parse()
if(r.err){var i=SyntaxError(n[r.err.kind])
throw i.location=r.err.location,i.originalMessage=r.err.message,i}return(null==e?void 0:e.captureLocation)||it(r.val),r.val}function at(t,e){var r=e&&e.cache?e.cache:pt,n=e&&e.serializer?e.serializer:ht
return(e&&e.strategy?e.strategy:ft)(t,{cache:r,serializer:n})}function st(t,e,r,n){var i,o=null==(i=n)||"number"==typeof i||"boolean"==typeof i?n:r(n),a=e.get(o)
return void 0===a&&(a=t.call(this,n),e.set(o,a)),a}function ut(t,e,r){var n=Array.prototype.slice.call(arguments,3),i=r(n),o=e.get(i)
return void 0===o&&(o=t.apply(this,n),e.set(i,o)),o}function ct(t,e,r,n,i){return r.bind(e,t,n,i)}function ft(t,e){return ct(t,this,1===t.length?st:ut,e.cache.create(),e.serializer)}var ht=function(){return JSON.stringify(arguments)}
function lt(){this.cache=Object.create(null)}lt.prototype.get=function(t){return this.cache[t]},lt.prototype.set=function(t,e){this.cache[t]=e}
var dt,pt={create:function(){return new lt}},bt={variadic:function(t,e){return ct(t,this,ut,e.cache.create(),e.serializer)},monadic:function(t,e){return ct(t,this,st,e.cache.create(),e.serializer)}}
!function(t){t.MISSING_VALUE="MISSING_VALUE",t.INVALID_VALUE="INVALID_VALUE",t.MISSING_INTL_API="MISSING_INTL_API"}(dt||(dt={}))
var mt,vt=function(t){function e(e,r,n){var i=t.call(this,e)||this
return i.code=r,i.originalMessage=n,i}return(0,a.ZT)(e,t),e.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},e}(Error),gt=function(t){function e(e,r,n,i){return t.call(this,'Invalid values for "'.concat(e,'": "').concat(r,'". Options are "').concat(Object.keys(n).join('", "'),'"'),dt.INVALID_VALUE,i)||this}return(0,a.ZT)(e,t),e}(vt),yt=function(t){function e(e,r,n){return t.call(this,'Value for "'.concat(e,'" must be of type ').concat(r),dt.INVALID_VALUE,n)||this}return(0,a.ZT)(e,t),e}(vt),wt=function(t){function e(e,r){return t.call(this,'The intl string context variable "'.concat(e,'" was not provided to the string "').concat(r,'"'),dt.MISSING_VALUE,r)||this}return(0,a.ZT)(e,t),e}(vt)
function _t(t){return"function"==typeof t}function Mt(t,e,r,n,i,o,a){if(1===t.length&&s(t[0]))return[{type:mt.literal,value:t[0].value}]
for(var g=[],y=0,w=t;y<w.length;y++){var _=w[y]
if(s(_))g.push({type:mt.literal,value:_.value})
else if(p(_))"number"==typeof o&&g.push({type:mt.literal,value:r.getNumberFormat(e).format(o)})
else{var M=_.value
if(!i||!(M in i))throw new wt(M,a)
var S=i[M]
if(u(_))S&&"string"!=typeof S&&"number"!=typeof S||(S="string"==typeof S||"number"==typeof S?String(S):""),g.push({type:"string"==typeof S?mt.literal:mt.object,value:S})
else if(f(_)){var E="string"==typeof _.style?n.date[_.style]:v(_.style)?_.style.parsedOptions:void 0
g.push({type:mt.literal,value:r.getDateTimeFormat(e,E).format(S)})}else if(h(_))E="string"==typeof _.style?n.time[_.style]:v(_.style)?_.style.parsedOptions:n.time.medium,g.push({type:mt.literal,value:r.getDateTimeFormat(e,E).format(S)})
else if(c(_))(E="string"==typeof _.style?n.number[_.style]:m(_.style)?_.style.parsedOptions:void 0)&&E.scale&&(S*=E.scale||1),g.push({type:mt.literal,value:r.getNumberFormat(e,E).format(S)})
else{if(b(_)){var k=_.children,A=_.value,T=i[A]
if(!_t(T))throw new yt(A,"function",a)
var R=T(Mt(k,e,r,n,i,o).map((function(t){return t.value})))
Array.isArray(R)||(R=[R]),g.push.apply(g,R.map((function(t){return{type:"string"==typeof t?mt.literal:mt.object,value:t}})))}if(l(_)){if(!(x=_.options[S]||_.options.other))throw new gt(_.value,S,Object.keys(_.options),a)
g.push.apply(g,Mt(x.value,e,r,n,i))}else if(d(_)){var x
if(!(x=_.options["=".concat(S)])){if(!Intl.PluralRules)throw new vt('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',dt.MISSING_INTL_API,a)
var C=r.getPluralRules(e,{type:_.pluralType}).select(S-(_.offset||0))
x=_.options[C]||_.options.other}if(!x)throw new gt(_.value,S,Object.keys(_.options),a)
g.push.apply(g,Mt(x.value,e,r,n,i,S-(_.offset||0)))}}}}return(I=g).length<2?I:I.reduce((function(t,e){var r=t[t.length-1]
return r&&r.type===mt.literal&&e.type===mt.literal?r.value+=e.value:t.push(e),t}),[])
var I}function St(t){return{create:function(){return{get:function(e){return t[e]},set:function(e,r){t[e]=r}}}}}!function(t){t[t.literal=0]="literal",t[t.object=1]="object"}(mt||(mt={}))
var Et=function(){function t(e,r,n,i){var o,s,u,c=this
if(void 0===r&&(r=t.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(t){var e=c.formatToParts(t)
if(1===e.length)return e[0].value
var r=e.reduce((function(t,e){return t.length&&e.type===mt.literal&&"string"==typeof t[t.length-1]?t[t.length-1]+=e.value:t.push(e.value),t}),[])
return r.length<=1?r[0]||"":r},this.formatToParts=function(t){return Mt(c.ast,c.locales,c.formatters,c.formats,t,void 0,c.message)},this.resolvedOptions=function(){return{locale:c.resolvedLocale.toString()}},this.getAst=function(){return c.ast},this.locales=r,this.resolvedLocale=t.resolveLocale(r),"string"==typeof e){if(this.message=e,!t.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`")
this.ast=t.__parse(e,{ignoreTag:null==i?void 0:i.ignoreTag,locale:this.resolvedLocale})}else this.ast=e
if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.")
this.formats=(s=t.formats,(u=n)?Object.keys(s).reduce((function(t,e){var r,n
return t[e]=(r=s[e],(n=u[e])?(0,a.pi)((0,a.pi)((0,a.pi)({},r||{}),n||{}),Object.keys(r).reduce((function(t,e){return t[e]=(0,a.pi)((0,a.pi)({},r[e]),n[e]||{}),t}),{})):r),t}),(0,a.pi)({},s)):s),this.formatters=i&&i.formatters||(void 0===(o=this.formatterCache)&&(o={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:at((function(){for(var t,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r]
return new((t=Intl.NumberFormat).bind.apply(t,(0,a.ev)([void 0],e,!1)))}),{cache:St(o.number),strategy:bt.variadic}),getDateTimeFormat:at((function(){for(var t,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r]
return new((t=Intl.DateTimeFormat).bind.apply(t,(0,a.ev)([void 0],e,!1)))}),{cache:St(o.dateTime),strategy:bt.variadic}),getPluralRules:at((function(){for(var t,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r]
return new((t=Intl.PluralRules).bind.apply(t,(0,a.ev)([void 0],e,!1)))}),{cache:St(o.pluralRules),strategy:bt.variadic})})}return Object.defineProperty(t,"defaultLocale",{get:function(){return t.memoizedDefaultLocale||(t.memoizedDefaultLocale=(new Intl.NumberFormat).resolvedOptions().locale),t.memoizedDefaultLocale},enumerable:!1,configurable:!0}),t.memoizedDefaultLocale=null,t.resolveLocale=function(t){var e=Intl.NumberFormat.supportedLocalesOf(t)
return e.length>0?new Intl.Locale(e[0]):new Intl.Locale("string"==typeof t?t:t[0])},t.__parse=ot,t.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},t}()
const kt=Et},9484:t=>{var e={}.toString
t.exports=Array.isArray||function(t){return"[object Array]"==e.call(t)}},132:t=>{var e
window,e=function(){return function(t){var e={}
function r(n){if(e[n])return e[n].exports
var i=e[n]={i:n,l:!1,exports:{}}
return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t}
return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=46)}([function(t,e){t.exports=function(t,e,r){var n
if(!t)return 0
if(r=r||t,t instanceof Array){for(n=0;n<t.length;n++)if(!1===e.call(r,t[n],n,t))return 0}else for(n in t)if(t.hasOwnProperty(n)&&!1===e.call(r,t[n],n,t))return 0
return 1}},function(t,e){t.exports=function(t){for(var e=1;e<arguments.length;e++)for(var r in arguments[e])t[r]=arguments[e][r]
return t}},function(t,e,r){"use strict"
r.r(e),function(t){var e=r(19),n=r(5),i=function(){if("undefined"!=typeof self)return self
if("undefined"!=typeof window)return window
if(void 0!==t)return t
throw new Error("unable to locate global object")}()
i.Promise?i.Promise.prototype.finally||(i.Promise.prototype.finally=n.a):i.Promise=e.a}.call(this,r(4))},function(t,e,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var n=e.configDefault={queue:{capacity:5e3,interval:15},retry:{limit:10,initialDelay:200,retryOnResponseStatuses:[408,500,502,503,504]},unique:!1,cache:{dbName:"keenTracking",dbCollectionName:"events",dbCollectionKey:"hash",maxAge:6e4}}
e.default=n},function(t,e){var r
r=function(){return this}()
try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict"
e.a=function(t){var e=this.constructor
return this.then((function(r){return e.resolve(t()).then((function(){return r}))}),(function(r){return e.resolve(t()).then((function(){return e.reject(r)}))}))}},function(t,e){!function(t){"use strict"
if(!t.fetch){var e="URLSearchParams"in t,r="Symbol"in t&&"iterator"in Symbol,n="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),i="FormData"in t,o="ArrayBuffer"in t
if(o)var a=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],s=function(t){return t&&DataView.prototype.isPrototypeOf(t)},u=ArrayBuffer.isView||function(t){return t&&a.indexOf(Object.prototype.toString.call(t))>-1}
p.prototype.append=function(t,e){t=h(t),e=l(e)
var r=this.map[t]
this.map[t]=r?r+","+e:e},p.prototype.delete=function(t){delete this.map[h(t)]},p.prototype.get=function(t){return t=h(t),this.has(t)?this.map[t]:null},p.prototype.has=function(t){return this.map.hasOwnProperty(h(t))},p.prototype.set=function(t,e){this.map[h(t)]=l(e)},p.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},p.prototype.keys=function(){var t=[]
return this.forEach((function(e,r){t.push(r)})),d(t)},p.prototype.values=function(){var t=[]
return this.forEach((function(e){t.push(e)})),d(t)},p.prototype.entries=function(){var t=[]
return this.forEach((function(e,r){t.push([r,e])})),d(t)},r&&(p.prototype[Symbol.iterator]=p.prototype.entries)
var c=["DELETE","GET","HEAD","OPTIONS","POST","PUT"]
w.prototype.clone=function(){return new w(this,{body:this._bodyInit})},y.call(w.prototype),y.call(M.prototype),M.prototype.clone=function(){return new M(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new p(this.headers),url:this.url})},M.error=function(){var t=new M(null,{status:0,statusText:""})
return t.type="error",t}
var f=[301,302,303,307,308]
M.redirect=function(t,e){if(-1===f.indexOf(e))throw new RangeError("Invalid status code")
return new M(null,{status:e,headers:{location:t}})},t.Headers=p,t.Request=w,t.Response=M,t.fetch=function(t,e){return new Promise((function(r,i){var o=new w(t,e),a=new XMLHttpRequest
a.onload=function(){var t,e,n={status:a.status,statusText:a.statusText,headers:(t=a.getAllResponseHeaders()||"",e=new p,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var r=t.split(":"),n=r.shift().trim()
if(n){var i=r.join(":").trim()
e.append(n,i)}})),e)}
n.url="responseURL"in a?a.responseURL:n.headers.get("X-Request-URL")
var i="response"in a?a.response:a.responseText
r(new M(i,n))},a.onerror=function(){i(new TypeError("Network request failed"))},a.ontimeout=function(){i(new TypeError("Network request failed"))},a.open(o.method,o.url,!0),"include"===o.credentials?a.withCredentials=!0:"omit"===o.credentials&&(a.withCredentials=!1),"responseType"in a&&n&&(a.responseType="blob"),o.headers.forEach((function(t,e){a.setRequestHeader(e,t)})),a.send(void 0===o._bodyInit?null:o._bodyInit)}))},t.fetch.polyfill=!0}function h(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name")
return t.toLowerCase()}function l(t){return"string"!=typeof t&&(t=String(t)),t}function d(t){var e={next:function(){var e=t.shift()
return{done:void 0===e,value:e}}}
return r&&(e[Symbol.iterator]=function(){return e}),e}function p(t){this.map={},t instanceof p?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function b(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"))
t.bodyUsed=!0}function m(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function v(t){var e=new FileReader,r=m(e)
return e.readAsArrayBuffer(t),r}function g(t){if(t.slice)return t.slice(0)
var e=new Uint8Array(t.byteLength)
return e.set(new Uint8Array(t)),e.buffer}function y(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t
else if(n&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t
else if(i&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t
else if(e&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString()
else if(o&&n&&s(t))this._bodyArrayBuffer=g(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])
else{if(!o||!ArrayBuffer.prototype.isPrototypeOf(t)&&!u(t))throw new Error("unsupported BodyInit type")
this._bodyArrayBuffer=g(t)}else this._bodyText=""
this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n&&(this.blob=function(){var t=b(this)
if(t)return t
if(this._bodyBlob)return Promise.resolve(this._bodyBlob)
if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]))
if(this._bodyFormData)throw new Error("could not read FormData body as blob")
return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?b(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(v)}),this.text=function(){var t,e,r,n=b(this)
if(n)return n
if(this._bodyBlob)return t=this._bodyBlob,r=m(e=new FileReader),e.readAsText(t),r
if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n])
return r.join("")}(this._bodyArrayBuffer))
if(this._bodyFormData)throw new Error("could not read FormData body as text")
return Promise.resolve(this._bodyText)},i&&(this.formData=function(){return this.text().then(_)}),this.json=function(){return this.text().then(JSON.parse)},this}function w(t,e){var r,n,i=(e=e||{}).body
if(t instanceof w){if(t.bodyUsed)throw new TypeError("Already read")
this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new p(t.headers)),this.method=t.method,this.mode=t.mode,i||null==t._bodyInit||(i=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t)
if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new p(e.headers)),this.method=(n=(r=e.method||this.method||"GET").toUpperCase(),c.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&i)throw new TypeError("Body not allowed for GET or HEAD requests")
this._initBody(i)}function _(t){var e=new FormData
return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),i=r.join("=").replace(/\+/g," ")
e.append(decodeURIComponent(n),decodeURIComponent(i))}})),e}function M(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new p(e.headers),this.url=e.url||"",this._initBody(t)}}("undefined"!=typeof self?self:this)},function(t){t.exports={name:"keen-tracking",version:"5.0.1",description:"Track events - custom user actions, clicks, pageviews, purchases.",main:"dist/node/keen-tracking.js",browser:"dist/keen-tracking.js",repository:{type:"git",url:"https://github.com/keen/keen-tracking.js.git"},scripts:{start:"NODE_ENV=development webpack-dev-server",test:"NODE_ENV=test jest && npm run test:node","test:node":"NODE_ENV=test TEST_ENV=node jest","test:watch":"NODE_ENV=test jest --watch","test:node:watch":"NODE_ENV=test TEST_ENV=node jest --watch",build:"NODE_ENV=production webpack -p && NODE_ENV=production OPTIMIZE_MINIMIZE=1 webpack -p && npm run build:node","build:node":"TARGET=node NODE_ENV=production webpack -p",profile:"webpack --profile --json > stats.json",analyze:"webpack-bundle-analyzer stats.json /dist",preversion:"npm run build:node && npm run test",version:"npm run build && git add .",postversion:"git push && git push --tags && npm publish",demo:"node ./test/demo/index.node.js"},bugs:"https://github.com/keen/keen-tracking.js/issues",author:"Keen IO <team@keen.io> (https://keen.io/)",homepage:"https://keen.io",keywords:["Tracking","Tracker","Event Tracker","Event tracking","Track events","Page tracking","User tracking","Analytics event tracking","Analytics events","Analytics tracking","Custom events","Analytics","Stats","Statistics","Monitoring","Metrics","Pageviews","Segmentation","Funnel","Conversion","Log","Logger","Logging","Javascript events","Universal tracking","Click analytics"],contributors:["Dustin Larimer <dustin@keen.io> (https://github.com/dustinlarimer)","Eric Anderson <eric@keen.io> (https://github.com/aroc)","Joe Wegner <joe@keen.io> (http://www.wegnerdesign.com)","Alex Kleissner <alex@keen.io> (https://github.com/hex337)","Adam Kasprowicz <adam.kasprowicz@keen.io> (https://github.com/adamkasprowicz)","Dariusz Łacheta <dariusz.lacheta@keen.io> (https://github.com/dariuszlacheta)"],license:"MIT",dependencies:{"component-emitter":"^1.2.0","js-cookie":"2.1.0","keen-core":"^0.1.3","promise-polyfill":"^8.0.0","whatwg-fetch":"^2.0.4"},devDependencies:{"babel-core":"^6.26.3","babel-jest":"^23.0.1","babel-loader":"^7.1.5","babel-plugin-transform-es2015-modules-commonjs":"^6.26.2","babel-plugin-transform-object-rest-spread":"^6.26.0","babel-polyfill":"^6.26.0","babel-preset-env":"^1.7.0","babel-preset-es2015":"^6.24.1","babel-preset-stage-0":"^6.24.1",eslint:"^4.19.1","eslint-config-airbnb":"^16.1.0","eslint-loader":"^2.0.0","eslint-plugin-import":"^2.11.0","eslint-plugin-jsx-a11y":"^6.0.3","html-loader":"^0.5.5","html-webpack-plugin":"^3.2.0",jest:"^22.4.3","jest-fetch-mock":"^1.6.5",merge:"^1.2.1",nock:"^9.2.6","regenerator-runtime":"^0.11.1","replace-in-file":"^3.4.0","url-parse":"^1.4.3",webpack:"^4.5.0","webpack-bundle-analyzer":"^3.3.2","webpack-cli":"^2.0.13","webpack-dev-server":"^3.1.14","xhr-mock":"^2.3.2"}}},function(t,e,r){function n(t){if(t)return function(t){for(var e in n.prototype)t[e]=n.prototype[e]
return t}(t)}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},n.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this
var r,n=this._callbacks["$"+t]
if(!n)return this
if(1==arguments.length)return delete this._callbacks["$"+t],this
for(var i=0;i<n.length;i++)if((r=n[i])===e||r.fn===e){n.splice(i,1)
break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{}
var e=[].slice.call(arguments,1),r=this._callbacks["$"+t]
if(r)for(var n=0,i=(r=r.slice(0)).length;n<i;++n)r[n].apply(this,e)
return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var n=s(r(44)),i=(s(r(0)),s(r(1)),r(18)),o=r(17),a=s(r(7))
function s(t){return t&&t.__esModule?t:{default:t}}n.default.helpers=n.default.helpers||{},n.default.prototype.observers=n.default.observers||{},n.default.on("client",(function(t){t.extensions={events:[],collections:{}},t.config.respectDoNotTrack||(this.doNotTrack=!1),void 0!==t.config.optOut&&((0,o.setOptOut)(t.config.optOut),this.optedOut=t.config.optOut),t.queue=(0,i.queue)(t.config.queue),t.queue.on("flush",(function(){t.recordDeferredEvents()}))})),n.default.prototype.writeKey=function(t){return arguments.length?(this.config.writeKey=t?String(t):null,this):this.config.writeKey},n.default.prototype.referrerPolicy=function(t){return arguments.length?(this.config.referrerPolicy=t?String(t):null,this):this.config.referrerPolicy},n.default.prototype.setGlobalProperties=function(t){return n.default.log("This method has been removed. Check out #extendEvents: https://github.com/keen/keen-tracking.js#extend-events"),this},n.default.version=a.default.version,e.default=n.default},function(t,e,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.getDomNodePath=function(t){if(!t.nodeName)return""
for(var e=[];null!=t.parentNode;){for(var r=0,n=0,i=0;i<t.parentNode.childNodes.length;i++){var o=t.parentNode.childNodes[i]
o.nodeName==t.nodeName&&(o===t&&(n=r),r++)}t.hasAttribute("id")&&""!=t.id?e.unshift(t.nodeName.toLowerCase()+"#"+t.id):r>1?e.unshift(t.nodeName.toLowerCase()+":eq("+n+")"):e.unshift(t.nodeName.toLowerCase()),t=t.parentNode}return e.slice(1).join(" > ")}},function(t,e,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.getWindowProfile=function(){var t,e,r
return"undefined"==typeof document?{}:(t=document.body||{},e=document.documentElement||{},r={height:"innerHeight"in window?window.innerHeight:document.documentElement.offsetHeight,width:"innerWidth"in window?window.innerWidth:document.documentElement.offsetWidth,scrollHeight:Math.max(t.scrollHeight,t.offsetHeight,e.clientHeight,e.scrollHeight,e.offsetHeight)||null},window.screen&&(r.ratio={height:window.screen.availHeight?parseFloat((window.innerHeight/window.screen.availHeight).toFixed(2)):null,width:window.screen.availWidth?parseFloat((window.innerWidth/window.screen.availWidth).toFixed(2)):null}),r)}},function(t,e,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.getScreenProfile=function(){var t,e
if("undefined"==typeof window||!window.screen)return{}
t=["height","width","colorDepth","pixelDepth","availHeight","availWidth"],e={}
for(var r=0;r<t.length;r++)e[t[r]]=window.screen[t[r]]?window.screen[t[r]]:null
return e.orientation={angle:window.screen.orientation?window.screen.orientation.angle:0,type:window.innerWidth>window.innerHeight?"landscape":"portrait"},e}},function(t,e,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var n=e.MD5=function(t){var e=function(t){for(var e,r="0123456789ABCDEF",n="",i=0;i<t.length;i++)e=t.charCodeAt(i),n+=r.charAt(e>>>4&15)+r.charAt(15&e)
return n}(function(t){for(var e="",r=0;r<32*t.length;r+=8)e+=String.fromCharCode(t[r>>5]>>>r%32&255)
return e}(function(t,e){t[e>>5]|=128<<e%32,t[14+(e+64>>>9<<4)]=e
for(var r=1732584193,n=-271733879,i=-1732584194,f=271733878,h=0;h<t.length;h+=16){var l=r,d=n,p=i,b=f
n=u(n=u(n=u(n=u(n=s(n=s(n=s(n=s(n=a(n=a(n=a(n=a(n=o(n=o(n=o(n=o(n,i=o(i,f=o(f,r=o(r,n,i,f,t[h+0],7,-680876936),n,i,t[h+1],12,-389564586),r,n,t[h+2],17,606105819),f,r,t[h+3],22,-1044525330),i=o(i,f=o(f,r=o(r,n,i,f,t[h+4],7,-176418897),n,i,t[h+5],12,1200080426),r,n,t[h+6],17,-1473231341),f,r,t[h+7],22,-45705983),i=o(i,f=o(f,r=o(r,n,i,f,t[h+8],7,1770035416),n,i,t[h+9],12,-1958414417),r,n,t[h+10],17,-42063),f,r,t[h+11],22,-1990404162),i=o(i,f=o(f,r=o(r,n,i,f,t[h+12],7,1804603682),n,i,t[h+13],12,-40341101),r,n,t[h+14],17,-1502002290),f,r,t[h+15],22,1236535329),i=a(i,f=a(f,r=a(r,n,i,f,t[h+1],5,-165796510),n,i,t[h+6],9,-1069501632),r,n,t[h+11],14,643717713),f,r,t[h+0],20,-373897302),i=a(i,f=a(f,r=a(r,n,i,f,t[h+5],5,-701558691),n,i,t[h+10],9,38016083),r,n,t[h+15],14,-660478335),f,r,t[h+4],20,-405537848),i=a(i,f=a(f,r=a(r,n,i,f,t[h+9],5,568446438),n,i,t[h+14],9,-1019803690),r,n,t[h+3],14,-187363961),f,r,t[h+8],20,1163531501),i=a(i,f=a(f,r=a(r,n,i,f,t[h+13],5,-1444681467),n,i,t[h+2],9,-51403784),r,n,t[h+7],14,1735328473),f,r,t[h+12],20,-1926607734),i=s(i,f=s(f,r=s(r,n,i,f,t[h+5],4,-378558),n,i,t[h+8],11,-2022574463),r,n,t[h+11],16,1839030562),f,r,t[h+14],23,-35309556),i=s(i,f=s(f,r=s(r,n,i,f,t[h+1],4,-1530992060),n,i,t[h+4],11,1272893353),r,n,t[h+7],16,-155497632),f,r,t[h+10],23,-1094730640),i=s(i,f=s(f,r=s(r,n,i,f,t[h+13],4,681279174),n,i,t[h+0],11,-358537222),r,n,t[h+3],16,-722521979),f,r,t[h+6],23,76029189),i=s(i,f=s(f,r=s(r,n,i,f,t[h+9],4,-640364487),n,i,t[h+12],11,-421815835),r,n,t[h+15],16,530742520),f,r,t[h+2],23,-995338651),i=u(i,f=u(f,r=u(r,n,i,f,t[h+0],6,-198630844),n,i,t[h+7],10,1126891415),r,n,t[h+14],15,-1416354905),f,r,t[h+5],21,-57434055),i=u(i,f=u(f,r=u(r,n,i,f,t[h+12],6,1700485571),n,i,t[h+3],10,-1894986606),r,n,t[h+10],15,-1051523),f,r,t[h+1],21,-2054922799),i=u(i,f=u(f,r=u(r,n,i,f,t[h+8],6,1873313359),n,i,t[h+15],10,-30611744),r,n,t[h+6],15,-1560198380),f,r,t[h+13],21,1309151649),i=u(i,f=u(f,r=u(r,n,i,f,t[h+4],6,-145523070),n,i,t[h+11],10,-1120210379),r,n,t[h+2],15,718787259),f,r,t[h+9],21,-343485551),r=c(r,l),n=c(n,d),i=c(i,p),f=c(f,b)}return Array(r,n,i,f)}(function(t){for(var e=Array(t.length>>2),r=0;r<e.length;r++)e[r]=0
for(r=0;r<8*t.length;r+=8)e[r>>5]|=(255&t.charCodeAt(r/8))<<r%32
return e}(t),8*t.length)))
return e.toLowerCase()}
function i(t,e,r,n,i,o){return c(function(t,e){return t<<e|t>>>32-e}(c(c(e,t),c(n,o)),i),r)}function o(t,e,r,n,o,a,s){return i(e&r|~e&n,t,e,o,a,s)}function a(t,e,r,n,o,a,s){return i(e&n|r&~n,t,e,o,a,s)}function s(t,e,r,n,o,a,s){return i(e^r^n,t,e,o,a,s)}function u(t,e,r,n,o,a,s){return i(r^(e|~n),t,e,o,a,s)}function c(t,e){var r=(65535&t)+(65535&e)
return(t>>16)+(e>>16)+(r>>16)<<16|65535&r}e.default=n},function(t,e,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}
function i(t){return JSON.parse(JSON.stringify(t))}e.deepExtend=function t(e){for(var r=1;r<arguments.length;r++)if(e instanceof Array&&arguments[r]instanceof Array)for(var o=0;o<arguments[r].length;o++)e.indexOf(arguments[r][o])<0&&e.push(arguments[r][o])
else for(var a in arguments[r])void 0!==e[a]&&"object"===n(e[a])&&"object"===n(arguments[r][a])&&null!==arguments[r][a]?t(e[a],i(arguments[r][a])):void 0!==arguments[r][a]&&"function"!=typeof arguments[r][a]&&(e[a]=i(arguments[r][a]))
return e}},function(t,e,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}
e.extendEvent=function(t,e){if(2===arguments.length&&"string"==typeof t&&("object"===(void 0===e?"undefined":n(e))||"function"==typeof e))return this.extensions.collections[t]=this.extensions.collections[t]||[],this.extensions.collections[t].push(e),this.emit("extendEvent",t,e),this
s.call(this,"Incorrect arguments provided to #extendEvent method")},e.extendEvents=function(t){if(1===arguments.length&&("object"===(void 0===t?"undefined":n(t))||"function"==typeof t))return this.extensions.events.push(t),this.emit("extendEvents",t),this
s.call(this,"Incorrect arguments provided to #extendEvents method")},e.getExtendedEventBody=function(t,e){return e&&e.length>0&&(0,a.default)(e,(function(e,r){var n="function"==typeof e?e():e;(0,o.deepExtend)(t,n)})),t}
var i,o=r(14),a=(i=r(0))&&i.__esModule?i:{default:i}
function s(t){this.emit("error","Event(s) not extended: "+t)}},function(t,e,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.isLocalStorageAvailable=function(){var t="test"
try{return localStorage.setItem(t,t),localStorage.removeItem(t),!0}catch(t){return!1}}()},function(t,e,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.setOptOut=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0]
n.isLocalStorageAvailable&&(t?localStorage.setItem("optout",t):localStorage.removeItem("optout"))}
var n=r(16)},function(t,e,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]
for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}
e.queue=s
var i=a(r(8)),o=a(r(3))
function a(t){return t&&t.__esModule?t:{default:t}}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return this instanceof s==0?new s(t):(this.capacity=0,this.config=n({},o.default.queue,t),this.events={},this.interval=0,this.timer=null,this)}(0,i.default)(s.prototype),s.prototype.check=function(){return((t=this).capacity>0&&t.interval>=t.config.interval||t.capacity>=t.config.capacity)&&this.flush(),0!==this.config.interval&&0!==this.capacity||this.pause(),this
var t},s.prototype.flush=function(){return this.emit("flush"),this.interval=0,this},s.prototype.pause=function(){return this.timer&&(clearInterval(this.timer),this.timer=null),this},s.prototype.start=function(){var t=this
return t.pause(),t.timer=setInterval((function(){t.interval++,t.check()}),1e3),t}},function(t,e,r){"use strict";(function(t){var n=r(5),i=setTimeout
function o(){}function a(t){if(!(this instanceof a))throw new TypeError("Promises must be constructed via new")
if("function"!=typeof t)throw new TypeError("not a function")
this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(t,this)}function s(t,e){for(;3===t._state;)t=t._value
0!==t._state?(t._handled=!0,a._immediateFn((function(){var r=1===t._state?e.onFulfilled:e.onRejected
if(null!==r){var n
try{n=r(t._value)}catch(t){return void c(e.promise,t)}u(e.promise,n)}else(1===t._state?u:c)(e.promise,t._value)}))):t._deferreds.push(e)}function u(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.")
if(e&&("object"==typeof e||"function"==typeof e)){var r=e.then
if(e instanceof a)return t._state=3,t._value=e,void f(t)
if("function"==typeof r)return void l((n=r,i=e,function(){n.apply(i,arguments)}),t)}t._state=1,t._value=e,f(t)}catch(e){c(t,e)}var n,i}function c(t,e){t._state=2,t._value=e,f(t)}function f(t){2===t._state&&0===t._deferreds.length&&a._immediateFn((function(){t._handled||a._unhandledRejectionFn(t._value)}))
for(var e=0,r=t._deferreds.length;e<r;e++)s(t,t._deferreds[e])
t._deferreds=null}function h(t,e,r){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=r}function l(t,e){var r=!1
try{t((function(t){r||(r=!0,u(e,t))}),(function(t){r||(r=!0,c(e,t))}))}catch(t){if(r)return
r=!0,c(e,t)}}a.prototype.catch=function(t){return this.then(null,t)},a.prototype.then=function(t,e){var r=new this.constructor(o)
return s(this,new h(t,e,r)),r},a.prototype.finally=n.a,a.all=function(t){return new a((function(e,r){if(!t||void 0===t.length)throw new TypeError("Promise.all accepts an array")
var n=Array.prototype.slice.call(t)
if(0===n.length)return e([])
var i=n.length
function o(t,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then
if("function"==typeof s)return void s.call(a,(function(e){o(t,e)}),r)}n[t]=a,0==--i&&e(n)}catch(t){r(t)}}for(var a=0;a<n.length;a++)o(a,n[a])}))},a.resolve=function(t){return t&&"object"==typeof t&&t.constructor===a?t:new a((function(e){e(t)}))},a.reject=function(t){return new a((function(e,r){r(t)}))},a.race=function(t){return new a((function(e,r){for(var n=0,i=t.length;n<i;n++)t[n].then(e,r)}))},a._immediateFn="function"==typeof t&&function(e){t(e)}||function(t){i(t,0)},a._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},e.a=a}).call(this,r(39).setImmediate)},function(t,e,r){"use strict"
function n(t){return this instanceof n==0?new n(t):(this.count=t||0,this)}Object.defineProperty(e,"__esModule",{value:!0}),e.timer=n,n.prototype.start=function(){var t=this
return this.pause(),this.interval=setInterval((function(){t.count++}),1e3),this},n.prototype.pause=function(){return clearInterval(this.interval),this},n.prototype.value=function(){return this.count},n.prototype.clear=function(){return this.count=0,this}},function(t,e,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}
e.serializeForm=function(t,e){"object"!=(void 0===e?"undefined":n(e))?e={hash:!!e}:void 0===e.hash&&(e.hash=!0)
for(var r=e.hash?{}:"",a=e.serializer||(e.hash?u:c),s=t&&t.elements?t.elements:[],f=Object.create(null),h=0;h<s.length;++h){var l=s[h]
if(!(e.ignoreTypes&&e.ignoreTypes.indexOf(l.type)>-1)&&(e.disabled||!l.disabled)&&l.name&&o.test(l.nodeName)&&!i.test(l.type)){var d=l.name,p=l.value
if("checkbox"!==l.type&&"radio"!==l.type||l.checked||(p=void 0),e.empty){if("checkbox"!==l.type||l.checked||(p=""),"radio"===l.type&&(f[l.name]||l.checked?l.checked&&(f[l.name]=!0):f[l.name]=!1),null==p&&"radio"==l.type)continue}else if(!p)continue
if("select-multiple"!==l.type)r=a(r,d,p)
else{p=[]
for(var b=l.options,m=!1,v=0;v<b.length;++v){var g=b[v],y=e.empty&&!g.value,w=g.value||y
g.selected&&w&&(m=!0,r=e.hash&&"[]"!==d.slice(d.length-2)?a(r,d+"[]",g.value):a(r,d,g.value))}!m&&e.empty&&(r=a(r,d,""))}}}if(e.empty)for(var d in f)f[d]||(r=a(r,d,""))
return r}
var i=/^(?:submit|button|image|reset|file)$/i,o=/^(?:input|select|textarea|keygen)/i,a=/(\[[^\[\]]*\])/g
function s(t,e,r){if(0===e.length)return r
var n=e.shift(),i=n.match(/^\[(.+?)\]$/)
if("[]"===n)return t=t||[],Array.isArray(t)?t.push(s(null,e,r)):(t._values=t._values||[],t._values.push(s(null,e,r))),t
if(i){var o=i[1],a=+o
isNaN(a)?(t=t||{})[o]=s(t[o],e,r):(t=t||[])[a]=s(t[a],e,r)}else t[n]=s(t[n],e,r)
return t}function u(t,e,r){if(e.match(a))s(t,function(t){var e=[],r=new RegExp(a),n=/^([^\[\]]*)/.exec(t)
for(n[1]&&e.push(n[1]);null!==(n=r.exec(t));)e.push(n[1])
return e}(e),r)
else{var n=t[e]
n?(Array.isArray(n)||(t[e]=[n]),t[e].push(r)):t[e]=r}return t}function c(t,e,r){return r=r.replace(/(\r)?\n/g,"\r\n"),r=(r=encodeURIComponent(r)).replace(/%20/g,"+"),t+(t?"&":"")+encodeURIComponent(e)+"="+r}},function(t,e,r){var n,i
n=function(){function t(){for(var t=0,e={};t<arguments.length;t++){var r=arguments[t]
for(var n in r)e[n]=r[n]}return e}return function e(r){function n(e,i,o){var a
if(arguments.length>1){if("number"==typeof(o=t({path:"/"},n.defaults,o)).expires){var s=new Date
s.setMilliseconds(s.getMilliseconds()+864e5*o.expires),o.expires=s}try{a=JSON.stringify(i),/^[\{\[]/.test(a)&&(i=a)}catch(t){}return i=r.write?r.write(i,e):encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=[e,"=",i,o.expires&&"; expires="+o.expires.toUTCString(),o.path&&"; path="+o.path,o.domain&&"; domain="+o.domain,o.secure?"; secure":""].join("")}e||(a={})
for(var u=document.cookie?document.cookie.split("; "):[],c=/(%[0-9A-Z]{2})+/g,f=0;f<u.length;f++){var h=u[f].split("="),l=h[0].replace(c,decodeURIComponent),d=h.slice(1).join("=")
'"'===d.charAt(0)&&(d=d.slice(1,-1))
try{if(d=r.read?r.read(d,l):r(d,l)||d.replace(c,decodeURIComponent),this.json)try{d=JSON.parse(d)}catch(t){}if(e===l){a=d
break}e||(a[l]=d)}catch(t){}}return a}return n.get=n.set=n,n.getJSON=function(){return n.apply({json:!0},[].slice.call(arguments))},n.defaults={},n.remove=function(e,r){n(e,"",t(r,{expires:-1}))},n.withConverter=e,n}((function(){}))},void 0===(i=n.call(e,r,e,t))||(t.exports=i)},function(t,e,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.cookie=void 0
var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=a(r(22)),o=a(r(1))
function a(t){return t&&t.__esModule?t:{default:t}}var s=e.cookie=function t(e){if(arguments.length)return this instanceof t==0?new t(e):(this.config={key:e,options:{expires:365}},this.data=this.get(),this)}
s.prototype.get=function(t){var e={}
return i.default.get(this.config.key)&&(e=i.default.getJSON(this.config.key)),t&&"object"===(void 0===e?"undefined":n(e))&&null!==typeof e?void 0!==e[t]?e[t]:null:e},s.prototype.set=function(t,e,r){return arguments.length&&this.enabled()?("string"==typeof t&&arguments.length>=2?this.data[t]=e||null:"object"===(void 0===t?"undefined":n(t))&&1===arguments.length&&(0,o.default)(this.data,t),i.default.set(this.config.key,this.data,(0,o.default)(this.config.options,r||{})),this):this},s.prototype.expire=function(t){return t?i.default.set(this.config.key,this.data,(0,o.default)(this.config.options,{expires:t})):(i.default.remove(this.config.key),this.data={}),this},s.prototype.options=function(t){return arguments.length?(this.config.options="object"===(void 0===t?"undefined":n(t))?t:{},this):this.config.options},s.prototype.enabled=function(){return navigator.cookieEnabled}},function(t,e,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.getUniqueId=function(){return"undefined"!=typeof crypto&&crypto.getRandomValues?([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(t){return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)})):"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0
return("x"==t?e:3&e|8).toString(16)}))}},function(t,e,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}
e.getScrollState=function(t){var e="object"===(void 0===t?"undefined":n(t))?t:{},r=(0,o.default)({pixel:0,pixel_max:0,ratio:null,ratio_max:null},e)
return void 0===("undefined"==typeof window?"undefined":n(window))&&void 0===("undefined"==typeof document?"undefined":n(document))||(r.pixel=(void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop)+(window.innerHeight||document.documentElement.clientHeight),r.pixel>r.pixel_max&&(r.pixel_max=r.pixel),r.ratio=parseFloat(Number(r.pixel/a()).toFixed(2)),r.ratio_max=parseFloat(Number(r.pixel_max/a()).toFixed(2))),r}
var i,o=(i=r(1))&&i.__esModule?i:{default:i}
function a(){var t=document.body,e=document.documentElement
return Math.max(t.scrollHeight,t.offsetHeight,e.clientHeight,e.scrollHeight,e.offsetHeight)||null}},function(t,e,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.getDomNodeProfile=function(t){return{action:t.action,class:t.className,href:i(t,"href"),id:i(t,"id"),event_key:i(t,"data-event-key"),method:t.method,name:t.name,node_name:t.nodeName,selector:(0,n.getDomNodePath)(t),text:i(t,"text"),title:i(t,"title"),type:t.type,x_position:t.offsetLeft||t.clientLeft||null,y_position:t.offsetTop||t.clientTop||null}}
var n=r(10),i=function t(e,r){return e[r]?e[r]:e.hasAttribute&&e.hasAttribute(r)?e.getAttribute(r):e.parentNode?t(e.parentNode,r):null}},function(t,e,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.getDomainName=function(t){var e=function(t){return(t.indexOf("://")>-1?t.split("/")[2]:t.split("/")[0]).split(":")[0].split("?")[0]}(t),r=e.split("."),n=r.length
return n>2&&(e=r[n-2]+"."+r[n-1],2==r[n-2].length&&2==r[n-1].length&&(e=r[n-3]+"."+e)),e}},function(t,e,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.getDatetimeIndex=function(t){var e=t||new Date
return{hour_of_day:e.getHours(),day_of_week:parseInt(1+e.getDay()),day_of_month:e.getDate(),month:parseInt(1+e.getMonth()),year:e.getFullYear()}}},function(t,e,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.getBrowserProfile=function(){return{cookies:void 0!==navigator.cookieEnabled&&navigator.cookieEnabled,codeName:navigator.appCodeName,description:(document&&"function"==typeof document.querySelector&&(t=document.querySelector('meta[name="description"]')),t?t.content:""),language:navigator.language,name:navigator.appName,online:navigator.onLine,platform:navigator.platform,useragent:navigator.userAgent,version:navigator.appVersion,doNotTrack:navigator.doNotTrack,screen:(0,n.getScreenProfile)(),window:(0,i.getWindowProfile)()}
var t}
var n=r(12),i=r(11)},function(t,e,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]
for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}
e.initAutoTrackingCore=function(t){return function(e){var r=this,i=t.helpers,u=t.utils,c=u.extend({ignoreDisabledFormFields:!1,ignoreFormFieldTypes:["password"],recordClicks:!0,recordClicksPositionPointer:!1,recordFormSubmits:!0,recordPageViews:!0,recordPageViewsOnExit:!1,recordScrollState:!0,shareUuidAcrossDomains:!1,collectIpAddress:!0,collectUuid:!0,recordElementViews:!0,catchError:void 0},e)
if("beaconAPI"===r.config.requestType&&c.catchError)throw"You cannot use the BeaconAPI and catchError function in the same time, because BeaconAPI ignores errors. For requests with error handling - use requestType: 'fetch'"
"jsonp"===r.config.requestType&&(c.catchError?r.config.requestType="fetch":r.config.requestType="beaconAPI")
var f=new Date,h=0,l=0
if("undefined"!=typeof document){var d=void 0,p=void 0
void 0!==document.hidden?(d="hidden",p="visibilitychange"):void 0!==document.msHidden?(d="msHidden",p="msvisibilitychange"):void 0!==document.webkitHidden&&(d="webkitHidden",p="webkitvisibilitychange"),void 0===document.addEventListener&&void 0===d||document.addEventListener(p,(function(){if(document[d])return h+=a(f),void(l+=s(f))
f=new Date}),!1)}var b=new u.cookie("keen"),m=i.getDomainName(window.location.hostname),v=m&&c.shareUuidAcrossDomains?{domain:"."+m}:{},g=void 0
c.collectUuid&&((g=b.get("uuid"))||(g=i.getUniqueId(),b.set("uuid",g,v)))
var y=b.get("initialReferrer")
y||(y=document&&document.referrer||void 0,b.set("initialReferrer",y,v))
var w={}
c.recordScrollState&&(w=i.getScrollState(),u.listener("window").on("scroll",(function(){w=i.getScrollState(w)})))
var _=[{name:"keen:ua_parser",input:{ua_string:"user_agent"},output:"tech"},{name:"keen:url_parser",input:{url:"url.full"},output:"url.info"},{name:"keen:url_parser",input:{url:"referrer.full"},output:"referrer.info"},{name:"keen:date_time_parser",input:{date_time:"keen.timestamp"},output:"time.utc"},{name:"keen:date_time_parser",input:{date_time:"local_time_full"},output:"time.local"}]
if(_.push({name:"keen:ip_to_geo",input:{ip:"ip_address",remove_ip_property:!c.collectIpAddress},output:"geo"}),r.extendEvents((function(){var t=i.getBrowserProfile()
return{tracked_by:o.default.name+"-"+o.default.version,local_time_full:(new Date).toISOString(),user:{uuid:g},page:{title:document?document.title:null,description:t.description,scroll_state:w,time_on_page:h>0?h:a(f),time_on_page_ms:l>0?l:s(f)},ip_address:"${keen.ip}",geo:{},user_agent:"${keen.user_agent}",tech:{profile:t},url:{full:window?window.location.href:"",info:{}},referrer:{initial:y,full:document?document.referrer:"",info:{}},time:{local:{},utc:{}},keen:{timestamp:(new Date).toISOString(),addons:_}}})),!0===c.recordClicks&&u.listener("a, a *").on("click",(function(t){var e=t.target,o={element:i.getDomNodeProfile(e),local_time_full:(new Date).toISOString()}
if(!0===c.recordClicksPositionPointer){var a={x_position:t.pageX,y_position:t.pageY}
o=n({},o,{pointer:a})}return c.catchError?r.recordEvent({collection:"clicks",event:o}).catch((function(t){c.catchError(t)})):r.recordEvent({collection:"clicks",event:o})})),!0===c.recordFormSubmits&&u.listener("form").on("submit",(function(t){var e=t.target,n={disabled:c.ignoreDisabledFormFields,ignoreTypes:c.ignoreFormFieldTypes},o={form:{action:e.action,fields:u.serializeForm(e,n),method:e.method},element:i.getDomNodeProfile(e),local_time_full:(new Date).toISOString()}
return c.catchError?r.recordEvent({collection:"form_submissions",event:o}).catch((function(t){c.catchError(t)})):r.recordEvent({collection:"form_submissions",event:o})})),!0!==c.recordPageViews||c.recordPageViewsOnExit||(c.catchError?r.recordEvent({collection:"pageviews"}).catch((function(t){c.catchError(t)})):r.recordEvent({collection:"pageviews"})),c.recordPageViewsOnExit&&"undefined"!=typeof window&&window.addEventListener("beforeunload",(function(){r.config.requestType="beaconAPI",r.recordEvent({collection:"pageviews"})})),!0===c.recordElementViews&&"undefined"!=typeof IntersectionObserver){var M=new IntersectionObserver((function(t,e){t.forEach((function(t){if(t.isIntersecting){var e={element:i.getDomNodeProfile(t.target),local_time_full:(new Date).toISOString()}
return c.catchError?r.recordEvent({collection:"element_views",event:e}).catch((function(t){c.catchError(t)})):r.recordEvent({collection:"element_views",event:e})}}))}),{threshold:1})
document.querySelectorAll(".track-element-view").forEach((function(t){M.observe(t)})),r.observers.IntersectionObserver=M}return r}}
var i,o=(i=r(7))&&i.__esModule?i:{default:i}
function a(t){return Math.round(s(t)/1e3)}function s(t){return(new Date).getTime()-t.getTime()}},function(t,e,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]
for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}
e.deferEvent=function(t,e){if(2===arguments.length&&"string"==typeof t)return this.queue.events[t]=this.queue.events[t]||[],this.queue.events[t].push(e),this.queue.capacity++,this.queue.timer||this.queue.start(),this.emit("deferEvent",t,e),this
u.call(this,"Incorrect arguments provided to #deferEvent method")},e.deferEvents=function(t){var e=this
if(1===arguments.length&&"object"===(void 0===t?"undefined":i(t)))return(0,o.default)(t,(function(t,r){e.queue.events[r]=e.queue.events[r]||[],e.queue.events[r]=e.queue.events[r].concat(t),e.queue.capacity=e.queue.capacity+t.length,e.queue.timer||e.queue.start()})),e.emit("deferEvents",t),e
u.call(this,"Incorrect arguments provided to #deferEvents method")},e.queueCapacity=function(t){return arguments.length?(this.queue.config.capacity=t?Number(t):0,this.queue.check(),this):this.queue.config.capacity},e.queueInterval=function(t){return arguments.length?(this.queue.config.interval=t?Number(t):0,this.queue.check(),this):this.queue.config.interval},e.recordDeferredEvents=function(){var t=this
if(t.queue.capacity>0){t.queue.pause()
var e=n({},t.queue.config),r=n({},t.queue.events)
t.queue=(0,a.queue)(),t.queue.config=e,t.queue.on("flush",(function(){t.recordDeferredEvents()})),t.emit("recordDeferredEvents",r),t.recordEvents(r,(function(e,n){e&&t.emit("recordDeferredEventsError",e,r)}))}return t},s(r(9))
var o=s(r(0)),a=r(18)
function s(t){return t&&t.__esModule?t:{default:t}}function u(t){this.emit("error","Event(s) not deferred: "+t)}},function(t,e,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.getFromCache=e.saveToCache=void 0
var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]
for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}
r(2),r(6),o(r(13))
var i=o(r(3))
function o(t){return t&&t.__esModule?t:{default:t}}"undefined"==typeof self&&console.log("IndexedDB is available only in Browser ENV")
var a="undefined"!=typeof self&&"indexedDB"in self,s=!0
a||(s=!1)
var u=void 0,c=n({},i.default.cache)
function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return u?Promise.resolve():s?(c=n({},c,t),new Promise((function(t,e){var r=self.indexedDB.open(c.dbName)
r.onerror=function(e){s=!1,t()},r.onupgradeneeded=function(t){var e=t.target.result.createObjectStore(c.dbCollectionName,{keyPath:c.dbCollectionKey})
e.createIndex(c.dbCollectionKey,c.dbCollectionKey,{unique:!0}),e.createIndex("expiryTime","expiryTime",{unique:!1})},r.onsuccess=function(e){(u=e.target.result).onerror=function(t){s=!1},t(u)}}))):Promise.resolve()}e.saveToCache=function(t){return f(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).then((function(){var e=u.transaction(c.dbCollectionName,"readwrite").objectStore(c.dbCollectionName).add({hash:t,expiryTime:Date.now()+c.maxAge})
e.onsuccess=function(t){},e.onerror=function(t){s=!1}}))},e.getFromCache=function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return f(r).then((function(){return new Promise((function(n,i){if(!s)return n(null)
var o=u.transaction(c.dbCollectionName,"readwrite").objectStore(c.dbCollectionName).index("expiryTime"),a=IDBKeyRange.upperBound(Date.now(),!0)
o.openCursor(a).onsuccess=function(t){var e=t.target.result
e&&(u.transaction(c.dbCollectionName,"readwrite").objectStore(c.dbCollectionName).delete(t.target.result.value[c.dbCollectionKey]),e.continue())}
var f=u.transaction(c.dbCollectionName,"readwrite").objectStore(c.dbCollectionName).index(c.dbCollectionKey).get(e)
f.onsuccess=function(i){if(!i.target.result||i.target.result.expiryTime<Date.now()){if(i.target.result&&i.target.result.expiryTime<Date.now()){var o=u.transaction(c.dbCollectionName,"readwrite").objectStore(c.dbCollectionName).delete(i.target.result[c.dbCollectionKey])
return o.onsuccess=function(i){n(t(e,r))},o.onerror=function(i){s=!1,n(t(e,r))},n(null)}return n(null)}return n(i.target.result)},f.onerror=function(i){s=!1,n(t(e,r))}}))}))}},function(t,e,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.isUnique=void 0
var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]
for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}
r(2)
var i=s(r(13)),o=r(32),a=s(r(3))
function s(t){return t&&t.__esModule?t:{default:t}}var u=[],c=e.isUnique=function(t,e){var r=n({},a.default.cache,t.cache),s=JSON.stringify(e),c=r.hashingMethod,f=c&&"md5"===c.toLowerCase()?(0,i.default)(s):s,h=r.maxAge?Date.now()+r.maxAge:void 0,l={hash:f,expiryTime:h}
if(h){var d=Date.now()
u=u.filter((function(t){return t.expiryTime>d}))}var p=u.find((function(t){return t.hash===f}))
if(p){if(!(p.expiryTime&&p.expiryTime<Date.now()))return Promise.resolve(!1)
u=u.filter((function(t){return t.hash!==f}))}return u.push(l),r.storage&&"indexeddb"===r.storage.toLowerCase()?(0,o.getFromCache)(f,r).then((function(t){return!t&&((0,o.saveToCache)(f,r),!0)})):Promise.resolve(!0)}
e.default=c},function(t,e,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default={REQUEST_ABORTED:"REQUEST_ABORTED"}},function(t,e,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]
for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}
e.default=function(t,e){var r=n({},i.default,e.retry||{}),a=r.retry.limit,s=r.retry.initialDelay,u=r.retry.retryOnResponseStatuses,c=0
if(u&&!(u instanceof Array))throw{name:"ArgumentError",message:"retryOn property expects an array"}
var f=void 0
"undefined"!=typeof AbortController&&(f=new AbortController)
var h=new Promise((function(r,i){var h=function(a){fetch(t,n({},e,{signal:f.signal})).then((function(t){-1===u.indexOf(t.status)?r(t):a>0?l():i(t)})).catch((function(t){if(t.code===DOMException.ABORT_ERR)return i(o.default.REQUEST_ABORTED)
a>0?l():i(t)}))}
function l(){c+=1,setTimeout((function(){h(a-c)}),2^c*s)}h(a-c)}))
return h.abort=function(){f.abort()},h},r(2),r(6)
var i=a(r(3)),o=a(r(34))
function a(t){return t&&t.__esModule?t:{default:t}}},function(t,e){t.exports={map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(t){"use strict"
var e,r,n,i,o,a,s,u="",c=0,f=this.map
for(t=this.utf8.encode(t);c<t.length;)e=t.charCodeAt(c++),r=t.charCodeAt(c++),n=t.charCodeAt(c++),i=e>>2,o=(3&e)<<4|r>>4,a=isNaN(r)?64:(15&r)<<2|n>>6,s=isNaN(r)||isNaN(n)?64:63&n,u=u+f.charAt(i)+f.charAt(o)+f.charAt(a)+f.charAt(s)
return u},decode:function(t){"use strict"
var e,r,n,i,o,a,s="",u=0,c=this.map,f=String.fromCharCode
for(t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");u<t.length;)e=c.indexOf(t.charAt(u++)),o=(15&(r=c.indexOf(t.charAt(u++))))<<4|(n=c.indexOf(t.charAt(u++)))>>2,a=(3&n)<<6|(i=c.indexOf(t.charAt(u++))),s=s+(f(e<<2|r>>4)+(64!=n?f(o):""))+(64!=i?f(a):"")
return this.utf8.decode(s)},utf8:{encode:function(t){"use strict"
for(var e,r="",n=0,i=String.fromCharCode;n<t.length;)r+=(e=t.charCodeAt(n++))<128?i(e):e>127&&e<2048?i(e>>6|192)+i(63&e|128):i(e>>12|224)+i(e>>6&63|128)+i(63&e|128)
return r},decode:function(t){"use strict"
for(var e,r="",n=0,i=String.fromCharCode;n<t.length;)r+=(e=t.charCodeAt(n))<128?[i(e),n++][0]:e>191&&e<224?[i((31&e)<<6|63&t.charCodeAt(n+1)),n+=2][0]:[i((15&e)<<12|(63&t.charCodeAt(n+1))<<6|63&(c3=t.charCodeAt(n+2))),n+=3][0]
return r}}}},function(t,e){var r,n,i=t.exports={}
function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(t){if(r===setTimeout)return setTimeout(t,0)
if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0)
try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(t){r=o}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(t){n=a}}()
var u,c=[],f=!1,h=-1
function l(){f&&u&&(f=!1,u.length?c=u.concat(c):h=-1,c.length&&d())}function d(){if(!f){var t=s(l)
f=!0
for(var e=c.length;e;){for(u=c,c=[];++h<e;)u&&u[h].run()
h=-1,e=c.length}u=null,f=!1,function(t){if(n===clearTimeout)return clearTimeout(t)
if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t)
try{return n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function b(){}i.nextTick=function(t){var e=new Array(arguments.length-1)
if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r]
c.push(new p(t,e)),1!==c.length||f||s(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=b,i.addListener=b,i.once=b,i.off=b,i.removeListener=b,i.removeAllListeners=b,i.emit=b,i.prependListener=b,i.prependOnceListener=b,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e,r){(function(t,e){!function(t,r){"use strict"
if(!t.setImmediate){var n,i,o,a,s,u=1,c={},f=!1,h=t.document,l=Object.getPrototypeOf&&Object.getPrototypeOf(t)
l=l&&l.setTimeout?l:t,"[object process]"==={}.toString.call(t.process)?n=function(t){e.nextTick((function(){p(t)}))}:function(){if(t.postMessage&&!t.importScripts){var e=!0,r=t.onmessage
return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=r,e}}()?(a="setImmediate$"+Math.random()+"$",s=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(a)&&p(+e.data.slice(a.length))},t.addEventListener?t.addEventListener("message",s,!1):t.attachEvent("onmessage",s),n=function(e){t.postMessage(a+e,"*")}):t.MessageChannel?((o=new MessageChannel).port1.onmessage=function(t){p(t.data)},n=function(t){o.port2.postMessage(t)}):h&&"onreadystatechange"in h.createElement("script")?(i=h.documentElement,n=function(t){var e=h.createElement("script")
e.onreadystatechange=function(){p(t),e.onreadystatechange=null,i.removeChild(e),e=null},i.appendChild(e)}):n=function(t){setTimeout(p,0,t)},l.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t))
for(var e=new Array(arguments.length-1),r=0;r<e.length;r++)e[r]=arguments[r+1]
var i={callback:t,args:e}
return c[u]=i,n(u),u++},l.clearImmediate=d}function d(t){delete c[t]}function p(t){if(f)setTimeout(p,0,t)
else{var e=c[t]
if(e){f=!0
try{!function(t){var e=t.callback,r=t.args
switch(r.length){case 0:e()
break
case 1:e(r[0])
break
case 2:e(r[0],r[1])
break
case 3:e(r[0],r[1],r[2])
break
default:e.apply(void 0,r)}}(e)}finally{d(t),f=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,r(4),r(37))},function(t,e,r){(function(t){var n=void 0!==t&&t||"undefined"!=typeof self&&self||window,i=Function.prototype.apply
function o(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new o(i.call(setTimeout,n,arguments),clearTimeout)},e.setInterval=function(){return new o(i.call(setInterval,n,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(n,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId)
var e=t._idleTimeout
e>=0&&(t._idleTimeoutId=setTimeout((function(){t._onTimeout&&t._onTimeout()}),e))},r(38),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,r(4))},function(t,e,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]
for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}
e.recordEvent=function t(e,r,o){var a=this,c=e,h=void 0,d=void 0
this.config,"object"===(void 0===e?"undefined":i(e))&&e&&(d=e,c=e.collection||e.event_collection,r=e.event,o=e.callback,h=e.unique)
var b=this.url("events",encodeURIComponent(c)),g={}
if(m.call(this,o)){if(c&&"string"==typeof c){(0,s.default)(g,r)
var y={}
return(0,f.getExtendedEventBody)(y,this.extensions.events),(0,f.getExtendedEventBody)(y,this.extensions.collections[c]),(0,f.getExtendedEventBody)(y,[g]),h?(0,l.default)(d,y).then((function(r){return r?t.call(a,n({},e,{unique:void 0})):Promise.resolve({created:!1,message:"[NOT_UNIQUE] This event has already been recorded"})})):(this.emit("recordEvent",c,y),u.default.enabled?u.default.optedOut?Promise.resolve({created:!1,message:"Keen.optedOut is set to true."}):u.default.doNotTrack?Promise.resolve({created:!1,message:"Keen.doNotTrack is set to true."}):p.call(this,{url:b,extendedEventsHash:y,callback:o,configObject:d,eventCollection:c}):(v.call(this,"Keen.enabled is set to false.",o),!1))}v.call(this,"Collection name must be a string.",o)}},e.recordEvents=function(t,e){var r=this,n=this.url("events")
if(m.call(this,e))if("object"!==(void 0===t?"undefined":i(t))||t instanceof Array)v.call(this,"First argument must be an object",e)
else{if(!(arguments.length>2)){var o={}
return(0,a.default)(t,(function(t,e){o[e]=o[e]||[],(0,a.default)(t,(function(t,n){var i={};(0,f.getExtendedEventBody)(i,r.extensions.events),(0,f.getExtendedEventBody)(i,r.extensions.collections[e]),(0,f.getExtendedEventBody)(i,[t]),o[e].push(i)}))})),this.emit("recordEvents",o),u.default.enabled?u.default.optedOut?Promise.resolve({created:!1,message:"Keen.optedOut is set to true."}):u.default.doNotTrack?Promise.resolve({created:!1,message:"Keen.doNotTrack is set to true."}):p.call(this,{url:n,extendedEventsHash:o,callback:e}):(v.call(this,"Keen.enabled is set to false.",e),!1)}v.call(this,"Incorrect arguments provided to #recordEvents method",e)}},r(2),r(6)
var o=d(r(36)),a=d(r(0)),s=d(r(1)),u=d(r(9)),c=r(7),f=r(15),h=d(r(35)),l=d(r(33))
function d(t){return t&&t.__esModule?t:{default:t}}function p(t){var e=t.url,r=t.extendedEventsHash,n=t.callback,i=t.configObject,a=void 0===i?{}:i,s=t.eventCollection,u=(this.config,a.requestType||this.config.requestType)
if(navigator&&navigator.sendBeacon&&"beaconAPI"===u)return navigator.sendBeacon(e+"?api_key="+this.writeKey(),JSON.stringify(r)),n&&n(),this
if("beacon"===u||"img"===u){var c=this.url("events",encodeURIComponent(s),{api_key:this.writeKey(),data:encodeURIComponent(o.default.encode(JSON.stringify(r))),modified:(new Date).getTime()})
return c.length<("undefined"!=typeof window&&navigator&&(-1!==navigator.userAgent.indexOf("MSIE")||navigator.appVersion.indexOf("Trident/")>0)?1900:16e3)?g.call(this,c,n):n&&n("Beacon URL length exceeds current browser limit, and XHR is not supported.",null),this}return"undefined"!=typeof fetch?b.call(this,"POST",e,r,n):this}function b(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,i=this,o=(0,h.default)(e,{method:t,body:r?JSON.stringify(r):"",mode:"cors",redirect:"follow",referrerPolicy:i.referrerPolicy()||"unsafe-url",headers:{Authorization:i.writeKey(),"Content-Type":"application/json","keen-sdk":"javascript-"+c.version},retry:i.config.retry})
return o.catch((function(t){return void 0!==n&&n.call(i,t,null),i.emit("error",t),Promise.reject(t)})).then((function(t){return t.ok?t.json():t.json().then((function(e){return Promise.reject({error_code:e.error_code,body:e.message,status:t.status,ok:!1,statusText:t.statusText})}))})).then((function(t){return(void 0!==(e=t).created?e.created:0===Object.keys(e).map((function(t){return e[t].filter((function(t){return!t.success}))})).filter((function(t){return t.length>0})).length)?(void 0!==n&&n.call(i,null,t),Promise.resolve(t)):(void 0!==n&&n.call(i,t,null),i.emit("error",t),Promise.reject(t))
var e})),o}function m(t){return this.projectId()?!!this.writeKey()||(v.call(this,"Keen.Client is missing a writeKey property.",t),!1):(v.call(this,"Keen.Client is missing a projectId property.",t),!1)}function v(t,e){var r="Event(s) not recorded: "+t
this.emit("error",r),e&&e.call(this,r,null)}function g(t,e){var r=this,n=document.createElement("img")
n.onload=function(){if("naturalHeight"in this){if(this.naturalHeight+this.naturalWidth===0)return void this.onerror()}else if(this.width+this.height===0)return void this.onerror()
e&&e.call(r)},n.onerror=function(){e&&e.call(r,"An error occurred!",null)},n.src=t+"&c=clv1"}},function(t,e,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.listenerCore=void 0,i(r(8))
var n=i(r(0))
function i(t){return t&&t.__esModule?t:{default:t}}e.listenerCore=function(t){function e(t){if(t)return this instanceof e==0?new e(t):(this.selector=t,this)}return t.domListeners=t.domListeners||{},e.prototype.on=function(e,r){var i,o=this
return 2!==arguments.length||"string"!=typeof e||"function"!=typeof r?this:(void 0===t.domListeners[e]&&(function(t,e){document.addEventListener?document.addEventListener(t,e,!1):document.attachEvent("on"+t,e)}(e,(i=e,function(e){var r,o
r=e||window.event,o=r.target||r.srcElement,"undefined"!==t.domListeners[i]&&(0,n.default)(t.domListeners[i],(function(t,e){!function(t,e){for(var r=(t.parentNode||document).querySelectorAll(e)||[],n=r.length;n--;)if(r[n]==t)return!0
return!1}(o,e)?"window"===e&&(0,n.default)(t,(function(t,e){t(r)})):(0,n.default)(t,(function(t,e){"click"===i&&"A"===o.nodeName?function(t,e,r){var n,i
if(void 0!==e.getAttribute?n=e.getAttribute("target"):e.target&&(n=e.target),"boolean"==typeof(i=r(t))&&!1===i||t.defaultPrevented||!1===t.returnValue)return t.preventDefault&&t.preventDefault(),t.returnValue=!1,!1
if("_blank"!==n&&"blank"!==n&&!t.metaKey&&!e.hasAttribute("download")&&(t.preventDefault&&t.preventDefault(),t.returnValue=!1,e.href&&"#"!==e.href&&e.href!==window.location+"#"))if(void 0!==i){if(navigator&&navigator.sendBeacon)return void(window.location=e.href)
i.then((function(){window.location=e.href})).catch((function(t){window.location=e.href}))}else setTimeout((function(){window.location=e.href}),500)}(r,o,t):"submit"===i&&"FORM"===o.nodeName?function(t,e,r){var n=r(t)
if("boolean"==typeof n&&!1===n||t.defaultPrevented||!1===t.returnValue)return t.preventDefault&&t.preventDefault(),t.returnValue=!1,!1
if(t.preventDefault&&t.preventDefault(),t.returnValue=!1,void 0!==n){if(navigator&&navigator.sendBeacon)return void e.submit()
n.then((function(){e.submit()})).catch((function(t){e.submit()}))}else setTimeout((function(){e.submit()}),500)}(r,o,t):t(r)}))}))})),t.domListeners[e]={}),t.domListeners[e][o.selector]=t.domListeners[e][o.selector]||[],t.domListeners[e][o.selector].push(r),o)},e.prototype.once=function(t,e){var r=this
function n(){return r.off(t,n),e.apply(r,arguments)}return n.fn=e,r.on(t,n),r},e.prototype.off=function(e,r){var i=this,o=[]
if(2===arguments.length)(0,n.default)(t.domListeners[e][i.selector],(function(t,e){t!==r&&t.fn!==r&&o.push(t)})),t.domListeners[e][i.selector]=o
else if(1===arguments.length)try{delete t.domListeners[e][i.selector]}catch(r){t.domListeners[e][i.selector]=[]}else(0,n.default)(t.domListeners,(function(e,r){try{delete t.domListeners[r][i.selector]}catch(e){t.domListeners[r][i.selector]=function(){}}}))
return i},e}},function(t,e,r){var n=r(0)
r(1),t.exports=function(t){var e=[]
return n(t,(function(t,r){"string"!=typeof t&&(t=JSON.stringify(t)),e.push(r+"="+encodeURIComponent(t))})),e.join("&")}},function(t,e){t.exports=function(t){for(var e,r={},n=/\+/g,i=/([^&=]+)=?([^&]*)/g,o=function(t){return decodeURIComponent(t.replace(n," "))},a=t.split("?")[1];e=i.exec(a);)r[o(e[1])]=o(e[2])
return r}},function(t,e,r){(function(e){(function(e){var n,i=e.Keen||void 0,o=r(0),a=r(1),s=r(43),u=r(42),c=r(8)
function f(t){if(this instanceof f==0)return new f(t)
this.configure(t),f.debug&&this.on("error",f.log),this.emit("ready"),f.emit("client",this)}function h(t){return void 0!==t}i&&void 0===i.resources&&(f.legacyVersion=i),c(f),c(f.prototype),a(f,{debug:!1,enabled:!0,loaded:!1,version:"__VERSION__"}),f.helpers=f.helpers||{},f.resources=f.resources||{},a(f.resources,{base:"{protocol}://{host}",version:"{protocol}://{host}/3.0",projects:"{protocol}://{host}/3.0/projects",projectId:"{protocol}://{host}/3.0/projects/{projectId}",events:"{protocol}://{host}/3.0/projects/{projectId}/events",queries:"{protocol}://{host}/3.0/projects/{projectId}/queries"}),f.utils=f.utils||{},a(f.utils,{each:o,extend:a,parseParams:s,serialize:u}),f.extendLibrary=function(t,e){var r=i||e
return h(r)&&h(r.resources)&&(o(r,(function(e,r){"object"==typeof e?(t[r]=t[r]||{},a(t[r],e)):t[r]=t[r]||e})),a(t.prototype,r.prototype)),t},f.log=function(t){f.debug&&"object"==typeof console&&console.log("[Keen]",t)},f.noConflict=function(){return void 0!==e.Keen&&(e.Keen=f.legacyVersion||i),f},f.ready=function(t){f.loaded?t():f.once("ready",t)},f.prototype.configure=function(t){var e=t||{}
return this.config=this.config||{projectId:void 0,writeKey:void 0,host:"api.keen.io",protocol:"https",requestType:"jsonp",resources:a({},f.resources)},"undefined"!=typeof window&&window.navigator&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1&&(e.protocol=document.location.protocol.replace(":","")),e.host&&e.host.replace(/.*?:\/\//g,""),a(this.config,e),this},f.prototype.masterKey=function(t){return arguments.length?(this.config.masterKey=t?String(t):null,this):this.config.masterKey},f.prototype.projectId=function(t){return arguments.length?(this.config.projectId=t?String(t):null,this):this.config.projectId},f.prototype.resources=function(t){if(!arguments.length)return this.config.resources
var e=this
return"object"==typeof t&&o(t,(function(t,r){e.config.resources[r]=t||null})),e},f.prototype.url=function(t){var e,r=Array.prototype.slice.call(arguments,1),n=this.config.resources.base||"{protocol}://{host}"
return e=t&&"string"==typeof t?this.config.resources[t]?this.config.resources[t]:n+t:n,o(this.config,(function(t,r){"object"!=typeof t&&(e=e.replace("{"+r+"}",t))})),o(r,(function(t,r){"string"==typeof t?e+="/"+t:"object"==typeof t&&(e+="?",o(t,(function(t,r){e+=r+"="+t+"&"})),e=e.slice(0,-1))})),e},n=function(){f.loaded=!0,f.emit("ready")},f.loaded||"undefined"==typeof document?n():(null==document.readyState&&document.addEventListener&&(document.addEventListener("DOMContentLoaded",(function t(){document.removeEventListener("DOMContentLoaded",t,!1),document.readyState="complete"}),!1),document.readyState="loading"),function t(e){/in/.test(document.readyState)?setTimeout((function(){t(e)}),9):e()}(n)),t.exports=f}).call(this,"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{})}).call(this,r(4))},function(t,e,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.KeenTracking=e.Keen=e.keenGlobals=void 0
var n=A(r(9)),i=A(r(0)),o=A(r(1)),a=r(41),s=r(40),u=r(31),c=r(15),f=r(30),h=r(29),l=r(28),d=r(27),p=r(10),b=r(26),m=r(12),v=r(25),g=r(24),y=r(11),w=r(23),_=r(14),M=r(21),S=r(20),E=r(17),k=r(16)
function A(t){return t&&t.__esModule?t:{default:t}}(0,o.default)(n.default.prototype,{recordEvent:s.recordEvent,recordEvents:s.recordEvents}),(0,o.default)(n.default.prototype,{deferEvent:u.deferEvent,deferEvents:u.deferEvents,queueCapacity:u.queueCapacity,queueInterval:u.queueInterval,recordDeferredEvents:u.recordDeferredEvents,setOptOut:E.setOptOut}),(0,o.default)(n.default.prototype,{extendEvent:c.extendEvent,extendEvents:c.extendEvents})
var T=(0,f.initAutoTrackingCore)(n.default);(0,o.default)(n.default.prototype,{initAutoTracking:T}),(0,o.default)(n.default.helpers,{getBrowserProfile:h.getBrowserProfile,getDatetimeIndex:l.getDatetimeIndex,getDomainName:d.getDomainName,getDomNodePath:p.getDomNodePath,getDomNodeProfile:b.getDomNodeProfile,getScreenProfile:m.getScreenProfile,getScrollState:v.getScrollState,getUniqueId:g.getUniqueId,getWindowProfile:y.getWindowProfile})
var R=(0,a.listenerCore)(n.default);(0,o.default)(n.default.utils,{cookie:w.cookie,deepExtend:_.deepExtend,listener:R,serializeForm:M.serializeForm,timer:S.timer}),n.default.listenTo=function(t){(0,i.default)(t,(function(t,e){var r=e.split(" "),n=r[0],i=r.slice(1,r.length).join(" ")
return R(i).on(n,t)}))},e.keenGlobals=void 0,"undefined"!=typeof webpackKeenGlobals&&(e.keenGlobals=webpackKeenGlobals),k.isLocalStorageAvailable&&localStorage.getItem("optout")&&(n.default.optedOut=!0),"1"!==navigator.doNotTrack&&"yes"!==navigator.doNotTrack||(n.default.doNotTrack=!0)
var x=e.Keen=n.default.extendLibrary(n.default)
e.KeenTracking=x,e.default=x},function(t,e,r){t.exports=r(45)}])},t.exports=e()},807:(t,e,r)=>{"use strict"
var n=r(1736),i=r(2353),o=r(8850).Buffer,a=new Array(16)
function s(){i.call(this,64),this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878}function u(t,e){return t<<e|t>>>32-e}function c(t,e,r,n,i,o,a){return u(t+(e&r|~e&n)+i+o|0,a)+e|0}function f(t,e,r,n,i,o,a){return u(t+(e&n|r&~n)+i+o|0,a)+e|0}function h(t,e,r,n,i,o,a){return u(t+(e^r^n)+i+o|0,a)+e|0}function l(t,e,r,n,i,o,a){return u(t+(r^(e|~n))+i+o|0,a)+e|0}n(s,i),s.prototype._update=function(){for(var t=a,e=0;e<16;++e)t[e]=this._block.readInt32LE(4*e)
var r=this._a,n=this._b,i=this._c,o=this._d
r=c(r,n,i,o,t[0],3614090360,7),o=c(o,r,n,i,t[1],3905402710,12),i=c(i,o,r,n,t[2],606105819,17),n=c(n,i,o,r,t[3],3250441966,22),r=c(r,n,i,o,t[4],4118548399,7),o=c(o,r,n,i,t[5],1200080426,12),i=c(i,o,r,n,t[6],2821735955,17),n=c(n,i,o,r,t[7],4249261313,22),r=c(r,n,i,o,t[8],1770035416,7),o=c(o,r,n,i,t[9],2336552879,12),i=c(i,o,r,n,t[10],4294925233,17),n=c(n,i,o,r,t[11],2304563134,22),r=c(r,n,i,o,t[12],1804603682,7),o=c(o,r,n,i,t[13],4254626195,12),i=c(i,o,r,n,t[14],2792965006,17),r=f(r,n=c(n,i,o,r,t[15],1236535329,22),i,o,t[1],4129170786,5),o=f(o,r,n,i,t[6],3225465664,9),i=f(i,o,r,n,t[11],643717713,14),n=f(n,i,o,r,t[0],3921069994,20),r=f(r,n,i,o,t[5],3593408605,5),o=f(o,r,n,i,t[10],38016083,9),i=f(i,o,r,n,t[15],3634488961,14),n=f(n,i,o,r,t[4],3889429448,20),r=f(r,n,i,o,t[9],568446438,5),o=f(o,r,n,i,t[14],3275163606,9),i=f(i,o,r,n,t[3],4107603335,14),n=f(n,i,o,r,t[8],1163531501,20),r=f(r,n,i,o,t[13],2850285829,5),o=f(o,r,n,i,t[2],4243563512,9),i=f(i,o,r,n,t[7],1735328473,14),r=h(r,n=f(n,i,o,r,t[12],2368359562,20),i,o,t[5],4294588738,4),o=h(o,r,n,i,t[8],2272392833,11),i=h(i,o,r,n,t[11],1839030562,16),n=h(n,i,o,r,t[14],4259657740,23),r=h(r,n,i,o,t[1],2763975236,4),o=h(o,r,n,i,t[4],1272893353,11),i=h(i,o,r,n,t[7],4139469664,16),n=h(n,i,o,r,t[10],3200236656,23),r=h(r,n,i,o,t[13],681279174,4),o=h(o,r,n,i,t[0],3936430074,11),i=h(i,o,r,n,t[3],3572445317,16),n=h(n,i,o,r,t[6],76029189,23),r=h(r,n,i,o,t[9],3654602809,4),o=h(o,r,n,i,t[12],3873151461,11),i=h(i,o,r,n,t[15],530742520,16),r=l(r,n=h(n,i,o,r,t[2],3299628645,23),i,o,t[0],4096336452,6),o=l(o,r,n,i,t[7],1126891415,10),i=l(i,o,r,n,t[14],2878612391,15),n=l(n,i,o,r,t[5],4237533241,21),r=l(r,n,i,o,t[12],1700485571,6),o=l(o,r,n,i,t[3],2399980690,10),i=l(i,o,r,n,t[10],4293915773,15),n=l(n,i,o,r,t[1],2240044497,21),r=l(r,n,i,o,t[8],1873313359,6),o=l(o,r,n,i,t[15],4264355552,10),i=l(i,o,r,n,t[6],2734768916,15),n=l(n,i,o,r,t[13],1309151649,21),r=l(r,n,i,o,t[4],4149444226,6),o=l(o,r,n,i,t[11],3174756917,10),i=l(i,o,r,n,t[2],718787259,15),n=l(n,i,o,r,t[9],3951481745,21),this._a=this._a+r|0,this._b=this._b+n|0,this._c=this._c+i|0,this._d=this._d+o|0},s.prototype._digest=function(){this._block[this._blockOffset++]=128,this._blockOffset>56&&(this._block.fill(0,this._blockOffset,64),this._update(),this._blockOffset=0),this._block.fill(0,this._blockOffset,56),this._block.writeUInt32LE(this._length[0],56),this._block.writeUInt32LE(this._length[1],60),this._update()
var t=o.allocUnsafe(16)
return t.writeInt32LE(this._a,0),t.writeInt32LE(this._b,4),t.writeInt32LE(this._c,8),t.writeInt32LE(this._d,12),t},t.exports=s},137:(t,e,r)=>{var n=r(1734),i=r(2202)
function o(t){this.rand=t||new i.Rand}t.exports=o,o.create=function(t){return new o(t)},o.prototype._randbelow=function(t){var e=t.bitLength(),r=Math.ceil(e/8)
do{var i=new n(this.rand.generate(r))}while(i.cmp(t)>=0)
return i},o.prototype._randrange=function(t,e){var r=e.sub(t)
return t.add(this._randbelow(r))},o.prototype.test=function(t,e,r){var i=t.bitLength(),o=n.mont(t),a=new n(1).toRed(o)
e||(e=Math.max(1,i/48|0))
for(var s=t.subn(1),u=0;!s.testn(u);u++);for(var c=t.shrn(u),f=s.toRed(o);e>0;e--){var h=this._randrange(new n(2),s)
r&&r(h)
var l=h.toRed(o).redPow(c)
if(0!==l.cmp(a)&&0!==l.cmp(f)){for(var d=1;d<u;d++){if(0===(l=l.redSqr()).cmp(a))return!1
if(0===l.cmp(f))break}if(d===u)return!1}}return!0},o.prototype.getDivisor=function(t,e){var r=t.bitLength(),i=n.mont(t),o=new n(1).toRed(i)
e||(e=Math.max(1,r/48|0))
for(var a=t.subn(1),s=0;!a.testn(s);s++);for(var u=t.shrn(s),c=a.toRed(i);e>0;e--){var f=this._randrange(new n(2),a),h=t.gcd(f)
if(0!==h.cmpn(1))return h
var l=f.toRed(i).redPow(u)
if(0!==l.cmp(o)&&0!==l.cmp(c)){for(var d=1;d<s;d++){if(0===(l=l.redSqr()).cmp(o))return l.fromRed().subn(1).gcd(t)
if(0===l.cmp(c))break}if(d===s)return(l=l.redSqr()).fromRed().subn(1).gcd(t)}}return!1}},4504:t=>{function e(t,e){if(!t)throw new Error(e||"Assertion failed")}t.exports=e,e.equal=function(t,e,r){if(t!=e)throw new Error(r||"Assertion failed: "+t+" != "+e)}},6580:(t,e)=>{"use strict"
var r=e
function n(t){return 1===t.length?"0"+t:t}function i(t){for(var e="",r=0;r<t.length;r++)e+=n(t[r].toString(16))
return e}r.toArray=function(t,e){if(Array.isArray(t))return t.slice()
if(!t)return[]
var r=[]
if("string"!=typeof t){for(var n=0;n<t.length;n++)r[n]=0|t[n]
return r}if("hex"===e)for((t=t.replace(/[^a-z0-9]+/gi,"")).length%2!=0&&(t="0"+t),n=0;n<t.length;n+=2)r.push(parseInt(t[n]+t[n+1],16))
else for(n=0;n<t.length;n++){var i=t.charCodeAt(n),o=i>>8,a=255&i
o?r.push(o,a):r.push(a)}return r},r.zero2=n,r.toHex=i,r.encode=function(t,e){return"hex"===e?i(t):t}},1823:(t,e,r)=>{"use strict"
var n=r(8357)
e.certificate=r(1320)
var i=n.define("RSAPrivateKey",(function(){this.seq().obj(this.key("version").int(),this.key("modulus").int(),this.key("publicExponent").int(),this.key("privateExponent").int(),this.key("prime1").int(),this.key("prime2").int(),this.key("exponent1").int(),this.key("exponent2").int(),this.key("coefficient").int())}))
e.RSAPrivateKey=i
var o=n.define("RSAPublicKey",(function(){this.seq().obj(this.key("modulus").int(),this.key("publicExponent").int())}))
e.RSAPublicKey=o
var a=n.define("SubjectPublicKeyInfo",(function(){this.seq().obj(this.key("algorithm").use(s),this.key("subjectPublicKey").bitstr())}))
e.PublicKey=a
var s=n.define("AlgorithmIdentifier",(function(){this.seq().obj(this.key("algorithm").objid(),this.key("none").null_().optional(),this.key("curve").objid().optional(),this.key("params").seq().obj(this.key("p").int(),this.key("q").int(),this.key("g").int()).optional())})),u=n.define("PrivateKeyInfo",(function(){this.seq().obj(this.key("version").int(),this.key("algorithm").use(s),this.key("subjectPrivateKey").octstr())}))
e.PrivateKey=u
var c=n.define("EncryptedPrivateKeyInfo",(function(){this.seq().obj(this.key("algorithm").seq().obj(this.key("id").objid(),this.key("decrypt").seq().obj(this.key("kde").seq().obj(this.key("id").objid(),this.key("kdeparams").seq().obj(this.key("salt").octstr(),this.key("iters").int())),this.key("cipher").seq().obj(this.key("algo").objid(),this.key("iv").octstr()))),this.key("subjectPrivateKey").octstr())}))
e.EncryptedPrivateKey=c
var f=n.define("DSAPrivateKey",(function(){this.seq().obj(this.key("version").int(),this.key("p").int(),this.key("q").int(),this.key("g").int(),this.key("pub_key").int(),this.key("priv_key").int())}))
e.DSAPrivateKey=f,e.DSAparam=n.define("DSAparam",(function(){this.int()}))
var h=n.define("ECPrivateKey",(function(){this.seq().obj(this.key("version").int(),this.key("privateKey").octstr(),this.key("parameters").optional().explicit(0).use(l),this.key("publicKey").optional().explicit(1).bitstr())}))
e.ECPrivateKey=h
var l=n.define("ECParameters",(function(){this.choice({namedCurve:this.objid()})}))
e.signature=n.define("signature",(function(){this.seq().obj(this.key("r").int(),this.key("s").int())}))},1320:(t,e,r)=>{"use strict"
var n=r(8357),i=n.define("Time",(function(){this.choice({utcTime:this.utctime(),generalTime:this.gentime()})})),o=n.define("AttributeTypeValue",(function(){this.seq().obj(this.key("type").objid(),this.key("value").any())})),a=n.define("AlgorithmIdentifier",(function(){this.seq().obj(this.key("algorithm").objid(),this.key("parameters").optional(),this.key("curve").objid().optional())})),s=n.define("SubjectPublicKeyInfo",(function(){this.seq().obj(this.key("algorithm").use(a),this.key("subjectPublicKey").bitstr())})),u=n.define("RelativeDistinguishedName",(function(){this.setof(o)})),c=n.define("RDNSequence",(function(){this.seqof(u)})),f=n.define("Name",(function(){this.choice({rdnSequence:this.use(c)})})),h=n.define("Validity",(function(){this.seq().obj(this.key("notBefore").use(i),this.key("notAfter").use(i))})),l=n.define("Extension",(function(){this.seq().obj(this.key("extnID").objid(),this.key("critical").bool().def(!1),this.key("extnValue").octstr())})),d=n.define("TBSCertificate",(function(){this.seq().obj(this.key("version").explicit(0).int().optional(),this.key("serialNumber").int(),this.key("signature").use(a),this.key("issuer").use(f),this.key("validity").use(h),this.key("subject").use(f),this.key("subjectPublicKeyInfo").use(s),this.key("issuerUniqueID").implicit(1).bitstr().optional(),this.key("subjectUniqueID").implicit(2).bitstr().optional(),this.key("extensions").explicit(3).seqof(l).optional())})),p=n.define("X509Certificate",(function(){this.seq().obj(this.key("tbsCertificate").use(d),this.key("signatureAlgorithm").use(a),this.key("signatureValue").bitstr())}))
t.exports=p},4988:(t,e,r)=>{var n=/Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r+/=]+)[\n\r]+/m,i=/^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m,o=/^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r+/=]+)-----END \1-----$/m,a=r(7085),s=r(8073),u=r(8850).Buffer
t.exports=function(t,e){var r,c=t.toString(),f=c.match(n)
if(f){var h="aes"+f[1],l=u.from(f[2],"hex"),d=u.from(f[3].replace(/[\r\n]/g,""),"base64"),p=a(e,l.slice(0,8),parseInt(f[1],10)).key,b=[],m=s.createDecipheriv(h,p,l)
b.push(m.update(d)),b.push(m.final()),r=u.concat(b)}else{var v=c.match(o)
r=u.from(v[2].replace(/[\r\n]/g,""),"base64")}return{tag:c.match(i)[1],data:r}}},7552:(t,e,r)=>{var n=r(1823),i=r(2562),o=r(4988),a=r(8073),s=r(4192),u=r(8850).Buffer
function c(t){var e
"object"!=typeof t||u.isBuffer(t)||(e=t.passphrase,t=t.key),"string"==typeof t&&(t=u.from(t))
var r,c,f=o(t,e),h=f.tag,l=f.data
switch(h){case"CERTIFICATE":c=n.certificate.decode(l,"der").tbsCertificate.subjectPublicKeyInfo
case"PUBLIC KEY":switch(c||(c=n.PublicKey.decode(l,"der")),r=c.algorithm.algorithm.join(".")){case"1.2.840.113549.1.1.1":return n.RSAPublicKey.decode(c.subjectPublicKey.data,"der")
case"1.2.840.10045.2.1":return c.subjectPrivateKey=c.subjectPublicKey,{type:"ec",data:c}
case"1.2.840.10040.4.1":return c.algorithm.params.pub_key=n.DSAparam.decode(c.subjectPublicKey.data,"der"),{type:"dsa",data:c.algorithm.params}
default:throw new Error("unknown key id "+r)}case"ENCRYPTED PRIVATE KEY":l=function(t,e){var r=t.algorithm.decrypt.kde.kdeparams.salt,n=parseInt(t.algorithm.decrypt.kde.kdeparams.iters.toString(),10),o=i[t.algorithm.decrypt.cipher.algo.join(".")],c=t.algorithm.decrypt.cipher.iv,f=t.subjectPrivateKey,h=parseInt(o.split("-")[1],10)/8,l=s.pbkdf2Sync(e,r,n,h,"sha1"),d=a.createDecipheriv(o,l,c),p=[]
return p.push(d.update(f)),p.push(d.final()),u.concat(p)}(l=n.EncryptedPrivateKey.decode(l,"der"),e)
case"PRIVATE KEY":switch(r=(c=n.PrivateKey.decode(l,"der")).algorithm.algorithm.join(".")){case"1.2.840.113549.1.1.1":return n.RSAPrivateKey.decode(c.subjectPrivateKey,"der")
case"1.2.840.10045.2.1":return{curve:c.algorithm.curve,privateKey:n.ECPrivateKey.decode(c.subjectPrivateKey,"der").privateKey}
case"1.2.840.10040.4.1":return c.algorithm.params.priv_key=n.DSAparam.decode(c.subjectPrivateKey,"der"),{type:"dsa",params:c.algorithm.params}
default:throw new Error("unknown key id "+r)}case"RSA PUBLIC KEY":return n.RSAPublicKey.decode(l,"der")
case"RSA PRIVATE KEY":return n.RSAPrivateKey.decode(l,"der")
case"DSA PRIVATE KEY":return{type:"dsa",params:n.DSAPrivateKey.decode(l,"der")}
case"EC PRIVATE KEY":return{curve:(l=n.ECPrivateKey.decode(l,"der")).parameters.value,privateKey:l.privateKey}
default:throw new Error("unknown key type "+h)}}t.exports=c,c.signature=n.signature},4192:(t,e,r)=>{e.pbkdf2=r(1882),e.pbkdf2Sync=r(1658)},1882:(t,e,r)=>{var n,i,o=r(8850).Buffer,a=r(3127),s=r(7401),u=r(1658),c=r(5791),f=r.g.crypto&&r.g.crypto.subtle,h={sha:"SHA-1","sha-1":"SHA-1",sha1:"SHA-1",sha256:"SHA-256","sha-256":"SHA-256",sha384:"SHA-384","sha-384":"SHA-384","sha-512":"SHA-512",sha512:"SHA-512"},l=[]
function d(){return i||(i=r.g.process&&r.g.process.nextTick?r.g.process.nextTick:r.g.queueMicrotask?r.g.queueMicrotask:r.g.setImmediate?r.g.setImmediate:r.g.setTimeout)}function p(t,e,r,n,i){return f.importKey("raw",t,{name:"PBKDF2"},!1,["deriveBits"]).then((function(t){return f.deriveBits({name:"PBKDF2",salt:e,iterations:r,hash:{name:i}},t,n<<3)})).then((function(t){return o.from(t)}))}t.exports=function(t,e,i,b,m,v){"function"==typeof m&&(v=m,m=void 0)
var g=h[(m=m||"sha1").toLowerCase()]
if(g&&"function"==typeof r.g.Promise){if(a(i,b),t=c(t,s,"Password"),e=c(e,s,"Salt"),"function"!=typeof v)throw new Error("No callback provided to pbkdf2")
!function(t,e){t.then((function(t){d()((function(){e(null,t)}))}),(function(t){d()((function(){e(t)}))}))}(function(t){if(r.g.process&&!r.g.process.browser)return Promise.resolve(!1)
if(!f||!f.importKey||!f.deriveBits)return Promise.resolve(!1)
if(void 0!==l[t])return l[t]
var e=p(n=n||o.alloc(8),n,10,128,t).then((function(){return!0})).catch((function(){return!1}))
return l[t]=e,e}(g).then((function(r){return r?p(t,e,i,b,g):u(t,e,i,b,m)})),v)}else d()((function(){var r
try{r=u(t,e,i,b,m)}catch(t){return v(t)}v(null,r)}))}},7401:(t,e,r)=>{var n
n=r.g.process&&r.g.process.browser?"utf-8":r.g.process&&r.g.process.version?parseInt(process.version.split(".")[0].slice(1),10)>=6?"utf-8":"binary":"utf-8",t.exports=n},3127:t=>{var e=Math.pow(2,30)-1
t.exports=function(t,r){if("number"!=typeof t)throw new TypeError("Iterations not a number")
if(t<0)throw new TypeError("Bad iterations")
if("number"!=typeof r)throw new TypeError("Key length not a number")
if(r<0||r>e||r!=r)throw new TypeError("Bad key length")}},1658:(t,e,r)=>{var n=r(5349),i=r(6707),o=r(1708),a=r(8850).Buffer,s=r(3127),u=r(7401),c=r(5791),f=a.alloc(128),h={md5:16,sha1:20,sha224:28,sha256:32,sha384:48,sha512:64,rmd160:20,ripemd160:20}
function l(t,e,r){var s=function(t){return"rmd160"===t||"ripemd160"===t?function(t){return(new i).update(t).digest()}:"md5"===t?n:function(e){return o(t).update(e).digest()}}(t),u="sha512"===t||"sha384"===t?128:64
e.length>u?e=s(e):e.length<u&&(e=a.concat([e,f],u))
for(var c=a.allocUnsafe(u+h[t]),l=a.allocUnsafe(u+h[t]),d=0;d<u;d++)c[d]=54^e[d],l[d]=92^e[d]
var p=a.allocUnsafe(u+r+4)
c.copy(p,0,0,u),this.ipad1=p,this.ipad2=c,this.opad=l,this.alg=t,this.blocksize=u,this.hash=s,this.size=h[t]}l.prototype.run=function(t,e){return t.copy(e,this.blocksize),this.hash(e).copy(this.opad,this.blocksize),this.hash(this.opad)},t.exports=function(t,e,r,n,i){s(r,n)
var o=new l(i=i||"sha1",t=c(t,u,"Password"),(e=c(e,u,"Salt")).length),f=a.allocUnsafe(n),d=a.allocUnsafe(e.length+4)
e.copy(d,0,0,e.length)
for(var p=0,b=h[i],m=Math.ceil(n/b),v=1;v<=m;v++){d.writeUInt32BE(v,e.length)
for(var g=o.run(d,o.ipad1),y=g,w=1;w<r;w++){y=o.run(y,o.ipad2)
for(var _=0;_<b;_++)g[_]^=y[_]}g.copy(f,p),p+=b}return f}},5791:(t,e,r)=>{var n=r(8850).Buffer
t.exports=function(t,e,r){if(n.isBuffer(t))return t
if("string"==typeof t)return n.from(t,e)
if(ArrayBuffer.isView(t))return n.from(t.buffer)
throw new TypeError(r+" must be a string, a Buffer, a typed array or a DataView")}},6566:(t,e,r)=>{"use strict"
function n(t){return getComputedStyle(t)}function i(t,e){for(var r in e){var n=e[r]
"number"==typeof n&&(n+="px"),t.style[r]=n}return t}function o(t){var e=document.createElement("div")
return e.className=t,e}r.r(e),r.d(e,{default:()=>A})
var a="undefined"!=typeof Element&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector)
function s(t,e){if(!a)throw new Error("No element matching method supported")
return a.call(t,e)}function u(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function c(t,e){return Array.prototype.filter.call(t.children,(function(t){return s(t,e)}))}var f={main:"ps",rtl:"ps__rtl",element:{thumb:function(t){return"ps__thumb-"+t},rail:function(t){return"ps__rail-"+t},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(t){return"ps--active-"+t},scrolling:function(t){return"ps--scrolling-"+t}}},h={x:null,y:null}
function l(t,e){var r=t.element.classList,n=f.state.scrolling(e)
r.contains(n)?clearTimeout(h[e]):r.add(n)}function d(t,e){h[e]=setTimeout((function(){return t.isAlive&&t.element.classList.remove(f.state.scrolling(e))}),t.settings.scrollingThreshold)}var p=function(t){this.element=t,this.handlers={}},b={isEmpty:{configurable:!0}}
p.prototype.bind=function(t,e){void 0===this.handlers[t]&&(this.handlers[t]=[]),this.handlers[t].push(e),this.element.addEventListener(t,e,!1)},p.prototype.unbind=function(t,e){var r=this
this.handlers[t]=this.handlers[t].filter((function(n){return!(!e||n===e)||(r.element.removeEventListener(t,n,!1),!1)}))},p.prototype.unbindAll=function(){for(var t in this.handlers)this.unbind(t)},b.isEmpty.get=function(){var t=this
return Object.keys(this.handlers).every((function(e){return 0===t.handlers[e].length}))},Object.defineProperties(p.prototype,b)
var m=function(){this.eventElements=[]}
function v(t){if("function"==typeof window.CustomEvent)return new CustomEvent(t)
var e=document.createEvent("CustomEvent")
return e.initCustomEvent(t,!1,!1,void 0),e}function g(t,e,r,n,i){var o
if(void 0===n&&(n=!0),void 0===i&&(i=!1),"top"===e)o=["contentHeight","containerHeight","scrollTop","y","up","down"]
else{if("left"!==e)throw new Error("A proper axis should be provided")
o=["contentWidth","containerWidth","scrollLeft","x","left","right"]}!function(t,e,r,n,i){var o=r[0],a=r[1],s=r[2],u=r[3],c=r[4],f=r[5]
void 0===n&&(n=!0),void 0===i&&(i=!1)
var h=t.element
t.reach[u]=null,h[s]<1&&(t.reach[u]="start"),h[s]>t[o]-t[a]-1&&(t.reach[u]="end"),e&&(h.dispatchEvent(v("ps-scroll-"+u)),e<0?h.dispatchEvent(v("ps-scroll-"+c)):e>0&&h.dispatchEvent(v("ps-scroll-"+f)),n&&function(t,e){l(t,e),d(t,e)}(t,u)),t.reach[u]&&(e||i)&&h.dispatchEvent(v("ps-"+u+"-reach-"+t.reach[u]))}(t,r,o,n,i)}function y(t){return parseInt(t,10)||0}m.prototype.eventElement=function(t){var e=this.eventElements.filter((function(e){return e.element===t}))[0]
return e||(e=new p(t),this.eventElements.push(e)),e},m.prototype.bind=function(t,e,r){this.eventElement(t).bind(e,r)},m.prototype.unbind=function(t,e,r){var n=this.eventElement(t)
n.unbind(e,r),n.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(n),1)},m.prototype.unbindAll=function(){this.eventElements.forEach((function(t){return t.unbindAll()})),this.eventElements=[]},m.prototype.once=function(t,e,r){var n=this.eventElement(t)
n.bind(e,(function t(i){n.unbind(e,t),r(i)}))}
var w={isWebKit:"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:"undefined"!=typeof window&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:"undefined"!=typeof navigator&&navigator.msMaxTouchPoints,isChrome:"undefined"!=typeof navigator&&/Chrome/i.test(navigator&&navigator.userAgent)}
function _(t){var e=t.element,r=Math.floor(e.scrollTop),n=e.getBoundingClientRect()
t.containerWidth=Math.round(n.width),t.containerHeight=Math.round(n.height),t.contentWidth=e.scrollWidth,t.contentHeight=e.scrollHeight,e.contains(t.scrollbarXRail)||(c(e,f.element.rail("x")).forEach((function(t){return u(t)})),e.appendChild(t.scrollbarXRail)),e.contains(t.scrollbarYRail)||(c(e,f.element.rail("y")).forEach((function(t){return u(t)})),e.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=M(t,y(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=y((t.negativeScrollAdjustment+e.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=M(t,y(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=y(r*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),function(t,e){var r={width:e.railXWidth},n=Math.floor(t.scrollTop)
e.isRtl?r.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:r.left=t.scrollLeft,e.isScrollbarXUsingBottom?r.bottom=e.scrollbarXBottom-n:r.top=e.scrollbarXTop+n,i(e.scrollbarXRail,r)
var o={top:n,height:e.railYHeight}
e.isScrollbarYUsingRight?e.isRtl?o.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth-9:o.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?o.left=e.negativeScrollAdjustment+t.scrollLeft+2*e.containerWidth-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:o.left=e.scrollbarYLeft+t.scrollLeft,i(e.scrollbarYRail,o),i(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),i(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}(e,t),t.scrollbarXActive?e.classList.add(f.state.active("x")):(e.classList.remove(f.state.active("x")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,e.scrollLeft=!0===t.isRtl?t.contentWidth:0),t.scrollbarYActive?e.classList.add(f.state.active("y")):(e.classList.remove(f.state.active("y")),t.scrollbarYHeight=0,t.scrollbarYTop=0,e.scrollTop=0)}function M(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function S(t,e){var r=e[0],n=e[1],i=e[2],o=e[3],a=e[4],s=e[5],u=e[6],c=e[7],h=e[8],p=t.element,b=null,m=null,v=null
function g(e){e.touches&&e.touches[0]&&(e[i]=e.touches[0].pageY),p[u]=b+v*(e[i]-m),l(t,c),_(t),e.stopPropagation(),e.type.startsWith("touch")&&e.changedTouches.length>1&&e.preventDefault()}function y(){d(t,c),t[h].classList.remove(f.state.clicking),t.event.unbind(t.ownerDocument,"mousemove",g)}function w(e,a){b=p[u],a&&e.touches&&(e[i]=e.touches[0].pageY),m=e[i],v=(t[n]-t[r])/(t[o]-t[s]),a?t.event.bind(t.ownerDocument,"touchmove",g):(t.event.bind(t.ownerDocument,"mousemove",g),t.event.once(t.ownerDocument,"mouseup",y),e.preventDefault()),t[h].classList.add(f.state.clicking),e.stopPropagation()}t.event.bind(t[a],"mousedown",(function(t){w(t)})),t.event.bind(t[a],"touchstart",(function(t){w(t,!0)}))}var E={"click-rail":function(t){t.element,t.event.bind(t.scrollbarY,"mousedown",(function(t){return t.stopPropagation()})),t.event.bind(t.scrollbarYRail,"mousedown",(function(e){var r=e.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top>t.scrollbarYTop?1:-1
t.element.scrollTop+=r*t.containerHeight,_(t),e.stopPropagation()})),t.event.bind(t.scrollbarX,"mousedown",(function(t){return t.stopPropagation()})),t.event.bind(t.scrollbarXRail,"mousedown",(function(e){var r=e.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left>t.scrollbarXLeft?1:-1
t.element.scrollLeft+=r*t.containerWidth,_(t),e.stopPropagation()}))},"drag-thumb":function(t){S(t,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),S(t,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])},keyboard:function(t){var e=t.element
t.event.bind(t.ownerDocument,"keydown",(function(r){if(!(r.isDefaultPrevented&&r.isDefaultPrevented()||r.defaultPrevented)&&(s(e,":hover")||s(t.scrollbarX,":focus")||s(t.scrollbarY,":focus"))){var n,i=document.activeElement?document.activeElement:t.ownerDocument.activeElement
if(i){if("IFRAME"===i.tagName)i=i.contentDocument.activeElement
else for(;i.shadowRoot;)i=i.shadowRoot.activeElement
if(s(n=i,"input,[contenteditable]")||s(n,"select,[contenteditable]")||s(n,"textarea,[contenteditable]")||s(n,"button,[contenteditable]"))return}var o=0,a=0
switch(r.which){case 37:o=r.metaKey?-t.contentWidth:r.altKey?-t.containerWidth:-30
break
case 38:a=r.metaKey?t.contentHeight:r.altKey?t.containerHeight:30
break
case 39:o=r.metaKey?t.contentWidth:r.altKey?t.containerWidth:30
break
case 40:a=r.metaKey?-t.contentHeight:r.altKey?-t.containerHeight:-30
break
case 32:a=r.shiftKey?t.containerHeight:-t.containerHeight
break
case 33:a=t.containerHeight
break
case 34:a=-t.containerHeight
break
case 36:a=t.contentHeight
break
case 35:a=-t.contentHeight
break
default:return}t.settings.suppressScrollX&&0!==o||t.settings.suppressScrollY&&0!==a||(e.scrollTop-=a,e.scrollLeft+=o,_(t),function(r,n){var i=Math.floor(e.scrollTop)
if(0===r){if(!t.scrollbarYActive)return!1
if(0===i&&n>0||i>=t.contentHeight-t.containerHeight&&n<0)return!t.settings.wheelPropagation}var o=e.scrollLeft
if(0===n){if(!t.scrollbarXActive)return!1
if(0===o&&r<0||o>=t.contentWidth-t.containerWidth&&r>0)return!t.settings.wheelPropagation}return!0}(o,a)&&r.preventDefault())}}))},wheel:function(t){var e=t.element
function r(r){var i=function(t){var e=t.deltaX,r=-1*t.deltaY
return void 0!==e&&void 0!==r||(e=-1*t.wheelDeltaX/6,r=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,r*=10),e!=e&&r!=r&&(e=0,r=t.wheelDelta),t.shiftKey?[-r,-e]:[e,r]}(r),o=i[0],a=i[1]
if(!function(t,r,i){if(!w.isWebKit&&e.querySelector("select:focus"))return!0
if(!e.contains(t))return!1
for(var o=t;o&&o!==e;){if(o.classList.contains(f.element.consuming))return!0
var a=n(o)
if(i&&a.overflowY.match(/(scroll|auto)/)){var s=o.scrollHeight-o.clientHeight
if(s>0&&(o.scrollTop>0&&i<0||o.scrollTop<s&&i>0))return!0}if(r&&a.overflowX.match(/(scroll|auto)/)){var u=o.scrollWidth-o.clientWidth
if(u>0&&(o.scrollLeft>0&&r<0||o.scrollLeft<u&&r>0))return!0}o=o.parentNode}return!1}(r.target,o,a)){var s=!1
t.settings.useBothWheelAxes?t.scrollbarYActive&&!t.scrollbarXActive?(a?e.scrollTop-=a*t.settings.wheelSpeed:e.scrollTop+=o*t.settings.wheelSpeed,s=!0):t.scrollbarXActive&&!t.scrollbarYActive&&(o?e.scrollLeft+=o*t.settings.wheelSpeed:e.scrollLeft-=a*t.settings.wheelSpeed,s=!0):(e.scrollTop-=a*t.settings.wheelSpeed,e.scrollLeft+=o*t.settings.wheelSpeed),_(t),s=s||function(r,n){var i=Math.floor(e.scrollTop),o=0===e.scrollTop,a=i+e.offsetHeight===e.scrollHeight,s=0===e.scrollLeft,u=e.scrollLeft+e.offsetWidth===e.scrollWidth
return!(Math.abs(n)>Math.abs(r)?o||a:s||u)||!t.settings.wheelPropagation}(o,a),s&&!r.ctrlKey&&(r.stopPropagation(),r.preventDefault())}}void 0!==window.onwheel?t.event.bind(e,"wheel",r):void 0!==window.onmousewheel&&t.event.bind(e,"mousewheel",r)},touch:function(t){if(w.supportsTouch||w.supportsIePointer){var e=t.element,r={},i=0,o={},a=null
w.supportsTouch?(t.event.bind(e,"touchstart",h),t.event.bind(e,"touchmove",l),t.event.bind(e,"touchend",d)):w.supportsIePointer&&(window.PointerEvent?(t.event.bind(e,"pointerdown",h),t.event.bind(e,"pointermove",l),t.event.bind(e,"pointerup",d)):window.MSPointerEvent&&(t.event.bind(e,"MSPointerDown",h),t.event.bind(e,"MSPointerMove",l),t.event.bind(e,"MSPointerUp",d)))}function s(r,n){e.scrollTop-=n,e.scrollLeft-=r,_(t)}function u(t){return t.targetTouches?t.targetTouches[0]:t}function c(t){return!(t.pointerType&&"pen"===t.pointerType&&0===t.buttons||(!t.targetTouches||1!==t.targetTouches.length)&&(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE))}function h(t){if(c(t)){var e=u(t)
r.pageX=e.pageX,r.pageY=e.pageY,i=(new Date).getTime(),null!==a&&clearInterval(a)}}function l(a){if(c(a)){var h=u(a),l={pageX:h.pageX,pageY:h.pageY},d=l.pageX-r.pageX,p=l.pageY-r.pageY
if(function(t,r,i){if(!e.contains(t))return!1
for(var o=t;o&&o!==e;){if(o.classList.contains(f.element.consuming))return!0
var a=n(o)
if(i&&a.overflowY.match(/(scroll|auto)/)){var s=o.scrollHeight-o.clientHeight
if(s>0&&(o.scrollTop>0&&i<0||o.scrollTop<s&&i>0))return!0}if(r&&a.overflowX.match(/(scroll|auto)/)){var u=o.scrollWidth-o.clientWidth
if(u>0&&(o.scrollLeft>0&&r<0||o.scrollLeft<u&&r>0))return!0}o=o.parentNode}return!1}(a.target,d,p))return
s(d,p),r=l
var b=(new Date).getTime(),m=b-i
m>0&&(o.x=d/m,o.y=p/m,i=b),function(r,n){var i=Math.floor(e.scrollTop),o=e.scrollLeft,a=Math.abs(r),s=Math.abs(n)
if(s>a){if(n<0&&i===t.contentHeight-t.containerHeight||n>0&&0===i)return 0===window.scrollY&&n>0&&w.isChrome}else if(a>s&&(r<0&&o===t.contentWidth-t.containerWidth||r>0&&0===o))return!0
return!0}(d,p)&&a.preventDefault()}}function d(){t.settings.swipeEasing&&(clearInterval(a),a=setInterval((function(){t.isInitialized?clearInterval(a):o.x||o.y?Math.abs(o.x)<.01&&Math.abs(o.y)<.01?clearInterval(a):t.element?(s(30*o.x,30*o.y),o.x*=.8,o.y*=.8):clearInterval(a):clearInterval(a)}),10))}}},k=function(t,e){var r=this
if(void 0===e&&(e={}),"string"==typeof t&&(t=document.querySelector(t)),!t||!t.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar")
for(var a in this.element=t,t.classList.add(f.main),this.settings={handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1},e)this.settings[a]=e[a]
this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null
var s,u,c=function(){return t.classList.add(f.state.focus)},h=function(){return t.classList.remove(f.state.focus)}
this.isRtl="rtl"===n(t).direction,!0===this.isRtl&&t.classList.add(f.rtl),this.isNegativeScroll=(u=t.scrollLeft,t.scrollLeft=-1,s=t.scrollLeft<0,t.scrollLeft=u,s),this.negativeScrollAdjustment=this.isNegativeScroll?t.scrollWidth-t.clientWidth:0,this.event=new m,this.ownerDocument=t.ownerDocument||document,this.scrollbarXRail=o(f.element.rail("x")),t.appendChild(this.scrollbarXRail),this.scrollbarX=o(f.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",c),this.event.bind(this.scrollbarX,"blur",h),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null
var l=n(this.scrollbarXRail)
this.scrollbarXBottom=parseInt(l.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=y(l.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=y(l.borderLeftWidth)+y(l.borderRightWidth),i(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=y(l.marginLeft)+y(l.marginRight),i(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=o(f.element.rail("y")),t.appendChild(this.scrollbarYRail),this.scrollbarY=o(f.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",c),this.event.bind(this.scrollbarY,"blur",h),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null
var d=n(this.scrollbarYRail)
this.scrollbarYRight=parseInt(d.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=y(d.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?function(t){var e=n(t)
return y(e.width)+y(e.paddingLeft)+y(e.paddingRight)+y(e.borderLeftWidth)+y(e.borderRightWidth)}(this.scrollbarY):null,this.railBorderYWidth=y(d.borderTopWidth)+y(d.borderBottomWidth),i(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=y(d.marginTop)+y(d.marginBottom),i(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:t.scrollLeft<=0?"start":t.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:t.scrollTop<=0?"start":t.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach((function(t){return E[t](r)})),this.lastScrollTop=Math.floor(t.scrollTop),this.lastScrollLeft=t.scrollLeft,this.event.bind(this.element,"scroll",(function(t){return r.onScroll(t)})),_(this)}
k.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,i(this.scrollbarXRail,{display:"block"}),i(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=y(n(this.scrollbarXRail).marginLeft)+y(n(this.scrollbarXRail).marginRight),this.railYMarginHeight=y(n(this.scrollbarYRail).marginTop)+y(n(this.scrollbarYRail).marginBottom),i(this.scrollbarXRail,{display:"none"}),i(this.scrollbarYRail,{display:"none"}),_(this),g(this,"top",0,!1,!0),g(this,"left",0,!1,!0),i(this.scrollbarXRail,{display:""}),i(this.scrollbarYRail,{display:""}))},k.prototype.onScroll=function(t){this.isAlive&&(_(this),g(this,"top",this.element.scrollTop-this.lastScrollTop),g(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)},k.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),u(this.scrollbarX),u(this.scrollbarY),u(this.scrollbarXRail),u(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)},k.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter((function(t){return!t.match(/^ps([-_].+|)$/)})).join(" ")}
const A=k},6991:(t,e,r)=>{e.publicEncrypt=r(2466),e.privateDecrypt=r(3144),e.privateEncrypt=function(t,r){return e.publicEncrypt(t,r,!0)},e.publicDecrypt=function(t,r){return e.privateDecrypt(t,r,!0)}},6873:(t,e,r)=>{var n=r(5866),i=r(8850).Buffer
function o(t){var e=i.allocUnsafe(4)
return e.writeUInt32BE(t,0),e}t.exports=function(t,e){for(var r,a=i.alloc(0),s=0;a.length<e;)r=o(s++),a=i.concat([a,n("sha1").update(t).update(r).digest()])
return a.slice(0,e)}},3144:(t,e,r)=>{var n=r(7552),i=r(6873),o=r(7223),a=r(1734),s=r(9782),u=r(5866),c=r(2561),f=r(8850).Buffer
t.exports=function(t,e,r){var h
h=t.padding?t.padding:r?1:4
var l,d=n(t),p=d.modulus.byteLength()
if(e.length>p||new a(e).cmp(d.modulus)>=0)throw new Error("decryption error")
l=r?c(new a(e),d):s(e,d)
var b=f.alloc(p-l.length)
if(l=f.concat([b,l],p),4===h)return function(t,e){var r=t.modulus.byteLength(),n=u("sha1").update(f.alloc(0)).digest(),a=n.length
if(0!==e[0])throw new Error("decryption error")
var s=e.slice(1,a+1),c=e.slice(a+1),h=o(s,i(c,a)),l=o(c,i(h,r-a-1))
if(function(t,e){t=f.from(t),e=f.from(e)
var r=0,n=t.length
t.length!==e.length&&(r++,n=Math.min(t.length,e.length))
for(var i=-1;++i<n;)r+=t[i]^e[i]
return r}(n,l.slice(0,a)))throw new Error("decryption error")
for(var d=a;0===l[d];)d++
if(1!==l[d++])throw new Error("decryption error")
return l.slice(d)}(d,l)
if(1===h)return function(t,e,r){for(var n=e.slice(0,2),i=2,o=0;0!==e[i++];)if(i>=e.length){o++
break}var a=e.slice(2,i-1)
if(("0002"!==n.toString("hex")&&!r||"0001"!==n.toString("hex")&&r)&&o++,a.length<8&&o++,o)throw new Error("decryption error")
return e.slice(i)}(0,l,r)
if(3===h)return l
throw new Error("unknown padding")}},2466:(t,e,r)=>{var n=r(7552),i=r(5010),o=r(5866),a=r(6873),s=r(7223),u=r(1734),c=r(2561),f=r(9782),h=r(8850).Buffer
t.exports=function(t,e,r){var l
l=t.padding?t.padding:r?1:4
var d,p=n(t)
if(4===l)d=function(t,e){var r=t.modulus.byteLength(),n=e.length,c=o("sha1").update(h.alloc(0)).digest(),f=c.length,l=2*f
if(n>r-l-2)throw new Error("message too long")
var d=h.alloc(r-n-l-2),p=r-f-1,b=i(f),m=s(h.concat([c,d,h.alloc(1,1),e],p),a(b,p)),v=s(b,a(m,f))
return new u(h.concat([h.alloc(1),v,m],r))}(p,e)
else if(1===l)d=function(t,e,r){var n,o=e.length,a=t.modulus.byteLength()
if(o>a-11)throw new Error("message too long")
return n=r?h.alloc(a-o-3,255):function(t){for(var e,r=h.allocUnsafe(t),n=0,o=i(2*t),a=0;n<t;)a===o.length&&(o=i(2*t),a=0),(e=o[a++])&&(r[n++]=e)
return r}(a-o-3),new u(h.concat([h.from([0,r?1:2]),n,h.alloc(1),e],a))}(p,e,r)
else{if(3!==l)throw new Error("unknown padding")
if((d=new u(e)).cmp(p.modulus)>=0)throw new Error("data too long for modulus")}return r?f(d,p):c(d,p)}},2561:(t,e,r)=>{var n=r(1734),i=r(8850).Buffer
t.exports=function(t,e){return i.from(t.toRed(n.mont(e.modulus)).redPow(new n(e.publicExponent)).fromRed().toArray())}},7223:t=>{t.exports=function(t,e){for(var r=t.length,n=-1;++n<r;)t[n]^=e[n]
return t}},1494:(t,e,r)=>{"use strict"
var n
r.r(e),r.d(e,{default:()=>i})
const i=function(){function t(){this.pool=[],this.flush()}return t.prototype.flush=function(){var t=this
n=window.requestAnimationFrame((function(){var e=t.pool
t.reset(),e.forEach((function(t){t[Object.keys(t)[0]]()})),t.flush()}))},t.prototype.add=function(t,e){var r
return this.pool.push(((r={})[t]=e,r)),e},t.prototype.remove=function(t){this.pool=this.pool.filter((function(e){return!e[t]}))},t.prototype.reset=function(){this.pool=[]},t.prototype.stop=function(){window.cancelAnimationFrame(n)},t}()},5010:(t,e,r)=>{"use strict"
var n=65536,i=r(8850).Buffer,o=r.g.crypto||r.g.msCrypto
o&&o.getRandomValues?t.exports=function(t,e){if(t>4294967295)throw new RangeError("requested too many random bytes")
var r=i.allocUnsafe(t)
if(t>0)if(t>n)for(var a=0;a<t;a+=n)o.getRandomValues(r.slice(a,a+n))
else o.getRandomValues(r)
return"function"==typeof e?process.nextTick((function(){e(null,r)})):r}:t.exports=function(){throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")}},6509:(t,e,r)=>{"use strict"
function n(){throw new Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11")}var i=r(8850),o=r(5010),a=i.Buffer,s=i.kMaxLength,u=r.g.crypto||r.g.msCrypto,c=Math.pow(2,32)-1
function f(t,e){if("number"!=typeof t||t!=t)throw new TypeError("offset must be a number")
if(t>c||t<0)throw new TypeError("offset must be a uint32")
if(t>s||t>e)throw new RangeError("offset out of range")}function h(t,e,r){if("number"!=typeof t||t!=t)throw new TypeError("size must be a number")
if(t>c||t<0)throw new TypeError("size must be a uint32")
if(t+e>r||t>s)throw new RangeError("buffer too small")}function l(t,e,r,n){if(process.browser){var i=t.buffer,a=new Uint8Array(i,e,r)
return u.getRandomValues(a),n?void process.nextTick((function(){n(null,t)})):t}if(!n)return o(r).copy(t,e),t
o(r,(function(r,i){if(r)return n(r)
i.copy(t,e),n(null,t)}))}u&&u.getRandomValues||!process.browser?(e.randomFill=function(t,e,n,i){if(!(a.isBuffer(t)||t instanceof r.g.Uint8Array))throw new TypeError('"buf" argument must be a Buffer or Uint8Array')
if("function"==typeof e)i=e,e=0,n=t.length
else if("function"==typeof n)i=n,n=t.length-e
else if("function"!=typeof i)throw new TypeError('"cb" argument must be a function')
return f(e,t.length),h(n,e,t.length),l(t,e,n,i)},e.randomFillSync=function(t,e,n){if(void 0===e&&(e=0),!(a.isBuffer(t)||t instanceof r.g.Uint8Array))throw new TypeError('"buf" argument must be a Buffer or Uint8Array')
return f(e,t.length),void 0===n&&(n=t.length-e),h(n,e,t.length),l(t,e,n)}):(e.randomFill=n,e.randomFillSync=n)},6707:(t,e,r)=>{"use strict"
var n=r(9033).Buffer,i=r(1736),o=r(2353),a=new Array(16),s=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],u=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],c=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],f=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11],h=[0,1518500249,1859775393,2400959708,2840853838],l=[1352829926,1548603684,1836072691,2053994217,0]
function d(){o.call(this,64),this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520}function p(t,e){return t<<e|t>>>32-e}function b(t,e,r,n,i,o,a,s){return p(t+(e^r^n)+o+a|0,s)+i|0}function m(t,e,r,n,i,o,a,s){return p(t+(e&r|~e&n)+o+a|0,s)+i|0}function v(t,e,r,n,i,o,a,s){return p(t+((e|~r)^n)+o+a|0,s)+i|0}function g(t,e,r,n,i,o,a,s){return p(t+(e&n|r&~n)+o+a|0,s)+i|0}function y(t,e,r,n,i,o,a,s){return p(t+(e^(r|~n))+o+a|0,s)+i|0}i(d,o),d.prototype._update=function(){for(var t=a,e=0;e<16;++e)t[e]=this._block.readInt32LE(4*e)
for(var r=0|this._a,n=0|this._b,i=0|this._c,o=0|this._d,d=0|this._e,w=0|this._a,_=0|this._b,M=0|this._c,S=0|this._d,E=0|this._e,k=0;k<80;k+=1){var A,T
k<16?(A=b(r,n,i,o,d,t[s[k]],h[0],c[k]),T=y(w,_,M,S,E,t[u[k]],l[0],f[k])):k<32?(A=m(r,n,i,o,d,t[s[k]],h[1],c[k]),T=g(w,_,M,S,E,t[u[k]],l[1],f[k])):k<48?(A=v(r,n,i,o,d,t[s[k]],h[2],c[k]),T=v(w,_,M,S,E,t[u[k]],l[2],f[k])):k<64?(A=g(r,n,i,o,d,t[s[k]],h[3],c[k]),T=m(w,_,M,S,E,t[u[k]],l[3],f[k])):(A=y(r,n,i,o,d,t[s[k]],h[4],c[k]),T=b(w,_,M,S,E,t[u[k]],l[4],f[k])),r=d,d=o,o=p(i,10),i=n,n=A,w=E,E=S,S=p(M,10),M=_,_=T}var R=this._b+i+S|0
this._b=this._c+o+E|0,this._c=this._d+d+w|0,this._d=this._e+r+_|0,this._e=this._a+n+M|0,this._a=R},d.prototype._digest=function(){this._block[this._blockOffset++]=128,this._blockOffset>56&&(this._block.fill(0,this._blockOffset,64),this._update(),this._blockOffset=0),this._block.fill(0,this._blockOffset,56),this._block.writeUInt32LE(this._length[0],56),this._block.writeUInt32LE(this._length[1],60),this._update()
var t=n.alloc?n.alloc(20):new n(20)
return t.writeInt32LE(this._a,0),t.writeInt32LE(this._b,4),t.writeInt32LE(this._c,8),t.writeInt32LE(this._d,12),t.writeInt32LE(this._e,16),t},t.exports=d},8850:(t,e,r)=>{var n=r(9033),i=n.Buffer
function o(t,e){for(var r in t)e[r]=t[r]}function a(t,e,r){return i(t,e,r)}i.from&&i.alloc&&i.allocUnsafe&&i.allocUnsafeSlow?t.exports=n:(o(n,e),e.Buffer=a),a.prototype=Object.create(i.prototype),o(i,a),a.from=function(t,e,r){if("number"==typeof t)throw new TypeError("Argument must not be a number")
return i(t,e,r)},a.alloc=function(t,e,r){if("number"!=typeof t)throw new TypeError("Argument must be a number")
var n=i(t)
return void 0!==e?"string"==typeof r?n.fill(e,r):n.fill(e):n.fill(0),n},a.allocUnsafe=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number")
return i(t)},a.allocUnsafeSlow=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number")
return n.SlowBuffer(t)}},1755:(t,e,r)=>{"use strict"
var n,i=r(9033),o=i.Buffer,a={}
for(n in i)i.hasOwnProperty(n)&&"SlowBuffer"!==n&&"Buffer"!==n&&(a[n]=i[n])
var s=a.Buffer={}
for(n in o)o.hasOwnProperty(n)&&"allocUnsafe"!==n&&"allocUnsafeSlow"!==n&&(s[n]=o[n])
if(a.Buffer.prototype=o.prototype,s.from&&s.from!==Uint8Array.from||(s.from=function(t,e,r){if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type '+typeof t)
if(t&&void 0===t.length)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)
return o(t,e,r)}),s.alloc||(s.alloc=function(t,e,r){if("number"!=typeof t)throw new TypeError('The "size" argument must be of type number. Received type '+typeof t)
if(t<0||t>=2*(1<<30))throw new RangeError('The value "'+t+'" is invalid for option "size"')
var n=o(t)
return e&&0!==e.length?"string"==typeof r?n.fill(e,r):n.fill(e):n.fill(0),n}),!a.kStringMaxLength)try{a.kStringMaxLength=process.binding("buffer").kStringMaxLength}catch(t){}a.constants||(a.constants={MAX_LENGTH:a.kMaxLength},a.kStringMaxLength&&(a.constants.MAX_STRING_LENGTH=a.kStringMaxLength)),t.exports=a},6003:(t,e,r)=>{var n=r(8850).Buffer
function i(t,e){this._block=n.alloc(t),this._finalSize=e,this._blockSize=t,this._len=0}i.prototype.update=function(t,e){"string"==typeof t&&(e=e||"utf8",t=n.from(t,e))
for(var r=this._block,i=this._blockSize,o=t.length,a=this._len,s=0;s<o;){for(var u=a%i,c=Math.min(o-s,i-u),f=0;f<c;f++)r[u+f]=t[s+f]
s+=c,(a+=c)%i==0&&this._update(r)}return this._len+=o,this},i.prototype.digest=function(t){var e=this._len%this._blockSize
this._block[e]=128,this._block.fill(0,e+1),e>=this._finalSize&&(this._update(this._block),this._block.fill(0))
var r=8*this._len
if(r<=4294967295)this._block.writeUInt32BE(r,this._blockSize-4)
else{var n=(4294967295&r)>>>0,i=(r-n)/4294967296
this._block.writeUInt32BE(i,this._blockSize-8),this._block.writeUInt32BE(n,this._blockSize-4)}this._update(this._block)
var o=this._hash()
return t?o.toString(t):o},i.prototype._update=function(){throw new Error("_update must be implemented by subclass")},t.exports=i},1708:(t,e,r)=>{var n=t.exports=function(t){t=t.toLowerCase()
var e=n[t]
if(!e)throw new Error(t+" is not supported (we accept pull requests)")
return new e}
n.sha=r(8210),n.sha1=r(544),n.sha224=r(6288),n.sha256=r(4571),n.sha384=r(6959),n.sha512=r(4515)},8210:(t,e,r)=>{var n=r(1736),i=r(6003),o=r(8850).Buffer,a=[1518500249,1859775393,-1894007588,-899497514],s=new Array(80)
function u(){this.init(),this._w=s,i.call(this,64,56)}function c(t){return t<<30|t>>>2}function f(t,e,r,n){return 0===t?e&r|~e&n:2===t?e&r|e&n|r&n:e^r^n}n(u,i),u.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},u.prototype._update=function(t){for(var e,r=this._w,n=0|this._a,i=0|this._b,o=0|this._c,s=0|this._d,u=0|this._e,h=0;h<16;++h)r[h]=t.readInt32BE(4*h)
for(;h<80;++h)r[h]=r[h-3]^r[h-8]^r[h-14]^r[h-16]
for(var l=0;l<80;++l){var d=~~(l/20),p=0|((e=n)<<5|e>>>27)+f(d,i,o,s)+u+r[l]+a[d]
u=s,s=o,o=c(i),i=n,n=p}this._a=n+this._a|0,this._b=i+this._b|0,this._c=o+this._c|0,this._d=s+this._d|0,this._e=u+this._e|0},u.prototype._hash=function(){var t=o.allocUnsafe(20)
return t.writeInt32BE(0|this._a,0),t.writeInt32BE(0|this._b,4),t.writeInt32BE(0|this._c,8),t.writeInt32BE(0|this._d,12),t.writeInt32BE(0|this._e,16),t},t.exports=u},544:(t,e,r)=>{var n=r(1736),i=r(6003),o=r(8850).Buffer,a=[1518500249,1859775393,-1894007588,-899497514],s=new Array(80)
function u(){this.init(),this._w=s,i.call(this,64,56)}function c(t){return t<<5|t>>>27}function f(t){return t<<30|t>>>2}function h(t,e,r,n){return 0===t?e&r|~e&n:2===t?e&r|e&n|r&n:e^r^n}n(u,i),u.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},u.prototype._update=function(t){for(var e,r=this._w,n=0|this._a,i=0|this._b,o=0|this._c,s=0|this._d,u=0|this._e,l=0;l<16;++l)r[l]=t.readInt32BE(4*l)
for(;l<80;++l)r[l]=(e=r[l-3]^r[l-8]^r[l-14]^r[l-16])<<1|e>>>31
for(var d=0;d<80;++d){var p=~~(d/20),b=c(n)+h(p,i,o,s)+u+r[d]+a[p]|0
u=s,s=o,o=f(i),i=n,n=b}this._a=n+this._a|0,this._b=i+this._b|0,this._c=o+this._c|0,this._d=s+this._d|0,this._e=u+this._e|0},u.prototype._hash=function(){var t=o.allocUnsafe(20)
return t.writeInt32BE(0|this._a,0),t.writeInt32BE(0|this._b,4),t.writeInt32BE(0|this._c,8),t.writeInt32BE(0|this._d,12),t.writeInt32BE(0|this._e,16),t},t.exports=u},6288:(t,e,r)=>{var n=r(1736),i=r(4571),o=r(6003),a=r(8850).Buffer,s=new Array(64)
function u(){this.init(),this._w=s,o.call(this,64,56)}n(u,i),u.prototype.init=function(){return this._a=3238371032,this._b=914150663,this._c=812702999,this._d=4144912697,this._e=4290775857,this._f=1750603025,this._g=1694076839,this._h=3204075428,this},u.prototype._hash=function(){var t=a.allocUnsafe(28)
return t.writeInt32BE(this._a,0),t.writeInt32BE(this._b,4),t.writeInt32BE(this._c,8),t.writeInt32BE(this._d,12),t.writeInt32BE(this._e,16),t.writeInt32BE(this._f,20),t.writeInt32BE(this._g,24),t},t.exports=u},4571:(t,e,r)=>{var n=r(1736),i=r(6003),o=r(8850).Buffer,a=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],s=new Array(64)
function u(){this.init(),this._w=s,i.call(this,64,56)}function c(t,e,r){return r^t&(e^r)}function f(t,e,r){return t&e|r&(t|e)}function h(t){return(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10)}function l(t){return(t>>>6|t<<26)^(t>>>11|t<<21)^(t>>>25|t<<7)}function d(t){return(t>>>7|t<<25)^(t>>>18|t<<14)^t>>>3}n(u,i),u.prototype.init=function(){return this._a=1779033703,this._b=3144134277,this._c=1013904242,this._d=2773480762,this._e=1359893119,this._f=2600822924,this._g=528734635,this._h=1541459225,this},u.prototype._update=function(t){for(var e,r=this._w,n=0|this._a,i=0|this._b,o=0|this._c,s=0|this._d,u=0|this._e,p=0|this._f,b=0|this._g,m=0|this._h,v=0;v<16;++v)r[v]=t.readInt32BE(4*v)
for(;v<64;++v)r[v]=0|(((e=r[v-2])>>>17|e<<15)^(e>>>19|e<<13)^e>>>10)+r[v-7]+d(r[v-15])+r[v-16]
for(var g=0;g<64;++g){var y=m+l(u)+c(u,p,b)+a[g]+r[g]|0,w=h(n)+f(n,i,o)|0
m=b,b=p,p=u,u=s+y|0,s=o,o=i,i=n,n=y+w|0}this._a=n+this._a|0,this._b=i+this._b|0,this._c=o+this._c|0,this._d=s+this._d|0,this._e=u+this._e|0,this._f=p+this._f|0,this._g=b+this._g|0,this._h=m+this._h|0},u.prototype._hash=function(){var t=o.allocUnsafe(32)
return t.writeInt32BE(this._a,0),t.writeInt32BE(this._b,4),t.writeInt32BE(this._c,8),t.writeInt32BE(this._d,12),t.writeInt32BE(this._e,16),t.writeInt32BE(this._f,20),t.writeInt32BE(this._g,24),t.writeInt32BE(this._h,28),t},t.exports=u},6959:(t,e,r)=>{var n=r(1736),i=r(4515),o=r(6003),a=r(8850).Buffer,s=new Array(160)
function u(){this.init(),this._w=s,o.call(this,128,112)}n(u,i),u.prototype.init=function(){return this._ah=3418070365,this._bh=1654270250,this._ch=2438529370,this._dh=355462360,this._eh=1731405415,this._fh=2394180231,this._gh=3675008525,this._hh=1203062813,this._al=3238371032,this._bl=914150663,this._cl=812702999,this._dl=4144912697,this._el=4290775857,this._fl=1750603025,this._gl=1694076839,this._hl=3204075428,this},u.prototype._hash=function(){var t=a.allocUnsafe(48)
function e(e,r,n){t.writeInt32BE(e,n),t.writeInt32BE(r,n+4)}return e(this._ah,this._al,0),e(this._bh,this._bl,8),e(this._ch,this._cl,16),e(this._dh,this._dl,24),e(this._eh,this._el,32),e(this._fh,this._fl,40),t},t.exports=u},4515:(t,e,r)=>{var n=r(1736),i=r(6003),o=r(8850).Buffer,a=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],s=new Array(160)
function u(){this.init(),this._w=s,i.call(this,128,112)}function c(t,e,r){return r^t&(e^r)}function f(t,e,r){return t&e|r&(t|e)}function h(t,e){return(t>>>28|e<<4)^(e>>>2|t<<30)^(e>>>7|t<<25)}function l(t,e){return(t>>>14|e<<18)^(t>>>18|e<<14)^(e>>>9|t<<23)}function d(t,e){return(t>>>1|e<<31)^(t>>>8|e<<24)^t>>>7}function p(t,e){return(t>>>1|e<<31)^(t>>>8|e<<24)^(t>>>7|e<<25)}function b(t,e){return(t>>>19|e<<13)^(e>>>29|t<<3)^t>>>6}function m(t,e){return(t>>>19|e<<13)^(e>>>29|t<<3)^(t>>>6|e<<26)}function v(t,e){return t>>>0<e>>>0?1:0}n(u,i),u.prototype.init=function(){return this._ah=1779033703,this._bh=3144134277,this._ch=1013904242,this._dh=2773480762,this._eh=1359893119,this._fh=2600822924,this._gh=528734635,this._hh=1541459225,this._al=4089235720,this._bl=2227873595,this._cl=4271175723,this._dl=1595750129,this._el=2917565137,this._fl=725511199,this._gl=4215389547,this._hl=327033209,this},u.prototype._update=function(t){for(var e=this._w,r=0|this._ah,n=0|this._bh,i=0|this._ch,o=0|this._dh,s=0|this._eh,u=0|this._fh,g=0|this._gh,y=0|this._hh,w=0|this._al,_=0|this._bl,M=0|this._cl,S=0|this._dl,E=0|this._el,k=0|this._fl,A=0|this._gl,T=0|this._hl,R=0;R<32;R+=2)e[R]=t.readInt32BE(4*R),e[R+1]=t.readInt32BE(4*R+4)
for(;R<160;R+=2){var x=e[R-30],C=e[R-30+1],I=d(x,C),B=p(C,x),O=b(x=e[R-4],C=e[R-4+1]),P=m(C,x),L=e[R-14],N=e[R-14+1],D=e[R-32],j=e[R-32+1],U=B+N|0,H=I+L+v(U,B)|0
H=(H=H+O+v(U=U+P|0,P)|0)+D+v(U=U+j|0,j)|0,e[R]=H,e[R+1]=U}for(var q=0;q<160;q+=2){H=e[q],U=e[q+1]
var F=f(r,n,i),z=f(w,_,M),W=h(r,w),K=h(w,r),G=l(s,E),Y=l(E,s),V=a[q],X=a[q+1],Z=c(s,u,g),J=c(E,k,A),$=T+Y|0,Q=y+G+v($,T)|0
Q=(Q=(Q=Q+Z+v($=$+J|0,J)|0)+V+v($=$+X|0,X)|0)+H+v($=$+U|0,U)|0
var tt=K+z|0,et=W+F+v(tt,K)|0
y=g,T=A,g=u,A=k,u=s,k=E,s=o+Q+v(E=S+$|0,S)|0,o=i,S=M,i=n,M=_,n=r,_=w,r=Q+et+v(w=$+tt|0,$)|0}this._al=this._al+w|0,this._bl=this._bl+_|0,this._cl=this._cl+M|0,this._dl=this._dl+S|0,this._el=this._el+E|0,this._fl=this._fl+k|0,this._gl=this._gl+A|0,this._hl=this._hl+T|0,this._ah=this._ah+r+v(this._al,w)|0,this._bh=this._bh+n+v(this._bl,_)|0,this._ch=this._ch+i+v(this._cl,M)|0,this._dh=this._dh+o+v(this._dl,S)|0,this._eh=this._eh+s+v(this._el,E)|0,this._fh=this._fh+u+v(this._fl,k)|0,this._gh=this._gh+g+v(this._gl,A)|0,this._hh=this._hh+y+v(this._hl,T)|0},u.prototype._hash=function(){var t=o.allocUnsafe(64)
function e(e,r,n){t.writeInt32BE(e,n),t.writeInt32BE(r,n+4)}return e(this._ah,this._al,0),e(this._bh,this._bl,8),e(this._ch,this._cl,16),e(this._dh,this._dl,24),e(this._eh,this._el,32),e(this._fh,this._fl,40),e(this._gh,this._gl,48),e(this._hh,this._hl,56),t},t.exports=u},7245:(t,e,r)=>{t.exports=i
var n=r(8291).EventEmitter
function i(){n.call(this)}r(1736)(i,n),i.Readable=r(7744),i.Writable=r(2890),i.Duplex=r(3510),i.Transform=r(2550),i.PassThrough=r(8802),i.finished=r(8497),i.pipeline=r(2129),i.Stream=i,i.prototype.pipe=function(t,e){var r=this
function i(e){t.writable&&!1===t.write(e)&&r.pause&&r.pause()}function o(){r.readable&&r.resume&&r.resume()}r.on("data",i),t.on("drain",o),t._isStdio||e&&!1===e.end||(r.on("end",s),r.on("close",u))
var a=!1
function s(){a||(a=!0,t.end())}function u(){a||(a=!0,"function"==typeof t.destroy&&t.destroy())}function c(t){if(f(),0===n.listenerCount(this,"error"))throw t}function f(){r.removeListener("data",i),t.removeListener("drain",o),r.removeListener("end",s),r.removeListener("close",u),r.removeListener("error",c),t.removeListener("error",c),r.removeListener("end",f),r.removeListener("close",f),t.removeListener("close",f)}return r.on("error",c),t.on("error",c),r.on("end",f),r.on("close",f),t.on("close",f),t.emit("pipe",r),t}},654:t=>{"use strict"
var e={}
function r(t,r,n){n||(n=Error)
var i=function(t){var e,n
function i(e,n,i){return t.call(this,function(t,e,n){return"string"==typeof r?r:r(t,e,n)}(e,n,i))||this}return n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,i}(n)
i.prototype.name=n.name,i.prototype.code=t,e[t]=i}function n(t,e){if(Array.isArray(t)){var r=t.length
return t=t.map((function(t){return String(t)})),r>2?"one of ".concat(e," ").concat(t.slice(0,r-1).join(", "),", or ")+t[r-1]:2===r?"one of ".concat(e," ").concat(t[0]," or ").concat(t[1]):"of ".concat(e," ").concat(t[0])}return"of ".concat(e," ").concat(String(t))}r("ERR_INVALID_OPT_VALUE",(function(t,e){return'The value "'+e+'" is invalid for option "'+t+'"'}),TypeError),r("ERR_INVALID_ARG_TYPE",(function(t,e,r){var i,o,a,s
if("string"==typeof e&&("not ","not "===e.substr(0,4))?(i="must not be",e=e.replace(/^not /,"")):i="must be",function(t,e,r){return(void 0===r||r>t.length)&&(r=t.length)," argument"===t.substring(r-9,r)}(t))o="The ".concat(t," ").concat(i," ").concat(n(e,"type"))
else{var u=("number"!=typeof s&&(s=0),s+1>(a=t).length||-1===a.indexOf(".",s)?"argument":"property")
o='The "'.concat(t,'" ').concat(u," ").concat(i," ").concat(n(e,"type"))}return o+". Received type ".concat(typeof r)}),TypeError),r("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF"),r("ERR_METHOD_NOT_IMPLEMENTED",(function(t){return"The "+t+" method is not implemented"})),r("ERR_STREAM_PREMATURE_CLOSE","Premature close"),r("ERR_STREAM_DESTROYED",(function(t){return"Cannot call "+t+" after a stream was destroyed"})),r("ERR_MULTIPLE_CALLBACK","Callback called multiple times"),r("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable"),r("ERR_STREAM_WRITE_AFTER_END","write after end"),r("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError),r("ERR_UNKNOWN_ENCODING",(function(t){return"Unknown encoding: "+t}),TypeError),r("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event"),t.exports.q=e},3510:(t,e,r)=>{"use strict"
var n=Object.keys||function(t){var e=[]
for(var r in t)e.push(r)
return e}
t.exports=c
var i=r(7744),o=r(2890)
r(1736)(c,i)
for(var a=n(o.prototype),s=0;s<a.length;s++){var u=a[s]
c.prototype[u]||(c.prototype[u]=o.prototype[u])}function c(t){if(!(this instanceof c))return new c(t)
i.call(this,t),o.call(this,t),this.allowHalfOpen=!0,t&&(!1===t.readable&&(this.readable=!1),!1===t.writable&&(this.writable=!1),!1===t.allowHalfOpen&&(this.allowHalfOpen=!1,this.once("end",f)))}function f(){this._writableState.ended||process.nextTick(h,this)}function h(t){t.end()}Object.defineProperty(c.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(c.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(c.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(c.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&this._readableState.destroyed&&this._writableState.destroyed},set:function(t){void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed=t,this._writableState.destroyed=t)}})},8802:(t,e,r)=>{"use strict"
t.exports=i
var n=r(2550)
function i(t){if(!(this instanceof i))return new i(t)
n.call(this,t)}r(1736)(i,n),i.prototype._transform=function(t,e,r){r(null,t)}},7744:(t,e,r)=>{"use strict"
var n
t.exports=E,E.ReadableState=S,r(8291).EventEmitter
var i,o=function(t,e){return t.listeners(e).length},a=r(8672),s=r(9033).Buffer,u=(void 0!==r.g?r.g:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{}).Uint8Array||function(){},c=r(964)
i=c&&c.debuglog?c.debuglog("stream"):function(){}
var f,h,l,d=r(1714),p=r(6581),b=r(5738).getHighWaterMark,m=r(654).q,v=m.ERR_INVALID_ARG_TYPE,g=m.ERR_STREAM_PUSH_AFTER_EOF,y=m.ERR_METHOD_NOT_IMPLEMENTED,w=m.ERR_STREAM_UNSHIFT_AFTER_END_EVENT
r(1736)(E,a)
var _=p.errorOrDestroy,M=["error","close","destroy","pause","resume"]
function S(t,e,i){n=n||r(3510),t=t||{},"boolean"!=typeof i&&(i=e instanceof n),this.objectMode=!!t.objectMode,i&&(this.objectMode=this.objectMode||!!t.readableObjectMode),this.highWaterMark=b(this,t,"readableHighWaterMark",i),this.buffer=new d,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.paused=!0,this.emitClose=!1!==t.emitClose,this.autoDestroy=!!t.autoDestroy,this.destroyed=!1,this.defaultEncoding=t.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,t.encoding&&(f||(f=r(6878).s),this.decoder=new f(t.encoding),this.encoding=t.encoding)}function E(t){if(n=n||r(3510),!(this instanceof E))return new E(t)
var e=this instanceof n
this._readableState=new S(t,this,e),this.readable=!0,t&&("function"==typeof t.read&&(this._read=t.read),"function"==typeof t.destroy&&(this._destroy=t.destroy)),a.call(this)}function k(t,e,r,n,o){i("readableAddChunk",e)
var a,c=t._readableState
if(null===e)c.reading=!1,function(t,e){if(i("onEofChunk"),!e.ended){if(e.decoder){var r=e.decoder.end()
r&&r.length&&(e.buffer.push(r),e.length+=e.objectMode?1:r.length)}e.ended=!0,e.sync?x(t):(e.needReadable=!1,e.emittedReadable||(e.emittedReadable=!0,C(t)))}}(t,c)
else if(o||(a=function(t,e){var r,n
return n=e,s.isBuffer(n)||n instanceof u||"string"==typeof e||void 0===e||t.objectMode||(r=new v("chunk",["string","Buffer","Uint8Array"],e)),r}(c,e)),a)_(t,a)
else if(c.objectMode||e&&e.length>0)if("string"==typeof e||c.objectMode||Object.getPrototypeOf(e)===s.prototype||(e=function(t){return s.from(t)}(e)),n)c.endEmitted?_(t,new w):A(t,c,e,!0)
else if(c.ended)_(t,new g)
else{if(c.destroyed)return!1
c.reading=!1,c.decoder&&!r?(e=c.decoder.write(e),c.objectMode||0!==e.length?A(t,c,e,!1):I(t,c)):A(t,c,e,!1)}else n||(c.reading=!1,I(t,c))
return!c.ended&&(c.length<c.highWaterMark||0===c.length)}function A(t,e,r,n){e.flowing&&0===e.length&&!e.sync?(e.awaitDrain=0,t.emit("data",r)):(e.length+=e.objectMode?1:r.length,n?e.buffer.unshift(r):e.buffer.push(r),e.needReadable&&x(t)),I(t,e)}Object.defineProperty(E.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(t){this._readableState&&(this._readableState.destroyed=t)}}),E.prototype.destroy=p.destroy,E.prototype._undestroy=p.undestroy,E.prototype._destroy=function(t,e){e(t)},E.prototype.push=function(t,e){var r,n=this._readableState
return n.objectMode?r=!0:"string"==typeof t&&((e=e||n.defaultEncoding)!==n.encoding&&(t=s.from(t,e),e=""),r=!0),k(this,t,e,!1,r)},E.prototype.unshift=function(t){return k(this,t,null,!0,!1)},E.prototype.isPaused=function(){return!1===this._readableState.flowing},E.prototype.setEncoding=function(t){f||(f=r(6878).s)
var e=new f(t)
this._readableState.decoder=e,this._readableState.encoding=this._readableState.decoder.encoding
for(var n=this._readableState.buffer.head,i="";null!==n;)i+=e.write(n.data),n=n.next
return this._readableState.buffer.clear(),""!==i&&this._readableState.buffer.push(i),this._readableState.length=i.length,this}
var T=1073741824
function R(t,e){return t<=0||0===e.length&&e.ended?0:e.objectMode?1:t!=t?e.flowing&&e.length?e.buffer.head.data.length:e.length:(t>e.highWaterMark&&(e.highWaterMark=function(t){return t>=T?t=T:(t--,t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,t|=t>>>16,t++),t}(t)),t<=e.length?t:e.ended?e.length:(e.needReadable=!0,0))}function x(t){var e=t._readableState
i("emitReadable",e.needReadable,e.emittedReadable),e.needReadable=!1,e.emittedReadable||(i("emitReadable",e.flowing),e.emittedReadable=!0,process.nextTick(C,t))}function C(t){var e=t._readableState
i("emitReadable_",e.destroyed,e.length,e.ended),e.destroyed||!e.length&&!e.ended||(t.emit("readable"),e.emittedReadable=!1),e.needReadable=!e.flowing&&!e.ended&&e.length<=e.highWaterMark,N(t)}function I(t,e){e.readingMore||(e.readingMore=!0,process.nextTick(B,t,e))}function B(t,e){for(;!e.reading&&!e.ended&&(e.length<e.highWaterMark||e.flowing&&0===e.length);){var r=e.length
if(i("maybeReadMore read 0"),t.read(0),r===e.length)break}e.readingMore=!1}function O(t){var e=t._readableState
e.readableListening=t.listenerCount("readable")>0,e.resumeScheduled&&!e.paused?e.flowing=!0:t.listenerCount("data")>0&&t.resume()}function P(t){i("readable nexttick read 0"),t.read(0)}function L(t,e){i("resume",e.reading),e.reading||t.read(0),e.resumeScheduled=!1,t.emit("resume"),N(t),e.flowing&&!e.reading&&t.read(0)}function N(t){var e=t._readableState
for(i("flow",e.flowing);e.flowing&&null!==t.read(););}function D(t,e){return 0===e.length?null:(e.objectMode?r=e.buffer.shift():!t||t>=e.length?(r=e.decoder?e.buffer.join(""):1===e.buffer.length?e.buffer.first():e.buffer.concat(e.length),e.buffer.clear()):r=e.buffer.consume(t,e.decoder),r)
var r}function j(t){var e=t._readableState
i("endReadable",e.endEmitted),e.endEmitted||(e.ended=!0,process.nextTick(U,e,t))}function U(t,e){if(i("endReadableNT",t.endEmitted,t.length),!t.endEmitted&&0===t.length&&(t.endEmitted=!0,e.readable=!1,e.emit("end"),t.autoDestroy)){var r=e._writableState;(!r||r.autoDestroy&&r.finished)&&e.destroy()}}function H(t,e){for(var r=0,n=t.length;r<n;r++)if(t[r]===e)return r
return-1}E.prototype.read=function(t){i("read",t),t=parseInt(t,10)
var e=this._readableState,r=t
if(0!==t&&(e.emittedReadable=!1),0===t&&e.needReadable&&((0!==e.highWaterMark?e.length>=e.highWaterMark:e.length>0)||e.ended))return i("read: emitReadable",e.length,e.ended),0===e.length&&e.ended?j(this):x(this),null
if(0===(t=R(t,e))&&e.ended)return 0===e.length&&j(this),null
var n,o=e.needReadable
return i("need readable",o),(0===e.length||e.length-t<e.highWaterMark)&&i("length less than watermark",o=!0),e.ended||e.reading?i("reading or ended",o=!1):o&&(i("do read"),e.reading=!0,e.sync=!0,0===e.length&&(e.needReadable=!0),this._read(e.highWaterMark),e.sync=!1,e.reading||(t=R(r,e))),null===(n=t>0?D(t,e):null)?(e.needReadable=e.length<=e.highWaterMark,t=0):(e.length-=t,e.awaitDrain=0),0===e.length&&(e.ended||(e.needReadable=!0),r!==t&&e.ended&&j(this)),null!==n&&this.emit("data",n),n},E.prototype._read=function(t){_(this,new y("_read()"))},E.prototype.pipe=function(t,e){var r=this,n=this._readableState
switch(n.pipesCount){case 0:n.pipes=t
break
case 1:n.pipes=[n.pipes,t]
break
default:n.pipes.push(t)}n.pipesCount+=1,i("pipe count=%d opts=%j",n.pipesCount,e)
var a=e&&!1===e.end||t===process.stdout||t===process.stderr?p:s
function s(){i("onend"),t.end()}n.endEmitted?process.nextTick(a):r.once("end",a),t.on("unpipe",(function e(o,a){i("onunpipe"),o===r&&a&&!1===a.hasUnpiped&&(a.hasUnpiped=!0,i("cleanup"),t.removeListener("close",l),t.removeListener("finish",d),t.removeListener("drain",u),t.removeListener("error",h),t.removeListener("unpipe",e),r.removeListener("end",s),r.removeListener("end",p),r.removeListener("data",f),c=!0,!n.awaitDrain||t._writableState&&!t._writableState.needDrain||u())}))
var u=function(t){return function(){var e=t._readableState
i("pipeOnDrain",e.awaitDrain),e.awaitDrain&&e.awaitDrain--,0===e.awaitDrain&&o(t,"data")&&(e.flowing=!0,N(t))}}(r)
t.on("drain",u)
var c=!1
function f(e){i("ondata")
var o=t.write(e)
i("dest.write",o),!1===o&&((1===n.pipesCount&&n.pipes===t||n.pipesCount>1&&-1!==H(n.pipes,t))&&!c&&(i("false write response, pause",n.awaitDrain),n.awaitDrain++),r.pause())}function h(e){i("onerror",e),p(),t.removeListener("error",h),0===o(t,"error")&&_(t,e)}function l(){t.removeListener("finish",d),p()}function d(){i("onfinish"),t.removeListener("close",l),p()}function p(){i("unpipe"),r.unpipe(t)}return r.on("data",f),function(t,e,r){if("function"==typeof t.prependListener)return t.prependListener(e,r)
t._events&&t._events[e]?Array.isArray(t._events[e])?t._events[e].unshift(r):t._events[e]=[r,t._events[e]]:t.on(e,r)}(t,"error",h),t.once("close",l),t.once("finish",d),t.emit("pipe",r),n.flowing||(i("pipe resume"),r.resume()),t},E.prototype.unpipe=function(t){var e=this._readableState,r={hasUnpiped:!1}
if(0===e.pipesCount)return this
if(1===e.pipesCount)return t&&t!==e.pipes||(t||(t=e.pipes),e.pipes=null,e.pipesCount=0,e.flowing=!1,t&&t.emit("unpipe",this,r)),this
if(!t){var n=e.pipes,i=e.pipesCount
e.pipes=null,e.pipesCount=0,e.flowing=!1
for(var o=0;o<i;o++)n[o].emit("unpipe",this,{hasUnpiped:!1})
return this}var a=H(e.pipes,t)
return-1===a||(e.pipes.splice(a,1),e.pipesCount-=1,1===e.pipesCount&&(e.pipes=e.pipes[0]),t.emit("unpipe",this,r)),this},E.prototype.on=function(t,e){var r=a.prototype.on.call(this,t,e),n=this._readableState
return"data"===t?(n.readableListening=this.listenerCount("readable")>0,!1!==n.flowing&&this.resume()):"readable"===t&&(n.endEmitted||n.readableListening||(n.readableListening=n.needReadable=!0,n.flowing=!1,n.emittedReadable=!1,i("on readable",n.length,n.reading),n.length?x(this):n.reading||process.nextTick(P,this))),r},E.prototype.addListener=E.prototype.on,E.prototype.removeListener=function(t,e){var r=a.prototype.removeListener.call(this,t,e)
return"readable"===t&&process.nextTick(O,this),r},E.prototype.removeAllListeners=function(t){var e=a.prototype.removeAllListeners.apply(this,arguments)
return"readable"!==t&&void 0!==t||process.nextTick(O,this),e},E.prototype.resume=function(){var t=this._readableState
return t.flowing||(i("resume"),t.flowing=!t.readableListening,function(t,e){e.resumeScheduled||(e.resumeScheduled=!0,process.nextTick(L,t,e))}(this,t)),t.paused=!1,this},E.prototype.pause=function(){return i("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(i("pause"),this._readableState.flowing=!1,this.emit("pause")),this._readableState.paused=!0,this},E.prototype.wrap=function(t){var e=this,r=this._readableState,n=!1
for(var o in t.on("end",(function(){if(i("wrapped end"),r.decoder&&!r.ended){var t=r.decoder.end()
t&&t.length&&e.push(t)}e.push(null)})),t.on("data",(function(o){i("wrapped data"),r.decoder&&(o=r.decoder.write(o)),r.objectMode&&null==o||(r.objectMode||o&&o.length)&&(e.push(o)||(n=!0,t.pause()))})),t)void 0===this[o]&&"function"==typeof t[o]&&(this[o]=function(e){return function(){return t[e].apply(t,arguments)}}(o))
for(var a=0;a<M.length;a++)t.on(M[a],this.emit.bind(this,M[a]))
return this._read=function(e){i("wrapped _read",e),n&&(n=!1,t.resume())},this},"function"==typeof Symbol&&(E.prototype[Symbol.asyncIterator]=function(){return void 0===h&&(h=r(9355)),h(this)}),Object.defineProperty(E.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}}),Object.defineProperty(E.prototype,"readableBuffer",{enumerable:!1,get:function(){return this._readableState&&this._readableState.buffer}}),Object.defineProperty(E.prototype,"readableFlowing",{enumerable:!1,get:function(){return this._readableState.flowing},set:function(t){this._readableState&&(this._readableState.flowing=t)}}),E._fromList=D,Object.defineProperty(E.prototype,"readableLength",{enumerable:!1,get:function(){return this._readableState.length}}),"function"==typeof Symbol&&(E.from=function(t,e){return void 0===l&&(l=r(6475)),l(E,t,e)})},2550:(t,e,r)=>{"use strict"
t.exports=f
var n=r(654).q,i=n.ERR_METHOD_NOT_IMPLEMENTED,o=n.ERR_MULTIPLE_CALLBACK,a=n.ERR_TRANSFORM_ALREADY_TRANSFORMING,s=n.ERR_TRANSFORM_WITH_LENGTH_0,u=r(3510)
function c(t,e){var r=this._transformState
r.transforming=!1
var n=r.writecb
if(null===n)return this.emit("error",new o)
r.writechunk=null,r.writecb=null,null!=e&&this.push(e),n(t)
var i=this._readableState
i.reading=!1,(i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}function f(t){if(!(this instanceof f))return new f(t)
u.call(this,t),this._transformState={afterTransform:c.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,t&&("function"==typeof t.transform&&(this._transform=t.transform),"function"==typeof t.flush&&(this._flush=t.flush)),this.on("prefinish",h)}function h(){var t=this
"function"!=typeof this._flush||this._readableState.destroyed?l(this,null,null):this._flush((function(e,r){l(t,e,r)}))}function l(t,e,r){if(e)return t.emit("error",e)
if(null!=r&&t.push(r),t._writableState.length)throw new s
if(t._transformState.transforming)throw new a
return t.push(null)}r(1736)(f,u),f.prototype.push=function(t,e){return this._transformState.needTransform=!1,u.prototype.push.call(this,t,e)},f.prototype._transform=function(t,e,r){r(new i("_transform()"))},f.prototype._write=function(t,e,r){var n=this._transformState
if(n.writecb=r,n.writechunk=t,n.writeencoding=e,!n.transforming){var i=this._readableState;(n.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},f.prototype._read=function(t){var e=this._transformState
null===e.writechunk||e.transforming?e.needTransform=!0:(e.transforming=!0,this._transform(e.writechunk,e.writeencoding,e.afterTransform))},f.prototype._destroy=function(t,e){u.prototype._destroy.call(this,t,(function(t){e(t)}))}},2890:(t,e,r)=>{"use strict"
function n(t){var e=this
this.next=null,this.entry=null,this.finish=function(){!function(t,e,r){var n=t.entry
for(t.entry=null;n;){var i=n.callback
e.pendingcb--,i(void 0),n=n.next}e.corkedRequestsFree.next=t}(e,t)}}var i
t.exports=E,E.WritableState=S
var o,a={deprecate:r(6219)},s=r(8672),u=r(9033).Buffer,c=(void 0!==r.g?r.g:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{}).Uint8Array||function(){},f=r(6581),h=r(5738).getHighWaterMark,l=r(654).q,d=l.ERR_INVALID_ARG_TYPE,p=l.ERR_METHOD_NOT_IMPLEMENTED,b=l.ERR_MULTIPLE_CALLBACK,m=l.ERR_STREAM_CANNOT_PIPE,v=l.ERR_STREAM_DESTROYED,g=l.ERR_STREAM_NULL_VALUES,y=l.ERR_STREAM_WRITE_AFTER_END,w=l.ERR_UNKNOWN_ENCODING,_=f.errorOrDestroy
function M(){}function S(t,e,o){i=i||r(3510),t=t||{},"boolean"!=typeof o&&(o=e instanceof i),this.objectMode=!!t.objectMode,o&&(this.objectMode=this.objectMode||!!t.writableObjectMode),this.highWaterMark=h(this,t,"writableHighWaterMark",o),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1
var a=!1===t.decodeStrings
this.decodeStrings=!a,this.defaultEncoding=t.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(t){!function(t,e){var r=t._writableState,n=r.sync,i=r.writecb
if("function"!=typeof i)throw new b
if(function(t){t.writing=!1,t.writecb=null,t.length-=t.writelen,t.writelen=0}(r),e)!function(t,e,r,n,i){--e.pendingcb,r?(process.nextTick(i,n),process.nextTick(C,t,e),t._writableState.errorEmitted=!0,_(t,n)):(i(n),t._writableState.errorEmitted=!0,_(t,n),C(t,e))}(t,r,n,e,i)
else{var o=R(r)||t.destroyed
o||r.corked||r.bufferProcessing||!r.bufferedRequest||T(t,r),n?process.nextTick(A,t,r,o,i):A(t,r,o,i)}}(e,t)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.emitClose=!1!==t.emitClose,this.autoDestroy=!!t.autoDestroy,this.bufferedRequestCount=0,this.corkedRequestsFree=new n(this)}function E(t){var e=this instanceof(i=i||r(3510))
if(!e&&!o.call(E,this))return new E(t)
this._writableState=new S(t,this,e),this.writable=!0,t&&("function"==typeof t.write&&(this._write=t.write),"function"==typeof t.writev&&(this._writev=t.writev),"function"==typeof t.destroy&&(this._destroy=t.destroy),"function"==typeof t.final&&(this._final=t.final)),s.call(this)}function k(t,e,r,n,i,o,a){e.writelen=n,e.writecb=a,e.writing=!0,e.sync=!0,e.destroyed?e.onwrite(new v("write")):r?t._writev(i,e.onwrite):t._write(i,o,e.onwrite),e.sync=!1}function A(t,e,r,n){r||function(t,e){0===e.length&&e.needDrain&&(e.needDrain=!1,t.emit("drain"))}(t,e),e.pendingcb--,n(),C(t,e)}function T(t,e){e.bufferProcessing=!0
var r=e.bufferedRequest
if(t._writev&&r&&r.next){var i=e.bufferedRequestCount,o=new Array(i),a=e.corkedRequestsFree
a.entry=r
for(var s=0,u=!0;r;)o[s]=r,r.isBuf||(u=!1),r=r.next,s+=1
o.allBuffers=u,k(t,e,!0,e.length,o,"",a.finish),e.pendingcb++,e.lastBufferedRequest=null,a.next?(e.corkedRequestsFree=a.next,a.next=null):e.corkedRequestsFree=new n(e),e.bufferedRequestCount=0}else{for(;r;){var c=r.chunk,f=r.encoding,h=r.callback
if(k(t,e,!1,e.objectMode?1:c.length,c,f,h),r=r.next,e.bufferedRequestCount--,e.writing)break}null===r&&(e.lastBufferedRequest=null)}e.bufferedRequest=r,e.bufferProcessing=!1}function R(t){return t.ending&&0===t.length&&null===t.bufferedRequest&&!t.finished&&!t.writing}function x(t,e){t._final((function(r){e.pendingcb--,r&&_(t,r),e.prefinished=!0,t.emit("prefinish"),C(t,e)}))}function C(t,e){var r=R(e)
if(r&&(function(t,e){e.prefinished||e.finalCalled||("function"!=typeof t._final||e.destroyed?(e.prefinished=!0,t.emit("prefinish")):(e.pendingcb++,e.finalCalled=!0,process.nextTick(x,t,e)))}(t,e),0===e.pendingcb&&(e.finished=!0,t.emit("finish"),e.autoDestroy))){var n=t._readableState;(!n||n.autoDestroy&&n.endEmitted)&&t.destroy()}return r}r(1736)(E,s),S.prototype.getBuffer=function(){for(var t=this.bufferedRequest,e=[];t;)e.push(t),t=t.next
return e},function(){try{Object.defineProperty(S.prototype,"buffer",{get:a.deprecate((function(){return this.getBuffer()}),"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(t){}}(),"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(o=Function.prototype[Symbol.hasInstance],Object.defineProperty(E,Symbol.hasInstance,{value:function(t){return!!o.call(this,t)||this===E&&t&&t._writableState instanceof S}})):o=function(t){return t instanceof this},E.prototype.pipe=function(){_(this,new m)},E.prototype.write=function(t,e,r){var n,i=this._writableState,o=!1,a=!i.objectMode&&(n=t,u.isBuffer(n)||n instanceof c)
return a&&!u.isBuffer(t)&&(t=function(t){return u.from(t)}(t)),"function"==typeof e&&(r=e,e=null),a?e="buffer":e||(e=i.defaultEncoding),"function"!=typeof r&&(r=M),i.ending?function(t,e){var r=new y
_(t,r),process.nextTick(e,r)}(this,r):(a||function(t,e,r,n){var i
return null===r?i=new g:"string"==typeof r||e.objectMode||(i=new d("chunk",["string","Buffer"],r)),!i||(_(t,i),process.nextTick(n,i),!1)}(this,i,t,r))&&(i.pendingcb++,o=function(t,e,r,n,i,o){if(!r){var a=function(t,e,r){return t.objectMode||!1===t.decodeStrings||"string"!=typeof e||(e=u.from(e,r)),e}(e,n,i)
n!==a&&(r=!0,i="buffer",n=a)}var s=e.objectMode?1:n.length
e.length+=s
var c=e.length<e.highWaterMark
if(c||(e.needDrain=!0),e.writing||e.corked){var f=e.lastBufferedRequest
e.lastBufferedRequest={chunk:n,encoding:i,isBuf:r,callback:o,next:null},f?f.next=e.lastBufferedRequest:e.bufferedRequest=e.lastBufferedRequest,e.bufferedRequestCount+=1}else k(t,e,!1,s,n,i,o)
return c}(this,i,a,t,e,r)),o},E.prototype.cork=function(){this._writableState.corked++},E.prototype.uncork=function(){var t=this._writableState
t.corked&&(t.corked--,t.writing||t.corked||t.bufferProcessing||!t.bufferedRequest||T(this,t))},E.prototype.setDefaultEncoding=function(t){if("string"==typeof t&&(t=t.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((t+"").toLowerCase())>-1))throw new w(t)
return this._writableState.defaultEncoding=t,this},Object.defineProperty(E.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(E.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),E.prototype._write=function(t,e,r){r(new p("_write()"))},E.prototype._writev=null,E.prototype.end=function(t,e,r){var n=this._writableState
return"function"==typeof t?(r=t,t=null,e=null):"function"==typeof e&&(r=e,e=null),null!=t&&this.write(t,e),n.corked&&(n.corked=1,this.uncork()),n.ending||function(t,e,r){e.ending=!0,C(t,e),r&&(e.finished?process.nextTick(r):t.once("finish",r)),e.ended=!0,t.writable=!1}(this,n,r),this},Object.defineProperty(E.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(E.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(t){this._writableState&&(this._writableState.destroyed=t)}}),E.prototype.destroy=f.destroy,E.prototype._undestroy=f.undestroy,E.prototype._destroy=function(t,e){e(t)}},9355:(t,e,r)=>{"use strict"
var n
function i(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t
var r=t[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(t,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t)
return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var o=r(8497),a=Symbol("lastResolve"),s=Symbol("lastReject"),u=Symbol("error"),c=Symbol("ended"),f=Symbol("lastPromise"),h=Symbol("handlePromise"),l=Symbol("stream")
function d(t,e){return{value:t,done:e}}function p(t){var e=t[a]
if(null!==e){var r=t[l].read()
null!==r&&(t[f]=null,t[a]=null,t[s]=null,e(d(r,!1)))}}function b(t){process.nextTick(p,t)}var m=Object.getPrototypeOf((function(){})),v=Object.setPrototypeOf((i(n={get stream(){return this[l]},next:function(){var t=this,e=this[u]
if(null!==e)return Promise.reject(e)
if(this[c])return Promise.resolve(d(void 0,!0))
if(this[l].destroyed)return new Promise((function(e,r){process.nextTick((function(){t[u]?r(t[u]):e(d(void 0,!0))}))}))
var r,n=this[f]
if(n)r=new Promise(function(t,e){return function(r,n){t.then((function(){e[c]?r(d(void 0,!0)):e[h](r,n)}),n)}}(n,this))
else{var i=this[l].read()
if(null!==i)return Promise.resolve(d(i,!1))
r=new Promise(this[h])}return this[f]=r,r}},Symbol.asyncIterator,(function(){return this})),i(n,"return",(function(){var t=this
return new Promise((function(e,r){t[l].destroy(null,(function(t){t?r(t):e(d(void 0,!0))}))}))})),n),m)
t.exports=function(t){var e,r=Object.create(v,(i(e={},l,{value:t,writable:!0}),i(e,a,{value:null,writable:!0}),i(e,s,{value:null,writable:!0}),i(e,u,{value:null,writable:!0}),i(e,c,{value:t._readableState.endEmitted,writable:!0}),i(e,h,{value:function(t,e){var n=r[l].read()
n?(r[f]=null,r[a]=null,r[s]=null,t(d(n,!1))):(r[a]=t,r[s]=e)},writable:!0}),e))
return r[f]=null,o(t,(function(t){if(t&&"ERR_STREAM_PREMATURE_CLOSE"!==t.code){var e=r[s]
return null!==e&&(r[f]=null,r[a]=null,r[s]=null,e(t)),void(r[u]=t)}var n=r[a]
null!==n&&(r[f]=null,r[a]=null,r[s]=null,n(d(void 0,!0))),r[c]=!0})),t.on("readable",b.bind(null,r)),r}},1714:(t,e,r)=>{"use strict"
function n(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{}
e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e,r){return(e=a(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t){var e=function(t,e){if("object"!=typeof t||null===t)return t
var r=t[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(t,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t)
return"symbol"==typeof e?e:String(e)}var s=r(9033).Buffer,u=r(9862).inspect,c=u&&u.custom||"inspect"
t.exports=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.head=null,this.tail=null,this.length=0}var e,r
return e=t,(r=[{key:"push",value:function(t){var e={data:t,next:null}
this.length>0?this.tail.next=e:this.head=e,this.tail=e,++this.length}},{key:"unshift",value:function(t){var e={data:t,next:this.head}
0===this.length&&(this.tail=e),this.head=e,++this.length}},{key:"shift",value:function(){if(0!==this.length){var t=this.head.data
return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,t}}},{key:"clear",value:function(){this.head=this.tail=null,this.length=0}},{key:"join",value:function(t){if(0===this.length)return""
for(var e=this.head,r=""+e.data;e=e.next;)r+=t+e.data
return r}},{key:"concat",value:function(t){if(0===this.length)return s.alloc(0)
for(var e,r,n,i=s.allocUnsafe(t>>>0),o=this.head,a=0;o;)e=o.data,r=i,n=a,s.prototype.copy.call(e,r,n),a+=o.data.length,o=o.next
return i}},{key:"consume",value:function(t,e){var r
return t<this.head.data.length?(r=this.head.data.slice(0,t),this.head.data=this.head.data.slice(t)):r=t===this.head.data.length?this.shift():e?this._getString(t):this._getBuffer(t),r}},{key:"first",value:function(){return this.head.data}},{key:"_getString",value:function(t){var e=this.head,r=1,n=e.data
for(t-=n.length;e=e.next;){var i=e.data,o=t>i.length?i.length:t
if(o===i.length?n+=i:n+=i.slice(0,t),0==(t-=o)){o===i.length?(++r,e.next?this.head=e.next:this.head=this.tail=null):(this.head=e,e.data=i.slice(o))
break}++r}return this.length-=r,n}},{key:"_getBuffer",value:function(t){var e=s.allocUnsafe(t),r=this.head,n=1
for(r.data.copy(e),t-=r.data.length;r=r.next;){var i=r.data,o=t>i.length?i.length:t
if(i.copy(e,e.length-t,0,o),0==(t-=o)){o===i.length?(++n,r.next?this.head=r.next:this.head=this.tail=null):(this.head=r,r.data=i.slice(o))
break}++n}return this.length-=n,e}},{key:c,value:function(t,e){return u(this,i(i({},e),{},{depth:0,customInspect:!1}))}}])&&function(t,e){for(var r=0;r<e.length;r++){var n=e[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,a(n.key),n)}}(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}()},6581:t=>{"use strict"
function e(t,e){n(t,e),r(t)}function r(t){t._writableState&&!t._writableState.emitClose||t._readableState&&!t._readableState.emitClose||t.emit("close")}function n(t,e){t.emit("error",e)}t.exports={destroy:function(t,i){var o=this,a=this._readableState&&this._readableState.destroyed,s=this._writableState&&this._writableState.destroyed
return a||s?(i?i(t):t&&(this._writableState?this._writableState.errorEmitted||(this._writableState.errorEmitted=!0,process.nextTick(n,this,t)):process.nextTick(n,this,t)),this):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(t||null,(function(t){!i&&t?o._writableState?o._writableState.errorEmitted?process.nextTick(r,o):(o._writableState.errorEmitted=!0,process.nextTick(e,o,t)):process.nextTick(e,o,t):i?(process.nextTick(r,o),i(t)):process.nextTick(r,o)})),this)},undestroy:function(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finalCalled=!1,this._writableState.prefinished=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)},errorOrDestroy:function(t,e){var r=t._readableState,n=t._writableState
r&&r.autoDestroy||n&&n.autoDestroy?t.destroy(e):t.emit("error",e)}}},8497:(t,e,r)=>{"use strict"
var n=r(654).q.ERR_STREAM_PREMATURE_CLOSE
function i(){}t.exports=function t(e,r,o){if("function"==typeof r)return t(e,null,r)
r||(r={}),o=function(t){var e=!1
return function(){if(!e){e=!0
for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i]
t.apply(this,n)}}}(o||i)
var a=r.readable||!1!==r.readable&&e.readable,s=r.writable||!1!==r.writable&&e.writable,u=function(){e.writable||f()},c=e._writableState&&e._writableState.finished,f=function(){s=!1,c=!0,a||o.call(e)},h=e._readableState&&e._readableState.endEmitted,l=function(){a=!1,h=!0,s||o.call(e)},d=function(t){o.call(e,t)},p=function(){var t
return a&&!h?(e._readableState&&e._readableState.ended||(t=new n),o.call(e,t)):s&&!c?(e._writableState&&e._writableState.ended||(t=new n),o.call(e,t)):void 0},b=function(){e.req.on("finish",f)}
return function(t){return t.setHeader&&"function"==typeof t.abort}(e)?(e.on("complete",f),e.on("abort",p),e.req?b():e.on("request",b)):s&&!e._writableState&&(e.on("end",u),e.on("close",u)),e.on("end",l),e.on("finish",f),!1!==r.error&&e.on("error",d),e.on("close",p),function(){e.removeListener("complete",f),e.removeListener("abort",p),e.removeListener("request",b),e.req&&e.req.removeListener("finish",f),e.removeListener("end",u),e.removeListener("close",u),e.removeListener("finish",f),e.removeListener("end",l),e.removeListener("error",d),e.removeListener("close",p)}}},6475:t=>{t.exports=function(){throw new Error("Readable.from is not available in the browser")}},2129:(t,e,r)=>{"use strict"
var n,i=r(654).q,o=i.ERR_MISSING_ARGS,a=i.ERR_STREAM_DESTROYED
function s(t){if(t)throw t}function u(t){t()}function c(t,e){return t.pipe(e)}t.exports=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
var f,h=function(t){return t.length?"function"!=typeof t[t.length-1]?s:t.pop():s}(e)
if(Array.isArray(e[0])&&(e=e[0]),e.length<2)throw new o("streams")
var l=e.map((function(t,i){var o=i<e.length-1
return function(t,e,i,o){o=function(t){var e=!1
return function(){e||(e=!0,t.apply(void 0,arguments))}}(o)
var s=!1
t.on("close",(function(){s=!0})),void 0===n&&(n=r(8497)),n(t,{readable:e,writable:i},(function(t){if(t)return o(t)
s=!0,o()}))
var u=!1
return function(e){if(!s&&!u)return u=!0,function(t){return t.setHeader&&"function"==typeof t.abort}(t)?t.abort():"function"==typeof t.destroy?t.destroy():void o(e||new a("pipe"))}}(t,o,i>0,(function(t){f||(f=t),t&&l.forEach(u),o||(l.forEach(u),h(f))}))}))
return e.reduce(c)}},5738:(t,e,r)=>{"use strict"
var n=r(654).q.ERR_INVALID_OPT_VALUE
t.exports={getHighWaterMark:function(t,e,r,i){var o=function(t,e,r){return null!=t.highWaterMark?t.highWaterMark:e?t[r]:null}(e,i,r)
if(null!=o){if(!isFinite(o)||Math.floor(o)!==o||o<0)throw new n(i?r:"highWaterMark",o)
return Math.floor(o)}return t.objectMode?16:16384}}},8672:(t,e,r)=>{t.exports=r(8291).EventEmitter},6878:(t,e,r)=>{"use strict"
var n=r(8850).Buffer,i=n.isEncoding||function(t){switch((t=""+t)&&t.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0
default:return!1}}
function o(t){var e
switch(this.encoding=function(t){var e=function(t){if(!t)return"utf8"
for(var e;;)switch(t){case"utf8":case"utf-8":return"utf8"
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le"
case"latin1":case"binary":return"latin1"
case"base64":case"ascii":case"hex":return t
default:if(e)return
t=(""+t).toLowerCase(),e=!0}}(t)
if("string"!=typeof e&&(n.isEncoding===i||!i(t)))throw new Error("Unknown encoding: "+t)
return e||t}(t),this.encoding){case"utf16le":this.text=u,this.end=c,e=4
break
case"utf8":this.fillLast=s,e=4
break
case"base64":this.text=f,this.end=h,e=3
break
default:return this.write=l,void(this.end=d)}this.lastNeed=0,this.lastTotal=0,this.lastChar=n.allocUnsafe(e)}function a(t){return t<=127?0:t>>5==6?2:t>>4==14?3:t>>3==30?4:t>>6==2?-1:-2}function s(t){var e=this.lastTotal-this.lastNeed,r=function(t,e,r){if(128!=(192&e[0]))return t.lastNeed=0,"�"
if(t.lastNeed>1&&e.length>1){if(128!=(192&e[1]))return t.lastNeed=1,"�"
if(t.lastNeed>2&&e.length>2&&128!=(192&e[2]))return t.lastNeed=2,"�"}}(this,t)
return void 0!==r?r:this.lastNeed<=t.length?(t.copy(this.lastChar,e,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(t.copy(this.lastChar,e,0,t.length),void(this.lastNeed-=t.length))}function u(t,e){if((t.length-e)%2==0){var r=t.toString("utf16le",e)
if(r){var n=r.charCodeAt(r.length-1)
if(n>=55296&&n<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1],r.slice(0,-1)}return r}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=t[t.length-1],t.toString("utf16le",e,t.length-1)}function c(t){var e=t&&t.length?this.write(t):""
if(this.lastNeed){var r=this.lastTotal-this.lastNeed
return e+this.lastChar.toString("utf16le",0,r)}return e}function f(t,e){var r=(t.length-e)%3
return 0===r?t.toString("base64",e):(this.lastNeed=3-r,this.lastTotal=3,1===r?this.lastChar[0]=t[t.length-1]:(this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1]),t.toString("base64",e,t.length-r))}function h(t){var e=t&&t.length?this.write(t):""
return this.lastNeed?e+this.lastChar.toString("base64",0,3-this.lastNeed):e}function l(t){return t.toString(this.encoding)}function d(t){return t&&t.length?this.write(t):""}e.s=o,o.prototype.write=function(t){if(0===t.length)return""
var e,r
if(this.lastNeed){if(void 0===(e=this.fillLast(t)))return""
r=this.lastNeed,this.lastNeed=0}else r=0
return r<t.length?e?e+this.text(t,r):this.text(t,r):e||""},o.prototype.end=function(t){var e=t&&t.length?this.write(t):""
return this.lastNeed?e+"�":e},o.prototype.text=function(t,e){var r=function(t,e,r){var n=e.length-1
if(n<r)return 0
var i=a(e[n])
return i>=0?(i>0&&(t.lastNeed=i-1),i):--n<r||-2===i?0:(i=a(e[n]))>=0?(i>0&&(t.lastNeed=i-2),i):--n<r||-2===i?0:(i=a(e[n]))>=0?(i>0&&(2===i?i=0:t.lastNeed=i-3),i):0}(this,t,e)
if(!this.lastNeed)return t.toString("utf8",e)
this.lastTotal=r
var n=t.length-(r-this.lastNeed)
return t.copy(this.lastChar,0,n),t.toString("utf8",e,n)},o.prototype.fillLast=function(t){if(this.lastNeed<=t.length)return t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)
t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,t.length),this.lastNeed-=t.length}},9602:(t,e,r)=>{var n=r(9033).Buffer,i=n.isEncoding||function(t){switch(t&&t.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0
default:return!1}},o=e.s=function(t){switch(this.encoding=(t||"utf8").toLowerCase().replace(/[-_]/,""),function(t){if(t&&!i(t))throw new Error("Unknown encoding: "+t)}(t),this.encoding){case"utf8":this.surrogateSize=3
break
case"ucs2":case"utf16le":this.surrogateSize=2,this.detectIncompleteChar=s
break
case"base64":this.surrogateSize=3,this.detectIncompleteChar=u
break
default:return void(this.write=a)}this.charBuffer=new n(6),this.charReceived=0,this.charLength=0}
function a(t){return t.toString(this.encoding)}function s(t){this.charReceived=t.length%2,this.charLength=this.charReceived?2:0}function u(t){this.charReceived=t.length%3,this.charLength=this.charReceived?3:0}o.prototype.write=function(t){for(var e="";this.charLength;){var r=t.length>=this.charLength-this.charReceived?this.charLength-this.charReceived:t.length
if(t.copy(this.charBuffer,this.charReceived,0,r),this.charReceived+=r,this.charReceived<this.charLength)return""
if(t=t.slice(r,t.length),!((n=(e=this.charBuffer.slice(0,this.charLength).toString(this.encoding)).charCodeAt(e.length-1))>=55296&&n<=56319)){if(this.charReceived=this.charLength=0,0===t.length)return e
break}this.charLength+=this.surrogateSize,e=""}this.detectIncompleteChar(t)
var n,i=t.length
if(this.charLength&&(t.copy(this.charBuffer,0,t.length-this.charReceived,i),i-=this.charReceived),i=(e+=t.toString(this.encoding,0,i)).length-1,(n=e.charCodeAt(i))>=55296&&n<=56319){var o=this.surrogateSize
return this.charLength+=o,this.charReceived+=o,this.charBuffer.copy(this.charBuffer,o,0,o),t.copy(this.charBuffer,0,0,o),e.substring(0,i)}return e},o.prototype.detectIncompleteChar=function(t){for(var e=t.length>=3?3:t.length;e>0;e--){var r=t[t.length-e]
if(1==e&&r>>5==6){this.charLength=2
break}if(e<=2&&r>>4==14){this.charLength=3
break}if(e<=3&&r>>3==30){this.charLength=4
break}}this.charReceived=e},o.prototype.end=function(t){var e=""
if(t&&t.length&&(e=this.write(t)),this.charReceived){var r=this.charReceived,n=this.charBuffer,i=this.encoding
e+=n.slice(0,r).toString(i)}return e}},7480:(t,e,r)=>{"use strict"
r.d(e,{ZT:()=>i,ev:()=>a,pi:()=>o})
var n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)}
function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null")
function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var o=function(){return o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])
return t},o.apply(this,arguments)}
function a(t,e,r){if(r||2===arguments.length)for(var n,i=0,o=e.length;i<o;i++)!n&&i in e||(n||(n=Array.prototype.slice.call(e,0,i)),n[i]=e[i])
return t.concat(n||Array.prototype.slice.call(e))}Object.create,Object.create},1895:function(t,e,r){var n
!function(i,o){"use strict"
var a="function",s="undefined",u="object",c="string",f="major",h="model",l="name",d="type",p="vendor",b="version",m="architecture",v="console",g="mobile",y="tablet",w="smarttv",_="wearable",M="embedded",S="Amazon",E="Apple",k="ASUS",A="BlackBerry",T="Browser",R="Chrome",x="Firefox",C="Google",I="Huawei",B="LG",O="Microsoft",P="Motorola",L="Opera",N="Samsung",D="Sharp",j="Sony",U="Xiaomi",H="Zebra",q="Facebook",F="Chromium OS",z="Mac OS",W=function(t){for(var e={},r=0;r<t.length;r++)e[t[r].toUpperCase()]=t[r]
return e},K=function(t,e){return typeof t===c&&-1!==G(e).indexOf(G(t))},G=function(t){return t.toLowerCase()},Y=function(t,e){if(typeof t===c)return t=t.replace(/^\s\s*/,""),typeof e===s?t:t.substring(0,350)},V=function(t,e){for(var r,n,i,s,c,f,h=0;h<e.length&&!c;){var l=e[h],d=e[h+1]
for(r=n=0;r<l.length&&!c&&l[r];)if(c=l[r++].exec(t))for(i=0;i<d.length;i++)f=c[++n],typeof(s=d[i])===u&&s.length>0?2===s.length?typeof s[1]==a?this[s[0]]=s[1].call(this,f):this[s[0]]=s[1]:3===s.length?typeof s[1]!==a||s[1].exec&&s[1].test?this[s[0]]=f?f.replace(s[1],s[2]):o:this[s[0]]=f?s[1].call(this,f,s[2]):o:4===s.length&&(this[s[0]]=f?s[3].call(this,f.replace(s[1],s[2])):o):this[s]=f||o
h+=2}},X=function(t,e){for(var r in e)if(typeof e[r]===u&&e[r].length>0){for(var n=0;n<e[r].length;n++)if(K(e[r][n],t))return"?"===r?o:r}else if(K(e[r],t))return"?"===r?o:r
return t},Z={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},J={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[b,[l,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[b,[l,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[l,b],[/opios[\/ ]+([\w\.]+)/i],[b,[l,L+" Mini"]],[/\bopr\/([\w\.]+)/i],[b,[l,L]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[l,b],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[b,[l,"UC"+T]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[b,[l,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[b,[l,"WeChat"]],[/konqueror\/([\w\.]+)/i],[b,[l,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[b,[l,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[b,[l,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[l,/(.+)/,"$1 Secure "+T],b],[/\bfocus\/([\w\.]+)/i],[b,[l,x+" Focus"]],[/\bopt\/([\w\.]+)/i],[b,[l,L+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[b,[l,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[b,[l,"Dolphin"]],[/coast\/([\w\.]+)/i],[b,[l,L+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[b,[l,"MIUI "+T]],[/fxios\/([-\w\.]+)/i],[b,[l,x]],[/\bqihu|(qi?ho?o?|360)browser/i],[[l,"360 "+T]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[l,/(.+)/,"$1 "+T],b],[/(comodo_dragon)\/([\w\.]+)/i],[[l,/_/g," "],b],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[l,b],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[l],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[l,q],b],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[l,b],[/\bgsa\/([\w\.]+) .*safari\//i],[b,[l,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[b,[l,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[b,[l,R+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[l,R+" WebView"],b],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[b,[l,"Android "+T]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[l,b],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[b,[l,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[b,l],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[l,[b,X,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[l,b],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[l,"Netscape"],b],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[b,[l,x+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[l,b],[/(cobalt)\/([\w\.]+)/i],[l,[b,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[m,"amd64"]],[/(ia32(?=;))/i],[[m,G]],[/((?:i[346]|x)86)[;\)]/i],[[m,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[m,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[m,"armhf"]],[/windows (ce|mobile); ppc;/i],[[m,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[m,/ower/,"",G]],[/(sun4\w)[;\)]/i],[[m,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[m,G]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[h,[p,N],[d,y]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[h,[p,N],[d,g]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[h,[p,E],[d,g]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[h,[p,E],[d,y]],[/(macintosh);/i],[h,[p,E]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[h,[p,D],[d,g]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[h,[p,I],[d,y]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[h,[p,I],[d,g]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[h,/_/g," "],[p,U],[d,g]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[h,/_/g," "],[p,U],[d,y]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[h,[p,"OPPO"],[d,g]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[h,[p,"Vivo"],[d,g]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[h,[p,"Realme"],[d,g]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[h,[p,P],[d,g]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[h,[p,P],[d,y]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[h,[p,B],[d,y]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[h,[p,B],[d,g]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[h,[p,"Lenovo"],[d,y]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[h,/_/g," "],[p,"Nokia"],[d,g]],[/(pixel c)\b/i],[h,[p,C],[d,y]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[h,[p,C],[d,g]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[h,[p,j],[d,g]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[h,"Xperia Tablet"],[p,j],[d,y]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[h,[p,"OnePlus"],[d,g]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[h,[p,S],[d,y]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[h,/(.+)/g,"Fire Phone $1"],[p,S],[d,g]],[/(playbook);[-\w\),; ]+(rim)/i],[h,p,[d,y]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[h,[p,A],[d,g]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[h,[p,k],[d,y]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[h,[p,k],[d,g]],[/(nexus 9)/i],[h,[p,"HTC"],[d,y]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[p,[h,/_/g," "],[d,g]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[h,[p,"Acer"],[d,y]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[h,[p,"Meizu"],[d,g]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[p,h,[d,g]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[p,h,[d,y]],[/(surface duo)/i],[h,[p,O],[d,y]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[h,[p,"Fairphone"],[d,g]],[/(u304aa)/i],[h,[p,"AT&T"],[d,g]],[/\bsie-(\w*)/i],[h,[p,"Siemens"],[d,g]],[/\b(rct\w+) b/i],[h,[p,"RCA"],[d,y]],[/\b(venue[\d ]{2,7}) b/i],[h,[p,"Dell"],[d,y]],[/\b(q(?:mv|ta)\w+) b/i],[h,[p,"Verizon"],[d,y]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[h,[p,"Barnes & Noble"],[d,y]],[/\b(tm\d{3}\w+) b/i],[h,[p,"NuVision"],[d,y]],[/\b(k88) b/i],[h,[p,"ZTE"],[d,y]],[/\b(nx\d{3}j) b/i],[h,[p,"ZTE"],[d,g]],[/\b(gen\d{3}) b.+49h/i],[h,[p,"Swiss"],[d,g]],[/\b(zur\d{3}) b/i],[h,[p,"Swiss"],[d,y]],[/\b((zeki)?tb.*\b) b/i],[h,[p,"Zeki"],[d,y]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[p,"Dragon Touch"],h,[d,y]],[/\b(ns-?\w{0,9}) b/i],[h,[p,"Insignia"],[d,y]],[/\b((nxa|next)-?\w{0,9}) b/i],[h,[p,"NextBook"],[d,y]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[p,"Voice"],h,[d,g]],[/\b(lvtel\-)?(v1[12]) b/i],[[p,"LvTel"],h,[d,g]],[/\b(ph-1) /i],[h,[p,"Essential"],[d,g]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[h,[p,"Envizen"],[d,y]],[/\b(trio[-\w\. ]+) b/i],[h,[p,"MachSpeed"],[d,y]],[/\btu_(1491) b/i],[h,[p,"Rotor"],[d,y]],[/(shield[\w ]+) b/i],[h,[p,"Nvidia"],[d,y]],[/(sprint) (\w+)/i],[p,h,[d,g]],[/(kin\.[onetw]{3})/i],[[h,/\./g," "],[p,O],[d,g]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[h,[p,H],[d,y]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[h,[p,H],[d,g]],[/smart-tv.+(samsung)/i],[p,[d,w]],[/hbbtv.+maple;(\d+)/i],[[h,/^/,"SmartTV"],[p,N],[d,w]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[p,B],[d,w]],[/(apple) ?tv/i],[p,[h,E+" TV"],[d,w]],[/crkey/i],[[h,R+"cast"],[p,C],[d,w]],[/droid.+aft(\w)( bui|\))/i],[h,[p,S],[d,w]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[h,[p,D],[d,w]],[/(bravia[\w ]+)( bui|\))/i],[h,[p,j],[d,w]],[/(mitv-\w{5}) bui/i],[h,[p,U],[d,w]],[/Hbbtv.*(technisat) (.*);/i],[p,h,[d,w]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[p,Y],[h,Y],[d,w]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[d,w]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[p,h,[d,v]],[/droid.+; (shield) bui/i],[h,[p,"Nvidia"],[d,v]],[/(playstation [345portablevi]+)/i],[h,[p,j],[d,v]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[h,[p,O],[d,v]],[/((pebble))app/i],[p,h,[d,_]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[h,[p,E],[d,_]],[/droid.+; (glass) \d/i],[h,[p,C],[d,_]],[/droid.+; (wt63?0{2,3})\)/i],[h,[p,H],[d,_]],[/(quest( 2| pro)?)/i],[h,[p,q],[d,_]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[p,[d,M]],[/(aeobc)\b/i],[h,[p,S],[d,M]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[h,[d,g]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[h,[d,y]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[d,y]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[d,g]],[/(android[-\w\. ]{0,9});.+buil/i],[h,[p,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[b,[l,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[b,[l,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[l,b],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[b,l]],os:[[/microsoft (windows) (vista|xp)/i],[l,b],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[l,[b,X,Z]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[l,"Windows"],[b,X,Z]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/ios;fbsv\/([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[b,/_/g,"."],[l,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[l,z],[b,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[b,l],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[l,b],[/\(bb(10);/i],[b,[l,A]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[b,[l,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[b,[l,x+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[b,[l,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[b,[l,"watchOS"]],[/crkey\/([\d\.]+)/i],[b,[l,R+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[l,F],b],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[l,b],[/(sunos) ?([\w\.\d]*)/i],[[l,"Solaris"],b],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[l,b]]},$=function t(e,r){if(typeof e===u&&(r=e,e=o),!(this instanceof t))return new t(e,r).getResult()
var n=typeof i!==s&&i.navigator?i.navigator:o,v=e||(n&&n.userAgent?n.userAgent:""),w=n&&n.userAgentData?n.userAgentData:o,_=r?function(t,e){var r={}
for(var n in t)e[n]&&e[n].length%2==0?r[n]=e[n].concat(t[n]):r[n]=t[n]
return r}(J,r):J,M=n&&n.userAgent==v
return this.getBrowser=function(){var t,e={}
return e[l]=o,e[b]=o,V.call(e,v,_.browser),e[f]=typeof(t=e[b])===c?t.replace(/[^\d\.]/g,"").split(".")[0]:o,M&&n&&n.brave&&typeof n.brave.isBrave==a&&(e[l]="Brave"),e},this.getCPU=function(){var t={}
return t[m]=o,V.call(t,v,_.cpu),t},this.getDevice=function(){var t={}
return t[p]=o,t[h]=o,t[d]=o,V.call(t,v,_.device),M&&!t[d]&&w&&w.mobile&&(t[d]=g),M&&"Macintosh"==t[h]&&n&&typeof n.standalone!==s&&n.maxTouchPoints&&n.maxTouchPoints>2&&(t[h]="iPad",t[d]=y),t},this.getEngine=function(){var t={}
return t[l]=o,t[b]=o,V.call(t,v,_.engine),t},this.getOS=function(){var t={}
return t[l]=o,t[b]=o,V.call(t,v,_.os),M&&!t[l]&&w&&"Unknown"!=w.platform&&(t[l]=w.platform.replace(/chrome os/i,F).replace(/macos/i,z)),t},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return v},this.setUA=function(t){return v=typeof t===c&&t.length>350?Y(t,350):t,this},this.setUA(v),this}
$.VERSION="0.7.35",$.BROWSER=W([l,b,f]),$.CPU=W([m]),$.DEVICE=W([h,p,d,v,g,w,y,_,M]),$.ENGINE=$.OS=W([l,b]),typeof e!==s?(t.exports&&(e=t.exports=$),e.UAParser=$):r.amdO?(n=function(){return $}.call(e,r,e,t))===o||(t.exports=n):typeof i!==s&&(i.UAParser=$)
var Q=typeof i!==s&&(i.jQuery||i.Zepto)
if(Q&&!Q.ua){var tt=new $
Q.ua=tt.getResult(),Q.ua.get=function(){return tt.getUA()},Q.ua.set=function(t){tt.setUA(t)
var e=tt.getResult()
for(var r in e)Q.ua[r]=e[r]}}}("object"==typeof window?window:this)},6219:(t,e,r)=>{function n(t){try{if(!r.g.localStorage)return!1}catch(t){return!1}var e=r.g.localStorage[t]
return null!=e&&"true"===String(e).toLowerCase()}t.exports=function(t,e){if(n("noDeprecation"))return t
var r=!1
return function(){if(!r){if(n("throwDeprecation"))throw new Error(e)
n("traceDeprecation")?console.trace(e):console.warn(e),r=!0}return t.apply(this,arguments)}}},4946:t=>{"use strict"
t.exports=JSON.parse('{"aes-128-ecb":{"cipher":"AES","key":128,"iv":0,"mode":"ECB","type":"block"},"aes-192-ecb":{"cipher":"AES","key":192,"iv":0,"mode":"ECB","type":"block"},"aes-256-ecb":{"cipher":"AES","key":256,"iv":0,"mode":"ECB","type":"block"},"aes-128-cbc":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes-192-cbc":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes-256-cbc":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes128":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes192":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes256":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes-128-cfb":{"cipher":"AES","key":128,"iv":16,"mode":"CFB","type":"stream"},"aes-192-cfb":{"cipher":"AES","key":192,"iv":16,"mode":"CFB","type":"stream"},"aes-256-cfb":{"cipher":"AES","key":256,"iv":16,"mode":"CFB","type":"stream"},"aes-128-cfb8":{"cipher":"AES","key":128,"iv":16,"mode":"CFB8","type":"stream"},"aes-192-cfb8":{"cipher":"AES","key":192,"iv":16,"mode":"CFB8","type":"stream"},"aes-256-cfb8":{"cipher":"AES","key":256,"iv":16,"mode":"CFB8","type":"stream"},"aes-128-cfb1":{"cipher":"AES","key":128,"iv":16,"mode":"CFB1","type":"stream"},"aes-192-cfb1":{"cipher":"AES","key":192,"iv":16,"mode":"CFB1","type":"stream"},"aes-256-cfb1":{"cipher":"AES","key":256,"iv":16,"mode":"CFB1","type":"stream"},"aes-128-ofb":{"cipher":"AES","key":128,"iv":16,"mode":"OFB","type":"stream"},"aes-192-ofb":{"cipher":"AES","key":192,"iv":16,"mode":"OFB","type":"stream"},"aes-256-ofb":{"cipher":"AES","key":256,"iv":16,"mode":"OFB","type":"stream"},"aes-128-ctr":{"cipher":"AES","key":128,"iv":16,"mode":"CTR","type":"stream"},"aes-192-ctr":{"cipher":"AES","key":192,"iv":16,"mode":"CTR","type":"stream"},"aes-256-ctr":{"cipher":"AES","key":256,"iv":16,"mode":"CTR","type":"stream"},"aes-128-gcm":{"cipher":"AES","key":128,"iv":12,"mode":"GCM","type":"auth"},"aes-192-gcm":{"cipher":"AES","key":192,"iv":12,"mode":"GCM","type":"auth"},"aes-256-gcm":{"cipher":"AES","key":256,"iv":12,"mode":"GCM","type":"auth"}}')},5207:t=>{"use strict"
t.exports=JSON.parse('{"sha224WithRSAEncryption":{"sign":"rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"RSA-SHA224":{"sign":"ecdsa/rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"sha256WithRSAEncryption":{"sign":"rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"RSA-SHA256":{"sign":"ecdsa/rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"sha384WithRSAEncryption":{"sign":"rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"RSA-SHA384":{"sign":"ecdsa/rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"sha512WithRSAEncryption":{"sign":"rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA512":{"sign":"ecdsa/rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA1":{"sign":"rsa","hash":"sha1","id":"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{"sign":"ecdsa","hash":"sha1","id":""},"sha256":{"sign":"ecdsa","hash":"sha256","id":""},"sha224":{"sign":"ecdsa","hash":"sha224","id":""},"sha384":{"sign":"ecdsa","hash":"sha384","id":""},"sha512":{"sign":"ecdsa","hash":"sha512","id":""},"DSA-SHA":{"sign":"dsa","hash":"sha1","id":""},"DSA-SHA1":{"sign":"dsa","hash":"sha1","id":""},"DSA":{"sign":"dsa","hash":"sha1","id":""},"DSA-WITH-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-WITH-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-WITH-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-WITH-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-RIPEMD160":{"sign":"dsa","hash":"rmd160","id":""},"ripemd160WithRSA":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"RSA-RIPEMD160":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"md5WithRSAEncryption":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"},"RSA-MD5":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"}}')},1308:t=>{"use strict"
t.exports=JSON.parse('{"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}')},9799:t=>{"use strict"
t.exports=JSON.parse('{"modp1":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},"modp2":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},"modp5":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},"modp14":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},"modp15":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},"modp16":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},"modp17":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},"modp18":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}')},8597:t=>{"use strict"
t.exports={i8:"6.5.4"}},2562:t=>{"use strict"
t.exports=JSON.parse('{"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}')}}])

//# sourceMappingURL=chunk.813.060da1ced98bc5575a9d.map