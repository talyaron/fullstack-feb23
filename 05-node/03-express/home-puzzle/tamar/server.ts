import express from 'express';
const app = express()
const port = process.env.PORT || 3000;

//static files
app.use(express.static('public'));

const mytitle = "Tamar's Site is Here"

//routes to get data from server
app.get('/title', (req, res) => {
    console.log('request to title')
    res.send({ title: mytitle })
});

app.get('/description', (req, res) => {
    console.log('request to description')
    res.send({ description: "this site is to test my new server" })
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})