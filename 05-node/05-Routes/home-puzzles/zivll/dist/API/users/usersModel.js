"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = exports.User = void 0;
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
        this.id = Math.random().toString(36).substring(2);
        this.email = email;
        this.password = password;
    }
}
exports.User = User;
exports.users = [];
//# sourceMappingURL=usersModel.js.map