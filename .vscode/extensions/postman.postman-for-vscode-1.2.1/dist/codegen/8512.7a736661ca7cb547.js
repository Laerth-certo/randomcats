"use strict";(self.webpackChunkcodegen=self.webpackChunkcodegen||[]).push([[8512,7560,7397,25,9886],{73989:(e,t,n)=>{function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:()=>r})},64659:(e,t,n)=>{function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:()=>r})},4730:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(75572);function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(0,r.Z)(o.key),o)}}function a(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}},7560:(e,t,n)=>{function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:()=>r})},75663:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(74938);function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,r.Z)(e,t)}},98283:(e,t,n)=>{function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:()=>r})},74938:(e,t,n)=>{function r(e,t){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},r(e,t)}n.d(t,{Z:()=>r})},75662:(e,t,n)=>{n.r(t),n.d(t,{PostmanBootstrap:()=>A});var r=n(40540),o=n(21180),a=n(97201),i=n(19578),c=n(59530),l=n(36306),s=n(47291),u=n(44118),d=n(56880),p=n(26663),h=n.n(p),f=n(13101),m=n(21466);function g(){try{var e;return(null==(e=JSON.parse(window.APP_DETAILS))?void 0:e.isAnalyticsEnabled)&&!h().DISABLE_ANALYTICS}catch(e){(0,o.logError)(e,{appId:"bootstrap",errorElementId:"init-analytics-VSCode",stack:void 0})}return!h().DISABLE_ANALYTICS}function w(){var e;try{return JSON.parse(window.APP_DETAILS)}catch(e){(0,o.logError)(e,{appId:"bootstrap",errorElementId:"init-analytics-VSCode",stack:void 0})}const t=n(92640)(navigator.userAgent),r=(null==t?void 0:t.browser)||{},a=null!=(e=window.APP_VERSION)?e:"10.0.3-web-platform";return{version:r.name?`${a};${r.name};${r.version}`:`${a};unknown;unknown`,property:"postman-web-public"}}const v=function(){var e;if(window.INITIAL_WORKSPACE)try{return JSON.parse(window.INITIAL_WORKSPACE)}catch(e){return{}}switch(null==(e=window)||null==(e=e.pm)||null==(e=e.windowConfig)?void 0:e.process){case"runner":case"requester":try{return{}}catch(e){return{}}default:return{}}};m.VSCodeCommunicationsService.subscribe("ACCOUNT_DATA_UPDATED",(e=>{d.BulkAnalytics.configure({userInfo:{id:`${(null==e?void 0:e.userId)||0}`,teamId:`${(null==e?void 0:e.teamId)||0}`,organizations:[{id:`${(null==e?void 0:e.teamId)||0}`}]}}),null===e&&d.BulkAnalytics.configure({workspaceInfo:{}})}));var y=n(24568),C=n(39381),b=n(73920),E=n(52322);n(27086),async function(){(0,d.initializeAnalytics)({workspaceInfo:v(),userInfo:{id:(0,f.getUserId)(),teamId:(0,f.getTeamId)()||"0",organizations:[{id:(0,f.getTeamId)()}]},appDetails:w(),platform:"vscode",isEnabled:g(),batchTimeout:h().BATCH_ANALYTICS_TIMEOUT,analyticsUrl:h().ANALYTICS_URL,environment:"prod"}),window.addEventListener("beforeunload",(()=>{d.BulkAnalytics.onDeactivate()}),{capture:!0})}(),(0,s.initSentry)(),(0,u.bootstrapI18n)();const A=({children:e,appId:t,errorElementId:n,featureFlagsContext:s,isAmplitudeEventsTrackingEnabled:u})=>(u&&(0,C.initializeAmplitudeSDK)({apiKey:{NX_DEPLOY_VERSION:"prod.2024-07-31.09-23",NX_RELEASE_CHANNEL:"prod",NX_ASSET_PATH_PREFIX:"%%basePath%%",NX_CLI_SET:"true",NX_LOAD_DOT_ENV_FILES:"true",NX_WORKSPACE_ROOT:"/home/runner/work/postman-app-next/postman-app-next",NX_TERMINAL_OUTPUT_PATH:"/home/runner/work/postman-app-next/postman-app-next/node_modules/.cache/nx/terminalOutputs/6107486298345971058",NX_TASK_TARGET_PROJECT:"codegen",NX_TASK_TARGET_TARGET:"build",NX_TASK_TARGET_CONFIGURATION:"production",NX_TASK_HASH:"6107486298345971058"}.AMPLITUDE_PROD_API_KEY}),(0,E.jsx)(r.StrictMode,{children:(0,E.jsx)(o.CustomErrorBoundary,{appId:t,errorElementId:n,children:(0,E.jsx)(a.DataFetchCacheProvider,{children:(0,E.jsx)(y.FeatureFlagsProvider,{featureFlagsContext:s,children:(0,E.jsx)(i.ThemeContextProvider,{children:(0,E.jsx)(c.StyleSheetManager,{disableCSSOMInjection:navigator.userAgent.toLowerCase().includes("prerender"),children:(0,E.jsxs)(l.VW,{children:[(0,E.jsx)(i.GlobalStyles,{}),(0,E.jsx)(b.LazyModalsContainer,{}),e]})})})})})})}))},35482:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7560),o=n(40540),a=n.n(o),i=n(207),c=a().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a().createElement("path",{d:"M8 12C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12Z",fill:"#6B6B6B"}),a().createElement("path",{d:"M8 4C8.53541 4 8.95377 4.46229 8.9005 4.99504L8.54975 8.50248C8.52151 8.78492 8.28384 9 8 9C7.71616 9 7.47849 8.78492 7.45025 8.50248L7.0995 4.99504C7.04623 4.46228 7.46459 4 8 4Z",fill:"#6B6B6B"}),a().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z",fill:"#6B6B6B"})),l=a().forwardRef((function(e,t){return a().createElement(i.Z,(0,r.Z)({},e,{svg:c,ref:t}))}));l.getName=function(){return"icon-state-error-stroke"};const s=l},24867:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7560),o=n(40540),a=n.n(o),i=n(207),c=a().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a().createElement("path",{d:"M8 6C8.55228 6 9 5.55228 9 5C9 4.44772 8.55228 4 8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6Z",fill:"#6B6B6B"}),a().createElement("path",{d:"M6 8H7.5V11H6V12H10V11H8.5V7H6V8Z",fill:"#6B6B6B"}),a().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z",fill:"#6B6B6B"})),l=a().forwardRef((function(e,t){return a().createElement(i.Z,(0,r.Z)({},e,{svg:c,ref:t}))}));l.getName=function(){return"icon-state-info-stroke"};const s=l},38394:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7560),o=n(40540),a=n.n(o),i=n(207),c=a().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a().createElement("path",{d:"M11.6465 5.14642L7.00004 9.79287L4.35359 7.14642L3.64648 7.85353L7.00004 11.2071L12.3536 5.85353L11.6465 5.14642Z",fill:"#6B6B6B"}),a().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z",fill:"#6B6B6B"})),l=a().forwardRef((function(e,t){return a().createElement(i.Z,(0,r.Z)({},e,{svg:c,ref:t}))}));l.getName=function(){return"icon-state-success-stroke"};const s=l},74962:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(72247),o=n(54047),a=n(40540),i=n.n(a),c=n(1314),l=n.n(c),s=n(59530),u=n.n(s),d=n(43753),p=n(90265);function h(e,t){switch(e){case"h1":return"\n        font-size: ".concat(t["text-size-xxxl"],";\n        line-height: 1.2;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.72px;\n      ");case"h2":return"\n        font-size: ".concat(t["text-size-xxl"],";\n        line-height: 1.2;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.56px;\n      ");case"h3":return"\n        font-size: ".concat(t["text-size-xl"],";\n        line-height: 1.28;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.12px;\n      ");case"h4":return"\n        font-size: ".concat(t["text-size-l"],";\n        line-height: 1.44;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.12px;\n      ");case"h5":return"\n        font-size: ".concat(t["text-size-m"],";\n        line-height: 1.4;\n        color: ").concat(t["content-color-primary"],";\n      ");case"h6":return"\n        font-size: ".concat(t["text-size-m"],";\n        line-height: 1.4;\n        color: ").concat(t["content-color-secondary"],";\n      ");default:return null}}var f=u().h1.withConfig({displayName:"Heading__StyledHeading",componentId:"sc-137awpp-0"})(["margin:",";font-family:",";font-weight:",";word-break:",";",";",";",";",""],(function(e){return e.theme["spacing-zero"]}),(function(e){return e.theme["text-family-default"]}),(function(e){return e.theme["text-weight-medium"]}),(function(e){return e.wordBreak}),(function(e){return e.styleAs?h(e.styleAs,e.theme):h(e.as,e.theme)}),(function(e){return e.color&&"color: ".concat(e.theme[e.color],";")}),(function(e){return e.hasBottomSpacing&&function(e,t){switch(e){case"h1":return"margin-bottom: ".concat(t["spacing-l"]," !important");case"h2":return"margin-bottom: ".concat(t["spacing-m"]," !important");case"h3":return"margin-bottom: ".concat(t["spacing-s"]," !important");case"h4":case"h5":case"h6":return"margin-bottom: ".concat(t["spacing-xs"]," !important");default:return"margin: ".concat(t["spacing-zero"]," !important")}}(e.as,e.theme)}),(function(e){return t=e.isTruncated,n=e.maxLines,r="\n    display: -webkit-box;\n    -webkit-line-clamp: ".concat(n,";\n    -webkit-box-orient: vertical;  \n    overflow: hidden;\n    "),"\n    ".concat(t?"\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n\n      &::after {\n        content: ' ';\n        display: block;\n        width: 0;\n        height: 0;\n        line-height: 0;\n      }\n    ":"","\n    ").concat(n?r:"","\n    ");var t,n,r}));function m(e){var t=e.text,n=e.type,r=e.styleAs,c=e.color,l=e._wordBreak,s=e.className,u=e.hasBottomSpacing,d=e.isTruncated,h=e.maxLines,m=e.tooltip,g=e["data-testid"],w=e["data-click"],v=(0,a.useState)(!1),y=(0,o.Z)(v,2),C=y[0],b=y[1],E=i().createElement(f,{as:n,styleAs:r,color:c,className:s,"data-aether-id":"aether-heading","data-testid":g,"data-click":w,hasBottomSpacing:u,isTruncated:d,maxLines:h,onMouseEnter:function(e){e.target&&e.target.scrollWidth>e.target.offsetWidth?b(!0):b(!1)},wordBreak:l},t);return C&&(0,p.LX)(e)?(0,p.Ur)(E,m||t):E}m.defaultProps={color:"",type:"h1",styleAs:null,className:"",hasBottomSpacing:!1,isTruncated:!1,maxLines:void 0,tooltip:"",_wordBreak:"normal","data-testid":"aether-heading","data-click":""},m.propTypes={type:l().oneOf(["h1","h2","h3","h4","h5","h6"]),text:l().string.isRequired,color:l().oneOf([""].concat((0,r.Z)(Object.keys(d.globals.colors)),(0,r.Z)(Object.keys(d.aliases.light.content)))),styleAs:l().oneOf(["h1","h2","h3","h4","h5","h6"]),className:l().string,hasBottomSpacing:l().bool,isTruncated:function(e){var t=e.isTruncated,n=e.maxLines;return"boolean"!=typeof t?new Error("Heading: expected a boolean value for isTruncated prop"):t&&n?new Error("Heading: maxLines should not be used together with isTruncated prop"):null},maxLines:l().number,tooltip:function(e){var t=e.tooltip,n=e.isTruncated,r=e.maxLines;return"string"!=typeof t?new Error("Heading: tooltip prop should only have a string value."):!t||n&&!r?null:new Error("Heading: tooltip prop should only be used when using single-line truncation by using isTruncated prop.")},_wordBreak:l().oneOf(["normal","break-all","keep-all","break-word","inherit","initial","revert","unset"]),"data-testid":l().string,"data-click":l().string}}}]);
//# sourceMappingURL=8512.7a736661ca7cb547.js.map