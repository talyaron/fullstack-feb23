import { Schema, model } from "mongoose";
import { PatientSchema } from "../patient/patientModel"
import { PhysicianSchema } from "../physician/physicianModel"

export const VisitSchema = new Schema({
    date: Date,
    summary: String,
    patient: PatientSchema,
    physician: PhysicianSchema
});

export const VisitModel = model("visits", VisitSchema);