"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4243],{3069:function(e,t,i){i.d(t,{ad:function(){return b}});var s,n,r=i(2238),o=i(740),a=i(3333),h=i(4444);/**
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
 */class l{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}l.UNAUTHENTICATED=new l(null),l.GOOGLE_CREDENTIALS=new l("google-credentials-uid"),l.FIRST_PARTY=new l("first-party-uid"),l.MOCK_USER=new l("mock-user");/**
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
 */let u="9.6.9",c=new a.Yd("@firebase/firestore");function d(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}function g(e,t){e||/**
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
 */function(e="Unexpected state"){let t=`FIRESTORE (${u}) INTERNAL ASSERTION FAILED: `+e;throw function(e){if(c.logLevel<=a.in.ERROR){let t=[].map(d);c.error(`Firestore (${u}): ${e}`,...t)}}(t),Error(t)}()}/**
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
 */let p="invalid-argument",E="failed-precondition";class A extends h.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class f{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(l.UNAUTHENTICATED))}shutdown(){}}class T{constructor(e){this.auth=null,e.onInit(e=>{this.auth=e})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(g("string"==typeof e.accessToken),new f(e.accessToken,new l(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class S{constructor(e,t,i){this.type="FirstParty",this.user=l.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);let s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)}}class m{constructor(e,t,i){this.t=e,this.i=t,this.o=i}getToken(){return Promise.resolve(new S(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable(()=>t(l.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class N{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class I{constructor(e){this.u=e,this.appCheck=null,e.onInit(e=>{this.appCheck=e})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(g("string"==typeof e.token),new N(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class y{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new y("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof y&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */(n=s||(s={}))[n.OK=0]="OK",n[n.CANCELLED=1]="CANCELLED",n[n.UNKNOWN=2]="UNKNOWN",n[n.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",n[n.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",n[n.NOT_FOUND=5]="NOT_FOUND",n[n.ALREADY_EXISTS=6]="ALREADY_EXISTS",n[n.PERMISSION_DENIED=7]="PERMISSION_DENIED",n[n.UNAUTHENTICATED=16]="UNAUTHENTICATED",n[n.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",n[n.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",n[n.ABORTED=10]="ABORTED",n[n.OUT_OF_RANGE=11]="OUT_OF_RANGE",n[n.UNIMPLEMENTED=12]="UNIMPLEMENTED",n[n.INTERNAL=13]="INTERNAL",n[n.UNAVAILABLE=14]="UNAVAILABLE",n[n.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class w{constructor(e){this.binaryString=e}static fromBase64String(e){let t=atob(e);return new w(t)}static fromUint8Array(e){let t=function(e){let t="";for(let i=0;i<e.length;++i)t+=String.fromCharCode(e[i]);return t}(e);return new w(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){var t,i;return(t=this.binaryString)<(i=e.binaryString)?-1:t>i?1:0}isEqual(e){return this.binaryString===e.binaryString}}w.EMPTY_BYTE_STRING=new w("");/**
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
 */let D=new Map;class L{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new A(p,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new A(p,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,i,s){if(!0===t&&!0===s)throw new A(p,`${e} and ${i} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class P{constructor(e,t,i){this._authCredentials=t,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new L({}),this._settingsFrozen=!1,e instanceof y?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new A(p,'"projectId" not provided in firebase.initializeApp.');return new y(e.options.projectId)}(e))}get app(){if(!this._app)throw new A(E,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new A(E,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new L(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new _;switch(e.type){case"gapi":let t=e.client;return g(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new m(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new A(p,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=D.get(e);t&&(function(e,...t){if(c.logLevel<=a.in.DEBUG){let i=t.map(d);c.debug(`Firestore (${u}): ${e}`,...i)}}("ComponentProvider","Removing Datastore"),D.delete(e),t.terminate())}(this),Promise.resolve()}}function b(e=(0,r.Mq)()){return(0,r.qX)(e,"firestore/lite").getImmediate()}u=`${r.Jn}_lite`,(0,r.Xd)(new o.wA("firestore/lite",(e,{options:t})=>{let i=e.getProvider("app").getImmediate(),s=new P(i,new T(e.getProvider("auth-internal")),new I(e.getProvider("app-check-internal")));return t&&s._setSettings(t),s},"PUBLIC")),(0,r.KN)("firestore-lite","3.4.6",""),(0,r.KN)("firestore-lite","3.4.6","esm2017")}}]);