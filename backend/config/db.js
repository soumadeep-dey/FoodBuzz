import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DB_URL = process.env.DB_URL;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${DB_URL}/FoodBuzz`);
    console.log(`✅ MongoDB connected! DB host: ${conn.connection.host}`);
  } catch (error) {
    console.log(`❌ MongoDB connection error: ${error.message}`);
  }
};
export default connectDB;
