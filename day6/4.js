function addNewMessage(p1) {
  // let divRef =  document.querySelector("#message-container");
  // let textRef = document.querySelector("#text-id1");

  let divRef = p1.nextElementSibling;
  let textRef = p1.previousElementSibling;

  let newElement = `<div
                      style="
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                      "
                    >
                      <h1>${textRef.value}</h1>
                      <input type="button" value="DEL" onclick="deleteMessage(this)" />
                    </div>`;
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

function deleteMessage(p1) {
  p1.parentElement.remove();
}
