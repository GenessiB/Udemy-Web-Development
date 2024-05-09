// method toUpperCase() changes every character in a string to an uppercase version of it
var myName = "Genessi";
myName = myName.toUpperCase(); // output = "GENESSI"
myName = myName.toLowerCase(); // output = "genessi"

// challenge: prompt that returns name in alert with first letter uppercased

// 1 create a variable that stores the name that enters via prompt
var yourName = prompt("What is your name?");
// 2 capitalize the first letter of their name
// a ioslate the first character
var firstChar = yourName.slice(0,1);
// b turn the first character to uppercase
var upperCaseFirstChar = firstChar.toUpperCase();
// c isolate the rest of the name
var restOfName = yourName.slice(1,yourName.length);
// d concatenate the first character with the rest of the characters
yourName = `${upperCaseFirstChar}${restOfName}`;
// or
let yourCapName = `${upperCaseFirstChar}${restOfName}`;
// 3 we use the capitalized version of their name to greet them using an alert
alert(`hello, ${yourName}`); // output = "Hello, Genessi"
// or 
alert("Hello, " + yourCapName);