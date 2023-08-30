"use strict";
exports.__esModule = true;
exports.login = exports.registerUser = void 0;
var usersModel_1 = require("./usersModel");
exports.registerUser = function (req, res) {
    try {
        var _a = req.body, email_1 = _a.email, password = _a.password;
        if (!email_1 || !password)
            throw new Error("please complete all fields");
        var user = new usersModel_1.User({ email: email_1, password: password });
        var userExist = usersModel_1.users.find(function (user) { return user.email === email_1; });
        if (userExist)
            throw new Error("User already exist");
        usersModel_1.users.push(user);
        res.send({ ok: true });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
};
exports.login = function (req, res) {
    try {
        var _a = req.body, email_2 = _a.email, password_1 = _a.password;
        if (!email_2 || !password_1)
            throw new Error("Please complete all fields");
        var user = usersModel_1.users.find(function (user) { return user.email === email_2 && user.password === password_1; });
        if (!user)
            throw new Error("some of the details are incorrect");
        res.send({ ok: true, email: user.email });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
};
// export const getUsers = (req, res) => {
//     try {
//         res.send({users});
//     } catch (error) {
//         console.error(error);
//     }
// }
// export const deleteUser = (req: any, res: any) => {
//     try {
//       const { id } = req.body;
//       console.log(id);
//       users = users.filter((user) => user.id !== id);
//       res.send({ users });
//     } catch (error) {
//       console.error(error);
//       res.send({ error });
//     }
//   }
// export const updateTaskStatus = (req: any, res: any) => {
//   try {
//     const { status, id } = req.body;
//     console.log(req.body);
//     if (!status || !id) throw new Error("Please complete all fields");
//     const task = tasks.find((task) => task.id === id);
//     if (!task) throw new Error("Product not found");
//     task.status = status;
//     res.send({ tasks });
//   } catch (error) {
//     console.error(error);
//     res.send({ error });
//   }
// }
