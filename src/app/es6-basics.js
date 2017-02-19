//===============================================================================//
//                    Ecmascript Basics
//===============================================================================//

console.log("Hello world!!!!");

//let and const..............
let name = "Ashwin";
console.log(name);  // "Ashwin"

//let allows us to have block scoping..

let age = 27;
if(true){
    let age = 30;
    console.log(age);  //first prints 30
}
console.log(age);  // then prints 27

//const ......
const age2 = 27;
//age2 = 30;    //Not allowed as const value cant be changes once assigned
console.log(age2); //"Ashwin"

//in case of array or an object .. we can always mutate the object , the const is refering to.. since its just a pointer.
const OBJ = {
  age : 27
}

console.log(OBJ);

OBJ.age = 30;
console.log(OBJ);


//Fat Arrow functions ........................................................ =>

var printAge = () => console.log("age : 27");
printAge();  // 27

//using arrow functions in callback
setTimeout(() => console.log("Hello !"),4000); //Hello ! <after 4 secs>

//The This keyword !!.............................................................
function printThis(){
     console.log(this);    //traditional function adops the object from where it is being called hence 'this' means button object..
}

var printThis2 = () => {
  console.log(this);   
  // Here this keyword refers to the window object irrespective of from where it is called..
}
//printThis();

//.........................................................
//Now, when the function is called from an element say button as follows : 
var button = document.querySelector('button'); 
button.addEventListener('click', printThis);


//Assigning default values to parameters in functions.....

var isEqualTo = (number, compareTo = 10) => number == compareTo;
console.log(isEqualTo(11));

//Rest Operator (...)


var sumUp = (...toAdd) => {
  let result =0;
  for(let i = 0; i<toAdd.length;i++) {
    result += toAdd[i];
  }
  return result;
}

console.log(sumUp(1,2,3,4));  //10

/// spread Operator (...)
let numbers = [1,2,3,4,5];
console.log(...numbers);
console.log(Math.max(...numbers));


//The For-Of-Loop................

let testResults = [1.23, 1.10, 4.1];
for(let testResult of testResults){
  console.log(testResult);
}

//Template literals...
let name3 = "Ashwin";
let description = `
 Hello , I'm ${name3 + '!!'}
`;

console.log(description);

//Destructuring Arrays....
let numbers2 = [1,2,3,4,5];
let[a, ...b] = numbers2; //assign 1st element to a  //asign rest of the array to b
console.log(a); 
console.log(b);
console.log(numbers2); // the original array remains intact

//swap the variables..
let e=4;
let f=5;

[f,e] = [e,f];
console.log(f);
console.log(e);

//picking up intermidiate values randomly from an array...
let numbers4 = [1,2,3,4];
let [g,,h] = numbers4;
console.log(g,h);

//Destructuring objects....
 let person = {
   personName : "Ashwin",
   personAge : 27,
   greet : function(){
     console.log("Hello Ashwin !!");
   }
 };
 let {personName , greet} = person;
//console.log(personName,greet);
greet();


//**********End*********** */


