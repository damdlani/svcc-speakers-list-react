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
/* harmony import */ var _hooks_useTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useTheme */ "./src/hooks/useTheme.js");
/* harmony import */ var _reducers_requestReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers/requestReducer */ "./src/reducers/requestReducer.js");
/* harmony import */ var _Speaker_Speaker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Speaker/Speaker */ "./src/components/Speaker/Speaker.js");
/* harmony import */ var _SpeakersSearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SpeakersSearchBar/SearchBar */ "./src/components/SpeakersSearchBar/SearchBar.js");



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

  var specialMessage = "";

  if (status === _reducers_requestReducer__WEBPACK_IMPORTED_MODULE_6__["REQUEST_STATUS"].loading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "spinner"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 12
    }, _this);
  }

  if (status === _reducers_requestReducer__WEBPACK_IMPORTED_MODULE_6__["REQUEST_STATUS"].error) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "",
      children: ["An error occured. Check your internet connection and try again", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 71
      }, _this), " ", "ERROR MESSAGE: ".concat(error)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_SpeakersSearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_8__["SearchBar"], {
      searchQuery: searchQuery,
      setSearchQuery: setSearchQuery
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this), specialMessage && specialMessage.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "bg-yellow-300 border-l-8 border-yellow-500 text-black-700 p-4 text-2xl",
      role: "alert",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        className: "font-bold",
        children: "Special Message"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        children: specialMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12",
      children: speakers.filter(function (_ref) {
        var firstName = _ref.firstName,
            lastName = _ref.lastName;
        var targetString = "".concat(firstName, " ").concat(lastName).toLowerCase();
        return !searchQuery.trim() ? true : targetString.includes(searchQuery.trim().toLowerCase());
      }).map(function (speaker) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Speaker_Speaker__WEBPACK_IMPORTED_MODULE_7__["Speaker"], _objectSpread(_objectSpread({}, speaker), {}, {
          put: put
        }), speaker.id, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, _this);
};

_s(SpeakersComponent, "wuGsY7uAQZymCODEUHwL3cm0jyM=");

_c = SpeakersComponent;

