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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ClassInfoWrapper/ClassInfoWrapper.js":
/*!*********************************************************!*\
  !*** ./components/ClassInfoWrapper/ClassInfoWrapper.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ClassInfoWrapper_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClassInfoWrapper.module.scss */ \"./components/ClassInfoWrapper/ClassInfoWrapper.module.scss\");\n/* harmony import */ var _ClassInfoWrapper_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ClassInfoWrapper_module_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_components_tag_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/components/tag.module.scss */ \"./styles/components/tag.module.scss\");\n/* harmony import */ var _styles_components_tag_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_tag_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nconst ClassInfoWrapper = () => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], null, __jsx(\"div\", {\n    className: _ClassInfoWrapper_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.classTitleWrapper\n  }, __jsx(\"div\", {\n    className: _ClassInfoWrapper_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.title\n  }, \"How to use Academy Web\"), __jsx(\"ul\", null, __jsx(\"li\", {\n    className: _ClassInfoWrapper_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.viewer\n  }, \"716 \\u89C0\\u770B\"), __jsx(\"li\", null, __jsx(\"span\", {\n    className: _styles_components_tag_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tagBlue\n  }, \"\\u521D\\u5B78\")))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClassInfoWrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NsYXNzSW5mb1dyYXBwZXIvQ2xhc3NJbmZvV3JhcHBlci5qcz82YzBjIl0sIm5hbWVzIjpbIkNsYXNzSW5mb1dyYXBwZXIiLCJzdHlsZXMiLCJjbGFzc1RpdGxlV3JhcHBlciIsInRpdGxlIiwidmlld2VyIiwidGFnU3R5bGVzIiwidGFnQmx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsZ0JBQWdCLEdBQUcsTUFBTTtBQUM3QixTQUNFLE1BQUMsOENBQUQsUUFDRTtBQUFLLGFBQVMsRUFBRUMsb0VBQU0sQ0FBQ0M7QUFBdkIsS0FDRTtBQUFLLGFBQVMsRUFBRUQsb0VBQU0sQ0FBQ0U7QUFBdkIsOEJBREYsRUFFRSxrQkFDRTtBQUFJLGFBQVMsRUFBRUYsb0VBQU0sQ0FBQ0c7QUFBdEIsd0JBREYsRUFFRSxrQkFDRTtBQUFNLGFBQVMsRUFBRUMseUVBQVMsQ0FBQ0M7QUFBM0Isb0JBREYsQ0FGRixDQUZGLENBREYsQ0FERjtBQWFELENBZEQ7O0FBZWVOLCtFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DbGFzc0luZm9XcmFwcGVyL0NsYXNzSW5mb1dyYXBwZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2xhc3NJbmZvV3JhcHBlci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgdGFnU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9jb21wb25lbnRzL3RhZy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENsYXNzSW5mb1dyYXBwZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jbGFzc1RpdGxlV3JhcHBlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkhvdyB0byB1c2UgQWNhZGVteSBXZWI8L2Rpdj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy52aWV3ZXJ9PjcxNiDop4DnnIs8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dGFnU3R5bGVzLnRhZ0JsdWV9PuWIneWtuDwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDbGFzc0luZm9XcmFwcGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ClassInfoWrapper/ClassInfoWrapper.js\n");

/***/ }),

/***/ "./components/ClassInfoWrapper/ClassInfoWrapper.module.scss":
/*!******************************************************************!*\
  !*** ./components/ClassInfoWrapper/ClassInfoWrapper.module.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"classTitleWrapper\": \"ClassInfoWrapper_classTitleWrapper__jneRj\",\n\t\"title\": \"ClassInfoWrapper_title__235Tx\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NsYXNzSW5mb1dyYXBwZXIvQ2xhc3NJbmZvV3JhcHBlci5tb2R1bGUuc2Nzcz9iODM4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NsYXNzSW5mb1dyYXBwZXIvQ2xhc3NJbmZvV3JhcHBlci5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNsYXNzVGl0bGVXcmFwcGVyXCI6IFwiQ2xhc3NJbmZvV3JhcHBlcl9jbGFzc1RpdGxlV3JhcHBlcl9fam5lUmpcIixcblx0XCJ0aXRsZVwiOiBcIkNsYXNzSW5mb1dyYXBwZXJfdGl0bGVfXzIzNVR4XCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ClassInfoWrapper/ClassInfoWrapper.module.scss\n");

/***/ }),

/***/ "./components/CommentLayout/CommentLayout.js":
/*!***************************************************!*\
  !*** ./components/CommentLayout/CommentLayout.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CommentLayout_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentLayout.module.scss */ \"./components/CommentLayout/CommentLayout.module.scss\");\n/* harmony import */ var _CommentLayout_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_CommentLayout_module_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CommentList_CommentList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CommentList/CommentList */ \"./components/CommentList/CommentList.js\");\n/* harmony import */ var _CommentList_NewComment_NewComment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CommentList/NewComment/NewComment */ \"./components/CommentList/NewComment/NewComment.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context */ \"./components/context.js\");\n/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ramda */ \"ramda\");\n/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Icon/Icon */ \"./components/Icon/Icon.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\nconst CommentLayout = () => {\n  const contextValue = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  const {\n    discussionList,\n    replyDiscussionList\n  } = contextValue;\n  const {\n    0: showSearchBar,\n    1: setShowSearchBar\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    0: showComment,\n    1: setShowComment\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    0: searchInput,\n    1: setSearchInput\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n\n  const searchHandleChange = event => {\n    setSearchInput(event.target.value);\n    const searchData = [...discussionList, ...replyDiscussionList];\n    ramda__WEBPACK_IMPORTED_MODULE_5__[\"filter\"](searchInput => searchInput, searchData);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], null, __jsx(\"div\", {\n    className: _CommentLayout_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.commentLayout\n  }, __jsx(\"div\", {\n    className: _CommentLayout_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.commentLayoutInner\n  }, __jsx(\"div\", {\n    className: _CommentLayout_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.WrapperTopBox\n  }, __jsx(\"div\", {\n    className: _CommentLayout_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.wrapperTitleBox\n  }, __jsx(\"div\", {\n    className: _CommentLayout_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.title\n  }, __jsx(\"span\", null, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__[\"IconFeedBack\"], null)), \"\\u554F\\u984C\\u548C\\u8A0E\\u8AD6\"), __jsx(\"div\", {\n    className: _CommentLayout_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.searchBox\n  }, showSearchBar ? __jsx(\"input\", {\n    type: \"text\",\n    placeholder: \"\\u641C\\u5C0B\\u8A0E\\u8AD6\",\n    value: searchInput,\n    onChange: searchHandleChange,\n    onKeyPress: searchHandleChange\n  }) : null, __jsx(\"span\", {\n    onClick: () => setShowSearchBar(!showSearchBar)\n  }, showSearchBar ? __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__[\"IconClose\"], null) : __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__[\"IconSearch\"], null)))), __jsx(\"div\", {\n    className: _CommentLayout_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.addNew\n  }, __jsx(\"div\", {\n    className: _CommentLayout_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.addNewBox\n  }, __jsx(\"span\", {\n    className: _CommentLayout_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.text,\n    onClick: () => setShowComment(!showComment)\n  }, __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__[\"IconAdd\"], null), \"\\u65B0\\u589E\\u8A0E\\u8AD6\")), showComment ? __jsx(_CommentList_NewComment_NewComment__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    setShowComment: setShowComment\n  }) : null), __jsx(\"div\", {\n    className: _CommentLayout_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.commentList\n  }, __jsx(\"div\", {\n    className: _CommentLayout_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.totalComment\n  }, `${discussionList.length}個討論`))), __jsx(\"div\", {\n    className: _CommentLayout_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.commentContainer\n  }, __jsx(_CommentList_CommentList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentLayout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1lbnRMYXlvdXQvQ29tbWVudExheW91dC5qcz83ZmI3Il0sIm5hbWVzIjpbIkNvbW1lbnRMYXlvdXQiLCJjb250ZXh0VmFsdWUiLCJ1c2VDb250ZXh0IiwiY29udGV4dCIsImRpc2N1c3Npb25MaXN0IiwicmVwbHlEaXNjdXNzaW9uTGlzdCIsInNob3dTZWFyY2hCYXIiLCJzZXRTaG93U2VhcmNoQmFyIiwidXNlU3RhdGUiLCJzaG93Q29tbWVudCIsInNldFNob3dDb21tZW50Iiwic2VhcmNoSW5wdXQiLCJzZXRTZWFyY2hJbnB1dCIsInNlYXJjaEhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJzZWFyY2hEYXRhIiwiUiIsInN0eWxlcyIsImNvbW1lbnRMYXlvdXQiLCJjb21tZW50TGF5b3V0SW5uZXIiLCJXcmFwcGVyVG9wQm94Iiwid3JhcHBlclRpdGxlQm94IiwidGl0bGUiLCJzZWFyY2hCb3giLCJhZGROZXciLCJhZGROZXdCb3giLCJ0ZXh0IiwiY29tbWVudExpc3QiLCJ0b3RhbENvbW1lbnQiLCJsZW5ndGgiLCJjb21tZW50Q29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUcsTUFBTTtBQUMxQixRQUFNQyxZQUFZLEdBQUdDLHdEQUFVLENBQUNDLGdEQUFELENBQS9CO0FBQ0EsUUFBTTtBQUFFQyxrQkFBRjtBQUFrQkM7QUFBbEIsTUFBMENKLFlBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLGFBQUQ7QUFBQSxPQUFnQkM7QUFBaEIsTUFBb0NDLHNEQUFRLENBQUMsS0FBRCxDQUFsRDtBQUNBLFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0Ysc0RBQVEsQ0FBQyxLQUFELENBQTlDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDSixzREFBUSxDQUFDLEVBQUQsQ0FBOUM7O0FBRUEsUUFBTUssa0JBQWtCLEdBQUlDLEtBQUQsSUFBVztBQUNwQ0Ysa0JBQWMsQ0FBQ0UsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBZDtBQUNBLFVBQU1DLFVBQVUsR0FBRyxDQUFDLEdBQUdiLGNBQUosRUFBb0IsR0FBR0MsbUJBQXZCLENBQW5CO0FBQ0FhLGdEQUFBLENBQVVQLFdBQUQsSUFBaUJBLFdBQTFCLEVBQXVDTSxVQUF2QztBQUNELEdBSkQ7O0FBTUEsU0FDRSxNQUFDLDhDQUFELFFBQ0U7QUFBSyxhQUFTLEVBQUVFLGlFQUFNLENBQUNDO0FBQXZCLEtBQ0U7QUFBSyxhQUFTLEVBQUVELGlFQUFNLENBQUNFO0FBQXZCLEtBQ0U7QUFBSyxhQUFTLEVBQUVGLGlFQUFNLENBQUNHO0FBQXZCLEtBQ0U7QUFBSyxhQUFTLEVBQUVILGlFQUFNLENBQUNJO0FBQXZCLEtBQ0U7QUFBSyxhQUFTLEVBQUVKLGlFQUFNLENBQUNLO0FBQXZCLEtBQ0Usb0JBQ0UsTUFBQyx1REFBRCxPQURGLENBREYsbUNBREYsRUFPRTtBQUFLLGFBQVMsRUFBRUwsaUVBQU0sQ0FBQ007QUFBdkIsS0FDR25CLGFBQWEsR0FDWjtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsZUFBVyxFQUFDLDBCQUZkO0FBR0UsU0FBSyxFQUFFSyxXQUhUO0FBSUUsWUFBUSxFQUFFRSxrQkFKWjtBQUtFLGNBQVUsRUFBRUE7QUFMZCxJQURZLEdBUVYsSUFUTixFQVVFO0FBQU0sV0FBTyxFQUFFLE1BQU1OLGdCQUFnQixDQUFDLENBQUNELGFBQUY7QUFBckMsS0FDR0EsYUFBYSxHQUFHLE1BQUMsb0RBQUQsT0FBSCxHQUFtQixNQUFDLHFEQUFELE9BRG5DLENBVkYsQ0FQRixDQURGLEVBdUJFO0FBQUssYUFBUyxFQUFFYSxpRUFBTSxDQUFDTztBQUF2QixLQUNFO0FBQUssYUFBUyxFQUFFUCxpRUFBTSxDQUFDUTtBQUF2QixLQUNFO0FBQ0UsYUFBUyxFQUFFUixpRUFBTSxDQUFDUyxJQURwQjtBQUVFLFdBQU8sRUFBRSxNQUFNbEIsY0FBYyxDQUFDLENBQUNELFdBQUY7QUFGL0IsS0FJRSxNQUFDLGtEQUFELE9BSkYsNkJBREYsQ0FERixFQVVHQSxXQUFXLEdBQ1YsTUFBQywwRUFBRDtBQUFZLGtCQUFjLEVBQUVDO0FBQTVCLElBRFUsR0FFUixJQVpOLENBdkJGLEVBcUNFO0FBQUssYUFBUyxFQUFFUyxpRUFBTSxDQUFDVTtBQUF2QixLQUNFO0FBQ0UsYUFBUyxFQUFFVixpRUFBTSxDQUFDVztBQURwQixLQUVHLEdBQUUxQixjQUFjLENBQUMyQixNQUFPLEtBRjNCLENBREYsQ0FyQ0YsQ0FERixFQTRDRTtBQUFLLGFBQVMsRUFBRVosaUVBQU0sQ0FBQ2E7QUFBdkIsS0FDRSxNQUFDLGdFQUFELE9BREYsQ0E1Q0YsQ0FERixDQURGLENBREY7QUFzREQsQ0FuRUQ7O0FBcUVlaEMsNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1lbnRMYXlvdXQvQ29tbWVudExheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db21tZW50TGF5b3V0Lm1vZHVsZS5zY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tbWVudExpc3QgZnJvbSAnLi4vQ29tbWVudExpc3QvQ29tbWVudExpc3QnO1xuaW1wb3J0IE5ld0NvbW1lbnQgZnJvbSAnLi4vQ29tbWVudExpc3QvTmV3Q29tbWVudC9OZXdDb21tZW50JztcbmltcG9ydCBjb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSc7XG5pbXBvcnQgeyBJY29uQWRkLCBJY29uQ2xvc2UsIEljb25TZWFyY2gsIEljb25GZWVkQmFjayB9IGZyb20gJy4uL0ljb24vSWNvbic7XG5cbmNvbnN0IENvbW1lbnRMYXlvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRleHRWYWx1ZSA9IHVzZUNvbnRleHQoY29udGV4dCk7XG4gIGNvbnN0IHsgZGlzY3Vzc2lvbkxpc3QsIHJlcGx5RGlzY3Vzc2lvbkxpc3QgfSA9IGNvbnRleHRWYWx1ZTtcbiAgY29uc3QgW3Nob3dTZWFyY2hCYXIsIHNldFNob3dTZWFyY2hCYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd0NvbW1lbnQsIHNldFNob3dDb21tZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlYXJjaElucHV0LCBzZXRTZWFyY2hJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3Qgc2VhcmNoSGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0U2VhcmNoSW5wdXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zdCBzZWFyY2hEYXRhID0gWy4uLmRpc2N1c3Npb25MaXN0LCAuLi5yZXBseURpc2N1c3Npb25MaXN0XTtcbiAgICBSLmZpbHRlcigoc2VhcmNoSW5wdXQpID0+IHNlYXJjaElucHV0LCBzZWFyY2hEYXRhKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudExheW91dH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudExheW91dElubmVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLldyYXBwZXJUb3BCb3h9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyVGl0bGVCb3h9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxJY29uRmVlZEJhY2sgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAg5ZWP6aGM5ZKM6KiO6KuWXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEJveH0+XG4gICAgICAgICAgICAgICAge3Nob3dTZWFyY2hCYXIgPyAoXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuaQnOWwi+iojuirllwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NlYXJjaEhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17c2VhcmNoSGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93U2VhcmNoQmFyKCFzaG93U2VhcmNoQmFyKX0+XG4gICAgICAgICAgICAgICAgICB7c2hvd1NlYXJjaEJhciA/IDxJY29uQ2xvc2UgLz4gOiA8SWNvblNlYXJjaCAvPn1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZE5ld30+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkTmV3Qm94fT5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dDb21tZW50KCFzaG93Q29tbWVudCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEljb25BZGQgLz5cbiAgICAgICAgICAgICAgICAgIOaWsOWinuiojuirllxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHtzaG93Q29tbWVudCA/IChcbiAgICAgICAgICAgICAgICA8TmV3Q29tbWVudCBzZXRTaG93Q29tbWVudD17c2V0U2hvd0NvbW1lbnR9IC8+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRMaXN0fT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRvdGFsQ29tbWVudH1cbiAgICAgICAgICAgICAgPntgJHtkaXNjdXNzaW9uTGlzdC5sZW5ndGh95YCL6KiO6KuWYH08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudENvbnRhaW5lcn0+XG4gICAgICAgICAgICA8Q29tbWVudExpc3QgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CommentLayout/CommentLayout.js\n");

