import {Schema, model} from "mongoose";

export enum StatusActivity {
    Active,
    Inactive
}

export const ProfileSchema = new Schema({
    userName: {
        type: String,
        required: true,
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
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: false
    }
})

export const Profile = model('details', ProfileSchema)
