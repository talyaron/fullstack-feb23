"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// static files
app.use(express_1.default.static("public"));
// body
app.use(express_1.default.json());
// CRUD
const tasksRouter_1 = __importDefault(require("./API/tasks/tasksRouter"));
app.use("/API/tasks", tasksRouter_1.default);
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});
//# sourceMappingURL=server.js.map