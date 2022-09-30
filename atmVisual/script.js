let accounts = [
    {
    accNum:12345678,
    CID: "ab12345678",
    balance: 5000,
    pin: 1234,
    },
    {
    accNum:12345680,
    CID: "ab12345678",
    balance: 1000,
    pin: 1234,
    }
];
let Users = [
    {
        Name: "John",
        CID: "ab12345678",
    },
    {
        Name: "Rowan",
        CID: "ab12345680",
    }
]

for ( let i=0; i < accounts.length; i++ ){
    for ( let u=0; u < Users.length; u++ )
    {
    if (accounts[i].CID === Users[u].CID) {
        console.log(`Account Matched ${accounts[i].accNum} ${Users[u].Name} ${accounts[i].balance}`)
        document.getElementById("customerName").textContent = Users[u].Name
        document.getElementById("inputAmount").placeholder = "Enter Pin"
    }
    }
}


const element1=document.getElementsByClassName("action gray").innerHTML;
//  var element.innerHTML = "Set Inner!";
// console.log(document.getElementsByClassName("action gray"));

var element2=document.getElementsByClassName("input").value;
console.log(document.getElementsByClassName("input"));
console.log(document.getElementsByClassName("print"));
var display = document.getElementById("inputAmount").value;
console.log(document.getElementById("currentBalance").innerHTML= accounts[0].balance,);

//buttons
// var number1btn = document.getElementById('number1')
// number1btn.onclick = function() {
//     document.getElementById('inputAmount').value = document.getElementById('inputAmount').value + 1;
//     console.log(`button was clicked ${document.getElementById("inputAmount").value + 1}`);
//     ;
// };

// var cancelBtn = document.getElementById('cancelBtn');
// cancelBtn.onclick = function() {
//     console.log(`button was clicked ${document.getElementById("inputAmount").value = ""}`);
// };

document.getElementById('number0').onclick = function(){
    clickedButton(0);
};
document.getElementById('number1').onclick = function(){
    clickedButton(1);
};
document.getElementById('number2').onclick = function(){
    clickedButton(2);
};
document.getElementById('number3').onclick = function(){
    clickedButton(3);
};
document.getElementById('number4').onclick = function(){
    clickedButton(4);
};
document.getElementById('number5').onclick = function(){
    clickedButton(5);
};
document.getElementById('number6').onclick = function(){
    clickedButton(6);
};
document.getElementById('number7').onclick = function(){
    clickedButton(7);
};
document.getElementById('number8').onclick = function(){
    clickedButton(8);
};
document.getElementById('number9').onclick = function(){
    clickedButton(9);
};

function clickedButton(buttonPressed){
    document.getElementById('inputAmount').value = document.getElementById('inputAmount').value + buttonPressed;
    console.log(`button was clicked ${document.getElementById("inputAmount").value}`);
    console.log();
}


//adds number value to input value
// var number2btn = document.getElementById('number2')
// number2btn.onclick = function() {
//     document.getElementById('inputAmount').value = parseInt(document.getElementById('inputAmount').value) + 2;
//     // return document.getElementById("inputAmount").value += 2, 
//     console.log(`button was clicked ${document.getElementById("inputAmount").value}`);
// };

// Cash Machine
// The problem
// Develop an application that simulates the delivery of banknotes when a customer makes a withdrawal at an ATM.

// Your application should:

// Always deliver as few notes as possible
// Withdraw values ​​only with available notes
// Have infinite customer balance
// Have infinite amount of notes
// Hold only BRL 100.00, BRL 50.00, BRL 20.00 and BRL 10.00 bills
// Return error messages in case of invalid entries
// Observation:

// Examples:
// Entry: 30.00
// Result: [20.00, 10.00]

// Entry: 80.00
// Result: [50.00, 20.00, 10.00]

// Input: 125.00
// Result: Unavailable notes error

// Input: -130.00
// Result: Invalid value error

// Input: NULL
// Result: Null value error

