import { users } from '../users/userModel';
import { owner, familyMembers, privacySettings } from './familyTreeModel';

export function getFamilyTrees(req: any, res: any) {
    try {
        
    } catch (error) {
        console.error(error);
    }
}

export function addFamilyTree(req: any, res: any) {
    try {
        
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export function deleteFamilyTree(req: any, res: any) {
    try {
        
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export function updateFamilyTree(req: any, res: any) {
    try {
      
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export function getUserFamilyTrees(req: any, res: any) {
    try {
        

    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}