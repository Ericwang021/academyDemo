module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Layout/Header/Header.js":
/*!*********************************!*\
  !*** ./Layout/Header/Header.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/components/avatar.module.scss */ \"./styles/components/avatar.module.scss\");\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.module.scss */ \"./Layout/Header/Header.module.scss\");\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_static_academy_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/static/academy-logo.svg */ \"./public/static/academy-logo.svg\");\n/* harmony import */ var _material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Language */ \"@material-ui/icons/Language\");\n/* harmony import */ var _material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nconst Header = () => {\n  return __jsx(\"header\", {\n    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.header\n  }, __jsx(\"div\", {\n    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.headerInner\n  }, __jsx(\"a\", {\n    href: \"/\"\n  }, __jsx(\"div\", null, __jsx(_public_static_academy_logo_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)), __jsx(\"div\", {\n    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.logoText\n  }, \"Academy\")), __jsx(\"nav\", null, __jsx(\"ul\", null, __jsx(\"li\", null, __jsx(\"a\", {\n    href: \"/\"\n  }, \"\\u63A2\\u7D22\")), __jsx(\"li\", null, __jsx(\"a\", {\n    href: \"/\"\n  }, \"\\u6211\\u7684\\u8AB2\\u7A0B\")))), __jsx(\"div\", {\n    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.personBox\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"IconButton\"], null, __jsx(_material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    fontSize: \"large\"\n  })), __jsx(\"div\", {\n    className: _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.avatarMl\n  }, \"E\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9MYXlvdXQvSGVhZGVyL0hlYWRlci5qcz82MmMxIl0sIm5hbWVzIjpbIkhlYWRlciIsInN0eWxlcyIsImhlYWRlciIsImhlYWRlcklubmVyIiwibG9nb1RleHQiLCJwZXJzb25Cb3giLCJhdmF0YXJTdHlsZSIsImF2YXRhck1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxNQUFNO0FBQ25CLFNBQ0U7QUFBUSxhQUFTLEVBQUVDLDBEQUFNLENBQUNDO0FBQTFCLEtBQ0U7QUFBSyxhQUFTLEVBQUVELDBEQUFNLENBQUNFO0FBQXZCLEtBQ0U7QUFBRyxRQUFJLEVBQUM7QUFBUixLQUNFLG1CQUNFLE1BQUMsdUVBQUQsT0FERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUVGLDBEQUFNLENBQUNHO0FBQXZCLGVBSkYsQ0FERixFQU9FLG1CQUNFLGtCQUNFLGtCQUNFO0FBQUcsUUFBSSxFQUFDO0FBQVIsb0JBREYsQ0FERixFQUlFLGtCQUNFO0FBQUcsUUFBSSxFQUFDO0FBQVIsZ0NBREYsQ0FKRixDQURGLENBUEYsRUFpQkU7QUFBSyxhQUFTLEVBQUVILDBEQUFNLENBQUNJO0FBQXZCLEtBQ0UsTUFBQyw0REFBRCxRQUNFLE1BQUMsa0VBQUQ7QUFBYyxZQUFRLEVBQUM7QUFBdkIsSUFERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUVDLDRFQUFXLENBQUNDO0FBQTVCLFNBSkYsQ0FqQkYsQ0FERixDQURGO0FBNEJELENBN0JEOztBQStCZVAscUVBQWYiLCJmaWxlIjoiLi9MYXlvdXQvSGVhZGVyL0hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhdmF0YXJTdHlsZSBmcm9tICcuLi8uLi9zdHlsZXMvY29tcG9uZW50cy9hdmF0YXIubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRlci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vLi4vcHVibGljL3N0YXRpYy9hY2FkZW15LWxvZ28uc3ZnJztcbmltcG9ydCBMYW5ndWFnZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xhbmd1YWdlJztcbmltcG9ydCB7IEljb25CdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcklubmVyfT5cbiAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ29UZXh0fT5BY2FkZW15PC9kaXY+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+5o6i57SiPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj7miJHnmoToqrLnqIs8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBlcnNvbkJveH0+XG4gICAgICAgICAgPEljb25CdXR0b24+XG4gICAgICAgICAgICA8TGFuZ3VhZ2VJY29uIGZvbnRTaXplPVwibGFyZ2VcIiAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YXZhdGFyU3R5bGUuYXZhdGFyTWx9PkU8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Layout/Header/Header.js\n");

/***/ }),

/***/ "./Layout/Header/Header.module.scss":
/*!******************************************!*\
  !*** ./Layout/Header/Header.module.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"Header_header__3y3lQ\",\n\t\"headerInner\": \"Header_headerInner__1C6Vu\",\n\t\"logoText\": \"Header_logoText__37cTK\",\n\t\"personBox\": \"Header_personBox__q-Dx0\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9MYXlvdXQvSGVhZGVyL0hlYWRlci5tb2R1bGUuc2Nzcz9jZjkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vTGF5b3V0L0hlYWRlci9IZWFkZXIubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJcIjogXCJIZWFkZXJfaGVhZGVyX18zeTNsUVwiLFxuXHRcImhlYWRlcklubmVyXCI6IFwiSGVhZGVyX2hlYWRlcklubmVyX18xQzZWdVwiLFxuXHRcImxvZ29UZXh0XCI6IFwiSGVhZGVyX2xvZ29UZXh0X18zN2NUS1wiLFxuXHRcInBlcnNvbkJveFwiOiBcIkhlYWRlcl9wZXJzb25Cb3hfX3EtRHgwXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Layout/Header/Header.module.scss\n");

/***/ }),

