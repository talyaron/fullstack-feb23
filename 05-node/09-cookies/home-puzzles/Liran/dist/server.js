"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const PhysicianMiddlware_1 = require("./API/physician/PhysicianMiddlware");
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(cookie_parser_1.default());
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
app.use(PhysicianMiddlware_1.getLoggedUser);
const patientRoutes_1 = __importDefault(require("./API/patient/patientRoutes"));
app.use("/API/patient", patientRoutes_1.default);
const physicianRoutes_1 = __importDefault(require("./API/physician/physicianRoutes"));
app.use("/API/physician", physicianRoutes_1.default);
const prescriptionRoutes_1 = __importDefault(require("./API/prescription/prescriptionRoutes"));
app.use("/API/prescription", prescriptionRoutes_1.default);
const medicineRoutes_1 = __importDefault(require("./API/medicine/medicineRoutes"));
app.use("/API/medicine", medicineRoutes_1.default);
const visitRoutes_1 = __importDefault(require("./API/visit/visitRoutes"));
app.use("/API/visit", visitRoutes_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
