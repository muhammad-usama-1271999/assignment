//question 42: great magicians: add "the great" to magicians names.
let magicians = ["alice", "david", "chris"];
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + "the great ";
    }
}
make_great(magicians);
show_magicians(magicians);
export {};
