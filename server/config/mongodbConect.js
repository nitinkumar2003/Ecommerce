import mongoose from "mongoose";

async function connectMongo(){
    try {
        await mongoose.connect(process.env.MONGO_URL+process.env.DB_NAME);
        console.log("Mongodb connected successfully...");
      } catch (error) {
        console.log("Mongodb connect error", error);
        process.exit(1);
      }
}

export default connectMongo;