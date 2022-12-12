// let outputList = ["Hello delhi", "Hello calcutta", "Hello kochin"];
let inputList = ["delhi", "calcutta", "kochin"];

// Conventional way of thinking.
let outputList = [];
for (let i = 0; i < inputList.length; i++) {
  let item = inputList[i];
  // let transformItem = "Hello " + item;
  let transformItem = `Hello ${item}`;
  outputList.push(transformItem);
}
console.log(outputList);

// Functional Way using Lamda/Arrow
let outputList1 = inputList.map((item) => `Hello ${item}`);
console.log(outputList1);