var Speakers = function Speakers(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_contexts_DataContext__WEBPACK_IMPORTED_MODULE_3__["DataProvider"], {
    baseURL: "https://my-json-server.typicode.com",
    route: "damdlani/svcc-speaksers-list-react/speakers",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(SpeakersComponent, _objectSpread({}, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
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

/***/ "./src/hooks/useTheme.js":
/*!*******************************!*\
  !*** ./src/hooks/useTheme.js ***!
  \*******************************/
/*! exports provided: useTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return useTheme; });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvU3BlYWtlcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy91c2VUaGVtZS5qcyJdLCJuYW1lcyI6WyJTcGVha2Vyc0NvbXBvbmVudCIsInVzZVN0YXRlIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsInVzZUNvbnRleHQiLCJEYXRhQ29udGV4dCIsInNwZWFrZXJzIiwicmVjb3JkcyIsInN0YXR1cyIsImVycm9yIiwicHV0IiwiVGhlbWVDb250ZXh0IiwidGhlbWUiLCJzcGVjaWFsTWVzc2FnZSIsIlJFUVVFU1RfU1RBVFVTIiwibG9hZGluZyIsImxlbmd0aCIsImZpbHRlciIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwidGFyZ2V0U3RyaW5nIiwidG9Mb3dlckNhc2UiLCJ0cmltIiwiaW5jbHVkZXMiLCJtYXAiLCJzcGVha2VyIiwiaWQiLCJTcGVha2VycyIsInByb3BzIiwidXNlVGhlbWUiLCJzdGFydGluZ1RoZW1lIiwic2V0VGhlbWUiLCJ0b2dnbGVUaGVtZSIsIlRoZW1lTGlzdCIsIkxJR0hUIiwiREFSSyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsRUFBRCxDQURoQjtBQUFBLE1BQ3ZCQyxXQUR1QjtBQUFBLE1BQ1ZDLGNBRFU7O0FBQUEsb0JBR29CQyx3REFBVSxDQUFDQyxpRUFBRCxDQUg5QjtBQUFBLE1BR2JDLFFBSGEsZUFHdEJDLE9BSHNCO0FBQUEsTUFHSEMsTUFIRyxlQUdIQSxNQUhHO0FBQUEsTUFHS0MsS0FITCxlQUdLQSxLQUhMO0FBQUEsTUFHWUMsR0FIWixlQUdZQSxHQUhaOztBQUFBLHFCQUlaTix3REFB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QUFLcUIsZ0VBQVMsQ0FBQ0MsS0FBeEIsRUFBK0I7QUFDN0JILGdCQUFRLENBQUNFLGdFQUFTLENBQUNFLElBQVgsQ0FBUjtBQUNELE9BRkQsTUFFTztBQUNMSixnQkFBUSxDQUFDRSxnRUFBUyxDQUFDQyxLQUFYLENBQVI7QUFDRDtBQUNGO0FBUkksR0FBUDtBQVVELENBYk07O0dBQU1MLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuYTIwMmVlYzFlODc4ZGZjYTU3ZjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCwgRGF0YVByb3ZpZGVyIH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL0RhdGFDb250ZXh0XCI7XHJcbmltcG9ydCB7IFRoZW1lQ29udGV4dCwgVGhlbWVMaXN0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL1RoZW1lQ29udGV4dFwiO1xyXG5pbXBvcnQgeyB0ZXJuYXJ5VGhlbWUgfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlVGhlbWVcIjtcclxuaW1wb3J0IHsgUkVRVUVTVF9TVEFUVVMgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvcmVxdWVzdFJlZHVjZXJcIjtcclxuaW1wb3J0IHsgU3BlYWtlciB9IGZyb20gXCIuLi9TcGVha2VyL1NwZWFrZXJcIjtcclxuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcIi4uL1NwZWFrZXJzU2VhcmNoQmFyL1NlYXJjaEJhclwiO1xyXG5cclxuY29uc3QgU3BlYWtlcnNDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgeyByZWNvcmRzOiBzcGVha2Vycywgc3RhdHVzLCBlcnJvciwgcHV0IH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuICBjb25zdCB7IHRoZW1lIH0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IHNwZWNpYWxNZXNzYWdlID0gXCJcIjtcclxuXHJcbiAgaWYgKHN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMubG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lclwiIC8+O1xyXG4gIH1cclxuXHJcbiAgaWYgKHN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuZXJyb3IpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgQW4gZXJyb3Igb2NjdXJlZC4gQ2hlY2sgeW91ciBpbnRlcm5ldCBjb25uZWN0aW9uIGFuZCB0cnkgYWdhaW48YnI+PC9icj57XCIgXCJ9XHJcbiAgICAgICAge2BFUlJPUiBNRVNTQUdFOiAke2Vycm9yfWB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPFNlYXJjaEJhciBzZWFyY2hRdWVyeT17c2VhcmNoUXVlcnl9IHNldFNlYXJjaFF1ZXJ5PXtzZXRTZWFyY2hRdWVyeX0gLz5cclxuICAgICAge3NwZWNpYWxNZXNzYWdlICYmIHNwZWNpYWxNZXNzYWdlLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXllbGxvdy0zMDAgYm9yZGVyLWwtOCBib3JkZXIteWVsbG93LTUwMCB0ZXh0LWJsYWNrLTcwMCBwLTQgdGV4dC0yeGxcIlxyXG4gICAgICAgICAgcm9sZT1cImFsZXJ0XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5TcGVjaWFsIE1lc3NhZ2U8L3A+XHJcbiAgICAgICAgICA8cD57c3BlY2lhbE1lc3NhZ2V9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdyaWQtY29scy0xIGdhcC0xMlwiPlxyXG4gICAgICAgIHtzcGVha2Vyc1xyXG4gICAgICAgICAgLmZpbHRlcigoeyBmaXJzdE5hbWUsIGxhc3ROYW1lIH0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0U3RyaW5nID0gYCR7Zmlyc3ROYW1lfSAke2xhc3ROYW1lfWAudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuICFzZWFyY2hRdWVyeS50cmltKClcclxuICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICA6IHRhcmdldFN0cmluZy5pbmNsdWRlcyhzZWFyY2hRdWVyeS50cmltKCkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLm1hcCgoc3BlYWtlcikgPT4gKFxyXG4gICAgICAgICAgICA8U3BlYWtlciBrZXk9e3NwZWFrZXIuaWR9IHsuLi5zcGVha2VyfSBwdXQ9e3B1dH0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU3BlYWtlcnMgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPERhdGFQcm92aWRlclxyXG4gICAgICBiYXNlVVJMPVwiaHR0cHM6Ly9teS1qc29uLXNlcnZlci50eXBpY29kZS5jb21cIlxyXG4gICAgICByb3V0ZT1cImRhbWRsYW5pL3N2Y2Mtc3BlYWtzZXJzLWxpc3QtcmVhY3Qvc3BlYWtlcnNcIlxyXG4gICAgPlxyXG4gICAgICA8U3BlYWtlcnNDb21wb25lbnQgey4uLnByb3BzfSAvPlxyXG4gICAgPC9EYXRhUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUaGVtZUxpc3QgfSBmcm9tIFwiLi4vY29udGV4dHMvVGhlbWVDb250ZXh0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlVGhlbWUgPSAoc3RhcnRpbmdUaGVtZSkgPT4ge1xyXG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoc3RhcnRpbmdUaGVtZSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0aGVtZTogdGhlbWUsXHJcbiAgICB0b2dnbGVUaGVtZTogKCkgPT4ge1xyXG4gICAgICBpZiAodGhlbWUgPT09IFRoZW1lTGlzdC5MSUdIVCkge1xyXG4gICAgICAgIHNldFRoZW1lKFRoZW1lTGlzdC5EQVJLKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRUaGVtZShUaGVtZUxpc3QuTElHSFQpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9