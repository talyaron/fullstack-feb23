import express from "express";
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3000;



//static files
app.use(express.static("public"));

//body
app.use(express.json());

//connect to mongoDB with mongoose
mongoose.connect("mongodb+srv://margor666:lioOMwzTx5eK7C8I@cluster0.z9dvozm.mongodb.net/")
.then(()=>{
  console.info("Romans MongoDB connected")
})
.catch((err) => {
  console.error('Failed to connect to MongoDB:', err);
})




//router to products

// get router from userRouter
import userRoutes from "./API/users/userRoutes";
//tells express to use userRoutes on the intial route "/API/users"
app.use("/API/users", userRoutes)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
