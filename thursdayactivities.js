// // ticket system by reesa
// let age = 20

// if (age < 18){
// console.log("below 18")
// }
// else if (age >=18 && age < 60){
// console.log("above 18 below 60")
// }
// else
// console.log("above 60")

// // favourite color function
// // const favColor = (color) => {
// //     console.log(`my color is ${color}`)
// // }
// // favcolor(white);
// // favcolor(blue);
// // favcolor(green);

// // grind beans
// let coffeeIsGrinding = false;

// const pressGrindBeans = () => {
//     if (coffeeIsGrinding){
//         console.log("Stop Griding")
//     } else {
//         console.log("Griding....")
//     }

// }
// pressGrindBeans();

// // cash withdrawl
// let accnumber = 21736;

// const cashWithdrawl = (amount, accum) => {
//  console.log(`withdrawing ${amount} from account ${accum}`)
// }
// cashWithdrawl(200, accnumber);
// cashWithdrawl(200, accnumber);
// cashWithdrawl(200, accnumber);

// // const addUp = (num1, )

// let accnumber = 21736;

// const cashWithdrawl = (amount, accum) => {
//  console.log(`withdrawing ${amount} from account ${accum}`)
// }
// cashWithdrawl(200, accnumber);
// cashWithdrawl(200, accnumber);
// cashWithdrawl(200, accnumber);

// // const addUp = (num1, )

// // Activity 1 29/09/22 - Rowan
// const factorial = (n) => {
//     if((n==0) || (n== 1)){
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }
// console.log(factorial(3))

// edit snippet to include two parameters and a running
// order count updated when function is called

// let orderCount = 0;

// const takeOrder = (customer, topping, topping2) => {
//     console.log(`Customer ${customer} Ordered a Pizza with ${topping} and ${topping2}`);
//     console.log(`Order No. ${orderCount +1}`)
//     orderCount++;
// }

// takeOrder("dave", "pineapple", "salami");
// takeOrder("peter", "meat feast", "Pineapple");

// Dispense cash if pin number is correct and balance is equal to or
// more than amount trying to withdraw

import chalk from 'chalk';

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));

//account1 acts as a fau database holding customers name, account number, amount, and pin
let account1 = ["Dave", 6786575, 1000, 1234];

function withdraw(accountNum, amount, pin) {
  if (
    account1[1] === accountNum &&
    pin === account1[3] &&
    amount <= account1[2]
  ) {
    console.log(error(`
    account number = ${account1[1]} withdrawn ${amount} and ${pin}
    `));
    // remove money from account
  } else if (account1[1] !== accountNum) {
    console.log(`
    wrong account number
    `);
    // account
  } else if (
    account1[1] === accountNum &&
    pin === account1[3] &&
    amount >= account1[2]
  ) {
    console.log(`
    sorry ${account1[0]} you have insufficient funds to withdraw ${amount}
    your current balance is ${account1[2]}
    `);
  } else if (account1[1] === accountNum && pin !== account1[3]) {
    console.log(`
    incorrect pin
    `);
  } else {
    console.log(`
    Error
    `);
  }
}
withdraw(1234, 2000, 0000);
console.log(`
    should return wrong account number
`);
withdraw(6786575, 2000, 0000);
console.log(`
    should return incorrect pin
`);
withdraw(2000, 200, 1234);
console.log(`
    should return  wrong account number even though pin is correct
`);
withdraw(6786575, 200, 9999);
console.log(`
    should return incorrect pin even though account number is correct
`);
withdraw(6786575, 200, 1234);
console.log(`
    should withdraw money
`);
withdraw(6786575, 2000, 1234);
console.log(`
    should return not enough funds
`);
