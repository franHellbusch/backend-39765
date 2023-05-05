const {
  getById,
  post,
  postNewProduct,
  deleteProductById,
} = require('../controllers/carts.controllers');
const router = require('express').Router();

router.get('/:cid', getById);

router.post('/', post);

router.post('/:cid/product/:pid', postNewProduct);

router.delete('/:cid/product/:pid', deleteProductById);

module.exports = router;
