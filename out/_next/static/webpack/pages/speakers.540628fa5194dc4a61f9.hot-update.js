webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/hooks/useRequest.js":
/*!*********************************!*\
  !*** ./src/hooks/useRequest.js ***!
  \*********************************/
/*! exports provided: useRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRequest", function() { return useRequest; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_notifications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-notifications-component */ "./node_modules/react-notifications-component/dist/index.js");
/* harmony import */ var react_notifications_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_notifications_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_requestActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/requestActions */ "./src/actions/requestActions.js");
/* harmony import */ var _reducers_requestReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/requestReducer */ "./src/reducers/requestReducer.js");



var _s = $RefreshSig$();






var useRequest = function useRequest(baseURL, route) {
  _s();

  var initialState = {
    records: [],
    status: _reducers_requestReducer__WEBPACK_IMPORTED_MODULE_6__["REQUEST_STATUS"].loading,
    error: null
  };

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(_reducers_requestReducer__WEBPACK_IMPORTED_MODULE_6__["requestReducer"], initialState),
      _useReducer$ = _useReducer[0],
      records = _useReducer$.records,
      status = _useReducer$.status,
      error = _useReducer$.error,
      dispatch = _useReducer[1];

  var signal = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(axios__WEBPACK_IMPORTED_MODULE_2___default.a.CancelToken.source());
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(baseURL, "/").concat(route), {
                cancelToken: signal.current.token
              });

            case 3:
              response = _context.sent;
              dispatch({
                type: _actions_requestActions__WEBPACK_IMPORTED_MODULE_5__["FETCH_SUCCESS"],
                records: response.data
              });
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);

              if (axios__WEBPACK_IMPORTED_MODULE_2___default.a.isCancel(_context.t0)) {
                console.log("Get request canceled");
              } else {
                dispatch({
                  type: _actions_requestActions__WEBPACK_IMPORTED_MODULE_5__["FETCH_FAILURE"],
                  status: _reducers_requestReducer__WEBPACK_IMPORTED_MODULE_6__["REQUEST_STATUS"].error,
                  error: _context.t0.message
                });
              }

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }))();

    return function () {
      console.log('Component terminated and axios request canceled');
      signal.current.cancel();
    };
  }, [baseURL, route]);
  var state = {
    records: records,
    status: status,
    error: error,
    put: react__WEBPACK_IMPORTED_MODULE_3___default.a.useCallback( /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(record) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                dispatch({
                  type: _actions_requestActions__WEBPACK_IMPORTED_MODULE_5__["PUT"],
                  record: record
                });
                _context2.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.put("".concat(baseURL, "/").concat(route, "/").concat(record.id), record);

              case 4:
                dispatch({
                  type: _actions_requestActions__WEBPACK_IMPORTED_MODULE_5__["PUT_SUCCESS"]
                });
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                dispatch({
                  type: _actions_requestActions__WEBPACK_IMPORTED_MODULE_5__["PUT_FAILURE"],
                  error: _context2.t0.message
                });

              case 10:
                react_notifications_component__WEBPACK_IMPORTED_MODULE_4__["store"].addNotification({
                  title: 'Favorite status update failure.  Setting Back...',
                  message: "Speaker: ".concat(record.firstName, " ").concat(record.lastName),
                  type: 'danger',
                  insert: 'top',
                  container: 'top-right',
                  animationIn: ['animated', 'fadeIn'],
                  animationOut: ['animated', 'fadeOut'],
                  dismiss: {
                    duration: 3000,
                    onScreen: true
                  }
                });

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), [])
  };
  return state;
};

