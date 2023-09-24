import express from "express";
import { createOrder } from "./orderCont";
const router = express.Router();

router.post("/createOrder", createOrder)
// router.post("/API/orders/createOrder", createOrder);

export default router;