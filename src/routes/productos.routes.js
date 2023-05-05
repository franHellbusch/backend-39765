const {
  get,
  getById,
  post,
  updateById,
  deleteById,
} = require('../controllers/products.controllers');
const router = require('express').Router();

router.get('/', get);

router.get('/:pid', getById);

router.post('/', post);

router.put('/:pid', updateById);

router.delete('/:pid', deleteById);

module.exports = router;
