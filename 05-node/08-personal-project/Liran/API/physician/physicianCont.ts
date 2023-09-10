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
        const { firstName, lastName, age, phoneNum, email, licenseNumber, password,isAdmin } = req.body;
        if (!firstName || !lastName || !age || !phoneNum || !email || !licenseNumber || !password) throw new Error("Please complete all fields");
        const physician = new PhysicianModel({ firstName, lastName, age, phoneNum, email, licenseNumber, isAdmin, password });
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
        debugger;
        const {  id,firstName, lastName, age, phoneNum, email, licenseNumber, password, isAdmin } = req.body;
        if (!id) throw new Error("id is required");
        const physicianDB = await PhysicianModel.findByIdAndUpdate(id, { firstName, lastName, age, phoneNum, email, licenseNumber, password, isAdmin })
        await physicianDB.save();
        res.status(200).send({ message: "Physician updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}