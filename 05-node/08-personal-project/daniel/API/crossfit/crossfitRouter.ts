import express from 'express'
import { getItem, addItem ,getUserItems, deleteItem, updateItem} from './crossfitCont'
const router = express.Router()

router .get('/get-item', getItem)
.post('/add-item', addItem)
.delete('/delete-item', deleteItem)
.patch('/update-item-price', updateItem)
.get ('/get-user-items',getUserItems)




export default router;
