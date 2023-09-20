import express from 'express'
import {getDetail, addDetail, getUserDetail, updateDetails} from './profileCont'
const router = express.Router()


router .get('/get-detail', getDetail)
.post('/add-detail',addDetail)
.patch('', updateDetails)
.get('',getUserDetail )


export default router;