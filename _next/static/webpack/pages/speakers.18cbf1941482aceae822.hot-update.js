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
/* harmony import */ var _reducers_requestReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reducers/requestReducer */ "./src/reducers/requestReducer.js");
/* harmony import */ var _Speaker_Speaker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Speaker/Speaker */ "./src/components/Speaker/Speaker.js");
/* harmony import */ var _SpeakersSearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SpeakersSearchBar/SearchBar */ "./src/components/SpeakersSearchBar/SearchBar.js");



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

  if (status === _reducers_requestReducer__WEBPACK_IMPORTED_MODULE_4__["REQUEST_STATUS"].loading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "spinner"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 12
    }, _this);
  }

  if (status === _reducers_requestReducer__WEBPACK_IMPORTED_MODULE_4__["REQUEST_STATUS"].error) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "text-w",
      children: ["An error occured. Check your internet connection and try again", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 71
      }, _this), " ", "ERROR MESSAGE: ".concat(error)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_SpeakersSearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_6__["SearchBar"], {
      searchQuery: searchQuery,
      setSearchQuery: setSearchQuery
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), specialMessage && specialMessage.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "bg-yellow-300 border-l-8 border-yellow-500 text-black-700 p-4 text-2xl",
      role: "alert",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        className: "font-bold",
        children: "Special Message"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        children: specialMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12",
      children: speakers.filter(function (_ref) {
        var firstName = _ref.firstName,
            lastName = _ref.lastName;
        var targetString = "".concat(firstName, " ").concat(lastName).toLowerCase();
        return !searchQuery.trim() ? true : targetString.includes(searchQuery.trim().toLowerCase());
      }).map(function (speaker) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Speaker_Speaker__WEBPACK_IMPORTED_MODULE_5__["Speaker"], _objectSpread(_objectSpread({}, speaker), {}, {
          put: put
        }), speaker.id, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, _this);
};

_s(SpeakersComponent, "NTf2dUqURQ5UVN6Ikgt4etJhK2o=");

_c = SpeakersComponent;

