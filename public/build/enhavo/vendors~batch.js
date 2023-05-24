(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~batch"],{

/***/ "./node_modules/@enhavo/app/flash-message/Message.ts":
/*!***********************************************************!*\
  !*** ./node_modules/@enhavo/app/flash-message/Message.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Message = /** @class */function () {
    function Message(type, message) {
      if (type === void 0) {
        type = null;
      }
      if (message === void 0) {
        message = null;
      }
      this.ttl = 5;
      if (type) {
        this.type = type;
      }
      if (message) {
        this.message = message;
      }
    }
    Message.SUCCESS = 'success';
    Message.ERROR = 'error';
    Message.NOTICE = 'notice';
    Message.WARNING = 'warning';
    return Message;
  }();
  exports["default"] = Message;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/grid/batch/BatchManager.ts":
/*!*************************************************************!*\
  !*** ./node_modules/@enhavo/app/grid/batch/BatchManager.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var BatchManager = /** @class */function () {
    function BatchManager(data, registry, view, translator, componentRegistry) {
      this.registry = registry;
      this.view = view;
      this.translator = translator;
      this.data = data;
      this.componentRegistry = componentRegistry;
    }
    BatchManager.prototype.init = function () {
      for (var i in this.data.batches) {
        this.data.batches[i] = this.registry.getFactory(this.data.batches[i].component).createFromData(this.data.batches[i]);
      }
      for (var _i = 0, _a = this.registry.getComponents(); _i < _a.length; _i++) {
        var component = _a[_i];
        this.componentRegistry.registerComponent(component.name, component.component);
      }
      this.componentRegistry.registerStore('batchManager', this);
      this.componentRegistry.registerData(this.data);
    };
    BatchManager.prototype.execute = function (ids) {
      return __awaiter(this, void 0, Promise, function () {
        var batch;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              batch = this.getCurrentBatch();
              if (batch == null) {
                this.view.alert(this.translator.trans('enhavo_app.batch.message.no_batch_select'));
                return [2 /*return*/];
              }

              if (ids.length == 0) {
                this.view.alert(this.translator.trans('enhavo_app.batch.message.no_row_select'));
                return [2 /*return*/];
              }

              return [4 /*yield*/, batch.execute(ids)];
            case 1:
              return [2 /*return*/, _a.sent()];
          }
        });
      });
    };
    BatchManager.prototype.getCurrentBatch = function () {
      return this.getBatch(this.data.batch);
    };
    BatchManager.prototype.changeBatch = function (value) {
      this.data.batch = value;
    };
    BatchManager.prototype.getBatch = function (key) {
      for (var _i = 0, _a = this.data.batches; _i < _a.length; _i++) {
        var batch = _a[_i];
        if (batch.key == key) {
          return batch;
        }
      }
      return null;
    };
    BatchManager.prototype.hasBatches = function () {
      return this.data.batches.length > 0;
    };
    return BatchManager;
  }();
  exports["default"] = BatchManager;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/grid/batch/BatchRegistry.ts":
/*!**************************************************************!*\
  !*** ./node_modules/@enhavo/app/grid/batch/BatchRegistry.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/core */ "./node_modules/@enhavo/app/node_modules/@enhavo/core/index.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var BatchRegistry = /** @class */function (_super) {
    __extends(BatchRegistry, _super);
    function BatchRegistry() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    BatchRegistry.prototype.getFactory = function (name) {
      return _super.prototype.getFactory.call(this, name);
    };
    BatchRegistry.prototype.register = function (name, component, factory) {
      return _super.prototype.register.call(this, name, component, factory);
    };
    return BatchRegistry;
  }(core_1.Registry);
  exports["default"] = BatchRegistry;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/grid/batch/factory/AbstractFactory.ts":
/*!************************************************************************!*\
  !*** ./node_modules/@enhavo/app/grid/batch/factory/AbstractFactory.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, _) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var AbstractFactory = /** @class */function () {
    function AbstractFactory() {}
    AbstractFactory.prototype.createFromData = function (data) {
      var batch = this.createNew();
      batch = _.extend(data, batch);
      return batch;
    };
    return AbstractFactory;
  }();
  exports["default"] = AbstractFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/grid/batch/factory/FormFactory.ts":
/*!********************************************************************!*\
  !*** ./node_modules/@enhavo/app/grid/batch/factory/FormFactory.ts ***!
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
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/grid/batch/model/FormBatch */ "./node_modules/@enhavo/app/grid/batch/model/FormBatch.ts"), __webpack_require__(/*! @enhavo/app/grid/batch/factory/UrlFactory */ "./node_modules/@enhavo/app/grid/batch/factory/UrlFactory.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, FormBatch_1, UrlFactory_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var FormFactory = /** @class */function (_super) {
    __extends(FormFactory, _super);
    function FormFactory(batchData, translator, view, flashMessenger, router, modalManager, grid) {
      var _this = _super.call(this, batchData, translator, view, flashMessenger, router) || this;
      _this.modalManager = modalManager;
      _this.grid = grid;
      return _this;
    }
    FormFactory.prototype.createNew = function () {
      return new FormBatch_1["default"](this.batchData, this.translator, this.view, this.flashMessenger, this.router, this.modalManager, this.grid);
    };
    return FormFactory;
  }(UrlFactory_1["default"]);
  exports["default"] = FormFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/grid/batch/factory/ModalFactory.ts":
/*!*********************************************************************!*\
  !*** ./node_modules/@enhavo/app/grid/batch/factory/ModalFactory.ts ***!
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
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/grid/batch/factory/AbstractFactory */ "./node_modules/@enhavo/app/grid/batch/factory/AbstractFactory.ts"), __webpack_require__(/*! @enhavo/app/grid/batch/model/ModalBatch */ "./node_modules/@enhavo/app/grid/batch/model/ModalBatch.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractFactory_1, ModalBatch_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var ModalFactory = /** @class */function (_super) {
    __extends(ModalFactory, _super);
    function ModalFactory(modalManager) {
      var _this = _super.call(this) || this;
      _this.modalManager = modalManager;
      return _this;
    }
    ModalFactory.prototype.createNew = function () {
      return new ModalBatch_1["default"](this.modalManager);
    };
    return ModalFactory;
  }(AbstractFactory_1["default"]);
  exports["default"] = ModalFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/grid/batch/factory/UrlFactory.ts":
/*!*******************************************************************!*\
  !*** ./node_modules/@enhavo/app/grid/batch/factory/UrlFactory.ts ***!
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
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/grid/batch/factory/AbstractFactory */ "./node_modules/@enhavo/app/grid/batch/factory/AbstractFactory.ts"), __webpack_require__(/*! @enhavo/app/grid/batch/model/UrlBatch */ "./node_modules/@enhavo/app/grid/batch/model/UrlBatch.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractFactory_1, UrlBatch_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var UrlFactory = /** @class */function (_super) {
    __extends(UrlFactory, _super);
    function UrlFactory(batchData, translator, view, flashMessenger, router) {
      var _this = _super.call(this) || this;
      _this.batchData = batchData;
      _this.translator = translator;
      _this.view = view;
      _this.flashMessenger = flashMessenger;
      _this.router = router;
      return _this;
    }
    UrlFactory.prototype.createNew = function () {
      return new UrlBatch_1["default"](this.batchData, this.translator, this.view, this.flashMessenger, this.router);
    };
    return UrlFactory;
  }(AbstractFactory_1["default"]);
  exports["default"] = UrlFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/grid/batch/model/AbstractBatch.ts":
/*!********************************************************************!*\
  !*** ./node_modules/@enhavo/app/grid/batch/model/AbstractBatch.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var AbstractBatch = /** @class */function () {
    function AbstractBatch() {}
    return AbstractBatch;
  }();
  exports["default"] = AbstractBatch;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/grid/batch/model/FormBatch.ts":
