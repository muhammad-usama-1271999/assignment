

let magicians : string[] = ["alice", "david", "chris"];

function make_great(magicians: string[]):string []{
    let greatMagicians :string[] = [];
    magicians.forEach((magician) => {
        greatMagicians.push(`${magician} the great`);
    });
    return greatMagicians;
}
function show_magicians(magicians: string[]){
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
let greatMagicians = make_great(magicians.slice());
console.log("original magicians:");
show_magicians(magicians);
console.log('great magicians:');
show_magicians(greatMagicians);