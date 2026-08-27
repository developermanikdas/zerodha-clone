import express from "express";
import mongoose from "mongoose";
import ConnectDB from "./db.js";


import holdingsModel from "./models/holdingsModel.js";
import positionsModel from "./models/positionModel.js";
import orderModel from "./models/orderModel.js";


import "dotenv/config";
import cors from "cors";

const app = express();
const port = process.env.PORT || 9999;

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Zerodha Clone Backend API is running.");
});

// Health check endpoint
app.get('/health-check', async (req, res) => {
  try {
    if (!mongoose.connection || !mongoose.connection.db) {
      return res.status(503).json({ status: 'error', message: 'Database connection not initialized' });
    }
    await mongoose.connection.db.command({ ping: 1 });
    res.json({ status: 'ok', message: 'Server and Database are alive!' });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});

app.get("/get-holdings", async (req, res) => {
    try {
        const allHoldings = await holdingsModel.find();
        res.send(allHoldings);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/get-positions", async (req, res) => {
    try {
        const allPositions = await positionsModel.find();
        res.send(allPositions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/new-order", async (req, res) => {
    try {
        const newOrder = new orderModel({
            name: req.body.name,
            qty: req.body.qty,
            price: req.body.price,
            mode: req.body.mode,
        });
        await newOrder.save(); 
        res.status(201).json({ message: "Order saved successfully!", order: newOrder });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const startServer = async () => {
    await ConnectDB();
    app.listen(port, () => {
        console.log(`App is listening on port ${port}...`);
    });
};

startServer();

