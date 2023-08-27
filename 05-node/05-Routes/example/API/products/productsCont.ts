import { Product } from "./productsModel";

let products: Product[] = [
    new Product({title:"test", price:10, imgUrl:"bla"})
];

//add product controler
export const addProduct = (req: any, res: any) => {
    const product: Product = req.body;
    console.log(product);
    //add to products array
    products.push(new Product(product)); // --> add to Database
    console.log(products);
    res.send({ product });
};

//get products
export const getProducts = (req, res) => {
    try {
        res.send({ products });
    } catch (error) {
        console.error(error);
    }
}

export const deleteProduct = (req, res) => {
    try {
        const { id } = req.body;
        console.log(id);
        products = products.filter((product) => product.id !== id);
        res.send({ products });
    } catch (error) {
        console.error(error);
        res.send({ error });
    }
}

export const updateProductPrice = (req: any, res: any) => {
    try {
        const { price, id } = req.body;
        console.log(req.body);
        if (!price || !id) throw new Error("Please complete all fields");
        const product = products.find((product) => product.id === id);

        if (!product) throw new Error("Product not found");
        product.price = price;
        res.send({ products });
    } catch (error) {
        console.error(error);
        res.send({ error });
    }
}