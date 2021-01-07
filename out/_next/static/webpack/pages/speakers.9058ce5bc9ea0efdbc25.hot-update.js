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
/* harmony import */ var _Speaker_Speaker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Speaker/Speaker */ "./src/components/Speaker/Speaker.js");
/* harmony import */ var _SpeakersSearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SpeakersSearchBar/SearchBar */ "./src/components/SpeakersSearchBar/SearchBar.js");



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

  var specialMessage = "";

  if (status.includes("loading")) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "spinner"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 12
    }, _this);
  }

  if (status === S) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: ["An error occured. Is json-server running? (try 'npm run json-server' at terminal prompt)", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 25
      }, _this), " ", "ERROR MESSAGE: ".concat(error)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_SpeakersSearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_5__["SearchBar"], {
      searchQuery: searchQuery,
      setSearchQuery: setSearchQuery
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, _this), specialMessage && specialMessage.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "bg-yellow-300 border-l-8 border-yellow-500 text-black-700 p-4 text-2xl",
      role: "alert",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        className: "font-bold",
        children: "Special Message"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        children: specialMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12",
      children: speakers.filter(function (_ref) {
        var firstName = _ref.firstName,
            lastName = _ref.lastName;
        var targetString = "".concat(firstName, " ").concat(lastName).toLowerCase();
        return !searchQuery.trim() ? true : targetString.includes(searchQuery.trim().toLowerCase());
      }).map(function (speaker) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Speaker_Speaker__WEBPACK_IMPORTED_MODULE_4__["Speaker"], _objectSpread(_objectSpread({}, speaker), {}, {
          put: put
        }), speaker.id, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, _this);
};

_s(SpeakersComponent, "0Z9MS6wGwwRo8neQ7M3Utw5hXxA=");

_c = SpeakersComponent;

