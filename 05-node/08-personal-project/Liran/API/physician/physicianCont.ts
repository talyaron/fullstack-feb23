import { PhysicianModel } from "./physicianModel";

export async function getPhysicians(req: any, res: any) {
    try {
        const physiciansDB = await PhysicianModel.find({});
        res.send({ physicians: physiciansDB });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}
 
export async function addPhysician(req: any, res: any) {
    try {
        const { firstName, lastName, age, phoneNum, email, licenseNumber, isAdmin } = req.body;
        if (!firstName || !lastName || !age || !phoneNum || !email || !licenseNumber) throw new Error("Please complete all fields");
        const physician = new PhysicianModel({ firstName, lastName, age, phoneNum, email, licenseNumber, isAdmin });
        const physicianDB = await physician.save();
        console.log(physicianDB);
        res.send({ ok: true });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export async function deletePhysician(req: any, res: any) {
    try {
        const { id } = req.body;
        const physicianDB = await PhysicianModel.findByIdAndDelete(id);
        res.send({ ok: true });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export async function updatePhysician(req: any, res: any) { 
    try {
        const { id, firstName, lastName, age, phoneNum, email, licenseNumber } = req.body;
        if (!id) throw new Error("id is required");
        const physician = await PhysicianModel.findById(id);
        if (!physician) throw new Error("physician not found");
        if (firstName) physician.firstName = firstName;
        if (lastName) physician.lastName = lastName;
        if (age) physician.age = age;
        if (phoneNum) physician.phoneNum = phoneNum;
        if (email) physician.email = email;
        if (licenseNumber) physician.licenseNumber = licenseNumber;
        res.send({ ok: true });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}