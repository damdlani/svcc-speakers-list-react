webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/components/Speakers/Speakers.js":
/*!*********************************************!*\
  !*** ./src/components/Speakers/Speakers.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SpeakersRenderProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeakersRenderProps */ "./src/components/Speakers/SpeakersRenderProps.js");
 // import { withData } from "./withData"; //HOC

 //rendering props for children
//example of RenderProps
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
//example of HOC use along with 'withDataHOC'
// const maxSpeakerToShow = 2;    
// export default withData(maxSpeakerToShow)(Speakers);

/* harmony default export */ __webpack_exports__["default"] = (Speakers);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvU3BlYWtlcnMuanMiXSwibmFtZXMiOlsiU3BlYWtlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUNBOztDQUM2RDtBQUc3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFZUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuZjVhZGY4ODg4NzIzY2UwNzM2M2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHsgd2l0aERhdGEgfSBmcm9tIFwiLi93aXRoRGF0YVwiOyAvL0hPQ1xyXG5pbXBvcnQgeyBTcGVha2Vyc1JlbmRlclByb3BzIH0gZnJvbSBcIi4vU3BlYWtlcnNSZW5kZXJQcm9wc1wiOyAvL3JlbmRlcmluZyBwcm9wcyBmb3IgY2hpbGRyZW5cclxuXHJcblxyXG4vL2V4YW1wbGUgb2YgUmVuZGVyUHJvcHNcclxuLy8gY29uc3QgU3BlYWtlcnMgPSAoKSA9PiB7XHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxTcGVha2Vyc1JlbmRlclByb3BzPlxyXG4vLyAgICAgICB7KHsgc3BlYWtlcnMgfSkgPT4ge1xyXG4vLyAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICA8ZGl2PlxyXG4vLyAgICAgICAgICAgICB7c3BlYWtlcnMubWFwKCh7IGltYWdlU3JjLCBuYW1lIH0pID0+IChcclxuLy8gICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VTcmN9IGFsdD17bmFtZX0ga2V5PXtpbWFnZVNyY30gLz5cclxuLy8gICAgICAgICAgICAgKSl9XHJcbi8vICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICApO1xyXG4vLyAgICAgICB9fVxyXG4vLyAgICAgPC9TcGVha2Vyc1JlbmRlclByb3BzPlxyXG4vLyAgICk7XHJcbi8vIH07XHJcblxyXG4vL2V4YW1wbGUgb2YgSE9DIHVzZSBhbG9uZyB3aXRoICd3aXRoRGF0YUhPQydcclxuLy8gY29uc3QgbWF4U3BlYWtlclRvU2hvdyA9IDI7ICAgIFxyXG4vLyBleHBvcnQgZGVmYXVsdCB3aXRoRGF0YShtYXhTcGVha2VyVG9TaG93KShTcGVha2Vycyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2VycztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==