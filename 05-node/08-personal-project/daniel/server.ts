import express from "express";
import mongoose from "mongoose";
const app = express();
const port = process.env.PORT || 3010;



//static files
app.use(express.static("public"));

//body
app.use(express.json());

// Connect
mongoose.connect("mongodb+srv://danieltov:PAJK6J2dQZqB2kQz@cluster0.il5wznm.mongodb.net/Node-API")
.then(()=>{
  console.info("MongoDB connected")
})
.catch(err=>{
  console.error(err)
})
 
// get router from userRouter
import userRouter from "./API/users/userRouter";
//tells express to use userRouter on the intial route "/API/users"
app.use("/API/users", userRouter)

import crossfitRouter from "./API/crossfit/crossfitRouter";
app.use("/API/crossfit", crossfitRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// PAJK6J2dQZqB2kQz