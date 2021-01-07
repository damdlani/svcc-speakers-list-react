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

  if (status === STA) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvU3BlYWtlcnMuanMiXSwibmFtZXMiOlsiU3BlYWtlcnNDb21wb25lbnQiLCJ1c2VTdGF0ZSIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJzcGVha2VycyIsInJlY29yZHMiLCJzdGF0dXMiLCJlcnJvciIsInB1dCIsInNwZWNpYWxNZXNzYWdlIiwiaW5jbHVkZXMiLCJTVEEiLCJsZW5ndGgiLCJmaWx0ZXIiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInRhcmdldFN0cmluZyIsInRvTG93ZXJDYXNlIiwidHJpbSIsIm1hcCIsInNwZWFrZXIiLCJpZCIsIlNwZWFrZXJzIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUFBOztBQUFBLGtCQUNRQyxzREFBUSxDQUFDLEVBQUQsQ0FEaEI7QUFBQSxNQUN2QkMsV0FEdUI7QUFBQSxNQUNWQyxjQURVOztBQUFBLG9CQVExQkMsd0RBQVUsQ0FBQ0MsaUVBQUQsQ0FSZ0I7QUFBQSxNQUluQkMsUUFKbUIsZUFJNUJDLE9BSjRCO0FBQUEsTUFLNUJDLE1BTDRCLGVBSzVCQSxNQUw0QjtBQUFBLE1BTTVCQyxLQU40QixlQU01QkEsS0FONEI7QUFBQSxNQU81QkMsR0FQNEIsZUFPNUJBLEdBUDRCOztBQVU5QixNQUFNQyxjQUFjLEdBQUcsRUFBdkI7O0FBRUEsTUFBSUgsTUFBTSxDQUFDSSxRQUFQLENBQWdCLFNBQWhCLENBQUosRUFBZ0M7QUFDOUIsd0JBQU87QUFBSyxlQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDs7QUFFRCxNQUFJSixNQUFNLEtBQUtLLEdBQWYsRUFBb0I7QUFDbEIsd0JBQ0U7QUFBQSwwSEFFa0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZsQixnQ0FFK0NKLEtBRi9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBTUQ7O0FBRUQsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxzRUFBRDtBQUFXLGlCQUFXLEVBQUVQLFdBQXhCO0FBQXFDLG9CQUFjLEVBQUVDO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVHUSxjQUFjLElBQUlBLGNBQWMsQ0FBQ0csTUFBZixHQUF3QixDQUExQyxpQkFDQztBQUNFLGVBQVMsRUFBQyx3RUFEWjtBQUVFLFVBQUksRUFBQyxPQUZQO0FBQUEsOEJBSUU7QUFBRyxpQkFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQUtFO0FBQUEsa0JBQUlIO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKLGVBWUU7QUFBSyxlQUFTLEVBQUMsdURBQWY7QUFBQSxnQkFDR0wsUUFBUSxDQUNOUyxNQURGLENBQ1MsZ0JBQTZCO0FBQUEsWUFBMUJDLFNBQTBCLFFBQTFCQSxTQUEwQjtBQUFBLFlBQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUNuQyxZQUFNQyxZQUFZLEdBQUcsVUFBR0YsU0FBSCxjQUFnQkMsUUFBaEIsRUFBMkJFLFdBQTNCLEVBQXJCO0FBQ0EsZUFBTyxDQUFDakIsV0FBVyxDQUFDa0IsSUFBWixFQUFELEdBQ0gsSUFERyxHQUVIRixZQUFZLENBQUNOLFFBQWIsQ0FBc0JWLFdBQVcsQ0FBQ2tCLElBQVosR0FBbUJELFdBQW5CLEVBQXRCLENBRko7QUFHRCxPQU5GLEVBT0VFLEdBUEYsQ0FPTSxVQUFDQyxPQUFEO0FBQUEsNEJBQ0gscUVBQUMsd0RBQUQsa0NBRU1BLE9BRk47QUFHRSxhQUFHLEVBQUVaO0FBSFAsWUFDT1ksT0FBTyxDQUFDQyxFQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREc7QUFBQSxPQVBOO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0JELENBeEREOztHQUFNdkIsaUI7O0tBQUFBLGlCOztBQTBETixJQUFNd0IsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQzFCLHNCQUNFLHFFQUFDLGtFQUFEO0FBQWMsV0FBTyxFQUFDLHFDQUF0QjtBQUE0RCxTQUFLLEVBQUMsNENBQWxFO0FBQUEsMkJBQ0UscUVBQUMsaUJBQUQsb0JBQXVCQSxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FORDs7TUFBTUQsUTtBQVFTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zcGVha2Vycy4zY2E5MDYyMTA1OGEzODMyNTFmYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IERhdGFDb250ZXh0LCBEYXRhUHJvdmlkZXIgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvRGF0YUNvbnRleHRcIjtcclxuaW1wb3J0IHsgU3BlYWtlciB9IGZyb20gXCIuLi9TcGVha2VyL1NwZWFrZXJcIjtcclxuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcIi4uL1NwZWFrZXJzU2VhcmNoQmFyL1NlYXJjaEJhclwiO1xyXG5cclxuY29uc3QgU3BlYWtlcnNDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgcmVjb3Jkczogc3BlYWtlcnMsXHJcbiAgICBzdGF0dXMsXHJcbiAgICBlcnJvcixcclxuICAgIHB1dCxcclxuICB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IHNwZWNpYWxNZXNzYWdlID0gXCJcIjtcclxuXHJcbiAgaWYgKHN0YXR1cy5pbmNsdWRlcyhcImxvYWRpbmdcIikpIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXJcIiAvPjtcclxuICB9XHJcblxyXG4gIGlmIChzdGF0dXMgPT09IFNUQSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICBBbiBlcnJvciBvY2N1cmVkLiBJcyBqc29uLXNlcnZlciBydW5uaW5nPyAodHJ5ICducG0gcnVuIGpzb24tc2VydmVyJyBhdFxyXG4gICAgICAgIHRlcm1pbmFsIHByb21wdCk8YnI+PC9icj4ge2BFUlJPUiBNRVNTQUdFOiAke2Vycm9yfWB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPFNlYXJjaEJhciBzZWFyY2hRdWVyeT17c2VhcmNoUXVlcnl9IHNldFNlYXJjaFF1ZXJ5PXtzZXRTZWFyY2hRdWVyeX0gLz5cclxuICAgICAge3NwZWNpYWxNZXNzYWdlICYmIHNwZWNpYWxNZXNzYWdlLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXllbGxvdy0zMDAgYm9yZGVyLWwtOCBib3JkZXIteWVsbG93LTUwMCB0ZXh0LWJsYWNrLTcwMCBwLTQgdGV4dC0yeGxcIlxyXG4gICAgICAgICAgcm9sZT1cImFsZXJ0XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5TcGVjaWFsIE1lc3NhZ2U8L3A+XHJcbiAgICAgICAgICA8cD57c3BlY2lhbE1lc3NhZ2V9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdyaWQtY29scy0xIGdhcC0xMlwiPlxyXG4gICAgICAgIHtzcGVha2Vyc1xyXG4gICAgICAgICAgLmZpbHRlcigoeyBmaXJzdE5hbWUsIGxhc3ROYW1lIH0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0U3RyaW5nID0gYCR7Zmlyc3ROYW1lfSAke2xhc3ROYW1lfWAudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuICFzZWFyY2hRdWVyeS50cmltKClcclxuICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICA6IHRhcmdldFN0cmluZy5pbmNsdWRlcyhzZWFyY2hRdWVyeS50cmltKCkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLm1hcCgoc3BlYWtlcikgPT4gKFxyXG4gICAgICAgICAgICA8U3BlYWtlclxyXG4gICAgICAgICAgICAgIGtleT17c3BlYWtlci5pZH1cclxuICAgICAgICAgICAgICB7Li4uc3BlYWtlcn1cclxuICAgICAgICAgICAgICBwdXQ9e3B1dH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU3BlYWtlcnMgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPERhdGFQcm92aWRlciBiYXNlVVJMPVwiaHR0cHM6Ly9teS1qc29uLXNlcnZlci50eXBpY29kZS5jb21cIiByb3V0ZT1cImRhbWRsYW5pL3N2Y2Mtc3BlYWtlcnMtbGlzdC1yZWFjdC9zcGVha2Vyc1wiPlxyXG4gICAgICA8U3BlYWtlcnNDb21wb25lbnQgey4uLnByb3BzfS8+XHJcbiAgICA8L0RhdGFQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=