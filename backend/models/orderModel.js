import { model } from "mongoose";
import ordersSchema from "../schemas/ordersSchema.js";

const orderModel = new model("order", ordersSchema);

export default orderModel; 