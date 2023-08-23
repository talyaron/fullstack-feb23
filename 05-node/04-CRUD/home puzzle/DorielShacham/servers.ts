import express from "express";
const app = express();
const port = process.env.PORT || 5000;

console.log(process.env);
console.log("listen to servers.ts");

app.use(express.static("public"));
app.use(express.json());

//protocols
interface _Friend {
  firstName: string;
  lastName: string;
  age: number;
  imgUrl: string;
  id?: string;
}

//static files
app.use(express.static("public"));
app.use(express.json());

class Friend {
  firstName: string;
  lastName: string;
  age: number;
  imgUrl: string;
  id: string;
  constructor({ firstName, lastName, age, imgUrl }: _Friend) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.imgUrl = imgUrl;
    this.id = Math.random().toString();
  }
}

let friends: Friend[] = [];

//CRUD - Create, Read, Update, Delete

//Create - friend
app.post("/API/add-friend", (req, res) => {
  const friend: _Friend = req.body;
  console.log(friend);
  //add to friends array
  friends.push(new Friend(friend)); // --> add to Database
  console.log(friends);
  res.send({ friend });
});

//Read - friends
//get all friends
app.get("/API/get-friends", (req, res) => {
  try {
    res.send({ friends });
  } catch (error) {
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
  } catch (error) {
    console.error(error);
    res.send({ error });
  }
});

//update - friend
app.patch("/API/update-friend", (req, res) => {
  try {
    const { age, id } = req.body;
    console.log(req.body);

    if (!age || !id) throw new Error("[UPDATE|ID] error");
    const friendToUpdate = friends.find((friend) => friend.id === id);

    if (friendToUpdate) {
      friendToUpdate.age = age;
      res.json({ friends });
    } else {
      res.status(404).json({ error: "Friend not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});
console.log("servers.ts file");

//listen to prototcols
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
