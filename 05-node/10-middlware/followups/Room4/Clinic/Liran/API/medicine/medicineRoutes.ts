import express from 'express'
import { addMedicine, deleteMedicine, getMedicines, updateMedicine } from './medicineCont';
const router = express.Router();


router
    .get('/get-medicines', getMedicines)
    .post('/add-medicine', addMedicine)
    .delete("/delete-medicine", deleteMedicine)
    .patch('/update-medicine', updateMedicine)
export default router;
