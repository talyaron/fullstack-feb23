import express from "express";
import { getUserFromCookie, login, register } from "./usersCont";

const router = express.Router();

router
  .get("/get-user-from-cookie", getUserFromCookie)
  .post("/login", login)
  .post("/register", register);

export default router;
