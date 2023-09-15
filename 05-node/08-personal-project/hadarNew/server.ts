import express from "express";
import mongoose from "mongoose";
import cookieParder from 'cookie-parder';
const app = express();
const port= process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

//conect to mongoDB with monggoose
mongoose.connect("mongodb+srv://hadaritzhaki:hadarmongo1303@cluster0.woft1rt.mongodb.net/test")
.then(()=>{
  console.info("MongoDB connected")
})
.catch(err=>{
  console.error(err)
})



import router from "./API/img/router";
app.use('/API/img', router)

import userrouter from "./API/user/userrouter";
app.use('/API/user', userrouter)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});