/***/ }),

/***/ "./components/CommentLayout/CommentLayout.module.scss":
/*!************************************************************!*\
  !*** ./components/CommentLayout/CommentLayout.module.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"commentLayout\": \"CommentLayout_commentLayout__kmX9r\",\n\t\"commentLayoutInner\": \"CommentLayout_commentLayoutInner__V1euk\",\n\t\"WrapperTopBox\": \"CommentLayout_WrapperTopBox__1J881\",\n\t\"wrapperTitleBox\": \"CommentLayout_wrapperTitleBox__3zb-F\",\n\t\"title\": \"CommentLayout_title__3WChp\",\n\t\"searchBox\": \"CommentLayout_searchBox__c_II4\",\n\t\"addNew\": \"CommentLayout_addNew__1bYkP\",\n\t\"addNewBox\": \"CommentLayout_addNewBox__1Kmjj\",\n\t\"text\": \"CommentLayout_text__TIc2n\",\n\t\"commentList\": \"CommentLayout_commentList__1-Hfd\",\n\t\"totalComment\": \"CommentLayout_totalComment__2ZsDX\",\n\t\"commentContainer\": \"CommentLayout_commentContainer__aLIsR\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1lbnRMYXlvdXQvQ29tbWVudExheW91dC5tb2R1bGUuc2Nzcz8zYzYxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29tbWVudExheW91dC9Db21tZW50TGF5b3V0Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29tbWVudExheW91dFwiOiBcIkNvbW1lbnRMYXlvdXRfY29tbWVudExheW91dF9fa21YOXJcIixcblx0XCJjb21tZW50TGF5b3V0SW5uZXJcIjogXCJDb21tZW50TGF5b3V0X2NvbW1lbnRMYXlvdXRJbm5lcl9fVjFldWtcIixcblx0XCJXcmFwcGVyVG9wQm94XCI6IFwiQ29tbWVudExheW91dF9XcmFwcGVyVG9wQm94X18xSjg4MVwiLFxuXHRcIndyYXBwZXJUaXRsZUJveFwiOiBcIkNvbW1lbnRMYXlvdXRfd3JhcHBlclRpdGxlQm94X18zemItRlwiLFxuXHRcInRpdGxlXCI6IFwiQ29tbWVudExheW91dF90aXRsZV9fM1dDaHBcIixcblx0XCJzZWFyY2hCb3hcIjogXCJDb21tZW50TGF5b3V0X3NlYXJjaEJveF9fY19JSTRcIixcblx0XCJhZGROZXdcIjogXCJDb21tZW50TGF5b3V0X2FkZE5ld19fMWJZa1BcIixcblx0XCJhZGROZXdCb3hcIjogXCJDb21tZW50TGF5b3V0X2FkZE5ld0JveF9fMUttampcIixcblx0XCJ0ZXh0XCI6IFwiQ29tbWVudExheW91dF90ZXh0X19USWMyblwiLFxuXHRcImNvbW1lbnRMaXN0XCI6IFwiQ29tbWVudExheW91dF9jb21tZW50TGlzdF9fMS1IZmRcIixcblx0XCJ0b3RhbENvbW1lbnRcIjogXCJDb21tZW50TGF5b3V0X3RvdGFsQ29tbWVudF9fMlpzRFhcIixcblx0XCJjb21tZW50Q29udGFpbmVyXCI6IFwiQ29tbWVudExheW91dF9jb21tZW50Q29udGFpbmVyX19hTElzUlwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CommentLayout/CommentLayout.module.scss\n");

/***/ }),

