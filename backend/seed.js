import mongoose from "mongoose";
import 'dotenv/config';
import { positions, holdings, watchlist } from "../dashboard/src/data/data.js";
import positionsModel from "./models/positionModel.js";
import HoldingsModel from "./models/holdingsModel.js";
import orderModel from "./models/orderModel.js";


async function seedData() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Database Connected!');
        await positionsModel.insertMany(positions);
        await HoldingsModel.insertMany(holdings);
        console.log('Data seeded!');
    } catch (err) {
        console.log(err);
    } finally {
        await mongoose.disconnect()
    }
}

seedData();



