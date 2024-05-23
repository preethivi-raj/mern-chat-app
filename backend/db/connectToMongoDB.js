import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL );
            console.log("Connected to MongoDB");
    }
    catch(err){
        console.log("Error Connecting to MongoDB" , err.message);
    }
}

export default connectToMongoDB;