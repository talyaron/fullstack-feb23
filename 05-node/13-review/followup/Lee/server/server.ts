import express from "express";

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());

import usersRoutes from "./API/usersRoutes";
import connection from "./DB/database";
app.use("/api/v1/users", usersRoutes);

app.post("/api/create-database", async (req, res) => {
  try {
    const { adminPassword } = req.body;
    if (!adminPassword) throw new Error("no password");
    if (adminPassword === "romy2323") {
      const query = "CREATE DATABASE users";
      connection.query(query, (err, results) => {
        try {
          if (err) throw err;
          res.send({ ok: true, message: "DB was created!" });
        } catch (error) {
          res.status(500).send({ ok: false, error });
        }
      });
    }
  } catch (error) {
    res.status(500).send({ ok: false, error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