_s(useRequest, "bAJgU+925LTQ7J82F1hWllbepp8=");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVJlcXVlc3QuanMiXSwibmFtZXMiOlsidXNlUmVxdWVzdCIsImJhc2VVUkwiLCJyb3V0ZSIsImluaXRpYWxTdGF0ZSIsInJlY29yZHMiLCJzdGF0dXMiLCJSRVFVRVNUX1NUQVRVUyIsImxvYWRpbmciLCJlcnJvciIsInVzZVJlZHVjZXIiLCJyZXF1ZXN0UmVkdWNlciIsImRpc3BhdGNoIiwic2lnbmFsIiwidXNlUmVmIiwiYXhpb3MiLCJDYW5jZWxUb2tlbiIsInNvdXJjZSIsInVzZUVmZmVjdCIsImdldCIsImNhbmNlbFRva2VuIiwiY3VycmVudCIsInRva2VuIiwicmVzcG9uc2UiLCJ0eXBlIiwiRkVUQ0hfU1VDQ0VTUyIsImRhdGEiLCJpc0NhbmNlbCIsImNvbnNvbGUiLCJsb2ciLCJGRVRDSF9GQUlMVVJFIiwibWVzc2FnZSIsImNhbmNlbCIsInN0YXRlIiwicHV0IiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInJlY29yZCIsIlBVVCIsImlkIiwiUFVUX1NVQ0NFU1MiLCJQVVRfRkFJTFVSRSIsInN0b3JlIiwiYWRkTm90aWZpY2F0aW9uIiwidGl0bGUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImluc2VydCIsImNvbnRhaW5lciIsImFuaW1hdGlvbkluIiwiYW5pbWF0aW9uT3V0IiwiZGlzbWlzcyIsImR1cmF0aW9uIiwib25TY3JlZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBRU8sSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsT0FBRCxFQUFVQyxLQUFWLEVBQW9CO0FBQUE7O0FBQzVDLE1BQU1DLFlBQVksR0FBRztBQUNuQkMsV0FBTyxFQUFFLEVBRFU7QUFFbkJDLFVBQU0sRUFBRUMsdUVBQWMsQ0FBQ0MsT0FGSjtBQUduQkMsU0FBSyxFQUFFO0FBSFksR0FBckI7O0FBRDRDLG9CQU9HQyx3REFB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RUFBRSxJQURIO0FBRVBDLDRCQUFRLEVBQUU7QUFGSDtBQVJXLGlCQUF0Qjs7QUFoQnFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWxCOztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBNkJGLEVBN0JFO0FBSk8sR0FBZDtBQW9DQSxTQUFPcEIsS0FBUDtBQUNELENBaEZNOztHQUFNaEMsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zcGVha2Vycy41NDA2MjhmYTUxOTRkYzRhNjFmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICdyZWFjdC1ub3RpZmljYXRpb25zLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7XHJcbiAgRkVUQ0hfRkFJTFVSRSxcclxuICBGRVRDSF9TVUNDRVNTLFxyXG4gIFBVVF9GQUlMVVJFLFxyXG4gIFBVVF9TVUNDRVNTLFxyXG4gIFBVVCxcclxufSBmcm9tIFwiLi4vYWN0aW9ucy9yZXF1ZXN0QWN0aW9uc1wiO1xyXG5pbXBvcnQgeyByZXF1ZXN0UmVkdWNlciwgUkVRVUVTVF9TVEFUVVMgfSBmcm9tIFwiLi4vcmVkdWNlcnMvcmVxdWVzdFJlZHVjZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VSZXF1ZXN0ID0gKGJhc2VVUkwsIHJvdXRlKSA9PiB7XHJcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgcmVjb3JkczogW10sXHJcbiAgICBzdGF0dXM6IFJFUVVFU1RfU1RBVFVTLmxvYWRpbmcsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICB9O1xyXG5cclxuICBjb25zdCBbeyByZWNvcmRzLCBzdGF0dXMsIGVycm9yIH0sIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoXHJcbiAgICByZXF1ZXN0UmVkdWNlcixcclxuICAgIGluaXRpYWxTdGF0ZVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHNpZ25hbCA9IHVzZVJlZihheGlvcy5DYW5jZWxUb2tlbi5zb3VyY2UoKSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVUkx9LyR7cm91dGV9YCwge1xyXG4gICAgICAgICAgY2FuY2VsVG9rZW46IHNpZ25hbC5jdXJyZW50LnRva2VuLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IEZFVENIX1NVQ0NFU1MsXHJcbiAgICAgICAgICByZWNvcmRzOiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGlmIChheGlvcy5pc0NhbmNlbChlcnJvcikpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2V0IHJlcXVlc3QgY2FuY2VsZWRcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogRkVUQ0hfRkFJTFVSRSxcclxuICAgICAgICAgICAgc3RhdHVzOiBSRVFVRVNUX1NUQVRVUy5lcnJvcixcclxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pKCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ0NvbXBvbmVudCB0ZXJtaW5hdGVkIGFuZCBheGlvcyByZXF1ZXN0IGNhbmNlbGVkJyk7XHJcbiAgICAgIHNpZ25hbC5jdXJyZW50LmNhbmNlbCgpO1xyXG4gICAgfVxyXG4gIH0sIFtiYXNlVVJMLCByb3V0ZV0pO1xyXG5cclxuICBjb25zdCBzdGF0ZSA9IHtcclxuICAgIHJlY29yZHMsXHJcbiAgICBzdGF0dXMsXHJcbiAgICBlcnJvcixcclxuICAgIHB1dDogUmVhY3QudXNlQ2FsbGJhY2soYXN5bmMgKHJlY29yZCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IFBVVCxcclxuICAgICAgICAgIHJlY29yZDogcmVjb3JkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGF3YWl0IGF4aW9zLnB1dChgJHtiYXNlVVJMfS8ke3JvdXRlfS8ke3JlY29yZC5pZH1gLCByZWNvcmQpO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IFBVVF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IFBVVF9GQUlMVVJFLFxyXG4gICAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgc3RvcmUuYWRkTm90aWZpY2F0aW9uKHtcclxuICAgICAgICB0aXRsZTogJ0Zhdm9yaXRlIHN0YXR1cyB1cGRhdGUgZmFpbHVyZS4gIFNldHRpbmcgQmFjay4uLicsXHJcbiAgICAgICAgbWVzc2FnZTogYFNwZWFrZXI6ICR7cmVjb3JkLmZpcnN0TmFtZX0gJHtyZWNvcmQubGFzdE5hbWV9YCxcclxuICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcclxuICAgICAgICBpbnNlcnQ6ICd0b3AnLFxyXG4gICAgICAgIGNvbnRhaW5lcjogJ3RvcC1yaWdodCcsXHJcbiAgICAgICAgYW5pbWF0aW9uSW46IFsnYW5pbWF0ZWQnLCAnZmFkZUluJ10sXHJcbiAgICAgICAgYW5pbWF0aW9uT3V0OiBbJ2FuaW1hdGVkJywgJ2ZhZGVPdXQnXSxcclxuICAgICAgICBkaXNtaXNzOiB7XHJcbiAgICAgICAgICBkdXJhdGlvbjogMzAwMCxcclxuICAgICAgICAgIG9uU2NyZWVuOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSwgW10pLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiBzdGF0ZTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==