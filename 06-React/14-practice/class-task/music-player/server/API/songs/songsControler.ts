import express from "express";
import connection from "../../DB/database";

export async function getSongById(req: express.Request, res: express.Response) {
  try {
    const song_id = req.params.id;
    if (!song_id) throw new Error("Song id not found");
    const query = `SELECT * FROM \`multi_musix\`.\`songs\` WHERE song_id = ${song_id} `;
    connection.query(query, (err, results) => {
      try {
        if (err) throw err;
        res.send({ ok: true, results });
      } catch (error) {
        console.log(error);
        res.send({ ok: false, error: error.message });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ ok: false, error });
  }
}

export async function getPlaylist(req: express.Request, res: express.Response) {
  try {
    const user_id = req.params.id;

    const query = `SELECT *
    FROM multi_musix.users_playlists
    RIGHT JOIN multi_musix.songs ON multi_musix.users_playlists.song_id = multi_musix.songs.song_id
    where multi_musix.users_playlists.user_id = ${user_id};`;

    // `SELECT * FROM multi_musix.users_playlists where user_id =${user_id};`;
    connection.query(query, (err, result) => {
      try {
        if (err) throw err;
        res.send({ ok: true, result });
      } catch (error) {
        console.error(error);
        res.status(500).send({ ok: false, error });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ ok: false, error });
  }
}

export async function addSong(req: express.Request, res: express.Response) {
  try {
    const { title, artist, img_src, src } = req.body;
    if (!title || !artist || !img_src || !src)
      throw new Error("no data in FUNCTION addSong in FILE songsCtrl.ts");

    const query = `INSERT INTO \`multi musix\`.\`songs\` (\`title\`, \`artist\`, \`img_src\`, \`src\`) VALUES ('${title}', '${artist}', '${img_src}', '${src}');`;
    connection.query(query, (err, results) => {
      try {
        if (err) throw err;
        res.send({ ok: true, results });
      } catch (error) {
        res.status(500).send({ ok: false, error });
      }
    });
  } catch (error) {
    res.status(500).send({ ok: false, error });
  }
}