/***/ "./components/CommentList/CommentItem/CommentItem.js":
/*!***********************************************************!*\
  !*** ./components/CommentList/CommentItem/CommentItem.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../styles/components/avatar.module.scss */ \"./styles/components/avatar.module.scss\");\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_components_common_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/components/common.module.scss */ \"./styles/components/common.module.scss\");\n/* harmony import */ var _styles_components_common_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_common_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_components_commentDiscuss_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/components/commentDiscuss.module.scss */ \"./styles/components/commentDiscuss.module.scss\");\n/* harmony import */ var _styles_components_commentDiscuss_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_commentDiscuss_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\nconst CommentItem = ({\n  discussion,\n  deletedCommentItem,\n  index\n}) => {\n  const {\n    record\n  } = discussion;\n  const {\n    name,\n    content,\n    date,\n    goodCount\n  } = record;\n  const {\n    0: clickedAddOne,\n    1: setClickedAddOne\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false);\n  const {\n    0: clickedGoodCount,\n    1: setClickedGoodCount\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(goodCount);\n  const {\n    0: showEditInput,\n    1: setShowEditInput\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false);\n  const {\n    0: editValue,\n    1: setEditValue\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(content);\n\n  const clickedLattice = () => {\n    !clickedAddOne ? setClickedGoodCount(clickedGoodCount + 1) : setClickedGoodCount(clickedGoodCount - 1);\n    setClickedAddOne(!clickedAddOne);\n  };\n\n  const handleEditChange = event => {\n    setEditValue(event.target.value);\n  };\n\n  const handleSaveChange = () => {\n    setShowEditInput(!showEditInput);\n    setEditValue(editValue);\n  };\n\n  return __jsx(\"div\", {\n    className: _styles_components_commentDiscuss_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.comment\n  }, __jsx(\"div\", {\n    className: _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.avatarMl\n  }, name.substring(0, 1)), __jsx(\"div\", {\n    className: _styles_components_commentDiscuss_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.commentWrapper\n  }, __jsx(\"div\", {\n    className: _styles_components_commentDiscuss_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.commentBox\n  }, __jsx(\"div\", {\n    className: _styles_components_commentDiscuss_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.nameText\n  }, __jsx(\"div\", null, name), __jsx(\"div\", null, date))), __jsx(\"div\", {\n    className: _styles_components_commentDiscuss_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.commentBox\n  }, __jsx(\"div\", {\n    className: _styles_components_commentDiscuss_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.contentBox\n  }, showEditInput ? __jsx(\"input\", {\n    className: _styles_components_common_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.input,\n    type: \"text\",\n    value: editValue,\n    onChange: handleEditChange\n  }) : __jsx(\"span\", {\n    className: _styles_components_commentDiscuss_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.commentContent\n  }, content)), __jsx(\"div\", {\n    className: _styles_components_commentDiscuss_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rightContent\n  }, __jsx(\"span\", {\n    className: clickedAddOne ? _styles_components_commentDiscuss_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.clicked : _styles_components_commentDiscuss_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.lattice,\n    onClick: clickedLattice\n  }, \"+1\"), __jsx(\"span\", {\n    className: _styles_components_commentDiscuss_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.number\n  }, clickedGoodCount)), __jsx(\"div\", {\n    className: _styles_components_commentDiscuss_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.editDelete\n  }, __jsx(\"div\", {\n    onClick: () => setShowEditInput(!showEditInput)\n  }, `${showEditInput ? '取消' : '編輯'}`), showEditInput ? __jsx(\"div\", {\n    onClick: handleSaveChange\n  }, \"\\u5132\\u5B58\") : __jsx(\"div\", {\n    onClick: () => deletedCommentItem(index)\n  }, \"\\u522A\\u9664\")))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentItem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1lbnRMaXN0L0NvbW1lbnRJdGVtL0NvbW1lbnRJdGVtLmpzPzJkODIiXSwibmFtZXMiOlsiQ29tbWVudEl0ZW0iLCJkaXNjdXNzaW9uIiwiZGVsZXRlZENvbW1lbnRJdGVtIiwiaW5kZXgiLCJyZWNvcmQiLCJuYW1lIiwiY29udGVudCIsImRhdGUiLCJnb29kQ291bnQiLCJjbGlja2VkQWRkT25lIiwic2V0Q2xpY2tlZEFkZE9uZSIsInVzZVN0YXRlIiwiY2xpY2tlZEdvb2RDb3VudCIsInNldENsaWNrZWRHb29kQ291bnQiLCJzaG93RWRpdElucHV0Iiwic2V0U2hvd0VkaXRJbnB1dCIsImVkaXRWYWx1ZSIsInNldEVkaXRWYWx1ZSIsImNsaWNrZWRMYXR0aWNlIiwiaGFuZGxlRWRpdENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTYXZlQ2hhbmdlIiwiY29tbWVudERpc2N1c3NTdHlsZXMiLCJjb21tZW50IiwiYXZhdGFyU3R5bGUiLCJhdmF0YXJNbCIsInN1YnN0cmluZyIsImNvbW1lbnRXcmFwcGVyIiwiY29tbWVudEJveCIsIm5hbWVUZXh0IiwiY29udGVudEJveCIsImNvbW1vblN0eWxlIiwiaW5wdXQiLCJjb21tZW50Q29udGVudCIsInJpZ2h0Q29udGVudCIsImNsaWNrZWQiLCJsYXR0aWNlIiwibnVtYmVyIiwiZWRpdERlbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFdBQVcsR0FBRyxDQUFDO0FBQUVDLFlBQUY7QUFBY0Msb0JBQWQ7QUFBa0NDO0FBQWxDLENBQUQsS0FBK0M7QUFDakUsUUFBTTtBQUFFQztBQUFGLE1BQWFILFVBQW5CO0FBQ0EsUUFBTTtBQUFFSSxRQUFGO0FBQVFDLFdBQVI7QUFBaUJDLFFBQWpCO0FBQXVCQztBQUF2QixNQUFxQ0osTUFBM0M7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssYUFBRDtBQUFBLE9BQWdCQztBQUFoQixNQUFvQ0Msc0RBQVEsQ0FBQyxLQUFELENBQWxEO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLGdCQUFEO0FBQUEsT0FBbUJDO0FBQW5CLE1BQTBDRixzREFBUSxDQUFDSCxTQUFELENBQXhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNNLGFBQUQ7QUFBQSxPQUFnQkM7QUFBaEIsTUFBb0NKLHNEQUFRLENBQUMsS0FBRCxDQUFsRDtBQUNBLFFBQU07QUFBQSxPQUFDSyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0Qk4sc0RBQVEsQ0FBQ0wsT0FBRCxDQUExQzs7QUFFQSxRQUFNWSxjQUFjLEdBQUcsTUFBTTtBQUMzQixLQUFDVCxhQUFELEdBQ0lJLG1CQUFtQixDQUFDRCxnQkFBZ0IsR0FBRyxDQUFwQixDQUR2QixHQUVJQyxtQkFBbUIsQ0FBQ0QsZ0JBQWdCLEdBQUcsQ0FBcEIsQ0FGdkI7QUFHQUYsb0JBQWdCLENBQUMsQ0FBQ0QsYUFBRixDQUFoQjtBQUNELEdBTEQ7O0FBTUEsUUFBTVUsZ0JBQWdCLEdBQUlDLEtBQUQsSUFBVztBQUNsQ0gsZ0JBQVksQ0FBQ0csS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBWjtBQUNELEdBRkQ7O0FBSUEsUUFBTUMsZ0JBQWdCLEdBQUcsTUFBTTtBQUM3QlIsb0JBQWdCLENBQUMsQ0FBQ0QsYUFBRixDQUFoQjtBQUNBRyxnQkFBWSxDQUFDRCxTQUFELENBQVo7QUFDRCxHQUhEOztBQUlBLFNBQ0U7QUFBSyxhQUFTLEVBQUVRLG9GQUFvQixDQUFDQztBQUFyQyxLQUNFO0FBQUssYUFBUyxFQUFFQyw0RUFBVyxDQUFDQztBQUE1QixLQUF1Q3RCLElBQUksQ0FBQ3VCLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLENBQXZDLENBREYsRUFFRTtBQUFLLGFBQVMsRUFBRUosb0ZBQW9CLENBQUNLO0FBQXJDLEtBQ0U7QUFBSyxhQUFTLEVBQUVMLG9GQUFvQixDQUFDTTtBQUFyQyxLQUNFO0FBQUssYUFBUyxFQUFFTixvRkFBb0IsQ0FBQ087QUFBckMsS0FDRSxtQkFBTTFCLElBQU4sQ0FERixFQUVFLG1CQUFNRSxJQUFOLENBRkYsQ0FERixDQURGLEVBT0U7QUFBSyxhQUFTLEVBQUVpQixvRkFBb0IsQ0FBQ007QUFBckMsS0FDRTtBQUFLLGFBQVMsRUFBRU4sb0ZBQW9CLENBQUNRO0FBQXJDLEtBQ0dsQixhQUFhLEdBQ1o7QUFDRSxhQUFTLEVBQUVtQiw0RUFBVyxDQUFDQyxLQUR6QjtBQUVFLFFBQUksRUFBQyxNQUZQO0FBR0UsU0FBSyxFQUFFbEIsU0FIVDtBQUlFLFlBQVEsRUFBRUc7QUFKWixJQURZLEdBUVo7QUFBTSxhQUFTLEVBQUVLLG9GQUFvQixDQUFDVztBQUF0QyxLQUNHN0IsT0FESCxDQVRKLENBREYsRUFlRTtBQUFLLGFBQVMsRUFBRWtCLG9GQUFvQixDQUFDWTtBQUFyQyxLQUNFO0FBQ0UsYUFBUyxFQUNQM0IsYUFBYSxHQUNUZSxvRkFBb0IsQ0FBQ2EsT0FEWixHQUVUYixvRkFBb0IsQ0FBQ2MsT0FKN0I7QUFNRSxXQUFPLEVBQUVwQjtBQU5YLFVBREYsRUFXRTtBQUFNLGFBQVMsRUFBRU0sb0ZBQW9CLENBQUNlO0FBQXRDLEtBQ0czQixnQkFESCxDQVhGLENBZkYsRUE4QkU7QUFBSyxhQUFTLEVBQUVZLG9GQUFvQixDQUFDZ0I7QUFBckMsS0FDRTtBQUFLLFdBQU8sRUFBRSxNQUFNekIsZ0JBQWdCLENBQUMsQ0FBQ0QsYUFBRjtBQUFwQyxLQUNJLEdBQUVBLGFBQWEsR0FBRyxJQUFILEdBQVUsSUFBSyxFQURsQyxDQURGLEVBSUdBLGFBQWEsR0FDWjtBQUFLLFdBQU8sRUFBRVM7QUFBZCxvQkFEWSxHQUdaO0FBQUssV0FBTyxFQUFFLE1BQU1yQixrQkFBa0IsQ0FBQ0MsS0FBRDtBQUF0QyxvQkFQSixDQTlCRixDQVBGLENBRkYsQ0FERjtBQXNERCxDQTVFRDs7QUE4RWVILDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Db21tZW50TGlzdC9Db21tZW50SXRlbS9Db21tZW50SXRlbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhdmF0YXJTdHlsZSBmcm9tICcuLi8uLi8uLi9zdHlsZXMvY29tcG9uZW50cy9hdmF0YXIubW9kdWxlLnNjc3MnO1xuaW1wb3J0IGNvbW1vblN0eWxlIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9jb21wb25lbnRzL2NvbW1vbi5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgY29tbWVudERpc2N1c3NTdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL2NvbXBvbmVudHMvY29tbWVudERpc2N1c3MubW9kdWxlLnNjc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBDb21tZW50SXRlbSA9ICh7IGRpc2N1c3Npb24sIGRlbGV0ZWRDb21tZW50SXRlbSwgaW5kZXggfSkgPT4ge1xuICBjb25zdCB7IHJlY29yZCB9ID0gZGlzY3Vzc2lvbjtcbiAgY29uc3QgeyBuYW1lLCBjb250ZW50LCBkYXRlLCBnb29kQ291bnQgfSA9IHJlY29yZDtcbiAgY29uc3QgW2NsaWNrZWRBZGRPbmUsIHNldENsaWNrZWRBZGRPbmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY2xpY2tlZEdvb2RDb3VudCwgc2V0Q2xpY2tlZEdvb2RDb3VudF0gPSB1c2VTdGF0ZShnb29kQ291bnQpO1xuICBjb25zdCBbc2hvd0VkaXRJbnB1dCwgc2V0U2hvd0VkaXRJbnB1dF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlZGl0VmFsdWUsIHNldEVkaXRWYWx1ZV0gPSB1c2VTdGF0ZShjb250ZW50KTtcblxuICBjb25zdCBjbGlja2VkTGF0dGljZSA9ICgpID0+IHtcbiAgICAhY2xpY2tlZEFkZE9uZVxuICAgICAgPyBzZXRDbGlja2VkR29vZENvdW50KGNsaWNrZWRHb29kQ291bnQgKyAxKVxuICAgICAgOiBzZXRDbGlja2VkR29vZENvdW50KGNsaWNrZWRHb29kQ291bnQgLSAxKTtcbiAgICBzZXRDbGlja2VkQWRkT25lKCFjbGlja2VkQWRkT25lKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlRWRpdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldEVkaXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNhdmVDaGFuZ2UgPSAoKSA9PiB7XG4gICAgc2V0U2hvd0VkaXRJbnB1dCghc2hvd0VkaXRJbnB1dCk7XG4gICAgc2V0RWRpdFZhbHVlKGVkaXRWYWx1ZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NvbW1lbnREaXNjdXNzU3R5bGVzLmNvbW1lbnR9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2F2YXRhclN0eWxlLmF2YXRhck1sfT57bmFtZS5zdWJzdHJpbmcoMCwgMSl9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tbWVudERpc2N1c3NTdHlsZXMuY29tbWVudFdyYXBwZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tbWVudERpc2N1c3NTdHlsZXMuY29tbWVudEJveH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbW1lbnREaXNjdXNzU3R5bGVzLm5hbWVUZXh0fT5cbiAgICAgICAgICAgIDxkaXY+e25hbWV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PntkYXRlfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbW1lbnREaXNjdXNzU3R5bGVzLmNvbW1lbnRCb3h9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21tZW50RGlzY3Vzc1N0eWxlcy5jb250ZW50Qm94fT5cbiAgICAgICAgICAgIHtzaG93RWRpdElucHV0ID8gKFxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvbW1vblN0eWxlLmlucHV0fVxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZWRpdFZhbHVlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVFZGl0Q2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjb21tZW50RGlzY3Vzc1N0eWxlcy5jb21tZW50Q29udGVudH0+XG4gICAgICAgICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbW1lbnREaXNjdXNzU3R5bGVzLnJpZ2h0Q29udGVudH0+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgIGNsaWNrZWRBZGRPbmVcbiAgICAgICAgICAgICAgICAgID8gY29tbWVudERpc2N1c3NTdHlsZXMuY2xpY2tlZFxuICAgICAgICAgICAgICAgICAgOiBjb21tZW50RGlzY3Vzc1N0eWxlcy5sYXR0aWNlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2tlZExhdHRpY2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICsxXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NvbW1lbnREaXNjdXNzU3R5bGVzLm51bWJlcn0+XG4gICAgICAgICAgICAgIHtjbGlja2VkR29vZENvdW50fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21tZW50RGlzY3Vzc1N0eWxlcy5lZGl0RGVsZXRlfT5cbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0U2hvd0VkaXRJbnB1dCghc2hvd0VkaXRJbnB1dCl9PlxuICAgICAgICAgICAgICB7YCR7c2hvd0VkaXRJbnB1dCA/ICflj5bmtognIDogJ+e3qOi8ryd9YH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3Nob3dFZGl0SW5wdXQgPyAoXG4gICAgICAgICAgICAgIDxkaXYgb25DbGljaz17aGFuZGxlU2F2ZUNoYW5nZX0+5YSy5a2YPC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGRlbGV0ZWRDb21tZW50SXRlbShpbmRleCl9PuWIqumZpDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRJdGVtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CommentList/CommentItem/CommentItem.js\n");

/***/ }),

/***/ "./components/CommentList/CommentList.js":
/*!***********************************************!*\
  !*** ./components/CommentList/CommentList.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CommentItem_CommentItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommentItem/CommentItem */ \"./components/CommentList/CommentItem/CommentItem.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ \"./components/context.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst CommentList = () => {\n  const contextValue = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  const {\n    discussionList,\n    setDiscussionList\n  } = contextValue;\n\n  const deletedCommentItem = index => {\n    setDiscussionList(discussionList.slice(index !== 0 ? 0 + index : index + 1));\n  };\n\n  return discussionList.map((discussion, index) => __jsx(_CommentItem_CommentItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    key: `comment${index}`,\n    discussion: discussion,\n    index: index,\n    deletedCommentItem: deletedCommentItem\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1lbnRMaXN0L0NvbW1lbnRMaXN0LmpzPzEzYzgiXSwibmFtZXMiOlsiQ29tbWVudExpc3QiLCJjb250ZXh0VmFsdWUiLCJ1c2VDb250ZXh0IiwiY29udGV4dCIsImRpc2N1c3Npb25MaXN0Iiwic2V0RGlzY3Vzc2lvbkxpc3QiLCJkZWxldGVkQ29tbWVudEl0ZW0iLCJpbmRleCIsInNsaWNlIiwibWFwIiwiZGlzY3Vzc2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFdBQVcsR0FBRyxNQUFNO0FBQ3hCLFFBQU1DLFlBQVksR0FBR0Msd0RBQVUsQ0FBQ0MsZ0RBQUQsQ0FBL0I7QUFDQSxRQUFNO0FBQUVDLGtCQUFGO0FBQWtCQztBQUFsQixNQUF3Q0osWUFBOUM7O0FBRUEsUUFBTUssa0JBQWtCLEdBQUlDLEtBQUQsSUFBVztBQUNwQ0YscUJBQWlCLENBQ2ZELGNBQWMsQ0FBQ0ksS0FBZixDQUFxQkQsS0FBSyxLQUFLLENBQVYsR0FBYyxJQUFJQSxLQUFsQixHQUEwQkEsS0FBSyxHQUFHLENBQXZELENBRGUsQ0FBakI7QUFHRCxHQUpEOztBQU1BLFNBQU9ILGNBQWMsQ0FBQ0ssR0FBZixDQUFtQixDQUFDQyxVQUFELEVBQWFILEtBQWIsS0FDeEIsTUFBQyxnRUFBRDtBQUNFLE9BQUcsRUFBRyxVQUFTQSxLQUFNLEVBRHZCO0FBRUUsY0FBVSxFQUFFRyxVQUZkO0FBR0UsU0FBSyxFQUFFSCxLQUhUO0FBSUUsc0JBQWtCLEVBQUVEO0FBSnRCLElBREssQ0FBUDtBQVFELENBbEJEOztBQW9CZU4sMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1lbnRMaXN0L0NvbW1lbnRMaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tbWVudEl0ZW0gZnJvbSAnLi9Db21tZW50SXRlbS9Db21tZW50SXRlbSc7XG5pbXBvcnQgY29udGV4dCBmcm9tICcuLi9jb250ZXh0JztcblxuY29uc3QgQ29tbWVudExpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRleHRWYWx1ZSA9IHVzZUNvbnRleHQoY29udGV4dCk7XG4gIGNvbnN0IHsgZGlzY3Vzc2lvbkxpc3QsIHNldERpc2N1c3Npb25MaXN0IH0gPSBjb250ZXh0VmFsdWU7XG5cbiAgY29uc3QgZGVsZXRlZENvbW1lbnRJdGVtID0gKGluZGV4KSA9PiB7XG4gICAgc2V0RGlzY3Vzc2lvbkxpc3QoXG4gICAgICBkaXNjdXNzaW9uTGlzdC5zbGljZShpbmRleCAhPT0gMCA/IDAgKyBpbmRleCA6IGluZGV4ICsgMSksXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gZGlzY3Vzc2lvbkxpc3QubWFwKChkaXNjdXNzaW9uLCBpbmRleCkgPT4gKFxuICAgIDxDb21tZW50SXRlbVxuICAgICAga2V5PXtgY29tbWVudCR7aW5kZXh9YH1cbiAgICAgIGRpc2N1c3Npb249e2Rpc2N1c3Npb259XG4gICAgICBpbmRleD17aW5kZXh9XG4gICAgICBkZWxldGVkQ29tbWVudEl0ZW09e2RlbGV0ZWRDb21tZW50SXRlbX1cbiAgICAvPlxuICApKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CommentList/CommentList.js\n");

