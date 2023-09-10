import t from"@hw-agconnect/api";import{AGCError as e,AGCErrorCode as o}from"@hw-agconnect/instance";import{Logger as n}from"@hw-agconnect/log";import{UAParser as r}from"ua-parser-js";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var s=function(t,e){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)};function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}function i(t,e,o,n){return new(o||(o=Promise))((function(r,s){function a(t){try{u(n.next(t))}catch(t){s(t)}}function i(t){try{u(n.throw(t))}catch(t){s(t)}}function u(t){var e;t.done?r(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,i)}u((n=n.apply(t,e||[])).next())}))}function u(t,e){var o,n,r,s,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(s){return function(i){return function(s){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,n&&(r=2&s[0]?n.return:s[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,s[1])).done)return r;switch(n=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){a.label=s[1];break}if(6===s[0]&&a.label<r[1]){a.label=r[1],r=s;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(s);break}r[2]&&a.ops.pop(),a.trys.pop();continue}s=e.call(t,a)}catch(t){s=[6,t],n=0}finally{o=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,i])}}}var c=function(){function t(){}return t.prototype.getPlatform=function(){return""},t.prototype.getPlatformVersion=function(){return""},t.prototype.getPackageName=function(){return""},t.prototype.getAppVersion=function(){return""},t.prototype.getLanguage=function(){return""},t.prototype.getScript=function(){return""},t.prototype.getCountry=function(){return""},t.prototype.getSystemInfo=function(){return{name:"",version:""}},t.prototype.getBrowsersInfo=function(){return{name:"",version:""}},t}(),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.getPlatform=function(){return"JS-SDK-QuickGame"},e.prototype.getPlatformVersion=function(){var t=qg.getSystemInfoSync();return t?t.system:""},e.prototype.getLanguage=function(){var t=qg.getSystemInfoSync();return t?t.language:""},e}(c),p=function(){function t(){this.logger=n.createLogger("AGCWebSocketService")}return t.prototype.getReadyState=function(){return this.websocket?Number(this.websocket.readyState):null},t.prototype.send=function(t,e,o){try{if(this.websocket){if(this.websocket.send(t),e)return e()}else if(o)return o()}catch(t){if(this.logger.error(t),o)return o()}},t.prototype.close=function(t,e,o,n){try{if(this.websocket){if(this.websocket.close(t,e),o)return o()}else if(n)return n()}catch(t){if(this.logger.error(t),n)return n()}},t.prototype.onOpen=function(t){if(!this.websocket)throw new e(o.WEBSOCKET_ERROR,{message:"webSocket connect fail"},"network");this.websocket.onopen=t},t.prototype.onMessage=function(t){if(!this.websocket)throw new e(o.WEBSOCKET_ERROR,{message:"webSocket connect fail"},"network");this.websocket.onmessage=function(e){t&&t(e.data)}},t.prototype.onClose=function(t){if(!this.websocket)throw new e(o.WEBSOCKET_ERROR,{message:"webSocket connect fail"},"network");this.websocket.onclose=function(e){t&&t(e.code,e.reason,e.wasClean)}},t.prototype.onError=function(t){if(!this.websocket)throw new e(o.WEBSOCKET_ERROR,{message:"webSocket connect fail"},"network");this.websocket.onerror=function(e){t&&t(e)}},t}(),f=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return a(n,t),n.prototype.connect=function(t,n,r){return this.websocket&&3!=this.websocket.readyState&&(this.websocket.close(),this.websocket=null),this.websocket=new WebSocket(t,r),null==this.websocket||null==this.websocket?(this.logger.error("webSocket create fail"),Promise.reject(new e(o.WEBSOCKET_ERROR,{message:"webSocket create failed"},"network"))):Promise.resolve()},n}(p),d=function(){function t(){this.logger=n.createLogger("AGCFileTransloadService"),this.task=void 0}return t.prototype.downloadWithTask=function(t){var e=this;return new Promise((function(o,n){e.task=qg.downloadFile({url:t.url,header:t.header,filePath:t.filePath,success:function(e){var r={data:e.data,status:e.status,filePath:e.filePath,header:e.header};null!=t.validateStatus?t.validateStatus(e.statusCode)?o(r):n({code:e.statusCode,message:"downloadtask request failed with status code "+e.statusCode,response:{data:e.data,statusCode:e.statusCode}}):o(r)},fail:function(t,e){n({code:e,message:t.statusText,response:{data:t.data,statusCode:t.statusCode}})}})}))},t.prototype.onProgressUpdate=function(t){null!=this.task?this.task.onProgressUpdate(t):this.logger.error("please make sure you have called downloadWithTask function")},t.prototype.abort=function(){null!=this.task?this.task.abort():this.logger.error("please make sure you have called downloadWithTask function")},t}(),h=function(){function t(){this.logger=n.createLogger("AGCFileTransloadService"),this.task=void 0}return t.prototype.uploadWithTask=function(t){var e=this;return new Promise((function(o,n){e.task=qg.uploadFile({url:t.url,filePath:t.filePath,name:t.name,header:t.header,formData:t.formData,success:function(e){var r=e.data;if("string"==typeof e.data)try{r=JSON.parse(e.data)}catch(t){}var s={data:r,statusCode:e.statusCode};null!=t.validateStatus?t.validateStatus(e.statusCode)?o(s):n({code:e.statusCode,message:"uploadtask request failed with status code "+e.statusCode,response:{data:r,statusCode:e.statusCode}}):o(s)},fail:function(t,e){n({code:e,message:t.statusText,response:{data:t.data,status:e,statusText:t.statusText,headers:t.headers}})}})}))},t.prototype.onProgressUpdate=function(t){null!=this.task?this.task.onProgressUpdate(t):this.logger.error("please make sure you have called uploadWithTask function")},t.prototype.offProgressUpdate=function(){null!=this.task?this.task.offProgressUpdate():this.logger.error("please make sure you have called uploadWithTask function")},t.prototype.abort=function(){null!=this.task?this.task.abort():this.logger.error("please make sure you have called uploadWithTask function")},t}(),g=function(){function t(){this.uploadTaskIns=void 0,this.downloadTaskIns=void 0}return t.prototype.downloadWithTask=function(t){return this.downloadTaskIns||(this.downloadTaskIns=new d),this.downloadTaskIns.downloadWithTask(t)},t.prototype.downloadtaskOnProgressUpdate=function(t){this.downloadTaskIns||(this.downloadTaskIns=new d),this.downloadTaskIns.onProgressUpdate(t)},t.prototype.downloadtaskAbort=function(){this.downloadTaskIns||(this.downloadTaskIns=new d),this.downloadTaskIns.abort()},t.prototype.uploadWithTask=function(t){return this.uploadTaskIns||(this.uploadTaskIns=new h),this.uploadTaskIns.uploadWithTask(t)},t.prototype.uploadtaskOnProgressUpdate=function(t){this.uploadTaskIns||(this.uploadTaskIns=new h),this.uploadTaskIns.onProgressUpdate(t)},t.prototype.uploadtaskOffProgressUpdate=function(){this.uploadTaskIns||(this.uploadTaskIns=new h),this.uploadTaskIns.offProgressUpdate()},t.prototype.uploadtaskAbort=function(){this.uploadTaskIns||(this.uploadTaskIns=new h),this.uploadTaskIns.abort()},t}();function w(t){return new Promise((function(e,o){var n=new XMLHttpRequest;if(null!=t.timeout&&null!=t.timeout&&(n.timeout=t.timeout),n.responseType=t.responseType,n.open(t.method,t.url),null!=t.headers&&null!=t.headers)for(var r in t.headers)t.headers.hasOwnProperty(r)&&n.setRequestHeader(r,t.headers[r]);var s=null;"PUT"!=t.method&&"POST"!=t.method&&"put"!=t.method&&"post"!=t.method||(s=t.data),"GET"!=t.method&&"DELETE"!=t.method&&"get"!=t.method&&"delete"!=t.method||(s=t.params),s instanceof ArrayBuffer||(s=JSON.stringify(s)),n.onreadystatechange=function(){if(4===n.readyState)if(200==n.status){var r={data:k(n,t),status:n.status,statusText:n.statusText,headers:n.getAllResponseHeaders()};e(r)}else{r={data:k(n,t),status:n.status,statusText:n.statusText};o(r)}},n.onerror=function(){o({message:"request error"})},n.ontimeout=function(){o({message:"request timeout"})},n.send(s)}))}function k(t,e){var o=!0;if(null!=e.transformResponse&&null!=e.transformResponse&&(o=!1),""===t.responseType||"text"===t.responseType){var n=void 0;try{n=o?JSON.parse(t.response):e.transformResponse[0](t.response)}catch(e){n=t.response}return n}return t.response}var y=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return a(n,t),n.prototype.sendRequest=function(t,n,r,s,a){return i(this,void 0,void 0,(function(){var i,c;return u(this,(function(u){switch(u.label){case 0:return this.checkParam(n)?(i={url:n,method:t,headers:s,timeout:null==a?void 0:a.timeout,transformResponse:null==a?void 0:a.transformResponse,responseType:null==a?void 0:a.responseType},"PUT"!=t&&"POST"!=t||(i.data=r),"GET"!=t&&"DELETE"!=t||(i.params=r),a&&a.throwOriginException?[2,w(i)]:[4,w(i).catch((function(t){return Promise.reject(new e(o.NETWORK_REQUEST_ERROR,t,"network"))}))]):[2,Promise.reject(new e(o.NETWORK_REQUEST_ERROR,{message:"url is illegal"},"network"))];case 1:return c=u.sent(),[2,Promise.resolve(c)]}}))}))},n}(function(){function t(){this.CancelToken=void 0}return t.prototype.post=function(t,e,o,n){return this.sendRequest("POST",t,e,o,n)},t.prototype.get=function(t,e,o,n){return this.sendRequest("GET",t,e,o,n)},t.prototype.delete=function(t,e,o,n){return this.sendRequest("DELETE",t,e,o,n)},t.prototype.put=function(t,e,o,n){return this.sendRequest("PUT",t,e,o,n)},t.prototype.checkParam=function(t){return!(!t||t.match(/\s/g)||!t.match(/^(ht)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?/))},t}()),m=function(t){function n(){var n=t.call(this)||this;if(n.WebSocketImpl="MozWebSocket"in window?MozWebSocket:WebSocket,!n.WebSocketImpl)throw new e(o.WEBSOCKET_NOT_SUPPORT,{message:"Sorry, your browser does not support WebSockets."},"network");return n}return a(n,t),n.prototype.connect=function(t,n,r){if(this.websocket&&3!=this.websocket.readyState&&(this.websocket.close(),this.websocket=null),this.websocket=new this.WebSocketImpl(t,r),!this.websocket)throw new e(o.WEBSOCKET_ERROR,{message:"webSocket create fail"},"network");return Promise.resolve()},n}(p),v=function(e){function o(o){var r=e.call(this)||this;return r.logger=n.createLogger("AGCPlatformInfoService"),r.instance=o||t.instance(),r}return a(o,e),o.prototype.getPlatform=function(){return"JS-SDK"},o.prototype.getAppVersion=function(){return this.instance.getAppVersion()},o.prototype.getLanguage=function(){var t;return(t=navigator.languages&&navigator.languages[0]?navigator.languages[0]:navigator.language).toLowerCase().length>2?t.toLowerCase().substr(0,2):""},o.prototype.getSystemInfo=function(){var t="",e="";try{var o=navigator.userAgent,n=new r;n.setUA(o);var s=n.getResult();t=s.os.name,e=s.os.version}catch(t){this.logger.warn("get system info failed")}return"Mac OS"===t&&(t="Macintosh"),{name:t,version:e}},o.prototype.getBrowsersInfo=function(){var t="",e="";try{var o=navigator.userAgent,n=new r;n.setUA(o);var s=n.getResult();t=s.browser.name,e=s.browser.version}catch(t){this.logger.warn("get browser info failed")}return{name:t,version:e}},o}(c),T=function(){try{return null==qg}catch(t){return!0}}();var b=t;b.registerInternalService({name:"AGCNetworkService",serviceFactory:function(t){return new y}}),b.registerInternalService({name:"AGCWebSocketService",serviceFactory:function(t){return T?new m:new f}}),b.registerInternalService({name:"AGCPlatformInfoService",serviceFactory:function(t){return T?new v(t):new l}}),b.registerInternalService({name:"AGCFileTransloadService",serviceFactory:function(t){return T?null:new g}});
