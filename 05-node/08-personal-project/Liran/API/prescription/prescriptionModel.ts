import { Schema, model } from "mongoose";


export const PrescriptionSchema = new Schema({
    date:Date,
    patient: {
        type: Schema.Types.ObjectId,
        ref: "patients",
    },
    medicine: {
        type: Schema.Types.ObjectId,
        ref: "medicines",
    },
    physician: {
        type: Schema.Types.ObjectId,
        ref: "physicians",
    },
});

export const PrescriptionModel = model("prescriptions", PrescriptionSchema);