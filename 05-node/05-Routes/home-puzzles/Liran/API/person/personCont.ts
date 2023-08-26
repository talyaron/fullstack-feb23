import { Person } from "./personModel";

export let persons: Person[] = [
    // new Person("Google", "054-1234567", 100, [])
];

//add person controler
export const addPerson = (req: any, res: any) => {
    const person: Person = req.body;
    console.log(person);
    //add to persons array
    persons.push(new Person(person.userName, person.password, person.phoneNumber, person.email)); // --> add to Database
    console.log(persons);
    res.send({ person });
}

//get persons
export const getPersons = (req, res) => {
    try {
        res.send({ persons });
    } catch (error) {
        console.error(error);
    }
}

export const deletePerson = (req, res) => {
    try {
        const { id } = req.body;
        console.log(id);
        persons = persons.filter((person) => person.id !== id);
        res.send({ persons });
    } catch (error) {
        console.error(error);
        res.send({ error });
    }
}

export const updatePassword = (req: any, res: any) => {
    try {
        const { password, id } = req.body;
        console.log(req.body);
        if (!id) throw new Error("Please complete all fields");
        console.log(persons);
        const person = persons.find((person) => person.id === id);
        if (!person) throw new Error("person not found");
        person.password = password;
        res.send({ persons });
    } catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}

export const updateEmail = (req: any, res: any) => {
    try {
        const { password, id } = req.body;
        console.log(req.body);
        if (!id) throw new Error("Please complete all fields");
        console.log(persons);
        const person = persons.find((person) => person.id === id);
        if (!person) throw new Error("person not found");
        person.password = password;
        res.send({ persons });
    } catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}

export const updatePhoneNumber = (req: any, res: any) => {
    try {
        const { phoneNumber, id } = req.body;
        console.log(req.body);
        if (!id) throw new Error("Please complete all fields");
        console.log(persons);
        const person = persons.find((person) => person.id === id);
        if (!person) throw new Error("person not found");
        person.phoneNumber = phoneNumber;
        res.send({ persons });
    } catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}