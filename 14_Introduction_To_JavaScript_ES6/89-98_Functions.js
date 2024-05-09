//? Creating and calling functions
/**
 ** 1. allow you to create a series of instructions 
 ** 2. package it into a block of code
 ** 3. give the function a name
 ** 4. call the function when those actions are needed
 * */ 

//  writing a function needs the keyword 'function' and the 'function's name', parantheses, along with curly brackets
// ex:
// creating function 
function getMilk(){
    // function to get milk
}
// VS.
// calling function/using function
getMilk(); // a command

// Parameter and Arguments
// function stores code, when function is called it runs the code in the brackets of the function

function sayHi(){
    console.log("Hi");
}

// passing a variable a and b as a param
function sum(a, b){
console.log(a + b);
}

// call function
// pass the needed variables in place
sum(1, 2);
// if no variable is passed for either a or b, javascript will mark it as undefined and throw no errors

// ? What are variables used for in javascript? Answer: for storing or holding data
// ? Correct way to declare a new variable that you can change? Answer: let

/*
    ? What is string interpolation?
    - String interpolation is like filling in the blanks in a template.
    - you can use template literals for string interpolation. Template literals are strings enclosed by backticks (`) and can contain placeholders, which are indicated by `${}`. 
*/
let herName = "Alice";
let day = "Wednesday";
let message = `Hello, ${herName}! Today is ${day}.`; // "Hello, Alice! Today is Wednesday."

 

/* 
    ? What is string concatenation ? 
    - You "glue" different strings together to form a longer string.
*/ 
let greeting = "Hello" + " " + "World"; // "Hello World"