// Return all the elements that starts with 'c' letter
// outputList = ['calcutta', 'cochin'];
let inputList = ["delhi", "calcutta", "cochin", "pune", "patna", "nagpur"];

// Convential way
let outputList = [];
for (let i = 0; i < inputList.length; i++) {
  let item = inputList[i];

  if (item.startsWith("c")) {
    outputList.push(item);
  }
}
console.log(outputList);

// Functional WAY
let outputList1 = inputList.filter((item) => item.startsWith("c"));
console.log(outputList1);
