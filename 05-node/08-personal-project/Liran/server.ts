import express from "express";
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 3000;


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

  
  // get router from patientsRouter
  import patientRouters from "./API/patient/patientRoutes"
  //tells express to use proudctsRouter on the intial route "/API/patients"
  app.use("/API/patient", patientRouters);
  
  // get router from physiciansRouter
  import physicianRouters from "./API/physician/physicianRoutes"
  //tells express to use proudctsRouter on the intial route "/API/physicians"
  app.use("/API/physician", physicianRouters);
  
  // get router from prescriptionsRouter
  import prescriptionRouters from "./API/prescription/prescriptionRoutes"
  //tells express to use proudctsRouter on the intial route "/API/prescriptions"
  app.use("/API/prescription", prescriptionRouters);
  
  // get router from medicinesRouter
  import medicineRouters from "./API/medicine/medicineRoutes"
  //tells express to use proudctsRouter on the intial route "/API/medicines"
  app.use("/API/medicine", medicineRouters);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
