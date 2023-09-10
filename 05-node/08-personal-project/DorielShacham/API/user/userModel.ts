import { Schema, model } from 'mongoose';


// export class User {
//     id : string;
//     isAdmin:boolean = false;
//     isLogIn: boolean = false;
   
//     constructor(public email:string,public password:string, id?:string) {
//         this.email = email;
//         this.password = password;
//         if (id) this.id = id;
//         else this.id = Math.random().toString();

      
//     }
// }


//define user schema
export const UserSchema = new Schema({
    email: String,
    password: String,
    isAdmin: {
        type: Boolean,
        default: false
      },
      isLoggedIn: {
        type: Boolean,
        default: false
      }
  });


  //users collection in the DB
  export const UserModel = model("users", UserSchema)