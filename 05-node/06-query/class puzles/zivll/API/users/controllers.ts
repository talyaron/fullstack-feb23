import { User, users } from "./model";
export const addUser = (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error(`some of the details are missing`);
    const user = new User(email, password);
    users.push(user);
    res.send({ message: `User added successfully`, email: email });
    // res.send({ email: email });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

export const checkUser = (req: any, res: any) => {
  try {
    const { email } = req.body;
    console.log(email);

    if (!email) throw new Error(`email is missing`);
    const userExists = users.find((user) => user.email === email);
    console.log(userExists);

    if (userExists) res.send({ message: "user exist" });
    if (!userExists || userExists === undefined)
      res.send({ message: "user does not exist" });
    // res.send({ email: email });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
export function signIn(req: any, res: any) {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("email or password is missing");
    const correctUser = users.find(
      (user) => user.email === email && user.password === password
    );
    if (!correctUser) throw new Error("email or password are incorrect");
    res.send({ message: "success", email: correctUser.email });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
}
