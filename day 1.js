// 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let theString = 'You cannot end a sentence with because because because is a conjunction';

let lastIndex = theString.lastIndexOf("because");

console.log("The last index of the work 'because' is " + lastIndex);


// 25. Use repeat() method to print 30 Days Of JavaScript 2 times

let stringOut = "30 Days fo JavaScript";
console.log(stringOut.repeat(2));

// exercise 2


// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.

let String6 = "I hope this course is not full of jargon";

let result6 = String6.includes("jargon");

console.log(result6);

// 11. Use console.log() and escape characters to print the following pattern.

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");


// exercise 3

// 12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

let string12 = 'You cannot end a sentence with because because because is a conjunction';

let index12 = string12.indexOf("because because because");
let length12 = "because because because".length;

string12.substr(index12, length12);