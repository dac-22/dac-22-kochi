// let outputList = ["Hello delhi", "Hello calcutta", "Hello kochin"];
let inputList = ["delhi", "calcutta", "kochin"];
// let outputList = ["<h1>delhi</h1>", "<h1>calcutta</h1>", "<h1>delhi</h1>"];

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

let outputList2 = inputList.map((item) => `<h1>${item}</h1>`);
console.log(outputList2);
