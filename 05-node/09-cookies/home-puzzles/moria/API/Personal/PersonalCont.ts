import { User, users, UserModel } from "../user2/userModel";
import { PersonalModel, PersonalSchema } from "./PersonalModel";


export const getAppointment = async (req, res) => {
    try {
        const appointment = req.body;

        const field = appointment.field
        const doctor = appointment.doctor
        const date = appointment.date

        // console.log(doctor, date, field)
        const currentAppointment = new PersonalModel({ field: field, doctor: doctor, date: date })
        const currentAppointmentDB = await currentAppointment.save();


    } catch (error) {
        console.error(error.massage)

    }
}

export const getUserAppointments = async (req: any, res: any) => {
    try {

        const PersonalsDB = await PersonalModel.find({});
        res.send({ appointments: PersonalsDB });


    } catch (error) {
        console.error(error)
    }
}


export const getUserName = async (req: any, res: any) => {
    try {

        const UserNameDB = await UserModel.find({});
        res.send({ users: UserNameDB });


    } catch (error) {
        console.error(error)
    }
}
