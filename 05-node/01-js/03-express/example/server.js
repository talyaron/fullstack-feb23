const express = require('express');
const app = express()
const port = 3002;

//static files
app.use(express.static('public')) // --> index.html

//basic routes for information

//get, post, put, delete are methods of http protocol

//the client get information from the server
app.get('/', (req, res) => {
    res.header('Content-Type', 'text/html')
    res.send('<h1>Hello World!</h1>')
})

//the client send informatio to the server
app.post('/', (req, res) => {})

//the client update information to the server
app.put('/', (req, res) => {}); //update the entire resource
app.patch('/', (req, res) => {}); //update part of the resource

//the client delete information to the server
app.delete('/', (req, res) => {});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})