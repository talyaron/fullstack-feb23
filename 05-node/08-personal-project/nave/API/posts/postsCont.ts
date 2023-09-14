// import { users , UserModel, } from "../users/userModel";
import {  PostModel,   } from "./postsModel";



export async function getPosts(req: any, res: any) {
  try {
      const postsDB = await PostModel.find({});
      res.send({ ok:true, posts: postsDB });
  } catch (error) {
      console.error(error);
  }
}

export async function addPost(req: any, res: any) {
  try {
    const { content, featuredImage, category,email } = req.body;
     
    if (!content || !featuredImage  || !category)
    throw new Error("Please complete all fields");
  if (!email) throw new Error("no email");
  // const user = await UserModel.findOne({ email: email });
  const post = new PostModel({content, featuredImage, category});
      const postDB = await post.save();
      console.log( "Posts111:",postDB);
      // const postsDB = await PostModel.find({email})
      res.send({ posts: postDB });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }

}



     
  
    
  //     const user = users.find((user: any) => user.email === email);
  //     if (!user) throw new Error("user not found");
  //     userPosts.push(new UserPost(user, newPost));
  
  //     const _userPosts = userPosts.filter(
  //       (UserPost) => UserPost.user.email === email
  //     );
  
  //     const _posts = _userPosts.map((UserPost) => UserPost.post); //returns only tasks of user
  
  //     res.send({ ok:true });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).send({ error: error.message });
  //   }
  // }
  export async function getUserPosts(req: any, res: any) {
    try {
        //get email from query
        const { email } = req.query;
        if (!email) {
            throw new Error("email is required");
        }
        //get user tasks
        // const _userTasks = userTasks.filter((usertask) => usertask.user.email === email);
        // const _tasks = _userTasks.map((usertask) => usertask.task); //returns only tasks of user

        const postsDB = await PostModel.find({ email });
        res.send({ posts: postsDB });

    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}


