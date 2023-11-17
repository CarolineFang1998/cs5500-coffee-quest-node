import * as followsDao from "./follows-dao.js";

function FollowsController(app) {
  const createFollow = async (req, res) => {
    const followed = req.body.followed;
    const following = req.body.following;
    const findFollowed = await followsDao.findIsFollowedById(followed, following);
    if (findFollowed) {
        res.json({});
    } else {
        const newFollow = await followsDao.createFollow(followed, following);
        res.json(newFollow);
    }
  };

  const findFollowingByFollowed = async (req, res) => {
    const userId = req.params.userId;
    const followers = await followsDao.findFollowingByFollowed(userId);
    res.json(followers);
  };

  const findFollowedByFollowing = async (req, res) => {
    const userId = req.params.userId;
    const followed = await followsDao.findFollowedByFollowing(userId);
    res.json(followed);
  };

  const unfollow = async (req, res) => {
    const followed = req.body.followed;
    const following = req.body.following;
    const status = await followsDao.unfollow(followed, following);
    if (status.deletedCount === 1) {
        res.json({followed: followed, following: following, unfollow: true});
    } else {
        res.json({followed: followed, following: following, unfollow: false});
    }
  };

  const findIsFollowedById = async (req, res) => {
    const followed = req.query.followed;
    const following = req.query.following;
    const findFollowed = await followsDao.findIsFollowedById(followed, following);
    if (findFollowed) {
        res.sendStatus(200);
    } else {
        res.sendStatus(204)
    }
  }

  app.post("/api/users/follows", createFollow);
  app.get("/api/users/follows/followers/:userId", findFollowingByFollowed);
  app.get("/api/users/follows/following/:userId", findFollowedByFollowing);
  app.delete("/api/users/follows/unfollows", unfollow);
  app.get("/api/users/follows/isFollowed", findIsFollowedById);
}
export default FollowsController;