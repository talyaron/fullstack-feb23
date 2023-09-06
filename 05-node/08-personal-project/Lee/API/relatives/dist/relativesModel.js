"use strict";
exports.__esModule = true;
exports.userRelatives = exports.UserRelatives = exports.relatives = exports.Relative = exports.Relation = void 0;
var Relation;
(function (Relation) {
    Relation["choose"] = "Choose";
    Relation["mother"] = "Mother";
    Relation["father"] = "Father";
    Relation["brother"] = "Brother";
    Relation["sister"] = "Sister";
    Relation["sibling"] = "Sibling";
    Relation["granddaughter"] = "Granddaughter";
    Relation["grandson"] = "Grandson";
    Relation["uncle"] = "Uncle";
    Relation["aunt"] = "Aunt";
    Relation["cousin"] = "Cousin";
    Relation["niece"] = "Niece";
    Relation["nephew"] = "Nephew";
})(Relation = exports.Relation || (exports.Relation = {}));
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
    function UserRelatives(user, task) {
        this.user = user;
        this.task = task;
        this.id = Math.random().toString(36).substr(2, 9);
    }
    return UserRelatives;
}());
exports.UserRelatives = UserRelatives;
exports.userRelatives = [];
