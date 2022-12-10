function addNewMessage() {
  let divRef = document.querySelector("#message-container");

  // divRef.innerHTML += "<h1>hello </h1>";
  // divRef.innerHTML = divRef.innerHTML + "<h1>hello </h1>";

  let newElement = "<h1>hello </h1>";
  // divRef.innerHTML = divRef.innerHTML + newElement;
  divRef.innerHTML = newElement + divRef.innerHTML;
}

function addNewMessageV1() {
  let divRef = document.querySelector("#message-container");
  let textRef = document.querySelector("#text-id1");

  let newElement = `<h1>${textRef.value}</h1>`;
  divRef.innerHTML = newElement + divRef.innerHTML;
}

function addNewMessageV2() {
  let divRef = document.querySelector("#message-container");
  let textRef = document.querySelector("#text-id1");

  let newElement = `<h1>${textRef.value}</h1>`;
  divRef.innerHTML = newElement + divRef.innerHTML;

  // make empty
  textRef.value = "";
}

function addNewMessage() {
  let divRef = document.querySelector("#message-container");
  let textRef = document.querySelector("#text-id1");

  let newElement = `<h1>${textRef.value}</h1>`;
  divRef.innerHTML = newElement + divRef.innerHTML;

  // make empty
  textRef.value = "";
}

function checkEnter(event) {
  // Enter has been pressed
  if (event.keyCode == "13") {
    addNewMessage();
  }
}
