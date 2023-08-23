import { User } from "./userModel";

let users: User[] = [
    new User({name:"test", phoneNum:"052-5381648", imgUrl:"bla"})
];

//add user controler
export const addUser = (req: any, res: any) => {
    const user: User = req.body;
    console.log(user);
    //add to users array
    users.push(new User(user)); // --> add to Database
    console.log(users);
    res.send({ user });
}

//get users
export const getUsers = (req, res) => {
    try {
        res.send({ users });
    } catch (error) {
        console.error(error);
    }
}

export const deleteUser = (req, res) => {
    try {
        const { id } = req.body;
        console.log(id);
        if (!id) throw new Error("there is no id");
        
        users = users.filter((user) => user.id !== id); //delete from the array
        res.send({ users });
    } catch (error) {
        console.error(error);
        res.send({ error });
    }
}

export const updateUser = (req: any, res: any) => {
    try {
        const { phoneNum, id } = req.body;
        console.log(req.body);
        if (!phoneNum || !id) throw new Error("Please complete all fields");
        const user = users.find((user) => user.id === id);

        if (!user) throw new Error("user not found");
        user.phoneNum = phoneNum;
        res.send({ users });
    } catch (error) {
        console.error(error);
        res.send({ error });
    }
}