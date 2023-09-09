import express from 'express'
import { addRelative, deleteRelative, getFamilyMembers, updateRelation, getUserRelatives } from './relativesCont';
const router = express.Router();

router.get('/get-family-members', getFamilyMembers)
    .delete("/delete-relative", deleteRelative)
    .patch('/update-relation', updateRelation)
    .post("/add-relative", addRelative)
    .get("/get-users-relatives", getUserRelatives);


export default router;