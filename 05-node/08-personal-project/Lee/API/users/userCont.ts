import { User, UserModel, users } from "./userModel";



//register user 
export const registerUser = async (req: any, res: any) => {
  try {
    const { email, password, familyMembers } = req.body;
    if (!email || !password) throw new Error("Please complete all fields");


    const user = new UserModel({ email, password, familyMembers })
    const userDB = await user.save()
    console.log(userDB)

    for (const familyMember of familyMembers) {
      const familyUser = new UserModel(familyMember);
      await familyUser.save();
    }

    res.send({ ok: true, user: userDB });

  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
}

export const login = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("Please complete all fields");
    //check if user exist and password is correct

    const user = await UserModel.findOne({ email, password }).exec();
    if (!user) throw new Error("some of the details are incorrect");
    res.send({ ok: true, email: user.email });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
}

