/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/common.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/header/header.js":
/*!*************************************!*\
  !*** ./src/blocks/header/header.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  var $shell = $('.header__navi');\n  $('.header__menu-open, .header__menu-close').on('click', function (e) {\n    e.preventDefault();\n    e.stopPropagation();\n    $shell.toggleClass('opened');\n  });\n  $(window).on('click', function (e) {\n    if ($shell.hasClass('opened') && !e.target.closest('.header__navi')) {\n      e.preventDefault();\n      $shell.toggleClass('opened');\n    }\n  });\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2hlYWRlci9oZWFkZXIuanM/Y2UyMyJdLCJuYW1lcyI6WyIkc2hlbGwiLCIkIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0b2dnbGVDbGFzcyIsIndpbmRvdyIsImhhc0NsYXNzIiwidGFyZ2V0IiwiY2xvc2VzdCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQyxZQUFNO0FBRU4sTUFBSUEsTUFBTSxHQUFHQyxDQUFDLENBQUMsZUFBRCxDQUFkO0FBRUFBLEdBQUMsQ0FBQyx5Q0FBRCxDQUFELENBQTZDQyxFQUE3QyxDQUFnRCxPQUFoRCxFQUF5RCxVQUFTQyxDQUFULEVBQVk7QUFDcEVBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBRCxLQUFDLENBQUNFLGVBQUY7QUFFQUwsVUFBTSxDQUFDTSxXQUFQLENBQW1CLFFBQW5CO0FBQ0EsR0FMRDtBQU9BTCxHQUFDLENBQUNNLE1BQUQsQ0FBRCxDQUFVTCxFQUFWLENBQWEsT0FBYixFQUFzQixVQUFTQyxDQUFULEVBQVk7QUFDakMsUUFBR0gsTUFBTSxDQUFDUSxRQUFQLENBQWdCLFFBQWhCLEtBQTZCLENBQUNMLENBQUMsQ0FBQ00sTUFBRixDQUFTQyxPQUFULENBQWlCLGVBQWpCLENBQWpDLEVBQW9FO0FBQ25FUCxPQUFDLENBQUNDLGNBQUY7QUFDQUosWUFBTSxDQUFDTSxXQUFQLENBQW1CLFFBQW5CO0FBQ0E7QUFDRCxHQUxEO0FBT0EsQ0FsQkQiLCJmaWxlIjoiLi9zcmMvYmxvY2tzL2hlYWRlci9oZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoKCkgPT4ge1xuXG5cdGxldCAkc2hlbGwgPSAkKCcuaGVhZGVyX19uYXZpJyk7XG5cblx0JCgnLmhlYWRlcl9fbWVudS1vcGVuLCAuaGVhZGVyX19tZW51LWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0JHNoZWxsLnRvZ2dsZUNsYXNzKCdvcGVuZWQnKTtcblx0fSk7XG5cdFxuXHQkKHdpbmRvdykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdGlmKCRzaGVsbC5oYXNDbGFzcygnb3BlbmVkJykgJiYgIWUudGFyZ2V0LmNsb3Nlc3QoJy5oZWFkZXJfX25hdmknKSkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0JHNoZWxsLnRvZ2dsZUNsYXNzKCdvcGVuZWQnKTtcblx0XHR9XG5cdH0pO1xuXHRcbn0pKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/blocks/header/header.js\n");

/***/ }),

