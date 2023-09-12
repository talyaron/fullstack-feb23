import express from "express";
import { addItem } from "./itemCont";
const router = express.Router();

router.post("/addItem", addItem);


export default router;