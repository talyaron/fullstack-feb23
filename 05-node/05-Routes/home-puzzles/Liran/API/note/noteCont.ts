import { Note } from "./noteModel";
import { users } from "../users/usersCont";

let ntoes: Note[] = [
    // new user("Google", "054-1234567", 100, [])
];

//add note controler
export const addNote = (req: any, res: any) => {
    try {
        const { title, description, status, id } = req.body;
        if(!title || !description || !status || id) throw new Error("Please complete all fields");
        //add to users array
        const user = users.find((user) => user.id === id);
        if (!user) throw new Error("user not found");
        user.noteList.push({title, description, status}); // --> add to Database
        console.log(users);
        const list = user.noteList;
        res.send({ list });
    } catch (error) {

    }
}

//get users
export const getNotes = (req, res) => {
    try {
        const { id } = req.body;
        if (!id) throw new Error("Please complete all fields");
        const user = users.find((user) => user.id === id);
        if (!user) throw new Error("user not found");
        const list = user.noteList;
        res.send({ list });
    } catch (error) {
        console.error(error);
    }
}

export const deleteNote = (req, res) => {
    try {
        const { title, id } = req.body;
        if (!id || !title) throw new Error("Please complete all fields");
        console.log(id);
        const user = users.find((user) => user.id === id);
        if (!user) throw new Error("user not found");
        const indx = user.noteList.findIndex((note) => note.title === title);
        if (indx === -1) throw new Error("note not found");
        user.noteList.splice(indx, 1);
        const list = user.noteList;
        res.send({ list });
    } catch (error) {
        console.error(error);
        res.send({ error });
    }
}

export const updateNote = (req: any, res: any) => {
    try {
        const { title, newDescription, id } = req.body;
        console.log(req.body);
        if (!id || !title || !newDescription) throw new Error("Please complete all fields");
        console.log(users);
        const user = users.find((user) => user.id === id);
        if (!user) throw new Error("user not found");
        const indx = user.noteList.findIndex((note) => note.title === title);
        if (indx === -1) throw new Error("note not found");
        user.noteList[indx].description = newDescription;
        const list = user.noteList;
        res.send({ list });
    } catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}

export const updateNoteStatus = (req: any, res: any) => {
    try {
        const { title, newStatus, id } = req.body;
        console.log(req.body);
        if (!id || !title || !newStatus) throw new Error("Please complete all fields");
        const user = users.find((user) => user.id === id);
        if (!user) throw new Error("user not found");
        const indx = user.noteList.findIndex((note) => note.title === title);
        if (indx === -1) throw new Error("note not found");
        user.noteList[indx].status = newStatus;
        const list = user.noteList;
        res.send({ list });
    } catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}