var Speakers = function Speakers(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_contexts_DataContext__WEBPACK_IMPORTED_MODULE_3__["DataProvider"], {
    baseURL: "https://my-json-server.typicode.com",
    route: "damdlani/svcc-speaksers-list-react/speakers",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(SpeakersComponent, _objectSpread({}, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvU3BlYWtlcnMuanMiXSwibmFtZXMiOlsiU3BlYWtlcnNDb21wb25lbnQiLCJ1c2VTdGF0ZSIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJzcGVha2VycyIsInJlY29yZHMiLCJzdGF0dXMiLCJlcnJvciIsInB1dCIsInNwZWNpYWxNZXNzYWdlIiwiUkVRVUVTVF9TVEFUVVMiLCJsb2FkaW5nIiwibGVuZ3RoIiwiZmlsdGVyIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJ0YXJnZXRTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInRyaW0iLCJpbmNsdWRlcyIsIm1hcCIsInNwZWFrZXIiLCJpZCIsIlNwZWFrZXJzIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUFBOztBQUFBLGtCQUNRQyxzREFBUSxDQUFDLEVBQUQsQ0FEaEI7QUFBQSxNQUN2QkMsV0FEdUI7QUFBQSxNQUNWQyxjQURVOztBQUFBLG9CQUdvQkMsd0RBQVUsQ0FBQ0MsaUVBQUQsQ0FIOUI7QUFBQSxNQUdiQyxRQUhhLGVBR3RCQyxPQUhzQjtBQUFBLE1BR0hDLE1BSEcsZUFHSEEsTUFIRztBQUFBLE1BR0tDLEtBSEwsZUFHS0EsS0FITDtBQUFBLE1BR1lDLEdBSFosZUFHWUEsR0FIWjs7QUFLOUIsTUFBTUMsY0FBYyxHQUFHLEVBQXZCOztBQUVBLE1BQUlILE1BQU0sS0FBS0ksdUVBQWMsQ0FBQ0MsT0FBOUIsRUFBdUM7QUFDckMsd0JBQU87QUFBSyxlQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDs7QUFFRCxNQUFJTCxNQUFNLEtBQUtJLHVFQUFjLENBQUNILEtBQTlCLEVBQXFDO0FBQ25DLHdCQUNFO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQSxnR0FDZ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURoRSxFQUMwRSxHQUQxRSwyQkFFcUJBLEtBRnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBTUQ7O0FBRUQsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxzRUFBRDtBQUFXLGlCQUFXLEVBQUVQLFdBQXhCO0FBQXFDLG9CQUFjLEVBQUVDO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVHUSxjQUFjLElBQUlBLGNBQWMsQ0FBQ0csTUFBZixHQUF3QixDQUExQyxpQkFDQztBQUNFLGVBQVMsRUFBQyx3RUFEWjtBQUVFLFVBQUksRUFBQyxPQUZQO0FBQUEsOEJBSUU7QUFBRyxpQkFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQUtFO0FBQUEsa0JBQUlIO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKLGVBWUU7QUFBSyxlQUFTLEVBQUMsdURBQWY7QUFBQSxnQkFDR0wsUUFBUSxDQUNOUyxNQURGLENBQ1MsZ0JBQTZCO0FBQUEsWUFBMUJDLFNBQTBCLFFBQTFCQSxTQUEwQjtBQUFBLFlBQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUNuQyxZQUFNQyxZQUFZLEdBQUcsVUFBR0YsU0FBSCxjQUFnQkMsUUFBaEIsRUFBMkJFLFdBQTNCLEVBQXJCO0FBQ0EsZUFBTyxDQUFDakIsV0FBVyxDQUFDa0IsSUFBWixFQUFELEdBQ0gsSUFERyxHQUVIRixZQUFZLENBQUNHLFFBQWIsQ0FBc0JuQixXQUFXLENBQUNrQixJQUFaLEdBQW1CRCxXQUFuQixFQUF0QixDQUZKO0FBR0QsT0FORixFQU9FRyxHQVBGLENBT00sVUFBQ0MsT0FBRDtBQUFBLDRCQUNILHFFQUFDLHdEQUFELGtDQUE4QkEsT0FBOUI7QUFBdUMsYUFBRyxFQUFFYjtBQUE1QyxZQUFjYSxPQUFPLENBQUNDLEVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREc7QUFBQSxPQVBOO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkJELENBL0NEOztHQUFNeEIsaUI7O0tBQUFBLGlCOztBQWlETixJQUFNeUIsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQzFCLHNCQUNFLHFFQUFDLGtFQUFEO0FBQ0UsV0FBTyxFQUFDLHFDQURWO0FBRUUsU0FBSyxFQUFDLDZDQUZSO0FBQUEsMkJBSUUscUVBQUMsaUJBQUQsb0JBQXVCQSxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBUUQsQ0FURDs7TUFBTUQsUTtBQVdTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zcGVha2Vycy4xOGNiZjE5NDE0ODJhY2VhZTgyMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IERhdGFDb250ZXh0LCBEYXRhUHJvdmlkZXIgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvRGF0YUNvbnRleHRcIjtcclxuaW1wb3J0IHsgUkVRVUVTVF9TVEFUVVMgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvcmVxdWVzdFJlZHVjZXJcIjtcclxuaW1wb3J0IHsgU3BlYWtlciB9IGZyb20gXCIuLi9TcGVha2VyL1NwZWFrZXJcIjtcclxuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcIi4uL1NwZWFrZXJzU2VhcmNoQmFyL1NlYXJjaEJhclwiO1xyXG5cclxuY29uc3QgU3BlYWtlcnNDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgeyByZWNvcmRzOiBzcGVha2Vycywgc3RhdHVzLCBlcnJvciwgcHV0IH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuXHJcbiAgY29uc3Qgc3BlY2lhbE1lc3NhZ2UgPSBcIlwiO1xyXG5cclxuICBpZiAoc3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5sb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyXCIgLz47XHJcbiAgfVxyXG5cclxuICBpZiAoc3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5lcnJvcikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdcIj5cclxuICAgICAgICBBbiBlcnJvciBvY2N1cmVkLiBDaGVjayB5b3VyIGludGVybmV0IGNvbm5lY3Rpb24gYW5kIHRyeSBhZ2Fpbjxicj48L2JyPntcIiBcIn1cclxuICAgICAgICB7YEVSUk9SIE1FU1NBR0U6ICR7ZXJyb3J9YH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8U2VhcmNoQmFyIHNlYXJjaFF1ZXJ5PXtzZWFyY2hRdWVyeX0gc2V0U2VhcmNoUXVlcnk9e3NldFNlYXJjaFF1ZXJ5fSAvPlxyXG4gICAgICB7c3BlY2lhbE1lc3NhZ2UgJiYgc3BlY2lhbE1lc3NhZ2UubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmcteWVsbG93LTMwMCBib3JkZXItbC04IGJvcmRlci15ZWxsb3ctNTAwIHRleHQtYmxhY2stNzAwIHAtNCB0ZXh0LTJ4bFwiXHJcbiAgICAgICAgICByb2xlPVwiYWxlcnRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlNwZWNpYWwgTWVzc2FnZTwvcD5cclxuICAgICAgICAgIDxwPntzcGVjaWFsTWVzc2FnZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ3JpZC1jb2xzLTEgZ2FwLTEyXCI+XHJcbiAgICAgICAge3NwZWFrZXJzXHJcbiAgICAgICAgICAuZmlsdGVyKCh7IGZpcnN0TmFtZSwgbGFzdE5hbWUgfSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRTdHJpbmcgPSBgJHtmaXJzdE5hbWV9ICR7bGFzdE5hbWV9YC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gIXNlYXJjaFF1ZXJ5LnRyaW0oKVxyXG4gICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgIDogdGFyZ2V0U3RyaW5nLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRyaW0oKS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAubWFwKChzcGVha2VyKSA9PiAoXHJcbiAgICAgICAgICAgIDxTcGVha2VyIGtleT17c3BlYWtlci5pZH0gey4uLnNwZWFrZXJ9IHB1dD17cHV0fSAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTcGVha2VycyA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RGF0YVByb3ZpZGVyXHJcbiAgICAgIGJhc2VVUkw9XCJodHRwczovL215LWpzb24tc2VydmVyLnR5cGljb2RlLmNvbVwiXHJcbiAgICAgIHJvdXRlPVwiZGFtZGxhbmkvc3ZjYy1zcGVha3NlcnMtbGlzdC1yZWFjdC9zcGVha2Vyc1wiXHJcbiAgICA+XHJcbiAgICAgIDxTcGVha2Vyc0NvbXBvbmVudCB7Li4ucHJvcHN9IC8+XHJcbiAgICA8L0RhdGFQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=