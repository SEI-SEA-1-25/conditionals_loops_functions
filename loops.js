// you can delete this log one you're sure that this file is linked correctly
console.log("Hello from loops!")

// 1) Count to 10! Print the numbers between 1 and 10. Do this once with a for loop, then again with a while loop. Beware the infinite while loop!

for (let i=1; i<=10; i++){
    console.log(i);
}

//let i = 1;

//while(i<=10){
//    console.log(i);
 ////   i++;
//}

// 2) Count from 20 to 100 in multiples of 5, one with a for loop and once with a while

for (let i=20; i<=100; i += 5){
    console.log(i);
}


let i = 20;

while(i<=100){
    console.log(i);
    i += 5;
}


// 3) Make an array that contains your 5 favorite foods, stored as strings. Loop through this array, and print "I love <food>!" for each one.

let favoriteFoods = ["pizza", "ramen", "empanadas", "tacos", "salami"]

for (let i=0; i < favoriteFoods.length; i++){
    console.log(`I love ${favoriteFoods[i]}`);
}



// 4) Create a variable called numbers that starts off as an empty array. Use a loop to push the numbers 1 through 5 into this array. You'll need to use the .push method of your array, google it!

// 5) Create a variable called squaredNumbers that starts off as an empty array. Loop through the numbers variable (from exercise 4), and for each one, push that number squared into the squaredNumbers array. (To square a number, multiple it by itself!)

// 6) Create an object that contains the names of 3 friends as keys, with each key pointing to that friend's age. (It is ok to guess your friends' ages.) Assign this object to a variable called friends. Loop through this object, and for each key-value pair, print "<name> is <age> years old"