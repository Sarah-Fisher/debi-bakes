"use strict";(self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[]).push([[8806],{4738:(e,t,s)=>{s.d(t,{E:()=>c,X:()=>l});var a=s(9530),n=s(4613),r=s(9818),o=s(4801);const i=(e=!1)=>{const{paymentMethodsInitialized:t,expressPaymentMethodsInitialized:s,availablePaymentMethods:i,availableExpressPaymentMethods:c}=(0,r.useSelect)((e=>{const t=e(o.PAYMENT_STORE_KEY);return{paymentMethodsInitialized:t.paymentMethodsInitialized(),expressPaymentMethodsInitialized:t.expressPaymentMethodsInitialized(),availableExpressPaymentMethods:t.getAvailableExpressPaymentMethods(),availablePaymentMethods:t.getAvailablePaymentMethods()}})),l=Object.values(i).map((({name:e})=>e)),d=Object.values(c).map((({name:e})=>e)),m=(0,n.getPaymentMethods)(),u=(0,n.getExpressPaymentMethods)(),h=Object.keys(m).reduce(((e,t)=>(l.includes(t)&&(e[t]=m[t]),e)),{}),p=Object.keys(u).reduce(((e,t)=>(d.includes(t)&&(e[t]=u[t]),e)),{}),y=(0,a.s)(h),P=(0,a.s)(p);return{paymentMethods:e?P:y,isInitialized:e?s:t}},c=()=>i(!1),l=()=>i(!0)},9732:(e,t,s)=>{s.d(t,{P:()=>i});var a=s(4801),n=s(9818),r=s(1715),o=s(4738);const i=()=>{const{isCalculating:e,isBeforeProcessing:t,isProcessing:s,isAfterProcessing:i,isComplete:c,hasError:l}=(0,n.useSelect)((e=>{const t=e(a.CHECKOUT_STORE_KEY);return{isCalculating:t.isCalculating(),isBeforeProcessing:t.isBeforeProcessing(),isProcessing:t.isProcessing(),isAfterProcessing:t.isAfterProcessing(),isComplete:t.isComplete(),hasError:t.hasError()}})),{activePaymentMethod:d,isExpressPaymentMethodActive:m}=(0,n.useSelect)((e=>{const t=e(a.PAYMENT_STORE_KEY);return{activePaymentMethod:t.getActivePaymentMethod(),isExpressPaymentMethodActive:t.isExpressPaymentMethodActive()}})),{onSubmit:u}=(0,r.U)(),{paymentMethods:h={}}=(0,o.E)(),p=s||i||t,y=c&&!l;return{paymentMethodButtonLabel:(h[d]||{}).placeOrderButtonLabel,onSubmit:u,isCalculating:e,isDisabled:s||m,waitingForProcessing:p,waitingForRedirect:y}}},9530:(e,t,s)=>{s.d(t,{s:()=>o});var a=s(9307),n=s(9127),r=s.n(n);function o(e){const t=(0,a.useRef)(e);return r()(e,t.current)||(t.current=e),t.current}},9701:(e,t,s)=>{s.r(t),s.d(t,{default:()=>_});var a=s(9196),n=s(5736),r=s(3849),o=s.n(r),i=s(9307),c=s(711),l=s(9732),d=s(4333),m=s(9818),u=s(4801),h=s(8752);const p=h.qy?`<a href="${h.qy}" target="_blank">${(0,n.__)("Terms and Conditions","woocommerce")}</a>`:(0,n.__)("Terms and Conditions","woocommerce"),y=h.Sb?`<a href="${h.Sb}" target="_blank">${(0,n.__)("Privacy Policy","woocommerce")}</a>`:(0,n.__)("Privacy Policy","woocommerce"),P=(0,n.sprintf)(/* translators: %1$s terms page link, %2$s privacy page link. */ /* translators: %1$s terms page link, %2$s privacy page link. */
(0,n.__)("By proceeding with your purchase you agree to our %1$s and %2$s","woocommerce"),p,y),E=(0,n.sprintf)(/* translators: %1$s terms page link, %2$s privacy page link. */ /* translators: %1$s terms page link, %2$s privacy page link. */
(0,n.__)("You must accept our %1$s and %2$s to continue with your purchase.","woocommerce"),p,y),_=(0,d.withInstanceId)((({text:e,checkbox:t,instanceId:s,className:r})=>{const[d,h]=(0,i.useState)(!1),{isDisabled:p}=(0,l.P)(),y="terms-and-conditions-"+s,{setValidationErrors:_,clearValidationError:g}=(0,m.useDispatch)(u.VALIDATION_STORE_KEY),b=(0,m.useSelect)((e=>e(u.VALIDATION_STORE_KEY).getValidationError(y))),M=!(null==b||!b.message||null!=b&&b.hidden);return(0,i.useEffect)((()=>{if(t)return d?g(y):_({[y]:{message:(0,n.__)("Please read and accept the terms and conditions.","woocommerce"),hidden:!0}}),()=>{g(y)}}),[t,d,y,g,_]),(0,a.createElement)("div",{className:o()("wc-block-checkout__terms",{"wc-block-checkout__terms--disabled":p},r)},t?(0,a.createElement)(a.Fragment,null,(0,a.createElement)(c.CheckboxControl,{id:"terms-and-conditions",checked:d,onChange:()=>h((e=>!e)),hasError:M,disabled:p},(0,a.createElement)("span",{dangerouslySetInnerHTML:{__html:e||E}}))):(0,a.createElement)("span",{dangerouslySetInnerHTML:{__html:e||P}}))}))}}]);