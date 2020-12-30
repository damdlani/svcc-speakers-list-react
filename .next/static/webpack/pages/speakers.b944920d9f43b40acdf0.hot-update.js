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
/* harmony import */ var _withData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withData */ "./src/components/Speakers/withData.js");


var _jsxFileName = "C:\\dev\\Speakers\\src\\components\\Speakers\\Speakers.js",
    _this = undefined;




var Speakers = function Speakers() {
  var pathName = "images";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: speakers.map(function (_ref) {
      var imageSrc = _ref.imageSrc,
          name = _ref.name;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: imageSrc,
        alt: name
      }, imageSrc, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, _this);
};

_c = Speakers;
/* harmony default export */ __webpack_exports__["default"] = (_withData__WEBPACK_IMPORTED_MODULE_2__["withData"]);

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
/*!*********************************************!*\
  !*** ./src/components/Speakers/withData.js ***!
  \*********************************************/
/*! exports provided: withData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withData", function() { return withData; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "C:\\dev\\Speakers\\src\\components\\Speakers\\withData.js",
    _this = undefined;

var withData = function withData(Component) {
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, {
    speakers: speakers
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 10
  }, _this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvU3BlYWtlcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzL3dpdGhEYXRhLmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJzIiwicGF0aE5hbWUiLCJzcGVha2VycyIsIm1hcCIsImltYWdlU3JjIiwibmFtZSIsIndpdGhEYXRhIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsTUFBTUMsUUFBUSxHQUFHLFFBQWpCO0FBR0Esc0JBQ0U7QUFBQSxjQUNHQyxRQUFRLENBQUNDLEdBQVQsQ0FBYTtBQUFBLFVBQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFVBQWFDLElBQWIsUUFBYUEsSUFBYjtBQUFBLDBCQUNaO0FBQUssV0FBRyxFQUFFRCxRQUFWO0FBQW9CLFdBQUcsRUFBRUM7QUFBekIsU0FBb0NELFFBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEWTtBQUFBLEtBQWI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFPRCxDQVhEOztLQUFNSixRO0FBZVNNLGlIQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJPLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLFNBQUQsRUFBZTtBQUNyQyxNQUFNTCxRQUFRLEdBQUcsQ0FDZjtBQUNFRSxZQUFRLFlBQUtILFFBQUwsZ0NBRFY7QUFFRUksUUFBSSxFQUFFO0FBRlIsR0FEZSxFQUtmO0FBQ0VELFlBQVEsWUFBS0gsUUFBTCxpQ0FEVjtBQUVFSSxRQUFJLEVBQUU7QUFGUixHQUxlLEVBU2Y7QUFDRUQsWUFBUSxZQUFLSCxRQUFMLGdDQURWO0FBRUVJLFFBQUksRUFBRTtBQUZSLEdBVGUsQ0FBakI7QUFlQSxzQkFBTyxxRUFBQyxTQUFEO0FBQVcsWUFBUSxFQUFFSDtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQWpCTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zcGVha2Vycy5iOTQ0OTIwZDlmNDNiNDBhY2RmMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB3aXRoRGF0YSB9IGZyb20gXCIuL3dpdGhEYXRhXCI7XHJcblxyXG5jb25zdCBTcGVha2VycyA9ICgpID0+IHtcclxuICBjb25zdCBwYXRoTmFtZSA9IFwiaW1hZ2VzXCI7XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3NwZWFrZXJzLm1hcCgoeyBpbWFnZVNyYywgbmFtZSB9KSA9PiAoXHJcbiAgICAgICAgPGltZyBzcmM9e2ltYWdlU3JjfSBhbHQ9e25hbWV9IGtleT17aW1hZ2VTcmN9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aERhdGE7IiwiZXhwb3J0IGNvbnN0IHdpdGhEYXRhID0gKENvbXBvbmVudCkgPT4ge1xyXG4gIGNvbnN0IHNwZWFrZXJzID0gW1xyXG4gICAge1xyXG4gICAgICBpbWFnZVNyYzogYCR7cGF0aE5hbWV9L3NwZWFrZXItY29tcG9uZW50LTE1MzAucG5nYCxcclxuICAgICAgbmFtZTogXCJUYW1hcmEgQmFrZXJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltYWdlU3JjOiBgJHtwYXRoTmFtZX0vc3BlYWtlci1jb21wb25lbnQtMTA4MDMucG5nYCxcclxuICAgICAgbmFtZTogXCJFdWdlbmUgQ2h1dnlyb3ZcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltYWdlU3JjOiBgJHtwYXRoTmFtZX0vc3BlYWtlci1jb21wb25lbnQtMTEyNC5wbmdgLFxyXG4gICAgICBuYW1lOiBcIkRvdWdsYXMgQ3JvY2tmb3JkXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIHJldHVybiA8Q29tcG9uZW50IHNwZWFrZXJzPXtzcGVha2Vyc30+PC9Db21wb25lbnQ+XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=