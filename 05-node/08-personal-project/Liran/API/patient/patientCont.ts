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
        const { firstName, lastName, age, phoneNum, weight, height, smoking, address, physicianId } = req.body;
        if (!firstName || !lastName || !age || !phoneNum || !weight || !height || !smoking || !address || !physicianId) throw new Error("Please complete all fields");
        const patient = new PatientModel({ firstName, lastName, age, phoneNum, weight, height, smoking, address, physicianId });
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
        const { id, firstName, lastName, age, phoneNum, weight, height, smoking, address, physicianId } = req.body;
        if (!id) throw new Error("id is required");
        const patient = await PatientModel.findById(id);
        if (!patient) throw new Error("patient not found");
        if (firstName) patient.firstName = firstName;
        if (lastName) patient.lastName = lastName;
        if (age) patient.age = age;
        if (phoneNum) patient.phoneNum = phoneNum;
        if (weight) patient.weight = weight;
        if (height) patient.height = height;
        patient.smoking = smoking;
        if (address) patient.address = address;
        if (physicianId) patient.physicianId = physicianId;
        await patient.save();
        res.status(200).send({ message: "Patient updated successfully" });


    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}