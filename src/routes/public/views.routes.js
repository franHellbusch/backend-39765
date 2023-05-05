const router = require('express').Router();
const productsService = require('../../service/products/productsService');

router.get('/home', async (_req, res, next) => {
  try {
    const products = productsService.getAll();
    res.render('pages/home', { products });
  } catch (err) {
    next(err);
  }
});

router.get('/realTimeProducts', async (_req, res, next) => {
  try {
    const products = productsService.getAll();
    res.render('pages/realTimeProducts', { products });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
