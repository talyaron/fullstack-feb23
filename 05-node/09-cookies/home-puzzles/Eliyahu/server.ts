import express from "express";
import mongoose from 'mongoose';
import cookieParser from "cookie-parser"
const app = express();
const port = process.env.PORT || 3001;

app.use(cookieParser())
app.use(express.static('public'));
app.use(express.json());


mongoose.connect("mongodb+srv://eliyahuBasson:2PNwya1QXHKD3VGx@cluster0.af1ziou.mongodb.net/test")

.then(()=>{
  console.info("MongoDB connected")
})
.catch(err=>{
  console.error(err)
})

import picturesRouter from './API/pictures/picturesRouter'
import userRouter from './API/users/userRouter'
app.use('/API/pictures', picturesRouter)
app.use('/API/users', userRouter)



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });