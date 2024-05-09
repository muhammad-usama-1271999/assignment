//question41: magicians: display magician names from an array.



let magicians:string[] = ["alice", "david","chris"]

function show_magicians(magicians: string[]){
    magicians.forEach((magician)=> {
        console.log(magician)
    })
}

show_magicians(magicians)