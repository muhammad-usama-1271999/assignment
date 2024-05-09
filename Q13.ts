//question13 : your own array: think of your favorite mode of transportation, such as a motorcycle or a car, and make
//a list that stores several example. use your list to print a series of statement about these items. such as "i would like to own a Honda motorcycle."


let transports: string []= ["honda motorcycle", "honda civic" , "honda city"];

transports.map((items) =>console.log(`I would like to own a ${items}.`));