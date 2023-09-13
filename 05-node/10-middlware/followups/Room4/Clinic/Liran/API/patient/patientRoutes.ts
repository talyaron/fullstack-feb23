import express from 'express';
import { addPatient, deletePatient, getPatients, updatePatient } from './patientCont';

const router = express.Router();


router 
    .get('/get-patients', getPatients)
    .post('/add-patient', addPatient)
    .delete('/delete-patient', deletePatient)
    .patch('/update-patient', updatePatient)

export default router;