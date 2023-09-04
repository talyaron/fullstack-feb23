import express from "express";
const app = express();
const port = process.env.PORT || 3000;

interface _Product {
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
import productsRouter from "./API/products/productsRouter";
//tells express to use proudctsRouter on the intial route "/API/products"
app.use("/API/products", productsRouter)

// get router from userRouter
import userRouter from "./API/users/userRouter";
//tells express to use userRouter on the intial route "/API/users"
app.use("/API/users", userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
