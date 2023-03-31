class ProductManager {
    constructor(){
        this.products = []
    }

    getProducts() {
        return this.products
    }

    getById(code) {
        const findProd = this.products.find(product => product.code === code)
        if (!findProd) throw new Error('Not found')
        return findProd
    }

    nextId() {
        return this.products.length !== 0 ? this.products[this.products.length - 1].code + 1 : 1
    }

    addProduct(object) {
        if (object.length === 0) throw new Error('missing product info')

        object.code = this.nextId()
        this.products.push(object)
        console.log(`product code:${object.code} added}`)
    }
}

// class instace
const productManager = new ProductManager()

// test class methods
productManager.addProduct({
    title: `product1`,
    description: `product description`,
    price: 99,
    thumbnail: `http`,
    stock: 10
})

console.log(productManager.getProducts())
console.log(productManager.getById(1))