import express from "express";
import connection from "./DB/database";
import bcrypt from "bcrypt";
import jwt from "jwt-simple";

const cookieParser = require("cookie-parser");
const saltRounds = 10;


require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(express.static("client"));


app.get("/api/check", (req, res) => {
  try {
    console.log("test")
    res.send({ ok: true, message: "hello" })
  } catch (error) {
    console.log(error);
    res.send({ ok: false, error: error.message });
  }
})

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
