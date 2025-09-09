1) What is the difference between var, let, and const?
var
=>var is hosted but undefined.
=>Allow re-declaration and re-assignment
let
=>let is hosted but temporal dead zone.
=>allow re-assignment but not allow re-declaration
const
=>const is hosted but temporal dead zone.
=>not allow re-assignment and re-declaration

2) What is the difference between map(), forEach(), and filter()?
map()=>always return new array.
forEach()=>does not return new array.
filter()=>return value that matched condition

3) What are arrow functions in ES6?
=>arrow function is a short syntax for function expression.do not need function keyword,return keyword and curly brackets.

4) How does destructuring assignment work in ES6?
=>const person={name:"Foysal", ph:"B12"};
const {name,batch}=person;

5) Explain template literals in ES6. How are they different from string concatenation?
=>const =`template literals supports
 multiline without need \n
 and easily access dynamic value ${number}.`