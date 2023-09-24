import { OrderModel } from "./orderModel";

//register user 
export const createOrder = async (req: any, res: any) => {
    try {
      const { userName, userMail , orderItems} = req.body;
      if(!userName||!userMail || !orderItems||orderItems.length ===0) throw new Error("Please complete all fields");
      const order = new OrderModel({ userName, userMail , orderItems});
    //    Check if the email already exists in the database
    //   const existingOrder = await OrderModel.findOne({ userMail });
    //       if (existingOrder) {
    //         return res.status(400).json({ error: "There is an order in progress for that user " });
    //    }
      const orderDB = await order.save();
      console.log(orderDB);
  
      res.send({ ok:true , orderDB});
      console.log(order)
  
    } catch (error) {
      console.error(error);
      res.send({ error:error.message });
    }
  }