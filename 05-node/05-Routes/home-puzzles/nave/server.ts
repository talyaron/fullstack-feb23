import express from "express";
const app = express();
const port = process.env.PORT || 3000;
interface _Task {
    title: string;
    price: number;
    imgUrl: string;
  }


//static files
app.use(express.static("public"));

//body
app.use(express.json());

//router to products
// get router from productsRouter
import userRouter from "./API/user/userRouter";
//tells express to use proudctsRouter on the intial route "/API/products"
app.use("/API/user", userRouter)

import taskRouter from "./API/task/taskRouter";
app.use("/API/task", taskRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});










