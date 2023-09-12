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
exports.updatePicture = exports.deletePicture = exports.addPicture = exports.getTags = exports.getUserPictures = exports.getPicturesByTag = exports.getPictures = void 0;
var userModels_1 = require("../users/userModels");
var picturesModels_1 = require("./picturesModels");
function getPictures(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var picturesDB, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, picturesModels_1.PictureModel.find({})];
                case 1:
                    picturesDB = _a.sent();
                    res.send({ pictures: picturesDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1.massage);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getPictures = getPictures;
function getPicturesByTag(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var tag, picturesDB, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    tag = req.query.tag;
                    return [4 /*yield*/, picturesModels_1.PictureModel.find({ tags: tag })];
                case 1:
                    picturesDB = _a.sent();
                    res.send({ pictures: picturesDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error(error_2.massage);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getPicturesByTag = getPicturesByTag;
function getUserPictures(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var email, userPicturesDB, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    email = req.query.email;
                    if (!email) {
                        throw new Error("email is required");
                    }
                    return [4 /*yield*/, picturesModels_1.PictureModel.find({ email: email })];
                case 1:
                    userPicturesDB = _a.sent();
                    res.send({ pictures: userPicturesDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error(error_3.massage);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getUserPictures = getUserPictures;
exports.getTags = function (req, res) {
    try {
        res.send({ tags: picturesModels_1.tags });
    }
    catch (error) {
        console.error(error.massage);
    }
};
function addPicture(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var picture, title, imgUrl, location, pictureTags, newTag, publishDate, email, userDB, userName, _picture, picturesDB, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    picture = req.body;
                    title = picture.title;
                    imgUrl = picture.imgUrl;
                    location = picture.location;
                    pictureTags = picture.tags;
                    newTag = picture.newTag;
                    if (newTag) {
                        pictureTags.push(newTag);
                        picturesModels_1.tags.push(newTag);
                    }
                    publishDate = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString('en-US', {
                        hour12: false,
                        hour: "numeric",
                        minute: "numeric"
                    });
                    email = req.query.email;
                    if (!email) {
                        throw new Error("email is required");
                    }
                    return [4 /*yield*/, userModels_1.UserModel.findOne({ email: email })];
                case 1:
                    userDB = _a.sent();
                    userName = userDB.name;
                    return [4 /*yield*/, (new picturesModels_1.PictureModel({ title: title, imgUrl: imgUrl, location: location, tags: pictureTags, publishDate: publishDate, email: email, userName: userName })).save()];
                case 2:
                    _picture = _a.sent();
                    return [4 /*yield*/, picturesModels_1.PictureModel.find({})];
                case 3:
                    picturesDB = _a.sent();
                    res.send({ ok: true, pictures: picturesDB });
                    return [3 /*break*/, 5];
                case 4:
                    error_4 = _a.sent();
                    console.error(error_4.massage);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.addPicture = addPicture;
function deletePicture(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, pictureDB, picturesDB, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    id = req.body.id;
                    return [4 /*yield*/, picturesModels_1.PictureModel.findByIdAndDelete(id)];
                case 1:
                    pictureDB = _a.sent();
                    return [4 /*yield*/, picturesModels_1.PictureModel.find({})];
                case 2:
                    picturesDB = _a.sent();
                    res.send({ pictures: picturesDB });
                    return [3 /*break*/, 4];
                case 3:
                    error_5 = _a.sent();
                    console.error(error_5.massage);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.deletePicture = deletePicture;
function updatePicture(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, title, imgUrl, location, tags_1, id, pictureDB, picturesDB, error_6;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    _a = req.body, title = _a.title, imgUrl = _a.imgUrl, location = _a.location, tags_1 = _a.tags, id = _a.id;
                    if (!title || !imgUrl || !location || !tags_1 || !id)
                        throw new Error("Please complete all details");
                    return [4 /*yield*/, picturesModels_1.PictureModel.findByIdAndUpdate(id, { title: title, imgUrl: imgUrl, location: location, tags: tags_1 }, { "new": true })];
                case 1:
                    pictureDB = _b.sent();
                    return [4 /*yield*/, picturesModels_1.PictureModel.find({})];
                case 2:
                    picturesDB = _b.sent();
                    res.send({ pictures: picturesDB });
                    return [3 /*break*/, 4];
                case 3:
                    error_6 = _b.sent();
                    console.error(error_6.massage);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.updatePicture = updatePicture;
