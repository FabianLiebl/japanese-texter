(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["base"],{

/***/ "./assets/theme/base.ts":
/*!******************************!*\
  !*** ./assets/theme/base.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./javascript/Application */ "./assets/theme/javascript/Application.ts"), __webpack_require__(/*! ./styles/base.scss */ "./assets/theme/styles/base.scss")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Application_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  new Application_1["default"]();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./assets/theme/javascript/Application.ts":
/*!************************************************!*\
  !*** ./assets/theme/javascript/Application.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, $) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var Application =
  /** @class */
  function () {
    function Application() {
      this.$currentlyDragged = null;
      this.textFieldCursorPosition = 0;
      this.$filterArea = $('[data-filter-area]');
      this.$letterArea = $('[data-letter-area]');
      this.$dataOutputField = $('[data-output-field]');
      this.initFavoriteTags();
      this.initFavoriteLetters();
      this.initLetterClick();
      this.initFilter();
    }

    Application.prototype.initFavoriteTags = function () {
      var _this = this;

      var self = this;
      this.$filterArea.find('[data-favorite-tags]').find('[data-tag]').data('favorite', 1);
      this.$filterArea.find('[data-tags]').find('[data-tag]').data('favorite', 0);
      this.$filterArea.find('[data-tag]').on('dragstart', function () {
        if ($(this).data('favorite') == 1) {
          self.$filterArea.addClass('dragging-favorite-tag');
        } else {
          self.$filterArea.addClass('dragging-tag');
        }

        self.$currentlyDragged = $(this);
      });
      var $favoriteTags = this.$filterArea.find('[data-favorite-tags]');
      $favoriteTags.on('dragover', function (event) {
        event.preventDefault();
        return true;
      });
      $favoriteTags.on('drop dragdrop', function (event) {
        if (self.$currentlyDragged == null) {
          return;
        }

        if (!self.$currentlyDragged.data('tag')) {
          return;
        }

        if (self.$currentlyDragged.data('favorite') == 0) {
          _this.$currentlyDragged.appendTo($favoriteTags);

          _this.$currentlyDragged.data('favorite', 1);

          $.ajax({
            url: '/tag/favorite/' + _this.$currentlyDragged.data('tag')
          });
        }

        _this.$currentlyDragged = null;
      });
      var $normalTags = this.$filterArea.find('[data-tags]');
      $normalTags.on('dragover', function (event) {
        event.preventDefault();
        return true;
      });
      $normalTags.on('drop dragdrop', function (event) {
        if (self.$currentlyDragged == null) {
          return;
        }

        if (!self.$currentlyDragged.data('tag')) {
          return;
        }

        if (self.$currentlyDragged.data('favorite') == 1) {
          _this.$currentlyDragged.appendTo($normalTags);

          _this.$currentlyDragged.data('favorite', 0);

          $.ajax({
            url: '/tag/unfavorite/' + _this.$currentlyDragged.data('tag')
          });
        }

        _this.$currentlyDragged = null;
      });
      $(document).on('dragend', function () {
        _this.$filterArea.removeClass('dragging-favorite-tag').removeClass('dragging-tag');

        _this.$currentlyDragged = null;
      });
    };

    Application.prototype.initFavoriteLetters = function () {
      var _this = this;

      var self = this;
      this.$letterArea.find('[data-favorite-letters]').find('[data-letter]').data('favorite', 1);
      this.$letterArea.find('[data-letters]').find('[data-letter]').data('favorite', 0);
      this.$letterArea.find('[data-letter]').on('dragstart', function () {
        if ($(this).data('favorite') == 1) {
          self.$letterArea.addClass('dragging-favorite-letter');
        } else {
          self.$letterArea.addClass('dragging-letter');
        }

        self.$currentlyDragged = $(this);
      });
      var $favoriteLetters = this.$letterArea.find('[data-favorite-letters]');
      $favoriteLetters.on('dragover', function (event) {
        event.preventDefault();
        return true;
      });
      $favoriteLetters.on('drop dragdrop', function (event) {
        if (self.$currentlyDragged == null) {
          return;
        }

        if (!self.$currentlyDragged.data('letter')) {
          return;
        }

        if (self.$currentlyDragged.data('favorite') == 0) {
          _this.$currentlyDragged.appendTo($favoriteLetters);

          _this.$currentlyDragged.data('favorite', 1);

          $.ajax({
            url: '/letter/favorite/' + _this.$currentlyDragged.data('letter')
          });
        }

        _this.$currentlyDragged = null;
      });
      var $normalLetters = this.$letterArea.find('[data-letters]');
      $normalLetters.on('dragover', function (event) {
        event.preventDefault();
        return true;
      });
      $normalLetters.on('drop dragdrop', function (event) {
        if (self.$currentlyDragged == null) {
          return;
        }

        if (!self.$currentlyDragged.data('letter')) {
          return;
        }

        if (self.$currentlyDragged.data('favorite') == 1) {
          _this.$currentlyDragged.appendTo($normalLetters);

          _this.$currentlyDragged.data('favorite', 0);

          $.ajax({
            url: '/letter/unfavorite/' + _this.$currentlyDragged.data('letter')
          });
        }

        _this.$currentlyDragged = null;
      });
      $(document).on('dragend', function () {
        _this.$letterArea.removeClass('dragging-favorite-letter').removeClass('dragging-letter');

        _this.$currentlyDragged = null;
      });
    };

    Application.prototype.initLetterClick = function () {
      var _this = this;

      var self = this;
      self.$dataOutputField.on('click keyup', function () {
        _this.textFieldCursorPosition = self.$dataOutputField.prop('selectionStart');
        console.log(_this.textFieldCursorPosition);
      });
      this.$letterArea.find('[data-letter]').on('click', function () {
        var currentText = self.$dataOutputField.val();
        var newText = currentText.substring(0, self.textFieldCursorPosition) + $(this).find('[data-letter-symbol]').html() + currentText.substring(self.textFieldCursorPosition, currentText.length);
        self.$dataOutputField.val(newText);
        self.textFieldCursorPosition++;
        self.$dataOutputField.prop('selectionStart', self.textFieldCursorPosition);
        self.$dataOutputField.prop('selectionEnd', self.textFieldCursorPosition);
        self.$dataOutputField.trigger('focus');
      });
    };

    Application.prototype.initFilter = function () {
      var self = this;
      this.$filterArea.find('[data-tag]').on('click', function () {
        $(this).toggleClass('active');
        self.updateFilters();
      });
    };

    Application.prototype.updateFilters = function () {
      var activeFilterOrGroups = [];
      var activeFiltersWithoutOrGroup = [];
      this.$filterArea.find('[data-tag].active').each(function () {
        var orGroupName = $(this).data('or-group');

        if (orGroupName) {
          for (var _i = 0, activeFilterOrGroups_1 = activeFilterOrGroups; _i < activeFilterOrGroups_1.length; _i++) {
            var orGroup = activeFilterOrGroups_1[_i];

            if (orGroup.name == orGroupName) {
              orGroup.filters.push($(this).data('tag'));
              return;
            }
          }

          var newOrGroup = new OrGroup(orGroupName);
          newOrGroup.filters.push($(this).data('tag'));
          activeFilterOrGroups.push(newOrGroup);
        } else {
          activeFiltersWithoutOrGroup.push($(this).data('tag'));
        }
      });
      this.$letterArea.find('[data-letter]').each(function () {
        var ownTags = $(this).data('tags');

        for (var _i = 0, activeFiltersWithoutOrGroup_1 = activeFiltersWithoutOrGroup; _i < activeFiltersWithoutOrGroup_1.length; _i++) {
          var filter = activeFiltersWithoutOrGroup_1[_i];

          if (!ownTags.hasOwnProperty(filter)) {
            $(this).addClass('filtered-out');
            return;
          }
        }

        for (var _a = 0, activeFilterOrGroups_2 = activeFilterOrGroups; _a < activeFilterOrGroups_2.length; _a++) {
          var orGroup = activeFilterOrGroups_2[_a];
          var hasOne = false;

          for (var _b = 0, _c = orGroup.filters; _b < _c.length; _b++) {
            var filter = _c[_b];

            if (ownTags.hasOwnProperty(filter)) {
              hasOne = true;
              break;
            }
          }

          if (!hasOne) {
            $(this).addClass('filtered-out');
            return;
          }
        }

        $(this).removeClass('filtered-out');
      });
    };

    return Application;
  }();

  exports["default"] = Application;

  var OrGroup =
  /** @class */
  function () {
    function OrGroup(name) {
      this.name = name;
      this.filters = [];
    }

    return OrGroup;
  }();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./assets/theme/styles/base.scss":
/*!***************************************!*\
  !*** ./assets/theme/styles/base.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/theme/base.ts","runtime","vendors~base"]]]);