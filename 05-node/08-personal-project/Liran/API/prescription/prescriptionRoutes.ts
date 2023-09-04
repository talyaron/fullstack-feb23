import express from 'express';
import { addPrescription, deletePrescription, getPrescriptions, updatePrescription } from './prescriptionCont';

const router = express.Router();

router
    .get('/get-prescriptions', getPrescriptions)
    .post('/add-prescription', addPrescription)
    .delete('/delete-prescription', deletePrescription)
    .patch('/update-prescription', updatePrescription)

export default router;
