import UserModel from "../users/usersModel";

export async function getUser(req, res, next) {
  try {
    const userId = req.cookies.user;
    if (!userId) throw new Error("user id not found in cookie");
    const userDB = await UserModel.findById(userId);
    if (!userDB) {
      req.user = null;
    } else {
      req.user = userDB;
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}

export async function isAdmin(req, res, next) {
  try {
    const userId = req.cookies.user;
    if (!userId) throw new Error("user id not found in cookie");

    const userDB = await UserModel.findById(userId);

    if (!userDB.isAdmin) {
      res.status(401).send("unauthorized error");
    }
    next();
    
  } catch (error) {
    console.error(error);
  }
}
