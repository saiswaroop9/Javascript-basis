// type conversion and 

console.log("We are in Tutorial- #5 ");
 
let myVar;

myVar = String(10);
console.log("This log is to check on conversion of number to String", myVar, (typeof myVar));

let booleanVar = String(true);
console.log("This log is to check string to boolean", booleanVar, (typeof booleanVar));

let date = String(new Date());
console.log("This log is to check String conversion to Date", date, (typeof date));

let array = String([1,2,3,4,5,6,7,8,9,10]);
console.log("Get me the result for given array: ", array.length, (typeof array));

let i = 9;
console.log(i.toString());

let j = true;
console.log(j.toString());

let k = false;
console.log(k);

let phoneNum = ("8754541133");
console.log("Fetch the result for phone Number :", phoneNum, (typeof phoneNum));

let Num = Number("8754541133");
console.log("Fetch the result for Number :", Num, (typeof Num));

//ParsInt

let parNumber = parseInt('9.999999');
console.log("Print this for me:", parNumber, (typeof parNumber));

//ParsFloat

let parNum = parseFloat('9.999999');
console.log("Print this for me:", parNum, (typeof parNum)); 

//.toFixed

let fixNumber = parseInt('54.5454545454');
console.log("I want to check how .toFixed works :",fixNumber.toFixed(100), (typeof fixNumber));

let fixNum = parseFloat('54.5454545454');
console.log("I want to check how .toFixed works :",fixNum.toFixed(100), (typeof fixNum));
 



//=========>>  type of coercion  <<=====


let num1 = "123";
let num2 = 456;

console.log("Please give the result:", num1 + num2);
