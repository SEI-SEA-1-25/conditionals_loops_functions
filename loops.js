// you can delete this log one you're sure that this file is linked correctly
console.log("Hello from loops!")

// 1) Count to 10! Print the numbers between 1 and 10. 
//Do this once with a for loop, then again with a while loop. Beware the infinite while loop!
//

for(i=1;i<=10;i++){
    console.log(i);
}

let number = 1;
while (number <= 10){
    console.log(number);
    number = number + 1;
}

// 2) Count from 20 to 100 in multiples of 5, one with a 
//for loop and once with a while
//

for(i=4;i<=20;i++){
    console.log(i*5);
}

let number2 = 4
while(number2 <= 20){
    console.log(number2*5)
    number2 = number2 + 1
}



// 3) Make an array that contains your 5 favorite foods, stored as strings. 
//Loop through this array, and print "I love <food>!" for each one.
//

const favoriteFoods = ['pizza','sausage','hot dogs','hot fudge','mango']

for(i = 0; i < favoriteFoods.length; i++){
    console.log("I love " + favoriteFoods[i])
}


// 4) Create a variable called numbers that starts off as an empty array. 
//Use a loop to push the numbers 1 through 5 into this array. You'll need to use the .push method of your array, google it!

let numbers = [];

for(i=1;i<=5;i++){
    numbers.push(i)
}

console.log(numbers)

// 5) Create a variable called squaredNumbers that starts off as an empty array. 
//Loop through the numbers variable (from exercise 4), and for each one, push that number squared into the squaredNumbers array. 
//(To square a number, multiple it by itself!)

// 6) Create an object that contains the names of 3 friends as keys, 
//with each key pointing to that friend's age. (It is ok to guess your friends' ages.) 
//Assign this object to a variable called friends. Loop through this object, and for each key-value pair, print "<name> is <age> years old"