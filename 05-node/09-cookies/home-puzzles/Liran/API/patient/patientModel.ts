import { Schema, model } from 'mongoose';

export const PatientSchema = new Schema({
  firstName: String,
  lastName: String,
  patientId: String,
  age: Number,
  phoneNum: String,
  weight: Number,
  height: Number,
  smoking: Boolean,
  address: String,
  physicianId: String,
});
//users collection in the DB
export const PatientModel = model("patients", PatientSchema)