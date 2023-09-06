import { Schema, model } from 'mongoose';

export const MedicineSchema = new Schema({
    name: String,
    dosagePerDay: Number,
    maxDuration: Number,
  });
  //users collection in the DB
  export const MedicineModel = model("medicines", MedicineSchema)