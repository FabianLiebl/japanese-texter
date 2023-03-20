(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["base"],{

/***/ "./assets/theme/base.ts":
/*!******************************!*\
  !*** ./assets/theme/base.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js"), __webpack_require__(/*! ./javascript/Application */ "./assets/theme/javascript/Application.ts"), __webpack_require__(/*! ./javascript/Training */ "./assets/theme/javascript/Training.ts"), __webpack_require__(/*! ./javascript/TrainingLetters */ "./assets/theme/javascript/TrainingLetters.ts"), __webpack_require__(/*! ./styles/base.scss */ "./assets/theme/styles/base.scss")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, $, Application_1, Training_1, TrainingLetters_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  if ($('[data-training]').length > 0) {
    new Training_1["default"]();
  } else if ($('[data-training-letters]').length > 0) {
    new TrainingLetters_1["default"]();
  } else {
    new Application_1["default"]();
  }
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
      var self = this; // this.$filterArea.find('[data-tag]').on('click', function () {
      //     $(this).toggleClass('active');
      //     self.updateFilters();
      // });

      this.$filterArea.find('[data-tag]').on('mouseup', function (event) {
        switch (event.button) {
          case 0:
            $(this).removeClass('not');
            $(this).toggleClass('active');
            break;

          case 1:
            $(this).removeClass('active');
            $(this).toggleClass('not');
            break;
        }

        self.updateFilters();
      });
    };

    Application.prototype.updateFilters = function () {
      var activeFilterOrGroups = [];
      var activeFiltersWithoutOrGroup = [];
      var activeNotFilters = [];
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
      this.$filterArea.find('[data-tag].not').each(function () {
        activeNotFilters.push($(this).data('tag'));
      });
      this.$letterArea.find('[data-letter]').each(function () {
        var ownTags = $(this).data('tags');

        for (var _i = 0, activeNotFilters_1 = activeNotFilters; _i < activeNotFilters_1.length; _i++) {
          var filter = activeNotFilters_1[_i];

          if (ownTags.hasOwnProperty(filter)) {
            $(this).addClass('filtered-out');
            return;
          }
        }

        for (var _a = 0, activeFiltersWithoutOrGroup_1 = activeFiltersWithoutOrGroup; _a < activeFiltersWithoutOrGroup_1.length; _a++) {
          var filter = activeFiltersWithoutOrGroup_1[_a];

          if (!ownTags.hasOwnProperty(filter)) {
            $(this).addClass('filtered-out');
            return;
          }
        }

        for (var _b = 0, activeFilterOrGroups_2 = activeFilterOrGroups; _b < activeFilterOrGroups_2.length; _b++) {
          var orGroup = activeFilterOrGroups_2[_b];
          var hasOne = false;

          for (var _c = 0, _d = orGroup.filters; _c < _d.length; _c++) {
            var filter = _d[_c];

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

/***/ "./assets/theme/javascript/Training.ts":
/*!*********************************************!*\
  !*** ./assets/theme/javascript/Training.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js"), __webpack_require__(/*! axios */ "./node_modules/axios/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, $, axios_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var Training =
  /** @class */
  function () {
    function Training() {
      var _this = this;

      this.numCorrect = 0;
      this.numWrong = 0;
      this.currentIndex = -1;
      this.nextSheet();
      $('[data-choice]').on('click', function (event) {
        _this.choiceClick($(event.target));
      });
      $('[data-next-sheet]').on('click', function () {
        _this.nextSheet();
      });
    }

    Training.prototype.choiceClick = function ($target) {
      if (!this.solved) {
        this.solved = true;
        var correct = $target.data('choice') == 'correct';
        var chosenLetterId = $target.data('letter-id');
        this.$currentSheet.addClass('solved');

        if (correct) {
          this.$currentSheet.addClass('correct');
          this.numCorrect++;
        } else {
          this.numWrong++;
        }

        this.sendResult(this.currentLetterId, correct, chosenLetterId);
      }
    };

    Training.prototype.nextSheet = function () {
      $('[data-sheet]').removeClass('active');
      this.currentIndex++;
      this.$currentSheet = $('[data-sheet="' + this.currentIndex + '"]');
      this.solved = false;

      if (this.$currentSheet.length > 0) {
        this.$currentSheet.addClass('active');
        this.currentLetterId = this.$currentSheet.data('letter');
      } else {
        location.reload(); // $('[data-result-message]').html('Finished, ' + this.numCorrect + ' correct and ' + this.numWrong + ' errors.');
        // $('[data-sheet="result"]').addClass('active');
      }
    };

    Training.prototype.sendResult = function (letterId, correct, chosenLetterId) {
      var url = '/training/adjust-letter-score/' + letterId + '/';

      if (correct) {
        url += '1';
      } else {
        url += '0';
      }

      axios_1["default"].get(url);

      if (!correct) {
        var url_1 = '/training/adjust-letter-score/' + chosenLetterId + '/0';
        axios_1["default"].get(url_1);
      }
    };

    return Training;
  }();

  exports["default"] = Training;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./assets/theme/javascript/TrainingLetters.ts":
/*!****************************************************!*\
  !*** ./assets/theme/javascript/TrainingLetters.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js"), __webpack_require__(/*! axios */ "./node_modules/axios/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, $, axios_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var TrainingLetters =
  /** @class */
  function () {
    function TrainingLetters() {
      var _this = this;

      $('[data-change-score]').on('click', function (event) {
        event.preventDefault();

        _this.changeLetterScore($(event.target));
      });
    }

    TrainingLetters.prototype.changeLetterScore = function ($target) {
      var url = $target.prop('href');
      var $letter = $target.closest('[data-letter]');
      axios_1["default"].get(url).then(function (response) {
        if (response.data.success) {
          $letter.removeClass('good').removeClass('mid').removeClass('bad').addClass(response.data.scoreClass);
          $letter.find('[data-score]').html(response.data.score);
        }
      });
    };

    return TrainingLetters;
  }();

  exports["default"] = TrainingLetters;
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