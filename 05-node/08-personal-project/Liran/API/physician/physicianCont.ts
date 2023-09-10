import { PhysicianModel } from "./physicianModel";

export async function getPhysicians(req: any, res: any) {
    try {
        const { email, _id } = req.query; // Extract the email query parameter
        let physician;
        if (_id) {
            physician = await PhysicianModel.findOne({ _id });
        }
        else if (!email) {
            physician = await PhysicianModel.find({});
        }
        // Fetch the physician with the specified email from the database using PhysicianModel
        else {
            physician = await PhysicianModel.findOne({ email });
        }
        if (!physician) {
            return res.status(404).send({ error: 'Physician not found.' });
        }

        // Send the fetched physician data as a JSON response
        res.send({ physician });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export async function getPhysiciansLogin(req: any, res: any) {
    try {
        const { email, password } = req.query; // Extract the email query parameter
        const physician = await PhysicianModel.findOne({ email:email, password:password });
        if (physician === undefined) {
            return res.status(404).send({ error: 'Physician not found.' });
        }
        console.log(physician);
        // Send the fetched physician data as a JSON response
        res.send({ physician });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}


export async function addPhysician(req: any, res: any) {
    try {
        const { firstName, lastName, age, phoneNum, email, licenseNumber, password, isAdmin } = req.body;
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
        const { id, firstName, lastName, age, phoneNum, email, licenseNumber, password, isAdmin } = req.body;
        if (!id) throw new Error("id is required");
        const physicianDB = await PhysicianModel.findByIdAndUpdate(id, { firstName, lastName, age, phoneNum, email, licenseNumber, password, isAdmin })
        await physicianDB.save();
        res.status(200).send({ message: "Physician updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}