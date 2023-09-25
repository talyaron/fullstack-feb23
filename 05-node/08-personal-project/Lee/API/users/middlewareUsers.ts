const {SECRET} = process.env
const secret = SECRET
import {UserModel} from "../users/userModel"

const jwt = require('jwt-simple');

export function isAdmin(req, res, next) {
    try {
      const token = req.cookies.user;
      if (!token) throw new Error("no token");
      const cookie = jwt.decode(token, secret);
      const { uid } = cookie;
  
      UserModel.findById(uid, (err, user) => {
        if (err || !user || !user.isAdmin) {
          throw new Error("User is not an admin");
        }
        req.user = user;
        next();
      });
    } catch (error) {
      res.status(401).send({ error: error.message });
    }
}