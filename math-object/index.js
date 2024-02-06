// Math = built-in object that provides a 
//        collection of properties and methods

// let x = Math.PI;

// console.log(x);

// let x = 3;
// let y = 4;
// let z;
// let z1;
// let s;
// let max;

// z = Math.ceil(x); //rounding up
// z1 = Math.floor(x); //rounding down
// x = Math.pow(x, y);
// s = Math.sin(45);
// max = Math.max(x, y, z, s);

// console.log(`The value of z is: ${z}`);
// console.log(`The value of z1 is: ${z1}`);
// console.log(`The value of x is: ${x}`);
// console.log(`The value of s is: ${s}`);
// console.log(`The max value is: ${max}`);

p1 = document.getElementById("p1");
p2 = document.getElementById("p2");
p3 = document.getElementById("p3");
p4 = document.getElementById("p4");
p5 = document.getElementById("p5");
result = document.getElementById("result");

p1.onclick = function(){
    myinput = document.getElementById("myinput").value;
    val = Math.ceil(myinput)
    result.textContent = `Rounding Up ${myinput} gives: ${val}`;
}

p2.onclick = function(){
    myinput = document.getElementById("myinput").value;
    val = Math.floor(myinput)
    result.textContent = `Rounding Down ${myinput} gives: ${val}`;
}

p3.onclick = function(){
    myinput = document.getElementById("myinput").value;
    val = Math.sin(myinput)
    result.textContent = `Sin ${myinput} is: ${val}`;
}

p4.onclick = function(){
    myinput = document.getElementById("myinput").value;
    val = Math.cos(myinput)
    result.textContent = `Cos ${myinput} is: ${val}`;
}

p5.onclick = function(){
    myinput = document.getElementById("myinput").value;
    val = Math.tan(myinput)
    result.textContent = `Tan ${myinput} is: ${val}`;
}

