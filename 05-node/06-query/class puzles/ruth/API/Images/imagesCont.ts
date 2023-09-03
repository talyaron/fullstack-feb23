import { log } from "console";
import { User, users } from "../Users/usersModel";
import { UserImg, userImgs } from "./imagesModel";

export const addImgToUser = (req, res) => {
  try {
    const { userName, newImg } = req.body;
    const user = users.find((user) => user.email === userName);
    const newUserImg = new UserImg(user, newImg);
    userImgs.push(newUserImg);
    log(userImgs.map((img) => img.image.title));
    res.send(newUserImg);
  } catch (error) {
    console.error(error.message);
  }
};

export const getImgsByEmail = (req, res) => {
  try {
    const { email } = req.query;
    if (!email) throw new Error("email is not received");
    log(email);
    if (email === "manager@manager.com") {
      log(`!---- manager is in  the app ----!`);
      const thisUserImgs = userImgs;
      res.send({ thisUserImgs });
      return;
    }
    const thisUserImgs = userImgs.filter((img) => {
      return img.user.email === email;
    });
    if (!thisUserImgs || thisUserImgs.length == 0)
      throw new Error("not found imgs to this user");
    res.send({ thisUserImgs });
    log(`user:${email} images send to client`);
  } catch (error) {
    console.error(error.message);
  }
};
