import followsModel from "./follows-model.js";

export const createFollow = async (followed, following) => {
  const newFollow = await followsModel.create({followed: followed, following: following});
  return newFollow;
};

export const findFollowingByFollowed = async (userId) => {
   return await followsModel.find({ followed: userId })
  .populate("following", "username")
  .exec();
};

export const findFollowedByFollowing = async (userId) => {
  const followed = await followsModel.find({ following: userId })
  .populate("followed", "username")
  .exec();
  return followed;
};

export const unfollow = async (followed, following) => {
    const deletedFollow = await followsModel.deleteOne({followed: followed, following: following});
    return deletedFollow;
};

export const findIsFollowedById = async (followed, following) => {
    const findFollowed = await followsModel.findOne({followed: followed, following: following});
    return findFollowed;
}