import mongoose from "mongoose";
import usersSchema from "./users-schema.js";
// name can be anything you want, but it is common to use the name of the table
const usersModel = mongoose.model("users", usersSchema);
export default usersModel;