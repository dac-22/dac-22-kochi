let list = ["delhi", "calcutta", "chennai", "nagpur", "kanpur"];

// OLD GENERATIONAL APPROACH
for (let i = 0; i < list.length; i++) {
  let item = list[i];
  console.log(item);
}

console.log(":::::::::::::::::::::::");
for (let city of list) {
  console.log(city);
}

// () => {} // JS
// () -> {} // JAVA

console.log(":::::::::::::::::::::::");
list.forEach((item) => console.log(item));

// STREAM :: ASSIGNMENT
// forEach, map, filter
