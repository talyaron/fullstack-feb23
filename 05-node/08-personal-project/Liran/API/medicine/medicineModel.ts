import { Schema, model } from 'mongoose';

export const MedicineSchema = new Schema({
    name: String,
    maxPerDay: Number,
    maxDuration: Number,
    // perDay: {
    //     type: Number,
    //     default: maxPerDay
    //   },
    //   isLogOn: {
    //     type: Boolean,
    //     default: false
    //   }
  });
  //users collection in the DB
  export const MedicineModel = model("mediciens", MedicineSchema)