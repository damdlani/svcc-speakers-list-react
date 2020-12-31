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

 // import { SpeakersContext } from "./SpeakersContext";

 //HOC
// import { SpeakersRenderProps } from "./SpeakersRenderProps"; //rendering props for children

var Speakers = function Speakers(_ref) {
  var speakers = _ref.speakers;
  // const speakers = useContext(SpeakersContext); //example of using context
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: speakers.map(function (_ref2) {
      var imageSrc = _ref2.imageSrc,
          name = _ref2.name;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: imageSrc,
        alt: name
      }, imageSrc, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, _this);
}; // example of RenderProps
// const Speakers = () => {
//   return (
//     <SpeakersRenderProps>
//       {({ speakers }) => {
//         return (
//           <div>
//             {speakers.map(({ imageSrc, name }) => (
//               <img src={imageSrc} alt={name} key={imageSrc} />
//             ))}
//           </div>
//         );
//       }}
//     </SpeakersRenderProps>
//   );
// };
// example of HOC use along with 'withDataHOC'


_c = Speakers;
var maxSpeakerToShow = 2;
/* harmony default export */ __webpack_exports__["default"] = (Object(_withDataHOC__WEBPACK_IMPORTED_MODULE_2__["withData"])(maxSpeakerToShow)(Speakers)); // export default Speakers;

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
/* harmony import */ var _speakersData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speakersData */ "./src/components/Speakers/speakersData.js");


var _jsxFileName = "C:\\dev\\Speakers\\src\\components\\Speakers\\withDataHOC.js",
    _this = undefined;


var withData = function withData(maxSpeakersToShow) {
  return function (Component) {
    return function () {
      var limitSpeakers = _speakersData__WEBPACK_IMPORTED_MODULE_1__["speakers"].slice(0, maxSpeakersToShow);
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, {
        speakers: limitSpeakers
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvU3BlYWtlcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzL3dpdGhEYXRhSE9DLmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJzIiwic3BlYWtlcnMiLCJtYXAiLCJpbWFnZVNyYyIsIm5hbWUiLCJtYXhTcGVha2VyVG9TaG93Iiwid2l0aERhdGEiLCJtYXhTcGVha2Vyc1RvU2hvdyIsIkNvbXBvbmVudCIsImxpbWl0U3BlYWtlcnMiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0NBQzBDO0FBQzFDOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWdCO0FBQUEsTUFBZEMsUUFBYyxRQUFkQSxRQUFjO0FBQy9CO0FBRUEsc0JBQ0U7QUFBQSxjQUNHQSxRQUFRLENBQUNDLEdBQVQsQ0FBYTtBQUFBLFVBQUdDLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFVBQWFDLElBQWIsU0FBYUEsSUFBYjtBQUFBLDBCQUNaO0FBQUssV0FBRyxFQUFFRCxRQUFWO0FBQW9CLFdBQUcsRUFBRUM7QUFBekIsU0FBb0NELFFBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEWTtBQUFBLEtBQWI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFPRCxDQVZELEMsQ0FZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7S0E3Qk1ILFE7QUE4Qk4sSUFBTUssZ0JBQWdCLEdBQUcsQ0FBekI7QUFDZUMsNEhBQVEsQ0FBQ0QsZ0JBQUQsQ0FBUixDQUEyQkwsUUFBM0IsQ0FBZixFLENBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBRU8sSUFBTU0sUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsaUJBQUQ7QUFBQSxTQUF1QixVQUFDQyxTQUFELEVBQWU7QUFHNUQsV0FBTyxZQUFNO0FBQ1gsVUFBTUMsYUFBYSxHQUFHUixzREFBUSxDQUFDUyxLQUFULENBQWUsQ0FBZixFQUFrQkgsaUJBQWxCLENBQXRCO0FBQ0EsMEJBQU8scUVBQUMsU0FBRDtBQUFXLGdCQUFRLEVBQUVFO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELEtBSEQ7QUFJRCxHQVB1QjtBQUFBLENBQWpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWFrZXJzLjFkZWQ0ZjM0NWMwMjBmZGU3OGU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgeyBTcGVha2Vyc0NvbnRleHQgfSBmcm9tIFwiLi9TcGVha2Vyc0NvbnRleHRcIjtcclxuaW1wb3J0IHsgd2l0aERhdGEgfSBmcm9tIFwiLi93aXRoRGF0YUhPQ1wiOyAvL0hPQ1xyXG4vLyBpbXBvcnQgeyBTcGVha2Vyc1JlbmRlclByb3BzIH0gZnJvbSBcIi4vU3BlYWtlcnNSZW5kZXJQcm9wc1wiOyAvL3JlbmRlcmluZyBwcm9wcyBmb3IgY2hpbGRyZW5cclxuXHJcbmNvbnN0IFNwZWFrZXJzID0gKHtzcGVha2Vyc30pID0+IHtcclxuICAvLyBjb25zdCBzcGVha2VycyA9IHVzZUNvbnRleHQoU3BlYWtlcnNDb250ZXh0KTsgLy9leGFtcGxlIG9mIHVzaW5nIGNvbnRleHRcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3NwZWFrZXJzLm1hcCgoeyBpbWFnZVNyYywgbmFtZSB9KSA9PiAoXHJcbiAgICAgICAgPGltZyBzcmM9e2ltYWdlU3JjfSBhbHQ9e25hbWV9IGtleT17aW1hZ2VTcmN9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIGV4YW1wbGUgb2YgUmVuZGVyUHJvcHNcclxuLy8gY29uc3QgU3BlYWtlcnMgPSAoKSA9PiB7XHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxTcGVha2Vyc1JlbmRlclByb3BzPlxyXG4vLyAgICAgICB7KHsgc3BlYWtlcnMgfSkgPT4ge1xyXG4vLyAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICA8ZGl2PlxyXG4vLyAgICAgICAgICAgICB7c3BlYWtlcnMubWFwKCh7IGltYWdlU3JjLCBuYW1lIH0pID0+IChcclxuLy8gICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VTcmN9IGFsdD17bmFtZX0ga2V5PXtpbWFnZVNyY30gLz5cclxuLy8gICAgICAgICAgICAgKSl9XHJcbi8vICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICApO1xyXG4vLyAgICAgICB9fVxyXG4vLyAgICAgPC9TcGVha2Vyc1JlbmRlclByb3BzPlxyXG4vLyAgICk7XHJcbi8vIH07XHJcblxyXG4vLyBleGFtcGxlIG9mIEhPQyB1c2UgYWxvbmcgd2l0aCAnd2l0aERhdGFIT0MnXHJcbmNvbnN0IG1heFNwZWFrZXJUb1Nob3cgPSAyO1xyXG5leHBvcnQgZGVmYXVsdCB3aXRoRGF0YShtYXhTcGVha2VyVG9TaG93KShTcGVha2Vycyk7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBTcGVha2VycztcclxuIiwiaW1wb3J0IHsgc3BlYWtlcnMgfSBmcm9tIFwiLi9zcGVha2Vyc0RhdGFcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB3aXRoRGF0YSA9IChtYXhTcGVha2Vyc1RvU2hvdykgPT4gKENvbXBvbmVudCkgPT4ge1xyXG5cclxuXHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgIGNvbnN0IGxpbWl0U3BlYWtlcnMgPSBzcGVha2Vycy5zbGljZSgwLCBtYXhTcGVha2Vyc1RvU2hvdyk7XHJcbiAgICByZXR1cm4gPENvbXBvbmVudCBzcGVha2Vycz17bGltaXRTcGVha2Vyc30+PC9Db21wb25lbnQ+XHJcbiAgfTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==