import express from "express";
const app = express();
const port = process.env.PORT || 3000;


//static files
app.use(express.static("public"));

//body
app.use(express.json());

//router to users
// get router from usersRouter
import usersRouters from "./API/users/usersRouters"
//tells express to use proudctsRouter on the intial route "/API/users"
app.use("/API/users", usersRouters);

// get router from tasksRouter
import tasksRouters from "./API/tasks/tasksRouters"
//tells express to use proudctsRouter on the intial route "/API/users"
app.use("/API/tasks", tasksRouters);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
