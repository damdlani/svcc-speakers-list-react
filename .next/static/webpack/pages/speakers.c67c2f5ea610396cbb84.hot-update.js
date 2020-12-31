webpackHotUpdate_N_E("pages/speakers",{

/***/ "./pages/speakers.js":
/*!***************************!*\
  !*** ./pages/speakers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Footer/Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var _src_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Header/Header */ "./src/components/Header/Header.js");
/* harmony import */ var _src_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Menu/Menu */ "./src/components/Menu/Menu.js");
/* harmony import */ var _src_components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/SearchBar/SearchBar */ "./src/components/SearchBar/SearchBar.js");
/* harmony import */ var _src_components_Speakers_Speakers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Speakers/Speakers */ "./src/components/Speakers/Speakers.js");
/* harmony import */ var _src_components_Speakers_SpeakersContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/Speakers/SpeakersContext */ "./src/components/Speakers/SpeakersContext.js");
/* harmony import */ var _src_components_Speakers_speakersData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/Speakers/speakersData */ "./src/components/Speakers/speakersData.js");


var _jsxFileName = "C:\\dev\\Speakers\\pages\\speakers.js",
    _this = undefined;









var Page = function Page() {
  //example of using context
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Speakers_SpeakersContext__WEBPACK_IMPORTED_MODULE_6__["SpeakersContext"].Provider, {
    value: _src_components_Speakers_speakersData__WEBPACK_IMPORTED_MODULE_7__["speakers"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__["Header"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_3__["Menu"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_4__["SearchBar"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__["Footer"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Speakers_Speakers__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, _this);
};

_c = Page;
/* harmony default export */ __webpack_exports__["default"] = (Page);

var _c;

$RefreshReg$(_c, "Page");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3BlYWtlcnMuanMiXSwibmFtZXMiOlsiUGFnZSIsInNwZWFrZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNqQjtBQUNBLHNCQUNFLHFFQUFDLHdGQUFELENBQWlCLFFBQWpCO0FBQTBCLFNBQUssRUFBRUMsOEVBQWpDO0FBQUEsMkJBQ0U7QUFBQSw4QkFDRSxxRUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRSxxRUFBQyw2RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFJRSxxRUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsZUFLRSxxRUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBV0QsQ0FiRDs7S0FBTUQsSTtBQWVTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zcGVha2Vycy5jNjdjMmY1ZWE2MTAzOTZjYmI4NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXJcIjtcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXJcIjtcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9NZW51L01lbnVcIjtcclxuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9TZWFyY2hCYXJcIjtcclxuaW1wb3J0IFNwZWFrZXJzIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9TcGVha2Vycy9TcGVha2Vyc1wiO1xyXG5pbXBvcnQgeyBTcGVha2Vyc0NvbnRleHQgfSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvU3BlYWtlcnNDb250ZXh0XCI7XHJcbmltcG9ydCB7IHNwZWFrZXJzIH0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzL3NwZWFrZXJzRGF0YVwiO1xyXG5cclxuY29uc3QgUGFnZSA9ICgpID0+IHtcclxuICAvL2V4YW1wbGUgb2YgdXNpbmcgY29udGV4dFxyXG4gIHJldHVybiAoXHJcbiAgICA8U3BlYWtlcnNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzcGVha2Vyc30+IFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8TWVudSAvPlxyXG4gICAgICAgIDxTZWFyY2hCYXIgLz5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPFNwZWFrZXJzIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9TcGVha2Vyc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=