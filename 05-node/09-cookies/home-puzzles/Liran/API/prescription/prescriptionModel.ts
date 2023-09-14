import { Schema, model } from "mongoose";
import { PatientSchema } from "../patient/patientModel"
import { PhysicianSchema } from "../physician/physicianModel"
import { MedicineSchema } from "../medicine/medicineModel";


export const PrescriptionSchema = new Schema({
    date: Date,
    patient: PatientSchema,
    medicine: MedicineSchema,
    physician: PhysicianSchema
});

export const PrescriptionModel = model("prescriptions", PrescriptionSchema);