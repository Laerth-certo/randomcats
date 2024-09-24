"use strict";(self.webpackChunkcodegen=self.webpackChunkcodegen||[]).push([[721,7560,8183],{7560:(e,t,n)=>{function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},i.apply(this,arguments)}n.d(t,{Z:()=>i})},40721:(e,t,n)=>{n.r(t),n.d(t,{AnalyticsService:()=>r,BulkAnalytics:()=>o,initializeAnalytics:()=>c});var i=n(7560);const a=new Set(["category","action","label","value","meta","workspaceId","workspaceType","entityId","entityType","traceId","variantId","experimentId","utm_source","utm_medium","utm_campaign","utm_content","utm_term","userId","teamId"]),o=new class{constructor(){this.configuration={batchTimeout:3e4},this.timer=void 0,this.payloads=[],this.clickEventPayloads=[],this.logger=void 0,this.payloads=[]}configure(e){this.configuration=Object.entries(e).reduce(((t,[n,a])=>"logger"===n?(this.logger=e.logger,t):(0,i.Z)({},t,{[n]:a})),this.configuration),void 0===this.timer&&(this.timer=setInterval((()=>{this.sendPayloads(),this.sendClickEventPayloads()}),this.configuration.batchTimeout))}onDeactivate(){try{this.sendPayloads({isFlushBeforePageClose:!0})}catch(t){var e;null==this||null==(e=this.logger)||e.error("Flushing analytics event before page unload failed",t)}}getEnv(){var e;const t=null==(e=this.configuration)?void 0:e.environment;var n;if(!t)return null==(n=this.logger)||n.warn("The environment for analytic service was not set"),"beta";switch(t){case"prod":return"production";case"stage":return"staging";case"staging":case"production":case"beta":return t;case"dev":case"develop":case"preview":case"development":return"beta";default:throw new Error("The provided env for the analytic service is incorrect")}}getBaseObject(e){var t,n,a,o,r,s;if(null==(t=this.configuration)||null==(t=t.appDetails)||!t.property)throw new Error("the analytic service was not configured: property in missing");const l=null==(n=this.configuration)?void 0:n.userInfo,c=null==(a=this.configuration)?void 0:a.workspaceInfo,u=Array.isArray(null==l?void 0:l.organizations)&&null!=l&&l.organizations[0]?null==l?void 0:l.organizations[0].id:(null==l?void 0:l.teamId)||"0";return(0,i.Z)({type:"events-general",indexType:"client-events",env:this.getEnv(),propertyId:null==(o=this.configuration)||null==(o=o.appDetails)?void 0:o.id,propertyVersion:null==(r=this.configuration)||null==(r=r.appDetails)?void 0:r.propertyVersion,property:null==(s=this.configuration)||null==(s=s.appDetails)?void 0:s.property,userId:(null==l?void 0:l.id)||"0",teamId:u},null!=e&&e.noActiveWorkspace?{}:{workspaceId:null==c?void 0:c.id,workspaceType:null==c?void 0:c.type})}extendEventWithBaseObject(e,t){const n=(new Date).toISOString();return(0,i.Z)({},this.getBaseObject(t),{timestamp:n},Object.entries(e).reduce(((e,[t,n])=>a.has(t)&&null!=n?(0,i.Z)({},e,{[t]:n}):e),{}))}addCurrentEvent(e,t){try{const n=this.extendEventWithBaseObject(e,t);this.queuePayload(n)}catch(e){var n;null==(n=this.logger)||n.error(null==e?void 0:e.message,e)}}addCurrentClickEvent(e,t){try{const n=this.extendEventWithBaseObject(e,t);this.queueClickEventPayload(n)}catch(e){var n;null==(n=this.logger)||n.error(null==e?void 0:e.message,e)}}async addCurrentSyncDiscarded(e,t,n,a){try{if("history"===e)return;const o=(0,i.Z)({},this.getBaseObject(),{verb:e,entity:t,data:JSON.stringify(n),type:"sync",indexType:"client-errors"},a?{error:JSON.stringify(a)}:{});await this.sendRequest(JSON.stringify(o))}catch(e){var o;null==(o=this.logger)||o.log("Could not send sync error to LS")}}queuePayload(e){this.configuration.isEnabled&&this.payloads.push(e)}queueClickEventPayload(e){this.configuration.isEnabled&&this.clickEventPayloads.push(e)}sendPayloads(e){if(this.configuration.isEnabled){if(this.payloads.length>0){let t,n="";for(const e of this.payloads)n+=JSON.stringify(e)+"\n";e&&e.isFlushBeforePageClose&&(t={useBeacon:e.isFlushBeforePageClose}),this.sendRequest(n,t),this.clearPayloads()}}else this.clearPayloads()}clearClickPayloads(){this.clickEventPayloads=[]}sendClickEventPayloads(e){if(this.configuration.isEnabled){if(this.payloads.length>0){let t,n="";for(const e of this.clickEventPayloads)n+=JSON.stringify(e)+"\n";null!=e&&e.isFlushBeforePageClose&&(t={useBeacon:e.isFlushBeforePageClose}),this.sendRequest(n,t,!0),this.clearClickPayloads()}}else this.clearClickPayloads()}sendRequest(e,t,i){var a,o;const r=i?null==(a=this.configuration)?void 0:a.clickAnalyticsUrl:this.configuration.analyticsUrl;let s;var l;if(!r)return void(null==(l=this.logger)||l.error("Can not send the analytics event, the URL is empty. Please check the configuration of analytics-service"));try{s=btoa(e)}catch(t){var c;return void(null==(c=this.logger)||c.error("Could not run btoa on reqBodyText: "+e))}let u;null!=t&&t.useBeacon&&"function"==typeof(null==(o=navigator)?void 0:o.sendBeacon)&&(u=navigator.sendBeacon(r,s)),u||("function"==typeof fetch?fetch:n(34911))(r,{method:"POST",headers:{"Content-Type":"text/plain"},body:s,credentials:"omit"})}clearPayloads(){this.payloads=[]}sendEventImmediately(e){try{const t=this.extendEventWithBaseObject(e),n=JSON.stringify(t);this.sendRequest(n)}catch(e){var t;null==(t=this.logger)||t.error(null==e?void 0:e.message,e)}}},r={addEvent:function(e,t,n,i,a,r){return o.addCurrentEvent({category:e,action:t,label:n,value:i,meta:a},{noActiveWorkspace:null==r?void 0:r.noActiveWorkspace})},addEventV2:function(e,t){return o.addCurrentEvent(e,{noActiveWorkspace:null==t?void 0:t.noActiveWorkspace})},addEventV2AndPublish:function(e,t={}){this.addEventV2(e,t),o.sendPayloads()}};var s=n(88876);const l=e=>{window.newrelic.addPageAction("InitialLoadMetrics",(0,i.Z)({route:window.location.pathname,userId:"0"},e))},c=e=>{try{o.configure(e),null==(n=window.newrelic)||null==n.setCustomAttribute||n.setCustomAttribute("postman-app-type","distributed-frontend"),(()=>{if(!window.newrelic)throw new Error("New Relic not initialized");(0,s.onTTFB)((({value:e})=>e&&l({timeToFirstByte:e}))),(0,s.onFCP)((({value:e})=>e&&l({firstContentfulPaint:e}))),(0,s.onLCP)((({value:e})=>e&&l({largestContentfulPaint:e}))),(0,s.onFID)((({value:e})=>e&&l({firstInputDelay:e}))),(0,s.onCLS)((({value:e})=>e&&l({cumulativeLayoutShift:e})))})()}catch(n){var t;null==e||null==(t=e.logger)||t.error("Analytics initialization error:",n)}var n}},34911:(e,t,n)=>{var i=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw new Error("unable to locate global object")}();e.exports=t=i.fetch,i.fetch&&(t.default=i.fetch.bind(i)),t.Headers=i.Headers,t.Request=i.Request,t.Response=i.Response}}]);
//# sourceMappingURL=721.28ba14bc23ece0c5.js.map