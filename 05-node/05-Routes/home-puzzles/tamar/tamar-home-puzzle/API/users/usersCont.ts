import { User, users} from "./usersModel";

//the controllers:

//register user 
export const registerUser = (req: any, res: any) => {
    try {
      const { name, password } = req.body;
      console.log(name, password)
      if(!name || !password) throw new Error("Please complete all fields");
      const user = new User({ name, password });
      //check if user already exist
      const userExist = users.find((user) => user.name === name && user.password === password);
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
          const { name, password } = req.body;
          if(!name || !password) throw new Error("Please complete all fields");
          //check if user exist and id is match
          const user = users.find((user) => user.name === name && user.password === password);
          if (!user) throw new Error("some of the details are not match");
          res.send({ ok:true, name:user.name , id:user.id});
      } catch (error) {
          console.error(error);
          res.send({ error:error.message });
      }
  }


//get user from server
export const getUser = (req: any, res: any) => {
    try {
        const { id } = req.body; 
        console.log(id);        
        const user = users.find((user) => user.id === id);
        if (!user) throw new Error("no match User found");
        res.send({ user });
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
    const newUsers = users.filter((user) => user.id !== id);
    res.send({ newUsers });
   } catch (error) {
    console.error(error);
    res.send({error})
   } 
}
