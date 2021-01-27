// you can delete this log one you're sure that this file is linked correctly
console.log("Hello from functions!");

// 1) Write a function called addOne that takes a number as an argument, 
// adds 1 to it, and returns the result.
// Invoke this function, and assign it to a new variable. Print this variable.
var i = 1;

function addOne() {
    if (i < 10, i++) {
        console.log(i);
    }
}
var newVar;


newVar = addOne();
newVar = addOne();
newVar = addOne();


var greeting = function (taco, stuff) {
    // anything inside of here will execute when called
    console.log("Good morning", stuff, taco);
    console.log("taco:", taco);
    console.log("stuff:", stuff);
};


function newFunction() {
    console.log(newVar);
}
// 2) Write a function called addition that takes in two numbers, adds them together, 
// and returns the result.
// Invoke this function, and assign it to a new variable. Print this variable.
var a;
var b;

function addition(a, b) {
    a = 10;
    b = 20;
    return a + b;
}

console.log(addition());

// 3) Write a function called calculator that takes in three arguments: 

// two numbers, and a string. If the string is '+', 
// it should add them together; if the string is '-', 
// subtract them, and so on for '*' and '/'. 
// It should return the result of the calculation.
// Invoke this function, and assign it to a new variable. Print this variable.

// 4) Write a function called findMax that takes in an array of numbers and returns the highest number in the array.
// Invoke this function, and assign it to a new variable. Print this variable.

// 5) Write a function called addHype that takes in an array of strings. 
// It should return an array of strings that are capitalized versions of the input strings. 
// For example, it would turn ['violet', 'moose', 'hercules'] into ['VIOLET', 'MOOSE', 'HERCULES']
