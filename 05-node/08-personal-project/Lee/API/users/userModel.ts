import { Schema, model } from 'mongoose';

export enum Gender {
  male = "Male",
  female = "Female", 
  other = "Other"
}

export class User {
  userName: string;
  gender: string;
  email: string | null;
  password: string | null;
  _id: string | null;

  constructor({ userName, gender, email, password }: { userName: string, gender: string, email: string, password: string }) {
    this.userName = userName;
    this.gender = gender;
    if(email) this.email = email;
    if(password) this.password = password;
  }

  updateGender(newGender: Gender) {
    this.gender = newGender;
  }
}



export const UserSchema = new Schema({
  userName: String, // String is shorthand for {type: String}
  gender: String,
  email: String,
  password: String,
  familyMembers: [{ type: Schema.Types.ObjectId, ref: 'User' }], // Reference to other users in the family
});

export const UserModel = model("users", UserSchema)

export const users: User[] = [];