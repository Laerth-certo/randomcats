"use strict";(self.webpackChunkcodegen=self.webpackChunkcodegen||[]).push([[9951,7560,8670],{7560:(e,n,r)=>{function t(){return t=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},t.apply(this,arguments)}r.d(n,{Z:()=>t})},79951:(e,n,r)=>{r.r(n),r.d(n,{initSentry:()=>l,sentryRouter:()=>f});var t=r(7560),a=r(26663),o=r.n(a),i=r(70381);function s(e){var n;if(null!=e&&null!=(n=e.exception)&&n.values)for(const n of e.exception.values){var r;if(null!=n&&null!=(r=n.stacktrace)&&r.frames)for(const e of n.stacktrace.frames)null!=e&&e.filename&&e.filename.replace(/\\/g,"/").includes("/dist/")&&(e.filename=["/",e.filename.replace(/\\/g,"/").split("/dist/").pop()].join(""))}return e}function l(e){o().SENTRY_DSN&&i.init((0,t.Z)({},e,{dsn:o().SENTRY_DSN,sampleRate:.2,tracesSampleRate:0,environment:"prod",release:"prod.2024-07-31.09-23",ignoreErrors:["ResizeObserver loop limit exceeded"],beforeSend:s}))}var u=r(40540),c=r(60607);const f=e=>{if(o().SENTRY_DSN){var n;const r=null==(n=i.getCurrentHub())?void 0:n.getClient();if(null!=r&&r.addIntegration)return r.addIntegration(new i.BrowserTracing({routingInstrumentation:i.reactRouterV6Instrumentation(u.useEffect,c.useLocation,c.useNavigationType,c.createRoutesFromChildren,c.matchRoutes)})),i.wrapCreateBrowserRouter(e)}return e}}}]);
//# sourceMappingURL=9951.d2caa7b91f9744a8.js.map