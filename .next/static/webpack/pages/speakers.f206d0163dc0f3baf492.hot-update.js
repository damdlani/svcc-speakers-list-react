webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/components/Speakers/Speakers.js":
/*!*********************************************!*\
  !*** ./src/components/Speakers/Speakers.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _withDataHOC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withDataHOC */ "./src/components/Speakers/withDataHOC.js");


var _jsxFileName = "C:\\dev\\Speakers\\src\\components\\Speakers\\Speakers.js",
    _this = undefined;




var Speakers = function Speakers(_ref) {
  var speakers = _ref.speakers;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: speakers.map(function (_ref2) {
      var imageSrc = _ref2.imageSrc,
          name = _ref2.name;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: imageSrc,
        alt: name
      }, imageSrc, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};

_c = Speakers;
var maxSpeakerToShow = 2;
/* harmony default export */ __webpack_exports__["default"] = (Object(_withDataHOC__WEBPACK_IMPORTED_MODULE_2__["withData"])(maxSpeakerToShow)(Speakers));

var _c;

$RefreshReg$(_c, "Speakers");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Speakers/withData.js":
false,

/***/ "./src/components/Speakers/withDataHOC.js":
/*!************************************************!*\
  !*** ./src/components/Speakers/withDataHOC.js ***!
  \************************************************/
/*! exports provided: withData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withData", function() { return withData; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "C:\\dev\\Speakers\\src\\components\\Speakers\\withDataHOC.js",
    _this = undefined;

var withData = function withData(maxSpeakersToShow) {
  return function (Component) {
    var pathName = "images";
    var speakers = [{
      imageSrc: "".concat(pathName, "/speaker-component-1530.png"),
      name: "Tamara Baker"
    }, {
      imageSrc: "".concat(pathName, "/speaker-component-10803.png"),
      name: "Eugene Chuvyrov"
    }, {
      imageSrc: "".concat(pathName, "/speaker-component-1124.png"),
      name: "Douglas Crockford"
    }];
    return function () {
      var limitSpeakers = speakers.slice(0, maxSpeakersToShow);
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, {
        speakers: limitSpeakers
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 12
      }, _this);
    };
  };
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvU3BlYWtlcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzL3dpdGhEYXRhSE9DLmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJzIiwic3BlYWtlcnMiLCJtYXAiLCJpbWFnZVNyYyIsIm5hbWUiLCJtYXhTcGVha2VyVG9TaG93Iiwid2l0aERhdGEiLCJtYXhTcGVha2Vyc1RvU2hvdyIsIkNvbXBvbmVudCIsInBhdGhOYW1lIiwibGltaXRTcGVha2VycyIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBRWpDLHNCQUNFO0FBQUEsY0FDR0EsUUFBUSxDQUFDQyxHQUFULENBQWE7QUFBQSxVQUFHQyxRQUFILFNBQUdBLFFBQUg7QUFBQSxVQUFhQyxJQUFiLFNBQWFBLElBQWI7QUFBQSwwQkFDWjtBQUFLLFdBQUcsRUFBRUQsUUFBVjtBQUFvQixXQUFHLEVBQUVDO0FBQXpCLFNBQW9DRCxRQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFk7QUFBQSxLQUFiO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBT0QsQ0FURDs7S0FBTUgsUTtBQVdOLElBQU1LLGdCQUFnQixHQUFHLENBQXpCO0FBRWVDLDRIQUFRLENBQUNELGdCQUFELENBQVIsQ0FBMkJMLFFBQTNCLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQk8sSUFBTU0sUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsaUJBQUQ7QUFBQSxTQUF1QixVQUFDQyxTQUFELEVBQWU7QUFDNUQsUUFBTUMsUUFBUSxHQUFHLFFBQWpCO0FBQ0EsUUFBTVIsUUFBUSxHQUFHLENBQ2Y7QUFDRUUsY0FBUSxZQUFLTSxRQUFMLGdDQURWO0FBRUVMLFVBQUksRUFBRTtBQUZSLEtBRGUsRUFLZjtBQUNFRCxjQUFRLFlBQUtNLFFBQUwsaUNBRFY7QUFFRUwsVUFBSSxFQUFFO0FBRlIsS0FMZSxFQVNmO0FBQ0VELGNBQVEsWUFBS00sUUFBTCxnQ0FEVjtBQUVFTCxVQUFJLEVBQUU7QUFGUixLQVRlLENBQWpCO0FBZUEsV0FBTyxZQUFNO0FBQ1gsVUFBTU0sYUFBYSxHQUFHVCxRQUFRLENBQUNVLEtBQVQsQ0FBZSxDQUFmLEVBQWtCSixpQkFBbEIsQ0FBdEI7QUFDQSwwQkFBTyxxRUFBQyxTQUFEO0FBQVcsZ0JBQVEsRUFBRUc7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsS0FIRDtBQUlELEdBckJ1QjtBQUFBLENBQWpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWFrZXJzLmYyMDZkMDE2M2RjMGYzYmFmNDkyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHdpdGhEYXRhIH0gZnJvbSBcIi4vd2l0aERhdGFIT0NcIjtcclxuXHJcbmNvbnN0IFNwZWFrZXJzID0gKHsgc3BlYWtlcnMgfSkgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3NwZWFrZXJzLm1hcCgoeyBpbWFnZVNyYywgbmFtZSB9KSA9PiAoXHJcbiAgICAgICAgPGltZyBzcmM9e2ltYWdlU3JjfSBhbHQ9e25hbWV9IGtleT17aW1hZ2VTcmN9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1heFNwZWFrZXJUb1Nob3cgPSAyO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aERhdGEobWF4U3BlYWtlclRvU2hvdykoU3BlYWtlcnMpO1xyXG4iLCJleHBvcnQgY29uc3Qgd2l0aERhdGEgPSAobWF4U3BlYWtlcnNUb1Nob3cpID0+IChDb21wb25lbnQpID0+IHtcclxuICBjb25zdCBwYXRoTmFtZSA9IFwiaW1hZ2VzXCI7XHJcbiAgY29uc3Qgc3BlYWtlcnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIGltYWdlU3JjOiBgJHtwYXRoTmFtZX0vc3BlYWtlci1jb21wb25lbnQtMTUzMC5wbmdgLFxyXG4gICAgICBuYW1lOiBcIlRhbWFyYSBCYWtlclwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2VTcmM6IGAke3BhdGhOYW1lfS9zcGVha2VyLWNvbXBvbmVudC0xMDgwMy5wbmdgLFxyXG4gICAgICBuYW1lOiBcIkV1Z2VuZSBDaHV2eXJvdlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2VTcmM6IGAke3BhdGhOYW1lfS9zcGVha2VyLWNvbXBvbmVudC0xMTI0LnBuZ2AsXHJcbiAgICAgIG5hbWU6IFwiRG91Z2xhcyBDcm9ja2ZvcmRcIixcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgIGNvbnN0IGxpbWl0U3BlYWtlcnMgPSBzcGVha2Vycy5zbGljZSgwLCBtYXhTcGVha2Vyc1RvU2hvdyk7XHJcbiAgICByZXR1cm4gPENvbXBvbmVudCBzcGVha2Vycz17bGltaXRTcGVha2Vyc30+PC9Db21wb25lbnQ+XHJcbiAgfTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==