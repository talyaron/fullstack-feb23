"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getUserPosts = exports.updatePost = exports.deletePost = exports.addPost = exports.getPosts = void 0;
var userModel_1 = require("../users/userModel");
var postsModel_1 = require("./postsModel");
function getPosts(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, _id, user, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 7, , 8]);
                    _a = req.query, email = _a.email, _id = _a._id;
                    console.log(email, _id);
                    user = void 0;
                    if (!_id) return [3 /*break*/, 2];
                    return [4 /*yield*/, userModel_1.UserModel.findOne({ _id: _id })];
                case 1:
                    user = _b.sent();
                    console.log("User id found  " + _id + " : " + user);
                    return [3 /*break*/, 6];
                case 2:
                    if (!!email) return [3 /*break*/, 4];
                    return [4 /*yield*/, userModel_1.UserModel.find({})];
                case 3:
                    user = _b.sent();
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, userModel_1.UserModel.findOne({ email: email })];
                case 5:
                    user = _b.sent();
                    _b.label = 6;
                case 6:
                    if (!user) {
                        return [2 /*return*/, res.status(404).send({ error: 'user not found.' })];
                    }
                    // Send the fetched physician data as a JSON response
                    res.send({ user: user });
                    return [3 /*break*/, 8];
                case 7:
                    error_1 = _b.sent();
                    console.error(error_1);
                    res.status(500).send({ error: error_1.message });
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
exports.getPosts = getPosts;
function addPost(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, content, featuredImage, category, isAdmin, post, postDB, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, content = _a.content, featuredImage = _a.featuredImage, category = _a.category, isAdmin = _a.isAdmin;
                    if (!content || !featuredImage || !category)
                        throw new Error("Please complete all fields");
                    post = new postsModel_1.PostModel({ content: content, featuredImage: featuredImage, category: category, isAdmin: isAdmin });
                    return [4 /*yield*/, post.save()];
                case 1:
                    postDB = _b.sent();
                    console.log(postDB);
                    res.send({ ok: true });
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _b.sent();
                    console.error(error_2);
                    res.status(500).send({ error: error_2.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.addPost = addPost;
function deletePost(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, postDB, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = req.body.id;
                    return [4 /*yield*/, postsModel_1.PostModel.findByIdAndDelete(id)];
                case 1:
                    postDB = _a.sent();
                    res.send({ ok: true });
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error(error_3);
                    res.status(500).send({ error: error_3.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.deletePost = deletePost;
function updatePost(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, id, content, featuredImage, category, isAdmin, postDB, error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    debugger;
                    _a = req.body, id = _a.id, content = _a.content, featuredImage = _a.featuredImage, category = _a.category, isAdmin = _a.isAdmin;
                    if (!id)
                        throw new Error("id is required");
                    return [4 /*yield*/, postsModel_1.PostModel.findByIdAndUpdate(id, { content: content, featuredImage: featuredImage, category: category, isAdmin: isAdmin })];
                case 1:
                    postDB = _b.sent();
                    return [4 /*yield*/, postDB.save()];
                case 2:
                    _b.sent();
                    res.status(200).send({ message: "post updated successfully" });
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _b.sent();
                    console.error(error_4);
                    res.status(500).send({ error: error_4.message });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.updatePost = updatePost;
// import { users , UserModel, } from "../users/userModel";
// export async function getPosts(req: any, res: any) {
//   try {
//       const postsDB = await PostModel.find({});
//       res.send({ ok:true, posts: postsDB });
//   } catch (error) {
//       console.error(error);
//   }
// }
// export async function addPost(req: any, res: any) {
//   try {
//     const { content, featuredImage, category,email } = req.body;
//     if (!content || !featuredImage  || !category)
//     throw new Error("Please complete all fields");
//   if (!email) throw new Error("no email");
//   // const user = await UserModel.findOne({ email: email });
//   const post = new PostModel({content, featuredImage, category});
//       const postDB = await post.save();
//       console.log( "Posts111:",postDB);
//       // const postsDB = await PostModel.find({email})
//       res.send({ posts: postDB });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send({ error: error.message });
//     }
// }
//     const user = users.find((user: any) => user.email === email);
//     if (!user) throw new Error("user not found");
//     userPosts.push(new UserPost(user, newPost));
//     const _userPosts = userPosts.filter(
//       (UserPost) => UserPost.user.email === email
//     );
//     const _posts = _userPosts.map((UserPost) => UserPost.post); //returns only tasks of user
//     res.send({ ok:true });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// }
function getUserPosts(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var email, postsDB, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    email = req.query.email;
                    if (!email) {
                        throw new Error("email is required");
                    }
                    return [4 /*yield*/, postsModel_1.PostModel.find({ email: email })];
                case 1:
                    postsDB = _a.sent();
                    res.send({ posts: postsDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    console.error(error_5);
                    res.status(500).send({ error: error_5.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getUserPosts = getUserPosts;
