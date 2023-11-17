import * as dealsDao from "./deals-dao.js";

function DealsController(app) {
    const findAllDeals = async (req, res) => {
        const deals = await dealsDao.findAllDeals();
        res.send(deals);
    };
    const findDealsByRestaurantId = async (req, res) => {
        const restaurantId = req.params.restaurantId;
        const deals = await dealsDao.findDealsByRestaurantId(restaurantId);
        res.send(deals);
    };
    const findDealsByUserId = async (req, res) => {
        const userId = req.params.userId;
        const deals = await dealsDao.findDealsByUserId(userId);
        res.send(deals);
    };
    const deleteDeal = async (req, res) => {
        const id = req.params.id;
        const status = await dealsDao.deleteDeal(id);
        res.json(status);
    };
    const createDeal = async (req, res) => {
        const deal = await dealsDao.createDeal(req.body);
        res.json(deal);
    };

    const updateDeal = async (req, res) => {
        const id = req.params.id;
        const deal = req.body;
        const status = await dealsDao.updateDeal(id, deal);
        res.json(status);
    };

    app.get("/api/deals", findAllDeals);
    app.put("/api/deals/:id", updateDeal);
    app.get("/api/deals/restaurant/:restaurantId", findDealsByRestaurantId);
    app.get("/api/deals/user/:userId", findDealsByUserId);
    app.delete("/api/deals/:id", deleteDeal);
    app.post("/api/deals", createDeal);

}

export default DealsController;
