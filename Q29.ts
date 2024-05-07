


import chalk from "chalk"

let fruits:string[]=["Apple", "Banana", "Cherry", "Mango", "Strawberry"]
if(fruits.includes("Apple")){
    console.log(chalk.red("we are really likes apple"));
}
if(fruits.includes("Banana")){
    console.log(chalk.yellow("we are really likes Banana"));
}
if(fruits.includes("Cherry")){
    console.log(chalk.bgRedBright("we are really likes Cherry"));
}
if(fruits.includes("Mango")){
    console.log(chalk.bgYellow("we are really likes Mango"));
}
if(fruits.includes("Strawberry")){
    console.log(chalk.bgRgb(100,0,0)("we are really likes Strawberry"));
}