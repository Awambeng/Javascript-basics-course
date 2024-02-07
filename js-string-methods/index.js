// string methods = allow you to manipulate and work with text (Strings).

// let username = "Blessing";

// we can access values of a string using the charAt() method

// Example if we want to access the 2nd character of the string Blessing we can use:

// console.log(`The second character in the string ${username} is: `, username.charAt(1));

// if you want to get the index and not the character you can use the indexOf() method.

// res = username.charAt(0);
// res1 = username.indexOf(res);
// console.log(`The index of ${res} in the string ${username} is: ${res1}`);

// getting the length of the string
// len = username.length;
// console.log(`The length of ${username} is: ${len}`);

// // trim method is used to remove space in a sring

// names = " Awambeng";
// res2 = names.trim();
// console.log(`The result when ${names} is trim is: ${res2}`);
// console.log(names.toUpperCase());

// if (names.startsWith(" ")){
//     console.log(`Your name ${names} can't start wit a space  ' '`);
// }else{
//     console.log(`Your name is valid`);
// }

const p1 = document.getElementById("p1");

const username = document.getElementById("username");

const submit = document.getElementById("submit");

const refresh = document.getElementById("refresh");

let names;

refresh.onclick = function(){
    username.value = username.defaultValue;
    p1.textContent = `Please enter your name...`
}

submit.onclick = function(){
    names = username.value;
    if(names.length === 0){
        p1.textContent =`Please you did not enter your name!!!`;
    }
    else if (names.startsWith(" ")){
        p1.textContent = `The name you entered is invalid. Your name should not start with a space ' '`;
    }
    else{
        p1.textContent = `Your name is valid. Welcome...`;
    }
}
