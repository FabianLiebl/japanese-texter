(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{qKIl:function(t,e,i){var n,s;n=[i,e,i("LvDl")],void 0===(s=function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e,i){this.registry=e,this.widgets=t,this.componentRegistry=i}return t.prototype.init=function(){for(var t in this.widgets){var e=this.registry.getFactory(this.widgets[t].component).createFromData(this.widgets[t]);i.extend(this.widgets[t],e)}for(var n=0,s=this.registry.getComponents();n<s.length;n++){var o=s[n];this.componentRegistry.registerComponent(o.name,o.component)}this.componentRegistry.registerData(this.widgets),this.componentRegistry.registerStore("widgetManager",this)},t}();e.default=n}.apply(e,n))||(t.exports=s)}}]);