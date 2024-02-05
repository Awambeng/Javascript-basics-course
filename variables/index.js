// A variable is a container that stores a value

// 1. variable declaration let x;

// 2. variable assignment x = 2;

let x;
x = 100;

let online = true;

console.log("The value of x is:", x)

let firstName = 'Awambeng';
let age = 25;
// let age = 1;
var price = 10;
// var price = 20;
console.log("My age variable is:", age)
console.log("The value of the price variable is:", price)

// The difference between var and let is that:

// when you declare a variable using let it is readonly meaning you can't modify it
// when you create a variable using var you can later change its value

// we can replace variables using ${}

console.log(`Hello ${firstName} you are ${age} years old`);

// To display the type of a variable you can use the typeof function followed by variable name

console.log(`The value of price is: ${price} and its type is: `,typeof price);
console.log(`The value of firstName is: ${firstName} and its type is: `, typeof firstName);

console.log(`The value of online is: ${online} and its type is: `, typeof online)

let fullName =  "Awambeng Rodrick Bolan"
let ages = 20;
let student = true;

document.getElementById("p1").textContent = `Name: ${fullName}`;
document.getElementById("p2").textContent = `Age: ${ages}`;
document.getElementById("p3").textContent = `Student: ${student}`;