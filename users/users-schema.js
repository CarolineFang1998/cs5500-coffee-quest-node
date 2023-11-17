import mongoose from "mongoose";
const usersSchema = new mongoose.Schema(
    {
        username: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        firstName: String,
        lastName: String,
        email: { type: String },
        role: { type: String, default: "USER", enum: ["USER", "ADMIN", "OWNER"] },
        canReview: { type: Boolean, default: true },
        restaurantID: { type: String, required: false},
        restaurantName: { type: String},
        favRestaurants: { type: Array, required: false, default: [] },
        zipcode: { type: String }

        // todo: completed by copilot, need to change
        // Reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "reviews" }],
        // favRestaurants: [{ type: mongoose.Schema.Types.ObjectId, ref: "restaurants" }],
        // fowllowers: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
        // following: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
    },
    {
        collection: "users",
    }
);
export default usersSchema;