var Speakers = function Speakers(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_contexts_DataContext__WEBPACK_IMPORTED_MODULE_3__["DataProvider"], {
    baseURL: "https://my-json-server.typicode.com",
    route: "damdlani/svcc-speakers-list-react/speakers",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(SpeakersComponent, _objectSpread({}, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 66,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvU3BlYWtlcnMuanMiXSwibmFtZXMiOlsiU3BlYWtlcnNDb21wb25lbnQiLCJ1c2VTdGF0ZSIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJzcGVha2VycyIsInJlY29yZHMiLCJzdGF0dXMiLCJlcnJvciIsInB1dCIsInNwZWNpYWxNZXNzYWdlIiwiaW5jbHVkZXMiLCJTIiwibGVuZ3RoIiwiZmlsdGVyIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJ0YXJnZXRTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInRyaW0iLCJtYXAiLCJzcGVha2VyIiwiaWQiLCJTcGVha2VycyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFBQTs7QUFBQSxrQkFDUUMsc0RBQVEsQ0FBQyxFQUFELENBRGhCO0FBQUEsTUFDdkJDLFdBRHVCO0FBQUEsTUFDVkMsY0FEVTs7QUFBQSxvQkFRMUJDLHdEQUFVLENBQUNDLGlFQUFELENBUmdCO0FBQUEsTUFJbkJDLFFBSm1CLGVBSTVCQyxPQUo0QjtBQUFBLE1BSzVCQyxNQUw0QixlQUs1QkEsTUFMNEI7QUFBQSxNQU01QkMsS0FONEIsZUFNNUJBLEtBTjRCO0FBQUEsTUFPNUJDLEdBUDRCLGVBTzVCQSxHQVA0Qjs7QUFVOUIsTUFBTUMsY0FBYyxHQUFHLEVBQXZCOztBQUVBLE1BQUlILE1BQU0sQ0FBQ0ksUUFBUCxDQUFnQixTQUFoQixDQUFKLEVBQWdDO0FBQzlCLHdCQUFPO0FBQUssZUFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0Q7O0FBRUQsTUFBSUosTUFBTSxLQUFLSyxDQUFmLEVBQWtCO0FBQ2hCLHdCQUNFO0FBQUEsMEhBRWtCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGbEIsZ0NBRStDSixLQUYvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQU1EOztBQUVELHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsc0VBQUQ7QUFBVyxpQkFBVyxFQUFFUCxXQUF4QjtBQUFxQyxvQkFBYyxFQUFFQztBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFR1EsY0FBYyxJQUFJQSxjQUFjLENBQUNHLE1BQWYsR0FBd0IsQ0FBMUMsaUJBQ0M7QUFDRSxlQUFTLEVBQUMsd0VBRFo7QUFFRSxVQUFJLEVBQUMsT0FGUDtBQUFBLDhCQUlFO0FBQUcsaUJBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsZUFLRTtBQUFBLGtCQUFJSDtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixlQVlFO0FBQUssZUFBUyxFQUFDLHVEQUFmO0FBQUEsZ0JBQ0dMLFFBQVEsQ0FDTlMsTUFERixDQUNTLGdCQUE2QjtBQUFBLFlBQTFCQyxTQUEwQixRQUExQkEsU0FBMEI7QUFBQSxZQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDbkMsWUFBTUMsWUFBWSxHQUFHLFVBQUdGLFNBQUgsY0FBZ0JDLFFBQWhCLEVBQTJCRSxXQUEzQixFQUFyQjtBQUNBLGVBQU8sQ0FBQ2pCLFdBQVcsQ0FBQ2tCLElBQVosRUFBRCxHQUNILElBREcsR0FFSEYsWUFBWSxDQUFDTixRQUFiLENBQXNCVixXQUFXLENBQUNrQixJQUFaLEdBQW1CRCxXQUFuQixFQUF0QixDQUZKO0FBR0QsT0FORixFQU9FRSxHQVBGLENBT00sVUFBQ0MsT0FBRDtBQUFBLDRCQUNILHFFQUFDLHdEQUFELGtDQUVNQSxPQUZOO0FBR0UsYUFBRyxFQUFFWjtBQUhQLFlBQ09ZLE9BQU8sQ0FBQ0MsRUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURHO0FBQUEsT0FQTjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQStCRCxDQXhERDs7R0FBTXZCLGlCOztLQUFBQSxpQjs7QUEwRE4sSUFBTXdCLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUMxQixzQkFDRSxxRUFBQyxrRUFBRDtBQUFjLFdBQU8sRUFBQyxxQ0FBdEI7QUFBNEQsU0FBSyxFQUFDLDRDQUFsRTtBQUFBLDJCQUNFLHFFQUFDLGlCQUFELG9CQUF1QkEsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBTkQ7O01BQU1ELFE7QUFRU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuOTA1OGNlNWJjOWVhMGVmZGJjMjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCwgRGF0YVByb3ZpZGVyIH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL0RhdGFDb250ZXh0XCI7XHJcbmltcG9ydCB7IFNwZWFrZXIgfSBmcm9tIFwiLi4vU3BlYWtlci9TcGVha2VyXCI7XHJcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gXCIuLi9TcGVha2Vyc1NlYXJjaEJhci9TZWFyY2hCYXJcIjtcclxuXHJcbmNvbnN0IFNwZWFrZXJzQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHJlY29yZHM6IHNwZWFrZXJzLFxyXG4gICAgc3RhdHVzLFxyXG4gICAgZXJyb3IsXHJcbiAgICBwdXQsXHJcbiAgfSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpO1xyXG5cclxuICBjb25zdCBzcGVjaWFsTWVzc2FnZSA9IFwiXCI7XHJcblxyXG4gIGlmIChzdGF0dXMuaW5jbHVkZXMoXCJsb2FkaW5nXCIpKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyXCIgLz47XHJcbiAgfVxyXG5cclxuICBpZiAoc3RhdHVzID09PSBTKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIEFuIGVycm9yIG9jY3VyZWQuIElzIGpzb24tc2VydmVyIHJ1bm5pbmc/ICh0cnkgJ25wbSBydW4ganNvbi1zZXJ2ZXInIGF0XHJcbiAgICAgICAgdGVybWluYWwgcHJvbXB0KTxicj48L2JyPiB7YEVSUk9SIE1FU1NBR0U6ICR7ZXJyb3J9YH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8U2VhcmNoQmFyIHNlYXJjaFF1ZXJ5PXtzZWFyY2hRdWVyeX0gc2V0U2VhcmNoUXVlcnk9e3NldFNlYXJjaFF1ZXJ5fSAvPlxyXG4gICAgICB7c3BlY2lhbE1lc3NhZ2UgJiYgc3BlY2lhbE1lc3NhZ2UubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmcteWVsbG93LTMwMCBib3JkZXItbC04IGJvcmRlci15ZWxsb3ctNTAwIHRleHQtYmxhY2stNzAwIHAtNCB0ZXh0LTJ4bFwiXHJcbiAgICAgICAgICByb2xlPVwiYWxlcnRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlNwZWNpYWwgTWVzc2FnZTwvcD5cclxuICAgICAgICAgIDxwPntzcGVjaWFsTWVzc2FnZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ3JpZC1jb2xzLTEgZ2FwLTEyXCI+XHJcbiAgICAgICAge3NwZWFrZXJzXHJcbiAgICAgICAgICAuZmlsdGVyKCh7IGZpcnN0TmFtZSwgbGFzdE5hbWUgfSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRTdHJpbmcgPSBgJHtmaXJzdE5hbWV9ICR7bGFzdE5hbWV9YC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gIXNlYXJjaFF1ZXJ5LnRyaW0oKVxyXG4gICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgIDogdGFyZ2V0U3RyaW5nLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRyaW0oKS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAubWFwKChzcGVha2VyKSA9PiAoXHJcbiAgICAgICAgICAgIDxTcGVha2VyXHJcbiAgICAgICAgICAgICAga2V5PXtzcGVha2VyLmlkfVxyXG4gICAgICAgICAgICAgIHsuLi5zcGVha2VyfVxyXG4gICAgICAgICAgICAgIHB1dD17cHV0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTcGVha2VycyA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RGF0YVByb3ZpZGVyIGJhc2VVUkw9XCJodHRwczovL215LWpzb24tc2VydmVyLnR5cGljb2RlLmNvbVwiIHJvdXRlPVwiZGFtZGxhbmkvc3ZjYy1zcGVha2Vycy1saXN0LXJlYWN0L3NwZWFrZXJzXCI+XHJcbiAgICAgIDxTcGVha2Vyc0NvbXBvbmVudCB7Li4ucHJvcHN9Lz5cclxuICAgIDwvRGF0YVByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2VycztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==