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
class Friend {
    constructor({ firstname, lastname, age }) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.id = Math.random().toString();
    }
}
let friends = [];
app.post("/API/add-friend", (req, res) => {
    const friend = req.body;
    //add to products array
    friends.push(new Friend(friend)); // --> add to Database
    console.log(friends);
    res.send({ friend });
});
app.get("/API/get-friends", (req, res) => {
    res.send({ friends });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
