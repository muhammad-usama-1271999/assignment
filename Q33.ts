//question33: original number: display numbers with original suffix.



let array: number[] = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ];
array.forEach(array=>{
    let suffix = "th";
    if(array == 1){
        suffix = "st"
    }else if(array === 2){
        suffix = "nd"
    }else if(array == 3){
        suffix = "rd"
    }
        console.log(`${array}${suffix}`);
    
})

