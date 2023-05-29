const {
    getById,
    post,
    postNewProduct,
    deleteProductById,
    updateQuantity,
    deleteAll,
} = require("../controllers/carts.controllers");
const router = require("express").Router();

router.get("/:cid", getById);

router.post("/", post);

router.post("/:cid/product/:pid", postNewProduct);

router.put("/:cid/product/:pid", updateQuantity);

router.delete("/:cid/product/:pid", deleteProductById);

router.delete("/:cid", deleteAll);

module.exports = router;
