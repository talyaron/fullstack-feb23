import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(express.json());

import userRouter from "./API/Users/usersRoutes";
app.use("/API/users", userRouter);

import imageRouter from "./API/Images/imagesRoutes";
app.use("/API/img", imageRouter);

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});