/***/ "./Layout/Layout.js":
/*!**************************!*\
  !*** ./Layout/Layout.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout.module.scss */ \"./Layout/Layout.module.scss\");\n/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header/Header */ \"./Layout/Header/Header.js\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"@material-ui/core/CssBaseline\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Container */ \"@material-ui/core/Container\");\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_ClassITitleWrapper_ClassITitleWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ClassITitleWrapper/ClassITitleWrapper */ \"./components/ClassITitleWrapper/ClassITitleWrapper.js\");\n/* harmony import */ var react_headroom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-headroom */ \"react-headroom\");\n/* harmony import */ var react_headroom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_headroom__WEBPACK_IMPORTED_MODULE_7__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\nconst Layout = props => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/icon?family=Material+Icons\",\n    rel: \"stylesheet\"\n  })), __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default.a, null), __jsx(react_headroom__WEBPACK_IMPORTED_MODULE_7___default.a, null, __jsx(_Header_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)), __jsx(\"div\", {\n    className: _Layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container\n  }, __jsx(_components_ClassITitleWrapper_ClassITitleWrapper__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    title: 'Learn with Academy - Academy Tutorial'\n  }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    maxWidth: false,\n    className: _Layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.containerBackground\n  }, __jsx(\"main\", null, props.children))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9MYXlvdXQvTGF5b3V0LmpzPzEyZTQiXSwibmFtZXMiOlsiTGF5b3V0IiwicHJvcHMiLCJzdHlsZXMiLCJjb250YWluZXIiLCJjb250YWluZXJCYWNrZ3JvdW5kIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU1BLE1BQU0sR0FBSUMsS0FBRCxJQUFXO0FBQ3hCLFNBQ0UsTUFBQyw4Q0FBRCxRQUNFLE1BQUMsZ0RBQUQsUUFDRTtBQUNFLFFBQUksRUFBQyx5REFEUDtBQUVFLE9BQUcsRUFBQztBQUZOLElBREYsQ0FERixFQU9FLE1BQUMsb0VBQUQsT0FQRixFQVFFLE1BQUMscURBQUQsUUFDRSxNQUFDLHNEQUFELE9BREYsQ0FSRixFQVdFO0FBQUssYUFBUyxFQUFFQywwREFBTSxDQUFDQztBQUF2QixLQUNFLE1BQUMseUZBQUQ7QUFBb0IsU0FBSyxFQUFFO0FBQTNCLElBREYsRUFFRSxNQUFDLGtFQUFEO0FBQVcsWUFBUSxFQUFFLEtBQXJCO0FBQTRCLGFBQVMsRUFBRUQsMERBQU0sQ0FBQ0U7QUFBOUMsS0FDRSxvQkFBT0gsS0FBSyxDQUFDSSxRQUFiLENBREYsQ0FGRixDQVhGLENBREY7QUFvQkQsQ0FyQkQ7O0FBdUJlTCxxRUFBZiIsImZpbGUiOiIuL0xheW91dC9MYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VTdGF0ZSwgdXNlTWVtbywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xheW91dC5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xuaW1wb3J0IENsYXNzSVRpdGxlV3JhcHBlciBmcm9tICcuLi9jb21wb25lbnRzL0NsYXNzSVRpdGxlV3JhcHBlci9DbGFzc0lUaXRsZVdyYXBwZXInO1xuaW1wb3J0IEhlYWRlclJvb20gZnJvbSAncmVhY3QtaGVhZHJvb20nO1xuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICA8SGVhZGVyUm9vbT5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgPC9IZWFkZXJSb29tPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8Q2xhc3NJVGl0bGVXcmFwcGVyIHRpdGxlPXsnTGVhcm4gd2l0aCBBY2FkZW15IC0gQWNhZGVteSBUdXRvcmlhbCd9IC8+XG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9e2ZhbHNlfSBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJCYWNrZ3JvdW5kfT5cbiAgICAgICAgICA8bWFpbj57cHJvcHMuY2hpbGRyZW59PC9tYWluPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Layout/Layout.js\n");

/***/ }),

/***/ "./Layout/Layout.module.scss":
/*!***********************************!*\
  !*** ./Layout/Layout.module.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Layout_container__prs1d\",\n\t\"containerBackground\": \"Layout_containerBackground__3eUxg\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9MYXlvdXQvTGF5b3V0Lm1vZHVsZS5zY3NzPzQwNmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL0xheW91dC9MYXlvdXQubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJMYXlvdXRfY29udGFpbmVyX19wcnMxZFwiLFxuXHRcImNvbnRhaW5lckJhY2tncm91bmRcIjogXCJMYXlvdXRfY29udGFpbmVyQmFja2dyb3VuZF9fM2VVeGdcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Layout/Layout.module.scss\n");

/***/ }),

