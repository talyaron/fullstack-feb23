
import { Schema, model } from 'mongoose';


export const PostSchema = new Schema({
  content: String,
  featuredImage: String,
  category: String,
  isAdmin: {
    type: Boolean,
    default: false
  },
});

export const PostModel = model("Posts", PostSchema);

