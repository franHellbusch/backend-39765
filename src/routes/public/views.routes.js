const router = require("express").Router();
const messagesService = require("../../service/messages.service");
const productsService = require("../../service/products.service");

router.get("/home", async (_req, res, next) => {
    try {
        const products = productsService.getAll();
        res.render("pages/home", { products });
    } catch (err) {
        next(err);
    }
});

router.get("/realTimeProducts", async (_req, res, next) => {
    try {
        const products = await productsService.getAll();
        res.render("pages/realTimeProducts", { products });
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
