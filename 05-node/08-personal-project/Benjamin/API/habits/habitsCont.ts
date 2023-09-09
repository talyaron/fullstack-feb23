import { HabitSchema , HabitModelDB } from "./habitsModel";



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