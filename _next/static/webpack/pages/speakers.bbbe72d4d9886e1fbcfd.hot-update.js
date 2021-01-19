webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/components/Speaker/Speaker.js":
/*!*******************************************!*\
  !*** ./src/components/Speaker/Speaker.js ***!
  \*******************************************/
/*! exports provided: Speaker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Speaker", function() { return Speaker; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ErrorBoundary/ErrorBoundary */ "./src/components/ErrorBoundary/ErrorBoundary.js");
/* harmony import */ var _FavoriteButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FavoriteButton */ "./src/components/Speaker/FavoriteButton.js");
/* harmony import */ var _SpeakerImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SpeakerImage */ "./src/components/Speaker/SpeakerImage.js");



var _jsxFileName = "C:\\dev\\Speakers\\src\\components\\Speaker\\Speaker.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var SpeakerComponent = function SpeakerComponent(_ref) {
  var id = _ref.id,
      firstName = _ref.firstName,
      lastName = _ref.lastName,
      bio = _ref.bio,
      isFavorite = _ref.isFavorite,
      put = _ref.put,
      showErrorCard = _ref.showErrorCard;

  if (showErrorCard) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "rounded overflow-hidden shadow-lg p-6 bg-white",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "grid grid-cols-4 mb-6",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "font-bold text-lg col-span-3",
          children: "Error Showing Speaker"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "mb-6",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
          src: "/speakerimages/dummy-speaker-image.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        children: "Contact site owner for resolution."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "rounded overflow-hidden shadow-lg p-6 bg-white text-black",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "grid grid-cols-4 mb-6",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "font-bold text-lg col-span-3",
        children: "".concat(firstName, " ").concat(lastName)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "flex justify-end",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_FavoriteButton__WEBPACK_IMPORTED_MODULE_4__["FavouriteButton"], {
          isFavorite: isFavorite,
          onFavoriteToggle: function onFavoriteToggle() {
            put({
              id: id,
              firstName: firstName,
              lastName: lastName,
              bio: bio,
              isFavorite: !isFavorite
            });
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "mb-6",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_SpeakerImage__WEBPACK_IMPORTED_MODULE_5__["SpeakerImage"], {
        id: id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "text-gray-600",
      children: bio
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, _this);
};

_c = SpeakerComponent;
var Speaker = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(_c2 = function _c2(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_3__["default"], {
    errorUI: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(SpeakerComponent, {
      showErrorCard: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 29
    }, _this),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(SpeakerComponent, _objectSpread({}, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, _this);
});
_c3 = Speaker;

var _c, _c2, _c3;

$RefreshReg$(_c, "SpeakerComponent");
$RefreshReg$(_c2, "Speaker$React.memo");
$RefreshReg$(_c3, "Speaker");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlci9TcGVha2VyLmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJDb21wb25lbnQiLCJpZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiYmlvIiwiaXNGYXZvcml0ZSIsInB1dCIsInNob3dFcnJvckNhcmQiLCJTcGVha2VyIiwiUmVhY3QiLCJtZW1vIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FRbkI7QUFBQSxNQVBKQyxFQU9JLFFBUEpBLEVBT0k7QUFBQSxNQU5KQyxTQU1JLFFBTkpBLFNBTUk7QUFBQSxNQUxKQyxRQUtJLFFBTEpBLFFBS0k7QUFBQSxNQUpKQyxHQUlJLFFBSkpBLEdBSUk7QUFBQSxNQUhKQyxVQUdJLFFBSEpBLFVBR0k7QUFBQSxNQUZKQyxHQUVJLFFBRkpBLEdBRUk7QUFBQSxNQURKQyxhQUNJLFFBREpBLGFBQ0k7O0FBRUosTUFBSUEsYUFBSixFQUFtQjtBQUNqQix3QkFDRTtBQUFLLGVBQVMsRUFBQyxnREFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyx1QkFBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyw4QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU1FO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsK0JBQ0U7QUFBSyxhQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GLGVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQWFEOztBQUVELHNCQUNFO0FBQUssYUFBUyxFQUFDLDJEQUFmO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsdUJBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsOEJBQWY7QUFBQSw0QkFBa0RMLFNBQWxELGNBQStEQyxRQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUssaUJBQVMsRUFBQyxrQkFBZjtBQUFBLCtCQUNFLHFFQUFDLCtEQUFEO0FBQ0Usb0JBQVUsRUFBRUUsVUFEZDtBQUVFLDBCQUFnQixFQUFFLDRCQUFNO0FBQ3RCQyxlQUFHLENBQUM7QUFDRkwsZ0JBQUUsRUFBRkEsRUFERTtBQUVGQyx1QkFBUyxFQUFUQSxTQUZFO0FBR0ZDLHNCQUFRLEVBQVJBLFFBSEU7QUFJRkMsaUJBQUcsRUFBSEEsR0FKRTtBQUtGQyx3QkFBVSxFQUFFLENBQUNBO0FBTFgsYUFBRCxDQUFIO0FBT0Q7QUFWSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBa0JFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSw2QkFDRSxxRUFBQywwREFBRDtBQUFjLFVBQUUsRUFBRUo7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQkYsZUFxQkU7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLGdCQUFnQ0c7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlCRCxDQW5ERDs7S0FBTUosZ0I7QUFxREMsSUFBTVEsT0FBTyxnQkFBR0MsNENBQUssQ0FBQ0MsSUFBTixPQUFXLGFBQUNDLEtBQUQsRUFBVztBQUMzQyxzQkFDRSxxRUFBQyxvRUFBRDtBQUFlLFdBQU8sZUFBRSxxRUFBQyxnQkFBRDtBQUFrQixtQkFBYSxFQUFFO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBeEI7QUFBQSwyQkFDRSxxRUFBQyxnQkFBRCxvQkFBc0JBLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQU5zQixDQUFoQjtNQUFNSCxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWFrZXJzLmJiYmU3MmQ0ZDk4ODZlMWZiY2ZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBFcnJvckJvdW5kYXJ5IGZyb20gXCIuLi9FcnJvckJvdW5kYXJ5L0Vycm9yQm91bmRhcnlcIjtcclxuaW1wb3J0IHsgRmF2b3VyaXRlQnV0dG9uIGFzIEZhdm9yaXRlQnV0dG9uIH0gZnJvbSBcIi4vRmF2b3JpdGVCdXR0b25cIjtcclxuaW1wb3J0IHsgU3BlYWtlckltYWdlIH0gZnJvbSBcIi4vU3BlYWtlckltYWdlXCI7XHJcblxyXG5jb25zdCBTcGVha2VyQ29tcG9uZW50ID0gKHtcclxuICBpZCxcclxuICBmaXJzdE5hbWUsXHJcbiAgbGFzdE5hbWUsXHJcbiAgYmlvLFxyXG4gIGlzRmF2b3JpdGUsXHJcbiAgcHV0LFxyXG4gIHNob3dFcnJvckNhcmQsXHJcbn0pID0+IHtcclxuXHJcbiAgaWYgKHNob3dFcnJvckNhcmQpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZCBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LWxnIHAtNiBiZy13aGl0ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBtYi02XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWxnIGNvbC1zcGFuLTNcIj5cclxuICAgICAgICAgICAgRXJyb3IgU2hvd2luZyBTcGVha2VyXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTZcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL3NwZWFrZXJpbWFnZXMvZHVtbXktc3BlYWtlci1pbWFnZS5qcGdcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+Q29udGFjdCBzaXRlIG93bmVyIGZvciByZXNvbHV0aW9uLjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctbGcgcC02IGJnLXdoaXRlIHRleHQtYmxhY2tcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IG1iLTZcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWxnIGNvbC1zcGFuLTNcIj57YCR7Zmlyc3ROYW1lfSAke2xhc3ROYW1lfWB9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kXCI+XHJcbiAgICAgICAgICA8RmF2b3JpdGVCdXR0b25cclxuICAgICAgICAgICAgaXNGYXZvcml0ZT17aXNGYXZvcml0ZX1cclxuICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHB1dCh7XHJcbiAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICAgIGxhc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgYmlvLFxyXG4gICAgICAgICAgICAgICAgaXNGYXZvcml0ZTogIWlzRmF2b3JpdGUsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02XCI+XHJcbiAgICAgICAgPFNwZWFrZXJJbWFnZSBpZD17aWR9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj57YmlvfTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTcGVha2VyID0gUmVhY3QubWVtbygocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEVycm9yQm91bmRhcnkgZXJyb3JVST17PFNwZWFrZXJDb21wb25lbnQgc2hvd0Vycm9yQ2FyZD17dHJ1ZX0+PC9TcGVha2VyQ29tcG9uZW50Pn0+XHJcbiAgICAgIDxTcGVha2VyQ29tcG9uZW50IHsuLi5wcm9wc30gLz5cclxuICAgIDwvRXJyb3JCb3VuZGFyeT5cclxuICApO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==