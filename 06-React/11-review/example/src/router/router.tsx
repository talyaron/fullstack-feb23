import { createBrowserRouter } from "react-router-dom";
import ProductsPage from "../views/productsPage/ProductsPage";

export const router = createBrowserRouter([
  { path: "/", element: <ProductsPage /> },
  { path: "/product/:id", element: <>product</> },
]);
