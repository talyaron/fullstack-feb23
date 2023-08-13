import express from 'express';
const app = express()
const port = process.env.PORT || 3000;

//static files
app.use(express.static('public'));

const myUser = "Daniel"

//routes to get data from server
app.get('/user', (req, res) => {
    console.log('request to user')
    res.send({ user: myUser })
});

app.get('/age', (req, res) => {
    console.log('request to age')
    res.send({ age: "21" })
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
