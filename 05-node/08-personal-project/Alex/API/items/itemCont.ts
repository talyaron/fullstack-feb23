import {  ItemModel } from "./itemModel";


// Add Item
export const addItem = async (req: any, res: any) => {
  try {
    const { itemName, itemDesc , itemUrl} = req.body;
    if(!itemName || !itemDesc || !itemUrl) throw new Error("Please complete all fields");
    const item = new ItemModel({ itemName, itemDesc , itemUrl});
    const itemDB = await item.save();
    console.log(itemDB);

    res.send({ ok:true , itemDB});
    console.log(item)

  } catch (error) {
    console.error(error);
    res.send({ error:error.message });
  }
}

// export const login = async (req: any, res: any) => {
//     try {
//       const { email, password } = req.body;  
      
//       if(!email||!password) throw new Error("Complete all fields to proceed")
//       const userDB = await UserModel.findOne({ email,password });
  
//       // Check if the user exists
//       if (!userDB) {
//         return res.status(404).json({ error: 'User not found' });
//       }
  
//       // Compare the provided password with the hashed password
//       const passwordMatch =  UserModel.find((user) => user.email === email && user.password === password);
//     //   const passwordMatch = user.(password, user.password);
  
//       if (!passwordMatch) {
//         return res.status(401).json({ error: 'Authentication failed' });
//       }
  
//       // Authentication successful
//       // You can generate a JWT token here if needed and send it in the response
//       // For example: const token = generateToken(user);
  
//       res.send({ok: true, email: userDB.email});
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   };