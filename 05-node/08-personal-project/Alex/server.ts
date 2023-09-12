import express from "express";
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 3000;



//static files
app.use(express.static("public"));

//body
app.use(express.json());

//connect to mongoDB with mongoose
mongoose.connect("mongodb+srv://athegreat5:4VspRIIT6N27mtbn@cluster0.g7gvful.mongodb.net/test")
.then(()=>{
  console.info("MongoDB connected")
})
.catch(err=>{
  console.error(err)
})




//router to products

// get router from userRouter
 import userRouter from "./API/users/userRoutes";
// //tells express to use userRouter on the intial route "/API/users"
 app.use("/API/users", userRouter)

import itemRouter from "./API/items/itemRoutes";
app.use("/API/items", itemRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
