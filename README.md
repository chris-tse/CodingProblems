# Coding Problem Suggestions

A collection of challenges for whiteboard and/or pair programming sessions with solutions I have come up with either in JavaScript or Java.

## Algorithms

### Fizz Buzz ###

Write a function called `fizzBuzz(n)` which returns an array of *string* values from 1 to `n`. For values that are evenly divisible by 3 replace with `'Fizz'` and values that are evenly divisible by 5 replace by `'Buzz'`. If it is both evenly divisible by 3 and 5, replace with `'FizzBuzz'`.

Alternative: Same concept as above, but instead of returning an array, simply print the values.

Example:
```js
> fizzBuzz(15)

> [
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
  ]
```
[Solution](https://github.com/christopher-tse/CodingProblems/blob/master/solutions/fizzbuzz.js)

### Pyramid ###

Write a function called `pyramid(n)` which prints out a pyramid of a character of your choice. The function should accept an integer as an argument which is the width of the base of the pyramid.

Example:
```js
> pyramid(5)

>   0
   000
  00000

> pyramid(8)

>    00
    0000
   000000
  00000000
```
[Solution](https://github.com/christopher-tse/CodingProblems/blob/master/solutions/pyramid.js)

## Data Structures

### Implement Stack as Queue
[Link to LeetCode problem page](https://leetcode.com/problems/implement-stack-using-queues/tabs/description)

Implement the following operations of a stack using only standard queue operations (`push to back`, `peek/pop from front`, `size`, and `isEmpty`):
- `push(x)` - push element `x` to top of stack
- `pop()` - removes and returns the top element of the stack
- `top()` - returns the top element but does not remove it
- `empty()` - return whether the stack is empty

Example:

```js
let stack = new MyStack()
// Stack: []

stack.empty() // true
// Stack: []

stack.push(1)
// Stack: [1]

stack.push(2)
// Stack: [1, 2]

stack.push(3)
// Stack: [1, 2, 3]

stack.pop() // returns 3
// Stack: [1, 2]

stack.top() // returns 2
// Stack: [1, 2]
```

[Solution (JS)](https://github.com/christopher-tse/CodingProblems/blob/master/solutions/stackasqueue.js)  
[Solution (Java)](https://github.com/christopher-tse/CodingProblems/blob/master/solutions/stackasqueue.java)
