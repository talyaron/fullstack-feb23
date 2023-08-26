//usersCont.ts  

import { User, users } from "./usersModel"

export const getUsers = (req, res) => {
    try {
        res.send({ users })
    } catch (error) {
        console.error(error.massage)
    }
}

export const addUser = (req, res) => {
    try {
        const user: User = req.body;
        users.push(new User(user.userName, user.password))  
        res.send({ users })
    } catch (error) {
        console.error(error.massage)

    }
}