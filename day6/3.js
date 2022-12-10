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
