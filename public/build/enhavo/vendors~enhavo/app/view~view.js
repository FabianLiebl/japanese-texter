(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~enhavo/app/view~view"],{

/***/ "./node_modules/@enhavo/app/view-stack/event/ChangeUrlEvent.ts":
/*!*********************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/event/ChangeUrlEvent.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/view-stack/event/Event */ "./node_modules/@enhavo/app/view-stack/event/Event.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Event_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ChangeUrlData = void 0;

  var ChangeUrlEvent =
  /** @class */
  function (_super) {
    __extends(ChangeUrlEvent, _super);

    function ChangeUrlEvent(id, url, clearStorage) {
      if (clearStorage === void 0) {
        clearStorage = false;
      }

      var _this = _super.call(this, 'change-url') || this;

      _this.id = id;
      _this.url = url;
      _this.clearStorage = clearStorage;
      return _this;
    }

    return ChangeUrlEvent;
  }(Event_1["default"]);

  exports["default"] = ChangeUrlEvent;

  var ChangeUrlData =
  /** @class */
  function () {
    function ChangeUrlData() {}

    return ChangeUrlData;
  }();

  exports.ChangeUrlData = ChangeUrlData;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/event/ClickEvent.ts":
/*!*****************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/event/ClickEvent.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Event */ "./node_modules/@enhavo/app/view-stack/event/Event.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Event_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var ClickEvent =
  /** @class */
  function (_super) {
    __extends(ClickEvent, _super);

    function ClickEvent(id) {
      var _this = _super.call(this, 'click') || this;

      _this.id = id;
      return _this;
    }

    return ClickEvent;
  }(Event_1["default"]);

  exports["default"] = ClickEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/event/ExistsEvent.ts":
/*!******************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/event/ExistsEvent.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Event */ "./node_modules/@enhavo/app/view-stack/event/Event.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Event_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var ExistsEvent =
  /** @class */
  function (_super) {
    __extends(ExistsEvent, _super);

    function ExistsEvent(id) {
      var _this = _super.call(this, 'exists') || this;

      _this.id = id;
      return _this;
    }

    return ExistsEvent;
  }(Event_1["default"]);

  exports["default"] = ExistsEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/event/LoadDataEvent.ts":
/*!********************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/event/LoadDataEvent.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Event */ "./node_modules/@enhavo/app/view-stack/event/Event.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Event_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var LoadDataEvent =
  /** @class */
  function (_super) {
    __extends(LoadDataEvent, _super);

    function LoadDataEvent(key) {
      var _this = _super.call(this, 'load-data') || this;

      _this.key = key;
      return _this;
    }

    return LoadDataEvent;
  }(Event_1["default"]);

  exports["default"] = LoadDataEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/event/LoadGlobalDataEvent.ts":
/*!**************************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/event/LoadGlobalDataEvent.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Event */ "./node_modules/@enhavo/app/view-stack/event/Event.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Event_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var LoadGlobalDataEvent =
  /** @class */
  function (_super) {
    __extends(LoadGlobalDataEvent, _super);

    function LoadGlobalDataEvent(key) {
      var _this = _super.call(this, 'load-global-data') || this;

      _this.key = key;
      return _this;
    }

    return LoadGlobalDataEvent;
  }(Event_1["default"]);

  exports["default"] = LoadGlobalDataEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/event/LoadedEvent.ts":
/*!******************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/event/LoadedEvent.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Event */ "./node_modules/@enhavo/app/view-stack/event/Event.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Event_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var LoadedEvent =
  /** @class */
  function (_super) {
    __extends(LoadedEvent, _super);

    function LoadedEvent(id, label, closeable) {
      if (label === void 0) {
        label = null;
      }

      if (closeable === void 0) {
        closeable = true;
      }

      var _this = _super.call(this, 'loaded') || this;

      _this.id = id;
      _this.label = label;
      _this.closeable = closeable;
      return _this;
    }

    return LoadedEvent;
  }(Event_1["default"]);

  exports["default"] = LoadedEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/event/LoadingEvent.ts":
/*!*******************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/event/LoadingEvent.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Event */ "./node_modules/@enhavo/app/view-stack/event/Event.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Event_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var LoadingEvent =
  /** @class */
  function (_super) {
    __extends(LoadingEvent, _super);

    function LoadingEvent(id) {
      var _this = _super.call(this, 'loading') || this;

      _this.id = id;
      return _this;
    }

    return LoadingEvent;
  }(Event_1["default"]);

  exports["default"] = LoadingEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/event/SaveDataEvent.ts":
/*!********************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/event/SaveDataEvent.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Event */ "./node_modules/@enhavo/app/view-stack/event/Event.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Event_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var SaveDataEvent =
  /** @class */
  function (_super) {
    __extends(SaveDataEvent, _super);

    function SaveDataEvent(key, value) {
      var _this = _super.call(this, 'save-data') || this;

      _this.key = key;
      _this.value = value;
      return _this;
    }

    return SaveDataEvent;
  }(Event_1["default"]);

  exports["default"] = SaveDataEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/event/SaveGlobalDataEvent.ts":
/*!**************************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/event/SaveGlobalDataEvent.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Event */ "./node_modules/@enhavo/app/view-stack/event/Event.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Event_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var SaveGlobalDataEvent =
  /** @class */
  function (_super) {
    __extends(SaveGlobalDataEvent, _super);

    function SaveGlobalDataEvent(key, value) {
      var _this = _super.call(this, 'save-global-data') || this;

      _this.key = key;
      _this.value = value;
      return _this;
    }

    return SaveGlobalDataEvent;
  }(Event_1["default"]);

  exports["default"] = SaveGlobalDataEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view/View.ts":
/*!***********************************************!*\
  !*** ./node_modules/@enhavo/app/view/View.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/view/ViewData */ "./node_modules/@enhavo/app/view/ViewData.ts"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"), __webpack_require__(/*! urijs */ "./node_modules/urijs/src/URI.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js"), __webpack_require__(/*! @enhavo/app/view-stack/EventDispatcher */ "./node_modules/@enhavo/app/view-stack/EventDispatcher.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/ClickEvent */ "./node_modules/@enhavo/app/view-stack/event/ClickEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/CreateEvent */ "./node_modules/@enhavo/app/view-stack/event/CreateEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/ExistsEvent */ "./node_modules/@enhavo/app/view-stack/event/ExistsEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/CloseEvent */ "./node_modules/@enhavo/app/view-stack/event/CloseEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/LoadDataEvent */ "./node_modules/@enhavo/app/view-stack/event/LoadDataEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/LoadGlobalDataEvent */ "./node_modules/@enhavo/app/view-stack/event/LoadGlobalDataEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/SaveDataEvent */ "./node_modules/@enhavo/app/view-stack/event/SaveDataEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/SaveGlobalDataEvent */ "./node_modules/@enhavo/app/view-stack/event/SaveGlobalDataEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/SaveStateEvent */ "./node_modules/@enhavo/app/view-stack/event/SaveStateEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/RemoveEvent */ "./node_modules/@enhavo/app/view-stack/event/RemoveEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/LoadedEvent */ "./node_modules/@enhavo/app/view-stack/event/LoadedEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/LoadingEvent */ "./node_modules/@enhavo/app/view-stack/event/LoadingEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/ChangeUrlEvent */ "./node_modules/@enhavo/app/view-stack/event/ChangeUrlEvent.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, ViewData_1, _, URI, $, EventDispatcher_1, ClickEvent_1, CreateEvent_1, ExistsEvent_1, CloseEvent_1, LoadDataEvent_1, LoadGlobalDataEvent_1, SaveDataEvent_1, SaveGlobalDataEvent_1, SaveStateEvent_1, RemoveEvent_1, LoadedEvent_1, LoadingEvent_1, ChangeUrlEvent_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var View =
  /** @class */
  function () {
    function View(data, router, translator, componentRegistry) {
      this.initialized = false;
      this.data = data;
      this.router = router;
      this.translator = translator;
      this.componentRegistry = componentRegistry;
    }

    View.initView = function (label) {
      if (label === void 0) {
        label = '';
      }

      new EventDispatcher_1["default"]().dispatch(new LoadedEvent_1["default"](View.getIdFromUrl(), label, true));
    };

    View.prototype.init = function () {
      var _this = this;

      if (this.initialized) {
        return;
      }

      this.initialized = true;

      if (this.data === null) {
        this.data = new ViewData_1["default"]();
      } else {
        this.data = _.assignWith(this.data, new ViewData_1["default"](), function (objValue, srcValue) {
          return _.isUndefined(objValue) ? srcValue : objValue;
        });
      }

      if (this.data.id == null) {
        this.data.id = View.getIdFromUrl();
      } else if (typeof this.data.id === 'string') {
        this.data.id = parseInt(this.data.id);
      }

      this.componentRegistry.registerStore('view', this);
      this.componentRegistry.registerStore('translator', this.translator);
      this.componentRegistry.registerStore('router', this.router);
      this.componentRegistry.registerData(this.data);
      window.addEventListener('click', function () {
        _this.eventDispatcher.dispatch(new ClickEvent_1["default"](_this.getId()));
      });
      this.bindEventHandlerLinksWithTargetView();
    };

    View.getIdFromUrl = function () {
      var url = new URL(window.location.href);
      var id = parseInt(url.searchParams.get("view_id"));

      if (id > 0) {
        return id;
      }

      return 0;
    };

    View.prototype.getId = function () {
      return this.data.id;
    };

    View.prototype.isRoot = function () {
      return this.data.id == 0;
    };

    View.prototype.confirm = function (confirm) {
      if (confirm == null) {
        this.data.confirm = null;
      } else if (this.data.confirm == null) {
        confirm.setView(this);
        this.data.confirm = confirm;
      }
    };

    View.prototype.alert = function (message) {
      if (this.data.alert == null) {
        this.data.alert = message;
      }
    };

    View.prototype.loading = function () {
      this.data.loading = true;
    };

    View.prototype.loaded = function () {
      this.data.loading = false;
    };

    View.prototype.open = function (url, key, label) {
      var _this = this;

      if (key === void 0) {
        key = null;
      }

      if (label === void 0) {
        label = null;
      }

      return new Promise(function (resolve, reject) {
        if (key) {
          _this.eventDispatcher.dispatch(new LoadDataEvent_1["default"](key)).then(function (data) {
            var viewId = null;

            if (data != null) {
              viewId = data.value;
            }

            if (viewId != null) {
              _this.eventDispatcher.dispatch(new ExistsEvent_1["default"](viewId)).then(function (data) {
                if (data.exists) {
                  _this.eventDispatcher.dispatch(new CloseEvent_1["default"](viewId)).then(function () {
                    _this.openView(url, key, label).then(function (view) {
                      resolve(view);
                    })["catch"](function () {
                      reject();
                    });
                  })["catch"](function () {});
                } else {
                  _this.openView(url, key, label).then(function (view) {
                    resolve(view);
                  })["catch"](function () {
                    reject();
                  });
                }
              });
            } else {
              _this.openView(url, key, label).then(function (view) {
                resolve(view);
              })["catch"](function () {
                reject();
              });
            }
          });
        } else {
          _this.openView(url, null, label).then(function (view) {
            resolve(view);
          })["catch"](function () {
            reject();
          });
        }
      });
    };

    View.prototype.openView = function (url, key, label) {
      var _this = this;

      if (key === void 0) {
        key = null;
      }

      if (label === void 0) {
        label = null;
      }

      return new Promise(function (resolve, reject) {
        _this.eventDispatcher.dispatch(new CreateEvent_1["default"]({
          label: label,
          component: 'iframe-view',
          url: url
        }, _this.getId())).then(function (view) {
          if (key) {
            _this.storeValue(key, view.id);
          }

          resolve(view);

          _this.eventDispatcher.dispatch(new SaveStateEvent_1["default"]());
        })["catch"](function () {
          reject();
        });
      });
    };

    View.prototype.storeValue = function (key, value, callback) {
      var _this = this;

      if (callback === void 0) {
        callback = function callback() {};
      }

      return new Promise(function (resolve, reject) {
        _this.eventDispatcher.dispatch(new SaveDataEvent_1["default"](key, value)).then(function () {
          callback();
          resolve();
        })["catch"](function () {
          reject();
        });
      });
    };

    View.prototype.loadValue = function (key, callback) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.eventDispatcher.dispatch(new LoadDataEvent_1["default"](key)).then(function (data) {
          var value = null;

          if (data != null) {
            value = data.value;
          }

          resolve();
          callback(value);
        })["catch"](function () {
          reject();
        });
      });
    };

    View.prototype.storeGlobalValue = function (key, value, callback) {
      var _this = this;

      if (callback === void 0) {
        callback = function callback() {};
      }

      return new Promise(function (resolve, reject) {
        _this.eventDispatcher.dispatch(new SaveGlobalDataEvent_1["default"](key, value)).then(function () {
          callback();
          resolve();
        })["catch"](function () {
          reject();
        });
      });
    };

    View.prototype.loadGlobalValue = function (key, callback) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.eventDispatcher.dispatch(new LoadGlobalDataEvent_1["default"](key)).then(function (data) {
          var value = null;

          if (data != null) {
            value = data.value;
          }

          resolve();
          callback(value);
        })["catch"](function () {
          reject();
        });
      });
    };

    View.prototype.addDefaultCloseListener = function () {
      var _this = this;

      this.eventDispatcher.on('close', function (event) {
        if (_this.getId() === event.id) {
          event.resolve();

          _this.eventDispatcher.dispatch(new RemoveEvent_1["default"](_this.getId(), event.saveState));
        }
      });
    };

    View.prototype.ready = function () {
      this.eventDispatcher.dispatch(new LoadedEvent_1["default"](this.getId(), this.data.label, this.data.closeable));
    };

    View.prototype.exit = function () {
      this.eventDispatcher.dispatch(new LoadingEvent_1["default"](this.getId()));
    };

    View.prototype.setEventDispatcher = function (dispatcher) {
      this.eventDispatcher = dispatcher;
    };

    View.prototype.checkUrl = function (clearStorage) {
      var _this = this;

      if (clearStorage === void 0) {
        clearStorage = false;
      }

      var uri = new URI(window.location.href);
      uri = uri.removeQuery('view_id');
      var url = uri.path();

      if (uri.query()) {
        url = uri.path() + '?' + uri.query();
      }

      this.eventDispatcher.dispatch(new ChangeUrlEvent_1["default"](this.getId(), url, clearStorage)).then(function (data) {
        if (data.changed) {
          _this.eventDispatcher.dispatch(new SaveStateEvent_1["default"]());
        }
      });
    };

    View.prototype.bindEventHandlerLinksWithTargetView = function () {
      var self = this;
      $(document).on('click', 'a[target="_view"]', function (event) {
        event.preventDefault();
        self.openView($(this).attr('href'));
      });
    };

    return View;
  }();

  exports["default"] = View;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view/ViewData.ts":
