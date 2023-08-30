import { User, users } from "./usersModel";

export const addUser = (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("email or password is missing");
    const newUser = new User(email, password);
    const userExists = users.find((user) => user.email === email);
    if (userExists) throw new Error("User already exists");
    users.push(newUser);
    res.send({ message: "user added succsesfully" });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
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
