import { User, UserModel, users } from "./userModel";



//register user 
export const registerUser = async (req: any, res: any) => {
  try {
    const { email, password, familyMembers } = req.body;
    if (!email || !password) throw new Error("Please complete all fields");


    const user = new UserModel({ email, password, familyMembers })

    const validationError = user.validateSync();

    if (validationError) {
      console.error("Validation error:", validationError);
      res.status(400).json({ error: validationError.message });
    } else {
      // Data is valid, proceed with saving
      user.save()
        .then((userDB) => {
          console.log("User saved:", userDB);
          res.status(201).json({ ok: true, user: userDB });
        })
        .catch((saveError) => {
          console.error("Error saving user:", saveError);
          res.status(500).json({ error: "Failed to save user." });
        });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
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

