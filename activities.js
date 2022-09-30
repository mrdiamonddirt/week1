//activity 1 Stretch

// let age = 18;
// let country = "USA";

// if (age > 17 && country == "UK"){
//  console.log("Yes i can serve you")
// }
//     else {
//         console.log("You ain't old enough or in the wrong country")
//     }

let pizzaTopping = "Pineapple";

switch (pizzaTopping) {
  case "Peperoni":
  case "Ham":
  case "Cheese":
  case "Tomato":
    console.log(`I don't mind having ${pizzaTopping}`);
    break;
  case "Pineapple":
  case "cabbage":
  case "sweetcorn":
    console.log(`I Don't like ${pizzaTopping}`);
    break;
}

//activity 3
// let str = "googleisyourfriend";
// //let strLength = str.length;
// //console.log(strLength);
// if (str.length < 8) {
//   console.log("password is too short");
// } else {
//   console.log(str);
// }

//activity 3 stretch
// let num = 12;

// if (num % 3 == 0 || num % 5 == 0) {
//     console.log(`${num} is divisible by 3 or 5`);
// } 
// else {
//     console.log(`${num} is not divisible by 3 or 5`);
// }

//activity 4
let num = 19;
if (num % 3 == 0 && num % 5 == 0) {
    console.log("fizz buzz");
}
else if (num % 3 == 0) {
    console.log("fizz");
}
else if (num % 5 == 0) {
    console.log("buzz");
}
else {
    console.log(num)
}

//activity 5
// program to check if the string is palindrome or not

    let arrayValues = "1001";

    // convert string to an array
    const arrayValues = string.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }

// mishals palidrome

// let sum=0;
// let n=2102,r;
// temp=n;

// while(n>0)
// {
//     r=n%10;
//     sum=(sum*10)+r;
//     n=n/10;
// }

// if (temp=sum){
//     console.log("it is palindrome")}
//     else{
//         console.log("it is not palindrome")}