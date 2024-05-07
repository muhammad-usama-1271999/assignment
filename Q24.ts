
//equality with string

console.log("testing equality with string");

console.log("apple"  == "apple");//True

console.log("Apple" !== "Apple");//false

//use the lowercase function.

console.log("Testing with lowercase");

console.log("Apple".toLowerCase() == "apple"); //True
console.log("APPLE".toLowerCase() == "Apple");//false
//testing with upper case
console.log("testing with upper case")
console.log("Apple".toUpperCase() == "APPLE");//true

console.log("apple".toUpperCase() == "Apple");//false

//Testing with "&&" and "||" operator.

console.log("Testing with /'&& and  /'|| operators");
//testing with && operator.
console.log(true && false);//false.
//testing with || operator.
console.log(true || false);//true

//numerical testing.
console.log("numerical testing");
console.log( 10 > 5 );//true.

console.log( 9 < 4 );//false

//testing whether an items is in a array.
let fruits = ["apple", "banana", "cherry"];

console.log("Is 'apple' in fruits")
console.log(fruits.includes("Apple".toLowerCase()));//true
//testing an items is not in a array.
console.log(fruits.includes("mango".toLowerCase()));//false