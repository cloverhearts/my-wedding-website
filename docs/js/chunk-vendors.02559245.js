(self["webpackChunkmy_wedding_website"]=self["webpackChunkmy_wedding_website"]||[]).push([[998],{3736:function(e,t,n){"use strict";function r(e,t,n,r,i,o,s,a){var c,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:e,options:u}}n.d(t,{Z:function(){return r}})},2348:function(e,t,n){"use strict";n.d(t,{$s:function(){return fe},BH:function(){return T},DV:function(){return B},GJ:function(){return q},L:function(){return h},LL:function(){return j},P0:function(){return C},Pz:function(){return k},Sg:function(){return S},UI:function(){return K},US:function(){return c},Wl:function(){return V},Yr:function(){return D},ZR:function(){return F},aH:function(){return I},b$:function(){return P},cI:function(){return W},dS:function(){return ae},eu:function(){return A},g5:function(){return o},gK:function(){return se},gQ:function(){return te},h$:function(){return l},hl:function(){return N},hu:function(){return i},m9:function(){return pe},ne:function(){return ne},p$:function(){return f},pd:function(){return ee},q4:function(){return b},r3:function(){return z},ru:function(){return x},tV:function(){return d},uI:function(){return O},ug:function(){return ce},vZ:function(){return J},w1:function(){return R},w9:function(){return H},xO:function(){return Z},xb:function(){return G},z$:function(){return E},zI:function(){return M},zd:function(){return X}});n(2801),n(7658);
/**
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
 */
const r={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(e,t){if(!e)throw o(t)},o=function(e){return new Error("Firebase Database ("+r.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},s=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},a=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|s>>4;let h=(15&s)<<2|c>>6,d=63&c;a||(d=64,o||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,s=o?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const l=i<e.length,h=l?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==c||null==h)throw new u;const d=t<<2|s>>4;if(r.push(d),64!==c){const e=s<<4&240|c>>2;if(r.push(e),64!==h){const e=c<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
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
 */class u extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const l=function(e){const t=s(e);return c.encodeByteArray(t,!0)},h=function(e){return l(e).replace(/\./g,"")},d=function(e){try{return c.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
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
 */
function f(e){return p(void 0,e)}function p(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&m(n)&&(e[n]=p(e[n],t[n]));return e}function m(e){return"__proto__"!==e}
/**
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
 */function _(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
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
 */const v=()=>_().__FIREBASE_DEFAULTS__,g=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},y=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&d(e[1]);return t&&JSON.parse(t)},w=()=>{try{return v()||g()||y()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},b=e=>{var t,n;return null===(n=null===(t=w())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},C=e=>{const t=b(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},I=()=>{var e;return null===(e=w())||void 0===e?void 0:e.config},k=e=>{var t;return null===(t=w())||void 0===t?void 0:t[`_${e}`]};
/**
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
 */
class T{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
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
 */function S(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[h(JSON.stringify(n)),h(JSON.stringify(s)),a].join(".")}
/**
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
 */function E(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function O(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(E())}function x(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function P(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function R(){const e=E();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function D(){return!0===r.NODE_CLIENT||!0===r.NODE_ADMIN}function N(){try{return"object"===typeof indexedDB}catch(e){return!1}}function A(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function M(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
/**
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
 */const L="FirebaseError";class F extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=L,Object.setPrototypeOf(this,F.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,j.prototype.create)}}class j{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?$(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new F(r,s,n);return a}}function $(e,t){return e.replace(U,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const U=/\{\$([^}]+)}/g;
/**
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
 */function W(e){return JSON.parse(e)}function V(e){return JSON.stringify(e)}
/**
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
 */const Y=function(e){let t={},n={},r={},i="";try{const o=e.split(".");t=W(d(o[0])||""),n=W(d(o[1])||""),i=o[2],r=n["d"]||{},delete n["d"]}catch(o){}return{header:t,claims:n,data:r,signature:i}},H=function(e){const t=Y(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},q=function(e){const t=Y(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
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
 */
function z(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function B(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function G(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function K(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function J(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(Q(n)&&Q(o)){if(!J(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Q(e){return null!==e&&"object"===typeof e}
/**
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
 */
/**
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
 */
function Z(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function X(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function ee(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
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
 */class te{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let l=0;l<16;l++)n[l]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let l=0;l<16;l++)n[l]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let l=16;l<80;l++){const e=n[l-3]^n[l-8]^n[l-14]^n[l-16];n[l]=4294967295&(e<<1|e>>>31)}let r,i,o=this.chain_[0],s=this.chain_[1],a=this.chain_[2],c=this.chain_[3],u=this.chain_[4];for(let l=0;l<80;l++){l<40?l<20?(r=c^s&(a^c),i=1518500249):(r=s^a^c,i=1859775393):l<60?(r=s&a|c&(s|a),i=2400959708):(r=s^a^c,i=3395469782);const e=(o<<5|o>>>27)+r+u+i+n[l]&4294967295;u=c,c=a,a=4294967295&(s<<30|s>>>2),s=o,o=e}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;while(r<t){if(0===o)while(r<=n)this.compress_(e,r),r+=this.blockSize;if("string"===typeof e){while(r<t)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else while(r<t)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[r]>>t&255,++n;return e}}function ne(e,t){const n=new re(e,t);return n.subscribe.bind(n)}class re{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=ie(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=oe),void 0===r.error&&(r.error=oe),void 0===r.complete&&(r.complete=oe);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function ie(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function oe(){}
/**
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
 */function se(e,t){return`${e} failed: ${t} argument `}
/**
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
 */
const ae=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);if(o>=55296&&o<=56319){const t=o-55296;r++,i(r<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(r)-56320;o=65536+(t<<10)+n}o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):o<65536?(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},ce=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t},ue=1e3,le=2,he=144e5,de=.5;function fe(e,t=ue,n=le){const r=t*Math.pow(n,e),i=Math.round(de*r*(Math.random()-.5)*2);return Math.min(he,r+i)}
/**
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
 */
/**
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
 */
function pe(e){return e&&e._delegate?e._delegate:e}},5665:function(e,t,n){n(7658),function(e,n){n(t)}(0,(function(e){"use strict";var t="undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{};function r(){throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs")}function i(e,t){return t={exports:{}},e(t,t.exports),t.exports}var o=i((function(e,n){var i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};
//! moment.js
(function(t,r){"object"===i(n)?e.exports=r():t.moment=r()})(t,(function(){var t,n;function o(){return t.apply(null,arguments)}function s(e){t=e}function a(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function c(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function u(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0}function l(e){return void 0===e}function h(e){return"number"===typeof e||"[object Number]"===Object.prototype.toString.call(e)}function d(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function f(e,t){var n,r=[];for(n=0;n<e.length;++n)r.push(t(e[n],n));return r}function p(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function m(e,t){for(var n in t)p(t,n)&&(e[n]=t[n]);return p(t,"toString")&&(e.toString=t.toString),p(t,"valueOf")&&(e.valueOf=t.valueOf),e}function _(e,t,n,r){return Kn(e,t,n,r,!0).utc()}function v(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function g(e){return null==e._pf&&(e._pf=v()),e._pf}function y(e){if(null==e._isValid){var t=g(e),r=n.call(t.parsedDateParts,(function(e){return null!=e})),i=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&r);if(e._strict&&(i=i&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return i;e._isValid=i}return e._isValid}function w(e){var t=_(NaN);return null!=e?m(g(t),e):g(t).userInvalidated=!0,t}n=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,r=0;r<n;r++)if(r in t&&e.call(this,t[r],r,t))return!0;return!1};var b=o.momentProperties=[];function C(e,t){var n,r,i;if(l(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),l(t._i)||(e._i=t._i),l(t._f)||(e._f=t._f),l(t._l)||(e._l=t._l),l(t._strict)||(e._strict=t._strict),l(t._tzm)||(e._tzm=t._tzm),l(t._isUTC)||(e._isUTC=t._isUTC),l(t._offset)||(e._offset=t._offset),l(t._pf)||(e._pf=g(t)),l(t._locale)||(e._locale=t._locale),b.length>0)for(n=0;n<b.length;n++)r=b[n],i=t[r],l(i)||(e[r]=i);return e}var I=!1;function k(e){C(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===I&&(I=!0,o.updateOffset(this),I=!1)}function T(e){return e instanceof k||null!=e&&null!=e._isAMomentObject}function S(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function E(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=S(t)),n}function O(e,t,n){var r,i=Math.min(e.length,t.length),o=Math.abs(e.length-t.length),s=0;for(r=0;r<i;r++)(n&&e[r]!==t[r]||!n&&E(e[r])!==E(t[r]))&&s++;return s+o}function x(e){!1===o.suppressDeprecationWarnings&&"undefined"!==typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function P(e,t){var n=!0;return m((function(){if(null!=o.deprecationHandler&&o.deprecationHandler(null,e),n){for(var r,s=[],a=0;a<arguments.length;a++){if(r="","object"===i(arguments[a])){for(var c in r+="\n["+a+"] ",arguments[0])r+=c+": "+arguments[0][c]+", ";r=r.slice(0,-2)}else r=arguments[a];s.push(r)}x(e+"\nArguments: "+Array.prototype.slice.call(s).join("")+"\n"+(new Error).stack),n=!1}return t.apply(this,arguments)}),t)}var R,D={};function N(e,t){null!=o.deprecationHandler&&o.deprecationHandler(e,t),D[e]||(x(t),D[e]=!0)}function A(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function M(e){var t,n;for(n in e)t=e[n],A(t)?this[n]=t:this["_"+n]=t;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function L(e,t){var n,r=m({},e);for(n in t)p(t,n)&&(c(e[n])&&c(t[n])?(r[n]={},m(r[n],e[n]),m(r[n],t[n])):null!=t[n]?r[n]=t[n]:delete r[n]);for(n in e)p(e,n)&&!p(t,n)&&c(e[n])&&(r[n]=m({},r[n]));return r}function F(e){null!=e&&this.set(e)}o.suppressDeprecationWarnings=!1,o.deprecationHandler=null,R=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)p(e,t)&&n.push(t);return n};var j={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function $(e,t,n){var r=this._calendar[e]||this._calendar["sameElse"];return A(r)?r.call(t,n):r}var U={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function W(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,(function(e){return e.slice(1)})),this._longDateFormat[e])}var V="Invalid date";function Y(){return this._invalidDate}var H="%d",q=/\d{1,2}/;function z(e){return this._ordinal.replace("%d",e)}var B={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function G(e,t,n,r){var i=this._relativeTime[n];return A(i)?i(e,t,n,r):i.replace(/%d/i,e)}function K(e,t){var n=this._relativeTime[e>0?"future":"past"];return A(n)?n(t):n.replace(/%s/i,t)}var J={};function Q(e,t){var n=e.toLowerCase();J[n]=J[n+"s"]=J[t]=e}function Z(e){return"string"===typeof e?J[e]||J[e.toLowerCase()]:void 0}function X(e){var t,n,r={};for(n in e)p(e,n)&&(t=Z(n),t&&(r[t]=e[n]));return r}var ee={};function te(e,t){ee[e]=t}function ne(e){var t=[];for(var n in e)t.push({unit:n,priority:ee[n]});return t.sort((function(e,t){return e.priority-t.priority})),t}function re(e,t,n){var r=""+Math.abs(e),i=t-r.length,o=e>=0;return(o?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+r}var ie=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,oe=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,se={},ae={};function ce(e,t,n,r){var i=r;"string"===typeof r&&(i=function(){return this[r]()}),e&&(ae[e]=i),t&&(ae[t[0]]=function(){return re(i.apply(this,arguments),t[1],t[2])}),n&&(ae[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function ue(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function le(e){var t,n,r=e.match(ie);for(t=0,n=r.length;t<n;t++)ae[r[t]]?r[t]=ae[r[t]]:r[t]=ue(r[t]);return function(t){var i,o="";for(i=0;i<n;i++)o+=A(r[i])?r[i].call(t,e):r[i];return o}}function he(e,t){return e.isValid()?(t=de(t,e.localeData()),se[t]=se[t]||le(t),se[t](e)):e.localeData().invalidDate()}function de(e,t){var n=5;function r(e){return t.longDateFormat(e)||e}oe.lastIndex=0;while(n>=0&&oe.test(e))e=e.replace(oe,r),oe.lastIndex=0,n-=1;return e}var fe=/\d/,pe=/\d\d/,me=/\d{3}/,_e=/\d{4}/,ve=/[+-]?\d{6}/,ge=/\d\d?/,ye=/\d\d\d\d?/,we=/\d\d\d\d\d\d?/,be=/\d{1,3}/,Ce=/\d{1,4}/,Ie=/[+-]?\d{1,6}/,ke=/\d+/,Te=/[+-]?\d+/,Se=/Z|[+-]\d\d:?\d\d/gi,Ee=/Z|[+-]\d\d(?::?\d\d)?/gi,Oe=/[+-]?\d+(\.\d{1,3})?/,xe=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Pe={};function Re(e,t,n){Pe[e]=A(t)?t:function(e,r){return e&&n?n:t}}function De(e,t){return p(Pe,e)?Pe[e](t._strict,t._locale):new RegExp(Ne(e))}function Ne(e){return Ae(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,(function(e,t,n,r,i){return t||n||r||i})))}function Ae(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var Me={};function Le(e,t){var n,r=t;for("string"===typeof e&&(e=[e]),h(t)&&(r=function(e,n){n[t]=E(e)}),n=0;n<e.length;n++)Me[e[n]]=r}function Fe(e,t){Le(e,(function(e,n,r,i){r._w=r._w||{},t(e,r._w,r,i)}))}function je(e,t,n){null!=t&&p(Me,e)&&Me[e](t,n._a,n,e)}var $e=0,Ue=1,We=2,Ve=3,Ye=4,He=5,qe=6,ze=7,Be=8;function Ge(e){return Ke(e)?366:365}function Ke(e){return e%4===0&&e%100!==0||e%400===0}ce("Y",0,0,(function(){var e=this.year();return e<=9999?""+e:"+"+e})),ce(0,["YY",2],0,(function(){return this.year()%100})),ce(0,["YYYY",4],0,"year"),ce(0,["YYYYY",5],0,"year"),ce(0,["YYYYYY",6,!0],0,"year"),Q("year","y"),te("year",1),Re("Y",Te),Re("YY",ge,pe),Re("YYYY",Ce,_e),Re("YYYYY",Ie,ve),Re("YYYYYY",Ie,ve),Le(["YYYYY","YYYYYY"],$e),Le("YYYY",(function(e,t){t[$e]=2===e.length?o.parseTwoDigitYear(e):E(e)})),Le("YY",(function(e,t){t[$e]=o.parseTwoDigitYear(e)})),Le("Y",(function(e,t){t[$e]=parseInt(e,10)})),o.parseTwoDigitYear=function(e){return E(e)+(E(e)>68?1900:2e3)};var Je,Qe=Xe("FullYear",!0);function Ze(){return Ke(this.year())}function Xe(e,t){return function(n){return null!=n?(tt(this,e,n),o.updateOffset(this,t),this):et(this,e)}}function et(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function tt(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&Ke(e.year())&&1===e.month()&&29===e.date()?e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),ot(n,e.month())):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function nt(e){return e=Z(e),A(this[e])?this[e]():this}function rt(e,t){if("object"===("undefined"===typeof e?"undefined":i(e))){e=X(e);for(var n=ne(e),r=0;r<n.length;r++)this[n[r].unit](e[n[r].unit])}else if(e=Z(e),A(this[e]))return this[e](t);return this}function it(e,t){return(e%t+t)%t}function ot(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=it(t,12);return e+=(t-n)/12,1===n?Ke(e)?29:28:31-n%7%2}Je=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},ce("M",["MM",2],"Mo",(function(){return this.month()+1})),ce("MMM",0,0,(function(e){return this.localeData().monthsShort(this,e)})),ce("MMMM",0,0,(function(e){return this.localeData().months(this,e)})),Q("month","M"),te("month",8),Re("M",ge),Re("MM",ge,pe),Re("MMM",(function(e,t){return t.monthsShortRegex(e)})),Re("MMMM",(function(e,t){return t.monthsRegex(e)})),Le(["M","MM"],(function(e,t){t[Ue]=E(e)-1})),Le(["MMM","MMMM"],(function(e,t,n,r){var i=n._locale.monthsParse(e,r,n._strict);null!=i?t[Ue]=i:g(n).invalidMonth=e}));var st=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,at="January_February_March_April_May_June_July_August_September_October_November_December".split("_");function ct(e,t){return e?a(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||st).test(t)?"format":"standalone"][e.month()]:a(this._months)?this._months:this._months["standalone"]}var ut="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function lt(e,t){return e?a(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[st.test(t)?"format":"standalone"][e.month()]:a(this._monthsShort)?this._monthsShort:this._monthsShort["standalone"]}function ht(e,t,n){var r,i,o,s=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],r=0;r<12;++r)o=_([2e3,r]),this._shortMonthsParse[r]=this.monthsShort(o,"").toLocaleLowerCase(),this._longMonthsParse[r]=this.months(o,"").toLocaleLowerCase();return n?"MMM"===t?(i=Je.call(this._shortMonthsParse,s),-1!==i?i:null):(i=Je.call(this._longMonthsParse,s),-1!==i?i:null):"MMM"===t?(i=Je.call(this._shortMonthsParse,s),-1!==i?i:(i=Je.call(this._longMonthsParse,s),-1!==i?i:null)):(i=Je.call(this._longMonthsParse,s),-1!==i?i:(i=Je.call(this._shortMonthsParse,s),-1!==i?i:null))}function dt(e,t,n){var r,i,o;if(this._monthsParseExact)return ht.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),r=0;r<12;r++){if(i=_([2e3,r]),n&&!this._longMonthsParse[r]&&(this._longMonthsParse[r]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[r]||(o="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[r]=new RegExp(o.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[r].test(e))return r;if(n&&"MMM"===t&&this._shortMonthsParse[r].test(e))return r;if(!n&&this._monthsParse[r].test(e))return r}}function ft(e,t){var n;if(!e.isValid())return e;if("string"===typeof t)if(/^\d+$/.test(t))t=E(t);else if(t=e.localeData().monthsParse(t),!h(t))return e;return n=Math.min(e.date(),ot(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function pt(e){return null!=e?(ft(this,e),o.updateOffset(this,!0),this):et(this,"Month")}function mt(){return ot(this.year(),this.month())}var _t=xe;function vt(e){return this._monthsParseExact?(p(this,"_monthsRegex")||wt.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(p(this,"_monthsShortRegex")||(this._monthsShortRegex=_t),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}var gt=xe;function yt(e){return this._monthsParseExact?(p(this,"_monthsRegex")||wt.call(this),e?this._monthsStrictRegex:this._monthsRegex):(p(this,"_monthsRegex")||(this._monthsRegex=gt),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function wt(){function e(e,t){return t.length-e.length}var t,n,r=[],i=[],o=[];for(t=0;t<12;t++)n=_([2e3,t]),r.push(this.monthsShort(n,"")),i.push(this.months(n,"")),o.push(this.months(n,"")),o.push(this.monthsShort(n,""));for(r.sort(e),i.sort(e),o.sort(e),t=0;t<12;t++)r[t]=Ae(r[t]),i[t]=Ae(i[t]);for(t=0;t<24;t++)o[t]=Ae(o[t]);this._monthsRegex=new RegExp("^("+o.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+r.join("|")+")","i")}function bt(e,t,n,r,i,o,s){var a;return e<100&&e>=0?(a=new Date(e+400,t,n,r,i,o,s),isFinite(a.getFullYear())&&a.setFullYear(e)):a=new Date(e,t,n,r,i,o,s),a}function Ct(e){var t;if(e<100&&e>=0){var n=Array.prototype.slice.call(arguments);n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)}else t=new Date(Date.UTC.apply(null,arguments));return t}function It(e,t,n){var r=7+t-n,i=(7+Ct(e,0,r).getUTCDay()-t)%7;return-i+r-1}function kt(e,t,n,r,i){var o,s,a=(7+n-r)%7,c=It(e,r,i),u=1+7*(t-1)+a+c;return u<=0?(o=e-1,s=Ge(o)+u):u>Ge(e)?(o=e+1,s=u-Ge(e)):(o=e,s=u),{year:o,dayOfYear:s}}function Tt(e,t,n){var r,i,o=It(e.year(),t,n),s=Math.floor((e.dayOfYear()-o-1)/7)+1;return s<1?(i=e.year()-1,r=s+St(i,t,n)):s>St(e.year(),t,n)?(r=s-St(e.year(),t,n),i=e.year()+1):(i=e.year(),r=s),{week:r,year:i}}function St(e,t,n){var r=It(e,t,n),i=It(e+1,t,n);return(Ge(e)-r+i)/7}function Et(e){return Tt(e,this._week.dow,this._week.doy).week}ce("w",["ww",2],"wo","week"),ce("W",["WW",2],"Wo","isoWeek"),Q("week","w"),Q("isoWeek","W"),te("week",5),te("isoWeek",5),Re("w",ge),Re("ww",ge,pe),Re("W",ge),Re("WW",ge,pe),Fe(["w","ww","W","WW"],(function(e,t,n,r){t[r.substr(0,1)]=E(e)}));var Ot={dow:0,doy:6};function xt(){return this._week.dow}function Pt(){return this._week.doy}function Rt(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")}function Dt(e){var t=Tt(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")}function Nt(e,t){return"string"!==typeof e?e:isNaN(e)?(e=t.weekdaysParse(e),"number"===typeof e?e:null):parseInt(e,10)}function At(e,t){return"string"===typeof e?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Mt(e,t){return e.slice(t,7).concat(e.slice(0,t))}ce("d",0,"do","day"),ce("dd",0,0,(function(e){return this.localeData().weekdaysMin(this,e)})),ce("ddd",0,0,(function(e){return this.localeData().weekdaysShort(this,e)})),ce("dddd",0,0,(function(e){return this.localeData().weekdays(this,e)})),ce("e",0,0,"weekday"),ce("E",0,0,"isoWeekday"),Q("day","d"),Q("weekday","e"),Q("isoWeekday","E"),te("day",11),te("weekday",11),te("isoWeekday",11),Re("d",ge),Re("e",ge),Re("E",ge),Re("dd",(function(e,t){return t.weekdaysMinRegex(e)})),Re("ddd",(function(e,t){return t.weekdaysShortRegex(e)})),Re("dddd",(function(e,t){return t.weekdaysRegex(e)})),Fe(["dd","ddd","dddd"],(function(e,t,n,r){var i=n._locale.weekdaysParse(e,r,n._strict);null!=i?t.d=i:g(n).invalidWeekday=e})),Fe(["d","e","E"],(function(e,t,n,r){t[r]=E(e)}));var Lt="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");function Ft(e,t){var n=a(this._weekdays)?this._weekdays:this._weekdays[e&&!0!==e&&this._weekdays.isFormat.test(t)?"format":"standalone"];return!0===e?Mt(n,this._week.dow):e?n[e.day()]:n}var jt="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");function $t(e){return!0===e?Mt(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}var Ut="Su_Mo_Tu_We_Th_Fr_Sa".split("_");function Wt(e){return!0===e?Mt(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Vt(e,t,n){var r,i,o,s=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],r=0;r<7;++r)o=_([2e3,1]).day(r),this._minWeekdaysParse[r]=this.weekdaysMin(o,"").toLocaleLowerCase(),this._shortWeekdaysParse[r]=this.weekdaysShort(o,"").toLocaleLowerCase(),this._weekdaysParse[r]=this.weekdays(o,"").toLocaleLowerCase();return n?"dddd"===t?(i=Je.call(this._weekdaysParse,s),-1!==i?i:null):"ddd"===t?(i=Je.call(this._shortWeekdaysParse,s),-1!==i?i:null):(i=Je.call(this._minWeekdaysParse,s),-1!==i?i:null):"dddd"===t?(i=Je.call(this._weekdaysParse,s),-1!==i?i:(i=Je.call(this._shortWeekdaysParse,s),-1!==i?i:(i=Je.call(this._minWeekdaysParse,s),-1!==i?i:null))):"ddd"===t?(i=Je.call(this._shortWeekdaysParse,s),-1!==i?i:(i=Je.call(this._weekdaysParse,s),-1!==i?i:(i=Je.call(this._minWeekdaysParse,s),-1!==i?i:null))):(i=Je.call(this._minWeekdaysParse,s),-1!==i?i:(i=Je.call(this._weekdaysParse,s),-1!==i?i:(i=Je.call(this._shortWeekdaysParse,s),-1!==i?i:null)))}function Yt(e,t,n){var r,i,o;if(this._weekdaysParseExact)return Vt.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),r=0;r<7;r++){if(i=_([2e3,1]).day(r),n&&!this._fullWeekdaysParse[r]&&(this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[r]||(o="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[r]=new RegExp(o.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[r].test(e))return r;if(n&&"ddd"===t&&this._shortWeekdaysParse[r].test(e))return r;if(n&&"dd"===t&&this._minWeekdaysParse[r].test(e))return r;if(!n&&this._weekdaysParse[r].test(e))return r}}function Ht(e){if(!this.isValid())return null!=e?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=Nt(e,this.localeData()),this.add(e-t,"d")):t}function qt(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")}function zt(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var t=At(e,this.localeData());return this.day(this.day()%7?t:t-7)}return this.day()||7}var Bt=xe;function Gt(e){return this._weekdaysParseExact?(p(this,"_weekdaysRegex")||Xt.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(p(this,"_weekdaysRegex")||(this._weekdaysRegex=Bt),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}var Kt=xe;function Jt(e){return this._weekdaysParseExact?(p(this,"_weekdaysRegex")||Xt.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(p(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Kt),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}var Qt=xe;function Zt(e){return this._weekdaysParseExact?(p(this,"_weekdaysRegex")||Xt.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(p(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Qt),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Xt(){function e(e,t){return t.length-e.length}var t,n,r,i,o,s=[],a=[],c=[],u=[];for(t=0;t<7;t++)n=_([2e3,1]).day(t),r=this.weekdaysMin(n,""),i=this.weekdaysShort(n,""),o=this.weekdays(n,""),s.push(r),a.push(i),c.push(o),u.push(r),u.push(i),u.push(o);for(s.sort(e),a.sort(e),c.sort(e),u.sort(e),t=0;t<7;t++)a[t]=Ae(a[t]),c[t]=Ae(c[t]),u[t]=Ae(u[t]);this._weekdaysRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+c.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+s.join("|")+")","i")}function en(){return this.hours()%12||12}function tn(){return this.hours()||24}function nn(e,t){ce(e,0,0,(function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)}))}function rn(e,t){return t._meridiemParse}function on(e){return"p"===(e+"").toLowerCase().charAt(0)}ce("H",["HH",2],0,"hour"),ce("h",["hh",2],0,en),ce("k",["kk",2],0,tn),ce("hmm",0,0,(function(){return""+en.apply(this)+re(this.minutes(),2)})),ce("hmmss",0,0,(function(){return""+en.apply(this)+re(this.minutes(),2)+re(this.seconds(),2)})),ce("Hmm",0,0,(function(){return""+this.hours()+re(this.minutes(),2)})),ce("Hmmss",0,0,(function(){return""+this.hours()+re(this.minutes(),2)+re(this.seconds(),2)})),nn("a",!0),nn("A",!1),Q("hour","h"),te("hour",13),Re("a",rn),Re("A",rn),Re("H",ge),Re("h",ge),Re("k",ge),Re("HH",ge,pe),Re("hh",ge,pe),Re("kk",ge,pe),Re("hmm",ye),Re("hmmss",we),Re("Hmm",ye),Re("Hmmss",we),Le(["H","HH"],Ve),Le(["k","kk"],(function(e,t,n){var r=E(e);t[Ve]=24===r?0:r})),Le(["a","A"],(function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e})),Le(["h","hh"],(function(e,t,n){t[Ve]=E(e),g(n).bigHour=!0})),Le("hmm",(function(e,t,n){var r=e.length-2;t[Ve]=E(e.substr(0,r)),t[Ye]=E(e.substr(r)),g(n).bigHour=!0})),Le("hmmss",(function(e,t,n){var r=e.length-4,i=e.length-2;t[Ve]=E(e.substr(0,r)),t[Ye]=E(e.substr(r,2)),t[He]=E(e.substr(i)),g(n).bigHour=!0})),Le("Hmm",(function(e,t,n){var r=e.length-2;t[Ve]=E(e.substr(0,r)),t[Ye]=E(e.substr(r))})),Le("Hmmss",(function(e,t,n){var r=e.length-4,i=e.length-2;t[Ve]=E(e.substr(0,r)),t[Ye]=E(e.substr(r,2)),t[He]=E(e.substr(i))}));var sn=/[ap]\.?m?\.?/i;function an(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}var cn,un=Xe("Hours",!0),ln={calendar:j,longDateFormat:U,invalidDate:V,ordinal:H,dayOfMonthOrdinalParse:q,relativeTime:B,months:at,monthsShort:ut,week:Ot,weekdays:Lt,weekdaysMin:Ut,weekdaysShort:jt,meridiemParse:sn},hn={},dn={};function fn(e){return e?e.toLowerCase().replace("_","-"):e}function pn(e){var t,n,r,i,o=0;while(o<e.length){i=fn(e[o]).split("-"),t=i.length,n=fn(e[o+1]),n=n?n.split("-"):null;while(t>0){if(r=mn(i.slice(0,t).join("-")),r)return r;if(n&&n.length>=t&&O(i,n,!0)>=t-1)break;t--}o++}return cn}function mn(t){var n=null;if(!hn[t]&&e&&e.exports)try{n=cn._abbr;var i=r;i("./locale/"+t),_n(n)}catch(o){}return hn[t]}function _n(e,t){var n;return e&&(n=l(t)?yn(e):vn(e,t),n?cn=n:"undefined"!==typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),cn._abbr}function vn(e,t){if(null!==t){var n,r=ln;if(t.abbr=e,null!=hn[e])N("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),r=hn[e]._config;else if(null!=t.parentLocale)if(null!=hn[t.parentLocale])r=hn[t.parentLocale]._config;else{if(n=mn(t.parentLocale),null==n)return dn[t.parentLocale]||(dn[t.parentLocale]=[]),dn[t.parentLocale].push({name:e,config:t}),null;r=n._config}return hn[e]=new F(L(r,t)),dn[e]&&dn[e].forEach((function(e){vn(e.name,e.config)})),_n(e),hn[e]}return delete hn[e],null}function gn(e,t){if(null!=t){var n,r,i=ln;r=mn(e),null!=r&&(i=r._config),t=L(i,t),n=new F(t),n.parentLocale=hn[e],hn[e]=n,_n(e)}else null!=hn[e]&&(null!=hn[e].parentLocale?hn[e]=hn[e].parentLocale:null!=hn[e]&&delete hn[e]);return hn[e]}function yn(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return cn;if(!a(e)){if(t=mn(e),t)return t;e=[e]}return pn(e)}function wn(){return R(hn)}function bn(e){var t,n=e._a;return n&&-2===g(e).overflow&&(t=n[Ue]<0||n[Ue]>11?Ue:n[We]<1||n[We]>ot(n[$e],n[Ue])?We:n[Ve]<0||n[Ve]>24||24===n[Ve]&&(0!==n[Ye]||0!==n[He]||0!==n[qe])?Ve:n[Ye]<0||n[Ye]>59?Ye:n[He]<0||n[He]>59?He:n[qe]<0||n[qe]>999?qe:-1,g(e)._overflowDayOfYear&&(t<$e||t>We)&&(t=We),g(e)._overflowWeeks&&-1===t&&(t=ze),g(e)._overflowWeekday&&-1===t&&(t=Be),g(e).overflow=t),e}function Cn(e,t,n){return null!=e?e:null!=t?t:n}function In(e){var t=new Date(o.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function kn(e){var t,n,r,i,o,s=[];if(!e._d){for(r=In(e),e._w&&null==e._a[We]&&null==e._a[Ue]&&Tn(e),null!=e._dayOfYear&&(o=Cn(e._a[$e],r[$e]),(e._dayOfYear>Ge(o)||0===e._dayOfYear)&&(g(e)._overflowDayOfYear=!0),n=Ct(o,0,e._dayOfYear),e._a[Ue]=n.getUTCMonth(),e._a[We]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=s[t]=r[t];for(;t<7;t++)e._a[t]=s[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[Ve]&&0===e._a[Ye]&&0===e._a[He]&&0===e._a[qe]&&(e._nextDay=!0,e._a[Ve]=0),e._d=(e._useUTC?Ct:bt).apply(null,s),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[Ve]=24),e._w&&"undefined"!==typeof e._w.d&&e._w.d!==i&&(g(e).weekdayMismatch=!0)}}function Tn(e){var t,n,r,i,o,s,a,c;if(t=e._w,null!=t.GG||null!=t.W||null!=t.E)o=1,s=4,n=Cn(t.GG,e._a[$e],Tt(Jn(),1,4).year),r=Cn(t.W,1),i=Cn(t.E,1),(i<1||i>7)&&(c=!0);else{o=e._locale._week.dow,s=e._locale._week.doy;var u=Tt(Jn(),o,s);n=Cn(t.gg,e._a[$e],u.year),r=Cn(t.w,u.week),null!=t.d?(i=t.d,(i<0||i>6)&&(c=!0)):null!=t.e?(i=t.e+o,(t.e<0||t.e>6)&&(c=!0)):i=o}r<1||r>St(n,o,s)?g(e)._overflowWeeks=!0:null!=c?g(e)._overflowWeekday=!0:(a=kt(n,r,i,o,s),e._a[$e]=a.year,e._dayOfYear=a.dayOfYear)}var Sn=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,En=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,On=/Z|[+-]\d\d(?::?\d\d)?/,xn=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Pn=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Rn=/^\/?Date\((\-?\d+)/i;function Dn(e){var t,n,r,i,o,s,a=e._i,c=Sn.exec(a)||En.exec(a);if(c){for(g(e).iso=!0,t=0,n=xn.length;t<n;t++)if(xn[t][1].exec(c[1])){i=xn[t][0],r=!1!==xn[t][2];break}if(null==i)return void(e._isValid=!1);if(c[3]){for(t=0,n=Pn.length;t<n;t++)if(Pn[t][1].exec(c[3])){o=(c[2]||" ")+Pn[t][0];break}if(null==o)return void(e._isValid=!1)}if(!r&&null!=o)return void(e._isValid=!1);if(c[4]){if(!On.exec(c[4]))return void(e._isValid=!1);s="Z"}e._f=i+(o||"")+(s||""),Vn(e)}else e._isValid=!1}var Nn=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function An(e,t,n,r,i,o){var s=[Mn(e),ut.indexOf(t),parseInt(n,10),parseInt(r,10),parseInt(i,10)];return o&&s.push(parseInt(o,10)),s}function Mn(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function Ln(e){return e.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Fn(e,t,n){if(e){var r=jt.indexOf(e),i=new Date(t[0],t[1],t[2]).getDay();if(r!==i)return g(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}var jn={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function $n(e,t,n){if(e)return jn[e];if(t)return 0;var r=parseInt(n,10),i=r%100,o=(r-i)/100;return 60*o+i}function Un(e){var t=Nn.exec(Ln(e._i));if(t){var n=An(t[4],t[3],t[2],t[5],t[6],t[7]);if(!Fn(t[1],n,e))return;e._a=n,e._tzm=$n(t[8],t[9],t[10]),e._d=Ct.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),g(e).rfc2822=!0}else e._isValid=!1}function Wn(e){var t=Rn.exec(e._i);null===t?(Dn(e),!1===e._isValid&&(delete e._isValid,Un(e),!1===e._isValid&&(delete e._isValid,o.createFromInputFallback(e)))):e._d=new Date(+t[1])}function Vn(e){if(e._f!==o.ISO_8601)if(e._f!==o.RFC_2822){e._a=[],g(e).empty=!0;var t,n,r,i,s,a=""+e._i,c=a.length,u=0;for(r=de(e._f,e._locale).match(ie)||[],t=0;t<r.length;t++)i=r[t],n=(a.match(De(i,e))||[])[0],n&&(s=a.substr(0,a.indexOf(n)),s.length>0&&g(e).unusedInput.push(s),a=a.slice(a.indexOf(n)+n.length),u+=n.length),ae[i]?(n?g(e).empty=!1:g(e).unusedTokens.push(i),je(i,n,e)):e._strict&&!n&&g(e).unusedTokens.push(i);g(e).charsLeftOver=c-u,a.length>0&&g(e).unusedInput.push(a),e._a[Ve]<=12&&!0===g(e).bigHour&&e._a[Ve]>0&&(g(e).bigHour=void 0),g(e).parsedDateParts=e._a.slice(0),g(e).meridiem=e._meridiem,e._a[Ve]=Yn(e._locale,e._a[Ve],e._meridiem),kn(e),bn(e)}else Un(e);else Dn(e)}function Yn(e,t,n){var r;return null==n?t:null!=e.meridiemHour?e.meridiemHour(t,n):null!=e.isPM?(r=e.isPM(n),r&&t<12&&(t+=12),r||12!==t||(t=0),t):t}function Hn(e){var t,n,r,i,o;if(0===e._f.length)return g(e).invalidFormat=!0,void(e._d=new Date(NaN));for(i=0;i<e._f.length;i++)o=0,t=C({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],Vn(t),y(t)&&(o+=g(t).charsLeftOver,o+=10*g(t).unusedTokens.length,g(t).score=o,(null==r||o<r)&&(r=o,n=t));m(e,n||t)}function qn(e){if(!e._d){var t=X(e._i);e._a=f([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],(function(e){return e&&parseInt(e,10)})),kn(e)}}function zn(e){var t=new k(bn(Bn(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function Bn(e){var t=e._i,n=e._f;return e._locale=e._locale||yn(e._l),null===t||void 0===n&&""===t?w({nullInput:!0}):("string"===typeof t&&(e._i=t=e._locale.preparse(t)),T(t)?new k(bn(t)):(d(t)?e._d=t:a(n)?Hn(e):n?Vn(e):Gn(e),y(e)||(e._d=null),e))}function Gn(e){var t=e._i;l(t)?e._d=new Date(o.now()):d(t)?e._d=new Date(t.valueOf()):"string"===typeof t?Wn(e):a(t)?(e._a=f(t.slice(0),(function(e){return parseInt(e,10)})),kn(e)):c(t)?qn(e):h(t)?e._d=new Date(t):o.createFromInputFallback(e)}function Kn(e,t,n,r,i){var o={};return!0!==n&&!1!==n||(r=n,n=void 0),(c(e)&&u(e)||a(e)&&0===e.length)&&(e=void 0),o._isAMomentObject=!0,o._useUTC=o._isUTC=i,o._l=n,o._i=e,o._f=t,o._strict=r,zn(o)}function Jn(e,t,n,r){return Kn(e,t,n,r,!1)}o.createFromInputFallback=P("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",(function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))})),o.ISO_8601=function(){},o.RFC_2822=function(){};var Qn=P("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",(function(){var e=Jn.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:w()})),Zn=P("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",(function(){var e=Jn.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:w()}));function Xn(e,t){var n,r;if(1===t.length&&a(t[0])&&(t=t[0]),!t.length)return Jn();for(n=t[0],r=1;r<t.length;++r)t[r].isValid()&&!t[r][e](n)||(n=t[r]);return n}function er(){var e=[].slice.call(arguments,0);return Xn("isBefore",e)}function tr(){var e=[].slice.call(arguments,0);return Xn("isAfter",e)}var nr=function(){return Date.now?Date.now():+new Date},rr=["year","quarter","month","week","day","hour","minute","second","millisecond"];function ir(e){for(var t in e)if(-1===Je.call(rr,t)||null!=e[t]&&isNaN(e[t]))return!1;for(var n=!1,r=0;r<rr.length;++r)if(e[rr[r]]){if(n)return!1;parseFloat(e[rr[r]])!==E(e[rr[r]])&&(n=!0)}return!0}function or(){return this._isValid}function sr(){return Or(NaN)}function ar(e){var t=X(e),n=t.year||0,r=t.quarter||0,i=t.month||0,o=t.week||t.isoWeek||0,s=t.day||0,a=t.hour||0,c=t.minute||0,u=t.second||0,l=t.millisecond||0;this._isValid=ir(t),this._milliseconds=+l+1e3*u+6e4*c+1e3*a*60*60,this._days=+s+7*o,this._months=+i+3*r+12*n,this._data={},this._locale=yn(),this._bubble()}function cr(e){return e instanceof ar}function ur(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function lr(e,t){ce(e,0,0,(function(){var e=this.utcOffset(),n="+";return e<0&&(e=-e,n="-"),n+re(~~(e/60),2)+t+re(~~e%60,2)}))}lr("Z",":"),lr("ZZ",""),Re("Z",Ee),Re("ZZ",Ee),Le(["Z","ZZ"],(function(e,t,n){n._useUTC=!0,n._tzm=dr(Ee,e)}));var hr=/([\+\-]|\d\d)/gi;function dr(e,t){var n=(t||"").match(e);if(null===n)return null;var r=n[n.length-1]||[],i=(r+"").match(hr)||["-",0,0],o=60*i[1]+E(i[2]);return 0===o?0:"+"===i[0]?o:-o}function fr(e,t){var n,r;return t._isUTC?(n=t.clone(),r=(T(e)||d(e)?e.valueOf():Jn(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+r),o.updateOffset(n,!1),n):Jn(e).local()}function pr(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function mr(e,t,n){var r,i=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null!=e){if("string"===typeof e){if(e=dr(Ee,e),null===e)return this}else Math.abs(e)<16&&!n&&(e*=60);return!this._isUTC&&t&&(r=pr(this)),this._offset=e,this._isUTC=!0,null!=r&&this.add(r,"m"),i!==e&&(!t||this._changeInProgress?Nr(this,Or(e-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,o.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?i:pr(this)}function _r(e,t){return null!=e?("string"!==typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function vr(e){return this.utcOffset(0,e)}function gr(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(pr(this),"m")),this}function yr(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"===typeof this._i){var e=dr(Se,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this}function wr(e){return!!this.isValid()&&(e=e?Jn(e).utcOffset():0,(this.utcOffset()-e)%60===0)}function br(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Cr(){if(!l(this._isDSTShifted))return this._isDSTShifted;var e={};if(C(e,this),e=Bn(e),e._a){var t=e._isUTC?_(e._a):Jn(e._a);this._isDSTShifted=this.isValid()&&O(e._a,t.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Ir(){return!!this.isValid()&&!this._isUTC}function kr(){return!!this.isValid()&&this._isUTC}function Tr(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}o.updateOffset=function(){};var Sr=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Er=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Or(e,t){var n,r,o,s=e,a=null;return cr(e)?s={ms:e._milliseconds,d:e._days,M:e._months}:h(e)?(s={},t?s[t]=e:s.milliseconds=e):(a=Sr.exec(e))?(n="-"===a[1]?-1:1,s={y:0,d:E(a[We])*n,h:E(a[Ve])*n,m:E(a[Ye])*n,s:E(a[He])*n,ms:E(ur(1e3*a[qe]))*n}):(a=Er.exec(e))?(n="-"===a[1]?-1:1,s={y:xr(a[2],n),M:xr(a[3],n),w:xr(a[4],n),d:xr(a[5],n),h:xr(a[6],n),m:xr(a[7],n),s:xr(a[8],n)}):null==s?s={}:"object"===("undefined"===typeof s?"undefined":i(s))&&("from"in s||"to"in s)&&(o=Rr(Jn(s.from),Jn(s.to)),s={},s.ms=o.milliseconds,s.M=o.months),r=new ar(s),cr(e)&&p(e,"_locale")&&(r._locale=e._locale),r}function xr(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function Pr(e,t){var n={};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function Rr(e,t){var n;return e.isValid()&&t.isValid()?(t=fr(t,e),e.isBefore(t)?n=Pr(e,t):(n=Pr(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function Dr(e,t){return function(n,r){var i,o;return null===r||isNaN(+r)||(N(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),o=n,n=r,r=o),n="string"===typeof n?+n:n,i=Or(n,r),Nr(this,i,e),this}}function Nr(e,t,n,r){var i=t._milliseconds,s=ur(t._days),a=ur(t._months);e.isValid()&&(r=null==r||r,a&&ft(e,et(e,"Month")+a*n),s&&tt(e,"Date",et(e,"Date")+s*n),i&&e._d.setTime(e._d.valueOf()+i*n),r&&o.updateOffset(e,s||a))}Or.fn=ar.prototype,Or.invalid=sr;var Ar=Dr(1,"add"),Mr=Dr(-1,"subtract");function Lr(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function Fr(e,t){var n=e||Jn(),r=fr(n,this).startOf("day"),i=o.calendarFormat(this,r)||"sameElse",s=t&&(A(t[i])?t[i].call(this,n):t[i]);return this.format(s||this.localeData().calendar(i,this,Jn(n)))}function jr(){return new k(this)}function $r(e,t){var n=T(e)?e:Jn(e);return!(!this.isValid()||!n.isValid())&&(t=Z(t)||"millisecond","millisecond"===t?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())}function Ur(e,t){var n=T(e)?e:Jn(e);return!(!this.isValid()||!n.isValid())&&(t=Z(t)||"millisecond","millisecond"===t?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())}function Wr(e,t,n,r){var i=T(e)?e:Jn(e),o=T(t)?t:Jn(t);return!!(this.isValid()&&i.isValid()&&o.isValid())&&(r=r||"()",("("===r[0]?this.isAfter(i,n):!this.isBefore(i,n))&&(")"===r[1]?this.isBefore(o,n):!this.isAfter(o,n)))}function Vr(e,t){var n,r=T(e)?e:Jn(e);return!(!this.isValid()||!r.isValid())&&(t=Z(t)||"millisecond","millisecond"===t?this.valueOf()===r.valueOf():(n=r.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))}function Yr(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function Hr(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function qr(e,t,n){var r,i,o;if(!this.isValid())return NaN;if(r=fr(e,this),!r.isValid())return NaN;switch(i=6e4*(r.utcOffset()-this.utcOffset()),t=Z(t),t){case"year":o=zr(this,r)/12;break;case"month":o=zr(this,r);break;case"quarter":o=zr(this,r)/3;break;case"second":o=(this-r)/1e3;break;case"minute":o=(this-r)/6e4;break;case"hour":o=(this-r)/36e5;break;case"day":o=(this-r-i)/864e5;break;case"week":o=(this-r-i)/6048e5;break;default:o=this-r}return n?o:S(o)}function zr(e,t){var n,r,i=12*(t.year()-e.year())+(t.month()-e.month()),o=e.clone().add(i,"months");return t-o<0?(n=e.clone().add(i-1,"months"),r=(t-o)/(o-n)):(n=e.clone().add(i+1,"months"),r=(t-o)/(n-o)),-(i+r)||0}function Br(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Gr(e){if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?he(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):A(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",he(n,"Z")):he(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function Kr(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z");var n="["+e+'("]',r=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i="-MM-DD[T]HH:mm:ss.SSS",o=t+'[")]';return this.format(n+r+i+o)}function Jr(e){e||(e=this.isUtc()?o.defaultFormatUtc:o.defaultFormat);var t=he(this,e);return this.localeData().postformat(t)}function Qr(e,t){return this.isValid()&&(T(e)&&e.isValid()||Jn(e).isValid())?Or({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function Zr(e){return this.from(Jn(),e)}function Xr(e,t){return this.isValid()&&(T(e)&&e.isValid()||Jn(e).isValid())?Or({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function ei(e){return this.to(Jn(),e)}function ti(e){var t;return void 0===e?this._locale._abbr:(t=yn(e),null!=t&&(this._locale=t),this)}o.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",o.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var ni=P("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",(function(e){return void 0===e?this.localeData():this.locale(e)}));function ri(){return this._locale}var ii=1e3,oi=60*ii,si=60*oi,ai=3506328*si;function ci(e,t){return(e%t+t)%t}function ui(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-ai:new Date(e,t,n).valueOf()}function li(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-ai:Date.UTC(e,t,n)}function hi(e){var t;if(e=Z(e),void 0===e||"millisecond"===e||!this.isValid())return this;var n=this._isUTC?li:ui;switch(e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=ci(t+(this._isUTC?0:this.utcOffset()*oi),si);break;case"minute":t=this._d.valueOf(),t-=ci(t,oi);break;case"second":t=this._d.valueOf(),t-=ci(t,ii);break}return this._d.setTime(t),o.updateOffset(this,!0),this}function di(e){var t;if(e=Z(e),void 0===e||"millisecond"===e||!this.isValid())return this;var n=this._isUTC?li:ui;switch(e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=si-ci(t+(this._isUTC?0:this.utcOffset()*oi),si)-1;break;case"minute":t=this._d.valueOf(),t+=oi-ci(t,oi)-1;break;case"second":t=this._d.valueOf(),t+=ii-ci(t,ii)-1;break}return this._d.setTime(t),o.updateOffset(this,!0),this}function fi(){return this._d.valueOf()-6e4*(this._offset||0)}function pi(){return Math.floor(this.valueOf()/1e3)}function mi(){return new Date(this.valueOf())}function _i(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function vi(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function gi(){return this.isValid()?this.toISOString():null}function yi(){return y(this)}function wi(){return m({},g(this))}function bi(){return g(this).overflow}function Ci(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Ii(e,t){ce(0,[e,e.length],0,t)}function ki(e){return Oi.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Ti(e){return Oi.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Si(){return St(this.year(),1,4)}function Ei(){var e=this.localeData()._week;return St(this.year(),e.dow,e.doy)}function Oi(e,t,n,r,i){var o;return null==e?Tt(this,r,i).year:(o=St(e,r,i),t>o&&(t=o),xi.call(this,e,t,n,r,i))}function xi(e,t,n,r,i){var o=kt(e,t,n,r,i),s=Ct(o.year,0,o.dayOfYear);return this.year(s.getUTCFullYear()),this.month(s.getUTCMonth()),this.date(s.getUTCDate()),this}function Pi(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)}ce(0,["gg",2],0,(function(){return this.weekYear()%100})),ce(0,["GG",2],0,(function(){return this.isoWeekYear()%100})),Ii("gggg","weekYear"),Ii("ggggg","weekYear"),Ii("GGGG","isoWeekYear"),Ii("GGGGG","isoWeekYear"),Q("weekYear","gg"),Q("isoWeekYear","GG"),te("weekYear",1),te("isoWeekYear",1),Re("G",Te),Re("g",Te),Re("GG",ge,pe),Re("gg",ge,pe),Re("GGGG",Ce,_e),Re("gggg",Ce,_e),Re("GGGGG",Ie,ve),Re("ggggg",Ie,ve),Fe(["gggg","ggggg","GGGG","GGGGG"],(function(e,t,n,r){t[r.substr(0,2)]=E(e)})),Fe(["gg","GG"],(function(e,t,n,r){t[r]=o.parseTwoDigitYear(e)})),ce("Q",0,"Qo","quarter"),Q("quarter","Q"),te("quarter",7),Re("Q",fe),Le("Q",(function(e,t){t[Ue]=3*(E(e)-1)})),ce("D",["DD",2],"Do","date"),Q("date","D"),te("date",9),Re("D",ge),Re("DD",ge,pe),Re("Do",(function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient})),Le(["D","DD"],We),Le("Do",(function(e,t){t[We]=E(e.match(ge)[0])}));var Ri=Xe("Date",!0);function Di(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")}ce("DDD",["DDDD",3],"DDDo","dayOfYear"),Q("dayOfYear","DDD"),te("dayOfYear",4),Re("DDD",be),Re("DDDD",me),Le(["DDD","DDDD"],(function(e,t,n){n._dayOfYear=E(e)})),ce("m",["mm",2],0,"minute"),Q("minute","m"),te("minute",14),Re("m",ge),Re("mm",ge,pe),Le(["m","mm"],Ye);var Ni=Xe("Minutes",!1);ce("s",["ss",2],0,"second"),Q("second","s"),te("second",15),Re("s",ge),Re("ss",ge,pe),Le(["s","ss"],He);var Ai,Mi=Xe("Seconds",!1);for(ce("S",0,0,(function(){return~~(this.millisecond()/100)})),ce(0,["SS",2],0,(function(){return~~(this.millisecond()/10)})),ce(0,["SSS",3],0,"millisecond"),ce(0,["SSSS",4],0,(function(){return 10*this.millisecond()})),ce(0,["SSSSS",5],0,(function(){return 100*this.millisecond()})),ce(0,["SSSSSS",6],0,(function(){return 1e3*this.millisecond()})),ce(0,["SSSSSSS",7],0,(function(){return 1e4*this.millisecond()})),ce(0,["SSSSSSSS",8],0,(function(){return 1e5*this.millisecond()})),ce(0,["SSSSSSSSS",9],0,(function(){return 1e6*this.millisecond()})),Q("millisecond","ms"),te("millisecond",16),Re("S",be,fe),Re("SS",be,pe),Re("SSS",be,me),Ai="SSSS";Ai.length<=9;Ai+="S")Re(Ai,ke);function Li(e,t){t[qe]=E(1e3*("0."+e))}for(Ai="S";Ai.length<=9;Ai+="S")Le(Ai,Li);var Fi=Xe("Milliseconds",!1);function ji(){return this._isUTC?"UTC":""}function $i(){return this._isUTC?"Coordinated Universal Time":""}ce("z",0,0,"zoneAbbr"),ce("zz",0,0,"zoneName");var Ui=k.prototype;function Wi(e){return Jn(1e3*e)}function Vi(){return Jn.apply(null,arguments).parseZone()}function Yi(e){return e}Ui.add=Ar,Ui.calendar=Fr,Ui.clone=jr,Ui.diff=qr,Ui.endOf=di,Ui.format=Jr,Ui.from=Qr,Ui.fromNow=Zr,Ui.to=Xr,Ui.toNow=ei,Ui.get=nt,Ui.invalidAt=bi,Ui.isAfter=$r,Ui.isBefore=Ur,Ui.isBetween=Wr,Ui.isSame=Vr,Ui.isSameOrAfter=Yr,Ui.isSameOrBefore=Hr,Ui.isValid=yi,Ui.lang=ni,Ui.locale=ti,Ui.localeData=ri,Ui.max=Zn,Ui.min=Qn,Ui.parsingFlags=wi,Ui.set=rt,Ui.startOf=hi,Ui.subtract=Mr,Ui.toArray=_i,Ui.toObject=vi,Ui.toDate=mi,Ui.toISOString=Gr,Ui.inspect=Kr,Ui.toJSON=gi,Ui.toString=Br,Ui.unix=pi,Ui.valueOf=fi,Ui.creationData=Ci,Ui.year=Qe,Ui.isLeapYear=Ze,Ui.weekYear=ki,Ui.isoWeekYear=Ti,Ui.quarter=Ui.quarters=Pi,Ui.month=pt,Ui.daysInMonth=mt,Ui.week=Ui.weeks=Rt,Ui.isoWeek=Ui.isoWeeks=Dt,Ui.weeksInYear=Ei,Ui.isoWeeksInYear=Si,Ui.date=Ri,Ui.day=Ui.days=Ht,Ui.weekday=qt,Ui.isoWeekday=zt,Ui.dayOfYear=Di,Ui.hour=Ui.hours=un,Ui.minute=Ui.minutes=Ni,Ui.second=Ui.seconds=Mi,Ui.millisecond=Ui.milliseconds=Fi,Ui.utcOffset=mr,Ui.utc=vr,Ui.local=gr,Ui.parseZone=yr,Ui.hasAlignedHourOffset=wr,Ui.isDST=br,Ui.isLocal=Ir,Ui.isUtcOffset=kr,Ui.isUtc=Tr,Ui.isUTC=Tr,Ui.zoneAbbr=ji,Ui.zoneName=$i,Ui.dates=P("dates accessor is deprecated. Use date instead.",Ri),Ui.months=P("months accessor is deprecated. Use month instead",pt),Ui.years=P("years accessor is deprecated. Use year instead",Qe),Ui.zone=P("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",_r),Ui.isDSTShifted=P("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Cr);var Hi=F.prototype;function qi(e,t,n,r){var i=yn(),o=_().set(r,t);return i[n](o,e)}function zi(e,t,n){if(h(e)&&(t=e,e=void 0),e=e||"",null!=t)return qi(e,t,n,"month");var r,i=[];for(r=0;r<12;r++)i[r]=qi(e,r,n,"month");return i}function Bi(e,t,n,r){"boolean"===typeof e?(h(t)&&(n=t,t=void 0),t=t||""):(t=e,n=t,e=!1,h(t)&&(n=t,t=void 0),t=t||"");var i,o=yn(),s=e?o._week.dow:0;if(null!=n)return qi(t,(n+s)%7,r,"day");var a=[];for(i=0;i<7;i++)a[i]=qi(t,(i+s)%7,r,"day");return a}function Gi(e,t){return zi(e,t,"months")}function Ki(e,t){return zi(e,t,"monthsShort")}function Ji(e,t,n){return Bi(e,t,n,"weekdays")}function Qi(e,t,n){return Bi(e,t,n,"weekdaysShort")}function Zi(e,t,n){return Bi(e,t,n,"weekdaysMin")}Hi.calendar=$,Hi.longDateFormat=W,Hi.invalidDate=Y,Hi.ordinal=z,Hi.preparse=Yi,Hi.postformat=Yi,Hi.relativeTime=G,Hi.pastFuture=K,Hi.set=M,Hi.months=ct,Hi.monthsShort=lt,Hi.monthsParse=dt,Hi.monthsRegex=yt,Hi.monthsShortRegex=vt,Hi.week=Et,Hi.firstDayOfYear=Pt,Hi.firstDayOfWeek=xt,Hi.weekdays=Ft,Hi.weekdaysMin=Wt,Hi.weekdaysShort=$t,Hi.weekdaysParse=Yt,Hi.weekdaysRegex=Gt,Hi.weekdaysShortRegex=Jt,Hi.weekdaysMinRegex=Zt,Hi.isPM=on,Hi.meridiem=an,_n("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=1===E(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n}}),o.lang=P("moment.lang is deprecated. Use moment.locale instead.",_n),o.langData=P("moment.langData is deprecated. Use moment.localeData instead.",yn);var Xi=Math.abs;function eo(){var e=this._data;return this._milliseconds=Xi(this._milliseconds),this._days=Xi(this._days),this._months=Xi(this._months),e.milliseconds=Xi(e.milliseconds),e.seconds=Xi(e.seconds),e.minutes=Xi(e.minutes),e.hours=Xi(e.hours),e.months=Xi(e.months),e.years=Xi(e.years),this}function to(e,t,n,r){var i=Or(t,n);return e._milliseconds+=r*i._milliseconds,e._days+=r*i._days,e._months+=r*i._months,e._bubble()}function no(e,t){return to(this,e,t,1)}function ro(e,t){return to(this,e,t,-1)}function io(e){return e<0?Math.floor(e):Math.ceil(e)}function oo(){var e,t,n,r,i,o=this._milliseconds,s=this._days,a=this._months,c=this._data;return o>=0&&s>=0&&a>=0||o<=0&&s<=0&&a<=0||(o+=864e5*io(ao(a)+s),s=0,a=0),c.milliseconds=o%1e3,e=S(o/1e3),c.seconds=e%60,t=S(e/60),c.minutes=t%60,n=S(t/60),c.hours=n%24,s+=S(n/24),i=S(so(s)),a+=i,s-=io(ao(i)),r=S(a/12),a%=12,c.days=s,c.months=a,c.years=r,this}function so(e){return 4800*e/146097}function ao(e){return 146097*e/4800}function co(e){if(!this.isValid())return NaN;var t,n,r=this._milliseconds;if(e=Z(e),"month"===e||"quarter"===e||"year"===e)switch(t=this._days+r/864e5,n=this._months+so(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(ao(this._months)),e){case"week":return t/7+r/6048e5;case"day":return t+r/864e5;case"hour":return 24*t+r/36e5;case"minute":return 1440*t+r/6e4;case"second":return 86400*t+r/1e3;case"millisecond":return Math.floor(864e5*t)+r;default:throw new Error("Unknown unit "+e)}}function uo(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*E(this._months/12):NaN}function lo(e){return function(){return this.as(e)}}var ho=lo("ms"),fo=lo("s"),po=lo("m"),mo=lo("h"),_o=lo("d"),vo=lo("w"),go=lo("M"),yo=lo("Q"),wo=lo("y");function bo(){return Or(this)}function Co(e){return e=Z(e),this.isValid()?this[e+"s"]():NaN}function Io(e){return function(){return this.isValid()?this._data[e]:NaN}}var ko=Io("milliseconds"),To=Io("seconds"),So=Io("minutes"),Eo=Io("hours"),Oo=Io("days"),xo=Io("months"),Po=Io("years");function Ro(){return S(this.days()/7)}var Do=Math.round,No={ss:44,s:45,m:45,h:22,d:26,M:11};function Ao(e,t,n,r,i){return i.relativeTime(t||1,!!n,e,r)}function Mo(e,t,n){var r=Or(e).abs(),i=Do(r.as("s")),o=Do(r.as("m")),s=Do(r.as("h")),a=Do(r.as("d")),c=Do(r.as("M")),u=Do(r.as("y")),l=i<=No.ss&&["s",i]||i<No.s&&["ss",i]||o<=1&&["m"]||o<No.m&&["mm",o]||s<=1&&["h"]||s<No.h&&["hh",s]||a<=1&&["d"]||a<No.d&&["dd",a]||c<=1&&["M"]||c<No.M&&["MM",c]||u<=1&&["y"]||["yy",u];return l[2]=t,l[3]=+e>0,l[4]=n,Ao.apply(null,l)}function Lo(e){return void 0===e?Do:"function"===typeof e&&(Do=e,!0)}function Fo(e,t){return void 0!==No[e]&&(void 0===t?No[e]:(No[e]=t,"s"===e&&(No.ss=t-1),!0))}function jo(e){if(!this.isValid())return this.localeData().invalidDate();var t=this.localeData(),n=Mo(this,!e,t);return e&&(n=t.pastFuture(+this,n)),t.postformat(n)}var $o=Math.abs;function Uo(e){return(e>0)-(e<0)||+e}function Wo(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n,r=$o(this._milliseconds)/1e3,i=$o(this._days),o=$o(this._months);e=S(r/60),t=S(e/60),r%=60,e%=60,n=S(o/12),o%=12;var s=n,a=o,c=i,u=t,l=e,h=r?r.toFixed(3).replace(/\.?0+$/,""):"",d=this.asSeconds();if(!d)return"P0D";var f=d<0?"-":"",p=Uo(this._months)!==Uo(d)?"-":"",m=Uo(this._days)!==Uo(d)?"-":"",_=Uo(this._milliseconds)!==Uo(d)?"-":"";return f+"P"+(s?p+s+"Y":"")+(a?p+a+"M":"")+(c?m+c+"D":"")+(u||l||h?"T":"")+(u?_+u+"H":"")+(l?_+l+"M":"")+(h?_+h+"S":"")}var Vo=ar.prototype;return Vo.isValid=or,Vo.abs=eo,Vo.add=no,Vo.subtract=ro,Vo.as=co,Vo.asMilliseconds=ho,Vo.asSeconds=fo,Vo.asMinutes=po,Vo.asHours=mo,Vo.asDays=_o,Vo.asWeeks=vo,Vo.asMonths=go,Vo.asQuarters=yo,Vo.asYears=wo,Vo.valueOf=uo,Vo._bubble=oo,Vo.clone=bo,Vo.get=Co,Vo.milliseconds=ko,Vo.seconds=To,Vo.minutes=So,Vo.hours=Eo,Vo.days=Oo,Vo.weeks=Ro,Vo.months=xo,Vo.years=Po,Vo.humanize=jo,Vo.toISOString=Wo,Vo.toString=Wo,Vo.toJSON=Wo,Vo.locale=ti,Vo.localeData=ri,Vo.toIsoString=P("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Wo),Vo.lang=ni,ce("X",0,0,"unix"),ce("x",0,0,"valueOf"),Re("x",Te),Re("X",Oe),Le("X",(function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))})),Le("x",(function(e,t,n){n._d=new Date(E(e))})),o.version="2.24.0",s(Jn),o.fn=Ui,o.min=er,o.max=tr,o.now=nr,o.utc=_,o.unix=Wi,o.months=Gi,o.isDate=d,o.locale=_n,o.invalid=w,o.duration=Or,o.isMoment=T,o.weekdays=Ji,o.parseZone=Vi,o.localeData=yn,o.isDuration=cr,o.monthsShort=Ki,o.weekdaysMin=Zi,o.defineLocale=vn,o.updateLocale=gn,o.locales=wn,o.weekdaysShort=Qi,o.normalizeUnits=Z,o.relativeTimeRounding=Lo,o.relativeTimeThreshold=Fo,o.calendarFormat=Lr,o.prototype=Ui,o.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},o}))})),s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var c={install:function(e,t){var n=t&&t.moment?t.moment:o;Object.defineProperties(e.prototype,{$moment:{get:function(){return n}}}),e.moment=n,e.filter("moment",(function(){for(var e=arguments,t=arguments.length,r=Array(t),i=0;i<t;i++)r[i]=e[i];r=Array.prototype.slice.call(r);var o=r.shift(),a=void 0;if(a=Array.isArray(o)&&"string"===typeof o[0]?n(o[0],o[1],!0):"number"===typeof o&&o.toString().length<12?n.unix(o):n(o),!o||!a.isValid())return console.warn("Could not build a valid `moment` object from input."),o;function c(){for(var e=arguments,t=arguments.length,r=Array(t),i=0;i<t;i++)r[i]=e[i];r=Array.prototype.slice.call(r);var o=r.shift();switch(o){case"add":for(var u=r.shift().split(",").map(Function.prototype.call,String.prototype.trim),l={},h=0;h<u.length;h++){var d=u[h].split(" ");l[d[1]]=d[0]}a.add(l);break;case"subtract":for(var f=r.shift().split(",").map(Function.prototype.call,String.prototype.trim),p={},m=0;m<f.length;m++){var _=f[m].split(" ");p[_[1]]=_[0]}a.subtract(p);break;case"from":var v="now",g=!1;"now"===r[0]&&r.shift(),n(r[0]).isValid()&&(v=n(r.shift())),!0===r[0]&&(r.shift(),g=!0),a="now"!==v?a.from(v,g):a.fromNow(g);break;case"diff":var y=n(),w="",b=!1;n(r[0]).isValid()?y=n(r.shift()):null!==r[0]&&"now"!==r[0]||r.shift(),r[0]&&(w=r.shift()),!0===r[0]&&(b=r.shift()),a=a.diff(y,w,b);break;case"calendar":var C=n(),I={};n(r[0]).isValid()?C=n(r.shift()):null!==r[0]&&"now"!==r[0]||r.shift(),"object"===s(r[0])&&(I=r.shift()),a=a.calendar(C,I);break;case"utc":a.utc();break;case"timezone":a.tz(r.shift());break;default:var k=o;a=a.format(k)}r.length&&c.apply(c,r)}return c.apply(c,r),a})),e.filter("duration",(function(){for(var e=arguments,t=arguments.length,r=Array(t),i=0;i<t;i++)r[i]=e[i];r=Array.prototype.slice.call(r);var o=r.shift(),s=r.shift();function c(e){Array.isArray(e)||(e=[e]);var t=n.duration.apply(n,a(e));return t.isValid()||console.warn("Could not build a valid `duration` object from input."),t}var u=c(o);if("add"===s||"subtract"===s){var l=c(r);u[s](l)}else if(u&&u[s]){var h;u=(h=u)[s].apply(h,a(r))}return u}))}},u=c.install;e["default"]=c,e.install=u,Object.defineProperty(e,"__esModule",{value:!0})}))},2241:function(e,t,n){"use strict";n.d(t,{ZP:function(){return Ct}});n(7658);function r(e,t){for(var n in t)e[n]=t[n];return e}var i=/[!'()*]/g,o=function(e){return"%"+e.charCodeAt(0).toString(16)},s=/%2C/g,a=function(e){return encodeURIComponent(e).replace(i,o).replace(s,",")};function c(e){try{return decodeURIComponent(e)}catch(t){0}return e}function u(e,t,n){void 0===t&&(t={});var r,i=n||h;try{r=i(e||"")}catch(a){r={}}for(var o in t){var s=t[o];r[o]=Array.isArray(s)?s.map(l):l(s)}return r}var l=function(e){return null==e||"object"===typeof e?e:String(e)};function h(e){var t={};return e=e.trim().replace(/^(\?|#|&)/,""),e?(e.split("&").forEach((function(e){var n=e.replace(/\+/g," ").split("="),r=c(n.shift()),i=n.length>0?c(n.join("=")):null;void 0===t[r]?t[r]=i:Array.isArray(t[r])?t[r].push(i):t[r]=[t[r],i]})),t):t}function d(e){var t=e?Object.keys(e).map((function(t){var n=e[t];if(void 0===n)return"";if(null===n)return a(t);if(Array.isArray(n)){var r=[];return n.forEach((function(e){void 0!==e&&(null===e?r.push(a(t)):r.push(a(t)+"="+a(e)))})),r.join("&")}return a(t)+"="+a(n)})).filter((function(e){return e.length>0})).join("&"):null;return t?"?"+t:""}var f=/\/?$/;function p(e,t,n,r){var i=r&&r.options.stringifyQuery,o=t.query||{};try{o=m(o)}catch(a){}var s={name:t.name||e&&e.name,meta:e&&e.meta||{},path:t.path||"/",hash:t.hash||"",query:o,params:t.params||{},fullPath:g(t,i),matched:e?v(e):[]};return n&&(s.redirectedFrom=g(n,i)),Object.freeze(s)}function m(e){if(Array.isArray(e))return e.map(m);if(e&&"object"===typeof e){var t={};for(var n in e)t[n]=m(e[n]);return t}return e}var _=p(null,{path:"/"});function v(e){var t=[];while(e)t.unshift(e),e=e.parent;return t}function g(e,t){var n=e.path,r=e.query;void 0===r&&(r={});var i=e.hash;void 0===i&&(i="");var o=t||d;return(n||"/")+o(r)+i}function y(e,t,n){return t===_?e===t:!!t&&(e.path&&t.path?e.path.replace(f,"")===t.path.replace(f,"")&&(n||e.hash===t.hash&&w(e.query,t.query)):!(!e.name||!t.name)&&(e.name===t.name&&(n||e.hash===t.hash&&w(e.query,t.query)&&w(e.params,t.params))))}function w(e,t){if(void 0===e&&(e={}),void 0===t&&(t={}),!e||!t)return e===t;var n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((function(n,i){var o=e[n],s=r[i];if(s!==n)return!1;var a=t[n];return null==o||null==a?o===a:"object"===typeof o&&"object"===typeof a?w(o,a):String(o)===String(a)}))}function b(e,t){return 0===e.path.replace(f,"/").indexOf(t.path.replace(f,"/"))&&(!t.hash||e.hash===t.hash)&&C(e.query,t.query)}function C(e,t){for(var n in t)if(!(n in e))return!1;return!0}function I(e){for(var t=0;t<e.matched.length;t++){var n=e.matched[t];for(var r in n.instances){var i=n.instances[r],o=n.enteredCbs[r];if(i&&o){delete n.enteredCbs[r];for(var s=0;s<o.length;s++)i._isBeingDestroyed||o[s](i)}}}}var k={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(e,t){var n=t.props,i=t.children,o=t.parent,s=t.data;s.routerView=!0;var a=o.$createElement,c=n.name,u=o.$route,l=o._routerViewCache||(o._routerViewCache={}),h=0,d=!1;while(o&&o._routerRoot!==o){var f=o.$vnode?o.$vnode.data:{};f.routerView&&h++,f.keepAlive&&o._directInactive&&o._inactive&&(d=!0),o=o.$parent}if(s.routerViewDepth=h,d){var p=l[c],m=p&&p.component;return m?(p.configProps&&T(m,s,p.route,p.configProps),a(m,s,i)):a()}var _=u.matched[h],v=_&&_.components[c];if(!_||!v)return l[c]=null,a();l[c]={component:v},s.registerRouteInstance=function(e,t){var n=_.instances[c];(t&&n!==e||!t&&n===e)&&(_.instances[c]=t)},(s.hook||(s.hook={})).prepatch=function(e,t){_.instances[c]=t.componentInstance},s.hook.init=function(e){e.data.keepAlive&&e.componentInstance&&e.componentInstance!==_.instances[c]&&(_.instances[c]=e.componentInstance),I(u)};var g=_.props&&_.props[c];return g&&(r(l[c],{route:u,configProps:g}),T(v,s,u,g)),a(v,s,i)}};function T(e,t,n,i){var o=t.props=S(n,i);if(o){o=t.props=r({},o);var s=t.attrs=t.attrs||{};for(var a in o)e.props&&a in e.props||(s[a]=o[a],delete o[a])}}function S(e,t){switch(typeof t){case"undefined":return;case"object":return t;case"function":return t(e);case"boolean":return t?e.params:void 0;default:0}}function E(e,t,n){var r=e.charAt(0);if("/"===r)return e;if("?"===r||"#"===r)return t+e;var i=t.split("/");n&&i[i.length-1]||i.pop();for(var o=e.replace(/^\//,"").split("/"),s=0;s<o.length;s++){var a=o[s];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function O(e){var t="",n="",r=e.indexOf("#");r>=0&&(t=e.slice(r),e=e.slice(0,r));var i=e.indexOf("?");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{path:e,query:n,hash:t}}function x(e){return e.replace(/\/(?:\s*\/)+/g,"/")}var P=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},R=J,D=F,N=j,A=W,M=K,L=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function F(e,t){var n,r=[],i=0,o=0,s="",a=t&&t.delimiter||"/";while(null!=(n=L.exec(e))){var c=n[0],u=n[1],l=n.index;if(s+=e.slice(o,l),o=l+c.length,u)s+=u[1];else{var h=e[o],d=n[2],f=n[3],p=n[4],m=n[5],_=n[6],v=n[7];s&&(r.push(s),s="");var g=null!=d&&null!=h&&h!==d,y="+"===_||"*"===_,w="?"===_||"*"===_,b=n[2]||a,C=p||m;r.push({name:f||i++,prefix:d||"",delimiter:b,optional:w,repeat:y,partial:g,asterisk:!!v,pattern:C?Y(C):v?".*":"[^"+V(b)+"]+?"})}}return o<e.length&&(s+=e.substr(o)),s&&r.push(s),r}function j(e,t){return W(F(e,t),t)}function $(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function U(e){return encodeURI(e).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function W(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)"object"===typeof e[r]&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",q(t)));return function(t,r){for(var i="",o=t||{},s=r||{},a=s.pretty?$:encodeURIComponent,c=0;c<e.length;c++){var u=e[c];if("string"!==typeof u){var l,h=o[u.name];if(null==h){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(P(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(l=a(h[d]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===d?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?U(h):a(h),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function V(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function Y(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function H(e,t){return e.keys=t,e}function q(e){return e&&e.sensitive?"":"i"}function z(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return H(e,t)}function B(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(J(e[i],t,n).source);var o=new RegExp("(?:"+r.join("|")+")",q(n));return H(o,t)}function G(e,t,n){return K(F(e,n),t,n)}function K(e,t,n){P(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,o="",s=0;s<e.length;s++){var a=e[s];if("string"===typeof a)o+=V(a);else{var c=V(a.prefix),u="(?:"+a.pattern+")";t.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",o+=u}}var l=V(n.delimiter||"/"),h=o.slice(-l.length)===l;return r||(o=(h?o.slice(0,-l.length):o)+"(?:"+l+"(?=$))?"),o+=i?"$":r&&h?"":"(?="+l+"|$)",H(new RegExp("^"+o,q(n)),t)}function J(e,t,n){return P(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?z(e,t):P(e)?B(e,t,n):G(e,t,n)}R.parse=D,R.compile=N,R.tokensToFunction=A,R.tokensToRegExp=M;var Q=Object.create(null);function Z(e,t,n){t=t||{};try{var r=Q[e]||(Q[e]=R.compile(e));return"string"===typeof t.pathMatch&&(t[0]=t.pathMatch),r(t,{pretty:!0})}catch(i){return""}finally{delete t[0]}}function X(e,t,n,i){var o="string"===typeof e?{path:e}:e;if(o._normalized)return o;if(o.name){o=r({},e);var s=o.params;return s&&"object"===typeof s&&(o.params=r({},s)),o}if(!o.path&&o.params&&t){o=r({},o),o._normalized=!0;var a=r(r({},t.params),o.params);if(t.name)o.name=t.name,o.params=a;else if(t.matched.length){var c=t.matched[t.matched.length-1].path;o.path=Z(c,a,"path "+t.path)}else 0;return o}var l=O(o.path||""),h=t&&t.path||"/",d=l.path?E(l.path,h,n||o.append):h,f=u(l.query,o.query,i&&i.options.parseQuery),p=o.hash||l.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:d,query:f,hash:p}}var ee,te=[String,Object],ne=[String,Array],re=function(){},ie={name:"RouterLink",props:{to:{type:te,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:ne,default:"click"}},render:function(e){var t=this,n=this.$router,i=this.$route,o=n.resolve(this.to,i,this.append),s=o.location,a=o.route,c=o.href,u={},l=n.options.linkActiveClass,h=n.options.linkExactActiveClass,d=null==l?"router-link-active":l,f=null==h?"router-link-exact-active":h,m=null==this.activeClass?d:this.activeClass,_=null==this.exactActiveClass?f:this.exactActiveClass,v=a.redirectedFrom?p(null,X(a.redirectedFrom),null,n):a;u[_]=y(i,v,this.exactPath),u[m]=this.exact||this.exactPath?u[_]:b(i,v);var g=u[_]?this.ariaCurrentValue:null,w=function(e){oe(e)&&(t.replace?n.replace(s,re):n.push(s,re))},C={click:oe};Array.isArray(this.event)?this.event.forEach((function(e){C[e]=w})):C[this.event]=w;var I={class:u},k=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:w,isActive:u[m],isExactActive:u[_]});if(k){if(1===k.length)return k[0];if(k.length>1||!k.length)return 0===k.length?e():e("span",{},k)}if("a"===this.tag)I.on=C,I.attrs={href:c,"aria-current":g};else{var T=se(this.$slots.default);if(T){T.isStatic=!1;var S=T.data=r({},T.data);for(var E in S.on=S.on||{},S.on){var O=S.on[E];E in C&&(S.on[E]=Array.isArray(O)?O:[O])}for(var x in C)x in S.on?S.on[x].push(C[x]):S.on[x]=w;var P=T.data.attrs=r({},T.data.attrs);P.href=c,P["aria-current"]=g}else I.on=C}return e(this.tag,I,this.$slots.default)}};function oe(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){var t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function se(e){if(e)for(var t,n=0;n<e.length;n++){if(t=e[n],"a"===t.tag)return t;if(t.children&&(t=se(t.children)))return t}}function ae(e){if(!ae.installed||ee!==e){ae.installed=!0,ee=e;var t=function(e){return void 0!==e},n=function(e,n){var r=e.$options._parentVnode;t(r)&&t(r=r.data)&&t(r=r.registerRouteInstance)&&r(e,n)};e.mixin({beforeCreate:function(){t(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",k),e.component("RouterLink",ie);var r=e.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var ce="undefined"!==typeof window;function ue(e,t,n,r,i){var o=t||[],s=n||Object.create(null),a=r||Object.create(null);e.forEach((function(e){le(o,s,a,e,i)}));for(var c=0,u=o.length;c<u;c++)"*"===o[c]&&(o.push(o.splice(c,1)[0]),u--,c--);return{pathList:o,pathMap:s,nameMap:a}}function le(e,t,n,r,i,o){var s=r.path,a=r.name;var c=r.pathToRegexpOptions||{},u=de(s,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var l={path:u,regex:he(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:o,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=o?x(o+"/"+r.path):void 0;le(e,t,n,r,l,i)})),t[l.path]||(e.push(l.path),t[l.path]=l),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],d=0;d<h.length;++d){var f=h[d];0;var p={path:f,children:r.children};le(e,t,n,p,i,l.path||"/")}a&&(n[a]||(n[a]=l))}function he(e,t){var n=R(e,[],t);return n}function de(e,t,n){return n||(e=e.replace(/\/$/,"")),"/"===e[0]||null==t?e:x(t.path+"/"+e)}function fe(e,t){var n=ue(e),r=n.pathList,i=n.pathMap,o=n.nameMap;function s(e){ue(e,r,i,o)}function a(e,t){var n="object"!==typeof e?o[e]:void 0;ue([t||e],r,i,o,n),n&&n.alias.length&&ue(n.alias.map((function(e){return{path:e,children:[t]}})),r,i,o,n)}function c(){return r.map((function(e){return i[e]}))}function u(e,n,s){var a=X(e,n,!1,t),c=a.name;if(c){var u=o[c];if(!u)return d(null,a);var l=u.regex.keys.filter((function(e){return!e.optional})).map((function(e){return e.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&l.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=Z(u.path,a.params,'named route "'+c+'"'),d(u,a,s)}if(a.path){a.params={};for(var f=0;f<r.length;f++){var p=r[f],m=i[p];if(pe(m.regex,a.path,a.params))return d(m,a,s)}}return d(null,a)}function l(e,n){var r=e.redirect,i="function"===typeof r?r(p(e,n,null,t)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return d(null,n);var s=i,a=s.name,c=s.path,l=n.query,h=n.hash,f=n.params;if(l=s.hasOwnProperty("query")?s.query:l,h=s.hasOwnProperty("hash")?s.hash:h,f=s.hasOwnProperty("params")?s.params:f,a){o[a];return u({_normalized:!0,name:a,query:l,hash:h,params:f},void 0,n)}if(c){var m=me(c,e),_=Z(m,f,'redirect route with path "'+m+'"');return u({_normalized:!0,path:_,query:l,hash:h},void 0,n)}return d(null,n)}function h(e,t,n){var r=Z(n,t.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var o=i.matched,s=o[o.length-1];return t.params=i.params,d(s,t)}return d(null,t)}function d(e,n,r){return e&&e.redirect?l(e,r||n):e&&e.matchAs?h(e,n,e.matchAs):p(e,n,r,t)}return{match:u,addRoute:a,getRoutes:c,addRoutes:s}}function pe(e,t,n){var r=t.match(e);if(!r)return!1;if(!n)return!0;for(var i=1,o=r.length;i<o;++i){var s=e.keys[i-1];s&&(n[s.name||"pathMatch"]="string"===typeof r[i]?c(r[i]):r[i])}return!0}function me(e,t){return E(e,t.parent?t.parent.path:"/",!0)}var _e=ce&&window.performance&&window.performance.now?window.performance:Date;function ve(){return _e.now().toFixed(3)}var ge=ve();function ye(){return ge}function we(e){return ge=e}var be=Object.create(null);function Ce(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var e=window.location.protocol+"//"+window.location.host,t=window.location.href.replace(e,""),n=r({},window.history.state);return n.key=ye(),window.history.replaceState(n,"",t),window.addEventListener("popstate",Te),function(){window.removeEventListener("popstate",Te)}}function Ie(e,t,n,r){if(e.app){var i=e.options.scrollBehavior;i&&e.app.$nextTick((function(){var o=Se(),s=i.call(e,t,n,r?o:null);s&&("function"===typeof s.then?s.then((function(e){Ne(e,o)})).catch((function(e){0})):Ne(s,o))}))}}function ke(){var e=ye();e&&(be[e]={x:window.pageXOffset,y:window.pageYOffset})}function Te(e){ke(),e.state&&e.state.key&&we(e.state.key)}function Se(){var e=ye();if(e)return be[e]}function Ee(e,t){var n=document.documentElement,r=n.getBoundingClientRect(),i=e.getBoundingClientRect();return{x:i.left-r.left-t.x,y:i.top-r.top-t.y}}function Oe(e){return Re(e.x)||Re(e.y)}function xe(e){return{x:Re(e.x)?e.x:window.pageXOffset,y:Re(e.y)?e.y:window.pageYOffset}}function Pe(e){return{x:Re(e.x)?e.x:0,y:Re(e.y)?e.y:0}}function Re(e){return"number"===typeof e}var De=/^#\d/;function Ne(e,t){var n="object"===typeof e;if(n&&"string"===typeof e.selector){var r=De.test(e.selector)?document.getElementById(e.selector.slice(1)):document.querySelector(e.selector);if(r){var i=e.offset&&"object"===typeof e.offset?e.offset:{};i=Pe(i),t=Ee(r,i)}else Oe(e)&&(t=xe(e))}else n&&Oe(e)&&(t=xe(e));t&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:t.x,top:t.y,behavior:e.behavior}):window.scrollTo(t.x,t.y))}var Ae=ce&&function(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Me(e,t){ke();var n=window.history;try{if(t){var i=r({},n.state);i.key=ye(),n.replaceState(i,"",e)}else n.pushState({key:we(ve())},"",e)}catch(o){window.location[t?"replace":"assign"](e)}}function Le(e){Me(e,!0)}var Fe={redirected:2,aborted:4,cancelled:8,duplicated:16};function je(e,t){return Ve(e,t,Fe.redirected,'Redirected when going from "'+e.fullPath+'" to "'+He(t)+'" via a navigation guard.')}function $e(e,t){var n=Ve(e,t,Fe.duplicated,'Avoided redundant navigation to current location: "'+e.fullPath+'".');return n.name="NavigationDuplicated",n}function Ue(e,t){return Ve(e,t,Fe.cancelled,'Navigation cancelled from "'+e.fullPath+'" to "'+t.fullPath+'" with a new navigation.')}function We(e,t){return Ve(e,t,Fe.aborted,'Navigation aborted from "'+e.fullPath+'" to "'+t.fullPath+'" via a navigation guard.')}function Ve(e,t,n,r){var i=new Error(r);return i._isRouter=!0,i.from=e,i.to=t,i.type=n,i}var Ye=["params","query","hash"];function He(e){if("string"===typeof e)return e;if("path"in e)return e.path;var t={};return Ye.forEach((function(n){n in e&&(t[n]=e[n])})),JSON.stringify(t,null,2)}function qe(e){return Object.prototype.toString.call(e).indexOf("Error")>-1}function ze(e,t){return qe(e)&&e._isRouter&&(null==t||e.type===t)}function Be(e,t,n){var r=function(i){i>=e.length?n():e[i]?t(e[i],(function(){r(i+1)})):r(i+1)};r(0)}function Ge(e){return function(t,n,r){var i=!1,o=0,s=null;Ke(e,(function(e,t,n,a){if("function"===typeof e&&void 0===e.cid){i=!0,o++;var c,u=Xe((function(t){Ze(t)&&(t=t.default),e.resolved="function"===typeof t?t:ee.extend(t),n.components[a]=t,o--,o<=0&&r()})),l=Xe((function(e){var t="Failed to resolve async component "+a+": "+e;s||(s=qe(e)?e:new Error(t),r(s))}));try{c=e(u,l)}catch(d){l(d)}if(c)if("function"===typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"===typeof h.then&&h.then(u,l)}}})),i||r()}}function Ke(e,t){return Je(e.map((function(e){return Object.keys(e.components).map((function(n){return t(e.components[n],e.instances[n],e,n)}))})))}function Je(e){return Array.prototype.concat.apply([],e)}var Qe="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Ze(e){return e.__esModule||Qe&&"Module"===e[Symbol.toStringTag]}function Xe(e){var t=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!t)return t=!0,e.apply(this,n)}}var et=function(e,t){this.router=e,this.base=tt(t),this.current=_,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function tt(e){if(!e)if(ce){var t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^https?:\/\/[^\/]+/,"")}else e="/";return"/"!==e.charAt(0)&&(e="/"+e),e.replace(/\/$/,"")}function nt(e,t){var n,r=Math.max(e.length,t.length);for(n=0;n<r;n++)if(e[n]!==t[n])break;return{updated:t.slice(0,n),activated:t.slice(n),deactivated:e.slice(n)}}function rt(e,t,n,r){var i=Ke(e,(function(e,r,i,o){var s=it(e,t);if(s)return Array.isArray(s)?s.map((function(e){return n(e,r,i,o)})):n(s,r,i,o)}));return Je(r?i.reverse():i)}function it(e,t){return"function"!==typeof e&&(e=ee.extend(e)),e.options[t]}function ot(e){return rt(e,"beforeRouteLeave",at,!0)}function st(e){return rt(e,"beforeRouteUpdate",at)}function at(e,t){if(t)return function(){return e.apply(t,arguments)}}function ct(e){return rt(e,"beforeRouteEnter",(function(e,t,n,r){return ut(e,n,r)}))}function ut(e,t,n){return function(r,i,o){return e(r,i,(function(e){"function"===typeof e&&(t.enteredCbs[n]||(t.enteredCbs[n]=[]),t.enteredCbs[n].push(e)),o(e)}))}}et.prototype.listen=function(e){this.cb=e},et.prototype.onReady=function(e,t){this.ready?e():(this.readyCbs.push(e),t&&this.readyErrorCbs.push(t))},et.prototype.onError=function(e){this.errorCbs.push(e)},et.prototype.transitionTo=function(e,t,n){var r,i=this;try{r=this.router.match(e,this.current)}catch(s){throw this.errorCbs.forEach((function(e){e(s)})),s}var o=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),t&&t(r),i.ensureURL(),i.router.afterHooks.forEach((function(e){e&&e(r,o)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(e){e(r)})))}),(function(e){n&&n(e),e&&!i.ready&&(ze(e,Fe.redirected)&&o===_||(i.ready=!0,i.readyErrorCbs.forEach((function(t){t(e)}))))}))},et.prototype.confirmTransition=function(e,t,n){var r=this,i=this.current;this.pending=e;var o=function(e){!ze(e)&&qe(e)&&(r.errorCbs.length?r.errorCbs.forEach((function(t){t(e)})):console.error(e)),n&&n(e)},s=e.matched.length-1,a=i.matched.length-1;if(y(e,i)&&s===a&&e.matched[s]===i.matched[a])return this.ensureURL(),e.hash&&Ie(this.router,i,e,!1),o($e(i,e));var c=nt(this.current.matched,e.matched),u=c.updated,l=c.deactivated,h=c.activated,d=[].concat(ot(l),this.router.beforeHooks,st(u),h.map((function(e){return e.beforeEnter})),Ge(h)),f=function(t,n){if(r.pending!==e)return o(Ue(i,e));try{t(e,i,(function(t){!1===t?(r.ensureURL(!0),o(We(i,e))):qe(t)?(r.ensureURL(!0),o(t)):"string"===typeof t||"object"===typeof t&&("string"===typeof t.path||"string"===typeof t.name)?(o(je(i,e)),"object"===typeof t&&t.replace?r.replace(t):r.push(t)):n(t)}))}catch(s){o(s)}};Be(d,f,(function(){var n=ct(h),s=n.concat(r.router.resolveHooks);Be(s,f,(function(){if(r.pending!==e)return o(Ue(i,e));r.pending=null,t(e),r.router.app&&r.router.app.$nextTick((function(){I(e)}))}))}))},et.prototype.updateRoute=function(e){this.current=e,this.cb&&this.cb(e)},et.prototype.setupListeners=function(){},et.prototype.teardown=function(){this.listeners.forEach((function(e){e()})),this.listeners=[],this.current=_,this.pending=null};var lt=function(e){function t(t,n){e.call(this,t,n),this._startLocation=ht(this.base)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=Ae&&n;r&&this.listeners.push(Ce());var i=function(){var n=e.current,i=ht(e.base);e.current===_&&i===e._startLocation||e.transitionTo(i,(function(e){r&&Ie(t,e,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},t.prototype.go=function(e){window.history.go(e)},t.prototype.push=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){Me(x(r.base+e.fullPath)),Ie(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){Le(x(r.base+e.fullPath)),Ie(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.ensureURL=function(e){if(ht(this.base)!==this.current.fullPath){var t=x(this.base+this.current.fullPath);e?Me(t):Le(t)}},t.prototype.getCurrentLocation=function(){return ht(this.base)},t}(et);function ht(e){var t=window.location.pathname,n=t.toLowerCase(),r=e.toLowerCase();return!e||n!==r&&0!==n.indexOf(x(r+"/"))||(t=t.slice(e.length)),(t||"/")+window.location.search+window.location.hash}var dt=function(e){function t(t,n,r){e.call(this,t,n),r&&ft(this.base)||pt()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=Ae&&n;r&&this.listeners.push(Ce());var i=function(){var t=e.current;pt()&&e.transitionTo(mt(),(function(n){r&&Ie(e.router,n,t,!0),Ae||gt(n.fullPath)}))},o=Ae?"popstate":"hashchange";window.addEventListener(o,i),this.listeners.push((function(){window.removeEventListener(o,i)}))}},t.prototype.push=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){vt(e.fullPath),Ie(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){gt(e.fullPath),Ie(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.go=function(e){window.history.go(e)},t.prototype.ensureURL=function(e){var t=this.current.fullPath;mt()!==t&&(e?vt(t):gt(t))},t.prototype.getCurrentLocation=function(){return mt()},t}(et);function ft(e){var t=ht(e);if(!/^\/#/.test(t))return window.location.replace(x(e+"/#"+t)),!0}function pt(){var e=mt();return"/"===e.charAt(0)||(gt("/"+e),!1)}function mt(){var e=window.location.href,t=e.indexOf("#");return t<0?"":(e=e.slice(t+1),e)}function _t(e){var t=window.location.href,n=t.indexOf("#"),r=n>=0?t.slice(0,n):t;return r+"#"+e}function vt(e){Ae?Me(_t(e)):window.location.hash=e}function gt(e){Ae?Le(_t(e)):window.location.replace(_t(e))}var yt=function(e){function t(t,n){e.call(this,t,n),this.stack=[],this.index=-1}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.push=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index+1).concat(e),r.index++,t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index).concat(e),t&&t(e)}),n)},t.prototype.go=function(e){var t=this,n=this.index+e;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var e=t.current;t.index=n,t.updateRoute(r),t.router.afterHooks.forEach((function(t){t&&t(r,e)}))}),(function(e){ze(e,Fe.duplicated)&&(t.index=n)}))}},t.prototype.getCurrentLocation=function(){var e=this.stack[this.stack.length-1];return e?e.fullPath:"/"},t.prototype.ensureURL=function(){},t}(et),wt=function(e){void 0===e&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=fe(e.routes||[],this);var t=e.mode||"hash";switch(this.fallback="history"===t&&!Ae&&!1!==e.fallback,this.fallback&&(t="hash"),ce||(t="abstract"),this.mode=t,t){case"history":this.history=new lt(this,e.base);break;case"hash":this.history=new dt(this,e.base,this.fallback);break;case"abstract":this.history=new yt(this,e.base);break;default:0}},bt={currentRoute:{configurable:!0}};wt.prototype.match=function(e,t,n){return this.matcher.match(e,t,n)},bt.currentRoute.get=function(){return this.history&&this.history.current},wt.prototype.init=function(e){var t=this;if(this.apps.push(e),e.$once("hook:destroyed",(function(){var n=t.apps.indexOf(e);n>-1&&t.apps.splice(n,1),t.app===e&&(t.app=t.apps[0]||null),t.app||t.history.teardown()})),!this.app){this.app=e;var n=this.history;if(n instanceof lt||n instanceof dt){var r=function(e){var r=n.current,i=t.options.scrollBehavior,o=Ae&&i;o&&"fullPath"in e&&Ie(t,e,r,!1)},i=function(e){n.setupListeners(),r(e)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(e){t.apps.forEach((function(t){t._route=e}))}))}},wt.prototype.beforeEach=function(e){return It(this.beforeHooks,e)},wt.prototype.beforeResolve=function(e){return It(this.resolveHooks,e)},wt.prototype.afterEach=function(e){return It(this.afterHooks,e)},wt.prototype.onReady=function(e,t){this.history.onReady(e,t)},wt.prototype.onError=function(e){this.history.onError(e)},wt.prototype.push=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){r.history.push(e,t,n)}));this.history.push(e,t,n)},wt.prototype.replace=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){r.history.replace(e,t,n)}));this.history.replace(e,t,n)},wt.prototype.go=function(e){this.history.go(e)},wt.prototype.back=function(){this.go(-1)},wt.prototype.forward=function(){this.go(1)},wt.prototype.getMatchedComponents=function(e){var t=e?e.matched?e:this.resolve(e).route:this.currentRoute;return t?[].concat.apply([],t.matched.map((function(e){return Object.keys(e.components).map((function(t){return e.components[t]}))}))):[]},wt.prototype.resolve=function(e,t,n){t=t||this.history.current;var r=X(e,t,n,this),i=this.match(r,t),o=i.redirectedFrom||i.fullPath,s=this.history.base,a=kt(s,o,this.mode);return{location:r,route:i,href:a,normalizedTo:r,resolved:i}},wt.prototype.getRoutes=function(){return this.matcher.getRoutes()},wt.prototype.addRoute=function(e,t){this.matcher.addRoute(e,t),this.history.current!==_&&this.history.transitionTo(this.history.getCurrentLocation())},wt.prototype.addRoutes=function(e){this.matcher.addRoutes(e),this.history.current!==_&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(wt.prototype,bt);var Ct=wt;function It(e,t){return e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function kt(e,t,n){var r="hash"===n?"#"+t:t;return e?x(e+"/"+r):r}wt.install=ae,wt.version="3.6.5",wt.isNavigationFailure=ze,wt.NavigationFailureType=Fe,wt.START_LOCATION=_,ce&&window.Vue&&window.Vue.use(wt)},7195:function(e,t,n){"use strict";n.d(t,{ZP:function(){return Jr}});n(7658),n(4633);var r=Object.freeze({}),i=Array.isArray;function o(e){return void 0===e||null===e}function s(e){return void 0!==e&&null!==e}function a(e){return!0===e}function c(e){return!1===e}function u(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function l(e){return"function"===typeof e}function h(e){return null!==e&&"object"===typeof e}var d=Object.prototype.toString;function f(e){return"[object Object]"===d.call(e)}function p(e){return"[object RegExp]"===d.call(e)}function m(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function _(e){return s(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function v(e){return null==e?"":Array.isArray(e)||f(e)&&e.toString===d?JSON.stringify(e,null,2):String(e)}function g(e){var t=parseFloat(e);return isNaN(t)?e:t}function y(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}y("slot,component",!0);var w=y("key,ref,slot,slot-scope,is");function b(e,t){var n=e.length;if(n){if(t===e[n-1])return void(e.length=n-1);var r=e.indexOf(t);if(r>-1)return e.splice(r,1)}}var C=Object.prototype.hasOwnProperty;function I(e,t){return C.call(e,t)}function k(e){var t=Object.create(null);return function(n){var r=t[n];return r||(t[n]=e(n))}}var T=/-(\w)/g,S=k((function(e){return e.replace(T,(function(e,t){return t?t.toUpperCase():""}))})),E=k((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})),O=/\B([A-Z])/g,x=k((function(e){return e.replace(O,"-$1").toLowerCase()}));function P(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function R(e,t){return e.bind(t)}var D=Function.prototype.bind?R:P;function N(e,t){t=t||0;var n=e.length-t,r=new Array(n);while(n--)r[n]=e[n+t];return r}function A(e,t){for(var n in t)e[n]=t[n];return e}function M(e){for(var t={},n=0;n<e.length;n++)e[n]&&A(t,e[n]);return t}function L(e,t,n){}var F=function(e,t,n){return!1},j=function(e){return e};function $(e,t){if(e===t)return!0;var n=h(e),r=h(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),o=Array.isArray(t);if(i&&o)return e.length===t.length&&e.every((function(e,n){return $(e,t[n])}));if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(i||o)return!1;var s=Object.keys(e),a=Object.keys(t);return s.length===a.length&&s.every((function(n){return $(e[n],t[n])}))}catch(c){return!1}}function U(e,t){for(var n=0;n<e.length;n++)if($(e[n],t))return n;return-1}function W(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}function V(e,t){return e===t?0===e&&1/e!==1/t:e===e||t===t}var Y="data-server-rendered",H=["component","directive","filter"],q=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],z={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:F,isReservedAttr:F,isUnknownElement:F,getTagNamespace:L,parsePlatformTagName:j,mustUseProp:F,async:!0,_lifecycleHooks:q},B=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function G(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function K(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var J=new RegExp("[^".concat(B.source,".$_\\d]"));function Q(e){if(!J.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}var Z="__proto__"in{},X="undefined"!==typeof window,ee=X&&window.navigator.userAgent.toLowerCase(),te=ee&&/msie|trident/.test(ee),ne=ee&&ee.indexOf("msie 9.0")>0,re=ee&&ee.indexOf("edge/")>0;ee&&ee.indexOf("android");var ie=ee&&/iphone|ipad|ipod|ios/.test(ee);ee&&/chrome\/\d+/.test(ee),ee&&/phantomjs/.test(ee);var oe,se=ee&&ee.match(/firefox\/(\d+)/),ae={}.watch,ce=!1;if(X)try{var ue={};Object.defineProperty(ue,"passive",{get:function(){ce=!0}}),window.addEventListener("test-passive",null,ue)}catch(Qs){}var le=function(){return void 0===oe&&(oe=!X&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),oe},he=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function de(e){return"function"===typeof e&&/native code/.test(e.toString())}var fe,pe="undefined"!==typeof Symbol&&de(Symbol)&&"undefined"!==typeof Reflect&&de(Reflect.ownKeys);fe="undefined"!==typeof Set&&de(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var me=null;function _e(e){void 0===e&&(e=null),e||me&&me._scope.off(),me=e,e&&e._scope.on()}var ve=function(){function e(e,t,n,r,i,o,s,a){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(e.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),e}(),ge=function(e){void 0===e&&(e="");var t=new ve;return t.text=e,t.isComment=!0,t};function ye(e){return new ve(void 0,void 0,void 0,String(e))}function we(e){var t=new ve(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var be=0,Ce=[],Ie=function(){for(var e=0;e<Ce.length;e++){var t=Ce[e];t.subs=t.subs.filter((function(e){return e})),t._pending=!1}Ce.length=0},ke=function(){function e(){this._pending=!1,this.id=be++,this.subs=[]}return e.prototype.addSub=function(e){this.subs.push(e)},e.prototype.removeSub=function(e){this.subs[this.subs.indexOf(e)]=null,this._pending||(this._pending=!0,Ce.push(this))},e.prototype.depend=function(t){e.target&&e.target.addDep(this)},e.prototype.notify=function(e){var t=this.subs.filter((function(e){return e}));for(var n=0,r=t.length;n<r;n++){var i=t[n];0,i.update()}},e}();ke.target=null;var Te=[];function Se(e){Te.push(e),ke.target=e}function Ee(){Te.pop(),ke.target=Te[Te.length-1]}var Oe=Array.prototype,xe=Object.create(Oe),Pe=["push","pop","shift","unshift","splice","sort","reverse"];Pe.forEach((function(e){var t=Oe[e];K(xe,e,(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i,o=t.apply(this,n),s=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&s.observeArray(i),s.dep.notify(),o}))}));var Re=Object.getOwnPropertyNames(xe),De={},Ne=!0;function Ae(e){Ne=e}var Me={notify:L,depend:L,addSub:L,removeSub:L},Le=function(){function e(e,t,n){if(void 0===t&&(t=!1),void 0===n&&(n=!1),this.value=e,this.shallow=t,this.mock=n,this.dep=n?Me:new ke,this.vmCount=0,K(e,"__ob__",this),i(e)){if(!n)if(Z)e.__proto__=xe;else for(var r=0,o=Re.length;r<o;r++){var s=Re[r];K(e,s,xe[s])}t||this.observeArray(e)}else{var a=Object.keys(e);for(r=0;r<a.length;r++){s=a[r];je(e,s,De,void 0,t,n)}}}return e.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Fe(e[t],!1,this.mock)},e}();function Fe(e,t,n){return e&&I(e,"__ob__")&&e.__ob__ instanceof Le?e.__ob__:!Ne||!n&&le()||!i(e)&&!f(e)||!Object.isExtensible(e)||e.__v_skip||qe(e)||e instanceof ve?void 0:new Le(e,t,n)}function je(e,t,n,r,o,s){var a=new ke,c=Object.getOwnPropertyDescriptor(e,t);if(!c||!1!==c.configurable){var u=c&&c.get,l=c&&c.set;u&&!l||n!==De&&2!==arguments.length||(n=e[t]);var h=!o&&Fe(n,!1,s);return Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=u?u.call(e):n;return ke.target&&(a.depend(),h&&(h.dep.depend(),i(t)&&We(t))),qe(t)&&!o?t.value:t},set:function(t){var r=u?u.call(e):n;if(V(r,t)){if(l)l.call(e,t);else{if(u)return;if(!o&&qe(r)&&!qe(t))return void(r.value=t);n=t}h=!o&&Fe(t,!1,s),a.notify()}}}),a}}function $e(e,t,n){if(!He(e)){var r=e.__ob__;return i(e)&&m(t)?(e.length=Math.max(e.length,t),e.splice(t,1,n),r&&!r.shallow&&r.mock&&Fe(n,!1,!0),n):t in e&&!(t in Object.prototype)?(e[t]=n,n):e._isVue||r&&r.vmCount?n:r?(je(r.value,t,n,void 0,r.shallow,r.mock),r.dep.notify(),n):(e[t]=n,n)}}function Ue(e,t){if(i(e)&&m(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||He(e)||I(e,t)&&(delete e[t],n&&n.dep.notify())}}function We(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),i(t)&&We(t)}function Ve(e){return Ye(e,!0),K(e,"__v_isShallow",!0),e}function Ye(e,t){if(!He(e)){Fe(e,t,le());0}}function He(e){return!(!e||!e.__v_isReadonly)}function qe(e){return!(!e||!0!==e.__v_isRef)}function ze(e,t,n){Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:function(){var e=t[n];if(qe(e))return e.value;var r=e&&e.__ob__;return r&&r.dep.depend(),e},set:function(e){var r=t[n];qe(r)&&!qe(e)?r.value=e:t[n]=e}})}var Be="watcher";"".concat(Be," callback"),"".concat(Be," getter"),"".concat(Be," cleanup");var Ge;var Ke=function(){function e(e){void 0===e&&(e=!1),this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ge,!e&&Ge&&(this.index=(Ge.scopes||(Ge.scopes=[])).push(this)-1)}return e.prototype.run=function(e){if(this.active){var t=Ge;try{return Ge=this,e()}finally{Ge=t}}else 0},e.prototype.on=function(){Ge=this},e.prototype.off=function(){Ge=this.parent},e.prototype.stop=function(e){if(this.active){var t=void 0,n=void 0;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].teardown();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){var r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}},e}();function Je(e,t){void 0===t&&(t=Ge),t&&t.active&&t.effects.push(e)}function Qe(e){var t=e._provided,n=e.$parent&&e.$parent._provided;return n===t?e._provided=Object.create(n):t}var Ze=k((function(e){var t="&"===e.charAt(0);e=t?e.slice(1):e;var n="~"===e.charAt(0);e=n?e.slice(1):e;var r="!"===e.charAt(0);return e=r?e.slice(1):e,{name:e,once:n,capture:r,passive:t}}));function Xe(e,t){function n(){var e=n.fns;if(!i(e))return Kt(e,null,arguments,t,"v-on handler");for(var r=e.slice(),o=0;o<r.length;o++)Kt(r[o],null,arguments,t,"v-on handler")}return n.fns=e,n}function et(e,t,n,r,i,s){var c,u,l,h;for(c in e)u=e[c],l=t[c],h=Ze(c),o(u)||(o(l)?(o(u.fns)&&(u=e[c]=Xe(u,s)),a(h.once)&&(u=e[c]=i(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,e[c]=l));for(c in t)o(e[c])&&(h=Ze(c),r(h.name,t[c],h.capture))}function tt(e,t,n){var r;e instanceof ve&&(e=e.data.hook||(e.data.hook={}));var i=e[t];function c(){n.apply(this,arguments),b(r.fns,c)}o(i)?r=Xe([c]):s(i.fns)&&a(i.merged)?(r=i,r.fns.push(c)):r=Xe([i,c]),r.merged=!0,e[t]=r}function nt(e,t,n){var r=t.options.props;if(!o(r)){var i={},a=e.attrs,c=e.props;if(s(a)||s(c))for(var u in r){var l=x(u);rt(i,c,u,l,!0)||rt(i,a,u,l,!1)}return i}}function rt(e,t,n,r,i){if(s(t)){if(I(t,n))return e[n]=t[n],i||delete t[n],!0;if(I(t,r))return e[n]=t[r],i||delete t[r],!0}return!1}function it(e){for(var t=0;t<e.length;t++)if(i(e[t]))return Array.prototype.concat.apply([],e);return e}function ot(e){return u(e)?[ye(e)]:i(e)?at(e):void 0}function st(e){return s(e)&&s(e.text)&&c(e.isComment)}function at(e,t){var n,r,c,l,h=[];for(n=0;n<e.length;n++)r=e[n],o(r)||"boolean"===typeof r||(c=h.length-1,l=h[c],i(r)?r.length>0&&(r=at(r,"".concat(t||"","_").concat(n)),st(r[0])&&st(l)&&(h[c]=ye(l.text+r[0].text),r.shift()),h.push.apply(h,r)):u(r)?st(l)?h[c]=ye(l.text+r):""!==r&&h.push(ye(r)):st(r)&&st(l)?h[c]=ye(l.text+r.text):(a(e._isVList)&&s(r.tag)&&o(r.key)&&s(t)&&(r.key="__vlist".concat(t,"_").concat(n,"__")),h.push(r)));return h}function ct(e,t){var n,r,o,a,c=null;if(i(e)||"string"===typeof e)for(c=new Array(e.length),n=0,r=e.length;n<r;n++)c[n]=t(e[n],n);else if("number"===typeof e)for(c=new Array(e),n=0;n<e;n++)c[n]=t(n+1,n);else if(h(e))if(pe&&e[Symbol.iterator]){c=[];var u=e[Symbol.iterator](),l=u.next();while(!l.done)c.push(t(l.value,c.length)),l=u.next()}else for(o=Object.keys(e),c=new Array(o.length),n=0,r=o.length;n<r;n++)a=o[n],c[n]=t(e[a],a,n);return s(c)||(c=[]),c._isVList=!0,c}function ut(e,t,n,r){var i,o=this.$scopedSlots[e];o?(n=n||{},r&&(n=A(A({},r),n)),i=o(n)||(l(t)?t():t)):i=this.$slots[e]||(l(t)?t():t);var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function lt(e){return Ir(this.$options,"filters",e,!0)||j}function ht(e,t){return i(e)?-1===e.indexOf(t):e!==t}function dt(e,t,n,r,i){var o=z.keyCodes[t]||n;return i&&r&&!z.keyCodes[t]?ht(i,r):o?ht(o,e):r?x(r)!==t:void 0===e}function ft(e,t,n,r,o){if(n)if(h(n)){i(n)&&(n=M(n));var s=void 0,a=function(i){if("class"===i||"style"===i||w(i))s=e;else{var a=e.attrs&&e.attrs.type;s=r||z.mustUseProp(t,a,i)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=S(i),u=x(i);if(!(c in s)&&!(u in s)&&(s[i]=n[i],o)){var l=e.on||(e.on={});l["update:".concat(i)]=function(e){n[i]=e}}};for(var c in n)a(c)}else;return e}function pt(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t||(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,this._c,this),_t(r,"__static__".concat(e),!1)),r}function mt(e,t,n){return _t(e,"__once__".concat(t).concat(n?"_".concat(n):""),!0),e}function _t(e,t,n){if(i(e))for(var r=0;r<e.length;r++)e[r]&&"string"!==typeof e[r]&&vt(e[r],"".concat(t,"_").concat(r),n);else vt(e,t,n)}function vt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function gt(e,t){if(t)if(f(t)){var n=e.on=e.on?A({},e.on):{};for(var r in t){var i=n[r],o=t[r];n[r]=i?[].concat(i,o):o}}else;return e}function yt(e,t,n,r){t=t||{$stable:!n};for(var o=0;o<e.length;o++){var s=e[o];i(s)?yt(s,t,n):s&&(s.proxy&&(s.fn.proxy=!0),t[s.key]=s.fn)}return r&&(t.$key=r),t}function wt(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];"string"===typeof r&&r&&(e[t[n]]=t[n+1])}return e}function bt(e,t){return"string"===typeof e?t+e:e}function Ct(e){e._o=mt,e._n=g,e._s=v,e._l=ct,e._t=ut,e._q=$,e._i=U,e._m=pt,e._f=lt,e._k=dt,e._b=ft,e._v=ye,e._e=ge,e._u=yt,e._g=gt,e._d=wt,e._p=bt}function It(e,t){if(!e||!e.length)return{};for(var n={},r=0,i=e.length;r<i;r++){var o=e[r],s=o.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,o.context!==t&&o.fnContext!==t||!s||null==s.slot)(n.default||(n.default=[])).push(o);else{var a=s.slot,c=n[a]||(n[a]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(kt)&&delete n[u];return n}function kt(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Tt(e){return e.isComment&&e.asyncFactory}function St(e,t,n,i){var o,s=Object.keys(n).length>0,a=t?!!t.$stable:!s,c=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&i&&i!==r&&c===i.$key&&!s&&!i.$hasNormal)return i;for(var u in o={},t)t[u]&&"$"!==u[0]&&(o[u]=Et(e,n,u,t[u]))}else o={};for(var l in n)l in o||(o[l]=Ot(n,l));return t&&Object.isExtensible(t)&&(t._normalized=o),K(o,"$stable",a),K(o,"$key",c),K(o,"$hasNormal",s),o}function Et(e,t,n,r){var o=function(){var t=me;_e(e);var n=arguments.length?r.apply(null,arguments):r({});n=n&&"object"===typeof n&&!i(n)?[n]:ot(n);var o=n&&n[0];return _e(t),n&&(!o||1===n.length&&o.isComment&&!Tt(o))?void 0:n};return r.proxy&&Object.defineProperty(t,n,{get:o,enumerable:!0,configurable:!0}),o}function Ot(e,t){return function(){return e[t]}}function xt(e){var t=e.$options,n=t.setup;if(n){var r=e._setupContext=Pt(e);_e(e),Se();var i=Kt(n,null,[e._props||Ve({}),r],e,"setup");if(Ee(),_e(),l(i))t.render=i;else if(h(i))if(e._setupState=i,i.__sfc){var o=e._setupProxy={};for(var s in i)"__sfc"!==s&&ze(o,i,s)}else for(var s in i)G(s)||ze(e,i,s);else 0}}function Pt(e){return{get attrs(){if(!e._attrsProxy){var t=e._attrsProxy={};K(t,"_v_attr_proxy",!0),Rt(t,e.$attrs,r,e,"$attrs")}return e._attrsProxy},get listeners(){if(!e._listenersProxy){var t=e._listenersProxy={};Rt(t,e.$listeners,r,e,"$listeners")}return e._listenersProxy},get slots(){return Nt(e)},emit:D(e.$emit,e),expose:function(t){t&&Object.keys(t).forEach((function(n){return ze(e,t,n)}))}}}function Rt(e,t,n,r,i){var o=!1;for(var s in t)s in e?t[s]!==n[s]&&(o=!0):(o=!0,Dt(e,s,r,i));for(var s in e)s in t||(o=!0,delete e[s]);return o}function Dt(e,t,n,r){Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){return n[r][t]}})}function Nt(e){return e._slotsProxy||At(e._slotsProxy={},e.$scopedSlots),e._slotsProxy}function At(e,t){for(var n in t)e[n]=t[n];for(var n in e)n in t||delete e[n]}function Mt(e){e._vnode=null,e._staticTrees=null;var t=e.$options,n=e.$vnode=t._parentVnode,i=n&&n.context;e.$slots=It(t._renderChildren,i),e.$scopedSlots=n?St(e.$parent,n.data.scopedSlots,e.$slots):r,e._c=function(t,n,r,i){return Ht(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return Ht(e,t,n,r,i,!0)};var o=n&&n.data;je(e,"$attrs",o&&o.attrs||r,null,!0),je(e,"$listeners",t._parentListeners||r,null,!0)}var Lt=null;function Ft(e){Ct(e.prototype),e.prototype.$nextTick=function(e){return cn(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,r=n.render,o=n._parentVnode;o&&t._isMounted&&(t.$scopedSlots=St(t.$parent,o.data.scopedSlots,t.$slots,t.$scopedSlots),t._slotsProxy&&At(t._slotsProxy,t.$scopedSlots)),t.$vnode=o;try{_e(t),Lt=t,e=r.call(t._renderProxy,t.$createElement)}catch(Qs){Gt(Qs,t,"render"),e=t._vnode}finally{Lt=null,_e()}return i(e)&&1===e.length&&(e=e[0]),e instanceof ve||(e=ge()),e.parent=o,e}}function jt(e,t){return(e.__esModule||pe&&"Module"===e[Symbol.toStringTag])&&(e=e.default),h(e)?t.extend(e):e}function $t(e,t,n,r,i){var o=ge();return o.asyncFactory=e,o.asyncMeta={data:t,context:n,children:r,tag:i},o}function Ut(e,t){if(a(e.error)&&s(e.errorComp))return e.errorComp;if(s(e.resolved))return e.resolved;var n=Lt;if(n&&s(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n),a(e.loading)&&s(e.loadingComp))return e.loadingComp;if(n&&!s(e.owners)){var r=e.owners=[n],i=!0,c=null,u=null;n.$on("hook:destroyed",(function(){return b(r,n)}));var l=function(e){for(var t=0,n=r.length;t<n;t++)r[t].$forceUpdate();e&&(r.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null))},d=W((function(n){e.resolved=jt(n,t),i?r.length=0:l(!0)})),f=W((function(t){s(e.errorComp)&&(e.error=!0,l(!0))})),p=e(d,f);return h(p)&&(_(p)?o(e.resolved)&&p.then(d,f):_(p.component)&&(p.component.then(d,f),s(p.error)&&(e.errorComp=jt(p.error,t)),s(p.loading)&&(e.loadingComp=jt(p.loading,t),0===p.delay?e.loading=!0:c=setTimeout((function(){c=null,o(e.resolved)&&o(e.error)&&(e.loading=!0,l(!1))}),p.delay||200)),s(p.timeout)&&(u=setTimeout((function(){u=null,o(e.resolved)&&f(null)}),p.timeout)))),i=!1,e.loading?e.loadingComp:e.resolved}}function Wt(e){if(i(e))for(var t=0;t<e.length;t++){var n=e[t];if(s(n)&&(s(n.componentOptions)||Tt(n)))return n}}var Vt=1,Yt=2;function Ht(e,t,n,r,o,s){return(i(n)||u(n))&&(o=r,r=n,n=void 0),a(s)&&(o=Yt),qt(e,t,n,r,o)}function qt(e,t,n,r,o){if(s(n)&&s(n.__ob__))return ge();if(s(n)&&s(n.is)&&(t=n.is),!t)return ge();var a,c;if(i(r)&&l(r[0])&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===Yt?r=ot(r):o===Vt&&(r=it(r)),"string"===typeof t){var u=void 0;c=e.$vnode&&e.$vnode.ns||z.getTagNamespace(t),a=z.isReservedTag(t)?new ve(z.parsePlatformTagName(t),n,r,void 0,void 0,e):n&&n.pre||!s(u=Ir(e.$options,"components",t))?new ve(t,n,r,void 0,void 0,e):sr(u,n,e,r,t)}else a=sr(t,n,e,r);return i(a)?a:s(a)?(s(c)&&zt(a,c),s(n)&&Bt(n),a):ge()}function zt(e,t,n){if(e.ns=t,"foreignObject"===e.tag&&(t=void 0,n=!0),s(e.children))for(var r=0,i=e.children.length;r<i;r++){var c=e.children[r];s(c.tag)&&(o(c.ns)||a(n)&&"svg"!==c.tag)&&zt(c,t,n)}}function Bt(e){h(e.style)&&fn(e.style),h(e.class)&&fn(e.class)}function Gt(e,t,n){Se();try{if(t){var r=t;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var s=!1===i[o].call(r,e,t,n);if(s)return}catch(Qs){Jt(Qs,r,"errorCaptured hook")}}}Jt(e,t,n)}finally{Ee()}}function Kt(e,t,n,r,i){var o;try{o=n?e.apply(t,n):e.call(t),o&&!o._isVue&&_(o)&&!o._handled&&(o.catch((function(e){return Gt(e,r,i+" (Promise/async)")})),o._handled=!0)}catch(Qs){Gt(Qs,r,i)}return o}function Jt(e,t,n){if(z.errorHandler)try{return z.errorHandler.call(null,e,t,n)}catch(Qs){Qs!==e&&Qt(Qs,null,"config.errorHandler")}Qt(e,t,n)}function Qt(e,t,n){if(!X||"undefined"===typeof console)throw e;console.error(e)}var Zt,Xt=!1,en=[],tn=!1;function nn(){tn=!1;var e=en.slice(0);en.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!==typeof Promise&&de(Promise)){var rn=Promise.resolve();Zt=function(){rn.then(nn),ie&&setTimeout(L)},Xt=!0}else if(te||"undefined"===typeof MutationObserver||!de(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Zt="undefined"!==typeof setImmediate&&de(setImmediate)?function(){setImmediate(nn)}:function(){setTimeout(nn,0)};else{var on=1,sn=new MutationObserver(nn),an=document.createTextNode(String(on));sn.observe(an,{characterData:!0}),Zt=function(){on=(on+1)%2,an.data=String(on)},Xt=!0}function cn(e,t){var n;if(en.push((function(){if(e)try{e.call(t)}catch(Qs){Gt(Qs,t,"nextTick")}else n&&n(t)})),tn||(tn=!0,Zt()),!e&&"undefined"!==typeof Promise)return new Promise((function(e){n=e}))}function un(e){return function(t,n){if(void 0===n&&(n=me),n)return ln(n,e,t)}}function ln(e,t,n){var r=e.$options;r[t]=mr(r[t],n)}un("beforeMount"),un("mounted"),un("beforeUpdate"),un("updated"),un("beforeDestroy"),un("destroyed"),un("activated"),un("deactivated"),un("serverPrefetch"),un("renderTracked"),un("renderTriggered"),un("errorCaptured");var hn="2.7.14";var dn=new fe;function fn(e){return pn(e,dn),dn.clear(),e}function pn(e,t){var n,r,o=i(e);if(!(!o&&!h(e)||e.__v_skip||Object.isFrozen(e)||e instanceof ve)){if(e.__ob__){var s=e.__ob__.dep.id;if(t.has(s))return;t.add(s)}if(o){n=e.length;while(n--)pn(e[n],t)}else if(qe(e))pn(e.value,t);else{r=Object.keys(e),n=r.length;while(n--)pn(e[r[n]],t)}}}var mn,_n=0,vn=function(){function e(e,t,n,r,i){Je(this,Ge&&!Ge._vm?Ge:e?e._scope:void 0),(this.vm=e)&&i&&(e._watcher=this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++_n,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new fe,this.newDepIds=new fe,this.expression="",l(t)?this.getter=t:(this.getter=Q(t),this.getter||(this.getter=L)),this.value=this.lazy?void 0:this.get()}return e.prototype.get=function(){var e;Se(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(Qs){if(!this.user)throw Qs;Gt(Qs,t,'getter for watcher "'.concat(this.expression,'"'))}finally{this.deep&&fn(e),Ee(),this.cleanupDeps()}return e},e.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},e.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},e.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Kn(this)},e.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||h(e)||this.deep){var t=this.value;if(this.value=e,this.user){var n='callback for watcher "'.concat(this.expression,'"');Kt(this.cb,this.vm,[e,t],this.vm,n)}else this.cb.call(this.vm,e,t)}}},e.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},e.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},e.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&b(this.vm._scope.effects,this),this.active){var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},e}();function gn(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&Cn(e,t)}function yn(e,t){mn.$on(e,t)}function wn(e,t){mn.$off(e,t)}function bn(e,t){var n=mn;return function r(){var i=t.apply(null,arguments);null!==i&&n.$off(e,r)}}function Cn(e,t,n){mn=e,et(t,n||{},yn,wn,bn,e),mn=void 0}function In(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(i(e))for(var o=0,s=e.length;o<s;o++)r.$on(e[o],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(i(e)){for(var r=0,o=e.length;r<o;r++)n.$off(e[r],t);return n}var s,a=n._events[e];if(!a)return n;if(!t)return n._events[e]=null,n;var c=a.length;while(c--)if(s=a[c],s===t||s.fn===t){a.splice(c,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?N(n):n;for(var r=N(arguments,1),i='event handler for "'.concat(e,'"'),o=0,s=n.length;o<s;o++)Kt(n[o],t,r,t,i)}return t}}var kn=null;function Tn(e){var t=kn;return kn=e,function(){kn=t}}function Sn(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._provided=n?n._provided:Object.create(null),e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function En(e){e.prototype._update=function(e,t){var n=this,r=n.$el,i=n._vnode,o=Tn(n);n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n);var s=n;while(s&&s.$vnode&&s.$parent&&s.$vnode===s.$parent._vnode)s.$parent.$el=s.$el,s=s.$parent},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Nn(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||b(t.$children,e),e._scope.stop(),e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Nn(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function On(e,t,n){var r;e.$el=t,e.$options.render||(e.$options.render=ge),Nn(e,"beforeMount"),r=function(){e._update(e._render(),n)};var i={before:function(){e._isMounted&&!e._isDestroyed&&Nn(e,"beforeUpdate")}};new vn(e,r,L,i,!0),n=!1;var o=e._preWatchers;if(o)for(var s=0;s<o.length;s++)o[s].run();return null==e.$vnode&&(e._isMounted=!0,Nn(e,"mounted")),e}function xn(e,t,n,i,o){var s=i.data.scopedSlots,a=e.$scopedSlots,c=!!(s&&!s.$stable||a!==r&&!a.$stable||s&&e.$scopedSlots.$key!==s.$key||!s&&e.$scopedSlots.$key),u=!!(o||e.$options._renderChildren||c),l=e.$vnode;e.$options._parentVnode=i,e.$vnode=i,e._vnode&&(e._vnode.parent=i),e.$options._renderChildren=o;var h=i.data.attrs||r;e._attrsProxy&&Rt(e._attrsProxy,h,l.data&&l.data.attrs||r,e,"$attrs")&&(u=!0),e.$attrs=h,n=n||r;var d=e.$options._parentListeners;if(e._listenersProxy&&Rt(e._listenersProxy,n,d||r,e,"$listeners"),e.$listeners=e.$options._parentListeners=n,Cn(e,n,d),t&&e.$options.props){Ae(!1);for(var f=e._props,p=e.$options._propKeys||[],m=0;m<p.length;m++){var _=p[m],v=e.$options.props;f[_]=kr(_,v,t,e)}Ae(!0),e.$options.propsData=t}u&&(e.$slots=It(o,i.context),e.$forceUpdate())}function Pn(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function Rn(e,t){if(t){if(e._directInactive=!1,Pn(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Rn(e.$children[n]);Nn(e,"activated")}}function Dn(e,t){if((!t||(e._directInactive=!0,!Pn(e)))&&!e._inactive){e._inactive=!0;for(var n=0;n<e.$children.length;n++)Dn(e.$children[n]);Nn(e,"deactivated")}}function Nn(e,t,n,r){void 0===r&&(r=!0),Se();var i=me;r&&_e(e);var o=e.$options[t],s="".concat(t," hook");if(o)for(var a=0,c=o.length;a<c;a++)Kt(o[a],e,n||null,e,s);e._hasHookEvent&&e.$emit("hook:"+t),r&&_e(i),Ee()}var An=[],Mn=[],Ln={},Fn=!1,jn=!1,$n=0;function Un(){$n=An.length=Mn.length=0,Ln={},Fn=jn=!1}var Wn=0,Vn=Date.now;if(X&&!te){var Yn=window.performance;Yn&&"function"===typeof Yn.now&&Vn()>document.createEvent("Event").timeStamp&&(Vn=function(){return Yn.now()})}var Hn=function(e,t){if(e.post){if(!t.post)return 1}else if(t.post)return-1;return e.id-t.id};function qn(){var e,t;for(Wn=Vn(),jn=!0,An.sort(Hn),$n=0;$n<An.length;$n++)e=An[$n],e.before&&e.before(),t=e.id,Ln[t]=null,e.run();var n=Mn.slice(),r=An.slice();Un(),Gn(n),zn(r),Ie(),he&&z.devtools&&he.emit("flush")}function zn(e){var t=e.length;while(t--){var n=e[t],r=n.vm;r&&r._watcher===n&&r._isMounted&&!r._isDestroyed&&Nn(r,"updated")}}function Bn(e){e._inactive=!1,Mn.push(e)}function Gn(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Rn(e[t],!0)}function Kn(e){var t=e.id;if(null==Ln[t]&&(e!==ke.target||!e.noRecurse)){if(Ln[t]=!0,jn){var n=An.length-1;while(n>$n&&An[n].id>e.id)n--;An.splice(n+1,0,e)}else An.push(e);Fn||(Fn=!0,cn(qn))}}function Jn(e){var t=e.$options.provide;if(t){var n=l(t)?t.call(e):t;if(!h(n))return;for(var r=Qe(e),i=pe?Reflect.ownKeys(n):Object.keys(n),o=0;o<i.length;o++){var s=i[o];Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(n,s))}}}function Qn(e){var t=Zn(e.$options.inject,e);t&&(Ae(!1),Object.keys(t).forEach((function(n){je(e,n,t[n])})),Ae(!0))}function Zn(e,t){if(e){for(var n=Object.create(null),r=pe?Reflect.ownKeys(e):Object.keys(e),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var s=e[o].from;if(s in t._provided)n[o]=t._provided[s];else if("default"in e[o]){var a=e[o].default;n[o]=l(a)?a.call(t):a}else 0}}return n}}function Xn(e,t,n,o,s){var c,u=this,l=s.options;I(o,"_uid")?(c=Object.create(o),c._original=o):(c=o,o=o._original);var h=a(l._compiled),d=!h;this.data=e,this.props=t,this.children=n,this.parent=o,this.listeners=e.on||r,this.injections=Zn(l.inject,o),this.slots=function(){return u.$slots||St(o,e.scopedSlots,u.$slots=It(n,o)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return St(o,e.scopedSlots,this.slots())}}),h&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=St(o,e.scopedSlots,this.$slots)),l._scopeId?this._c=function(e,t,n,r){var s=Ht(c,e,t,n,r,d);return s&&!i(s)&&(s.fnScopeId=l._scopeId,s.fnContext=o),s}:this._c=function(e,t,n,r){return Ht(c,e,t,n,r,d)}}function er(e,t,n,o,a){var c=e.options,u={},l=c.props;if(s(l))for(var h in l)u[h]=kr(h,l,t||r);else s(n.attrs)&&nr(u,n.attrs),s(n.props)&&nr(u,n.props);var d=new Xn(n,u,a,o,e),f=c.render.call(null,d._c,d);if(f instanceof ve)return tr(f,n,d.parent,c,d);if(i(f)){for(var p=ot(f)||[],m=new Array(p.length),_=0;_<p.length;_++)m[_]=tr(p[_],n,d.parent,c,d);return m}}function tr(e,t,n,r,i){var o=we(e);return o.fnContext=n,o.fnOptions=r,t.slot&&((o.data||(o.data={})).slot=t.slot),o}function nr(e,t){for(var n in t)e[S(n)]=t[n]}function rr(e){return e.name||e.__name||e._componentTag}Ct(Xn.prototype);var ir={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;ir.prepatch(n,n)}else{var r=e.componentInstance=ar(e,kn);r.$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions,r=t.componentInstance=e.componentInstance;xn(r,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,Nn(n,"mounted")),e.data.keepAlive&&(t._isMounted?Bn(n):Rn(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?Dn(t,!0):t.$destroy())}},or=Object.keys(ir);function sr(e,t,n,r,i){if(!o(e)){var c=n.$options._base;if(h(e)&&(e=c.extend(e)),"function"===typeof e){var u;if(o(e.cid)&&(u=e,e=Ut(u,c),void 0===e))return $t(u,t,n,r,i);t=t||{},Gr(e),s(t.model)&&lr(e.options,t);var l=nt(t,e,i);if(a(e.options.functional))return er(e,l,t,n,r);var d=t.on;if(t.on=t.nativeOn,a(e.options.abstract)){var f=t.slot;t={},f&&(t.slot=f)}cr(t);var p=rr(e.options)||i,m=new ve("vue-component-".concat(e.cid).concat(p?"-".concat(p):""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:l,listeners:d,tag:i,children:r},u);return m}}}function ar(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},r=e.data.inlineTemplate;return s(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new e.componentOptions.Ctor(n)}function cr(e){for(var t=e.hook||(e.hook={}),n=0;n<or.length;n++){var r=or[n],i=t[r],o=ir[r];i===o||i&&i._merged||(t[r]=i?ur(o,i):o)}}function ur(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}function lr(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var o=t.on||(t.on={}),a=o[r],c=t.model.callback;s(a)?(i(a)?-1===a.indexOf(c):a!==c)&&(o[r]=[c].concat(a)):o[r]=c}var hr=L,dr=z.optionMergeStrategies;function fr(e,t,n){if(void 0===n&&(n=!0),!t)return e;for(var r,i,o,s=pe?Reflect.ownKeys(t):Object.keys(t),a=0;a<s.length;a++)r=s[a],"__ob__"!==r&&(i=e[r],o=t[r],n&&I(e,r)?i!==o&&f(i)&&f(o)&&fr(i,o):$e(e,r,o));return e}function pr(e,t,n){return n?function(){var r=l(t)?t.call(n,n):t,i=l(e)?e.call(n,n):e;return r?fr(r,i):i}:t?e?function(){return fr(l(t)?t.call(this,this):t,l(e)?e.call(this,this):e)}:t:e}function mr(e,t){var n=t?e?e.concat(t):i(t)?t:[t]:e;return n?_r(n):n}function _r(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function vr(e,t,n,r){var i=Object.create(e||null);return t?A(i,t):i}dr.data=function(e,t,n){return n?pr(e,t,n):t&&"function"!==typeof t?e:pr(e,t)},q.forEach((function(e){dr[e]=mr})),H.forEach((function(e){dr[e+"s"]=vr})),dr.watch=function(e,t,n,r){if(e===ae&&(e=void 0),t===ae&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var o={};for(var s in A(o,e),t){var a=o[s],c=t[s];a&&!i(a)&&(a=[a]),o[s]=a?a.concat(c):i(c)?c:[c]}return o},dr.props=dr.methods=dr.inject=dr.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return A(i,e),t&&A(i,t),i},dr.provide=function(e,t){return e?function(){var n=Object.create(null);return fr(n,l(e)?e.call(this):e),t&&fr(n,l(t)?t.call(this):t,!1),n}:t};var gr=function(e,t){return void 0===t?e:t};function yr(e,t){var n=e.props;if(n){var r,o,s,a={};if(i(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(s=S(o),a[s]={type:null})}else if(f(n))for(var c in n)o=n[c],s=S(c),a[s]=f(o)?o:{type:o};else 0;e.props=a}}function wr(e,t){var n=e.inject;if(n){var r=e.inject={};if(i(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(f(n))for(var s in n){var a=n[s];r[s]=f(a)?A({from:s},a):{from:a}}else 0}}function br(e){var t=e.directives;if(t)for(var n in t){var r=t[n];l(r)&&(t[n]={bind:r,update:r})}}function Cr(e,t,n){if(l(t)&&(t=t.options),yr(t,n),wr(t,n),br(t),!t._base&&(t.extends&&(e=Cr(e,t.extends,n)),t.mixins))for(var r=0,i=t.mixins.length;r<i;r++)e=Cr(e,t.mixins[r],n);var o,s={};for(o in e)a(o);for(o in t)I(e,o)||a(o);function a(r){var i=dr[r]||gr;s[r]=i(e[r],t[r],n,r)}return s}function Ir(e,t,n,r){if("string"===typeof n){var i=e[t];if(I(i,n))return i[n];var o=S(n);if(I(i,o))return i[o];var s=E(o);if(I(i,s))return i[s];var a=i[n]||i[o]||i[s];return a}}function kr(e,t,n,r){var i=t[e],o=!I(n,e),s=n[e],a=xr(Boolean,i.type);if(a>-1)if(o&&!I(i,"default"))s=!1;else if(""===s||s===x(e)){var c=xr(String,i.type);(c<0||a<c)&&(s=!0)}if(void 0===s){s=Tr(r,i,e);var u=Ne;Ae(!0),Fe(s),Ae(u)}return s}function Tr(e,t,n){if(I(t,"default")){var r=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:l(r)&&"Function"!==Er(t.type)?r.call(e):r}}var Sr=/^\s*function (\w+)/;function Er(e){var t=e&&e.toString().match(Sr);return t?t[1]:""}function Or(e,t){return Er(e)===Er(t)}function xr(e,t){if(!i(t))return Or(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(Or(t[n],e))return n;return-1}var Pr={enumerable:!0,configurable:!0,get:L,set:L};function Rr(e,t,n){Pr.get=function(){return this[t][n]},Pr.set=function(e){this[t][n]=e},Object.defineProperty(e,n,Pr)}function Dr(e){var t=e.$options;if(t.props&&Nr(e,t.props),xt(e),t.methods&&Wr(e,t.methods),t.data)Ar(e);else{var n=Fe(e._data={});n&&n.vmCount++}t.computed&&Fr(e,t.computed),t.watch&&t.watch!==ae&&Vr(e,t.watch)}function Nr(e,t){var n=e.$options.propsData||{},r=e._props=Ve({}),i=e.$options._propKeys=[],o=!e.$parent;o||Ae(!1);var s=function(o){i.push(o);var s=kr(o,t,n,e);je(r,o,s),o in e||Rr(e,"_props",o)};for(var a in t)s(a);Ae(!0)}function Ar(e){var t=e.$options.data;t=e._data=l(t)?Mr(t,e):t||{},f(t)||(t={});var n=Object.keys(t),r=e.$options.props,i=(e.$options.methods,n.length);while(i--){var o=n[i];0,r&&I(r,o)||G(o)||Rr(e,"_data",o)}var s=Fe(t);s&&s.vmCount++}function Mr(e,t){Se();try{return e.call(t,t)}catch(Qs){return Gt(Qs,t,"data()"),{}}finally{Ee()}}var Lr={lazy:!0};function Fr(e,t){var n=e._computedWatchers=Object.create(null),r=le();for(var i in t){var o=t[i],s=l(o)?o:o.get;0,r||(n[i]=new vn(e,s||L,L,Lr)),i in e||jr(e,i,o)}}function jr(e,t,n){var r=!le();l(n)?(Pr.get=r?$r(t):Ur(n),Pr.set=L):(Pr.get=n.get?r&&!1!==n.cache?$r(t):Ur(n.get):L,Pr.set=n.set||L),Object.defineProperty(e,t,Pr)}function $r(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),ke.target&&t.depend(),t.value}}function Ur(e){return function(){return e.call(this,this)}}function Wr(e,t){e.$options.props;for(var n in t)e[n]="function"!==typeof t[n]?L:D(t[n],e)}function Vr(e,t){for(var n in t){var r=t[n];if(i(r))for(var o=0;o<r.length;o++)Yr(e,n,r[o]);else Yr(e,n,r)}}function Yr(e,t,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=e[n]),e.$watch(t,n,r)}function Hr(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=$e,e.prototype.$delete=Ue,e.prototype.$watch=function(e,t,n){var r=this;if(f(t))return Yr(r,e,t,n);n=n||{},n.user=!0;var i=new vn(r,e,t,n);if(n.immediate){var o='callback for immediate watcher "'.concat(i.expression,'"');Se(),Kt(t,r,[i.value],r,o),Ee()}return function(){i.teardown()}}}var qr=0;function zr(e){e.prototype._init=function(e){var t=this;t._uid=qr++,t._isVue=!0,t.__v_skip=!0,t._scope=new Ke(!0),t._scope._vm=!0,e&&e._isComponent?Br(t,e):t.$options=Cr(Gr(t.constructor),e||{},t),t._renderProxy=t,t._self=t,Sn(t),gn(t),Mt(t),Nn(t,"beforeCreate",void 0,!1),Qn(t),Dr(t),Jn(t),Nn(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}function Br(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function Gr(e){var t=e.options;if(e.super){var n=Gr(e.super),r=e.superOptions;if(n!==r){e.superOptions=n;var i=Kr(e);i&&A(e.extendOptions,i),t=e.options=Cr(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function Kr(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=n[i]);return t}function Jr(e){this._init(e)}function Qr(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=N(arguments,1);return n.unshift(this),l(e.install)?e.install.apply(e,n):l(e)&&e.apply(null,n),t.push(e),this}}function Zr(e){e.mixin=function(e){return this.options=Cr(this.options,e),this}}function Xr(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=rr(e)||rr(n.options);var s=function(e){this._init(e)};return s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.cid=t++,s.options=Cr(n.options,e),s["super"]=n,s.options.props&&ei(s),s.options.computed&&ti(s),s.extend=n.extend,s.mixin=n.mixin,s.use=n.use,H.forEach((function(e){s[e]=n[e]})),o&&(s.options.components[o]=s),s.superOptions=n.options,s.extendOptions=e,s.sealedOptions=A({},s.options),i[r]=s,s}}function ei(e){var t=e.options.props;for(var n in t)Rr(e.prototype,"_props",n)}function ti(e){var t=e.options.computed;for(var n in t)jr(e.prototype,n,t[n])}function ni(e){H.forEach((function(t){e[t]=function(e,n){return n?("component"===t&&f(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&l(n)&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}}))}function ri(e){return e&&(rr(e.Ctor.options)||e.tag)}function ii(e,t){return i(e)?e.indexOf(t)>-1:"string"===typeof e?e.split(",").indexOf(t)>-1:!!p(e)&&e.test(t)}function oi(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var o in n){var s=n[o];if(s){var a=s.name;a&&!t(a)&&si(n,o,r,i)}}}function si(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,b(n,t)}zr(Jr),Hr(Jr),In(Jr),En(Jr),Ft(Jr);var ai=[String,RegExp,Array],ci={name:"keep-alive",abstract:!0,props:{include:ai,exclude:ai,max:[String,Number]},methods:{cacheVNode:function(){var e=this,t=e.cache,n=e.keys,r=e.vnodeToCache,i=e.keyToCache;if(r){var o=r.tag,s=r.componentInstance,a=r.componentOptions;t[i]={name:ri(a),tag:o,componentInstance:s},n.push(i),this.max&&n.length>parseInt(this.max)&&si(t,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)si(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",(function(t){oi(e,(function(e){return ii(t,e)}))})),this.$watch("exclude",(function(t){oi(e,(function(e){return!ii(t,e)}))}))},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,t=Wt(e),n=t&&t.componentOptions;if(n){var r=ri(n),i=this,o=i.include,s=i.exclude;if(o&&(!r||!ii(o,r))||s&&r&&ii(s,r))return t;var a=this,c=a.cache,u=a.keys,l=null==t.key?n.Ctor.cid+(n.tag?"::".concat(n.tag):""):t.key;c[l]?(t.componentInstance=c[l].componentInstance,b(u,l),u.push(l)):(this.vnodeToCache=t,this.keyToCache=l),t.data.keepAlive=!0}return t||e&&e[0]}},ui={KeepAlive:ci};function li(e){var t={get:function(){return z}};Object.defineProperty(e,"config",t),e.util={warn:hr,extend:A,mergeOptions:Cr,defineReactive:je},e.set=$e,e.delete=Ue,e.nextTick=cn,e.observable=function(e){return Fe(e),e},e.options=Object.create(null),H.forEach((function(t){e.options[t+"s"]=Object.create(null)})),e.options._base=e,A(e.options.components,ui),Qr(e),Zr(e),Xr(e),ni(e)}li(Jr),Object.defineProperty(Jr.prototype,"$isServer",{get:le}),Object.defineProperty(Jr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Jr,"FunctionalRenderContext",{value:Xn}),Jr.version=hn;var hi=y("style,class"),di=y("input,textarea,option,select,progress"),fi=function(e,t,n){return"value"===n&&di(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},pi=y("contenteditable,draggable,spellcheck"),mi=y("events,caret,typing,plaintext-only"),_i=function(e,t){return bi(t)||"false"===t?"false":"contenteditable"===e&&mi(t)?t:"true"},vi=y("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),gi="http://www.w3.org/1999/xlink",yi=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},wi=function(e){return yi(e)?e.slice(6,e.length):""},bi=function(e){return null==e||!1===e};function Ci(e){var t=e.data,n=e,r=e;while(s(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(t=Ii(r.data,t));while(s(n=n.parent))n&&n.data&&(t=Ii(t,n.data));return ki(t.staticClass,t.class)}function Ii(e,t){return{staticClass:Ti(e.staticClass,t.staticClass),class:s(e.class)?[e.class,t.class]:t.class}}function ki(e,t){return s(e)||s(t)?Ti(e,Si(t)):""}function Ti(e,t){return e?t?e+" "+t:e:t||""}function Si(e){return Array.isArray(e)?Ei(e):h(e)?Oi(e):"string"===typeof e?e:""}function Ei(e){for(var t,n="",r=0,i=e.length;r<i;r++)s(t=Si(e[r]))&&""!==t&&(n&&(n+=" "),n+=t);return n}function Oi(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}var xi={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Pi=y("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Ri=y("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Di=function(e){return Pi(e)||Ri(e)};function Ni(e){return Ri(e)?"svg":"math"===e?"math":void 0}var Ai=Object.create(null);function Mi(e){if(!X)return!0;if(Di(e))return!1;if(e=e.toLowerCase(),null!=Ai[e])return Ai[e];var t=document.createElement(e);return e.indexOf("-")>-1?Ai[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:Ai[e]=/HTMLUnknownElement/.test(t.toString())}var Li=y("text,number,password,search,email,tel,url");function Fi(e){if("string"===typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}function ji(e,t){var n=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function $i(e,t){return document.createElementNS(xi[e],t)}function Ui(e){return document.createTextNode(e)}function Wi(e){return document.createComment(e)}function Vi(e,t,n){e.insertBefore(t,n)}function Yi(e,t){e.removeChild(t)}function Hi(e,t){e.appendChild(t)}function qi(e){return e.parentNode}function zi(e){return e.nextSibling}function Bi(e){return e.tagName}function Gi(e,t){e.textContent=t}function Ki(e,t){e.setAttribute(t,"")}var Ji=Object.freeze({__proto__:null,createElement:ji,createElementNS:$i,createTextNode:Ui,createComment:Wi,insertBefore:Vi,removeChild:Yi,appendChild:Hi,parentNode:qi,nextSibling:zi,tagName:Bi,setTextContent:Gi,setStyleScope:Ki}),Qi={create:function(e,t){Zi(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Zi(e,!0),Zi(t))},destroy:function(e){Zi(e,!0)}};function Zi(e,t){var n=e.data.ref;if(s(n)){var r=e.context,o=e.componentInstance||e.elm,a=t?null:o,c=t?void 0:o;if(l(n))Kt(n,r,[a],r,"template ref function");else{var u=e.data.refInFor,h="string"===typeof n||"number"===typeof n,d=qe(n),f=r.$refs;if(h||d)if(u){var p=h?f[n]:n.value;t?i(p)&&b(p,o):i(p)?p.includes(o)||p.push(o):h?(f[n]=[o],Xi(r,n,f[n])):n.value=[o]}else if(h){if(t&&f[n]!==o)return;f[n]=c,Xi(r,n,a)}else if(d){if(t&&n.value!==o)return;n.value=a}else 0}}}function Xi(e,t,n){var r=e._setupState;r&&I(r,t)&&(qe(r[t])?r[t].value=n:r[t]=n)}var eo=new ve("",{},[]),to=["create","activate","update","remove","destroy"];function no(e,t){return e.key===t.key&&e.asyncFactory===t.asyncFactory&&(e.tag===t.tag&&e.isComment===t.isComment&&s(e.data)===s(t.data)&&ro(e,t)||a(e.isAsyncPlaceholder)&&o(t.asyncFactory.error))}function ro(e,t){if("input"!==e.tag)return!0;var n,r=s(n=e.data)&&s(n=n.attrs)&&n.type,i=s(n=t.data)&&s(n=n.attrs)&&n.type;return r===i||Li(r)&&Li(i)}function io(e,t,n){var r,i,o={};for(r=t;r<=n;++r)i=e[r].key,s(i)&&(o[i]=r);return o}function oo(e){var t,n,r={},c=e.modules,l=e.nodeOps;for(t=0;t<to.length;++t)for(r[to[t]]=[],n=0;n<c.length;++n)s(c[n][to[t]])&&r[to[t]].push(c[n][to[t]]);function h(e){return new ve(l.tagName(e).toLowerCase(),{},[],void 0,e)}function d(e,t){function n(){0===--n.listeners&&f(e)}return n.listeners=t,n}function f(e){var t=l.parentNode(e);s(t)&&l.removeChild(t,e)}function p(e,t,n,r,i,o,c){if(s(e.elm)&&s(o)&&(e=o[c]=we(e)),e.isRootInsert=!i,!m(e,t,n,r)){var u=e.data,h=e.children,d=e.tag;s(d)?(e.elm=e.ns?l.createElementNS(e.ns,d):l.createElement(d,e),I(e),w(e,h,t),s(u)&&C(e,t),g(n,e.elm,r)):a(e.isComment)?(e.elm=l.createComment(e.text),g(n,e.elm,r)):(e.elm=l.createTextNode(e.text),g(n,e.elm,r))}}function m(e,t,n,r){var i=e.data;if(s(i)){var o=s(e.componentInstance)&&i.keepAlive;if(s(i=i.hook)&&s(i=i.init)&&i(e,!1),s(e.componentInstance))return _(e,t),g(n,e.elm,r),a(o)&&v(e,t,n,r),!0}}function _(e,t){s(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,b(e)?(C(e,t),I(e)):(Zi(e),t.push(e))}function v(e,t,n,i){var o,a=e;while(a.componentInstance)if(a=a.componentInstance._vnode,s(o=a.data)&&s(o=o.transition)){for(o=0;o<r.activate.length;++o)r.activate[o](eo,a);t.push(a);break}g(n,e.elm,i)}function g(e,t,n){s(e)&&(s(n)?l.parentNode(n)===e&&l.insertBefore(e,t,n):l.appendChild(e,t))}function w(e,t,n){if(i(t)){0;for(var r=0;r<t.length;++r)p(t[r],n,e.elm,null,!0,t,r)}else u(e.text)&&l.appendChild(e.elm,l.createTextNode(String(e.text)))}function b(e){while(e.componentInstance)e=e.componentInstance._vnode;return s(e.tag)}function C(e,n){for(var i=0;i<r.create.length;++i)r.create[i](eo,e);t=e.data.hook,s(t)&&(s(t.create)&&t.create(eo,e),s(t.insert)&&n.push(e))}function I(e){var t;if(s(t=e.fnScopeId))l.setStyleScope(e.elm,t);else{var n=e;while(n)s(t=n.context)&&s(t=t.$options._scopeId)&&l.setStyleScope(e.elm,t),n=n.parent}s(t=kn)&&t!==e.context&&t!==e.fnContext&&s(t=t.$options._scopeId)&&l.setStyleScope(e.elm,t)}function k(e,t,n,r,i,o){for(;r<=i;++r)p(n[r],o,e,t,!1,n,r)}function T(e){var t,n,i=e.data;if(s(i))for(s(t=i.hook)&&s(t=t.destroy)&&t(e),t=0;t<r.destroy.length;++t)r.destroy[t](e);if(s(t=e.children))for(n=0;n<e.children.length;++n)T(e.children[n])}function S(e,t,n){for(;t<=n;++t){var r=e[t];s(r)&&(s(r.tag)?(E(r),T(r)):f(r.elm))}}function E(e,t){if(s(t)||s(e.data)){var n,i=r.remove.length+1;for(s(t)?t.listeners+=i:t=d(e.elm,i),s(n=e.componentInstance)&&s(n=n._vnode)&&s(n.data)&&E(n,t),n=0;n<r.remove.length;++n)r.remove[n](e,t);s(n=e.data.hook)&&s(n=n.remove)?n(e,t):t()}else f(e.elm)}function O(e,t,n,r,i){var a,c,u,h,d=0,f=0,m=t.length-1,_=t[0],v=t[m],g=n.length-1,y=n[0],w=n[g],b=!i;while(d<=m&&f<=g)o(_)?_=t[++d]:o(v)?v=t[--m]:no(_,y)?(P(_,y,r,n,f),_=t[++d],y=n[++f]):no(v,w)?(P(v,w,r,n,g),v=t[--m],w=n[--g]):no(_,w)?(P(_,w,r,n,g),b&&l.insertBefore(e,_.elm,l.nextSibling(v.elm)),_=t[++d],w=n[--g]):no(v,y)?(P(v,y,r,n,f),b&&l.insertBefore(e,v.elm,_.elm),v=t[--m],y=n[++f]):(o(a)&&(a=io(t,d,m)),c=s(y.key)?a[y.key]:x(y,t,d,m),o(c)?p(y,r,e,_.elm,!1,n,f):(u=t[c],no(u,y)?(P(u,y,r,n,f),t[c]=void 0,b&&l.insertBefore(e,u.elm,_.elm)):p(y,r,e,_.elm,!1,n,f)),y=n[++f]);d>m?(h=o(n[g+1])?null:n[g+1].elm,k(e,h,n,f,g,r)):f>g&&S(t,d,m)}function x(e,t,n,r){for(var i=n;i<r;i++){var o=t[i];if(s(o)&&no(e,o))return i}}function P(e,t,n,i,c,u){if(e!==t){s(t.elm)&&s(i)&&(t=i[c]=we(t));var h=t.elm=e.elm;if(a(e.isAsyncPlaceholder))s(t.asyncFactory.resolved)?N(e.elm,t,n):t.isAsyncPlaceholder=!0;else if(a(t.isStatic)&&a(e.isStatic)&&t.key===e.key&&(a(t.isCloned)||a(t.isOnce)))t.componentInstance=e.componentInstance;else{var d,f=t.data;s(f)&&s(d=f.hook)&&s(d=d.prepatch)&&d(e,t);var p=e.children,m=t.children;if(s(f)&&b(t)){for(d=0;d<r.update.length;++d)r.update[d](e,t);s(d=f.hook)&&s(d=d.update)&&d(e,t)}o(t.text)?s(p)&&s(m)?p!==m&&O(h,p,m,n,u):s(m)?(s(e.text)&&l.setTextContent(h,""),k(h,null,m,0,m.length-1,n)):s(p)?S(p,0,p.length-1):s(e.text)&&l.setTextContent(h,""):e.text!==t.text&&l.setTextContent(h,t.text),s(f)&&s(d=f.hook)&&s(d=d.postpatch)&&d(e,t)}}}function R(e,t,n){if(a(n)&&s(e.parent))e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}var D=y("attrs,class,staticClass,staticStyle,key");function N(e,t,n,r){var i,o=t.tag,c=t.data,u=t.children;if(r=r||c&&c.pre,t.elm=e,a(t.isComment)&&s(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(s(c)&&(s(i=c.hook)&&s(i=i.init)&&i(t,!0),s(i=t.componentInstance)))return _(t,n),!0;if(s(o)){if(s(u))if(e.hasChildNodes())if(s(i=c)&&s(i=i.domProps)&&s(i=i.innerHTML)){if(i!==e.innerHTML)return!1}else{for(var l=!0,h=e.firstChild,d=0;d<u.length;d++){if(!h||!N(h,u[d],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else w(t,u,n);if(s(c)){var f=!1;for(var p in c)if(!D(p)){f=!0,C(t,n);break}!f&&c["class"]&&fn(c["class"])}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,i){if(!o(t)){var c=!1,u=[];if(o(e))c=!0,p(t,u);else{var d=s(e.nodeType);if(!d&&no(e,t))P(e,t,u,null,null,i);else{if(d){if(1===e.nodeType&&e.hasAttribute(Y)&&(e.removeAttribute(Y),n=!0),a(n)&&N(e,t,u))return R(t,u,!0),e;e=h(e)}var f=e.elm,m=l.parentNode(f);if(p(t,u,f._leaveCb?null:m,l.nextSibling(f)),s(t.parent)){var _=t.parent,v=b(t);while(_){for(var g=0;g<r.destroy.length;++g)r.destroy[g](_);if(_.elm=t.elm,v){for(var y=0;y<r.create.length;++y)r.create[y](eo,_);var w=_.data.hook.insert;if(w.merged)for(var C=1;C<w.fns.length;C++)w.fns[C]()}else Zi(_);_=_.parent}}s(m)?S([e],0,0):s(e.tag)&&T(e)}}return R(t,u,c),t.elm}s(e)&&T(e)}}var so={create:ao,update:ao,destroy:function(e){ao(e,eo)}};function ao(e,t){(e.data.directives||t.data.directives)&&co(e,t)}function co(e,t){var n,r,i,o=e===eo,s=t===eo,a=lo(e.data.directives,e.context),c=lo(t.data.directives,t.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,fo(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(fo(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)fo(u[n],"inserted",t,e)};o?tt(t,"insert",h):h()}if(l.length&&tt(t,"postpatch",(function(){for(var n=0;n<l.length;n++)fo(l[n],"componentUpdated",t,e)})),!o)for(n in a)c[n]||fo(a[n],"unbind",e,e,s)}var uo=Object.create(null);function lo(e,t){var n,r,i=Object.create(null);if(!e)return i;for(n=0;n<e.length;n++){if(r=e[n],r.modifiers||(r.modifiers=uo),i[ho(r)]=r,t._setupState&&t._setupState.__sfc){var o=r.def||Ir(t,"_setupState","v-"+r.name);r.def="function"===typeof o?{bind:o,update:o}:o}r.def=r.def||Ir(t.$options,"directives",r.name,!0)}return i}function ho(e){return e.rawName||"".concat(e.name,".").concat(Object.keys(e.modifiers||{}).join("."))}function fo(e,t,n,r,i){var o=e.def&&e.def[t];if(o)try{o(n.elm,e,n,r,i)}catch(Qs){Gt(Qs,n.context,"directive ".concat(e.name," ").concat(t," hook"))}}var po=[Qi,so];function mo(e,t){var n=t.componentOptions;if((!s(n)||!1!==n.Ctor.options.inheritAttrs)&&(!o(e.data.attrs)||!o(t.data.attrs))){var r,i,c,u=t.elm,l=e.data.attrs||{},h=t.data.attrs||{};for(r in(s(h.__ob__)||a(h._v_attr_proxy))&&(h=t.data.attrs=A({},h)),h)i=h[r],c=l[r],c!==i&&_o(u,r,i,t.data.pre);for(r in(te||re)&&h.value!==l.value&&_o(u,"value",h.value),l)o(h[r])&&(yi(r)?u.removeAttributeNS(gi,wi(r)):pi(r)||u.removeAttribute(r))}}function _o(e,t,n,r){r||e.tagName.indexOf("-")>-1?vo(e,t,n):vi(t)?bi(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):pi(t)?e.setAttribute(t,_i(t,n)):yi(t)?bi(n)?e.removeAttributeNS(gi,wi(t)):e.setAttributeNS(gi,t,n):vo(e,t,n)}function vo(e,t,n){if(bi(n))e.removeAttribute(t);else{if(te&&!ne&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}var go={create:mo,update:mo};function yo(e,t){var n=t.elm,r=t.data,i=e.data;if(!(o(r.staticClass)&&o(r.class)&&(o(i)||o(i.staticClass)&&o(i.class)))){var a=Ci(t),c=n._transitionClasses;s(c)&&(a=Ti(a,Si(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var wo,bo={create:yo,update:yo},Co="__r",Io="__c";function ko(e){if(s(e[Co])){var t=te?"change":"input";e[t]=[].concat(e[Co],e[t]||[]),delete e[Co]}s(e[Io])&&(e.change=[].concat(e[Io],e.change||[]),delete e[Io])}function To(e,t,n){var r=wo;return function i(){var o=t.apply(null,arguments);null!==o&&Oo(e,i,n,r)}}var So=Xt&&!(se&&Number(se[1])<=53);function Eo(e,t,n,r){if(So){var i=Wn,o=t;t=o._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=i||e.timeStamp<=0||e.target.ownerDocument!==document)return o.apply(this,arguments)}}wo.addEventListener(e,t,ce?{capture:n,passive:r}:n)}function Oo(e,t,n,r){(r||wo).removeEventListener(e,t._wrapper||t,n)}function xo(e,t){if(!o(e.data.on)||!o(t.data.on)){var n=t.data.on||{},r=e.data.on||{};wo=t.elm||e.elm,ko(n),et(n,r,Eo,Oo,To,t.context),wo=void 0}}var Po,Ro={create:xo,update:xo,destroy:function(e){return xo(e,eo)}};function Do(e,t){if(!o(e.data.domProps)||!o(t.data.domProps)){var n,r,i=t.elm,c=e.data.domProps||{},u=t.data.domProps||{};for(n in(s(u.__ob__)||a(u._v_attr_proxy))&&(u=t.data.domProps=A({},u)),c)n in u||(i[n]="");for(n in u){if(r=u[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),r===c[n])continue;1===i.childNodes.length&&i.removeChild(i.childNodes[0])}if("value"===n&&"PROGRESS"!==i.tagName){i._value=r;var l=o(r)?"":String(r);No(i,l)&&(i.value=l)}else if("innerHTML"===n&&Ri(i.tagName)&&o(i.innerHTML)){Po=Po||document.createElement("div"),Po.innerHTML="<svg>".concat(r,"</svg>");var h=Po.firstChild;while(i.firstChild)i.removeChild(i.firstChild);while(h.firstChild)i.appendChild(h.firstChild)}else if(r!==c[n])try{i[n]=r}catch(Qs){}}}}function No(e,t){return!e.composing&&("OPTION"===e.tagName||Ao(e,t)||Mo(e,t))}function Ao(e,t){var n=!0;try{n=document.activeElement!==e}catch(Qs){}return n&&e.value!==t}function Mo(e,t){var n=e.value,r=e._vModifiers;if(s(r)){if(r.number)return g(n)!==g(t);if(r.trim)return n.trim()!==t.trim()}return n!==t}var Lo={create:Do,update:Do},Fo=k((function(e){var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;return e.split(n).forEach((function(e){if(e){var n=e.split(r);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}));function jo(e){var t=$o(e.style);return e.staticStyle?A(e.staticStyle,t):t}function $o(e){return Array.isArray(e)?M(e):"string"===typeof e?Fo(e):e}function Uo(e,t){var n,r={};if(t){var i=e;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=jo(i.data))&&A(r,n)}(n=jo(e.data))&&A(r,n);var o=e;while(o=o.parent)o.data&&(n=jo(o.data))&&A(r,n);return r}var Wo,Vo=/^--/,Yo=/\s*!important$/,Ho=function(e,t,n){if(Vo.test(t))e.style.setProperty(t,n);else if(Yo.test(n))e.style.setProperty(x(t),n.replace(Yo,""),"important");else{var r=zo(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},qo=["Webkit","Moz","ms"],zo=k((function(e){if(Wo=Wo||document.createElement("div").style,e=S(e),"filter"!==e&&e in Wo)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<qo.length;n++){var r=qo[n]+t;if(r in Wo)return r}}));function Bo(e,t){var n=t.data,r=e.data;if(!(o(n.staticStyle)&&o(n.style)&&o(r.staticStyle)&&o(r.style))){var i,a,c=t.elm,u=r.staticStyle,l=r.normalizedStyle||r.style||{},h=u||l,d=$o(t.data.style)||{};t.data.normalizedStyle=s(d.__ob__)?A({},d):d;var f=Uo(t,!0);for(a in h)o(f[a])&&Ho(c,a,"");for(a in f)i=f[a],i!==h[a]&&Ho(c,a,null==i?"":i)}}var Go={create:Bo,update:Bo},Ko=/\s+/;function Jo(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Ko).forEach((function(t){return e.classList.add(t)})):e.classList.add(t);else{var n=" ".concat(e.getAttribute("class")||""," ");n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Qo(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Ko).forEach((function(t){return e.classList.remove(t)})):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{var n=" ".concat(e.getAttribute("class")||""," "),r=" "+t+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?e.setAttribute("class",n):e.removeAttribute("class")}}function Zo(e){if(e){if("object"===typeof e){var t={};return!1!==e.css&&A(t,Xo(e.name||"v")),A(t,e),t}return"string"===typeof e?Xo(e):void 0}}var Xo=k((function(e){return{enterClass:"".concat(e,"-enter"),enterToClass:"".concat(e,"-enter-to"),enterActiveClass:"".concat(e,"-enter-active"),leaveClass:"".concat(e,"-leave"),leaveToClass:"".concat(e,"-leave-to"),leaveActiveClass:"".concat(e,"-leave-active")}})),es=X&&!ne,ts="transition",ns="animation",rs="transition",is="transitionend",os="animation",ss="animationend";es&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(rs="WebkitTransition",is="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(os="WebkitAnimation",ss="webkitAnimationEnd"));var as=X?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function cs(e){as((function(){as(e)}))}function us(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),Jo(e,t))}function ls(e,t){e._transitionClasses&&b(e._transitionClasses,t),Qo(e,t)}function hs(e,t,n){var r=fs(e,t),i=r.type,o=r.timeout,s=r.propCount;if(!i)return n();var a=i===ts?is:ss,c=0,u=function(){e.removeEventListener(a,l),n()},l=function(t){t.target===e&&++c>=s&&u()};setTimeout((function(){c<s&&u()}),o+1),e.addEventListener(a,l)}var ds=/\b(transform|all)(,|$)/;function fs(e,t){var n,r=window.getComputedStyle(e),i=(r[rs+"Delay"]||"").split(", "),o=(r[rs+"Duration"]||"").split(", "),s=ps(i,o),a=(r[os+"Delay"]||"").split(", "),c=(r[os+"Duration"]||"").split(", "),u=ps(a,c),l=0,h=0;t===ts?s>0&&(n=ts,l=s,h=o.length):t===ns?u>0&&(n=ns,l=u,h=c.length):(l=Math.max(s,u),n=l>0?s>u?ts:ns:null,h=n?n===ts?o.length:c.length:0);var d=n===ts&&ds.test(r[rs+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:d}}function ps(e,t){while(e.length<t.length)e=e.concat(e);return Math.max.apply(null,t.map((function(t,n){return ms(t)+ms(e[n])})))}function ms(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function _s(e,t){var n=e.elm;s(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=Zo(e.data.transition);if(!o(r)&&!s(n._enterCb)&&1===n.nodeType){var i=r.css,a=r.type,c=r.enterClass,u=r.enterToClass,d=r.enterActiveClass,f=r.appearClass,p=r.appearToClass,m=r.appearActiveClass,_=r.beforeEnter,v=r.enter,y=r.afterEnter,w=r.enterCancelled,b=r.beforeAppear,C=r.appear,I=r.afterAppear,k=r.appearCancelled,T=r.duration,S=kn,E=kn.$vnode;while(E&&E.parent)S=E.context,E=E.parent;var O=!S._isMounted||!e.isRootInsert;if(!O||C||""===C){var x=O&&f?f:c,P=O&&m?m:d,R=O&&p?p:u,D=O&&b||_,N=O&&l(C)?C:v,A=O&&I||y,M=O&&k||w,L=g(h(T)?T.enter:T);0;var F=!1!==i&&!ne,j=ys(N),$=n._enterCb=W((function(){F&&(ls(n,R),ls(n,P)),$.cancelled?(F&&ls(n,x),M&&M(n)):A&&A(n),n._enterCb=null}));e.data.show||tt(e,"insert",(function(){var t=n.parentNode,r=t&&t._pending&&t._pending[e.key];r&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),N&&N(n,$)})),D&&D(n),F&&(us(n,x),us(n,P),cs((function(){ls(n,x),$.cancelled||(us(n,R),j||(gs(L)?setTimeout($,L):hs(n,a,$)))}))),e.data.show&&(t&&t(),N&&N(n,$)),F||j||$()}}}function vs(e,t){var n=e.elm;s(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=Zo(e.data.transition);if(o(r)||1!==n.nodeType)return t();if(!s(n._leaveCb)){var i=r.css,a=r.type,c=r.leaveClass,u=r.leaveToClass,l=r.leaveActiveClass,d=r.beforeLeave,f=r.leave,p=r.afterLeave,m=r.leaveCancelled,_=r.delayLeave,v=r.duration,y=!1!==i&&!ne,w=ys(f),b=g(h(v)?v.leave:v);0;var C=n._leaveCb=W((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),y&&(ls(n,u),ls(n,l)),C.cancelled?(y&&ls(n,c),m&&m(n)):(t(),p&&p(n)),n._leaveCb=null}));_?_(I):I()}function I(){C.cancelled||(!e.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),d&&d(n),y&&(us(n,c),us(n,l),cs((function(){ls(n,c),C.cancelled||(us(n,u),w||(gs(b)?setTimeout(C,b):hs(n,a,C)))}))),f&&f(n,C),y||w||C())}}function gs(e){return"number"===typeof e&&!isNaN(e)}function ys(e){if(o(e))return!1;var t=e.fns;return s(t)?ys(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function ws(e,t){!0!==t.data.show&&_s(t)}var bs=X?{create:ws,activate:ws,remove:function(e,t){!0!==e.data.show?vs(e,t):t()}}:{},Cs=[go,bo,Ro,Lo,Go,bs],Is=Cs.concat(po),ks=oo({nodeOps:Ji,modules:Is});ne&&document.addEventListener("selectionchange",(function(){var e=document.activeElement;e&&e.vmodel&&Ds(e,"input")}));var Ts={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?tt(n,"postpatch",(function(){Ts.componentUpdated(e,t,n)})):Ss(e,t,n.context),e._vOptions=[].map.call(e.options,xs)):("textarea"===n.tag||Li(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",Ps),e.addEventListener("compositionend",Rs),e.addEventListener("change",Rs),ne&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Ss(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,xs);if(i.some((function(e,t){return!$(e,r[t])}))){var o=e.multiple?t.value.some((function(e){return Os(e,i)})):t.value!==t.oldValue&&Os(t.value,i);o&&Ds(e,"change")}}}};function Ss(e,t,n){Es(e,t,n),(te||re)&&setTimeout((function(){Es(e,t,n)}),0)}function Es(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,s,a=0,c=e.options.length;a<c;a++)if(s=e.options[a],i)o=U(r,xs(s))>-1,s.selected!==o&&(s.selected=o);else if($(xs(s),r))return void(e.selectedIndex!==a&&(e.selectedIndex=a));i||(e.selectedIndex=-1)}}function Os(e,t){return t.every((function(t){return!$(t,e)}))}function xs(e){return"_value"in e?e._value:e.value}function Ps(e){e.target.composing=!0}function Rs(e){e.target.composing&&(e.target.composing=!1,Ds(e.target,"input"))}function Ds(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Ns(e){return!e.componentInstance||e.data&&e.data.transition?e:Ns(e.componentInstance._vnode)}var As={bind:function(e,t,n){var r=t.value;n=Ns(n);var i=n.data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,_s(n,(function(){e.style.display=o}))):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value,i=t.oldValue;if(!r!==!i){n=Ns(n);var o=n.data&&n.data.transition;o?(n.data.show=!0,r?_s(n,(function(){e.style.display=e.__vOriginalDisplay})):vs(n,(function(){e.style.display="none"}))):e.style.display=r?e.__vOriginalDisplay:"none"}},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}},Ms={model:Ts,show:As},Ls={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Fs(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?Fs(Wt(t.children)):e}function js(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var r in i)t[S(r)]=i[r];return t}function $s(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function Us(e){while(e=e.parent)if(e.data.transition)return!0}function Ws(e,t){return t.key===e.key&&t.tag===e.tag}var Vs=function(e){return e.tag||Tt(e)},Ys=function(e){return"show"===e.name},Hs={name:"transition",props:Ls,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(Vs),n.length)){0;var r=this.mode;0;var i=n[0];if(Us(this.$vnode))return i;var o=Fs(i);if(!o)return i;if(this._leaving)return $s(e,i);var s="__transition-".concat(this._uid,"-");o.key=null==o.key?o.isComment?s+"comment":s+o.tag:u(o.key)?0===String(o.key).indexOf(s)?o.key:s+o.key:o.key;var a=(o.data||(o.data={})).transition=js(this),c=this._vnode,l=Fs(c);if(o.data.directives&&o.data.directives.some(Ys)&&(o.data.show=!0),l&&l.data&&!Ws(o,l)&&!Tt(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=A({},a);if("out-in"===r)return this._leaving=!0,tt(h,"afterLeave",(function(){t._leaving=!1,t.$forceUpdate()})),$s(e,i);if("in-out"===r){if(Tt(o))return c;var d,f=function(){d()};tt(a,"afterEnter",f),tt(a,"enterCancelled",f),tt(h,"delayLeave",(function(e){d=e}))}}return i}}},qs=A({tag:String,moveClass:String},Ls);delete qs.mode;var zs={props:qs,beforeMount:function(){var e=this,t=this._update;this._update=function(n,r){var i=Tn(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),t.call(e,n,r)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],s=js(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=s;else;}if(r){var u=[],l=[];for(a=0;a<r.length;a++){c=r[a];c.data.transition=s,c.data.pos=c.elm.getBoundingClientRect(),n[c.key]?u.push(c):l.push(c)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(Bs),e.forEach(Gs),e.forEach(Ks),this._reflow=document.body.offsetHeight,e.forEach((function(e){if(e.data.moved){var n=e.elm,r=n.style;us(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(is,n._moveCb=function e(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(is,e),n._moveCb=null,ls(n,t))})}})))},methods:{hasMove:function(e,t){if(!es)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach((function(e){Qo(n,e)})),Jo(n,t),n.style.display="none",this.$el.appendChild(n);var r=fs(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function Bs(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function Gs(e){e.data.newPos=e.elm.getBoundingClientRect()}function Ks(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate(".concat(r,"px,").concat(i,"px)"),o.transitionDuration="0s"}}var Js={Transition:Hs,TransitionGroup:zs};Jr.config.mustUseProp=fi,Jr.config.isReservedTag=Di,Jr.config.isReservedAttr=hi,Jr.config.getTagNamespace=Ni,Jr.config.isUnknownElement=Mi,A(Jr.options.directives,Ms),A(Jr.options.components,Js),Jr.prototype.__patch__=X?ks:L,Jr.prototype.$mount=function(e,t){return e=e&&X?Fi(e):void 0,On(this,e,t)},X&&setTimeout((function(){z.devtools&&he&&he.emit("init",Jr)}),0)},408:function(e,t,n){"use strict";n(7658);
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function r(e){var t=Number(e.version.split(".")[0]);if(t>=2)e.mixin({beforeCreate:r});else{var n=e.prototype._init;e.prototype._init=function(e){void 0===e&&(e={}),e.init=e.init?[r].concat(e.init):r,n.call(this,e)}}function r(){var e=this.$options;e.store?this.$store="function"===typeof e.store?e.store():e.store:e.parent&&e.parent.$store&&(this.$store=e.parent.$store)}}var i="undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{},o=i.__VUE_DEVTOOLS_GLOBAL_HOOK__;function s(e){o&&(e._devtoolHook=o,o.emit("vuex:init",e),o.on("vuex:travel-to-state",(function(t){e.replaceState(t)})),e.subscribe((function(e,t){o.emit("vuex:mutation",e,t)}),{prepend:!0}),e.subscribeAction((function(e,t){o.emit("vuex:action",e,t)}),{prepend:!0}))}function a(e,t){return e.filter(t)[0]}function c(e,t){if(void 0===t&&(t=[]),null===e||"object"!==typeof e)return e;var n=a(t,(function(t){return t.original===e}));if(n)return n.copy;var r=Array.isArray(e)?[]:{};return t.push({original:e,copy:r}),Object.keys(e).forEach((function(n){r[n]=c(e[n],t)})),r}function u(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function l(e){return null!==e&&"object"===typeof e}function h(e){return e&&"function"===typeof e.then}function d(e,t){return function(){return e(t)}}var f=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},p={namespaced:{configurable:!0}};p.namespaced.get=function(){return!!this._rawModule.namespaced},f.prototype.addChild=function(e,t){this._children[e]=t},f.prototype.removeChild=function(e){delete this._children[e]},f.prototype.getChild=function(e){return this._children[e]},f.prototype.hasChild=function(e){return e in this._children},f.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},f.prototype.forEachChild=function(e){u(this._children,e)},f.prototype.forEachGetter=function(e){this._rawModule.getters&&u(this._rawModule.getters,e)},f.prototype.forEachAction=function(e){this._rawModule.actions&&u(this._rawModule.actions,e)},f.prototype.forEachMutation=function(e){this._rawModule.mutations&&u(this._rawModule.mutations,e)},Object.defineProperties(f.prototype,p);var m=function(e){this.register([],e,!1)};function _(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void 0;_(e.concat(r),t.getChild(r),n.modules[r])}}m.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},m.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},m.prototype.update=function(e){_([],this.root,e)},m.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0);var i=new f(t,n);if(0===e.length)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}t.modules&&u(t.modules,(function(t,i){r.register(e.concat(i),t,n)}))},m.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r&&r.runtime&&t.removeChild(n)},m.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var v;var g=function(e){var t=this;void 0===e&&(e={}),!v&&"undefined"!==typeof window&&window.Vue&&D(window.Vue);var n=e.plugins;void 0===n&&(n=[]);var r=e.strict;void 0===r&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new m(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new v,this._makeLocalGettersCache=Object.create(null);var i=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(e,t){return a.call(i,e,t)},this.commit=function(e,t,n){return c.call(i,e,t,n)},this.strict=r;var u=this._modules.root.state;I(this,u,[],this._modules.root),C(this,u),n.forEach((function(e){return e(t)}));var l=void 0!==e.devtools?e.devtools:v.config.devtools;l&&s(this)},y={state:{configurable:!0}};function w(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function b(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;I(e,n,[],e._modules.root,!0),C(e,n,t)}function C(e,t,n){var r=e._vm;e.getters={},e._makeLocalGettersCache=Object.create(null);var i=e._wrappedGetters,o={};u(i,(function(t,n){o[n]=d(t,e),Object.defineProperty(e.getters,n,{get:function(){return e._vm[n]},enumerable:!0})}));var s=v.config.silent;v.config.silent=!0,e._vm=new v({data:{$$state:t},computed:o}),v.config.silent=s,e.strict&&x(e),r&&(n&&e._withCommit((function(){r._data.$$state=null})),v.nextTick((function(){return r.$destroy()})))}function I(e,t,n,r,i){var o=!n.length,s=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[s],e._modulesNamespaceMap[s]=r),!o&&!i){var a=P(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){v.set(a,c,r.state)}))}var u=r.context=k(e,s,n);r.forEachMutation((function(t,n){var r=s+n;S(e,r,t,u)})),r.forEachAction((function(t,n){var r=t.root?n:s+n,i=t.handler||t;E(e,r,i,u)})),r.forEachGetter((function(t,n){var r=s+n;O(e,r,t,u)})),r.forEachChild((function(r,o){I(e,t,n.concat(o),r,i)}))}function k(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var o=R(n,r,i),s=o.payload,a=o.options,c=o.type;return a&&a.root||(c=t+c),e.dispatch(c,s)},commit:r?e.commit:function(n,r,i){var o=R(n,r,i),s=o.payload,a=o.options,c=o.type;a&&a.root||(c=t+c),e.commit(c,s,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return T(e,t)}},state:{get:function(){return P(e.state,n)}}}),i}function T(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,r)===t){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function S(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push((function(t){n.call(e,r.state,t)}))}function E(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push((function(t){var i=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return h(i)||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}function O(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)})}function x(e){e._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function P(e,t){return t.reduce((function(e,t){return e[t]}),e)}function R(e,t,n){return l(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}function D(e){v&&e===v||(v=e,r(v))}y.state.get=function(){return this._vm._data.$$state},y.state.set=function(e){0},g.prototype.commit=function(e,t,n){var r=this,i=R(e,t,n),o=i.type,s=i.payload,a=(i.options,{type:o,payload:s}),c=this._mutations[o];c&&(this._withCommit((function(){c.forEach((function(e){e(s)}))})),this._subscribers.slice().forEach((function(e){return e(a,r.state)})))},g.prototype.dispatch=function(e,t){var n=this,r=R(e,t),i=r.type,o=r.payload,s={type:i,payload:o},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(s,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(e){return e(o)}))):a[0](o);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(s,n.state)}))}catch(u){0}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(s,n.state,e)}))}catch(u){0}t(e)}))}))}},g.prototype.subscribe=function(e,t){return w(e,this._subscribers,t)},g.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return w(n,this._actionSubscribers,t)},g.prototype.watch=function(e,t,n){var r=this;return this._watcherVM.$watch((function(){return e(r.state,r.getters)}),t,n)},g.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._vm._data.$$state=e}))},g.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),I(this,this.state,e,this._modules.get(e),n.preserveState),C(this,this.state)},g.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var n=P(t.state,e.slice(0,-1));v.delete(n,e[e.length-1])})),b(this)},g.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},g.prototype.hotUpdate=function(e){this._modules.update(e),b(this,!0)},g.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(g.prototype,y);var N=U((function(e,t){var n={};return j(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=W(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,t,n):t[i]},n[r].vuex=!0})),n})),A=U((function(e,t){var n={};return j(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var o=W(this.$store,"mapMutations",e);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),M=U((function(e,t){var n={};return j(t).forEach((function(t){var r=t.key,i=t.val;i=e+i,n[r]=function(){if(!e||W(this.$store,"mapGetters",e))return this.$store.getters[i]},n[r].vuex=!0})),n})),L=U((function(e,t){var n={};return j(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var o=W(this.$store,"mapActions",e);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),F=function(e){return{mapState:N.bind(null,e),mapGetters:M.bind(null,e),mapMutations:A.bind(null,e),mapActions:L.bind(null,e)}};function j(e){return $(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function $(e){return Array.isArray(e)||l(e)}function U(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function W(e,t,n){var r=e._modulesNamespaceMap[n];return r}function V(e){void 0===e&&(e={});var t=e.collapsed;void 0===t&&(t=!0);var n=e.filter;void 0===n&&(n=function(e,t,n){return!0});var r=e.transformer;void 0===r&&(r=function(e){return e});var i=e.mutationTransformer;void 0===i&&(i=function(e){return e});var o=e.actionFilter;void 0===o&&(o=function(e,t){return!0});var s=e.actionTransformer;void 0===s&&(s=function(e){return e});var a=e.logMutations;void 0===a&&(a=!0);var u=e.logActions;void 0===u&&(u=!0);var l=e.logger;return void 0===l&&(l=console),function(e){var h=c(e.state);"undefined"!==typeof l&&(a&&e.subscribe((function(e,o){var s=c(o);if(n(e,h,s)){var a=q(),u=i(e),d="mutation "+e.type+a;Y(l,d,t),l.log("%c prev state","color: #9E9E9E; font-weight: bold",r(h)),l.log("%c mutation","color: #03A9F4; font-weight: bold",u),l.log("%c next state","color: #4CAF50; font-weight: bold",r(s)),H(l)}h=s})),u&&e.subscribeAction((function(e,n){if(o(e,n)){var r=q(),i=s(e),a="action "+e.type+r;Y(l,a,t),l.log("%c action","color: #03A9F4; font-weight: bold",i),H(l)}})))}}function Y(e,t,n){var r=n?e.groupCollapsed:e.group;try{r.call(e,t)}catch(i){e.log(t)}}function H(e){try{e.groupEnd()}catch(t){e.log("—— log end ——")}}function q(){var e=new Date;return" @ "+B(e.getHours(),2)+":"+B(e.getMinutes(),2)+":"+B(e.getSeconds(),2)+"."+B(e.getMilliseconds(),3)}function z(e,t){return new Array(t+1).join(e)}function B(e,t){return z("0",t-e.toString().length)+e}var G={Store:g,install:D,version:"3.6.2",mapState:N,mapMutations:A,mapGetters:M,mapActions:L,createNamespacedHelpers:F,createLogger:V};t.ZP=G},9662:function(e,t,n){var r=n(614),i=n(6330),o=TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not a function")}},6077:function(e,t,n){var r=n(614),i=String,o=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw o("Can't set "+i(e)+" as a prototype")}},5787:function(e,t,n){var r=n(7976),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw i("Incorrect invocation")}},9670:function(e,t,n){var r=n(111),i=String,o=TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not an object")}},3013:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(e,t,n){"use strict";var r,i,o,s=n(3013),a=n(9781),c=n(7854),u=n(614),l=n(111),h=n(2597),d=n(648),f=n(6330),p=n(8880),m=n(8052),_=n(7045),v=n(7976),g=n(9518),y=n(7674),w=n(5112),b=n(9711),C=n(9909),I=C.enforce,k=C.get,T=c.Int8Array,S=T&&T.prototype,E=c.Uint8ClampedArray,O=E&&E.prototype,x=T&&g(T),P=S&&g(S),R=Object.prototype,D=c.TypeError,N=w("toStringTag"),A=b("TYPED_ARRAY_TAG"),M="TypedArrayConstructor",L=s&&!!y&&"Opera"!==d(c.opera),F=!1,j={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},$={BigInt64Array:8,BigUint64Array:8},U=function(e){if(!l(e))return!1;var t=d(e);return"DataView"===t||h(j,t)||h($,t)},W=function(e){var t=g(e);if(l(t)){var n=k(t);return n&&h(n,M)?n[M]:W(t)}},V=function(e){if(!l(e))return!1;var t=d(e);return h(j,t)||h($,t)},Y=function(e){if(V(e))return e;throw D("Target is not a typed array")},H=function(e){if(u(e)&&(!y||v(x,e)))return e;throw D(f(e)+" is not a typed array constructor")},q=function(e,t,n,r){if(a){if(n)for(var i in j){var o=c[i];if(o&&h(o.prototype,e))try{delete o.prototype[e]}catch(s){try{o.prototype[e]=t}catch(u){}}}P[e]&&!n||m(P,e,n?t:L&&S[e]||t,r)}},z=function(e,t,n){var r,i;if(a){if(y){if(n)for(r in j)if(i=c[r],i&&h(i,e))try{delete i[e]}catch(o){}if(x[e]&&!n)return;try{return m(x,e,n?t:L&&x[e]||t)}catch(o){}}for(r in j)i=c[r],!i||i[e]&&!n||m(i,e,t)}};for(r in j)i=c[r],o=i&&i.prototype,o?I(o)[M]=i:L=!1;for(r in $)i=c[r],o=i&&i.prototype,o&&(I(o)[M]=i);if((!L||!u(x)||x===Function.prototype)&&(x=function(){throw D("Incorrect invocation")},L))for(r in j)c[r]&&y(c[r],x);if((!L||!P||P===R)&&(P=x.prototype,L))for(r in j)c[r]&&y(c[r].prototype,P);if(L&&g(O)!==P&&y(O,P),a&&!h(P,N))for(r in F=!0,_(P,N,{configurable:!0,get:function(){return l(this)?this[A]:void 0}}),j)c[r]&&p(c[r],A,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:L,TYPED_ARRAY_TAG:F&&A,aTypedArray:Y,aTypedArrayConstructor:H,exportTypedArrayMethod:q,exportTypedArrayStaticMethod:z,getTypedArrayConstructor:W,isView:U,isTypedArray:V,TypedArray:x,TypedArrayPrototype:P}},7745:function(e,t,n){var r=n(6244);e.exports=function(e,t){var n=0,i=r(t),o=new e(i);while(i>n)o[n]=t[n++];return o}},1318:function(e,t,n){var r=n(5656),i=n(1400),o=n(6244),s=function(e){return function(t,n,s){var a,c=r(t),u=o(c),l=i(s,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},3658:function(e,t,n){"use strict";var r=n(9781),i=n(3157),o=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!s(e,"length").writable)throw o("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},206:function(e,t,n){var r=n(1702);e.exports=r([].slice)},1843:function(e,t,n){var r=n(6244);e.exports=function(e,t){for(var n=r(e),i=new t(n),o=0;o<n;o++)i[o]=e[n-o-1];return i}},1572:function(e,t,n){var r=n(6244),i=n(9303),o=RangeError;e.exports=function(e,t,n,s){var a=r(e),c=i(n),u=c<0?a+c:c;if(u>=a||u<0)throw o("Incorrect index");for(var l=new t(a),h=0;h<a;h++)l[h]=h===u?s:e[h];return l}},4326:function(e,t,n){var r=n(1702),i=r({}.toString),o=r("".slice);e.exports=function(e){return o(i(e),8,-1)}},648:function(e,t,n){var r=n(1694),i=n(614),o=n(4326),s=n(5112),a=s("toStringTag"),c=Object,u="Arguments"==o(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:u?o(t):"Object"==(r=o(t))&&i(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(2597),i=n(3887),o=n(1236),s=n(3070);e.exports=function(e,t,n){for(var a=i(t),c=s.f,u=o.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},8544:function(e,t,n){var r=n(7293);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},8880:function(e,t,n){var r=n(9781),i=n(3070),o=n(9114);e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},7045:function(e,t,n){var r=n(6339),i=n(3070);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),i.f(e,t,n)}},8052:function(e,t,n){var r=n(614),i=n(3070),o=n(6339),s=n(3072);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&o(n,u,a),a.global)c?e[t]=n:s(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),i=n(111),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},7207:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},9363:function(e){e.exports="function"==typeof Bun&&Bun&&"string"==typeof Bun.version},6833:function(e,t,n){var r=n(8113);e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},5268:function(e,t,n){var r=n(4326);e.exports="undefined"!=typeof process&&"process"==r(process)},8113:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(e,t,n){var r,i,o=n(7854),s=n(8113),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(e,t,n){var r=n(1702),i=Error,o=r("".replace),s=function(e){return String(i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(s);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=o(e,a,"");return e}},2109:function(e,t,n){var r=n(7854),i=n(1236).f,o=n(8880),s=n(8052),a=n(3072),c=n(9920),u=n(4705);e.exports=function(e,t){var n,l,h,d,f,p,m=e.target,_=e.global,v=e.stat;if(l=_?r:v?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(_?h:m+(v?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&o(f,"sham",!0),s(l,h,f,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},2104:function(e,t,n){var r=n(4374),i=Function.prototype,o=i.apply,s=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?s.bind(o):function(){return s.apply(o,arguments)})},9974:function(e,t,n){var r=n(1470),i=n(9662),o=n(4374),s=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:o?s(e,t):function(){return e.apply(t,arguments)}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(e,t,n){var r=n(9781),i=n(2597),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},5668:function(e,t,n){var r=n(1702),i=n(9662);e.exports=function(e,t,n){try{return r(i(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(o){}}},1470:function(e,t,n){var r=n(4326),i=n(1702);e.exports=function(e){if("Function"===r(e))return i(e)}},1702:function(e,t,n){var r=n(4374),i=Function.prototype,o=i.call,s=r&&i.bind.bind(o,o);e.exports=r?s:function(e){return function(){return o.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),i=n(614),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662),i=n(8554);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||this||Function("return this")()},2597:function(e,t,n){var r=n(1702),i=n(7908),o=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},3501:function(e){e.exports={}},490:function(e,t,n){var r=n(5005);e.exports=r("document","documentElement")},4664:function(e,t,n){var r=n(9781),i=n(7293),o=n(317);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),i=n(7293),o=n(4326),s=Object,a=r("".split);e.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?a(e,""):s(e)}:s},9587:function(e,t,n){var r=n(614),i=n(111),o=n(7674);e.exports=function(e,t,n){var s,a;return o&&r(s=t.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(e,a),e}},2788:function(e,t,n){var r=n(1702),i=n(614),o=n(5465),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return s(e)}),e.exports=o.inspectSource},9909:function(e,t,n){var r,i,o,s=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),h=n(5465),d=n(6200),f=n(3501),p="Object already initialized",m=a.TypeError,_=a.WeakMap,v=function(e){return o(e)?i(e):r(e,{})},g=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(s||h.state){var y=h.state||(h.state=new _);y.get=y.get,y.has=y.has,y.set=y.set,r=function(e,t){if(y.has(e))throw m(p);return t.facade=e,y.set(e,t),t},i=function(e){return y.get(e)||{}},o=function(e){return y.has(e)}}else{var w=d("state");f[w]=!0,r=function(e,t){if(l(e,w))throw m(p);return t.facade=e,u(e,w,t),t},i=function(e){return l(e,w)?e[w]:{}},o=function(e){return l(e,w)}}e.exports={set:r,get:i,has:o,enforce:v,getterFor:g}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},4067:function(e,t,n){var r=n(648);e.exports=function(e){var t=r(e);return"BigInt64Array"==t||"BigUint64Array"==t}},614:function(e,t,n){var r=n(4154),i=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),i=n(614),o=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";e.exports=s},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,t,n){var r=n(614),i=n(4154),o=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===o}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),i=n(614),o=n(7976),s=n(3307),a=Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&o(t.prototype,a(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(1702),i=n(7293),o=n(614),s=n(2597),a=n(9781),c=n(6530).CONFIGURABLE,u=n(2788),l=n(9909),h=l.enforce,d=l.get,f=String,p=Object.defineProperty,m=r("".slice),_=r("".replace),v=r([].join),g=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),y=String(String).split("String"),w=e.exports=function(e,t,n){"Symbol("===m(f(t),0,7)&&(t="["+_(f(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!s(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),g&&n&&s(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=h(e);return s(r,"source")||(r.source=v(y,"string"==typeof t?t:"")),e};Function.prototype.toString=w((function(){return o(this)&&d(this).source||u(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},3070:function(e,t,n){var r=n(9781),i=n(4664),o=n(3353),s=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?o?function(e,t,n){if(s(e),t=a(t),s(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=l(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(s(e),t=a(t),s(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),i=n(6916),o=n(5296),s=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return s(!i(o.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},9518:function(e,t,n){var r=n(2597),i=n(614),o=n(7908),s=n(6200),a=n(8544),c=s("IE_PROTO"),u=Object,l=u.prototype;e.exports=a?u.getPrototypeOf:function(e){var t=o(e);if(r(t,c))return t[c];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof u?l:null}},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),i=n(2597),o=n(5656),s=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=o(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~s(l,n)||c(l,n));return l}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(5668),i=n(9670),o=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(6916),i=n(614),o=n(111),s=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!o(a=r(n,e)))return a;if(i(n=e.valueOf)&&!o(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!o(a=r(n,e)))return a;throw s("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),i=n(1702),o=n(8006),s=n(5181),a=n(9670),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=s.f;return n?c(t,n(e)):t}},4488:function(e,t,n){var r=n(8554),i=TypeError;e.exports=function(e){if(r(e))throw i("Can't call method on "+e);return e}},7152:function(e,t,n){"use strict";var r=n(7854),i=n(2104),o=n(614),s=n(9363),a=n(8113),c=n(206),u=n(8053),l=r.Function,h=/MSIE .\./.test(a)||s&&function(){var e=r.Bun.version.split(".");return e.length<3||0==e[0]&&(e[1]<3||3==e[1]&&0==e[2])}();e.exports=function(e,t){var n=t?2:1;return h?function(r,s){var a=u(arguments.length,1)>n,h=o(r)?r:l(r),d=a?c(arguments,n):[],f=a?function(){i(h,this,d)}:h;return t?e(f,s):e(f)}:e}},6200:function(e,t,n){var r=n(2309),i=n(9711),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},5465:function(e,t,n){var r=n(7854),i=n(3072),o="__core-js_shared__",s=r[o]||i(o,{});e.exports=s},2309:function(e,t,n){var r=n(1913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.30.2",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.2/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),i=n(7293),o=n(7854),s=o.String;e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!s(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},261:function(e,t,n){var r,i,o,s,a=n(7854),c=n(2104),u=n(9974),l=n(614),h=n(2597),d=n(7293),f=n(490),p=n(206),m=n(317),_=n(8053),v=n(6833),g=n(5268),y=a.setImmediate,w=a.clearImmediate,b=a.process,C=a.Dispatch,I=a.Function,k=a.MessageChannel,T=a.String,S=0,E={},O="onreadystatechange";d((function(){r=a.location}));var x=function(e){if(h(E,e)){var t=E[e];delete E[e],t()}},P=function(e){return function(){x(e)}},R=function(e){x(e.data)},D=function(e){a.postMessage(T(e),r.protocol+"//"+r.host)};y&&w||(y=function(e){_(arguments.length,1);var t=l(e)?e:I(e),n=p(arguments,1);return E[++S]=function(){c(t,void 0,n)},i(S),S},w=function(e){delete E[e]},g?i=function(e){b.nextTick(P(e))}:C&&C.now?i=function(e){C.now(P(e))}:k&&!v?(o=new k,s=o.port2,o.port1.onmessage=R,i=u(s.postMessage,s)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!d(D)?(i=D,a.addEventListener("message",R,!1)):i=O in m("script")?function(e){f.appendChild(m("script"))[O]=function(){f.removeChild(this),x(e)}}:function(e){setTimeout(P(e),0)}),e.exports={set:y,clear:w}},1400:function(e,t,n){var r=n(9303),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},4599:function(e,t,n){var r=n(7593),i=TypeError;e.exports=function(e){var t=r(e,"number");if("number"==typeof t)throw i("Can't convert number to bigint");return BigInt(t)}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),i=Object;e.exports=function(e){return i(r(e))}},7593:function(e,t,n){var r=n(6916),i=n(111),o=n(2190),s=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||o(e))return e;var n,c=s(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||o(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){var r=n(7593),i=n(2190);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},1340:function(e,t,n){var r=n(648),i=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),i=0,o=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++i+o,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),i=n(7293);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8053:function(e){var t=TypeError;e.exports=function(e,n){if(e<n)throw t("Not enough arguments");return e}},4811:function(e,t,n){var r=n(7854),i=n(614),o=r.WeakMap;e.exports=i(o)&&/native code/.test(String(o))},5112:function(e,t,n){var r=n(7854),i=n(2309),o=n(2597),s=n(9711),a=n(6293),c=n(3307),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||s;e.exports=function(e){return o(l,e)||(l[e]=a&&o(u,e)?u[e]:h("Symbol."+e)),l[e]}},7658:function(e,t,n){"use strict";var r=n(2109),i=n(7908),o=n(6244),s=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=o(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return s(t,n),n}})},1439:function(e,t,n){"use strict";var r=n(1843),i=n(260),o=i.aTypedArray,s=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;s("toReversed",(function(){return r(o(this),a(this))}))},7585:function(e,t,n){"use strict";var r=n(260),i=n(1702),o=n(9662),s=n(7745),a=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,l=i(r.TypedArrayPrototype.sort);u("toSorted",(function(e){void 0!==e&&o(e);var t=a(this),n=s(c(t),t);return l(n,e)}))},5315:function(e,t,n){"use strict";var r=n(1572),i=n(260),o=n(4067),s=n(9303),a=n(4599),c=i.aTypedArray,u=i.getTypedArrayConstructor,l=i.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();l("with",{with:function(e,t){var n=c(this),i=s(e),l=o(n)?a(t):+t;return r(n,u(n),i,l)}}["with"],!h)},3767:function(e,t,n){n(1439)},8585:function(e,t,n){n(7585)},8696:function(e,t,n){n(5315)},1091:function(e,t,n){var r=n(2109),i=n(7854),o=n(261).clear;r({global:!0,bind:!0,enumerable:!0,forced:i.clearImmediate!==o},{clearImmediate:o})},2801:function(e,t,n){"use strict";var r=n(2109),i=n(7854),o=n(5005),s=n(9114),a=n(3070).f,c=n(2597),u=n(5787),l=n(9587),h=n(6277),d=n(3678),f=n(1060),p=n(9781),m=n(1913),_="DOMException",v=o("Error"),g=o(_),y=function(){u(this,w);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),r=new g(t,n),i=v(t);return i.name=_,a(r,"stack",s(1,f(i.stack,1))),l(r,this,y),r},w=y.prototype=g.prototype,b="stack"in v(_),C="stack"in new g(1,2),I=g&&p&&Object.getOwnPropertyDescriptor(i,_),k=!!I&&!(I.writable&&I.configurable),T=b&&!k&&!C;r({global:!0,constructor:!0,forced:m||T},{DOMException:T?y:g});var S=o(_),E=S.prototype;if(E.constructor!==S)for(var O in m||a(E,"constructor",s(1,S)),d)if(c(d,O)){var x=d[O],P=x.s;c(S,P)||a(S,P,s(6,x.c))}},4633:function(e,t,n){n(1091),n(2986)},2986:function(e,t,n){var r=n(2109),i=n(7854),o=n(261).set,s=n(7152),a=i.setImmediate?s(o,!1):o;r({global:!0,bind:!0,enumerable:!0,forced:i.setImmediate!==a},{setImmediate:a})},3579:function(e,t,n){"use strict";n.d(t,{Jn:function(){return me},qX:function(){return he},Xd:function(){return le},Mq:function(){return ve},ZF:function(){return _e},KN:function(){return ge}});n(7658);var r=n(1322),i=n(4508),o=n(2348);n(2801);const s=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function _(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(C(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),m.set(t,e),t}function v(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));d.set(e,t)}let g={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return C(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function y(e){g=e(g)}function w(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(I(this),t),C(h.get(this))}:function(...t){return C(e.apply(I(this),t))}:function(t,...n){const r=e.call(I(this),t,...n);return f.set(r,t.sort?t.sort():[t]),C(r)}}function b(e){return"function"===typeof e?w(e):(e instanceof IDBTransaction&&v(e),s(e,u())?new Proxy(e,g):e)}function C(e){if(e instanceof IDBRequest)return _(e);if(p.has(e))return p.get(e);const t=b(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const I=e=>m.get(e);function k(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=C(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(C(s.result),e.oldVersion,e.newVersion,C(s.transaction),e)})),n&&s.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const T=["get","getKey","getAll","getAllKeys","count"],S=["put","add","delete","clear"],E=new Map;function O(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(E.get(t))return E.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=S.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!T.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]};return E.set(t,o),o}y((e=>({...e,get:(t,n,r)=>O(t,n)||e.get(t,n,r),has:(t,n)=>!!O(t,n)||e.has(t,n)})));
/**
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
 */
class x{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(P(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function P(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const R="@firebase/app",D="0.9.15",N=new i.Yd("@firebase/app"),A="@firebase/app-compat",M="@firebase/analytics-compat",L="@firebase/analytics",F="@firebase/app-check-compat",j="@firebase/app-check",$="@firebase/auth",U="@firebase/auth-compat",W="@firebase/database",V="@firebase/database-compat",Y="@firebase/functions",H="@firebase/functions-compat",q="@firebase/installations",z="@firebase/installations-compat",B="@firebase/messaging",G="@firebase/messaging-compat",K="@firebase/performance",J="@firebase/performance-compat",Q="@firebase/remote-config",Z="@firebase/remote-config-compat",X="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="10.1.0",oe="[DEFAULT]",se={[R]:"fire-core",[A]:"fire-core-compat",[L]:"fire-analytics",[M]:"fire-analytics-compat",[j]:"fire-app-check",[F]:"fire-app-check-compat",[$]:"fire-auth",[U]:"fire-auth-compat",[W]:"fire-rtdb",[V]:"fire-rtdb-compat",[Y]:"fire-fn",[H]:"fire-fn-compat",[q]:"fire-iid",[z]:"fire-iid-compat",[B]:"fire-fcm",[G]:"fire-fcm-compat",[K]:"fire-perf",[J]:"fire-perf-compat",[Q]:"fire-rc",[Z]:"fire-rc-compat",[X]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){N.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e){const t=e.name;if(ce.has(t))return N.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function he(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
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
 */
const de={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fe=new o.LL("app","Firebase",de);
/**
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
 */
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fe.create("app-deleted",{appName:this._name})}}
/**
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
 */const me=ie;function _e(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:oe,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!==typeof s||!s)throw fe.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.aH)()),!n)throw fe.create("no-options");const a=ae.get(s);if(a){if((0,o.vZ)(n,a.options)&&(0,o.vZ)(i,a.config))return a;throw fe.create("duplicate-app",{appName:s})}const c=new r.H0(s);for(const r of ce.values())c.addComponent(r);const u=new pe(n,i,c);return ae.set(s,u),u}function ve(e=oe){const t=ae.get(e);if(!t&&e===oe&&(0,o.aH)())return _e();if(!t)throw fe.create("no-app",{appName:e});return t}function ge(e,t,n){var i;let o=null!==(i=se[e])&&void 0!==i?i:e;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void N.warn(e.join(" "))}le(new r.wA(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}
/**
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
 */
const ye="firebase-heartbeat-database",we=1,be="firebase-heartbeat-store";let Ce=null;function Ie(){return Ce||(Ce=k(ye,we,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(be)}}}).catch((e=>{throw fe.create("idb-open",{originalErrorMessage:e.message})}))),Ce}async function ke(e){try{const t=await Ie(),n=await t.transaction(be).objectStore(be).get(Se(e));return n}catch(t){if(t instanceof o.ZR)N.warn(t.message);else{const e=fe.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});N.warn(e.message)}}}async function Te(e,t){try{const n=await Ie(),r=n.transaction(be,"readwrite"),i=r.objectStore(be);await i.put(t,Se(e)),await r.done}catch(n){if(n instanceof o.ZR)N.warn(n.message);else{const e=fe.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});N.warn(e.message)}}}function Se(e){return`${e.name}!${e.options.appId}`}
/**
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
 */const Ee=1024,Oe=2592e6;class xe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new De(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Pe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Oe})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Pe(),{heartbeatsToSend:t,unsentEntries:n}=Re(this._heartbeatsCache.heartbeats),r=(0,o.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Pe(){const e=new Date;return e.toISOString().substring(0,10)}function Re(e,t=Ee){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Ne(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ne(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class De{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.hl)()&&(0,o.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await ke(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Te(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Te(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ne(e){return(0,o.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */function Ae(e){le(new r.wA("platform-logger",(e=>new x(e)),"PRIVATE")),le(new r.wA("heartbeat",(e=>new xe(e)),"PRIVATE")),ge(R,D,e),ge(R,D,"esm2017"),ge("fire-js","")}Ae("")},1322:function(e,t,n){"use strict";n.d(t,{H0:function(){return u},wA:function(){return i}});var r=n(2348);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */const o="[DEFAULT]";
/**
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
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===o?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
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
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},4508:function(e,t,n){"use strict";n.d(t,{Yd:function(){return u},in:function(){return i}});n(7658);
/**
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
 */const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},4250:function(e,t,n){"use strict";n.d(t,{IH:function(){return Vt}});n(7658);var r=n(3579),i=n(4508),o=n(2348),s=n(1322);n(2801),n(3767),n(8585),n(8696);const a=(e,t)=>t.some((t=>e instanceof t));let c,u;function l(){return c||(c=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function h(){return u||(u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap,_=new WeakMap;function v(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(I(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&d.set(t,e)})).catch((()=>{})),_.set(t,e),t}function g(e){if(f.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));f.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return f.get(e);if("objectStoreNames"===t)return e.objectStoreNames||p.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function w(e){y=e(y)}function b(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?h().includes(e)?function(...t){return e.apply(k(this),t),I(d.get(this))}:function(...t){return I(e.apply(k(this),t))}:function(t,...n){const r=e.call(k(this),t,...n);return p.set(r,t.sort?t.sort():[t]),I(r)}}function C(e){return"function"===typeof e?b(e):(e instanceof IDBTransaction&&g(e),a(e,l())?new Proxy(e,y):e)}function I(e){if(e instanceof IDBRequest)return v(e);if(m.has(e))return m.get(e);const t=C(e);return t!==e&&(m.set(e,t),_.set(t,e)),t}const k=e=>_.get(e);function T(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=I(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(I(s.result),e.oldVersion,e.newVersion,I(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],E=["put","add","delete","clear"],O=new Map;function x(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(O.get(t))return O.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=E.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]};return O.set(t,o),o}w((e=>({...e,get:(t,n,r)=>x(t,n)||e.get(t,n,r),has:(t,n)=>!!x(t,n)||e.has(t,n)})));const P="@firebase/installations",R="0.6.4",D=1e4,N=`w:${R}`,A="FIS_v2",M="https://firebaseinstallations.googleapis.com/v1",L=36e5,F="installations",j="Installations",$={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},U=new o.LL(F,j,$);function W(e){return e instanceof o.ZR&&e.code.includes("request-failed")}
/**
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
 */function V({projectId:e}){return`${M}/projects/${e}/installations`}function Y(e){return{token:e.token,requestStatus:2,expiresIn:G(e.expiresIn),creationTime:Date.now()}}async function H(e,t){const n=await t.json(),r=n.error;return U.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function q({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function z(e,{refreshToken:t}){const n=q(e);return n.append("Authorization",K(t)),n}async function B(e){const t=await e();return t.status>=500&&t.status<600?e():t}function G(e){return Number(e.replace("s","000"))}function K(e){return`${A} ${e}`}
/**
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
 */async function J({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=V(e),i=q(e),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const s={fid:n,authVersion:A,appId:e.appId,sdkVersion:N},a={method:"POST",headers:i,body:JSON.stringify(s)},c=await B((()=>fetch(r,a)));if(c.ok){const e=await c.json(),t={fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:Y(e.authToken)};return t}throw await H("Create Installation",c)}
/**
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
 */function Q(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
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
 */function Z(e){const t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}
/**
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
 */const X=/^[cdef][\w-]{21}$/,ee="";function te(){try{const e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;const n=ne(e);return X.test(n)?n:ee}catch(e){return ee}}function ne(e){const t=Z(e);return t.substr(0,22)}
/**
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
 */function re(e){return`${e.appName}!${e.appId}`}
/**
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
 */const ie=new Map;function oe(e,t){const n=re(e);se(n,t),ae(n,t)}function se(e,t){const n=ie.get(e);if(n)for(const r of n)r(t)}function ae(e,t){const n=ue();n&&n.postMessage({key:e,fid:t}),le()}let ce=null;function ue(){return!ce&&"BroadcastChannel"in self&&(ce=new BroadcastChannel("[Firebase] FID Change"),ce.onmessage=e=>{se(e.data.key,e.data.fid)}),ce}function le(){0===ie.size&&ce&&(ce.close(),ce=null)}
/**
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
 */const he="firebase-installations-database",de=1,fe="firebase-installations-store";let pe=null;function me(){return pe||(pe=T(he,de,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(fe)}}})),pe}async function _e(e,t){const n=re(e),r=await me(),i=r.transaction(fe,"readwrite"),o=i.objectStore(fe),s=await o.get(n);return await o.put(t,n),await i.done,s&&s.fid===t.fid||oe(e,t.fid),t}async function ve(e){const t=re(e),n=await me(),r=n.transaction(fe,"readwrite");await r.objectStore(fe).delete(t),await r.done}async function ge(e,t){const n=re(e),r=await me(),i=r.transaction(fe,"readwrite"),o=i.objectStore(fe),s=await o.get(n),a=t(s);return void 0===a?await o.delete(n):await o.put(a,n),await i.done,!a||s&&s.fid===a.fid||oe(e,a.fid),a}
/**
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
 */async function ye(e){let t;const n=await ge(e.appConfig,(n=>{const r=we(n),i=be(e,r);return t=i.registrationPromise,i.installationEntry}));return n.fid===ee?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function we(e){const t=e||{fid:te(),registrationStatus:0};return Te(t)}function be(e,t){if(0===t.registrationStatus){if(!navigator.onLine){const e=Promise.reject(U.create("app-offline"));return{installationEntry:t,registrationPromise:e}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Ce(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Ie(e)}:{installationEntry:t}}async function Ce(e,t){try{const n=await J(e,t);return _e(e.appConfig,n)}catch(n){throw W(n)&&409===n.customData.serverCode?await ve(e.appConfig):await _e(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Ie(e){let t=await ke(e.appConfig);while(1===t.registrationStatus)await Q(100),t=await ke(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await ye(e);return n||t}return t}function ke(e){return ge(e,(e=>{if(!e)throw U.create("installation-not-found");return Te(e)}))}function Te(e){return Se(e)?{fid:e.fid,registrationStatus:0}:e}function Se(e){return 1===e.registrationStatus&&e.registrationTime+D<Date.now()}
/**
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
 */async function Ee({appConfig:e,heartbeatServiceProvider:t},n){const r=Oe(e,n),i=z(e,n),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const s={installation:{sdkVersion:N,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},c=await B((()=>fetch(r,a)));if(c.ok){const e=await c.json(),t=Y(e);return t}throw await H("Generate Auth Token",c)}function Oe(e,{fid:t}){return`${V(e)}/${t}/authTokens:generate`}
/**
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
 */async function xe(e,t=!1){let n;const r=await ge(e.appConfig,(r=>{if(!Ne(r))throw U.create("not-registered");const i=r.authToken;if(!t&&Ae(i))return r;if(1===i.requestStatus)return n=Pe(e,t),r;{if(!navigator.onLine)throw U.create("app-offline");const t=Le(r);return n=De(e,t),t}})),i=n?await n:r.authToken;return i}async function Pe(e,t){let n=await Re(e.appConfig);while(1===n.authToken.requestStatus)await Q(100),n=await Re(e.appConfig);const r=n.authToken;return 0===r.requestStatus?xe(e,t):r}function Re(e){return ge(e,(e=>{if(!Ne(e))throw U.create("not-registered");const t=e.authToken;return Fe(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}async function De(e,t){try{const n=await Ee(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await _e(e.appConfig,r),n}catch(n){if(!W(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await _e(e.appConfig,n)}else await ve(e.appConfig);throw n}}function Ne(e){return void 0!==e&&2===e.registrationStatus}function Ae(e){return 2===e.requestStatus&&!Me(e)}function Me(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+L}function Le(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Fe(e){return 1===e.requestStatus&&e.requestTime+D<Date.now()}
/**
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
 */async function je(e){const t=e,{installationEntry:n,registrationPromise:r}=await ye(t);return r?r.catch(console.error):xe(t).catch(console.error),n.fid}
/**
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
 */async function $e(e,t=!1){const n=e;await Ue(n);const r=await xe(n,t);return r.token}async function Ue(e){const{registrationPromise:t}=await ye(e);t&&await t}
/**
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
 */
/**
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
 */
function We(e){if(!e||!e.options)throw Ve("App Configuration");if(!e.name)throw Ve("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ve(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ve(e){return U.create("missing-app-config-values",{valueName:e})}
/**
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
 */const Ye="installations",He="installations-internal",qe=e=>{const t=e.getProvider("app").getImmediate(),n=We(t),i=(0,r.qX)(t,"heartbeat"),o={app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()};return o},ze=e=>{const t=e.getProvider("app").getImmediate(),n=(0,r.qX)(t,Ye).getImmediate(),i={getId:()=>je(n),getToken:e=>$e(n,e)};return i};function Be(){(0,r.Xd)(new s.wA(Ye,qe,"PUBLIC")),(0,r.Xd)(new s.wA(He,ze,"PRIVATE"))}Be(),(0,r.KN)(P,R),(0,r.KN)(P,R,"esm2017");
/**
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
 */
const Ge="analytics",Ke="firebase_id",Je="origin",Qe=6e4,Ze="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Xe="https://www.googletagmanager.com/gtag/js",et=new i.Yd("@firebase/analytics"),tt={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},nt=new o.LL("analytics","Analytics",tt);
/**
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
 */
function rt(e){if(!e.startsWith(Xe)){const t=nt.create("invalid-gtag-resource",{gtagURL:e});return et.warn(t.message),""}return e}function it(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function ot(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function st(e,t){const n=ot("firebase-js-sdk-policy",{createScriptURL:rt}),r=document.createElement("script"),i=`${Xe}?l=${e}&id=${t}`;r.src=n?null===n||void 0===n?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function at(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function ct(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const e=await it(n),r=e.find((e=>e.measurementId===i));r&&await t[r.appId]}}catch(a){et.error(a)}e("config",i,o)}async function ut(e,t,n,r,i){try{let o=[];if(i&&i["send_to"]){let e=i["send_to"];Array.isArray(e)||(e=[e]);const r=await it(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),i=e&&t[e.appId];if(!i){o=[];break}o.push(i)}}0===o.length&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){et.error(o)}}function lt(e,t,n,r){async function i(i,...o){try{if("event"===i){const[r,i]=o;await ut(e,t,n,r,i)}else if("config"===i){const[i,s]=o;await ct(e,t,n,r,i,s)}else if("consent"===i){const[t]=o;e("consent","update",t)}else if("get"===i){const[t,n,r]=o;e("get",t,n,r)}else if("set"===i){const[t]=o;e("set",t)}else e(i,...o)}catch(s){et.error(s)}}return i}function ht(e,t,n,r,i){let o=function(...e){window[r].push(arguments)};return window[i]&&"function"===typeof window[i]&&(o=window[i]),window[i]=lt(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function dt(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Xe)&&n.src.includes(e))return n;return null}
/**
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
 */const ft=30,pt=1e3;class mt{constructor(e={},t=pt){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const _t=new mt;function vt(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function gt(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:vt(r)},o=Ze.replace("{app-id}",n),s=await fetch(o,i);if(200!==s.status&&304!==s.status){let e="";try{const n=await s.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(a){}throw nt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:e})}return s.json()}async function yt(e,t=_t,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw nt.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw nt.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new It;return setTimeout((async()=>{a.abort()}),void 0!==n?n:Qe),wt({appId:r,apiKey:i,measurementId:o},s,a,t)}async function wt(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=_t){var s;const{appId:a,measurementId:c}=e;try{await bt(r,t)}catch(u){if(c)return et.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===u||void 0===u?void 0:u.message}]`),{appId:a,measurementId:c};throw u}try{const t=await gt(e);return i.deleteThrottleMetadata(a),t}catch(u){const t=u;if(!Ct(t)){if(i.deleteThrottleMetadata(a),c)return et.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===t||void 0===t?void 0:t.message}]`),{appId:a,measurementId:c};throw u}const l=503===Number(null===(s=null===t||void 0===t?void 0:t.customData)||void 0===s?void 0:s.httpStatus)?(0,o.$s)(n,i.intervalMillis,ft):(0,o.$s)(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return i.setThrottleMetadata(a,h),et.debug(`Calling attemptFetch again in ${l} millis`),wt(e,h,r,i)}}function bt(e,t){return new Promise(((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener((()=>{clearTimeout(o),r(nt.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}function Ct(e){if(!(e instanceof o.ZR)||!e.customData)return!1;const t=Number(e.customData["httpStatus"]);return 429===t||500===t||503===t||504===t}class It{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
/**
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
 */let kt,Tt;async function St(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t,o=Object.assign(Object.assign({},r),{send_to:i});e("event",n,o)}}function Et(e){Tt=e}function Ot(e){kt=e}
/**
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
 */async function xt(){if(!(0,o.hl)())return et.warn(nt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await(0,o.eu)()}catch(e){return et.warn(nt.create("indexeddb-unavailable",{errorInfo:null===e||void 0===e?void 0:e.toString()}).message),!1}return!0}async function Pt(e,t,n,r,i,o,s){var a;const c=yt(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&et.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>et.error(e))),t.push(c);const u=xt().then((e=>e?r.getId():void 0)),[l,h]=await Promise.all([c,u]);dt(o)||st(o,l.measurementId),Tt&&(i("consent","default",Tt),Et(void 0)),i("js",new Date);const d=null!==(a=null===s||void 0===s?void 0:s.config)&&void 0!==a?a:{};return d[Je]="firebase",d.update=!0,null!=h&&(d[Ke]=h),i("config",l.measurementId,d),kt&&(i("set",kt),Ot(void 0)),l.measurementId}
/**
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
 */class Rt{constructor(e){this.app=e}_delete(){return delete Dt[this.app.options.appId],Promise.resolve()}}let Dt={},Nt=[];const At={};let Mt,Lt,Ft="dataLayer",jt="gtag",$t=!1;function Ut(){const e=[];if((0,o.ru)()&&e.push("This is a browser extension environment."),(0,o.zI)()||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=nt.create("invalid-analytics-context",{errorInfo:t});et.warn(n.message)}}function Wt(e,t,n){Ut();const r=e.options.appId;if(!r)throw nt.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw nt.create("no-api-key");et.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=Dt[r])throw nt.create("already-exists",{id:r});if(!$t){at(Ft);const{wrappedGtag:e,gtagCore:t}=ht(Dt,Nt,At,Ft,jt);Lt=e,Mt=t,$t=!0}Dt[r]=Pt(e,Nt,At,t,Mt,Ft,n);const i=new Rt(e);return i}function Vt(e=(0,r.Mq)()){e=(0,o.m9)(e);const t=(0,r.qX)(e,Ge);return t.isInitialized()?t.getImmediate():Yt(e)}function Yt(e,t={}){const n=(0,r.qX)(e,Ge);if(n.isInitialized()){const e=n.getImmediate();if((0,o.vZ)(t,n.getOptions()))return e;throw nt.create("already-initialized")}const i=n.initialize({options:t});return i}function Ht(e,t,n,r){e=(0,o.m9)(e),St(Lt,Dt[e.app.options.appId],t,n,r).catch((e=>et.error(e)))}const qt="@firebase/analytics",zt="0.10.0";function Bt(){function e(e){try{const t=e.getProvider(Ge).getImmediate();return{logEvent:(e,n,r)=>Ht(t,e,n,r)}}catch(t){throw nt.create("interop-component-reg-failed",{reason:t})}}(0,r.Xd)(new s.wA(Ge,((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return Wt(n,r,t)}),"PUBLIC")),(0,r.Xd)(new s.wA("analytics-internal",e,"PRIVATE")),(0,r.KN)(qt,zt),(0,r.KN)(qt,zt,"esm2017")}Bt()},5467:function(e,t,n){"use strict";n.d(t,{ZF:function(){return r.ZF}});var r=n(3579),i="firebase",o="10.1.0";
/**
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
 */
(0,r.KN)(i,o,"app")},1893:function(e,t,n){"use strict";n.d(t,{v0:function(){return Dr}});n(7658);var r=n(2348),i=n(3579);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var s=n(4508),a=n(1322);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r.LL("auth","Firebase",c()),h=new s.Yd("@firebase/auth");function d(e,...t){h.logLevel<=s["in"].WARN&&h.warn(`Auth (${i.Jn}): ${e}`,...t)}function f(e,...t){h.logLevel<=s["in"].ERROR&&h.error(`Auth (${i.Jn}): ${e}`,...t)}
/**
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
 */function p(e,...t){throw v(e,...t)}function m(e,...t){return v(e,...t)}function _(e,t,n){const i=Object.assign(Object.assign({},u()),{[t]:n}),o=new r.LL("auth","Firebase",i);return o.create(t,{appName:e.name})}function v(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function g(e,t,...n){if(!e)throw v(t,...n)}function y(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function w(e,t){e||y(t)}
/**
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
 */function b(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function C(){return"http:"===I()||"https:"===I()}function I(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */function k(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(C()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function T(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
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
 */class S{constructor(e,t){this.shortDelay=e,this.longDelay=t,w(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return k()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function E(e,t){w(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
 */class O{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const x={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},P=new S(3e4,6e4);
/**
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
 */function R(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function D(e,t,n,i,o={}){return N(e,o,(async()=>{let o={},s={};i&&("GET"===t?s=i:o={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),O.fetch()(M(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},o))}))}async function N(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},x),t);try{const t=new L(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw F(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw F(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw F(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw F(e,"user-disabled",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw _(e,a,s);p(e,a)}}catch(o){if(o instanceof r.ZR)throw o;p(e,"network-request-failed",{message:String(o)})}}async function A(e,t,n,r,i={}){const o=await D(e,t,n,r,i);return"mfaPendingCredential"in o&&p(e,"multi-factor-auth-required",{_serverResponse:o}),o}function M(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?E(e.config,i):`${e.config.apiScheme}://${i}`}class L{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(m(this.auth,"network-request-failed"))),P.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function F(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=m(e,t,r);return i.customData._tokenResponse=n,i}
/**
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
 */async function j(e,t){return D(e,"POST","/v1/accounts:delete",t)}async function $(e,t){return D(e,"POST","/v1/accounts:lookup",t)}
/**
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
 */function U(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
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
 */async function W(e,t=!1){const n=(0,r.m9)(e),i=await n.getIdToken(t),o=Y(i);g(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:U(V(o.auth_time)),issuedAtTime:U(V(o.iat)),expirationTime:U(V(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function V(e){return 1e3*Number(e)}function Y(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(o){return f("Caught error parsing JWT payload as JSON",null===o||void 0===o?void 0:o.toString()),null}}function H(e){const t=Y(e);return g(t,"internal-error"),g("undefined"!==typeof t.exp,"internal-error"),g("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
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
 */async function q(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.ZR&&z(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function z({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */class B{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
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
 */class G{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=U(this.lastLoginAt),this.creationTime=U(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function K(e){var t;const n=e.auth,r=await e.getIdToken(),i=await q(e,$(n,{idToken:r}));g(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?Z(o.providerUserInfo):[],a=Q(e.providerData,s),c=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new G(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function J(e){const t=(0,r.m9)(e);await K(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Q(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function Z(e){return e.map((e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
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
 */async function X(e,t){const n=await N(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=M(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",O.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
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
 */class ee{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g("undefined"!==typeof e.idToken,"internal-error"),g("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):H(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return g(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await X(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new ee;return n&&(g("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(g("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(g("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ee,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
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
 */function te(e,t){g("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ne{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new B(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new G(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await q(this,this.stsTokenManager.getToken(this.auth,e));return g(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return W(this,e)}reload(){return J(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ne(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await K(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await q(this,j(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,_=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:w,isAnonymous:b,providerData:C,stsTokenManager:I}=t;g(y&&I,e,"internal-error");const k=ee.fromJSON(this.name,I);g("string"===typeof y,e,"internal-error"),te(l,e.name),te(h,e.name),g("boolean"===typeof w,e,"internal-error"),g("boolean"===typeof b,e,"internal-error"),te(d,e.name),te(f,e.name),te(p,e.name),te(m,e.name),te(_,e.name),te(v,e.name);const T=new ne({uid:y,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:k,createdAt:_,lastLoginAt:v});return C&&Array.isArray(C)&&(T.providerData=C.map((e=>Object.assign({},e)))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,n=!1){const r=new ee;r.updateFromServerResponse(t);const i=new ne({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await K(i),i}}
/**
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
 */const re=new Map;function ie(e){w(e instanceof Function,"Expected a class definition");let t=re.get(e);return t?(w(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,re.set(e,t),t)}
/**
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
 */class oe{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}oe.type="NONE";const se=oe;
/**
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
 */function ae(e,t,n){return`firebase:${e}:${t}:${n}`}class ce{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ae(this.userKey,r.apiKey,i),this.fullPersistenceKey=ae("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ne._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ce(ie(se),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||ie(se);const o=ae(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(o);if(t){const n=ne._fromJSON(e,t);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(c){}}))),new ce(i,e,n)):new ce(i,e,n)}}
/**
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
 */function ue(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(fe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(le(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(me(t))return"Blackberry";if(_e(t))return"Webos";if(he(t))return"Safari";if((t.includes("chrome/")||de(t))&&!t.includes("edge/"))return"Chrome";if(pe(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function le(e=(0,r.z$)()){return/firefox\//i.test(e)}function he(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function de(e=(0,r.z$)()){return/crios\//i.test(e)}function fe(e=(0,r.z$)()){return/iemobile/i.test(e)}function pe(e=(0,r.z$)()){return/android/i.test(e)}function me(e=(0,r.z$)()){return/blackberry/i.test(e)}function _e(e=(0,r.z$)()){return/webos/i.test(e)}function ve(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ge(e=(0,r.z$)()){var t;return ve(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function ye(){return(0,r.w1)()&&10===document.documentMode}function we(e=(0,r.z$)()){return ve(e)||pe(e)||_e(e)||me(e)||/windows phone/i.test(e)||fe(e)}function be(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
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
 */function Ce(e,t=[]){let n;switch(e){case"Browser":n=ue((0,r.z$)());break;case"Worker":n=`${ue((0,r.z$)())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${o}`}
/**
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
 */async function Ie(e,t){return D(e,"GET","/v2/recaptchaConfig",R(e,t))}
/**
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
 */function ke(e){return void 0!==e&&void 0!==e.enterprise}class Te{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
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
 */function Se(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Ee(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=m("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Se().appendChild(r)}))}function Oe(e){return`__${e}${Math.floor(1e6*Math.random())}`}const xe="https://www.google.com/recaptcha/enterprise.js?render=",Pe="recaptcha-enterprise",Re="NO_RECAPTCHA";class De{constructor(e){this.type=Pe,this.auth=Le(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{Ie(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new Te(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;ke(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(Re)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&ke(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));Ee(xe+n).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function Ne(e,t,n,r=!1){const i=new De(e);let o;try{o=await i.verify(n)}catch(a){o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}
/**
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
 */class Ae{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
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
 */class Me{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fe(this),this.idTokenSubscription=new Fe(this),this.beforeStateQueue=new Ae(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ie(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ce.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null===r||void 0===r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==o||!(null===s||void 0===s?void 0:s.user)||(r=s.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(o)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await K(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=T()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&g(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ie(e))}))}async initializeRecaptchaConfig(){const e=await Ie(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Te(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){const e=new De(this);e.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ie(e)||this._popupRedirectResolver;g(t,this,"argument-error"),this.redirectPersistenceManager=await ce.create(this,[ie(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return g(o,this,"internal-error"),o.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ce(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&d(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function Le(e){return(0,r.m9)(e)}class Fe{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */function je(e,t){const n=(0,i.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==t&&void 0!==t?t:{}))return e;p(e,"already-initialized")}const o=n.initialize({options:t});return o}function $e(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ie);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function Ue(e,t,n){const r=Le(e);g(r._canInitEmulator,r,"emulator-config-failed"),g(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),o=We(t),{host:s,port:a}=Ve(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${o}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||He()}function We(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ve(e){const t=We(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Ye(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Ye(t)}}}function Ye(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function He(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
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
 */class qe{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return y("not implemented")}_getIdTokenResponse(e){return y("not implemented")}_linkToIdToken(e,t){return y("not implemented")}_getReauthenticationResolver(e){return y("not implemented")}}
/**
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
 */async function ze(e,t){return D(e,"POST","/v1/accounts:update",t)}
/**
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
 */
async function Be(e,t){return A(e,"POST","/v1/accounts:signInWithPassword",R(e,t))}
/**
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
 */
async function Ge(e,t){return A(e,"POST","/v1/accounts:signInWithEmailLink",R(e,t))}async function Ke(e,t){return A(e,"POST","/v1/accounts:signInWithEmailLink",R(e,t))}
/**
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
 */class Je extends qe{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Je(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Je(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await Ne(e,n,"signInWithPassword");return Be(e,t)}return Be(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await Ne(e,n,"signInWithPassword");return Be(e,t)}return Promise.reject(t)}));case"emailLink":return Ge(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return ze(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ke(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
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
 */async function Qe(e,t){return A(e,"POST","/v1/accounts:signInWithIdp",R(e,t))}
/**
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
 */const Ze="http://localhost";class Xe extends qe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Xe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Xe(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Qe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Qe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qe(e,t)}buildRequest(){const e={requestUri:Ze,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
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
 */async function et(e,t){return D(e,"POST","/v1/accounts:sendVerificationCode",R(e,t))}async function tt(e,t){return A(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,t))}async function nt(e,t){const n=await A(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,t));if(n.temporaryProof)throw F(e,"account-exists-with-different-credential",n);return n}const rt={["USER_NOT_FOUND"]:"user-not-found"};async function it(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return A(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,n),rt)}
/**
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
 */class ot extends qe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ot({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ot({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return tt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return nt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return it(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new ot({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
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
 */function st(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function at(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(e))["deep_link_id"],o=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return o||i||n||t||e}class ct{constructor(e){var t,n,i,o,s,a;const c=(0,r.zd)((0,r.pd)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=st(null!==(i=c["mode"])&&void 0!==i?i:null);g(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=at(e);try{return new ct(t)}catch(n){return null}}}
/**
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
 */
class ut{constructor(){this.providerId=ut.PROVIDER_ID}static credential(e,t){return Je._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ct.parseLink(t);return g(n,"argument-error"),Je._fromEmailAndCode(e,n.code,n.tenantId)}}ut.PROVIDER_ID="password",ut.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ut.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class lt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class ht extends lt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
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
 */
class dt extends ht{constructor(){super("facebook.com")}static credential(e){return Xe._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return dt.credential(e.oauthAccessToken)}catch(t){return null}}}dt.FACEBOOK_SIGN_IN_METHOD="facebook.com",dt.PROVIDER_ID="facebook.com";
/**
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
 */
class ft extends ht{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Xe._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return ft.credential(t,n)}catch(r){return null}}}ft.GOOGLE_SIGN_IN_METHOD="google.com",ft.PROVIDER_ID="google.com";
/**
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
 */
class pt extends ht{constructor(){super("github.com")}static credential(e){return Xe._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch(t){return null}}}pt.GITHUB_SIGN_IN_METHOD="github.com",pt.PROVIDER_ID="github.com";
/**
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
 */
class mt extends ht{constructor(){super("twitter.com")}static credential(e,t){return Xe._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return mt.credential(t,n)}catch(r){return null}}}mt.TWITTER_SIGN_IN_METHOD="twitter.com",mt.PROVIDER_ID="twitter.com";
/**
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
 */
class _t{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ne._fromIdTokenResponse(e,n,r),o=vt(n),s=new _t({user:i,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=vt(n);return new _t({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function vt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */
/**
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
 */
class gt extends r.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,gt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new gt(e,t,n,r)}}function yt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw gt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
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
 */async function wt(e,t,n=!1){const r=await q(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return _t._forOperation(e,"link",r)}
/**
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
 */
async function bt(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await q(e,yt(r,i,t,e),n);g(o.idToken,r,"internal-error");const s=Y(o.idToken);g(s,r,"internal-error");const{sub:a}=s;return g(e.uid===a,r,"user-mismatch"),_t._forOperation(e,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&p(r,"user-mismatch"),o}}
/**
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
 */async function Ct(e,t,n=!1){const r="signIn",i=await yt(e,r,t),o=await _t._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}function It(e,t,n,i){return(0,r.m9)(e).onIdTokenChanged(t,n,i)}function kt(e,t,n){return(0,r.m9)(e).beforeAuthStateChanged(t,n)}
/**
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
 */
function Tt(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:start",R(e,t))}function St(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:finalize",R(e,t))}function Et(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:start",R(e,t))}function Ot(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:finalize",R(e,t))}new WeakMap;const xt="__sak";
/**
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
 */class Pt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(xt,"1"),this.storage.removeItem(xt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */function Rt(){const e=(0,r.z$)();return he(e)||ve(e)}const Dt=1e3,Nt=10;class At extends Pt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Rt()&&be(),this.fallbackToPolling=we(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);ye()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Nt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Dt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}At.type="LOCAL";const Mt=At;
/**
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
 */class Lt extends Pt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Lt.type="SESSION";const Ft=Lt;
/**
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
 */function jt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
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
 */class $t{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new $t(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async e=>e(t.origin,i))),a=await jt(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function Ut(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */$t.receivers=[];class Wt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const c=Ut("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
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
 */function Vt(){return window}function Yt(e){Vt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Ht(){return"undefined"!==typeof Vt()["WorkerGlobalScope"]&&"function"===typeof Vt()["importScripts"]}async function qt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function zt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Bt(){return Ht()?self:null}
/**
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
 */const Gt="firebaseLocalStorageDb",Kt=1,Jt="firebaseLocalStorage",Qt="fbase_key";class Zt{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Xt(e,t){return e.transaction([Jt],t?"readwrite":"readonly").objectStore(Jt)}function en(){const e=indexedDB.deleteDatabase(Gt);return new Zt(e).toPromise()}function tn(){const e=indexedDB.open(Gt,Kt);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Jt,{keyPath:Qt})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Jt)?t(n):(n.close(),await en(),t(await tn()))}))}))}async function nn(e,t,n){const r=Xt(e,!0).put({[Qt]:t,value:n});return new Zt(r).toPromise()}async function rn(e,t){const n=Xt(e,!1).get(t),r=await new Zt(n).toPromise();return void 0===r?null:r.value}function on(e,t){const n=Xt(e,!0).delete(t);return new Zt(n).toPromise()}const sn=800,an=3;class cn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await tn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>an)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ht()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$t._getInstance(Bt()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await qt(),!this.activeServiceWorker)return;this.sender=new Wt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&zt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tn();return await nn(e,xt,"1"),await on(e,xt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>nn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>rn(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>on(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Xt(e,!1).getAll();return new Zt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),sn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}cn.type="LOCAL";const un=cn;
/**
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
 */function ln(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:start",R(e,t))}function hn(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:finalize",R(e,t))}function dn(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:finalize",R(e,t))}
/**
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
 */
/**
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
 */
Oe("rcb"),new S(3e4,6e4);
/**
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
 */
const fn="recaptcha";async function pn(e,t,n){var r;const i=await n.verify();try{let o;if(g("string"===typeof i,e,"argument-error"),g(n.type===fn,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){g("enroll"===t.type,e,"internal-error");const n=await Tt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{g("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;g(n,e,"missing-multi-factor-info");const s=await ln(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await et(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
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
 */
class mn{constructor(e){this.providerId=mn.PROVIDER_ID,this.auth=Le(e)}verifyPhoneNumber(e,t){return pn(this.auth,e,(0,r.m9)(t))}static credential(e,t){return ot._fromVerification(e,t)}static credentialFromResult(e){const t=e;return mn.credentialFromTaggedObject(t)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?ot._fromTokenResponse(t,n):null}}
/**
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
 */
function _n(e,t){return t?ie(t):(g(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
 */mn.PROVIDER_ID="phone",mn.PHONE_SIGN_IN_METHOD="phone";class vn extends qe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function gn(e){return Ct(e.auth,new vn(e),e.bypassAuthState)}function yn(e){const{auth:t,user:n}=e;return g(n,t,"internal-error"),bt(n,new vn(e),e.bypassAuthState)}async function wn(e){const{auth:t,user:n}=e;return g(n,t,"internal-error"),wt(n,new vn(e),e.bypassAuthState)}
/**
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
 */class bn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gn;case"linkViaPopup":case"linkViaRedirect":return wn;case"reauthViaPopup":case"reauthViaRedirect":return yn;default:p(this.auth,"internal-error")}}resolve(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const Cn=new S(2e3,1e4);class In extends bn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,In.currentPopupAction&&In.currentPopupAction.cancel(),In.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const e=Ut();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(m(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(m(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,In.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(m(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Cn.get())};e()}}In.currentPopupAction=null;
/**
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
 */
const kn="pendingRedirect",Tn=new Map;class Sn extends bn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Tn.get(this.auth._key());if(!e){try{const t=await En(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Tn.set(this.auth._key(),e)}return this.bypassAuthState||Tn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function En(e,t){const n=Pn(t),r=xn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function On(e,t){Tn.set(e._key(),t)}function xn(e){return ie(e._redirectPersistence)}function Pn(e){return ae(kn,e.config.apiKey,e.name)}
/**
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
 */async function Rn(e,t,n=!1){const r=Le(e),i=_n(r,t),o=new Sn(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
/**
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
 */
const Dn=6e5;class Nn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Ln(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Mn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(m(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Dn&&this.cachedEventUids.clear(),this.cachedEventUids.has(An(e))}saveEventToCache(e){this.cachedEventUids.add(An(e)),this.lastProcessedEventTime=Date.now()}}function An(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Mn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Ln(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Mn(e);default:return!1}}
/**
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
 */async function Fn(e,t={}){return D(e,"GET","/v1/projects",t)}
/**
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
 */const jn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$n=/^https?/;async function Un(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Fn(e);for(const r of t)try{if(Wn(r))return}catch(n){}p(e,"unauthorized-domain")}function Wn(e){const t=b(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!$n.test(n))return!1;if(jn.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Vn=new S(3e4,6e4);function Yn(){const e=Vt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Hn(e){return new Promise(((t,n)=>{var r,i,o;function s(){Yn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Yn(),n(m(e,"network-request-failed"))},timeout:Vn.get()})}if(null===(i=null===(r=Vt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Vt().gapi)||void 0===o?void 0:o.load)){const t=Oe("iframefcb");return Vt()[t]=()=>{gapi.load?s():n(m(e,"network-request-failed"))},Ee(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw qn=null,e}))}let qn=null;function zn(e){return qn=qn||Hn(e),qn}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Bn=new S(5e3,15e3),Gn="__/auth/iframe",Kn="emulator/auth/iframe",Jn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zn(e){const t=e.config;g(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?E(t,Kn):`https://${e.config.authDomain}/${Gn}`,o={apiKey:t.apiKey,appName:e.name,v:i.Jn},s=Qn.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${(0,r.xO)(o).slice(1)}`}async function Xn(e){const t=await zn(e),n=Vt().gapi;return g(n,e,"internal-error"),t.open({where:document.body,url:Zn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jn,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=m(e,"network-request-failed"),o=Vt().setTimeout((()=>{r(i)}),Bn.get());function s(){Vt().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const er={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tr=500,nr=600,rr="_blank",ir="http://localhost";class or{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function sr(e,t,n,i=tr,o=nr){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},er),{width:i.toString(),height:o.toString(),top:s,left:a}),l=(0,r.z$)().toLowerCase();n&&(c=de(l)?rr:n),le(l)&&(t=t||ir,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(ge(l)&&"_self"!==c)return ar(t||"",c),new or(null);const d=window.open(t||"",c,h);g(d,e,"popup-blocked");try{d.focus()}catch(f){}return new or(d)}function ar(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */const cr="__/auth/handler",ur="emulator/auth/handler",lr=encodeURIComponent("fac");async function hr(e,t,n,o,s,a){g(e.config.authDomain,e,"auth-domain-config-required"),g(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:i.Jn,eventId:s};if(t instanceof lt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof ht){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];const l=await e._getAppCheckToken(),h=l?`#${lr}=${encodeURIComponent(l)}`:"";return`${dr(e)}?${(0,r.xO)(u).slice(1)}${h}`}function dr({config:e}){return e.emulator?E(e,ur):`https://${e.authDomain}/${cr}`}
/**
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
 */const fr="webStorageSupport";class pr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ft,this._completeRedirectFn=Rn,this._overrideRedirectResult=On}async _openPopup(e,t,n,r){var i;w(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await hr(e,t,n,b(),r);return sr(e,o,Ut())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await hr(e,t,n,b(),r);return Yt(i),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Xn(e),n=new Nn(e);return t.register("authEvent",(t=>{g(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(fr,{type:fr},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[fr];void 0!==i&&t(!!i),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Un(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return we()||he()||ve()}}const mr=pr;class _r{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return y("unexpected MultiFactorSessionType")}}}class vr extends _r{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new vr(e)}_finalizeEnroll(e,t,n){return St(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return hn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class gr{constructor(){}static assertion(e){return vr._fromCredential(e)}}gr.FACTOR_ID="phone";class yr{static assertionForEnrollment(e,t){return wr._fromSecret(e,t)}static assertionForSignIn(e,t){return wr._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const n=e;g("undefined"!==typeof(null===(t=n.user)||void 0===t?void 0:t.auth),"internal-error");const r=await Et(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return br._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}yr.FACTOR_ID="totp";class wr extends _r{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new wr(t,void 0,e)}static _fromEnrollmentId(e,t){return new wr(t,e)}async _finalizeEnroll(e,t,n){return g("undefined"!==typeof this.secret,e,"argument-error"),Ot(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){g(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return dn(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class br{constructor(e,t,n,r,i,o,s){this.sessionInfo=o,this.auth=s,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new br(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(Cr(e)||Cr(t))&&(r=!0),r&&(Cr(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Cr(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Cr(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var Ir="@firebase/auth",kr="1.1.0";
/**
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
 */
class Tr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */function Sr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Er(e){(0,i.Xd)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;g(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ce(e)},u=new Me(r,i,o,c);return $e(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(e=>{const t=Le(e.getProvider("auth").getImmediate());return(e=>new Tr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(Ir,kr,Sr(e)),(0,i.KN)(Ir,kr,"esm2017")}
/**
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
 */const Or=300,xr=(0,r.Pz)("authIdTokenMaxAge")||Or;let Pr=null;const Rr=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>xr)return;const i=null===n||void 0===n?void 0:n.token;Pr!==i&&(Pr=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Dr(e=(0,i.Mq)()){const t=(0,i.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=je(e,{popupRedirectResolver:mr,persistence:[un,Mt,Ft]}),o=(0,r.Pz)("authTokenSyncURL");if(o){const e=Rr(o);kt(n,e,(()=>e(n.currentUser))),It(n,(t=>e(t)))}const s=(0,r.q4)("auth");return s&&Ue(n,`http://${s}`),n}Er("Browser")},2737:function(e,t,n){"use strict";n.d(t,{iU:function(){return zs},N8:function(){return ca},jM:function(){return Xs},VF:function(){return Bs},iH:function(){return qs},Vx:function(){return Ks}});n(7658);var r=n(3579),i=n(1322),o=n(2348),s=n(4508);const a="@firebase/database",c="1.0.1";
/**
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
 */let u="";function l(e){u=e}
/**
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
 */class h{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,o.Wl)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,o.cI)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
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
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,o.r3)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
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
 */const f=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new h(t)}}catch(t){}return new d},p=f("localStorage"),m=f("sessionStorage"),_=new s.Yd("@firebase/database"),v=function(){let e=1;return function(){return e++}}(),g=function(e){const t=(0,o.dS)(e),n=new o.gQ;n.update(t);const r=n.digest();return o.US.encodeByteArray(r)},y=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"===typeof r&&"number"===typeof r.length?t+=y.apply(null,r):t+="object"===typeof r?(0,o.Wl)(r):r,t+=" "}return t};let w=null,b=!0;const C=function(e,t){(0,o.hu)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(_.logLevel=s["in"].VERBOSE,w=_.log.bind(_),t&&m.set("logging_enabled",!0)):"function"===typeof e?w=e:(w=null,m.remove("logging_enabled"))},I=function(...e){if(!0===b&&(b=!1,null===w&&!0===m.get("logging_enabled")&&C(!0)),w){const t=y.apply(null,e);w(t)}},k=function(e){return function(...t){I(e,...t)}},T=function(...e){const t="FIREBASE INTERNAL ERROR: "+y(...e);_.error(t)},S=function(...e){const t=`FIREBASE FATAL ERROR: ${y(...e)}`;throw _.error(t),new Error(t)},E=function(...e){const t="FIREBASE WARNING: "+y(...e);_.warn(t)},O=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&E("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},x=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},P=function(e){if((0,o.Yr)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},R="[MIN_NAME]",D="[MAX_NAME]",N=function(e,t){if(e===t)return 0;if(e===R||t===D)return-1;if(t===R||e===D)return 1;{const n=z(e),r=z(t);return null!==n?null!==r?n-r===0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},A=function(e,t){return e===t?0:e<t?-1:1},M=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,o.Wl)(t))},L=function(e){if("object"!==typeof e||null===e)return(0,o.Wl)(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=(0,o.Wl)(t[r]),n+=":",n+=L(e[t[r]]);return n+="}",n},F=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function j(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const $=function(e){(0,o.hu)(!x(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,s,a,c,u;0===e?(s=0,a=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(c=Math.min(Math.floor(Math.log(e)/Math.LN2),r),s=c+r,a=Math.round(e*Math.pow(2,n-c)-Math.pow(2,n))):(s=0,a=Math.round(e/Math.pow(2,1-r-n))));const l=[];for(u=n;u;u-=1)l.push(a%2?1:0),a=Math.floor(a/2);for(u=t;u;u-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(i?1:0),l.reverse();const h=l.join("");let d="";for(u=0;u<64;u+=8){let e=parseInt(h.substr(u,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},U=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},W=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function V(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const Y=new RegExp("^-?(0*)\\d{1,10}$"),H=-2147483648,q=2147483647,z=function(e){if(Y.test(e)){const t=Number(e);if(t>=H&&t<=q)return t}return null},B=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw E("Exception was thrown by user callback.",e),t}),Math.floor(0))}},G=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},K=function(e,t){const n=setTimeout(e,t);return"number"===typeof n&&"undefined"!==typeof Deno&&Deno["unrefTimer"]?Deno.unrefTimer(n):"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
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
 */
class J{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){E(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
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
 */class Q{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(I("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',E(e)}}class Z{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Z.OWNER="owner";
/**
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
 */
const X="5",ee="v",te="s",ne="r",re="f",ie=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,oe="ls",se="p",ae="ac",ce="websocket",ue="long_polling";
/**
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
 */
class le{constructor(e,t,n,r,i=!1,o="",s=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=p.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&p.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function he(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function de(e,t,n){let r;if((0,o.hu)("string"===typeof t,"typeof type must == string"),(0,o.hu)("object"===typeof n,"typeof params must == object"),t===ce)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==ue)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}he(e)&&(n["ns"]=e.namespace);const i=[];return j(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}
/**
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
 */class fe{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,o.r3)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,o.p$)(this.counters_)}}
/**
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
 */const pe={},me={};function _e(e){const t=e.toString();return pe[t]||(pe[t]=new fe),pe[t]}function ve(e,t){const n=e.toString();return me[n]||(me[n]=t()),me[n]}
/**
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
 */class ge{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&B((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
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
 */const ye="start",we="close",be="pLPCommand",Ce="pRTLPCB",Ie="id",ke="pw",Te="ser",Se="cb",Ee="seg",Oe="ts",xe="d",Pe="dframe",Re=1870,De=30,Ne=Re-De,Ae=25e3,Me=3e4;class Le{constructor(e,t,n,r,i,o,s){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=k(e),this.stats_=_e(t),this.urlFn=e=>(this.appCheckToken&&(e[ae]=this.appCheckToken),de(t,ue,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ge(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(Me)),P((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fe(((...e)=>{const[t,n,r,i,o]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ye)this.id=n,this.password=r;else{if(t!==we)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[ye]="t",e[Te]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Se]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ee]=X,this.transportSessionId&&(e[te]=this.transportSessionId),this.lastSessionId&&(e[oe]=this.lastSessionId),this.applicationId&&(e[se]=this.applicationId),this.appCheckToken&&(e[ae]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(e[ne]=re);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Le.forceAllow_=!0}static forceDisallow(){Le.forceDisallow_=!0}static isAvailable(){return!(0,o.Yr)()&&(!!Le.forceAllow_||!Le.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!U()&&!W())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,o.Wl)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,o.h$)(t),r=F(n,Ne);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,o.Yr)())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Pe]="t",n[Ie]=e,n[ke]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,o.Wl)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Fe{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,o.Yr)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=v(),window[be+this.uniqueCallbackIdentifier]=e,window[Ce+this.uniqueCallbackIdentifier]=t,this.myIFrame=Fe.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(i){I("frame writing exception"),i.stack&&I(i.stack),I(i)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||I("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ie]=this.myID,e[ke]=this.myPW,e[Te]=this.currentSerial;let t=this.urlFn(e),n="",r=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+De+n.length<=Re))break;{const e=this.pendingSegs.shift();n=n+"&"+Ee+r+"="+e.seg+"&"+Oe+r+"="+e.ts+"&"+xe+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(Ae)),i=()=>{clearTimeout(r),n()};this.addTag(e,i)}addTag(e,t){(0,o.Yr)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{I("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
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
 */const je=16384,$e=45e3;let Ue=null;"undefined"!==typeof MozWebSocket?Ue=MozWebSocket:"undefined"!==typeof WebSocket&&(Ue=WebSocket);class We{constructor(e,t,n,r,i,o,s){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=k(this.connId),this.stats_=_e(t),this.connURL=We.connectionURL_(t,o,s,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,i){const s={};return s[ee]=X,!(0,o.Yr)()&&"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(s[ne]=re),t&&(s[te]=t),n&&(s[oe]=n),r&&(s[ae]=r),i&&(s[se]=i),de(e,ce,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0);try{let e;if((0,o.Yr)()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${X}/${u}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",BASE_URL:"/"},r=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];r&&(e["proxy"]={origin:r})}this.mySock=new Ue(this.connURL,[],e)}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){We.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Ue&&!We.forceDisallow_}static previouslyFailed(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")}markConnectionHealthy(){p.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,o.cI)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,o.hu)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,o.Wl)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=F(t,je);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor($e))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}We.responsesRequiredToBeHealthy=2,We.healthyTimeout=3e4;
/**
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
 */
class Ve{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Le,We]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=We&&We["isAvailable"]();let n=t&&!We.previouslyFailed();if(e.webSocketOnly&&(t||E("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[We];else{const e=this.transports_=[];for(const t of Ve.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);Ve.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ve.globalTransportInitialized_=!1;
/**
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
 */
const Ye=6e4,He=5e3,qe=10240,ze=102400,Be="t",Ge="d",Ke="s",Je="r",Qe="e",Ze="o",Xe="a",et="n",tt="p",nt="h";class rt{constructor(e,t,n,r,i,o,s,a,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=k("c:"+this.id+":"),this.transportManager_=new Ve(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e["healthyTimeout"]||0;r>0&&(this.healthyTimeout_=K((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ze?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>qe?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Be in e){const t=e[Be];t===Xe?this.upgradeIfSecondaryHealthy_():t===Je?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Ze&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=M("t",e),n=M("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Xe,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:et,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=M("t",e),n=M("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=M(Be,e);if(Ge in e){const n=e[Ge];if(t===nt){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if(t===et){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ke?this.onConnectionShutdown_(n):t===Je?this.onReset_(n):t===Qe?T("Server Error: "+n):t===Ze?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):T("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),X!==n&&E("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),K((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(Ye))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):K((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(He))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
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
 */class it{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
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
 */class ot{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,o.hu)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}validateEventType_(e){(0,o.hu)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
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
 */class st extends ot{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||(0,o.uI)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new st}getInitialEvent(e){return(0,o.hu)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
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
 */const at=32,ct=768;class ut{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function lt(){return new ut("")}function ht(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function dt(e){return e.pieces_.length-e.pieceNum_}function ft(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ut(e.pieces_,t)}function pt(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function mt(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function _t(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function vt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ut(t,0)}function gt(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof ut)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ut(n,0)}function yt(e){return e.pieceNum_>=e.pieces_.length}function wt(e,t){const n=ht(e),r=ht(t);if(null===n)return t;if(n===r)return wt(ft(e),ft(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function bt(e,t){const n=_t(e,0),r=_t(t,0);for(let i=0;i<n.length&&i<r.length;i++){const e=N(n[i],r[i]);if(0!==e)return e}return n.length===r.length?0:n.length<r.length?-1:1}function Ct(e,t){if(dt(e)!==dt(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function It(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(dt(e)>dt(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class kt{constructor(e,t){this.errorPrefix_=t,this.parts_=_t(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,o.ug)(this.parts_[n]);Et(this)}}function Tt(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=(0,o.ug)(t),Et(e)}function St(e){const t=e.parts_.pop();e.byteLength_-=(0,o.ug)(t),e.parts_.length>0&&(e.byteLength_-=1)}function Et(e){if(e.byteLength_>ct)throw new Error(e.errorPrefix_+"has a key path longer than "+ct+" bytes ("+e.byteLength_+").");if(e.parts_.length>at)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+at+") or object contains a cycle "+Ot(e))}function Ot(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
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
 */class xt extends ot{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new xt}getInitialEvent(e){return(0,o.hu)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
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
 */const Pt=1e3,Rt=3e5,Dt=3e4,Nt=1.3,At=3e4,Mt="server_kill",Lt=3;class Ft extends it{constructor(e,t,n,r,i,s,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Ft.nextPersistentConnectionId_++,this.log_=k("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Pt,this.maxReconnectDelay_=Rt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!(0,o.Yr)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xt.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&st.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_((0,o.Wl)(i)),(0,o.hu)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new o.BH,n={p:e._path.toString(),q:e._queryObject},r={action:"g",request:n,onComplete:e=>{const n=e["d"];"ok"===e["s"]?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),(0,o.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,o.hu)(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n},o="q";e.tag&&(i["q"]=t._queryObject,i["t"]=e.tag),i["h"]=e.hashFn(),this.sendRequest(o,i,(i=>{const o=i["d"],s=i["s"];Ft.warnOnListenWarnings_(o,t);const a=this.listens.get(n)&&this.listens.get(n).get(r);a===e&&(this.log_("listen response",i),"ok"!==s&&this.removeListen_(n,r),e.onComplete&&e.onComplete(s,o))}))}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&(0,o.r3)(e,"w")){const n=(0,o.DV)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();E(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||(0,o.GJ)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Dt)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,o.w9)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t["s"],r=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),(0,o.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const i=this.removeListen_(n,r);i&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";r&&(i["q"]=n,i["t"]=r),this.sendRequest(o,i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e["s"],e["d"])}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const o={p:t,d:n};void 0!==i&&(o["h"]=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n["s"],n["d"])}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,o.Wl)(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):T("Unrecognized action received from server: "+(0,o.Wl)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,o.hu)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Pt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Pt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>At&&(this.reconnectDelay_=Pt),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Nt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Ft.nextConnectionId_++,i=this.lastSessionId;let s=!1,a=null;const c=function(){a?a.close():(s=!0,n())},u=function(e){(0,o.hu)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:c,sendRequest:u};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[o,c]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);s?I("getToken() completed but was canceled"):(I("getToken() completed. Creating connection."),this.authToken_=o&&o.accessToken,this.appCheckToken_=c&&c.token,a=new rt(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{E(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Mt)}),i))}catch(T){this.log_("Failed to get token: "+T),s||(this.repoInfo_.nodeAdmin&&E(T),c())}}}interrupt(e){I("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){I("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,o.xb)(this.interruptReasons_)&&(this.reconnectDelay_=Pt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>L(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new ut(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){I("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Lt&&(this.reconnectDelay_=Dt,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){I("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Lt&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,o.Yr)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+u.replace(/\./g,"-")]=1,(0,o.uI)()?e["framework.cordova"]=1:(0,o.b$)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=st.getInstance().currentlyOnline();return(0,o.xb)(this.interruptReasons_)&&e}}Ft.nextPersistentConnectionId_=0,Ft.nextConnectionId_=0;
/**
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
 */
class jt{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new jt(e,t)}}
/**
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
 */class $t{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new jt(R,e),r=new jt(R,t);return 0!==this.compare(n,r)}minPost(){return jt.MIN}}
/**
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
 */let Ut;class Wt extends $t{static get __EMPTY_NODE(){return Ut}static set __EMPTY_NODE(e){Ut=e}compare(e,t){return N(e.name,t.name)}isDefinedOn(e){throw(0,o.g5)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return jt.MIN}maxPost(){return new jt(D,Ut)}makePost(e,t){return(0,o.hu)("string"===typeof e,"KeyIndex indexValue must always be a string."),new jt(e,Ut)}toString(){return".key"}}const Vt=new Wt;
/**
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
 */class Yt{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;while(!e.isEmpty())if(o=t?n(e.key,t):1,r&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right;else{if(0===o){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ht{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Ht.RED,this.left=null!=r?r:zt.EMPTY_NODE,this.right=null!=i?i:zt.EMPTY_NODE}copy(e,t,n,r,i){return new Ht(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return zt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return zt.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ht.RED=!0,Ht.BLACK=!1;class qt{copy(e,t,n,r,i){return this}insert(e,t,n){return new Ht(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class zt{constructor(e,t=zt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new zt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ht.BLACK,null,null))}remove(e){return new zt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ht.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Yt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Yt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Yt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Yt(this.root_,null,this.comparator_,!0,e)}}
/**
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
 */
function Bt(e,t){return N(e.name,t.name)}function Gt(e,t){return N(e,t)}
/**
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
 */let Kt;function Jt(e){Kt=e}zt.EMPTY_NODE=new qt;const Qt=function(e){return"number"===typeof e?"number:"+$(e):"string:"+e},Zt=function(e){if(e.isLeafNode()){const t=e.val();(0,o.hu)("string"===typeof t||"number"===typeof t||"object"===typeof t&&(0,o.r3)(t,".sv"),"Priority must be a string or number.")}else(0,o.hu)(e===Kt||e.isEmpty(),"priority of unexpected type.");(0,o.hu)(e===Kt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
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
 */
let Xt,en,tn;class nn{constructor(e,t=nn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,o.hu)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Zt(this.priorityNode_)}static set __childrenNodeConstructor(e){Xt=e}static get __childrenNodeConstructor(){return Xt}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new nn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return yt(e)?this:".priority"===ht(e)?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:nn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ht(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,o.hu)(".priority"!==n||1===dt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,nn.__childrenNodeConstructor.EMPTY_NODE.updateChild(ft(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Qt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?$(this.value_):this.value_,this.lazyHash_=g(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===nn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof nn.__childrenNodeConstructor?-1:((0,o.hu)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=nn.VALUE_TYPE_ORDER.indexOf(t),i=nn.VALUE_TYPE_ORDER.indexOf(n);return(0,o.hu)(r>=0,"Unknown leaf type: "+t),(0,o.hu)(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function rn(e){en=e}function on(e){tn=e}nn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class sn extends $t{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?N(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return jt.MIN}maxPost(){return new jt(D,new nn("[PRIORITY-POST]",tn))}makePost(e,t){const n=en(e);return new jt(t,new nn("[PRIORITY-POST]",n))}toString(){return".priority"}}const an=new sn,cn=Math.log(2);
/**
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
 */class un{constructor(e){const t=e=>parseInt(Math.log(e)/cn,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=n(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ln=function(e,t,n,r){e.sort(t);const i=function(t,r){const o=r-t;let s,a;if(0===o)return null;if(1===o)return s=e[t],a=n?n(s):s,new Ht(a,s.node,Ht.BLACK,null,null);{const c=parseInt(o/2,10)+t,u=i(t,c),l=i(c+1,r);return s=e[c],a=n?n(s):s,new Ht(a,s.node,Ht.BLACK,u,l)}},o=function(t){let r=null,o=null,s=e.length;const a=function(t,r){const o=s-t,a=s;s-=t;const u=i(o+1,a),l=e[o],h=n?n(l):l;c(new Ht(h,l.node,r,null,u))},c=function(e){r?(r.left=e,r=e):(o=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,Ht.BLACK):(a(r,Ht.BLACK),a(r,Ht.RED))}return o},s=new un(e.length),a=o(s);return new zt(r||t,a)};
/**
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
 */let hn;const dn={};class fn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,o.hu)(dn&&an,"ChildrenNode.ts has not been loaded"),hn=hn||new fn({".priority":dn},{".priority":an}),hn}get(e){const t=(0,o.DV)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof zt?t:null}hasIndex(e){return(0,o.r3)(this.indexSet_,e.toString())}addIndex(e,t){(0,o.hu)(e!==Vt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(jt.Wrap);let s,a=i.getNext();while(a)r=r||e.isDefinedOn(a.node),n.push(a),a=i.getNext();s=r?ln(n,e.getCompare()):dn;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const l=Object.assign({},this.indexes_);return l[c]=s,new fn(l,u)}addToIndexes(e,t){const n=(0,o.UI)(this.indexes_,((n,r)=>{const i=(0,o.DV)(this.indexSet_,r);if((0,o.hu)(i,"Missing index implementation for "+r),n===dn){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(jt.Wrap);let o=r.getNext();while(o)o.name!==e.name&&n.push(o),o=r.getNext();return n.push(e),ln(n,i.getCompare())}return dn}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new jt(e.name,r))),i.insert(e,e.node)}}));return new fn(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,o.UI)(this.indexes_,(n=>{if(n===dn)return n;{const r=t.get(e.name);return r?n.remove(new jt(e.name,r)):n}}));return new fn(n,this.indexSet_)}}
/**
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
 */let pn;class mn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Zt(this.priorityNode_),this.children_.isEmpty()&&(0,o.hu)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return pn||(pn=new mn(new zt(Gt),null,fn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||pn}updatePriority(e){return this.children_.isEmpty()?this:new mn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?pn:t}}getChild(e){const t=ht(e);return null===t?this:this.getImmediateChild(t).getChild(ft(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,o.hu)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new jt(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const o=r.isEmpty()?pn:this.priorityNode_;return new mn(r,o,i)}}updateChild(e,t){const n=ht(e);if(null===n)return t;{(0,o.hu)(".priority"!==ht(e)||1===dt(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(ft(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(an,((o,s)=>{t[o]=s.val(e),n++,i&&mn.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Qt(this.getPriority().val())+":"),this.forEachChild(an,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":g(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new jt(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new jt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new jt(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,jt.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)<0)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,jt.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)>0)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===vn?-1:0}withIndex(e){if(e===Vt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new mn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Vt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(an),n=t.getIterator(an);let r=e.getNext(),i=n.getNext();while(r&&i){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===Vt?null:this.indexMap_.get(e.toString())}}mn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class _n extends mn{constructor(){super(new zt(Gt),mn.EMPTY_NODE,fn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return mn.EMPTY_NODE}isEmpty(){return!1}}const vn=new _n;Object.defineProperties(jt,{MIN:{value:new jt(R,mn.EMPTY_NODE)},MAX:{value:new jt(D,vn)}}),Wt.__EMPTY_NODE=mn.EMPTY_NODE,nn.__childrenNodeConstructor=mn,Jt(vn),on(vn);
/**
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
 */
const gn=!0;function yn(e,t=null){if(null===e)return mn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),(0,o.hu)(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new nn(n,yn(t))}if(e instanceof Array||!gn){let n=mn.EMPTY_NODE;return j(e,((t,r)=>{if((0,o.r3)(e,t)&&"."!==t.substring(0,1)){const e=yn(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(yn(t))}{const n=[];let r=!1;const i=e;if(j(i,((e,t)=>{if("."!==e.substring(0,1)){const i=yn(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new jt(e,i)))}})),0===n.length)return mn.EMPTY_NODE;const o=ln(n,Bt,(e=>e.name),Gt);if(r){const e=ln(n,an.getCompare());return new mn(o,yn(t),new fn({".priority":e},{".priority":an}))}return new mn(o,yn(t),fn.Default)}}rn(yn);
/**
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
 */
class wn extends $t{constructor(e){super(),this.indexPath_=e,(0,o.hu)(!yt(e)&&".priority"!==ht(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?N(e.name,t.name):i}makePost(e,t){const n=yn(e),r=mn.EMPTY_NODE.updateChild(this.indexPath_,n);return new jt(t,r)}maxPost(){const e=mn.EMPTY_NODE.updateChild(this.indexPath_,vn);return new jt(D,e)}toString(){return _t(this.indexPath_,0).join("/")}}
/**
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
 */class bn extends $t{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?N(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return jt.MIN}maxPost(){return jt.MAX}makePost(e,t){const n=yn(e);return new jt(t,n)}toString(){return".value"}}const Cn=new bn;
/**
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
 */function In(e){return{type:"value",snapshotNode:e}}function kn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Tn(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Sn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function En(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
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
 */class On{constructor(e){this.index_=e}updateChild(e,t,n,r,i,s){(0,o.hu)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(Tn(t,a)):(0,o.hu)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(kn(t,n)):s.trackChildChange(Sn(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(an,((e,r)=>{t.hasChild(e)||n.trackChildChange(Tn(e,r))})),t.isLeafNode()||t.forEachChild(an,((t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(Sn(t,r,i))}else n.trackChildChange(kn(t,r))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?mn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
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
 */class xn{constructor(e){this.indexedFilter_=new On(e.getIndex()),this.index_=e.getIndex(),this.startPost_=xn.getStartPost_(e),this.endPost_=xn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,r,i,o){return this.matches(new jt(t,n))||(n=mn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=mn.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(mn.EMPTY_NODE);const i=this;return t.forEachChild(an,((e,t)=>{i.matches(new jt(e,t))||(r=r.updateImmediateChild(e,mn.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
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
 */class Pn{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new xn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,r,i,o){return this.rangedFilter_.matches(new jt(t,n))||(n=mn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,o):this.fullLimitUpdateChild_(e,t,n,i,o)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=mn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=mn.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;r=r.updateImmediateChild(t.name,t.node),n++}}}else{let e;r=t.withIndex(this.index_),r=r.updatePriority(mn.EMPTY_NODE),e=this.reverse_?r.getReverseIterator(this.index_):r.getIterator(this.index_);let n=0;while(e.hasNext()){const t=e.getNext(),i=n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t);i?n++:r=r.updateImmediateChild(t.name,mn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const a=e;(0,o.hu)(a.numChildren()===this.limit_,"");const c=new jt(t,n),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),l=this.rangedFilter_.matches(c);if(a.hasChild(t)){const e=a.getImmediateChild(t);let o=r.getChildAfterChild(this.index_,u,this.reverse_);while(null!=o&&(o.name===t||a.hasChild(o.name)))o=r.getChildAfterChild(this.index_,o,this.reverse_);const h=null==o?1:s(o,c),d=l&&!n.isEmpty()&&h>=0;if(d)return null!=i&&i.trackChildChange(Sn(t,n,e)),a.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(Tn(t,e));const n=a.updateImmediateChild(t,mn.EMPTY_NODE),r=null!=o&&this.rangedFilter_.matches(o);return r?(null!=i&&i.trackChildChange(kn(o.name,o.node)),n.updateImmediateChild(o.name,o.node)):n}}return n.isEmpty()?e:l&&s(u,c)>=0?(null!=i&&(i.trackChildChange(Tn(u.name,u.node)),i.trackChildChange(kn(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(u.name,mn.EMPTY_NODE)):e}}
/**
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
 */class Rn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=an}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,o.hu)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,o.hu)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:R}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,o.hu)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,o.hu)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:D}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,o.hu)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===an}copy(){const e=new Rn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Dn(e){return e.loadsAllData()?new On(e.getIndex()):e.hasLimit()?new Pn(e):new xn(e)}function Nn(e){const t={};if(e.isDefault())return t;let n;if(e.index_===an?n="$priority":e.index_===Cn?n="$value":e.index_===Vt?n="$key":((0,o.hu)(e.index_ instanceof wn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=(0,o.Wl)(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=(0,o.Wl)(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+(0,o.Wl)(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=(0,o.Wl)(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+(0,o.Wl)(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function An(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_),t["sin"]=!e.startAfterSet_),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_),t["ein"]=!e.endBeforeSet_),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==an&&(t["i"]=e.index_.toString()),t}
/**
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
 */class Mn extends it{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=k("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,o.hu)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=Mn.getListenId_(e,n),a={};this.listens_[s]=a;const c=Nn(e._queryParams);this.restRequest_(i+".json",c,((e,t)=>{let c=t;if(404===e&&(c=null,e=null),null===e&&this.onDataUpdate_(i,c,!1,n),(0,o.DV)(this.listens_,s)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=Mn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Nn(e._queryParams),n=e._path.toString(),r=new o.BH;return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t["auth"]=r.accessToken),i&&i.token&&(t["ac"]=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,o.xO)(t);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=(0,o.cI)(a.responseText)}catch(e){E("Failed to parse JSON response for "+s+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&E("Got unsuccessful REST response for "+s+" Status: "+a.status),n(a.status);n=null}},a.open("GET",s,!0),a.send()}))}}
/**
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
 */class Ln{constructor(){this.rootNode_=mn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
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
 */function Fn(){return{value:null,children:new Map}}function jn(e,t,n){if(yt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=ht(t);e.children.has(r)||e.children.set(r,Fn());const i=e.children.get(r);t=ft(t),jn(i,t,n)}}function $n(e,t,n){null!==e.value?n(t,e.value):Un(e,((e,r)=>{const i=new ut(t.toString()+"/"+e);$n(r,i,n)}))}function Un(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
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
 */class Wn{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&j(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
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
 */const Vn=1e4,Yn=3e4,Hn=3e5;class qn{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Wn(e);const n=Vn+(Yn-Vn)*Math.random();K(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;j(e,((e,r)=>{r>0&&(0,o.r3)(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),K(this.reportStats_.bind(this),Math.floor(2*Math.random()*Hn))}}
/**
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
 */var zn;function Bn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Gn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Kn(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
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
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(zn||(zn={}));class Jn{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=zn.ACK_USER_WRITE,this.source=Bn()}operationForChild(e){if(yt(this.path)){if(null!=this.affectedTree.value)return(0,o.hu)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ut(e));return new Jn(lt(),t,this.revert)}}return(0,o.hu)(ht(this.path)===e,"operationForChild called for unrelated child."),new Jn(ft(this.path),this.affectedTree,this.revert)}}
/**
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
 */class Qn{constructor(e,t){this.source=e,this.path=t,this.type=zn.LISTEN_COMPLETE}operationForChild(e){return yt(this.path)?new Qn(this.source,lt()):new Qn(this.source,ft(this.path))}}
/**
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
 */class Zn{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=zn.OVERWRITE}operationForChild(e){return yt(this.path)?new Zn(this.source,lt(),this.snap.getImmediateChild(e)):new Zn(this.source,ft(this.path),this.snap)}}
/**
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
 */class Xn{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=zn.MERGE}operationForChild(e){if(yt(this.path)){const t=this.children.subtree(new ut(e));return t.isEmpty()?null:t.value?new Zn(this.source,lt(),t.value):new Xn(this.source,lt(),t)}return(0,o.hu)(ht(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Xn(this.source,ft(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
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
 */class er{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(yt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ht(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
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
 */class tr{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function nr(e,t,n,r){const i=[],o=[];return t.forEach((t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push(En(t.childName,t.snapshotNode))})),rr(e,i,"child_removed",t,r,n),rr(e,i,"child_added",t,r,n),rr(e,i,"child_moved",o,r,n),rr(e,i,"child_changed",t,r,n),rr(e,i,"value",t,r,n),i}function rr(e,t,n,r,i,o){const s=r.filter((e=>e.type===n));s.sort(((t,n)=>or(e,t,n))),s.forEach((n=>{const r=ir(e,n,o);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function ir(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function or(e,t,n){if(null==t.childName||null==n.childName)throw(0,o.g5)("Should only compare child_ events.");const r=new jt(t.childName,t.snapshotNode),i=new jt(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
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
 */function sr(e,t){return{eventCache:e,serverCache:t}}function ar(e,t,n,r){return sr(new er(t,n,r),e.serverCache)}function cr(e,t,n,r){return sr(e.eventCache,new er(t,n,r))}function ur(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function lr(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
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
 */let hr;const dr=()=>(hr||(hr=new zt(A)),hr);class fr{constructor(e,t=dr()){this.value=e,this.children=t}static fromObject(e){let t=new fr(null);return j(e,((e,n)=>{t=t.set(new ut(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:lt(),value:this.value};if(yt(e))return null;{const n=ht(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(ft(e),t);if(null!=i){const e=gt(new ut(n),i.path);return{path:e,value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(yt(e))return this;{const t=ht(e),n=this.children.get(t);return null!==n?n.subtree(ft(e)):new fr(null)}}set(e,t){if(yt(e))return new fr(t,this.children);{const n=ht(e),r=this.children.get(n)||new fr(null),i=r.set(ft(e),t),o=this.children.insert(n,i);return new fr(this.value,o)}}remove(e){if(yt(e))return this.children.isEmpty()?new fr(null):new fr(null,this.children);{const t=ht(e),n=this.children.get(t);if(n){const r=n.remove(ft(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new fr(null):new fr(this.value,i)}return this}}get(e){if(yt(e))return this.value;{const t=ht(e),n=this.children.get(t);return n?n.get(ft(e)):null}}setTree(e,t){if(yt(e))return t;{const n=ht(e),r=this.children.get(n)||new fr(null),i=r.setTree(ft(e),t);let o;return o=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new fr(this.value,o)}}fold(e){return this.fold_(lt(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(gt(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,lt(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(yt(e))return null;{const r=ht(e),i=this.children.get(r);return i?i.findOnPath_(ft(e),gt(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,lt(),t)}foreachOnPath_(e,t,n){if(yt(e))return this;{this.value&&n(t,this.value);const r=ht(e),i=this.children.get(r);return i?i.foreachOnPath_(ft(e),gt(t,r),n):new fr(null)}}foreach(e){this.foreach_(lt(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(gt(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
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
 */class pr{constructor(e){this.writeTree_=e}static empty(){return new pr(new fr(null))}}function mr(e,t,n){if(yt(t))return new pr(new fr(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let o=r.value;const s=wt(i,t);return o=o.updateChild(s,n),new pr(e.writeTree_.set(i,o))}{const r=new fr(n),i=e.writeTree_.setTree(t,r);return new pr(i)}}}function _r(e,t,n){let r=e;return j(n,((e,n)=>{r=mr(r,gt(t,e),n)})),r}function vr(e,t){if(yt(t))return pr.empty();{const n=e.writeTree_.setTree(t,new fr(null));return new pr(n)}}function gr(e,t){return null!=yr(e,t)}function yr(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(wt(n.path,t)):null}function wr(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(an,((e,n)=>{t.push(new jt(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new jt(e,n.value))})),t}function br(e,t){if(yt(t))return e;{const n=yr(e,t);return new pr(null!=n?new fr(n):e.writeTree_.subtree(t))}}function Cr(e){return e.writeTree_.isEmpty()}function Ir(e,t){return kr(lt(),e.writeTree_,t)}function kr(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,i)=>{".priority"===t?((0,o.hu)(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=kr(gt(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(gt(e,".priority"),r)),n}}
/**
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
 */function Tr(e,t){return Gr(t,e)}function Sr(e,t,n,r,i){(0,o.hu)(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=mr(e.visibleWrites,t,n)),e.lastWriteId=r}function Er(e,t,n,r){(0,o.hu)(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=_r(e.visibleWrites,t,n),e.lastWriteId=r}function Or(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function xr(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,o.hu)(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,a=e.allWrites.length-1;while(i&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&Pr(t,r.path)?i=!1:It(r.path,t.path)&&(s=!0)),a--}if(i){if(s)return Rr(e),!0;if(r.snap)e.visibleWrites=vr(e.visibleWrites,r.path);else{const t=r.children;j(t,(t=>{e.visibleWrites=vr(e.visibleWrites,gt(r.path,t))}))}return!0}return!1}function Pr(e,t){if(e.snap)return It(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&It(gt(e.path,n),t))return!0;return!1}function Rr(e){e.visibleWrites=Nr(e.allWrites,Dr,lt()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Dr(e){return e.visible}function Nr(e,t,n){let r=pr.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const e=s.path;let t;if(s.snap)It(n,e)?(t=wt(n,e),r=mr(r,t,s.snap)):It(e,n)&&(t=wt(e,n),r=mr(r,lt(),s.snap.getChild(t)));else{if(!s.children)throw(0,o.g5)("WriteRecord should have .snap or .children");if(It(n,e))t=wt(n,e),r=_r(r,t,s.children);else if(It(e,n))if(t=wt(e,n),yt(t))r=_r(r,lt(),s.children);else{const e=(0,o.DV)(s.children,ht(t));if(e){const n=e.getChild(ft(t));r=mr(r,lt(),n)}}}}}return r}function Ar(e,t,n,r,i){if(r||i){const o=br(e.visibleWrites,t);if(!i&&Cr(o))return n;if(i||null!=n||gr(o,lt())){const o=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(It(e.path,t)||It(t,e.path))},s=Nr(e.allWrites,o,t),a=n||mn.EMPTY_NODE;return Ir(s,a)}return null}{const r=yr(e.visibleWrites,t);if(null!=r)return r;{const r=br(e.visibleWrites,t);if(Cr(r))return n;if(null!=n||gr(r,lt())){const e=n||mn.EMPTY_NODE;return Ir(r,e)}return null}}}function Mr(e,t,n){let r=mn.EMPTY_NODE;const i=yr(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(an,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=br(e.visibleWrites,t);return n.forEachChild(an,((e,t)=>{const n=Ir(br(i,new ut(e)),t);r=r.updateImmediateChild(e,n)})),wr(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}{const n=br(e.visibleWrites,t);return wr(n).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}}function Lr(e,t,n,r,i){(0,o.hu)(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=gt(t,n);if(gr(e.visibleWrites,s))return null;{const t=br(e.visibleWrites,s);return Cr(t)?i.getChild(n):Ir(t,i.getChild(n))}}function Fr(e,t,n,r){const i=gt(t,n),o=yr(e.visibleWrites,i);if(null!=o)return o;if(r.isCompleteForChild(n)){const t=br(e.visibleWrites,i);return Ir(t,r.getNode().getImmediateChild(n))}return null}function jr(e,t){return yr(e.visibleWrites,t)}function $r(e,t,n,r,i,o,s){let a;const c=br(e.visibleWrites,t),u=yr(c,lt());if(null!=u)a=u;else{if(null==n)return[];a=Ir(c,n)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=s.getCompare(),n=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let c=n.getNext();while(c&&e.length<i)0!==t(c,r)&&e.push(c),c=n.getNext();return e}}function Ur(){return{visibleWrites:pr.empty(),allWrites:[],lastWriteId:-1}}function Wr(e,t,n,r){return Ar(e.writeTree,e.treePath,t,n,r)}function Vr(e,t){return Mr(e.writeTree,e.treePath,t)}function Yr(e,t,n,r){return Lr(e.writeTree,e.treePath,t,n,r)}function Hr(e,t){return jr(e.writeTree,gt(e.treePath,t))}function qr(e,t,n,r,i,o){return $r(e.writeTree,e.treePath,t,n,r,i,o)}function zr(e,t,n){return Fr(e.writeTree,e.treePath,t,n)}function Br(e,t){return Gr(gt(e.treePath,t),e.writeTree)}function Gr(e,t){return{treePath:e,writeTree:t}}
/**
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
 */class Kr{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,o.hu)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,o.hu)(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,Sn(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,Tn(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,kn(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw(0,o.g5)("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Sn(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
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
 */class Jr{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Qr=new Jr;class Zr{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new er(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return zr(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:lr(this.viewCache_),i=qr(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
/**
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
 */function Xr(e){return{filter:e}}function ei(e,t){(0,o.hu)(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),(0,o.hu)(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function ti(e,t,n,r,i){const s=new Kr;let a,c;if(n.type===zn.OVERWRITE){const u=n;u.source.fromUser?a=oi(e,t,u.path,u.snap,r,i,s):((0,o.hu)(u.source.fromServer,"Unknown source."),c=u.source.tagged||t.serverCache.isFiltered()&&!yt(u.path),a=ii(e,t,u.path,u.snap,r,i,c,s))}else if(n.type===zn.MERGE){const u=n;u.source.fromUser?a=ai(e,t,u.path,u.children,r,i,s):((0,o.hu)(u.source.fromServer,"Unknown source."),c=u.source.tagged||t.serverCache.isFiltered(),a=ui(e,t,u.path,u.children,r,i,c,s))}else if(n.type===zn.ACK_USER_WRITE){const o=n;a=o.revert?di(e,t,o.path,r,i,s):li(e,t,o.path,o.affectedTree,r,i,s)}else{if(n.type!==zn.LISTEN_COMPLETE)throw(0,o.g5)("Unknown operation type: "+n.type);a=hi(e,t,n.path,r,s)}const u=s.getChanges();return ni(t,a,u),{viewCache:a,changes:u}}function ni(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=ur(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(In(ur(t)))}}function ri(e,t,n,r,i,s){const a=t.eventCache;if(null!=Hr(r,n))return t;{let c,u;if(yt(n))if((0,o.hu)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=lr(t),i=n instanceof mn?n:mn.EMPTY_NODE,o=Vr(r,i);c=e.filter.updateFullNode(t.eventCache.getNode(),o,s)}else{const n=Wr(r,lr(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const l=ht(n);if(".priority"===l){(0,o.hu)(1===dt(n),"Can't have a priority with additional path components");const i=a.getNode();u=t.serverCache.getNode();const s=Yr(r,n,i,u);c=null!=s?e.filter.updatePriority(i,s):a.getNode()}else{const o=ft(n);let h;if(a.isCompleteForChild(l)){u=t.serverCache.getNode();const e=Yr(r,n,a.getNode(),u);h=null!=e?a.getNode().getImmediateChild(l).updateChild(o,e):a.getNode().getImmediateChild(l)}else h=zr(r,l,t.serverCache);c=null!=h?e.filter.updateChild(a.getNode(),l,h,o,i,s):a.getNode()}}return ar(t,c,a.isFullyInitialized()||yt(n),e.filter.filtersNodes())}}function ii(e,t,n,r,i,o,s,a){const c=t.serverCache;let u;const l=s?e.filter:e.filter.getIndexedFilter();if(yt(n))u=l.updateFullNode(c.getNode(),r,null);else if(l.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,r);u=l.updateFullNode(c.getNode(),e,null)}else{const e=ht(n);if(!c.isCompleteForPath(n)&&dt(n)>1)return t;const i=ft(n),o=c.getNode().getImmediateChild(e),s=o.updateChild(i,r);u=".priority"===e?l.updatePriority(c.getNode(),s):l.updateChild(c.getNode(),e,s,i,Qr,null)}const h=cr(t,u,c.isFullyInitialized()||yt(n),l.filtersNodes()),d=new Zr(i,h,o);return ri(e,h,n,i,d,a)}function oi(e,t,n,r,i,o,s){const a=t.eventCache;let c,u;const l=new Zr(i,t,o);if(yt(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,s),c=ar(t,u,!0,e.filter.filtersNodes());else{const i=ht(n);if(".priority"===i)u=e.filter.updatePriority(t.eventCache.getNode(),r),c=ar(t,u,a.isFullyInitialized(),a.isFiltered());else{const o=ft(n),u=a.getNode().getImmediateChild(i);let h;if(yt(o))h=r;else{const e=l.getCompleteChild(i);h=null!=e?".priority"===pt(o)&&e.getChild(vt(o)).isEmpty()?e:e.updateChild(o,r):mn.EMPTY_NODE}if(u.equals(h))c=t;else{const n=e.filter.updateChild(a.getNode(),i,h,o,l,s);c=ar(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function si(e,t){return e.eventCache.isCompleteForChild(t)}function ai(e,t,n,r,i,o,s){let a=t;return r.foreach(((r,c)=>{const u=gt(n,r);si(t,ht(u))&&(a=oi(e,a,u,c,i,o,s))})),r.foreach(((r,c)=>{const u=gt(n,r);si(t,ht(u))||(a=oi(e,a,u,c,i,o,s))})),a}function ci(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function ui(e,t,n,r,i,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,u=t;c=yt(n)?r:new fr(null).setTree(n,r);const l=t.serverCache.getNode();return c.children.inorderTraversal(((n,r)=>{if(l.hasChild(n)){const c=t.serverCache.getNode().getImmediateChild(n),l=ci(e,c,r);u=ii(e,u,new ut(n),l,i,o,s,a)}})),c.children.inorderTraversal(((n,r)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!l.hasChild(n)&&!c){const c=t.serverCache.getNode().getImmediateChild(n),l=ci(e,c,r);u=ii(e,u,new ut(n),l,i,o,s,a)}})),u}function li(e,t,n,r,i,o,s){if(null!=Hr(i,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=r.value){if(yt(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ii(e,t,n,c.getNode().getChild(n),i,o,a,s);if(yt(n)){let r=new fr(null);return c.getNode().forEachChild(Vt,((e,t)=>{r=r.set(new ut(e),t)})),ui(e,t,n,r,i,o,a,s)}return t}{let u=new fr(null);return r.foreach(((e,t)=>{const r=gt(n,e);c.isCompleteForPath(r)&&(u=u.set(e,c.getNode().getChild(r)))})),ui(e,t,n,u,i,o,a,s)}}function hi(e,t,n,r,i){const o=t.serverCache,s=cr(t,o.getNode(),o.isFullyInitialized()||yt(n),o.isFiltered());return ri(e,s,n,r,Qr,i)}function di(e,t,n,r,i,s){let a;if(null!=Hr(r,n))return t;{const c=new Zr(r,t,i),u=t.eventCache.getNode();let l;if(yt(n)||".priority"===ht(n)){let n;if(t.serverCache.isFullyInitialized())n=Wr(r,lr(t));else{const e=t.serverCache.getNode();(0,o.hu)(e instanceof mn,"serverChildren would be complete if leaf node"),n=Vr(r,e)}l=e.filter.updateFullNode(u,n,s)}else{const i=ht(n);let o=zr(r,i,t.serverCache);null==o&&t.serverCache.isCompleteForChild(i)&&(o=u.getImmediateChild(i)),l=null!=o?e.filter.updateChild(u,i,o,ft(n),c,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(u,i,mn.EMPTY_NODE,ft(n),c,s):u,l.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=Wr(r,lr(t)),a.isLeafNode()&&(l=e.filter.updateFullNode(l,a,s)))}return a=t.serverCache.isFullyInitialized()||null!=Hr(r,lt()),ar(t,l,a,e.filter.filtersNodes())}}
/**
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
 */class fi{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new On(n.getIndex()),i=Dn(n);this.processor_=Xr(i);const o=t.serverCache,s=t.eventCache,a=r.updateFullNode(mn.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(mn.EMPTY_NODE,s.getNode(),null),u=new er(a,o.isFullyInitialized(),r.filtersNodes()),l=new er(c,s.isFullyInitialized(),i.filtersNodes());this.viewCache_=sr(l,u),this.eventGenerator_=new tr(this.query_)}get query(){return this.query_}}function pi(e){return e.viewCache_.serverCache.getNode()}function mi(e,t){const n=lr(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!yt(t)&&!n.getImmediateChild(ht(t)).isEmpty())?n.getChild(t):null}function _i(e){return 0===e.eventRegistrations_.length}function vi(e,t){e.eventRegistrations_.push(t)}function gi(e,t,n){const r=[];if(n){(0,o.hu)(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)}))}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function yi(e,t,n,r){t.type===zn.MERGE&&null!==t.source.queryId&&((0,o.hu)(lr(e.viewCache_),"We should always have a full cache before handling merges"),(0,o.hu)(ur(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=ti(e.processor_,i,t,n,r);return ei(e.processor_,s.viewCache),(0,o.hu)(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,bi(e,s.changes,s.viewCache.eventCache.getNode(),null)}function wi(e,t){const n=e.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(an,((e,t)=>{r.push(kn(e,t))}))}return n.isFullyInitialized()&&r.push(In(n.getNode())),bi(e,r,n.getNode(),t)}function bi(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return nr(e.eventGenerator_,t,n,i)}
/**
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
 */let Ci,Ii;class ki{constructor(){this.views=new Map}}function Ti(e){(0,o.hu)(!Ci,"__referenceConstructor has already been defined"),Ci=e}function Si(){return(0,o.hu)(Ci,"Reference.ts has not been loaded"),Ci}function Ei(e){return 0===e.views.size}function Oi(e,t,n,r){const i=t.source.queryId;if(null!==i){const s=e.views.get(i);return(0,o.hu)(null!=s,"SyncTree gave us an op for an invalid query."),yi(s,t,n,r)}{let i=[];for(const o of e.views.values())i=i.concat(yi(o,t,n,r));return i}}function xi(e,t,n,r,i){const o=t._queryIdentifier,s=e.views.get(o);if(!s){let e=Wr(n,i?r:null),o=!1;e?o=!0:r instanceof mn?(e=Vr(n,r),o=!1):(e=mn.EMPTY_NODE,o=!1);const s=sr(new er(e,o,!1),new er(r,i,!1));return new fi(t,s)}return s}function Pi(e,t,n,r,i,o){const s=xi(e,t,r,i,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,s),vi(s,n),wi(s,n)}function Ri(e,t,n,r){const i=t._queryIdentifier,o=[];let s=[];const a=Li(e);if("default"===i)for(const[c,u]of e.views.entries())s=s.concat(gi(u,n,r)),_i(u)&&(e.views.delete(c),u.query._queryParams.loadsAllData()||o.push(u.query));else{const t=e.views.get(i);t&&(s=s.concat(gi(t,n,r)),_i(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||o.push(t.query)))}return a&&!Li(e)&&o.push(new(Si())(t._repo,t._path)),{removed:o,events:s}}function Di(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Ni(e,t){let n=null;for(const r of e.views.values())n=n||mi(r,t);return n}function Ai(e,t){const n=t._queryParams;if(n.loadsAllData())return Fi(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Mi(e,t){return null!=Ai(e,t)}function Li(e){return null!=Fi(e)}function Fi(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
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
 */function ji(e){(0,o.hu)(!Ii,"__referenceConstructor has already been defined"),Ii=e}function $i(){return(0,o.hu)(Ii,"Reference.ts has not been loaded"),Ii}let Ui=1;class Wi{constructor(e){this.listenProvider_=e,this.syncPointTree_=new fr(null),this.pendingWriteTree_=Ur(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Vi(e,t,n,r,i){return Sr(e.pendingWriteTree_,t,n,r,i),i?eo(e,new Zn(Bn(),t,n)):[]}function Yi(e,t,n,r){Er(e.pendingWriteTree_,t,n,r);const i=fr.fromObject(n);return eo(e,new Xn(Bn(),t,i))}function Hi(e,t,n=!1){const r=Or(e.pendingWriteTree_,t),i=xr(e.pendingWriteTree_,t);if(i){let t=new fr(null);return null!=r.snap?t=t.set(lt(),!0):j(r.children,(e=>{t=t.set(new ut(e),!0)})),eo(e,new Jn(r.path,t,n))}return[]}function qi(e,t,n){return eo(e,new Zn(Gn(),t,n))}function zi(e,t,n){const r=fr.fromObject(n);return eo(e,new Xn(Gn(),t,r))}function Bi(e,t){return eo(e,new Qn(Gn(),t))}function Gi(e,t,n){const r=so(e,n);if(r){const n=ao(r),i=n.path,o=n.queryId,s=wt(i,t),a=new Qn(Kn(o),s);return co(e,i,a)}return[]}function Ki(e,t,n,r,i=!1){const o=t._path,s=e.syncPointTree_.get(o);let a=[];if(s&&("default"===t._queryIdentifier||Mi(s,t))){const c=Ri(s,t,n,r);Ei(s)&&(e.syncPointTree_=e.syncPointTree_.remove(o));const u=c.removed;if(a=c.events,!i){const n=-1!==u.findIndex((e=>e._queryParams.loadsAllData())),i=e.syncPointTree_.findOnPath(o,((e,t)=>Li(t)));if(n&&!i){const t=e.syncPointTree_.subtree(o);if(!t.isEmpty()){const n=uo(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,o=ro(e,r);e.listenProvider_.startListening(lo(i),io(e,i),o.hashFn,o.onComplete)}}}if(!i&&u.length>0&&!r)if(n){const n=null;e.listenProvider_.stopListening(lo(t),n)}else u.forEach((t=>{const n=e.queryToTagMap.get(oo(t));e.listenProvider_.stopListening(lo(t),n)}))}ho(e,u)}return a}function Ji(e,t,n,r){const i=so(e,r);if(null!=i){const r=ao(i),o=r.path,s=r.queryId,a=wt(o,t),c=new Zn(Kn(s),a,n);return co(e,o,c)}return[]}function Qi(e,t,n,r){const i=so(e,r);if(i){const r=ao(i),o=r.path,s=r.queryId,a=wt(o,t),c=fr.fromObject(n),u=new Xn(Kn(s),a,c);return co(e,o,u)}return[]}function Zi(e,t,n,r=!1){const i=t._path;let s=null,a=!1;e.syncPointTree_.foreachOnPath(i,((e,t)=>{const n=wt(e,i);s=s||Ni(t,n),a=a||Li(t)}));let c,u=e.syncPointTree_.get(i);if(u?(a=a||Li(u),s=s||Ni(u,lt())):(u=new ki,e.syncPointTree_=e.syncPointTree_.set(i,u)),null!=s)c=!0;else{c=!1,s=mn.EMPTY_NODE;const t=e.syncPointTree_.subtree(i);t.foreachChild(((e,t)=>{const n=Ni(t,lt());n&&(s=s.updateImmediateChild(e,n))}))}const l=Mi(u,t);if(!l&&!t._queryParams.loadsAllData()){const n=oo(t);(0,o.hu)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=fo();e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}const h=Tr(e.pendingWriteTree_,i);let d=Pi(u,t,n,h,s,c);if(!l&&!a&&!r){const n=Ai(u,t);d=d.concat(po(e,t,n))}return d}function Xi(e,t,n){const r=!0,i=e.pendingWriteTree_,o=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=wt(e,t),i=Ni(n,r);if(i)return i}));return Ar(i,t,o,n,r)}function eo(e,t){return to(t,e.syncPointTree_,null,Tr(e.pendingWriteTree_,lt()))}function to(e,t,n,r){if(yt(e.path))return no(e,t,n,r);{const i=t.get(lt());null==n&&null!=i&&(n=Ni(i,lt()));let o=[];const s=ht(e.path),a=e.operationForChild(s),c=t.children.get(s);if(c&&a){const e=n?n.getImmediateChild(s):null,t=Br(r,s);o=o.concat(to(a,c,e,t))}return i&&(o=o.concat(Oi(i,e,r,n))),o}}function no(e,t,n,r){const i=t.get(lt());null==n&&null!=i&&(n=Ni(i,lt()));let o=[];return t.children.inorderTraversal(((t,i)=>{const s=n?n.getImmediateChild(t):null,a=Br(r,t),c=e.operationForChild(t);c&&(o=o.concat(no(c,i,s,a)))})),i&&(o=o.concat(Oi(i,e,r,n))),o}function ro(e,t){const n=t.query,r=io(e,n);return{hashFn:()=>{const e=pi(t)||mn.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return r?Gi(e,n._path,r):Bi(e,n._path);{const r=V(t,n);return Ki(e,n,null,r)}}}}function io(e,t){const n=oo(t);return e.queryToTagMap.get(n)}function oo(e){return e._path.toString()+"$"+e._queryIdentifier}function so(e,t){return e.tagToQueryMap.get(t)}function ao(e){const t=e.indexOf("$");return(0,o.hu)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ut(e.substr(0,t))}}function co(e,t,n){const r=e.syncPointTree_.get(t);(0,o.hu)(r,"Missing sync point for query tag that we're tracking");const i=Tr(e.pendingWriteTree_,t);return Oi(r,n,i,null)}function uo(e){return e.fold(((e,t,n)=>{if(t&&Li(t)){const e=Fi(t);return[e]}{let e=[];return t&&(e=Di(t)),j(n,((t,n)=>{e=e.concat(n)})),e}}))}function lo(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new($i())(e._repo,e._path):e}function ho(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=oo(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function fo(){return Ui++}function po(e,t,n){const r=t._path,i=io(e,t),s=ro(e,n),a=e.listenProvider_.startListening(lo(t),i,s.hashFn,s.onComplete),c=e.syncPointTree_.subtree(r);if(i)(0,o.hu)(!Li(c.value),"If we're adding a query, it shouldn't be shadowed");else{const t=c.fold(((e,t,n)=>{if(!yt(e)&&t&&Li(t))return[Fi(t).query];{let e=[];return t&&(e=e.concat(Di(t).map((e=>e.query)))),j(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(lo(r),io(e,r))}}return a}
/**
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
 */class mo{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new mo(t)}node(){return this.node_}}class _o{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=gt(this.path_,e);return new _o(this.syncTree_,t)}node(){return Xi(this.syncTree_,this.path_)}}const vo=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},go=function(e,t,n){return e&&"object"===typeof e?((0,o.hu)(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?yo(e[".sv"],t,n):"object"===typeof e[".sv"]?wo(e[".sv"],t):void(0,o.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},yo=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:(0,o.hu)(!1,"Unexpected server value: "+e)}},wo=function(e,t,n){e.hasOwnProperty("increment")||(0,o.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e["increment"];"number"!==typeof r&&(0,o.hu)(!1,"Unexpected increment value: "+r);const i=t.node();if((0,o.hu)(null!==i&&"undefined"!==typeof i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i,a=s.getValue();return"number"!==typeof a?r:a+r},bo=function(e,t,n,r){return Io(t,new _o(n,e),r)},Co=function(e,t,n){return Io(e,new mo(t),n)};function Io(e,t,n){const r=e.getPriority().val(),i=go(r,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const r=e,o=go(r.getValue(),t,n);return o!==r.getValue()||i!==r.getPriority().val()?new nn(o,yn(i)):e}{const r=e;return o=r,i!==r.getPriority().val()&&(o=o.updatePriority(new nn(i))),r.forEachChild(an,((e,r)=>{const i=Io(r,t.getImmediateChild(e),n);i!==r&&(o=o.updateImmediateChild(e,i))})),o}}
/**
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
 */class ko{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function To(e,t){let n=t instanceof ut?t:new ut(t),r=e,i=ht(n);while(null!==i){const e=(0,o.DV)(r.node.children,i)||{children:{},childCount:0};r=new ko(i,r,e),n=ft(n),i=ht(n)}return r}function So(e){return e.node.value}function Eo(e,t){e.node.value=t,Ao(e)}function Oo(e){return e.node.childCount>0}function xo(e){return void 0===So(e)&&!Oo(e)}function Po(e,t){j(e.node.children,((n,r)=>{t(new ko(n,e,r))}))}function Ro(e,t,n,r){n&&!r&&t(e),Po(e,(e=>{Ro(e,t,!0,r)})),n&&r&&t(e)}function Do(e,t,n){let r=n?e:e.parent;while(null!==r){if(t(r))return!0;r=r.parent}return!1}function No(e){return new ut(null===e.parent?e.name:No(e.parent)+"/"+e.name)}function Ao(e){null!==e.parent&&Mo(e.parent,e.name,e)}function Mo(e,t,n){const r=xo(n),i=(0,o.r3)(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Ao(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Ao(e))}
/**
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
 */const Lo=/[\[\].#$\/\u0000-\u001F\u007F]/,Fo=/[\[\].#$\u0000-\u001F\u007F]/,jo=10485760,$o=function(e){return"string"===typeof e&&0!==e.length&&!Lo.test(e)},Uo=function(e){return"string"===typeof e&&0!==e.length&&!Fo.test(e)},Wo=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Uo(e)},Vo=function(e){return null===e||"string"===typeof e||"number"===typeof e&&!x(e)||e&&"object"===typeof e&&(0,o.r3)(e,".sv")},Yo=function(e,t,n,r){r&&void 0===t||Ho((0,o.gK)(e,"value"),t,n)},Ho=function(e,t,n){const r=n instanceof ut?new kt(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Ot(r));if("function"===typeof t)throw new Error(e+"contains a function "+Ot(r)+" with contents = "+t.toString());if(x(t))throw new Error(e+"contains "+t.toString()+" "+Ot(r));if("string"===typeof t&&t.length>jo/3&&(0,o.ug)(t)>jo)throw new Error(e+"contains a string greater than "+jo+" utf8 bytes "+Ot(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,i=!1;if(j(t,((t,o)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!$o(t)))throw new Error(e+" contains an invalid key ("+t+") "+Ot(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Tt(r,t),Ho(e,o,r),St(r)})),n&&i)throw new Error(e+' contains ".value" child '+Ot(r)+" in addition to actual children.")}},qo=function(e,t){let n,r;for(n=0;n<t.length;n++){r=t[n];const i=_t(r);for(let t=0;t<i.length;t++)if(".priority"===i[t]&&t===i.length-1);else if(!$o(i[t]))throw new Error(e+"contains an invalid key ("+i[t]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(bt);let i=null;for(n=0;n<t.length;n++){if(r=t[n],null!==i&&It(i,r))throw new Error(e+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},zo=function(e,t,n,r){if(r&&void 0===t)return;const i=(0,o.gK)(e,"values");if(!t||"object"!==typeof t||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.");const s=[];j(t,((e,t)=>{const r=new ut(e);if(Ho(i,t,gt(n,r)),".priority"===pt(r)&&!Vo(t))throw new Error(i+"contains an invalid value for '"+r.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(r)})),qo(i,s)},Bo=function(e,t,n,r){if((!r||void 0!==n)&&!Uo(n))throw new Error((0,o.gK)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Go=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Bo(e,t,n,r)},Ko=function(e,t){if(".info"===ht(t))throw new Error(e+" failed = Can't modify data under /.info/")},Jo=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!$o(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!Wo(n))throw new Error((0,o.gK)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
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
 */
class Qo{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Zo(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],o=i.getPath();null===n||Ct(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function Xo(e,t,n){Zo(e,n),ts(e,(e=>Ct(e,t)))}function es(e,t,n){Zo(e,n),ts(e,(e=>It(e,t)||It(t,e)))}function ts(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const o=i.path;t(o)?(ns(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function ns(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();w&&I("event: "+n.toString()),B(r)}}}
/**
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
 */const rs="repo_interrupt",is=25;class os{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Qo,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Fn(),this.transactionQueueTree_=new ko,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ss(e,t,n){if(e.stats_=_e(e.repoInfo_),e.forceRestClient_||G())e.server_=new Mn(e.repoInfo_,((t,n,r,i)=>{us(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>ls(e,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,o.Wl)(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new Ft(e.repoInfo_,t,((t,n,r,i)=>{us(e,t,n,r,i)}),(t=>{ls(e,t)}),(t=>{hs(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=ve(e.repoInfo_,(()=>new qn(e.stats_,e.server_))),e.infoData_=new Ln,e.infoSyncTree_=new Wi({startListening:(t,n,r,i)=>{let o=[];const s=e.infoData_.getNode(t._path);return s.isEmpty()||(o=qi(e.infoSyncTree_,t._path,s),setTimeout((()=>{i("ok")}),0)),o},stopListening:()=>{}}),ds(e,"connected",!1),e.serverSyncTree_=new Wi({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const o=i(n,r);es(e.eventQueue_,t._path,o)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function as(e){const t=e.infoData_.getNode(new ut(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function cs(e){return vo({timestamp:as(e)})}function us(e,t,n,r,i){e.dataUpdateCount++;const s=new ut(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(i)if(r){const t=(0,o.UI)(n,(e=>yn(e)));a=Qi(e.serverSyncTree_,s,t,i)}else{const t=yn(n);a=Ji(e.serverSyncTree_,s,t,i)}else if(r){const t=(0,o.UI)(n,(e=>yn(e)));a=zi(e.serverSyncTree_,s,t)}else{const t=yn(n);a=qi(e.serverSyncTree_,s,t)}let c=s;a.length>0&&(c=Ts(e,s)),es(e.eventQueue_,c,a)}function ls(e,t){ds(e,"connected",t),!1===t&&_s(e)}function hs(e,t){j(t,((t,n)=>{ds(e,t,n)}))}function ds(e,t,n){const r=new ut("/.info/"+t),i=yn(n);e.infoData_.updateSnapshot(r,i);const o=qi(e.infoSyncTree_,r,i);es(e.eventQueue_,r,o)}function fs(e){return e.nextWriteId_++}function ps(e,t,n,r,i){ws(e,"set",{path:t.toString(),value:n,priority:r});const o=cs(e),s=yn(n,r),a=Xi(e.serverSyncTree_,t),c=Co(s,a,o),u=fs(e),l=Vi(e.serverSyncTree_,t,c,u,!0);Zo(e.eventQueue_,l),e.server_.put(t.toString(),s.val(!0),((n,r)=>{const o="ok"===n;o||E("set at "+t+" failed: "+n);const s=Hi(e.serverSyncTree_,u,!o);es(e.eventQueue_,t,s),bs(e,i,n,r)}));const h=Rs(e,t);Ts(e,h),es(e.eventQueue_,h,[])}function ms(e,t,n,r){ws(e,"update",{path:t.toString(),value:n});let i=!0;const o=cs(e),s={};if(j(n,((n,r)=>{i=!1,s[n]=bo(gt(t,n),yn(r),e.serverSyncTree_,o)})),i)I("update() called with empty data.  Don't do anything."),bs(e,r,"ok",void 0);else{const i=fs(e),o=Yi(e.serverSyncTree_,t,s,i);Zo(e.eventQueue_,o),e.server_.merge(t.toString(),n,((n,o)=>{const s="ok"===n;s||E("update at "+t+" failed: "+n);const a=Hi(e.serverSyncTree_,i,!s),c=a.length>0?Ts(e,t):t;es(e.eventQueue_,c,a),bs(e,r,n,o)})),j(n,(n=>{const r=Rs(e,gt(t,n));Ts(e,r)})),es(e.eventQueue_,t,[])}}function _s(e){ws(e,"onDisconnectEvents");const t=cs(e),n=Fn();$n(e.onDisconnect_,lt(),((r,i)=>{const o=bo(r,i,e.serverSyncTree_,t);jn(n,r,o)}));let r=[];$n(n,lt(),((t,n)=>{r=r.concat(qi(e.serverSyncTree_,t,n));const i=Rs(e,t);Ts(e,i)})),e.onDisconnect_=Fn(),es(e.eventQueue_,lt(),r)}function vs(e,t,n){let r;r=".info"===ht(t._path)?Zi(e.infoSyncTree_,t,n):Zi(e.serverSyncTree_,t,n),Xo(e.eventQueue_,t._path,r)}function gs(e,t,n){let r;r=".info"===ht(t._path)?Ki(e.infoSyncTree_,t,n):Ki(e.serverSyncTree_,t,n),Xo(e.eventQueue_,t._path,r)}function ys(e){e.persistentConnection_&&e.persistentConnection_.interrupt(rs)}function ws(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),I(n,...t)}function bs(e,t,n,r){t&&B((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const o=new Error(i);o.code=e,t(o)}}))}function Cs(e,t,n){return Xi(e.serverSyncTree_,t,n)||mn.EMPTY_NODE}function Is(e,t=e.transactionQueueTree_){if(t||Ps(e,t),So(t)){const n=Os(e,t);(0,o.hu)(n.length>0,"Sending zero length transaction queue");const r=n.every((e=>0===e.status));r&&ks(e,No(t),n)}else Oo(t)&&Po(t,(t=>{Is(e,t)}))}function ks(e,t,n){const r=n.map((e=>e.currentWriteId)),i=Cs(e,t,r);let s=i;const a=i.hash();for(let l=0;l<n.length;l++){const e=n[l];(0,o.hu)(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const r=wt(t,e.path);s=s.updateChild(r,e.currentOutputSnapshotRaw)}const c=s.val(!0),u=t;e.server_.put(u.toString(),c,(r=>{ws(e,"transaction put response",{path:u.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(Hi(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Ps(e,To(e.transactionQueueTree_,t)),Is(e,e.transactionQueueTree_),es(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)B(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{E("transaction at "+u.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}Ts(e,t)}}),a)}function Ts(e,t){const n=Es(e,t),r=No(n),i=Os(e,n);return Ss(e,i,r),r}function Ss(e,t,n){if(0===t.length)return;const r=[];let i=[];const s=t.filter((e=>0===e.status)),a=s.map((e=>e.currentWriteId));for(let c=0;c<t.length;c++){const s=t[c],u=wt(n,s.path);let l,h=!1;if((0,o.hu)(null!==u,"rerunTransactionsUnderNode_: relativePath should not be null."),4===s.status)h=!0,l=s.abortReason,i=i.concat(Hi(e.serverSyncTree_,s.currentWriteId,!0));else if(0===s.status)if(s.retryCount>=is)h=!0,l="maxretry",i=i.concat(Hi(e.serverSyncTree_,s.currentWriteId,!0));else{const n=Cs(e,s.path,a);s.currentInputSnapshot=n;const r=t[c].update(n.val());if(void 0!==r){Ho("transaction failed: Data returned ",r,s.path);let t=yn(r);const c="object"===typeof r&&null!=r&&(0,o.r3)(r,".priority");c||(t=t.updatePriority(n.getPriority()));const u=s.currentWriteId,l=cs(e),h=Co(t,n,l);s.currentOutputSnapshotRaw=t,s.currentOutputSnapshotResolved=h,s.currentWriteId=fs(e),a.splice(a.indexOf(u),1),i=i.concat(Vi(e.serverSyncTree_,s.path,h,s.currentWriteId,s.applyLocally)),i=i.concat(Hi(e.serverSyncTree_,u,!0))}else h=!0,l="nodata",i=i.concat(Hi(e.serverSyncTree_,s.currentWriteId,!0))}es(e.eventQueue_,n,i),i=[],h&&(t[c].status=2,function(e){setTimeout(e,Math.floor(0))}(t[c].unwatcher),t[c].onComplete&&("nodata"===l?r.push((()=>t[c].onComplete(null,!1,t[c].currentInputSnapshot))):r.push((()=>t[c].onComplete(new Error(l),!1,null)))))}Ps(e,e.transactionQueueTree_);for(let o=0;o<r.length;o++)B(r[o]);Is(e,e.transactionQueueTree_)}function Es(e,t){let n,r=e.transactionQueueTree_;n=ht(t);while(null!==n&&void 0===So(r))r=To(r,n),t=ft(t),n=ht(t);return r}function Os(e,t){const n=[];return xs(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function xs(e,t,n){const r=So(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Po(t,(t=>{xs(e,t,n)}))}function Ps(e,t){const n=So(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Eo(t,n.length>0?n:void 0)}Po(t,(t=>{Ps(e,t)}))}function Rs(e,t){const n=No(Es(e,t)),r=To(e.transactionQueueTree_,t);return Do(r,(t=>{Ds(e,t)})),Ds(e,r),Ro(r,(t=>{Ds(e,t)})),n}function Ds(e,t){const n=So(t);if(n){const r=[];let i=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,o.hu)(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):((0,o.hu)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(Hi(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Eo(t,void 0):n.length=s+1,es(e.eventQueue_,No(t),i);for(let e=0;e<r.length;e++)B(r[e])}}
/**
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
 */function Ns(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let e=n[i];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(r){}t+="/"+e}return t}function As(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):E(`Invalid query segment '${n}' in query '${e}'`)}return t}const Ms=function(e,t){const n=Ls(e),r=n.namespace;"firebase.com"===n.domain&&S(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||S("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||O();const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new le(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new ut(n.pathString)}},Ls=function(e){let t="",n="",r="",i="",o="",s=!0,a="https",c=443;if("string"===typeof e){let u=e.indexOf("//");u>=0&&(a=e.substring(0,u-1),e=e.substring(u+2));let l=e.indexOf("/");-1===l&&(l=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(l,h)),l<h&&(i=Ns(e.substring(l,h)));const d=As(e.substring(Math.min(e.length,h)));u=t.indexOf(":"),u>=0?(s="https"===a||"wss"===a,c=parseInt(t.substring(u+1),10)):u=t.length;const f=t.slice(0,u);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),o=r}"ns"in d&&(o=d["ns"])}return{host:t,port:c,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}},Fs="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",js=function(){let e=0;const t=[];return function(n){const r=n===e;let i;e=n;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Fs.charAt(n%64),n=Math.floor(n/64);(0,o.hu)(0===n,"Cannot push at time == 0");let a=s.join("");if(r){for(i=11;i>=0&&63===t[i];i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(64*Math.random());for(i=0;i<12;i++)a+=Fs.charAt(t[i]);return(0,o.hu)(20===a.length,"nextPushId: Length should be 20."),a}}();
/**
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
 */
class $s{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,o.Wl)(this.snapshot.exportVal())}}class Us{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
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
 */class Ws{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,o.hu)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
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
 */
/**
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
 */
class Vs{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return yt(this._path)?null:pt(this._path)}get ref(){return new Ys(this._repo,this._path)}get _queryIdentifier(){const e=An(this._queryParams),t=L(e);return"{}"===t?"default":t}get _queryObject(){return An(this._queryParams)}isEqual(e){if(e=(0,o.m9)(e),!(e instanceof Vs))return!1;const t=this._repo===e._repo,n=Ct(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+mt(this._path)}}class Ys extends Vs{constructor(e,t){super(e,t,new Rn,!1)}get parent(){const e=vt(this._path);return null===e?null:new Ys(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class Hs{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ut(e),n=zs(this.ref,e);return new Hs(this._node.getChild(t),n,an)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,((t,n)=>e(new Hs(n,zs(this.ref,t),an))))}hasChild(e){const t=new ut(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function qs(e,t){return e=(0,o.m9)(e),e._checkNotDeleted("ref"),void 0!==t?zs(e._root,t):e._root}function zs(e,t){return e=(0,o.m9)(e),null===ht(e._path)?Go("child","path",t,!1):Bo("child","path",t,!1),new Ys(e._repo,gt(e._path,t))}function Bs(e,t){e=(0,o.m9)(e),Ko("push",e._path),Yo("push",t,e._path,!0);const n=as(e._repo),r=js(n),i=zs(e,r),s=zs(e,r);let a;return a=null!=t?Gs(s,t).then((()=>s)):Promise.resolve(s),i.then=a.then.bind(a),i.catch=a.then.bind(a,void 0),i}function Gs(e,t){e=(0,o.m9)(e),Ko("set",e._path),Yo("set",t,e._path,!1);const n=new o.BH;return ps(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function Ks(e,t){zo("update",t,e._path,!1);const n=new o.BH;return ms(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}class Js{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new $s("value",this,new Hs(e.snapshotNode,new Ys(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Us(this,e,t):null}matches(e){return e instanceof Js&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Qs{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Us(this,e,t):null}createEvent(e,t){(0,o.hu)(null!=e.childName,"Child events should have a childName.");const n=zs(new Ys(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new $s(e.type,this,new Hs(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Qs&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Zs(e,t,n,r,i){let o;if("object"===typeof r&&(o=void 0,i=r),"function"===typeof r&&(o=r),i&&i.onlyOnce){const t=n,r=(n,r)=>{gs(e._repo,e,a),t(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}const s=new Ws(n,o||void 0),a="value"===t?new Js(s):new Qs(t,s);return vs(e._repo,e,a),()=>gs(e._repo,e,a)}function Xs(e,t,n,r){return Zs(e,"value",t,n,r)}Ti(Ys),ji(Ys);
/**
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
 */
const ea="FIREBASE_DATABASE_EMULATOR_HOST",ta={};let na=!1;function ra(e,t,n,r){e.repoInfo_=new le(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}function ia(e,t,n,r,i){let o=r||e.options.databaseURL;void 0===o&&(e.options.projectId||S("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),I("Using default host for project ",e.options.projectId),o=`${e.options.projectId}-default-rtdb.firebaseio.com`);let s,a,c=Ms(o,i),u=c.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",BASE_URL:"/"}[ea]),a?(s=!0,o=`http://${a}?ns=${u.namespace}`,c=Ms(o,i),u=c.repoInfo):s=!c.repoInfo.secure;const l=i&&s?new Z(Z.OWNER):new Q(e.name,e.options,t);Jo("Invalid Firebase Database URL",c),yt(c.path)||S("Database URL must point to the root of a Firebase Database (not including a child path).");const h=sa(u,e,l,new J(e.name,n));return new aa(h,e)}function oa(e,t){const n=ta[t];n&&n[e.key]===e||S(`Database ${t}(${e.repoInfo_}) has already been deleted.`),ys(e),delete n[e.key]}function sa(e,t,n,r){let i=ta[t.name];i||(i={},ta[t.name]=i);let o=i[e.toURLString()];return o&&S("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new os(e,na,n,r),i[e.toURLString()]=o,o}class aa{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ss(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ys(this._repo,lt())),this._rootInternal}_delete(){return null!==this._rootInternal&&(oa(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&S("Cannot call "+e+" on a deleted database.")}}function ca(e=(0,r.Mq)(),t){const n=(0,r.qX)(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=(0,o.P0)("database");e&&ua(n,...e)}return n}function ua(e,t,n,r={}){e=(0,o.m9)(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&S("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&S('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Z(Z.OWNER);else if(r.mockUserToken){const t="string"===typeof r.mockUserToken?r.mockUserToken:(0,o.Sg)(r.mockUserToken,e.app.options.projectId);s=new Z(t)}ra(i,t,n,s)}
/**
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
 */
function la(e){l(r.Jn),(0,r.Xd)(new i.wA("database",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return ia(n,r,i,t)}),"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(a,c,e),(0,r.KN)(a,c,"esm2017")}
/**
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
 */Ft.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Ft.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};la()}}]);
//# sourceMappingURL=chunk-vendors.02559245.js.map