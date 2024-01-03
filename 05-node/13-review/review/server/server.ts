
import express from 'express';
// import dotenv from "dotenv"
// dotenv.config()
require("dotenv").config()

const app = express()

const PORT = process.env.PORT || 4000

app.use(express.json())

// app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})