// 1- Comparaison

// const test = 143;
// const bis = 219;

// console.log (test > bis)
// console.log (test < bis)
// console.log (test >= bis)
// console.log (test <= bis)
// console.log (test === bis)
// console.log (test !== bis)


// 2- Condition

// const limit = 50;
// let score = 64;

// if (score >= limit) {
//     console.log("OK good !");
// }
// else {
//     console.log("Oh nooo...");
// }


// 3- Conditions II

// const password ="azerty";

// if (password.length > 5){
//     console.log ("The password is secure")
// }

// else {
//     console.log ("Password is not secured")
// }


// 4- Conditions III

// const limit = 50;
// let score = 64;
// const password ="azerty";

// if (score >= limit && password.length > 5) {
//     console.log("Everything is good !");
// }
// else if (score >= limit || password.length > 5){
//     console.log("Something is good")
// }
// else {
//     console.log ("Nothing is good")
// }


// 5- Random 

// const random = Math.floor(Math.random() * 6) + 1;
//     if (random === 6 ) {
//         console.log("Yes I win!");
//     }
//     // else {
//     //     console.log ("So close ...");
//     // }


// 6 - Month

// let month = "November";

// switch (month){
//     case "December":
//     case "January":
//     case "February":
//         console.log ("Winter");
//     break
//     case "March":
//     case "April":
//     case "May":
//         console.log ("Spring");
//     break
//     case "June":
//     case "July":
//     case "August":
//         console.log ("Summer");
//     break
//     case "September":
//     case "October":
//     case "November":
//     console.log ("Autumn");
//     break
// }

// 7- Rounded but better

// let roundedNumber =  12.6;

// if (roundedNumber - Math.floor(roundedNumber) >=0.5) {
//     roundedNumber = Math.ceil(roundedNumber);
//     console.log (roundedNumber)
// }

// else {
//     roundedNumber= Math.floor(roundedNumber);
//     console.log (roundedNumber)
// }


// 8- Rounded but better    

// let roundedNumber =  12.4;
// let roundedNumberStringed= roundedNumber.toString();

// let roundedNumberDecimalDot = roundedNumberStringed.indexOf(".") +1;
// let roundedNumberEnd = roundedNumberStringed.toString().length;

// let roundedNumberDecimal = roundedNumberStringed.substring (roundedNumberDecimalDot ,roundedNumberEnd)

// if (roundedNumberDecimal > 5) {
//     roundedNumber = Math.ceil(roundedNumber);
//     console.log (roundedNumber)
// }

// else {
//     roundedNumber = Math.floor(roundedNumber);
//     console.log (roundedNumber)
// }

// 9- Rounded but better, Méthode 3

// let roundedNumber =  12.6;
// let roundedNumberStringed= roundedNumber.toString();

// let roundedNumberArray = roundedNumberStringed.split(".");
// let roundedNumberDecimal = roundedNumberArray[1];

// if (roundedNumberDecimal > 5) {
//         roundedNumber = Math.ceil(roundedNumber);
//         console.log (roundedNumber)
// }
    
// else {
//         roundedNumber = Math.floor(roundedNumber);
//         console.log (roundedNumber)
// }










    
