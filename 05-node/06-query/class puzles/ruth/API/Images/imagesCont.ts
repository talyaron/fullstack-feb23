import { User,  users } from "../Users/usersModel";
import { UserImg, userImgs } from "./imagesModel";


export const addImgToUser = (req, res) => {
    try {
        const {userName, newImg} =  req.body
        const user = users.find(user => user.email === userName)
        const newUserImg = new UserImg(user, newImg)
        userImgs.push(newUserImg)

        res.send(newUserImg)
    } catch (error) {
        console.error(error.message)
    }
};
