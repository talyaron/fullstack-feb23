import { Schema, model } from 'mongoose';

export const PatientSchema = new Schema({
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    weight: Number,
    height: Number,
    smoking: Boolean,
    address: String    
  });
  //users collection in the DB
  export const PatientModel = model("mediciens", PatientSchema)