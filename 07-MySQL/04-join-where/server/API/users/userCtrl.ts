
import bcrypt from 'bcrypt';
import connection from '../../DB/database';
import jwt from 'jwt-simple';


const saltRounds = 10;

export async function registerUser(req, res) {
    try {
        const {email, password} = req.body;
        if (!email || !password) throw new Error("no data");

        const secret = process.env.SECRET
        if (!secret) throw new Error("no secret")

        const hash = await bcrypt.hash(password, saltRounds)

        const query = `INSERT INTO users (email, password) VALUES ('${email}', '${hash}');`;

        connection.query(query, (err, resultsAdd) => {
            try {
              if (err) throw err;
                //@ts-ignore
              if (resultsAdd.affectedRows) { //@ts-ignore
                const queryUser = `SELECT * FROM users WHERE user_id = ${resultsAdd.insertId}`
                connection.query(queryUser, (err2, results) => {
                    if (err2) throw err2;
                    //@ts-ignore
                    const cookie = {userID: resultsAdd.insertId}
                    const token = jwt.encode(cookie, secret)

                    res.cookie("user", token, {httpOnly: true, maxAge: 1000 * 60 * 60})
                    res.send({ok: true, results})
                })
              }
             
            } catch (error) {
                res.status(500).send({ok: false, error})
            }
        })
    } catch (error) {
        res.status(500).send({ok: false, error})
    }
}

export async function getUserByCookie(req, res) {
    try {
        const {user} = req.cookies;

        const secret = process.env.SECRET
        if (!secret) throw new Error("no secret")
        // if ()
        const decodedId = jwt.decode(user, secret)
        const {userID} = decodedId;
        // if ()

        const query = `SELECT * FROM users WHERE user_id = ${userID}`;

        connection.query(query, (err, results) => {
            try {
                if (err) throw err;

                res.send({ok: true, results: results[0]})
            } catch (error) {
                res.status(500).send({ok: false, error})
            }
        })
        
    } catch (error) {
        res.status(500).send({ok: false, error})
    }
}