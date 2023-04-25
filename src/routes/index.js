const router = require('express').Router();
const productsRouter = require('./productos.routes');
const cartsRouter = require('./carts.routes');

router.use('/products', productsRouter);
router.use('/carts', cartsRouter);

router.get('/health', (_req, res) => {
  res.status(200).json({
    success: true,
    health: 'up',
    environment: process.env.ENVIRONMENT || 'Development',
  });
});

module.exports = router;
