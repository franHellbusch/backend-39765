const productsService = require("../../service/products.service");

const productsEvents = (io) => {
    return [
        {
            name: "NEW-PRODUCT-TO-SAVE",
            callback: async (data) => {
                const productSaved = await productsService.save(data);
                io.sockets.emit("PRODUCT-SAVED", productSaved);
            },
        },
        {
            name: "DELETE-PRODUCT",
            callback: async (id) => {
                const deletedProduct = await productsService.deleteById(id);
                io.sockets.emit("PRODUCT-DELETED", deletedProduct);
            },
        },
    ];
};

module.exports = productsEvents;
