"use strict";
exports.__esModule = true;
exports.RelativeModel = exports.RelativeSchema = exports.userRelatives = exports.UserRelatives = exports.relatives = exports.Relative = void 0;
var mongoose_1 = require("mongoose");
var relations_1 = require("../enums/relations");
var Relative = /** @class */ (function () {
    function Relative(fullName, birthDate, country, relation) {
        this.fullName = fullName;
        this.birthDate = birthDate;
        this.country = country;
        this.relation = relation;
        this.id = Math.random().toString(36).substr(2, 9);
    }
    Relative.prototype.changeRelation = function (newRelation) {
        this.relation = newRelation;
    };
    return Relative;
}());
exports.Relative = Relative;
exports.relatives = [];
var UserRelatives = /** @class */ (function () {
    function UserRelatives(user, relative) {
        this.user = user;
        this.relative = relative;
        this.id = Math.random().toString(36).substr(2, 9);
        this.isVerified = false;
    }
    return UserRelatives;
}());
exports.UserRelatives = UserRelatives;
exports.userRelatives = [];
exports.RelativeSchema = new mongoose_1.Schema({
    fullName: { type: String },
    birthDate: { type: String },
    country: { type: String },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'users' },
    relation: {
        type: String,
        "enum": Object.values(relations_1.Relation),
        "default": relations_1.Relation.choose
    }
});
exports.RelativeModel = mongoose_1.model('relatives', exports.RelativeSchema);
