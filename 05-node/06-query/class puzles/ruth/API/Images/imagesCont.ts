import { log } from "console";
import { User, users } from "../Users/usersModel";
import { UserImg, userImgs } from "./imagesModel";

export const addImgToUser = (req, res) => {
  try {
    const { userName, newImg } = req.body;
    log(users);
    const user = users.find((user) => user.email === userName);
    const newUserImg = new UserImg(user, newImg);
    userImgs.push(newUserImg);
    log(userImgs);
    res.send(newUserImg);
  } catch (error) {
    console.error(error.message);
  }
};

export const getImgsByEmail = (req, res) => {
  try {
    const { email } = req.query;
    if (!email) throw new Error("email is not received");
    const thisUserImgs = userImgs.filter((img) => {
      img.user.email === email;
    });
    if(!thisUserImgs) throw new Error("not fount imgs to this user");
    res.send({ thisUserImgs });
    log(`user:${email} images send to client`);
  } catch (error) {
    console.error(error.message);
  }
};
