// logical operators = used to combine or manipulate boolean values
//                     (true or false)

//                      AND = &&
//                      OR = ||
//                      NOT = !

let temp = 200;

// if(temp > 0 && temp <= 30){
//     console.log("The weather is GOOD");
// }
// else{
//     console.log("The weather is BAD");
// }

if(temp <= 0 || temp > 30){
    console.log("The weather is GOOD");
}
else{
    console.log("The weather is BAD");
}

let isSunny = true;

if (!isSunny){
    console.log("It is Cloudy");
}
else{
    console.log("It is Sunny");
}