import express from "express";
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
const app = express();
const port = process.env.PORT || 3000;

app.use(cookieParser());
//static files
app.use(express.static("public"));

//express
app.use(express.json());

//connect to mongoDB with mongoose
mongoose.connect("mongodb+srv://doriel:FgvVuOI8ROgkvs06@cluster0.wvdhcfc.mongodb.net/test")
.then(()=>{
  console.info("DB connected")
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
