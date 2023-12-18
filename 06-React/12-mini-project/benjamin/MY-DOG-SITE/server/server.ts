import express from "express";
const http = require('http');
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
const { createServer } = require('node:http');
const { join } = require('node:path');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
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

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});




















// const app = express();

// dotenv.config();

// const mongodb_uri = process.env.MONGO_URI;
// const PORT = process.env.PORT;

// // future implementation
// mongoose.set("strictQuery", true);

// mongoose
//   .connect(mongodb_uri)
//   .then((res) => {
//     console.log("Connected to DB");
//   })
//   .catch((err) => {
//     console.log("At mongoose.connect:");
//     console.error(err.message);
//   });

// app.use(express.json());
// app.use(cookieParser());

// app.get("/check", async (req, res) => {
//   try {
//     res.send({ ok: true, message: "hello" });
//   } catch (error) {
//     res.send({ error });
//   }
// });

// import usersRoutes from "./API/users/usersRoutes";
// app.use("/api/users", usersRoutes);

// app.listen(PORT, () => {
//   console.log(`server is active on port : ${PORT}`);
// });
