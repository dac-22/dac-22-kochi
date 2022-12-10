function addNewMessage(p1) {
  // let divRef =  document.querySelector("#message-container");
  // let textRef = document.querySelector("#text-id1");

  let divRef = p1.nextElementSibling;
  let textRef = p1.previousElementSibling;

  let newElement = `<h1>${textRef.value}</h1>`;
  divRef.innerHTML = newElement + divRef.innerHTML;

  // make empty
  textRef.value = "";
}

function checkEnter(event) {
  // Enter has been pressed
  if (event.keyCode == "13") {
    let btnRef = document.querySelector("#btn-id1");
    addNewMessage(btnRef);
  }
}
