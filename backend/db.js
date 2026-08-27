import mongoose from "mongoose";
import 'dotenv/config';


const ConnectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;
        if (!uri) {
            throw new Error("MONGO_URI environment variable is not defined. Please set it in your environment / Render dashboard.");
        }
        await mongoose.connect(uri);
        console.log('Database Connected Successfully!');
    } catch (err) {
        console.error('Database connection error:', err.message || err);
    }
};

export default ConnectDB;



