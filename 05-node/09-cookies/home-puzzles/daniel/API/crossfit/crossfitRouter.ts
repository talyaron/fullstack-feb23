import express from 'express'
import { getItem, addItem ,getUserItems, deleteItem, updateItemPrice} from './crossfitCont'
const router = express.Router()

router .get('/get-item', getItem)
.post('/add-item', addItem)
.delete('/delete-item', deleteItem)
.patch('/update-item-price', updateItemPrice)
// .get ('/get-user-items',getUserItems)

// router .get('/get-items/:id', getItem)
// .post('/add-item', addItem)
// .delete('/delete-item', deleteItem)
// .patch('/update-item-price', updateItem)
// .get ('/get-items',getUserItems)


export default router;
