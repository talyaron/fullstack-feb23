"use strict";
exports.__esModule = true;
var tasksCont_1 = require("./tasksCont");
var router = express.Router();
router
    .post('/add-task', tasksCont_1.addTask)
    .get('/get-tasks', tasksCont_1.getTasks)
    .patch('/update-task-status', tasksCont_1.updateTaskStatus)["delete"]('/delet-task', tasksCont_1.deleteTask);
exports["default"] = router;
