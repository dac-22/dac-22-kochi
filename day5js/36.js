// SYNCHRONOUS :: BLOCKING FUNC
function sumSync(n1, n2) {}

// Promise :: Asynchronous ::  NON BLOCKING FUNC.
async function sumAsync(n1, n2) {}

// CALLING THE FUNCTION
let output1 = sumSync(1, 1);
let output2 = sumAsync(1, 1);
console.log(output1);
console.log(output2);
