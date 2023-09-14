"use strict";
exports.__esModule = true;
// models/blogModel.ts
var mongoose_1 = require("mongoose");
var blogSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "Please enter a blog title"]
    },
    description: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        "default": Date.now
    }
});
var BlogModel = mongoose_1.model("Blog", blogSchema);
exports["default"] = BlogModel;
