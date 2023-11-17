import * as reviewsDao from "./reviews-dao.js";

function ReviewsController(app) {
        const findAllReviews = async (req, res) => {
        const reviews = await reviewsDao.findAllReviews();
        res.send(reviews);
    };
    const findReviewsByRestaurantId = async (req, res) => {
        const restaurantId = req.params.restaurantId;
        const reviews = await reviewsDao.findReviewsByRestaurantId(restaurantId);
        res.send(reviews);
    };
    const findReviewsByUserId = async (req, res) => {
        const userId = req.params.userId;
        const reviews = await reviewsDao.findReviewsByUserId(userId);
        res.send(reviews);
    };
    const deleteReview = async (req, res) => {
        const id = req.params.id;
        const status = await reviewsDao.deleteReview(id);
        res.json(status);
    };
    const createReview = async (req, res) => {
        const review = await reviewsDao.createReview(req.body);
        res.json(review);
    };

    app.get("/api/reviews", findAllReviews);
    app.get("/api/reviews/restaurant/:restaurantId", findReviewsByRestaurantId);
    app.get("/api/reviews/user/:userId", findReviewsByUserId);
    app.delete("/api/reviews/:id", deleteReview);
    app.post("/api/reviews", createReview);

}

export default ReviewsController;
