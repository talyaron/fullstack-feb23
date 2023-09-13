"use strict";
exports.__esModule = true;
exports.UserPost = exports.PostModel = exports.PostSchema = exports.posts = exports.userPosts = exports.UserPosts = exports.Post = void 0;
var mongoose_1 = require("mongoose");
var Post = /** @class */ (function () {
    function Post(_a) {
        var content = _a.content, featuredImage = _a.featuredImage, category = _a.category;
        this.content = content;
        this.featuredImage = featuredImage;
        this.category = category;
    }
    return Post;
}());
exports.Post = Post;
var UserPosts = /** @class */ (function () {
    function UserPosts(user, post) {
        this.user = user;
        this.post = post;
        this.id = Math.random().toString(36).substr(2, 9);
    }
    return UserPosts;
}());
exports.UserPosts = UserPosts;
exports.userPosts = [];
exports.posts = [];
exports.PostSchema = new mongoose_1.Schema({
    content: String,
    featuredImage: String,
    category: String
});
exports.PostModel = mongoose_1.model("posts", exports.PostSchema);
var UserPost = /** @class */ (function () {
    function UserPost(user, post) {
        this.user = user;
        this.post = post;
    }
    return UserPost;
}());
exports.UserPost = UserPost;
