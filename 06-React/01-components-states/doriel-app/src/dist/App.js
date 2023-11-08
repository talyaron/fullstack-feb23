"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function App() {
    var _a = react_1.useState([]), blogs = _a[0], setBlogs = _a[1];
    var _b = react_1.useState('#ffffff'), backgroundColor = _b[0], setBackgroundColor = _b[1];
    var addBlog = function () {
        var newBlog = {
            id: blogs.length + 1,
            title: 'Blog Title',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: 'https://assets.fortnitecreativehq.com/wp-content/uploads/2020/11/24084718/7153-0441-1172.jpg'
        };
        setBlogs(__spreadArrays(blogs, [newBlog]));
        setBackgroundColor(getRandomColor());
    };
    var removeBlog = function () {
        if (blogs.length > 0) {
            var updatedBlogs = __spreadArrays(blogs);
            updatedBlogs.pop();
            setBlogs(updatedBlogs);
        }
    };
    return (react_1["default"].createElement("div", { className: "App", style: { backgroundColor: backgroundColor } },
        react_1["default"].createElement("h1", null, "Welcome to GamesEngines Forum"),
        react_1["default"].createElement("div", { className: "blog-list" }, blogs.map(function (blog) { return (react_1["default"].createElement("div", { className: "blog", key: blog.id },
            react_1["default"].createElement("img", { src: blog.image, alt: "Blog" }),
            react_1["default"].createElement("h2", null, blog.title),
            react_1["default"].createElement("p", null, blog.content))); })),
        react_1["default"].createElement("div", { className: "buttons" },
            react_1["default"].createElement("button", { onClick: addBlog }, "Add Blog"),
            react_1["default"].createElement("button", { onClick: removeBlog }, "Remove Blog"))));
}
exports["default"] = App;
