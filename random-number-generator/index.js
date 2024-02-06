// RANDOM NUMBER GENERATOR

// let min = 100;
// let max = 500;
// let randomNumber = Math.floor(Math.random() * (max - min)) + min; 

// console.log(`The random number generated is: ${randomNumber}`);

mybtn = document.getElementById("mybtn");

result = document.getElementById("result");

mybtn1 = document.getElementById("mybtn1");

mybtn.onclick = function(){
    let min = 1;
    let max = 6;
    randomNumber = Math.floor(Math.random() * max) + min;
    result.textContent = `The outcome is: ${randomNumber}`
}

mybtn1.onclick = function(){
    result.textContent = `Please click on Roll to play...`
}
