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

  if (status === ST) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvU3BlYWtlcnMuanMiXSwibmFtZXMiOlsiU3BlYWtlcnNDb21wb25lbnQiLCJ1c2VTdGF0ZSIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJzcGVha2VycyIsInJlY29yZHMiLCJzdGF0dXMiLCJlcnJvciIsInB1dCIsInNwZWNpYWxNZXNzYWdlIiwiaW5jbHVkZXMiLCJTVCIsImxlbmd0aCIsImZpbHRlciIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwidGFyZ2V0U3RyaW5nIiwidG9Mb3dlckNhc2UiLCJ0cmltIiwibWFwIiwic3BlYWtlciIsImlkIiwiU3BlYWtlcnMiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsRUFBRCxDQURoQjtBQUFBLE1BQ3ZCQyxXQUR1QjtBQUFBLE1BQ1ZDLGNBRFU7O0FBQUEsb0JBUTFCQyx3REFBVSxDQUFDQyxpRUFBRCxDQVJnQjtBQUFBLE1BSW5CQyxRQUptQixlQUk1QkMsT0FKNEI7QUFBQSxNQUs1QkMsTUFMNEIsZUFLNUJBLE1BTDRCO0FBQUEsTUFNNUJDLEtBTjRCLGVBTTVCQSxLQU40QjtBQUFBLE1BTzVCQyxHQVA0QixlQU81QkEsR0FQNEI7O0FBVTlCLE1BQU1DLGNBQWMsR0FBRyxFQUF2Qjs7QUFFQSxNQUFJSCxNQUFNLENBQUNJLFFBQVAsQ0FBZ0IsU0FBaEIsQ0FBSixFQUFnQztBQUM5Qix3QkFBTztBQUFLLGVBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUVELE1BQUlKLE1BQU0sS0FBS0ssRUFBZixFQUFtQjtBQUNqQix3QkFDRTtBQUFBLDBIQUVrQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRmxCLGdDQUUrQ0osS0FGL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFNRDs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLHNFQUFEO0FBQVcsaUJBQVcsRUFBRVAsV0FBeEI7QUFBcUMsb0JBQWMsRUFBRUM7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUdRLGNBQWMsSUFBSUEsY0FBYyxDQUFDRyxNQUFmLEdBQXdCLENBQTFDLGlCQUNDO0FBQ0UsZUFBUyxFQUFDLHdFQURaO0FBRUUsVUFBSSxFQUFDLE9BRlA7QUFBQSw4QkFJRTtBQUFHLGlCQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBS0U7QUFBQSxrQkFBSUg7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEosZUFZRTtBQUFLLGVBQVMsRUFBQyx1REFBZjtBQUFBLGdCQUNHTCxRQUFRLENBQ05TLE1BREYsQ0FDUyxnQkFBNkI7QUFBQSxZQUExQkMsU0FBMEIsUUFBMUJBLFNBQTBCO0FBQUEsWUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ25DLFlBQU1DLFlBQVksR0FBRyxVQUFHRixTQUFILGNBQWdCQyxRQUFoQixFQUEyQkUsV0FBM0IsRUFBckI7QUFDQSxlQUFPLENBQUNqQixXQUFXLENBQUNrQixJQUFaLEVBQUQsR0FDSCxJQURHLEdBRUhGLFlBQVksQ0FBQ04sUUFBYixDQUFzQlYsV0FBVyxDQUFDa0IsSUFBWixHQUFtQkQsV0FBbkIsRUFBdEIsQ0FGSjtBQUdELE9BTkYsRUFPRUUsR0FQRixDQU9NLFVBQUNDLE9BQUQ7QUFBQSw0QkFDSCxxRUFBQyx3REFBRCxrQ0FFTUEsT0FGTjtBQUdFLGFBQUcsRUFBRVo7QUFIUCxZQUNPWSxPQUFPLENBQUNDLEVBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERztBQUFBLE9BUE47QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUErQkQsQ0F4REQ7O0dBQU12QixpQjs7S0FBQUEsaUI7O0FBMEROLElBQU13QixRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFDMUIsc0JBQ0UscUVBQUMsa0VBQUQ7QUFBYyxXQUFPLEVBQUMscUNBQXRCO0FBQTRELFNBQUssRUFBQyw0Q0FBbEU7QUFBQSwyQkFDRSxxRUFBQyxpQkFBRCxvQkFBdUJBLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQU5EOztNQUFNRCxRO0FBUVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWFrZXJzLjIzYjRiMDczMDM4NDJkZTgwZDAyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQsIERhdGFQcm92aWRlciB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9EYXRhQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBTcGVha2VyIH0gZnJvbSBcIi4uL1NwZWFrZXIvU3BlYWtlclwiO1xyXG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwiLi4vU3BlYWtlcnNTZWFyY2hCYXIvU2VhcmNoQmFyXCI7XHJcblxyXG5jb25zdCBTcGVha2Vyc0NvbXBvbmVudCA9ICgpID0+IHtcclxuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICByZWNvcmRzOiBzcGVha2VycyxcclxuICAgIHN0YXR1cyxcclxuICAgIGVycm9yLFxyXG4gICAgcHV0LFxyXG4gIH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuXHJcbiAgY29uc3Qgc3BlY2lhbE1lc3NhZ2UgPSBcIlwiO1xyXG5cclxuICBpZiAoc3RhdHVzLmluY2x1ZGVzKFwibG9hZGluZ1wiKSkge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lclwiIC8+O1xyXG4gIH1cclxuXHJcbiAgaWYgKHN0YXR1cyA9PT0gU1QpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgQW4gZXJyb3Igb2NjdXJlZC4gSXMganNvbi1zZXJ2ZXIgcnVubmluZz8gKHRyeSAnbnBtIHJ1biBqc29uLXNlcnZlcicgYXRcclxuICAgICAgICB0ZXJtaW5hbCBwcm9tcHQpPGJyPjwvYnI+IHtgRVJST1IgTUVTU0FHRTogJHtlcnJvcn1gfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIDxTZWFyY2hCYXIgc2VhcmNoUXVlcnk9e3NlYXJjaFF1ZXJ5fSBzZXRTZWFyY2hRdWVyeT17c2V0U2VhcmNoUXVlcnl9IC8+XHJcbiAgICAgIHtzcGVjaWFsTWVzc2FnZSAmJiBzcGVjaWFsTWVzc2FnZS5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy15ZWxsb3ctMzAwIGJvcmRlci1sLTggYm9yZGVyLXllbGxvdy01MDAgdGV4dC1ibGFjay03MDAgcC00IHRleHQtMnhsXCJcclxuICAgICAgICAgIHJvbGU9XCJhbGVydFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+U3BlY2lhbCBNZXNzYWdlPC9wPlxyXG4gICAgICAgICAgPHA+e3NwZWNpYWxNZXNzYWdlfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBncmlkLWNvbHMtMSBnYXAtMTJcIj5cclxuICAgICAgICB7c3BlYWtlcnNcclxuICAgICAgICAgIC5maWx0ZXIoKHsgZmlyc3ROYW1lLCBsYXN0TmFtZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFN0cmluZyA9IGAke2ZpcnN0TmFtZX0gJHtsYXN0TmFtZX1gLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiAhc2VhcmNoUXVlcnkudHJpbSgpXHJcbiAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgOiB0YXJnZXRTdHJpbmcuaW5jbHVkZXMoc2VhcmNoUXVlcnkudHJpbSgpLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5tYXAoKHNwZWFrZXIpID0+IChcclxuICAgICAgICAgICAgPFNwZWFrZXJcclxuICAgICAgICAgICAgICBrZXk9e3NwZWFrZXIuaWR9XHJcbiAgICAgICAgICAgICAgey4uLnNwZWFrZXJ9XHJcbiAgICAgICAgICAgICAgcHV0PXtwdXR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFNwZWFrZXJzID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEYXRhUHJvdmlkZXIgYmFzZVVSTD1cImh0dHBzOi8vbXktanNvbi1zZXJ2ZXIudHlwaWNvZGUuY29tXCIgcm91dGU9XCJkYW1kbGFuaS9zdmNjLXNwZWFrZXJzLWxpc3QtcmVhY3Qvc3BlYWtlcnNcIj5cclxuICAgICAgPFNwZWFrZXJzQ29tcG9uZW50IHsuLi5wcm9wc30vPlxyXG4gICAgPC9EYXRhUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9