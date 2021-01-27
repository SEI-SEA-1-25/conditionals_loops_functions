// you can delete this log one you're sure that this file is linked correctly
console.log("Hello from conditionals!")

// 1)
// Create a variable called dogName, set it to 'Violet'
// if dogName is Violet, print "This is the best dog"
// otherwise, if dogName is Moose, print "Also a very good dog"
// otherwise, print "All dogs are good"

var dogName = "cat"

if (dogName === "violet") {
    console.log("This is the best dog");
}else if(dogName === "moose") {
    console.log("Also a very good dog");
}else{
    console.log("All dogs are good");
}

// 2) If 5 is greater than 4, print "Math still works, what a relief"
// otherwise, print "The basic laws of math have failed us"

let age = 6

if (age > 4) {
    console.log("Math still works, what a relief")
}else{
    console.log("The basic laws of math have failed us.")
}

// 3) Create two variables, income and expenses, giving them whatever values you'd like.
// If income is greater than or equal to expenses, print "Budget is balanced", then print the amount of surplus
// Otherwise, print "Uh oh, budgeting problem", then print the amount of defecit
// Try embedding the surplus/defecit into the string you're printing! This can be done with string concatenation or string templating. Try it both ways. Google for examples if unsure.
// Change the values of income and expenses to force the other branch of the conditional to fire.

var income = 2000
var expenses = 2250
var deficit = (income - expenses)

if (income >= expenses) {
    console.log(`Budget is balanced, with a remainder of ${deficit}`)
}else{
    console.log(`Uh oh, budgeting problem, you have ${deficit} dollars`)
}

// 4) Create two variables, temp and raining. Set temp to a number and raining to a boolean.
// If temp is 72 or higher and raining is false, print 'Vacation time!'
// 4b) Consider all the outcomes of these two conditions, numbere 1 thru 4:
//                temp is 72 or higher?
//                yes   no
//                ___________
// raining?  yes | 1    2
//            no | 3    4
// Your conditional handles one of these outcomes. Build it out so that it handles all 4, printing something different in each case.

var temp = 99
let raining = true

if (temp >= 72 && raining === false) {
    console.log("Vacation time!");
}else if (temp >= 72 && raining === true) {
    console.log("Free shower time!");
}else if (temp < 72 && raining === true) {
    console.log("It's wet and cold!");
}else {
    console.log("Back to work");
}