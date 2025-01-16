import {Order} from "../Models/OrderSchema.js";

const addOrder = async (req, res) => {
  try {
    const addedOrder = await Order.create(req.body);
    res.status(200).json(addedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
};
const getAllOrders = async (req, res) => {
  try {
    const allOrders = await Order.find();
    res.status(200).json(allOrders);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      {
        _id: req.body.orderId,
      },
      {
        orderStatus: req.body.newOrderStatus,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete({
      _id: req.body.orderId,
    });
    res.status(200).json(deletedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
};
export { addOrder, getAllOrders, updateOrder ,deleteOrder};
