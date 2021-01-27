// you can delete this log one you're sure that this file is linked correctly
console.log("Hello from conditionals!")

// 1)
// Create a variable called dogName, set it to 'Violet'
var dogName = "Violet";
// if dogName is Violet, print "This is the best dog"
// otherwise, if dogName is Moose, print "Also a very good dog"
// otherwise, print "All dogs are good"

if (dogName==="Violet"){
    console.log("This is the best dog")
} else if (dogName==="Moose"){
    console.log("Also a very good dog")
} else {
    console.log("All dogs are good")
}
// 2) If 5 is greater than 4, print "Math still works, what a relief"
// otherwise, print "The basic laws of math have failed us"

if (5 > 4){
    console.log("Math still works, what a relief")
} else {
    console.log("The basic laws of math have failed us")
}

// 3) Create two variables, income and expenses, giving them whatever values you'd like.
// If income is greater than or equal to expenses, print "Budget is balanced", then print the amount of surplus
// Otherwise, print "Uh oh, budgeting problem", then print the amount of defecit
// Try embedding the surplus/defecit into the string you're printing! This can be done with string concatenation or string templating. Try it both ways. Google for examples if unsure.
// Change the values of income and expenses to force the other branch of the conditional to fire.
let income = 40000;
let expenses = 50000;

if (income >= expenses){
    let surplus = income - expenses;
    console.log("Budget is balanced and the surplus is: " + surplus)
}else {
    let deficit = expenses - income;
    console.log("Uh oh budgeting problem and the deficit is: " + deficit)
}



// 4) Create two variables, temp and raining. Set temp to a number and raining to a boolean.
// If temp is 72 or higher and raining is false, print 'Vacation time!'

let temp = 56;
let raining = false;

/*if(temp >= 72 && raining === false){
    console.log("Vacation Time!!")
} 
*/

// 4b) Consider all the outcomes of these two conditions, numbere 1 thru 4:
//                temp is 72 or higher?
//                yes   no
//                ___________
// raining?  yes | 1    2
//            no | 3    4
// Your conditional handles one of these outcomes. Build it out so that it handles all 4, printing something different in each case.


if(temp >= 72 && raining === true){
    console.log("Its nice out, but bring an umbrella")
} else if (temp < 72 && raining === true){
    console.log("Its nasty outside")
} else if (temp >= 72 && raining === false){
    console.log("Vacation Time!!")
} else {
    console.log("Its cold out and not raining")
}