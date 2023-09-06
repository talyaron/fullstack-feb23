import mongoose from 'mongoose';

// Define the User interface to represent a user document
export class User {
    username: string;
    email: string;
    // photos: string;
    _id:string | null;
}

// Create a Mongoose user schema
export const userSchema = new mongoose.Schema<User>({
    username: { type: String, required: true },
    email: { type: String, required: true,  unique: true    },
    // photos: [{ type: String }],
    // _id:{ type: String, required: false }
});

// Create a Mongoose model for the User
const UserModel = mongoose.model('User', userSchema);

export default UserModel;

// Initialize an array of users with instances of the User class
const users: User[] = [];

export { users };