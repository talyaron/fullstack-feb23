import express from 'express';
import { addVisit, deleteVisit, getVisits } from './visitConts';

const router = express.Router();

router
    .get('/get-visits', getVisits)
    .post('/add-visit', addVisit)
    .delete('/delete-visit', deleteVisit)

export default router;