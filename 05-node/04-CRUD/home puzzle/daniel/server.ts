import express from 'express';
const app = express()
const port = process.env.PORT || 3000;


interface _Friend {
    name: string;
    email: string;
    phoneNumber: number;
    instagramAccount: string;
}

// static files 
app.use(express.static('public'));
app.use(express.json()); // I need to add this if I want to get the (body: JSON.stringify(friend) //the req) 

class Friend {
    name: string;
    email: string;
    phoneNumber: number;
    instagramAccount: string;
    id: string;
    constructor({name, email, phoneNumber, instagramAccount}: _Friend){
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.instagramAccount = instagramAccount;
        this.id = Math.random().toString();
    }
}

let friends:Friend[] = []

// create -friend
//post-method for sending. the client sending to here and bring us the new friend.
app.post('/API/add-friend', (req, res)=>{
    const friend: _Friend = req.body;
    console.log(friend);
    //Add to friends array
    friends.push(new Friend(friend)); //-->add to database
    console.log(friends);
    res.send({friend})
    
}) 

// Read (with method get) - friends 
//Get all friends
app.get('/API/get-friends',(req, res)=>{
    try {
        res.send({friends})
    } catch (error) {
        console.error(error)
    }
})

//Delete - friend
app.delete("/API/delete-friend", (req, res)=>{
    try {
        const {id} = req.body;
        console.log(id);
        friends = friends.filter(friend => friend.id !==id);
        res.send({friends})
    } catch (error) {
        console.error(error)
        res.send({error})
    }
});


app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
    
})





//GET-READ
// CRUD-CREATE, READ, UPDAT, DELETE