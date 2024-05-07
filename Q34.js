let pizzas = ["pepperoni", "margherita", "hawaiian"];
for (let i = 0; i < pizzas.length; i++) {
    console.log(`I like ${pizzas[i]} pizza.`);
    if (pizzas[i] === pizzas[0]) {
        console.log(`I really like ${pizzas[i]} pizza`);
    }
}
if (pizzas[0]) {
    console.log(`I really like ${pizzas[0]} pizza`);
}
export {};
