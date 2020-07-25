console.log("We are at tutorial- #6");

const name = "Sritej";
const greeting = 'Good Morning';

console.log(greeting +" "+ name);

let words;
words = "This is the first sentence"+ "and here it is ending.";
words = words.concat(' Starting the second sentence', ' end of the sentence.');

console.log("Display: ", words);
console.log("Displaying its length", words.length);
console.log("Converting to lowercase:", words.toLowerCase());
console.log("Converting to upperCase:", words.toUpperCase());

console.log(words[0]);
console.log(words[1]);
console.log(words[2]);
console.log(words[3]);

// index -off
//It gives you or locate on which index point is the word
console.log(words.indexOf("T"));
//Gives you the last value of the sentence
console.log(words.lastIndexOf("."));
//Shows what value is on that given position
console.log(words.charAt("3"));
//its a boolean value
console.log(words.endsWith("."));
//Given value is there or not, applicable even when space is there?
console.log(words.includes(". "));
//.slice()|| is used to get the given number of values 
console.log(words.slice(9));
//separate with whatever is given 
console.log(words.split(' '));
//This will replace only the first occurrence
console.log(words.replace("This", "It"));


let KTM = "Duke200";
let triumph = "Triple RS";
let myPage = `Hello ${name}, His mama likes bikes and they are ${KTM} and ${triumph}`

console.log(myPage);