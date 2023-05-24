(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./node_modules/@enhavo/app/index/IndexApp.ts":
/*!****************************************************!*\
  !*** ./node_modules/@enhavo/app/index/IndexApp.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var IndexApp = /** @class */function () {
    function IndexApp(eventDispatcher, view, actionManager, flashMessenger, modalManager, grid, formRegistry) {
      this.eventDispatcher = eventDispatcher;
      this.view = view;
      this.actionManager = actionManager;
      this.flashMessenger = flashMessenger;
      this.modalManager = modalManager;
      this.grid = grid;
      this.formRegistry = formRegistry;
    }
    IndexApp.prototype.init = function () {
      this.view.init();
      this.actionManager.init();
      this.flashMessenger.init();
      this.modalManager.init();
      this.grid.init();
      this.grid.load();
      this.view.ready();
      this.view.addDefaultCloseListener();
    };
    return IndexApp;
  }();
  exports["default"] = IndexApp;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvaW5kZXgvSW5kZXhBcHAudHMiXSwibmFtZXMiOlsiSW5kZXhBcHAiLCJldmVudERpc3BhdGNoZXIiLCJ2aWV3IiwiYWN0aW9uTWFuYWdlciIsImZsYXNoTWVzc2VuZ2VyIiwibW9kYWxNYW5hZ2VyIiwiZ3JpZCIsImZvcm1SZWdpc3RyeSIsInByb3RvdHlwZSIsImluaXQiLCJsb2FkIiwicmVhZHkiLCJhZGREZWZhdWx0Q2xvc2VMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0VBUUEsSUFBQUEsUUFBQTtJQVVJLFNBQUFBLFNBQ0lDLGVBQWdDLEVBQ2hDQyxJQUFVLEVBQ1ZDLGFBQTRCLEVBQzVCQyxjQUE4QixFQUM5QkMsWUFBMEIsRUFDMUJDLElBQVUsRUFDVkMsWUFBMEI7TUFFMUIsSUFBSSxDQUFDTixlQUFlLEdBQUdBLGVBQWU7TUFDdEMsSUFBSSxDQUFDQyxJQUFJLEdBQUdBLElBQUk7TUFDaEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBLGFBQWE7TUFDbEMsSUFBSSxDQUFDQyxjQUFjLEdBQUdBLGNBQWM7TUFDcEMsSUFBSSxDQUFDQyxZQUFZLEdBQUdBLFlBQVk7TUFDaEMsSUFBSSxDQUFDQyxJQUFJLEdBQUdBLElBQUk7TUFDaEIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBLFlBQVk7SUFDcEM7SUFFQVAsUUFBQSxDQUFBUSxTQUFBLENBQUFDLElBQUksR0FBSjtNQUVJLElBQUksQ0FBQ1AsSUFBSSxDQUFDTyxJQUFJLEVBQUU7TUFDaEIsSUFBSSxDQUFDTixhQUFhLENBQUNNLElBQUksRUFBRTtNQUN6QixJQUFJLENBQUNMLGNBQWMsQ0FBQ0ssSUFBSSxFQUFFO01BQzFCLElBQUksQ0FBQ0osWUFBWSxDQUFDSSxJQUFJLEVBQUU7TUFDeEIsSUFBSSxDQUFDSCxJQUFJLENBQUNHLElBQUksRUFBRTtNQUVoQixJQUFJLENBQUNILElBQUksQ0FBQ0ksSUFBSSxFQUFFO01BRWhCLElBQUksQ0FBQ1IsSUFBSSxDQUFDUyxLQUFLLEVBQUU7TUFDakIsSUFBSSxDQUFDVCxJQUFJLENBQUNVLHVCQUF1QixFQUFFO0lBQ3ZDLENBQUM7SUFDTCxPQUFBWixRQUFDO0VBQUQsQ0FBQyxDQXpDRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb25NYW5hZ2VyIGZyb20gXCJAZW5oYXZvL2FwcC9hY3Rpb24vQWN0aW9uTWFuYWdlclwiO1xuaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9FdmVudERpc3BhdGNoZXJcIjtcbmltcG9ydCBWaWV3IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3L1ZpZXdcIjtcbmltcG9ydCBGbGFzaE1lc3NlbmdlciBmcm9tIFwiQGVuaGF2by9hcHAvZmxhc2gtbWVzc2FnZS9GbGFzaE1lc3NlbmdlclwiO1xuaW1wb3J0IE1vZGFsTWFuYWdlciBmcm9tIFwiQGVuaGF2by9hcHAvbW9kYWwvTW9kYWxNYW5hZ2VyXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQGVuaGF2by9hcHAvZ3JpZC9HcmlkXCI7XG5pbXBvcnQgRm9ybVJlZ2lzdHJ5IGZyb20gXCJAZW5oYXZvL2FwcC9mb3JtL0Zvcm1SZWdpc3RyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleEFwcFxue1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZXZlbnREaXNwYXRjaGVyOiBFdmVudERpc3BhdGNoZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSB2aWV3OiBWaWV3O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgYWN0aW9uTWFuYWdlcjogQWN0aW9uTWFuYWdlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZsYXNoTWVzc2VuZ2VyOiBGbGFzaE1lc3NlbmdlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1vZGFsTWFuYWdlcjogTW9kYWxNYW5hZ2VyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZ3JpZDogR3JpZDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZvcm1SZWdpc3RyeTogRm9ybVJlZ2lzdHJ5O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGV2ZW50RGlzcGF0Y2hlcjogRXZlbnREaXNwYXRjaGVyLFxuICAgICAgICB2aWV3OiBWaWV3LFxuICAgICAgICBhY3Rpb25NYW5hZ2VyOiBBY3Rpb25NYW5hZ2VyLFxuICAgICAgICBmbGFzaE1lc3NlbmdlcjogRmxhc2hNZXNzZW5nZXIsXG4gICAgICAgIG1vZGFsTWFuYWdlcjogTW9kYWxNYW5hZ2VyLFxuICAgICAgICBncmlkOiBHcmlkLFxuICAgICAgICBmb3JtUmVnaXN0cnk6IEZvcm1SZWdpc3RyeVxuICAgICkge1xuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlciA9IGV2ZW50RGlzcGF0Y2hlcjtcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICAgICAgdGhpcy5hY3Rpb25NYW5hZ2VyID0gYWN0aW9uTWFuYWdlcjtcbiAgICAgICAgdGhpcy5mbGFzaE1lc3NlbmdlciA9IGZsYXNoTWVzc2VuZ2VyO1xuICAgICAgICB0aGlzLm1vZGFsTWFuYWdlciA9IG1vZGFsTWFuYWdlcjtcbiAgICAgICAgdGhpcy5ncmlkID0gZ3JpZDtcbiAgICAgICAgdGhpcy5mb3JtUmVnaXN0cnkgPSBmb3JtUmVnaXN0cnk7XG4gICAgfVxuXG4gICAgaW5pdCgpXG4gICAge1xuICAgICAgICB0aGlzLnZpZXcuaW5pdCgpO1xuICAgICAgICB0aGlzLmFjdGlvbk1hbmFnZXIuaW5pdCgpO1xuICAgICAgICB0aGlzLmZsYXNoTWVzc2VuZ2VyLmluaXQoKTtcbiAgICAgICAgdGhpcy5tb2RhbE1hbmFnZXIuaW5pdCgpO1xuICAgICAgICB0aGlzLmdyaWQuaW5pdCgpO1xuXG4gICAgICAgIHRoaXMuZ3JpZC5sb2FkKCk7XG5cbiAgICAgICAgdGhpcy52aWV3LnJlYWR5KCk7XG4gICAgICAgIHRoaXMudmlldy5hZGREZWZhdWx0Q2xvc2VMaXN0ZW5lcigpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=