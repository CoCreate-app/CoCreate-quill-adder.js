(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["quillAdder"] = factory();
	else
		root["CoCreate"] = root["CoCreate"] || {}, root["CoCreate"]["quillAdder"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../CoCreate-components/CoCreate-quill-adder/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../CoCreate-components/CoCreate-quill-adder/src/index.js":
/*!****************************************************************!*\
  !*** ../CoCreate-components/CoCreate-quill-adder/src/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _elementConfig = _interopRequireDefault(__webpack_require__(/*! ../../../CoCreate-modules/CoCreate-builder/src/elementConfig */ \"../CoCreate-modules/CoCreate-builder/src/elementConfig.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nlet canvasSelector = \"#canvas\";\nlet canvas, canvasDocument, canvasWindow;\n\nfunction QuillAdder() {\n  // this.lastPlacement;\n  this.quill = document.createElement(\"div\");\n  this.quill.setAttribute(\"class\", \"quill bubble block-observer\");\n  this.quill.setAttribute(\"data-theme\", \"bubble\");\n  this.quill.setAttribute(\"data-document_id\", \"null\");\n  this.quill.setAttribute(\"data-collection\", \"12test\");\n\n  this.wrapQuill = function (el) {\n    if (!this.quill.children.length) {\n      this.quill.setAttribute(\"name\", el.getAttribute('data-element_id'));\n      this.quill.append(el.cloneNode(true));\n      el.replaceWith(this.quill); // it's always editor 0\n\n      let quill = canvasWindow.CoCreateQuill;\n\n      quill.onNewEditor = function (editor) {\n        canvasWindow.CoCreateQuill.editors[0].clipboard.dangerouslyPasteHTML(el.outerHTML);\n      }; // it's always editor 0\n      // let quill = canvasWindow.CoCreateQuill;\n      // quill.onNewEditor = function (editor) {\n      // for every change in quill get the elements and update using crdt\n      //   editor.on(\"text-change\", function () {\n      //     let quillEl = quill.elements[0];\n      //     let [nextSibling, skip] = getNextSibling(quillEl)\n      //     // el = quillEl;\n      //     // do{\n      //     //if (el.previousSibling) {\n      //     //   el = el.previousSibling;\n      //     //   position = \"afterend\";\n      //     // } else {\n      //     //   el = el.parentElement;\n      //     //   position = \"afterbegin\";\n      //     // }\n      //     // }while(!el.getAttribute)\n      //     sendCrdtPayload(\n      //       {\n      //         method: \"insertAdjacentElement\",\n      //         property: 'beforebegin',\n      //         target: {\n      //           target: el.getAttribute(\"data-element_id\"),\n      //           tagName: el.tagName,\n      //           nextSibling: nextSibling.getAttribute(\"data-element_id\"),\n      //           skip,\n      //         },\n      //         element: {\n      //           value: quillEl.querySelector(\":scope > .ql-editor\").innerHTML,\n      //         },\n      //       },\n      //       {\n      //         collection: \"module_activities\",\n      //         document_id: \"5edda7608d5c7a7d656edecd\",\n      //         name: \"html\",\n      //       }\n      //     );\n      //   });\n      // };\n\n    }\n  };\n\n  this.unwrapQuill = function (target) {\n    if (!this.quill.contains(target)) {\n      //if we don't click inside quill\n      let content = this.quill.querySelector(\":scope > .ql-editor\");\n      if (content) this.quill.replaceWith(...content.children);\n      this.quill.innerHTML = \"\";\n    }\n  };\n}\n\nfunction load() {\n  let q = new QuillAdder();\n  canvas = document.querySelector(canvasSelector);\n  canvasWindow = canvas.contentWindow;\n  canvasDocument = canvasWindow.document || canvas.contentDocument;\n  canvasDocument.addEventListener(\"dblclick\", e => {\n    CoCreate.utils.configExecuter(e.target, \"editable\", el => q.wrapQuill(el), _elementConfig.default); // for (let config of window.cc.configMatch(window.elementConfig, e.target))\n    //   if (config.selectable === true) q.wrapQuill(e.target);\n    //   else if(config.selectable === false) return;\n    //   else if(config.selectable === undefined) continue;\n    //   else if (window.cc.isValidSelector(config.selectable)) {\n    //     window.cc.findElement(canvasDocument, config.selectable, el => q.wrapQuill(el))\n    //   }\n    //   else\n    //   console.warn('builder: ', 'wrong element config ', config);\n  });\n  canvasDocument.addEventListener(\"click\", e => {\n    q.unwrapQuill(e.target);\n  }); //   document.addEventListener(\"click\", (e) => {\n  //     // e.target.dispatchEvent(new Event('dblclick'), {bubble: true})\n  //     q.unwrapQuill(e.target);\n  //   });\n  //   document.addEventListener(\"dblclick\", (e) => {\n  //     q.wrapQuill(e.target);\n  //   });\n}\n\nwindow.addEventListener(\"load\", load);\nwindow.addEventListener(\"CoCreateHtmlTags-rendered\", load);\nvar _default = QuillAdder;\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS5xdWlsbEFkZGVyLy4uL0NvQ3JlYXRlLWNvbXBvbmVudHMvQ29DcmVhdGUtcXVpbGwtYWRkZXIvc3JjL2luZGV4LmpzPzZmMmEiXSwibmFtZXMiOlsiY2FudmFzU2VsZWN0b3IiLCJjYW52YXMiLCJjYW52YXNEb2N1bWVudCIsImNhbnZhc1dpbmRvdyIsIlF1aWxsQWRkZXIiLCJxdWlsbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIndyYXBRdWlsbCIsImVsIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJnZXRBdHRyaWJ1dGUiLCJhcHBlbmQiLCJjbG9uZU5vZGUiLCJyZXBsYWNlV2l0aCIsIkNvQ3JlYXRlUXVpbGwiLCJvbk5ld0VkaXRvciIsImVkaXRvciIsImVkaXRvcnMiLCJjbGlwYm9hcmQiLCJkYW5nZXJvdXNseVBhc3RlSFRNTCIsIm91dGVySFRNTCIsInVud3JhcFF1aWxsIiwidGFyZ2V0IiwiY29udGFpbnMiLCJjb250ZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsImxvYWQiLCJxIiwiY29udGVudFdpbmRvdyIsImNvbnRlbnREb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiQ29DcmVhdGUiLCJ1dGlscyIsImNvbmZpZ0V4ZWN1dGVyIiwiZWxlbWVudENvbmZpZyIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0EsSUFBSUEsY0FBYyxHQUFHLFNBQXJCO0FBQ0EsSUFBSUMsTUFBSixFQUFZQyxjQUFaLEVBQTRCQyxZQUE1Qjs7QUFFQSxTQUFTQyxVQUFULEdBQXNCO0FBQ3BCO0FBRUEsT0FBS0MsS0FBTCxHQUFhQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBYjtBQUNBLE9BQUtGLEtBQUwsQ0FBV0csWUFBWCxDQUF3QixPQUF4QixFQUFpQyw2QkFBakM7QUFDQSxPQUFLSCxLQUFMLENBQVdHLFlBQVgsQ0FBd0IsWUFB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Z0NKLElBQWhDO0FBQ0FVLE1BQU0sQ0FBQ04sZ0JBQVAsQ0FBd0IsMkJBQXhCLEVBQXFESixJQUFyRDtlQUNlMUIsVSIsImZpbGUiOiIuLi9Db0NyZWF0ZS1jb21wb25lbnRzL0NvQ3JlYXRlLXF1aWxsLWFkZGVyL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlbGVtZW50Q29uZmlnIGZyb20gJy4uLy4uLy4uL0NvQ3JlYXRlLW1vZHVsZXMvQ29DcmVhdGUtYnVpbGRlci9zcmMvZWxlbWVudENvbmZpZydcbmxldCBjYW52YXNTZWxlY3RvciA9IFwiI2NhbnZhc1wiO1xubGV0IGNhbnZhcywgY2FudmFzRG9jdW1lbnQsIGNhbnZhc1dpbmRvdztcblxuZnVuY3Rpb24gUXVpbGxBZGRlcigpIHtcbiAgLy8gdGhpcy5sYXN0UGxhY2VtZW50O1xuXG4gIHRoaXMucXVpbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aGlzLnF1aWxsLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicXVpbGwgYnViYmxlIGJsb2NrLW9ic2VydmVyXCIpO1xuICB0aGlzLnF1aWxsLnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIiwgXCJidWJibGVcIik7XG5cbiAgdGhpcy5xdWlsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWRvY3VtZW50X2lkXCIsIFwibnVsbFwiKTtcbiAgdGhpcy5xdWlsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbGxlY3Rpb25cIiwgXCIxMnRlc3RcIik7XG5cbiAgdGhpcy53cmFwUXVpbGwgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICBpZiAoIXRoaXMucXVpbGwuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMucXVpbGwuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudF9pZCcpKTtcbiAgICAgIHRoaXMucXVpbGwuYXBwZW5kKGVsLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICBlbC5yZXBsYWNlV2l0aCh0aGlzLnF1aWxsKTtcbiAgICAgIFxuICAgICAgICAgICAgXG4gICAgICBcbiAgICAgIC8vIGl0J3MgYWx3YXlzIGVkaXRvciAwXG4gICAgICBsZXQgcXVpbGwgPSBjYW52YXNXaW5kb3cuQ29DcmVhdGVRdWlsbDtcblxuICAgICAgcXVpbGwub25OZXdFZGl0b3IgPSBmdW5jdGlvbiAoZWRpdG9yKSB7XG4gICAgICAgIGNhbnZhc1dpbmRvdy5Db0NyZWF0ZVF1aWxsLmVkaXRvcnNbMF0uY2xpcGJvYXJkLmRhbmdlcm91c2x5UGFzdGVIVE1MKGVsLm91dGVySFRNTClcbiAgICAgIH07XG4gICAgICBcbiAgICAgIFxuICAgICAgXG4gICAgICAvLyBpdCdzIGFsd2F5cyBlZGl0b3IgMFxuICAgICAgLy8gbGV0IHF1aWxsID0gY2FudmFzV2luZG93LkNvQ3JlYXRlUXVpbGw7XG5cbiAgICAgIC8vIHF1aWxsLm9uTmV3RWRpdG9yID0gZnVuY3Rpb24gKGVkaXRvcikge1xuICAgICAgLy8gZm9yIGV2ZXJ5IGNoYW5nZSBpbiBxdWlsbCBnZXQgdGhlIGVsZW1lbnRzIGFuZCB1cGRhdGUgdXNpbmcgY3JkdFxuICAgICAgLy8gICBlZGl0b3Iub24oXCJ0ZXh0LWNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyAgICAgbGV0IHF1aWxsRWwgPSBxdWlsbC5lbGVtZW50c1swXTtcbiAgICAgIC8vICAgICBsZXQgW25leHRTaWJsaW5nLCBza2lwXSA9IGdldE5leHRTaWJsaW5nKHF1aWxsRWwpXG4gICAgICAvLyAgICAgLy8gZWwgPSBxdWlsbEVsO1xuICAgICAgLy8gICAgIC8vIGRve1xuICAgICAgLy8gICAgIC8vaWYgKGVsLnByZXZpb3VzU2libGluZykge1xuICAgICAgLy8gICAgIC8vICAgZWwgPSBlbC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAvLyAgICAgLy8gICBwb3NpdGlvbiA9IFwiYWZ0ZXJlbmRcIjtcbiAgICAgIC8vICAgICAvLyB9IGVsc2Uge1xuICAgICAgLy8gICAgIC8vICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICAgICAgLy8gICAgIC8vICAgcG9zaXRpb24gPSBcImFmdGVyYmVnaW5cIjtcbiAgICAgIC8vICAgICAvLyB9XG4gICAgICAvLyAgICAgLy8gfXdoaWxlKCFlbC5nZXRBdHRyaWJ1dGUpXG5cblxuICAgICAgLy8gICAgIHNlbmRDcmR0UGF5bG9hZChcbiAgICAgIC8vICAgICAgIHtcbiAgICAgIC8vICAgICAgICAgbWV0aG9kOiBcImluc2VydEFkamFjZW50RWxlbWVudFwiLFxuICAgICAgLy8gICAgICAgICBwcm9wZXJ0eTogJ2JlZm9yZWJlZ2luJyxcbiAgICAgIC8vICAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAvLyAgICAgICAgICAgdGFyZ2V0OiBlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWVsZW1lbnRfaWRcIiksXG4gICAgICAvLyAgICAgICAgICAgdGFnTmFtZTogZWwudGFnTmFtZSxcbiAgICAgIC8vICAgICAgICAgICBuZXh0U2libGluZzogbmV4dFNpYmxpbmcuZ2V0QXR0cmlidXRlKFwiZGF0YS1lbGVtZW50X2lkXCIpLFxuICAgICAgLy8gICAgICAgICAgIHNraXAsXG4gICAgICAvLyAgICAgICAgIH0sXG4gICAgICAvLyAgICAgICAgIGVsZW1lbnQ6IHtcbiAgICAgIC8vICAgICAgICAgICB2YWx1ZTogcXVpbGxFbC5xdWVyeVNlbGVjdG9yKFwiOnNjb3BlID4gLnFsLWVkaXRvclwiKS5pbm5lckhUTUwsXG4gICAgICAvLyAgICAgICAgIH0sXG4gICAgICAvLyAgICAgICB9LFxuICAgICAgLy8gICAgICAge1xuICAgICAgLy8gICAgICAgICBjb2xsZWN0aW9uOiBcIm1vZHVsZV9hY3Rpdml0aWVzXCIsXG4gICAgICAvLyAgICAgICAgIGRvY3VtZW50X2lkOiBcIjVlZGRhNzYwOGQ1YzdhN2Q2NTZlZGVjZFwiLFxuICAgICAgLy8gICAgICAgICBuYW1lOiBcImh0bWxcIixcbiAgICAgIC8vICAgICAgIH1cbiAgICAgIC8vICAgICApO1xuICAgICAgLy8gICB9KTtcbiAgICAgIC8vIH07XG4gICAgICBcbiAgICAgIFxuICAgIH1cbiAgfTtcbiAgXG4gIHRoaXMudW53cmFwUXVpbGwgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgaWYgKCF0aGlzLnF1aWxsLmNvbnRhaW5zKHRhcmdldCkpIHtcbiAgICAgIC8vaWYgd2UgZG9uJ3QgY2xpY2sgaW5zaWRlIHF1aWxsXG4gICAgICBsZXQgY29udGVudCA9IHRoaXMucXVpbGwucXVlcnlTZWxlY3RvcihcIjpzY29wZSA+IC5xbC1lZGl0b3JcIik7XG4gICAgICBpZiAoY29udGVudCkgdGhpcy5xdWlsbC5yZXBsYWNlV2l0aCguLi5jb250ZW50LmNoaWxkcmVuKTtcbiAgICAgIHRoaXMucXVpbGwuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGxvYWQoKSB7XG4gIGxldCBxID0gbmV3IFF1aWxsQWRkZXIoKTtcblxuICBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNhbnZhc1NlbGVjdG9yKTtcbiAgY2FudmFzV2luZG93ID0gY2FudmFzLmNvbnRlbnRXaW5kb3c7XG4gIGNhbnZhc0RvY3VtZW50ID0gY2FudmFzV2luZG93LmRvY3VtZW50IHx8IGNhbnZhcy5jb250ZW50RG9jdW1lbnQ7XG5cbiAgY2FudmFzRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIChlKSA9PiB7XG4gICAgQ29DcmVhdGUudXRpbHMuY29uZmlnRXhlY3V0ZXIoZS50YXJnZXQsIFwiZWRpdGFibGVcIiwgKGVsKSA9PiBxLndyYXBRdWlsbChlbCksIGVsZW1lbnRDb25maWcpO1xuICAgIC8vIGZvciAobGV0IGNvbmZpZyBvZiB3aW5kb3cuY2MuY29uZmlnTWF0Y2god2luZG93LmVsZW1lbnRDb25maWcsIGUudGFyZ2V0KSlcbiAgICAvLyAgIGlmIChjb25maWcuc2VsZWN0YWJsZSA9PT0gdHJ1ZSkgcS53cmFwUXVpbGwoZS50YXJnZXQpO1xuICAgIC8vICAgZWxzZSBpZihjb25maWcuc2VsZWN0YWJsZSA9PT0gZmFsc2UpIHJldHVybjtcbiAgICAvLyAgIGVsc2UgaWYoY29uZmlnLnNlbGVjdGFibGUgPT09IHVuZGVmaW5lZCkgY29udGludWU7XG4gICAgLy8gICBlbHNlIGlmICh3aW5kb3cuY2MuaXNWYWxpZFNlbGVjdG9yKGNvbmZpZy5zZWxlY3RhYmxlKSkge1xuICAgIC8vICAgICB3aW5kb3cuY2MuZmluZEVsZW1lbnQoY2FudmFzRG9jdW1lbnQsIGNvbmZpZy5zZWxlY3RhYmxlLCBlbCA9PiBxLndyYXBRdWlsbChlbCkpXG4gICAgLy8gICB9XG4gICAgLy8gICBlbHNlXG4gICAgLy8gICBjb25zb2xlLndhcm4oJ2J1aWxkZXI6ICcsICd3cm9uZyBlbGVtZW50IGNvbmZpZyAnLCBjb25maWcpO1xuICB9KTtcbiAgY2FudmFzRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgcS51bndyYXBRdWlsbChlLnRhcmdldCk7XG4gIH0pO1xuICAvLyAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAvLyAgICAgLy8gZS50YXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2RibGNsaWNrJyksIHtidWJibGU6IHRydWV9KVxuICAvLyAgICAgcS51bndyYXBRdWlsbChlLnRhcmdldCk7XG4gIC8vICAgfSk7XG4gIC8vICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIChlKSA9PiB7XG4gIC8vICAgICBxLndyYXBRdWlsbChlLnRhcmdldCk7XG4gIC8vICAgfSk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBsb2FkKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiQ29DcmVhdGVIdG1sVGFncy1yZW5kZXJlZFwiLCBsb2FkKTtcbmV4cG9ydCBkZWZhdWx0IFF1aWxsQWRkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../CoCreate-components/CoCreate-quill-adder/src/index.js\n");

/***/ }),

