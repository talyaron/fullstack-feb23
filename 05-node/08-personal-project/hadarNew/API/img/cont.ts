//Taking the model from the model file

import {Exercise, ExerciseModel} from "./model";
let exercises: Exercise[] = [new Exercise({ exercise: "test", sets: 3, repetitions: 10 })];

export const getExercises = async (req,res) =>{
    try {
        const tasksDB = await ExerciseModel.find({})
        res.send({exercises: tasksDB})
    } catch (error) {
        console.error(error.message);
    }
}

export const addExercise = async (req, res) =>{
    try {
        const { exercise,sets,repetitions,weight,timer} = req.body;
        console.log({ exercise,sets,repetitions,weight,timer })

        // exercises.push(new Exercise(exercise))

        //add task using mongoose
        const _exercise= new ExerciseModel({exercise,sets,repetitions,weight,timer})
        const exerciseDB=await _exercise.save();
        console.log(exerciseDB)


        res.send({ok:true})

    } catch (error) {
        console.error(error.message);
        res.status(500).send({ error: error.message });
    }
}

export const deleteExercise = async (req, res) =>{
    try {
        const {id} = req.body;
        const exerciseDB = await ExerciseModel.findByIdAndDelete(id);
        // exercises= exercises.filter((exercise) =>exercise.id !== id);
        res.send({exercises})
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export const updateEexercise= async (req, res) =>{
    try {
        const {exercise,sets,repetitions,weight,timer,id} = req.body;
        console.log(req.body);
        const exerciseDB= await ExerciseModel.findById(id);
        if (!exerciseDB) throw new Error("exercise not found");
        // if (!exercise || !sets || !repetitions || !weight || !timer || !id) throw new Error("exersice not found");
        // const _exercise = exercises.find((exercise) => exercise.id === id);


        exerciseDB.exercise = await ExerciseModel.findByIdAndUpdate(id, {exercise}) ;
        exerciseDB.sets = await ExerciseModel.findByIdAndUpdate(id, {sets}) ;
        exerciseDB.repetitions = await ExerciseModel.findByIdAndUpdate(id, {repetitions}) ;
        exerciseDB.weight = await ExerciseModel.findByIdAndUpdate(id, {weight}) ;
        exerciseDB.timer = await ExerciseModel.findByIdAndUpdate(id, {timer}) ;
        res.send({ ExerciseModel });
    } catch (error) {
        console.error(error);
        res.send({ error });
    }
    

}