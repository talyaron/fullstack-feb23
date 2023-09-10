import  UserModel from "./userModel";


//Get all users
export async function getUsers(req: any, res: any) {
  try {
    const users = await UserModel.find(); 
    
    res.send({users: users });
  } catch (error) {
    console.error(error);
  }
}
//Create User
export  const  addUser =  async (req, res) => {
  try {
    const { username, email,_id } = req.body;
    const checkUniqueMail = await UserModel.findOne({ "email": email });
    // console.log(checkUniqueMail)
    if (checkUniqueMail) {
      return res.status(400).send({ error: `${checkUniqueMail.email} is taken` });
    }
    const user = new UserModel({ username, email, _id });

    const savedUser = await user.save();

    res.status(201).json(savedUser); 
    

    // res.send({ ok: true });


    
  } catch (error) {
    console.error(error);
      res.status(500).send({ error: error.message });
  }
};

//find user by id
export const getUserById =  async (req, res) => {
  try {
    const {userId} = req.params
    const user=await UserModel.findById(userId)
    // console.log(userId)
    console.log(user)
    // console.log(user)

    res.send({"users":user})
    
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}
//Delete user by id
export const deleteUser = async (req, res) =>{
  try {
    const {userId} = req.params
    const user = await UserModel.findByIdAndDelete(userId)
    res.send({ ok: true });
    } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}

//Update user by id
export const updateUserInfo = async (req, res) => {
  try {
    const { userId } = req.params;
    const { username, email } = req.body;

      // Check if the provided email address is already in use by another user
      const existingUser = await UserModel.findOne({ email });

      if (existingUser) {
        return res.status(400).send({ error: 'Email address is already in use by another user' });
      }

    // Find User and Update
    const updatedUser = await UserModel.findByIdAndUpdate(userId, { username, email }, { new: true });

    if (!updatedUser) {
      return res.status(404).send({ error: 'User not found' });
    }

    res.send({ user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'error in update user' });
  }
};
