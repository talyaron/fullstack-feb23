import express from "express";


const app = express();
const port = process.env.PORT || 3001;

//static files
app.use(express.static("public"));
app.use(express.json());

import taskRouter from "./API/tasks/taskRout";

app.use("/API", taskRouter);

app.listen(port, () => {
  console.log(`app run at port ${port}`);
});
