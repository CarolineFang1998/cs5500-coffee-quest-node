import mongoose from "mongoose";
import dealsSchema from "./deals-schema.js";

const dealsModel = mongoose.model("deals", dealsSchema);

export default dealsModel;