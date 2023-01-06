"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/meal";
exports.ids = ["pages/api/meal"];
exports.modules = {

/***/ "(api)/./pages/api/meal.ts":
/*!***************************!*\
  !*** ./pages/api/meal.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst mealList = [\n    \"Kartoffeln mit Quark\",\n    \"Senfeier\",\n    \"Spaghetti mit Tomatensauce\",\n    \"Borschtsch\",\n    \"Stulle\",\n    \"R\\xfchrei\"\n];\nfunction getRandomMeals(nom) {\n    const numberOfAllMeals = mealList.length;\n    const result = [];\n    for(let i = 0; i < nom; i++){\n        result.push(mealList[Math.floor(Math.random() * numberOfAllMeals)]);\n    }\n    return result;\n}\nfunction handler(req, res) {\n    if (req.method === \"POST\") {\n        mealList.push(req.body);\n        res.status(201).json(mealList);\n        return;\n    } else if (req.method === \"GET\") {\n        const { pageSize  } = req.query;\n        const mealsRequested = Number.parseInt(pageSize);\n        res.status(200).json(getRandomMeals(mealsRequested));\n        return;\n    }\n    res.status(404);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWVhbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRUEsTUFBTUEsV0FBMEI7SUFDNUI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0g7QUFFRCxTQUFTQyxlQUFnQkMsR0FBVyxFQUFrQjtJQUNsRCxNQUFNQyxtQkFBbUJILFNBQVNJLE1BQU07SUFDeEMsTUFBTUMsU0FBd0IsRUFBRTtJQUVoQyxJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUosS0FBS0ksSUFBTTtRQUMzQkQsT0FBT0UsSUFBSSxDQUNQUCxRQUFRLENBQUNRLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLUCxrQkFBa0I7SUFFOUQ7SUFDQSxPQUFPRTtBQUNYO0FBRWUsU0FBU00sUUFBUUMsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRTtJQUN2RSxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUztRQUN4QmQsU0FBU08sSUFBSSxDQUFDSyxJQUFJRyxJQUFJO1FBQ3RCRixJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDakI7UUFDckI7SUFDSixPQUFPLElBQUlZLElBQUlFLE1BQU0sS0FBSyxPQUFRO1FBQzlCLE1BQU0sRUFBRUksU0FBUSxFQUFFLEdBQUdOLElBQUlPLEtBQUs7UUFDOUIsTUFBTUMsaUJBQWlCQyxPQUFPQyxRQUFRLENBQUNKO1FBQ3ZDTCxJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDaEIsZUFBZ0JtQjtRQUNyQztJQUNKLENBQUM7SUFDRFAsSUFBSUcsTUFBTSxDQUFDO0FBQ2IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21lYWwtc2h1ZmZsZS8uL3BhZ2VzL2FwaS9tZWFsLnRzP2ZiODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5cbmNvbnN0IG1lYWxMaXN0OiBBcnJheTxzdHJpbmc+ID0gW1xuICAgICdLYXJ0b2ZmZWxuIG1pdCBRdWFyaycsXG4gICAgJ1NlbmZlaWVyJyxcbiAgICAnU3BhZ2hldHRpIG1pdCBUb21hdGVuc2F1Y2UnLFxuICAgICdCb3JzY2h0c2NoJyxcbiAgICAnU3R1bGxlJyxcbiAgICAnUsO8aHJlaSdcbl07XG5cbmZ1bmN0aW9uIGdldFJhbmRvbU1lYWxzKCBub206IG51bWJlciApOiBBcnJheTxzdHJpbmc+IHtcbiAgICBjb25zdCBudW1iZXJPZkFsbE1lYWxzID0gbWVhbExpc3QubGVuZ3RoO1xuICAgIGNvbnN0IHJlc3VsdDogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4gICAgZm9yKCBsZXQgaSA9IDA7IGkgPCBub207IGkrKyApIHtcbiAgICAgICAgcmVzdWx0LnB1c2goXG4gICAgICAgICAgICBtZWFsTGlzdFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBudW1iZXJPZkFsbE1lYWxzKV1cbiAgICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICAgIGlmKCByZXEubWV0aG9kID09PSAnUE9TVCcgKSB7XG4gICAgICAgIG1lYWxMaXN0LnB1c2gocmVxLmJvZHkgYXMgc3RyaW5nKTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24obWVhbExpc3QpO1xuICAgICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmKCByZXEubWV0aG9kID09PSAnR0VUJyApIHtcbiAgICAgICAgY29uc3QgeyBwYWdlU2l6ZSB9ID0gcmVxLnF1ZXJ5O1xuICAgICAgICBjb25zdCBtZWFsc1JlcXVlc3RlZCA9IE51bWJlci5wYXJzZUludChwYWdlU2l6ZSBhcyBzdHJpbmcpO1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihnZXRSYW5kb21NZWFscyggbWVhbHNSZXF1ZXN0ZWQgKSk7XG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICByZXMuc3RhdHVzKDQwNCk7XG4gIH0iXSwibmFtZXMiOlsibWVhbExpc3QiLCJnZXRSYW5kb21NZWFscyIsIm5vbSIsIm51bWJlck9mQWxsTWVhbHMiLCJsZW5ndGgiLCJyZXN1bHQiLCJpIiwicHVzaCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJib2R5Iiwic3RhdHVzIiwianNvbiIsInBhZ2VTaXplIiwicXVlcnkiLCJtZWFsc1JlcXVlc3RlZCIsIk51bWJlciIsInBhcnNlSW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/meal.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/meal.ts"));
module.exports = __webpack_exports__;

})();