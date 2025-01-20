import mongoose from "mongoose";

async function connectMongo(){
    try {
        await mongoose.connect(process.env.MONGO_URL+process.env.DB_NAME,{
          useNewUrlParser: true,
          useUnifiedTopology: true,
          writeConcern: { w: 'majority' }  // Set default write concern for the whole connection
        });
        console.log("Mongodb connected successfully...");
      } catch (error) {
        console.log("Mongodb connect error", error);
        process.exit(1);
      }
}

export default connectMongo;