//question 15: changing guest list: one of your guests can't make it to the dinner, so you need to send out a new sets of
//invitations with a replacement guest.


let guests: string[] = ["mazahir", "umer", "ahtisham"];

console.log(guests);

let absentGuest = "ahtisham";

console.log(`${absentGuest}, you are busy on diner time`);

guests[2] = "hassam";
//now the list of array is : ['mzahir', 'umer', 'hassam,]
console.log(guests);

guests.forEach(guest=> {
    console.log(`My friend ${guest}, you are invited to dinner`)
})