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
/* harmony import */ var _SpeakersRenderProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpeakersRenderProps */ "./src/components/Speakers/SpeakersRenderProps.js");


var _jsxFileName = "C:\\dev\\Speakers\\src\\components\\Speakers\\Speakers.js",
    _this = undefined;

 // import { withData } from "./withData"; HOC



var Speakers = function Speakers(_ref) {
  var speakers = _ref.speakers;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: speakers.map(function (_ref2) {
      var imageSrc = _ref2.imageSrc,
          name = _ref2.name;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: imageSrc,
        alt: name
      }, imageSrc, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);
}; // const maxSpeakerToShow = 2;    example of HOC use along with 'withDataHOC' 
// export default withData(maxSpeakerToShow)(Speakers);


_c = Speakers;
/* harmony default export */ __webpack_exports__["default"] = (Speakers);

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

/***/ "./src/components/Speakers/SpeakersRenderProps.js":
/*!********************************************************!*\
  !*** ./src/components/Speakers/SpeakersRenderProps.js ***!
  \********************************************************/
/*! exports provided: SpeakersRenderProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakersRenderProps", function() { return SpeakersRenderProps; });
var SpeakersRenderProps = function SpeakersRenderProps(props) {
  var pathName = "images";
  var speakers = [{
    imageSrc: "".concat(pathName, "/speaker-component-1530.png"),
    name: "Tamara Baker"
  }, {
    imageSrc: "".concat(pathName, "/speaker-component-10803.png"),
    name: "Eugene Chuvyrov"
  }, {
    imageSrc: "".concat(pathName, "/speaker-component-1124.png"),
    name: "Douglas Crockford"
  }];
  return props.children({
    speakers: speakers
  });
};
_c = SpeakersRenderProps;

var _c;

$RefreshReg$(_c, "SpeakersRenderProps");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvU3BlYWtlcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzL1NwZWFrZXJzUmVuZGVyUHJvcHMuanMiXSwibmFtZXMiOlsiU3BlYWtlcnMiLCJzcGVha2VycyIsIm1hcCIsImltYWdlU3JjIiwibmFtZSIsIlNwZWFrZXJzUmVuZGVyUHJvcHMiLCJwcm9wcyIsInBhdGhOYW1lIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBRWpDLHNCQUNFO0FBQUEsY0FDR0EsUUFBUSxDQUFDQyxHQUFULENBQWE7QUFBQSxVQUFHQyxRQUFILFNBQUdBLFFBQUg7QUFBQSxVQUFhQyxJQUFiLFNBQWFBLElBQWI7QUFBQSwwQkFDWjtBQUFLLFdBQUcsRUFBRUQsUUFBVjtBQUFvQixXQUFHLEVBQUVDO0FBQXpCLFNBQW9DRCxRQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFk7QUFBQSxLQUFiO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBT0QsQ0FURCxDLENBWUE7QUFDQTs7O0tBYk1ILFE7QUFlU0EsdUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFPLElBQU1LLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQzVDLE1BQU1DLFFBQVEsR0FBRyxRQUFqQjtBQUNBLE1BQU1OLFFBQVEsR0FBRyxDQUNmO0FBQ0VFLFlBQVEsWUFBS0ksUUFBTCxnQ0FEVjtBQUVFSCxRQUFJLEVBQUU7QUFGUixHQURlLEVBS2Y7QUFDRUQsWUFBUSxZQUFLSSxRQUFMLGlDQURWO0FBRUVILFFBQUksRUFBRTtBQUZSLEdBTGUsRUFTZjtBQUNFRCxZQUFRLFlBQUtJLFFBQUwsZ0NBRFY7QUFFRUgsUUFBSSxFQUFFO0FBRlIsR0FUZSxDQUFqQjtBQWVBLFNBQU9FLEtBQUssQ0FBQ0UsUUFBTixDQUFlO0FBQ3BCUCxZQUFRLEVBQUVBO0FBRFUsR0FBZixDQUFQO0FBR0QsQ0FwQk07S0FBTUksbUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuMWFjOWQyYzgyMmJlZmNjOTg2MjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHsgd2l0aERhdGEgfSBmcm9tIFwiLi93aXRoRGF0YVwiOyBIT0NcclxuaW1wb3J0IHtTcGVha2Vyc1JlbmRlclByb3BzfSBmcm9tICcuL1NwZWFrZXJzUmVuZGVyUHJvcHMnXHJcblxyXG5jb25zdCBTcGVha2VycyA9ICh7IHNwZWFrZXJzIH0pID0+IHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtzcGVha2Vycy5tYXAoKHsgaW1hZ2VTcmMsIG5hbWUgfSkgPT4gKFxyXG4gICAgICAgIDxpbWcgc3JjPXtpbWFnZVNyY30gYWx0PXtuYW1lfSBrZXk9e2ltYWdlU3JjfSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuLy8gY29uc3QgbWF4U3BlYWtlclRvU2hvdyA9IDI7ICAgIGV4YW1wbGUgb2YgSE9DIHVzZSBhbG9uZyB3aXRoICd3aXRoRGF0YUhPQycgXHJcbi8vIGV4cG9ydCBkZWZhdWx0IHdpdGhEYXRhKG1heFNwZWFrZXJUb1Nob3cpKFNwZWFrZXJzKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzO1xyXG4iLCJleHBvcnQgY29uc3QgU3BlYWtlcnNSZW5kZXJQcm9wcyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHBhdGhOYW1lID0gXCJpbWFnZXNcIjtcclxuICBjb25zdCBzcGVha2VycyA9IFtcclxuICAgIHtcclxuICAgICAgaW1hZ2VTcmM6IGAke3BhdGhOYW1lfS9zcGVha2VyLWNvbXBvbmVudC0xNTMwLnBuZ2AsXHJcbiAgICAgIG5hbWU6IFwiVGFtYXJhIEJha2VyXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZVNyYzogYCR7cGF0aE5hbWV9L3NwZWFrZXItY29tcG9uZW50LTEwODAzLnBuZ2AsXHJcbiAgICAgIG5hbWU6IFwiRXVnZW5lIENodXZ5cm92XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZVNyYzogYCR7cGF0aE5hbWV9L3NwZWFrZXItY29tcG9uZW50LTExMjQucG5nYCxcclxuICAgICAgbmFtZTogXCJEb3VnbGFzIENyb2NrZm9yZFwiLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gcHJvcHMuY2hpbGRyZW4oe1xyXG4gICAgc3BlYWtlcnM6IHNwZWFrZXJzLFxyXG4gIH0pO1xyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=