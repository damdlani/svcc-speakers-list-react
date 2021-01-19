webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/contexts/ThemeContext.js":
/*!**************************************!*\
  !*** ./src/contexts/ThemeContext.js ***!
  \**************************************/
/*! exports provided: ternaryTheme, ThemeContext, ThemeProvider, ThemeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ternaryTheme", function() { return ternaryTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeList", function() { return ThemeList; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useTheme */ "./src/hooks/useTheme.js");


var _jsxFileName = "C:\\dev\\Speakers\\src\\contexts\\ThemeContext.js",
    _this = undefined,
    _s = $RefreshSig$();



var ThemeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({});
var ThemeList = {
  LIGHT: "light",
  DARK: "dark"
};
var ternaryTheme = theme === ThemeList.DARK ? "text-white" : "text-black";

var ThemeProvider = function ThemeProvider(_ref) {
  _s();

  var children = _ref.children,
      startingTheme = _ref.startingTheme;
  var state = Object(_hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__["useTheme"])(startingTheme);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ThemeContext.Provider, {
    value: state,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
};

_s(ThemeProvider, "Qw9ZwI+qSALy/No6JuJQGDL15Ww=", false, function () {
  return [_hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__["useTheme"]];
});

_c = ThemeProvider;


var _c;

$RefreshReg$(_c, "ThemeProvider");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1RoZW1lQ29udGV4dC5qcyJdLCJuYW1lcyI6WyJUaGVtZUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJUaGVtZUxpc3QiLCJMSUdIVCIsIkRBUksiLCJ0ZXJuYXJ5VGhlbWUiLCJ0aGVtZSIsIlRoZW1lUHJvdmlkZXIiLCJjaGlsZHJlbiIsInN0YXJ0aW5nVGhlbWUiLCJzdGF0ZSIsInVzZVRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLGdCQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEVBQXBCLENBQXJCO0FBRUEsSUFBTUMsU0FBUyxHQUFHO0FBQ2hCQyxPQUFLLEVBQUUsT0FEUztBQUVoQkMsTUFBSSxFQUFFO0FBRlUsQ0FBbEI7QUFJTyxJQUFNQyxZQUFZLEdBQUdDLEtBQUssS0FBS0osU0FBUyxDQUFDRSxJQUFwQixHQUEyQixZQUEzQixHQUEwQyxZQUEvRDs7QUFFUCxJQUFNRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWlDO0FBQUE7O0FBQUEsTUFBOUJDLFFBQThCLFFBQTlCQSxRQUE4QjtBQUFBLE1BQXBCQyxhQUFvQixRQUFwQkEsYUFBb0I7QUFDckQsTUFBTUMsS0FBSyxHQUFHQyxnRUFBUSxDQUFDRixhQUFELENBQXRCO0FBRUEsc0JBQ0UscUVBQUMsWUFBRCxDQUFjLFFBQWQ7QUFBdUIsU0FBSyxFQUFFQyxLQUE5QjtBQUFBLGNBQXNDRjtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFHRCxDQU5EOztHQUFNRCxhO1VBQ1VJLHdEOzs7S0FEVkosYTtBQVFOIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWFrZXJzLmI0YTJlYjM4MjdiYjI1NDhiZjgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVRoZW1lXCI7XHJcblxyXG5jb25zdCBUaGVtZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmNvbnN0IFRoZW1lTGlzdCA9IHtcclxuICBMSUdIVDogXCJsaWdodFwiLFxyXG4gIERBUks6IFwiZGFya1wiLFxyXG59O1xyXG5leHBvcnQgY29uc3QgdGVybmFyeVRoZW1lID0gdGhlbWUgPT09IFRoZW1lTGlzdC5EQVJLID8gXCJ0ZXh0LXdoaXRlXCIgOiBcInRleHQtYmxhY2tcIjtcclxuXHJcbmNvbnN0IFRoZW1lUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiwgc3RhcnRpbmdUaGVtZSB9KSA9PiB7XHJcbiAgY29uc3Qgc3RhdGUgPSB1c2VUaGVtZShzdGFydGluZ1RoZW1lKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT57Y2hpbGRyZW59PC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IFRoZW1lQ29udGV4dCwgVGhlbWVQcm92aWRlciwgVGhlbWVMaXN0IH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=