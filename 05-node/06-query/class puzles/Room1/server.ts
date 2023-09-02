import express from "express"
const app = express()
const port = process.env.PORT || 3000

//static files
app.use(express.static("public"));

//body
app.use(express.json());

//router to products
// get router from productsRouter
import picRouter from "./API/pics/picsRouter";
//tells express to use proudctsRouter on the intial route "/API/products"
app.use("/API/pics", picRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});