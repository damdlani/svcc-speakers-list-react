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
 // import { withData } from "./withData"; //HOC
// import { SpeakersRenderProps } from "./SpeakersRenderProps"; //rendering props for children
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvU3BlYWtlcnMuanMiXSwibmFtZXMiOlsiU3BlYWtlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7Q0FDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRWVBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWFrZXJzLmMzYzE2YjY0NjAwZmQ5OTgwNzQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCB7IHdpdGhEYXRhIH0gZnJvbSBcIi4vd2l0aERhdGFcIjsgLy9IT0NcclxuLy8gaW1wb3J0IHsgU3BlYWtlcnNSZW5kZXJQcm9wcyB9IGZyb20gXCIuL1NwZWFrZXJzUmVuZGVyUHJvcHNcIjsgLy9yZW5kZXJpbmcgcHJvcHMgZm9yIGNoaWxkcmVuXHJcblxyXG5cclxuLy9leGFtcGxlIG9mIFJlbmRlclByb3BzXHJcbi8vIGNvbnN0IFNwZWFrZXJzID0gKCkgPT4ge1xyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8U3BlYWtlcnNSZW5kZXJQcm9wcz5cclxuLy8gICAgICAgeyh7IHNwZWFrZXJzIH0pID0+IHtcclxuLy8gICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgPGRpdj5cclxuLy8gICAgICAgICAgICAge3NwZWFrZXJzLm1hcCgoeyBpbWFnZVNyYywgbmFtZSB9KSA9PiAoXHJcbi8vICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlU3JjfSBhbHQ9e25hbWV9IGtleT17aW1hZ2VTcmN9IC8+XHJcbi8vICAgICAgICAgICAgICkpfVxyXG4vLyAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgKTtcclxuLy8gICAgICAgfX1cclxuLy8gICAgIDwvU3BlYWtlcnNSZW5kZXJQcm9wcz5cclxuLy8gICApO1xyXG4vLyB9O1xyXG5cclxuLy9leGFtcGxlIG9mIEhPQyB1c2UgYWxvbmcgd2l0aCAnd2l0aERhdGFIT0MnXHJcbi8vIGNvbnN0IG1heFNwZWFrZXJUb1Nob3cgPSAyOyAgICBcclxuLy8gZXhwb3J0IGRlZmF1bHQgd2l0aERhdGEobWF4U3BlYWtlclRvU2hvdykoU3BlYWtlcnMpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=