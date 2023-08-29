"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasks = exports.Task = void 0;
class Task {
    constructor(title, description, status) {
        this.title = title;
        this.description = description;
        this.status = status;
        this.id = Math.random().toString(36).substring(2);
    }
    changeStatus(taskStatus) {
        let Newstatus;
        if (taskStatus === "todo") {
            Newstatus = "done";
        }
        else {
            Newstatus = "todo";
        }
        this.status = Newstatus;
    }
}
exports.Task = Task;
exports.tasks = [];
//# sourceMappingURL=tasksModel.js.map