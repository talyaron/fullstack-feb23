"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 5000;
console.log(process.env);
console.log("listen to servers.ts");
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
//static files
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
class Friend {
    constructor({ firstName, lastName, age, imgUrl }) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.imgUrl = imgUrl;
        this.id = Math.random().toString();
    }
}
let friends = [];
//POST - friend
app.post("/API/add-friend", (req, res) => {
    const friend = req.body;
    console.log(friend);
    //add to friends array
    friends.push(new Friend(friend)); // --> add to Database
    console.log(friends);
    res.send({ friend });
});
//GET all friends
app.get("/API/get-friends", (req, res) => {
    try {
        res.send({ friends });
    }
    catch (error) {
        console.error(error);
    }
});
//DELETE - friend
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
//PATCH - friend
app.patch("/API/update-friend", (req, res) => {
    try {
        const { age, id } = req.body;
        console.log(req.body);
        if (!age || !id)
            throw new Error("[UPDATE|ID] error");
        const friendToUpdate = friends.find((friend) => friend.id === id);
        if (friendToUpdate) {
            friendToUpdate.age = age;
            res.json({ friends });
        }
        else {
            res.status(404).json({ error: "Friend not found" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
    }
});
console.log("servers.ts file");
//listen to prototcols
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
