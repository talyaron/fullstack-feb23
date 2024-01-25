import express from "express";
import connection from "../../DB/database";
import bcrypt from "bcrypt";
import jwt from "jwt-simple";
import cookieParser from "cookie-parser";
const app = express();
app.use(cookieParser());

export async function getAllUsers(req: express.Request, res: express.Response) {
  try {
    const query = "SELECT * FROM users";
    connection.query(query, (err, results) => {
      try {
        if (err) throw err;
        res.send({ ok: true, results });
      } catch (error) {
        console.log(error);
        res.status(500).send({ ok: false, error });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ ok: false, error });
  }
}
const saltRounds = 10;

export async function registerUser(
  req: express.Request,
  res: express.Response
) {
  try {
    const { user_name, password } = req.body;
    if (!user_name || !password)
      throw new Error("no data in FUNCTION createUser in FILE usersCtrl.ts");
    const secret = process.env.SECRET;
    if (!secret) throw new Error("no secret");

    const hash = await bcrypt.hash(password, saltRounds);
    const query = `INSERT INTO users (user_name, password) VALUES ('${user_name}', '${hash}');`;

    connection.query(query, (err, resultsAdd) => {
      try {
        if (err) throw err;
        //@ts-ignore
        if (resultsAdd.affectedRows) {
          //@ts-ignore
          const queryUser = `SELECT * FROM users WHERE user_id = ${resultsAdd.insertId}`;
          connection.query(queryUser, (err2, results) => {
            if (err2) throw err2;
            //@ts-ignore
            const cookie = { user_id: resultsAdd.insertId };
            const token = jwt.encode(cookie, secret);

            res.cookie("user", token, {
              httpOnly: false,
              maxAge: 1000 * 60 * 60,
            });
            res.send({ ok: true, results });
          });
        }
      } catch (error) {
        res.status(500).send({ ok: false, error });
      }
    });
  } catch (error) {
    res.status(500).send({ ok: false, error });
  }
}
export async function userByCookie(req, res) {
  try {
    const { user } = req.cookies;
    console.log(user);
    if (!user || user == undefined) {
      res.status(401).send({ ok: false, msg: "no cookie" });
    }

    const secret = process.env.SECRET;
    if (!secret) throw new Error("no secret");
    const decodedId = jwt.decode(user, secret);
    const userID = decodedId.user_id;
    if (!userID) throw new Error("Could not decode userID");

    const query = `SELECT * FROM users WHERE user_id = ${userID}`;

    connection.query(query, (err, results) => {
      try {
        if (err) throw err;

        res.send({ ok: true, results: results[0] });
      } catch (error) {
        res.status(500).send({ ok: false, error });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ ok: false, error });
  }
}
