// day 3 exercise 2

// question 13 Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

let birthYear = prompt("Enter birth year: ");

let age = new Date().getFullYear() - birthYear;

age >= 18 ? alert(`You are ${age}. You are old enough to drive`) : alert(`You are ${age}. You will be allowed to drive after  ${18 - age} years.`);


// question 14 Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

let Year = prompt("Enter number of years you live: ");

let Seconds = Year * 31536000;

alert(`You lived ${Seconds} seconds.`);

// 15. Create a human readable time format using the Date time object

let YYYY = new Date().getFullYear();
let MM = new Date().getMonth();
let DD = new Date().getDay();
let HH = new Date().getHours();
let mm = new Date().getMinutes();

console.log(`${YYYY}-${MM}-${DD} ${HH}:${mm}`);
console.log(`${DD}-${MM}-${YYYY} ${HH}:${mm}`);
console.log(`${MM}-${DD}-${YYYY} ${HH}:${mm}`);

//  exercise 3

// question 1 Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )


let YYYY1 = new Date().getFullYear();
let MM1 = String(new Date().getMonth() + 1).padStart(2, "0");
let DD1 = String(new Date().getDate()).padStart(2, "0");
let HH1 = String(new Date().getHours()).padStart(2, "0");
let mm1 = String(new Date().getMinutes()).padStart(2, "0");

console.log(`${YYYY1}-${MM1}-${DD1} ${HH1}:${mm1}`);
