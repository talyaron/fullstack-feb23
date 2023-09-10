import express from 'express';
import { addPhysician, deletePhysician, getPhysicians, getPhysiciansLogin, updatePhysician } from './physicianCont';

const router = express.Router();

router
    .get('/get-physicians', getPhysicians)
    .get('/get-physicians-login', getPhysiciansLogin)
    .post('/add-physician', addPhysician)
    .delete('/delete-physician', deletePhysician)
    .patch('/update-physician', updatePhysician)

export default router;