import { User} from "./usersModel";

let users: User[] = [
    new User({name:"Tamar"}),
    new User({name:"Amir"}),
    new User({name:"Sivan"}),
    new User({name:"Ofir"}),
    new User({name:"Eliya"})
];

//the controllers:
//add User to server
export const addUser= (req: any, res: any) => {
    try {
        const user: User= req.body; //tack data from client
        console.log(user);
        if (!user) throw new Error("no req.body User found");        
        users.push(new User(user)); //server add the Userto users array
        console.log(users);
        res.send({ users }) //server send update array to client
    } catch (error) {
        console.error(error);
    }
}

//get all users from server
export const getUsers = (req: any, res: any) => {
    try {
        res.send({ users });
    } catch (error) {
        console.error(error); 
    }
}

//update specific user
export const updateUserTasks = (req: any, res: any) => {
    try {
        const { id } = req.body; 
        console.log(id);        
        const user = users.find((user) => user.id === id);
        if (!user) throw new Error("no match User found");
        user.tasks =                                        //**need to be fill */
        res.send({users}) //server send the updated array to client
    } catch (error) {
        console.error(error);
    }
}

//delete specific user
export const deleteUser= (req: any, res: any) => {
   try {
    const { id } = req.body;
    console.log(id);
    users = users.filter((user) => user.id !== id);
    res.send({ users });
   } catch (error) {
    console.error(error);
    res.send({error})
   } 
}
