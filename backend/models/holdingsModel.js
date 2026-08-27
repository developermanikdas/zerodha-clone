import { model } from "mongoose";

import holdingSchema from "../schemas/holdingsSchema.js";

const holdingsModel = new model("holding", holdingSchema);

export default holdingsModel; 