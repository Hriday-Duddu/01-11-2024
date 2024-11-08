"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4304],{4304:function(t,e,n){let i,r,a,o,s,l;n.d(e,{r:function(){return tD}});var c,u,f=n(4444),p=n(3333),d=n(2238),g=n(740);let m="@firebase/installations",h="0.5.6",w=`w:${h}`,b="FIS_v2",v=new f.LL("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function _(t){return t instanceof f.ZR&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function y(t){return{token:t.token,requestStatus:2,expiresIn:Number(t.expiresIn.replace("s","000")),creationTime:Date.now()}}async function I(t,e){let n=await e.json(),i=n.error;return v.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function S({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}async function E(t){let e=await t();return e.status>=500&&e.status<600?t():e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k({appConfig:t,heartbeatServiceProvider:e},{fid:n}){let i=T(t),r=S(t),a=e.getImmediate({optional:!0});if(a){let t=await a.getHeartbeatsHeader();t&&r.append("x-firebase-client",t)}let o={fid:n,authVersion:b,appId:t.appId,sdkVersion:w},s={method:"POST",headers:r,body:JSON.stringify(o)},l=await E(()=>fetch(i,s));if(l.ok){let t=await l.json(),e={fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:y(t.authToken)};return e}throw await I("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let N=/^[cdef][\w-]{21}$/;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let C=new Map;function O(t,e){let n=M(t);P(n,e),function(t,e){let n=(!j&&"BroadcastChannel"in self&&((j=new BroadcastChannel("[Firebase] FID Change")).onmessage=t=>{P(t.data.key,t.data.fid)}),j);n&&n.postMessage({key:t,fid:e}),0===C.size&&j&&(j.close(),j=null)}(n,e)}function P(t,e){let n=C.get(t);if(n)for(let t of n)t(e)}let j=null,q="firebase-installations-store",R=null;function $(){return R||(R=(0,f.X3)("firebase-installations-database",1,(t,e)=>{0===e&&t.createObjectStore(q)})),R}async function U(t,e){let n=M(t),i=await $(),r=i.transaction(q,"readwrite"),a=r.objectStore(q),o=await a.get(n);return await a.put(e,n),await r.complete,o&&o.fid===e.fid||O(t,e.fid),e}async function D(t){let e=M(t),n=await $(),i=n.transaction(q,"readwrite");await i.objectStore(q).delete(e),await i.complete}async function F(t,e){let n=M(t),i=await $(),r=i.transaction(q,"readwrite"),a=r.objectStore(q),o=await a.get(n),s=e(o);return void 0===s?await a.delete(n):await a.put(s,n),await r.complete,s&&(!o||o.fid!==s.fid)&&O(t,s.fid),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(t){let e;let n=await F(t.appConfig,n=>{let i=function(t){let e=t||{fid:function(){try{let t=new Uint8Array(17),e=self.crypto||self.msCrypto;e.getRandomValues(t),t[0]=112+t[0]%16;let n=function(t){let e=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(t){let e=btoa(String.fromCharCode(...t));return e.replace(/\+/g,"-").replace(/\//g,"_")}(t);return e.substr(0,22)}(t);return N.test(n)?n:""}catch(t){return""}}(),registrationStatus:0};return K(e)}(n),r=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){let t=Promise.reject(v.create("app-offline"));return{installationEntry:e,registrationPromise:t}}let n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=L(t,n);return{installationEntry:n,registrationPromise:i}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:x(t)}:{installationEntry:e}}(t,i);return e=r.registrationPromise,r.installationEntry});return""===n.fid?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}async function L(t,e){try{let n=await k(t,e);return U(t.appConfig,n)}catch(n){throw _(n)&&409===n.customData.serverCode?await D(t.appConfig):await U(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function x(t){let e=await z(t.appConfig);for(;1===e.registrationStatus;)await A(100),e=await z(t.appConfig);if(0===e.registrationStatus){let{installationEntry:e,registrationPromise:n}=await B(t);return n||e}return e}function z(t){return F(t,t=>{if(!t)throw v.create("installation-not-found");return K(t)})}function K(t){return 1===t.registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:t.fid,registrationStatus:0}:t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V({appConfig:t,heartbeatServiceProvider:e},n){let i=function(t,{fid:e}){return`${T(t)}/${e}/authTokens:generate`}(t,n),r=function(t,{refreshToken:e}){let n=S(t);return n.append("Authorization",`${b} ${e}`),n}(t,n),a=e.getImmediate({optional:!0});if(a){let t=await a.getHeartbeatsHeader();t&&r.append("x-firebase-client",t)}let o={installation:{sdkVersion:w,appId:t.appId}},s={method:"POST",headers:r,body:JSON.stringify(o)},l=await E(()=>fetch(i,s));if(l.ok){let t=await l.json(),e=y(t);return e}throw await I("Generate Auth Token",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(t,e=!1){let n;let i=await F(t.appConfig,i=>{var r;if(!G(i))throw v.create("not-registered");let a=i.authToken;if(!e&&2===(r=a).requestStatus&&!function(t){let e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+36e5}(r))return i;if(1===a.requestStatus)return n=H(t,e),i;{if(!navigator.onLine)throw v.create("app-offline");let e=function(t){let e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(i);return n=X(t,e),e}}),r=n?await n:i.authToken;return r}async function H(t,e){let n=await J(t.appConfig);for(;1===n.authToken.requestStatus;)await A(100),n=await J(t.appConfig);let i=n.authToken;return 0===i.requestStatus?W(t,e):i}function J(t){return F(t,t=>{if(!G(t))throw v.create("not-registered");let e=t.authToken;return 1===e.requestStatus&&e.requestTime+1e4<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function X(t,e){try{let n=await V(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await U(t.appConfig,i),n}catch(n){if(_(n)&&(401===n.customData.serverCode||404===n.customData.serverCode))await D(t.appConfig);else{let n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await U(t.appConfig,n)}throw n}}function G(t){return void 0!==t&&2===t.registrationStatus}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(t){let{installationEntry:e,registrationPromise:n}=await B(t);return n?n.catch(console.error):W(t).catch(console.error),e.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(t,e=!1){await Q(t);let n=await W(t,e);return n.token}async function Q(t){let{registrationPromise:e}=await B(t);e&&await e}function tt(t){return v.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let te="installations";(0,d.Xd)(new g.wA(te,t=>{let e=t.getProvider("app").getImmediate(),n=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(t){if(!t||!t.options)throw tt("App Configuration");if(!t.name)throw tt("App Name");for(let e of["projectId","apiKey","appId"])if(!t.options[e])throw tt(e);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e),i=(0,d.qX)(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},"PUBLIC")),(0,d.Xd)(new g.wA("installations-internal",t=>{let e=t.getProvider("app").getImmediate(),n=(0,d.qX)(e,te).getImmediate();return{getId:()=>Y(n),getToken:t=>Z(n,t)}},"PRIVATE")),(0,d.KN)(m,h),(0,d.KN)(m,h,"esm2017");let tn="@firebase/performance",ti="0.5.6",tr="FB-PERF-TRACE-MEASURE",ta="_wt_",to="_fcp",ts="_fid",tl="@firebase/performance/config",tc="@firebase/performance/configexpire",tu="Performance",tf=new f.LL("performance",tu,{"trace started":"Trace {$traceName} was started before.","trace stopped":"Trace {$traceName} is not running.","nonpositive trace startTime":"Trace {$traceName} startTime should be positive.","nonpositive trace duration":"Trace {$traceName} duration should be positive.","no window":"Window is not available.","no app id":"App id is not available.","no project id":"Project id is not available.","no api key":"Api key is not available.","invalid cc log":"Attempted to queue invalid cc event","FB not default":"Performance can only start when Firebase app instance is the default one.","RC response not ok":"RC response is not ok","invalid attribute name":"Attribute name {$attributeName} is invalid.","invalid attribute value":"Attribute value {$attributeValue} is invalid.","invalid custom metric name":"Custom metric name {$customMetricName} is invalid","invalid String merger input":"Input for String merger is invalid, contact support team to resolve.","already initialized":"initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."}),tp=new p.Yd(tu);tp.logLevel=p.in.INFO;class td{constructor(t){if(this.window=t,!t)throw tf.create("no window");this.performance=t.performance,this.PerformanceObserver=t.PerformanceObserver,this.windowLocation=t.location,this.navigator=t.navigator,this.document=t.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=t.localStorage),t.perfMetrics&&t.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=t.perfMetrics.onFirstInputDelay)}getUrl(){return this.windowLocation.href.split("?")[0]}mark(t){this.performance&&this.performance.mark&&this.performance.mark(t)}measure(t,e,n){this.performance&&this.performance.measure&&this.performance.measure(t,e,n)}getEntriesByType(t){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(t):[]}getEntriesByName(t){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(t):[]}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return fetch&&Promise&&(0,f.zI)()?!!(0,f.hl)()||(tp.info("IndexedDB is not supported by current browswer"),!1):(tp.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1)}setupObserver(t,e){if(!this.PerformanceObserver)return;let n=new this.PerformanceObserver(t=>{for(let n of t.getEntries())e(n)});n.observe({entryTypes:[t]})}static getInstance(){return void 0===i&&(i=new td(r)),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(t,e){let n=t.length-e.length;if(n<0||n>1)throw tf.create("invalid String merger input");let i=[];for(let n=0;n<t.length;n++)i.push(t.charAt(n)),e.length>n&&i.push(e.charAt(n));return i.join("")}class tm{constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=tg("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=tg("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}getFlTransportFullUrl(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}static getInstance(){return void 0===o&&(o=new tm),o}}(c=u||(u={}))[c.UNKNOWN=0]="UNKNOWN",c[c.VISIBLE=1]="VISIBLE",c[c.HIDDEN=2]="HIDDEN";let th=["firebase_","google_","ga_"],tw=RegExp("^[a-zA-Z]\\w*$");function tb(){let t=td.getInstance().document,e=t.visibilityState;switch(e){case"visible":return u.VISIBLE;case"hidden":return u.HIDDEN;default:return u.UNKNOWN}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(t){var e;let n=null===(e=t.options)||void 0===e?void 0:e.appId;if(!n)throw tf.create("no app id");return n}let t_={loggingEnabled:!0};function tT(t){if(!t)return t;let e=tm.getInstance(),n=t.entries||{};return void 0!==n.fpr_enabled?e.loggingEnabled="true"===String(n.fpr_enabled):e.loggingEnabled=t_.loggingEnabled,n.fpr_log_source&&(e.logSource=Number(n.fpr_log_source)),n.fpr_log_endpoint_url&&(e.logEndPointUrl=n.fpr_log_endpoint_url),n.fpr_log_transport_key&&(e.transportKey=n.fpr_log_transport_key),void 0!==n.fpr_vc_network_request_sampling_rate&&(e.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate)),void 0!==n.fpr_vc_trace_sampling_rate&&(e.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate)),e.logTraceAfterSampling=ty(e.tracesSamplingRate),e.logNetworkAfterSampling=ty(e.networkRequestsSamplingRate),t}function ty(t){return Math.random()<=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tI=1;function tS(t){return tI=2,s=s||(function(){let t=td.getInstance().document;return new Promise(e=>{if(t&&"complete"!==t.readyState){let n=()=>{"complete"===t.readyState&&(t.removeEventListener("readystatechange",n),e())};t.addEventListener("readystatechange",n)}else e()})})().then(()=>(function(t){let e=t.getId();return e.then(t=>{a=t}),e})(t.installations)).then(e=>(function(t,e){let n=function(){let t=td.getInstance().localStorage;if(!t)return;let e=t.getItem(tc);if(!e||!(Number(e)>Date.now()))return;let n=t.getItem(tl);if(n)try{let t=JSON.parse(n);return t}catch(t){return}}();return n?(tT(n),Promise.resolve()):(function(t){let e=t.getToken();return e.then(t=>{}),e})(t.installations).then(n=>{let i=function(t){var e;let n=null===(e=t.options)||void 0===e?void 0:e.projectId;if(!n)throw tf.create("no project id");return n}(t.app),r=function(t){var e;let n=null===(e=t.options)||void 0===e?void 0:e.apiKey;if(!n)throw tf.create("no api key");return n}(t.app),a=`https://firebaseremoteconfig.googleapis.com/v1/projects/${i}/namespaces/fireperf:fetch?key=${r}`,o=new Request(a,{method:"POST",headers:{Authorization:`FIREBASE_INSTALLATIONS_AUTH ${n}`},body:JSON.stringify({app_instance_id:e,app_instance_id_token:n,app_id:tv(t.app),app_version:ti,sdk_version:"0.0.1"})});return fetch(o).then(t=>{if(t.ok)return t.json();throw tf.create("RC response not ok")})}).catch(()=>{tp.info("Could not fetch config, will use default configs")}).then(tT).then(t=>(function(t){let e=td.getInstance().localStorage;t&&e&&(e.setItem(tl,JSON.stringify(t)),e.setItem(tc,String(Date.now()+36e5*tm.getInstance().configTimeToLive)))})(t),()=>{})})(t,e)).then(()=>void(tI=3),()=>void(tI=3))}let tE=3,tk=[],tA=!1;function tN(t,e){!l&&(l=(...t)=>{let e=function(t,e){return 0===e?function(t){let e={url:t.url,http_method:t.httpMethod||0,http_response_code:200,response_payload_bytes:t.responsePayloadBytes,client_start_time_us:t.startTimeUs,time_to_response_initiated_us:t.timeToResponseInitiatedUs,time_to_response_completed_us:t.timeToResponseCompletedUs},n={application_info:tO(t.performanceController.app),network_request_metric:e};return JSON.stringify(n)}(t):function(t){let e={name:t.name,is_auto:t.isAuto,client_start_time_us:t.startTimeUs,duration_us:t.durationUs};0!==Object.keys(t.counters).length&&(e.counters=t.counters);let n=t.getAttributes();0!==Object.keys(n).length&&(e.custom_attributes=n);let i={application_info:tO(t.performanceController.app),trace_metric:e};return JSON.stringify(i)}(t)}(...t);!function(t){if(!t.eventTime||!t.message)throw tf.create("invalid cc log");tk=[...tk,t]}({message:e,eventTime:Date.now()})}),l(t,e)}function tM(t){let e=tm.getInstance();(e.instrumentationEnabled||!t.isAuto)&&(e.dataCollectionEnabled||t.isAuto)&&td.getInstance().requiredApisAvailable()&&(!t.isAuto||tb()===u.VISIBLE)&&(3===tI?tC(t):tS(t.performanceController).then(()=>tC(t),()=>tC(t)))}function tC(t){if(!a)return;let e=tm.getInstance();e.loggingEnabled&&e.logTraceAfterSampling&&setTimeout(()=>tN(t,1),0)}function tO(t){return{google_app_id:tv(t),app_instance_id:a,web_app_info:{sdk_version:ti,page_url:td.getInstance().getUrl(),service_worker_status:function(){let t=td.getInstance().navigator;return"serviceWorker"in t?t.serviceWorker.controller?2:3:1}(),visibility_state:tb(),effective_connection_type:function(){let t=td.getInstance().navigator,e=t.connection,n=e&&e.effectiveType;switch(n){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}()},application_process_state:0}}let tP=["_fp",to,ts];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tj{constructor(t,e,n=!1,i){this.performanceController=t,this.name=e,this.isAuto=n,this.state=1,this.customAttributes={},this.counters={},this.api=td.getInstance(),this.randomId=Math.floor(1e6*Math.random()),!this.isAuto&&(this.traceStartMark=`FB-PERF-TRACE-START-${this.randomId}-${this.name}`,this.traceStopMark=`FB-PERF-TRACE-STOP-${this.randomId}-${this.name}`,this.traceMeasure=i||`${tr}-${this.randomId}-${this.name}`,i&&this.calculateTraceMetrics())}start(){if(1!==this.state)throw tf.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(2!==this.state)throw tf.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),tM(this)}record(t,e,n){if(t<=0)throw tf.create("nonpositive trace startTime",{traceName:this.name});if(e<=0)throw tf.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(1e3*e),this.startTimeUs=Math.floor(1e3*t),n&&n.attributes&&(this.customAttributes=Object.assign({},n.attributes)),n&&n.metrics)for(let t of Object.keys(n.metrics))isNaN(Number(n.metrics[t]))||(this.counters[t]=Math.floor(Number(n.metrics[t])));tM(this)}incrementMetric(t,e=1){void 0===this.counters[t]?this.putMetric(t,e):this.putMetric(t,this.counters[t]+e)}putMetric(t,e){var n;if(n=this.name,0!==t.length&&!(t.length>100)&&(n&&n.startsWith(ta)&&tP.indexOf(t)>-1||!t.startsWith("_")))this.counters[t]=function(t){let e=Math.floor(t);return e<t&&tp.info(`Metric value should be an Integer, setting the value as : ${e}.`),e}(null!=e?e:0);else throw tf.create("invalid custom metric name",{customMetricName:t})}getMetric(t){return this.counters[t]||0}putAttribute(t,e){let n=function(t){if(0===t.length||t.length>40)return!1;let e=th.some(e=>t.startsWith(e));return!e&&!!t.match(tw)}(t),i=0!==e.length&&e.length<=100;if(n&&i){this.customAttributes[t]=e;return}if(!n)throw tf.create("invalid attribute name",{attributeName:t});if(!i)throw tf.create("invalid attribute value",{attributeValue:e})}getAttribute(t){return this.customAttributes[t]}removeAttribute(t){void 0!==this.customAttributes[t]&&delete this.customAttributes[t]}getAttributes(){return Object.assign({},this.customAttributes)}setStartTime(t){this.startTimeUs=t}setDuration(t){this.durationUs=t}calculateTraceMetrics(){let t=this.api.getEntriesByName(this.traceMeasure),e=t&&t[0];e&&(this.durationUs=Math.floor(1e3*e.duration),this.startTimeUs=Math.floor((e.startTime+this.api.getTimeOrigin())*1e3))}static createOobTrace(t,e,n,i){let r=td.getInstance().getUrl();if(!r)return;let a=new tj(t,ta+r,!0),o=Math.floor(1e3*td.getInstance().getTimeOrigin());if(a.setStartTime(o),e&&e[0]&&(a.setDuration(Math.floor(1e3*e[0].duration)),a.putMetric("domInteractive",Math.floor(1e3*e[0].domInteractive)),a.putMetric("domContentLoadedEventEnd",Math.floor(1e3*e[0].domContentLoadedEventEnd)),a.putMetric("loadEventEnd",Math.floor(1e3*e[0].loadEventEnd))),n){let t=n.find(t=>"first-paint"===t.name);t&&t.startTime&&a.putMetric("_fp",Math.floor(1e3*t.startTime));let e=n.find(t=>"first-contentful-paint"===t.name);e&&e.startTime&&a.putMetric(to,Math.floor(1e3*e.startTime)),i&&a.putMetric(ts,Math.floor(1e3*i))}tM(a)}static createUserTimingTrace(t,e){let n=new tj(t,e,!1,e);tM(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tq(t,e){if(!e||void 0===e.responseStart)return;let n=td.getInstance().getTimeOrigin(),i=Math.floor((e.startTime+n)*1e3),r=e.responseStart?Math.floor((e.responseStart-e.startTime)*1e3):void 0,a=Math.floor((e.responseEnd-e.startTime)*1e3),o=e.name&&e.name.split("?")[0],s={performanceController:t,url:o,responsePayloadBytes:e.transferSize,startTimeUs:i,timeToResponseInitiatedUs:r,timeToResponseCompletedUs:a};!function(t){let e=tm.getInstance();if(!e.instrumentationEnabled)return;let n=t.url,i=e.logEndPointUrl.split("?")[0],r=e.flTransportEndpointUrl.split("?")[0];n!==i&&n!==r&&e.loggingEnabled&&e.logNetworkAfterSampling&&setTimeout(()=>tN(t,0),0)}(s)}function tR(t){a&&(setTimeout(()=>(function(t){let e=td.getInstance(),n=e.getEntriesByType("navigation"),i=e.getEntriesByType("paint");if(e.onFirstInputDelay){let r=setTimeout(()=>{tj.createOobTrace(t,n,i),r=void 0},5e3);e.onFirstInputDelay(e=>{r&&(clearTimeout(r),tj.createOobTrace(t,n,i,e))})}else tj.createOobTrace(t,n,i)})(t),0),setTimeout(()=>(function(t){let e=td.getInstance(),n=e.getEntriesByType("resource");for(let e of n)tq(t,e);e.setupObserver("resource",e=>tq(t,e))})(t),0),setTimeout(()=>(function(t){let e=td.getInstance(),n=e.getEntriesByType("measure");for(let e of n)t$(t,e);e.setupObserver("measure",e=>t$(t,e))})(t),0))}function t$(t,e){let n=e.name;n.substring(0,tr.length)!==tr&&tj.createUserTimingTrace(t,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tU{constructor(t,e){this.app=t,this.installations=e,this.initialized=!1}_init(t){this.initialized||((null==t?void 0:t.dataCollectionEnabled)!==void 0&&(this.dataCollectionEnabled=t.dataCollectionEnabled),(null==t?void 0:t.instrumentationEnabled)!==void 0&&(this.instrumentationEnabled=t.instrumentationEnabled),td.getInstance().requiredApisAvailable()?(0,f.eu)().then(t=>{t&&(tA||(function t(e){setTimeout(()=>{if(0!==tE){if(!tk.length)return t(1e4);!function(){let e=tk.splice(0,1e3),n=e.map(t=>({source_extension_json_proto3:t.message,event_time_ms:String(t.eventTime)})),i={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:tm.getInstance().logSource,log_event:n};(function(t){let e=tm.getInstance().getFlTransportFullUrl();return fetch(e,{method:"POST",body:JSON.stringify(t)})})(i).then(t=>(t.ok||tp.info("Call to Firebase backend failed."),t.json())).then(n=>{let i=Number(n.nextRequestWaitMillis),r=1e4;isNaN(i)||(r=Math.max(i,r));let a=n.logResponseDetails;Array.isArray(a)&&a.length>0&&"RETRY_REQUEST_LATER"===a[0].responseAction&&(tk=[...e,...tk],tp.info("Retry transport request later.")),tE=3,t(r)}).catch(()=>{tk=[...e,...tk],tE--,tp.info(`Tries left: ${tE}.`),t(1e4)})}()}},e)}(5500),tA=!0),tS(this).then(()=>tR(this),()=>tR(this)),this.initialized=!0)}).catch(t=>{tp.info(`Environment doesn't support IndexedDB: ${t}`)}):tp.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))}set instrumentationEnabled(t){tm.getInstance().instrumentationEnabled=t}get instrumentationEnabled(){return tm.getInstance().instrumentationEnabled}set dataCollectionEnabled(t){tm.getInstance().dataCollectionEnabled=t}get dataCollectionEnabled(){return tm.getInstance().dataCollectionEnabled}}function tD(t=(0,d.Mq)()){t=(0,f.m9)(t);let e=(0,d.qX)(t,"performance"),n=e.getImmediate();return n}(0,d.Xd)(new g.wA("performance",(t,{options:e})=>{let n=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();if("[DEFAULT]"!==n.name)throw tf.create("FB not default");if("undefined"==typeof window)throw tf.create("no window");r=window;let a=new tU(n,i);return a._init(e),a},"PUBLIC")),(0,d.KN)(tn,ti),(0,d.KN)(tn,ti,"esm2017")}}]);