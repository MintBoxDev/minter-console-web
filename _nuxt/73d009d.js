/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{709:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(705);t.default=function(e){return(0,r.withParams)({type:"minLength",min:e},(function(t){return!(0,r.req)(t)||(0,r.len)(t)>=e}))}},710:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(705);t.default=function(e){return(0,r.withParams)({type:"maxLength",max:e},(function(t){return!(0,r.req)(t)||(0,r.len)(t)<=e}))}},713:function(e,t,n){"use strict";var r=n(715),o=n.n(r);t.a={bind:function(e,t,n){"TEXTAREA"===e.tagName&&n.context.$nextTick((function(){o()(e)}))},componentUpdated:function(e,t,n){"TEXTAREA"===e.tagName&&n.context.$nextTick((function(){o.a.update(e)}))},unbind:function(e){o.a.destroy(e)}}},714:function(e,t,n){"use strict";n(83);var r=n(284),o=(n(725),n(726)),c={ideFix:null,imaskAmount:{mask:Number,scale:18,signed:!1,thousandsSeparator:"",padFractionalZeros:!1,normalizeZeros:!1,radix:".",mapToRadix:[","]},directives:{imask:o.a},props:{value:{type:[String,Number],default:""}},data:function(){return{maskedValue:""}},computed:{listeners:function(){var e=this.$listeners,t=(e.input,Object(r.a)(e,["input"]));return t}},watch:{value:function(e){e!==this.maskedValue&&this.updateMaskState(e)}},mounted:function(){this.updateMaskState(this.value)},methods:{updateMaskState:function(e){this.$refs.input.maskRef.typedValue=e;var t=this.$refs.input.maskRef._value.length;this.$refs.input.maskRef._selection={start:t,end:t}},onAcceptInput:function(e){this.maskedValue=e.detail._unmaskedValue,this.$emit("input",e.detail._unmaskedValue)}}},l=n(50),component=Object(l.a)(c,(function(){var e=this.$createElement;return(this._self._c||e)("input",this._g({directives:[{name:"imask",rawName:"v-imask",value:this.$options.imaskAmount,expression:"$options.imaskAmount"}],ref:"input",attrs:{type:"text",autocapitalize:"off",inputmode:"decimal"},on:{accept:this.onAcceptInput}},this.listeners))}),[],!1,null,null,null);t.a=component.exports},715:function(e,t,n){var r,o,c;o=[e,t],void 0===(c="function"==typeof(r=function(e,t){"use strict";var n,r,map="function"==typeof Map?new Map:(n=[],r=[],{has:function(e){return n.indexOf(e)>-1},get:function(e){return r[n.indexOf(e)]},set:function(e,t){-1===n.indexOf(e)&&(n.push(e),r.push(t))},delete:function(e){var t=n.indexOf(e);t>-1&&(n.splice(t,1),r.splice(t,1))}}),o=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){o=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}function c(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!map.has(e)){var style,t=null,n=null,r=null,c=function(){e.clientWidth!==n&&m()},l=function(style){window.removeEventListener("resize",c,!1),e.removeEventListener("input",m,!1),e.removeEventListener("keyup",m,!1),e.removeEventListener("autosize:destroy",l,!1),e.removeEventListener("autosize:update",m,!1),Object.keys(style).forEach((function(t){e.style[t]=style[t]})),map.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",l,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",m,!1),window.addEventListener("resize",c,!1),e.addEventListener("input",m,!1),e.addEventListener("autosize:update",m,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",map.set(e,{destroy:l,update:m}),"vertical"===(style=window.getComputedStyle(e,null)).resize?e.style.resize="none":"both"===style.resize&&(e.style.resize="horizontal"),t="content-box"===style.boxSizing?-(parseFloat(style.paddingTop)+parseFloat(style.paddingBottom)):parseFloat(style.borderTopWidth)+parseFloat(style.borderBottomWidth),isNaN(t)&&(t=0),m()}function d(t){var n=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=n,e.style.overflowY=t}function f(){if(0!==e.scrollHeight){var r=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}(e),o=document.documentElement&&document.documentElement.scrollTop;e.style.height="",e.style.height=e.scrollHeight+t+"px",n=e.clientWidth,r.forEach((function(e){e.node.scrollTop=e.scrollTop})),o&&(document.documentElement.scrollTop=o)}}function m(){f();var t=Math.round(parseFloat(e.style.height)),n=window.getComputedStyle(e,null),c="content-box"===n.boxSizing?Math.round(parseFloat(n.height)):e.offsetHeight;if(c<t?"hidden"===n.overflowY&&(d("scroll"),f(),c="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight):"hidden"!==n.overflowY&&(d("hidden"),f(),c="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight),r!==c){r=c;var l=o("autosize:resized");try{e.dispatchEvent(l)}catch(e){}}}}function l(e){var t=map.get(e);t&&t.destroy()}function d(e){var t=map.get(e);t&&t.update()}var f=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((f=function(e){return e}).destroy=function(e){return e},f.update=function(e){return e}):((f=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],(function(e){return c(e)})),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],l),e},f.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],d),e}),t.default=f,e.exports=t.default})?r.apply(t,o):r)||(e.exports=c)},717:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(705);t.default=function(e){return(0,r.withParams)({type:"minValue",min:e},(function(t){return!(0,r.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},719:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(221),n(39),n(51),n(1);var r={};var o={inheritAttrs:!1,render:function(e){return this.svgElSource?e("svg",{on:this.$listeners,attrs:Object.assign(this.getSvgAttrs(this.svgElSource),(t=this.$attrs,Object.keys(t).reduce((function(e,n){return!1!==t[n]&&null!==t[n]&&void 0!==t[n]&&(e[n]=t[n]),e}),{}))),domProps:{innerHTML:this.getSvgContent(this.svgElSource)}}):null;var t},props:{src:{type:String,required:!0},title:{type:String},transformSource:{type:Function,default:function(svg){return svg}},keepDuringLoading:{type:Boolean,default:!0}},data:function(){return{svgElSource:null}},watch:{src:function(e){this.getSource(e)}},mounted:function(){this.getSource(this.src)},methods:{getSvgAttrs:function(e){var t={},n=e.attributes;if(!n)return t;for(var i=n.length-1;i>=0;i--)t[n[i].name]=n[i].value;return t},getSvgContent:function(e){return e=e.cloneNode(!0),e=this.transformSource(e),this.title&&function(svg,title){var e=svg.getElementsByTagName("title");if(e.length)e[0].textContent=title;else{var t=document.createElementNS("http://www.w3.org/2000/svg","title");t.textContent=title,svg.appendChild(t)}}(e,this.title),e.innerHTML},getSource:function(e){var t=this;r[e]||(r[e]=this.download(e)),this.svgElSource&&r[e].isPending()&&!this.keepDuringLoading&&(this.svgElSource=null,this.$emit("unloaded")),r[e].then((function(svg){t.svgElSource=svg,t.$nextTick((function(){t.$emit("loaded",t.$el)}))})).catch((function(n){t.svgElSource&&(t.svgElSource=null,t.$emit("unloaded")),delete r[e],t.$emit("error",n)}))},download:function(e){return function(e){if(e.isPending)return e;var t=!0,n=e.then((function(e){return t=!1,e}),(function(e){throw t=!1,e}));return n.isPending=function(){return t},n}(new Promise((function(t,n){var r=new XMLHttpRequest;r.open("GET",e,!0),r.onload=function(){if(r.status>=200&&r.status<400)try{var e=(new DOMParser).parseFromString(r.responseText,"text/xml").getElementsByTagName("svg")[0];e?t(e):n(new Error('Loaded file is not valid SVG"'))}catch(e){n(e)}else n(new Error("Error loading SVG"))},r.onerror=n,r.send()})))}}}},720:function(e,t,n){var r=n(9),o=n(425),c=n(13),l=n(30),d=n(175).onFreeze,f=Object.freeze;r({target:"Object",stat:!0,forced:c((function(){f(1)})),sham:!o},{freeze:function(e){return f&&l(e)?f(d(e)):e}})},722:function(e,t,n){"use strict";function r(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);var n=document.getSelection(),r=n.rangeCount>0&&n.getRangeAt(0);t.select(),t.selectionStart=0,t.selectionEnd=e.length;var o=document.execCommand("copy");return document.body.removeChild(t),r&&(n.removeAllRanges(),n.addRange(r)),o}function o(){return"undefined"!=typeof document&&"function"==typeof document.queryCommandSupported&&document.queryCommandSupported("copy")}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}))},786:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return v}));n(31),n(431),n(29),n(62),n(1),n(10),n(5),n(20),n(290);var r=n(116),o=n(131),c=(n(286),n(19)),l=n(430),d=n(707),f=(n(174),n(773)),m=(n(747),n(706)),h=function t(data){Object(r.a)(this,t),data=data||{};var n=[{name:"type",length:1,allowLess:!0,default:e.from([])},{name:"data",alias:"input",allowZero:!0,default:e.from([])},{name:"payload",allowZero:!0,default:e.from([])},{name:"nonce",length:32,allowLess:!0,default:e.from([])},{name:"gasPrice",length:32,allowLess:!0,default:e.from([])},{name:"gasCoin",length:10,allowLess:!0,allowNonBinaryArray:!0,default:[]}];Object(d.w)(this,n,data)};function v(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://bip.to",r=t.nonce,o=t.gasPrice,c=t.gasCoin,l=t.type,d=t.txType,data=t.data,v=t.txData,k=t.password,$={nonce:r||0===r?Object(m.c)(r):[],gasPrice:o||0===o?Object(m.c)(o):[],gasCoin:c||0===c?Object(m.c)(c):[],type:l||d,data:Object(f.b)(data||v,l||d)},C=t.message||t.payload;C&&("string"==typeof C&&(C=e.from(C,"utf-8")),$.payload=C),-1===(n=n.replace(/\/$/,"")).indexOf("://")&&(n="https://".concat(n));var w=new h($),E="".concat(n,"/tx/").concat(_(w.serialize()));return k&&(E+="?p=".concat(_(y(k)))),E}function _(e){return Object(l.fromByteArray)(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function y(t){return"string"!=typeof t||Object(c.isHexPrefixed)(t)?Object(o.toBuffer)(t):e.from(t,"utf8")}}).call(this,n(6).Buffer)},800:function(e,t,n){"use strict";n.r(t);n(31),n(1);var r=n(711),o=n(703),c=n(704),l=n.n(c),d=n(174),f=n(282),m=n(702),h=n(712),v=n(733),_={TX_TYPE:f.a,components:{TxForm:h.a,FieldQr:v.a},directives:{checkEmpty:m.a},mixins:[o.validationMixin],data:function(){return{form:{check:"",password:""}}},validations:function(){return{form:{check:{required:l.a,validCheck:d.l},password:{required:l.a}}}},methods:{clearForm:function(){this.form.check="",this.form.password="",this.$v.$reset()}}},y=n(50),k=Object(y.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("TxForm",{attrs:{txData:e.form,$txData:e.$v.form,txType:e.$options.TX_TYPE.REDEEM_CHECK},on:{"clear-form":function(t){return e.clearForm()}},scopedSlots:e._u([{key:"panel-header",fn:function(){return[n("h1",{staticClass:"panel__header-title"},[e._v("\n            "+e._s(e.$td("Redeem check","checks.redeem-title"))+"\n        ")]),e._v(" "),n("p",{staticClass:"panel__header-description"},[e._v("\n            "+e._s(e.$td("Claim a check someone has written out to you.","checks.redeem-description"))+"\n        ")])]},proxy:!0},{key:"default",fn:function(t){t.fee,t.addressBalance;return[n("div",{staticClass:"u-cell"},[n("FieldQr",{attrs:{$value:e.$v.form.check,label:e.$td("Check","form.checks-redeem-check")},model:{value:e.form.check,callback:function(t){e.$set(e.form,"check","string"==typeof t?t.trim():t)},expression:"form.check"}}),e._v(" "),e.$v.form.check.$dirty&&!e.$v.form.check.required?n("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Check","form.checks-redeem-check-error-required")))]):e.$v.form.check.$dirty&&!e.$v.form.check.validCheck?n("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Check is invalid","form.checks-redeem-check-error-invalid")))]):e._e(),e._v(" "),n("div",{staticClass:"form-field__help"},[e._v(e._s(e.$td("The identifier the issuer gave you. Starts with","form.checks-redeem-check-help"))+" "),n("strong",[e._v("Mc")])])],1),e._v(" "),n("div",{staticClass:"u-cell"},[n("label",{staticClass:"form-field",class:{"is-error":e.$v.form.password.$error}},[n("input",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"model",rawName:"v-model.trim",value:e.form.password,expression:"form.password",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{type:"text",autocapitalize:"off",spellcheck:"false"},domProps:{value:e.form.password},on:{blur:[function(t){return e.$v.form.password.$touch()},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value.trim())}}}),e._v(" "),n("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Password","form.checks-redeem-password")))])]),e._v(" "),e.$v.form.password.$dirty&&!e.$v.form.password.required?n("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter password","form.checks-redeem-password-error-required")))]):e._e()])]}},{key:"submit-title",fn:function(){return[e._v("\n        "+e._s(e.$td("Redeem","form.checks-redeem-button"))+"\n    ")]},proxy:!0},{key:"confirm-modal-header",fn:function(){return[n("h1",{staticClass:"panel__header-title"},[n("img",{staticClass:"panel__header-title-icon",attrs:{src:e.BASE_URL_PREFIX+"/img/icon-feature-check.svg",alt:"",role:"presentation",width:"40",height:"40"}}),e._v("\n            "+e._s(e.$td("Redeem check","checks.redeem-title"))+"\n        ")])]},proxy:!0}])})}),[],!1,null,null,null).exports,$=(n(41),n(40),n(22),n(84),n(94),n(51),n(10),n(5),n(43),n(20),n(23),n(42),n(2)),C=n(145),w=n(735),E=n(719),S=n(709),x=n.n(S),O=n(746),M=n(786),j=n(721),P=n(768),N=n(283),F=n(144),T=n(18),L=n(723),A=n(724),B=n(714),I=n(730),z=n(729);function R(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function V(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?R(Object(source),!0).forEach((function(t){Object($.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):R(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var D={feeBus:null,components:{QrcodeVue:w.a,InlineSvg:E.a,Modal:L.a,FieldCoin:A.a,InputMaskedAmount:B.a,InputMaskedInteger:I.a,ButtonCopyIcon:z.a},directives:{checkEmpty:m.a},mixins:[o.validationMixin],data:function(){return{isFormSending:!1,serverError:"",check:null,password:"",form:{nonce:null,dueBlock:"",value:null,coinSymbol:"",password:"",gasCoin:""},fee:{},deeplink:"",isCheckQrModalVisible:!1,isLinkQrModalVisible:!1}},validations:{form:{nonce:{required:l.a},dueBlock:{},value:{required:l.a},coinSymbol:{required:l.a,minLength:x()(3)},password:{required:l.a},gasCoin:{minLength:x()(3)}}},computed:V(V({},Object(C.b)({balance:"balance"})),{},{feeBusParams:function(){return{txType:f.a.REDEEM_CHECK,txFeeOptions:{},selectedCoinSymbol:this.form.coinSymbol,selectedFeeCoinSymbol:this.form.gasCoin,baseCoinAmount:this.$store.getters.baseCoin&&this.$store.getters.baseCoin.amount,isOffline:this.$store.getters.isOfflineMode}},deeplinkPretty:function(){return this.deeplink.replace("https://","")}}),watch:{feeBusParams:{handler:function(e){this.$options.feeBus&&"function"==typeof this.$options.feeBus.$emit&&this.$options.feeBus.$emit("update-params",e)},deep:!0}},created:function(){var e=this;this.$options.feeBus=new P.a(this.feeBusParams),this.fee=this.$options.feeBus.fee,this.$options.feeBus.$on("update-fee",(function(t){e.fee=t}))},methods:{pretty:function(e){return Object(F.j)(e,void 0,!0)},submit:function(){var e=this;if(!this.isFormSending)if(this.$v.$invalid)this.$v.$touch();else{this.check=null,this.password="",this.deeplink="",this.isFormSending=!0,this.serverError="";var t,n,r=V(V({privateKey:this.$store.getters.privateKey,chainId:this.$store.getters.CHAIN_ID},(t=this.form,n={},Object.keys(t).forEach((function(e){(t[e]||0===t[e]||!1===t[e])&&(n[e]=t[e])})),n)),{},{coin:this.form.coinSymbol,gasCoin:this.fee.coinSymbol});Promise.all([Object(j.h)(r,["gasCoin","coin"]),this.$store.dispatch("FETCH_ADDRESS_ENCRYPTED")]).then((function(){try{e.check=Object(O.b)(r),e.password=e.form.password;var t=T.p===T.q?"https://testnet.bip.to":void 0;e.deeplink=Object(M.a)({data:{check:e.check},type:f.a.REDEEM_CHECK,password:e.form.password},t),e.clearForm()}catch(t){e.serverError=Object(N.a)(t)}e.isFormSending=!1})).catch((function(t){e.isFormSending=!1,e.serverError=Object(N.a)(t)}))}},clearForm:function(){parseInt(this.form.nonce,10).toString()===this.form.nonce?this.form.nonce=(parseInt(this.form.nonce,10)+1).toString():this.form.nonce="",this.form.dueBlock="",this.form.value=null,this.form.coinSymbol="",this.form.password="",this.form.gasCoin="",this.$v.$reset()}}},Q={components:{CheckRedeemForm:k,CheckIssueForm:Object(y.a)(D,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"panel__section",attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[n("div",{staticClass:"u-grid u-grid--small u-grid--vertical-margin--small"},[n("div",{staticClass:"u-cell u-cell--medium--1-3 u-cell--xlarge--1-2"},[n("label",{staticClass:"form-field",class:{"is-error":e.$v.form.nonce.$error}},[n("input",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"model",rawName:"v-model",value:e.form.nonce,expression:"form.nonce"}],staticClass:"form-field__input",attrs:{type:"text"},domProps:{value:e.form.nonce},on:{blur:function(t){return e.$v.form.nonce.$touch()},input:function(t){t.target.composing||e.$set(e.form,"nonce",t.target.value)}}}),e._v(" "),n("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Nonce","form.checks-issue-nonce")))])]),e._v(" "),e.$v.form.nonce.$dirty&&!e.$v.form.nonce.required?n("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter nonce","form.checks-issue-nonce-error-required")))]):e._e(),e._v(" "),n("div",{staticClass:"form-field__help"},[e._v(e._s(e.$td("Check's unique ID. Used for issuing several identical checks.","form.checks-issue-nonce-help")))])]),e._v(" "),n("div",{staticClass:"u-cell u-cell--medium--1-3 u-cell--xlarge--1-4"},[n("FieldCoin",{attrs:{$value:e.$v.form.coinSymbol,label:e.$td("Coin","form.coin"),"coin-list":e.balance},model:{value:e.form.coinSymbol,callback:function(t){e.$set(e.form,"coinSymbol",t)},expression:"form.coinSymbol"}}),e._v(" "),e.$v.form.coinSymbol.$dirty&&!e.$v.form.coinSymbol.required?n("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter coin symbol","form.coin-error-required")))]):e.$v.form.coinSymbol.$dirty&&!e.$v.form.coinSymbol.minLength?n("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Min 3 letters","form.coin-error-min")))]):e._e()],1),e._v(" "),n("div",{staticClass:"u-cell u-cell--medium--1-3 u-cell--xlarge--1-4"},[n("label",{staticClass:"form-field",class:{"is-error":e.$v.form.value.$error}},[n("InputMaskedAmount",{directives:[{name:"check-empty",rawName:"v-check-empty"}],staticClass:"form-field__input",on:{blur:function(t){return e.$v.form.value.$touch()}},model:{value:e.form.value,callback:function(t){e.$set(e.form,"value",t)},expression:"form.value"}}),e._v(" "),n("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Amount","form.checks-issue-amount")))])],1),e._v(" "),e.$v.form.value.$dirty&&!e.$v.form.value.required?n("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter amount","form.amount-error-required")))]):e._e()]),e._v(" "),n("div",{staticClass:"u-cell u-cell--medium--1-3 u-cell--xlarge--1-2"},[n("label",{staticClass:"form-field",class:{"is-error":e.$v.form.password.$error}},[n("input",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"model",rawName:"v-model.trim",value:e.form.password,expression:"form.password",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{type:"text",autocapitalize:"off",spellcheck:"false"},domProps:{value:e.form.password},on:{blur:[function(t){return e.$v.form.password.$touch()},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value.trim())}}}),e._v(" "),n("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Password","form.checks-issue-pass")))])]),e._v(" "),e.$v.form.password.$dirty&&!e.$v.form.password.required?n("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter password","form.checks-issue-pass-error-required")))]):e._e()]),e._v(" "),n("div",{staticClass:"u-cell u-cell--medium--1-3 u-cell--xlarge--1-4"},[n("FieldCoin",{attrs:{$value:e.$v.form.gasCoin,label:e.$td("Coin to pay fee","form.fee"),"coin-list":e.balance},model:{value:e.form.gasCoin,callback:function(t){e.$set(e.form,"gasCoin",t)},expression:"form.gasCoin"}}),e._v(" "),e.$v.form.gasCoin.$dirty&&!e.$v.form.gasCoin.minLength?n("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Min 3 letters","form.coin-error-min")))]):this.$store.getters.isOfflineMode?n("div",{staticClass:"form-field__help"},[e._v(e._s(e.$td("Equivalent of "+e.$store.getters.COIN_NAME+" "+e.pretty(e.fee.baseCoinValue),"form.fee-help",{value:e.pretty(e.fee.baseCoinValue),coin:e.$store.getters.COIN_NAME})))]):n("div",{staticClass:"form-field__help"},[e._v("\n                "+e._s(e.fee.coinSymbol)+" "+e._s(e.pretty(e.fee.value))+"\n                "),e.fee.isBaseCoin?e._e():n("span",{staticClass:"u-display-ib"},[e._v("("+e._s(e.$store.getters.COIN_NAME)+" "+e._s(e.pretty(e.fee.baseCoinValue))+")")]),e._v(" "),n("br"),e._v("\n                "+e._s(e.$td("Default:","form.help-default"))+" "+e._s(e.fee.isBaseCoinEnough?e.$store.getters.COIN_NAME:e.$td("same as coin to transfer","form.wallet-send-fee-same"))+"\n            ")])],1),e._v(" "),n("div",{staticClass:"u-cell u-cell--medium--1-3 u-cell--xlarge--1-4"},[n("label",{staticClass:"form-field",class:{"is-error":e.$v.form.dueBlock.$error}},[n("InputMaskedInteger",{directives:[{name:"check-empty",rawName:"v-check-empty"}],staticClass:"form-field__input",on:{blur:function(t){return e.$v.form.dueBlock.$touch()}},model:{value:e.form.dueBlock,callback:function(t){e.$set(e.form,"dueBlock",t)},expression:"form.dueBlock"}}),e._v(" "),n("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Due block","form.checks-issue-due")))])],1),e._v(" "),n("div",{staticClass:"form-field__help"},[e._v("\n                "+e._s(e.$td("Default:","form.help-default"))+" 999999999\n            ")])]),e._v(" "),n("div",{staticClass:"u-cell"},[n("button",{staticClass:"button button--main button--full",class:{"is-disabled":e.$v.$invalid}},[e._v(e._s(e.$td("Issue","form.checks-issue-button")))]),e._v(" "),e.serverError?n("div",{staticClass:"form-field__error"},[e._v(e._s(e.serverError))]):e._e()]),e._v(" "),e.check?n("div",{staticClass:"u-cell"},[n("dl",[n("dt",[e._v(e._s(e.$td("Signed check:","form.checks-issue-result-check")))]),e._v(" "),n("dd",{staticClass:"u-icon-wrap"},[n("span",{staticClass:"u-select-all u-icon-text"},[e._v("\n                        "+e._s(e.check)+"\n                    ")]),e._v(" "),n("ButtonCopyIcon",{staticClass:"u-icon--copy--right",attrs:{"copy-text":e.check}}),e._v(" "),n("button",{staticClass:"u-icon u-icon--qr--right u-semantic-button link--opacity",on:{click:function(t){e.isCheckQrModalVisible=!0}}},[n("InlineSvg",{attrs:{src:e.BASE_URL_PREFIX+"/img/icon-qr.svg",width:"24",height:"24"}})],1)],1),e._v(" "),n("dt",[e._v(e._s(e.$td("Password:","form.checks-issue-result-pass")))]),e._v(" "),n("dd",{staticClass:"u-select-all"},[e._v(e._s(e.password))]),e._v(" "),n("dt",[e._v("\n                    "+e._s(e.$td("Link to redeem:","form.checks-issue-result-link"))+" "),n("br"),e._v(" "),n("span",{staticClass:"u-emoji"},[e._v("⚠️")]),e._v(" "+e._s(e.$td("Warning! Password included in the link. Send the link only directly to the recipient.","form.checks-issue-result-link-warning"))+"\n                ")]),e._v(" "),n("dd",{staticClass:"u-icon-wrap"},[n("span",{staticClass:"u-select-all u-icon-text u-text-break-all"},[n("a",{staticClass:"link--main link--hover",attrs:{href:e.deeplink,target:"_blank"}},[e._v(e._s(e.deeplinkPretty))])]),e._v(" "),n("ButtonCopyIcon",{staticClass:"u-icon--copy--right",attrs:{"copy-text":e.deeplink}}),e._v(" "),n("button",{staticClass:"u-icon u-icon--qr--right u-semantic-button link--opacity",on:{click:function(t){e.isLinkQrModalVisible=!0}}},[n("InlineSvg",{attrs:{src:e.BASE_URL_PREFIX+"/img/icon-qr.svg",width:"24",height:"24"}})],1)],1)])]):e._e()]),e._v(" "),n("Modal",{staticClass:"qr-modal",attrs:{isOpen:e.isCheckQrModalVisible},on:{"update:isOpen":function(t){e.isCheckQrModalVisible=t},"update:is-open":function(t){e.isCheckQrModalVisible=t}}},[n("QrcodeVue",{staticClass:"qr-modal__layer",attrs:{value:e.check,size:280,level:"L"}})],1),e._v(" "),n("Modal",{staticClass:"qr-modal",attrs:{isOpen:e.isLinkQrModalVisible},on:{"update:isOpen":function(t){e.isLinkQrModalVisible=t},"update:is-open":function(t){e.isLinkQrModalVisible=t}}},[n("QrcodeVue",{staticClass:"qr-modal__layer",attrs:{value:e.deeplink,size:280,level:"L"}})],1)],1)}),[],!1,null,null,null).exports},fetch:function(e){var t=e.app;return e.store.commit("SET_SECTION_NAME",t.$td("Checks","common.page-checks")),Promise.resolve()},head:function(){var title=Object(r.a)(this.$store.state.sectionName,this.$i18n.locale),e=this.$td("Issue a check that will later be redeemed by the person of your choice or claim a check someone has written out to you.","checks.seo-description"),t="en"===this.$i18n.locale?"":"-"+this.$i18n.locale;return{title:title,meta:[{hid:"og-title",name:"og:title",content:title},{hid:"description",name:"description",content:e},{hid:"og-description",name:"og:description",content:e},{hid:"og-image",name:"og:image",content:"".concat(this.BASE_URL_PREFIX,"/img/social-share-checks").concat(t,".png")}]}}},H=Object(y.a)(Q,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"u-section u-container"},[n("CheckRedeemForm"),e._v(" "),n("div",{staticClass:"panel"},[n("div",{staticClass:"panel__header"},[n("h1",{staticClass:"panel__header-title"},[e._v("\n                "+e._s(e.$td("Issue check","checks.issue-title"))+"\n            ")]),e._v(" "),n("p",{staticClass:"panel__header-description"},[e._v("\n                "+e._s(e.$td("Issue a check that will later be redeemed by the person of your choice.","checks.issue-description"))+"\n            ")])]),e._v(" "),n("CheckIssueForm")],1)],1)}),[],!1,null,null,null);t.default=H.exports}}]);