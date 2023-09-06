import express from "express";
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 3002;

//static files
app.use(express.static("public"));

//body
app.use(express.json());

//connect to mongoDB with mongoose
mongoose.connect("mongodb+srv://hadaritzhaki:hadarmongo1303@cluster0.woft1rt.mongodb.net/")
.then(()=>{
  console.info("MongoDB connected")
})
.catch(err=>{
  console.error(err)
})





//routers
import userRouter from "./API/users/userRouter";

app.use("/API/users", userRouter)

import tasksRouter from "./API/tasks/tasksRoutes";
app.use("/API/tasks", tasksRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
