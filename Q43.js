//question 43: unchanged magicians: preserve the original magician names while create new "great" list.
let magicians = ["alice", "david", "chris"];
function make_great(magicians) {
    let greatMagicians = [];
    magicians.forEach((magician) => {
        greatMagicians.push(`${magician} the great`);
    });
    return greatMagicians;
}
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
let greatMagicians = make_great(magicians.slice());
console.log("original magicians:");
show_magicians(magicians);
console.log('great magicians:');
show_magicians(greatMagicians);
export {};
