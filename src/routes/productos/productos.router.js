const products = require('../../service/products');
const router = require('express').Router();

router.get('/:limit?', (req, res, next) => {
  try {
    const productos = products.getAll(req.params.limit);
    if (productos.length === 0) {
      return res.status(202).json({
        message: 'no hay productos disponibles',
      });
    }
    res.status(200).json(productos);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', (req, res, next) => {
  try {
    const product = products.getById(req.params.id);
    if (product === null) {
      return res.status(404).json({
        error: 'producto no encontrado',
      });
    }
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    await products.save(req.body);
    res.redirect('/public/index.html');
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const changedProduct = await products.changeById(req.params.id, req.body);
    if (!changedProduct) {
      return res.status(404).json({
        error: 'producto no encontrado',
      });
    }
    res.status(200).json({
      message: 'el producto fue actualizado',
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await products.deleteById(req.params.id);
    res.status(200).json({
      message: 'el producto fue eliminado',
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
