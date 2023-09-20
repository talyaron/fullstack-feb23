import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());


class Friend{
    firstname:string
    lastname:string
    age:number
    id:string
        constructor({firstname,lastname,age}){
            this.firstname=firstname
            this.lastname=lastname
            this.age=age
            this.id = Math.random().toString();

        }


}

let friends:Friend[] =[]

app.post("/API/add-friend", (req, res) => {
    const friend:Friend = req.body;
    
    //add to products array
    friends.push(new Friend(friend)); // --> add to Database
    console.log(friends);
    res.send({ friend });
});

app.get("/API/get-friends",(req,res)=>{

    res.send({friends})

})






app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
