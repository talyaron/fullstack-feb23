import express from "express";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());
import imageRoutes from "./API/images/router";
app.use("/API/images", imageRoutes);
import userRoutes from "./API/users/router";
app.use("/API/users", userRoutes);
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
