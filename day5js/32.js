// FUNCTION CONCEPT :: No Input Type Nor Output Type.
function sum(n1, n2) {
  // Checking Undefined and Assign Default Value
  n1 = n1 || 0;
  n2 = n2 || 0;

  let result = n1 + n2;
  return result;
}

// Function Overloading
let output1 = sum();
let output2 = sum(1);
let output3 = sum(1, 2);
let output4 = sum(10, 20, 50);
console.log(output1, output2, output3, output4);
