import { UserModel } from "../users/userModel";
import {  PostModel,   } from "./postsModel";

export async function getPosts(req: any, res: any) {
    try {
        const { email: email, _id: _id } = req.query; // Extract the email query parameter
        console.log(email, _id);
        let user;
        if (_id) {
            user = await UserModel.findOne({ _id: _id });
            console.log(`User id found  ${_id} : ${user}`);
        }
        else if (!email) {
            user = await UserModel.find({});
        }
        // Fetch the physician with the specified email from the database using PhysicianModel
        else {
          user = await UserModel.findOne({ email: email });
        }
        if (!user) {
            return res.status(404).send({ error: 'user not found.' });
        }

        // Send the fetched physician data as a JSON response
        res.send({ user });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}




export async function addPost(req: any, res: any) {
    try {
        const { content, featuredImage, category, isAdmin } = req.body;
        if (!content || !featuredImage  || !category) throw new Error("Please complete all fields");
        const post = new PostModel({ content, featuredImage, category, isAdmin });
        const postDB = await post.save();
        console.log(postDB);
        res.send({ ok: true });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export async function deletePost(req: any, res: any) {
    try {
        const { id } = req.body;
        const postDB = await PostModel.findByIdAndDelete(id);
        res.send({ ok: true });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export async function updatePost(req: any, res: any) {
    try {
        debugger;
        const { id, content, featuredImage, category, isAdmin } = req.body;
        if (!id) throw new Error("id is required");
        const postDB = await PostModel.findByIdAndUpdate(id, { content, featuredImage, category, isAdmin })
        await postDB.save();
        res.status(200).send({ message: "post updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}








// import { users , UserModel, } from "../users/userModel";




// export async function getPosts(req: any, res: any) {
//   try {
//       const postsDB = await PostModel.find({});
//       res.send({ ok:true, posts: postsDB });
//   } catch (error) {
//       console.error(error);
//   }
// }

// export async function addPost(req: any, res: any) {
//   try {
//     const { content, featuredImage, category,email } = req.body;
     
//     if (!content || !featuredImage  || !category)
//     throw new Error("Please complete all fields");
//   if (!email) throw new Error("no email");
//   // const user = await UserModel.findOne({ email: email });
//   const post = new PostModel({content, featuredImage, category});
//       const postDB = await post.save();
//       console.log( "Posts111:",postDB);
//       // const postsDB = await PostModel.find({email})
//       res.send({ posts: postDB });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send({ error: error.message });
//     }

// }



     
  
    
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


