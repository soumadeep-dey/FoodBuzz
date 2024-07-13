import foodModel from "../models/foodModel.js";
import fs from "fs";

const foodController = {
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
};
export default foodController;
