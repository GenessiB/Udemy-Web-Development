// Data type: Number
// Addition + 
var a = 2 + 3; // 5

// Subtration -
var b = 10 - 2; // 8

// Multiplication
var c = 3 * 3; // 9

// Division
var d = 6 / 2; //3

// Modulo
// gives remainder of the division, since 6 only goes into 9 once, there is a remainder of 3
var e = 9 % 6; //3
var f = 6 % 4; //2

// order of operations is important
// PEMDAS
// 1. 5 * 2 = 10
// 2. 10 + 3 = 13
var cost = 3 + 5 * 2; //13

// 1. 3 + 5 = 8
// 2. 8 * 2 = 16
var cost = (3 + 5) * 2; //16

// code challenge: dog age to human age converter
// humanAge = (dogAge - 2) * 4 + 21
// prompt asking age of  your dog
var dogAge = prompt("How old is your dog?");
// then will calculate humanAge
var humanAge = (dogAge - 2) * 4 + 21;
// then reutrn humanAge of dog with an alert
alert("your dog is " + humanAge + " years old." );