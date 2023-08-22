import express from "express";
const app = express();
const port = process.env.PORT || 3000;
class Friend {
  friendsName: string;
  friendsEmail: string;
  friendsPhoneNumber: string;
  friendsInstagramAccount: string;
  id?: string;
  constructor(
    friendsName: string,
    friendsEmail: string,
    friendsPhoneNumber: string,
    friendsInstagramAccount: string
  ) {
    this.friendsName = friendsName;
    this.friendsEmail = friendsEmail;
    this.friendsPhoneNumber = friendsPhoneNumber;
    this.friendsInstagramAccount = friendsInstagramAccount;
    this.id = Math.random().toString(36).substring(2);
  }
}
const friends: Friend[] = [];
app.use(express.static("public"));
app.use(express.json());
// CRUD create, read, update, delete

// create
app.post("/API/create", (req, res) => {
  const friend: Friend = new Friend(
    req.body.friendsName,
    req.body.friendsEmail,
    req.body.friendsPhoneNumber,
    req.body.friendsInstagramAccount
  );
  console.log(friend);
  friends.push(friend);
  res.send({ friend });
});

// read
app.get("/API/getAllfriends", (req, res) => {
  try {
    res.send(friends);
  } catch (error) {
    console.error(error);
  }
});

// update
app.patch("/API/update", (req, res) => {});

// delete
app.delete("/API/delete", (req, res) => {});
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
