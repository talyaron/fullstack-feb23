import express from "express";
const app = express();
const port = 3200

app.use(express.static("public"))

app.listen(3200, () => {
    console.log(`Listen on the port ${port}`);
});

