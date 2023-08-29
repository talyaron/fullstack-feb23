import express from 'express';
import {} from './usersCont'
const router = express.Router()


router
    .get('/get-user', getUsers)
    .post('/add-user', addUsers)
    .delete('/delete-user', deleteUsers)
    .patch('/update-user', updateUsers)

export default router;