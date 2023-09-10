"use strict";
exports.__esModule = true;
exports.userPosts = exports.UserPost = exports.posts = exports.Post = void 0;
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
exports.posts = [];
var UserPost = /** @class */ (function () {
    function UserPost(user, post) {
        this.user = user;
        this.post = post;
    }
    return UserPost;
}());
exports.UserPost = UserPost;
exports.userPosts = [];
