import express from "express";
const app = express();
const port = process.env.PORT || 4000;


app.use(express.static("public"));
app.use(express.json());



import tasksRouter from "./API/Tasks/tasksRouter"
app.use("/API/Tasks", tasksRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
