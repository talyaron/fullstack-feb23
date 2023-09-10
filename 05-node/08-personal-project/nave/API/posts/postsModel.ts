import { User } from "../users/userModel";



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

export class UserPost {
  constructor(public user: User, public post: Post) {}
}

export const userPosts: UserPost[] = [];