/***/ }),

/***/ "./components/CommentList/NewComment/NewComment.js":
/*!*********************************************************!*\
  !*** ./components/CommentList/NewComment/NewComment.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../styles/components/avatar.module.scss */ \"./styles/components/avatar.module.scss\");\n/* harmony import */ var _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/components/buttons.module.scss */ \"./styles/components/buttons.module.scss\");\n/* harmony import */ var _styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NewComment_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewComment.module.scss */ \"./components/CommentList/NewComment/NewComment.module.scss\");\n/* harmony import */ var _NewComment_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_NewComment_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context */ \"./components/context.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Send */ \"@material-ui/icons/Send\");\n/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\n\n\nconst NewComment = ({\n  setShowComment\n}) => {\n  const contextValue = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  const {\n    discussionList,\n    setDiscussionList\n  } = contextValue;\n  const {\n    0: comment,\n    1: setComment\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])('');\n\n  const commentSubmit = event => {\n    event.preventDefault();\n    const commentItem = {\n      record: {\n        name: 'Eric',\n        date: moment__WEBPACK_IMPORTED_MODULE_5___default()().format('l'),\n        content: comment,\n        goodCount: 0\n      }\n    };\n    setDiscussionList([commentItem, ...discussionList]);\n    setShowComment(false);\n  };\n\n  const changeComment = event => {\n    setComment(event.target.value);\n  };\n\n  return __jsx(\"form\", {\n    onSubmit: commentSubmit\n  }, __jsx(\"div\", {\n    className: _NewComment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.addMessage\n  }, __jsx(\"div\", {\n    className: _styles_components_avatar_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.avatarMl\n  }, \"E\"), __jsx(\"div\", {\n    className: _NewComment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.textAreaBox\n  }, __jsx(\"textarea\", {\n    placeholder: \"\\u65B0\\u589E\\u56DE\\u8986\",\n    onChange: changeComment\n  })), __jsx(\"button\", {\n    className: _styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.iconButtonSm\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[\"IconButton\"], null, __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    fontSize: \"small\"\n  })))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewComment);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1lbnRMaXN0L05ld0NvbW1lbnQvTmV3Q29tbWVudC5qcz81YmE3Il0sIm5hbWVzIjpbIk5ld0NvbW1lbnQiLCJzZXRTaG93Q29tbWVudCIsImNvbnRleHRWYWx1ZSIsInVzZUNvbnRleHQiLCJjb250ZXh0IiwiZGlzY3Vzc2lvbkxpc3QiLCJzZXREaXNjdXNzaW9uTGlzdCIsImNvbW1lbnQiLCJzZXRDb21tZW50IiwidXNlU3RhdGUiLCJjb21tZW50U3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbW1lbnRJdGVtIiwicmVjb3JkIiwibmFtZSIsImRhdGUiLCJtb21lbnQiLCJmb3JtYXQiLCJjb250ZW50IiwiZ29vZENvdW50IiwiY2hhbmdlQ29tbWVudCIsInRhcmdldCIsInZhbHVlIiwic3R5bGVzIiwiYWRkTWVzc2FnZSIsImF2YXRhclN0eWxlIiwiYXZhdGFyTWwiLCJ0ZXh0QXJlYUJveCIsImJ1dHRvblN0eWxlIiwiaWNvbkJ1dHRvblNtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsVUFBVSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQXdCO0FBQ3pDLFFBQU1DLFlBQVksR0FBR0Msd0RBQVUsQ0FBQ0MsZ0RBQUQsQ0FBL0I7QUFDQSxRQUFNO0FBQUVDLGtCQUFGO0FBQWtCQztBQUFsQixNQUF3Q0osWUFBOUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLHNEQUFRLENBQUMsRUFBRCxDQUF0Qzs7QUFDQSxRQUFNQyxhQUFhLEdBQUlDLEtBQUQsSUFBVztBQUMvQkEsU0FBSyxDQUFDQyxjQUFOO0FBQ0EsVUFBTUMsV0FBVyxHQUFHO0FBQ2xCQyxZQUFNLEVBQUU7QUFDTkMsWUFBSSxFQUFFLE1BREE7QUFFTkMsWUFBSSxFQUFFQyw2Q0FBTSxHQUFHQyxNQUFULENBQWdCLEdBQWhCLENBRkE7QUFHTkMsZUFBTyxFQUFFWixPQUhIO0FBSU5hLGlCQUFTLEVBQUU7QUFKTDtBQURVLEtBQXBCO0FBUUFkLHFCQUFpQixDQUFDLENBQUNPLFdBQUQsRUFBYyxHQUFHUixjQUFqQixDQUFELENBQWpCO0FBQ0FKLGtCQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0QsR0FaRDs7QUFhQSxRQUFNb0IsYUFBYSxHQUFJVixLQUFELElBQVc7QUFDL0JILGNBQVUsQ0FBQ0csS0FBSyxDQUFDVyxNQUFOLENBQWFDLEtBQWQsQ0FBVjtBQUNELEdBRkQ7O0FBR0EsU0FDRTtBQUFNLFlBQVEsRUFBRWI7QUFBaEIsS0FDRTtBQUFLLGFBQVMsRUFBRWMsOERBQU0sQ0FBQ0M7QUFBdkIsS0FDRTtBQUFLLGFBQVMsRUFBRUMsNEVBQVcsQ0FBQ0M7QUFBNUIsU0FERixFQUVFO0FBQUssYUFBUyxFQUFFSCw4REFBTSxDQUFDSTtBQUF2QixLQUNFO0FBQVUsZUFBVyxFQUFDLDBCQUF0QjtBQUE2QixZQUFRLEVBQUVQO0FBQXZDLElBREYsQ0FGRixFQUtFO0FBQVEsYUFBUyxFQUFFUSw2RUFBVyxDQUFDQztBQUEvQixLQUNFLE1BQUMsNERBQUQsUUFDRSxNQUFDLDhEQUFEO0FBQVUsWUFBUSxFQUFDO0FBQW5CLElBREYsQ0FERixDQUxGLENBREYsQ0FERjtBQWVELENBbkNEOztBQXFDZTlCLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Db21tZW50TGlzdC9OZXdDb21tZW50L05ld0NvbW1lbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXZhdGFyU3R5bGUgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL2NvbXBvbmVudHMvYXZhdGFyLm1vZHVsZS5zY3NzJztcbmltcG9ydCBidXR0b25TdHlsZSBmcm9tICcuLi8uLi8uLi9zdHlsZXMvY29tcG9uZW50cy9idXR0b25zLm1vZHVsZS5zY3NzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9OZXdDb21tZW50Lm1vZHVsZS5zY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IFNlbmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZW5kJztcbmltcG9ydCB7IEljb25CdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5cbmNvbnN0IE5ld0NvbW1lbnQgPSAoeyBzZXRTaG93Q29tbWVudCB9KSA9PiB7XG4gIGNvbnN0IGNvbnRleHRWYWx1ZSA9IHVzZUNvbnRleHQoY29udGV4dCk7XG4gIGNvbnN0IHsgZGlzY3Vzc2lvbkxpc3QsIHNldERpc2N1c3Npb25MaXN0IH0gPSBjb250ZXh0VmFsdWU7XG4gIGNvbnN0IFtjb21tZW50LCBzZXRDb21tZW50XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgY29tbWVudFN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY29tbWVudEl0ZW0gPSB7XG4gICAgICByZWNvcmQ6IHtcbiAgICAgICAgbmFtZTogJ0VyaWMnLFxuICAgICAgICBkYXRlOiBtb21lbnQoKS5mb3JtYXQoJ2wnKSxcbiAgICAgICAgY29udGVudDogY29tbWVudCxcbiAgICAgICAgZ29vZENvdW50OiAwLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHNldERpc2N1c3Npb25MaXN0KFtjb21tZW50SXRlbSwgLi4uZGlzY3Vzc2lvbkxpc3RdKTtcbiAgICBzZXRTaG93Q29tbWVudChmYWxzZSk7XG4gIH07XG4gIGNvbnN0IGNoYW5nZUNvbW1lbnQgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRDb21tZW50KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2NvbW1lbnRTdWJtaXR9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRNZXNzYWdlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2F2YXRhclN0eWxlLmF2YXRhck1sfT5FPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dEFyZWFCb3h9PlxuICAgICAgICAgIDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj1cIuaWsOWinuWbnuimhlwiIG9uQ2hhbmdlPXtjaGFuZ2VDb21tZW50fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2J1dHRvblN0eWxlLmljb25CdXR0b25TbX0+XG4gICAgICAgICAgPEljb25CdXR0b24+XG4gICAgICAgICAgICA8U2VuZEljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ld0NvbW1lbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CommentList/NewComment/NewComment.js\n");

/***/ }),

/***/ "./components/CommentList/NewComment/NewComment.module.scss":
/*!******************************************************************!*\
  !*** ./components/CommentList/NewComment/NewComment.module.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"addMessage\": \"NewComment_addMessage__1uBWS\",\n\t\"textAreaBox\": \"NewComment_textAreaBox__3lAy-\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1lbnRMaXN0L05ld0NvbW1lbnQvTmV3Q29tbWVudC5tb2R1bGUuc2Nzcz80YTliIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1lbnRMaXN0L05ld0NvbW1lbnQvTmV3Q29tbWVudC5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFkZE1lc3NhZ2VcIjogXCJOZXdDb21tZW50X2FkZE1lc3NhZ2VfXzF1QldTXCIsXG5cdFwidGV4dEFyZWFCb3hcIjogXCJOZXdDb21tZW50X3RleHRBcmVhQm94X18zbEF5LVwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CommentList/NewComment/NewComment.module.scss\n");

/***/ }),

/***/ "./components/Icon/Icon.js":
/*!*********************************!*\
  !*** ./components/Icon/Icon.js ***!
  \*********************************/
