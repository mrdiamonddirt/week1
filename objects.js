// let alarm  = {
//     weekendAlarm: "no Alarm Needed",
//     weekdayAlarm: "get up at 7am"
// }

// let day = "Thursday";
// let message = '';

// if (day === "saturday" || day === "Sunday"){
//     message = alarm.weekendAlarm
// } else {
//     message = alarm.weekdayAlarm;
// }

let person = {
    name: "Rowan",
    favoriteSongs: [
        "Backstreet boys",
        "gucci gang"
    ],
    sayHi(){
        return `Hi i'm ${this.name} `
    }

}

console.log(person.favoriteSongs[1])
person.name = "Dave"
console.log(person.intro())
console.log(`this is my favourite songs ${person.favoriteSongs}`)