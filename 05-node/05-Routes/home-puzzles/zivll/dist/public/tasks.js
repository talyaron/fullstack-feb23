var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function handleAddTask(ev) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            ev.preventDefault();
            const task = {
                title: ev.target.title.value,
                description: ev.target.description.value,
            };
            // const status = ev.target.status;
            const response = yield fetch("/API/tasks/add-tasks", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(task),
            });
            const { tasks } = yield response.json();
            renderTasks(tasks, document.querySelector("#tasks"));
        }
        catch (error) {
            console.error(error);
        }
    });
}
function handleGetTasks() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("/API/tasks/get-tasks");
            const result = yield response.json();
            const { tasks } = result;
            renderTasks(tasks, document.querySelector("#tasks"));
        }
        catch (error) {
            console.error(error);
        }
    });
}
handleGetTasks();
function handleUpdateTask(element) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const task = {
                id: element,
            };
            const response = yield fetch("/API/tasks/update-tasks", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(task),
            });
            const result = yield response.json();
            const { tasks } = result;
            renderTasks(tasks, document.querySelector("#tasks"));
        }
        catch (error) {
            console.error(error);
        }
    });
}
function handleDeleteTask(taskId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const task = {
                id: taskId,
            };
            const response = yield fetch("/API/tasks/delete-tasks", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(task),
            });
            const result = yield response.json();
            const { tasks } = result;
            renderTasks(tasks, document.querySelector("#tasks"));
        }
        catch (error) {
            console.error(error);
        }
    });
}
function renderTaskHTML(tasks) {
    try {
        const html = tasks
            .map((task) => `<div class="task" id="${task.id}"><strong><p>title:</strong> ${task.title}</p><p><strong>description:</strong> ${task.description}</p><p><strong>id:</strong> ${task.id}</p><p class="${task.status}"><strong>status:</strong> ${task.status}</p><button class="button-28"onclick="handleUpdateTask('${task.id}')">Change task status</button><button class="button-24"onclick="handleDeleteTask('${task.id}')">Delete task</button></div>`)
            .join("");
        return html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderTasks(tasks, HTMLDivElement) {
    try {
        const html = renderTaskHTML(tasks);
        HTMLDivElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
//# sourceMappingURL=tasks.js.map