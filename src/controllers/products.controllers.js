const productsService = require('../service/products/productsService');

const get = async (req, res, next) => {
  try {
    const products = productsService.getAll(req.params.limit);
    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const product = productsService.getById(req.params.pid);
    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

const post = async (req, res, next) => {
  try {
    const product = await productsService.save(req.body);
    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

const updateById = async (req, res, next) => {
  try {
    const product = await productsService.update(req.params.pid, req.body);
    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    next(error);
  }
};

const deleteById = async (req, res, next) => {
  try {
    await productsService.deleteById(req.params.pid);
    res.status(200).json({
      success: true,
      message: 'el producto fue eliminado',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { get, getById, post, updateById, deleteById };
