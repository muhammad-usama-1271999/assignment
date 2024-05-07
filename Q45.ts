function make_car(manufacturer: string, model: string, ...options:[string, any][]):object{
    let car:{
        [key : string]:any
    }={
        manufacturer: manufacturer,
        model:model,
    };
    options.forEach(([key,value]) => (car[key] = value));
    return car;
}
console.log(make_car("toyota", "corolla" , ["color","red"],["year", 2020]));
console.log(make_car("ford","fiesta",["color", 'blue'],["sunroof",true]));
