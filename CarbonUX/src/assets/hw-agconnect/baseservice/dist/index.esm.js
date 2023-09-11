import e from"@hw-agconnect/api";import{AGCError as t,AGCErrorCode as n}from"@hw-agconnect/instance";import{Logger as i}from"@hw-agconnect/log";import{DEFAULT_CATEGORY as r}from"@hw-agconnect/core";import"@hw-agconnect/storage";import"@hw-agconnect/network";
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
***************************************************************************** */var o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function s(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{c(i.next(e))}catch(e){o(e)}}function a(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((i=i.apply(e,t||[])).next())}))}function a(e,t){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,i=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(r=s.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){s.label=o[1];break}if(6===o[0]&&s.label<r[1]){s.label=r[1],r=o;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(o);break}r[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}var c=function(){function e(){this.TWO_MINUTES_EARLY=12e4,this.ONE_HOUR=36e5,this.expiration=0,this.tokenString="",this.issuedAt="0",this.notBefore="0",this.lastRefreshTime=0}return e.prototype.constructFromJson=function(e){this.expiration=e.expiration,this.issuedAt=e.issuedAt,this.tokenString=e.tokenString,this.notBefore=e.notBefore,this.lastRefreshTime=e.lastRefreshTime},e.prototype.isValid=function(){var e=(new Date).getTime(),t=this.lastRefreshTime+1e3*this.expiration-this.TWO_MINUTES_EARLY;return null!=this.tokenString&&e<=t},e.prototype.allowRefresh=function(){return(new Date).getTime()-this.lastRefreshTime>this.ONE_HOUR},e}(),u=function(e){function t(t){var n=e.call(this,t)||this;return n.REQUEST_URL="/agc/apigw/oauth2/v1/token",n.useJwt=0,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.getBody=function(){return{grant_type:"client_credentials",client_id:this.getHeaderClientId(),client_secret:this.getClientSecret(),useJwt:this.getUseJwt()}},t.prototype.getUrl=function(){return this.getAgcgwUrl()+this.REQUEST_URL},t.prototype.setUseJwt=function(e){this.useJwt=e},t.prototype.getUseJwt=function(){return this.useJwt},t}(function(){function e(e){this.sdkPlatform="",this.sdkPlatformVersion="",this.sdkType="JS",this.packageName="",this.appVersion="",this.headerProductId="",this.headerAppId="",this.headerClientId="",this.clientSecret="",this.agcgwUrl="",this.agcgwBackUrl="",this.agcConfig=null,this.instance=null,this.sdkServiceName="agconnect-credential",this.sdkVersion="1.5.1",this.setAGCInstance(e)}return e.prototype.setAGCInstance=function(e){if(!e)throw new t(n.AGC_INNER_ERROR,{message:"set AGCInstance using null or undefined object"},"CredentialsService");this.instance=e,this.agcConfig=null},e.prototype.getHeaderClientId=function(){return this.initConfig()?this.headerClientId:""},e.prototype.getClientSecret=function(){return this.initConfig()?this.clientSecret:""},e.prototype.getAgcgwUrl=function(){return this.initConfig()?this.agcgwUrl:""},e.prototype.getHeader=function(){if(!this.initConfig())return"";var e=this.instance.getService("AGCPlatformInfoService");return e&&(this.sdkPlatform=e.getPlatform(),this.sdkPlatformVersion=e.getPlatformVersion(),this.packageName=e.getPackageName(),this.appVersion=e.getAppVersion()),{sdkVersion:this.sdkVersion,sdkPlatform:this.sdkPlatform,sdkServiceName:this.sdkServiceName,sdkPlatformVersion:this.sdkPlatformVersion,sdkType:this.sdkType,packageName:this.packageName,appVersion:this.appVersion,app_id:this.headerAppId,client_id:this.headerClientId,productId:this.headerProductId,"Content-Type":"application/json;charset=UTF-8"}},e.prototype.initConfig=function(){if(!this.instance)throw new t(n.AGC_INNER_ERROR,{message:"set AGCInstance using null or undefined object"},"CredentialsService");return null==this.agcConfig&&(this.agcConfig=this.instance.config(),this.headerProductId=this.agcConfig.client.product_id,this.headerClientId=this.agcConfig.client.client_id,this.headerAppId=this.agcConfig.client.app_id,this.clientSecret=this.agcConfig.client.client_secret,this.agcgwUrl=this.instance.getGwUrl(),this.agcgwBackUrl=this.instance.getGwBackUrl()),!0},e}()),l=function(){function e(){}return e.getInstance=function(){return e.instance||(e.instance=new e),e.instance},e.prototype.getStorage=function(e){var t=e.getService("AGCStorageService");if(null!=t)return t.getStorageInstance(0,e.getCryptImp());h.error("Get AGC storage Service failed.")},e}(),h=i.createLogger("CredentialsService"),g=function(){function i(t){this.instance=t||e.instance()}return i.prototype.removeToken=function(){if(this.instance.getCustomCredentialsProvider())return Promise.resolve();var e=this.getCredentialStoreKey(),i=l.getInstance().getStorage(this.instance);return i?i.remove(e).catch((function(e){return e instanceof t?Promise.reject(e):Promise.reject(new t(n.REMOVE_TOKEN_FAILED,e,"CredentialsService"))})):Promise.reject(new t(n.FAIL_TO_GET_STORAGE_SERVICE,null,"CredentialsService"))},i.prototype.getToken=function(e){return s(this,void 0,void 0,(function(){var i,r,o,u,g,f=this;return a(this,(function(d){switch(d.label){case 0:return this.instance.getCustomCredentialsProvider()?(i=new c,[4,this.instance.getCustomCredentialsProvider().getToken(!!e)]):[3,2];case 1:return(r=d.sent())&&r.tokenString&&r.expiration?isNaN(Number(r.expiration))||Number(r.expiration)<=0?(h.error("the customCredentialsProvider getToken must return valid expiration."),[2,Promise.reject(new t(n.GET_TOKEN_FAILED,{message:"the customCredentialsProvider getToken must return valid expiration"},"CredentialsService"))]):(i.tokenString=r.tokenString,i.expiration=r.expiration,i.lastRefreshTime=(new Date).getTime(),[2,Promise.resolve(i)]):(h.error("the customCredentialsProvider getToken method must contain return value: tokenString, expiration."),[2,Promise.reject(new t(n.GET_TOKEN_FAILED,{message:"the customCredentialsProvider getToken method must contain return value: tokenString, expiration"},"CredentialsService"))]);case 2:return o=this.getCredentialStoreKey(),(u=l.getInstance().getStorage(this.instance))?(g=new c,[2,u.get(o).then((function(t){return s(f,void 0,void 0,(function(){var n,i;return a(this,(function(r){switch(r.label){case 0:return t?g.constructFromJson(JSON.parse(t)):g=null,g&&g.isValid()?e&&g.allowRefresh()?[4,this.requestToken()]:[3,3]:[3,4];case 1:return n=r.sent(),[4,u.set(o,JSON.stringify(n))];case 2:return r.sent(),[2,Promise.resolve(n)];case 3:return[2,Promise.resolve(g)];case 4:return[4,this.requestToken()];case 5:return i=r.sent(),[4,u.set(o,JSON.stringify(i))];case 6:return r.sent(),[2,Promise.resolve(i)]}}))}))})).catch((function(e){return e instanceof t?Promise.reject(e):Promise.reject(new t(n.GET_TOKEN_FAILED,e,"CredentialsService"))}))]):[2,Promise.reject(new t(n.FAIL_TO_GET_STORAGE_SERVICE,null,"CredentialsService"))]}}))}))},i.prototype.getCredentialStoreKey=function(){return this.instance.name()===r?"agcClientToken:"+this.instance.config().client.client_id:"agcClientToken_"+this.instance.name()+":"+this.instance.config().client.client_id},i.prototype.requestToken=function(){return s(this,void 0,void 0,(function(){var e,i;return a(this,(function(r){return(e=this.instance.getService("AGCNetworkService"))?((i=new u(this.instance)).setUseJwt(1),[2,e.post(i.getUrl(),i.getBody(),i.getHeader()).then((function(e){if(e.data.ret&&0!=e.data.ret.code)return Promise.reject(new t({code:e.data.ret.code,message:e.data.ret.msg},null,"CredentialsService"));var n=new c;return n.tokenString=e.data.access_token,n.expiration=e.data.expires_in,n.lastRefreshTime=(new Date).getTime(),Promise.resolve(n)}))]):[2,Promise.reject(new t(n.FAIL_TO_GET_NETWORK_SERVICE,null,"CredentialsService"))]}))}))},i}();e.registerInternalService({name:"CredentialsService",serviceFactory:function(e){return new g(e)}});