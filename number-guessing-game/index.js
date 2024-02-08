// NUMBER GUESSING GAME

// console.log(res);

// let attempts = 0;
// let guess;
// let running = true;

const maxNum = 100;
const minNum = 1;

const res = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

const res1 = document.getElementById("res1");

const res2 = document.getElementById("res2");

const guessText = document.getElementById("guessText");

const btn = document.getElementById("btn");

const btn1 = document.getElementById("btn1");

btn.onclick = function(){
    result = guessText.value;
    result = Number(result);
    if(result < res){
            res1.textContent = (`The number ${result} is too low. Please try again!!!`);
            res2.textContent = `The random number generated is: ${res}`;
            console.log(res);
    }
    else if(result > res){
            res1.textContent = (`The number ${result} is too high. Please try again!!!`);
            res2.textContent = `The random number generated is: ${res}`;
            console.log(res);
    }
    else{
            res1.textContent = (`Congratulations you won!!! The number ${result} you entered corresponds to the random number generated ${res}`);
            res2.textContent = `The random number generated is: ${res}`;
            console.log(res);
        }
}

btn1.onclick = function(){
    guessText.value = " ";
    res1.textContent = " ";
    res2.textContent = " ";
}