import express from 'express';
import { getExercises, addExercise, deleteExercise, updatEexercise } from './cont';
const router = express.Router();


router
    .get('/get-exercises', getExercises)
    .post("/add-exercise", addExercise)
    .delete("/delete-exercise", deleteExercise)
    .patch('/update-exercise', updatEexercise)


export default router;