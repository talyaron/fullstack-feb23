
import express from 'express';
import connection from '../../DB/database';

export async function getAllUsers(req: express.Request, res: express.Response) {
    try {
        const query = "SELECT * FROM users"
        connection.query(query, (err, results) => {
            try {
                if (err) throw err;
                res.send({ ok: true, results })
            } catch (error) {
                console.log(error)
                res.status(500).send({ ok: false, error })
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({ ok: false, error })
    }
}

export async function createUser(req: express.Request, res: express.Response) {
    try {
        const { username, password } = req.body
        if (!username || !password) throw new Error("no data in FUNCTION createUser in FILE usersCtrl.ts")

        const query = `INSERT INTO users (user_name, password) VALUES ("${username}", '${password}');`;
        connection.query(query, (err, results) => {
            try {
                if (err) throw err;
                res.send({ ok: true, results })
                // query2 = SELECT * FROM users WHERE user_id = results.insertedId
            } catch (error) {
                res.status(500).send({ ok: false, error })
            }
        })
    } catch (error) {
        res.status(500).send({ ok: false, error })
    }
}
