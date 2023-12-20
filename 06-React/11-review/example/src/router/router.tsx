import { createBrowserRouter } from "react-router-dom";
import ProductsPage from "../views/productsPage/ProductsPage";
import ProductPage from "../views/productPage/ProductPage";

export const router = createBrowserRouter([
  { path: "/", element: <ProductsPage /> },
  { path: "/product/:id", element: <ProductPage /> },
]);