/*! exports provided: IconLan, IconViewList, IconBook, IconFeedBack, IconSearch, IconClose, IconSend, IconAdd, IconCheckCircle, IconThumbUpOutline, IconThumbDown, IconShare, IconLock, IconList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IconLan\", function() { return IconLan; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IconViewList\", function() { return IconViewList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IconBook\", function() { return IconBook; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IconFeedBack\", function() { return IconFeedBack; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IconSearch\", function() { return IconSearch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IconClose\", function() { return IconClose; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IconSend\", function() { return IconSend; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IconAdd\", function() { return IconAdd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IconCheckCircle\", function() { return IconCheckCircle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IconThumbUpOutline\", function() { return IconThumbUpOutline; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IconThumbDown\", function() { return IconThumbDown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IconShare\", function() { return IconShare; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IconLock\", function() { return IconLock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IconList\", function() { return IconList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons-kit */ \"react-icons-kit\");\n/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_kit_md_ic_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons-kit/md/ic_language */ \"react-icons-kit/md/ic_language\");\n/* harmony import */ var react_icons_kit_md_ic_language__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_language__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_kit_md_ic_view_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit/md/ic_view_list */ \"react-icons-kit/md/ic_view_list\");\n/* harmony import */ var react_icons_kit_md_ic_view_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_view_list__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_kit_icomoon_book__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons-kit/icomoon/book */ \"react-icons-kit/icomoon/book\");\n/* harmony import */ var react_icons_kit_icomoon_book__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_book__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_kit_md_ic_feedback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons-kit/md/ic_feedback */ \"react-icons-kit/md/ic_feedback\");\n/* harmony import */ var react_icons_kit_md_ic_feedback__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_feedback__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_kit_md_ic_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons-kit/md/ic_search */ \"react-icons-kit/md/ic_search\");\n/* harmony import */ var react_icons_kit_md_ic_search__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_search__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_icons_kit_md_ic_close__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons-kit/md/ic_close */ \"react-icons-kit/md/ic_close\");\n/* harmony import */ var react_icons_kit_md_ic_close__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_close__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_icons_kit_md_ic_send__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons-kit/md/ic_send */ \"react-icons-kit/md/ic_send\");\n/* harmony import */ var react_icons_kit_md_ic_send__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_send__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_icons_kit_md_ic_add_circle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons-kit/md/ic_add_circle */ \"react-icons-kit/md/ic_add_circle\");\n/* harmony import */ var react_icons_kit_md_ic_add_circle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_add_circle__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_icons_kit_md_ic_check_circle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons-kit/md/ic_check_circle */ \"react-icons-kit/md/ic_check_circle\");\n/* harmony import */ var react_icons_kit_md_ic_check_circle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_check_circle__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_icons_kit_fa_thumbsOUp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons-kit/fa/thumbsOUp */ \"react-icons-kit/fa/thumbsOUp\");\n/* harmony import */ var react_icons_kit_fa_thumbsOUp__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_thumbsOUp__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react_icons_kit_fa_thumbsUp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons-kit/fa/thumbsUp */ \"react-icons-kit/fa/thumbsUp\");\n/* harmony import */ var react_icons_kit_fa_thumbsUp__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_thumbsUp__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var react_icons_kit_md_ic_share__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons-kit/md/ic_share */ \"react-icons-kit/md/ic_share\");\n/* harmony import */ var react_icons_kit_md_ic_share__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_share__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var react_icons_kit_md_ic_lock_outline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons-kit/md/ic_lock_outline */ \"react-icons-kit/md/ic_lock_outline\");\n/* harmony import */ var react_icons_kit_md_ic_lock_outline__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_lock_outline__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var react_icons_kit_md_ic_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-icons-kit/md/ic_list */ \"react-icons-kit/md/ic_list\");\n/* harmony import */ var react_icons_kit_md_ic_list__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_list__WEBPACK_IMPORTED_MODULE_15__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst IconContainer = Object(react_icons_kit__WEBPACK_IMPORTED_MODULE_1__[\"withBaseIcon\"])({\n  size: 24\n});\nconst IconLan = () => __jsx(IconContainer, {\n  icon: react_icons_kit_md_ic_language__WEBPACK_IMPORTED_MODULE_2__[\"ic_language\"]\n});\nconst IconViewList = () => __jsx(IconContainer, {\n  icon: react_icons_kit_md_ic_view_list__WEBPACK_IMPORTED_MODULE_3__[\"ic_view_list\"]\n});\nconst IconBook = () => __jsx(IconContainer, {\n  icon: react_icons_kit_icomoon_book__WEBPACK_IMPORTED_MODULE_4__[\"book\"]\n});\nconst IconFeedBack = () => __jsx(IconContainer, {\n  icon: react_icons_kit_md_ic_feedback__WEBPACK_IMPORTED_MODULE_5__[\"ic_feedback\"]\n});\nconst IconSearch = () => __jsx(IconContainer, {\n  icon: react_icons_kit_md_ic_search__WEBPACK_IMPORTED_MODULE_6__[\"ic_search\"]\n});\nconst IconClose = () => __jsx(IconContainer, {\n  icon: react_icons_kit_md_ic_close__WEBPACK_IMPORTED_MODULE_7__[\"ic_close\"]\n});\nconst IconSend = () => __jsx(IconContainer, {\n  icon: react_icons_kit_md_ic_send__WEBPACK_IMPORTED_MODULE_8__[\"ic_send\"]\n});\nconst IconAdd = () => __jsx(IconContainer, {\n  icon: react_icons_kit_md_ic_add_circle__WEBPACK_IMPORTED_MODULE_9__[\"ic_add_circle\"]\n});\nconst IconCheckCircle = () => __jsx(IconContainer, {\n  icon: react_icons_kit_md_ic_check_circle__WEBPACK_IMPORTED_MODULE_10__[\"ic_check_circle\"]\n});\nconst IconThumbUpOutline = () => __jsx(IconContainer, {\n  icon: react_icons_kit_fa_thumbsOUp__WEBPACK_IMPORTED_MODULE_11__[\"thumbsOUp\"]\n});\nconst IconThumbDown = () => __jsx(IconContainer, {\n  icon: react_icons_kit_fa_thumbsUp__WEBPACK_IMPORTED_MODULE_12__[\"thumbsUp\"]\n});\nconst IconShare = () => __jsx(IconContainer, {\n  icon: react_icons_kit_md_ic_share__WEBPACK_IMPORTED_MODULE_13__[\"ic_share\"]\n});\nconst IconLock = () => __jsx(IconContainer, {\n  icon: react_icons_kit_md_ic_lock_outline__WEBPACK_IMPORTED_MODULE_14__[\"ic_lock_outline\"]\n});\nconst IconList = () => __jsx(IconContainer, {\n  icon: react_icons_kit_md_ic_list__WEBPACK_IMPORTED_MODULE_15__[\"ic_list\"]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ljb24vSWNvbi5qcz9jNjM1Il0sIm5hbWVzIjpbIkljb25Db250YWluZXIiLCJ3aXRoQmFzZUljb24iLCJzaXplIiwiSWNvbkxhbiIsImljX2xhbmd1YWdlIiwiSWNvblZpZXdMaXN0IiwiaWNfdmlld19saXN0IiwiSWNvbkJvb2siLCJib29rIiwiSWNvbkZlZWRCYWNrIiwiaWNfZmVlZGJhY2siLCJJY29uU2VhcmNoIiwiaWNfc2VhcmNoIiwiSWNvbkNsb3NlIiwiaWNfY2xvc2UiLCJJY29uU2VuZCIsImljX3NlbmQiLCJJY29uQWRkIiwiaWNfYWRkX2NpcmNsZSIsIkljb25DaGVja0NpcmNsZSIsImljX2NoZWNrX2NpcmNsZSIsIkljb25UaHVtYlVwT3V0bGluZSIsInRodW1ic09VcCIsIkljb25UaHVtYkRvd24iLCJ0aHVtYnNVcCIsIkljb25TaGFyZSIsImljX3NoYXJlIiwiSWNvbkxvY2siLCJpY19sb2NrX291dGxpbmUiLCJJY29uTGlzdCIsImljX2xpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsYUFBYSxHQUFHQyxvRUFBWSxDQUFDO0FBQUVDLE1BQUksRUFBRTtBQUFSLENBQUQsQ0FBbEM7QUFDTyxNQUFNQyxPQUFPLEdBQUcsTUFBTSxNQUFDLGFBQUQ7QUFBZSxNQUFJLEVBQUVDLDBFQUFXQTtBQUFoQyxFQUF0QjtBQUNBLE1BQU1DLFlBQVksR0FBRyxNQUFNLE1BQUMsYUFBRDtBQUFlLE1BQUksRUFBRUMsNEVBQVlBO0FBQWpDLEVBQTNCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLE1BQU0sTUFBQyxhQUFEO0FBQWUsTUFBSSxFQUFFQyxpRUFBSUE7QUFBekIsRUFBdkI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsTUFBTSxNQUFDLGFBQUQ7QUFBZSxNQUFJLEVBQUVDLDBFQUFXQTtBQUFoQyxFQUEzQjtBQUNBLE1BQU1DLFVBQVUsR0FBRyxNQUFNLE1BQUMsYUFBRDtBQUFlLE1BQUksRUFBRUMsc0VBQVNBO0FBQTlCLEVBQXpCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLE1BQU0sTUFBQyxhQUFEO0FBQWUsTUFBSSxFQUFFQyxvRUFBUUE7QUFBN0IsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUcsTUFBTSxNQUFDLGFBQUQ7QUFBZSxNQUFJLEVBQUVDLGtFQUFPQTtBQUE1QixFQUF2QjtBQUNBLE1BQU1DLE9BQU8sR0FBRyxNQUFNLE1BQUMsYUFBRDtBQUFlLE1BQUksRUFBRUMsOEVBQWFBO0FBQWxDLEVBQXRCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLE1BQU0sTUFBQyxhQUFEO0FBQWUsTUFBSSxFQUFFQyxtRkFBZUE7QUFBcEMsRUFBOUI7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxNQUFNLE1BQUMsYUFBRDtBQUFlLE1BQUksRUFBRUMsdUVBQVNBO0FBQTlCLEVBQWpDO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLE1BQU0sTUFBQyxhQUFEO0FBQWUsTUFBSSxFQUFFQyxxRUFBUUE7QUFBN0IsRUFBNUI7QUFDQSxNQUFNQyxTQUFTLEdBQUcsTUFBTSxNQUFDLGFBQUQ7QUFBZSxNQUFJLEVBQUVDLHFFQUFRQTtBQUE3QixFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBRyxNQUFNLE1BQUMsYUFBRDtBQUFlLE1BQUksRUFBRUMsbUZBQWVBO0FBQXBDLEVBQXZCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLE1BQU0sTUFBQyxhQUFEO0FBQWUsTUFBSSxFQUFFQyxtRUFBT0E7QUFBNUIsRUFBdkIiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ljb24vSWNvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHdpdGhCYXNlSWNvbiB9IGZyb20gXCJyZWFjdC1pY29ucy1raXRcIjtcbmltcG9ydCB7IGljX2xhbmd1YWdlIH0gZnJvbSBcInJlYWN0LWljb25zLWtpdC9tZC9pY19sYW5ndWFnZVwiO1xuaW1wb3J0IHsgaWNfdmlld19saXN0IH0gZnJvbSBcInJlYWN0LWljb25zLWtpdC9tZC9pY192aWV3X2xpc3RcIjtcbmltcG9ydCB7IGJvb2sgfSBmcm9tIFwicmVhY3QtaWNvbnMta2l0L2ljb21vb24vYm9va1wiO1xuaW1wb3J0IHsgaWNfZmVlZGJhY2sgfSBmcm9tIFwicmVhY3QtaWNvbnMta2l0L21kL2ljX2ZlZWRiYWNrXCI7XG5pbXBvcnQgeyBpY19zZWFyY2ggfSBmcm9tIFwicmVhY3QtaWNvbnMta2l0L21kL2ljX3NlYXJjaFwiO1xuaW1wb3J0IHsgaWNfY2xvc2UgfSBmcm9tIFwicmVhY3QtaWNvbnMta2l0L21kL2ljX2Nsb3NlXCI7XG5pbXBvcnQgeyBpY19zZW5kIH0gZnJvbSBcInJlYWN0LWljb25zLWtpdC9tZC9pY19zZW5kXCI7XG5pbXBvcnQgeyBpY19hZGRfY2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zLWtpdC9tZC9pY19hZGRfY2lyY2xlXCI7XG5pbXBvcnQgeyBpY19jaGVja19jaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMta2l0L21kL2ljX2NoZWNrX2NpcmNsZVwiO1xuaW1wb3J0IHsgdGh1bWJzT1VwIH0gZnJvbSBcInJlYWN0LWljb25zLWtpdC9mYS90aHVtYnNPVXBcIjtcbmltcG9ydCB7IHRodW1ic1VwIH0gZnJvbSBcInJlYWN0LWljb25zLWtpdC9mYS90aHVtYnNVcFwiO1xuaW1wb3J0IHsgaWNfc2hhcmUgfSBmcm9tIFwicmVhY3QtaWNvbnMta2l0L21kL2ljX3NoYXJlXCI7XG5pbXBvcnQgeyBpY19sb2NrX291dGxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMta2l0L21kL2ljX2xvY2tfb3V0bGluZVwiO1xuaW1wb3J0IHsgaWNfbGlzdCB9IGZyb20gXCJyZWFjdC1pY29ucy1raXQvbWQvaWNfbGlzdFwiO1xuXG5jb25zdCBJY29uQ29udGFpbmVyID0gd2l0aEJhc2VJY29uKHsgc2l6ZTogMjQgfSk7XG5leHBvcnQgY29uc3QgSWNvbkxhbiA9ICgpID0+IDxJY29uQ29udGFpbmVyIGljb249e2ljX2xhbmd1YWdlfSAvPjtcbmV4cG9ydCBjb25zdCBJY29uVmlld0xpc3QgPSAoKSA9PiA8SWNvbkNvbnRhaW5lciBpY29uPXtpY192aWV3X2xpc3R9IC8+O1xuZXhwb3J0IGNvbnN0IEljb25Cb29rID0gKCkgPT4gPEljb25Db250YWluZXIgaWNvbj17Ym9va30gLz47XG5leHBvcnQgY29uc3QgSWNvbkZlZWRCYWNrID0gKCkgPT4gPEljb25Db250YWluZXIgaWNvbj17aWNfZmVlZGJhY2t9IC8+O1xuZXhwb3J0IGNvbnN0IEljb25TZWFyY2ggPSAoKSA9PiA8SWNvbkNvbnRhaW5lciBpY29uPXtpY19zZWFyY2h9IC8+O1xuZXhwb3J0IGNvbnN0IEljb25DbG9zZSA9ICgpID0+IDxJY29uQ29udGFpbmVyIGljb249e2ljX2Nsb3NlfSAvPjtcbmV4cG9ydCBjb25zdCBJY29uU2VuZCA9ICgpID0+IDxJY29uQ29udGFpbmVyIGljb249e2ljX3NlbmR9IC8+O1xuZXhwb3J0IGNvbnN0IEljb25BZGQgPSAoKSA9PiA8SWNvbkNvbnRhaW5lciBpY29uPXtpY19hZGRfY2lyY2xlfSAvPjtcbmV4cG9ydCBjb25zdCBJY29uQ2hlY2tDaXJjbGUgPSAoKSA9PiA8SWNvbkNvbnRhaW5lciBpY29uPXtpY19jaGVja19jaXJjbGV9IC8+O1xuZXhwb3J0IGNvbnN0IEljb25UaHVtYlVwT3V0bGluZSA9ICgpID0+IDxJY29uQ29udGFpbmVyIGljb249e3RodW1ic09VcH0gLz47XG5leHBvcnQgY29uc3QgSWNvblRodW1iRG93biA9ICgpID0+IDxJY29uQ29udGFpbmVyIGljb249e3RodW1ic1VwfSAvPjtcbmV4cG9ydCBjb25zdCBJY29uU2hhcmUgPSAoKSA9PiA8SWNvbkNvbnRhaW5lciBpY29uPXtpY19zaGFyZX0gLz47XG5leHBvcnQgY29uc3QgSWNvbkxvY2sgPSAoKSA9PiA8SWNvbkNvbnRhaW5lciBpY29uPXtpY19sb2NrX291dGxpbmV9IC8+O1xuZXhwb3J0IGNvbnN0IEljb25MaXN0ID0gKCkgPT4gPEljb25Db250YWluZXIgaWNvbj17aWNfbGlzdH0gLz47XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Icon/Icon.js\n");

