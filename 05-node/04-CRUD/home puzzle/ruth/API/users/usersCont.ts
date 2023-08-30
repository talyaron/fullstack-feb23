import { log } from "console";
import { Task } from "../tasks/taskModel";
import { UserTasks, User } from "./usersModel";

const usersTasks: UserTasks[] = [];

export const login = (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("Please complete all fields");

    const userTasks = usersTasks.find(
      (userTasks) =>
        userTasks.user.email === email && userTasks.user.password === password,
    );

    if (!userTasks) throw new Error("Some of the details are incorrect");

    res.send({ success: true, email: userTasks.user.email });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};

export const addUser = (req, res) => {
  try {
    console.log("email, password");//+
    const { email, password } = req.body;
    console.log(email, password);//+
    console.log(usersTasks);
    
    
    if (!email || !password) {
      res.send({
        usersTasks,
        success: false,
        message: "user name and password are required",
      });
      return;
    }
    const userTasks = usersTasks.find(
      (userTasks) => userTasks.user.email === email,
    );

    if (userTasks) {
      res.send({
        usersTasks,
        success: false,
        message: "user name is already exist",
      });
      return;
    }
    usersTasks.push(new UserTasks(new User(email, password)));
    res.send({ usersTasks, success: true, message: "user added" });
  } catch (error) {}
};
