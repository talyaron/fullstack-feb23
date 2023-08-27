import { User } from "./usersModel";

let users: User[] = [new User("shiran", "123456")];

//add user controler    
export const addUser = (req: any, res: any) => {
    try {
        const user = req.body;
        console.log(user);
        //add to users array
        users.push(new User(user.userName, user.password)); // --> add to Database
        console.log(users);
        res.send({ users });
    } catch (error) {
        console.error(error);
    }
}
//get all users controler
export const getAllUsers = (req: any, res: any) => {
    try {
        res.send({ users });
    } catch (error) {
        console.error(error);
    }
}   

export const logIn = (req: any, res: any) => {
    try {
        const user = req.body;
        const userFound = users.find((u: User) => u.userName === user.userName && u.password === user.password);
        if (userFound) {
            res.send({ success: true, message: "user found" });
        } else {
            res.send({ success: false, message: "user not found" });
        }
    } catch (error) {
        console.error(error);
    }
}
