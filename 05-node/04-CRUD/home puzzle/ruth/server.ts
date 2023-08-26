import express from "express";
const app = express();
const port = process.env.PORT || 3001;

class Task {
  id: number;

  constructor(
    public name: string,
    public time: string,
    public isDone: boolean = false,
  ) {
    this.id = Date.now();
  }
}

let tasks: Task[] = [];

//static files
app.use(express.static("public"));
app.use(express.json());

app.listen(port, () => {
  console.log(`app run at port ${port}`);
});
