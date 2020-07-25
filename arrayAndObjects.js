const bikeCC = [125, 200, 220, 350, 600];
const bikeNames = ['Activa', 'Duke', 'Pulsar', 'RComet', 'Kawashaki'];

const bikeDetails = ['Duke', 200, [390, 790]];

const arr = new Array(10, 20, 'KTM');
/*
console.log(arr);
console.log(bikeCC);
console.log(bikeNames);
console.log(bikeDetails);

console.log(arr.length);
console.log(Array.isArray(arr));
//to change array values
*/
arr[0] = 'Sai Swaroop';
let newArr = arr[0]

let value = bikeCC.indexOf(600);
/*
console.log("Displaying :", value);

//Mutating or modifying arrays
bikeCC.push(650); // Push, This function will addd in the end of the array
console.log(bikeCC);

bikeCC.unshift(700);// Unshift, add the element infront/start of the array
console.log(bikeCC);

bikeCC.pop(); //POP, removes the last element in the array
console.log(bikeCC);

bikeCC.shift();// Shift, Removes the last element from the array
console.log(bikeCC);

bikeCC.splice(1,2);// Spilce, removes only the particalur element from and there
console.log(bikeCC);

bikeCC.reverse();// reverse the whole array
console.log(bikeCC);

bikeCC.concat(bikeCCs)
console.log(bikeCC);
*/


let firstObj = {
    'name': 'Padma',
    'Designation': "Govt Employee",
    Working: true
}
//console.log(firstObj);
//console.log(firstObj.name);
console.log(firstObj['name']);
console.log(firstObj['Designation']);
console.log(firstObj['Working']);