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

  var Message =
  /** @class */
  function () {
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

    while (_) {
      try {
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

  var BatchManager =
  /** @class */
  function () {
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
                return [2
                /*return*/
                ];
              }

              if (ids.length == 0) {
                this.view.alert(this.translator.trans('enhavo_app.batch.message.no_row_select'));
                return [2
                /*return*/
                ];
              }

              return [4
              /*yield*/
              , batch.execute(ids)];

            case 1:
              return [2
              /*return*/
              , _a.sent()];
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/core */ "./node_modules/@enhavo/app/node_modules/@enhavo/core/index.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var BatchRegistry =
  /** @class */
  function (_super) {
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

  var AbstractFactory =
  /** @class */
  function () {
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/grid/batch/model/FormBatch */ "./node_modules/@enhavo/app/grid/batch/model/FormBatch.ts"), __webpack_require__(/*! @enhavo/app/grid/batch/factory/UrlFactory */ "./node_modules/@enhavo/app/grid/batch/factory/UrlFactory.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, FormBatch_1, UrlFactory_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var FormFactory =
  /** @class */
  function (_super) {
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/grid/batch/factory/AbstractFactory */ "./node_modules/@enhavo/app/grid/batch/factory/AbstractFactory.ts"), __webpack_require__(/*! @enhavo/app/grid/batch/model/ModalBatch */ "./node_modules/@enhavo/app/grid/batch/model/ModalBatch.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractFactory_1, ModalBatch_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var ModalFactory =
  /** @class */
  function (_super) {
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/grid/batch/factory/AbstractFactory */ "./node_modules/@enhavo/app/grid/batch/factory/AbstractFactory.ts"), __webpack_require__(/*! @enhavo/app/grid/batch/model/UrlBatch */ "./node_modules/@enhavo/app/grid/batch/model/UrlBatch.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractFactory_1, UrlBatch_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var UrlFactory =
  /** @class */
  function (_super) {
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

  var AbstractBatch =
  /** @class */
  function () {
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

    while (_) {
      try {
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

  var FormBatch =
  /** @class */
  function (_super) {
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
          return [2
          /*return*/
          , false];
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

    while (_) {
      try {
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

  var ModalBatch =
  /** @class */
  function (_super) {
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
          return [2
          /*return*/
          , false];
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

    while (_) {
      try {
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

  var UrlBatch =
  /** @class */
  function (_super) {
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
          return [2
          /*return*/
          , new Promise(function (resolve, reject) {
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

  var Registry =
  /** @class */
  function () {
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

  var Component =
  /** @class */
  function () {
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

  var Confirm =
  /** @class */
  function () {
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

  var RegistryEntry =
  /** @class */
  function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvZmxhc2gtbWVzc2FnZS9NZXNzYWdlLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9ncmlkL2JhdGNoL0JhdGNoTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvZ3JpZC9iYXRjaC9CYXRjaFJlZ2lzdHJ5LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9ncmlkL2JhdGNoL2ZhY3RvcnkvQWJzdHJhY3RGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9ncmlkL2JhdGNoL2ZhY3RvcnkvRm9ybUZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2dyaWQvYmF0Y2gvZmFjdG9yeS9Nb2RhbEZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2dyaWQvYmF0Y2gvZmFjdG9yeS9VcmxGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9ncmlkL2JhdGNoL21vZGVsL0Fic3RyYWN0QmF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2dyaWQvYmF0Y2gvbW9kZWwvRm9ybUJhdGNoLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9ncmlkL2JhdGNoL21vZGVsL01vZGFsQmF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2dyaWQvYmF0Y2gvbW9kZWwvVXJsQmF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL25vZGVfbW9kdWxlcy9AZW5oYXZvL2NvcmUvUmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL25vZGVfbW9kdWxlcy9AZW5oYXZvL2NvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3ZpZXcvQ29uZmlybS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9jb3JlL1JlZ2lzdHJ5RW50cnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUFBO0FBV0kscUJBQVksSUFBWixFQUFpQyxPQUFqQyxFQUF1RDtBQUEzQztBQUFBO0FBQW1COztBQUFFO0FBQUE7QUFBc0I7O0FBRmhELGlCQUFjLENBQWQ7O0FBR0gsVUFBRyxJQUFILEVBQVM7QUFDTCxhQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0g7O0FBQ0QsVUFBRyxPQUFILEVBQVk7QUFDUixhQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0g7QUFDSjs7QUFoQk0sc0JBQVUsU0FBVjtBQUNBLG9CQUFRLE9BQVI7QUFDQSxxQkFBUyxRQUFUO0FBQ0Esc0JBQVUsU0FBVjtBQWNYO0FBQUMsR0FuQkQ7O3VCQUFxQixPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDS3JCO0FBQUE7QUFBQTtBQVNJLDBCQUFZLElBQVosRUFBc0MsUUFBdEMsRUFBK0QsSUFBL0QsRUFBMkUsVUFBM0UsRUFBbUcsaUJBQW5HLEVBQWdKO0FBRTVJLFdBQUssUUFBTCxHQUFnQixRQUFoQjtBQUNBLFdBQUssSUFBTCxHQUFZLElBQVo7QUFDQSxXQUFLLFVBQUwsR0FBa0IsVUFBbEI7QUFDQSxXQUFL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QUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVSIsImZpbGUiOiJ2ZW5kb3JzfmJhdGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2VcbntcbiAgICBzdGF0aWMgU1VDQ0VTUyA9ICdzdWNjZXNzJztcbiAgICBzdGF0aWMgRVJST1IgPSAnZXJyb3InO1xuICAgIHN0YXRpYyBOT1RJQ0UgPSAnbm90aWNlJztcbiAgICBzdGF0aWMgV0FSTklORyA9ICd3YXJuaW5nJztcblxuICAgIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XG4gICAgcHVibGljIHR5cGU6IHN0cmluZztcbiAgICBwdWJsaWMgdHRsOiBudW1iZXIgPSA1O1xuXG4gICAgY29uc3RydWN0b3IodHlwZTogc3RyaW5nID0gbnVsbCwgbWVzc2FnZTogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICBpZih0eXBlKSB7XG4gICAgICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB9XG4gICAgICAgIGlmKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IEJhdGNoSW50ZXJmYWNlIGZyb20gXCJAZW5oYXZvL2FwcC9ncmlkL2JhdGNoL0JhdGNoSW50ZXJmYWNlXCI7XG5pbXBvcnQgQmF0Y2hSZWdpc3RyeSBmcm9tIFwiQGVuaGF2by9hcHAvZ3JpZC9iYXRjaC9CYXRjaFJlZ2lzdHJ5XCI7XG5pbXBvcnQgQmF0Y2hEYXRhSW50ZXJmYWNlIGZyb20gXCJAZW5oYXZvL2FwcC9ncmlkL2JhdGNoL0JhdGNoRGF0YUludGVyZmFjZVwiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXcvVmlld1wiO1xuaW1wb3J0IFRyYW5zbGF0b3IgZnJvbSBcIkBlbmhhdm8vY29yZS9UcmFuc2xhdG9yXCI7XG5pbXBvcnQgQ29tcG9uZW50UmVnaXN0cnlJbnRlcmZhY2UgZnJvbSBcIkBlbmhhdm8vY29yZS9Db21wb25lbnRSZWdpc3RyeUludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXRjaE1hbmFnZXJcbntcbiAgICBwdWJsaWMgZGF0YTogQmF0Y2hEYXRhSW50ZXJmYWNlO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSByZWdpc3RyeTogQmF0Y2hSZWdpc3RyeTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHZpZXc6IFZpZXc7XG4gICAgcHJpdmF0ZSByZWFkb25seSB0cmFuc2xhdG9yOiBUcmFuc2xhdG9yO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY29tcG9uZW50UmVnaXN0cnk6IENvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YTogQmF0Y2hEYXRhSW50ZXJmYWNlLCByZWdpc3RyeTogQmF0Y2hSZWdpc3RyeSwgdmlldzogVmlldywgdHJhbnNsYXRvcjogVHJhbnNsYXRvciwgY29tcG9uZW50UmVnaXN0cnk6IENvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlKVxuICAgIHtcbiAgICAgICAgdGhpcy5yZWdpc3RyeSA9IHJlZ2lzdHJ5O1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLnRyYW5zbGF0b3IgPSB0cmFuc2xhdG9yO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5ID0gY29tcG9uZW50UmVnaXN0cnk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLmRhdGEuYmF0Y2hlcykge1xuICAgICAgICAgICAgdGhpcy5kYXRhLmJhdGNoZXNbaV0gPSB0aGlzLnJlZ2lzdHJ5LmdldEZhY3RvcnkodGhpcy5kYXRhLmJhdGNoZXNbaV0uY29tcG9uZW50KS5jcmVhdGVGcm9tRGF0YSh0aGlzLmRhdGEuYmF0Y2hlc1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBjb21wb25lbnQgb2YgdGhpcy5yZWdpc3RyeS5nZXRDb21wb25lbnRzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50UmVnaXN0cnkucmVnaXN0ZXJDb21wb25lbnQoY29tcG9uZW50Lm5hbWUsIGNvbXBvbmVudC5jb21wb25lbnQpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5LnJlZ2lzdGVyU3RvcmUoJ2JhdGNoTWFuYWdlcicsIHRoaXMpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5LnJlZ2lzdGVyRGF0YSh0aGlzLmRhdGEpO1xuICAgIH1cblxuICAgIGFzeW5jIGV4ZWN1dGUoaWRzOiBudW1iZXJbXSk6IFByb21pc2U8Ym9vbGVhbj5cbiAgICB7XG4gICAgICAgIGxldCBiYXRjaCA9IHRoaXMuZ2V0Q3VycmVudEJhdGNoKCk7XG5cbiAgICAgICAgaWYoYmF0Y2ggPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy52aWV3LmFsZXJ0KHRoaXMudHJhbnNsYXRvci50cmFucygnZW5oYXZvX2FwcC5iYXRjaC5tZXNzYWdlLm5vX2JhdGNoX3NlbGVjdCcpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGlkcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdGhpcy52aWV3LmFsZXJ0KHRoaXMudHJhbnNsYXRvci50cmFucygnZW5oYXZvX2FwcC5iYXRjaC5tZXNzYWdlLm5vX3Jvd19zZWxlY3QnKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXdhaXQgYmF0Y2guZXhlY3V0ZShpZHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDdXJyZW50QmF0Y2goKTogQmF0Y2hJbnRlcmZhY2VcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhdGNoKHRoaXMuZGF0YS5iYXRjaCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNoYW5nZUJhdGNoKHZhbHVlOiBzdHJpbmcpXG4gICAge1xuICAgICAgICB0aGlzLmRhdGEuYmF0Y2ggPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEJhdGNoKGtleTogc3RyaW5nKTogQmF0Y2hJbnRlcmZhY2VcbiAgICB7XG4gICAgICAgIGZvciAobGV0IGJhdGNoIG9mIHRoaXMuZGF0YS5iYXRjaGVzKSB7XG4gICAgICAgICAgICBpZihiYXRjaC5rZXkgPT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJhdGNoXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGhhc0JhdGNoZXMoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5iYXRjaGVzLmxlbmd0aCA+IDA7XG4gICAgfVxufSIsImltcG9ydCB7IFJlZ2lzdHJ5IH0gZnJvbSBcIkBlbmhhdm8vY29yZVwiO1xuaW1wb3J0IEJhdGNoRmFjdG9yeUludGVyZmFjZSBmcm9tIFwiQGVuaGF2by9hcHAvZ3JpZC9iYXRjaC9CYXRjaEZhY3RvcnlJbnRlcmZhY2VcIjtcbmltcG9ydCBSZWdpc3RyeUludGVyZmFjZSBmcm9tIFwiQGVuaGF2by9jb3JlL1JlZ2lzdHJ5SW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhdGNoUmVnaXN0cnkgZXh0ZW5kcyBSZWdpc3RyeVxue1xuICAgIGdldEZhY3RvcnkobmFtZTogc3RyaW5nKTogQmF0Y2hGYWN0b3J5SW50ZXJmYWNlIHtcbiAgICAgICAgcmV0dXJuIDxCYXRjaEZhY3RvcnlJbnRlcmZhY2U+c3VwZXIuZ2V0RmFjdG9yeShuYW1lKTtcbiAgICB9XG5cbiAgICByZWdpc3RlcihuYW1lOiBzdHJpbmcsIGNvbXBvbmVudDogb2JqZWN0LCBmYWN0b3J5OiBCYXRjaEZhY3RvcnlJbnRlcmZhY2UpOiBSZWdpc3RyeUludGVyZmFjZVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLnJlZ2lzdGVyKG5hbWUsIGNvbXBvbmVudCwgZmFjdG9yeSk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgQmF0Y2hJbnRlcmZhY2UgZnJvbSBcIkBlbmhhdm8vYXBwL2dyaWQvYmF0Y2gvQmF0Y2hJbnRlcmZhY2VcIjtcbmltcG9ydCBCYXRjaEZhY3RvcnlJbnRlcmZhY2UgZnJvbSBcIkBlbmhhdm8vYXBwL2dyaWQvYmF0Y2gvQmF0Y2hGYWN0b3J5SW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0RmFjdG9yeSBpbXBsZW1lbnRzIEJhdGNoRmFjdG9yeUludGVyZmFjZVxue1xuICAgIGNyZWF0ZUZyb21EYXRhKGRhdGE6IG9iamVjdCk6IEJhdGNoSW50ZXJmYWNlXG4gICAge1xuICAgICAgICBsZXQgYmF0Y2ggPSB0aGlzLmNyZWF0ZU5ldygpO1xuICAgICAgICBiYXRjaCA9IF8uZXh0ZW5kKGRhdGEsIGJhdGNoKTtcbiAgICAgICAgcmV0dXJuIGJhdGNoO1xuICAgIH1cblxuICAgIGFic3RyYWN0IGNyZWF0ZU5ldygpOiBCYXRjaEludGVyZmFjZTtcbn0iLCJpbXBvcnQgRm9ybUJhdGNoIGZyb20gXCJAZW5oYXZvL2FwcC9ncmlkL2JhdGNoL21vZGVsL0Zvcm1CYXRjaFwiO1xuaW1wb3J0IE1vZGFsTWFuYWdlciBmcm9tIFwiQGVuaGF2by9hcHAvbW9kYWwvTW9kYWxNYW5hZ2VyXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQGVuaGF2by9hcHAvZ3JpZC9HcmlkXCI7XG5pbXBvcnQgVXJsRmFjdG9yeSBmcm9tIFwiQGVuaGF2by9hcHAvZ3JpZC9iYXRjaC9mYWN0b3J5L1VybEZhY3RvcnlcIjtcbmltcG9ydCBUcmFuc2xhdG9yIGZyb20gXCJAZW5oYXZvL2NvcmUvVHJhbnNsYXRvclwiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXcvVmlld1wiO1xuaW1wb3J0IEZsYXNoTWVzc2VuZ2VyIGZyb20gXCJAZW5oYXZvL2FwcC9mbGFzaC1tZXNzYWdlL0ZsYXNoTWVzc2VuZ2VyXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJAZW5oYXZvL2NvcmUvUm91dGVyXCI7XG5pbXBvcnQgQmF0Y2hEYXRhSW50ZXJmYWNlIGZyb20gXCJAZW5oYXZvL2FwcC9ncmlkL2JhdGNoL0JhdGNoRGF0YUludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtRmFjdG9yeSBleHRlbmRzIFVybEZhY3RvcnlcbntcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgbW9kYWxNYW5hZ2VyOiBNb2RhbE1hbmFnZXI7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGdyaWQ6IEdyaWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgYmF0Y2hEYXRhOiBCYXRjaERhdGFJbnRlcmZhY2UsXG4gICAgICAgIHRyYW5zbGF0b3I6IFRyYW5zbGF0b3IsXG4gICAgICAgIHZpZXc6IFZpZXcsXG4gICAgICAgIGZsYXNoTWVzc2VuZ2VyOiBGbGFzaE1lc3NlbmdlcixcbiAgICAgICAgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIG1vZGFsTWFuYWdlcjogTW9kYWxNYW5hZ2VyLFxuICAgICAgICBncmlkOiBHcmlkXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKGJhdGNoRGF0YSwgdHJhbnNsYXRvciwgdmlldywgZmxhc2hNZXNzZW5nZXIsIHJvdXRlcik7XG4gICAgICAgIHRoaXMubW9kYWxNYW5hZ2VyID0gbW9kYWxNYW5hZ2VyO1xuICAgICAgICB0aGlzLmdyaWQgPSBncmlkO1xuICAgIH1cblxuICAgIGNyZWF0ZU5ldygpOiBGb3JtQmF0Y2gge1xuICAgICAgICByZXR1cm4gbmV3IEZvcm1CYXRjaCh0aGlzLmJhdGNoRGF0YSwgdGhpcy50cmFuc2xhdG9yLCB0aGlzLnZpZXcsIHRoaXMuZmxhc2hNZXNzZW5nZXIsIHRoaXMucm91dGVyLCB0aGlzLm1vZGFsTWFuYWdlciwgdGhpcy5ncmlkKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQWJzdHJhY3RGYWN0b3J5IGZyb20gXCJAZW5oYXZvL2FwcC9ncmlkL2JhdGNoL2ZhY3RvcnkvQWJzdHJhY3RGYWN0b3J5XCI7XG5pbXBvcnQgTW9kYWxCYXRjaCBmcm9tIFwiQGVuaGF2by9hcHAvZ3JpZC9iYXRjaC9tb2RlbC9Nb2RhbEJhdGNoXCI7XG5pbXBvcnQgTW9kYWxNYW5hZ2VyIGZyb20gXCJAZW5oYXZvL2FwcC9tb2RhbC9Nb2RhbE1hbmFnZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWxGYWN0b3J5IGV4dGVuZHMgQWJzdHJhY3RGYWN0b3J5XG57XG4gICAgcHJpdmF0ZSByZWFkb25seSBtb2RhbE1hbmFnZXI6IE1vZGFsTWFuYWdlcjtcblxuICAgIGNvbnN0cnVjdG9yKG1vZGFsTWFuYWdlcjogTW9kYWxNYW5hZ2VyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubW9kYWxNYW5hZ2VyID0gbW9kYWxNYW5hZ2VyO1xuICAgIH1cblxuICAgIGNyZWF0ZU5ldygpOiBNb2RhbEJhdGNoIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNb2RhbEJhdGNoKHRoaXMubW9kYWxNYW5hZ2VyKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQWJzdHJhY3RGYWN0b3J5IGZyb20gXCJAZW5oYXZvL2FwcC9ncmlkL2JhdGNoL2ZhY3RvcnkvQWJzdHJhY3RGYWN0b3J5XCI7XG5pbXBvcnQgVXJsQmF0Y2ggZnJvbSBcIkBlbmhhdm8vYXBwL2dyaWQvYmF0Y2gvbW9kZWwvVXJsQmF0Y2hcIjtcbmltcG9ydCBUcmFuc2xhdG9yIGZyb20gXCJAZW5oYXZvL2NvcmUvVHJhbnNsYXRvclwiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXcvVmlld1wiO1xuaW1wb3J0IEZsYXNoTWVzc2VuZ2VyIGZyb20gXCJAZW5oYXZvL2FwcC9mbGFzaC1tZXNzYWdlL0ZsYXNoTWVzc2VuZ2VyXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJAZW5oYXZvL2NvcmUvUm91dGVyXCI7XG5pbXBvcnQgQmF0Y2hEYXRhSW50ZXJmYWNlIGZyb20gXCJAZW5oYXZvL2FwcC9ncmlkL2JhdGNoL0JhdGNoRGF0YUludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcmxGYWN0b3J5IGV4dGVuZHMgQWJzdHJhY3RGYWN0b3J5XG57XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGJhdGNoRGF0YTogQmF0Y2hEYXRhSW50ZXJmYWNlO1xuICAgIHByb3RlY3RlZCByZWFkb25seSB0cmFuc2xhdG9yOiBUcmFuc2xhdG9yO1xuICAgIHByb3RlY3RlZCByZWFkb25seSB2aWV3OiBWaWV3O1xuICAgIHByb3RlY3RlZCByZWFkb25seSBmbGFzaE1lc3NlbmdlcjogRmxhc2hNZXNzZW5nZXI7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHJvdXRlcjogUm91dGVyO1xuXG4gICAgY29uc3RydWN0b3IoYmF0Y2hEYXRhOiBCYXRjaERhdGFJbnRlcmZhY2UsIHRyYW5zbGF0b3I6IFRyYW5zbGF0b3IsIHZpZXc6IFZpZXcsIGZsYXNoTWVzc2VuZ2VyOiBGbGFzaE1lc3Nlbmdlciwgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5iYXRjaERhdGEgPSBiYXRjaERhdGE7XG4gICAgICAgIHRoaXMudHJhbnNsYXRvciA9IHRyYW5zbGF0b3I7XG4gICAgICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgICAgIHRoaXMuZmxhc2hNZXNzZW5nZXIgPSBmbGFzaE1lc3NlbmdlcjtcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV3KCk6IFVybEJhdGNoIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVcmxCYXRjaCh0aGlzLmJhdGNoRGF0YSwgdGhpcy50cmFuc2xhdG9yLCB0aGlzLnZpZXcsIHRoaXMuZmxhc2hNZXNzZW5nZXIsIHRoaXMucm91dGVyKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQmF0Y2hJbnRlcmZhY2UgZnJvbSBcIkBlbmhhdm8vYXBwL2dyaWQvYmF0Y2gvQmF0Y2hJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RCYXRjaCBpbXBsZW1lbnRzIEJhdGNoSW50ZXJmYWNlXG57XG4gICAgcHVibGljIGtleTogc3RyaW5nO1xuICAgIHB1YmxpYyBjb21wb25lbnQ6IHN0cmluZztcbiAgICBhYnN0cmFjdCBhc3luYyBleGVjdXRlKGlkczogbnVtYmVyW10pOiBQcm9taXNlPGJvb2xlYW4+O1xufVxuIiwiaW1wb3J0IFVybEJhdGNoIGZyb20gXCJAZW5oYXZvL2FwcC9ncmlkL2JhdGNoL21vZGVsL1VybEJhdGNoXCI7XG5pbXBvcnQgQWpheEZvcm1Nb2RhbCBmcm9tIFwiQGVuaGF2by9hcHAvbW9kYWwvbW9kZWwvQWpheEZvcm1Nb2RhbFwiO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSBcIkBlbmhhdm8vYXBwL2ZsYXNoLW1lc3NhZ2UvTWVzc2FnZVwiO1xuaW1wb3J0IEZsYXNoTWVzc2VuZ2VyIGZyb20gXCJAZW5oYXZvL2FwcC9mbGFzaC1tZXNzYWdlL0ZsYXNoTWVzc2VuZ2VyXCI7XG5pbXBvcnQgQmF0Y2hEYXRhSW50ZXJmYWNlIGZyb20gXCJAZW5oYXZvL2FwcC9ncmlkL2JhdGNoL0JhdGNoRGF0YUludGVyZmFjZVwiO1xuaW1wb3J0IFRyYW5zbGF0b3IgZnJvbSBcIkBlbmhhdm8vY29yZS9UcmFuc2xhdG9yXCI7XG5pbXBvcnQgVmlldyBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy9WaWV3XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJAZW5oYXZvL2NvcmUvUm91dGVyXCI7XG5pbXBvcnQgTW9kYWxNYW5hZ2VyIGZyb20gXCJAZW5oYXZvL2FwcC9tb2RhbC9Nb2RhbE1hbmFnZXJcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAZW5oYXZvL2FwcC9ncmlkL0dyaWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUJhdGNoIGV4dGVuZHMgVXJsQmF0Y2hcbntcbiAgICBwdWJsaWMgbW9kYWw6IGFueTtcblxuICAgIHByb3RlY3RlZCByZWFkb25seSBtb2RhbE1hbmFnZXI6IE1vZGFsTWFuYWdlcjtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgZ3JpZDogR3JpZDtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICAgICAgYmF0Y2hEYXRhOiBCYXRjaERhdGFJbnRlcmZhY2UsXG4gICAgICAgIHRyYW5zbGF0b3I6IFRyYW5zbGF0b3IsXG4gICAgICAgIHZpZXc6IFZpZXcsXG4gICAgICAgIGZsYXNoTWVzc2VuZ2VyOiBGbGFzaE1lc3NlbmdlcixcbiAgICAgICAgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIG1vZGFsTWFuYWdlcjogTW9kYWxNYW5hZ2VyLFxuICAgICAgICBncmlkOiBHcmlkXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKGJhdGNoRGF0YSwgdHJhbnNsYXRvciwgdmlldywgZmxhc2hNZXNzZW5nZXIsIHJvdXRlcik7XG4gICAgICAgIHRoaXMubW9kYWxNYW5hZ2VyID0gbW9kYWxNYW5hZ2VyO1xuICAgICAgICB0aGlzLmdyaWQgPSBncmlkO1xuICAgIH1cblxuICAgIGFzeW5jIGV4ZWN1dGUoaWRzOiBudW1iZXJbXSk6IFByb21pc2U8Ym9vbGVhbj5cbiAgICB7XG4gICAgICAgIGxldCBpZERhdGEgPSB7fTtcbiAgICAgICAgZm9yKGxldCBpIGluIGlkcykge1xuICAgICAgICAgICAgaWREYXRhW2ldID0gaWRzW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tb2RhbC5kYXRhID0ge1xuICAgICAgICAgICAgaWRzOiBpZERhdGEsXG4gICAgICAgICAgICB0eXBlOiB0aGlzLmtleVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubW9kYWwuYWN0aW9uVXJsID0gdGhpcy5nZXRVcmwoKTtcbiAgICAgICAgdGhpcy5tb2RhbC5hY3Rpb25IYW5kbGVyID0gKG1vZGFsOiBBamF4Rm9ybU1vZGFsLCBkYXRhOiBhbnksIGVycm9yOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gNDAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmxhc2hNZXNzZW5nZXIuYWRkTWVzc2FnZShuZXcgTWVzc2FnZShNZXNzYWdlLkVSUk9SLCBkYXRhLmRhdGEpKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZsYXNoTWVzc2VuZ2VyLmFkZE1lc3NhZ2UobmV3IE1lc3NhZ2UoTWVzc2FnZS5FUlJPUiwgdGhpcy50cmFuc2xhdG9yLnRyYW5zKGVycm9yKSkpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5mbGFzaE1lc3Nlbmdlci5hZGRNZXNzYWdlKG5ldyBNZXNzYWdlKE1lc3NhZ2UuU1VDQ0VTUywgdGhpcy50cmFuc2xhdG9yLnRyYW5zKCdlbmhhdm9fYXBwLmJhdGNoLm1lc3NhZ2Uuc3VjY2VzcycpKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLmxvYWRUYWJsZSgpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1vZGFsTWFuYWdlci5wdXNoKHRoaXMubW9kYWwpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IEFic3RyYWN0QmF0Y2ggZnJvbSBcIkBlbmhhdm8vYXBwL2dyaWQvYmF0Y2gvbW9kZWwvQWJzdHJhY3RCYXRjaFwiO1xuaW1wb3J0IE1vZGFsTWFuYWdlciBmcm9tIFwiQGVuaGF2by9hcHAvbW9kYWwvTW9kYWxNYW5hZ2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsQmF0Y2ggZXh0ZW5kcyBBYnN0cmFjdEJhdGNoXG57XG4gICAgcHVibGljIG1vZGFsOiBhbnk7XG4gICAgcHVibGljIHByb3ZpZGVEYXRhOiBib29sZWFuO1xuICAgIHB1YmxpYyBwcm92aWRlS2V5OiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IG1vZGFsTWFuYWdlcjogTW9kYWxNYW5hZ2VyO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG1vZGFsTWFuYWdlcjogTW9kYWxNYW5hZ2VyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubW9kYWxNYW5hZ2VyID0gbW9kYWxNYW5hZ2VyO1xuICAgIH1cblxuICAgIGFzeW5jIGV4ZWN1dGUoaWRzOiBudW1iZXJbXSk6IFByb21pc2U8Ym9vbGVhbj5cbiAgICB7XG4gICAgICAgIGlmKHRoaXMucHJvdmlkZURhdGEpIHtcbiAgICAgICAgICAgIHRoaXMubW9kYWxbdGhpcy5wcm92aWRlS2V5ID8gdGhpcy5wcm92aWRlS2V5IDogJ2RhdGEnXSA9IHtcbiAgICAgICAgICAgICAgICBpZHM6IGlkcyxcbiAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLmtleVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubW9kYWxNYW5hZ2VyLnB1c2godGhpcy5tb2RhbCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQWJzdHJhY3RCYXRjaCBmcm9tIFwiQGVuaGF2by9hcHAvZ3JpZC9iYXRjaC9tb2RlbC9BYnN0cmFjdEJhdGNoXCI7XG5pbXBvcnQgQ29uZmlybSBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy9Db25maXJtXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBNZXNzYWdlIGZyb20gXCJAZW5oYXZvL2FwcC9mbGFzaC1tZXNzYWdlL01lc3NhZ2VcIjtcbmltcG9ydCBCYXRjaERhdGFJbnRlcmZhY2UgZnJvbSBcIkBlbmhhdm8vYXBwL2dyaWQvYmF0Y2gvQmF0Y2hEYXRhSW50ZXJmYWNlXCI7XG5pbXBvcnQgRmxhc2hNZXNzZW5nZXIgZnJvbSBcIkBlbmhhdm8vYXBwL2ZsYXNoLW1lc3NhZ2UvRmxhc2hNZXNzZW5nZXJcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIkBlbmhhdm8vY29yZS9Sb3V0ZXJcIjtcbmltcG9ydCBUcmFuc2xhdG9yIGZyb20gXCJAZW5oYXZvL2NvcmUvVHJhbnNsYXRvclwiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXcvVmlld1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcmxCYXRjaCBleHRlbmRzIEFic3RyYWN0QmF0Y2hcbntcbiAgICBwdWJsaWMgcm91dGU6IHN0cmluZztcbiAgICBwdWJsaWMgcm91dGVQYXJhbWV0ZXJzOiBvYmplY3Q7XG4gICAgcHVibGljIGNvbmZpcm1NZXNzYWdlOiBzdHJpbmc7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgYmF0Y2hEYXRhOiBCYXRjaERhdGFJbnRlcmZhY2U7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHRyYW5zbGF0b3I6IFRyYW5zbGF0b3I7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHZpZXc6IFZpZXc7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGZsYXNoTWVzc2VuZ2VyOiBGbGFzaE1lc3NlbmdlcjtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgcm91dGVyOiBSb3V0ZXI7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgICAgIGJhdGNoRGF0YTogQmF0Y2hEYXRhSW50ZXJmYWNlLFxuICAgICAgICB0cmFuc2xhdG9yOiBUcmFuc2xhdG9yLFxuICAgICAgICB2aWV3OiBWaWV3LFxuICAgICAgICBmbGFzaE1lc3NlbmdlcjogRmxhc2hNZXNzZW5nZXIsXG4gICAgICAgIHJvdXRlcjogUm91dGVyLFxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmJhdGNoRGF0YSA9IGJhdGNoRGF0YTtcbiAgICAgICAgdGhpcy50cmFuc2xhdG9yID0gdHJhbnNsYXRvcjtcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICAgICAgdGhpcy5mbGFzaE1lc3NlbmdlciA9IGZsYXNoTWVzc2VuZ2VyO1xuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICB9XG5cbiAgICBhc3luYyBleGVjdXRlKGlkczogbnVtYmVyW10pOiBQcm9taXNlPGJvb2xlYW4+XG4gICAge1xuICAgICAgICBsZXQgdXJpID0gdGhpcy5nZXRVcmwoKTtcblxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIHR5cGU6IHRoaXMua2V5LFxuICAgICAgICAgICAgaWRzOiBpZHNcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nZXRWaWV3KCkuY29uZmlybShuZXcgQ29uZmlybShcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1NZXNzYWdlLFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LmxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdCh1cmksIGRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFZpZXcoKS5sb2FkZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZsYXNoTWVzc2VuZ2VyLmFkZE1lc3NhZ2UobmV3IE1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdG9yLnRyYW5zKCdlbmhhdm9fYXBwLmJhdGNoLm1lc3NhZ2Uuc3VjY2VzcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRWaWV3KCkubG9hZGVkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbGFzaE1lc3Nlbmdlci5hZGRNZXNzYWdlKG5ldyBNZXNzYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0b3IudHJhbnMoJ2VuaGF2b19hcHAuYmF0Y2gubWVzc2FnZS5lcnJvcicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4ge30sXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdG9yLnRyYW5zKCdlbmhhdm9fYXBwLnZpZXcubGFiZWwuY2FuY2VsJyksXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdG9yLnRyYW5zKCdlbmhhdm9fYXBwLnZpZXcubGFiZWwub2snKSxcbiAgICAgICAgICAgICkpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0VmlldygpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy52aWV3O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRVcmwoKVxuICAgIHtcbiAgICAgICAgbGV0IHJvdXRlID0gdGhpcy5yb3V0ZTtcbiAgICAgICAgaWYoIXJvdXRlKSB7XG4gICAgICAgICAgICByb3V0ZSA9IHRoaXMuYmF0Y2hEYXRhLmJhdGNoUm91dGU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGFyYW1ldGVycyA9IHRoaXMucm91dGVQYXJhbWV0ZXJzO1xuICAgICAgICBpZighcGFyYW1ldGVycykge1xuICAgICAgICAgICAgcGFyYW1ldGVycyA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5iYXRjaERhdGEuYmF0Y2hSb3V0ZVBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgIHBhcmFtZXRlcnMgPSBfLmV4dGVuZChwYXJhbWV0ZXJzLCB0aGlzLmJhdGNoRGF0YS5iYXRjaFJvdXRlUGFyYW1ldGVycyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXIuZ2VuZXJhdGUocm91dGUsIHBhcmFtZXRlcnMpO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWdpc3RyeUludGVyZmFjZSBmcm9tIFwiLi9SZWdpc3RyeUludGVyZmFjZVwiO1xuaW1wb3J0IFJlZ2lzdHJ5RW50cnkgZnJvbSBcIkBlbmhhdm8vY29yZS9SZWdpc3RyeUVudHJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdHJ5IGltcGxlbWVudHMgUmVnaXN0cnlJbnRlcmZhY2VcbntcbiAgICBwcml2YXRlIGVudHJpZXM6IFJlZ2lzdHJ5RW50cnlbXSA9IFtdO1xuXG4gICAgcHJpdmF0ZSBnZXQobmFtZTogc3RyaW5nKTogUmVnaXN0cnlFbnRyeVxuICAgIHtcbiAgICAgICAgZm9yKGxldCBlbnRyeSBvZiB0aGlzLmVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmKGVudHJ5LmdldE5hbWUoKSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93ICdFbnRyeSB3aXRoIG5hbWUgXCInK25hbWUrJ1wiIGRvZXMgbm90IGV4aXN0IGluIHJlZ2lzdHJ5JztcbiAgICB9XG5cbiAgICBnZXRGYWN0b3J5KG5hbWU6IHN0cmluZyk6IG9iamVjdFxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KG5hbWUpLmdldEZhY3RvcnkoKTtcbiAgICB9XG5cbiAgICBnZXRDb21wb25lbnQobmFtZTogc3RyaW5nKTogb2JqZWN0XG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQobmFtZSkuZ2V0Q29tcG9uZW50KCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIoZW50cnk6IFJlZ2lzdHJ5RW50cnkpOiBSZWdpc3RyeUludGVyZmFjZVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5oYXMoZW50cnkuZ2V0TmFtZSgpKSkge1xuICAgICAgICAgICAgdGhpcy5kZWxldGVFbnRyeShlbnRyeS5nZXROYW1lKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW50cmllcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZWxldGVFbnRyeShuYW1lOiBzdHJpbmcpXG4gICAge1xuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuZW50cmllcykge1xuICAgICAgICAgICAgaWYodGhpcy5lbnRyaWVzW2ldLmdldE5hbWUoKSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbnRyaWVzLnNwbGljZShwYXJzZUludChpKSwgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYXMobmFtZTogc3RyaW5nKTogYm9vbGVhblxuICAgIHtcbiAgICAgICAgZm9yKGxldCBlbnRyeSBvZiB0aGlzLmVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmKGVudHJ5LmdldE5hbWUoKSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdldENvbXBvbmVudHMoKTogQ29tcG9uZW50W11cbiAgICB7XG4gICAgICAgIGxldCBjb21wb25lbnRzID0gW107XG4gICAgICAgIGZvcihsZXQgZW50cnkgb2YgdGhpcy5lbnRyaWVzKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLnB1c2gobmV3IENvbXBvbmVudChlbnRyeS5nZXROYW1lKCksIGVudHJ5LmdldENvbXBvbmVudCgpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50XG57XG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgY29tcG9uZW50OiBvYmplY3Q7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGNvbXBvbmVudDogb2JqZWN0KSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWdpc3RyeSBmcm9tICcuL1JlZ2lzdHJ5JztcbmltcG9ydCBSZWdpc3RyeUludGVyZmFjZSBmcm9tICcuL1JlZ2lzdHJ5SW50ZXJmYWNlJztcbmltcG9ydCBGYWN0b3J5SW50ZXJmYWNlIGZyb20gJy4vRmFjdG9yeUludGVyZmFjZSc7XG5pbXBvcnQgQ29tcG9uZW50QXdhcmVJbnRlcmZhY2UgZnJvbSAnLi9Db21wb25lbnRBd2FyZUludGVyZmFjZSc7XG5cbmV4cG9ydCB7XG4gICAgUmVnaXN0cnksXG4gICAgUmVnaXN0cnlJbnRlcmZhY2UsXG4gICAgRmFjdG9yeUludGVyZmFjZSxcbiAgICBDb21wb25lbnRBd2FyZUludGVyZmFjZVxufTtcbiIsImltcG9ydCBWaWV3IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3L1ZpZXdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlybVxue1xuICAgIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XG4gICAgcHVibGljIGRlbnlUZXh0OiBzdHJpbmc7XG4gICAgcHVibGljIGFjY2VwdFRleHQ6IHN0cmluZztcbiAgICBwdWJsaWMgb25EZW55OiAoKSA9PiB2b2lkO1xuICAgIHB1YmxpYyBvbkFjY2VwdDogKCkgPT4gdm9pZDtcbiAgICBwdWJsaWMgdmlldzogVmlldztcblxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgb25BY2NlcHQ/OiAoKSA9PiB2b2lkLCBvbkRlbnk/OiAoKSA9PiB2b2lkLCBkZW55VGV4dDogc3RyaW5nID0gJ2RlbnknLCBhY2NlcHRUZXh0OiBzdHJpbmcgPSAnYWNjZXB0JylcbiAgICB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMub25BY2NlcHQgPSBvbkFjY2VwdDtcbiAgICAgICAgdGhpcy5vbkRlbnkgPSBvbkRlbnk7XG4gICAgICAgIHRoaXMuZGVueVRleHQgPSBkZW55VGV4dDtcbiAgICAgICAgdGhpcy5hY2NlcHRUZXh0ID0gYWNjZXB0VGV4dDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0Vmlldyh2aWV3OiBWaWV3KVxuICAgIHtcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVueSgpXG4gICAge1xuICAgICAgICB0aGlzLnZpZXcuY29uZmlybShudWxsKTtcbiAgICAgICAgaWYodGhpcy5vbkRlbnkpIHtcbiAgICAgICAgICAgIHRoaXMub25EZW55KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0KClcbiAgICB7XG4gICAgICAgIHRoaXMudmlldy5jb25maXJtKG51bGwpO1xuICAgICAgICBpZih0aGlzLm9uQWNjZXB0KSB7XG4gICAgICAgICAgICB0aGlzLm9uQWNjZXB0KCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IEZhY3RvcnlJbnRlcmZhY2UgZnJvbSBcIkBlbmhhdm8vY29yZS9GYWN0b3J5SW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdHJ5RW50cnlcbntcbiAgICBwcml2YXRlIG5hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIGNvbXBvbmVudDogb2JqZWN0O1xuICAgIHByaXZhdGUgZmFjdG9yeTogRmFjdG9yeUludGVyZmFjZTtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgY29tcG9uZW50OiBvYmplY3QsIGZhY3Rvcnk6IEZhY3RvcnlJbnRlcmZhY2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgIHRoaXMuZmFjdG9yeSA9IGZhY3Rvcnk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldE5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29tcG9uZW50KCk6IG9iamVjdCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RmFjdG9yeSgpOiBGYWN0b3J5SW50ZXJmYWNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmFjdG9yeTtcbiAgICB9XG59XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==