/***/ "./src/js/common.js":
/*!**************************!*\
  !*** ./src/js/common.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_header_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks/header/header.js */ \"./src/blocks/header/header.js\");\n/* harmony import */ var _blocks_header_header_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_header_header_js__WEBPACK_IMPORTED_MODULE_0__);\n// import \"../blocks/someblock/someblock.js\";\n\n/* Polyfills */\n\n(function (e) {\n  e.matches = e.matches || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector;\n\n  e.closest = e.closest || function closest(selector) {\n    if (!this) return null;\n    if (this.matches(selector)) return this;\n\n    if (!this.parentElement) {\n      return null;\n    } else return this.parentElement.closest(selector);\n  };\n})(Element.prototype);\n\n(function (e) {\n  var matches = e.matches || e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector;\n  !matches ? e.matches = e.matchesSelector = function matches(selector) {\n    var matches = document.querySelectorAll(selector);\n    var th = this;\n    return Array.prototype.some.call(matches, function (e) {\n      return e === th;\n    });\n  } : e.matches = e.matchesSelector = matches;\n})(Element.prototype);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tbW9uLmpzPzQ0MGEiXSwibmFtZXMiOlsiZSIsIm1hdGNoZXMiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsIm9NYXRjaGVzU2VsZWN0b3IiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJjbG9zZXN0Iiwic2VsZWN0b3IiLCJwYXJlbnRFbGVtZW50IiwiRWxlbWVudCIsInByb3RvdHlwZSIsIm1hdGNoZXNTZWxlY3RvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInRoIiwiQXJyYXkiLCJzb21lIiwiY2FsbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBOztBQUNDLFdBQVNBLENBQVQsRUFBWTtBQUNaQSxHQUFDLENBQUNDLE9BQUYsR0FBWUQsQ0FBQyxDQUFDQyxPQUFGLElBQWFELENBQUMsQ0FBQ0Usa0JBQWYsSUFBcUNGLENBQUMsQ0FBQ0csaUJBQXZDLElBQTRESCxDQUFDLENBQUNJLGdCQUE5RCxJQUFrRkosQ0FBQyxDQUFDSyxxQkFBaEc7O0FBQ0FMLEdBQUMsQ0FBQ00sT0FBRixHQUFZTixDQUFDLENBQUNNLE9BQUYsSUFBYSxTQUFTQSxPQUFULENBQWlCQyxRQUFqQixFQUEyQjtBQUNuRCxRQUFJLENBQUMsSUFBTCxFQUFXLE9BQU8sSUFBUDtBQUNYLFFBQUksS0FBS04sT0FBTCxDQUFhTSxRQUFiLENBQUosRUFBNEIsT0FBTyxJQUFQOztBQUM1QixRQUFJLENBQUMsS0FBS0MsYUFBVixFQUF5QjtBQUFDLGFBQU8sSUFBUDtBQUFZLEtBQXRDLE1BQ00sT0FBTyxLQUFLQSxhQUFMLENBQW1CRixPQUFuQixDQUEyQkMsUUFBM0IsQ0FBUDtBQUNMLEdBTEY7QUFNQSxDQVJBLEVBUUNFLE9BQU8sQ0FBQ0MsU0FSVCxDQUFEOztBQVVBLENBQUMsVUFBU1YsQ0FBVCxFQUFZO0FBQ1osTUFBSUMsT0FBTyxHQUFHRCxDQUFDLENBQUNDLE9BQUYsSUFBYUQsQ0FBQyxDQUFDVyxlQUFmLElBQWtDWCxDQUFDLENBQUNLLHFCQUFwQyxJQUE2REwsQ0FBQyxDQUFDRSxrQkFBL0QsSUFBcUZGLENBQUMsQ0FBQ0csaUJBQXZGLElBQTRHSCxDQUFDLENBQUNJLGdCQUE1SDtBQUNBLEdBQUNILE9BQUQsR0FBWUQsQ0FBQyxDQUFDQyxPQUFGLEdBQVlELENBQUMsQ0FBQ1csZUFBRixHQUFvQixTQUFTVixPQUFULENBQWlCTSxRQUFqQixFQUEyQjtBQUN0RSxRQUFJTixPQUFPLEdBQUdXLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEJOLFFBQTFCLENBQWQ7QUFDQSxRQUFJTyxFQUFFLEdBQUcsSUFBVDtBQUNBLFdBQU9DLEtBQUssQ0FBQ0wsU0FBTixDQUFnQk0sSUFBaEIsQ0FBcUJDLElBQXJCLENBQTBCaEIsT0FBMUIsRUFBbUMsVUFBU0QsQ0FBVCxFQUFZO0FBQ3JELGFBQU9BLENBQUMsS0FBS2MsRUFBYjtBQUNBLEtBRk0sQ0FBUDtBQUdBLEdBTkQsR0FNTWQsQ0FBQyxDQUFDQyxPQUFGLEdBQVlELENBQUMsQ0FBQ1csZUFBRixHQUFvQlYsT0FOdEM7QUFPQSxDQVRELEVBU0dRLE9BQU8sQ0FBQ0MsU0FUWCIsImZpbGUiOiIuL3NyYy9qcy9jb21tb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgXCIuLi9ibG9ja3Mvc29tZWJsb2NrL3NvbWVibG9jay5qc1wiO1xyXG5pbXBvcnQgXCIuLi9ibG9ja3MvaGVhZGVyL2hlYWRlci5qc1wiO1xyXG5cclxuXHJcblxyXG4vKiBQb2x5ZmlsbHMgKi9cclxuKGZ1bmN0aW9uKGUpIHtcclxuXHRlLm1hdGNoZXMgPSBlLm1hdGNoZXMgfHwgZS5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgZS5tc01hdGNoZXNTZWxlY3RvciB8fCBlLm9NYXRjaGVzU2VsZWN0b3IgfHwgZS53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XHJcblx0ZS5jbG9zZXN0ID0gZS5jbG9zZXN0IHx8IGZ1bmN0aW9uIGNsb3Nlc3Qoc2VsZWN0b3IpIHtcclxuXHRcdGlmICghdGhpcykgcmV0dXJuIG51bGw7XHJcblx0XHRpZiAodGhpcy5tYXRjaGVzKHNlbGVjdG9yKSkgcmV0dXJuIHRoaXM7XHJcblx0XHRpZiAoIXRoaXMucGFyZW50RWxlbWVudCkge3JldHVybiBudWxsfVxyXG5cdFx0XHRlbHNlIHJldHVybiB0aGlzLnBhcmVudEVsZW1lbnQuY2xvc2VzdChzZWxlY3RvcilcclxuXHRcdH07XHJcbn0oRWxlbWVudC5wcm90b3R5cGUpKTtcclxuXHJcbihmdW5jdGlvbihlKSB7XHJcblx0dmFyIG1hdGNoZXMgPSBlLm1hdGNoZXMgfHwgZS5tYXRjaGVzU2VsZWN0b3IgfHwgZS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHwgZS5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgZS5tc01hdGNoZXNTZWxlY3RvciB8fCBlLm9NYXRjaGVzU2VsZWN0b3I7XHJcblx0IW1hdGNoZXMgPyAoZS5tYXRjaGVzID0gZS5tYXRjaGVzU2VsZWN0b3IgPSBmdW5jdGlvbiBtYXRjaGVzKHNlbGVjdG9yKSB7XHJcblx0XHR2YXIgbWF0Y2hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5cdFx0dmFyIHRoID0gdGhpcztcclxuXHRcdHJldHVybiBBcnJheS5wcm90b3R5cGUuc29tZS5jYWxsKG1hdGNoZXMsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0cmV0dXJuIGUgPT09IHRoO1xyXG5cdFx0fSk7XHJcblx0fSkgOiAoZS5tYXRjaGVzID0gZS5tYXRjaGVzU2VsZWN0b3IgPSBtYXRjaGVzKTtcclxufSkoRWxlbWVudC5wcm90b3R5cGUpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/common.js\n");

/***/ })

/******/ });