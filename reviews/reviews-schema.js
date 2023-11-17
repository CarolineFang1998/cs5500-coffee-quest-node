import mongoose from "mongoose";
import moment from "moment-timezone";
const dateUS = moment().tz("America/Los_Angeles").format("YYYY-MM-DD HH:mm:ss");
console.log(dateUS);
const reviewsSchema = new mongoose.Schema(
    {
       
        restaurantID: { type: String, required: true },
        restaurantName: { type: String, required: false },
        userID: { type: String, required: true },
        username: { type: String, required: true },
        review: { type: String, required: true },
        date: { type: Date, default: dateUS }
    },
    {
        collection: "reviews",
    }
);

export default reviewsSchema;