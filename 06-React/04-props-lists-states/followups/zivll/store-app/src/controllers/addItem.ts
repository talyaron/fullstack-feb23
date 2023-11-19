import { cart } from "./../model/cart";
import { useState } from "react";
import { products } from "../util/products";

export const addItem = (ev) => {
  debugger;
  const userProduct = products.products.find(
    (product) => product.id === parseInt(ev.target.value)
  );
  //   if (!userProduct||userProduct===undefined) return;
  const [cart, setCart] = useState("");
  setCart(userProduct);
  console.log(cart);
};
