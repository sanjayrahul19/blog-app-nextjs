import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect("mongodb://localhost:27017/blog-app");
    if (connect) {
      console.log("MongoDB Connected Successfully");
    }
  } catch (error) {
    console.log(error);
  }
};
