"use strict";(self.webpackChunkcode_editor=self.webpackChunkcode_editor||[]).push([[5319,7560,9886],{7560:(e,t,n)=>{function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:()=>r})},98283:(e,t,n)=>{function r(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:()=>r})},75662:(e,t,n)=>{n.r(t),n.d(t,{PostmanBootstrap:()=>A});var r=n(40540),a=n(21180),i=n(97201),o=n(19578),s=n(59530),c=n(43794),l=n(47291),d=n(44118),p=n(56880),u=n(26663),m=n.n(u),h=n(13101),f=n(21466);function y(){try{var e;return(null==(e=JSON.parse(window.APP_DETAILS))?void 0:e.isAnalyticsEnabled)&&!m().DISABLE_ANALYTICS}catch(e){(0,a.logError)(e,{appId:"bootstrap",errorElementId:"init-analytics-VSCode",stack:void 0})}return!m().DISABLE_ANALYTICS}function g(){var e;try{return JSON.parse(window.APP_DETAILS)}catch(e){(0,a.logError)(e,{appId:"bootstrap",errorElementId:"init-analytics-VSCode",stack:void 0})}const t=n(92640)(navigator.userAgent),r=(null==t?void 0:t.browser)||{},i=null!=(e=window.APP_VERSION)?e:"10.0.3-web-platform";return{version:r.name?`${i};${r.name};${r.version}`:`${i};unknown;unknown`,property:"postman-web-public"}}const S=function(){var e;if(window.INITIAL_WORKSPACE)try{return JSON.parse(window.INITIAL_WORKSPACE)}catch(e){return{}}switch(null==(e=window)||null==(e=e.pm)||null==(e=e.windowConfig)?void 0:e.process){case"runner":case"requester":try{return{}}catch(e){return{}}default:return{}}};f.VSCodeCommunicationsService.subscribe("ACCOUNT_DATA_UPDATED",(e=>{p.BulkAnalytics.configure({userInfo:{id:`${(null==e?void 0:e.userId)||0}`,teamId:`${(null==e?void 0:e.teamId)||0}`,organizations:[{id:`${(null==e?void 0:e.teamId)||0}`}]}}),null===e&&p.BulkAnalytics.configure({workspaceInfo:{}})}));var v=n(24568),E=n(39381),_=n(73920),w=n(52322);n(27086),async function(){(0,p.initializeAnalytics)({workspaceInfo:S(),userInfo:{id:(0,h.getUserId)(),teamId:(0,h.getTeamId)()||"0",organizations:[{id:(0,h.getTeamId)()}]},appDetails:g(),platform:"vscode",isEnabled:y(),batchTimeout:m().BATCH_ANALYTICS_TIMEOUT,analyticsUrl:m().ANALYTICS_URL,environment:"prod"}),window.addEventListener("beforeunload",(()=>{p.BulkAnalytics.onDeactivate()}),{capture:!0})}(),(0,l.initSentry)(),(0,d.bootstrapI18n)();const A=({children:e,appId:t,errorElementId:n,featureFlagsContext:l,isAmplitudeEventsTrackingEnabled:d})=>(d&&(0,E.initializeAmplitudeSDK)({apiKey:{NX_DEPLOY_VERSION:"prod.2024-07-31.09-23",NX_RELEASE_CHANNEL:"prod",NX_ASSET_PATH_PREFIX:"%%basePath%%",NX_CLI_SET:"true",NX_LOAD_DOT_ENV_FILES:"true",NX_WORKSPACE_ROOT:"/home/runner/work/postman-app-next/postman-app-next",NX_TERMINAL_OUTPUT_PATH:"/home/runner/work/postman-app-next/postman-app-next/node_modules/.cache/nx/terminalOutputs/10198834265640720683",NX_TASK_TARGET_PROJECT:"code-editor",NX_TASK_TARGET_TARGET:"build",NX_TASK_TARGET_CONFIGURATION:"production",NX_TASK_HASH:"10198834265640720683"}.AMPLITUDE_PROD_API_KEY}),(0,w.jsx)(r.StrictMode,{children:(0,w.jsx)(a.CustomErrorBoundary,{appId:t,errorElementId:n,children:(0,w.jsx)(i.DataFetchCacheProvider,{children:(0,w.jsx)(v.FeatureFlagsProvider,{featureFlagsContext:l,children:(0,w.jsx)(o.ThemeContextProvider,{children:(0,w.jsx)(s.StyleSheetManager,{disableCSSOMInjection:navigator.userAgent.toLowerCase().includes("prerender"),children:(0,w.jsxs)(c.VW,{children:[(0,w.jsx)(o.GlobalStyles,{}),(0,w.jsx)(_.LazyModalsContainer,{}),e]})})})})})})}))},35736:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(40540),a=n.n(r),i=n(1314),o=n.n(i),s=n(59530),c=n.n(s),l=n(9460),d=n(58560),p=(0,s.keyframes)(["0%,100%{transform:scaleY(0.4);opacity:0.8;}50%{transform:scaleY(1);opacity:1;}"]),u=c().div.withConfig({displayName:"SpinnerSmall__StyledSpinnerSmall",componentId:"zpipva-0"})(["display:flex;justify-content:space-between;width:",";height:",";text-align:center;font-size:",";& > div{height:100%;width:4px;background-color:",";opacity:0.2;border-radius:",";animation:"," 0.6s infinite ease-in-out;transform-origin:center center;}.rect-two{animation-delay:0.15s;}.rect-three{animation-delay:0.3s;}"],(function(e){return e.theme["size-xs"]}),(function(e){return e.theme["size-xs"]}),(function(e){return e.theme["text-size-xs"]}),(function(e){return e.theme["content-color-tertiary"]}),(function(e){return e.theme["border-radius-default"]}),p),m=c()(l.ZP).withConfig({displayName:"SpinnerSmall__StyledSmallSpinnerDescription",componentId:"zpipva-1"})(["display:inline-block;max-width:80ch;margin-left:",";word-break:break-word;"],(function(e){return e.theme["spacing-s"]}));function h(e){var t=e.description,n=e.className,r=e.type,i=e["data-testid"],o="bright"===r?"content-color-constant":"content-color-secondary";return a().createElement(d.Z,{justifyContent:"flex-start",alignItems:"center",className:n,type:r},a().createElement(u,{"data-testid":i},a().createElement("div",{className:"rect-one"}),a().createElement("div",{className:"rect-two"}),a().createElement("div",{className:"rect-three"})),t&&a().createElement(m,{color:o},t))}h.defaultProps={description:"",className:"","data-testid":"aether-spinner"},h.propTypes={description:o().string,className:o().string,type:o().oneOf(["default","bright"]).isRequired,"data-testid":o().string};var f=c().div.withConfig({displayName:"SpinnerLarge__StyledSpinnerLargeContainer",componentId:"sc-1v55r43-0"})(["height:100%;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:transparent;svg path,svg rect{fill:",";}"],(function(e){return"bright"===e.type?e.theme["content-color-constant"]:e.theme["content-color-tertiary"]})),y=c()(l.ZP).withConfig({displayName:"SpinnerLarge__StyledSpinnerDescription",componentId:"sc-1v55r43-1"})(["display:inline-block;max-width:80ch;word-break:break-word;text-align:center;font-size:",";"],(function(e){return e.theme["text-size-l"]})),g=(0,s.keyframes)(["0%,100%{transform:scaleY(0.4);opacity:0.8;}50%{transform:scaleY(1);opacity:1;}"]),S=c().div.withConfig({displayName:"SpinnerLarge__StyledSpinnerLarge",componentId:"sc-1v55r43-2"})(["display:flex;justify-content:space-between;width:",";height:",";text-align:center;font-size:",";margin-bottom:",";& > div{height:100%;width:8px;background-color:",";opacity:0.2;border-radius:",";animation:"," 0.6s infinite ease-in-out;transform-origin:center center;}.rect-two{animation-delay:0.15s;}.rect-three{animation-delay:0.3s;}"],(function(e){return e.theme["size-m"]}),(function(e){return e.theme["size-m"]}),(function(e){return e.theme["text-size-s"]}),(function(e){return e.theme["spacing-l"]}),(function(e){return e.theme["content-color-tertiary"]}),(function(e){return e.theme["border-radius-default"]}),g);function v(e){var t=e.className,n=e.description,r=e.type,i=e["data-testid"],o="bright"===r?"content-color-constant":"content-color-secondary";return a().createElement(f,{className:t,type:r},a().createElement(S,{"data-testid":i},a().createElement("div",{className:"rect-one"}),a().createElement("div",{className:"rect-two"}),a().createElement("div",{className:"rect-three"})),a().createElement(y,{color:o},n))}function E(e){var t=e.size,n=e.className,r=e.description,i=e.type,o=e["data-testid"];return"small"===t?a().createElement(h,{type:i,className:n,description:r,"data-testid":o}):"large"===t?a().createElement(v,{type:i,description:r||"Loading",className:n,"data-aether-id":"aether-spinner","data-testid":o}):null}v.defaultProps={className:"",description:"","data-testid":"aether-spinner"},v.propTypes={className:o().string,description:o().string,type:o().oneOf(["default","bright"]).isRequired,"data-testid":o().string},E.defaultProps={size:"small",className:"",description:"",type:"default","data-testid":"aether-spinner"},E.propTypes={size:o().oneOf(["small","large"]),className:o().string,type:o().oneOf(["default","bright"]),description:function(e){var t=e.description;return"string"!=typeof t?new Error("Spinner: description prop should have a string value"):t.length>80?new Error("Spinner: the description prop should not have a character length of more than 80."):null},"data-testid":o().string}}}]);
//# sourceMappingURL=5319.c8715223b7661b86.js.map