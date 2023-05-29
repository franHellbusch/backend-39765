const router = require("express").Router();
const cartsService = require("../../service/carts.service");
const messagesService = require("../../service/messages.service");
const productsService = require("../../service/products.service");

router.get("/home", async (req, res, next) => {
    try {
        const { page, sort, query } = req.query;
        const cart = await cartsService.save();
        const data = await productsService.getAllPaginate({
            page,
            sort,
            query,
        });
        res.render("pages/home", { data, cart: cart._id });
    } catch (err) {
        next(err);
    }
});

router.get("/carts/:cid", async (req, res, next) => {
    try {
        const { cid } = req.params;
        const cart = await cartsService.getById(cid);
        res.render("pages/carts", { cart });
    } catch (err) {
        next(err);
    }
});

router.get("/realTimeProducts", async (_req, res, next) => {
    try {
        const data = await productsService.getAll();
        res.render("pages/realTimeProducts", { products: data });
    } catch (err) {
        next(err);
    }
});

router.get("/chat", async (_req, res, next) => {
    try {
        const messages = await messagesService.getAll();
        res.render("pages/chat", { messages });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
