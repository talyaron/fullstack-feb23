import { HabitSchema , HabitModelDB } from "./habitsModel";



export const addNewHabit = async (req:any,res:any) => {
    console.log("hey!");
    const {name,categorie,time} = req.body;
    if (!name || !categorie || !time) throw new Error("please complete all fields");
    const habit = await HabitModelDB.create({
        name:name,
        categorie:categorie,
        time:time,
        status:"todo"
    })
    console.log(habit);
}