import express from "express";
import foodController from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, callback) => {
    return callback(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), foodController.addFood);
foodRouter.get("/list", foodController.listFood);
foodRouter.delete("/remove", foodController.removeFood);

export default foodRouter;
