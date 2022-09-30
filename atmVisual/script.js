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

const element1=document.getElementsByClassName("action gray").innerHTML;
console.log(document.getElementById("currentBalance").innerHTML= "Not Logged In",);
document.getElementById("inputAmount").placeholder = "Enter Account No."

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
document.getElementById('gdp100').onclick = function(){
    clickedButtonAddAmt(100);
};
document.getElementById('gdp50').onclick = function(){
   clickedButtonAddAmt(50);
};
document.getElementById('gdp20').onclick = function(){
   clickedButtonAddAmt(20);
};
document.getElementById('gdp10').onclick = function(){
   clickedButtonAddAmt(10);
};

// clearing and resetting input
document.getElementById('cancelBtn').onclick = function(){
    clickedButtonCnl("Cleared");
    setTimeout(() => {
        console.log(`${document.getElementById('inputAmount').value}`)
        //clickedButtonCnl("EnterPin");
        document.getElementById('inputAmount').value = "";
    }, 5000);
    
};
// cancel button function
function clickedButtonCnl(buttonPressed){
    document.getElementById('inputAmount').value = buttonPressed;
    console.log(`button was clicked ${document.getElementById("inputAmount").value}`);
};



document.getElementById('confirmBtn').onclick = function(){
    clickedButtonConf();
    console.log(`${document.getElementById('inputAmount').value}`)
 };

var loggedIn = false;
// confirm button function
function clickedButtonConf(buttonPressed){
    console.log(`${buttonPressed}`)
    // return document.getElementById('inputAmount').value
    console.log(`${document.getElementById('inputAmount').value}`)
    for ( let i=0; i < accounts.length; i++ ){
        for ( let u=0; u < Users.length; u++ ){
        if (document.getElementById("inputAmount").value == accounts[i].accNum) {
            console.log(`Account Matched ${accounts[i].accNum} ${Users[u].Name} ${accounts[i].balance}`)
            document.getElementById("customerName").textContent = Users[u].Name
            document.getElementById('inputAmount').value = "";
            document.getElementById('inputAmount').placeholder = "Logging in";
            loggedIn = true,
            setTimeout(() => {
                    document.getElementById('inputAmount').placeholder = `Enter Pin`;
                }, 2500);
        } else if (document.getElementById("inputAmount").value !== accounts[i].accNum){
            console.log("not valid")
        }
        }
    }
    var pinChecked = false;
    if (loggedIn == true){
        console.log("login confirmed")
        for ( let i=0; i < accounts.length; i++ ){
                if (document.getElementById("inputAmount").value == accounts[i].pin){
                    console.log("check pin")
                    document.getElementById("currentBalance").innerHTML= accounts[i].balance;
                    console.log("Pin Confirmed")
                    pinChecked = true;
                    document.getElementById("inputAmount").value = "";
                    setTimeout(() => {
                        document.getElementById("inputAmount").placeholder = "Pin Confirmed";
                        setTimeout(() => {
                            document.getElementById("inputAmount").placeholder = `Your Balance is ${accounts[i].balance}`;
                        }, 2000);
                    }, 2000);
                    

                } else {
                    console.log("incorrect pin")
                }
            }
    } else {
        console.log("Else")
    }
    if (loggedIn & pinChecked) {
        console.log("print")
    } else {
        console.log("print2")
    }
};

// add amount button function
function clickedButtonAddAmt(buttonPressed){
    if (document.getElementById('inputAmount').value == 0 ){ //check if input is equal to nan if so error
        console.log("there is no value to add to") //log
        document.getElementById("inputAmount").placeholder = "Error" //
        setTimeout(() => { //wait
            document.getElementById("inputAmount").placeholder = "Enter Account Number" //reset placeholder back to Enter Pin
        }, 2000); //2 seconds
    } else if (document.getElementById('inputAmount').value !== "0" ){ // if not 0 allow input to be added
        document.getElementById('inputAmount').value = parseInt(document.getElementById('inputAmount').value) + buttonPressed;
        console.log("add value")
    } else { // not needed but here for reference
        console.log("error")
    }
}; 

// add number to string button function
function clickedButton(buttonPressed){
    document.getElementById('inputAmount').value += buttonPressed;
    console.log(`button was clicked ${document.getElementById("inputAmount").value}`);
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

