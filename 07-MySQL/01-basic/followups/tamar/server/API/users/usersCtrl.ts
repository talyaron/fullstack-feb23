import express from 'express'
import connection from './../../DB/sqlBD';

export const gerAllUsers = async (req: express.Request, res: express.Response) => {
    try {
        const query = "SELECT * FROM blockbaster.users;"
        connection.query(query, (err, results, fields) => {
            try {
                if (err) throw err
                console.log(results)
                res.send({ ok: true, results })
            } catch (error) {
                console.error(error)
                res.status(500).send({ ok: false, error })
            }
        })
    } catch (error) {
        console.error(error)
    }
}