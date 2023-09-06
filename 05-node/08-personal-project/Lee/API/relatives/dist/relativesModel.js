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
})(Relation = exports.Relation || (exports.Relation = {}));
var Relative = /** @class */ (function () {
    function Relative(fullName, country, relation) {
        this.fullName = fullName;
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
// export class UserTasks {
//   id: string;
//   constructor(public user: User, public task: Task) {
//     this.id = Math.random().toString(36).substr(2, 9);
//   }
// }
// export const userTasks: UserTasks[] = [];
//join collection (class)
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
