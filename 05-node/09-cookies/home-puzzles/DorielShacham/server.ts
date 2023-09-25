import express from "express";
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import {getLoggedUser} from "./API/user/userMiddleware";
import { getUserBlog } from "./API/blog/blogMiddleware";
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;

app.use(cookieParser());
//static files
app.use(express.static("public"));

// console.log(process.env.MONGO_URI);
//express
app.use(express.json());
app.use(getLoggedUser);
app.use(getUserBlog);
//connect to mongoDB with mongoose
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  console.info("DataBase is connected")
})
.catch(err=>{
  console.error(err)
})

// get router from usersRouter
import userRouters from "./API/user/userRoutes"
//tells express to use proudctsRouter on the intial route "/API/users"
app.use("/API/user", userRouters);


// Get router from blogRoutes
import blogRouters from "./API/blog/blogRoutes";

app.use("/API/blog", blogRouters);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
