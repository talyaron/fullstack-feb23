"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3000;
// static files 
app.use(express_1.default.static('public'));
app.use(express_1.default.json()); // I need to add this if I want to get the (body: JSON.stringify(friend) //the req) 
class Friend {
    constructor({ name, email, phoneNumber, instagram }) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.instagram = instagram;
        this.id = Math.random().toString();
    }
}
let friends = [];
// create -friend
//post-method for sending. the client sending to here and bring us the new friend.
app.post('/API/add-friend', (req, res) => {
    const friend = req.body;
    console.log(friend);
    //Add to friends array
    friends.push(new Friend(friend)); //-->add to database
    console.log(friends);
    res.send({ friend });
});
// Read (with method get) - friends 
//Get all friends
app.get('/API/get-friends', (req, res) => {
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
        friends = friends.filter(friend => friend.id !== id);
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
//GET-READ
// CRUD-CREATE, READ, UPDAT, DELETE
