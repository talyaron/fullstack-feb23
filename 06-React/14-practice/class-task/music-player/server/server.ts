import express from "express";
const app = express();
// console.log(require("dotenv").config());
require("dotenv").config();
import connection from "./DB/database";
const port = process.env.PORT;

app.use(express.static("client"));

console.log(connection);
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
