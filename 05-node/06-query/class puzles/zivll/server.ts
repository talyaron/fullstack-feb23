import express from "express";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());
import routes from "./API/router";
app.use("/API/", routes);
app.listen(port, () => {
  console.log(`app listening on ${port}`);
});
