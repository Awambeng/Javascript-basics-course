// string slicing = creating a substring
//                  from a portion of another string

//                  string.slice(startIndex, endIndex).

//                  note: the ending index is exclusive.

const fullName = "Awambeng Rodrick";

let firstName = fullName.slice(0, 9);
console.log(firstName)

let lastName = fullName.slice(9, 16);
console.log(lastName);

let lastCharacter = fullName.slice(-16);
console.log(lastCharacter)