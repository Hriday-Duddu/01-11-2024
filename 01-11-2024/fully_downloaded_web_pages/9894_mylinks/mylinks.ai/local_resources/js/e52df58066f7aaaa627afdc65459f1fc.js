"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2016],{19:function(e,t,n){n.d(t,{IO:function(){return r6},JU:function(){return rR},PL:function(){return ir},ad:function(){return rx},ar:function(){return r9},cf:function(){return ii},hJ:function(){return rL}});var r,i,s=n(2238),a=n(740),o=n(3333),l=n(4444),u=n(3510);n(4155);let h="@firebase/firestore";/**
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
 */class c{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");/**
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
 */let d="9.6.9",f=new o.Yd("@firebase/firestore");function m(){return f.logLevel}function g(e,...t){if(f.logLevel<=o.in.DEBUG){let n=t.map(w);f.debug(`Firestore (${d}): ${e}`,...n)}}function p(e,...t){if(f.logLevel<=o.in.ERROR){let n=t.map(w);f.error(`Firestore (${d}): ${e}`,...n)}}function y(e,...t){if(f.logLevel<=o.in.WARN){let n=t.map(w);f.warn(`Firestore (${d}): ${e}`,...n)}}function w(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}/**
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
 */function v(e="Unexpected state"){let t=`FIRESTORE (${d}) INTERNAL ASSERTION FAILED: `+e;throw p(t),Error(t)}/**
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
 */let E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends l.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class I{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class A{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class S{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(c.UNAUTHENTICATED))}shutdown(){}}class C{constructor(e){this.t=e,this.currentUser=c.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new I;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new I,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{g("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(g("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new I)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(g("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||v(),new A(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||v(),new c(e)}}class N{constructor(e,t,n){this.type="FirstParty",this.user=c.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);let r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class _{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new N(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(c.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class b{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class k{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){let n=e=>{null!=e.error&&g("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.p;return this.p=e.token,g("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{g("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.g.getImmediate({optional:!0});e?r(e):g("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||v(),this.p=e.token,new b(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class D{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.I(e),this.T=e=>t.writeSequenceNumber(e))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.T&&this.T(e),e}}/**
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
 */D.A=-1;class L{static R(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=/**
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
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function R(e,t){return e<t?-1:e>t?1:0}function V(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
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
 */class F{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return F.fromMillis(Date.now())}static fromDate(e){return F.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new F(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?R(this.nanoseconds,e.nanoseconds):R(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class M{constructor(e){this.timestamp=e}static fromTimestamp(e){return new M(e)}static min(){return new M(new F(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function x(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function O(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function U(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class P{constructor(e,t,n){void 0===t?t=0:t>e.length&&v(),void 0===n?n=e.length-t:n>e.length-t&&v(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===P.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof P?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e.get(r),i=t.get(r);if(n<i)return -1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class q extends P{construct(e,t,n){return new q(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new T(E.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new q(t)}static emptyPath(){return new q([])}}let B=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class K extends P{construct(e,t,n){return new K(e,t,n)}static isValidIdentifier(e){return B.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),K.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new K(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new T(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new T(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new T(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?s=!s:"."!==t||s?n+=t:i(),r++}if(i(),s)throw new T(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new K(t)}static emptyPath(){return new K([])}}/**
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
 */class ${constructor(e){this.binaryString=e}static fromBase64String(e){let t=atob(e);return new $(t)}static fromUint8Array(e){let t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new $(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return R(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$.EMPTY_BYTE_STRING=new $("");let G=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function z(e){if(e||v(),"string"==typeof e){let t=0,n=G.exec(e);if(n||v(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}let r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:j(e.seconds),nanos:j(e.nanos)}}function j(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Q(e){return"string"==typeof e?$.fromBase64String(e):$.fromUint8Array(e)}/**
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
 */function H(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function W(e){let t=z(e.mapValue.fields.__local_write_time__.timestampValue);return new F(t.seconds,t.nanos)}/**
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
 */class Y{constructor(e,t,n,r,i,s,a,o){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=o}}class X{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new X("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof X&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Z(e){return null==e}function J(e){return 0===e&&1/e==-1/0}/**
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
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(q.fromString(e))}static fromName(e){return new ee(q.fromString(e).popFirst(5))}static empty(){return new ee(q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===q.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return q.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new q(e.slice()))}}function et(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?H(e)?4:em(e)?9:10:v()}function en(e,t){if(e===t)return!0;let n=et(e);if(n!==et(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return W(e).isEqual(W(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=z(e.timestampValue),r=z(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return Q(e.bytesValue).isEqual(Q(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return j(e.geoPointValue.latitude)===j(t.geoPointValue.latitude)&&j(e.geoPointValue.longitude)===j(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return j(e.integerValue)===j(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=j(e.doubleValue),r=j(t.doubleValue);return n===r?J(n)===J(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return V(e.arrayValue.values||[],t.arrayValue.values||[],en);case 10:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(x(n)!==x(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!en(n[e],r[e])))return!1;return!0}(e,t);default:return v()}}function er(e,t){return void 0!==(e.values||[]).find(e=>en(e,t))}function ei(e,t){if(e===t)return 0;let n=et(e),r=et(t);if(n!==r)return R(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return R(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=j(e.integerValue||e.doubleValue),r=j(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return es(e.timestampValue,t.timestampValue);case 4:return es(W(e),W(t));case 5:return R(e.stringValue,t.stringValue);case 6:return function(e,t){let n=Q(e),r=Q(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=R(n[e],r[e]);if(0!==t)return t}return R(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=R(j(e.latitude),j(t.latitude));return 0!==n?n:R(j(e.longitude),j(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=ei(n[e],r[e]);if(t)return t}return R(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=R(r[e],s[e]);if(0!==t)return t;let a=ei(n[r[e]],i[s[e]]);if(0!==a)return a}return R(r.length,s.length)}(e.mapValue,t.mapValue);default:throw v()}}function es(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return R(e,t);let n=z(e),r=z(t),i=R(n.seconds,r.seconds);return 0!==i?i:R(n.nanos,r.nanos)}function ea(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=z(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Q(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,ee.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=ea(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${ea(e.fields[i])}`;return n+"}"}(e.mapValue):v()}function eo(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function el(e){return!!e&&"integerValue"in e}function eu(e){return!!e&&"arrayValue"in e}function eh(e){return!!e&&"nullValue"in e}function ec(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ed(e){return!!e&&"mapValue"in e}function ef(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return O(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=ef(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ef(e.arrayValue.values[n]);return t}return Object.assign({},e)}function em(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
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
 */class eg{constructor(e){this.value=e}static empty(){return new eg({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!ed(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ef(t)}setAll(e){let t=K.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=ef(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());ed(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return en(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ed(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(O(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new eg(ef(this.value))}}/**
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
 */class ep{constructor(e,t,n,r,i,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new ep(e,0,M.min(),M.min(),eg.empty(),0)}static newFoundDocument(e,t,n){return new ep(e,1,t,M.min(),n,0)}static newNoDocument(e,t){return new ep(e,2,t,M.min(),eg.empty(),0)}static newUnknownDocument(e,t){return new ep(e,3,t,M.min(),eg.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=eg.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=eg.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ep&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ep(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ey{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.P=null}}function ew(e,t=null,n=[],r=[],i=null,s=null,a=null){return new ey(e,t,n,r,i,s,a)}function ev(e){if(null===e.P){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>e.field.canonicalString()+e.op.toString()+ea(e.value)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),Z(e.limit)||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>ea(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>ea(e)).join(",")),e.P=t}return e.P}function eE(e,t){var n,r,i,s;if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(i=e.orderBy[n],s=t.orderBy[n],!(i.dir===s.dir&&i.field.isEqual(s.field)))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!en(n.value,r.value))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!eF(e.startAt,t.startAt)&&eF(e.endAt,t.endAt)}function eT(e){return ee.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class eI extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.V(e,t,n):new eA(e,t,n):"array-contains"===t?new e_(e,n):"in"===t?new eb(e,n):"not-in"===t?new ek(e,n):"array-contains-any"===t?new eD(e,n):new eI(e,t,n)}static V(e,t,n){return"in"===t?new eS(e,n):new eC(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v(ei(t,this.value)):null!==t&&et(this.value)===et(t)&&this.v(ei(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return v()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class eA extends eI{constructor(e,t,n){super(e,t,n),this.key=ee.fromName(n.referenceValue)}matches(e){let t=ee.comparator(e.key,this.key);return this.v(t)}}class eS extends eI{constructor(e,t){super(e,"in",t),this.keys=eN("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class eC extends eI{constructor(e,t){super(e,"not-in",t),this.keys=eN("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function eN(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>ee.fromName(e.referenceValue))}class e_ extends eI{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return eu(t)&&er(t.arrayValue,this.value)}}class eb extends eI{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&er(this.value.arrayValue,t)}}class ek extends eI{constructor(e,t){super(e,"not-in",t)}matches(e){if(er(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!er(this.value.arrayValue,t)}}class eD extends eI{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!eu(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>er(this.value.arrayValue,e))}}class eL{constructor(e,t){this.position=e,this.inclusive=t}}class eR{constructor(e,t="asc"){this.field=e,this.dir=t}}function eV(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?ee.comparator(ee.fromName(a.referenceValue),n.key):ei(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function eF(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!en(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class eM{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.D=null,this.C=null,this.startAt,this.endAt}}function ex(e){return!Z(e.limit)&&"F"===e.limitType}function eO(e){return!Z(e.limit)&&"L"===e.limitType}function eU(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function eP(e){for(let t of e.filters)if(t.S())return t.field;return null}function eq(e){return null!==e.collectionGroup}function eB(e){if(null===e.D){e.D=[];let t=eP(e),n=eU(e);if(null!==t&&null===n)t.isKeyField()||e.D.push(new eR(t)),e.D.push(new eR(K.keyField(),"asc"));else{let t=!1;for(let n of e.explicitOrderBy)e.D.push(n),n.field.isKeyField()&&(t=!0);if(!t){let t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new eR(K.keyField(),t))}}}return e.D}function eK(e){if(!e.C){if("F"===e.limitType)e.C=ew(e.path,e.collectionGroup,eB(e),e.filters,e.limit,e.startAt,e.endAt);else{let t=[];for(let n of eB(e)){let e="desc"===n.dir?"asc":"desc";t.push(new eR(n.field,e))}let n=e.endAt?new eL(e.endAt.position,!e.endAt.inclusive):null,r=e.startAt?new eL(e.startAt.position,!e.startAt.inclusive):null;e.C=ew(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}return e.C}function e$(e,t){return eE(eK(e),eK(t))&&e.limitType===t.limitType}function eG(e){return`${ev(eK(e))}|lt:${e.limitType}`}function ez(e){var t;let n;return`Query(target=${n=(t=eK(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>`${e.field.canonicalString()} ${e.op} ${ea(e.value)}`).join(", ")}]`),Z(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>ea(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>ea(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function ej(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ee.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=eV(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,eB(e),t))&&(!e.endAt||!!function(e,t,n){let r=eV(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,eB(e),t))}function eQ(e){return(t,n)=>{let r=!1;for(let i of eB(e)){let e=function(e,t,n){let r=e.field.isKeyField()?ee.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?ei(r,i):v()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return v()}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}/**
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
 */function eH(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:J(t)?"-0":t}}function eW(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class eY{constructor(){this._=void 0}}class eX extends eY{}class eZ extends eY{constructor(e){super(),this.elements=e}}function eJ(e,t){let n=e3(t);for(let t of e.elements)n.some(e=>en(e,t))||n.push(t);return{arrayValue:{values:n}}}class e0 extends eY{constructor(e){super(),this.elements=e}}function e1(e,t){let n=e3(t);for(let t of e.elements)n=n.filter(e=>!en(e,t));return{arrayValue:{values:n}}}class e2 extends eY{constructor(e,t){super(),this.M=e,this.k=t}}function e4(e){return j(e.integerValue||e.doubleValue)}function e3(e){return eu(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function e6(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class e5{}function e9(e,t,n){e instanceof te?function(e,t,n){if(!e6(e.precondition,t))return;let r=e.value.clone(),i=ti(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(e7(t),r).setHasLocalMutations()}(e,t,n):e instanceof tt?function(e,t,n){if(!e6(e.precondition,t))return;let r=ti(e.fieldTransforms,n,t),i=t.data;i.setAll(tn(e)),i.setAll(r),t.convertToFoundDocument(e7(t),i).setHasLocalMutations()}(e,t,n):e6(e.precondition,t)&&t.convertToNoDocument(M.min())}function e8(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&V(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof eZ&&r instanceof eZ||n instanceof e0&&r instanceof e0?V(n.elements,r.elements,en):n instanceof e2&&r instanceof e2?en(n.k,r.k):n instanceof eX&&r instanceof eX)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function e7(e){return e.isFoundDocument()?e.version:M.min()}class te extends e5{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class tt extends e5{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function tn(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function tr(e,t,n){var r;let i=new Map;e.length===n.length||v();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(r=n[s],o instanceof eZ?eJ(o,l):o instanceof e0?e1(o,l):r))}return i}function ti(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof eX?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,s):e instanceof eZ?eJ(e,s):e instanceof e0?e1(e,s):function(e,t){var n,r;let i=(n=e,r=t,n instanceof e2?el(r)||r&&"doubleValue"in r?r:{integerValue:0}:null),s=e4(i)+e4(e.k);return el(i)&&el(e.k)?eW(s):eH(e.M,s)}(e,s))}return r}/**
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
 */class ts{constructor(e){this.count=e}}function ta(e){if(void 0===e)return p("GRPC error has no .code"),E.UNKNOWN;switch(e){case r.OK:return E.OK;case r.CANCELLED:return E.CANCELLED;case r.UNKNOWN:return E.UNKNOWN;case r.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case r.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case r.INTERNAL:return E.INTERNAL;case r.UNAVAILABLE:return E.UNAVAILABLE;case r.UNAUTHENTICATED:return E.UNAUTHENTICATED;case r.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case r.NOT_FOUND:return E.NOT_FOUND;case r.ALREADY_EXISTS:return E.ALREADY_EXISTS;case r.PERMISSION_DENIED:return E.PERMISSION_DENIED;case r.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case r.ABORTED:return E.ABORTED;case r.OUT_OF_RANGE:return E.OUT_OF_RANGE;case r.UNIMPLEMENTED:return E.UNIMPLEMENTED;case r.DATA_LOSS:return E.DATA_LOSS;default:return v()}}(i=r||(r={}))[i.OK=0]="OK",i[i.CANCELLED=1]="CANCELLED",i[i.UNKNOWN=2]="UNKNOWN",i[i.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",i[i.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",i[i.NOT_FOUND=5]="NOT_FOUND",i[i.ALREADY_EXISTS=6]="ALREADY_EXISTS",i[i.PERMISSION_DENIED=7]="PERMISSION_DENIED",i[i.UNAUTHENTICATED=16]="UNAUTHENTICATED",i[i.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",i[i.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",i[i.ABORTED=10]="ABORTED",i[i.OUT_OF_RANGE=11]="OUT_OF_RANGE",i[i.UNIMPLEMENTED=12]="UNIMPLEMENTED",i[i.INTERNAL=13]="INTERNAL",i[i.UNAVAILABLE=14]="UNAVAILABLE",i[i.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class to{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){O(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return U(this.inner)}size(){return this.innerSize}}/**
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
 */class tl{constructor(e,t){this.comparator=e,this.root=t||th.EMPTY}insert(e,t){return new tl(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,th.BLACK,null,null))}remove(e){return new tl(this.comparator,this.root.remove(e,this.comparator).copy(null,null,th.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tu(this.root,e,this.comparator,!1)}getReverseIterator(){return new tu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tu(this.root,e,this.comparator,!0)}}class tu{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class th{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:th.RED,this.left=null!=r?r:th.EMPTY,this.right=null!=i?i:th.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new th(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return th.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return th.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,th.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,th.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw v();let e=this.left.check();if(e!==this.right.check())throw v();return e+(this.isRed()?0:1)}}th.EMPTY=null,th.RED=!0,th.BLACK=!1,th.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(e,t,n,r,i){return this}insert(e,t,n){return new th(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class tc{constructor(e){this.comparator=e,this.data=new tl(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new td(this.data.getIterator())}getIteratorFrom(e){return new td(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof tc)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new tc(this.comparator);return t.data=e,t}}class td{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */let tf=new tl(ee.comparator),tm=new tl(ee.comparator);function tg(){return new to(e=>e.toString(),(e,t)=>e.isEqual(t))}new tl(ee.comparator);let tp=new tc(ee.comparator);function ty(...e){let t=tp;for(let n of e)t=t.add(n);return t}let tw=new tc(R);/**
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
 */class tv{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){let n=new Map;return n.set(e,tE.createSynthesizedTargetChangeForCurrentChange(e,t)),new tv(M.min(),n,tw,tf,ty())}}class tE{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new tE($.EMPTY_BYTE_STRING,t,ty(),ty(),ty())}}/**
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
 */class tT{constructor(e,t,n,r){this.O=e,this.removedTargetIds=t,this.key=n,this.$=r}}class tI{constructor(e,t){this.targetId=e,this.F=t}}class tA{constructor(e,t,n=$.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class tS{constructor(){this.B=0,this.L=t_(),this.q=$.EMPTY_BYTE_STRING,this.U=!1,this.K=!0}get current(){return this.U}get resumeToken(){return this.q}get G(){return 0!==this.B}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.q=e)}H(){let e=ty(),t=ty(),n=ty();return this.L.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:v()}}),new tE(this.q,this.U,e,t,n)}J(){this.K=!1,this.L=t_()}Y(e,t){this.K=!0,this.L=this.L.insert(e,t)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.U=!0}}class tC{constructor(e){this.nt=e,this.st=new Map,this.it=tf,this.rt=tN(),this.ot=new tc(R)}at(e){for(let t of e.O)e.$&&e.$.isFoundDocument()?this.ut(t,e.$):this.ct(t,e.key,e.$);for(let t of e.removedTargetIds)this.ct(t,e.key,e.$)}ht(e){this.forEachTarget(e,t=>{let n=this.lt(t);switch(e.state){case 0:this.ft(t)&&n.W(e.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(e.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(t);break;case 3:this.ft(t)&&(n.et(),n.W(e.resumeToken));break;case 4:this.ft(t)&&(this.dt(t),n.W(e.resumeToken));break;default:v()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.st.forEach((e,n)=>{this.ft(n)&&t(n)})}_t(e){let t=e.targetId,n=e.F.count,r=this.wt(t);if(r){let e=r.target;if(eT(e)){if(0===n){let n=new ee(e.path);this.ct(t,n,ep.newNoDocument(n,M.min()))}else 1===n||v()}else this.gt(t)!==n&&(this.dt(t),this.ot=this.ot.add(t))}}yt(e){let t=new Map;this.st.forEach((n,r)=>{let i=this.wt(r);if(i){if(n.current&&eT(i.target)){let t=new ee(i.target.path);null!==this.it.get(t)||this.It(r,t)||this.ct(r,t,ep.newNoDocument(t,e))}n.j&&(t.set(r,n.H()),n.J())}});let n=ty();this.rt.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.wt(e);return!t||2===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.it.forEach((t,n)=>n.setReadTime(e));let r=new tv(e,t,this.ot,this.it,n);return this.it=tf,this.rt=tN(),this.ot=new tc(R),r}ut(e,t){if(!this.ft(e))return;let n=this.It(e,t.key)?2:0;this.lt(e).Y(t.key,n),this.it=this.it.insert(t.key,t),this.rt=this.rt.insert(t.key,this.Tt(t.key).add(e))}ct(e,t,n){if(!this.ft(e))return;let r=this.lt(e);this.It(e,t)?r.Y(t,1):r.X(t),this.rt=this.rt.insert(t,this.Tt(t).delete(e)),n&&(this.it=this.it.insert(t,n))}removeTarget(e){this.st.delete(e)}gt(e){let t=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let t=this.st.get(e);return t||(t=new tS,this.st.set(e,t)),t}Tt(e){let t=this.rt.get(e);return t||(t=new tc(R),this.rt=this.rt.insert(e,t)),t}ft(e){let t=null!==this.wt(e);return t||g("WatchChangeAggregator","Detected inactive target",e),t}wt(e){let t=this.st.get(e);return t&&t.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new tS),this.nt.getRemoteKeysForTarget(e).forEach(t=>{this.ct(e,t,null)})}It(e,t){return this.nt.getRemoteKeysForTarget(e).has(t)}}function tN(){return new tl(ee.comparator)}function t_(){return new tl(ee.comparator)}/**
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
 */let tb={asc:"ASCENDING",desc:"DESCENDING"},tk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class tD{constructor(e,t){this.databaseId=e,this.N=t}}function tL(e,t){return e.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function tR(e,t){return e.N?t.toBase64():t.toUint8Array()}function tV(e){return e||v(),M.fromTimestamp(function(e){let t=z(e);return new F(t.seconds,t.nanos)}(e))}function tF(e,t){return new q(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function tM(e){let t=q.fromString(e);return tK(t)||v(),t}function tx(e,t){let n=tM(t);if(n.get(1)!==e.databaseId.projectId)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ee(tP(n))}function tO(e,t){return tF(e.databaseId,t)}function tU(e){return new q(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function tP(e){return e.length>4&&"documents"===e.get(4)||v(),e.popFirst(5)}function tq(e){return{fieldPath:e.canonicalString()}}function tB(e){return K.fromServerFormat(e.fieldPath)}function tK(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}class t${constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class tG{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new tG((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof tG?t:tG.resolve(t)}catch(e){return tG.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):tG.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):tG.reject(t)}static resolve(e){return new tG((t,n)=>{t(e)})}static reject(e){return new tG((t,n)=>{n(e)})}static waitFor(e){return new tG((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=tG.resolve(!1);for(let n of e)t=t.next(e=>e?tG.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}}function tz(e){return"IndexedDbTransactionError"===e.name}/**
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
 */class tj{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof te?function(e,t,n){let r=e.value.clone(),i=tr(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof tt?function(e,t,n){if(!e6(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=tr(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(tn(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e){for(let t of this.baseMutations)t.key.isEqual(e.key)&&e9(t,e,this.localWriteTime);for(let t of this.mutations)t.key.isEqual(e.key)&&e9(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(t=>{let n=e.get(t.key);this.applyToLocalView(n),n.isValidDocument()||n.convertToNoDocument(M.min())})}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ty())}isEqual(e){return this.batchId===e.batchId&&V(this.mutations,e.mutations,(e,t)=>e8(e,t))&&V(this.baseMutations,e.baseMutations,(e,t)=>e8(e,t))}}/**
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
 */class tQ{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class tH{constructor(e,t,n,r,i=M.min(),s=M.min(),a=$.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a}withSequenceNumber(e){return new tH(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new tH(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new tH(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class tW{constructor(e){this.Jt=e}}/**
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
 */class tY{constructor(){}Zt(e,t){this.te(e,t),t.ee()}te(e,t){if("nullValue"in e)this.ne(t,5);else if("booleanValue"in e)this.ne(t,10),t.se(e.booleanValue?1:0);else if("integerValue"in e)this.ne(t,15),t.se(j(e.integerValue));else if("doubleValue"in e){let n=j(e.doubleValue);isNaN(n)?this.ne(t,13):(this.ne(t,15),J(n)?t.se(0):t.se(n))}else if("timestampValue"in e){let n=e.timestampValue;this.ne(t,20),"string"==typeof n?t.ie(n):(t.ie(`${n.seconds||""}`),t.se(n.nanos||0))}else if("stringValue"in e)this.re(e.stringValue,t),this.oe(t);else if("bytesValue"in e)this.ne(t,30),t.ae(Q(e.bytesValue)),this.oe(t);else if("referenceValue"in e)this.ue(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.ne(t,45),t.se(n.latitude||0),t.se(n.longitude||0)}else"mapValue"in e?em(e)?this.ne(t,Number.MAX_SAFE_INTEGER):(this.ce(e.mapValue,t),this.oe(t)):"arrayValue"in e?(this.he(e.arrayValue,t),this.oe(t)):v()}re(e,t){this.ne(t,25),this.le(e,t)}le(e,t){t.ie(e)}ce(e,t){let n=e.fields||{};for(let e of(this.ne(t,55),Object.keys(n)))this.re(e,t),this.te(n[e],t)}he(e,t){let n=e.values||[];for(let e of(this.ne(t,50),n))this.te(e,t)}ue(e,t){this.ne(t,37),ee.fromName(e).path.forEach(e=>{this.ne(t,60),this.le(e,t)})}ne(e,t){e.se(t)}oe(e){e.se(2)}}tY.fe=new tY;/**
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
 */class tX{constructor(){this.Ue=new tZ}addToCollectionParentIndex(e,t){return this.Ue.add(t),tG.resolve()}getCollectionParents(e,t){return tG.resolve(this.Ue.getEntries(t))}addFieldIndex(e,t){return tG.resolve()}deleteFieldIndex(e,t){return tG.resolve()}getDocumentsMatchingTarget(e,t){return tG.resolve(null)}getFieldIndex(e,t){return tG.resolve(null)}getFieldIndexes(e,t){return tG.resolve([])}getNextCollectionGroupToUpdate(e){return tG.resolve(null)}updateCollectionGroup(e,t,n){return tG.resolve()}updateIndexEntries(e,t){return tG.resolve()}}class tZ{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new tc(q.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new tc(q.comparator)).toArray()}}new Uint8Array(0);class tJ{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new tJ(e,tJ.DEFAULT_COLLECTION_PERCENTILE,tJ.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */tJ.DEFAULT_COLLECTION_PERCENTILE=10,tJ.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,tJ.DEFAULT=new tJ(41943040,tJ.DEFAULT_COLLECTION_PERCENTILE,tJ.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),tJ.DISABLED=new tJ(-1,0,0);/**
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
 */class t0{constructor(e){this.wn=e}next(){return this.wn+=2,this.wn}static mn(){return new t0(0)}static gn(){return new t0(-1)}}/**
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
 */async function t1(e){if(e.code!==E.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;g("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class t2{constructor(){this.changes=new to(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ep.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?tG.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class t4{constructor(e,t,n){this.ls=e,this.Fs=t,this.indexManager=n}Bs(e,t){return this.Fs.getAllMutationBatchesAffectingDocumentKey(e,t).next(n=>this.Ls(e,t,n))}Ls(e,t,n){return this.ls.getEntry(e,t).next(e=>{for(let t of n)t.applyToLocalView(e);return e})}qs(e,t){e.forEach((e,n)=>{for(let e of t)e.applyToLocalView(n)})}Us(e,t){return this.ls.getEntries(e,t).next(t=>this.Ks(e,t).next(()=>t))}Ks(e,t){return this.Fs.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>this.qs(t,e))}Gs(e,t,n){return ee.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.Qs(e,t.path):eq(t)?this.js(e,t,n):this.Ws(e,t,n)}Qs(e,t){return this.Bs(e,new ee(t)).next(e=>{let t=tm;return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}js(e,t,n){let r=t.collectionGroup,i=tm;return this.indexManager.getCollectionParents(e,r).next(s=>tG.forEach(s,s=>{var a;let o=(a=s.child(r),new eM(a,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.Ws(e,o,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}Ws(e,t,n){let r;return this.ls.getAll(e,t.path,n).next(n=>(r=n,this.Fs.getAllMutationBatchesAffectingQuery(e,t))).next(e=>{for(let t of e)for(let e of t.mutations){let n=e.key,i=r.get(n);null==i&&(i=ep.newInvalidDocument(n),r=r.insert(n,i)),e9(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}).next(()=>(r.forEach((e,n)=>{ej(t,n)||(r=r.remove(e))}),r))}}/**
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
 */class t3{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.zs=n,this.Hs=r}static Js(e,t){let n=ty(),r=ty();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new t3(e,t.fromCache,n,r)}}/**
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
 */class t6{Ys(e){this.Xs=e}Gs(e,t,n,r){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())||n.isEqual(M.min())?this.Zs(e,t):this.Xs.Us(e,r).next(i=>{let s=this.ti(t,i);return(ex(t)||eO(t))&&this.ei(t.limitType,s,r,n)?this.Zs(e,t):(m()<=o.in.DEBUG&&g("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),ez(t)),this.Xs.Gs(e,t,n).next(e=>(s.forEach(t=>{e=e.insert(t.key,t)}),e)))})}ti(e,t){let n=new tc(eQ(e));return t.forEach((t,r)=>{ej(e,r)&&(n=n.add(r))}),n}ei(e,t,n,r){if(n.size!==t.size)return!0;let i="F"===e?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Zs(e,t){return m()<=o.in.DEBUG&&g("QueryEngine","Using full collection scan to execute query:",ez(t)),this.Xs.Gs(e,t,M.min())}}/**
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
 */class t5{constructor(e,t,n,r){this.persistence=e,this.ni=t,this.M=r,this.si=new tl(R),this.ii=new to(e=>ev(e),eE),this.ri=M.min(),this.oi=e.getRemoteDocumentCache(),this.hs=e.getTargetCache(),this.fs=e.getBundleCache(),this.ai(n)}ai(e){this.indexManager=this.persistence.getIndexManager(e),this.Fs=this.persistence.getMutationQueue(e,this.indexManager),this.ui=new t4(this.oi,this.Fs,this.indexManager),this.oi.setIndexManager(this.indexManager),this.ni.Ys(this.ui)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.si))}}async function t9(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.Fs.getAllMutationBatches(n).next(i=>(r=i,e.ai(t),e.Fs.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=ty();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.ui.Us(n,a).next(e=>({ci:e,removedBatchIds:i,addedBatchIds:s}))})})}function t8(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hs.getLastRemoteSnapshotVersion(t))}async function t7(e,t,n){let r=e.si.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,r))}catch(e){if(!tz(e))throw e;g("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.si=e.si.remove(t),e.ii.delete(r.target)}function ne(e,t,n){let r=M.min(),i=ty();return e.persistence.runTransaction("Execute query","readonly",s=>(function(e,t,n){let r=e.ii.get(n);return void 0!==r?tG.resolve(e.si.get(r)):e.hs.getTargetData(t,n)})(e,s,eK(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.hs.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.ni.Gs(s,t,n?r:M.min(),n?i:ty())).next(e=>({documents:e,hi:i})))}/**
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
 */class nt{constructor(e){this.M=e,this._i=new Map,this.wi=new Map}getBundleMetadata(e,t){return tG.resolve(this._i.get(t))}saveBundleMetadata(e,t){return this._i.set(t.id,{id:t.id,version:t.version,createTime:tV(t.createTime)}),tG.resolve()}getNamedQuery(e,t){return tG.resolve(this.wi.get(t))}saveNamedQuery(e,t){return this.wi.set(t.name,{name:t.name,query:function(e){var t;let n=function(e){var t,n,r,i,s,a,o,l;let u,h=function(e){let t=tM(e);return 4===t.length?q.emptyPath():tP(t)}(e.parent),c=e.structuredQuery,d=c.from?c.from.length:0,f=null;if(d>0){1===d||v();let e=c.from[0];e.allDescendants?f=e.collectionId:h=h.child(e.collectionId)}let m=[];c.where&&(m=function e(t){return t?void 0!==t.unaryFilter?[function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=tB(e.unaryFilter.field);return eI.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=tB(e.unaryFilter.field);return eI.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=tB(e.unaryFilter.field);return eI.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=tB(e.unaryFilter.field);return eI.create(i,"!=",{nullValue:"NULL_VALUE"});default:return v()}}(t)]:void 0!==t.fieldFilter?[eI.create(tB(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(t.fieldFilter.op),t.fieldFilter.value)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>e(t)).reduce((e,t)=>e.concat(t)):v():[]}(c.where));let g=[];c.orderBy&&(g=c.orderBy.map(e=>new eR(tB(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let p=null;c.limit&&(p=Z(u="object"==typeof(t=c.limit)?t.value:t)?null:u);let y=null;c.startAt&&(y=function(e){let t=!!e.before,n=e.values||[];return new eL(n,t)}(c.startAt));let w=null;return c.endAt&&(w=function(e){let t=!e.before,n=e.values||[];return new eL(n,t)}(c.endAt)),n=h,r=f,i=g,s=m,a=p,o=y,l=w,new eM(n,r,i,s,a,"F",o,l)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?(t=n.limit,new eM(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,"L",n.startAt,n.endAt)):n}(t.bundledQuery),readTime:tV(t.readTime)}),tG.resolve()}}/**
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
 */class nn{constructor(){this.overlays=new tl(ee.comparator),this.mi=new Map}getOverlay(e,t){return tG.resolve(this.overlays.get(t))}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.Xt(e,t,r)}),tG.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.mi.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.mi.delete(n)),tG.resolve()}getOverlaysForCollection(e,t,n){let r=tg(),i=t.length+1,s=new ee(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return tG.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new tl((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=tg(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=tg(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return tG.resolve(a)}Xt(e,t,n){if(null===n)return;let r=this.overlays.get(n.key);if(null!==r){let e=this.mi.get(r.largestBatchId).delete(n.key);this.mi.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new tQ(t,n));let i=this.mi.get(t);void 0===i&&(i=ty(),this.mi.set(t,i)),this.mi.set(t,i.add(n.key))}}/**
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
 */class nr{constructor(){this.gi=new tc(ni.yi),this.pi=new tc(ni.Ii)}isEmpty(){return this.gi.isEmpty()}addReference(e,t){let n=new ni(e,t);this.gi=this.gi.add(n),this.pi=this.pi.add(n)}Ti(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Ei(new ni(e,t))}Ai(e,t){e.forEach(e=>this.removeReference(e,t))}Ri(e){let t=new ee(new q([])),n=new ni(t,e),r=new ni(t,e+1),i=[];return this.pi.forEachInRange([n,r],e=>{this.Ei(e),i.push(e.key)}),i}bi(){this.gi.forEach(e=>this.Ei(e))}Ei(e){this.gi=this.gi.delete(e),this.pi=this.pi.delete(e)}Pi(e){let t=new ee(new q([])),n=new ni(t,e),r=new ni(t,e+1),i=ty();return this.pi.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new ni(e,0),n=this.gi.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class ni{constructor(e,t){this.key=e,this.Vi=t}static yi(e,t){return ee.comparator(e.key,t.key)||R(e.Vi,t.Vi)}static Ii(e,t){return R(e.Vi,t.Vi)||ee.comparator(e.key,t.key)}}/**
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
 */class ns{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.Fs=[],this.vi=1,this.Si=new tc(ni.yi)}checkEmpty(e){return tG.resolve(0===this.Fs.length)}addMutationBatch(e,t,n,r){let i=this.vi;this.vi++,this.Fs.length>0&&this.Fs[this.Fs.length-1];let s=new tj(i,t,n,r);for(let t of(this.Fs.push(s),r))this.Si=this.Si.add(new ni(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return tG.resolve(s)}lookupMutationBatch(e,t){return tG.resolve(this.Di(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.Ci(t+1),r=n<0?0:n;return tG.resolve(this.Fs.length>r?this.Fs[r]:null)}getHighestUnacknowledgedBatchId(){return tG.resolve(0===this.Fs.length?-1:this.vi-1)}getAllMutationBatches(e){return tG.resolve(this.Fs.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new ni(t,0),r=new ni(t,Number.POSITIVE_INFINITY),i=[];return this.Si.forEachInRange([n,r],e=>{let t=this.Di(e.Vi);i.push(t)}),tG.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new tc(R);return t.forEach(e=>{let t=new ni(e,0),r=new ni(e,Number.POSITIVE_INFINITY);this.Si.forEachInRange([t,r],e=>{n=n.add(e.Vi)})}),tG.resolve(this.xi(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;ee.isDocumentKey(i)||(i=i.child(""));let s=new ni(new ee(i),0),a=new tc(R);return this.Si.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.Vi)),!0)},s),tG.resolve(this.xi(a))}xi(e){let t=[];return e.forEach(e=>{let n=this.Di(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.Ni(t.batchId,"removed")||v(),this.Fs.shift();let n=this.Si;return tG.forEach(t.mutations,r=>{let i=new ni(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Si=n})}dn(e){}containsKey(e,t){let n=new ni(t,0),r=this.Si.firstAfterOrEqual(n);return tG.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.Fs.length,tG.resolve()}Ni(e,t){return this.Ci(e)}Ci(e){return 0===this.Fs.length?0:e-this.Fs[0].batchId}Di(e){let t=this.Ci(e);return t<0||t>=this.Fs.length?null:this.Fs[t]}}/**
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
 */class na{constructor(e){this.ki=e,this.docs=new tl(ee.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.ki(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return tG.resolve(n?n.document.mutableCopy():ep.newInvalidDocument(t))}getEntries(e,t){let n=tf;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():ep.newInvalidDocument(e))}),tG.resolve(n)}getAll(e,t,n){let r=tf,i=new ee(t.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){let{key:e,value:{document:i}}=s.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||0>=i.readTime.compareTo(n)||(r=r.insert(i.key,i.mutableCopy()))}return tG.resolve(r)}Mi(e,t){return tG.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new no(this)}getSize(e){return tG.resolve(this.size)}}class no extends t2{constructor(e){super(),this.Un=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Un.addEntry(e,r)):this.Un.removeEntry(n)}),tG.waitFor(t)}getFromCache(e,t){return this.Un.getEntry(e,t)}getAllFromCache(e,t){return this.Un.getEntries(e,t)}}/**
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
 */class nl{constructor(e){this.persistence=e,this.Oi=new to(e=>ev(e),eE),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.$i=0,this.Fi=new nr,this.targetCount=0,this.Bi=t0.mn()}forEachTarget(e,t){return this.Oi.forEach((e,n)=>t(n)),tG.resolve()}getLastRemoteSnapshotVersion(e){return tG.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return tG.resolve(this.$i)}allocateTargetId(e){return this.highestTargetId=this.Bi.next(),tG.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.$i&&(this.$i=t),tG.resolve()}In(e){this.Oi.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Bi=new t0(t),this.highestTargetId=t),e.sequenceNumber>this.$i&&(this.$i=e.sequenceNumber)}addTargetData(e,t){return this.In(t),this.targetCount+=1,tG.resolve()}updateTargetData(e,t){return this.In(t),tG.resolve()}removeTargetData(e,t){return this.Oi.delete(t.target),this.Fi.Ri(t.targetId),this.targetCount-=1,tG.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.Oi.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Oi.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),tG.waitFor(i).next(()=>r)}getTargetCount(e){return tG.resolve(this.targetCount)}getTargetData(e,t){let n=this.Oi.get(t)||null;return tG.resolve(n)}addMatchingKeys(e,t,n){return this.Fi.Ti(t,n),tG.resolve()}removeMatchingKeys(e,t,n){this.Fi.Ai(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),tG.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Fi.Ri(t),tG.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Fi.Pi(t);return tG.resolve(n)}containsKey(e,t){return tG.resolve(this.Fi.containsKey(t))}}/**
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
 */class nu{constructor(e,t){this.Li={},this.overlays={},this.Zn=new D(0),this.ts=!1,this.ts=!0,this.referenceDelegate=e(this),this.hs=new nl(this),this.indexManager=new tX,this.ls=new na(e=>this.referenceDelegate.qi(e)),this.M=new tW(t),this.fs=new nt(this.M)}start(){return Promise.resolve()}shutdown(){return this.ts=!1,Promise.resolve()}get started(){return this.ts}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nn,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Li[e.toKey()];return n||(n=new ns(t,this.referenceDelegate),this.Li[e.toKey()]=n),n}getTargetCache(){return this.hs}getRemoteDocumentCache(){return this.ls}getBundleCache(){return this.fs}runTransaction(e,t,n){g("MemoryPersistence","Starting transaction:",e);let r=new nh(this.Zn.next());return this.referenceDelegate.Ui(),n(r).next(e=>this.referenceDelegate.Ki(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Gi(e,t){return tG.or(Object.values(this.Li).map(n=>()=>n.containsKey(e,t)))}}class nh extends t${constructor(e){super(),this.currentSequenceNumber=e}}class nc{constructor(e){this.persistence=e,this.Qi=new nr,this.ji=null}static Wi(e){return new nc(e)}get zi(){if(this.ji)return this.ji;throw v()}addReference(e,t,n){return this.Qi.addReference(n,t),this.zi.delete(n.toString()),tG.resolve()}removeReference(e,t,n){return this.Qi.removeReference(n,t),this.zi.add(n.toString()),tG.resolve()}markPotentiallyOrphaned(e,t){return this.zi.add(t.toString()),tG.resolve()}removeTarget(e,t){this.Qi.Ri(t.targetId).forEach(e=>this.zi.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.zi.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ui(){this.ji=new Set}Ki(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return tG.forEach(this.zi,n=>{let r=ee.fromPath(n);return this.Hi(e,r).next(e=>{e||t.removeEntry(r,M.min())})}).next(()=>(this.ji=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hi(e,t).next(e=>{e?this.zi.delete(t.toString()):this.zi.add(t.toString())})}qi(e){return 0}Hi(e,t){return tG.or([()=>tG.resolve(this.Qi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gi(e,t)])}}class nd{constructor(){this.activeTargetIds=tw}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nf{constructor(){this.Or=new nd,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Or.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,t,n){this.$r[e]=t}removeLocalQueryTarget(e){this.Or.Zi(e)}isLocalQueryTarget(e){return this.Or.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Or.activeTargetIds}isActiveQueryTarget(e){return this.Or.activeTargetIds.has(e)}start(){return this.Or=new nd,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class nm{Fr(e){}shutdown(){}}/**
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
 */class ng{constructor(){this.Br=()=>this.Lr(),this.qr=()=>this.Ur(),this.Kr=[],this.Gr()}Fr(e){this.Kr.push(e)}shutdown(){window.removeEventListener("online",this.Br),window.removeEventListener("offline",this.qr)}Gr(){window.addEventListener("online",this.Br),window.addEventListener("offline",this.qr)}Lr(){for(let e of(g("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.Kr))e(0)}Ur(){for(let e of(g("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.Kr))e(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
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
 */let np={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class ny{constructor(e){this.Qr=e.Qr,this.jr=e.jr}Wr(e){this.zr=e}Hr(e){this.Jr=e}onMessage(e){this.Yr=e}close(){this.jr()}send(e){this.Qr(e)}Xr(){this.zr()}Zr(e){this.Jr(e)}eo(e){this.Yr(e)}}/**
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
 */class nw extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http";this.no=t+"://"+e.host,this.so="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}io(e,t,n,r,i){let s=this.ro(e,t);g("RestConnection","Sending: ",s,n);let a={};return this.oo(a,r,i),this.ao(e,s,a,n).then(e=>(g("RestConnection","Received: ",e),e),t=>{throw y("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t})}uo(e,t,n,r,i){return this.io(e,t,n,r,i)}oo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+d,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}ro(e,t){let n=np[e];return`${this.no}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}ao(e,t,n,r){return new Promise((i,s)=>{let a=new u.JJ;a.listenOnce(u.tw.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case u.jK.NO_ERROR:let t=a.getResponseJson();g("Connection","XHR received:",JSON.stringify(t)),i(t);break;case u.jK.TIMEOUT:g("Connection",'RPC "'+e+'" timed out'),s(new T(E.DEADLINE_EXCEEDED,"Request time out"));break;case u.jK.HTTP_ERROR:let n=a.getStatus();if(g("Connection",'RPC "'+e+'" failed with status:',n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson().error;if(e&&e.status&&e.message){let t=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(t)>=0?t:E.UNKNOWN}(e.status);s(new T(t,e.message))}else s(new T(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else s(new T(E.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{g("Connection",'RPC "'+e+'" completed.')}});let o=JSON.stringify(r);a.send(t,"POST",o,n,15)})}co(e,t,n){let i=[this.no,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=(0,u.UE)(),a=(0,u.FJ)(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new u.zI({})),this.oo(o.initMessageHeaders,t,n),(0,l.uI)()||(0,l.b$)()||(0,l.d)()||(0,l.w1)()||(0,l.Mn)()||(0,l.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");let h=i.join("");g("Connection","Creating WebChannel: "+h,o);let c=s.createWebChannel(h,o),d=!1,f=!1,m=new ny({Qr:e=>{f?g("Connection","Not sending because WebChannel is closed:",e):(d||(g("Connection","Opening WebChannel transport."),c.open(),d=!0),g("Connection","WebChannel sending:",e),c.send(e))},jr:()=>c.close()}),p=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return p(c,u.ii.EventType.OPEN,()=>{f||g("Connection","WebChannel transport opened.")}),p(c,u.ii.EventType.CLOSE,()=>{f||(f=!0,g("Connection","WebChannel transport closed"),m.Zr())}),p(c,u.ii.EventType.ERROR,e=>{f||(f=!0,y("Connection","WebChannel transport errored:",e),m.Zr(new T(E.UNAVAILABLE,"The operation could not be completed")))}),p(c,u.ii.EventType.MESSAGE,e=>{var t;if(!f){let n=e.data[0];n||v();let i=n.error||(null===(t=n[0])||void 0===t?void 0:t.error);if(i){g("Connection","WebChannel received error:",i);let e=i.status,t=function(e){let t=r[e];if(void 0!==t)return ta(t)}(e),n=i.message;void 0===t&&(t=E.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),f=!0,m.Zr(new T(t,n)),c.close()}else g("Connection","WebChannel received:",n),m.eo(n)}}),p(a,u.ju.STAT_EVENT,e=>{e.stat===u.kN.PROXY?g("Connection","Detected buffering proxy"):e.stat===u.kN.NOPROXY&&g("Connection","Detected no buffering proxy")}),setTimeout(()=>{m.Xr()},0),m}}function nv(){return"undefined"!=typeof document?document:null}/**
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
 */function nE(e){return new tD(e,!0)}class nT{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Hn=e,this.timerId=t,this.ho=n,this.lo=r,this.fo=i,this._o=0,this.wo=null,this.mo=Date.now(),this.reset()}reset(){this._o=0}yo(){this._o=this.fo}po(e){this.cancel();let t=Math.floor(this._o+this.Io()),n=Math.max(0,Date.now()-this.mo),r=Math.max(0,t-n);r>0&&g("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this._o} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.wo=this.Hn.enqueueAfterDelay(this.timerId,r,()=>(this.mo=Date.now(),e())),this._o*=this.lo,this._o<this.ho&&(this._o=this.ho),this._o>this.fo&&(this._o=this.fo)}To(){null!==this.wo&&(this.wo.skipDelay(),this.wo=null)}cancel(){null!==this.wo&&(this.wo.cancel(),this.wo=null)}Io(){return(Math.random()-.5)*this._o}}/**
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
 */class nI{constructor(e,t,n,r,i,s,a,o){this.Hn=e,this.Eo=n,this.Ao=r,this.Ro=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.bo=0,this.Po=null,this.Vo=null,this.stream=null,this.vo=new nT(e,t)}So(){return 1===this.state||5===this.state||this.Do()}Do(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Co()}async stop(){this.So()&&await this.close(0)}xo(){this.state=0,this.vo.reset()}No(){this.Do()&&null===this.Po&&(this.Po=this.Hn.enqueueAfterDelay(this.Eo,6e4,()=>this.ko()))}Mo(e){this.Oo(),this.stream.send(e)}async ko(){if(this.Do())return this.close(0)}Oo(){this.Po&&(this.Po.cancel(),this.Po=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,t){this.Oo(),this.$o(),this.vo.cancel(),this.bo++,4!==e?this.vo.reset():t&&t.code===E.RESOURCE_EXHAUSTED?(p(t.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.vo.yo()):t&&t.code===E.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Fo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Hr(t)}Fo(){}auth(){this.state=1;let e=this.Bo(this.bo),t=this.bo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.bo===t&&this.Lo(e,n)},t=>{e(()=>{let e=new T(E.UNKNOWN,"Fetching auth token failed: "+t.message);return this.qo(e)})})}Lo(e,t){let n=this.Bo(this.bo);this.stream=this.Uo(e,t),this.stream.Wr(()=>{n(()=>(this.state=2,this.Vo=this.Hn.enqueueAfterDelay(this.Ao,1e4,()=>(this.Do()&&(this.state=3),Promise.resolve())),this.listener.Wr()))}),this.stream.Hr(e=>{n(()=>this.qo(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Co(){this.state=5,this.vo.po(async()=>{this.state=0,this.start()})}qo(e){return g("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Bo(e){return t=>{this.Hn.enqueueAndForget(()=>this.bo===e?t():(g("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nA extends nI{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.M=i}Uo(e,t){return this.Ro.co("Listen",e,t)}onMessage(e){this.vo.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:v(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.N?(void 0===i||"string"==typeof i||v(),$.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||v(),$.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause,u=l&&function(e){let t=void 0===e.code?E.UNKNOWN:ta(e.code);return new T(t,e.message||"")}(l);n=new tA(s,a,o,u||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=tx(e,r.document.name),s=tV(r.document.updateTime),a=new eg({mapValue:{fields:r.document.fields}}),o=ep.newFoundDocument(i,s,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new tT(l,u,o.key,o)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=tx(e,r.document),s=r.readTime?tV(r.readTime):M.min(),a=ep.newNoDocument(i,s),o=r.removedTargetIds||[];n=new tT([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=tx(e,r.document),s=r.removedTargetIds||[];n=new tT([],s,i,null)}else{if(!("filter"in t))return v();{t.filter;let e=t.filter;e.targetId;let r=e.count||0,i=new ts(r),s=e.targetId;n=new tI(s,i)}}return n}(this.M,e),n=function(e){if(!("targetChange"in e))return M.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?M.min():t.readTime?tV(t.readTime):M.min()}(e);return this.listener.Ko(t,n)}Go(e){let t={};t.database=tU(this.M),t.addTarget=function(e,t){let n;let r=t.target;return(n=eT(r)?{documents:{documents:[tO(e,r.path)]}}:{query:function(e,t){var n,r,i;let s={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(s.parent=tO(e,a),s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s.parent=tO(e,a.popLast()),s.structuredQuery.from=[{collectionId:a.lastSegment()}]);let o=function(e){if(0===e.length)return;let t=e.map(e=>(function(e){if("=="===e.op){if(ec(e.value))return{unaryFilter:{field:tq(e.field),op:"IS_NAN"}};if(eh(e.value))return{unaryFilter:{field:tq(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ec(e.value))return{unaryFilter:{field:tq(e.field),op:"IS_NOT_NAN"}};if(eh(e.value))return{unaryFilter:{field:tq(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:tq(e.field),op:tk[e.op],value:e.value}}})(e));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);o&&(s.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:tq(e.field),direction:tb[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let u=(r=t.limit,e.N||Z(r)?r:{value:r});return null!==u&&(s.structuredQuery.limit=u),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(i=t.endAt).inclusive,values:i.position}),s}(e,r)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=tR(e,t.resumeToken):t.snapshotVersion.compareTo(M.min())>0&&(n.readTime=tL(e,t.snapshotVersion.toTimestamp())),n}(this.M,e);let n=function(e,t){let n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return v()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.M,e);n&&(t.labels=n),this.Mo(t)}Qo(e){let t={};t.database=tU(this.M),t.removeTarget=e,this.Mo(t)}}/**
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
 */class nS extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.Ro=n,this.M=r,this.Xo=!1}Zo(){if(this.Xo)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}io(e,t,n){return this.Zo(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.Ro.io(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(E.UNKNOWN,e.toString())})}uo(e,t,n){return this.Zo(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.Ro.uo(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(E.UNKNOWN,e.toString())})}terminate(){this.Xo=!0}}class nC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ta=0,this.ea=null,this.na=!0}sa(){0===this.ta&&(this.ia("Unknown"),this.ea=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ea=null,this.ra("Backend didn't respond within 10 seconds."),this.ia("Offline"),Promise.resolve())))}oa(e){"Online"===this.state?this.ia("Unknown"):(this.ta++,this.ta>=1&&(this.aa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ia("Offline")))}set(e){this.aa(),this.ta=0,"Online"===e&&(this.na=!1),this.ia(e)}ia(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.na?(p(t),this.na=!1):g("OnlineStateTracker",t)}aa(){null!==this.ea&&(this.ea.cancel(),this.ea=null)}}/**
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
 */class nN{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.ua=[],this.ca=new Map,this.ha=new Set,this.la=[],this.fa=i,this.fa.Fr(e=>{n.enqueueAndForget(async()=>{nM(this)&&(g("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.ha.add(4),await nb(e),e.da.set("Unknown"),e.ha.delete(4),await n_(e)}(this))})}),this.da=new nC(n,r)}}async function n_(e){if(nM(e))for(let t of e.la)await t(!0)}async function nb(e){for(let t of e.la)await t(!1)}function nk(e,t){e.ca.has(t.targetId)||(e.ca.set(t.targetId,t),nF(e)?nV(e):nK(e).Do()&&nL(e,t))}function nD(e,t){let n=nK(e);e.ca.delete(t),n.Do()&&nR(e,t),0===e.ca.size&&(n.Do()?n.No():nM(e)&&e.da.set("Unknown"))}function nL(e,t){e._a.Z(t.targetId),nK(e).Go(t)}function nR(e,t){e._a.Z(t),nK(e).Qo(t)}function nV(e){e._a=new tC({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.ca.get(t)||null}),nK(e).start(),e.da.sa()}function nF(e){return nM(e)&&!nK(e).So()&&e.ca.size>0}function nM(e){return 0===e.ha.size}async function nx(e){e.ca.forEach((t,n)=>{nL(e,t)})}async function nO(e,t){e._a=void 0,nF(e)?(e.da.oa(t),nV(e)):e.da.set("Unknown")}async function nU(e,t,n){if(e.da.set("Online"),t instanceof tA&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.ca.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.ca.delete(r),e._a.removeTarget(r))}(e,t)}catch(n){g("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await nP(e,n)}else if(t instanceof tT?e._a.at(t):t instanceof tI?e._a._t(t):e._a.ht(t),!n.isEqual(M.min()))try{let t=await t8(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e._a.yt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.ca.get(r);i&&e.ca.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach(t=>{let n=e.ca.get(t);if(!n)return;e.ca.set(t,n.withResumeToken($.EMPTY_BYTE_STRING,n.snapshotVersion)),nR(e,t);let r=new tH(n.target,t,1,n.sequenceNumber);nL(e,r)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){g("RemoteStore","Failed to raise snapshot:",t),await nP(e,t)}}async function nP(e,t,n){if(!tz(t))throw t;e.ha.add(1),await nb(e),e.da.set("Offline"),n||(n=()=>t8(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{g("RemoteStore","Retrying IndexedDB access"),await n(),e.ha.delete(1),await n_(e)})}async function nq(e,t){e.asyncQueue.verifyOperationInProgress(),g("RemoteStore","RemoteStore received new credentials");let n=nM(e);e.ha.add(3),await nb(e),n&&e.da.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.ha.delete(3),await n_(e)}async function nB(e,t){t?(e.ha.delete(2),await n_(e)):t||(e.ha.add(2),await nb(e),e.da.set("Unknown"))}function nK(e){var t,n,r;return e.wa||(e.wa=(t=e.datastore,n=e.asyncQueue,r={Wr:nx.bind(null,e),Hr:nO.bind(null,e),Ko:nU.bind(null,e)},t.Zo(),new nA(n,t.Ro,t.authCredentials,t.appCheckCredentials,t.M,r)),e.la.push(async t=>{t?(e.wa.xo(),nF(e)?nV(e):e.da.set("Unknown")):(await e.wa.stop(),e._a=void 0)})),e.wa}/**
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
 */class n${constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new I,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){let s=Date.now()+n,a=new n$(e,t,s,r,i);return a.start(n),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nG(e,t){if(p("AsyncQueue",`${t}: ${e}`),tz(e))return new T(E.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class nz{constructor(e){this.comparator=e?(t,n)=>e(t,n)||ee.comparator(t.key,n.key):(e,t)=>ee.comparator(e.key,t.key),this.keyedMap=tm,this.sortedSet=new tl(this.comparator)}static emptySet(e){return new nz(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof nz)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new nz;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class nj{constructor(){this.ga=new tl(ee.comparator)}track(e){let t=e.doc.key,n=this.ga.get(t);n?0!==e.type&&3===n.type?this.ga=this.ga.insert(t,e):3===e.type&&1!==n.type?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.ga=this.ga.remove(t):1===e.type&&2===n.type?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):v():this.ga=this.ga.insert(t,e)}ya(){let e=[];return this.ga.inorderTraversal((t,n)=>{e.push(n)}),e}}class nQ{constructor(e,t,n,r,i,s,a,o){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o}static fromInitialDocuments(e,t,n,r){let i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new nQ(e,t,nz.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&e$(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
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
 */class nH{constructor(){this.pa=void 0,this.listeners=[]}}class nW{constructor(){this.queries=new to(e=>eG(e),e$),this.onlineState="Unknown",this.Ia=new Set}}async function nY(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i||(r=!0,i=new nH),r)try{i.pa=await e.onListen(n)}catch(n){let e=nG(n,`Initialization of query '${ez(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,i),i.listeners.push(t),t.Ta(e.onlineState),i.pa&&t.Ea(i.pa)&&n0(e)}async function nX(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i){let e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),r=0===i.listeners.length)}if(r)return e.queries.delete(n),e.onUnlisten(n)}function nZ(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.listeners)e.Ea(r)&&(n=!0);i.pa=r}}n&&n0(e)}function nJ(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.listeners)e.onError(n);e.queries.delete(t)}function n0(e){e.Ia.forEach(e=>{e.next()})}class n1{constructor(e,t,n){this.query=e,this.Aa=t,this.Ra=!1,this.ba=null,this.onlineState="Unknown",this.options=n||{}}Ea(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new nQ(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.Ra?this.Pa(e)&&(this.Aa.next(e),t=!0):this.Va(e,this.onlineState)&&(this.va(e),t=!0),this.ba=e,t}onError(e){this.Aa.error(e)}Ta(e){this.onlineState=e;let t=!1;return this.ba&&!this.Ra&&this.Va(this.ba,e)&&(this.va(this.ba),t=!0),t}Va(e,t){return!e.fromCache||(!this.options.Sa||!("Offline"!==t))&&(!e.docs.isEmpty()||"Offline"===t)}Pa(e){if(e.docChanges.length>0)return!0;let t=this.ba&&this.ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}va(e){e=nQ.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Ra=!0,this.Aa.next(e)}}/**
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
 */class n2{constructor(e){this.key=e}}class n4{constructor(e){this.key=e}}class n3{constructor(e,t){this.query=e,this.ka=t,this.Ma=null,this.current=!1,this.Oa=ty(),this.mutatedKeys=ty(),this.$a=eQ(e),this.Fa=new nz(this.$a)}get Ba(){return this.ka}La(e,t){let n=t?t.qa:new nj,r=t?t.Fa:this.Fa,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o=ex(this.query)&&r.size===this.query.limit?r.last():null,l=eO(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),h=ej(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),f=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(n.track({type:3,doc:h}),f=!0):this.Ua(u,h)||(n.track({type:2,doc:h}),f=!0,(o&&this.$a(h,o)>0||l&&0>this.$a(h,l))&&(a=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(h?(s=s.add(h),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),ex(this.query)||eO(this.query))for(;s.size>this.query.limit;){let e=ex(this.query)?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Fa:s,qa:n,ei:a,mutatedKeys:i}}Ua(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){let r=this.Fa;this.Fa=e.Fa,this.mutatedKeys=e.mutatedKeys;let i=e.qa.ya();i.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(e)-n(t)})(e.type,t.type)||this.$a(e.doc,t.doc)),this.Ka(n);let s=t?this.Ga():[],a=0===this.Oa.size&&this.current?1:0,o=a!==this.Ma;return(this.Ma=a,0!==i.length||o)?{snapshot:new nQ(this.query,e.Fa,r,i,e.mutatedKeys,0===a,o,!1),Qa:s}:{Qa:s}}Ta(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Fa:this.Fa,qa:new nj,mutatedKeys:this.mutatedKeys,ei:!1},!1)):{Qa:[]}}ja(e){return!this.ka.has(e)&&!!this.Fa.has(e)&&!this.Fa.get(e).hasLocalMutations}Ka(e){e&&(e.addedDocuments.forEach(e=>this.ka=this.ka.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.ka=this.ka.delete(e)),this.current=e.current)}Ga(){if(!this.current)return[];let e=this.Oa;this.Oa=ty(),this.Fa.forEach(e=>{this.ja(e.key)&&(this.Oa=this.Oa.add(e.key))});let t=[];return e.forEach(e=>{this.Oa.has(e)||t.push(new n4(e))}),this.Oa.forEach(n=>{e.has(n)||t.push(new n2(n))}),t}Wa(e){this.ka=e.hi,this.Oa=ty();let t=this.La(e.documents);return this.applyChanges(t,!0)}za(){return nQ.fromInitialDocuments(this.query,this.Fa,this.mutatedKeys,0===this.Ma)}}class n6{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class n5{constructor(e){this.key=e,this.Ha=!1}}class n9{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Ja={},this.Ya=new to(e=>eG(e),e$),this.Xa=new Map,this.Za=new Set,this.tu=new tl(ee.comparator),this.eu=new Map,this.nu=new nr,this.su={},this.iu=new Map,this.ru=t0.gn(),this.onlineState="Unknown",this.ou=void 0}get isPrimaryClient(){return!0===this.ou}}async function n8(e,t){var n,r;let i,s;let a=(e.remoteStore.remoteSyncer.applyRemoteEvent=rt.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rh.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rr.bind(null,e),e.Ja.Ko=nZ.bind(null,e.eventManager),e.Ja.uu=nJ.bind(null,e.eventManager),e),o=a.Ya.get(t);if(o)i=o.targetId,a.sharedClientState.addLocalQueryTarget(i),s=o.view.za();else{let e=await (n=a.localStore,r=eK(t),n.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return n.hs.getTargetData(e,r).next(i=>i?(t=i,tG.resolve(t)):n.hs.allocateTargetId(e).next(i=>(t=new tH(r,i,0,e.currentSequenceNumber),n.hs.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=n.si.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(n.si=n.si.insert(e.targetId,e),n.ii.set(r,e.targetId)),e}));a.isPrimaryClient&&nk(a.remoteStore,e);let o=a.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,s=await n7(a,t,i,"current"===o)}return s}async function n7(e,t,n,r){e.au=(t,n,r)=>(async function(e,t,n,r){let i=t.view.La(n);i.ei&&(i=await ne(e.localStore,t.query,!1).then(({documents:e})=>t.view.La(e,i)));let s=r&&r.targetChanges.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s);return ra(e,t.targetId,a.Qa),a.snapshot})(e,t,n,r);let i=await ne(e.localStore,t,!0),s=new n3(t,i.hi),a=s.La(i.documents),o=tE.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),l=s.applyChanges(a,e.isPrimaryClient,o);ra(e,n,l.Qa);let u=new n6(t,n,s);return e.Ya.set(t,u),e.Xa.has(n)?e.Xa.get(n).push(t):e.Xa.set(n,[t]),l.snapshot}async function re(e,t){let n=e.Ya.get(t),r=e.Xa.get(n.targetId);if(r.length>1)return e.Xa.set(n.targetId,r.filter(e=>!e$(e,t))),void e.Ya.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await t7(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),nD(e.remoteStore,n.targetId),ri(e,n.targetId)}).catch(t1)):(ri(e,n.targetId),await t7(e.localStore,n.targetId,!0))}async function rt(e,t){try{let n=await function(e,t){let n=t.snapshotVersion,r=e.si;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let a;let o=e.oi.newChangeBuffer({trackRemovals:!0});r=e.si;let l=[];t.targetChanges.forEach((s,a)=>{var o;let u=r.get(a);if(!u)return;l.push(e.hs.removeMatchingKeys(i,s.removedDocuments,a).next(()=>e.hs.addMatchingKeys(i,s.addedDocuments,a)));let h=u.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.has(a)?h=h.withResumeToken($.EMPTY_BYTE_STRING,M.min()).withLastLimboFreeSnapshotVersion(M.min()):s.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(s.resumeToken,n)),r=r.insert(a,h),o=h,(0===u.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&l.push(e.hs.updateTargetData(i,h))});let u=tf;if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(i,n))}),l.push((s=t.documentUpdates,a=ty(),s.forEach(e=>a=a.add(e)),o.getEntries(i,a).next(e=>{let t=tf;return s.forEach((n,r)=>{let i=e.get(n);r.isNoDocument()&&r.version.isEqual(M.min())?(o.removeEntry(n,r.readTime),t=t.insert(n,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(o.addEntry(r),t=t.insert(n,r)):g("LocalStore","Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",r.version)}),t})).next(e=>{u=e})),!n.isEqual(M.min())){let t=e.hs.getLastRemoteSnapshotVersion(i).next(t=>e.hs.setTargetsMetadata(i,i.currentSequenceNumber,n));l.push(t)}return tG.waitFor(l).next(()=>o.apply(i)).next(()=>e.ui.Ks(i,u)).next(()=>u)}).then(t=>(e.si=r,t))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.eu.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||v(),t.addedDocuments.size>0?r.Ha=!0:t.modifiedDocuments.size>0?r.Ha||v():t.removedDocuments.size>0&&(r.Ha||v(),r.Ha=!1))}),await rl(e,n,t)}catch(e){await t1(e)}}function rn(e,t,n){var r;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let i=[];e.Ya.forEach((e,n)=>{let r=n.view.Ta(t);r.snapshot&&i.push(r.snapshot)}),(r=e.eventManager).onlineState=t,n=!1,r.queries.forEach((e,r)=>{for(let e of r.listeners)e.Ta(t)&&(n=!0)}),n&&n0(r),i.length&&e.Ja.Ko(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function rr(e,t,n){e.sharedClientState.updateQueryState(t,"rejected",n);let r=e.eu.get(t),i=r&&r.key;if(i){let n=new tl(ee.comparator);n=n.insert(i,ep.newNoDocument(i,M.min()));let r=ty().add(i),s=new tv(M.min(),new Map,new tc(R),n,r);await rt(e,s),e.tu=e.tu.remove(i),e.eu.delete(t),ro(e)}else await t7(e.localStore,t,!1).then(()=>ri(e,t,n)).catch(t1)}function ri(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.Xa.get(t)))e.Ya.delete(r),n&&e.Ja.uu(r,n);e.Xa.delete(t),e.isPrimaryClient&&e.nu.Ri(t).forEach(t=>{e.nu.containsKey(t)||rs(e,t)})}function rs(e,t){e.Za.delete(t.path.canonicalString());let n=e.tu.get(t);null!==n&&(nD(e.remoteStore,n),e.tu=e.tu.remove(t),e.eu.delete(n),ro(e))}function ra(e,t,n){for(let r of n)r instanceof n2?(e.nu.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.tu.get(n)||e.Za.has(r)||(g("SyncEngine","New document in limbo: "+n),e.Za.add(r),ro(e))}(e,r)):r instanceof n4?(g("SyncEngine","Document no longer in limbo: "+r.key),e.nu.removeReference(r.key,t),e.nu.containsKey(r.key)||rs(e,r.key)):v()}function ro(e){for(;e.Za.size>0&&e.tu.size<e.maxConcurrentLimboResolutions;){var t;let n=e.Za.values().next().value;e.Za.delete(n);let r=new ee(q.fromString(n)),i=e.ru.next();e.eu.set(i,new n5(r)),e.tu=e.tu.insert(r,i),nk(e.remoteStore,new tH(eK((t=r.path,new eM(t))),i,2,D.A))}}async function rl(e,t,n){let r=[],i=[],s=[];e.Ya.isEmpty()||(e.Ya.forEach((a,o)=>{s.push(e.au(o,t,n).then(t=>{if(t){e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,t.fromCache?"not-current":"current"),r.push(t);let n=t3.Js(o.targetId,t);i.push(n)}}))}),await Promise.all(s),e.Ja.Ko(r),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>tG.forEach(t,t=>tG.forEach(t.zs,r=>e.persistence.referenceDelegate.addReference(n,t.targetId,r)).next(()=>tG.forEach(t.Hs,r=>e.persistence.referenceDelegate.removeReference(n,t.targetId,r)))))}catch(e){if(!tz(e))throw e;g("LocalStore","Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.si.get(t),r=n.snapshotVersion,i=n.withLastLimboFreeSnapshotVersion(r);e.si=e.si.insert(t,i)}}}(e.localStore,i))}async function ru(e,t){if(!e.currentUser.isEqual(t)){g("SyncEngine","User change. New user:",t.toKey());let n=await t9(e.localStore,t);e.currentUser=t,e.iu.forEach(e=>{e.forEach(e=>{e.reject(new T(E.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.iu.clear(),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await rl(e,n.ci)}}function rh(e,t){let n=e.eu.get(t);if(n&&n.Ha)return ty().add(n.key);{let n=ty(),r=e.Xa.get(t);if(!r)return n;for(let t of r){let r=e.Ya.get(t);n=n.unionWith(r.view.Ba)}return n}}class rc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=nE(e.databaseInfo.databaseId),this.sharedClientState=this.hu(e),this.persistence=this.lu(e),await this.persistence.start(),this.gcScheduler=this.fu(e),this.localStore=this.du(e)}fu(e){return null}du(e){var t,n,r,i;return t=this.persistence,n=new t6,r=e.initialUser,i=this.M,new t5(t,n,r,i)}lu(e){return new nu(nc.Wi,this.M)}hu(e){return new nf}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class rd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>rn(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ru.bind(null,this.syncEngine),await nB(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new nW}createDatastore(e){var t,n,r;let i=nE(e.databaseInfo.databaseId),s=(t=e.databaseInfo,new nw(t));return n=e.authCredentials,r=e.appCheckCredentials,new nS(n,r,s,i)}createRemoteStore(e){var t,n,r,i;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=ng.vt()?new ng:new nm,new nN(t,n,r,e=>rn(this.syncEngine,e,0),i)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new n9(e,t,n,r,i,s);return a&&(o.ou=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){g("RemoteStore","RemoteStore shutting down."),e.ha.add(5),await nb(e),e.fa.shutdown(),e.da.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class rf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.wu(this.observer.next,e)}error(e){this.observer.error?this.wu(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}mu(){this.muted=!0}wu(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class rm{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=c.UNAUTHENTICATED,this.clientId=L.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{g("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(g("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new I;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=nG(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function rg(e,t){e.asyncQueue.verifyOperationInProgress(),g("FirestoreClient","Initializing OfflineComponentProvider");let n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await t9(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function rp(e,t){e.asyncQueue.verifyOperationInProgress();let n=await ry(e);g("FirestoreClient","Initializing OnlineComponentProvider");let r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>nq(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>nq(t.remoteStore,n)),e.onlineComponents=t}async function ry(e){return e.offlineComponents||(g("FirestoreClient","Using default OfflineComponentProvider"),await rg(e,new rc)),e.offlineComponents}async function rw(e){return e.onlineComponents||(g("FirestoreClient","Using default OnlineComponentProvider"),await rp(e,new rd)),e.onlineComponents}async function rv(e){let t=await rw(e),n=t.eventManager;return n.onListen=n8.bind(null,t.syncEngine),n.onUnlisten=re.bind(null,t.syncEngine),n}let rE=new Map;/**
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
 */function rT(e,t,n){if(!n)throw new T(E.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function rI(e){if(!ee.isDocumentKey(e))throw new T(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function rA(e){if(ee.isDocumentKey(e))throw new T(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function rS(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":v()}function rC(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new T(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=rS(e);throw new T(E.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class rN{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new T(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new T(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new T(E.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class r_{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rN({}),this._settingsFrozen=!1,e instanceof X?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new T(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new X(e.options.projectId)}(e))}get app(){if(!this._app)throw new T(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rN(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new S;switch(e.type){case"gapi":let t=e.client;return"object"==typeof t&&null!==t&&t.auth&&t.auth.getAuthHeaderValueForFirstParty||v(),new _(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new T(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=rE.get(e);t&&(g("ComponentProvider","Removing Datastore"),rE.delete(e),t.terminate())}(this),Promise.resolve()}}/**
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
 */class rb{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rD(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rb(this.firestore,e,this._key)}}class rk{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new rk(this.firestore,e,this._query)}}class rD extends rk{constructor(e,t,n){super(e,t,new eM(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new rb(this.firestore,null,new ee(e))}withConverter(e){return new rD(this.firestore,e,this._path)}}function rL(e,t,...n){if(e=(0,l.m9)(e),rT("collection","path",t),e instanceof r_){let r=q.fromString(t,...n);return rA(r),new rD(e,null,r)}{if(!(e instanceof rb||e instanceof rD))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(q.fromString(t,...n));return rA(r),new rD(e.firestore,null,r)}}function rR(e,t,...n){if(e=(0,l.m9)(e),1==arguments.length&&(t=L.R()),rT("doc","path",t),e instanceof r_){let r=q.fromString(t,...n);return rI(r),new rb(e,null,new ee(r))}{if(!(e instanceof rb||e instanceof rD))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(q.fromString(t,...n));return rI(r),new rb(e.firestore,e instanceof rD?e.converter:null,new ee(r))}}/**
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
 */class rV{constructor(){this.Du=Promise.resolve(),this.Cu=[],this.xu=!1,this.Nu=[],this.ku=null,this.Mu=!1,this.Ou=!1,this.$u=[],this.vo=new nT(this,"async_queue_retry"),this.Fu=()=>{let e=nv();e&&g("AsyncQueue","Visibility state changed to "+e.visibilityState),this.vo.To()};let e=nv();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Fu)}get isShuttingDown(){return this.xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Bu(),this.Lu(e)}enterRestrictedMode(e){if(!this.xu){this.xu=!0,this.Ou=e||!1;let t=nv();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Fu)}}enqueue(e){if(this.Bu(),this.xu)return new Promise(()=>{});let t=new I;return this.Lu(()=>this.xu&&this.Ou?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Cu.push(e),this.qu()))}async qu(){if(0!==this.Cu.length){try{await this.Cu[0](),this.Cu.shift(),this.vo.reset()}catch(e){if(!tz(e))throw e;g("AsyncQueue","Operation failed with retryable error: "+e)}this.Cu.length>0&&this.vo.po(()=>this.qu())}}Lu(e){let t=this.Du.then(()=>(this.Mu=!0,e().catch(e=>{let t;this.ku=e,this.Mu=!1;let n=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);throw p("INTERNAL UNHANDLED ERROR: ",n),e}).then(e=>(this.Mu=!1,e))));return this.Du=t,t}enqueueAfterDelay(e,t,n){this.Bu(),this.$u.indexOf(e)>-1&&(t=0);let r=n$.createAndSchedule(this,e,t,n,e=>this.Uu(e));return this.Nu.push(r),r}Bu(){this.ku&&v()}verifyOperationInProgress(){}async Ku(){let e;do e=this.Du,await e;while(e!==this.Du)}Gu(e){for(let t of this.Nu)if(t.timerId===e)return!0;return!1}Qu(e){return this.Ku().then(()=>{for(let t of(this.Nu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Nu))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Ku()})}ju(e){this.$u.push(e)}Uu(e){let t=this.Nu.indexOf(e);this.Nu.splice(t,1)}}function rF(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])}class rM extends r_{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new rV,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||rU(this),this._firestoreClient.terminate()}}function rx(e=(0,s.Mq)()){return(0,s.qX)(e,"firestore").getImmediate()}function rO(e){return e._firestoreClient||rU(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function rU(e){var t,n,r,i;let s=e._freezeSettings(),a=(n=e._databaseId,r=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",i=e._persistenceKey,new Y(n,r,i,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams));e._firestoreClient=new rm(e._authCredentials,e._appCheckCredentials,e._queue,a)}/**
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
 *//**
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
 */class rP{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new T(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new K(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class rq{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rq($.fromBase64String(e))}catch(e){throw new T(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new rq($.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class rB{constructor(e){this._methodName=e}}/**
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
 */class rK{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new T(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new T(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return R(this._lat,e._lat)||R(this._long,e._long)}}/**
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
 */let r$=/^__.*__$/;function rG(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class rz{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.M=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Wu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get zu(){return this.settings.zu}Hu(e){return new rz(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ju(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Hu({path:n,Yu:!1});return r.Xu(e),r}Zu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Hu({path:n,Yu:!1});return r.Wu(),r}tc(e){return this.Hu({path:void 0,Yu:!0})}ec(e){return rW(e,this.settings.methodName,this.settings.nc||!1,this.path,this.settings.sc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Wu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Xu(this.path.get(e))}Xu(e){if(0===e.length)throw this.ec("Document fields must not be empty");if(rG(this.zu)&&r$.test(e))throw this.ec('Document fields cannot begin and end with "__"')}}class rj{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.M=n||nE(e)}ic(e,t,n,r=!1){return new rz({zu:e,methodName:t,sc:n,path:K.emptyPath(),Yu:!1,nc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function rQ(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof F||e instanceof rK||e instanceof rq||e instanceof rb||e instanceof rB)}let rH=RegExp("[~\\*/\\[\\]]");function rW(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new T(E.INVALID_ARGUMENT,o+e+l)}/**
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
 */class rY{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new rb(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new rX(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(rZ("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class rX extends rY{data(){return super.data()}}function rZ(e,t){return"string"==typeof t?function(e,t,n){if(t.search(rH)>=0)throw rW(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new rP(...t.split("."))._internalPath}catch(r){throw rW(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}(e,t):t instanceof rP?t._internalPath:t._delegate._internalPath}/**
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
 */class rJ{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class r0 extends rY{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new r1(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(rZ("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class r1 extends r0{data(e={}){return super.data(e)}}class r2{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new rJ(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new r1(this._firestore,this._userDataWriter,n.key,n,new rJ(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new T(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>({type:"added",doc:new r1(e._firestore,e._userDataWriter,n.doc.key,n.doc,new rJ(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new r1(e._firestore,e._userDataWriter,t.doc.key,t.doc,new rJ(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}/**
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
 */function r4(e){if(eO(e)&&0===e.explicitOrderBy.length)throw new T(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class r3{}function r6(e,...t){for(let n of t)e=n._apply(e);return e}class r5 extends(6216==n.j?r3:null){constructor(e,t,n){super(),this.ac=e,this.uc=t,this.cc=n,this.type="where"}_apply(e){let t=function(e){let t=e._freezeSettings(),n=nE(e._databaseId);return new rj(e._databaseId,!!t.ignoreUndefinedProperties,n)}(e.firestore),n=function(e,t,n,r,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new T(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){r7(a,s);let t=[];for(let n of a)t.push(r8(r,e,n));o={arrayValue:{values:t}}}else o=r8(r,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||r7(a,s),o=function(e,t,n,r=!1){return function e(t,n){if(rQ(t=(0,l.m9)(t)))return function(e,t,n){if(!rQ(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=rS(n);throw"an object"===r?t.ec(e+" a custom object"):t.ec(e+" "+r)}}("Unsupported field value:",n,t),function(t,n){let r={};return U(t)?n.path&&n.path.length>0&&n.fieldMask.push(n.path):O(t,(t,i)=>{let s=e(i,n.Ju(t));null!=s&&(r[t]=s)}),{mapValue:{fields:r}}}(t,n);if(t instanceof rB)return function(e,t){if(!rG(t.zu))throw t.ec(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ec(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(t,n),null;if(void 0===t&&n.ignoreUndefinedProperties)return null;if(n.path&&n.fieldMask.push(n.path),t instanceof Array){if(n.settings.Yu&&4!==n.zu)throw n.ec("Nested arrays are not supported");return function(t,n){let r=[],i=0;for(let s of t){let t=e(s,n.tc(i));null==t&&(t={nullValue:"NULL_VALUE"}),r.push(t),i++}return{arrayValue:{values:r}}}(t,n)}return function(e,t){if(null===(e=(0,l.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var n,r,i;return n=t.M,"number"==typeof(i=r=e)&&Number.isInteger(i)&&!J(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?eW(r):eH(n,r)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=F.fromDate(e);return{timestampValue:tL(t.M,n)}}if(e instanceof F){let n=new F(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:tL(t.M,n)}}if(e instanceof rK)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof rq)return{bytesValue:tR(t.M,e._byteString)};if(e instanceof rb){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ec(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:tF(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ec(`Unsupported field value: ${rS(e)}`)}(t,n)}(n,e.ic(r?4:3,t))}(n,t,a,"in"===s||"not-in"===s);let u=eI.create(i,s,o);return function(e,t){if(t.S()){let n=eP(e);if(null!==n&&!n.isEqual(t.field))throw new T(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);let r=eU(e);null!==r&&function(e,t,n){if(!n.isEqual(t))throw new T(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}(0,t.field,r)}let n=function(e,t){for(let n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new T(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new T(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,u),u}(e._query,"where",t,e.firestore._databaseId,this.ac,this.uc,this.cc);return new rk(e.firestore,e.converter,function(e,t){let n=e.filters.concat([t]);return new eM(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function r9(e,t,n){let r=rZ("where",e);return new r5(r,t,n)}function r8(e,t,n){if("string"==typeof(n=(0,l.m9)(n))){if(""===n)throw new T(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!eq(t)&&-1!==n.indexOf("/"))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);let r=t.path.child(q.fromString(n));if(!ee.isDocumentKey(r))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return eo(e,new ee(r))}if(n instanceof rb)return eo(e,n._key);throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${rS(n)}.`)}function r7(e,t){if(!Array.isArray(e)||0===e.length)throw new T(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new T(E.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}/**
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
 */class ie{convertValue(e,t="none"){switch(et(e)){case 0:return null;case 1:return e.booleanValue;case 2:return j(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Q(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw v()}}convertObject(e,t){let n={};return O(e.fields,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new rK(j(e.latitude),j(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=function e(t){let n=t.mapValue.fields.__previous_value__;return H(n)?e(n):n}(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(W(e));default:return null}}convertTimestamp(e){let t=z(e);return new F(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=q.fromString(e);tK(n)||v();let r=new X(n.get(1),n.get(3)),i=new ee(n.popFirst(5));return r.isEqual(t)||p(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}class it extends ie{constructor(e){super(),this.firestore=e}convertBytes(e){return new rq(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new rb(this.firestore,null,t)}}function ir(e){e=rC(e,rk);let t=rC(e.firestore,rM),n=rO(t),r=new it(t);return r4(e._query),(function(e,t,n={}){let r=new I;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new rf({next:n=>{t.enqueueAndForget(()=>nX(e,a)),n.fromCache&&"server"===r.source?i.reject(new T(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),a=new n1(n,s,{includeMetadataChanges:!0,Sa:!0});return nY(e,a)})(await rv(e),e.asyncQueue,t,n,r)),r.promise})(n,e._query).then(n=>new r2(t,r,e,n))}function ii(e,...t){var n,r,i,s;let a,o,u;e=(0,l.m9)(e);let h={includeMetadataChanges:!1},c=0;"object"!=typeof t[0]||rF(t[c])||(h=t[c],c++);let d={includeMetadataChanges:h.includeMetadataChanges};if(rF(t[c])){let e=t[c];t[c]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[c+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[c+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}if(e instanceof rb)o=rC(e.firestore,rM),s=e._key.path,u=new eM(s),a={next:n=>{t[c]&&t[c](function(e,t,n){let r=n.docs.get(t._key),i=new it(e);return new r0(e,i,t._key,r,new rJ(n.hasPendingWrites,n.fromCache),t.converter)}(o,e,n))},error:t[c+1],complete:t[c+2]};else{let n=rC(e,rk);o=rC(n.firestore,rM),u=n._query;let r=new it(o);a={next:e=>{t[c]&&t[c](new r2(o,r,n,e))},error:t[c+1],complete:t[c+2]},r4(e._query)}return function(e,t,n,r){let i=new rf(r),s=new n1(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>nY(await rv(e),s)),()=>{i.mu(),e.asyncQueue.enqueueAndForget(async()=>nX(await rv(e),s))}}(rO(o),u,d,a)}!function(e,t=!0){d=s.Jn,(0,s.Xd)(new a.wA("firestore",(e,{options:n})=>{let r=e.getProvider("app").getImmediate(),i=new rM(r,new C(e.getProvider("auth-internal")),new k(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),i._setSettings(n),i},"PUBLIC")),(0,s.KN)(h,"3.4.6",void 0),(0,s.KN)(h,"3.4.6","esm2017")}()}}]);