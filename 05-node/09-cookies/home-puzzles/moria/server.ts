import express from "express"
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
const app = express()
const port = process.env.PORT || 3001

app.use(cookieParser())

app.use(express.static("public"));



app.use(express.json());

mongoose.connect("mongodb+srv://moriaavraham5:v7m1w6TqJT2nownt@cluster0.3ionplx.mongodb.net/test")
    .then(() => {
        console.info("MongoDB connected")
    })
    .catch(err => {
        console.error(err)
    })


import userRouter from "./API/user2/userRouter";
app.use("/API/user2", userRouter);

import PersonalRouter from "./API/Personal/PersonalRouter";
app.use("/API/Personal", PersonalRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});