
const age = 30;

if(age==28)
{
    console.log('Age is 28');
}else if(age==30) {
    console.log('Age is 30');
}

else{
    console.log('Age is not 28');
}

//To check weather the variable exit or not

//const variable = 100;
let variable = 1000;
if(typeof variable !== undefined){
    console.log("variable is defined");
}else{
    console.log("Variable is not defined");
}
 
// Using boolean
const HehasDuke200 = true;
const drink = false;

if(HehasDuke200 || drink){
    console.log("He is rider");
}else{
    console.log("He is not bike rider");
}

let ihavePhone = true;
let ihaveBike = true;
let iAmHome = false;

if(ihavePhone && ihaveBike || iAmHome){
    console.log("best");
}else{
    console.log("Good ");   
}
//Termintor operator
 console.log(age == 27? "Age is 27": "Age is not 27");

 const age = 17;
 
 if(age === 27? 7)

                    /* Switch case statement*/
const age = 108;
switch(age){
    case 18:
        console.log("Age is 18");
        break;// if you use the break operator only 1 case in the method wil be executed  
    case 28:
        console.log("Age is 28");
        break;
    case 38:
        console.log("Age is 38");
        break;
    default:
        console.log("you are unknown");
        break;
}

