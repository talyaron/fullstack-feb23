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

export const userPosts: UserPost[] = [];
