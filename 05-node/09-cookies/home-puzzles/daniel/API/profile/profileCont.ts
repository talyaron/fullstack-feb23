import { Profile,StatusActivity } from './profileModel'

export const getDetail = async(req:any, res:any)=> {
    try {
        const detailDB = await Profile.find({});
        res.send({details:detailDB})
    } catch (error) {
        console.error(error)
    }
}


export const addDetail = async(req:any, res:any)=>{
    try {
        const {userName,status,birthDate,phoneNumber} = req.body;
        console.log({userName,status,birthDate,phoneNumber});
        if(!userName || !status || !birthDate ||  !phoneNumber) throw new Error("Please fill all fileds")

        const detail = new Profile({userName,status,birthDate,phoneNumber});
        const detailDB = await detail.save();
        console.log(detailDB);
        
        res.send({ok:true});
    } catch (error) {
        console.error(error);
        res.status(500).send({ error:error.message });
    }
}

export const getUserDetail = async(req:any, res:any)=>{
    try {
        const { email } = req.query;
        if(!email) {
            throw new Error("email is required")
        }

        const detailsDB = await Profile.find({ email });
        res.send({ Profile:detailsDB })
    } catch (error) {
        console.error(error);
        res.status(500).send({ error:error.message });
    }
}

export const updateDetails = async(req:any, res:any)=> {
    try {
        const { userName, status, birthDate, phoneNumber, id} = req.body;
        const detailDB = await Profile.findById(id);
        if(!detailDB) throw new Error("Detail not found")

        detailDB.userName = await Profile.findByIdAndUpdate(id, {userName});
        // detailDB.status = await Profile.findByIdAndUpdate(id, {status});
        detailDB.birthDate = await Profile.findByIdAndUpdate(id, {birthDate});
        detailDB.phoneNumber = await Profile.findByIdAndUpdate(id, {phoneNumber});
        res.send({ Profile })
    } catch (error) {
        console.error(error);
        res.send({ error });
    }
}