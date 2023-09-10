import { PatientModel } from "./patientModel";

export async function getPatients(req: any, res: any) {
    try {
        const patientsDB = await PatientModel.find({});
        res.send({ patients: patientsDB });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export async function addPatient(req: any, res: any) {
    try {
        const { firstName, lastName, patientId, age, phoneNum, weight, height, smoking, address, physicianId } = req.body;
        if (!firstName || !lastName || !patientId || !age || !phoneNum || !weight || !height || !smoking || !address || !physicianId) throw new Error("Please complete all fields");
        const patient = new PatientModel({ firstName, lastName, patientId, age, phoneNum, weight, height, smoking, address, physicianId });
        const patientDB = await patient.save();
        console.log(patientDB);
        res.send({ ok: true });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export async function deletePatient(req: any, res: any) {
    try {
        const { id } = req.body;
        const patientDB = await PatientModel.findByIdAndDelete(id);
        res.send({ patientDB });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export async function updatePatient(req: any, res: any) {
    try {
        const { id, firstName, lastName, patientId, age, phoneNum, weight, height, smoking, address, physicianId } = req.body;
        const patientDB = await PatientModel.findByIdAndUpdate(id, { firstName, lastName, patientId, age, phoneNum, weight, height, smoking, address, physicianId });
        await patientDB.save();
        res.status(200).send({ message: "Patient updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}