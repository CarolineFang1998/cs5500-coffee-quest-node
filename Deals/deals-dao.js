import dealsModel from "./deals-model.js";

export const findAllDeals = async () => {
    const deals = await dealsModel.find();
    return deals;
}

export const findDealsByRestaurantId = async (restaurantId) => {
    const deals = await dealsModel.find({ restaurantID: restaurantId });
    return deals;
}

export const findDealsByUserId = async (userId) => {
    const deals = await dealsModel.find({ userID: userId });
    return deals;
}

export const deleteDeal = async (id) => {
    const status = await dealsModel.deleteOne({ _id: id });
    return status;
};

export const createDeal = async (deal) => {
    const newDeal = await dealsModel.create(deal);
    return newDeal;
};

export const updateDeal = (id, deal) => dealsModel.updateOne({_id: id}, {$set: deal});
