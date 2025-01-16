import mongoose from "mongoose";

const DishSchema = mongoose.Schema(
  {
    dishName: { type: String, required: [true, "dish name is required."] },
    dishType: {
      type: String,
      enum: ["indian", "chinese", "continental", "thai", "arabi"],
      required: [true, "dish type is required."],
    },
    dishCategories: {
      type: String,
      enum: ["Veg", "Non-veg"],
      required: [true, "dish Category is required."],
    },
    dishprice: {
      type: Number,
      required: [true, "dish price is required."],
      min: [0, "Dish price must be a positive number."],
    },
    dishImage: { type: String, required: [true, "dish image is required."] },
  },
  { timestamps: true }
);

export const Dish = mongoose.model("Dish", DishSchema);
