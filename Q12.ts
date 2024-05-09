//question 12: greetings: use the array from exercise 11. instead of just printing each person's name,print a message
//to them. the message should be the same for each person, but personalized with their name.


let names :string[] = ["murtaza","mazahir","umer","ashar","saba"];

let message: string = "Do you like typescript"

for ( let name of names ){
    console.log(`${name} ,${message}`);
}