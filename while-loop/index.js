// while loop = repeat some code WHILE some condition is true

// syntax
/*
while(condition){
    // some code
}
*/

// let username = " ";

// while (username === " "){
//     window.alert("Please enter your username.");
//     username = window.prompt("Enter username");
// }

// window.alert(`Hello ${username}, welcome to our javascript course....`);

let loggedIn = false;
let username;
let password;

while (!loggedIn){
    username = window.prompt("Please enter your username:");
    password = window.prompt("Please enter your password:");

    if (username === "Hush Poppy" && password === "classic  00"){
        loggedIn = true;
        window.alert("You are logged in!!!");
        console.log("You are logged in!!!");
    }
    else{
        window.alert("Invalid credentials! Please try again");
        console.log("Invalid credentials! Please try again");
    }
}