(()=>{"use strict";var e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("FormBuilderPage",{scopedSlots:e._u([{key:"heading-after",fn:function(){return[r("PrintButton")]},proxy:!0}])},[e._v(" "),r("PostBoxGrid")],1)};e._withStripped=!0;const{PostBoxGrid:t,FormBuilderPage:r,PrintButton:n}=JetFBComponents,{mapGetters:o,mapMutations:i,mapActions:s}=Vuex;var a=function(e,t,r,n,o,i,s,a){var u,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=[],c._compiled=!0),u)if(c.functional){c._injectStyles=u;var p=c.render;c.render=function(e,t){return u.call(t),p(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,u):[u]}return{exports:e,options:c}}({name:"payment-print",components:{PostBoxGrid:t,FormBuilderPage:r,PrintButton:n}},e);const u=a.exports,{BaseStore:c,SingleMetaBoxesPlugin:p}=JetFBStore,{renderCurrentPage:d}=window.JetFBActions;d(u,{store:new Vuex.Store({...c,plugins:[p]})})})();