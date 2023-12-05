"use strict";
// Colors.tsx
exports.__esModule = true;
var react_1 = require("react");
function Colors(_a) {
    var onColorChange = _a.onColorChange;
    var _b = react_1.useState("green"), color = _b[0], setColor = _b[1];
    var _c = react_1.useState(""), text = _c[0], setText = _c[1];
    var handleSubmit = function (e) {
        e.preventDefault();
        onColorChange(text);
        setText("");
    };
    return (react_1["default"].createElement("div", { style: { textAlign: "center", marginTop: "20px" } },
        react_1["default"].createElement("form", { onSubmit: handleSubmit },
            react_1["default"].createElement("input", { type: "text", value: text, onChange: function (ev) {
                    setText(ev.target.value);
                }, placeholder: "Type your color", style: {
                    padding: "8px",
                    marginRight: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc"
                } }),
            react_1["default"].createElement("button", { type: "submit", style: {
                    padding: "8px",
                    borderRadius: "4px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    cursor: "pointer"
                } }, "Change Color")),
        react_1["default"].createElement("hr", null)));
}
exports["default"] = Colors;
