import { getStoredCart } from "../utils/fakeDB";

const productsAndCartData = async () => {
    // fetch product data 
    const productsData = await fetch('products.json')
    const products = await productsData.json()

    // get stored data from local storage 
    const savedCart = getStoredCart()
    let cart = []

    // get localStorage object key by for in
    for (const id in savedCart) {
        const foundProduct = products.find(product => product.id === id)
        if (foundProduct) {
            // set quantity key and value

            foundProduct.quantity = savedCart[id]
            cart.push(foundProduct)
        }
    }
    return cart;
}

export { productsAndCartData }