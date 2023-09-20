import { UserModel,  } from "./userModel";

export async function getUsers(req: any, res: any) {
  try {
      const { email: email, _id: _id } = req.query; // Extract the email query parameter
      console.log(email, _id);
      let user;
      if (_id) {
          user = await UserModel.findById(_id);
          console.log(`User id found  ${_id} : ${user}`);
      }
      else if (!email) {
          user = await UserModel.find({});
      }
      else {
        user = await UserModel.findOne({ email: email });
      }
      if (!user) {
          return res.status(404).send({ error: 'user not found.' });
      }

      res.send({ user });
  } catch (error) {
      console.error(error);
      res.status(500).send({ error: error.message });
  }
}

export async function getUserLogin(req: any, res: any) {
  try {
      const { email, password } = req.query; // Extract the email query parameter
      const user = await UserModel.findOne({ email: email, password: password });
      if (user === undefined) {
          return res.status(404).send({ error: 'user not found.' });
      }
      console.log(user);
      // Send the fetched physician data as a JSON response
      res.send({ user });
  } catch (error) {
      console.error(error);
      res.status(500).send({ error: error.message });
  }
}
export async function getUser(req: any, res: any) {
  try {
    
      const user = req.user;
      
      res.send({ ok: true, user: user });
  } catch (error) {
      console.error(error)
  }
}

