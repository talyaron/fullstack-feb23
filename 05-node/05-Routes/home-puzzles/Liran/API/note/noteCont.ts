import { Note } from "./noteModel";
import { persons } from "../person/personCont";

let ntoes: Note[] = [
    // new Person("Google", "054-1234567", 100, [])
];

//add note controler
export const addNote = (req: any, res: any) => {
  try {
      const { id, note } = req.body;
      if (!id || !note) throw new Error("Please complete all fields");
      //add to persons array
      const person = persons.find((person) => person.id === id);
      if (!person) throw new Error("person not found");
        person.noteList.push(note); // --> add to Database
      console.log(persons);
      const list = person.noteList;
      res.send({ list });
  } catch (error) {
    
  }
}

//get persons
export const getNotes = (req, res) => {
    try {
        const { id } = req.body;
        if (!id) throw new Error("Please complete all fields");
        const person = persons.find((person) => person.id === id);
        if (!person) throw new Error("person not found");
        const list = person.noteList;
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
        const person = persons.find((person) => person.id === id);
        if (!person) throw new Error("person not found");
        const indx = person.noteList.findIndex((note) => note.title === title);
        if (indx === -1) throw new Error("note not found");
        person.noteList.splice(indx, 1);
        const list = person.noteList;
        res.send({ list });
    } catch (error) {
        console.error(error);
        res.send({ error });
    }
}

export const updateNote = (req: any, res: any) => {
    try {
        const { title, newDescription ,id } = req.body;
        console.log(req.body);
        if (!id || !title || !newDescription) throw new Error("Please complete all fields");
        console.log(persons);
        const person = persons.find((person) => person.id === id);
        if (!person) throw new Error("person not found");
        const indx = person.noteList.findIndex((note) => note.title === title);
        if (indx === -1) throw new Error("note not found");
        person.noteList[indx].description = newDescription;
        const list = person.noteList;
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
        const person = persons.find((person) => person.id === id);
        if (!person) throw new Error("person not found");
        const indx = person.noteList.findIndex((note) => note.title === title);
        if (indx === -1) throw new Error("note not found");
        person.noteList[indx].status = newStatus;
        const list = person.noteList;
        res.send({ list });
    } catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}
