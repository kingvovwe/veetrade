import { MONGO_URI } from "./env.config";
import mongoose from "mongoose";


export const connectDB = async () => {
    try {

        await mongoose.connect(MONGO_URI!);
        console.log("Connection to DB successfull");

    } catch (e) {
        console.log("Failed to connect to DB: ", e);
        process.exit(1);
    }
}


