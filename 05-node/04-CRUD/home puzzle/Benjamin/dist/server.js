"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
//static files
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
class Friend {
    constructor({ name, email, phone, insta }) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.insta = insta;
        this.id = Math.random().toString();
    }
}
let friends = [];
//CRUD - Create, Read, Update, Delete
app.post("/API/add-friend", (req, res) => {
    const friend = req.body;
    console.log(friends);
    friends.push(new Friend(friend));
    res.send({ friend });
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
