import {Schema, model} from 'mongoose';

export class Exercise{
    exercise: string;
    sets?: number;
    repetitions?: number;
    weight?: number;
    timer?: number;
    id?: string;
    constructor({ exercise, sets, repetitions, weight, timer }: { exercise: string; sets?: number; repetitions?: number; weight?: number; timer?: number; }) {
        this.exercise = exercise;
        this.sets = sets;
        this.repetitions = repetitions;
        this.weight = weight;
        this.timer = timer;
        this.id = Math.random().toString();
    }
    
}

//Schema
export const ExerciseSchema= new Schema({
    exercise: String,
    sets: Number,
    repetitions: Number,
    weight: Number,
    timer: Number
})

//Model
export const ExerciseModel= model("exersices",ExerciseSchema)
