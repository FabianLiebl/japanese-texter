(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{MySc:function(t,e,n){var r,o,i,s=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});r=[n,e,n("zEu5")],void 0===(o=function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.getFactory=function(e){return t.prototype.getFactory.call(this,e)},e.prototype.register=function(e,n,r){return t.prototype.register.call(this,e,n,r)},e}(n.Registry);e.default=r}.apply(e,r))||(t.exports=o)},iNhk:function(t,e,n){var r;void 0===(r=function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0})}.apply(e,[n,e]))||(t.exports=r)},"oZ/r":function(t,e,n){var r;void 0===(r=function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Component=void 0;var n=function(){function t(){this.entries=[]}return t.prototype.get=function(t){for(var e=0,n=this.entries;e<n.length;e++){var r=n[e];if(r.getName()==t)return r}throw'Entry with name "'+t+'" does not exist in registry'},t.prototype.getFactory=function(t){return this.get(t).getFactory()},t.prototype.getComponent=function(t){return this.get(t).getComponent()},t.prototype.register=function(t){return this.has(t.getName())&&this.deleteEntry(t.getName()),this.entries.push(t),this},t.prototype.deleteEntry=function(t){for(var e in this.entries)if(this.entries[e].getName()==t){this.entries.splice(parseInt(e),1);break}},t.prototype.has=function(t){for(var e=0,n=this.entries;e<n.length;e++){if(n[e].getName()==t)return!0}return!1},t.prototype.getComponents=function(){for(var t=[],e=0,n=this.entries;e<n.length;e++){var o=n[e];t.push(new r(o.getName(),o.getComponent()))}return t},t}();e.default=n;var r=function(t,e){this.name=t,this.component=e};e.Component=r}.apply(e,[n,e]))||(t.exports=r)},tqLq:function(t,e,n){var r;void 0===(r=function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0})}.apply(e,[n,e]))||(t.exports=r)},"y++U":function(t,e,n){var r;void 0===(r=function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0})}.apply(e,[n,e]))||(t.exports=r)},zEu5:function(t,e,n){var r,o;r=[n,e,n("oZ/r"),n("y++U"),n("iNhk"),n("tqLq")],void 0===(o=function(t,e,n,r,o,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ComponentAwareInterface=e.FactoryInterface=e.RegistryInterface=e.Registry=void 0,e.Registry=n.default,e.RegistryInterface=r.default,e.FactoryInterface=o.default,e.ComponentAwareInterface=i.default}.apply(e,r))||(t.exports=o)}}]);