let messageList = ["hi", "how are u", "where are u?", "mumabi"];

// THIS IS LIKER UR CONSTRUCTOR
window.addEventListener("load", () => {
  let divRef = document.querySelector("#parent");
  for (let item of messageList) {
    let previousMessage = `<div
                            style="
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                            "
                            >
                            <h1>${item}</h1>
                            <input type="button" value="DEL" onclick="deleteMessage(this)" />
                            </div>`;

    divRef.innerHTML = previousMessage + divRef.innerHTML;
  }
});

function addMessage(p1) {
  let divRef = document.querySelector("#parent");
  let textRef = p1.previousElementSibling;

  let newMessage = `<div
                    style="
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    "
                    >
                    <h1>${textRef.value}</h1>
                    <input type="button" value="DEL" onclick="deleteMessage(this)" />
                    </div>`;

  divRef.innerHTML = newMessage + divRef.innerHTML;
  textRef.value = "";
}

function checkEnterCode(event) {
  if (event.keyCode == 13) {
    let btn1Ref = document.querySelector("#btn1");
    addMessage(btn1Ref);
  }
}

function deleteMessage(p1) {
  p1.parentElement.remove();
}
