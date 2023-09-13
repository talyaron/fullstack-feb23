import { User } from "../users/userModel";
import { Schema, model } from 'mongoose';



export class Post {
  content: string;
  featuredImage: string; 
  category: string;

  constructor({
    content,
    featuredImage,
    category,
  }: {
    content: string;
    featuredImage: string;
    category: string;
  }) {
    this.content = content;
    this.featuredImage = featuredImage;
    this.category = category;
  }
}
export class UserPosts{
  id:string
  constructor(public user:User,public post:Post){
      this.id = Math.random().toString(36).substr(2, 9);
  }
}   

export const userPosts:UserPosts[] = [];

export const posts: Post[] = [];
export const PostSchema = new Schema({
  content: String,
  featuredImage: String,
  category: String,

});
export const PostModel = model("posts", PostSchema)

export class UserPost {
  constructor(public user: User, public post: Post) {}
}