/***/ "./components/ClassITitleWrapper/ClassITitleWrapper.js":
/*!*************************************************************!*\
  !*** ./components/ClassITitleWrapper/ClassITitleWrapper.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ClassITitleWrapper_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClassITitleWrapper.module.scss */ \"./components/ClassITitleWrapper/ClassITitleWrapper.module.scss\");\n/* harmony import */ var _ClassITitleWrapper_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ClassITitleWrapper_module_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nconst ClassITitleWrapper = ({\n  title\n}) => {\n  return __jsx(\"div\", {\n    className: _ClassITitleWrapper_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.classBoxWrapper\n  }, __jsx(\"div\", {\n    className: _ClassITitleWrapper_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.classBoxWrapperInner\n  }, __jsx(\"div\", {\n    className: _ClassITitleWrapper_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.wrapperTitle\n  }, __jsx(\"ul\", null, __jsx(\"li\", null, title)))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClassITitleWrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NsYXNzSVRpdGxlV3JhcHBlci9DbGFzc0lUaXRsZVdyYXBwZXIuanM/ZjBlYiJdLCJuYW1lcyI6WyJDbGFzc0lUaXRsZVdyYXBwZXIiLCJ0aXRsZSIsInN0eWxlcyIsImNsYXNzQm94V3JhcHBlciIsImNsYXNzQm94V3JhcHBlcklubmVyIiwid3JhcHBlclRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLGtCQUFrQixHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWU7QUFDeEMsU0FDRTtBQUFLLGFBQVMsRUFBRUMsc0VBQU0sQ0FBQ0M7QUFBdkIsS0FDRTtBQUFLLGFBQVMsRUFBRUQsc0VBQU0sQ0FBQ0U7QUFBdkIsS0FDRTtBQUFLLGFBQVMsRUFBRUYsc0VBQU0sQ0FBQ0c7QUFBdkIsS0FDRSxrQkFDRSxrQkFBS0osS0FBTCxDQURGLENBREYsQ0FERixDQURGLENBREY7QUFXRCxDQVpEOztBQWNlRCxpRkFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2xhc3NJVGl0bGVXcmFwcGVyL0NsYXNzSVRpdGxlV3JhcHBlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9DbGFzc0lUaXRsZVdyYXBwZXIubW9kdWxlLnNjc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQ2xhc3NJVGl0bGVXcmFwcGVyID0gKHsgdGl0bGUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2xhc3NCb3hXcmFwcGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2xhc3NCb3hXcmFwcGVySW5uZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJUaXRsZX0+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPnt0aXRsZX08L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDbGFzc0lUaXRsZVdyYXBwZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ClassITitleWrapper/ClassITitleWrapper.js\n");

/***/ }),

/***/ "./components/ClassITitleWrapper/ClassITitleWrapper.module.scss":
/*!**********************************************************************!*\
  !*** ./components/ClassITitleWrapper/ClassITitleWrapper.module.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"classBoxWrapper\": \"ClassITitleWrapper_classBoxWrapper__1zI49\",\n\t\"classBoxWrapperInner\": \"ClassITitleWrapper_classBoxWrapperInner__1h3gg\",\n\t\"wrapperTitle\": \"ClassITitleWrapper_wrapperTitle__3yE1f\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NsYXNzSVRpdGxlV3JhcHBlci9DbGFzc0lUaXRsZVdyYXBwZXIubW9kdWxlLnNjc3M/MmFkZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NsYXNzSVRpdGxlV3JhcHBlci9DbGFzc0lUaXRsZVdyYXBwZXIubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjbGFzc0JveFdyYXBwZXJcIjogXCJDbGFzc0lUaXRsZVdyYXBwZXJfY2xhc3NCb3hXcmFwcGVyX18xekk0OVwiLFxuXHRcImNsYXNzQm94V3JhcHBlcklubmVyXCI6IFwiQ2xhc3NJVGl0bGVXcmFwcGVyX2NsYXNzQm94V3JhcHBlcklubmVyX18xaDNnZ1wiLFxuXHRcIndyYXBwZXJUaXRsZVwiOiBcIkNsYXNzSVRpdGxlV3JhcHBlcl93cmFwcGVyVGl0bGVfXzN5RTFmXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ClassITitleWrapper/ClassITitleWrapper.module.scss\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styles.scss */ \"./styles/styles.scss\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layout/Layout */ \"./Layout/Layout.js\");\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst App = ({\n  Component,\n  pageProps\n}) => {\n  return __jsx(_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, __jsx(Component, pageProps));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsTUFBTUEsR0FBRyxHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQUQsS0FBOEI7QUFDeEMsU0FDRSxNQUFDLHNEQUFELFFBQ0UsTUFBQyxTQUFELEVBQWVBLFNBQWYsQ0FERixDQURGO0FBS0QsQ0FORDs7QUFRZUYsa0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGVzLnNjc3MnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9MYXlvdXQvTGF5b3V0JztcbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./public/static/academy-logo.svg":
