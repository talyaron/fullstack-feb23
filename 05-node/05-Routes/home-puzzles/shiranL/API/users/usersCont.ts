import { User ,users} from "./usersModel";



//add user controler    
export const addUser = (req: any, res: any) => {
    try {
        const user = req.body;
      if (!user.userName || !user.password) {
            res.send({ users,success: false, message: "user name and password are required" });
            return;
        }
        //add to users array
        users.push(new User(user.userName, user.password)); // --> add to Database
        res.send({ users, success: true, message: "user added" });
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
            userFound.isLogIn = true;   // --> update Database
            res.send({ success: true, message: "user found" });
        } else {
            res.send({ success: false, message: "user not found" });
        }
    } catch (error) {
        console.error(error);
    }
}

export const getUserLogIn = (req: any, res: any) => {
    try {
        
        const userFound = users.find((u: User) => u.isLogIn === true);
        if (userFound) {
            res.send({ success: true, message: "user found", user: userFound });
        } else {
            res.send({ success: false, message: "user not found" });
        }
    } catch (error) {
        console.error(error);
    }
}
