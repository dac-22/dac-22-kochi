function helloSync() {
  console.log("1");
  console.log("2");
  console.log("3");
}

function helloAsync() {
  console.log("1");

  // NON BLOCKING :: ASYNC
  setTimeout(() => console.log("2"), 1000);
  setTimeout(() => console.log("22"), 1000);

  console.log("3");
  console.log("4");
}

helloSync();
helloAsync();
