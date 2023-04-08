const addToDb = (id) => {
    let shoppingCard = {}

    // get previous data from local Storage 
    const storedCard = localStorage.getItem('shopping-card')
    if (storedCard) {
        shoppingCard = JSON.parse(storedCard)
    }

    // get quantity 
    const quantity = shoppingCard[id]
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCard[id] = newQuantity;
    }
    else {
        shoppingCard[id] = 1;
    }

    localStorage.setItem('shopping-card', JSON.stringify(shoppingCard))
}

export { addToDb }