/***/ "../CoCreate-modules/CoCreate-builder/src/elementConfig.js":
/*!*****************************************************************!*\
  !*** ../CoCreate-modules/CoCreate-builder/src/elementConfig.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nconst elementConfig = [{\n  selector: \"*\",\n  editable: false,\n  draggable: true,\n  droppable: true,\n  selectable: true,\n  hoverable: true\n}, {\n  selector: \"h1, h2, h3, h4, h5, h6, p, span, blockquote\",\n  editable: true,\n  draggable: true,\n  droppable: false,\n  selectable: true,\n  hoverable: true\n}, {\n  selector: \"input\",\n  editable: false,\n  draggable: false,\n  droppable: false\n}, {\n  selector: \"textarea\",\n  editable: false\n}, {\n  selector: \"select\",\n  editable: false\n}, {\n  selector: \"div.quill\",\n  draggable: true,\n  droppable: false,\n  selectable: true,\n  hoverable: false\n}, {\n  selector: \"div.nav\",\n  tagName: \"navbar\",\n  draggable: true,\n  droppable: true,\n  selectable: true,\n  hoverable: true\n}, {\n  selector: \"div.floating-label_field\",\n  draggable: true,\n  droppable: false,\n  selectable: false,\n  hoverable: false\n}, {\n  selector: \"div.ql-editor *\",\n  draggable: false,\n  droppable: false // selectable: false,\n  // hoverable: false,\n\n}, {\n  tagName: \"icon\",\n  selector: \"a.menu_icon\",\n  editable: false,\n  draggable: false,\n  droppable: false,\n  selectable: true,\n  hoverable: true\n}, {\n  selector: \"a.menu_icon span\",\n  selectable: false,\n  hoverable: false\n}, {\n  selector: \"menu_icon.span\",\n  editable: false,\n  draggable: false,\n  droppable: false,\n  selectable: false,\n  hoverable: false,\n  selectable2: true\n}].reverse();\nvar _default = elementConfig;\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS5xdWlsbEFkZGVyLy4uL0NvQ3JlYXRlLW1vZHVsZXMvQ29DcmVhdGUtYnVpbGRlci9zcmMvZWxlbWVudENvbmZpZy5qcz81ZjczIl0sIm5hbWVzIjpbImVsZW1lbnRDb25maWciLCJzZWxlY3RvciIsImVkaXRhYmxlIiwiZHJhZ2dhYmxlIiwiZHJvcHBhYmxlIiwic2VsZWN0YWJsZSIsImhvdmVyYWJsZSIsInRhZ05hbWUiLCJzZWxlY3RhYmxlMiIsInJldmVyc2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE1BQU1BLGFBQWEsR0FBRyxDQUFDO0FBQ2pCQyxVQUFRLEVBQUUsR0FETztBQUVqQkMsVUFBUSxFQUFFLEtBRk87QUFHakJDLFdBQVMsRUFBRSxJQUhNO0FBSWpCQyxXQUFTLEVBQUUsSUFKTTtBQUtqQkMsWUFBVSxFQUFFLElBTEs7QUFNakJDLFdBQVMsRUFBRTtBQU5NLENBQUQsRUFRbEI7QUFDRUwsVUFBUSxFQUFFLDZDQURaO0FBRUVDLFVBQVEsRUFBRSxJQUZaO0FBR0VDLFdBQVMsRUFBRSxJQUhiO0FBSUVDLFdBQVMsRUFBRSxLQUpiO0FBS0VDLFlBQVUsRUFBRSxJQUxkO0FBTUVDLFdBQVMsRUFBRTtBQU5iLENBUmtCLEVBZ0JsQjtBQUNFTCxVQUFRLEVBQUUsT0FEWjtBQUVFQyxVQUFRLEVBQUUsS0FGWjtBQUdFQyxXQUFTLEVBQUUsS0FIYjtBQUlFQyxXQUFTLEVBQUU7QUFKYixDQWhCa0IsRUFzQmxCO0FBQ0VILFVBQVEsRUFBRSxVQURaO0FBRUVDLFVBQVEsRUFBRTtBQUZaLENBdEJrQixFQTBCbEI7QUFDRUQsVUFBUSxFQUFFLFFBRFo7QUFFRUMsVUFBUSxFQUFFO0FBRlosQ0ExQmtCLEVBOEJsQjtBQUNFRCxVQUFRLEVBQUUsV0FEWjtBQUVFRSxXQUFTLEVBQUUsSUFGYjtBQUdFQyxXQUFTLEVBQUUsS0FIYjtBQUlFQyxZQUFVLEVBQUUsSUFKZDtBQUtFQyxXQUFTLEVBQUU7QUFMYixDQTlCa0IsRUFxQ2xCO0FBQ0VMLFVBQVEsRUFBRSxTQURaO0FBRUVNLFNBQU8sRUFBRSxRQUZYO0FBR0VKLFdBQVMsRUFBRSxJQUhiO0FBSUVDLFdBQVMsRUFBRSxJQUpiO0FBS0VDLFlBQVUsRUFBRSxJQUxkO0FBTUVDLFdBQVMsRUFBRTtBQU5iLENBckNrQixFQTZDbEI7QUFDRUwsVUFBUSxFQUFFLDBCQURaO0FBRUVFLFdBQVMsRUFBRSxJQUZiO0FBR0VDLFdBQVMsRUFBRSxLQUhiO0FBSUVDLFlBQVUsRUFBRSxLQUpkO0FBS0VDLFdBQVMsRUFBRTtBQUxiLENBN0NrQixFQW9EbEI7QUFDRUwsVUFBUSxFQUFFLGlCQURaO0FBRUVFLFdBQVMsRUFBRSxLQUZiO0FBR0VDLFdBQVMsRUFBRSxLQUhiLENBSUU7QUFDQTs7QUFMRixDQXBEa0IsRUEyRGxCO0FBQ0VHLFNBQU8sRUFBRSxNQURYO0FBRUVOLFVBQVEsRUFBRSxhQUZaO0FBR0VDLFVBQVEsRUFBRSxLQUhaO0FBSUVDLFdBQVMsRUFBRSxLQUpiO0FBS0VDLFdBQVMsRUFBRSxLQUxiO0FBTUVDLFlBQVUsRUFBRSxJQU5kO0FBT0VDLFdBQVMsRUFBRTtBQVBiLENBM0RrQixFQW9FbEI7QUFDRUwsVUFBUSxFQUFFLGtCQURaO0FBRUVJLFlBQVUsRUFBRSxLQUZkO0FBR0VDLFdBQVMsRUFBRTtBQUhiLENBcEVrQixFQXlFbEI7QUFDRUwsVUFBUSxFQUFFLGdCQURaO0FBRUVDLFVBQVEsRUFBRSxLQUZaO0FBR0VDLFdBQVMsRUFBRSxLQUhiO0FBSUVDLFdBQVMsRUFBRSxLQUpiO0FBS0VDLFlBQVUsRUFBRSxLQUxkO0FBTUVDLFdBQVMsRUFBRSxLQU5iO0FBT0VFLGFBQVcsRUFBRTtBQVBmLENBekVrQixFQWtGbEJDLE9BbEZrQixFQUF0QjtlQW9GaUJULGEiLCJmaWxlIjoiLi4vQ29DcmVhdGUtbW9kdWxlcy9Db0NyZWF0ZS1idWlsZGVyL3NyYy9lbGVtZW50Q29uZmlnLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZWxlbWVudENvbmZpZyA9IFt7XG4gICAgICBzZWxlY3RvcjogXCIqXCIsXG4gICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICBkcm9wcGFibGU6IHRydWUsXG4gICAgICBzZWxlY3RhYmxlOiB0cnVlLFxuICAgICAgaG92ZXJhYmxlOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6IFwiaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgc3BhbiwgYmxvY2txdW90ZVwiLFxuICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICBkcm9wcGFibGU6IGZhbHNlLFxuICAgICAgc2VsZWN0YWJsZTogdHJ1ZSxcbiAgICAgIGhvdmVyYWJsZTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiBcImlucHV0XCIsXG4gICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgZHJvcHBhYmxlOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiBcInRleHRhcmVhXCIsXG4gICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogXCJzZWxlY3RcIixcbiAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiBcImRpdi5xdWlsbFwiLFxuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgZHJvcHBhYmxlOiBmYWxzZSxcbiAgICAgIHNlbGVjdGFibGU6IHRydWUsXG4gICAgICBob3ZlcmFibGU6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6IFwiZGl2Lm5hdlwiLFxuICAgICAgdGFnTmFtZTogXCJuYXZiYXJcIixcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgIGRyb3BwYWJsZTogdHJ1ZSxcbiAgICAgIHNlbGVjdGFibGU6IHRydWUsXG4gICAgICBob3ZlcmFibGU6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogXCJkaXYuZmxvYXRpbmctbGFiZWxfZmllbGRcIixcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgIGRyb3BwYWJsZTogZmFsc2UsXG4gICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcbiAgICAgIGhvdmVyYWJsZTogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogXCJkaXYucWwtZWRpdG9yICpcIixcbiAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICBkcm9wcGFibGU6IGZhbHNlLFxuICAgICAgLy8gc2VsZWN0YWJsZTogZmFsc2UsXG4gICAgICAvLyBob3ZlcmFibGU6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgdGFnTmFtZTogXCJpY29uXCIsXG4gICAgICBzZWxlY3RvcjogXCJhLm1lbnVfaWNvblwiLFxuICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgIGRyb3BwYWJsZTogZmFsc2UsXG4gICAgICBzZWxlY3RhYmxlOiB0cnVlLFxuICAgICAgaG92ZXJhYmxlOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6IFwiYS5tZW51X2ljb24gc3BhblwiLFxuICAgICAgc2VsZWN0YWJsZTogZmFsc2UsXG4gICAgICBob3ZlcmFibGU6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6IFwibWVudV9pY29uLnNwYW5cIixcbiAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICBkcm9wcGFibGU6IGZhbHNlLFxuICAgICAgc2VsZWN0YWJsZTogZmFsc2UsXG4gICAgICBob3ZlcmFibGU6IGZhbHNlLFxuICAgICAgc2VsZWN0YWJsZTI6IHRydWUsXG4gICAgfSxcbiAgXS5yZXZlcnNlKCk7XG4gIFxuICBleHBvcnQgZGVmYXVsdCBlbGVtZW50Q29uZmlnOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../CoCreate-modules/CoCreate-builder/src/elementConfig.js\n");

/***/ })

/******/ })["default"];
});