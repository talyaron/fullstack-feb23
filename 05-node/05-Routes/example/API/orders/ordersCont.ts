import { Order } from "./orderModel";

let orders: Order[] = [
    new Order("Google", "054-1234567", 100, [])
];

//add order controler
export const addOrder = (req: any, res: any) => {
    const order: Order = req.body;
    console.log(order);
    //add to orders array
    orders.push(new Order(order.company, order.phone, order.totalPrice, order.cart)); // --> add to Database
    console.log(orders);
    res.send({ order });
}

//get orders
export const getorders = (req, res) => {
    try {
        res.send({ orders });
    } catch (error) {
        console.error(error);
    }
}

export const deleteorder = (req, res) => {
    try {
        const { id } = req.body;
        console.log(id);
        orders = orders.filter((order) => order.id !== id);
        res.send({ orders });
    } catch (error) {
        console.error(error);
        res.send({ error });
    }
}

export const updateCart = (req: any, res: any) => {
    try {
        const { totalPrice , id } = req.body;
        console.log(req.body);
        if (!id) throw new Error("Please complete all fields");
        console.log(orders);
        const order = orders.find((order) => order.id === id);
        if (!order) throw new Error("order not found");
        order.totalPrice = totalPrice;
        res.send({ orders });
    } catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}