import express from "express";
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser'


const app = express();
const port = process.env.PORT || 3000;

app.use(cookieParser());

//static files
app.use(express.static("public"));


//body
app.use(express.json());

//connect to mongoDB with mongoose
mongoose.connect("mongodb+srv://liranav26:Vhksci30@cluster0.d5q6v4v.mongodb.net/Clinic")
  .then(() => {
    console.info("MongoDB connected")
  })
  .catch(err => {
    console.error(err)
  })


import patientRouters from "./API/patient/patientRoutes"
app.use("/API/patient", patientRouters);

import physicianRouters from "./API/physician/physicianRoutes"
app.use("/API/physician", physicianRouters);

import prescriptionRouters from "./API/prescription/prescriptionRoutes"
app.use("/API/prescription", prescriptionRouters);

import medicineRouters from "./API/medicine/medicineRoutes"
app.use("/API/medicine", medicineRouters);

import visitRouters from "./API/visit/visitRoutes"
app.use("/API/visit", visitRouters);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
