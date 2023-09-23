import express from 'express';
import { addPhysician, deletePhysician, getPhysicians, getPhysiciansLogin, getUser, updatePhysician } from './physicianCont';
import { isAdmin } from './physicianMiddleware';
const router = express.Router();

router
    .get('/get-physicians', getPhysicians)
    .get('/get-physicians-login', getPhysiciansLogin)
    .get('/get-user', isAdmin, getUser)
    .post('/add-physician', isAdmin, addPhysician)
    .delete('/delete-physician', isAdmin, deletePhysician)
    .patch('/update-physician', isAdmin, updatePhysician)

export default router;