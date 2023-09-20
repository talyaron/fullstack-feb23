import express from 'express';
import { addRelative, deleteRelative, getRelatives, updateRelation, getUserRelatives,
} from './relativesCont';
// import { isAdmin } from './middlewareRelatives';

const router = express.Router();

// Define your API routes here
router.post('/add-relative', addRelative); // Use POST for adding relatives
router.get('/get-relatives', getRelatives);
router.delete('/delete-relative', deleteRelative);
router.patch('/update-relation', updateRelation);
router.get('/get-users-relatives', getUserRelatives);

export default router;