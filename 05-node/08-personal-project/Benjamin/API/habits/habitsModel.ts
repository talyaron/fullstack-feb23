import { Schema, model } from 'mongoose';

// DB models
export const HabitSchema = new Schema({
    name: String,
    categorie: String,
    time: String,
    status:String,
    email: String
});

export const HabitModelDB = model("habits", HabitSchema);

