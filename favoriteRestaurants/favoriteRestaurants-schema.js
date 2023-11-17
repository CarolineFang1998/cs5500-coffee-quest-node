import mongoose from "mongoose";
const favoriteRestaurantsSchema = new mongoose.Schema(
    {
        userId: {type: mongoose.Schema.Types.ObjectId, ref: "users", required: true},
        restaurantId: String,
        restaurantName: String
    },
    {collection: "favoriteRestaurants"}
);

export default favoriteRestaurantsSchema;