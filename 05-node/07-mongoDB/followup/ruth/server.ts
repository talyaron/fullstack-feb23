import express from "express";
import mongoose from "mongoose"

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


mongoose.connect("mongodb+srv://ruturAdmin:######@cluster0.k1el7dn.mongodb.net/")
.then(()=>console.log("mongoose connected!"))
.catch(err=>{
  console.error(err)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})