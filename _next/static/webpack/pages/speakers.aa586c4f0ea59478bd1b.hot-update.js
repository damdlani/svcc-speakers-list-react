webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/components/Speakers/Speakers.js":
/*!*********************************************!*\
  !*** ./src/components/Speakers/Speakers.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_DataContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/DataContext */ "./src/contexts/DataContext.js");
/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/ThemeContext */ "./src/contexts/ThemeContext.js");
/* harmony import */ var _reducers_requestReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers/requestReducer */ "./src/reducers/requestReducer.js");
/* harmony import */ var _Speaker_Speaker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Speaker/Speaker */ "./src/components/Speaker/Speaker.js");
/* harmony import */ var _SpeakersSearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SpeakersSearchBar/SearchBar */ "./src/components/SpeakersSearchBar/SearchBar.js");



var _jsxFileName = "C:\\dev\\Speakers\\src\\components\\Speakers\\Speakers.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var SpeakersComponent = function SpeakersComponent() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      searchQuery = _useState[0],
      setSearchQuery = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_DataContext__WEBPACK_IMPORTED_MODULE_3__["DataContext"]),
      speakers = _useContext.records,
      status = _useContext.status,
      error = _useContext.error,
      put = _useContext.put;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_4__["ThemeContext"]),
      theme = _useContext2.theme;

  console.log(typeof ternaryTheme);
  var specialMessage = "";

  if (status === _reducers_requestReducer__WEBPACK_IMPORTED_MODULE_5__["REQUEST_STATUS"].loading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "spinner"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 12
    }, _this);
  }

  if (status === _reducers_requestReducer__WEBPACK_IMPORTED_MODULE_5__["REQUEST_STATUS"].error) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: ternaryTheme,
      children: ["An error occured. Check your internet connection and try again", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 71
      }, _this), " ", "ERROR MESSAGE: ".concat(error)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_SpeakersSearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_7__["SearchBar"], {
      searchQuery: searchQuery,
      setSearchQuery: setSearchQuery
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this), specialMessage && specialMessage.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "bg-yellow-300 border-l-8 border-yellow-500 text-black-700 p-4 text-2xl",
      role: "alert",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        className: "font-bold",
        children: "Special Message"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        children: specialMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12",
      children: speakers.filter(function (_ref) {
        var firstName = _ref.firstName,
            lastName = _ref.lastName;
        var targetString = "".concat(firstName, " ").concat(lastName).toLowerCase();
        return !searchQuery.trim() ? true : targetString.includes(searchQuery.trim().toLowerCase());
      }).map(function (speaker) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Speaker_Speaker__WEBPACK_IMPORTED_MODULE_6__["Speaker"], _objectSpread(_objectSpread({}, speaker), {}, {
          put: put
        }), speaker.id, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, _this);
};

_s(SpeakersComponent, "uy3Y/JiSrxw/YRRauvhhZuLOzqs=");

_c = SpeakersComponent;

var Speakers = function Speakers(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_contexts_DataContext__WEBPACK_IMPORTED_MODULE_3__["DataProvider"], {
    baseURL: "https://my-json-server.typicode.com",
    route: "damdlani/svcc-speaksers-list-react/speakers",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(SpeakersComponent, _objectSpread({}, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, _this);
};

_c2 = Speakers;
/* harmony default export */ __webpack_exports__["default"] = (Speakers);

var _c, _c2;

$RefreshReg$(_c, "SpeakersComponent");
$RefreshReg$(_c2, "Speakers");

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

/***/ "./src/contexts/ThemeContext.js":
/*!**************************************!*\
  !*** ./src/contexts/ThemeContext.js ***!
  \**************************************/
/*! exports provided: ThemeContext, ThemeProvider, ThemeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
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
    lineNumber: 15,
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

/***/ }),

/***/ "./src/hooks/useTheme.js":
/*!*******************************!*\
  !*** ./src/hooks/useTheme.js ***!
  \*******************************/
/*! exports provided: useTheme, ternaryTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return useTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ternaryTheme", function() { return ternaryTheme; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/ThemeContext */ "./src/contexts/ThemeContext.js");
var _s = $RefreshSig$();



