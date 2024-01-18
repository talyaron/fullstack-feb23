// import express from "express";
// import connection from "./DB/database";
// import usersRoutes from "./API/users/usersRoutes";
// import songsRoutes from "./API/songs/songsRoutes";

// // import song from "../client/src/music/Lazarus.mp3";
// require("dotenv").config();
// const app = express();
// const port = process.env.PORT;

// app.use(express.static("client"));
// app.use(express.json());

// app.use("/API/users", usersRoutes);
// app.use("/API/songs", songsRoutes);
// app.post("/API/create-database", async (req, res) => {
//   try {
//       const { adminPassword } = req.body;
//       if (!adminPassword) throw new Error("no password")
//       if (adminPassword === "123456") {
//           const query = "CREATE DATABASE library"
//           connection.query(query, (err, results) => {
//               try {
//                   if (err) throw err;
//                   res.send({ ok: true, message: "DB was created!" })
//               } catch (error) {
//                   res.status(500).send({ ok: false, error })
//               }
//           })
//       }
//   } catch (error) {
//       res.status(500).send({ ok: false, error })
//   }
// })

// app.listen(port, () => {
// console.log(`server is running on port ${port}`);
// });

import express from "express";
import connection from "./DB/database";
import usersRoutes from "./API/users/usersRoutes";
import songsRoutes from "./API/songs/songsRoutes";
// import song from "../client/src/music/Lazarus.mp3";
require("dotenv").config();
const app = express();
// import connection from "./DB/database";
const port = process.env.PORT;

app.use(express.static("client"));
app.use(express.json());
app.use("/API/users", usersRoutes);
app.use("/API/songs", songsRoutes);

// app.get("/api/get-song/:id", (req, res) => {
//   const song_id = req.params.id;
//   const query = `SELECT * FROM \`multi musix\`.\`songs\` WHERE song_id = ${song_id} `;
//   connection.query(query, (err, results) => {
//     try {
//       if (err) throw err;
//       res.send({ results, ok: true });
//     } catch (error) {
//       console.log(error);
//       res.send({ ok: false, error: error.message });
//     }
//   });
// });
// app.post("/api/add-song", (req, res) => {
//   const { title, artist, img_src, src } = req.body;
//   console.log(title, artist, img_src);
//   const query = `INSERT INTO \`multi musix\`.\`songs\` (\`title\`, \`artist\`, \`img_src\`, \`src\`) VALUES ('${title}', '${artist}', '${img_src}', '${src}');`;

//   connection.query(query, (err, results) => {
//     try {
//       if (err) throw err;
//       res.send({ results, ok: true });
//     } catch (error) {
//       console.log(error);
//       res.send({ ok: false, error: error.message });
//     }
//   });
// });

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
