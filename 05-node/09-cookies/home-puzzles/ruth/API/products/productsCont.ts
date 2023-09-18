import { log } from "console";
import ProductModel from "./productsModel";
import UserModel from "../users/usersModel";

export async function createProduct(req, res) {
  try {
    const { newProd } = req.body;
    const owner = req.user;
    if (!owner) throw new Error("you need to login first");

    const product = new ProductModel({
      imgUrl: newProd.imgUrl,
      price: newProd.price,
      title: newProd.title,
      description: newProd.description,
      email: owner.email,
      customersWishList: [],
      customersCart: [],
    });
    const productDB = await product.save();
    console.log(productDB);
    res.send({ ok: true, newProduct: productDB });
  } catch (error) {
    console.error(error);
  }
}

export async function getProductByOwnerEmail(req, res) {
  try {
    const userDB = req.user;
    const userEmail = userDB.email;

    if (!userEmail) throw new Error("email not found");

    if (userDB.isAdmin) {
      const allProducts = await ProductModel.find({});
      res.send({ usersProducts: allProducts });
      return;
    }

    const usersProducts = await ProductModel.find({ email: userEmail });
    if (!usersProducts) throw new Error("user's products not found");

    res.send({ usersProducts });
  } catch (error) {
    console.error(error);
  }
}

export async function updateProductInfo(req, res) {
  try {
    const { id, title, price, description } = req.body;
    log(id, title, price, description);
    const currentProduct = await ProductModel.findOneAndUpdate(
      { _id: id },
      { title, price, description },
    );
    log(currentProduct);
    if (!currentProduct) {
      throw new Error("product not found");
    }
    console.log("updated successfully");

    res.send({ ok: true });
  } catch (error) {
    console.error(error.massage);
  }
}

export async function deleteProduct(req, res) {
  try {
    const { id } = req.body;
    const currentProduct = await ProductModel.findOneAndDelete({ _id: id });
    if (!currentProduct) {
      return res.status(404).json({ message: "product not found!" });
    }
    res.send({ ok: true });
    log("delete success");
  } catch (error) {
    console.error(error.massage);
  }
}

export async function getAllProducts(req, res) {
  try {
    const products = await ProductModel.find({});
    res.send({ products });
  } catch (error) {
    console.error(error.massage);
  }
}

export async function addProductToCart(req, res) {
  try {
    const { prodId, userEmail } = req.body;
    if (!userEmail || !prodId)
      throw new Error("product id or email not provided");
    const newCustomer = await ProductModel.findOneAndUpdate(
      { _id: prodId, customersCart: { $ne: userEmail } },
      { $addToSet: { customersCart: userEmail } },
      { new: true },
    );
    if (!newCustomer)
      throw new Error(
        "Customer not found or already add this product to his cart",
      );
    res.send({ ok: true });
    console.log(`${prodId} add to cart`);
  } catch (error) {
    console.error(error.massage);
  }
}

export async function addProductToWishList(req, res) {
  try {
    const { prodId, userEmail } = req.body;
    if (!userEmail || !prodId)
      throw new Error("product id or email not provided");

    const newCustomer = await ProductModel.findOneAndUpdate(
      { _id: prodId, customersWishList: { $ne: userEmail } },
      { $addToSet: { customersWishList: userEmail } },
      { new: true },
    );

    if (!newCustomer) {
      throw new Error(
        "Customer not found or already added this product to his wish list",
      );
    } else if (newCustomer.customersWishList.includes(userEmail)) {
      throw new Error("Product already added to customer's wish list.");
    }
    res.send({ ok: true });
    console.log(`${prodId} add to wishlist`);
  } catch (error) {
    console.error(error.massage);
  }
}

//-----------------------------wishlist--------------------------------

export async function getProductsToWishlist(req, res) {
  try {
    const userDB = req.user;
    const userEmail = userDB.email;
    if (!userEmail) throw new Error("user not found in cookie");
    const productsDB = await ProductModel.find({
      customersWishList: { $elemMatch: { $eq: userEmail } },
    }).exec();
    if (!productsDB) throw new Error("products not found");
    res.send({ productsDB });
  } catch (error) {
    console.error(error.message);
  }
}

export async function deleteWishlistProduct(req, res) {
  try {
    const userDB = req.user;
    const emailToRemove = userDB.email;
    const { prodId } = req.body;

    const productDB = await ProductModel.findById(prodId);

    if (!productDB) {
      throw new Error("product not found");
    }

    const indexToRemove = productDB.customersWishList.indexOf(emailToRemove);
    if (indexToRemove !== -1) {
      productDB.customersWishList.splice(indexToRemove, 1);
    }
    await productDB.save();
    res.send({ ok: true });
  } catch (error) {
    console.error(error);
  }
}

//--------------------cart----------------------------------------------------------

export async function getProductsToCart(req, res) {
  try {
    const userDB = req.user;
    const userEmail = userDB.email;
    if (!userEmail) throw new Error("user not found in cookie");
    const productsDB = await ProductModel.find({
      customersCart: { $elemMatch: { $eq: userEmail } },
    }).exec();
    if (!productsDB) throw new Error("products not found");
    res.send({ productsDB });
  } catch (error) {
    console.error(error.message);
  }
}

export async function deleteCartProduct(req, res) {
  try {
    const userDB = req.user;
    const emailToRemove = userDB.email;
    const { prodId } = req.body;

    const productDB = await ProductModel.findById(prodId);

    if (!productDB) {
      throw new Error("product not found");
    }

    const indexToRemove = productDB.customersCart.indexOf(emailToRemove);
    if (indexToRemove !== -1) {
      productDB.customersCart.splice(indexToRemove, 1);
    }
    await productDB.save();
    res.send({ ok: true });
  } catch (error) {
    console.error(error);
  }
}