var useTheme = function useTheme(startingTheme) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(startingTheme),
      theme = _useState[0],
      setTheme = _useState[1];

  return {
    theme: theme,
    toggleTheme: function toggleTheme() {
      if (theme === _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_1__["ThemeList"].LIGHT) {
        setTheme(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_1__["ThemeList"].DARK);
      } else {
        setTheme(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_1__["ThemeList"].LIGHT);
      }
    }
  };
};

_s(useTheme, "7D3nJYxe783JeXHORkFR9pg9dCU=");

var ternaryTheme = "".concat(theme === _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_1__["ThemeList"].DARK ? "text-white" : "text-black");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvU3BlYWtlcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0cy9UaGVtZUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy91c2VUaGVtZS5qcyJdLCJuYW1lcyI6WyJTcGVha2Vyc0NvbXBvbmVudCIsInVzZVN0YXRlIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsInVzZUNvbnRleHQiLCJEYXRhQ29udGV4dCIsInNwZWFrZXJzIiwicmVjb3JkcyIsInN0YXR1cyIsImVycm9yIiwicHV0IiwiVGhlbWVDb250ZXh0IiwidGhlbWUiLCJjb25zb2xlIiwibG9nIiwidGVybmFyeVRoZW1lIiwic3BlY2lhbE1lc3NhZ2UiLCJSRVFVRVNUX1NUQVRVUyIsImxvYWRpbmciLCJsZW5ndGgiLCJmaWx0ZXIiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInRhcmdldFN0cmluZyIsInRvTG93ZXJDYXNlIiwidHJpbSIsImluY2x1ZGVzIiwibWFwIiwic3BlYWtlciIsImlkIiwiU3BlYWtlcnMiLCJwcm9wcyIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIlRoZW1lTGlzdCIsIkxJR0hUIiwiREFSSyIsIlRoZW1lUHJvdmlkZXIiLCJjaGlsZHJlbiIsInN0YXJ0aW5nVGhlbWUiLCJzdGF0ZSIsInVzZVRoZW1lIiwic2V0VGhlbWUiLCJ0b2dnbGVUaGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsRUFBRCxDQURoQjtBQUFBLE1BQ3ZCQyxXQUR1QjtBQUFBLE1BQ1ZDLGNBRFU7O0FBQUEsb0JBUTFCQyx3REFBVSxDQUFDQyxpRUFBRCxD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QixnRUFBUyxDQUFDRSxJQUFwQixHQUEyQixZQUEzQixHQUEwQyxZQUFoRCxDQUFsQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zcGVha2Vycy5hYTU4NmM0ZjBlYTU5NDc4YmQxYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IERhdGFDb250ZXh0LCBEYXRhUHJvdmlkZXIgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvRGF0YUNvbnRleHRcIjtcclxuaW1wb3J0IHsgXHJcbiAgVGhlbWVDb250ZXh0LCBUaGVtZUxpc3QgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvVGhlbWVDb250ZXh0XCI7XHJcbmltcG9ydCB7IFJFUVVFU1RfU1RBVFVTIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzL3JlcXVlc3RSZWR1Y2VyXCI7XHJcbmltcG9ydCB7IFNwZWFrZXIgfSBmcm9tIFwiLi4vU3BlYWtlci9TcGVha2VyXCI7XHJcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gXCIuLi9TcGVha2Vyc1NlYXJjaEJhci9TZWFyY2hCYXJcIjtcclxuXHJcbmNvbnN0IFNwZWFrZXJzQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHJlY29yZHM6IHNwZWFrZXJzLFxyXG4gICAgc3RhdHVzLFxyXG4gICAgZXJyb3IsXHJcbiAgICBwdXQsXHJcbiAgfSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpO1xyXG4gIGNvbnN0IHsgdGhlbWUgfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcclxuY29uc29sZS5sb2codHlwZW9mIHRlcm5hcnlUaGVtZSlcclxuICBjb25zdCBzcGVjaWFsTWVzc2FnZSA9IFwiXCI7XHJcblxyXG4gIGlmIChzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLmxvYWRpbmcgKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyXCIgLz47XHJcbiAgfVxyXG5cclxuICBpZiAoc3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5lcnJvcikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Rlcm5hcnlUaGVtZX0+XHJcbiAgICAgICAgQW4gZXJyb3Igb2NjdXJlZC4gQ2hlY2sgeW91ciBpbnRlcm5ldCBjb25uZWN0aW9uIGFuZCB0cnkgYWdhaW48YnI+PC9icj4ge2BFUlJPUiBNRVNTQUdFOiAke2Vycm9yfWB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPFNlYXJjaEJhciBzZWFyY2hRdWVyeT17c2VhcmNoUXVlcnl9IHNldFNlYXJjaFF1ZXJ5PXtzZXRTZWFyY2hRdWVyeX0gLz5cclxuICAgICAge3NwZWNpYWxNZXNzYWdlICYmIHNwZWNpYWxNZXNzYWdlLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXllbGxvdy0zMDAgYm9yZGVyLWwtOCBib3JkZXIteWVsbG93LTUwMCB0ZXh0LWJsYWNrLTcwMCBwLTQgdGV4dC0yeGxcIlxyXG4gICAgICAgICAgcm9sZT1cImFsZXJ0XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5TcGVjaWFsIE1lc3NhZ2U8L3A+XHJcbiAgICAgICAgICA8cD57c3BlY2lhbE1lc3NhZ2V9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdyaWQtY29scy0xIGdhcC0xMlwiPlxyXG4gICAgICAgIHtzcGVha2Vyc1xyXG4gICAgICAgICAgLmZpbHRlcigoeyBmaXJzdE5hbWUsIGxhc3ROYW1lIH0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0U3RyaW5nID0gYCR7Zmlyc3ROYW1lfSAke2xhc3ROYW1lfWAudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuICFzZWFyY2hRdWVyeS50cmltKClcclxuICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICA6IHRhcmdldFN0cmluZy5pbmNsdWRlcyhzZWFyY2hRdWVyeS50cmltKCkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLm1hcCgoc3BlYWtlcikgPT4gKFxyXG4gICAgICAgICAgICA8U3BlYWtlclxyXG4gICAgICAgICAgICAgIGtleT17c3BlYWtlci5pZH1cclxuICAgICAgICAgICAgICB7Li4uc3BlYWtlcn1cclxuICAgICAgICAgICAgICBwdXQ9e3B1dH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU3BlYWtlcnMgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPERhdGFQcm92aWRlciBiYXNlVVJMPVwiaHR0cHM6Ly9teS1qc29uLXNlcnZlci50eXBpY29kZS5jb21cIiByb3V0ZT1cImRhbWRsYW5pL3N2Y2Mtc3BlYWtzZXJzLWxpc3QtcmVhY3Qvc3BlYWtlcnNcIj5cclxuICAgICAgPFNwZWFrZXJzQ29tcG9uZW50IHsuLi5wcm9wc30vPlxyXG4gICAgPC9EYXRhUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVRoZW1lXCI7XHJcblxyXG5jb25zdCBUaGVtZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmNvbnN0IFRoZW1lTGlzdCA9IHtcclxuICBMSUdIVDogXCJsaWdodFwiLFxyXG4gIERBUks6IFwiZGFya1wiLFxyXG59O1xyXG5cclxuY29uc3QgVGhlbWVQcm92aWRlciA9ICh7IGNoaWxkcmVuLCBzdGFydGluZ1RoZW1lIH0pID0+IHtcclxuICBjb25zdCBzdGF0ZSA9IHVzZVRoZW1lKHN0YXJ0aW5nVGhlbWUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PntjaGlsZHJlbn08L1RoZW1lQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgVGhlbWVDb250ZXh0LCBUaGVtZVByb3ZpZGVyLCBUaGVtZUxpc3QgfTtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVGhlbWVMaXN0IH0gZnJvbSBcIi4uL2NvbnRleHRzL1RoZW1lQ29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVRoZW1lID0gKHN0YXJ0aW5nVGhlbWUpID0+IHtcclxuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKHN0YXJ0aW5nVGhlbWUpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdGhlbWU6IHRoZW1lLFxyXG4gICAgdG9nZ2xlVGhlbWU6ICgpID0+IHtcclxuICAgICAgaWYgKHRoZW1lID09PSBUaGVtZUxpc3QuTElHSFQpIHtcclxuICAgICAgICBzZXRUaGVtZShUaGVtZUxpc3QuREFSSyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0VGhlbWUoVGhlbWVMaXN0LkxJR0hUKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG5leHBvcnQgY29uc3QgdGVybmFyeVRoZW1lID0gYCR7dGhlbWUgPT09IFRoZW1lTGlzdC5EQVJLID8gXCJ0ZXh0LXdoaXRlXCIgOiBcInRleHQtYmxhY2tcIn1gO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9