console.log("All Around the world".charAt(7).toUpperCase());

let number = 10
number ++
console.log(number)

let favouriteDrink = "coffee";
console.log("My favourite drink is " + favouriteDrink);
//concatenation

// let name = 'chris';
// let age = 27;
// let favDrink = 'Coffee';

// console.log(`Hi my name is ${name}. I am ${age} and my favourite drink is ${favDrink}.`)

// ---- STRETCH - Grid => Solution using loops

// Set lines and dashes as Array and string, respectively
const linesArray =["   |   |", "   |   |", "   |   |" ];
const dashes = "-----------"


// Loop over the code 3x => For each element in line array => log the value => log dashes if counter is < 2
for (let counter=0; counter<3; counter++){
    linesArray.forEach( (element) => console.log(element)  );
    
    if(counter<2){
        console.log(dashes);
    }
}

const emptySpaceLessDry = "       |       |\n".repeat(3)
// const emptySpace = "       |".repeat(2) //comment out if using const emptySpaceNotDry
const line = "-".repeat(23)
var table = [emptySpaceLessDry,line,emptySpaceLessDry,line,emptySpaceLessDry];
// if using emptySpaceLessDry replace all 3 emptySpace's with 1 emptySpaceLessDry
for(var i in table){
    console.log(table[i]);
}

//activity 1
let name = 'neil';
let age = 42;
let favColor = 'Rainbow';

console.log(`Hi my name is ${name}. I am ${age} and my favourite color is ${favColor}.`);

name = 'not neil';
age = 12;
favColor = 'none';

console.log(`Hi my name is ${name}. I am ${age} and my favourite color is ${favColor}.`)

// if else statements
if (1 === "1"){
console.log("true")
}
else {
    console.log("false")
}

//conditional operator
let age2 = 18;
(age2 <== 18) ? console.log('Too Young') : console.log('Old Enough')

//switch expressions
switch(expression){
    case x:
        // code here
        break;
    case y:
        //code here
        break;
    default:
        //code here
}