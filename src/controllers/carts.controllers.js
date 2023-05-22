const cartsService = require("../service/carts.service");

const getById = async (req, res, next) => {
    try {
        const cart = await cartsService.getById(req.params.cid);
        res.status(200).json({
            success: true,
            cart,
        });
    } catch (err) {
        next(err);
    }
};

const post = async (_req, res, next) => {
    try {
        const cart = await cartsService.save();
        res.status(200).json({
            success: true,
            cart,
        });
    } catch (err) {
        next(err);
    }
};

const postNewProduct = async (req, res, next) => {
    try {
        const cart = await cartsService.setNewProduct(
            req.params.cid,
            req.params.pid
        );
        res.status(200).json({
            success: true,
            cart,
        });
    } catch (err) {
        next(err);
    }
};

const deleteProductById = async (req, res, next) => {
    try {
        const message = await cartsService.deleteProduct(
            req.params.cid,
            req.params.pid
        );
        res.status(200).json({
            success: true,
            message,
        });
    } catch (err) {
        next(err);
    }
};

module.exports = { getById, post, postNewProduct, deleteProductById };
