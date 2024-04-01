import mongoose from "mongoose";

const connection = {};

export const connectDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGODB_URL);
    connection.isConnected = db.connections[0].readyState;
  } catch (err) {
    console.error("MONGOOSE ERROR: ", err.message);
    throw new Error("Database connection erro");
  }
};
