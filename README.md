# JS Conditionals, Loops, Functions

## Learning Goals
- Use comparisons, `if/else`, and conditionals
- Use `for` loops and `while` loops
- Use functions, parameters, and return values

## Conditionals
### Basics
You can compare any two values with the following operators:
- `>`, greater than
- `>=`, greater than or equal to
- `<`, less than
- `>=`, less than or equal to
- `===`, equal to
- `!==`, not equal to

We use conditionals to control which lines of code run. Our main tool is the _if statement_:
```js
if (1 + 1 === 2) {
  console.log('Math still works!')
} else {
  console.log('We are in some serious trouble now')
}
```
The code inside the first set of curlies will only run if the conditional in the parentheses evaluates to `true`. The code inside the second set of curlies will only run if the conditional evaluates to `false`.

### `else if`
We can also use additional `if`s to create multiple possible outcomes:
```js
const grade = 85
if (grade >= 90) {
  console.log('Grade is an A')
} else if (grade >= 80) {
  console.log('Grade is a B')
} else if (grade >= 70) {
  console.log('Grade is a C')
} else {
  console.log('Time for more practice')
}
```
The first conditional will not fire because the grade is too low. The second conditional will fire. The third and fourth ones will not even be attempted, because we had success with the second one.

### Conjunctions
You should also know about `&&` and `||`. These are used to join together two conditionals like so:
```js
'pete' === 'pete' && 5 < 4
'pete' === 'pete' || 5 < 4
'pete' === 'henry' && 3 === 10
'pete' === 'henry' || 3 === 10
```
Will each of these lines be true or false?

Try the exercises in `conditionals.js`!

## Loops
There are two kinds of loops we will work with: `for` and `while`. The for loop looks like this:

### `for` loop
```js
for (let i = 0; i < 10; i = i + 1) {
  console.log(i)
}
```
Let's take a minute to understand how javascript reads this.

### `while` loop
```js
let i = 0
while (i < 3) {
  console.log(i)
  i++
}
```

What are some differences between these formats? What are some similarities?

One very important trick is to loop through an array by using the array's `.length` property:
```js
const greetings = ['hi', 'hello', 'sup']
for (let i = 0; i < greetings.length; i++) {
  console.log(greetings[i])
}
```

Try the exercises in `loops.js`!

## Functions
### Basics
A function lets you pre-package code to be used later.
```js
function greet() {
  console.log('good day to you!')
}
```
This will not print right away, but it will allow you to print later, as many times as you want. (One of the main reasons we wrap our code in functions is so we can reuse it multiple times later.)

To use this function, we have to _invoke_ it like this:
```js
greet()
```
What happens if you take off the closing parentheses?

### Parameters
Sometimes pre-packaged instructions require additional information to be run. If I told you "Go on a road trip", you might ask... where to?
If I told you "Go paint a picture", you might ask... of what? You need an additional _parameter_ to complete the instructions. We can set our functions up so that they use an additional piece of information too:
```js
function greetSomeone(name) {
  console.log(`good day to you, ${name}!`)
}
```
The addition of `name` in the round parentheses indicates that this function needs to be passed a name in order to run. We invoke it like this:
```js
greetSomeone('Henry')
```
When we invoke it like this, `'Henry'` is called the _argument_. What happens if you omit the argument?

Let's take a minute to follow how the information flows when we invoke with an argument.

Note that a function can take any number of arguments! You separate them with a comma in the function declaration, and you invoke the function with arguments separated by commas:
```js
function greetMany(name1, name2) {
  console.log(`good day to you both, ${name1} and ${name2}!`)
}
greetMany('Henry', 'Weston')
```

### Scope
What happens if you run this code?
```js
const outsideVar = 'I am outside!'
function scopeExperimentation() {
  const insideVar = 'I am inside!'

  console.log(outsideVar)
  console.log(insideVar)
}

scopeExperimentation()

console.log(outsideVar)
console.log(insideVar)
```
We have just discovered _scope_! The variable we declared outside the function are visible both inside the function and outside it. But the variable we declared inside the function is only visible inside the function. The same is true for `if` statements and loops.

### `return`
Consider this code:
```js
function addSalesTax(cost) {
  const tax = cost * 0.07
  const final = cost + tax
}

const total = addSalesTax(25.50)
```
What is the value of our `total` variable? The problem is that variables created inside the function aren't visible to the outside world. If we want to make information available to the outside world, we have to use `return`.
