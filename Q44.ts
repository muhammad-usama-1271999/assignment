//question44: sandwiches: summarize sandwich order with varying ingredients.



function make_sandwich(...items:string[]){
    console.log(`making a sandwich with: ${items.join(", ")}.`);
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce","tomato");
make_sandwich('avocado','sprouts', 'mustard', 'mayo');