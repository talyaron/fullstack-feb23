import express from "express";
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

const app = express();
const port = process.env.PORT || 3000;

//middlware for using parser
app.use(cookieParser())


//static files
app.use(express.static("public"));

//body
app.use(express.json());

//connect to mongoDB with mongoose
mongoose.connect("mongodb+srv://shiranlasry1:jf1EdIVAk2IXUUKU@cluster0.hsoq9u5.mongodb.net/test")
.then(()=>{
  console.info("MongoDB connected")
})
.catch(err=>{
  console.error(err)
})

// get router from usersRouter
import userRouters from "./API/user/userRoutes"
//tells express to use proudctsRouter on the intial route "/API/users"
app.use("/API/user", userRouters);

// get router from recipeRoutes
import recipeRouters from "./API/recipe/recipeRoutes"
//tells express to use proudctsRouter on the intial route "/API/users"
app.use("/API/recipe", recipeRouters);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
