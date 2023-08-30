import { User, users } from "./usersModel";


export const registerUser = (req: any, res: any) => {
 try {
  const {email, password} = req.body
  if(!email||!password) throw new Error("please complete all fields")
  const user = new User ({email, password})

  const userExist = users.find((user) => user.email === email)
  if(userExist) throw new Error ("User already exist");
  users.push(user)
  res.send({ok: true})

 } catch (error) {
  console.error(error)
  res.send({error:error.message})
 }
}

export const login = (req: any, res: any) => {
  try {
      const { email, password } = req.body;
      if(!email || !password) throw new Error("Please complete all fields");
      const user = users.find((user) => user.email === email && user.password === password);
      if (!user) throw new Error("some of the details are incorrect");
      res.send({ok:true, email: user.email})
  } catch (error) {
      console.error(error);
      res.send({ error:error.message });
  }
}

// export const getUsers = (req, res) => {
//     try {
//         res.send({users});
//     } catch (error) {
//         console.error(error);
//     }
// }

// export const deleteUser = (req: any, res: any) => {
//     try {
//       const { id } = req.body;
//       console.log(id);
//       users = users.filter((user) => user.id !== id);
//       res.send({ users });
//     } catch (error) {
//       console.error(error);
//       res.send({ error });
//     }
//   }

  // export const updateTaskStatus = (req: any, res: any) => {
  //   try {
  //     const { status, id } = req.body;
  //     console.log(req.body);
  //     if (!status || !id) throw new Error("Please complete all fields");
  //     const task = tasks.find((task) => task.id === id);
  
  //     if (!task) throw new Error("Product not found");
  //     task.status = status;
  //     res.send({ tasks });
  //   } catch (error) {
  //     console.error(error);
  //     res.send({ error });
  //   }
  // }
