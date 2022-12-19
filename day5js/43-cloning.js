let ref1 = { id: 1, task: "react assignment 1" };

// DUPLICATE :: CLONE
let ref2 = { ...ref1 };

// Update REF1
ref1.country = "FR";

// Update REF2
ref2.venue = "QATAR";

console.log(ref1);
console.log(ref2);
