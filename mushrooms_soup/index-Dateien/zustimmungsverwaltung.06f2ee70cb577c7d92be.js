!function(){var e,t={7962:function(e){e.exports=function(e,t,n){var o;return function(){var i=this,r=arguments;o?clearTimeout(o):n&&e.apply(i,r),o=setTimeout((function(){o=null,n||e.apply(i,r)}),t)}}},989:function(e){e.exports=function(e,t,n){n=n||{};var o,i,r,a=null,s=0,u=Date.now||function(){return(new Date).getTime()},c=function(){s=!1===n.leading?0:u(),a=null,r=e.apply(o,i),a||(o=i=null)};return function(){var l=u();s||!1!==n.leading||(s=l);var p=t-(l-s);return o=this,i=arguments,p<=0||p>t?(a&&(clearTimeout(a),a=null),s=l,r=e.apply(o,i),a||(o=i=null)):a||!1===n.trailing||(a=setTimeout(c,p)),r}}},6633:function(e,t,n){var o=window.Zeit||{},i={readyWhenYouAre:function(e){return e},clearQueue:function(){if("object"==typeof this.queue&&this.queue.length){var e=this.queue;n.e(8740).then((function(){var t=[n(8740)];(function(t){t(e)}).apply(null,t)})).catch(n.oe),this.queue=[]}},log:function(){location.hash.indexOf("debug")>-1&&console.debug.apply(console,arguments)},getColorScheme:function(){try{return"dark"===getComputedStyle(document.documentElement).getPropertyValue("--z-color-scheme").trim()?"dark":"light"}catch(e){return"light"}},nullOrUndefined(e){return null==e}};Object.assign(o,i),o.callMeLater.forEach((function(e){e[0].apply(null,e[1])})),o.debounce=n(7962),o.throttle=n(989),e.exports=o}},n={};function o(e){var i=n[e];if(void 0!==i)return i.exports;var r=n[e]={exports:{}};return t[e].call(r.exports,r,r.exports,o),r.exports}o.m=t,o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))},o.u=function(e){return e+".83f281af69cc94b2157d.js"},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},o.l=function(t,n,i,r){if(e[t])e[t].push(n);else{var a,s;if(void 0!==i)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var l=u[c];if(l.getAttribute("src")==t){a=l;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.src=t),e[t]=[n];var p=function(n,o){a.onerror=a.onload=null,clearTimeout(d);var i=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((function(e){return e(o)})),n)return n(o)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),s&&document.head.appendChild(a)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="",function(){var e={7390:0};o.f.j=function(t,n){var i=o.o(e,t)?e[t]:void 0;if(0!==i)if(i)n.push(i[2]);else{var r=new Promise((function(n,o){i=e[t]=[n,o]}));n.push(i[2]=r);var a=o.p+o.u(t),s=new Error;o.l(a,(function(n){if(o.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,i[1](s)}}),"chunk-"+t,t)}};var t=function(t,n){var i,r,a=n[0],s=n[1],u=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(i in s)o.o(s,i)&&(o.m[i]=s[i]);if(u)u(o)}for(t&&t(n);c<a.length;c++)r=a[c],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),function(){"use strict";var e=o(6633),t=parseInt(e.settings.get("sourcepoint_account_id",692),10),n="https://"+e.settings.get("sourcepoint_cdn_cname"),i=e.settings.get("sourcepoint_property_href"),r=parseInt(e.settings.get("sourcepoint_property_id"),10),a=2,s=e.settings.get("sourcepoint_custom_purposes"),u=+e.wrapped.version.major,c=e.isMobileApp&&u>1,l="";function p(e){return null!=e&&e.purposes?(e.purposes.forEach((function(e){e.id=e._id,delete e.id})),e):e}function d(t){window.dataLayer=window.dataLayer||[],t.event&&(e.log("dataLayer",t),window.dataLayer.push(t))}function g(){var e=JSON.parse(s),t={has_consent:!1,purposes:[]};return"__tcfapi"in window?(window.__tcfapi("getCustomVendorConsents",a,(function(n,o){o&&e.forEach((function(e){n.consentedPurposes.find((function(t){return t._id===e._id}))?(e.consent=!0,"store_information"===e.slug&&(t.has_consent=!0)):e.consent=!1,t.purposes.push(e)}))})),t):{}}function f(t){(e.log("onMessageReceiveData",t),e.toggles.get("sourcepoint_tracking_update"))&&(0!==t.messageId&&d({event:"cmp_init",consent:p(g())}))}function w(t,n){e.log("onMessageChoiceSelect",t,n),e.toggles.get("sourcepoint_tracking_update")&&11===n&&(l="Zustimmen und weiter")}function m(t){e.log("onPrivacyManagerAction",t),d({event:"consent_layer_useractioncomplete",purposeConsent:t.purposeConsent})}function _(t){e.log("onPMCancel",t),d({event:"consent_layer_cancel"})}function h(t,n){var o;(e.log("onConsentReady",t,n),e.toggles.get("pur2_plausibility_check"))&&(!0!==(null==(o=e.user)?void 0:o.adFree)&&(e.log("Check for missing consent"),window.__tcfapi("getCustomVendorConsents",a,(function(t,n){if(n){var o=JSON.parse(e.settings.get("sourcepoint_required_purposes")),i=!0;o.forEach((function(n){t.consentedPurposes.find((function(e){return e._id===n._id}))||(e.log("Missing consent for purpose",n),i=!1)})),i?e.log("Consent plausible"):window.__tcfapi("postRejectAll",a,(function(t,n){if(n){var o=e.settings.get("sourcepoint_privacy_manager_id");e.log("postRejectAllResponse",t),window._sp_.loadPrivacyManagerModal(o)}}))}}))));e.toggles.get("pur2_retrigger_piano_after_decision")&&window.tp&&window.tp.customVariables&&window.tp.customVariables.pur_layer&&(window.tp.push(["setCustomVariable","pur_layer",!1]),window.tp.experience.execute());var i=g();if(e.toggles.get("sourcepoint_tracking_update")){var r={event:"cmp_status",consent:p(i)};""!==l&&(r.element_label=l,r.event="cmp_submit",l=""),d(r)}else d({event:"cmp_init",consent:i});window.Zeit.preventAndroidScrollBug&&"zappi"in window&&"function"==typeof window.zappi.postMessage&&(window.Zeit.preventAndroidScrollBug=!1,window.zappi.postMessage({type:"overscrolling",action:"on"}))}function v(t,n){e.log("onError",t,n)}!function(){if(e.log("cmp, start"),c){var o=e.cookieRead("creid"),s=o?o+"-"+e.settings.get("sourcepoint_authId_version"):null,u=e.cookieRead("authId");if(s&&s!==u){var p=e.settings.get("sourcepoint_authId_expire_days",30),g="https:"===window.location.protocol;e.cookieCreate("authId",s,p,"zeit.de",g,"lax")}}var b,y,k,C;e.toggles.get("sourcepoint_tracking_update")&&window.addEventListener("message",(function(e){if("object"==typeof e.data){var t=e.data;"sp.hideMessage"!==t.name||!t.fromPM||11!==t.actionType&&1!==t.actionType||(l=11===t.actionType?"Allen Zustimmen":"Ausgewählten Zustimmen")}})),"__tcfapi"in window&&window.__tcfapi("addEventListener",a,(function(e,t){t&&"cmpuishown"===e.eventStatus&&(d({event:"consent_layer_view"}),"zappi"in window&&"function"==typeof window.zappi.postMessage&&(window.Zeit.preventAndroidScrollBug=!0,window.zappi.postMessage({type:"overscrolling",action:"off"})))})),window._sp_={config:{targetingParams:(C={debug:window.location.href.indexOf("debug-sourcepoint")>-1,pur_status:null!=(b=e.user)&&b.adFree?"true":"false"},null!=(y=e.user)&&y.ssoid&&(C.login_status="true"),null!=(k=e.user)&&k.hasAbo&&(C.abo_status="true"),e.abtest&&e.abtest.sourcepointTargetingParams&&e.abtest.sourcepointTargetingParams.forEach((function(e){C[e.key]=e.value})),C),accountId:t,baseEndpoint:n,propertyHref:i,propertyId:r,events:{onMessageReceiveData:f,onMessageChoiceSelect:w,onPrivacyManagerAction:m,onPMCancel:_,onConsentReady:h,onError:v}}},e.toggles.get("sourcepoint_disabled_for_bots")&&function(){for(var e=window.navigator.userAgent.toLowerCase(),t=["apis-google","mediapartners-google","adsbot-google","googlebot","feedfetcher-google","google-read-aloud","duplexweb-google","google favicon","google-amphtml","google-inspectiontool","googleother","applebot","duckduckbot","bingpreview","bingbot","msnbot","msnbot-media","yahoo! slurp","yandexbot","toutiaospider","qwant-news","qwant.com","qwantify","exabot","sogou","baiduspider","crowdtanglebot","queryly","facebot","facebookexternalhit","twitterbot","bluesky","mastodon","pocketparser","pinterest","xing","feedly","linkedinbot","flipboardproxy","blp_bbot","socialflow","whatsapp","telegrambot","nuzzel","instapaper","discordbot","speedcurve","chrome-lighthouse","zonfrontendmonitoring","guzzlehttp","toutiaospider","upday.com","outbrain","nextcloud-news","linkpulse","embedly","newstral","audisto","botify","ia_archiver","archive.org_bot","zeno","grapeshotcrawler","smartology","cakephp","diezeit","cxensebot","brightcove"],n=t.length,o=0;o<n;o++)if(-1!==e.indexOf(t[o]))return!0}()||e.loadJS(n+"/wrapperMessagingWithoutDetection.js")}()}()}();