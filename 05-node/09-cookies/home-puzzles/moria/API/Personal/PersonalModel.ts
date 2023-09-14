import { Schema, model } from 'mongoose';

// export class Personal {
//     id: string;
//     constructor(public doctor: string, public date: string, public field: string, public hour?: string) {
//         this.id = Math.random().toString()
//     }
// }




export const PersonalSchema = new Schema({
    doctor: String,
    date: String,
    field: String,

});

export const PersonalModel = model("appointments", PersonalSchema);
