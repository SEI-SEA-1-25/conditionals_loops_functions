// you can delete this log one you're sure that this file is linked correctly


// 1) Count to 10! Print the numbers between 1 and 10. Do this once with a for loop, then again with a while loop. Beware the infinite while loop!
for (let i = 1; i <=10; i++){
    console.log(i);
}
let i = 1
while (i <= 10){
console.log(i);
    i++;
}
// 2) Count from 20 to 100 in multiples of 5, one with a for loop and once with a while
let count = 0;
for(let i = 20; i <= 100; i++){
    if (i % 5 == 0){
count = i;
    }
    console.log(count);
}
let j = 20;
let count1 = 0;
while (j <= 100){
    if (j % 5 == 0){
        count1 = j; 
    }
    console.log(count1);
    j++;
}
// 3) Make an array that contains your 5 favorite foods, stored as strings. Loop through this array, and print "I love <food>!" for each one.
//let fevFood = ['Pizza', 'Burger', 'chicken', 'Salad', 'Rice'];
//let fevFoodArr= ; 
////for (let i = 0; i < fevFood.length; i++){
    
//}
//console.log("I love " +fevFood[i] +" !");
// 4) Create a variable called numbers that starts off as an empty array. Use a loop to push the numbers 1 through 5 into this array. You'll need to use the .push method of your array, google it!
var numbers = [];
for (let i = 1; i <= 5; i++){
    numbers.push([i]);
}
console.log(numbers);
// 5) Create a variable called squaredNumbers that starts off as an empty array. Loop through the numbers variable (from exercise 4), and for each one, push that number squared into the squaredNumbers array. (To square a number, multiple it by itself!)

// 6) Create an object that contains the names of 3 friends as keys, with each key pointing to that friend's age. (It is ok to guess your friends' ages.) Assign this object to a variable called friends. Loop through this object, and for each key-value pair, print "<name> is <age> years old"