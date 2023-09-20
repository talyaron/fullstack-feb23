
import express from "express";
const app = express();


// ------------------------------------------
// create an app for storing your friends name, email, phone number and instegram account.
interface _Friend{
    name: string;
    email: string;
    phone: number;
    insta:string;
}

//static files
app.use(express.static("public"));
app.use(express.json());

class Friend {
    name: string;
    email: string;
    phone: number;
    insta:string;
    id: string;
    constructor({ name, email, phone,insta }: _Friend) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.insta = insta;
      this.id = Math.random().toString();
    }
  }


let friends:Friend[]=[];

//CRUD - Create, Read, Update, Delete
app.post("/API/add-friend", (req, res) => {
    const friend:_Friend = req.body;
  
    console.log(friends);
    friends.push(new Friend(friend));
    res.send({ friend })
})
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});