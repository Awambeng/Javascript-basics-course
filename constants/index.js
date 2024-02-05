// const = a variable that can't be changed

const PI = 3.14159;
// let radius;
let circumference;

// radius = window.prompt("Enter the radius of the circle!!");

// when we recieve our radius fro the user it is a string so let's convert it to a number
// radius = Number(radius);
// circumference = 2 * PI * radius;

// console.log(`The circumference of a circle with radius ${radius} is: ${circumference}`);

document.getElementById("submit").onclick = function(){
    radius = document.getElementById("mytext").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = `The circumference of a circle with radius ${radius} is: ${circumference}cm `
}