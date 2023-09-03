"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3001;
//static files
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
const taskRout_1 = __importDefault(require("./API/tasks/taskRout"));
const usersRout_1 = __importDefault(require("./API/users/usersRout"));
app.use("/API", taskRout_1.default);
app.use("/API/users", usersRout_1.default);
app.listen(port, () => {
    console.log(`app run at port ${port}`);
});
