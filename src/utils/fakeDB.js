const addToDb = (id) => {
    let shoppingCart = {}

    // get previous data from local Storage 
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }

    // get quantity 
    const quantity = shoppingCart[id]
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

// get card from local storage 
const getStoredCart = () => {
    const shoppingCart = {};

    // get previous data from local storage 
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart;
}

export { addToDb, getStoredCart }