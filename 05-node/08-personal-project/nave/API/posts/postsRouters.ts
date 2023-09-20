import express from 'express'
import { getPosts,addPost, getUserPosts,deletePost,updatePost } from './postsCont';
const router = express.Router();

router.get('/get-posts', getPosts)
      .post("/add-post", addPost)
      .delete('/delete-post', deletePost)
    .patch('/update-post', updatePost)
      .get("/get-users-post", getUserPosts);



export default router;