/*!****************************************!*\
  !*** ./public/static/academy-logo.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nvar _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"defs\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"style\", null, \".academy-logo_svg__cls-4{fill:#727171}.academy-logo_svg__cls-7{fill:#efefef}.academy-logo_svg__cls-10{fill:#9fa0a0}\"));\n\nvar _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"g\", {\n  id: \"academy-logo_svg__content\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"rect\", {\n  x: 4,\n  y: 4,\n  width: 40,\n  height: 40,\n  rx: 8.33,\n  ry: 8.33,\n  fill: \"#ebebeb\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"rect\", {\n  x: 5.67,\n  y: 5.67,\n  width: 36.67,\n  height: 36.67,\n  rx: 7.5,\n  ry: 7.5,\n  fill: \"#00adef\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  d: \"M5.67 22.33v12.5a7.5 7.5 0 007.5 7.5h21.66a7.5 7.5 0 007.5-7.5v-12.5z\",\n  fill: \"#3f3f3f\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  className: \"academy-logo_svg__cls-4\",\n  d: \"M24 31.29l11 4.35L24.22 40a.59.59 0 01-.44 0L13 35.64l11-4.35m0-.56a.42.42 0 00-.15 0l-11.4 4.5a.42.42 0 000 .77l11.1 4.44a1.15 1.15 0 00.85 0L35.53 36a.42.42 0 000-.77l-11.35-4.5a.42.42 0 00-.15 0z\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  d: \"M23.88 28.25l-11.4 4.5a.42.42 0 000 .77L23.58 38a1.15 1.15 0 00.85 0l11.1-4.44a.42.42 0 000-.77l-11.35-4.5a.42.42 0 00-.3-.04z\",\n  opacity: 0.5,\n  fill: \"#fff\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  d: \"M29.35 25.94a6.13 6.13 0 00-2-10.78 6 6 0 00-1.35-.23 6.13 6.13 0 00-4 11 .83.83 0 01.33.66v.83h-.23a.21.21 0 00-.21.21v2.71l1.94 1.77a1.1 1.1 0 001.11 1.1h1.24a1.1 1.1 0 001.09-1l2.2-1.85v-2.71a.21.21 0 00-.21-.21H29v-.84a.82.82 0 01.35-.66z\",\n  fill: \"#595757\",\n  opacity: 0.5\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  className: \"academy-logo_svg__cls-7\",\n  d: \"M30.14 19.25a6.18 6.18 0 00-4.43-5.73 6 6 0 00-1.34-.24 6.13 6.13 0 00-4 11 .83.83 0 01.33.66v3.48h6.7v-3.47a.82.82 0 01.32-.66 6.12 6.12 0 002.42-5.04z\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"g\", {\n  id: \"academy-logo_svg___Group_\",\n  \"data-name\": \"<Group>\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  id: \"academy-logo_svg___Compound_Path_\",\n  \"data-name\": \"<Compound Path>\",\n  d: \"M21.8 22a2 2 0 01-1.46-1.39.88.88 0 01.23-.89.63.63 0 01.68-.07c.36.16.69 1 1 2a1.61 1.61 0 001.46-.22 2 2 0 01-.22-.38c-.26-.59-.2-1.18.13-1.4a.74.74 0 01.82 0 1.14 1.14 0 01.12 1.35 2 2 0 01-.22.38 1.61 1.61 0 001.47.21c.27-1 .59-1.81.95-2a.63.63 0 01.68.06.88.88 0 01.24.89 2 2 0 01-1.45 1.4 35 35 0 00-.72 3.93H25s.25-2 .66-3.79a2 2 0 01-1.66-.37 2 2 0 01-1.66.39c.43 1.74.69 3.75.69 3.78h-.48A34.81 34.81 0 0021.8 22zm5.2-2c-.18.08-.38.61-.58 1.33a1.41 1.41 0 00.83-.92.44.44 0 00-.07-.41h-.07zm-6.08 0a.44.44 0 00-.07.41 1.41 1.41 0 00.84.91c-.2-.71-.41-1.25-.59-1.32H21zm3-.08c-.1.07-.14.42 0 .81A1.5 1.5 0 0024 21a1.47 1.47 0 00.11-.21c.17-.39.13-.74 0-.81a.36.36 0 00-.16 0 .2.2 0 00-.09.02z\",\n  fill: \"#c9caca\"\n})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  id: \"academy-logo_svg___Path_\",\n  \"data-name\": \"<Path>\",\n  className: \"academy-logo_svg__cls-4\",\n  d: \"M27.83 28.7l-2.23 1.88h-3.31l-2-1.86V26a.21.21 0 01.21-.21h7.15a.21.21 0 01.21.21z\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  id: \"academy-logo_svg___Path_2\",\n  \"data-name\": \"<Path>\",\n  d: \"M24.53 31.6H23.3a1.1 1.1 0 01-1.11-1.1h3.44a1.1 1.1 0 01-1.1 1.1z\",\n  fill: \"#595757\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  id: \"academy-logo_svg___Rectangle_\",\n  \"data-name\": \"<Rectangle>\",\n  className: \"academy-logo_svg__cls-10\",\n  transform: \"rotate(179.78 24.03 26.556)\",\n  d: \"M20.24 26.29h7.58v.52h-7.58z\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  id: \"academy-logo_svg___Rectangle_2\",\n  \"data-name\": \"<Rectangle>\",\n  className: \"academy-logo_svg__cls-10\",\n  transform: \"rotate(179.78 24.032 27.501)\",\n  d: \"M20.25 27.24h7.58v.52h-7.58z\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  id: \"academy-logo_svg___Rectangle_3\",\n  \"data-name\": \"<Rectangle>\",\n  className: \"academy-logo_svg__cls-10\",\n  transform: \"rotate(179.78 24.035 28.446)\",\n  d: \"M20.25 28.19h7.58v.52h-7.58z\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"rect\", {\n  className: \"academy-logo_svg__cls-7\",\n  x: 31.57,\n  y: 13.67,\n  width: 0.62,\n  height: 2.36,\n  rx: 0.31,\n  ry: 0.31,\n  transform: \"rotate(60 31.876 14.852)\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"rect\", {\n  className: \"academy-logo_svg__cls-7\",\n  x: 28.24,\n  y: 10.34,\n  width: 0.62,\n  height: 2.36,\n  rx: 0.31,\n  ry: 0.31,\n  transform: \"rotate(30 28.55 11.53)\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"rect\", {\n  className: \"academy-logo_svg__cls-7\",\n  x: 23.7,\n  y: 9.13,\n  width: 0.62,\n  height: 2.36,\n  rx: 0.31,\n  ry: 0.31\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"rect\", {\n  className: \"academy-logo_svg__cls-7\",\n  x: 19.15,\n  y: 10.34,\n  width: 0.62,\n  height: 2.36,\n  rx: 0.31,\n  ry: 0.31,\n  transform: \"rotate(-30 19.455 11.513)\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"rect\", {\n  className: \"academy-logo_svg__cls-7\",\n  x: 15.82,\n  y: 13.67,\n  width: 0.62,\n  height: 2.36,\n  rx: 0.31,\n  ry: 0.31,\n  transform: \"rotate(-60 16.124 14.852)\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  d: \"M18.7 20.23a.83.83 0 01-.83-.83A6.14 6.14 0 0124 13.27a.83.83 0 010 1.67 4.47 4.47 0 00-4.47 4.47.83.83 0 01-.83.82z\",\n  fill: \"#fff\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  fill: \"none\",\n  d: \"M0 0h48v48H0z\"\n}));\n\nfunction SvgAcademyLogo(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"svg\", _extends({\n    viewBox: \"0 0 48 48\"\n  }, props), _ref, _ref2);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SvgAcademyLogo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3RhdGljL2FjYWRlbXktbG9nby5zdmc/Y2Q5NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBcUIsZ0RBQWdELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZSxHQUFHLHdDQUF3Qzs7QUFFNVI7O0FBRS9CLHdCQUF3QixtREFBbUIsNEJBQTRCLG1EQUFtQiwwQ0FBMEMsYUFBYSx5QkFBeUIsYUFBYSwwQkFBMEIsYUFBYTs7QUFFOU4seUJBQXlCLG1EQUFtQjtBQUM1QztBQUNBLENBQUMsZUFBZSxtREFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdCQUFnQixtREFBbUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdCQUFnQixtREFBbUI7QUFDcEM7QUFDQTtBQUNBLENBQUMsZ0JBQWdCLG1EQUFtQjtBQUNwQztBQUNBO0FBQ0EsQ0FBQyxnQkFBZ0IsbURBQW1CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0JBQWdCLG1EQUFtQjtBQUNwQztBQUNBO0FBQ0E7QUFDQSxDQUFDLGdCQUFnQixtREFBbUI7QUFDcEM7QUFDQTtBQUNBLENBQUMsZ0JBQWdCLG1EQUFtQjtBQUNwQztBQUNBO0FBQ0EsQ0FBQyxlQUFlLG1EQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsaUJBQWlCLG1EQUFtQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0JBQWdCLG1EQUFtQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0JBQWdCLG1EQUFtQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxnQkFBZ0IsbURBQW1CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdCQUFnQixtREFBbUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0JBQWdCLG1EQUFtQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxnQkFBZ0IsbURBQW1CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdCQUFnQixtREFBbUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdCQUFnQixtREFBbUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0JBQWdCLG1EQUFtQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxnQkFBZ0IsbURBQW1CO0FBQ3BDO0FBQ0E7QUFDQSxDQUFDLGdCQUFnQixtREFBbUI7QUFDcEM7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxzQkFBc0IsbURBQW1CO0FBQ3pDO0FBQ0EsR0FBRztBQUNIOztBQUVlLDZFQUFjIiwiZmlsZSI6Ii4vcHVibGljL3N0YXRpYy9hY2FkZW15LWxvZ28uc3ZnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbnZhciBfcmVmID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkZWZzXCIsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiwgbnVsbCwgXCIuYWNhZGVteS1sb2dvX3N2Z19fY2xzLTR7ZmlsbDojNzI3MTcxfS5hY2FkZW15LWxvZ29fc3ZnX19jbHMtN3tmaWxsOiNlZmVmZWZ9LmFjYWRlbXktbG9nb19zdmdfX2Nscy0xMHtmaWxsOiM5ZmEwYTB9XCIpKTtcblxudmFyIF9yZWYyID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgaWQ6IFwiYWNhZGVteS1sb2dvX3N2Z19fY29udGVudFwiXG59LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICB4OiA0LFxuICB5OiA0LFxuICB3aWR0aDogNDAsXG4gIGhlaWdodDogNDAsXG4gIHJ4OiA4LjMzLFxuICByeTogOC4zMyxcbiAgZmlsbDogXCIjZWJlYmViXCJcbn0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICB4OiA1LjY3LFxuICB5OiA1LjY3LFxuICB3aWR0aDogMzYuNjcsXG4gIGhlaWdodDogMzYuNjcsXG4gIHJ4OiA3LjUsXG4gIHJ5OiA3LjUsXG4gIGZpbGw6IFwiIzAwYWRlZlwiXG59KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNNS42NyAyMi4zM3YxMi41YTcuNSA3LjUgMCAwMDcuNSA3LjVoMjEuNjZhNy41IDcuNSAwIDAwNy41LTcuNXYtMTIuNXpcIixcbiAgZmlsbDogXCIjM2YzZjNmXCJcbn0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBjbGFzc05hbWU6IFwiYWNhZGVteS1sb2dvX3N2Z19fY2xzLTRcIixcbiAgZDogXCJNMjQgMzEuMjlsMTEgNC4zNUwyNC4yMiA0MGEuNTkuNTkgMCAwMS0uNDQgMEwxMyAzNS42NGwxMS00LjM1bTAtLjU2YS40Mi40MiAwIDAwLS4xNSAwbC0xMS40IDQuNWEuNDIuNDIgMCAwMDAgLjc3bDExLjEgNC40NGExLjE1IDEuMTUgMCAwMC44NSAwTDM1LjUzIDM2YS40Mi40MiAwIDAwMC0uNzdsLTExLjM1LTQuNWEuNDIuNDIgMCAwMC0uMTUgMHpcIlxufSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTIzLjg4IDI4LjI1bC0xMS40IDQuNWEuNDIuNDIgMCAwMDAgLjc3TDIzLjU4IDM4YTEuMTUgMS4xNSAwIDAwLjg1IDBsMTEuMS00LjQ0YS40Mi40MiAwIDAwMC0uNzdsLTExLjM1LTQuNWEuNDIuNDIgMCAwMC0uMy0uMDR6XCIsXG4gIG9wYWNpdHk6IDAuNSxcbiAgZmlsbDogXCIjZmZmXCJcbn0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk0yOS4zNSAyNS45NGE2LjEzIDYuMTMgMCAwMC0yLTEwLjc4IDYgNiAwIDAwLTEuMzUtLjIzIDYuMTMgNi4xMyAwIDAwLTQgMTEgLjgzLjgzIDAgMDEuMzMuNjZ2LjgzaC0uMjNhLjIxLjIxIDAgMDAtLjIxLjIxdjIuNzFsMS45NCAxLjc3YTEuMSAxLjEgMCAwMDEuMTEgMS4xaDEuMjRhMS4xIDEuMSAwIDAwMS4wOS0xbDIuMi0xLjg1di0yLjcxYS4yMS4yMSAwIDAwLS4yMS0uMjFIMjl2LS44NGEuODIuODIgMCAwMS4zNS0uNjZ6XCIsXG4gIGZpbGw6IFwiIzU5NTc1N1wiLFxuICBvcGFjaXR5OiAwLjVcbn0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBjbGFzc05hbWU6IFwiYWNhZGVteS1sb2dvX3N2Z19fY2xzLTdcIixcbiAgZDogXCJNMzAuMTQgMTkuMjVhNi4xOCA2LjE4IDAgMDAtNC40My01LjczIDYgNiAwIDAwLTEuMzQtLjI0IDYuMTMgNi4xMyAwIDAwLTQgMTEgLjgzLjgzIDAgMDEuMzMuNjZ2My40OGg2Ljd2LTMuNDdhLjgyLjgyIDAgMDEuMzItLjY2IDYuMTIgNi4xMiAwIDAwMi40Mi01LjA0elwiXG59KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgaWQ6IFwiYWNhZGVteS1sb2dvX3N2Z19fX0dyb3VwX1wiLFxuICBcImRhdGEtbmFtZVwiOiBcIjxHcm91cD5cIlxufSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgaWQ6IFwiYWNhZGVteS1sb2dvX3N2Z19fX0NvbXBvdW5kX1BhdGhfXCIsXG4gIFwiZGF0YS1uYW1lXCI6IFwiPENvbXBvdW5kIFBhdGg+XCIsXG4gIGQ6IFwiTTIxLjggMjJhMiAyIDAgMDEtMS40Ni0xLjM5Ljg4Ljg4IDAgMDEuMjMtLjg5LjYzLjYzIDAgMDEuNjgtLjA3Yy4zNi4xNi42OSAxIDEgMmExLjYxIDEuNjEgMCAwMDEuNDYtLjIyIDIgMiAwIDAxLS4yMi0uMzhjLS4yNi0uNTktLjItMS4xOC4xMy0xLjRhLjc0Ljc0IDAgMDEuODIgMCAxLjE0IDEuMTQgMCAwMS4xMiAxLjM1IDIgMiAwIDAxLS4yMi4zOCAxLjYxIDEuNjEgMCAwMDEuNDcuMjFjLjI3LTEgLjU5LTEuODEuOTUtMmEuNjMuNjMgMCAwMS42OC4wNi44OC44OCAwIDAxLjI0Ljg5IDIgMiAwIDAxLTEuNDUgMS40IDM1IDM1IDAgMDAtLjcyIDMuOTNIMjVzLjI1LTIgLjY2LTMuNzlhMiAyIDAgMDEtMS42Ni0uMzcgMiAyIDAgMDEtMS42Ni4zOWMuNDMgMS43NC42OSAzLjc1LjY5IDMuNzhoLS40OEEzNC44MSAzNC44MSAwIDAwMjEuOCAyMnptNS4yLTJjLS4xOC4wOC0uMzguNjEtLjU4IDEuMzNhMS40MSAxLjQxIDAgMDAuODMtLjkyLjQ0LjQ0IDAgMDAtLjA3LS40MWgtLjA3em0tNi4wOCAwYS40NC40NCAwIDAwLS4wNy40MSAxLjQxIDEuNDEgMCAwMC44NC45MWMtLjItLjcxLS40MS0xLjI1LS41OS0xLjMySDIxem0zLS4wOGMtLjEuMDctLjE0LjQyIDAgLjgxQTEuNSAxLjUgMCAwMDI0IDIxYTEuNDcgMS40NyAwIDAwLjExLS4yMWMuMTctLjM5LjEzLS43NCAwLS44MWEuMzYuMzYgMCAwMC0uMTYgMCAuMi4yIDAgMDAtLjA5LjAyelwiLFxuICBmaWxsOiBcIiNjOWNhY2FcIlxufSkpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBpZDogXCJhY2FkZW15LWxvZ29fc3ZnX19fUGF0aF9cIixcbiAgXCJkYXRhLW5hbWVcIjogXCI8UGF0aD5cIixcbiAgY2xhc3NOYW1lOiBcImFjYWRlbXktbG9nb19zdmdfX2Nscy00XCIsXG4gIGQ6IFwiTTI3LjgzIDI4LjdsLTIuMjMgMS44OGgtMy4zMWwtMi0xLjg2VjI2YS4yMS4yMSAwIDAxLjIxLS4yMWg3LjE1YS4yMS4yMSAwIDAxLjIxLjIxelwiXG59KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgaWQ6IFwiYWNhZGVteS1sb2dvX3N2Z19fX1BhdGhfMlwiLFxuICBcImRhdGEtbmFtZVwiOiBcIjxQYXRoPlwiLFxuICBkOiBcIk0yNC41MyAzMS42SDIzLjNhMS4xIDEuMSAwIDAxLTEuMTEtMS4xaDMuNDRhMS4xIDEuMSAwIDAxLTEuMSAxLjF6XCIsXG4gIGZpbGw6IFwiIzU5NTc1N1wiXG59KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgaWQ6IFwiYWNhZGVteS1sb2dvX3N2Z19fX1JlY3RhbmdsZV9cIixcbiAgXCJkYXRhLW5hbWVcIjogXCI8UmVjdGFuZ2xlPlwiLFxuICBjbGFzc05hbWU6IFwiYWNhZGVteS1sb2dvX3N2Z19fY2xzLTEwXCIsXG4gIHRyYW5zZm9ybTogXCJyb3RhdGUoMTc5Ljc4IDI0LjAzIDI2LjU1NilcIixcbiAgZDogXCJNMjAuMjQgMjYuMjloNy41OHYuNTJoLTcuNTh6XCJcbn0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBpZDogXCJhY2FkZW15LWxvZ29fc3ZnX19fUmVjdGFuZ2xlXzJcIixcbiAgXCJkYXRhLW5hbWVcIjogXCI8UmVjdGFuZ2xlPlwiLFxuICBjbGFzc05hbWU6IFwiYWNhZGVteS1sb2dvX3N2Z19fY2xzLTEwXCIsXG4gIHRyYW5zZm9ybTogXCJyb3RhdGUoMTc5Ljc4IDI0LjAzMiAyNy41MDEpXCIsXG4gIGQ6IFwiTTIwLjI1IDI3LjI0aDcuNTh2LjUyaC03LjU4elwiXG59KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgaWQ6IFwiYWNhZGVteS1sb2dvX3N2Z19fX1JlY3RhbmdsZV8zXCIsXG4gIFwiZGF0YS1uYW1lXCI6IFwiPFJlY3RhbmdsZT5cIixcbiAgY2xhc3NOYW1lOiBcImFjYWRlbXktbG9nb19zdmdfX2Nscy0xMFwiLFxuICB0cmFuc2Zvcm06IFwicm90YXRlKDE3OS43OCAyNC4wMzUgMjguNDQ2KVwiLFxuICBkOiBcIk0yMC4yNSAyOC4xOWg3LjU4di41MmgtNy41OHpcIlxufSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gIGNsYXNzTmFtZTogXCJhY2FkZW15LWxvZ29fc3ZnX19jbHMtN1wiLFxuICB4OiAzMS41NyxcbiAgeTogMTMuNjcsXG4gIHdpZHRoOiAwLjYyLFxuICBoZWlnaHQ6IDIuMzYsXG4gIHJ4OiAwLjMxLFxuICByeTogMC4zMSxcbiAgdHJhbnNmb3JtOiBcInJvdGF0ZSg2MCAzMS44NzYgMTQuODUyKVwiXG59KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgY2xhc3NOYW1lOiBcImFjYWRlbXktbG9nb19zdmdfX2Nscy03XCIsXG4gIHg6IDI4LjI0LFxuICB5OiAxMC4zNCxcbiAgd2lkdGg6IDAuNjIsXG4gIGhlaWdodDogMi4zNixcbiAgcng6IDAuMzEsXG4gIHJ5OiAwLjMxLFxuICB0cmFuc2Zvcm06IFwicm90YXRlKDMwIDI4LjU1IDExLjUzKVwiXG59KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgY2xhc3NOYW1lOiBcImFjYWRlbXktbG9nb19zdmdfX2Nscy03XCIsXG4gIHg6IDIzLjcsXG4gIHk6IDkuMTMsXG4gIHdpZHRoOiAwLjYyLFxuICBoZWlnaHQ6IDIuMzYsXG4gIHJ4OiAwLjMxLFxuICByeTogMC4zMVxufSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gIGNsYXNzTmFtZTogXCJhY2FkZW15LWxvZ29fc3ZnX19jbHMtN1wiLFxuICB4OiAxOS4xNSxcbiAgeTogMTAuMzQsXG4gIHdpZHRoOiAwLjYyLFxuICBoZWlnaHQ6IDIuMzYsXG4gIHJ4OiAwLjMxLFxuICByeTogMC4zMSxcbiAgdHJhbnNmb3JtOiBcInJvdGF0ZSgtMzAgMTkuNDU1IDExLjUxMylcIlxufSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gIGNsYXNzTmFtZTogXCJhY2FkZW15LWxvZ29fc3ZnX19jbHMtN1wiLFxuICB4OiAxNS44MixcbiAgeTogMTMuNjcsXG4gIHdpZHRoOiAwLjYyLFxuICBoZWlnaHQ6IDIuMzYsXG4gIHJ4OiAwLjMxLFxuICByeTogMC4zMSxcbiAgdHJhbnNmb3JtOiBcInJvdGF0ZSgtNjAgMTYuMTI0IDE0Ljg1MilcIlxufSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE4LjcgMjAuMjNhLjgzLjgzIDAgMDEtLjgzLS44M0E2LjE0IDYuMTQgMCAwMTI0IDEzLjI3YS44My44MyAwIDAxMCAxLjY3IDQuNDcgNC40NyAwIDAwLTQuNDcgNC40Ny44My44MyAwIDAxLS44My44MnpcIixcbiAgZmlsbDogXCIjZmZmXCJcbn0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBmaWxsOiBcIm5vbmVcIixcbiAgZDogXCJNMCAwaDQ4djQ4SDB6XCJcbn0pKTtcblxuZnVuY3Rpb24gU3ZnQWNhZGVteUxvZ28ocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB2aWV3Qm94OiBcIjAgMCA0OCA0OFwiXG4gIH0sIHByb3BzKSwgX3JlZiwgX3JlZjIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdBY2FkZW15TG9nbzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/static/academy-logo.svg\n");

/***/ }),

