let todaysDate = new Date().getTime()
let birthday = new Date('July 18 2023').getTime()

let difference = Math.floor((birthday - todaysDate)/(24*60*60*1000))

console.log(`There are are ${difference} til my birthday`)