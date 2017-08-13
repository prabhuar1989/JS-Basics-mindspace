/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/app/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./src/app/es6-udemy.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// let, const and scope variables\n\n// let a = \"a outside scope !\";\n// const b = \"Ashwin\";\n// const c = [1,2,3];  //manipulating array is allowed !\n// c.push(4);\n// console.log(c);\n// {\n//     let a = \"a inside block scope !\";\n//     console.log(a);\n//     //b = \"Purvi\";  Compile error - b is read only !!\n//     console.log(b);\n// }\n// console.log(a);\n// console.log(b);\n\n\n//Template Literals..... using back ticks\n\n// let a = \"Hello\";\n// let b = \"world!\";\n// console.log(`${a} ${b}`);\n\n\n//Spread Operator == used to manipulate arrays and objects !! (Rest Operator)\n\n// let a = [1,2,3];\n// let b = [4];\n// console.log(...a,...b);\n\n// function printElements(a,b,c){\n//     console.log(a,b,c);\n// }\n\n// printElements(...a); //123\n// printElements(...b);//4 endefined undefined\n\n\n//reversing the use of spread operator !! (Rest Operator)\n// function printElements(...z){\n//     console.log(...z);\n// }\n\n// printElements(1,2,3,4,5);\n\n\n// Destructuring Assignment - Arrays\n\n// let a = [100,200];\n// let [b,c] = a;\n// console.log(b,c);\n\n\n// let a = [\"Ashwin\", \"Purvi\", \"Aishu\"];\n// let [b,c,d] = a;\n// console.log(b,c,d);\n\n// let a = [100,200,300,400,500];\n// let [b,...c] = a; \n// console.log(b,...c); \n\n\n// Destructuring assignment - objects\n\n// let person = {name : \"Ashwin\"\n//               ,age : 28};\n// let {name , age} = person;\n// console.log(name, age);\n\n\n//if name and age was already defined...\n\n// let name = \"Purvi\";\n// let age = 20;\n// let person = {name : \"Ashwin\"\n//               ,age : 28};\n// ({name , age} = person);  //enclose the whole assignment inside paranthesis !!\n// console.log(name, age);\n\n\n//Arrow functions ...\n// function blastoff(){\n//     console.log(\"3...2...1... blastoff !!\");\n// }\n\n// blastoff();\n\n\n//setTimeout(()=>{console.log(\"3...2...1.blastoff!!\")},2000);\n\n// const blastoff = () => {\n//     console.log(\"3...2...1... blastoff !!!\")\n// }\n\n// blastoff();\n\n\n//Arrow functions do not bind their own this unlike in vanilla javascript!!\nundefined.a = 25;\n\n// function print(){\n//     this.a = 50;\n//     console.log(\"this.a inside print \",this.a);\n// }\n\n//print();\n\nvar printWithArrow = function printWithArrow() {\n  // this.a = 70;\n  //console.log(\"this.a inside printwithArrow \", this.a);\n};\n\nprintWithArrow();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYXBwL2VzNi11ZGVteS5qcz83NTZmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGxldCwgY29uc3QgYW5kIHNjb3BlIHZhcmlhYmxlc1xyXG5cclxuLy8gbGV0IGEgPSBcImEgb3V0c2lkZSBzY29wZSAhXCI7XHJcbi8vIGNvbnN0IGIgPSBcIkFzaHdpblwiO1xyXG4vLyBjb25zdCBjID0gWzEsMiwzXTsgIC8vbWFuaXB1bGF0aW5nIGFycmF5IGlzIGFsbG93ZWQgIVxyXG4vLyBjLnB1c2goNCk7XHJcbi8vIGNvbnNvbGUubG9nKGMpO1xyXG4vLyB7XHJcbi8vICAgICBsZXQgYSA9IFwiYSBpbnNpZGUgYmxvY2sgc2NvcGUgIVwiO1xyXG4vLyAgICAgY29uc29sZS5sb2coYSk7XHJcbi8vICAgICAvL2IgPSBcIlB1cnZpXCI7ICBDb21waWxlIGVycm9yIC0gYiBpcyByZWFkIG9ubHkgISFcclxuLy8gICAgIGNvbnNvbGUubG9nKGIpO1xyXG4vLyB9XHJcbi8vIGNvbnNvbGUubG9nKGEpO1xyXG4vLyBjb25zb2xlLmxvZyhiKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4vL1RlbXBsYXRlIExpdGVyYWxzLi4uLi4gdXNpbmcgYmFjayB0aWNrc1xyXG5cclxuLy8gbGV0IGEgPSBcIkhlbGxvXCI7XHJcbi8vIGxldCBiID0gXCJ3b3JsZCFcIjtcclxuLy8gY29uc29sZS5sb2coYCR7YX0gJHtifWApO1xyXG5cclxuXHJcblxyXG4vL1NwcmVhZCBPcGVyYXRvciA9PSB1c2VkIHRvIG1hbmlwdWxhdGUgYXJyYXlzIGFuZCBvYmplY3RzICEhIChSZXN0IE9wZXJhdG9yKVxyXG5cclxuLy8gbGV0IGEgPSBbMSwyLDNdO1xyXG4vLyBsZXQgYiA9IFs0XTtcclxuLy8gY29uc29sZS5sb2coLi4uYSwuLi5iKTtcclxuXHJcbi8vIGZ1bmN0aW9uIHByaW50RWxlbWVudHMoYSxiLGMpe1xyXG4vLyAgICAgY29uc29sZS5sb2coYSxiLGMpO1xyXG4vLyB9XHJcblxyXG4vLyBwcmludEVsZW1lbnRzKC4uLmEpOyAvLzEyM1xyXG4vLyBwcmludEVsZW1lbnRzKC4uLmIpOy8vNCBlbmRlZmluZWQgdW5kZWZpbmVkXHJcblxyXG5cclxuXHJcbi8vcmV2ZXJzaW5nIHRoZSB1c2Ugb2Ygc3ByZWFkIG9wZXJhdG9yICEhIChSZXN0IE9wZXJhdG9yKVxyXG4vLyBmdW5jdGlvbiBwcmludEVsZW1lbnRzKC4uLnope1xyXG4vLyAgICAgY29uc29sZS5sb2coLi4ueik7XHJcbi8vIH1cclxuXHJcbi8vIHByaW50RWxlbWVudHMoMSwyLDMsNCw1KTtcclxuXHJcblxyXG4vLyBEZXN0cnVjdHVyaW5nIEFzc2lnbm1lbnQgLSBBcnJheXNcclxuXHJcbi8vIGxldCBhID0gWzEwMCwyMDBdO1xyXG4vLyBsZXQgW2IsY10gPSBhO1xyXG4vLyBjb25zb2xlLmxvZyhiLGMpO1xyXG5cclxuXHJcbi8vIGxldCBhID0gW1wiQXNod2luXCIsIFwiUHVydmlcIiwgXCJBaXNodVwiXTtcclxuLy8gbGV0IFtiLGMsZF0gPSBhO1xyXG4vLyBjb25zb2xlLmxvZyhiLGMsZCk7XHJcblxyXG4vLyBsZXQgYSA9IFsxMDAsMjAwLDMwMCw0MDAsNTAwXTtcclxuLy8gbGV0IFtiLC4uLmNdID0gYTsgXHJcbi8vIGNvbnNvbGUubG9nKGIsLi4uYyk7IFxyXG5cclxuXHJcbi8vIERlc3RydWN0dXJpbmcgYXNzaWdubWVudCAtIG9iamVjdHNcclxuXHJcbi8vIGxldCBwZXJzb24gPSB7bmFtZSA6IFwiQXNod2luXCJcclxuLy8gICAgICAgICAgICAgICAsYWdlIDogMjh9O1xyXG4vLyBsZXQge25hbWUgLCBhZ2V9ID0gcGVyc29uO1xyXG4vLyBjb25zb2xlLmxvZyhuYW1lLCBhZ2UpO1xyXG5cclxuXHJcbi8vaWYgbmFtZSBhbmQgYWdlIHdhcyBhbHJlYWR5IGRlZmluZWQuLi5cclxuXHJcbi8vIGxldCBuYW1lID0gXCJQdXJ2aVwiO1xyXG4vLyBsZXQgYWdlID0gMjA7XHJcbi8vIGxldCBwZXJzb24gPSB7bmFtZSA6IFwiQXNod2luXCJcclxuLy8gICAgICAgICAgICAgICAsYWdlIDogMjh9O1xyXG4vLyAoe25hbWUgLCBhZ2V9ID0gcGVyc29uKTsgIC8vZW5jbG9zZSB0aGUgd2hvbGUgYXNzaWdubWVudCBpbnNpZGUgcGFyYW50aGVzaXMgISFcclxuLy8gY29uc29sZS5sb2cobmFtZSwgYWdlKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy9BcnJvdyBmdW5jdGlvbnMgLi4uXHJcbi8vIGZ1bmN0aW9uIGJsYXN0b2ZmKCl7XHJcbi8vICAgICBjb25zb2xlLmxvZyhcIjMuLi4yLi4uMS4uLiBibGFzdG9mZiAhIVwiKTtcclxuLy8gfVxyXG5cclxuLy8gYmxhc3RvZmYoKTtcclxuXHJcblxyXG4vL3NldFRpbWVvdXQoKCk9Pntjb25zb2xlLmxvZyhcIjMuLi4yLi4uMS5ibGFzdG9mZiEhXCIpfSwyMDAwKTtcclxuXHJcbi8vIGNvbnN0IGJsYXN0b2ZmID0gKCkgPT4ge1xyXG4vLyAgICAgY29uc29sZS5sb2coXCIzLi4uMi4uLjEuLi4gYmxhc3RvZmYgISEhXCIpXHJcbi8vIH1cclxuXHJcbi8vIGJsYXN0b2ZmKCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy9BcnJvdyBmdW5jdGlvbnMgZG8gbm90IGJpbmQgdGhlaXIgb3duIHRoaXMgdW5saWtlIGluIHZhbmlsbGEgamF2YXNjcmlwdCEhXHJcbiB0aGlzLmEgPSAyNTtcclxuXHJcbi8vIGZ1bmN0aW9uIHByaW50KCl7XHJcbi8vICAgICB0aGlzLmEgPSA1MDtcclxuLy8gICAgIGNvbnNvbGUubG9nKFwidGhpcy5hIGluc2lkZSBwcmludCBcIix0aGlzLmEpO1xyXG4vLyB9XHJcblxyXG4vL3ByaW50KCk7XHJcblxyXG5sZXQgcHJpbnRXaXRoQXJyb3cgPSAoKSA9PiB7XHJcbiAgIC8vIHRoaXMuYSA9IDcwO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcInRoaXMuYSBpbnNpZGUgcHJpbnR3aXRoQXJyb3cgXCIsIHRoaXMuYSk7XHJcbn1cclxuXHJcbnByaW50V2l0aEFycm93KCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYXBwL2VzNi11ZGVteS5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);