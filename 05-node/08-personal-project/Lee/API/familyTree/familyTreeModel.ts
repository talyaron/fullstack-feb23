import { Schema, model } from "mongoose";


export class FamilyTree {
  id:string
  constructor(owner, familyMembers, privacySettings) {
    this.owner = owner; // Reference to User
    this.familyMembers = familyMembers; // Array of Family Member entities
    this.privacySettings = privacySettings;
    this.id = Math.random().toString(36).substr(2, 9);
    // ... other family tree-related properties
  }
}


export const familyTree: FamilyTree[] = [];

