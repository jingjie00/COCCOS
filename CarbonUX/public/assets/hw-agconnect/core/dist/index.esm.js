var t="[DEFAULT_CATEGORY]",n=function(){function t(t){this.factory=t}return t.prototype.get=function(){return null==this.instance&&(this.instance=this.factory()),this.instance},t}(),i=function(){function t(t){this.instanceMap={},this.factory=t}return t.prototype.get=function(t){if(t&&Array.isArray(t)&&t.length>=1)return this.instanceMap[t[0]]||(this.instanceMap[t[0]]=this.factory(t)),this.instanceMap[t[0]];var n=new Array;return n[0]="[DEFAULT_CATEGORY]",this.get(n)},t}();export{t as DEFAULT_CATEGORY,i as InstanceMap,n as Singleton};
