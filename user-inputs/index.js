// How to accept user input

// 1. Easy way = window prompt
// 2. Professional way = HTML textbox

// let userName;

// userName = window.prompt("What is your username?");

// console.log(`Your username is: ${userName}`)

// document.getElementById("submit").onclick = function(){
//     username = document.getElementById("mytext").value;
//     console.log(`Your name is: ${username}`);
//     document.getElementById("H1").textContent = `Hello ${username}, Welcome to our Javascript course`;
// }

document.getElementById("submit").onclick = function(){
    username = document.getElementById("mytext").value;
    password = document.getElementById("mypass").value;
    gender = document.getElementById("mygen").value;
    console.log(`Your name is: ${username} password is: ${password} and gender is: ${gender}`);
    document.getElementById("H1").textContent = `Hello ${username}, Welcome to our Javascript Course for Beginners`
}