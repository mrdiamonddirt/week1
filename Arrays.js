let favoriteDrinks = [
    "coffee",
    "Oasis",
    "chocolate"
];

favoriteDrinks.push("Yorkshire Tea Gold") //adds item to the coffee order array

//favoriteDrinks.pop() //removes the last item

favoriteDrinks.splice(1, 1) //starts from first value and removes one value
//favoriteDrinks.shift() //
//favoriteDrinks.map() //function that goes through each item in the array
//favoriteDrinks.shift()
//favoriteDrinks.unshift()


console.log(favoriteDrinks.length) //returns length of array
console.log(favoriteDrinks[0],favoriteDrinks[2]) //returns array value 0 and 2 which is 1 and 3 in the list
console.log(favoriteDrinks[1].length) 
console.log(favoriteDrinks[1].length)
console.log(favoriteDrinks[2])
console.log("------------------------")
console.log(favoriteDrinks)
console.log("------------------------")

for (let i = 0; i < favoriteDrinks.length; i++){ //loop that goes through the array and does thats in the code block
    console.log(favoriteDrinks[i]); //console logs the whole of the array
} ;

let multiplesTwo = [];

for(let i = 0; i < 20; i++){
    if (i%2 == 0){
        multiplesTwo.push(i);
    }

}
console.log(`Numbers ${multiplesTwo}`)