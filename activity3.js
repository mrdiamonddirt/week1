let coffeeShop = {
    branch:"RowDog coffee",
    drinksPrices: {
        drinks:[
        "tea",
        "coffee",
        ],
        prices: [
            100,
            240,
        ],
    },
    foodPrices: {
        food:[
        "Pizza",
        "Apple Pie",
        ],
        prices: [
            320,
            220,
        ],
    },
    drinksOrdered(){
        return "Your order is" + this.coffeeShop.drinks
    },
    foodOrdered(){
        return "your order is"
    },
}
console.log(coffeeShop.drinksOrdered())