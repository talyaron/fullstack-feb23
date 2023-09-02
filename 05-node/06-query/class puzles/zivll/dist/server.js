"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
const router_1 = __importDefault(require("./API/images/router"));
app.use("/API/images", router_1.default);
const router_2 = __importDefault(require("./API/users/router"));
app.use("/API/users", router_2.default);
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
