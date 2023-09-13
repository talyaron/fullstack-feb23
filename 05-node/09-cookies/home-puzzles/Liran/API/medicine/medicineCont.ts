// import { tasks, TaskStatus, Task, userTasks, UserTasks, TaskModel } from './tasksModel';
import { MedicineModel } from './medicineModel';

export async function getMedicines(req: any, res: any) {
    try {
        const { name: name, _id: _id } = req.query;
        let medicines;
        if (name) {
            medicines = await MedicineModel.findOne({ name: name });
        }
        else if (_id) {
            medicines = await MedicineModel.findById(_id);
        }
        else {
            medicines = await MedicineModel.find({});
        }
        res.send({ medicines });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export async function addMedicine(req: any, res: any) {
    try {
        const { name, dosagePerDay, maxDuration } = req.body;
        if (!name || !dosagePerDay || !maxDuration) throw new Error("Please complete all fields");
        const medicine = new MedicineModel({ name, dosagePerDay, maxDuration });
        const medicineDB = await medicine.save();
        console.log(medicineDB);
        res.send({ ok: true });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export async function deleteMedicine(req: any, res: any) {
    try {
        const { id } = req.body;
        const medicineDB = await MedicineModel.findByIdAndDelete(id);
        res.send({ ok: true });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export async function updateMedicine(req: any, res: any) {
    try {
        const { id, name, dosagePerDay, maxDuration } = req.body;
        if (!id) throw new Error("id is required");
        const medicine = await MedicineModel.findByIdAndUpdate(id, { name, dosagePerDay, maxDuration });
        await medicine.save();
        res.status(200).send({ message: "Medicine updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}
