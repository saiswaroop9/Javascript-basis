 

   ====>>>    Functions and Scope    <<<======

Function: Function is block of code which is used for designing a particular task of code to do repeated, also without inscreasing the readablity of code

- you need to define a function and to make it run you need to call the same   function by giving the arguments to it 

function name : myBike
Passing Argument: name
Can even Return it


// Example 1: 

function myBike(names, GoodBike) {
    let note =`I have a super bike...30..blah blah ${names}. ${GoodBike}`;
    return note;    
}

const names = "Activa"

let val = myBike(names, "It's good bike");
console.log(val);


//Example 2
function home(name, landmark, city) {
    let address = `My sweet home name is ${name}. I am from ${city}, it is near ${landmark}`;
    return address
}
const name = "Mannat";
const city = "Mumbai";
const landmark = "Old housing board, Multipurpose ground"
let homie = home(name, city, landmark);
console.log(homie);

// Function inside the objects

const obj = {
    name: "Duke, This is my bike ",
    game: function() {
        return "ROADRash";
    }
}
console.log(obj.game);
console.log(obj.name);

arr = ["Duke", "BMW", "Rcomet"];
arr.forEach(function(element, index, array) {
    console.log(element, index);
})
