import{DEFAULT_CATEGORY as t}from"@hw-agconnect/core";import n from"@hw-agconnect/api";var e=function(){function t(t){this.encryptImpl=void 0,this.encryptImpl=t}return t.prototype.setEncryptImp=function(t){this.encryptImpl=t},t.prototype.decrypt=function(t){return null!=this.encryptImpl&&null!=this.encryptImpl&&null!=t&&null!=t?this.encryptImpl.decrypt(t):t},t.prototype.encrypt=function(t){return null!=this.encryptImpl&&null!=this.encryptImpl&&null!=t&&null!=t?this.encryptImpl.encrypt(t):t},t}(),r=function(){function t(){this.agcCryptImpl=new e}return t.getInstance=function(n,e){t.MiniProgramStorageMap.has(n)&&t.MiniProgramStorageMap.get(n)||t.MiniProgramStorageMap.set(n,new t);var r=t.MiniProgramStorageMap.get(n);return r.agcCryptImpl.setEncryptImp(e),r},t.prototype.get=function(t){var n=this;return new Promise((function(e,r){try{wx.getStorage({key:t,success:function(t){e(t?n.agcCryptImpl.decrypt(t.data):void 0)},fail:function(t){e(void 0)}})}catch(t){r(t)}}))},t.prototype.set=function(t,n){var e=this;return new Promise((function(r,o){try{wx.setStorage({key:t,data:e.agcCryptImpl.encrypt(n),success:function(){r()},fail:function(t){o(t)}})}catch(t){o(t)}}))},t.prototype.remove=function(t){return new Promise((function(n,e){try{wx.removeStorage({key:t,success:function(){n()},fail:function(t){e(t)}})}catch(t){e(t)}}))},t.MiniProgramStorageMap=new Map,t}(),o=function(){function n(n){this.name=t,n&&(this.name=n)}return n.prototype.getStorageInstance=function(t,n){return r.getInstance(this.name,n)},n.prototype.createPersistentStorage=function(){return r.getInstance(this.name)},n.prototype.createTemporaryStorage=function(){return r.getInstance(this.name)},n.prototype.createMemoryStorage=function(){return r.getInstance(this.name)},n}();n.registerInternalService({name:"AGCStorageService",serviceFactory:function(t){return new o(t.name())}});export{o as WxFactoryImpl};