/***/ "./styles/components/avatar.module.scss":
/*!**********************************************!*\
  !*** ./styles/components/avatar.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"avatarSm\": \"avatar_avatarSm__479-1\",\n\t\"avatarMl\": \"avatar_avatarMl__nQbe1\",\n\t\"avatarLg\": \"avatar_avatarLg__1VryI\",\n\t\"avatarXl\": \"avatar_avatarXl__3pcip\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvY29tcG9uZW50cy9hdmF0YXIubW9kdWxlLnNjc3M/MTdmNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3N0eWxlcy9jb21wb25lbnRzL2F2YXRhci5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImF2YXRhclNtXCI6IFwiYXZhdGFyX2F2YXRhclNtX180NzktMVwiLFxuXHRcImF2YXRhck1sXCI6IFwiYXZhdGFyX2F2YXRhck1sX19uUWJlMVwiLFxuXHRcImF2YXRhckxnXCI6IFwiYXZhdGFyX2F2YXRhckxnX18xVnJ5SVwiLFxuXHRcImF2YXRhclhsXCI6IFwiYXZhdGFyX2F2YXRhclhsX18zcGNpcFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/components/avatar.module.scss\n");

/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9zdHlsZXMuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/styles.scss\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiP2I2OTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core\n");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Container\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIj8wODJmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Container\n");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CssBaseline\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiP2U2N2EiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/CssBaseline\n");

/***/ }),

/***/ "@material-ui/icons/Language":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Language" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Language\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGFuZ3VhZ2VcIj8yMGViIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9pY29ucy9MYW5ndWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9MYW5ndWFnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Language\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-headroom":
/*!*********************************!*\
  !*** external "react-headroom" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-headroom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1oZWFkcm9vbVwiP2FkNTMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaGVhZHJvb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1oZWFkcm9vbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-headroom\n");

/***/ })

/******/ });