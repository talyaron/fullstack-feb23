import { users } from "../users/userModel";
import { Post, UserPost, posts, userPosts } from "./postsModel";

export function getPosts(req: any, res: any) {
  try {
    res.send({ posts });
  } catch (error) {
    console.error(error);
  }
}

export function addPost(req: any, res: any) {
    try {
      const { content, featuredImage, category, email } =
        req.body;
  
      if (!content || !featuredImage  || !category)
        throw new Error("Please complete all fields");
      if (!email) throw new Error("no email");
  
      const newPost = new Post({
         content,
featuredImage,
 category,

      });
      posts.push(newPost);
  
      //find user
      const user = users.find((user: any) => user.email === email);
      if (!user) throw new Error("user not found");
      userPosts.push(new UserPost(user, newPost));
  
      const _userPosts = userPosts.filter(
        (UserPost) => UserPost.user.email === email
      );
  
      const _posts = _userPosts.map((UserPost) => UserPost.post); //returns only tasks of user
  
      res.send({ posts: _posts });
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }
  
export function getUserPosts(req: any, res: any) {
  try {
    //get email from query
    const { email } = req.query;
    if (!email) {
      throw new Error("email is required");
    }
  
    const _userPosts = userPosts.filter(
      (userPost) => userPost.user.email === email
    );
    const _posts = _userPosts.map((UserPosts) => UserPosts.post); 

    res.send({ posts: _posts });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}
