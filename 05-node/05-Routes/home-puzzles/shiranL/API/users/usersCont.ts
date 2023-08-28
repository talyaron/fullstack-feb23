import { User ,users} from "./usersModel";

//add user controler    
export const addUser = (req: any, res: any) => {
    try {
        const user = req.body;
      if (!user.userName || !user.password) {
            res.send({ users,success: false, message: "user name and password are required" });
            return;
        }
        //add to users array
        users.push(new User(user.userName, user.password)); // --> add to Database
        res.send({ users, success: true, message: "user added" });
    } catch (error) {
        console.error(error);
    }
}
//get all users controler
export const getAllUsers = (req: any, res: any) => {
    try {
        res.send({ users });
    } catch (error) {
        console.error(error);
    }
}   
//log in controler
export const login = (req: any, res: any) => {
    try {
        const { userName, password } = req.body;
        if(!userName || !password) throw new Error("Please complete all fields");
        //check if user exist and password is correct
        const user = users.find((user) => user.userName === userName && user.password === password);
        if (!user) throw new Error("some of the details are incorrect");
        res.send({ ok:true, userName:user.userName });
    } catch (error) {
        console.error(error);
        res.send({ error:error.message });
    }
}



// Function to get user details by username
export const getUserDetails = (req: any, res: any) => {
    try {
      const userName = req.query.userName;
      if (!userName) {
        res.status(400).send("Username is required.");
        return;
      }
  
      const user = users.find((user) => user.userName === userName);
      if (!user) {
        res.status(404).send("User not found.");
        return;
      }
  
      // Send the user details as a JSON response
      res.send(user)
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  };
  

