import express from "express";
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 4000;



//static files
app.use(express.static("public"));

//body
app.use(express.json());

mongoose.connect("mongodb+srv://leedee:Omer2021!@cluster0.pe6xuzr.mongodb.net/test").then (() => {
  console.info("MongoDB connected")
}).catch(err =>{console.error(err)})

//router to products

// get router from userRouter
import userRouter from "./API/users/userRouter";
//tells express to use userRouter on the intial route "/API/users"
app.use("/API/users", userRouter)

import relativesRoutes from "./API/relatives/relativesRoutes";
app.use("/API/relatives", relativesRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
