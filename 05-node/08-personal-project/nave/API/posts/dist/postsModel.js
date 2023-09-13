"use strict";
exports.__esModule = true;
exports.PostModel = exports.PostSchema = void 0;
var mongoose_1 = require("mongoose");
exports.PostSchema = new mongoose_1.Schema({
    content: String,
    featuredImage: String,
    category: String,
    isAdmin: {
        type: Boolean,
        "default": false
    }
});
exports.PostModel = mongoose_1.model("Posts", exports.PostSchema);
