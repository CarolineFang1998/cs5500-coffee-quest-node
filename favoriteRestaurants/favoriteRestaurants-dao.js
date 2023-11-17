import favoriteRestaurantsModel from "./favoriteRestaurants-model.js";

export const findFavRestaurantsByUserId = async(userId) => {
    const favRestaurants = await favoriteRestaurantsModel.find({userId: userId});
    return favRestaurants;
};

export const favoriteRestaurants = async(userId, restaurantId, restaurantName) => {
    const newFavRestaurant = await favoriteRestaurantsModel.create({userId: userId, restaurantId: restaurantId, restaurantName: restaurantName});
    return newFavRestaurant;
};

export const unFavoriteRestaurant = async(userId, restaurantId) => {
    const unFavRestaurant = await favoriteRestaurantsModel.deleteMany({restaurantId: restaurantId, userId: userId});

    return unFavRestaurant;
};



// export const unFavoriteRestaurant = async(restaurantId) => {
//     const unFavRestaurant = await favoriteRestaurantsModel.deleteOne({restaurantId: restaurantId});
//     return unFavRestaurant;
// };


