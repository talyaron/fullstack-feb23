
import {addImg } from "./imgCont";
import express from "express";

const router = express.Router();
export default router

router
.post("/add-img", addImg);