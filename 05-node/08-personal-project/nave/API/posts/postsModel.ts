import { User } from "../users/userModel";

export class Image {
  imgUrl: string;
 
  constructor({ imgUrl }: { imgUrl: string;  }) {
    this.imgUrl = imgUrl;
    
  }
}

export class Post {
  content: string;
  featuredImage: Image; 
  postThumbnails: Image[]; 
  category: string;

  constructor({
    content,
    featuredImage,
    postThumbnails,
    category,
  }: {
    content: string;
    featuredImage: Image;
    postThumbnails: Image[];
    category: string;
  }) {
    this.content = content;
    this.featuredImage = featuredImage;
    this.postThumbnails = postThumbnails;
    this.category = category;
  }
}

export const posts: Post[] = [];

export class UserPost {
  constructor(public user: User, public post: Post) {}
}

export const userPosts: UserPost[] = [];
