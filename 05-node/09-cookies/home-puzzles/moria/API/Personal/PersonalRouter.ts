import express from 'express'
import { getAppointment, getUserName, getUserAppointments } from './PersonalCont';
const router = express.Router();


router
    .post('/get-appointment', getAppointment)
    .get('/get-user-appointments', getUserAppointments)
    .get('/get-user-name', getUserName)


export default router;

