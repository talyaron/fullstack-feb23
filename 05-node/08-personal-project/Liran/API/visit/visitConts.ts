import { VisitModel } from "./visitModel";

export const getVisits = async (req, res) => { 
    try {
        const visitsDB = await VisitModel.find({});
        res.send({ visits: visitsDB });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export const addVisit = async (req, res) => { 
    try {
        const { date, summary, patient, physician } = req.body;
        if (!date || !summary || !patient || !physician) throw new Error("Please complete all fields");
        const visit = new VisitModel({ date, summary, patient, physician });
        const visitDB = await visit.save();
        console.log(visitDB);
        res.send({ ok: true });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export const deleteVisit = async (req, res) => { 
    try {
        const { id } = req.body;
        const visitDB = await VisitModel.findByIdAndDelete(id);
        res.send({ ok: true });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}