import express from 'express';
import { addPhysician, deletePhysician, getPhysicians, getPhysiciansLogin, getUser, updatePhysician } from './physicianCont';
import { isAdmin } from './PhysicianMiddlware';

const router = express.Router();

router
    .get('/get-physicians', getPhysicians)
    .get('/get-physicians-login', getPhysiciansLogin)
    .get('/get-user', getUser)
    .post('/add-physician',isAdmin, addPhysician) //route only valdi for admin users
    .delete('/delete-physician',isAdmin, deletePhysician) //route only valdi for admin users
    .patch('/update-physician', isAdmin, updatePhysician) //route only valdi for admin users

export default router;