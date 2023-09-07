import { Schema, model } from "mongoose";

export const VisitSchema{
    date:Date,
    summary:String,
    patient: {
        type: Schema.Types.ObjectId,
        ref: "patients",
    },
    physician: {
        type: Schema.Types.ObjectId,
        ref: "physicians",
    },
}

export const VisitModel = model("visits", VisitSchema);