/*!****************************************************************!*\
  !*** ./node_modules/@enhavo/app/grid/batch/model/FormBatch.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/grid/batch/model/UrlBatch */ "./node_modules/@enhavo/app/grid/batch/model/UrlBatch.ts"), __webpack_require__(/*! @enhavo/app/flash-message/Message */ "./node_modules/@enhavo/app/flash-message/Message.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, UrlBatch_1, Message_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var FormBatch = /** @class */function (_super) {
    __extends(FormBatch, _super);
    function FormBatch(batchData, translator, view, flashMessenger, router, modalManager, grid) {
      var _this = _super.call(this, batchData, translator, view, flashMessenger, router) || this;
      _this.modalManager = modalManager;
      _this.grid = grid;
      return _this;
    }
    FormBatch.prototype.execute = function (ids) {
      return __awaiter(this, void 0, Promise, function () {
        var idData, i;
        var _this = this;
        return __generator(this, function (_a) {
          idData = {};
          for (i in ids) {
            idData[i] = ids[i];
          }
          this.modal.data = {
            ids: idData,
            type: this.key
          };
          this.modal.actionUrl = this.getUrl();
          this.modal.actionHandler = function (modal, data, error) {
            return new Promise(function (resolve, reject) {
              if (data.status == 400) {
                _this.flashMessenger.addMessage(new Message_1["default"](Message_1["default"].ERROR, data.data));
                resolve(true);
                return;
              } else if (error) {
                _this.flashMessenger.addMessage(new Message_1["default"](Message_1["default"].ERROR, _this.translator.trans(error)));
                resolve(true);
                return;
              }
              _this.flashMessenger.addMessage(new Message_1["default"](Message_1["default"].SUCCESS, _this.translator.trans('enhavo_app.batch.message.success')));
              _this.grid.loadTable();
              resolve(true);
            });
          };
          this.modalManager.push(this.modal);
          return [2 /*return*/, false];
        });
      });
    };
    return FormBatch;
  }(UrlBatch_1["default"]);
  exports["default"] = FormBatch;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/grid/batch/model/ModalBatch.ts":
/*!*****************************************************************!*\
  !*** ./node_modules/@enhavo/app/grid/batch/model/ModalBatch.ts ***!
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
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/grid/batch/model/AbstractBatch */ "./node_modules/@enhavo/app/grid/batch/model/AbstractBatch.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractBatch_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var ModalBatch = /** @class */function (_super) {
    __extends(ModalBatch, _super);
    function ModalBatch(modalManager) {
      var _this = _super.call(this) || this;
      _this.modalManager = modalManager;
      return _this;
    }
    ModalBatch.prototype.execute = function (ids) {
      return __awaiter(this, void 0, Promise, function () {
        return __generator(this, function (_a) {
          if (this.provideData) {
            this.modal[this.provideKey ? this.provideKey : 'data'] = {
              ids: ids,
              type: this.key
            };
          }
          this.modalManager.push(this.modal);
          return [2 /*return*/, false];
        });
      });
    };
    return ModalBatch;
  }(AbstractBatch_1["default"]);
  exports["default"] = ModalBatch;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/grid/batch/model/UrlBatch.ts":
