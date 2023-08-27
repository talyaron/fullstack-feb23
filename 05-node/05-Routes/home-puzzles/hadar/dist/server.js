"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
const router_1 = __importDefault(require("./API/router"));
app.use('/API', router_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