/***/ }),

/***/ "./components/VideoBox/VideoBox.js":
/*!*****************************************!*\
  !*** ./components/VideoBox/VideoBox.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/components/buttons.module.scss */ \"./styles/components/buttons.module.scss\");\n/* harmony import */ var _styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoBox.module.scss */ \"./components/VideoBox/VideoBox.module.scss\");\n/* harmony import */ var _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_icons_ClosedCaption__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ClosedCaption */ \"@material-ui/icons/ClosedCaption\");\n/* harmony import */ var _material_ui_icons_ClosedCaption__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ClosedCaption__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_icons_CropFree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/CropFree */ \"@material-ui/icons/CropFree\");\n/* harmony import */ var _material_ui_icons_CropFree__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CropFree__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/PlayArrow */ \"@material-ui/icons/PlayArrow\");\n/* harmony import */ var _material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_player_lazy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-player/lazy */ \"react-player/lazy\");\n/* harmony import */ var react_player_lazy__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_player_lazy__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_VolumeDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/VolumeDown */ \"@material-ui/icons/VolumeDown\");\n/* harmony import */ var _material_ui_icons_VolumeDown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VolumeDown__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_icons_VolumeUp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/VolumeUp */ \"@material-ui/icons/VolumeUp\");\n/* harmony import */ var _material_ui_icons_VolumeUp__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VolumeUp__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\nconst VideoBox = () => {\n  const [slideValue, setSlideValue] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(90);\n\n  const handleChange = (event, newSlideValue) => {\n    setSlideValue(newSlideValue);\n  };\n\n  return __jsx(\"div\", {\n    className: _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.videoWrapper\n  }, __jsx(\"div\", {\n    className: \"videoPlayBox\"\n  }, __jsx(react_player_lazy__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    url: \"https://youtu.be/xjadNS2HBpM\",\n    className: \"player\",\n    width: '100%',\n    height: 500,\n    autoPlay: false,\n    controls: true,\n    volume: 1,\n    muted: false\n  })), __jsx(\"div\", {\n    className: _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.playController\n  }, __jsx(\"div\", {\n    className: _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.playAndVolume\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"Grid\"], {\n    item: true,\n    xs: true\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"IconButton\"], {\n    className: _styles_components_buttons_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.IconButtonLg\n  }, __jsx(\"div\", null, __jsx(_material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    fontSize: \"large\",\n    style: {\n      color: '#fff'\n    }\n  })))), __jsx(_material_ui_icons_VolumeDown__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    className: _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.volume\n  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"Slider\"], {\n    className: _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.volumeMiddle,\n    value: slideValue,\n    onChange: handleChange\n  }), __jsx(_material_ui_icons_VolumeUp__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    className: _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.volume\n  })), __jsx(\"div\", {\n    className: _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rightController\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"IconButton\"], null, __jsx(\"div\", null, __jsx(_material_ui_icons_ClosedCaption__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    fontSize: \"large\",\n    style: {\n      color: '#fff'\n    }\n  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"IconButton\"], null, __jsx(\"div\", null, __jsx(_material_ui_icons_CropFree__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    fontSize: \"large\",\n    style: {\n      color: '#fff'\n    }\n  }))))), __jsx(\"div\", {\n    className: _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.videoMark\n  }, __jsx(\"ul\", null, __jsx(\"li\", {\n    className: _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.signUp\n  }, __jsx(\"span\", null, \"Signup\")), __jsx(\"li\", {\n    className: _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.explore\n  }, __jsx(\"span\", null, \"Explore\")), __jsx(\"li\", {\n    className: _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.preview\n  }, __jsx(\"span\", null, \"Course Preview\")), __jsx(\"li\", {\n    className: _VideoBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.video\n  }, __jsx(\"span\", null, \"Video & Markers\")))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (VideoBox);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ZpZGVvQm94L1ZpZGVvQm94LmpzP2E0N2MiXSwibmFtZXMiOlsiVmlkZW9Cb3giLCJzbGlkZVZhbHVlIiwic2V0U2xpZGVWYWx1ZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5ld1NsaWRlVmFsdWUiLCJzdHlsZXMiLCJ2aWRlb1dyYXBwZXIiLCJwbGF5Q29udHJvbGxlciIsInBsYXlBbmRWb2x1bWUiLCJidXR0b25TdHlsZXMiLCJJY29uQnV0dG9uTGciLCJjb2xvciIsInZvbHVtZSIsInZvbHVtZU1pZGRsZSIsInJpZ2h0Q29udHJvbGxlciIsInZpZGVvTWFyayIsInNpZ25VcCIsImV4cGxvcmUiLCJwcmV2aWV3IiwidmlkZW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUNyQixRQUFNLENBQUNDLFVBQUQsRUFBYUMsYUFBYixJQUE4QkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FBcEM7O0FBQ0EsUUFBTUMsWUFBWSxHQUFHLENBQUNDLEtBQUQsRUFBUUMsYUFBUixLQUEwQjtBQUM3Q0wsaUJBQWEsQ0FBQ0ssYUFBRCxDQUFiO0FBQ0QsR0FGRDs7QUFJQSxTQUNFO0FBQUssYUFBUyxFQUFFQyw0REFBTSxDQUFDQztBQUF2QixLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRSxNQUFDLHdEQUFEO0FBQ0UsT0FBRyxFQUFDLDhCQUROO0FBRUUsYUFBUyxFQUFDLFFBRlo7QUFHRSxTQUFLLEVBQUUsTUFIVDtBQUlFLFVBQU0sRUFBRSxHQUpWO0FBS0UsWUFBUSxFQUFFLEtBTFo7QUFNRSxZQUFRLEVBQUUsSUFOWjtBQU9FLFVBQU0sRUFBRSxDQVBWO0FBUUUsU0FBSyxFQUFFO0FBUlQsSUFERixDQURGLEVBYUU7QUFBSyxhQUFTLEVBQUVELDREQUFNLENBQUNFO0FBQXZCLEtBQ0U7QUFBSyxhQUFTLEVBQUVGLDREQUFNLENBQUNHO0FBQXZCLEtBQ0UsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUU7QUFBYixLQUNFLE1BQUMsNERBQUQ7QUFBWSxhQUFTLEVBQUVDLDZFQUFZLENBQUNDO0FBQXBDLEtBQ0UsbUJBQ0UsTUFBQyxtRUFBRDtBQUFlLFlBQVEsRUFBQyxPQUF4QjtBQUFnQyxTQUFLLEVBQUU7QUFBRUMsV0FBSyxFQUFFO0FBQVQ7QUFBdkMsSUFERixDQURGLENBREYsQ0FERixFQVFFLE1BQUMsb0VBQUQ7QUFBWSxhQUFTLEVBQUVOLDREQUFNLENBQUNPO0FBQTlCLElBUkYsRUFTRSxNQUFDLHdEQUFEO0FBQ0UsYUFBUyxFQUFFUCw0REFBTSxDQUFDUSxZQURwQjtBQUVFLFNBQUssRUFBRWYsVUFGVDtBQUdFLFlBQVEsRUFBRUk7QUFIWixJQVRGLEVBY0UsTUFBQyxrRUFBRDtBQUFVLGFBQVMsRUFBRUcsNERBQU0sQ0FBQ087QUFBNUIsSUFkRixDQURGLEVBaUJFO0FBQUssYUFBUyxFQUFFUCw0REFBTSxDQUFDUztBQUF2QixLQUNFLE1BQUMsNERBQUQsUUFDRSxtQkFDRSxNQUFDLHVFQUFEO0FBQW1CLFlBQVEsRUFBQyxPQUE1QjtBQUFvQyxTQUFLLEVBQUU7QUFBRUgsV0FBSyxFQUFFO0FBQVQ7QUFBM0MsSUFERixDQURGLENBREYsRUFNRSxNQUFDLDREQUFELFFBQ0UsbUJBQ0UsTUFBQyxrRUFBRDtBQUFjLFlBQVEsRUFBQyxPQUF2QjtBQUErQixTQUFLLEVBQUU7QUFBRUEsV0FBSyxFQUFFO0FBQVQ7QUFBdEMsSUFERixDQURGLENBTkYsQ0FqQkYsQ0FiRixFQTJDRTtBQUFLLGFBQVMsRUFBRU4sNERBQU0sQ0FBQ1U7QUFBdkIsS0FDRSxrQkFDRTtBQUFJLGFBQVMsRUFBRVYsNERBQU0sQ0FBQ1c7QUFBdEIsS0FDRSw2QkFERixDQURGLEVBSUU7QUFBSSxhQUFTLEVBQUVYLDREQUFNLENBQUNZO0FBQXRCLEtBQ0UsOEJBREYsQ0FKRixFQU9FO0FBQUksYUFBUyxFQUFFWiw0REFBTSxDQUFDYTtBQUF0QixLQUNFLHFDQURGLENBUEYsRUFVRTtBQUFJLGFBQVMsRUFBRWIsNERBQU0sQ0FBQ2M7QUFBdEIsS0FDRSxzQ0FERixDQVZGLENBREYsQ0EzQ0YsQ0FERjtBQThERCxDQXBFRDs7QUFzRWV0Qix1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVmlkZW9Cb3gvVmlkZW9Cb3guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYnV0dG9uU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9jb21wb25lbnRzL2J1dHRvbnMubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1ZpZGVvQm94Lm1vZHVsZS5zY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2xvc2VkQ2FwdGlvbkljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlZENhcHRpb24nO1xuaW1wb3J0IENyb3BGcmVlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ3JvcEZyZWUnO1xuaW1wb3J0IFBsYXlBcnJvd0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1BsYXlBcnJvdyc7XG5pbXBvcnQgUmVhY3RQbGF5ZXIgZnJvbSAncmVhY3QtcGxheWVyL2xhenknO1xuaW1wb3J0IFZvbHVtZURvd24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1ZvbHVtZURvd24nO1xuaW1wb3J0IFZvbHVtZVVwIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Wb2x1bWVVcCc7XG5pbXBvcnQgeyBHcmlkLCBJY29uQnV0dG9uLCBTbGlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5cbmNvbnN0IFZpZGVvQm94ID0gKCkgPT4ge1xuICBjb25zdCBbc2xpZGVWYWx1ZSwgc2V0U2xpZGVWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSg5MCk7XG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgbmV3U2xpZGVWYWx1ZSkgPT4ge1xuICAgIHNldFNsaWRlVmFsdWUobmV3U2xpZGVWYWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZGVvV3JhcHBlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvUGxheUJveFwiPlxuICAgICAgICA8UmVhY3RQbGF5ZXJcbiAgICAgICAgICB1cmw9XCJodHRwczovL3lvdXR1LmJlL3hqYWROUzJIQnBNXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwbGF5ZXJcIlxuICAgICAgICAgIHdpZHRoPXsnMTAwJSd9XG4gICAgICAgICAgaGVpZ2h0PXs1MDB9XG4gICAgICAgICAgYXV0b1BsYXk9e2ZhbHNlfVxuICAgICAgICAgIGNvbnRyb2xzPXt0cnVlfVxuICAgICAgICAgIHZvbHVtZT17MX1cbiAgICAgICAgICBtdXRlZD17ZmFsc2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxheUNvbnRyb2xsZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYXlBbmRWb2x1bWV9PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e2J1dHRvblN0eWxlcy5JY29uQnV0dG9uTGd9PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxQbGF5QXJyb3dJY29uIGZvbnRTaXplPVwibGFyZ2VcIiBzdHlsZT17eyBjb2xvcjogJyNmZmYnIH19IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8Vm9sdW1lRG93biBjbGFzc05hbWU9e3N0eWxlcy52b2x1bWV9IC8+XG4gICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudm9sdW1lTWlkZGxlfVxuICAgICAgICAgICAgdmFsdWU9e3NsaWRlVmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFZvbHVtZVVwIGNsYXNzTmFtZT17c3R5bGVzLnZvbHVtZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRDb250cm9sbGVyfT5cbiAgICAgICAgICA8SWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxDbG9zZWRDYXB0aW9uSWNvbiBmb250U2l6ZT1cImxhcmdlXCIgc3R5bGU9e3sgY29sb3I6ICcjZmZmJyB9fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDxJY29uQnV0dG9uPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPENyb3BGcmVlSWNvbiBmb250U2l6ZT1cImxhcmdlXCIgc3R5bGU9e3sgY29sb3I6ICcjZmZmJyB9fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWRlb01hcmt9PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLnNpZ25VcH0+XG4gICAgICAgICAgICA8c3Bhbj5TaWdudXA8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuZXhwbG9yZX0+XG4gICAgICAgICAgICA8c3Bhbj5FeHBsb3JlPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLnByZXZpZXd9PlxuICAgICAgICAgICAgPHNwYW4+Q291cnNlIFByZXZpZXc8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMudmlkZW99PlxuICAgICAgICAgICAgPHNwYW4+VmlkZW8gJiBNYXJrZXJzPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvQm94O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/VideoBox/VideoBox.js\n");

