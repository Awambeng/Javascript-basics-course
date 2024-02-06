// COUNTER PROGRAM

const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const result = document.getElementById("result");

let count = 0;

decreaseBtn.onclick = function(){
    count--;
    result.textContent = count;
    // console.log(result)
}

increaseBtn.onclick = function(){
    count++;
    result.textContent = count;
    // console.log(result)
}

resetBtn.onclick = function(){
    count = 0;
    result.textContent = count;
}