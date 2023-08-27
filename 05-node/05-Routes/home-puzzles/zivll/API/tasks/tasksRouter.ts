import express from "express";
import {
  addTasks,
  deleteTasks,
  getTasks,
  updateTasks,
} from "./tasksControllers";
const routes = express.Router();

routes
  .get("/get-tasks", getTasks)
  .post("/add-tasks", addTasks)
  .delete("/delete-tasks", deleteTasks)
  .patch("/update-tasks", updateTasks);

export default routes;
