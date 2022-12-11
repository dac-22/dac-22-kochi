let list = ["delhi", "caclutta", "chennai"];
console.log(list);

// Convert the OBJECT into String
let str = JSON.stringify(list);
console.log(str);

// CONVER THE STRING INTO OBJECT
let str1 = `["delhi","caclutta","chennai"]`;
let list2 = JSON.parse(str1);
console.log(list2);

let str2 = "a";
parseInt(str2);
