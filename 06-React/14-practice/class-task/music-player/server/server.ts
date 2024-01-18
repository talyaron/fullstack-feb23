import express from "express";
import usersRoutes from "./API/users/usersRoutes";
import songsRoutes from "./API/songs/songsRoutes";
require("dotenv").config();
const app = express();
const port = process.env.PORT;

app.use(cookieParser());
app.use(express.json());
app.use("/API/users", usersRoutes);
app.use("/API/songs", songsRoutes);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
