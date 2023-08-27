import express from "express";
const app = express();
const port = process.env.PORT || 3000;

// static files
app.use(express.static("public"));
// body
app.use(express.json());
// CRUD
import tasksRouter from "./API/tasks/tasksRouter";
app.use("/API/tasks", tasksRouter);
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
