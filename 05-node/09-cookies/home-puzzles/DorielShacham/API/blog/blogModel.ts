// models/blogModel.ts
import { Schema, model } from 'mongoose';

const blogSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please enter a blog title"]
    },
    description: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const BlogModel = model("Blog", blogSchema);

export default BlogModel;
