import express from 'express'
import { getPosts,addPost, getUserPosts, } from './postsCont';
const router = express.Router();

router.get('/get-posts', getPosts)
      .post("/add-post", addPost)
      .get("/get-users-post", getUserPosts);



export default router;