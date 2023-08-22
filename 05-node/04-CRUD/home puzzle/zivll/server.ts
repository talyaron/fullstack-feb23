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
app.patch("/API/update", (req, res) => {
  try {
    const {
      friendsName,
      friendsEmail,
      friendsPhoneNumber,
      friendsInstagramAccount,
      id,
    } = req.body;
    console.log(req.body);
    if (
      !friendsName ||
      !friendsEmail ||
      !friendsPhoneNumber ||
      !friendsInstagramAccount ||
      !id
    )
      throw new Error(`Please fill in all the fields`);
    const friend = friends.find((friend) => friend.id === req.body.id);
    // const email = friends.find(
    //   (friend) => friend.friendsEmail === req.body.friendsEmail
    // );
    // const phoneNumber = friends.find(
    //   (friend) => friend.friendsPhoneNumber === req.body.friendsPhoneNumber
    // );
    // const instagramAccount = friends.find(
    //   (friend) =>
    //     friend.friendsInstagramAccount === req.body.friendsInstagramAccount
    // );
    if (!friend) throw new Error(`friend not found with id ${req.body.id}`);
    friend.friendsName = req.body.friendsName;
    friend.friendsEmail = req.body.friendsEmail;
    friend.friendsPhoneNumber = req.body.friendsPhoneNumber;
    friend.friendsInstagramAccount = req.body.friendsInstagramAccount;
    friend.id = req.body.id;
    res.send({ friend });
  } catch (error) {
    console.error(error);
  }
});

// delete
app.delete("/API/delete", (req, res) => {
  try {
    const { id } = req.body;
    const friendIndex = friends.findIndex((friends) => friends.id === id);
    friends.splice(friendIndex, 1);
    console.log(friends);
    res.send({ friends });
  } catch (error) {
    console.error(error);
  }
});
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

// function handleUpdateFriendsName(event: any) {}
// function handleDeleteFriend() {}
