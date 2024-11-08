"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1689],{4444:function(e,t,r){r.d(t,{BH:function(){return u},L:function(){return a},LL:function(){return v},Mn:function(){return g},X3:function(){return j},ZR:function(){return w},b$:function(){return f},d:function(){return p},eu:function(){return m},hl:function(){return b},m9:function(){return B},ne:function(){return A},pd:function(){return x},ru:function(){return d},tV:function(){return l},uI:function(){return h},vZ:function(){return function e(t,r){if(t===r)return!0;let n=Object.keys(t),o=Object.keys(r);for(let i of n){if(!o.includes(i))return!1;let n=t[i],s=r[i];if(E(n)&&E(s)){if(!e(n,s))return!1}else if(n!==s)return!1}for(let e of o)if(!n.includes(e))return!1;return!0}},w1:function(){return _},xO:function(){return S},xb:function(){return R},z$:function(){return c},zI:function(){return y},zd:function(){return C}});/**
 * @license
 * Copyright 2017 Google LLC
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
 */let n=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let o=e.charCodeAt(n);o<128?t[r++]=o:(o<2048?t[r++]=o>>6|192:((64512&o)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++n)),t[r++]=o>>18|240,t[r++]=o>>12&63|128):t[r++]=o>>12|224,t[r++]=o>>6&63|128),t[r++]=63&o|128)}return t},o=function(e){let t=[],r=0,n=0;for(;r<e.length;){let o=e[r++];if(o<128)t[n++]=String.fromCharCode(o);else if(o>191&&o<224){let i=e[r++];t[n++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){let i=e[r++],s=e[r++],a=e[r++],l=((7&o)<<18|(63&i)<<12|(63&s)<<6|63&a)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(1023&l))}else{let i=e[r++],s=e[r++];t[n++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&s)}}return t.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let o=e[t],i=t+1<e.length,s=i?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,u=o>>2,c=(3&o)<<4|s>>4,h=(15&s)<<2|l>>6,d=63&l;a||(d=64,i||(h=64)),n.push(r[u],r[c],r[h],r[d])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(n(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):o(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let o=r[e.charAt(t++)],i=t<e.length,s=i?r[e.charAt(t)]:0;++t;let a=t<e.length,l=a?r[e.charAt(t)]:64;++t;let u=t<e.length,c=u?r[e.charAt(t)]:64;if(++t,null==o||null==s||null==l||null==c)throw Error();let h=o<<2|s>>4;if(n.push(h),64!==l){let e=s<<4&240|l>>2;if(n.push(e),64!==c){let e=l<<6&192|c;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},s=function(e){let t=n(e);return i.encodeByteArray(t,!0)},a=function(e){return s(e).replace(/\./g,"")},l=function(e){try{return i.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class u{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function c(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function h(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(c())}function d(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function f(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function p(){return c().indexOf("Electron/")>=0}function _(){let e=c();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function g(){return c().indexOf("MSAppHost/")>=0}function b(){return"object"==typeof indexedDB}function m(){return new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(n);o.onsuccess=()=>{o.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},o.onupgradeneeded=()=>{r=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}function y(){return"undefined"!=typeof navigator&&!!navigator.cookieEnabled}class w extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,w.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,v.prototype.create)}}class v{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,o=this.errors[e],i=o?o.replace(k,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",s=`${this.serviceName}: ${i} (${n}).`,a=new w(n,s,r);return a}}let k=/\{\$([^}]+)}/g;function R(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function E(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function S(e){let t=[];for(let[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function C(e){let t={},r=e.replace(/^\?/,"").split("&");return r.forEach(e=>{if(e){let[r,n]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(n)}}),t}function x(e){let t=e.indexOf("?");if(!t)return"";let r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}function A(e,t){let r=new O(e,t);return r.subscribe.bind(r)}class O{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw Error("Missing Observer.");void 0===(n=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:r}:e).next&&(n.next=T),void 0===n.error&&(n.error=T),void 0===n.complete&&(n.complete=T);let o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),o}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function T(){}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function B(e){return e&&e._delegate?e._delegate:e}/**
 * @license
 * Copyright 2022 Google LLC
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
 */function I(e,t){return new Promise((r,n)=>{e.onsuccess=e=>{r(e.target.result)},e.onerror=e=>{var r;n(`${t}: ${null===(r=e.target.error)||void 0===r?void 0:r.message}`)}})}class P{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t){return new U(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new D(this._db.createObjectStore(e,t))}close(){this._db.close()}}class U{constructor(e){this._transaction=e,this.complete=new Promise((e,t)=>{this._transaction.oncomplete=function(){e()},this._transaction.onerror=()=>{t(this._transaction.error)},this._transaction.onabort=()=>{t(this._transaction.error)}})}objectStore(e){return new D(this._transaction.objectStore(e))}}class D{constructor(e){this._store=e}index(e){return new N(this._store.index(e))}createIndex(e,t,r){return new N(this._store.createIndex(e,t,r))}get(e){let t=this._store.get(e);return I(t,"Error reading from IndexedDB")}put(e,t){let r=this._store.put(e,t);return I(r,"Error writing to IndexedDB")}delete(e){let t=this._store.delete(e);return I(t,"Error deleting from IndexedDB")}clear(){let e=this._store.clear();return I(e,"Error clearing IndexedDB object store")}}class N{constructor(e){this._index=e}get(e){let t=this._index.get(e);return I(t,"Error reading from IndexedDB")}}function j(e,t,r){return new Promise((n,o)=>{try{let i=indexedDB.open(e,t);i.onsuccess=e=>{n(new P(e.target.result))},i.onerror=e=>{var t;o(`Error opening indexedDB: ${null===(t=e.target.error)||void 0===t?void 0:t.message}`)},i.onupgradeneeded=e=>{r(new P(i.result),e.oldVersion,e.newVersion,new U(i.transaction))}}catch(e){o(`Error opening indexedDB: ${e.message}`)}})}},7702:function(e,t,r){r.d(t,{hJ:function(){return n.N},Xb:function(){return n.a4},Nr:function(){return n.a9},v0:function(){return n.n},MX:function(){return n.q},LS:function(){return n.$},e5:function(){return n.a5},rh:function(){return n.c},w7:function(){return n.x}});var n=r(5096);r(4444),r(2238),r(3333),r(740)},6257:function(e,t,r){r.d(t,{JU:function(){return n.JU},ad:function(){return n.ad},cf:function(){return n.cf}});var n=r(19)},1153:function(e,t,r){r.d(t,{Jt:function(){return ee},cF:function(){return er},iH:function(){return et},KV:function(){return Q}});var n,o,i=r(2238),s=r(4444),a=r(740);/**
 * @license
 * Copyright 2017 Google LLC
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
 */let l="firebasestorage.googleapis.com",u="storageBucket";/**
 * @license
 * Copyright 2017 Google LLC
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
 */class c extends s.ZR{constructor(e,t){super(h(e),`Firebase Storage: ${t} (${h(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,c.prototype)}_codeEquals(e){return h(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function h(e){return"storage/"+e}function d(){return new c("unknown","An unknown error occurred, please check the error payload for server response.")}function f(e){return new c("invalid-argument",e)}function p(){return new c("app-deleted","The Firebase app was deleted.")}function _(e,t){return new c("invalid-format","String does not match format '"+e+"': "+t)}function g(e){throw new c("internal-error","Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class b{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=b.makeFromUrl(e,t)}catch(t){return new b(e,"")}if(""===r.path)return r;throw new c("invalid-default-bucket","Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let r=null,n="([A-Za-z0-9.\\-_]+)",o=RegExp("^gs://"+n+"(/(.*))?$","i");function i(e){e.path_=decodeURIComponent(e.path)}let s=t.replace(/[.]/g,"\\."),a=RegExp(`^https?://${s}/v[A-Za-z0-9_]+/b/${n}/o(/([^?#]*).*)?$`,"i"),u=RegExp(`^https?://${t===l?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${n}/([^?#]*)`,"i"),h=[{regex:o,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:a,indices:{bucket:1,path:3},postModify:i},{regex:u,indices:{bucket:1,path:2},postModify:i}];for(let t=0;t<h.length;t++){let n=h[t],o=n.regex.exec(e);if(o){let e=o[n.indices.bucket],t=o[n.indices.path];t||(t=""),r=new b(e,t),n.postModify(r);break}}if(null==r)throw new c("invalid-url","Invalid URL '"+e+"'.");return r}}class m{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}function y(e){return"string"==typeof e||e instanceof String}function w(e){return v()&&e instanceof Blob}function v(){return"undefined"!=typeof Blob}function k(e,t,r,n){if(n<t)throw f(`Invalid value for '${e}'. Expected ${t} or greater.`);if(n>r)throw f(`Invalid value for '${e}'. Expected ${r} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function R(e,t,r){let n=t;return null==r&&(n=`https://${t}`),`${r}://${n}/v0${e}`}function E(e){let t=encodeURIComponent,r="?";for(let n in e)if(e.hasOwnProperty(n)){let o=t(n)+"="+t(e[n]);r=r+o+"&"}return r.slice(0,-1)}(n=o||(o={}))[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT";/**
 * @license
 * Copyright 2017 Google LLC
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
 */class S{constructor(e,t,r,n,o,i,s,a,l,u,c){this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=s,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=c,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){let e=(e,t)=>{let r=this.resolve_,n=this.reject_,o=t.connection;if(t.wasSuccessCode)try{let e=this.callback_(o,o.getResponse());void 0!==e?r(e):r()}catch(e){n(e)}else if(null!==o){let e=d();e.serverResponse=o.getErrorText(),n(this.errorCallback_?this.errorCallback_(o,e):e)}else if(t.canceled){let e=this.appDelete_?p():new c("canceled","User canceled the upload/download.");n(e)}else{let e=new c("retry-limit-exceeded","Max retry time for operation exceeded, please try again.");n(e)}};this.canceled_?e(!1,new C(!1,null,!0)):this.backoffId_=/**
 * @license
 * Copyright 2017 Google LLC
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
 */function(e,t,r){let n=1,o=null,i=null,s=!1,a=0,l=!1;function u(...e){l||(l=!0,t.apply(null,e))}function c(t){o=setTimeout(()=>{o=null,e(d,2===a)},t)}function h(){i&&clearTimeout(i)}function d(e,...t){let r;if(l){h();return}if(e){h(),u.call(null,e,...t);return}let o=2===a||s;if(o){h(),u.call(null,e,...t);return}n<64&&(n*=2),1===a?(a=2,r=0):r=(n+Math.random())*1e3,c(r)}let f=!1;function p(e){!f&&(f=!0,h(),!l&&(null!==o?(e||(a=2),clearTimeout(o),c(0)):e||(a=1)))}return c(0),i=setTimeout(()=>{s=!0,p(!0)},r),p}((e,t)=>{if(t){e(!1,new C(!1,null,!0));return}let r=this.connectionFactory_();this.pendingConnection_=r;let n=e=>{let t=e.loaded,r=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,r)};null!==this.progressCallback_&&r.addUploadProgressListener(n),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&r.removeUploadProgressListener(n),this.pendingConnection_=null;let t=r.getErrorCode()===o.NO_ERROR,i=r.getStatus();if(!t||this.isRetryStatusCode_(i)){let t=r.getErrorCode()===o.ABORT;e(!1,new C(!1,null,t));return}let s=-1!==this.successCodes_.indexOf(i);e(!0,new C(s,r))})},e,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){let t=e>=500&&e<600,r=-1!==[408,429].indexOf(e),n=-1!==this.additionalRetryCodes_.indexOf(e);return t||r||n}}class C{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function x(...e){let t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==t){let r=new t;for(let t=0;t<e.length;t++)r.append(e[t]);return r.getBlob()}if(v())return new Blob(e);throw new c("unsupported-environment","This browser doesn't seem to support creating Blobs")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let A={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class O{constructor(e,t){this.data=e,this.contentType=t||null}}function T(e){let t=[];for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|63&n);else if((64512&n)==55296){let o=r<e.length-1&&(64512&e.charCodeAt(r+1))==56320;if(o){let o=n,i=e.charCodeAt(++r);n=65536|(1023&o)<<10|1023&i,t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n)}else t.push(239,191,189)}else(64512&n)==56320?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(t)}function B(e,t){let r;switch(e){case A.BASE64:{let r=-1!==t.indexOf("-"),n=-1!==t.indexOf("_");if(r||n)throw _(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case A.BASE64URL:{let r=-1!==t.indexOf("+"),n=-1!==t.indexOf("/");if(r||n)throw _(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/")}}try{var n;n=t,r=atob(n)}catch(t){throw _(e,"Invalid character found")}let o=new Uint8Array(r.length);for(let e=0;e<r.length;e++)o[e]=r.charCodeAt(e);return o}class I{constructor(e){this.base64=!1,this.contentType=null;let t=e.match(/^data:([^,]+)?,/);if(null===t)throw _(A.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");let r=t[1]||null;null!=r&&(this.base64=function(e,t){let r=e.length>=t.length;return!!r&&e.substring(e.length-t.length)===t}(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class P{constructor(e,t){let r=0,n="";w(e)?(this.data_=e,r=e.size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}size(){return this.size_}type(){return this.type_}slice(e,t){if(w(this.data_)){let r=this.data_,n=r.webkitSlice?r.webkitSlice(e,t):r.mozSlice?r.mozSlice(e,t):r.slice?r.slice(e,t):null;return null===n?null:new P(n)}{let r=new Uint8Array(this.data_.buffer,e,t-e);return new P(r,!0)}}static getBlob(...e){if(v()){let t=e.map(e=>e instanceof P?e.data_:e);return new P(x.apply(null,t))}{let t=e.map(e=>y(e)?function(e,t){switch(e){case A.RAW:return new O(T(t));case A.BASE64:case A.BASE64URL:return new O(B(e,t));case A.DATA_URL:return new O(function(e){let t=new I(e);return t.base64?B(A.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw _(A.DATA_URL,"Malformed data URL.")}return T(t)}(t.rest)}(t),function(e){let t=new I(e);return t.contentType}(t))}throw d()}(A.RAW,e).data:e.data_),r=0;t.forEach(e=>{r+=e.byteLength});let n=new Uint8Array(r),o=0;return t.forEach(e=>{for(let t=0;t<e.length;t++)n[o++]=e[t]}),new P(n,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function U(e){var t;let r;try{r=JSON.parse(e)}catch(e){return null}return"object"!=typeof(t=r)||Array.isArray(t)?null:r}function D(e){let t=e.lastIndexOf("/",e.length-2);return -1===t?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function N(e,t){return t}class j{constructor(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||N}}let M=null;function L(){if(M)return M;let e=[];e.push(new j("bucket")),e.push(new j("generation")),e.push(new j("metageneration")),e.push(new j("name","fullPath",!0));let t=new j("name");t.xform=function(e,t){return!y(t)||t.length<2?t:D(t)},e.push(t);let r=new j("size");return r.xform=function(e,t){return void 0!==t?Number(t):t},e.push(r),e.push(new j("timeCreated")),e.push(new j("updated")),e.push(new j("md5Hash",null,!0)),e.push(new j("cacheControl",null,!0)),e.push(new j("contentDisposition",null,!0)),e.push(new j("contentEncoding",null,!0)),e.push(new j("contentLanguage",null,!0)),e.push(new j("contentType",null,!0)),e.push(new j("metadata","customMetadata",!0)),M=e}function $(e,t,r){let n=U(t);return null===n?null:function(e,t,r){let n={};n.type="file";let o=r.length;for(let e=0;e<o;e++){let o=r[e];n[o.local]=o.xform(n,t[o.server])}return Object.defineProperty(n,"ref",{get:function(){let t=n.bucket,r=n.fullPath,o=new b(t,r);return e._makeStorageReference(o)}}),n}(e,n,r)}class F{constructor(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function z(e){if(!e)throw d()}function W(e){return function(t,r){var n,o;let i;return 401===t.getStatus()?i=t.getErrorText().includes("Firebase App Check token is invalid")?new c("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new c("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(n=e.bucket,i=new c("quota-exceeded","Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(o=e.path,i=new c("unauthorized","User does not have permission to access '"+o+"'.")):i=r,i.serverResponse=r.serverResponse,i}}class V{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=o.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=o.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=o.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,n){if(this.sent_)throw g("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==n)for(let e in n)n.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,n[e].toString());return void 0!==r?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw g("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw g("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return -1}}getResponse(){if(!this.sent_)throw g("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw g("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class q extends V{initXhr(){this.xhr_.responseType="text"}}function H(){return new q}/**
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
 */class X{constructor(e,t){this._service=e,t instanceof b?this._location=t:this._location=b.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new X(e,t)}get root(){let e=new b(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return D(this._location.path)}get storage(){return this._service}get parent(){let e=/**
 * @license
 * Copyright 2017 Google LLC
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
 */function(e){if(0===e.length)return null;let t=e.lastIndexOf("/");if(-1===t)return"";let r=e.slice(0,t);return r}(this._location.path);if(null===e)return null;let t=new b(this._location.bucket,e);return new X(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw new c("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}}function K(e,t){let r=null==t?void 0:t[u];return null==r?null:b.makeFromBucketSpec(r,e)}class J{constructor(e,t,r,n,o){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=n,this._firebaseVersion=o,this._bucket=null,this._host=l,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=n?this._bucket=b.makeFromBucketSpec(n,this._host):this._bucket=K(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=b.makeFromBucketSpec(this._url,e):this._bucket=K(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){k("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){k("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let e=this._authProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){let e=this._appCheckProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new X(this,e)}_makeRequest(e,t,r,n){if(this._deleted)return new m(p());{let o=function(e,t,r,n,o,i){let s=E(e.urlParams),a=e.url+s,l=Object.assign({},e.headers);return t&&(l["X-Firebase-GMPID"]=t),null!==r&&r.length>0&&(l.Authorization="Firebase "+r),l["X-Firebase-Storage-Version"]="webjs/"+(null!=i?i:"AppManager"),null!==n&&(l["X-Firebase-AppCheck"]=n),new S(a,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o)}(e,this._appId,r,n,t,this._firebaseVersion);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){let[r,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,n).getPromise()}}let Z="@firebase/storage",G="0.9.3",Y="storage";function Q(e,t,r){return function(e,t,r){e._throwIfRoot("uploadBytes");let n=function(e,t,r,n,o){let i=t.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"},a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();s["Content-Type"]="multipart/related; boundary="+a;let l=function(e,t,r){let n=Object.assign({},r);return n.fullPath=e.path,n.size=t.size(),!n.contentType&&(n.contentType=t&&t.type()||"application/octet-stream"),n}(t,n,o),u=function(e,t){let r={},n=t.length;for(let o=0;o<n;o++){let n=t[o];n.writable&&(r[n.server]=e[n.local])}return JSON.stringify(r)}(l,r),h="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+u+"\r\n--"+a+"\r\nContent-Type: "+l.contentType+"\r\n\r\n",d=P.getBlob(h,n,"\r\n--"+a+"--");if(null===d)throw new c("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.");let f={name:l.fullPath},p=R(i,e.host,e._protocol),_=e.maxUploadRetryTime,g=new F(p,"POST",function(t,n){let o=$(e,n,r);return z(null!==o),o},_);return g.urlParams=f,g.headers=s,g.body=d.uploadData(),g.errorHandler=W(t),g}(e.storage,e._location,L(),new P(t,!0),r);return e.storage.makeRequestWithTokens(n,H).then(t=>({metadata:t,ref:e}))}(e=(0,s.m9)(e),t,r)}function ee(e){return function(e){e._throwIfRoot("getDownloadURL");let t=function(e,t,r){let n=t.fullServerUrl(),o=R(n,e.host,e._protocol),i=e.maxOperationRetryTime,s=new F(o,"GET",function(t,n){let o=$(e,n,r);return z(null!==o),function(e,t,r,n){let o=U(t);if(null===o||!y(o.downloadTokens))return null;let i=o.downloadTokens;if(0===i.length)return null;let s=encodeURIComponent,a=i.split(","),l=a.map(t=>{let o=e.bucket,i=e.fullPath,a="/b/"+s(o)+"/o/"+s(i),l=R(a,r,n),u=E({alt:"media",token:t});return l+u});return l[0]}(o,n,e.host,e._protocol)},i);return s.errorHandler=function(e){let t=W(e);return function(r,n){let o=t(r,n);if(404===r.getStatus()){var i;i=e.path,o=new c("object-not-found","Object '"+i+"' does not exist.")}return o.serverResponse=n.serverResponse,o}}(t),s}(e.storage,e._location,L());return e.storage.makeRequestWithTokens(t,H).then(e=>{if(null===e)throw new c("no-download-url","The given file does not have any download URLs.");return e})}(e=(0,s.m9)(e))}function et(e,t){return function(e,t){if(!(t&&/^[A-Za-z]+:\/\//.test(t)))return function e(t,r){if(t instanceof J){if(null==t._bucket)throw new c("no-default-bucket","No default bucket found. Did you set the '"+u+"' property when initializing the app?");let n=new X(t,t._bucket);return null!=r?e(n,r):n}return void 0!==r?function(e,t){let r=function(e,t){let r=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?r:e+"/"+r}(e._location.path,t),n=new b(e._location.bucket,r);return new X(e.storage,n)}(t,r):t}(e,t);if(e instanceof J)return new X(e,t);throw f("To use ref(service, url), the first argument must be a Storage instance.")}(e=(0,s.m9)(e),t)}function er(e=(0,i.Mq)(),t){e=(0,s.m9)(e);let r=(0,i.qX)(e,Y),n=r.getImmediate({identifier:t});return n}(0,i.Xd)(new a.wA(Y,function(e,{instanceIdentifier:t}){let r=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new J(r,n,o,t,i.Jn)},"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(Z,G,""),(0,i.KN)(Z,G,"esm2017")},9611:function(e,t,r){r.d(t,{Z:function(){return n}});function n(e,t){return(n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}},7582:function(e,t,r){r.d(t,{_T:function(){return n},ev:function(){return o}});function n(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r}function o(e,t,r){if(r||2==arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError}}]);