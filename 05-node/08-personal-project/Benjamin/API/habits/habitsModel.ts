import { Schema, model } from 'mongoose';

// DB models
export const HabitSchema = new Schema({
    name: String,
    categorie: String,
    time: String,
    status:String,
    email: String,
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
      }
});

export const HabitModelDB = model("habits", HabitSchema);

export const doneHabitsShema = new Schema({
    name: String,
    categorie: String,
    email:String,
    timeDone: {
        type: Date,
    immutable: true,
    default: () => Date.now(),
    }
})

export const DoneHabitModelDB = model("DoneHabits", doneHabitsShema);
