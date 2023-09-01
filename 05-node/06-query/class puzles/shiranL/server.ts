import express from "express";
const app = express();
const port = process.env.PORT || 3000;


//static files
app.use(express.static("public"));

//body
app.use(express.json());

// get router from usersRouter
import userRouters from "./API/user/userRoutes"
//tells express to use proudctsRouter on the intial route "/API/users"
app.use("/API/user", userRouters);

// get router from image
import imgRouters from "./API/images/imgRoutes"
//tells express to use proudctsRouter on the intial route "/API/users"
app.use("/API/images", imgRouters);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
