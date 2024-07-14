import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";

//app config
const app = express();
const PORT = process.env.PORT;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//DB connection
connectDB();

app.get("/", (req, res) => {
  res.send("Hello");
});

// api endpoints
app.use("/api/food", foodRouter);
app.use("/api/images", express.static("uploads"));

app.listen(PORT, () => {
  console.log(`🛜  Server running on port: ${PORT}`);
});
