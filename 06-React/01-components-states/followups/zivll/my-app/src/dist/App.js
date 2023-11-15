"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
function App() {
    var _a = react_1.useState(0), counter = _a[0], setCounter = _a[1];
    var _b = react_1.useState(2), multiplyCounter = _b[0], setMultiplyCounter = _b[1];
    var addOne = function () {
        setCounter(counter + 1);
    };
    var multiply = function () {
        setMultiplyCounter(multiplyCounter * counter);
        console.log(multiplyCounter);
    };
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("p", null,
            "counter: ",
            counter),
        react_1["default"].createElement("button", { onClick: addOne }, "Add 1"),
        react_1["default"].createElement("button", { onClick: multiply }, "Multiply")));
}
exports["default"] = App;
