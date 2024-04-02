import mongoose from "mongoose";

const connection = {}; // creating connection object

export const connectDB = async () => {
  try {
    //check for an existing connection
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    //connecting to database
    const db = await mongoose.connect(process.env.MONGODB_URL);
    connection.isConnected = db.connections[0].readyState;
  } catch (err) {
    console.error("MONGOOSE ERROR: ", err.message);
    throw new Error("Database connection error");
  }
};
