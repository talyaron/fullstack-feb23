import { PrescriptionModel } from "./prescriptionModel";

export async function getPrescriptions(req, res) {
    try {
        const { email: email, _id: patientId } = req.query;
        console.log(email, patientId);
        let prescriptions;
        if (email !== undefined) {
            prescriptions = await PrescriptionModel.find({ 'physician.email': email });
        }
        else if (patientId) {
            prescriptions = await PrescriptionModel.find({ 'patient._id': patientId });
            console.log('prescriptions id + date');
        }
        else
            prescriptions = await PrescriptionModel.find({});
        console.log(prescriptions);
        res.send({ prescriptions });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}


export async function addPrescription(req, res) {
    try {
        const { patient: patient, medicine: medicine, physician: physician, date: date } = req.body;
        console.log(patient, medicine, physician, date);
        if (!patient || !medicine || !physician || !date) throw new Error("Please complete all fields");
        const prescription = new PrescriptionModel({ patient: patient, medicine: medicine, physician: physician, date: date });
        const prescriptionDB = await prescription.save();
        console.log(prescriptionDB);
        res.send({ ok: true });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export async function deletePrescription(req, res) {
    try {
        const { id } = req.body;
        const prescriptionDB = await PrescriptionModel.findByIdAndDelete(id);
        res.send({ ok: true });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export async function updatePrescription(req: any, res: any) {
    try {
        const { id, patient, medicine, physician, date } = req.body;
        if (!id) throw new Error("id is required");
        const prescription = await PrescriptionModel.findByIdAndUpdate(id, { patient, medicine, physician, date });
        await prescription.save();
        res.status(200).send({ message: "Prescription updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}