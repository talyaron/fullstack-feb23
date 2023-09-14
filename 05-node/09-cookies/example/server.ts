import express from "express";
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

const app = express();
const port = process.env.PORT || 3004;


//middlware for using parser
app.use(cookieParser())


//static files
app.use(express.static("public"));

//body
app.use(express.json());

//connect to mongoDB with mongoose
mongoose.connect("mongodb+srv://tal:70wYmEQ9nKMUneqc@cluster0.0hzknon.mongodb.net/test")

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

// get router from image
// import imgRouters from "./API/images/imgRoutes"
// //tells express to use proudctsRouter on the intial route "/API/users"
// app.use("/API/images", imgRouters);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
