// //Activity 1
// let favoriteFilms = [
//     "Enermy of the state",
//     "Law abiding citizen",
//     "Stranger Things",
//     "Terminator",
//     "Terminator 2",
//     "Matrix"
// ];

// favoriteFilms.push("Bad Boys", "White House Down");

// console.log(favoriteFilms);
// console.log("-------------------------------------")
// for(i = 0; i < favoriteFilms.length; i++){
//     console.log(favoriteFilms[i]);

// };

// Actitity 2

// Generate 6 random numbers from 1-50

// let randomnumber = Math.floor(Math.random() * 50) + 1 //the + 1 makes it so its not 0.
// let ammountNumbers = 6
// for (i = 0; i < ammountNumbers; i++ ){
//     randomnumber = Math.floor(Math.random() * 50) + 1 //the + 1 makes it so its not 0.
//     console.log(randomnumber)
// }

// console.log(randomnumber)

// Activity 3

// create a loop outputting number 9 - 0
//just created one in which you can set what number you want to loop from

// let amountNumbers = 9 // set the amount of numbers you would like listed here
// let loopNumber = amountNumbers+1;
// for(i = loopNumber-1; i > -1; i--){
//     console.log(i)
// }

// Activity 4
// Display 4 films stored in an array
// use a loop to show each film in the array
// use an if statement to check if 3rd is Ghostbusters
// if it is return "yay its's Ghostbusters" if not "boo we want Ghostbusters"
// changeable variables
// let listNumber = 3 //number in list wanted
// let filmWanted = "Ghostbusters" // film in list required to match with list number

// let favoriteFilms = [
//     "Enemy of the state",
//     "Law abiding citizen",
//     "Ghostbusters",
//     "Stranger Things",
//     "Terminator",
//     "Terminator 2",
//     "Matrix"
// ];

// for(i = 0; i < 1; i++){
//     console.log(favoriteFilms)
//     if (favoriteFilms[listNumber-1] == filmWanted)
//     {
//         console.log("yay its's Ghostbusters")
//     }
//     else{
//         console.log("boo we want Ghostbusters")
//     }
// }

// Activity 5
// Create a Variable generating a random number between 1-30 6 times
// for Each random number generated check if it is divisible by 7 or not

// let numberFrom = 30
// let amountNum = 6
// let numDivBy = 7
// let randomNumber = Math.floor(Math.random() * numberFrom) + 1 //the + 1 makes it so its not 0.

// for(i=0; i < amountNum; i++){
//     randomNumber = Math.floor(Math.random() * 30) + 1
//     //console.log(randomNumber)
//     if (randomNumber % numDivBy){
//         console.log(`${randomNumber} is Not Divisible by ${numDivBy}`)
//     }
//     else{

//         console.log(`${randomNumber} is Divisible by ${numDivBy}`)
//     }
// }
// //console.log(randomNumber)

//Activity 6
// create 2 arrays of followers bobsFollowers & hannahsFollowers
// in these arrays place 4 names make sure that there are 2 ma,es that are in both arrays
// using a nested loop iterated over both arrays and console.log the matching followers
// let bobsFollowers = [
//     "Chinonso",
//     "Neil",
//     "Rowan",
//     "Mishal"
// ];

// let hannahsFollowers = [
//     "Rowan",
//     "John",
//     "Brian",
//     "Mishal"
// ];

// for (i = 0; i < 1;i++){
//     console.log("List of Hannahs Followers " + hannahsFollowers.toString())
//     console.log("List of Bobs Followers " + bobsFollowers.toString())
// }
// console.log("checking if any match")

// // if (bobsFollowers.length !== hannahsFollowers.length) return console.log("false");
// let j = 0
// for (let i = 0; i < bobsFollowers.length; i++) {
//         for (let h = 0; h < hannahsFollowers.length; h++){
//             if (bobsFollowers[i] === hannahsFollowers[h]){
//             console.log("Match Found", bobsFollowers[i]);
//             }
//         }  
//     }
        // if (bobsFollowers[i] === hannahsFollowers[j]) {
        //     console.log("Match Found", bobsFollowers[i]);
        // }
        // else{
        //   console.log("Not A Match", bobsFollowers[i]);
        // }
// Activity 7
// Research do while loops find the diffences between "for loop", "while loop", and "do while loop"
// give examples of each what are the pros and cons

let scriptRan = false;
let scriptRunning = false;
let runTimes = 10;
let maxNumGen = 6
let numberGen = Math.floor(Math.random() * maxNumGen) + 1;
let chosenNums = [
    1,
    2,
    3
];
console.log(`scriptRan was set to ${scriptRan}`)
console.log(`scriptRunning was set to ${scriptRunning}`)
scriptRunning = true 
console.log(`scriptRunning is now set to ${scriptRunning}`)
scriptRan = true
console.log(`scriptRunning is now set to ${scriptRan}`)

// a for loop that runs the the amount of times set in the runTimes variable
for (i = 0; i < runTimes; i++){
    // changing the number generated and printing number to console
    numberGen = Math.floor(Math.random() * maxNumGen) + 1;
    console.log(`The Random Number Generated is ${numberGen}`)
    //nested for loop that checks 
    for (ng = 0; ng < chosenNums.length; ng++)

        if (chosenNums[ng] === numberGen){
            console.log("We have found a chosen number")
        }
        else {
            //console.log("print")
        }    
    console.log(`script running is set to ${scriptRunning}`)
}
console.log(scriptRan)


