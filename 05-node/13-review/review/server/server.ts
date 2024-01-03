require("dotenv").config()
import connection from './DB/database';
import express from 'express';
// import dotenv from "dotenv"
// dotenv.config()


const app = express()

const PORT = process.env.PORT || 4000

app.use(express.json())

// app.use(express.static('public'))
import booksRoutes from "./API/books/booksRoutes"
app.use("/api/v1/books", booksRoutes)

app.post("/api/create-database", async (req, res) => {
    try {
        const { adminPassword } = req.body;
        if (!adminPassword) throw new Error("no password")
        if (adminPassword === "123456") {
            const query = "CREATE DATABASE library"
            connection.query(query, (err, results) => {
                try {
                    if (err) throw err;
                    res.send({ ok: true, message: "DB was created!" })
                } catch (error) {
                    res.status(500).send({ ok: false, error })
                }
            })
        }
    } catch (error) {
        res.status(500).send({ ok: false, error })
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})