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
  // return (
  //   <SpeakersContext.Provider value={speakers}>
  //     <div>
  //       <Header />
  //       <Menu />
  //       <SearchBar />
  //       <Footer />
  //       <Speakers />
  //     </div>
  //   </SpeakersContext.Provider>
  // );
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__["Header"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_3__["Menu"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_4__["SearchBar"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__["Footer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Speakers_Speakers__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3BlYWtlcnMuanMiXSwibmFtZXMiOlsiUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSxxRUFBQyw2RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFJRSxxRUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUFLRSxxRUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFTRCxDQXRCRDs7S0FBTUEsSTtBQXdCU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuZWJjZGFiMDMzZjJlYTZhMDIwOWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvb3RlciB9IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyXCI7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyXCI7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvTWVudS9NZW51XCI7XHJcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIvU2VhcmNoQmFyXCI7XHJcbmltcG9ydCBTcGVha2VycyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvU3BlYWtlcnNcIjtcclxuaW1wb3J0IHsgU3BlYWtlcnNDb250ZXh0IH0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzL1NwZWFrZXJzQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBzcGVha2VycyB9IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9TcGVha2Vycy9zcGVha2Vyc0RhdGFcIjtcclxuXHJcbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XHJcbiAgLy9leGFtcGxlIG9mIHVzaW5nIGNvbnRleHRcclxuICAvLyByZXR1cm4gKFxyXG4gIC8vICAgPFNwZWFrZXJzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3BlYWtlcnN9PlxyXG4gIC8vICAgICA8ZGl2PlxyXG4gIC8vICAgICAgIDxIZWFkZXIgLz5cclxuICAvLyAgICAgICA8TWVudSAvPlxyXG4gIC8vICAgICAgIDxTZWFyY2hCYXIgLz5cclxuICAvLyAgICAgICA8Rm9vdGVyIC8+XHJcbiAgLy8gICAgICAgPFNwZWFrZXJzIC8+XHJcbiAgLy8gICAgIDwvZGl2PlxyXG4gIC8vICAgPC9TcGVha2Vyc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgLy8gKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8TWVudSAvPlxyXG4gICAgICA8U2VhcmNoQmFyIC8+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPFNwZWFrZXJzIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==