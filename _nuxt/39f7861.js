(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{714:function(e,t,r){"use strict";r(83);var o=r(284),n=(r(725),r(726)),l={ideFix:null,imaskAmount:{mask:Number,scale:18,signed:!1,thousandsSeparator:"",padFractionalZeros:!1,normalizeZeros:!1,radix:".",mapToRadix:[","]},directives:{imask:n.a},props:{value:{type:[String,Number],default:""}},data:function(){return{maskedValue:""}},computed:{listeners:function(){var e=this.$listeners,t=(e.input,Object(o.a)(e,["input"]));return t}},watch:{value:function(e){e!==this.maskedValue&&this.updateMaskState(e)}},mounted:function(){this.updateMaskState(this.value)},methods:{updateMaskState:function(e){this.$refs.input.maskRef.typedValue=e;var t=this.$refs.input.maskRef._value.length;this.$refs.input.maskRef._selection={start:t,end:t}},onAcceptInput:function(e){this.maskedValue=e.detail._unmaskedValue,this.$emit("input",e.detail._unmaskedValue)}}},m=r(50),component=Object(m.a)(l,(function(){var e=this.$createElement;return(this._self._c||e)("input",this._g({directives:[{name:"imask",rawName:"v-imask",value:this.$options.imaskAmount,expression:"$options.imaskAmount"}],ref:"input",attrs:{type:"text",autocapitalize:"off",inputmode:"decimal"},on:{accept:this.onAcceptInput}},this.listeners))}),[],!1,null,null,null);t.a=component.exports},736:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(705);t.default=function(e){return(0,o.withParams)({type:"maxValue",max:e},(function(t){return!(0,o.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},796:function(e,t,r){"use strict";r.r(t);r(31),r(1);var o=r(711),n=(r(39),r(703)),l=r(704),m=r.n(l),c=r(717),f=r.n(c),_=r(736),d=r.n(_),v=r(709),$=r.n(v),y=r(710),h=r.n(y),C=r(285),x=r.n(C),R=r(753),k=r(177),E=r(282),A=r(147),M=r(702),N=r(144),I=r(712),w=r(740),P=r(714),S=x()({type:"coinName"},(function(e){return/^[A-Z0-9]{3,10}$/.test(e)})),O=x()({type:"constantReserveRatio"},(function(e){var t=parseInt(e,10);return 10<=t&&100>=t}));var T={ideFix:!0,TX_TYPE:E.a,MIN_CREATE_RESERVE:1e4,MIN_PRICE:0,MIN_SUPPLY:0,COIN_MIN_MAX_SUPPLY:k.c,COIN_MAX_MAX_SUPPLY:k.b,maskCrr:{allowDecimalPadding:!1,decimalPlaces:0,digitGroupSeparator:"",emptyInputBehavior:"null",currencySymbol:" %",currencySymbolPlacement:"s",minimumValue:10,maximumValue:100,overrideMinMaxLimits:"ignore",unformatOnHover:!1,wheelStep:1},prettyRound:N.o,prettyPreciseFloor:N.n,prettyExact:N.k,prettyExactDecrease:N.l,components:{VueAutonumeric:R.a,TxForm:I.a,InputUppercase:w.a,InputMaskedAmount:P.a},directives:{checkEmpty:M.a},mixins:[n.validationMixin],data:function(){return{form:{name:"",symbol:"",initialAmount:"",constantReserveRatio:null,initialReserve:"",maxSupply:""}}},validations:function(){return{form:{name:{required:m.a,maxLength:h()(64)},symbol:{required:m.a,minLength:$()(3),maxLength:h()(10),name:S},initialAmount:{required:m.a,minValue:f()(1),maxValue:d()(this.form.maxSupply||k.b)},constantReserveRatio:{required:m.a,between:O},initialReserve:{required:m.a,minValue:f()(1e4)},maxSupply:{minValue:this.form.maxSupply?f()(k.c):function(){return!0},maxValue:this.form.maxSupply?d()(k.b):function(){return!0}}},coinPrice:{}}},computed:{coinPrice:function(){return form=this.form,(e=Object(A.a)(function(form){return{supply:form.initialAmount,reserve:form.initialReserve,crr:form.constantReserveRatio/100}}(form),1))>=0?e:0;var form,e}},methods:{clearForm:function(){this.form.name="",this.form.symbol="",this.form.initialAmount="",this.form.constantReserveRatio=null,this.form.initialReserve="",this.form.maxSupply="",this.$v.$reset()}}},L=r(50),V=Object(L.a)(T,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("TxForm",{attrs:{txData:e.form,$txData:e.$v.form,txType:e.$options.TX_TYPE.CREATE_COIN},on:{"clear-form":function(t){return e.clearForm()}},scopedSlots:e._u([{key:"panel-header",fn:function(){return[r("h1",{staticClass:"panel__header-title"},[e._v("\n                "+e._s(e.$td("Create coin","coiner.create-title"))+"\n            ")]),e._v(" "),r("p",{staticClass:"panel__header-description"},[e._v("\n                "+e._s(e.$td("Create your own coin from scratch. It is completely up to you to decide what role it will play — that of a currency, a security, a utility token, a right, a vote, or something else.","coiner.create-description"))+"\n            ")])]},proxy:!0},{key:"default",fn:function(t){t.fee,t.addressBalance;return[r("div",{staticClass:"u-cell u-cell--medium--1-2"},[r("label",{staticClass:"form-field",class:{"is-error":e.$v.form.name.$error}},[r("input",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"model",rawName:"v-model.trim",value:e.form.name,expression:"form.name",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{type:"text"},domProps:{value:e.form.name},on:{blur:[function(t){return e.$v.form.name.$touch()},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value.trim())}}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Coin name","form.coiner-create-name")))])]),e._v(" "),e.$v.form.name.$dirty&&!e.$v.form.name.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter coin name","form.coiner-create-name-error-required")))]):e._e(),e._v(" "),e.$v.form.name.$dirty&&!e.$v.form.name.maxLength?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Max 64 letters","form.coiner-create-name-error-max")))]):e._e(),e._v(" "),r("div",{staticClass:"form-field__help",domProps:{innerHTML:e._s(e.$td("The full name of your coin (for example, <strong>Bitcoin</strong>). Arbitrary string up to 64 letters long.","form.coiner-create-name-help"))}})]),e._v(" "),r("div",{staticClass:"u-cell u-cell--medium--1-2"},[r("label",{staticClass:"form-field",class:{"is-error":e.$v.form.symbol.$error}},[r("InputUppercase",{directives:[{name:"check-empty",rawName:"v-check-empty"}],staticClass:"form-field__input",attrs:{type:"text",autocapitalize:"off",spellcheck:"false"},on:{blur:function(t){return e.$v.form.symbol.$touch()}},model:{value:e.form.symbol,callback:function(t){e.$set(e.form,"symbol","string"==typeof t?t.trim():t)},expression:"form.symbol"}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Coin symbol","form.coiner-create-symbol")))])],1),e._v(" "),e.$v.form.symbol.$dirty&&!e.$v.form.symbol.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter coin symbol","form.coiner-create-symbol-error-required")))]):e._e(),e._v(" "),e.$v.form.symbol.$dirty&&!e.$v.form.symbol.minLength?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Min 3 letters","form.coin-error-min")))]):e._e(),e._v(" "),e.$v.form.symbol.$dirty&&!e.$v.form.symbol.maxLength?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Max 10 letters","form.coin-error-max")))]):e._e(),e._v(" "),e.$v.form.symbol.$dirty&&!e.$v.form.symbol.name?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Invalid coin ticker","form.coin-error-name")))]):e._e(),e._v(" "),r("div",{staticClass:"form-field__help",domProps:{innerHTML:e._s(e.$td("Ticker symbol (for example, <strong>BTC</strong>). Must be unique, alphabetic, uppercase, and 3 to 10 symbols long.","form.coiner-create-symbol-help"))}})]),e._v(" "),r("div",{staticClass:"u-cell u-cell--medium--1-2"},[r("label",{staticClass:"form-field",class:{"is-error":e.$v.form.initialAmount.$error}},[r("InputMaskedAmount",{directives:[{name:"check-empty",rawName:"v-check-empty"}],staticClass:"form-field__input",attrs:{type:"text",inputmode:"decimal"},on:{blur:function(t){return e.$v.form.initialAmount.$touch()}},model:{value:e.form.initialAmount,callback:function(t){e.$set(e.form,"initialAmount",t)},expression:"form.initialAmount"}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Initial amount","form.coiner-create-amount")))])],1),e._v(" "),e.$v.form.initialAmount.$dirty&&!e.$v.form.initialAmount.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter amount","form.amount-error-required")))]):e.$v.form.initialAmount.$dirty&&!e.$v.form.initialAmount.minValue?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Min amount is 1","form.coiner-create-amount-error-min")))]):e.$v.form.initialAmount.$dirty&&!e.$v.form.initialAmount.maxValue?r("span",{staticClass:"form-field__error"},[e._v("\n                        "+e._s(e.$td("Initial amount should be less or equal of Max supply","form.coiner-create-amount-error-max"))+":\n                        "),e.form.maxSupply?r("span",[e._v(e._s(e.$options.prettyExactDecrease(e.form.maxSupply)))]):r("span",[e._v("10"),r("sup",[e._v("15")])])]):e._e()]),e._v(" "),r("div",{staticClass:"u-cell u-cell--medium--1-2"},[r("label",{staticClass:"form-field",class:{"is-error":e.$v.form.initialReserve.$error}},[r("InputMaskedAmount",{directives:[{name:"check-empty",rawName:"v-check-empty"}],staticClass:"form-field__input",attrs:{type:"text",inputmode:"decimal"},on:{blur:function(t){return e.$v.form.initialReserve.$touch()}},model:{value:e.form.initialReserve,callback:function(t){e.$set(e.form,"initialReserve",t)},expression:"form.initialReserve"}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Initial reserve","form.coiner-create-reserve")))])],1),e._v(" "),e.$v.form.initialReserve.$dirty&&!e.$v.form.initialReserve.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter reserve","form.coiner-create-reserve-error-required")))]):e.$v.form.initialReserve.$dirty&&!e.$v.form.initialReserve.minValue?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Min reserve is "+e.$store.getters.COIN_NAME+" "+e.$options.prettyRound(e.$options.MIN_CREATE_RESERVE),"form.coiner-create-reserve-error-min",{coin:e.$store.getters.COIN_NAME,min:e.$options.MIN_CREATE_RESERVE})))]):e._e()]),e._v(" "),r("div",{staticClass:"u-cell u-cell--medium--1-2"},[r("label",{staticClass:"form-field",class:{"is-error":e.$v.form.constantReserveRatio.$error}},[r("VueAutonumeric",{directives:[{name:"check-empty",rawName:"v-check-empty",value:"autoNumeric:formatted",expression:"'autoNumeric:formatted'"}],staticClass:"form-field__input",attrs:{type:"text",inputmode:"numeric",options:e.$options.maskCrr},nativeOn:{blur:function(t){return e.$v.form.constantReserveRatio.$touch()}},model:{value:e.form.constantReserveRatio,callback:function(t){e.$set(e.form,"constantReserveRatio",t)},expression:"form.constantReserveRatio"}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Constant reserve ratio","form.coiner-create-crr")))])],1),e._v(" "),e.$v.form.constantReserveRatio.$dirty&&!e.$v.form.constantReserveRatio.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter CRR","form.coiner-create-crr-error-required")))]):e.$v.form.constantReserveRatio.$dirty&&!e.$v.form.constantReserveRatio.between?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("CRR should be between 10 and 100","form.coiner-create-crr-error-between")))]):e._e(),e._v(" "),r("div",{staticClass:"form-field__help"},[e._v(e._s(e.$td("CRR reflects the volume of BIP reserves backing a newly issued coin. The higher the coefficient, the higher the reserves and thus the lower the volatility. And vice versa. The value should be integer and fall in the range from 10 to 100.","form.coiner-create-crr-help")))])]),e._v(" "),r("div",{staticClass:"u-cell u-cell--medium--1-2"},[r("label",{staticClass:"form-field",class:{"is-error":e.$v.form.maxSupply.$error}},[r("InputMaskedAmount",{directives:[{name:"check-empty",rawName:"v-check-empty"}],staticClass:"form-field__input",attrs:{type:"text",inputmode:"decimal"},nativeOn:{blur:function(t){return e.$v.form.maxSupply.$touch()}},model:{value:e.form.maxSupply,callback:function(t){e.$set(e.form,"maxSupply",t)},expression:"form.maxSupply"}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Max supply","form.coiner-create-max-supply")))])],1),e._v(" "),e.$v.form.maxSupply.$dirty&&!e.$v.form.maxSupply.minValue?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Min value is "+e.$options.COIN_MIN_MAX_SUPPLY,"form.coiner-create-max-supply-error-min",{value:e.$options.COIN_MIN_MAX_SUPPLY})))]):e.$v.form.maxSupply.$dirty&&!e.$v.form.maxSupply.maxValue?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Max value is "+e.$options.COIN_MAX_MAX_SUPPLY,"form.coiner-create-max-supply-error-max",{value:e.$options.COIN_MAX_MAX_SUPPLY})))]):e._e(),e._v(" "),r("div",{staticClass:"form-field__help"},[e._v("\n                    "+e._s(e.$td("Coin purchase will not be possible if the limit is exceeded.","form.coiner-create-max-supply-help"))+"\n                    "),r("br"),e._v("\n                    "+e._s(e.$td("Default:","form.help-default"))+" 10^15\n                ")])])]}},{key:"panel-footer",fn:function(){return[r("div",{staticClass:"u-grid"},[r("div",{staticClass:"u-cell u-cell--large--1-2"},[r("label",{staticClass:"form-field form-field--dashed",class:{"is-error":e.$v.coinPrice.$error}},[r("input",{staticClass:"form-field__input is-not-empty",attrs:{type:"text",readonly:""},domProps:{value:e.$options.prettyPreciseFloor(e.coinPrice)}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Initial Price","form.coiner-create-price")))])])])]),e._v(" "),r("br"),e._v(" "),"en"===e.$i18n.locale?[r("p",[r("span",{staticClass:"u-emoji"},[e._v("⚠️")]),e._v(" Warning! Coin liquidation is not allowed. "),r("br"),e._v(" One can't sell coin if it reserve goes lower than 10 000 "+e._s(e.$store.getters.COIN_NAME)+".")]),e._v(" "),r("p",[e._v("Coin Issue Sandbox: "),r("a",{staticClass:"link--default",attrs:{href:"https://calculator.minter.network",target:"_blank"}},[e._v("calculator.minter.network")])]),e._v(" "),r("p",[e._v("Ticker Symbol Fees:")]),e._v(" "),r("p",[e._v("\n                    3 letters — "+e._s(e.$store.getters.COIN_NAME)+" 1 000 000"),r("br"),e._v("\n                    4 letters — "+e._s(e.$store.getters.COIN_NAME)+" 100 000"),r("br"),e._v("\n                    5 letters — "+e._s(e.$store.getters.COIN_NAME)+" 10 000"),r("br"),e._v("\n                    6 letters — "+e._s(e.$store.getters.COIN_NAME)+" 1 000"),r("br"),e._v("\n                    7-10 letters — "+e._s(e.$store.getters.COIN_NAME)+" 100"),r("br")])]:e._e(),e._v(" "),"ru"===e.$i18n.locale?[r("p",[r("span",{staticClass:"u-emoji"},[e._v("⚠️")]),e._v(" Внимание! Ликвидация монеты будет невозможна. "),r("br"),e._v(" Нельзя продать монету, если это понизит её резерв ниже 10 000 "+e._s(e.$store.getters.COIN_NAME)+".")]),e._v(" "),r("p",[e._v("Вы можете проверить как работает связь между выпуском, резервом и CRR в нашем калькуляторе: "),r("a",{staticClass:"link--default",attrs:{href:"https://calculator.minter.network",target:"_blank"}},[e._v("calculator.minter.network")])]),e._v(" "),r("p",{staticClass:"u-text-muted"},[e._v("Комиссии на длину тикера:")]),e._v(" "),r("p",{staticClass:"u-text-muted"},[e._v("\n                    3 буквы — "+e._s(e.$store.getters.COIN_NAME)+" 1 000 000"),r("br"),e._v("\n                    4 буквы — "+e._s(e.$store.getters.COIN_NAME)+" 100 000"),r("br"),e._v("\n                    5 букв — "+e._s(e.$store.getters.COIN_NAME)+" 10 000"),r("br"),e._v("\n                    6 букв — "+e._s(e.$store.getters.COIN_NAME)+" 1 000"),r("br"),e._v("\n                    7-10 букв — "+e._s(e.$store.getters.COIN_NAME)+" 100"),r("br")])]:e._e()]},proxy:!0},{key:"submit-title",fn:function(){return[e._v("\n            "+e._s(e.$td("Create","form.coiner-create-button"))+"\n        ")]},proxy:!0},{key:"confirm-modal-header",fn:function(){return[r("h1",{staticClass:"panel__header-title"},[r("img",{staticClass:"panel__header-title-icon",attrs:{src:e.BASE_URL_PREFIX+"/img/icon-feature-coin-creation.svg",alt:"",role:"presentation",width:"40",height:"40"}}),e._v("\n                "+e._s(e.$td("Create Coin","coiner.create-title"))+"\n            ")])]},proxy:!0},{key:"confirm-modal-body",fn:function(){return[r("div",{staticClass:"u-grid u-grid--small u-grid--vertical-margin"},[r("div",{staticClass:"u-cell"},[r("label",{staticClass:"form-field form-field--dashed"},[r("input",{staticClass:"form-field__input is-not-empty",attrs:{type:"text",spellcheck:"false",readonly:"",tabindex:"-1"},domProps:{value:e.form.symbol+" "+e.$options.prettyExact(e.form.initialAmount)}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("You issue","form.coiner-create-confirm-amount")))])])]),e._v(" "),r("div",{staticClass:"u-cell"},[r("label",{staticClass:"form-field form-field--dashed"},[r("input",{staticClass:"form-field__input is-not-empty",attrs:{autocapitalize:"off",spellcheck:"false",readonly:"",tabindex:"-1"},domProps:{value:e.form.constantReserveRatio+"%"}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("With CRR","form.coiner-create-confirm-crr")))])])]),e._v(" "),r("div",{staticClass:"u-cell"},[r("label",{staticClass:"form-field form-field--dashed"},[r("input",{staticClass:"form-field__input is-not-empty",attrs:{autocapitalize:"off",spellcheck:"false",readonly:"",tabindex:"-1"},domProps:{value:e.$store.getters.COIN_NAME+" "+e.$options.prettyExact(e.form.initialReserve)}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("By reserving","form.coiner-create-confirm-reserve")))])])])])]},proxy:!0},{key:"confirm-modal-footer",fn:function(){return[r("div",{staticClass:"u-text-left"},[r("strong",[e._v(e._s(e.$td("Warning!","form.coiner-create-confirm-warning")))]),e._v(" "),"en"===e.$i18n.locale?r("p",[e._v("\n                    Coin liquidation is not allowed. "),r("br"),e._v(" One can't sell coin if it reserve goes lower than "),r("strong",{staticClass:"u-display-ib"},[e._v("10 000 "+e._s(e.$store.getters.COIN_NAME))]),e._v(".\n                ")]):e._e(),e._v(" "),"ru"===e.$i18n.locale?r("p",[e._v("\n                    Ликвидация монеты будет невозможна. "),r("br"),e._v(" Нельзя продать монету, если это понизит её резерв ниже "),r("strong",{staticClass:"u-display-ib"},[e._v("10 000 "+e._s(e.$store.getters.COIN_NAME))]),e._v(".\n                ")]):e._e()])]},proxy:!0}])})}),[],!1,null,null,null).exports,F=x()({type:"coinName"},(function(e){return/^[A-Z0-9]{3,10}$/.test(e)})),X=x()({type:"constantReserveRatio"},(function(e){var t=parseInt(e,10);return 10<=t&&100>=t}));var U={ideFix:!0,TX_TYPE:E.a,MIN_CREATE_RESERVE:1e4,MIN_PRICE:0,MIN_SUPPLY:0,COIN_MIN_MAX_SUPPLY:k.c,COIN_MAX_MAX_SUPPLY:k.b,maskCrr:{allowDecimalPadding:!1,decimalPlaces:0,digitGroupSeparator:"",emptyInputBehavior:"null",currencySymbol:" %",currencySymbolPlacement:"s",minimumValue:10,maximumValue:100,overrideMinMaxLimits:"ignore",unformatOnHover:!1,wheelStep:1},prettyRound:N.o,prettyPreciseFloor:N.n,prettyExact:N.k,prettyExactDecrease:N.l,components:{VueAutonumeric:R.a,TxForm:I.a,InputUppercase:w.a,InputMaskedAmount:P.a},directives:{checkEmpty:M.a},mixins:[n.validationMixin],data:function(){return{form:{name:"",symbol:"",initialAmount:"",constantReserveRatio:null,initialReserve:"",maxSupply:""}}},validations:function(){return{form:{name:{required:m.a,maxLength:h()(64)},symbol:{required:m.a,minLength:$()(3),maxLength:h()(10),name:F},initialAmount:{required:m.a,minValue:f()(1),maxValue:d()(this.form.maxSupply||k.b)},constantReserveRatio:{required:m.a,between:X},initialReserve:{required:m.a,minValue:f()(1e4)},maxSupply:{minValue:this.form.maxSupply?f()(k.c):function(){return!0},maxValue:this.form.maxSupply?d()(k.b):function(){return!0}}},coinPrice:{}}},computed:{coinPrice:function(){return form=this.form,(e=Object(A.a)(function(form){return{supply:form.initialAmount,reserve:form.initialReserve,crr:form.constantReserveRatio/100}}(form),1))>=0?e:0;var form,e}},methods:{clearForm:function(){this.form.name="",this.form.symbol="",this.form.initialAmount="",this.form.constantReserveRatio=null,this.form.initialReserve="",this.form.maxSupply="",this.$v.$reset()}}},D=Object(L.a)(U,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("TxForm",{attrs:{txData:e.form,$txData:e.$v.form,txType:e.$options.TX_TYPE.RECREATE_COIN},on:{"clear-form":function(t){return e.clearForm()}},scopedSlots:e._u([{key:"panel-header",fn:function(){return[r("h1",{staticClass:"panel__header-title"},[e._v("\n            "+e._s(e.$td("Recreate coin","coiner.recreate-title"))+"\n        ")]),e._v(" "),r("p",{staticClass:"panel__header-description"},[e._v("\n            "+e._s(e.$td("","coiner.recreate-description"))+"\n        ")])]},proxy:!0},{key:"default",fn:function(t){t.fee,t.addressBalance;return[r("div",{staticClass:"u-cell u-cell--medium--1-2"},[r("label",{staticClass:"form-field",class:{"is-error":e.$v.form.name.$error}},[r("input",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"model",rawName:"v-model.trim",value:e.form.name,expression:"form.name",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{type:"text"},domProps:{value:e.form.name},on:{blur:[function(t){return e.$v.form.name.$touch()},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value.trim())}}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Coin name","form.coiner-create-name")))])]),e._v(" "),e.$v.form.name.$dirty&&!e.$v.form.name.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter coin name","form.coiner-create-name-error-required")))]):e._e(),e._v(" "),e.$v.form.name.$dirty&&!e.$v.form.name.maxLength?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Max 64 letters","form.coiner-create-name-error-max")))]):e._e(),e._v(" "),r("div",{staticClass:"form-field__help",domProps:{innerHTML:e._s(e.$td("The full name of your coin (for example, <strong>Bitcoin</strong>). Arbitrary string up to 64 letters long.","form.coiner-create-name-help"))}})]),e._v(" "),r("div",{staticClass:"u-cell u-cell--medium--1-2"},[r("label",{staticClass:"form-field",class:{"is-error":e.$v.form.symbol.$error}},[r("InputUppercase",{directives:[{name:"check-empty",rawName:"v-check-empty"}],staticClass:"form-field__input",attrs:{type:"text",autocapitalize:"off",spellcheck:"false"},on:{blur:function(t){return e.$v.form.symbol.$touch()}},model:{value:e.form.symbol,callback:function(t){e.$set(e.form,"symbol","string"==typeof t?t.trim():t)},expression:"form.symbol"}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Coin symbol","form.coiner-create-symbol")))])],1),e._v(" "),e.$v.form.symbol.$dirty&&!e.$v.form.symbol.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter coin symbol","form.coiner-create-symbol-error-required")))]):e._e(),e._v(" "),e.$v.form.symbol.$dirty&&!e.$v.form.symbol.minLength?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Min 3 letters","form.coin-error-min")))]):e._e(),e._v(" "),e.$v.form.symbol.$dirty&&!e.$v.form.symbol.maxLength?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Max 10 letters","form.coin-error-max")))]):e._e(),e._v(" "),e.$v.form.symbol.$dirty&&!e.$v.form.symbol.name?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Invalid coin ticker","form.coin-error-name")))]):e._e(),e._v(" "),r("div",{staticClass:"form-field__help",domProps:{innerHTML:e._s(e.$td("Ticker symbol (for example, <strong>BTC</strong>). Must be unique, alphabetic, uppercase, and 3 to 10 symbols long.","form.coiner-create-symbol-help"))}})]),e._v(" "),r("div",{staticClass:"u-cell u-cell--medium--1-2"},[r("label",{staticClass:"form-field",class:{"is-error":e.$v.form.initialAmount.$error}},[r("InputMaskedAmount",{directives:[{name:"check-empty",rawName:"v-check-empty"}],staticClass:"form-field__input",attrs:{type:"text",inputmode:"decimal"},on:{blur:function(t){return e.$v.form.initialAmount.$touch()}},model:{value:e.form.initialAmount,callback:function(t){e.$set(e.form,"initialAmount",t)},expression:"form.initialAmount"}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Initial amount","form.coiner-create-amount")))])],1),e._v(" "),e.$v.form.initialAmount.$dirty&&!e.$v.form.initialAmount.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter amount","form.amount-error-required")))]):e.$v.form.initialAmount.$dirty&&!e.$v.form.initialAmount.minValue?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Min amount is 1","form.coiner-create-amount-error-min")))]):e.$v.form.initialAmount.$dirty&&!e.$v.form.initialAmount.maxValue?r("span",{staticClass:"form-field__error"},[e._v("\n                    "+e._s(e.$td("Initial amount should be less or equal of Max supply","form.coiner-create-amount-error-max"))+":\n                    "),e.form.maxSupply?r("span",[e._v(e._s(e.$options.prettyExactDecrease(e.form.maxSupply)))]):r("span",[e._v("10"),r("sup",[e._v("15")])])]):e._e()]),e._v(" "),r("div",{staticClass:"u-cell u-cell--medium--1-2"},[r("label",{staticClass:"form-field",class:{"is-error":e.$v.form.initialReserve.$error}},[r("InputMaskedAmount",{directives:[{name:"check-empty",rawName:"v-check-empty"}],staticClass:"form-field__input",attrs:{type:"text",inputmode:"decimal"},on:{blur:function(t){return e.$v.form.initialReserve.$touch()}},model:{value:e.form.initialReserve,callback:function(t){e.$set(e.form,"initialReserve",t)},expression:"form.initialReserve"}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Initial reserve","form.coiner-create-reserve")))])],1),e._v(" "),e.$v.form.initialReserve.$dirty&&!e.$v.form.initialReserve.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter reserve","form.coiner-create-reserve-error-required")))]):e.$v.form.initialReserve.$dirty&&!e.$v.form.initialReserve.minValue?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Min reserve is "+e.$store.getters.COIN_NAME+" "+e.$options.prettyRound(e.$options.MIN_CREATE_RESERVE),"form.coiner-create-reserve-error-min",{coin:e.$store.getters.COIN_NAME,min:e.$options.MIN_CREATE_RESERVE})))]):e._e()]),e._v(" "),r("div",{staticClass:"u-cell u-cell--medium--1-2"},[r("label",{staticClass:"form-field",class:{"is-error":e.$v.form.constantReserveRatio.$error}},[r("VueAutonumeric",{directives:[{name:"check-empty",rawName:"v-check-empty",value:"autoNumeric:formatted",expression:"'autoNumeric:formatted'"}],staticClass:"form-field__input",attrs:{type:"text",inputmode:"numeric",options:e.$options.maskCrr},nativeOn:{blur:function(t){return e.$v.form.constantReserveRatio.$touch()}},model:{value:e.form.constantReserveRatio,callback:function(t){e.$set(e.form,"constantReserveRatio",t)},expression:"form.constantReserveRatio"}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Constant reserve ratio","form.coiner-create-crr")))])],1),e._v(" "),e.$v.form.constantReserveRatio.$dirty&&!e.$v.form.constantReserveRatio.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter CRR","form.coiner-create-crr-error-required")))]):e.$v.form.constantReserveRatio.$dirty&&!e.$v.form.constantReserveRatio.between?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("CRR should be between 10 and 100","form.coiner-create-crr-error-between")))]):e._e(),e._v(" "),r("div",{staticClass:"form-field__help"},[e._v(e._s(e.$td("CRR reflects the volume of BIP reserves backing a newly issued coin. The higher the coefficient, the higher the reserves and thus the lower the volatility. And vice versa. The value should be integer and fall in the range from 10 to 100.","form.coiner-create-crr-help")))])]),e._v(" "),r("div",{staticClass:"u-cell u-cell--medium--1-2"},[r("label",{staticClass:"form-field",class:{"is-error":e.$v.form.maxSupply.$error}},[r("InputMaskedAmount",{directives:[{name:"check-empty",rawName:"v-check-empty"}],staticClass:"form-field__input",attrs:{type:"text",inputmode:"decimal"},nativeOn:{blur:function(t){return e.$v.form.maxSupply.$touch()}},model:{value:e.form.maxSupply,callback:function(t){e.$set(e.form,"maxSupply",t)},expression:"form.maxSupply"}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Max supply","form.coiner-create-max-supply")))])],1),e._v(" "),e.$v.form.maxSupply.$dirty&&!e.$v.form.maxSupply.minValue?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Min value is "+e.$options.COIN_MIN_MAX_SUPPLY,"form.coiner-create-max-supply-error-min",{value:e.$options.COIN_MIN_MAX_SUPPLY})))]):e.$v.form.maxSupply.$dirty&&!e.$v.form.maxSupply.maxValue?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Max value is "+e.$options.COIN_MAX_MAX_SUPPLY,"form.coiner-create-max-supply-error-max",{value:e.$options.COIN_MAX_MAX_SUPPLY})))]):e._e(),e._v(" "),r("div",{staticClass:"form-field__help"},[e._v("\n                "+e._s(e.$td("Coin purchase will not be possible if the limit is exceeded.","form.coiner-create-max-supply-help"))+"\n                "),r("br"),e._v("\n                "+e._s(e.$td("Default:","form.help-default"))+" 10^15\n            ")])])]}},{key:"panel-footer",fn:function(){return[r("div",{staticClass:"u-grid"},[r("div",{staticClass:"u-cell u-cell--large--1-2"},[r("label",{staticClass:"form-field form-field--dashed",class:{"is-error":e.$v.coinPrice.$error}},[r("input",{staticClass:"form-field__input is-not-empty",attrs:{type:"text",readonly:""},domProps:{value:e.$options.prettyPreciseFloor(e.coinPrice)}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Initial Price","form.coiner-create-price")))])])])]),e._v(" "),r("br")]},proxy:!0},{key:"submit-title",fn:function(){return[e._v("\n        "+e._s(e.$td("Recreate","form.coiner-recreate-button"))+"\n    ")]},proxy:!0},{key:"confirm-modal-header",fn:function(){return[r("h1",{staticClass:"panel__header-title"},[r("img",{staticClass:"panel__header-title-icon",attrs:{src:e.BASE_URL_PREFIX+"/img/icon-feature-coin-creation.svg",alt:"",role:"presentation",width:"40",height:"40"}}),e._v("\n            "+e._s(e.$td("Recreate coin","coiner.recreate-title"))+"\n        ")])]},proxy:!0},{key:"confirm-modal-body",fn:function(){return[r("div",{staticClass:"u-grid u-grid--small u-grid--vertical-margin"},[r("div",{staticClass:"u-cell"},[r("label",{staticClass:"form-field form-field--dashed"},[r("input",{staticClass:"form-field__input is-not-empty",attrs:{type:"text",spellcheck:"false",readonly:"",tabindex:"-1"},domProps:{value:e.form.symbol+" "+e.$options.prettyExact(e.form.initialAmount)}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("You issue","form.coiner-create-confirm-amount")))])])]),e._v(" "),r("div",{staticClass:"u-cell"},[r("label",{staticClass:"form-field form-field--dashed"},[r("input",{staticClass:"form-field__input is-not-empty",attrs:{autocapitalize:"off",spellcheck:"false",readonly:"",tabindex:"-1"},domProps:{value:e.form.constantReserveRatio+"%"}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("With CRR","form.coiner-create-confirm-crr")))])])]),e._v(" "),r("div",{staticClass:"u-cell"},[r("label",{staticClass:"form-field form-field--dashed"},[r("input",{staticClass:"form-field__input is-not-empty",attrs:{autocapitalize:"off",spellcheck:"false",readonly:"",tabindex:"-1"},domProps:{value:e.$store.getters.COIN_NAME+" "+e.$options.prettyExact(e.form.initialReserve)}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("By reserving","form.coiner-create-confirm-reserve")))])])])])]},proxy:!0}])})}),[],!1,null,null,null).exports,Y=r(716),B=r(46),j=x()({type:"coinName"},(function(e){return/^[A-Z0-9]{3,10}$/.test(e)})),z={ideFix:!0,TX_TYPE:E.a,components:{TxForm:I.a,InputUppercase:w.a,FieldDomain:Y.a},directives:{checkEmpty:M.a},mixins:[n.validationMixin],data:function(){return{form:{symbol:"",newOwner:""},domain:"",isDomainResolving:!1}},validations:function(){return{form:{symbol:{required:m.a,minLength:$()(3),maxLength:h()(10),name:j},newOwner:{required:m.a,validAddress:this.isDomainResolving?function(){return new Promise((function(){return 0}))}:B.c}}}},computed:{},methods:{clearForm:function(){this.form.symbol="",this.form.newOwner="",this.$v.$reset()}}},H={components:{CoinCreateForm:V,CoinRecreateForm:D,CoinEditOwnerForm:Object(L.a)(z,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("TxForm",{attrs:{txData:e.form,$txData:e.$v.form,txType:e.$options.TX_TYPE.EDIT_COIN_OWNER},on:{"clear-form":function(t){return e.clearForm()}},scopedSlots:e._u([{key:"panel-header",fn:function(){return[r("h1",{staticClass:"panel__header-title"},[e._v("\n                "+e._s(e.$td("Edit coin owner","coiner.edit-coin-owner-title"))+"\n            ")]),e._v(" "),r("p",{staticClass:"panel__header-description"},[e._v("\n                "+e._s(e.$td("","coiner.edit-coin-owner-description"))+"\n            ")])]},proxy:!0},{key:"default",fn:function(t){t.fee,t.addressBalance;return[r("div",{staticClass:"u-cell u-cell--xlarge--1-2"},[r("label",{staticClass:"form-field",class:{"is-error":e.$v.form.symbol.$error}},[r("InputUppercase",{directives:[{name:"check-empty",rawName:"v-check-empty"}],staticClass:"form-field__input",attrs:{type:"text",autocapitalize:"off",spellcheck:"false"},on:{blur:function(t){return e.$v.form.symbol.$touch()}},model:{value:e.form.symbol,callback:function(t){e.$set(e.form,"symbol","string"==typeof t?t.trim():t)},expression:"form.symbol"}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Coin symbol","form.coiner-create-symbol")))])],1),e._v(" "),e.$v.form.symbol.$dirty&&!e.$v.form.symbol.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter coin symbol","form.coiner-create-symbol-error-required")))]):e._e(),e._v(" "),e.$v.form.symbol.$dirty&&!e.$v.form.symbol.minLength?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Min 3 letters","form.coin-error-min")))]):e._e(),e._v(" "),e.$v.form.symbol.$dirty&&!e.$v.form.symbol.maxLength?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Max 10 letters","form.coin-error-max")))]):e._e(),e._v(" "),e.$v.form.symbol.$dirty&&!e.$v.form.symbol.name?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Invalid coin ticker","form.coin-error-name")))]):e._e(),e._v(" "),r("div",{staticClass:"form-field__help",domProps:{innerHTML:e._s(e.$td("Ticker symbol (for example, <strong>BTC</strong>). Must be unique, alphabetic, uppercase, and 3 to 10 symbols long.","form.coiner-create-symbol-help"))}})]),e._v(" "),r("div",{staticClass:"u-cell u-cell--xlarge--1-2"},[r("FieldDomain",{attrs:{$value:e.$v.form.newOwner,valueType:"address",label:e.$td("New address or domain","form.wallet-send-address")},on:{"update:domain":function(t){e.domain=t},"update:resolving":function(t){e.isDomainResolving=t}},model:{value:e.form.newOwner,callback:function(t){e.$set(e.form,"newOwner","string"==typeof t?t.trim():t)},expression:"form.newOwner"}})],1)]}},{key:"submit-title",fn:function(){return[e._v("\n            "+e._s(e.$td("Edit owner","form.coiner-edit-coin-owner-button"))+"\n        ")]},proxy:!0},{key:"confirm-modal-header",fn:function(){return[r("h1",{staticClass:"panel__header-title"},[r("img",{staticClass:"panel__header-title-icon",attrs:{src:e.BASE_URL_PREFIX+"/img/icon-feature-coin-creation.svg",alt:"",role:"presentation",width:"40",height:"40"}}),e._v("\n                "+e._s(e.$td("Edit coin owner","coiner.edit-coin-owner-title"))+"\n            ")])]},proxy:!0}])})}),[],!1,null,null,null).exports},fetch:function(e){var t=e.app;return e.store.commit("SET_SECTION_NAME",t.$td("Coiner","common.page-coiner")),Promise.resolve()},head:function(){var title=Object(o.a)(this.$store.state.sectionName,this.$i18n.locale),e=this.$td("Determine the value of Constant Reserve Ratio, specify the volume of the Genesis emission, and place the first reserves to create your own coin.","coiner.seo-description"),t="en"===this.$i18n.locale?"":"-"+this.$i18n.locale;return{title:title,meta:[{hid:"og-title",name:"og:title",content:title},{hid:"description",name:"description",content:e},{hid:"og-description",name:"og:description",content:e},{hid:"og-image",name:"og:image",content:"".concat(this.BASE_URL_PREFIX,"/img/social-share-coiner").concat(t,".png")}]}}},W=Object(L.a)(H,(function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"u-section u-container"},[t("CoinCreateForm"),this._v(" "),t("CoinRecreateForm"),this._v(" "),t("CoinEditOwnerForm")],1)}),[],!1,null,null,null);t.default=W.exports}}]);