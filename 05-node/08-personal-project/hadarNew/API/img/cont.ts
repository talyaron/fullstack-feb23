//Taking the model from the model file

import {Exercise} from "./model";
let exercises: Exercise[] = [];

export const getExercises = (req,res) =>{
    try {
        res.send({exercises})
    } catch (error) {
        console.error(error.message);
    }
}

export const addExercise = (req, res) =>{
    try {
        const exercise: Exercise = req.body;
        exercises.push(new Exercise(exercise))
        res.send({exercises})

    } catch (error) {
        console.error(error.message);
    }
}

export const deleteExercise = (req, res) =>{
    try {
        const {id} = req.body;
        exercises= exercises.filter((exercise) =>exercise.id !== id);
        res.send({exercises})
    } catch (error) {
        console.error(error.message);
    }
}

export const updatEexercise= (req, res) =>{
    try {
        const {exercise,sets,repetitions,weight,timer,id} = req.body;
        console.log(req.body);
        if (!exercise || !sets || !repetitions || !weight || !timer || !id) throw new Error("Please complete all fields");
        const _exercise = exercises.find((exercise) => exercise.id === id);

        if (!_exercise) throw new Error("exercise not found");
        _exercise.exercise = exercise;
        _exercise.sets = sets;
        _exercise.repetitions = repetitions;
        _exercise.weight = weight;
        _exercise.timer = timer;
        res.send({ exercises });
    } catch (error) {
        console.error(error);
        res.send({ error });
    }
    

}