var x = 5;
x = x + 1; //6

//? with increment or decrement expressions, youre only ever changing the value by one

// simple notation for singular increment +1
// a.k.a increment expression
x++; //6

// simple notation for singular decrement -1
// a.k.a decrement expression
x--; //4

// ? if you ever want to increase or decrease by more than one value, use += or -=
var x = 5;
x += 2; //7
x -= 2; //3

// can also use += or -= to increase or decrease by another variable
var x = 5;
var y = 3;
x += y; //8
x -= y; //2

// +=, -+, /=, *=