import mongoose from "mongoose";


async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/emy-collection", {
      connectTimeoutMS: 3000,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection error: ", error);
  }
}


export default connectDB;
