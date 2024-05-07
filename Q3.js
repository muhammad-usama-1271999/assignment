let name = "muhammad Usama ";
console.log(name.toLowerCase()); //for all letters show small letters 
console.log(name.toUpperCase()); //for all letters show big letters
console.log(name.replace(/\b(\w)/g, (match, firstLetter) => firstLetter.toUpperCase()));
export {};
