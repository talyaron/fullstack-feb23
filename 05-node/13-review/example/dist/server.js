"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
dotenv_1.default.config();
const mongodb_uri = process.env.MONGO_URI;
const PORT = process.env.PORT;
mongoose_1.default.connect(mongodb_uri).then((res) => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(`AT mongoose connect:`);
    console.log(err.message);
});
app.use(express_1.default.json());
app.use(express_1.default.static("public"));
const usersRoutes_1 = __importDefault(require("./API/users/usersRoutes"));
app.use("/api/users", usersRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server is listenning on port:${PORT}`);
});
