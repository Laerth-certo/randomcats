/*! For license information please see 8912.0d59ccd4fba30f9d.js.LICENSE.txt */
"use strict";(self.webpackChunkcode_editor=self.webpackChunkcode_editor||[]).push([[8912,7560,1910],{7560:(e,n,t)=>{function a(){return a=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},a.apply(this,arguments)}t.d(n,{Z:()=>a})},38912:(e,n,t)=>{t.r(n),t.d(n,{CHANGE_LANGUAGE:()=>_,bootstrapI18n:()=>d,changeLanguage:()=>y,createInstance:()=>b,i18n:()=>r(),registerChangeLanguageListener:()=>v});var a=t(73398),r=t.n(a),o=t(11669),s=t.n(o),c=t(45352),i=t(36523),l=t.n(i);const u={lng:"en-US",fallbackLng:"en-US",load:"currentOnly",ns:["shell_core"],backend:{crossDomain:!0,loadPath:async(e,n)=>(e=>`%%basePath%%/${e}/locale/{{lng}}/{{ns}}.json`)(n[0].split("_")[0])},debug:["dev","beta"].includes(window.NX_RELEASE_CHANNEL),interpolation:{escapeValue:!1}},d=()=>{r().use(l()).use(s()).use(c.initReactI18next).init(u)};var f=t(7560),g=(t(40540),t(48980)),p=t.n(g);const _="CHANGE_LANGUAGE";function y(e){const n=new CustomEvent("CHANGE_LANGUAGE",{detail:e});document.body.dispatchEvent(n)}function v(e){function n(n){e(n.detail)}return r().on("languageChanged",e),document.body.addEventListener(_,n),()=>{r().off("languageChanged",e),document.body.removeEventListener(_,n)}}var E=t(52322);function b(e){const n=r().createInstance();return n.use(l()),n.use(p()(((n,t,a)=>{e(`${n}/${t}`).then((({default:e})=>{a(null,e)})).catch((e=>{a(e,null)}))}))),n.init((0,f.Z)({},u,{ns:["core"]})),v((e=>{n.changeLanguage(e)})),{i18n:n,useTranslation:(e,t)=>(0,c.useTranslation)(e,(0,f.Z)({},t,{i18n:n})),Translation:e=>(0,E.jsx)(c.Translation,(0,f.Z)({},e,{i18n:n}))}}},11837:(e,n,t)=>{var a=t(40540),r=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;r=o("react.element"),n.Fragment=o("react.fragment")}var s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var a,o={},l=null,u=null;for(a in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(u=n.ref),n)c.call(n,a)&&!i.hasOwnProperty(a)&&(o[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===o[a]&&(o[a]=n[a]);return{$$typeof:r,type:e,key:l,ref:u,props:o,_owner:s.current}}n.jsx=l,n.jsxs=l},52322:(e,n,t)=>{e.exports=t(11837)}}]);
//# sourceMappingURL=8912.0d59ccd4fba30f9d.js.map