import express from "express";
import { addItem ,getItems} from "./itemCont";
const router = express.Router();

router.post("/addItem", addItem)
      .get("/getItems", getItems)


export default router;