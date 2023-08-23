import express from 'express';
const app = express()
const port = process.env.PORT || 3000;


app.use(express.static('public'));
app.use(express.json());

const slogan = "The easiest way for vets!"
let name = ""


app.get('/slogan', (req, res) => {
  console.log('request to slogan')
  res.send({ slogan: slogan })
});

app.get('/name', (req, res) => {
  console.log('request to name')
  res.send({ name: name })
});

app.post('/name', (req, res) => {
  console.log('received name:', req.body.name)
  name = req.body.name
  res.send({ name: name })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})