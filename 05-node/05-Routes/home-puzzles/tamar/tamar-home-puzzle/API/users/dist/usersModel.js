"use strict";
exports.__esModule = true;
exports.users = exports.User = void 0;
var User = /** @class */ (function () {
    function User(_a) {
        var name = _a.name, password = _a.password;
        this.name = name;
        this.password = password;
        this.id = Math.random().toString();
    }
    return User;
}());
exports.User = User;
exports.users = [];
// export const users: User[] = [
//   new User({name:"Tamar"}),
//   new User({name:"Amir"}),
//   new User({name:"Sivan"}),
//   new User({name:"Ofir"}),
//   new User({name:"Eliya"})
// ];
