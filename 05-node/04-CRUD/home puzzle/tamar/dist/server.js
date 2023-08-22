"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3000;
//static files
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
class friend {
    constructor({ fullName, phoneNumber, imgUrl }) {
        this.fullName = fullName;
        this.phoneNumber = phoneNumber;
        this.imgUrl = imgUrl;
        this.id = Math.random().toString();
    }
}
let friends = [];
//CRUD - Create, Read, Update, Delete
//Create - friend
app.post("/API/add-friend", (req, res) => {
    const friend = req.body;
    console.log(friend);
    //add to friends array
    friends.push(new friend(friend)); // --> add to Database
    console.log(friends);
    res.send({ friend });
});
//Read - friends
//get all friends
app.get("/API/get-friends", (req, res) => {
    try {
        res.send({ friends });
    }
    catch (error) {
        console.error(error);
    }
});
//Delete - friend
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
//update - friend
app.patch("/API/update-friend", (req, res) => {
    try {
        const { phoneNumber, id } = req.body;
        console.log(req.body);
        if (!phoneNumber || !id)
            throw new Error("Please complete all fields");
        const friend = friends.find((friend) => friend.id === id);
        if (!friend)
            throw new Error("friend not found");
        friend.phoneNumber = phoneNumber;
        res.send({ friends });
    }
    catch (error) {
        console.error(error);
        res.send({ error });
    }
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
