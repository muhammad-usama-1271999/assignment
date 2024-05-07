let guests  = ["Fahad", "Mazahir", "Umer", "salman", "Hassam", "Awais" ];
console.log(` Sorry friends! unfortunately, I can invite tow friends for dinner`);

 while(guests.length >2) {
   let removedGuests= guests.pop()
//length >2 mean [1,2 'umer', 'salmen', hassam', awais,] these friends invitation are canceled
console.log(`Sorry ${removedGuests}, i cant invite you on dinner `);
 }
// and length= 2 ['fahad', 'mazahir'] also invited for dinner
 guests.forEach(guest =>{
 console.log(`${guest}, are still invited for dinner`);
 })
 