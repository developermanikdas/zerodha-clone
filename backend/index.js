import express from "express";
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


app.get("/get-holdings", async (req, res) => {
    const allHoldings = await holdingsModel.find();
    res.send(allHoldings);
})

app.get("/get-positions", async (req, res) => {
    const allPositions = await positionsModel.find();
    res.send(allPositions);
})

app.post("/new-order", async (req, res) => {
    const newOrder = new orderModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });
    await newOrder.save(); 

})

app.listen(port, () => {
    ConnectDB();
    console.log('App is listening...');
})

