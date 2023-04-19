const router = require('express').Router();
const productos = require('./productos/productos.router');

router.use('/products', productos);

router.get('/health', (_req, res) => {
  res.status(200).json({
    success: true,
    health: 'up',
    environment: process.env.ENVIRONMENT || 'Not found',
  });
});

module.exports = router;
