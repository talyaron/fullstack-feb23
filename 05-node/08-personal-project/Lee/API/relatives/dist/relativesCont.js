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
exports.getUserRelatives = exports.updateRelation = exports.deleteRelative = exports.addRelative = exports.getFamilyMembers = void 0;
var userModel_1 = require("../users/userModel");
var relativesModel_1 = require("./relativesModel");
var relations_1 = require("../enums/relations");
function getFamilyMembers(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var relativesDB, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, relativesModel_1.RelativeModel.find({})];
                case 1:
                    relativesDB = _a.sent();
                    res.send({ relatives: relativesDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getFamilyMembers = getFamilyMembers;
function addRelative(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, fullName, birthDate, country, relation, userEmail, user, newRelative, relativeDB, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    _a = req.body, fullName = _a.fullName, birthDate = _a.birthDate, country = _a.country, relation = _a.relation, userEmail = _a.userEmail;
                    if (!fullName || !country || !birthDate || !relation) {
                        return [2 /*return*/, res.status(400).send({ error: "Please complete all fields" })];
                    }
                    return [4 /*yield*/, userModel_1.UserModel.findOne({ email: userEmail })];
                case 1:
                    user = _b.sent();
                    if (!user) {
                        return [2 /*return*/, res.status(404).send({ error: "User not found" })];
                    }
                    newRelative = new relativesModel_1.RelativeModel({
                        fullName: fullName,
                        birthDate: birthDate,
                        country: country,
                        relation: relation,
                        user: userEmail
                    });
                    return [4 /*yield*/, newRelative.save()];
                case 2:
                    relativeDB = _b.sent();
                    console.log(relativeDB);
                    res.send({ ok: true });
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _b.sent();
                    console.error(error_2);
                    res.status(500).send({ error: error_2.message });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.addRelative = addRelative;
function deleteRelative(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, relativeDB, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = req.body.id;
                    return [4 /*yield*/, relativesModel_1.RelativeModel.findByIdAndDelete(id)];
                case 1:
                    relativeDB = _a.sent();
                    res.send({ relativeDB: relativeDB });
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
exports.deleteRelative = deleteRelative;
function updateRelation(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, id, relation, relative, error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    _a = req.body, id = _a.id, relation = _a.relation;
                    return [4 /*yield*/, relativesModel_1.RelativeModel.findById(id)];
                case 1:
                    relative = _b.sent();
                    if (!relative) {
                        throw new Error("relative not found");
                    }
                    if (relation === relations_1.Relation.choose) {
                        throw new Error("Please choose a valid relation");
                    }
                    relative.relation = relation;
                    return [4 /*yield*/, relative.save()];
                case 2:
                    _b.sent();
                    res.send({ message: "Relation updated successfully", relative: relative });
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _b.sent();
                    console.error(error_4);
                    res.status(400).send({ error: error_4.message });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.updateRelation = updateRelation;
function getUserRelatives(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var email, relativeDB, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    email = req.query.email;
                    if (!email) {
                        throw new Error("email is required");
                    }
                    return [4 /*yield*/, relativesModel_1.RelativeModel.find({ email: email })];
                case 1:
                    relativeDB = _a.sent();
                    res.send({ relatives: relativeDB });
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
exports.getUserRelatives = getUserRelatives;