/*!***************************************************************!*\
  !*** ./node_modules/@enhavo/app/grid/batch/model/UrlBatch.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/grid/batch/model/AbstractBatch */ "./node_modules/@enhavo/app/grid/batch/model/AbstractBatch.ts"), __webpack_require__(/*! @enhavo/app/view/Confirm */ "./node_modules/@enhavo/app/view/Confirm.ts"), __webpack_require__(/*! axios */ "./node_modules/axios/index.js"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"), __webpack_require__(/*! @enhavo/app/flash-message/Message */ "./node_modules/@enhavo/app/flash-message/Message.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractBatch_1, Confirm_1, axios_1, _, Message_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var UrlBatch = /** @class */function (_super) {
    __extends(UrlBatch, _super);
    function UrlBatch(batchData, translator, view, flashMessenger, router) {
      var _this = _super.call(this) || this;
      _this.batchData = batchData;
      _this.translator = translator;
      _this.view = view;
      _this.flashMessenger = flashMessenger;
      _this.router = router;
      return _this;
    }
    UrlBatch.prototype.execute = function (ids) {
      return __awaiter(this, void 0, Promise, function () {
        var uri, data;
        var _this = this;
        return __generator(this, function (_a) {
          uri = this.getUrl();
          data = {
            type: this.key,
            ids: ids
          };
          return [2 /*return*/, new Promise(function (resolve, reject) {
            _this.getView().confirm(new Confirm_1["default"](_this.confirmMessage, function () {
              _this.view.loading();
              axios_1["default"].post(uri, data).then(function (response) {
                _this.getView().loaded();
                _this.flashMessenger.addMessage(new Message_1["default"]('success', _this.translator.trans('enhavo_app.batch.message.success')));
                resolve(true);
              })["catch"](function (error) {
                _this.getView().loaded();
                _this.flashMessenger.addMessage(new Message_1["default"]('error', _this.translator.trans('enhavo_app.batch.message.error')));
                reject();
              });
            }, function () {}, _this.translator.trans('enhavo_app.view.label.cancel'), _this.translator.trans('enhavo_app.view.label.ok')));
          })];
        });
      });
    };
    UrlBatch.prototype.getView = function () {
      return this.view;
    };
    UrlBatch.prototype.getUrl = function () {
      var route = this.route;
      if (!route) {
        route = this.batchData.batchRoute;
      }
      var parameters = this.routeParameters;
      if (!parameters) {
        parameters = {};
      }
      if (this.batchData.batchRouteParameters) {
        parameters = _.extend(parameters, this.batchData.batchRouteParameters);
      }
      return this.router.generate(route, parameters);
    };
    return UrlBatch;
  }(AbstractBatch_1["default"]);
  exports["default"] = UrlBatch;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/node_modules/@enhavo/core/ComponentAwareInterface.ts":
/*!***************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/node_modules/@enhavo/core/ComponentAwareInterface.ts ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/node_modules/@enhavo/core/FactoryInterface.ts":
/*!********************************************************************************!*\
  !*** ./node_modules/@enhavo/app/node_modules/@enhavo/core/FactoryInterface.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/node_modules/@enhavo/core/Registry.ts":
/*!************************************************************************!*\
  !*** ./node_modules/@enhavo/app/node_modules/@enhavo/core/Registry.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Component = void 0;
  var Registry = /** @class */function () {
    function Registry() {
      this.entries = [];
    }
    Registry.prototype.get = function (name) {
      for (var _i = 0, _a = this.entries; _i < _a.length; _i++) {
        var entry = _a[_i];
        if (entry.getName() == name) {
          return entry;
        }
      }
      throw 'Entry with name "' + name + '" does not exist in registry';
    };
    Registry.prototype.getFactory = function (name) {
      return this.get(name).getFactory();
    };
    Registry.prototype.getComponent = function (name) {
      return this.get(name).getComponent();
    };
    Registry.prototype.register = function (entry) {
      if (this.has(entry.getName())) {
        this.deleteEntry(entry.getName());
      }
      this.entries.push(entry);
      return this;
    };
    Registry.prototype.deleteEntry = function (name) {
      for (var i in this.entries) {
        if (this.entries[i].getName() == name) {
          this.entries.splice(parseInt(i), 1);
          break;
        }
      }
    };
    Registry.prototype.has = function (name) {
      for (var _i = 0, _a = this.entries; _i < _a.length; _i++) {
        var entry = _a[_i];
        if (entry.getName() == name) {
          return true;
        }
      }
      return false;
    };
    Registry.prototype.getComponents = function () {
      var components = [];
      for (var _i = 0, _a = this.entries; _i < _a.length; _i++) {
        var entry = _a[_i];
        components.push(new Component(entry.getName(), entry.getComponent()));
      }
      return components;
    };
    return Registry;
  }();
  exports["default"] = Registry;
  var Component = /** @class */function () {
    function Component(name, component) {
      this.name = name;
      this.component = component;
    }
    return Component;
  }();
  exports.Component = Component;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/node_modules/@enhavo/core/RegistryInterface.ts":
/*!*********************************************************************************!*\
  !*** ./node_modules/@enhavo/app/node_modules/@enhavo/core/RegistryInterface.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/node_modules/@enhavo/core/index.ts":
/*!*********************************************************************!*\
  !*** ./node_modules/@enhavo/app/node_modules/@enhavo/core/index.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Registry */ "./node_modules/@enhavo/app/node_modules/@enhavo/core/Registry.ts"), __webpack_require__(/*! ./RegistryInterface */ "./node_modules/@enhavo/app/node_modules/@enhavo/core/RegistryInterface.ts"), __webpack_require__(/*! ./FactoryInterface */ "./node_modules/@enhavo/app/node_modules/@enhavo/core/FactoryInterface.ts"), __webpack_require__(/*! ./ComponentAwareInterface */ "./node_modules/@enhavo/app/node_modules/@enhavo/core/ComponentAwareInterface.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Registry_1, RegistryInterface_1, FactoryInterface_1, ComponentAwareInterface_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ComponentAwareInterface = exports.FactoryInterface = exports.RegistryInterface = exports.Registry = void 0;
  exports.Registry = Registry_1["default"];
  exports.RegistryInterface = RegistryInterface_1["default"];
  exports.FactoryInterface = FactoryInterface_1["default"];
  exports.ComponentAwareInterface = ComponentAwareInterface_1["default"];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view/Confirm.ts":
/*!**************************************************!*\
  !*** ./node_modules/@enhavo/app/view/Confirm.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Confirm = /** @class */function () {
    function Confirm(message, onAccept, onDeny, denyText, acceptText) {
      if (denyText === void 0) {
        denyText = 'deny';
      }
      if (acceptText === void 0) {
        acceptText = 'accept';
      }
      this.message = message;
      this.onAccept = onAccept;
      this.onDeny = onDeny;
      this.denyText = denyText;
      this.acceptText = acceptText;
    }
    Confirm.prototype.setView = function (view) {
      this.view = view;
    };
    Confirm.prototype.deny = function () {
      this.view.confirm(null);
      if (this.onDeny) {
        this.onDeny();
      }
    };
    Confirm.prototype.accept = function () {
      this.view.confirm(null);
      if (this.onAccept) {
        this.onAccept();
      }
    };
    return Confirm;
  }();
  exports["default"] = Confirm;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/core/RegistryEntry.ts":
/*!****************************************************!*\
  !*** ./node_modules/@enhavo/core/RegistryEntry.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var RegistryEntry = /** @class */function () {
    function RegistryEntry(name, component, factory) {
      this.name = name;
      this.component = component;
      this.factory = factory;
    }
    RegistryEntry.prototype.getName = function () {
      return this.name;
    };
    RegistryEntry.prototype.getComponent = function () {
      return this.component;
    };
    RegistryEntry.prototype.getFactory = function () {
      return this.factory;
    };
    return RegistryEntry;
  }();
  exports["default"] = RegistryEntry;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvZmxhc2gtbWVzc2FnZS9NZXNzYWdlLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9ncmlkL2JhdGNoL0JhdGNoTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvZ3JpZC9iYXRjaC9CYXRjaFJlZ2lzdHJ5LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9ncmlkL2JhdGNoL2ZhY3RvcnkvQWJzdHJhY3RGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9ncmlkL2JhdGNoL2ZhY3RvcnkvRm9ybUZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2dyaWQvYmF0Y2gvZmFjdG9yeS9Nb2RhbEZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2dyaWQvYmF0Y2gvZmFjdG9yeS9VcmxGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9ncmlkL2JhdGNoL21vZGVsL0Fic3RyYWN0QmF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2dyaWQvYmF0Y2gvbW9kZWwvRm9ybUJhdGNoLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9ncmlkL2JhdGNoL21vZGVsL01vZGFsQmF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2dyaWQvYmF0Y2gvbW9kZWwvVXJsQmF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL25vZGVfbW9kdWxlcy9AZW5oYXZvL2NvcmUvUmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL25vZGVfbW9kdWxlcy9AZW5oYXZvL2NvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3ZpZXcvQ29uZmlybS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9jb3JlL1JlZ2lzdHJ5RW50cnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyJdLCJuYW1lcyI6WyJNZXNzYWdlIiwidHlwZSIsIm1lc3NhZ2UiLCJ0dGwiLCJTVUNDRVNTIiwiRVJST1IiLCJOT1RJQ0UiLCJXQVJOSU5HIiwiQmF0Y2hNYW5hZ2VyIiwiZGF0YSIsInJlZ2lzdHJ5IiwidmlldyIsInRyYW5zbGF0b3IiLCJjb21wb25lbnRSZWdpc3RyeSIsInByb3RvdHlwZSIsImluaXQiLCJpIiwiYmF0Y2hlcyIsImdldEZhY3RvcnkiLCJjb21wb25lbnQiLCJjcmVhdGVGcm9tRGF0YSIsIl9pIiwiX2EiLCJnZXRDb21wb25lbnRzIiwibGVuZ3RoIiwicmVnaXN0ZXJDb21wb25lbnQiLCJuYW1lIiwicmVnaXN0ZXJTdG9yZSIsInJlZ2lzdGVyRGF0YSIsImV4ZWN1dGUiLCJpZHMiLCJQcm9taXNlIiwiYmF0Y2giLCJnZXRDdXJyZW50QmF0Y2giLCJhbGVydCIsInRyYW5zIiwic2VudCIsImdldEJhdGNoIiwiY2hhbmdlQmF0Y2giLCJ2YWx1ZSIsImtleSIsImhhc0JhdGNoZXMiLCJCYXRjaFJlZ2lzdHJ5IiwiX3N1cGVyIiwiX19leHRlbmRzIiwiY2FsbCIsInJlZ2lzdGVyIiwiZmFjdG9yeSIsImNvcmVfMSIsIlJlZ2lzdHJ5IiwiQWJzdHJhY3RGYWN0b3J5IiwiY3JlYXRlTmV3IiwiXyIsImV4dGVuZCIsIkZvcm1GYWN0b3J5IiwiYmF0Y2hEYXRhIiwiZmxhc2hNZXNzZW5nZXIiLCJyb3V0ZXIiLCJtb2RhbE1hbmFnZXIiLCJncmlkIiwiX3RoaXMiLCJGb3JtQmF0Y2hfMSIsIlVybEZhY3RvcnlfMSIsIk1vZGFsRmFjdG9yeSIsIk1vZGFsQmF0Y2hfMSIsIkFic3RyYWN0RmFjdG9yeV8xIiwiVXJsRmFjdG9yeSIsIlVybEJhdGNoXzEiLCJBYnN0cmFjdEJhdGNoIiwiRm9ybUJhdGNoIiwiaWREYXRhIiwibW9kYWwiLCJhY3Rpb25VcmwiLCJnZXRVcmwiLCJhY3Rpb25IYW5kbGVyIiwiZXJyb3IiLCJyZXNvbHZlIiwicmVqZWN0Iiwic3RhdHVzIiwiYWRkTWVzc2FnZSIsIk1lc3NhZ2VfMSIsImxvYWRUYWJsZSIsInB1c2giLCJNb2RhbEJhdGNoIiwicHJvdmlkZURhdGEiLCJwcm92aWRlS2V5IiwiQWJzdHJhY3RCYXRjaF8xIiwiVXJsQmF0Y2giLCJ1cmkiLCJnZXRWaWV3IiwiY29uZmlybSIsIkNvbmZpcm1fMSIsImNvbmZpcm1NZXNzYWdlIiwibG9hZGluZyIsImF4aW9zXzEiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwibG9hZGVkIiwicm91dGUiLCJiYXRjaFJvdXRlIiwicGFyYW1ldGVycyIsInJvdXRlUGFyYW1ldGVycyIsImJhdGNoUm91dGVQYXJhbWV0ZXJzIiwiZ2VuZXJhdGUiLCJlbnRyaWVzIiwiZ2V0IiwiZW50cnkiLCJnZXROYW1lIiwiZ2V0Q29tcG9uZW50IiwiaGFzIiwiZGVsZXRlRW50cnkiLCJzcGxpY2UiLCJwYXJzZUludCIsImNvbXBvbmVudHMiLCJDb21wb25lbnQiLCJleHBvcnRzIiwiUmVnaXN0cnlfMSIsIlJlZ2lzdHJ5SW50ZXJmYWNlIiwiUmVnaXN0cnlJbnRlcmZhY2VfMSIsIkZhY3RvcnlJbnRlcmZhY2UiLCJGYWN0b3J5SW50ZXJmYWNlXzEiLCJDb21wb25lbnRBd2FyZUludGVyZmFjZSIsIkNvbXBvbmVudEF3YXJlSW50ZXJmYWNlXzEiLCJDb25maXJtIiwib25BY2NlcHQiLCJvbkRlbnkiLCJkZW55VGV4dCIsImFjY2VwdFRleHQiLCJzZXRWaWV3IiwiZGVueSIsImFjY2VwdCIsIlJlZ2lzdHJ5RW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVUiLCJmaWxlIjoidmVuZG9yc35iYXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlXG57XG4gICAgc3RhdGljIFNVQ0NFU1MgPSAnc3VjY2Vzcyc7XG4gICAgc3RhdGljIEVSUk9SID0gJ2Vycm9yJztcbiAgICBzdGF0aWMgTk9USUNFID0gJ25vdGljZSc7XG4gICAgc3RhdGljIFdBUk5JTkcgPSAnd2FybmluZyc7XG5cbiAgICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmc7XG4gICAgcHVibGljIHR0bDogbnVtYmVyID0gNTtcblxuICAgIGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZyA9IG51bGwsIG1lc3NhZ2U6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgaWYodHlwZSkge1xuICAgICAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgfVxuICAgICAgICBpZihtZXNzYWdlKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBCYXRjaEludGVyZmFjZSBmcm9tIFwiQGVuaGF2by9hcHAvZ3JpZC9iYXRjaC9CYXRjaEludGVyZmFjZVwiO1xuaW1wb3J0IEJhdGNoUmVnaXN0cnkgZnJvbSBcIkBlbmhhdm8vYXBwL2dyaWQvYmF0Y2gvQmF0Y2hSZWdpc3RyeVwiO1xuaW1wb3J0IEJhdGNoRGF0YUludGVyZmFjZSBmcm9tIFwiQGVuaGF2by9hcHAvZ3JpZC9iYXRjaC9CYXRjaERhdGFJbnRlcmZhY2VcIjtcbmltcG9ydCBWaWV3IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3L1ZpZXdcIjtcbmltcG9ydCBUcmFuc2xhdG9yIGZyb20gXCJAZW5oYXZvL2NvcmUvVHJhbnNsYXRvclwiO1xuaW1wb3J0IENvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlIGZyb20gXCJAZW5oYXZvL2NvcmUvQ29tcG9uZW50UmVnaXN0cnlJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmF0Y2hNYW5hZ2VyXG57XG4gICAgcHVibGljIGRhdGE6IEJhdGNoRGF0YUludGVyZmFjZTtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgcmVnaXN0cnk6IEJhdGNoUmVnaXN0cnk7XG4gICAgcHJpdmF0ZSByZWFkb25seSB2aWV3OiBWaWV3O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdHJhbnNsYXRvcjogVHJhbnNsYXRvcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbXBvbmVudFJlZ2lzdHJ5OiBDb21wb25lbnRSZWdpc3RyeUludGVyZmFjZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE6IEJhdGNoRGF0YUludGVyZmFjZSwgcmVnaXN0cnk6IEJhdGNoUmVnaXN0cnksIHZpZXc6IFZpZXcsIHRyYW5zbGF0b3I6IFRyYW5zbGF0b3IsIGNvbXBvbmVudFJlZ2lzdHJ5OiBDb21wb25lbnRSZWdpc3RyeUludGVyZmFjZSlcbiAgICB7XG4gICAgICAgIHRoaXMucmVnaXN0cnkgPSByZWdpc3RyeTtcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICAgICAgdGhpcy50cmFuc2xhdG9yID0gdHJhbnNsYXRvcjtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWdpc3RyeSA9IGNvbXBvbmVudFJlZ2lzdHJ5O1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5kYXRhLmJhdGNoZXMpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5iYXRjaGVzW2ldID0gdGhpcy5yZWdpc3RyeS5nZXRGYWN0b3J5KHRoaXMuZGF0YS5iYXRjaGVzW2ldLmNvbXBvbmVudCkuY3JlYXRlRnJvbURhdGEodGhpcy5kYXRhLmJhdGNoZXNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgY29tcG9uZW50IG9mIHRoaXMucmVnaXN0cnkuZ2V0Q29tcG9uZW50cygpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5LnJlZ2lzdGVyQ29tcG9uZW50KGNvbXBvbmVudC5uYW1lLCBjb21wb25lbnQuY29tcG9uZW50KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWdpc3RyeS5yZWdpc3RlclN0b3JlKCdiYXRjaE1hbmFnZXInLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWdpc3RyeS5yZWdpc3RlckRhdGEodGhpcy5kYXRhKTtcbiAgICB9XG5cbiAgICBhc3luYyBleGVjdXRlKGlkczogbnVtYmVyW10pOiBQcm9taXNlPGJvb2xlYW4+XG4gICAge1xuICAgICAgICBsZXQgYmF0Y2ggPSB0aGlzLmdldEN1cnJlbnRCYXRjaCgpO1xuXG4gICAgICAgIGlmKGJhdGNoID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy5hbGVydCh0aGlzLnRyYW5zbGF0b3IudHJhbnMoJ2VuaGF2b19hcHAuYmF0Y2gubWVzc2FnZS5ub19iYXRjaF9zZWxlY3QnKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZihpZHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRoaXMudmlldy5hbGVydCh0aGlzLnRyYW5zbGF0b3IudHJhbnMoJ2VuaGF2b19hcHAuYmF0Y2gubWVzc2FnZS5ub19yb3dfc2VsZWN0JykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IGJhdGNoLmV4ZWN1dGUoaWRzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q3VycmVudEJhdGNoKCk6IEJhdGNoSW50ZXJmYWNlXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXRjaCh0aGlzLmRhdGEuYmF0Y2gpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VCYXRjaCh2YWx1ZTogc3RyaW5nKVxuICAgIHtcbiAgICAgICAgdGhpcy5kYXRhLmJhdGNoID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRCYXRjaChrZXk6IHN0cmluZyk6IEJhdGNoSW50ZXJmYWNlXG4gICAge1xuICAgICAgICBmb3IgKGxldCBiYXRjaCBvZiB0aGlzLmRhdGEuYmF0Y2hlcykge1xuICAgICAgICAgICAgaWYoYmF0Y2gua2V5ID09IGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBiYXRjaFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYXNCYXRjaGVzKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuYmF0Y2hlcy5sZW5ndGggPiAwO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBSZWdpc3RyeSB9IGZyb20gXCJAZW5oYXZvL2NvcmVcIjtcbmltcG9ydCBCYXRjaEZhY3RvcnlJbnRlcmZhY2UgZnJvbSBcIkBlbmhhdm8vYXBwL2dyaWQvYmF0Y2gvQmF0Y2hGYWN0b3J5SW50ZXJmYWNlXCI7XG5pbXBvcnQgUmVnaXN0cnlJbnRlcmZhY2UgZnJvbSBcIkBlbmhhdm8vY29yZS9SZWdpc3RyeUludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXRjaFJlZ2lzdHJ5IGV4dGVuZHMgUmVnaXN0cnlcbntcbiAgICBnZXRGYWN0b3J5KG5hbWU6IHN0cmluZyk6IEJhdGNoRmFjdG9yeUludGVyZmFjZSB7XG4gICAgICAgIHJldHVybiA8QmF0Y2hGYWN0b3J5SW50ZXJmYWNlPnN1cGVyLmdldEZhY3RvcnkobmFtZSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIobmFtZTogc3RyaW5nLCBjb21wb25lbnQ6IG9iamVjdCwgZmFjdG9yeTogQmF0Y2hGYWN0b3J5SW50ZXJmYWNlKTogUmVnaXN0cnlJbnRlcmZhY2VcbiAgICB7XG4gICAgICAgIHJldHVybiBzdXBlci5yZWdpc3RlcihuYW1lLCBjb21wb25lbnQsIGZhY3RvcnkpO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IEJhdGNoSW50ZXJmYWNlIGZyb20gXCJAZW5oYXZvL2FwcC9ncmlkL2JhdGNoL0JhdGNoSW50ZXJmYWNlXCI7XG5pbXBvcnQgQmF0Y2hGYWN0b3J5SW50ZXJmYWNlIGZyb20gXCJAZW5oYXZvL2FwcC9ncmlkL2JhdGNoL0JhdGNoRmFjdG9yeUludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEZhY3RvcnkgaW1wbGVtZW50cyBCYXRjaEZhY3RvcnlJbnRlcmZhY2VcbntcbiAgICBjcmVhdGVGcm9tRGF0YShkYXRhOiBvYmplY3QpOiBCYXRjaEludGVyZmFjZVxuICAgIHtcbiAgICAgICAgbGV0IGJhdGNoID0gdGhpcy5jcmVhdGVOZXcoKTtcbiAgICAgICAgYmF0Y2ggPSBfLmV4dGVuZChkYXRhLCBiYXRjaCk7XG4gICAgICAgIHJldHVybiBiYXRjaDtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBjcmVhdGVOZXcoKTogQmF0Y2hJbnRlcmZhY2U7XG59IiwiaW1wb3J0IEZvcm1CYXRjaCBmcm9tIFwiQGVuaGF2by9hcHAvZ3JpZC9iYXRjaC9tb2RlbC9Gb3JtQmF0Y2hcIjtcbmltcG9ydCBNb2RhbE1hbmFnZXIgZnJvbSBcIkBlbmhhdm8vYXBwL21vZGFsL01vZGFsTWFuYWdlclwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBlbmhhdm8vYXBwL2dyaWQvR3JpZFwiO1xuaW1wb3J0IFVybEZhY3RvcnkgZnJvbSBcIkBlbmhhdm8vYXBwL2dyaWQvYmF0Y2gvZmFjdG9yeS9VcmxGYWN0b3J5XCI7XG5pbXBvcnQgVHJhbnNsYXRvciBmcm9tIFwiQGVuaGF2by9jb3JlL1RyYW5zbGF0b3JcIjtcbmltcG9ydCBWaWV3IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3L1ZpZXdcIjtcbmltcG9ydCBGbGFzaE1lc3NlbmdlciBmcm9tIFwiQGVuaGF2by9hcHAvZmxhc2gtbWVzc2FnZS9GbGFzaE1lc3NlbmdlclwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwiQGVuaGF2by9jb3JlL1JvdXRlclwiO1xuaW1wb3J0IEJhdGNoRGF0YUludGVyZmFjZSBmcm9tIFwiQGVuaGF2by9hcHAvZ3JpZC9iYXRjaC9CYXRjaERhdGFJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUZhY3RvcnkgZXh0ZW5kcyBVcmxGYWN0b3J5XG57XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IG1vZGFsTWFuYWdlcjogTW9kYWxNYW5hZ2VyO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBncmlkOiBHcmlkO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGJhdGNoRGF0YTogQmF0Y2hEYXRhSW50ZXJmYWNlLFxuICAgICAgICB0cmFuc2xhdG9yOiBUcmFuc2xhdG9yLFxuICAgICAgICB2aWV3OiBWaWV3LFxuICAgICAgICBmbGFzaE1lc3NlbmdlcjogRmxhc2hNZXNzZW5nZXIsXG4gICAgICAgIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBtb2RhbE1hbmFnZXI6IE1vZGFsTWFuYWdlcixcbiAgICAgICAgZ3JpZDogR3JpZFxuICAgICkge1xuICAgICAgICBzdXBlcihiYXRjaERhdGEsIHRyYW5zbGF0b3IsIHZpZXcsIGZsYXNoTWVzc2VuZ2VyLCByb3V0ZXIpO1xuICAgICAgICB0aGlzLm1vZGFsTWFuYWdlciA9IG1vZGFsTWFuYWdlcjtcbiAgICAgICAgdGhpcy5ncmlkID0gZ3JpZDtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXcoKTogRm9ybUJhdGNoIHtcbiAgICAgICAgcmV0dXJuIG5ldyBGb3JtQmF0Y2godGhpcy5iYXRjaERhdGEsIHRoaXMudHJhbnNsYXRvciwgdGhpcy52aWV3LCB0aGlzLmZsYXNoTWVzc2VuZ2VyLCB0aGlzLnJvdXRlciwgdGhpcy5tb2RhbE1hbmFnZXIsIHRoaXMuZ3JpZCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEFic3RyYWN0RmFjdG9yeSBmcm9tIFwiQGVuaGF2by9hcHAvZ3JpZC9iYXRjaC9mYWN0b3J5L0Fic3RyYWN0RmFjdG9yeVwiO1xuaW1wb3J0IE1vZGFsQmF0Y2ggZnJvbSBcIkBlbmhhdm8vYXBwL2dyaWQvYmF0Y2gvbW9kZWwvTW9kYWxCYXRjaFwiO1xuaW1wb3J0IE1vZGFsTWFuYWdlciBmcm9tIFwiQGVuaGF2by9hcHAvbW9kYWwvTW9kYWxNYW5hZ2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsRmFjdG9yeSBleHRlbmRzIEFic3RyYWN0RmFjdG9yeVxue1xuICAgIHByaXZhdGUgcmVhZG9ubHkgbW9kYWxNYW5hZ2VyOiBNb2RhbE1hbmFnZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb2RhbE1hbmFnZXI6IE1vZGFsTWFuYWdlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm1vZGFsTWFuYWdlciA9IG1vZGFsTWFuYWdlcjtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXcoKTogTW9kYWxCYXRjaCB7XG4gICAgICAgIHJldHVybiBuZXcgTW9kYWxCYXRjaCh0aGlzLm1vZGFsTWFuYWdlcik7XG4gICAgfVxufVxuIiwiaW1wb3J0IEFic3RyYWN0RmFjdG9yeSBmcm9tIFwiQGVuaGF2by9hcHAvZ3JpZC9iYXRjaC9mYWN0b3J5L0Fic3RyYWN0RmFjdG9yeVwiO1xuaW1wb3J0IFVybEJhdGNoIGZyb20gXCJAZW5oYXZvL2FwcC9ncmlkL2JhdGNoL21vZGVsL1VybEJhdGNoXCI7XG5pbXBvcnQgVHJhbnNsYXRvciBmcm9tIFwiQGVuaGF2by9jb3JlL1RyYW5zbGF0b3JcIjtcbmltcG9ydCBWaWV3IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3L1ZpZXdcIjtcbmltcG9ydCBGbGFzaE1lc3NlbmdlciBmcm9tIFwiQGVuaGF2by9hcHAvZmxhc2gtbWVzc2FnZS9GbGFzaE1lc3NlbmdlclwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwiQGVuaGF2by9jb3JlL1JvdXRlclwiO1xuaW1wb3J0IEJhdGNoRGF0YUludGVyZmFjZSBmcm9tIFwiQGVuaGF2by9hcHAvZ3JpZC9iYXRjaC9CYXRjaERhdGFJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXJsRmFjdG9yeSBleHRlbmRzIEFic3RyYWN0RmFjdG9yeVxue1xuICAgIHByb3RlY3RlZCByZWFkb25seSBiYXRjaERhdGE6IEJhdGNoRGF0YUludGVyZmFjZTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgdHJhbnNsYXRvcjogVHJhbnNsYXRvcjtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgdmlldzogVmlldztcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgZmxhc2hNZXNzZW5nZXI6IEZsYXNoTWVzc2VuZ2VyO1xuICAgIHByb3RlY3RlZCByZWFkb25seSByb3V0ZXI6IFJvdXRlcjtcblxuICAgIGNvbnN0cnVjdG9yKGJhdGNoRGF0YTogQmF0Y2hEYXRhSW50ZXJmYWNlLCB0cmFuc2xhdG9yOiBUcmFuc2xhdG9yLCB2aWV3OiBWaWV3LCBmbGFzaE1lc3NlbmdlcjogRmxhc2hNZXNzZW5nZXIsIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYmF0Y2hEYXRhID0gYmF0Y2hEYXRhO1xuICAgICAgICB0aGlzLnRyYW5zbGF0b3IgPSB0cmFuc2xhdG9yO1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLmZsYXNoTWVzc2VuZ2VyID0gZmxhc2hNZXNzZW5nZXI7XG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIH1cblxuICAgIGNyZWF0ZU5ldygpOiBVcmxCYXRjaCB7XG4gICAgICAgIHJldHVybiBuZXcgVXJsQmF0Y2godGhpcy5iYXRjaERhdGEsIHRoaXMudHJhbnNsYXRvciwgdGhpcy52aWV3LCB0aGlzLmZsYXNoTWVzc2VuZ2VyLCB0aGlzLnJvdXRlcik7XG4gICAgfVxufVxuIiwiaW1wb3J0IEJhdGNoSW50ZXJmYWNlIGZyb20gXCJAZW5oYXZvL2FwcC9ncmlkL2JhdGNoL0JhdGNoSW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0QmF0Y2ggaW1wbGVtZW50cyBCYXRjaEludGVyZmFjZVxue1xuICAgIHB1YmxpYyBrZXk6IHN0cmluZztcbiAgICBwdWJsaWMgY29tcG9uZW50OiBzdHJpbmc7XG4gICAgYWJzdHJhY3QgYXN5bmMgZXhlY3V0ZShpZHM6IG51bWJlcltdKTogUHJvbWlzZTxib29sZWFuPjtcbn1cbiIsImltcG9ydCBVcmxCYXRjaCBmcm9tIFwiQGVuaGF2by9hcHAvZ3JpZC9iYXRjaC9tb2RlbC9VcmxCYXRjaFwiO1xuaW1wb3J0IEFqYXhGb3JtTW9kYWwgZnJvbSBcIkBlbmhhdm8vYXBwL21vZGFsL21vZGVsL0FqYXhGb3JtTW9kYWxcIjtcbmltcG9ydCBNZXNzYWdlIGZyb20gXCJAZW5oYXZvL2FwcC9mbGFzaC1tZXNzYWdlL01lc3NhZ2VcIjtcbmltcG9ydCBGbGFzaE1lc3NlbmdlciBmcm9tIFwiQGVuaGF2by9hcHAvZmxhc2gtbWVzc2FnZS9GbGFzaE1lc3NlbmdlclwiO1xuaW1wb3J0IEJhdGNoRGF0YUludGVyZmFjZSBmcm9tIFwiQGVuaGF2by9hcHAvZ3JpZC9iYXRjaC9CYXRjaERhdGFJbnRlcmZhY2VcIjtcbmltcG9ydCBUcmFuc2xhdG9yIGZyb20gXCJAZW5oYXZvL2NvcmUvVHJhbnNsYXRvclwiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXcvVmlld1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwiQGVuaGF2by9jb3JlL1JvdXRlclwiO1xuaW1wb3J0IE1vZGFsTWFuYWdlciBmcm9tIFwiQGVuaGF2by9hcHAvbW9kYWwvTW9kYWxNYW5hZ2VyXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQGVuaGF2by9hcHAvZ3JpZC9HcmlkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1CYXRjaCBleHRlbmRzIFVybEJhdGNoXG57XG4gICAgcHVibGljIG1vZGFsOiBhbnk7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgbW9kYWxNYW5hZ2VyOiBNb2RhbE1hbmFnZXI7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGdyaWQ6IEdyaWQ7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgICAgIGJhdGNoRGF0YTogQmF0Y2hEYXRhSW50ZXJmYWNlLFxuICAgICAgICB0cmFuc2xhdG9yOiBUcmFuc2xhdG9yLFxuICAgICAgICB2aWV3OiBWaWV3LFxuICAgICAgICBmbGFzaE1lc3NlbmdlcjogRmxhc2hNZXNzZW5nZXIsXG4gICAgICAgIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBtb2RhbE1hbmFnZXI6IE1vZGFsTWFuYWdlcixcbiAgICAgICAgZ3JpZDogR3JpZFxuICAgICkge1xuICAgICAgICBzdXBlcihiYXRjaERhdGEsIHRyYW5zbGF0b3IsIHZpZXcsIGZsYXNoTWVzc2VuZ2VyLCByb3V0ZXIpO1xuICAgICAgICB0aGlzLm1vZGFsTWFuYWdlciA9IG1vZGFsTWFuYWdlcjtcbiAgICAgICAgdGhpcy5ncmlkID0gZ3JpZDtcbiAgICB9XG5cbiAgICBhc3luYyBleGVjdXRlKGlkczogbnVtYmVyW10pOiBQcm9taXNlPGJvb2xlYW4+XG4gICAge1xuICAgICAgICBsZXQgaWREYXRhID0ge307XG4gICAgICAgIGZvcihsZXQgaSBpbiBpZHMpIHtcbiAgICAgICAgICAgIGlkRGF0YVtpXSA9IGlkc1tpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubW9kYWwuZGF0YSA9IHtcbiAgICAgICAgICAgIGlkczogaWREYXRhLFxuICAgICAgICAgICAgdHlwZTogdGhpcy5rZXlcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm1vZGFsLmFjdGlvblVybCA9IHRoaXMuZ2V0VXJsKCk7XG4gICAgICAgIHRoaXMubW9kYWwuYWN0aW9uSGFuZGxlciA9IChtb2RhbDogQWpheEZvcm1Nb2RhbCwgZGF0YTogYW55LCBlcnJvcjogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGRhdGEuc3RhdHVzID09IDQwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZsYXNoTWVzc2VuZ2VyLmFkZE1lc3NhZ2UobmV3IE1lc3NhZ2UoTWVzc2FnZS5FUlJPUiwgZGF0YS5kYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mbGFzaE1lc3Nlbmdlci5hZGRNZXNzYWdlKG5ldyBNZXNzYWdlKE1lc3NhZ2UuRVJST1IsIHRoaXMudHJhbnNsYXRvci50cmFucyhlcnJvcikpKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZmxhc2hNZXNzZW5nZXIuYWRkTWVzc2FnZShuZXcgTWVzc2FnZShNZXNzYWdlLlNVQ0NFU1MsIHRoaXMudHJhbnNsYXRvci50cmFucygnZW5oYXZvX2FwcC5iYXRjaC5tZXNzYWdlLnN1Y2Nlc3MnKSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5sb2FkVGFibGUoKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tb2RhbE1hbmFnZXIucHVzaCh0aGlzLm1vZGFsKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCBBYnN0cmFjdEJhdGNoIGZyb20gXCJAZW5oYXZvL2FwcC9ncmlkL2JhdGNoL21vZGVsL0Fic3RyYWN0QmF0Y2hcIjtcbmltcG9ydCBNb2RhbE1hbmFnZXIgZnJvbSBcIkBlbmhhdm8vYXBwL21vZGFsL01vZGFsTWFuYWdlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbEJhdGNoIGV4dGVuZHMgQWJzdHJhY3RCYXRjaFxue1xuICAgIHB1YmxpYyBtb2RhbDogYW55O1xuICAgIHB1YmxpYyBwcm92aWRlRGF0YTogYm9vbGVhbjtcbiAgICBwdWJsaWMgcHJvdmlkZUtleTogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBtb2RhbE1hbmFnZXI6IE1vZGFsTWFuYWdlcjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihtb2RhbE1hbmFnZXI6IE1vZGFsTWFuYWdlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm1vZGFsTWFuYWdlciA9IG1vZGFsTWFuYWdlcjtcbiAgICB9XG5cbiAgICBhc3luYyBleGVjdXRlKGlkczogbnVtYmVyW10pOiBQcm9taXNlPGJvb2xlYW4+XG4gICAge1xuICAgICAgICBpZih0aGlzLnByb3ZpZGVEYXRhKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGFsW3RoaXMucHJvdmlkZUtleSA/IHRoaXMucHJvdmlkZUtleSA6ICdkYXRhJ10gPSB7XG4gICAgICAgICAgICAgICAgaWRzOiBpZHMsXG4gICAgICAgICAgICAgICAgdHlwZTogdGhpcy5rZXlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vZGFsTWFuYWdlci5wdXNoKHRoaXMubW9kYWwpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IEFic3RyYWN0QmF0Y2ggZnJvbSBcIkBlbmhhdm8vYXBwL2dyaWQvYmF0Y2gvbW9kZWwvQWJzdHJhY3RCYXRjaFwiO1xuaW1wb3J0IENvbmZpcm0gZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXcvQ29uZmlybVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgTWVzc2FnZSBmcm9tIFwiQGVuaGF2by9hcHAvZmxhc2gtbWVzc2FnZS9NZXNzYWdlXCI7XG5pbXBvcnQgQmF0Y2hEYXRhSW50ZXJmYWNlIGZyb20gXCJAZW5oYXZvL2FwcC9ncmlkL2JhdGNoL0JhdGNoRGF0YUludGVyZmFjZVwiO1xuaW1wb3J0IEZsYXNoTWVzc2VuZ2VyIGZyb20gXCJAZW5oYXZvL2FwcC9mbGFzaC1tZXNzYWdlL0ZsYXNoTWVzc2VuZ2VyXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJAZW5oYXZvL2NvcmUvUm91dGVyXCI7XG5pbXBvcnQgVHJhbnNsYXRvciBmcm9tIFwiQGVuaGF2by9jb3JlL1RyYW5zbGF0b3JcIjtcbmltcG9ydCBWaWV3IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3L1ZpZXdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXJsQmF0Y2ggZXh0ZW5kcyBBYnN0cmFjdEJhdGNoXG57XG4gICAgcHVibGljIHJvdXRlOiBzdHJpbmc7XG4gICAgcHVibGljIHJvdXRlUGFyYW1ldGVyczogb2JqZWN0O1xuICAgIHB1YmxpYyBjb25maXJtTWVzc2FnZTogc3RyaW5nO1xuXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGJhdGNoRGF0YTogQmF0Y2hEYXRhSW50ZXJmYWNlO1xuICAgIHByb3RlY3RlZCByZWFkb25seSB0cmFuc2xhdG9yOiBUcmFuc2xhdG9yO1xuICAgIHByb3RlY3RlZCByZWFkb25seSB2aWV3OiBWaWV3O1xuICAgIHByb3RlY3RlZCByZWFkb25seSBmbGFzaE1lc3NlbmdlcjogRmxhc2hNZXNzZW5nZXI7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHJvdXRlcjogUm91dGVyO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgICAgICBiYXRjaERhdGE6IEJhdGNoRGF0YUludGVyZmFjZSxcbiAgICAgICAgdHJhbnNsYXRvcjogVHJhbnNsYXRvcixcbiAgICAgICAgdmlldzogVmlldyxcbiAgICAgICAgZmxhc2hNZXNzZW5nZXI6IEZsYXNoTWVzc2VuZ2VyLFxuICAgICAgICByb3V0ZXI6IFJvdXRlcixcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5iYXRjaERhdGEgPSBiYXRjaERhdGE7XG4gICAgICAgIHRoaXMudHJhbnNsYXRvciA9IHRyYW5zbGF0b3I7XG4gICAgICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgICAgIHRoaXMuZmxhc2hNZXNzZW5nZXIgPSBmbGFzaE1lc3NlbmdlcjtcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgfVxuXG4gICAgYXN5bmMgZXhlY3V0ZShpZHM6IG51bWJlcltdKTogUHJvbWlzZTxib29sZWFuPlxuICAgIHtcbiAgICAgICAgbGV0IHVyaSA9IHRoaXMuZ2V0VXJsKCk7XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICB0eXBlOiB0aGlzLmtleSxcbiAgICAgICAgICAgIGlkczogaWRzXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2V0VmlldygpLmNvbmZpcm0obmV3IENvbmZpcm0oXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maXJtTWVzc2FnZSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5sb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QodXJpLCBkYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRWaWV3KCkubG9hZGVkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbGFzaE1lc3Nlbmdlci5hZGRNZXNzYWdlKG5ldyBNZXNzYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRvci50cmFucygnZW5oYXZvX2FwcC5iYXRjaC5tZXNzYWdlLnN1Y2Nlc3MnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VmlldygpLmxvYWRlZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxhc2hNZXNzZW5nZXIuYWRkTWVzc2FnZShuZXcgTWVzc2FnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdG9yLnRyYW5zKCdlbmhhdm9fYXBwLmJhdGNoLm1lc3NhZ2UuZXJyb3InKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHt9LFxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRvci50cmFucygnZW5oYXZvX2FwcC52aWV3LmxhYmVsLmNhbmNlbCcpLFxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRvci50cmFucygnZW5oYXZvX2FwcC52aWV3LmxhYmVsLm9rJyksXG4gICAgICAgICAgICApKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFZpZXcoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlldztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0VXJsKClcbiAgICB7XG4gICAgICAgIGxldCByb3V0ZSA9IHRoaXMucm91dGU7XG4gICAgICAgIGlmKCFyb3V0ZSkge1xuICAgICAgICAgICAgcm91dGUgPSB0aGlzLmJhdGNoRGF0YS5iYXRjaFJvdXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBhcmFtZXRlcnMgPSB0aGlzLnJvdXRlUGFyYW1ldGVycztcbiAgICAgICAgaWYoIXBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgIHBhcmFtZXRlcnMgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuYmF0Y2hEYXRhLmJhdGNoUm91dGVQYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICBwYXJhbWV0ZXJzID0gXy5leHRlbmQocGFyYW1ldGVycywgdGhpcy5iYXRjaERhdGEuYmF0Y2hSb3V0ZVBhcmFtZXRlcnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGVyLmdlbmVyYXRlKHJvdXRlLCBwYXJhbWV0ZXJzKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVnaXN0cnlJbnRlcmZhY2UgZnJvbSBcIi4vUmVnaXN0cnlJbnRlcmZhY2VcIjtcbmltcG9ydCBSZWdpc3RyeUVudHJ5IGZyb20gXCJAZW5oYXZvL2NvcmUvUmVnaXN0cnlFbnRyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWdpc3RyeSBpbXBsZW1lbnRzIFJlZ2lzdHJ5SW50ZXJmYWNlXG57XG4gICAgcHJpdmF0ZSBlbnRyaWVzOiBSZWdpc3RyeUVudHJ5W10gPSBbXTtcblxuICAgIHByaXZhdGUgZ2V0KG5hbWU6IHN0cmluZyk6IFJlZ2lzdHJ5RW50cnlcbiAgICB7XG4gICAgICAgIGZvcihsZXQgZW50cnkgb2YgdGhpcy5lbnRyaWVzKSB7XG4gICAgICAgICAgICBpZihlbnRyeS5nZXROYW1lKCkgPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aHJvdyAnRW50cnkgd2l0aCBuYW1lIFwiJytuYW1lKydcIiBkb2VzIG5vdCBleGlzdCBpbiByZWdpc3RyeSc7XG4gICAgfVxuXG4gICAgZ2V0RmFjdG9yeShuYW1lOiBzdHJpbmcpOiBvYmplY3RcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChuYW1lKS5nZXRGYWN0b3J5KCk7XG4gICAgfVxuXG4gICAgZ2V0Q29tcG9uZW50KG5hbWU6IHN0cmluZyk6IG9iamVjdFxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KG5hbWUpLmdldENvbXBvbmVudCgpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKGVudHJ5OiBSZWdpc3RyeUVudHJ5KTogUmVnaXN0cnlJbnRlcmZhY2VcbiAgICB7XG4gICAgICAgIGlmKHRoaXMuaGFzKGVudHJ5LmdldE5hbWUoKSkpIHtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlRW50cnkoZW50cnkuZ2V0TmFtZSgpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVudHJpZXMucHVzaChlbnRyeSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGVsZXRlRW50cnkobmFtZTogc3RyaW5nKVxuICAgIHtcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLmVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuZW50cmllc1tpXS5nZXROYW1lKCkgPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW50cmllcy5zcGxpY2UocGFyc2VJbnQoaSksIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFzKG5hbWU6IHN0cmluZyk6IGJvb2xlYW5cbiAgICB7XG4gICAgICAgIGZvcihsZXQgZW50cnkgb2YgdGhpcy5lbnRyaWVzKSB7XG4gICAgICAgICAgICBpZihlbnRyeS5nZXROYW1lKCkgPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRDb21wb25lbnRzKCk6IENvbXBvbmVudFtdXG4gICAge1xuICAgICAgICBsZXQgY29tcG9uZW50cyA9IFtdO1xuICAgICAgICBmb3IobGV0IGVudHJ5IG9mIHRoaXMuZW50cmllcykge1xuICAgICAgICAgICAgY29tcG9uZW50cy5wdXNoKG5ldyBDb21wb25lbnQoZW50cnkuZ2V0TmFtZSgpLCBlbnRyeS5nZXRDb21wb25lbnQoKSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFxue1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIGNvbXBvbmVudDogb2JqZWN0O1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBjb21wb25lbnQ6IG9iamVjdCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVnaXN0cnkgZnJvbSAnLi9SZWdpc3RyeSc7XG5pbXBvcnQgUmVnaXN0cnlJbnRlcmZhY2UgZnJvbSAnLi9SZWdpc3RyeUludGVyZmFjZSc7XG5pbXBvcnQgRmFjdG9yeUludGVyZmFjZSBmcm9tICcuL0ZhY3RvcnlJbnRlcmZhY2UnO1xuaW1wb3J0IENvbXBvbmVudEF3YXJlSW50ZXJmYWNlIGZyb20gJy4vQ29tcG9uZW50QXdhcmVJbnRlcmZhY2UnO1xuXG5leHBvcnQge1xuICAgIFJlZ2lzdHJ5LFxuICAgIFJlZ2lzdHJ5SW50ZXJmYWNlLFxuICAgIEZhY3RvcnlJbnRlcmZhY2UsXG4gICAgQ29tcG9uZW50QXdhcmVJbnRlcmZhY2Vcbn07XG4iLCJpbXBvcnQgVmlldyBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy9WaWV3XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpcm1cbntcbiAgICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xuICAgIHB1YmxpYyBkZW55VGV4dDogc3RyaW5nO1xuICAgIHB1YmxpYyBhY2NlcHRUZXh0OiBzdHJpbmc7XG4gICAgcHVibGljIG9uRGVueTogKCkgPT4gdm9pZDtcbiAgICBwdWJsaWMgb25BY2NlcHQ6ICgpID0+IHZvaWQ7XG4gICAgcHVibGljIHZpZXc6IFZpZXc7XG5cbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIG9uQWNjZXB0PzogKCkgPT4gdm9pZCwgb25EZW55PzogKCkgPT4gdm9pZCwgZGVueVRleHQ6IHN0cmluZyA9ICdkZW55JywgYWNjZXB0VGV4dDogc3RyaW5nID0gJ2FjY2VwdCcpXG4gICAge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLm9uQWNjZXB0ID0gb25BY2NlcHQ7XG4gICAgICAgIHRoaXMub25EZW55ID0gb25EZW55O1xuICAgICAgICB0aGlzLmRlbnlUZXh0ID0gZGVueVRleHQ7XG4gICAgICAgIHRoaXMuYWNjZXB0VGV4dCA9IGFjY2VwdFRleHQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFZpZXcodmlldzogVmlldylcbiAgICB7XG4gICAgICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbnkoKVxuICAgIHtcbiAgICAgICAgdGhpcy52aWV3LmNvbmZpcm0obnVsbCk7XG4gICAgICAgIGlmKHRoaXMub25EZW55KSB7XG4gICAgICAgICAgICB0aGlzLm9uRGVueSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdCgpXG4gICAge1xuICAgICAgICB0aGlzLnZpZXcuY29uZmlybShudWxsKTtcbiAgICAgICAgaWYodGhpcy5vbkFjY2VwdCkge1xuICAgICAgICAgICAgdGhpcy5vbkFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBGYWN0b3J5SW50ZXJmYWNlIGZyb20gXCJAZW5oYXZvL2NvcmUvRmFjdG9yeUludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWdpc3RyeUVudHJ5XG57XG4gICAgcHJpdmF0ZSBuYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBjb21wb25lbnQ6IG9iamVjdDtcbiAgICBwcml2YXRlIGZhY3Rvcnk6IEZhY3RvcnlJbnRlcmZhY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGNvbXBvbmVudDogb2JqZWN0LCBmYWN0b3J5OiBGYWN0b3J5SW50ZXJmYWNlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICB0aGlzLmZhY3RvcnkgPSBmYWN0b3J5O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENvbXBvbmVudCgpOiBvYmplY3Qge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEZhY3RvcnkoKTogRmFjdG9yeUludGVyZmFjZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZhY3Rvcnk7XG4gICAgfVxufVxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=