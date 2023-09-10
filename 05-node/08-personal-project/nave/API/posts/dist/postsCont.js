"use strict";
exports.__esModule = true;
exports.getUserPosts = exports.addPost = exports.getPosts = void 0;
var userModel_1 = require("../users/userModel");
var postsModel_1 = require("./postsModel");
function getPosts(req, res) {
    try {
        res.send({ posts: postsModel_1.posts });
    }
    catch (error) {
        console.error(error);
    }
}
exports.getPosts = getPosts;
function addPost(req, res) {
    try {
        var _a = req.body, content = _a.content, featuredImage = _a.featuredImage, category = _a.category, email_1 = _a.email;
        if (!content || !featuredImage || !category)
            throw new Error("Please complete all fields");
        if (!email_1)
            throw new Error("no email");
        var newPost = new postsModel_1.Post({
            content: content,
            featuredImage: featuredImage,
            category: category
        });
        postsModel_1.posts.push(newPost);
        //find user
        var user = userModel_1.users.find(function (user) { return user.email === email_1; });
        if (!user)
            throw new Error("user not found");
        postsModel_1.userPosts.push(new postsModel_1.UserPost(user, newPost));
        var _userPosts = postsModel_1.userPosts.filter(function (UserPost) { return UserPost.user.email === email_1; });
        var _posts = _userPosts.map(function (UserPost) { return UserPost.post; }); //returns only tasks of user
        res.send({ posts: _posts });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}
exports.addPost = addPost;
function getUserPosts(req, res) {
    try {
        //get email from query
        var email_2 = req.query.email;
        if (!email_2) {
            throw new Error("email is required");
        }
        var _userPosts = postsModel_1.userPosts.filter(function (userPost) { return userPost.user.email === email_2; });
        var _posts = _userPosts.map(function (UserPosts) { return UserPosts.post; });
        res.send({ posts: _posts });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}
exports.getUserPosts = getUserPosts;