/***/ }),

/***/ "./components/VideoBox/VideoBox.module.scss":
/*!**************************************************!*\
  !*** ./components/VideoBox/VideoBox.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"videoWrapper\": \"VideoBox_videoWrapper__1pi5U\",\n\t\"playController\": \"VideoBox_playController__18SBm\",\n\t\"playAndVolume\": \"VideoBox_playAndVolume__1qiIR\",\n\t\"volume\": \"VideoBox_volume__19y6i\",\n\t\"volumeMiddle\": \"VideoBox_volumeMiddle__1bBWE\",\n\t\"videoMark\": \"VideoBox_videoMark__uJK-0\",\n\t\"signUp\": \"VideoBox_signUp__2curX\",\n\t\"explore\": \"VideoBox_explore__O21Yf\",\n\t\"preview\": \"VideoBox_preview___JI7q\",\n\t\"video\": \"VideoBox_video__2IXDR\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ZpZGVvQm94L1ZpZGVvQm94Lm1vZHVsZS5zY3NzPzQ0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL1ZpZGVvQm94L1ZpZGVvQm94Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidmlkZW9XcmFwcGVyXCI6IFwiVmlkZW9Cb3hfdmlkZW9XcmFwcGVyX18xcGk1VVwiLFxuXHRcInBsYXlDb250cm9sbGVyXCI6IFwiVmlkZW9Cb3hfcGxheUNvbnRyb2xsZXJfXzE4U0JtXCIsXG5cdFwicGxheUFuZFZvbHVtZVwiOiBcIlZpZGVvQm94X3BsYXlBbmRWb2x1bWVfXzFxaUlSXCIsXG5cdFwidm9sdW1lXCI6IFwiVmlkZW9Cb3hfdm9sdW1lX18xOXk2aVwiLFxuXHRcInZvbHVtZU1pZGRsZVwiOiBcIlZpZGVvQm94X3ZvbHVtZU1pZGRsZV9fMWJCV0VcIixcblx0XCJ2aWRlb01hcmtcIjogXCJWaWRlb0JveF92aWRlb01hcmtfX3VKSy0wXCIsXG5cdFwic2lnblVwXCI6IFwiVmlkZW9Cb3hfc2lnblVwX18yY3VyWFwiLFxuXHRcImV4cGxvcmVcIjogXCJWaWRlb0JveF9leHBsb3JlX19PMjFZZlwiLFxuXHRcInByZXZpZXdcIjogXCJWaWRlb0JveF9wcmV2aWV3X19fSkk3cVwiLFxuXHRcInZpZGVvXCI6IFwiVmlkZW9Cb3hfdmlkZW9fXzJJWERSXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/VideoBox/VideoBox.module.scss\n");

/***/ }),

/***/ "./components/context.js":
/*!*******************************!*\
  !*** ./components/context.js ***!
  \*******************************/
/*! exports provided: defaultDiscussionList, defaultReplyDiscussionList, Provider, Consumer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultDiscussionList\", function() { return defaultDiscussionList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultReplyDiscussionList\", function() { return defaultReplyDiscussionList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Provider\", function() { return Provider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Consumer\", function() { return Consumer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst defaultDiscussionList = [];\nconst defaultReplyDiscussionList = [];\nconst context = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\nconst {\n  Provider,\n  Consumer\n} = context;\n/* harmony default export */ __webpack_exports__[\"default\"] = (context);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRleHQuanM/MjQzOSJdLCJuYW1lcyI6WyJkZWZhdWx0RGlzY3Vzc2lvbkxpc3QiLCJkZWZhdWx0UmVwbHlEaXNjdXNzaW9uTGlzdCIsImNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUHJvdmlkZXIiLCJDb25zdW1lciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPLE1BQU1BLHFCQUFxQixHQUFHLEVBQTlCO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsRUFBbkM7QUFDUCxNQUFNQyxPQUFPLEdBQUdDLDJEQUFhLEVBQTdCO0FBQ08sTUFBTTtBQUFFQyxVQUFGO0FBQVlDO0FBQVosSUFBeUJILE9BQS9CO0FBQ1FBLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jb250ZXh0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBkZWZhdWx0RGlzY3Vzc2lvbkxpc3QgPSBbXTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0UmVwbHlEaXNjdXNzaW9uTGlzdCA9IFtdO1xuY29uc3QgY29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcbmV4cG9ydCBjb25zdCB7IFByb3ZpZGVyLCBDb25zdW1lciB9ID0gY29udGV4dDtcbmV4cG9ydCBkZWZhdWx0IGNvbnRleHQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/context.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_CommentLayout_CommentLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CommentLayout/CommentLayout */ \"./components/CommentLayout/CommentLayout.js\");\n/* harmony import */ var _components_ClassInfoWrapper_ClassInfoWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ClassInfoWrapper/ClassInfoWrapper */ \"./components/ClassInfoWrapper/ClassInfoWrapper.js\");\n/* harmony import */ var _components_VideoBox_VideoBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/VideoBox/VideoBox */ \"./components/VideoBox/VideoBox.js\");\n/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/context */ \"./components/context.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nconst Index = () => {\n  const {\n    0: discussionList,\n    1: setDiscussionList\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([..._components_context__WEBPACK_IMPORTED_MODULE_4__[\"defaultDiscussionList\"]]);\n  const {\n    0: replyDiscussionList,\n    1: setReplyDiscussionList\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([..._components_context__WEBPACK_IMPORTED_MODULE_4__[\"defaultReplyDiscussionList\"]]);\n  const commentContext = {\n    discussionList,\n    setDiscussionList,\n    replyDiscussionList,\n    setReplyDiscussionList\n  };\n  return __jsx(_components_context__WEBPACK_IMPORTED_MODULE_4__[\"Provider\"], {\n    value: commentContext\n  }, __jsx(\"div\", {\n    className: \"index\"\n  }, __jsx(\"section\", {\n    className: \"video-box-wrapper\"\n  }, __jsx(_components_VideoBox_VideoBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), __jsx(_components_CommentLayout_CommentLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)), __jsx(\"section\", {\n    className: \"video-title-wrapper\"\n  }, __jsx(_components_ClassInfoWrapper_ClassInfoWrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwiZGlzY3Vzc2lvbkxpc3QiLCJzZXREaXNjdXNzaW9uTGlzdCIsInVzZVN0YXRlIiwiZGVmYXVsdERpc2N1c3Npb25MaXN0IiwicmVwbHlEaXNjdXNzaW9uTGlzdCIsInNldFJlcGx5RGlzY3Vzc2lvbkxpc3QiLCJkZWZhdWx0UmVwbHlEaXNjdXNzaW9uTGlzdCIsImNvbW1lbnRDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTUEsTUFBTUEsS0FBSyxHQUFHLE1BQU07QUFDbEIsUUFBTTtBQUFBLE9BQUNDLGNBQUQ7QUFBQSxPQUFpQkM7QUFBakIsTUFBc0NDLHNEQUFRLENBQUMsQ0FDbkQsR0FBR0MseUVBRGdELENBQUQsQ0FBcEQ7QUFHQSxRQUFNO0FBQUEsT0FBQ0MsbUJBQUQ7QUFBQSxPQUFzQkM7QUFBdEIsTUFBZ0RILHNEQUFRLENBQUMsQ0FDN0QsR0FBR0ksOEVBRDBELENBQUQsQ0FBOUQ7QUFHQSxRQUFNQyxjQUFjLEdBQUc7QUFDckJQLGtCQURxQjtBQUVyQkMscUJBRnFCO0FBR3JCRyx1QkFIcUI7QUFJckJDO0FBSnFCLEdBQXZCO0FBTUEsU0FDRSxNQUFDLDREQUFEO0FBQVUsU0FBSyxFQUFFRTtBQUFqQixLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFTLGFBQVMsRUFBQztBQUFuQixLQUNFLE1BQUMscUVBQUQsT0FERixFQUVFLE1BQUMsK0VBQUQsT0FGRixDQURGLEVBS0U7QUFBUyxhQUFTLEVBQUM7QUFBbkIsS0FDRSxNQUFDLHFGQUFELE9BREYsQ0FMRixDQURGLENBREY7QUFhRCxDQTFCRDs7QUE0QmVSLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tbWVudExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1lbnRMYXlvdXQvQ29tbWVudExheW91dCc7XG5pbXBvcnQgQ2xhc3NJbmZvV3JhcHBlciBmcm9tICcuLi9jb21wb25lbnRzL0NsYXNzSW5mb1dyYXBwZXIvQ2xhc3NJbmZvV3JhcHBlcic7XG5pbXBvcnQgVmlkZW9Cb3ggZnJvbSAnLi4vY29tcG9uZW50cy9WaWRlb0JveC9WaWRlb0JveCc7XG5pbXBvcnQge1xuICBkZWZhdWx0RGlzY3Vzc2lvbkxpc3QsXG4gIGRlZmF1bHRSZXBseURpc2N1c3Npb25MaXN0LFxuICBQcm92aWRlcixcbn0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250ZXh0JztcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFtkaXNjdXNzaW9uTGlzdCwgc2V0RGlzY3Vzc2lvbkxpc3RdID0gdXNlU3RhdGUoW1xuICAgIC4uLmRlZmF1bHREaXNjdXNzaW9uTGlzdCxcbiAgXSk7XG4gIGNvbnN0IFtyZXBseURpc2N1c3Npb25MaXN0LCBzZXRSZXBseURpc2N1c3Npb25MaXN0XSA9IHVzZVN0YXRlKFtcbiAgICAuLi5kZWZhdWx0UmVwbHlEaXNjdXNzaW9uTGlzdCxcbiAgXSk7XG4gIGNvbnN0IGNvbW1lbnRDb250ZXh0ID0ge1xuICAgIGRpc2N1c3Npb25MaXN0LFxuICAgIHNldERpc2N1c3Npb25MaXN0LFxuICAgIHJlcGx5RGlzY3Vzc2lvbkxpc3QsXG4gICAgc2V0UmVwbHlEaXNjdXNzaW9uTGlzdCxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgdmFsdWU9e2NvbW1lbnRDb250ZXh0fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kZXhcIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidmlkZW8tYm94LXdyYXBwZXJcIj5cbiAgICAgICAgICA8VmlkZW9Cb3ggLz5cbiAgICAgICAgICA8Q29tbWVudExheW91dCAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInZpZGVvLXRpdGxlLXdyYXBwZXJcIj5cbiAgICAgICAgICA8Q2xhc3NJbmZvV3JhcHBlciAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/components/avatar.module.scss":
/*!**********************************************!*\
  !*** ./styles/components/avatar.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"avatarSm\": \"avatar_avatarSm__479-1\",\n\t\"avatarMl\": \"avatar_avatarMl__nQbe1\",\n\t\"avatarLg\": \"avatar_avatarLg__1VryI\",\n\t\"avatarXl\": \"avatar_avatarXl__3pcip\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvY29tcG9uZW50cy9hdmF0YXIubW9kdWxlLnNjc3M/MTdmNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3N0eWxlcy9jb21wb25lbnRzL2F2YXRhci5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImF2YXRhclNtXCI6IFwiYXZhdGFyX2F2YXRhclNtX180NzktMVwiLFxuXHRcImF2YXRhck1sXCI6IFwiYXZhdGFyX2F2YXRhck1sX19uUWJlMVwiLFxuXHRcImF2YXRhckxnXCI6IFwiYXZhdGFyX2F2YXRhckxnX18xVnJ5SVwiLFxuXHRcImF2YXRhclhsXCI6IFwiYXZhdGFyX2F2YXRhclhsX18zcGNpcFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/components/avatar.module.scss\n");

/***/ }),

/***/ "./styles/components/buttons.module.scss":
/*!***********************************************!*\
  !*** ./styles/components/buttons.module.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"iconButtonSm\": \"buttons_iconButtonSm__3kTrR\",\n\t\"btnCta\": \"buttons_btnCta__3OiIA\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvY29tcG9uZW50cy9idXR0b25zLm1vZHVsZS5zY3NzPzZiMDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3N0eWxlcy9jb21wb25lbnRzL2J1dHRvbnMubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpY29uQnV0dG9uU21cIjogXCJidXR0b25zX2ljb25CdXR0b25TbV9fM2tUclJcIixcblx0XCJidG5DdGFcIjogXCJidXR0b25zX2J0bkN0YV9fM09pSUFcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/components/buttons.module.scss\n");

/***/ }),

