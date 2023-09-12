import { PatientModel } from "./patientModel";

export async function getPatients(req: any, res: any) {
    try {
        const { physicianId, patientId } = req.query; 
        let patients;
        if (patientId) {
            patients = await PatientModel.findOne({ id: patientId });
        }
        else if (!physicianId) {
            patients = await PatientModel.find({});
        }
        else {
            patients = await PatientModel.find({ physicianId });

        }
        res.send({ patients });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export async function addPatient(req: any, res: any) {
    try {
        const { firstName, lastName, patientId, age, phoneNum, weight, height, smoking, address, physicianId } = req.body;
        if (!firstName || !lastName || !patientId || !age || !phoneNum || !weight || !height || !address || !physicianId) throw new Error("Please complete all fields");
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