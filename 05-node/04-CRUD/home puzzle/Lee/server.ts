import express from 'express';
const app = express()
const port = process.env.PORT || 3000;

interface Friend {
  name: string;
  email: string;
  phone: string;
  igName: string;
}

app.use(express.static('public'));
app.use(express.json());



const friends: Friend [] = [];

app.post('/API/add-friend', (req, res) => {
  const friend: Friend = req.body;
  friends.push(friend)
  console.log(friends)
  res.send({friend})
})

app.get('/API/get-friends', (req, res) =>{
  try {
    res.send({friends})
  } catch (error) {
    console.error(error)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})