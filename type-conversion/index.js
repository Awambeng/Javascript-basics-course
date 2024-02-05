// type conversion = change the datatype of a value to another
//                      (strings, numbers, booleans)

// let age = window.prompt("How old are you?");

// age = Number(age);
// console.log(typeof age)
// age += 1;

// console.log(`You are ${age} years old...!!!`, typeof age);

let x = 10;
let y = "pizza";
let z = "pizza";

x = String(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

document.getElementById("p1").textContent = `The value of x is: ${x}, of type ${typeof x}`;
document.getElementById("p2").textContent = `The value of y is: ${y}, of type ${typeof y}`;
document.getElementById("p3").textContent = `The value of z is: ${z}, of type ${typeof z}`;