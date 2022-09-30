let accounts = {
    accNum:[
    12345678,
    12452321,
    ],
    CID:[
    "ab12345678",
    ],
    balance:[
    100000,
    ],
    pin:[
    1234,
    ]
}

const element1=document.getElementsByClassName("action gray").innerHTML;
//  var element.innerHTML = "Set Inner!";
// console.log(document.getElementsByClassName("action gray"));

var element2=document.getElementsByClassName("input").value;
console.log(document.getElementsByClassName("input"));
console.log(document.getElementsByClassName("print"));
var display = document.getElementById("inputAmount").value;
console.log(document.getElementById("currentBalance").innerHTML= accounts.balance[0],);

var number1btn = document.getElementById('number1')
number1btn.onclick = function() {
    console.log(`button was clicked ${document.getElementById("inputAmount").value++}`);
    ;
};

var cancelBtn = document.getElementById('cancelBtn');
cancelBtn.onclick = function() {
    console.log(`button was clicked ${document.getElementById("inputAmount").value = 0}`);
};

var number2btn = document.getElementById('number2')
number2btn.onclick = function() {
    document.getElementById('inputAmount').value = document.getElementById('inputAmount').value + 2;
    // return document.getElementById("inputAmount").value += 2, 
    console.log(`button was clicked ${document.getElementById("inputAmount").value += 2 }`);
};

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

