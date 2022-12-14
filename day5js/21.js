// TOPIC : Object Literals

// Object Initialisation
let obj1 = {}; // Zero Member
let person1 = { id: 1 }; // One Member
let person2 = { id: 1, name: "rahul" }; // Two Member
let person3 = { id: 1, name: "rahul", salary: 1212 }; // Three Member

// Access Member of Object
let person4 = { id: 1, name: "rohit" };
console.log(person4);
console.log(person4.id);
console.log(person4.name);

// Add New Member
let person5 = { id: 1, name: "rohit" };
person5.city = "mumbai"; // DOT NOTATION
person5["state"] = "mh"; // BRACKET NOTATION - SPL power. of SPL Chrs.
// person5.user-name = "rohitshrama"
person5["user-name"] = "rohitsharma";

console.log(person5);
