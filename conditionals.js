// you can delete this log one you're sure that this file is linked correctly
console.log("Hello from conditionals!");



// 1)
// Create a variable called dogName, set it to 'Violet'
// if dogName is Violet, print "This is the best dog"
// otherwise, if dogName is Moose, print "Also a very good dog"
// otherwise, print "All dogs are good"

var dogName;

if (dogName === "Violet") {
    console.log('this is a good dog');
} else if (dogName === "Moose") {
    console.log('Also a very good dog');
} else {
    console.log('All dogs are good');
}



// 2) If 5 is greater than 4, print "Math still works, what a relief"
// otherwise, print "The basic laws of math have failed us"

var x = 5;
if (x > 4) {
    console.log("MATH STILL WORKS");
} else {
    console.log("The basic laws of math have failed us");
}


// 3) Create two variables, income and expenses, giving them whatever values you'd like.
// If income is greater than or equal to expenses, print "Budget is balanced", then print the amount of surplus
// Otherwise, print "Uh oh, budgeting problem", then print the amount of defecit
// Try embedding the surplus/defecit into the string you're printing! This can be done with string concatenation or string templating. Try it both ways. Google for examples if unsure.
// Change the values of income and expenses to force the other branch of the conditional to fire.

var income = 1000;
var expenses = 200;
var balance;

balance = income - expenses;

if (balance > 0 ) {
        console.log(`Budget is balanced, ${balance} dollars can be put into savings`);
    } else {
        console.log(`Uh oh, budgeting problem. ${balance} puts you in the negative`);
}
// console.log(balance);

// 4) Create two variables, temp and raining. Set temp to a number and raining to a boolean.
// If temp is 72 or higher and raining is false, print 'Vacation time!'
// 4b) Consider all the outcomes of these two conditions, numbere 1 thru 4:
//                temp is 72 or higher?
//                yes   no
//                ___________
// raining?  yes | 1    
//            no | 3    4
// Your conditional handles one of these outcomes. Build it out so that it handles all 4, printing something different in each case.


var temp = 7;
var raining = true;



var goodTBadR = temp >= 72 && raining === true;
var badTGoodR = temp <= 72 && raining === false;
var badTBadR = temp >= 72 && raining === true;


if (goodTBadR) {
    console.log("grab your umbrella");
} else if (badTGoodR) {
    console.log("Just a jacket should do!");
} else if (badTBadR) {
    console.log("Be sure yourefully prepared for rain and ");
} else {
    console.log("Vacation time!");
}