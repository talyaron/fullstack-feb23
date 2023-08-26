import { User } from "./usersModel";

export let users: User[] = [
    new User("liran", "123456", "054-1234567", "liran@sanolla.com")
];

//add user controler
export const adduser = (req: any, res: any) => {
    try {
        debugger;
        const user: User = req.body;
        console.log(user);
        //add to users array
        users.push(new User(user.userName, user.password, user.phoneNumber, user.email)); // --> add to Database
        console.log(users);
        res.send({ user });
    } catch (error) {
        console.error(error);
    }
}

//get users
export const getusers = (req, res) => {
    try {
        res.send({ users });
    } catch (error) {
        console.error(error);
    }
}

export const deleteuser = (req, res) => {
    try {
        const { id } = req.body;
        console.log(id);
        users = users.filter((user) => user.id !== id);
        res.send({ users });
    } catch (error) {
        console.error(error);
        res.send({ error });
    }
}

export const updatePassword = (req: any, res: any) => {
    try {
        const { password, id } = req.body;
        console.log(req.body);
        if (!id) throw new Error("Please complete all fields");
        console.log(users);
        const user = users.find((user) => user.id === id);
        if (!user) throw new Error("user not found");
        user.password = password;
        res.send({ users });
    } catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}

export const updateEmail = (req: any, res: any) => {
    try {
        const { email, id } = req.body;
        console.log(req.body);
        if (!id) throw new Error("Please complete all fields");
        console.log(users);
        const user = users.find((user) => user.id === id);
        if (!user) throw new Error("user not found");
        user.email = email;
        res.send({ users });
    } catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}

export const updatePhoneNumber = (req: any, res: any) => {
    try {
        const { phoneNumber, id } = req.body;
        console.log(req.body);
        if (!id) throw new Error("Please complete all fields");
        console.log(users);
        const user = users.find((user) => user.id === id);
        if (!user) throw new Error("user not found");
        user.phoneNumber = phoneNumber;
        res.send({ users });
    } catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}