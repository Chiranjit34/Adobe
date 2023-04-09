
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const mongooseConnection = () => {
  const connectionOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(process.env.MONGO_URL, connectionOption);
    mongoose.connection.on("connected", () => {
      console.log("Database connected");
    });
    mongoose.connection.on("disconnected", () => {
      console.log("Database disconnected");
    });
    mongoose.connection.on(
      "error",
      console.error.bind(console, "connection error")
    );
  } catch (error) {
    console.log("error while connection data base", error.message);
  }
};

export default mongooseConnection;
