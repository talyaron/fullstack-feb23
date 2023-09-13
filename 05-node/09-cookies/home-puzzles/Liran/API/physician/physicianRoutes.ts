import express from 'express';
import { addPhysician, deletePhysician, getPhysicians, getPhysiciansLogin, getUser, updatePhysician } from './physicianCont';

const router = express.Router();

router
    .get('/get-physicians', getPhysicians)
    .get('/get-physicians-login', getPhysiciansLogin)
    .get('/get-user', getUser)
    .post('/add-physician', addPhysician)
    .delete('/delete-physician', deletePhysician)
    .patch('/update-physician', updatePhysician)

export default router;