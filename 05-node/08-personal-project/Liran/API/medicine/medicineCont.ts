// import { tasks, TaskStatus, Task, userTasks, UserTasks, TaskModel } from './tasksModel';
import { MedicineModel } from '../medicine/medicineModel';

export async function getMedicines(req: any, res: any) {
    try {
        const medicinesDB = await MedicineModel.find({});
        res.send({ medicines: medicinesDB });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export async function addMedicine(req: any, res: any) {
    try {
        const { name,  maxPerDay, maxDuration} = req.body;
        if (!name || !maxPerDay || !maxDuration) throw new Error("Please complete all fields");
        const medicine = new MedicineModel({ name, maxPerDay, maxDuration});
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
        const { id, name, maxPerDay, maxDuration } = req.body;
        if(!id) throw new Error("id is required");
        const medicine = await MedicineModel.findById(id);
        if(!medicine) throw new Error("medicine not found");
        if(name) medicine.name = name;
        if(maxPerDay) medicine.maxPerDay = maxPerDay;
        if (maxDuration) medicine.maxDuration = maxDuration;
        res.send({ ok: true });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}
