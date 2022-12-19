let list1 = ["delhi", "calcutta", "chennai"];
let list2 = [...list1];

let list3 = [...list1, "kochi"];
let list4 = ["kochi", ...list1];

let list5 = [...list1, ...list1];
console.log(list5.length);
console.log(list5);
