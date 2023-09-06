import { Schema, model } from 'mongoose';

// enum Categorie{
//     health,
//     focus,
//     learn,
//     fun
// }
// enum Time{
//     morning,
//     afternoon,
//     evening
// }


export const HabitSchema = new Schema({
    name: String,
    categorie: String,
    time: String,
    status:String
});

export const HabitModelDB = model("habits", HabitSchema);
