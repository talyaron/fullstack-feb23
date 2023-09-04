import { PrescriptionModel } from "./prescriptionModel";

export async function getPrescriptions(req, res) {
    try {
        const prescriptionsDB = await PrescriptionModel.find({});
        res.send({ prescriptions: prescriptionsDB });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export async function addPrescription(req, res) {
    try {
        const { patient, medicine, physician } = req.body;
        if (!patient || !medicine || !physician) throw new Error("Please complete all fields");
        const prescription = new PrescriptionModel({ patient, medicine, physician });
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

export async function updatePrescription(req, res) {
    try {
        const { id, patient, medicine, physician } = req.body;
        if (!id) throw new Error("id is required");
        const prescription = await PrescriptionModel.findById(id);
        if (!prescription) throw new Error("prescription not found");
        if (patient) prescription.patient = patient;
        if (medicine) prescription.medicine = medicine;
        if (physician) prescription.physician = physician;
        res.send({ ok: true });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}