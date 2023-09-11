import { PatientModel } from "./patientModel";

export async function getPatients(req: any, res: any) {
    try {
        debugger;
        const { physicianId, patientId } = req.query; // Extract the email query parameter
        let patients;
        if (patientId) {
            patients = await PatientModel.findOne({ _id: patientId });
        }
        else if (!physicianId) {
            patients = await PatientModel.find({});
        }
        else {
            // Fetch the physician with the specified email from the database using PhysicianModel
            patients = await PatientModel.find({ physicianId });

        }
        // Send the fetched physician data as a JSON response
        res.send({ patients });
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