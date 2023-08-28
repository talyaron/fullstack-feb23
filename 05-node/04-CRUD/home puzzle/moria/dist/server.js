"use strict";
//server.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 4500;
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
class Friend {
    constructor({ name, email, phone, instegram, imgSrc }) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.imgSrc = imgSrc;
        this.instegram = instegram;
        this.id = Math.random().toString();
    }
}
let friends = [];
//create - friend
app.post("/API/add-friend", (req, res) => {
    const friend = req.body;
    console.log(friend);
    //add to friends array
    friends.push(new Friend(friend)); // --> add to Database
    console.log(friends);
    res.send({ friends });
});
//Read - friends
//get all friends
app.get("/API/get-friends", (req, res) => {
    try {
        res.send({ friends });
        console.log(friends);
    }
    catch (error) {
        console.error(error);
    }
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//delete - friend 
app.delete("/API/delete-friend", (req, res) => {
    try {
        const { id } = req.body;
        console.log(id);
        friends = friends.filter((friend) => friend.id !== id);
        res.send({ friends });
    }
    catch (error) {
        console.error(error);
        res.send({ error });
    }
});
app.patch("/API/update-friend", (req, res) => {
    try {
        const { name, id } = req.body;
        console.log(req.body);
        if (!name || !id)
            throw new Error("Please complete all fields");
        const friend = friends.find((friend) => friend.id === id);
        if (!friend)
            throw new Error("friend not found");
        friend.name = name;
        res.send({ friends });
    }
    catch (error) {
        console.error(error);
        res.send({ error });
    }
});