let ref1 = { id: 1, task: "react assignment 1", name: "rahul" };

// Firt Clone the Memmbers, Then add/update the id memeber and add city memeber;
// similar way we can add/update more members.
let ref2 = { ...ref1, id: 2, city: "satara" };

// something interesting :: overriding
let ref3 = { id: 3, city: "satara", ...ref1 };

let ref4 = { id: 4, ...ref1, city: "satara", id: 4 };

console.log(ref1);
console.log(ref2);
