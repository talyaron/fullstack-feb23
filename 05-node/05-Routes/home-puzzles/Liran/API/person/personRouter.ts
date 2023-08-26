import express from 'express'
import { addPerson, deletePerson, getPersons, updateEmail, updatePassword, updatePhoneNumber } from './personCont';
const router = express.Router();


router
    .get('/get-person', getPersons)
    .post("/add-person", addPerson)
    .delete("/delete-person", deletePerson)
    .patch('/update-person-password', updatePassword)
    .patch('/update-person-email', updateEmail)
    .patch('/update-person-phone', updatePhoneNumber)

export default router;