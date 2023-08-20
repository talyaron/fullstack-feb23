import express from 'express';
const app = express()
const port = process.env.PORT || 3000;

interface _Product {
  title: string;
  price: number;
  imgUrl: string;
}

//static files
app.use(express.static('public'));
app.use(express.json());

class Product{
  title: string;
  price: number;
  imgUrl: string;
  id:string;
  constructor({title, price, imgUrl}:_Product){
    this.title = title;
    this.price = price;
    this.imgUrl = imgUrl;
    this.id = Math.random().toString();
  }
}

let products:Product[] = [];

//CRUD - Create, Read, Update, Delete

//Create - product
app.post('/API/add-product', (req, res) => {
  const product:_Product = req.body;
  console.log(product)
  //add to products array
  products.push( new Product(product)); // --> add to Database
  console.log(products)
  res.send({product})
});

//Read - products
//get all products
app.get("/API/get-products",(req, res)=>{
  try {
    res.send({products})
  } catch (error) {
    console.error(error)
  }
})

//Delete - product
app.delete("/API/delete-product",(req, res)=>{
  try {
    const {id} = req.body;
    console.log(id);
    products = products.filter(product=>product.id !== id);
    res.send({products})
  } catch (error) {
    console.error(error)
    res.send({error})
  }
});

//update - product
app.patch("/API/update-product",(req, res)=>{
  try {
    const {price, id } = req.body;
    console.log(req.body)
    if(!price || !id) throw new Error("Please complete all fields");
    const product = products.find(product=>product.id === id);

    if(!product) throw new Error("Product not found");
    product.price = price;
    res.send({products});
     
  } catch (error) {
    console.error(error)
    res.send({error})
  }
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})