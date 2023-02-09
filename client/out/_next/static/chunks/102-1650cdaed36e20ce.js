(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[102],{4444:function(e,t,n){"use strict";n.d(t,{$s:function(){return S},BH:function(){return y},L:function(){return l},LL:function(){return I},ZR:function(){return v},aH:function(){return w},eu:function(){return d},hl:function(){return h},m9:function(){return _},ru:function(){return u},vZ:function(){return function e(t,n){if(t===n)return!0;let r=Object.keys(t),a=Object.keys(n);for(let i of r){if(!a.includes(i))return!1;let o=t[i],s=n[i];if(D(o)&&D(s)){if(!e(o,s))return!1}else if(o!==s)return!1}for(let l of a)if(!r.includes(l))return!1;return!0}},zI:function(){return f}});var r=n(4155);/**
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
 */let a=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let a=e.charCodeAt(r);a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=63&a|128):(64512&a)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++r)),t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=63&a|128):(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=63&a|128)}return t},i=function(e){let t=[],n=0,r=0;for(;n<e.length;){let a=e[n++];if(a<128)t[r++]=String.fromCharCode(a);else if(a>191&&a<224){let i=e[n++];t[r++]=String.fromCharCode((31&a)<<6|63&i)}else if(a>239&&a<365){let o=e[n++],s=e[n++],l=e[n++],c=((7&a)<<18|(63&o)<<12|(63&s)<<6|63&l)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{let u=e[n++],h=e[n++];t[r++]=String.fromCharCode((15&a)<<12|(63&u)<<6|63&h)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<e.length;a+=3){let i=e[a],o=a+1<e.length,s=o?e[a+1]:0,l=a+2<e.length,c=l?e[a+2]:0,u=i>>2,h=(3&i)<<4|s>>4,d=(15&s)<<2|c>>6,f=63&c;l||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(a(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<e.length;){let i=n[e.charAt(a++)],o=a<e.length,s=o?n[e.charAt(a)]:0;++a;let l=a<e.length,c=l?n[e.charAt(a)]:64;++a;let u=a<e.length,h=u?n[e.charAt(a)]:64;if(++a,null==i||null==s||null==c||null==h)throw Error();let d=i<<2|s>>4;if(r.push(d),64!==c){let f=s<<4&240|c>>2;if(r.push(f),64!==h){let p=c<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},s=function(e){let t=a(e);return o.encodeByteArray(t,!0)},l=function(e){return s(e).replace(/\./g,"")},c=function(e){try{return o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function u(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function h(){return"object"==typeof indexedDB}function d(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var e;t((null===(e=a.error)||void 0===e?void 0:e.message)||"")}}catch(i){t(i)}})}function f(){return"undefined"!=typeof navigator&&!!navigator.cookieEnabled}/**
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
 */let p=()=>(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,g=()=>{if(void 0===r||void 0===r.env)return;let e=r.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},m=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}let n=e&&c(e[1]);return n&&JSON.parse(n)},b=()=>{try{return p()||g()||m()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},w=()=>{var e;return null===(e=b())||void 0===e?void 0:e.config};/**
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
 */class y{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}class v extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,v.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,I.prototype.create)}}class I{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,a=this.errors[e],i=a?a.replace(E,(e,t)=>{let r=n[t];return null!=r?String(r):`<${t}?>`}):"Error",o=`${this.serviceName}: ${i} (${r}).`,s=new v(r,o,n);return s}}let E=/\{\$([^}]+)}/g;function D(e){return null!==e&&"object"==typeof e}function S(e,t=1e3,n=2){let r=t*Math.pow(n,e);return Math.min(144e5,r+Math.round(.5*r*(Math.random()-.5)*2))}/**
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
 */function _(e){return e&&e._delegate?e._delegate:e}},239:function(e,t,n){"use strict";let r,a,i,o,s,l;var c,u=n(7456),h=n(3333),d=n(4444),f=n(8463);let p=(e,t)=>t.some(t=>e instanceof t),g=new WeakMap,m=new WeakMap,b=new WeakMap,w=new WeakMap,y=new WeakMap,v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return m.get(e);if("objectStoreNames"===t)return e.objectStoreNames||b.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function I(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{t(I(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",a),e.addEventListener("error",i)});return t.then(t=>{t instanceof IDBCursor&&g.set(t,e)}).catch(()=>{}),y.set(t,e),t}(e);if(w.has(e))return w.get(e);let n="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(a||(a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(E(this),e),I(g.get(this))}:function(...e){return I(t.apply(E(this),e))}:function(e,...n){let r=t.call(E(this),e,...n);return b.set(r,e.sort?e.sort():[e]),I(r)}:(t instanceof IDBTransaction&&function(e){if(m.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)});m.set(e,t)}(t),p(t,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,v):t;return n!==e&&(w.set(e,n),y.set(n,e)),n}let E=e=>y.get(e),D=["get","getKey","getAll","getAllKeys","count"],S=["put","add","delete","clear"],_=new Map;function C(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(_.get(t))return _.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,a=S.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(a||D.includes(n)))return;let i=async function(e,...t){let i=this.transaction(e,a?"readwrite":"readonly"),o=i.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),a&&i.done]))[0]};return _.set(t,i),i}v={...c=v,get:(e,t,n)=>C(e,t)||c.get(e,t,n),has:(e,t)=>!!C(e,t)||c.has(e,t)};let T="@firebase/installations",A="0.5.16",L=`w:${A}`,B="FIS_v2",O=new d.LL("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function k(e){return e instanceof d.ZR&&e.code.includes("request-failed")}/**
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
 */function M({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function N(e){return{token:e.token,requestStatus:2,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function $(e,t){let n=await t.json(),r=n.error;return O.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function j({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}async function P(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
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
 */async function F({appConfig:e,heartbeatServiceProvider:t},{fid:n}){let r=M(e),a=j(e),i=t.getImmediate({optional:!0});if(i){let o=await i.getHeartbeatsHeader();o&&a.append("x-firebase-client",o)}let s={fid:n,authVersion:B,appId:e.appId,sdkVersion:L},l={method:"POST",headers:a,body:JSON.stringify(s)},c=await P(()=>fetch(r,l));if(c.ok){let u=await c.json(),h={fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:N(u.authToken)};return h}throw await $("Create Installation",c)}/**
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
 */function x(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */let R=/^[cdef][\w-]{21}$/;/**
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
 */function H(e){return`${e.appName}!${e.appId}`}/**
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
 */let z=new Map;function V(e,t){let n=H(e);W(n,t),function(e,t){let n=(!q&&"BroadcastChannel"in self&&((q=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{W(e.data.key,e.data.fid)}),q);n&&n.postMessage({key:e,fid:t}),0===z.size&&q&&(q.close(),q=null)}(n,t)}function W(e,t){let n=z.get(e);if(n)for(let r of n)r(t)}let q=null,U="firebase-installations-store",K=null;function Z(){return K||(K=function(e,t,{blocked:n,upgrade:r,blocking:a,terminated:i}={}){let o=indexedDB.open(e,1),s=I(o);return r&&o.addEventListener("upgradeneeded",e=>{r(I(o.result),e.oldVersion,e.newVersion,I(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),s.then(e=>{i&&e.addEventListener("close",()=>i()),a&&e.addEventListener("versionchange",()=>a())}).catch(()=>{}),s}("firebase-installations-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(U)}})),K}async function G(e,t){let n=H(e),r=await Z(),a=r.transaction(U,"readwrite"),i=a.objectStore(U),o=await i.get(n);return await i.put(t,n),await a.done,o&&o.fid===t.fid||V(e,t.fid),t}async function X(e){let t=H(e),n=await Z(),r=n.transaction(U,"readwrite");await r.objectStore(U).delete(t),await r.done}async function J(e,t){let n=H(e),r=await Z(),a=r.transaction(U,"readwrite"),i=a.objectStore(U),o=await i.get(n),s=t(o);return void 0===s?await i.delete(n):await i.put(s,n),await a.done,s&&(!o||o.fid!==s.fid)&&V(e,s.fid),s}/**
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
 */async function Y(e){let t;let n=await J(e.appConfig,n=>{let r=function(e){let t=e||{fid:function(){try{let e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;let n=function(e){let t=/**
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
 */function(e){let t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}(e);return t.substr(0,22)}(e);return R.test(n)?n:""}catch(r){return""}}(),registrationStatus:0};return en(t)}(n),a=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){let n=Promise.reject(O.create("app-offline"));return{installationEntry:t,registrationPromise:n}}let r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=Q(e,r);return{installationEntry:r,registrationPromise:a}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:ee(e)}:{installationEntry:t}}(e,r);return t=a.registrationPromise,a.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function Q(e,t){try{let n=await F(e,t);return G(e.appConfig,n)}catch(r){throw k(r)&&409===r.customData.serverCode?await X(e.appConfig):await G(e.appConfig,{fid:t.fid,registrationStatus:0}),r}}async function ee(e){let t=await et(e.appConfig);for(;1===t.registrationStatus;)await x(100),t=await et(e.appConfig);if(0===t.registrationStatus){let{installationEntry:n,registrationPromise:r}=await Y(e);return r||n}return t}function et(e){return J(e,e=>{if(!e)throw O.create("installation-not-found");return en(e)})}function en(e){return 1===e.registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e}/**
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
 */async function er({appConfig:e,heartbeatServiceProvider:t},n){let r=function(e,{fid:t}){return`${M(e)}/${t}/authTokens:generate`}(e,n),a=function(e,{refreshToken:t}){let n=j(e);return n.append("Authorization",`${B} ${t}`),n}(e,n),i=t.getImmediate({optional:!0});if(i){let o=await i.getHeartbeatsHeader();o&&a.append("x-firebase-client",o)}let s={installation:{sdkVersion:L,appId:e.appId}},l={method:"POST",headers:a,body:JSON.stringify(s)},c=await P(()=>fetch(r,l));if(c.ok){let u=await c.json(),h=N(u);return h}throw await $("Generate Auth Token",c)}/**
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
 */async function ea(e,t=!1){let n;let r=await J(e.appConfig,r=>{var a;if(!el(r))throw O.create("not-registered");let i=r.authToken;if(!t&&2===(a=i).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(a))return r;if(1===i.requestStatus)return n=ei(e,t),r;{if(!navigator.onLine)throw O.create("app-offline");let o=function(e){let t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=es(e,o),o}}),a=n?await n:r.authToken;return a}async function ei(e,t){let n=await eo(e.appConfig);for(;1===n.authToken.requestStatus;)await x(100),n=await eo(e.appConfig);let r=n.authToken;return 0===r.requestStatus?ea(e,t):r}function eo(e){return J(e,e=>{if(!el(e))throw O.create("not-registered");let t=e.authToken;return 1===t.requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function es(e,t){try{let n=await er(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await G(e.appConfig,r),n}catch(i){if(k(i)&&(401===i.customData.serverCode||404===i.customData.serverCode))await X(e.appConfig);else{let a=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await G(e.appConfig,a)}throw i}}function el(e){return void 0!==e&&2===e.registrationStatus}/**
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
 */async function ec(e){let{installationEntry:t,registrationPromise:n}=await Y(e);return n?n.catch(console.error):ea(e).catch(console.error),t.fid}/**
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
 */async function eu(e,t=!1){await eh(e);let n=await ea(e,t);return n.token}async function eh(e){let{registrationPromise:t}=await Y(e);t&&await t}function ed(e){return O.create("missing-app-config-values",{valueName:e})}/**
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
 */let ef="installations",ep=e=>{let t=e.getProvider("app").getImmediate(),n=/**
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
 */function(e){if(!e||!e.options)throw ed("App Configuration");if(!e.name)throw ed("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw ed(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),r=(0,u.qX)(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},eg=e=>{let t=e.getProvider("app").getImmediate(),n=(0,u.qX)(t,ef).getImmediate();return{getId:()=>ec(n),getToken:e=>eu(n,e)}};(0,u.Xd)(new f.wA(ef,ep,"PUBLIC")),(0,u.Xd)(new f.wA("installations-internal",eg,"PRIVATE")),(0,u.KN)(T,A),(0,u.KN)(T,A,"esm2017");/**
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
 */let em="analytics",eb="https://www.googletagmanager.com/gtag/js",ew=new h.Yd("@firebase/analytics");/**
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
 */function ey(e){return Promise.all(e.map(e=>e.catch(e=>e)))}async function ev(e,t,n,r,a,i){let o=r[a];try{if(o)await t[o];else{let s=await ey(n),l=s.find(e=>e.measurementId===a);l&&await t[l.appId]}}catch(c){ew.error(c)}e("config",a,i)}async function eI(e,t,n,r,a){try{let i=[];if(a&&a.send_to){let o=a.send_to;Array.isArray(o)||(o=[o]);let s=await ey(n);for(let l of o){let c=s.find(e=>e.measurementId===l),u=c&&t[c.appId];if(u)i.push(u);else{i=[];break}}}0===i.length&&(i=Object.values(t)),await Promise.all(i),e("event",r,a||{})}catch(h){ew.error(h)}}let eE=new d.LL("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'}),eD=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};async function eS(e){var t;let{appId:n,apiKey:r}=e,a={method:"GET",headers:new Headers({Accept:"application/json","x-goog-api-key":r})},i="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(i,a);if(200!==o.status&&304!==o.status){let s="";try{let l=await o.json();(null===(t=l.error)||void 0===t?void 0:t.message)&&(s=l.error.message)}catch(c){}throw eE.create("config-fetch-failed",{httpStatus:o.status,responseMessage:s})}return o.json()}async function e_(e,t=eD,n){let{appId:r,apiKey:a,measurementId:i}=e.options;if(!r)throw eE.create("no-app-id");if(!a){if(i)return{measurementId:i,appId:r};throw eE.create("no-api-key")}let o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new eT;return setTimeout(async()=>{s.abort()},void 0!==n?n:6e4),eC({appId:r,apiKey:a,measurementId:i},o,s,t)}async function eC(e,{throttleEndTimeMillis:t,backoffCount:n},r,a=eD){var i;let{appId:o,measurementId:s}=e;try{await new Promise((e,n)=>{let a=Math.max(t-Date.now(),0),i=setTimeout(e,a);r.addEventListener(()=>{clearTimeout(i),n(eE.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}catch(l){if(s)return ew.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${null==l?void 0:l.message}]`),{appId:o,measurementId:s};throw l}try{let c=await eS(e);return a.deleteThrottleMetadata(o),c}catch(f){if(!function(e){if(!(e instanceof d.ZR)||!e.customData)return!1;let t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(f)){if(a.deleteThrottleMetadata(o),s)return ew.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${null==f?void 0:f.message}]`),{appId:o,measurementId:s};throw f}let u=503===Number(null===(i=null==f?void 0:f.customData)||void 0===i?void 0:i.httpStatus)?(0,d.$s)(n,a.intervalMillis,30):(0,d.$s)(n,a.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return a.setThrottleMetadata(o,h),ew.debug(`Calling attemptFetch again in ${u} millis`),eC(e,h,r,a)}}class eT{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function eA(e,t,n,r,a){if(a&&a.global){e("event",n,r);return}{let i=await t,o=Object.assign(Object.assign({},r),{send_to:i});e("event",n,o)}}/**
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
 */async function eL(){if(!(0,d.hl)())return ew.warn(eE.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await (0,d.eu)()}catch(e){return ew.warn(eE.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}async function eB(e,t,n,r,a,s,l){var c;let u=e_(e);u.then(t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&ew.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>ew.error(e)),t.push(u);let h=eL().then(e=>e?r.getId():void 0),[d,f]=await Promise.all([u,h]);!function(e){let t=window.document.getElementsByTagName("script");for(let n of Object.values(t))if(n.src&&n.src.includes(eb)&&n.src.includes(e))return n;return null}(s)&&function(e,t){let n=document.createElement("script");n.src=`${eb}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(s,d.measurementId),o&&(a("consent","default",o),o=void 0),a("js",new Date);let p=null!==(c=null==l?void 0:l.config)&&void 0!==c?c:{};return p.origin="firebase",p.update=!0,null!=f&&(p.firebase_id=f),a("config",d.measurementId,p),i&&(a("set",i),i=void 0),d.measurementId}/**
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
 */class eO{constructor(e){this.app=e}_delete(){return delete ek[this.app.options.appId],Promise.resolve()}}let ek={},eM=[],eN={},e$="dataLayer",ej=!1,eP="@firebase/analytics",eF="0.8.4";(0,u.Xd)(new f.wA(em,(e,{options:t})=>{let n=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return function(e,t,n){!function(){let e=[];if((0,d.ru)()&&e.push("This is a browser extension environment."),(0,d.zI)()||e.push("Cookies are not available."),e.length>0){let t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),n=eE.create("invalid-analytics-context",{errorInfo:t});ew.warn(n.message)}}();let r=e.options.appId;if(!r)throw eE.create("no-app-id");if(!e.options.apiKey){if(e.options.measurementId)ew.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw eE.create("no-api-key")}if(null!=ek[r])throw eE.create("already-exists",{id:r});if(!ej){var a,i;let o,c;o=[],Array.isArray(window[e$])?o=window[e$]:window[e$]=o;let{wrappedGtag:u,gtagCore:h}=(a="gtag",c=function(...e){window[e$].push(arguments)},window[a]&&"function"==typeof window[a]&&(c=window[a]),window[a]=(i=c,async function(e,t,n){try{"event"===e?await eI(i,ek,eM,t,n):"config"===e?await ev(i,ek,eM,eN,t,n):"consent"===e?i("consent","update",n):i("set",t)}catch(r){ew.error(r)}}),{gtagCore:c,wrappedGtag:window[a]});l=u,s=h,ej=!0}ek[r]=eB(e,eM,eN,t,s,e$,n);let f=new eO(e);return f}(n,r,t)},"PUBLIC")),(0,u.Xd)(new f.wA("analytics-internal",function(e){try{let t=e.getProvider(em).getImmediate();return{logEvent:(e,n,r)=>(function(e,t,n,r){eA(l,ek[(e=(0,d.m9)(e)).app.options.appId],t,n,r).catch(e=>ew.error(e))})(t,e,n,r)}}catch(n){throw eE.create("interop-component-reg-failed",{reason:n})}},"PRIVATE")),(0,u.KN)(eP,eF),(0,u.KN)(eP,eF,"esm2017")},5503:function(e,t,n){"use strict";n.d(t,{ZF:function(){return r.ZF}});var r=n(7456);/**
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
 */(0,r.KN)("firebase","9.14.0","app")},9008:function(e,t,n){e.exports=n(3121)},4155:function(e){var t,n,r,a=e.exports={};function i(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(r){n=o}}();var l=[],c=!1,u=-1;function h(){c&&r&&(c=!1,r.length?l=r.concat(l):u=-1,l.length&&d())}function d(){if(!c){var e=s(h);c=!0;for(var t=l.length;t;){for(r=l,l=[];++u<t;)r&&r[u].run();u=-1,t=l.length}r=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(r){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}a.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||c||s(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=p,a.addListener=p,a.once=p,a.off=p,a.removeListener=p,a.removeAllListeners=p,a.emit=p,a.prependListener=p,a.prependOnceListener=p,a.listeners=function(e){return[]},a.binding=function(e){throw Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw Error("process.chdir is not supported")},a.umask=function(){return 0}},7456:function(e,t,n){"use strict";let r,a;n.d(t,{qX:function(){return B},Xd:function(){return L},ZF:function(){return M},KN:function(){return N}});var i,o=n(8463),s=n(3333),l=n(4444);let c=(e,t)=>t.some(t=>e instanceof t),u=new WeakMap,h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return h.get(e);if("objectStoreNames"===t)return e.objectStoreNames||d.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return m(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function m(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{t(m(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",a),e.addEventListener("error",i)});return t.then(t=>{t instanceof IDBCursor&&u.set(t,e)}).catch(()=>{}),p.set(t,e),t}(e);if(f.has(e))return f.get(e);let n="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(a||(a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(b(this),e),m(u.get(this))}:function(...e){return m(t.apply(b(this),e))}:function(e,...n){let r=t.call(b(this),e,...n);return d.set(r,e.sort?e.sort():[e]),m(r)}:(t instanceof IDBTransaction&&function(e){if(h.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)});h.set(e,t)}(t),c(t,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,g):t;return n!==e&&(f.set(e,n),p.set(n,e)),n}let b=e=>p.get(e),w=["get","getKey","getAll","getAllKeys","count"],y=["put","add","delete","clear"],v=new Map;function I(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(v.get(t))return v.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,a=y.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(a||w.includes(n)))return;let i=async function(e,...t){let i=this.transaction(e,a?"readwrite":"readonly"),o=i.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),a&&i.done]))[0]};return v.set(t,i),i}g={...i=g,get:(e,t,n)=>I(e,t)||i.get(e,t,n),has:(e,t)=>!!I(e,t)||i.has(e,t)};/**
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
 */class E{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let D="@firebase/app",S="0.8.4",_=new s.Yd("@firebase/app"),C={[D]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},T=new Map,A=new Map;function L(e){let t=e.name;if(A.has(t))return _.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(A.set(t,e),T.values()))!function(e,t){try{e.container.addComponent(t)}catch(n){_.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}(n,e);return!0}function B(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}let O=new l.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
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
 */class k{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new o.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw O.create("app-deleted",{appName:this._name})}}function M(e,t={}){let n=e;if("object"!=typeof t){let r=t;t={name:r}}let a=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),i=a.name;if("string"!=typeof i||!i)throw O.create("bad-app-name",{appName:String(i)});if(n||(n=(0,l.aH)()),!n)throw O.create("no-options");let s=T.get(i);if(s){if((0,l.vZ)(n,s.options)&&(0,l.vZ)(a,s.config))return s;throw O.create("duplicate-app",{appName:i})}let c=new o.H0(i);for(let u of A.values())c.addComponent(u);let h=new k(n,a,c);return T.set(i,h),h}function N(e,t,n){var r;let a=null!==(r=C[e])&&void 0!==r?r:e;n&&(a+=`-${n}`);let i=a.match(/\s|\//),s=t.match(/\s|\//);if(i||s){let l=[`Unable to register library "${a}" with version "${t}":`];i&&l.push(`library name "${a}" contains illegal characters (whitespace or "/")`),i&&s&&l.push("and"),s&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),_.warn(l.join(" "));return}L(new o.wA(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}let $="firebase-heartbeat-store",j=null;function P(){return j||(j=(function(e,t,{blocked:n,upgrade:r,blocking:a,terminated:i}={}){let o=indexedDB.open(e,1),s=m(o);return r&&o.addEventListener("upgradeneeded",e=>{r(m(o.result),e.oldVersion,e.newVersion,m(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),s.then(e=>{i&&e.addEventListener("close",()=>i()),a&&e.addEventListener("versionchange",()=>a())}).catch(()=>{}),s})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore($)}}).catch(e=>{throw O.create("idb-open",{originalErrorMessage:e.message})})),j}async function F(e){try{let t=await P();return t.transaction($).objectStore($).get(R(e))}catch(r){if(r instanceof l.ZR)_.warn(r.message);else{let n=O.create("idb-get",{originalErrorMessage:null==r?void 0:r.message});_.warn(n.message)}}}async function x(e,t){try{let n=await P(),r=n.transaction($,"readwrite"),a=r.objectStore($);return await a.put(t,R(e)),r.done}catch(o){if(o instanceof l.ZR)_.warn(o.message);else{let i=O.create("idb-set",{originalErrorMessage:null==o?void 0:o.message});_.warn(i.message)}}}function R(e){return`${e.name}!${e.options.appId}`}class H{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new V(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=z();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),n=Date.now();return n-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=z(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){let n=[],r=e.slice();for(let a of e){let i=n.find(e=>e.agent===a.agent);if(i){if(i.dates.push(a.date),W(n)>t){i.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),W(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=(0,l.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function z(){let e=new Date;return e.toISOString().substring(0,10)}class V{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,l.hl)()&&(0,l.eu)().then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let t=await F(this.app);return t||{heartbeats:[]}}}async overwrite(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let r=await this.read();return x(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let r=await this.read();return x(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function W(e){return(0,l.L)(JSON.stringify({version:2,heartbeats:e})).length}L(new o.wA("platform-logger",e=>new E(e),"PRIVATE")),L(new o.wA("heartbeat",e=>new H(e),"PRIVATE")),N(D,S,""),N(D,S,"esm2017"),N("fire-js","")},8463:function(e,t,n){"use strict";n.d(t,{H0:function(){return s},wA:function(){return a}});var r=n(4444);class a{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */let i="[DEFAULT]";/**
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
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let n=new r.BH;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{let a=this.getOrInitializeService({instanceIdentifier:t});a&&n.resolve(a)}catch(i){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(r)return null;throw a}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:i})}catch(t){}for(let[n,r]of this.instancesDeferred.entries()){let a=this.normalizeInstanceIdentifier(n);try{let o=this.getOrInitializeService({instanceIdentifier:a});r.resolve(o)}catch(s){}}}}clearInstance(e=i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=i){return this.instances.has(e)}getOptions(e=i){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[a,i]of this.instancesDeferred.entries()){let o=this.normalizeInstanceIdentifier(a);n===o&&i.resolve(r)}return r}onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),a=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;a.add(e),this.onInitCallbacks.set(r,a);let i=this.instances.get(r);return i&&e(i,r),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(a){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===i?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=i){return this.component?this.component.multipleInstances?e:i:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
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
 */class s{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:function(e,t,n){"use strict";var r,a;n.d(t,{Yd:function(){return u}});/**
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
 */let i=[];(a=r||(r={}))[a.DEBUG=0]="DEBUG",a[a.VERBOSE=1]="VERBOSE",a[a.INFO=2]="INFO",a[a.WARN=3]="WARN",a[a.ERROR=4]="ERROR",a[a.SILENT=5]="SILENT";let o={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},s=r.INFO,l={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),a=l[t];if(a)console[a](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}}}]);