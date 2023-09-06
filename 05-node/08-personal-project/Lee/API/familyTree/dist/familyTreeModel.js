"use strict";
exports.__esModule = true;
exports.familyTree = exports.FamilyTree = void 0;
var FamilyTree = /** @class */ (function () {
    function FamilyTree(owner, familyMembers, privacySettings) {
        this.owner = owner; // Reference to User
        this.familyMembers = familyMembers; // Array of Family Member entities
        this.privacySettings = privacySettings;
        this.id = Math.random().toString(36).substr(2, 9);
        // ... other family tree-related properties
    }
    return FamilyTree;
}());
exports.FamilyTree = FamilyTree;
exports.familyTree = [];
