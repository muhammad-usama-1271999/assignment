//question28: stages of human life: determine of person's life stage with if-else chain.
//this is the age periods of human life
import inquirer from "inquirer";
let userInput = await inquirer.prompt([
    {
        name: "age",
        type: "number",
        message: "please inter your age",
    }
]);
if (userInput.age < 2) {
    console.log("The person is a baby");
}
else if (userInput.age < 4) {
    console.log("The person is a toddler");
}
else if (userInput.age < 13) {
    console.log("The person is a kid");
}
else if (userInput.age < 20) {
    console.log("The person is a teenager");
}
else if (userInput.age < 30) {
    console.log("The person is a young");
}
else if (userInput.age < 65) {
    console.log("The person is an adult");
}
else {
    console.log("The person is an elder");
}
