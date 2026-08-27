import { model } from "mongoose";

import positionSchema from "../schemas/positionsSchema.js";

const positionsModel = new model("position", positionSchema);

export default positionsModel; 