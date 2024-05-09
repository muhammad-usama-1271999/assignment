//Question 3: Name cases: store a person's name in a variable, and then print that person's name in lowerCase, upperCase and titleCase.


let name: string = "muhammad Usama ";

console.log(name.toLowerCase());//for all letters show small letters 

console.log(name.toUpperCase());//for all letters show big letters

console.log(name.replace(/\b(\w)/g,(match,firstLetter)=>firstLetter.toUpperCase()));
