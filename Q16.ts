let guests:string []= ["Mazahir", "Umer", "Hassam"];

console.log("Great nes for all friends! I found bigger dinner table. ")
guests.push("Awais");
guests.unshift("Fahad");
guests.splice(3,0,"salman");

console.log(guests);
// now the friend list is: ['fahad', 'mazahir', 'umer', 'salman', 'hassam', 'awais',]
guests.forEach( guests =>{
    console.log(`Dear all friends ${guests}, would you like to join me for dinner`);
})