// Loop condition will run until a specific condition is false 

//General Loops : For, While and do-while
/*
let a = 10000;
a +=1 ;
a++;
console.log(a); // Output 12


for(let i=0; i<=100; i++){
    console.log(i);
}

let j = 0;
while(j <= 5){
    console.log(j);
    j++; 
}


let a = 0;

do {
    console.log(a + 1);
    if (a === 25) {
        break
    }
    a +=1;  
} while (a < 20);
console.log("Cant add more.");



 let arr = [1,2,5,2,4,6,7,8,9,10];
 for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
 }

 
 let array = [0,1,4,7,8,9,6,3,2,5,6,5,42,3,6,5,6];
 array.forEach(function(element) {
     console.log(element, "Printing your loggged value");
     
 })


 let box = [11,12,13,14,15,16,17,18,19,20];
 box.forEach(element => { //fat arrow functions
     console.log(element);
 });
  

 let bikes = ["Pleasure", "Splender", "Duke200"];
 bikes.forEach(bike =>{
     console.log(bike);
 })
 

 const home = ["Dad", "Mom", "Sisters", "Me"]
 home.forEach(family =>{
     console.log(family);
 })
 /*
  //Write to display something using forEach
  const display = ["ThisThing","Thatthing","Something"]
  display.forEach(show =>{
      console.log(show);
  })
*/

  const details = {
      name: "Swappy",
      age: 27,
      Codelevel : "Dangerous Coder",
      bikeName: "KTM - Duke200"
  }
  for(const key in details){
      console.log(`The ${key} of object is ${details[key]}`);
  }
