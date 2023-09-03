import express from 'express'
import {registerUser, login} from  './userCont';
const router = express.Router();

router
  .post('/register', registerUser)
  .post('/login', login)

export default router;