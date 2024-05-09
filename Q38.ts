//question38:cities: describing cities with a function.


function describe_city(city: string, country:string = "Pakistan"){
    console.log(`The ${city} city is in ${country}`);
}
describe_city("hyderabad");
describe_city("Karachi");
describe_city("Madina", "Saudi Arab");