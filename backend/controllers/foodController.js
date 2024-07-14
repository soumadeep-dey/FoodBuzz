import foodModel from "../models/foodModel.js";
import fs from "fs";

const foodController = {
  // add new food item
  addFood: async (req, res) => {
    const image_filename = `${req.file.filename}`;
    try {
      const newFood = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename,
      });
      await newFood.save();

      res.status(201).json({ success: true, message: "New food item added" });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },
  // get all food items
  listFood: async (req, res) => {
    try {
      const foods = await foodModel.find({});
      res.status(200).json({ success: true, data: foods });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },
  // remove food item
  removeFood: async (req, res) => {
    const foodId = req.body.id;
    try {
      const food = await foodModel.findById(foodId);
      fs.unlink(`uploads/${food.image}`, (err) => {
        if (err) console.error(`Failed to delete image: ${err.message}`);
      });
      await foodModel.findByIdAndDelete(foodId);

      res.status(201).json({ success: true, message: "Food item removed" });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },
};
export default foodController;
