// day 3 exercise 2

// question 13 Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

let birthYear = prompt("Enter birth year: ");

let age = new Date().getFullYear() - birthYear;

age >= 18 ? alert(`You are ${age}. You are old enough to drive`) : alert(`You are ${age}. You will be allowed to drive after  ${18 - age} years.`);


// question 14

