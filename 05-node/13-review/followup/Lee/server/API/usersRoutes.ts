import express from "express";
import { getAllUsers } from "./usersCont";

const router = express.Router();

router.get("", getAllUsers);
//   .post("", () => {})
//   .put("/:id", () => {})
//   .patch("/:id", () => {})
//   .delete("/:id", () => {});

export default router;
