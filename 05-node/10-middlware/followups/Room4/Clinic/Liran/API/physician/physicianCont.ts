import { PhysicianModel } from "./physicianModel";

export async function getPhysicians(req: any, res: any) {
    try {
        const { email: email, _id: _id } = req.query; // Extract the email query parameter
        console.log(email, _id);
        let physician;
        if (_id) {
            physician = await PhysicianModel.findById(_id);
            console.log(`User id found  ${_id} : ${physician}`);
        }
        else if (!email) {
            physician = await PhysicianModel.find({});
        }
        // Fetch the physician with the specified email from the database using PhysicianModel
        else {
            physician = await PhysicianModel.findOne({ email: email });
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
        const physician = await PhysicianModel.findOne({ email: email, password: password });
        if (physician === undefined) {
            return res.status(404).send({ error: 'Physician not found.' });
        }
        console.log(physician);
        // Send the fetched physician data as a JSON response
        res.cookie("physician", physician._id, { maxAge: 1000 * 100, httpOnly: true });
        console.log("cookie sent");
        res.send({ ok: true, physician: physician });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export async function getUser(req: any, res: any) {
    try {
        console.log("getUser");
        const userId = req.cookies.physician;
        console.log(userId);
        if (!userId) throw new Error("User not found");
        const physician = await PhysicianModel.findById(userId);
        if (!physician) throw new Error("User not found");
        res.send({ ok: true, physician: physician });
    } catch (error) {
        console.error(error)
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