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

import usersRoutes from "./API/users/usersRoutes";
app.use("/API/users" , usersRoutes)

app.listen(port , () => {
  console.log(`server is running on port ${port}`)
})