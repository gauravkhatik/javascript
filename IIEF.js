//Immediately Invoked Function Expressions



//using simple function
(function chai(){
  console.log("Hello")

}) ();

(function chai(name){
  console.log(`My name is ${name}`)

}) ("Gaurav");


//using arrow function
 ( () =>{
  console.log('Hello');

}) ();

( (name) =>{
  console.log(`My sirname is ${name}`);

}) ("Khatik");