import { HabitSchema , HabitModelDB, doneHabitsShema , DoneHabitModelDB } from "./habitsModel";



export const addNewHabit = async (req:any,res:any) => {
    console.log("hey!");
    const {name,categorie,time,userEmail } = req.body;
    if (!name || !categorie || !time) throw new Error("please complete all fields");
    const habit = await HabitModelDB.create({
        name:name,
        categorie:categorie,
        time:time,
        status:"todo",
        email: userEmail
    })
    console.log(habit);
    res.send(true)
}

export const getUserHabits = async (req:any,res:any) => {
try {
    const {email} = req.query;
    console.log(email);
    const tasks = await HabitModelDB.find({email:email});
    res.send(tasks);

} catch (error) {
    console.error(error)
}
}
export const habitDone = async (req:any, res:any) => {
    try {
       const  { name , categorie , status , email } = req.body;
       const task = await DoneHabitModelDB.create({
        name: name,
        categorie: categorie,
        email:email,
        })
        res.send(true);
    } catch (error) {
        console.error(error);
    }
}
export const deleteHabit = async (req:any,res:any) => {
    try {
        const  { name , categorie , status } = req.body;
        await HabitModelDB.deleteOne({name:name}); 
        console.log("task deleted!")
        res.send(true);
    } catch (error) {
        console.error(error);
    }
}

export const getDoneHabits = async (req:any,res:any) => {
    try {
        const {email} = req.query;
        const doneHabits = await DoneHabitModelDB.find({email:email});
        console.log(doneHabits)
        res.send(doneHabits)
    } catch (error) {
        console.error(error);
    }
}