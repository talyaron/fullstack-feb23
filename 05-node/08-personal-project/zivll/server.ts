import express from "express";
import mongoose from "mongoose";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://zivll1991:Zcl101212@cluster0.3hjadje.mongodb.net/test"
  )
  .then(() => console.info("mongoose is Connected"))
  .catch((err) => console.error(err));

app.listen(port, () => console.log(`app is listening on port ${port}`));
