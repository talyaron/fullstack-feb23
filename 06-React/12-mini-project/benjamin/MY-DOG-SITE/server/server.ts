import express from "express";
const http = require('http');
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
const { createServer } = require('node:http');
const { join } = require('node:path');
const socketIo = require('socket.io');
import cors from "cors";

const app = express();
const server = http.createServer(app);

app.use(cookieParser())
app.use(express.json());


app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ['POST', 'GET'],
}));



const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});



app.post('/login', (req, res) => {
  const { username } = req.body;
  if (username) {
    res.cookie('username', username, { httpOnly: true, maxAge: 2 * 60 * 60 * 1000 });
    res.status(200).send('Logged in');
  } else {
    res.status(400).send('Username is required');
  }
});

app.get('/getUsername', (req, res) => {
  const username = req.cookies['username'];
  if (username) {
    res.send({ username });
  } else {
    res.status(404).send('Username not found');
  }
});


app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
  socket.on('chat message', (message) => {
    console.log('message:', message);
    socket.broadcast.emit('received message', message);
  });
});

server.listen(3001, () => {
  console.log('server running at http://localhost:3001');
});
