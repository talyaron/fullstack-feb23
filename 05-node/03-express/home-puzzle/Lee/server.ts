import express from 'express';
const app = express()
const port = 3000;


app.use(express.static('public'));

const myName = "Nella"

app.get('/name', (req, res) => {
    console.log('request to name')
    res.send({name: myName})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})