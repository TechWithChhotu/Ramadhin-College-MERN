import mongoose from "mongoose";

const ConnectToDB = async () => {
  const { connection } = await mongoose.connect(process.env.MONGO_URI);

  if (ConnectToDB) {
    console.log("DB connnection successful");
  } else {
    console.log("DB connection failed");
  }
};

export default ConnectToDB;
