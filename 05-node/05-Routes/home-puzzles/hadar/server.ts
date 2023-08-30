import express from "express";
const app = express();
const port = process.env.PORT || 3002;

app.use(express.static('public'));
app.use(express.json());

import router from "./API/router";
app.use('/API', router)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});