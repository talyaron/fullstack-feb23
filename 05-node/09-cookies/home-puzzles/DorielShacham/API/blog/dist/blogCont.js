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
exports.deleteBlog = exports.getUserBlogs = exports.getAllBlogs = exports.addBlog = void 0;
var blogModel_1 = require("./blogModel");
var mongoose_1 = require("mongoose");
// Add a blog
function addBlog(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, title, description, userEmail, blog, blogDB, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, title = _a.title, description = _a.description, userEmail = _a.userEmail;
                    if (!title || !description || !userEmail) {
                        return [2 /*return*/, res.status(400).json({ msg: "Missing required fields" })];
                    }
                    blog = new blogModel_1["default"]({ title: title, description: description, userEmail: userEmail });
                    return [4 /*yield*/, blog.save()];
                case 1:
                    blogDB = _b.sent();
                    res.send({ ok: true, blogDB: blogDB });
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _b.sent();
                    res.status(400).json(err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.addBlog = addBlog;
// Get all blogs
function getAllBlogs(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var blogs, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, blogModel_1["default"].find()];
                case 1:
                    blogs = _a.sent();
                    if (!blogs || blogs.length === 0) {
                        return [2 /*return*/, res.status(404).json({ message: "No blogs found." })];
                    }
                    res.status(200).json({ ok: true, blogList: blogs });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    res.status(500).json({ message: "Internal server error", error: error_1.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getAllBlogs = getAllBlogs;
// Get user-specific blogs
function getUserBlogs(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userEmail, blogs, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    userEmail = req.query.userEmail;
                    return [4 /*yield*/, blogModel_1["default"].find({ userEmail: userEmail })];
                case 1:
                    blogs = _a.sent();
                    if (!blogs || blogs.length === 0) {
                        return [2 /*return*/, res.status(404).json({ message: "No blogs found for this user." })];
                    }
                    res.status(200).json({ ok: true, blogList: blogs });
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    res.status(500).json({ message: "Internal server error", error: error_2.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getUserBlogs = getUserBlogs;
// Delete a blog
function deleteBlog(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var blogId, deletedBlog, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    blogId = req.body.blogId;
                    if (!mongoose_1.isValidObjectId(blogId)) {
                        return [2 /*return*/, res.status(400).json({ message: "Invalid blog ID" })];
                    }
                    return [4 /*yield*/, blogModel_1["default"].findByIdAndRemove(blogId)];
                case 1:
                    deletedBlog = _a.sent();
                    if (!deletedBlog) {
                        return [2 /*return*/, res.status(404).json({ message: "Blog not found" })];
                    }
                    res.status(200).json({ ok: true, message: "Blog Deleted" });
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    res.status(500).json({ message: "Internal server error", error: error_3.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.deleteBlog = deleteBlog;
