import express from 'express';
import { addPhysician, deletePhysician, getPhysicians, updatePhysician } from './physicianCont';

const router = express.Router();

router
    .get('/get-physicians', getPhysicians)
    .post('/add-physician', addPhysician)
    .delete('/delete-physician', deletePhysician)
    .patch('/update-physician', updatePhysician)

export default router;