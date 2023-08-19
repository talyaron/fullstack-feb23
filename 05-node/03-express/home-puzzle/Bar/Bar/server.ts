import express from 'express';
const app = express()
const port = process.env.PORT || 3002;

//static files
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// const getNameFromUser = prompt('Please enter your name');

const myName = 'Bar';

app.get('/name', (req, res) => {
  console.log('request to /name')
  res.send({ name: myName })
});

app.get('/family', (req, res) => {
  console.log('request to /family')
  res.send({ family: 'Yaron' })
});