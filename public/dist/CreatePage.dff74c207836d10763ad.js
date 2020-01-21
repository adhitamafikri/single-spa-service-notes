(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CreatePage"],{

/***/ "./src/components/Pane/index.js":
/*!**************************************!*\
  !*** ./src/components/Pane/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  width: \", \";\\n  height: \", \";\\n  display: \", \";\\n  justify-content: \", \";\\n  align-items: \", \";\\n  flex-wrap: \", \";\\n  margin: \", \";\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar StyledPane = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject(), function (props) {\n  return props.width;\n}, function (props) {\n  return props.height;\n}, function (props) {\n  return props.display;\n}, function (props) {\n  return props.justifyContent;\n}, function (props) {\n  return props.alignItems;\n}, function (props) {\n  return props.flexWrap;\n}, function (props) {\n  return props.margin;\n});\n\nfunction Pane(_ref) {\n  var width = _ref.width,\n      height = _ref.height,\n      display = _ref.display,\n      justifyContent = _ref.justifyContent,\n      alignItems = _ref.alignItems,\n      flexWrap = _ref.flexWrap,\n      margin = _ref.margin,\n      children = _ref.children;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledPane, {\n    width: width,\n    height: height,\n    display: display,\n    justifyContent: justifyContent,\n    alignItems: alignItems,\n    flexWrap: flexWrap,\n    margin: margin\n  }, children);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pane);\n\n//# sourceURL=webpack:///./src/components/Pane/index.js?");

/***/ }),

/***/ "./src/pages/Create/index.js":
/*!***********************************!*\
  !*** ./src/pages/Create/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_Pane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Pane */ \"./src/components/Pane/index.js\");\n/* harmony import */ var _contexts_NotesContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/NotesContext */ \"./src/contexts/NotesContext/index.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  margin-bottom: 16px;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\n\nvar StyledInputText = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].input(_templateObject());\n\nfunction Create() {\n  var notesDispatch = Object(_contexts_NotesContext__WEBPACK_IMPORTED_MODULE_4__[\"useNotesDispatch\"])();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({\n    title: '',\n    content: ''\n  }),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      noteData = _React$useState2[0],\n      setNoteData = _React$useState2[1];\n\n  var onTitleChange = function onTitleChange(e) {\n    var nd = _objectSpread({}, noteData);\n\n    nd.title = e.target.value;\n    setNoteData(_objectSpread({}, nd));\n  };\n\n  var onContentChange = function onContentChange(e) {\n    var nd = _objectSpread({}, noteData);\n\n    nd.content = e.target.value;\n    setNoteData(_objectSpread({}, nd));\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"The Create Notes page\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Pane__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    width: \"100%\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledInputText, {\n    value: noteData.title,\n    placeholder: \"Title\",\n    onChange: onTitleChange\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledInputText, {\n    value: noteData.content,\n    placeholder: \"Content\",\n    onChange: onContentChange\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: \"button\",\n    onClick: function onClick() {\n      return Object(_contexts_NotesContext__WEBPACK_IMPORTED_MODULE_4__[\"postNotes\"])(notesDispatch, noteData);\n    }\n  }, \"Save\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", null, \"Back to Index\")));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Create);\n\n//# sourceURL=webpack:///./src/pages/Create/index.js?");

/***/ })

}]);