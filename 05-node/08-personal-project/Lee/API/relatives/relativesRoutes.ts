import express from 'express';
import { addRelative, deleteRelative, getFamilyMembers, updateRelation, getUserRelatives,
} from './relativesCont';

const router = express.Router();

// Define your API routes here
router.get('/get-family-members', getFamilyMembers);
router.post('/add-relative', addRelative); // Use POST for adding relatives
router.delete('/delete-relative', deleteRelative);
router.patch('/update-relation', updateRelation);
router.get('/get-users-relatives', getUserRelatives);

export default router;