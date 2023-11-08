import express from "express";
import mongoose from "mongoose";
import { userLogedIn } from "./API/users/usersCont";
import cookieParser from "cookie-parser";
const app = express();
app.use(cookieParser());
// app.use(userLogedIn);
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://zivll1991:Zcl101212@cluster0.3hjadje.mongodb.net/test"
  )
  .then(() => console.info("mongoose is Connected"))
  .catch((err) => console.error(err));
import userRoutes from "./API/users/usersRouter";
app.use("/API/users", userRoutes);
import expensesRoutes from "./API/expense/expenseRouter";
app.use("/API/expense", expensesRoutes);
import categoryRoutes from "./API/category/categoryRouter";
app.use("/API/category", categoryRoutes);
app.listen(port, () => console.log(`app is listening on port ${port}`));
