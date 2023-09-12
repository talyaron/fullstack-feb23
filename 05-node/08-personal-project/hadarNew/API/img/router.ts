import express from 'express';
import { getExercises, addExercise, deleteExercise, updateEexercise } from './cont';
const router = express.Router();


router
    .get('/get-exercises', getExercises)
    .post("/add-exercise", addExercise)
    .delete("/delete-exercise", deleteExercise)
    .patch('/update-exercise', updateEexercise)


export default router;