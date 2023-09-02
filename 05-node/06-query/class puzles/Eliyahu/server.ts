import express from "express";
const app = express();
const port = process.env.PORT || 3001;


app.use(express.static('public'));
app.use(express.json());


import picturesRouter from './API/pictures/picturesRouter'
import userRouter from './API/users/userRouter'
app.use('/API/pictures', picturesRouter)
app.use('/API/users', userRouter)



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  