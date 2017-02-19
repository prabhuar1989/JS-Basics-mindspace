//===============================================================================//
//                    Javascript Basics
//===============================================================================//



//basic output

var number = 5;
console.log(number); // 5

//variable datatypes : string, number, boolean
//using typeof
var name = 'Ashwin';
console.log(typeof name); //"string"

//using arrays
var numbers = [1,2,3,'name'];
console.log(numbers);  //[1, 2, 3, "name"]
console.log(numbers[1]); //2
console.log(numbers[5]); //undefined

//using Operators 
var name = null;
var name2 = undefined;
console.log(null == undefined); //true - checks if  values are equal
console.log(null === undefined); //false - checks if both values and types are equal
console.log(typeof name); //"object"
console.log(typeof name2); //"undefined"

//Not a number (NaN) 
var variable = NaN;
console.log(variable); // NaN - basically we get it when there is error on a mathematical calculation.
console.log(typeof variable); //"number"

//Objects........
//can create fields and methods inside the object

var var1 = {
  name : "Ashwin"
};

console.log(var1.name); // "Ashwin"
console.log(var1); 
//output :
// [object Object] {
//   name: "Ashwin"
// }

console.log(typeof var1); // "object"

//Dynamic Types ..................
//variables can be reassigned different values of different types:

var var1 = 5;
console.log(var1); //5

var1 = "Ashwin";
console.log(var1); //"Ashwin"

//Creating and calling functions and methods...............

//Method 1 : 
function calc(){
  console.log("Inside function !");
}
//output : <Nothing>
//becoz although we have defined the function it wont get called unless you explicitly call it..!!

calc(); // "Inside function !"

//hoisting : you can define first and call later OR viceversa.. doesnt matter !!    

//Method 2 : We are technically creating a variable and assigning a function to the variable..
var calc = function(){
     console.log("Inside function !");
};
console.log(typeof calc); // "function"


//you can also assign a function variable to another variable and call new variable as a function !!
var newfunc = calc;
newfunc(); // "Inside function !"


var newfunc = calc(); //will give error after executing the calc function.
//This is not as same as the above .. This basically means..execute the calc function and 
//assign the value returned to the new variable !!
//Also it would give error if the function doesnt return anything..


//Functions , arguments and return values : 
function calc() {
  var stringVar = "Inside function !!";
  return stringVar;
}

var newVar = calc();
console.log(newVar); //not it will execute properly as the function is returning a value !

//Passing arguments..........
function calc(number1 , number2) {
  
  return number1 + number2;
}

var newVar = calc(10,8);
console.log(newVar);  // 18


//Control structures .....
//The If statement.....
//switch statement.....
//for loop.....
//while loop....

//nothing new ...same as java concepts... :)






