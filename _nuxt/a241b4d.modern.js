(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1105:function(e,t,r){"use strict";r.r(t);r(21);var l=r(679),o=r(26),n=(r(123),r(124)),d=r(669),c=r(670),m=r.n(c),h=r(704),f=r.n(h),_=r(676),v=r.n(_),$=r(685),w=r.n($),y=r(696),x=r.n(y),C=r(872),T=r.n(C),E=r(3),P=r(64),k=r(683),M=r(668),O=(r(261),r(81)),I=r(678),L=r(686),S=r(698);function j(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function D(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var N={prettyRound:O.x,TX_TYPE:E.a,MULTISIG_WEIGHT_MIN:0,MULTISIG_WEIGHT_MAX:1023,components:{TxForm:I.a,FieldDomain:L.a,ButtonCopy:S.a},directives:{autosize:k.a,checkEmpty:M.a},mixins:[d.validationMixin],data(){return{form:{addressList:[{address:this.$store.getters.address,weight:""},{address:"",weight:""}],threshold:""},isAddressDomainResolving:!1,successTx:null}},validations(){return{form:{addressList:{required:m.a,minLength:v()(1),maxLength:w()(32),$each:{address:{required:m.a,validAddress:this.isAddressDomainResolving?()=>new Promise((()=>0)):P.l},weight:{required:m.a,minValue:f()(0),maxValue:x()(1023),integer:T.a}}},threshold:{required:m.a,maxValue:x()(this.weightSum),minValue:f()(this.weightMin)}}}},computed:D(D({},Object(n.b)({balance:"balance"})),{},{multisigData(){var e={addresses:[],weights:[],threshold:this.form.threshold};return this.form.addressList.forEach((t=>{e.addresses.push(t.address),e.weights.push(t.weight)})),e},weightSum(){return this.multisigData.weights.reduce(((e,t)=>Number(e)+Number(t)))||""},weightMin(){return this.multisigData.weights.reduce(((e,t)=>t?Number(e)<Number(t)?Number(e):Number(t):e))||0},createdMultisig(){return this.successTx?"Mx".concat(this.successTx.tags["tx.created_multisig"]):""}}),methods:{getExplorerTxUrl:O.k,addParticipant(){this.form.addressList.push({address:"",weight:""})},removeParticipant(e){this.form.addressList.splice(e,1)},clearForm(){this.form.addressList=[{address:this.$store.getters.address,weight:""},{address:"",weight:""}],this.form.threshold="",this.$v.$reset()}}},A=r(44),R=Object(A.a)(N,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("TxForm",{attrs:{txData:e.multisigData,$txData:e.$v.form,txType:e.$options.TX_TYPE.CREATE_MULTISIG},on:{"clear-form":function(t){return e.clearForm()},"success-tx":function(t){e.successTx=t}},scopedSlots:e._u([{key:"panel-header",fn:function(){return[r("h1",{staticClass:"panel__header-title"},[e._v("\n            "+e._s(e.$td("Create multisig address","multisig.create-title"))+"\n        ")])]},proxy:!0},{key:"extra-panel",fn:function(){return e._l(e.$v.form.addressList.$each.$iter,(function(t,l){return r("div",{key:l,staticClass:"panel__section panel__section--medium"},[r("div",{staticClass:"multisig-participant u-grid u-grid--small u-grid--vertical-margin--small"},[r("div",{staticClass:"multisig-participant__number-cell u-cell"},[r("label",{staticClass:"form-field form-field--dashed"},[r("input",{staticClass:"form-field__input is-not-empty",attrs:{type:"text",readonly:""},domProps:{value:"#"+(Number(l)+1)}})])]),e._v(" "),r("div",{staticClass:"multisig-participant__address-cell u-cell u-cell--small--3-4"},[r("FieldDomain",{attrs:{$value:t.address,valueType:"address",label:e.$td("Address or domain","form.multisig-create-address")},on:{"update:resolving":function(t){e.isAddressDomainResolving=t}},model:{value:t.address.$model,callback:function(r){e.$set(t.address,"$model","string"==typeof r?r.trim():r)},expression:"v.address.$model"}})],1),e._v(" "),r("div",{staticClass:"multisig-participant__weight-cell u-cell u-cell--small--1-4"},[r("label",{staticClass:"form-field",class:{"is-error":t.weight.$error}},[r("input",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"model",rawName:"v-model.trim",value:t.weight.$model,expression:"v.weight.$model",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{type:"text"},domProps:{value:t.weight.$model},on:{blur:[function(e){return t.weight.$touch()},function(t){return e.$forceUpdate()}],input:function(r){r.target.composing||e.$set(t.weight,"$model",r.target.value.trim())}}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Weight","form.multisig-create-weight")))])]),e._v(" "),t.weight.$dirty&&!t.weight.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter weight","form.multisig-create-weight-error-required")))]):t.weight.$dirty&&!t.weight.integer?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Weight must be integer","form.multisig-create-weight-error-integer")))]):t.weight.$dirty&&!t.weight.maxValue?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Maximum weight:","form.multisig-create-weight-error-max"))+" "+e._s(e.$options.MULTISIG_WEIGHT_MAX))]):t.weight.$dirty&&!t.weight.minValue?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Minimum weight:","form.multisig-create-weight-error-min"))+" "+e._s(e.$options.MULTISIG_WEIGHT_MIN))]):e._e()]),e._v(" "),r("div",{staticClass:"multisig-participant__remove-cell u-cell"},[l>0?r("button",{staticClass:"multisig-participant__remove u-semantic-button link--opacity",attrs:{type:"button"},on:{click:function(t){return e.removeParticipant(l)}}},[r("img",{attrs:{src:e.BASE_URL_PREFIX+"/img/icon-remove.svg",alt:"Remove address"}})]):e._e()])])])}))},proxy:!0},{key:"default",fn:function(t){t.fee,t.addressBalance;return[r("div",{staticClass:"u-cell u-cell--xlarge--1-4 u-cell--large--1-2"},[r("button",{staticClass:"button button--ghost-main button--full",class:{"is-disabled":e.form.addressList.length>=32},attrs:{type:"button"},on:{click:e.addParticipant}},[r("span",{staticClass:"button__content"},[e._v(e._s(e.$td("+ Add More","form.multisig-create-add-participant")))])])]),e._v(" "),r("div",{staticClass:"u-cell u-cell--xlarge--1-4 u-hidden-xlarge-down"}),e._v(" "),r("div",{staticClass:"u-cell u-cell--small--1-2 u-cell--large--1-4"},[r("label",{staticClass:"form-field",class:{"is-error":e.$v.form.threshold.$error}},[r("input",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"model",rawName:"v-model.trim",value:e.form.threshold,expression:"form.threshold",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{type:"text"},domProps:{value:e.form.threshold},on:{blur:[function(t){return e.$v.form.threshold.$touch()},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.form,"threshold",t.target.value.trim())}}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Threshold","form.multisig-create-threshold")))])]),e._v(" "),e.$v.form.threshold.$dirty&&!e.$v.form.threshold.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter threshold","form.multisig-create-threshold-error-required")))]):e.$v.form.threshold.$dirty&&!e.$v.form.threshold.maxValue?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Should be greater or equal than Weights Sum","form.multisig-create-threshold-error-max")))]):e.$v.form.threshold.$dirty&&!e.$v.form.threshold.minValue?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Should be less or equal than minimal Weight:","form.multisig-create-threshold-error-min"))+" "+e._s(e.weightMin))]):e._e()]),e._v(" "),r("div",{staticClass:"u-cell u-cell--small--1-2 u-cell--large--1-4"},[r("label",{staticClass:"form-field form-field--dashed"},[r("input",{directives:[{name:"check-empty",rawName:"v-check-empty"}],staticClass:"form-field__input",attrs:{type:"text",readonly:""},domProps:{value:e.$options.prettyRound(e.weightSum)}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Total weights sum","form.multisig-create-weight-sum")))])])])]}},{key:"submit-title",fn:function(){return[e._v("\n        "+e._s(e.$td("Create multisig","form.multisig-create-submit"))+"\n    ")]},proxy:!0},{key:"confirm-modal-header",fn:function(){return[r("h1",{staticClass:"panel__header-title"},[r("img",{staticClass:"panel__header-title-icon",attrs:{src:e.BASE_URL_PREFIX+"/img/icon-feature-multisignature.svg",alt:"",role:"presentation",width:"40",height:"40"}}),e._v("\n            "+e._s(e.$td("Create multisig address","multisig.create-title"))+"\n        ")])]},proxy:!0},{key:"success-modal-header",fn:function(){return[r("h1",{staticClass:"panel__header-title"},[r("img",{staticClass:"panel__header-title-icon",attrs:{src:e.BASE_URL_PREFIX+"/img/icon-feature-multisignature.svg",alt:"",role:"presentation",width:"40",height:"40"}}),e._v("\n            "+e._s(e.$td("Multisig address created","multisig.success-title"))+"\n        ")])]},proxy:!0},e.successTx?{key:"success-modal-body",fn:function(){return[r("div",{staticClass:"u-grid u-grid--small u-grid--vertical-margin"},[r("div",{staticClass:"u-cell"},[r("label",{staticClass:"form-field form-field--dashed"},[r("textarea",{directives:[{name:"autosize",rawName:"v-autosize"}],staticClass:"form-field__input is-not-empty",attrs:{autocapitalize:"off",spellcheck:"false",readonly:"",tabindex:"-1",rows:"1"},domProps:{value:e.createdMultisig}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Your multisig address","multisig.success-address")))])])])])]},proxy:!0}:null,e.successTx?{key:"success-modal-button",fn:function(){return[r("ButtonCopy",{staticClass:"button button--main button--full",attrs:{"copy-text":e.createdMultisig}},[r("img",{staticClass:"button__icon button__icon--full",attrs:{src:e.BASE_URL_PREFIX+"/img/icon-copy.svg",width:"24",height:"24",alt:"",role:"presentation"}}),e._v("\n            "+e._s(e.$td("Copy","common.copy"))+"\n        ")]),e._v(" "),r("a",{staticClass:"button button--ghost-main button--full",attrs:{href:e.getExplorerTxUrl(e.successTx.hash),target:"_blank"}},[e._v("\n            "+e._s(e.$td("View transaction","form.success-view-button"))+"\n        ")])]},proxy:!0}:null],null,!0)})}),[],!1,null,null,null).exports;function U(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function F(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?U(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):U(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var G={prettyRound:O.x,TX_TYPE:E.a,MULTISIG_WEIGHT_MIN:0,MULTISIG_WEIGHT_MAX:1023,components:{TxForm:I.a,FieldDomain:L.a},directives:{autosize:k.a,checkEmpty:M.a},mixins:[d.validationMixin],data(){return{form:{addressList:[{address:this.$store.getters.address,weight:""},{address:"",weight:""}],threshold:""},isAddressDomainResolving:!1,successTx:null}},validations(){return{form:{addressList:{required:m.a,minLength:v()(1),maxLength:w()(32),$each:{address:{required:m.a,validAddress:this.isAddressDomainResolving?()=>new Promise((()=>0)):P.l},weight:{required:m.a,minValue:f()(0),maxValue:x()(1023),integer:T.a}}},threshold:{required:m.a,maxValue:x()(this.weightSum),minValue:f()(this.weightMin)}}}},computed:F(F({},Object(n.b)({balance:"balance"})),{},{multisigData(){var e={addresses:[],weights:[],threshold:this.form.threshold};return this.form.addressList.forEach((t=>{e.addresses.push(t.address),e.weights.push(t.weight)})),e},weightSum(){return this.multisigData.weights.reduce(((e,t)=>Number(e)+Number(t)))||""},weightMin(){return this.multisigData.weights.reduce(((e,t)=>t?Number(e)<Number(t)?Number(e):Number(t):e))||0}}),methods:{getExplorerTxUrl:O.k,addParticipant(){this.form.addressList.push({address:"",weight:""})},removeParticipant(e){this.form.addressList.splice(e,1)},clearForm(){this.form.addressList=[{address:this.$store.getters.address,weight:""},{address:"",weight:""}],this.form.threshold="",this.$v.$reset()}}},V={components:{MultisigCreateForm:R,MultisigEditForm:Object(A.a)(G,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("TxForm",{attrs:{txData:e.multisigData,$txData:e.$v.form,txType:e.$options.TX_TYPE.EDIT_MULTISIG,alwaysAdvanced:!0},on:{"clear-form":function(t){return e.clearForm()},"success-tx":function(t){e.successTx=t}},scopedSlots:e._u([{key:"panel-header",fn:function(){return[r("h1",{staticClass:"panel__header-title"},[e._v("\n            "+e._s(e.$td("Edit multisig","multisig.edit-title"))+"\n        ")])]},proxy:!0},{key:"extra-panel",fn:function(){return e._l(e.$v.form.addressList.$each.$iter,(function(t,l){return r("div",{key:l,staticClass:"panel__section panel__section--medium"},[r("div",{staticClass:"multisig-participant u-grid u-grid--small u-grid--vertical-margin--small"},[r("div",{staticClass:"multisig-participant__number-cell u-cell"},[r("label",{staticClass:"form-field form-field--dashed"},[r("input",{staticClass:"form-field__input is-not-empty",attrs:{type:"text",readonly:""},domProps:{value:"#"+(Number(l)+1)}})])]),e._v(" "),r("div",{staticClass:"multisig-participant__address-cell u-cell u-cell--small--3-4"},[r("FieldDomain",{attrs:{$value:t.address,valueType:"address",label:e.$td("Address or domain","form.multisig-create-address")},on:{"update:resolving":function(t){e.isAddressDomainResolving=t}},model:{value:t.address.$model,callback:function(r){e.$set(t.address,"$model","string"==typeof r?r.trim():r)},expression:"v.address.$model"}})],1),e._v(" "),r("div",{staticClass:"multisig-participant__weight-cell u-cell u-cell--small--1-4"},[r("label",{staticClass:"form-field",class:{"is-error":t.weight.$error}},[r("input",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"model",rawName:"v-model.trim",value:t.weight.$model,expression:"v.weight.$model",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{type:"text"},domProps:{value:t.weight.$model},on:{blur:[function(e){return t.weight.$touch()},function(t){return e.$forceUpdate()}],input:function(r){r.target.composing||e.$set(t.weight,"$model",r.target.value.trim())}}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Weight","form.multisig-create-weight")))])]),e._v(" "),t.weight.$dirty&&!t.weight.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter weight","form.multisig-create-weight-error-required")))]):t.weight.$dirty&&!t.weight.integer?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Weight must be integer","form.multisig-create-weight-error-integer")))]):t.weight.$dirty&&!t.weight.maxValue?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Maximum weight:","form.multisig-create-weight-error-max"))+" "+e._s(e.$options.MULTISIG_WEIGHT_MAX))]):t.weight.$dirty&&!t.weight.minValue?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Minimum weight:","form.multisig-create-weight-error-min"))+" "+e._s(e.$options.MULTISIG_WEIGHT_MIN))]):e._e()]),e._v(" "),r("div",{staticClass:"multisig-participant__remove-cell u-cell"},[l>0?r("button",{staticClass:"multisig-participant__remove u-semantic-button link--opacity",attrs:{type:"button"},on:{click:function(t){return e.removeParticipant(l)}}},[r("img",{attrs:{src:e.BASE_URL_PREFIX+"/img/icon-remove.svg",alt:"Remove address"}})]):e._e()])])])}))},proxy:!0},{key:"default",fn:function(t){t.fee,t.addressBalance;return[r("div",{staticClass:"u-cell u-cell--xlarge--1-4 u-cell--large--1-2"},[r("button",{staticClass:"button button--ghost-main button--full",class:{"is-disabled":e.form.addressList.length>=32},attrs:{type:"button"},on:{click:e.addParticipant}},[r("span",{staticClass:"button__content"},[e._v(e._s(e.$td("+ Add More","form.multisig-create-add-participant")))])])]),e._v(" "),r("div",{staticClass:"u-cell u-cell--xlarge--1-4 u-hidden-xlarge-down"}),e._v(" "),r("div",{staticClass:"u-cell u-cell--small--1-2 u-cell--large--1-4"},[r("label",{staticClass:"form-field",class:{"is-error":e.$v.form.threshold.$error}},[r("input",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"model",rawName:"v-model.trim",value:e.form.threshold,expression:"form.threshold",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{type:"text"},domProps:{value:e.form.threshold},on:{blur:[function(t){return e.$v.form.threshold.$touch()},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.form,"threshold",t.target.value.trim())}}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Threshold","form.multisig-create-threshold")))])]),e._v(" "),e.$v.form.threshold.$dirty&&!e.$v.form.threshold.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter threshold","form.multisig-create-threshold-error-required")))]):e.$v.form.threshold.$dirty&&!e.$v.form.threshold.maxValue?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Should be greater or equal than Weights Sum","form.multisig-create-threshold-error-max")))]):e.$v.form.threshold.$dirty&&!e.$v.form.threshold.minValue?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Should be less or equal than minimal Weight:","form.multisig-create-threshold-error-min"))+" "+e._s(e.weightMin))]):e._e()]),e._v(" "),r("div",{staticClass:"u-cell u-cell--small--1-2 u-cell--large--1-4"},[r("label",{staticClass:"form-field form-field--dashed"},[r("input",{directives:[{name:"check-empty",rawName:"v-check-empty"}],staticClass:"form-field__input",attrs:{type:"text",readonly:""},domProps:{value:e.$options.prettyRound(e.weightSum)}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Total weights sum","form.multisig-create-weight-sum")))])])])]}},{key:"submit-title",fn:function(){return[e._v("\n        "+e._s(e.$td("Edit multisig","form.multisig-edit-submit"))+"\n    ")]},proxy:!0},{key:"confirm-modal-header",fn:function(){return[r("h1",{staticClass:"panel__header-title"},[r("img",{staticClass:"panel__header-title-icon",attrs:{src:e.BASE_URL_PREFIX+"/img/icon-feature-multisignature.svg",alt:"",role:"presentation",width:"40",height:"40"}}),e._v("\n            "+e._s(e.$td("Edit multisig address","multisig.edit-title"))+"\n        ")])]},proxy:!0}])})}),[],!1,null,null,null).exports},fetch(e){var{app:t,store:r}=e;return r.commit("SET_SECTION_NAME",t.$td("Multisig address","common.page-multisig")),Promise.resolve()},head(){var title=Object(l.a)(this.$store.state.sectionName,this.$i18n.locale),e=this.$td("Create multisignature address.","multisig.seo-description");"en"===this.$i18n.locale||this.$i18n.locale;return{title:title,meta:[{hid:"og-title",name:"og:title",content:title},{hid:"description",name:"description",content:e},{hid:"og-description",name:"og:description",content:e}]}}},W=Object(A.a)(V,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"u-section u-container"},[r("MultisigCreateForm"),e._v(" "),r("MultisigEditForm")],1)}),[],!1,null,null,null);t.default=W.exports},696:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(702);t.default=function(e){return(0,l.withParams)({type:"maxValue",max:e},(function(t){return!(0,l.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},872:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=(0,r(702).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=l}}]);