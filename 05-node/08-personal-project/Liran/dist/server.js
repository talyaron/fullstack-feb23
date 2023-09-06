"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const port = process.env.PORT || 3000;
//static files
app.use(express_1.default.static("public"));
//body
app.use(express_1.default.json());
//connect to mongoDB with mongoose
mongoose_1.default.connect("mongodb+srv://liranav26:Vhksci30@cluster0.d5q6v4v.mongodb.net/Clinic")
    .then(() => {
    console.info("MongoDB connected");
})
    .catch(err => {
    console.error(err);
});
// get router from patientsRouter
const patientRoutes_1 = __importDefault(require("./API/patient/patientRoutes"));
//tells express to use proudctsRouter on the intial route "/API/patients"
app.use("/API/patient", patientRoutes_1.default);
// get router from physiciansRouter
const physicianRoutes_1 = __importDefault(require("./API/physician/physicianRoutes"));
//tells express to use proudctsRouter on the intial route "/API/physicians"
app.use("/API/physician", physicianRoutes_1.default);
// get router from prescriptionsRouter
const prescriptionRoutes_1 = __importDefault(require("./API/prescription/prescriptionRoutes"));
//tells express to use proudctsRouter on the intial route "/API/prescriptions"
app.use("/API/prescription", prescriptionRoutes_1.default);
// get router from medicinesRouter
const medicineRoutes_1 = __importDefault(require("./API/medicine/medicineRoutes"));
//tells express to use proudctsRouter on the intial route "/API/medicines"
app.use("/API/medicine", medicineRoutes_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
