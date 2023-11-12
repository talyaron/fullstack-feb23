"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var Circle = function (_a) {
    var color = _a.color;
    var circleStyle = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: color
    };
    return react_1["default"].createElement("div", { style: circleStyle });
};
var ColorPicker = function (_a) {
    var setColor = _a.setColor;
    var handleColorChange = function (e) {
        setColor(e.target.value);
    };
    return react_1["default"].createElement("input", { type: "color", onChange: handleColorChange });
};
var App = function () {
    var _a = react_1.useState('#000000'), circleColor = _a[0], setCircleColor = _a[1];
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Circle, { color: circleColor }),
        react_1["default"].createElement(ColorPicker, { setColor: setCircleColor })));
};
exports["default"] = App;
