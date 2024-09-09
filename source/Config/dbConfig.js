import mongoose from "mongoose";
// const mongoUrl = "mongodb://localhost:27017/online_ntdl";
const mongoUrl = process.env.MONGO_URL;

export const connectMongoDb = async () => {
  console.log(mongoUrl);
  try {
    const conn = await mongoose.connect(mongoUrl);
    conn && console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
};

// mongodb://localhost:27017/
