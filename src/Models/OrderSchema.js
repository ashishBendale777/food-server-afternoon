import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  orderDate: { type: Date, default: new Date() },
  orderAmount: {
    type: Number,
    required: [true, "Order amount is required."]
  },
  orderStatus: {
    type: String,
    enum: ["placed", "ready", "deliverd", "canceled"],
    default:"placed"
  },
  orderItems: [{
    dishId: {
      type: mongoose.Types.ObjectId,
      ref:"Dish"
    },
    qty: Number
  }],
  customerId: { type: mongoose.Types.ObjectId, ref: "Customer" },
});

export const Order = mongoose.model("Order", orderSchema);
