// TERNARY OPERATORS = a shortcut to if{} and else{} statements
//                     helps to assign a variable based on a condition
//                     condition ? codeIfTrue : codeIfFalse;

let age = 21;

let message = age >= 18 ? "You are an adult" : "you are a minor";

console.log(message);

let time = 16;

let greeting = time < 12 ? "Good morning" : "Good Afternoon";
console.log(greeting)

let isStudent = true;
let msg = isStudent ? "You are a student" : "YOu are not a student";
console.log(msg); 

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is: $${purchaseAmount - purchaseAmount * (discount / 100)}`);
