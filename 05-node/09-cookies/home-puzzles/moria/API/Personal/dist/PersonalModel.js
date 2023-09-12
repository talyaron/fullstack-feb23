"use strict";
exports.__esModule = true;
exports.PersonalModel = exports.PersonalSchema = void 0;
var mongoose_1 = require("mongoose");
// export class Personal {
//     id: string;
//     constructor(public doctor: string, public date: string, public field: string, public hour?: string) {
//         this.id = Math.random().toString()
//     }
// }
exports.PersonalSchema = new mongoose_1.Schema({
    doctor: String,
    date: String,
    field: String
});
exports.PersonalModel = mongoose_1.model("appointments", exports.PersonalSchema);
