"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
const usersRoutes_1 = __importDefault(require("./API/Users/usersRoutes"));
app.use("/API/users", usersRoutes_1.default);
const imagesRoutes_1 = __importDefault(require("./API/Images/imagesRoutes"));
app.use("/API/img", imagesRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`);
});
