let places: string[] = ["saudi arab", "iran", "pakistan", "china", "qatar"];

console.log("Original order: ", places);
// ["saudi arab", "iran", "pakistan", "china", "qatar"]


console.log("Alphabetical order:",[...places].sort());
//[ 'china', 'iran', 'pakistan', 'qatar', 'saudi arab' ]


console.log("Original order: ", places);
// ["saudi arab", "iran", "pakistan", "china", "qatar"]


console.log("reverse Alphabetical order:",[...places].sort().reverse());
//[ 'saudi arab', 'qatar', 'pakistan', 'iran', 'china' ]


console.log("Original order: ", places);
// ["saudi arab", "iran", "pakistan", "china", "qatar"]


places.reverse();
console.log("Reverse order: ", places);
//[ 'qatar', 'china', 'pakistan', 'iran', 'saudi arab' ]


places.reverse();
console.log("Original order: ", places);
//[ 'saudi arab', 'iran', 'pakistan', 'china', 'qatar' ]


places.sort();
console.log("Alphabetical order: ", places);
//[ 'china', 'iran', 'pakistan', 'qatar', 'saudi arab' ]


places.reverse();
console.log("Reverse alphabetical order: ", places);
//[ 'saudi arab', 'qatar', 'pakistan', 'iran', 'china' ]