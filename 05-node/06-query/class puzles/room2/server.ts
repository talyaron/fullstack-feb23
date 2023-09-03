import express from "express";
const app = express();
const port = process.env.PORT || 3000;



//static files
app.use(express.static("public"));

//body
app.use(express.json());

//router to products

// get router from userRouter
import userRouter from "./API/users/userRoutes";
//tells express to use userRouter on the intial route "/API/users"
app.use("/API/users", userRouter)

import imgesRouter from "./API/imges/imgesRouters";
app.use("/API/imges", imgesRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
