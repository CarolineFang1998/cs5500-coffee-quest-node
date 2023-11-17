import favoriteRestaurantsSchema from "./favoriteRestaurants-schema.js";
import mongoose from "mongoose";
const favoriteRestaurantsModel = mongoose.model("favoriteRestaurants", favoriteRestaurantsSchema);
export default favoriteRestaurantsModel;