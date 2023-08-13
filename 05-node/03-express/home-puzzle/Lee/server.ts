import express from 'express';
const app = express()
const port = process.env.PORT || 3000;


app.use(express.static('public'));

const myName = "The easiest way for vets!"

app.get('/name', (req, res) => {
    console.log('request to name')
    res.send({name: myName})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})