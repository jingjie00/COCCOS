import t from"@hw-agconnect/api";import{DEFAULT_CATEGORY as e}from"@hw-agconnect/core";var n=function(){function t(t){this.encryptImpl=void 0,this.encryptImpl=t}return t.prototype.setEncryptImp=function(t){this.encryptImpl=t},t.prototype.decrypt=function(t){return null!=this.encryptImpl&&null!=this.encryptImpl&&null!=t&&null!=t?this.encryptImpl.decrypt(t):t},t.prototype.encrypt=function(t){return null!=this.encryptImpl&&null!=this.encryptImpl&&null!=t&&null!=t?this.encryptImpl.encrypt(t):t},t}(),r=require("@system.storage"),c=function(){function t(){this.agcCryptImpl=new n}return t.getInstance=function(e,n){!t.quickAppStoreMap.has(e)&&t.quickAppStoreMap.get(e)||t.quickAppStoreMap.set(e,new t);var r=t.quickAppStoreMap.get(e);return r.agcCryptImpl.setEncryptImp(n),r},t.prototype.get=function(t){var e=this;return new Promise((function(n,c){r.get({key:t,default:null,success:function(t){n(t&&""!=t?e.agcCryptImpl.decrypt(t):null)},fail:function(t,e){c(t)}})}))},t.prototype.remove=function(t){return new Promise((function(e,n){r.delete({key:t,success:function(t){e()},fail:function(t,r){200==r?e():n(t)}})}))},t.prototype.set=function(t,e){var n=this;return new Promise((function(c,p){r.set({key:t,value:n.agcCryptImpl.encrypt(e),success:function(t){c(t)},fail:function(t,e){p(t)}})}))},t.quickAppStoreMap=new Map,t}(),p=function(){function t(t){this.name=e,t&&(this.name=t)}return t.prototype.getStorageInstance=function(t,e){return c.getInstance(this.name,e)},t.prototype.createPersistentStorage=function(){return c.getInstance(this.name)},t.prototype.createTemporaryStorage=function(){return c.getInstance(this.name)},t.prototype.createMemoryStorage=function(){return c.getInstance(this.name)},t}();t.registerInternalService({name:"AGCStorageService",serviceFactory:function(t){return new p(t.name())}});