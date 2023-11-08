import express from "express";
import { addCategoey, getCategories } from "./categoryCont";
import { isAdmin } from "../users/usersCont";
const categoryRoutes = express.Router();
categoryRoutes
  .post("/add-category", isAdmin, addCategoey)
  .get("/get-categories", getCategories);
export default categoryRoutes;
