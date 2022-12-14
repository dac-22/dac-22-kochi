// OUR Requriment - Message App
// let msg1 = "Hi";
let msg1 = { msg: "Hi", ts: "2022-12-14" };
let msg2 = { msg: "helo", ts: "2022-12-14" };

// TIMESTAMP - Inbuilt Class
let ts = new Date();
console.log(ts);

// Member function to get the Specific Details
let hour = ts.getHours();
let minutes = ts.getMinutes();

console.log(`${hour}:${minutes}`);
