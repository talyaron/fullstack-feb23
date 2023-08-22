import express from "express";
const app = express();
const port = process.env.PORT || 3000;

interface _Friend {
    fullName: string;
    email: string;
    phoneNumber: string;
    instegram: string;
    imgUrl: string;
  }
  
  //static files
  app.use(express.static("public"));
  app.use(express.json());
  
  class Friend {
    fullName: string;
    email: string;
    phoneNumber: string;
    instegram: string;
    imgUrl: string;
    id: string;
    constructor({ fullName, email, phoneNumber, instegram, imgUrl }: _Friend) {
      this.fullName = fullName;
      this.email = email;
      this.phoneNumber = phoneNumber;
      this.instegram = instegram;
      this.imgUrl = imgUrl;
      this.id = Math.random().toString();
    }
  }
  
  let friends: Friend[] = [];
  
  //CRUD - Create, Read, Update, Delete
  
  //Create - one friend
  app.post("/API/add-friend", (req, res) => {
    const friend: _Friend = req.body;
    console.log(friend);
    //add to friends array
    friends.push(new Friend(friend)); // --> add to Database
    console.log(friends);
    res.send({ friend });
  });
  
  //Read - all friends
  //get all friends list
  app.get("/API/get-friends", (req, res) => {
    try {
      res.send({ friends });
    } catch (error) {
      console.error(error);
    }
  });
  
  //Delete - one friend
  app.delete("/API/delete-friend", (req, res) => {
    try {
      const { id } = req.body;
      console.log(id);
      friends = friends.filter((friend) => friend.id !== id);
      res.send({ friends });
    } catch (error) {
      console.error(error);
      res.send({ error });
    }
  });
  
  //update - one friend
  app.patch("/API/update-friend", (req, res) => {
    try {
      const { email, phoneNumber, instegram, imgUrl, id } = req.body;
      console.log(req.body);
      if (!email || !phoneNumber ||!instegram || !imgUrl || !id) throw new Error("Please complete all fields");
      const friend = friends.find((friend) => friend.id === id);
  
      if (!friend) throw new Error("friend not found");
      friend.email = email;
      friend.phoneNumber = phoneNumber;
      friend.instegram = instegram;
      friend.imgUrl = imgUrl;
      res.send({ friends });
    } catch (error) {
      console.error(error);
      res.send({ error });
    }
  });
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });