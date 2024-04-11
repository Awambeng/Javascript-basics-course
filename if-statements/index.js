// IF STATEMENTS = if a condition is true, execute some code
//                  if not, do something else.

let age = 13;

if (age >= 18){
    console.log(`You are old enough to enter this site`);
}
else{   
    console.log(`You must be 18+ to enter this site`);
}

let time = 18;

if (time < 12){
    console.log(`Good morning...`);
}
else if(time < 17){
    console.log(`Good Afternoon`);
}
else{
    console.log(`Good Evening`);
}

let isStudent = false;

if (isStudent){
    console.log(`You are a student`);
}
else{
    console.log(`You are not a student`);
}

const p1 = document.getElementById("p1");
const myage = document.getElementById("myage");
const mybtn = document.getElementById("mybtn");

mybtn.onclick = function(){
    val = myage.value;
    val = Number(val);
    console.log(typeof val);
    
    if(val < 0){
        p1.textContent = `Your age can't be ${val}!!!`;
    }else if(val == 0){
        p1.textContent = `Your age is ${val}, you are a new born baby!!!`;
    }else if (val <= 9){
        p1.textContent = `Your age is ${val}, you are an minor!!!`;
    }else if (val <= 19){
        p1.textContent = `Your age is ${val}, you are a adulescent!!!`;
    }else{
        p1.textContent = `Your age is ${val}, you are an adult!!!`;
    }
}