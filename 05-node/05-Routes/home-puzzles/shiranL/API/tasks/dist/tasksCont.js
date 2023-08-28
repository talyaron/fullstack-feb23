"use strict";
exports.__esModule = true;
exports.addUserTask = void 0;
var usersModel_1 = require("../users/usersModel");
var tasksModel_1 = require("./tasksModel");
// export function getUserTasks(req: any, res: any) {
//     try {
//         res.send({ userTasks });
//     } catch (error) {
//         console.error(error);
//     }
// }
function addUserTask(req, res) {
    try {
        var _a = req.body, title = _a.title, description = _a.description, id_1 = _a.id; //get from client
        var user = usersModel_1.users.find(function (user) { return user.id === id_1; }); // find user by id
        if (!user) {
            throw new Error("user not found");
        }
        // create the task
        var newTask = new tasksModel_1.Task(title, description, tasksModel_1.TaskStatus.open);
        //if user already have tasks
        var userTask = tasksModel_1.userTasks.find(function (userTask) { return userTask.user.id === id_1; });
        if (userTask) {
            // push new task to user tasks
            userTask.tasks.push(newTask);
            res.send({ success: true, userTasks: tasksModel_1.userTasks });
        }
        else {
            var newUserTask = new tasksModel_1.UserTasks(user, [newTask]);
            tasksModel_1.userTasks.push(newUserTask);
            res.send({ success: true, userTasks: tasksModel_1.userTasks });
        }
    }
    catch (error) {
        console.error(error);
    }
}
exports.addUserTask = addUserTask;
