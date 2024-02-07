// for loop = repeat some code a limited amount of times

// let i;

// for (i=0; i<=10; i++){
//     console.log(`Hello i=${i}`);
// }

// to skip an iteration you can use the keyword continue

// let j;
// for (j=1; j<20; j++){
//     if(j==2 || j == 4){
//         continue;
//     }
//     else{
//         console.log(`Hello world, j=${j}`);
//     }
// }

// to go out of the loop you can use the keyword break

let z;

for (z=5; z<26; z+=5){
    if(z == 15){
        console.log(`Hello z=${z}`);
        break;
    }else{
        console.log(`The value of z is ${z}`);
    }
}