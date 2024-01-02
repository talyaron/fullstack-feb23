import express from "express"

const cookieParser = reqire("cookie-parser")
const saltRouter = 10

require("dotenv").config()

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cookieParser())
app.use(express.static("client"))  //define use all static file from client folder

import userRoutes from "./API/users/usersRoutes"
app.use("/api/users", userRoutes)

app.get("/api/check", (req, res) => {
    try {
        console.log("test")
        res.send({ ok: true, massage: "hello" })
    } catch (error) {
        console.error(error)
        res.send({ ok: false, error: error.message })
    }
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})