import express from "express";
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static("public"));
app.use(express.json());



import tasksRouter from "./API/Tasks/tasksRouter"
app.use("/API/Tasks", tasksRouter)

import userRouter from "./API/Users/usersRouter"
app.use("/API/Users", userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
