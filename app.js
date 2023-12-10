import express from "express";
import cors from 'cors'
import UsersController from "./users/users-controller.js";
import mongoose from "mongoose";
import SessionController from "./users/session-controller.js";
import FollowsController from "./profile/follow/follows-controller.js";
import session from "express-session";
import SearchDetailController from "./search-detail/search-detail-controller.js";
import ReviewsController from "./reviews/reviews-controller.js";
import DealsController from "./Deals/deals-controller.js";
import FavoriteRestaurantsController from "./favoriteRestaurants/favoriteRestaurants-controller.js";
// connect to the local database
// mongoose.connect('mongodb://127.0.0.1:27017/tuiter');


// connect to the remote database
// the username is webproject and the password is supersecretpassword
const CONNECTION_STRING = 'mongodb+srv://webproject:supersecretpassword@cluster0.jffgpks.mongodb.net/final?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
        // origin: "https://yuhan-caroline-fang.netlify.app"
    })
);
app.use(express.json());

let sess = {
    secret: "process.env.SECRET",
    resave: false,
    cookie: { secure: false },
    saveUninitialized: true,
};

if (process.env.ENV === 'production') {
    app.set('trust proxy', 1)
    sess.cookie.secure = true;
}
app.use(session(sess));

app.get("/", function (req, res) {
    res.send("Welcome to Group 6's Final Project!");
});

SearchDetailController(app);
UsersController(app);
SessionController(app);
FollowsController(app);
ReviewsController(app);
DealsController(app);
FavoriteRestaurantsController(app);


app.listen(process.env.PORT || 4000);