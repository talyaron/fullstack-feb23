import express from 'express'
import { addFamilyTree, deleteFamilyTree, getFamilyTrees, updateFamilyTree, getUserFamilyTrees } from './familyTreeCont';
const router = express.Router();

router.get('/get-familyTree', getFamilyTrees)
    .delete("/delete-familyTree", deleteFamilyTree)
    .patch('/update-familyTree', updateFamilyTree)
    .post("/add-familyTree", addFamilyTree)
    .get("/get-users-familyTrees", getUserFamilyTrees);


export default router;