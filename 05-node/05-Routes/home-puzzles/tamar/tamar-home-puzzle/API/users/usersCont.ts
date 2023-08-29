import { User, users} from "./usersModel";

//the controllers:

//register user 
export const registerUser = (req: any, res: any) => {
    try {
      const { name } = req.body;
      if(!name) throw new Error("Please complete all fields");
      const user = new User({ name });
      //check if user already exist
      const userExist = users.find((user) => user.name === name);
      if (userExist) throw new Error("User already exist");
      users.push(user);
      res.send({ ok:true });
  
    } catch (error) {
      console.error(error);
      res.send({ error:error.message });
    }
  }
  
  export const login = (req: any, res: any) => {
      try {
          const { name, id } = req.body;
          if(!name || !id) throw new Error("Please complete all fields");
          //check if user exist and id is match
          const user = users.find((user) => user.name === name && user.id === id);
          if (!user) throw new Error("some of the details are not match");
          res.send({ ok:true, name:user.name });
      } catch (error) {
          console.error(error);
          res.send({ error:error.message });
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
export const updateUser = (req: any, res: any) => {
    try {
        const { id } = req.body; 
        console.log(id);        
        const user = users.find((user) => user.id === id);
        if (!user) throw new Error("no match User found");                                     //**need to be fill*/
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
    const users = users.filter((user) => user.id !== id);
    res.send({ users });
   } catch (error) {
    console.error(error);
    res.send({error})
   } 
}
