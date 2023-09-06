import express from "express";
const app = express();
const port = process.env.PORT || 3000;
//static files
app.use(express.static("public"));

//body
app.use(express.json());

import usersRouter from "./API/users/usersRouter";
app.use("/API/users", usersRouter);











const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://benben3135:cpoI5wCWhSRm5jlw@cluster0.nmg3euq.mongodb.net/');
  console.log('Connected to Atlas');

}


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
