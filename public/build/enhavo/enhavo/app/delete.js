(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["enhavo/app/delete"],{

/***/ "./node_modules/@enhavo/app/entrypoint/delete.ts":
/*!*******************************************************!*\
  !*** ./node_modules/@enhavo/app/entrypoint/delete.ts ***!
  \*******************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/dependency-injection */ "./node_modules/@enhavo/dependency-injection/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, dependency_injection_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  (function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var _a, _b, _c;

      return __generator(this, function (_d) {
        switch (_d.label) {
          case 0:
            return [4
            /*yield*/
            , dependency_injection_1["default"].init()];

          case 1:
            _d.sent();

            return [4
            /*yield*/
            , dependency_injection_1["default"].get('@enhavo/app/delete/DeleteApp')];

          case 2:
            _d.sent().init();

            return [4
            /*yield*/
            , dependency_injection_1["default"].get('@enhavo/app/vue/VueApp')];

          case 3:
            _b = (_a = _d.sent()).init;
            _c = ['app'];
            return [4
            /*yield*/
            , dependency_injection_1["default"].get('@enhavo/app/delete/components/DeleteComponent.vue')];

          case 4:
            _b.apply(_a, _c.concat([_d.sent()]));

            return [2
            /*return*/
            ];
        }
      });
    });
  })();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

},[["./node_modules/@enhavo/app/entrypoint/delete.ts","runtime","vendors~enhavo/app/delete~enhavo/app/form~enhavo/app/index~enhavo/app/list~enhavo/app/main~enhavo/ap~5e755b85"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvZW50cnlwb2ludC9kZWxldGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsR0FBQztBQUFBOzs7Ozs7QUFDRztBQUFBO0FBQUEsY0FBTSxrQ0FBVSxJQUFWLEVBQU47OztBQUFBOztBQUNDO0FBQUE7QUFBQSxjQUFNLGtDQUFVLEdBQVYsQ0FBYyw4QkFBZCxDQUFOOzs7QUFBQSxxQkFBRCxDQUFzRCxJQUF0RDs7QUFDQztBQUFBO0FBQUEsY0FBTSxrQ0FBVSxHQUFWLENBQWMsd0JBQWQsQ0FBTjs7O0FBQUQsdUJBQUMsU0FBRCxFQUFnRCxJQUFoRDtrQkFBcUQsSztBQUFPO0FBQUE7QUFBQSxjQUFNLGtDQUFVLEdBQVYsQ0FBYyxtREFBZCxDQUFOOzs7QUFBNUQsb0NBQTRELFNBQTVEOzs7Ozs7O0tBSEg7QUFJQSxHQUpEIiwiZmlsZSI6ImVuaGF2by9hcHAvZGVsZXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQGVuaGF2by9kZXBlbmRlbmN5LWluamVjdGlvblwiXG5cbihhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgQ29udGFpbmVyLmluaXQoKTtcbiAgICAoYXdhaXQgQ29udGFpbmVyLmdldCgnQGVuaGF2by9hcHAvZGVsZXRlL0RlbGV0ZUFwcCcpKS5pbml0KCk7XG4gICAgKGF3YWl0IENvbnRhaW5lci5nZXQoJ0Blbmhhdm8vYXBwL3Z1ZS9WdWVBcHAnKSkuaW5pdCgnYXBwJywgYXdhaXQgQ29udGFpbmVyLmdldCgnQGVuaGF2by9hcHAvZGVsZXRlL2NvbXBvbmVudHMvRGVsZXRlQ29tcG9uZW50LnZ1ZScpKTtcbn0pKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9