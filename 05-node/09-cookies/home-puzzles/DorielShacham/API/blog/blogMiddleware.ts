import BlogModel from "./blogModel"

export async function getUserBlog(req: any, res: any, next: Function) {
  try {
    const blogId = req.cookies.blog;

    const blogDB = await BlogModel.findById(blogId);

    if (!blogDB) {
      req.blog = null;
    } else {
      req.blog = blogDB;
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}

// export async function isAdmin(req: any, res: any, next: Function) {
//   try {
//     //get the user from the cookie
//     // const blogId = req.cookies.user;
//     // if (!blogId) throw new Error("User not found on cookie");

//     // //get the user from the database
//     // const physician = await UserModel.findById(blogId);
//     // if (!physician) throw new Error("User not found on database");
//     const user = req.user;
//     //check if the user is admin (from Database)
//     if (user.isAdmin) {
//       next(); // continue to the next controller
//     } else {
//       res.status(401).send({ error: "Unauthorized" });
//     }

//     // if user is not adnin throw error of unauthorized (401)
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// }
