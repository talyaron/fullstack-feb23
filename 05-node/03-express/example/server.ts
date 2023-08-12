import express from 'express';
const app = express()
const port = process.env.PORT || 3000;

//static files
app.use(express.static('public'));

const myName = "Tal"

//routes to get data from server
app.get('/name', (req, res) => {
    console.log('request to name')
    res.send({ name: siteN })
});

app.get('/family', (req, res) => {
    console.log('request to family')
    res.send({ family: "Rozen" })
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})