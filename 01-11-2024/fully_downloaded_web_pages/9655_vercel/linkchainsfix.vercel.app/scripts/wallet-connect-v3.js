(()=>{var BFe=Object.create;var N4=Object.defineProperty;var qFe=Object.getOwnPropertyDescriptor;var LFe=Object.getOwnPropertyNames;var FFe=Object.getPrototypeOf,UFe=Object.prototype.hasOwnProperty;var jre=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,r)=>(typeof require<"u"?require:e)[r]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});var M=(t,e)=>()=>(t&&(e=t(t=0)),e);var b=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),on=(t,e)=>{for(var r in e)N4(t,r,{get:e[r],enumerable:!0})},k4=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of LFe(e))!UFe.call(t,i)&&i!==r&&N4(t,i,{get:()=>e[i],enumerable:!(n=qFe(e,i))||n.enumerable});return t},Fo=(t,e,r)=>(k4(t,e,"default"),r&&k4(r,e,"default")),Mt=(t,e,r)=>(r=t!=null?BFe(FFe(t)):{},k4(e||!t||!t.__esModule?N4(r,"default",{value:t,enumerable:!0}):r,t)),Kt=t=>k4(N4({},"__esModule",{value:!0}),t);var Mre,kre=M(()=>{Mre="1.10.12"});var Nre,Od,Dre,c_=M(()=>{kre();Nre=t=>t,Od=t=>t,Dre=()=>`viem@${Mre}`});function Bre(t,e){return e?.(t)?t:t&&typeof t=="object"&&"cause"in t?Bre(t.cause,e):e?null:t}var ve,Tr=M(()=>{c_();ve=class t extends Error{constructor(e,r={}){super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:Dre()});let n=r.cause instanceof t?r.cause.details:r.cause?.message?r.cause.message:r.details,i=r.cause instanceof t&&r.cause.docsPath||r.docsPath;this.message=[e||"An error occurred.","",...r.metaMessages?[...r.metaMessages,""]:[],...i?[`Docs: https://viem.sh${i}.html${r.docsSlug?`#${r.docsSlug}`:""}`]:[],...n?[`Details: ${n}`]:[],`Version: ${this.version}`].join(`
`),r.cause&&(this.cause=r.cause),this.details=n,this.docsPath=i,this.metaMessages=r.metaMessages,this.shortMessage=e}walk(e){return Bre(this,e)}}});var i0,D4,B4,u_,Td,l_=M(()=>{Tr();i0=class extends ve{constructor({blockNumber:e,chain:r,contract:n}){super(`Chain "${r.name}" does not support contract "${n.name}".`,{metaMessages:["This could be due to any of the following:",...e&&n.blockCreated&&n.blockCreated>e?[`- The contract "${n.name}" was not deployed until block ${n.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${n.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}},D4=class extends ve{constructor({chain:e,currentChainId:r}){super(`The current chain of the wallet (id: ${r}) does not match the target chain for the transaction (id: ${e.id} \u2013 ${e.name}).`,{metaMessages:[`Current Chain ID:  ${r}`,`Expected Chain ID: ${e.id} \u2013 ${e.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}},B4=class extends ve{constructor(){super(["No chain was provided to the request.","Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}},u_=class extends ve{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}},Td=class extends ve{constructor({chainId:e}){super(`Chain ID "${e}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidChainIdError"})}}});function q4({chain:t,currentChainId:e}){if(!t)throw new B4;if(e!==t.id)throw new D4({chain:t,currentChainId:e})}function En(t,e={}){let{fees:r=t.fees,formatters:n=t.formatters,serializers:i=t.serializers}=e;return{...t,fees:r,formatters:n,serializers:i}}function Oa({blockNumber:t,chain:e,contract:r}){let n=e?.contracts?.[r];if(!n)throw new i0({chain:e,contract:{name:r}});if(t&&n.blockCreated&&n.blockCreated>t)throw new i0({blockNumber:t,chain:e,contract:{name:r,blockCreated:n.blockCreated}});return n.address}var Qn=M(()=>{l_()});var L4,F4,U4,FN=M(()=>{Tr();L4=class extends ve{constructor({max:e,min:r,signed:n,size:i,value:o}){super(`Number "${o}" is not in safe ${i?`${i*8}-bit ${n?"signed":"unsigned"} `:""}integer range ${e?`(${r} to ${e})`:`(above ${r})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}},F4=class extends ve{constructor(e){super(`Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidHexBooleanError"})}},U4=class extends ve{constructor({givenSize:e,maxSize:r}){super(`Size cannot exceed ${r} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}});function qn(t,{strict:e=!0}={}){return!t||typeof t!="string"?!1:e?/^0x[0-9a-fA-F]*$/.test(t):t.startsWith("0x")}var Cc=M(()=>{});function dn(t){return qn(t,{strict:!1})?Math.ceil((t.length-2)/2):t.length}var o0=M(()=>{Cc()});function Ii(t,{dir:e="left"}={}){let r=typeof t=="string"?t.replace("0x",""):t,n=0;for(let i=0;i<r.length-1&&r[e==="left"?i:r.length-i-1].toString()==="0";i++)n++;return r=e==="left"?r.slice(n):r.slice(0,r.length-n),typeof t=="string"?(r.length===1&&e==="right"&&(r=`${r}0`),`0x${r.length%2===1?`0${r}`:r}`):r}var s0=M(()=>{});var f_,d_,UN=M(()=>{Tr();f_=class extends ve{constructor({offset:e,position:r,size:n}){super(`Slice ${r==="start"?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${n}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}},d_=class extends ve{constructor({size:e,targetSize:r,type:n}){super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} size (${e}) exceeds padding size (${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}});function Rd(t,{dir:e,size:r=32}={}){return typeof t=="string"?$l(t,{dir:e,size:r}):$Fe(t,{dir:e,size:r})}function $l(t,{dir:e,size:r=32}={}){if(r===null)return t;let n=t.replace("0x","");if(n.length>r*2)throw new d_({size:Math.ceil(n.length/2),targetSize:r,type:"hex"});return`0x${n[e==="right"?"padEnd":"padStart"](r*2,"0")}`}function $Fe(t,{dir:e,size:r=32}={}){if(r===null)return t;if(t.length>r)throw new d_({size:t.length,targetSize:r,type:"bytes"});let n=new Uint8Array(r);for(let i=0;i<r;i++){let o=e==="right";n[o?i:r-i-1]=t[o?i:t.length-i-1]}return n}var $4=M(()=>{UN()});function dt(t,e={}){return typeof t=="number"||typeof t=="bigint"?Ue(t,e):typeof t=="string"?a0(t,e):typeof t=="boolean"?h_(t,e):Pc(t,e)}function h_(t,e={}){let r=`0x${Number(t)}`;return typeof e.size=="number"?(hu(r,{size:e.size}),Rd(r,{size:e.size})):r}function Pc(t,e={}){let r="";for(let i=0;i<t.length;i++)r+=HFe[t[i]];let n=`0x${r}`;return typeof e.size=="number"?(hu(n,{size:e.size}),Rd(n,{dir:"right",size:e.size})):n}function Ue(t,e={}){let{signed:r,size:n}=e,i=BigInt(t),o;n?r?o=(1n<<BigInt(n)*8n-1n)-1n:o=2n**(BigInt(n)*8n)-1n:typeof t=="number"&&(o=BigInt(Number.MAX_SAFE_INTEGER));let s=typeof o=="bigint"&&r?-o-1n:0;if(o&&i>o||i<s){let c=typeof t=="bigint"?"n":"";throw new L4({max:o?`${o}${c}`:void 0,min:`${s}${c}`,signed:r,size:n,value:`${t}${c}`})}let a=`0x${(r&&i<0?(1n<<BigInt(n*8))+BigInt(i):i).toString(16)}`;return n?Rd(a,{size:n}):a}function a0(t,e={}){let r=zFe.encode(t);return Pc(r,e)}var HFe,zFe,Zt=M(()=>{FN();$4();ms();HFe=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));zFe=new TextEncoder});function Vi(t,e={}){return typeof t=="number"||typeof t=="bigint"?GFe(t,e):typeof t=="boolean"?VFe(t,e):qn(t)?H4(t,e):gs(t,e)}function VFe(t,e={}){let r=new Uint8Array(1);return r[0]=Number(t),typeof e.size=="number"?(hu(r,{size:e.size}),Rd(r,{size:e.size})):r}function H4(t,e={}){let r=t;e.size&&(hu(r,{size:e.size}),r=Rd(r,{dir:"right",size:e.size}));let n=r.slice(2);n.length%2&&(n=`0${n}`);let i=new Uint8Array(n.length/2);for(let o=0;o<i.length;o++){let s=o*2,a=n.slice(s,s+2),c=Number.parseInt(a,16);if(Number.isNaN(c)||c<0)throw new ve(`Invalid byte sequence ("${a}" in "${n}").`);i[o]=c}return i}function GFe(t,e){let r=Ue(t,e);return H4(r)}function gs(t,e={}){let r=WFe.encode(t);return typeof e.size=="number"?(hu(r,{size:e.size}),Rd(r,{dir:"right",size:e.size})):r}var WFe,Ta=M(()=>{Tr();Cc();$4();ms();Zt();WFe=new TextEncoder});function hu(t,{size:e}){if(dn(t)>e)throw new U4({givenSize:dn(t),maxSize:e})}function Oi(t,e={}){let{signed:r}=e;e.size&&hu(t,{size:e.size});let n=BigInt(t);if(!r)return n;let i=(t.length-2)/2,o=(1n<<BigInt(i)*8n-1n)-1n;return n<=o?n:n-BigInt(`0x${"f".padStart(i*2,"f")}`)-1n}function $N(t,e={}){let r=t;if(e.size&&(hu(r,{size:e.size}),r=Ii(r)),Ii(r)==="0x00")return!1;if(Ii(r)==="0x01")return!0;throw new F4(r)}function Ln(t,e={}){return Number(Oi(t,e))}function p_(t,e={}){let r=H4(t);return e.size&&(hu(r,{size:e.size}),r=Ii(r,{dir:"right"})),new TextDecoder().decode(r)}var ms=M(()=>{FN();o0();s0();Ta()});function jd(t,e){return({exclude:r,format:n})=>({exclude:r,format:i=>{let o=e(i);if(r)for(let s of r)delete o[s];return{...o,...n(i)}},type:t})}var m_=M(()=>{});function zl(t){return{...t,gas:typeof t.gas<"u"?Ue(t.gas):void 0,gasPrice:typeof t.gasPrice<"u"?Ue(t.gasPrice):void 0,maxFeePerGas:typeof t.maxFeePerGas<"u"?Ue(t.maxFeePerGas):void 0,maxPriorityFeePerGas:typeof t.maxPriorityFeePerGas<"u"?Ue(t.maxPriorityFeePerGas):void 0,nonce:typeof t.nonce<"u"?Ue(t.nonce):void 0,type:typeof t.type<"u"?ZFe[t.type]:void 0,value:typeof t.value<"u"?Ue(t.value):void 0}}var ZFe,qre,i1=M(()=>{Zt();m_();ZFe={legacy:"0x0",eip2930:"0x1",eip1559:"0x2"};qre=jd("transactionRequest",zl)});var Fn,Wl=M(()=>{Tr();Fn=class extends ve{constructor({address:e}){super(`Address "${e}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}});var GN,KN,ZN,K4=M(()=>{GN={gwei:9,wei:18},KN={ether:-9,wei:9},ZN={ether:-18,gwei:-9}});function Md(t,e){let r=t.toString(),n=r.startsWith("-");n&&(r=r.slice(1)),r=r.padStart(e,"0");let[i,o]=[r.slice(0,r.length-e),r.slice(r.length-e)];return o=o.replace(/(0+)$/,""),`${n?"-":""}${i||"0"}${o?`.${o}`:""}`}var Z4=M(()=>{});function bi(t,e="wei"){return Md(t,KN[e])}var o1=M(()=>{K4();Z4()});var Vl,bs,s1,a1,c1,u1,l1,f1,d1,h1,Ra,pu,kd=M(()=>{o1();Tr();Vl=class extends ve{constructor({cause:e,message:r}={}){let n=r?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${n?`with reason: ${n}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}};Object.defineProperty(Vl,"code",{enumerable:!0,configurable:!0,writable:!0,value:3});Object.defineProperty(Vl,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});bs=class extends ve{constructor({cause:e,maxFeePerGas:r}={}){super(`The fee cap (\`maxFeePerGas\`${r?` = ${bi(r)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}};Object.defineProperty(bs,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});s1=class extends ve{constructor({cause:e,maxFeePerGas:r}={}){super(`The fee cap (\`maxFeePerGas\`${r?` = ${bi(r)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}};Object.defineProperty(s1,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});a1=class extends ve{constructor({cause:e,nonce:r}={}){super(`Nonce provided for the transaction ${r?`(${r}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}};Object.defineProperty(a1,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});c1=class extends ve{constructor({cause:e,nonce:r}={}){super([`Nonce provided for the transaction ${r?`(${r}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}};Object.defineProperty(c1,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});u1=class extends ve{constructor({cause:e,nonce:r}={}){super(`Nonce provided for the transaction ${r?`(${r}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}};Object.defineProperty(u1,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});l1=class extends ve{constructor({cause:e}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`),{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}};Object.defineProperty(l1,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});f1=class extends ve{constructor({cause:e,gas:r}={}){super(`The amount of gas ${r?`(${r}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}};Object.defineProperty(f1,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});d1=class extends ve{constructor({cause:e,gas:r}={}){super(`The amount of gas ${r?`(${r}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}};Object.defineProperty(d1,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});h1=class extends ve{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}};Object.defineProperty(h1,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});Ra=class extends ve{constructor({cause:e,maxPriorityFeePerGas:r,maxFeePerGas:n}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${r?` = ${bi(r)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${n?` = ${bi(n)} gwei`:""}).`].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}};Object.defineProperty(Ra,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});pu=class extends ve{constructor({cause:e}){super(`An error occurred while executing: ${e?.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}});function Un(t){return JFe.test(t)}var JFe,mu=M(()=>{JFe=/^0x[a-fA-F0-9]{40}$/});function Gi(t){return typeof t[0]=="string"?gu(t):QFe(t)}function QFe(t){let e=0;for(let i of t)e+=i.length;let r=new Uint8Array(e),n=0;for(let i of t)r.set(i,n),n+=i.length;return r}function gu(t){return`0x${t.reduce((e,r)=>e+r.replace("0x",""),"")}`}var Ic=M(()=>{});function m1(t,e="wei"){return Md(t,GN[e])}var J4=M(()=>{K4();Z4()});function c0(t){let e=Object.entries(t).map(([n,i])=>i===void 0||i===!1?null:[n,i]).filter(Boolean),r=e.reduce((n,[i])=>Math.max(n,i.length),0);return e.map(([n,i])=>`  ${`${n}:`.padEnd(r+1)}  ${i}`).join(`
`)}var Q4,Y4,X4,eS,tS,g1,b1,rS,Oc=M(()=>{J4();o1();Tr();Q4=class extends ve{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}},Y4=class extends ve{constructor({v:e}){super(`Invalid \`v\` value "${e}". Expected 27 or 28.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidLegacyVError"})}},X4=class extends ve{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",c0(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}},eS=class extends ve{constructor({storageKey:e}){super(`Size for storage key "${e}" is invalid. Expected 32 bytes. Got ${Math.floor((e.length-2)/2)} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidStorageKeySizeError"})}},tS=class extends ve{constructor(e,{account:r,docsPath:n,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:d,to:h,value:m}){let g=c0({chain:i&&`${i?.name} (id: ${i?.id})`,from:r?.address,to:h,value:typeof m<"u"&&`${m1(m)} ${i?.nativeCurrency.symbol||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${bi(a)} gwei`,maxFeePerGas:typeof c<"u"&&`${bi(c)} gwei`,maxPriorityFeePerGas:typeof l<"u"&&`${bi(l)} gwei`,nonce:d});super(e.shortMessage,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Request Arguments:",g].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=e}},g1=class extends ve{constructor({blockHash:e,blockNumber:r,blockTag:n,hash:i,index:o}){let s="Transaction";n&&o!==void 0&&(s=`Transaction at block time "${n}" at index "${o}"`),e&&o!==void 0&&(s=`Transaction at block hash "${e}" at index "${o}"`),r&&o!==void 0&&(s=`Transaction at block number "${r}" at index "${o}"`),i&&(s=`Transaction with hash "${i}"`),super(`${s} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}},b1=class extends ve{constructor({hash:e}){super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}},rS=class extends ve{constructor({hash:e}){super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}});var Zre=b((QKt,rD)=>{"use strict";var aUe=Object.prototype.hasOwnProperty,$o="~";function v_(){}Object.create&&(v_.prototype=Object.create(null),new v_().__proto__||($o=!1));function cUe(t,e,r){this.fn=t,this.context=e,this.once=r||!1}function Kre(t,e,r,n,i){if(typeof r!="function")throw new TypeError("The listener must be a function");var o=new cUe(r,n||t,i),s=$o?$o+e:e;return t._events[s]?t._events[s].fn?t._events[s]=[t._events[s],o]:t._events[s].push(o):(t._events[s]=o,t._eventsCount++),t}function iS(t,e){--t._eventsCount===0?t._events=new v_:delete t._events[e]}function po(){this._events=new v_,this._eventsCount=0}po.prototype.eventNames=function(){var e=[],r,n;if(this._eventsCount===0)return e;for(n in r=this._events)aUe.call(r,n)&&e.push($o?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(r)):e};po.prototype.listeners=function(e){var r=$o?$o+e:e,n=this._events[r];if(!n)return[];if(n.fn)return[n.fn];for(var i=0,o=n.length,s=new Array(o);i<o;i++)s[i]=n[i].fn;return s};po.prototype.listenerCount=function(e){var r=$o?$o+e:e,n=this._events[r];return n?n.fn?1:n.length:0};po.prototype.emit=function(e,r,n,i,o,s){var a=$o?$o+e:e;if(!this._events[a])return!1;var c=this._events[a],l=arguments.length,d,h;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,r),!0;case 3:return c.fn.call(c.context,r,n),!0;case 4:return c.fn.call(c.context,r,n,i),!0;case 5:return c.fn.call(c.context,r,n,i,o),!0;case 6:return c.fn.call(c.context,r,n,i,o,s),!0}for(h=1,d=new Array(l-1);h<l;h++)d[h-1]=arguments[h];c.fn.apply(c.context,d)}else{var m=c.length,g;for(h=0;h<m;h++)switch(c[h].once&&this.removeListener(e,c[h].fn,void 0,!0),l){case 1:c[h].fn.call(c[h].context);break;case 2:c[h].fn.call(c[h].context,r);break;case 3:c[h].fn.call(c[h].context,r,n);break;case 4:c[h].fn.call(c[h].context,r,n,i);break;default:if(!d)for(g=1,d=new Array(l-1);g<l;g++)d[g-1]=arguments[g];c[h].fn.apply(c[h].context,d)}}return!0};po.prototype.on=function(e,r,n){return Kre(this,e,r,n,!1)};po.prototype.once=function(e,r,n){return Kre(this,e,r,n,!0)};po.prototype.removeListener=function(e,r,n,i){var o=$o?$o+e:e;if(!this._events[o])return this;if(!r)return iS(this,o),this;var s=this._events[o];if(s.fn)s.fn===r&&(!i||s.once)&&(!n||s.context===n)&&iS(this,o);else{for(var a=0,c=[],l=s.length;a<l;a++)(s[a].fn!==r||i&&!s[a].once||n&&s[a].context!==n)&&c.push(s[a]);c.length?this._events[o]=c.length===1?c[0]:c:iS(this,o)}return this};po.prototype.removeAllListeners=function(e){var r;return e?(r=$o?$o+e:e,this._events[r]&&iS(this,r)):(this._events=new v_,this._eventsCount=0),this};po.prototype.off=po.prototype.removeListener;po.prototype.addListener=po.prototype.on;po.prefixed=$o;po.EventEmitter=po;typeof rD<"u"&&(rD.exports=po)});function zo(t,{includeName:e=!1}={}){if(t.type!=="function"&&t.type!=="event"&&t.type!=="error")throw new oS(t.type);return`${t.name}(${w_(t.inputs,{includeName:e})})`}function w_(t,{includeName:e=!1}={}){return t?t.map(r=>uUe(r,{includeName:e})).join(e?", ":","):""}function uUe(t,{includeName:e}){return t.type.startsWith("tuple")?`(${w_(t.components,{includeName:e})})${t.type.slice(5)}`:t.type+(e&&t.name?` ${t.name}`:"")}var Nd=M(()=>{yi()});var sS,__,u0,yu,aS,cS,uS,y1,lS,fS,x_,Dd,dS,hS,Wo,ys,pS,mS,gS,oS,yi=M(()=>{Nd();o0();Tr();sS=class extends ve{constructor({docsPath:e}){super(["A constructor was not found on the ABI.","Make sure you are using the correct ABI and that the constructor exists on it."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}},__=class extends ve{constructor({docsPath:e}){super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.","Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}},u0=class extends ve{constructor({data:e,params:r,size:n}){super([`Data size of ${n} bytes is too small for given parameters.`].join(`
`),{metaMessages:[`Params: (${w_(r,{includeName:!0})})`,`Data:   ${e} (${n} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=r,this.size=n}},yu=class extends ve{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}},aS=class extends ve{constructor({expectedLength:e,givenLength:r,type:n}){super([`ABI encoding array length mismatch for type ${n}.`,`Expected length: ${e}`,`Given length: ${r}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}},cS=class extends ve{constructor({expectedSize:e,value:r}){super(`Size of bytes "${r}" (bytes${dn(r)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}},uS=class extends ve{constructor({expectedLength:e,givenLength:r}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${e}`,`Given length (values): ${r}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}},y1=class extends ve{constructor(e,{docsPath:r}){super([`Encoded error signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`].join(`
`),{docsPath:r}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}},lS=class extends ve{constructor({docsPath:e}){super("Cannot extract event signature from empty topics.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}},fS=class extends ve{constructor(e,{docsPath:r}){super([`Encoded event signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it.",`You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`].join(`
`),{docsPath:r}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}},x_=class extends ve{constructor(e,{docsPath:r}={}){super([`Event ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it."].join(`
`),{docsPath:r}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}},Dd=class extends ve{constructor(e,{docsPath:r}={}){super([`Function ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:r}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}},dS=class extends ve{constructor(e,{docsPath:r}){super([`Function "${e}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:r}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}},hS=class extends ve{constructor({expectedSize:e,givenSize:r}){super(`Expected bytes${e}, got bytes${r}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}},Wo=class extends ve{constructor({abiItem:e,data:r,params:n,size:i}){super([`Data size of ${i} bytes is too small for non-indexed event parameters.`].join(`
`),{metaMessages:[`Params: (${w_(n,{includeName:!0})})`,`Data:   ${r} (${i} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e,this.data=r,this.params=n,this.size=i}},ys=class extends ve{constructor({abiItem:e,param:r}){super([`Expected a topic for indexed event parameter${r.name?` "${r.name}"`:""} on event "${zo(e,{includeName:!0})}".`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e}},pS=class extends ve{constructor(e,{docsPath:r}){super([`Type "${e}" is not a valid encoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:r}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}},mS=class extends ve{constructor(e,{docsPath:r}){super([`Type "${e}" is not a valid decoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:r}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}},gS=class extends ve{constructor(e){super([`Value "${e}" is not a valid array.`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}},oS=class extends ve{constructor(e){super([`"${e}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}});function Qre(t){let e=t.match(lUe),r=e?.[2]||void 0,n=e?.[3],i=e?.[5]||void 0;return{type:r,name:n,params:i}}function Yre(t){return Qre(t).name}function Xre(t){return Qre(t).params?.split(",").map(n=>n.trim().split(" "))?.map(n=>({type:n[0],name:n[1]==="indexed"?n[2]:n[1],...n[1]==="indexed"?{indexed:!0}:{}}))}var lUe,ene=M(()=>{lUe=/((function|event)\s)?(.*)(\((.*)\))/});function iD(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function oD(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function sD(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function tne(t,e){oD(t);let r=e.outputLen;if(t.length<r)throw new Error(`digestInto() expects output buffer of length at least ${r}`)}var rne=M(()=>{});function fUe(t,e=!1){return e?{h:Number(t&yS),l:Number(t>>nne&yS)}:{h:Number(t>>nne&yS)|0,l:Number(t&yS)|0}}function ine(t,e=!1){let r=new Uint32Array(t.length),n=new Uint32Array(t.length);for(let i=0;i<t.length;i++){let{h:o,l:s}=fUe(t[i],e);[r[i],n[i]]=[o,s]}return[r,n]}var yS,nne,one,sne,ane,cne,une=M(()=>{yS=BigInt(4294967295),nne=BigInt(32);one=(t,e,r)=>t<<r|e>>>32-r,sne=(t,e,r)=>e<<r|t>>>32-r,ane=(t,e,r)=>e<<r-32|t>>>64-r,cne=(t,e,r)=>t<<r-32|e>>>64-r});function pUe(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function wS(t){if(typeof t=="string"&&(t=pUe(t)),!dUe(t))throw new Error(`expected Uint8Array, got ${typeof t}`);return t}function fne(t){let e=n=>t().update(wS(n)).digest(),r=t();return e.outputLen=r.outputLen,e.blockLen=r.blockLen,e.create=()=>t(),e}function dne(t){let e=(n,i)=>t(i).update(wS(n)).digest(),r=t({});return e.outputLen=r.outputLen,e.blockLen=r.blockLen,e.create=n=>t(n),e}var dUe,lne,hUe,vS,pZt,hne=M(()=>{dUe=t=>t instanceof Uint8Array,lne=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4)),hUe=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!hUe)throw new Error("Non little-endian hardware is not supported");vS=class{clone(){return this._cloneInto()}},pZt={}.toString});function xUe(t,e=24){let r=new Uint32Array(10);for(let n=24-e;n<24;n++){for(let s=0;s<10;s++)r[s]=t[s]^t[s+10]^t[s+20]^t[s+30]^t[s+40];for(let s=0;s<10;s+=2){let a=(s+8)%10,c=(s+2)%10,l=r[c],d=r[c+1],h=pne(l,d,1)^r[a],m=mne(l,d,1)^r[a+1];for(let g=0;g<50;g+=10)t[s+g]^=h,t[s+g+1]^=m}let i=t[2],o=t[3];for(let s=0;s<24;s++){let a=bne[s],c=pne(i,o,a),l=mne(i,o,a),d=gne[s];i=t[d],o=t[d+1],t[d]=c,t[d+1]=l}for(let s=0;s<50;s+=10){for(let a=0;a<10;a++)r[a]=t[s+a];for(let a=0;a<10;a++)t[s+a]^=~r[(a+2)%10]&r[(a+4)%10]}t[0]^=wUe[n],t[1]^=_Ue[n]}r.fill(0)}var gne,bne,yne,mUe,E_,gUe,bUe,yUe,vUe,wUe,_Ue,pne,mne,_S,Bd,vZt,wZt,_Zt,xZt,EZt,vne,SZt,AZt,wne,CZt,PZt,_ne=M(()=>{rne();une();hne();[gne,bne,yne]=[[],[],[]],mUe=BigInt(0),E_=BigInt(1),gUe=BigInt(2),bUe=BigInt(7),yUe=BigInt(256),vUe=BigInt(113);for(let t=0,e=E_,r=1,n=0;t<24;t++){[r,n]=[n,(2*r+3*n)%5],gne.push(2*(5*n+r)),bne.push((t+1)*(t+2)/2%64);let i=mUe;for(let o=0;o<7;o++)e=(e<<E_^(e>>bUe)*vUe)%yUe,e&gUe&&(i^=E_<<(E_<<BigInt(o))-E_);yne.push(i)}[wUe,_Ue]=ine(yne,!0),pne=(t,e,r)=>r>32?ane(t,e,r):one(t,e,r),mne=(t,e,r)=>r>32?cne(t,e,r):sne(t,e,r);_S=class t extends vS{constructor(e,r,n,i=!1,o=24){if(super(),this.blockLen=e,this.suffix=r,this.outputLen=n,this.enableXOF=i,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,iD(n),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=lne(this.state)}keccak(){xUe(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){sD(this);let{blockLen:r,state:n}=this;e=wS(e);let i=e.length;for(let o=0;o<i;){let s=Math.min(r-this.pos,i-o);for(let a=0;a<s;a++)n[this.pos++]^=e[o++];this.pos===r&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:e,suffix:r,pos:n,blockLen:i}=this;e[n]^=r,r&128&&n===i-1&&this.keccak(),e[i-1]^=128,this.keccak()}writeInto(e){sD(this,!1),oD(e),this.finish();let r=this.state,{blockLen:n}=this;for(let i=0,o=e.length;i<o;){this.posOut>=n&&this.keccak();let s=Math.min(n-this.posOut,o-i);e.set(r.subarray(this.posOut,this.posOut+s),i),this.posOut+=s,i+=s}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return iD(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(tne(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){let{blockLen:r,suffix:n,outputLen:i,rounds:o,enableXOF:s}=this;return e||(e=new t(r,n,i,s,o)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=o,e.suffix=n,e.outputLen=i,e.enableXOF=s,e.destroyed=this.destroyed,e}},Bd=(t,e,r)=>fne(()=>new _S(e,t,r)),vZt=Bd(6,144,224/8),wZt=Bd(6,136,256/8),_Zt=Bd(6,104,384/8),xZt=Bd(6,72,512/8),EZt=Bd(1,144,224/8),vne=Bd(1,136,256/8),SZt=Bd(1,104,384/8),AZt=Bd(1,72,512/8),wne=(t,e,r)=>dne((n={})=>new _S(e,t,n.dkLen===void 0?r:n.dkLen,!0)),CZt=wne(31,168,128/8),PZt=wne(31,136,256/8)});function Yn(t,e){let r=e||"hex",n=vne(qn(t,{strict:!1})?Vi(t):t);return r==="bytes"?n:dt(n)}var qd=M(()=>{_ne();Cc();Ta();Zt()});function xS(t){let e=Yre(t),r=Xre(t)||[];return xne(`${e}(${r.map(({type:n})=>n).join(",")})`)}function ES(t){return xne(zo(t))}var xne,aD=M(()=>{Nd();ene();Ta();qd();xne=t=>Yn(Vi(t))});var v1,SS=M(()=>{aD();v1=t=>typeof t=="string"?xS(t):ES(t)});function pn(t,e,r,{strict:n}={}){return qn(t,{strict:!1})?SUe(t,e,r,{strict:n}):EUe(t,e,r,{strict:n})}function Ene(t,e){if(typeof e=="number"&&e>0&&e>dn(t)-1)throw new f_({offset:e,position:"start",size:dn(t)})}function Sne(t,e,r){if(typeof e=="number"&&typeof r=="number"&&dn(t)!==r-e)throw new f_({offset:r,position:"end",size:dn(t)})}function EUe(t,e,r,{strict:n}={}){Ene(t,e);let i=t.slice(e,r);return n&&Sne(i,e,r),i}function SUe(t,e,r,{strict:n}={}){Ene(t,e);let i=`0x${t.replace("0x","").slice((e??0)*2,(r??t.length)*2)}`;return n&&Sne(i,e,r),i}var S_=M(()=>{UN();Cc();o0()});function Rc(t,e){if(t.length!==e.length)throw new uS({expectedLength:t.length,givenLength:e.length});let r=AUe({params:t,values:e}),n=uD(r);return n.length===0?"0x":n}function AUe({params:t,values:e}){let r=[];for(let n=0;n<t.length;n++)r.push(cD({param:t[n],value:e[n]}));return r}function cD({param:t,value:e}){let r=A_(t.type);if(r){let[n,i]=r;return PUe(e,{length:n,param:{...t,type:i}})}if(t.type==="tuple")return jUe(e,{param:t});if(t.type==="address")return CUe(e);if(t.type==="bool")return OUe(e);if(t.type.startsWith("uint")||t.type.startsWith("int")){let n=t.type.startsWith("int");return TUe(e,{signed:n})}if(t.type.startsWith("bytes"))return IUe(e,{param:t});if(t.type==="string")return RUe(e);throw new pS(t.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function uD(t){let e=0;for(let o=0;o<t.length;o++){let{dynamic:s,encoded:a}=t[o];s?e+=32:e+=dn(a)}let r=[],n=[],i=0;for(let o=0;o<t.length;o++){let{dynamic:s,encoded:a}=t[o];s?(r.push(Ue(e+i,{size:32})),n.push(a),i+=dn(a)):r.push(a)}return Gi([...r,...n])}function CUe(t){if(!Un(t))throw new Fn({address:t});return{dynamic:!1,encoded:$l(t.toLowerCase())}}function PUe(t,{length:e,param:r}){let n=e===null;if(!Array.isArray(t))throw new gS(t);if(!n&&t.length!==e)throw new aS({expectedLength:e,givenLength:t.length,type:`${r.type}[${e}]`});let i=!1,o=[];for(let s=0;s<t.length;s++){let a=cD({param:r,value:t[s]});a.dynamic&&(i=!0),o.push(a)}if(n||i){let s=uD(o);if(n){let a=Ue(o.length,{size:32});return{dynamic:!0,encoded:o.length>0?Gi([a,s]):a}}if(i)return{dynamic:!0,encoded:s}}return{dynamic:!1,encoded:Gi(o.map(({encoded:s})=>s))}}function IUe(t,{param:e}){let[,r]=e.type.split("bytes"),n=dn(t);if(!r){let i=t;return n%32!==0&&(i=$l(i,{dir:"right",size:Math.ceil((t.length-2)/2/32)*32})),{dynamic:!0,encoded:Gi([$l(Ue(n,{size:32})),i])}}if(n!==parseInt(r))throw new cS({expectedSize:parseInt(r),value:t});return{dynamic:!1,encoded:$l(t,{dir:"right"})}}function OUe(t){return{dynamic:!1,encoded:$l(h_(t))}}function TUe(t,{signed:e}){return{dynamic:!1,encoded:Ue(t,{size:32,signed:e})}}function RUe(t){let e=a0(t),r=Math.ceil(dn(e)/32),n=[];for(let i=0;i<r;i++)n.push($l(pn(e,i*32,(i+1)*32),{dir:"right"}));return{dynamic:!0,encoded:Gi([$l(Ue(dn(e),{size:32})),...n])}}function jUe(t,{param:e}){let r=!1,n=[];for(let i=0;i<e.components.length;i++){let o=e.components[i],s=Array.isArray(t)?i:o.name,a=cD({param:o,value:t[s]});n.push(a),a.dynamic&&(r=!0)}return{dynamic:r,encoded:r?uD(n):Gi(n.map(({encoded:i})=>i))}}function A_(t){let e=t.match(/^(.*)\[(\d+)?\]$/);return e?[e[2]?Number(e[2]):null,e[1]]:void 0}var l0=M(()=>{yi();Wl();mu();Ic();$4();o0();S_();Zt()});var w1,AS=M(()=>{S_();aD();w1=t=>typeof t=="string"?pn(xS(t),0,4):pn(ES(t),0,4)});function vu({abi:t,args:e=[],name:r}){let n=qn(r,{strict:!1}),i=t.filter(o=>n?o.type==="function"?w1(o)===r:o.type==="event"?v1(o)===r:!1:"name"in o&&o.name===r);if(i.length!==0){if(i.length===1)return i[0];for(let o of i){if(!("inputs"in o))continue;if(!e||e.length===0){if(!o.inputs||o.inputs.length===0)return o;continue}if(!o.inputs||o.inputs.length===0||o.inputs.length!==e.length)continue;if(e.every((a,c)=>{let l="inputs"in o&&o.inputs[c];return l?lD(a,l):!1}))return o}return i[0]}}function lD(t,e){let r=typeof t,n=e.type;switch(n){case"address":return Un(t);case"bool":return r==="boolean";case"function":return r==="string";case"string":return r==="string";default:return n==="tuple"&&"components"in e?Object.values(e.components).every((i,o)=>lD(Object.values(t)[o],i)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(n)?r==="number"||r==="bigint":/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(n)?r==="string"||t instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(n)?Array.isArray(t)&&t.every(i=>lD(i,{...e,type:n.replace(/(\[[0-9]{0,}\])$/,"")})):!1}}var _1=M(()=>{Cc();SS();AS();mu()});function mn(t){return typeof t=="string"?{address:t,type:"json-rpc"}:t}var Js=M(()=>{});function mo({abi:t,args:e,functionName:r}){let n=t[0];if(r&&(n=vu({abi:t,args:e,name:r}),!n))throw new Dd(r,{docsPath:"/docs/contract/encodeFunctionData"});if(n.type!=="function")throw new Dd(void 0,{docsPath:"/docs/contract/encodeFunctionData"});let i=zo(n),o=w1(i),s="inputs"in n&&n.inputs?Rc(n.inputs,e??[]):void 0;return gu([o,s??"0x"])}var Kl=M(()=>{yi();Ic();AS();l0();Nd();_1()});var PS,Cne,Pne,IS=M(()=>{PS={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},Cne={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},Pne={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"}});function C_(t,e){let r=e?`${e}${t.toLowerCase()}`:t.substring(2).toLowerCase(),n=Yn(gs(r),"bytes"),i=(e?r.substring(`${e}0x`.length):r).split("");for(let o=0;o<40;o+=2)n[o>>1]>>4>=8&&i[o]&&(i[o]=i[o].toUpperCase()),(n[o>>1]&15)>=8&&i[o+1]&&(i[o+1]=i[o+1].toUpperCase());return`0x${i.join("")}`}function $n(t,e){if(!Un(t))throw new Fn({address:t});return C_(t,e)}var P_=M(()=>{Wl();Ta();qd();mu()});function f0(t,e){if(e==="0x"&&t.length>0)throw new yu;if(dn(e)&&dn(e)<32)throw new u0({data:e,params:t,size:dn(e)});return MUe({data:e,params:t})}function MUe({data:t,params:e}){let r=[],n=0;for(let i=0;i<e.length;i++){if(n>=dn(t))throw new u0({data:t,params:e,size:dn(t)});let o=e[i],{consumed:s,value:a}=x1({data:t,param:o,position:n});r.push(a),n+=s}return r}function x1({data:t,param:e,position:r}){let n=A_(e.type);if(n){let[o,s]=n;return NUe(t,{length:o,param:{...e,type:s},position:r})}if(e.type==="tuple")return FUe(t,{param:e,position:r});if(e.type==="string")return LUe(t,{position:r});if(e.type.startsWith("bytes"))return BUe(t,{param:e,position:r});let i=pn(t,r,r+32,{strict:!0});if(e.type.startsWith("uint")||e.type.startsWith("int"))return qUe(i,{param:e});if(e.type==="address")return kUe(i);if(e.type==="bool")return DUe(i);throw new mS(e.type,{docsPath:"/docs/contract/decodeAbiParameters"})}function kUe(t){return{consumed:32,value:C_(pn(t,-20))}}function NUe(t,{param:e,length:r,position:n}){if(!r){let s=Ln(pn(t,n,n+32,{strict:!0})),a=Ln(pn(t,s,s+32,{strict:!0})),c=0,l=[];for(let d=0;d<a;++d){let h=x1({data:pn(t,s+32),param:e,position:c});c+=h.consumed,l.push(h.value)}return{value:l,consumed:32}}if(OS(e)){let a=!A_(e.type)?.[0],c=0,l=[];for(let d=0;d<r;++d){let h=Ln(pn(t,n,n+32,{strict:!0})),m=x1({data:pn(t,h),param:e,position:a?c:d*32});c+=m.consumed,l.push(m.value)}return{value:l,consumed:32}}let i=0,o=[];for(let s=0;s<r;++s){let a=x1({data:t,param:e,position:n+i});i+=a.consumed,o.push(a.value)}return{value:o,consumed:i}}function DUe(t){return{consumed:32,value:$N(t)}}function BUe(t,{param:e,position:r}){let[n,i]=e.type.split("bytes");if(!i){let s=Ln(pn(t,r,r+32,{strict:!0})),a=Ln(pn(t,s,s+32,{strict:!0}));return a===0?{consumed:32,value:"0x"}:{consumed:32,value:pn(t,s+32,s+32+a,{strict:!0})}}return{consumed:32,value:pn(t,r,r+parseInt(i),{strict:!0})}}function qUe(t,{param:e}){let r=e.type.startsWith("int");return{consumed:32,value:parseInt(e.type.split("int")[1]||"256")>48?Oi(t,{signed:r}):Ln(t,{signed:r})}}function LUe(t,{position:e}){let r=Ln(pn(t,e,e+32,{strict:!0})),n=Ln(pn(t,r,r+32,{strict:!0}));return n===0?{consumed:32,value:""}:{consumed:32,value:p_(Ii(pn(t,r+32,r+32+n,{strict:!0})))}}function FUe(t,{param:e,position:r}){let n=e.components.length===0||e.components.some(({name:s})=>!s),i=n?[]:{},o=0;if(OS(e)){let s=Ln(pn(t,r,r+32,{strict:!0}));for(let a=0;a<e.components.length;++a){let c=e.components[a],l=x1({data:pn(t,s),param:c,position:o});o+=l.consumed,i[n?a:c?.name]=l.value}return{consumed:32,value:i}}for(let s=0;s<e.components.length;++s){let a=e.components[s],c=x1({data:t,param:a,position:r+o});o+=c.consumed,i[n?s:a?.name]=c.value}return{consumed:o,value:i}}function OS(t){let{type:e}=t;if(e==="string"||e==="bytes"||e.endsWith("[]"))return!0;if(e==="tuple")return t.components?.some(OS);let r=A_(t.type);return!!(r&&OS({...t,type:r[1]}))}var TS=M(()=>{yi();P_();o0();S_();s0();ms();l0()});function RS({abi:t,data:e}){let r=pn(e,0,4);if(r==="0x")throw new yu;let i=[...t||[],Cne,Pne].find(o=>o.type==="error"&&r===w1(zo(o)));if(!i)throw new y1(r,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:i,args:"inputs"in i&&i.inputs&&i.inputs.length>0?f0(i.inputs,pn(e,4)):void 0,errorName:i.name}}var fD=M(()=>{IS();yi();S_();AS();TS();Nd()});var Cr,Qs=M(()=>{Cr=(t,e,r)=>JSON.stringify(t,(n,i)=>{let o=typeof i=="bigint"?i.toString():i;return typeof e=="function"?e(n,o):o},r)});function dD({abiItem:t,args:e,includeFunctionName:r=!0,includeName:n=!1}){if("name"in t&&"inputs"in t&&t.inputs)return`${r?t.name:""}(${t.inputs.map((i,o)=>`${n&&i.name?`${i.name}: `:""}${typeof e[o]=="object"?Cr(e[o]):e[o]}`).join(", ")})`}var Ine=M(()=>{Qs()});var d0,Zl,Fd,I_,Jl,Ud=M(()=>{Js();IS();fD();Nd();Ine();_1();J4();o1();yi();Tr();Oc();c_();d0=class extends ve{constructor(e,{account:r,docsPath:n,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:d,to:h,value:m}){let g=r?mn(r):void 0,v=c0({from:g?.address,to:h,value:typeof m<"u"&&`${m1(m)} ${i?.nativeCurrency.symbol||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${bi(a)} gwei`,maxFeePerGas:typeof c<"u"&&`${bi(c)} gwei`,maxPriorityFeePerGas:typeof l<"u"&&`${bi(l)} gwei`,nonce:d});super(e.shortMessage,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",v].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}},Zl=class extends ve{constructor(e,{abi:r,args:n,contractAddress:i,docsPath:o,functionName:s,sender:a}){let c=vu({abi:r,args:n,name:s}),l=c?dD({abiItem:c,args:n,includeFunctionName:!1,includeName:!1}):void 0,d=c?zo(c,{includeName:!0}):void 0,h=c0({address:i&&Nre(i),function:d,args:l&&l!=="()"&&`${[...Array(s?.length??0).keys()].map(()=>" ").join("")}${l}`,sender:a});super(e.shortMessage||`An unknown error occurred while executing the contract function "${s}".`,{cause:e,docsPath:o,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",h].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=r,this.args=n,this.cause=e,this.contractAddress=i,this.functionName=s,this.sender=a}},Fd=class extends ve{constructor({abi:e,data:r,functionName:n,message:i}){let o,s,a,c;if(r&&r!=="0x")try{s=RS({abi:e,data:r});let{abiItem:d,errorName:h,args:m}=s;if(h==="Error")c=m[0];else if(h==="Panic"){let[g]=m;c=PS[g]}else{let g=d?zo(d,{includeName:!0}):void 0,v=d&&m?dD({abiItem:d,args:m,includeFunctionName:!1,includeName:!1}):void 0;a=[g?`Error: ${g}`:"",v&&v!=="()"?`       ${[...Array(h?.length??0).keys()].map(()=>" ").join("")}${v}`:""]}}catch(d){o=d}else i&&(c=i);let l;o instanceof y1&&(l=o.signature,a=[`Unable to decode signature "${l}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${l}.`]),super(c&&c!=="execution reverted"||l?[`The contract function "${n}" reverted with the following ${l?"signature":"reason"}:`,c||l].join(`
`):`The contract function "${n}" reverted.`,{cause:o,metaMessages:a}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=s,this.reason=c,this.signature=l}},I_=class extends ve{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}},Jl=class extends ve{constructor({data:e,message:r}){super(r||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}});var ja,jS,$d,E1,h0=M(()=>{Qs();Tr();c_();ja=class extends ve{constructor({body:e,details:r,headers:n,status:i,url:o}){super("HTTP request failed.",{details:r,metaMessages:[i&&`Status: ${i}`,`URL: ${Od(o)}`,e&&`Request body: ${Cr(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=n,this.status=i,this.url=o}},jS=class extends ve{constructor({body:e,details:r,url:n}){super("WebSocket request failed.",{details:r,metaMessages:[`URL: ${Od(n)}`,`Request body: ${Cr(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebSocketRequestError"})}},$d=class extends ve{constructor({body:e,error:r,url:n}){super("RPC Request failed.",{cause:r,details:r.message,metaMessages:[`URL: ${Od(n)}`,`Request body: ${Cr(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=r.code}},E1=class extends ve{constructor({body:e,url:r}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${Od(r)}`,`Request body: ${Cr(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}});var UUe,Ki,Ql,p0,m0,g0,b0,Yl,Mc,y0,Xl,v0,w0,_0,x0,Hn,E0,S0,A0,C0,Zi,O_,S1=M(()=>{Tr();h0();UUe=-1,Ki=class extends ve{constructor(e,{code:r,docsPath:n,metaMessages:i,shortMessage:o}){super(o,{cause:e,docsPath:n,metaMessages:i||e?.metaMessages}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof $d?e.code:r??UUe}},Ql=class extends Ki{constructor(e,r){super(e,r),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=r.data}},p0=class t extends Ki{constructor(e){super(e,{code:t.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}};Object.defineProperty(p0,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});m0=class t extends Ki{constructor(e){super(e,{code:t.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}};Object.defineProperty(m0,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});g0=class t extends Ki{constructor(e){super(e,{code:t.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}};Object.defineProperty(g0,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});b0=class t extends Ki{constructor(e){super(e,{code:t.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}};Object.defineProperty(b0,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});Yl=class t extends Ki{constructor(e){super(e,{code:t.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}};Object.defineProperty(Yl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});Mc=class t extends Ki{constructor(e){super(e,{code:t.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}};Object.defineProperty(Mc,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});y0=class t extends Ki{constructor(e){super(e,{code:t.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}};Object.defineProperty(y0,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});Xl=class t extends Ki{constructor(e){super(e,{code:t.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}};Object.defineProperty(Xl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});v0=class t extends Ki{constructor(e){super(e,{code:t.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}};Object.defineProperty(v0,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});w0=class t extends Ki{constructor(e){super(e,{code:t.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}};Object.defineProperty(w0,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});_0=class t extends Ki{constructor(e){super(e,{code:t.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}};Object.defineProperty(_0,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});x0=class t extends Ki{constructor(e){super(e,{code:t.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}};Object.defineProperty(x0,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});Hn=class t extends Ql{constructor(e){super(e,{code:t.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}};Object.defineProperty(Hn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});E0=class t extends Ql{constructor(e){super(e,{code:t.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}};Object.defineProperty(E0,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});S0=class t extends Ql{constructor(e){super(e,{code:t.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}};Object.defineProperty(S0,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});A0=class t extends Ql{constructor(e){super(e,{code:t.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}};Object.defineProperty(A0,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});C0=class t extends Ql{constructor(e){super(e,{code:t.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}};Object.defineProperty(C0,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});Zi=class t extends Ql{constructor(e){super(e,{code:t.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}};Object.defineProperty(Zi,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});O_=class extends Ki{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}});function A1(t,e){let r=(t.details||"").toLowerCase(),n=t.walk(i=>i.code===Vl.code);return n instanceof ve?new Vl({cause:t,message:n.details}):Vl.nodeMessage.test(r)?new Vl({cause:t,message:t.details}):bs.nodeMessage.test(r)?new bs({cause:t,maxFeePerGas:e?.maxFeePerGas}):s1.nodeMessage.test(r)?new s1({cause:t,maxFeePerGas:e?.maxFeePerGas}):a1.nodeMessage.test(r)?new a1({cause:t,nonce:e?.nonce}):c1.nodeMessage.test(r)?new c1({cause:t,nonce:e?.nonce}):u1.nodeMessage.test(r)?new u1({cause:t,nonce:e?.nonce}):l1.nodeMessage.test(r)?new l1({cause:t}):f1.nodeMessage.test(r)?new f1({cause:t,gas:e?.gas}):d1.nodeMessage.test(r)?new d1({cause:t,gas:e?.gas}):h1.nodeMessage.test(r)?new h1({cause:t}):Ra.nodeMessage.test(r)?new Ra({cause:t,maxFeePerGas:e?.maxFeePerGas,maxPriorityFeePerGas:e?.maxPriorityFeePerGas}):new pu({cause:t})}var kS=M(()=>{Tr();kd()});function C1(t,{format:e}){return e?Object.keys(e({})).reduce((n,i)=>(t?.hasOwnProperty(i)&&(n[i]=t[i]),n),{}):{}}var NS=M(()=>{});function wu(t){let{account:e,gasPrice:r,maxFeePerGas:n,maxPriorityFeePerGas:i,to:o}=t,s=e?mn(e):void 0;if(s&&!Un(s.address))throw new Fn({address:s.address});if(o&&!Un(o))throw new Fn({address:o});if(typeof r<"u"&&(typeof n<"u"||typeof i<"u"))throw new Q4;if(n&&n>2n**256n-1n)throw new bs({maxFeePerGas:n});if(i&&n&&i>n)throw new Ra({maxFeePerGas:n,maxPriorityFeePerGas:i})}var P1=M(()=>{Js();Wl();kd();Oc();mu()});function Ma({abi:t,args:e,functionName:r,data:n}){let i=t[0];if(r&&(i=vu({abi:t,args:e,name:r}),!i))throw new Dd(r,{docsPath:pD});if(i.type!=="function")throw new Dd(void 0,{docsPath:pD});if(!i.outputs)throw new dS(i.name,{docsPath:pD});let o=f0(i.outputs,n);if(o&&o.length>1)return o;if(o&&o.length===1)return o[0]}var pD,P0=M(()=>{yi();TS();_1();pD="/docs/contract/decodeFunctionResult"});var T_,Mne,US,kne,mD,gD,Nne,I0=M(()=>{T_=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],Mne=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"}],US=[...Mne,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],kne=[...Mne,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],mD=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],gD=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],Nne=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}]});var Dne,Bne=M(()=>{Dne="0x82ad56cb"});function qne(t,{docsPath:e,...r}){let n=A1(t,r);return n instanceof pu&&(n=t),new d0(n,{docsPath:e,...r})}var Lne=M(()=>{Ud();kd();kS()});function T1({fn:t,id:e,shouldSplitBatch:r,wait:n=0}){let i=async()=>{let l=a();o();let d=l.map(({args:h})=>h);d.length!==0&&t(d).then(h=>{l.forEach(({pendingPromise:m},g)=>m.resolve?.([h[g],h]))}).catch(h=>{l.forEach(({pendingPromise:m})=>m.reject?.(h))})},o=()=>bD.delete(e),s=()=>a().map(({args:l})=>l),a=()=>bD.get(e)||[],c=l=>bD.set(e,[...a(),l]);return{flush:o,async schedule(l){let d={},h=new Promise((v,w)=>{d.resolve=v,d.reject=w});return r?.([...s(),l])&&i(),a().length>0?(c({args:l,pendingPromise:d}),h):(c({args:l,pendingPromise:d}),setTimeout(i,n),h)}}}var bD,$S=M(()=>{bD=new Map});var HS,zS,WS,Fne=M(()=>{Qs();Tr();c_();HS=class extends ve{constructor({callbackSelector:e,cause:r,data:n,extraData:i,sender:o,urls:s}){super(r.shortMessage||"An error occurred while fetching for an offchain result.",{cause:r,metaMessages:[...r.metaMessages||[],r.metaMessages?.length?"":[],"Offchain Gateway Call:",s&&["  Gateway URL(s):",...s.map(a=>`    ${Od(a)}`)],`  Sender: ${o}`,`  Data: ${n}`,`  Callback selector: ${e}`,`  Extra data: ${i}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}},zS=class extends ve{constructor({result:e,url:r}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${Od(r)}`,`Response: ${Cr(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}},WS=class extends ve{constructor({sender:e,to:r}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${r}`,`OffchainLookup sender address: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}});function Une(t,e){if(!Un(t))throw new Fn({address:t});if(!Un(e))throw new Fn({address:e});return t.toLowerCase()===e.toLowerCase()}var $ne=M(()=>{Wl();mu()});var Wne={};on(Wne,{ccipFetch:()=>zne,offchainLookup:()=>zUe,offchainLookupAbiItem:()=>Hne,offchainLookupSignature:()=>HUe});async function zUe(t,{blockNumber:e,blockTag:r,data:n,to:i}){let{args:o}=RS({data:n,abi:[Hne]}),[s,a,c,l,d]=o;try{if(!Une(i,s))throw new WS({sender:s,to:i});let h=await zne({data:c,sender:s,urls:a}),{data:m}=await _u(t,{blockNumber:e,blockTag:r,data:Gi([l,Rc([{type:"bytes"},{type:"bytes"}],[h,d])]),to:i});return m}catch(h){throw new HS({callbackSelector:l,cause:h,data:n,extraData:d,sender:s,urls:a})}}async function zne({data:t,sender:e,urls:r}){let n=new Error("An unknown error occurred.");for(let i=0;i<r.length;i++){let o=r[i],s=o.includes("{sender}")||o.includes("{data}")?"GET":"POST",a=s==="POST"?{data:t,sender:e}:void 0;try{let c=await fetch(o.replace("{sender}",e).replace("{data}",t),{body:JSON.stringify(a),method:s}),l;if(c.headers.get("Content-Type")?.startsWith("application/json")?l=(await c.json()).data:l=await c.text(),!c.ok){n=new ja({body:a,details:Cr(l.error)||c.statusText,headers:c.headers,status:c.status,url:o});continue}if(!qn(l)){n=new zS({result:l,url:o});continue}return l}catch(c){n=new ja({body:a,details:c.message,url:o})}}throw n}var HUe,Hne,Vne=M(()=>{R1();Fne();h0();fD();l0();$ne();Ic();Cc();Qs();HUe="0x556f1830",Hne={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]}});async function _u(t,e){let{account:r=t.account,batch:n=!!t.batch?.multicall,blockNumber:i,blockTag:o="latest",accessList:s,data:a,gas:c,gasPrice:l,maxFeePerGas:d,maxPriorityFeePerGas:h,nonce:m,to:g,value:v,...w}=e,S=r?mn(r):void 0;try{wu(e);let P=(i?Ue(i):void 0)||o,T=t.chain?.formatters?.transactionRequest?.format||zl,k=T({...C1(w,{format:T}),from:S?.address,accessList:s,data:a,gas:c,gasPrice:l,maxFeePerGas:d,maxPriorityFeePerGas:h,nonce:m,to:g,value:v});if(n&&WUe({request:k}))try{return await VUe(t,{...k,blockNumber:i,blockTag:o})}catch(H){if(!(H instanceof u_)&&!(H instanceof i0))throw H}let D=await t.request({method:"eth_call",params:P?[k,P]:[k]});return D==="0x"?{data:void 0}:{data:D}}catch(C){let P=GUe(C),{offchainLookup:T,offchainLookupSignature:k}=await Promise.resolve().then(()=>(Vne(),Wne));if(P?.slice(0,10)===k&&g)return{data:await T(t,{data:P,to:g})};throw qne(C,{...e,account:S,chain:t.chain})}}function WUe({request:t}){let{data:e,to:r,...n}=t;return!(!e||e.startsWith(Dne)||!r||Object.values(n).filter(i=>typeof i<"u").length>0)}async function VUe(t,e){let{batchSize:r=1024,wait:n=0}=typeof t.batch?.multicall=="object"?t.batch.multicall:{},{blockNumber:i,blockTag:o="latest",data:s,multicallAddress:a,to:c}=e,l=a;if(!l){if(!t.chain)throw new u_;l=Oa({blockNumber:i,chain:t.chain,contract:"multicall3"})}let h=(i?Ue(i):void 0)||o,{schedule:m}=T1({id:`${t.uid}.${h}`,wait:n,shouldSplitBatch(w){return w.reduce((C,{data:P})=>C+(P.length-2),0)>r*2},fn:async w=>{let S=w.map(T=>({allowFailure:!0,callData:T.data,target:T.to})),C=mo({abi:T_,args:[S],functionName:"aggregate3"}),P=await t.request({method:"eth_call",params:[{data:C,to:l},h]});return Ma({abi:T_,args:[S],functionName:"aggregate3",data:P||"0x"})}}),[{returnData:g,success:v}]=await m({data:s,to:c});if(!v)throw new Jl({data:g});return g==="0x"?{data:void 0}:{data:g}}function GUe(t){if(!(t instanceof ve))return;let e=t.walk();return typeof e.data=="object"?e.data.data:e.data}var R1=M(()=>{Js();I0();Bne();Tr();l_();Ud();P0();Kl();Qn();Zt();Lne();NS();i1();$S();P1()});var iie={};on(iie,{default:()=>B1});var D1,B1,wD=M(()=>{D1=null;typeof WebSocket<"u"?D1=WebSocket:typeof MozWebSocket<"u"?D1=MozWebSocket:typeof global<"u"?D1=global.WebSocket||global.MozWebSocket:typeof window<"u"?D1=window.WebSocket||window.MozWebSocket:typeof self<"u"&&(D1=self.WebSocket||self.MozWebSocket);B1=D1});function kie(t,e){if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0}var air,cir,uir,Nie=M(()=>{air=BigInt(0),cir=BigInt(1),uir=BigInt(2)});var Vcr,sHe,Yoe,KD,aHe,Xoe,ZD,ese=M(()=>{Vcr=Symbol(),sHe=Symbol(),Yoe=Object.getPrototypeOf,KD=new WeakMap,aHe=t=>t&&(KD.has(t)?KD.get(t):Yoe(t)===Object.prototype||Yoe(t)===Array.prototype),Xoe=t=>aHe(t)&&t[sHe]||null,ZD=(t,e=!0)=>{KD.set(t,e)}});function or(t={}){return uHe(t)}function go(t,e,r){let n=Xd.get(t);(eh.env?eh.env.MODE:void 0)!=="production"&&!n&&console.warn("Please use proxy object");let i,o=[],s=n[3],a=!1,l=s(d=>{if(o.push(d),r){e(o.splice(0));return}i||(i=Promise.resolve().then(()=>{i=void 0,a&&e(o.splice(0))}))});return a=!0,()=>{a=!1,l()}}function QD(t,e){let r=Xd.get(t);(eh.env?eh.env.MODE:void 0)!=="production"&&!r&&console.warn("Please use proxy object");let[n,i,o]=r;return o(n,i(),e)}function G_(t){return V_.add(t),t}var eh,JD,Xd,V_,cHe,uHe,_s=M(()=>{ese();eh={},JD=t=>typeof t=="object"&&t!==null,Xd=new WeakMap,V_=new WeakSet,cHe=(t=Object.is,e=(l,d)=>new Proxy(l,d),r=l=>JD(l)&&!V_.has(l)&&(Array.isArray(l)||!(Symbol.iterator in l))&&!(l instanceof WeakMap)&&!(l instanceof WeakSet)&&!(l instanceof Error)&&!(l instanceof Number)&&!(l instanceof Date)&&!(l instanceof String)&&!(l instanceof RegExp)&&!(l instanceof ArrayBuffer),n=l=>{switch(l.status){case"fulfilled":return l.value;case"rejected":throw l.reason;default:throw l}},i=new WeakMap,o=(l,d,h=n)=>{let m=i.get(l);if(m?.[0]===d)return m[1];let g=Array.isArray(l)?[]:Object.create(Object.getPrototypeOf(l));return ZD(g,!0),i.set(l,[d,g]),Reflect.ownKeys(l).forEach(v=>{if(Object.getOwnPropertyDescriptor(g,v))return;let w=Reflect.get(l,v),S={value:w,enumerable:!0,configurable:!0};if(V_.has(w))ZD(w,!1);else if(w instanceof Promise)delete S.value,S.get=()=>h(w);else if(Xd.has(w)){let[C,P]=Xd.get(w);S.value=o(C,P(),h)}Object.defineProperty(g,v,S)}),Object.preventExtensions(g)},s=new WeakMap,a=[1,1],c=l=>{if(!JD(l))throw new Error("object required");let d=s.get(l);if(d)return d;let h=a[0],m=new Set,g=(ne,F=++a[0])=>{h!==F&&(h=F,m.forEach(V=>V(ne,F)))},v=a[1],w=(ne=++a[1])=>(v!==ne&&!m.size&&(v=ne,C.forEach(([F])=>{let V=F[1](ne);V>h&&(h=V)})),h),S=ne=>(F,V)=>{let Y=[...F];Y[1]=[ne,...Y[1]],g(Y,V)},C=new Map,P=(ne,F)=>{if((eh.env?eh.env.MODE:void 0)!=="production"&&C.has(ne))throw new Error("prop listener already exists");if(m.size){let V=F[3](S(ne));C.set(ne,[F,V])}else C.set(ne,[F])},T=ne=>{var F;let V=C.get(ne);V&&(C.delete(ne),(F=V[1])==null||F.call(V))},k=ne=>(m.add(ne),m.size===1&&C.forEach(([V,Y],j)=>{if((eh.env?eh.env.MODE:void 0)!=="production"&&Y)throw new Error("remove already exists");let y=V[3](S(j));C.set(j,[V,y])}),()=>{m.delete(ne),m.size===0&&C.forEach(([V,Y],j)=>{Y&&(Y(),C.set(j,[V]))})}),D=Array.isArray(l)?[]:Object.create(Object.getPrototypeOf(l)),L=e(D,{deleteProperty(ne,F){let V=Reflect.get(ne,F);T(F);let Y=Reflect.deleteProperty(ne,F);return Y&&g(["delete",[F],V]),Y},set(ne,F,V,Y){let j=Reflect.has(ne,F),y=Reflect.get(ne,F,Y);if(j&&(t(y,V)||s.has(V)&&t(y,s.get(V))))return!0;T(F),JD(V)&&(V=Xoe(V)||V);let x=V;if(V instanceof Promise)V.then(I=>{V.status="fulfilled",V.value=I,g(["resolve",[F],I])}).catch(I=>{V.status="rejected",V.reason=I,g(["reject",[F],I])});else{!Xd.has(V)&&r(V)&&(x=c(V));let I=!V_.has(x)&&Xd.get(x);I&&P(F,I)}return Reflect.set(ne,F,x,Y),g(["set",[F],V,y]),!0}});s.set(l,L);let z=[D,w,o,k];return Xd.set(L,z),Reflect.ownKeys(l).forEach(ne=>{let F=Object.getOwnPropertyDescriptor(l,ne);"value"in F&&(L[ne]=l[ne],delete F.value,delete F.writable),Object.defineProperty(D,ne,F)}),L})=>[c,Xd,V_,t,e,r,n,i,o,s,a],[uHe]=cHe()});function ni(t,e,r,n){let i=t[e];return go(t,()=>{let o=t[e];Object.is(i,o)||r(i=o)},n)}var Xcr,tse=M(()=>{_s();Xcr=Symbol()});var dse=b(Ht=>{"use strict";var K_=Symbol.for("react.element"),lHe=Symbol.for("react.portal"),fHe=Symbol.for("react.fragment"),dHe=Symbol.for("react.strict_mode"),hHe=Symbol.for("react.profiler"),pHe=Symbol.for("react.provider"),mHe=Symbol.for("react.context"),gHe=Symbol.for("react.forward_ref"),bHe=Symbol.for("react.suspense"),yHe=Symbol.for("react.memo"),vHe=Symbol.for("react.lazy"),rse=Symbol.iterator;function wHe(t){return t===null||typeof t!="object"?null:(t=rse&&t[rse]||t["@@iterator"],typeof t=="function"?t:null)}var ose={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sse=Object.assign,ase={};function V1(t,e,r){this.props=t,this.context=e,this.refs=ase,this.updater=r||ose}V1.prototype.isReactComponent={};V1.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};V1.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function cse(){}cse.prototype=V1.prototype;function XD(t,e,r){this.props=t,this.context=e,this.refs=ase,this.updater=r||ose}var eB=XD.prototype=new cse;eB.constructor=XD;sse(eB,V1.prototype);eB.isPureReactComponent=!0;var nse=Array.isArray,use=Object.prototype.hasOwnProperty,tB={current:null},lse={key:!0,ref:!0,__self:!0,__source:!0};function fse(t,e,r){var n,i={},o=null,s=null;if(e!=null)for(n in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)use.call(e,n)&&!lse.hasOwnProperty(n)&&(i[n]=e[n]);var a=arguments.length-2;if(a===1)i.children=r;else if(1<a){for(var c=Array(a),l=0;l<a;l++)c[l]=arguments[l+2];i.children=c}if(t&&t.defaultProps)for(n in a=t.defaultProps,a)i[n]===void 0&&(i[n]=a[n]);return{$$typeof:K_,type:t,key:o,ref:s,props:i,_owner:tB.current}}function _He(t,e){return{$$typeof:K_,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function rB(t){return typeof t=="object"&&t!==null&&t.$$typeof===K_}function xHe(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var ise=/\/+/g;function YD(t,e){return typeof t=="object"&&t!==null&&t.key!=null?xHe(""+t.key):e.toString(36)}function xA(t,e,r,n,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case K_:case lHe:s=!0}}if(s)return s=t,i=i(s),t=n===""?"."+YD(s,0):n,nse(i)?(r="",t!=null&&(r=t.replace(ise,"$&/")+"/"),xA(i,e,r,"",function(l){return l})):i!=null&&(rB(i)&&(i=_He(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(ise,"$&/")+"/")+t)),e.push(i)),1;if(s=0,n=n===""?".":n+":",nse(t))for(var a=0;a<t.length;a++){o=t[a];var c=n+YD(o,a);s+=xA(o,e,r,c,i)}else if(c=wHe(t),typeof c=="function")for(t=c.call(t),a=0;!(o=t.next()).done;)o=o.value,c=n+YD(o,a++),s+=xA(o,e,r,c,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function _A(t,e,r){if(t==null)return t;var n=[],i=0;return xA(t,n,"","",function(o){return e.call(r,o,i++)}),n}function EHe(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Go={current:null},EA={transition:null},SHe={ReactCurrentDispatcher:Go,ReactCurrentBatchConfig:EA,ReactCurrentOwner:tB};Ht.Children={map:_A,forEach:function(t,e,r){_A(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return _A(t,function(){e++}),e},toArray:function(t){return _A(t,function(e){return e})||[]},only:function(t){if(!rB(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ht.Component=V1;Ht.Fragment=fHe;Ht.Profiler=hHe;Ht.PureComponent=XD;Ht.StrictMode=dHe;Ht.Suspense=bHe;Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SHe;Ht.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=sse({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=tB.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(c in e)use.call(e,c)&&!lse.hasOwnProperty(c)&&(n[c]=e[c]===void 0&&a!==void 0?a[c]:e[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){a=Array(c);for(var l=0;l<c;l++)a[l]=arguments[l+2];n.children=a}return{$$typeof:K_,type:t.type,key:i,ref:o,props:n,_owner:s}};Ht.createContext=function(t){return t={$$typeof:mHe,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:pHe,_context:t},t.Consumer=t};Ht.createElement=fse;Ht.createFactory=function(t){var e=fse.bind(null,t);return e.type=t,e};Ht.createRef=function(){return{current:null}};Ht.forwardRef=function(t){return{$$typeof:gHe,render:t}};Ht.isValidElement=rB;Ht.lazy=function(t){return{$$typeof:vHe,_payload:{_status:-1,_result:t},_init:EHe}};Ht.memo=function(t,e){return{$$typeof:yHe,type:t,compare:e===void 0?null:e}};Ht.startTransition=function(t){var e=EA.transition;EA.transition={};try{t()}finally{EA.transition=e}};Ht.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ht.useCallback=function(t,e){return Go.current.useCallback(t,e)};Ht.useContext=function(t){return Go.current.useContext(t)};Ht.useDebugValue=function(){};Ht.useDeferredValue=function(t){return Go.current.useDeferredValue(t)};Ht.useEffect=function(t,e){return Go.current.useEffect(t,e)};Ht.useId=function(){return Go.current.useId()};Ht.useImperativeHandle=function(t,e,r){return Go.current.useImperativeHandle(t,e,r)};Ht.useInsertionEffect=function(t,e){return Go.current.useInsertionEffect(t,e)};Ht.useLayoutEffect=function(t,e){return Go.current.useLayoutEffect(t,e)};Ht.useMemo=function(t,e){return Go.current.useMemo(t,e)};Ht.useReducer=function(t,e,r){return Go.current.useReducer(t,e,r)};Ht.useRef=function(t){return Go.current.useRef(t)};Ht.useState=function(t){return Go.current.useState(t)};Ht.useSyncExternalStore=function(t,e,r){return Go.current.useSyncExternalStore(t,e,r)};Ht.useTransition=function(){return Go.current.useTransition()};Ht.version="18.2.0"});var pse=b((rur,hse)=>{"use strict";hse.exports=dse()});var AHe,mse=M(()=>{AHe=Mt(pse(),1)});var qc=M(()=>{tse();mse()});var j0,nB=M(()=>{j0={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3}});var tt,Z_=M(()=>{nB();tt={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){let t=navigator.userAgent.toLowerCase();return tt.isMobile()&&t.includes("android")},isIos(){let t=navigator.userAgent.toLowerCase();return tt.isMobile()&&(t.includes("iphone")||t.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(t){return t?t-Date.now()<=j0.TEN_SEC_MS:!0},isAllowedRetry(t){return Date.now()-t>=j0.ONE_SEC_MS},copyToClopboard(t){navigator.clipboard.writeText(t)},getPairingExpiry(){return Date.now()+j0.FOUR_MINUTES_MS},getPlainAddress(t){return t.split(":")[2]},async wait(t){return new Promise(e=>{setTimeout(e,t)})},debounce(t,e=500){let r;return(...n)=>{function i(){t(...n)}r&&clearTimeout(r),r=setTimeout(i,e)}},isHttpUrl(t){return t.startsWith("http://")||t.startsWith("https://")},formatNativeUrl(t,e){if(tt.isHttpUrl(t))return this.formatUniversalUrl(t,e);let r=t;r.includes("://")||(r=t.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`);let n=encodeURIComponent(e);return{redirect:`${r}wc?uri=${n}`,href:r}},formatUniversalUrl(t,e){if(!tt.isHttpUrl(t))return this.formatNativeUrl(t,e);let r=t;r.endsWith("/")||(r=`${r}/`);let n=encodeURIComponent(e);return{redirect:`${r}wc?uri=${n}`,href:r}},openHref(t,e){window.open(t,e,"noreferrer noopener")},async preloadImage(t){let e=new Promise((r,n)=>{let i=new Image;i.onload=r,i.onerror=n,i.crossOrigin="anonymous",i.src=t});return Promise.race([e,tt.wait(2e3)])},formatBalance(t,e){let r;return t==="0.0"?r="0":typeof t=="string"&&t.length>6?r=t.substring(0,6):typeof t=="string"&&(r=t),r?`${r} ${e}`:"0.0000"}}});var ii,Xt,iB=M(()=>{qc();_s();Z_();ii=or({isConnected:!1}),Xt={state:ii,subscribe(t){return go(ii,()=>t(ii))},subscribeKey(t,e){return ni(ii,t,e)},setIsConnected(t){ii.isConnected=t},setCaipAddress(t){ii.caipAddress=t,ii.address=t?tt.getPlainAddress(t):void 0},setBalance(t,e){ii.balance=t,ii.balanceSymbol=e},setProfileName(t){ii.profileName=t},setProfileImage(t){ii.profileImage=t},setAddressExplorerUrl(t){ii.addressExplorerUrl=t},resetAccount(){ii.isConnected=!1,ii.caipAddress=void 0,ii.address=void 0,ii.balance=void 0,ii.balanceSymbol=void 0,ii.profileName=void 0,ii.profileImage=void 0,ii.addressExplorerUrl=void 0}}});var G1,oB=M(()=>{G1=class{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,...r}){let n=this.createUrl(r);return(await fetch(n,{method:"GET",headers:e})).json()}async getBlob({headers:e,...r}){let n=this.createUrl(r);return(await fetch(n,{method:"GET",headers:e})).blob()}async post({body:e,headers:r,...n}){let i=this.createUrl(n);return(await fetch(i,{method:"POST",headers:r,body:e?JSON.stringify(e):void 0})).json()}async put({body:e,headers:r,...n}){let i=this.createUrl(n);return(await fetch(i,{method:"PUT",headers:r,body:e?JSON.stringify(e):void 0})).json()}async delete({body:e,headers:r,...n}){let i=this.createUrl(n);return(await fetch(i,{method:"DELETE",headers:r,body:e?JSON.stringify(e):void 0})).json()}createUrl({path:e,params:r}){let n=new URL(e,this.baseUrl);return r&&Object.entries(r).forEach(([i,o])=>{o&&n.searchParams.append(i,o)}),n}}});var sB,gse,Na,SA=M(()=>{sB="WALLETCONNECT_DEEPLINK_CHOICE",gse="@w3m/recent",Na={setWalletConnectDeepLink({href:t,name:e}){try{localStorage.setItem(sB,JSON.stringify({href:t,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{let t=localStorage.getItem(sB);if(t)return JSON.parse(t)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(sB)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(t){try{let e=Na.getRecentWallets();e.find(n=>n.id===t.id)||(e.unshift(t),e.length>2&&e.pop(),localStorage.setItem(gse,JSON.stringify(e)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{let t=localStorage.getItem(gse);return t?JSON.parse(t):[]}catch{console.info("Unable to get Web3Modal recent")}return[]}}});var th,bo,AA=M(()=>{qc();_s();th=or({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),bo={state:th,subscribeNetworkImages(t){return go(th.networkImages,()=>t(th.networkImages))},subscribeKey(t,e){return ni(th,t,e)},setWalletImage(t,e){th.walletImages[t]=e},setNetworkImage(t,e){th.networkImages[t]=e},setConnectorImage(t,e){th.connectorImages[t]=e},setTokenImage(t,e){th.tokenImages[t]=e}}});var K1,xs,aB=M(()=>{qc();_s();K1=or({connectors:[]}),xs={state:K1,subscribeKey(t,e){return ni(K1,t,e)},setConnectors(t){K1.connectors=t},addConnector(t){K1.connectors.push(t)},removeConnectorById(t){K1.connectors=K1.connectors.filter(e=>e.id!==t)}}});var yo,sr,cB=M(()=>{qc();_s();yo=or({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),sr={state:yo,subscribeKey(t,e){return ni(yo,t,e)},_getClient(){if(!yo._client)throw new Error("NetworkController client not set");return yo._client},setClient(t){yo._client=G_(t)},setCaipNetwork(t){yo.caipNetwork=t},setDefaultCaipNetwork(t){yo.caipNetwork=t,yo.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(t){yo.requestedCaipNetworks=t},async getApprovedCaipNetworksData(){let t=await this._getClient().getApprovedCaipNetworksData();yo.supportsAllNetworks=t.supportsAllNetworks,yo.approvedCaipNetworkIds=t.approvedCaipNetworkIds},async switchActiveNetwork(t){await this._getClient().switchCaipNetwork(t),yo.caipNetwork=t},resetNetwork(){yo.isDefaultCaipNetwork||(yo.caipNetwork=void 0),yo.approvedCaipNetworkIds=void 0,yo.supportsAllNetworks=!0}}});var Au,jr,CA=M(()=>{qc();_s();Au=or({projectId:""}),jr={state:Au,subscribeKey(t,e){return ni(Au,t,e)},setProjectId(t){Au.projectId=t},setIncludeWalletIds(t){Au.includeWalletIds=t},setExcludeWalletIds(t){Au.excludeWalletIds=t},setFeaturedWalletIds(t){Au.featuredWalletIds=t},setTokens(t){Au.tokens=t},setTermsConditionsUrl(t){Au.termsConditionsUrl=t},setPrivacyPolicyUrl(t){Au.privacyPolicyUrl=t},setCustomWallets(t){Au.customWallets=t}}});var Cu,CHe,bse,PHe,Ji,mt,uB=M(()=>{qc();_s();Z_();oB();SA();AA();aB();cB();CA();Cu=new G1({baseUrl:"https://api.web3modal.com"}),CHe="40",bse="4",PHe="w3m",Ji=or({sdkVersion:"html-wagmi-undefined",page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),mt={state:Ji,subscribeKey(t,e){return ni(Ji,t,e)},setSdkVersion(t){Ji.sdkVersion=t},_getApiHeaders(){return{"x-project-id":jr.state.projectId,"x-sdk-type":PHe,"x-sdk-version":Ji.sdkVersion}},async _fetchWalletImage(t){let e=`${Cu.baseUrl}/getWalletImage/${t}`,r=await Cu.getBlob({path:e,headers:mt._getApiHeaders()});bo.setWalletImage(t,URL.createObjectURL(r))},async _fetchNetworkImage(t){let e=`${Cu.baseUrl}/public/getAssetImage/${t}`,r=await Cu.getBlob({path:e,headers:mt._getApiHeaders()});bo.setNetworkImage(t,URL.createObjectURL(r))},async _fetchConnectorImage(t){let e=`${Cu.baseUrl}/public/getAssetImage/${t}`,r=await Cu.getBlob({path:e,headers:mt._getApiHeaders()});bo.setConnectorImage(t,URL.createObjectURL(r))},async fetchNetworkImages(){let{requestedCaipNetworks:t}=sr.state,e=t?.map(({imageId:r})=>r).filter(Boolean);e&&await Promise.allSettled(e.map(r=>mt._fetchNetworkImage(r)))},async fetchConnectorImages(){let{connectors:t}=xs.state,e=t.map(({imageId:r})=>r).filter(Boolean);await Promise.allSettled(e.map(r=>mt._fetchConnectorImage(r)))},async fetchFeaturedWallets(){let{featuredWalletIds:t}=jr.state;if(t?.length){let{data:e}=await Cu.get({path:"/getWallets",headers:mt._getApiHeaders(),params:{page:"1",entries:t?.length?String(t.length):bse,include:t?.join(",")}}),r=e.map(n=>n.image_id).filter(Boolean);await Promise.allSettled(r.map(n=>mt._fetchWalletImage(n))),Ji.featured=e}},async fetchRecommendedWallets(){let{includeWalletIds:t,excludeWalletIds:e,featuredWalletIds:r}=jr.state,n=[...e??[],...r??[]].filter(Boolean),{data:i,count:o}=await Cu.get({path:"/getWallets",headers:mt._getApiHeaders(),params:{page:"1",entries:bse,include:t?.join(","),exclude:n?.join(",")}}),s=Na.getRecentWallets(),a=i.map(l=>l.image_id).filter(Boolean),c=s.map(l=>l.image_id).filter(Boolean);await Promise.allSettled([...a,...c].map(l=>mt._fetchWalletImage(l))),Ji.recommended=i,Ji.count=o??0},async fetchWallets({page:t}){let{includeWalletIds:e,excludeWalletIds:r,featuredWalletIds:n}=jr.state,i=[...Ji.recommended.map(({id:c})=>c),...r??[],...n??[]].filter(Boolean),{data:o,count:s}=await Cu.get({path:"/getWallets",headers:mt._getApiHeaders(),params:{page:String(t),entries:CHe,include:e?.join(","),exclude:i.join(",")}}),a=o.map(c=>c.image_id).filter(Boolean);await Promise.allSettled([...a.map(c=>mt._fetchWalletImage(c)),tt.wait(300)]),Ji.wallets=[...Ji.wallets,...o],Ji.count=s>Ji.count?s:Ji.count,Ji.page=t},async searchWallet({search:t}){let{includeWalletIds:e,excludeWalletIds:r}=jr.state;Ji.search=[];let{data:n}=await Cu.get({path:"/getWallets",headers:mt._getApiHeaders(),params:{page:"1",entries:"100",search:t,include:e?.join(","),exclude:r?.join(",")}}),i=n.map(o=>o.image_id).filter(Boolean);await Promise.allSettled([...i.map(o=>mt._fetchWalletImage(o)),tt.wait(300)]),Ji.search=n},prefetch(){Ji.prefetchPromise=Promise.race([Promise.allSettled([mt.fetchFeaturedWallets(),mt.fetchRecommendedWallets(),mt.fetchNetworkImages(),mt.fetchConnectorImages()]),tt.wait(3e3)])}}});var Qi,Xe,lB=M(()=>{qc();_s();Qi=or({view:"Connect",history:["Connect"]}),Xe={state:Qi,subscribeKey(t,e){return ni(Qi,t,e)},push(t,e){t!==Qi.view&&(Qi.view=t,Qi.history.push(t),Qi.data=e)},reset(t){Qi.view=t,Qi.history=[t]},replace(t){Qi.history.length>1&&Qi.history.at(-1)!==t&&(Qi.view=t,Qi.history[Qi.history.length-1]=t)},goBack(){if(Qi.history.length>1){Qi.history.pop();let[t]=Qi.history.slice(-1);t&&(Qi.view=t)}}}});var PA,Pr,yse=M(()=>{qc();_s();iB();uB();lB();PA=or({open:!1}),Pr={state:PA,subscribeKey(t,e){return ni(PA,t,e)},async open(t){await mt.state.prefetchPromise,t?.view?Xe.reset(t.view):Xt.state.isConnected?Xe.reset("Account"):Xe.reset("Connect"),PA.open=!0},close(){PA.open=!1}}});var Ri,wt,vse=M(()=>{qc();_s();Z_();SA();Ri=or({wcError:!1,buffering:!1}),wt={state:Ri,subscribeKey(t,e){return ni(Ri,t,e)},_getClient(){if(!Ri._client)throw new Error("ConnectionController client not set");return Ri._client},setClient(t){Ri._client=G_(t)},connectWalletConnect(){Ri.wcPromise=this._getClient().connectWalletConnect(t=>{Ri.wcUri=t,Ri.wcPairingExpiry=tt.getPairingExpiry()})},async connectExternal(t){await this._getClient().connectExternal?.(t)},checkInjectedInstalled(t){return this._getClient().checkInjectedInstalled?.(t)},resetWcConnection(){Ri.wcUri=void 0,Ri.wcPairingExpiry=void 0,Ri.wcPromise=void 0,Ri.wcLinking=void 0,Ri.recentWallet=void 0,Na.deleteWalletConnectDeepLink()},setWcLinking(t){Ri.wcLinking=t},setWcError(t){Ri.wcError=t,Ri.buffering=!1},setRecentWallet(t){Ri.recentWallet=t},setBuffering(t){Ri.buffering=t},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}}});var rf,Yi,wse=M(()=>{qc();_s();rf=or({message:"",variant:"success",open:!1}),Yi={state:rf,subscribeKey(t,e){return ni(rf,t,e)},showSuccess(t){rf.message=t,rf.variant="success",rf.open=!0},showError(t){rf.message=t,rf.variant="error",rf.open=!0},hide(){rf.open=!1}}});var Z1,Xi,_se=M(()=>{_s();Z1=or({themeMode:"dark",themeVariables:{}}),Xi={state:Z1,subscribe(t){return go(Z1,()=>t(Z1))},setThemeMode(t){Z1.themeMode=t},setThemeVariables(t){Z1.themeVariables={...Z1.themeVariables,...t}}}});var IHe,fB,xse=M(()=>{oB();CA();IHe=new G1({baseUrl:"https://rpc.walletconnect.com"}),fB={fetchIdentity({caipChainId:t,address:e}){return IHe.get({path:`/v1/identity/${e}`,params:{chainId:t,projectId:jr.state.projectId}})}}});var gn,Ese=M(()=>{AA();gn={getWalletImage(t){if(t?.image_url)return t?.image_url;if(t?.image_id)return bo.state.walletImages[t.image_id]},getNetworkImage(t){if(t?.imageId)return bo.state.networkImages[t.imageId]},getConnectorImage(t){if(t?.imageId)return bo.state.connectorImages[t.imageId]}}});var gr=M(()=>{yse();lB();iB();cB();vse();aB();wse();uB();AA();_se();CA();xse();Ese();nB();Z_();SA()});var IA,OA,dB,Sse,J_,Da,fe,hB,TA,pB=M(()=>{IA=window,OA=IA.ShadowRoot&&(IA.ShadyCSS===void 0||IA.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dB=Symbol(),Sse=new WeakMap,J_=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==dB)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o,r=this.t;if(OA&&e===void 0){let n=r!==void 0&&r.length===1;n&&(e=Sse.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Sse.set(r,e))}return e}toString(){return this.cssText}},Da=t=>new J_(typeof t=="string"?t:t+"",void 0,dB),fe=(t,...e)=>{let r=t.length===1?t[0]:e.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new J_(r,t,dB)},hB=(t,e)=>{OA?t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):e.forEach(r=>{let n=document.createElement("style"),i=IA.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,t.appendChild(n)})},TA=OA?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(let n of e.cssRules)r+=n.cssText;return Da(r)})(t):t});var mB,RA,Ase,OHe,Cse,bB,Pse,gB,yB,nf,jA=M(()=>{pB();pB();RA=window,Ase=RA.trustedTypes,OHe=Ase?Ase.emptyScript:"",Cse=RA.reactiveElementPolyfillSupport,bB={toAttribute(t,e){switch(e){case Boolean:t=t?OHe:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Pse=(t,e)=>e!==t&&(e==e||t==t),gB={attribute:!0,type:String,converter:bB,reflect:!1,hasChanged:Pse},yB="finalized",nf=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((r,n)=>{let i=this._$Ep(n,r);i!==void 0&&(this._$Ev.set(i,n),e.push(i))}),e}static createProperty(e,r=gB){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(e,r),!r.noAccessor&&!this.prototype.hasOwnProperty(e)){let n=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,n,r);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,r,n){return{get(){return this[r]},set(i){let o=this[e];this[r]=i,this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||gB}static finalize(){if(this.hasOwnProperty(yB))return!1;this[yB]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(let i of n)this.createProperty(i,r[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let r=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let i of n)r.unshift(TA(i))}else e!==void 0&&r.push(TA(e));return r}static _$Ep(e,r){let n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(r=>r(this))}addController(e){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var e;let r=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return hB(r,this.constructor.elementStyles),r}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$EO(e,r,n=gB){var i;let o=this.constructor._$Ep(e,n);if(o!==void 0&&n.reflect===!0){let s=(((i=n.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?n.converter:bB).toAttribute(r,n.type);this._$El=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$El=null}}_$AK(e,r){var n;let i=this.constructor,o=i._$Ev.get(e);if(o!==void 0&&this._$El!==o){let s=i.getPropertyOptions(o),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:bB;this._$El=o,this[o]=a.fromAttribute(r,s.type),this._$El=null}}requestUpdate(e,r,n){let i=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||Pse)(this[e],r)?(this._$AL.has(e)||this._$AL.set(e,r),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,o)=>this[o]=i),this._$Ei=void 0);let r=!1,n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdate)===null||o===void 0?void 0:o.call(i)}),this.update(n)):this._$Ek()}catch(i){throw r=!1,this._$Ek(),i}r&&this._$AE(n)}willUpdate(e){}_$AE(e){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var i;return(i=n.hostUpdated)===null||i===void 0?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};nf[yB]=!0,nf.elementProperties=new Map,nf.elementStyles=[],nf.shadowRootOptions={mode:"open"},Cse?.({ReactiveElement:nf}),((mB=RA.reactiveElementVersions)!==null&&mB!==void 0?mB:RA.reactiveElementVersions=[]).push("1.6.3")});function Lse(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ise!==void 0?Ise.createHTML(e):e}function D0(t,e,r=t,n){var i,o,s,a;if(e===sf)return e;let c=n!==void 0?(i=r._$Co)===null||i===void 0?void 0:i[n]:r._$Cl,l=X_(e)?void 0:e._$litDirective$;return c?.constructor!==l&&((o=c?._$AO)===null||o===void 0||o.call(c,!1),l===void 0?c=void 0:(c=new l(t),c._$AT(t,r,n)),n!==void 0?((s=(a=r)._$Co)!==null&&s!==void 0?s:a._$Co=[])[n]=c:r._$Cl=c),c!==void 0&&(e=D0(t,c._$AS(t,e.values),c,n)),e}var vB,MA,J1,Ise,kA,of,_B,THe,N0,Y_,X_,Nse,Dse,wB,Q_,Ose,Tse,M0,Rse,jse,Bse,qse,W,le,sf,Rn,Mse,k0,Fse,e2,NA,Q1,B0,DA,RHe,BA,qA,LA,Use,kse,$se,af=M(()=>{MA=window,J1=MA.trustedTypes,Ise=J1?J1.createPolicy("lit-html",{createHTML:t=>t}):void 0,kA="$lit$",of=`lit$${(Math.random()+"").slice(9)}$`,_B="?"+of,THe=`<${_B}>`,N0=document,Y_=()=>N0.createComment(""),X_=t=>t===null||typeof t!="object"&&typeof t!="function",Nse=Array.isArray,Dse=t=>Nse(t)||typeof t?.[Symbol.iterator]=="function",wB=`[ 	
\f\r]`,Q_=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ose=/-->/g,Tse=/>/g,M0=RegExp(`>|${wB}(?:([^\\s"'>=/]+)(${wB}*=${wB}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Rse=/'/g,jse=/"/g,Bse=/^(?:script|style|textarea|title)$/i,qse=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),W=qse(1),le=qse(2),sf=Symbol.for("lit-noChange"),Rn=Symbol.for("lit-nothing"),Mse=new WeakMap,k0=N0.createTreeWalker(N0,129,null,!1);Fse=(t,e)=>{let r=t.length-1,n=[],i,o=e===2?"<svg>":"",s=Q_;for(let a=0;a<r;a++){let c=t[a],l,d,h=-1,m=0;for(;m<c.length&&(s.lastIndex=m,d=s.exec(c),d!==null);)m=s.lastIndex,s===Q_?d[1]==="!--"?s=Ose:d[1]!==void 0?s=Tse:d[2]!==void 0?(Bse.test(d[2])&&(i=RegExp("</"+d[2],"g")),s=M0):d[3]!==void 0&&(s=M0):s===M0?d[0]===">"?(s=i??Q_,h=-1):d[1]===void 0?h=-2:(h=s.lastIndex-d[2].length,l=d[1],s=d[3]===void 0?M0:d[3]==='"'?jse:Rse):s===jse||s===Rse?s=M0:s===Ose||s===Tse?s=Q_:(s=M0,i=void 0);let g=s===M0&&t[a+1].startsWith("/>")?" ":"";o+=s===Q_?c+THe:h>=0?(n.push(l),c.slice(0,h)+kA+c.slice(h)+of+g):c+of+(h===-2?(n.push(void 0),a):g)}return[Lse(t,o+(t[r]||"<?>")+(e===2?"</svg>":"")),n]},e2=class t{constructor({strings:e,_$litType$:r},n){let i;this.parts=[];let o=0,s=0,a=e.length-1,c=this.parts,[l,d]=Fse(e,r);if(this.el=t.createElement(l,n),k0.currentNode=this.el.content,r===2){let h=this.el.content,m=h.firstChild;m.remove(),h.append(...m.childNodes)}for(;(i=k0.nextNode())!==null&&c.length<a;){if(i.nodeType===1){if(i.hasAttributes()){let h=[];for(let m of i.getAttributeNames())if(m.endsWith(kA)||m.startsWith(of)){let g=d[s++];if(h.push(m),g!==void 0){let v=i.getAttribute(g.toLowerCase()+kA).split(of),w=/([.?@])?(.*)/.exec(g);c.push({type:1,index:o,name:w[2],strings:v,ctor:w[1]==="."?DA:w[1]==="?"?BA:w[1]==="@"?qA:B0})}else c.push({type:6,index:o})}for(let m of h)i.removeAttribute(m)}if(Bse.test(i.tagName)){let h=i.textContent.split(of),m=h.length-1;if(m>0){i.textContent=J1?J1.emptyScript:"";for(let g=0;g<m;g++)i.append(h[g],Y_()),k0.nextNode(),c.push({type:2,index:++o});i.append(h[m],Y_())}}}else if(i.nodeType===8)if(i.data===_B)c.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(of,h+1))!==-1;)c.push({type:7,index:o}),h+=of.length-1}o++}}static createElement(e,r){let n=N0.createElement("template");return n.innerHTML=e,n}};NA=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var r;let{el:{content:n},parts:i}=this._$AD,o=((r=e?.creationScope)!==null&&r!==void 0?r:N0).importNode(n,!0);k0.currentNode=o;let s=k0.nextNode(),a=0,c=0,l=i[0];for(;l!==void 0;){if(a===l.index){let d;l.type===2?d=new Q1(s,s.nextSibling,this,e):l.type===1?d=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(d=new LA(s,this,e)),this._$AV.push(d),l=i[++c]}a!==l?.index&&(s=k0.nextNode(),a++)}return k0.currentNode=N0,o}v(e){let r=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}},Q1=class t{constructor(e,r,n,i){var o;this.type=2,this._$AH=Rn,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=i,this._$Cp=(o=i?.isConnected)===null||o===void 0||o}get _$AU(){var e,r;return(r=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=D0(this,e,r),X_(e)?e===Rn||e==null||e===""?(this._$AH!==Rn&&this._$AR(),this._$AH=Rn):e!==this._$AH&&e!==sf&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Dse(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Rn&&X_(this._$AH)?this._$AA.nextSibling.data=e:this.$(N0.createTextNode(e)),this._$AH=e}g(e){var r;let{values:n,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=e2.createElement(Lse(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===o)this._$AH.v(n);else{let s=new NA(o,this),a=s.u(this.options);s.v(n),this.$(a),this._$AH=s}}_$AC(e){let r=Mse.get(e.strings);return r===void 0&&Mse.set(e.strings,r=new e2(e)),r}T(e){Nse(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,n,i=0;for(let o of e)i===r.length?r.push(n=new t(this.k(Y_()),this.k(Y_()),this,this.options)):n=r[i],n._$AI(o),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);e&&e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){var r;this._$AM===void 0&&(this._$Cp=e,(r=this._$AP)===null||r===void 0||r.call(this,e))}},B0=class{constructor(e,r,n,i,o){this.type=1,this._$AH=Rn,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Rn}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,r=this,n,i){let o=this.strings,s=!1;if(o===void 0)e=D0(this,e,r,0),s=!X_(e)||e!==this._$AH&&e!==sf,s&&(this._$AH=e);else{let a=e,c,l;for(e=o[0],c=0;c<o.length-1;c++)l=D0(this,a[n+c],r,c),l===sf&&(l=this._$AH[c]),s||(s=!X_(l)||l!==this._$AH[c]),l===Rn?e=Rn:e!==Rn&&(e+=(l??"")+o[c+1]),this._$AH[c]=l}s&&!i&&this.j(e)}j(e){e===Rn?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},DA=class extends B0{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Rn?void 0:e}},RHe=J1?J1.emptyScript:"",BA=class extends B0{constructor(){super(...arguments),this.type=4}j(e){e&&e!==Rn?this.element.setAttribute(this.name,RHe):this.element.removeAttribute(this.name)}},qA=class extends B0{constructor(e,r,n,i,o){super(e,r,n,i,o),this.type=5}_$AI(e,r=this){var n;if((e=(n=D0(this,e,r,0))!==null&&n!==void 0?n:Rn)===sf)return;let i=this._$AH,o=e===Rn&&i!==Rn||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==Rn&&(i===Rn||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}},LA=class{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){D0(this,e)}},Use={O:kA,P:of,A:_B,C:1,M:Fse,L:NA,R:Dse,D:D0,I:Q1,V:B0,H:BA,N:qA,U:DA,F:LA},kse=MA.litHtmlPolyfillSupport;kse?.(e2,Q1),((vB=MA.litHtmlVersions)!==null&&vB!==void 0?vB:MA.litHtmlVersions=[]).push("2.8.0");$se=(t,e,r)=>{var n,i;let o=(n=r?.renderBefore)!==null&&n!==void 0?n:e,s=o._$litPart$;if(s===void 0){let a=(i=r?.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=s=new Q1(e.insertBefore(Y_(),a),a,void 0,r??{})}return s._$AI(t),s}});var xB,EB,ce,Hse,zse=M(()=>{jA();jA();af();af();ce=class extends nf{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,r;let n=super.createRenderRoot();return(e=(r=this.renderOptions).renderBefore)!==null&&e!==void 0||(r.renderBefore=n.firstChild),n}update(e){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=$se(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return sf}};ce.finalized=!0,ce._$litElement$=!0,(xB=globalThis.litElementHydrateSupport)===null||xB===void 0||xB.call(globalThis,{LitElement:ce});Hse=globalThis.litElementPolyfillSupport;Hse?.({LitElement:ce});((EB=globalThis.litElementVersions)!==null&&EB!==void 0?EB:globalThis.litElementVersions=[]).push("3.3.3")});var Wse=M(()=>{});var ie=M(()=>{jA();af();zse();Wse()});var ae,Vse=M(()=>{ae=t=>e=>typeof e=="function"?((r,n)=>(customElements.define(r,n),n))(t,e):((r,n)=>{let{kind:i,elements:o}=n;return{kind:i,elements:o,finisher(s){customElements.define(r,s)}}})(t,e)});function J(t){return(e,r)=>r!==void 0?MHe(t,e,r):jHe(t,e)}var jHe,MHe,SB=M(()=>{jHe=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(r){r.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}},MHe=(t,e,r)=>{e.constructor.createProperty(r,t)}});function je(t){return J({...t,state:!0})}var Gse=M(()=>{SB();});var q0=M(()=>{});var Kse=M(()=>{q0();});var Zse=M(()=>{q0();});var Jse=M(()=>{q0();});var Qse=M(()=>{q0();});var AB,tfr,CB=M(()=>{q0();tfr=((AB=window.HTMLSlotElement)===null||AB===void 0?void 0:AB.prototype.assignedElements)!=null?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter(r=>r.nodeType===Node.ELEMENT_NODE)});var Yse=M(()=>{q0();CB();});var Ne=M(()=>{Vse();SB();Gse();Kse();Zse();Jse();Qse();CB();Yse()});var $e,Xse=M(()=>{af();$e=t=>t??Rn});var oi=M(()=>{Xse()});function FA(t,e){n2=document.createElement("style"),nh=document.createElement("style"),ih=document.createElement("style"),n2.textContent=X1(t).core.cssText,nh.textContent=X1(t).dark.cssText,ih.textContent=X1(t).light.cssText,document.head.appendChild(n2),document.head.appendChild(nh),document.head.appendChild(ih),i2(e)}function i2(t){nh&&ih&&(t==="light"?(nh.removeAttribute("media"),ih.media="enabled"):(ih.removeAttribute("media"),nh.media="enabled"))}function UA(t){n2&&nh&&ih&&(n2.textContent=X1(t).core.cssText,nh.textContent=X1(t).dark.cssText,ih.textContent=X1(t).light.cssText)}function X1(t){return{core:fe`
      :root {
        --w3m-color-mix-strength: ${Da(t?.["--w3m-color-mix-strength"]?`${t["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${Da(t?.["--w3m-font-family"]||"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif")};
        --w3m-font-size-master: ${Da(t?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${Da(t?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${Da(t?.["--w3m-z-index"]||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-3xl: 40px;

        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-lg: 20px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(0, 0, 0, 0.3);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-015: var(--wui-color-accent-base-015);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );
        }
      }
    `,light:fe`
      :root {
        --w3m-color-mix: ${Da(t?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${Da(t?.["--w3m-accent"]||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:fe`
      :root {
        --w3m-color-mix: ${Da(t?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${Da(t?.["--w3m-accent"]||"#3396ff")};
        --w3m-default: #000;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}var n2,nh,ih,Oe,Nt,eb,gt=M(()=>{ie();Oe=fe`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    backface-visibility: hidden;
    font-family: var(--wui-font-family);
  }
`,Nt=fe`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,eb=fe`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`});var eae,tae=M(()=>{ie();eae=fe`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-125);
    overflow: hidden;
  }
`});var kHe,$A,rae=M(()=>{ie();Ne();gt();tae();kHe=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},$A=class extends ce{render(){return W`<slot></slot>`}};$A.styles=[Oe,eae];$A=kHe([ae("wui-card")],$A)});var nae,iae=M(()=>{ie();nae=fe`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`});var oae,sae=M(()=>{ie();oae=le`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`});var aae,cae=M(()=>{ie();aae=le`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`});var uae,lae=M(()=>{ie();uae=le`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`});var fae,dae=M(()=>{ie();fae=le`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`});var hae,pae=M(()=>{ie();hae=le`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`});var mae,gae=M(()=>{ie();mae=le`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`});var bae,yae=M(()=>{ie();bae=le`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`});var vae,wae=M(()=>{ie();vae=le`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`});var _ae,xae=M(()=>{ie();_ae=le`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`});var Eae,Sae=M(()=>{ie();Eae=le`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`});var Aae,Cae=M(()=>{ie();Aae=le`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`});var Pae,Iae=M(()=>{ie();Pae=le`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`});var Oae,Tae=M(()=>{ie();Oae=le`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`});var Rae,jae=M(()=>{ie();Rae=le`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`});var Mae,kae=M(()=>{ie();Mae=le`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`});var Nae,Dae=M(()=>{ie();Nae=le`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`});var Bae,qae=M(()=>{ie();Bae=le` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`});var Lae,Fae=M(()=>{ie();Lae=le`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`});var Uae,$ae=M(()=>{ie();Uae=le`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`});var Hae,zae=M(()=>{ie();Hae=le`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`});var Wae,Vae=M(()=>{ie();Wae=le`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`});var Gae,Kae=M(()=>{ie();Gae=le`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`});var Zae,Jae=M(()=>{ie();Zae=le`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`});var Qae,Yae=M(()=>{ie();Qae=le`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`});var Xae,ece=M(()=>{ie();Xae=le`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`});var tce,rce=M(()=>{ie();tce=le`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`});var nce,ice=M(()=>{ie();nce=le`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`});var oce,sce=M(()=>{ie();oce=le`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`});var ace,cce=M(()=>{ie();ace=le`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`});var uce,lce=M(()=>{ie();uce=le`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`});var fce,dce=M(()=>{ie();fce=le`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`});var hce,pce=M(()=>{ie();hce=le`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`});var mce,gce=M(()=>{ie();mce=le`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`});var bce,yce=M(()=>{ie();bce=le`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`});var vce,wce=M(()=>{ie();vce=le`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`});var _ce,xce=M(()=>{ie();_ce=le`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`});var Ece,Sce=M(()=>{ie();Ece=le`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`});var Ace,Cce=M(()=>{ie();Ace=le`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`});var Pce,Ice=M(()=>{ie();Pce=le`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`});var Oce,Tce=M(()=>{ie();Oce=le`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `});var Rce,jce=M(()=>{ie();Rce=le`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`});var Mce,kce=M(()=>{ie();Mce=le`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`});var Nce,Dce=M(()=>{ie();Nce=le`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`});var Bce,qce=M(()=>{ie();Bce=le`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`});var Lce,Fce=M(()=>{ie();Lce=le`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`});var Uce,$ce=M(()=>{ie();Uce=le`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`});var Hce,zce=M(()=>{ie();Hce=le`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`});var Wce,Vce=M(()=>{ie();Wce=le`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`});var HA,NHe,F0,ji=M(()=>{ie();Ne();gt();iae();sae();cae();lae();dae();pae();gae();yae();wae();xae();Sae();Cae();Iae();Tae();jae();kae();Dae();qae();Fae();$ae();zae();Vae();Kae();Jae();Yae();ece();rce();ice();sce();cce();lce();dce();pce();gce();yce();wce();xce();Sce();Cce();Ice();Tce();jce();kce();Dce();qce();Fce();$ce();zce();Vce();HA=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},NHe={allWallets:Wce,apple:oae,arrowBottom:aae,arrowLeft:uae,arrowRight:fae,arrowTop:hae,browser:mae,checkmark:bae,chevronBottom:vae,chevronLeft:_ae,chevronRight:Eae,chevronTop:Aae,clock:Pae,close:Oae,compass:Mae,coinPlaceholder:Rae,copy:Nae,cursor:Bae,desktop:Lae,disconnect:Uae,discord:Hae,etherscan:Wae,extension:Gae,externalLink:Zae,facebook:Qae,filters:Xae,github:tce,google:nce,helpCircle:oce,infoCircle:ace,mail:uce,mobile:fce,networkPlaceholder:hce,nftPlaceholder:mce,off:bce,qrCode:vce,refresh:_ce,search:Ece,swapHorizontal:Ace,swapVertical:Pce,telegram:Oce,twitch:Rce,twitter:Mce,twitterIcon:Nce,wallet:Lce,walletConnect:Uce,walletPlaceholder:Bce,warningCircle:Hce},F0=class extends ce{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,W`${NHe[this.name]}`}};F0.styles=[Oe,eb,nae];HA([J()],F0.prototype,"size",void 0);HA([J()],F0.prototype,"name",void 0);HA([J()],F0.prototype,"color",void 0);F0=HA([ae("wui-icon")],F0)});var Gce,Kce=M(()=>{ie();Gce=fe`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`});var PB,tb,Lc=M(()=>{ie();Ne();gt();Kce();PB=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},tb=class extends ce{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return W`<img src=${this.src} alt=${this.alt} />`}};tb.styles=[Oe,eb,Gce];PB([J()],tb.prototype,"src",void 0);PB([J()],tb.prototype,"alt",void 0);tb=PB([ae("wui-image")],tb)});var Zce,Jce=M(()=>{ie();Zce=fe`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`});var DHe,zA,Qce=M(()=>{ie();Ne();gt();Jce();DHe=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},zA=class extends ce{render(){return W`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};zA.styles=[Oe,Zce];zA=DHe([ae("wui-loading-hexagon")],zA)});var Yce,Xce=M(()=>{ie();Yce=fe`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 14px;
    height: 14px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`});var IB,rb,o2=M(()=>{ie();Ne();gt();Xce();IB=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},rb=class extends ce{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,W`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};rb.styles=[Oe,Yce];IB([J()],rb.prototype,"color",void 0);IB([J()],rb.prototype,"size",void 0);rb=IB([ae("wui-loading-spinner")],rb)});var eue,tue=M(()=>{ie();eue=fe`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`});var rue,s2,nue=M(()=>{ie();Ne();gt();tue();rue=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},s2=class extends ce{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let e=this.radius>50?50:this.radius,n=36-e,i=116+n,o=245+n,s=360+n*1.75;return W`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${i} ${o}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};s2.styles=[Oe,eue];rue([J({type:Number})],s2.prototype,"radius",void 0);s2=rue([ae("wui-loading-thumbnail")],s2)});var iue,oue=M(()=>{ie();iue=fe`
  :host {
    display: block;
    outline: 1px solid var(--wui-gray-glass-005);
    background: linear-gradient(
      90deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 2.5s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`});var WA,U0,OB=M(()=>{ie();Ne();oue();WA=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},U0=class extends ce{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,W`<slot></slot>`}};U0.styles=[iue];WA([J()],U0.prototype,"width",void 0);WA([J()],U0.prototype,"height",void 0);WA([J()],U0.prototype,"borderRadius",void 0);U0=WA([ae("wui-shimmer")],U0)});var a2,c2,$0,u2=M(()=>{a2={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},c2=t=>(...e)=>({_$litDirective$:t,values:e}),$0=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}});var Ba,sue=M(()=>{af();u2();Ba=c2(class extends $0{constructor(t){var e;if(super(t),t.type!==a2.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,n;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(let o in e)e[o]&&!(!((r=this.nt)===null||r===void 0)&&r.has(o))&&this.it.add(o);return this.render(e)}let i=t.element.classList;this.it.forEach(o=>{o in e||(i.remove(o),this.it.delete(o))});for(let o in e){let s=!!e[o];s===this.it.has(o)||!((n=this.nt)===null||n===void 0)&&n.has(o)||(s?(i.add(o),this.it.add(o)):(i.remove(o),this.it.delete(o)))}return sf}})});var TB=M(()=>{sue()});var aue,cue=M(()=>{ie();aue=fe`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`});var VA,H0,eo=M(()=>{ie();Ne();TB();gt();cue();VA=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},H0=class extends ce{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){let e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,W`<slot class=${Ba(e)}></slot>`}};H0.styles=[Oe,aue];VA([J()],H0.prototype,"variant",void 0);VA([J()],H0.prototype,"color",void 0);VA([J()],H0.prototype,"align",void 0);H0=VA([ae("wui-text")],H0)});var uue,lue=M(()=>{ie();uue=le`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `});var fue,due=M(()=>{ie();fue=le`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `});var hue,pue=M(()=>{ie();hue=le`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`});var mue,gue=M(()=>{ie();mue=le`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `});var bue,yue=M(()=>{ie();bue=le`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `});var vue,wue=M(()=>{ie();vue=le`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`});var _ue,xue=M(()=>{ie();_ue=le`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`});var Eue,Sue=M(()=>{ie();Eue=le`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `});var Aue,Cue=M(()=>{ie();Aue=le`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`});var Pue,Iue=M(()=>{ie();Pue=le`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `});var Oue,Tue=M(()=>{ie();Oue=le`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`});var Rue,jue=M(()=>{ie();Rue=le`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `});var Mue,kue=M(()=>{ie();Mue=le`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `});var Nue,Due=M(()=>{ie();Nue=fe`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`});var Bue,BHe,l2,que=M(()=>{ie();Ne();lue();due();pue();gue();yue();wue();xue();Sue();Cue();Iue();Tue();jue();kue();gt();Due();Bue=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},BHe={browser:uue,dao:fue,defi:hue,defiAlt:mue,eth:bue,layers:vue,lock:_ue,login:Eue,network:Aue,nft:Pue,noun:Oue,profile:Rue,system:Mue},l2=class extends ce{constructor(){super(...arguments),this.name="browser"}render(){return W`${BHe[this.name]}`}};l2.styles=[Oe,Nue];Bue([J()],l2.prototype,"name",void 0);l2=Bue([ae("wui-visual")],l2)});var zt,uf=M(()=>{zt={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){return new URL(t).hostname},getTruncateString(t,e,r){return t.length<=e?t:r==="end"?`${t.substring(0,e)}...`:r==="start"?`...${t.substring(t.length-e)}`:`${t.substring(0,Math.floor(e/2))}...${t.substring(t.length-Math.floor(e/2))}`},generateAvatarColors(t){let r=t.toLowerCase().replace(/^0x/iu,"").substring(0,6),n=this.hexToRgb(r),i=[];for(let o=0;o<5;o+=1){let s=this.tintColor(n,.15*o);i.push(`rgb(${s[0]}, ${s[1]}, ${s[2]})`)}return`
    --local-color-1: ${i[0]};
    --local-color-2: ${i[1]};
    --local-color-3: ${i[2]};
    --local-color-4: ${i[3]};
    --local-color-5: ${i[4]};
   `},hexToRgb(t){let e=parseInt(t,16),r=e>>16&255,n=e>>8&255,i=e&255;return[r,n,i]},tintColor(t,e){let[r,n,i]=t,o=Math.round(r+(255-r)*e),s=Math.round(n+(255-n)*e),a=Math.round(i+(255-i)*e);return[o,s,a]},isNumber(t){return{number:/^[0-9]+$/u}.number.test(t)},getColorTheme(t){return t||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")}}});var Lue,Fue=M(()=>{ie();Lue=fe`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`});var Ys,vo,f2=M(()=>{ie();Ne();gt();uf();Fue();Ys=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},vo=class extends ce{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&zt.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&zt.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&zt.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&zt.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&zt.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&zt.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&zt.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&zt.getSpacingStyles(this.margin,3)};
    `,W`<slot></slot>`}};vo.styles=[Oe,Lue];Ys([J()],vo.prototype,"flexDirection",void 0);Ys([J()],vo.prototype,"flexWrap",void 0);Ys([J()],vo.prototype,"flexBasis",void 0);Ys([J()],vo.prototype,"flexGrow",void 0);Ys([J()],vo.prototype,"flexShrink",void 0);Ys([J()],vo.prototype,"alignItems",void 0);Ys([J()],vo.prototype,"justifyContent",void 0);Ys([J()],vo.prototype,"columnGap",void 0);Ys([J()],vo.prototype,"rowGap",void 0);Ys([J()],vo.prototype,"gap",void 0);Ys([J()],vo.prototype,"padding",void 0);Ys([J()],vo.prototype,"margin",void 0);vo=Ys([ae("wui-flex")],vo)});var Uue,$ue=M(()=>{ie();Uue=fe`
  :host {
    display: block;
    width: 64px;
    height: 64px;
    outline: 8px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`});var GA,z0,RB=M(()=>{ie();Ne();Lc();gt();uf();$ue();GA=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},z0=class extends ce{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return W`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",W`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let e=zt.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};z0.styles=[Oe,Uue];GA([J()],z0.prototype,"imageSrc",void 0);GA([J()],z0.prototype,"alt",void 0);GA([J()],z0.prototype,"address",void 0);z0=GA([ae("wui-avatar")],z0)});var Hue,zue=M(()=>{ie();Hue=fe`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`});var oh,Fc,W0=M(()=>{ie();Ne();ji();gt();zue();oh=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},Fc=class extends ce{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let e="xxs";switch(this.size){case"lg":e="lg";break;case"md":e="md";break;case"sm":e="xs";break;default:e="xxs"}let r=this.size==="lg",n=r?"12%":"16%",i=r?"xxs":"3xl",o=this.background==="opaque",s=this.backgroundColor==="accent-100"&&o||this.backgroundColor==="success-100"&&o||this.backgroundColor==="error-100"&&o||this.backgroundColor==="inverse-100"&&o;return this.style.cssText=`
       --local-bg-value: ${s?`var(--wui-icon-box-bg-${this.backgroundColor})`:`var(--wui-color-${this.backgroundColor})`};
       --local-bg-mix: ${s?"100%":n};
       --local-border-radius: var(--wui-border-radius-${i});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,W` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};Fc.styles=[Oe,Nt,Hue];oh([J()],Fc.prototype,"size",void 0);oh([J()],Fc.prototype,"backgroundColor",void 0);oh([J()],Fc.prototype,"iconColor",void 0);oh([J()],Fc.prototype,"background",void 0);oh([J({type:Boolean})],Fc.prototype,"border",void 0);oh([J()],Fc.prototype,"borderColor",void 0);oh([J()],Fc.prototype,"icon",void 0);Fc=oh([ae("wui-icon-box")],Fc)});var Wue,Vue=M(()=>{ie();Wue=fe`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  wui-flex.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    outline: 2px solid var(--wui-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`});var V0,Iu,Gue=M(()=>{ie();Ne();Lc();eo();f2();gt();uf();RB();W0();Vue();oi();V0=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},Iu=class extends ce{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address=""}render(){return W`
      <button ?disabled=${this.disabled}>
        ${this.balanceTemplate()}
        <wui-flex
          gap="xxs"
          alignItems="center"
          class=${$e(this.balance?void 0:"local-no-balance")}
        >
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${zt.getTruncateString(this.address,8,this.isProfileName?"end":"middle")}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){let e=this.networkSrc?W`<wui-image src=${this.networkSrc}></wui-image>`:W`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return W`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};Iu.styles=[Oe,Nt,Wue];V0([J()],Iu.prototype,"networkSrc",void 0);V0([J()],Iu.prototype,"avatarSrc",void 0);V0([J()],Iu.prototype,"balance",void 0);V0([J({type:Boolean})],Iu.prototype,"disabled",void 0);V0([J({type:Boolean})],Iu.prototype,"isProfileName",void 0);V0([J()],Iu.prototype,"address",void 0);Iu=V0([ae("wui-account-button")],Iu)});var Kue,Zue=M(()=>{ie();Kue=fe`
  :host {
    position: relative;
    border-radius: inherit;
    overflow: hidden;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }
`});var d2,sh,h2=M(()=>{ie();Ne();ji();Lc();gt();Zue();d2=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},sh=class extends ce{constructor(){super(...arguments),this.size="md",this.name=""}render(){let e="xxs";return this.size==="lg"?e="m":this.size==="md"?e="xs":e="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),W` ${this.templateVisual()}`}templateVisual(){return this.imageSrc?W`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?W`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:W`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};sh.styles=[Oe,Kue];d2([J()],sh.prototype,"size",void 0);d2([J()],sh.prototype,"name",void 0);d2([J()],sh.prototype,"imageSrc",void 0);d2([J()],sh.prototype,"walletIcon",void 0);sh=d2([ae("wui-wallet-image")],sh)});var Jue,Que=M(()=>{ie();Jue=fe`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }
`});var Yue,jB,p2,MB=M(()=>{ie();Ne();oi();gt();h2();Que();Yue=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},jB=4,p2=class extends ce{constructor(){super(...arguments),this.walletImages=[]}render(){let e=this.walletImages.length<jB;return W`${this.walletImages.slice(0,jB).map(({src:r,walletName:n})=>W`
          <wui-wallet-image
            size="inherit"
            imageSrc=${r}
            name=${$e(n)}
          ></wui-wallet-image>
        `)}
    ${e?[...Array(jB-this.walletImages.length)].map(()=>W` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}`}};p2.styles=[Oe,Jue];Yue([J({type:Array})],p2.prototype,"walletImages",void 0);p2=Yue([ae("wui-all-wallets-image")],p2)});var Xue,ele=M(()=>{ie();Xue=fe`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`});var m2,ah,tle=M(()=>{ie();Ne();ji();o2();eo();gt();ele();m2=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},ah=class extends ce{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.loading=!1,this.variant="fill"}render(){this.style.cssText=`
    --local-width: ${this.variant==="fullWidth"?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;let e=this.size==="md"?"paragraph-600":"small-600";return W`
      <button
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){return this.loading?W`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:W``}};ah.styles=[Oe,Nt,Xue];m2([J()],ah.prototype,"size",void 0);m2([J({type:Boolean})],ah.prototype,"disabled",void 0);m2([J({type:Boolean})],ah.prototype,"loading",void 0);m2([J()],ah.prototype,"variant",void 0);ah=m2([ae("wui-button")],ah)});var KA,kB=M(()=>{ie();KA=le`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`});var rle,nle=M(()=>{ie();rle=fe`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`});var ile,g2,ole=M(()=>{ie();Ne();kB();OB();gt();nle();ile=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},g2=class extends ce{constructor(){super(...arguments),this.type="wallet"}render(){return W`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?W` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${KA}`:W`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};g2.styles=[Oe,Nt,rle];ile([J()],g2.prototype,"type",void 0);g2=ile([ae("wui-card-select-loader")],g2)});var sle,ale=M(()=>{ie();sle=le`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`});var cle,ule=M(()=>{ie();cle=fe`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`});var b2,ch,NB=M(()=>{ie();Ne();kB();ale();ji();Lc();gt();ule();b2=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},ch=class extends ce{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){let e=this.size==="lg";return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: ${e?"var(--wui-path-network-lg)":"var(--wui-path-network)"};
      --local-width: ${e?"86px":"48px"};
      --local-height: ${e?"96px":"54px"};
      --local-icon-size: ${e?"42px":"24px"};
    `,W`${this.templateVisual()} ${e?sle:KA}`}templateVisual(){return this.imageSrc?W`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:W`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};ch.styles=[Oe,cle];b2([J()],ch.prototype,"size",void 0);b2([J()],ch.prototype,"name",void 0);b2([J()],ch.prototype,"imageSrc",void 0);b2([J({type:Boolean})],ch.prototype,"selected",void 0);ch=b2([ae("wui-network-image")],ch)});var lle,fle=M(()=>{ie();lle=fe`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 64px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`});var nb,lf,dle=M(()=>{ie();Ne();oi();eo();gt();NB();h2();fle();nb=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},lf=class extends ce{constructor(){super(...arguments),this.name="unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1}render(){return W`
      <button data-selected=${$e(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type==="network"?W`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${$e(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:W`
      <wui-wallet-image size="md" imageSrc=${$e(this.imageSrc)} name=${this.name}>
      </wui-wallet-image>
    `}};lf.styles=[Oe,Nt,lle];nb([J()],lf.prototype,"name",void 0);nb([J()],lf.prototype,"type",void 0);nb([J()],lf.prototype,"imageSrc",void 0);nb([J({type:Boolean})],lf.prototype,"disabled",void 0);nb([J({type:Boolean})],lf.prototype,"selected",void 0);lf=nb([ae("wui-card-select")],lf)});var hle,ple=M(()=>{ie();hle=fe`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    padding: 7px var(--wui-spacing-s) 7px 10px;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 8.5px var(--wui-spacing-m) 9.5px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    border: 1px solid var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image {
    border: 1px solid var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }
`});var ib,ff,mle=M(()=>{ie();Ne();ji();Lc();eo();gt();uf();ple();ib=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},ff=class extends ce{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href=""}render(){let e=this.variant==="transparent"?"small-600":"paragraph-600";return W`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e} color="inherit">
          ${zt.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?W`<wui-image src=${this.imageSrc}></wui-image>`:null}};ff.styles=[Oe,Nt,hle];ib([J()],ff.prototype,"variant",void 0);ib([J()],ff.prototype,"imageSrc",void 0);ib([J({type:Boolean})],ff.prototype,"disabled",void 0);ib([J()],ff.prototype,"icon",void 0);ib([J()],ff.prototype,"href",void 0);ff=ib([ae("wui-chip")],ff)});var gle,ble=M(()=>{ie();gle=fe`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`});var DB,ob,yle=M(()=>{ie();Ne();ji();o2();eo();gt();ble();DB=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},ob=class extends ce{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){let e=this.size==="md"?"paragraph-600":"small-600";return W`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?W`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};ob.styles=[Oe,Nt,gle];DB([J()],ob.prototype,"size",void 0);DB([J({type:Boolean})],ob.prototype,"loading",void 0);ob=DB([ae("wui-connect-button")],ob)});var cbr,vle,wle=M(()=>{af();({I:cbr}=Use),vle=t=>t.strings===void 0});function qHe(t){this._$AN!==void 0?(ZA(this),this._$AM=t,_le(this)):this._$AM=t}function LHe(t,e=!1,r=0){let n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(n))for(let o=r;o<n.length;o++)y2(n[o],!1),ZA(n[o]);else n!=null&&(y2(n,!1),ZA(n));else y2(this,t)}var y2,ZA,_le,FHe,JA,xle=M(()=>{wle();u2();u2();y2=(t,e)=>{var r,n;let i=t._$AN;if(i===void 0)return!1;for(let o of i)(n=(r=o)._$AO)===null||n===void 0||n.call(r,e,!1),y2(o,e);return!0},ZA=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while(r?.size===0)},_le=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),FHe(e)}};FHe=t=>{var e,r,n,i;t.type==a2.CHILD&&((e=(n=t)._$AP)!==null&&e!==void 0||(n._$AP=LHe),(r=(i=t)._$AQ)!==null&&r!==void 0||(i._$AQ=qHe))},JA=class extends $0{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,n){super._$AT(e,r,n),_le(this),this.isConnected=e._$AU}_$AO(e,r=!0){var n,i;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)===null||n===void 0||n.call(this):(i=this.disconnected)===null||i===void 0||i.call(this)),r&&(y2(this,e),ZA(this))}setValue(e){if(vle(this._$Ct))this._$Ct._$AI(e,this);else{let r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}});var QA,qB,BB,YA,Ele=M(()=>{af();xle();u2();QA=()=>new qB,qB=class{},BB=new WeakMap,YA=c2(class extends JA{render(t){return Rn}update(t,[e]){var r;let n=e!==this.G;return n&&this.G!==void 0&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=e,this.dt=(r=t.options)===null||r===void 0?void 0:r.host,this.ot(this.lt=t.element)),Rn}ot(t){var e;if(typeof this.G=="function"){let r=(e=this.dt)!==null&&e!==void 0?e:globalThis,n=BB.get(r);n===void 0&&(n=new WeakMap,BB.set(r,n)),n.get(this.G)!==void 0&&this.G.call(this.dt,void 0),n.set(this.G,t),t!==void 0&&this.G.call(this.dt,t)}else this.G.value=t}get rt(){var t,e,r;return typeof this.G=="function"?(e=BB.get((t=this.dt)!==null&&t!==void 0?t:globalThis))===null||e===void 0?void 0:e.get(this.G):(r=this.G)===null||r===void 0?void 0:r.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}})});var LB=M(()=>{Ele()});var Sle,Ale=M(()=>{ie();Sle=fe`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) 42px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`});var G0,Ou,XA=M(()=>{ie();Ne();LB();ji();gt();oi();Ale();G0=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},Ou=class extends ce{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.inputElementRef=QA()}render(){let e=`wui-size-${this.size}`;return W` ${this.templateIcon()}
      <input
        ${YA(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${$e(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
      />
      <slot></slot>`}templateIcon(){return this.icon?W`<wui-icon
        data-input=${this.size}
        size="md"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};Ou.styles=[Oe,Nt,Sle];G0([J()],Ou.prototype,"size",void 0);G0([J()],Ou.prototype,"icon",void 0);G0([J({type:Boolean})],Ou.prototype,"disabled",void 0);G0([J()],Ou.prototype,"placeholder",void 0);G0([J()],Ou.prototype,"type",void 0);G0([J()],Ou.prototype,"keyHint",void 0);Ou=G0([ae("wui-input-text")],Ou)});var Cle,Ple=M(()=>{ie();Cle=fe`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-icon {
    padding: var(--wui-spacing-xl);
    cursor: pointer;
    transition: all var(--wui-duration-lg) var(--wui-ease-in-power-1);
  }

  wui-icon:hover {
    color: var(--wui-color-fg-200) !important;
  }

  wui-icon::part(chevronRight) {
    width: 12px;
    height: 12px;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`});var Ile,v2,Ole=M(()=>{ie();Ne();ji();eo();gt();XA();Ple();Ile=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},v2=class extends ce{render(){return W`
      <wui-input-text placeholder="Email" icon="mail" size="md">
        <wui-icon size="inherit" color="fg-100" name="chevronRight"></wui-icon>
      </wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?W`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};v2.styles=[Oe,Cle];Ile([J()],v2.prototype,"errorMessage",void 0);v2=Ile([ae("wui-email-input")],v2)});var Tle,Rle=M(()=>{ie();Tle=fe`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`});var w2,uh,jle=M(()=>{ie();Ne();ji();gt();Rle();w2=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},uh=class extends ce{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return W`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};uh.styles=[Oe,Nt,eb,Tle];w2([J()],uh.prototype,"size",void 0);w2([J({type:Boolean})],uh.prototype,"disabled",void 0);w2([J()],uh.prototype,"icon",void 0);w2([J()],uh.prototype,"iconColor",void 0);uh=w2([ae("wui-icon-link")],uh)});var Mle,kle=M(()=>{ie();Mle=fe`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`});var Nle,_2,FB=M(()=>{ie();Ne();ji();gt();kle();Nle=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},_2=class extends ce{constructor(){super(...arguments),this.icon="copy"}render(){return W`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};_2.styles=[Oe,Nt,Mle];Nle([J()],_2.prototype,"icon",void 0);_2=Nle([ae("wui-input-element")],_2)});var Dle,Ble=M(()=>{ie();Dle=fe`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }
`});var qle,x2,eC=M(()=>{ie();Ne();gt();Ble();qle=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},x2=class extends ce{constructor(){super(...arguments),this.disabled=!1}render(){return W`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}};x2.styles=[Oe,Nt,Dle];qle([J({type:Boolean})],x2.prototype,"disabled",void 0);x2=qle([ae("wui-input-numeric")],x2)});var Lle,Fle=M(()=>{ie();Lle=fe`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`});var Ule,E2,$le=M(()=>{ie();Ne();ji();eo();gt();Fle();Ule=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},E2=class extends ce{constructor(){super(...arguments),this.disabled=!1}render(){return W`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};E2.styles=[Oe,Nt,Lle];Ule([J({type:Boolean})],E2.prototype,"disabled",void 0);E2=Ule([ae("wui-link")],E2)});var Hle,zle=M(()=>{ie();Hle=fe`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    outline: 2px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon-box[data-variant='blue'] {
    outline: 2px solid var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    outline: 2px solid var(--wui-gray-glass-005);
  }

  button > wui-icon {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`});var df,qa,Wle=M(()=>{ie();Ne();ji();Lc();o2();eo();f2();gt();W0();zle();df=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},qa=class extends ce{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return W`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return W`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){let e=this.iconVariant==="blue"?"accent-100":"fg-200";return W`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size="md"
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?W`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:W``}chevronTemplate(){return this.chevron?W`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};qa.styles=[Oe,Nt,Hle];df([J()],qa.prototype,"icon",void 0);df([J()],qa.prototype,"variant",void 0);df([J()],qa.prototype,"iconVariant",void 0);df([J({type:Boolean})],qa.prototype,"disabled",void 0);df([J()],qa.prototype,"imageSrc",void 0);df([J()],qa.prototype,"alt",void 0);df([J({type:Boolean})],qa.prototype,"chevron",void 0);df([J({type:Boolean})],qa.prototype,"loading",void 0);qa=df([ae("wui-list-item")],qa)});var Vle,Gle=M(()=>{ie();Vle=fe`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    border: 1px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  :host([data-type='minted']),
  :host([data-type='nftSent']),
  :host([data-type='bought']) {
    border-radius: var(--wui-border-radius-xs);
  }

  wui-image {
    display: block;
    border-radius: inherit;
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`});var UB,UHe,Kle,Zle,$He,sb,$B=M(()=>{ie();Ne();Lc();gt();W0();Gle();UB=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},UHe=["withdrawed","buy","cryptoSent","nftSent"],Kle=["deposited","received","bought","minted"],Zle=["minted","bought","nftSent"],$He=["deposited","withdrawed","cryptoSent","buy","received"],sb=class extends ce{constructor(){super(...arguments),this.type="buy"}render(){let e="accent-100",r="arrowTop";return UHe.includes(this.type)?(e="accent-100",r="arrowTop"):Kle.includes(this.type)&&Zle.includes(this.type)||Kle.includes(this.type)&&$He.includes(this.type)?(e="success-100",r="arrowBottom"):(e="accent-100",r="swapVertical"),this.dataset.type=this.type,W`
      ${this.templateVisual()}
      <wui-icon-box
        size="xs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        .icon=${r}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `}templateVisual(){return this.imageSrc?W`<wui-image src=${this.imageSrc} alt=${this.type}></wui-image>`:Zle.includes(this.type)?W`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:W`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}};sb.styles=[Oe,Vle];UB([J()],sb.prototype,"type",void 0);UB([J()],sb.prototype,"imageSrc",void 0);sb=UB([ae("wui-transaction-visual")],sb)});var Jle,Qle=M(()=>{ie();Jle=fe`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  button > wui-flex > wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  button > wui-flex > wui-text:nth-child(2) {
    text-transform: uppercase;
  }

  button:disabled {
    color: var(--wui-color-fg-300);
  }
`});var ab,hf,Yle=M(()=>{ie();Ne();eo();gt();uf();$B();Qle();ab=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},hf=class extends ce{constructor(){super(...arguments),this.type="bought",this.disabled=!1,this.imageSrc="",this.date=new Date,this.transactionDetail=""}render(){let r=this.type==="nftSent"||this.type==="cryptoSent"?"Sent":this.type,n=zt.getFormattedDate(this.date);return W`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-transaction-visual
          type=${this.type}
          imageSrc=${this.imageSrc}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">${r}</wui-text>
          <wui-text variant="small-500" color="fg-200">${this.transactionDetail}</wui-text>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300">${n}</wui-text>
      </button>
    `}};hf.styles=[Oe,Nt,Jle];ab([J()],hf.prototype,"type",void 0);ab([J({type:Boolean})],hf.prototype,"disabled",void 0);ab([J()],hf.prototype,"imageSrc",void 0);ab([J({attribute:!1})],hf.prototype,"date",void 0);ab([J()],hf.prototype,"transactionDetail",void 0);hf=ab([ae("wui-list-transaction")],hf)});var Xle,efe=M(()=>{ie();Xle=fe`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`});var tfe,S2,HB=M(()=>{ie();Ne();eo();gt();efe();tfe=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},S2=class extends ce{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,W`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};S2.styles=[Oe,Xle];tfe([J()],S2.prototype,"variant",void 0);S2=tfe([ae("wui-tag")],S2)});var rfe,nfe=M(()=>{ie();rfe=fe`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`});var Tu,Xs,ife=M(()=>{ie();Ne();ji();eo();gt();MB();HB();h2();nfe();Tu=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},Xs=class extends ce{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.disabled=!1,this.showAllWallets=!1}render(){return W`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?W` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?W` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?W`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?W`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?W`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?W`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};Xs.styles=[Oe,Nt,rfe];Tu([J({type:Array})],Xs.prototype,"walletImages",void 0);Tu([J()],Xs.prototype,"imageSrc",void 0);Tu([J()],Xs.prototype,"name",void 0);Tu([J()],Xs.prototype,"tagLabel",void 0);Tu([J()],Xs.prototype,"tagVariant",void 0);Tu([J()],Xs.prototype,"icon",void 0);Tu([J()],Xs.prototype,"walletIcon",void 0);Tu([J({type:Boolean})],Xs.prototype,"disabled",void 0);Tu([J({type:Boolean})],Xs.prototype,"showAllWallets",void 0);Xs=Tu([ae("wui-list-wallet")],Xs)});var ofe,sfe=M(()=>{ie();ofe=fe`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`});var afe,A2,zB=M(()=>{ie();Ne();ji();gt();sfe();afe=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},A2=class extends ce{constructor(){super(...arguments),this.logo="google"}render(){return W`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};A2.styles=[Oe,ofe];afe([J()],A2.prototype,"logo",void 0);A2=afe([ae("wui-logo")],A2)});var cfe,ufe=M(()=>{ie();cfe=fe`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`});var WB,cb,lfe=M(()=>{ie();Ne();gt();zB();ufe();WB=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},cb=class extends ce{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return W`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};cb.styles=[Oe,Nt,cfe];WB([J()],cb.prototype,"logo",void 0);WB([J({type:Boolean})],cb.prototype,"disabled",void 0);cb=WB([ae("wui-logo-select")],cb)});var ffe,dfe=M(()=>{ie();ffe=fe`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }
`});var VB,ub,hfe=M(()=>{ie();Ne();Lc();eo();gt();W0();dfe();VB=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},ub=class extends ce{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return W`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?W`<wui-image src=${this.imageSrc}></wui-image>`:W`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};ub.styles=[Oe,Nt,ffe];VB([J()],ub.prototype,"imageSrc",void 0);VB([J({type:Boolean})],ub.prototype,"disabled",void 0);ub=VB([ae("wui-network-button")],ub)});var pfe,mfe=M(()=>{ie();pfe=fe`
  :host {
    position: relative;
    display: block;
  }
`});var gfe,C2,bfe=M(()=>{ie();Ne();f2();gt();uf();eC();eC();mfe();gfe=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},C2=class extends ce{constructor(){super(...arguments),this.length=6,this.numerics=[],this.handleKeyDown=(e,r)=>{let n=e.target,i=this.getInputElement(n),o=["ArrowLeft","ArrowRight","Shift","Delete"];if(!i)return;o.includes(e.key)&&e.preventDefault();let s=i.selectionStart;switch(e.key){case"ArrowLeft":s&&i.setSelectionRange(s+1,s+1),this.focusInputField("prev",r);break;case"ArrowRight":this.focusInputField("next",r);break;case"Shift":this.focusInputField("next",r);break;case"Delete":i.value===""?this.focusInputField("prev",r):i.value="";break;case"Backspace":i.value===""?this.focusInputField("prev",r):i.value="";break;default:}},this.focusInputField=(e,r)=>{if(e==="next"){let n=r+1,i=this.numerics[n<this.length?n:r],o=i?this.getInputElement(i):void 0;o&&o.focus()}if(e==="prev"){let n=r-1,i=this.numerics[n>-1?n:r],o=i?this.getInputElement(i):void 0;o&&o.focus()}}}firstUpdated(){let e=this.shadowRoot?.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e))}render(){return W`
      <wui-flex gap="xxs">
        ${[...Array(this.length)].map((e,r)=>W`
            <wui-input-numeric
              @input=${n=>this.handleInput(n,r)}
              @keydown=${n=>this.handleKeyDown(n,r)}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}handleInput(e,r){let n=e.target,i=this.getInputElement(n);if(i){let o=i.value;e.inputType==="insertFromPaste"?this.handlePaste(i,o,r):zt.isNumber(o)&&e.data?(i.value=e.data,this.focusInputField("next",r)):i.value=""}}handlePaste(e,r,n){let i=r[0];if(i&&zt.isNumber(i)){e.value=i;let s=r.substring(1);if(n+1<this.length&&s.length){let a=this.numerics[n+1],c=a?this.getInputElement(a):void 0;c&&this.handlePaste(c,s,n+1)}else this.focusInputField("next",n)}else e.value=""}getInputElement(e){return e.shadowRoot?.querySelector("input")?e.shadowRoot.querySelector("input"):null}};C2.styles=[Oe,pfe];gfe([J({type:Number})],C2.prototype,"length",void 0);C2=gfe([ae("wui-otp")],C2)});var vfe=b((gwr,yfe)=>{yfe.exports=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}});var lh=b(K0=>{var GB,HHe=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];K0.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};K0.getSymbolTotalCodewords=function(e){return HHe[e]};K0.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};K0.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');GB=e};K0.isKanjiModeEnabled=function(){return typeof GB<"u"};K0.toSJIS=function(e){return GB(e)}});var tC=b(La=>{La.L={bit:1};La.M={bit:0};La.Q={bit:3};La.H={bit:2};function zHe(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return La.L;case"m":case"medium":return La.M;case"q":case"quartile":return La.Q;case"h":case"high":return La.H;default:throw new Error("Unknown EC Level: "+t)}}La.isValid=function(e){return e&&typeof e.bit<"u"&&e.bit>=0&&e.bit<4};La.from=function(e,r){if(La.isValid(e))return e;try{return zHe(e)}catch{return r}}});var xfe=b((vwr,_fe)=>{function wfe(){this.buffer=[],this.length=0}wfe.prototype={get:function(t){let e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let r=0;r<e;r++)this.putBit((t>>>e-r-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){let e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};_fe.exports=wfe});var Sfe=b((wwr,Efe)=>{function P2(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}P2.prototype.set=function(t,e,r,n){let i=t*this.size+e;this.data[i]=r,n&&(this.reservedBit[i]=!0)};P2.prototype.get=function(t,e){return this.data[t*this.size+e]};P2.prototype.xor=function(t,e,r){this.data[t*this.size+e]^=r};P2.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};Efe.exports=P2});var Afe=b(rC=>{var WHe=lh().getSymbolSize;rC.getRowColCoords=function(e){if(e===1)return[];let r=Math.floor(e/7)+2,n=WHe(e),i=n===145?26:Math.ceil((n-13)/(2*r-2))*2,o=[n-7];for(let s=1;s<r-1;s++)o[s]=o[s-1]-i;return o.push(6),o.reverse()};rC.getPositions=function(e){let r=[],n=rC.getRowColCoords(e),i=n.length;for(let o=0;o<i;o++)for(let s=0;s<i;s++)o===0&&s===0||o===0&&s===i-1||o===i-1&&s===0||r.push([n[o],n[s]]);return r}});var Ife=b(Pfe=>{var VHe=lh().getSymbolSize,Cfe=7;Pfe.getPositions=function(e){let r=VHe(e);return[[0,0],[r-Cfe,0],[0,r-Cfe]]}});var Ofe=b(sn=>{sn.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var Z0={N1:3,N2:3,N3:40,N4:10};sn.isValid=function(e){return e!=null&&e!==""&&!isNaN(e)&&e>=0&&e<=7};sn.from=function(e){return sn.isValid(e)?parseInt(e,10):void 0};sn.getPenaltyN1=function(e){let r=e.size,n=0,i=0,o=0,s=null,a=null;for(let c=0;c<r;c++){i=o=0,s=a=null;for(let l=0;l<r;l++){let d=e.get(c,l);d===s?i++:(i>=5&&(n+=Z0.N1+(i-5)),s=d,i=1),d=e.get(l,c),d===a?o++:(o>=5&&(n+=Z0.N1+(o-5)),a=d,o=1)}i>=5&&(n+=Z0.N1+(i-5)),o>=5&&(n+=Z0.N1+(o-5))}return n};sn.getPenaltyN2=function(e){let r=e.size,n=0;for(let i=0;i<r-1;i++)for(let o=0;o<r-1;o++){let s=e.get(i,o)+e.get(i,o+1)+e.get(i+1,o)+e.get(i+1,o+1);(s===4||s===0)&&n++}return n*Z0.N2};sn.getPenaltyN3=function(e){let r=e.size,n=0,i=0,o=0;for(let s=0;s<r;s++){i=o=0;for(let a=0;a<r;a++)i=i<<1&2047|e.get(s,a),a>=10&&(i===1488||i===93)&&n++,o=o<<1&2047|e.get(a,s),a>=10&&(o===1488||o===93)&&n++}return n*Z0.N3};sn.getPenaltyN4=function(e){let r=0,n=e.data.length;for(let o=0;o<n;o++)r+=e.data[o];return Math.abs(Math.ceil(r*100/n/5)-10)*Z0.N4};function GHe(t,e,r){switch(t){case sn.Patterns.PATTERN000:return(e+r)%2===0;case sn.Patterns.PATTERN001:return e%2===0;case sn.Patterns.PATTERN010:return r%3===0;case sn.Patterns.PATTERN011:return(e+r)%3===0;case sn.Patterns.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2===0;case sn.Patterns.PATTERN101:return e*r%2+e*r%3===0;case sn.Patterns.PATTERN110:return(e*r%2+e*r%3)%2===0;case sn.Patterns.PATTERN111:return(e*r%3+(e+r)%2)%2===0;default:throw new Error("bad maskPattern:"+t)}}sn.applyMask=function(e,r){let n=r.size;for(let i=0;i<n;i++)for(let o=0;o<n;o++)r.isReserved(o,i)||r.xor(o,i,GHe(e,o,i))};sn.getBestMask=function(e,r){let n=Object.keys(sn.Patterns).length,i=0,o=1/0;for(let s=0;s<n;s++){r(s),sn.applyMask(s,e);let a=sn.getPenaltyN1(e)+sn.getPenaltyN2(e)+sn.getPenaltyN3(e)+sn.getPenaltyN4(e);sn.applyMask(s,e),a<o&&(o=a,i=s)}return i}});var ZB=b(KB=>{var fh=tC(),nC=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],iC=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];KB.getBlocksCount=function(e,r){switch(r){case fh.L:return nC[(e-1)*4+0];case fh.M:return nC[(e-1)*4+1];case fh.Q:return nC[(e-1)*4+2];case fh.H:return nC[(e-1)*4+3];default:return}};KB.getTotalCodewordsCount=function(e,r){switch(r){case fh.L:return iC[(e-1)*4+0];case fh.M:return iC[(e-1)*4+1];case fh.Q:return iC[(e-1)*4+2];case fh.H:return iC[(e-1)*4+3];default:return}}});var Tfe=b(sC=>{var I2=new Uint8Array(512),oC=new Uint8Array(256);(function(){let e=1;for(let r=0;r<255;r++)I2[r]=e,oC[e]=r,e<<=1,e&256&&(e^=285);for(let r=255;r<512;r++)I2[r]=I2[r-255]})();sC.log=function(e){if(e<1)throw new Error("log("+e+")");return oC[e]};sC.exp=function(e){return I2[e]};sC.mul=function(e,r){return e===0||r===0?0:I2[oC[e]+oC[r]]}});var Rfe=b(O2=>{var JB=Tfe();O2.mul=function(e,r){let n=new Uint8Array(e.length+r.length-1);for(let i=0;i<e.length;i++)for(let o=0;o<r.length;o++)n[i+o]^=JB.mul(e[i],r[o]);return n};O2.mod=function(e,r){let n=new Uint8Array(e);for(;n.length-r.length>=0;){let i=n[0];for(let s=0;s<r.length;s++)n[s]^=JB.mul(r[s],i);let o=0;for(;o<n.length&&n[o]===0;)o++;n=n.slice(o)}return n};O2.generateECPolynomial=function(e){let r=new Uint8Array([1]);for(let n=0;n<e;n++)r=O2.mul(r,new Uint8Array([1,JB.exp(n)]));return r}});var kfe=b((Pwr,Mfe)=>{var jfe=Rfe();function QB(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}QB.prototype.initialize=function(e){this.degree=e,this.genPoly=jfe.generateECPolynomial(this.degree)};QB.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");let r=new Uint8Array(e.length+this.degree);r.set(e);let n=jfe.mod(r,this.genPoly),i=this.degree-n.length;if(i>0){let o=new Uint8Array(this.degree);return o.set(n,i),o}return n};Mfe.exports=QB});var YB=b(Nfe=>{Nfe.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}});var XB=b(pf=>{var Dfe="[0-9]+",KHe="[A-Z $%*+\\-./:]+",T2="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";T2=T2.replace(/u/g,"\\u");var ZHe="(?:(?![A-Z0-9 $%*+\\-./:]|"+T2+`)(?:.|[\r
]))+`;pf.KANJI=new RegExp(T2,"g");pf.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");pf.BYTE=new RegExp(ZHe,"g");pf.NUMERIC=new RegExp(Dfe,"g");pf.ALPHANUMERIC=new RegExp(KHe,"g");var JHe=new RegExp("^"+T2+"$"),QHe=new RegExp("^"+Dfe+"$"),YHe=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");pf.testKanji=function(e){return JHe.test(e)};pf.testNumeric=function(e){return QHe.test(e)};pf.testAlphanumeric=function(e){return YHe.test(e)}});var dh=b(si=>{var XHe=YB(),eq=XB();si.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]};si.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]};si.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]};si.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]};si.MIXED={bit:-1};si.getCharCountIndicator=function(e,r){if(!e.ccBits)throw new Error("Invalid mode: "+e);if(!XHe.isValid(r))throw new Error("Invalid version: "+r);return r>=1&&r<10?e.ccBits[0]:r<27?e.ccBits[1]:e.ccBits[2]};si.getBestModeForData=function(e){return eq.testNumeric(e)?si.NUMERIC:eq.testAlphanumeric(e)?si.ALPHANUMERIC:eq.testKanji(e)?si.KANJI:si.BYTE};si.toString=function(e){if(e&&e.id)return e.id;throw new Error("Invalid mode")};si.isValid=function(e){return e&&e.bit&&e.ccBits};function eze(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return si.NUMERIC;case"alphanumeric":return si.ALPHANUMERIC;case"kanji":return si.KANJI;case"byte":return si.BYTE;default:throw new Error("Unknown mode: "+t)}}si.from=function(e,r){if(si.isValid(e))return e;try{return eze(e)}catch{return r}}});var Ufe=b(J0=>{var aC=lh(),tze=ZB(),Bfe=tC(),hh=dh(),tq=YB(),Lfe=7973,qfe=aC.getBCHDigit(Lfe);function rze(t,e,r){for(let n=1;n<=40;n++)if(e<=J0.getCapacity(n,r,t))return n}function Ffe(t,e){return hh.getCharCountIndicator(t,e)+4}function nze(t,e){let r=0;return t.forEach(function(n){let i=Ffe(n.mode,e);r+=i+n.getBitsLength()}),r}function ize(t,e){for(let r=1;r<=40;r++)if(nze(t,r)<=J0.getCapacity(r,e,hh.MIXED))return r}J0.from=function(e,r){return tq.isValid(e)?parseInt(e,10):r};J0.getCapacity=function(e,r,n){if(!tq.isValid(e))throw new Error("Invalid QR Code version");typeof n>"u"&&(n=hh.BYTE);let i=aC.getSymbolTotalCodewords(e),o=tze.getTotalCodewordsCount(e,r),s=(i-o)*8;if(n===hh.MIXED)return s;let a=s-Ffe(n,e);switch(n){case hh.NUMERIC:return Math.floor(a/10*3);case hh.ALPHANUMERIC:return Math.floor(a/11*2);case hh.KANJI:return Math.floor(a/13);case hh.BYTE:default:return Math.floor(a/8)}};J0.getBestVersionForData=function(e,r){let n,i=Bfe.from(r,Bfe.M);if(Array.isArray(e)){if(e.length>1)return ize(e,i);if(e.length===0)return 1;n=e[0]}else n=e;return rze(n.mode,n.getLength(),i)};J0.getEncodedBits=function(e){if(!tq.isValid(e)||e<7)throw new Error("Invalid QR Code version");let r=e<<12;for(;aC.getBCHDigit(r)-qfe>=0;)r^=Lfe<<aC.getBCHDigit(r)-qfe;return e<<12|r}});var Wfe=b(zfe=>{var rq=lh(),Hfe=1335,oze=21522,$fe=rq.getBCHDigit(Hfe);zfe.getEncodedBits=function(e,r){let n=e.bit<<3|r,i=n<<10;for(;rq.getBCHDigit(i)-$fe>=0;)i^=Hfe<<rq.getBCHDigit(i)-$fe;return(n<<10|i)^oze}});var Gfe=b((Mwr,Vfe)=>{var sze=dh();function lb(t){this.mode=sze.NUMERIC,this.data=t.toString()}lb.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};lb.prototype.getLength=function(){return this.data.length};lb.prototype.getBitsLength=function(){return lb.getBitsLength(this.data.length)};lb.prototype.write=function(e){let r,n,i;for(r=0;r+3<=this.data.length;r+=3)n=this.data.substr(r,3),i=parseInt(n,10),e.put(i,10);let o=this.data.length-r;o>0&&(n=this.data.substr(r),i=parseInt(n,10),e.put(i,o*3+1))};Vfe.exports=lb});var Zfe=b((kwr,Kfe)=>{var aze=dh(),nq=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function fb(t){this.mode=aze.ALPHANUMERIC,this.data=t}fb.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};fb.prototype.getLength=function(){return this.data.length};fb.prototype.getBitsLength=function(){return fb.getBitsLength(this.data.length)};fb.prototype.write=function(e){let r;for(r=0;r+2<=this.data.length;r+=2){let n=nq.indexOf(this.data[r])*45;n+=nq.indexOf(this.data[r+1]),e.put(n,11)}this.data.length%2&&e.put(nq.indexOf(this.data[r]),6)};Kfe.exports=fb});var Qfe=b((Nwr,Jfe)=>{"use strict";Jfe.exports=function(e){for(var r=[],n=e.length,i=0;i<n;i++){var o=e.charCodeAt(i);if(o>=55296&&o<=56319&&n>i+1){var s=e.charCodeAt(i+1);s>=56320&&s<=57343&&(o=(o-55296)*1024+s-56320+65536,i+=1)}if(o<128){r.push(o);continue}if(o<2048){r.push(o>>6|192),r.push(o&63|128);continue}if(o<55296||o>=57344&&o<65536){r.push(o>>12|224),r.push(o>>6&63|128),r.push(o&63|128);continue}if(o>=65536&&o<=1114111){r.push(o>>18|240),r.push(o>>12&63|128),r.push(o>>6&63|128),r.push(o&63|128);continue}r.push(239,191,189)}return new Uint8Array(r).buffer}});var Xfe=b((Dwr,Yfe)=>{var cze=Qfe(),uze=dh();function db(t){this.mode=uze.BYTE,typeof t=="string"&&(t=cze(t)),this.data=new Uint8Array(t)}db.getBitsLength=function(e){return e*8};db.prototype.getLength=function(){return this.data.length};db.prototype.getBitsLength=function(){return db.getBitsLength(this.data.length)};db.prototype.write=function(t){for(let e=0,r=this.data.length;e<r;e++)t.put(this.data[e],8)};Yfe.exports=db});var tde=b((Bwr,ede)=>{var lze=dh(),fze=lh();function hb(t){this.mode=lze.KANJI,this.data=t}hb.getBitsLength=function(e){return e*13};hb.prototype.getLength=function(){return this.data.length};hb.prototype.getBitsLength=function(){return hb.getBitsLength(this.data.length)};hb.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let r=fze.toSJIS(this.data[e]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);r=(r>>>8&255)*192+(r&255),t.put(r,13)}};ede.exports=hb});var rde=b((qwr,iq)=>{"use strict";var R2={single_source_shortest_paths:function(t,e,r){var n={},i={};i[e]=0;var o=R2.PriorityQueue.make();o.push(e,0);for(var s,a,c,l,d,h,m,g,v;!o.empty();){s=o.pop(),a=s.value,l=s.cost,d=t[a]||{};for(c in d)d.hasOwnProperty(c)&&(h=d[c],m=l+h,g=i[c],v=typeof i[c]>"u",(v||g>m)&&(i[c]=m,o.push(c,m),n[c]=a))}if(typeof r<"u"&&typeof i[r]>"u"){var w=["Could not find a path from ",e," to ",r,"."].join("");throw new Error(w)}return n},extract_shortest_path_from_predecessor_list:function(t,e){for(var r=[],n=e,i;n;)r.push(n),i=t[n],n=t[n];return r.reverse(),r},find_path:function(t,e,r){var n=R2.single_source_shortest_paths(t,e,r);return R2.extract_shortest_path_from_predecessor_list(n,r)},PriorityQueue:{make:function(t){var e=R2.PriorityQueue,r={},n;t=t||{};for(n in e)e.hasOwnProperty(n)&&(r[n]=e[n]);return r.queue=[],r.sorter=t.sorter||e.default_sorter,r},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var r={value:t,cost:e};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};typeof iq<"u"&&(iq.exports=R2)});var lde=b(pb=>{var wr=dh(),ode=Gfe(),sde=Zfe(),ade=Xfe(),cde=tde(),j2=XB(),cC=lh(),dze=rde();function nde(t){return unescape(encodeURIComponent(t)).length}function M2(t,e,r){let n=[],i;for(;(i=t.exec(r))!==null;)n.push({data:i[0],index:i.index,mode:e,length:i[0].length});return n}function ude(t){let e=M2(j2.NUMERIC,wr.NUMERIC,t),r=M2(j2.ALPHANUMERIC,wr.ALPHANUMERIC,t),n,i;return cC.isKanjiModeEnabled()?(n=M2(j2.BYTE,wr.BYTE,t),i=M2(j2.KANJI,wr.KANJI,t)):(n=M2(j2.BYTE_KANJI,wr.BYTE,t),i=[]),e.concat(r,n,i).sort(function(s,a){return s.index-a.index}).map(function(s){return{data:s.data,mode:s.mode,length:s.length}})}function oq(t,e){switch(e){case wr.NUMERIC:return ode.getBitsLength(t);case wr.ALPHANUMERIC:return sde.getBitsLength(t);case wr.KANJI:return cde.getBitsLength(t);case wr.BYTE:return ade.getBitsLength(t)}}function hze(t){return t.reduce(function(e,r){let n=e.length-1>=0?e[e.length-1]:null;return n&&n.mode===r.mode?(e[e.length-1].data+=r.data,e):(e.push(r),e)},[])}function pze(t){let e=[];for(let r=0;r<t.length;r++){let n=t[r];switch(n.mode){case wr.NUMERIC:e.push([n,{data:n.data,mode:wr.ALPHANUMERIC,length:n.length},{data:n.data,mode:wr.BYTE,length:n.length}]);break;case wr.ALPHANUMERIC:e.push([n,{data:n.data,mode:wr.BYTE,length:n.length}]);break;case wr.KANJI:e.push([n,{data:n.data,mode:wr.BYTE,length:nde(n.data)}]);break;case wr.BYTE:e.push([{data:n.data,mode:wr.BYTE,length:nde(n.data)}])}}return e}function mze(t,e){let r={},n={start:{}},i=["start"];for(let o=0;o<t.length;o++){let s=t[o],a=[];for(let c=0;c<s.length;c++){let l=s[c],d=""+o+c;a.push(d),r[d]={node:l,lastCount:0},n[d]={};for(let h=0;h<i.length;h++){let m=i[h];r[m]&&r[m].node.mode===l.mode?(n[m][d]=oq(r[m].lastCount+l.length,l.mode)-oq(r[m].lastCount,l.mode),r[m].lastCount+=l.length):(r[m]&&(r[m].lastCount=l.length),n[m][d]=oq(l.length,l.mode)+4+wr.getCharCountIndicator(l.mode,e))}}i=a}for(let o=0;o<i.length;o++)n[i[o]].end=0;return{map:n,table:r}}function ide(t,e){let r,n=wr.getBestModeForData(t);if(r=wr.from(e,n),r!==wr.BYTE&&r.bit<n.bit)throw new Error('"'+t+'" cannot be encoded with mode '+wr.toString(r)+`.
 Suggested mode is: `+wr.toString(n));switch(r===wr.KANJI&&!cC.isKanjiModeEnabled()&&(r=wr.BYTE),r){case wr.NUMERIC:return new ode(t);case wr.ALPHANUMERIC:return new sde(t);case wr.KANJI:return new cde(t);case wr.BYTE:return new ade(t)}}pb.fromArray=function(e){return e.reduce(function(r,n){return typeof n=="string"?r.push(ide(n,null)):n.data&&r.push(ide(n.data,n.mode)),r},[])};pb.fromString=function(e,r){let n=ude(e,cC.isKanjiModeEnabled()),i=pze(n),o=mze(i,r),s=dze.find_path(o.map,"start","end"),a=[];for(let c=1;c<s.length-1;c++)a.push(o.table[s[c]].node);return pb.fromArray(hze(a))};pb.rawSplit=function(e){return pb.fromArray(ude(e,cC.isKanjiModeEnabled()))}});var dde=b(fde=>{var lC=lh(),sq=tC(),gze=xfe(),bze=Sfe(),yze=Afe(),vze=Ife(),uq=Ofe(),lq=ZB(),wze=kfe(),uC=Ufe(),_ze=Wfe(),xze=dh(),aq=lde();function Eze(t,e){let r=t.size,n=vze.getPositions(e);for(let i=0;i<n.length;i++){let o=n[i][0],s=n[i][1];for(let a=-1;a<=7;a++)if(!(o+a<=-1||r<=o+a))for(let c=-1;c<=7;c++)s+c<=-1||r<=s+c||(a>=0&&a<=6&&(c===0||c===6)||c>=0&&c<=6&&(a===0||a===6)||a>=2&&a<=4&&c>=2&&c<=4?t.set(o+a,s+c,!0,!0):t.set(o+a,s+c,!1,!0))}}function Sze(t){let e=t.size;for(let r=8;r<e-8;r++){let n=r%2===0;t.set(r,6,n,!0),t.set(6,r,n,!0)}}function Aze(t,e){let r=yze.getPositions(e);for(let n=0;n<r.length;n++){let i=r[n][0],o=r[n][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?t.set(i+s,o+a,!0,!0):t.set(i+s,o+a,!1,!0)}}function Cze(t,e){let r=t.size,n=uC.getEncodedBits(e),i,o,s;for(let a=0;a<18;a++)i=Math.floor(a/3),o=a%3+r-8-3,s=(n>>a&1)===1,t.set(i,o,s,!0),t.set(o,i,s,!0)}function cq(t,e,r){let n=t.size,i=_ze.getEncodedBits(e,r),o,s;for(o=0;o<15;o++)s=(i>>o&1)===1,o<6?t.set(o,8,s,!0):o<8?t.set(o+1,8,s,!0):t.set(n-15+o,8,s,!0),o<8?t.set(8,n-o-1,s,!0):o<9?t.set(8,15-o-1+1,s,!0):t.set(8,15-o-1,s,!0);t.set(n-8,8,1,!0)}function Pze(t,e){let r=t.size,n=-1,i=r-1,o=7,s=0;for(let a=r-1;a>0;a-=2)for(a===6&&a--;;){for(let c=0;c<2;c++)if(!t.isReserved(i,a-c)){let l=!1;s<e.length&&(l=(e[s]>>>o&1)===1),t.set(i,a-c,l),o--,o===-1&&(s++,o=7)}if(i+=n,i<0||r<=i){i-=n,n=-n;break}}}function Ize(t,e,r){let n=new gze;r.forEach(function(c){n.put(c.mode.bit,4),n.put(c.getLength(),xze.getCharCountIndicator(c.mode,t)),c.write(n)});let i=lC.getSymbolTotalCodewords(t),o=lq.getTotalCodewordsCount(t,e),s=(i-o)*8;for(n.getLengthInBits()+4<=s&&n.put(0,4);n.getLengthInBits()%8!==0;)n.putBit(0);let a=(s-n.getLengthInBits())/8;for(let c=0;c<a;c++)n.put(c%2?17:236,8);return Oze(n,t,e)}function Oze(t,e,r){let n=lC.getSymbolTotalCodewords(e),i=lq.getTotalCodewordsCount(e,r),o=n-i,s=lq.getBlocksCount(e,r),a=n%s,c=s-a,l=Math.floor(n/s),d=Math.floor(o/s),h=d+1,m=l-d,g=new wze(m),v=0,w=new Array(s),S=new Array(s),C=0,P=new Uint8Array(t.buffer);for(let L=0;L<s;L++){let z=L<c?d:h;w[L]=P.slice(v,v+z),S[L]=g.encode(w[L]),v+=z,C=Math.max(C,z)}let T=new Uint8Array(n),k=0,D,H;for(D=0;D<C;D++)for(H=0;H<s;H++)D<w[H].length&&(T[k++]=w[H][D]);for(D=0;D<m;D++)for(H=0;H<s;H++)T[k++]=S[H][D];return T}function Tze(t,e,r,n){let i;if(Array.isArray(t))i=aq.fromArray(t);else if(typeof t=="string"){let l=e;if(!l){let d=aq.rawSplit(t);l=uC.getBestVersionForData(d,r)}i=aq.fromString(t,l||40)}else throw new Error("Invalid data");let o=uC.getBestVersionForData(i,r);if(!o)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=o;else if(e<o)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+o+`.
`);let s=Ize(e,r,i),a=lC.getSymbolSize(e),c=new bze(a);return Eze(c,e),Sze(c),Aze(c,e),cq(c,r,0),e>=7&&Cze(c,e),Pze(c,s),isNaN(n)&&(n=uq.getBestMask(c,cq.bind(null,c,r))),uq.applyMask(n,c),cq(c,r,n),{modules:c,version:e,errorCorrectionLevel:r,maskPattern:n,segments:i}}fde.create=function(e,r){if(typeof e>"u"||e==="")throw new Error("No input text");let n=sq.M,i,o;return typeof r<"u"&&(n=sq.from(r.errorCorrectionLevel,sq.M),i=uC.from(r.version),o=uq.from(r.maskPattern),r.toSJISFunc&&lC.setToSJISFunction(r.toSJISFunc)),Tze(e,i,n,o)}});var fq=b(Q0=>{function hde(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let e=t.slice().replace("#","").split("");if(e.length<3||e.length===5||e.length>8)throw new Error("Invalid hex color: "+t);(e.length===3||e.length===4)&&(e=Array.prototype.concat.apply([],e.map(function(n){return[n,n]}))),e.length===6&&e.push("F","F");let r=parseInt(e.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+e.slice(0,6).join("")}}Q0.getOptions=function(e){e||(e={}),e.color||(e.color={});let r=typeof e.margin>"u"||e.margin===null||e.margin<0?4:e.margin,n=e.width&&e.width>=21?e.width:void 0,i=e.scale||4;return{width:n,scale:n?4:i,margin:r,color:{dark:hde(e.color.dark||"#000000ff"),light:hde(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}};Q0.getScale=function(e,r){return r.width&&r.width>=e+r.margin*2?r.width/(e+r.margin*2):r.scale};Q0.getImageWidth=function(e,r){let n=Q0.getScale(e,r);return Math.floor((e+r.margin*2)*n)};Q0.qrToImageData=function(e,r,n){let i=r.modules.size,o=r.modules.data,s=Q0.getScale(i,n),a=Math.floor((i+n.margin*2)*s),c=n.margin*s,l=[n.color.light,n.color.dark];for(let d=0;d<a;d++)for(let h=0;h<a;h++){let m=(d*a+h)*4,g=n.color.light;if(d>=c&&h>=c&&d<a-c&&h<a-c){let v=Math.floor((d-c)/s),w=Math.floor((h-c)/s);g=l[o[v*i+w]?1:0]}e[m++]=g.r,e[m++]=g.g,e[m++]=g.b,e[m]=g.a}}});var pde=b(fC=>{var dq=fq();function Rze(t,e,r){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=r,e.width=r,e.style.height=r+"px",e.style.width=r+"px"}function jze(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}fC.render=function(e,r,n){let i=n,o=r;typeof i>"u"&&(!r||!r.getContext)&&(i=r,r=void 0),r||(o=jze()),i=dq.getOptions(i);let s=dq.getImageWidth(e.modules.size,i),a=o.getContext("2d"),c=a.createImageData(s,s);return dq.qrToImageData(c.data,e,i),Rze(a,o,s),a.putImageData(c,0,0),o};fC.renderToDataURL=function(e,r,n){let i=n;typeof i>"u"&&(!r||!r.getContext)&&(i=r,r=void 0),i||(i={});let o=fC.render(e,r,i),s=i.type||"image/png",a=i.rendererOpts||{};return o.toDataURL(s,a.quality)}});var bde=b(gde=>{var Mze=fq();function mde(t,e){let r=t.a/255,n=e+'="'+t.hex+'"';return r<1?n+" "+e+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function hq(t,e,r){let n=t+e;return typeof r<"u"&&(n+=" "+r),n}function kze(t,e,r){let n="",i=0,o=!1,s=0;for(let a=0;a<t.length;a++){let c=Math.floor(a%e),l=Math.floor(a/e);!c&&!o&&(o=!0),t[a]?(s++,a>0&&c>0&&t[a-1]||(n+=o?hq("M",c+r,.5+l+r):hq("m",i,0),i=0,o=!1),c+1<e&&t[a+1]||(n+=hq("h",s),s=0)):i++}return n}gde.render=function(e,r,n){let i=Mze.getOptions(r),o=e.modules.size,s=e.modules.data,a=o+i.margin*2,c=i.color.light.a?"<path "+mde(i.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",l="<path "+mde(i.color.dark,"stroke")+' d="'+kze(s,o,i.margin)+'"/>',d='viewBox="0 0 '+a+" "+a+'"',m='<svg xmlns="http://www.w3.org/2000/svg" '+(i.width?'width="'+i.width+'" height="'+i.width+'" ':"")+d+' shape-rendering="crispEdges">'+c+l+`</svg>
`;return typeof n=="function"&&n(null,m),m}});var gq=b(k2=>{var Nze=vfe(),pq=dde(),yde=pde(),Dze=bde();function mq(t,e,r,n,i){let o=[].slice.call(arguments,1),s=o.length,a=typeof o[s-1]=="function";if(!a&&!Nze())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(i=r,r=e,e=n=void 0):s===3&&(e.getContext&&typeof i>"u"?(i=n,n=void 0):(i=n,n=r,r=e,e=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(r=e,e=n=void 0):s===2&&!e.getContext&&(n=r,r=e,e=void 0),new Promise(function(c,l){try{let d=pq.create(r,n);c(t(d,e,n))}catch(d){l(d)}})}try{let c=pq.create(r,n);i(null,t(c,e,n))}catch(c){i(c)}}k2.create=pq.create;k2.toCanvas=mq.bind(null,yde.render);k2.toDataURL=mq.bind(null,yde.renderToDataURL);k2.toString=mq.bind(null,function(t,e,r){return Dze.render(t,r)})});function bq(t,e,r){return t===e?!1:(t-e<0?e-t:t-e)<=r+Bze}function qze(t,e){let r=Array.prototype.slice.call(wde.default.create(t,{errorCorrectionLevel:e}).modules.data,0),n=Math.sqrt(r.length);return r.reduce((i,o,s)=>(s%n===0?i.push([o]):i[i.length-1].push(o))&&i,[])}var wde,Bze,vde,mf,_de,xde=M(()=>{ie();wde=Mt(gq(),1),Bze=.1,vde=2.5,mf=7;_de={generate(t,e,r){let n="#141414",i="transparent",s=[],a=qze(t,"Q"),c=e/a.length,l=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];l.forEach(({x:w,y:S})=>{let C=(a.length-mf)*c*w,P=(a.length-mf)*c*S,T=.45;for(let k=0;k<l.length;k+=1){let D=c*(mf-k*2);s.push(le`
            <rect
              fill=${k===2?n:i}
              width=${k===0?D-5:D}
              rx= ${k===0?(D-5)*T:D*T}
              ry= ${k===0?(D-5)*T:D*T}
              stroke=${n}
              stroke-width=${k===0?5:0}
              height=${k===0?D-5:D}
              x= ${k===0?P+c*k+5/2:P+c*k}
              y= ${k===0?C+c*k+5/2:C+c*k}
            />
          `)}});let d=Math.floor((r+25)/c),h=a.length/2-d/2,m=a.length/2+d/2-1,g=[];a.forEach((w,S)=>{w.forEach((C,P)=>{if(a[S][P]&&!(S<mf&&P<mf||S>a.length-(mf+1)&&P<mf||S<mf&&P>a.length-(mf+1))&&!(S>h&&S<m&&P>h&&P<m)){let T=S*c+c/2,k=P*c+c/2;g.push([T,k])}})});let v={};return g.forEach(([w,S])=>{v[w]?v[w]?.push(S):v[w]=[S]}),Object.entries(v).map(([w,S])=>{let C=S.filter(P=>S.every(T=>!bq(P,T,c)));return[Number(w),C]}).forEach(([w,S])=>{S.forEach(C=>{s.push(le`<circle cx=${w} cy=${C} fill=${n} r=${c/vde} />`)})}),Object.entries(v).filter(([w,S])=>S.length>1).map(([w,S])=>{let C=S.filter(P=>S.some(T=>bq(P,T,c)));return[Number(w),C]}).map(([w,S])=>{S.sort((P,T)=>P<T?-1:1);let C=[];for(let P of S){let T=C.find(k=>k.some(D=>bq(P,D,c)));T?T.push(P):C.push([P])}return[w,C.map(P=>[P[0],P[P.length-1]])]}).forEach(([w,S])=>{S.forEach(([C,P])=>{s.push(le`
              <line
                x1=${w}
                x2=${w}
                y1=${C}
                y2=${P}
                stroke=${n}
                stroke-width=${c/(vde/2)}
                stroke-linecap="round"
              />
            `)})}),s}}});var Ede,Sde=M(()=>{ie();Ede=fe`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    outline: 1px solid var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.2);
  }
`});var mb,gf,Ade=M(()=>{ie();Ne();ji();Lc();xde();gt();Sde();mb=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},gf=class extends ce{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,W`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){let e=this.theme==="light"?this.size:this.size-32;return le`
      <svg height=${e} width=${e}>
        ${_de.generate(this.uri,e,e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?W`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:W`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};gf.styles=[Oe,Ede];mb([J()],gf.prototype,"uri",void 0);mb([J({type:Number})],gf.prototype,"size",void 0);mb([J()],gf.prototype,"theme",void 0);mb([J()],gf.prototype,"imageSrc",void 0);mb([J()],gf.prototype,"alt",void 0);gf=mb([ae("wui-qr-code")],gf)});var Cde,Pde=M(()=>{ie();Cde=fe`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`});var Lze,dC,Ide=M(()=>{ie();Ne();LB();FB();gt();XA();Pde();Lze=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},dC=class extends ce{constructor(){super(...arguments),this.inputComponentRef=QA()}render(){return W`
      <wui-input-text
        ${YA(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){let r=this.inputComponentRef.value?.inputElementRef.value;r&&(r.value="",r.focus(),r.dispatchEvent(new Event("input")))}};dC.styles=[Oe,Cde];dC=Lze([ae("wui-search-bar")],dC)});var Ode,Tde=M(()=>{ie();Ode=fe`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`});var N2,ph,Rde=M(()=>{ie();Ne();eo();gt();W0();Tde();N2=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},ph=class extends ce{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return W`
      <wui-icon-box
        size="sm"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};ph.styles=[Oe,Ode];N2([J()],ph.prototype,"backgroundColor",void 0);N2([J()],ph.prototype,"iconColor",void 0);N2([J()],ph.prototype,"icon",void 0);N2([J()],ph.prototype,"message",void 0);ph=N2([ae("wui-snackbar")],ph)});var jde,Mde=M(()=>{ie();jde=fe`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }
`});var mh,Uc,kde=M(()=>{ie();Ne();gt();Mde();mh=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},Uc=class extends ce{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,r)=>{let n=r===this.activeTab;return W`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(r)}
          data-active=${n}
        >
          <wui-icon size="sm" color="inherit" name=${e.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,r){let n=this.buttons[this.activeTab],i=this.buttons[e],o=n?.querySelector("wui-text"),s=i?.querySelector("wui-text"),a=i?.getBoundingClientRect(),c=s?.getBoundingClientRect();n&&o&&!r&&e!==this.activeTab&&(o.animate([{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}),n.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),i&&a&&c&&s&&(e!==this.activeTab||r)&&(this.localTabWidth=`${Math.round(a.width+c.width)+6}px`,i.animate([{width:`${a.width+c.width}px`}],{duration:r?0:500,fill:"forwards",easing:"ease"}),s.animate([{opacity:1}],{duration:r?0:250,delay:r?0:50,fill:"forwards",easing:"ease"}))}};Uc.styles=[Oe,Nt,jde];mh([J({type:Array})],Uc.prototype,"tabs",void 0);mh([J()],Uc.prototype,"onTabChange",void 0);mh([J({type:Array})],Uc.prototype,"buttons",void 0);mh([J({type:Boolean})],Uc.prototype,"disabled",void 0);mh([je()],Uc.prototype,"activeTab",void 0);mh([je()],Uc.prototype,"localTabWidth",void 0);mh([je()],Uc.prototype,"isDense",void 0);Uc=mh([ae("wui-tabs")],Uc)});var Nde,Dde=M(()=>{ie();Nde=fe`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`});var yq,gb,Bde=M(()=>{ie();Ne();ji();eo();gt();Dde();yq=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},gb=class extends ce{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return W`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};gb.styles=[Oe,Nt,Nde];yq([J()],gb.prototype,"placement",void 0);yq([J()],gb.prototype,"message",void 0);gb=yq([ae("wui-tooltip")],gb)});var qde,Lde=M(()=>{ie();qde=fe`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`});var Fa,Ko,Fde=M(()=>{ie();Ne();gt();uf();Lde();Fa=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},Ko=class extends ce{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&zt.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&zt.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&zt.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&zt.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&zt.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&zt.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&zt.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&zt.getSpacingStyles(this.margin,3)};
    `,W`<slot></slot>`}};Ko.styles=[Oe,qde];Fa([J()],Ko.prototype,"gridTemplateRows",void 0);Fa([J()],Ko.prototype,"gridTemplateColumns",void 0);Fa([J()],Ko.prototype,"justifyItems",void 0);Fa([J()],Ko.prototype,"alignItems",void 0);Fa([J()],Ko.prototype,"justifyContent",void 0);Fa([J()],Ko.prototype,"alignContent",void 0);Fa([J()],Ko.prototype,"columnGap",void 0);Fa([J()],Ko.prototype,"rowGap",void 0);Fa([J()],Ko.prototype,"gap",void 0);Fa([J()],Ko.prototype,"padding",void 0);Fa([J()],Ko.prototype,"margin",void 0);Ko=Fa([ae("wui-grid")],Ko)});var Ude,$de=M(()=>{ie();Ude=fe`
  :host {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: var(--wui-cover);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    :host {
      align-items: flex-start;
    }

    ::slotted(wui-card) {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }
`});var Fze,hC,Hde=M(()=>{ie();Ne();gt();$de();Fze=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},hC=class extends ce{render(){return W`<slot></slot>`}};hC.styles=[Oe,Ude];hC=Fze([ae("wui-overlay")],hC)});var zde,Wde=M(()=>{ie();zde=fe`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-bg-125);
  }
`});var Vde,D2,Gde=M(()=>{ie();Ne();eo();gt();Wde();Vde=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},D2=class extends ce{constructor(){super(...arguments),this.text=""}render(){return W`${this.template()}`}template(){return this.text?W`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};D2.styles=[Oe,zde];Vde([J()],D2.prototype,"text",void 0);D2=Vde([ae("wui-separator")],D2)});var Kde={};on(Kde,{UiHelperUtil:()=>zt,WuiAccountButton:()=>Iu,WuiAllWalletsImage:()=>p2,WuiAvatar:()=>z0,WuiButton:()=>ah,WuiCard:()=>$A,WuiCardSelect:()=>lf,WuiCardSelectLoader:()=>g2,WuiChip:()=>ff,WuiConnectButton:()=>ob,WuiEmailInput:()=>v2,WuiFlex:()=>vo,WuiGrid:()=>Ko,WuiIcon:()=>F0,WuiIconBox:()=>Fc,WuiIconLink:()=>uh,WuiImage:()=>tb,WuiInputElement:()=>_2,WuiInputNumeric:()=>x2,WuiInputText:()=>Ou,WuiLink:()=>E2,WuiListItem:()=>qa,WuiListTransaction:()=>hf,WuiListWallet:()=>Xs,WuiLoadingHexagon:()=>zA,WuiLoadingSpinner:()=>rb,WuiLoadingThumbnail:()=>s2,WuiLogo:()=>A2,WuiLogoSelect:()=>cb,WuiNetworkButton:()=>ub,WuiNetworkImage:()=>ch,WuiOtp:()=>C2,WuiOverlay:()=>hC,WuiQrCode:()=>gf,WuiSearchBar:()=>dC,WuiSeparator:()=>D2,WuiShimmer:()=>U0,WuiSnackbar:()=>ph,WuiTabs:()=>Uc,WuiTag:()=>S2,WuiText:()=>H0,WuiTooltip:()=>gb,WuiTransactionVisual:()=>sb,WuiVisual:()=>l2,WuiWalletImage:()=>sh,initializeTheming:()=>FA,setColorTheme:()=>i2,setThemeVariables:()=>UA});var B2=M(()=>{rae();ji();Lc();Qce();o2();nue();OB();eo();que();Gue();MB();RB();tle();ole();dle();mle();yle();Ole();W0();jle();FB();eC();XA();$le();Wle();Yle();ife();lfe();zB();hfe();NB();bfe();Ade();Ide();Rde();kde();HB();Bde();$B();h2();f2();Fde();Hde();Gde();gt();uf()});var Zde,Jde=M(()=>{ie();Zde=fe`
  :host {
    z-index: var(--w3m-z-index);
    position: relative;
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  @media (max-width: 430px) {
    wui-overlay {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`});var Xde={};on(Xde,{W3mModal:()=>q2});var Yde,Qde,q2,vq=M(()=>{gr();B2();ie();Ne();Jde();Yde=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o},Qde="scroll-lock",q2=class extends ce{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=Pr.state.open,this.initializeTheming(),mt.prefetch(),this.unsubscribe.push(Pr.subscribeKey("open",e=>e?this.onOpen():this.onClose()))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?W`
          <wui-overlay @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-overlay>
        `:null}onOverlayClick(e){e.target===e.currentTarget&&Pr.close()}initializeTheming(){let{themeVariables:e,themeMode:r}=Xi.state,n=zt.getColorTheme(r);FA(e,n)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,Yi.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards"}).finished,this.onAddKeyboardListener()}onScrollLock(){let{body:e}=document,{innerHeight:r}=window,i=e?.scrollHeight>r?"scrollbar-gutter: stable;":"",o=document.createElement("style");o.dataset.w3m=Qde,o.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
        min-height: 100vh;
       ${i}
      }
    `,document.head.appendChild(o)}onScrollUnlock(){let e=document.head.querySelector(`style[data-w3m="${Qde}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",r=>{if(r.key==="Escape")Pr.close();else if(r.key==="Tab"){let{tagName:n}=r.target;n&&!n.includes("W3M-")&&!n.includes("WUI-")&&e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}};q2.styles=Zde;Yde([je()],q2.prototype,"open",void 0);q2=Yde([ae("w3m-modal")],q2)});var Fhe=b(PC=>{"use strict";PC.byteLength=nWe;PC.toByteArray=oWe;PC.fromByteArray=cWe;var ju=[],Ua=[],rWe=typeof Uint8Array<"u"?Uint8Array:Array,Pq="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(X0=0,qhe=Pq.length;X0<qhe;++X0)ju[X0]=Pq[X0],Ua[Pq.charCodeAt(X0)]=X0;var X0,qhe;Ua["-".charCodeAt(0)]=62;Ua["_".charCodeAt(0)]=63;function Lhe(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");r===-1&&(r=e);var n=r===e?0:4-r%4;return[r,n]}function nWe(t){var e=Lhe(t),r=e[0],n=e[1];return(r+n)*3/4-n}function iWe(t,e,r){return(e+r)*3/4-r}function oWe(t){var e,r=Lhe(t),n=r[0],i=r[1],o=new rWe(iWe(t,n,i)),s=0,a=i>0?n-4:n,c;for(c=0;c<a;c+=4)e=Ua[t.charCodeAt(c)]<<18|Ua[t.charCodeAt(c+1)]<<12|Ua[t.charCodeAt(c+2)]<<6|Ua[t.charCodeAt(c+3)],o[s++]=e>>16&255,o[s++]=e>>8&255,o[s++]=e&255;return i===2&&(e=Ua[t.charCodeAt(c)]<<2|Ua[t.charCodeAt(c+1)]>>4,o[s++]=e&255),i===1&&(e=Ua[t.charCodeAt(c)]<<10|Ua[t.charCodeAt(c+1)]<<4|Ua[t.charCodeAt(c+2)]>>2,o[s++]=e>>8&255,o[s++]=e&255),o}function sWe(t){return ju[t>>18&63]+ju[t>>12&63]+ju[t>>6&63]+ju[t&63]}function aWe(t,e,r){for(var n,i=[],o=e;o<r;o+=3)n=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(t[o+2]&255),i.push(sWe(n));return i.join("")}function cWe(t){for(var e,r=t.length,n=r%3,i=[],o=16383,s=0,a=r-n;s<a;s+=o)i.push(aWe(t,s,s+o>a?a:s+o));return n===1?(e=t[r-1],i.push(ju[e>>2]+ju[e<<4&63]+"==")):n===2&&(e=(t[r-2]<<8)+t[r-1],i.push(ju[e>>10]+ju[e>>4&63]+ju[e<<2&63]+"=")),i.join("")}});var Uhe=b(Iq=>{Iq.read=function(t,e,r,n,i){var o,s,a=i*8-n-1,c=(1<<a)-1,l=c>>1,d=-7,h=r?i-1:0,m=r?-1:1,g=t[e+h];for(h+=m,o=g&(1<<-d)-1,g>>=-d,d+=a;d>0;o=o*256+t[e+h],h+=m,d-=8);for(s=o&(1<<-d)-1,o>>=-d,d+=n;d>0;s=s*256+t[e+h],h+=m,d-=8);if(o===0)o=1-l;else{if(o===c)return s?NaN:(g?-1:1)*(1/0);s=s+Math.pow(2,n),o=o-l}return(g?-1:1)*s*Math.pow(2,o-n)};Iq.write=function(t,e,r,n,i,o){var s,a,c,l=o*8-i-1,d=(1<<l)-1,h=d>>1,m=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,g=n?0:o-1,v=n?1:-1,w=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=d):(s=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-s))<1&&(s--,c*=2),s+h>=1?e+=m/c:e+=m*Math.pow(2,1-h),e*c>=2&&(s++,c/=2),s+h>=d?(a=0,s=d):s+h>=1?(a=(e*c-1)*Math.pow(2,i),s=s+h):(a=e*Math.pow(2,h-1)*Math.pow(2,i),s=0));i>=8;t[r+g]=a&255,g+=v,a/=256,i-=8);for(s=s<<i|a,l+=i;l>0;t[r+g]=s&255,g+=v,s/=256,l-=8);t[r+g-v]|=w*128}});var Ab=b(Sb=>{"use strict";var Oq=Fhe(),xb=Uhe(),$he=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Sb.Buffer=be;Sb.SlowBuffer=pWe;Sb.INSPECT_MAX_BYTES=50;var IC=2147483647;Sb.kMaxLength=IC;be.TYPED_ARRAY_SUPPORT=uWe();!be.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function uWe(){try{let t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),t.foo()===42}catch{return!1}}Object.defineProperty(be.prototype,"parent",{enumerable:!0,get:function(){if(be.isBuffer(this))return this.buffer}});Object.defineProperty(be.prototype,"offset",{enumerable:!0,get:function(){if(be.isBuffer(this))return this.byteOffset}});function yf(t){if(t>IC)throw new RangeError('The value "'+t+'" is invalid for option "size"');let e=new Uint8Array(t);return Object.setPrototypeOf(e,be.prototype),e}function be(t,e,r){if(typeof t=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Mq(t)}return Vhe(t,e,r)}be.poolSize=8192;function Vhe(t,e,r){if(typeof t=="string")return fWe(t,e);if(ArrayBuffer.isView(t))return dWe(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(Mu(t,ArrayBuffer)||t&&Mu(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Mu(t,SharedArrayBuffer)||t&&Mu(t.buffer,SharedArrayBuffer)))return Rq(t,e,r);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let n=t.valueOf&&t.valueOf();if(n!=null&&n!==t)return be.from(n,e,r);let i=hWe(t);if(i)return i;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return be.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}be.from=function(t,e,r){return Vhe(t,e,r)};Object.setPrototypeOf(be.prototype,Uint8Array.prototype);Object.setPrototypeOf(be,Uint8Array);function Ghe(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function lWe(t,e,r){return Ghe(t),t<=0?yf(t):e!==void 0?typeof r=="string"?yf(t).fill(e,r):yf(t).fill(e):yf(t)}be.alloc=function(t,e,r){return lWe(t,e,r)};function Mq(t){return Ghe(t),yf(t<0?0:kq(t)|0)}be.allocUnsafe=function(t){return Mq(t)};be.allocUnsafeSlow=function(t){return Mq(t)};function fWe(t,e){if((typeof e!="string"||e==="")&&(e="utf8"),!be.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let r=Khe(t,e)|0,n=yf(r),i=n.write(t,e);return i!==r&&(n=n.slice(0,i)),n}function Tq(t){let e=t.length<0?0:kq(t.length)|0,r=yf(e);for(let n=0;n<e;n+=1)r[n]=t[n]&255;return r}function dWe(t){if(Mu(t,Uint8Array)){let e=new Uint8Array(t);return Rq(e.buffer,e.byteOffset,e.byteLength)}return Tq(t)}function Rq(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');let n;return e===void 0&&r===void 0?n=new Uint8Array(t):r===void 0?n=new Uint8Array(t,e):n=new Uint8Array(t,e,r),Object.setPrototypeOf(n,be.prototype),n}function hWe(t){if(be.isBuffer(t)){let e=kq(t.length)|0,r=yf(e);return r.length===0||t.copy(r,0,0,e),r}if(t.length!==void 0)return typeof t.length!="number"||Dq(t.length)?yf(0):Tq(t);if(t.type==="Buffer"&&Array.isArray(t.data))return Tq(t.data)}function kq(t){if(t>=IC)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+IC.toString(16)+" bytes");return t|0}function pWe(t){return+t!=t&&(t=0),be.alloc(+t)}be.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==be.prototype};be.compare=function(e,r){if(Mu(e,Uint8Array)&&(e=be.from(e,e.offset,e.byteLength)),Mu(r,Uint8Array)&&(r=be.from(r,r.offset,r.byteLength)),!be.isBuffer(e)||!be.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;let n=e.length,i=r.length;for(let o=0,s=Math.min(n,i);o<s;++o)if(e[o]!==r[o]){n=e[o],i=r[o];break}return n<i?-1:i<n?1:0};be.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};be.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return be.alloc(0);let n;if(r===void 0)for(r=0,n=0;n<e.length;++n)r+=e[n].length;let i=be.allocUnsafe(r),o=0;for(n=0;n<e.length;++n){let s=e[n];if(Mu(s,Uint8Array))o+s.length>i.length?(be.isBuffer(s)||(s=be.from(s)),s.copy(i,o)):Uint8Array.prototype.set.call(i,s,o);else if(be.isBuffer(s))s.copy(i,o);else throw new TypeError('"list" argument must be an Array of Buffers');o+=s.length}return i};function Khe(t,e){if(be.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||Mu(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);let r=t.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&r===0)return 0;let i=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return jq(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return r*2;case"hex":return r>>>1;case"base64":return npe(t).length;default:if(i)return n?-1:jq(t).length;e=(""+e).toLowerCase(),i=!0}}be.byteLength=Khe;function mWe(t,e,r){let n=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((r===void 0||r>this.length)&&(r=this.length),r<=0)||(r>>>=0,e>>>=0,r<=e))return"";for(t||(t="utf8");;)switch(t){case"hex":return AWe(this,e,r);case"utf8":case"utf-8":return Jhe(this,e,r);case"ascii":return EWe(this,e,r);case"latin1":case"binary":return SWe(this,e,r);case"base64":return _We(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return CWe(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}be.prototype._isBuffer=!0;function em(t,e,r){let n=t[e];t[e]=t[r],t[r]=n}be.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let r=0;r<e;r+=2)em(this,r,r+1);return this};be.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let r=0;r<e;r+=4)em(this,r,r+3),em(this,r+1,r+2);return this};be.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let r=0;r<e;r+=8)em(this,r,r+7),em(this,r+1,r+6),em(this,r+2,r+5),em(this,r+3,r+4);return this};be.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?Jhe(this,0,e):mWe.apply(this,arguments)};be.prototype.toLocaleString=be.prototype.toString;be.prototype.equals=function(e){if(!be.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:be.compare(this,e)===0};be.prototype.inspect=function(){let e="",r=Sb.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"};$he&&(be.prototype[$he]=be.prototype.inspect);be.prototype.compare=function(e,r,n,i,o){if(Mu(e,Uint8Array)&&(e=be.from(e,e.offset,e.byteLength)),!be.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),n===void 0&&(n=e?e.length:0),i===void 0&&(i=0),o===void 0&&(o=this.length),r<0||n>e.length||i<0||o>this.length)throw new RangeError("out of range index");if(i>=o&&r>=n)return 0;if(i>=o)return-1;if(r>=n)return 1;if(r>>>=0,n>>>=0,i>>>=0,o>>>=0,this===e)return 0;let s=o-i,a=n-r,c=Math.min(s,a),l=this.slice(i,o),d=e.slice(r,n);for(let h=0;h<c;++h)if(l[h]!==d[h]){s=l[h],a=d[h];break}return s<a?-1:a<s?1:0};function Zhe(t,e,r,n,i){if(t.length===0)return-1;if(typeof r=="string"?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,Dq(r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0)if(i)r=0;else return-1;if(typeof e=="string"&&(e=be.from(e,n)),be.isBuffer(e))return e.length===0?-1:Hhe(t,e,r,n,i);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):Hhe(t,[e],r,n,i);throw new TypeError("val must be string, number or Buffer")}function Hhe(t,e,r,n,i){let o=1,s=t.length,a=e.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(t.length<2||e.length<2)return-1;o=2,s/=2,a/=2,r/=2}function c(d,h){return o===1?d[h]:d.readUInt16BE(h*o)}let l;if(i){let d=-1;for(l=r;l<s;l++)if(c(t,l)===c(e,d===-1?0:l-d)){if(d===-1&&(d=l),l-d+1===a)return d*o}else d!==-1&&(l-=l-d),d=-1}else for(r+a>s&&(r=s-a),l=r;l>=0;l--){let d=!0;for(let h=0;h<a;h++)if(c(t,l+h)!==c(e,h)){d=!1;break}if(d)return l}return-1}be.prototype.includes=function(e,r,n){return this.indexOf(e,r,n)!==-1};be.prototype.indexOf=function(e,r,n){return Zhe(this,e,r,n,!0)};be.prototype.lastIndexOf=function(e,r,n){return Zhe(this,e,r,n,!1)};function gWe(t,e,r,n){r=Number(r)||0;let i=t.length-r;n?(n=Number(n),n>i&&(n=i)):n=i;let o=e.length;n>o/2&&(n=o/2);let s;for(s=0;s<n;++s){let a=parseInt(e.substr(s*2,2),16);if(Dq(a))return s;t[r+s]=a}return s}function bWe(t,e,r,n){return OC(jq(e,t.length-r),t,r,n)}function yWe(t,e,r,n){return OC(TWe(e),t,r,n)}function vWe(t,e,r,n){return OC(npe(e),t,r,n)}function wWe(t,e,r,n){return OC(RWe(e,t.length-r),t,r,n)}be.prototype.write=function(e,r,n,i){if(r===void 0)i="utf8",n=this.length,r=0;else if(n===void 0&&typeof r=="string")i=r,n=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(n)?(n=n>>>0,i===void 0&&(i="utf8")):(i=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let o=this.length-r;if((n===void 0||n>o)&&(n=o),e.length>0&&(n<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let s=!1;for(;;)switch(i){case"hex":return gWe(this,e,r,n);case"utf8":case"utf-8":return bWe(this,e,r,n);case"ascii":case"latin1":case"binary":return yWe(this,e,r,n);case"base64":return vWe(this,e,r,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return wWe(this,e,r,n);default:if(s)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),s=!0}};be.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function _We(t,e,r){return e===0&&r===t.length?Oq.fromByteArray(t):Oq.fromByteArray(t.slice(e,r))}function Jhe(t,e,r){r=Math.min(t.length,r);let n=[],i=e;for(;i<r;){let o=t[i],s=null,a=o>239?4:o>223?3:o>191?2:1;if(i+a<=r){let c,l,d,h;switch(a){case 1:o<128&&(s=o);break;case 2:c=t[i+1],(c&192)===128&&(h=(o&31)<<6|c&63,h>127&&(s=h));break;case 3:c=t[i+1],l=t[i+2],(c&192)===128&&(l&192)===128&&(h=(o&15)<<12|(c&63)<<6|l&63,h>2047&&(h<55296||h>57343)&&(s=h));break;case 4:c=t[i+1],l=t[i+2],d=t[i+3],(c&192)===128&&(l&192)===128&&(d&192)===128&&(h=(o&15)<<18|(c&63)<<12|(l&63)<<6|d&63,h>65535&&h<1114112&&(s=h))}}s===null?(s=65533,a=1):s>65535&&(s-=65536,n.push(s>>>10&1023|55296),s=56320|s&1023),n.push(s),i+=a}return xWe(n)}var zhe=4096;function xWe(t){let e=t.length;if(e<=zhe)return String.fromCharCode.apply(String,t);let r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=zhe));return r}function EWe(t,e,r){let n="";r=Math.min(t.length,r);for(let i=e;i<r;++i)n+=String.fromCharCode(t[i]&127);return n}function SWe(t,e,r){let n="";r=Math.min(t.length,r);for(let i=e;i<r;++i)n+=String.fromCharCode(t[i]);return n}function AWe(t,e,r){let n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);let i="";for(let o=e;o<r;++o)i+=jWe[t[o]];return i}function CWe(t,e,r){let n=t.slice(e,r),i="";for(let o=0;o<n.length-1;o+=2)i+=String.fromCharCode(n[o]+n[o+1]*256);return i}be.prototype.slice=function(e,r){let n=this.length;e=~~e,r=r===void 0?n:~~r,e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),r<0?(r+=n,r<0&&(r=0)):r>n&&(r=n),r<e&&(r=e);let i=this.subarray(e,r);return Object.setPrototypeOf(i,be.prototype),i};function Mi(t,e,r){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}be.prototype.readUintLE=be.prototype.readUIntLE=function(e,r,n){e=e>>>0,r=r>>>0,n||Mi(e,r,this.length);let i=this[e],o=1,s=0;for(;++s<r&&(o*=256);)i+=this[e+s]*o;return i};be.prototype.readUintBE=be.prototype.readUIntBE=function(e,r,n){e=e>>>0,r=r>>>0,n||Mi(e,r,this.length);let i=this[e+--r],o=1;for(;r>0&&(o*=256);)i+=this[e+--r]*o;return i};be.prototype.readUint8=be.prototype.readUInt8=function(e,r){return e=e>>>0,r||Mi(e,1,this.length),this[e]};be.prototype.readUint16LE=be.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||Mi(e,2,this.length),this[e]|this[e+1]<<8};be.prototype.readUint16BE=be.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||Mi(e,2,this.length),this[e]<<8|this[e+1]};be.prototype.readUint32LE=be.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||Mi(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};be.prototype.readUint32BE=be.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||Mi(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};be.prototype.readBigUInt64LE=bh(function(e){e=e>>>0,Eb(e,"offset");let r=this[e],n=this[e+7];(r===void 0||n===void 0)&&W2(e,this.length-8);let i=r+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,o=this[++e]+this[++e]*2**8+this[++e]*2**16+n*2**24;return BigInt(i)+(BigInt(o)<<BigInt(32))});be.prototype.readBigUInt64BE=bh(function(e){e=e>>>0,Eb(e,"offset");let r=this[e],n=this[e+7];(r===void 0||n===void 0)&&W2(e,this.length-8);let i=r*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],o=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n;return(BigInt(i)<<BigInt(32))+BigInt(o)});be.prototype.readIntLE=function(e,r,n){e=e>>>0,r=r>>>0,n||Mi(e,r,this.length);let i=this[e],o=1,s=0;for(;++s<r&&(o*=256);)i+=this[e+s]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*r)),i};be.prototype.readIntBE=function(e,r,n){e=e>>>0,r=r>>>0,n||Mi(e,r,this.length);let i=r,o=1,s=this[e+--i];for(;i>0&&(o*=256);)s+=this[e+--i]*o;return o*=128,s>=o&&(s-=Math.pow(2,8*r)),s};be.prototype.readInt8=function(e,r){return e=e>>>0,r||Mi(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};be.prototype.readInt16LE=function(e,r){e=e>>>0,r||Mi(e,2,this.length);let n=this[e]|this[e+1]<<8;return n&32768?n|4294901760:n};be.prototype.readInt16BE=function(e,r){e=e>>>0,r||Mi(e,2,this.length);let n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n};be.prototype.readInt32LE=function(e,r){return e=e>>>0,r||Mi(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};be.prototype.readInt32BE=function(e,r){return e=e>>>0,r||Mi(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};be.prototype.readBigInt64LE=bh(function(e){e=e>>>0,Eb(e,"offset");let r=this[e],n=this[e+7];(r===void 0||n===void 0)&&W2(e,this.length-8);let i=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(r+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});be.prototype.readBigInt64BE=bh(function(e){e=e>>>0,Eb(e,"offset");let r=this[e],n=this[e+7];(r===void 0||n===void 0)&&W2(e,this.length-8);let i=(r<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n)});be.prototype.readFloatLE=function(e,r){return e=e>>>0,r||Mi(e,4,this.length),xb.read(this,e,!0,23,4)};be.prototype.readFloatBE=function(e,r){return e=e>>>0,r||Mi(e,4,this.length),xb.read(this,e,!1,23,4)};be.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||Mi(e,8,this.length),xb.read(this,e,!0,52,8)};be.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||Mi(e,8,this.length),xb.read(this,e,!1,52,8)};function Es(t,e,r,n,i,o){if(!be.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<o)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}be.prototype.writeUintLE=be.prototype.writeUIntLE=function(e,r,n,i){if(e=+e,r=r>>>0,n=n>>>0,!i){let a=Math.pow(2,8*n)-1;Es(this,e,r,n,a,0)}let o=1,s=0;for(this[r]=e&255;++s<n&&(o*=256);)this[r+s]=e/o&255;return r+n};be.prototype.writeUintBE=be.prototype.writeUIntBE=function(e,r,n,i){if(e=+e,r=r>>>0,n=n>>>0,!i){let a=Math.pow(2,8*n)-1;Es(this,e,r,n,a,0)}let o=n-1,s=1;for(this[r+o]=e&255;--o>=0&&(s*=256);)this[r+o]=e/s&255;return r+n};be.prototype.writeUint8=be.prototype.writeUInt8=function(e,r,n){return e=+e,r=r>>>0,n||Es(this,e,r,1,255,0),this[r]=e&255,r+1};be.prototype.writeUint16LE=be.prototype.writeUInt16LE=function(e,r,n){return e=+e,r=r>>>0,n||Es(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2};be.prototype.writeUint16BE=be.prototype.writeUInt16BE=function(e,r,n){return e=+e,r=r>>>0,n||Es(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2};be.prototype.writeUint32LE=be.prototype.writeUInt32LE=function(e,r,n){return e=+e,r=r>>>0,n||Es(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4};be.prototype.writeUint32BE=be.prototype.writeUInt32BE=function(e,r,n){return e=+e,r=r>>>0,n||Es(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function Qhe(t,e,r,n,i){rpe(e,n,i,t,r,7);let o=Number(e&BigInt(4294967295));t[r++]=o,o=o>>8,t[r++]=o,o=o>>8,t[r++]=o,o=o>>8,t[r++]=o;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[r++]=s,s=s>>8,t[r++]=s,s=s>>8,t[r++]=s,s=s>>8,t[r++]=s,r}function Yhe(t,e,r,n,i){rpe(e,n,i,t,r,7);let o=Number(e&BigInt(4294967295));t[r+7]=o,o=o>>8,t[r+6]=o,o=o>>8,t[r+5]=o,o=o>>8,t[r+4]=o;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[r+3]=s,s=s>>8,t[r+2]=s,s=s>>8,t[r+1]=s,s=s>>8,t[r]=s,r+8}be.prototype.writeBigUInt64LE=bh(function(e,r=0){return Qhe(this,e,r,BigInt(0),BigInt("0xffffffffffffffff"))});be.prototype.writeBigUInt64BE=bh(function(e,r=0){return Yhe(this,e,r,BigInt(0),BigInt("0xffffffffffffffff"))});be.prototype.writeIntLE=function(e,r,n,i){if(e=+e,r=r>>>0,!i){let c=Math.pow(2,8*n-1);Es(this,e,r,n,c-1,-c)}let o=0,s=1,a=0;for(this[r]=e&255;++o<n&&(s*=256);)e<0&&a===0&&this[r+o-1]!==0&&(a=1),this[r+o]=(e/s>>0)-a&255;return r+n};be.prototype.writeIntBE=function(e,r,n,i){if(e=+e,r=r>>>0,!i){let c=Math.pow(2,8*n-1);Es(this,e,r,n,c-1,-c)}let o=n-1,s=1,a=0;for(this[r+o]=e&255;--o>=0&&(s*=256);)e<0&&a===0&&this[r+o+1]!==0&&(a=1),this[r+o]=(e/s>>0)-a&255;return r+n};be.prototype.writeInt8=function(e,r,n){return e=+e,r=r>>>0,n||Es(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1};be.prototype.writeInt16LE=function(e,r,n){return e=+e,r=r>>>0,n||Es(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2};be.prototype.writeInt16BE=function(e,r,n){return e=+e,r=r>>>0,n||Es(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2};be.prototype.writeInt32LE=function(e,r,n){return e=+e,r=r>>>0,n||Es(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4};be.prototype.writeInt32BE=function(e,r,n){return e=+e,r=r>>>0,n||Es(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};be.prototype.writeBigInt64LE=bh(function(e,r=0){return Qhe(this,e,r,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});be.prototype.writeBigInt64BE=bh(function(e,r=0){return Yhe(this,e,r,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Xhe(t,e,r,n,i,o){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function epe(t,e,r,n,i){return e=+e,r=r>>>0,i||Xhe(t,e,r,4,34028234663852886e22,-34028234663852886e22),xb.write(t,e,r,n,23,4),r+4}be.prototype.writeFloatLE=function(e,r,n){return epe(this,e,r,!0,n)};be.prototype.writeFloatBE=function(e,r,n){return epe(this,e,r,!1,n)};function tpe(t,e,r,n,i){return e=+e,r=r>>>0,i||Xhe(t,e,r,8,17976931348623157e292,-17976931348623157e292),xb.write(t,e,r,n,52,8),r+8}be.prototype.writeDoubleLE=function(e,r,n){return tpe(this,e,r,!0,n)};be.prototype.writeDoubleBE=function(e,r,n){return tpe(this,e,r,!1,n)};be.prototype.copy=function(e,r,n,i){if(!be.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),!i&&i!==0&&(i=this.length),r>=e.length&&(r=e.length),r||(r=0),i>0&&i<n&&(i=n),i===n||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-r<i-n&&(i=e.length-r+n);let o=i-n;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),r),o};be.prototype.fill=function(e,r,n,i){if(typeof e=="string"){if(typeof r=="string"?(i=r,r=0,n=this.length):typeof n=="string"&&(i=n,n=this.length),i!==void 0&&typeof i!="string")throw new TypeError("encoding must be a string");if(typeof i=="string"&&!be.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(e.length===1){let s=e.charCodeAt(0);(i==="utf8"&&s<128||i==="latin1")&&(e=s)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<n)throw new RangeError("Out of range index");if(n<=r)return this;r=r>>>0,n=n===void 0?this.length:n>>>0,e||(e=0);let o;if(typeof e=="number")for(o=r;o<n;++o)this[o]=e;else{let s=be.isBuffer(e)?e:be.from(e,i),a=s.length;if(a===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<n-r;++o)this[o+r]=s[o%a]}return this};var _b={};function Nq(t,e,r){_b[t]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(i){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:i,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}Nq("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);Nq("ERR_INVALID_ARG_TYPE",function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`},TypeError);Nq("ERR_OUT_OF_RANGE",function(t,e,r){let n=`The value of "${t}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>2**32?i=Whe(String(r)):typeof r=="bigint"&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=Whe(i)),i+="n"),n+=` It must be ${e}. Received ${i}`,n},RangeError);function Whe(t){let e="",r=t.length,n=t[0]==="-"?1:0;for(;r>=n+4;r-=3)e=`_${t.slice(r-3,r)}${e}`;return`${t.slice(0,r)}${e}`}function PWe(t,e,r){Eb(e,"offset"),(t[e]===void 0||t[e+r]===void 0)&&W2(e,t.length-(r+1))}function rpe(t,e,r,n,i,o){if(t>r||t<e){let s=typeof e=="bigint"?"n":"",a;throw o>3?e===0||e===BigInt(0)?a=`>= 0${s} and < 2${s} ** ${(o+1)*8}${s}`:a=`>= -(2${s} ** ${(o+1)*8-1}${s}) and < 2 ** ${(o+1)*8-1}${s}`:a=`>= ${e}${s} and <= ${r}${s}`,new _b.ERR_OUT_OF_RANGE("value",a,t)}PWe(n,i,o)}function Eb(t,e){if(typeof t!="number")throw new _b.ERR_INVALID_ARG_TYPE(e,"number",t)}function W2(t,e,r){throw Math.floor(t)!==t?(Eb(t,r),new _b.ERR_OUT_OF_RANGE(r||"offset","an integer",t)):e<0?new _b.ERR_BUFFER_OUT_OF_BOUNDS:new _b.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${e}`,t)}var IWe=/[^+/0-9A-Za-z-_]/g;function OWe(t){if(t=t.split("=")[0],t=t.trim().replace(IWe,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function jq(t,e){e=e||1/0;let r,n=t.length,i=null,o=[];for(let s=0;s<n;++s){if(r=t.charCodeAt(s),r>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&o.push(239,191,189);continue}else if(s+1===n){(e-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&o.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;o.push(r)}else if(r<2048){if((e-=2)<0)break;o.push(r>>6|192,r&63|128)}else if(r<65536){if((e-=3)<0)break;o.push(r>>12|224,r>>6&63|128,r&63|128)}else if(r<1114112){if((e-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,r&63|128)}else throw new Error("Invalid code point")}return o}function TWe(t){let e=[];for(let r=0;r<t.length;++r)e.push(t.charCodeAt(r)&255);return e}function RWe(t,e){let r,n,i,o=[];for(let s=0;s<t.length&&!((e-=2)<0);++s)r=t.charCodeAt(s),n=r>>8,i=r%256,o.push(i),o.push(n);return o}function npe(t){return Oq.toByteArray(OWe(t))}function OC(t,e,r,n){let i;for(i=0;i<n&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}function Mu(t,e){return t instanceof e||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===e.name}function Dq(t){return t!==t}var jWe=function(){let t="0123456789abcdef",e=new Array(256);for(let r=0;r<16;++r){let n=r*16;for(let i=0;i<16;++i)e[n+i]=t[r]+t[i]}return e}();function bh(t){return typeof BigInt>"u"?MWe:t}function MWe(){throw new Error("BigInt not supported")}});var ope=b(TC=>{"use strict";Object.defineProperty(TC,"__esModule",{value:!0});TC.walletLogo=void 0;var kWe=(t,e)=>{let r;switch(t){case"standard":return r=e,`data:image/svg+xml,%3Csvg width='${e}' height='${r}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;case"circle":return r=e,`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${e}' height='${r}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`;case"text":return r=(.1*e).toFixed(2),`data:image/svg+xml,%3Csvg width='${e}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;case"textWithLogo":return r=(.25*e).toFixed(2),`data:image/svg+xml,%3Csvg width='${e}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;case"textLight":return r=(.1*e).toFixed(2),`data:image/svg+xml,%3Csvg width='${e}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;case"textWithLogoLight":return r=(.25*e).toFixed(2),`data:image/svg+xml,%3Csvg width='${e}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;default:return r=e,`data:image/svg+xml,%3Csvg width='${e}' height='${r}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `}};TC.walletLogo=kWe});var spe=b(RC=>{"use strict";Object.defineProperty(RC,"__esModule",{value:!0});RC.LINK_API_URL=void 0;RC.LINK_API_URL="https://www.walletlink.org"});var ape=b(jC=>{"use strict";Object.defineProperty(jC,"__esModule",{value:!0});jC.ScopedLocalStorage=void 0;var Bq=class{constructor(e){this.scope=e}setItem(e,r){localStorage.setItem(this.scopedKey(e),r)}getItem(e){return localStorage.getItem(this.scopedKey(e))}removeItem(e){localStorage.removeItem(this.scopedKey(e))}clear(){let e=this.scopedKey(""),r=[];for(let n=0;n<localStorage.length;n++){let i=localStorage.key(n);typeof i=="string"&&i.startsWith(e)&&r.push(i)}r.forEach(n=>localStorage.removeItem(n))}scopedKey(e){return`${this.scope}:${e}`}};jC.ScopedLocalStorage=Bq});var Ss=b((P6r,qq)=>{"use strict";var Cb=typeof Reflect=="object"?Reflect:null,cpe=Cb&&typeof Cb.apply=="function"?Cb.apply:function(e,r,n){return Function.prototype.apply.call(e,r,n)},MC;Cb&&typeof Cb.ownKeys=="function"?MC=Cb.ownKeys:Object.getOwnPropertySymbols?MC=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:MC=function(e){return Object.getOwnPropertyNames(e)};function NWe(t){console&&console.warn&&console.warn(t)}var lpe=Number.isNaN||function(e){return e!==e};function Mr(){Mr.init.call(this)}qq.exports=Mr;qq.exports.once=LWe;Mr.EventEmitter=Mr;Mr.prototype._events=void 0;Mr.prototype._eventsCount=0;Mr.prototype._maxListeners=void 0;var upe=10;function kC(t){if(typeof t!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}Object.defineProperty(Mr,"defaultMaxListeners",{enumerable:!0,get:function(){return upe},set:function(t){if(typeof t!="number"||t<0||lpe(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");upe=t}});Mr.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};Mr.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||lpe(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function fpe(t){return t._maxListeners===void 0?Mr.defaultMaxListeners:t._maxListeners}Mr.prototype.getMaxListeners=function(){return fpe(this)};Mr.prototype.emit=function(e){for(var r=[],n=1;n<arguments.length;n++)r.push(arguments[n]);var i=e==="error",o=this._events;if(o!==void 0)i=i&&o.error===void 0;else if(!i)return!1;if(i){var s;if(r.length>0&&(s=r[0]),s instanceof Error)throw s;var a=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw a.context=s,a}var c=o[e];if(c===void 0)return!1;if(typeof c=="function")cpe(c,this,r);else for(var l=c.length,d=gpe(c,l),n=0;n<l;++n)cpe(d[n],this,r);return!0};function dpe(t,e,r,n){var i,o,s;if(kC(r),o=t._events,o===void 0?(o=t._events=Object.create(null),t._eventsCount=0):(o.newListener!==void 0&&(t.emit("newListener",e,r.listener?r.listener:r),o=t._events),s=o[e]),s===void 0)s=o[e]=r,++t._eventsCount;else if(typeof s=="function"?s=o[e]=n?[r,s]:[s,r]:n?s.unshift(r):s.push(r),i=fpe(t),i>0&&s.length>i&&!s.warned){s.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=t,a.type=e,a.count=s.length,NWe(a)}return t}Mr.prototype.addListener=function(e,r){return dpe(this,e,r,!1)};Mr.prototype.on=Mr.prototype.addListener;Mr.prototype.prependListener=function(e,r){return dpe(this,e,r,!0)};function DWe(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function hpe(t,e,r){var n={fired:!1,wrapFn:void 0,target:t,type:e,listener:r},i=DWe.bind(n);return i.listener=r,n.wrapFn=i,i}Mr.prototype.once=function(e,r){return kC(r),this.on(e,hpe(this,e,r)),this};Mr.prototype.prependOnceListener=function(e,r){return kC(r),this.prependListener(e,hpe(this,e,r)),this};Mr.prototype.removeListener=function(e,r){var n,i,o,s,a;if(kC(r),i=this._events,i===void 0)return this;if(n=i[e],n===void 0)return this;if(n===r||n.listener===r)--this._eventsCount===0?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||r));else if(typeof n!="function"){for(o=-1,s=n.length-1;s>=0;s--)if(n[s]===r||n[s].listener===r){a=n[s].listener,o=s;break}if(o<0)return this;o===0?n.shift():BWe(n,o),n.length===1&&(i[e]=n[0]),i.removeListener!==void 0&&this.emit("removeListener",e,a||r)}return this};Mr.prototype.off=Mr.prototype.removeListener;Mr.prototype.removeAllListeners=function(e){var r,n,i;if(n=this._events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.length===0){var o=Object.keys(n),s;for(i=0;i<o.length;++i)s=o[i],s!=="removeListener"&&this.removeAllListeners(s);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(r=n[e],typeof r=="function")this.removeListener(e,r);else if(r!==void 0)for(i=r.length-1;i>=0;i--)this.removeListener(e,r[i]);return this};function ppe(t,e,r){var n=t._events;if(n===void 0)return[];var i=n[e];return i===void 0?[]:typeof i=="function"?r?[i.listener||i]:[i]:r?qWe(i):gpe(i,i.length)}Mr.prototype.listeners=function(e){return ppe(this,e,!0)};Mr.prototype.rawListeners=function(e){return ppe(this,e,!1)};Mr.listenerCount=function(t,e){return typeof t.listenerCount=="function"?t.listenerCount(e):mpe.call(t,e)};Mr.prototype.listenerCount=mpe;function mpe(t){var e=this._events;if(e!==void 0){var r=e[t];if(typeof r=="function")return 1;if(r!==void 0)return r.length}return 0}Mr.prototype.eventNames=function(){return this._eventsCount>0?MC(this._events):[]};function gpe(t,e){for(var r=new Array(e),n=0;n<e;++n)r[n]=t[n];return r}function BWe(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function qWe(t){for(var e=new Array(t.length),r=0;r<e.length;++r)e[r]=t[r].listener||t[r];return e}function LWe(t,e){return new Promise(function(r,n){function i(s){t.removeListener(e,o),n(s)}function o(){typeof t.removeListener=="function"&&t.removeListener("error",i),r([].slice.call(arguments))}bpe(t,e,o,{once:!0}),e!=="error"&&FWe(t,i,{once:!0})})}function FWe(t,e,r){typeof t.on=="function"&&bpe(t,"error",e,r)}function bpe(t,e,r,n){if(typeof t.on=="function")n.once?t.once(e,r):t.on(e,r);else if(typeof t.addEventListener=="function")t.addEventListener(e,function i(o){n.once&&t.removeEventListener(e,i),r(o)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}});var Pb=b(Fq=>{"use strict";Object.defineProperty(Fq,"__esModule",{value:!0});var UWe=Ss();function ype(t,e,r){try{Reflect.apply(t,e,r)}catch(n){setTimeout(()=>{throw n})}}function $We(t){let e=t.length,r=new Array(e);for(let n=0;n<e;n+=1)r[n]=t[n];return r}var Lq=class extends UWe.EventEmitter{emit(e,...r){let n=e==="error",i=this._events;if(i!==void 0)n=n&&i.error===void 0;else if(!n)return!1;if(n){let s;if(r.length>0&&([s]=r),s instanceof Error)throw s;let a=new Error(`Unhandled error.${s?` (${s.message})`:""}`);throw a.context=s,a}let o=i[e];if(o===void 0)return!1;if(typeof o=="function")ype(o,this,r);else{let s=o.length,a=$We(o);for(let c=0;c<s;c+=1)ype(a[c],this,r)}return!0}};Fq.default=Lq});var vpe=b(()=>{});var V2=b((wpe,Uq)=>{(function(t,e){"use strict";function r(j,y){if(!j)throw new Error(y||"Assertion failed")}function n(j,y){j.super_=y;var x=function(){};x.prototype=y.prototype,j.prototype=new x,j.prototype.constructor=j}function i(j,y,x){if(i.isBN(j))return j;this.negative=0,this.words=null,this.length=0,this.red=null,j!==null&&((y==="le"||y==="be")&&(x=y,y=10),this._init(j||0,y||10,x||"be"))}typeof t=="object"?t.exports=i:e.BN=i,i.BN=i,i.wordSize=26;var o;try{typeof window<"u"&&typeof window.Buffer<"u"?o=window.Buffer:o=vpe().Buffer}catch{}i.isBN=function(y){return y instanceof i?!0:y!==null&&typeof y=="object"&&y.constructor.wordSize===i.wordSize&&Array.isArray(y.words)},i.max=function(y,x){return y.cmp(x)>0?y:x},i.min=function(y,x){return y.cmp(x)<0?y:x},i.prototype._init=function(y,x,I){if(typeof y=="number")return this._initNumber(y,x,I);if(typeof y=="object")return this._initArray(y,x,I);x==="hex"&&(x=16),r(x===(x|0)&&x>=2&&x<=36),y=y.toString().replace(/\s+/g,"");var O=0;y[0]==="-"&&(O++,this.negative=1),O<y.length&&(x===16?this._parseHex(y,O,I):(this._parseBase(y,x,O),I==="le"&&this._initArray(this.toArray(),x,I)))},i.prototype._initNumber=function(y,x,I){y<0&&(this.negative=1,y=-y),y<67108864?(this.words=[y&67108863],this.length=1):y<4503599627370496?(this.words=[y&67108863,y/67108864&67108863],this.length=2):(r(y<9007199254740992),this.words=[y&67108863,y/67108864&67108863,1],this.length=3),I==="le"&&this._initArray(this.toArray(),x,I)},i.prototype._initArray=function(y,x,I){if(r(typeof y.length=="number"),y.length<=0)return this.words=[0],this.length=1,this;this.length=Math.ceil(y.length/3),this.words=new Array(this.length);for(var O=0;O<this.length;O++)this.words[O]=0;var N,G,K=0;if(I==="be")for(O=y.length-1,N=0;O>=0;O-=3)G=y[O]|y[O-1]<<8|y[O-2]<<16,this.words[N]|=G<<K&67108863,this.words[N+1]=G>>>26-K&67108863,K+=24,K>=26&&(K-=26,N++);else if(I==="le")for(O=0,N=0;O<y.length;O+=3)G=y[O]|y[O+1]<<8|y[O+2]<<16,this.words[N]|=G<<K&67108863,this.words[N+1]=G>>>26-K&67108863,K+=24,K>=26&&(K-=26,N++);return this._strip()};function s(j,y){var x=j.charCodeAt(y);if(x>=48&&x<=57)return x-48;if(x>=65&&x<=70)return x-55;if(x>=97&&x<=102)return x-87;r(!1,"Invalid character in "+j)}function a(j,y,x){var I=s(j,x);return x-1>=y&&(I|=s(j,x-1)<<4),I}i.prototype._parseHex=function(y,x,I){this.length=Math.ceil((y.length-x)/6),this.words=new Array(this.length);for(var O=0;O<this.length;O++)this.words[O]=0;var N=0,G=0,K;if(I==="be")for(O=y.length-1;O>=x;O-=2)K=a(y,x,O)<<N,this.words[G]|=K&67108863,N>=18?(N-=18,G+=1,this.words[G]|=K>>>26):N+=8;else{var B=y.length-x;for(O=B%2===0?x+1:x;O<y.length;O+=2)K=a(y,x,O)<<N,this.words[G]|=K&67108863,N>=18?(N-=18,G+=1,this.words[G]|=K>>>26):N+=8}this._strip()};function c(j,y,x,I){for(var O=0,N=0,G=Math.min(j.length,x),K=y;K<G;K++){var B=j.charCodeAt(K)-48;O*=I,B>=49?N=B-49+10:B>=17?N=B-17+10:N=B,r(B>=0&&N<I,"Invalid character"),O+=N}return O}i.prototype._parseBase=function(y,x,I){this.words=[0],this.length=1;for(var O=0,N=1;N<=67108863;N*=x)O++;O--,N=N/x|0;for(var G=y.length-I,K=G%O,B=Math.min(G,G-K)+I,A=0,U=I;U<B;U+=O)A=c(y,U,U+O,x),this.imuln(N),this.words[0]+A<67108864?this.words[0]+=A:this._iaddn(A);if(K!==0){var me=1;for(A=c(y,U,y.length,x),U=0;U<K;U++)me*=x;this.imuln(me),this.words[0]+A<67108864?this.words[0]+=A:this._iaddn(A)}this._strip()},i.prototype.copy=function(y){y.words=new Array(this.length);for(var x=0;x<this.length;x++)y.words[x]=this.words[x];y.length=this.length,y.negative=this.negative,y.red=this.red};function l(j,y){j.words=y.words,j.length=y.length,j.negative=y.negative,j.red=y.red}if(i.prototype._move=function(y){l(y,this)},i.prototype.clone=function(){var y=new i(null);return this.copy(y),y},i.prototype._expand=function(y){for(;this.length<y;)this.words[this.length++]=0;return this},i.prototype._strip=function(){for(;this.length>1&&this.words[this.length-1]===0;)this.length--;return this._normSign()},i.prototype._normSign=function(){return this.length===1&&this.words[0]===0&&(this.negative=0),this},typeof Symbol<"u"&&typeof Symbol.for=="function")try{i.prototype[Symbol.for("nodejs.util.inspect.custom")]=d}catch{i.prototype.inspect=d}else i.prototype.inspect=d;function d(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"}var h=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],m=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],g=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176];i.prototype.toString=function(y,x){y=y||10,x=x|0||1;var I;if(y===16||y==="hex"){I="";for(var O=0,N=0,G=0;G<this.length;G++){var K=this.words[G],B=((K<<O|N)&16777215).toString(16);N=K>>>24-O&16777215,O+=2,O>=26&&(O-=26,G--),N!==0||G!==this.length-1?I=h[6-B.length]+B+I:I=B+I}for(N!==0&&(I=N.toString(16)+I);I.length%x!==0;)I="0"+I;return this.negative!==0&&(I="-"+I),I}if(y===(y|0)&&y>=2&&y<=36){var A=m[y],U=g[y];I="";var me=this.clone();for(me.negative=0;!me.isZero();){var ge=me.modrn(U).toString(y);me=me.idivn(U),me.isZero()?I=ge+I:I=h[A-ge.length]+ge+I}for(this.isZero()&&(I="0"+I);I.length%x!==0;)I="0"+I;return this.negative!==0&&(I="-"+I),I}r(!1,"Base should be between 2 and 36")},i.prototype.toNumber=function(){var y=this.words[0];return this.length===2?y+=this.words[1]*67108864:this.length===3&&this.words[2]===1?y+=4503599627370496+this.words[1]*67108864:this.length>2&&r(!1,"Number can only safely store up to 53 bits"),this.negative!==0?-y:y},i.prototype.toJSON=function(){return this.toString(16,2)},o&&(i.prototype.toBuffer=function(y,x){return this.toArrayLike(o,y,x)}),i.prototype.toArray=function(y,x){return this.toArrayLike(Array,y,x)};var v=function(y,x){return y.allocUnsafe?y.allocUnsafe(x):new y(x)};i.prototype.toArrayLike=function(y,x,I){this._strip();var O=this.byteLength(),N=I||Math.max(1,O);r(O<=N,"byte array longer than desired length"),r(N>0,"Requested array length <= 0");var G=v(y,N),K=x==="le"?"LE":"BE";return this["_toArrayLike"+K](G,O),G},i.prototype._toArrayLikeLE=function(y,x){for(var I=0,O=0,N=0,G=0;N<this.length;N++){var K=this.words[N]<<G|O;y[I++]=K&255,I<y.length&&(y[I++]=K>>8&255),I<y.length&&(y[I++]=K>>16&255),G===6?(I<y.length&&(y[I++]=K>>24&255),O=0,G=0):(O=K>>>24,G+=2)}if(I<y.length)for(y[I++]=O;I<y.length;)y[I++]=0},i.prototype._toArrayLikeBE=function(y,x){for(var I=y.length-1,O=0,N=0,G=0;N<this.length;N++){var K=this.words[N]<<G|O;y[I--]=K&255,I>=0&&(y[I--]=K>>8&255),I>=0&&(y[I--]=K>>16&255),G===6?(I>=0&&(y[I--]=K>>24&255),O=0,G=0):(O=K>>>24,G+=2)}if(I>=0)for(y[I--]=O;I>=0;)y[I--]=0},Math.clz32?i.prototype._countBits=function(y){return 32-Math.clz32(y)}:i.prototype._countBits=function(y){var x=y,I=0;return x>=4096&&(I+=13,x>>>=13),x>=64&&(I+=7,x>>>=7),x>=8&&(I+=4,x>>>=4),x>=2&&(I+=2,x>>>=2),I+x},i.prototype._zeroBits=function(y){if(y===0)return 26;var x=y,I=0;return x&8191||(I+=13,x>>>=13),x&127||(I+=7,x>>>=7),x&15||(I+=4,x>>>=4),x&3||(I+=2,x>>>=2),x&1||I++,I},i.prototype.bitLength=function(){var y=this.words[this.length-1],x=this._countBits(y);return(this.length-1)*26+x};function w(j){for(var y=new Array(j.bitLength()),x=0;x<y.length;x++){var I=x/26|0,O=x%26;y[x]=j.words[I]>>>O&1}return y}i.prototype.zeroBits=function(){if(this.isZero())return 0;for(var y=0,x=0;x<this.length;x++){var I=this._zeroBits(this.words[x]);if(y+=I,I!==26)break}return y},i.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},i.prototype.toTwos=function(y){return this.negative!==0?this.abs().inotn(y).iaddn(1):this.clone()},i.prototype.fromTwos=function(y){return this.testn(y-1)?this.notn(y).iaddn(1).ineg():this.clone()},i.prototype.isNeg=function(){return this.negative!==0},i.prototype.neg=function(){return this.clone().ineg()},i.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},i.prototype.iuor=function(y){for(;this.length<y.length;)this.words[this.length++]=0;for(var x=0;x<y.length;x++)this.words[x]=this.words[x]|y.words[x];return this._strip()},i.prototype.ior=function(y){return r((this.negative|y.negative)===0),this.iuor(y)},i.prototype.or=function(y){return this.length>y.length?this.clone().ior(y):y.clone().ior(this)},i.prototype.uor=function(y){return this.length>y.length?this.clone().iuor(y):y.clone().iuor(this)},i.prototype.iuand=function(y){var x;this.length>y.length?x=y:x=this;for(var I=0;I<x.length;I++)this.words[I]=this.words[I]&y.words[I];return this.length=x.length,this._strip()},i.prototype.iand=function(y){return r((this.negative|y.negative)===0),this.iuand(y)},i.prototype.and=function(y){return this.length>y.length?this.clone().iand(y):y.clone().iand(this)},i.prototype.uand=function(y){return this.length>y.length?this.clone().iuand(y):y.clone().iuand(this)},i.prototype.iuxor=function(y){var x,I;this.length>y.length?(x=this,I=y):(x=y,I=this);for(var O=0;O<I.length;O++)this.words[O]=x.words[O]^I.words[O];if(this!==x)for(;O<x.length;O++)this.words[O]=x.words[O];return this.length=x.length,this._strip()},i.prototype.ixor=function(y){return r((this.negative|y.negative)===0),this.iuxor(y)},i.prototype.xor=function(y){return this.length>y.length?this.clone().ixor(y):y.clone().ixor(this)},i.prototype.uxor=function(y){return this.length>y.length?this.clone().iuxor(y):y.clone().iuxor(this)},i.prototype.inotn=function(y){r(typeof y=="number"&&y>=0);var x=Math.ceil(y/26)|0,I=y%26;this._expand(x),I>0&&x--;for(var O=0;O<x;O++)this.words[O]=~this.words[O]&67108863;return I>0&&(this.words[O]=~this.words[O]&67108863>>26-I),this._strip()},i.prototype.notn=function(y){return this.clone().inotn(y)},i.prototype.setn=function(y,x){r(typeof y=="number"&&y>=0);var I=y/26|0,O=y%26;return this._expand(I+1),x?this.words[I]=this.words[I]|1<<O:this.words[I]=this.words[I]&~(1<<O),this._strip()},i.prototype.iadd=function(y){var x;if(this.negative!==0&&y.negative===0)return this.negative=0,x=this.isub(y),this.negative^=1,this._normSign();if(this.negative===0&&y.negative!==0)return y.negative=0,x=this.isub(y),y.negative=1,x._normSign();var I,O;this.length>y.length?(I=this,O=y):(I=y,O=this);for(var N=0,G=0;G<O.length;G++)x=(I.words[G]|0)+(O.words[G]|0)+N,this.words[G]=x&67108863,N=x>>>26;for(;N!==0&&G<I.length;G++)x=(I.words[G]|0)+N,this.words[G]=x&67108863,N=x>>>26;if(this.length=I.length,N!==0)this.words[this.length]=N,this.length++;else if(I!==this)for(;G<I.length;G++)this.words[G]=I.words[G];return this},i.prototype.add=function(y){var x;return y.negative!==0&&this.negative===0?(y.negative=0,x=this.sub(y),y.negative^=1,x):y.negative===0&&this.negative!==0?(this.negative=0,x=y.sub(this),this.negative=1,x):this.length>y.length?this.clone().iadd(y):y.clone().iadd(this)},i.prototype.isub=function(y){if(y.negative!==0){y.negative=0;var x=this.iadd(y);return y.negative=1,x._normSign()}else if(this.negative!==0)return this.negative=0,this.iadd(y),this.negative=1,this._normSign();var I=this.cmp(y);if(I===0)return this.negative=0,this.length=1,this.words[0]=0,this;var O,N;I>0?(O=this,N=y):(O=y,N=this);for(var G=0,K=0;K<N.length;K++)x=(O.words[K]|0)-(N.words[K]|0)+G,G=x>>26,this.words[K]=x&67108863;for(;G!==0&&K<O.length;K++)x=(O.words[K]|0)+G,G=x>>26,this.words[K]=x&67108863;if(G===0&&K<O.length&&O!==this)for(;K<O.length;K++)this.words[K]=O.words[K];return this.length=Math.max(this.length,K),O!==this&&(this.negative=1),this._strip()},i.prototype.sub=function(y){return this.clone().isub(y)};function S(j,y,x){x.negative=y.negative^j.negative;var I=j.length+y.length|0;x.length=I,I=I-1|0;var O=j.words[0]|0,N=y.words[0]|0,G=O*N,K=G&67108863,B=G/67108864|0;x.words[0]=K;for(var A=1;A<I;A++){for(var U=B>>>26,me=B&67108863,ge=Math.min(A,y.length-1),pe=Math.max(0,A-j.length+1);pe<=ge;pe++){var we=A-pe|0;O=j.words[we]|0,N=y.words[pe]|0,G=O*N+me,U+=G/67108864|0,me=G&67108863}x.words[A]=me|0,B=U|0}return B!==0?x.words[A]=B|0:x.length--,x._strip()}var C=function(y,x,I){var O=y.words,N=x.words,G=I.words,K=0,B,A,U,me=O[0]|0,ge=me&8191,pe=me>>>13,we=O[1]|0,Ie=we&8191,Te=we>>>13,Ze=O[2]|0,ke=Ze&8191,Re=Ze>>>13,et=O[3]|0,Me=et&8191,He=et>>>13,ba=O[4]|0,Vt=ba&8191,Sr=ba>>>13,El=O[5]|0,hr=El&8191,Ft=El>>>13,Hs=O[6]|0,br=Hs&8191,rr=Hs>>>13,X=O[7]|0,te=X&8191,oe=X>>>13,de=O[8]|0,Ae=de&8191,qe=de>>>13,Rt=O[9]|0,st=Rt&8191,at=Rt>>>13,nr=N[0]|0,At=nr&8191,yr=nr>>>13,ya=N[1]|0,pr=ya&8191,Vr=ya>>>13,dd=N[2]|0,Br=dd&8191,qr=dd>>>13,hd=N[3]|0,Gr=hd&8191,Kr=hd>>>13,pd=N[4]|0,Lr=pd&8191,Zr=pd>>>13,md=N[5]|0,Jr=md&8191,Ir=md>>>13,gd=N[6]|0,Or=gd&8191,Qr=gd>>>13,bd=N[7]|0,Yr=bd&8191,Xr=bd>>>13,yd=N[8]|0,en=yd&8191,tn=yd>>>13,vd=N[9]|0,Fr=vd&8191,rn=vd>>>13;I.negative=y.negative^x.negative,I.length=19,B=Math.imul(ge,At),A=Math.imul(ge,yr),A=A+Math.imul(pe,At)|0,U=Math.imul(pe,yr);var Sl=(K+B|0)+((A&8191)<<13)|0;K=(U+(A>>>13)|0)+(Sl>>>26)|0,Sl&=67108863,B=Math.imul(Ie,At),A=Math.imul(Ie,yr),A=A+Math.imul(Te,At)|0,U=Math.imul(Te,yr),B=B+Math.imul(ge,pr)|0,A=A+Math.imul(ge,Vr)|0,A=A+Math.imul(pe,pr)|0,U=U+Math.imul(pe,Vr)|0;var Al=(K+B|0)+((A&8191)<<13)|0;K=(U+(A>>>13)|0)+(Al>>>26)|0,Al&=67108863,B=Math.imul(ke,At),A=Math.imul(ke,yr),A=A+Math.imul(Re,At)|0,U=Math.imul(Re,yr),B=B+Math.imul(Ie,pr)|0,A=A+Math.imul(Ie,Vr)|0,A=A+Math.imul(Te,pr)|0,U=U+Math.imul(Te,Vr)|0,B=B+Math.imul(ge,Br)|0,A=A+Math.imul(ge,qr)|0,A=A+Math.imul(pe,Br)|0,U=U+Math.imul(pe,qr)|0;var Cl=(K+B|0)+((A&8191)<<13)|0;K=(U+(A>>>13)|0)+(Cl>>>26)|0,Cl&=67108863,B=Math.imul(Me,At),A=Math.imul(Me,yr),A=A+Math.imul(He,At)|0,U=Math.imul(He,yr),B=B+Math.imul(ke,pr)|0,A=A+Math.imul(ke,Vr)|0,A=A+Math.imul(Re,pr)|0,U=U+Math.imul(Re,Vr)|0,B=B+Math.imul(Ie,Br)|0,A=A+Math.imul(Ie,qr)|0,A=A+Math.imul(Te,Br)|0,U=U+Math.imul(Te,qr)|0,B=B+Math.imul(ge,Gr)|0,A=A+Math.imul(ge,Kr)|0,A=A+Math.imul(pe,Gr)|0,U=U+Math.imul(pe,Kr)|0;var Pl=(K+B|0)+((A&8191)<<13)|0;K=(U+(A>>>13)|0)+(Pl>>>26)|0,Pl&=67108863,B=Math.imul(Vt,At),A=Math.imul(Vt,yr),A=A+Math.imul(Sr,At)|0,U=Math.imul(Sr,yr),B=B+Math.imul(Me,pr)|0,A=A+Math.imul(Me,Vr)|0,A=A+Math.imul(He,pr)|0,U=U+Math.imul(He,Vr)|0,B=B+Math.imul(ke,Br)|0,A=A+Math.imul(ke,qr)|0,A=A+Math.imul(Re,Br)|0,U=U+Math.imul(Re,qr)|0,B=B+Math.imul(Ie,Gr)|0,A=A+Math.imul(Ie,Kr)|0,A=A+Math.imul(Te,Gr)|0,U=U+Math.imul(Te,Kr)|0,B=B+Math.imul(ge,Lr)|0,A=A+Math.imul(ge,Zr)|0,A=A+Math.imul(pe,Lr)|0,U=U+Math.imul(pe,Zr)|0;var Il=(K+B|0)+((A&8191)<<13)|0;K=(U+(A>>>13)|0)+(Il>>>26)|0,Il&=67108863,B=Math.imul(hr,At),A=Math.imul(hr,yr),A=A+Math.imul(Ft,At)|0,U=Math.imul(Ft,yr),B=B+Math.imul(Vt,pr)|0,A=A+Math.imul(Vt,Vr)|0,A=A+Math.imul(Sr,pr)|0,U=U+Math.imul(Sr,Vr)|0,B=B+Math.imul(Me,Br)|0,A=A+Math.imul(Me,qr)|0,A=A+Math.imul(He,Br)|0,U=U+Math.imul(He,qr)|0,B=B+Math.imul(ke,Gr)|0,A=A+Math.imul(ke,Kr)|0,A=A+Math.imul(Re,Gr)|0,U=U+Math.imul(Re,Kr)|0,B=B+Math.imul(Ie,Lr)|0,A=A+Math.imul(Ie,Zr)|0,A=A+Math.imul(Te,Lr)|0,U=U+Math.imul(Te,Zr)|0,B=B+Math.imul(ge,Jr)|0,A=A+Math.imul(ge,Ir)|0,A=A+Math.imul(pe,Jr)|0,U=U+Math.imul(pe,Ir)|0;var va=(K+B|0)+((A&8191)<<13)|0;K=(U+(A>>>13)|0)+(va>>>26)|0,va&=67108863,B=Math.imul(br,At),A=Math.imul(br,yr),A=A+Math.imul(rr,At)|0,U=Math.imul(rr,yr),B=B+Math.imul(hr,pr)|0,A=A+Math.imul(hr,Vr)|0,A=A+Math.imul(Ft,pr)|0,U=U+Math.imul(Ft,Vr)|0,B=B+Math.imul(Vt,Br)|0,A=A+Math.imul(Vt,qr)|0,A=A+Math.imul(Sr,Br)|0,U=U+Math.imul(Sr,qr)|0,B=B+Math.imul(Me,Gr)|0,A=A+Math.imul(Me,Kr)|0,A=A+Math.imul(He,Gr)|0,U=U+Math.imul(He,Kr)|0,B=B+Math.imul(ke,Lr)|0,A=A+Math.imul(ke,Zr)|0,A=A+Math.imul(Re,Lr)|0,U=U+Math.imul(Re,Zr)|0,B=B+Math.imul(Ie,Jr)|0,A=A+Math.imul(Ie,Ir)|0,A=A+Math.imul(Te,Jr)|0,U=U+Math.imul(Te,Ir)|0,B=B+Math.imul(ge,Or)|0,A=A+Math.imul(ge,Qr)|0,A=A+Math.imul(pe,Or)|0,U=U+Math.imul(pe,Qr)|0;var Ol=(K+B|0)+((A&8191)<<13)|0;K=(U+(A>>>13)|0)+(Ol>>>26)|0,Ol&=67108863,B=Math.imul(te,At),A=Math.imul(te,yr),A=A+Math.imul(oe,At)|0,U=Math.imul(oe,yr),B=B+Math.imul(br,pr)|0,A=A+Math.imul(br,Vr)|0,A=A+Math.imul(rr,pr)|0,U=U+Math.imul(rr,Vr)|0,B=B+Math.imul(hr,Br)|0,A=A+Math.imul(hr,qr)|0,A=A+Math.imul(Ft,Br)|0,U=U+Math.imul(Ft,qr)|0,B=B+Math.imul(Vt,Gr)|0,A=A+Math.imul(Vt,Kr)|0,A=A+Math.imul(Sr,Gr)|0,U=U+Math.imul(Sr,Kr)|0,B=B+Math.imul(Me,Lr)|0,A=A+Math.imul(Me,Zr)|0,A=A+Math.imul(He,Lr)|0,U=U+Math.imul(He,Zr)|0,B=B+Math.imul(ke,Jr)|0,A=A+Math.imul(ke,Ir)|0,A=A+Math.imul(Re,Jr)|0,U=U+Math.imul(Re,Ir)|0,B=B+Math.imul(Ie,Or)|0,A=A+Math.imul(Ie,Qr)|0,A=A+Math.imul(Te,Or)|0,U=U+Math.imul(Te,Qr)|0,B=B+Math.imul(ge,Yr)|0,A=A+Math.imul(ge,Xr)|0,A=A+Math.imul(pe,Yr)|0,U=U+Math.imul(pe,Xr)|0;var wa=(K+B|0)+((A&8191)<<13)|0;K=(U+(A>>>13)|0)+(wa>>>26)|0,wa&=67108863,B=Math.imul(Ae,At),A=Math.imul(Ae,yr),A=A+Math.imul(qe,At)|0,U=Math.imul(qe,yr),B=B+Math.imul(te,pr)|0,A=A+Math.imul(te,Vr)|0,A=A+Math.imul(oe,pr)|0,U=U+Math.imul(oe,Vr)|0,B=B+Math.imul(br,Br)|0,A=A+Math.imul(br,qr)|0,A=A+Math.imul(rr,Br)|0,U=U+Math.imul(rr,qr)|0,B=B+Math.imul(hr,Gr)|0,A=A+Math.imul(hr,Kr)|0,A=A+Math.imul(Ft,Gr)|0,U=U+Math.imul(Ft,Kr)|0,B=B+Math.imul(Vt,Lr)|0,A=A+Math.imul(Vt,Zr)|0,A=A+Math.imul(Sr,Lr)|0,U=U+Math.imul(Sr,Zr)|0,B=B+Math.imul(Me,Jr)|0,A=A+Math.imul(Me,Ir)|0,A=A+Math.imul(He,Jr)|0,U=U+Math.imul(He,Ir)|0,B=B+Math.imul(ke,Or)|0,A=A+Math.imul(ke,Qr)|0,A=A+Math.imul(Re,Or)|0,U=U+Math.imul(Re,Qr)|0,B=B+Math.imul(Ie,Yr)|0,A=A+Math.imul(Ie,Xr)|0,A=A+Math.imul(Te,Yr)|0,U=U+Math.imul(Te,Xr)|0,B=B+Math.imul(ge,en)|0,A=A+Math.imul(ge,tn)|0,A=A+Math.imul(pe,en)|0,U=U+Math.imul(pe,tn)|0;var Tl=(K+B|0)+((A&8191)<<13)|0;K=(U+(A>>>13)|0)+(Tl>>>26)|0,Tl&=67108863,B=Math.imul(st,At),A=Math.imul(st,yr),A=A+Math.imul(at,At)|0,U=Math.imul(at,yr),B=B+Math.imul(Ae,pr)|0,A=A+Math.imul(Ae,Vr)|0,A=A+Math.imul(qe,pr)|0,U=U+Math.imul(qe,Vr)|0,B=B+Math.imul(te,Br)|0,A=A+Math.imul(te,qr)|0,A=A+Math.imul(oe,Br)|0,U=U+Math.imul(oe,qr)|0,B=B+Math.imul(br,Gr)|0,A=A+Math.imul(br,Kr)|0,A=A+Math.imul(rr,Gr)|0,U=U+Math.imul(rr,Kr)|0,B=B+Math.imul(hr,Lr)|0,A=A+Math.imul(hr,Zr)|0,A=A+Math.imul(Ft,Lr)|0,U=U+Math.imul(Ft,Zr)|0,B=B+Math.imul(Vt,Jr)|0,A=A+Math.imul(Vt,Ir)|0,A=A+Math.imul(Sr,Jr)|0,U=U+Math.imul(Sr,Ir)|0,B=B+Math.imul(Me,Or)|0,A=A+Math.imul(Me,Qr)|0,A=A+Math.imul(He,Or)|0,U=U+Math.imul(He,Qr)|0,B=B+Math.imul(ke,Yr)|0,A=A+Math.imul(ke,Xr)|0,A=A+Math.imul(Re,Yr)|0,U=U+Math.imul(Re,Xr)|0,B=B+Math.imul(Ie,en)|0,A=A+Math.imul(Ie,tn)|0,A=A+Math.imul(Te,en)|0,U=U+Math.imul(Te,tn)|0,B=B+Math.imul(ge,Fr)|0,A=A+Math.imul(ge,rn)|0,A=A+Math.imul(pe,Fr)|0,U=U+Math.imul(pe,rn)|0;var Rl=(K+B|0)+((A&8191)<<13)|0;K=(U+(A>>>13)|0)+(Rl>>>26)|0,Rl&=67108863,B=Math.imul(st,pr),A=Math.imul(st,Vr),A=A+Math.imul(at,pr)|0,U=Math.imul(at,Vr),B=B+Math.imul(Ae,Br)|0,A=A+Math.imul(Ae,qr)|0,A=A+Math.imul(qe,Br)|0,U=U+Math.imul(qe,qr)|0,B=B+Math.imul(te,Gr)|0,A=A+Math.imul(te,Kr)|0,A=A+Math.imul(oe,Gr)|0,U=U+Math.imul(oe,Kr)|0,B=B+Math.imul(br,Lr)|0,A=A+Math.imul(br,Zr)|0,A=A+Math.imul(rr,Lr)|0,U=U+Math.imul(rr,Zr)|0,B=B+Math.imul(hr,Jr)|0,A=A+Math.imul(hr,Ir)|0,A=A+Math.imul(Ft,Jr)|0,U=U+Math.imul(Ft,Ir)|0,B=B+Math.imul(Vt,Or)|0,A=A+Math.imul(Vt,Qr)|0,A=A+Math.imul(Sr,Or)|0,U=U+Math.imul(Sr,Qr)|0,B=B+Math.imul(Me,Yr)|0,A=A+Math.imul(Me,Xr)|0,A=A+Math.imul(He,Yr)|0,U=U+Math.imul(He,Xr)|0,B=B+Math.imul(ke,en)|0,A=A+Math.imul(ke,tn)|0,A=A+Math.imul(Re,en)|0,U=U+Math.imul(Re,tn)|0,B=B+Math.imul(Ie,Fr)|0,A=A+Math.imul(Ie,rn)|0,A=A+Math.imul(Te,Fr)|0,U=U+Math.imul(Te,rn)|0;var jl=(K+B|0)+((A&8191)<<13)|0;K=(U+(A>>>13)|0)+(jl>>>26)|0,jl&=67108863,B=Math.imul(st,Br),A=Math.imul(st,qr),A=A+Math.imul(at,Br)|0,U=Math.imul(at,qr),B=B+Math.imul(Ae,Gr)|0,A=A+Math.imul(Ae,Kr)|0,A=A+Math.imul(qe,Gr)|0,U=U+Math.imul(qe,Kr)|0,B=B+Math.imul(te,Lr)|0,A=A+Math.imul(te,Zr)|0,A=A+Math.imul(oe,Lr)|0,U=U+Math.imul(oe,Zr)|0,B=B+Math.imul(br,Jr)|0,A=A+Math.imul(br,Ir)|0,A=A+Math.imul(rr,Jr)|0,U=U+Math.imul(rr,Ir)|0,B=B+Math.imul(hr,Or)|0,A=A+Math.imul(hr,Qr)|0,A=A+Math.imul(Ft,Or)|0,U=U+Math.imul(Ft,Qr)|0,B=B+Math.imul(Vt,Yr)|0,A=A+Math.imul(Vt,Xr)|0,A=A+Math.imul(Sr,Yr)|0,U=U+Math.imul(Sr,Xr)|0,B=B+Math.imul(Me,en)|0,A=A+Math.imul(Me,tn)|0,A=A+Math.imul(He,en)|0,U=U+Math.imul(He,tn)|0,B=B+Math.imul(ke,Fr)|0,A=A+Math.imul(ke,rn)|0,A=A+Math.imul(Re,Fr)|0,U=U+Math.imul(Re,rn)|0;var au=(K+B|0)+((A&8191)<<13)|0;K=(U+(A>>>13)|0)+(au>>>26)|0,au&=67108863,B=Math.imul(st,Gr),A=Math.imul(st,Kr),A=A+Math.imul(at,Gr)|0,U=Math.imul(at,Kr),B=B+Math.imul(Ae,Lr)|0,A=A+Math.imul(Ae,Zr)|0,A=A+Math.imul(qe,Lr)|0,U=U+Math.imul(qe,Zr)|0,B=B+Math.imul(te,Jr)|0,A=A+Math.imul(te,Ir)|0,A=A+Math.imul(oe,Jr)|0,U=U+Math.imul(oe,Ir)|0,B=B+Math.imul(br,Or)|0,A=A+Math.imul(br,Qr)|0,A=A+Math.imul(rr,Or)|0,U=U+Math.imul(rr,Qr)|0,B=B+Math.imul(hr,Yr)|0,A=A+Math.imul(hr,Xr)|0,A=A+Math.imul(Ft,Yr)|0,U=U+Math.imul(Ft,Xr)|0,B=B+Math.imul(Vt,en)|0,A=A+Math.imul(Vt,tn)|0,A=A+Math.imul(Sr,en)|0,U=U+Math.imul(Sr,tn)|0,B=B+Math.imul(Me,Fr)|0,A=A+Math.imul(Me,rn)|0,A=A+Math.imul(He,Fr)|0,U=U+Math.imul(He,rn)|0;var cu=(K+B|0)+((A&8191)<<13)|0;K=(U+(A>>>13)|0)+(cu>>>26)|0,cu&=67108863,B=Math.imul(st,Lr),A=Math.imul(st,Zr),A=A+Math.imul(at,Lr)|0,U=Math.imul(at,Zr),B=B+Math.imul(Ae,Jr)|0,A=A+Math.imul(Ae,Ir)|0,A=A+Math.imul(qe,Jr)|0,U=U+Math.imul(qe,Ir)|0,B=B+Math.imul(te,Or)|0,A=A+Math.imul(te,Qr)|0,A=A+Math.imul(oe,Or)|0,U=U+Math.imul(oe,Qr)|0,B=B+Math.imul(br,Yr)|0,A=A+Math.imul(br,Xr)|0,A=A+Math.imul(rr,Yr)|0,U=U+Math.imul(rr,Xr)|0,B=B+Math.imul(hr,en)|0,A=A+Math.imul(hr,tn)|0,A=A+Math.imul(Ft,en)|0,U=U+Math.imul(Ft,tn)|0,B=B+Math.imul(Vt,Fr)|0,A=A+Math.imul(Vt,rn)|0,A=A+Math.imul(Sr,Fr)|0,U=U+Math.imul(Sr,rn)|0;var uu=(K+B|0)+((A&8191)<<13)|0;K=(U+(A>>>13)|0)+(uu>>>26)|0,uu&=67108863,B=Math.imul(st,Jr),A=Math.imul(st,Ir),A=A+Math.imul(at,Jr)|0,U=Math.imul(at,Ir),B=B+Math.imul(Ae,Or)|0,A=A+Math.imul(Ae,Qr)|0,A=A+Math.imul(qe,Or)|0,U=U+Math.imul(qe,Qr)|0,B=B+Math.imul(te,Yr)|0,A=A+Math.imul(te,Xr)|0,A=A+Math.imul(oe,Yr)|0,U=U+Math.imul(oe,Xr)|0,B=B+Math.imul(br,en)|0,A=A+Math.imul(br,tn)|0,A=A+Math.imul(rr,en)|0,U=U+Math.imul(rr,tn)|0,B=B+Math.imul(hr,Fr)|0,A=A+Math.imul(hr,rn)|0,A=A+Math.imul(Ft,Fr)|0,U=U+Math.imul(Ft,rn)|0;var Hw=(K+B|0)+((A&8191)<<13)|0;K=(U+(A>>>13)|0)+(Hw>>>26)|0,Hw&=67108863,B=Math.imul(st,Or),A=Math.imul(st,Qr),A=A+Math.imul(at,Or)|0,U=Math.imul(at,Qr),B=B+Math.imul(Ae,Yr)|0,A=A+Math.imul(Ae,Xr)|0,A=A+Math.imul(qe,Yr)|0,U=U+Math.imul(qe,Xr)|0,B=B+Math.imul(te,en)|0,A=A+Math.imul(te,tn)|0,A=A+Math.imul(oe,en)|0,U=U+Math.imul(oe,tn)|0,B=B+Math.imul(br,Fr)|0,A=A+Math.imul(br,rn)|0,A=A+Math.imul(rr,Fr)|0,U=U+Math.imul(rr,rn)|0;var zw=(K+B|0)+((A&8191)<<13)|0;K=(U+(A>>>13)|0)+(zw>>>26)|0,zw&=67108863,B=Math.imul(st,Yr),A=Math.imul(st,Xr),A=A+Math.imul(at,Yr)|0,U=Math.imul(at,Xr),B=B+Math.imul(Ae,en)|0,A=A+Math.imul(Ae,tn)|0,A=A+Math.imul(qe,en)|0,U=U+Math.imul(qe,tn)|0,B=B+Math.imul(te,Fr)|0,A=A+Math.imul(te,rn)|0,A=A+Math.imul(oe,Fr)|0,U=U+Math.imul(oe,rn)|0;var Ww=(K+B|0)+((A&8191)<<13)|0;K=(U+(A>>>13)|0)+(Ww>>>26)|0,Ww&=67108863,B=Math.imul(st,en),A=Math.imul(st,tn),A=A+Math.imul(at,en)|0,U=Math.imul(at,tn),B=B+Math.imul(Ae,Fr)|0,A=A+Math.imul(Ae,rn)|0,A=A+Math.imul(qe,Fr)|0,U=U+Math.imul(qe,rn)|0;var Vw=(K+B|0)+((A&8191)<<13)|0;K=(U+(A>>>13)|0)+(Vw>>>26)|0,Vw&=67108863,B=Math.imul(st,Fr),A=Math.imul(st,rn),A=A+Math.imul(at,Fr)|0,U=Math.imul(at,rn);var Hg=(K+B|0)+((A&8191)<<13)|0;return K=(U+(A>>>13)|0)+(Hg>>>26)|0,Hg&=67108863,G[0]=Sl,G[1]=Al,G[2]=Cl,G[3]=Pl,G[4]=Il,G[5]=va,G[6]=Ol,G[7]=wa,G[8]=Tl,G[9]=Rl,G[10]=jl,G[11]=au,G[12]=cu,G[13]=uu,G[14]=Hw,G[15]=zw,G[16]=Ww,G[17]=Vw,G[18]=Hg,K!==0&&(G[19]=K,I.length++),I};Math.imul||(C=S);function P(j,y,x){x.negative=y.negative^j.negative,x.length=j.length+y.length;for(var I=0,O=0,N=0;N<x.length-1;N++){var G=O;O=0;for(var K=I&67108863,B=Math.min(N,y.length-1),A=Math.max(0,N-j.length+1);A<=B;A++){var U=N-A,me=j.words[U]|0,ge=y.words[A]|0,pe=me*ge,we=pe&67108863;G=G+(pe/67108864|0)|0,we=we+K|0,K=we&67108863,G=G+(we>>>26)|0,O+=G>>>26,G&=67108863}x.words[N]=K,I=G,G=O}return I!==0?x.words[N]=I:x.length--,x._strip()}function T(j,y,x){return P(j,y,x)}i.prototype.mulTo=function(y,x){var I,O=this.length+y.length;return this.length===10&&y.length===10?I=C(this,y,x):O<63?I=S(this,y,x):O<1024?I=P(this,y,x):I=T(this,y,x),I};function k(j,y){this.x=j,this.y=y}k.prototype.makeRBT=function(y){for(var x=new Array(y),I=i.prototype._countBits(y)-1,O=0;O<y;O++)x[O]=this.revBin(O,I,y);return x},k.prototype.revBin=function(y,x,I){if(y===0||y===I-1)return y;for(var O=0,N=0;N<x;N++)O|=(y&1)<<x-N-1,y>>=1;return O},k.prototype.permute=function(y,x,I,O,N,G){for(var K=0;K<G;K++)O[K]=x[y[K]],N[K]=I[y[K]]},k.prototype.transform=function(y,x,I,O,N,G){this.permute(G,y,x,I,O,N);for(var K=1;K<N;K<<=1)for(var B=K<<1,A=Math.cos(2*Math.PI/B),U=Math.sin(2*Math.PI/B),me=0;me<N;me+=B)for(var ge=A,pe=U,we=0;we<K;we++){var Ie=I[me+we],Te=O[me+we],Ze=I[me+we+K],ke=O[me+we+K],Re=ge*Ze-pe*ke;ke=ge*ke+pe*Ze,Ze=Re,I[me+we]=Ie+Ze,O[me+we]=Te+ke,I[me+we+K]=Ie-Ze,O[me+we+K]=Te-ke,we!==B&&(Re=A*ge-U*pe,pe=A*pe+U*ge,ge=Re)}},k.prototype.guessLen13b=function(y,x){var I=Math.max(x,y)|1,O=I&1,N=0;for(I=I/2|0;I;I=I>>>1)N++;return 1<<N+1+O},k.prototype.conjugate=function(y,x,I){if(!(I<=1))for(var O=0;O<I/2;O++){var N=y[O];y[O]=y[I-O-1],y[I-O-1]=N,N=x[O],x[O]=-x[I-O-1],x[I-O-1]=-N}},k.prototype.normalize13b=function(y,x){for(var I=0,O=0;O<x/2;O++){var N=Math.round(y[2*O+1]/x)*8192+Math.round(y[2*O]/x)+I;y[O]=N&67108863,N<67108864?I=0:I=N/67108864|0}return y},k.prototype.convert13b=function(y,x,I,O){for(var N=0,G=0;G<x;G++)N=N+(y[G]|0),I[2*G]=N&8191,N=N>>>13,I[2*G+1]=N&8191,N=N>>>13;for(G=2*x;G<O;++G)I[G]=0;r(N===0),r((N&-8192)===0)},k.prototype.stub=function(y){for(var x=new Array(y),I=0;I<y;I++)x[I]=0;return x},k.prototype.mulp=function(y,x,I){var O=2*this.guessLen13b(y.length,x.length),N=this.makeRBT(O),G=this.stub(O),K=new Array(O),B=new Array(O),A=new Array(O),U=new Array(O),me=new Array(O),ge=new Array(O),pe=I.words;pe.length=O,this.convert13b(y.words,y.length,K,O),this.convert13b(x.words,x.length,U,O),this.transform(K,G,B,A,O,N),this.transform(U,G,me,ge,O,N);for(var we=0;we<O;we++){var Ie=B[we]*me[we]-A[we]*ge[we];A[we]=B[we]*ge[we]+A[we]*me[we],B[we]=Ie}return this.conjugate(B,A,O),this.transform(B,A,pe,G,O,N),this.conjugate(pe,G,O),this.normalize13b(pe,O),I.negative=y.negative^x.negative,I.length=y.length+x.length,I._strip()},i.prototype.mul=function(y){var x=new i(null);return x.words=new Array(this.length+y.length),this.mulTo(y,x)},i.prototype.mulf=function(y){var x=new i(null);return x.words=new Array(this.length+y.length),T(this,y,x)},i.prototype.imul=function(y){return this.clone().mulTo(y,this)},i.prototype.imuln=function(y){var x=y<0;x&&(y=-y),r(typeof y=="number"),r(y<67108864);for(var I=0,O=0;O<this.length;O++){var N=(this.words[O]|0)*y,G=(N&67108863)+(I&67108863);I>>=26,I+=N/67108864|0,I+=G>>>26,this.words[O]=G&67108863}return I!==0&&(this.words[O]=I,this.length++),x?this.ineg():this},i.prototype.muln=function(y){return this.clone().imuln(y)},i.prototype.sqr=function(){return this.mul(this)},i.prototype.isqr=function(){return this.imul(this.clone())},i.prototype.pow=function(y){var x=w(y);if(x.length===0)return new i(1);for(var I=this,O=0;O<x.length&&x[O]===0;O++,I=I.sqr());if(++O<x.length)for(var N=I.sqr();O<x.length;O++,N=N.sqr())x[O]!==0&&(I=I.mul(N));return I},i.prototype.iushln=function(y){r(typeof y=="number"&&y>=0);var x=y%26,I=(y-x)/26,O=67108863>>>26-x<<26-x,N;if(x!==0){var G=0;for(N=0;N<this.length;N++){var K=this.words[N]&O,B=(this.words[N]|0)-K<<x;this.words[N]=B|G,G=K>>>26-x}G&&(this.words[N]=G,this.length++)}if(I!==0){for(N=this.length-1;N>=0;N--)this.words[N+I]=this.words[N];for(N=0;N<I;N++)this.words[N]=0;this.length+=I}return this._strip()},i.prototype.ishln=function(y){return r(this.negative===0),this.iushln(y)},i.prototype.iushrn=function(y,x,I){r(typeof y=="number"&&y>=0);var O;x?O=(x-x%26)/26:O=0;var N=y%26,G=Math.min((y-N)/26,this.length),K=67108863^67108863>>>N<<N,B=I;if(O-=G,O=Math.max(0,O),B){for(var A=0;A<G;A++)B.words[A]=this.words[A];B.length=G}if(G!==0)if(this.length>G)for(this.length-=G,A=0;A<this.length;A++)this.words[A]=this.words[A+G];else this.words[0]=0,this.length=1;var U=0;for(A=this.length-1;A>=0&&(U!==0||A>=O);A--){var me=this.words[A]|0;this.words[A]=U<<26-N|me>>>N,U=me&K}return B&&U!==0&&(B.words[B.length++]=U),this.length===0&&(this.words[0]=0,this.length=1),this._strip()},i.prototype.ishrn=function(y,x,I){return r(this.negative===0),this.iushrn(y,x,I)},i.prototype.shln=function(y){return this.clone().ishln(y)},i.prototype.ushln=function(y){return this.clone().iushln(y)},i.prototype.shrn=function(y){return this.clone().ishrn(y)},i.prototype.ushrn=function(y){return this.clone().iushrn(y)},i.prototype.testn=function(y){r(typeof y=="number"&&y>=0);var x=y%26,I=(y-x)/26,O=1<<x;if(this.length<=I)return!1;var N=this.words[I];return!!(N&O)},i.prototype.imaskn=function(y){r(typeof y=="number"&&y>=0);var x=y%26,I=(y-x)/26;if(r(this.negative===0,"imaskn works only with positive numbers"),this.length<=I)return this;if(x!==0&&I++,this.length=Math.min(I,this.length),x!==0){var O=67108863^67108863>>>x<<x;this.words[this.length-1]&=O}return this._strip()},i.prototype.maskn=function(y){return this.clone().imaskn(y)},i.prototype.iaddn=function(y){return r(typeof y=="number"),r(y<67108864),y<0?this.isubn(-y):this.negative!==0?this.length===1&&(this.words[0]|0)<=y?(this.words[0]=y-(this.words[0]|0),this.negative=0,this):(this.negative=0,this.isubn(y),this.negative=1,this):this._iaddn(y)},i.prototype._iaddn=function(y){this.words[0]+=y;for(var x=0;x<this.length&&this.words[x]>=67108864;x++)this.words[x]-=67108864,x===this.length-1?this.words[x+1]=1:this.words[x+1]++;return this.length=Math.max(this.length,x+1),this},i.prototype.isubn=function(y){if(r(typeof y=="number"),r(y<67108864),y<0)return this.iaddn(-y);if(this.negative!==0)return this.negative=0,this.iaddn(y),this.negative=1,this;if(this.words[0]-=y,this.length===1&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1;else for(var x=0;x<this.length&&this.words[x]<0;x++)this.words[x]+=67108864,this.words[x+1]-=1;return this._strip()},i.prototype.addn=function(y){return this.clone().iaddn(y)},i.prototype.subn=function(y){return this.clone().isubn(y)},i.prototype.iabs=function(){return this.negative=0,this},i.prototype.abs=function(){return this.clone().iabs()},i.prototype._ishlnsubmul=function(y,x,I){var O=y.length+I,N;this._expand(O);var G,K=0;for(N=0;N<y.length;N++){G=(this.words[N+I]|0)+K;var B=(y.words[N]|0)*x;G-=B&67108863,K=(G>>26)-(B/67108864|0),this.words[N+I]=G&67108863}for(;N<this.length-I;N++)G=(this.words[N+I]|0)+K,K=G>>26,this.words[N+I]=G&67108863;if(K===0)return this._strip();for(r(K===-1),K=0,N=0;N<this.length;N++)G=-(this.words[N]|0)+K,K=G>>26,this.words[N]=G&67108863;return this.negative=1,this._strip()},i.prototype._wordDiv=function(y,x){var I=this.length-y.length,O=this.clone(),N=y,G=N.words[N.length-1]|0,K=this._countBits(G);I=26-K,I!==0&&(N=N.ushln(I),O.iushln(I),G=N.words[N.length-1]|0);var B=O.length-N.length,A;if(x!=="mod"){A=new i(null),A.length=B+1,A.words=new Array(A.length);for(var U=0;U<A.length;U++)A.words[U]=0}var me=O.clone()._ishlnsubmul(N,1,B);me.negative===0&&(O=me,A&&(A.words[B]=1));for(var ge=B-1;ge>=0;ge--){var pe=(O.words[N.length+ge]|0)*67108864+(O.words[N.length+ge-1]|0);for(pe=Math.min(pe/G|0,67108863),O._ishlnsubmul(N,pe,ge);O.negative!==0;)pe--,O.negative=0,O._ishlnsubmul(N,1,ge),O.isZero()||(O.negative^=1);A&&(A.words[ge]=pe)}return A&&A._strip(),O._strip(),x!=="div"&&I!==0&&O.iushrn(I),{div:A||null,mod:O}},i.prototype.divmod=function(y,x,I){if(r(!y.isZero()),this.isZero())return{div:new i(0),mod:new i(0)};var O,N,G;return this.negative!==0&&y.negative===0?(G=this.neg().divmod(y,x),x!=="mod"&&(O=G.div.neg()),x!=="div"&&(N=G.mod.neg(),I&&N.negative!==0&&N.iadd(y)),{div:O,mod:N}):this.negative===0&&y.negative!==0?(G=this.divmod(y.neg(),x),x!=="mod"&&(O=G.div.neg()),{div:O,mod:G.mod}):this.negative&y.negative?(G=this.neg().divmod(y.neg(),x),x!=="div"&&(N=G.mod.neg(),I&&N.negative!==0&&N.isub(y)),{div:G.div,mod:N}):y.length>this.length||this.cmp(y)<0?{div:new i(0),mod:this}:y.length===1?x==="div"?{div:this.divn(y.words[0]),mod:null}:x==="mod"?{div:null,mod:new i(this.modrn(y.words[0]))}:{div:this.divn(y.words[0]),mod:new i(this.modrn(y.words[0]))}:this._wordDiv(y,x)},i.prototype.div=function(y){return this.divmod(y,"div",!1).div},i.prototype.mod=function(y){return this.divmod(y,"mod",!1).mod},i.prototype.umod=function(y){return this.divmod(y,"mod",!0).mod},i.prototype.divRound=function(y){var x=this.divmod(y);if(x.mod.isZero())return x.div;var I=x.div.negative!==0?x.mod.isub(y):x.mod,O=y.ushrn(1),N=y.andln(1),G=I.cmp(O);return G<0||N===1&&G===0?x.div:x.div.negative!==0?x.div.isubn(1):x.div.iaddn(1)},i.prototype.modrn=function(y){var x=y<0;x&&(y=-y),r(y<=67108863);for(var I=(1<<26)%y,O=0,N=this.length-1;N>=0;N--)O=(I*O+(this.words[N]|0))%y;return x?-O:O},i.prototype.modn=function(y){return this.modrn(y)},i.prototype.idivn=function(y){var x=y<0;x&&(y=-y),r(y<=67108863);for(var I=0,O=this.length-1;O>=0;O--){var N=(this.words[O]|0)+I*67108864;this.words[O]=N/y|0,I=N%y}return this._strip(),x?this.ineg():this},i.prototype.divn=function(y){return this.clone().idivn(y)},i.prototype.egcd=function(y){r(y.negative===0),r(!y.isZero());var x=this,I=y.clone();x.negative!==0?x=x.umod(y):x=x.clone();for(var O=new i(1),N=new i(0),G=new i(0),K=new i(1),B=0;x.isEven()&&I.isEven();)x.iushrn(1),I.iushrn(1),++B;for(var A=I.clone(),U=x.clone();!x.isZero();){for(var me=0,ge=1;!(x.words[0]&ge)&&me<26;++me,ge<<=1);if(me>0)for(x.iushrn(me);me-- >0;)(O.isOdd()||N.isOdd())&&(O.iadd(A),N.isub(U)),O.iushrn(1),N.iushrn(1);for(var pe=0,we=1;!(I.words[0]&we)&&pe<26;++pe,we<<=1);if(pe>0)for(I.iushrn(pe);pe-- >0;)(G.isOdd()||K.isOdd())&&(G.iadd(A),K.isub(U)),G.iushrn(1),K.iushrn(1);x.cmp(I)>=0?(x.isub(I),O.isub(G),N.isub(K)):(I.isub(x),G.isub(O),K.isub(N))}return{a:G,b:K,gcd:I.iushln(B)}},i.prototype._invmp=function(y){r(y.negative===0),r(!y.isZero());var x=this,I=y.clone();x.negative!==0?x=x.umod(y):x=x.clone();for(var O=new i(1),N=new i(0),G=I.clone();x.cmpn(1)>0&&I.cmpn(1)>0;){for(var K=0,B=1;!(x.words[0]&B)&&K<26;++K,B<<=1);if(K>0)for(x.iushrn(K);K-- >0;)O.isOdd()&&O.iadd(G),O.iushrn(1);for(var A=0,U=1;!(I.words[0]&U)&&A<26;++A,U<<=1);if(A>0)for(I.iushrn(A);A-- >0;)N.isOdd()&&N.iadd(G),N.iushrn(1);x.cmp(I)>=0?(x.isub(I),O.isub(N)):(I.isub(x),N.isub(O))}var me;return x.cmpn(1)===0?me=O:me=N,me.cmpn(0)<0&&me.iadd(y),me},i.prototype.gcd=function(y){if(this.isZero())return y.abs();if(y.isZero())return this.abs();var x=this.clone(),I=y.clone();x.negative=0,I.negative=0;for(var O=0;x.isEven()&&I.isEven();O++)x.iushrn(1),I.iushrn(1);do{for(;x.isEven();)x.iushrn(1);for(;I.isEven();)I.iushrn(1);var N=x.cmp(I);if(N<0){var G=x;x=I,I=G}else if(N===0||I.cmpn(1)===0)break;x.isub(I)}while(!0);return I.iushln(O)},i.prototype.invm=function(y){return this.egcd(y).a.umod(y)},i.prototype.isEven=function(){return(this.words[0]&1)===0},i.prototype.isOdd=function(){return(this.words[0]&1)===1},i.prototype.andln=function(y){return this.words[0]&y},i.prototype.bincn=function(y){r(typeof y=="number");var x=y%26,I=(y-x)/26,O=1<<x;if(this.length<=I)return this._expand(I+1),this.words[I]|=O,this;for(var N=O,G=I;N!==0&&G<this.length;G++){var K=this.words[G]|0;K+=N,N=K>>>26,K&=67108863,this.words[G]=K}return N!==0&&(this.words[G]=N,this.length++),this},i.prototype.isZero=function(){return this.length===1&&this.words[0]===0},i.prototype.cmpn=function(y){var x=y<0;if(this.negative!==0&&!x)return-1;if(this.negative===0&&x)return 1;this._strip();var I;if(this.length>1)I=1;else{x&&(y=-y),r(y<=67108863,"Number is too big");var O=this.words[0]|0;I=O===y?0:O<y?-1:1}return this.negative!==0?-I|0:I},i.prototype.cmp=function(y){if(this.negative!==0&&y.negative===0)return-1;if(this.negative===0&&y.negative!==0)return 1;var x=this.ucmp(y);return this.negative!==0?-x|0:x},i.prototype.ucmp=function(y){if(this.length>y.length)return 1;if(this.length<y.length)return-1;for(var x=0,I=this.length-1;I>=0;I--){var O=this.words[I]|0,N=y.words[I]|0;if(O!==N){O<N?x=-1:O>N&&(x=1);break}}return x},i.prototype.gtn=function(y){return this.cmpn(y)===1},i.prototype.gt=function(y){return this.cmp(y)===1},i.prototype.gten=function(y){return this.cmpn(y)>=0},i.prototype.gte=function(y){return this.cmp(y)>=0},i.prototype.ltn=function(y){return this.cmpn(y)===-1},i.prototype.lt=function(y){return this.cmp(y)===-1},i.prototype.lten=function(y){return this.cmpn(y)<=0},i.prototype.lte=function(y){return this.cmp(y)<=0},i.prototype.eqn=function(y){return this.cmpn(y)===0},i.prototype.eq=function(y){return this.cmp(y)===0},i.red=function(y){return new V(y)},i.prototype.toRed=function(y){return r(!this.red,"Already a number in reduction context"),r(this.negative===0,"red works only with positives"),y.convertTo(this)._forceRed(y)},i.prototype.fromRed=function(){return r(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},i.prototype._forceRed=function(y){return this.red=y,this},i.prototype.forceRed=function(y){return r(!this.red,"Already a number in reduction context"),this._forceRed(y)},i.prototype.redAdd=function(y){return r(this.red,"redAdd works only with red numbers"),this.red.add(this,y)},i.prototype.redIAdd=function(y){return r(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,y)},i.prototype.redSub=function(y){return r(this.red,"redSub works only with red numbers"),this.red.sub(this,y)},i.prototype.redISub=function(y){return r(this.red,"redISub works only with red numbers"),this.red.isub(this,y)},i.prototype.redShl=function(y){return r(this.red,"redShl works only with red numbers"),this.red.shl(this,y)},i.prototype.redMul=function(y){return r(this.red,"redMul works only with red numbers"),this.red._verify2(this,y),this.red.mul(this,y)},i.prototype.redIMul=function(y){return r(this.red,"redMul works only with red numbers"),this.red._verify2(this,y),this.red.imul(this,y)},i.prototype.redSqr=function(){return r(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},i.prototype.redISqr=function(){return r(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},i.prototype.redSqrt=function(){return r(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},i.prototype.redInvm=function(){return r(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},i.prototype.redNeg=function(){return r(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},i.prototype.redPow=function(y){return r(this.red&&!y.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,y)};var D={k256:null,p224:null,p192:null,p25519:null};function H(j,y){this.name=j,this.p=new i(y,16),this.n=this.p.bitLength(),this.k=new i(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}H.prototype._tmp=function(){var y=new i(null);return y.words=new Array(Math.ceil(this.n/13)),y},H.prototype.ireduce=function(y){var x=y,I;do this.split(x,this.tmp),x=this.imulK(x),x=x.iadd(this.tmp),I=x.bitLength();while(I>this.n);var O=I<this.n?-1:x.ucmp(this.p);return O===0?(x.words[0]=0,x.length=1):O>0?x.isub(this.p):x.strip!==void 0?x.strip():x._strip(),x},H.prototype.split=function(y,x){y.iushrn(this.n,0,x)},H.prototype.imulK=function(y){return y.imul(this.k)};function L(){H.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}n(L,H),L.prototype.split=function(y,x){for(var I=4194303,O=Math.min(y.length,9),N=0;N<O;N++)x.words[N]=y.words[N];if(x.length=O,y.length<=9){y.words[0]=0,y.length=1;return}var G=y.words[9];for(x.words[x.length++]=G&I,N=10;N<y.length;N++){var K=y.words[N]|0;y.words[N-10]=(K&I)<<4|G>>>22,G=K}G>>>=22,y.words[N-10]=G,G===0&&y.length>10?y.length-=10:y.length-=9},L.prototype.imulK=function(y){y.words[y.length]=0,y.words[y.length+1]=0,y.length+=2;for(var x=0,I=0;I<y.length;I++){var O=y.words[I]|0;x+=O*977,y.words[I]=x&67108863,x=O*64+(x/67108864|0)}return y.words[y.length-1]===0&&(y.length--,y.words[y.length-1]===0&&y.length--),y};function z(){H.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}n(z,H);function ne(){H.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}n(ne,H);function F(){H.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}n(F,H),F.prototype.imulK=function(y){for(var x=0,I=0;I<y.length;I++){var O=(y.words[I]|0)*19+x,N=O&67108863;O>>>=26,y.words[I]=N,x=O}return x!==0&&(y.words[y.length++]=x),y},i._prime=function(y){if(D[y])return D[y];var x;if(y==="k256")x=new L;else if(y==="p224")x=new z;else if(y==="p192")x=new ne;else if(y==="p25519")x=new F;else throw new Error("Unknown prime "+y);return D[y]=x,x};function V(j){if(typeof j=="string"){var y=i._prime(j);this.m=y.p,this.prime=y}else r(j.gtn(1),"modulus must be greater than 1"),this.m=j,this.prime=null}V.prototype._verify1=function(y){r(y.negative===0,"red works only with positives"),r(y.red,"red works only with red numbers")},V.prototype._verify2=function(y,x){r((y.negative|x.negative)===0,"red works only with positives"),r(y.red&&y.red===x.red,"red works only with red numbers")},V.prototype.imod=function(y){return this.prime?this.prime.ireduce(y)._forceRed(this):(l(y,y.umod(this.m)._forceRed(this)),y)},V.prototype.neg=function(y){return y.isZero()?y.clone():this.m.sub(y)._forceRed(this)},V.prototype.add=function(y,x){this._verify2(y,x);var I=y.add(x);return I.cmp(this.m)>=0&&I.isub(this.m),I._forceRed(this)},V.prototype.iadd=function(y,x){this._verify2(y,x);var I=y.iadd(x);return I.cmp(this.m)>=0&&I.isub(this.m),I},V.prototype.sub=function(y,x){this._verify2(y,x);var I=y.sub(x);return I.cmpn(0)<0&&I.iadd(this.m),I._forceRed(this)},V.prototype.isub=function(y,x){this._verify2(y,x);var I=y.isub(x);return I.cmpn(0)<0&&I.iadd(this.m),I},V.prototype.shl=function(y,x){return this._verify1(y),this.imod(y.ushln(x))},V.prototype.imul=function(y,x){return this._verify2(y,x),this.imod(y.imul(x))},V.prototype.mul=function(y,x){return this._verify2(y,x),this.imod(y.mul(x))},V.prototype.isqr=function(y){return this.imul(y,y.clone())},V.prototype.sqr=function(y){return this.mul(y,y)},V.prototype.sqrt=function(y){if(y.isZero())return y.clone();var x=this.m.andln(3);if(r(x%2===1),x===3){var I=this.m.add(new i(1)).iushrn(2);return this.pow(y,I)}for(var O=this.m.subn(1),N=0;!O.isZero()&&O.andln(1)===0;)N++,O.iushrn(1);r(!O.isZero());var G=new i(1).toRed(this),K=G.redNeg(),B=this.m.subn(1).iushrn(1),A=this.m.bitLength();for(A=new i(2*A*A).toRed(this);this.pow(A,B).cmp(K)!==0;)A.redIAdd(K);for(var U=this.pow(A,O),me=this.pow(y,O.addn(1).iushrn(1)),ge=this.pow(y,O),pe=N;ge.cmp(G)!==0;){for(var we=ge,Ie=0;we.cmp(G)!==0;Ie++)we=we.redSqr();r(Ie<pe);var Te=this.pow(U,new i(1).iushln(pe-Ie-1));me=me.redMul(Te),U=Te.redSqr(),ge=ge.redMul(U),pe=Ie}return me},V.prototype.invm=function(y){var x=y._invmp(this.m);return x.negative!==0?(x.negative=0,this.imod(x).redNeg()):this.imod(x)},V.prototype.pow=function(y,x){if(x.isZero())return new i(1).toRed(this);if(x.cmpn(1)===0)return y.clone();var I=4,O=new Array(1<<I);O[0]=new i(1).toRed(this),O[1]=y;for(var N=2;N<O.length;N++)O[N]=this.mul(O[N-1],y);var G=O[0],K=0,B=0,A=x.bitLength()%26;for(A===0&&(A=26),N=x.length-1;N>=0;N--){for(var U=x.words[N],me=A-1;me>=0;me--){var ge=U>>me&1;if(G!==O[0]&&(G=this.sqr(G)),ge===0&&K===0){B=0;continue}K<<=1,K|=ge,B++,!(B!==I&&(N!==0||me!==0))&&(G=this.mul(G,O[K]),B=0,K=0)}A=26}return G},V.prototype.convertTo=function(y){var x=y.umod(this.m);return x===y?x.clone():x},V.prototype.convertFrom=function(y){var x=y.clone();return x.red=null,x},i.mont=function(y){return new Y(y)};function Y(j){V.call(this,j),this.shift=this.m.bitLength(),this.shift%26!==0&&(this.shift+=26-this.shift%26),this.r=new i(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}n(Y,V),Y.prototype.convertTo=function(y){return this.imod(y.ushln(this.shift))},Y.prototype.convertFrom=function(y){var x=this.imod(y.mul(this.rinv));return x.red=null,x},Y.prototype.imul=function(y,x){if(y.isZero()||x.isZero())return y.words[0]=0,y.length=1,y;var I=y.imul(x),O=I.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),N=I.isub(O).iushrn(this.shift),G=N;return N.cmp(this.m)>=0?G=N.isub(this.m):N.cmpn(0)<0&&(G=N.iadd(this.m)),G._forceRed(this)},Y.prototype.mul=function(y,x){if(y.isZero()||x.isZero())return new i(0)._forceRed(this);var I=y.mul(x),O=I.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),N=I.isub(O).iushrn(this.shift),G=N;return N.cmp(this.m)>=0?G=N.isub(this.m):N.cmpn(0)<0&&(G=N.iadd(this.m)),G._forceRed(this)},Y.prototype.invm=function(y){var x=this.imod(y._invmp(this.m).mul(this.r2));return x._forceRed(this)}})(typeof Uq>"u"||Uq,wpe)});var DC=b(NC=>{"use strict";Object.defineProperty(NC,"__esModule",{value:!0});NC.EVENTS=void 0;NC.EVENTS={STARTED_CONNECTING:"walletlink_sdk.started.connecting",CONNECTED_STATE_CHANGE:"walletlink_sdk.connected",DISCONNECTED:"walletlink_sdk.disconnected",METADATA_DESTROYED:"walletlink_sdk_metadata_destroyed",LINKED:"walletlink_sdk.linked",FAILURE:"walletlink_sdk.generic_failure",SESSION_CONFIG_RECEIVED:"walletlink_sdk.session_config_event_received",ETH_ACCOUNTS_STATE:"walletlink_sdk.eth_accounts_state",SESSION_STATE_CHANGE:"walletlink_sdk.session_state_change",UNLINKED_ERROR_STATE:"walletlink_sdk.unlinked_error_state",SKIPPED_CLEARING_SESSION:"walletlink_sdk.skipped_clearing_session",GENERAL_ERROR:"walletlink_sdk.general_error",WEB3_REQUEST:"walletlink_sdk.web3.request",WEB3_REQUEST_PUBLISHED:"walletlink_sdk.web3.request_published",WEB3_RESPONSE:"walletlink_sdk.web3.response",UNKNOWN_ADDRESS_ENCOUNTERED:"walletlink_sdk.unknown_address_encountered"}});var Cpe=b((j6r,Ape)=>{Ape.exports=G2;G2.default=G2;G2.stable=Epe;G2.stableStringify=Epe;var BC="[...]",_pe="[Circular]",rm=[],tm=[];function xpe(){return{depthLimit:Number.MAX_SAFE_INTEGER,edgesLimit:Number.MAX_SAFE_INTEGER}}function G2(t,e,r,n){typeof n>"u"&&(n=xpe()),$q(t,"",0,[],void 0,0,n);var i;try{tm.length===0?i=JSON.stringify(t,e,r):i=JSON.stringify(t,Spe(e),r)}catch{return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")}finally{for(;rm.length!==0;){var o=rm.pop();o.length===4?Object.defineProperty(o[0],o[1],o[3]):o[0][o[1]]=o[2]}}return i}function Ib(t,e,r,n){var i=Object.getOwnPropertyDescriptor(n,r);i.get!==void 0?i.configurable?(Object.defineProperty(n,r,{value:t}),rm.push([n,r,e,i])):tm.push([e,r,t]):(n[r]=t,rm.push([n,r,e]))}function $q(t,e,r,n,i,o,s){o+=1;var a;if(typeof t=="object"&&t!==null){for(a=0;a<n.length;a++)if(n[a]===t){Ib(_pe,t,e,i);return}if(typeof s.depthLimit<"u"&&o>s.depthLimit){Ib(BC,t,e,i);return}if(typeof s.edgesLimit<"u"&&r+1>s.edgesLimit){Ib(BC,t,e,i);return}if(n.push(t),Array.isArray(t))for(a=0;a<t.length;a++)$q(t[a],a,a,n,t,o,s);else{var c=Object.keys(t);for(a=0;a<c.length;a++){var l=c[a];$q(t[l],l,a,n,t,o,s)}}n.pop()}}function HWe(t,e){return t<e?-1:t>e?1:0}function Epe(t,e,r,n){typeof n>"u"&&(n=xpe());var i=Hq(t,"",0,[],void 0,0,n)||t,o;try{tm.length===0?o=JSON.stringify(i,e,r):o=JSON.stringify(i,Spe(e),r)}catch{return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")}finally{for(;rm.length!==0;){var s=rm.pop();s.length===4?Object.defineProperty(s[0],s[1],s[3]):s[0][s[1]]=s[2]}}return o}function Hq(t,e,r,n,i,o,s){o+=1;var a;if(typeof t=="object"&&t!==null){for(a=0;a<n.length;a++)if(n[a]===t){Ib(_pe,t,e,i);return}try{if(typeof t.toJSON=="function")return}catch{return}if(typeof s.depthLimit<"u"&&o>s.depthLimit){Ib(BC,t,e,i);return}if(typeof s.edgesLimit<"u"&&r+1>s.edgesLimit){Ib(BC,t,e,i);return}if(n.push(t),Array.isArray(t))for(a=0;a<t.length;a++)Hq(t[a],a,a,n,t,o,s);else{var c={},l=Object.keys(t).sort(HWe);for(a=0;a<l.length;a++){var d=l[a];Hq(t[d],d,a,n,t,o,s),c[d]=t[d]}if(typeof i<"u")rm.push([i,e,t]),i[e]=c;else return c}n.pop()}}function Spe(t){return t=typeof t<"u"?t:function(e,r){return r},function(e,r){if(tm.length>0)for(var n=0;n<tm.length;n++){var i=tm[n];if(i[1]===e&&i[0]===r){r=i[2],tm.splice(n,1);break}}return t.call(this,e,r)}}});var LC=b(Ob=>{"use strict";Object.defineProperty(Ob,"__esModule",{value:!0});Ob.EthereumProviderError=Ob.EthereumRpcError=void 0;var zWe=Cpe(),qC=class extends Error{constructor(e,r,n){if(!Number.isInteger(e))throw new Error('"code" must be an integer.');if(!r||typeof r!="string")throw new Error('"message" must be a nonempty string.');super(r),this.code=e,n!==void 0&&(this.data=n)}serialize(){let e={code:this.code,message:this.message};return this.data!==void 0&&(e.data=this.data),this.stack&&(e.stack=this.stack),e}toString(){return zWe.default(this.serialize(),VWe,2)}};Ob.EthereumRpcError=qC;var zq=class extends qC{constructor(e,r,n){if(!WWe(e))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');super(e,r,n)}};Ob.EthereumProviderError=zq;function WWe(t){return Number.isInteger(t)&&t>=1e3&&t<=4999}function VWe(t,e){if(e!=="[Circular]")return e}});var FC=b(Tb=>{"use strict";Object.defineProperty(Tb,"__esModule",{value:!0});Tb.errorValues=Tb.errorCodes=void 0;Tb.errorCodes={rpc:{invalidInput:-32e3,resourceNotFound:-32001,resourceUnavailable:-32002,transactionRejected:-32003,methodNotSupported:-32004,limitExceeded:-32005,parse:-32700,invalidRequest:-32600,methodNotFound:-32601,invalidParams:-32602,internal:-32603},provider:{userRejectedRequest:4001,unauthorized:4100,unsupportedMethod:4200,disconnected:4900,chainDisconnected:4901}};Tb.errorValues={"-32700":{standard:"JSON RPC 2.0",message:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."},"-32600":{standard:"JSON RPC 2.0",message:"The JSON sent is not a valid Request object."},"-32601":{standard:"JSON RPC 2.0",message:"The method does not exist / is not available."},"-32602":{standard:"JSON RPC 2.0",message:"Invalid method parameter(s)."},"-32603":{standard:"JSON RPC 2.0",message:"Internal JSON-RPC error."},"-32000":{standard:"EIP-1474",message:"Invalid input."},"-32001":{standard:"EIP-1474",message:"Resource not found."},"-32002":{standard:"EIP-1474",message:"Resource unavailable."},"-32003":{standard:"EIP-1474",message:"Transaction rejected."},"-32004":{standard:"EIP-1474",message:"Method not supported."},"-32005":{standard:"EIP-1474",message:"Request limit exceeded."},4001:{standard:"EIP-1193",message:"User rejected the request."},4100:{standard:"EIP-1193",message:"The requested account and/or method has not been authorized by the user."},4200:{standard:"EIP-1193",message:"The requested method is not supported by this Ethereum provider."},4900:{standard:"EIP-1193",message:"The provider is disconnected from all chains."},4901:{standard:"EIP-1193",message:"The provider is disconnected from the specified chain."}}});var Gq=b($c=>{"use strict";Object.defineProperty($c,"__esModule",{value:!0});$c.serializeError=$c.isValidCode=$c.getMessageFromCode=$c.JSON_RPC_SERVER_ERROR_MESSAGE=void 0;var UC=FC(),GWe=LC(),Ppe=UC.errorCodes.rpc.internal,KWe="Unspecified error message. This is a bug, please report it.",ZWe={code:Ppe,message:Vq(Ppe)};$c.JSON_RPC_SERVER_ERROR_MESSAGE="Unspecified server error.";function Vq(t,e=KWe){if(Number.isInteger(t)){let r=t.toString();if(Wq(UC.errorValues,r))return UC.errorValues[r].message;if(Tpe(t))return $c.JSON_RPC_SERVER_ERROR_MESSAGE}return e}$c.getMessageFromCode=Vq;function Ope(t){if(!Number.isInteger(t))return!1;let e=t.toString();return!!(UC.errorValues[e]||Tpe(t))}$c.isValidCode=Ope;function JWe(t,{fallbackError:e=ZWe,shouldIncludeStack:r=!1}={}){var n,i;if(!e||!Number.isInteger(e.code)||typeof e.message!="string")throw new Error("Must provide fallback error with integer number code and string message.");if(t instanceof GWe.EthereumRpcError)return t.serialize();let o={};if(t&&typeof t=="object"&&!Array.isArray(t)&&Wq(t,"code")&&Ope(t.code)){let a=t;o.code=a.code,a.message&&typeof a.message=="string"?(o.message=a.message,Wq(a,"data")&&(o.data=a.data)):(o.message=Vq(o.code),o.data={originalError:Ipe(t)})}else{o.code=e.code;let a=(n=t)===null||n===void 0?void 0:n.message;o.message=a&&typeof a=="string"?a:e.message,o.data={originalError:Ipe(t)}}let s=(i=t)===null||i===void 0?void 0:i.stack;return r&&t&&s&&typeof s=="string"&&(o.stack=s),o}$c.serializeError=JWe;function Tpe(t){return t>=-32099&&t<=-32e3}function Ipe(t){return t&&typeof t=="object"&&!Array.isArray(t)?Object.assign({},t):t}function Wq(t,e){return Object.prototype.hasOwnProperty.call(t,e)}});var Mpe=b($C=>{"use strict";Object.defineProperty($C,"__esModule",{value:!0});$C.ethErrors=void 0;var Kq=LC(),Rpe=Gq(),wo=FC();$C.ethErrors={rpc:{parse:t=>$a(wo.errorCodes.rpc.parse,t),invalidRequest:t=>$a(wo.errorCodes.rpc.invalidRequest,t),invalidParams:t=>$a(wo.errorCodes.rpc.invalidParams,t),methodNotFound:t=>$a(wo.errorCodes.rpc.methodNotFound,t),internal:t=>$a(wo.errorCodes.rpc.internal,t),server:t=>{if(!t||typeof t!="object"||Array.isArray(t))throw new Error("Ethereum RPC Server errors must provide single object argument.");let{code:e}=t;if(!Number.isInteger(e)||e>-32005||e<-32099)throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');return $a(e,t)},invalidInput:t=>$a(wo.errorCodes.rpc.invalidInput,t),resourceNotFound:t=>$a(wo.errorCodes.rpc.resourceNotFound,t),resourceUnavailable:t=>$a(wo.errorCodes.rpc.resourceUnavailable,t),transactionRejected:t=>$a(wo.errorCodes.rpc.transactionRejected,t),methodNotSupported:t=>$a(wo.errorCodes.rpc.methodNotSupported,t),limitExceeded:t=>$a(wo.errorCodes.rpc.limitExceeded,t)},provider:{userRejectedRequest:t=>K2(wo.errorCodes.provider.userRejectedRequest,t),unauthorized:t=>K2(wo.errorCodes.provider.unauthorized,t),unsupportedMethod:t=>K2(wo.errorCodes.provider.unsupportedMethod,t),disconnected:t=>K2(wo.errorCodes.provider.disconnected,t),chainDisconnected:t=>K2(wo.errorCodes.provider.chainDisconnected,t),custom:t=>{if(!t||typeof t!="object"||Array.isArray(t))throw new Error("Ethereum Provider custom errors must provide single object argument.");let{code:e,message:r,data:n}=t;if(!r||typeof r!="string")throw new Error('"message" must be a nonempty string');return new Kq.EthereumProviderError(e,r,n)}}};function $a(t,e){let[r,n]=jpe(e);return new Kq.EthereumRpcError(t,r||Rpe.getMessageFromCode(t),n)}function K2(t,e){let[r,n]=jpe(e);return new Kq.EthereumProviderError(t,r||Rpe.getMessageFromCode(t),n)}function jpe(t){if(t){if(typeof t=="string")return[t];if(typeof t=="object"&&!Array.isArray(t)){let{message:e,data:r}=t;if(e&&typeof e!="string")throw new Error("Must specify string message.");return[e||void 0,r]}}return[]}});var Zq=b(As=>{"use strict";Object.defineProperty(As,"__esModule",{value:!0});As.getMessageFromCode=As.serializeError=As.EthereumProviderError=As.EthereumRpcError=As.ethErrors=As.errorCodes=void 0;var kpe=LC();Object.defineProperty(As,"EthereumRpcError",{enumerable:!0,get:function(){return kpe.EthereumRpcError}});Object.defineProperty(As,"EthereumProviderError",{enumerable:!0,get:function(){return kpe.EthereumProviderError}});var Npe=Gq();Object.defineProperty(As,"serializeError",{enumerable:!0,get:function(){return Npe.serializeError}});Object.defineProperty(As,"getMessageFromCode",{enumerable:!0,get:function(){return Npe.getMessageFromCode}});var QWe=Mpe();Object.defineProperty(As,"ethErrors",{enumerable:!0,get:function(){return QWe.ethErrors}});var YWe=FC();Object.defineProperty(As,"errorCodes",{enumerable:!0,get:function(){return YWe.errorCodes}})});var HC=b(Z2=>{"use strict";Object.defineProperty(Z2,"__esModule",{value:!0});Z2.Web3Method=void 0;var XWe;(function(t){t.requestEthereumAccounts="requestEthereumAccounts",t.signEthereumMessage="signEthereumMessage",t.signEthereumTransaction="signEthereumTransaction",t.submitEthereumTransaction="submitEthereumTransaction",t.ethereumAddressFromSignedMessage="ethereumAddressFromSignedMessage",t.scanQRCode="scanQRCode",t.generic="generic",t.childRequestEthereumAccounts="childRequestEthereumAccounts",t.addEthereumChain="addEthereumChain",t.switchEthereumChain="switchEthereumChain",t.makeEthereumJSONRPCRequest="makeEthereumJSONRPCRequest",t.watchAsset="watchAsset",t.selectProvider="selectProvider"})(XWe=Z2.Web3Method||(Z2.Web3Method={}))});var zC=b(Sn=>{"use strict";Object.defineProperty(Sn,"__esModule",{value:!0});Sn.EthereumAddressFromSignedMessageResponse=Sn.SubmitEthereumTransactionResponse=Sn.SignEthereumTransactionResponse=Sn.SignEthereumMessageResponse=Sn.isRequestEthereumAccountsResponse=Sn.SelectProviderResponse=Sn.WatchAssetReponse=Sn.RequestEthereumAccountsResponse=Sn.SwitchEthereumChainResponse=Sn.AddEthereumChainResponse=Sn.isErrorResponse=void 0;var ku=HC();function eVe(t){var e,r;return((e=t)===null||e===void 0?void 0:e.method)!==void 0&&((r=t)===null||r===void 0?void 0:r.errorMessage)!==void 0}Sn.isErrorResponse=eVe;function tVe(t){return{method:ku.Web3Method.addEthereumChain,result:t}}Sn.AddEthereumChainResponse=tVe;function rVe(t){return{method:ku.Web3Method.switchEthereumChain,result:t}}Sn.SwitchEthereumChainResponse=rVe;function nVe(t){return{method:ku.Web3Method.requestEthereumAccounts,result:t}}Sn.RequestEthereumAccountsResponse=nVe;function iVe(t){return{method:ku.Web3Method.watchAsset,result:t}}Sn.WatchAssetReponse=iVe;function oVe(t){return{method:ku.Web3Method.selectProvider,result:t}}Sn.SelectProviderResponse=oVe;function sVe(t){return t&&t.method===ku.Web3Method.requestEthereumAccounts}Sn.isRequestEthereumAccountsResponse=sVe;function aVe(t){return{method:ku.Web3Method.signEthereumMessage,result:t}}Sn.SignEthereumMessageResponse=aVe;function cVe(t){return{method:ku.Web3Method.signEthereumTransaction,result:t}}Sn.SignEthereumTransactionResponse=cVe;function uVe(t){return{method:ku.Web3Method.submitEthereumTransaction,result:t}}Sn.SubmitEthereumTransactionResponse=uVe;function lVe(t){return{method:ku.Web3Method.ethereumAddressFromSignedMessage,result:t}}Sn.EthereumAddressFromSignedMessageResponse=lVe});var VC=b(WC=>{"use strict";Object.defineProperty(WC,"__esModule",{value:!0});WC.LIB_VERSION=void 0;WC.LIB_VERSION="3.7.2"});var J2=b(Cs=>{"use strict";Object.defineProperty(Cs,"__esModule",{value:!0});Cs.getErrorCode=Cs.serializeError=Cs.standardErrors=Cs.standardErrorMessage=Cs.standardErrorCodes=void 0;var nm=Zq(),fVe=zC(),dVe=VC();Cs.standardErrorCodes=Object.freeze(Object.assign(Object.assign({},nm.errorCodes),{provider:Object.freeze(Object.assign(Object.assign({},nm.errorCodes.provider),{unsupportedChain:4902}))}));function hVe(t){return t!==void 0?(0,nm.getMessageFromCode)(t):"Unknown error"}Cs.standardErrorMessage=hVe;Cs.standardErrors=Object.freeze(Object.assign(Object.assign({},nm.ethErrors),{provider:Object.freeze(Object.assign(Object.assign({},nm.ethErrors.provider),{unsupportedChain:(t="")=>nm.ethErrors.provider.custom({code:Cs.standardErrorCodes.provider.unsupportedChain,message:`Unrecognized chain ID ${t}. Try adding the chain using wallet_addEthereumChain first.`})}))}));function pVe(t,e){let r=(0,nm.serializeError)(mVe(t),{shouldIncludeStack:!0}),n=new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");n.searchParams.set("version",dVe.LIB_VERSION),n.searchParams.set("code",r.code.toString());let i=gVe(r.data,e);return i&&n.searchParams.set("method",i),n.searchParams.set("message",r.message),Object.assign(Object.assign({},r),{docUrl:n.href})}Cs.serializeError=pVe;function mVe(t){return typeof t=="string"?{message:t,code:Cs.standardErrorCodes.rpc.internal}:(0,fVe.isErrorResponse)(t)?Object.assign(Object.assign({},t),{message:t.errorMessage,code:t.errorCode,data:{method:t.method,result:t.result}}):t}function gVe(t,e){var r;let n=(r=t)===null||r===void 0?void 0:r.method;if(n)return n;if(e!==void 0)return typeof e=="string"?e:Array.isArray(e)?e.length>0?e[0].method:void 0:e.method}function bVe(t){var e;if(typeof t=="number")return t;if(yVe(t))return(e=t.code)!==null&&e!==void 0?e:t.errorCode}Cs.getErrorCode=bVe;function yVe(t){return typeof t=="object"&&t!==null&&(typeof t.code=="number"||typeof t.errorCode=="number")}});var Ha=b(($6r,Jq)=>{typeof Object.create=="function"?Jq.exports=function(e,r){r&&(e.super_=r,e.prototype=Object.create(r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:Jq.exports=function(e,r){if(r){e.super_=r;var n=function(){};n.prototype=r.prototype,e.prototype=new n,e.prototype.constructor=e}}});var vf=b((Qq,Bpe)=>{var GC=Ab(),Nu=GC.Buffer;function Dpe(t,e){for(var r in t)e[r]=t[r]}Nu.from&&Nu.alloc&&Nu.allocUnsafe&&Nu.allocUnsafeSlow?Bpe.exports=GC:(Dpe(GC,Qq),Qq.Buffer=im);function im(t,e,r){return Nu(t,e,r)}im.prototype=Object.create(Nu.prototype);Dpe(Nu,im);im.from=function(t,e,r){if(typeof t=="number")throw new TypeError("Argument must not be a number");return Nu(t,e,r)};im.alloc=function(t,e,r){if(typeof t!="number")throw new TypeError("Argument must be a number");var n=Nu(t);return e!==void 0?typeof r=="string"?n.fill(e,r):n.fill(e):n.fill(0),n};im.allocUnsafe=function(t){if(typeof t!="number")throw new TypeError("Argument must be a number");return Nu(t)};im.allocUnsafeSlow=function(t){if(typeof t!="number")throw new TypeError("Argument must be a number");return GC.SlowBuffer(t)}});var om=b((H6r,Lpe)=>{var qpe=vf().Buffer;function KC(t,e){this._block=qpe.alloc(t),this._finalSize=e,this._blockSize=t,this._len=0}KC.prototype.update=function(t,e){typeof t=="string"&&(e=e||"utf8",t=qpe.from(t,e));for(var r=this._block,n=this._blockSize,i=t.length,o=this._len,s=0;s<i;){for(var a=o%n,c=Math.min(i-s,n-a),l=0;l<c;l++)r[a+l]=t[s+l];o+=c,s+=c,o%n===0&&this._update(r)}return this._len+=i,this};KC.prototype.digest=function(t){var e=this._len%this._blockSize;this._block[e]=128,this._block.fill(0,e+1),e>=this._finalSize&&(this._update(this._block),this._block.fill(0));var r=this._len*8;if(r<=4294967295)this._block.writeUInt32BE(r,this._blockSize-4);else{var n=(r&4294967295)>>>0,i=(r-n)/4294967296;this._block.writeUInt32BE(i,this._blockSize-8),this._block.writeUInt32BE(n,this._blockSize-4)}this._update(this._block);var o=this._hash();return t?o.toString(t):o};KC.prototype._update=function(){throw new Error("_update must be implemented by subclass")};Lpe.exports=KC});var $pe=b((z6r,Upe)=>{var vVe=Ha(),Fpe=om(),wVe=vf().Buffer,_Ve=[1518500249,1859775393,-1894007588,-899497514],xVe=new Array(80);function Q2(){this.init(),this._w=xVe,Fpe.call(this,64,56)}vVe(Q2,Fpe);Q2.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this};function EVe(t){return t<<5|t>>>27}function SVe(t){return t<<30|t>>>2}function AVe(t,e,r,n){return t===0?e&r|~e&n:t===2?e&r|e&n|r&n:e^r^n}Q2.prototype._update=function(t){for(var e=this._w,r=this._a|0,n=this._b|0,i=this._c|0,o=this._d|0,s=this._e|0,a=0;a<16;++a)e[a]=t.readInt32BE(a*4);for(;a<80;++a)e[a]=e[a-3]^e[a-8]^e[a-14]^e[a-16];for(var c=0;c<80;++c){var l=~~(c/20),d=EVe(r)+AVe(l,n,i,o)+s+e[c]+_Ve[l]|0;s=o,o=i,i=SVe(n),n=r,r=d}this._a=r+this._a|0,this._b=n+this._b|0,this._c=i+this._c|0,this._d=o+this._d|0,this._e=s+this._e|0};Q2.prototype._hash=function(){var t=wVe.allocUnsafe(20);return t.writeInt32BE(this._a|0,0),t.writeInt32BE(this._b|0,4),t.writeInt32BE(this._c|0,8),t.writeInt32BE(this._d|0,12),t.writeInt32BE(this._e|0,16),t};Upe.exports=Q2});var Wpe=b((W6r,zpe)=>{var CVe=Ha(),Hpe=om(),PVe=vf().Buffer,IVe=[1518500249,1859775393,-1894007588,-899497514],OVe=new Array(80);function Y2(){this.init(),this._w=OVe,Hpe.call(this,64,56)}CVe(Y2,Hpe);Y2.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this};function TVe(t){return t<<1|t>>>31}function RVe(t){return t<<5|t>>>27}function jVe(t){return t<<30|t>>>2}function MVe(t,e,r,n){return t===0?e&r|~e&n:t===2?e&r|e&n|r&n:e^r^n}Y2.prototype._update=function(t){for(var e=this._w,r=this._a|0,n=this._b|0,i=this._c|0,o=this._d|0,s=this._e|0,a=0;a<16;++a)e[a]=t.readInt32BE(a*4);for(;a<80;++a)e[a]=TVe(e[a-3]^e[a-8]^e[a-14]^e[a-16]);for(var c=0;c<80;++c){var l=~~(c/20),d=RVe(r)+MVe(l,n,i,o)+s+e[c]+IVe[l]|0;s=o,o=i,i=jVe(n),n=r,r=d}this._a=r+this._a|0,this._b=n+this._b|0,this._c=i+this._c|0,this._d=o+this._d|0,this._e=s+this._e|0};Y2.prototype._hash=function(){var t=PVe.allocUnsafe(20);return t.writeInt32BE(this._a|0,0),t.writeInt32BE(this._b|0,4),t.writeInt32BE(this._c|0,8),t.writeInt32BE(this._d|0,12),t.writeInt32BE(this._e|0,16),t};zpe.exports=Y2});var Yq=b((V6r,Gpe)=>{var kVe=Ha(),Vpe=om(),NVe=vf().Buffer,DVe=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],BVe=new Array(64);function X2(){this.init(),this._w=BVe,Vpe.call(this,64,56)}kVe(X2,Vpe);X2.prototype.init=function(){return this._a=1779033703,this._b=3144134277,this._c=1013904242,this._d=2773480762,this._e=1359893119,this._f=2600822924,this._g=528734635,this._h=1541459225,this};function qVe(t,e,r){return r^t&(e^r)}function LVe(t,e,r){return t&e|r&(t|e)}function FVe(t){return(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10)}function UVe(t){return(t>>>6|t<<26)^(t>>>11|t<<21)^(t>>>25|t<<7)}function $Ve(t){return(t>>>7|t<<25)^(t>>>18|t<<14)^t>>>3}function HVe(t){return(t>>>17|t<<15)^(t>>>19|t<<13)^t>>>10}X2.prototype._update=function(t){for(var e=this._w,r=this._a|0,n=this._b|0,i=this._c|0,o=this._d|0,s=this._e|0,a=this._f|0,c=this._g|0,l=this._h|0,d=0;d<16;++d)e[d]=t.readInt32BE(d*4);for(;d<64;++d)e[d]=HVe(e[d-2])+e[d-7]+$Ve(e[d-15])+e[d-16]|0;for(var h=0;h<64;++h){var m=l+UVe(s)+qVe(s,a,c)+DVe[h]+e[h]|0,g=FVe(r)+LVe(r,n,i)|0;l=c,c=a,a=s,s=o+m|0,o=i,i=n,n=r,r=m+g|0}this._a=r+this._a|0,this._b=n+this._b|0,this._c=i+this._c|0,this._d=o+this._d|0,this._e=s+this._e|0,this._f=a+this._f|0,this._g=c+this._g|0,this._h=l+this._h|0};X2.prototype._hash=function(){var t=NVe.allocUnsafe(32);return t.writeInt32BE(this._a,0),t.writeInt32BE(this._b,4),t.writeInt32BE(this._c,8),t.writeInt32BE(this._d,12),t.writeInt32BE(this._e,16),t.writeInt32BE(this._f,20),t.writeInt32BE(this._g,24),t.writeInt32BE(this._h,28),t};Gpe.exports=X2});var Zpe=b((G6r,Kpe)=>{var zVe=Ha(),WVe=Yq(),VVe=om(),GVe=vf().Buffer,KVe=new Array(64);function ZC(){this.init(),this._w=KVe,VVe.call(this,64,56)}zVe(ZC,WVe);ZC.prototype.init=function(){return this._a=3238371032,this._b=914150663,this._c=812702999,this._d=4144912697,this._e=4290775857,this._f=1750603025,this._g=1694076839,this._h=3204075428,this};ZC.prototype._hash=function(){var t=GVe.allocUnsafe(28);return t.writeInt32BE(this._a,0),t.writeInt32BE(this._b,4),t.writeInt32BE(this._c,8),t.writeInt32BE(this._d,12),t.writeInt32BE(this._e,16),t.writeInt32BE(this._f,20),t.writeInt32BE(this._g,24),t};Kpe.exports=ZC});var Xq=b((K6r,r0e)=>{var ZVe=Ha(),t0e=om(),JVe=vf().Buffer,Jpe=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],QVe=new Array(160);function ex(){this.init(),this._w=QVe,t0e.call(this,128,112)}ZVe(ex,t0e);ex.prototype.init=function(){return this._ah=1779033703,this._bh=3144134277,this._ch=1013904242,this._dh=2773480762,this._eh=1359893119,this._fh=2600822924,this._gh=528734635,this._hh=1541459225,this._al=4089235720,this._bl=2227873595,this._cl=4271175723,this._dl=1595750129,this._el=2917565137,this._fl=725511199,this._gl=4215389547,this._hl=327033209,this};function Qpe(t,e,r){return r^t&(e^r)}function Ype(t,e,r){return t&e|r&(t|e)}function Xpe(t,e){return(t>>>28|e<<4)^(e>>>2|t<<30)^(e>>>7|t<<25)}function e0e(t,e){return(t>>>14|e<<18)^(t>>>18|e<<14)^(e>>>9|t<<23)}function YVe(t,e){return(t>>>1|e<<31)^(t>>>8|e<<24)^t>>>7}function XVe(t,e){return(t>>>1|e<<31)^(t>>>8|e<<24)^(t>>>7|e<<25)}function eGe(t,e){return(t>>>19|e<<13)^(e>>>29|t<<3)^t>>>6}function tGe(t,e){return(t>>>19|e<<13)^(e>>>29|t<<3)^(t>>>6|e<<26)}function ki(t,e){return t>>>0<e>>>0?1:0}ex.prototype._update=function(t){for(var e=this._w,r=this._ah|0,n=this._bh|0,i=this._ch|0,o=this._dh|0,s=this._eh|0,a=this._fh|0,c=this._gh|0,l=this._hh|0,d=this._al|0,h=this._bl|0,m=this._cl|0,g=this._dl|0,v=this._el|0,w=this._fl|0,S=this._gl|0,C=this._hl|0,P=0;P<32;P+=2)e[P]=t.readInt32BE(P*4),e[P+1]=t.readInt32BE(P*4+4);for(;P<160;P+=2){var T=e[P-30],k=e[P-15*2+1],D=YVe(T,k),H=XVe(k,T);T=e[P-2*2],k=e[P-2*2+1];var L=eGe(T,k),z=tGe(k,T),ne=e[P-7*2],F=e[P-7*2+1],V=e[P-16*2],Y=e[P-16*2+1],j=H+F|0,y=D+ne+ki(j,H)|0;j=j+z|0,y=y+L+ki(j,z)|0,j=j+Y|0,y=y+V+ki(j,Y)|0,e[P]=y,e[P+1]=j}for(var x=0;x<160;x+=2){y=e[x],j=e[x+1];var I=Ype(r,n,i),O=Ype(d,h,m),N=Xpe(r,d),G=Xpe(d,r),K=e0e(s,v),B=e0e(v,s),A=Jpe[x],U=Jpe[x+1],me=Qpe(s,a,c),ge=Qpe(v,w,S),pe=C+B|0,we=l+K+ki(pe,C)|0;pe=pe+ge|0,we=we+me+ki(pe,ge)|0,pe=pe+U|0,we=we+A+ki(pe,U)|0,pe=pe+j|0,we=we+y+ki(pe,j)|0;var Ie=G+O|0,Te=N+I+ki(Ie,G)|0;l=c,C=S,c=a,S=w,a=s,w=v,v=g+pe|0,s=o+we+ki(v,g)|0,o=i,g=m,i=n,m=h,n=r,h=d,d=pe+Ie|0,r=we+Te+ki(d,pe)|0}this._al=this._al+d|0,this._bl=this._bl+h|0,this._cl=this._cl+m|0,this._dl=this._dl+g|0,this._el=this._el+v|0,this._fl=this._fl+w|0,this._gl=this._gl+S|0,this._hl=this._hl+C|0,this._ah=this._ah+r+ki(this._al,d)|0,this._bh=this._bh+n+ki(this._bl,h)|0,this._ch=this._ch+i+ki(this._cl,m)|0,this._dh=this._dh+o+ki(this._dl,g)|0,this._eh=this._eh+s+ki(this._el,v)|0,this._fh=this._fh+a+ki(this._fl,w)|0,this._gh=this._gh+c+ki(this._gl,S)|0,this._hh=this._hh+l+ki(this._hl,C)|0};ex.prototype._hash=function(){var t=JVe.allocUnsafe(64);function e(r,n,i){t.writeInt32BE(r,i),t.writeInt32BE(n,i+4)}return e(this._ah,this._al,0),e(this._bh,this._bl,8),e(this._ch,this._cl,16),e(this._dh,this._dl,24),e(this._eh,this._el,32),e(this._fh,this._fl,40),e(this._gh,this._gl,48),e(this._hh,this._hl,56),t};r0e.exports=ex});var i0e=b((Z6r,n0e)=>{var rGe=Ha(),nGe=Xq(),iGe=om(),oGe=vf().Buffer,sGe=new Array(160);function JC(){this.init(),this._w=sGe,iGe.call(this,128,112)}rGe(JC,nGe);JC.prototype.init=function(){return this._ah=3418070365,this._bh=1654270250,this._ch=2438529370,this._dh=355462360,this._eh=1731405415,this._fh=2394180231,this._gh=3675008525,this._hh=1203062813,this._al=3238371032,this._bl=914150663,this._cl=812702999,this._dl=4144912697,this._el=4290775857,this._fl=1750603025,this._gl=1694076839,this._hl=3204075428,this};JC.prototype._hash=function(){var t=oGe.allocUnsafe(48);function e(r,n,i){t.writeInt32BE(r,i),t.writeInt32BE(n,i+4)}return e(this._ah,this._al,0),e(this._bh,this._bl,8),e(this._ch,this._cl,16),e(this._dh,this._dl,24),e(this._eh,this._el,32),e(this._fh,this._fl,40),t};n0e.exports=JC});var s0e=b((wf,o0e)=>{var wf=o0e.exports=function(e){e=e.toLowerCase();var r=wf[e];if(!r)throw new Error(e+" is not supported (we accept pull requests)");return new r};wf.sha=$pe();wf.sha1=Wpe();wf.sha224=Zpe();wf.sha256=Yq();wf.sha384=i0e();wf.sha512=Xq()});var c0e=b((J6r,a0e)=>{"use strict";a0e.exports=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var e={},r=Symbol("test"),n=Object(r);if(typeof r=="string"||Object.prototype.toString.call(r)!=="[object Symbol]"||Object.prototype.toString.call(n)!=="[object Symbol]")return!1;var i=42;e[r]=i;for(r in e)return!1;if(typeof Object.keys=="function"&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(e).length!==0)return!1;var o=Object.getOwnPropertySymbols(e);if(o.length!==1||o[0]!==r||!Object.prototype.propertyIsEnumerable.call(e,r))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var s=Object.getOwnPropertyDescriptor(e,r);if(s.value!==i||s.enumerable!==!0)return!1}return!0}});var f0e=b((Q6r,l0e)=>{"use strict";var u0e=typeof Symbol<"u"&&Symbol,aGe=c0e();l0e.exports=function(){return typeof u0e!="function"||typeof Symbol!="function"||typeof u0e("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:aGe()}});var p0e=b((Y6r,h0e)=>{"use strict";var d0e={foo:{}},cGe=Object;h0e.exports=function(){return{__proto__:d0e}.foo===d0e.foo&&!({__proto__:null}instanceof cGe)}});var g0e=b((X6r,m0e)=>{"use strict";var uGe="Function.prototype.bind called on incompatible ",eL=Array.prototype.slice,lGe=Object.prototype.toString,fGe="[object Function]";m0e.exports=function(e){var r=this;if(typeof r!="function"||lGe.call(r)!==fGe)throw new TypeError(uGe+r);for(var n=eL.call(arguments,1),i,o=function(){if(this instanceof i){var d=r.apply(this,n.concat(eL.call(arguments)));return Object(d)===d?d:this}else return r.apply(e,n.concat(eL.call(arguments)))},s=Math.max(0,r.length-n.length),a=[],c=0;c<s;c++)a.push("$"+c);if(i=Function("binder","return function ("+a.join(",")+"){ return binder.apply(this,arguments); }")(o),r.prototype){var l=function(){};l.prototype=r.prototype,i.prototype=new l,l.prototype=null}return i}});var QC=b((e4r,b0e)=>{"use strict";var dGe=g0e();b0e.exports=Function.prototype.bind||dGe});var v0e=b((t4r,y0e)=>{"use strict";var hGe=QC();y0e.exports=hGe.call(Function.call,Object.prototype.hasOwnProperty)});var e8=b((r4r,S0e)=>{"use strict";var Wt,kb=SyntaxError,E0e=Function,Mb=TypeError,tL=function(t){try{return E0e('"use strict"; return ('+t+").constructor;")()}catch{}},sm=Object.getOwnPropertyDescriptor;if(sm)try{sm({},"")}catch{sm=null}var rL=function(){throw new Mb},pGe=sm?function(){try{return arguments.callee,rL}catch{try{return sm(arguments,"callee").get}catch{return rL}}}():rL,Rb=f0e()(),mGe=p0e()(),Ni=Object.getPrototypeOf||(mGe?function(t){return t.__proto__}:null),jb={},gGe=typeof Uint8Array>"u"||!Ni?Wt:Ni(Uint8Array),am={"%AggregateError%":typeof AggregateError>"u"?Wt:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?Wt:ArrayBuffer,"%ArrayIteratorPrototype%":Rb&&Ni?Ni([][Symbol.iterator]()):Wt,"%AsyncFromSyncIteratorPrototype%":Wt,"%AsyncFunction%":jb,"%AsyncGenerator%":jb,"%AsyncGeneratorFunction%":jb,"%AsyncIteratorPrototype%":jb,"%Atomics%":typeof Atomics>"u"?Wt:Atomics,"%BigInt%":typeof BigInt>"u"?Wt:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?Wt:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?Wt:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?Wt:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":typeof Float32Array>"u"?Wt:Float32Array,"%Float64Array%":typeof Float64Array>"u"?Wt:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?Wt:FinalizationRegistry,"%Function%":E0e,"%GeneratorFunction%":jb,"%Int8Array%":typeof Int8Array>"u"?Wt:Int8Array,"%Int16Array%":typeof Int16Array>"u"?Wt:Int16Array,"%Int32Array%":typeof Int32Array>"u"?Wt:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":Rb&&Ni?Ni(Ni([][Symbol.iterator]())):Wt,"%JSON%":typeof JSON=="object"?JSON:Wt,"%Map%":typeof Map>"u"?Wt:Map,"%MapIteratorPrototype%":typeof Map>"u"||!Rb||!Ni?Wt:Ni(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?Wt:Promise,"%Proxy%":typeof Proxy>"u"?Wt:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":typeof Reflect>"u"?Wt:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?Wt:Set,"%SetIteratorPrototype%":typeof Set>"u"||!Rb||!Ni?Wt:Ni(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?Wt:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":Rb&&Ni?Ni(""[Symbol.iterator]()):Wt,"%Symbol%":Rb?Symbol:Wt,"%SyntaxError%":kb,"%ThrowTypeError%":pGe,"%TypedArray%":gGe,"%TypeError%":Mb,"%Uint8Array%":typeof Uint8Array>"u"?Wt:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?Wt:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?Wt:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?Wt:Uint32Array,"%URIError%":URIError,"%WeakMap%":typeof WeakMap>"u"?Wt:WeakMap,"%WeakRef%":typeof WeakRef>"u"?Wt:WeakRef,"%WeakSet%":typeof WeakSet>"u"?Wt:WeakSet};if(Ni)try{null.error}catch(t){w0e=Ni(Ni(t)),am["%Error.prototype%"]=w0e}var w0e,bGe=function t(e){var r;if(e==="%AsyncFunction%")r=tL("async function () {}");else if(e==="%GeneratorFunction%")r=tL("function* () {}");else if(e==="%AsyncGeneratorFunction%")r=tL("async function* () {}");else if(e==="%AsyncGenerator%"){var n=t("%AsyncGeneratorFunction%");n&&(r=n.prototype)}else if(e==="%AsyncIteratorPrototype%"){var i=t("%AsyncGenerator%");i&&Ni&&(r=Ni(i.prototype))}return am[e]=r,r},_0e={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},tx=QC(),YC=v0e(),yGe=tx.call(Function.call,Array.prototype.concat),vGe=tx.call(Function.apply,Array.prototype.splice),x0e=tx.call(Function.call,String.prototype.replace),XC=tx.call(Function.call,String.prototype.slice),wGe=t