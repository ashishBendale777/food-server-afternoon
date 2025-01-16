import {Dish} from "../Models/DishSchema.js";

const addDish = async (req, res) => {
  try {
    const addedDish = await Dish.create(req.body);
    res.status(200).json(addedDish);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllDishes = async (req,res) => {
  try {
    const allDishes = await Dish.find();
    res.status(200).json(allDishes);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateDish = async (req, res) => {
  try {
    const updatedDish = await Dish.findByIdAndUpdate(
      { _id: req.body.dishId },
      {
        dishprice: req.body.newDishPrice,
      },
      { new: true }
    );
    res.status(200).json(updatedDish);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteDish = async (req, res) => {
  try {
    const deletedDish = await Dish.findByIdAndDelete({ _id: req.body.dishId });
    res.status(200).json(deletedDish);
  } catch (error) {
    res.status(500).json(error);
  }
};

export { addDish, getAllDishes, updateDish, deleteDish };
