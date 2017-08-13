// let, const and scope variables

// let a = "a outside scope !";
// const b = "Ashwin";
// const c = [1,2,3];  //manipulating array is allowed !
// c.push(4);
// console.log(c);
// {
//     let a = "a inside block scope !";
//     console.log(a);
//     //b = "Purvi";  Compile error - b is read only !!
//     console.log(b);
// }
// console.log(a);
// console.log(b);





//Template Literals..... using back ticks

// let a = "Hello";
// let b = "world!";
// console.log(`${a} ${b}`);



//Spread Operator == used to manipulate arrays and objects !! (Rest Operator)

// let a = [1,2,3];
// let b = [4];
// console.log(...a,...b);

// function printElements(a,b,c){
//     console.log(a,b,c);
// }

// printElements(...a); //123
// printElements(...b);//4 endefined undefined



//reversing the use of spread operator !! (Rest Operator)
// function printElements(...z){
//     console.log(...z);
// }

// printElements(1,2,3,4,5);


// Destructuring Assignment - Arrays

// let a = [100,200];
// let [b,c] = a;
// console.log(b,c);


// let a = ["Ashwin", "Purvi", "Aishu"];
// let [b,c,d] = a;
// console.log(b,c,d);

// let a = [100,200,300,400,500];
// let [b,...c] = a; 
// console.log(b,...c); 


// Destructuring assignment - objects

// let person = {name : "Ashwin"
//               ,age : 28};
// let {name , age} = person;
// console.log(name, age);


//if name and age was already defined...

// let name = "Purvi";
// let age = 20;
// let person = {name : "Ashwin"
//               ,age : 28};
// ({name , age} = person);  //enclose the whole assignment inside paranthesis !!
// console.log(name, age);






//Arrow functions ...
// function blastoff(){
//     console.log("3...2...1... blastoff !!");
// }

// blastoff();


//setTimeout(()=>{console.log("3...2...1.blastoff!!")},2000);

// const blastoff = () => {
//     console.log("3...2...1... blastoff !!!")
// }

// blastoff();





//Arrow functions do not bind their own this unlike in vanilla javascript!!
//  this.a = 25;

// let print = function(){
//      this.a = 50;
//      console.log("this.a inside print ",this.a);
//  }

// print();

// let printWithArrow = () => {
//     this.a = 70;
//     console.log("this.a inside printwithArrow ", this.a);
// }

// printWithArrow();




// The Map function

//1. using call back functions .. functions are passed as parameter to map function
// const numbers = [100,200,300];
// const addOne = (element) => {
//     return element = element +1 ;
// }
// console.log(numbers.map(addOne));


//2. using functionsdirectly inside the map function..
// const numbers = [10,20,30];
// console.log(numbers.map(element => {return element +1}));
//  //can also be written as...
// console.log(numbers.map(element =>  element +1));






// The filter function..
// const marks = [40,79,80,70,58,94];
// let isPassing = (grade) => {
//     return grade >= 70;
// }
// console.log("passing grades - ", marks.filter(isPassing));
// console.log("passing grades - ", marks.filter(element => element >= 70));

//more helper methods .. find, forEach etc.. check documentation




// introducing modules... reusable code..








