"use strict";
exports.__esModule = true;
exports.Profile = exports.ProfileSchema = exports.StatusActivity = void 0;
var mongoose_1 = require("mongoose");
var StatusActivity;
(function (StatusActivity) {
    StatusActivity[StatusActivity["Active"] = 0] = "Active";
    StatusActivity[StatusActivity["Inactive"] = 1] = "Inactive";
})(StatusActivity = exports.StatusActivity || (exports.StatusActivity = {}));
exports.ProfileSchema = new mongoose_1.Schema({
    userName: {
        type: String,
        required: true
    },
    // crossfitName: {
    //     type: String,
    //     required: true,
    // },
    status: {
        type: String
    },
    // iconImg: {
    //     type: String,
    //     required: true,
    // },
    birthDate: {
        type: Date,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: false
    }
});
exports.Profile = mongoose_1.model('details', exports.ProfileSchema);
