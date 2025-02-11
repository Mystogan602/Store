import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log(process.env.DATABASE_URI);
    const conn = await mongoose.connect(process.env.DATABASE_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
