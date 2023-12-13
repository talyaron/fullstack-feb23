import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();

dotenv.config();

const mongodb_uri = process.env.MONGO_URI;
const PORT = process.env.PORT;

mongoose.set("strictQuery", true);

mongoose
  .connect(mongodb_uri)
  .then((res) => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("At mongoose.connect:");
    console.error(err.message);
  });

app.use(express.json());

// this is not recommanded. for example only.
app.get("/check", async (req, res) => {
  try {
    res.send({ ok: true, message: "hello" });
  } catch (error) {
    res.send({ error });
  }
});

app.listen(PORT, () => {
  console.log(`server is active on port : ${PORT}`);
});
