import express from 'express'
import { addMedicine, deleteMedicine, getMedicines, updateMedicine } from './medicineCont';
const router = express.Router();


router
    .get('/get-mediciens', getMedicines)
    .post('/add-medicien', addMedicine)
    .delete("/delete-medicien", deleteMedicine)
    .patch('/update-medicien', updateMedicine)
export default router;
