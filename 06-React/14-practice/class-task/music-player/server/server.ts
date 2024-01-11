import express from "express";
import connection from "./DB/database";
// import song from "../client/src/music/Lazarus.mp3";
require("dotenv").config();
const app = express();
// import connection from "./DB/database";
const port = process.env.PORT;

app.use(express.static("client"));
app.use(express.json());
app.get("/api/get-song/:id", (req, res) => {
  const song_id = req.params.id;
  const query = `SELECT * FROM \`multi musix\`.\`songs\` WHERE song_id = ${song_id} `;
  connection.query(query, (err, results) => {
    try {
      if (err) throw err;
      res.send({ results, ok: true });
    } catch (error) {
      console.log(error);
      res.send({ ok: false, error: error.message });
    }
  });
});
app.post("/api/add-song", (req, res) => {
  const { title, artist, img_src, src } = req.body;
  console.log(title, artist, img_src);
  const query = `INSERT INTO \`multi musix\`.\`songs\` (\`title\`, \`artist\`, \`img_src\`, \`src\`) VALUES ('${title}', '${artist}', '${img_src}', '${src}');`;

  connection.query(query, (err, results) => {
    try {
      if (err) throw err;
      res.send({ results, ok: true });
    } catch (error) {
      console.log(error);
      res.send({ ok: false, error: error.message });
    }
  });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
