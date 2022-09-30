import chalk from 'chalk';

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color
const success = chalk.bold.green;

console.log(error('Error!'));
console.log(warning('Warning!'));
console.log(success('Success!'));

//account1 acts as a fau database holding customers name, account number, amount, and pin
let accounts = {
  name: [
    "Dave",
    "Niel",
    "Brian"
   ],
    clientNo: [
      6786575,
      6786574,
      6786573,
    ],
    amount: [
      1000,200,-20,
    ],
    pin:[
      1234,
      9999,
      7894
    ],
};


function withdraw(accountNum, amountReq, pin) {
  if (
    accounts.clientNo[0] !== accountNum
    ) {
    console.log(error(`
    wrong account number
    `));
    // checks account number
  } else if 
  (
    pin !== accounts.pin[0]
    ) {
    console.log(error(`
    incorrect pin
    `));
  } else if (
    amountReq >= accounts.amount[0]
  ) {
    console.log(warning(`
    sorry ${accounts.name[0]} you have insufficient funds to withdraw ${amountReq}
    your current balance is ${accounts.amount[0]}
    `));
  } else {
    console.log(success(`
    account number = ${accounts.clientNo[0]} withdrawn ${amountReq}
    `));
    // remove money from account
  }
}
withdraw(1234, 2000, 1111);
console.log(error(`
    should return wrong account number
`));
withdraw(6786575, 2000, 1111);
console.log(error(`
    should return incorrect pin
`));
withdraw(2000, 200, 1234);
console.log(warning(`
    should return  wrong account number even though pin is correct
`));
withdraw(6786575, 200, 9999);
console.log(warning(`
    should return incorrect pin even though account number is correct
`));
withdraw(6786575, 200, 1234);
console.log(success(`
    should withdraw money
`));
withdraw(6786575, 2000, 1234);
console.log(warning(`
    should return not enough funds
`));

withdraw(6786575, 0, 1234);
console.log(`Balance = ${accounts.amount[0]}`)