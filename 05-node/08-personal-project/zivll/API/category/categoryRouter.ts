import express from "express";
import { addCategoey, getCategories } from "./categoryCont";
const categoryRoutes = express.Router();
categoryRoutes
  .post("/add-category", addCategoey)
  .get("/get-categories", getCategories);
export default categoryRoutes;
