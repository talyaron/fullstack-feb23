import express from 'express'
import { adduser, deleteuser, getusers, updateEmail, updatePassword, updatePhoneNumber } from './usersCont';
const router = express.Router();


router
    .get('/get-users', getusers)
    .post("/add-user", adduser)
    .delete("/delete-user", deleteuser)
    .patch('/update-user-password', updatePassword)
    .patch('/update-user-email', updateEmail)
    .patch('/update-user-phone', updatePhoneNumber)

export default router;