// create an app for storing your friends name, email, phone number and instegram account.
// 1) CRUD each friend data.


const express = require('express')
const app = express()
const port = 3000

class Friend {
    id?: string;
    constructor(public name: string, public email: string, public phone: number, public instagram: string) {
    this.id = Math.random().toString(); 
    }
}

// const x = new Friend('name','email@mail.com','123-456-789','http://www.instagram.com');
// console.log(x);

let friends: Friend[] = [];

//---Static Files
app.use(express.static("public"));
app.use(express.json());


//CRUD - Create, Read, Update, Delete

//Create
app.post("/API/add-friend", (req, res) => {
    const friend: Friend = req.body;
    
    //add to products array
    friends.push(new Friend(friend.name,friend.email,friend.phone,friend.instagram)); // --> add to Database
    console.log(friends);
    res.send({ friend });
  });

//Read 
//get all friends
app.get("/API/get-friends", (req, res) => {
    try {
      res.send({ friends });
    } catch (error) {
      console.error(error);
    }
  });

  //Update

app.patch("/API/update-friend", (req, res) => {
  try {
    const { name, email, phone, id, instagram } = req.body;
    // const { name,  email,id, phone} = req.body;
    console.log(req.body);
    // if (!name || !email || !phone || !id || !instagram) throw new Error("Please complete all fields");
    const friend = friends.find((friend) => friend.id === id);

    if (!friend) throw new Error("Friend not found");
    friend.name = name;
    friend.phone = phone;
    // console.log(name,email,phone,id)
    friend.email = email;
    friend.instagram = instagram;
    res.send({ friends });
  } catch (error) {
    console.error(error);
    res.send({ error });
  }
});

//Delete - product
app.delete("/API/delete-friend", (req, res) => {
  try {
    const { id } = req.body;
    friends = friends.filter((product) => product.id !== id);
    res.send({ friends });
  } catch (error) {
    console.error(error);
    res.send({ error });
  }
});

app.listen(port, () => {
    
  console.log(`Example app listening on port ${port}`)
})