/***/ "./styles/components/commentDiscuss.module.scss":
/*!******************************************************!*\
  !*** ./styles/components/commentDiscuss.module.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"comment\": \"commentDiscuss_comment__1EpVa\",\n\t\"avatar\": \"commentDiscuss_avatar__27JMB\",\n\t\"commentWrapper\": \"commentDiscuss_commentWrapper__RoouY\",\n\t\"commentBox\": \"commentDiscuss_commentBox__hXEfi\",\n\t\"editDelete\": \"commentDiscuss_editDelete__CMNhs\",\n\t\"rightContent\": \"commentDiscuss_rightContent__3gczG\",\n\t\"commentContent\": \"commentDiscuss_commentContent__3x7Vh\",\n\t\"lattice\": \"commentDiscuss_lattice__5OL_L\",\n\t\"clicked\": \"commentDiscuss_clicked__2sBbF\",\n\t\"number\": \"commentDiscuss_number__g1Hc6\",\n\t\"replyCommentBox\": \"commentDiscuss_replyCommentBox__aClpg\",\n\t\"feedbackText\": \"commentDiscuss_feedbackText__zYWt_\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvY29tcG9uZW50cy9jb21tZW50RGlzY3Vzcy5tb2R1bGUuc2Nzcz9jMzYwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3N0eWxlcy9jb21wb25lbnRzL2NvbW1lbnREaXNjdXNzLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29tbWVudFwiOiBcImNvbW1lbnREaXNjdXNzX2NvbW1lbnRfXzFFcFZhXCIsXG5cdFwiYXZhdGFyXCI6IFwiY29tbWVudERpc2N1c3NfYXZhdGFyX18yN0pNQlwiLFxuXHRcImNvbW1lbnRXcmFwcGVyXCI6IFwiY29tbWVudERpc2N1c3NfY29tbWVudFdyYXBwZXJfX1Jvb3VZXCIsXG5cdFwiY29tbWVudEJveFwiOiBcImNvbW1lbnREaXNjdXNzX2NvbW1lbnRCb3hfX2hYRWZpXCIsXG5cdFwiZWRpdERlbGV0ZVwiOiBcImNvbW1lbnREaXNjdXNzX2VkaXREZWxldGVfX0NNTmhzXCIsXG5cdFwicmlnaHRDb250ZW50XCI6IFwiY29tbWVudERpc2N1c3NfcmlnaHRDb250ZW50X18zZ2N6R1wiLFxuXHRcImNvbW1lbnRDb250ZW50XCI6IFwiY29tbWVudERpc2N1c3NfY29tbWVudENvbnRlbnRfXzN4N1ZoXCIsXG5cdFwibGF0dGljZVwiOiBcImNvbW1lbnREaXNjdXNzX2xhdHRpY2VfXzVPTF9MXCIsXG5cdFwiY2xpY2tlZFwiOiBcImNvbW1lbnREaXNjdXNzX2NsaWNrZWRfXzJzQmJGXCIsXG5cdFwibnVtYmVyXCI6IFwiY29tbWVudERpc2N1c3NfbnVtYmVyX19nMUhjNlwiLFxuXHRcInJlcGx5Q29tbWVudEJveFwiOiBcImNvbW1lbnREaXNjdXNzX3JlcGx5Q29tbWVudEJveF9fYUNscGdcIixcblx0XCJmZWVkYmFja1RleHRcIjogXCJjb21tZW50RGlzY3Vzc19mZWVkYmFja1RleHRfX3pZV3RfXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/components/commentDiscuss.module.scss\n");

/***/ }),

/***/ "./styles/components/common.module.scss":
/*!**********************************************!*\
  !*** ./styles/components/common.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"sectionTitle\": \"common_sectionTitle__3iC9w\",\n\t\"input\": \"common_input__119cG\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvY29tcG9uZW50cy9jb21tb24ubW9kdWxlLnNjc3M/MWMyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL2NvbXBvbmVudHMvY29tbW9uLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2VjdGlvblRpdGxlXCI6IFwiY29tbW9uX3NlY3Rpb25UaXRsZV9fM2lDOXdcIixcblx0XCJpbnB1dFwiOiBcImNvbW1vbl9pbnB1dF9fMTE5Y0dcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/components/common.module.scss\n");

/***/ }),

/***/ "./styles/components/tag.module.scss":
/*!*******************************************!*\
  !*** ./styles/components/tag.module.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"tagNormal\": \"tag_tagNormal__3ZT5F\",\n\t\"tagGreen\": \"tag_tagGreen__1W1gi\",\n\t\"tagBlue\": \"tag_tagBlue__3lS7d\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvY29tcG9uZW50cy90YWcubW9kdWxlLnNjc3M/NGY1NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdHlsZXMvY29tcG9uZW50cy90YWcubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0YWdOb3JtYWxcIjogXCJ0YWdfdGFnTm9ybWFsX18zWlQ1RlwiLFxuXHRcInRhZ0dyZWVuXCI6IFwidGFnX3RhZ0dyZWVuX18xVzFnaVwiLFxuXHRcInRhZ0JsdWVcIjogXCJ0YWdfdGFnQmx1ZV9fM2xTN2RcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/components/tag.module.scss\n");

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ericwang/Documents/workspace/academyDemo/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiP2I2OTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core\n");

/***/ }),

/***/ "@material-ui/icons/ClosedCaption":
/*!***************************************************!*\
  !*** external "@material-ui/icons/ClosedCaption" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/ClosedCaption\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VkQ2FwdGlvblwiP2UyMjYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlZENhcHRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VkQ2FwdGlvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/ClosedCaption\n");

/***/ }),

/***/ "@material-ui/icons/CropFree":
/*!**********************************************!*\
  !*** external "@material-ui/icons/CropFree" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/CropFree\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ3JvcEZyZWVcIj85ODNkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9pY29ucy9Dcm9wRnJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Dcm9wRnJlZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/CropFree\n");

/***/ }),

/***/ "@material-ui/icons/PlayArrow":
/*!***********************************************!*\
  !*** external "@material-ui/icons/PlayArrow" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/PlayArrow\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGxheUFycm93XCI/NGE0ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvaWNvbnMvUGxheUFycm93LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1BsYXlBcnJvd1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/PlayArrow\n");

/***/ }),

/***/ "@material-ui/icons/Send":
/*!******************************************!*\
  !*** external "@material-ui/icons/Send" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Send\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VuZFwiPzU1MjkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2ljb25zL1NlbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VuZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Send\n");

/***/ }),

/***/ "@material-ui/icons/VolumeDown":
/*!************************************************!*\
  !*** external "@material-ui/icons/VolumeDown" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/VolumeDown\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVm9sdW1lRG93blwiPzE2OWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2ljb25zL1ZvbHVtZURvd24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVm9sdW1lRG93blwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/VolumeDown\n");

/***/ }),

/***/ "@material-ui/icons/VolumeUp":
/*!**********************************************!*\
  !*** external "@material-ui/icons/VolumeUp" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/VolumeUp\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVm9sdW1lVXBcIj8yNTBjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9pY29ucy9Wb2x1bWVVcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Wb2x1bWVVcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/VolumeUp\n");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIj9iZDc2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im1vbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///moment\n");

/***/ }),

/***/ "ramda":
/*!************************!*\
  !*** external "ramda" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ramda\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyYW1kYVwiPzkyMWEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmFtZGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyYW1kYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///ramda\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-icons-kit":
/*!**********************************!*\
  !*** external "react-icons-kit" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons-kit\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy1raXRcIj9kYzk2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWljb25zLWtpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zLWtpdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons-kit\n");

/***/ }),

/***/ "react-icons-kit/fa/thumbsOUp":
/*!***********************************************!*\
  !*** external "react-icons-kit/fa/thumbsOUp" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons-kit/fa/thumbsOUp\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy1raXQvZmEvdGh1bWJzT1VwXCI/Y2M4NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1pY29ucy1raXQvZmEvdGh1bWJzT1VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMta2l0L2ZhL3RodW1ic09VcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons-kit/fa/thumbsOUp\n");

/***/ }),

/***/ "react-icons-kit/fa/thumbsUp":
/*!**********************************************!*\
  !*** external "react-icons-kit/fa/thumbsUp" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons-kit/fa/thumbsUp\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy1raXQvZmEvdGh1bWJzVXBcIj8zMThiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWljb25zLWtpdC9mYS90aHVtYnNVcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zLWtpdC9mYS90aHVtYnNVcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons-kit/fa/thumbsUp\n");

/***/ }),

/***/ "react-icons-kit/icomoon/book":
/*!***********************************************!*\
  !*** external "react-icons-kit/icomoon/book" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons-kit/icomoon/book\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy1raXQvaWNvbW9vbi9ib29rXCI/YzU5NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1pY29ucy1raXQvaWNvbW9vbi9ib29rLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMta2l0L2ljb21vb24vYm9va1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons-kit/icomoon/book\n");

/***/ }),

/***/ "react-icons-kit/md/ic_add_circle":
/*!***************************************************!*\
  !*** external "react-icons-kit/md/ic_add_circle" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons-kit/md/ic_add_circle\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy1raXQvbWQvaWNfYWRkX2NpcmNsZVwiP2VlOTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMta2l0L21kL2ljX2FkZF9jaXJjbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy1raXQvbWQvaWNfYWRkX2NpcmNsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons-kit/md/ic_add_circle\n");

/***/ }),

/***/ "react-icons-kit/md/ic_check_circle":
/*!*****************************************************!*\
  !*** external "react-icons-kit/md/ic_check_circle" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons-kit/md/ic_check_circle\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy1raXQvbWQvaWNfY2hlY2tfY2lyY2xlXCI/NDYyZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1pY29ucy1raXQvbWQvaWNfY2hlY2tfY2lyY2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMta2l0L21kL2ljX2NoZWNrX2NpcmNsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons-kit/md/ic_check_circle\n");

/***/ }),

/***/ "react-icons-kit/md/ic_close":
/*!**********************************************!*\
  !*** external "react-icons-kit/md/ic_close" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons-kit/md/ic_close\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy1raXQvbWQvaWNfY2xvc2VcIj81MWJlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWljb25zLWtpdC9tZC9pY19jbG9zZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zLWtpdC9tZC9pY19jbG9zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons-kit/md/ic_close\n");

/***/ }),

/***/ "react-icons-kit/md/ic_feedback":
/*!*************************************************!*\
  !*** external "react-icons-kit/md/ic_feedback" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons-kit/md/ic_feedback\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy1raXQvbWQvaWNfZmVlZGJhY2tcIj81Y2IxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWljb25zLWtpdC9tZC9pY19mZWVkYmFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zLWtpdC9tZC9pY19mZWVkYmFja1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons-kit/md/ic_feedback\n");

/***/ }),

/***/ "react-icons-kit/md/ic_language":
/*!*************************************************!*\
  !*** external "react-icons-kit/md/ic_language" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons-kit/md/ic_language\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy1raXQvbWQvaWNfbGFuZ3VhZ2VcIj81MmIxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWljb25zLWtpdC9tZC9pY19sYW5ndWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zLWtpdC9tZC9pY19sYW5ndWFnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons-kit/md/ic_language\n");

/***/ }),

/***/ "react-icons-kit/md/ic_list":
/*!*********************************************!*\
  !*** external "react-icons-kit/md/ic_list" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons-kit/md/ic_list\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy1raXQvbWQvaWNfbGlzdFwiPzBhY2IiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMta2l0L21kL2ljX2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy1raXQvbWQvaWNfbGlzdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons-kit/md/ic_list\n");

/***/ }),

/***/ "react-icons-kit/md/ic_lock_outline":
/*!*****************************************************!*\
  !*** external "react-icons-kit/md/ic_lock_outline" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons-kit/md/ic_lock_outline\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy1raXQvbWQvaWNfbG9ja19vdXRsaW5lXCI/MDk0ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1pY29ucy1raXQvbWQvaWNfbG9ja19vdXRsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMta2l0L21kL2ljX2xvY2tfb3V0bGluZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons-kit/md/ic_lock_outline\n");

/***/ }),

/***/ "react-icons-kit/md/ic_search":
/*!***********************************************!*\
  !*** external "react-icons-kit/md/ic_search" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons-kit/md/ic_search\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy1raXQvbWQvaWNfc2VhcmNoXCI/NWQ2NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1pY29ucy1raXQvbWQvaWNfc2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMta2l0L21kL2ljX3NlYXJjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons-kit/md/ic_search\n");

/***/ }),

/***/ "react-icons-kit/md/ic_send":
/*!*********************************************!*\
  !*** external "react-icons-kit/md/ic_send" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons-kit/md/ic_send\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy1raXQvbWQvaWNfc2VuZFwiPzljYWMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMta2l0L21kL2ljX3NlbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy1raXQvbWQvaWNfc2VuZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons-kit/md/ic_send\n");

/***/ }),

/***/ "react-icons-kit/md/ic_share":
/*!**********************************************!*\
  !*** external "react-icons-kit/md/ic_share" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons-kit/md/ic_share\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy1raXQvbWQvaWNfc2hhcmVcIj83MDcxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWljb25zLWtpdC9tZC9pY19zaGFyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zLWtpdC9tZC9pY19zaGFyZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons-kit/md/ic_share\n");

/***/ }),

/***/ "react-icons-kit/md/ic_view_list":
/*!**************************************************!*\
  !*** external "react-icons-kit/md/ic_view_list" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons-kit/md/ic_view_list\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy1raXQvbWQvaWNfdmlld19saXN0XCI/MTU4MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1pY29ucy1raXQvbWQvaWNfdmlld19saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMta2l0L21kL2ljX3ZpZXdfbGlzdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons-kit/md/ic_view_list\n");

/***/ }),

/***/ "react-player/lazy":
/*!************************************!*\
  !*** external "react-player/lazy" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-player/lazy\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1wbGF5ZXIvbGF6eVwiPzNlZWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcGxheWVyL2xhenkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1wbGF5ZXIvbGF6eVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-player/lazy\n");

/***/ })

/******/ });