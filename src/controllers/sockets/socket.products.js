const productsService = require('../../service/products/productsService');

const productsEvents = (io) => {
  return [
    {
      name: 'NEW-PRODUCT-TO-SAVE',
      callback: async (data) => {
        const productSaved = await productsService.save(data);
        io.sockets.emit('PRODUCT-SAVED', productSaved);
      },
    },
    {
      name: 'DELETE-PRODUCT',
      callback: async (id) => {
        await productsService.deleteById(id);
        io.sockets.emit('PRODUCT-DELETED', id);
      },
    },
  ];
};

module.exports = productsEvents;
