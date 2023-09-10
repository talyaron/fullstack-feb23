import express from "express";
const app = express();
const port = process.env.PORT || 3000;



//static files
app.use(express.static("public"));

//body
app.use(express.json());

//router to products

import imagesRoutes from "./API/images/imagesRoutes";
app.use("/API/images", imagesRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
