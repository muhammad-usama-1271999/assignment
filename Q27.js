//in this assignment we use if_else and else_if conditions
import chalk from "chalk";
//part1
//this part is print in if condition
let alien_color = "green";
if (alien_color == "green") {
    console.log(chalk.bgGreenBright("alien is green. you earned 5 points"));
}
else if (alien_color == "yellow") {
    console.log(chalk.bgYellowBright("alien is yellow. you earned 10 points"));
}
else if (alien_color == "red") {
    console.log(chalk.bgRedBright("alien is red. you earned 15 points"));
}
//part2
//this part is print in else if condition
let alien_color2 = "yellow";
if (alien_color2 == "green") {
    console.log(chalk.bgGreenBright("alien is green. you earned 5 points"));
}
else if (alien_color2 == "yellow") {
    console.log(chalk.bgYellowBright("alien is yellow. you earned 10 points"));
}
else if (alien_color2 == "red") {
    console.log(chalk.bgRedBright("alien is red. you earned 15 points"));
}
//part3
//this part is print in else condition
let alien_color3 = "red";
if (alien_color3 == "green") {
    console.log(chalk.bgGreenBright("alien is green. you earned 5 points"));
}
else if (alien_color3 == "yellow") {
    console.log(chalk.bgYellowBright("alien is yellow. you earned 10 points"));
}
else if (alien_color3 == "red") {
    console.log(chalk.bgRedBright(" alien is red. you earned 15 points"));
}
