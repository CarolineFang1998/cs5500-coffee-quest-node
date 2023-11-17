import * as favoriteRestaurantsDao from './favoriteRestaurants-dao.js';

const FavoriteRestaurantsController = (app) => {
    const favoriteRestaurant = async (req, res) => {
        const userId = req.params.userId;
        const restaurantId = req.params.restaurantId;
        const restaurantName = req.params.restaurantName;
        console.log("fav");
        console.log(req.params);
        const status = await favoriteRestaurantsDao.favoriteRestaurants(userId, restaurantId, restaurantName);
        res.json(status);
    };

    const findFavRestaurantsByUserId = async (req, res) => {
        const userId = req.params.userId;
        const favRestaurants = await favoriteRestaurantsDao.findFavRestaurantsByUserId(userId);
        res.json(favRestaurants);
    };

    const unFavoriteRestaurant = async (req, res) => {
        console.log(req.params);
        const restaurantId = req.params.restaurantId;
        const userId = req.params.userId;
        const status = await favoriteRestaurantsDao.unFavoriteRestaurant(userId, restaurantId);
        res.json(status);
    };

    app.post("/api/users/:userId/favoriteRestaurants/:restaurantId/:restaurantName", favoriteRestaurant);
    app.get("/api/users/:userId/favoriteRestaurants", findFavRestaurantsByUserId);
    app.delete("/api/users/:userId/favoriteRestaurants/:restaurantId", unFavoriteRestaurant);
};

export default FavoriteRestaurantsController;