/*!***************************************************!*\
  !*** ./node_modules/@enhavo/app/view/ViewData.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var ViewData =
  /** @class */
  function () {
    function ViewData() {
      this.confirm = null;
      this.alert = null;
      this.loading = false;
      this.closeable = false;
    }

    return ViewData;
  }();

  exports["default"] = ViewData;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9DaGFuZ2VVcmxFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9DbGlja0V2ZW50LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0V4aXN0c0V2ZW50LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0xvYWREYXRhRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvTG9hZEdsb2JhbERhdGFFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9Mb2FkZWRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9Mb2FkaW5nRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvU2F2ZURhdGFFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9TYXZlR2xvYmFsRGF0YUV2ZW50LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC92aWV3L1ZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3ZpZXcvVmlld0RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFBQTtBQUE0Qzs7QUFNeEMs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SSxxQkFBbUIsSUFBbkI7QUFDQSxtQkFBZ0IsSUFBaEI7QUFDQSxxQkFBbUIsS0FBbkI7QUFHQSx1QkFBcUIsS0FBckI7QUFDSDs7QUFBRDtBQUFDLEdBUkQiLCJmaWxlIjoidmVuZG9yc35lbmhhdm8vYXBwL3ZpZXd+dmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFdmVudCBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9FdmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFuZ2VVcmxFdmVudCBleHRlbmRzIEV2ZW50XG57XG4gICAgaWQ6IG51bWJlcjtcbiAgICB1cmw6IHN0cmluZztcbiAgICBjbGVhclN0b3JhZ2U6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCB1cmw6IHN0cmluZywgY2xlYXJTdG9yYWdlOiBib29sZWFuID0gZmFsc2UpXG4gICAge1xuICAgICAgICBzdXBlcignY2hhbmdlLXVybCcpO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICB0aGlzLmNsZWFyU3RvcmFnZSA9IGNsZWFyU3RvcmFnZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDaGFuZ2VVcmxEYXRhXG57XG4gICAgY2hhbmdlZDogYm9vbGVhblxufSIsImltcG9ydCBFdmVudCBmcm9tIFwiLi9FdmVudFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsaWNrRXZlbnQgZXh0ZW5kcyBFdmVudFxue1xuICAgIGlkOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKVxuICAgIHtcbiAgICAgICAgc3VwZXIoJ2NsaWNrJyk7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICB9XG59IiwiaW1wb3J0IEV2ZW50IGZyb20gXCIuL0V2ZW50XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhpc3RzRXZlbnQgZXh0ZW5kcyBFdmVudFxue1xuICAgIGlkOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKVxuICAgIHtcbiAgICAgICAgc3VwZXIoJ2V4aXN0cycpO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgfVxufSIsImltcG9ydCBFdmVudCBmcm9tIFwiLi9FdmVudFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWREYXRhRXZlbnQgZXh0ZW5kcyBFdmVudFxue1xuICAgIHB1YmxpYyBrZXk6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nKVxuICAgIHtcbiAgICAgICAgc3VwZXIoJ2xvYWQtZGF0YScpO1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICB9XG59IiwiaW1wb3J0IEV2ZW50IGZyb20gXCIuL0V2ZW50XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZEdsb2JhbERhdGFFdmVudCBleHRlbmRzIEV2ZW50XG57XG4gICAgcHVibGljIGtleTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcpXG4gICAge1xuICAgICAgICBzdXBlcignbG9hZC1nbG9iYWwtZGF0YScpO1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICB9XG59IiwiaW1wb3J0IEV2ZW50IGZyb20gXCIuL0V2ZW50XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGVkRXZlbnQgZXh0ZW5kcyBFdmVudFxue1xuICAgIGlkOiBudW1iZXI7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBjbG9zZWFibGU6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBsYWJlbDogc3RyaW5nID0gbnVsbCwgY2xvc2VhYmxlOiBib29sZWFuID0gdHJ1ZSlcbiAgICB7XG4gICAgICAgIHN1cGVyKCdsb2FkZWQnKTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgICAgIHRoaXMuY2xvc2VhYmxlID0gY2xvc2VhYmxlO1xuICAgIH1cbn0iLCJpbXBvcnQgRXZlbnQgZnJvbSBcIi4vRXZlbnRcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nRXZlbnQgZXh0ZW5kcyBFdmVudFxue1xuICAgIGlkOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKVxuICAgIHtcbiAgICAgICAgc3VwZXIoJ2xvYWRpbmcnKTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgIH1cbn0iLCJpbXBvcnQgRXZlbnQgZnJvbSBcIi4vRXZlbnRcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYXZlRGF0YUV2ZW50IGV4dGVuZHMgRXZlbnRcbntcbiAgICBwdWJsaWMga2V5OiBzdHJpbmc7XG4gICAgcHVibGljIHZhbHVlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZywgdmFsdWU6IGFueSlcbiAgICB7XG4gICAgICAgIHN1cGVyKCdzYXZlLWRhdGEnKTtcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59IiwiaW1wb3J0IEV2ZW50IGZyb20gXCIuL0V2ZW50XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2F2ZUdsb2JhbERhdGFFdmVudCBleHRlbmRzIEV2ZW50XG57XG4gICAgcHVibGljIGtleTogc3RyaW5nO1xuICAgIHB1YmxpYyB2YWx1ZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpXG4gICAge1xuICAgICAgICBzdXBlcignc2F2ZS1nbG9iYWwtZGF0YScpO1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn0iLCJpbXBvcnQgVmlld0RhdGEgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXcvVmlld0RhdGFcIjtcbmltcG9ydCBDb25maXJtIGZyb20gXCJAZW5oYXZvL2FwcC92aWV3L0NvbmZpcm1cIjtcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCAqIGFzIFVSSSBmcm9tICd1cmlqcyc7XG5pbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL0V2ZW50RGlzcGF0Y2hlclwiO1xuaW1wb3J0IENsaWNrRXZlbnQgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvQ2xpY2tFdmVudFwiO1xuaW1wb3J0IENyZWF0ZUV2ZW50IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0NyZWF0ZUV2ZW50XCI7XG5pbXBvcnQgRXhpc3RzRXZlbnQgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvRXhpc3RzRXZlbnRcIjtcbmltcG9ydCBFeGlzdHNEYXRhIGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL0V4aXN0c0RhdGFcIjtcbmltcG9ydCBDbG9zZUV2ZW50IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0Nsb3NlRXZlbnRcIjtcbmltcG9ydCBWaWV3SW50ZXJmYWNlIGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL1ZpZXdJbnRlcmZhY2VcIjtcbmltcG9ydCBMb2FkRGF0YUV2ZW50IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0xvYWREYXRhRXZlbnRcIjtcbmltcG9ydCBMb2FkR2xvYmFsRGF0YUV2ZW50IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0xvYWRHbG9iYWxEYXRhRXZlbnRcIjtcbmltcG9ydCBEYXRhU3RvcmFnZUVudHJ5IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL0RhdGFTdG9yYWdlRW50cnlcIjtcbmltcG9ydCBTYXZlRGF0YUV2ZW50IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L1NhdmVEYXRhRXZlbnRcIjtcbmltcG9ydCBTYXZlR2xvYmFsRGF0YUV2ZW50IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L1NhdmVHbG9iYWxEYXRhRXZlbnRcIjtcbmltcG9ydCBTYXZlU3RhdGVFdmVudCBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9TYXZlU3RhdGVFdmVudFwiO1xuaW1wb3J0IFJlbW92ZUV2ZW50IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L1JlbW92ZUV2ZW50XCI7XG5pbXBvcnQgTG9hZGVkRXZlbnQgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvTG9hZGVkRXZlbnRcIjtcbmltcG9ydCBMb2FkaW5nRXZlbnQgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvTG9hZGluZ0V2ZW50XCI7XG5pbXBvcnQgQ2hhbmdlVXJsRXZlbnQsIHtDaGFuZ2VVcmxEYXRhfSBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9DaGFuZ2VVcmxFdmVudFwiO1xuaW1wb3J0IENvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlIGZyb20gXCJAZW5oYXZvL2NvcmUvQ29tcG9uZW50UmVnaXN0cnlJbnRlcmZhY2VcIjtcbmltcG9ydCBUcmFuc2xhdG9yIGZyb20gXCJAZW5oYXZvL2NvcmUvVHJhbnNsYXRvclwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwiQGVuaGF2by9jb3JlL1JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3XG57XG4gICAgcHVibGljIGRhdGE6IFZpZXdEYXRhO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb21wb25lbnRSZWdpc3RyeTogQ29tcG9uZW50UmVnaXN0cnlJbnRlcmZhY2U7XG4gICAgcHJpdmF0ZSByZWFkb25seSByb3V0ZXI6IFJvdXRlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRyYW5zbGF0b3I6IFRyYW5zbGF0b3I7XG4gICAgcHJpdmF0ZSBldmVudERpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlcjtcbiAgICBwcml2YXRlIGluaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZGF0YTogVmlld0RhdGEsXG4gICAgICAgIHJvdXRlcjogUm91dGVyLFxuICAgICAgICB0cmFuc2xhdG9yOiBUcmFuc2xhdG9yLFxuICAgICAgICBjb21wb25lbnRSZWdpc3RyeTogQ29tcG9uZW50UmVnaXN0cnlJbnRlcmZhY2VcbiAgICApIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgICAgIHRoaXMudHJhbnNsYXRvciA9IHRyYW5zbGF0b3I7XG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVnaXN0cnkgPSBjb21wb25lbnRSZWdpc3RyeTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGluaXRWaWV3KGxhYmVsOiBzdHJpbmcgPSAnJylcbiAgICB7XG4gICAgICAgIChuZXcgRXZlbnREaXNwYXRjaGVyKCkpLmRpc3BhdGNoKG5ldyBMb2FkZWRFdmVudChWaWV3LmdldElkRnJvbVVybCgpLCBsYWJlbCwgdHJ1ZSkpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cbiAgICAgICAgaWYodGhpcy5kYXRhID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBuZXcgVmlld0RhdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBfLmFzc2lnbldpdGgodGhpcy5kYXRhLCBuZXcgVmlld0RhdGEsIChvYmpWYWx1ZSwgc3JjVmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXy5pc1VuZGVmaW5lZChvYmpWYWx1ZSkgPyBzcmNWYWx1ZSA6IG9ialZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmRhdGEuaWQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhLmlkID0gVmlldy5nZXRJZEZyb21VcmwoKTtcbiAgICAgICAgfSBlbHNlIGlmKHR5cGVvZiB0aGlzLmRhdGEuaWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEuaWQgPSBwYXJzZUludCh0aGlzLmRhdGEuaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWdpc3RyeS5yZWdpc3RlclN0b3JlKCd2aWV3JywgdGhpcyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVnaXN0cnkucmVnaXN0ZXJTdG9yZSgndHJhbnNsYXRvcicsIHRoaXMudHJhbnNsYXRvcik7XG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVnaXN0cnkucmVnaXN0ZXJTdG9yZSgncm91dGVyJywgdGhpcy5yb3V0ZXIpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5LnJlZ2lzdGVyRGF0YSh0aGlzLmRhdGEpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBDbGlja0V2ZW50KHRoaXMuZ2V0SWQoKSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudEhhbmRsZXJMaW5rc1dpdGhUYXJnZXRWaWV3KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0SWRGcm9tVXJsKCk6IG51bWJlcnxudWxsXG4gICAge1xuICAgICAgICBsZXQgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGxldCBpZCA9IHBhcnNlSW50KHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidmlld19pZFwiKSk7XG4gICAgICAgIGlmKGlkID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGlkXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgZ2V0SWQoKTogbnVtYmVyfG51bGxcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuaWQ7XG4gICAgfVxuXG4gICAgaXNSb290KClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuaWQgPT0gMDtcbiAgICB9XG5cbiAgICBjb25maXJtKGNvbmZpcm06IENvbmZpcm0pXG4gICAge1xuICAgICAgICBpZihjb25maXJtID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5jb25maXJtID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuZGF0YS5jb25maXJtID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbmZpcm0uc2V0Vmlldyh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5jb25maXJtID0gY29uZmlybTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFsZXJ0KG1lc3NhZ2U6IHN0cmluZylcbiAgICB7XG4gICAgICAgIGlmKHRoaXMuZGF0YS5hbGVydCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEuYWxlcnQgPSBtZXNzYWdlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZGluZygpXG4gICAge1xuICAgICAgICB0aGlzLmRhdGEubG9hZGluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgbG9hZGVkKClcbiAgICB7XG4gICAgICAgIHRoaXMuZGF0YS5sb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW4odXJsOiBzdHJpbmcsIGtleTogc3RyaW5nID0gbnVsbCwgbGFiZWw6IHN0cmluZyA9IG51bGwpOiBQcm9taXNlPFZpZXdJbnRlcmZhY2U+XG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYoa2V5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IExvYWREYXRhRXZlbnQoa2V5KSkudGhlbigoZGF0YTogRGF0YVN0b3JhZ2VFbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdmlld0lkOiBudW1iZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZihkYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdJZCA9IGRhdGEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYodmlld0lkICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBFeGlzdHNFdmVudCh2aWV3SWQpKS50aGVuKChkYXRhOiBFeGlzdHNEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5leGlzdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IENsb3NlRXZlbnQodmlld0lkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5WaWV3KHVybCwga2V5LCBsYWJlbCkudGhlbigodmlldzogVmlld0ludGVyZmFjZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZpZXcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge30pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5WaWV3KHVybCwga2V5LCBsYWJlbCkudGhlbigodmlldzogVmlld0ludGVyZmFjZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2aWV3KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5WaWV3KHVybCwga2V5LCBsYWJlbCkudGhlbigodmlldzogVmlld0ludGVyZmFjZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmlldylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMub3BlblZpZXcodXJsLCBudWxsLCBsYWJlbCkudGhlbigodmlldzogVmlld0ludGVyZmFjZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZpZXcpXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlblZpZXcodXJsOiBzdHJpbmcsIGtleTogc3RyaW5nID0gbnVsbCwgbGFiZWw6IHN0cmluZyA9IG51bGwpOiBQcm9taXNlPFZpZXdJbnRlcmZhY2U+XG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IENyZWF0ZUV2ZW50KHtcbiAgICAgICAgICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiAnaWZyYW1lLXZpZXcnLFxuICAgICAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgICB9LCB0aGlzLmdldElkKCkpKS50aGVuKCh2aWV3OiBWaWV3SW50ZXJmYWNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlVmFsdWUoa2V5LCB2aWV3LmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh2aWV3KTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2F2ZVN0YXRlRXZlbnQoKSlcbiAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RvcmVWYWx1ZShrZXk6IHN0cmluZywgdmFsdWU6IGFueSwgY2FsbGJhY2s6ICgpID0+IHZvaWQgPSAoKSA9PiB7fSlcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2F2ZURhdGFFdmVudChrZXksIHZhbHVlKSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZFZhbHVlKGtleTogc3RyaW5nLCBjYWxsYmFjazogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQpOiBQcm9taXNlPHN0cmluZz5cbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgTG9hZERhdGFFdmVudChrZXkpKS50aGVuKChkYXRhOiBEYXRhU3RvcmFnZUVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gZGF0YS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHZhbHVlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdG9yZUdsb2JhbFZhbHVlKGtleTogc3RyaW5nLCB2YWx1ZTogYW55LCBjYWxsYmFjazogKCkgPT4gdm9pZCA9ICgpID0+IHt9KVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTYXZlR2xvYmFsRGF0YUV2ZW50KGtleSwgdmFsdWUpKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZEdsb2JhbFZhbHVlKGtleTogc3RyaW5nLCBjYWxsYmFjazogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQpOiBQcm9taXNlPHN0cmluZz5cbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgTG9hZEdsb2JhbERhdGFFdmVudChrZXkpKVxuICAgICAgICAgICAgICAgIC50aGVuKChkYXRhOiBEYXRhU3RvcmFnZUVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gZGF0YS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkRGVmYXVsdENsb3NlTGlzdGVuZXIoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIub24oJ2Nsb3NlJywgKGV2ZW50OiBDbG9zZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZih0aGlzLmdldElkKCkgPT09IGV2ZW50LmlkKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBSZW1vdmVFdmVudCh0aGlzLmdldElkKCksIGV2ZW50LnNhdmVTdGF0ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVhZHkoKVxuICAgIHtcbiAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IExvYWRlZEV2ZW50KHRoaXMuZ2V0SWQoKSwgdGhpcy5kYXRhLmxhYmVsLCB0aGlzLmRhdGEuY2xvc2VhYmxlKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGV4aXQoKVxuICAgIHtcbiAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IExvYWRpbmdFdmVudCh0aGlzLmdldElkKCkpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0RXZlbnREaXNwYXRjaGVyKGRpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlcilcbiAgICB7XG4gICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyID0gZGlzcGF0Y2hlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hlY2tVcmwoY2xlYXJTdG9yYWdlOiBib29sZWFuID0gZmFsc2UpXG4gICAge1xuICAgICAgICBsZXQgdXJpID0gbmV3IFVSSSh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIHVyaSA9IHVyaS5yZW1vdmVRdWVyeSgndmlld19pZCcpO1xuXG4gICAgICAgIGxldCB1cmwgPSB1cmkucGF0aCgpO1xuICAgICAgICBpZih1cmkucXVlcnkoKSkge1xuICAgICAgICAgICAgdXJsID0gdXJpLnBhdGgoKSArICc/JyArIHVyaS5xdWVyeSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IENoYW5nZVVybEV2ZW50KHRoaXMuZ2V0SWQoKSwgdXJsLCBjbGVhclN0b3JhZ2UpKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGE6IENoYW5nZVVybERhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZihkYXRhLmNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNhdmVTdGF0ZUV2ZW50KCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJpbmRFdmVudEhhbmRsZXJMaW5rc1dpdGhUYXJnZXRWaWV3KClcbiAgICB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ2FbdGFyZ2V0PVwiX3ZpZXdcIl0nLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNlbGYub3BlblZpZXcoJCh0aGlzKS5hdHRyKCdocmVmJykpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbiIsImltcG9ydCBDb25maXJtIGZyb20gXCJAZW5oYXZvL2FwcC92aWV3L0NvbmZpcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld0RhdGFcbntcbiAgICBjb25maXJtOiBDb25maXJtID0gbnVsbDtcbiAgICBhbGVydDogc3RyaW5nID0gbnVsbDtcbiAgICBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIGNsb3NlYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xufSJdLCJzb3VyY2VSb290IjoiIn0=