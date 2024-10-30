(()=>{"use strict";var t={n:e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},d:(e,r)=>{for(var i in r)t.o(r,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:r[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};const{Restriction:e,CalculatedFormula:r}=window.JetFormBuilderAbstract;function i(){e.call(this),this.message="",this.formula=null,this.watchedAttrs=[]}i.prototype=Object.create(e.prototype),i.prototype.message="",i.prototype.formula=null,i.prototype.watchedAttrs=[],i.prototype.isServerSide=function(){return!1},i.prototype.getMessage=function(){return this.message},i.prototype.getRawMessage=function(){return"Error"},i.prototype.getMessageBySlug=function(t){return function(t,e){var r,i,s,n;const{reporting:o}=t,a=null!==(r=o.messages[e])&&void 0!==r?r:"";if(a)return a;const u=null!==(i=window?.JetFormsValidation)&&void 0!==i&&i;if(!1===u)return"";const c=o.input.getSubmit(),{messages:p}=null!==(s=u[c.getFormId()])&&void 0!==s?s:{};return null!==(n=p[e])&&void 0!==n?n:""}(this,t)},i.prototype.onReady=function(){this.formula=new r(this.reporting.input),this.formula.observe(this.getRawMessage()),this.formula.setResult=()=>{this.message=this.formula.calculateString()},this.formula.setResult(),this.watchedAttrs.length&&(this.reporting.watchAttrs=[...new Set([...this.reporting.watchAttrs,...this.watchedAttrs])])};const s=i;function n(){s.call(this),this.watchedAttrs.push("max"),this.isSupported=function(t,e){const{max:r=!1}=e.input.attrs;return!1!==r&&["number","range"].includes(t.type)},this.validate=function(){const t=this.getValue(),{max:e}=this.reporting.input.attrs;return!t||+t<=+e.value.current},this.getRawMessage=function(){return this.getMessageBySlug("number_max")}}n.prototype=Object.create(s.prototype);const o=n;function a(){s.call(this),this.watchedAttrs.push("min"),this.isSupported=function(t,e){const{min:r=!1}=e.input.attrs;return!1!==r&&["number","range"].includes(t.type)},this.validate=function(){const t=this.getValue(),{min:e}=this.reporting.input.attrs;return!t||+t>=+e.value.current},this.getRawMessage=function(){return this.getMessageBySlug("number_min")}}a.prototype=Object.create(s.prototype);const u=a;function c(){s.call(this),this.isSupported=function(t){return"url"===t.type},this.validate=function(){const t=this.getValue();return!t||/((mailto\:|(news|(ht|f)tp(s?))\:\/\/)\S+)/.test(t)},this.getRawMessage=function(){return this.getMessageBySlug("url")}}c.prototype=Object.create(s.prototype);const p=c;function l(){s.call(this),this.isSupported=function(t){return"email"===t.type},this.validate=function(){const t=this.getValue();return!t||/^[\w-\.\+]+@([\w-]+\.)+[\w-]{1,6}$/.test(t)},this.getRawMessage=function(){return this.getMessageBySlug("email")}}l.prototype=Object.create(s.prototype);const h=l;function d(){s.call(this),this.watchedAttrs.push("minLength"),this.isSupported=function(t,e){const{minLength:r=!1}=e.input.attrs;return!1!==r},this.validate=function(){const t=this.getValue()?.length,{minLength:e}=this.reporting.input.attrs;return!t||t>=+e.value.current},this.getRawMessage=function(){return this.getMessageBySlug("char_min")}}d.prototype=Object.create(s.prototype);const g=d;function f(){s.call(this),this.watchedAttrs.push("maxLength"),this.isSupported=function(t,e){const{maxLength:r=!1}=e.input.attrs;return!1!==r},this.validate=function(){const t=this.getValue()?.length,{maxLength:e}=this.reporting.input.attrs;return!t||t<=+e.value.current},this.getRawMessage=function(){return this.getMessageBySlug("char_max")}}f.prototype=Object.create(s.prototype);const y=f,{isEmpty:v}=JetFormBuilderFunctions;function m(){s.call(this),this.type="required"}m.prototype=Object.create(s.prototype),m.prototype.isSupported=function(t,e){return e.input.isRequired},m.prototype.validate=function(){const t=this.getValue();return!v(t)},m.prototype.getRawMessage=function(){return this.getMessageBySlug("empty")};const S=m;function b(){s.call(this),this.isSupported=function(t){return t.classList.contains("jet-form-builder__masked-field")&&jQuery.fn.inputmask},this.validate=function(){const t=this.getValue(),e=this.reporting.getNode();return!t||e.inputmask.isComplete()},this.getRawMessage=function(){return this.getMessageBySlug("inputmask")}}b.prototype=Object.create(s.prototype);const w=b;function j(){s.call(this),this.isSupported=function(t,e){var r;const i=t.closest(".jet-form-builder-row"),s=JSON.parse(null!==(r=i.dataset?.validationRules)&&void 0!==r?r:"[]");return!!Boolean(s.length)&&(e.restrictions=[...e.restrictions,...X(s,e)],!1)}}j.prototype=Object.create(s.prototype);const R=j;function A(){s.call(this),this.attrs={}}A.prototype=Object.create(s.prototype),A.prototype.attrs={},A.prototype.setAttrs=function(t){this.attrs=t},A.prototype.getSlug=function(){throw new Error("you need to return slug of rule")},A.prototype.getRawMessage=function(){var t;return null!==(t=this.attrs?.message)&&void 0!==t?t:""};const O=A;function M(){O.call(this),this.getSlug=function(){return"contain"}}M.prototype=Object.create(O.prototype),M.prototype.setAttrs=function(t){O.prototype.setAttrs.call(this,t),Z.call(this)},M.prototype.validate=function(){const t=this.getValue();return!t||t.includes(this.attrs.value)};const P=M;function _(){P.call(this),this.getSlug=function(){return"contain_not"},this.validate=function(){return!this.getValue()||!P.prototype.validate.call(this)}}_.prototype=Object.create(P.prototype);const F=_;function B(){O.call(this),this.getSlug=function(){return"regexp"}}B.prototype=Object.create(O.prototype),B.prototype.setAttrs=function(t){O.prototype.setAttrs.call(this,t),Z.call(this)},B.prototype.validate=function(){const t=this.getValue();return!t||new RegExp(this.attrs.value,"g").test(t)};const V=B;function x(){V.call(this),this.getSlug=function(){return"regexp_not"},this.validate=function(){return!this.getValue()||!V.prototype.validate.call(this)}}x.prototype=Object.create(V.prototype);const k=x,J=window.wp.apiFetch;var E=t.n(J);function N(){O.call(this),this.getSlug=function(){return"ssr"},this.isServerSide=function(){return!0},this.validatePromise=async function(){if(!this.getValue())return Promise.resolve();const t=this.getFormData(),e=await E()({path:"/jet-form-builder/v1/validate-field",method:"POST",body:t});return e?.result?Promise.resolve():Promise.reject()},this.getFormData=function(){const{input:t}=this.reporting,{rootNode:e}=t.getRoot(),r=new FormData(e);r.delete("_wpnonce"),r.set("_jfb_validation_rule_index",this.attrs.index);for(const e of t.path)r.append("_jfb_validation_path[]",e);return r}}N.prototype=Object.create(O.prototype);const L=N;function q(){O.call(this),this.getSlug=function(){return"equal"},this.validate=function(){const t=this.getValue();return!t||t===this.attrs.value}}q.prototype=Object.create(O.prototype),q.prototype.setAttrs=function(t){O.prototype.setAttrs.call(this,t),Z.call(this)};const C=q,{getTimestamp:I}=JetFormBuilderFunctions;function T(){s.call(this),this.watchedAttrs.push("min"),this.isSupported=function(t,e){const{min:r=!1}=e.input.attrs;return!1!==r&&["time","date","datetime-local"].includes(t.type)},this.validate=function(){const t=this.getValue();if(!t)return!0;const{min:e}=this.reporting.input.attrs,{time:r}=I(t),{time:i}=I(e.value.current);return r>=i},this.getRawMessage=function(){return this.getMessageBySlug("date_min")}}T.prototype=Object.create(s.prototype);const D=T,{getTimestamp:H}=JetFormBuilderFunctions;function Q(){s.call(this),this.watchedAttrs.push("max"),this.isSupported=function(t,e){const{max:r=!1}=e.input.attrs;return!1!==r&&["time","date","datetime-local"].includes(t.type)},this.validate=function(){const t=this.getValue();if(!t)return!0;const{max:e}=this.reporting.input.attrs,{time:r}=H(t),{time:i}=H(e.value.current);return r<=i},this.getRawMessage=function(){return this.getMessageBySlug("date_max")}}Q.prototype=Object.create(s.prototype);const $=Q,{applyFilters:z}=JetPlugins.hooks,{isEmpty:G}=JetFormBuilderFunctions,K=()=>z("jet.fb.advanced.rules",[P,F,V,k,L,C]);let U=[],W=[];function X(t,e){const r=[];U.length||(U=K());for(const[i,s]of Object.entries(t))for(const t of U){const n=new t;if(s.type===n.getSlug()){delete s.type,n.setReporting(e),n.setAttrs({...s,index:i}),n.onReady(),r.push(n);break}}return r}function Y(t){return t.closest(".jet-form-builder-row")}function Z(){if(!this.attrs?.field)return;const{root:t}=this.reporting.input,e=t.getInput(this.attrs.field);e.watch((()=>{this.attrs.value=e.value.current,this.reporting.valuePrev=null,this.reporting.validateOnChange()})),G(e.value.current)||(this.attrs.value=e.value.current)}function tt(t){for(const e of t.children)if(e.classList.contains("error-message"))return e;const e=t.querySelector(".jet-form-builder-col__end");return!!e&&tt(e)}const{ReportingInterface:et}=JetFormBuilderAbstract,{allRejected:rt}=JetFormBuilderFunctions;function it(){et.call(this),this.type="inherit",this.messages={},this.skipServerSide=!0,this.watchAttrs=[],this.queue=[]}it.prototype=Object.create(et.prototype),it.prototype.skipServerSide=!0,it.prototype.hasServerSide=!1,it.prototype.isProcess=null,it.prototype.queue=[],it.prototype.setRestrictions=function(){!function(t){W.length||(W=z("jet.fb.restrictions",[D,$,o,u,p,h,w,g,y,S,R]));for(const e of W){const r=new e;r.isSupported(t.getNode(),t)&&(r.setReporting(t),r.onReady(),t.restrictions.push(r))}}(this)},it.prototype.isSupported=function(t,e){this.type=function(t){var e;const r=Y(t),{validationType:i=""}=null!==(e=r?.dataset)&&void 0!==e?e:{};return i}(t);const r="inherit"===this.type?function(t){var e,r;const i=null!==(e=window?.JetFormsValidation)&&void 0!==e&&e;if(!1===i)return"";const s=t.getSubmit().getFormId(),{type:n=""}=null!==(r=i[s])&&void 0!==r?r:{};return n}(e):this.type;return!!r?.length},it.prototype.getErrorsRaw=async function(t){this.hasServerSide&&this.input.loading.start();const e=await rt(t);return this.valuePrev=this.input.getValue(),this.hasServerSide&&this.input.loading.end(),e},it.prototype.reportRaw=function(t){let e="";for(const r of t)if(e=r.getMessage(),e?.length)break;e?this.insertError(e):this.clearReport()},it.prototype.setInput=function(t){this.messages=function(t){var e;const r=Y(t),{validationMessages:i="{}"}=null!==(e=r?.dataset)&&void 0!==e?e:{};return JSON.parse(i)}(t.nodes[0]),et.prototype.setInput.call(this,t)},it.prototype.observeAttrs=function(){for(const t of this.watchAttrs)this.input.attrs.hasOwnProperty(t)&&this.input.attrs[t].value.watch((()=>{this.valuePrev=null,this.validateOnBlur()}))},it.prototype.clearReport=function(){(()=>{const t=Y(this.getNode());if(!t)return;t.classList.remove("field-has-error");const e=tt(t);e&&e.remove()})(),this.makeValid()},it.prototype.insertError=function(t){(()=>{const e=Y(this.getNode()),r=this.createError(e,t);if(e.classList.add("field-has-error"),r.isConnected)return;const i=e.querySelector(".jet-form-builder-col__end");i?i.appendChild(r):e.appendChild(r)})(),this.makeInvalid()},it.prototype.createError=function(t,e){const r=tt(t);if(r)return r.innerHTML=e,r;const i=this.getNode(),s=document.createElement("div");return s.classList.add("error-message"),s.innerHTML=e,s.id=i.id+"__error",s},it.prototype.makeInvalid=function(){var t;const e=tt(Y(this.getNode()));this.getNode().setAttribute("aria-invalid","true"),this.getNode().setAttribute("aria-describedby",null!==(t=e?.id)&&void 0!==t&&t)},it.prototype.makeValid=function(){this.getNode().removeAttribute("aria-invalid"),this.getNode().removeAttribute("aria-describedby")},it.prototype.validateOnChange=function(t=!1){const e=()=>{this.input.getContext().setSilence(!1),this.validate().then((()=>{})).catch((()=>{})).finally((()=>{this.isProcess=null;const t=[...this.queue];this.queue=[],t.length&&(this.valuePrev=null,t.forEach((t=>t())))}))};t&&this.isProcess&&(this.queue=[e]),this.isProcess||(this.isProcess=!0,e())},it.prototype.validateOnBlur=function(){this.isProcess||(this.isProcess=!0,this.skipServerSide=!1,this.input.getContext().setSilence(!1),this.validate().then((()=>{})).catch((()=>{})).finally((()=>{this.skipServerSide=!0,this.hasServerSide=!1,this.isProcess=null})))},it.prototype.validateOnChangeState=function(){return this.isProcess?Promise.resolve():(this.isProcess=!0,this.skipServerSide=!1,new Promise(((t,e)=>{this.validate().then(t).catch(e).finally((()=>{this.skipServerSide=!0,this.hasServerSide=!1,this.isProcess=null}))})))},it.prototype.canProcessRestriction=function(t){return!this.skipServerSide||!t.isServerSide()},it.prototype.beforeProcessRestriction=function(t){this.hasServerSide=!!t.isServerSide()||this.hasServerSide};const st=it;var nt;const{addFilter:ot,addAction:at}=JetPlugins.hooks;at("jet.fb.observe.after","jet-form-builder/observe-dynamic-attrs",(function(t){t.getInputs().forEach((t=>{t.reporting instanceof st&&t.reporting.observeAttrs()}))}),11),ot("jet.fb.reporting","jet-form-builder/advanced-reporting",(function(t){return[st,...t]})),window.JetFormBuilderAbstract={...null!==(nt=window.JetFormBuilderAbstract)&&void 0!==nt?nt:{},AdvancedRestriction:s,NotEmptyRestriction:S}})();